import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $nt as r,
  Ac as i,
  Bc as a,
  Cot as o,
  Fc as s,
  Fz as c,
  Gct as l,
  Het as u,
  IDt as d,
  Ic as f,
  Iot as p,
  Ixt as m,
  JC as h,
  JR as g,
  Lc as _,
  Lot as v,
  MO as y,
  Mc as b,
  Mz as x,
  Nc as S,
  Nz as C,
  Oht as w,
  Pc as T,
  Pxt as E,
  Pz as D,
  Rc as O,
  Rnt as k,
  Sbt as A,
  VDt as ee,
  Vxt as te,
  WI as j,
  Wnt as M,
  YR as ne,
  _Mt as N,
  _O as re,
  bx as ie,
  cz as P,
  gMt as F,
  gf as ae,
  hf as oe,
  i3 as se,
  iO as ce,
  iot as I,
  iw as L,
  jDt as R,
  jO as z,
  jc as le,
  kc as ue,
  mO as de,
  qC as B,
  qnt as fe,
  r3 as pe,
  rO as me,
  rst as he,
  sMt as ge,
  sz as _e,
  t3 as V,
  tw as ve,
  umt as ye,
  vO as be,
  vzt as H,
  wot as xe,
  xMt as U,
  yx as Se,
  yzt as W,
  zc as Ce,
  zxt as we,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as G,
  BKt as Te,
  Bcr as Ee,
  Ddn as De,
  Dkn as Oe,
  Icr as ke,
  Idn as Ae,
  JPn as je,
  Jlr as Me,
  Ldn as Ne,
  NKt as Pe,
  QDr as Fe,
  QOn as Ie,
  SDn as Le,
  Skn as Re,
  TDn as ze,
  Tdn as Be,
  Tlr as Ve,
  Uk as He,
  Wk as Ue,
  XDr as We,
  XPn as Ge,
  Xcr as Ke,
  Xd as qe,
  Xlr as Je,
  Yd as Ye,
  Ylr as Xe,
  ZOn as Ze,
  Zcr as Qe,
  alr as $e,
  czt as et,
  dNr as tt,
  eDr as nt,
  eur as rt,
  fzt as it,
  gDt as at,
  hDt as ot,
  iNr as st,
  jdn as ct,
  kDn as lt,
  mt as ut,
  nDr as dt,
  oFr as ft,
  plr as pt,
  pzt as mt,
  qlr as ht,
  rNr as gt,
  szt as _t,
  wlr as vt,
  xDn as yt,
} from "./app-initial-5851df3f6cb1.js";
import { n as bt, t as xt } from "./use-can-use-locked-computer-use-5fa01d678ba2.js";
import { d as St, i as Ct, r as wt } from "./computer-use-app-approvals-query-3da9853157ef.js";
var Tt;
function Et() {
  return (Et = e(() => {
    (gt(), (Tt = st(`electron:codex-mobile-setup-step-debug-override`, `auto`)));
  }))();
}
var Dt;
function Ot() {
  return (Ot = e(() => {
    Dt = `` + new URL(`dialog-artwork-allow-host-746dc2210e2f.png`, import.meta.url).href;
  }))();
}
var kt;
function At() {
  return (At = e(() => {
    kt = `` + new URL(`dialog-artwork-connected-d64a0a5b3ba4.png`, import.meta.url).href;
  }))();
}
var jt;
function Mt() {
  return (Mt = e(() => {
    jt = `` + new URL(`dialog-artwork-initial-cc0c0bc433b6.png`, import.meta.url).href;
  }))();
}
var Nt;
function Pt() {
  return (Pt = e(() => {
    Nt = `` + new URL(`dialog-artwork-mfa-1ef45c7be7ea.png`, import.meta.url).href;
  }))();
}
var Ft;
function It() {
  return (It = e(() => {
    Ft = `` + new URL(`dialog-artwork-waiting-computer-4f22cf5e295b.png`, import.meta.url).href;
  }))();
}
var Lt;
function Rt() {
  return (Rt = e(() => {
    Lt = `` + new URL(`dialog-artwork-waiting-phone-144d899f2c7b.png`, import.meta.url).href;
  }))();
}
var zt;
function Bt() {
  return (Bt = e(() => {
    zt = `` + new URL(`page-artwork-allow-host-8f9bb7894769.png`, import.meta.url).href;
  }))();
}
var Vt;
function Ht() {
  return (Ht = e(() => {
    Vt = `` + new URL(`page-artwork-mfa-1ee94c4e76aa.png`, import.meta.url).href;
  }))();
}
var Ut;
function Wt() {
  return (Wt = e(() => {
    Ut = `` + new URL(`page-artwork-waiting-29ce3f3904f9.png`, import.meta.url).href;
  }))();
}
var Gt;
function Kt() {
  return (Kt = e(() => {
    Gt = `` + new URL(`page-artwork-shared-effc640bfe3e.png`, import.meta.url).href;
  }))();
}
function qt(e) {
  let t = (0, Jt.c)(21),
    { children: n, description: r, headerAdornment: i, heading: a, variant: o } = e,
    s = o === `page` && `max-w-[400px]`,
    c;
  t[0] === s ? (c = t[1]) : ((c = F(`flex w-full flex-col gap-2 text-center`, s)), (t[0] = s), (t[1] = c));
  let l = o === `dialog` ? `heading-dialog text-pretty` : `text-xl leading-tight font-normal text-pretty`,
    u;
  t[2] !== a || t[3] !== l
    ? ((u = (0, Yt.jsx)(`div`, { className: l, children: a })), (t[2] = a), (t[3] = l), (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] !== r || t[6] !== o
    ? ((d =
        r == null
          ? null
          : (0, Yt.jsx)(`div`, {
              className: F(
                o === `dialog` ? `text-base` : `text-lg`,
                `leading-normal tracking-normal text-pretty text-codex-description`,
              ),
              children: r,
            })),
      (t[5] = r),
      (t[6] = o),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== c || t[9] !== u || t[10] !== d
    ? ((f = (0, Yt.jsxs)(`div`, { className: c, children: [u, d] })),
      (t[8] = c),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] !== i || t[13] !== f
    ? ((p = (0, Yt.jsxs)(Yt.Fragment, { children: [i, f] })), (t[12] = i), (t[13] = f), (t[14] = p))
    : (p = t[14]);
  let m = p;
  if (o === `dialog`) {
    let e;
    return (
      t[15] !== n || t[16] !== m
        ? ((e = (0, Yt.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-6 px-6 py-6 select-none`,
            children: [m, n],
          })),
          (t[15] = n),
          (t[16] = m),
          (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  let h;
  return (
    t[18] !== n || t[19] !== m
      ? ((h = (0, Yt.jsxs)(`div`, {
          className: `flex w-full max-w-[640px] flex-col items-center gap-6 px-6 text-center select-none`,
          children: [m, n],
        })),
        (t[18] = n),
        (t[19] = m),
        (t[20] = h))
      : (h = t[20]),
    h
  );
}
var Jt, Yt;
function Xt() {
  return (Xt = e(() => {
    ((Jt = H()), N(), (Yt = U()));
  }))();
}
var Zt;
function Qt() {
  return (Qt = e(() => {
    Zt = `` + new URL(`page-artwork-background-cf341cdf032f.png`, import.meta.url).href;
  }))();
}
function $t(e) {
  let t = (0, nn.c)(13),
    { artworkAlignment: n, artworkSrc: r, children: i, footer: a } = e,
    o = n === void 0 ? `center` : n,
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (0, K.jsx)(`div`, {
        className: `flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-6 py-12`,
        children: i,
      })),
      (t[0] = i),
      (t[1] = s));
  let c;
  t[2] === a
    ? (c = t[3])
    : ((c =
        a == null
          ? null
          : (0, K.jsx)(`div`, { className: `flex shrink-0 justify-center px-6 pb-6`, children: a })),
      (t[2] = a),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, K.jsxs)(`div`, {
        className: `relative flex min-w-0 flex-1 basis-0 flex-col overflow-hidden`,
        children: [s, c],
      })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== o || t[8] !== r
    ? ((u =
        r == null
          ? null
          : (0, K.jsx)(`div`, {
              className: `hidden min-h-0 min-w-0 flex-1 basis-0 p-3 lg:block`,
              children: (0, K.jsx)(`div`, {
                className: `relative h-full w-full overflow-hidden rounded-xl bg-cover bg-center`,
                style: { backgroundImage: `url(${Zt})` },
                children: (0, K.jsx)(`img`, {
                  alt: ``,
                  "aria-hidden": !0,
                  className: F(
                    `absolute inset-0 h-full w-full object-contain`,
                    o === `bottom-right` && `object-right-bottom`,
                    o === `center` && `object-center`,
                    o === `right` && `object-right`,
                  ),
                  src: r,
                }),
              }),
            })),
      (t[7] = o),
      (t[8] = r),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== l || t[11] !== u
      ? ((d = (0, K.jsxs)(`div`, {
          className: `flex h-full min-h-0 w-full overflow-hidden bg-surface`,
          children: [l, u],
        })),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function en(e) {
  let t = (0, nn.c)(2),
    { artworkSrc: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsx)(`div`, {
          className: `relative h-[214px] overflow-hidden`,
          children: (0, K.jsx)(`img`, {
            alt: ``,
            "aria-hidden": !0,
            className: `h-full w-full object-cover`,
            src: n,
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function tn(e) {
  let t = (0, nn.c)(6),
    { className: r, onManageConnections: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = F(`justify-center`, r)), (t[0] = r), (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, K.jsx)(d, {
        id: `codexMobile.setupPage.connected.manageConnections`,
        defaultMessage: `Manage connections`,
        description: `Secondary action on the Codex mobile connected page that opens connection settings`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] !== i || t[4] !== a
      ? ((s = (0, K.jsx)(n, { color: `ghost`, size: `large`, className: a, onClick: i, children: o })),
        (t[3] = i),
        (t[4] = a),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
var nn, K;
function rn() {
  return (rn = e(() => {
    ((nn = H()), N(), R(), Qt(), V(), (K = U()));
  }))();
}
function an() {
  let e = (0, ln.c)(66),
    t = m(o),
    { platform: n } = rt(),
    i = dt(`410065390`),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { hostId: I }), (e[0] = a)) : (a = e[0]);
  let s = Je(a),
    c = s.available,
    u = r(l.keepRemoteControlAwakeWhilePluggedIn),
    d = we(xt, I),
    f = te(Ct),
    p;
  e[1] === t.query ? (p = e[2]) : ((p = t.query.snapshot(Ct)), (e[1] = t.query), (e[2] = p));
  let h = p,
    g;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { hostId: I, enabled: !0 }), (e[3] = g))
    : (g = e[3]);
  let _ = Me(g),
    y;
  e[4] === _ ? (y = e[5]) : ((y = { hostId: I, enabled: _ }), (e[4] = _), (e[5] = y));
  let b = Ve(y),
    x;
  e[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = []), (e[6] = x)) : (x = e[6]);
  let S;
  e[7] === _ ? (S = e[8]) : ((S = { hostId: I, roots: x, enabled: _ }), (e[7] = _), (e[8] = S));
  let { data: C, isLoading: w, refetch: T } = Ee(S),
    E;
  e[9] === _
    ? (E = e[10])
    : ((E = { hostId: I, marketplaceKind: `local`, enabled: _ }), (e[9] = _), (e[10] = E));
  let { data: D, isLoading: O, refetch: k } = pt(E),
    A,
    ee,
    j,
    M,
    ne;
  if (
    e[11] !== w ||
    e[12] !== O ||
    e[13] !== s.available ||
    e[14] !== s.isLoading ||
    e[15] !== b.available ||
    e[16] !== b.isLoading ||
    e[17] !== C ||
    e[18] !== _ ||
    e[19] !== D ||
    e[20] !== T ||
    e[21] !== k
  ) {
    let t = Ke({
      plugins: _ ? Qe({ buildFlavor: tt(), plugins: (0, un.default)([...(C ?? []), ...(D ?? [])], sn) }) : [],
      isComputerUseAvailable: s.available,
      isExternalBrowserUseAvailable: b.available,
      isInAppBrowserUseAvailable: !1,
      isMessagesAvailable: !1,
    });
    A = w || O || s.isLoading || b.isLoading;
    let n;
    (e[27] !== T || e[28] !== k
      ? ((n = async () => {
          await Promise.all([T(), k()]);
        }),
        (e[27] = T),
        (e[28] = k),
        (e[29] = n))
      : (n = e[29]),
      (M = n),
      (j = t.find(on) ?? null),
      (ee = j?.plugin.installed === !0 && j.plugin.enabled),
      (ne = cn(t)),
      (e[11] = w),
      (e[12] = O),
      (e[13] = s.available),
      (e[14] = s.isLoading),
      (e[15] = b.available),
      (e[16] = b.isLoading),
      (e[17] = C),
      (e[18] = _),
      (e[19] = D),
      (e[20] = T),
      (e[21] = k),
      (e[22] = A),
      (e[23] = ee),
      (e[24] = j),
      (e[25] = M),
      (e[26] = ne));
  } else ((A = e[22]), (ee = e[23]), (j = e[24]), (M = e[25]), (ne = e[26]));
  let N = ne,
    re;
  e[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((re = { hostId: I }), (e[30] = re)) : (re = e[30]);
  let { pendingPluginId: ie, setPluginEnabled: P } = Oe(re),
    { installPlugin: F, status: ae } = ct(),
    oe;
  e[31] === ae ? (oe = e[32]) : ((oe = De(ae, { hostId: I })), (e[31] = ae), (e[32] = oe));
  let se = oe,
    ce;
  e[33] === h
    ? (ce = e[34])
    : ((ce = {
        mutationFn: St,
        onSuccess: (e) => {
          h.setData((t) => ({
            computerIconDataURL: t?.computerIconDataURL ?? null,
            enabled: e,
            lockIconDataURL: t?.lockIconDataURL ?? null,
          }));
        },
      }),
      (e[33] = h),
      (e[34] = ce));
  let L = v(ce),
    R = n === `macOS` && ee && d && f.data?.enabled != null,
    z;
  e[35] !== j || e[36] !== F || e[37] !== f.data?.enabled || e[38] !== M || e[39] !== P || e[40] !== L
    ? ((z = (e) => {
        if (j != null) {
          if (!j.plugin.installed) {
            e && F(j, { hostId: I, marketplaceAnalytics: Ie.settings, onSuccess: M });
            return;
          }
          if (!e && f.data?.enabled) {
            L.mutate(!1, {
              onSuccess: (e) => {
                e === !1 && P({ enabled: !1, pluginDisplayName: Ae(j), pluginId: j.plugin.id });
              },
            });
            return;
          }
          P({ enabled: e, pluginDisplayName: Ae(j), pluginId: j.plugin.id });
        }
      }),
      (e[35] = j),
      (e[36] = F),
      (e[37] = f.data?.enabled),
      (e[38] = M),
      (e[39] = P),
      (e[40] = L),
      (e[41] = z))
    : (z = e[41]);
  let le = z,
    ue;
  e[42] !== N || e[43] !== F || e[44] !== M || e[45] !== P
    ? ((ue = (e) => {
        if (N != null) {
          if (!N.plugin.installed) {
            e && F(N, { hostId: I, marketplaceAnalytics: Ie.settings, onSuccess: M });
            return;
          }
          P({ enabled: e, pluginDisplayName: Ae(N), pluginId: N.plugin.id });
        }
      }),
      (e[42] = N),
      (e[43] = F),
      (e[44] = M),
      (e[45] = P),
      (e[46] = ue))
    : (ue = e[46]);
  let de = ue,
    B = N?.plugin.installed === !0 && N.plugin.enabled,
    pe = A || N == null || se || ie === N.plugin.id,
    me = A || j == null || se || L.isPending || ie === j.plugin.id,
    he = u ?? !1,
    ge = f.data?.enabled ?? !1,
    _e = !ee || f.isLoading || L.isPending,
    V;
  e[47] === t
    ? (V = e[48])
    : ((V = (e) => {
        fe(t, l.keepRemoteControlAwakeWhilePluggedIn, e);
      }),
      (e[47] = t),
      (e[48] = V));
  let ve;
  e[49] === L
    ? (ve = e[50])
    : ((ve = (e) => {
        L.mutate(e);
      }),
      (e[49] = L),
      (e[50] = ve));
  let ye;
  return (
    e[51] !== ee ||
    e[52] !== de ||
    e[53] !== le ||
    e[54] !== i ||
    e[55] !== c ||
    e[56] !== R ||
    e[57] !== B ||
    e[58] !== pe ||
    e[59] !== me ||
    e[60] !== he ||
    e[61] !== ge ||
    e[62] !== _e ||
    e[63] !== V ||
    e[64] !== ve
      ? ((ye = {
          chromeExtensionEnabled: B,
          chromeExtensionToggleDisabled: pe,
          computerUseEnabled: ee,
          computerUseToggleDisabled: me,
          keepComputerAwake: he,
          keepComputerAwakeToggleDisabled: !1,
          lockedComputerUseEnabled: ge,
          lockedComputerUseToggleDisabled: _e,
          onChromeExtensionEnabledChange: de,
          onComputerUseEnabledChange: le,
          onKeepComputerAwakeChange: V,
          onLockedComputerUseEnabledChange: ve,
          showChromeExtensionSetup: i,
          showComputerUseSetup: c,
          showKeepComputerAwake: !0,
          showLockedComputerUse: R,
        }),
        (e[51] = ee),
        (e[52] = de),
        (e[53] = le),
        (e[54] = i),
        (e[55] = c),
        (e[56] = R),
        (e[57] = B),
        (e[58] = pe),
        (e[59] = me),
        (e[60] = he),
        (e[61] = ge),
        (e[62] = _e),
        (e[63] = V),
        (e[64] = ve),
        (e[65] = ye))
      : (ye = e[65]),
    ye
  );
}
function on(e) {
  let { plugin: t } = e;
  return t.id === A;
}
function sn(e) {
  let { plugin: t } = e;
  return t.id;
}
function cn(e) {
  return (
    (w.isInternal(tt()) ? [ye.chromeInternal, ye.chromeDev, ye.chrome] : [ye.chrome])
      .map((t) => e.find(({ plugin: e }) => e.id === t))
      .find((e) => e != null) ?? null
  );
}
var ln, un;
function dn() {
  return (dn = e(() => {
    ((ln = H()),
      p(),
      (un = t(ge(), 1)),
      E(),
      he(),
      Ne(),
      bt(),
      Xe(),
      vt(),
      ht(),
      G(),
      Ze(),
      Be(),
      Re(),
      ke(),
      $e(),
      xe(),
      wt(),
      M(),
      ft(),
      nt());
  }))();
}
function fn(e) {
  let t = (0, hn.c)(54),
    { onFinishSetup: r, onManageConnections: i, variant: a } = e,
    o = ee(),
    { platform: c } = rt(),
    l = an(),
    u = a === `page` ? B : `div`,
    f;
  t[0] === a
    ? (f = t[1])
    : ((f = a === `page` ? (0, q.jsx)(He, { className: `size-11 text-default` }) : void 0),
      (t[0] = a),
      (t[1] = f));
  let p, m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, q.jsx)(d, {
        id: `codexMobile.setupDialog.connected.heading`,
        defaultMessage: `You’re connected`,
        description: `Heading for the Codex mobile setup connected state`,
      })),
      (m = (0, q.jsx)(d, {
        id: `codexMobile.setupDialog.connected.description`,
        defaultMessage: `Make the most out of your new connection. You can change these later in Settings.`,
        description: `Description for the Codex mobile setup connected state`,
      })),
      (t[2] = p),
      (t[3] = m))
    : ((p = t[2]), (m = t[3]));
  let h = a === `dialog` ? `flex w-full flex-col gap-2` : `w-full max-w-[400px] text-start`,
    g;
  t[4] !== l.keepComputerAwake ||
  t[5] !== l.keepComputerAwakeToggleDisabled ||
  t[6] !== l.onKeepComputerAwakeChange ||
  t[7] !== l.showKeepComputerAwake ||
  t[8] !== o ||
  t[9] !== c ||
  t[10] !== a
    ? ((g = l.showKeepComputerAwake
        ? (0, q.jsx)(mn, {
            icon: l.keepComputerAwake
              ? (0, q.jsx)(x, { "aria-hidden": !1, asset: b })
              : (0, q.jsx)(x, { "aria-hidden": !1, asset: T }),
            variant: a,
            title:
              c === `macOS`
                ? (0, q.jsx)(d, {
                    id: `codexMobile.setupDialog.connected.keepAwake.title`,
                    defaultMessage: `Keep this Mac awake`,
                    description: `Title for keeping the computer awake after mobile setup`,
                  })
                : (0, q.jsx)(d, {
                    id: `codexMobile.setupDialog.connected.keepAwake.title.windows`,
                    defaultMessage: `Keep this PC awake`,
                    description: `Title for keeping the computer awake after mobile setup on Windows or Linux`,
                  }),
            description: (0, q.jsx)(d, {
              id: `codexMobile.setupDialog.connected.keepAwake.description`,
              defaultMessage: `Prevent sleep when this computer is plugged in and remote access is enabled`,
              description: `Description for keeping the computer awake after mobile setup`,
            }),
            trailing: (0, q.jsx)(z, {
              checked: l.keepComputerAwake,
              disabled: l.keepComputerAwakeToggleDisabled,
              ariaLabel:
                c === `macOS`
                  ? o.formatMessage({
                      id: `codexMobile.setupDialog.connected.keepAwake.toggle`,
                      defaultMessage: `Keep this Mac awake`,
                      description: `Accessible label for keeping the computer awake toggle`,
                    })
                  : o.formatMessage({
                      id: `codexMobile.setupDialog.connected.keepAwake.toggle.windows`,
                      defaultMessage: `Keep this PC awake`,
                      description: `Accessible label for keeping the computer awake toggle on Windows or Linux`,
                    }),
              onChange: l.onKeepComputerAwakeChange,
            }),
          })
        : null),
      (t[4] = l.keepComputerAwake),
      (t[5] = l.keepComputerAwakeToggleDisabled),
      (t[6] = l.onKeepComputerAwakeChange),
      (t[7] = l.showKeepComputerAwake),
      (t[8] = o),
      (t[9] = c),
      (t[10] = a),
      (t[11] = g))
    : (g = t[11]);
  let v;
  t[12] !== l.computerUseEnabled ||
  t[13] !== l.computerUseToggleDisabled ||
  t[14] !== l.lockedComputerUseEnabled ||
  t[15] !== l.lockedComputerUseToggleDisabled ||
  t[16] !== l.onComputerUseEnabledChange ||
  t[17] !== l.onLockedComputerUseEnabledChange ||
  t[18] !== l.showComputerUseSetup ||
  t[19] !== l.showLockedComputerUse ||
  t[20] !== o ||
  t[21] !== c ||
  t[22] !== a
    ? ((v =
        l.showComputerUseSetup && l.showLockedComputerUse
          ? (0, q.jsx)(mn, {
              icon: (0, q.jsx)(x, { "aria-hidden": !1, asset: s }),
              variant: a,
              title: (0, q.jsx)(d, {
                id: `codexMobile.setupDialog.connected.lockedComputerUse.title`,
                defaultMessage: `Use your Mac apps while locked`,
                description: `Title for enabling Locked Computer Use after mobile setup`,
              }),
              description: (0, q.jsx)(d, {
                id: `codexMobile.setupDialog.connected.lockedComputerUse.description`,
                defaultMessage: `Control Mac apps from your phone. <a>Learn more</a>`,
                description: `Description for enabling Locked Computer Use after mobile setup`,
                values: {
                  a: (e) =>
                    (0, q.jsx)(`a`, {
                      className: `inline-flex text-info`,
                      href: Pe,
                      target: `_blank`,
                      rel: `noreferrer`,
                      onClick: a === `dialog` ? pn : void 0,
                      children: e,
                    }),
                },
              }),
              trailing: (0, q.jsx)(z, {
                checked: l.lockedComputerUseEnabled,
                disabled: l.lockedComputerUseToggleDisabled,
                ariaLabel: o.formatMessage({
                  id: `codexMobile.setupDialog.connected.lockedComputerUse.toggle`,
                  defaultMessage: `Use your Mac apps while locked`,
                  description: `Accessible label for the Locked Computer Use setup toggle`,
                }),
                onChange: l.onLockedComputerUseEnabledChange,
              }),
            })
          : l.showComputerUseSetup
            ? (0, q.jsx)(mn, {
                icon: (0, q.jsx)(x, { "aria-hidden": !1, asset: _ }),
                variant: a,
                title: (0, q.jsx)(d, {
                  id: `codexMobile.setupDialog.connected.computerUse.title`,
                  defaultMessage: `Enable computer use`,
                  description: `Title for enabling Computer Use after mobile setup`,
                }),
                description:
                  c === `macOS`
                    ? (0, q.jsx)(d, {
                        id: `codexMobile.setupDialog.connected.computerUse.description`,
                        defaultMessage: `Let ChatGPT control apps on your Mac`,
                        description: `Description for enabling Computer Use after mobile setup`,
                      })
                    : (0, q.jsx)(d, {
                        id: `codexMobile.setupDialog.connected.computerUse.description.windows`,
                        defaultMessage: `Let ChatGPT control apps on your PC`,
                        description: `Description for enabling Computer Use after mobile setup on Windows or Linux`,
                      }),
                trailing: (0, q.jsx)(z, {
                  checked: l.computerUseEnabled,
                  disabled: l.computerUseToggleDisabled,
                  ariaLabel: o.formatMessage({
                    id: `codexMobile.setupDialog.connected.computerUse.toggle`,
                    defaultMessage: `Enable computer use`,
                    description: `Accessible label for the Computer Use setup toggle`,
                  }),
                  onChange: l.onComputerUseEnabledChange,
                }),
              })
            : null),
      (t[12] = l.computerUseEnabled),
      (t[13] = l.computerUseToggleDisabled),
      (t[14] = l.lockedComputerUseEnabled),
      (t[15] = l.lockedComputerUseToggleDisabled),
      (t[16] = l.onComputerUseEnabledChange),
      (t[17] = l.onLockedComputerUseEnabledChange),
      (t[18] = l.showComputerUseSetup),
      (t[19] = l.showLockedComputerUse),
      (t[20] = o),
      (t[21] = c),
      (t[22] = a),
      (t[23] = v))
    : (v = t[23]);
  let y;
  t[24] !== l.chromeExtensionEnabled ||
  t[25] !== l.chromeExtensionToggleDisabled ||
  t[26] !== l.onChromeExtensionEnabledChange ||
  t[27] !== l.showChromeExtensionSetup ||
  t[28] !== o ||
  t[29] !== a
    ? ((y = l.showChromeExtensionSetup
        ? (0, q.jsx)(mn, {
            icon: (0, q.jsx)(x, { "aria-hidden": !1, asset: Ce }),
            variant: a,
            title: (0, q.jsx)(d, {
              id: `codexMobile.setupDialog.connected.chromeExtension.title`,
              defaultMessage: `Set up Chrome extension`,
              description: `Title for setting up the Chrome extension after mobile setup`,
            }),
            description: (0, q.jsx)(d, {
              id: `codexMobile.setupDialog.connected.chromeExtension.description`,
              defaultMessage: `Let ChatGPT navigate websites and fill out forms`,
              description: `Description for installing the Chrome extension after mobile setup`,
            }),
            trailing: (0, q.jsx)(z, {
              checked: l.chromeExtensionEnabled,
              disabled: l.chromeExtensionToggleDisabled,
              ariaLabel: o.formatMessage({
                id: `codexMobile.setupDialog.connected.chromeExtension.toggle`,
                defaultMessage: `Set up Chrome extension`,
                description: `Accessible label for the Chrome extension setup toggle`,
              }),
              onChange: l.onChromeExtensionEnabledChange,
            }),
          })
        : null),
      (t[24] = l.chromeExtensionEnabled),
      (t[25] = l.chromeExtensionToggleDisabled),
      (t[26] = l.onChromeExtensionEnabledChange),
      (t[27] = l.showChromeExtensionSetup),
      (t[28] = o),
      (t[29] = a),
      (t[30] = y))
    : (y = t[30]);
  let S;
  t[31] !== u || t[32] !== h || t[33] !== g || t[34] !== v || t[35] !== y
    ? ((S = (0, q.jsxs)(u, { className: h, children: [g, v, y] })),
      (t[31] = u),
      (t[32] = h),
      (t[33] = g),
      (t[34] = v),
      (t[35] = y),
      (t[36] = S))
    : (S = t[36]);
  let C = a === `page` && `w-[256px]`,
    w;
  t[37] === C ? (w = t[38]) : ((w = F(`justify-center`, C)), (t[37] = C), (t[38] = w));
  let E;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, q.jsx)(d, {
        id: `codexMobile.setupDialog.connected.finish`,
        defaultMessage: `Done`,
        description: `Primary action for the Codex mobile setup connected state`,
      })),
      (t[39] = E))
    : (E = t[39]);
  let D;
  t[40] !== r || t[41] !== w
    ? ((D = (0, q.jsx)(`div`, {
        className: `flex flex-wrap items-center justify-center gap-3`,
        children: (0, q.jsx)(n, { size: `large`, className: w, onClick: r, children: E }),
      })),
      (t[40] = r),
      (t[41] = w),
      (t[42] = D))
    : (D = t[42]);
  let O;
  t[43] !== i || t[44] !== a
    ? ((O =
        a === `page` && i != null
          ? (0, q.jsx)(tn, { className: `w-[256px]`, onManageConnections: i })
          : null),
      (t[43] = i),
      (t[44] = a),
      (t[45] = O))
    : (O = t[45]);
  let k;
  t[46] !== D || t[47] !== O
    ? ((k = (0, q.jsxs)(`div`, { className: `flex w-full flex-col items-center gap-3`, children: [D, O] })),
      (t[46] = D),
      (t[47] = O),
      (t[48] = k))
    : (k = t[48]);
  let A;
  return (
    t[49] !== f || t[50] !== k || t[51] !== S || t[52] !== a
      ? ((A = (0, q.jsx)(q.Fragment, {
          children: (0, q.jsxs)(qt, {
            variant: a,
            headerAdornment: f,
            heading: p,
            description: m,
            children: [S, k],
          }),
        })),
        (t[49] = f),
        (t[50] = k),
        (t[51] = S),
        (t[52] = a),
        (t[53] = A))
      : (A = t[53]),
    A
  );
}
function pn(e) {
  Ge({ event: e, href: Pe, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
function mn(e) {
  let t = (0, hn.c)(22),
    { description: n, icon: r, title: i, trailing: a, variant: o } = e;
  if (o === `page`) {
    let e;
    return (
      t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
        ? ((e = (0, q.jsx)(ve, { controlSizing: `content`, description: n, icon: r, label: i, control: a })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i),
          (t[3] = a),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let s;
  t[5] === r
    ? (s = t[6])
    : ((s = (0, q.jsx)(`div`, {
        className: `flex size-11 shrink-0 items-center justify-center text-default`,
        children: r,
      })),
      (t[5] = r),
      (t[6] = s));
  let c;
  t[7] === i
    ? (c = t[8])
    : ((c = (0, q.jsx)(`div`, { className: `text-sm text-default`, children: i })), (t[7] = i), (t[8] = c));
  let l;
  t[9] === n
    ? (l = t[10])
    : ((l = (0, q.jsx)(`div`, { className: `text-xs text-codex-description`, children: n })),
      (t[9] = n),
      (t[10] = l));
  let u;
  t[11] !== c || t[12] !== l
    ? ((u = (0, q.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [c, l] })),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u))
    : (u = t[13]);
  let d;
  t[14] !== s || t[15] !== u
    ? ((d = (0, q.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 items-center gap-3 text-start`,
        children: [s, u],
      })),
      (t[14] = s),
      (t[15] = u),
      (t[16] = d))
    : (d = t[16]);
  let f;
  t[17] === a
    ? (f = t[18])
    : ((f = (0, q.jsx)(`div`, { className: `shrink-0 text-codex-description`, children: a })),
      (t[17] = a),
      (t[18] = f));
  let p;
  return (
    t[19] !== d || t[20] !== f
      ? ((p = (0, q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4 px-[14px] py-2 text-start`,
          children: [d, f],
        })),
        (t[19] = d),
        (t[20] = f),
        (t[21] = p))
      : (p = t[21]),
    p
  );
}
var hn, q;
function gn() {
  return (gn = e(() => {
    ((hn = H()),
      a(),
      O(),
      f(),
      S(),
      le(),
      N(),
      R(),
      Te(),
      V(),
      je(),
      C(),
      y(),
      G(),
      Ue(),
      L(),
      h(),
      Xt(),
      rn(),
      dn(),
      (q = U()));
  }))();
}
var _n;
function vn() {
  return (vn = e(() => {
    _n = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="1000" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g transform="translate(0,0) scale(1.0,1.0)"><svg width="1000" height="1000" viewBox="0 0 740 740" enable-background="new 0 0 1000 1000" xml:space="preserve"><rect x="0" y="0" width="740" height="740" fill="var(--color-surface)" opacity="1.0" /><circle cx="270.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="110.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="110.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><path d="M80 80 H192.0 A28.0 28.0 0 0 1 220 108.0 V192.0 A28.0 28.0 0 0 1 192.0 220 H108.0 A28.0 28.0 0 0 1 80 192.0 V108.0 A28.0 28.0 0 0 1 108 80 Z M100.0 100.0 H180.0 A20.0 20.0 0 0 1 200.0 120.0 V180.0 A20.0 20.0 0 0 1 180.0 200.0 H120.0 A20.0 20.0 0 0 1 100.0 180.0 V120.0 A20.0 20.0 0 0 1 120.0 100.0 Z" fill-rule="evenodd" fill="currentColor" opacity="1.0" /><path d="M520 80 H632.0 A28.0 28.0 0 0 1 660 108.0 V192.0 A28.0 28.0 0 0 1 632.0 220 H548.0 A28.0 28.0 0 0 1 520 192.0 V108.0 A28.0 28.0 0 0 1 548 80 Z M540.0 100.0 H620.0 A20.0 20.0 0 0 1 640.0 120.0 V180.0 A20.0 20.0 0 0 1 620.0 200.0 H560.0 A20.0 20.0 0 0 1 540.0 180.0 V120.0 A20.0 20.0 0 0 1 560.0 100.0 Z" fill-rule="evenodd" fill="currentColor" opacity="1.0" /><rect x="120" y="120" rx="20.0" ry="20.0" width="60" height="60" fill="currentColor" opacity="1.0" /><rect x="560" y="120" rx="20.0" ry="20.0" width="60" height="60" fill="currentColor" opacity="1.0" /><path d="M80 520 H192.0 A28.0 28.0 0 0 1 220 548.0 V632.0 A28.0 28.0 0 0 1 192.0 660 H108.0 A28.0 28.0 0 0 1 80 632.0 V548.0 A28.0 28.0 0 0 1 108 520 Z M100.0 540.0 H180.0 A20.0 20.0 0 0 1 200.0 560.0 V620.0 A20.0 20.0 0 0 1 180.0 640.0 H120.0 A20.0 20.0 0 0 1 100.0 620.0 V560.0 A20.0 20.0 0 0 1 120.0 540.0 Z" fill-rule="evenodd" fill="currentColor" opacity="1.0" /><rect x="120" y="560" rx="20.0" ry="20.0" width="60" height="60" fill="currentColor" opacity="1.0" /></svg></g></svg>`;
  }))();
}
var yn;
function bn() {
  return (bn = e(() => {
    yn = {
      androidDots: new URL(
        `` + new URL(`android_dots-d1c933e95c03.svg`, import.meta.url).href,
        `` + import.meta.url,
      ).href,
      corners: new URL(`` + new URL(`corners-8e459ab5a395.svg`, import.meta.url).href, `` + import.meta.url)
        .href,
      iosDots: new URL(`` + new URL(`dots-bf4432a1fba5.svg`, import.meta.url).href, `` + import.meta.url)
        .href,
    };
  }))();
}
function xn({ onArtworkReady: e, svgMarkup: t }) {
  let n = ne(),
    r = (0, J.useId)().replaceAll(`:`, ``),
    i = (0, J.useRef)(null),
    a = (0, J.useRef)(null),
    o = (0, J.useRef)(null),
    s = (0, J.useRef)({ current: null, lastSampledAt: 0, trail: [] }),
    c = (0, J.useRef)(null),
    l = (0, J.useRef)(null),
    u = (0, J.useRef)(null),
    d = (0, J.useCallback)(function e(t) {
      let n = o.current,
        r = a.current,
        i = c.current;
      if (((c.current = null), n != null && r != null && i != null)) {
        let e = r.createSVGPoint();
        ((e.x = i.x), (e.y = i.y));
        let a = r.getScreenCTM();
        if (a != null) {
          let r = e.matrixTransform(a.inverse()),
            i = s.current;
          (i.current != null && t - i.lastSampledAt >= Bn
            ? (i.trail.unshift({ sampledAt: t, x: i.current.x, y: i.current.y }),
              i.trail.length > Rn && i.trail.pop(),
              (i.lastSampledAt = t))
            : (i.current ?? (i.lastSampledAt = t)),
            (i.current = r),
            jn(n.brushSpot, r, 1),
            n.brushOverlay.setAttribute(`opacity`, `1`));
        }
      }
      if (n != null) {
        let e = s.current.trail;
        for (; e.length > 0 && t - e[e.length - 1].sampledAt >= Ln;) e.pop();
        for (let [r, i] of n.trailSpots.entries()) {
          let n = e[r];
          if (n == null) {
            i.maskRect.setAttribute(`opacity`, `0`);
            continue;
          }
          jn(i, n, (1 - (t - n.sampledAt) / Ln) * (1 - r / Rn) * zn);
        }
      }
      let d = u.current;
      if (n != null && d != null) {
        let e = Math.min(1, (t - d.startedAt) / Vn),
          r = d.maxRadius * e,
          i = Math.max(0, r - Un),
          a = Math.min(d.maxRadius, r + Un),
          [o, s, c] = n.rippleStops;
        (o.setAttribute(`offset`, String(i / d.maxRadius)),
          s.setAttribute(`offset`, String(r / d.maxRadius)),
          c.setAttribute(`offset`, String(a / d.maxRadius)),
          n.rippleOverlay.setAttribute(`opacity`, String(1 - e * 0.18)),
          e >= 1 && ((u.current = null), n.rippleOverlay.setAttribute(`opacity`, `0`)));
      }
      l.current =
        u.current != null || c.current != null || (n != null && s.current.trail.length > 0)
          ? requestAnimationFrame(e)
          : null;
    }, []),
    f = (0, J.useCallback)(() => {
      l.current ??= requestAnimationFrame(d);
    }, [d]);
  ((0, J.useEffect)(() => {
    n &&
      ((u.current = null),
      (c.current = null),
      Mn(s.current, o.current),
      o.current?.rippleOverlay.setAttribute(`opacity`, `0`),
      l.current != null && (cancelAnimationFrame(l.current), (l.current = null)));
  }, [n]),
    (0, J.useEffect)(() => {
      let t = i.current?.querySelector(`svg`);
      if (t == null) return;
      let n = s.current,
        d = Sn(t, r);
      return (
        (a.current = t),
        (o.current = d),
        (c.current = null),
        Mn(n, d),
        e?.(),
        () => {
          ((a.current = null),
            (o.current = null),
            (u.current = null),
            (c.current = null),
            Mn(n, null),
            l.current != null && (cancelAnimationFrame(l.current), (l.current = null)),
            Nn(t, d));
        }
      );
    }, [e, r, t]));
  let p = (0, J.useCallback)(() => {
    if (n) return;
    let e = a.current;
    if (e == null) return;
    let t = e.viewBox.baseVal;
    ((u.current = { maxRadius: Math.hypot(t.width / 2, t.height / 2), startedAt: performance.now() }), f());
  }, [f, n]);
  function m(e) {
    n || ((c.current = { x: e.clientX, y: e.clientY }), f());
  }
  function h() {
    ((c.current = null), Mn(s.current, o.current));
  }
  return { clearPaint: h, paintDots: m, rootRef: i, triggerRipple: p };
}
function Sn(e, t) {
  let n = Pn(`g`),
    r = `interactive-dots-${t}`;
  n.id = r;
  let i = Array.from(e.querySelectorAll(`:scope > path`)).map((e) => {
      let t = e.getAttribute(`fill`);
      return (e.removeAttribute(`fill`), n.appendChild(e), { fill: t, path: e });
    }),
    a = Pn(`defs`),
    o = Cn(e, `interactive-brush-${t}`),
    s = Array.from({ length: Rn }, (n, r) => Cn(e, `interactive-brush-trail-${r}-${t}`)),
    c = On(e, `interactive-brush-${t}-mask`);
  c.append(o.maskRect, ...s.map(({ maskRect: e }) => e));
  let { gradient: l, stops: u } = Tn(e, `interactive-ripple-${t}`),
    d = Dn(e, l);
  (a.append(n, o.gradient, ...s.map(({ gradient: e }) => e), c, l, d), e.prepend(a));
  let f = An(r, `currentColor`, `1`),
    p = An(r, `var(--color-chart-blue)`, `0`, c.id, In),
    m = An(r, `var(--color-chart-blue)`, `0`, d.id, Hn);
  return (
    e.append(f, p, m),
    {
      baseOverlay: f,
      brushOverlay: p,
      brushSpot: o,
      defs: a,
      originalPathFills: i,
      rippleOverlay: m,
      rippleStops: u,
      trailSpots: s,
    }
  );
}
function Cn(e, t) {
  let n = wn(t),
    r = kn(e);
  return (
    r.setAttribute(`fill`, `url(#${n.id})`),
    r.setAttribute(`opacity`, `0`),
    { gradient: n, maskRect: r }
  );
}
function wn(e) {
  let t = Pn(`radialGradient`);
  return (
    (t.id = e),
    t.setAttribute(`gradientUnits`, `userSpaceOnUse`),
    t.setAttribute(`cx`, `-72`),
    t.setAttribute(`cy`, `-72`),
    t.setAttribute(`r`, String(Fn)),
    t.append(En(`0`, `1`), En(`0.58`, `0.61`), En(`0.99`, `0.23`), En(`1`, `0`)),
    t
  );
}
function Tn(e, t) {
  let n = Pn(`radialGradient`),
    r = e.viewBox.baseVal,
    i = [En(`0`, `0`), En(`0`, `1`), En(`0`, `0`)];
  return (
    (n.id = t),
    n.setAttribute(`gradientUnits`, `userSpaceOnUse`),
    n.setAttribute(`cx`, String(r.x + r.width / 2)),
    n.setAttribute(`cy`, String(r.y + r.height / 2)),
    n.setAttribute(`r`, String(Math.hypot(r.width / 2, r.height / 2))),
    n.append(...i),
    { gradient: n, stops: i }
  );
}
function En(e, t) {
  let n = Pn(`stop`);
  return (
    n.setAttribute(`offset`, e),
    n.setAttribute(`stop-color`, `white`),
    n.setAttribute(`stop-opacity`, t),
    n
  );
}
function Dn(e, t) {
  let n = On(e, `${t.id}-mask`),
    r = kn(e);
  return (r.setAttribute(`fill`, `url(#${t.id})`), n.appendChild(r), n);
}
function On(e, t) {
  let n = Pn(`mask`),
    r = e.viewBox.baseVal;
  return (
    (n.id = t),
    n.setAttribute(`maskUnits`, `userSpaceOnUse`),
    n.setAttribute(`x`, String(r.x)),
    n.setAttribute(`y`, String(r.y)),
    n.setAttribute(`width`, String(r.width)),
    n.setAttribute(`height`, String(r.height)),
    n
  );
}
function kn(e) {
  let t = Pn(`rect`),
    n = e.viewBox.baseVal;
  return (
    t.setAttribute(`x`, String(n.x)),
    t.setAttribute(`y`, String(n.y)),
    t.setAttribute(`width`, String(n.width)),
    t.setAttribute(`height`, String(n.height)),
    t
  );
}
function An(e, t, n, r, i) {
  let a = Pn(`use`);
  return (
    a.setAttribute(`href`, `#${e}`),
    a.setAttribute(`fill`, t),
    a.setAttribute(`opacity`, n),
    a.setAttribute(`pointer-events`, `none`),
    r != null && a.setAttribute(`mask`, `url(#${r})`),
    i != null && (a.setAttribute(`stroke`, t), a.setAttribute(`stroke-width`, String(i))),
    a
  );
}
function jn(e, t, n) {
  (e.gradient.setAttribute(`cx`, String(t.x)),
    e.gradient.setAttribute(`cy`, String(t.y)),
    e.maskRect.setAttribute(`opacity`, String(n)));
}
function Mn(e, t) {
  ((e.current = null),
    (e.lastSampledAt = 0),
    (e.trail.length = 0),
    t?.brushOverlay.setAttribute(`opacity`, `0`));
}
function Nn(e, t) {
  if (t.defs.parentNode === e) {
    for (let { fill: n, path: r } of t.originalPathFills)
      (n == null ? r.removeAttribute(`fill`) : r.setAttribute(`fill`, n), e.insertBefore(r, t.baseOverlay));
    (t.baseOverlay.remove(), t.brushOverlay.remove(), t.rippleOverlay.remove(), t.defs.remove());
  }
}
function Pn(e) {
  return document.createElementNS(Wn, e);
}
var J, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn;
function Gn() {
  return (Gn = e(() => {
    ((J = W()),
      g(),
      (Fn = 72),
      (In = 1),
      (Ln = 720),
      (Rn = 8),
      (zn = 0.75),
      (Bn = 55),
      (Vn = 760),
      (Hn = 1.4),
      (Un = 42),
      (Wn = `http://www.w3.org/2000/svg`));
  }))();
}
function Kn(e) {
  let t = (0, qn.c)(13),
    { onArtworkReady: n, ref: r, svgMarkup: i } = e,
    a;
  t[0] !== n || t[1] !== i
    ? ((a = { onArtworkReady: n, svgMarkup: i }), (t[0] = n), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let { clearPaint: o, paintDots: s, rootRef: c, triggerRipple: l } = xn(a),
    u,
    d;
  (t[3] === l
    ? ((u = t[4]), (d = t[5]))
    : ((u = () => ({ triggerRipple: l })), (d = [l]), (t[3] = l), (t[4] = u), (t[5] = d)),
    (0, Jn.useImperativeHandle)(r, u, d));
  let f;
  t[6] === i ? (f = t[7]) : ((f = { __html: i }), (t[6] = i), (t[7] = f));
  let p;
  return (
    t[8] !== o || t[9] !== s || t[10] !== c || t[11] !== f
      ? ((p = (0, Yn.jsx)(`div`, {
          ref: c,
          "aria-hidden": `true`,
          className: `absolute inset-0 h-full w-full text-default [&_svg]:block [&_svg]:size-full [&_svg>path]:fill-current`,
          onPointerLeave: o,
          onPointerMove: s,
          dangerouslySetInnerHTML: f,
        })),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
var qn, Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    ((qn = H()), (Jn = W()), Gn(), (Yn = U()));
  }))();
}
var Zn;
function Qn() {
  return (Qn = e(() => {
    Zn = `` + new URL(`codex-home-hero-dark-still-38dcfbc5c531.png`, import.meta.url).href;
  }))();
}
var $n;
function er() {
  return (er = e(() => {
    $n = `` + new URL(`codex-home-hero-dark-3f0460c4764f.mp4`, import.meta.url).href;
  }))();
}
var tr;
function nr() {
  return (nr = e(() => {
    tr = `` + new URL(`codex-home-hero-light-still-90edccb8aa07.png`, import.meta.url).href;
  }))();
}
var rr;
function ir() {
  return (ir = e(() => {
    rr = `` + new URL(`codex-home-hero-light-b28a9df8176a.mp4`, import.meta.url).href;
  }))();
}
var ar;
function or() {
  return (or = e(() => {
    ar = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.80156 -4.86374e-05C6.69258 0.000117442 7.50897 0.323687 8.13906 0.857764C8.34796 0.820083 8.56404 0.799179 8.78359 0.79917C10.781 0.799774 12.4005 2.41954 12.4008 4.41714C12.4007 4.6366 12.3791 4.85173 12.3414 5.06011C12.8758 5.69048 13.1999 6.50778 13.2 7.39917C13.1997 8.96866 12.1997 10.3027 10.8039 10.8039C10.3028 12.1998 8.96867 13.1997 7.39922 13.2C6.50789 13.1999 5.69129 12.8758 5.06094 12.3414C4.8524 12.3791 4.63674 12.4007 4.41719 12.4007C2.41956 12.4005 0.80032 10.7805 0.8 8.78276C0.800026 8.56309 0.820863 8.34776 0.858594 8.13901C0.361897 7.55298 0.0471584 6.80587 0.00546875 5.98745L0 5.80073C0.000176183 4.23141 0.999616 2.89589 2.39531 2.39448C2.89683 0.998761 4.23227 -3.48408e-05 5.80156 -4.86374e-05Z" fill="white"/>
</svg>
`;
  }))();
}
function sr(e) {
  let t = (0, lr.c)(35),
    { ariaLabel: n, className: r, onClick: i } = e,
    a = ne(),
    o = (0, ur.useRef)(null),
    s = c() === !0,
    [l, u] = (0, ur.useState)(null),
    d = s ? `dark` : `light`,
    { stillSrc: f, videoSrc: p } = fr[d],
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        let e = o.current;
        e != null && (e.pause(), (e.currentTime = 0));
      }),
      (t[0] = m))
    : (m = t[0]);
  let h = m,
    g;
  t[1] !== a || t[2] !== d || t[3] !== l
    ? ((g = () => {
        if (a || l === d) return;
        let e = o.current;
        e != null && e.paused && ((e.currentTime = 0), e.play()?.catch(cr));
      }),
      (t[1] = a),
      (t[2] = d),
      (t[3] = l),
      (t[4] = g))
    : (g = t[4]);
  let _ = g,
    v;
  t[5] === r ? (v = t[6]) : ((v = F(`size-full shrink-0 object-contain`, r)), (t[5] = r), (t[6] = v));
  let y = v;
  if (a || l === d) {
    let e;
    t[7] === r ? (e = t[8]) : ((e = F(`cursor-interaction overflow-hidden`, r)), (t[7] = r), (t[8] = e));
    let a;
    t[9] !== y || t[10] !== f
      ? ((a = (0, dr.jsx)(`img`, { alt: ``, "aria-hidden": `true`, className: y, src: f })),
        (t[9] = y),
        (t[10] = f),
        (t[11] = a))
      : (a = t[11]);
    let o;
    return (
      t[12] !== n || t[13] !== i || t[14] !== e || t[15] !== a
        ? ((o = (0, dr.jsx)(`button`, {
            type: `button`,
            "aria-label": n,
            className: e,
            style: mr,
            onClick: i,
            children: a,
          })),
          (t[12] = n),
          (t[13] = i),
          (t[14] = e),
          (t[15] = a),
          (t[16] = o))
        : (o = t[16]),
      o
    );
  }
  let b;
  t[17] === r ? (b = t[18]) : ((b = F(`cursor-interaction overflow-hidden`, r)), (t[17] = r), (t[18] = b));
  let x;
  t[19] === _
    ? (x = t[20])
    : ((x = (e) => {
        e.pointerType === `mouse` && _();
      }),
      (t[19] = _),
      (t[20] = x));
  let S;
  t[21] === d
    ? (S = t[22])
    : ((S = () => {
        u(d);
      }),
      (t[21] = d),
      (t[22] = S));
  let C;
  t[23] !== y || t[24] !== f || t[25] !== x || t[26] !== S || t[27] !== d || t[28] !== p
    ? ((C = (0, dr.jsx)(
        `video`,
        {
          ref: o,
          "aria-hidden": `true`,
          className: y,
          muted: !0,
          playsInline: !0,
          poster: f,
          preload: `auto`,
          src: p,
          onPointerEnter: x,
          onEnded: h,
          onError: S,
        },
        d,
      )),
      (t[23] = y),
      (t[24] = f),
      (t[25] = x),
      (t[26] = S),
      (t[27] = d),
      (t[28] = p),
      (t[29] = C))
    : (C = t[29]);
  let w;
  return (
    t[30] !== n || t[31] !== i || t[32] !== b || t[33] !== C
      ? ((w = (0, dr.jsx)(`button`, {
          type: `button`,
          "aria-label": n,
          className: b,
          style: mr,
          onClick: i,
          children: C,
        })),
        (t[30] = n),
        (t[31] = i),
        (t[32] = b),
        (t[33] = C),
        (t[34] = w))
      : (w = t[34]),
    w
  );
}
function cr() {}
var lr, ur, dr, fr, pr, mr;
function hr() {
  return (hr = e(() => {
    ((lr = H()),
      N(),
      (ur = W()),
      Qn(),
      er(),
      nr(),
      ir(),
      or(),
      g(),
      D(),
      (dr = U()),
      (fr = { dark: { stillSrc: Zn, videoSrc: $n }, light: { stillSrc: tr, videoSrc: rr } }),
      (pr = `url(${j(ar)})`),
      (mr = {
        maskImage: pr,
        maskMode: `alpha`,
        maskPosition: `calc(50% + 1px) calc(50% + 1px)`,
        maskRepeat: `no-repeat`,
        maskSize: `90% 90%`,
        WebkitMaskImage: pr,
        WebkitMaskPosition: `calc(50% + 1px) calc(50% + 1px)`,
        WebkitMaskRepeat: `no-repeat`,
        WebkitMaskSize: `90% 90%`,
      }));
  }))();
}
function gr(e) {
  let t = br.get(e);
  if (t != null) return t;
  let n = fetch(e).then((e) => {
    if (!e.ok) throw Error(`Failed to load QR dots artwork.`);
    return e.text();
  });
  return (br.set(e, n), n);
}
function _r(e) {
  let t = (0, vr.c)(5),
    n;
  t[0] === e ? (n = t[1]) : ((n = { markup: ``, src: e }), (t[0] = e), (t[1] = n));
  let [r, i] = (0, yr.useState)(n),
    a,
    o;
  return (
    t[2] === e
      ? ((a = t[3]), (o = t[4]))
      : ((a = () => {
          let t = !0;
          return (
            gr(e)
              .then((n) => {
                t && i({ markup: n, src: e });
              })
              .catch(() => {
                br.delete(e);
              }),
            () => {
              t = !1;
            }
          );
        }),
        (o = [e]),
        (t[2] = e),
        (t[3] = a),
        (t[4] = o)),
    (0, yr.useEffect)(a, o),
    r.src === e ? r.markup : ``
  );
}
var vr, yr, br;
function xr() {
  return (xr = e(() => {
    ((vr = H()), (yr = W()), (br = new Map()));
  }))();
}
function Sr(e) {
  let t = (0, Ur.c)(11),
    { ariaLabel: n, centerLogoAriaLabel: r, fullscreen: i, pairingCode: a, platform: o, size: s } = e,
    c = i !== void 0 && i,
    l = s === void 0 ? `default` : s;
  if (a != null) {
    let e;
    return (
      t[0] !== n || t[1] !== r || t[2] !== c || t[3] !== a || t[4] !== l
        ? ((e = (0, X.jsx)(Cr, {
            ariaLabel: n,
            centerLogoAriaLabel: r,
            fullscreen: c,
            pairingCode: a,
            size: l,
          })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = c),
          (t[3] = a),
          (t[4] = l),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let u;
  return (
    t[6] !== n || t[7] !== r || t[8] !== o || t[9] !== l
      ? ((u = (0, X.jsx)(Tr, { ariaLabel: n, centerLogoAriaLabel: r, platform: o, size: l })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = o),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function Cr(e) {
  let t = (0, Ur.c)(11),
    { ariaLabel: n, centerLogoAriaLabel: r, fullscreen: i, pairingCode: a, size: o } = e,
    s = o === void 0 ? `default` : o,
    c;
  if (t[0] !== i || t[1] !== a) {
    let e = new URL(`https://chatgpt.com/codex/pair`);
    (e.searchParams.set(`pairing_code`, a),
      (c = kr(e.toString(), i ? `L` : `M`, !i)),
      (t[0] = i),
      (t[1] = a),
      (t[2] = c));
  } else c = t[2];
  let l = c;
  if (i) {
    let e;
    return (
      t[3] !== n || t[4] !== l
        ? ((e = (0, X.jsx)(wr, { ariaLabel: n, ...l })), (t[3] = n), (t[4] = l), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let u;
  return (
    t[6] !== n || t[7] !== r || t[8] !== l || t[9] !== s
      ? ((u = (0, X.jsx)(Or, { ariaLabel: n, centerLogoAriaLabel: r, size: s, ...l })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = l),
        (t[9] = s),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function wr(e) {
  let t = (0, Ur.c)(8),
    { ariaLabel: n, cornersMarkup: r, dotsMarkup: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (0, X.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full`,
        dangerouslySetInnerHTML: { __html: r },
      })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o = (0, X.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full`,
        dangerouslySetInnerHTML: { __html: i },
      })),
      (t[2] = i),
      (t[3] = o));
  let s;
  return (
    t[4] !== n || t[5] !== a || t[6] !== o
      ? ((s = (0, X.jsxs)(`div`, {
          "aria-label": n,
          className: `relative size-[min(640px,calc(100vw-48px),calc(100dvh-96px))] overflow-hidden rounded-[48px] bg-surface-elevated-secondary text-default`,
          role: `img`,
          children: [a, o],
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Tr(e) {
  let t = (0, Ur.c)(7),
    { ariaLabel: n, centerLogoAriaLabel: r, platform: i, size: a } = e,
    o = a === void 0 ? `default` : a;
  if (i === `android`) {
    let e;
    return (
      t[0] !== n || t[1] !== o
        ? ((e = (0, X.jsx)(Er, { ariaLabel: n, size: o })), (t[0] = n), (t[1] = o), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let s;
  return (
    t[3] !== n || t[4] !== r || t[5] !== o
      ? ((s = (0, X.jsx)(Dr, { ariaLabel: n, centerLogoAriaLabel: r, size: o })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Er(e) {
  let t = (0, Ur.c)(6),
    { ariaLabel: n, size: r } = e,
    i = r === `compact` ? `size-[180px] rounded-[24px]` : `size-[270px] rounded-[32px]`,
    a;
  t[0] === i ? (a = t[1]) : ((a = F(`relative overflow-hidden bg-surface`, i)), (t[0] = i), (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `h-full w-full text-default [&>svg]:block [&>svg]:h-full [&>svg]:w-full`,
        dangerouslySetInnerHTML: { __html: _n },
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] !== n || t[4] !== a
      ? ((s = (0, X.jsx)(`div`, { "aria-label": n, className: a, role: `img`, children: o })),
        (t[3] = n),
        (t[4] = a),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Dr(e) {
  let t = (0, Ur.c)(6),
    { ariaLabel: n, centerLogoAriaLabel: r, size: i } = e,
    a = _r(yn.corners),
    o = _r(yn.iosDots),
    s;
  return (
    t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== o || t[4] !== i
      ? ((s = (0, X.jsx)(Or, {
          ariaLabel: n,
          centerLogoAriaLabel: r,
          cornersMarkup: a,
          dotsMarkup: o,
          size: i,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o),
        (t[4] = i),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Or(e) {
  let t = (0, Ur.c)(18),
    { ariaLabel: n, centerLogoAriaLabel: r, cornersMarkup: i, dotsMarkup: a, size: o } = e,
    s = (0, Gr.useRef)(null),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        s.current?.triggerRipple();
      }),
      (t[0] = c))
    : (c = t[0]);
  let l = c,
    u = o === `compact` ? `size-[180px] rounded-[24px]` : `size-[270px] rounded-[32px]`,
    d;
  t[1] === u ? (d = t[2]) : ((d = F(`relative overflow-hidden bg-surface`, u)), (t[1] = u), (t[2] = d));
  let f;
  t[3] === i
    ? (f = t[4])
    : ((f = (0, X.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute inset-0 z-10 h-full w-full text-default [&_path]:fill-current [&_svg]:block [&_svg]:size-full`,
        dangerouslySetInnerHTML: { __html: i },
      })),
      (t[3] = i),
      (t[4] = f));
  let p;
  t[5] === a
    ? (p = t[6])
    : ((p = (0, X.jsx)(Kn, { ref: s, onArtworkReady: l, svgMarkup: a })), (t[5] = a), (t[6] = p));
  let m = o === `compact` ? `w-10` : `w-14`,
    h;
  t[7] === m ? (h = t[8]) : ((h = F(`pointer-events-auto aspect-square`, m)), (t[7] = m), (t[8] = h));
  let g;
  t[9] !== r || t[10] !== h
    ? ((g = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-20 grid place-items-center`,
        children: (0, X.jsx)(sr, { ariaLabel: r, className: h, onClick: l }),
      })),
      (t[9] = r),
      (t[10] = h),
      (t[11] = g))
    : (g = t[11]);
  let _;
  return (
    t[12] !== n || t[13] !== d || t[14] !== f || t[15] !== p || t[16] !== g
      ? ((_ = (0, X.jsxs)(`div`, { "aria-label": n, className: d, role: `img`, children: [f, p, g] })),
        (t[12] = n),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p),
        (t[16] = g),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
function kr(e, t, n) {
  let r = (0, Wr.create)(e, { errorCorrectionLevel: t }).modules,
    i = Kr / (r.size + 8);
  return { cornersMarkup: jr(r.size, i), dotsMarkup: Ar(r, i, n) };
}
function Ar(e, t, n) {
  let r = [];
  for (let i = 0; i < e.size; i += 1)
    for (let a = 0; a < e.size; a += 1)
      !zr(e, i, a) || Br(e.size, i, a) || (n && Rr(e.size, t, i, a)) || r.push(Nr(a, t, i));
  return Fr(r.join(``));
}
function jr(e, t) {
  return Fr([Mr(0, 0, t), Mr(e - Yr, 0, t), Mr(0, e - Yr, t)].join(``));
}
function Mr(e, t, n) {
  let r = Lr(e, n),
    i = Lr(t, n),
    a = n * Yr,
    o = n,
    s = n * 2;
  return `<path fill-rule="evenodd" clip-rule="evenodd" d="${Pr(r, i, a, n * 1.6)} ${Pr(r + o, i + o, a - o * 2, n)}" fill="currentColor"/><rect x="${Y(r + s)}" y="${Y(i + s)}" width="${Y(a - s * 2)}" height="${Y(a - s * 2)}" rx="${Y(n)}" fill="currentColor"/>`;
}
function Nr(e, t, n) {
  let r = t * Jr,
    i = Ir(e, t),
    a = Ir(n, t);
  return `<path d="M ${Y(i)} ${Y(a - r)} A ${Y(r)} ${Y(r)} 0 1 1 ${Y(i)} ${Y(a + r)} A ${Y(r)} ${Y(r)} 0 1 1 ${Y(i)} ${Y(a - r)} Z" fill="currentColor"/>`;
}
function Pr(e, t, n, r) {
  let i = e + n,
    a = t + n;
  return `M ${Y(e + r)} ${Y(t)} H ${Y(i - r)} A ${Y(r)} ${Y(r)} 0 0 1 ${Y(i)} ${Y(t + r)} V ${Y(a - r)} A ${Y(r)} ${Y(r)} 0 0 1 ${Y(i - r)} ${Y(a)} H ${Y(e + r)} A ${Y(r)} ${Y(r)} 0 0 1 ${Y(e)} ${Y(a - r)} V ${Y(t + r)} A ${Y(r)} ${Y(r)} 0 0 1 ${Y(e + r)} ${Y(t)} Z`;
}
function Fr(e) {
  return `<svg width="${Kr}" height="${Kr}" viewBox="0 0 ${Kr} ${Kr}" fill="none" xmlns="${Zr}">${e}</svg>`;
}
function Ir(e, t) {
  return Lr(e, t) + t / 2;
}
function Lr(e, t) {
  return (e + Xr) * t;
}
function Rr(e, t, n, r) {
  let i = (e - 1) / 2,
    a = (Hr(Math.ceil(qr / t)) - 1) / 2;
  return Math.abs(n - i) <= a && Math.abs(r - i) <= a;
}
function zr(e, t, n) {
  return e.data[t * e.size + n] === 1;
}
function Br(e, t, n) {
  return Vr(t, n, 0, 0) || Vr(t, n, 0, e - Yr) || Vr(t, n, e - Yr, 0);
}
function Vr(e, t, n, r) {
  return e >= n && e < n + Yr && t >= r && t < r + Yr;
}
function Hr(e) {
  return e % 2 == 0 ? e + 1 : e;
}
function Y(e) {
  return Number(e.toFixed(4));
}
var Ur, Wr, Gr, X, Kr, qr, Jr, Yr, Xr, Zr;
function Qr() {
  return (Qr = e(() => {
    ((Ur = H()),
      N(),
      (Wr = ut()),
      (Gr = W()),
      vn(),
      bn(),
      Xn(),
      hr(),
      xr(),
      (X = U()),
      (Kr = 330),
      (qr = 70),
      (Jr = 0.42),
      (Yr = 7),
      (Xr = 4),
      (Zr = `http://www.w3.org/2000/svg`));
  }))();
}
function $r(e) {
  let t = (0, fi.c)(82),
    { deviceType: r, hostId: i, onDeviceTypeChange: a, showDeviceTypeSelector: o, size: s } = e,
    c = i === void 0 ? I : i,
    l = o === void 0 || o,
    u = s === void 0 ? `default` : s,
    f = ee(),
    p = dt(yt),
    m = dt(Le),
    [h, g] = (0, pi.useState)(`ios`),
    [_, v] = (0, pi.useState)(!1),
    [y, b] = (0, pi.useState)(`phone`),
    S = l ? (r ?? y) : `phone`,
    [C] = (0, pi.useState)(ei),
    w;
  t[0] !== c || t[1] !== C
    ? ((w = { hostId: c, openId: C }), (t[0] = c), (t[1] = C), (t[2] = w))
    : (w = t[2]);
  let T = we(lt, w),
    E = p && !m,
    D = E && T.error == null ? (T.data ?? null) : null,
    O = D?.manualPairingCode ?? null,
    k = E && D == null && (T.error == null || T.isFetching),
    A = !p || D?.pairingCode != null,
    te = S === `phone` && !p && !m,
    j = l && !m,
    M = E && S === `computer` && !k,
    ne;
  t[3] !== r || t[4] !== a
    ? ((ne = (e) => {
        (r ?? b(e), a?.(e));
      }),
      (t[3] = r),
      (t[4] = a),
      (t[5] = ne))
    : (ne = t[5]);
  let N = ne,
    ie;
  t[6] === f
    ? (ie = t[7])
    : ((ie = f.formatMessage({
        id: `codexMobile.setupPage.waiting.pairing.refresh`,
        defaultMessage: `Refresh pairing code`,
        description: `Accessible label for refreshing the remote-control pairing code`,
      })),
      (t[6] = f),
      (t[7] = ie));
  let P = ie,
    ae;
  t[8] === f
    ? (ae = t[9])
    : ((ae = f.formatMessage({
        id: `codexMobile.setupPage.waiting.pairing.showQrCodeFullscreen`,
        defaultMessage: `Show QR code fullscreen`,
        description: `Accessible label for showing the remote-control pairing QR code fullscreen`,
      })),
      (t[8] = f),
      (t[9] = ae));
  let se = ae,
    ce;
  t[10] === f
    ? (ce = t[11])
    : ((ce = f.formatMessage({
        id: `codexMobile.setupPage.waiting.phoneDeepLink.qrCode`,
        defaultMessage: `QR code to continue setup in ChatGPT`,
        description: `Accessible label for the QR code that opens Codex in ChatGPT`,
      })),
      (t[10] = f),
      (t[11] = ce));
  let L = ce,
    R;
  t[12] === f
    ? (R = t[13])
    : ((R = f.formatMessage({
        id: `codexMobile.setupPage.waiting.phoneDeepLink.animateQrCode`,
        defaultMessage: `Animate QR code`,
        description: `Accessible label for the button that replays the Codex mobile QR code animation`,
      })),
      (t[12] = f),
      (t[13] = R));
  let z = R,
    le;
  t[14] === f
    ? (le = t[15])
    : ((le = f.formatMessage({
        id: `codexMobile.setupPage.waiting.pairing.copy`,
        defaultMessage: `Copy pairing code`,
        description: `Accessible label for copying the remote-control pairing code`,
      })),
      (t[14] = f),
      (t[15] = le));
  let ue = le,
    B;
  if (m) {
    let e;
    (t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`div`, {
          className: `max-w-[280px] text-base leading-normal text-secondary`,
          children: (0, Z.jsx)(d, {
            id: `codexMobile.setupPage.waiting.upgradeMessage`,
            defaultMessage: `Please upgrade to the latest version of the ChatGPT app to pair`,
            description: `Message shown instead of remote-control pairing controls when the desktop app must be upgraded`,
          }),
        })),
        (t[16] = e))
      : (e = t[16]),
      (B = e));
  } else if (k) {
    let e;
    t[17] === f
      ? (e = t[18])
      : ((e = f.formatMessage({
          id: `codexMobile.setupPage.waiting.pairing.loading`,
          defaultMessage: `Loading pairing code`,
          description: `Accessible label for the loading indicator shown while a remote-control pairing code is requested`,
        })),
        (t[17] = f),
        (t[18] = e));
    let n;
    (t[19] === e ? (n = t[20]) : ((n = (0, Z.jsx)(ni, { ariaLabel: e })), (t[19] = e), (t[20] = n)), (B = n));
  } else if (S === `phone` && A) {
    let e = D?.pairingCode,
      n;
    (t[21] !== z || t[22] !== L || t[23] !== h || t[24] !== u || t[25] !== e
      ? ((n = (0, Z.jsx)(Sr, { ariaLabel: L, centerLogoAriaLabel: z, pairingCode: e, platform: h, size: u })),
        (t[21] = z),
        (t[22] = L),
        (t[23] = h),
        (t[24] = u),
        (t[25] = e),
        (t[26] = n))
      : (n = t[26]),
      (B = n));
  } else if (S === `phone`) {
    let e;
    (t[27] === T.error
      ? (e = t[28])
      : ((e = (0, Z.jsx)(di, { error: T.error })), (t[27] = T.error), (t[28] = e)),
      (B = e));
  } else if (p) {
    let e;
    (t[29] !== O || t[30] !== T.error || t[31] !== u
      ? ((e = (0, Z.jsx)(ri, { error: T.error, manualPairingCode: O, size: u })),
        (t[29] = O),
        (t[30] = T.error),
        (t[31] = u),
        (t[32] = e))
      : (e = t[32]),
      (B = e));
  } else {
    let e;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(ii, {})), (t[33] = e))
      : (e = t[33]),
      (B = e));
  }
  let fe = u === `compact` && j && `min-h-[300px]`,
    pe = u !== `compact` && `mt-3`,
    he;
  t[34] !== fe || t[35] !== pe
    ? ((he = F(`flex w-full flex-col items-center gap-4`, fe, pe)), (t[34] = fe), (t[35] = pe), (t[36] = he))
    : (he = t[36]);
  let ge;
  t[37] !== f || t[38] !== N || t[39] !== S || t[40] !== j
    ? ((ge = j
        ? (0, Z.jsx)(`div`, {
            className: `w-full rounded-full bg-text/5 p-1`,
            children: (0, Z.jsx)(Ye, {
              buttonClassName: F(
                `!rounded-full !border-transparent !bg-transparent !py-1`,
                `!text-secondary`,
                `[&[aria-pressed=true]]:!bg-surface-elevated-secondary`,
                `[&[aria-pressed=true]]:!text-default`,
              ),
              ariaLabel: f.formatMessage({
                id: `codexMobile.setupDialog.waiting.deviceType`,
                defaultMessage: `Device type`,
                description: `Accessible label for choosing which device type the approval steps target`,
              }),
              options: [
                {
                  id: `phone`,
                  label: (0, Z.jsx)(d, {
                    id: `codexMobile.setupDialog.waiting.deviceType.phone`,
                    defaultMessage: `Phone`,
                    description: `Label for phone approval instructions`,
                  }),
                },
                {
                  id: `computer`,
                  label: (0, Z.jsx)(d, {
                    id: `codexMobile.setupDialog.waiting.deviceType.computer`,
                    defaultMessage: `Computer`,
                    description: `Label for computer approval instructions`,
                  }),
                },
              ],
              selectedId: S,
              onSelect: N,
              fullWidth: !0,
            }),
          })
        : null),
      (t[37] = f),
      (t[38] = N),
      (t[39] = S),
      (t[40] = j),
      (t[41] = ge))
    : (ge = t[41]);
  let V = u === `compact` ? `bg-transparent` : `bg-surface-secondary`,
    ve = te ? null : `justify-center`,
    ye =
      S === `computer`
        ? u === `compact`
          ? `min-h-[200px] gap-3 p-4`
          : `min-h-[300px] gap-5 p-7`
        : u === `compact`
          ? `min-h-[248px] gap-3 p-4`
          : `min-h-[360px] gap-5 p-7`,
    be;
  t[42] !== V || t[43] !== ve || t[44] !== ye
    ? ((be = F(
        `relative flex w-full flex-col items-center rounded-[24px] border border-border/70 text-center`,
        V,
        ve,
        ye,
      )),
      (t[42] = V),
      (t[43] = ve),
      (t[44] = ye),
      (t[45] = be))
    : (be = t[45]);
  let H;
  t[46] !== B || t[47] !== te
    ? ((H = te
        ? (0, Z.jsx)(`div`, { className: `flex flex-1 items-center justify-center`, children: B })
        : B),
      (t[46] = B),
      (t[47] = te),
      (t[48] = H))
    : (H = t[48]);
  let xe;
  t[49] !== f || t[50] !== h || t[51] !== te
    ? ((xe = te
        ? (0, Z.jsx)(ti, {
            ariaLabel: f.formatMessage({
              id: `codexMobile.setupPage.ready.phoneDeepLink.deviceType`,
              defaultMessage: `Phone type`,
              description: `Accessible label for choosing which animated Codex mobile QR code to show`,
            }),
            platform: h,
            onPlatformChange: g,
          })
        : null),
      (t[49] = f),
      (t[50] = h),
      (t[51] = te),
      (t[52] = xe))
    : (xe = t[52]);
  let U;
  t[53] !== A ||
  t[54] !== ue ||
  t[55] !== O ||
  t[56] !== T ||
  t[57] !== P ||
  t[58] !== S ||
  t[59] !== E ||
  t[60] !== se
    ? ((U = E
        ? (0, Z.jsxs)(`div`, {
            className: `absolute right-3 bottom-3 flex items-center gap-1`,
            children: [
              S === `computer` && O != null
                ? (0, Z.jsx)(Se, {
                    buttonText: ue,
                    iconClassName: `icon-xs`,
                    iconOnly: !0,
                    onCopy: (e) => {
                      me(O, e);
                    },
                  })
                : null,
              S === `phone` && A
                ? (0, Z.jsx)(_e, {
                    tooltipContent: se,
                    children: (0, Z.jsx)(n, {
                      "aria-label": se,
                      color: `ghost`,
                      onClick: () => v(!0),
                      size: `icon`,
                      children: (0, Z.jsx)(x, { "aria-hidden": !1, asset: oe }),
                    }),
                  })
                : null,
              (0, Z.jsx)(_e, {
                tooltipContent: P,
                children: (0, Z.jsx)(n, {
                  "aria-label": P,
                  color: `ghost`,
                  disabled: T.isFetching,
                  onClick: () => {
                    T.refetch();
                  },
                  size: `icon`,
                  children: (0, Z.jsx)(_t, { className: F(`icon-xs`, T.isFetching ? `animate-spin` : null) }),
                }),
              }),
            ],
          })
        : null),
      (t[53] = A),
      (t[54] = ue),
      (t[55] = O),
      (t[56] = T),
      (t[57] = P),
      (t[58] = S),
      (t[59] = E),
      (t[60] = se),
      (t[61] = U))
    : (U = t[61]);
  let W;
  t[62] !== be || t[63] !== H || t[64] !== xe || t[65] !== U
    ? ((W = (0, Z.jsxs)(`div`, { className: be, children: [H, xe, U] })),
      (t[62] = be),
      (t[63] = H),
      (t[64] = xe),
      (t[65] = U),
      (t[66] = W))
    : (W = t[66]);
  let Ce;
  t[67] === M ? (Ce = t[68]) : ((Ce = M ? (0, Z.jsx)(li, {}) : null), (t[67] = M), (t[68] = Ce));
  let G;
  t[69] !== z || t[70] !== f || t[71] !== _ || t[72] !== D || t[73] !== L || t[74] !== h
    ? ((G =
        D?.pairingCode == null
          ? null
          : (0, Z.jsxs)(de, {
              open: _,
              onOpenChange: v,
              contentClassName: `fixed inset-0 !left-0 !top-0 grid h-[100dvh] w-screen max-w-none !translate-x-0 !translate-y-0 place-items-center overflow-visible rounded-none bg-transparent p-0 shadow-none ring-0 backdrop-blur-none`,
              contentProps: {
                "aria-describedby": void 0,
                onClick: (e) => {
                  e.target === e.currentTarget && v(!1);
                },
              },
              dialogCloseClassName: `!top-4 !right-4 bg-black/20 text-white hover:bg-white/10`,
              dialogCloseLabel: f.formatMessage({
                id: `codexMobile.setupPage.waiting.pairing.closeFullscreenQrCode`,
                defaultMessage: `Close fullscreen QR code`,
                description: `Accessible label for closing the fullscreen remote-control pairing QR code`,
              }),
              overlayClassName: `!bg-black/75 backdrop-blur-sm`,
              unstyledContent: !0,
              viewportSized: !0,
              children: [
                (0, Z.jsx)(re, {
                  className: `sr-only`,
                  children: (0, Z.jsx)(d, {
                    id: `codexMobile.setupPage.waiting.pairing.fullscreenQrCodeTitle`,
                    defaultMessage: `Pairing QR code`,
                    description: `Title for the fullscreen remote-control pairing QR code dialog`,
                  }),
                }),
                (0, Z.jsx)(Sr, {
                  ariaLabel: L,
                  centerLogoAriaLabel: z,
                  fullscreen: !0,
                  pairingCode: D.pairingCode,
                  platform: h,
                }),
              ],
            })),
      (t[69] = z),
      (t[70] = f),
      (t[71] = _),
      (t[72] = D),
      (t[73] = L),
      (t[74] = h),
      (t[75] = G))
    : (G = t[75]);
  let Te;
  return (
    t[76] !== he || t[77] !== ge || t[78] !== W || t[79] !== Ce || t[80] !== G
      ? ((Te = (0, Z.jsxs)(`div`, { className: he, children: [ge, W, Ce, G] })),
        (t[76] = he),
        (t[77] = ge),
        (t[78] = W),
        (t[79] = Ce),
        (t[80] = G),
        (t[81] = Te))
      : (Te = t[81]),
    Te
  );
}
function ei() {
  return crypto.randomUUID();
}
function ti(e) {
  let t = (0, fi.c)(22),
    { ariaLabel: n, onPlatformChange: r, platform: i } = e,
    a = i === `ios`,
    o = i === `ios` ? `text-default` : `text-tertiary`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = F(
        `cursor-interaction rounded px-1 outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        o,
      )),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === r ? (c = t[3]) : ((c = () => r(`ios`)), (t[2] = r), (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(d, {
        id: `codexMobile.setupPage.waiting.phoneDeepLink.deviceType.ios`,
        defaultMessage: `iPhone`,
        description: `Label for the iPhone Codex mobile QR code option`,
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== a || t[6] !== s || t[7] !== c
    ? ((u = (0, Z.jsx)(`button`, {
        "aria-pressed": a,
        className: s,
        onClick: c,
        type: `button`,
        children: l,
      })),
      (t[5] = a),
      (t[6] = s),
      (t[7] = c),
      (t[8] = u))
    : (u = t[8]);
  let f = i === `android`,
    p = i === `android` ? `text-default` : `text-tertiary`,
    m;
  t[9] === p
    ? (m = t[10])
    : ((m = F(
        `cursor-interaction rounded px-1 outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        p,
      )),
      (t[9] = p),
      (t[10] = m));
  let h;
  t[11] === r ? (h = t[12]) : ((h = () => r(`android`)), (t[11] = r), (t[12] = h));
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(d, {
        id: `codexMobile.setupPage.waiting.phoneDeepLink.deviceType.android`,
        defaultMessage: `Android`,
        description: `Label for the Android Codex mobile QR code option`,
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== h || t[15] !== f || t[16] !== m
    ? ((_ = (0, Z.jsx)(`button`, {
        "aria-pressed": f,
        className: m,
        onClick: h,
        type: `button`,
        children: g,
      })),
      (t[14] = h),
      (t[15] = f),
      (t[16] = m),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  return (
    t[18] !== n || t[19] !== _ || t[20] !== u
      ? ((v = (0, Z.jsxs)(`div`, {
          "aria-label": n,
          className: `flex items-center justify-center gap-2 text-base font-medium`,
          role: `group`,
          children: [u, _],
        })),
        (t[18] = n),
        (t[19] = _),
        (t[20] = u),
        (t[21] = v))
      : (v = t[21]),
    v
  );
}
function ni(e) {
  let t = (0, fi.c)(3),
    { ariaLabel: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(pe, { className: `size-7 text-secondary` })), (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Z.jsx)(`div`, {
          "aria-label": n,
          className: `grid place-items-center`,
          role: `status`,
          children: r,
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function ri(e) {
  let t = (0, fi.c)(4),
    { error: n, manualPairingCode: r, size: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, Z.jsx)(Z.Fragment, {
          children:
            r == null
              ? (0, Z.jsx)(di, { error: n })
              : (0, Z.jsx)(`div`, {
                  className: F(
                    `cursor-text font-semibold tracking-[0.18em] text-default lining-nums tabular-nums select-text [font-feature-settings:'cv08'_on]`,
                    i === `compact` ? `text-2xl` : `text-3xl`,
                  ),
                  children: r,
                }),
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function ii() {
  let e = (0, fi.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Z.jsx)(ci, {
        index: 1,
        children: (0, Z.jsx)(d, {
          id: `codexMobile.setupDialog.waiting.computer.step.openDesktopApp`,
          defaultMessage: `Open the <strong>ChatGPT desktop app</strong> on the computer you want to authorize`,
          description: `First computer approval instruction for adding another device`,
          values: { strong: si },
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Z.jsx)(ci, {
        index: 2,
        children: (0, Z.jsx)(d, {
          id: `codexMobile.setupDialog.waiting.computer.step.settingsConnections`,
          defaultMessage: `Go to <strong>Connections</strong> tab in settings`,
          description: `Second computer approval instruction for adding another device`,
          values: { strong: oi },
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsxs)(`div`, {
          className: `flex w-full flex-col gap-3`,
          children: [
            t,
            n,
            (0, Z.jsx)(ci, {
              index: 3,
              children: (0, Z.jsx)(d, {
                id: `codexMobile.setupDialog.waiting.computer.step.allow`,
                defaultMessage: `Click <strong>Set up</strong> in the <strong>Control other devices</strong> tab`,
                description: `Third computer approval instruction for adding another device`,
                values: { strong: ai },
              }),
            }),
          ],
        })),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function ai(e) {
  return (0, Z.jsx)(`span`, { className: `font-semibold text-default`, children: e });
}
function oi(e) {
  return (0, Z.jsx)(`span`, { className: `font-semibold text-default`, children: e });
}
function si(e) {
  return (0, Z.jsx)(`span`, { className: `font-semibold text-default`, children: e });
}
function ci(e) {
  let t = (0, fi.c)(7),
    { children: n, index: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Z.jsx)(`span`, {
        className: `inline-flex size-6 shrink-0 translate-y-[1px] items-center justify-center rounded-full bg-text/70 text-base leading-normal tracking-normal text-inverse`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, Z.jsx)(`div`, {
        className: `text-start text-base leading-normal tracking-normal text-secondary`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Z.jsxs)(`div`, {
          className: `flex items-baseline gap-4 px-[10px] py-2`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function li() {
  let e = (0, fi.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(`div`, {
          className: `w-full px-2 text-center text-sm leading-normal text-secondary`,
          children: (0, Z.jsx)(d, {
            id: `codexMobile.setupPage.waiting.computerPairingCode.caption`,
            defaultMessage: `Click <strong>Add</strong> in the <strong>Settings > Connections > Control other devices</strong> tab on your other computer and enter this code`,
            description: `Caption shown below the remote-control manual pairing code`,
            values: { strong: ui },
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ui(e) {
  return (0, Z.jsx)(`strong`, { className: `font-semibold text-default`, children: e });
}
function di(e) {
  let t = (0, fi.c)(2),
    { error: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`div`, {
          className: `text-sm leading-normal text-secondary`,
          role: `alert`,
          children:
            n == null
              ? (0, Z.jsx)(d, {
                  id: `codexMobile.setupPage.waiting.pairing.unavailable`,
                  defaultMessage: `Pairing code unavailable`,
                  description: `Message shown when the remote-control pairing code cannot be loaded`,
                })
              : (0, Z.jsx)(d, {
                  id: `codexMobile.setupPage.waiting.pairing.unavailableWithError`,
                  defaultMessage: `Pairing code unavailable: {error}`,
                  description: `Message shown when the remote-control pairing code cannot be loaded, including the app-server error detail`,
                  values: { error: n.message },
                }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var fi, pi, Z;
function mi() {
  return (mi = e(() => {
    ((fi = H()),
      ae(),
      N(),
      E(),
      (pi = W()),
      R(),
      V(),
      ie(),
      be(),
      C(),
      qe(),
      se(),
      P(),
      et(),
      ft(),
      nt(),
      ce(),
      ze(),
      Qr(),
      (Z = U()));
  }))();
}
function hi(e) {
  let t = (0, Si.c)(34),
    { onSkip: r, onStartSetup: i, showStartSetupError: a, setupInProgress: o, variant: s } = e,
    { platform: c } = rt(),
    l;
  t[0] !== c || t[1] !== s ? ((l = bi(s, c)), (t[0] = c), (t[1] = s), (t[2] = l)) : (l = t[2]);
  let u = l,
    f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(d, {
        id: `codexMobile.setupDialog.initial.description`,
        defaultMessage: `Continue chats from the ChatGPT desktop app on your phone or another device`,
        description: `Description for the Codex mobile setup dialog`,
      })),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] === s ? (p = t[5]) : ((p = (0, Q.jsx)(yi, { variant: s })), (t[4] = s), (t[5] = p));
  let m = s === `page` && `w-full max-w-[400px]`,
    h;
  t[6] === m
    ? (h = t[7])
    : ((h = F(`flex flex-wrap items-center justify-center gap-3`, m)), (t[6] = m), (t[7] = h));
  let g;
  t[8] !== r || t[9] !== o || t[10] !== s
    ? ((g =
        s === `dialog`
          ? (0, Q.jsx)(n, {
              color: `secondary`,
              onClick: r,
              size: `large`,
              className: `justify-center`,
              disabled: o,
              children: (0, Q.jsx)(d, {
                id: `codexMobile.setupDialog.initial.skip`,
                defaultMessage: `Later`,
                description: `Secondary action for the Codex mobile setup dialog`,
              }),
            })
          : null),
      (t[8] = r),
      (t[9] = o),
      (t[10] = s),
      (t[11] = g))
    : (g = t[11]);
  let _ = s === `page` && `w-full`,
    v;
  t[12] === _ ? (v = t[13]) : ((v = F(`justify-center`, _)), (t[12] = _), (t[13] = v));
  let y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(d, {
        id: `codexMobile.setupDialog.initial.primary`,
        defaultMessage: `Get started`,
        description: `Primary action for the Codex mobile setup dialog`,
      })),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] !== i || t[16] !== o || t[17] !== v
    ? ((b = (0, Q.jsx)(n, { onClick: i, size: `large`, className: v, loading: o, children: y })),
      (t[15] = i),
      (t[16] = o),
      (t[17] = v),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] !== b || t[20] !== h || t[21] !== g
    ? ((x = (0, Q.jsxs)(`div`, { className: h, children: [g, b] })),
      (t[19] = b),
      (t[20] = h),
      (t[21] = g),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] === s
    ? (S = t[24])
    : ((S =
        s === `page`
          ? (0, Q.jsx)(`div`, {
              className: `w-full max-w-[400px] text-center text-xs leading-normal text-codex-description`,
              children: (0, Q.jsx)(d, {
                id: `codexMobile.setupPage.initial.securityNotice`,
                defaultMessage: `ChatGPT can access your desktop—including files, apps, and your browser—to complete tasks you send from your phone. This can introduce security risks. Only connect devices that you own and trust.`,
                description: `Security notice shown on the Codex mobile setup page`,
              }),
            })
          : null),
      (t[23] = s),
      (t[24] = S));
  let C;
  t[25] === a
    ? (C = t[26])
    : ((C = a
        ? (0, Q.jsx)(`div`, {
            className: `text-sm text-danger`,
            children: (0, Q.jsx)(d, {
              id: `codexMobile.setupDialog.initial.startSetupError`,
              defaultMessage: `Couldn’t check security requirements. Try again`,
              description: `Error shown when Codex mobile setup cannot check the MFA requirement`,
            }),
          })
        : null),
      (t[25] = a),
      (t[26] = C));
  let w;
  return (
    t[27] !== u || t[28] !== x || t[29] !== S || t[30] !== C || t[31] !== p || t[32] !== s
      ? ((w = (0, Q.jsxs)(qt, { variant: s, heading: u, description: f, children: [p, x, S, C] })),
        (t[27] = u),
        (t[28] = x),
        (t[29] = S),
        (t[30] = C),
        (t[31] = p),
        (t[32] = s),
        (t[33] = w))
      : (w = t[33]),
    w
  );
}
function gi(e) {
  let t = (0, Si.c)(12),
    { onAllowHost: r, setupInProgress: i, showAllowHostError: a, variant: o } = e,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(d, {
        id: `codexMobile.setupDialog.allowHost.heading`,
        defaultMessage: `Allow devices to control this computer?`,
        description: `Heading for the Codex mobile allow host dialog state`,
      })),
      (c = (0, Q.jsx)(d, {
        id: `codexMobile.setupDialog.allowHost.description`,
        defaultMessage: `This lets authorized devices, such as your phone, connect to ChatGPT and control this computer remotely`,
        description: `Description for the Codex mobile allow host dialog state`,
      })),
      (t[0] = s),
      (t[1] = c))
    : ((s = t[0]), (c = t[1]));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(d, {
        id: `codexMobile.setupDialog.allowHost.primary`,
        defaultMessage: `Allow`,
        description: `Primary action for the Codex mobile allow host dialog state`,
      })),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== r || t[4] !== i
    ? ((u = (0, Q.jsx)(n, {
        size: `large`,
        className: `justify-center`,
        loading: i,
        onClick: r,
        children: l,
      })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = u))
    : (u = t[5]);
  let f;
  t[6] === a
    ? (f = t[7])
    : ((f = a
        ? (0, Q.jsx)(`div`, {
            className: `text-sm text-danger`,
            children: (0, Q.jsx)(d, {
              id: `codexMobile.setupDialog.allowHost.error`,
              defaultMessage: `Couldn’t enable remote control. Try again`,
              description: `Error shown when Codex mobile setup cannot enable remote control`,
            }),
          })
        : null),
      (t[6] = a),
      (t[7] = f));
  let p;
  return (
    t[8] !== u || t[9] !== f || t[10] !== o
      ? ((p = (0, Q.jsxs)(qt, { variant: o, heading: s, description: c, children: [u, f] })),
        (t[8] = u),
        (t[9] = f),
        (t[10] = o),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function _i(e) {
  let t = (0, Si.c)(8),
    { onContinueOnChatGPT: r, variant: i } = e,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(d, {
        id: `codexMobile.setupDialog.mfaRequired.heading`,
        defaultMessage: `Turn on Multi-Factor Authentication`,
        description: `Heading for the Codex mobile MFA required dialog state`,
      })),
      (o = (0, Q.jsx)(d, {
        id: `codexMobile.setupDialog.mfaRequired.description`,
        defaultMessage: `To enable this feature, you’ll need to turn on Multi-Factor Authentication for your ChatGPT account`,
        description: `Description for the Codex mobile MFA required dialog state`,
      })),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(d, {
        id: `codexMobile.setupDialog.mfaRequired.primary`,
        defaultMessage: `Continue on chatgpt.com`,
        description: `Primary action for the Codex mobile MFA required dialog state`,
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r
    ? (c = t[4])
    : ((c = (0, Q.jsx)(n, { size: `large`, className: `justify-center`, onClick: r, children: s })),
      (t[3] = r),
      (t[4] = c));
  let l;
  return (
    t[5] !== c || t[6] !== i
      ? ((l = (0, Q.jsx)(qt, { variant: i, heading: a, description: o, children: c })),
        (t[5] = c),
        (t[6] = i),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function vi(e) {
  let t = (0, Si.c)(5),
    { onManageConnections: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(d, {
        id: `codexMobile.setupPage.ready.remoteHeading`,
        defaultMessage: `Remote`,
        description: `Heading for the Remote page shown after setup has already completed`,
      })),
      (i = (0, Q.jsx)(d, {
        id: `codexMobile.setupPage.ready.description`,
        defaultMessage: `Scan QR code to set up a new phone or manage existing connections`,
        description: `Description for the Codex mobile page shown after setup has already completed`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)($r, { showDeviceTypeSelector: !1 })), (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, Q.jsx)(qt, {
          variant: `page`,
          heading: r,
          description: i,
          children: (0, Q.jsxs)(`div`, {
            className: `flex w-full max-w-[460px] flex-col items-center gap-6`,
            children: [a, (0, Q.jsx)(tn, { onManageConnections: n })],
          }),
        })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
function yi(e) {
  let t = (0, Si.c)(7),
    { variant: n } = e,
    r =
      n === `dialog`
        ? `w-[380px] gap-4`
        : `w-full max-w-[400px] divide-y-[0.5px] divide-border overflow-hidden rounded-2xl border border-default`,
    a;
  t[0] === r ? (a = t[1]) : ((a = F(`flex flex-col`, r)), (t[0] = r), (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(xi, {
        icon: (0, Q.jsx)(x, { asset: i }),
        title: (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.feature.threads.title`,
          defaultMessage: `Pick up where you left off`,
          description: `Title for the first Codex mobile feature in the setup dialog`,
        }),
        children: (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.feature.threads.description`,
          defaultMessage: `Continue any chat or project from the ChatGPT desktop app`,
          description: `Description for the first Codex mobile feature in the setup dialog`,
        }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(xi, {
        icon: (0, Q.jsx)(it, { "aria-hidden": !0, className: `size-5` }),
        title: (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.feature.notifications.title`,
          defaultMessage: `Stay in the loop`,
          description: `Title for the second Codex mobile feature in the setup dialog`,
        }),
        children: (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.feature.notifications.description`,
          defaultMessage: `Get notified when ChatGPT finishes a task or needs your attention`,
          description: `Description for the second Codex mobile feature in the setup dialog`,
        }),
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(xi, {
        icon: (0, Q.jsx)(ot, { "aria-hidden": !0, className: `size-5` }),
        title: (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.feature.actions.title`,
          defaultMessage: `Start something new`,
          description: `Title for the third Codex mobile feature in the setup dialog`,
        }),
        children: (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.feature.actions.description`,
          defaultMessage: `Just send a message to start a chat on your desktop`,
          description: `Description for the third Codex mobile feature in the setup dialog`,
        }),
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] === a
      ? (l = t[6])
      : ((l = (0, Q.jsxs)(`div`, { className: a, children: [o, s, c] })), (t[5] = a), (t[6] = l)),
    l
  );
}
function bi(e, t) {
  return e === `dialog`
    ? t === `macOS`
      ? (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.heading.desktop`,
          defaultMessage: `Connect a device to this Mac`,
          description: `Heading for the Codex mobile setup dialog on macOS`,
        })
      : (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.heading.windows`,
          defaultMessage: `Connect a device to this PC`,
          description: `Heading for the Codex mobile setup dialog on Windows or Linux`,
        })
    : t === `macOS`
      ? (0, Q.jsx)(d, {
          id: `codexMobile.setupDialog.initial.heading`,
          defaultMessage: `Connect your phone to this Mac`,
          description: `Heading for the Codex mobile setup page on macOS`,
        })
      : (0, Q.jsx)(d, {
          id: `codexMobile.setupPage.initial.heading.windows`,
          defaultMessage: `Connect your phone to this PC`,
          description: `Heading for the Codex mobile setup page on Windows or Linux`,
        });
}
function xi(e) {
  let t = (0, Si.c)(12),
    { children: n, icon: r, title: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (0, Q.jsx)(`div`, {
        className: `flex h-8 w-8 shrink-0 items-center justify-center text-default`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o = (0, Q.jsx)(`div`, {
        className: `text-base leading-normal tracking-normal text-default`,
        children: i,
      })),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] === n
    ? (s = t[5])
    : ((s = (0, Q.jsx)(`div`, {
        className: `text-sm leading-normal tracking-normal text-codex-description`,
        children: n,
      })),
      (t[4] = n),
      (t[5] = s));
  let c;
  t[6] !== o || t[7] !== s
    ? ((c = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1 text-start`,
        children: [o, s],
      })),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== a || t[10] !== c
      ? ((l = (0, Q.jsxs)(`div`, { className: `flex items-center gap-4 px-[14px] py-2`, children: [a, c] })),
        (t[9] = a),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
var Si, Q;
function Ci() {
  return (Ci = e(() => {
    ((Si = H()), ue(), N(), R(), V(), C(), G(), mt(), at(), Xt(), rn(), mi(), (Q = U()));
  }))();
}
function wi(e) {
  let t = (0, Ti.c)(16),
    { approvalDeviceMode: n, heading: r, hostId: i, onApprovalDeviceModeChange: a, variant: o } = e,
    s = i === void 0 ? I : i,
    { platform: c } = rt(),
    l;
  t[0] !== r || t[1] !== c
    ? ((l =
        r ??
        (c === `macOS`
          ? (0, Ei.jsx)(d, {
              id: `codexMobile.setupDialog.waiting.heading.mac`,
              defaultMessage: `Approve on your device to control this Mac remotely`,
              description: `Heading for the Codex mobile setup waiting state on macOS`,
            })
          : (0, Ei.jsx)(d, {
              id: `codexMobile.setupDialog.waiting.heading.pc`,
              defaultMessage: `Approve on your device to control this computer remotely`,
              description: `Heading for the Codex mobile setup waiting state on non-macOS platforms`,
            }))),
      (t[0] = r),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = l;
  if (o === `page`) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Ei.jsx)(d, {
          id: `codexMobile.setupPage.waiting.phoneDeepLink.caption`,
          defaultMessage: `Scan to continue setup in ChatGPT`,
          description: `Caption shown below the Codex mobile deep link QR code`,
        })),
        (t[3] = e))
      : (e = t[3]);
    let n;
    t[4] === s
      ? (n = t[5])
      : ((n = (0, Ei.jsx)(`div`, {
          className: `flex w-full max-w-[460px] flex-col items-center gap-6`,
          children: (0, Ei.jsx)($r, { hostId: s, showDeviceTypeSelector: !1 }),
        })),
        (t[4] = s),
        (t[5] = n));
    let r;
    return (
      t[6] !== u || t[7] !== n
        ? ((r = (0, Ei.jsx)(qt, { variant: `page`, heading: u, description: e, children: n })),
          (t[6] = u),
          (t[7] = n),
          (t[8] = r))
        : (r = t[8]),
      r
    );
  }
  let f;
  t[9] !== n || t[10] !== s || t[11] !== a
    ? ((f = (0, Ei.jsx)(`div`, {
        className: `flex w-full justify-center`,
        children: (0, Ei.jsx)($r, { deviceType: n, hostId: s, onDeviceTypeChange: a, size: `compact` }),
      })),
      (t[9] = n),
      (t[10] = s),
      (t[11] = a),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== u || t[14] !== f
      ? ((p = (0, Ei.jsx)(qt, { variant: `dialog`, heading: u, children: f })),
        (t[13] = u),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
var Ti, Ei;
function Di() {
  return (Di = e(() => {
    ((Ti = H()), R(), G(), ft(), Xt(), mi(), (Ei = U()));
  }))();
}
function Oi(e) {
  let t = (0, Pi.c)(31),
    {
      hostId: n,
      onAllowHost: r,
      onContinueOnChatGPT: i,
      onFinishSetup: a,
      onManageConnections: o,
      onSkip: s,
      onStartSetup: c,
      setupInProgress: l,
      showAllowHostError: u,
      showStartSetupError: d,
      step: f,
      variant: p,
      waitingHeading: m,
    } = e,
    h = u !== void 0 && u,
    [g, _] = (0, Fi.useState)(`phone`),
    v;
  t[0] !== g ||
  t[1] !== n ||
  t[2] !== r ||
  t[3] !== i ||
  t[4] !== a ||
  t[5] !== o ||
  t[6] !== s ||
  t[7] !== c ||
  t[8] !== l ||
  t[9] !== h ||
  t[10] !== d ||
  t[11] !== f ||
  t[12] !== p ||
  t[13] !== m
    ? ((v = (0, $.jsx)(Ai, {
        approvalDeviceMode: g,
        hostId: n,
        onAllowHost: r,
        onApprovalDeviceModeChange: _,
        onContinueOnChatGPT: i,
        onFinishSetup: a,
        onManageConnections: o,
        onSkip: s,
        onStartSetup: c,
        setupInProgress: l,
        showAllowHostError: h,
        showStartSetupError: d,
        step: f,
        variant: p,
        waitingHeading: m,
      })),
      (t[0] = g),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = h),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = v))
    : (v = t[14]);
  let y = v;
  if (p === `dialog`) {
    let e;
    t[15] !== g || t[16] !== f ? ((e = ji(f, g)), (t[15] = g), (t[16] = f), (t[17] = e)) : (e = t[17]);
    let n;
    t[18] === e ? (n = t[19]) : ((n = (0, $.jsx)(en, { artworkSrc: e })), (t[18] = e), (t[19] = n));
    let r;
    return (
      t[20] !== y || t[21] !== n
        ? ((r = (0, $.jsxs)(`div`, {
            className: `pointer-events-auto flex w-full flex-col overflow-hidden`,
            children: [n, y],
          })),
          (t[20] = y),
          (t[21] = n),
          (t[22] = r))
        : (r = t[22]),
      r
    );
  }
  let b;
  t[23] === f ? (b = t[24]) : ((b = Ni(f)), (t[23] = f), (t[24] = b));
  let x;
  t[25] === f ? (x = t[26]) : ((x = Mi(f)), (t[25] = f), (t[26] = x));
  let S;
  return (
    t[27] !== y || t[28] !== b || t[29] !== x
      ? ((S = (0, $.jsx)($t, { artworkAlignment: b, artworkSrc: x, children: y })),
        (t[27] = y),
        (t[28] = b),
        (t[29] = x),
        (t[30] = S))
      : (S = t[30]),
    S
  );
}
function ki(e) {
  let t = (0, Pi.c)(2),
    { onManageConnections: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)($t, { children: (0, $.jsx)(vi, { onManageConnections: n }) })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ai(e) {
  let t = (0, Pi.c)(24),
    {
      approvalDeviceMode: n,
      hostId: r,
      onAllowHost: i,
      onApprovalDeviceModeChange: a,
      onContinueOnChatGPT: o,
      onFinishSetup: s,
      onManageConnections: c,
      onSkip: l,
      onStartSetup: u,
      setupInProgress: d,
      showAllowHostError: f,
      showStartSetupError: p,
      step: m,
      variant: h,
      waitingHeading: g,
    } = e;
  switch (m) {
    case `allow-host`: {
      let e;
      return (
        t[0] !== i || t[1] !== d || t[2] !== f || t[3] !== h
          ? ((e = (0, $.jsx)(gi, { onAllowHost: i, setupInProgress: d, showAllowHostError: f, variant: h })),
            (t[0] = i),
            (t[1] = d),
            (t[2] = f),
            (t[3] = h),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `connected`: {
      let e;
      return (
        t[5] !== s || t[6] !== c || t[7] !== h
          ? ((e = (0, $.jsx)(fn, { onFinishSetup: s, onManageConnections: c, variant: h })),
            (t[5] = s),
            (t[6] = c),
            (t[7] = h),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `initial`: {
      let e;
      return (
        t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== p || t[13] !== h
          ? ((e = (0, $.jsx)(hi, {
              onSkip: l,
              onStartSetup: u,
              showStartSetupError: p,
              setupInProgress: d,
              variant: h,
            })),
            (t[9] = l),
            (t[10] = u),
            (t[11] = d),
            (t[12] = p),
            (t[13] = h),
            (t[14] = e))
          : (e = t[14]),
        e
      );
    }
    case `mfa-required`: {
      let e;
      return (
        t[15] !== o || t[16] !== h
          ? ((e = (0, $.jsx)(_i, { onContinueOnChatGPT: o, variant: h })),
            (t[15] = o),
            (t[16] = h),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case `waiting`: {
      let e;
      return (
        t[18] !== n || t[19] !== r || t[20] !== a || t[21] !== h || t[22] !== g
          ? ((e = (0, $.jsx)(wi, {
              approvalDeviceMode: n,
              heading: g,
              hostId: r,
              onApprovalDeviceModeChange: a,
              variant: h,
            })),
            (t[18] = n),
            (t[19] = r),
            (t[20] = a),
            (t[21] = h),
            (t[22] = g),
            (t[23] = e))
          : (e = t[23]),
        e
      );
    }
  }
}
function ji(e, t) {
  switch (e) {
    case `allow-host`:
      return Dt;
    case `connected`:
      return kt;
    case `initial`:
      return jt;
    case `mfa-required`:
      return Nt;
    case `waiting`:
      return t === `phone` ? Lt : Ft;
  }
}
function Mi(e) {
  switch (e) {
    case `allow-host`:
      return zt;
    case `connected`:
    case `initial`:
      return Gt;
    case `mfa-required`:
      return Vt;
    case `waiting`:
      return Ut;
  }
}
function Ni(e) {
  switch (e) {
    case `allow-host`:
      return `bottom-right`;
    case `mfa-required`:
      return `right`;
    case `connected`:
    case `initial`:
    case `waiting`:
      return `center`;
  }
}
var Pi, Fi, $;
function Ii() {
  return (Ii = e(() => {
    ((Pi = H()),
      (Fi = W()),
      Ot(),
      At(),
      Mt(),
      Pt(),
      It(),
      Rt(),
      Bt(),
      Ht(),
      Wt(),
      Kt(),
      gn(),
      Ci(),
      rn(),
      Di(),
      ($ = U()));
  }))();
}
function Li(e) {
  let t = (0, zi.c)(31),
    {
      hostId: n,
      onAllowHost: r,
      onOpenChange: i,
      onSkip: a,
      onStartSetup: s,
      open: c,
      showAllowHostError: l,
      showStartSetupError: d,
      setupInProgress: f,
      step: p,
      waitingHeading: h,
    } = e,
    g = l !== void 0 && l,
    _ = m(o),
    v = ee(),
    { platform: y } = rt(),
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { "aria-describedby": void 0 }), (t[0] = b))
    : (b = t[0]);
  let x;
  t[1] !== v || t[2] !== y || t[3] !== p
    ? ((x = Ri(v, y, p)), (t[1] = v), (t[2] = y), (t[3] = p), (t[4] = x))
    : (x = t[4]);
  let S;
  t[5] === x
    ? (S = t[6])
    : ((S = (0, Bi.jsx)(re, { className: `sr-only`, children: x })), (t[5] = x), (t[6] = S));
  let C;
  t[7] !== _ || t[8] !== p
    ? ((C = (e) => {
        (Fe(_, u, { action: `continue_on_chatgpt`, step: p, surface: `dialog` }),
          Ge({
            event: e,
            href: `https://chatgpt.com/#settings/Security?mfa_source=codex_remote`,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          }));
      }),
      (t[7] = _),
      (t[8] = p),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] !== i || t[11] !== _ || t[12] !== p
    ? ((w = () => {
        (Fe(_, u, { action: `finish_setup`, step: p, surface: `dialog` }), i(!1));
      }),
      (t[10] = i),
      (t[11] = _),
      (t[12] = p),
      (t[13] = w))
    : (w = t[13]);
  let T;
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== a ||
  t[17] !== s ||
  t[18] !== f ||
  t[19] !== g ||
  t[20] !== d ||
  t[21] !== p ||
  t[22] !== C ||
  t[23] !== w ||
  t[24] !== h
    ? ((T = (0, Bi.jsx)(Oi, {
        hostId: n,
        onAllowHost: r,
        onContinueOnChatGPT: C,
        onFinishSetup: w,
        onSkip: a,
        onStartSetup: s,
        setupInProgress: f,
        showAllowHostError: g,
        showStartSetupError: d,
        step: p,
        variant: `dialog`,
        waitingHeading: h,
      })),
      (t[14] = n),
      (t[15] = r),
      (t[16] = a),
      (t[17] = s),
      (t[18] = f),
      (t[19] = g),
      (t[20] = d),
      (t[21] = p),
      (t[22] = C),
      (t[23] = w),
      (t[24] = h),
      (t[25] = T))
    : (T = t[25]);
  let E;
  return (
    t[26] !== i || t[27] !== c || t[28] !== S || t[29] !== T
      ? ((E = (0, Bi.jsxs)(de, {
          open: c,
          onOpenChange: i,
          contentProps: b,
          contentClassName: `max-h-[calc(100vh-32px)] overflow-y-auto`,
          size: `compact`,
          children: [S, T],
        })),
        (t[26] = i),
        (t[27] = c),
        (t[28] = S),
        (t[29] = T),
        (t[30] = E))
      : (E = t[30]),
    E
  );
}
function Ri(e, t, n) {
  switch (n) {
    case `allow-host`:
      return e.formatMessage({
        id: `codexMobile.setupDialog.allowHost.title`,
        defaultMessage: `Allow devices to control this computer?`,
        description: `Title for the Codex mobile allow host dialog state`,
      });
    case `connected`:
      return e.formatMessage({
        id: `codexMobile.setupDialog.connected.title`,
        defaultMessage: `You’re connected`,
        description: `Title for the Codex mobile setup dialog connected state`,
      });
    case `initial`:
      return t === `macOS`
        ? e.formatMessage({
            id: `codexMobile.setupDialog.initial.title.desktop`,
            defaultMessage: `Connect a device to this Mac`,
            description: `Title for the Codex mobile setup dialog on macOS`,
          })
        : e.formatMessage({
            id: `codexMobile.setupDialog.initial.title.windows`,
            defaultMessage: `Connect a device to this PC`,
            description: `Title for the Codex mobile setup dialog on Windows or Linux`,
          });
    case `mfa-required`:
      return e.formatMessage({
        id: `codexMobile.setupDialog.mfaRequired.title`,
        defaultMessage: `Turn on Multi-Factor Authentication`,
        description: `Title for the Codex mobile MFA required dialog state`,
      });
    case `waiting`:
      return e.formatMessage({
        id: `codexMobile.setupDialog.waiting.title`,
        defaultMessage: `Approve on your device`,
        description: `Title for the Codex mobile setup dialog waiting state`,
      });
  }
}
var zi, Bi;
function Vi() {
  return (Vi = e(() => {
    ((zi = H()), k(), E(), R(), be(), je(), G(), We(), xe(), Ii(), (Bi = U()));
  }))();
}
export { Ii as a, Tt as c, Oi as i, Et as l, Vi as n, yi as o, ki as r, Ci as s, Li as t };
//# sourceMappingURL=codex-mobile-setup-dialog-f9d566940f74.js.map
