// lightformat.mjs - dependency-free, scanner-based JS line breaker.
//
// Prettier produces the best output but degrades badly (minutes / OOM) on the
// multi-megabyte shared bundles in this app. This formatter only inserts new
// lines and indentation; it never rewrites tokens, so the result is a faithful
// 1:1 rendering of the original source that can still be searched and diffed.
//
// It tracks enough lexical state to avoid breaking inside:
//   '...' "..." `...${...}` // ... /* ... */ and /regex/

/**
 * @param {string} src minified JavaScript
 * @param {{indent?: string}} [opts]
 * @returns {string} reformatted JavaScript
 */
export function lightFormat(src, opts = {}) {
  const IND = opts.indent ?? "  ";
  const out = [];
  let depth = 0; // {} depth, drives indentation
  let parenDepth = 0; // () depth, suppresses breaks inside for(;;)
  let i = 0;
  let lineHasContent = false;
  let prevSignificant = "";
  const n = src.length;

  const newline = () => {
    out.push("\n");
    if (depth > 0) out.push(IND.repeat(depth));
    lineHasContent = false;
  };
  const push = (s) => {
    out.push(s);
    lineHasContent = true;
  };

  /** True when a `/` here starts a regex literal rather than division. */
  const regexAllowed = () => {
    if (prevSignificant === "") return true;
    if ("(,=:[!&|?{};+-*%~^<>".includes(prevSignificant)) return true;
    const tail = out.join("").slice(-48);
    return /(?:^|[\s;{}(])(?:return|typeof|instanceof|in|of|new|delete|void|throw|case|do|else|yield|await)$/.test(
      tail,
    );
  };

  while (i < n) {
    const c = src[i];

    if (c === "/" && src[i + 1] === "/") {
      const end = src.indexOf("\n", i);
      const stop = end === -1 ? n : end;
      push(src.slice(i, stop));
      i = stop;
      continue;
    }
    if (c === "/" && src[i + 1] === "*") {
      const end = src.indexOf("*/", i + 2);
      const stop = end === -1 ? n : end + 2;
      push(src.slice(i, stop));
      i = stop;
      continue;
    }

    if (c === "/" && regexAllowed()) {
      let j = i + 1,
        inClass = false,
        ok = false;
      while (j < n) {
        const d = src[j];
        if (d === "\\") {
          j += 2;
          continue;
        }
        if (d === "\n") break;
        if (d === "[") inClass = true;
        else if (d === "]") inClass = false;
        else if (d === "/" && !inClass) {
          ok = true;
          j++;
          break;
        }
        j++;
      }
      if (ok) {
        while (j < n && /[a-z]/.test(src[j])) j++;
        push(src.slice(i, j));
        prevSignificant = "/";
        i = j;
        continue;
      }
    }

    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      let j = i + 1;
      while (j < n) {
        const d = src[j];
        if (d === "\\") {
          j += 2;
          continue;
        }
        if (quote === "`" && d === "$" && src[j + 1] === "{") {
          let k = j + 2,
            bd = 1;
          while (k < n && bd > 0) {
            const e = src[k];
            if (e === "\\") {
              k += 2;
              continue;
            }
            if (e === '"' || e === "'" || e === "`") {
              const q2 = e;
              k++;
              while (k < n) {
                if (src[k] === "\\") {
                  k += 2;
                  continue;
                }
                if (src[k] === q2) {
                  k++;
                  break;
                }
                k++;
              }
              continue;
            }
            if (e === "{") bd++;
            else if (e === "}") bd--;
            if (bd === 0) {
              k++;
              break;
            }
            k++;
          }
          j = k;
          continue;
        }
        if (d === quote) {
          j++;
          break;
        }
        j++;
      }
      const stop = Math.min(j, n);
      push(src.slice(i, stop));
      prevSignificant = quote;
      i = stop;
      continue;
    }

    if (c === "{") {
      push("{");
      depth++;
      newline();
      prevSignificant = "{";
      i++;
      continue;
    }
    if (c === "}") {
      if (lineHasContent) newline();
      depth = Math.max(0, depth - 1);
      out.push(IND.repeat(depth) + "}");
      lineHasContent = true;
      let j = i + 1;
      while (j < n && (src[j] === ")" || src[j] === ";" || src[j] === ",")) {
        out.push(src[j]);
        if (src[j] === ")") parenDepth = Math.max(0, parenDepth - 1);
        j++;
      }
      newline();
      prevSignificant = "}";
      i = j;
      continue;
    }
    if (c === "(") {
      parenDepth++;
      push(c);
      prevSignificant = c;
      i++;
      continue;
    }
    if (c === ")") {
      parenDepth = Math.max(0, parenDepth - 1);
      push(c);
      prevSignificant = c;
      i++;
      continue;
    }
    if (c === ";") {
      push(";");
      if (parenDepth === 0) newline();
      prevSignificant = ";";
      i++;
      continue;
    }
    if (c === ",") {
      push(",");
      if (parenDepth <= 1) newline();
      prevSignificant = ",";
      i++;
      continue;
    }

    if (/\s/.test(c)) {
      if (lineHasContent) push(" ");
      while (i < n && /\s/.test(src[i]) && src[i] !== "\n") i++;
      if (i < n && src[i] === "\n") {
        i++;
        if (lineHasContent) newline();
      }
      continue;
    }
    push(c);
    prevSignificant = c;
    i++;
  }
  return (
    out
      .join("")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n") + "\n"
  );
}

export default lightFormat;
