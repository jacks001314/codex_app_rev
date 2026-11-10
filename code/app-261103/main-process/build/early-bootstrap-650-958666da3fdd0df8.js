"use strict"
;((exports.ids = [650]),
  (exports.modules = {
    14553(e, t, r) {
      var o = r(87728),
        i = r.n(o),
        s = r(25133),
        a = r.n(s),
        n = r(12412),
        l = r(64628),
        c = r(35553),
        d = r(51944)
      let { posix: p } = a(),
        m = `
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
  scan "$\{CODEX_HOME:-$HOME/.codex}/plugins/cache" user
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
        f = `
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
        u = c.object({
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
        })
      async function b(e, t, r, o) {
        o?.throwIfAborted()
        let i = r.get(t)
        if ("?" === i)
          return (async function (e, t) {
            try {
              return await (async function (e, t) {
                let r = await e.stat(t)
                if (!r.isFile() || (null != r.size && r.size > 1048576))
                  throw Error("Skill metadata is not a readable text file")
                let o = 0
                return new Response(
                  (await e.readFile(t)).pipeThrough(
                    new TransformStream({
                      transform(e, t) {
                        if ((o += e.byteLength) > 1048576) throw Error("Skill metadata exceeds the size limit")
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
        if ("-" === i) return null
        if (null == i || !i.startsWith("+")) throw Error("Unable to read skill metadata")
        let s = (0, n.K)(i.slice(1))
        if (s.byteLength > 1048576) throw Error("Skill metadata exceeds the size limit")
        return new TextDecoder().decode(s)
      }
      r.d(
        t,
        {},
        {
          readHostedSkills: async function (e, t, r) {
            let o = r?.signal
            o?.throwIfAborted()
            let s = await (0, d.SD)(
              await e.spawn({
                args: ["bash", "-o", "pipefail", "-c", m, "cloud-skills", t],
                cwd: t,
                signal: o,
                timeoutMs: 1e4,
              }),
            )
            if ((o?.throwIfAborted(), 0 !== s.code && 2 !== s.code && 141 !== s.code))
              throw Error("Unable to discover container skills")
            let a = {
                cwd: t,
                skills: [],
                errors: 2 === s.code ? [{ path: t, message: "Unable to discover some container skills" }] : [],
              },
              n = i()(s.stdout.split("\0").slice(0, -1), 2)
            for (let s of i()(n, 32)) {
              o?.throwIfAborted()
              let i = s.flatMap(([, e]) => [
                  e,
                  p.join(p.dirname(e), "SKILL.json"),
                  p.join(p.dirname(e), "agents/openai.yaml"),
                ]),
                n = await (0, d.SD)(
                  await e.spawn({
                    args: [
                      "bash",
                      "--norc",
                      "-c",
                      'exec python3 -I -S -c "$@"',
                      "skill-metadata",
                      f,
                      String(1048576),
                      String(9e5),
                      ...i,
                    ],
                    cwd: t,
                    signal: o,
                    timeoutMs: 1e4,
                  }),
                )
              if ((o?.throwIfAborted(), 0 !== n.code && 127 !== n.code))
                throw Error("Unable to read container skill metadata")
              let c = 127 === n.code ? i.map(() => "?") : n.stdout.split("\0").slice(0, -1),
                m = new Map(i.map((e, t) => [e, c[t]]))
              await Promise.all(
                s.map(async ([t, r]) => {
                  try {
                    if (!p.isAbsolute(r) || "SKILL.md" !== p.basename(r)) throw Error("Invalid skill path")
                    let i = await b(e, r, m, o),
                      s = /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/.exec(i ?? "")
                    if (null == s) throw Error("Missing skill frontmatter")
                    let n = u.parse((0, l.qg)(s[1])),
                      c = p.dirname(r),
                      d =
                        (await b(e, p.join(c, "SKILL.json"), m, o)) ??
                        (await b(e, p.join(c, "agents/openai.yaml"), m, o)),
                      f = null == d ? void 0 : h.parse((0, l.qg)(d)).interface,
                      g = {
                        name: n.name,
                        description: n.description,
                        shortDescription: n.metadata?.["short-description"],
                        path: r,
                        scope: "repo" === t ? "repo" : "user",
                        enabled: !0,
                        pluginId: null,
                        interface:
                          null == f
                            ? void 0
                            : {
                                displayName: f.display_name,
                                shortDescription: f.short_description,
                                iconSmall: null == f.icon_small ? void 0 : p.resolve(c, f.icon_small),
                                iconLarge: null == f.icon_large ? void 0 : p.resolve(c, f.icon_large),
                                iconSmallUrl: null,
                                iconLargeUrl: null,
                                brandColor: f.brand_color,
                                defaultPrompt: f.default_prompt,
                              },
                      }
                    a.skills.push(g)
                  } catch {
                    a.errors.push({ path: r, message: "Unable to read skill metadata" })
                  }
                }),
              ).then(
                () => (
                  o?.throwIfAborted(),
                  r?.onBatch?.({ data: [{ ...a, skills: [...a.skills], errors: [...a.errors] }] })
                ),
              )
            }
            return (o?.throwIfAborted(), { data: [a] })
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-650-958666da3fdd0df8.js.map
