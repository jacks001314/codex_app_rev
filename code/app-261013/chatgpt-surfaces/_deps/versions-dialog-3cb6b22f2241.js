import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  Cat as r,
  Cot as ee,
  Ext as te,
  IDt as i,
  Iot as a,
  Ixt as ne,
  LV as re,
  Lot as ie,
  Pxt as o,
  TJ as s,
  VDt as ae,
  Vxt as oe,
  Xot as se,
  Yot as c,
  _O as ce,
  _xt as l,
  cO as le,
  fO as u,
  i3 as d,
  jDt as f,
  mO as ue,
  oO as de,
  r3 as fe,
  sO as pe,
  t3 as p,
  vO as me,
  vzt as m,
  wot as h,
  xMt as g,
  xat as he,
  yzt as _,
  zxt as ge,
} from "./app-shared-bbfeca5e5737.js";
import {
  Byr as _e,
  FFr as ve,
  GMr as ye,
  JJn as be,
  Jyr as v,
  KAn as y,
  Oer as b,
  QDr as xe,
  S$n as x,
  SZn as Se,
  WAn as Ce,
  XDr as we,
  YJn as S,
  Ymr as Te,
  aWn as C,
  b$n as Ee,
  bjn as De,
  ehr as w,
  kZn as Oe,
  nT as T,
  qAn as ke,
  rT as Ae,
  rWn as je,
  yjn as E,
  zFr as D,
} from "./app-initial-5851df3f6cb1.js";
import { r as O, t as Me } from "./chatgpt-conversation-share-preview-8e080c19e2da.js";
function k(e) {
  let r = (0, Ne.c)(85),
    { conversationId: a, serverId: o, messageId: s, onClose: c } = e,
    l = ne(ee),
    u = ae(),
    d = te(),
    f = Ae(),
    p = oe(ye),
    me = (0, A.useRef)(!1),
    m;
  r[0] === c
    ? (m = r[1])
    : ((m = () => {
        ((me.current = !0), c());
      }),
      (r[0] = c),
      (r[1] = m));
  let h = m,
    g;
  r[2] !== p || r[3] !== h || r[4] !== f || r[5] !== d || r[6] !== l || r[7] !== o
    ? ((g = {
        mutationFn: async (e) => {
          let t = l.get(ve),
            { clientThreadId: n } = await De(l, { conversationId: o, messageId: e });
          !me.current && f() && l.get(ye) === p && l.get(ve) === t && (h(), d(he(n)));
        },
      }),
      (r[2] = p),
      (r[3] = h),
      (r[4] = f),
      (r[5] = d),
      (r[6] = l),
      (r[7] = o),
      (r[8] = g))
    : (g = r[8]);
  let { mutate: _, isPending: v, isError: y, reset: b } = ie(g),
    [x, we] = (0, A.useState)(0),
    S;
  r[9] !== a || r[10] !== s || r[11] !== l
    ? ((S = () => {
        let e = _e({ current_node: l.get(Se, a), mapping: l.get(Oe, a) ?? {} }),
          t = e.findIndex((e) => e.id === s);
        return t < 0 ? [] : e.slice(t);
      }),
      (r[9] = a),
      (r[10] = s),
      (r[11] = l),
      (r[12] = S))
    : (S = r[12]);
  let [C] = (0, A.useState)(S),
    w;
  r[13] !== p || r[14] !== s || r[15] !== o
    ? ((w = [`chatgpt-conversation-versions`, p, o, s]), (r[13] = p), (r[14] = s), (r[15] = o), (r[16] = w))
    : (w = r[16]);
  let T;
  r[17] !== s || r[18] !== l || r[19] !== o
    ? ((T = async (e) => {
        let { signal: t } = e,
          n = await Te.safeGet(`/conversations/{conversation_id}/versions`, {
            parameters: { path: { conversation_id: o }, query: { message_id: s } },
            additionalHeaders: Ce(l, o),
            signal: t,
          });
        return (xe(l, Ee, { conversationId: o, messageId: s, versionCount: n.length }), n);
      }),
      (r[17] = s),
      (r[18] = l),
      (r[19] = o),
      (r[20] = T))
    : (T = r[20]);
  let E;
  r[21] !== w || r[22] !== T
    ? ((E = { queryKey: w, staleTime: 0, retry: !1, queryFn: T }), (r[21] = w), (r[22] = T), (r[23] = E))
    : (E = r[23]);
  let { data: D, isPending: O, isError: k, refetch: M } = se(E),
    N = ge(Oe, a),
    P,
    F,
    I,
    L;
  if (r[24] !== x || r[25] !== C || r[26] !== k || r[27] !== N || r[28] !== o || r[29] !== D) {
    I = D == null || N == null ? null : [...D.filter((e) => !be(N, e)), C];
    let e = I?.[x];
    ((F = I != null && x === I.length - 1),
      (P = !k && !F ? e?.at(-1)?.id : null),
      (L = e == null ? [] : je({ mapping: ke(o, e), current_node: e.at(-1)?.id ?? `paginated-root:${o}` })),
      (r[24] = x),
      (r[25] = C),
      (r[26] = k),
      (r[27] = N),
      (r[28] = o),
      (r[29] = D),
      (r[30] = P),
      (r[31] = F),
      (r[32] = I),
      (r[33] = L));
  } else ((P = r[30]), (F = r[31]), (I = r[32]), (L = r[33]));
  let Pe = L,
    R;
  r[34] === h
    ? (R = r[35])
    : ((R = (e) => {
        e || h();
      }),
      (r[34] = h),
      (r[35] = R));
  let z;
  r[36] !== P || r[37] !== _ || r[38] !== v
    ? ((z = (e) => {
        (e.preventDefault(), P != null && !v && _(P));
      }),
      (r[36] = P),
      (r[37] = _),
      (r[38] = v),
      (r[39] = z))
    : (z = r[39]);
  let B;
  r[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, j.jsx)(le, {
        title: (0, j.jsx)(ce, {
          children: (0, j.jsx)(i, {
            id: `chatgpt.versions.title`,
            defaultMessage: `Versions`,
            description: `Title of the read-only conversation versions dialog`,
          }),
        }),
      })),
      (r[40] = B))
    : (B = r[40]);
  let V;
  r[41] === h
    ? (V = r[42])
    : ((V = (e) => {
        e.target instanceof Element && e.target.closest(`a[href]`) && h();
      }),
      (r[41] = h),
      (r[42] = V));
  let H;
  r[43] === O
    ? (H = r[44])
    : ((H =
        O &&
        (0, j.jsx)(`div`, {
          className: `flex h-full items-center justify-center`,
          children: (0, j.jsx)(fe, {}),
        })),
      (r[43] = O),
      (r[44] = H));
  let U;
  r[45] !== k || r[46] !== M
    ? ((U =
        k &&
        (0, j.jsxs)(`div`, {
          role: `alert`,
          children: [
            (0, j.jsx)(i, {
              id: `chatgpt.versions.error`,
              defaultMessage: `Could not load versions`,
              description: `Error when fetching earlier conversation versions fails`,
            }),
            (0, j.jsx)(t, {
              color: `secondary`,
              onClick: () => void M(),
              children: (0, j.jsx)(i, {
                id: `chatgpt.versions.retry`,
                defaultMessage: `Try again`,
                description: `Retry fetching earlier conversation versions`,
              }),
            }),
          ],
        })),
      (r[45] = k),
      (r[46] = M),
      (r[47] = U))
    : (U = r[47]);
  let W;
  r[48] !== k || r[49] !== O || r[50] !== o || r[51] !== Pe
    ? ((W = !O && !k && (0, j.jsx)(Me, { preview: `history`, serverConversationId: o, turns: Pe })),
      (r[48] = k),
      (r[49] = O),
      (r[50] = o),
      (r[51] = Pe),
      (r[52] = W))
    : (W = r[52]);
  let G;
  r[53] !== V || r[54] !== H || r[55] !== U || r[56] !== W
    ? ((G = (0, j.jsxs)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto`,
        onClickCapture: V,
        children: [H, U, W],
      })),
      (r[53] = V),
      (r[54] = H),
      (r[55] = U),
      (r[56] = W),
      (r[57] = G))
    : (G = r[57]);
  let K;
  r[58] === y
    ? (K = r[59])
    : ((K =
        y &&
        (0, j.jsx)(`div`, {
          role: `alert`,
          children: (0, j.jsx)(i, {
            id: `chatgpt.versions.branchError`,
            defaultMessage: `Failed to create chat`,
            description: `Error when branching a historical conversation version into a new chat fails; the user can retry with the branch button`,
          }),
        })),
      (r[58] = y),
      (r[59] = K));
  let q;
  r[60] !== x || r[61] !== F || r[62] !== u || r[63] !== v || r[64] !== I || r[65] !== b
    ? ((q =
        I == null
          ? null
          : (0, j.jsxs)(`div`, {
              className: `flex shrink-0 items-center gap-2 whitespace-nowrap select-none`,
              children: [
                (0, j.jsx)(t, {
                  color: `ghost`,
                  size: `icon`,
                  disabled: v || x === 0,
                  onClick: () => {
                    (we(x - 1), b());
                  },
                  "aria-label": u.formatMessage({
                    id: `chatgpt.versions.previous`,
                    defaultMessage: `Previous version`,
                    description: `Show the previous conversation version in the read-only dialog`,
                  }),
                  children: (0, j.jsx)(re, {}),
                }),
                F
                  ? (0, j.jsx)(i, {
                      id: `chatgpt.versions.current`,
                      defaultMessage: `Current version`,
                      description: `Label identifying the current conversation branch in the versions dialog`,
                    })
                  : (0, j.jsx)(i, {
                      id: `chatgpt.versions.number`,
                      defaultMessage: `Version {number}`,
                      values: { number: x + 1 },
                      description: `Label of an earlier conversation version; number is its one-based position`,
                    }),
                (0, j.jsx)(t, {
                  color: `ghost`,
                  size: `icon`,
                  disabled: v || x === I.length - 1,
                  onClick: () => {
                    (we(x + 1), b());
                  },
                  "aria-label": u.formatMessage({
                    id: `chatgpt.versions.next`,
                    defaultMessage: `Next version`,
                    description: `Show the next conversation version in the read-only dialog`,
                  }),
                  children: (0, j.jsx)(n, {}),
                }),
              ],
            })),
      (r[60] = x),
      (r[61] = F),
      (r[62] = u),
      (r[63] = v),
      (r[64] = I),
      (r[65] = b),
      (r[66] = q))
    : (q = r[66]);
  let J;
  r[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, j.jsx)(i, {
        id: `chatgpt.versions.close`,
        defaultMessage: `Return to current version`,
        description: `Close the read-only versions dialog without changing the active conversation`,
      })),
      (r[67] = J))
    : (J = r[67]);
  let Y;
  r[68] === h
    ? (Y = r[69])
    : ((Y = (0, j.jsx)(t, { color: `secondary`, onClick: h, children: J })), (r[68] = h), (r[69] = Y));
  let X;
  r[70] !== P || r[71] !== v
    ? ((X =
        P != null &&
        (0, j.jsx)(t, {
          color: `primary`,
          loading: v,
          type: `submit`,
          children: (0, j.jsx)(i, {
            id: `chatgpt.versions.branch`,
            defaultMessage: `Branch in new chat`,
            description: `Continue the displayed historical version and its continuation in a new chat, leaving the current conversation unchanged`,
          }),
        })),
      (r[70] = P),
      (r[71] = v),
      (r[72] = X))
    : (X = r[72]);
  let Z;
  r[73] !== q || r[74] !== Y || r[75] !== X
    ? ((Z = (0, j.jsxs)(pe, { className: `flex-wrap`, expandSingleButton: !1, children: [q, Y, X] })),
      (r[73] = q),
      (r[74] = Y),
      (r[75] = X),
      (r[76] = Z))
    : (Z = r[76]);
  let Q;
  r[77] !== G || r[78] !== K || r[79] !== Z || r[80] !== z
    ? ((Q = (0, j.jsxs)(de, { as: `form`, size: `full`, onSubmit: z, children: [B, G, K, Z] })),
      (r[77] = G),
      (r[78] = K),
      (r[79] = Z),
      (r[80] = z),
      (r[81] = Q))
    : (Q = r[81]);
  let $;
  return (
    r[82] !== Q || r[83] !== R
      ? (($ = (0, j.jsx)(ue, { open: !0, onOpenChange: R, size: `xxxwideTall`, children: Q })),
        (r[82] = Q),
        (r[83] = R),
        (r[84] = $))
      : ($ = r[84]),
    $
  );
}
var Ne, A, j;
function M() {
  return (M = e(() => {
    ((Ne = m()),
      x(),
      a(),
      c(),
      o(),
      v(),
      (A = _()),
      f(),
      l(),
      b(),
      p(),
      me(),
      u(),
      s(),
      d(),
      D(),
      we(),
      h(),
      T(),
      C(),
      O(),
      w(),
      E(),
      S(),
      r(),
      y(),
      (j = g()));
  }))();
}
M();
export { k as ConversationVersionsDialog };
//# sourceMappingURL=versions-dialog-3cb6b22f2241.js.map
