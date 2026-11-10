import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Cjt as n,
  EPt as r,
  GF as i,
  IDt as a,
  LLt as o,
  LR as s,
  PI as c,
  Rnt as l,
  TLt as u,
  UF as d,
  VDt as f,
  VR as p,
  _Mt as m,
  cD as h,
  dI as g,
  fI as _,
  gMt as v,
  i5 as y,
  jDt as b,
  jI as x,
  lD as ee,
  pI as S,
  vzt as C,
  wjt as w,
  xLt as T,
  xMt as E,
  yzt as D,
  zR as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  BIr as k,
  Ca as A,
  Cir as j,
  LIr as M,
  Mor as N,
  Sir as te,
  Tir as ne,
  _Pn as P,
  dPn as F,
  gPn as I,
  hPn as L,
  iZn as R,
  jor as z,
  mPn as B,
  uPn as V,
  vPn as H,
  wa as re,
  wir as ie,
} from "./app-initial-5851df3f6cb1.js";
import { n as ae, t as oe } from "./file-actions-879c5ee21b99.js";
function se(e, t, r) {
  if (t == null) return e;
  let a = e.includes(`codex-file-citation`) || e.includes(`【`),
    o =
      !!(
        t.paths?.length ||
        t.contentReferenceIndexes?.length ||
        t.inlineFileContentReferenceIndexes?.length
      ) &&
      (e.includes(`](`) || e.includes(`chatgpt-content-reference`));
  if (!a && !o) return e;
  let s = new Set(t.paths?.map((e) => O(p(t.cwd ?? ``, e)))),
    c = new Set(t.contentReferenceIndexes),
    l = new Set(
      t.urls?.flatMap((e) => {
        let t = x(e);
        return t?.workspaceDocument == null ? [] : [t.nativeFileId];
      }),
    ),
    u = new Set(t.liveCitationKeys),
    d = new Set(t.inlineFileContentReferenceIndexes),
    f = new Set(t.outputDirectiveContentReferenceIndexes),
    m = new Set(),
    h = new Map(),
    _ = [...n(e).children];
  for (let e of _)
    if (
      e.type === `code` ||
      (e.type === `inlineCode` && e.position?.start.line !== e.position?.end.line) ||
      e.type === `html`
    ) {
      if (e.position) for (let t = e.position.start.line; t <= e.position.end.line; t++) m.add(t);
    } else if ((e.type === `inlineCode` || e.type === `image`) && e.position) {
      let t = h.get(e.position.start.line) ?? [];
      (t.push({ start: e.position.start.column - 1, end: e.position.end.column - 1 }),
        h.set(e.position.start.line, t));
    } else `children` in e && _.push(...e.children);
  return e
    .split(
      `
`,
    )
    .flatMap((e, n) => {
      if (m.has(n + 1)) return [e];
      let a = [],
        o = 0;
      if (
        (M(N(e, r), (r) => {
          if (r.type === `codexDirective`) {
            let e = U.safeParse(r.attributes);
            if (!e.success) return;
            let n = e.data;
            if (r.name === `chatgpt-content-reference`) {
              let e = Number(n.index);
              if ((f.has(e) && !c.has(e)) || (!d.has(e) && !c.has(e))) return;
            } else if (r.name === `codex-file-citation`) {
              let e = ne(n);
              if (e == null || (e.purpose != null && e.purpose !== `source` && e.purpose !== `output`))
                return;
              let r = e.target,
                i = !1;
              if (
                (r.type === `artifact-session`
                  ? (i = u.has(te(r)))
                  : r.type === `google-drive`
                    ? (i = l.has(r.id))
                    : r.type === `file` && (i = s.has(O(p(t.cwd ?? ``, e.path)))),
                ie(e, t.defaultCitationPurpose ?? `output`) && !i)
              )
                return;
            } else return;
          } else if (r.type === `link` && typeof r.href == `string`) {
            let e = r.href;
            try {
              e = decodeURI(e);
            } catch {}
            let n = g(r.href) ?? (i(e) ? S(e).path.replaceAll(/%23/gi, `#`).replaceAll(/%3F/gi, `?`) : null);
            if (n == null || !s.has(O(p(t.cwd ?? ``, n)))) return;
          } else return;
          let m = r.raw.trimEnd(),
            _ = e.indexOf(m, o);
          for (; _ !== -1;) {
            let t = _ + m.length;
            if (
              (/\\+$/.exec(e.slice(0, _))?.[0].length ?? 0) % 2 == 0 &&
              !h.get(n + 1)?.some((e) => _ < e.end && t > e.start)
            ) {
              (a.push({ start: _, end: t }), (o = t));
              return;
            }
            _ = e.indexOf(m, t);
          }
        }),
        a.length === 0)
      )
        return [e];
      let _ = e;
      for (let e of a.toReversed()) _ = _.slice(0, e.start) + _.slice(e.end);
      return /^\s*(?:\d+[.)]\s*)?[\s*_~>#.,;:!?()[\]{}+-]*$/.test(_) ? [] : [e];
    }).join(`
`);
}
var U;
function W() {
  return (W = e(() => {
    (c(), k(), w(), R(), j(), _(), r(), s(), d(), z(), (U = T(u(), o([u(), t(!0)]))));
  }))();
}
function ce(e) {
  let t = (0, G.c)(57),
    { conversationId: n, hostId: r, resource: i } = e,
    o = f(),
    s;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((s = { resource: i, conversationId: n, hostId: r }), (t[0] = n), (t[1] = r), (t[2] = i), (t[3] = s))
    : (s = t[3]);
  let c = re(s),
    l,
    u,
    d,
    p,
    m,
    h,
    g,
    _;
  if (t[4] !== o || t[5] !== i || t[6] !== c) {
    let { title: e, pageId: n, onOpen: r, isAvailable: a } = c;
    ((m = n),
      (p = r),
      (u = a),
      (_ = e),
      ({ kind: d } = i),
      (_ ??=
        d === `presentation`
          ? o.formatMessage({
              id: `artifactSession.endResource.untitledPresentation`,
              defaultMessage: `Slide`,
              description: `Fallback title for a presentation Artifact Session resource card`,
            })
          : o.formatMessage({
              id: `artifactSession.endResource.untitledSpreadsheet`,
              defaultMessage: `Sheet`,
              description: `Fallback title for a spreadsheet Artifact Session resource card`,
            })),
      (l = ee[d][20]),
      (h = `group/resource-card relative`),
      (g =
        p != null &&
        (0, K.jsx)(F, {
          "aria-label": o.formatMessage(
            {
              id: `artifactSession.endResource.open`,
              defaultMessage: `Open {title}`,
              description: `Accessible label for opening a live Artifact Session resource card`,
            },
            { title: _ },
          ),
          onClick: () => {
            p(_);
          },
        })),
      (t[4] = o),
      (t[5] = i),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _));
  } else
    ((l = t[7]), (u = t[8]), (d = t[9]), (p = t[10]), (m = t[11]), (h = t[12]), (g = t[13]), (_ = t[14]));
  let b =
      m &&
      p != null &&
      `peer-hover/resource-card:[&_.end-resource-default-subtitle]:hidden peer-hover/resource-card:[&_.end-resource-hover-subtitle]:inline-flex`,
    x;
  t[15] === b ? (x = t[16]) : ((x = v(`pointer-events-none relative z-10`, b)), (t[15] = b), (t[16] = x));
  let S = d === `presentation` ? `text-orange` : `text-green`,
    C;
  t[17] !== l || t[18] !== S
    ? ((C = (0, K.jsx)(L, { children: (0, K.jsx)(l, { className: S }) })),
      (t[17] = l),
      (t[18] = S),
      (t[19] = C))
    : (C = t[19]);
  let w;
  t[20] === d
    ? (w = t[21])
    : ((w =
        d === `presentation` &&
        (0, K.jsx)(a, {
          id: `artifactSession.endResource.presentationSubtitle`,
          defaultMessage: `Slide`,
          description: `Subtitle for a presentation Artifact Session resource card`,
        })),
      (t[20] = d),
      (t[21] = w));
  let T;
  t[22] === d
    ? (T = t[23])
    : ((T =
        d === `spreadsheet` &&
        (0, K.jsx)(a, {
          id: `artifactSession.endResource.spreadsheetSubtitle`,
          defaultMessage: `Sheet`,
          description: `Subtitle for a spreadsheet Artifact Session resource card`,
        })),
      (t[22] = d),
      (t[23] = T));
  let E;
  t[24] !== T || t[25] !== w
    ? ((E = (0, K.jsxs)(`span`, { className: `end-resource-default-subtitle`, children: [w, T] })),
      (t[24] = T),
      (t[25] = w),
      (t[26] = E))
    : (E = t[26]);
  let D;
  t[27] !== p || t[28] !== m
    ? ((D =
        m &&
        p != null &&
        (0, K.jsx)(`span`, {
          className: `end-resource-hover-subtitle hidden items-center gap-1`,
          children: (0, K.jsx)(a, {
            id: `localConversation.endResource.openPreview`,
            defaultMessage: `Open preview`,
            description: `Hover subtitle for opening a conversation resource preview`,
          }),
        })),
      (t[27] = p),
      (t[28] = m),
      (t[29] = D))
    : (D = t[29]);
  let O;
  t[30] !== E || t[31] !== D
    ? ((O = (0, K.jsxs)(K.Fragment, { children: [E, D] })), (t[30] = E), (t[31] = D), (t[32] = O))
    : (O = t[32]);
  let k;
  t[33] !== p || t[34] !== m
    ? ((k =
        m &&
        p != null &&
        (0, K.jsx)(I, {
          label: (0, K.jsx)(a, {
            id: `codex.space.endResource.openButton`,
            defaultMessage: `Open`,
            description: `Action on a Page or Space citation card`,
          }),
        })),
      (t[33] = p),
      (t[34] = m),
      (t[35] = k))
    : (k = t[35]);
  let A;
  t[36] !== n ||
  t[37] !== r ||
  t[38] !== u ||
  t[39] !== d ||
  t[40] !== m ||
  t[41] !== i.artifactRef ||
  t[42] !== _
    ? ((A =
        u &&
        !m &&
        (0, K.jsx)(`span`, {
          className: `flex flex-col justify-center self-stretch`,
          children: (0, K.jsx)(oe, {
            analyticsClickSource: y.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_EXPORT_MENU,
            artifactRef: i.artifactRef,
            hostId: r,
            kind: d,
            threadId: n,
            title: _,
          }),
        })),
      (t[36] = n),
      (t[37] = r),
      (t[38] = u),
      (t[39] = d),
      (t[40] = m),
      (t[41] = i.artifactRef),
      (t[42] = _),
      (t[43] = A))
    : (A = t[43]);
  let j;
  t[44] !== k || t[45] !== A
    ? ((j = (0, K.jsxs)(K.Fragment, { children: [k, A] })), (t[44] = k), (t[45] = A), (t[46] = j))
    : (j = t[46]);
  let M;
  t[47] !== O || t[48] !== j || t[49] !== x || t[50] !== C || t[51] !== _
    ? ((M = (0, K.jsx)(P, { className: x, icon: C, subtitle: O, title: _, titleTooltip: _, trailing: j })),
      (t[47] = O),
      (t[48] = j),
      (t[49] = x),
      (t[50] = C),
      (t[51] = _),
      (t[52] = M))
    : (M = t[52]);
  let N;
  return (
    t[53] !== M || t[54] !== h || t[55] !== g
      ? ((N = (0, K.jsxs)(`div`, { className: h, children: [g, M] })),
        (t[53] = M),
        (t[54] = h),
        (t[55] = g),
        (t[56] = N))
      : (N = t[56]),
    N
  );
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = C()), l(), m(), b(), H(), h(), ae(), A(), (K = E()));
  }))();
}
function J(e) {
  return e <= 4 ? e : 3;
}
function Y() {
  return (Y = e(() => {}))();
}
function le(e) {
  let t = (0, X.c)(32),
    { children: n, showLessLabel: r, showMoreLabel: i, variant: a } = e,
    o = a === void 0 ? `default` : a,
    [s, c] = (0, Z.useState)(!1),
    l = (0, Z.useId)(),
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  if (t[0] !== n || t[1] !== s || t[2] !== l || t[3] !== o) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((d = J(n.length)), n.length === 0)) {
        _ = null;
        break bb0;
      }
      ((u = V), (h = o === "default" ? `divide-y divide-border` : void 0), (g = o), (f = l));
      let e = o === `artifact-list` ? `divide-border-subtle` : `divide-border`;
      (t[12] === e ? (p = t[13]) : ((p = v(`flex flex-col divide-y`, e)), (t[12] = e), (t[13] = p)),
        (m = s ? n : n.slice(0, d)));
    }
    ((t[0] = n),
      (t[1] = s),
      (t[2] = l),
      (t[3] = o),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _));
  } else ((u = t[4]), (d = t[5]), (f = t[6]), (p = t[7]), (m = t[8]), (h = t[9]), (g = t[10]), (_ = t[11]));
  if (_ !== Symbol.for(`react.early_return_sentinel`)) return _;
  let y;
  t[14] !== f || t[15] !== p || t[16] !== m
    ? ((y = (0, Q.jsx)(`div`, { id: f, className: p, children: m })),
      (t[14] = f),
      (t[15] = p),
      (t[16] = m),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== n.length || t[19] !== d || t[20] !== s || t[21] !== l || t[22] !== r || t[23] !== i || t[24] !== o
    ? ((b =
        n.length > d
          ? (0, Q.jsx)(B, {
              ariaControls: l,
              isExpanded: s,
              variant: o,
              onClick: () => {
                c(ue);
              },
              children: s ? r : i(n.length - d),
            })
          : null),
      (t[18] = n.length),
      (t[19] = d),
      (t[20] = s),
      (t[21] = l),
      (t[22] = r),
      (t[23] = i),
      (t[24] = o),
      (t[25] = b))
    : (b = t[25]);
  let x;
  return (
    t[26] !== u || t[27] !== h || t[28] !== g || t[29] !== y || t[30] !== b
      ? ((x = (0, Q.jsxs)(u, { className: h, variant: g, children: [y, b] })),
        (t[26] = u),
        (t[27] = h),
        (t[28] = g),
        (t[29] = y),
        (t[30] = b),
        (t[31] = x))
      : (x = t[31]),
    x
  );
}
function ue(e) {
  return !e;
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = C()), m(), (Z = D()), H(), (Q = E()));
  }))();
}
export { ce as a, se as c, Y as i, $ as n, q as o, J as r, W as s, le as t };
//# sourceMappingURL=resource-card-list-8cb37224006a.js.map
