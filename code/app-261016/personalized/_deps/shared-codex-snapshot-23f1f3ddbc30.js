import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BMt as n,
  CMt as r,
  Ez as i,
  Fgt as a,
  HFt as o,
  Igt as s,
  LRt as ee,
  ORt as c,
  Oz as te,
  SLt as l,
  Tct as ne,
  ULt as u,
  VRt as d,
  Vyt as f,
  hRt as p,
  jz as m,
  kLt as h,
  kRt as g,
  kz as _,
  sct as re,
  wMt as ie,
  yft as ae,
  zMt as v,
  zyt as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Hsr as y,
  Hur as se,
  Ksr as ce,
  Uur as le,
  Vsr as ue,
  bur as de,
  c1r as b,
  cor as x,
  l1r as S,
  mEr as C,
  mwr as fe,
  qsr as w,
  xCr as pe,
  xur as T,
} from "./app-initial-ad16eaadf81f.js";
import { i as me, n as he, t as E } from "./shared-snapshot-asset-reference-33214426cc96.js";
function ge(e) {
  let t = e?.turns[0],
    n = t?.items[0];
  return t?.items.length !== 1 || n?.type !== `agentMessage` || n.phase != null || !n.text.startsWith(O)
    ? !1
    : n.text.length > O.length;
}
var D, O;
function k() {
  return (k = e(() => {
    ((D = `codex-shared-snapshot-omissions-v1`), (O = `[${D}]: #\n\n`));
  }))();
}
function _e(e) {
  return Q.safeParse(e).data ?? null;
}
function ve(e) {
  let t = new Set();
  return e.turns.flatMap((e) =>
    e.items.flatMap((e) => {
      let n = [],
        r = [],
        i = M(e);
      if (i != null) {
        let e = i.flatMap((e) => (e.type === `text` ? [e.text] : [])).join(`
`),
          t = f(e);
        n = [
          ...R(w(b(t?.input ?? e)).trim()),
          ...i.flatMap((e) =>
            e.type === `localImage` ? [e.path] : e.type === `image` && `url` in e ? [e.url] : [],
          ),
        ];
      } else if (e.type === `agentMessage`)
        (e.phase === `final_answer` || e.phase === `commentary`) &&
          ((n = R(w(e.text).trim())),
          (r = T(y(e.text), void 0).flatMap((e) => {
            if (!I(e)) return [];
            let t = e.attributes.path ?? e.attributes.file;
            return typeof t == `string` ? [t] : [];
          })));
      else if (e.type === `reasoning`) n = R(w(x(e.summary)).trim());
      else if (e.type === `imageView`) n = [e.path];
      else if (e.type === `imageGeneration` && e.status === `completed`) {
        let t = C(e).src;
        n = t == null ? [] : [t];
      }
      let a = [
        ...n.map((e) => ({ kind: `image`, source: e })),
        ...r.map((e) => ({ kind: `visualization`, source: e })),
      ];
      return (
        e.type === `agentMessage` && a.sort((t, n) => e.text.indexOf(t.source) - e.text.indexOf(n.source)),
        a.filter(({ kind: e, source: n }) => {
          let r = `${e}\0${n}`;
          return !t.has(r) && (t.add(r), !0);
        })
      );
    }),
  );
}
function A(e, t, n) {
  let r = Object.fromEntries(
    n?.flatMap(({ asset_id: e, height: t, width: n }) =>
      t == null || n == null ? [] : [[e, { height: t, width: n }]],
    ) ?? [],
  );
  return {
    title: e.name ?? void 0,
    version: 1,
    ...(Object.keys(r).length === 0 ? {} : { assets: r }),
    turns: e.turns.flatMap((n) => {
      let r = n.items.flatMap((n) => j(n, e.cwd, t));
      if (r.length === 0) return [];
      let i = r.some(
          (e) => e.type === `reasoning` || (e.type === `agentMessage` && e.phase === `commentary`),
        ),
        a =
          n.durationMs ??
          (n.startedAt != null && n.completedAt != null ? (n.completedAt - n.startedAt) * 1e3 : null);
      return [{ items: r, ...(i && a != null && Number.isFinite(a) && a >= 0 ? { durationMs: a } : {}) }];
    }),
  };
}
function j(e, t, n) {
  let r = M(e);
  if (r != null) {
    let e = N(
      r.flatMap((e) => (e.type === `text` ? [e.text] : [])).join(`
`),
      r.flatMap((e) =>
        e.type === `image` && `url` in e ? [P(e.url, n)] : e.type === `localImage` ? [P(e.path, n)] : [],
      ),
      n,
    );
    return e == null ? [] : [e];
  }
  if (e.type === `agentMessage`) {
    if (e.phase !== `final_answer` && e.phase !== `commentary`) return [];
    let t = F(e.text, n);
    return t == null ? [] : [e.phase === `commentary` ? { ...t, phase: `commentary` } : t];
  }
  if (e.type === `reasoning`) {
    let t = F(x(e.summary), n);
    return t == null ? [] : [{ type: `reasoning`, summary: t.text }];
  }
  if (e.type === `fileChange`) {
    if (e.status === `failed` || e.status === `declined`) return [];
    let n = e.changes.flatMap((e) => {
      if (ne(e)) return [];
      let n = be(e);
      return n.length > 0 ? [{ path: xe(e.path, t), diff: n }] : [];
    });
    return n.length > 0 ? [{ type: `fileChange`, status: `completed`, changes: n }] : [];
  }
  if (e.type === `imageView`) {
    let t = P(e.path, n);
    return t != null && U.safeParse(t).success ? [{ type: `imageView`, url: t }] : [];
  }
  if (e.type === `imageGeneration` && e.status === `completed`) {
    let t = C(e).src,
      r = t == null ? null : P(t, n);
    return r != null && U.safeParse(r).success
      ? [{ type: `imageGeneration`, status: `completed`, result: r }]
      : [];
  }
  return [];
}
function M(e) {
  if (e.type === `userMessage`) return e.content;
  let t = e.type === `functionCallOutput` ? oe(e) : null;
  return t == null ? null : [{ type: `text`, text: t, text_elements: [] }];
}
function N(e, t, n) {
  let r = f(e),
    i = r?.input ?? e,
    a = L(w(b(i)).trim(), n),
    o = r == null ? a : se({ sourceThreadId: ``, input: a });
  return a.length === 0 && t.length === 0
    ? null
    : {
        type: `userMessage`,
        content: [
          ...(o.length > 0 ? [{ type: `text`, text: o }] : []),
          ...t.map((e) => ({ type: `image`, url: e })),
        ],
      };
}
function P(e, t) {
  let n = t.get(e);
  return n != null && E(n) != null ? n : H;
}
function F(e, t) {
  let n = L(ye(e, t), t);
  return (n.startsWith(O) && (n = `\\${n}`), n.trim().length > 0 ? { type: `agentMessage`, text: n } : null);
}
function ye(e, t) {
  let n = y(e);
  return T(n, void 0)
    .flatMap((e) => {
      if (e.type === `def` && e.tag === `codex-shared-snapshot-omissions-v1` && e.href === `#`) return [];
      if (!I(e)) return e.type === `codexDirective` ? [] : [e.raw];
      let n = e.attributes.path ?? e.attributes.file;
      if (typeof n != `string`) return [];
      let r = t.get(n),
        i = r == null ? null : E(r);
      if (i == null) return [];
      let a = [
        `file=${JSON.stringify(`${i}.html`)}`,
        `asset=${JSON.stringify(r)}`,
        ...[`title`, `mode`, `expandable`].flatMap((t) => {
          let n = e.attributes[t];
          return typeof n == `string` ? [`${t}=${JSON.stringify(n)}`] : [];
        }),
      ];
      return [`::${e.name}{${a.join(` `)}}`];
    })
    .join(``)
    .trimEnd();
}
function I(e) {
  return e.type === `codexDirective` && `name` in e && e.name === `codex-inline-vis`;
}
function L(e, t) {
  let n = v(e),
    r = z(n.children);
  if (r.length === 0) return e;
  let i = new Map(n.children.flatMap((e) => (e.type === `definition` ? [[e.identifier, e]] : []))),
    a = new Set();
  for (let e of r) {
    let n = e.type === `image` ? e.url : i.get(e.identifier)?.url;
    if (n == null) continue;
    let r = P(n, t);
    e.type === `image`
      ? (e.url = r)
      : (a.add(e.identifier), Object.assign(e, { type: `image`, title: null, url: r }));
  }
  if (a.size > 0) {
    let e = new Set(B(n.children));
    n.children = n.children.filter(
      (t) => t.type !== `definition` || !a.has(t.identifier) || e.has(t.identifier),
    );
  }
  return ie(n).trimEnd();
}
function R(e) {
  let t = v(e),
    n = new Map(t.children.flatMap((e) => (e.type === `definition` ? [[e.identifier, e.url]] : [])));
  return z(t.children).flatMap((e) => {
    let t = e.type === `image` ? e.url : n.get(e.identifier);
    return t == null ? [] : [t];
  });
}
function z(e) {
  return e.flatMap((e) =>
    e.type === `image` || e.type === `imageReference` ? [e] : `children` in e ? z(e.children) : [],
  );
}
function B(e) {
  return e.flatMap((e) =>
    e.type === `imageReference` || e.type === `linkReference`
      ? [e.identifier]
      : `children` in e
        ? B(e.children)
        : [],
  );
}
function be(e) {
  let t = Se(e.diff);
  if (t.length === 0) return ``;
  switch (e.kind.type) {
    case `add`:
      return t
        .split(
          `
`,
        )
        .map((e) => `+${e}`).join(`
`);
    case `delete`:
      return t
        .split(
          `
`,
        )
        .map((e) => `-${e}`).join(`
`);
    case `update`:
      return t;
  }
}
function xe(e, t) {
  let n = m(e);
  if (!_(n)) return n;
  let r = t == null ? null : m(t),
    o = a(n) || s(n);
  if (r != null && _(r) && o === (a(r) || s(r))) {
    let e = o ? V.default.win32 : V.default.posix,
      t = m(e.relative(r, n));
    if (t !== `..` && !t.startsWith(`../`) && !_(t)) return t;
  }
  return i(n);
}
function Se(e) {
  return e
    .replaceAll(
      `\r
`,
      `
`,
    )
    .split(
      `
`,
    )
    .filter(
      (e) =>
        !/^(?:diff --git |index |--- |\+\+\+ |(?:old|new|deleted file|similarity index|rename from|rename to) )/.test(
          e,
        ),
    )
    .join(
      `
`,
    )
    .trim();
}
var V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (fe(),
      n(),
      r(),
      (V = t(ae(), 1)),
      re(),
      S(),
      o(),
      le(),
      ce(),
      de(),
      te(),
      ue(),
      pe(),
      me(),
      k(),
      (H = `codex:shared-image-unavailable`),
      (U = d()
        .transform((e) =>
          e
            .replaceAll(/[\t\n\r]/g, ``)
            .trimStart()
            .toLowerCase()
            .startsWith(`data:`)
            ? H
            : e,
        )
        .refine((e) => e === `codex:shared-image-unavailable` || E(e) != null)),
      (W = u(`type`, [g({ type: p(`text`), text: d() }).strict(), g({ type: p(`image`), url: U }).strict()])),
      (G = g({ type: p(`userMessage`), content: h(W) }).strict()),
      (K = g({
        type: p(`agentMessage`),
        text: d(),
        phase: l([`commentary`, `final_answer`]).optional(),
      }).strict()),
      (q = g({ type: p(`reasoning`), summary: d() }).strict()),
      (J = g({
        type: p(`fileChange`),
        status: p(`completed`),
        changes: h(g({ path: d().optional(), diff: d() }).strict()),
      }).strict()),
      (Y = g({ type: p(`imageView`), url: U }).strict()),
      (X = g({ type: p(`imageGeneration`), status: p(`completed`), result: U }).strict()),
      (Z = u(`type`, [G, K, q, J, Y, X])),
      (Q = g({
        version: p(1),
        omittedFileChangeCount: c().int().positive().optional(),
        assets: ee(
          d().refine((e) => E(he(e)) === e),
          g({ height: c().int().positive(), width: c().int().positive() }).strict(),
        ).optional(),
        title: d().optional(),
        turns: h(g({ items: h(Z), durationMs: c().nonnegative().optional() }).strict()),
      }).strict()));
  }))();
}
export { $ as a, ge as c, R as i, k as l, A as n, _e as o, ve as r, O as s, H as t };
//# sourceMappingURL=shared-codex-snapshot-23f1f3ddbc30.js.map
