const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./artifact-session-binding-8b097de08caa.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./api-d4f3b59d2f9b.js",
      "./artifact-session-binding-6769673df157.js",
      "./collab-schema-1362362c8a67.js",
      "./progress-1945f894d035.js",
      "./generation-progress-heading-f87a2dcbfbb5.js",
      "./mcp-tool-activity-label-220d2d98d4ad.js",
      "./state-52f12724d28a.js",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./collaboration-schemas-9ad991c40494.js",
      "./worker-preparation-d9be38efd913.js",
      "./controller-worker-ea4bbc58c1e6.js",
      "./worker-34f50f45f328.js",
      "./snapshot-7d3edd47ebe2.js",
      "./document-c6f04e376b44.js",
      "./presentation-c2faa0e77c2e.js",
      "./spreadsheet-b1cd26f1820c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AS as t,
  Cz as n,
  Ixt as r,
  Kat as i,
  MS as a,
  Myt as o,
  PS as s,
  Pxt as c,
  Tz as l,
  VDt as u,
  Vxt as d,
  bz as f,
  fPt as p,
  gpt as m,
  iot as h,
  jDt as g,
  lgt as _,
  pPt as v,
  qat as y,
  rst as b,
  vzt as x,
  wpt as S,
  wz as ee,
  xMt as te,
  xz as ne,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  $dn as re,
  Cen as ie,
  Cwr as T,
  D9t as ae,
  Dor as oe,
  E9t as se,
  F2t as ce,
  FAt as le,
  GTr as ue,
  HBt as de,
  HEr as E,
  I2t as fe,
  Lqt as pe,
  MCn as D,
  Men as me,
  NB as O,
  OB as he,
  PAt as ge,
  PB as _e,
  Pen as ve,
  Pqt as ye,
  QBt as be,
  UBt as xe,
  WEr as Se,
  XBt as Ce,
  YMr as we,
  _tt as Te,
  efn as Ee,
  fSn as De,
  fg as Oe,
  fur as ke,
  gCr as k,
  g_r as Ae,
  gwr as je,
  lSn as A,
  len as j,
  ltt as M,
  m_r as Me,
  man as N,
  nFr as Ne,
  nTn as Pe,
  oFr as Fe,
  pan as P,
  pg as F,
  pur as Ie,
  qwr as Le,
  sCr as Re,
  tNr as ze,
  tTn as Be,
  tTr as Ve,
  v8n as He,
  vzt as Ue,
  wB as We,
  wor as Ge,
  yCr as Ke,
  yzt as qe,
  zCn as Je,
} from "./app-initial-5851df3f6cb1.js";
import {
  Af as Ye,
  Eb as Xe,
  J as Ze,
  Jc as Qe,
  Kc as $e,
  Mf as et,
  Ob as I,
  Pm as tt,
  Xc as nt,
  Y as L,
  Yc as rt,
  bl as it,
  m as at,
  nt as ot,
  p as st,
  rt as ct,
  vl as lt,
  xl as ut,
  yl as R,
} from "./app-primary-fe8a450b3b04.js";
import { a as dt, n as ft, r as pt, t as z } from "./launch-defaults-a1836c062b43.js";
import { n as B, t as mt } from "./work-run-location-control-b8906d5da83b.js";
import { r as V, t as ht } from "./error-21e6fb16598c.js";
import { l as gt, n as _t } from "./prompt-chat-13929d3098ec.js";
import { n as H, t as vt } from "./plugin-service-preview-baa27984f338.js";
function yt(e) {
  let t = (0, Et.c)(7),
    n = r(Re),
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = k(n) == null && o(n.value.clientThreadId) ? n.value.clientThreadId : null),
      (t[0] = n),
      (t[1] = i));
  let a = i,
    s;
  t[2] === e ? (s = t[3]) : ((s = (0, W.jsx)(bt, { ...e })), (t[2] = e), (t[3] = s));
  let c;
  return (
    t[4] !== a || t[5] !== s
      ? ((c = (0, W.jsx)(P, { value: a, children: s })), (t[4] = a), (t[5] = s), (t[6] = c))
      : (c = t[6]),
    c
  );
}
function bt(e) {
  let n = (0, Et.c)(145),
    {
      artifactBindingRef: a,
      composerProps: c,
      context: f,
      hostId: p,
      presentation: g,
      isThreadHistoryLoading: v,
      isThreadResuming: y,
      isThreadUnavailable: b,
      isResponseInProgress: x,
      session: S,
      onConversationCreated: te,
      onSubmissionStarted: C,
      onPromptSubmitStart: re,
      isSessionCurrent: T,
      reserveContent: ae,
      selectedProject: ce,
      onProjectChange: le,
      aboveComposerContent: ue,
    } = e,
    de = p === void 0 ? h : p,
    E = ae === void 0 || ae,
    pe = ce === void 0 ? null : ce,
    D = r(Re),
    O = r(je),
    ge = d(Je),
    ve = d(ie),
    Ce;
  n[0] === D.value.clientThreadId
    ? (Ce = n[1])
    : ((Ce = o(D.value.clientThreadId) ? D.value.clientThreadId : null),
      (n[0] = D.value.clientThreadId),
      (n[1] = Ce));
  let De = w(Pe, Ce),
    Oe;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((Oe = new WeakMap()), (n[2] = Oe)) : (Oe = n[2]);
  let ke = (0, U.useRef)(Oe),
    Ae = w(Ee, D.value.clientThreadId),
    A = pe ?? Ae,
    j;
  n[3] !== Ae || n[4] !== O || n[5] !== D.value.clientThreadId || n[6] !== le
    ? ((j =
        le ??
        (Ae == null
          ? void 0
          : (e) => {
              O.set(Ee, D.value.clientThreadId, e);
            })),
      (n[3] = Ae),
      (n[4] = O),
      (n[5] = D.value.clientThreadId),
      (n[6] = le),
      (n[7] = j))
    : (j = n[7]);
  let M = j,
    Me = l(),
    N = u(),
    Fe = d(Se),
    P = (0, U.useRef)(null),
    F = a ?? P,
    Le;
  n[8] === a
    ? (Le = n[9])
    : ((Le = () => {
        if (a == null)
          return () => {
            (P.current?.dispose(), (P.current = null));
          };
      }),
      (n[8] = a),
      (n[9] = Le));
  let ze = S?.accountId,
    Be = S?.pageId,
    He = S?.sourceId,
    Ue = S?.clientThreadId,
    We = f?.documentType,
    Ge;
  (n[10] !== a || n[11] !== He || n[12] !== Ue || n[13] !== We || n[14] !== ze || n[15] !== Be
    ? ((Ge = [a, ze, Be, He, Ue, We]),
      (n[10] = a),
      (n[11] = He),
      (n[12] = Ue),
      (n[13] = We),
      (n[14] = ze),
      (n[15] = Be),
      (n[16] = Ge))
    : (Ge = n[16]),
    (0, U.useLayoutEffect)(Le, Ge));
  let Ke = d(he),
    Ze = A == null ? `~` : void 0,
    Qe = M != null,
    et;
  n[17] !== A || n[18] !== Ze || n[19] !== Qe
    ? ((et = {
        defaultCwd: Ze,
        existingWorkspaceRoot: null,
        homeRemoteProject: void 0,
        selectedProject: A,
        useScopedProject: Qe,
      }),
      (n[17] = A),
      (n[18] = Ze),
      (n[19] = Qe),
      (n[20] = et))
    : (et = n[20]);
  let { target: I } = w(lt, et),
    { authMethod: nt } = Ie(),
    L = d(pt),
    rt = d(ft),
    at = w(dt, A),
    ot = I.hostId !== h,
    st;
  n[21] !== nt || n[22] !== x || n[23] !== ot || n[24] !== I
    ? ((st = { authMethod: nt, target: I, isRemoteProject: ot, isResponseInProgress: x }),
      (n[21] = nt),
      (n[22] = x),
      (n[23] = ot),
      (n[24] = I),
      (n[25] = st))
    : (st = n[25]);
  let ct = w(it, st),
    ut = d(se),
    R = c == null ? L && at.useAsbDirect : c.useAsbDirect === !0,
    z;
  n[26] !== ut || n[27] !== de || n[28] !== M || n[29] !== I.hostId || n[30] !== R
    ? ((z = de),
      M != null && (z = ut ? _ : I.hostId),
      (n[26] = ut),
      (n[27] = de),
      (n[28] = M),
      (n[29] = I.hostId),
      (n[30] = R),
      (n[31] = z))
    : (z = n[31]);
  let B = z === `local` && !ut,
    V = B
      ? (f?.localPageContextDeveloperInstructions ?? f?.pageContextDeveloperInstructions)
      : f?.pageContextDeveloperInstructions,
    _t = w(Ne, z),
    H = g?.onSubmitStart,
    yt = g?.isDockedTop,
    bt = g?.isMinimized,
    G;
  n[32] === D ? (G = n[33]) : ((G = k(D)), (n[32] = D), (n[33] = G));
  let Ot = G,
    K = Ot == null && De == null,
    { modelSettings: kt } = be(Ot),
    { serviceTierSettings: At } = qe(Ot),
    jt;
  n[34] !== z || n[35] !== kt.model || n[36] !== D || n[37] !== At
    ? ((jt = () => ({ model: kt.model, serviceTier: D.get(fe, z) ? null : At.serviceTierForRequest })),
      (n[34] = z),
      (n[35] = kt.model),
      (n[36] = D),
      (n[37] = At),
      (n[38] = jt))
    : (jt = n[38]);
  let Mt = ne(jt),
    Nt;
  n[39] !== Mt ||
  n[40] !== T ||
  n[41] !== re ||
  n[42] !== H ||
  n[43] !== O ||
  n[44] !== D ||
  n[45] !== A ||
  n[46] !== S
    ? ((Nt = (e) =>
        S == null
          ? wt
          : gt(
              O,
              S,
              async (t) => {
                let n = () => {
                  if (
                    D.value.kind !== `local` ||
                    D.value.clientThreadId !== S.clientThreadId ||
                    me(D) ||
                    T?.() === !1
                  )
                    throw new ht(`changed`);
                };
                (n(), re(), H?.(), n(), await e(t));
              },
              Mt,
              A,
              () => me(D),
            )),
      (n[39] = Mt),
      (n[40] = T),
      (n[41] = re),
      (n[42] = H),
      (n[43] = O),
      (n[44] = D),
      (n[45] = A),
      (n[46] = S),
      (n[47] = Nt))
    : (Nt = n[47]);
  let Pt = Nt,
    Ft;
  n[48] !== yt || n[49] !== bt || n[50] !== E || n[51] !== Me
    ? ((Ft = () => (!E || bt || yt ? 0 : ee(t().reduce(Ct, 0), Me))),
      (n[48] = yt),
      (n[49] = bt),
      (n[50] = E),
      (n[51] = Me),
      (n[52] = Ft))
    : (Ft = n[52]);
  let It = (0, U.useSyncExternalStore)(s, Ft, St),
    Lt,
    Rt;
  (n[53] !== It || n[54] !== E || n[55] !== O
    ? ((Lt = () => {
        if (E) return (Te(O, It), () => Te(O, 0));
      }),
      (Rt = [It, E, O]),
      (n[53] = It),
      (n[54] = E),
      (n[55] = O),
      (n[56] = Lt),
      (n[57] = Rt))
    : ((Lt = n[56]), (Rt = n[57])),
    (0, U.useLayoutEffect)(Lt, Rt));
  let zt;
  n[58] !== L || n[59] !== D || n[60] !== at
    ? ((zt = L
        ? (0, W.jsx)(mt, {
            cloudUsesLocalExecutor: !1,
            isLocalExecutorStarting: !1,
            runLocationState: at.runLocation,
            onRunLocationChange: (e) => D.set(xe, e),
          })
        : void 0),
      (n[58] = L),
      (n[59] = D),
      (n[60] = at),
      (n[61] = zt))
    : (zt = n[61]);
  let q = zt,
    Bt;
  n[62] !== ue ||
  n[63] !== c ||
  n[64] !== N ||
  n[65] !== K ||
  n[66] !== x ||
  n[67] !== L ||
  n[68] !== ct ||
  n[69] !== M ||
  n[70] !== g ||
  n[71] !== A ||
  n[72] !== R ||
  n[73] !== q
    ? ((Bt = c ?? {
        ...tt(g),
        aboveComposerContent: ue,
        aboveComposerContentLayout: `header`,
        composerModeAvailability: L ? Xe : ct,
        useAsbDirect: R,
        hideRunLocationDropdownOverride: L,
        homeLeadingControl: K ? void 0 : q,
        defaultCwd: A == null ? `~` : void 0,
        isResponseInProgress: x,
        newConversationNavigation: `stay`,
        selectedProject: A,
        onProjectChange: M,
        placeholderText: N.formatMessage({
          id: `quickChat.genericComposerPlaceholder`,
          defaultMessage: `Ask anything…`,
          description: `Placeholder for the shared floating chat composer when no Page is selected`,
        }),
      }),
      (n[62] = ue),
      (n[63] = c),
      (n[64] = N),
      (n[65] = K),
      (n[66] = x),
      (n[67] = L),
      (n[68] = ct),
      (n[69] = M),
      (n[70] = g),
      (n[71] = A),
      (n[72] = R),
      (n[73] = q),
      (n[74] = Bt))
    : (Bt = n[74]);
  let J = Bt,
    Y;
  n[75] !== K ||
  n[76] !== ve ||
  n[77] !== rt ||
  n[78] !== L ||
  n[79] !== M ||
  n[80] !== A ||
  n[81] !== I.cwd ||
  n[82] !== I.hostId ||
  n[83] !== q
    ? ((Y =
        K && rt
          ? {
              kind: `home`,
              mode: L ? `work` : void 0,
              showUtilityBarWhenCompact: !0,
              chrome: L
                ? {
                    actionBarControls: (0, W.jsx)(Tt, {
                      cwd: I.cwd ?? `~`,
                      hostId: I.hostId,
                      selectedProject: A,
                      onProjectChange: M,
                    }),
                    actionBarPosition: `above`,
                    actionBarVisible: !ve,
                    actionBarTrailingControls: q,
                  }
                : void 0,
            }
          : { kind: `thread` }),
      (n[75] = K),
      (n[76] = ve),
      (n[77] = rt),
      (n[78] = L),
      (n[79] = M),
      (n[80] = A),
      (n[81] = I.cwd),
      (n[82] = I.hostId),
      (n[83] = q),
      (n[84] = Y))
    : (Y = n[84]);
  let Vt = g == null ? `multiline` : `auto-single-line`,
    Ht = K && rt && !L && !ve,
    Ut = ge === `content` || f != null || J.disableAutoFocus,
    Wt = f == null ? void 0 : `page`,
    Gt = v || c?.isThreadHistoryLoading,
    X;
  n[85] !== J || n[86] !== f || n[87] !== N
    ? ((X =
        f == null
          ? J.placeholderText
          : (f.composerPlaceholder ??
            N.formatMessage(
              {
                id: `codex.page.chat.placeholder.byDocumentType`,
                defaultMessage: `{documentType, select, granola_presentation {Work with this slide…} granola_workbook {Work with this sheet…} other {Work with this page…}}`,
                description: `Placeholder in the floating Page chat composer. documentType selects slide, sheet, or page for the current document.`,
              },
              { documentType: f.documentType ?? `page` },
            ))),
      (n[85] = J),
      (n[86] = f),
      (n[87] = N),
      (n[88] = X))
    : (X = n[88]);
  let Kt = f == null ? void 0 : `page_composer`,
    Z;
  n[89] !== f || n[90] !== V
    ? ((Z = () =>
        f == null
          ? null
          : {
              codex_apps_active_page: {
                kind: `application`,
                value: [
                  `The following Page is selected for this message. It may differ from the Page selected for earlier messages.`,
                  V,
                  f.getAdditionalUserContext?.() ??
                    (f.documentType == null
                      ? void 0
                      : `The user's current document view was unavailable when they sent this message.`),
                ].filter(xt).join(`

`),
              },
            }),
      (n[89] = f),
      (n[90] = V),
      (n[91] = Z))
    : (Z = n[91]);
  let Q;
  n[92] !== _t || n[93] !== f || n[94] !== V || n[95] !== S || n[96] !== Fe?.existingThreadVoiceEnabled
    ? ((Q =
        S != null && f != null && V != null && o(S.clientThreadId) && Fe?.existingThreadVoiceEnabled && _e(_t)
          ? { ...S, clientThreadId: S.clientThreadId, developerInstructions: V }
          : void 0),
      (n[92] = _t),
      (n[93] = f),
      (n[94] = V),
      (n[95] = S),
      (n[96] = Fe?.existingThreadVoiceEnabled),
      (n[97] = Q))
    : (Q = n[97]);
  let qt = f == null || O.value.persistentWorkspace != null ? void 0 : `page:${f.sourceId}`,
    $;
  n[98] !== F || n[99] !== f?.documentType || n[100] !== z || n[101] !== T || n[102] !== D || n[103] !== S
    ? (($ = async (e) => {
        if (S == null) return;
        let t = ke.current.get(S),
          n = () => D.get(oe) === S.accountId && D.get(we) === t;
        if (
          !n() ||
          (f?.documentType != null && T?.() === !1) ||
          (z === `local` && (await F.current?.activate(e)), !n())
        )
          throw new ht(`changed`);
      }),
      (n[98] = F),
      (n[99] = f?.documentType),
      (n[100] = z),
      (n[101] = T),
      (n[102] = D),
      (n[103] = S),
      (n[104] = $))
    : ($ = n[104]);
  let Jt;
  n[105] !== a ||
  n[106] !== F ||
  n[107] !== f ||
  n[108] !== z ||
  n[109] !== N ||
  n[110] !== T ||
  n[111] !== C ||
  n[112] !== D ||
  n[113] !== S ||
  n[114] !== B
    ? ((Jt = async (e, t) => {
        if ((C?.(), S != null && k(D) == null && ke.current.set(S, D.get(we)), f == null || S == null))
          return e;
        if (T?.() === !1) throw new ht(`changed`);
        let n = {
          ...e,
          pageContext: { pageId: f.pageId },
          firstTurnConfigOverrides: { ...e.firstTurnConfigOverrides, [`features.${m}`]: !0, ...vt() },
        };
        if (
          e.cloudThreadPrototype ||
          z !== `local` ||
          (f.documentType !== `granola_workbook` &&
            f.documentType !== `granola_presentation` &&
            f.documentType !== `granola_whiteboard`)
        )
          return n;
        let r = N.formatMessage({
          id: `codex.page.artifactSession.editingUnavailable`,
          defaultMessage: `Document editing is unavailable. Restart or update the app, then try again.`,
          description: `Error before sending a Canvas, Sheet, or Presentation chat message when the app's editing runtime cannot connect to the document. The user should restart or update the app before retrying.`,
        });
        if (t?.executionMode === `worktree` || i.artifactSessions == null) {
          if (B) throw Error(r);
          return n;
        }
        let s = (e) => {
            let t = D.get(ye);
            if (
              !(T == null
                ? t?.accountId === S.accountId &&
                  t.pageId === S.pageId &&
                  t.sourceId === S.sourceId &&
                  t.clientThreadId === S.clientThreadId
                : T()) ||
              (e != null &&
                (k(D) ??
                  (T == null ? t?.conversationId : S.conversationId) ??
                  (o(S.clientThreadId) ? D.get(Ve, S.clientThreadId) : null)) !== e)
            )
              throw new ht(`changed`);
          },
          { createPageArtifactSessionBinding: c, getPageArtifactSessionContext: l } = await Dt();
        s();
        let u = F.current;
        u ??
          ((u = c(D, { ...S, validateCurrent: s }, f.documentType)),
          a == null ? (P.current = u) : (a.current = u));
        let d = await u.prepare();
        if (d == null) {
          if (f.documentType === `granola_presentation` && !B)
            return (u.dispose(), a == null ? (P.current = null) : (a.current = null), n);
          throw Error(r);
        }
        let { artifactRef: p, canUploadVisualization: h, canUploadImage: g, canvasSkillPath: _ } = d,
          v = k(D);
        return (
          v != null && (await u.activate(v)),
          {
            ...n,
            additionalContext: {
              ...n.additionalContext,
              codex_apps_page_artifact: { kind: `application`, value: l(f.documentType, p, h, g, _) },
            },
          }
        );
      }),
      (n[105] = a),
      (n[106] = F),
      (n[107] = f),
      (n[108] = z),
      (n[109] = N),
      (n[110] = T),
      (n[111] = C),
      (n[112] = D),
      (n[113] = S),
      (n[114] = B),
      (n[115] = Jt))
    : (Jt = n[115]);
  let Yt = c?.submitDisabled || f?.disableSubmit || (f != null && Ke) || v || b,
    Xt;
  n[116] !== c || n[117] !== C || n[118] !== H || n[119] !== D
    ? ((Xt = () => {
        (C?.(), k(D) != null && (c?.onLocalSubmitStart?.(), H?.()));
      }),
      (n[116] = c),
      (n[117] = C),
      (n[118] = H),
      (n[119] = D),
      (n[120] = Xt))
    : (Xt = n[120]);
  let Zt;
  n[121] !== J ||
  n[122] !== y ||
  n[123] !== te ||
  n[124] !== H ||
  n[125] !== V ||
  n[126] !== Pt ||
  n[127] !== Vt ||
  n[128] !== Ht ||
  n[129] !== Ut ||
  n[130] !== Wt ||
  n[131] !== Gt ||
  n[132] !== X ||
  n[133] !== Kt ||
  n[134] !== Z ||
  n[135] !== Q ||
  n[136] !== qt ||
  n[137] !== $ ||
  n[138] !== Jt ||
  n[139] !== Yt ||
  n[140] !== Xt
    ? ((Zt = (0, W.jsx)($e, {
        ...J,
        composerLayoutMode: Vt,
        showUtilityBar: Ht,
        showWorkspaceDropdownInUtilityBar: !0,
        disableAutoFocus: Ut,
        isThreadResuming: y,
        atMentionRankingContext: Wt,
        isThreadHistoryLoading: Gt,
        placeholderText: X,
        additionalDeveloperInstructions: V,
        defaultTurnTrigger: Kt,
        captureSubmissionAdditionalContext: Z,
        realtimeVoicePageCompanion: Q,
        registerSubmitHandler: Pt,
        annotationSubmitTarget: qt,
        beforeFirstTurn: $,
        prepareLocalSubmit: Jt,
        submitDisabled: Yt,
        onLocalConversationCreated: te,
        onRealtimeStart: H,
        onLocalSubmitStart: Xt,
        onPendingThreadCreated: H,
      })),
      (n[121] = J),
      (n[122] = y),
      (n[123] = te),
      (n[124] = H),
      (n[125] = V),
      (n[126] = Pt),
      (n[127] = Vt),
      (n[128] = Ht),
      (n[129] = Ut),
      (n[130] = Wt),
      (n[131] = Gt),
      (n[132] = X),
      (n[133] = Kt),
      (n[134] = Z),
      (n[135] = Q),
      (n[136] = qt),
      (n[137] = $),
      (n[138] = Jt),
      (n[139] = Yt),
      (n[140] = Xt),
      (n[141] = Zt))
    : (Zt = n[141]);
  let Qt;
  return (
    n[142] !== Y || n[143] !== Zt
      ? ((Qt = (0, W.jsx)(Ye, { placement: Y, children: Zt })), (n[142] = Y), (n[143] = Zt), (n[144] = Qt))
      : (Qt = n[144]),
    Qt
  );
}
function xt(e) {
  return !!e;
}
function St() {
  return 0;
}
function Ct(e, t) {
  return Math.max(e, window.innerHeight - t.top);
}
function wt() {}
function Tt(e) {
  let t = (0, Et.c)(22),
    { cwd: n, hostId: i, selectedProject: a, onProjectChange: o } = e,
    s = r(Re),
    c = le(),
    l = d(Ae),
    u = d(j),
    f = w(A, `composer.openProjectPicker`),
    p;
  t[0] === s ? (p = t[1]) : ((p = (e) => s.set(j, e)), (t[0] = s), (t[1] = p));
  let m = p,
    h;
  t[2] === m ? (h = t[3]) : ((h = () => m(!0)), (t[2] = m), (t[3] = h));
  let g = !l,
    _;
  (t[4] === g ? (_ = t[5]) : ((_ = { enabled: g }), (t[4] = g), (t[5] = _)),
    F(`composer.openProjectPicker`, h, _));
  let v;
  t[6] !== u || t[7] !== l || t[8] !== m || t[9] !== o || t[10] !== s || t[11] !== a?.projectId || t[12] !== f
    ? ((v =
        !l &&
        (o == null
          ? (0, W.jsx)(Ze, {
              projectId: a?.projectId,
              menuOpen: u,
              onMenuOpenChange: m,
              shortcut: f,
              subtleHover: !0,
            })
          : (0, W.jsx)(st, {
              activeProjectIdOverride: o == null ? void 0 : (a?.projectId ?? null),
              allowLocalProjectActions: !0,
              allowRemoteProjects: !0,
              isOpen: u,
              onOpenChange: m,
              onProjectSelected:
                o == null
                  ? void 0
                  : (e) => {
                      (rt(s), o(e));
                    },
              shortcut: f,
              variant: `home`,
            }))),
      (t[6] = u),
      (t[7] = l),
      (t[8] = m),
      (t[9] = o),
      (t[10] = s),
      (t[11] = a?.projectId),
      (t[12] = f),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== c || t[15] !== n || t[16] !== i || t[17] !== s.value.clientThreadId
    ? ((y = (0, W.jsx)(ot, {
        composerController: c,
        conversationId: s.value.clientThreadId,
        cwd: n,
        hostId: i,
        isLocalWorkComposer: !0,
      })),
      (t[14] = c),
      (t[15] = n),
      (t[16] = i),
      (t[17] = s.value.clientThreadId),
      (t[18] = y))
    : (y = t[18]);
  let b;
  return (
    t[19] !== v || t[20] !== y
      ? ((b = (0, W.jsxs)(W.Fragment, { children: [v, y] })), (t[19] = v), (t[20] = y), (t[21] = b))
      : (b = t[21]),
    b
  );
}
var Et, U, W, Dt;
function G() {
  return (G = e(() => {
    ((Et = x()),
      c(),
      b(),
      S(),
      (U = C()),
      g(),
      He(),
      n(),
      ze(),
      ke(),
      ue(),
      L(),
      pe(),
      de(),
      ae(),
      De(),
      Qe(),
      et(),
      I(),
      ve(),
      ct(),
      ut(),
      R(),
      at(),
      ge(),
      Oe(),
      nt(),
      ce(),
      Ce(),
      N(),
      Ue(),
      Be(),
      We(),
      B(),
      V(),
      H(),
      _t(),
      a(),
      E(),
      O(),
      y(),
      Ke(),
      re(),
      T(),
      Me(),
      Le(),
      Fe(),
      M(),
      D(),
      f(),
      Ge(),
      z(),
      (W = te()),
      v(),
      (Dt = () =>
        p(
          () => import(`./artifact-session-binding-8b097de08caa.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
          import.meta.url,
        )));
  }))();
}
export { G as n, yt as t };
//# sourceMappingURL=page-codex-quick-chat-composer-f7450f39ea6b.js.map
