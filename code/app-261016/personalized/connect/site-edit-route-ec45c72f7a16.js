import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HM as i,
  ISt as a,
  KSt as o,
  LNt as s,
  Lst as c,
  Mst as l,
  NSt as u,
  PBt as d,
  Qst as ee,
  RM as f,
  Rst as te,
  SSt as ne,
  USt as re,
  Uot as p,
  VSt as ie,
  Vot as m,
  XOt as h,
  XSt as ae,
  Y3 as oe,
  Z3 as g,
  ZSt as _,
  cwt as se,
  iCt as ce,
  iwt as v,
  jFt as y,
  jst as b,
  mbt as x,
  nCt as le,
  sct as ue,
  tkt as S,
  uSt as de,
  w_t as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ar as fe,
  AIr as pe,
  Air as w,
  CIr as T,
  CRn as E,
  Cqt as D,
  EAr as O,
  Eqt as k,
  FBr as A,
  HOn as me,
  IAr as j,
  IBr as he,
  IGt as M,
  Jkr as ge,
  Jqt as _e,
  Kkr as N,
  Kqt as P,
  LGt as F,
  LIr as I,
  Lvn as ve,
  Mir as ye,
  Nir as L,
  RAr as be,
  Rbr as R,
  SIr as z,
  TAr as xe,
  UOn as B,
  WCn as Se,
  Wkr as Ce,
  XAr as V,
  XEn as H,
  YEn as we,
  ZAr as Te,
  bRn as U,
  iRr as W,
  icr as G,
  imr as Ee,
  lBr as De,
  lkr as Oe,
  nkr as K,
  rcr as q,
  rmr as ke,
  tyr as Ae,
  uBr as je,
  zbr as Me,
  zvn as Ne,
} from "./app-initial-ad16eaadf81f.js";
import { $c as Pe, nl as J } from "./app-primary-3e00728c2a4c.js";
async function Fe(
  e,
  {
    projectId: t,
    latestEditContext: n,
    projectTitle: r,
    prompt: i,
    siteEditSource: a,
    mode: o,
    workRunLocation: s,
    preferredHostId: c,
    signal: l,
  },
) {
  l.throwIfAborted();
  let u = f({ projectId: t, title: r ?? t }),
    d = `${u} `;
  i != null && (d = q(i).some((e) => e.projectId === t) ? i : `${u} ${i}`);
  let ee = { focusComposerNonce: Date.now(), prefillPrompt: d, siteEditSource: i ? a : void 0 },
    te = o === `chat` || (o === `work` && s === `cloud`);
  try {
    if (te && n?.chatgpt_conversation_id) {
      let e = n.chatgpt_conversation_id,
        i = await W.safeGet(`/conversation/{conversation_id}`, {
          parameters: { path: { conversation_id: e } },
          signal: l,
        });
      if ((l.throwIfAborted(), !i.is_archived && !i.is_read_only))
        return {
          path: `${m(e, { gizmoId: i.gizmo_id })}?${new URLSearchParams({ prompt: d, promptSource: `codex-app` })}`,
          state: ee,
          preview: { conversationId: e, projectId: t, title: r ?? t },
        };
    } else if ((o === `codex` || (o === `work` && s === `local`)) && n?.codex_thread_id) {
      let i = de(n.codex_thread_id),
        {
          hostId: a,
          manager: o,
          thread: s,
        } = await F({ scope: e, threadId: i, preferredHostId: c, requestOptions: { timeoutMs: 1e4 } });
      l.throwIfAborted();
      let u = s ?? (await o.readThread(i, { includeTurns: !1 })).thread;
      l.throwIfAborted();
      let d = A(e, a),
        f = await d.loadRecentConversationIds([i]);
      if ((l.throwIfAborted(), f.includes(i))) {
        let n = await d.resumeConversation(
          {
            conversationId: i,
            model: null,
            serviceTier: null,
            reasoningEffort: null,
            workspaceRoots: [u.cwd],
            useAppServerPermissionDefault: !1,
            preserveServerConfiguration: a === C,
          },
          { readResumeInputs: R(e, a) },
        );
        if ((l.throwIfAborted(), n.status !== `not-ready`))
          return {
            path: `${x(i)}?${new URLSearchParams({ hostId: a })}`,
            state: ee,
            preview: { conversationId: i, hostId: a, projectId: t, title: r ?? t },
          };
      }
    }
  } catch {
    l.throwIfAborted();
  }
  let ne =
    i == null
      ? `${e.get(T).formatMessage({ id: `appgenConversation.editPrompt.requestChanges`, defaultMessage: `Make these changes to {siteMention}:`, description: `Prefilled prompt for editing an existing site from the Sites page. {siteMention} is the serialized Site mention and must remain intact. The user types their requested changes after the colon.` }, { siteMention: u })} `
      : d;
  return { path: `/`, state: { ...ee, prefillPrompt: ne, project: null, codexAppMode: o } };
}
async function Ie(e, t, n, r) {
  let i = e.get(w),
    o = t,
    s = o.state.sitePreviewDraft != null;
  if (s && o.path !== `/`) {
    let { pathname: e, search: t } = a(o.path),
      n = new URLSearchParams(t);
    (n.delete(`prompt`),
      n.delete(`promptSource`),
      (o = {
        ...o,
        path: `${e}${n.size > 0 ? `?${n}` : ``}`,
        state: { ...o.state, prefillPromptOnlyIfEmpty: !0 },
      }));
  }
  if (o.path === `/`) {
    let t = !1;
    if (
      (k(e, {
        ...r,
        activeProject: null,
        prefillPrompt: o.state.prefillPrompt,
        prefillPromptOnlyIfEmpty: o.state.sitePreviewDraft != null,
        sitePreviewDraft: o.state.sitePreviewDraft,
        siteEditSource: o.state.siteEditSource,
        codexAppMode: o.state.codexAppMode,
        startInSidebar: !0,
        replace: !0,
        onNavigate: () => {
          t = !0;
        },
      }),
      !t)
    )
      return `blocked`;
    let i = q(o.state.prefillPrompt ?? ``)[0];
    s &&
      i != null &&
      J(e, {
        ...i,
        url: n ?? void 0,
        showComposer: s,
        clientThreadId: e.get(
          K,
          o.state.sitePreviewDraft == null ? Ce({ entrypoint: `home` }) : N(o.state.sitePreviewDraft),
        ),
      });
  } else if (!L(e, o.path, { replace: !0, state: { ...r, ...o.state } })) return `blocked`;
  if ((o.preview != null && J(e, { ...o.preview, url: n ?? void 0, showComposer: s }), n == null || s))
    return `navigated`;
  await e.when(({ get: e }) => {
    let t = e(w);
    return t.pathname !== i.pathname || t.search !== i.search;
  });
  let c = e.get(w),
    { pathname: l, search: u = `` } = a(o.path);
  return (
    c.pathname === l &&
      (c.search ?? ``) === u &&
      E({ href: n, initiator: `sites_library`, openTarget: `in-app-browser` }),
    `navigated`
  );
}
function Y() {
  return (Y = e(() => {
    (ue(), u(), M(), ye(), he(), Me(), Ae(), p(), i(), U(), ge(), D(), Se(), z(), Oe(), G(), Pe());
  }))();
}
function X() {
  let e = (0, Le.c)(95),
    n = t(ee),
    r = re(),
    i = te(),
    { projectId: a } = o(),
    [s] = ae(),
    c;
  e[0] === s ? (c = e[1]) : ((c = s.get(`account_id`)?.trim() || null), (e[0] = s), (e[1] = c));
  let u = c,
    d;
  e[2] === s ? (d = e[3]) : ((d = s.get(`conversation_id`)), (e[2] = s), (e[3] = d));
  let f = d,
    p;
  e[4] === s ? (p = e[5]) : ((p = s.get(`codex_thread_id`)), (e[4] = s), (e[5] = p));
  let m = p,
    h;
  e[6] === s ? (h = e[7]) : ((h = s.get(`hostId`)), (e[6] = s), (e[7] = h));
  let g = h,
    _;
  e[8] === s ? (_ = e[9]) : ((_ = s.get(`browser_url`)), (e[8] = s), (e[9] = _));
  let v = _,
    y = s.get(`site_edit_source`) === `widget` ? `widget` : void 0,
    b;
  e[10] === s ? (b = e[11]) : ((b = xe(s)), (e[10] = s), (e[11] = b));
  let x = b,
    [ue, de] = (0, Re.useState)(null),
    { key: C, state: w } = ie(),
    T = ue === C,
    E;
  e[12] === w ? (E = e[13]) : ((E = w ?? {}), (e[12] = w), (e[13] = E));
  let D, O, k;
  e[14] === E
    ? ((D = e[15]), (O = e[16]), (k = e[17]))
    : (({ siteEditLiveUrl: D, siteEditContext: k, ...O } = E),
      (e[14] = E),
      (e[15] = D),
      (e[16] = O),
      (e[17] = k));
  let { accountId: A, userId: j, isLoading: he } = Ee(),
    M = le(je, `1498265771`),
    { accountInfoLoading: ge } = ce(pe),
    N = A != null && j != null && k?.accountId === A && k.userId === j && k.projectId === a ? k : void 0,
    P;
  e[18] !== N?.prompt || e[19] !== s
    ? ((P = s.get(`prompt`) ?? N?.prompt), (e[18] = N?.prompt), (e[19] = s), (e[20] = P))
    : (P = e[20]);
  let F = P,
    I = ce(Te),
    ye = ce(fe),
    L = I ? `work` : `codex`,
    R;
  e[21] === I
    ? (R = e[22])
    : ((R = be({ windowType: `electron`, workModeEnabled: I })), (e[21] = I), (e[22] = R));
  let z;
  e[23] === R
    ? (z = e[24])
    : ((z = {
        enforceAccess: R,
        homeComposerMode: `work`,
        routeProjectId: null,
        selectedChatGptProjectId: null,
        selectedWorkProject: null,
      }),
      (e[23] = R),
      (e[24] = z));
  let { effectiveLocation: B, unavailableReasons: Se } = le(_e, z),
    Ce = L === `work` && (Se.cloud === `loading` || Se.local === `loading`),
    V;
  e[25] !== A ||
  e[26] !== v ||
  e[27] !== m ||
  e[28] !== T ||
  e[29] !== f ||
  e[30] !== N ||
  e[31] !== B ||
  e[32] !== M ||
  e[33] !== g ||
  e[34] !== C ||
  e[35] !== D ||
  e[36] !== L ||
  e[37] !== O ||
  e[38] !== a ||
  e[39] !== F ||
  e[40] !== u ||
  e[41] !== y ||
  e[42] !== j
    ? ((V = [`site-edit`, C, A, u, j, a, L, B, D, M, N, O, f, m, g, v, F, y, T]),
      (e[25] = A),
      (e[26] = v),
      (e[27] = m),
      (e[28] = T),
      (e[29] = f),
      (e[30] = N),
      (e[31] = B),
      (e[32] = M),
      (e[33] = g),
      (e[34] = C),
      (e[35] = D),
      (e[36] = L),
      (e[37] = O),
      (e[38] = a),
      (e[39] = F),
      (e[40] = u),
      (e[41] = y),
      (e[42] = j),
      (e[43] = V))
    : (V = e[43]);
  let H = V,
    U;
  e[44] === r
    ? (U = e[45])
    : ((U = () => {
        r(`/sites`, { replace: !0 });
      }),
      (e[44] = r),
      (e[45] = U));
  let W = U,
    G;
  e[46] !== i || e[47] !== W || e[48] !== H
    ? ((G = () => {
        (i.cancelQueries({ queryKey: H, exact: !0 }), W());
      }),
      (e[46] = i),
      (e[47] = W),
      (e[48] = H),
      (e[49] = G))
    : (G = e[49]);
  let De = G,
    Oe = a != null && !he && !ye && !Ce && (u == null || A === u),
    K;
  e[50] !== A ||
  e[51] !== v ||
  e[52] !== m ||
  e[53] !== T ||
  e[54] !== f ||
  e[55] !== N ||
  e[56] !== B ||
  e[57] !== M ||
  e[58] !== x ||
  e[59] !== g ||
  e[60] !== D ||
  e[61] !== L ||
  e[62] !== O ||
  e[63] !== a ||
  e[64] !== F ||
  e[65] !== W ||
  e[66] !== n ||
  e[67] !== y ||
  e[68] !== j
    ? ((K =
        a == null
          ? se
          : async (e) => {
              let { signal: t } = e,
                r = x ? await ve(a) : null;
              if ((t.throwIfAborted(), r != null && r.status !== `active`)) return `unavailable`;
              let i = await Fe(n, {
                projectId: a,
                latestEditContext: x
                  ? { chatgpt_conversation_id: f, codex_thread_id: m }
                  : N?.latestEditContext,
                projectTitle: r?.title ?? N?.projectTitle,
                prompt: F,
                siteEditSource: y,
                mode: L,
                workRunLocation: m != null && f == null ? `local` : B,
                preferredHostId: g ?? void 0,
                signal: t,
              });
              t.throwIfAborted();
              let o = N == null ? void 0 : D;
              (N ?? (o = v ?? r?.current_live_url),
                M &&
                  D != null &&
                  N != null &&
                  A != null &&
                  j != null &&
                  (i.state.sitePreviewDraft = { accountId: A, userId: j, projectId: a }));
              let s = await Ie(n, i, o, N == null ? void 0 : O);
              return (s === `delegated` && W(), s);
            }),
      (e[50] = A),
      (e[51] = v),
      (e[52] = m),
      (e[53] = T),
      (e[54] = f),
      (e[55] = N),
      (e[56] = B),
      (e[57] = M),
      (e[58] = x),
      (e[59] = g),
      (e[60] = D),
      (e[61] = L),
      (e[62] = O),
      (e[63] = a),
      (e[64] = F),
      (e[65] = W),
      (e[66] = n),
      (e[67] = y),
      (e[68] = j),
      (e[69] = K))
    : (K = e[69]);
  let q;
  e[70] !== H || e[71] !== Oe || e[72] !== K
    ? ((q = {
        queryKey: H,
        enabled: Oe,
        queryFn: K,
        retry: !1,
        staleTime: 0,
        gcTime: 0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (e[70] = H),
      (e[71] = Oe),
      (e[72] = K),
      (e[73] = q))
    : (q = e[73]);
  let { data: ke, isError: Ae, isFetching: Me, refetch: Ne } = l(q),
    Pe = !Me && (Ae || ke === `blocked`);
  if (u != null && !he && (A != null || !ge) && A !== u) {
    let t;
    return (
      e[74] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(we, {
            className: `select-none`,
            layout: `page`,
            title: (0, Z.jsx)(S, {
              id: `siteEditRoute.accountMismatch`,
              defaultMessage: `Switch accounts to edit this site`,
              description: `Heading in Codex desktop when a Site edit link belongs to another ChatGPT workspace`,
            }),
            description: (0, Z.jsx)(S, {
              id: `siteEditRoute.accountMismatchDescription`,
              defaultMessage: `Sign in to the Site’s workspace in ChatGPT and reopen this link, or continue editing in the browser tab that opened ChatGPT`,
              description: `Recovery guidance when ChatGPT desktop cannot automatically switch to the workspace in a Site edit link`,
            }),
          })),
          (e[74] = t))
        : (t = e[74]),
      t
    );
  }
  if (ke === `unavailable`) {
    let t;
    return (
      e[75] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(ne, { to: `/sites`, replace: !0 })), (e[75] = t))
        : (t = e[75]),
      t
    );
  }
  if (ke === `desktop`) {
    let t;
    e[76] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(S, {
          id: `siteEditRoute.desktopHandoff`,
          defaultMessage: `Continue editing in the app`,
          description: `Heading on the Site edit page after attempting to open the existing Site task in the desktop app`,
        })),
        (e[76] = t))
      : (t = e[76]);
    let n;
    e[77] === C ? (n = e[78]) : ((n = () => de(C)), (e[77] = C), (e[78] = n));
    let r;
    e[79] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsx)(S, {
          id: `siteEditRoute.continueInBrowser`,
          defaultMessage: `Continue editing in browser`,
          description: `Button that skips desktop handoff and continues the Site edit in a browser draft with the full edit request`,
        })),
        (e[79] = r))
      : (r = e[79]);
    let i;
    return (
      e[80] === n
        ? (i = e[81])
        : ((i = (0, Z.jsx)(we, {
            className: `select-none`,
            layout: `page`,
            title: t,
            actions: (0, Z.jsx)(oe, { color: `primary`, onClick: n, children: r }),
          })),
          (e[80] = n),
          (e[81] = i)),
      i
    );
  }
  if (!Pe) {
    let t;
    return (
      e[82] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(me, { fillParent: !0 })), (e[82] = t))
        : (t = e[82]),
      t
    );
  }
  let J;
  e[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Z.jsx)(`span`, {
        role: `status`,
        children: (0, Z.jsx)(S, {
          id: `siteEditRoute.error`,
          defaultMessage: `Couldn’t open the site’s conversation`,
          description: `Error heading when navigating to a conversation to edit a Site fails`,
        }),
      })),
      (e[83] = J))
    : (J = e[83]);
  let Y;
  e[84] === Ne ? (Y = e[85]) : ((Y = () => void Ne()), (e[84] = Ne), (e[85] = Y));
  let X;
  e[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Z.jsx)(S, {
        id: `siteEditRoute.retry`,
        defaultMessage: `Retry`,
        description: `Retry opening a Site's conversation after a navigation failure`,
      })),
      (e[86] = X))
    : (X = e[86]);
  let Q;
  e[87] === Y
    ? (Q = e[88])
    : ((Q = (0, Z.jsx)(oe, { color: `secondary`, size: `medium`, onClick: Y, children: X })),
      (e[87] = Y),
      (e[88] = Q));
  let ze;
  e[89] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, Z.jsx)(S, {
        id: `siteEditRoute.back`,
        defaultMessage: `Back to Sites`,
        description: `Return to the Sites list while opening a Site's conversation or after an error`,
      })),
      (e[89] = ze))
    : (ze = e[89]);
  let $;
  e[90] === De
    ? ($ = e[91])
    : (($ = (0, Z.jsx)(oe, { color: `ghost`, size: `medium`, onClick: De, children: ze })),
      (e[90] = De),
      (e[91] = $));
  let Be;
  return (
    e[92] !== Q || e[93] !== $
      ? ((Be = (0, Z.jsx)(we, {
          className: `select-none`,
          layout: `page`,
          title: J,
          actions: (0, Z.jsxs)(Z.Fragment, { children: [Q, $] }),
        })),
        (e[92] = Q),
        (e[93] = $),
        (e[94] = Be))
      : (Be = e[94]),
    Be
  );
}
var Le, Re, Z;
function Q() {
  return (Q = e(() => {
    ((Le = d()),
      v(),
      b(),
      c(),
      _(),
      (Re = r()),
      h(),
      u(),
      I(),
      ke(),
      P(),
      j(),
      g(),
      H(),
      Se(),
      B(),
      y(),
      n(),
      V(),
      De(),
      Ne(),
      O(),
      Y(),
      (Z = s()));
  }))();
}
Q();
export { X as SiteEditRoute };
//# sourceMappingURL=site-edit-route-ec45c72f7a16.js.map
