const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./appgen-change-slug-dialog-daf64fab05ba.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  $dt as r,
  A3t as i,
  AMt as a,
  Amn as o,
  BG as s,
  BVt as c,
  CW as l,
  Cpn as u,
  D3t as d,
  EVt as f,
  F3t as p,
  FVt as m,
  Fd as h,
  Fx as g,
  GL as _,
  Hu as v,
  IVt as y,
  IXt as b,
  Id as x,
  Ix as S,
  JS as C,
  JXt as w,
  Jrt as T,
  KO as E,
  KVt as D,
  LVt as O,
  MH as k,
  MMt as A,
  MVt as j,
  Ms as M,
  N3t as N,
  NIt as P,
  NVt as F,
  O3t as I,
  OW as L,
  Opn as R,
  PIt as ee,
  PVt as z,
  Ps as te,
  QG as ne,
  QXt as re,
  Qu as ie,
  Rpn as ae,
  S3t as oe,
  Spn as se,
  TVt as ce,
  TW as le,
  UO as ue,
  Uat as de,
  VG as fe,
  Vat as B,
  Vnn as pe,
  Vu as me,
  WL as he,
  WVt as ge,
  XS as V,
  XXt as _e,
  Xdt as H,
  Xrt as U,
  Xu as ve,
  Yrt as ye,
  Zrt as W,
  Zu as be,
  _mn as xe,
  a3t as Se,
  aYt as Ce,
  bpt as we,
  cHt as Te,
  e0t as Ee,
  eZt as De,
  eft as Oe,
  eit as ke,
  fZt as Ae,
  fzt as je,
  gMt as Me,
  gmn as Ne,
  hMt as G,
  hmn as Pe,
  iit as Fe,
  jH as Ie,
  jMt as Le,
  jVt as Re,
  jXt as ze,
  k1t as Be,
  kMt as K,
  kVt as Ve,
  kW as He,
  kXt as Ue,
  kmn as We,
  m1 as Ge,
  nit as q,
  o3t as Ke,
  oHt as qe,
  p1 as Je,
  qu as Ye,
  r6t as Xe,
  rit as J,
  s3t as Ze,
  sYt as Qe,
  szt as $e,
  tit as Y,
  vlt as et,
  wVt as tt,
  ypt as nt,
  zVt as rt,
  zXt as it,
  zpn as at,
} from "./app-initial-f094ef01c64d.js";
import { Bw as ot, FT as st, IT as ct, LT as lt, zw as ut } from "./app-primary-4c40d73a1074.js";
import { r as dt, s as ft, t as pt } from "./appgen-access-e530f599dd35.js";
import { n as mt, t as ht } from "./appgen-site-detail-layout-6b9d3aae0fc8.js";
import { a as gt, i as _t, o as vt, t as yt } from "./appgen-access-state-messages-d450c4a57b22.js";
import { n as bt, t as xt } from "./open-appgen-share-dialog-5b55c8a7fe5b.js";
import { n as St, t as Ct } from "./appgen-site-card-086b2aabeb08.js";
function wt(e) {
  let t = (0, Rt.c)(17),
    { customDomains: n, defaultDomain: r, isError: a, isLoading: o, projectId: s } = e,
    c = i(Se),
    l;
  t[0] === n?.items ? (l = t[1]) : ((l = n?.items ?? []), (t[0] = n?.items), (t[1] = l));
  let d = l,
    f;
  t[2] === d ? (f = t[3]) : ((f = d.some(Tt)), (t[2] = d), (t[3] = f));
  let p = f,
    m = n != null && !a && d.length === 0,
    h;
  t[4] !== r || t[5] !== p
    ? ((h =
        r == null || p
          ? null
          : (0, X.jsx)(Ye, {
              className: `max-sm:flex-col max-sm:items-stretch max-sm:gap-2`,
              label: (0, X.jsx)(u, {
                id: `appgenSettings.customDomains.defaultDomain.label`,
                defaultMessage: `Domain`,
                description: `Row label for the default hosted Site domain before a custom domain becomes active`,
              }),
              description: (0, X.jsx)(u, {
                id: `appgenSettings.customDomains.defaultDomain.description`,
                defaultMessage: `URL for your site`,
                description: `Help text under the default hosted Site domain row`,
              }),
              control: (0, X.jsx)(Et, { domain: r }),
            })),
      (t[4] = r),
      (t[5] = p),
      (t[6] = h))
    : (h = t[6]);
  let g;
  t[7] !== m || t[8] !== d || t[9] !== a || t[10] !== o || t[11] !== s || t[12] !== c
    ? ((g = o
        ? (0, X.jsx)(Ye, {
            label: (0, X.jsx)(u, {
              id: `appgenSettings.customDomains.row.label`,
              defaultMessage: `Custom domain`,
              description: `Row label for the Site custom-domain control`,
            }),
            description: (0, X.jsx)(u, {
              id: `appgenSettings.customDomains.loading.description`,
              defaultMessage: `Loading custom domains`,
              description: `Loading text for custom domain settings`,
            }),
            control: (0, X.jsx)(Le, { className: `icon-xs` }),
          })
        : a
          ? (0, X.jsx)(Ye, {
              label: (0, X.jsx)(u, {
                id: `appgenSettings.customDomains.row.label`,
                defaultMessage: `Custom domain`,
                description: `Row label for the Site custom-domain control`,
              }),
              description: (0, X.jsx)(u, {
                id: `appgenSettings.customDomains.error.description`,
                defaultMessage: `Unable to load custom domains`,
                description: `Error text when custom domains fail to load`,
              }),
              control: null,
            })
          : d.length === 0
            ? (0, X.jsx)(Ye, {
                label: (0, X.jsx)(u, {
                  id: `appgenSettings.customDomains.row.label`,
                  defaultMessage: `Custom domain`,
                  description: `Row label for the Site custom-domain control`,
                }),
                control: m
                  ? (0, X.jsx)(K, {
                      color: `outline`,
                      size: `toolbar`,
                      onClick: () => {
                        de(c, Mt, { projectId: s });
                      },
                      children: (0, X.jsx)(u, {
                        id: `appgenSettings.customDomains.add`,
                        defaultMessage: `Add custom domain`,
                        description: `Button label for adding a custom domain to a site`,
                      }),
                    })
                  : null,
              })
            : d.map((e) => (0, X.jsx)(Dt, { customDomain: e, projectId: s }, e.id))),
      (t[7] = m),
      (t[8] = d),
      (t[9] = a),
      (t[10] = o),
      (t[11] = s),
      (t[12] = c),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== h || t[15] !== g
      ? ((_ = (0, X.jsxs)(X.Fragment, { children: [h, g] })), (t[14] = h), (t[15] = g), (t[16] = _))
      : (_ = t[16]),
    _
  );
}
function Tt(e) {
  return e.status === `active`;
}
function Et(e) {
  let t = (0, Rt.c)(12),
    { domain: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.endsWith(`.chatgpt.site`)), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  t[2] !== n || t[3] !== i
    ? ((a = i ? n.slice(0, -13) : n), (t[2] = n), (t[3] = i), (t[4] = a))
    : (a = t[4]);
  let o = a,
    s;
  t[5] === o
    ? (s = t[6])
    : ((s = (0, X.jsx)(`span`, { className: `min-w-0 truncate text-default`, children: o })),
      (t[5] = o),
      (t[6] = s));
  let c;
  t[7] === i
    ? (c = t[8])
    : ((c = i
        ? (0, X.jsx)(`span`, { className: `shrink-0 text-secondary`, children: `.chatgpt.site` })
        : null),
      (t[7] = i),
      (t[8] = c));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, X.jsxs)(`div`, {
          className: `flex w-56 max-w-full items-center justify-between gap-2 rounded-md border border-primary-outline bg-primary-soft px-2.5 py-1.5 text-base`,
          children: [s, c],
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Dt(e) {
  let t = (0, Rt.c)(40),
    { customDomain: n, projectId: r } = e,
    a = i(Se),
    o = R(),
    s = N(m, r),
    c = N(y, r),
    l = s.isPending || c.isPending,
    d;
  t[0] !== o || t[1] !== a
    ? ((d = function () {
        a.get(ze).danger(
          o.formatMessage({
            id: `appgenSettings.customDomains.refresh.error`,
            defaultMessage: `Unable to refresh domain status`,
            description: `Error toast shown when custom domain refresh fails`,
          }),
        );
      }),
      (t[0] = o),
      (t[1] = a),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    p = n.status === `active`,
    g;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(u, {
        id: `appgenSettings.customDomains.row.label`,
        defaultMessage: `Custom domain`,
        description: `Row label for the Site custom-domain control`,
      })),
      (t[3] = g))
    : (g = t[3]);
  let _;
  t[4] === n.hostname
    ? (_ = t[5])
    : ((_ = (0, X.jsx)(`div`, {
        className: `max-w-60 truncate text-sm text-default`,
        children: n.hostname,
      })),
      (t[4] = n.hostname),
      (t[5] = _));
  let v;
  t[6] === n.status
    ? (v = t[7])
    : ((v =
        n.status === `pending`
          ? (0, X.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-1 text-xs text-secondary`,
              children: [
                (0, X.jsx)(et, { "aria-hidden": !0 }),
                (0, X.jsx)(`span`, {
                  className: `truncate`,
                  children: (0, X.jsx)(u, {
                    id: `appgenSettings.customDomains.pending.description`,
                    defaultMessage: `Pending DNS changes. May take 24h to reflect.`,
                    description: `Status copy for a custom domain waiting on DNS changes`,
                  }),
                }),
              ],
            })
          : n.status === `failed`
            ? (0, X.jsxs)(`div`, {
                className: `flex items-center gap-1 text-xs text-chart-red`,
                children: [
                  (0, X.jsx)(G, { className: `shrink-0`, asset: h }),
                  (0, X.jsx)(u, {
                    id: `appgenSettings.customDomains.failed.description`,
                    defaultMessage: `DNS setup failed. Review your records.`,
                    description: `Status copy for a custom domain with failed DNS verification`,
                  }),
                ],
              })
            : null),
      (t[6] = n.status),
      (t[7] = v));
  let b;
  t[8] === n.last_error
    ? (b = t[9])
    : ((b =
        n.last_error == null
          ? null
          : (0, X.jsx)(`div`, {
              className: `max-w-80 text-xs wrap-anywhere text-chart-red`,
              children: (0, X.jsx)(u, {
                id: `appgenSettings.customDomains.lastError`,
                defaultMessage: `Last error: {message}`,
                description: `Last provider error shown for a custom domain`,
                values: { message: n.last_error },
              }),
            })),
      (t[8] = n.last_error),
      (t[9] = b));
  let x;
  t[10] !== _ || t[11] !== v || t[12] !== b
    ? ((x = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-col items-end gap-0.5 text-end`,
        children: [_, v, b],
      })),
      (t[10] = _),
      (t[11] = v),
      (t[12] = b),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] !== n ||
  t[15] !== o ||
  t[16] !== p ||
  t[17] !== l ||
  t[18] !== s ||
  t[19] !== a ||
  t[20] !== f
    ? ((S = p
        ? null
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(K, {
                "aria-label": o.formatMessage(
                  {
                    id: `appgenSettings.customDomains.setup.ariaLabel`,
                    defaultMessage: `View DNS setup for {hostname}`,
                    description: `Accessible label for reopening custom domain DNS setup`,
                  },
                  { hostname: n.hostname },
                ),
                color: `ghost`,
                disabled: l,
                size: `icon`,
                onClick: () => {
                  de(a, kt, { customDomain: n });
                },
                children: (0, X.jsx)(G, { asset: h }),
              }),
              (0, X.jsx)(K, {
                "aria-label": o.formatMessage(
                  {
                    id: `appgenSettings.customDomains.refresh.ariaLabel`,
                    defaultMessage: `Refresh {hostname} status`,
                    description: `Accessible label for refreshing a custom domain status`,
                  },
                  { hostname: n.hostname },
                ),
                color: `ghost`,
                disabled: l,
                size: `icon`,
                onClick: () => {
                  s.mutateAsync(n.id).then(Ot, () => {
                    f();
                  });
                },
                children: s.isPending
                  ? (0, X.jsx)(Le, { className: `icon-xs` })
                  : (0, X.jsx)(G, { asset: nt }),
              }),
            ],
          })),
      (t[14] = n),
      (t[15] = o),
      (t[16] = p),
      (t[17] = l),
      (t[18] = s),
      (t[19] = a),
      (t[20] = f),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== n.hostname || t[23] !== o
    ? ((C = o.formatMessage(
        {
          id: `appgenSettings.customDomains.remove.ariaLabel`,
          defaultMessage: `Remove {hostname}`,
          description: `Accessible label for removing a custom domain`,
        },
        { hostname: n.hostname },
      )),
      (t[22] = n.hostname),
      (t[23] = o),
      (t[24] = C))
    : (C = t[24]);
  let w;
  t[25] !== n || t[26] !== r || t[27] !== a
    ? ((w = () => {
        de(a, Nt, { customDomain: n, projectId: r });
      }),
      (t[25] = n),
      (t[26] = r),
      (t[27] = a),
      (t[28] = w))
    : (w = t[28]);
  let T;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(G, { asset: Oe })), (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== l || t[31] !== C || t[32] !== w
    ? ((E = (0, X.jsx)(K, {
        "aria-label": C,
        color: `ghost`,
        disabled: l,
        size: `icon`,
        onClick: w,
        children: T,
      })),
      (t[30] = l),
      (t[31] = C),
      (t[32] = w),
      (t[33] = E))
    : (E = t[33]);
  let D;
  t[34] !== E || t[35] !== S
    ? ((D = (0, X.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1`,
        children: [S, E],
      })),
      (t[34] = E),
      (t[35] = S),
      (t[36] = D))
    : (D = t[36]);
  let O;
  return (
    t[37] !== D || t[38] !== x
      ? ((O = (0, X.jsx)(Ye, {
          label: g,
          control: (0, X.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-3`,
            children: [x, D],
          }),
        })),
        (t[37] = D),
        (t[38] = x),
        (t[39] = O))
      : (O = t[39]),
    O
  );
}
function Ot() {}
function kt(e) {
  let t = (0, Rt.c)(30),
    { customDomain: n, onClose: r } = e,
    i = R(),
    a = E(),
    o,
    s;
  t[0] !== n || t[1] !== i
    ? ((o = Pt(n)),
      (s = M({
        defaultPrompt: i.formatMessage(
          {
            id: `appgenSettings.customDomains.setupDialog.askChatGptPrompt`,
            defaultMessage: `Help me register {hostname} as the custom domain for my site by adding these DNS records at my domain provider. Use the in-app browser if needed.
{dnsRecords}`,
            description: `Prefilled prompt for a new Sites thread opened from custom-domain DNS setup. It asks Sites to help finish registration at the user's domain provider, using the in-app browser when useful. {hostname} is the exact custom hostname and {dnsRecords} is a newline-separated list of DNS record type, host name, and value.`,
          },
          { dnsRecords: At(o), hostname: n.hostname },
        ),
        pluginDisplayName: `Sites`,
        pluginId: qe,
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s))
    : ((o = t[2]), (s = t[3]));
  let c = s,
    l;
  t[4] === i
    ? (l = t[5])
    : ((l = i.formatMessage({
        id: `appgenSettings.customDomains.setupDialog.close`,
        defaultMessage: `Close custom domain setup`,
        description: `Accessible label for closing the custom domain DNS setup dialog`,
      })),
      (t[4] = i),
      (t[5] = l));
  let d;
  t[6] === r
    ? (d = t[7])
    : ((d = (e) => {
        e || r();
      }),
      (t[6] = r),
      (t[7] = d));
  let f;
  t[8] === r
    ? (f = t[9])
    : ((f = (e) => {
        (e.preventDefault(), r());
      }),
      (t[8] = r),
      (t[9] = f));
  let p;
  t[10] === n.hostname
    ? (p = t[11])
    : ((p = (0, X.jsx)(J, {
        className: `contents`,
        children: (0, X.jsx)(u, {
          id: `appgenSettings.customDomains.setupDialog.title`,
          defaultMessage: `Complete setup for {hostname}`,
          description: `Title for custom domain DNS setup dialog`,
          values: { hostname: n.hostname },
        }),
      })),
      (t[10] = n.hostname),
      (t[11] = p));
  let m;
  t[12] !== c || t[13] !== r || t[14] !== a
    ? ((m = (0, X.jsx)(q, {
        className: `contents`,
        children: (0, X.jsx)(u, {
          id: `appgenSettings.customDomains.setupDialog.description`,
          defaultMessage: `Complete your custom domain by copying these values and paste them into the DNS settings at your domain provider. You can also <chatgptLink>ask ChatGPT</chatgptLink> to do it.`,
          description: `Instructions for completing custom domain DNS setup`,
          values: {
            chatgptLink: (e) =>
              (0, X.jsx)(
                `button`,
                {
                  className: `cursor-interaction border-0 bg-transparent p-0 underline decoration-dotted underline-offset-2`,
                  type: `button`,
                  onClick: () => {
                    (r(), a({ activeProject: null, prefillPrompt: c, startInSidebar: !0 }));
                  },
                  children: e,
                },
                `chatgpt-link`,
              ),
          },
        }),
      })),
      (t[12] = c),
      (t[13] = r),
      (t[14] = a),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] !== p || t[17] !== m
    ? ((h = (0, X.jsx)(U, {
        title: p,
        titleClassName: `truncate pe-8 font-medium`,
        titleSize: `base`,
        subtitle: m,
        subtitleSize: `base`,
        subtitleTone: `secondary`,
        subtitleClassName: `leading-5`,
      })),
      (t[16] = p),
      (t[17] = m),
      (t[18] = h))
    : (h = t[18]);
  let g;
  t[19] === o
    ? (g = t[20])
    : ((g = (0, X.jsx)(W, { children: (0, X.jsx)(jt, { records: o }) })), (t[19] = o), (t[20] = g));
  let _;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(W, {
        children: (0, X.jsx)(ye, {
          expandSingleButton: !1,
          children: (0, X.jsx)(K, {
            type: `submit`,
            children: (0, X.jsx)(u, {
              id: `appgenSettings.customDomains.setupDialog.complete`,
              defaultMessage: `I have added the records at my provider`,
              description: `Button label for completing custom domain DNS setup`,
            }),
          }),
        }),
      })),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  t[22] !== f || t[23] !== h || t[24] !== g
    ? ((v = (0, X.jsxs)(T, {
        as: `form`,
        className: `gap-3 px-4 py-4`,
        onSubmit: f,
        children: [h, g, _],
      })),
      (t[22] = f),
      (t[23] = h),
      (t[24] = g),
      (t[25] = v))
    : (v = t[25]);
  let y;
  return (
    t[26] !== v || t[27] !== l || t[28] !== d
      ? ((y = (0, X.jsx)(Y, {
          dialogCloseLabel: l,
          open: !0,
          size: `default`,
          onOpenChange: d,
          children: v,
        })),
        (t[26] = v),
        (t[27] = l),
        (t[28] = d),
        (t[29] = y))
      : (y = t[29]),
    y
  );
}
function At(e) {
  return e.map((e) => [e.type, e.name, e.value].join(` `)).join(`
`);
}
function jt(e) {
  let t = (0, Rt.c)(11),
    { records: n } = e,
    r = R();
  if (n.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsxs)(`colgroup`, {
        className: `max-sm:hidden`,
        children: [
          (0, X.jsx)(`col`, { className: `w-[72px]` }),
          (0, X.jsx)(`col`, { className: `w-[40%]` }),
          (0, X.jsx)(`col`, {}),
        ],
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(`th`, {
        className: `px-0 py-1 text-start font-normal`,
        scope: `col`,
        children: (0, X.jsx)(u, {
          id: `appgenSettings.customDomains.dns.type`,
          defaultMessage: `Type`,
          description: `DNS record table type column`,
        }),
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(`th`, {
        className: `px-0 py-1 text-start font-normal`,
        scope: `col`,
        children: (0, X.jsx)(u, {
          id: `appgenSettings.customDomains.dns.hostname`,
          defaultMessage: `Host name`,
          description: `DNS record table host name column`,
        }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(`thead`, {
        className: `max-sm:sr-only`,
        children: (0, X.jsxs)(`tr`, {
          className: `h-7 border-b border-default text-sm font-normal text-tertiary`,
          children: [
            a,
            o,
            (0, X.jsx)(`th`, {
              className: `px-0 py-1 text-start font-normal`,
              scope: `col`,
              children: (0, X.jsx)(u, {
                id: `appgenSettings.customDomains.dns.value`,
                defaultMessage: `Value`,
                description: `DNS record table value column`,
              }),
            }),
          ],
        }),
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  if (t[4] !== r || t[5] !== n) {
    let e;
    (t[7] === r
      ? (e = t[8])
      : ((e = (e) =>
          (0, X.jsxs)(
            `tr`,
            {
              className: `h-7 border-b border-default text-sm text-default last:border-b-0 max-sm:block`,
              children: [
                (0, X.jsx)(`td`, {
                  className: `px-0 py-1 text-secondary max-sm:hidden`,
                  children: e.type,
                }),
                (0, X.jsx)(`td`, {
                  className: `px-0 py-1 max-sm:block`,
                  children: (0, X.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-between gap-2`,
                    children: [
                      (0, X.jsx)(`span`, {
                        className: `me-1 hidden text-tertiary max-sm:inline`,
                        children: e.type,
                      }),
                      (0, X.jsx)(`div`, { className: `min-w-0 truncate`, children: e.name }),
                      (0, X.jsx)(Ie, {
                        ariaLabel: r.formatMessage(
                          {
                            id: `appgenSettings.customDomains.dns.copyHostname`,
                            defaultMessage: `Copy {type} DNS host name for {name}`,
                            description: `Accessible label for copying one DNS record host name. {type} is the DNS record type and {name} is the record host name.`,
                          },
                          { name: e.name, type: e.type },
                        ),
                        buttonText: !0,
                        className: `h-auto shrink-0 rounded-full! border! border-default! px-2 py-0.5 text-sm text-default`,
                        showIcon: !1,
                        onCopy: (t) => {
                          Je(e.name, t);
                        },
                      }),
                    ],
                  }),
                }),
                (0, X.jsx)(`td`, {
                  className: `px-0 py-1 max-sm:block`,
                  children: (0, X.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-between gap-2`,
                    children: [
                      (0, X.jsx)(`div`, { className: `min-w-0 truncate`, children: e.value }),
                      (0, X.jsx)(Ie, {
                        ariaLabel: r.formatMessage(
                          {
                            id: `appgenSettings.customDomains.dns.copyValueForRecord`,
                            defaultMessage: `Copy {type} DNS value for {name}`,
                            description: `Accessible label for copying one DNS record value. {type} is the DNS record type and {name} is the record host name.`,
                          },
                          { name: e.name, type: e.type },
                        ),
                        buttonText: !0,
                        className: `h-auto shrink-0 rounded-full! border! border-default! px-2 py-0.5 text-sm text-default`,
                        showIcon: !1,
                        onCopy: (t) => {
                          Je(e.value, t);
                        },
                      }),
                    ],
                  }),
                }),
              ],
            },
            e.id,
          )),
        (t[7] = r),
        (t[8] = e)),
      (c = n.map(e)),
      (t[4] = r),
      (t[5] = n),
      (t[6] = c));
  } else c = t[6];
  let l;
  return (
    t[9] === c
      ? (l = t[10])
      : ((l = (0, X.jsx)(`div`, {
          className: `overflow-hidden`,
          children: (0, X.jsxs)(`table`, {
            className: `w-full table-fixed border-collapse`,
            children: [i, s, (0, X.jsx)(`tbody`, { children: c })],
          }),
        })),
        (t[9] = c),
        (t[10] = l)),
    l
  );
}
function Mt(e) {
  let t = (0, Rt.c)(49),
    { onClose: n, projectId: r } = e,
    a = i(Se),
    o = N(Ve, r),
    s = R(),
    [c, d] = (0, zt.useState)(``),
    [f, p] = (0, zt.useState)(null),
    m;
  t[0] === c ? (m = t[1]) : ((m = c.trim()), (t[0] = c), (t[1] = m));
  let h = m,
    g = h.length === 0 || o.isPending,
    _;
  t[2] !== s || t[3] !== a
    ? ((_ = function () {
        a.get(ze).danger(
          s.formatMessage({
            id: `appgenSettings.customDomains.addDialog.error`,
            defaultMessage: `Unable to add domain`,
            description: `Error toast shown when adding a custom domain fails`,
          }),
        );
      }),
      (t[2] = s),
      (t[3] = a),
      (t[4] = _))
    : (_ = t[4]);
  let v = _;
  if (f != null) {
    let e;
    return (
      t[5] !== f || t[6] !== n
        ? ((e = (0, X.jsx)(kt, { customDomain: f, onClose: n })),
          (t[5] = f),
          (t[6] = n),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let y = o.isPending,
    b = !o.isPending,
    x;
  t[8] !== o.isPending || t[9] !== n
    ? ((x = (e) => {
        !e && !o.isPending && n();
      }),
      (t[8] = o.isPending),
      (t[9] = n),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] !== o || t[12] !== g || t[13] !== v || t[14] !== h
    ? ((S = (e) => {
        (e.preventDefault(),
          !g &&
            o.mutateAsync({ hostname: h }).then(
              (e) => {
                p(e);
              },
              () => {
                v();
              },
            ));
      }),
      (t[11] = o),
      (t[12] = g),
      (t[13] = v),
      (t[14] = h),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(J, {
        className: `contents`,
        children: (0, X.jsx)(u, {
          id: `appgenSettings.customDomains.addDialog.title`,
          defaultMessage: `Add custom domain`,
          description: `Title for custom domain add dialog`,
        }),
      })),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(U, {
        title: C,
        titleClassName: `truncate pe-8`,
        subtitle: (0, X.jsx)(q, {
          className: `contents`,
          children: (0, X.jsx)(u, {
            id: `appgenSettings.customDomains.addDialog.description`,
            defaultMessage: `To use this feature, you need to own a domain and be able to manage its DNS records`,
            description: `Description for custom domain add dialog`,
          }),
        }),
      })),
      (t[17] = w))
    : (w = t[17]);
  let E;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, X.jsx)(u, {
          id: `appgenSettings.customDomains.addDialog.inputLabel`,
          defaultMessage: `Custom domain`,
          description: `Label for custom domain input`,
        }),
      })),
      (t[18] = E))
    : (E = t[18]);
  let D;
  t[19] === s
    ? (D = t[20])
    : ((D = s.formatMessage({
        id: `appgenSettings.customDomains.addDialog.inputAriaLabel`,
        defaultMessage: `Custom domain`,
        description: `Accessible label for custom domain input`,
      })),
      (t[19] = s),
      (t[20] = D));
  let O = o.isPending,
    k;
  t[21] === s
    ? (k = t[22])
    : ((k = s.formatMessage({
        id: `appgenSettings.customDomains.addDialog.placeholder`,
        defaultMessage: `www.example.com`,
        description: `Placeholder for custom domain input`,
      })),
      (t[21] = s),
      (t[22] = k));
  let A;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        d(e.target.value);
      }),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] !== o.isPending || t[25] !== c || t[26] !== D || t[27] !== k
    ? ((j = (0, X.jsx)(W, {
        children: (0, X.jsxs)(`label`, {
          className: `flex flex-col gap-1.5`,
          children: [
            E,
            (0, X.jsx)(l, {
              variant: `code`,
              "aria-label": D,
              autoFocus: !0,
              disabled: O,
              placeholder: k,
              spellCheck: !1,
              type: `text`,
              value: c,
              onChange: A,
            }),
          ],
        }),
      })),
      (t[24] = o.isPending),
      (t[25] = c),
      (t[26] = D),
      (t[27] = k),
      (t[28] = j))
    : (j = t[28]);
  let M;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, X.jsx)(u, {
        id: `appgenSettings.customDomains.addDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom domain add dialog`,
      })),
      (t[29] = M))
    : (M = t[29]);
  let P;
  t[30] !== o.isPending || t[31] !== n
    ? ((P = (0, X.jsx)(K, {
        color: `ghost`,
        disabled: o.isPending,
        type: `button`,
        onClick: n,
        children: M,
      })),
      (t[30] = o.isPending),
      (t[31] = n),
      (t[32] = P))
    : (P = t[32]);
  let F;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(u, {
        id: `appgenSettings.customDomains.addDialog.submit`,
        defaultMessage: `Add domain`,
        description: `Submit button label for custom domain add dialog`,
      })),
      (t[33] = F))
    : (F = t[33]);
  let I;
  t[34] !== o.isPending || t[35] !== g
    ? ((I = (0, X.jsx)(K, { disabled: g, loading: o.isPending, type: `submit`, children: F })),
      (t[34] = o.isPending),
      (t[35] = g),
      (t[36] = I))
    : (I = t[36]);
  let L;
  t[37] !== P || t[38] !== I
    ? ((L = (0, X.jsx)(W, { children: (0, X.jsxs)(ye, { children: [P, I] }) })),
      (t[37] = P),
      (t[38] = I),
      (t[39] = L))
    : (L = t[39]);
  let ee;
  t[40] !== j || t[41] !== L || t[42] !== S
    ? ((ee = (0, X.jsxs)(T, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: S,
        children: [w, j, L],
      })),
      (t[40] = j),
      (t[41] = L),
      (t[42] = S),
      (t[43] = ee))
    : (ee = t[43]);
  let z;
  return (
    t[44] !== o.isPending || t[45] !== ee || t[46] !== b || t[47] !== x
      ? ((z = (0, X.jsx)(Y, {
          open: !0,
          shouldIgnoreClickOutside: y,
          showDialogClose: b,
          size: `compact`,
          onOpenChange: x,
          children: ee,
        })),
        (t[44] = o.isPending),
        (t[45] = ee),
        (t[46] = b),
        (t[47] = x),
        (t[48] = z))
      : (z = t[48]),
    z
  );
}
function Nt(e) {
  let t = (0, Rt.c)(35),
    { customDomain: n, onClose: r, projectId: a } = e,
    o = i(Se),
    s = N(y, a),
    c = R(),
    l;
  t[0] !== c || t[1] !== o
    ? ((l = function () {
        o.get(ze).danger(
          c.formatMessage({
            id: `appgenSettings.customDomains.removeDialog.error`,
            defaultMessage: `Unable to remove domain`,
            description: `Error toast shown when removing a custom domain fails`,
          }),
        );
      }),
      (t[0] = c),
      (t[1] = o),
      (t[2] = l))
    : (l = t[2]);
  let d = l,
    f = !s.isPending,
    p;
  t[3] !== r || t[4] !== s.isPending
    ? ((p = (e) => {
        !e && !s.isPending && r();
      }),
      (t[3] = r),
      (t[4] = s.isPending),
      (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] !== n.id || t[7] !== r || t[8] !== s || t[9] !== d
    ? ((m = (e) => {
        (e.preventDefault(),
          !s.isPending &&
            s.mutateAsync(n.id).then(
              () => {
                r();
              },
              () => {
                d();
              },
            ));
      }),
      (t[6] = n.id),
      (t[7] = r),
      (t[8] = s),
      (t[9] = d),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === n.hostname
    ? (h = t[12])
    : ((h = (0, X.jsx)(J, {
        className: `contents`,
        children: (0, X.jsx)(u, {
          id: `appgenSettings.customDomains.removeDialog.title`,
          defaultMessage: `Remove {hostname}?`,
          description: `Title for custom domain removal dialog`,
          values: { hostname: n.hostname },
        }),
      })),
      (t[11] = n.hostname),
      (t[12] = h));
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(q, {
        className: `contents`,
        children: (0, X.jsx)(u, {
          id: `appgenSettings.customDomains.removeDialog.description`,
          defaultMessage: `Visitors will no longer be able to use this domain for the site`,
          description: `Description for custom domain removal dialog`,
        }),
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] === h
    ? (_ = t[15])
    : ((_ = (0, X.jsx)(U, { title: h, titleClassName: `truncate pe-8`, subtitle: g })),
      (t[14] = h),
      (t[15] = _));
  let v;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(u, {
        id: `appgenSettings.customDomains.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom domain removal dialog`,
      })),
      (t[16] = v))
    : (v = t[16]);
  let b;
  t[17] !== r || t[18] !== s.isPending
    ? ((b = (0, X.jsx)(K, {
        color: `ghost`,
        disabled: s.isPending,
        type: `button`,
        onClick: r,
        children: v,
      })),
      (t[17] = r),
      (t[18] = s.isPending),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(u, {
        id: `appgenSettings.customDomains.removeDialog.submit`,
        defaultMessage: `Remove`,
        description: `Confirm button label for custom domain removal dialog`,
      })),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] === s.isPending
    ? (S = t[22])
    : ((S = (0, X.jsx)(K, { color: `danger`, loading: s.isPending, type: `submit`, children: x })),
      (t[21] = s.isPending),
      (t[22] = S));
  let C;
  t[23] !== S || t[24] !== b
    ? ((C = (0, X.jsx)(W, { children: (0, X.jsxs)(ye, { children: [b, S] }) })),
      (t[23] = S),
      (t[24] = b),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] !== C || t[27] !== m || t[28] !== _
    ? ((w = (0, X.jsxs)(T, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: m,
        children: [_, C],
      })),
      (t[26] = C),
      (t[27] = m),
      (t[28] = _),
      (t[29] = w))
    : (w = t[29]);
  let E;
  return (
    t[30] !== s.isPending || t[31] !== w || t[32] !== f || t[33] !== p
      ? ((E = (0, X.jsx)(Y, {
          open: !0,
          shouldIgnoreClickOutside: s.isPending,
          showDialogClose: f,
          size: `compact`,
          onOpenChange: p,
          children: w,
        })),
        (t[30] = s.isPending),
        (t[31] = w),
        (t[32] = f),
        (t[33] = p),
        (t[34] = E))
      : (E = t[34]),
    E
  );
}
function Pt(e) {
  return [
    ...Ft(e),
    ...e.validation_records.flatMap((e, t) => {
      let n = It(e.record_type),
        r = It(e.name),
        i = It(e.value);
      return n == null || r == null || i == null
        ? []
        : [{ id: `validation:${t}:${n}:${r}`, name: r, type: n, value: i }];
    }),
  ];
}
function Ft(e) {
  return Lt(e.hostname) && e.apex_proxy_ipv4_targets.length > 0
    ? e.apex_proxy_ipv4_targets.map((e, t) => ({
        id: `apex:${t}:${e}`,
        name: `@`,
        type: `A`,
        value: e,
      }))
    : e.cname_target == null
      ? e.apex_proxy_ipv4_targets.map((t, n) => ({
          id: `apex:${n}:${t}`,
          name: e.hostname,
          type: `A`,
          value: t,
        }))
      : [{ id: `cname`, name: e.hostname, type: `CNAME`, value: e.cname_target }];
}
function It(e) {
  let t = e?.trim();
  return t == null || t.length === 0 ? null : t;
}
function Lt(e) {
  let t = fe(e, { allowPrivateDomains: !0 });
  return t.domain != null && t.domain.toLowerCase() === e.toLowerCase();
}
var Rt,
  zt,
  X,
  Bt = e(() => {
    ((Rt = We()),
      we(),
      x(),
      r(),
      I(),
      (zt = t(o(), 1)),
      se(),
      s(),
      a(),
      k(),
      Fe(),
      ke(),
      Me(),
      H(),
      B(),
      A(),
      le(),
      Ue(),
      ue(),
      Te(),
      te(),
      Ke(),
      ve(),
      Ge(),
      D(),
      (X = Pe()));
  });
function Vt(e) {
  return {
    entries: e.entries.map(({ is_secret: e, key: t, value: n }) =>
      e
        ? { isSecret: !0, key: t, keyInputDisabledWhileValue: Kt, previousKey: t, value: Kt }
        : { isSecret: !1, key: t, previousKey: t, value: n ?? `` },
    ),
  };
}
function Ht(e, t) {
  if (Ut(t) != null) return null;
  let n = new Set(t.entries.map((e) => (Wt(e) ? e.previousKey : e.key)));
  return {
    remove: e.entries.filter(({ key: e }) => !n.has(e)).map(({ key: e }) => e),
    set_values: t.entries
      .filter((t) => !Wt(t) && Gt(e, t))
      .map((e) => ({ is_secret: e.isSecret, key: e.key, type: `envvar`, value: e.value })),
  };
}
function Ut(e) {
  let t = e.entries.map(({ key: e }) => e);
  return new Set(t).size === t.length
    ? e.entries.some(
        (e) =>
          !e.isSecret &&
          e.keyInputDisabledWhileValue != null &&
          e.previousKey != null &&
          e.value === Kt,
      )
      ? `stored-secret-needs-value`
      : null
    : `duplicate-key`;
}
function Wt(e) {
  return (
    e.isSecret && e.keyInputDisabledWhileValue != null && e.previousKey != null && e.value === Kt
  );
}
function Gt(e, t) {
  let n = e.entries.find((e) => e.key === (t.previousKey ?? t.key));
  return n == null || n.is_secret !== t.isSecret || n.key !== t.key || n.value !== t.value;
}
var Kt,
  qt = e(() => {
    Kt = `<REDACTED>`;
  });
function Jt(e, t, n = !1) {
  let r = e ?? t,
    i = r.trim();
  return {
    isInvalid: e != null && i.length === 0,
    title: r,
    update: e != null && i.length > 0 && (i !== t || n) ? { title: i } : null,
  };
}
async function Yt({ environmentUpdate: e, titleUpdate: t, updateEnvironment: n, updateTitle: r }) {
  let [i, a] = await Promise.allSettled([t == null ? void 0 : r(t), e == null ? void 0 : n(e)]);
  return { environmentSaved: a.status === `fulfilled`, titleSaved: i.status === `fulfilled` };
}
var Xt = e(() => {});
function Zt(e, t, n) {
  let r = Qt(n),
    i = r[0];
  return i == null ? null : [...e.map((e, n) => (n === t ? { ...e, ...i } : e)), ...r.slice(1)];
}
function Qt(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.trim();
    if (e.length === 0 || e.startsWith(`#`) || e.startsWith(`;`)) continue;
    e.startsWith(`export `) && (e = e.slice(7).trim());
    let r = $t(e, `#`, (t) => e[t - 1]?.trim() === ``);
    if ((r !== -1 && (e = e.slice(0, r).trim()), e.length === 0)) continue;
    let i = $t(e, `=`);
    if (i === -1) continue;
    let a = e.slice(0, i).trim();
    a.length !== 0 && t.push({ key: a, value: en(e.slice(i + 1).trim()) });
  }
  return t;
}
function $t(e, t, n = () => !0) {
  let r = !1,
    i = !1,
    a = !1;
  for (let o = 0; o < e.length; o += 1) {
    let s = e[o];
    if (r) {
      r = !1;
      continue;
    }
    if (s === `\\`) {
      r = !0;
      continue;
    }
    if (s === `'` && !i) {
      a = !a;
      continue;
    }
    if (s === `"` && !a) {
      i = !i;
      continue;
    }
    if (s === t && !a && !i && n(o)) return o;
  }
  return -1;
}
function en(e) {
  return (e.startsWith(`"`) && e.endsWith(`"`)) || (e.startsWith(`'`) && e.endsWith(`'`))
    ? e.slice(1, -1)
    : e;
}
var tn = e(() => {});
function nn(e) {
  let t = (0, an.c)(19),
    { disabled: n, entries: r, onChange: i } = e,
    a = n !== void 0 && n,
    o;
  t[0] !== r || t[1] !== i
    ? ((o = () => {
        i([...r, { isSecret: !1, key: ``, value: `` }]);
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s, c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(G, { "aria-hidden": !1, asset: S })),
      (c = (0, Z.jsx)(u, {
        id: `appgenSettings.environmentVariables.add`,
        defaultMessage: `Add variable`,
        description: `Button label to add a site environment variable`,
      })),
      (t[3] = s),
      (t[4] = c))
    : ((s = t[3]), (c = t[4]));
  let l;
  t[5] !== a || t[6] !== o
    ? ((l = (0, Z.jsxs)(K, {
        color: `outline`,
        disabled: a,
        size: `toolbar`,
        onClick: o,
        children: [s, c],
      })),
      (t[5] = a),
      (t[6] = o),
      (t[7] = l))
    : (l = t[7]);
  let d;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(u, {
        id: `appgenSettings.environmentVariables.description`,
        defaultMessage: `Add API keys, environment variables, and other values your site needs`,
        description: `Description for site environment variable settings`,
      })),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(`span`, {
        className: `text-base`,
        children: (0, Z.jsx)(u, {
          id: `appgenSettings.environmentVariables.title`,
          defaultMessage: `Environment variables`,
          description: `Heading for site environment variable settings`,
        }),
      })),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === l
    ? (p = t[11])
    : ((p = (0, Z.jsx)(be.Header, { actions: l, subtitle: d, title: f })),
      (t[10] = l),
      (t[11] = p));
  let m;
  t[12] !== a || t[13] !== r || t[14] !== i
    ? ((m = (0, Z.jsx)(be.Content, {
        children: (0, Z.jsx)(me, {
          children:
            r.length === 0
              ? (0, Z.jsx)(L, {
                  layout: `settings-row`,
                  children: (0, Z.jsx)(u, {
                    id: `envEntrySettingsGroup.empty`,
                    defaultMessage: `Nothing yet`,
                    description: `Empty state for an environment entry settings section`,
                  }),
                })
              : (0, Z.jsxs)(`div`, {
                  className: `grid grid-cols-12 items-center gap-x-2 gap-y-2 p-4`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `contents text-xs font-medium text-codex-description select-none`,
                      children: [
                        (0, Z.jsx)(`div`, {
                          className: `col-span-5`,
                          children: (0, Z.jsx)(u, {
                            id: `envEntrySettingsGroup.key.label`,
                            defaultMessage: `Key`,
                            description: `Column label for environment variable keys`,
                          }),
                        }),
                        (0, Z.jsx)(`div`, {
                          className: `col-span-5`,
                          children: (0, Z.jsx)(u, {
                            id: `envEntrySettingsGroup.value.label`,
                            defaultMessage: `Value`,
                            description: `Column label for environment variable values`,
                          }),
                        }),
                        (0, Z.jsx)(`div`, {
                          className: `col-span-1`,
                          children: (0, Z.jsx)(u, {
                            id: `envEntrySettingsGroup.secret.label`,
                            defaultMessage: `Secret`,
                            description: `Column label for environment variable secret toggles`,
                          }),
                        }),
                        (0, Z.jsx)(`span`, { "aria-hidden": `true`, className: `col-span-1` }),
                      ],
                    }),
                    r.map((e, t) =>
                      (0, Z.jsx)(
                        rn,
                        {
                          disabled: a,
                          entry: e,
                          rowNumber: t + 1,
                          onChange: (e) => {
                            i(r.map((n, r) => (r === t ? e : n)));
                          },
                          onKeyPaste: (n) => {
                            let a = Zt(r, t, n.clipboardData.getData(`text/plain`));
                            a != null &&
                              (n.preventDefault(),
                              i(
                                a.map((t, n) => ({ ...t, isSecret: r[n]?.isSecret ?? e.isSecret })),
                              ));
                          },
                          onRemove: () => {
                            i(r.filter((e, n) => n !== t));
                          },
                        },
                        t,
                      ),
                    ),
                  ],
                }),
        }),
      })),
      (t[12] = a),
      (t[13] = r),
      (t[14] = i),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== p || t[17] !== m
      ? ((h = (0, Z.jsxs)(be, { children: [p, m] })), (t[16] = p), (t[17] = m), (t[18] = h))
      : (h = t[18]),
    h
  );
}
function rn(e) {
  let t = (0, an.c)(52),
    { disabled: n, entry: r, onChange: i, onKeyPaste: a, onRemove: o, rowNumber: s } = e,
    c = R(),
    u;
  t[0] === c
    ? (u = t[1])
    : ((u = c.formatMessage({
        id: `envEntrySettingsGroup.key.ariaLabel`,
        defaultMessage: `Key`,
        description: `Accessible label for an environment variable or secret key input`,
      })),
      (t[0] = c),
      (t[1] = u));
  let d = n || r.keyInputDisabledWhileValue === r.value,
    f;
  t[2] === c
    ? (f = t[3])
    : ((f = c.formatMessage({
        id: `envEntrySettingsGroup.key.placeholder`,
        defaultMessage: `Key`,
        description: `Placeholder for an environment variable or secret key input`,
      })),
      (t[2] = c),
      (t[3] = f));
  let p;
  t[4] !== r || t[5] !== i
    ? ((p = (e) => {
        i({ ...r, key: e.target.value });
      }),
      (t[4] = r),
      (t[5] = i),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== r.key || t[8] !== a || t[9] !== u || t[10] !== d || t[11] !== f || t[12] !== p
    ? ((m = (0, Z.jsx)(`div`, {
        className: `col-span-5`,
        children: (0, Z.jsx)(l, {
          variant: `code`,
          "aria-label": u,
          disabled: d,
          placeholder: f,
          value: r.key,
          onPaste: a,
          onChange: p,
        }),
      })),
      (t[7] = r.key),
      (t[8] = a),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === c
    ? (h = t[15])
    : ((h = c.formatMessage({
        id: `envEntrySettingsGroup.value.ariaLabel`,
        defaultMessage: `Value`,
        description: `Accessible label for an environment variable or secret value input`,
      })),
      (t[14] = c),
      (t[15] = h));
  let g;
  t[16] === c
    ? (g = t[17])
    : ((g = c.formatMessage({
        id: `envEntrySettingsGroup.value.placeholder`,
        defaultMessage: `Value`,
        description: `Placeholder for an environment variable or secret value input`,
      })),
      (t[16] = c),
      (t[17] = g));
  let _ = r.isSecret ? `password` : `text`,
    v;
  t[18] !== r || t[19] !== i
    ? ((v = (e) => {
        i({ ...r, value: e.target.value });
      }),
      (t[18] = r),
      (t[19] = i),
      (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] !== n || t[22] !== r.value || t[23] !== h || t[24] !== g || t[25] !== _ || t[26] !== v
    ? ((y = (0, Z.jsx)(`div`, {
        className: `col-span-5`,
        children: (0, Z.jsx)(l, {
          variant: `code`,
          "aria-label": h,
          disabled: n,
          placeholder: g,
          type: _,
          value: r.value,
          onChange: v,
        }),
      })),
      (t[21] = n),
      (t[22] = r.value),
      (t[23] = h),
      (t[24] = g),
      (t[25] = _),
      (t[26] = v),
      (t[27] = y))
    : (y = t[27]);
  let b;
  t[28] !== r.key || t[29] !== c || t[30] !== s
    ? ((b =
        r.key === ``
          ? c.formatMessage(
              {
                id: `envEntrySettingsGroup.secret.unnamedAriaLabel`,
                defaultMessage: `Treat environment variable {rowNumber} as a secret`,
                description: `Accessible label for marking an unnamed environment variable as secret`,
              },
              { rowNumber: s },
            )
          : c.formatMessage(
              {
                id: `envEntrySettingsGroup.secret.namedAriaLabel`,
                defaultMessage: `Treat {key} as a secret`,
                description: `Accessible label for marking a named environment variable as secret`,
              },
              { key: r.key },
            )),
      (t[28] = r.key),
      (t[29] = c),
      (t[30] = s),
      (t[31] = b))
    : (b = t[31]);
  let x;
  t[32] !== r || t[33] !== i
    ? ((x = (e) => {
        i({ ...r, isSecret: e });
      }),
      (t[32] = r),
      (t[33] = i),
      (t[34] = x))
    : (x = t[34]);
  let S;
  t[35] !== n || t[36] !== r.isSecret || t[37] !== b || t[38] !== x
    ? ((S = (0, Z.jsx)(`div`, {
        className: `col-span-1 flex justify-center`,
        children: (0, Z.jsx)(ne, {
          ariaLabel: b,
          checked: r.isSecret,
          disabled: n,
          size: `sm`,
          onChange: x,
        }),
      })),
      (t[35] = n),
      (t[36] = r.isSecret),
      (t[37] = b),
      (t[38] = x),
      (t[39] = S))
    : (S = t[39]);
  let C;
  t[40] === c
    ? (C = t[41])
    : ((C = c.formatMessage({
        id: `envEntrySettingsGroup.remove.ariaLabel`,
        defaultMessage: `Remove entry`,
        description: `Accessible label for removing an environment variable or secret row`,
      })),
      (t[40] = c),
      (t[41] = C));
  let w;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(ut, { className: `icon-2xs` })), (t[42] = w))
    : (w = t[42]);
  let T;
  t[43] !== n || t[44] !== o || t[45] !== C
    ? ((T = (0, Z.jsx)(`div`, {
        className: `col-span-1 flex justify-end`,
        children: (0, Z.jsx)(K, {
          "aria-label": C,
          color: `ghost`,
          disabled: n,
          size: `icon`,
          onClick: o,
          children: w,
        }),
      })),
      (t[43] = n),
      (t[44] = o),
      (t[45] = C),
      (t[46] = T))
    : (T = t[46]);
  let E;
  return (
    t[47] !== y || t[48] !== S || t[49] !== T || t[50] !== m
      ? ((E = (0, Z.jsxs)(Z.Fragment, { children: [m, y, S, T] })),
        (t[47] = y),
        (t[48] = S),
        (t[49] = T),
        (t[50] = m),
        (t[51] = E))
      : (E = t[51]),
    E
  );
}
var an,
  Z,
  on = e(() => {
    ((an = We()), g(), se(), a(), Me(), He(), le(), n(), ot(), ie(), v(), tn(), (Z = Pe()));
  });
function sn(e, t) {
  Ne(
    async () => {
      let { AppgenChangeSlugDialog: e } = await import(
        `./appgen-change-slug-dialog-daf64fab05ba.js`
      );
      return { AppgenChangeSlugDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3]),
    import.meta.url,
  ).then(({ AppgenChangeSlugDialog: n }) => {
    de(e, n, t);
  });
}
var cn = e(() => {
  (B(), xe());
});
function ln(e) {
  let t = (0, Q.c)(8),
    { initialEnvironmentDraft: n, initialTitle: r } = e,
    { projectId: i } = _e(),
    a = w();
  if (i == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(it, { replace: !0, to: $e })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  t[1] === a
    ? (o = t[2])
    : ((o = () => {
        a($e);
      }),
      (t[1] = a),
      (t[2] = o));
  let s;
  return (
    t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== o
      ? ((s = (0, $.jsx)(un, {
          initialEnvironmentDraft: n,
          initialTitle: r,
          projectId: i,
          onDeleted: o,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function un(e) {
  let t = (0, Q.c)(14),
    { initialEnvironmentDraft: n, initialTitle: r, onDeleted: i, projectId: a } = e,
    { data: o } = N(z, a),
    s;
  t[0] === o ? (s = t[1]) : ((s = pt(o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === s ? (c = t[3]) : ((c = { enabled: s }), (t[2] = s), (t[3] = c));
  let { data: l, isError: u, isLoading: d } = N(F, a, c),
    f;
  t[4] !== l || t[5] !== n || t[6] !== r || t[7] !== u || t[8] !== d || t[9] !== i
    ? ((f = (e) =>
        (0, $.jsx)(fn, {
          embedded: !1,
          environment: l,
          initialEnvironmentDraft: n,
          initialTitle: r,
          isEnvironmentError: u,
          isEnvironmentLoading: d,
          onDeleted: i,
          site: e,
        })),
      (t[4] = l),
      (t[5] = n),
      (t[6] = r),
      (t[7] = u),
      (t[8] = d),
      (t[9] = i),
      (t[10] = f))
    : (f = t[10]);
  let p;
  return (
    t[11] !== a || t[12] !== f
      ? ((p = (0, $.jsx)(ht, { projectId: a, selectedTab: `settings`, children: f })),
        (t[11] = a),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function dn(e) {
  let t = (0, Q.c)(16),
    { initialEnvironmentDraft: n, initialTitle: r, onDeleted: i, projectId: a } = e,
    { data: o, isError: s, isLoading: c } = N(z, a),
    l;
  t[0] === o ? (l = t[1]) : ((l = pt(o)), (t[0] = o), (t[1] = l));
  let u;
  t[2] === l ? (u = t[3]) : ((u = { enabled: l }), (t[2] = l), (t[3] = u));
  let { data: d, isError: f, isLoading: p } = N(F, a, u),
    m;
  if (c) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(bn, {})), (t[4] = e))
      : (e = t[4]),
      (m = e));
  } else if (s || o == null) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(xn, {})), (t[5] = e))
      : (e = t[5]),
      (m = e));
  } else {
    let e;
    (t[6] !== d ||
    t[7] !== n ||
    t[8] !== r ||
    t[9] !== f ||
    t[10] !== p ||
    t[11] !== i ||
    t[12] !== o
      ? ((e = (0, $.jsx)(fn, {
          embedded: !0,
          environment: d,
          initialEnvironmentDraft: n,
          initialTitle: r,
          isEnvironmentError: f,
          isEnvironmentLoading: p,
          onDeleted: i,
          site: o,
        })),
        (t[6] = d),
        (t[7] = n),
        (t[8] = r),
        (t[9] = f),
        (t[10] = p),
        (t[11] = i),
        (t[12] = o),
        (t[13] = e))
      : (e = t[13]),
      (m = e));
  }
  let h;
  return (
    t[14] === m
      ? (h = t[15])
      : ((h = (0, $.jsx)(`div`, {
          className: `flex min-h-0 flex-1 flex-col`,
          children: (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 scrollbar-stable overflow-y-auto`,
            children: (0, $.jsx)(C, { className: `w-full px-4 py-3`, embedded: !0, children: m }),
          }),
        })),
        (t[14] = m),
        (t[15] = h)),
    h
  );
}
function fn(e) {
  let t = (0, Q.c)(16),
    {
      embedded: n,
      environment: r,
      initialEnvironmentDraft: i,
      initialTitle: a,
      isEnvironmentError: o,
      isEnvironmentLoading: s,
      onDeleted: c,
      site: l,
    } = e;
  if (s) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(bn, {})), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (o || r == null) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(xn, {})), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let u;
  t[2] !== n || t[3] !== l.current_live_url || t[4] !== l.title
    ? ((u = n ? (0, $.jsx)(Ct, { liveUrl: l.current_live_url, title: l.title }) : null),
      (t[2] = n),
      (t[3] = l.current_live_url),
      (t[4] = l.title),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== n || t[7] !== r || t[8] !== i || t[9] !== a || t[10] !== c || t[11] !== l
    ? ((d = (0, $.jsx)(
        pn,
        {
          embedded: n,
          environment: r,
          initialEnvironmentDraft: i,
          initialTitle: a,
          onDeleted: c,
          site: l,
        },
        l.id,
      )),
      (t[6] = n),
      (t[7] = r),
      (t[8] = i),
      (t[9] = a),
      (t[10] = c),
      (t[11] = l),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== u || t[14] !== d
      ? ((f = (0, $.jsxs)($.Fragment, { children: [u, d] })), (t[13] = u), (t[14] = d), (t[15] = f))
      : (f = t[15]),
    f
  );
}
function pn(e) {
  let t = (0, Q.c)(141),
    {
      embedded: n,
      environment: r,
      initialEnvironmentDraft: a,
      initialTitle: o,
      onDeleted: s,
      site: m,
    } = e,
    h = i(Se),
    g = d(),
    { access_policy: _, current_live_url: v, id: y, slug: b, title: x } = m,
    S = Qe(`324493575`),
    { data: C } = p(O),
    { data: w, isError: T, isLoading: E } = N(Re, y),
    D = N(rt, y),
    k = N(c, y),
    A = R(),
    j;
  t[0] !== r || t[1] !== a
    ? ((j = a == null ? null : { baseEnvironment: r, draft: a }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = j))
    : (j = t[2]);
  let [M, P] = (0, Cn.useState)(j),
    [F, I] = (0, Cn.useState)(o ?? null),
    [L, z] = (0, Cn.useState)(!1),
    te;
  t[3] !== r || t[4] !== M?.draft
    ? ((te = M?.draft ?? Vt(r)), (t[3] = r), (t[4] = M?.draft), (t[5] = te))
    : (te = t[5]);
  let ne = te,
    re;
  t[6] === M
    ? (re = t[7])
    : ((re = M == null ? null : Ht(M.baseEnvironment, M.draft)), (t[6] = M), (t[7] = re));
  let ie = re,
    se = ie != null && (ie.remove.length > 0 || ie.set_values.length > 0),
    le;
  t[8] === M ? (le = t[9]) : ((le = M == null ? null : Ut(M.draft)), (t[8] = M), (t[9] = le));
  let ue = le,
    fe;
  t[10] !== F || t[11] !== L || t[12] !== x
    ? ((fe = Jt(F, x, L)), (t[10] = F), (t[11] = L), (t[12] = x), (t[13] = fe))
    : (fe = t[13]);
  let { isInvalid: B, title: pe, update: he } = fe,
    V = D.isPending || k.isPending,
    _e;
  t[14] === y
    ? (_e = t[15])
    : ((_e = { queryKey: [...tt, y], queryFn: Xe, gcTime: En, staleTime: 1 / 0 }),
      (t[14] = y),
      (t[15] = _e));
  let { data: H } = oe(_e),
    U = H != null && H.requestedSlug !== b,
    ve;
  t[16] !== H || t[17] !== y || t[18] !== g
    ? ((ve = () => {
        let e = !1;
        return (
          g.setQueryData([...tt, y], (t) =>
            t == null ||
            H == null ||
            t.expiresAt !== H.expiresAt ||
            t.requestedSlug !== H.requestedSlug
              ? t
              : ((e = !0), null),
          ),
          e
        );
      }),
      (t[16] = H),
      (t[17] = y),
      (t[18] = g),
      (t[19] = ve))
    : (ve = t[19]);
  let ye = ve,
    W;
  t[20] !== A || t[21] !== y || t[22] !== g || t[23] !== h
    ? ((W = () => {
        let e = !1;
        (g.setQueryData([...tt, y], (t) =>
          t == null || Date.now() < t.expiresAt ? t : ((e = !0), null),
        ),
          e &&
            h.get(ze).danger(
              A.formatMessage({
                id: `appgenSettings.general.url.changeTimeout`,
                defaultMessage: `Site URL change is taking longer than expected`,
                description: `Error toast shown when a requested Site URL change does not finish within ten minutes`,
              }),
            ));
      }),
      (t[20] = A),
      (t[21] = y),
      (t[22] = g),
      (t[23] = h),
      (t[24] = W))
    : (W = t[24]);
  let xe = W,
    Ce = H?.requestedSlug,
    we;
  t[25] !== y || t[26] !== Ce
    ? ((we = [...tt, y, `poll`, Ce]), (t[25] = y), (t[26] = Ce), (t[27] = we))
    : (we = t[27]);
  let Te;
  t[28] !== xe ||
  t[29] !== ye ||
  t[30] !== A ||
  t[31] !== H?.requestedSlug ||
  t[32] !== y ||
  t[33] !== g ||
  t[34] !== h
    ? ((Te = async () => {
        let e;
        try {
          e = await ge(y);
        } catch (e) {
          let t = e;
          throw (
            ye() &&
              h.get(ze).danger(
                A.formatMessage({
                  id: `appgenSettings.general.url.changePollError`,
                  defaultMessage: `Unable to confirm site URL change`,
                  description: `Error toast shown when checking the status of a requested Site URL change fails`,
                }),
              ),
            t
          );
        }
        return (
          e.slug === H?.requestedSlug
            ? (g.setQueryData([...f, y], e), await g.invalidateQueries({ queryKey: ce }), ye())
            : xe(),
          e
        );
      }),
      (t[28] = xe),
      (t[29] = ye),
      (t[30] = A),
      (t[31] = H?.requestedSlug),
      (t[32] = y),
      (t[33] = g),
      (t[34] = h),
      (t[35] = Te))
    : (Te = t[35]);
  let Ee;
  (t[36] !== U || t[37] !== we || t[38] !== Te
    ? ((Ee = {
        queryKey: we,
        queryFn: Te,
        enabled: U,
        refetchInterval: Tn,
        retry: !1,
        staleTime: 0,
      }),
      (t[36] = U),
      (t[37] = we),
      (t[38] = Te),
      (t[39] = Ee))
    : (Ee = t[39]),
    oe(Ee));
  let Oe =
      S &&
      C?.slugChange === !0 &&
      m.status === `active` &&
      (m.current_user_role === `owner` || m.current_user_role === void 0),
    ke = V || B || ue != null || (he == null && !se),
    je = null;
  if (B) {
    let e;
    (t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          id: wn,
          className: `text-sm text-chart-red`,
          role: `alert`,
          children: (0, $.jsx)(u, {
            id: `appgenSettings.general.title.required`,
            defaultMessage: `Site title is required`,
            description: `Inline validation message below the Site settings form when the Site title is empty`,
          }),
        })),
        (t[40] = e))
      : (e = t[40]),
      (je = e));
  } else if (ue === `duplicate-key`) {
    let e;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `text-sm text-chart-red`,
          role: `alert`,
          children: (0, $.jsx)(u, {
            id: `appgenSettings.environmentKeys.duplicate`,
            defaultMessage: `Environment variable keys must be unique`,
            description: `Validation shown when environment settings use a duplicate key`,
          }),
        })),
        (t[41] = e))
      : (e = t[41]),
      (je = e));
  } else if (ue === `stored-secret-needs-value`) {
    let e;
    (t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `text-sm text-chart-red`,
          role: `alert`,
          children: (0, $.jsx)(u, {
            id: `appgenSettings.environmentVariables.storedSecretNeedsValue`,
            defaultMessage: `Enter a new value before making a stored secret public`,
            description: `Validation shown when a stored secret is changed to a public environment variable without replacing its hidden value`,
          }),
        })),
        (t[42] = e))
      : (e = t[42]),
      (je = e));
  }
  let Me = n ? `gap-[var(--padding-panel)]` : `gap-10`,
    Ne;
  t[43] === Me ? (Ne = t[44]) : ((Ne = ae(`flex flex-col`, Me)), (t[43] = Me), (t[44] = Ne));
  let G;
  t[45] !== ie ||
  t[46] !== se ||
  t[47] !== A ||
  t[48] !== ke ||
  t[49] !== M?.baseEnvironment ||
  t[50] !== M?.draft ||
  t[51] !== y ||
  t[52] !== h ||
  t[53] !== he ||
  t[54] !== D.mutateAsync ||
  t[55] !== k
    ? ((G = (e) => {
        (e.preventDefault(),
          !ke &&
            Yt({
              environmentUpdate: se ? ie : null,
              titleUpdate: he,
              updateEnvironment: D.mutateAsync,
              updateTitle: k.mutateAsync,
            }).then((e) => {
              let { environmentSaved: t, titleSaved: n } = e;
              if ((n ? (I(null), z(!1)) : z(!0), t)) {
                let e = new Set(M?.baseEnvironment.entries.filter(gn).map(hn)),
                  t = new Set(M?.draft.entries.map(mn)),
                  n =
                    M?.draft.entries.filter((n) => {
                      let { isSecret: r, key: i, previousKey: a } = n;
                      return !r && a == null && (!e.has(i) || t.has(i));
                    }).length ?? 0;
                if (n > 0)
                  try {
                    De(h, Ae, { addedCount: ee(n), projectId: y });
                  } catch {}
                P(null);
              }
              (!n || !t) &&
                h.get(ze).danger(
                  A.formatMessage({
                    id: `appgenSettings.save.error`,
                    defaultMessage: `Unable to save site settings`,
                    description: `Error toast shown when saving site settings fails`,
                  }),
                );
            }));
      }),
      (t[45] = ie),
      (t[46] = se),
      (t[47] = A),
      (t[48] = ke),
      (t[49] = M?.baseEnvironment),
      (t[50] = M?.draft),
      (t[51] = y),
      (t[52] = h),
      (t[53] = he),
      (t[54] = D.mutateAsync),
      (t[55] = k),
      (t[56] = G))
    : (G = t[56]);
  let Pe;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = (0, $.jsx)(be.Header, {
        title: (0, $.jsx)(`span`, {
          className: `text-base`,
          children: (0, $.jsx)(u, {
            id: `appgenSettings.general.title`,
            defaultMessage: `General`,
            description: `Section heading for general Site information on the Site settings page`,
          }),
        }),
        subtitle: (0, $.jsx)(u, {
          id: `appgenSettings.general.description`,
          defaultMessage: `Settings your site uses while it runs, like URLs, names, or feature switches`,
          description: `Help text below the General section heading on the Site settings page`,
        }),
      })),
      (t[57] = Pe))
    : (Pe = t[57]);
  let Fe, Ie;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, $.jsx)(u, {
        id: `appgenSettings.general.title.label`,
        defaultMessage: `Name`,
        description: `Short label for the editable Site title field on the Site settings page`,
      })),
      (Ie = (0, $.jsx)(u, {
        id: `appgenSettings.general.title.description`,
        defaultMessage: `Name for your site`,
        description: `Help text for the editable Site title field on the Site settings page`,
      })),
      (t[58] = Fe),
      (t[59] = Ie))
    : ((Fe = t[58]), (Ie = t[59]));
  let Le;
  t[60] === A
    ? (Le = t[61])
    : ((Le = A.formatMessage({
        id: `appgenSettings.general.title.ariaLabel`,
        defaultMessage: `Site title`,
        description: `Accessible label for the Site title text input on the Site settings page`,
      })),
      (t[60] = A),
      (t[61] = Le));
  let Be = B ? wn : void 0,
    Ve;
  t[62] === x
    ? (Ve = t[63])
    : ((Ve = (e) => {
        (z(!1), I(e.target.value === x ? null : e.target.value));
      }),
      (t[62] = x),
      (t[63] = Ve));
  let He;
  t[64] !== F || t[65] !== L || t[66] !== x
    ? ((He = () => {
        !L && F?.trim() === x && I(null);
      }),
      (t[64] = F),
      (t[65] = L),
      (t[66] = x),
      (t[67] = He))
    : (He = t[67]);
  let Ue;
  t[68] !== B ||
  t[69] !== V ||
  t[70] !== Le ||
  t[71] !== Be ||
  t[72] !== Ve ||
  t[73] !== He ||
  t[74] !== pe
    ? ((Ue = (0, $.jsx)(Ye, {
        className: `max-sm:flex-col max-sm:items-stretch max-sm:gap-2`,
        label: Fe,
        description: Ie,
        control: (0, $.jsx)(`div`, {
          className: `w-56 max-w-full`,
          children: (0, $.jsx)(l, {
            "aria-label": Le,
            "aria-describedby": Be,
            "aria-invalid": B,
            disabled: V,
            maxLength: 100,
            type: `text`,
            value: pe,
            onChange: Ve,
            onBlur: He,
          }),
        }),
      })),
      (t[68] = B),
      (t[69] = V),
      (t[70] = Le),
      (t[71] = Be),
      (t[72] = Ve),
      (t[73] = He),
      (t[74] = pe),
      (t[75] = Ue))
    : (Ue = t[75]);
  let We, Ge;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (0, $.jsx)(u, {
        id: `appgenSettings.general.url.label`,
        defaultMessage: `URL`,
        description: `Label for the published Site URL on the Site settings page`,
      })),
      (Ge = (0, $.jsx)(u, {
        id: `appgenSettings.general.url.description`,
        defaultMessage: `Web address`,
        description: `Description for the published Site URL on the Site settings page`,
      })),
      (t[76] = We),
      (t[77] = Ge))
    : ((We = t[76]), (Ge = t[77]));
  let q;
  t[78] !== v || t[79] !== b
    ? ((q = ct(v) ?? b), (t[78] = v), (t[79] = b), (t[80] = q))
    : (q = t[80]);
  let Ke;
  t[81] === q
    ? (Ke = t[82])
    : ((Ke = (0, $.jsx)(`span`, {
        className: `max-w-56 min-w-0 truncate text-sm text-secondary`,
        children: q,
      })),
      (t[81] = q),
      (t[82] = Ke));
  let qe;
  t[83] !== Oe ||
  t[84] !== A ||
  t[85] !== U ||
  t[86] !== y ||
  t[87] !== h ||
  t[88] !== v ||
  t[89] !== b
    ? ((qe = Oe
        ? (0, $.jsx)(K, {
            "aria-label": A.formatMessage({
              id: `appgenSettings.general.url.changeAriaLabel`,
              defaultMessage: `Change hosted site URL`,
              description: `Accessible label for opening the hosted Site URL change dialog`,
            }),
            color: `outline`,
            loading: U,
            size: `toolbar`,
            onClick: () => {
              sn(h, { currentSlug: b, hostedDomainSuffix: st(v, b), projectId: y });
            },
            children: (0, $.jsx)(u, {
              id: `appgenSettings.general.url.change`,
              defaultMessage: `Change`,
              description: `Button label for changing a Site's hosted URL`,
            }),
          })
        : null),
      (t[83] = Oe),
      (t[84] = A),
      (t[85] = U),
      (t[86] = y),
      (t[87] = h),
      (t[88] = v),
      (t[89] = b),
      (t[90] = qe))
    : (qe = t[90]);
  let Je;
  t[91] !== Ke || t[92] !== qe
    ? ((Je = (0, $.jsx)(Ye, {
        className: `max-sm:flex-col max-sm:items-stretch max-sm:gap-2`,
        label: We,
        description: Ge,
        control: (0, $.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-2 max-sm:w-full max-sm:justify-between`,
          children: [Ke, qe],
        }),
      })),
      (t[91] = Ke),
      (t[92] = qe),
      (t[93] = Je))
    : (Je = t[93]);
  let J;
  t[94] !== w ||
  t[95] !== T ||
  t[96] !== E ||
  t[97] !== y ||
  t[98] !== v ||
  t[99] !== C?.customDomains
    ? ((J =
        C?.customDomains === !0
          ? (0, $.jsx)(wt, {
              customDomains: w,
              defaultDomain: ct(v),
              isError: T,
              isLoading: E,
              projectId: y,
            })
          : null),
      (t[94] = w),
      (t[95] = T),
      (t[96] = E),
      (t[97] = y),
      (t[98] = v),
      (t[99] = C?.customDomains),
      (t[100] = J))
    : (J = t[100]);
  let Ze;
  t[101] !== _ || t[102] !== y
    ? ((Ze = _ == null ? null : (0, $.jsx)(_n, { accessPolicy: _, projectId: y })),
      (t[101] = _),
      (t[102] = y),
      (t[103] = Ze))
    : (Ze = t[103]);
  let $e;
  t[104] !== Ue || t[105] !== Je || t[106] !== J || t[107] !== Ze
    ? (($e = (0, $.jsxs)(be, {
        children: [
          Pe,
          (0, $.jsx)(be.Content, { children: (0, $.jsxs)(me, { children: [Ue, Je, J, Ze] }) }),
        ],
      })),
      (t[104] = Ue),
      (t[105] = Je),
      (t[106] = J),
      (t[107] = Ze),
      (t[108] = $e))
    : ($e = t[108]);
  let Y;
  t[109] === r
    ? (Y = t[110])
    : ((Y = (e) => {
        P((t) => {
          let n = t?.baseEnvironment ?? r,
            i = { entries: e };
          return (0, Sn.default)(i, Vt(n)) ? null : { baseEnvironment: n, draft: i };
        });
      }),
      (t[109] = r),
      (t[110] = Y));
  let et;
  t[111] !== ne.entries || t[112] !== V || t[113] !== Y
    ? ((et = (0, $.jsx)(nn, { disabled: V, entries: ne.entries, onChange: Y })),
      (t[111] = ne.entries),
      (t[112] = V),
      (t[113] = Y),
      (t[114] = et))
    : (et = t[114]);
  let nt;
  t[115] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (0, $.jsx)(be.Header, {
        title: (0, $.jsx)(u, {
          id: `appgenSettings.danger.title`,
          defaultMessage: `Danger zone`,
          description: `Heading for destructive site actions`,
        }),
      })),
      (t[115] = nt))
    : (nt = t[115]);
  let it, at;
  t[116] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = (0, $.jsx)(u, {
        id: `appgenSettings.danger.delete.label`,
        defaultMessage: `Delete site`,
        description: `Label for the delete site action`,
      })),
      (at = (0, $.jsx)(u, {
        id: `appgenSettings.danger.delete.description`,
        defaultMessage: `Permanently delete this site`,
        description: `Description for the delete site action`,
      })),
      (t[116] = it),
      (t[117] = at))
    : ((it = t[116]), (at = t[117]));
  let ot;
  t[118] !== s || t[119] !== y || t[120] !== h || t[121] !== b || t[122] !== x
    ? ((ot = () => {
        de(h, vn, { onDeleted: s, projectId: y, siteSlug: b, siteTitle: x });
      }),
      (t[118] = s),
      (t[119] = y),
      (t[120] = h),
      (t[121] = b),
      (t[122] = x),
      (t[123] = ot))
    : (ot = t[123]);
  let lt;
  t[124] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, $.jsx)(u, {
        id: `appgenSettings.danger.delete.button`,
        defaultMessage: `Delete site`,
        description: `Delete site button label`,
      })),
      (t[124] = lt))
    : (lt = t[124]);
  let ut;
  t[125] === ot
    ? (ut = t[126])
    : ((ut = (0, $.jsxs)(be, {
        children: [
          nt,
          (0, $.jsx)(be.Content, {
            children: (0, $.jsx)(me, {
              children: (0, $.jsx)(Ye, {
                label: it,
                description: at,
                control: (0, $.jsx)(K, {
                  color: `danger`,
                  size: `toolbar`,
                  type: `button`,
                  onClick: ot,
                  children: lt,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[125] = ot),
      (t[126] = ut));
  let dt;
  t[127] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, $.jsx)(u, {
        id: `appgenSettings.save`,
        defaultMessage: `Save`,
        description: `Button for saving site settings`,
      })),
      (t[127] = dt))
    : (dt = t[127]);
  let ft;
  t[128] !== ke || t[129] !== V
    ? ((ft = (0, $.jsx)(K, {
        className: `ms-auto`,
        disabled: ke,
        loading: V,
        size: `toolbar`,
        type: `submit`,
        children: dt,
      })),
      (t[128] = ke),
      (t[129] = V),
      (t[130] = ft))
    : (ft = t[130]);
  let pt;
  t[131] !== ft || t[132] !== je
    ? ((pt = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 px-4 py-3`,
        children: [je, ft],
      })),
      (t[131] = ft),
      (t[132] = je),
      (t[133] = pt))
    : (pt = t[133]);
  let mt;
  return (
    t[134] !== Ne ||
    t[135] !== G ||
    t[136] !== $e ||
    t[137] !== et ||
    t[138] !== ut ||
    t[139] !== pt
      ? ((mt = (0, $.jsxs)(`form`, { className: Ne, onSubmit: G, children: [$e, et, ut, pt] })),
        (t[134] = Ne),
        (t[135] = G),
        (t[136] = $e),
        (t[137] = et),
        (t[138] = ut),
        (t[139] = pt),
        (t[140] = mt))
      : (mt = t[140]),
    mt
  );
}
function mn(e) {
  let { previousKey: t } = e;
  return t;
}
function hn(e) {
  let { key: t } = e;
  return t;
}
function gn(e) {
  let { is_secret: t } = e;
  return !t;
}
function _n(e) {
  let t = (0, Q.c)(40),
    { accessPolicy: n, projectId: r } = e,
    a = i(Se),
    o = R(),
    s,
    c,
    l,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  t[0] === n
    ? ((s = t[1]),
      (c = t[2]),
      (l = t[3]),
      (d = t[4]),
      (f = t[5]),
      (p = t[6]),
      (m = t[7]),
      (h = t[8]),
      (g = t[9]),
      (_ = t[10]))
    : ((l = dt(n)),
      (c = Ye),
      (h = `max-sm:flex-col max-sm:items-stretch max-sm:gap-2`),
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (0, $.jsx)(u, {
            id: `appgenSettings.sharing.label`,
            defaultMessage: `Sharing`,
            description: `Label for site sharing settings`,
          })),
          (_ = (0, $.jsx)(u, {
            id: `appgenSettings.sharing.description`,
            defaultMessage: `Who can view your site`,
            description: `Description for site sharing settings`,
          })),
          (t[11] = g),
          (t[12] = _))
        : ((g = t[11]), (_ = t[12])),
      (m = `flex items-center gap-2 max-sm:w-full max-sm:justify-between`),
      (f = `flex items-center gap-1 text-sm text-secondary`),
      (p = (0, $.jsx)(gt, { "aria-hidden": !0, accessPolicy: n, className: `icon-2xs shrink-0` })),
      (s = u),
      (d = yt(l)),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m),
      (t[8] = h),
      (t[9] = g),
      (t[10] = _));
  let v;
  t[13] !== s || t[14] !== l || t[15] !== d
    ? ((v = (0, $.jsx)(s, { ...d, values: l })), (t[13] = s), (t[14] = l), (t[15] = d), (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== f || t[18] !== p || t[19] !== v
    ? ((y = (0, $.jsxs)(`span`, { className: f, children: [p, v] })),
      (t[17] = f),
      (t[18] = p),
      (t[19] = v),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] === o
    ? (b = t[22])
    : ((b = o.formatMessage({
        id: `appgenSettings.sharing.buttonAriaLabel`,
        defaultMessage: `Manage sharing`,
        description: `Accessible label for managing site sharing`,
      })),
      (t[21] = o),
      (t[22] = b));
  let x;
  t[23] !== r || t[24] !== a
    ? ((x = () => bt(a, r, { source: Be.CODEX_SITES_SHARING_SOURCE_SETTINGS })),
      (t[23] = r),
      (t[24] = a),
      (t[25] = x))
    : (x = t[25]);
  let S;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(u, {
        id: `appgenSettings.sharing.button`,
        defaultMessage: `Manage`,
        description: `Button label for managing site sharing settings`,
      })),
      (t[26] = S))
    : (S = t[26]);
  let C;
  t[27] !== b || t[28] !== x
    ? ((C = (0, $.jsx)(K, {
        "aria-label": b,
        color: `outline`,
        size: `toolbar`,
        onClick: x,
        children: S,
      })),
      (t[27] = b),
      (t[28] = x),
      (t[29] = C))
    : (C = t[29]);
  let w;
  t[30] !== C || t[31] !== m || t[32] !== y
    ? ((w = (0, $.jsxs)(`div`, { className: m, children: [y, C] })),
      (t[30] = C),
      (t[31] = m),
      (t[32] = y),
      (t[33] = w))
    : (w = t[33]);
  let T;
  return (
    t[34] !== c || t[35] !== w || t[36] !== h || t[37] !== g || t[38] !== _
      ? ((T = (0, $.jsx)(c, { className: h, label: g, description: _, control: w })),
        (t[34] = c),
        (t[35] = w),
        (t[36] = h),
        (t[37] = g),
        (t[38] = _),
        (t[39] = T))
      : (T = t[39]),
    T
  );
}
function vn(e) {
  let t = (0, Q.c)(49),
    { onClose: n, onDeleted: r, projectId: a, siteSlug: o, siteTitle: s } = e,
    c = i(Se),
    d = N(j, a),
    f = R(),
    [p, m] = (0, Cn.useState)(``),
    h;
  t[0] === s
    ? (h = t[1])
    : ((h = (0, $.jsx)(u, {
        id: `appgenSettings.deleteDialog.title`,
        defaultMessage: `Delete {siteTitle}?`,
        description: `Title for dialog confirming deletion of a site`,
        values: { siteTitle: s },
      })),
      (t[0] = s),
      (t[1] = h));
  let g = h,
    _ = d.isPending,
    v = !d.isPending,
    y;
  t[2] !== d.isPending || t[3] !== n
    ? ((y = (e) => {
        !e && !d.isPending && n();
      }),
      (t[2] = d.isPending),
      (t[3] = n),
      (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== p || t[6] !== d || t[7] !== f || t[8] !== n || t[9] !== r || t[10] !== c || t[11] !== o
    ? ((b = (e) => {
        (e.preventDefault(),
          !(p !== o || d.isPending) &&
            d.mutateAsync().then(
              () => {
                (c.get(ze).success(
                  f.formatMessage({
                    id: `appgenSettings.deleteDialog.success`,
                    defaultMessage: `Site deleted`,
                    description: `Success toast shown after deleting a site`,
                  }),
                ),
                  n(),
                  r());
              },
              () => {
                c.get(ze).danger(
                  f.formatMessage({
                    id: `appgenSettings.deleteDialog.error`,
                    defaultMessage: `Unable to delete site`,
                    description: `Error toast shown when deleting a site fails`,
                  }),
                );
              },
            ));
      }),
      (t[5] = p),
      (t[6] = d),
      (t[7] = f),
      (t[8] = n),
      (t[9] = r),
      (t[10] = c),
      (t[11] = o),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] === g
    ? (x = t[14])
    : ((x = (0, $.jsx)(J, { className: `contents`, children: g })), (t[13] = g), (t[14] = x));
  let S;
  t[15] === o
    ? (S = t[16])
    : ((S = (0, $.jsx)(q, {
        className: `contents`,
        children: (0, $.jsx)(u, {
          id: `appgenSettings.deleteDialog.subtitle`,
          defaultMessage: `Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{siteSlug}</strong> below:`,
          description: `Subtitle for dialog confirming deletion of a site`,
          values: { siteSlug: o, strong: yn },
        }),
      })),
      (t[15] = o),
      (t[16] = S));
  let C;
  t[17] !== x || t[18] !== S
    ? ((C = (0, $.jsx)(`div`, {
        className: `flex w-full flex-col`,
        children: (0, $.jsx)(U, { title: x, titleClassName: `truncate pe-8`, subtitle: S }),
      })),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C))
    : (C = t[19]);
  let w;
  t[20] === f
    ? (w = t[21])
    : ((w = f.formatMessage({
        id: `appgenSettings.deleteDialog.slugInputLabel`,
        defaultMessage: `Site slug`,
        description: `Accessible label for the site slug input used to confirm site deletion`,
      })),
      (t[20] = f),
      (t[21] = w));
  let E;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => {
        m(e.target.value);
      }),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] !== p || t[24] !== d.isPending || t[25] !== o || t[26] !== w
    ? ((D = (0, $.jsx)(W, {
        children: (0, $.jsx)(l, {
          variant: `code`,
          "aria-label": w,
          autoFocus: !0,
          disabled: d.isPending,
          placeholder: o,
          spellCheck: !1,
          type: `text`,
          value: p,
          onChange: E,
        }),
      })),
      (t[23] = p),
      (t[24] = d.isPending),
      (t[25] = o),
      (t[26] = w),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(u, {
        id: `appgenSettings.deleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete site confirmation dialog`,
      })),
      (t[28] = O))
    : (O = t[28]);
  let k;
  t[29] !== d.isPending || t[30] !== n
    ? ((k = (0, $.jsx)(K, {
        color: `ghost`,
        disabled: d.isPending,
        type: `button`,
        onClick: n,
        children: O,
      })),
      (t[29] = d.isPending),
      (t[30] = n),
      (t[31] = k))
    : (k = t[31]);
  let A = p !== o || d.isPending,
    M;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(u, {
        id: `appgenSettings.deleteDialog.confirm`,
        defaultMessage: `Permanently delete`,
        description: `Confirm button label for delete site confirmation dialog`,
      })),
      (t[32] = M))
    : (M = t[32]);
  let P;
  t[33] !== d.isPending || t[34] !== A
    ? ((P = (0, $.jsx)(K, {
        color: `danger`,
        disabled: A,
        loading: d.isPending,
        type: `submit`,
        children: M,
      })),
      (t[33] = d.isPending),
      (t[34] = A),
      (t[35] = P))
    : (P = t[35]);
  let F;
  t[36] !== k || t[37] !== P
    ? ((F = (0, $.jsx)(W, { children: (0, $.jsxs)(ye, { children: [k, P] }) })),
      (t[36] = k),
      (t[37] = P),
      (t[38] = F))
    : (F = t[38]);
  let I;
  t[39] !== D || t[40] !== F || t[41] !== b || t[42] !== C
    ? ((I = (0, $.jsxs)(T, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: b,
        children: [C, D, F],
      })),
      (t[39] = D),
      (t[40] = F),
      (t[41] = b),
      (t[42] = C),
      (t[43] = I))
    : (I = t[43]);
  let L;
  return (
    t[44] !== d.isPending || t[45] !== I || t[46] !== v || t[47] !== y
      ? ((L = (0, $.jsx)(Y, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: _,
          showDialogClose: v,
          onOpenChange: y,
          children: I,
        })),
        (t[44] = d.isPending),
        (t[45] = I),
        (t[46] = v),
        (t[47] = y),
        (t[48] = L))
      : (L = t[48]),
    L
  );
}
function yn(e) {
  return (0, $.jsx)(`strong`, { children: e });
}
function bn() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(Le, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function xn() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(he, {
          layout: `page`,
          title: (0, $.jsx)(u, {
            id: `appgenSettings.error.title`,
            defaultMessage: `Unable to load site settings`,
            description: `Error state title for the site settings page`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q,
  Sn,
  Cn,
  $,
  wn,
  Tn,
  En,
  Dn = e(() => {
    ((Q = We()),
      P(),
      Ee(),
      Ze(),
      at(),
      (Sn = t(pe(), 1)),
      I(),
      (Cn = t(o(), 1)),
      se(),
      b(),
      a(),
      Fe(),
      ke(),
      _(),
      B(),
      A(),
      le(),
      Ue(),
      re(),
      Ke(),
      V(),
      ie(),
      ve(),
      v(),
      Ce(),
      ft(),
      vt(),
      _t(),
      Bt(),
      qt(),
      D(),
      je(),
      Xt(),
      St(),
      mt(),
      lt(),
      on(),
      cn(),
      xt(),
      ($ = Pe()),
      (wn = `appgen-settings-site-title-error`),
      (Tn = 1e3),
      (En = 660 * 1e3));
  });
export { ln as n, Dn as r, dn as t };
//# sourceMappingURL=appgen-settings-page-deb3b5079c3d.js.map
