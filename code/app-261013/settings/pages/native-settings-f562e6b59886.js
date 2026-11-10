import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $C as n,
  $It as r,
  Cot as i,
  DV as a,
  EPt as o,
  Ext as s,
  IDt as c,
  JC as l,
  Pxt as u,
  QC as d,
  TJ as f,
  TLt as p,
  VDt as m,
  Zxt as h,
  _xt as g,
  cK as ee,
  cLt as _,
  iw as v,
  jDt as y,
  lgt as b,
  oIt as x,
  pLt as S,
  qC as te,
  rst as C,
  t3 as ne,
  tw as re,
  vzt as w,
  wot as T,
  xLt as E,
  xMt as ie,
  zLt as ae,
  zxt as D,
} from "./app-shared-bbfeca5e5737.js";
import {
  AEn as oe,
  Ek as se,
  GMr as O,
  JPn as ce,
  PEn as k,
  Sjr as le,
  Tk as A,
  Udr as j,
  XMr as M,
  XPn as N,
  bjr as P,
  d9n as F,
  f4n as I,
  gOr as L,
  git as R,
  hOr as z,
  hit as B,
  hjt as V,
  hzt as H,
  mjt as U,
  mzt as ue,
  tNr as de,
  u4n as fe,
  u9n as pe,
} from "./app-initial-5851df3f6cb1.js";
var W, G, K, q;
function J() {
  return (J = e(() => {
    (u(),
      o(),
      z(),
      de(),
      F(),
      P(),
      I(),
      T(),
      oe(),
      (W = S({
        setupUrl: ae().refine((e) => {
          let t = new URL(e);
          return (
            t.origin === `https://chatgpt.com` &&
            t.pathname === `/` &&
            t.hash.startsWith(`#settings/Connectors?`)
          );
        }),
        status: x([`connected`, `reconnect`, `disconnected`, `unavailable`]),
      })),
      (G = S({
        meetingsResponse: S({
          schemaVersion: r(1),
          request: x([`calendar.connections`, `context.connections`]),
          error: _().optional(),
          data: E(p(), W),
        }),
      })),
      (K = S({ ok: r(!0), protocolVersion: r(2), companionVersion: p().min(1) })),
      (q = h(i, (e, { get: t, scope: n }) => {
        let r = t(k),
          i = t(O),
          a = t(M),
          o = r?.pluginId === e && i != null && a != null && i === t(L);
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
                  n.get(O) !== i ||
                    n.get(M) !== a ||
                    n.get(L) !== i ||
                    n.get(k)?.pluginId !== e ||
                    n.get(k)?.server !== r.server)
                )
                  throw Error(`Meetings settings account changed`);
              },
              c = async (e, t) => {
                s();
                let i = le({
                    server: r.server,
                    toolScope: r.toolScope ?? null,
                    toolName: e,
                    toolArguments: t,
                    tools: r.serverTools,
                  }),
                  a = n.get(pe).data?.version,
                  o = await fe(n, r.hostId, r.server, i.name, t, {
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
                  (e) => G.parse(e._meta).meetingsResponse.data,
                ),
                c(`chatgpt_meetings_get_snapshot`, { request: `context.connections` }).then(
                  (e) => G.parse(e._meta).meetingsResponse.data,
                ),
                c(`chatgpt_meetings_local_status`, {}).then(
                  (e) => K.parse(e.structuredContent).companionVersion,
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
function Y(e) {
  let n = (0, X.c)(19),
    { pluginId: r, apps: i } = e,
    o = s(),
    l = m(),
    u;
  n[0] === i
    ? (u = n[1])
    : ((u = Q.flatMap((e) => {
        let [, t] = e;
        return i.some((e) => j(e.id) === j(t) && (e.logoUrl != null || e.logoUrlDark != null)) ? [] : [t];
      })),
      (n[0] = i),
      (n[1] = u));
  let f;
  n[2] === u ? (f = n[3]) : ((f = { hostId: b, appIds: u }), (n[2] = u), (n[3] = f));
  let { data: p } = V(f),
    { data: h, isError: g, refetch: _ } = D(q, r),
    v;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(A.Header, {
        title: (0, Z.jsx)(c, {
          id: `meetings.settings.apps`,
          defaultMessage: `Apps`,
          description: `Apps available to Meetings for calendar and note enrichment`,
        }),
      })),
      (n[4] = v))
    : (v = n[4]);
  let y;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = [!0, !1]), (n[5] = y)) : (y = n[5]);
  let x;
  n[6] !== i || n[7] !== h?.connections || n[8] !== l || n[9] !== p || n[10] !== o
    ? ((x = (0, Z.jsxs)(A, {
        children: [
          v,
          (0, Z.jsx)(`div`, {
            className: `flex flex-col gap-6`,
            children: y.map((e) => {
              let n = Q.filter((t) => {
                let [n] = t;
                return (h?.connections[n]?.status === `connected`) === e;
              });
              return n.length === 0
                ? null
                : (0, Z.jsxs)(
                    A,
                    {
                      children: [
                        (0, Z.jsx)(A.Header, {
                          title: null,
                          subtitle: e
                            ? (0, Z.jsx)(c, {
                                id: `meetings.settings.connected`,
                                defaultMessage: `Connected`,
                                description: `Apps with an active connection`,
                              })
                            : (0, Z.jsx)(c, {
                                id: `meetings.settings.connectMoreApps`,
                                defaultMessage: `Connect more apps`,
                                description: `Apps available to connect for Meetings`,
                              }),
                        }),
                        (0, Z.jsx)(te, {
                          variant: `outlined`,
                          children: n.map((n) => {
                            let [r, s, u] = n,
                              f = i.find((e) => j(e.id) === j(s)),
                              m = p?.find((e) => j(e.id) === j(s)),
                              g = h?.connections[r],
                              _ = (0, Z.jsx)(ue, {
                                alt: ``,
                                appInfo: f,
                                logoUrl: m?.iconUrl,
                                logoDarkUrl: m?.iconUrlDark,
                                knownAppId: s,
                                className: `size-6`,
                                fallback: (0, Z.jsx)(ee, {}),
                              }),
                              v = f?.name ?? m?.name ?? u;
                            if (e)
                              return (0, Z.jsx)(
                                d,
                                {
                                  edgeRounding: `surface`,
                                  label: v,
                                  icon: _,
                                  trailing: (0, Z.jsx)(a, {}),
                                  onClick: () => void o(R(`apps`, s)),
                                },
                                s,
                              );
                            let y = g?.status === `disconnected` || g?.status === `reconnect`,
                              b = (0, Z.jsx)(c, {
                                id: `meetings.settings.connectionUnavailable`,
                                defaultMessage: `Unavailable`,
                                description: `Connection status could not be read`,
                              });
                            return (
                              g?.status === `reconnect`
                                ? (b = (0, Z.jsx)(c, {
                                    id: `meetings.settings.reconnect`,
                                    defaultMessage: `Reconnect`,
                                    description: `Open the existing app reconnection flow`,
                                  }))
                                : y &&
                                  (b = (0, Z.jsx)(c, {
                                    id: `meetings.settings.connect`,
                                    defaultMessage: `Connect`,
                                    description: `Open the existing app connection flow`,
                                  })),
                              (0, Z.jsx)(
                                re,
                                {
                                  label: v,
                                  icon: _,
                                  control: (0, Z.jsx)(t, {
                                    color: `outline`,
                                    size: `default`,
                                    radius: `large`,
                                    disabled: !y,
                                    "aria-label":
                                      g?.status === `reconnect`
                                        ? l.formatMessage(
                                            {
                                              id: `meetings.settings.reconnectApp`,
                                              defaultMessage: `Reconnect {app}`,
                                              description: `Accessible action to reconnect the named app`,
                                            },
                                            { app: v },
                                          )
                                        : l.formatMessage(
                                            {
                                              id: `meetings.settings.connectApp`,
                                              defaultMessage: `Connect {app}`,
                                              description: `Accessible action to connect the named app`,
                                            },
                                            { app: v },
                                          ),
                                    onClick: (e) => {
                                      g != null &&
                                        y &&
                                        N({
                                          event: e,
                                          href: g.setupUrl,
                                          initiator: `open_in_browser_bridge`,
                                          openTarget: `external-browser`,
                                        });
                                    },
                                    children: b,
                                  }),
                                },
                                s,
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
      (n[6] = i),
      (n[7] = h?.connections),
      (n[8] = l),
      (n[9] = p),
      (n[10] = o),
      (n[11] = x))
    : (x = n[11]);
  let S;
  n[12] !== h?.failed || n[13] !== g || n[14] !== _
    ? ((S =
        g || h?.failed
          ? (0, Z.jsx)(t, {
              color: `secondary`,
              onClick: () => void _(),
              children: (0, Z.jsx)(c, {
                id: `meetings.settings.retryInfo`,
                defaultMessage: `Retry loading information`,
                description: `Retry reading Meetings connections and running companion version`,
              }),
            })
          : null),
      (n[12] = h?.failed),
      (n[13] = g),
      (n[14] = _),
      (n[15] = S))
    : (S = n[15]);
  let C;
  return (
    n[16] !== x || n[17] !== S
      ? ((C = (0, Z.jsxs)(Z.Fragment, { children: [x, S] })), (n[16] = x), (n[17] = S), (n[18] = C))
      : (C = n[18]),
    C
  );
}
function me(e) {
  let t = (0, X.c)(7),
    { pluginId: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = { enabled: !1 }), (t[0] = i)) : (i = t[0]);
  let { data: a, isFetching: o } = D(q, r, i),
    s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(c, {
        id: `meetings.settings.companionVersion`,
        defaultMessage: `Companion version`,
        description: `Running version of the local Meetings recording companion`,
      })),
      (t[1] = s))
    : (s = t[1]);
  let l;
  t[2] !== a?.companionVersion || t[3] !== o
    ? ((l =
        a?.companionVersion ??
        (o
          ? (0, Z.jsx)(c, {
              id: `meetings.settings.versionLoading`,
              defaultMessage: `Loading…`,
              description: `The companion version is loading`,
            })
          : (0, Z.jsx)(c, {
              id: `meetings.settings.versionUnavailable`,
              defaultMessage: `Unavailable`,
              description: `No verified running companion version is available`,
            }))),
      (t[2] = a?.companionVersion),
      (t[3] = o),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] === l ? (u = t[6]) : ((u = (0, Z.jsx)(n, { label: s, children: l })), (t[5] = l), (t[6] = u)),
    u
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = w()),
      u(),
      C(),
      y(),
      g(),
      U(),
      H(),
      ne(),
      ce(),
      f(),
      B(),
      se(),
      v(),
      l(),
      J(),
      (Z = ie()),
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
export { me as MeetingsCompanionVersion, Y as MeetingsNativeSettings };
//# sourceMappingURL=native-settings-f562e6b59886.js.map
