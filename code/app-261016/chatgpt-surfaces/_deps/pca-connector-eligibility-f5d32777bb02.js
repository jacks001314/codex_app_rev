const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./codex-app-home-beacon-connect-modal-d983b8adee89.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./pca-connector-action-e4a9b762a947.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-connect-modal-by-id-ee9e7bc8d7c4.js",
      "./app-connect-modal-763ad0733e86.js",
      "./app-connect-skeleton-990edda9425c.js",
      "./app-connect-load-state-80040a1f57f3.js",
      "./use-app-connect-flow-7fc070fa8fd7.js",
      "./app-connect-queries-f7767476a146.js",
      "./availability-e0ac6f935d38.js",
      "./microsoft-oauth-bundle-ca8e0d4a5995.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as n,
  Bst as r,
  F3 as i,
  I3 as a,
  OFt as o,
  Oit as s,
  Qst as c,
  Vrt as l,
  ZSt as u,
  jit as d,
  kFt as f,
  mCt as p,
  qrt as m,
  zst as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $$t as g,
  $Ot as _,
  CIr as v,
  CRn as y,
  D4t as ee,
  E4t as te,
  GOt as b,
  IVt as ne,
  Imr as re,
  KOt as ie,
  Mkt as ae,
  Nkt as oe,
  QOt as se,
  Rmr as ce,
  SIr as x,
  VRr as le,
  Vmr as S,
  WOt as ue,
  XGn as de,
  Xmr as fe,
  YOt as pe,
  ZGn as me,
  _4t as C,
  _Vt as he,
  bLr as w,
  bRn as ge,
  e1t as _e,
  efr as ve,
  g4t as T,
  h4t as ye,
  iRr as E,
  lNr as be,
  tRr as xe,
  tkt as Se,
  tyr as Ce,
  v4t as we,
  w4t as D,
  wLr as O,
  xMr as k,
  yMr as Te,
} from "./app-initial-ad16eaadf81f.js";
import {
  Cv as A,
  Dv as j,
  Ev as Ee,
  Ov as De,
  Sv as M,
  d_ as N,
  ly as P,
  u_ as Oe,
  uy as F,
} from "./app-primary-3e00728c2a4c.js";
function ke({
  scope: e,
  accountId: t,
  userId: n,
  isAccountPending: r,
  workspaceRequestPolicy: i,
  isCurrentPresentation: a,
}) {
  let o = () => t != null && F(e, t, n) && (a?.() ?? !0);
  return (a) => {
    let s = a.action_v2;
    if (s.action_enum === `request_account_team_contact` || s.action_enum === `request_workspace_credits`) {
      if (r) return M;
      if (t == null || n == null) return A;
      if (s.action_enum === `request_workspace_credits`) {
        let r = e.get(w),
          c = s.credit_type ?? `credits`,
          l = e.get(xe, t);
        if (l.data == null) return l.isError ? A : M;
        let u = e.get(le).plan;
        if (l.data.account_user.role === `account-owner` || u == null || !(c === `credits` ? z : B).has(u))
          return A;
        if (c === `usage_limit`) {
          if (i === void 0) return M;
          if (i != null && i.kind !== `openai_native`) return A;
        }
        return async (i, s) => {
          if (!o() || s == null) return !1;
          let l = R.get(e);
          l ?? ((l = new WeakMap()), R.set(e, l));
          let u = l.get(s.beacon);
          u ?? ((u = new Map()), l.set(s.beacon, u));
          let f = `${t}:${n}:${c}`;
          if (u.has(f)) return !1;
          u.set(f, `pending`);
          let p = `request_saved`,
            h = !1,
            g = () => o() && (!h || e.get(w) === r);
          try {
            let i = e.get(pe, t);
            if (i == null) throw Error(`Workspace request assignment is not ready`);
            h = i;
            let a = null;
            if (i) {
              let r = e.query.getData(me);
              ((a =
                r?.account_id === t && r.user_id === n
                  ? (r.rate_limit_upsell?.ctas.find((e) => e.action === `request_usage`)?.reason ?? null)
                  : null),
                (a ??= c === `credits` ? `WORKSPACE_CREDITS_LOW` : `INCLUDED_USAGE_LOW`));
            }
            if (a != null) {
              let i = await b(e, { accountId: t, userId: n, requestUserId: r }, a, {
                surface: ae.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_BEACON,
                showToast: !1,
                throwOnError: !0,
              });
              if (i === !1) return (u.delete(f), !1);
              p = i;
            } else if (
              !(
                await E.safePost(`/accounts/send_add_credits_nudge_email`, {
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  requestBody: { credit_type: c },
                })
              ).success
            )
              throw Error(`Workspace request not accepted`);
          } catch (t) {
            return (
              u.delete(f),
              g() &&
                (t instanceof d && t.status === 429
                  ? e
                      .get(m)
                      .info(
                        e
                          .get(v)
                          .formatMessage({
                            id: `chatgpt.beacons.workspace_credits.toast.rate_limit`,
                            defaultMessage: `A request was sent recently. Please try again later.`,
                            description: `A workspace credit request is rate limited; this does not confirm acceptance of the current request.`,
                          }),
                      )
                  : I(e)),
              !1
            );
          }
          u.set(f, `complete`);
          let _ = g();
          return (
            _ &&
              (s.eventMetadata?.suppressLifecycle !== !0 &&
                !_e(s.beacon.beacon_id) &&
                k(e, ye, {
                  beaconId: s.beacon.beacon_id,
                  ctaId: a.id,
                  surface:
                    s.beacon.ui_info.type === `beacon_modal_info`
                      ? T.CHATGPT_WEB_WORKSPACE_CREDITS_REQUEST_SURFACE_MODAL
                      : T.CHATGPT_WEB_WORKSPACE_CREDITS_REQUEST_SURFACE_BANNER,
                  requestType:
                    c === `usage_limit`
                      ? C.CHATGPT_WEB_WORKSPACE_CREDITS_REQUEST_TYPE_USAGE_LIMIT
                      : C.CHATGPT_WEB_WORKSPACE_CREDITS_REQUEST_TYPE_CREDITS,
                }),
              e
                .get(m)
                .success(
                  p === `seat_upgraded`
                    ? e.get(v).formatMessage(ie.upgraded)
                    : e
                        .get(v)
                        .formatMessage({
                          id: `wham.sendAdminRequest.success`,
                          defaultMessage: `Request sent to your admin`,
                          description: `Confirmation that a request for more workspace capacity was sent to an administrator.`,
                        }),
                )),
            { didComplete: !0, eventAccountId: t, shouldResolve: _ }
          );
        };
      }
      if (s.action_enum === `request_account_team_contact`)
        return async (r, i) => {
          if (!o() || i == null || !a.id) return !1;
          let c = L.get(e);
          c ?? ((c = new WeakMap()), L.set(e, c));
          let l = c.get(i.beacon);
          l ?? ((l = new Map()), c.set(i.beacon, l));
          let u = JSON.stringify([t, n, a.id, s.campaign_id, s.notification_type]),
            d = l.get(u);
          if (d?.status === `pending` || d?.status === `complete`) return !1;
          (d ?? ((d = { clientEventId: crypto.randomUUID(), status: `idle` }), l.set(u, d)),
            (d.status = `pending`));
          try {
            if (
              !(
                await E.safePost(`/beacons/request-account-team-contact`, {
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  requestBody: {
                    beacon_id: i.beacon.beacon_id,
                    event_cta_id: a.id,
                    campaign_id: s.campaign_id,
                    notification_type: s.notification_type,
                    client_event_id: d.clientEventId,
                  },
                })
              ).success
            )
              throw Error(`Account-team request not accepted`);
          } catch {
            return ((d.status = `idle`), o() && I(e), !1);
          }
          d.status = `complete`;
          let f = o();
          if (f) {
            let t = e.get(v),
              n;
            ((n =
              s.campaign_id === `701VU000012hNCcYAM` && s.notification_type === `beacon_account_signal_smb`
                ? t.formatMessage({
                    id: `chatgpt.beacons.enterprise_work_credits.toast.smb.success`,
                    defaultMessage: `Request received. Your promotion should activate within 24–48 hours.`,
                    description: `Confirms an accepted SMB Work promotion enrollment, with activation expected later.`,
                  })
                : s.campaign_id === `701VU000012hNCcYAM`
                  ? t.formatMessage({
                      id: `chatgpt.beacons.enterprise_work_credits.toast.upmarket.success`,
                      defaultMessage: `Thanks—we’ve notified your account team. Expect follow-up with next steps.`,
                      description: `Confirms that the account team will follow up on the Work credits promotion; credits have not been granted.`,
                    })
                  : t.formatMessage({
                      id: `chatgpt.beacons.account_team_contact.toast.success.title`,
                      defaultMessage: `Request sent`,
                      description: `Confirms submission to the account team, not that anyone has read or answered it.`,
                    })),
              e.get(m).success(n));
          }
          return { didComplete: !0, eventAccountId: t, shouldResolve: f };
        };
    }
  };
}
function I(e) {
  e.get(m).danger(
    e
      .get(v)
      .formatMessage({
        id: `chatgpt.beacons.account_team_contact.toast.error.title`,
        defaultMessage: `Could not send your request. Try again.`,
        description: `Error after a workspace Beacon request fails; the button remains available to retry.`,
      }),
    { errorAnalytics: { toastId: `chatgpt.beacons.account_team_contact.toast.error.title` } },
  );
}
var L, R, z, B;
function V() {
  return (V = e(() => {
    (we(),
      oe(),
      O(),
      be(),
      Ce(),
      g(),
      l(),
      de(),
      ue(),
      x(),
      Te(),
      s(),
      P(),
      j(),
      (L = new WeakMap()),
      (R = new WeakMap()),
      (z = new Set([
        `team`,
        `self_serve_business_prolite`,
        `self_serve_business_usage_based`,
        `business`,
        `enterprise_cbp_usage_based`,
        `enterprise_cbp_automation`,
      ])),
      (B = new Set([...z, `sci`, `hc`, `hc_consumption`, `ent26`, `education`, `edu_plus`, `edu_pro`])));
  }))();
}
function Ae({
  scope: e,
  allowExternalActions: t,
  accountId: n,
  accountStructure: r,
  isAccountStructurePending: i,
  userId: a,
  isAccountPending: o,
  isCurrentPresentation: s,
}) {
  return (c) => {
    let l = c.action_v2,
      u = l.action_enum === `open_url` && l.url === `/admin/members?tab=requests`;
    if (l.action_enum !== `invite_team_members` && !u) return;
    if (!t) return A;
    if (o || i) return M;
    if (n == null || a == null || r !== `workspace`) return A;
    let d = l.action_enum === `invite_team_members` && l.emails?.length === 1 ? l.emails[0] : void 0;
    return (t, r) => {
      if (!F(e, n, a) || !(s?.() ?? !0)) return !1;
      let i = new URL(`/admin/members`, he);
      return (
        i.searchParams.set(`account_id`, n),
        u && i.searchParams.set(`tab`, `requests`),
        d && i.searchParams.set(`search`, d),
        y({
          href: i.toString(),
          initiator: `open_in_browser_bridge`,
          openTarget: r?.useExternalBrowser ? `external-browser` : void 0,
        })
      );
    };
  };
}
function H() {
  return (H = e(() => {
    (ne(), ge(), P(), j());
  }))();
}
function je(e, t) {
  let n = t.m3mEnabled == null ? `sunshine` : `m3m`,
    r = [[n, e]];
  return (
    n === `sunshine` && t.moonshineEnabled != null && t.moonshineEnabled !== e && r.push([`moonshine`, e]),
    !e && t.memoryInSearchEnabled && r.push([`memory_in_search`, !1]),
    r
  );
}
function Me(e) {
  let t = e.m3mEnabled == null ? `sunshine` : `m3m`;
  return e.amphoraLocks?.[t] !== !0;
}
async function Ne(e, t, n, r) {
  let [i, ...a] = je(n, r);
  try {
    await N(e, t, i[0], i[1]);
  } catch {
    return { didComplete: !1, shouldShowSuccessToast: Promise.resolve(!1) };
  }
  return {
    didComplete: !0,
    shouldShowSuccessToast: Promise.allSettled(a.map(([n, r]) => N(e, t, n, r))).then((e) => {
      let t = a.findIndex(([e]) => e === `moonshine` && n && r.sunshineEnabled);
      return t === -1 || e[t]?.status === `fulfilled`;
    }),
  };
}
function Pe({
  scope: e,
  allowExternalActions: t,
  accountStructure: n,
  isAccountStructurePending: r,
  isAccountPending: i,
  isUserSettingsError: a,
  isUserSettingsLoading: o,
  isWorkspaceMemoryLoading: s,
  onMemoryUpdateError: c,
  onMemoryUpdateSuccess: l,
  trustedAccountId: u,
  userId: d,
  userSettings: f,
  userSettingsAccountId: p,
  workspaceMemoryEnabled: h,
  workspaceRequestPolicy: g,
  isCurrentPresentation: _,
}) {
  let y = ke({
      scope: e,
      accountId: u,
      userId: d,
      isAccountPending: i,
      workspaceRequestPolicy: g,
      isCurrentPresentation: _,
    }),
    b = Ae({
      scope: e,
      allowExternalActions: t,
      accountId: u,
      accountStructure: n,
      isAccountStructurePending: r,
      userId: d,
      isAccountPending: i,
      isCurrentPresentation: _,
    });
  return (t) => {
    let n = b(t);
    if (n !== void 0) return n;
    let r = y(t);
    if (r !== void 0) return r;
    if (
      t.action_v2.action_enum === `request_premium_seat` ||
      (t.action_v2.action_enum === `request_workspace_upgrade_seat` && t.action_v2.seat_type === `prolite`)
    )
      return u != null && d != null && se() ? () => Se(e, { accountId: u, userId: d }) : i ? M : A;
    if (t.action_v2.action_enum === `request_workspace_upgrade_seat`)
      return i
        ? M
        : u == null || d == null
          ? A
          : async () => {
              let t = () => {
                let t = e.get(te);
                return t?.accountId === u && t.userId === d;
              };
              if (!t()) return !1;
              let n = e.get(ee, { accountId: u, userId: d });
              if (n.isPending) return !1;
              try {
                if (!(await n.mutateAsync())) return !1;
              } catch {
                return (
                  t() &&
                    e
                      .get(m)
                      .danger(
                        e
                          .get(v)
                          .formatMessage({
                            id: `chatgpt.beacons.workspace_access.toast.error`,
                            defaultMessage: `Could not send your request. Try again.`,
                            description: `Error toast when a workspace member's Beacon request for a Standard or Premium seat fails. The member can retry the button. Short title.`,
                          }),
                        { errorAnalytics: { toastId: `chatgpt.beacons.workspace_access.toast.error` } },
                      ),
                  !1
                );
              }
              let r = t();
              return (
                r &&
                  e
                    .get(m)
                    .success(
                      e
                        .get(v)
                        .formatMessage({
                          id: `chatgpt.beacons.workspace_access.toast.success`,
                          defaultMessage: `Request sent`,
                          description: `Success toast after a workspace member requests a Standard or Premium seat from a Beacon. Confirms submission for administrator approval, not that access was granted. Short title.`,
                        }),
                    ),
                { didComplete: !0, eventAccountId: u, shouldResolve: r }
              );
            };
    if (t.action_v2.action_enum === `update_user_personalization_setting`)
      return i
        ? M
        : u == null
          ? A
          : s
            ? M
            : h
              ? p == null || o
                ? M
                : p !== u || a || f == null || !Me(f)
                  ? A
                  : Fe({
                      scope: e,
                      memoryAction: t.action_v2,
                      onMemoryUpdateError: c,
                      onMemoryUpdateSuccess: l,
                      trustedAccountId: u,
                      userSettings: f,
                    })
              : A;
  };
}
function Fe({
  scope: e,
  memoryAction: t,
  onMemoryUpdateError: n,
  onMemoryUpdateSuccess: r,
  trustedAccountId: i,
  userSettings: a,
}) {
  return async () => {
    let o = await Ne(e, i, t.memory_enabled, a);
    if (!o.didComplete) return (n(), !1);
    let s = t.success_toast_message?.trim();
    return (
      s &&
        o.shouldShowSuccessToast.then((e) => {
          e && r(s);
        }),
      !0
    );
  };
}
function U() {
  return (U = e(() => {
    (D(), l(), _(), x(), Oe(), V(), j(), H());
  }))();
}
var W;
function G() {
  return (G = e(() => {
    (i(),
      f(),
      (W = a(
        async () =>
          (
            await o(
              async () => {
                let { CodexAppHomeBeaconConnectModal: e } = await import(
                  `./codex-app-home-beacon-connect-modal-d983b8adee89.js`
                );
                return { CodexAppHomeBeaconConnectModal: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
              import.meta.url,
            )
          ).CodexAppHomeBeaconConnectModal,
        { propagateLoadError: !0 },
      )));
  }))();
}
function Ie({ actionItems: e, context: t, referencedActionIds: n, variant: r }) {
  if (r === `takeover`)
    return (e.length !== 1 && e.length !== 2) ||
      e[0]?.type !== `primary` ||
      (e.length === 2 && e[1]?.type !== `secondary`)
      ? {
          status: `unsupported`,
          diagnostic: {
            actionEnum: `unknown`,
            actionId: e[0]?.id ?? `unknown`,
            reason: `invalid_takeover_actions`,
          },
        }
      : K(e, t, r);
  if (n != null) return Le(e, n, t, r);
  let i = r === `inline` ? e.slice(0, 3) : e;
  if (r === `inline`) return K(i, t, r);
  let a = i.find((e) => e.type === `copy` && e.action_v2.action_enum === `copy_to_clipboard`);
  if (a != null) return K([a], t, r);
  let o = i.find((e) => e.action_v2.action_enum === `dropdown`);
  return K(o == null ? i : [o], t, r);
}
function Le(e, t, n, r) {
  return K(
    t.map((t) => e.find((e) => e.id === t) ?? t),
    n,
    r,
    !0,
  );
}
function K(e, t, n, r = !1) {
  let i = !1,
    a = !1;
  for (let o of e) {
    if (typeof o == `string`)
      return {
        status: `unsupported`,
        diagnostic: { actionEnum: `unknown`, actionId: o, reason: `missing_referenced_action` },
      };
    let e = q(o, t, n, !1, r);
    if (e.status === `unsupported`) return e;
    (e.status === `pending` && (i = !0), e.status === `unavailable` && (a = !0));
  }
  return i ? { status: `pending` } : a ? { status: `unavailable` } : { status: `supported` };
}
function q(e, t, n, r, i = !1) {
  let a = e.action_v2.action_enum ?? `unknown`;
  if (!i && !De(e)) return J(e, a, `missing_label`);
  if (e.action_v2.action_enum === `dropdown`) {
    if (r) return J(e, a, `nested_dropdown`);
    if (n === `inline` || n === `takeover`) return J(e, a, `unsupported_dropdown`);
    if (e.action_v2.items.length === 0) return J(e, a, `empty_dropdown`);
    let i = !1,
      o = !1;
    for (let r of e.action_v2.items) {
      let e = q(r, t, n, !0);
      if (e.status === `unsupported`) return e;
      (e.status === `pending` && (i = !0), e.status === `unavailable` && (o = !0));
    }
    return i ? { status: `pending` } : o ? { status: `unavailable` } : { status: `supported` };
  }
  let o = Ee(e, t);
  return o === `pending`
    ? { status: `pending` }
    : o === `unavailable`
      ? { status: `unavailable` }
      : o === `supported`
        ? { status: `supported` }
        : J(e, a, `missing_handler`);
}
function J(e, t, n) {
  return { status: `unsupported`, diagnostic: { actionEnum: t, actionId: e.id, reason: n } };
}
function Y() {
  return (Y = e(() => {
    j();
  }))();
}
function X(e) {
  return (0, Z.default)(
    e.flatMap(({ action_v2: e }) =>
      e.action_enum === `open_pca_connector_auth_modal`
        ? [e.connector_id]
        : e.action_enum === `dropdown`
          ? X(e.items)
          : [],
    ),
  ).sort();
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = t(ve(), 1)),
      u(),
      fe(),
      n(),
      r(),
      (Q = p(c, (e, { scope: t }) => ({
        enabled: e.length > 0,
        queryFn: async () => {
          let n = await Promise.all(e.map((e) => t.queryClient.fetchQuery({ ...ce(e), retry: !1 })));
          return new Set(
            e.filter((e, t) => {
              let r = n[t];
              return r != null && r.status !== `DISABLED_BY_ADMIN` && re(r) && S(r) !== `UNSUPPORTED`;
            }),
          );
        },
        queryKey: [`chatgpt-beacon`, `pca-connector-eligibility`, e],
        retry: !1,
        staleTime: h.FIVE_MINUTES,
      }))));
  }))();
}
export { Y as a, Pe as c, Ie as i, U as l, $ as n, W as o, Q as r, G as s, X as t };
//# sourceMappingURL=pca-connector-eligibility-f5d32777bb02.js.map
