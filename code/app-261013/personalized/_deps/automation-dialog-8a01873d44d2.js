import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $xt as n,
  AO as r,
  CO as i,
  C_t as a,
  Cot as o,
  EPt as s,
  E_t as c,
  Fat as l,
  IDt as u,
  NV as d,
  Pat as f,
  Pxt as p,
  TJ as m,
  TLt as h,
  TO as g,
  VDt as _,
  Vxt as v,
  _Mt as y,
  b0 as b,
  bb as ee,
  cz as x,
  fLt as S,
  gMt as C,
  iot as w,
  jDt as T,
  j_t as E,
  pIt as D,
  pLt as O,
  rst as k,
  sz as A,
  t3 as j,
  vzt as M,
  wot as N,
  xMt as P,
  xb as F,
  y0 as te,
  yzt as I,
} from "./app-shared-bbfeca5e5737.js";
import {
  BKt as L,
  Bcr as R,
  Clr as z,
  FAr as B,
  FKt as ne,
  Fjr as V,
  GMr as H,
  Icr as U,
  Jlr as re,
  PAr as ie,
  Pjr as ae,
  Slr as oe,
  Tlr as se,
  Uh as ce,
  Wh as le,
  XMr as ue,
  Xcr as de,
  Xlr as fe,
  Ylr as pe,
  _d as me,
  a0n as he,
  alr as ge,
  bd as _e,
  blr as ve,
  cm as ye,
  d0n as be,
  dAn as xe,
  dEt as Se,
  fAn as Ce,
  gd as W,
  hHt as G,
  hm as K,
  iPr as we,
  ih as Te,
  kan as Ee,
  lm as De,
  nVt as q,
  oFr as J,
  pHt as Y,
  qlr as X,
  rVt as Oe,
  sPr as ke,
  tNr as Ae,
  uEt as je,
  vd as Me,
  wlr as Ne,
  xd as Pe,
  xlr as Fe,
  zm as Ie,
} from "./app-initial-5851df3f6cb1.js";
import { Qd as Le, Zd as Re, ag as ze, ig as Be, rg as Ve } from "./app-primary-fe8a450b3b04.js";
import { n as He, t as Ue } from "./model-and-reasoning-effort-translations-96be4f100801.js";
function We(e) {
  let t = (0, qe.c)(2),
    n;
  return (t[0] === e ? (n = t[1]) : ((n = { enabled: e }), (t[0] = e), (t[1] = n)), v(Ye, n));
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
        let t = a.safeParse(e.effort);
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
        : q({
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
      : { ...t, reasoningEffort: E(t.reasoningEffort) };
}
var qe, Je, Ye;
function Xe() {
  return (Xe = e(() => {
    ((qe = M()),
      p(),
      k(),
      s(),
      Ae(),
      N(),
      Oe(),
      l(),
      ke(),
      (Je = O({
        models: D(
          O({
            slug: h(),
            display_name: h(),
            description: h().nullish(),
            visibility: h(),
            priority: S(),
            default_reasoning_level: a,
            supported_reasoning_levels: D(O({ effort: h(), description: h() })),
          }),
        ),
      })),
      (Ye = n(o, ({ get: e }) => {
        let t = e(H),
          n = e(ue);
        return {
          queryKey: [`cloud-automation-models`, t, n],
          enabled: t != null && n != null,
          staleTime: f.FIVE_MINUTES,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (t == null || n == null) throw Error(`Sign in to load automation models`);
            return Ge(
              await we.safeGet(`/wham/models`, {
                parameters: { query: { client_version: `0.163.0-alpha.10.2` } },
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
    c = _(),
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
  let n = (0, Z.c)(11),
    { isReadOnlySandbox: r, isDangerFullAccess: i } = e,
    a = _(),
    o;
  n[0] !== i || n[1] !== r
    ? ((o = (0, $.jsx)(tt, { isReadOnlySandbox: r, isDangerFullAccess: i })),
      (n[0] = i),
      (n[1] = r),
      (n[2] = o))
    : (o = n[2]);
  let s;
  n[3] === a
    ? (s = n[4])
    : ((s = a.formatMessage({
        id: `settings.automations.banner.tooltipLabel`,
        defaultMessage: `Scheduled task sandbox details`,
        description: `Aria label for the scheduled task sandbox details tooltip trigger`,
      })),
      (n[3] = a),
      (n[4] = s));
  let c;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(je, { className: `icon-sm` })), (n[5] = c))
    : (c = n[5]);
  let l;
  n[6] === s
    ? (l = n[7])
    : ((l = (0, $.jsx)(t, {
        className: `shrink-0`,
        "aria-label": s,
        color: `ghostTertiary`,
        size: `inline`,
        children: c,
      })),
      (n[6] = s),
      (n[7] = l));
  let u;
  return (
    n[8] !== o || n[9] !== l
      ? ((u = (0, $.jsx)(A, {
          cloneCustomTrigger: !0,
          tooltipContent: o,
          side: `top`,
          align: `center`,
          interactive: !0,
          tooltipClassName: `max-w-md text-start`,
          children: l,
        })),
        (n[8] = o),
        (n[9] = l),
        (n[10] = u))
      : (u = n[10]),
    u
  );
}
function $e(e) {
  let t = (0, Z.c)(79),
    { draft: n, setDraft: r, roots: i, onSubmit: a, formId: o, disablePromptAutoFocus: s, promptSize: c } = e,
    l = s !== void 0 && s,
    u = c === void 0 ? `default` : c,
    d = _(),
    f = (0, Q.useRef)(null),
    p = (0, Q.useRef)(null),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () =>
        Te(``, {
          defaultTextKind: `prompt`,
          enableFileMentions: !0,
          enableSelectedTextLinks: !0,
          enableSkillMentions: !1,
          enterBehavior: `newline`,
          restoreMarkdownLinksAsTextLinks: !0,
        })),
      (t[0] = m))
    : (m = t[0]);
  let [h] = (0, Q.useState)(m),
    g;
  t[1] === n ? (g = t[2]) : ((g = B(n)), (t[1] = n), (t[2] = g));
  let v = g,
    y;
  t[3] !== v || t[4] !== i ? ((y = v ? [] : i), (t[3] = v), (t[4] = i), (t[5] = y)) : (y = t[5]);
  let b = y,
    x = me(h),
    S;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = { enabled: !0, hostId: w }), (t[6] = S))
    : (S = t[6]);
  let C = be(S),
    T;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { enabled: !0, hostId: w }), (t[7] = T))
    : (T = t[7]);
  let E = re(T),
    D;
  t[8] !== E || t[9] !== b
    ? ((D = { enabled: E, hostId: w, roots: b }), (t[8] = E), (t[9] = b), (t[10] = D))
    : (D = t[10]);
  let { data: O } = R(D),
    k;
  t[11] === E ? (k = t[12]) : ((k = { enabled: E, hostId: w }), (t[11] = E), (t[12] = k));
  let A = fe(k),
    j;
  t[13] === A ? (j = t[14]) : ((j = { computerUseAvailability: A, hostId: w }), (t[13] = A), (t[14] = j));
  let M = Fe(j),
    N;
  t[15] === E ? (N = t[16]) : ((N = { enabled: E, hostId: w }), (t[15] = E), (t[16] = N));
  let P = se(N),
    F;
  t[17] === E ? (F = t[18]) : ((F = { enabled: E, hostId: w }), (t[17] = E), (t[18] = F));
  let te = z(F),
    I,
    L;
  t[19] !== A || t[20] !== P || t[21] !== te || t[22] !== O || t[23] !== M
    ? ((I =
        O == null
          ? void 0
          : de({
              plugins: O,
              isComputerUseAvailable: A.available,
              isExternalBrowserUseAvailable: P.available,
              isInAppBrowserUseAvailable: te.available,
              isMessagesAvailable: M.available,
            })),
      (L = I == null ? void 0 : ce(I)),
      (t[19] = A),
      (t[20] = P),
      (t[21] = te),
      (t[22] = O),
      (t[23] = M),
      (t[24] = I),
      (t[25] = L))
    : ((I = t[24]), (L = t[25]));
  let ne = L != null,
    V;
  t[26] === ne ? (V = t[27]) : ((V = { enabled: ne }), (t[26] = ne), (t[27] = V));
  let { nativeApps: H } = De(V),
    U;
  t[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((U = { enabled: !0 }), (t[28] = U)) : (U = t[28]);
  let { skills: ie } = Ce(b, void 0, U),
    ae,
    oe;
  (t[29] !== C || t[30] !== I || t[31] !== ie || t[32] !== H || t[33] !== h
    ? ((ae = () => {
        h.syncMentionMetadata({ skills: ie, apps: C, plugins: I ?? [], nativeApps: H });
      }),
      (oe = [C, I, ie, H, h]),
      (t[29] = C),
      (t[30] = I),
      (t[31] = ie),
      (t[32] = H),
      (t[33] = h),
      (t[34] = ae),
      (t[35] = oe))
    : ((ae = t[34]), (oe = t[35])),
    (0, Q.useEffect)(ae, oe));
  let le, ue;
  (t[36] !== n.prompt || t[37] !== h
    ? ((le = () => {
        h.getText() !== n.prompt && h.setPromptText(n.prompt);
      }),
      (ue = [n.prompt, h]),
      (t[36] = n.prompt),
      (t[37] = h),
      (t[38] = le),
      (t[39] = ue))
    : ((le = t[38]), (ue = t[39])),
    (0, Q.useEffect)(le, ue));
  let pe, he;
  (t[40] !== h || t[41] !== r
    ? ((pe = () =>
        Ee(h.view, () => {
          let e = h.getText();
          r((t) => (t.prompt === e ? t : { ...t, prompt: e }));
        })),
      (he = [h, r]),
      (t[40] = h),
      (t[41] = r),
      (t[42] = pe),
      (t[43] = he))
    : ((pe = t[42]), (he = t[43])),
    (0, Q.useEffect)(pe, he));
  let ge;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = () => {
        f.current?.requestSubmit();
      }),
      (t[44] = ge))
    : (ge = t[44]);
  let _e = ge,
    ve = u === `compact` ? lt : ct,
    ye = x.ui?.active ?? !1,
    xe = x.ui?.query ?? ``,
    Se = x.ui?.source ?? null,
    W;
  t[45] !== n.model ||
  t[46] !== x.addMention ||
  t[47] !== x.closeAutocomplete ||
  t[48] !== x.setSelectedMention ||
  t[49] !== b ||
  t[50] !== xe ||
  t[51] !== Se
    ? ((W = (0, $.jsx)(Pe, {
        hostId: w,
        onAddContext: x.addMention,
        onRequestClose: x.closeAutocomplete,
        onUpdateSelectedMention: x.setSelectedMention,
        query: xe,
        fileSearchRootPaths: b,
        selectedModel: n.model,
        skillRoots: b,
        source: Se,
      })),
      (t[45] = n.model),
      (t[46] = x.addMention),
      (t[47] = x.closeAutocomplete),
      (t[48] = x.setSelectedMention),
      (t[49] = b),
      (t[50] = xe),
      (t[51] = Se),
      (t[52] = W))
    : (W = t[52]);
  let G;
  t[53] !== x.ui || t[54] !== h || t[55] !== ye || t[56] !== W
    ? ((G = (0, $.jsx)(ee, {
        anchorRef: p,
        composerController: h,
        isActive: ye,
        mentionUiState: x.ui,
        placement: `bottom`,
        portalRoot: `body`,
        zIndexClassName: `z-[10000]`,
        children: W,
      })),
      (t[53] = x.ui),
      (t[54] = h),
      (t[55] = ye),
      (t[56] = W),
      (t[57] = G))
    : (G = t[57]);
  let K;
  t[58] === d
    ? (K = t[59])
    : ((K = d.formatMessage({
        id: `settings.automations.promptLabel`,
        defaultMessage: `Prompt`,
        description: `Label for automation prompt input`,
      })),
      (t[58] = d),
      (t[59] = K));
  let we = u === `compact` ? `4rem` : `16rem`,
    q;
  t[60] === d
    ? (q = t[61])
    : ((q = d.formatMessage({
        id: `settings.automations.promptPlaceholderChatGPT`,
        defaultMessage: `Describe what ChatGPT should do`,
        description: `Placeholder text for the scheduled task prompt input`,
      })),
      (t[60] = d),
      (t[61] = q));
  let J;
  t[62] === x.handleMentionEvent
    ? (J = t[63])
    : ((J = (e) => {
        Me(e, { onAtMention: x.handleMentionEvent, onSkillMention: et });
      }),
      (t[62] = x.handleMentionEvent),
      (t[63] = J));
  let Y;
  t[64] !== l || t[65] !== h || t[66] !== ve || t[67] !== K || t[68] !== we || t[69] !== q || t[70] !== J
    ? ((Y = (0, $.jsx)(Ie, {
        className: ve,
        composerController: h,
        ariaLabel: K,
        minHeight: we,
        disableAutoFocus: l,
        placeholder: q,
        onSuggestionHandler: J,
        onSubmit: _e,
      })),
      (t[64] = l),
      (t[65] = h),
      (t[66] = ve),
      (t[67] = K),
      (t[68] = we),
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
          children: (0, $.jsxs)(`div`, { ref: p, className: `relative`, children: [G, Y] }),
        }),
      })),
      (t[72] = G),
      (t[73] = Y),
      (t[74] = X))
    : (X = t[74]);
  let Oe;
  return (
    t[75] !== o || t[76] !== a || t[77] !== X
      ? ((Oe = (0, $.jsx)(`form`, {
          id: o,
          ref: f,
          className: `flex flex-col gap-0`,
          onSubmit: a,
          children: X,
        })),
        (t[75] = o),
        (t[76] = a),
        (t[77] = X),
        (t[78] = Oe))
      : (Oe = t[78]),
    Oe
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
              children: (0, $.jsx)(u, {
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
              ? (0, $.jsx)(u, {
                  id: `settings.automations.banner.defaultHowTo.readOnly`,
                  defaultMessage: `Scheduled tasks run with your default sandbox settings, which are set to read-only. Tool calls will fail if they require modifying files, accessing network, or working with apps on your computer. Consider updating sandbox settings to workspace write.`,
                  description: `Follow-up guidance shown in the scheduled task editor when default sandbox mode is read-only`,
                })
              : (0, $.jsx)(u, {
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
    href: ne,
    rel: `noreferrer`,
    target: `_blank`,
    children: t,
  });
}
function rt(e) {
  let t = Array.isArray(e) ? e.join(``) : e;
  return (0, $.jsx)(`a`, {
    className: `text-danger underline underline-offset-2 hover:underline`,
    href: ne,
    rel: `noreferrer`,
    target: `_blank`,
    children: t,
  });
}
function it(e) {
  let n = (0, Z.c)(60),
    {
      field: r,
      catalog: a,
      variant: o,
      selectedModel: s,
      reasoningEffort: l,
      align: f,
      className: p,
      onSelect: m,
    } = e,
    h = a === void 0 ? `local` : a,
    v = o === void 0 ? `default` : o,
    y = f === void 0 ? `start` : f,
    b = _(),
    ee = (0, Q.useRef)(null),
    x = h === `local`,
    S;
  n[0] === s ? (S = n[1]) : ((S = s == null ? void 0 : new Set([s])), (n[0] = s), (n[1] = S));
  let w;
  n[2] !== x || n[3] !== S
    ? ((w = { enabled: x, additionalAvailableModels: S }), (n[2] = x), (n[3] = S), (n[4] = w))
    : (w = n[4]);
  let T = G(w),
    E = We(h === `cloud`),
    D = h === `cloud` ? E : T,
    O = h === `cloud` ? E.data : T.data?.models;
  if (O == null && D.isError) {
    let e = v === `form` && `not-disabled:not-aria-disabled:text-secondary`,
      r;
    n[5] === e ? (r = n[6]) : ((r = C(e)), (n[5] = e), (n[6] = r));
    let i;
    n[7] === D ? (i = n[8]) : ((i = () => void D.refetch()), (n[7] = D), (n[8] = i));
    let a;
    n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(u, {
          id: `automations.models.retry`,
          defaultMessage: `Couldn’t load models. Retry`,
          description: `Retry loading the automation model catalog after a failure`,
        })),
        (n[9] = a))
      : (a = n[9]);
    let o;
    return (
      n[10] !== r || n[11] !== i
        ? ((o = (0, $.jsx)(t, {
            className: r,
            color: `ghostTertiary`,
            size: `formValue`,
            onClick: i,
            children: a,
          })),
          (n[10] = r),
          (n[11] = i),
          (n[12] = o))
        : (o = n[12]),
      o
    );
  }
  let k, A, j, M, N, P, F, I, L, R;
  if (
    n[13] !== y ||
    n[14] !== p ||
    n[15] !== r ||
    n[16] !== b ||
    n[17] !== O ||
    n[18] !== m ||
    n[19] !== l ||
    n[20] !== s ||
    n[21] !== v
  ) {
    let e = O?.find((e) => e.model === s) ?? null,
      a = c({ model: e, reasoningEffort: l }),
      o = V(a) ? a : null,
      f = Ve(O, s ?? ``).filter(ot),
      h = f.length === 0 ? null : Be(o, f),
      _ = O == null || (r === `reasoning` && (e == null || f.length === 0)),
      x;
    n[32] !== r || n[33] !== b
      ? ((x =
          r === `model`
            ? b.formatMessage({
                id: `settings.automations.model.ariaLabel`,
                defaultMessage: `Model`,
                description: `Aria label for the scheduled task model dropdown`,
              })
            : b.formatMessage({
                id: `settings.automations.reasoning.ariaLabel`,
                defaultMessage: `Reasoning`,
                description: `Aria label for the scheduled task reasoning level dropdown`,
              })),
        (n[32] = r),
        (n[33] = b),
        (n[34] = x))
      : (x = n[34]);
    let S = x;
    ((k = i),
      (R = !0),
      (A = y),
      (j = ee),
      n[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((M = (e) => {
            let t = ee.current?.querySelector(`[data-selected="true"]`);
            t != null &&
              (e.preventDefault(),
              t.focus({ preventScroll: !0 }),
              requestAnimationFrame(() => {
                t.scrollIntoView({ block: `nearest` });
              }));
          }),
          (n[35] = M))
        : (M = n[35]),
      (N = `menuNarrow`),
      (P = _));
    let w = v === `form` && `not-disabled:not-aria-disabled:text-secondary`,
      T;
    n[36] !== p || n[37] !== w
      ? ((T = C(`min-w-0`, w, p)), (n[36] = p), (n[37] = w), (n[38] = T))
      : (T = n[38]);
    let E = v === `form` ? `ghostTertiary` : `ghost`,
      D = v === `form` ? `formValue` : `composerSm`,
      z =
        r === `model`
          ? s != null && s.trim().length > 0
            ? (0, $.jsx)(Re, {
                displayName: e?.displayName ?? s,
                labelClassName: v === "default" ? `text-default` : void 0,
                model: s,
              })
            : O == null
              ? (0, $.jsx)(`span`, {
                  className: C(`truncate`, v === "default" && `text-default`),
                  children: (0, $.jsx)(u, {
                    id: `settings.automations.model.loading`,
                    defaultMessage: `Loading model`,
                    description: `Fallback label while automation model options are loading`,
                  }),
                })
              : (0, $.jsx)(`span`, {
                  className: C(`truncate`, v === "default" && `text-default`),
                  children: (0, $.jsx)(u, {
                    id: `settings.automations.model.select`,
                    defaultMessage: `Select model`,
                    description: `Placeholder for the scheduled task model dropdown`,
                  }),
                })
          : (0, $.jsx)(`span`, {
              className: v === "default" ? `text-default` : void 0,
              children:
                h == null
                  ? (0, $.jsx)(u, {
                      id: `settings.automations.reasoning.unavailable`,
                      defaultMessage: `Unavailable`,
                      description: `Reasoning effort dropdown label when the selected task model has no supported effort options`,
                    })
                  : (0, $.jsx)(Ue, { effort: h }),
            }),
      B;
    (n[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((B = (0, $.jsx)(d, { className: `text-tertiary` })), (n[39] = B))
      : (B = n[39]),
      n[40] !== S || n[41] !== _ || n[42] !== T || n[43] !== E || n[44] !== D || n[45] !== z
        ? ((F = (0, $.jsxs)(t, {
            "aria-label": S,
            className: T,
            color: E,
            disabled: _,
            size: D,
            children: [z, B],
          })),
          (n[40] = S),
          (n[41] = _),
          (n[42] = T),
          (n[43] = E),
          (n[44] = D),
          (n[45] = z),
          (n[46] = F))
        : (F = n[46]),
      (I = `vertical-scroll-fade-mask flex max-h-[250px] flex-col overflow-y-auto`),
      (L =
        r === `model`
          ? O?.map((e) =>
              (0, $.jsx)(
                g.Item,
                {
                  "data-selected": e.model === s,
                  rightIconAsset: e.model === s ? te : void 0,
                  onSelect: () => {
                    let t = c({ model: e, reasoningEffort: l }),
                      n = Ve(O, e.model).filter(at);
                    m(e.model, n.length === 0 ? null : Be(t, n));
                  },
                  children: (0, $.jsx)(Re, { displayName: e.displayName, model: e.model }),
                },
                e.model,
              ),
            )
          : f.map((e) =>
              (0, $.jsx)(
                g.Item,
                {
                  "data-selected": e.reasoningEffort === h,
                  rightIconAsset: e.reasoningEffort === h ? te : void 0,
                  onSelect: () => {
                    s != null && m(s, e.reasoningEffort);
                  },
                  children: (0, $.jsx)(Ue, { effort: e.reasoningEffort }),
                },
                e.reasoningEffort,
              ),
            )),
      (n[13] = y),
      (n[14] = p),
      (n[15] = r),
      (n[16] = b),
      (n[17] = O),
      (n[18] = m),
      (n[19] = l),
      (n[20] = s),
      (n[21] = v),
      (n[22] = k),
      (n[23] = A),
      (n[24] = j),
      (n[25] = M),
      (n[26] = N),
      (n[27] = P),
      (n[28] = F),
      (n[29] = I),
      (n[30] = L),
      (n[31] = R));
  } else
    ((k = n[22]),
      (A = n[23]),
      (j = n[24]),
      (M = n[25]),
      (N = n[26]),
      (P = n[27]),
      (F = n[28]),
      (I = n[29]),
      (L = n[30]),
      (R = n[31]));
  let z;
  n[47] !== I || n[48] !== L
    ? ((z = (0, $.jsx)(`div`, { className: I, children: L })), (n[47] = I), (n[48] = L), (n[49] = z))
    : (z = n[49]);
  let B;
  return (
    n[50] !== k ||
    n[51] !== A ||
    n[52] !== j ||
    n[53] !== M ||
    n[54] !== N ||
    n[55] !== P ||
    n[56] !== F ||
    n[57] !== z ||
    n[58] !== R
      ? ((B = (0, $.jsx)(k, {
          modal: R,
          align: A,
          contentRef: j,
          onOpenAutoFocus: M,
          contentWidth: N,
          disabled: P,
          triggerButton: F,
          children: z,
        })),
        (n[50] = k),
        (n[51] = A),
        (n[52] = j),
        (n[53] = M),
        (n[54] = N),
        (n[55] = P),
        (n[56] = F),
        (n[57] = z),
        (n[58] = R),
        (n[59] = B))
      : (B = n[59]),
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
    ((Z = M()),
      b(),
      y(),
      k(),
      ae(),
      (Q = I()),
      T(),
      he(),
      ie(),
      Xe(),
      F(),
      _e(),
      le(),
      He(),
      Le(),
      ze(),
      W(),
      ye(),
      L(),
      j(),
      r(),
      m(),
      x(),
      pe(),
      Ne(),
      oe(),
      X(),
      ve(),
      Se(),
      U(),
      ge(),
      K(),
      Y(),
      J(),
      xe(),
      ($ = P()),
      (st = `text-default placeholder:text-tertiary m-0 w-full min-w-0 appearance-none bg-transparent p-0 text-lg leading-tight outline-none`),
      (ct = C(
        `text-default placeholder:text-tertiary w-full text-base outline-none`,
        `max-h-[32rem]`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:px-0`,
        `[&_.ProseMirror]:py-0`,
      )),
      (lt = C(
        `text-default placeholder:text-tertiary w-full text-base outline-none`,
        `max-h-64`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:p-4`,
      )));
  }))();
}
export { ut as a, We as c, Ze as i, it as n, Ke as o, Qe as r, Xe as s, $e as t };
//# sourceMappingURL=automation-dialog-8a01873d44d2.js.map
