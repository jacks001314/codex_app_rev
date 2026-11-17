// Exports string cross-references and decompilation for security/protocol anchors.
//@category CodexReverseEngineering
import ghidra.app.decompiler.DecompInterface;
import ghidra.app.decompiler.DecompileResults;
import ghidra.app.script.GhidraScript;
import ghidra.program.model.address.Address;
import ghidra.program.model.listing.Data;
import ghidra.program.model.listing.DataIterator;
import ghidra.program.model.listing.Function;
import ghidra.program.model.listing.FunctionIterator;
import ghidra.program.model.symbol.Reference;

import java.io.BufferedWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

public class ExportKeyFindings extends GhidraScript {
    private static final String[] ANCHORS = {
        "unsupported method: ",
        "invalid request: ",
        "start_audio_recording",
        "stop_audio_recording",
        "get_window_state",
        "window id is required",
        "coordinate input geometry is unavailable",
        "click_count must be >= 1",
        "right double click is not supported",
        "perform UIA secondary action",
        "secondary action '",
        "no cached app state is available for ",
        "Computer Use requires approval to use ",
        "AppApprovalRequired",
        "launch_app requires an installed app id",
        "launch_app does not support pid app identifiers",
        "window bounds changed; call get_window_state",
        "user input was detected in this window",
        "window is not a usable app window",
        "window is minimized",
        "unknown screenshotId ",
        "no screenshots captured for ",
        "unsupported scroll direction: ",
        "pages must be a finite number > 0",
        "unsupported mouse_button: ",
        "unsupported key: ",
        "failed to install keyboard hook",
        "failed to install mouse hook",
        "Computer Use is disabled by policy",
        "Computer Use is not allowed on this app by policy",
        "is not allowed on the current browser URL",
        "computer-use turn interrupted by physical Escape key",
        "Computer Use was stopped by the user with the physical Escape key",
        "send window capture request",
        "window capture timed out",
        "get UI root element",
        "read UIA value",
        "set UIA value",
        "diagnostic_state",
        "list_apps",
        "launch_app",
        "list_windows",
        "get_window",
        "activate_window",
        "perform_secondary_action",
        "set_value",
        "click_element",
        "scroll_element",
        "click",
        "drag",
        "scroll",
        "type_text",
        "press_key",
        "close",
        "end_turn",
        "x-oai-cua-approved-app",
        "x-oai-cua-request-budget-ms",
        "--parent-pid",
        "max_duration_ms must be from ",
        "captured computer audio is too large",
    };

    private static String safe(String value) {
        return value.replaceAll("[^A-Za-z0-9._-]+", "_");
    }

    private static void addAnchorHits(Map<Address, Set<String>> hits, Address base,
                                      String text, String anchor) {
        int start = 0;
        while (start < text.length()) {
            int offset = text.indexOf(anchor, start);
            if (offset < 0) return;
            hits.computeIfAbsent(base.add(offset), k -> new LinkedHashSet<>()).add(anchor);
            start = offset + 1;
        }
    }

    @Override
    public void run() throws Exception {
        String[] args = getScriptArgs();
        if (args.length < 1) {
            printerr("usage: ExportKeyFindings.java <output-directory>");
            return;
        }
        Path output = Paths.get(args[0]).toAbsolutePath();
        Files.createDirectories(output);

        Path functionsFile = output.resolve("functions.tsv");
        try (BufferedWriter out = Files.newBufferedWriter(functionsFile, StandardCharsets.UTF_8)) {
            out.write("entry\tname\tsize\texternal\tthunk\n");
            FunctionIterator functions = currentProgram.getFunctionManager().getFunctions(true);
            while (functions.hasNext() && !monitor.isCancelled()) {
                Function f = functions.next();
                out.write(String.format(Locale.ROOT, "%s\t%s\t%d\t%s\t%s%n",
                    f.getEntryPoint(), f.getName(), f.getBody().getNumAddresses(),
                    f.isExternal(), f.isThunk()));
            }
        }

        // Build references to the exact interior addresses of substring literals.
        Map<Address, Set<String>> anchorHits = new TreeMap<>();
        DataIterator dataIterator = currentProgram.getListing().getDefinedData(true);
        while (dataIterator.hasNext() && !monitor.isCancelled()) {
            Data data = dataIterator.next();
            if (data == null) continue;
            Object value = data.getValue();
            if (!(value instanceof String text)) continue;
            for (String anchor : ANCHORS) {
                addAnchorHits(anchorHits, data.getAddress(), text, anchor);
            }
        }

        Path xrefsFile = output.resolve("string_xrefs.tsv");
        Map<Function, Set<String>> keyFunctions = new LinkedHashMap<>();
        try (BufferedWriter out = Files.newBufferedWriter(xrefsFile, StandardCharsets.UTF_8)) {
            out.write("anchor\tstring_address\treference_from\tfunction_entry\tfunction_name\n");
            for (Map.Entry<Address, Set<String>> entry : anchorHits.entrySet()) {
                Address stringAddress = entry.getKey();
                for (Reference reference : getReferencesTo(stringAddress)) {
                    Address from = reference.getFromAddress();
                    Function function = getFunctionContaining(from);
                    String functionEntry = function == null ? "" : function.getEntryPoint().toString();
                    String functionName = function == null ? "" : function.getName();
                    for (String anchor : entry.getValue()) {
                        out.write(anchor.replace('\t', ' ') + "\t" + stringAddress + "\t" +
                                  from + "\t" + functionEntry + "\t" + functionName + "\n");
                    }
                    if (function != null) {
                        keyFunctions.computeIfAbsent(function, k -> new LinkedHashSet<>())
                                   .addAll(entry.getValue());
                    }
                }
            }
        }

        DecompInterface decompiler = new DecompInterface();
        decompiler.toggleCCode(true);
        decompiler.toggleSyntaxTree(false);
        decompiler.setSimplificationStyle("normalize");
        if (!decompiler.openProgram(currentProgram)) {
            printerr("decompiler failed to open current program");
            return;
        }

        Path combined = output.resolve("key_functions.c");
        Path decompiledDir = output.resolve("decompiled");
        Files.createDirectories(decompiledDir);
        try (BufferedWriter all = Files.newBufferedWriter(combined, StandardCharsets.UTF_8)) {
            for (Map.Entry<Function, Set<String>> entry : keyFunctions.entrySet()) {
                if (monitor.isCancelled()) break;
                Function function = entry.getKey();
                DecompileResults results = decompiler.decompileFunction(function, 180, monitor);
                if (results == null || !results.decompileCompleted() ||
                    results.getDecompiledFunction() == null) {
                    all.write("/* FAILED DECOMPILE: " + function.getEntryPoint() + " " +
                              function.getName() + " */\n\n");
                    continue;
                }
                String code = results.getDecompiledFunction().getC();
                String name = function.getEntryPoint() + "_" + safe(function.getName());
                Path individual = decompiledDir.resolve(name + ".c");
                Files.writeString(individual, code, StandardCharsets.UTF_8);

                all.write("/* Function: " + function.getEntryPoint() + " " + function.getName() + "\n");
                all.write(" * Size: " + function.getBody().getNumAddresses() + " bytes\n");
                all.write(" * Anchors: " + String.join(" | ", entry.getValue()) + "\n");
                all.write(" */\n\n");
                all.write(code);
                all.write("\n\n");
            }
        }

        decompiler.dispose();
        println("Wrote " + anchorHits.size() + " referenced anchor addresses, " +
                keyFunctions.size() + " key functions to " + output);
    }
}
