import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AH as n,
  AO as r,
  CO as i,
  Cot as a,
  DV as o,
  Ext as s,
  GE as c,
  HT as l,
  IDt as u,
  Iot as ee,
  Ixt as te,
  JC as d,
  Lot as ne,
  Pxt as f,
  TJ as p,
  TO as m,
  VDt as re,
  VT as ie,
  Vxt as ae,
  WE as oe,
  WH as h,
  YV as g,
  Zz as _,
  _Mt as v,
  _O as se,
  _xt as ce,
  bx as y,
  cO as le,
  cz as b,
  fO as x,
  gMt as ue,
  gO as S,
  hot as de,
  iO as C,
  iw as w,
  jDt as T,
  lO as E,
  lot as D,
  mO as fe,
  nst as O,
  oO as pe,
  qC as me,
  rO as he,
  sJ as ge,
  sO as _e,
  sz as ve,
  t3 as k,
  tst as A,
  tw as j,
  vB as M,
  vO as N,
  vzt as P,
  wot as F,
  xMt as ye,
  yx as be,
  yzt as xe,
  zxt as Se,
} from "./app-shared-bbfeca5e5737.js";
import {
  ADr as Ce,
  Fin as I,
  Hin as we,
  J5t as Te,
  K5t as L,
  MRt as Ee,
  NDr as De,
  NRt as R,
  _$n as Oe,
  eDr as ke,
  g$n as Ae,
  iPr as je,
  llt as Me,
  nDr as Ne,
  nan as Pe,
  ran as Fe,
  sPr as Ie,
  ult as z,
  xPn as B,
  yPn as V,
} from "./app-initial-5851df3f6cb1.js";
import { Jg as Le, qg as Re } from "./app-primary-fe8a450b3b04.js";
import { a as ze, i as H, t as Be } from "./chatgpt-saved-memory-state-4d665a109b5e.js";
function Ve(e) {
  let n = (0, W.c)(57),
    { accountId: r, onOptBackIn: i } = e,
    o = te(a),
    s = re(),
    c = ae(Ce),
    { data: l, isLoading: ee } = we(),
    d = Ne(`1862054621`),
    [f, p] = (0, G.useState)(!1),
    m = d && c?.m3mEnabled === !0,
    ie = (l?.structure === `workspace` ? l.id : null) == null || c?.m3mWorkspaceEnabled === !0,
    h = c?.m3mOptedOut === !0,
    g;
  n[0] !== r || n[1] !== o
    ? ((g = (e) => Le(o, r, `m3m_opted_out`, e)), (n[0] = r), (n[1] = o), (n[2] = g))
    : (g = n[2]);
  let _;
  n[3] !== l?.plan_type || n[4] !== s || n[5] !== i || n[6] !== o
    ? ((_ = (e, t) => {
        (o
          .get(Ae)
          .count(`moonshine`, `chatgpt_m3m_opt_out_changed`, {
            opted_out: String(t),
            plan_type: l?.plan_type ?? `unknown`,
            source: `saved_memories_notice`,
          }),
          p(!1),
          t
            ? o
                .get(de)
                .success(
                  s.formatMessage({
                    id: `settings.chatGpt.personalization.memories.experience.reverted`,
                    defaultMessage: `Reverted to legacy memory`,
                    description: `Success toast after reverting from improved ChatGPT memory to the legacy saved memories experience`,
                  }),
                )
            : i());
      }),
      (n[3] = l?.plan_type),
      (n[4] = s),
      (n[5] = i),
      (n[6] = o),
      (n[7] = _))
    : (_ = n[7]);
  let v;
  n[8] !== s || n[9] !== o
    ? ((v = () => {
        o.get(de).danger(
          s.formatMessage({
            id: `settings.chatGpt.personalization.memories.experience.updateError`,
            defaultMessage: `Couldn’t update memory experience`,
            description: `Error toast when switching between improved and legacy ChatGPT memory fails`,
          }),
          { errorAnalytics: { toastId: `settings.chatGpt.personalization.memories.experience.updateError` } },
        );
      }),
      (n[8] = s),
      (n[9] = o),
      (n[10] = v))
    : (v = n[10]);
  let ce;
  n[11] !== g || n[12] !== _ || n[13] !== v
    ? ((ce = { mutationFn: g, onSuccess: _, onError: v }),
      (n[11] = g),
      (n[12] = _),
      (n[13] = v),
      (n[14] = ce))
    : (ce = n[14]);
  let y = ne(ce);
  if (ee || l == null || !m || !ie) return null;
  let b;
  n[15] === h
    ? (b = n[16])
    : ((b = (0, K.jsx)(`div`, {
        className: `text-xs leading-4 text-secondary`,
        children: h
          ? (0, K.jsx)(u, {
              id: `settings.chatGpt.personalization.memories.experience.legacyDescription`,
              defaultMessage: `This is a legacy version of memory, which may become outdated over time. ChatGPT's improved memory automatically stays up to date, leading to more relevant and useful replies`,
              description: `Banner text in Saved memories for a user who opted out of improved ChatGPT memory`,
            })
          : (0, K.jsx)(u, {
              id: `settings.chatGpt.personalization.memories.experience.improvedDescription`,
              defaultMessage: `This is a legacy version of memory, which is no longer used. ChatGPT's improved memory automatically stays up to date, leading to more relevant and useful replies. <learn>Learn more</learn>`,
              description: `Banner text in Saved memories for a user on improved ChatGPT memory; the Learn more link opens the Memory FAQ`,
              values: { learn: U },
              children: He,
            }),
      })),
      (n[15] = h),
      (n[16] = b));
  let x = h ? `primary` : `outlineSurface`,
    ue = y.isPending && y.variables === !1,
    S;
  n[17] !== h || n[18] !== y
    ? ((S = () => {
        h ? y.mutate(!1) : p(!0);
      }),
      (n[17] = h),
      (n[18] = y),
      (n[19] = S))
    : (S = n[19]);
  let C;
  n[20] === h
    ? (C = n[21])
    : ((C = h
        ? (0, K.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.experience.tryImproved`,
            defaultMessage: `Try improved memory`,
            description: `Button that opts back into improved ChatGPT memory`,
          })
        : (0, K.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.experience.revert`,
            defaultMessage: `Revert to this experience`,
            description: `Button that opens confirmation before reverting to legacy saved memories`,
          })),
      (n[20] = h),
      (n[21] = C));
  let w;
  n[22] !== x || n[23] !== ue || n[24] !== S || n[25] !== C || n[26] !== y.isPending
    ? ((w = (0, K.jsx)(t, {
        color: x,
        disabled: y.isPending,
        loading: ue,
        radius: `full`,
        size: `dialogAction`,
        onClick: S,
        children: C,
      })),
      (n[22] = x),
      (n[23] = ue),
      (n[24] = S),
      (n[25] = C),
      (n[26] = y.isPending),
      (n[27] = w))
    : (w = n[27]);
  let T;
  n[28] !== w || n[29] !== b
    ? ((T = (0, K.jsx)(E, { children: (0, K.jsx)(oe, { variant: `settings`, content: b, customCtas: w }) })),
      (n[28] = w),
      (n[29] = b),
      (n[30] = T))
    : (T = n[30]);
  let D;
  n[31] === y.isPending
    ? (D = n[32])
    : ((D = (e) => {
        !e && !y.isPending && p(!1);
      }),
      (n[31] = y.isPending),
      (n[32] = D));
  let O;
  n[33] === y
    ? (O = n[34])
    : ((O = (e) => {
        (e.preventDefault(), y.isPending || y.mutate(!0));
      }),
      (n[33] = y),
      (n[34] = O));
  let me;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, K.jsx)(E, {
        children: (0, K.jsx)(le, {
          title: (0, K.jsx)(se, {
            children: (0, K.jsx)(u, {
              id: `settings.chatGpt.personalization.memories.experience.confirmRevert.title`,
              defaultMessage: `Revert to the legacy saved memories experience?`,
              description: `Confirmation title before reverting to legacy ChatGPT saved memories`,
            }),
          }),
        }),
      })),
      (n[35] = me))
    : (me = n[35]);
  let he;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, K.jsx)(E, {
        children: (0, K.jsx)(`p`, {
          children: (0, K.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.experience.confirmRevert.description`,
            defaultMessage: `ChatGPT’s memory may become outdated over time`,
            description: `Warning before reverting to legacy ChatGPT saved memories`,
          }),
        }),
      })),
      (n[36] = he))
    : (he = n[36]);
  let ge, ve;
  n[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = () => p(!1)),
      (ve = (0, K.jsx)(u, {
        id: `settings.chatGpt.personalization.memories.experience.confirmRevert.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels reverting to legacy ChatGPT saved memories`,
      })),
      (n[37] = ge),
      (n[38] = ve))
    : ((ge = n[37]), (ve = n[38]));
  let k;
  n[39] === y.isPending
    ? (k = n[40])
    : ((k = (0, K.jsx)(t, { disabled: y.isPending, type: `button`, onClick: ge, children: ve })),
      (n[39] = y.isPending),
      (n[40] = k));
  let A;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, K.jsx)(u, {
        id: `settings.chatGpt.personalization.memories.experience.confirmRevert.confirm`,
        defaultMessage: `Revert`,
        description: `Button that confirms reverting to legacy ChatGPT saved memories`,
      })),
      (n[41] = A))
    : (A = n[41]);
  let j;
  n[42] === y.isPending
    ? (j = n[43])
    : ((j = (0, K.jsx)(t, { color: `dangerSolid`, loading: y.isPending, type: `submit`, children: A })),
      (n[42] = y.isPending),
      (n[43] = j));
  let M;
  n[44] !== k || n[45] !== j
    ? ((M = (0, K.jsx)(E, { children: (0, K.jsxs)(_e, { children: [k, j] }) })),
      (n[44] = k),
      (n[45] = j),
      (n[46] = M))
    : (M = n[46]);
  let N;
  n[47] !== O || n[48] !== M
    ? ((N = (0, K.jsxs)(pe, { as: `form`, onSubmit: O, children: [me, he, M] })),
      (n[47] = O),
      (n[48] = M),
      (n[49] = N))
    : (N = n[49]);
  let P;
  n[50] !== f || n[51] !== D || n[52] !== N
    ? ((P = (0, K.jsx)(fe, { open: f, onOpenChange: D, children: N })),
      (n[50] = f),
      (n[51] = D),
      (n[52] = N),
      (n[53] = P))
    : (P = n[53]);
  let F;
  return (
    n[54] !== T || n[55] !== P
      ? ((F = (0, K.jsxs)(K.Fragment, { children: [T, P] })), (n[54] = T), (n[55] = P), (n[56] = F))
      : (F = n[56]),
    F
  );
}
function He(e) {
  return (0, K.jsx)(K.Fragment, { children: G.Children.toArray(e) });
}
function U(e) {
  return (0, K.jsx)(
    V,
    {
      appearance: `secondary`,
      className: `underline`,
      href: q,
      initiator: `external_link`,
      openTarget: `external-browser`,
      children: G.Children.toArray(e),
    },
    `learn`,
  );
}
var W, G, K, q;
function Ue() {
  return (Ue = e(() => {
    ((W = P()),
      ee(),
      f(),
      (G = xe()),
      T(),
      Oe(),
      De(),
      I(),
      c(),
      k(),
      N(),
      x(),
      B(),
      D(),
      F(),
      ke(),
      Re(),
      (K = ye()),
      (q = `https://help.openai.com/en/articles/8590148-memory-faq`));
  }))();
}
function We(e) {
  let t = Date.parse(e.updated_at),
    n = e.last_updated?.timestamp ?? e.created_timestamp,
    r = typeof n == `number` ? n * 1e3 : NaN,
    i = Math.max(Number.isFinite(t) ? t : -1 / 0, Number.isFinite(r) ? r : -1 / 0);
  return Number.isFinite(i) ? i : 0;
}
function Ge(e) {
  let t = [],
    n = [];
  for (let r of e) (r.status === `cold` ? n : t).push(r);
  return { cold: n, warm: t };
}
function Ke(e) {
  let r = (0, nt.c)(173),
    { accountId: c, onClose: l, onOptBackIn: ee } = e,
    d = te(a),
    f = re(),
    p = s(),
    oe = ae(Ce),
    v = Ne(`507055138`),
    ce = Ne(`1946731762`),
    y = Ne(`3453210147`),
    b = Ne(`1862054621`) && oe?.m3mEnabled === !0,
    { data: x } = we(),
    C = x?.id === c,
    w = C && b && oe?.m3mOptedOut !== !0 && (x.structure === `personal` || oe?.m3mWorkspaceEnabled === !0),
    T = v && C && !w,
    D = T && ce,
    k = O(),
    [A, N] = (0, Y.useState)(``),
    [P, F] = (0, Y.useState)(!1),
    [ye, xe] = (0, Y.useState)(!1),
    [I, Te] = (0, Y.useState)(null),
    [L, De] = (0, Y.useState)(!1),
    { data: R, isPending: Oe, isError: ke, isFetching: Ae, refetch: Fe } = Se(Be, c),
    Ie;
  r[0] !== c || r[1] !== k || r[2] !== d
    ? ((Ie = async () => {
        await Promise.all([
          d.query.invalidate(Be, c),
          k.invalidateQueries({ queryKey: [`chatgpt-saved-memory-history`, c] }),
          k.invalidateQueries({ queryKey: [`chatgpt-conversation-context-sources`] }),
        ]);
      }),
      (r[0] = c),
      (r[1] = k),
      (r[2] = d),
      (r[3] = Ie))
    : (Ie = r[3]);
  let z = Ie,
    B;
  r[4] !== c || r[5] !== L || r[6] !== T
    ? ((B = async (e) => {
        if (e === `all`) {
          await je.safeDelete(`/settings/clear_account_user_memory`, {
            additionalHeaders: { "ChatGPT-Account-ID": c },
            requestBody: T ? { delete_history: L } : {},
          });
          return;
        }
        if (
          !(
            await je
              .safeDelete(`/memories/{memory_id}`, {
                additionalHeaders: { "ChatGPT-Account-ID": c },
                parameters: { path: { memory_id: e } },
                isExpectedError: ze,
              })
              .catch(et)
          ).success
        )
          throw Error(`Memory deletion failed`);
      }),
      (r[4] = c),
      (r[5] = L),
      (r[6] = T),
      (r[7] = B))
    : (B = r[7]);
  let V;
  r[8] !== f || r[9] !== d
    ? ((V = (e, t) => {
        (Te(null),
          d
            .get(de)
            .success(
              t === `all`
                ? f.formatMessage({
                    id: `settings.chatGpt.personalization.memories.deleteAll.success`,
                    defaultMessage: `Memory cleared`,
                    description: `Success toast after deleting all saved ChatGPT memories`,
                  })
                : f.formatMessage({
                    id: `settings.chatGpt.personalization.memories.delete.success`,
                    defaultMessage: `Memory deleted`,
                    description: `Success toast after deleting one saved ChatGPT memory`,
                  }),
            ));
      }),
      (r[8] = f),
      (r[9] = d),
      (r[10] = V))
    : (V = r[10]);
  let Le;
  r[11] !== z || r[12] !== B || r[13] !== V
    ? ((Le = { mutationFn: B, onSuccess: V, onSettled: z }),
      (r[11] = z),
      (r[12] = B),
      (r[13] = V),
      (r[14] = Le))
    : (Le = r[14]);
  let { mutate: Re, isPending: H, isError: He } = ne(Le),
    U;
  r[15] === c
    ? (U = r[16])
    : ((U = async (e) => {
        if (
          !(
            await je.safePatch(`/memories/{memory_id}/status`, {
              additionalHeaders: { "ChatGPT-Account-ID": c },
              parameters: { path: { memory_id: e } },
              requestBody: { status: `warm` },
            })
          ).success
        )
          throw Error(`Memory status update failed`);
      }),
      (r[15] = c),
      (r[16] = U));
  let W;
  r[17] !== f || r[18] !== d
    ? ((W = () => {
        d.get(de).success(
          f.formatMessage({
            id: `settings.chatGpt.personalization.memories.prioritize.success`,
            defaultMessage: `Memory prioritized`,
            description: `Success toast in the ChatGPT saved memories manager after a deprioritized memory is restored to normal priority.`,
          }),
        );
      }),
      (r[17] = f),
      (r[18] = d),
      (r[19] = W))
    : (W = r[19]);
  let G;
  r[20] !== f || r[21] !== d
    ? ((G = () => {
        d.get(de).danger(
          f.formatMessage({
            id: `settings.chatGpt.personalization.memories.prioritize.error`,
            defaultMessage: `Couldn’t prioritize this memory`,
            description: `Error toast in the ChatGPT saved memories manager after prioritizing one memory fails. The memory remains deprioritized and the user can retry.`,
          }),
          { errorAnalytics: { toastId: `memory_update_status_failed` } },
        );
      }),
      (r[20] = f),
      (r[21] = d),
      (r[22] = G))
    : (G = r[22]);
  let K;
  r[23] !== z || r[24] !== U || r[25] !== W || r[26] !== G
    ? ((K = { mutationFn: U, onSuccess: W, onSettled: z, onError: G }),
      (r[23] = z),
      (r[24] = U),
      (r[25] = W),
      (r[26] = G),
      (r[27] = K))
    : (K = r[27]);
  let q = ne(K),
    Ue;
  r[28] === R?.memories
    ? (Ue = r[29])
    : ((Ue = R?.memories.some($e) ?? !1), (r[28] = R?.memories), (r[29] = Ue));
  let Ke = Ue,
    J = Ke && ye,
    Z,
    Q;
  if (r[30] !== R?.memories || r[31] !== J || r[32] !== P || r[33] !== A) {
    let e = R?.memories
      .filter((e) => !J || e.labels?.includes(`HEALTH`))
      .slice()
      .sort((e, t) => (P ? 1 : -1) * (We(e) - We(t)));
    Q = A.trim();
    let t =
        Q === `` || e == null
          ? null
          : new Set(new Pe(e, { ignoreLocation: !0, keys: [`content`], threshold: 0.4 }).search(Q).map(Qe)),
      n = e?.filter((e) => t == null || t.has(e.id)),
      i = n == null ? null : Ge(n);
    ((Z = i == null ? void 0 : [...i.warm, ...i.cold]),
      (r[30] = R?.memories),
      (r[31] = J),
      (r[32] = P),
      (r[33] = A),
      (r[34] = Z),
      (r[35] = Q));
  } else ((Z = r[34]), (Q = r[35]));
  let $ = Z,
    it;
  r[36] !== R?.memories || r[37] !== I
    ? ((it = R?.memories.find((e) => e.id === I)), (r[36] = R?.memories), (r[37] = I), (r[38] = it))
    : (it = r[38]);
  let at = it,
    ot =
      R == null || R.memory_max_tokens === 0
        ? null
        : Math.min(100, Math.floor((100 * R.memory_num_tokens) / R.memory_max_tokens)),
    st = oe != null && (!b || oe.m3mOptedOut) && ot != null && ot >= rt,
    ct;
  r[39] === l
    ? (ct = r[40])
    : ((ct = (e) => {
        e || l();
      }),
      (r[39] = l),
      (r[40] = ct));
  let lt;
  r[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, X.jsx)(le, {
        title: (0, X.jsx)(se, {
          children: (0, X.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.title`,
            defaultMessage: `Saved memories`,
            description: `Title of the saved memories manager opened from ChatGPT Personalization`,
          }),
        }),
      })),
      (r[41] = lt))
    : (lt = r[41]);
  let ut;
  r[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (0, X.jsxs)(E, {
        children: [
          lt,
          (0, X.jsx)(S, {
            className: `sr-only`,
            children: (0, X.jsx)(u, {
              id: `settings.chatGpt.personalization.memory.enabled.description`,
              defaultMessage: `Let ChatGPT personalize your experience based on your chats, files, and connected apps`,
              description: `Description for the ChatGPT memory setting`,
            }),
          }),
        ],
      })),
      (r[42] = ut))
    : (ut = r[42]);
  let dt;
  r[43] !== c || r[44] !== ee
    ? ((dt = (0, X.jsx)(Ve, { accountId: c, onOptBackIn: ee })), (r[43] = c), (r[44] = ee), (r[45] = dt))
    : (dt = r[45]);
  let ft;
  r[46] !== ot || r[47] !== st
    ? ((ft = st
        ? (0, X.jsx)(E, {
            children: (0, X.jsx)(me, {
              children: (0, X.jsx)(j, {
                label: (0, X.jsx)(u, {
                  id: `settings.chatGpt.personalization.memories.usage`,
                  defaultMessage: `{memoryUsagePercent}% full`,
                  description: `Memory capacity warning in the ChatGPT saved memories manager. The percentage placeholder is a whole number from 80 through 100 that shows how much legacy saved-memory storage is used.`,
                  values: { memoryUsagePercent: ot },
                }),
                description:
                  ot === 100
                    ? (0, X.jsx)(u, {
                        id: `settings.chatGpt.personalization.memories.usage.full`,
                        defaultMessage: `New memories can’t be saved, so responses may feel less personalized. Delete existing memories to free up space`,
                        description: `Warning in the ChatGPT saved memories manager when legacy saved-memory storage is full. It tells the user that new memories cannot be saved and that deleting memories frees space.`,
                      })
                    : (0, X.jsx)(u, {
                        id: `settings.chatGpt.personalization.memories.usage.almostFull`,
                        defaultMessage: `Once memory is full, responses may feel less personalized. Delete existing memories to free up space`,
                        description: `Warning in the ChatGPT saved memories manager when legacy saved-memory storage is more than 80 percent full but not completely full. It tells the user how to free space.`,
                      }),
                control: null,
              }),
            }),
          })
        : null),
      (r[46] = ot),
      (r[47] = st),
      (r[48] = ft))
    : (ft = r[48]);
  let pt;
  r[49] === f
    ? (pt = r[50])
    : ((pt = f.formatMessage({
        id: `settings.chatGpt.personalization.memories.search`,
        defaultMessage: `Search memories`,
        description: `Accessible label for filtering saved memories in ChatGPT Personalization`,
      })),
      (r[49] = f),
      (r[50] = pt));
  let mt;
  r[51] === f
    ? (mt = r[52])
    : ((mt = f.formatMessage({
        id: `settings.chatGpt.personalization.memories.search.placeholder`,
        defaultMessage: `Search memories`,
        description: `Placeholder in the search field for filtering saved ChatGPT memories`,
      })),
      (r[51] = f),
      (r[52] = mt));
  let ht;
  r[53] !== A || r[54] !== pt || r[55] !== mt
    ? ((ht = (0, X.jsx)(Me, {
        autoFocus: !0,
        className: `w-full max-w-xs`,
        id: `memories-search`,
        inputRole: `searchbox`,
        label: pt,
        placeholder: mt,
        searchQuery: A,
        variant: `toolbar`,
        onSearchQueryChange: N,
      })),
      (r[53] = A),
      (r[54] = pt),
      (r[55] = mt),
      (r[56] = ht))
    : (ht = r[56]);
  let gt;
  r[57] !== y || r[58] !== f || r[59] !== b || r[60] !== $
    ? ((gt =
        y && !b
          ? (0, X.jsx)(be, {
              ariaLabel: f.formatMessage({
                id: `settings.chatGpt.personalization.memories.copy`,
                defaultMessage: `Copy all`,
                description: `Accessible label for the button that copies all saved memories`,
              }),
              iconOnly: !0,
              icons: { copy: (0, X.jsx)(g, {}), copied: (0, X.jsx)(o, {}) },
              isDisabled: $ == null || $.length === 0,
              showTooltip: !1,
              onCopy: (e) =>
                $ != null &&
                he(
                  $.map(Ze).join(`
`),
                  e,
                ),
              renderButton: Xe,
            })
          : null),
      (r[57] = y),
      (r[58] = f),
      (r[59] = b),
      (r[60] = $),
      (r[61] = gt))
    : (gt = r[61]);
  let _t;
  r[62] === f
    ? (_t = r[63])
    : ((_t = f.formatMessage({
        id: `settings.chatGpt.personalization.memories.sort`,
        defaultMessage: `Sort`,
        description: `Accessible label for the saved memories sorting menu`,
      })),
      (r[62] = f),
      (r[63] = _t));
  let vt;
  r[64] === Symbol.for(`react.memo_cache_sentinel`) ? ((vt = (0, X.jsx)(_, {})), (r[64] = vt)) : (vt = r[64]);
  let yt;
  r[65] === _t
    ? (yt = r[66])
    : ((yt = (0, X.jsx)(t, {
        "aria-label": _t,
        color: `ghost`,
        radius: `large`,
        size: `inputIcon`,
        children: vt,
      })),
      (r[65] = _t),
      (r[66] = yt));
  let bt;
  r[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = (0, X.jsx)(m.Title, {
        children: (0, X.jsx)(u, {
          id: `settings.chatGpt.personalization.memories.sort.title`,
          defaultMessage: `Sort`,
          description: `Heading in the saved memories sorting menu`,
        }),
      })),
      (r[67] = bt))
    : (bt = r[67]);
  let xt = P ? `oldest` : `newest`,
    St;
  r[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((St = (e) => F(e === `oldest`)), (r[68] = St))
    : (St = r[68]);
  let Ct;
  r[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, X.jsx)(m.RadioItem, {
        value: `newest`,
        children: (0, X.jsx)(u, {
          id: `settings.chatGpt.personalization.memories.newest`,
          defaultMessage: `Newest first`,
          description: `Sort option showing saved memories newest first`,
        }),
      })),
      (r[69] = Ct))
    : (Ct = r[69]);
  let wt;
  r[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (0, X.jsx)(m.RadioItem, {
        value: `oldest`,
        children: (0, X.jsx)(u, {
          id: `settings.chatGpt.personalization.memories.oldest`,
          defaultMessage: `Oldest first`,
          description: `Sort option showing saved memories oldest first`,
        }),
      })),
      (r[70] = wt))
    : (wt = r[70]);
  let Tt;
  r[71] === xt
    ? (Tt = r[72])
    : ((Tt = (0, X.jsxs)(m.RadioGroup, { value: xt, onValueChange: St, children: [Ct, wt] })),
      (r[71] = xt),
      (r[72] = Tt));
  let Et;
  r[73] !== yt || r[74] !== Tt
    ? ((Et = (0, X.jsxs)(i, { align: `end`, contentWidth: `xs`, triggerButton: yt, children: [bt, Tt] })),
      (r[73] = yt),
      (r[74] = Tt),
      (r[75] = Et))
    : (Et = r[75]);
  let Dt;
  r[76] !== Ke || r[77] !== f || r[78] !== J
    ? ((Dt = Ke
        ? (0, X.jsxs)(i, {
            align: `end`,
            contentWidth: `xs`,
            triggerButton: (0, X.jsx)(t, {
              "aria-label": f.formatMessage({
                id: `settings.chatGpt.personalization.memories.filter`,
                defaultMessage: `Filter memories`,
                description: `Accessible label for the saved memories filter menu in ChatGPT Personalization.`,
              }),
              color: J ? `outlineActive` : `ghost`,
              size: `inputIcon`,
              children: (0, X.jsx)(h, {}),
            }),
            children: [
              (0, X.jsx)(m.Title, {
                children: (0, X.jsx)(u, {
                  id: `settings.chatGpt.personalization.memories.filter.title`,
                  defaultMessage: `Filter`,
                  description: `Heading in the ChatGPT saved memories filter menu.`,
                }),
              }),
              (0, X.jsxs)(m.RadioGroup, {
                value: J ? `health` : `all`,
                onValueChange: (e) => xe(e === `health`),
                children: [
                  (0, X.jsx)(m.RadioItem, {
                    value: `all`,
                    children: (0, X.jsx)(u, {
                      id: `settings.chatGpt.personalization.memories.filter.all`,
                      defaultMessage: `All`,
                      description: `Filter option showing every saved memory in the ChatGPT saved memories manager.`,
                    }),
                  }),
                  (0, X.jsx)(m.RadioItem, {
                    value: `health`,
                    children: (0, X.jsx)(u, {
                      id: `settings.chatGpt.personalization.memories.filter.health`,
                      defaultMessage: `Health`,
                      description: `Filter option showing only memories authorized for the Health context in the ChatGPT saved memories manager.`,
                    }),
                  }),
                ],
              }),
            ],
          })
        : null),
      (r[76] = Ke),
      (r[77] = f),
      (r[78] = J),
      (r[79] = Dt))
    : (Dt = r[79]);
  let Ot;
  r[80] === f
    ? (Ot = r[81])
    : ((Ot = f.formatMessage({
        id: `settings.chatGpt.personalization.memories.moreOptions`,
        defaultMessage: `More options`,
        description: `Accessible label for the saved memories actions menu`,
      })),
      (r[80] = f),
      (r[81] = Ot));
  let kt;
  r[82] === Symbol.for(`react.memo_cache_sentinel`) ? ((kt = (0, X.jsx)(n, {})), (r[82] = kt)) : (kt = r[82]);
  let At;
  r[83] === Ot
    ? (At = r[84])
    : ((At = (0, X.jsx)(t, {
        "aria-label": Ot,
        color: `ghost`,
        radius: `large`,
        size: `inputIcon`,
        children: kt,
      })),
      (r[83] = Ot),
      (r[84] = At));
  let jt;
  r[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((jt = (0, X.jsx)(m.Group, {
        children: (0, X.jsx)(m.Item, {
          LeftIcon: ge,
          tone: `danger`,
          onSelect: () => {
            (De(!1), Te(`all`));
          },
          children: (0, X.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.deleteAll`,
            defaultMessage: `Delete all memories`,
            description: `Menu item opening confirmation before deleting all saved ChatGPT memories`,
          }),
        }),
      })),
      (r[85] = jt))
    : (jt = r[85]);
  let Mt;
  r[86] === At
    ? (Mt = r[87])
    : ((Mt = (0, X.jsx)(i, { align: `end`, contentWidth: `panel`, triggerButton: At, children: jt })),
      (r[86] = At),
      (r[87] = Mt));
  let Nt;
  r[88] !== gt || r[89] !== Et || r[90] !== Dt || r[91] !== Mt
    ? ((Nt = (0, X.jsxs)(`div`, { className: `flex items-center gap-0.5`, children: [gt, Et, Dt, Mt] })),
      (r[88] = gt),
      (r[89] = Et),
      (r[90] = Dt),
      (r[91] = Mt),
      (r[92] = Nt))
    : (Nt = r[92]);
  let Pt;
  r[93] !== ht || r[94] !== Nt
    ? ((Pt = (0, X.jsx)(E, {
        className: `border-b border-default pb-4`,
        children: (0, X.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2`,
          children: [ht, Nt],
        }),
      })),
      (r[93] = ht),
      (r[94] = Nt),
      (r[95] = Pt))
    : (Pt = r[95]);
  let Ft;
  r[96] === Oe
    ? (Ft = r[97])
    : ((Ft =
        Oe &&
        (0, X.jsx)(`p`, {
          className: `flex h-full items-center justify-center pb-8 text-sm text-tertiary`,
          role: `status`,
          children: (0, X.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.loading`,
            defaultMessage: `Loading memories…`,
            description: `Status while ChatGPT's saved memories are loading`,
          }),
        })),
      (r[96] = Oe),
      (r[97] = Ft));
  let It;
  r[98] !== ke || r[99] !== Ae || r[100] !== Fe
    ? ((It =
        ke &&
        (0, X.jsx)(t, {
          loading: Ae,
          onClick: () => void Fe(),
          children: (0, X.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.error`,
            defaultMessage: `Couldn’t load memories. Retry`,
            description: `Retry action after the saved memories request fails in ChatGPT Personalization`,
          }),
        })),
      (r[98] = ke),
      (r[99] = Ae),
      (r[100] = Fe),
      (r[101] = It))
    : (It = r[101]);
  let Lt;
  r[102] !== $?.length || r[103] !== Q
    ? ((Lt =
        $?.length === 0
          ? (0, X.jsx)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-2 text-center text-base text-secondary`,
              children:
                Q === ``
                  ? (0, X.jsx)(u, {
                      id: `settings.chatGpt.personalization.memories.empty`,
                      defaultMessage: `No saved memories`,
                      description: `Empty state when the user has no saved ChatGPT memories`,
                    })
                  : (0, X.jsx)(u, {
                      id: `settings.chatGpt.personalization.memories.search.empty`,
                      defaultMessage: `No results found for "{query}"`,
                      description: `Empty state when no saved ChatGPT memories match the search query`,
                      values: { query: Q },
                    }),
            })
          : null),
      (r[102] = $?.length),
      (r[103] = Q),
      (r[104] = Lt))
    : (Lt = r[104]);
  let Rt;
  r[105] !== D || r[106] !== f || r[107] !== $ || r[108] !== p || r[109] !== l || r[110] !== q
    ? ((Rt = $?.map((e) =>
        (0, X.jsxs)(
          `div`,
          {
            className: `group flex items-center justify-between gap-3 border-b border-default px-3 last:border-b-0`,
            children: [
              (0, X.jsx)(`div`, {
                className: `flex min-w-0 flex-1 flex-col gap-1`,
                children: (0, X.jsxs)(`span`, {
                  className: ue(
                    `flex min-w-0 items-center gap-2 py-2 text-sm leading-5 wrap-anywhere whitespace-pre-wrap select-text`,
                    e.status === `cold` && `text-secondary`,
                  ),
                  children: [
                    e.content,
                    e.labels?.includes(`HEALTH`)
                      ? (0, X.jsx)(ve, {
                          tooltipContent: (0, X.jsx)(u, {
                            id: `settings.chatGpt.personalization.memories.health.tooltip`,
                            defaultMessage: `This memory will only be referenced in Health chats.`,
                            description: `Tooltip in the ChatGPT saved memories manager explaining that a memory marked Health is available only in Health chats.`,
                          }),
                          children: (0, X.jsx)(Ee, {
                            variant: `outline`,
                            children: (0, X.jsx)(u, {
                              id: `settings.chatGpt.personalization.memories.health`,
                              defaultMessage: `Health`,
                              description: `Badge on a saved memory that is authorized only for the ChatGPT Health context.`,
                            }),
                          }),
                        })
                      : null,
                  ],
                }),
              }),
              (0, X.jsxs)(i, {
                align: `end`,
                contentWidth: `panel`,
                triggerButton: (0, X.jsx)(t, {
                  "aria-label": f.formatMessage(
                    {
                      id: `settings.chatGpt.personalization.memories.memoryOptions`,
                      defaultMessage: `More options for memory: {memory}`,
                      description: `Accessible label for one saved memory's actions menu; memory is a preview of its contents`,
                    },
                    { memory: e.content.slice(0, 130) },
                  ),
                  className: `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 data-[state=open]:opacity-100`,
                  color: `ghost`,
                  radius: `large`,
                  size: `iconCircle`,
                  children: (0, X.jsx)(n, {}),
                }),
                children: [
                  (0, X.jsxs)(m.Group, {
                    children: [
                      D && e.status === `cold`
                        ? (0, X.jsx)(m.Item, {
                            LeftIcon: M,
                            disabled: q.isPending && q.variables === e.id,
                            onSelect: () => q.mutate(e.id),
                            children: (0, X.jsx)(u, {
                              id: `settings.chatGpt.personalization.memories.prioritize`,
                              defaultMessage: `Prioritize this memory`,
                              description: `Action in one saved memory's options menu that restores a deprioritized memory to normal priority.`,
                            }),
                          })
                        : null,
                      (0, X.jsx)(m.Item, {
                        LeftIcon: ge,
                        tone: `danger`,
                        onSelect: () => Te(e.id),
                        children: (0, X.jsx)(u, {
                          id: `settings.chatGpt.personalization.memories.delete`,
                          defaultMessage: `Delete`,
                          description: `Action opening confirmation before deleting one saved ChatGPT memory`,
                        }),
                      }),
                    ],
                  }),
                  (0, X.jsx)(tt, {
                    intl: f,
                    memory: e,
                    onSourceChatClick: () => {
                      (l(), p(`/c/${e.conversation_id}`));
                    },
                  }),
                ],
              }),
            ],
          },
          e.id,
        ),
      )),
      (r[105] = D),
      (r[106] = f),
      (r[107] = $),
      (r[108] = p),
      (r[109] = l),
      (r[110] = q),
      (r[111] = Rt))
    : (Rt = r[111]);
  let zt;
  r[112] === Rt ? (zt = r[113]) : ((zt = (0, X.jsx)(`div`, { children: Rt })), (r[112] = Rt), (r[113] = zt));
  let Bt;
  r[114] !== Ft || r[115] !== It || r[116] !== Lt || r[117] !== zt
    ? ((Bt = (0, X.jsxs)(`div`, {
        className: `flex min-h-0 w-full flex-1 flex-col overflow-y-auto`,
        children: [Ft, It, Lt, zt],
      })),
      (r[114] = Ft),
      (r[115] = It),
      (r[116] = Lt),
      (r[117] = zt),
      (r[118] = Bt))
    : (Bt = r[118]);
  let Vt;
  r[119] !== dt || r[120] !== ft || r[121] !== Pt || r[122] !== Bt
    ? ((Vt = (0, X.jsxs)(pe, { className: `min-h-0`, size: `full`, children: [ut, dt, ft, Pt, Bt] })),
      (r[119] = dt),
      (r[120] = ft),
      (r[121] = Pt),
      (r[122] = Bt),
      (r[123] = Vt))
    : (Vt = r[123]);
  let Ht = I != null,
    Ut;
  r[124] === H
    ? (Ut = r[125])
    : ((Ut = (e) => {
        !e && !H && Te(null);
      }),
      (r[124] = H),
      (r[125] = Ut));
  let Wt;
  r[126] !== I || r[127] !== Re || r[128] !== H
    ? ((Wt = (e) => {
        (e.preventDefault(), I != null && !H && Re(I));
      }),
      (r[126] = I),
      (r[127] = Re),
      (r[128] = H),
      (r[129] = Wt))
    : (Wt = r[129]);
  let Gt;
  r[130] === I
    ? (Gt = r[131])
    : ((Gt = (0, X.jsx)(E, {
        children: (0, X.jsx)(le, {
          title: (0, X.jsx)(se, {
            children:
              I === `all`
                ? (0, X.jsx)(u, {
                    id: `settings.chatGpt.personalization.memories.delete.confirm.title`,
                    defaultMessage: `Delete all memories?`,
                    description: `Confirmation title before deleting all saved ChatGPT memories`,
                  })
                : (0, X.jsx)(u, {
                    id: `settings.chatGpt.personalization.memories.delete.confirm.single.title`,
                    defaultMessage: `Delete this memory?`,
                    description: `Confirmation title before deleting one saved ChatGPT memory`,
                  }),
          }),
        }),
      })),
      (r[130] = I),
      (r[131] = Gt));
  let Kt;
  r[132] !== I || r[133] !== at
    ? ((Kt =
        I === `all`
          ? (0, X.jsx)(u, {
              id: `settings.chatGpt.personalization.memories.delete.confirm.allWithChatGuidance`,
              defaultMessage: `ChatGPT may not remember this information going forward. To fully remove this information from memory, also delete any related chats. <learn>Learn more</learn>`,
              description: `Warning before deleting all saved memories. Explains that related chats must also be deleted to fully remove the information; the Learn more link opens the Memory FAQ.`,
              values: { learn: Ye },
            })
          : at != null &&
            (0, X.jsx)(u, {
              id: `settings.chatGpt.personalization.memories.delete.confirm.single`,
              defaultMessage: `<memory>"{memoryText}"</memory> will be deleted. ChatGPT may not remember this information going forward. <learn>Learn more</learn>`,
              description: `Warning before deleting one saved ChatGPT memory; the memory text is quoted and the Learn more link opens the Memory FAQ`,
              values: { memoryText: at.content, memory: Je, learn: qe },
            })),
      (r[132] = I),
      (r[133] = at),
      (r[134] = Kt))
    : (Kt = r[134]);
  let qt;
  r[135] === Kt
    ? (qt = r[136])
    : ((qt = (0, X.jsx)(`p`, { className: `text-sm`, children: Kt })), (r[135] = Kt), (r[136] = qt));
  let Jt;
  r[137] === He
    ? (Jt = r[138])
    : ((Jt =
        He &&
        (0, X.jsx)(`p`, {
          role: `alert`,
          children: (0, X.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.delete.error`,
            defaultMessage: `Couldn’t delete memories. Please try again`,
            description: `Error after deleting saved memories fails; confirmation remains open for retry`,
          }),
        })),
      (r[137] = He),
      (r[138] = Jt));
  let Yt;
  r[139] !== L || r[140] !== I || r[141] !== T || r[142] !== H
    ? ((Yt =
        I === `all` && T
          ? (0, X.jsxs)(`label`, {
              className: `relative mt-4 flex items-start gap-3 text-sm`,
              children: [
                (0, X.jsx)(ie, { checked: L, disabled: H, onCheckedChange: De }),
                (0, X.jsx)(u, {
                  id: `settings.chatGpt.personalization.memories.delete.confirm.history`,
                  defaultMessage: `Also delete all past versions of saved memories. This cannot be undone`,
                  description: `Checkbox label in Delete all memories confirmation for also deleting memory history`,
                }),
              ],
            })
          : null),
      (r[139] = L),
      (r[140] = I),
      (r[141] = T),
      (r[142] = H),
      (r[143] = Yt))
    : (Yt = r[143]);
  let Xt;
  r[144] !== qt || r[145] !== Jt || r[146] !== Yt
    ? ((Xt = (0, X.jsxs)(E, { children: [qt, Jt, Yt] })),
      (r[144] = qt),
      (r[145] = Jt),
      (r[146] = Yt),
      (r[147] = Xt))
    : (Xt = r[147]);
  let Zt;
  r[148] === Symbol.for(`react.memo_cache_sentinel`) ? ((Zt = () => Te(null)), (r[148] = Zt)) : (Zt = r[148]);
  let Qt;
  r[149] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qt = (0, X.jsx)(u, {
        id: `settings.chatGpt.personalization.memories.delete.cancel`,
        defaultMessage: `Cancel`,
        description: `Button cancelling deletion of saved ChatGPT memories`,
      })),
      (r[149] = Qt))
    : (Qt = r[149]);
  let $t;
  r[150] === H
    ? ($t = r[151])
    : (($t = (0, X.jsx)(t, { disabled: H, onClick: Zt, type: `button`, children: Qt })),
      (r[150] = H),
      (r[151] = $t));
  let en;
  r[152] === I
    ? (en = r[153])
    : ((en =
        I === `all`
          ? (0, X.jsx)(u, {
              id: `settings.chatGpt.personalization.memories.deleteAll.confirm`,
              defaultMessage: `Delete all`,
              description: `Confirmation button that deletes all saved memories and, if selected, their past versions`,
            })
          : (0, X.jsx)(u, {
              id: `settings.chatGpt.personalization.memories.delete.confirm`,
              defaultMessage: `Delete`,
              description: `Destructive confirmation button deleting the selected saved ChatGPT memory or all saved memories`,
            })),
      (r[152] = I),
      (r[153] = en));
  let tn;
  r[154] !== H || r[155] !== en
    ? ((tn = (0, X.jsx)(t, { color: `danger`, loading: H, type: `submit`, children: en })),
      (r[154] = H),
      (r[155] = en),
      (r[156] = tn))
    : (tn = r[156]);
  let nn;
  r[157] !== $t || r[158] !== tn
    ? ((nn = (0, X.jsxs)(_e, { children: [$t, tn] })), (r[157] = $t), (r[158] = tn), (r[159] = nn))
    : (nn = r[159]);
  let rn;
  r[160] !== Wt || r[161] !== Gt || r[162] !== Xt || r[163] !== nn
    ? ((rn = (0, X.jsxs)(pe, { as: `form`, onSubmit: Wt, children: [Gt, Xt, nn] })),
      (r[160] = Wt),
      (r[161] = Gt),
      (r[162] = Xt),
      (r[163] = nn),
      (r[164] = rn))
    : (rn = r[164]);
  let an;
  r[165] !== Ht || r[166] !== Ut || r[167] !== rn
    ? ((an = (0, X.jsx)(fe, { open: Ht, onOpenChange: Ut, children: rn })),
      (r[165] = Ht),
      (r[166] = Ut),
      (r[167] = rn),
      (r[168] = an))
    : (an = r[168]);
  let on;
  return (
    r[169] !== ct || r[170] !== Vt || r[171] !== an
      ? ((on = (0, X.jsxs)(fe, { open: !0, size: `xwideTall`, onOpenChange: ct, children: [Vt, an] })),
        (r[169] = ct),
        (r[170] = Vt),
        (r[171] = an),
        (r[172] = on))
      : (on = r[172]),
    on
  );
}
function qe(e) {
  return (0, X.jsx)(
    V,
    {
      className: `text-info`,
      href: Z,
      initiator: `external_link`,
      openTarget: `external-browser`,
      children: Y.Children.toArray(e),
    },
    `learn`,
  );
}
function Je(e) {
  return (0, X.jsx)(`strong`, { children: Y.Children.toArray(e) }, `memory`);
}
function Ye(e) {
  return (0, X.jsx)(V, {
    className: `text-info`,
    href: Z,
    initiator: `external_link`,
    openTarget: `external-browser`,
    children: Y.Children.toArray(e),
  });
}
function Xe(e) {
  return (0, X.jsx)(t, { ...e, color: `ghost`, radius: `large`, size: `inputIcon` });
}
function Ze(e) {
  return e.content;
}
function Qe(e) {
  let { item: t } = e;
  return t.id;
}
function $e(e) {
  return e.labels?.includes(`HEALTH`);
}
function et(e) {
  if (ze(e)) return { success: !0 };
  throw e;
}
function tt(e) {
  let t = (0, nt.c)(21),
    { intl: n, memory: r, onSourceChatClick: i } = e,
    a = Te(),
    o;
  if (r.status === `cold`) {
    if (r.last_updated == null) return null;
    let e = r.last_updated.actor,
      i = r.last_updated.timestamp * 1e3,
      s;
    t[0] !== n || t[1] !== a || t[2] !== i
      ? ((s = J(n, i, a)), (t[0] = n), (t[1] = a), (t[2] = i), (t[3] = s))
      : (s = t[3]);
    let c;
    (t[4] !== r.last_updated.actor || t[5] !== s
      ? ((c = (0, X.jsx)(u, {
          id: `settings.chatGpt.personalization.memories.deprioritized.byActor`,
          defaultMessage: `Deprioritized by {actor, select, user {you} other {ChatGPT}} on {date}`,
          description: `Metadata in one saved memory's options menu. Actor is user when the current user deprioritized it, otherwise ChatGPT. Date is a localized month and day, plus the year when it is not the current year.`,
          values: { actor: e, date: s },
        })),
        (t[4] = r.last_updated.actor),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
      (o = c));
  } else {
    let e;
    if (t[7] !== n || t[8] !== r.updated_at || t[9] !== a) {
      let i = Date.parse(r.updated_at);
      ((e = Number.isFinite(i) ? J(n, i, a) : null),
        (t[7] = n),
        (t[8] = r.updated_at),
        (t[9] = a),
        (t[10] = e));
    } else e = t[10];
    let s = e;
    if (r.conversation_id) {
      let e;
      t[11] !== r.conversation_id || t[12] !== i
        ? ((e = (e) =>
            (0, X.jsx)(V, {
              appearance: `secondary`,
              href: `/c/${r.conversation_id}`,
              initiator: `external_link`,
              onClick: (e) => {
                (e.preventDefault(), i());
              },
              children: Y.Children.toArray(e),
            })),
          (t[11] = r.conversation_id),
          (t[12] = i),
          (t[13] = e))
        : (e = t[13]);
      let n = e,
        a;
      (t[14] !== s || t[15] !== n
        ? ((a =
            s == null
              ? (0, X.jsx)(u, {
                  id: `settings.chatGpt.personalization.memories.sourceChat`,
                  defaultMessage: `Saved from a <chat>chat</chat>`,
                  description: `Metadata in a saved memory's menu when the saved date is unavailable. The chat link opens the conversation where the memory was saved.`,
                  values: { chat: n },
                })
              : (0, X.jsx)(u, {
                  id: `settings.chatGpt.personalization.memories.savedFromChat`,
                  defaultMessage: `Saved on {date} from a <chat>chat</chat>.`,
                  description: `Metadata in one saved memory's options menu. Date is a localized month and day, plus the year when it is not the current year. The chat tag is an inline action that opens the conversation where the memory originated.`,
                  values: { date: s, chat: n },
                })),
          (t[14] = s),
          (t[15] = n),
          (t[16] = a))
        : (a = t[16]),
        (o = a));
    } else if (s != null) {
      let e;
      (t[17] === s
        ? (e = t[18])
        : ((e = (0, X.jsx)(u, {
            id: `settings.chatGpt.personalization.memories.savedOn`,
            defaultMessage: `Saved on {date}.`,
            description: `Metadata in one saved memory's options menu when no source chat is available. Date is a localized month and day, plus the year when it is not the current year.`,
            values: { date: s },
          })),
          (t[17] = s),
          (t[18] = e)),
        (o = e));
    } else return null;
  }
  let s;
  return (
    t[19] === o
      ? (s = t[20])
      : ((s = (0, X.jsx)(m.Group, {
          children: (0, X.jsx)(m.Message, { variant: `chatgpt`, children: (0, X.jsx)(`p`, { children: o }) }),
        })),
        (t[19] = o),
        (t[20] = s)),
    s
  );
}
function J(e, t, n) {
  let r = new Date(t);
  return e.formatDate(r, {
    day: `numeric`,
    month: `long`,
    year: r.getFullYear() === n.getFullYear() ? void 0 : `numeric`,
  });
}
var nt, Y, X, Z, rt;
function Q() {
  return (Q = e(() => {
    ((nt = P()),
      ee(),
      A(),
      v(),
      Fe(),
      f(),
      (Y = xe()),
      T(),
      ce(),
      H(),
      De(),
      I(),
      R(),
      k(),
      l(),
      y(),
      N(),
      x(),
      r(),
      B(),
      p(),
      z(),
      D(),
      b(),
      L(),
      F(),
      w(),
      d(),
      ke(),
      C(),
      Ie(),
      Ue(),
      (X = ye()),
      (Z = `https://help.openai.com/en/articles/8590148-memory-faq`),
      (rt = 80));
  }))();
}
export { Q as n, Ke as t };
//# sourceMappingURL=saved-memories-b696ac70e812.js.map
