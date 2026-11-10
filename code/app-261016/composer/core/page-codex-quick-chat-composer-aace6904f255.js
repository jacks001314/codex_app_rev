const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./artifact-session-binding-4b2527186d42.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./api-4f89419a04a6.js",
      "./artifact-session-binding-de0b5463a756.js",
      "./collab-schema-5e12eae11b34.js",
      "./progress-3dff812c5a6d.js",
      "./generation-progress-heading-324b560bbaa7.js",
      "./mcp-tool-activity-label-1110f61411ea.js",
      "./state-e401e787f9be.js",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./collaboration-schemas-9ad991c40494.js",
      "./worker-preparation-34996f08ab5a.js",
      "./controller-worker-e1d0bc0048e6.js",
      "./worker-baab70085b2c.js",
      "./snapshot-26295b9b71a7.js",
      "./document-2523b236390c.js",
      "./presentation-20e3999371ab.js",
      "./spreadsheet-f01a044561f7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  GI as r,
  Jbt as i,
  LNt as a,
  OFt as o,
  PBt as s,
  XOt as c,
  Yst as l,
  ZSt as u,
  aC as d,
  ast as f,
  bB as p,
  fN as m,
  gB as ee,
  hB as h,
  iCt as g,
  ist as _,
  jmt as v,
  kFt as y,
  lC as te,
  mN as ne,
  nCt as b,
  okt as re,
  qI as x,
  sC as ie,
  sct as S,
  vB as ae,
  w_t as oe,
  yB as se,
  zmt as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $rn as le,
  Arn as ue,
  CDr as de,
  CIt as fe,
  COn as pe,
  Ewn as me,
  FDr as he,
  Fnt as C,
  HBr as ge,
  IHt as _e,
  Iwn as w,
  Jnn as T,
  KBr as ve,
  Kqt as ye,
  LXt as be,
  MDr as E,
  MOr as xe,
  Mg as Se,
  NHt as Ce,
  Ng as we,
  RXt as Te,
  SOn as Ee,
  TV as De,
  Unt as Oe,
  Wrn as ke,
  Xsn as Ae,
  YLt as je,
  Ysn as D,
  ZEn as Me,
  ZLt as Ne,
  _Dt as O,
  _kr as Pe,
  bLr as Fe,
  djr as Ie,
  eer as Le,
  fxr as k,
  gur as Re,
  hV as ze,
  iDn as Be,
  imr as Ve,
  lAr as A,
  ljr as j,
  lkr as He,
  mxr as Ue,
  nln as We,
  pur as Ge,
  qnn as Ke,
  qqt as qe,
  rln as Je,
  rmr as Ye,
  tin as Xe,
  vDt as Ze,
  vTn as Qe,
  wIt as $e,
  wLr as et,
  wV as tt,
  xTn as M,
  yV as nt,
  zOr as rt,
} from "./app-initial-ad16eaadf81f.js";
import {
  $b as it,
  Al as N,
  Ml as at,
  Uf as P,
  Vf as ot,
  _ as st,
  al as ct,
  at as lt,
  it as F,
  jl as ut,
  kl as dt,
  lt as I,
  ol as L,
  rl as ft,
  sl as R,
  tx as z,
  ut as pt,
  v as B,
  yh as mt,
} from "./app-primary-3e00728c2a4c.js";
import { a as ht, n as gt, r as _t, t as vt } from "./launch-defaults-e46725326fa9.js";
import { n as yt, t as bt } from "./work-run-location-control-fca53e5e63f9.js";
import { r as xt, t as St } from "./error-21e6fb16598c.js";
import { n as Ct, p as wt } from "./prompt-chat-bcb03ce4ce0e.js";
import { n as V, t as Tt } from "./local-file-selection-f7605e14b842.js";
import { n as Et, t as Dt } from "./plugin-service-preview-2b3b8a9cc7b3.js";
function Ot(e) {
  let n = (0, Rt.c)(7),
    r = t(de),
    a;
  n[0] === r
    ? (a = n[1])
    : ((a = E(r) == null && i(r.value.clientThreadId) ? r.value.clientThreadId : null),
      (n[0] = r),
      (n[1] = a));
  let o = a,
    s;
  n[2] === e ? (s = n[3]) : ((s = (0, U.jsx)(kt, { ...e })), (n[2] = e), (n[3] = s));
  let c;
  return (
    n[4] !== o || n[5] !== s
      ? ((c = (0, U.jsx)(We, { value: o, children: s })), (n[4] = o), (n[5] = s), (n[6] = c))
      : (c = n[6]),
    c
  );
}
function kt(e) {
  let n = (0, Rt.c)(148),
    {
      artifactBindingRef: r,
      composerProps: a,
      context: o,
      hostId: s,
      presentation: c,
      isThreadHistoryLoading: u,
      isThreadResuming: f,
      isThreadUnavailable: m,
      isResponseInProgress: h,
      session: y,
      onConversationCreated: ne,
      onSubmissionStarted: x,
      onPromptSubmitStart: ie,
      isSessionCurrent: S,
      reserveContent: ae,
      selectedProject: ce,
      onProjectChange: ue,
      aboveComposerContent: fe,
    } = e,
    he = s === void 0 ? l : s,
    C = ae === void 0 || ae,
    _e = ce === void 0 ? null : ce,
    w = t(de),
    T = t(xe),
    ve = g(Be),
    ye = g(ke),
    be;
  n[0] === w.value.clientThreadId
    ? (be = n[1])
    : ((be = i(w.value.clientThreadId) ? w.value.clientThreadId : null),
      (n[0] = w.value.clientThreadId),
      (n[1] = be));
  let Se = b(pe, be),
    we;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((we = new WeakMap()), (n[2] = we)) : (we = n[2]);
  let Ee = (0, H.useRef)(we),
    je = b(Ae, w.value.clientThreadId),
    D = _e ?? je,
    Me;
  n[3] !== je || n[4] !== T || n[5] !== w.value.clientThreadId || n[6] !== ue
    ? ((Me =
        ue ??
        (je == null
          ? void 0
          : (e) => {
              T.set(Ae, w.value.clientThreadId, e);
            })),
      (n[3] = je),
      (n[4] = T),
      (n[5] = w.value.clientThreadId),
      (n[6] = ue),
      (n[7] = Me))
    : (Me = n[7]);
  let O = Me,
    Le = p(),
    k = re(),
    ze = g(Ie),
    A = (0, H.useRef)(null),
    j = r ?? A,
    He;
  n[8] === r
    ? (He = n[9])
    : ((He = () => {
        if (r == null)
          return () => {
            (A.current?.dispose(), (A.current = null));
          };
      }),
      (n[8] = r),
      (n[9] = He));
  let Ue = y?.accountId,
    We = y?.pageId,
    Ge = y?.sourceId,
    Je = y?.clientThreadId,
    Ye = o?.documentType,
    Xe;
  (n[10] !== r || n[11] !== Ge || n[12] !== Je || n[13] !== Ye || n[14] !== Ue || n[15] !== We
    ? ((Xe = [r, Ue, We, Ge, Je, Ye]),
      (n[10] = r),
      (n[11] = Ge),
      (n[12] = Je),
      (n[13] = Ye),
      (n[14] = Ue),
      (n[15] = We),
      (n[16] = Xe))
    : (Xe = n[16]),
    (0, H.useLayoutEffect)(He, Xe));
  let Ze = g(nt),
    Qe = D == null ? `~` : void 0,
    et = O != null,
    tt;
  n[17] !== D || n[18] !== Qe || n[19] !== et
    ? ((tt = {
        defaultCwd: Qe,
        existingWorkspaceRoot: null,
        homeRemoteProject: void 0,
        selectedProject: D,
        useScopedProject: et,
      }),
      (n[17] = D),
      (n[18] = Qe),
      (n[19] = et),
      (n[20] = tt))
    : (tt = n[20]);
  let { target: M } = b(dt, tt),
    { authMethod: rt } = Ve(),
    N = g(_t),
    at = g(gt),
    P = b(ht, D),
    st = M.hostId !== l,
    ct;
  n[21] !== rt || n[22] !== h || n[23] !== st || n[24] !== M
    ? ((ct = { authMethod: rt, target: M, isRemoteProject: st, isResponseInProgress: h }),
      (n[21] = rt),
      (n[22] = h),
      (n[23] = st),
      (n[24] = M),
      (n[25] = ct))
    : (ct = n[25]);
  let lt = b(ut, ct),
    F = g(Ke),
    I = a == null ? N && P.useAsbDirect : a.useAsbDirect === !0,
    L;
  n[26] !== F || n[27] !== he || n[28] !== O || n[29] !== M.hostId || n[30] !== I
    ? ((L = he),
      O != null && (L = F ? oe : M.hostId),
      (n[26] = F),
      (n[27] = he),
      (n[28] = O),
      (n[29] = M.hostId),
      (n[30] = I),
      (n[31] = L))
    : (L = n[31]);
  let R = L === `local` && !F,
    z = R
      ? (o?.localPageContextDeveloperInstructions ?? o?.pageContextDeveloperInstructions)
      : o?.pageContextDeveloperInstructions,
    pt = b(ge, L),
    B = c?.onSubmitStart,
    vt = c?.isDockedTop,
    yt = c?.isMinimized,
    xt;
  n[32] === w ? (xt = n[33]) : ((xt = E(w)), (n[32] = w), (n[33] = xt));
  let Ct = xt,
    V = Ct == null && Se == null,
    { modelSettings: Et } = Ne(Ct),
    { serviceTierSettings: Ot } = $e(Ct),
    kt;
  n[34] !== L || n[35] !== Et.model || n[36] !== w || n[37] !== Ot
    ? ((kt = () => ({ model: Et.model, serviceTier: w.get(Te, L) ? null : Ot.serviceTierForRequest })),
      (n[34] = L),
      (n[35] = Et.model),
      (n[36] = w),
      (n[37] = Ot),
      (n[38] = kt))
    : (kt = n[38]);
  let Bt = ee(kt),
    Vt;
  n[39] !== F ||
  n[40] !== Bt ||
  n[41] !== k ||
  n[42] !== S ||
  n[43] !== ie ||
  n[44] !== B ||
  n[45] !== T ||
  n[46] !== w ||
  n[47] !== D ||
  n[48] !== y ||
  n[49] !== M.hostId
    ? ((Vt = (e) =>
        y == null
          ? It
          : wt(
              T,
              y,
              async (t) => {
                let n = () => {
                  if (
                    w.value.kind !== `local` ||
                    w.value.clientThreadId !== y.clientThreadId ||
                    le(w) ||
                    S?.() === !1
                  )
                    throw new St(`changed`);
                };
                (n(), ie(), B?.(), n(), await e(t));
              },
              Bt,
              D,
              () => le(w),
              F
                ? void 0
                : {
                    libraryFilePickerOptions: {
                      allowMountedLibraryLiveReferences: !1,
                      skipChatAttachmentLimits: !0,
                    },
                    attachLibraryFiles: async (e) => {
                      let t = () => S?.() !== !1,
                        n = e.filter(Ft);
                      (n.length > 0 && me(y.clientThreadId, n.map(Pt).join(` `)),
                        await Promise.all(
                          e
                            .filter(Nt)
                            .map((e) =>
                              Tt(w, e, {
                                hostId: M.hostId,
                                intl: k,
                                isSpaceEnabled: !0,
                                isSelectionCurrent: t,
                              }),
                            ),
                        ));
                    },
                  },
            )),
      (n[39] = F),
      (n[40] = Bt),
      (n[41] = k),
      (n[42] = S),
      (n[43] = ie),
      (n[44] = B),
      (n[45] = T),
      (n[46] = w),
      (n[47] = D),
      (n[48] = y),
      (n[49] = M.hostId),
      (n[50] = Vt))
    : (Vt = n[50]);
  let Ht = Vt,
    Ut;
  n[51] !== vt || n[52] !== yt || n[53] !== C || n[54] !== Le
    ? ((Ut = () => (!C || yt || vt ? 0 : se(d().reduce(Mt, 0), Le))),
      (n[51] = vt),
      (n[52] = yt),
      (n[53] = C),
      (n[54] = Le),
      (n[55] = Ut))
    : (Ut = n[55]);
  let Wt = (0, H.useSyncExternalStore)(te, Ut, jt),
    Gt,
    Kt;
  (n[56] !== Wt || n[57] !== C || n[58] !== T
    ? ((Gt = () => {
        if (C) return (Oe(T, Wt), () => Oe(T, 0));
      }),
      (Kt = [Wt, C, T]),
      (n[56] = Wt),
      (n[57] = C),
      (n[58] = T),
      (n[59] = Gt),
      (n[60] = Kt))
    : ((Gt = n[59]), (Kt = n[60])),
    (0, H.useLayoutEffect)(Gt, Kt));
  let qt;
  n[61] !== N || n[62] !== w || n[63] !== P
    ? ((qt = N
        ? (0, U.jsx)(bt, {
            cloudUsesLocalExecutor: !1,
            isLocalExecutorStarting: !1,
            runLocationState: P.runLocation,
            onRunLocationChange: (e) => qe(w, e),
          })
        : void 0),
      (n[61] = N),
      (n[62] = w),
      (n[63] = P),
      (n[64] = qt))
    : (qt = n[64]);
  let W = qt,
    Jt;
  n[65] !== fe ||
  n[66] !== a ||
  n[67] !== k ||
  n[68] !== V ||
  n[69] !== h ||
  n[70] !== N ||
  n[71] !== lt ||
  n[72] !== O ||
  n[73] !== c ||
  n[74] !== D ||
  n[75] !== I ||
  n[76] !== W
    ? ((Jt = a ?? {
        ...mt(c),
        aboveComposerContent: fe,
        aboveComposerContentLayout: `header`,
        composerModeAvailability: N ? it : lt,
        useAsbDirect: I,
        hideRunLocationDropdownOverride: N,
        homeLeadingControl: V ? void 0 : W,
        defaultCwd: D == null ? `~` : void 0,
        isResponseInProgress: h,
        newConversationNavigation: `stay`,
        selectedProject: D,
        onProjectChange: O,
        placeholderText: k.formatMessage({
          id: `quickChat.genericComposerPlaceholder`,
          defaultMessage: `Ask anything…`,
          description: `Placeholder for the shared floating chat composer when no Page is selected`,
        }),
      }),
      (n[65] = fe),
      (n[66] = a),
      (n[67] = k),
      (n[68] = V),
      (n[69] = h),
      (n[70] = N),
      (n[71] = lt),
      (n[72] = O),
      (n[73] = c),
      (n[74] = D),
      (n[75] = I),
      (n[76] = W),
      (n[77] = Jt))
    : (Jt = n[77]);
  let G = Jt,
    K;
  n[78] !== V ||
  n[79] !== ye ||
  n[80] !== at ||
  n[81] !== N ||
  n[82] !== O ||
  n[83] !== D ||
  n[84] !== M.cwd ||
  n[85] !== M.hostId ||
  n[86] !== W
    ? ((K =
        V && at
          ? {
              kind: `home`,
              mode: N ? `work` : void 0,
              showUtilityBarWhenCompact: !0,
              chrome: N
                ? {
                    actionBarControls: (0, U.jsx)(Lt, {
                      cwd: M.cwd ?? `~`,
                      hostId: M.hostId,
                      selectedProject: D,
                      onProjectChange: O,
                    }),
                    actionBarPosition: `above`,
                    actionBarVisible: !ye,
                    actionBarTrailingControls: W,
                  }
                : void 0,
            }
          : { kind: `thread` }),
      (n[78] = V),
      (n[79] = ye),
      (n[80] = at),
      (n[81] = N),
      (n[82] = O),
      (n[83] = D),
      (n[84] = M.cwd),
      (n[85] = M.hostId),
      (n[86] = W),
      (n[87] = K))
    : (K = n[87]);
  let Yt = c == null ? `multiline` : `auto-single-line`,
    Xt = V && at && !N && !ye,
    Zt = ve === `content` || o != null || G.disableAutoFocus,
    Qt = o == null ? void 0 : `page`,
    $t = u || a?.isThreadHistoryLoading,
    q;
  n[88] !== G || n[89] !== o || n[90] !== k
    ? ((q =
        o == null
          ? G.placeholderText
          : (o.composerPlaceholder ??
            k.formatMessage(
              {
                id: `codex.page.chat.placeholder.byDocumentType`,
                defaultMessage: `{documentType, select, granola_presentation {Work with this slide…} granola_workbook {Work with this sheet…} other {Work with this page…}}`,
                description: `Placeholder in the floating Page chat composer. documentType selects slide, sheet, or page for the current document.`,
              },
              { documentType: o.documentType ?? `page` },
            ))),
      (n[88] = G),
      (n[89] = o),
      (n[90] = k),
      (n[91] = q))
    : (q = n[91]);
  let en = o == null ? void 0 : `page_composer`,
    J;
  n[92] !== o || n[93] !== z
    ? ((J = () =>
        o == null
          ? null
          : {
              codex_apps_active_page: {
                kind: `application`,
                value: [
                  `The following Page is selected for this message. It may differ from the Page selected for earlier messages.`,
                  z,
                  o.getAdditionalUserContext?.() ??
                    (o.documentType == null
                      ? void 0
                      : `The user's current document view was unavailable when they sent this message.`),
                ].filter(At).join(`

`),
              },
            }),
      (n[92] = o),
      (n[93] = z),
      (n[94] = J))
    : (J = n[94]);
  let Y;
  n[95] !== pt || n[96] !== o || n[97] !== z || n[98] !== y || n[99] !== ze?.existingThreadVoiceEnabled
    ? ((Y =
        y != null && o != null && z != null && i(y.clientThreadId) && ze?.existingThreadVoiceEnabled && De(pt)
          ? { ...y, clientThreadId: y.clientThreadId, developerInstructions: z }
          : void 0),
      (n[95] = pt),
      (n[96] = o),
      (n[97] = z),
      (n[98] = y),
      (n[99] = ze?.existingThreadVoiceEnabled),
      (n[100] = Y))
    : (Y = n[100]);
  let tn = o == null || T.value.persistentWorkspace != null ? void 0 : `page:${o.sourceId}`,
    X;
  n[101] !== j || n[102] !== o?.documentType || n[103] !== L || n[104] !== S || n[105] !== w || n[106] !== y
    ? ((X = async (e) => {
        if (y == null) return;
        let t = Ee.current.get(y),
          n = () => w.get(Re) === y.accountId && w.get(Fe) === t;
        if (
          !n() ||
          (o?.documentType != null && S?.() === !1) ||
          (L === `local` && (await j.current?.activate(e)), !n())
        )
          throw new St(`changed`);
      }),
      (n[101] = j),
      (n[102] = o?.documentType),
      (n[103] = L),
      (n[104] = S),
      (n[105] = w),
      (n[106] = y),
      (n[107] = X))
    : (X = n[107]);
  let Z;
  n[108] !== r ||
  n[109] !== j ||
  n[110] !== o ||
  n[111] !== L ||
  n[112] !== k ||
  n[113] !== S ||
  n[114] !== x ||
  n[115] !== w ||
  n[116] !== y ||
  n[117] !== R
    ? ((Z = async (e, t) => {
        if ((x?.(), y != null && E(w) == null && Ee.current.set(y, w.get(Fe)), o == null || y == null))
          return e;
        if (S?.() === !1) throw new St(`changed`);
        let n = {
          ...e,
          pageContext: { pageId: o.pageId },
          firstTurnConfigOverrides: { ...e.firstTurnConfigOverrides, [`features.${v}`]: !0, ...Dt() },
        };
        if (
          e.cloudThreadPrototype ||
          L !== `local` ||
          (o.documentType !== `granola_workbook` &&
            o.documentType !== `granola_presentation` &&
            o.documentType !== `granola_whiteboard`)
        )
          return n;
        let a = k.formatMessage({
          id: `codex.page.artifactSession.editingUnavailable`,
          defaultMessage: `Document editing is unavailable. Restart or update the app, then try again.`,
          description: `Error before sending a Canvas, Sheet, or Presentation chat message when the app's editing runtime cannot connect to the document. The user should restart or update the app before retrying.`,
        });
        if (t?.executionMode === `worktree` || _.artifactSessions == null) {
          if (R) throw Error(a);
          return n;
        }
        let s = (e) => {
            let t = w.get(Ce);
            if (
              !(S == null
                ? t?.accountId === y.accountId &&
                  t.pageId === y.pageId &&
                  t.sourceId === y.sourceId &&
                  t.clientThreadId === y.clientThreadId
                : S()) ||
              (e != null &&
                (E(w) ??
                  (S == null ? t?.conversationId : y.conversationId) ??
                  (i(y.clientThreadId) ? w.get(Pe, y.clientThreadId) : null)) !== e)
            )
              throw new St(`changed`);
          },
          { createPageArtifactSessionBinding: c, getPageArtifactSessionContext: l } = await zt();
        s();
        let u = j.current;
        u ??
          ((u = c(w, { ...y, validateCurrent: s }, o.documentType)),
          r == null ? (A.current = u) : (r.current = u));
        let d = await u.prepare();
        if (d == null) {
          if (o.documentType === `granola_presentation` && !R)
            return (u.dispose(), r == null ? (A.current = null) : (r.current = null), n);
          throw Error(a);
        }
        let { artifactRef: f, canUploadVisualization: p, canUploadImage: m, canvasSkillPath: ee } = d,
          h = E(w);
        return (
          h != null && (await u.activate(h)),
          {
            ...n,
            additionalContext: {
              ...n.additionalContext,
              codex_apps_page_artifact: { kind: `application`, value: l(o.documentType, f, p, m, ee) },
            },
          }
        );
      }),
      (n[108] = r),
      (n[109] = j),
      (n[110] = o),
      (n[111] = L),
      (n[112] = k),
      (n[113] = S),
      (n[114] = x),
      (n[115] = w),
      (n[116] = y),
      (n[117] = R),
      (n[118] = Z))
    : (Z = n[118]);
  let nn = a?.submitDisabled || o?.disableSubmit || (o != null && Ze) || u || m,
    Q;
  n[119] !== a || n[120] !== x || n[121] !== B || n[122] !== w
    ? ((Q = () => {
        (x?.(), E(w) != null && (a?.onLocalSubmitStart?.(), B?.()));
      }),
      (n[119] = a),
      (n[120] = x),
      (n[121] = B),
      (n[122] = w),
      (n[123] = Q))
    : (Q = n[123]);
  let $;
  n[124] !== G ||
  n[125] !== f ||
  n[126] !== ne ||
  n[127] !== B ||
  n[128] !== z ||
  n[129] !== Ht ||
  n[130] !== Yt ||
  n[131] !== Xt ||
  n[132] !== Zt ||
  n[133] !== Qt ||
  n[134] !== $t ||
  n[135] !== q ||
  n[136] !== en ||
  n[137] !== J ||
  n[138] !== Y ||
  n[139] !== tn ||
  n[140] !== X ||
  n[141] !== Z ||
  n[142] !== nn ||
  n[143] !== Q
    ? (($ = (0, U.jsx)(ft, {
        ...G,
        composerLayoutMode: Yt,
        showUtilityBar: Xt,
        showWorkspaceDropdownInUtilityBar: !0,
        disableAutoFocus: Zt,
        isThreadResuming: f,
        atMentionRankingContext: Qt,
        isThreadHistoryLoading: $t,
        placeholderText: q,
        additionalDeveloperInstructions: z,
        defaultTurnTrigger: en,
        captureSubmissionAdditionalContext: J,
        realtimeVoicePageCompanion: Y,
        registerSubmitHandler: Ht,
        annotationSubmitTarget: tn,
        beforeFirstTurn: X,
        prepareLocalSubmit: Z,
        submitDisabled: nn,
        onLocalConversationCreated: ne,
        onRealtimeStart: B,
        onLocalSubmitStart: Q,
        onPendingThreadCreated: B,
      })),
      (n[124] = G),
      (n[125] = f),
      (n[126] = ne),
      (n[127] = B),
      (n[128] = z),
      (n[129] = Ht),
      (n[130] = Yt),
      (n[131] = Xt),
      (n[132] = Zt),
      (n[133] = Qt),
      (n[134] = $t),
      (n[135] = q),
      (n[136] = en),
      (n[137] = J),
      (n[138] = Y),
      (n[139] = tn),
      (n[140] = X),
      (n[141] = Z),
      (n[142] = nn),
      (n[143] = Q),
      (n[144] = $))
    : ($ = n[144]);
  let rn;
  return (
    n[145] !== K || n[146] !== $
      ? ((rn = (0, U.jsx)(ot, { placement: K, children: $ })), (n[145] = K), (n[146] = $), (n[147] = rn))
      : (rn = n[147]),
    rn
  );
}
function At(e) {
  return !!e;
}
function jt() {
  return 0;
}
function Mt(e, t) {
  return Math.max(e, window.innerHeight - t.top);
}
function Nt(e) {
  return e.library_artifact_type !== `page`;
}
function Pt(e) {
  return ne(e.file_name, r({ kind: `page`, id: e.file_id }));
}
function Ft(e) {
  return e.library_artifact_type === `page`;
}
function It() {}
function Lt(e) {
  let n = (0, Rt.c)(22),
    { cwd: r, hostId: i, selectedProject: a, onProjectChange: o } = e,
    s = t(de),
    c = Ze(),
    l = g(Ue),
    u = g(ue),
    d = b(Qe, `composer.openProjectPicker`),
    f;
  n[0] === s ? (f = n[1]) : ((f = (e) => s.set(ue, e)), (n[0] = s), (n[1] = f));
  let p = f,
    m;
  n[2] === p ? (m = n[3]) : ((m = () => p(!0)), (n[2] = p), (n[3] = m));
  let ee = !l,
    h;
  (n[4] === ee ? (h = n[5]) : ((h = { enabled: ee }), (n[4] = ee), (n[5] = h)),
    we(`composer.openProjectPicker`, m, h));
  let _;
  n[6] !== u || n[7] !== l || n[8] !== p || n[9] !== o || n[10] !== s || n[11] !== a?.projectId || n[12] !== d
    ? ((_ =
        !l &&
        (o == null
          ? (0, U.jsx)(I, {
              projectId: a?.projectId,
              menuOpen: u,
              onMenuOpenChange: p,
              shortcut: d,
              subtleHover: !0,
            })
          : (0, U.jsx)(st, {
              activeProjectIdOverride: o == null ? void 0 : (a?.projectId ?? null),
              allowLocalProjectActions: !0,
              allowRemoteProjects: !0,
              isOpen: u,
              onOpenChange: p,
              onProjectSelected:
                o == null
                  ? void 0
                  : (e) => {
                      (L(s), o(e));
                    },
              shortcut: d,
              variant: `home`,
            }))),
      (n[6] = u),
      (n[7] = l),
      (n[8] = p),
      (n[9] = o),
      (n[10] = s),
      (n[11] = a?.projectId),
      (n[12] = d),
      (n[13] = _))
    : (_ = n[13]);
  let v;
  n[14] !== c || n[15] !== r || n[16] !== i || n[17] !== s.value.clientThreadId
    ? ((v = (0, U.jsx)(F, {
        composerController: c,
        conversationId: s.value.clientThreadId,
        cwd: r,
        hostId: i,
        isLocalWorkComposer: !0,
      })),
      (n[14] = c),
      (n[15] = r),
      (n[16] = i),
      (n[17] = s.value.clientThreadId),
      (n[18] = v))
    : (v = n[18]);
  let y;
  return (
    n[19] !== _ || n[20] !== v
      ? ((y = (0, U.jsxs)(U.Fragment, { children: [_, v] })), (n[19] = _), (n[20] = v), (n[21] = y))
      : (y = n[21]),
    y
  );
}
var Rt, H, U, zt;
function Bt() {
  return (Bt = e(() => {
    ((Rt = s()),
      u(),
      S(),
      ce(),
      x(),
      (H = n()),
      c(),
      Le(),
      ae(),
      et(),
      Ye(),
      ie(),
      A(),
      pt(),
      _e(),
      ye(),
      T(),
      M(),
      ct(),
      P(),
      z(),
      Xe(),
      lt(),
      at(),
      N(),
      w(),
      B(),
      m(),
      O(),
      Se(),
      R(),
      be(),
      je(),
      Je(),
      fe(),
      V(),
      Ee(),
      ze(),
      yt(),
      xt(),
      Et(),
      Ct(),
      j(),
      tt(),
      f(),
      he(),
      D(),
      rt(),
      k(),
      He(),
      ve(),
      C(),
      Me(),
      h(),
      Ge(),
      vt(),
      (U = a()),
      y(),
      (zt = () =>
        o(
          () => import(`./artifact-session-binding-4b2527186d42.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
          import.meta.url,
        )));
  }))();
}
export { Bt as n, Ot as t };
//# sourceMappingURL=page-codex-quick-chat-composer-aace6904f255.js.map
