import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  Got as i,
  IH as a,
  LNt as o,
  MNt as s,
  NH as c,
  NNt as l,
  NSt as u,
  PBt as d,
  Qst as f,
  TY as p,
  Uot as m,
  VSt as h,
  XOt as g,
  XSt as _,
  Y3 as v,
  Z3 as y,
  ZSt as b,
  nB as ee,
  nCt as te,
  okt as ne,
  rB as x,
  tkt as S,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BZt as C,
  C2n as re,
  GIn as ie,
  HIn as w,
  MIn as T,
  PIn as E,
  S2n as ae,
  VPn as D,
  XGt as O,
  Y1n as oe,
  a$n as k,
  i$n as A,
  m0n as j,
  m2n as se,
  o$n as ce,
  qGt as le,
  r$n as M,
  s$n as ue,
  x0n as N,
} from "./app-initial-ad16eaadf81f.js";
async function de(e, t, n, { canSubmit: r }) {
  let i = e.get(ce, t),
    a = i?.view.definition.sections.find((e) => e.id === n);
  if (
    !r ||
    a == null ||
    a.state === `locked` ||
    i?.entry?.status === `sending` ||
    e.get(se, t) ||
    N(e.get(j, t))
  )
    return;
  if (a.start_message_id != null && (i?.entry?.sectionId !== n || i.entry.status !== `failed`)) {
    ue(e, t, n);
    return;
  }
  let o = e.get(T, t),
    s = e.get(E, t),
    c = C({
      prompt: `Begin section.`,
      messageMetadata: { is_visually_hidden_from_conversation: !0 },
      systemHints: s,
    });
  M(e, t, n, c.message.id);
  let l = (r) => {
    A(e, t, n, c.message.id, r);
  };
  try {
    (await O(e, {
      conversationId: t,
      model: o.slug,
      requestedDefaultModel: w(e, t, o.slug),
      thinkingEffort: o.thinkingEffort,
      parentMessageId: e.get(oe, t) ?? void 0,
      prompt: `Begin section.`,
      systemHints: s,
      userCompletionMessages: c,
      sectionedConversationAction: { type: `enter`, section_id: n },
      isSubmissionCurrent: () => {
        let r = e.get(ce, t);
        return r?.view.id === i?.view.id && r?.entryMessageIds[n]?.at(-1) === c.message.id;
      },
      onCompletion: l,
    })) ?? l(`failed`);
  } catch {
    l(`failed`);
  }
}
function P() {
  return (P = e(() => {
    (ie(), D(), le(), k());
  }))();
}
function fe(e) {
  let n = (0, pe.c)(132),
    { conversationId: r, placement: o, canSubmit: l } = e,
    u = t(f),
    d = ne(),
    p = h(),
    [m, g] = _(),
    y;
  n[0] === m ? (y = n[1]) : ((y = m.get(`section_id`)), (n[0] = m), (n[1] = y));
  let b = y,
    x = (0, F.useRef)(null),
    C = te(ce, r),
    re = (0, F.useRef)(null),
    ie = (0, F.useRef)(null),
    w = C?.selectedSectionId,
    T = C?.view.definition.sections,
    E = T?.[0],
    D =
      o === `progress` &&
      b == null &&
      l &&
      E != null &&
      C?.view.current_section_id === E.id &&
      E.start_message_id == null &&
      C.entry == null &&
      !C.entryMessageIds[E.id]?.length,
    O;
  n[2] !== l || n[3] !== r || n[4] !== E || n[5] !== u
    ? ((O = () => {
        E != null && de(u, r, E.id, { canSubmit: l });
      }),
      (n[2] = l),
      (n[3] = r),
      (n[4] = E),
      (n[5] = u),
      (n[6] = O))
    : (O = n[6]);
  let oe = (0, F.useEffectEvent)(O),
    k;
  n[7] !== D || n[8] !== oe
    ? ((k = () => {
        D && oe();
      }),
      (n[7] = D),
      (n[8] = oe),
      (n[9] = k))
    : (k = n[9]);
  let A;
  (n[10] !== r || n[11] !== D ? ((A = [D, r]), (n[10] = r), (n[11] = D), (n[12] = A)) : (A = n[12]),
    (0, F.useEffect)(k, A));
  let j;
  n[13] !== l ||
  n[14] !== r ||
  n[15] !== p.key ||
  n[16] !== p.pathname ||
  n[17] !== b ||
  n[18] !== u ||
  n[19] !== g ||
  n[20] !== C
    ? ((j = () => {
        let e = `${r}:${p.key}`;
        if (C == null || x.current === e) return;
        let t = i(p.pathname)?.params.conversationId;
        if (t == null || ae(u.get, t) !== ae(u.get, r)) return;
        if (b == null) {
          g((e) => (e.set(`section_id`, C.selectedSectionId), e), { replace: !0, preventScrollReset: !0 });
          return;
        }
        let n = C.view.definition.sections.find((e) => e.id === b);
        if (n == null || n.state === `locked`) {
          x.current = e;
          return;
        }
        n.start_message_id == null
          ? C.entry == null
            ? l && ((x.current = e), de(u, r, n.id, { canSubmit: l }))
            : ((x.current = e), C.entry.sectionId === n.id && ue(u, r, n.id))
          : ((x.current = e), ue(u, r, n.id));
      }),
      (n[13] = l),
      (n[14] = r),
      (n[15] = p.key),
      (n[16] = p.pathname),
      (n[17] = b),
      (n[18] = u),
      (n[19] = g),
      (n[20] = C),
      (n[21] = j))
    : (j = n[21]);
  let se = (0, F.useEffectEvent)(j),
    le = C != null,
    M;
  n[22] !== o || n[23] !== se
    ? ((M = () => {
        o === `progress` && se();
      }),
      (n[22] = o),
      (n[23] = se),
      (n[24] = M))
    : (M = n[24]);
  let N;
  (n[25] !== l || n[26] !== r || n[27] !== le || n[28] !== p.key || n[29] !== o || n[30] !== b
    ? ((N = [o, r, p.key, b, le, l]),
      (n[25] = l),
      (n[26] = r),
      (n[27] = le),
      (n[28] = p.key),
      (n[29] = o),
      (n[30] = b),
      (n[31] = N))
    : (N = n[31]),
    (0, F.useEffect)(M, N));
  let P;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        let e = re.current,
          t = ie.current;
        if (e == null || t == null) return;
        let n = e.getBoundingClientRect(),
          r = t.getBoundingClientRect();
        r.left < n.left
          ? e.scrollBy({ left: r.left - n.left })
          : r.right > n.right && e.scrollBy({ left: r.right - n.right });
      }),
      (n[32] = P))
    : (P = n[32]);
  let fe = T?.length,
    L;
  if (
    (n[33] !== w || n[34] !== fe ? ((L = [w, fe]), (n[33] = w), (n[34] = fe), (n[35] = L)) : (L = n[35]),
    (0, F.useEffect)(P, L),
    C == null || T == null)
  )
    return null;
  let me;
  n[36] === w ? (me = n[37]) : ((me = (e) => e.id === w), (n[36] = w), (n[37] = me));
  let R = T.findIndex(me),
    z = T[R - 1],
    B = T[R + 1],
    V;
  if (n[38] !== T || n[39] !== C.view.current_section_id) {
    let e;
    (n[41] === C.view.current_section_id
      ? (e = n[42])
      : ((e = (e) => e.id === C.view.current_section_id), (n[41] = C.view.current_section_id), (n[42] = e)),
      (V = T.find(e)),
      (n[38] = T),
      (n[39] = C.view.current_section_id),
      (n[40] = V));
  } else V = n[40];
  let he = V,
    H = w !== C.view.current_section_id && C.entry?.sectionId !== w,
    ge;
  n[43] !== l || n[44] !== C.entry?.status
    ? ((ge = (e) =>
        e != null &&
        e.state !== `locked` &&
        (e.start_message_id != null || (l && C.entry?.status !== `sending`))),
      (n[43] = l),
      (n[44] = C.entry?.status),
      (n[45] = ge))
    : (ge = n[45]);
  let U = ge,
    _e;
  n[46] !== U || n[47] !== l || n[48] !== r || n[49] !== u || n[50] !== g
    ? ((_e = (e) => {
        U(e) &&
          (e.start_message_id == null ? de(u, r, e.id, { canSubmit: l }) : ue(u, r, e.id),
          g((t) => (t.set(`section_id`, e.id), t), { preventScrollReset: !0 }));
      }),
      (n[46] = U),
      (n[47] = l),
      (n[48] = r),
      (n[49] = u),
      (n[50] = g),
      (n[51] = _e))
    : (_e = n[51]);
  let W = _e,
    ve;
  n[52] === d
    ? (ve = n[53])
    : ((ve = d.formatMessage({
        id: `sectionedConversation.previousSection`,
        defaultMessage: `Previous section`,
        description: `Accessible name of the arrow that revisits the preceding section of a guided conversation`,
      })),
      (n[52] = d),
      (n[53] = ve));
  let ye = ve,
    be;
  n[54] === d
    ? (be = n[55])
    : ((be = d.formatMessage({
        id: `sectionedConversation.nextSection`,
        defaultMessage: `Next section`,
        description: `Accessible name of the arrow that enters or revisits the next unlocked section of a guided conversation`,
      })),
      (n[54] = d),
      (n[55] = be));
  let xe = be;
  if (o === `progress`) {
    let e;
    n[56] === d
      ? (e = n[57])
      : ((e = d.formatMessage({
          id: `sectionedConversation.sections`,
          defaultMessage: `Sections`,
          description: `Accessible label for guided conversation progress navigation`,
        })),
        (n[56] = d),
        (n[57] = e));
    let t;
    n[58] !== U || n[59] !== z ? ((t = U(z)), (n[58] = U), (n[59] = z), (n[60] = t)) : (t = n[60]);
    let r = !t,
      i;
    n[61] !== W || n[62] !== z ? ((i = () => z && W(z)), (n[61] = W), (n[62] = z), (n[63] = i)) : (i = n[63]);
    let o;
    n[64] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, I.jsx)(c, { className: `rtl:rotate-180` })), (n[64] = o))
      : (o = n[64]);
    let l;
    n[65] !== ye || n[66] !== r || n[67] !== i
      ? ((l = (0, I.jsx)(v, {
          color: `ghost`,
          size: `iconCircle`,
          disabled: r,
          "aria-label": ye,
          onClick: i,
          children: o,
        })),
        (n[65] = ye),
        (n[66] = r),
        (n[67] = i),
        (n[68] = l))
      : (l = n[68]);
    let u;
    n[69] !== U || n[70] !== d || n[71] !== W || n[72] !== T || n[73] !== w
      ? ((u = T.map((e, t) =>
          (0, I.jsx)(
            ee,
            {
              tooltipContent: e.name,
              children: (0, I.jsx)(v, {
                ref: e.id === w ? ie : void 0,
                color: `ghostMuted`,
                size: `paginationDot`,
                disabled: !U(e),
                "aria-current": e.id === w ? `step` : void 0,
                "aria-label": d.formatMessage(
                  {
                    id: `sectionedConversation.sectionName`,
                    defaultMessage: `Section {number}: {name}{locked, select, true { (locked)} other {}}`,
                    description: `Accessible section button label with its number, author-provided name, and whether it is locked`,
                  },
                  { number: t + 1, name: e.name, locked: String(e.state === `locked`) },
                ),
                onClick: () => W(e),
                children: (0, I.jsx)(`span`, {
                  className: s(
                    `h-1.5 w-full rounded-full`,
                    e.id === w || e.state === `completed` ? `bg-text` : `bg-text-tertiary`,
                  ),
                }),
              }),
            },
            e.id,
          ),
        )),
        (n[69] = U),
        (n[70] = d),
        (n[71] = W),
        (n[72] = T),
        (n[73] = w),
        (n[74] = u))
      : (u = n[74]);
    let f;
    n[75] === u
      ? (f = n[76])
      : ((f = (0, I.jsx)(`div`, {
          ref: re,
          className: `flex max-w-sm min-w-0 items-center gap-2 overflow-x-auto`,
          children: u,
        })),
        (n[75] = u),
        (n[76] = f));
    let p;
    n[77] !== U || n[78] !== B ? ((p = U(B)), (n[77] = U), (n[78] = B), (n[79] = p)) : (p = n[79]);
    let m = !p,
      h;
    n[80] !== W || n[81] !== B ? ((h = () => B && W(B)), (n[80] = W), (n[81] = B), (n[82] = h)) : (h = n[82]);
    let g;
    n[83] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, I.jsx)(a, { className: `rtl:rotate-180` })), (n[83] = g))
      : (g = n[83]);
    let _;
    n[84] !== xe || n[85] !== m || n[86] !== h
      ? ((_ = (0, I.jsx)(v, {
          color: `ghost`,
          size: `iconCircle`,
          disabled: m,
          "aria-label": xe,
          onClick: h,
          children: g,
        })),
        (n[84] = xe),
        (n[85] = m),
        (n[86] = h),
        (n[87] = _))
      : (_ = n[87]);
    let y;
    return (
      n[88] !== e || n[89] !== l || n[90] !== f || n[91] !== _
        ? ((y = (0, I.jsxs)(`nav`, {
            className: `flex shrink-0 items-center justify-center gap-1 py-1 select-none`,
            "aria-label": e,
            children: [l, f, _],
          })),
          (n[88] = e),
          (n[89] = l),
          (n[90] = f),
          (n[91] = _),
          (n[92] = y))
        : (y = n[92]),
      y
    );
  }
  let G;
  n[93] !== l || n[94] !== r || n[95] !== u || n[96] !== C.entry
    ? ((G =
        C.entry?.status === `failed` &&
        (0, I.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          role: `alert`,
          children: [
            (0, I.jsx)(`span`, {
              className: `text-sm text-secondary`,
              children: (0, I.jsx)(S, {
                id: `sectionedConversation.entryFailed`,
                defaultMessage: `Couldn't start this section`,
                description: `Error shown when a guided conversation section entry or introduction fails`,
              }),
            }),
            (0, I.jsx)(v, {
              color: `secondary`,
              size: `actionSm`,
              disabled: !l,
              onClick: () => {
                C.entry != null && de(u, r, C.entry.sectionId, { canSubmit: l });
              },
              children: (0, I.jsx)(S, {
                id: `sectionedConversation.retry`,
                defaultMessage: `Try again`,
                description: `Retry a failed guided conversation section introduction`,
              }),
            }),
          ],
        })),
      (n[93] = l),
      (n[94] = r),
      (n[95] = u),
      (n[96] = C.entry),
      (n[97] = G))
    : (G = n[97]);
  let Se = H ? `grid grid-cols-2 @lg:grid-cols-3` : `flex flex-wrap justify-between`,
    K;
  n[98] === Se ? (K = n[99]) : ((K = s(`items-center gap-2`, Se)), (n[98] = Se), (n[99] = K));
  let q;
  n[100] !== W || n[101] !== z || n[102] !== H
    ? ((q =
        z != null &&
        (0, I.jsxs)(v, {
          className: H ? `col-start-1 row-start-1 justify-self-start` : void 0,
          color: `ghost`,
          size: `actionSm`,
          onClick: () => W(z),
          children: [
            (0, I.jsx)(c, { className: `rtl:rotate-180` }),
            (0, I.jsx)(S, {
              id: `sectionedConversation.previous`,
              defaultMessage: `Previous`,
              description: `Revisit the preceding section above the guided conversation composer`,
            }),
          ],
        })),
      (n[100] = W),
      (n[101] = z),
      (n[102] = H),
      (n[103] = q))
    : (q = n[103]);
  let J;
  n[104] !== he || n[105] !== W || n[106] !== H
    ? ((J =
        H &&
        he != null &&
        (0, I.jsx)(v, {
          className: `col-span-2 row-start-2 justify-self-center @lg:col-span-1 @lg:col-start-2 @lg:row-start-1`,
          color: `secondary`,
          size: `actionSm`,
          onClick: () => W(he),
          children: (0, I.jsx)(S, {
            id: `sectionedConversation.returnToCurrent`,
            defaultMessage: `Return to current section`,
            description: `Return from a read-only earlier section to the current section where the user can reply`,
          }),
        })),
      (n[104] = he),
      (n[105] = W),
      (n[106] = H),
      (n[107] = J))
    : (J = n[107]);
  let Y;
  n[108] !== R || n[109] !== H || n[110] !== T || n[111] !== C.entry?.status
    ? ((Y =
        !H &&
        C.entry?.status === `sending` &&
        T[R]?.start_message_id == null &&
        (0, I.jsx)(`span`, {
          className: `text-sm text-secondary`,
          role: `status`,
          children: (0, I.jsx)(S, {
            id: `sectionedConversation.starting`,
            defaultMessage: `Starting section…`,
            description: `Status while a guided conversation section entry is being submitted`,
          }),
        })),
      (n[108] = R),
      (n[109] = H),
      (n[110] = T),
      (n[111] = C.entry?.status),
      (n[112] = Y))
    : (Y = n[112]);
  let X;
  n[113] !== H || n[114] !== C.entry?.status || n[115] !== C.view.is_complete
    ? ((X =
        !H &&
        C.entry?.status !== `sending` &&
        C.view.is_complete &&
        (0, I.jsx)(`span`, {
          className: `text-sm text-secondary`,
          role: `status`,
          children: (0, I.jsx)(S, {
            id: `sectionedConversation.complete`,
            defaultMessage: `All sections complete`,
            description: `Status after all sections of a guided conversation are complete`,
          }),
        })),
      (n[113] = H),
      (n[114] = C.entry?.status),
      (n[115] = C.view.is_complete),
      (n[116] = X))
    : (X = n[116]);
  let Z;
  n[117] !== U || n[118] !== W || n[119] !== B || n[120] !== H
    ? ((Z =
        B != null &&
        B.state !== `locked` &&
        (0, I.jsxs)(v, {
          className: H ? `col-start-2 row-start-1 justify-self-end @lg:col-start-3` : `ms-auto`,
          color: H ? `ghost` : `primary`,
          size: `actionSm`,
          disabled: !U(B),
          onClick: () => W(B),
          children: [
            (0, I.jsx)(S, {
              id: `sectionedConversation.next`,
              defaultMessage: `Next section`,
              description: `Enter or revisit the next unlocked section above the conversation composer`,
            }),
            (0, I.jsx)(a, { className: `rtl:rotate-180` }),
          ],
        })),
      (n[117] = U),
      (n[118] = W),
      (n[119] = B),
      (n[120] = H),
      (n[121] = Z))
    : (Z = n[121]);
  let Q;
  n[122] !== K || n[123] !== q || n[124] !== J || n[125] !== Y || n[126] !== X || n[127] !== Z
    ? ((Q = (0, I.jsxs)(`div`, { className: K, children: [q, J, Y, X, Z] })),
      (n[122] = K),
      (n[123] = q),
      (n[124] = J),
      (n[125] = Y),
      (n[126] = X),
      (n[127] = Z),
      (n[128] = Q))
    : (Q = n[128]);
  let $;
  return (
    n[129] !== G || n[130] !== Q
      ? (($ = (0, I.jsxs)(`div`, {
          className: `@container flex flex-col gap-2 pb-2 select-none`,
          children: [G, Q],
        })),
        (n[129] = G),
        (n[130] = Q),
        (n[131] = $))
      : ($ = n[131]),
    $
  );
}
var pe, F, I;
function L() {
  return (L = e(() => {
    ((pe = d()), l(), b(), (F = r()), g(), u(), y(), p(), x(), n(), re(), m(), P(), k(), (I = o()));
  }))();
}
L();
export { fe as SectionNavigation };
//# sourceMappingURL=navigation-15eda63f9742.js.map
