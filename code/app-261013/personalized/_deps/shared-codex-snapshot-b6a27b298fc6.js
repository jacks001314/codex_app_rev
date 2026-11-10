import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as n,
  BR as r,
  Cjt as i,
  Cvt as a,
  DIt as o,
  EPt as ee,
  FR as te,
  LR as ne,
  RR as s,
  TLt as c,
  Tvt as l,
  bht as u,
  ejt as re,
  fLt as d,
  ldt as f,
  oIt as ie,
  pIt as p,
  pLt as m,
  rst as ae,
  tjt as oe,
  wjt as se,
  xLt as h,
  xht as g,
  xst as ce,
} from "./app-shared-bbfeca5e5737.js";
import {
  $or as _,
  Kxr as v,
  Lnr as y,
  Mor as b,
  esr as le,
  jor as ue,
  mYr as de,
  mir as x,
  pYr as S,
  pir as fe,
  ubr as pe,
  vir as me,
  yir as C,
  yyr as he,
} from "./app-initial-5851df3f6cb1.js";
import { i as ge, n as _e, t as w } from "./shared-snapshot-asset-reference-33214426cc96.js";
function ve(e) {
  let t = e?.turns[0],
    n = t?.items[0];
  return t?.items.length !== 1 || n?.type !== `agentMessage` || n.phase != null || !n.text.startsWith(E)
    ? !1
    : n.text.length > E.length;
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = `codex-shared-snapshot-omissions-v1`), (E = `[${T}]: #\n\n`));
  }))();
}
function O(e) {
  return Q.safeParse(e).data ?? null;
}
function k(e) {
  let t = new Set();
  return e.turns.flatMap((e) =>
    e.items.flatMap((e) => {
      let n = [],
        r = [],
        i = M(e);
      if (i != null) {
        let e = i.flatMap((e) => (e.type === `text` ? [e.text] : [])).join(`
`),
          t = l(e);
        n = [
          ...R(C(S(t?.input ?? e)).trim()),
          ...i.flatMap((e) =>
            e.type === `localImage` ? [e.path] : e.type === `image` && `url` in e ? [e.url] : [],
          ),
        ];
      } else if (e.type === `agentMessage`)
        (e.phase === `final_answer` || e.phase === `commentary`) &&
          ((n = R(C(e.text).trim())),
          (r = b(x(e.text), void 0).flatMap((e) => {
            if (!I(e)) return [];
            let t = e.attributes.path ?? e.attributes.file;
            return typeof t == `string` ? [t] : [];
          })));
      else if (e.type === `reasoning`) n = R(C(y(e.summary)).trim());
      else if (e.type === `imageView`) n = [e.path];
      else if (e.type === `imageGeneration` && e.status === `completed`) {
        let t = v(e).src;
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
    let t = F(y(e.summary), n);
    return t == null ? [] : [{ type: `reasoning`, summary: t.text }];
  }
  if (e.type === `fileChange`) {
    if (e.status === `failed` || e.status === `declined`) return [];
    let n = e.changes.flatMap((e) => {
      if (ce(e)) return [];
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
    let t = v(e).src,
      r = t == null ? null : P(t, n);
    return r != null && U.safeParse(r).success
      ? [{ type: `imageGeneration`, status: `completed`, result: r }]
      : [];
  }
  return [];
}
function M(e) {
  if (e.type === `userMessage`) return e.content;
  let t = e.type === `functionCallOutput` ? a(e) : null;
  return t == null ? null : [{ type: `text`, text: t, text_elements: [] }];
}
function N(e, t, n) {
  let r = l(e),
    i = r?.input ?? e,
    a = L(C(S(i)).trim(), n),
    o = r == null ? a : _({ sourceThreadId: ``, input: a });
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
  return n != null && w(n) != null ? n : H;
}
function F(e, t) {
  let n = L(ye(e, t), t);
  return (n.startsWith(E) && (n = `\\${n}`), n.trim().length > 0 ? { type: `agentMessage`, text: n } : null);
}
function ye(e, t) {
  let n = x(e);
  return b(n, void 0)
    .flatMap((e) => {
      if (e.type === `def` && e.tag === `codex-shared-snapshot-omissions-v1` && e.href === `#`) return [];
      if (!I(e)) return e.type === `codexDirective` ? [] : [e.raw];
      let n = e.attributes.path ?? e.attributes.file;
      if (typeof n != `string`) return [];
      let r = t.get(n),
        i = r == null ? null : w(r);
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
  let n = i(e),
    r = z(n.children);
  if (r.length === 0) return e;
  let a = new Map(n.children.flatMap((e) => (e.type === `definition` ? [[e.identifier, e]] : []))),
    o = new Set();
  for (let e of r) {
    let n = e.type === `image` ? e.url : a.get(e.identifier)?.url;
    if (n == null) continue;
    let r = P(n, t);
    e.type === `image`
      ? (e.url = r)
      : (o.add(e.identifier), Object.assign(e, { type: `image`, title: null, url: r }));
  }
  if (o.size > 0) {
    let e = new Set(B(n.children));
    n.children = n.children.filter(
      (t) => t.type !== `definition` || !o.has(t.identifier) || e.has(t.identifier),
    );
  }
  return oe(n).trimEnd();
}
function R(e) {
  let t = i(e),
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
  let n = r(e);
  if (!s(n)) return n;
  let i = t == null ? null : r(t),
    a = u(n) || g(n);
  if (i != null && s(i) && a === (u(i) || g(i))) {
    let e = a ? V.default.win32 : V.default.posix,
      t = r(e.relative(i, n));
    if (t !== `..` && !t.startsWith(`../`) && !s(t)) return t;
  }
  return te(n);
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
    (pe(),
      se(),
      re(),
      (V = t(f(), 1)),
      ae(),
      de(),
      ee(),
      le(),
      me(),
      ue(),
      ne(),
      fe(),
      he(),
      ge(),
      D(),
      (H = `codex:shared-image-unavailable`),
      (U = c()
        .transform((e) =>
          e
            .replaceAll(/[\t\n\r]/g, ``)
            .trimStart()
            .toLowerCase()
            .startsWith(`data:`)
            ? H
            : e,
        )
        .refine((e) => e === `codex:shared-image-unavailable` || w(e) != null)),
      (W = o(`type`, [m({ type: n(`text`), text: c() }).strict(), m({ type: n(`image`), url: U }).strict()])),
      (G = m({ type: n(`userMessage`), content: p(W) }).strict()),
      (K = m({
        type: n(`agentMessage`),
        text: c(),
        phase: ie([`commentary`, `final_answer`]).optional(),
      }).strict()),
      (q = m({ type: n(`reasoning`), summary: c() }).strict()),
      (J = m({
        type: n(`fileChange`),
        status: n(`completed`),
        changes: p(m({ path: c().optional(), diff: c() }).strict()),
      }).strict()),
      (Y = m({ type: n(`imageView`), url: U }).strict()),
      (X = m({ type: n(`imageGeneration`), status: n(`completed`), result: U }).strict()),
      (Z = o(`type`, [G, K, q, J, Y, X])),
      (Q = m({
        version: n(1),
        omittedFileChangeCount: d().int().positive().optional(),
        assets: h(
          c().refine((e) => w(_e(e)) === e),
          m({ height: d().int().positive(), width: d().int().positive() }).strict(),
        ).optional(),
        title: c().optional(),
        turns: p(m({ items: p(Z), durationMs: d().nonnegative().optional() }).strict()),
      }).strict()));
  }))();
}
export { $ as a, ve as c, R as i, D as l, A as n, O as o, k as r, E as s, H as t };
//# sourceMappingURL=shared-codex-snapshot-b6a27b298fc6.js.map
