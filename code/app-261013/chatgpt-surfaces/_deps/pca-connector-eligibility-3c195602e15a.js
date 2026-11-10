const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./codex-app-home-beacon-connect-modal-c68b2bd9a0de.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./pca-connector-action-9318b684dcd3.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-connect-modal-by-id-a3e486d4397f.js",
      "./app-connect-modal-fb7e1b0124f4.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./app-connect-load-state-bbeb24b226fa.js",
      "./use-app-connect-flow-7088479fda99.js",
      "./app-connect-queries-d683cc7b9c3b.js",
      "./availability-7c47246e0e1c.js",
      "./microsoft-oauth-bundle-e77977413c17.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as n,
  Cot as r,
  Fat as i,
  Pat as a,
  Pxt as o,
  Zxt as s,
  fPt as c,
  frt as l,
  hot as u,
  hrt as d,
  lot as f,
  pPt as p,
  wot as m,
  z4 as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as g,
  AMr as _,
  BKt as v,
  F8t as y,
  FMr as ee,
  G6t as te,
  H6t as ne,
  JPn as re,
  Kur as ie,
  L8t as ae,
  NHn as oe,
  OPr as se,
  PHn as ce,
  QDr as le,
  QMr as b,
  Qjt as ue,
  R8t as de,
  U6t as x,
  W6t as S,
  Wur as fe,
  XDr as pe,
  Ymr as C,
  Yur as me,
  ZPn as he,
  Zjt as ge,
  aIr as w,
  dcr as _e,
  e$t as ve,
  eDr as ye,
  eMt as be,
  ehr as xe,
  idr as Se,
  jPr as Ce,
  oIr as T,
  t$t as we,
  tNr as Te,
  tPr as E,
  xKt as D,
  zOr as O,
} from "./app-initial-5851df3f6cb1.js";
import {
  Hv as k,
  Jg as A,
  Vv as j,
  av as M,
  ev as N,
  iv as Ee,
  ov as De,
  qg as Oe,
  tv as P,
} from "./app-primary-fe8a450b3b04.js";
function ke({
  scope: e,
  accountId: t,
  userId: n,
  isAccountPending: r,
  workspaceRequestPolicy: i,
  isCurrentPresentation: a,
}) {
  let o = () => t != null && k(e, t, n) && (a?.() ?? !0);
  return (a) => {
    let s = a.action_v2;
    if (s.action_enum === `request_account_team_contact` || s.action_enum === `request_workspace_credits`) {
      if (r) return N;
      if (t == null || n == null) return P;
      if (s.action_enum === `request_workspace_credits`) {
        let r = s.credit_type ?? `credits`,
          c = e.get(E, t);
        if (c.data == null) return c.isError ? P : N;
        let l = e.get(b).plan;
        if (c.data.account_user.role === `account-owner` || l == null || !(r === `credits` ? R : z).has(l))
          return P;
        if (r === `usage_limit`) {
          if (i === void 0) return N;
          if (i != null && i.kind !== `openai_native`) return P;
        }
        return async (i, s) => {
          if (!o() || s == null) return !1;
          let c = L.get(e);
          c ?? ((c = new WeakMap()), L.set(e, c));
          let l = c.get(s.beacon);
          l ?? ((l = new Map()), c.set(s.beacon, l));
          let f = `${t}:${n}:${r}`;
          if (l.has(f)) return !1;
          l.set(f, `pending`);
          try {
            let i = e.get(Ce),
              a = null;
            if (
              ee(e.get(b).plan) &&
              i?.getContext().user.customIDs?.workspace_id === t &&
              g(i, `2420641598`).get(`enable_usage_requests`, !1)
            ) {
              if (r === `credits`) a = `WORKSPACE_CREDITS_EXHAUSTED`;
              else {
                let r = e.query.getData(ce);
                if (r?.account_id === t && r.user_id === n) {
                  let e = r.spend_control?.individual_limit?.source;
                  e === `account_user_spend_controls`
                    ? (a = `INDIVIDUAL_SPEND_LIMIT_REACHED`)
                    : e === `workspace_spend_controls` && (a = `SEAT_TYPE_SPEND_LIMIT_REACHED`);
                }
              }
            }
            if (a != null)
              await C.safePost(`/accounts/{account_id}/usage_requests`, {
                parameters: { path: { account_id: t } },
                requestBody: { reason: a },
              });
            else if (
              !(
                await C.safePost(`/accounts/send_add_credits_nudge_email`, {
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  requestBody: { credit_type: r },
                })
              ).success
            )
              throw Error(`Workspace request not accepted`);
          } catch (t) {
            return (
              l.delete(f),
              o() &&
                (t instanceof d && t.status === 429
                  ? e
                      .get(u)
                      .info(
                        e
                          .get(T)
                          .formatMessage({
                            id: `chatgpt.beacons.workspace_credits.toast.rate_limit`,
                            defaultMessage: `A request was sent recently. Please try again later.`,
                            description: `A workspace credit request is rate limited; this does not confirm acceptance of the current request.`,
                          }),
                      )
                  : F(e)),
              !1
            );
          }
          l.set(f, `complete`);
          let p = o();
          return (
            p &&
              (s.eventMetadata?.suppressLifecycle !== !0 &&
                !we(s.beacon.beacon_id) &&
                le(e, ne, {
                  beaconId: s.beacon.beacon_id,
                  ctaId: a.id,
                  surface:
                    s.beacon.ui_info.type === `beacon_modal_info`
                      ? x.CHATGPT_WEB_WORKSPACE_CREDITS_REQUEST_SURFACE_MODAL
                      : x.CHATGPT_WEB_WORKSPACE_CREDITS_REQUEST_SURFACE_BANNER,
                  requestType:
                    r === `usage_limit`
                      ? S.CHATGPT_WEB_WORKSPACE_CREDITS_REQUEST_TYPE_USAGE_LIMIT
                      : S.CHATGPT_WEB_WORKSPACE_CREDITS_REQUEST_TYPE_CREDITS,
                }),
              e
                .get(u)
                .success(
                  e
                    .get(T)
                    .formatMessage({
                      id: `wham.sendAdminRequest.success`,
                      defaultMessage: `Request sent to your admin`,
                      description: `Confirmation that a request for more workspace capacity was sent to an administrator.`,
                    }),
                )),
            { didComplete: !0, eventAccountId: t, shouldResolve: p }
          );
        };
      }
      if (s.action_enum === `request_account_team_contact`)
        return async (r, i) => {
          if (!o() || i == null || !a.id) return !1;
          let c = I.get(e);
          c ?? ((c = new WeakMap()), I.set(e, c));
          let l = c.get(i.beacon);
          l ?? ((l = new Map()), c.set(i.beacon, l));
          let d = JSON.stringify([t, n, a.id, s.campaign_id, s.notification_type]),
            f = l.get(d);
          if (f?.status === `pending` || f?.status === `complete`) return !1;
          (f ?? ((f = { clientEventId: crypto.randomUUID(), status: `idle` }), l.set(d, f)),
            (f.status = `pending`));
          try {
            if (
              !(
                await C.safePost(`/beacons/request-account-team-contact`, {
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  requestBody: {
                    beacon_id: i.beacon.beacon_id,
                    event_cta_id: a.id,
                    campaign_id: s.campaign_id,
                    notification_type: s.notification_type,
                    client_event_id: f.clientEventId,
                  },
                })
              ).success
            )
              throw Error(`Account-team request not accepted`);
          } catch {
            return ((f.status = `idle`), o() && F(e), !1);
          }
          f.status = `complete`;
          let p = o();
          if (p) {
            let t = e.get(T),
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
              e.get(u).success(n));
          }
          return { didComplete: !0, eventAccountId: t, shouldResolve: p };
        };
    }
  };
}
function F(e) {
  e.get(u).danger(
    e
      .get(T)
      .formatMessage({
        id: `chatgpt.beacons.account_team_contact.toast.error.title`,
        defaultMessage: `Could not send your request. Try again.`,
        description: `Error after a workspace Beacon request fails; the button remains available to retry.`,
      }),
    { errorAnalytics: { toastId: `chatgpt.beacons.account_team_contact.toast.error.title` } },
  );
}
var I, L, R, z;
function B() {
  return (B = e(() => {
    (te(),
      Te(),
      O(),
      xe(),
      ve(),
      f(),
      oe(),
      w(),
      pe(),
      ye(),
      se(),
      _(),
      l(),
      j(),
      M(),
      (I = new WeakMap()),
      (L = new WeakMap()),
      (R = new Set([
        `team`,
        `self_serve_business_prolite`,
        `self_serve_business_usage_based`,
        `business`,
        `enterprise_cbp_usage_based`,
        `enterprise_cbp_automation`,
      ])),
      (z = new Set([...R, `sci`, `hc`, `hc_consumption`, `ent26`, `education`, `edu_plus`, `edu_pro`])));
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
    if (!t) return P;
    if (o || i) return N;
    if (n == null || a == null || r !== `workspace`) return P;
    let d = l.action_enum === `invite_team_members` && l.emails?.length === 1 ? l.emails[0] : void 0;
    return (t, r) => {
      if (!k(e, n, a) || !(s?.() ?? !0)) return !1;
      let i = new URL(`/admin/members`, D);
      return (
        i.searchParams.set(`account_id`, n),
        u && i.searchParams.set(`tab`, `requests`),
        d && i.searchParams.set(`search`, d),
        he({
          href: i.toString(),
          initiator: `open_in_browser_bridge`,
          openTarget: r?.useExternalBrowser ? `external-browser` : void 0,
        })
      );
    };
  };
}
function V() {
  return (V = e(() => {
    (v(), re(), j(), M());
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
    await A(e, t, i[0], i[1]);
  } catch {
    return { didComplete: !1, shouldShowSuccessToast: Promise.resolve(!1) };
  }
  return {
    didComplete: !0,
    shouldShowSuccessToast: Promise.allSettled(a.map(([n, r]) => A(e, t, n, r))).then((e) => {
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
  trustedAccountId: d,
  userId: f,
  userSettings: p,
  userSettingsAccountId: m,
  workspaceMemoryEnabled: h,
  workspaceRequestPolicy: g,
  isCurrentPresentation: _,
}) {
  let v = ke({
      scope: e,
      accountId: d,
      userId: f,
      isAccountPending: i,
      workspaceRequestPolicy: g,
      isCurrentPresentation: _,
    }),
    y = Ae({
      scope: e,
      allowExternalActions: t,
      accountId: d,
      accountStructure: n,
      isAccountStructurePending: r,
      userId: f,
      isAccountPending: i,
      isCurrentPresentation: _,
    });
  return (t) => {
    let n = y(t);
    if (n !== void 0) return n;
    let r = v(t);
    if (r !== void 0) return r;
    if (
      t.action_v2.action_enum === `request_premium_seat` ||
      (t.action_v2.action_enum === `request_workspace_upgrade_seat` && t.action_v2.seat_type === `prolite`)
    )
      return d != null && f != null && ge() ? () => be(e, { accountId: d, userId: f }) : i ? N : P;
    if (t.action_v2.action_enum === `request_workspace_upgrade_seat`)
      return i
        ? N
        : d == null || f == null
          ? P
          : async () => {
              let t = () => {
                let t = e.get(ae);
                return t?.accountId === d && t.userId === f;
              };
              if (!t()) return !1;
              let n = e.get(de, { accountId: d, userId: f });
              if (n.isPending) return !1;
              try {
                if (!(await n.mutateAsync())) return !1;
              } catch {
                return (
                  t() &&
                    e
                      .get(u)
                      .danger(
                        e
                          .get(T)
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
                    .get(u)
                    .success(
                      e
                        .get(T)
                        .formatMessage({
                          id: `chatgpt.beacons.workspace_access.toast.success`,
                          defaultMessage: `Request sent`,
                          description: `Success toast after a workspace member requests a Standard or Premium seat from a Beacon. Confirms submission for administrator approval, not that access was granted. Short title.`,
                        }),
                    ),
                { didComplete: !0, eventAccountId: d, shouldResolve: r }
              );
            };
    if (t.action_v2.action_enum === `update_user_personalization_setting`)
      return i
        ? N
        : d == null
          ? P
          : s
            ? N
            : h
              ? m == null || o
                ? N
                : m !== d || a || p == null || !Me(p)
                  ? P
                  : Fe({
                      scope: e,
                      memoryAction: t.action_v2,
                      onMemoryUpdateError: c,
                      onMemoryUpdateSuccess: l,
                      trustedAccountId: d,
                      userSettings: p,
                    })
              : P;
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
function H() {
  return (H = e(() => {
    (y(), f(), ue(), w(), Oe(), B(), M(), V());
  }))();
}
var U;
function W() {
  return (W = e(() => {
    (h(),
      p(),
      (U = n(
        async () =>
          (
            await c(
              async () => {
                let { CodexAppHomeBeaconConnectModal: e } = await import(
                  `./codex-app-home-beacon-connect-modal-c68b2bd9a0de.js`
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
function G({ actionItems: e, context: t, referencedActionIds: n, variant: r }) {
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
  if (n != null) return Ie(e, n, t, r);
  let i = r === `inline` ? e.slice(0, 3) : e;
  if (r === `inline`) return K(i, t, r);
  let a = i.find((e) => e.type === `copy` && e.action_v2.action_enum === `copy_to_clipboard`);
  if (a != null) return K([a], t, r);
  let o = i.find((e) => e.action_v2.action_enum === `dropdown`);
  return K(o == null ? i : [o], t, r);
}
function Ie(e, t, n, r) {
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
    M();
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
    ((Z = t(_e(), 1)),
      o(),
      Se(),
      m(),
      i(),
      (Q = s(r, (e, { scope: t }) => ({
        enabled: e.length > 0,
        queryFn: async () => {
          let n = await Promise.all(e.map((e) => t.queryClient.fetchQuery({ ...ie(e), retry: !1 })));
          return new Set(
            e.filter((e, t) => {
              let r = n[t];
              return r != null && r.status !== `DISABLED_BY_ADMIN` && fe(r) && me(r) !== `UNSUPPORTED`;
            }),
          );
        },
        queryKey: [`chatgpt-beacon`, `pca-connector-eligibility`, e],
        retry: !1,
        staleTime: a.FIVE_MINUTES,
      }))));
  }))();
}
export { Y as a, Pe as c, G as i, H as l, $ as n, U as o, Q as r, W as s, X as t };
//# sourceMappingURL=pca-connector-eligibility-3c195602e15a.js.map
