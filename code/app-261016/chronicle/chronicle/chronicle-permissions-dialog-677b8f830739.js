import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  CNt as i,
  CY as a,
  DB as o,
  EO as s,
  F1 as c,
  FBt as l,
  HO as u,
  I1 as d,
  IO as f,
  JO as p,
  LNt as m,
  LO as h,
  OB as g,
  PBt as _,
  Qst as v,
  RO as y,
  TO as b,
  TY as ee,
  Vrt as te,
  WO as ne,
  XO as x,
  XOt as S,
  Y3 as C,
  YO as w,
  Z3 as re,
  ZSt as T,
  b2 as ie,
  ck as E,
  iCt as D,
  l2 as O,
  nCt as ae,
  okt as oe,
  qO as se,
  qrt as ce,
  rk as k,
  sct as A,
  tk as le,
  tkt as j,
  u2 as M,
  wB as N,
  xB as P,
  xyt as ue,
  y2 as de,
  yCt as fe,
  zO as pe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CMr as me,
  DBr as F,
  Jbr as I,
  Ml as L,
  N0 as R,
  OBr as z,
  P0 as B,
  SRn as he,
  Tjr as ge,
  bRn as _e,
  dIt as ve,
  ixr as ye,
  jl as be,
  lIt as V,
  vBr as xe,
  xjr as Se,
  yBr as Ce,
  yMr as H,
} from "./app-initial-ad16eaadf81f.js";
import { n as we, t as Te } from "./chronicle-settings-d16251f05467.js";
import {
  a as U,
  l as Ee,
  m as De,
  n as Oe,
  s as ke,
  t as Ae,
} from "./chronicle-service-queries-10a9f98f13fc.js";
import { r as je, t as W } from "./computer-use-native-app-metadata-9f2a13208dca.js";
import { n as Me, r as G, t as K } from "./memory-settings-analytics-ff8e2bac5691.js";
import { n as q, t as J } from "./country-codes-1c845666fc28.js";
function Y(e) {
  let t = (0, Ne.c)(6),
    { appearance: n, children: r, openTarget: i } = e,
    a = (n === void 0 ? `default` : n) === `secondary` ? `text-secondary! underline!` : `text-info`,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (e) => he({ event: e, href: Fe, initiator: `open_in_browser_bridge`, openTarget: i })),
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
    ((Ne = _()), _e(), (Pe = m()), (Fe = `https://learn.chatgpt.com/docs/customization/computer-history`));
  }))();
}
function Le(e) {
  let t = (0, ze.c)(57),
    { open: n, variant: r, isPending: i, onOpenChange: o, onTurnOn: s } = e,
    c = r === void 0 ? `default` : r,
    l = oe(),
    { client: u, isLoading: d } = ge(),
    p = u.getContext().user?.country?.trim().toUpperCase(),
    m = c === `onboarding` && (d || !p || J.has(p)),
    g = c === `onboarding` ? `promotional` : `default`,
    _ = c === `onboarding` ? `beacon` : `default`,
    v = c !== `onboarding`,
    b;
  t[0] !== i || t[1] !== o
    ? ((b = (e) => {
        i || o(e);
      }),
      (t[0] = i),
      (t[1] = o),
      (t[2] = b))
    : (b = t[2]);
  let ee = c === `onboarding` ? `px-8 pt-16 pb-8` : void 0,
    te = c === `onboarding` ? `chatgpt` : `default`,
    x = c === `onboarding` ? `viewport` : void 0,
    S;
  t[3] !== i || t[4] !== s
    ? ((S = (e) => {
        (e.preventDefault(), i || s());
      }),
      (t[3] = i),
      (t[4] = s),
      (t[5] = S))
    : (S = t[5]);
  let w;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(se, {
        asChild: !0,
        children: (0, X.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, X.jsx)(j, {
            id: `settings.chronicle.enableMemoriesAccessibleTitle`,
            defaultMessage: `Turn on Memories`,
            description: `Accessible title for the dialog that enables Memories before Computer history`,
          }),
        }),
      })),
      (t[6] = w))
    : (w = t[6]);
  let re = c === `onboarding` ? `text-center select-none` : void 0,
    T = c === `onboarding` ? `secondary` : `tertiary`,
    ie = c === `onboarding` ? `mt-1 leading-5` : void 0,
    E;
  t[7] === c
    ? (E = t[8])
    : ((E =
        c === `onboarding`
          ? (0, X.jsx)(`span`, {
              className: `heading-md font-medium`,
              children: (0, X.jsx)(j, {
                id: `electron.onboarding.computerHistory.enableMemoriesTitle`,
                defaultMessage: `Turn on Memories to use Computer History`,
                description: `Title asking for separate Memories consent before enabling Computer History during onboarding`,
              }),
            })
          : (0, X.jsx)(j, {
              id: `settings.chronicle.enableMemoriesTitle`,
              defaultMessage: `Turn on Memories to use Computer history?`,
              description: `Title for the dialog that enables Memories before Computer history`,
            })),
      (t[7] = c),
      (t[8] = E));
  let D;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(j, {
        id: `settings.chronicle.enableMemoriesDescriptionWithLearnMore`,
        defaultMessage: `Computer history requires Memories so ChatGPT can remember your activity across tasks. Turning this on also lets ChatGPT generate memories from your chats and use them in future chats. <learnMore>Learn more</learnMore>`,
        description: `Explanation of the broader effect of enabling Memories for Computer history, followed by a learn-more link`,
        values: { learnMore: Re },
      })),
      (t[9] = D))
    : (D = t[9]);
  let O;
  t[10] !== re || t[11] !== T || t[12] !== ie || t[13] !== E
    ? ((O = (0, X.jsxs)(pe, {
        children: [
          w,
          (0, X.jsx)(y, { className: re, subtitleTone: T, subtitleClassName: ie, title: E, subtitle: D }),
        ],
      })),
      (t[10] = re),
      (t[11] = T),
      (t[12] = ie),
      (t[13] = E),
      (t[14] = O))
    : (O = t[14]);
  let ae = c === `onboarding` ? `mt-1` : void 0,
    ce = c === `onboarding` ? `large` : `default`,
    k = c === `onboarding` ? `flex-1 justify-center` : void 0,
    A = c === `onboarding` ? `outline` : `ghost`,
    le = c === `onboarding` ? `beaconAction` : void 0,
    M;
  t[15] === o ? (M = t[16]) : ((M = () => o(!1)), (t[15] = o), (t[16] = M));
  let N;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(j, {
        id: `settings.chronicle.enableMemoriesCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel enabling Memories and Computer history`,
      })),
      (t[17] = N))
    : (N = t[17]);
  let P;
  t[18] !== i || t[19] !== k || t[20] !== A || t[21] !== le || t[22] !== M
    ? ((P = (0, X.jsx)(C, {
        className: k,
        color: A,
        size: le,
        disabled: i,
        type: `button`,
        onClick: M,
        children: N,
      })),
      (t[18] = i),
      (t[19] = k),
      (t[20] = A),
      (t[21] = le),
      (t[22] = M),
      (t[23] = P))
    : (P = t[23]);
  let ue = c === `onboarding` ? `flex-1 justify-center` : void 0,
    de = m ? `outline` : `primary`,
    fe = c === `onboarding` ? `beaconAction` : void 0,
    me;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, X.jsx)(j, {
        id: `settings.chronicle.enableMemoriesConfirm`,
        defaultMessage: `Turn on Memories`,
        description: `Confirm enabling Memories before Computer history`,
      })),
      (t[24] = me))
    : (me = t[24]);
  let F;
  t[25] !== i || t[26] !== ue || t[27] !== de || t[28] !== fe
    ? ((F = (0, X.jsx)(C, { className: ue, color: de, size: fe, loading: i, type: `submit`, children: me })),
      (t[25] = i),
      (t[26] = ue),
      (t[27] = de),
      (t[28] = fe),
      (t[29] = F))
    : (F = t[29]);
  let I;
  t[30] !== P || t[31] !== F
    ? ((I = (0, X.jsxs)(h, { children: [P, F] })), (t[30] = P), (t[31] = F), (t[32] = I))
    : (I = t[32]);
  let L;
  t[33] !== ae || t[34] !== ce || t[35] !== I
    ? ((L = (0, X.jsx)(pe, { className: ae, spacing: ce, children: I })),
      (t[33] = ae),
      (t[34] = ce),
      (t[35] = I),
      (t[36] = L))
    : (L = t[36]);
  let R;
  t[37] !== O || t[38] !== L || t[39] !== ee || t[40] !== te || t[41] !== x || t[42] !== S
    ? ((R = (0, X.jsxs)(f, {
        as: `form`,
        className: ee,
        variant: te,
        size: x,
        onSubmit: S,
        children: [O, L],
      })),
      (t[37] = O),
      (t[38] = L),
      (t[39] = ee),
      (t[40] = te),
      (t[41] = x),
      (t[42] = S),
      (t[43] = R))
    : (R = t[43]);
  let z;
  t[44] !== l || t[45] !== i || t[46] !== o || t[47] !== c
    ? ((z =
        c === `onboarding` &&
        (0, X.jsx)(C, {
          className: `absolute top-4 right-4`,
          color: `secondary`,
          size: `inputIcon`,
          radius: `full`,
          disabled: i,
          type: `button`,
          onClick: () => o(!1),
          "aria-label": l.formatMessage({
            id: `codex.dialog.closeButton`,
            defaultMessage: `Close dialog`,
            description: `Accessible label for the button that closes a dialog`,
          }),
          children: (0, X.jsx)(a, {}),
        })),
      (t[44] = l),
      (t[45] = i),
      (t[46] = o),
      (t[47] = c),
      (t[48] = z))
    : (z = t[48]);
  let B;
  return (
    t[49] !== n || t[50] !== g || t[51] !== _ || t[52] !== R || t[53] !== z || t[54] !== v || t[55] !== b
      ? ((B = (0, X.jsxs)(ne, {
          open: n,
          variant: g,
          size: _,
          showDialogClose: v,
          onOpenChange: b,
          children: [R, z],
        })),
        (t[49] = n),
        (t[50] = g),
        (t[51] = _),
        (t[52] = R),
        (t[53] = z),
        (t[54] = v),
        (t[55] = b),
        (t[56] = B))
      : (B = t[56]),
    B
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
    ((ze = _()), (Be = l()), S(), re(), p(), u(), ee(), Se(), q(), Ie(), (X = m()));
  }))();
}
async function He(e, { hostId: t, setMemoryFeatureEnabled: n, writeMemoryConfig: r }) {
  let { data: i } = e.get(ye, t),
    { data: a } = e.get(xe, t),
    o = a == null ? void 0 : F(a);
  if (i?.configReadSucceeded !== !0 || o == null) throw Error(`Memories prerequisites are unavailable`);
  let s = i.config,
    c = V(s),
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
    chronicleResearchPreviewEnabled: ue(s, Te) === !0,
    chronicleResearchPreviewVisible: !1,
    isMemoryFeatureEnabled: l,
    memoryConfig: c,
  };
  G({
    productLogger: e.get(me),
    previousEnabled: u,
    selectedEnabled: !0,
    settingName: `memories`,
    state: K(d, { isMemoryFeatureEnabled: !0, memoryConfigPatch: { generateMemories: !0, useMemories: !0 } }),
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
    (T(),
      A(),
      ve(),
      z(),
      H(),
      I(),
      Ce(),
      r(),
      Me(),
      we(),
      (Ge = fe(v, (e, { get: t }) => t(ye, e).data?.configReadSucceeded === !0)),
      (Ke = fe(v, (e, { get: t }) => {
        let { data: n } = t(xe, e);
        return n != null && F(n) != null;
      })),
      (qe = fe(v, (e, { get: t }) => {
        let { data: n } = t(ye, e),
          { data: r } = t(xe, e),
          i = r == null ? void 0 : F(r),
          a = V(n?.config);
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
      ? ((t = (0, Q.jsx)(j, {
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
              ? (0, Q.jsx)(j, {
                  id: `settings.chronicle.permissions.excludeApps`,
                  defaultMessage: `Exclude these apps`,
                  description: `Application exclusion policy label`,
                })
              : (0, Q.jsx)(j, {
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
            ? (0, Q.jsx)(j, {
                id: `settings.chronicle.permissions.includeApps`,
                defaultMessage: `Include only these apps`,
                description: `Application allowlist policy label`,
              })
            : (0, Q.jsx)(j, {
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
    ((Z = _()), (pt = l()), S(), Ie(), (Q = m()));
  }))();
}
function ht(e) {
  let t = (0, Et.c)(43),
    { initialApplicationMenuOpen: r, onOpenChange: i, onSaved: a, open: s } = e,
    l = r !== void 0 && r,
    u = n(v),
    d = oe(),
    [p, m] = (0, Ot.useState)(l),
    g = s && p,
    _;
  t[0] === g ? (_ = t[1]) : ((_ = { enabled: g }), (t[0] = g), (t[1] = _));
  let { data: y, isError: b, isLoading: ee } = D(Ae, _),
    [te, x] = (0, Ot.useState)(null),
    [S, w] = (0, Ot.useState)(``),
    [re, T] = (0, Ot.useState)(!1),
    [ie, E] = (0, Ot.useState)(null),
    O;
  t[2] === i
    ? (O = t[3])
    : ((O = () => {
        (x(null), m(!1), E(null), w(``), T(!1), i(!1));
      }),
      (t[2] = i),
      (t[3] = O));
  let k = O,
    A;
  t[4] !== k || t[5] !== i
    ? ((A = (e) => {
        if (!e) {
          k();
          return;
        }
        i(!0);
      }),
      (t[4] = k),
      (t[5] = i),
      (t[6] = A))
    : (A = t[6]);
  let M = A,
    N;
  t[7] === s ? (N = t[8]) : ((N = { enabled: s }), (t[7] = s), (t[8] = N));
  let { data: P, error: ue, isError: de, isLoading: fe, refetch: me } = D(Oe, N),
    F;
  t[9] === ue ? (F = t[10]) : ((F = Ye(ue)?.code), (t[9] = ue), (t[10] = F));
  let I = F,
    L = te ?? (P == null ? null : De(P)),
    z = L?.applicationBundleIdentifiers ?? [],
    B;
  t[11] === s ? (B = t[12]) : ((B = { enabled: s }), (t[11] = s), (t[12] = B));
  let { data: he } = ae(ke, z, B),
    ge = D(Ee),
    _e = new Map([...(he ?? []), ...(y ?? [])].map(vt)),
    ve =
      L == null
        ? []
        : L.applicationBundleIdentifiers.map(
            (e) =>
              _e.get(e) ?? {
                bundleIdentifier: e,
                displayName: e.split(`.`).at(-1) ?? e,
                iconDataURL: null,
                isWebBrowser: !1,
              },
          ),
    ye = () => {
      if (L == null) return;
      let e = Tt(S);
      e != null && (L.urlDomains.includes(e) || x({ ...L, urlDomains: [...L.urlDomains, e] }), w(``), T(!1));
    },
    be = ne,
    V;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = {
        "aria-describedby": void 0,
        onOpenAutoFocus: (e) => {
          e.currentTarget instanceof HTMLElement && E(e.currentTarget);
        },
      }),
      (t[13] = V))
    : (V = t[13]);
  let xe = f,
    Se = (e) => {
      (e.preventDefault(),
        L != null &&
          !ge.isPending &&
          ge.mutate(L, {
            onSuccess: () => {
              (k(), a?.());
            },
            onError: () => {
              u.get(ce).danger(
                (0, $.jsx)(j, {
                  id: `settings.chronicle.permissions.saveErrorToast`,
                  defaultMessage: `Computer history permissions could not be saved`,
                  description: `Toast shown when saving Computer history permissions fails`,
                }),
                { errorAnalytics: { toastId: `settings.chronicle.permissions.saveErrorToast` } },
              );
            },
          }));
    },
    Ce = pe,
    H;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(se, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(j, {
            id: `settings.chronicle.permissions.dialogTitle`,
            defaultMessage: `Computer history permissions`,
            description: `Computer history permissions dialog title`,
          }),
        }),
      })),
      (t[14] = H))
    : (H = t[14]);
  let we = de
      ? (0, $.jsxs)(`div`, {
          className: `flex min-h-[300px] flex-col items-center justify-center gap-3 text-center text-sm text-secondary`,
          children: [
            (0, $.jsx)(`div`, {
              className: `flex flex-col gap-1`,
              children: (0, $.jsx)(j, {
                id: `settings.chronicle.permissions.errorWithOptionalCodeAndRestartGuidance`,
                defaultMessage: `<line>Computer history permissions could not be loaded{hasCode, select, yes { (error {code})} other {}}.</line><line>If the issue persists, please restart ChatGPT.</line>`,
                description: `Computer history permissions error state with an optional technical error code, advising the user to restart ChatGPT if the issue persists`,
                values: { code: I ?? ``, hasCode: I == null ? `no` : `yes`, line: _t },
              }),
            }),
            (0, $.jsx)(C, {
              color: `outline`,
              onClick: () => void me(),
              children: (0, $.jsx)(j, {
                id: `settings.chronicle.permissions.retry`,
                defaultMessage: `Try again`,
                description: `Retry loading Computer history permissions`,
              }),
            }),
          ],
        })
      : L == null || fe
        ? (0, $.jsx)(`div`, {
            className: `py-16 text-center text-sm text-secondary`,
            children: (0, $.jsx)(j, {
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
                behavior: L.defaultApplicationBehavior,
                onBehaviorChange: (e) => x({ ...L, defaultApplicationBehavior: e }),
                children: [
                  (0, $.jsx)(le, {
                    contentWidth: `menuWide`,
                    contentMaxHeight: `tall`,
                    open: p,
                    portalContainer: ie,
                    onContentFocus: gt,
                    onOpenChange: m,
                    triggerButton: (0, $.jsxs)(C, {
                      color: `ghostActive`,
                      size: `toolbar`,
                      className: `mx-1 mt-1 !h-10 w-[calc(100%-0.5rem)] !justify-start !gap-2.5 !border-0`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `flex size-6 items-center justify-center text-secondary`,
                          children: (0, $.jsx)(R, { className: `!size-[18px]` }),
                        }),
                        (0, $.jsx)(j, {
                          id: `settings.chronicle.permissions.addApp`,
                          defaultMessage: `Add app`,
                          description: `Add application to Computer history permissions`,
                        }),
                      ],
                    }),
                    children: (0, $.jsx)(yt, {
                      applications: y ?? [],
                      isError: b,
                      isLoading: ee,
                      selectedBundleIdentifiers: L.applicationBundleIdentifiers,
                      onSelect: (e) =>
                        x({
                          ...L,
                          applicationBundleIdentifiers: [
                            ...L.applicationBundleIdentifiers,
                            e.bundleIdentifier,
                          ],
                        }),
                    }),
                  }),
                  (0, $.jsx)(`div`, {
                    className: `flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-1 pb-1`,
                    children: ve.map((e) =>
                      (0, $.jsx)(
                        Ct,
                        {
                          application: e,
                          subtitle:
                            e.isWebBrowser && L.defaultApplicationBehavior === `do_not_observe`
                              ? wt(L.defaultURLBehavior, L.urlDomains.length)
                              : null,
                          onRemove: () =>
                            x({
                              ...L,
                              applicationBundleIdentifiers: L.applicationBundleIdentifiers.filter(
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
                behavior: L.defaultURLBehavior,
                onBehaviorChange: (e) => x({ ...L, defaultURLBehavior: e }),
                children: [
                  re
                    ? (0, $.jsxs)(`div`, {
                        className: `mx-1 mt-1 grid min-h-10 grid-cols-[24px_minmax(0,1fr)_auto] items-center gap-2 rounded-lg py-[5px] ps-2 pe-1.5`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `flex size-6 items-center justify-center rounded-lg bg-text/5 text-tertiary`,
                            children: (0, $.jsx)(o, { "aria-hidden": !1, asset: c }),
                          }),
                          (0, $.jsx)(`input`, {
                            autoFocus: !0,
                            className: `min-w-0 flex-1 bg-transparent text-[13px] leading-[17px] outline-none`,
                            value: S,
                            onChange: (e) => w(e.currentTarget.value),
                            onKeyDown: (e) => {
                              if (e.key === `Escape`) {
                                (w(``), T(!1));
                                return;
                              }
                              e.key === `Enter` && (e.preventDefault(), ye());
                            },
                            placeholder: d.formatMessage({
                              id: `settings.chronicle.permissions.domainPlaceholder`,
                              defaultMessage: `example.com`,
                              description: `Website domain input placeholder`,
                            }),
                            "aria-label": d.formatMessage({
                              id: `settings.chronicle.permissions.domainLabel`,
                              defaultMessage: `Website domain`,
                              description: `Website domain input accessible label`,
                            }),
                          }),
                          (0, $.jsx)(C, {
                            color: `secondary`,
                            size: `composerSm`,
                            radius: `large`,
                            type: `button`,
                            onClick: ye,
                            children: (0, $.jsx)(j, {
                              id: `settings.chronicle.permissions.saveWebsite`,
                              defaultMessage: `Save`,
                              description: `Save a website in Computer history permissions`,
                            }),
                          }),
                        ],
                      })
                    : (0, $.jsxs)(C, {
                        color: `ghostActive`,
                        size: `toolbar`,
                        className: `mx-1 mt-1 !h-10 w-[calc(100%-0.5rem)] !justify-start !gap-2.5 !border-0`,
                        onClick: () => T(!0),
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `flex size-6 items-center justify-center text-secondary`,
                            children: (0, $.jsx)(R, { className: `!size-[18px]` }),
                          }),
                          (0, $.jsx)(j, {
                            id: `settings.chronicle.permissions.addWebsite`,
                            defaultMessage: `Add website`,
                            description: `Add website to Computer history permissions`,
                          }),
                        ],
                      }),
                  (0, $.jsx)(`div`, {
                    className: `flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-1 pb-1`,
                    children: L.urlDomains.map((e) =>
                      (0, $.jsx)(
                        xt,
                        {
                          icon: (0, $.jsx)(`span`, {
                            className: `flex size-6 shrink-0 items-center justify-center rounded-lg bg-text/5 text-secondary`,
                            children: (0, $.jsx)(o, {
                              className: `text-secondary`,
                              "aria-hidden": !1,
                              asset: c,
                            }),
                          }),
                          label: e,
                          onRemove: () => x({ ...L, urlDomains: L.urlDomains.filter((t) => t !== e) }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
    Te;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(`p`, {
        className: `mt-3 text-xs leading-[17px] text-secondary`,
        children: (0, $.jsx)(ut, {}),
      })),
      (t[15] = Te))
    : (Te = t[15]);
  let U;
  t[16] !== Ce || t[17] !== H || t[18] !== we
    ? ((U = (0, $.jsxs)(Ce, { children: [H, we, Te] })), (t[16] = Ce), (t[17] = H), (t[18] = we), (t[19] = U))
    : (U = t[19]);
  let je;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(j, {
        id: `settings.chronicle.permissions.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel Computer history permission changes`,
      })),
      (t[20] = je))
    : (je = t[20]);
  let W;
  t[21] === k
    ? (W = t[22])
    : ((W = (0, $.jsx)(C, {
        color: `ghost`,
        className: `enabled:hover:!text-default`,
        type: `button`,
        onClick: k,
        children: je,
      })),
      (t[21] = k),
      (t[22] = W));
  let Me = L == null,
    G;
  t[23] === a
    ? (G = t[24])
    : ((G =
        a == null
          ? (0, $.jsx)(j, {
              id: `settings.chronicle.permissions.done`,
              defaultMessage: `Done`,
              description: `Save Computer history permission changes`,
            })
          : (0, $.jsx)(j, {
              id: `settings.chronicle.permissions.continue`,
              defaultMessage: `Continue`,
              description: `Save initial Computer history permissions and continue turning on Computer history`,
            })),
      (t[23] = a),
      (t[24] = G));
  let K;
  t[25] !== ge.isPending || t[26] !== Me || t[27] !== G
    ? ((K = (0, $.jsx)(C, {
        color: `primary`,
        loading: ge.isPending,
        disabled: Me,
        type: `submit`,
        children: G,
      })),
      (t[25] = ge.isPending),
      (t[26] = Me),
      (t[27] = G),
      (t[28] = K))
    : (K = t[28]);
  let q;
  t[29] !== W || t[30] !== K
    ? ((q = (0, $.jsx)(pe, { children: (0, $.jsxs)(h, { className: `gap-3`, children: [W, K] }) })),
      (t[29] = W),
      (t[30] = K),
      (t[31] = q))
    : (q = t[31]);
  let J;
  t[32] !== xe || t[33] !== Se || t[34] !== U || t[35] !== q
    ? ((J = (0, $.jsxs)(xe, {
        as: `form`,
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-4rem)] min-h-0 overflow-y-auto !p-5`,
        onSubmit: Se,
        children: [U, q],
      })),
      (t[32] = xe),
      (t[33] = Se),
      (t[34] = U),
      (t[35] = q),
      (t[36] = J))
    : (J = t[36]);
  let Y;
  return (
    t[37] !== be || t[38] !== M || t[39] !== s || t[40] !== V || t[41] !== J
      ? ((Y = (0, $.jsx)(be, {
          open: s,
          onOpenChange: M,
          showDialogClose: !1,
          contentOverflow: `visible`,
          contentProps: V,
          size: `xwide`,
          children: J,
        })),
        (t[37] = be),
        (t[38] = M),
        (t[39] = s),
        (t[40] = V),
        (t[41] = J),
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
    s = oe(),
    [c, l] = (0, Ot.useState)(``),
    u;
  if (t[0] !== n || t[1] !== s || t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== c || t[6] !== o) {
    let e = c.trim().toLocaleLowerCase(),
      d;
    t[8] === o ? (d = t[9]) : ((d = new Set(o)), (t[8] = o), (t[9] = d));
    let f = d,
      p;
    t[10] === f ? (p = t[11]) : ((p = (e) => !f.has(e.bundleIdentifier)), (t[10] = f), (t[11] = p));
    let m = (0, Dt.default)(n, `bundleIdentifier`).filter(p),
      h = m.filter(
        (t) =>
          e === `` ||
          t.displayName.toLocaleLowerCase().includes(e) ||
          t.bundleIdentifier.toLocaleLowerCase().includes(e),
      ),
      g;
    t[12] === s
      ? (g = t[13])
      : ((g = s.formatMessage({
          id: `settings.chronicle.permissions.searchAppsLabel`,
          defaultMessage: `Search apps`,
          description: `Accessible label for searching Computer history applications`,
        })),
        (t[12] = s),
        (t[13] = g));
    let _;
    t[14] === s
      ? (_ = t[15])
      : ((_ = s.formatMessage({
          id: `settings.chronicle.permissions.searchApps`,
          defaultMessage: `Search apps`,
          description: `Placeholder for searching Computer history applications`,
        })),
        (t[14] = s),
        (t[15] = _));
    let v;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (e) => l(e.currentTarget.value)), (t[16] = v))
      : (v = t[16]);
    let y;
    (t[17] !== c || t[18] !== g || t[19] !== _
      ? ((y = (0, $.jsx)(k.SearchInput, {
          autoFocus: !0,
          "aria-label": g,
          placeholder: _,
          value: c,
          onChange: v,
        })),
        (t[17] = c),
        (t[18] = g),
        (t[19] = _),
        (t[20] = y))
      : (y = t[20]),
      (u = (0, $.jsxs)($.Fragment, {
        children: [
          y,
          i
            ? (0, $.jsx)(k.Message, {
                children: (0, $.jsx)(j, {
                  id: `settings.chronicle.permissions.loadingApps`,
                  defaultMessage: `Loading apps…`,
                  description: `Shown while detected Computer history applications are loading`,
                }),
              })
            : r
              ? (0, $.jsx)(k.Message, {
                  children: (0, $.jsx)(j, {
                    id: `settings.chronicle.permissions.appsError`,
                    defaultMessage: `Detected apps could not be loaded`,
                    description: `Shown when detected Computer history applications cannot be loaded`,
                  }),
                })
              : h.length === 0
                ? (0, $.jsx)(k.Message, {
                    children:
                      m.length === 0
                        ? (0, $.jsx)(j, {
                            id: `settings.chronicle.permissions.allAppsAdded`,
                            defaultMessage: `All detected apps are added`,
                            description: `Shown when no more detected apps can be added`,
                          })
                        : (0, $.jsx)(j, {
                            id: `settings.chronicle.permissions.noAppsFound`,
                            defaultMessage: `No apps found`,
                            description: `Shown when no detected apps match the search`,
                          }),
                  })
                : h.map((e) =>
                    (0, $.jsx)(
                      k.Item,
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
      (t[5] = c),
      (t[6] = o),
      (t[7] = u));
  } else u = t[7];
  return u;
}
function bt(e) {
  let t = (0, Et.c)(31),
    { behavior: n, children: r, kind: i, onBehaviorChange: a } = e,
    o;
  t[0] !== n || t[1] !== i
    ? ((o = (0, $.jsx)(ft, { behavior: n, kind: i })), (t[0] = n), (t[1] = i), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(P, {
        className: `text-tertiary`,
        "aria-hidden": !1,
        legacyIcon: b,
        asset16: O,
        legacyClassName: `icon-2xs`,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = (0, $.jsxs)(C, {
        color: `ghostActive`,
        size: `compact`,
        className: `-ms-2 gap-[7px] self-start !border-0 !text-[14px] !leading-5 !font-medium tracking-normal`,
        children: [o, s],
      })),
      (t[4] = o),
      (t[5] = c));
  let l = n === `observe` ? de : void 0,
    u;
  t[6] === a ? (u = t[7]) : ((u = () => a(`observe`)), (t[6] = a), (t[7] = u));
  let d;
  t[8] === i ? (d = t[9]) : ((d = (0, $.jsx)(ft, { behavior: `observe`, kind: i })), (t[8] = i), (t[9] = d));
  let f;
  t[10] !== l || t[11] !== u || t[12] !== d
    ? ((f = (0, $.jsx)(k.Item, { rightIconAsset: l, onSelect: u, children: d })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let p = n === `do_not_observe` ? de : void 0,
    m;
  t[14] === a ? (m = t[15]) : ((m = () => a(`do_not_observe`)), (t[14] = a), (t[15] = m));
  let h;
  t[16] === i
    ? (h = t[17])
    : ((h = (0, $.jsx)(ft, { behavior: `do_not_observe`, kind: i })), (t[16] = i), (t[17] = h));
  let g;
  t[18] !== h || t[19] !== p || t[20] !== m
    ? ((g = (0, $.jsx)(k.Item, { rightIconAsset: p, onSelect: m, children: h })),
      (t[18] = h),
      (t[19] = p),
      (t[20] = m),
      (t[21] = g))
    : (g = t[21]);
  let _;
  t[22] !== g || t[23] !== c || t[24] !== f
    ? ((_ = (0, $.jsxs)(le, { contentWidth: `menu`, triggerButton: c, children: [f, g] })),
      (t[22] = g),
      (t[23] = c),
      (t[24] = f),
      (t[25] = _))
    : (_ = t[25]);
  let v;
  t[26] === r
    ? (v = t[27])
    : ((v = (0, $.jsx)(`div`, {
        className: `flex h-[250px] min-h-0 flex-col overflow-visible rounded-xl border border-default bg-text/[0.025]`,
        children: r,
      })),
      (t[26] = r),
      (t[27] = v));
  let y;
  return (
    t[28] !== _ || t[29] !== v
      ? ((y = (0, $.jsxs)(`section`, { className: `flex min-h-0 flex-col gap-2`, children: [_, v] })),
        (t[28] = _),
        (t[29] = v),
        (t[30] = y))
      : (y = t[30]),
    y
  );
}
function xt(e) {
  let t = (0, Et.c)(17),
    { icon: n, label: r, onRemove: i, subtitle: a } = e,
    o = oe(),
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = (0, $.jsx)(`span`, { className: `truncate`, children: r })), (t[0] = r), (t[1] = s));
  let c;
  t[2] === a
    ? (c = t[3])
    : ((c =
        a == null
          ? null
          : (0, $.jsx)(`span`, {
              className: `truncate text-[11px] leading-[15px] text-secondary`,
              children: a,
            })),
      (t[2] = a),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col`, children: [s, c] })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === o
    ? (u = t[8])
    : ((u = o.formatMessage({
        id: `settings.chronicle.permissions.remove`,
        defaultMessage: `Remove`,
        description: `Remove a Computer history permission item`,
      })),
      (t[7] = o),
      (t[8] = u));
  let d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, $.jsx)(w, {})), (t[9] = d)) : (d = t[9]);
  let f;
  t[10] !== i || t[11] !== u
    ? ((f = (0, $.jsx)(C, {
        color: `ghost`,
        size: `iconSm`,
        uniform: !0,
        className: `!size-6 !rounded-lg !p-0 !text-secondary opacity-0 transition-opacity group-focus-within/permission:opacity-100 group-hover/permission:opacity-100 focus-visible:opacity-100 enabled:hover:!text-default [&>svg]:!size-3`,
        "aria-label": u,
        onClick: i,
        children: d,
      })),
      (t[10] = i),
      (t[11] = u),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== n || t[14] !== l || t[15] !== f
      ? ((p = (0, $.jsxs)(`div`, {
          className: `group/permission grid min-h-10 shrink-0 grid-cols-[24px_minmax(0,1fr)_24px] items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-[17px] focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover`,
          children: [n, l, f],
        })),
        (t[13] = n),
        (t[14] = l),
        (t[15] = f),
        (t[16] = p))
      : (p = t[16]),
    p
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
  let o = je(a),
    s = n.iconDataURL == null ? (o?.appPath ?? null) : null,
    c;
  t[2] === s ? (c = t[3]) : ((c = { appPath: s }), (t[2] = s), (t[3] = c));
  let { iconSmall: l } = L(c),
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
      ? (0, $.jsx)(j, {
          id: `settings.chronicle.permissions.allWebsites`,
          defaultMessage: `All websites`,
          description: `Browser permission subtitle when every website is included`,
        })
      : (0, $.jsx)(j, {
          id: `settings.chronicle.permissions.allButWebsites`,
          defaultMessage: `All but {count, plural, one {# website} other {# websites}}`,
          description: `Browser permission subtitle when some websites are excluded`,
          values: { count: t },
        })
    : t === 0
      ? (0, $.jsx)(j, {
          id: `settings.chronicle.permissions.noWebsites`,
          defaultMessage: `No websites`,
          description: `Browser permission subtitle when no websites are included`,
        })
      : (0, $.jsx)(j, {
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
    ((Et = _()),
      ie(),
      M(),
      d(),
      (Dt = t(i(), 1)),
      T(),
      (Ot = l()),
      S(),
      Qe(),
      be(),
      re(),
      p(),
      u(),
      E(),
      g(),
      N(),
      te(),
      s(),
      B(),
      x(),
      W(),
      r(),
      mt(),
      U(),
      ($ = m()));
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
//# sourceMappingURL=chronicle-permissions-dialog-677b8f830739.js.map
