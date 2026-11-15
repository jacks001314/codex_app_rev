"use strict"
;((exports.ids = [650]),
  (exports.modules = {
    14553(e, t, r) {
      var i = r(87728),
        s = r.n(i),
        o = r(25133),
        a = r.n(o),
        n = r(12412),
        l = r(64628),
        c = r(35553),
        d = r(51944)
      let { posix: p } = a(),
        u = `
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
        m = `
import base64, os, stat, sys

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
                encoded = base64.b64encode(contents)
                result = b"?"
                if len(encoded) <= remaining_bytes:
                    remaining_bytes -= len(encoded)
                    result = b"+" + encoded
    except FileNotFoundError:
        result = b"-"
    except OSError:
        result = b"?"
    sys.stdout.buffer.write(result + b"\\0")
`,
        f = c.object({
          name: c.string().trim().min(1),
          description: c.string(),
          metadata: c.object({ "short-description": c.string().optional() }).optional(),
        }),
        h = c.object({
          interface: c
            .object({
              display_name: c.string().optional(),
              short_description: c.string().optional(),
              icon_small: c.string().optional(),
              icon_large: c.string().optional(),
              brand_color: c.string().optional(),
              default_prompt: c.string().optional(),
            })
            .optional(),
        }),
        b = c.object({ extensions: c.object({ "com.openai": c.object({ publicSkills: c.array(c.string()) }) }) })
      async function g(e, t, r, i) {
        i?.throwIfAborted()
        let s = r.get(t)
        if ("?" === s)
          return (async function (e, t) {
            try {
              return await (async function (e, t) {
                let r = await e.stat(t)
                if (!r.isFile() || (null != r.size && r.size > 1048576))
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
        if ("-" === s) return null
        if (null == s || !s.startsWith("+")) throw Error("Unable to read skill metadata")
        let o = (0, n.K)(s.slice(1))
        if (o.byteLength > 1048576) throw Error("Skill metadata exceeds the size limit")
        return new TextDecoder().decode(o)
      }
      r.d(
        t,
        {},
        {
          readHostedSkills: async function (e, t, r) {
            let i = r?.signal
            i?.throwIfAborted()
            let o = await (0, d.SD)(
              await e.spawn({
                args: ["bash", "-o", "pipefail", "-c", u, "cloud-skills", t],
                cwd: t,
                signal: i,
                timeoutMs: 1e4,
              }),
            )
            if ((i?.throwIfAborted(), 0 !== o.code && 2 !== o.code && 141 !== o.code))
              throw Error("Unable to discover container skills")
            let a = {
                cwd: t,
                skills: [],
                errors: 2 === o.code ? [{ path: t, message: "Unable to discover some container skills" }] : [],
              },
              n = s()(o.stdout.split("\0").slice(0, -1), 2),
              c = new Map()
            for (let o of s()(n, 32)) {
              i?.throwIfAborted()
              let s = o.flatMap(([, e]) => [
                  e,
                  p.join(p.dirname(e), "SKILL.json"),
                  p.join(p.dirname(e), "agents/openai.yaml"),
                ]),
                n = new Map(
                  o.map(([e, t]) => [
                    t,
                    (function (e, t) {
                      if (!p.isAbsolute(e)) return null
                      let [r, i, s, o] = p.relative(e, t).split("/")
                      return r && i && s && o && ".." !== r ? p.join(e, r, i, s, ".codex-plugin/plugin.json") : null
                    })(e, t),
                  ]),
                ),
                u = Array.from(new Set(n.values())).filter((e) => null != e && !c.has(e))
              s.push(...u)
              let y = await (0, d.SD)(
                await e.spawn({
                  args: [
                    "bash",
                    "--norc",
                    "-c",
                    'exec python3 -I -S -c "$@"',
                    "skill-metadata",
                    m,
                    String(1048576),
                    String(9e5),
                    ...s,
                  ],
                  cwd: t,
                  signal: i,
                  timeoutMs: 1e4,
                }),
              )
              if ((i?.throwIfAborted(), 0 !== y.code && 127 !== y.code))
                throw Error("Unable to read container skill metadata")
              let w = 127 === y.code ? s.map(() => "?") : y.stdout.split("\0").slice(0, -1),
                $ = new Map(s.map((e, t) => [e, w[t]]))
              ;(await Promise.all(
                u.map(async (t) => {
                  try {
                    let r = await g(e, t, $, i),
                      s = null == r ? null : b.safeParse(JSON.parse(r))
                    c.set(t, s?.success ? new Set(s.data.extensions["com.openai"].publicSkills) : null)
                  } catch {
                    ;(i?.throwIfAborted(), c.set(t, null))
                  }
                }),
              ),
                await Promise.all(
                  o.map(async ([t, r]) => {
                    try {
                      if (!p.isAbsolute(r) || "SKILL.md" !== p.basename(r)) throw Error("Invalid skill path")
                      let s = await g(e, r, $, i),
                        o = /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/.exec(s ?? "")
                      if (null == o) throw Error("Missing skill frontmatter")
                      let d = f.parse((0, l.qg)(o[1])),
                        u = p.dirname(r),
                        m =
                          (await g(e, p.join(u, "SKILL.json"), $, i)) ??
                          (await g(e, p.join(u, "agents/openai.yaml"), $, i)),
                        b = null == m ? void 0 : h.parse((0, l.qg)(m)).interface,
                        y = n.get(r),
                        w = null == y ? null : c.get(y),
                        k = {
                          ...(null == w ? {} : { isPublic: w.has(d.name) }),
                          name: d.name,
                          description: d.description,
                          shortDescription: d.metadata?.["short-description"],
                          path: r,
                          scope: "repo" === t ? "repo" : "user",
                          enabled: !0,
                          pluginId: null,
                          interface:
                            null == b
                              ? void 0
                              : {
                                  displayName: b.display_name,
                                  shortDescription: b.short_description,
                                  iconSmall: null == b.icon_small ? void 0 : p.resolve(u, b.icon_small),
                                  iconLarge: null == b.icon_large ? void 0 : p.resolve(u, b.icon_large),
                                  iconSmallUrl: null,
                                  iconLargeUrl: null,
                                  brandColor: b.brand_color,
                                  defaultPrompt: b.default_prompt,
                                },
                        }
                      a.skills.push(k)
                    } catch {
                      a.errors.push({ path: r, message: "Unable to read skill metadata" })
                    }
                  }),
                ).then(
                  () => (
                    i?.throwIfAborted(),
                    r?.onBatch?.({ data: [{ ...a, skills: [...a.skills], errors: [...a.errors] }] })
                  ),
                ))
            }
            return (i?.throwIfAborted(), { data: [a] })
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-650-8ab82d0a13e222f1.js.map
