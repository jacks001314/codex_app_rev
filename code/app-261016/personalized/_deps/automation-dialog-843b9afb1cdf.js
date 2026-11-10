import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  FBt as r,
  HFt as i,
  Jb as a,
  Kvt as o,
  LNt as s,
  MNt as c,
  NNt as l,
  ORt as u,
  PBt as d,
  Qst as f,
  Rvt as p,
  TY as m,
  VRt as h,
  Vvt as g,
  XOt as _,
  Y3 as v,
  Yb as y,
  Yst as b,
  Z3 as x,
  ZSt as S,
  b2 as C,
  ck as w,
  gCt as T,
  iCt as E,
  kH as D,
  kLt as O,
  kRt as k,
  nB as A,
  okt as j,
  rB as M,
  rk as ee,
  sct as N,
  tk as te,
  tkt as P,
  y2 as F,
  zst as I,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as L,
  Cd as R,
  Fm as z,
  G3n as B,
  IVt as V,
  Ipr as H,
  Jfr as U,
  KBr as ne,
  Lpr as re,
  NNn as ie,
  Om as ae,
  PNn as oe,
  QSt as se,
  Rpr as ce,
  Sd as le,
  Tfr as ue,
  ZSt as de,
  aFr as fe,
  ah as pe,
  bd as me,
  dRt as he,
  dpr as ge,
  fpr as _e,
  iFr as ve,
  iIr as ye,
  iRr as be,
  jVt as W,
  kfr as xe,
  km as Se,
  lg as Ce,
  lpr as G,
  mpr as we,
  nRt as K,
  pRt as Te,
  ppr as q,
  rIr as J,
  sRr as Y,
  tRt as X,
  ug as Ee,
  upr as De,
  vd as Oe,
  wLr as ke,
  wh as Ae,
  xln as je,
  yd as Me,
  z3n as Ne,
  zRr as Pe,
  zfr as Fe,
  zpr as Ie,
} from "./app-initial-ad16eaadf81f.js";
import { bg as Le, cf as Re, lf as ze, vg as Be, yg as Ve } from "./app-primary-3e00728c2a4c.js";
import { n as He, t as Ue } from "./model-and-reasoning-effort-translations-ac0973a6e9a8.js";
function We(e) {
  let t = (0, qe.c)(2),
    n;
  return (t[0] === e ? (n = t[1]) : ((n = { enabled: e }), (t[0] = e), (t[1] = n)), E(Ye, n));
}
function Ge(e) {
  return Je.parse(e)
    .models.filter((e) => e.visibility === `list`)
    .sort((e, t) => e.priority - t.priority)
    .map((e, t) => ({
      id: e.slug,
      upgrade: null,
      upgradeInfo: null,
      availabilityNux: null,
      modelSpecialty: null,
      availableAccessPrograms: null,
      model: e.slug,
      displayName: e.display_name,
      description: e.description ?? ``,
      hidden: !1,
      isDefault: t === 0,
      defaultReasoningEffort: e.default_reasoning_level,
      supportedReasoningEfforts: e.supported_reasoning_levels.flatMap((e) => {
        let t = p.safeParse(e.effort);
        return t.success ? [{ reasoningEffort: t.data, description: e.description }] : [];
      }),
      inputModalities: [],
      supportsPersonality: !1,
      multiAgentVersion: null,
      additionalSpeedTiers: [],
      serviceTiers: [],
      defaultServiceTier: null,
    }));
}
function Ke(e, t) {
  return t?.isLoading
    ? null
    : t == null
      ? e == null || e.length === 0
        ? null
        : X({
            userSavedModelString: null,
            userSavedReasoningEffort: null,
            listModelsData: {
              models: e,
              defaultModel: e.find((e) => e.isDefault) ?? null,
              hasModelSupportingMaxReasoningEffort: e.some((e) =>
                e.supportedReasoningEfforts.some((e) => e.reasoningEffort === `max`),
              ),
              hasModelSupportingUltraReasoningEffort: e.some((e) =>
                e.supportedReasoningEfforts.some((e) => e.reasoningEffort === `ultra`),
              ),
            },
          })
      : { ...t, reasoningEffort: o(t.reasoningEffort) };
}
var qe, Je, Ye;
function Xe() {
  return (Xe = e(() => {
    ((qe = d()),
      S(),
      N(),
      i(),
      ke(),
      t(),
      K(),
      n(),
      Y(),
      (Je = k({
        models: O(
          k({
            slug: h(),
            display_name: h(),
            description: h().nullish(),
            visibility: h(),
            priority: u(),
            default_reasoning_level: p,
            supported_reasoning_levels: O(k({ effort: h(), description: h() })),
          }),
        ),
      })),
      (Ye = T(f, ({ get: e }) => {
        let t = e(Pe),
          n = e(L);
        return {
          queryKey: [`cloud-automation-models`, t, n],
          enabled: t != null && n != null,
          staleTime: I.FIVE_MINUTES,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (t == null || n == null) throw Error(`Sign in to load automation models`);
            return Ge(
              await be.safeGet(`/wham/models`, {
                parameters: { query: { client_version: `0.163.0-alpha.11.2` } },
                additionalHeaders: { "ChatGPT-Account-ID": t },
                expectedIdentity: { accountId: t, userId: n },
                signal: e,
              }),
            );
          },
        };
      })));
  }))();
}
function Ze(e) {
  let t = (0, Z.c)(14),
    { id: n, value: r, autoFocus: i, readOnly: a, onChange: o } = e,
    s = a !== void 0 && a,
    c = j(),
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
    t[6] !== i || t[7] !== n || t[8] !== s || t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== r
      ? ((f = (0, $.jsx)(`input`, {
          id: n,
          "data-testid": `automation-title-input`,
          autoFocus: i,
          className: st,
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
function Qe(e) {
  let t = (0, Z.c)(11),
    { isReadOnlySandbox: n, isDangerFullAccess: r } = e,
    i = j(),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = (0, $.jsx)(tt, { isReadOnlySandbox: n, isDangerFullAccess: r })),
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
    ? ((s = (0, $.jsx)(de, { className: `icon-sm` })), (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === o
    ? (c = t[7])
    : ((c = (0, $.jsx)(v, {
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
      ? ((l = (0, $.jsx)(A, {
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
function $e(e) {
  let t = (0, Z.c)(79),
    { draft: n, setDraft: r, roots: i, onSubmit: o, formId: s, disablePromptAutoFocus: c, promptSize: l } = e,
    u = c !== void 0 && c,
    d = l === void 0 ? `default` : l,
    f = j(),
    p = (0, Q.useRef)(null),
    m = (0, Q.useRef)(null),
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () =>
        Ae(``, {
          defaultTextKind: `prompt`,
          enableFileMentions: !0,
          enableSelectedTextLinks: !0,
          enableSkillMentions: !1,
          enterBehavior: `newline`,
          restoreMarkdownLinksAsTextLinks: !0,
        })),
      (t[0] = h))
    : (h = t[0]);
  let [g] = (0, Q.useState)(h),
    _;
  t[1] === n ? (_ = t[2]) : ((_ = fe(n)), (t[1] = n), (t[2] = _));
  let v = _,
    y;
  t[3] !== v || t[4] !== i ? ((y = v ? [] : i), (t[3] = v), (t[4] = i), (t[5] = y)) : (y = t[5]);
  let x = y,
    S = Me(g),
    C;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { enabled: !0, hostId: b }), (t[6] = C))
    : (C = t[6]);
  let w = B(C),
    T;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { enabled: !0, hostId: b }), (t[7] = T))
    : (T = t[7]);
  let E = re(T),
    D;
  t[8] !== E || t[9] !== x
    ? ((D = { enabled: E, hostId: b, roots: x }), (t[8] = E), (t[9] = x), (t[10] = D))
    : (D = t[10]);
  let { data: O } = xe(D),
    k;
  t[11] === E ? (k = t[12]) : ((k = { enabled: E, hostId: b }), (t[11] = E), (t[12] = k));
  let A = Ie(k),
    M;
  t[13] === A ? (M = t[14]) : ((M = { computerUseAvailability: A, hostId: b }), (t[13] = A), (t[14] = M));
  let ee = De(M),
    N;
  t[15] === E ? (N = t[16]) : ((N = { enabled: E, hostId: b }), (t[15] = E), (t[16] = N));
  let te = we(N),
    P;
  t[17] === E ? (P = t[18]) : ((P = { enabled: E, hostId: b }), (t[17] = E), (t[18] = P));
  let F = _e(P),
    I,
    L;
  t[19] !== A || t[20] !== te || t[21] !== F || t[22] !== O || t[23] !== ee
    ? ((I =
        O == null
          ? void 0
          : Fe({
              plugins: O,
              isComputerUseAvailable: A.available,
              isExternalBrowserUseAvailable: te.available,
              isInAppBrowserUseAvailable: F.available,
              isMessagesAvailable: ee.available,
            })),
      (L = I == null ? void 0 : Ce(I)),
      (t[19] = A),
      (t[20] = te),
      (t[21] = F),
      (t[22] = O),
      (t[23] = ee),
      (t[24] = I),
      (t[25] = L))
    : ((I = t[24]), (L = t[25]));
  let z = L != null,
    V;
  t[26] === z ? (V = t[27]) : ((V = { enabled: z }), (t[26] = z), (t[27] = V));
  let { nativeApps: H } = Se(V),
    U;
  t[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((U = { enabled: !0 }), (t[28] = U)) : (U = t[28]);
  let { skills: ne } = oe(x, void 0, U),
    ie,
    ae;
  (t[29] !== w || t[30] !== I || t[31] !== ne || t[32] !== H || t[33] !== g
    ? ((ie = () => {
        g.syncMentionMetadata({ skills: ne, apps: w, plugins: I ?? [], nativeApps: H });
      }),
      (ae = [w, I, ne, H, g]),
      (t[29] = w),
      (t[30] = I),
      (t[31] = ne),
      (t[32] = H),
      (t[33] = g),
      (t[34] = ie),
      (t[35] = ae))
    : ((ie = t[34]), (ae = t[35])),
    (0, Q.useEffect)(ie, ae));
  let se, ce;
  (t[36] !== n.prompt || t[37] !== g
    ? ((se = () => {
        g.getText() !== n.prompt && g.setPromptText(n.prompt);
      }),
      (ce = [n.prompt, g]),
      (t[36] = n.prompt),
      (t[37] = g),
      (t[38] = se),
      (t[39] = ce))
    : ((se = t[38]), (ce = t[39])),
    (0, Q.useEffect)(se, ce));
  let le, ue;
  (t[40] !== g || t[41] !== r
    ? ((le = () =>
        je(g.view, () => {
          let e = g.getText();
          r((t) => (t.prompt === e ? t : { ...t, prompt: e }));
        })),
      (ue = [g, r]),
      (t[40] = g),
      (t[41] = r),
      (t[42] = le),
      (t[43] = ue))
    : ((le = t[42]), (ue = t[43])),
    (0, Q.useEffect)(le, ue));
  let de;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = () => {
        p.current?.requestSubmit();
      }),
      (t[44] = de))
    : (de = t[44]);
  let he = de,
    ge = d === `compact` ? lt : ct,
    ve = S.ui?.active ?? !1,
    ye = S.ui?.query ?? ``,
    be = S.ui?.source ?? null,
    W;
  t[45] !== n.model ||
  t[46] !== S.addMention ||
  t[47] !== S.closeAutocomplete ||
  t[48] !== S.setSelectedMention ||
  t[49] !== x ||
  t[50] !== ye ||
  t[51] !== be
    ? ((W = (0, $.jsx)(R, {
        hostId: b,
        onAddContext: S.addMention,
        onRequestClose: S.closeAutocomplete,
        onUpdateSelectedMention: S.setSelectedMention,
        query: ye,
        fileSearchRootPaths: x,
        selectedModel: n.model,
        skillRoots: x,
        source: be,
      })),
      (t[45] = n.model),
      (t[46] = S.addMention),
      (t[47] = S.closeAutocomplete),
      (t[48] = S.setSelectedMention),
      (t[49] = x),
      (t[50] = ye),
      (t[51] = be),
      (t[52] = W))
    : (W = t[52]);
  let G;
  t[53] !== S.ui || t[54] !== g || t[55] !== ve || t[56] !== W
    ? ((G = (0, $.jsx)(a, {
        anchorRef: m,
        composerController: g,
        isActive: ve,
        mentionUiState: S.ui,
        placement: `bottom`,
        portalRoot: `body`,
        zIndexClassName: `z-[10000]`,
        children: W,
      })),
      (t[53] = S.ui),
      (t[54] = g),
      (t[55] = ve),
      (t[56] = W),
      (t[57] = G))
    : (G = t[57]);
  let K;
  t[58] === f
    ? (K = t[59])
    : ((K = f.formatMessage({
        id: `settings.automations.promptLabel`,
        defaultMessage: `Prompt`,
        description: `Label for automation prompt input`,
      })),
      (t[58] = f),
      (t[59] = K));
  let Te = d === `compact` ? `4rem` : `16rem`,
    q;
  t[60] === f
    ? (q = t[61])
    : ((q = f.formatMessage({
        id: `settings.automations.promptPlaceholderChatGPT`,
        defaultMessage: `Describe what ChatGPT should do`,
        description: `Placeholder text for the scheduled task prompt input`,
      })),
      (t[60] = f),
      (t[61] = q));
  let J;
  t[62] === S.handleMentionEvent
    ? (J = t[63])
    : ((J = (e) => {
        me(e, { onAtMention: S.handleMentionEvent, onSkillMention: et });
      }),
      (t[62] = S.handleMentionEvent),
      (t[63] = J));
  let Y;
  t[64] !== u || t[65] !== g || t[66] !== ge || t[67] !== K || t[68] !== Te || t[69] !== q || t[70] !== J
    ? ((Y = (0, $.jsx)(pe, {
        className: ge,
        composerController: g,
        ariaLabel: K,
        minHeight: Te,
        disableAutoFocus: u,
        placeholder: q,
        onSuggestionHandler: J,
        onSubmit: he,
      })),
      (t[64] = u),
      (t[65] = g),
      (t[66] = ge),
      (t[67] = K),
      (t[68] = Te),
      (t[69] = q),
      (t[70] = J),
      (t[71] = Y))
    : (Y = t[71]);
  let X;
  t[72] !== G || t[73] !== Y
    ? ((X = (0, $.jsx)(`div`, {
        className: `flex flex-col gap-4`,
        children: (0, $.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, $.jsxs)(`div`, { ref: m, className: `relative`, children: [G, Y] }),
        }),
      })),
      (t[72] = G),
      (t[73] = Y),
      (t[74] = X))
    : (X = t[74]);
  let Ee;
  return (
    t[75] !== s || t[76] !== o || t[77] !== X
      ? ((Ee = (0, $.jsx)(`form`, {
          id: s,
          ref: p,
          className: `flex flex-col gap-0`,
          onSubmit: o,
          children: X,
        })),
        (t[75] = s),
        (t[76] = o),
        (t[77] = X),
        (t[78] = Ee))
      : (Ee = t[78]),
    Ee
  );
}
function et() {}
function tt(e) {
  let t = (0, Z.c)(3),
    { isReadOnlySandbox: n, isDangerFullAccess: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex flex-col gap-1`,
            children: (0, $.jsx)(`p`, {
              className: `text-danger`,
              children: (0, $.jsx)(P, {
                id: `settings.automations.banner.dangerChatGPT`,
                defaultMessage: `Scheduled tasks run with your default sandbox settings, which are currently set to Full Access. Running scheduled tasks in the background with Full Access carries elevated risk, as ChatGPT may modify files, run commands, and access network without asking. Consider updating sandbox settings to workspace write, and using <rulesDocsLink>rules</rulesDocsLink> to selectively define which commands the agent can run with full access.`,
                description: `Warning shown in the scheduled task editor when dangerous sandbox mode is enabled`,
                values: { rulesDocsLink: rt },
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
      : ((i = (0, $.jsx)(`div`, {
          className: `flex flex-col gap-1`,
          children: (0, $.jsx)(`p`, {
            children: n
              ? (0, $.jsx)(P, {
                  id: `settings.automations.banner.defaultHowTo.readOnly`,
                  defaultMessage: `Scheduled tasks run with your default sandbox settings, which are set to read-only. Tool calls will fail if they require modifying files, accessing network, or working with apps on your computer. Consider updating sandbox settings to workspace write.`,
                  description: `Follow-up guidance shown in the scheduled task editor when default sandbox mode is read-only`,
                })
              : (0, $.jsx)(P, {
                  id: `settings.automations.banner.defaultHowTo.configuredSandbox`,
                  defaultMessage: `Scheduled tasks use your configured sandbox settings. Projectless tasks can write files in their generated workspace, and their network access follows your configured setting. They run without approval prompts unless your organization requires them. You can selectively allowlist commands to run outside the sandbox using <rulesDocsLink>rules</rulesDocsLink>.`,
                  description: `Follow-up guidance shown in the scheduled task editor when default sandbox mode is workspace write`,
                  values: { rulesDocsLink: nt },
                }),
          }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function nt(e) {
  let t = Array.isArray(e) ? e.join(``) : e;
  return (0, $.jsx)(`a`, {
    className: `text-info underline-offset-2 hover:underline`,
    href: W,
    rel: `noreferrer`,
    target: `_blank`,
    children: t,
  });
}
function rt(e) {
  let t = Array.isArray(e) ? e.join(``) : e;
  return (0, $.jsx)(`a`, {
    className: `text-danger underline underline-offset-2 hover:underline`,
    href: W,
    rel: `noreferrer`,
    target: `_blank`,
    children: t,
  });
}
function it(e) {
  let t = (0, Z.c)(60),
    {
      field: n,
      catalog: r,
      variant: i,
      selectedModel: a,
      reasoningEffort: o,
      align: s,
      className: l,
      onSelect: u,
    } = e,
    d = r === void 0 ? `local` : r,
    f = i === void 0 ? `default` : i,
    p = s === void 0 ? `start` : s,
    m = j(),
    h = (0, Q.useRef)(null),
    _ = d === `local`,
    y;
  t[0] === a ? (y = t[1]) : ((y = a == null ? void 0 : new Set([a])), (t[0] = a), (t[1] = y));
  let b;
  t[2] !== _ || t[3] !== y
    ? ((b = { enabled: _, additionalAvailableModels: y }), (t[2] = _), (t[3] = y), (t[4] = b))
    : (b = t[4]);
  let x = Te(b),
    S = We(d === `cloud`),
    C = d === `cloud` ? S : x,
    w = d === `cloud` ? S.data : x.data?.models;
  if (w == null && C.isError) {
    let e = f === `form` && `not-disabled:not-aria-disabled:text-secondary`,
      n;
    t[5] === e ? (n = t[6]) : ((n = c(e)), (t[5] = e), (t[6] = n));
    let r;
    t[7] === C ? (r = t[8]) : ((r = () => void C.refetch()), (t[7] = C), (t[8] = r));
    let i;
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(P, {
          id: `automations.models.retry`,
          defaultMessage: `Couldn’t load models. Retry`,
          description: `Retry loading the automation model catalog after a failure`,
        })),
        (t[9] = i))
      : (i = t[9]);
    let a;
    return (
      t[10] !== n || t[11] !== r
        ? ((a = (0, $.jsx)(v, {
            className: n,
            color: `ghostTertiary`,
            size: `formValue`,
            onClick: r,
            children: i,
          })),
          (t[10] = n),
          (t[11] = r),
          (t[12] = a))
        : (a = t[12]),
      a
    );
  }
  let T, E, O, k, A, M, N, I, L, R;
  if (
    t[13] !== p ||
    t[14] !== l ||
    t[15] !== n ||
    t[16] !== m ||
    t[17] !== w ||
    t[18] !== u ||
    t[19] !== o ||
    t[20] !== a ||
    t[21] !== f
  ) {
    let e = w?.find((e) => e.model === a) ?? null,
      r = g({ model: e, reasoningEffort: o }),
      i = ye(r) ? r : null,
      s = Be(w, a ?? ``).filter(ot),
      d = s.length === 0 ? null : Ve(i, s),
      _ = w == null || (n === `reasoning` && (e == null || s.length === 0)),
      y;
    t[32] !== n || t[33] !== m
      ? ((y =
          n === `model`
            ? m.formatMessage({
                id: `settings.automations.model.ariaLabel`,
                defaultMessage: `Model`,
                description: `Aria label for the scheduled task model dropdown`,
              })
            : m.formatMessage({
                id: `settings.automations.reasoning.ariaLabel`,
                defaultMessage: `Reasoning`,
                description: `Aria label for the scheduled task reasoning level dropdown`,
              })),
        (t[32] = n),
        (t[33] = m),
        (t[34] = y))
      : (y = t[34]);
    let b = y;
    ((T = te),
      (R = !0),
      (E = p),
      (O = h),
      t[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = (e) => {
            let t = h.current?.querySelector(`[data-selected="true"]`);
            t != null &&
              (e.preventDefault(),
              t.focus({ preventScroll: !0 }),
              requestAnimationFrame(() => {
                t.scrollIntoView({ block: `nearest` });
              }));
          }),
          (t[35] = k))
        : (k = t[35]),
      (A = `menuNarrow`),
      (M = _));
    let x = f === `form` && `not-disabled:not-aria-disabled:text-secondary`,
      S;
    t[36] !== l || t[37] !== x
      ? ((S = c(`min-w-0`, x, l)), (t[36] = l), (t[37] = x), (t[38] = S))
      : (S = t[38]);
    let C = f === `form` ? `ghostTertiary` : `ghost`,
      j = f === `form` ? `formValue` : `composerSm`,
      z =
        n === `model`
          ? a != null && a.trim().length > 0
            ? (0, $.jsx)(Re, {
                displayName: e?.displayName ?? a,
                labelClassName: f === "default" ? `text-default` : void 0,
                model: a,
              })
            : w == null
              ? (0, $.jsx)(`span`, {
                  className: c(`truncate`, f === "default" && `text-default`),
                  children: (0, $.jsx)(P, {
                    id: `settings.automations.model.loading`,
                    defaultMessage: `Loading model`,
                    description: `Fallback label while automation model options are loading`,
                  }),
                })
              : (0, $.jsx)(`span`, {
                  className: c(`truncate`, f === "default" && `text-default`),
                  children: (0, $.jsx)(P, {
                    id: `settings.automations.model.select`,
                    defaultMessage: `Select model`,
                    description: `Placeholder for the scheduled task model dropdown`,
                  }),
                })
          : (0, $.jsx)(`span`, {
              className: f === "default" ? `text-default` : void 0,
              children:
                d == null
                  ? (0, $.jsx)(P, {
                      id: `settings.automations.reasoning.unavailable`,
                      defaultMessage: `Unavailable`,
                      description: `Reasoning effort dropdown label when the selected task model has no supported effort options`,
                    })
                  : (0, $.jsx)(Ue, { effort: d }),
            }),
      B;
    (t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((B = (0, $.jsx)(D, { className: `text-tertiary` })), (t[39] = B))
      : (B = t[39]),
      t[40] !== b || t[41] !== _ || t[42] !== S || t[43] !== C || t[44] !== j || t[45] !== z
        ? ((N = (0, $.jsxs)(v, {
            "aria-label": b,
            className: S,
            color: C,
            disabled: _,
            size: j,
            children: [z, B],
          })),
          (t[40] = b),
          (t[41] = _),
          (t[42] = S),
          (t[43] = C),
          (t[44] = j),
          (t[45] = z),
          (t[46] = N))
        : (N = t[46]),
      (I = `vertical-scroll-fade-mask flex max-h-[250px] flex-col overflow-y-auto`),
      (L =
        n === `model`
          ? w?.map((e) =>
              (0, $.jsx)(
                ee.Item,
                {
                  "data-selected": e.model === a,
                  rightIconAsset: e.model === a ? F : void 0,
                  onSelect: () => {
                    let t = g({ model: e, reasoningEffort: o }),
                      n = Be(w, e.model).filter(at);
                    u(e.model, n.length === 0 ? null : Ve(t, n));
                  },
                  children: (0, $.jsx)(Re, { displayName: e.displayName, model: e.model }),
                },
                e.model,
              ),
            )
          : s.map((e) =>
              (0, $.jsx)(
                ee.Item,
                {
                  "data-selected": e.reasoningEffort === d,
                  rightIconAsset: e.reasoningEffort === d ? F : void 0,
                  onSelect: () => {
                    a != null && u(a, e.reasoningEffort);
                  },
                  children: (0, $.jsx)(Ue, { effort: e.reasoningEffort }),
                },
                e.reasoningEffort,
              ),
            )),
      (t[13] = p),
      (t[14] = l),
      (t[15] = n),
      (t[16] = m),
      (t[17] = w),
      (t[18] = u),
      (t[19] = o),
      (t[20] = a),
      (t[21] = f),
      (t[22] = T),
      (t[23] = E),
      (t[24] = O),
      (t[25] = k),
      (t[26] = A),
      (t[27] = M),
      (t[28] = N),
      (t[29] = I),
      (t[30] = L),
      (t[31] = R));
  } else
    ((T = t[22]),
      (E = t[23]),
      (O = t[24]),
      (k = t[25]),
      (A = t[26]),
      (M = t[27]),
      (N = t[28]),
      (I = t[29]),
      (L = t[30]),
      (R = t[31]));
  let z;
  t[47] !== I || t[48] !== L
    ? ((z = (0, $.jsx)(`div`, { className: I, children: L })), (t[47] = I), (t[48] = L), (t[49] = z))
    : (z = t[49]);
  let B;
  return (
    t[50] !== T ||
    t[51] !== E ||
    t[52] !== O ||
    t[53] !== k ||
    t[54] !== A ||
    t[55] !== M ||
    t[56] !== N ||
    t[57] !== z ||
    t[58] !== R
      ? ((B = (0, $.jsx)(T, {
          modal: R,
          align: E,
          contentRef: O,
          onOpenAutoFocus: k,
          contentWidth: A,
          disabled: M,
          triggerButton: N,
          children: z,
        })),
        (t[50] = T),
        (t[51] = E),
        (t[52] = O),
        (t[53] = k),
        (t[54] = A),
        (t[55] = M),
        (t[56] = N),
        (t[57] = z),
        (t[58] = R),
        (t[59] = B))
      : (B = t[59]),
    B
  );
}
function at(e) {
  return e.reasoningEffort !== `persistent`;
}
function ot(e) {
  return e.reasoningEffort !== `persistent`;
}
var Z, Q, $, st, ct, lt;
function ut() {
  return (ut = e(() => {
    ((Z = d()),
      C(),
      l(),
      N(),
      J(),
      (Q = r()),
      _(),
      Ne(),
      ve(),
      Xe(),
      y(),
      le(),
      Ee(),
      He(),
      ze(),
      Le(),
      Oe(),
      ae(),
      V(),
      x(),
      w(),
      m(),
      M(),
      ce(),
      q(),
      ge(),
      H(),
      G(),
      se(),
      ue(),
      U(),
      z(),
      he(),
      ne(),
      ie(),
      ($ = s()),
      (st = `text-default placeholder:text-tertiary m-0 w-full min-w-0 appearance-none bg-transparent p-0 text-lg leading-tight outline-none`),
      (ct = c(
        `text-default placeholder:text-tertiary w-full text-base outline-none`,
        `max-h-[32rem]`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:px-0`,
        `[&_.ProseMirror]:py-0`,
      )),
      (lt = c(
        `text-default placeholder:text-tertiary w-full text-base outline-none`,
        `max-h-64`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:p-4`,
      )));
  }))();
}
export { ut as a, We as c, Ze as i, it as n, Ke as o, Qe as r, Xe as s, $e as t };
//# sourceMappingURL=automation-dialog-843b9afb1cdf.js.map
