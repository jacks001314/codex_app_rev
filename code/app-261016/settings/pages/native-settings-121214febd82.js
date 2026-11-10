import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $st as n,
  CH as r,
  HFt as i,
  LNt as a,
  LRt as o,
  NSt as s,
  PBt as c,
  Qst as l,
  SLt as u,
  TY as d,
  USt as f,
  VRt as p,
  XOt as m,
  Y3 as h,
  Z3 as g,
  ZSt as _,
  aq as v,
  aw as y,
  ew as b,
  hRt as x,
  iw as ee,
  kRt as S,
  mCt as C,
  nCt as w,
  okt as te,
  sct as ne,
  sw as re,
  tkt as T,
  tzt as ie,
  uw as E,
  wRt as D,
  w_t as ae,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $kn as oe,
  BRr as O,
  Bhr as k,
  Fat as se,
  GFr as ce,
  Iat as le,
  K8n as ue,
  M6t as A,
  Mnr as j,
  N6t as M,
  RMr as N,
  SRn as P,
  UFr as F,
  W8n as I,
  bRn as L,
  cA as R,
  eOt as z,
  jnr as B,
  rAn as V,
  sA as H,
  tOt as de,
  wLr as fe,
  zMr as U,
  zRr as W,
} from "./app-initial-ad16eaadf81f.js";
var G, K, q, J;
function Y() {
  return (Y = e(() => {
    (_(),
      i(),
      N(),
      fe(),
      j(),
      F(),
      ue(),
      n(),
      oe(),
      (G = S({
        setupUrl: ie().refine((e) => {
          let t = new URL(e);
          return (
            t.origin === `https://chatgpt.com` &&
            t.pathname === `/` &&
            t.hash.startsWith(`#settings/Connectors?`)
          );
        }),
        status: u([`connected`, `reconnect`, `disconnected`, `unavailable`]),
      })),
      (K = S({
        meetingsResponse: S({
          schemaVersion: x(1),
          request: u([`calendar.connections`, `context.connections`]),
          error: D().optional(),
          data: o(p(), G),
        }),
      })),
      (q = S({ ok: x(!0), protocolVersion: x(2), companionVersion: p().min(1) })),
      (J = C(l, (e, { get: t, scope: n }) => {
        let r = t(V),
          i = t(W),
          a = t(O),
          o = r?.pluginId === e && i != null && a != null && i === t(U);
        return {
          queryKey: [`meetings-settings-info`, e, i, a, r?.server],
          enabled: o,
          staleTime: 0,
          retry: !1,
          refetchOnWindowFocus: !0,
          queryFn: async ({ signal: t }) => {
            if (!o || r == null) return null;
            let s = () => {
                if (
                  (t.throwIfAborted(),
                  n.get(W) !== i ||
                    n.get(O) !== a ||
                    n.get(U) !== i ||
                    n.get(V)?.pluginId !== e ||
                    n.get(V)?.server !== r.server)
                )
                  throw Error(`Meetings settings account changed`);
              },
              c = async (e, t) => {
                s();
                let i = ce({
                    server: r.server,
                    toolScope: r.toolScope ?? null,
                    toolName: e,
                    toolArguments: t,
                    tools: r.serverTools,
                  }),
                  a = n.get(B).data?.version,
                  o = await I(n, r.hostId, r.server, i.name, t, {
                    beforeRequest: s,
                    retryOnTransportClosed: !1,
                    requestOptions: { timeoutMs: 15e3 },
                    hostToolCallMetadata: a == null ? void 0 : { "chatgpt-meetings/codex-app-version": a },
                  });
                if ((s(), o.isError)) throw Error(`Meetings settings information unavailable`);
                return o;
              },
              l = await Promise.allSettled([
                c(`chatgpt_meetings_get_snapshot`, { request: `calendar.connections` }).then(
                  (e) => K.parse(e._meta).meetingsResponse.data,
                ),
                c(`chatgpt_meetings_get_snapshot`, { request: `context.connections` }).then(
                  (e) => K.parse(e._meta).meetingsResponse.data,
                ),
                c(`chatgpt_meetings_local_status`, {}).then(
                  (e) => q.parse(e.structuredContent).companionVersion,
                ),
              ]);
            s();
            let [u, d, f] = l;
            return {
              connections: {
                ...(u.status === `fulfilled` ? u.value : {}),
                ...(d.status === `fulfilled` ? d.value : {}),
              },
              companionVersion: f.status === `fulfilled` ? f.value : null,
              failed: l.some((e) => e.status === `rejected`),
            };
          },
        };
      })));
  }))();
}
function pe(e) {
  let n = (0, X.c)(19),
    { pluginId: i, apps: a } = e,
    o = f(),
    s = te(),
    c;
  n[0] === a
    ? (c = n[1])
    : ((c = Q.flatMap((e) => {
        let [, t] = e;
        return a.some((e) => k(e.id) === k(t) && (e.logoUrl != null || e.logoUrlDark != null)) ? [] : [t];
      })),
      (n[0] = a),
      (n[1] = c));
  let l;
  n[2] === c ? (l = n[3]) : ((l = { hostId: ae, appIds: c }), (n[2] = c), (n[3] = l));
  let { data: u } = de(l),
    { data: d, isError: p, refetch: m } = w(J, i),
    g;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(H.Header, {
        title: (0, Z.jsx)(T, {
          id: `meetings.settings.apps`,
          defaultMessage: `Apps`,
          description: `Apps available to Meetings for calendar and note enrichment`,
        }),
      })),
      (n[4] = g))
    : (g = n[4]);
  let _;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = [!0, !1]), (n[5] = _)) : (_ = n[5]);
  let y;
  n[6] !== a || n[7] !== d?.connections || n[8] !== s || n[9] !== u || n[10] !== o
    ? ((y = (0, Z.jsxs)(H, {
        children: [
          g,
          (0, Z.jsx)(`div`, {
            className: `flex flex-col gap-6`,
            children: _.map((e) => {
              let n = Q.filter((t) => {
                let [n] = t;
                return (d?.connections[n]?.status === `connected`) === e;
              });
              return n.length === 0
                ? null
                : (0, Z.jsxs)(
                    H,
                    {
                      children: [
                        (0, Z.jsx)(H.Header, {
                          title: null,
                          subtitle: e
                            ? (0, Z.jsx)(T, {
                                id: `meetings.settings.connected`,
                                defaultMessage: `Connected`,
                                description: `Apps with an active connection`,
                              })
                            : (0, Z.jsx)(T, {
                                id: `meetings.settings.connectMoreApps`,
                                defaultMessage: `Connect more apps`,
                                description: `Apps available to connect for Meetings`,
                              }),
                        }),
                        (0, Z.jsx)(t, {
                          variant: `outlined`,
                          children: n.map((t) => {
                            let [n, i, c] = t,
                              l = a.find((e) => k(e.id) === k(i)),
                              f = u?.find((e) => k(e.id) === k(i)),
                              p = d?.connections[n],
                              m = (0, Z.jsx)(A, {
                                alt: ``,
                                appInfo: l,
                                logoUrl: f?.iconUrl,
                                logoDarkUrl: f?.iconUrlDark,
                                knownAppId: i,
                                className: `size-6`,
                                fallback: (0, Z.jsx)(v, {}),
                              }),
                              g = l?.name ?? f?.name ?? c;
                            if (e)
                              return (0, Z.jsx)(
                                ee,
                                {
                                  edgeRounding: `surface`,
                                  label: g,
                                  icon: m,
                                  trailing: (0, Z.jsx)(r, {}),
                                  onClick: () => void o(le(`apps`, i)),
                                },
                                i,
                              );
                            let _ = p?.status === `disconnected` || p?.status === `reconnect`,
                              y = (0, Z.jsx)(T, {
                                id: `meetings.settings.connectionUnavailable`,
                                defaultMessage: `Unavailable`,
                                description: `Connection status could not be read`,
                              });
                            return (
                              p?.status === `reconnect`
                                ? (y = (0, Z.jsx)(T, {
                                    id: `meetings.settings.reconnect`,
                                    defaultMessage: `Reconnect`,
                                    description: `Open the existing app reconnection flow`,
                                  }))
                                : _ &&
                                  (y = (0, Z.jsx)(T, {
                                    id: `meetings.settings.connect`,
                                    defaultMessage: `Connect`,
                                    description: `Open the existing app connection flow`,
                                  })),
                              (0, Z.jsx)(
                                re,
                                {
                                  label: g,
                                  icon: m,
                                  control: (0, Z.jsx)(h, {
                                    color: `outline`,
                                    size: `default`,
                                    radius: `large`,
                                    disabled: !_,
                                    "aria-label":
                                      p?.status === `reconnect`
                                        ? s.formatMessage(
                                            {
                                              id: `meetings.settings.reconnectApp`,
                                              defaultMessage: `Reconnect {app}`,
                                              description: `Accessible action to reconnect the named app`,
                                            },
                                            { app: g },
                                          )
                                        : s.formatMessage(
                                            {
                                              id: `meetings.settings.connectApp`,
                                              defaultMessage: `Connect {app}`,
                                              description: `Accessible action to connect the named app`,
                                            },
                                            { app: g },
                                          ),
                                    onClick: (e) => {
                                      p != null &&
                                        _ &&
                                        P({
                                          event: e,
                                          href: p.setupUrl,
                                          initiator: `open_in_browser_bridge`,
                                          openTarget: `external-browser`,
                                        });
                                    },
                                    children: y,
                                  }),
                                },
                                i,
                              )
                            );
                          }),
                        }),
                      ],
                    },
                    String(e),
                  );
            }),
          }),
        ],
      })),
      (n[6] = a),
      (n[7] = d?.connections),
      (n[8] = s),
      (n[9] = u),
      (n[10] = o),
      (n[11] = y))
    : (y = n[11]);
  let b;
  n[12] !== d?.failed || n[13] !== p || n[14] !== m
    ? ((b =
        p || d?.failed
          ? (0, Z.jsx)(h, {
              color: `secondary`,
              onClick: () => void m(),
              children: (0, Z.jsx)(T, {
                id: `meetings.settings.retryInfo`,
                defaultMessage: `Retry loading information`,
                description: `Retry reading Meetings connections and running companion version`,
              }),
            })
          : null),
      (n[12] = d?.failed),
      (n[13] = p),
      (n[14] = m),
      (n[15] = b))
    : (b = n[15]);
  let x;
  return (
    n[16] !== y || n[17] !== b
      ? ((x = (0, Z.jsxs)(Z.Fragment, { children: [y, b] })), (n[16] = y), (n[17] = b), (n[18] = x))
      : (x = n[18]),
    x
  );
}
function me(e) {
  let t = (0, X.c)(7),
    { pluginId: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = { enabled: !1 }), (t[0] = r)) : (r = t[0]);
  let { data: i, isFetching: a } = w(J, n, r),
    o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(T, {
        id: `meetings.settings.companionVersion`,
        defaultMessage: `Companion version`,
        description: `Running version of the local Meetings recording companion`,
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] !== i?.companionVersion || t[3] !== a
    ? ((s =
        i?.companionVersion ??
        (a
          ? (0, Z.jsx)(T, {
              id: `meetings.settings.versionLoading`,
              defaultMessage: `Loading…`,
              description: `The companion version is loading`,
            })
          : (0, Z.jsx)(T, {
              id: `meetings.settings.versionUnavailable`,
              defaultMessage: `Unavailable`,
              description: `No verified running companion version is available`,
            }))),
      (t[2] = i?.companionVersion),
      (t[3] = a),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] === s ? (c = t[6]) : ((c = (0, Z.jsx)(y, { label: o, children: s })), (t[5] = s), (t[6] = c)),
    c
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = c()),
      _(),
      ne(),
      m(),
      s(),
      z(),
      M(),
      g(),
      L(),
      d(),
      se(),
      R(),
      E(),
      b(),
      Y(),
      (Z = a()),
      (Q = [
        [`google`, `connector_947e0d954944416db111db556030eea6`, `Google Calendar`],
        [`outlook`, `connector_e6a7394682e24467ac68c60696f275a4`, `Outlook Calendar`],
        [`slack`, `asdk_app_69a1d78e929881919bba0dbda1f6436d`, `Slack`],
        [`teams`, `connector_246af0940da3457da0e751171dc1ce60`, `Teams`],
        [`gmail`, `connector_2128aebfecb84f64a069897515042a44`, `Gmail`],
        [`outlook_email`, `connector_4aaab2856305417b993eca9a216aaf6e`, `Outlook Email`],
        [`google_drive`, `connector_5f3c8c41a1e54ad7a76272c89e2554fa`, `Google Drive / Docs`],
        [`notion`, `asdk_app_69c18c28f1188191bf5b8445c4ab0a2e`, `Notion`],
        [`jira`, `connector_692de805e3ec8191834719067174a384`, `Jira`],
        [`linear`, `asdk_app_69a089a326dc8191b32a3f2553f5be2c`, `Linear`],
      ]));
  }))();
}
$();
export { me as MeetingsCompanionVersion, pe as MeetingsNativeSettings };
//# sourceMappingURL=native-settings-121214febd82.js.map
