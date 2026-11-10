const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./zod-C7Kk26Xx.js"),
  n = require("./chunk-D4ZOuLf6.js"),
  r = require("./path-browserify-win32-DubphUXU.js"),
  i = require("./main-C4DYk222.js");
var a = e.a(n.t()),
  o = e.a(r.t()),
  s = i.r(),
  { posix: c } = o.default,
  l = 1048576,
  u = t.O({
    name: t.N().trim().min(1),
    description: t.N(),
    metadata: t.O({ "short-description": t.N().optional() }).optional(),
  }),
  d = t.O({
    interface: t
      .O({
        display_name: t.N().optional(),
        short_description: t.N().optional(),
        icon_small: t.N().optional(),
        icon_large: t.N().optional(),
        brand_color: t.N().optional(),
        default_prompt: t.N().optional(),
      })
      .optional(),
  });
async function f(e, t) {
  let r = await n.s(
    await e.spawn({
      args: [
        `bash`,
        `-o`,
        `pipefail`,
        `-c`,
        '(for root in "$1" "$HOME/.agents/skills" "${CODEX_HOME:-$HOME/.codex}/skills" "${CODEX_HOME:-$HOME/.codex}/plugins/cache"; do if [ -d "$root" ]; then rg --files --hidden --null --glob SKILL.md --glob "!**/{.git,node_modules}/**" -- "$root"; code=$?; case "$code" in 0|1|141) ;; *) exit "$code" ;; esac; fi; done) | head -z -n 512',
        `cloud-skills`,
        t,
      ],
      cwd: t,
      timeoutMs: 1e4,
    }),
  );
  if (r.code !== 0) throw Error(`Unable to discover container skills`);
  let i = { cwd: t, skills: [], errors: [] },
    o = [...new Set(r.stdout.split(`\0`).filter((e) => e !== ``))];
  for (let n of (0, a.default)(o, 8))
    await Promise.all(
      n.map(async (n) => {
        try {
          if (!c.isAbsolute(n) || c.basename(n) !== `SKILL.md`) throw Error(`Invalid skill path`);
          let r = await p(e, n),
            a = /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/.exec(r);
          if (a == null) throw Error(`Missing skill frontmatter`);
          let o = u.parse((0, s.parse)(a[1])),
            l = c.dirname(n),
            f = (await m(e, c.join(l, `SKILL.json`))) ?? (await m(e, c.join(l, `agents/openai.yaml`))),
            h = f == null ? void 0 : d.parse((0, s.parse)(f)).interface,
            g = c.relative(t, n),
            _ = {
              name: o.name,
              description: o.description,
              shortDescription: o.metadata?.[`short-description`],
              path: n,
              scope: g !== `..` && !g.startsWith(`../`) ? `repo` : `user`,
              enabled: !0,
              pluginId: null,
              interface:
                h == null
                  ? void 0
                  : {
                      displayName: h.display_name,
                      shortDescription: h.short_description,
                      iconSmall: h.icon_small == null ? void 0 : c.resolve(l, h.icon_small),
                      iconLarge: h.icon_large == null ? void 0 : c.resolve(l, h.icon_large),
                      iconSmallUrl: null,
                      iconLargeUrl: null,
                      brandColor: h.brand_color,
                      defaultPrompt: h.default_prompt,
                    },
            };
          i.skills.push(_);
        } catch {
          i.errors.push({ path: n, message: `Unable to read skill metadata` });
        }
      }),
    );
  return { data: [i] };
}
async function p(e, t) {
  let n = await e.stat(t);
  if (!n.isFile() || (n.size != null && n.size > l))
    throw Error(`Skill metadata is not a readable text file`);
  let r = 0,
    i = (await e.readFile(t)).pipeThrough(
      new TransformStream({
        transform(e, t) {
          if (((r += e.byteLength), r > l)) throw Error(`Skill metadata exceeds the size limit`);
          t.enqueue(e);
        },
      }),
    );
  return new Response(i).text();
}
async function m(e, t) {
  try {
    return await p(e, t);
  } catch (e) {
    if (e instanceof Error && /ENOENT|No such file or directory/.test(e.message)) return null;
    throw e;
  }
}
exports.readHostedSkills = f;
//# sourceMappingURL=skills-CcthcU6K.js.map
