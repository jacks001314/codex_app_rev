import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $j as n,
  Cat as r,
  Cot as i,
  Ext as a,
  IDt as o,
  Ixt as s,
  Jbt as ee,
  Nxt as te,
  Pxt as c,
  Qvt as l,
  USt as u,
  Vxt as d,
  Xot as ne,
  Yj as f,
  Yot as p,
  _xt as m,
  bxt as h,
  hPt as g,
  jDt as _,
  kxt as re,
  lgt as v,
  nst as ie,
  oxt as ae,
  rst as y,
  t3 as b,
  tst as x,
  vzt as S,
  wot as C,
  wxt as oe,
  xMt as w,
  xat as se,
  yzt as ce,
  zSt as T,
  zxt as le,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as ue,
  AEr as de,
  Air as fe,
  HBt as E,
  IYt as D,
  JPn as O,
  LUt as k,
  MEr as pe,
  Nbn as A,
  RUt as j,
  Rgr as M,
  ULn as me,
  WBt as he,
  XPr as ge,
  YPr as N,
  Ymr as P,
  ZPn as F,
  _gn as _e,
  aIr as I,
  aMr as ve,
  bEr as ye,
  bTn as be,
  cEr as L,
  ehr as R,
  fMr as z,
  fur as B,
  jCn as xe,
  kEr as Se,
  kir as V,
  lIr as H,
  oIr as U,
  pur as Ce,
  qwr as W,
  sEr as we,
  sIr as G,
  uIr as Te,
  vEr as Ee,
  yTn as De,
  ygn as K,
  zYt as q,
  zgr as Oe,
} from "./app-initial-5851df3f6cb1.js";
import { t as ke } from "./site-preview-request-a63df11a6b69.js";
function Ae() {
  return (Ae = e(() => {
    me();
  }))();
}
async function je(
  e,
  {
    projectId: t,
    latestEditContext: n,
    projectTitle: r,
    prompt: i,
    siteEditSource: a,
    mode: o,
    workRunLocation: s,
    preferredHostId: te,
    signal: c,
  },
) {
  c.throwIfAborted();
  let u = f({ projectId: t, title: r ?? t }),
    d = `${u} `;
  i != null && (d = V(i).some((e) => e.projectId === t) ? i : `${u} ${i}`);
  let ne = { focusComposerNonce: Date.now(), prefillPrompt: d, siteEditSource: i ? a : void 0 },
    p = o === `chat` || (o === `work` && s === `cloud`);
  try {
    if (p && n?.chatgpt_conversation_id) {
      let e = n.chatgpt_conversation_id,
        i = await P.safeGet(`/conversation/{conversation_id}`, {
          parameters: { path: { conversation_id: e } },
          signal: c,
        });
      if ((c.throwIfAborted(), !i.is_archived && !i.is_read_only))
        return {
          path: `${se(e, { gizmoId: i.gizmo_id })}?${new URLSearchParams({ prompt: d, promptSource: `codex-app` })}`,
          state: ne,
          preview: { conversationId: e, projectId: t, title: r ?? t },
        };
    } else if ((o === `codex` || (o === `work` && s === `local`)) && n?.codex_thread_id) {
      let i = ee(n.codex_thread_id),
        {
          hostId: a,
          manager: o,
          thread: s,
        } = await j({ scope: e, threadId: i, preferredHostId: te, requestOptions: { timeoutMs: 1e4 } });
      c.throwIfAborted();
      let u = s ?? (await o.readThread(i, { includeTurns: !1 })).thread;
      c.throwIfAborted();
      let d = N(e, a),
        f = await d.loadRecentConversationIds([i]);
      if ((c.throwIfAborted(), f.includes(i))) {
        let n = await d.resumeConversation(
          {
            conversationId: i,
            model: null,
            serviceTier: null,
            reasoningEffort: null,
            workspaceRoots: [u.cwd],
            useAppServerPermissionDefault: !1,
            preserveServerConfiguration: a === v,
          },
          { readResumeInputs: M(e, a) },
        );
        if ((c.throwIfAborted(), n.status !== `not-ready`))
          return {
            path: `${l(i)}?${new URLSearchParams({ hostId: a })}`,
            state: ne,
            preview: { conversationId: i, hostId: a, projectId: t, title: r ?? t },
          };
      }
    }
  } catch {
    c.throwIfAborted();
  }
  let m =
    i == null
      ? `${e.get(U).formatMessage({ id: `appgenConversation.editPrompt.requestChanges`, defaultMessage: `Make these changes to {siteMention}:`, description: `Prefilled prompt for editing an existing site from the Sites page. {siteMention} is the serialized Site mention and must remain intact. The user types their requested changes after the colon.` }, { siteMention: u })} `
      : d;
  return { path: `/`, state: { ...ne, prefillPrompt: m, project: null, codexAppMode: o } };
}
async function Me(e, t, n, r) {
  let i = e.get(G);
  if (t.path === `/`) {
    let n = !1;
    if (
      (q(e, {
        ...r,
        activeProject: null,
        prefillPrompt: t.state.prefillPrompt,
        siteEditSource: t.state.siteEditSource,
        codexAppMode: t.state.codexAppMode,
        startInSidebar: !0,
        replace: !0,
        onNavigate: () => {
          n = !0;
        },
      }),
      !n)
    )
      return `blocked`;
    V(t.state.prefillPrompt ?? ``)[0];
  } else if (!Te(e, t.path, { replace: !0, state: { ...r, ...t.state } })) return `blocked`;
  if ((t.preview != null && t.preview, n == null)) return `navigated`;
  await e.when(({ get: e }) => {
    let t = e(G);
    return t.pathname !== i.pathname || t.search !== i.search;
  });
  let a = e.get(G),
    { pathname: o, search: s = `` } = h(t.path);
  return (
    a.pathname === o &&
      (a.search ?? ``) === s &&
      F({ href: n, initiator: `sites_library`, openTarget: `in-app-browser` }),
    `navigated`
  );
}
function J() {
  return (J = e(() => {
    (y(), m(), k(), H(), ge(), Oe(), R(), r(), n(), O(), D(), A(), I(), W(), fe(), ke());
  }))();
}
function Ne() {
  let e = (0, Pe.c)(92),
    n = s(i),
    r = a(),
    ee = ie(),
    { projectId: c } = re(),
    [l] = te(),
    f;
  e[0] === l ? (f = e[1]) : ((f = l.get(`account_id`)?.trim() || null), (e[0] = l), (e[1] = f));
  let p = f,
    m;
  e[2] === l ? (m = e[3]) : ((m = l.get(`conversation_id`)), (e[2] = l), (e[3] = m));
  let h = m,
    g;
  e[4] === l ? (g = e[5]) : ((g = l.get(`codex_thread_id`)), (e[4] = l), (e[5] = g));
  let _ = g,
    v;
  e[6] === l ? (v = e[7]) : ((v = l.get(`hostId`)), (e[6] = l), (e[7] = v));
  let y = v,
    b;
  e[8] === l ? (b = e[9]) : ((b = l.get(`browser_url`)), (e[8] = l), (e[9] = b));
  let x = b,
    S = l.get(`site_edit_source`) === `widget` ? `widget` : void 0,
    C;
  e[10] === l ? (C = e[11]) : ((C = we(l)), (e[10] = l), (e[11] = C));
  let w = C,
    [se, ce] = (0, Fe.useState)(null),
    { key: T, state: fe } = oe(),
    E = se === T,
    D;
  e[12] === fe ? (D = e[13]) : ((D = fe ?? {}), (e[12] = fe), (e[13] = D));
  let O, k, A;
  e[14] === D
    ? ((O = e[15]), (k = e[16]), (A = e[17]))
    : (({ siteEditLiveUrl: O, siteEditContext: A, ...k } = D),
      (e[14] = D),
      (e[15] = O),
      (e[16] = k),
      (e[17] = A));
  let { accountId: j, userId: M, isLoading: me } = Ce(),
    { accountInfoLoading: ge } = d(ve),
    N = j != null && M != null && A?.accountId === j && A.userId === M && A.projectId === c ? A : void 0,
    P;
  e[18] !== N?.prompt || e[19] !== l
    ? ((P = l.get(`prompt`) ?? N?.prompt), (e[18] = N?.prompt), (e[19] = l), (e[20] = P))
    : (P = e[20]);
  let F = P,
    I = d(de),
    be = d(pe),
    L = I ? `work` : `codex`,
    R;
  e[21] === I
    ? (R = e[22])
    : ((R = ye({ windowType: `electron`, workModeEnabled: I })), (e[21] = I), (e[22] = R));
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
  let { effectiveLocation: B, unavailableReasons: xe } = le(he, z),
    Se = L === `work` && (xe.cloud === `loading` || xe.local === `loading`),
    V;
  e[25] !== j ||
  e[26] !== x ||
  e[27] !== _ ||
  e[28] !== E ||
  e[29] !== h ||
  e[30] !== N ||
  e[31] !== B ||
  e[32] !== y ||
  e[33] !== T ||
  e[34] !== O ||
  e[35] !== L ||
  e[36] !== k ||
  e[37] !== c ||
  e[38] !== F ||
  e[39] !== p ||
  e[40] !== S ||
  e[41] !== M
    ? ((V = [`site-edit`, T, j, p, M, c, L, B, O, N, k, h, _, y, x, F, S, E]),
      (e[25] = j),
      (e[26] = x),
      (e[27] = _),
      (e[28] = E),
      (e[29] = h),
      (e[30] = N),
      (e[31] = B),
      (e[32] = y),
      (e[33] = T),
      (e[34] = O),
      (e[35] = L),
      (e[36] = k),
      (e[37] = c),
      (e[38] = F),
      (e[39] = p),
      (e[40] = S),
      (e[41] = M),
      (e[42] = V))
    : (V = e[42]);
  let H = V,
    U;
  e[43] === r
    ? (U = e[44])
    : ((U = () => {
        r(`/sites`, { replace: !0 });
      }),
      (e[43] = r),
      (e[44] = U));
  let W = U,
    G;
  e[45] !== ee || e[46] !== W || e[47] !== H
    ? ((G = () => {
        (ee.cancelQueries({ queryKey: H, exact: !0 }), W());
      }),
      (e[45] = ee),
      (e[46] = W),
      (e[47] = H),
      (e[48] = G))
    : (G = e[48]);
  let Te = G,
    Ee = c != null && !me && !be && !Se && (p == null || j === p),
    K;
  e[49] !== j ||
  e[50] !== x ||
  e[51] !== _ ||
  e[52] !== E ||
  e[53] !== h ||
  e[54] !== N ||
  e[55] !== B ||
  e[56] !== w ||
  e[57] !== y ||
  e[58] !== O ||
  e[59] !== L ||
  e[60] !== k ||
  e[61] !== c ||
  e[62] !== F ||
  e[63] !== W ||
  e[64] !== n ||
  e[65] !== S
    ? ((K =
        c == null
          ? u
          : async (e) => {
              let { signal: t } = e,
                r = w ? await _e(c) : null;
              if ((t.throwIfAborted(), r != null && r.status !== `active`)) return `unavailable`;
              let i = await je(n, {
                projectId: c,
                latestEditContext: w
                  ? { chatgpt_conversation_id: h, codex_thread_id: _ }
                  : N?.latestEditContext,
                projectTitle: r?.title ?? N?.projectTitle,
                prompt: F,
                siteEditSource: S,
                mode: L,
                workRunLocation: _ != null && h == null ? `local` : B,
                preferredHostId: y ?? void 0,
                signal: t,
              });
              t.throwIfAborted();
              let a = N == null ? void 0 : O;
              N ?? (a = x ?? r?.current_live_url);
              let o = await Me(n, i, a, N == null ? void 0 : k);
              return (o === `delegated` && W(), o);
            }),
      (e[49] = j),
      (e[50] = x),
      (e[51] = _),
      (e[52] = E),
      (e[53] = h),
      (e[54] = N),
      (e[55] = B),
      (e[56] = w),
      (e[57] = y),
      (e[58] = O),
      (e[59] = L),
      (e[60] = k),
      (e[61] = c),
      (e[62] = F),
      (e[63] = W),
      (e[64] = n),
      (e[65] = S),
      (e[66] = K))
    : (K = e[66]);
  let q;
  e[67] !== H || e[68] !== Ee || e[69] !== K
    ? ((q = {
        queryKey: H,
        enabled: Ee,
        queryFn: K,
        retry: !1,
        staleTime: 0,
        gcTime: 0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (e[67] = H),
      (e[68] = Ee),
      (e[69] = K),
      (e[70] = q))
    : (q = e[70]);
  let { data: Oe, isError: ke, isFetching: Ae, refetch: J } = ne(q),
    Ne = !Ae && (ke || Oe === `blocked`);
  if (p != null && !me && (j != null || !ge) && j !== p) {
    let t;
    return (
      e[71] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(ue, {
            className: `select-none`,
            layout: `page`,
            title: (0, Y.jsx)(o, {
              id: `siteEditRoute.accountMismatch`,
              defaultMessage: `Switch accounts to edit this site`,
              description: `Heading in Codex desktop when a Site edit link belongs to another ChatGPT workspace`,
            }),
            description: (0, Y.jsx)(o, {
              id: `siteEditRoute.accountMismatchDescription`,
              defaultMessage: `Sign in to the Site’s workspace in ChatGPT and reopen this link, or continue editing in the browser tab that opened ChatGPT`,
              description: `Recovery guidance when ChatGPT desktop cannot automatically switch to the workspace in a Site edit link`,
            }),
          })),
          (e[71] = t))
        : (t = e[71]),
      t
    );
  }
  if (Oe === `unavailable`) {
    let t;
    return (
      e[72] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(ae, { to: `/sites`, replace: !0 })), (e[72] = t))
        : (t = e[72]),
      t
    );
  }
  if (Oe === `desktop`) {
    let n;
    e[73] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(o, {
          id: `siteEditRoute.desktopHandoff`,
          defaultMessage: `Continue editing in the app`,
          description: `Heading on the Site edit page after attempting to open the existing Site task in the desktop app`,
        })),
        (e[73] = n))
      : (n = e[73]);
    let r;
    e[74] === T ? (r = e[75]) : ((r = () => ce(T)), (e[74] = T), (e[75] = r));
    let i;
    e[76] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Y.jsx)(o, {
          id: `siteEditRoute.continueInBrowser`,
          defaultMessage: `Continue editing in browser`,
          description: `Button that skips desktop handoff and continues the Site edit in a browser draft with the full edit request`,
        })),
        (e[76] = i))
      : (i = e[76]);
    let a;
    return (
      e[77] === r
        ? (a = e[78])
        : ((a = (0, Y.jsx)(ue, {
            className: `select-none`,
            layout: `page`,
            title: n,
            actions: (0, Y.jsx)(t, { color: `primary`, onClick: r, children: i }),
          })),
          (e[77] = r),
          (e[78] = a)),
      a
    );
  }
  if (!Ne) {
    let t;
    return (
      e[79] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(De, { fillParent: !0 })), (e[79] = t))
        : (t = e[79]),
      t
    );
  }
  let X;
  e[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Y.jsx)(`span`, {
        role: `status`,
        children: (0, Y.jsx)(o, {
          id: `siteEditRoute.error`,
          defaultMessage: `Couldn’t open the site’s conversation`,
          description: `Error heading when navigating to a conversation to edit a Site fails`,
        }),
      })),
      (e[80] = X))
    : (X = e[80]);
  let Z;
  e[81] === J ? (Z = e[82]) : ((Z = () => void J()), (e[81] = J), (e[82] = Z));
  let Ie;
  e[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, Y.jsx)(o, {
        id: `siteEditRoute.retry`,
        defaultMessage: `Retry`,
        description: `Retry opening a Site's conversation after a navigation failure`,
      })),
      (e[83] = Ie))
    : (Ie = e[83]);
  let Q;
  e[84] === Z
    ? (Q = e[85])
    : ((Q = (0, Y.jsx)(t, { color: `secondary`, size: `medium`, onClick: Z, children: Ie })),
      (e[84] = Z),
      (e[85] = Q));
  let Le;
  e[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, Y.jsx)(o, {
        id: `siteEditRoute.back`,
        defaultMessage: `Back to Sites`,
        description: `Return to the Sites list while opening a Site's conversation or after an error`,
      })),
      (e[86] = Le))
    : (Le = e[86]);
  let $;
  e[87] === Te
    ? ($ = e[88])
    : (($ = (0, Y.jsx)(t, { color: `ghost`, size: `medium`, onClick: Te, children: Le })),
      (e[87] = Te),
      (e[88] = $));
  let Re;
  return (
    e[89] !== Q || e[90] !== $
      ? ((Re = (0, Y.jsx)(ue, {
          className: `select-none`,
          layout: `page`,
          title: X,
          actions: (0, Y.jsxs)(Y.Fragment, { children: [Q, $] }),
        })),
        (e[89] = Q),
        (e[90] = $),
        (e[91] = Re))
      : (Re = e[91]),
    Re
  );
}
var Pe, Fe, Y;
function X() {
  return (X = e(() => {
    ((Pe = S()),
      T(),
      p(),
      x(),
      c(),
      (Fe = ce()),
      _(),
      m(),
      z(),
      B(),
      E(),
      Ee(),
      b(),
      xe(),
      A(),
      be(),
      g(),
      C(),
      Se(),
      K(),
      L(),
      Ae(),
      J(),
      (Y = w()));
  }))();
}
X();
export { Ne as SiteEditRoute };
//# sourceMappingURL=site-edit-route-eaf6ea4d0711.js.map
