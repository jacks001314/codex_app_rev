import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  FBt as i,
  HO as a,
  IH as ee,
  IO as te,
  JO as o,
  LNt as s,
  LO as ne,
  Mst as re,
  NH as ie,
  NSt as c,
  PBt as l,
  Qst as ae,
  RO as oe,
  TY as u,
  USt as se,
  Uot as d,
  Vot as ce,
  WO as le,
  XOt as f,
  Y3 as p,
  Z3 as ue,
  ZSt as m,
  e6 as h,
  iCt as de,
  jst as g,
  nCt as fe,
  okt as pe,
  qO as me,
  tkt as _,
  vst as he,
  yst as ge,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as v,
  Brr as y,
  HPn as _e,
  J2n as ve,
  MT as ye,
  Oqn as b,
  QCr as x,
  SQn as be,
  Tqn as xe,
  VPn as S,
  WCr as Se,
  X2n as C,
  Y1n as Ce,
  Ycr as we,
  fPn as Te,
  hPn as Ee,
  iRr as De,
  jT as w,
  mPn as T,
  n0n as Oe,
  tyr as E,
  xMr as ke,
  xQn as Ae,
  yMr as D,
  zRr as je,
} from "./app-initial-ad16eaadf81f.js";
import { r as O, t as Me } from "./chatgpt-conversation-share-preview-5560d1f28e6b.js";
function k(e) {
  let r = (0, Ne.c)(85),
    { conversationId: i, serverId: a, messageId: o, onClose: s } = e,
    c = n(ae),
    l = pe(),
    u = se(),
    d = ye(),
    f = de(je),
    ue = (0, A.useRef)(!1),
    m;
  r[0] === s
    ? (m = r[1])
    : ((m = () => {
        ((ue.current = !0), s());
      }),
      (r[0] = s),
      (r[1] = m));
  let h = m,
    g;
  r[2] !== f || r[3] !== h || r[4] !== d || r[5] !== u || r[6] !== c || r[7] !== a
    ? ((g = {
        mutationFn: async (e) => {
          let t = c.get(we),
            { clientThreadId: n } = await _e(c, { conversationId: a, messageId: e });
          !ue.current && d() && c.get(je) === f && c.get(we) === t && (h(), u(ce(n)));
        },
      }),
      (r[2] = f),
      (r[3] = h),
      (r[4] = d),
      (r[5] = u),
      (r[6] = c),
      (r[7] = a),
      (r[8] = g))
    : (g = r[8]);
  let { mutate: he, isPending: v, isError: y, reset: b } = ge(g),
    [x, be] = (0, A.useState)(0),
    S;
  r[9] !== i || r[10] !== o || r[11] !== c
    ? ((S = () => {
        let e = Se({ current_node: c.get(Ce, i), mapping: c.get(Oe, i) ?? {} }),
          t = e.findIndex((e) => e.id === o);
        return t < 0 ? [] : e.slice(t);
      }),
      (r[9] = i),
      (r[10] = o),
      (r[11] = c),
      (r[12] = S))
    : (S = r[12]);
  let [C] = (0, A.useState)(S),
    w;
  r[13] !== f || r[14] !== o || r[15] !== a
    ? ((w = [`chatgpt-conversation-versions`, f, a, o]), (r[13] = f), (r[14] = o), (r[15] = a), (r[16] = w))
    : (w = r[16]);
  let T;
  r[17] !== o || r[18] !== c || r[19] !== a
    ? ((T = async (e) => {
        let { signal: t } = e,
          n = await De.safeGet(`/conversations/{conversation_id}/versions`, {
            parameters: { path: { conversation_id: a }, query: { message_id: o } },
            additionalHeaders: Te(c, a),
            signal: t,
          });
        return (ke(c, ve, { conversationId: a, messageId: o, versionCount: n.length }), n);
      }),
      (r[17] = o),
      (r[18] = c),
      (r[19] = a),
      (r[20] = T))
    : (T = r[20]);
  let E;
  r[21] !== w || r[22] !== T
    ? ((E = { queryKey: w, staleTime: 0, retry: !1, queryFn: T }), (r[21] = w), (r[22] = T), (r[23] = E))
    : (E = r[23]);
  let { data: D, isPending: O, isError: k, refetch: M } = re(E),
    N = fe(Oe, i),
    P,
    F,
    I,
    L;
  if (r[24] !== x || r[25] !== C || r[26] !== k || r[27] !== N || r[28] !== a || r[29] !== D) {
    I = D == null || N == null ? null : [...D.filter((e) => !Ae(N, e)), C];
    let e = I?.[x];
    ((F = I != null && x === I.length - 1),
      (P = !k && !F ? e?.at(-1)?.id : null),
      (L = e == null ? [] : xe({ mapping: Ee(a, e), current_node: e.at(-1)?.id ?? `paginated-root:${a}` })),
      (r[24] = x),
      (r[25] = C),
      (r[26] = k),
      (r[27] = N),
      (r[28] = a),
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
  r[36] !== P || r[37] !== he || r[38] !== v
    ? ((z = (e) => {
        (e.preventDefault(), P != null && !v && he(P));
      }),
      (r[36] = P),
      (r[37] = he),
      (r[38] = v),
      (r[39] = z))
    : (z = r[39]);
  let B;
  r[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, j.jsx)(oe, {
        title: (0, j.jsx)(me, {
          children: (0, j.jsx)(_, {
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
          children: (0, j.jsx)(t, {}),
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
            (0, j.jsx)(_, {
              id: `chatgpt.versions.error`,
              defaultMessage: `Could not load versions`,
              description: `Error when fetching earlier conversation versions fails`,
            }),
            (0, j.jsx)(p, {
              color: `secondary`,
              onClick: () => void M(),
              children: (0, j.jsx)(_, {
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
  r[48] !== k || r[49] !== O || r[50] !== a || r[51] !== Pe
    ? ((W = !O && !k && (0, j.jsx)(Me, { preview: `history`, serverConversationId: a, turns: Pe })),
      (r[48] = k),
      (r[49] = O),
      (r[50] = a),
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
          children: (0, j.jsx)(_, {
            id: `chatgpt.versions.branchError`,
            defaultMessage: `Failed to create chat`,
            description: `Error when branching a historical conversation version into a new chat fails; the user can retry with the branch button`,
          }),
        })),
      (r[58] = y),
      (r[59] = K));
  let q;
  r[60] !== x || r[61] !== F || r[62] !== l || r[63] !== v || r[64] !== I || r[65] !== b
    ? ((q =
        I == null
          ? null
          : (0, j.jsxs)(`div`, {
              className: `flex shrink-0 items-center gap-2 whitespace-nowrap select-none`,
              children: [
                (0, j.jsx)(p, {
                  color: `ghost`,
                  size: `icon`,
                  disabled: v || x === 0,
                  onClick: () => {
                    (be(x - 1), b());
                  },
                  "aria-label": l.formatMessage({
                    id: `chatgpt.versions.previous`,
                    defaultMessage: `Previous version`,
                    description: `Show the previous conversation version in the read-only dialog`,
                  }),
                  children: (0, j.jsx)(ie, {}),
                }),
                F
                  ? (0, j.jsx)(_, {
                      id: `chatgpt.versions.current`,
                      defaultMessage: `Current version`,
                      description: `Label identifying the current conversation branch in the versions dialog`,
                    })
                  : (0, j.jsx)(_, {
                      id: `chatgpt.versions.number`,
                      defaultMessage: `Version {number}`,
                      values: { number: x + 1 },
                      description: `Label of an earlier conversation version; number is its one-based position`,
                    }),
                (0, j.jsx)(p, {
                  color: `ghost`,
                  size: `icon`,
                  disabled: v || x === I.length - 1,
                  onClick: () => {
                    (be(x + 1), b());
                  },
                  "aria-label": l.formatMessage({
                    id: `chatgpt.versions.next`,
                    defaultMessage: `Next version`,
                    description: `Show the next conversation version in the read-only dialog`,
                  }),
                  children: (0, j.jsx)(ee, {}),
                }),
              ],
            })),
      (r[60] = x),
      (r[61] = F),
      (r[62] = l),
      (r[63] = v),
      (r[64] = I),
      (r[65] = b),
      (r[66] = q))
    : (q = r[66]);
  let J;
  r[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, j.jsx)(_, {
        id: `chatgpt.versions.close`,
        defaultMessage: `Return to current version`,
        description: `Close the read-only versions dialog without changing the active conversation`,
      })),
      (r[67] = J))
    : (J = r[67]);
  let Y;
  r[68] === h
    ? (Y = r[69])
    : ((Y = (0, j.jsx)(p, { color: `secondary`, onClick: h, children: J })), (r[68] = h), (r[69] = Y));
  let X;
  r[70] !== P || r[71] !== v
    ? ((X =
        P != null &&
        (0, j.jsx)(p, {
          color: `primary`,
          loading: v,
          type: `submit`,
          children: (0, j.jsx)(_, {
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
    ? ((Z = (0, j.jsxs)(ne, { className: `flex-wrap`, expandSingleButton: !1, children: [q, Y, X] })),
      (r[73] = q),
      (r[74] = Y),
      (r[75] = X),
      (r[76] = Z))
    : (Z = r[76]);
  let Q;
  r[77] !== G || r[78] !== K || r[79] !== Z || r[80] !== z
    ? ((Q = (0, j.jsxs)(te, { as: `form`, size: `full`, onSubmit: z, children: [B, G, K, Z] })),
      (r[77] = G),
      (r[78] = K),
      (r[79] = Z),
      (r[80] = z),
      (r[81] = Q))
    : (Q = r[81]);
  let $;
  return (
    r[82] !== Q || r[83] !== R
      ? (($ = (0, j.jsx)(le, { open: !0, onOpenChange: R, size: `xxxwideTall`, children: Q })),
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
    ((Ne = l()),
      C(),
      he(),
      g(),
      m(),
      x(),
      (A = i()),
      f(),
      c(),
      y(),
      ue(),
      o(),
      a(),
      u(),
      h(),
      v(),
      D(),
      r(),
      w(),
      b(),
      O(),
      E(),
      S(),
      be(),
      d(),
      T(),
      (j = s()));
  }))();
}
M();
export { k as ConversationVersionsDialog };
//# sourceMappingURL=versions-dialog-ce4afb5291b9.js.map
