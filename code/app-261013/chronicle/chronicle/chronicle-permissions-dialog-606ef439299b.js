import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  AO as r,
  CJ as i,
  CO as a,
  Cot as o,
  Ez as s,
  IDt as c,
  Ixt as l,
  Mz as u,
  N$ as d,
  Nz as f,
  P$ as p,
  Pxt as m,
  TJ as h,
  TO as g,
  VDt as _,
  Vxt as v,
  XD as y,
  YD as b,
  _O as x,
  avt as S,
  b0 as C,
  bO as w,
  cO as ee,
  fO as T,
  hot as te,
  jDt as E,
  kz as ne,
  l0 as D,
  lO as re,
  lot as O,
  mO as ie,
  nSt as k,
  oO as ae,
  rst as A,
  sMt as oe,
  sO as se,
  t3 as j,
  u0 as M,
  vO as N,
  vzt as P,
  wot as F,
  xMt as I,
  y0 as L,
  yO as ce,
  yzt as le,
  zxt as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  Al as de,
  Ggr as R,
  JPn as z,
  KPr as B,
  LPr as V,
  RPr as H,
  XDr as fe,
  XPn as pe,
  eDr as me,
  eOr as he,
  ezt as ge,
  h1 as _e,
  iDr as U,
  kl as ve,
  m1 as ye,
  nzt as be,
  qPr as xe,
  t_r as W,
} from "./app-initial-5851df3f6cb1.js";
import { n as Se, t as Ce } from "./chronicle-settings-d16251f05467.js";
import {
  a as G,
  l as we,
  m as Te,
  n as Ee,
  s as De,
  t as Oe,
} from "./chronicle-service-queries-fa2c40e5d4fe.js";
import { r as ke, t as K } from "./computer-use-native-app-metadata-2ef89a9c1d5a.js";
import { n as Ae, r as q, t as J } from "./memory-settings-analytics-a53949a1e312.js";
import { n as je, t as Me } from "./country-codes-1c845666fc28.js";
function Y(e) {
  let t = (0, Ne.c)(6),
    { appearance: n, children: r, openTarget: i } = e,
    a = (n === void 0 ? `default` : n) === `secondary` ? `text-secondary! underline!` : `text-info`,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (e) => pe({ event: e, href: Fe, initiator: `open_in_browser_bridge`, openTarget: i })),
      (t[0] = i),
      (t[1] = o));
  let s;
  return (
    t[2] !== r || t[3] !== a || t[4] !== o
      ? ((s = (0, Pe.jsx)(`a`, { className: a, href: Fe, onClick: o, children: r })),
        (t[2] = r),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
var Ne, Pe, Fe;
function Ie() {
  return (Ie = e(() => {
    ((Ne = P()), z(), (Pe = I()), (Fe = `https://learn.chatgpt.com/docs/customization/computer-history`));
  }))();
}
function Le(e) {
  let t = (0, ze.c)(57),
    { open: r, variant: a, isPending: o, onOpenChange: s, onTurnOn: l } = e,
    u = a === void 0 ? `default` : a,
    d = _(),
    { client: f, isLoading: p } = U(),
    m = f.getContext().user?.country?.trim().toUpperCase(),
    h = u === `onboarding` && (p || !m || Me.has(m)),
    g = u === `onboarding` ? `promotional` : `default`,
    v = u === `onboarding` ? `beacon` : `default`,
    y = u !== `onboarding`,
    b;
  t[0] !== o || t[1] !== s
    ? ((b = (e) => {
        o || s(e);
      }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = b))
    : (b = t[2]);
  let S = u === `onboarding` ? `px-8 pt-16 pb-8` : void 0,
    C = u === `onboarding` ? `chatgpt` : `default`,
    w = u === `onboarding` ? `viewport` : void 0,
    T;
  t[3] !== o || t[4] !== l
    ? ((T = (e) => {
        (e.preventDefault(), o || l());
      }),
      (t[3] = o),
      (t[4] = l),
      (t[5] = T))
    : (T = t[5]);
  let te;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, X.jsx)(x, {
        asChild: !0,
        children: (0, X.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, X.jsx)(c, {
            id: `settings.chronicle.enableMemoriesAccessibleTitle`,
            defaultMessage: `Turn on Memories`,
            description: `Accessible title for the dialog that enables Memories before Computer history`,
          }),
        }),
      })),
      (t[6] = te))
    : (te = t[6]);
  let E = u === `onboarding` ? `text-center select-none` : void 0,
    ne = u === `onboarding` ? `secondary` : `tertiary`,
    D = u === `onboarding` ? `mt-1 leading-5` : void 0,
    O;
  t[7] === u
    ? (O = t[8])
    : ((O =
        u === `onboarding`
          ? (0, X.jsx)(`span`, {
              className: `heading-md font-medium`,
              children: (0, X.jsx)(c, {
                id: `electron.onboarding.computerHistory.enableMemoriesTitle`,
                defaultMessage: `Turn on Memories to use Computer History`,
                description: `Title asking for separate Memories consent before enabling Computer History during onboarding`,
              }),
            })
          : (0, X.jsx)(c, {
              id: `settings.chronicle.enableMemoriesTitle`,
              defaultMessage: `Turn on Memories to use Computer history?`,
              description: `Title for the dialog that enables Memories before Computer history`,
            })),
      (t[7] = u),
      (t[8] = O));
  let k;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, X.jsx)(c, {
        id: `settings.chronicle.enableMemoriesDescriptionWithLearnMore`,
        defaultMessage: `Computer history requires Memories so ChatGPT can remember your activity across tasks. Turning this on also lets ChatGPT generate memories from your chats and use them in future chats. <learnMore>Learn more</learnMore>`,
        description: `Explanation of the broader effect of enabling Memories for Computer history, followed by a learn-more link`,
        values: { learnMore: Re },
      })),
      (t[9] = k))
    : (k = t[9]);
  let A;
  t[10] !== E || t[11] !== ne || t[12] !== D || t[13] !== O
    ? ((A = (0, X.jsxs)(re, {
        children: [
          te,
          (0, X.jsx)(ee, { className: E, subtitleTone: ne, subtitleClassName: D, title: O, subtitle: k }),
        ],
      })),
      (t[10] = E),
      (t[11] = ne),
      (t[12] = D),
      (t[13] = O),
      (t[14] = A))
    : (A = t[14]);
  let oe = u === `onboarding` ? `mt-1` : void 0,
    j = u === `onboarding` ? `large` : `default`,
    M = u === `onboarding` ? `flex-1 justify-center` : void 0,
    N = u === `onboarding` ? `outline` : `ghost`,
    P = u === `onboarding` ? `beaconAction` : void 0,
    F;
  t[15] === s ? (F = t[16]) : ((F = () => s(!1)), (t[15] = s), (t[16] = F));
  let I;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, X.jsx)(c, {
        id: `settings.chronicle.enableMemoriesCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel enabling Memories and Computer history`,
      })),
      (t[17] = I))
    : (I = t[17]);
  let L;
  t[18] !== o || t[19] !== M || t[20] !== N || t[21] !== P || t[22] !== F
    ? ((L = (0, X.jsx)(n, {
        className: M,
        color: N,
        size: P,
        disabled: o,
        type: `button`,
        onClick: F,
        children: I,
      })),
      (t[18] = o),
      (t[19] = M),
      (t[20] = N),
      (t[21] = P),
      (t[22] = F),
      (t[23] = L))
    : (L = t[23]);
  let ce = u === `onboarding` ? `flex-1 justify-center` : void 0,
    le = h ? `outline` : `primary`,
    ue = u === `onboarding` ? `beaconAction` : void 0,
    de;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, X.jsx)(c, {
        id: `settings.chronicle.enableMemoriesConfirm`,
        defaultMessage: `Turn on Memories`,
        description: `Confirm enabling Memories before Computer history`,
      })),
      (t[24] = de))
    : (de = t[24]);
  let R;
  t[25] !== o || t[26] !== ce || t[27] !== le || t[28] !== ue
    ? ((R = (0, X.jsx)(n, { className: ce, color: le, size: ue, loading: o, type: `submit`, children: de })),
      (t[25] = o),
      (t[26] = ce),
      (t[27] = le),
      (t[28] = ue),
      (t[29] = R))
    : (R = t[29]);
  let z;
  t[30] !== L || t[31] !== R
    ? ((z = (0, X.jsxs)(se, { children: [L, R] })), (t[30] = L), (t[31] = R), (t[32] = z))
    : (z = t[32]);
  let B;
  t[33] !== oe || t[34] !== j || t[35] !== z
    ? ((B = (0, X.jsx)(re, { className: oe, spacing: j, children: z })),
      (t[33] = oe),
      (t[34] = j),
      (t[35] = z),
      (t[36] = B))
    : (B = t[36]);
  let V;
  t[37] !== A || t[38] !== B || t[39] !== S || t[40] !== C || t[41] !== w || t[42] !== T
    ? ((V = (0, X.jsxs)(ae, {
        as: `form`,
        className: S,
        variant: C,
        size: w,
        onSubmit: T,
        children: [A, B],
      })),
      (t[37] = A),
      (t[38] = B),
      (t[39] = S),
      (t[40] = C),
      (t[41] = w),
      (t[42] = T),
      (t[43] = V))
    : (V = t[43]);
  let H;
  t[44] !== d || t[45] !== o || t[46] !== s || t[47] !== u
    ? ((H =
        u === `onboarding` &&
        (0, X.jsx)(n, {
          className: `absolute top-4 right-4`,
          color: `secondary`,
          size: `inputIcon`,
          radius: `full`,
          disabled: o,
          type: `button`,
          onClick: () => s(!1),
          "aria-label": d.formatMessage({
            id: `codex.dialog.closeButton`,
            defaultMessage: `Close dialog`,
            description: `Accessible label for the button that closes a dialog`,
          }),
          children: (0, X.jsx)(i, {}),
        })),
      (t[44] = d),
      (t[45] = o),
      (t[46] = s),
      (t[47] = u),
      (t[48] = H))
    : (H = t[48]);
  let fe;
  return (
    t[49] !== r || t[50] !== g || t[51] !== v || t[52] !== V || t[53] !== H || t[54] !== y || t[55] !== b
      ? ((fe = (0, X.jsxs)(ie, {
          open: r,
          variant: g,
          size: v,
          showDialogClose: y,
          onOpenChange: b,
          children: [V, H],
        })),
        (t[49] = r),
        (t[50] = g),
        (t[51] = v),
        (t[52] = V),
        (t[53] = H),
        (t[54] = y),
        (t[55] = b),
        (t[56] = fe))
      : (fe = t[56]),
    fe
  );
}
function Re(e) {
  return (0, X.jsx)(
    Y,
    { openTarget: `external-browser`, children: Be.Children.toArray(e) },
    `computer-history-enable-memories-learn-more`,
  );
}
var ze, Be, X;
function Ve() {
  return (Ve = e(() => {
    ((ze = P()), (Be = le()), E(), j(), N(), T(), h(), me(), je(), Ie(), (X = I()));
  }))();
}
async function He(e, { hostId: t, setMemoryFeatureEnabled: n, writeMemoryConfig: r }) {
  let { data: i } = e.get(W, t),
    { data: a } = e.get(V, t),
    o = a == null ? void 0 : B(a);
  if (i?.configReadSucceeded !== !0 || o == null) throw Error(`Memories prerequisites are unavailable`);
  let s = i.config,
    c = ge(s),
    l = o.enabled === !0,
    u = l && c.generateMemories && c.useMemories;
  if (
    !(await Ue({
      memoryFeatureEnabled: l,
      generateMemoriesEnabled: c.generateMemories,
      useMemoriesEnabled: c.useMemories,
      setMemoryFeatureEnabled: n,
      writeMemoryConfig: r,
    }))
  )
    return;
  let d = {
    chronicleResearchPreviewEnabled: S(s, Ce) === !0,
    chronicleResearchPreviewVisible: !1,
    isMemoryFeatureEnabled: l,
    memoryConfig: c,
  };
  q({
    productLogger: e.get(he),
    previousEnabled: u,
    selectedEnabled: !0,
    settingName: `memories`,
    state: J(d, { isMemoryFeatureEnabled: !0, memoryConfigPatch: { generateMemories: !0, useMemories: !0 } }),
  });
}
async function Ue({
  memoryFeatureEnabled: e,
  generateMemoriesEnabled: t,
  useMemoriesEnabled: n,
  setMemoryFeatureEnabled: r,
  writeMemoryConfig: i,
}) {
  let a = [],
    o = [];
  (e || a.push(r()),
    t || o.push({ keyPath: `memories.generate_memories`, value: !0 }),
    n || o.push({ keyPath: `memories.use_memories`, value: !0 }),
    o.length > 0 && a.push(i(o)));
  let s = await Promise.all(a);
  if (s.some((e) => e.status === `okOverridden`)) throw Error(`Memories settings are overridden`);
  return s.length > 0;
}
async function We({ enableMemories: e, getChronicleState: t }) {
  await e();
  let n = await t().catch(() => null);
  return n?.enabled === !0
    ? n.recorderState === `running` || n.recorderState === `paused` || n.activationState === `starting`
      ? `already_active`
      : `retry_required`
    : `enable_required`;
}
var Ge, Ke, qe;
function Je() {
  return (Je = e(() => {
    (m(),
      A(),
      be(),
      xe(),
      fe(),
      R(),
      H(),
      F(),
      Ae(),
      Se(),
      (Ge = k(o, (e, { get: t }) => t(W, e).data?.configReadSucceeded === !0)),
      (Ke = k(o, (e, { get: t }) => {
        let { data: n } = t(V, e);
        return n != null && B(n) != null;
      })),
      (qe = k(o, (e, { get: t }) => {
        let { data: n } = t(W, e),
          { data: r } = t(V, e),
          i = r == null ? void 0 : B(r),
          a = ge(n?.config);
        return n?.configReadSucceeded === !0 && i?.enabled === !0 && a.generateMemories && a.useMemories;
      })));
  }))();
}
function Ye(e) {
  if (e instanceof AggregateError) {
    for (let t of e.errors) {
      let e = Ye(t);
      if (e != null) return e;
    }
    return null;
  }
  if (!(e instanceof Error)) return null;
  let t = e.message.match(Xe)?.[1];
  if (t != null) return { code: t, source: `computer_use` };
  let n = e.message.match(Ze)?.[1];
  return n == null ? null : { code: n, source: `os_status` };
}
var Xe, Ze;
function Qe() {
  return (Qe = e(() => {
    ((Xe = /^Codex Computer Use Apple Event error (-?\d+):/), (Ze = /^AE.+ failed with (-?\d+)(?:\s|$)/));
  }))();
}
function $e() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.enable`,
          defaultMessage: `Computer history`,
          description: `Label for the Computer history enable toggle`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function et() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.enableDescriptionWithLearnMore`,
          defaultMessage: `Augment memories with your computer activity so ChatGPT can help with anything you’re working on. <learnMore>Learn more</learnMore>`,
          description: `Computer history enablement description followed by a learn-more link`,
          values: { learnMore: tt },
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function tt(e) {
  return (0, Q.jsx)(Y, { children: pt.Children.toArray(e) }, `computer-history-learn-more`);
}
function nt() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.permissions.title`,
          defaultMessage: `Permissions`,
          description: `Computer history permissions title`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function rt() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.permissions.description`,
          defaultMessage: `Choose which apps and websites to exclude or include in computer history`,
          description: `Computer history permissions description`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function it() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.history.title`,
          defaultMessage: `History`,
          description: `Computer history timeline title`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function at() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.off.title`,
          defaultMessage: `Let ChatGPT follow your work`,
          description: `Computer history off-state title`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ot() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.off.description`,
          defaultMessage: `ChatGPT can summarize your activity across the apps and websites you use without ever recording your screen or audio.`,
          description: `Computer history off-state explanation of activity summarization and recording privacy`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function st() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.off.benefits`,
          defaultMessage: `Ask about what you were working on, get help without explaining everything again, or discover opportunities to automate repeated tasks.`,
          description: `Computer history off-state explanation of its benefits`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ct() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.off.privacyDisclaimerWithLearnMore`,
          defaultMessage: `When turned on, ChatGPT saves text summaries of your activity across allowed apps and websites, potentially including communications. Audio and private-mode web browsing are never included, and you can pause or clear your history and manage what’s included at any time. This feature increases token usage. <learnMore>Learn more</learnMore>`,
          description: `Privacy and token usage explanation below the Computer history onboarding card, followed by a learn-more link`,
          values: { learnMore: lt },
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function lt(e) {
  return (0, Q.jsx)(Y, { children: pt.Children.toArray(e) }, `computer-history-onboarding-learn-more`);
}
function ut() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(c, {
          id: `settings.chronicle.permissions.privateBrowsingWithLearnMore`,
          defaultMessage: `Private-mode web browsing activity is never included in computer history. <learnMore>Learn more about privacy</learnMore>`,
          description: `Computer history private browsing behavior followed by a privacy learn-more link`,
          values: { learnMore: dt },
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function dt(e) {
  return (0, Q.jsx)(
    Y,
    { openTarget: `external-browser`, children: pt.Children.toArray(e) },
    `computer-history-privacy-learn-more`,
  );
}
function ft(e) {
  let t = (0, Z.c)(4),
    { behavior: n, kind: r } = e;
  if (n === `observe`) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e =
            r === `apps`
              ? (0, Q.jsx)(c, {
                  id: `settings.chronicle.permissions.excludeApps`,
                  defaultMessage: `Exclude these apps`,
                  description: `Application exclusion policy label`,
                })
              : (0, Q.jsx)(c, {
                  id: `settings.chronicle.permissions.excludeWebsites`,
                  defaultMessage: `Exclude these websites`,
                  description: `Website exclusion policy label`,
                })),
          (t[0] = r),
          (t[1] = e)),
      e
    );
  }
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i =
          r === `apps`
            ? (0, Q.jsx)(c, {
                id: `settings.chronicle.permissions.includeApps`,
                defaultMessage: `Include only these apps`,
                description: `Application allowlist policy label`,
              })
            : (0, Q.jsx)(c, {
                id: `settings.chronicle.permissions.includeWebsites`,
                defaultMessage: `Include only these websites`,
                description: `Website allowlist policy label`,
              })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
var Z, pt, Q;
function mt() {
  return (mt = e(() => {
    ((Z = P()), (pt = le()), E(), Ie(), (Q = I()));
  }))();
}
function ht(e) {
  let t = (0, Et.c)(43),
    { initialApplicationMenuOpen: r, onOpenChange: i, onSaved: s, open: f } = e,
    p = r !== void 0 && r,
    m = l(o),
    h = _(),
    [g, y] = (0, Ot.useState)(p),
    b = f && g,
    S;
  t[0] === b ? (S = t[1]) : ((S = { enabled: b }), (t[0] = b), (t[1] = S));
  let { data: C, isError: w, isLoading: ee } = v(Oe, S),
    [T, E] = (0, Ot.useState)(null),
    [ne, D] = (0, Ot.useState)(``),
    [O, k] = (0, Ot.useState)(!1),
    [A, oe] = (0, Ot.useState)(null),
    j;
  t[2] === i
    ? (j = t[3])
    : ((j = () => {
        (E(null), y(!1), oe(null), D(``), k(!1), i(!1));
      }),
      (t[2] = i),
      (t[3] = j));
  let M = j,
    N;
  t[4] !== M || t[5] !== i
    ? ((N = (e) => {
        if (!e) {
          M();
          return;
        }
        i(!0);
      }),
      (t[4] = M),
      (t[5] = i),
      (t[6] = N))
    : (N = t[6]);
  let P = N,
    F;
  t[7] === f ? (F = t[8]) : ((F = { enabled: f }), (t[7] = f), (t[8] = F));
  let { data: I, error: L, isError: ce, isLoading: le, refetch: de } = v(Ee, F),
    R;
  t[9] === L ? (R = t[10]) : ((R = Ye(L)?.code), (t[9] = L), (t[10] = R));
  let z = R,
    B = T ?? (I == null ? null : Te(I)),
    V = B?.applicationBundleIdentifiers ?? [],
    H;
  t[11] === f ? (H = t[12]) : ((H = { enabled: f }), (t[11] = f), (t[12] = H));
  let { data: fe } = ue(De, V, H),
    pe = v(we),
    me = new Map([...(fe ?? []), ...(C ?? [])].map(vt)),
    he =
      B == null
        ? []
        : B.applicationBundleIdentifiers.map(
            (e) =>
              me.get(e) ?? {
                bundleIdentifier: e,
                displayName: e.split(`.`).at(-1) ?? e,
                iconDataURL: null,
                isWebBrowser: !1,
              },
          ),
    ge = () => {
      if (B == null) return;
      let e = Tt(ne);
      e != null && (B.urlDomains.includes(e) || E({ ...B, urlDomains: [...B.urlDomains, e] }), D(``), k(!1));
    },
    _e = ie,
    U;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = {
        "aria-describedby": void 0,
        onOpenAutoFocus: (e) => {
          e.currentTarget instanceof HTMLElement && oe(e.currentTarget);
        },
      }),
      (t[13] = U))
    : (U = t[13]);
  let ve = ae,
    be = (e) => {
      (e.preventDefault(),
        B != null &&
          !pe.isPending &&
          pe.mutate(B, {
            onSuccess: () => {
              (M(), s?.());
            },
            onError: () => {
              m.get(te).danger(
                (0, $.jsx)(c, {
                  id: `settings.chronicle.permissions.saveErrorToast`,
                  defaultMessage: `Computer history permissions could not be saved`,
                  description: `Toast shown when saving Computer history permissions fails`,
                }),
                { errorAnalytics: { toastId: `settings.chronicle.permissions.saveErrorToast` } },
              );
            },
          }));
    },
    xe = re,
    W;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(x, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(c, {
            id: `settings.chronicle.permissions.dialogTitle`,
            defaultMessage: `Computer history permissions`,
            description: `Computer history permissions dialog title`,
          }),
        }),
      })),
      (t[14] = W))
    : (W = t[14]);
  let Se = ce
      ? (0, $.jsxs)(`div`, {
          className: `flex min-h-[300px] flex-col items-center justify-center gap-3 text-center text-sm text-secondary`,
          children: [
            (0, $.jsx)(`div`, {
              className: `flex flex-col gap-1`,
              children: (0, $.jsx)(c, {
                id: `settings.chronicle.permissions.errorWithOptionalCodeAndRestartGuidance`,
                defaultMessage: `<line>Computer history permissions could not be loaded{hasCode, select, yes { (error {code})} other {}}.</line><line>If the issue persists, please restart ChatGPT.</line>`,
                description: `Computer history permissions error state with an optional technical error code, advising the user to restart ChatGPT if the issue persists`,
                values: { code: z ?? ``, hasCode: z == null ? `no` : `yes`, line: _t },
              }),
            }),
            (0, $.jsx)(n, {
              color: `outline`,
              onClick: () => void de(),
              children: (0, $.jsx)(c, {
                id: `settings.chronicle.permissions.retry`,
                defaultMessage: `Try again`,
                description: `Retry loading Computer history permissions`,
              }),
            }),
          ],
        })
      : B == null || le
        ? (0, $.jsx)(`div`, {
            className: `py-16 text-center text-sm text-secondary`,
            children: (0, $.jsx)(c, {
              id: `settings.chronicle.permissions.loading`,
              defaultMessage: `Loading permissions…`,
              description: `Computer history permissions loading state`,
            }),
          })
        : (0, $.jsxs)(`div`, {
            className: `grid min-h-0 grid-cols-2 gap-3 max-sm:grid-cols-1`,
            children: [
              (0, $.jsxs)(bt, {
                kind: `apps`,
                behavior: B.defaultApplicationBehavior,
                onBehaviorChange: (e) => E({ ...B, defaultApplicationBehavior: e }),
                children: [
                  (0, $.jsx)(a, {
                    contentWidth: `menuWide`,
                    contentMaxHeight: `tall`,
                    open: g,
                    portalContainer: A,
                    onContentFocus: gt,
                    onOpenChange: y,
                    triggerButton: (0, $.jsxs)(n, {
                      color: `ghostActive`,
                      size: `toolbar`,
                      className: `mx-1 mt-1 !h-10 w-[calc(100%-0.5rem)] !justify-start !gap-2.5 !border-0`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `flex size-6 items-center justify-center text-secondary`,
                          children: (0, $.jsx)(ye, { className: `!size-[18px]` }),
                        }),
                        (0, $.jsx)(c, {
                          id: `settings.chronicle.permissions.addApp`,
                          defaultMessage: `Add app`,
                          description: `Add application to Computer history permissions`,
                        }),
                      ],
                    }),
                    children: (0, $.jsx)(yt, {
                      applications: C ?? [],
                      isError: w,
                      isLoading: ee,
                      selectedBundleIdentifiers: B.applicationBundleIdentifiers,
                      onSelect: (e) =>
                        E({
                          ...B,
                          applicationBundleIdentifiers: [
                            ...B.applicationBundleIdentifiers,
                            e.bundleIdentifier,
                          ],
                        }),
                    }),
                  }),
                  (0, $.jsx)(`div`, {
                    className: `flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-1 pb-1`,
                    children: he.map((e) =>
                      (0, $.jsx)(
                        Ct,
                        {
                          application: e,
                          subtitle:
                            e.isWebBrowser && B.defaultApplicationBehavior === `do_not_observe`
                              ? wt(B.defaultURLBehavior, B.urlDomains.length)
                              : null,
                          onRemove: () =>
                            E({
                              ...B,
                              applicationBundleIdentifiers: B.applicationBundleIdentifiers.filter(
                                (t) => t !== e.bundleIdentifier,
                              ),
                            }),
                        },
                        e.bundleIdentifier,
                      ),
                    ),
                  }),
                ],
              }),
              (0, $.jsxs)(bt, {
                kind: `websites`,
                behavior: B.defaultURLBehavior,
                onBehaviorChange: (e) => E({ ...B, defaultURLBehavior: e }),
                children: [
                  O
                    ? (0, $.jsxs)(`div`, {
                        className: `mx-1 mt-1 grid min-h-10 grid-cols-[24px_minmax(0,1fr)_auto] items-center gap-2 rounded-lg py-[5px] ps-2 pe-1.5`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `flex size-6 items-center justify-center rounded-lg bg-text/5 text-tertiary`,
                            children: (0, $.jsx)(u, { "aria-hidden": !1, asset: d }),
                          }),
                          (0, $.jsx)(`input`, {
                            autoFocus: !0,
                            className: `min-w-0 flex-1 bg-transparent text-[13px] leading-[17px] outline-none`,
                            value: ne,
                            onChange: (e) => D(e.currentTarget.value),
                            onKeyDown: (e) => {
                              if (e.key === `Escape`) {
                                (D(``), k(!1));
                                return;
                              }
                              e.key === `Enter` && (e.preventDefault(), ge());
                            },
                            placeholder: h.formatMessage({
                              id: `settings.chronicle.permissions.domainPlaceholder`,
                              defaultMessage: `example.com`,
                              description: `Website domain input placeholder`,
                            }),
                            "aria-label": h.formatMessage({
                              id: `settings.chronicle.permissions.domainLabel`,
                              defaultMessage: `Website domain`,
                              description: `Website domain input accessible label`,
                            }),
                          }),
                          (0, $.jsx)(n, {
                            color: `secondary`,
                            size: `composerSm`,
                            radius: `large`,
                            type: `button`,
                            onClick: ge,
                            children: (0, $.jsx)(c, {
                              id: `settings.chronicle.permissions.saveWebsite`,
                              defaultMessage: `Save`,
                              description: `Save a website in Computer history permissions`,
                            }),
                          }),
                        ],
                      })
                    : (0, $.jsxs)(n, {
                        color: `ghostActive`,
                        size: `toolbar`,
                        className: `mx-1 mt-1 !h-10 w-[calc(100%-0.5rem)] !justify-start !gap-2.5 !border-0`,
                        onClick: () => k(!0),
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `flex size-6 items-center justify-center text-secondary`,
                            children: (0, $.jsx)(ye, { className: `!size-[18px]` }),
                          }),
                          (0, $.jsx)(c, {
                            id: `settings.chronicle.permissions.addWebsite`,
                            defaultMessage: `Add website`,
                            description: `Add website to Computer history permissions`,
                          }),
                        ],
                      }),
                  (0, $.jsx)(`div`, {
                    className: `flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-1 pb-1`,
                    children: B.urlDomains.map((e) =>
                      (0, $.jsx)(
                        xt,
                        {
                          icon: (0, $.jsx)(`span`, {
                            className: `flex size-6 shrink-0 items-center justify-center rounded-lg bg-text/5 text-secondary`,
                            children: (0, $.jsx)(u, {
                              className: `text-secondary`,
                              "aria-hidden": !1,
                              asset: d,
                            }),
                          }),
                          label: e,
                          onRemove: () => E({ ...B, urlDomains: B.urlDomains.filter((t) => t !== e) }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
    Ce;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, $.jsx)(`p`, {
        className: `mt-3 text-xs leading-[17px] text-secondary`,
        children: (0, $.jsx)(ut, {}),
      })),
      (t[15] = Ce))
    : (Ce = t[15]);
  let G;
  t[16] !== xe || t[17] !== W || t[18] !== Se
    ? ((G = (0, $.jsxs)(xe, { children: [W, Se, Ce] })), (t[16] = xe), (t[17] = W), (t[18] = Se), (t[19] = G))
    : (G = t[19]);
  let ke;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, $.jsx)(c, {
        id: `settings.chronicle.permissions.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel Computer history permission changes`,
      })),
      (t[20] = ke))
    : (ke = t[20]);
  let K;
  t[21] === M
    ? (K = t[22])
    : ((K = (0, $.jsx)(n, {
        color: `ghost`,
        className: `enabled:hover:!text-default`,
        type: `button`,
        onClick: M,
        children: ke,
      })),
      (t[21] = M),
      (t[22] = K));
  let Ae = B == null,
    q;
  t[23] === s
    ? (q = t[24])
    : ((q =
        s == null
          ? (0, $.jsx)(c, {
              id: `settings.chronicle.permissions.done`,
              defaultMessage: `Done`,
              description: `Save Computer history permission changes`,
            })
          : (0, $.jsx)(c, {
              id: `settings.chronicle.permissions.continue`,
              defaultMessage: `Continue`,
              description: `Save initial Computer history permissions and continue turning on Computer history`,
            })),
      (t[23] = s),
      (t[24] = q));
  let J;
  t[25] !== pe.isPending || t[26] !== Ae || t[27] !== q
    ? ((J = (0, $.jsx)(n, {
        color: `primary`,
        loading: pe.isPending,
        disabled: Ae,
        type: `submit`,
        children: q,
      })),
      (t[25] = pe.isPending),
      (t[26] = Ae),
      (t[27] = q),
      (t[28] = J))
    : (J = t[28]);
  let je;
  t[29] !== K || t[30] !== J
    ? ((je = (0, $.jsx)(re, { children: (0, $.jsxs)(se, { className: `gap-3`, children: [K, J] }) })),
      (t[29] = K),
      (t[30] = J),
      (t[31] = je))
    : (je = t[31]);
  let Me;
  t[32] !== ve || t[33] !== be || t[34] !== G || t[35] !== je
    ? ((Me = (0, $.jsxs)(ve, {
        as: `form`,
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-4rem)] min-h-0 overflow-y-auto !p-5`,
        onSubmit: be,
        children: [G, je],
      })),
      (t[32] = ve),
      (t[33] = be),
      (t[34] = G),
      (t[35] = je),
      (t[36] = Me))
    : (Me = t[36]);
  let Y;
  return (
    t[37] !== _e || t[38] !== P || t[39] !== f || t[40] !== U || t[41] !== Me
      ? ((Y = (0, $.jsx)(_e, {
          open: f,
          onOpenChange: P,
          showDialogClose: !1,
          contentOverflow: `visible`,
          contentProps: U,
          size: `xwide`,
          children: Me,
        })),
        (t[37] = _e),
        (t[38] = P),
        (t[39] = f),
        (t[40] = U),
        (t[41] = Me),
        (t[42] = Y))
      : (Y = t[42]),
    Y
  );
}
function gt(e) {
  e.target === e.currentTarget && e.currentTarget.querySelector(`input`)?.focus({ preventScroll: !0 });
}
function _t(e) {
  return (0, $.jsx)(`div`, { children: e });
}
function vt(e) {
  return [e.bundleIdentifier, e];
}
function yt(e) {
  let t = (0, Et.c)(21),
    { applications: n, isError: r, isLoading: i, onSelect: a, selectedBundleIdentifiers: o } = e,
    s = _(),
    [l, u] = (0, Ot.useState)(``),
    d;
  if (t[0] !== n || t[1] !== s || t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== l || t[6] !== o) {
    let e = l.trim().toLocaleLowerCase(),
      f;
    t[8] === o ? (f = t[9]) : ((f = new Set(o)), (t[8] = o), (t[9] = f));
    let p = f,
      m;
    t[10] === p ? (m = t[11]) : ((m = (e) => !p.has(e.bundleIdentifier)), (t[10] = p), (t[11] = m));
    let h = (0, Dt.default)(n, `bundleIdentifier`).filter(m),
      _ = h.filter(
        (t) =>
          e === `` ||
          t.displayName.toLocaleLowerCase().includes(e) ||
          t.bundleIdentifier.toLocaleLowerCase().includes(e),
      ),
      v;
    t[12] === s
      ? (v = t[13])
      : ((v = s.formatMessage({
          id: `settings.chronicle.permissions.searchAppsLabel`,
          defaultMessage: `Search apps`,
          description: `Accessible label for searching Computer history applications`,
        })),
        (t[12] = s),
        (t[13] = v));
    let y;
    t[14] === s
      ? (y = t[15])
      : ((y = s.formatMessage({
          id: `settings.chronicle.permissions.searchApps`,
          defaultMessage: `Search apps`,
          description: `Placeholder for searching Computer history applications`,
        })),
        (t[14] = s),
        (t[15] = y));
    let b;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (e) => u(e.currentTarget.value)), (t[16] = b))
      : (b = t[16]);
    let x;
    (t[17] !== l || t[18] !== v || t[19] !== y
      ? ((x = (0, $.jsx)(g.SearchInput, {
          autoFocus: !0,
          "aria-label": v,
          placeholder: y,
          value: l,
          onChange: b,
        })),
        (t[17] = l),
        (t[18] = v),
        (t[19] = y),
        (t[20] = x))
      : (x = t[20]),
      (d = (0, $.jsxs)($.Fragment, {
        children: [
          x,
          i
            ? (0, $.jsx)(g.Message, {
                children: (0, $.jsx)(c, {
                  id: `settings.chronicle.permissions.loadingApps`,
                  defaultMessage: `Loading apps…`,
                  description: `Shown while detected Computer history applications are loading`,
                }),
              })
            : r
              ? (0, $.jsx)(g.Message, {
                  children: (0, $.jsx)(c, {
                    id: `settings.chronicle.permissions.appsError`,
                    defaultMessage: `Detected apps could not be loaded`,
                    description: `Shown when detected Computer history applications cannot be loaded`,
                  }),
                })
              : _.length === 0
                ? (0, $.jsx)(g.Message, {
                    children:
                      h.length === 0
                        ? (0, $.jsx)(c, {
                            id: `settings.chronicle.permissions.allAppsAdded`,
                            defaultMessage: `All detected apps are added`,
                            description: `Shown when no more detected apps can be added`,
                          })
                        : (0, $.jsx)(c, {
                            id: `settings.chronicle.permissions.noAppsFound`,
                            defaultMessage: `No apps found`,
                            description: `Shown when no detected apps match the search`,
                          }),
                  })
                : _.map((e) =>
                    (0, $.jsx)(
                      g.Item,
                      { onSelect: () => a(e), children: (0, $.jsx)(St, { application: e }) },
                      e.bundleIdentifier,
                    ),
                  ),
        ],
      })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = l),
      (t[6] = o),
      (t[7] = d));
  } else d = t[7];
  return d;
}
function bt(e) {
  let t = (0, Et.c)(31),
    { behavior: r, children: i, kind: o, onBehaviorChange: c } = e,
    l;
  t[0] !== r || t[1] !== o
    ? ((l = (0, $.jsx)(ft, { behavior: r, kind: o })), (t[0] = r), (t[1] = o), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(s, {
        className: `text-tertiary`,
        "aria-hidden": !1,
        legacyIcon: b,
        asset16: D,
        legacyClassName: `icon-2xs`,
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === l
    ? (d = t[5])
    : ((d = (0, $.jsxs)(n, {
        color: `ghostActive`,
        size: `compact`,
        className: `-ms-2 gap-[7px] self-start !border-0 !text-[14px] !leading-5 !font-medium tracking-normal`,
        children: [l, u],
      })),
      (t[4] = l),
      (t[5] = d));
  let f = r === `observe` ? L : void 0,
    p;
  t[6] === c ? (p = t[7]) : ((p = () => c(`observe`)), (t[6] = c), (t[7] = p));
  let m;
  t[8] === o ? (m = t[9]) : ((m = (0, $.jsx)(ft, { behavior: `observe`, kind: o })), (t[8] = o), (t[9] = m));
  let h;
  t[10] !== f || t[11] !== p || t[12] !== m
    ? ((h = (0, $.jsx)(g.Item, { rightIconAsset: f, onSelect: p, children: m })),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h))
    : (h = t[13]);
  let _ = r === `do_not_observe` ? L : void 0,
    v;
  t[14] === c ? (v = t[15]) : ((v = () => c(`do_not_observe`)), (t[14] = c), (t[15] = v));
  let y;
  t[16] === o
    ? (y = t[17])
    : ((y = (0, $.jsx)(ft, { behavior: `do_not_observe`, kind: o })), (t[16] = o), (t[17] = y));
  let x;
  t[18] !== y || t[19] !== _ || t[20] !== v
    ? ((x = (0, $.jsx)(g.Item, { rightIconAsset: _, onSelect: v, children: y })),
      (t[18] = y),
      (t[19] = _),
      (t[20] = v),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== x || t[23] !== d || t[24] !== h
    ? ((S = (0, $.jsxs)(a, { contentWidth: `menu`, triggerButton: d, children: [h, x] })),
      (t[22] = x),
      (t[23] = d),
      (t[24] = h),
      (t[25] = S))
    : (S = t[25]);
  let C;
  t[26] === i
    ? (C = t[27])
    : ((C = (0, $.jsx)(`div`, {
        className: `flex h-[250px] min-h-0 flex-col overflow-visible rounded-xl border border-default bg-text/[0.025]`,
        children: i,
      })),
      (t[26] = i),
      (t[27] = C));
  let w;
  return (
    t[28] !== S || t[29] !== C
      ? ((w = (0, $.jsxs)(`section`, { className: `flex min-h-0 flex-col gap-2`, children: [S, C] })),
        (t[28] = S),
        (t[29] = C),
        (t[30] = w))
      : (w = t[30]),
    w
  );
}
function xt(e) {
  let t = (0, Et.c)(17),
    { icon: r, label: i, onRemove: a, subtitle: o } = e,
    s = _(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, $.jsx)(`span`, { className: `truncate`, children: i })), (t[0] = i), (t[1] = c));
  let l;
  t[2] === o
    ? (l = t[3])
    : ((l =
        o == null
          ? null
          : (0, $.jsx)(`span`, {
              className: `truncate text-[11px] leading-[15px] text-secondary`,
              children: o,
            })),
      (t[2] = o),
      (t[3] = l));
  let u;
  t[4] !== c || t[5] !== l
    ? ((u = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col`, children: [c, l] })),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === s
    ? (d = t[8])
    : ((d = s.formatMessage({
        id: `settings.chronicle.permissions.remove`,
        defaultMessage: `Remove`,
        description: `Remove a Computer history permission item`,
      })),
      (t[7] = s),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, $.jsx)(ce, {})), (t[9] = f)) : (f = t[9]);
  let p;
  t[10] !== a || t[11] !== d
    ? ((p = (0, $.jsx)(n, {
        color: `ghost`,
        size: `iconSm`,
        uniform: !0,
        className: `!size-6 !rounded-lg !p-0 !text-secondary opacity-0 transition-opacity group-focus-within/permission:opacity-100 group-hover/permission:opacity-100 focus-visible:opacity-100 enabled:hover:!text-default [&>svg]:!size-3`,
        "aria-label": d,
        onClick: a,
        children: f,
      })),
      (t[10] = a),
      (t[11] = d),
      (t[12] = p))
    : (p = t[12]);
  let m;
  return (
    t[13] !== r || t[14] !== u || t[15] !== p
      ? ((m = (0, $.jsxs)(`div`, {
          className: `group/permission grid min-h-10 shrink-0 grid-cols-[24px_minmax(0,1fr)_24px] items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-[17px] focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover`,
          children: [r, u, p],
        })),
        (t[13] = r),
        (t[14] = u),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function St(e) {
  let t = (0, Et.c)(8),
    { application: n } = e,
    r;
  t[0] !== n.displayName || t[1] !== n.iconDataURL
    ? ((r =
        n.iconDataURL == null
          ? (0, $.jsx)(`span`, {
              className: `flex size-6 shrink-0 items-center justify-center rounded-lg bg-text/5 text-[10px]`,
              "aria-hidden": `true`,
              children: n.displayName.slice(0, 1),
            })
          : (0, $.jsx)(`img`, { className: `size-6 shrink-0 object-contain`, src: n.iconDataURL, alt: `` })),
      (t[0] = n.displayName),
      (t[1] = n.iconDataURL),
      (t[2] = r))
    : (r = t[2]);
  let i;
  t[3] === n.displayName
    ? (i = t[4])
    : ((i = (0, $.jsx)(`span`, { className: `truncate`, children: n.displayName })),
      (t[3] = n.displayName),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2.5`, children: [r, i] })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Ct(e) {
  let t = (0, Et.c)(13),
    { application: n, onRemove: r, subtitle: i } = e,
    a;
  t[0] === n.bundleIdentifier
    ? (a = t[1])
    : ((a = { kind: `appId`, appId: n.bundleIdentifier }), (t[0] = n.bundleIdentifier), (t[1] = a));
  let o = ke(a),
    s = n.iconDataURL == null ? (o?.appPath ?? null) : null,
    c;
  t[2] === s ? (c = t[3]) : ((c = { appPath: s }), (t[2] = s), (t[3] = c));
  let { iconSmall: l } = de(c),
    u = n.iconDataURL ?? l,
    d;
  t[4] !== n.displayName || t[5] !== u || t[6] !== o?.displayName
    ? ((d = u
        ? (0, $.jsx)(`img`, { className: `size-6 shrink-0 object-contain`, src: u, alt: `` })
        : (0, $.jsx)(`span`, {
            className: `flex size-6 shrink-0 items-center justify-center rounded-lg bg-text/5 text-[10px]`,
            "aria-hidden": `true`,
            children: (o?.displayName ?? n.displayName).slice(0, 1),
          })),
      (t[4] = n.displayName),
      (t[5] = u),
      (t[6] = o?.displayName),
      (t[7] = d))
    : (d = t[7]);
  let f = o?.displayName ?? n.displayName,
    p;
  return (
    t[8] !== r || t[9] !== i || t[10] !== d || t[11] !== f
      ? ((p = (0, $.jsx)(xt, { icon: d, label: f, subtitle: i, onRemove: r })),
        (t[8] = r),
        (t[9] = i),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function wt(e, t) {
  return e === `observe`
    ? t === 0
      ? (0, $.jsx)(c, {
          id: `settings.chronicle.permissions.allWebsites`,
          defaultMessage: `All websites`,
          description: `Browser permission subtitle when every website is included`,
        })
      : (0, $.jsx)(c, {
          id: `settings.chronicle.permissions.allButWebsites`,
          defaultMessage: `All but {count, plural, one {# website} other {# websites}}`,
          description: `Browser permission subtitle when some websites are excluded`,
          values: { count: t },
        })
    : t === 0
      ? (0, $.jsx)(c, {
          id: `settings.chronicle.permissions.noWebsites`,
          defaultMessage: `No websites`,
          description: `Browser permission subtitle when no websites are included`,
        })
      : (0, $.jsx)(c, {
          id: `settings.chronicle.permissions.onlyWebsites`,
          defaultMessage: `Only {count, plural, one {# website} other {# websites}}`,
          description: `Browser permission subtitle when only some websites are included`,
          values: { count: t },
        });
}
function Tt(e) {
  let t = e.trim().toLowerCase();
  if (t === ``) return null;
  try {
    return new URL(t.includes(`://`) ? t : `https://${t}`).hostname;
  } catch {
    return null;
  }
}
var Et, Dt, Ot, $;
function kt() {
  return (kt = e(() => {
    ((Et = P()),
      C(),
      M(),
      p(),
      (Dt = t(oe(), 1)),
      m(),
      (Ot = le()),
      E(),
      Qe(),
      ve(),
      j(),
      N(),
      T(),
      r(),
      f(),
      ne(),
      O(),
      y(),
      _e(),
      w(),
      K(),
      F(),
      mt(),
      G(),
      ($ = I()));
  }))();
}
export {
  Ie as S,
  Je as _,
  st as a,
  Ve as b,
  at as c,
  it as d,
  mt as f,
  He as g,
  Ke as h,
  $e as i,
  rt as l,
  Ge as m,
  kt as n,
  ot as o,
  qe as p,
  et as r,
  ct as s,
  ht as t,
  nt as u,
  We as v,
  Y as x,
  Le as y,
};
//# sourceMappingURL=chronicle-permissions-dialog-606ef439299b.js.map
