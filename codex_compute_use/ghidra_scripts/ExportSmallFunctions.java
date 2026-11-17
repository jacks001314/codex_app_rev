// Decompile a small set of security-relevant functions from the analyzed project.
//@category CodexReverseEngineering
import ghidra.app.decompiler.DecompInterface;
import ghidra.app.decompiler.DecompileResults;
import ghidra.app.script.GhidraScript;
import ghidra.program.model.address.Address;
import ghidra.program.model.listing.Function;

import java.io.BufferedWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class ExportSmallFunctions extends GhidraScript {
    private static final String[] TARGETS = {
        "14000572d", // AppApprovalRequired helper
        "14008ec73",
        "140096ee5", // app policy
        "1400a7235", // approved-app metadata lookup
        "1400a7db2", // end_turn
        "1400a88e4", // window usability / user-input guard
        "1400a95ae", // current-window coordinate input check
        "1400ae4b9"  // --parent-pid parsing / startup
    };

    @Override
    public void run() throws Exception {
        String[] args = getScriptArgs();
        if (args.length < 1) {
            printerr("usage: ExportSmallFunctions.java <output-file>");
            return;
        }
        Path output = Paths.get(args[0]).toAbsolutePath();
        Files.createDirectories(output.getParent());

        DecompInterface decompiler = new DecompInterface();
        decompiler.toggleCCode(true);
        decompiler.toggleSyntaxTree(false);
        decompiler.setSimplificationStyle("decompile");
        if (!decompiler.openProgram(currentProgram)) {
            printerr("decompiler failed to open current program");
            return;
        }

        try (BufferedWriter out = Files.newBufferedWriter(output, StandardCharsets.UTF_8)) {
            out.write("/* Targeted Ghidra decompilation; addresses are image-relative VAs. */\n\n");
            for (String hex : TARGETS) {
                if (monitor.isCancelled()) break;
                Address address = currentProgram.getAddressFactory().getDefaultAddressSpace()
                    .getAddress(hex);
                Function function = getFunctionAt(address);
                out.write("/* Target: 0x" + hex + " */\n");
                if (function == null) {
                    out.write("/* FAILED: no function at target address */\n\n");
                    continue;
                }
                out.write("/* Name: " + function.getName() + "\n");
                out.write(" * Entry: " + function.getEntryPoint() + "\n");
                out.write(" * Size: " + function.getBody().getNumAddresses() + " bytes\n");
                out.write(" */\n");
                DecompileResults results = decompiler.decompileFunction(function, 120, monitor);
                if (results != null && results.decompileCompleted() &&
                    results.getDecompiledFunction() != null) {
                    out.write(results.getDecompiledFunction().getC());
                    out.write("\n\n");
                } else {
                    String reason = results == null ? "null decompile result" :
                        results.getErrorMessage();
                    out.write("/* FAILED DECOMPILE: " + reason + " */\n\n");
                }
            }
        } finally {
            decompiler.dispose();
        }
        println("Wrote targeted decompilation to " + output);
    }
}
