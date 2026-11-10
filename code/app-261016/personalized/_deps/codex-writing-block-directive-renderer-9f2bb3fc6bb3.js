import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  PBt as r,
  XOt as i,
  ZSt as a,
  nCt as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B_ as c,
  Cjr as l,
  Djr as u,
  F_ as d,
  G as f,
  G_ as ee,
  H0n as p,
  H_ as te,
  I_ as ne,
  J as m,
  K as re,
  K_ as h,
  Ks as g,
  L_ as ie,
  M_ as ae,
  N_ as oe,
  P_ as se,
  R_ as ce,
  U0n as le,
  U_ as ue,
  V_ as _,
  W_ as de,
  Y0n as fe,
  b7 as v,
  e2n as y,
  j_ as pe,
  qs as b,
  v7 as me,
  xjr as x,
  y7 as S,
} from "./app-initial-ad16eaadf81f.js";
import { n as C, t as he } from "./editable-writing-block-c63092446a34.js";
import { n as w, t as ge } from "./writing-block-app-capabilities-80d71e437b42.js";
import { a as T, i as _e, n as E, r as D, t as O } from "./writing-block-directive-renderer-9a018e70f2bd.js";
import {
  a as k,
  i as A,
  n as ve,
  o as j,
  r as ye,
  t as be,
} from "./writing-block-content-update-e439e42a0b38.js";
function M(e) {
  let t = (0, F.c)(8),
    { attributes: n, name: r, rawText: i } = e,
    a = (0, I.useContext)(g),
    o = a?.isStreaming ?? !1,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (e) => {
        if (a == null) return null;
        let t = D(e);
        return e.variant === `slides`
          ? (0, L.jsx)(N, { id: t, context: a, directive: e })
          : (0, L.jsx)(P, { id: t, context: a, directive: e });
      }),
      (t[0] = a),
      (t[1] = s));
  let c;
  return (
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== o || t[6] !== s
      ? ((c = (0, L.jsx)(O, {
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
    a = l(`423161634`),
    o = u(`2470976080`),
    s;
  t[0] !== o || t[1] !== a
    ? ((s = a || o.get(`enabled`, !1)), (t[0] = o), (t[1] = a), (t[2] = s))
    : (s = t[2]);
  let c = s,
    d;
  t[3] !== i || t[4] !== c
    ? ((d = c ? i : { ...i, variant: `standard` }), (t[3] = i), (t[4] = c), (t[5] = d))
    : (d = t[5]);
  let f;
  return (
    t[6] !== r || t[7] !== n || t[8] !== d
      ? ((f = (0, L.jsx)(P, { id: n, context: r, directive: d })),
        (t[6] = r),
        (t[7] = n),
        (t[8] = d),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function P(e) {
  let t = (0, F.c)(47),
    { context: n, directive: r, id: i } = e,
    a;
  t[0] !== n.conversationId || t[1] !== n.turnId || t[2] !== i
    ? ((a = c(n.conversationId, n.turnId, i)),
      (t[0] = n.conversationId),
      (t[1] = n.turnId),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let l = a,
    u = o(se, l),
    p = o(d, l),
    m = o(pe, l),
    g = o(ae, l),
    _ = o(oe, l),
    v = o(ne, l),
    y = o(ie, l),
    b = xe(re(r.metadata, n), p),
    x = u ?? f(r.bodyContent, n),
    [C, w] = (0, I.useState)(null),
    T = C?.source === x ? C.value : x,
    E = _e({ content: T, metadata: b, preserveEmptySections: !n.isStreaming }),
    D = E?.[0]?.content ?? T,
    O;
  t[4] === l
    ? (O = t[5])
    : ((O = (e) => {
        ee(l, e);
      }),
      (t[4] = l),
      (t[5] = O));
  let k = j({
      isPersistenceReady: !0,
      isStreaming: n.isStreaming,
      metadata: b,
      onPersistSelection: O,
      storedActiveToneSectionId: m,
      toneSections: E,
    }),
    A = ye(k.displayedToneSections, k.activeToneSectionId),
    M = {
      metadata: ve({ ...b, subject: p?.subject ?? y ?? b?.subject ?? r.emailMetadata.subject }, E),
      title: r.title,
    };
  y != null &&
    p?.subject == null &&
    fe(p).length === 0 &&
    (M.metadata = { ...M.metadata, ...S(M, { isOriginal: !0 }, y) });
  let N = me(M, A),
    P = `${l}\n${k.activeToneSectionId ?? ``}`,
    [R, Se] = (0, I.useState)({ key: P, value: N }),
    z = k.activeToneSectionId == null || E?.some((e) => e.id === k.activeToneSectionId) === !0;
  z && (R.key !== P || R.value !== N) && Se({ key: P, value: N });
  let B = g ?? r.emailMetadata.bcc,
    V = _ ?? r.emailMetadata.cc,
    H = v ?? r.emailMetadata.recipient,
    U = n.isStreaming && !z && R.key === P ? R.value : N,
    W;
  t[6] !== B || t[7] !== V || t[8] !== H || t[9] !== U || t[10] !== b
    ? ((W = { bcc: B, cc: V, recipient: H, subject: U, writingBlockMetadata: b }),
      (t[6] = B),
      (t[7] = V),
      (t[8] = H),
      (t[9] = U),
      (t[10] = b),
      (t[11] = W))
    : (W = t[11]);
  let G = W,
    K = !n.isStreaming,
    q;
  t[12] === l
    ? (q = t[13])
    : ((q = () => {
        ce(l);
      }),
      (t[12] = l),
      (t[13] = q));
  let J;
  t[14] !== l || t[15] !== w || t[16] !== x || t[17] !== E
    ? ((J = (e, t) => {
        let n = be({ nextContent: e, toneSectionId: t, toneSections: E }),
          r = n.activeToneSectionId != null && n.toneSections != null ? le(n.toneSections) : n.content;
        (w({ source: x, value: r }), te(l, r));
      }),
      (t[14] = l),
      (t[15] = w),
      (t[16] = x),
      (t[17] = E),
      (t[18] = J))
    : (J = t[18]);
  let Y;
  t[19] === l
    ? (Y = t[20])
    : ((Y = (e, t) => {
        ue(l, e, t);
      }),
      (t[19] = l),
      (t[20] = Y));
  let X = (e) => {
      (A.isOriginal && de(l, e), h(l, S(M, A, e)));
    },
    Z;
  t[21] !== n.conversationId ||
  t[22] !== n.isStreaming ||
  t[23] !== r.title ||
  t[24] !== r.variant ||
  t[25] !== l ||
  t[26] !== G ||
  t[27] !== i
    ? ((Z = (e) =>
        (0, L.jsx)(ge, {
          conversationId: n.conversationId,
          context: e,
          editorKey: l,
          emailMetadata: G,
          enableAiTools: !n.isStreaming,
          isStreaming: n.isStreaming,
          onEmailMetadataChange: (e) => {
            h(l, e);
          },
          showMagicEditAction: !n.isStreaming,
          title: r.title,
          variant: r.variant,
          writingBlockId: i,
        })),
      (t[21] = n.conversationId),
      (t[22] = n.isStreaming),
      (t[23] = r.title),
      (t[24] = r.variant),
      (t[25] = l),
      (t[26] = G),
      (t[27] = i),
      (t[28] = Z))
    : (Z = t[28]);
  let Q;
  t[29] !== r.title || t[30] !== r.variant
    ? ((Q =
        r.title ??
        (r.variant === `slides`
          ? (0, L.jsx)(s, {
              id: `codex.writingBlock.slides.header.title.fallback`,
              defaultMessage: `Presentation outline`,
              description: `Fallback header title for a completed presentation outline writing block in a Codex task when the outline does not provide its own title`,
            })
          : void 0)),
      (t[29] = r.title),
      (t[30] = r.variant),
      (t[31] = Q))
    : (Q = t[31]);
  let $;
  return (
    t[32] !== r.variant ||
    t[33] !== D ||
    t[34] !== l ||
    t[35] !== G ||
    t[36] !== J ||
    t[37] !== Y ||
    t[38] !== X ||
    t[39] !== Z ||
    t[40] !== Q ||
    t[41] !== K ||
    t[42] !== q ||
    t[43] !== k.activeToneSectionId ||
    t[44] !== k.displayedToneSections ||
    t[45] !== k.selectToneSection
      ? (($ = (0, L.jsx)(he, {
          activeToneSectionId: k.activeToneSectionId,
          content: D,
          editorKey: l,
          emailMetadata: G,
          isEditable: K,
          onBlur: q,
          onContentChange: J,
          onRecipientChange: Y,
          onSubjectChange: X,
          onToneSectionSelect: k.selectToneSection,
          render: Z,
          testId: `codex-writing-block`,
          title: Q,
          toneSections: k.displayedToneSections,
          variant: r.variant,
        })),
        (t[32] = r.variant),
        (t[33] = D),
        (t[34] = l),
        (t[35] = G),
        (t[36] = J),
        (t[37] = Y),
        (t[38] = X),
        (t[39] = Z),
        (t[40] = Q),
        (t[41] = K),
        (t[42] = q),
        (t[43] = k.activeToneSectionId),
        (t[44] = k.displayedToneSections),
        (t[45] = k.selectToneSection),
        (t[46] = $))
      : ($ = t[46]),
    $
  );
}
function xe(e, t) {
  return t == null ? e : { ...e, ...t };
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = r()),
      v(),
      y(),
      p(),
      a(),
      (I = t()),
      i(),
      x(),
      _(),
      C(),
      k(),
      w(),
      A(),
      T(),
      E(),
      b(),
      m(),
      (L = n()));
  }))();
}
R();
export { M as CodexWritingBlockDirectiveRenderer };
//# sourceMappingURL=codex-writing-block-directive-renderer-9f2bb3fc6bb3.js.map
