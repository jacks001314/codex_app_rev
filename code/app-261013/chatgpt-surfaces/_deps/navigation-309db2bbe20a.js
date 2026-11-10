import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  Cat as r,
  Cot as i,
  IDt as a,
  Ixt as o,
  LV as ee,
  Nxt as s,
  Pxt as c,
  TJ as l,
  Tat as u,
  VDt as d,
  _Mt as f,
  _xt as p,
  cz as m,
  gMt as te,
  jDt as h,
  sz as ne,
  t3 as g,
  vzt as _,
  wot as v,
  wxt as re,
  xMt as y,
  yzt as b,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  BYn as x,
  HYn as ae,
  JZn as oe,
  RYn as se,
  SZn as S,
  VQn as C,
  VYn as ce,
  VZn as w,
  XQn as T,
  YQn as le,
  cNn as E,
  fJt as D,
  hJt as O,
  r3t as k,
  uNn as A,
  vNn as ue,
  xNn as de,
  yjn as j,
  zYn as M,
} from "./app-initial-5851df3f6cb1.js";
async function N(e, t, n, { canSubmit: r }) {
  let i = e.get(ce, t),
    a = i?.view.definition.sections.find((e) => e.id === n);
  if (
    !r ||
    a == null ||
    a.state === `locked` ||
    i?.entry?.status === `sending` ||
    e.get(C, t) ||
    oe(e.get(w, t))
  )
    return;
  if (a.start_message_id != null && (i?.entry?.sectionId !== n || i.entry.status !== `failed`)) {
    ae(e, t, n);
    return;
  }
  let o = e.get(E, t),
    ee = e.get(A, t),
    s = k({
      prompt: `Begin section.`,
      messageMetadata: { is_visually_hidden_from_conversation: !0 },
      systemHints: ee,
    });
  se(e, t, n, s.message.id);
  let c = (r) => {
    M(e, t, n, s.message.id, r);
  };
  try {
    (await O(e, {
      conversationId: t,
      model: o.slug,
      requestedDefaultModel: ue(e, t, o.slug),
      thinkingEffort: o.thinkingEffort,
      parentMessageId: e.get(S, t) ?? void 0,
      prompt: `Begin section.`,
      systemHints: ee,
      userCompletionMessages: s,
      sectionedConversationAction: { type: `enter`, section_id: n },
      isSubmissionCurrent: () => {
        let r = e.get(ce, t);
        return r?.view.id === i?.view.id && r?.entryMessageIds[n]?.at(-1) === s.message.id;
      },
      onCompletion: c,
    })) ?? c(`failed`);
  } catch {
    c(`failed`);
  }
}
function P() {
  return (P = e(() => {
    (de(), j(), D(), x());
  }))();
}
function F(e) {
  let r = (0, fe.c)(132),
    { conversationId: c, placement: l, canSubmit: f } = e,
    p = o(i),
    m = d(),
    h = re(),
    [g, _] = s(),
    v;
  r[0] === g ? (v = r[1]) : ((v = g.get(`section_id`)), (r[0] = g), (r[1] = v));
  let y = v,
    b = (0, I.useRef)(null),
    x = ie(ce, c),
    oe = (0, I.useRef)(null),
    se = (0, I.useRef)(null),
    S = x?.selectedSectionId,
    C = x?.view.definition.sections,
    w = C?.[0],
    T =
      l === `progress` &&
      y == null &&
      f &&
      w != null &&
      x?.view.current_section_id === w.id &&
      w.start_message_id == null &&
      x.entry == null &&
      !x.entryMessageIds[w.id]?.length,
    E;
  r[2] !== f || r[3] !== c || r[4] !== w || r[5] !== p
    ? ((E = () => {
        w != null && N(p, c, w.id, { canSubmit: f });
      }),
      (r[2] = f),
      (r[3] = c),
      (r[4] = w),
      (r[5] = p),
      (r[6] = E))
    : (E = r[6]);
  let D = (0, I.useEffectEvent)(E),
    O;
  r[7] !== T || r[8] !== D
    ? ((O = () => {
        T && D();
      }),
      (r[7] = T),
      (r[8] = D),
      (r[9] = O))
    : (O = r[9]);
  let k;
  (r[10] !== c || r[11] !== T ? ((k = [T, c]), (r[10] = c), (r[11] = T), (r[12] = k)) : (k = r[12]),
    (0, I.useEffect)(O, k));
  let A;
  r[13] !== f ||
  r[14] !== c ||
  r[15] !== h.key ||
  r[16] !== h.pathname ||
  r[17] !== y ||
  r[18] !== p ||
  r[19] !== _ ||
  r[20] !== x
    ? ((A = () => {
        let e = `${c}:${h.key}`;
        if (x == null || b.current === e) return;
        let t = u(h.pathname)?.params.conversationId;
        if (t == null || le(p.get, t) !== le(p.get, c)) return;
        if (y == null) {
          _((e) => (e.set(`section_id`, x.selectedSectionId), e), { replace: !0, preventScrollReset: !0 });
          return;
        }
        let n = x.view.definition.sections.find((e) => e.id === y);
        if (n == null || n.state === `locked`) {
          b.current = e;
          return;
        }
        n.start_message_id == null
          ? x.entry == null
            ? f && ((b.current = e), N(p, c, n.id, { canSubmit: f }))
            : ((b.current = e), x.entry.sectionId === n.id && ae(p, c, n.id))
          : ((b.current = e), ae(p, c, n.id));
      }),
      (r[13] = f),
      (r[14] = c),
      (r[15] = h.key),
      (r[16] = h.pathname),
      (r[17] = y),
      (r[18] = p),
      (r[19] = _),
      (r[20] = x),
      (r[21] = A))
    : (A = r[21]);
  let ue = (0, I.useEffectEvent)(A),
    de = x != null,
    j;
  r[22] !== l || r[23] !== ue
    ? ((j = () => {
        l === `progress` && ue();
      }),
      (r[22] = l),
      (r[23] = ue),
      (r[24] = j))
    : (j = r[24]);
  let M;
  (r[25] !== f || r[26] !== c || r[27] !== de || r[28] !== h.key || r[29] !== l || r[30] !== y
    ? ((M = [l, c, h.key, y, de, f]),
      (r[25] = f),
      (r[26] = c),
      (r[27] = de),
      (r[28] = h.key),
      (r[29] = l),
      (r[30] = y),
      (r[31] = M))
    : (M = r[31]),
    (0, I.useEffect)(j, M));
  let P;
  r[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        let e = oe.current,
          t = se.current;
        if (e == null || t == null) return;
        let n = e.getBoundingClientRect(),
          r = t.getBoundingClientRect();
        r.left < n.left
          ? e.scrollBy({ left: r.left - n.left })
          : r.right > n.right && e.scrollBy({ left: r.right - n.right });
      }),
      (r[32] = P))
    : (P = r[32]);
  let F = C?.length,
    R;
  if (
    (r[33] !== S || r[34] !== F ? ((R = [S, F]), (r[33] = S), (r[34] = F), (r[35] = R)) : (R = r[35]),
    (0, I.useEffect)(P, R),
    x == null || C == null)
  )
    return null;
  let pe;
  r[36] === S ? (pe = r[37]) : ((pe = (e) => e.id === S), (r[36] = S), (r[37] = pe));
  let z = C.findIndex(pe),
    B = C[z - 1],
    V = C[z + 1],
    me;
  if (r[38] !== C || r[39] !== x.view.current_section_id) {
    let e;
    (r[41] === x.view.current_section_id
      ? (e = r[42])
      : ((e = (e) => e.id === x.view.current_section_id), (r[41] = x.view.current_section_id), (r[42] = e)),
      (me = C.find(e)),
      (r[38] = C),
      (r[39] = x.view.current_section_id),
      (r[40] = me));
  } else me = r[40];
  let he = me,
    H = S !== x.view.current_section_id && x.entry?.sectionId !== S,
    ge;
  r[43] !== f || r[44] !== x.entry?.status
    ? ((ge = (e) =>
        e != null &&
        e.state !== `locked` &&
        (e.start_message_id != null || (f && x.entry?.status !== `sending`))),
      (r[43] = f),
      (r[44] = x.entry?.status),
      (r[45] = ge))
    : (ge = r[45]);
  let U = ge,
    _e;
  r[46] !== U || r[47] !== f || r[48] !== c || r[49] !== p || r[50] !== _
    ? ((_e = (e) => {
        U(e) &&
          (e.start_message_id == null ? N(p, c, e.id, { canSubmit: f }) : ae(p, c, e.id),
          _((t) => (t.set(`section_id`, e.id), t), { preventScrollReset: !0 }));
      }),
      (r[46] = U),
      (r[47] = f),
      (r[48] = c),
      (r[49] = p),
      (r[50] = _),
      (r[51] = _e))
    : (_e = r[51]);
  let W = _e,
    ve;
  r[52] === m
    ? (ve = r[53])
    : ((ve = m.formatMessage({
        id: `sectionedConversation.previousSection`,
        defaultMessage: `Previous section`,
        description: `Accessible name of the arrow that revisits the preceding section of a guided conversation`,
      })),
      (r[52] = m),
      (r[53] = ve));
  let ye = ve,
    be;
  r[54] === m
    ? (be = r[55])
    : ((be = m.formatMessage({
        id: `sectionedConversation.nextSection`,
        defaultMessage: `Next section`,
        description: `Accessible name of the arrow that enters or revisits the next unlocked section of a guided conversation`,
      })),
      (r[54] = m),
      (r[55] = be));
  let xe = be;
  if (l === `progress`) {
    let e;
    r[56] === m
      ? (e = r[57])
      : ((e = m.formatMessage({
          id: `sectionedConversation.sections`,
          defaultMessage: `Sections`,
          description: `Accessible label for guided conversation progress navigation`,
        })),
        (r[56] = m),
        (r[57] = e));
    let i;
    r[58] !== U || r[59] !== B ? ((i = U(B)), (r[58] = U), (r[59] = B), (r[60] = i)) : (i = r[60]);
    let a = !i,
      o;
    r[61] !== W || r[62] !== B ? ((o = () => B && W(B)), (r[61] = W), (r[62] = B), (r[63] = o)) : (o = r[63]);
    let s;
    r[64] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, L.jsx)(ee, { className: `rtl:rotate-180` })), (r[64] = s))
      : (s = r[64]);
    let c;
    r[65] !== ye || r[66] !== a || r[67] !== o
      ? ((c = (0, L.jsx)(t, {
          color: `ghost`,
          size: `iconCircle`,
          disabled: a,
          "aria-label": ye,
          onClick: o,
          children: s,
        })),
        (r[65] = ye),
        (r[66] = a),
        (r[67] = o),
        (r[68] = c))
      : (c = r[68]);
    let l;
    r[69] !== U || r[70] !== m || r[71] !== W || r[72] !== C || r[73] !== S
      ? ((l = C.map((e, n) =>
          (0, L.jsx)(
            ne,
            {
              tooltipContent: e.name,
              children: (0, L.jsx)(t, {
                ref: e.id === S ? se : void 0,
                color: `ghostMuted`,
                size: `paginationDot`,
                disabled: !U(e),
                "aria-current": e.id === S ? `step` : void 0,
                "aria-label": m.formatMessage(
                  {
                    id: `sectionedConversation.sectionName`,
                    defaultMessage: `Section {number}: {name}{locked, select, true { (locked)} other {}}`,
                    description: `Accessible section button label with its number, author-provided name, and whether it is locked`,
                  },
                  { number: n + 1, name: e.name, locked: String(e.state === `locked`) },
                ),
                onClick: () => W(e),
                children: (0, L.jsx)(`span`, {
                  className: te(
                    `h-1.5 w-full rounded-full`,
                    e.id === S || e.state === `completed` ? `bg-text` : `bg-text-tertiary`,
                  ),
                }),
              }),
            },
            e.id,
          ),
        )),
        (r[69] = U),
        (r[70] = m),
        (r[71] = W),
        (r[72] = C),
        (r[73] = S),
        (r[74] = l))
      : (l = r[74]);
    let u;
    r[75] === l
      ? (u = r[76])
      : ((u = (0, L.jsx)(`div`, {
          ref: oe,
          className: `flex max-w-sm min-w-0 items-center gap-2 overflow-x-auto`,
          children: l,
        })),
        (r[75] = l),
        (r[76] = u));
    let d;
    r[77] !== U || r[78] !== V ? ((d = U(V)), (r[77] = U), (r[78] = V), (r[79] = d)) : (d = r[79]);
    let f = !d,
      p;
    r[80] !== W || r[81] !== V ? ((p = () => V && W(V)), (r[80] = W), (r[81] = V), (r[82] = p)) : (p = r[82]);
    let h;
    r[83] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, L.jsx)(n, { className: `rtl:rotate-180` })), (r[83] = h))
      : (h = r[83]);
    let g;
    r[84] !== xe || r[85] !== f || r[86] !== p
      ? ((g = (0, L.jsx)(t, {
          color: `ghost`,
          size: `iconCircle`,
          disabled: f,
          "aria-label": xe,
          onClick: p,
          children: h,
        })),
        (r[84] = xe),
        (r[85] = f),
        (r[86] = p),
        (r[87] = g))
      : (g = r[87]);
    let _;
    return (
      r[88] !== e || r[89] !== c || r[90] !== u || r[91] !== g
        ? ((_ = (0, L.jsxs)(`nav`, {
            className: `flex shrink-0 items-center justify-center gap-1 py-1 select-none`,
            "aria-label": e,
            children: [c, u, g],
          })),
          (r[88] = e),
          (r[89] = c),
          (r[90] = u),
          (r[91] = g),
          (r[92] = _))
        : (_ = r[92]),
      _
    );
  }
  let G;
  r[93] !== f || r[94] !== c || r[95] !== p || r[96] !== x.entry
    ? ((G =
        x.entry?.status === `failed` &&
        (0, L.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          role: `alert`,
          children: [
            (0, L.jsx)(`span`, {
              className: `text-sm text-secondary`,
              children: (0, L.jsx)(a, {
                id: `sectionedConversation.entryFailed`,
                defaultMessage: `Couldn't start this section`,
                description: `Error shown when a guided conversation section entry or introduction fails`,
              }),
            }),
            (0, L.jsx)(t, {
              color: `secondary`,
              size: `actionSm`,
              disabled: !f,
              onClick: () => {
                x.entry != null && N(p, c, x.entry.sectionId, { canSubmit: f });
              },
              children: (0, L.jsx)(a, {
                id: `sectionedConversation.retry`,
                defaultMessage: `Try again`,
                description: `Retry a failed guided conversation section introduction`,
              }),
            }),
          ],
        })),
      (r[93] = f),
      (r[94] = c),
      (r[95] = p),
      (r[96] = x.entry),
      (r[97] = G))
    : (G = r[97]);
  let Se = H ? `grid grid-cols-2 @lg:grid-cols-3` : `flex flex-wrap justify-between`,
    K;
  r[98] === Se ? (K = r[99]) : ((K = te(`items-center gap-2`, Se)), (r[98] = Se), (r[99] = K));
  let q;
  r[100] !== W || r[101] !== B || r[102] !== H
    ? ((q =
        B != null &&
        (0, L.jsxs)(t, {
          className: H ? `col-start-1 row-start-1 justify-self-start` : void 0,
          color: `ghost`,
          size: `actionSm`,
          onClick: () => W(B),
          children: [
            (0, L.jsx)(ee, { className: `rtl:rotate-180` }),
            (0, L.jsx)(a, {
              id: `sectionedConversation.previous`,
              defaultMessage: `Previous`,
              description: `Revisit the preceding section above the guided conversation composer`,
            }),
          ],
        })),
      (r[100] = W),
      (r[101] = B),
      (r[102] = H),
      (r[103] = q))
    : (q = r[103]);
  let J;
  r[104] !== he || r[105] !== W || r[106] !== H
    ? ((J =
        H &&
        he != null &&
        (0, L.jsx)(t, {
          className: `col-span-2 row-start-2 justify-self-center @lg:col-span-1 @lg:col-start-2 @lg:row-start-1`,
          color: `secondary`,
          size: `actionSm`,
          onClick: () => W(he),
          children: (0, L.jsx)(a, {
            id: `sectionedConversation.returnToCurrent`,
            defaultMessage: `Return to current section`,
            description: `Return from a read-only earlier section to the current section where the user can reply`,
          }),
        })),
      (r[104] = he),
      (r[105] = W),
      (r[106] = H),
      (r[107] = J))
    : (J = r[107]);
  let Y;
  r[108] !== z || r[109] !== H || r[110] !== C || r[111] !== x.entry?.status
    ? ((Y =
        !H &&
        x.entry?.status === `sending` &&
        C[z]?.start_message_id == null &&
        (0, L.jsx)(`span`, {
          className: `text-sm text-secondary`,
          role: `status`,
          children: (0, L.jsx)(a, {
            id: `sectionedConversation.starting`,
            defaultMessage: `Starting section…`,
            description: `Status while a guided conversation section entry is being submitted`,
          }),
        })),
      (r[108] = z),
      (r[109] = H),
      (r[110] = C),
      (r[111] = x.entry?.status),
      (r[112] = Y))
    : (Y = r[112]);
  let X;
  r[113] !== H || r[114] !== x.entry?.status || r[115] !== x.view.is_complete
    ? ((X =
        !H &&
        x.entry?.status !== `sending` &&
        x.view.is_complete &&
        (0, L.jsx)(`span`, {
          className: `text-sm text-secondary`,
          role: `status`,
          children: (0, L.jsx)(a, {
            id: `sectionedConversation.complete`,
            defaultMessage: `All sections complete`,
            description: `Status after all sections of a guided conversation are complete`,
          }),
        })),
      (r[113] = H),
      (r[114] = x.entry?.status),
      (r[115] = x.view.is_complete),
      (r[116] = X))
    : (X = r[116]);
  let Z;
  r[117] !== U || r[118] !== W || r[119] !== V || r[120] !== H
    ? ((Z =
        V != null &&
        V.state !== `locked` &&
        (0, L.jsxs)(t, {
          className: H ? `col-start-2 row-start-1 justify-self-end @lg:col-start-3` : `ms-auto`,
          color: H ? `ghost` : `primary`,
          size: `actionSm`,
          disabled: !U(V),
          onClick: () => W(V),
          children: [
            (0, L.jsx)(a, {
              id: `sectionedConversation.next`,
              defaultMessage: `Next section`,
              description: `Enter or revisit the next unlocked section above the conversation composer`,
            }),
            (0, L.jsx)(n, { className: `rtl:rotate-180` }),
          ],
        })),
      (r[117] = U),
      (r[118] = W),
      (r[119] = V),
      (r[120] = H),
      (r[121] = Z))
    : (Z = r[121]);
  let Q;
  r[122] !== K || r[123] !== q || r[124] !== J || r[125] !== Y || r[126] !== X || r[127] !== Z
    ? ((Q = (0, L.jsxs)(`div`, { className: K, children: [q, J, Y, X, Z] })),
      (r[122] = K),
      (r[123] = q),
      (r[124] = J),
      (r[125] = Y),
      (r[126] = X),
      (r[127] = Z),
      (r[128] = Q))
    : (Q = r[128]);
  let $;
  return (
    r[129] !== G || r[130] !== Q
      ? (($ = (0, L.jsxs)(`div`, {
          className: `@container flex flex-col gap-2 pb-2 select-none`,
          children: [G, Q],
        })),
        (r[129] = G),
        (r[130] = Q),
        (r[131] = $))
      : ($ = r[131]),
    $
  );
}
var fe, I, L;
function R() {
  return (R = e(() => {
    ((fe = _()), f(), c(), (I = b()), h(), p(), g(), l(), m(), v(), T(), r(), P(), x(), (L = y()));
  }))();
}
R();
export { F as SectionNavigation };
//# sourceMappingURL=navigation-309db2bbe20a.js.map
