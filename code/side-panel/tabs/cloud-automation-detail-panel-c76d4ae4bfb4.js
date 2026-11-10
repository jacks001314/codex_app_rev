import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $R as n,
  $ut as r,
  A3t as i,
  A4 as a,
  A6 as o,
  A7 as s,
  AMt as c,
  Amn as l,
  Ayt as u,
  B6t as d,
  BDt as f,
  CMt as p,
  Cpn as m,
  DR as h,
  Dqt as g,
  Dyt as _,
  Dz as v,
  E9 as y,
  F3t as b,
  F_ as x,
  Fj as S,
  Fyt as C,
  H4 as w,
  Hu as T,
  Hut as E,
  Hwt as D,
  I3 as O,
  I7 as k,
  Ij as A,
  Iyt as ee,
  JG as j,
  JK as M,
  Jit as N,
  KG as P,
  KYt as F,
  Kit as I,
  L7 as L,
  MAt as te,
  MR as R,
  Myt as ne,
  N3t as re,
  NAt as z,
  NR as ie,
  Nvt as ae,
  Nyt as B,
  O3t as V,
  Opn as oe,
  Oyt as se,
  Oz as ce,
  PR as H,
  P_ as U,
  Pyt as le,
  QR as ue,
  R3 as W,
  Rpn as G,
  Rqt as de,
  Rvt as fe,
  SR as pe,
  Spn as K,
  T2t as me,
  T8 as he,
  TR as ge,
  UL as _e,
  VDt as ve,
  VL as ye,
  Vu as be,
  Wct as xe,
  XR as Se,
  Xdt as Ce,
  Xu as we,
  ZG as Te,
  ZR as Ee,
  ZTt as De,
  _P as Oe,
  a3t as ke,
  alt as Ae,
  ayt as je,
  bR as Me,
  bnn as Ne,
  c6t as Pe,
  dGt as Fe,
  dlt as Ie,
  e4t as Le,
  e9t as Re,
  fGt as ze,
  fk as Be,
  fs as Ve,
  gMt as He,
  gRt as Ue,
  hMt as We,
  hmn as Ge,
  ipt as Ke,
  j3 as qe,
  j6 as Je,
  jR as Ye,
  jXt as Xe,
  jyt as Ze,
  kMt as Qe,
  kR as $e,
  kXt as et,
  kmn as tt,
  kyt as nt,
  lEt as rt,
  llt as it,
  nz as at,
  o3t as ot,
  pk as st,
  ps as ct,
  qK as lt,
  qu as ut,
  qvt as dt,
  qwt as ft,
  rTt as pt,
  rpt as mt,
  snn as ht,
  t0t as gt,
  tz as _t,
  uEt as vt,
  vR as yt,
  vit as bt,
  vnn as xt,
  w7 as St,
  w8 as Ct,
  wMt as wt,
  wR as Tt,
  xR as Et,
  xRt as Dt,
  xpn as Ot,
  xz as kt,
  y9 as At,
  yP as jt,
  yit as Mt,
  zpn as Nt,
} from "./app-initial-f094ef01c64d.js";
import {
  $s as Pt,
  $w as Ft,
  Ap as It,
  BC as Lt,
  Bw as Rt,
  Cx as zt,
  DS as Bt,
  Dx as Vt,
  Gs as Ht,
  Gw as Ut,
  Gy as Wt,
  Hs as Gt,
  Ix as Kt,
  JC as qt,
  Js as Jt,
  Jx as Yt,
  Ks as Xt,
  Kw as Zt,
  Kx as Qt,
  Lx as $t,
  OS as en,
  Qs as tn,
  Tw as nn,
  Us as rn,
  Vx as an,
  Ws as on,
  Wy as sn,
  Xs as cn,
  Xx as ln,
  YC as un,
  Ys as dn,
  Zs as fn,
  cx as pn,
  dx as mn,
  eT as hn,
  ec as gn,
  fx as _n,
  jp as vn,
  lx as yn,
  np as bn,
  qs as xn,
  qx as Sn,
  rp as Cn,
  tc as wn,
  ww as Tn,
  zC as En,
  zw as Dn,
} from "./app-primary-4c40d73a1074.js";
import { n as On, t as kn } from "./model-and-reasoning-effort-translations-550629a13cba.js";
import { i as An, n as jn, r as Mn, t as Nn } from "./automation-frequency-section-49a6d0cc31da.js";
import { n as Pn, t as Fn } from "./play-outline-51cb9fd3340e.js";
import { n as In, t as Ln } from "./automation-delete-confirmation-dialog-c1501bf84bbd.js";
import { n as Rn, t as zn } from "./automation-status-messages-8323ed1c597b.js";
function Bn(e) {
  let t = (0, qn.c)(14),
    { id: n, value: r, autoFocus: i, readOnly: a, onChange: o } = e,
    s = a !== void 0 && a,
    c = oe(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `settings.automations.nameLabel`,
        defaultMessage: `Name`,
        description: `Label for automation name input`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u;
  t[2] === c
    ? (u = t[3])
    : ((u = c.formatMessage({
        id: `settings.automations.namePlaceholder`,
        defaultMessage: `Scheduled task title`,
        description: `Placeholder for scheduled task name input`,
      })),
      (t[2] = c),
      (t[3] = u));
  let d;
  t[4] === o
    ? (d = t[5])
    : ((d =
        o == null
          ? void 0
          : (e) => {
              o(e.target.value);
            }),
      (t[4] = o),
      (t[5] = d));
  let f;
  return (
    t[6] !== i ||
    t[7] !== n ||
    t[8] !== s ||
    t[9] !== l ||
    t[10] !== u ||
    t[11] !== d ||
    t[12] !== r
      ? ((f = (0, q.jsx)(`input`, {
          id: n,
          "data-testid": `automation-title-input`,
          autoFocus: i,
          className: Yn,
          "aria-label": l,
          readOnly: s,
          value: r,
          placeholder: u,
          onChange: d,
        })),
        (t[6] = i),
        (t[7] = n),
        (t[8] = s),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d),
        (t[12] = r),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function Vn(e) {
  let t = (0, qn.c)(11),
    { isReadOnlySandbox: n, isDangerFullAccess: r } = e,
    i = oe(),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = (0, q.jsx)(Un, { isReadOnlySandbox: n, isDangerFullAccess: r })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o = i.formatMessage({
        id: `settings.automations.banner.tooltipLabel`,
        defaultMessage: `Scheduled task sandbox details`,
        description: `Aria label for the scheduled task sandbox details tooltip trigger`,
      })),
      (t[3] = i),
      (t[4] = o));
  let s;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, q.jsx)(p, { className: `icon-sm` })), (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === o
    ? (c = t[7])
    : ((c = (0, q.jsx)(Qe, {
        className: `shrink-0`,
        "aria-label": o,
        color: `ghostTertiary`,
        size: `inline`,
        children: s,
      })),
      (t[6] = o),
      (t[7] = c));
  let l;
  return (
    t[8] !== a || t[9] !== c
      ? ((l = (0, q.jsx)(I, {
          cloneCustomTrigger: !0,
          tooltipContent: a,
          side: `top`,
          align: `center`,
          interactive: !0,
          tooltipClassName: `max-w-md text-start`,
          children: c,
        })),
        (t[8] = a),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function Hn(e) {
  let t = (0, qn.c)(86),
    {
      draft: n,
      setDraft: r,
      roots: i,
      onSubmit: a,
      formId: o,
      disablePromptAutoFocus: s,
      promptSize: c,
    } = e,
    l = s !== void 0 && s,
    d = c === void 0 ? `default` : c,
    f = oe(),
    p = (0, Jn.useRef)(null),
    m = (0, Jn.useRef)(null),
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () =>
        Vt(``, {
          defaultTextKind: `prompt`,
          enableFileMentions: !0,
          enableSelectedTextLinks: !0,
          enableSkillMentions: !0,
          enterBehavior: `newline`,
          restoreMarkdownLinksAsTextLinks: !0,
        })),
      (t[0] = h))
    : (h = t[0]);
  let [g] = (0, Jn.useState)(h),
    _;
  t[1] === n ? (_ = t[2]) : ((_ = at(n)), (t[1] = n), (t[2] = _));
  let v = _,
    b;
  t[3] !== v || t[4] !== i ? ((b = v ? [] : i), (t[3] = v), (t[4] = i), (t[5] = b)) : (b = t[5]);
  let x = b,
    S = $t(g),
    C = mn(g),
    w;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { enabled: !0, hostId: Le }), (t[6] = w))
    : (w = t[6]);
  let T = y(w),
    E;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { enabled: !0, hostId: Le }), (t[7] = E))
    : (E = t[7]);
  let D = u(E),
    O;
  t[8] !== D || t[9] !== x
    ? ((O = { enabled: D, hostId: Le, roots: x }), (t[8] = D), (t[9] = x), (t[10] = O))
    : (O = t[10]);
  let { data: k } = fe(O),
    A;
  t[11] === D ? (A = t[12]) : ((A = { enabled: D, hostId: Le }), (t[11] = D), (t[12] = A));
  let j = ee(A),
    M;
  t[13] === j
    ? (M = t[14])
    : ((M = { computerUseAvailability: j, hostId: Le }), (t[13] = j), (t[14] = M));
  let N = se(M),
    P;
  t[15] === D ? (P = t[16]) : ((P = { enabled: D, hostId: Le }), (t[15] = D), (t[16] = P));
  let F = le(P),
    I;
  t[17] === D ? (I = t[18]) : ((I = { enabled: D, hostId: Le }), (t[17] = D), (t[18] = I));
  let te = ne(I),
    R,
    re;
  t[19] !== j || t[20] !== F || t[21] !== te || t[22] !== k || t[23] !== N
    ? ((R =
        k == null
          ? void 0
          : dt({
              plugins: k,
              isComputerUseAvailable: j.available,
              isExternalBrowserUseAvailable: F.available,
              isInAppBrowserUseAvailable: te.available,
              isMessagesAvailable: N.available,
            })),
      (re = R == null ? void 0 : qt(R)),
      (t[19] = j),
      (t[20] = F),
      (t[21] = te),
      (t[22] = k),
      (t[23] = N),
      (t[24] = R),
      (t[25] = re))
    : ((R = t[24]), (re = t[25]));
  let z = re != null,
    ie;
  t[26] === z ? (ie = t[27]) : ((ie = { enabled: z }), (t[26] = z), (t[27] = ie));
  let { nativeApps: ae } = Lt(ie),
    B;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = { enabled: !0 }), (t[28] = B))
    : (B = t[28]);
  let { skills: V } = L(x, void 0, B),
    ce,
    H;
  (t[29] !== T || t[30] !== R || t[31] !== V || t[32] !== ae || t[33] !== g
    ? ((ce = () => {
        g.syncMentionMetadata({ skills: V, apps: T, plugins: R ?? [], nativeApps: ae });
      }),
      (H = [T, R, V, ae, g]),
      (t[29] = T),
      (t[30] = R),
      (t[31] = V),
      (t[32] = ae),
      (t[33] = g),
      (t[34] = ce),
      (t[35] = H))
    : ((ce = t[34]), (H = t[35])),
    (0, Jn.useEffect)(ce, H));
  let U, ue;
  (t[36] !== n.prompt || t[37] !== g
    ? ((U = () => {
        g.getText() !== n.prompt && g.setPromptText(n.prompt);
      }),
      (ue = [n.prompt, g]),
      (t[36] = n.prompt),
      (t[37] = g),
      (t[38] = U),
      (t[39] = ue))
    : ((U = t[38]), (ue = t[39])),
    (0, Jn.useEffect)(U, ue));
  let W, G;
  (t[40] !== g || t[41] !== r
    ? ((W = () =>
        an(g.view, () => {
          let e = g.getText();
          r((t) => (t.prompt === e ? t : { ...t, prompt: e }));
        })),
      (G = [g, r]),
      (t[40] = g),
      (t[41] = r),
      (t[42] = W),
      (t[43] = G))
    : ((W = t[42]), (G = t[43])),
    (0, Jn.useEffect)(W, G));
  let de;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = () => {
        p.current?.requestSubmit();
      }),
      (t[44] = de))
    : (de = t[44]);
  let pe = de,
    K = d === `compact` ? Zn : Xn,
    me = S.ui?.active ?? !1,
    he = S.ui?.query ?? ``,
    ge = S.ui?.source ?? null,
    _e;
  t[45] !== n.model ||
  t[46] !== S.addMention ||
  t[47] !== S.closeAutocomplete ||
  t[48] !== S.setSelectedMention ||
  t[49] !== x ||
  t[50] !== he ||
  t[51] !== ge
    ? ((_e = (0, q.jsx)(Yt, {
        hostId: Le,
        onAddContext: S.addMention,
        onRequestClose: S.closeAutocomplete,
        onUpdateSelectedMention: S.setSelectedMention,
        query: he,
        fileSearchRootPaths: x,
        selectedModel: n.model,
        skillRoots: x,
        source: ge,
      })),
      (t[45] = n.model),
      (t[46] = S.addMention),
      (t[47] = S.closeAutocomplete),
      (t[48] = S.setSelectedMention),
      (t[49] = x),
      (t[50] = he),
      (t[51] = ge),
      (t[52] = _e))
    : (_e = t[52]);
  let ve;
  t[53] !== S.ui || t[54] !== g || t[55] !== me || t[56] !== _e
    ? ((ve = (0, q.jsx)(Bt, {
        anchorRef: m,
        composerController: g,
        isActive: me,
        mentionUiState: S.ui,
        placement: `bottom`,
        portalRoot: `body`,
        zIndexClassName: `z-[10000]`,
        children: _e,
      })),
      (t[53] = S.ui),
      (t[54] = g),
      (t[55] = me),
      (t[56] = _e),
      (t[57] = ve))
    : (ve = t[57]);
  let ye;
  t[58] !== n.model || t[59] !== x || t[60] !== g || t[61] !== C
    ? ((ye = (0, q.jsx)(_n, {
        autocomplete: C,
        roots: x,
        selectedModel: n.model,
        composerController: g,
        portalRoot: `body`,
        zIndexClassName: `z-[10000]`,
      })),
      (t[58] = n.model),
      (t[59] = x),
      (t[60] = g),
      (t[61] = C),
      (t[62] = ye))
    : (ye = t[62]);
  let be;
  t[63] === f
    ? (be = t[64])
    : ((be = f.formatMessage({
        id: `settings.automations.promptLabel`,
        defaultMessage: `Prompt`,
        description: `Label for automation prompt input`,
      })),
      (t[63] = f),
      (t[64] = be));
  let xe = d === `compact` ? `4rem` : `16rem`,
    Se;
  t[65] === f
    ? (Se = t[66])
    : ((Se = f.formatMessage({
        id: `settings.automations.promptPlaceholderChatGPT`,
        defaultMessage: `Describe what ChatGPT should do`,
        description: `Placeholder text for the scheduled task prompt input`,
      })),
      (t[65] = f),
      (t[66] = Se));
  let Ce;
  t[67] !== S.handleMentionEvent || t[68] !== C.handleMentionEvent
    ? ((Ce = (e) => {
        Qt(e, { onAtMention: S.handleMentionEvent, onSkillMention: C.handleMentionEvent });
      }),
      (t[67] = S.handleMentionEvent),
      (t[68] = C.handleMentionEvent),
      (t[69] = Ce))
    : (Ce = t[69]);
  let we;
  t[70] !== l ||
  t[71] !== g ||
  t[72] !== K ||
  t[73] !== be ||
  t[74] !== xe ||
  t[75] !== Se ||
  t[76] !== Ce
    ? ((we = (0, q.jsx)(zt, {
        className: K,
        composerController: g,
        ariaLabel: be,
        minHeight: xe,
        disableAutoFocus: l,
        placeholder: Se,
        onSuggestionHandler: Ce,
        onSubmit: pe,
      })),
      (t[70] = l),
      (t[71] = g),
      (t[72] = K),
      (t[73] = be),
      (t[74] = xe),
      (t[75] = Se),
      (t[76] = Ce),
      (t[77] = we))
    : (we = t[77]);
  let Te;
  t[78] !== ve || t[79] !== ye || t[80] !== we
    ? ((Te = (0, q.jsx)(`div`, {
        className: `flex flex-col gap-4`,
        children: (0, q.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, q.jsxs)(`div`, { ref: m, className: `relative`, children: [ve, ye, we] }),
        }),
      })),
      (t[78] = ve),
      (t[79] = ye),
      (t[80] = we),
      (t[81] = Te))
    : (Te = t[81]);
  let Ee;
  return (
    t[82] !== o || t[83] !== a || t[84] !== Te
      ? ((Ee = (0, q.jsx)(`form`, {
          id: o,
          ref: p,
          className: `flex flex-col gap-0`,
          onSubmit: a,
          children: Te,
        })),
        (t[82] = o),
        (t[83] = a),
        (t[84] = Te),
        (t[85] = Ee))
      : (Ee = t[85]),
    Ee
  );
}
function Un(e) {
  let t = (0, qn.c)(3),
    { isReadOnlySandbox: n, isDangerFullAccess: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(`div`, {
            className: `flex flex-col gap-1`,
            children: (0, q.jsx)(`p`, {
              className: `text-danger`,
              children: (0, q.jsx)(m, {
                id: `settings.automations.banner.dangerChatGPT`,
                defaultMessage: `Scheduled tasks run with your default sandbox settings, which are currently set to Full Access. Running scheduled tasks in the background with Full Access carries elevated risk, as ChatGPT may modify files, run commands, and access network without asking. Consider updating sandbox settings to workspace write, and using <rulesDocsLink>rules</rulesDocsLink> to selectively define which commands the agent can run with full access.`,
                description: `Warning shown in the scheduled task editor when dangerous sandbox mode is enabled`,
                values: { rulesDocsLink: Gn },
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, q.jsx)(`div`, {
          className: `flex flex-col gap-1`,
          children: (0, q.jsx)(`p`, {
            children: n
              ? (0, q.jsx)(m, {
                  id: `settings.automations.banner.defaultHowTo.readOnly`,
                  defaultMessage: `Scheduled tasks run with your default sandbox settings, which are set to read-only. Tool calls will fail if they require modifying files, accessing network, or working with apps on your computer. Consider updating sandbox settings to workspace write.`,
                  description: `Follow-up guidance shown in the scheduled task editor when default sandbox mode is read-only`,
                })
              : (0, q.jsx)(m, {
                  id: `settings.automations.banner.defaultHowTo.configuredSandbox`,
                  defaultMessage: `Scheduled tasks use your configured sandbox settings. Projectless tasks can write files in their generated workspace, and their network access follows your configured setting. They run without approval prompts unless your organization requires them. You can selectively allowlist commands to run outside the sandbox using <rulesDocsLink>rules</rulesDocsLink>.`,
                  description: `Follow-up guidance shown in the scheduled task editor when default sandbox mode is workspace write`,
                  values: { rulesDocsLink: Wn },
                }),
          }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function Wn(e) {
  return (0, q.jsx)(`a`, {
    className: `text-info underline-offset-2 hover:underline`,
    href: St,
    rel: `noreferrer`,
    target: `_blank`,
    children: Array.isArray(e) ? e.join(``) : e,
  });
}
function Gn(e) {
  return (0, q.jsx)(`a`, {
    className: `text-danger underline underline-offset-2 hover:underline`,
    href: St,
    rel: `noreferrer`,
    target: `_blank`,
    children: Array.isArray(e) ? e.join(``) : e,
  });
}
function Kn(e) {
  let t = (0, qn.c)(40),
    { field: n, selectedModel: r, reasoningEffort: i, align: a, className: o, onSelect: s } = e,
    c = a === void 0 ? `start` : a,
    l = oe(),
    { data: u } = jt(),
    d = u?.models,
    f,
    p,
    h,
    g,
    _,
    v,
    y,
    b;
  if (
    t[0] !== c ||
    t[1] !== o ||
    t[2] !== n ||
    t[3] !== l ||
    t[4] !== d ||
    t[5] !== s ||
    t[6] !== i ||
    t[7] !== r
  ) {
    let e = d?.find((e) => e.model === r) ?? null,
      a = xt({ model: e, reasoningEffort: i }),
      u = z(a) ? a : null,
      x = fn(d, r ?? ``),
      S = tn(u, x),
      C = d == null || (n === `reasoning` && r == null),
      w;
    t[16] !== n || t[17] !== l
      ? ((w =
          n === `model`
            ? l.formatMessage({
                id: `settings.automations.model.ariaLabel`,
                defaultMessage: `Model`,
                description: `Aria label for the scheduled task model dropdown`,
              })
            : l.formatMessage({
                id: `settings.automations.reasoning.ariaLabel`,
                defaultMessage: `Reasoning`,
                description: `Aria label for the scheduled task reasoning level dropdown`,
              })),
        (t[16] = n),
        (t[17] = l),
        (t[18] = w))
      : (w = t[18]);
    let T = w;
    ((f = P), (g = c), (_ = `menuNarrow`), (v = C));
    let E;
    t[19] === o ? (E = t[20]) : ((E = G(`min-w-0`, o)), (t[19] = o), (t[20] = E));
    let D =
        n === `model`
          ? r != null && r.trim().length > 0
            ? (0, q.jsx)(gn, {
                displayName: e?.displayName ?? r,
                labelClassName: `text-default`,
                model: r,
              })
            : d == null
              ? (0, q.jsx)(`span`, {
                  className: `truncate text-default`,
                  children: (0, q.jsx)(m, {
                    id: `settings.automations.model.loading`,
                    defaultMessage: `Loading model`,
                    description: `Fallback label while automation model options are loading`,
                  }),
                })
              : (0, q.jsx)(`span`, {
                  className: `truncate text-default`,
                  children: (0, q.jsx)(m, {
                    id: `settings.automations.model.select`,
                    defaultMessage: `Select model`,
                    description: `Placeholder for the scheduled task model dropdown`,
                  }),
                })
          : (0, q.jsx)(`span`, {
              className: `text-default`,
              children: (0, q.jsx)(kn, { effort: S }),
            }),
      O;
    (t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((O = (0, q.jsx)(bt, { className: `icon-2xs shrink-0 text-tertiary` })), (t[21] = O))
      : (O = t[21]),
      t[22] !== T || t[23] !== C || t[24] !== E || t[25] !== D
        ? ((y = (0, q.jsxs)(Qe, {
            "aria-label": T,
            className: E,
            color: `ghost`,
            disabled: C,
            size: `composerSm`,
            children: [D, O],
          })),
          (t[22] = T),
          (t[23] = C),
          (t[24] = E),
          (t[25] = D),
          (t[26] = y))
        : (y = t[26]),
      t[27] === n
        ? (b = t[28])
        : ((b = (0, q.jsx)(j.Title, {
            children:
              n === `model`
                ? (0, q.jsx)(m, {
                    id: `composer.intelligenceDropdown.model.title`,
                    defaultMessage: `Model`,
                    description: `Header label above model options in the intelligence dropdown`,
                  })
                : (0, q.jsx)(m, {
                    id: `composer.intelligenceDropdown.title`,
                    defaultMessage: `Reasoning`,
                    description: `Header label for the intelligence dropdown`,
                  }),
          })),
          (t[27] = n),
          (t[28] = b)),
      (p = `vertical-scroll-fade-mask flex max-h-[250px] flex-col overflow-y-auto`),
      (h =
        n === `model`
          ? d?.map((e) =>
              (0, q.jsx)(
                j.Item,
                {
                  RightIcon: e.model === r ? lt : void 0,
                  onSelect: () => {
                    let t = xt({ model: e, reasoningEffort: i });
                    s(e.model, z(t) ? t : null);
                  },
                  children: (0, q.jsx)(gn, { displayName: e.displayName, model: e.model }),
                },
                e.model,
              ),
            )
          : x.map((e) =>
              (0, q.jsx)(
                j.Item,
                {
                  RightIcon: e.reasoningEffort === S ? lt : void 0,
                  onSelect: () => {
                    r != null && s(r, e.reasoningEffort);
                  },
                  children: (0, q.jsx)(kn, { effort: e.reasoningEffort }),
                },
                e.reasoningEffort,
              ),
            )),
      (t[0] = c),
      (t[1] = o),
      (t[2] = n),
      (t[3] = l),
      (t[4] = d),
      (t[5] = s),
      (t[6] = i),
      (t[7] = r),
      (t[8] = f),
      (t[9] = p),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b));
  } else
    ((f = t[8]),
      (p = t[9]),
      (h = t[10]),
      (g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (b = t[15]));
  let x;
  t[29] !== p || t[30] !== h
    ? ((x = (0, q.jsx)(`div`, { className: p, children: h })),
      (t[29] = p),
      (t[30] = h),
      (t[31] = x))
    : (x = t[31]);
  let S;
  return (
    t[32] !== f ||
    t[33] !== g ||
    t[34] !== _ ||
    t[35] !== v ||
    t[36] !== y ||
    t[37] !== b ||
    t[38] !== x
      ? ((S = (0, q.jsxs)(f, {
          align: g,
          contentWidth: _,
          disabled: v,
          triggerButton: y,
          children: [b, x],
        })),
        (t[32] = f),
        (t[33] = g),
        (t[34] = _),
        (t[35] = v),
        (t[36] = y),
        (t[37] = b),
        (t[38] = x),
        (t[39] = S))
      : (S = t[39]),
    S
  );
}
var qn,
  Jn,
  q,
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    ((qn = tt()),
      Nt(),
      d(),
      (Jn = t(l(), 1)),
      K(),
      _t(),
      en(),
      pn(),
      ln(),
      un(),
      Sn(),
      On(),
      wn(),
      Pt(),
      Kt(),
      En(),
      s(),
      te(),
      c(),
      Te(),
      N(),
      C(),
      B(),
      Ze(),
      nt(),
      _(),
      M(),
      Mt(),
      wt(),
      ae(),
      je(),
      yn(),
      At(),
      Oe(),
      F(),
      k(),
      (q = Ge()),
      (Yn = `text-default placeholder:text-tertiary m-0 w-full min-w-0 appearance-none bg-transparent p-0 text-lg leading-tight outline-none`),
      (Xn = G(
        `text-default placeholder:text-tertiary w-full text-base outline-none`,
        `max-h-[32rem]`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:px-0`,
        `[&_.ProseMirror]:py-0`,
      )),
      (Zn = G(
        `text-default placeholder:text-tertiary w-full text-base outline-none`,
        `max-h-64`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:p-4`,
      )));
  });
function $n(e) {
  let t = (0, er.c)(25),
    {
      className: n,
      align: r,
      ariaLabel: i,
      children: a,
      defaultOpen: o,
      selectedLabel: s,
      size: c,
    } = e,
    l = r === void 0 ? `start` : r,
    u = c === void 0 ? `composerSm` : c,
    d = oe(),
    f = (0, tr.useId)(),
    [p, h] = (0, tr.useState)(o ?? !1),
    g;
  t[0] === n ? (g = t[1]) : ((g = G(`min-w-0`, n)), (t[0] = n), (t[1] = g));
  let _;
  t[2] !== i || t[3] !== d
    ? ((_ =
        i ??
        d.formatMessage({
          id: `threadPicker.search`,
          defaultMessage: `Search chats`,
          description: `Search input placeholder in the shared chat picker`,
        })),
      (t[2] = i),
      (t[3] = d),
      (t[4] = _))
    : (_ = t[4]);
  let v;
  t[5] === s
    ? (v = t[6])
    : ((v =
        s ??
        (0, nr.jsx)(m, {
          id: `threadPicker.placeholder`,
          defaultMessage: `Choose a chat`,
          description: `Placeholder for an unselected shared chat picker`,
        })),
      (t[5] = s),
      (t[6] = v));
  let y;
  t[7] !== f || t[8] !== v
    ? ((y = (0, nr.jsx)(`span`, {
        id: f,
        className: `truncate text-start text-default`,
        children: v,
      })),
      (t[7] = f),
      (t[8] = v),
      (t[9] = y))
    : (y = t[9]);
  let b;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, nr.jsx)(Ie, { className: `text-tertiary` })), (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== f || t[12] !== u || t[13] !== g || t[14] !== _ || t[15] !== y
    ? ((x = (0, nr.jsxs)(Qe, {
        className: g,
        "aria-label": _,
        "aria-describedby": f,
        color: `ghost`,
        radius: `full`,
        size: u,
        children: [y, b],
      })),
      (t[11] = f),
      (t[12] = u),
      (t[13] = g),
      (t[14] = _),
      (t[15] = y),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== a || t[18] !== p
    ? ((S = p ? a(() => h(!1)) : null), (t[17] = a), (t[18] = p), (t[19] = S))
    : (S = t[19]);
  let C;
  return (
    t[20] !== l || t[21] !== p || t[22] !== x || t[23] !== S
      ? ((C = (0, nr.jsx)(Jt, {
          align: l,
          contentMaxHeight: `tall`,
          contentWidth: `workspace`,
          open: p,
          onOpenChange: h,
          triggerButton: x,
          children: S,
        })),
        (t[20] = l),
        (t[21] = p),
        (t[22] = x),
        (t[23] = S),
        (t[24] = C))
      : (C = t[24]),
    C
  );
}
var er,
  tr,
  nr,
  rr = e(() => {
    ((er = tt()), Nt(), (tr = t(l(), 1)), K(), c(), cn(), Ce(), (nr = Ge()));
  }),
  ir,
  ar = e(() => {
    (K(),
      (ir = Ot({
        newChatEachRun: {
          id: `settings.automations.destination.newChatEachRun`,
          defaultMessage: `New chat each run`,
          description: `Option to start a separate new chat every time a scheduled task runs`,
        },
        newDedicatedChat: {
          id: `settings.automations.destination.newDedicatedChat`,
          defaultMessage: `New chat for this task`,
          description: `Option to create one dedicated chat when saving a new scheduled task, then reuse that chat for every run`,
        },
      })));
  });
function or(e, t) {
  let n = (0, lr.c)(6),
    { data: r } = b(Je),
    { data: i } = b(ve),
    a = b(ur),
    o;
  return (
    n[0] !== t || n[1] !== r?.items || n[2] !== a || n[3] !== i?.threadIds || n[4] !== e
      ? ((o = sr({
          automations: r?.items ?? [],
          conversations: a,
          pinnedThreadIds: i?.threadIds ?? [],
          selectedThreadId: e,
          automationId: t,
        })),
        (n[0] = t),
        (n[1] = r?.items),
        (n[2] = a),
        (n[3] = i?.threadIds),
        (n[4] = e),
        (n[5] = o))
      : (o = n[5]),
    o
  );
}
function sr({
  automations: e,
  conversations: t,
  pinnedThreadIds: n,
  selectedThreadId: r,
  automationId: i,
}) {
  let a = new Set(
      e.flatMap((e) =>
        !Ne(e) || e.id === i || e.status !== `ACTIVE` || e.targetThreadId.trim().length === 0
          ? []
          : [e.targetThreadId],
      ),
    ),
    o = new Map(t.filter((e) => e.hostId == null || ze(e.hostId)).map((e) => [String(e.id), e])),
    s = new Set(n),
    c = [...n, ...Array.from(o.keys()).filter((e) => !s.has(e))].flatMap((e) => {
      let t = o.get(e);
      return t == null || cr(t) || t.threadSource === `pull_request_fix_automation`
        ? []
        : [
            {
              threadId: t.id,
              title: t.title ?? e,
              createdAt: t.createdAt ?? null,
              projectId: t.projectId ?? null,
              projectLabel: t.projectLabel ?? null,
              isPinned: s.has(e),
              isUnavailable: a.has(e),
            },
          ];
    }),
    l = r == null ? void 0 : o.get(r),
    u = cr(l) || l?.threadSource === `pull_request_fix_automation`;
  return (
    r != null &&
      r.length > 0 &&
      !c.some((e) => e.threadId === r) &&
      c.unshift({
        threadId: ht(l?.id ?? r),
        title: l?.title ?? r,
        createdAt: l?.createdAt ?? null,
        projectId: l?.projectId ?? null,
        projectLabel: l?.projectLabel ?? null,
        isPinned: s.has(r),
        isUnavailable: u || a.has(r),
      }),
    c
  );
}
function cr(e) {
  return e != null && (e.parentThreadId != null || me(e.source)?.parentThreadId != null);
}
var lr,
  ur,
  dr = e(() => {
    ((lr = tt()),
      gt(),
      V(),
      d(),
      pt(),
      Fe(),
      f(),
      ot(),
      F(),
      bn(),
      qe(),
      a(),
      o(),
      (ur = Pe(
        ke,
        ({ get: e }) =>
          e(W).flatMap((t) => {
            let n = e(O, t);
            if (n?.kind !== `local` || n.conversationId == null) return [];
            let r = n.conversationId,
              i = e(w, t);
            return [
              {
                id: r,
                title: e(Cn, { hostId: n.hostId ?? `local`, threadId: r }),
                createdAt: e(D, r) ?? n.summary?.createdAt ?? null,
                hostId: n.hostId ?? void 0,
                parentThreadId:
                  e(De, r) ??
                  (n.summary?.parentThreadId == null ? null : ht(n.summary.parentThreadId)) ??
                  me(n.source)?.parentThreadId ??
                  null,
                source: n.source ?? void 0,
                threadSource: e(rt, r) ?? n.summary?.threadSource ?? null,
                threadStartKind: e(vt, r) ?? n.summary?.threadStartKind,
                projectId: i?.projectId ?? null,
                projectLabel: i?.label ?? null,
              },
            ];
          }),
        {
          isEqual: (e, t) =>
            e.length === t.length &&
            e.every((e, n) => {
              let r = t[n];
              return (
                r != null &&
                e.id === r.id &&
                e.title === r.title &&
                e.createdAt === r.createdAt &&
                e.hostId === r.hostId &&
                cr(e) === cr(r) &&
                e.threadSource === r.threadSource &&
                e.threadStartKind === r.threadStartKind &&
                e.projectId === r.projectId &&
                e.projectLabel === r.projectLabel
              );
            }),
        },
      )));
  });
function fr(e) {
  let t = (0, hr.c)(25),
    { allowNewThread: i, draft: a, setDraft: o, onClose: s } = e,
    c = oe(),
    l = or(a.targetThreadId, a.id),
    u = [
      {
        id: `new-chat-each-run`,
        label: c.formatMessage(ir.newChatEachRun),
        isSelected: a.kind === `cron`,
        onSelect: () => {
          o(mr);
        },
      },
      ...(i && a.id == null
        ? [
            {
              id: `new-dedicated-chat`,
              label: c.formatMessage(ir.newDedicatedChat),
              isSelected: a.kind === `heartbeat` && a.targetThreadId == null,
              onSelect: () => {
                o(pr);
              },
            },
          ]
        : []),
    ],
    [d, f] = (0, gr.useState)(``),
    p = d.trim(),
    h;
  t[0] === c
    ? (h = t[1])
    : ((h = c.formatMessage({
        id: `threadPicker.search`,
        defaultMessage: `Search chats`,
        description: `Search input placeholder in the shared chat picker`,
      })),
      (t[0] = c),
      (t[1] = h));
  let g = h,
    _ = c.formatMessage({
      id: `threadPicker.otherChats`,
      defaultMessage: `Other chats`,
      description: `Heading for chats without a project in the shared chat picker`,
    }),
    v = c.formatMessage({
      id: `threadPicker.pinnedChats`,
      defaultMessage: `Pinned chats`,
      description: `Heading for pinned chats in the shared chat picker`,
    }),
    y = l.filter((e) => p.length === 0 || x(e.title, p) > 0 || x(e.projectLabel ?? ``, p) > 0),
    b = new Map();
  for (let e of y) {
    let t = `projectless`;
    e.isPinned ? (t = `pinned`) : e.projectId != null && (t = `project:${e.projectId}`);
    let n = e.isPinned ? v : e.projectLabel?.trim() || _,
      r = b.get(t);
    r == null ? b.set(t, { label: n, options: [e] }) : r.options.push(e);
  }
  let S = u.filter((e) => p.length === 0 || x(e.label, p) > 0),
    C;
  t[2] !== d || t[3] !== g || t[4] !== f
    ? ((C = (0, J.jsx)(dn.Input, { "aria-label": g, placeholder: g, value: d, onValueChange: f })),
      (t[2] = d),
      (t[3] = g),
      (t[4] = f),
      (t[5] = C))
    : (C = t[5]);
  let w;
  t[6] !== S || t[7] !== s
    ? ((w = S.map((e) =>
        (0, J.jsx)(
          dn.Item,
          {
            icon: (0, J.jsx)(r, {}),
            rightIcon: e.isSelected ? (0, J.jsx)(it, {}) : void 0,
            value: e.id,
            onSelect: () => {
              (e.onSelect(), s());
            },
            children: e.label,
          },
          e.id,
        ),
      )),
      (t[6] = S),
      (t[7] = s),
      (t[8] = w))
    : (w = t[8]);
  let T;
  t[9] !== a || t[10] !== c || t[11] !== s || t[12] !== o
    ? ((T = (e) => {
        let [t, r] = e;
        return (0, J.jsxs)(
          `div`,
          {
            "aria-label": r.label,
            role: `group`,
            children: [
              (0, J.jsx)(`div`, {
                className: `px-2 pt-2 pb-1 text-xs text-codex-description`,
                children: r.label,
              }),
              r.options.map((e) =>
                (0, J.jsx)(
                  dn.Item,
                  {
                    disabled: e.isUnavailable,
                    icon: e.isPinned ? (0, J.jsx)(E, {}) : (0, J.jsx)(Ae, {}),
                    rightIcon:
                      a.kind === `heartbeat` && e.threadId === a.targetThreadId
                        ? (0, J.jsx)(it, {})
                        : void 0,
                    value: e.threadId,
                    onSelect: () => {
                      (o((t) =>
                        n({ draft: Ee(t, `thread`), threadId: e.threadId, title: e.title }),
                      ),
                        s());
                    },
                    children: (0, J.jsxs)(`div`, {
                      className: `flex min-w-0 items-center gap-1`,
                      children: [
                        (0, J.jsx)(`span`, { className: `truncate`, children: e.title }),
                        e.isPinned && e.projectLabel
                          ? (0, J.jsx)(`span`, {
                              className: `truncate text-sm text-codex-description`,
                              children: e.projectLabel,
                            })
                          : null,
                        e.createdAt == null
                          ? null
                          : (0, J.jsx)(`span`, {
                              className: `truncate text-sm text-codex-description`,
                              children: c.formatDate(new Date(e.createdAt), {
                                dateStyle: `medium`,
                              }),
                            }),
                      ],
                    }),
                  },
                  e.threadId,
                ),
              ),
            ],
          },
          t,
        );
      }),
      (t[9] = a),
      (t[10] = c),
      (t[11] = s),
      (t[12] = o),
      (t[13] = T))
    : (T = t[13]);
  let D = Array.from(b, T),
    O;
  t[14] !== S.length || t[15] !== y
    ? ((O =
        S.length === 0 && y.length === 0
          ? (0, J.jsx)(`div`, {
              className: `px-3 py-2 text-sm text-codex-description`,
              children: (0, J.jsx)(m, {
                id: `threadPicker.noChatsFound`,
                defaultMessage: `No chats found`,
                description: `Empty state in the shared chat picker`,
              }),
            })
          : null),
      (t[14] = S.length),
      (t[15] = y),
      (t[16] = O))
    : (O = t[16]);
  let k;
  t[17] !== w || t[18] !== D || t[19] !== O
    ? ((k = (0, J.jsxs)(dn.List, {
        className: `flex flex-col [--edge-fade-distance:1.5rem]`,
        children: [w, D, O],
      })),
      (t[17] = w),
      (t[18] = D),
      (t[19] = O),
      (t[20] = k))
    : (k = t[20]);
  let A;
  return (
    t[21] !== g || t[22] !== C || t[23] !== k
      ? ((A = (0, J.jsxs)(dn.Root, { label: g, children: [C, k] })),
        (t[21] = g),
        (t[22] = C),
        (t[23] = k),
        (t[24] = A))
      : (A = t[24]),
    A
  );
}
function pr(e) {
  return { ...Ee(e, `thread`), targetThreadId: null };
}
function mr(e) {
  return Ee(e, `new-task`);
}
var hr,
  gr,
  J,
  _r = e(() => {
    ((hr = tt()), (gr = t(l(), 1)), K(), U(), cn(), Ce(), ar(), _t(), dr(), (J = Ge()));
  }),
  vr,
  yr = e(() => {
    (K(),
      (vr = Ot({
        cloud: {
          id: `inbox.automations.executionLocation.cloud`,
          defaultMessage: `Cloud`,
          description: `Scheduled task execution option that continues running in the cloud when this computer is off`,
        },
        local: {
          id: `inbox.automations.executionLocation.local`,
          defaultMessage: `This device`,
          description: `Scheduled task execution option that runs on the current device`,
        },
        label: {
          id: `inbox.automations.executionLocation.label`,
          defaultMessage: `Runs on`,
          description: `Label for choosing whether a scheduled task runs on this device or in the cloud`,
        },
      })));
  });
function br(e) {
  let t = (0, Cr.c)(25),
    { selectedLocation: n, onSelect: r } = e,
    i = oe(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(m, { ...vr.cloud })), (t[0] = a))
    : (a = t[0]);
  let o = a,
    s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(m, { ...vr.local })), (t[1] = s))
    : (s = t[1]);
  let c = s,
    l;
  t[2] !== i || t[3] !== n
    ? ((l = i.formatMessage(
        {
          id: `inbox.automations.executionLocation.ariaLabel`,
          defaultMessage: `Runs on: {location, select, cloud {Cloud} other {This device}}`,
          description: `Accessible label for a scheduled task's selected cloud or on-device execution location`,
        },
        { location: n },
      )),
      (t[2] = i),
      (t[3] = n),
      (t[4] = l))
    : (l = t[4]);
  let u = n === `cloud` ? o : c,
    d;
  t[5] === u
    ? (d = t[6])
    : ((d = (0, Y.jsx)(`span`, { className: `truncate text-start text-default`, children: u })),
      (t[5] = u),
      (t[6] = d));
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(bt, { className: `icon-2xs shrink-0 text-tertiary` })), (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== l || t[9] !== d
    ? ((p = (0, Y.jsxs)(Qe, {
        "aria-label": l,
        className: `min-w-0`,
        size: `composerSm`,
        color: `ghost`,
        children: [d, f],
      })),
      (t[8] = l),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let h = n === `local` ? lt : void 0,
    g;
  t[11] === r ? (g = t[12]) : ((g = () => r(`local`)), (t[11] = r), (t[12] = g));
  let _;
  t[13] !== h || t[14] !== g
    ? ((_ = (0, Y.jsx)(Y.Fragment, {
        children: (0, Y.jsx)(j.Item, { LeftIcon: It, RightIcon: h, onSelect: g, children: c }),
      })),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _))
    : (_ = t[15]);
  let v = n === `cloud` ? lt : void 0,
    y;
  t[16] === r ? (y = t[17]) : ((y = () => r(`cloud`)), (t[16] = r), (t[17] = y));
  let b;
  t[18] !== v || t[19] !== y
    ? ((b = (0, Y.jsx)(j.Item, { LeftIcon: Ft, RightIcon: v, onSelect: y, children: o })),
      (t[18] = v),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let x;
  return (
    t[21] !== _ || t[22] !== b || t[23] !== p
      ? ((x = (0, Y.jsxs)(P, {
          align: `end`,
          contentWidth: `menu`,
          triggerButton: p,
          children: [_, b],
        })),
        (t[21] = _),
        (t[22] = b),
        (t[23] = p),
        (t[24] = x))
      : (x = t[24]),
    x
  );
}
function xr(e) {
  let t = (0, Cr.c)(16),
    { allowNewThread: n, draft: r, align: i, className: a, setDraft: o } = e,
    s = n !== void 0 && n,
    c = i === void 0 ? `start` : i,
    l = oe(),
    u;
  if (r.kind === `cron`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(m, { ...ir.newChatEachRun })), (t[0] = e))
      : (e = t[0]),
      (u = e));
  } else if (r.targetThreadId != null) {
    let e;
    (t[1] === r.targetThreadId
      ? (e = t[2])
      : ((e = (0, Y.jsx)(Sr, { threadId: r.targetThreadId })),
        (t[1] = r.targetThreadId),
        (t[2] = e)),
      (u = e));
  } else if (s && r.id == null) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(m, { ...ir.newDedicatedChat })), (t[3] = e))
      : (e = t[3]),
      (u = e));
  }
  let d;
  t[4] === l
    ? (d = t[5])
    : ((d = l.formatMessage({
        id: `settings.automations.destination.ariaLabel`,
        defaultMessage: `Scheduled task destination`,
        description: `Accessible label for choosing whether a scheduled task creates a new chat each run or continues in a specific chat`,
      })),
      (t[4] = l),
      (t[5] = d));
  let f;
  t[6] !== s || t[7] !== r || t[8] !== o
    ? ((f = (e) => (0, Y.jsx)(fr, { allowNewThread: s, draft: r, setDraft: o, onClose: e })),
      (t[6] = s),
      (t[7] = r),
      (t[8] = o),
      (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== c || t[11] !== a || t[12] !== u || t[13] !== d || t[14] !== f
      ? ((p = (0, Y.jsx)($n, {
          className: a,
          align: c,
          ariaLabel: d,
          selectedLabel: u,
          size: `toolbar`,
          children: f,
        })),
        (t[10] = c),
        (t[11] = a),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function Sr(e) {
  let { threadId: t } = e;
  return re(Cn, { hostId: `local`, threadId: ht(t) }) ?? t;
}
var Cr,
  Y,
  wr = e(() => {
    ((Cr = tt()),
      V(),
      d(),
      K(),
      rr(),
      c(),
      Te(),
      M(),
      Mt(),
      hn(),
      vn(),
      F(),
      bn(),
      ar(),
      _r(),
      yr(),
      (Y = Ge()));
  });
function Tr(e) {
  let t = (0, Dr.c)(34),
    { kind: n, value: r, align: i, className: a, onChange: o } = e,
    s = i === void 0 ? `start` : i,
    c = oe(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Or.jsx)(m, {
        id: `settings.automations.notifications.failedRunsOnly`,
        defaultMessage: `Failed runs only`,
        description: `Automation notification policy that suppresses completed runs`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u = l,
    d;
  t[1] === c
    ? (d = t[2])
    : ((d = c.formatMessage({
        id: `settings.automations.notifications.ariaLabel`,
        defaultMessage: `Notifications`,
        description: `Aria label for automation notification policy`,
      })),
      (t[1] = c),
      (t[2] = d));
  let f;
  t[3] === a ? (f = t[4]) : ((f = G(`min-w-0`, a)), (t[3] = a), (t[4] = f));
  let p;
  t[5] !== n || t[6] !== r
    ? ((p = (0, Or.jsx)(`span`, {
        className: `truncate text-start text-default`,
        children: r === `failed_runs_only` ? u : (0, Or.jsx)(Er, { kind: n }),
      })),
      (t[5] = n),
      (t[6] = r),
      (t[7] = p))
    : (p = t[7]);
  let h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Or.jsx)(bt, { className: `icon-2xs shrink-0 text-tertiary` })), (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== d || t[10] !== f || t[11] !== p
    ? ((g = (0, Or.jsxs)(Qe, {
        "aria-label": d,
        size: `composerSm`,
        color: `ghost`,
        className: f,
        children: [p, h],
      })),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Or.jsx)(j.Title, {
        children: (0, Or.jsx)(m, {
          id: `settings.automations.notifications.title`,
          defaultMessage: `Notifications`,
          description: `Header for automation notification policy options`,
        }),
      })),
      (t[13] = _))
    : (_ = t[13]);
  let v = r == null ? lt : void 0,
    y;
  t[14] === o ? (y = t[15]) : ((y = () => o(void 0)), (t[14] = o), (t[15] = y));
  let b;
  t[16] === n ? (b = t[17]) : ((b = (0, Or.jsx)(Er, { kind: n })), (t[16] = n), (t[17] = b));
  let x;
  t[18] !== y || t[19] !== b || t[20] !== v
    ? ((x = (0, Or.jsx)(j.Item, { RightIcon: v, onSelect: y, children: b })),
      (t[18] = y),
      (t[19] = b),
      (t[20] = v),
      (t[21] = x))
    : (x = t[21]);
  let S = r === `failed_runs_only` ? lt : void 0,
    C;
  t[22] === o ? (C = t[23]) : ((C = () => o(`failed_runs_only`)), (t[22] = o), (t[23] = C));
  let w;
  t[24] !== S || t[25] !== C
    ? ((w = (0, Or.jsx)(j.Item, { RightIcon: S, onSelect: C, children: u })),
      (t[24] = S),
      (t[25] = C),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] !== x || t[28] !== w
    ? ((T = (0, Or.jsxs)(j.Section, { children: [x, w] })), (t[27] = x), (t[28] = w), (t[29] = T))
    : (T = t[29]);
  let E;
  return (
    t[30] !== s || t[31] !== T || t[32] !== g
      ? ((E = (0, Or.jsxs)(P, { align: s, triggerButton: g, children: [_, T] })),
        (t[30] = s),
        (t[31] = T),
        (t[32] = g),
        (t[33] = E))
      : (E = t[33]),
    E
  );
}
function Er(e) {
  let t = (0, Dr.c)(2),
    { kind: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === `cron`
            ? (0, Or.jsx)(m, {
                id: `settings.automations.notifications.allRuns`,
                defaultMessage: `All runs`,
                description: `Default cron automation notification behavior`,
              })
            : (0, Or.jsx)(m, {
                id: `settings.automations.notifications.importantUpdates`,
                defaultMessage: `Important updates`,
                description: `Default heartbeat notification behavior`,
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Dr,
  Or,
  kr = e(() => {
    ((Dr = tt()), Nt(), K(), c(), Te(), M(), Mt(), (Or = Ge()));
  });
function Ar(e) {
  let t = (0, Pr.c)(91),
    {
      afterFrequency: n,
      allowCloudTeamSelection: r,
      allowNewThread: i,
      detailsTrailing: a,
      disablePromptAutoFocus: o,
      draft: s,
      executionLocation: c,
      formId: l,
      setDraft: u,
      resolvedProjects: d,
      onSubmit: f,
    } = e,
    p = r === void 0 || r,
    h = i !== void 0 && i,
    g = o !== void 0 && o,
    _ = oe(),
    v = c?.selectedLocation === `cloud`,
    y = b(ft),
    x = !v,
    S;
  t[0] === x ? (S = t[1]) : ((S = { enabled: x }), (t[0] = x), (t[1] = S));
  let { data: C } = re(de, y, S),
    w = C?.config.sandbox_mode === `read-only`,
    T = C?.config.sandbox_mode === `danger-full-access`,
    E,
    D;
  if (t[2] !== s.projectId || t[3] !== d) {
    E = d.filter(Mr);
    let e;
    t[6] === s.projectId
      ? (e = t[7])
      : ((e = (e) => e.projectId === s.projectId), (t[6] = s.projectId), (t[7] = e));
    let n = E.find(e);
    ((D = s.projectId == null ? [Re(`~`)] : n == null ? [] : Ct(n).map(Re)),
      (t[2] = s.projectId),
      (t[3] = d),
      (t[4] = E),
      (t[5] = D));
  } else ((E = t[4]), (D = t[5]));
  let O = D,
    k;
  t[8] === _
    ? (k = t[9])
    : ((k = _.formatMessage({
        id: `settings.automations.projectDropdown.placeholder`,
        defaultMessage: `Select project`,
        description: `Placeholder text for automation project dropdown`,
      })),
      (t[8] = _),
      (t[9] = k));
  let A = k,
    ee;
  t[10] === _
    ? (ee = t[11])
    : ((ee = _.formatMessage({
        id: `settings.automations.projectDropdown.localOnlyTooltip`,
        defaultMessage: `Scheduled tasks can only be created for local projects`,
        description: `Tooltip explaining why scheduled task project options only include local projects when remote connections are connected`,
      })),
      (t[10] = _),
      (t[11] = ee));
  let j = ee,
    M = s.kind === `heartbeat`,
    N;
  t[12] !== E || t[13] !== u
    ? ((N = (e) => {
        let t = e === `~` ? null : e,
          n = E.find((e) => e.projectId === t),
          r = t == null ? [Re(`~`)] : n == null ? [] : Ct(n).map(Re);
        u((e) => ue(e, t, r));
      }),
      (t[12] = E),
      (t[13] = u),
      (t[14] = N))
    : (N = t[14]);
  let P = N,
    F;
  t[15] === u
    ? (F = t[16])
    : ((F = (e) => {
        u((t) => ({ ...t, rawRrule: null, scheduleConfig: e, scheduleDirty: !0 }));
      }),
      (t[15] = u),
      (t[16] = F));
  let I = F,
    L;
  t[17] !== s.scheduleConfig || t[18] !== c || t[19] !== I || t[20] !== M || t[21] !== u
    ? ((L = (e) => {
        (e === `cloud` && M
          ? u(jr)
          : e === `local` &&
            s.scheduleConfig.mode === `monthly` &&
            I(kt(s.scheduleConfig, `custom`)),
          c?.onSelect?.(e));
      }),
      (t[17] = s.scheduleConfig),
      (t[18] = c),
      (t[19] = I),
      (t[20] = M),
      (t[21] = u),
      (t[22] = L))
    : (L = t[22]);
  let te = L,
    R;
  t[23] === u
    ? (R = t[24])
    : ((R = (e, t) => {
        u((n) => ({ ...n, model: e, reasoningEffort: t }));
      }),
      (t[23] = u),
      (t[24] = R));
  let ne = R,
    z;
  t[25] !== g || t[26] !== s || t[27] !== l || t[28] !== f || t[29] !== O || t[30] !== u
    ? ((z = (0, X.jsx)(be, {
        children: (0, X.jsx)(`div`, {
          className: `min-h-0 min-w-0 flex-1`,
          children: (0, X.jsx)(Hn, {
            disablePromptAutoFocus: g,
            draft: s,
            formId: l,
            promptSize: `compact`,
            roots: O,
            setDraft: u,
            onSubmit: f,
          }),
        }),
      })),
      (t[25] = g),
      (t[26] = s),
      (t[27] = l),
      (t[28] = f),
      (t[29] = O),
      (t[30] = u),
      (t[31] = z))
    : (z = t[31]);
  let ie;
  t[32] !== v || t[33] !== T || t[34] !== M || t[35] !== w
    ? ((ie = M || v ? null : (0, X.jsx)(Vn, { isDangerFullAccess: T, isReadOnlySandbox: w })),
      (t[32] = v),
      (t[33] = T),
      (t[34] = M),
      (t[35] = w),
      (t[36] = ie))
    : (ie = t[36]);
  let ae;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, X.jsx)(m, {
        id: `inbox.automations.details`,
        defaultMessage: `Details`,
        description: `Section label above the automation details rail`,
      })),
      (t[37] = ae))
    : (ae = t[37]);
  let B;
  t[38] !== c || t[39] !== te
    ? ((B =
        c?.onSelect == null
          ? null
          : (0, X.jsx)(ut, {
              control: (0, X.jsx)(br, { selectedLocation: c.selectedLocation, onSelect: te }),
              label: (0, X.jsx)(m, { ...vr.label }),
              variant: `nested`,
            })),
      (t[38] = c),
      (t[39] = te),
      (t[40] = B))
    : (B = t[40]);
  let V;
  t[41] !== p || t[42] !== s.id || t[43] !== v
    ? ((V = null), (t[41] = p), (t[42] = s.id), (t[43] = v), (t[44] = V))
    : (V = t[44]);
  let se;
  t[45] !== h || t[46] !== s || t[47] !== v || t[48] !== u
    ? ((se = v ? null : (0, X.jsx)(Nr, { allowNewThread: h, draft: s, setDraft: u })),
      (t[45] = h),
      (t[46] = s),
      (t[47] = v),
      (t[48] = u),
      (t[49] = se))
    : (se = t[49]);
  let ce;
  t[50] !== j ||
  t[51] !== s.model ||
  t[52] !== s.projectId ||
  t[53] !== s.reasoningEffort ||
  t[54] !== ne ||
  t[55] !== P ||
  t[56] !== _ ||
  t[57] !== v ||
  t[58] !== M ||
  t[59] !== E ||
  t[60] !== A
    ? ((ce =
        !v && !M
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(ut, {
                  control: (0, X.jsx)(sn, {
                    align: `end`,
                    className: `!text-base`,
                    localOnlyTooltip: j,
                    placeholder: A,
                    projects: E,
                    projectlessActionLabel: _.formatMessage({
                      id: `composer.localCwdDropdown.clearProject`,
                      defaultMessage: `Don't work in a project`,
                      description: `Menu item that clears the selected project and starts projectless tasks`,
                    }),
                    projectlessLabel: _.formatMessage({
                      id: `settings.automations.projectDropdown.none`,
                      defaultMessage: `None`,
                      description: `Label for selecting no project in the automation project dropdown`,
                    }),
                    selectedProjectId: s.projectId ?? `~`,
                    showIcon: !1,
                    onChange: P,
                  }),
                  label: _.formatMessage({
                    id: `inbox.automations.folder.label`,
                    defaultMessage: `Project`,
                    description: `Label for the automation folder row in the details rail`,
                  }),
                  variant: `nested`,
                }),
                (0, X.jsx)(ut, {
                  control: (0, X.jsx)(Kn, {
                    align: `end`,
                    className: `!text-base`,
                    field: `model`,
                    reasoningEffort: s.reasoningEffort,
                    selectedModel: s.model,
                    onSelect: ne,
                  }),
                  label: _.formatMessage({
                    id: `inbox.automations.model.label`,
                    defaultMessage: `Model`,
                    description: `Label for the automation model row in the details rail`,
                  }),
                  variant: `nested`,
                }),
                (0, X.jsx)(ut, {
                  control: (0, X.jsx)(Kn, {
                    align: `end`,
                    className: `!text-base`,
                    field: `reasoning`,
                    reasoningEffort: s.reasoningEffort,
                    selectedModel: s.model,
                    onSelect: ne,
                  }),
                  label: _.formatMessage({
                    id: `inbox.automations.reasoning.label`,
                    defaultMessage: `Reasoning`,
                    description: `Label for the automation reasoning level row in the details rail`,
                  }),
                  variant: `nested`,
                }),
              ],
            })
          : null),
      (t[50] = j),
      (t[51] = s.model),
      (t[52] = s.projectId),
      (t[53] = s.reasoningEffort),
      (t[54] = ne),
      (t[55] = P),
      (t[56] = _),
      (t[57] = v),
      (t[58] = M),
      (t[59] = E),
      (t[60] = A),
      (t[61] = ce))
    : (ce = t[61]);
  let H;
  t[62] !== a || t[63] !== B || t[64] !== V || t[65] !== se || t[66] !== ce
    ? ((H = (0, X.jsxs)(be, { children: [B, V, se, ce, a] })),
      (t[62] = a),
      (t[63] = B),
      (t[64] = V),
      (t[65] = se),
      (t[66] = ce),
      (t[67] = H))
    : (H = t[67]);
  let U;
  t[68] === v
    ? (U = t[69])
    : ((U = v
        ? (0, X.jsx)(`p`, {
            className: `mt-2 px-1 text-sm text-codex-description select-none`,
            children: (0, X.jsx)(m, {
              id: `inbox.automations.executionLocation.cloudDescription`,
              defaultMessage: `Runs in the cloud even when this device is offline. Chat, project, model, and reasoning settings aren't available for cloud tasks`,
              description: `Explains that cloud scheduled tasks run independently of the device and do not support local chat, project, model, or reasoning settings`,
            }),
          })
        : null),
      (t[68] = v),
      (t[69] = U));
  let le;
  t[70] !== ie || t[71] !== H || t[72] !== U
    ? ((le = (0, X.jsxs)(Mn, { actions: ie, title: ae, children: [H, U] })),
      (t[70] = ie),
      (t[71] = H),
      (t[72] = U),
      (t[73] = le))
    : (le = t[73]);
  let W;
  t[74] !== s.kind || t[75] !== s.notificationPolicy || t[76] !== _ || t[77] !== v || t[78] !== u
    ? ((W = v
        ? void 0
        : (0, X.jsx)(ut, {
            control: (0, X.jsx)(Tr, {
              align: `end`,
              kind: s.kind,
              value: s.notificationPolicy,
              onChange: (e) => {
                u((t) => ({ ...t, notificationPolicy: e }));
              },
            }),
            label: _.formatMessage({
              id: `inbox.automations.notifications.label`,
              defaultMessage: `Notifications`,
              description: `Label for the automation notification policy control`,
            }),
            variant: `nested`,
          })),
      (t[74] = s.kind),
      (t[75] = s.notificationPolicy),
      (t[76] = _),
      (t[77] = v),
      (t[78] = u),
      (t[79] = W))
    : (W = t[79]);
  let G = M && !v ? `heartbeat` : `default`,
    fe = v ? `cloud` : `local`,
    pe;
  t[80] !== s.scheduleConfig || t[81] !== I || t[82] !== W || t[83] !== G || t[84] !== fe
    ? ((pe = (0, X.jsx)(Nn, {
        afterScheduleRows: W,
        intervalStyle: G,
        scheduleConfig: s.scheduleConfig,
        scheduleSource: fe,
        onUpdateScheduleDraft: I,
      })),
      (t[80] = s.scheduleConfig),
      (t[81] = I),
      (t[82] = W),
      (t[83] = G),
      (t[84] = fe),
      (t[85] = pe))
    : (pe = t[85]);
  let K;
  return (
    t[86] !== n || t[87] !== z || t[88] !== le || t[89] !== pe
      ? ((K = (0, X.jsxs)(`div`, {
          className: `flex min-h-0 flex-col gap-6`,
          children: [z, le, pe, n],
        })),
        (t[86] = n),
        (t[87] = z),
        (t[88] = le),
        (t[89] = pe),
        (t[90] = K))
      : (K = t[90]),
    K
  );
}
function jr(e) {
  return Ee(e, `new-task`);
}
function Mr(e) {
  return e.projectKind === `local`;
}
function Nr(e) {
  let t = (0, Pr.c)(7),
    { allowNewThread: n, draft: r, setDraft: i } = e,
    a;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let { missingRequirements: e } = Se(r, `local`, { allowNewThread: n }),
      o = (0, X.jsx)(xr, { align: `end`, allowNewThread: n, draft: r, setDraft: i }),
      s;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, X.jsx)(m, {
          id: `inbox.automations.destination.label`,
          defaultMessage: `Runs in`,
          description: `Label for choosing whether a scheduled task runs in a new or existing task`,
        })),
        (t[4] = s))
      : (s = t[4]);
    let c;
    (t[5] === o
      ? (c = t[6])
      : ((c = (0, X.jsx)(ut, { control: o, label: s, labelSizing: `content`, variant: `nested` })),
        (t[5] = o),
        (t[6] = c)),
      (a = (0, X.jsxs)(`div`, {
        children: [
          c,
          e.includes(`thread`)
            ? (0, X.jsx)(`p`, {
                className: `px-4 py-2 text-sm text-danger select-none`,
                role: `alert`,
                children: (0, X.jsx)(m, {
                  id: `inbox.automations.targetThread.required`,
                  defaultMessage: `Select a chat for this task`,
                  description: `Validation message beneath the destination picker when a scheduled task needs an existing chat before it can be saved`,
                }),
              })
            : null,
        ],
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  } else a = t[3];
  return a;
}
var Pr,
  X,
  Fr = e(() => {
    ((Pr = tt()),
      V(),
      d(),
      K(),
      pt(),
      Wt(),
      he(),
      g(),
      Qn(),
      we(),
      T(),
      wr(),
      yr(),
      jn(),
      kr(),
      v(),
      _t(),
      An(),
      (X = Ge()));
  });
function Ir(e) {
  let t = (0, Lr.c)(42),
    {
      deleteAction: n,
      editAction: r,
      isCompleted: i,
      isPaused: a,
      openConversationAction: o,
      pauseAction: s,
      pauseResumeInMenu: c,
      resetAction: l,
      resumeAction: u,
      retrySaveAction: d,
      runNowAction: f,
      trailingMenuItems: p,
    } = e,
    h = i !== void 0 && i,
    g = c !== void 0 && c,
    _ = oe(),
    v;
  t[0] === d
    ? (v = t[1])
    : ((v =
        d == null
          ? null
          : (0, Z.jsx)(Qe, {
              color: `primary`,
              disabled: d.disabled,
              loading: d.disabled,
              size: `toolbar`,
              onClick: d.onSelect,
              children: (0, Z.jsx)(m, {
                id: `settings.automations.saveRetry`,
                defaultMessage: `Retry save`,
                description: `Button label for retrying a failed automation save`,
              }),
            })),
      (t[0] = d),
      (t[1] = v));
  let y;
  t[2] === _
    ? (y = t[3])
    : ((y = _.formatMessage({
        id: `settings.automations.actionsAria`,
        defaultMessage: `Scheduled task actions`,
        description: `Accessible label for the scheduled task actions menu`,
      })),
      (t[2] = _),
      (t[3] = y));
  let b;
  t[4] === y
    ? (b = t[5])
    : ((b = (0, Z.jsx)(Ut, { label: y, size: `toolbar` })), (t[4] = y), (t[5] = b));
  let x;
  t[6] === r
    ? (x = t[7])
    : ((x =
        r == null
          ? null
          : (0, Z.jsx)(j.Item, {
              disabled: r.disabled,
              LeftIcon: S,
              leftIconClassName: `icon-xs`,
              onSelect: r.onSelect,
              children: (0, Z.jsx)(m, {
                id: `settings.automations.edit`,
                defaultMessage: `Edit`,
                description: `Menu item for editing a scheduled task`,
              }),
            })),
      (t[6] = r),
      (t[7] = x));
  let C;
  t[8] === f
    ? (C = t[9])
    : ((C =
        f == null
          ? null
          : (0, Z.jsx)(j.Item, {
              disabled: f.disabled,
              LeftIcon: Fn,
              leftIconClassName: `icon-xs`,
              onSelect: f.onSelect,
              children: (0, Z.jsx)(m, {
                id: `settings.automations.runNow`,
                defaultMessage: `Run now`,
                description: `Button label for running an automation immediately`,
              }),
            })),
      (t[8] = f),
      (t[9] = C));
  let w;
  t[10] === o
    ? (w = t[11])
    : ((w =
        o == null
          ? null
          : (0, Z.jsx)(j.Item, {
              disabled: o.disabled,
              LeftIcon: Ve,
              leftIconClassName: `icon-xs`,
              onSelect: o.onSelect,
              children: (0, Z.jsx)(m, {
                id: `inbox.automations.cloud.openChat`,
                defaultMessage: `Open chat`,
                description: `Menu item for opening a cloud scheduled task chat`,
              }),
            })),
      (t[10] = o),
      (t[11] = w));
  let T;
  t[12] === l
    ? (T = t[13])
    : ((T =
        l == null
          ? null
          : (0, Z.jsx)(j.Item, {
              disabled: l.disabled,
              LeftIcon: Tn,
              leftIconClassName: `icon-xs`,
              tooltipText: l.isUsingDefaults
                ? (0, Z.jsx)(m, {
                    id: `settings.automations.resetToPluginDefaults.alreadyDefault`,
                    defaultMessage: `Already using plugin defaults`,
                    description: `Tooltip shown when a scheduled task already matches its plugin template defaults`,
                  })
                : void 0,
              onSelect: l.onSelect,
              children: (0, Z.jsx)(m, {
                id: `settings.automations.resetToPluginDefaults`,
                defaultMessage: `Reset to plugin defaults`,
                description: `Menu item for resetting a scheduled task to its plugin template defaults`,
              }),
            })),
      (t[12] = l),
      (t[13] = T));
  let E;
  t[14] !== h || t[15] !== a || t[16] !== s || t[17] !== g || t[18] !== u
    ? ((E =
        !h &&
        g &&
        (a
          ? (0, Z.jsx)(j.Item, {
              disabled: u.disabled,
              LeftIcon: on,
              leftIconClassName: `icon-xs`,
              onSelect: u.onSelect,
              children: (0, Z.jsx)(m, {
                id: `inbox.automations.resumeTooltip`,
                defaultMessage: `Resume`,
                description: `Tooltip label for resuming an automation`,
              }),
            })
          : (0, Z.jsx)(j.Item, {
              disabled: s.disabled,
              LeftIcon: Xt,
              leftIconClassName: `icon-xs`,
              onSelect: s.onSelect,
              children: (0, Z.jsx)(m, {
                id: `inbox.automations.pauseTooltip`,
                defaultMessage: `Pause`,
                description: `Tooltip label for pausing an automation`,
              }),
            }))),
      (t[14] = h),
      (t[15] = a),
      (t[16] = s),
      (t[17] = g),
      (t[18] = u),
      (t[19] = E))
    : (E = t[19]);
  let D;
  t[20] === n
    ? (D = t[21])
    : ((D =
        n == null
          ? null
          : (0, Z.jsx)(j.Item, {
              className: `!text-danger`,
              disabled: n.disabled,
              LeftIcon: Dn,
              leftIconClassName: `icon-xs`,
              onSelect: n.onSelect,
              children: (0, Z.jsx)(m, {
                id: `settings.automations.delete`,
                defaultMessage: `Delete`,
                description: `Menu item for deleting a scheduled task`,
              }),
            })),
      (t[20] = n),
      (t[21] = D));
  let O;
  t[22] !== E ||
  t[23] !== D ||
  t[24] !== b ||
  t[25] !== x ||
  t[26] !== C ||
  t[27] !== w ||
  t[28] !== T ||
  t[29] !== p
    ? ((O = (0, Z.jsxs)(P, {
        align: `end`,
        contentWidth: `xs`,
        triggerButton: b,
        children: [x, C, w, T, E, D, p],
      })),
      (t[22] = E),
      (t[23] = D),
      (t[24] = b),
      (t[25] = x),
      (t[26] = C),
      (t[27] = w),
      (t[28] = T),
      (t[29] = p),
      (t[30] = O))
    : (O = t[30]);
  let k;
  t[31] !== _ || t[32] !== h || t[33] !== a || t[34] !== s || t[35] !== g || t[36] !== u
    ? ((k =
        !h &&
        !g &&
        (a
          ? (0, Z.jsx)(Qe, {
              "aria-label": _.formatMessage({
                id: `settings.automations.resumeAria`,
                defaultMessage: `Resume scheduled task`,
                description: `Aria label for resuming a scheduled task`,
              }),
              color: `ghost`,
              disabled: u.disabled,
              size: `toolbar`,
              uniform: !0,
              onClick: u.onSelect,
              children: (0, Z.jsx)(on, { className: `icon-sm` }),
            })
          : (0, Z.jsx)(Qe, {
              "aria-label": _.formatMessage({
                id: `settings.automations.pauseAria`,
                defaultMessage: `Pause scheduled task`,
                description: `Aria label for pausing a scheduled task`,
              }),
              color: `ghost`,
              disabled: s.disabled,
              size: `toolbar`,
              uniform: !0,
              onClick: s.onSelect,
              children: (0, Z.jsx)(Xt, { className: `icon-sm` }),
            }))),
      (t[31] = _),
      (t[32] = h),
      (t[33] = a),
      (t[34] = s),
      (t[35] = g),
      (t[36] = u),
      (t[37] = k))
    : (k = t[37]);
  let A;
  return (
    t[38] !== O || t[39] !== k || t[40] !== v
      ? ((A = (0, Z.jsxs)(`div`, { className: `flex items-center gap-2`, children: [v, O, k] })),
        (t[38] = O),
        (t[39] = k),
        (t[40] = v),
        (t[41] = A))
      : (A = t[41]),
    A
  );
}
var Lr,
  Z,
  Rr = e(() => {
    ((Lr = tt()), K(), c(), Te(), Zt(), nn(), ct(), xn(), A(), Ht(), Pn(), Rt(), (Z = Ge()));
  });
function zr(e) {
  let t = (0, Hr.c)(14),
    { allowNewThread: n, draft: r, executionLocation: i } = e,
    a = n !== void 0 && n,
    o = i === void 0 ? `local` : i,
    s,
    c,
    l,
    u;
  if (t[0] !== a || t[1] !== r || t[2] !== o) {
    u = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let { missingRequirements: e } = Se(r, o, { allowNewThread: a });
      if (e.length === 0) {
        u = null;
        break bb0;
      }
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((l = (0, Ur.jsx)(m, {
            id: `settings.automations.saveTooltip.requirements`,
            defaultMessage: `Complete these requirements:`,
            description: `Heading for requirements that must be completed before submitting an automation`,
          })),
          (t[7] = l))
        : (l = t[7]),
        (s = `list-disc ps-4`),
        (c = e.map(Br)));
    }
    ((t[0] = a), (t[1] = r), (t[2] = o), (t[3] = s), (t[4] = c), (t[5] = l), (t[6] = u));
  } else ((s = t[3]), (c = t[4]), (l = t[5]), (u = t[6]));
  if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
  let d;
  t[8] !== s || t[9] !== c
    ? ((d = (0, Ur.jsx)(`ul`, { className: s, children: c })), (t[8] = s), (t[9] = c), (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== l || t[12] !== d
      ? ((f = (0, Ur.jsxs)(`div`, { children: [l, d] })), (t[11] = l), (t[12] = d), (t[13] = f))
      : (f = t[13]),
    f
  );
}
function Br(e) {
  return (0, Ur.jsx)(`li`, { children: (0, Ur.jsx)(Vr, { requirement: e }) }, e);
}
function Vr(e) {
  let t = (0, Hr.c)(6),
    { requirement: n } = e;
  switch (n) {
    case `name`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ur.jsx)(m, {
              id: `settings.automations.saveTooltip.requirement.name`,
              defaultMessage: `Add a title`,
              description: `Tooltip requirement shown when the automation title is missing`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `prompt`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ur.jsx)(m, {
              id: `settings.automations.saveTooltip.requirement.prompt`,
              defaultMessage: `Add a prompt`,
              description: `Tooltip requirement shown when the automation prompt is missing`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `thread`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ur.jsx)(m, {
              id: `settings.automations.saveTooltip.requirement.thread`,
              defaultMessage: `Select a chat`,
              description: `Tooltip requirement shown when the heartbeat automation task selection is missing`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `executionEnvironment`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ur.jsx)(m, {
              id: `settings.automations.saveTooltip.requirement.executionEnvironment`,
              defaultMessage: `Choose where to run it`,
              description: `Tooltip requirement shown when the automation execution environment is missing`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `model`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ur.jsx)(m, {
              id: `settings.automations.saveTooltip.requirement.model`,
              defaultMessage: `Choose a model`,
              description: `Tooltip requirement shown when the automation model is missing`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `schedule`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ur.jsx)(m, {
              id: `settings.automations.saveTooltip.requirement.schedule`,
              defaultMessage: `Fix the schedule`,
              description: `Tooltip requirement shown when the automation schedule is invalid`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
var Hr,
  Ur,
  Wr = e(() => {
    ((Hr = tt()), K(), _t(), (Ur = Ge()));
  });
function Gr(e) {
  let t = (0, Kr.c)(18),
    {
      actions: n,
      autoFocusName: r,
      children: i,
      closeAction: a,
      footer: o,
      name: s,
      onKeyDown: c,
      onNameChange: l,
      statusLabel: u,
    } = e,
    d = r !== void 0 && r,
    f = o === void 0 ? null : o,
    p;
  t[0] === u
    ? (p = t[1])
    : ((p =
        u == null
          ? null
          : (0, qr.jsx)(`div`, {
              className: `text-sm font-medium text-info electron:ms-1 extension:-ms-1`,
              children: u,
            })),
      (t[0] = u),
      (t[1] = p));
  let m;
  t[2] === a
    ? (m = t[3])
    : ((m = a == null ? { showCloseButton: !1 } : { closeLabel: a.label, onClose: a.onClose }),
      (t[2] = a),
      (t[3] = m));
  let h;
  t[4] !== d || t[5] !== s || t[6] !== l
    ? ((h =
        l == null
          ? (0, qr.jsx)(Bn, { id: `automation-detail-panel-title`, readOnly: !0, value: s })
          : (0, qr.jsx)(Bn, {
              id: `automation-detail-panel-title`,
              autoFocus: d,
              value: s,
              onChange: l,
            })),
      (t[4] = d),
      (t[5] = s),
      (t[6] = l),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== i || t[9] !== h
    ? ((g = (0, qr.jsx)(`div`, {
        className: `h-full overflow-y-auto px-panel pb-panel`,
        children: (0, qr.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [h, i] }),
      })),
      (t[8] = i),
      (t[9] = h),
      (t[10] = g))
    : (g = t[10]);
  let _;
  return (
    t[11] !== n || t[12] !== f || t[13] !== c || t[14] !== p || t[15] !== m || t[16] !== g
      ? ((_ = (0, qr.jsx)(ye, {
          actions: n,
          footer: f,
          leading: p,
          onKeyDown: c,
          ...m,
          children: g,
        })),
        (t[11] = n),
        (t[12] = f),
        (t[13] = c),
        (t[14] = p),
        (t[15] = m),
        (t[16] = g),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
var Kr,
  qr,
  Jr = e(() => {
    ((Kr = tt()), _e(), Qn(), (qr = Ge()));
  });
function Yr(e) {
  let t = (0, Xr.c)(52),
    { item: n, onDeleted: r, onEdit: a, onOpenConversation: o, trailingMenuItems: s } = e,
    c = i(ke),
    l = oe(),
    u = b(pe),
    d = b(Et),
    f = b(yt),
    [p, m] = (0, Zr.useState)(!1),
    { automation: g, teamId: _ } = n,
    v;
  t[0] === g ? (v = t[1]) : ((v = $e(g)), (t[0] = g), (t[1] = v));
  let { canManage: y, canDelete: x } = v,
    S;
  t[2] === g ? (S = t[3]) : ((S = R(g)), (t[2] = g), (t[3] = S));
  let C = S,
    w = C === `completed`,
    T = u.isPending || d.isPending || f.isPending;
  if (!y || (w && !x)) return null;
  let E;
  t[4] !== g || t[5] !== l || t[6] !== c || t[7] !== u
    ? ((E = (e) => {
        u.mutate(
          { automationId: g.id, isEnabled: e },
          {
            onError: (e) => {
              c.get(Xe).danger(
                l.formatMessage({
                  id: `inbox.automations.cloud.updateError`,
                  defaultMessage: `Could not update cloud scheduled task`,
                  description: `Toast title when updating a cloud scheduled task fails`,
                }),
                { description: e instanceof Error ? e.message : void 0 },
              );
            },
          },
        );
      }),
      (t[4] = g),
      (t[5] = l),
      (t[6] = c),
      (t[7] = u),
      (t[8] = E))
    : (E = t[8]);
  let D = E,
    O;
  t[9] !== x || t[10] !== T
    ? ((O = x ? { disabled: T, onSelect: () => m(!0) } : void 0),
      (t[9] = x),
      (t[10] = T),
      (t[11] = O))
    : (O = t[11]);
  let k;
  t[12] !== w || t[13] !== T || t[14] !== a
    ? ((k = !w && a != null ? { disabled: T, onSelect: a } : void 0),
      (t[12] = w),
      (t[13] = T),
      (t[14] = a),
      (t[15] = k))
    : (k = t[15]);
  let A = C === `paused`,
    ee;
  t[16] !== x || t[17] !== T || t[18] !== o || t[19] !== _
    ? ((ee = _ == null && x && o != null ? { disabled: T, onSelect: o } : void 0),
      (t[16] = x),
      (t[17] = T),
      (t[18] = o),
      (t[19] = _),
      (t[20] = ee))
    : (ee = t[20]);
  let j;
  t[21] === D ? (j = t[22]) : ((j = () => D(!1)), (t[21] = D), (t[22] = j));
  let M;
  t[23] !== T || t[24] !== j
    ? ((M = { disabled: T, onSelect: j }), (t[23] = T), (t[24] = j), (t[25] = M))
    : (M = t[25]);
  let N;
  t[26] === D ? (N = t[27]) : ((N = () => D(!0)), (t[26] = D), (t[27] = N));
  let P;
  t[28] !== T || t[29] !== N
    ? ((P = { disabled: T, onSelect: N }), (t[28] = T), (t[29] = N), (t[30] = P))
    : (P = t[30]);
  let F;
  t[31] !== w ||
  t[32] !== P ||
  t[33] !== O ||
  t[34] !== k ||
  t[35] !== A ||
  t[36] !== ee ||
  t[37] !== M ||
  t[38] !== s
    ? ((F = (0, Qr.jsx)(Ir, {
        deleteAction: O,
        editAction: k,
        isCompleted: w,
        isPaused: A,
        openConversationAction: ee,
        pauseAction: M,
        pauseResumeInMenu: !0,
        resumeAction: P,
        trailingMenuItems: s,
      })),
      (t[31] = w),
      (t[32] = P),
      (t[33] = O),
      (t[34] = k),
      (t[35] = A),
      (t[36] = ee),
      (t[37] = M),
      (t[38] = s),
      (t[39] = F))
    : (F = t[39]);
  let I;
  t[40] !== g ||
  t[41] !== x ||
  t[42] !== f ||
  t[43] !== l ||
  t[44] !== p ||
  t[45] !== n ||
  t[46] !== r ||
  t[47] !== c
    ? ((I =
        x && p
          ? (0, Qr.jsx)(Ln, {
              isPending: f.isPending,
              name: h(n),
              open: !0,
              onCancel: () => m(!1),
              onConfirm: () => {
                f.mutate(
                  { automationId: g.id },
                  {
                    onSuccess: () => {
                      (m(!1), r?.());
                    },
                    onError: (e) => {
                      (m(!1),
                        c.get(Xe).danger(
                          l.formatMessage({
                            id: `inbox.automations.cloud.deleteError`,
                            defaultMessage: `Could not delete cloud scheduled task`,
                            description: `Toast title when deleting a cloud scheduled task fails`,
                          }),
                          { description: e instanceof Error ? e.message : void 0 },
                        ));
                    },
                  },
                );
              },
            })
          : null),
      (t[40] = g),
      (t[41] = x),
      (t[42] = f),
      (t[43] = l),
      (t[44] = p),
      (t[45] = n),
      (t[46] = r),
      (t[47] = c),
      (t[48] = I))
    : (I = t[48]);
  let L;
  return (
    t[49] !== F || t[50] !== I
      ? ((L = (0, Qr.jsxs)(Qr.Fragment, { children: [F, I] })),
        (t[49] = F),
        (t[50] = I),
        (t[51] = L))
      : (L = t[51]),
    L
  );
}
var Xr,
  Zr,
  Qr,
  $r = e(() => {
    ((Xr = tt()), V(), (Zr = t(l(), 1)), K(), et(), ot(), Rr(), In(), H(), Me(), (Qr = Ge()));
  });
function ei(e) {
  let t = (0, ii.c)(5),
    { triggers: n } = e;
  if (n == null || n.length === 0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(ni, { trigger: void 0 })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r;
  t[1] === n ? (r = t[2]) : ((r = n.map(ti)), (t[1] = n), (t[2] = r));
  let i;
  return (
    t[3] === r
      ? (i = t[4])
      : ((i = (0, Q.jsx)(Q.Fragment, { children: r })), (t[3] = r), (t[4] = i)),
    i
  );
}
function ti(e, t) {
  return (0, Q.jsxs)(
    ai.Fragment,
    {
      children: [
        t > 0
          ? (0, Q.jsx)(`div`, {
              className: `text-center text-sm text-tertiary select-none`,
              children: (0, Q.jsx)(m, {
                id: `inbox.automations.cloud.webhook.or`,
                defaultMessage: `Or`,
                description: `Separator between alternative triggers in a cloud webhook task's details panel; any one of the triggers can start the task`,
              }),
            })
          : null,
        (0, Q.jsx)(ni, { trigger: e }),
      ],
    },
    e.id,
  );
}
function ni(e) {
  let t = (0, ii.c)(21),
    { trigger: n } = e,
    r = n?.presentation,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(`span`, {
        className: `select-none`,
        children: (0, Q.jsx)(m, {
          id: `inbox.automations.cloud.webhook.trigger`,
          defaultMessage: `Trigger`,
          description: `Section heading above the connected app that can trigger a cloud webhook task in its details panel`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === n?.is_enabled
    ? (a = t[2])
    : ((a =
        n?.is_enabled === !1
          ? (0, Q.jsx)(`span`, {
              className: `text-sm text-secondary select-none`,
              children: (0, Q.jsx)(m, {
                id: `inbox.automations.cloud.webhook.disabled`,
                defaultMessage: `Disabled`,
                description: `Label on a disabled connected-app trigger in a cloud webhook task's details panel; this trigger will not start the task`,
              }),
            })
          : null),
      (t[1] = n?.is_enabled),
      (t[2] = a));
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(`span`, { children: (0, Q.jsx)(xe, {}) })), (t[3] = o))
    : (o = t[3]);
  let s = n?.connector_type,
    c = r?.icon_url,
    l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, Q.jsx)(Be, { size: 20, alt: ``, fallback: o, knownAppId: s, logoUrl: c })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== r?.display_name || t[8] !== n?.connector_type
    ? ((u =
        r?.display_name ??
        n?.connector_type ??
        (0, Q.jsx)(m, {
          id: `inbox.automations.cloud.webhook.fallback`,
          defaultMessage: `Webhook`,
          description: `Fallback name for a cloud task's event trigger when its connected app is unavailable in the details panel`,
        })),
      (t[7] = r?.display_name),
      (t[8] = n?.connector_type),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === u
    ? (d = t[11])
    : ((d = (0, Q.jsx)(`span`, { className: `break-words select-text`, children: u })),
      (t[10] = u),
      (t[11] = d));
  let f;
  t[12] !== a || t[13] !== l || t[14] !== d
    ? ((f = (0, Q.jsx)(Mn, {
        title: i,
        children: (0, Q.jsx)(be, { children: (0, Q.jsx)(ut, { control: a, icon: l, label: d }) }),
      })),
      (t[12] = a),
      (t[13] = l),
      (t[14] = d),
      (t[15] = f))
    : (f = t[15]);
  let p;
  t[16] === r
    ? (p = t[17])
    : ((p =
        r == null || r.condition_rows.length > 0
          ? (0, Q.jsx)(Mn, {
              title: (0, Q.jsx)(`span`, {
                className: `select-none`,
                children: (0, Q.jsx)(m, {
                  id: `inbox.automations.cloud.webhook.condition`,
                  defaultMessage: `Condition`,
                  description: `Section heading above the read-only event filters for a cloud webhook task in its details panel`,
                }),
              }),
              children: (0, Q.jsx)(be, {
                children:
                  r == null
                    ? (0, Q.jsx)(ut, {
                        control: null,
                        label: (0, Q.jsx)(`span`, {
                          className: `select-none`,
                          children: (0, Q.jsx)(m, {
                            id: `inbox.automations.cloud.webhook.unavailable`,
                            defaultMessage: `Trigger details unavailable`,
                            description: `Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters`,
                          }),
                        }),
                        variant: `nested`,
                      })
                    : r.condition_rows.map(ri),
              }),
            })
          : null),
      (t[16] = r),
      (t[17] = p));
  let h;
  return (
    t[18] !== p || t[19] !== f
      ? ((h = (0, Q.jsxs)(Q.Fragment, { children: [f, p] })), (t[18] = p), (t[19] = f), (t[20] = h))
      : (h = t[20]),
    h
  );
}
function ri(e) {
  let { id: t, label: n, value: r } = e;
  return (0, Q.jsx)(
    ut,
    {
      control: (0, Q.jsx)(`span`, {
        className: `max-w-64 text-end text-base break-words text-default select-text`,
        children: r,
      }),
      label: (0, Q.jsx)(`span`, { className: `select-none`, children: n }),
      labelSizing: `content`,
      variant: `nested`,
    },
    t,
  );
}
var ii,
  ai,
  Q,
  oi = e(() => {
    ((ii = tt()), (ai = t(l(), 1)), K(), st(), Ce(), we(), T(), An(), (Q = Ge()));
  });
function si(e) {
  let t = (0, li.c)(102),
    { item: n, onClose: r, onOpenConversation: a, onSaved: o } = e,
    s = i(Ue),
    c = oe(),
    l = b(pe),
    u = b(Et),
    d = b(yt),
    f = (0, ui.useRef)(null),
    { automation: p } = n,
    h;
  t[0] === p ? (h = t[1]) : ((h = $e(p)), (t[0] = p), (t[1] = h));
  let { canManage: g } = h,
    _ = n.teamId != null && g,
    v;
  t[2] === p ? (v = t[3]) : ((v = () => Tt(p)), (t[2] = p), (t[3] = v));
  let [y, x] = (0, ui.useState)(v),
    [S] = (0, ui.useState)(null),
    C = l.isPending || u.isPending || d.isPending,
    w;
  t[4] === p ? (w = t[5]) : ((w = R(p)), (t[4] = p), (t[5] = w));
  let T = w,
    E = T === `completed`,
    D;
  t[6] !== p.schedule || t[7] !== p.timing_mode
    ? ((D = p.timing_mode === `condition_watch` && p.schedule.includes(`X-UNSCHEDULED:1`)),
      (t[6] = p.schedule),
      (t[7] = p.timing_mode),
      (t[8] = D))
    : (D = t[8]);
  let O = D,
    k;
  t[9] !== p || t[10] !== y ? ((k = ie(p, y)), (t[9] = p), (t[10] = y), (t[11] = k)) : (k = t[11]);
  let A = k,
    ee;
  t[12] !== y.name || t[13] !== y.prompt || t[14] !== y.scheduleConfig || t[15] !== y.scheduleDirty
    ? ((ee =
        y.name.trim().length > 0 &&
        y.prompt.trim().length > 0 &&
        (!y.scheduleDirty || ce(y.scheduleConfig))),
      (t[12] = y.name),
      (t[13] = y.prompt),
      (t[14] = y.scheduleConfig),
      (t[15] = y.scheduleDirty),
      (t[16] = ee))
    : (ee = t[16]);
  let j = ee,
    M = g && !E && p.timing_mode !== `condition_watch`,
    N;
  t[17] !== p ||
  t[18] !== g ||
  t[19] !== j ||
  t[20] !== y ||
  t[21] !== A ||
  t[22] !== c ||
  t[23] !== C ||
  t[24] !== o ||
  t[25] !== u ||
  t[26] !== s
    ? ((N = (e) => {
        (e.preventDefault(),
          !(!g || !A || !j || C) &&
            u.mutate(
              { requestBody: ge(p, y) },
              {
                onError: (e) => {
                  s.get(Xe).danger(
                    c.formatMessage({
                      id: `inbox.automations.cloud.updateError`,
                      defaultMessage: `Could not update cloud scheduled task`,
                      description: `Toast title when updating a cloud scheduled task fails`,
                    }),
                    { description: e instanceof Error ? e.message : void 0 },
                  );
                },
                onSuccess: (e) => {
                  (x(Tt(e)), o?.(e));
                },
              },
            ));
      }),
      (t[17] = p),
      (t[18] = g),
      (t[19] = j),
      (t[20] = y),
      (t[21] = A),
      (t[22] = c),
      (t[23] = C),
      (t[24] = o),
      (t[25] = u),
      (t[26] = s),
      (t[27] = N))
    : (N = t[27]);
  let P = N,
    F;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(m, {
        id: `inbox.automations.cloud.timeZone`,
        defaultMessage: `Time zone`,
        description: `Label for a cloud scheduled task time zone`,
      })),
      (t[28] = F))
    : (F = t[28]);
  let I;
  t[29] === p.default_timezone
    ? (I = t[30])
    : ((I = (0, $.jsx)(ci, { value: p.default_timezone, label: F })),
      (t[29] = p.default_timezone),
      (t[30] = I));
  let L = I,
    te;
  t[31] !== p.prompt || t[32] !== g || t[33] !== y || t[34] !== P || t[35] !== E
    ? ((te = (0, $.jsx)(be, {
        children:
          !g || E
            ? (0, $.jsx)(`div`, {
                className: `p-4 text-base whitespace-pre-wrap text-default select-text`,
                children: p.prompt,
              })
            : (0, $.jsx)(Hn, {
                disablePromptAutoFocus: !0,
                draft: y,
                formId: di,
                promptSize: `compact`,
                roots: [],
                setDraft: x,
                onSubmit: P,
              }),
      })),
      (t[31] = p.prompt),
      (t[32] = g),
      (t[33] = y),
      (t[34] = P),
      (t[35] = E),
      (t[36] = te))
    : (te = t[36]);
  let ne = te,
    re;
  t[38] === n.teamId ? (re = t[39]) : ((re = null), (t[38] = n.teamId), (t[39] = re));
  let z;
  t[40] !== n || t[41] !== r || t[42] !== a || t[43] !== re
    ? ((z = (0, $.jsx)(Yr, {
        item: n,
        trailingMenuItems: re,
        onDeleted: r,
        onOpenConversation: a,
      })),
      (t[40] = n),
      (t[41] = r),
      (t[42] = a),
      (t[43] = re),
      (t[44] = z))
    : (z = t[44]);
  let ae;
  t[45] === c
    ? (ae = t[46])
    : ((ae = c.formatMessage({
        id: `inbox.automations.detail.close`,
        defaultMessage: `Close scheduled task details`,
        description: `Accessible label for closing the scheduled task detail panel`,
      })),
      (t[45] = c),
      (t[46] = ae));
  let B;
  t[47] !== r || t[48] !== ae
    ? ((B = { label: ae, onClose: r }), (t[47] = r), (t[48] = ae), (t[49] = B))
    : (B = t[49]);
  let V;
  t[50] !== p || t[51] !== g || t[52] !== j || t[53] !== A || t[54] !== C || t[55] !== u
    ? ((V =
        g && A
          ? (0, $.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                (0, $.jsx)(Qe, {
                  color: `outline`,
                  disabled: C,
                  size: `toolbar`,
                  onClick: () => {
                    x(Tt(p));
                  },
                  children: (0, $.jsx)(m, {
                    id: `automation.sidePanel.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Cancel button label for the scheduled task editor`,
                  }),
                }),
                (0, $.jsx)(Qe, {
                  ref: f,
                  disabled: !j || C,
                  form: di,
                  loading: u.isPending,
                  size: `toolbar`,
                  type: `submit`,
                  children: (0, $.jsx)(m, {
                    id: `inbox.automations.cloud.save`,
                    defaultMessage: `Save`,
                    description: `Button label for saving changes to a cloud scheduled task`,
                  }),
                }),
              ],
            })
          : null),
      (t[50] = p),
      (t[51] = g),
      (t[52] = j),
      (t[53] = A),
      (t[54] = C),
      (t[55] = u),
      (t[56] = V))
    : (V = t[56]);
  let se = g ? y.name : p.title,
    H;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => Gt(e, () => f.current?.click())), (t[57] = H))
    : (H = t[57]);
  let U;
  t[58] !== g || t[59] !== E
    ? ((U =
        !g || E
          ? null
          : (e) => {
              x((t) => ({ ...t, name: e }));
            }),
      (t[58] = g),
      (t[59] = E),
      (t[60] = U))
    : (U = t[60]);
  let le = T === `active` ? void 0 : `text-codex-description`,
    ue;
  t[61] !== T || t[62] !== O
    ? ((ue =
        O && T === `active`
          ? (0, $.jsx)(`span`, {
              className: `select-none`,
              children: (0, $.jsx)(m, {
                id: `inbox.automations.cloud.webhook.monitoring`,
                defaultMessage: `Monitoring`,
                description: `Status of an enabled cloud webhook task in its details panel, indicating that it is waiting for events from a connected app`,
              }),
            })
          : (0, $.jsx)(m, { ...zn[T] })),
      (t[61] = T),
      (t[62] = O),
      (t[63] = ue))
    : (ue = t[63]);
  let W;
  t[64] !== le || t[65] !== ue
    ? ((W = (0, $.jsx)(`span`, { className: le, children: ue })),
      (t[64] = le),
      (t[65] = ue),
      (t[66] = W))
    : (W = t[66]);
  let G;
  t[67] !== p.webhook_triggers || t[68] !== O || t[69] !== ne
    ? ((G = O
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(ei, { triggers: p.webhook_triggers }),
              (0, $.jsx)(Mn, {
                title: (0, $.jsx)(`span`, {
                  className: `select-none`,
                  children: (0, $.jsx)(m, {
                    id: `inbox.automations.cloud.webhook.prompt`,
                    defaultMessage: `Prompt`,
                    description: `Section heading above the instructions for a cloud webhook task in its details panel`,
                  }),
                }),
                children: ne,
              }),
            ],
          })
        : ne),
      (t[67] = p.webhook_triggers),
      (t[68] = O),
      (t[69] = ne),
      (t[70] = G))
    : (G = t[70]);
  let de;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(m, {
        id: `inbox.automations.details`,
        defaultMessage: `Details`,
        description: `Section label above the automation details rail`,
      })),
      (t[71] = de))
    : (de = t[71]);
  let fe;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(ci, {
        value: (0, $.jsxs)(`span`, {
          className: `inline-flex items-center gap-1`,
          children: [(0, $.jsx)(We, { asset: mt }), (0, $.jsx)(m, { ...vr.cloud })],
        }),
        label: (0, $.jsx)(m, { ...vr.label }),
      })),
      (t[72] = fe))
    : (fe = t[72]);
  let K;
  t[73] === n.teamId ? (K = t[74]) : ((K = null), (t[73] = n.teamId), (t[74] = K));
  let me;
  t[75] === K
    ? (me = t[76])
    : ((me = (0, $.jsx)(Mn, { title: de, children: (0, $.jsxs)(be, { children: [fe, K] }) })),
      (t[75] = K),
      (t[76] = me));
  let he;
  t[77] !== p.default_timezone || t[78] !== M || t[79] !== y.scheduleConfig || t[80] !== L
    ? ((he = M
        ? (0, $.jsx)(Nn, {
            afterScheduleRows: L,
            intervalStyle: `default`,
            scheduleConfig: y.scheduleConfig,
            scheduleSource: `cloud`,
            timeZone: p.default_timezone,
            onUpdateScheduleDraft: (e) => {
              x((t) => ({ ...t, rawRrule: null, scheduleConfig: e, scheduleDirty: !0 }));
            },
          })
        : null),
      (t[77] = p.default_timezone),
      (t[78] = M),
      (t[79] = y.scheduleConfig),
      (t[80] = L),
      (t[81] = he))
    : (he = t[81]);
  let _e;
  t[82] !== M || t[83] !== c || t[84] !== O || t[85] !== n || t[86] !== L
    ? ((_e =
        !M && !O
          ? (0, $.jsx)(Mn, {
              title: (0, $.jsx)(m, {
                id: `inbox.automations.frequency`,
                defaultMessage: `Frequency`,
                description: `Section label above scheduled task frequency controls`,
              }),
              children: (0, $.jsxs)(be, {
                children: [
                  (0, $.jsx)(ci, {
                    value: Ye(n, c),
                    label: (0, $.jsx)(m, {
                      id: `inbox.automations.cloud.schedule`,
                      defaultMessage: `Schedule`,
                      description: `Label for a cloud scheduled task schedule`,
                    }),
                  }),
                  L,
                ],
              }),
            })
          : null),
      (t[82] = M),
      (t[83] = c),
      (t[84] = O),
      (t[85] = n),
      (t[86] = L),
      (t[87] = _e))
    : (_e = t[87]);
  let ve;
  t[88] === _ ? (ve = t[89]) : ((ve = null), (t[88] = _), (t[89] = ve));
  let ye;
  return (
    t[90] !== z ||
    t[91] !== B ||
    t[92] !== V ||
    t[93] !== se ||
    t[94] !== U ||
    t[95] !== W ||
    t[96] !== G ||
    t[97] !== me ||
    t[98] !== he ||
    t[99] !== _e ||
    t[100] !== ve
      ? ((ye = (0, $.jsxs)(Gr, {
          actions: z,
          closeAction: B,
          footer: V,
          name: se,
          onKeyDown: H,
          onNameChange: U,
          statusLabel: W,
          children: [G, me, he, _e, ve],
        })),
        (t[90] = z),
        (t[91] = B),
        (t[92] = V),
        (t[93] = se),
        (t[94] = U),
        (t[95] = W),
        (t[96] = G),
        (t[97] = me),
        (t[98] = he),
        (t[99] = _e),
        (t[100] = ve),
        (t[101] = ye))
      : (ye = t[101]),
    ye
  );
}
function ci(e) {
  let t = (0, li.c)(5),
    { label: n, value: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, $.jsx)(`span`, { className: fi, children: r })), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, $.jsx)(ut, { control: i, label: n, variant: `nested` })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var li,
  ui,
  $,
  di,
  fi,
  pi = e(() => {
    ((li = tt()),
      Ke(),
      V(),
      (ui = t(l(), 1)),
      K(),
      c(),
      He(),
      et(),
      rn(),
      Dt(),
      Qn(),
      we(),
      T(),
      Jr(),
      yr(),
      jn(),
      v(),
      An(),
      Rn(),
      $r(),
      H(),
      Me(),
      oi(),
      ($ = Ge()),
      (di = `cloud-automation-form`),
      (fi = `max-w-64 text-end text-base break-words text-default select-text`));
  });
export {
  zr as a,
  Rr as c,
  Bn as d,
  Qn as f,
  Jr as i,
  Ar as l,
  pi as n,
  Wr as o,
  Gr as r,
  Ir as s,
  si as t,
  Fr as u,
};
//# sourceMappingURL=cloud-automation-detail-panel-c76d4ae4bfb4.js.map
