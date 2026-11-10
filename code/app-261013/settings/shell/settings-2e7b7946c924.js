const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./account-dialog-eb8c1dd025d1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-connect-modal-fb7e1b0124f4.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./app-connect-modal-by-id-a3e486d4397f.js",
      "./app-connect-load-state-bbeb24b226fa.js",
      "./use-app-connect-flow-7088479fda99.js",
      "./app-connect-queries-d683cc7b9c3b.js",
      "./availability-7c47246e0e1c.js",
      "./microsoft-oauth-bundle-e77977413c17.js",
      "./connector-logo-stack-f9fdd0a03bf9.js",
      "./apps-availability-30e091a5d405.js",
      "./new-chat-page-suggestions-eligibility-15ea6f3b5a27.js",
      "./background-b4c0c6f8f01e.js",
      "./writing-style-demo-cab6908153aa.js",
      "./contracts-80c91d59a0a6.js",
      "./preference-b164b95b048a.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Hbt as r,
  IDt as i,
  Ixt as a,
  JC as o,
  MO as s,
  Pxt as c,
  VDt as l,
  Vxt as u,
  fPt as d,
  hot as f,
  i3 as p,
  iot as m,
  iw as h,
  jDt as g,
  jO as _,
  lot as v,
  oot as y,
  pPt as b,
  qC as x,
  r3 as S,
  rst as C,
  t3 as w,
  tw as T,
  vzt as E,
  wot as D,
  xMt as O,
  yzt as k,
  zxt as A,
} from "./app-shared-bbfeca5e5737.js";
import {
  Aur as ee,
  D_r as te,
  Ek as ne,
  G4n as re,
  J4n as j,
  JC as ie,
  M_r as M,
  P_r as ae,
  QMr as N,
  S_r as P,
  Tk as F,
  aIr as oe,
  b_r as se,
  dIn as ce,
  fMr as le,
  fur as ue,
  gOr as I,
  hOr as L,
  k_r as R,
  kur as z,
  lIr as B,
  m_r as V,
  oIr as H,
  pur as de,
  qC as fe,
  sIr as pe,
  tNr as U,
  uIn as me,
  xMr as he,
} from "./app-initial-5851df3f6cb1.js";
import { n as ge, r as W, t as _e } from "./preference-b164b95b048a.js";
async function ve(e, t, n) {
  let i = e.get(I),
    a = e.get(N).userId,
    o = () => !n?.aborted && e.get(I) === i && e.get(N).userId === a && e.get(he).status === `allowed`;
  if (i != null && a != null && o())
    try {
      let { AccountWritingStyleDialog: n } = await d(
        async () => {
          let { AccountWritingStyleDialog: e } = await import(`./account-dialog-eb8c1dd025d1.js`);
          return { AccountWritingStyleDialog: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        import.meta.url,
      );
      if (!o()) return;
      if (ee(t.hostId) || t.hostId === `durable`) {
        j(e, n, { ...t, project: null, workspaceRoots: [], accountId: i, userId: a });
        return;
      }
      if (
        t.project === void 0 &&
        e.get(R) === void 0 &&
        (await e.query.getOrFetch(M, r.SELECTED_PROJECT), !o() || e.get(R) !== void 0)
      )
        return;
      let s = t.project === void 0 ? e.get(P) : t.project;
      if (s != null) {
        let n = s.type === `remote` ? r.REMOTE_PROJECTS : r.LOCAL_PROJECTS;
        if ((e.query.getData(M, n) ?? (await e.query.getOrFetch(M, n)), !o())) return;
        let i = e.get(P);
        if (t.project === void 0 && (i?.type !== s.type || i.projectId !== s.projectId)) return;
      }
      let c = s?.type === `remote` ? e.get(se, s.projectId)?.hostId : m,
        l = e.get(te, s);
      ((c !== t.hostId || (t.workspaceRoots != null && !t.workspaceRoots.every((e) => l.includes(e)))) &&
        (s = null),
        j(e, n, {
          ...t,
          project: s,
          workspaceRoots: t.workspaceRoots ?? (s == null ? [] : l),
          accountId: i,
          userId: a,
        }));
    } catch {
      if (!o()) return;
      e.get(f).danger(
        e
          .get(H)
          .formatMessage({
            id: `writingStyle.notReady`,
            defaultMessage: `Writing style isn't ready yet. Try again.`,
            description: `Recoverable error when the Writing style setup dialog could not be loaded`,
          }),
        { errorAnalytics: { toastId: `writingStyle.notReady` } },
      );
    }
}
function G() {
  return (G = e(() => {
    (C(), z(), L(), U(), le(), re(), v(), ae(), oe(), V(), y(), b());
  }))();
}
function ye(e) {
  let n = (0, K.c)(15),
    { disabled: r, enabled: a, error: o, pending: s, onEnabledChange: c, onRetry: u } = e,
    d = l(),
    f;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(F.Header, {
        size: `large`,
        title: (0, q.jsx)(i, {
          id: `writingStyle.settings.section`,
          defaultMessage: `Writing`,
          description: `Heading in Personalization settings for the optional writing-style preference`,
        }),
      })),
      (n[0] = f))
    : (f = n[0]);
  let p, m;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, q.jsx)(i, {
        id: `writingStyle.settings.label`,
        defaultMessage: `Reference my writing style`,
        description: `Toggle for enabling the Writing style plugin in Personalization settings; refers to written voice, not typography`,
      })),
      (m = (0, q.jsx)(i, {
        id: `writingStyle.settings.description`,
        defaultMessage: `Let ChatGPT use your chats, Library files, and connected apps to write in your style`,
        description: `Supporting text beneath the Writing style preference. Library is ChatGPT's file library, and connecting external apps is optional.`,
      })),
      (n[1] = p),
      (n[2] = m))
    : ((p = n[1]), (m = n[2]));
  let h;
  n[3] !== r || n[4] !== a || n[5] !== c || n[6] !== s
    ? ((h = (0, q.jsx)(x, {
        children: (0, q.jsx)(T, {
          label: p,
          description: m,
          control: (e) =>
            (0, q.jsxs)(q.Fragment, {
              children: [
                s ? (0, q.jsx)(S, {}) : null,
                (0, q.jsx)(_, { ...e, "aria-busy": s, checked: a, disabled: s || (!a && r), onChange: c }),
                s
                  ? (0, q.jsx)(`span`, {
                      className: `sr-only`,
                      role: `status`,
                      children: (0, q.jsx)(i, {
                        id: `writingStyle.settings.saving`,
                        defaultMessage: `Checking writing style setting…`,
                        description: `Accessible status while the saved Writing style preference is loading or a change is awaiting confirmation`,
                      }),
                    })
                  : null,
              ],
            }),
        }),
      })),
      (n[3] = r),
      (n[4] = a),
      (n[5] = c),
      (n[6] = s),
      (n[7] = h))
    : (h = n[7]);
  let g;
  n[8] !== o || n[9] !== d || n[10] !== u
    ? ((g = o
        ? (0, q.jsxs)(`div`, {
            role: `alert`,
            className: `flex items-center gap-2`,
            children: [
              (0, q.jsx)(`p`, {
                children: (0, q.jsx)(i, {
                  id: `writingStyle.settings.error`,
                  defaultMessage: `Writing style couldn't be updated. Try again.`,
                  description: `Recoverable error saving Writing style; the user can retry the change`,
                }),
              }),
              (0, q.jsx)(t, {
                className: `shrink-0`,
                "aria-label": d.formatMessage({
                  id: `writingStyle.settings.retryLabel`,
                  defaultMessage: `Retry updating writing style`,
                  description: `Accessible name of the action that retries a failed Writing style setting change or read`,
                }),
                color: `secondary`,
                onClick: u,
                size: `toolbar`,
                children: (0, q.jsx)(i, {
                  id: `writingStyle.settings.retry`,
                  defaultMessage: `Retry`,
                  description: `Button to retry a failed Writing style setting change or read without reversing a change that already saved`,
                }),
              }),
            ],
          })
        : null),
      (n[8] = o),
      (n[9] = d),
      (n[10] = u),
      (n[11] = g))
    : (g = n[11]);
  let v;
  return (
    n[12] !== h || n[13] !== g
      ? ((v = (0, q.jsxs)(F, { className: `select-none`, children: [f, h, g] })),
        (n[12] = h),
        (n[13] = g),
        (n[14] = v))
      : (v = n[14]),
    v
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = E()), g(), w(), p(), s(), ne(), h(), o(), (q = O()));
  }))();
}
function be(e) {
  let t = (0, X.c)(7),
    { hostId: n } = e,
    { accountId: r, userId: i } = de();
  if (r == null || i == null) return null;
  let a = `${r}:${i}:${n}`,
    o;
  t[0] !== r || t[1] !== n || t[2] !== i
    ? ((o = { accountId: r, userId: i, hostId: n }), (t[0] = r), (t[1] = n), (t[2] = i), (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, Q.jsx)(Y, { account: o }, a)), (t[4] = a), (t[5] = o), (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Y(e) {
  let t = (0, X.c)(20),
    { account: r } = e,
    i = a(n),
    o = u(I),
    { data: s, error: c, isFetching: l, refetch: d } = A(ge, r),
    { isPending: f, mutateAsync: p, data: m, error: h, variables: g } = A(W, r),
    _ = (0, Z.useRef)(null),
    v = g?.hostId === r.hostId && (m?.status === `failed` || h != null) ? g.enabled : void 0,
    y = f || (s == null && l) || o !== r.accountId,
    b,
    x;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => () => {
        _.current = null;
      }),
      (x = []),
      (t[0] = b),
      (t[1] = x))
    : ((b = t[0]), (x = t[1])),
    (0, Z.useEffect)(b, x));
  let S;
  t[2] !== r || t[3] !== p || t[4] !== i
    ? ((S = async (e) => {
        if (i.get(I) !== r.accountId || i.get(N).userId !== r.userId || i.get(W, r).isPending) return;
        _.current?.abort();
        let t = new AbortController();
        _.current = t;
        try {
          let n = await p({ enabled: e, entryPoint: `settings`, signal: t.signal, hostId: r.hostId });
          if (e && n.status === `saved` && _.current === t && !t.signal.aborted) {
            let e = i.get(pe).prepareNavigation(i.get(ie) ?? `/`, { replace: !0 });
            if (
              e == null ||
              ((_.current = null), await e(), i.get(I) !== r.accountId || i.get(N).userId !== r.userId)
            )
              return;
            await ve(i, { hostId: r.hostId, entryPoint: `settings` });
          }
        } catch {}
      }),
      (t[2] = r),
      (t[3] = p),
      (t[4] = i),
      (t[5] = S))
    : (S = t[5]);
  let C = S,
    w = y || s?.canInstall !== !0,
    T = s?.enabled === !0,
    E = !y && (v != null || c != null),
    D;
  t[6] !== C || t[7] !== i
    ? ((D = (e) => {
        (i.get(me).count(`default`, `write_like_me.settings_toggle`, { enabled: String(e) }), C(e));
      }),
      (t[6] = C),
      (t[7] = i),
      (t[8] = D))
    : (D = t[8]);
  let O;
  t[9] !== C || t[10] !== v || t[11] !== d
    ? ((O = () => {
        v == null ? d() : C(v);
      }),
      (t[9] = C),
      (t[10] = v),
      (t[11] = d),
      (t[12] = O))
    : (O = t[12]);
  let k;
  return (
    t[13] !== y || t[14] !== w || t[15] !== T || t[16] !== E || t[17] !== D || t[18] !== O
      ? ((k = (0, Q.jsx)(ye, {
          disabled: w,
          enabled: T,
          error: E,
          pending: y,
          onEnabledChange: D,
          onRetry: O,
        })),
        (t[13] = y),
        (t[14] = w),
        (t[15] = T),
        (t[16] = E),
        (t[17] = D),
        (t[18] = O),
        (t[19] = k))
      : (k = t[19]),
    k
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = E()), c(), (Z = k()), ce(), B(), L(), U(), ue(), D(), fe(), G(), _e(), J(), (Q = O()));
  }))();
}
$();
export { be as WritingStyleSettings };
//# sourceMappingURL=settings-2e7b7946c924.js.map
