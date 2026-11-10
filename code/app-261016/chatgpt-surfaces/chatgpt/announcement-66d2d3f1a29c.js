import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HFt as i,
  JO as a,
  KO as o,
  LNt as s,
  NLt as c,
  ORt as l,
  PBt as u,
  Qst as d,
  TY as f,
  VRt as p,
  XOt as m,
  Xat as h,
  Yat as g,
  ZSt as _,
  iCt as v,
  iV as y,
  kRt as b,
  mCt as x,
  nCt as S,
  tkt as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CJt as w,
  CRn as ee,
  HFt as te,
  JRr as T,
  SRn as E,
  UFt as ne,
  VFt as re,
  WFt as D,
  Xzr as O,
  bLr as k,
  bRn as ie,
  iRr as ae,
  imr as oe,
  jLr as se,
  jcn as ce,
  kLr as le,
  nzr as A,
  rmr as j,
  tLr as M,
  tyr as N,
  wLr as P,
  wcn as F,
  xJt as I,
} from "./app-initial-ad16eaadf81f.js";
import { Gb as L, Wb as R } from "./app-primary-3e00728c2a4c.js";
import { n as z, t as B } from "./admin-console-locale-834f71e5097c.js";
function V(e) {
  let t = (0, H.c)(20),
    { count: n, onDismiss: r, onPresented: i, onReview: a } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, U.jsx)(`img`, { alt: ``, src: ne, className: `h-full w-full object-cover` })), (t[0] = s))
    : (s = t[0]);
  let c, l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, U.jsx)(`span`, {
        className: `text-secondary`,
        children: (0, U.jsx)(C, {
          id: `chatgpt.enterprise_migration.modal.hero.personal.label`,
          defaultMessage: `Personal`,
          description: `Personal workspace label in the decorative illustration above the Enterprise admin migration notice; it is not an interactive switch`,
        }),
      })),
      (l = (0, U.jsx)(y, {})),
      (t[1] = c),
      (t[2] = l))
    : ((c = t[1]), (l = t[2]));
  let u, d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, U.jsxs)(`div`, {
        "aria-hidden": !0,
        className: `relative h-full w-full select-none`,
        children: [
          s,
          (0, U.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0 flex items-center justify-center px-5`,
            children: (0, U.jsxs)(`div`, {
              className: `flex items-center gap-4 rounded-full bg-surface px-5 py-3 text-base font-medium shadow-sm`,
              children: [
                c,
                l,
                (0, U.jsx)(`span`, {
                  className: `text-default`,
                  children: (0, U.jsx)(C, {
                    id: `chatgpt.enterprise_migration.modal.hero.enterprise.label`,
                    defaultMessage: `Enterprise`,
                    description: `ChatGPT Enterprise plan label in the decorative workspace migration illustration`,
                  }),
                }),
              ],
            }),
          }),
        ],
      })),
      (d = (0, U.jsx)(C, {
        id: `chatgpt.enterprise_migration.modal.title`,
        defaultMessage: `Review people with personal workspaces`,
        description: `Heading of a notice to Enterprise workspace admins about people with personal ChatGPT workspaces on the company's verified email domains`,
      })),
      (t[3] = u),
      (t[4] = d))
    : ((u = t[3]), (d = t[4]));
  let f;
  t[5] !== n.count || t[6] !== n.count_is_lower_bound
    ? ((f = (0, U.jsx)(o, {
        children: n.count_is_lower_bound
          ? (0, U.jsx)(C, {
              id: `chatgpt.enterprise_migration.modal.count.lower_bound`,
              defaultMessage: `{count, plural, one {At least # person with your company's verified email domains has a personal ChatGPT workspace} other {At least # people with your company's verified email domains have personal ChatGPT workspaces}}`,
              description: `Lower-bound count of people with personal workspaces matching this Enterprise workspace's verified email domains; count is a number of people, not workspaces, and the search is incomplete`,
              values: { count: n.count },
            })
          : (0, U.jsx)(C, {
              id: `chatgpt.enterprise_migration.modal.count.exact`,
              defaultMessage: `{count, plural, one {# person with your company's verified email domains has a personal ChatGPT workspace} other {# people with your company's verified email domains have personal ChatGPT workspaces}}`,
              description: `Count of people with personal workspaces matching this Enterprise workspace's verified email domains; count is a number of people, not workspaces`,
              values: { count: n.count },
            }),
      })),
      (t[5] = n.count),
      (t[6] = n.count_is_lower_bound),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] === n.scim_enabled
    ? (p = t[9])
    : ((p = (0, U.jsx)(`p`, {
        children: n.scim_enabled
          ? (0, U.jsx)(C, {
              id: `chatgpt.enterprise_migration.modal.personal_workspaces.guidance.scim`,
              defaultMessage: `Review these users in Personal workspaces, then assign them through your identity provider. A manual invitation does not confirm SCIM provisioning.`,
              description: `Instructions for Enterprise admins whose workspace uses SCIM; Personal workspaces is the Members tab in Admin Console, and identity provider assignment must be verified separately from manual invitations`,
            })
          : (0, U.jsx)(C, {
              id: `chatgpt.enterprise_migration.modal.personal_workspaces.guidance.manual`,
              defaultMessage: `Review these users in Personal workspaces and invite eligible people together`,
              description: `Instructions for Enterprise admins without SCIM to review the Personal workspaces tab on Members in Admin Console before sending bulk invitations`,
            }),
      })),
      (t[8] = n.scim_enabled),
      (t[9] = p));
  let m;
  t[10] !== f || t[11] !== p
    ? ((m = (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-3 text-sm text-secondary`,
        children: [f, p],
      })),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m))
    : (m = t[12]);
  let h, g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, U.jsx)(C, {
        id: `chatgpt.enterprise_migration.modal.invite_all.button.label`,
        defaultMessage: `Invite all`,
        description: `Primary button in the Enterprise personal workspace notice; opens the Personal workspaces tab on the Admin Console Members page for review before inviting eligible users, and does not send invitations itself`,
      })),
      (h = (0, U.jsx)(C, {
        id: `chatgpt.enterprise_migration.modal.dismiss.label`,
        defaultMessage: `Not now`,
        description: `Button dismisses the Enterprise personal workspace notice; admins can still review users from the Members page`,
      })),
      (t[13] = h),
      (t[14] = g))
    : ((h = t[13]), (g = t[14]));
  let _;
  return (
    t[15] !== r || t[16] !== i || t[17] !== a || t[18] !== m
      ? ((_ = (0, U.jsx)(re, {
          actionLayout: `stacked`,
          hasDescription: !0,
          shouldIgnoreClickOutside: !0,
          onDismiss: r,
          onOpenAutoFocus: i,
          onPrimaryAction: a,
          media: u,
          title: d,
          body: m,
          primaryActionLabel: g,
          tertiaryActionLabel: h,
        })),
        (t[15] = r),
        (t[16] = i),
        (t[17] = a),
        (t[18] = m),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = u()), m(), D(), a(), f(), te(), (U = s()));
  }))();
}
var G, K, q;
function J() {
  return (J = e(() => {
    (_(),
      i(),
      A(),
      N(),
      n(),
      le(),
      (G = b({
        workspace_id: p().min(1),
        enabled: c(),
        scim_enabled: c(),
        count: l().int().nonnegative(),
        count_is_lower_bound: c(),
      })),
      (K = se(
        ({ userId: e, accountId: t }) =>
          `enterprise-personal-workspace-migration-seen:${JSON.stringify([e, t])}`,
        !1,
      )),
      (q = x(d, ({ accountId: e, userId: t, requestUserId: n, accountUserId: r, role: i }) => ({
        queryKey: [`enterprise-migration-count`, e, t, n, r, i],
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        queryFn: async ({ signal: t }) => {
          let n = T(),
            r = G.parse(
              await ae.safeGet(`/accounts/{account_id}/migration-candidates/count`, {
                parameters: { path: { account_id: e } },
                additionalHeaders: { "ChatGPT-Account-ID": e, "Cache-Control": `no-store` },
                signal: t,
                retry: !1,
              }),
            );
          if ((t.throwIfAborted(), n !== T())) throw Error(`Migration count authentication changed`);
          if (r.workspace_id !== e) throw Error(`Migration count workspace mismatch`);
          return r;
        },
      }))));
  }))();
}
function ue() {
  let e = (0, Y.c)(15),
    { accountId: t, userId: n, authMethod: r, isLoading: i } = oe(),
    a = v(k),
    o = v(I),
    s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = { preview: !1 }), (e[0] = s)) : (s = e[0]);
  let { data: c, isLoading: l, isError: u } = ce(void 0, s);
  if (
    !o ||
    i ||
    l ||
    u ||
    r !== `chatgpt` ||
    t == null ||
    n == null ||
    a == null ||
    c?.id !== t ||
    c.account_user_id == null ||
    c.structure !== `workspace` ||
    !Q.has(c.plan_type) ||
    (c.account_user_role !== `account-owner` && c.account_user_role !== `account-admin`)
  )
    return null;
  let d;
  e[1] !== c.account_user_id ||
  e[2] !== c.account_user_role ||
  e[3] !== c.plan_type ||
  e[4] !== t ||
  e[5] !== a ||
  e[6] !== n
    ? ((d = JSON.stringify([t, n, a, c.account_user_id, c.account_user_role, c.plan_type])),
      (e[1] = c.account_user_id),
      (e[2] = c.account_user_role),
      (e[3] = c.plan_type),
      (e[4] = t),
      (e[5] = a),
      (e[6] = n),
      (e[7] = d))
    : (d = e[7]);
  let f;
  return (
    e[8] !== c.account_user_id ||
    e[9] !== c.account_user_role ||
    e[10] !== t ||
    e[11] !== a ||
    e[12] !== d ||
    e[13] !== n
      ? ((f = (0, Z.jsx)(
          de,
          {
            accountId: t,
            userId: n,
            requestUserId: a,
            accountUserId: c.account_user_id,
            role: c.account_user_role,
          },
          d,
        )),
        (e[8] = c.account_user_id),
        (e[9] = c.account_user_role),
        (e[10] = t),
        (e[11] = a),
        (e[12] = d),
        (e[13] = n),
        (e[14] = f))
      : (f = e[14]),
    f
  );
}
function de(e) {
  let n = (0, Y.c)(16),
    r = t(d),
    i;
  n[0] !== e.accountId || n[1] !== e.requestUserId
    ? ((i = { userId: e.requestUserId, accountId: e.accountId }),
      (n[0] = e.accountId),
      (n[1] = e.requestUserId),
      (n[2] = i))
    : (i = n[2]);
  let a = S(K, i),
    [o, s] = (0, X.useState)(!1),
    [c, l] = (0, X.useState)(!1),
    u = !c && (!a || o),
    f;
  n[3] === u ? (f = n[4]) : ((f = { enabled: u }), (n[3] = u), (n[4] = f));
  let { data: p, isFetching: m, isError: h } = S(q, e, f),
    _;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = () => l(!0)), (n[5] = _)) : (_ = n[5]);
  let v = _;
  if (c || (a && !o) || m || h || !p?.enabled || p.count === 0) return null;
  let y;
  n[6] === e ? (y = n[7]) : ((y = JSON.stringify(e)), (n[6] = e), (n[7] = y));
  let b = `enterprise-migration:${y}`,
    x;
  n[8] !== p || n[9] !== e.accountId || n[10] !== e.requestUserId || n[11] !== r
    ? ((x = (t) =>
        (0, Z.jsx)(V, {
          count: p,
          onDismiss: v,
          onPresented: () => {
            (s(!0), r.set(K, { userId: e.requestUserId, accountId: e.accountId }, !0), t());
          },
          onReview: (t) => {
            let n = new URL(
              `/workspace/${encodeURIComponent(e.accountId)}/members`,
              g().auth.provider === `openai-dev`
                ? `https://admin.api.openai.org`
                : `https://admin.openai.com`,
            );
            (n.searchParams.set(`tab`, `migration`),
              n.searchParams.set(`redirectfrom`, `chatgpt`),
              B(n),
              v(),
              t == null
                ? ee({ href: n.toString(), initiator: `open_in_browser_bridge` })
                : E({ event: t, href: n.toString(), initiator: `open_in_browser_bridge` }));
          },
        })),
      (n[8] = p),
      (n[9] = e.accountId),
      (n[10] = e.requestUserId),
      (n[11] = r),
      (n[12] = x))
    : (x = n[12]);
  let C;
  return (
    n[13] !== b || n[14] !== x
      ? ((C = (0, Z.jsx)(R, {
          source: `enterprise-migration`,
          candidate: { id: b, status: `eligible`, waitsForPresentation: !0, render: x },
        })),
        (n[13] = b),
        (n[14] = x),
        (n[15] = C))
      : (C = n[15]),
    C
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = u()),
      _(),
      (X = r()),
      P(),
      j(),
      h(),
      F(),
      ie(),
      n(),
      z(),
      w(),
      M(),
      L(),
      W(),
      J(),
      (Z = s()),
      (Q = new Set([
        O.ENTERPRISE_CBP,
        O.ENTERPRISE_CBP_USAGE_BASED,
        O.ENTERPRISE_CBP_AUTOMATION,
        O.ENTERPRISE_CBP_TRIAL,
        O.ENTERPRISE_CBP_VIEW_ONLY,
        O.ENT26,
        O.HC,
        O.HC_CONSUMPTION,
        O.FINSERV,
        O.LAW,
        O.DEPRECATED_ENTERPRISE,
      ])));
  }))();
}
$();
export { ue as EnterpriseMigrationAnnouncement };
//# sourceMappingURL=announcement-66d2d3f1a29c.js.map
