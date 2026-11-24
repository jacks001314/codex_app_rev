"use strict"
;((exports.ids = [650]),
  (exports.modules = {
    14553(e, t, a) {
      var i = a(87728),
        n = a.n(i),
        r = a(25133),
        s = a.n(r),
        o = a(12412),
        l = a(64628),
        c = a(40893),
        d = a(51944)
      let { posix: p } = s(),
        f = `
scan() {
  if [ -d "$1" ]; then
    rg --files --hidden --follow --null --glob SKILL.md --glob '!**/{.git,node_modules}/**' -- "$1" |
      while IFS= read -r -d '' skill; do printf '%s\\0%s\\0' "$2" "$skill" || exit 141; done
    code=$?
    case "$code" in 0|1) ;; 2) discovery_code=2 ;; 141) exit 0 ;; *) exit "$code" ;; esac
  fi
}
{
  discovery_code=0
  scan "$HOME/.agents/skills" user
  scan "$\{CODEX_HOME:-$HOME/.codex}/skills" user
  directory=$1
  while :; do
    scope=repo
    if [ "$directory" = "$HOME" ]; then scope=user; fi
    scan "$directory/.agents/skills" "$scope"
    scan "$directory/.codex/skills" "$scope"
    if [ "$directory" = / ] || [ -e "$directory/.git" ]; then break; fi
    directory=$(dirname -- "$directory")
  done
  cache="$\{CODEX_HOME:-$HOME/.codex}/plugins/cache"
  scan "$cache" "$cache"
  exit "$discovery_code"
} | {
  # Stock macOS Bash lacks associative arrays. %q makes each path one line,
  # even when the filename contains a newline. Compare complete lines literally.
  shopt -u nocasematch
  seen=$'\\n'
  count=0
  while IFS= read -r -d '' scope && IFS= read -r -d '' skill; do
    printf -v key '%q' "$skill"
    if [[ "$seen" == *$'\\n'"$key"$'\\n'* ]]; then continue; fi
    seen+="$key"$'\\n'
    printf '%s\\0%s\\0' "$scope" "$skill"
    count=$((count + 1))
    if [ "$count" -ge 512 ]; then break; fi
  done
}
`,
        u = /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/,
        h = String.raw`
import base64, os, stat, sys

def skill_header(data):
    # Each batch starts a fresh Python process. Scan bytes directly to avoid importing re.
    # Trim only common headers, including the closing delimiter SKILL_FRONTMATTER needs.
    # Send the full file when we cannot identify that delimiter.
    newline = data.find(b"\n")
    if newline < 0 or data[:newline].rstrip() != b"---":
        return data
    first = data[newline + 1:newline + 2]
    if not (first.isalpha() or first == b"#"):
        return data
    end = data.find(b"\n---", newline + 1)
    while end >= 0:
        after = end + 4
        if not data[after:after + 1].strip():
            return data[:after + 1]
        end = data.find(b"\n---", after)
    return data

max_file_bytes = int(sys.argv[1])
files = sys.argv[3:]
remaining_bytes = int(sys.argv[2]) - 2 * len(files)
for path in files:
    result = b"!"
    try:
        metadata = os.stat(path)
        if stat.S_ISREG(metadata.st_mode) and metadata.st_size <= max_file_bytes:
            with open(path, "rb") as source:
                contents = source.read(max_file_bytes + 1)
            if len(contents) <= max_file_bytes:
                if os.path.basename(path) == "SKILL.md":
                    contents = skill_header(contents)
                encoded = base64.b64encode(contents)
                result = b"?"
                if len(encoded) <= remaining_bytes:
                    remaining_bytes -= len(encoded)
                    result = b"+" + encoded
    except FileNotFoundError:
        result = b"-"
    except OSError:
        result = b"?"
    sys.stdout.buffer.write(result + b"\0")
`,
        m = c.Ikc({
          name: c.YjP().trim().min(1),
          description: c.YjP(),
          metadata: c.Ikc({ "short-description": c.YjP().optional() }).optional(),
        }),
        b = c.Ikc({
          interface: c
            .Ikc({
              display_name: c.YjP().optional(),
              short_description: c.YjP().optional(),
              icon_small: c.YjP().optional(),
              icon_large: c.YjP().optional(),
              brand_color: c.YjP().optional(),
              default_prompt: c.YjP().optional(),
            })
            .optional(),
        }),
        w = c.Ikc({ extensions: c.Ikc({ "com.openai": c.Ikc({ publicSkills: c.YOg(c.YjP()) }) }) })
      async function y(e, t, a, i) {
        i?.throwIfAborted()
        let n = a.get(t)
        if ("?" === n)
          return (async function (e, t) {
            try {
              return await (async function (e, t) {
                let a = await e.stat(t)
                if (!a.isFile() || (null != a.size && a.size > 1048576))
                  throw Error("Skill metadata is not a readable text file")
                let i = 0
                return new Response(
                  (await e.readFile(t)).pipeThrough(
                    new TransformStream({
                      transform(e, t) {
                        if ((i += e.byteLength) > 1048576) throw Error("Skill metadata exceeds the size limit")
                        t.enqueue(e)
                      },
                    }),
                  ),
                ).text()
              })(e, t)
            } catch (e) {
              if (e instanceof Error && /ENOENT|No such file or directory/.test(e.message)) return null
              throw e
            }
          })(e, t)
        if ("-" === n) return null
        if (null == n || !n.startsWith("+")) throw Error("Unable to read skill metadata")
        let r = (0, o.K)(n.slice(1))
        if (r.byteLength > 1048576) throw Error("Skill metadata exceeds the size limit")
        return new TextDecoder().decode(r)
      }
      a.d(
        t,
        {},
        {
          readHostedSkills: async function (e, t, a) {
            let i = a?.signal
            i?.throwIfAborted()
            let r = await (0, d.SD)(
              await e.spawn({
                args: ["bash", "-o", "pipefail", "-c", f, "cloud-skills", t],
                cwd: t,
                signal: i,
                timeoutMs: 1e4,
              }),
            )
            if ((i?.throwIfAborted(), 0 !== r.code && 2 !== r.code && 141 !== r.code))
              throw Error("Unable to discover container skills")
            let s = {
                cwd: t,
                skills: [],
                errors: 2 === r.code ? [{ path: t, message: "Unable to discover some container skills" }] : [],
              },
              o = n()(r.stdout.split("\0").slice(0, -1), 2),
              c = new Map()
            for (let r of n()(o, 32)) {
              i?.throwIfAborted()
              let n = r.flatMap(([, e]) => [
                  e,
                  p.join(p.dirname(e), "SKILL.json"),
                  p.join(p.dirname(e), "agents/openai.yaml"),
                ]),
                o = new Map(
                  r.map(([e, t]) => [
                    t,
                    (function (e, t) {
                      if (!p.isAbsolute(e)) return null
                      let [a, i, n, r] = p.relative(e, t).split("/")
                      return a && i && n && r && ".." !== a ? p.join(e, a, i, n, ".codex-plugin/plugin.json") : null
                    })(e, t),
                  ]),
                ),
                f = Array.from(new Set(o.values())).filter((e) => null != e && !c.has(e))
              n.push(...f)
              let g = await (0, d.SD)(
                await e.spawn({
                  args: [
                    "bash",
                    "--norc",
                    "-c",
                    'exec python3 -I -S -c "$@"',
                    "skill-metadata",
                    h,
                    String(1048576),
                    String(9e5),
                    ...n,
                  ],
                  cwd: t,
                  signal: i,
                  timeoutMs: 1e4,
                }),
              )
              if ((i?.throwIfAborted(), 0 !== g.code && 127 !== g.code))
                throw Error("Unable to read container skill metadata")
              let k = 127 === g.code ? n.map(() => "?") : g.stdout.split("\0").slice(0, -1),
                $ = new Map(n.map((e, t) => [e, k[t]]))
              ;(await Promise.all(
                f.map(async (t) => {
                  try {
                    let a = await y(e, t, $, i),
                      n = null == a ? null : w.safeParse(JSON.parse(a))
                    c.set(t, n?.success ? new Set(n.data.extensions["com.openai"].publicSkills) : null)
                  } catch {
                    ;(i?.throwIfAborted(), c.set(t, null))
                  }
                }),
              ),
                await Promise.all(
                  r.map(async ([t, a]) => {
                    try {
                      if (!p.isAbsolute(a) || "SKILL.md" !== p.basename(a)) throw Error("Invalid skill path")
                      let n = await y(e, a, $, i),
                        r = u.exec(n ?? "")
                      if (null == r) throw Error("Missing skill frontmatter")
                      let d = m.parse((0, l.qg)(r[1])),
                        f = p.dirname(a),
                        h =
                          (await y(e, p.join(f, "SKILL.json"), $, i)) ??
                          (await y(e, p.join(f, "agents/openai.yaml"), $, i)),
                        w = null == h ? void 0 : b.parse((0, l.qg)(h)).interface,
                        g = o.get(a),
                        k = null == g ? null : c.get(g),
                        _ = {
                          ...(null == k ? {} : { isPublic: k.has(d.name) }),
                          name: d.name,
                          description: d.description,
                          shortDescription: d.metadata?.["short-description"],
                          path: a,
                          scope: "repo" === t ? "repo" : "user",
                          enabled: !0,
                          pluginId: null,
                          interface:
                            null == w
                              ? void 0
                              : {
                                  displayName: w.display_name,
                                  shortDescription: w.short_description,
                                  iconSmall: null == w.icon_small ? void 0 : p.resolve(f, w.icon_small),
                                  iconLarge: null == w.icon_large ? void 0 : p.resolve(f, w.icon_large),
                                  iconSmallUrl: null,
                                  iconLargeUrl: null,
                                  brandColor: w.brand_color,
                                  defaultPrompt: w.default_prompt,
                                },
                        }
                      s.skills.push(_)
                    } catch {
                      s.errors.push({ path: a, message: "Unable to read skill metadata" })
                    }
                  }),
                ).then(
                  () => (
                    i?.throwIfAborted(),
                    a?.onBatch?.({ data: [{ ...s, skills: [...s.skills], errors: [...s.errors] }] })
                  ),
                ))
            }
            return (i?.throwIfAborted(), { data: [s] })
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-650-677fb0ac5aafeb17.js.map
