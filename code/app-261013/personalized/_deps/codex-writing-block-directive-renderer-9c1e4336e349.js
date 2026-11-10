import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  jDt as r,
  vzt as i,
  xMt as a,
  yzt as o,
  zxt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  DQn as c,
  G as l,
  H as u,
  SQn as ee,
  U as te,
  Us as d,
  Ws as f,
  X8 as p,
  Y8 as m,
  Z8 as h,
  __ as ne,
  a_ as re,
  c_ as ie,
  eDr as g,
  f_ as ae,
  gQn as oe,
  g_ as se,
  hQn as _,
  h_ as ce,
  i_ as le,
  l_ as ue,
  m_ as de,
  nDr as v,
  oDr as y,
  o_ as fe,
  p_ as b,
  r_ as x,
  s_ as S,
  u_ as pe,
  v_ as C,
} from "./app-initial-5851df3f6cb1.js";
import { n as w, t as me } from "./editable-writing-block-67c0bb761270.js";
import { n as T, t as he } from "./writing-block-app-capabilities-5b5293feb60d.js";
import { a as E, i as ge, n as D, r as O, t as k } from "./writing-block-directive-renderer-1ef8ad424e85.js";
import {
  a as A,
  i as j,
  n as _e,
  o as ve,
  r as ye,
  t as be,
} from "./writing-block-content-update-f3342525cae9.js";
function M(e) {
  let t = (0, F.c)(8),
    { attributes: n, name: r, rawText: i } = e,
    a = (0, I.useContext)(d),
    o = a?.isStreaming ?? !1,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (e) => {
        if (a == null) return null;
        let t = O(e);
        return e.variant === `slides`
          ? (0, L.jsx)(N, { id: t, context: a, directive: e })
          : (0, L.jsx)(P, { id: t, context: a, directive: e });
      }),
      (t[0] = a),
      (t[1] = s));
  let c;
  return (
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== o || t[6] !== s
      ? ((c = (0, L.jsx)(k, {
          attributes: n,
          isStreaming: o,
          name: r,
          rawText: i,
          renderPersisted: s,
          testId: `codex-writing-block`,
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function N(e) {
  let t = (0, F.c)(10),
    { id: n, context: r, directive: i } = e,
    a = v(`423161634`),
    o = y(`2470976080`),
    s;
  t[0] !== o || t[1] !== a
    ? ((s = a || o.get(`enabled`, !1)), (t[0] = o), (t[1] = a), (t[2] = s))
    : (s = t[2]);
  let c = s,
    l;
  t[3] !== i || t[4] !== c
    ? ((l = c ? i : { ...i, variant: `standard` }), (t[3] = i), (t[4] = c), (t[5] = l))
    : (l = t[5]);
  let u;
  return (
    t[6] !== r || t[7] !== n || t[8] !== l
      ? ((u = (0, L.jsx)(P, { id: n, context: r, directive: l })),
        (t[6] = r),
        (t[7] = n),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function P(e) {
  let n = (0, F.c)(47),
    { context: r, directive: i, id: a } = e,
    o;
  n[0] !== r.conversationId || n[1] !== r.turnId || n[2] !== a
    ? ((o = ae(r.conversationId, r.turnId, a)),
      (n[0] = r.conversationId),
      (n[1] = r.turnId),
      (n[2] = a),
      (n[3] = o))
    : (o = n[3]);
  let c = o,
    l = s(fe, c),
    d = s(S, c),
    f = s(x, c),
    h = s(le, c),
    g = s(re, c),
    _ = s(ie, c),
    v = s(ue, c),
    y = xe(te(i.metadata, r), d),
    b = l ?? u(i.bodyContent, r),
    [w, T] = (0, I.useState)(null),
    E = w?.source === b ? w.value : b,
    D = ge({ content: E, metadata: y, preserveEmptySections: !r.isStreaming }),
    O = D?.[0]?.content ?? E,
    k;
  n[4] === c
    ? (k = n[5])
    : ((k = (e) => {
        ne(c, e);
      }),
      (n[4] = c),
      (n[5] = k));
  let A = ve({
      isPersistenceReady: !0,
      isStreaming: r.isStreaming,
      metadata: y,
      onPersistSelection: k,
      storedActiveToneSectionId: f,
      toneSections: D,
    }),
    j = ye(A.displayedToneSections, A.activeToneSectionId),
    M = {
      metadata: _e({ ...y, subject: d?.subject ?? v ?? y?.subject ?? i.emailMetadata.subject }, D),
      title: i.title,
    };
  v != null &&
    d?.subject == null &&
    ee(d).length === 0 &&
    (M.metadata = { ...M.metadata, ...p(M, { isOriginal: !0 }, v) });
  let N = m(M, j),
    P = `${c}\n${A.activeToneSectionId ?? ``}`,
    [R, Se] = (0, I.useState)({ key: P, value: N }),
    z = A.activeToneSectionId == null || D?.some((e) => e.id === A.activeToneSectionId) === !0;
  z && (R.key !== P || R.value !== N) && Se({ key: P, value: N });
  let B = h ?? i.emailMetadata.bcc,
    V = g ?? i.emailMetadata.cc,
    H = _ ?? i.emailMetadata.recipient,
    U = r.isStreaming && !z && R.key === P ? R.value : N,
    W;
  n[6] !== B || n[7] !== V || n[8] !== H || n[9] !== U || n[10] !== y
    ? ((W = { bcc: B, cc: V, recipient: H, subject: U, writingBlockMetadata: y }),
      (n[6] = B),
      (n[7] = V),
      (n[8] = H),
      (n[9] = U),
      (n[10] = y),
      (n[11] = W))
    : (W = n[11]);
  let G = W,
    K = !r.isStreaming,
    q;
  n[12] === c
    ? (q = n[13])
    : ((q = () => {
        pe(c);
      }),
      (n[12] = c),
      (n[13] = q));
  let J;
  n[14] !== c || n[15] !== T || n[16] !== b || n[17] !== D
    ? ((J = (e, t) => {
        let n = be({ nextContent: e, toneSectionId: t, toneSections: D }),
          r = n.activeToneSectionId != null && n.toneSections != null ? oe(n.toneSections) : n.content;
        (T({ source: b, value: r }), de(c, r));
      }),
      (n[14] = c),
      (n[15] = T),
      (n[16] = b),
      (n[17] = D),
      (n[18] = J))
    : (J = n[18]);
  let Y;
  n[19] === c
    ? (Y = n[20])
    : ((Y = (e, t) => {
        ce(c, e, t);
      }),
      (n[19] = c),
      (n[20] = Y));
  let X = (e) => {
      (j.isOriginal && se(c, e), C(c, p(M, j, e)));
    },
    Z;
  n[21] !== r.conversationId ||
  n[22] !== r.isStreaming ||
  n[23] !== i.title ||
  n[24] !== i.variant ||
  n[25] !== c ||
  n[26] !== G ||
  n[27] !== a
    ? ((Z = (e) =>
        (0, L.jsx)(he, {
          conversationId: r.conversationId,
          context: e,
          editorKey: c,
          emailMetadata: G,
          enableAiTools: !r.isStreaming,
          isStreaming: r.isStreaming,
          onEmailMetadataChange: (e) => {
            C(c, e);
          },
          showMagicEditAction: !r.isStreaming,
          title: i.title,
          variant: i.variant,
          writingBlockId: a,
        })),
      (n[21] = r.conversationId),
      (n[22] = r.isStreaming),
      (n[23] = i.title),
      (n[24] = i.variant),
      (n[25] = c),
      (n[26] = G),
      (n[27] = a),
      (n[28] = Z))
    : (Z = n[28]);
  let Q;
  n[29] !== i.title || n[30] !== i.variant
    ? ((Q =
        i.title ??
        (i.variant === `slides`
          ? (0, L.jsx)(t, {
              id: `codex.writingBlock.slides.header.title.fallback`,
              defaultMessage: `Presentation outline`,
              description: `Fallback header title for a completed presentation outline writing block in a Codex task when the outline does not provide its own title`,
            })
          : void 0)),
      (n[29] = i.title),
      (n[30] = i.variant),
      (n[31] = Q))
    : (Q = n[31]);
  let $;
  return (
    n[32] !== i.variant ||
    n[33] !== O ||
    n[34] !== c ||
    n[35] !== G ||
    n[36] !== J ||
    n[37] !== Y ||
    n[38] !== X ||
    n[39] !== Z ||
    n[40] !== Q ||
    n[41] !== K ||
    n[42] !== q ||
    n[43] !== A.activeToneSectionId ||
    n[44] !== A.displayedToneSections ||
    n[45] !== A.selectToneSection
      ? (($ = (0, L.jsx)(me, {
          activeToneSectionId: A.activeToneSectionId,
          content: O,
          editorKey: c,
          emailMetadata: G,
          isEditable: K,
          onBlur: q,
          onContentChange: J,
          onRecipientChange: Y,
          onSubjectChange: X,
          onToneSectionSelect: A.selectToneSection,
          render: Z,
          testId: `codex-writing-block`,
          title: Q,
          toneSections: A.displayedToneSections,
          variant: i.variant,
        })),
        (n[32] = i.variant),
        (n[33] = O),
        (n[34] = c),
        (n[35] = G),
        (n[36] = J),
        (n[37] = Y),
        (n[38] = X),
        (n[39] = Z),
        (n[40] = Q),
        (n[41] = K),
        (n[42] = q),
        (n[43] = A.activeToneSectionId),
        (n[44] = A.displayedToneSections),
        (n[45] = A.selectToneSection),
        (n[46] = $))
      : ($ = n[46]),
    $
  );
}
function xe(e, t) {
  return t == null ? e : { ...e, ...t };
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = i()),
      h(),
      c(),
      _(),
      n(),
      (I = o()),
      r(),
      g(),
      b(),
      w(),
      A(),
      T(),
      j(),
      E(),
      D(),
      f(),
      l(),
      (L = a()));
  }))();
}
R();
export { M as CodexWritingBlockDirectiveRenderer };
//# sourceMappingURL=codex-writing-block-directive-renderer-9c1e4336e349.js.map
