import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  $Kt as r,
  A3t as i,
  AMt as a,
  Amn as o,
  Aw as s,
  B6t as c,
  BS as l,
  Bb as u,
  C1 as d,
  Cpn as f,
  DJt as p,
  Di as m,
  Dqt as h,
  E0 as g,
  EJt as _,
  F3t as v,
  Fd as y,
  Fft as b,
  GK as x,
  Hu as S,
  Id as C,
  Ien as w,
  Ift as T,
  JG as E,
  JK as D,
  JS as O,
  Jit as k,
  Jrt as A,
  KG as j,
  KK as M,
  KO as N,
  Kit as ee,
  M8t as P,
  Ms as F,
  N3t as I,
  O3t as L,
  OL as R,
  Oi as te,
  Opn as ne,
  Ow as re,
  Ps as ie,
  QG as z,
  QKt as ae,
  QV as oe,
  QXt as se,
  Qu as B,
  RS as ce,
  RWt as le,
  Rit as ue,
  Rpn as V,
  Rqt as H,
  Spn as U,
  T1 as de,
  UO as fe,
  VS as W,
  Ven as G,
  Vu as pe,
  XS as K,
  Xrt as me,
  Xu as he,
  YKt as ge,
  Yrt as _e,
  ZG as ve,
  ZV as ye,
  Zrt as be,
  Zu as xe,
  a3t as Se,
  bpn as q,
  bqt as Ce,
  cpt as we,
  cz as Te,
  dit as Ee,
  dz as De,
  eit as Oe,
  fit as ke,
  fz as Ae,
  gMt as je,
  hMt as Me,
  hmn as Ne,
  hz as Pe,
  i6t as Fe,
  iH as Ie,
  iit as Le,
  jXt as Re,
  kL as ze,
  kMt as J,
  kXt as Be,
  kmn as Ve,
  lz as He,
  mz as Ue,
  mzt as We,
  nZt as Ge,
  o3t as Ke,
  pzt as qe,
  qK as Je,
  qKt as Ye,
  qu as Xe,
  rH as Ze,
  rit as Qe,
  spt as $e,
  sz as et,
  tit as tt,
  uz as nt,
  vit as rt,
  w0 as it,
  xpn as at,
  yit as ot,
  zb as st,
  zit as ct,
  znn as lt,
  zpn as ut,
} from "./app-initial-f094ef01c64d.js";
import { Bw as dt, HC as ft, VC as pt, zw as mt } from "./app-primary-4c40d73a1074.js";
import { n as ht, t as gt } from "./color-icon-f67e1ba0765e.js";
import { a as _t, n as vt } from "./computer-history-query-5e050ffaae9e.js";
import { n as yt, t as bt } from "./computer-use-native-app-metadata-ce3a8605f5bd.js";
import { n as xt, r as St, t as Ct } from "./computer-history-suggestion-prompt-2b08a74743d6.js";
import {
  T as wt,
  _ as Tt,
  b as Et,
  c as Dt,
  d as Ot,
  f as kt,
  g as At,
  h as jt,
  l as Mt,
  m as Nt,
  n as Pt,
  o as Ft,
  p as It,
  r as Lt,
  s as Rt,
  t as zt,
  u as Bt,
  v as Vt,
  w as Ht,
  x as Ut,
  y as Wt,
} from "./memory-settings-analytics-4ae383b0618d.js";
function Gt(e) {
  let t = (0, Kt.c)(25),
    { open: n, onOpenChange: r, onAllowAllApps: i, onCustomizeApps: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = (e) => {
        (e.preventDefault(), a());
      }),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(be, {
        children: (0, Y.jsx)(me, {
          title: (0, Y.jsx)(Qe, {
            asChild: !0,
            children: (0, Y.jsx)(`h2`, {
              children: (0, Y.jsx)(f, {
                id: `settings.chronicle.consent.title`,
                defaultMessage: `You're in control.`,
                description: `Title of the Computer history privacy confirmation dialog`,
              }),
            }),
          }),
        }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Y.jsxs)(`li`, {
        className: `flex items-start gap-3`,
        children: [
          (0, Y.jsx)(gt, { className: `size-6 shrink-0`, name: `book-open` }),
          (0, Y.jsx)(`span`, {
            children: (0, Y.jsx)(f, {
              id: `settings.chronicle.consent.controls`,
              defaultMessage: `You can pause or clear your history and manage which apps are included at any time.`,
              description: `Computer history privacy confirmation explaining that users can pause or clear their history and manage which applications are included`,
            }),
          }),
        ],
      })),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsxs)(`li`, {
        className: `flex items-start gap-3`,
        children: [
          (0, Y.jsx)(gt, { className: `size-6 shrink-0`, name: `heart-text-clipboard` }),
          (0, Y.jsx)(`span`, {
            children: (0, Y.jsx)(f, {
              id: `settings.chronicle.consent.sensitiveApps`,
              defaultMessage: `Consider pausing or excluding sensitive apps, such as health or finance, from your history.`,
              description: `Computer history privacy confirmation advising users to pause recording or exclude sensitive health and finance applications`,
            }),
          }),
        ],
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsx)(be, {
        children: (0, Y.jsxs)(`ul`, {
          className: `flex flex-col gap-3 text-secondary`,
          children: [
            c,
            l,
            (0, Y.jsxs)(`li`, {
              className: `flex items-start gap-3`,
              children: [
                (0, Y.jsx)(gt, { className: `size-6 shrink-0`, name: `person-square-video` }),
                (0, Y.jsx)(`span`, {
                  children: (0, Y.jsx)(f, {
                    id: `settings.chronicle.consent.otherPeople`,
                    defaultMessage: `You also agree that you'll pause Computer History during communications with others, such as in video conference or text messaging apps, unless you have their prior express consent.`,
                    description: `Computer history privacy confirmation requiring users to pause recording during communications with other people unless they have prior express consent`,
                  }),
                }),
              ],
            }),
          ],
        }),
      })),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] === r ? (d = t[7]) : ((d = () => r(!1)), (t[6] = r), (t[7] = d));
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Y.jsx)(f, {
        id: `settings.chronicle.consent.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel turning on Computer history from the privacy confirmation dialog`,
      })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] === d
    ? (m = t[10])
    : ((m = (0, Y.jsx)(J, { color: `ghost`, type: `button`, onClick: d, children: p })),
      (t[9] = d),
      (t[10] = m));
  let h;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(f, {
        id: `settings.chronicle.consent.allowAllApps`,
        defaultMessage: `Allow all apps`,
        description: `Accept the Computer history privacy confirmation and turn on recording without customizing application permissions`,
      })),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === i
    ? (g = t[13])
    : ((g = (0, Y.jsx)(J, { color: `ghost`, type: `button`, onClick: i, children: h })),
      (t[12] = i),
      (t[13] = g));
  let _;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Y.jsx)(J, {
        color: `primary`,
        type: `submit`,
        children: (0, Y.jsx)(f, {
          id: `settings.chronicle.consent.customizeApps`,
          defaultMessage: `Customize apps`,
          description: `Accept the Computer history privacy confirmation and customize which applications can be recorded`,
        }),
      })),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] !== g || t[16] !== m
    ? ((v = (0, Y.jsx)(be, { children: (0, Y.jsxs)(_e, { children: [m, g, _] }) })),
      (t[15] = g),
      (t[16] = m),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== o || t[19] !== v
    ? ((y = (0, Y.jsxs)(A, { as: `form`, className: `gap-1`, onSubmit: o, children: [s, u, v] })),
      (t[18] = o),
      (t[19] = v),
      (t[20] = y))
    : (y = t[20]);
  let b;
  return (
    t[21] !== r || t[22] !== n || t[23] !== y
      ? ((b = (0, Y.jsx)(tt, { open: n, onOpenChange: r, showDialogClose: !1, children: y })),
        (t[21] = r),
        (t[22] = n),
        (t[23] = y),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
var Kt,
  Y,
  qt = e(() => {
    ((Kt = Ve()), U(), ht(), a(), Le(), Oe(), (Y = Ne()));
  });
function Jt() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.enable`,
          defaultMessage: `Computer history`,
          description: `Label for the Computer history enable toggle`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Yt() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.enableDescriptionWithLearnMore`,
          defaultMessage: `Augment memories with your computer activity so ChatGPT can help with anything you’re working on. <learnMore>Learn more</learnMore>`,
          description: `Computer history enablement description followed by a learn-more link`,
          values: { learnMore: Xt },
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Xt(e) {
  return (0, dn.jsx)(Et, { children: un.Children.toArray(e) }, `computer-history-learn-more`);
}
function Zt() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.permissions.title`,
          defaultMessage: `Permissions`,
          description: `Computer history permissions title`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Qt() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.permissions.description`,
          defaultMessage: `Choose which apps and websites to exclude or include in computer history`,
          description: `Computer history permissions description`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function $t() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.history.title`,
          defaultMessage: `History`,
          description: `Computer history timeline title`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function en() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.off.title`,
          defaultMessage: `Let ChatGPT follow your work`,
          description: `Computer history off-state title`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function tn() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.off.description`,
          defaultMessage: `ChatGPT can summarize your activity across the apps and websites you use without ever recording your screen or audio.`,
          description: `Computer history off-state explanation of activity summarization and recording privacy`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function nn() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.off.benefits`,
          defaultMessage: `Ask about what you were working on, get help without explaining everything again, or discover opportunities to automate repeated tasks.`,
          description: `Computer history off-state explanation of its benefits`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function rn() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.off.privacyDisclaimerWithLearnMore`,
          defaultMessage: `When turned on, ChatGPT saves text summaries of your activity across allowed apps and websites, potentially including communications. Audio and private-mode web browsing are never included, and you can pause or clear your history and manage what’s included at any time. This feature increases token usage. <learnMore>Learn more</learnMore>`,
          description: `Privacy and token usage explanation below the Computer history onboarding card, followed by a learn-more link`,
          values: { learnMore: an },
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function an(e) {
  return (0, dn.jsx)(
    Et,
    { children: un.Children.toArray(e) },
    `computer-history-onboarding-learn-more`,
  );
}
function on() {
  let e = (0, ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, dn.jsx)(f, {
          id: `settings.chronicle.permissions.privateBrowsingWithLearnMore`,
          defaultMessage: `Private-mode web browsing activity is never included in computer history. <learnMore>Learn more about privacy</learnMore>`,
          description: `Computer history private browsing behavior followed by a privacy learn-more link`,
          values: { learnMore: sn },
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function sn(e) {
  return (0, dn.jsx)(
    Et,
    { openTarget: `external-browser`, children: un.Children.toArray(e) },
    `computer-history-privacy-learn-more`,
  );
}
function cn(e) {
  let t = (0, ln.c)(4),
    { behavior: n, kind: r } = e;
  if (n === `observe`) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e =
            r === `apps`
              ? (0, dn.jsx)(f, {
                  id: `settings.chronicle.permissions.excludeApps`,
                  defaultMessage: `Exclude these apps`,
                  description: `Application exclusion policy label`,
                })
              : (0, dn.jsx)(f, {
                  id: `settings.chronicle.permissions.excludeWebsites`,
                  defaultMessage: `Exclude these websites`,
                  description: `Website exclusion policy label`,
                })),
          (t[0] = r),
          (t[1] = e)),
      e
    );
  }
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i =
          r === `apps`
            ? (0, dn.jsx)(f, {
                id: `settings.chronicle.permissions.includeApps`,
                defaultMessage: `Include only these apps`,
                description: `Application allowlist policy label`,
              })
            : (0, dn.jsx)(f, {
                id: `settings.chronicle.permissions.includeWebsites`,
                defaultMessage: `Include only these websites`,
                description: `Website allowlist policy label`,
              })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
var ln,
  un,
  dn,
  fn = e(() => {
    ((ln = Ve()), (un = t(o(), 1)), U(), Ut(), (dn = Ne()));
  }),
  pn,
  mn,
  hn,
  gn = e(() => {
    ((pn = `_exampleUser_1s4tr_1`),
      (mn = `_exampleWord_1s4tr_8`),
      (hn = {
        exampleUser: pn,
        "example-user-send": `_example-user-send_1s4tr_1`,
        exampleWord: mn,
        "example-word-appear": `_example-word-appear_1s4tr_1`,
      }));
  });
function _n(e) {
  let t = (0, bn.c)(110),
    { disabled: n, disabledReason: r, onTurnOn: i } = e,
    a = ne(),
    o = ze(),
    [s, c] = (0, xn.useState)(0),
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = () => {
        if (o) return;
        let e = window.setTimeout(() => {
          c(vn);
        }, 14e3);
        return () => window.clearTimeout(e);
      }),
      (t[0] = o),
      (t[1] = l));
  let u;
  (t[2] !== s || t[3] !== o ? ((u = [s, o]), (t[2] = s), (t[3] = o), (t[4] = u)) : (u = t[4]),
    (0, xn.useEffect)(l, u));
  let d = Sn[s] ?? Sn[0],
    p = `link` in d ? d.link : null,
    m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e) => {
        c((t) => (t + e + Sn.length) % Sn.length);
      }),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A;
  if (
    t[6] !== n ||
    t[7] !== r ||
    t[8] !== d.assistant ||
    t[9] !== d.key ||
    t[10] !== d.user ||
    t[11] !== s ||
    t[12] !== p ||
    t[13] !== a ||
    t[14] !== i
  ) {
    let e = a.formatMessage(d.assistant),
      o = yn(e, a.locale);
    ((w = `flex flex-col`), (g = pe), (S = `grid min-h-[340px] grid-cols-2 max-md:grid-cols-1`));
    let c;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, X.jsx)(`div`, {
          className: `text-base leading-6 font-medium text-default`,
          children: (0, X.jsx)(en, {}),
        })),
        (t[30] = c))
      : (c = t[30]);
    let l;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, X.jsxs)(`div`, {
          className: `mt-[5px] flex max-w-[300px] flex-col gap-3 text-[13px] leading-[18px] text-secondary`,
          children: [
            (0, X.jsx)(`p`, { children: (0, X.jsx)(tn, {}) }),
            (0, X.jsx)(`p`, { children: (0, X.jsx)(nn, {}) }),
          ],
        })),
        (t[31] = l))
      : (l = t[31]);
    let u = r == null,
      m;
    t[32] === r
      ? (m = t[33])
      : ((m = r == null ? null : (0, X.jsx)(f, { ...Cn[r] })), (t[32] = r), (t[33] = m));
    let h =
        r != null &&
        `cursor-not-allowed rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
      j;
    t[34] === h ? (j = t[35]) : ((j = V(`inline-flex`, h)), (t[34] = h), (t[35] = j));
    let M = r == null ? void 0 : 0,
      N;
    t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((N = (0, X.jsx)(f, {
          id: `settings.chronicle.turnOn`,
          defaultMessage: `Turn on`,
          description: `Button to enable Computer history`,
        })),
        (t[36] = N))
      : (N = t[36]);
    let P;
    t[37] !== n || t[38] !== i
      ? ((P = (0, X.jsx)(J, {
          className: `mt-4 !h-[30px] !border-transparent !px-3 !py-0 !text-sm !leading-[18px] !font-medium`,
          color: `primary`,
          size: `medium`,
          disabled: n,
          onClick: i,
          children: N,
        })),
        (t[37] = n),
        (t[38] = i),
        (t[39] = P))
      : (P = t[39]);
    let F;
    (t[40] !== j || t[41] !== M || t[42] !== P
      ? ((F = (0, X.jsx)(`span`, { className: j, tabIndex: M, children: P })),
        (t[40] = j),
        (t[41] = M),
        (t[42] = P),
        (t[43] = F))
      : (F = t[43]),
      t[44] !== u || t[45] !== m || t[46] !== F
        ? ((C = (0, X.jsxs)(`div`, {
            className: `flex min-w-0 flex-col items-start justify-center px-9 py-[30px] text-start`,
            children: [c, l, (0, X.jsx)(ee, { disabled: u, tooltipContent: m, children: F })],
          })),
          (t[44] = u),
          (t[45] = m),
          (t[46] = F),
          (t[47] = C))
        : (C = t[47]),
      (b = `relative min-h-[340px] overflow-hidden`),
      t[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((x = (0, X.jsx)(`img`, {
            "aria-hidden": `true`,
            className: `absolute inset-0 size-full object-cover object-[center_44%]`,
            src: st,
            alt: ``,
          })),
          (t[48] = x))
        : (x = t[48]),
      (y = `group/example absolute inset-5 flex min-h-0 [scrollbar-width:none] flex-col overflow-y-auto rounded-xl border border-default bg-surface/95 p-5 pb-12 text-sm leading-5 text-default [&::-webkit-scrollbar]:hidden`),
      (A = s),
      (_ = `flex flex-1 flex-col`));
    let I;
    (t[49] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((I = V(
          hn.exampleUser,
          `ms-auto bg-text/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2`,
        )),
        (t[49] = I))
      : (I = t[49]),
      t[50] === d.user
        ? (v = t[51])
        : ((v = (0, X.jsx)(`p`, { className: I, children: (0, X.jsx)(f, { ...d.user }) })),
          (t[50] = d.user),
          (t[51] = v)),
      (O = `mt-4`));
    let L;
    (t[52] === p
      ? (L = t[53])
      : ((L =
          p == null ? null : (0, X.jsxs)(X.Fragment, { children: [` `, (0, X.jsx)(f, { ...p })] })),
        (t[52] = p),
        (t[53] = L)),
      (k = (0, X.jsxs)(`span`, { className: `sr-only`, children: [e, L] })),
      (T = `true`));
    let R;
    (t[54] === d.key
      ? (R = t[55])
      : ((R = (e, t) =>
          (0, X.jsx)(
            `span`,
            {
              className: hn.exampleWord,
              style: {
                animationDelay: `calc(var(--transition-duration-relaxed) + var(--transition-duration-basic) + ${e.wordIndex} * var(--transition-duration-basic) / 2)`,
              },
              children: e.text,
            },
            `${d.key}-${t}`,
          )),
        (t[54] = d.key),
        (t[55] = R)),
      (E = o.map(R)),
      (D =
        p == null
          ? null
          : (0, X.jsxs)(X.Fragment, {
              children: [
                ` `,
                (0, X.jsx)(`span`, {
                  className: V(hn.exampleWord, `text-info`),
                  style: {
                    animationDelay: `calc(var(--transition-duration-relaxed) + var(--transition-duration-basic) + ${(o.at(-1)?.wordIndex ?? 0) + 1} * var(--transition-duration-basic) / 2)`,
                  },
                  children: (0, X.jsx)(f, { ...p }),
                }),
              ],
            })),
      (t[6] = n),
      (t[7] = r),
      (t[8] = d.assistant),
      (t[9] = d.key),
      (t[10] = d.user),
      (t[11] = s),
      (t[12] = p),
      (t[13] = a),
      (t[14] = i),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x),
      (t[21] = S),
      (t[22] = C),
      (t[23] = w),
      (t[24] = T),
      (t[25] = E),
      (t[26] = D),
      (t[27] = O),
      (t[28] = k),
      (t[29] = A));
  } else
    ((g = t[15]),
      (_ = t[16]),
      (v = t[17]),
      (y = t[18]),
      (b = t[19]),
      (x = t[20]),
      (S = t[21]),
      (C = t[22]),
      (w = t[23]),
      (T = t[24]),
      (E = t[25]),
      (D = t[26]),
      (O = t[27]),
      (k = t[28]),
      (A = t[29]));
  let j;
  t[56] !== T || t[57] !== E || t[58] !== D
    ? ((j = (0, X.jsxs)(`span`, { "aria-hidden": T, children: [E, D] })),
      (t[56] = T),
      (t[57] = E),
      (t[58] = D),
      (t[59] = j))
    : (j = t[59]);
  let M;
  t[60] !== j || t[61] !== O || t[62] !== k
    ? ((M = (0, X.jsxs)(`p`, { className: O, children: [k, j] })),
      (t[60] = j),
      (t[61] = O),
      (t[62] = k),
      (t[63] = M))
    : (M = t[63]);
  let N;
  t[64] !== _ || t[65] !== v || t[66] !== M || t[67] !== A
    ? ((N = (0, X.jsxs)(`div`, { className: _, children: [v, M] }, A)),
      (t[64] = _),
      (t[65] = v),
      (t[66] = M),
      (t[67] = A),
      (t[68] = N))
    : (N = t[68]);
  let P;
  t[69] === a
    ? (P = t[70])
    : ((P = a.formatMessage({
        id: `settings.chronicle.off.example.previous`,
        defaultMessage: `Previous example`,
        description: `Previous Computer history example button`,
      })),
      (t[69] = a),
      (t[70] = P));
  let F, I;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => h(-1)),
      (I = (0, X.jsx)(Ze, { className: `!size-[15px]` })),
      (t[71] = F),
      (t[72] = I))
    : ((F = t[71]), (I = t[72]));
  let L;
  t[73] === P
    ? (L = t[74])
    : ((L = (0, X.jsx)(J, {
        "aria-label": P,
        color: `secondary`,
        size: `medium`,
        uniform: !0,
        className: `!size-[26px] !p-0`,
        onClick: F,
        children: I,
      })),
      (t[73] = P),
      (t[74] = L));
  let R;
  t[75] === a
    ? (R = t[76])
    : ((R = a.formatMessage({
        id: `settings.chronicle.off.example.next`,
        defaultMessage: `Next example`,
        description: `Next Computer history example button`,
      })),
      (t[75] = a),
      (t[76] = R));
  let te, re;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = () => h(1)),
      (re = (0, X.jsx)(Ze, { className: `!size-[15px] -scale-x-100 transform` })),
      (t[77] = te),
      (t[78] = re))
    : ((te = t[77]), (re = t[78]));
  let ie;
  t[79] === R
    ? (ie = t[80])
    : ((ie = (0, X.jsx)(J, {
        "aria-label": R,
        color: `secondary`,
        size: `medium`,
        uniform: !0,
        className: `!size-[26px] !p-0`,
        onClick: te,
        children: re,
      })),
      (t[79] = R),
      (t[80] = ie));
  let z;
  t[81] !== L || t[82] !== ie
    ? ((z = (0, X.jsxs)(`div`, {
        className: `absolute right-3 bottom-3 flex gap-1 opacity-0 transition-opacity duration-basic group-focus-within/example:opacity-100 group-hover/example:opacity-100 motion-reduce:transition-none`,
        children: [L, ie],
      })),
      (t[81] = L),
      (t[82] = ie),
      (t[83] = z))
    : (z = t[83]);
  let ae;
  t[84] !== y || t[85] !== N || t[86] !== z
    ? ((ae = (0, X.jsxs)(`div`, { className: y, children: [N, z] })),
      (t[84] = y),
      (t[85] = N),
      (t[86] = z),
      (t[87] = ae))
    : (ae = t[87]);
  let oe;
  t[88] !== s || t[89] !== a
    ? ((oe = a.formatMessage(
        {
          id: `settings.chronicle.off.example.position`,
          defaultMessage: `Example {current} of {total}`,
          description: `Computer history example carousel position`,
        },
        { current: s + 1, total: Sn.length },
      )),
      (t[88] = s),
      (t[89] = a),
      (t[90] = oe))
    : (oe = t[90]);
  let se;
  t[91] === s
    ? (se = t[92])
    : ((se = Sn.map((e, t) =>
        (0, X.jsx)(
          `span`,
          { className: V(`size-1 rounded-full bg-surface`, t !== s && `opacity-50`) },
          e.key,
        ),
      )),
      (t[91] = s),
      (t[92] = se));
  let B;
  t[93] !== oe || t[94] !== se
    ? ((B = (0, X.jsx)(`div`, {
        className: `absolute bottom-[9px] left-1/2 flex -translate-x-1/2 items-center gap-[5px]`,
        children: (0, X.jsx)(`div`, {
          className: `contents`,
          "aria-label": oe,
          role: `status`,
          children: se,
        }),
      })),
      (t[93] = oe),
      (t[94] = se),
      (t[95] = B))
    : (B = t[95]);
  let ce;
  t[96] !== b || t[97] !== x || t[98] !== ae || t[99] !== B
    ? ((ce = (0, X.jsxs)(`div`, { className: b, children: [x, ae, B] })),
      (t[96] = b),
      (t[97] = x),
      (t[98] = ae),
      (t[99] = B),
      (t[100] = ce))
    : (ce = t[100]);
  let le;
  t[101] !== g || t[102] !== S || t[103] !== C || t[104] !== ce
    ? ((le = (0, X.jsxs)(g, { className: S, children: [C, ce] })),
      (t[101] = g),
      (t[102] = S),
      (t[103] = C),
      (t[104] = ce),
      (t[105] = le))
    : (le = t[105]);
  let ue;
  t[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, X.jsx)(`p`, {
        className: `mt-[18px] text-[13px] leading-5 text-secondary`,
        children: (0, X.jsx)(rn, {}),
      })),
      (t[106] = ue))
    : (ue = t[106]);
  let H;
  return (
    t[107] !== w || t[108] !== le
      ? ((H = (0, X.jsxs)(`div`, { className: w, children: [le, ue] })),
        (t[107] = w),
        (t[108] = le),
        (t[109] = H))
      : (H = t[109]),
    H
  );
}
function vn(e) {
  return (e + 1) % Sn.length;
}
function yn(e, t) {
  let n = -1;
  return Array.from(
    new Intl.Segmenter(t, { granularity: `word` }).segment(e),
    ({ isWordLike: e, segment: t }) => (e && (n += 1), { text: t, wordIndex: Math.max(n, 0) }),
  );
}
var bn,
  xn,
  X,
  Sn,
  Cn,
  wn = e(() => {
    ((bn = Ve()),
      ut(),
      (xn = t(o(), 1)),
      U(),
      u(),
      a(),
      k(),
      R(),
      Ie(),
      S(),
      fn(),
      gn(),
      (X = Ne()),
      (Sn = [
        {
          key: `follow-up`,
          user: q({
            id: `settings.chronicle.off.example.followUp.user`,
            defaultMessage: `What did I promise to send Sarah after yesterday’s meeting?`,
            description: `Example Computer history question about a follow-up`,
          }),
          assistant: q({
            id: `settings.chronicle.off.example.followUp.assistant`,
            defaultMessage: `You told Sarah in Slack you’d send the Q3 budget by Friday. The latest version is in Google Sheets, and your meeting notes in Google Docs list two numbers to confirm: hiring and travel.`,
            description: `Example Computer history answer about a follow-up`,
          }),
        },
        {
          key: `before-lunch`,
          user: q({
            id: `settings.chronicle.off.example.beforeLunch.user`,
            defaultMessage: `What was I working on before lunch?`,
            description: `Example Computer history question about resuming earlier work`,
          }),
          assistant: q({
            id: `settings.chronicle.off.example.beforeLunch.assistant`,
            defaultMessage: `You were revising the launch presentation in Google Slides, checking campaign numbers in Google Sheets, and reviewing feedback from Maya in Slack. You left off updating the rollout timeline.`,
            description: `Example Computer history answer about resuming earlier work`,
          }),
        },
        {
          key: `planning-document`,
          user: q({
            id: `settings.chronicle.off.example.planningDocument.user`,
            defaultMessage: `What was that planning document I was looking at today?`,
            description: `Example Computer history question about finding a planning document`,
          }),
          assistant: q({
            id: `settings.chronicle.off.example.planningDocument.assistant`,
            defaultMessage: `You were reviewing the Q4 launch plan in Google Docs this morning. Here’s the document:`,
            description: `Example Computer history answer about finding a planning document`,
          }),
          link: q({
            id: `settings.chronicle.off.example.planningDocument.link`,
            defaultMessage: `Q4 Launch Planning`,
            description: `Example planning document title shown in a Computer history answer`,
          }),
        },
        {
          key: `remodel`,
          user: q({
            id: `settings.chronicle.off.example.remodel.user`,
            defaultMessage: `Where was I on the home remodel?`,
            description: `Example Computer history question about a home project`,
          }),
          assistant: q({
            id: `settings.chronicle.off.example.remodel.assistant`,
            defaultMessage: `You narrowed the backsplash to two options in Chrome, compared quotes in Google Sheets, and saved the contractor’s revised estimate in Google Drive. The next decision is white subway tile or blue zellige.`,
            description: `Example Computer history answer about a home project`,
          }),
        },
      ]),
      (Cn = at({
        "service-unavailable": {
          id: `settings.chronicle.off.serviceUnavailableTooltip`,
          defaultMessage: `Computer history isn’t available. Restart ChatGPT and try again.`,
          description: `Tooltip explaining that Computer history cannot be enabled because the Chronicle service is unavailable`,
        },
        "configuration-loading": {
          id: `settings.chronicle.off.configurationLoadingTooltip`,
          defaultMessage: `Loading your settings…`,
          description: `Tooltip explaining that Computer history cannot be enabled while user settings are loading`,
        },
        "configuration-unavailable": {
          id: `settings.chronicle.off.configurationUnavailableTooltip`,
          defaultMessage: `Your settings couldn’t be loaded. Restart ChatGPT and try again.`,
          description: `Tooltip explaining that Computer history cannot be enabled because user settings could not be loaded`,
        },
        "memory-feature-loading": {
          id: `settings.chronicle.off.memoryFeatureLoadingTooltip`,
          defaultMessage: `Checking Memories feature availability…`,
          description: `Tooltip explaining that Computer history cannot be enabled while Memories feature availability is being checked`,
        },
        "memory-feature-unavailable": {
          id: `settings.chronicle.off.memoryFeatureUnavailableTooltip`,
          defaultMessage: `Computer history requires Memories, which isn’t available right now`,
          description: `Tooltip explaining that Computer history cannot be enabled because the Memories feature is unavailable`,
        },
      })));
  });
function Tn(e) {
  let t = (0, Dn.c)(28),
    { open: n, isPending: r, onOpenChange: i, onTurnOn: a } = e,
    o;
  t[0] !== r || t[1] !== i
    ? ((o = (e) => {
        r || i(e);
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== r || t[4] !== a
    ? ((s = (e) => {
        (e.preventDefault(), r || a());
      }),
      (t[3] = r),
      (t[4] = a),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, kn.jsx)(Qe, {
        asChild: !0,
        children: (0, kn.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, kn.jsx)(f, {
            id: `settings.chronicle.enableMemoriesAccessibleTitle`,
            defaultMessage: `Turn on Memories`,
            description: `Accessible title for the dialog that enables Memories before Computer history`,
          }),
        }),
      })),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, kn.jsx)(f, {
        id: `settings.chronicle.enableMemoriesTitle`,
        defaultMessage: `Turn on Memories to use Computer history?`,
        description: `Title for the dialog that enables Memories before Computer history`,
      })),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, kn.jsxs)(be, {
        children: [
          c,
          (0, kn.jsx)(me, {
            title: l,
            subtitle: (0, kn.jsx)(f, {
              id: `settings.chronicle.enableMemoriesDescriptionWithLearnMore`,
              defaultMessage: `Computer history requires Memories so ChatGPT can remember your activity across tasks. Turning this on also lets ChatGPT generate memories from your chats and use them in future chats. <learnMore>Learn more</learnMore>`,
              description: `Explanation of the broader effect of enabling Memories for Computer history, followed by a learn-more link`,
              values: { learnMore: En },
            }),
          }),
        ],
      })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === i ? (d = t[10]) : ((d = () => i(!1)), (t[9] = i), (t[10] = d));
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, kn.jsx)(f, {
        id: `settings.chronicle.enableMemoriesCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel enabling Memories and Computer history`,
      })),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== r || t[13] !== d
    ? ((m = (0, kn.jsx)(J, {
        color: `ghost`,
        disabled: r,
        type: `button`,
        onClick: d,
        children: p,
      })),
      (t[12] = r),
      (t[13] = d),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, kn.jsx)(f, {
        id: `settings.chronicle.enableMemoriesConfirm`,
        defaultMessage: `Turn on Memories`,
        description: `Confirm enabling Memories before Computer history`,
      })),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] === r
    ? (g = t[17])
    : ((g = (0, kn.jsx)(J, { color: `primary`, loading: r, type: `submit`, children: h })),
      (t[16] = r),
      (t[17] = g));
  let _;
  t[18] !== g || t[19] !== m
    ? ((_ = (0, kn.jsx)(be, { children: (0, kn.jsxs)(_e, { children: [m, g] }) })),
      (t[18] = g),
      (t[19] = m),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  t[21] !== _ || t[22] !== s
    ? ((v = (0, kn.jsxs)(A, { as: `form`, onSubmit: s, children: [u, _] })),
      (t[21] = _),
      (t[22] = s),
      (t[23] = v))
    : (v = t[23]);
  let y;
  return (
    t[24] !== n || t[25] !== o || t[26] !== v
      ? ((y = (0, kn.jsx)(tt, { open: n, onOpenChange: o, children: v })),
        (t[24] = n),
        (t[25] = o),
        (t[26] = v),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function En(e) {
  return (0, kn.jsx)(
    Et,
    { openTarget: `external-browser`, children: On.Children.toArray(e) },
    `computer-history-enable-memories-learn-more`,
  );
}
var Dn,
  On,
  kn,
  An = e(() => {
    ((Dn = Ve()), (On = t(o(), 1)), U(), a(), Le(), Oe(), Ut(), (kn = Ne()));
  }),
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn = e(() => {
    ((jn = `_timelineItem_183xd_1`),
      (Mn = `_timelineTime_183xd_5`),
      (Nn = `_timelineRail_183xd_10`),
      (Pn = `_timelineRailGapBefore_183xd_29`),
      (Fn = `_timelineRailGapAfter_183xd_30`),
      (In = `_timelineDot_183xd_43`),
      (Ln = `_timelineContent_183xd_47`),
      (Rn = `_timelineDelete_183xd_55`),
      (zn = {
        timelineItem: jn,
        timelineTime: Mn,
        timelineRail: Nn,
        timelineRailGapBefore: Pn,
        timelineRailGapAfter: Fn,
        timelineDot: In,
        timelineContent: Ln,
        timelineDelete: Rn,
      }));
  });
function Vn(e) {
  let t = (0, er.c)(49),
    { currentTimeMs: n, isServiceUnavailable: r, onClearRequest: a, settings: o } = e,
    s = i(Se),
    c = ne(),
    { data: l, isError: u, isLoading: d, refetch: p } = v(vt),
    m = v(At),
    h = v(Mt),
    [g, _] = (0, tr.useState)(null),
    [b, x] = (0, tr.useState)(null),
    [S] = (0, tr.useState)(Date.now),
    C = (0, tr.useRef)(null),
    w,
    T;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = () => {
        let e = (e) => {
            (e.target instanceof Element &&
              e.target.closest(`[data-chronicle-delete-confirming="true"]`) != null) ||
              x(null);
          },
          t = (e) => {
            e.key === `Escape` && x(null);
          };
        return (
          document.addEventListener(`pointerdown`, e),
          document.addEventListener(`keydown`, t),
          () => {
            (C.current != null && clearTimeout(C.current),
              document.removeEventListener(`pointerdown`, e),
              document.removeEventListener(`keydown`, t));
          }
        );
      }),
      (T = []),
      (t[0] = w),
      (t[1] = T))
    : ((w = t[0]), (T = t[1])),
    (0, tr.useEffect)(w, T));
  let E;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => {
        if ((C.current != null && (clearTimeout(C.current), (C.current = null)), e != null)) {
          _(e);
          return;
        }
        C.current = setTimeout(() => {
          (_(null), (C.current = null));
        }, 120);
      }),
      (t[2] = E))
    : (E = t[2]);
  let D = E,
    O,
    k,
    A,
    j,
    M,
    N;
  if (
    t[3] !== b ||
    t[4] !== n ||
    t[5] !== h ||
    t[6] !== g ||
    t[7] !== l ||
    t[8] !== c ||
    t[9] !== u ||
    t[10] !== d ||
    t[11] !== r ||
    t[12] !== S ||
    t[13] !== a ||
    t[14] !== p ||
    t[15] !== s ||
    t[16] !== o ||
    t[17] !== m
  ) {
    let e = Qn(l ?? [], new Date(n ?? S));
    ((A = xe), (M = `history`));
    let i;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Z.jsx)($t, {})), (t[24] = i))
      : (i = t[24]);
    let _;
    t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, Z.jsx)(f, {
          id: `settings.chronicle.history.description`,
          defaultMessage: `ChatGPT records text summaries of your computer activity. You can control what ChatGPT can reference by deleting individual records or clearing recent history.`,
          description: `Explanation of the Computer history timeline and its deletion controls`,
        })),
        (t[25] = _))
      : (_ = t[25]);
    let v;
    t[26] === c
      ? (v = t[27])
      : ((v = c.formatMessage({
          id: `settings.chronicle.history.descriptionAriaLabel`,
          defaultMessage: `About computer history`,
          description: `Accessible label for the Computer history information button`,
        })),
        (t[26] = c),
        (t[27] = v));
    let C;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, Z.jsx)(Me, { asset: y })), (t[28] = C))
      : (C = t[28]);
    let w;
    t[29] === v
      ? (w = t[30])
      : ((w = (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            i,
            (0, Z.jsx)(ee, {
              cloneCustomTrigger: !0,
              delayDuration: 0,
              tooltipContent: _,
              children: (0, Z.jsx)(J, {
                "aria-label": v,
                color: `ghostTertiary`,
                size: `inline`,
                children: C,
              }),
            }),
          ],
        })),
        (t[29] = v),
        (t[30] = w));
    let T;
    (t[31] !== l?.length || t[32] !== r || t[33] !== a
      ? ((T =
          (l?.length ?? 0) > 0
            ? (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(Jn, { disabled: r, onRequest: a }),
                  (0, Z.jsx)(Gn, { disabled: r }),
                ],
              })
            : null),
        (t[31] = l?.length),
        (t[32] = r),
        (t[33] = a),
        (t[34] = T))
      : (T = t[34]),
      t[35] !== w || t[36] !== T
        ? ((N = (0, Z.jsx)(xe.Header, { title: w, actions: T })),
          (t[35] = w),
          (t[36] = T),
          (t[37] = N))
        : (N = t[37]),
      (k = xe.Content),
      (O = pe),
      (j = d
        ? (0, Z.jsx)(`div`, {
            className: `px-5 py-10 text-center text-sm text-secondary`,
            children: (0, Z.jsx)(f, {
              id: `settings.chronicle.history.loading`,
              defaultMessage: `Loading history…`,
              description: `Computer history loading state`,
            }),
          })
        : u
          ? (0, Z.jsxs)(`div`, {
              className: `flex flex-col items-center gap-3 px-5 py-10 text-center text-sm text-secondary`,
              children: [
                (0, Z.jsx)(f, {
                  id: `settings.chronicle.history.error`,
                  defaultMessage: `Computer history could not be loaded`,
                  description: `Computer history error state`,
                }),
                (0, Z.jsx)(J, {
                  color: `outline`,
                  onClick: () => void p(),
                  children: (0, Z.jsx)(f, {
                    id: `settings.chronicle.history.retry`,
                    defaultMessage: `Try again`,
                    description: `Retry loading Computer history`,
                  }),
                }),
              ],
            })
          : e.length === 0
            ? (0, Z.jsx)(`div`, {
                className: `px-5 py-10 text-center text-sm text-secondary`,
                children: (0, Z.jsx)(f, {
                  id: `settings.chronicle.history.empty`,
                  defaultMessage: `No computer history yet`,
                  description: `Computer history empty state`,
                }),
              })
            : (0, Z.jsx)(`div`, {
                className: `divide-y divide-border`,
                children: e.map((e) =>
                  (0, Z.jsx)(
                    Hn,
                    {
                      group: e,
                      settings: o,
                      highlightedApplication: g,
                      confirmingDeleteId: b,
                      isUpdatingApplication: m.isPending,
                      isDeletingItem: h.isPending,
                      onHighlightApplication: D,
                      onApplicationObservedChange: (e, t) =>
                        m.mutate(
                          { application: e, observed: t },
                          {
                            onError: () => {
                              s.get(Re).danger(
                                (0, Z.jsx)(f, {
                                  id: `settings.chronicle.history.applicationErrorToast`,
                                  defaultMessage: `The app's Computer history permission could not be updated`,
                                  description: `Toast shown when updating a Computer history application policy fails`,
                                }),
                              );
                            },
                          },
                        ),
                      onConfirmingDeleteChange: x,
                      onDelete: (e) =>
                        h.mutate(
                          { scope: `interval`, interval: e.interval },
                          {
                            onError: () => {
                              s.get(Re).danger(
                                (0, Z.jsx)(f, {
                                  id: `settings.chronicle.history.clearErrorToast`,
                                  defaultMessage: `Computer history could not be cleared`,
                                  description: `Toast shown when clearing Computer history fails`,
                                }),
                              );
                            },
                          },
                        ),
                    },
                    e.key,
                  ),
                ),
              })),
      (t[3] = b),
      (t[4] = n),
      (t[5] = h),
      (t[6] = g),
      (t[7] = l),
      (t[8] = c),
      (t[9] = u),
      (t[10] = d),
      (t[11] = r),
      (t[12] = S),
      (t[13] = a),
      (t[14] = p),
      (t[15] = s),
      (t[16] = o),
      (t[17] = m),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A),
      (t[21] = j),
      (t[22] = M),
      (t[23] = N));
  } else ((O = t[18]), (k = t[19]), (A = t[20]), (j = t[21]), (M = t[22]), (N = t[23]));
  let P;
  t[38] !== O || t[39] !== j
    ? ((P = (0, Z.jsx)(O, { children: j })), (t[38] = O), (t[39] = j), (t[40] = P))
    : (P = t[40]);
  let F;
  t[41] !== k || t[42] !== P
    ? ((F = (0, Z.jsx)(k, { children: P })), (t[41] = k), (t[42] = P), (t[43] = F))
    : (F = t[43]);
  let I;
  return (
    t[44] !== A || t[45] !== M || t[46] !== N || t[47] !== F
      ? ((I = (0, Z.jsxs)(A, { id: M, children: [N, F] })),
        (t[44] = A),
        (t[45] = M),
        (t[46] = N),
        (t[47] = F),
        (t[48] = I))
      : (I = t[48]),
    I
  );
}
function Hn(e) {
  let t = (0, er.c)(34),
    {
      group: n,
      highlightedApplication: r,
      confirmingDeleteId: i,
      isDeletingItem: a,
      isUpdatingApplication: o,
      onApplicationObservedChange: s,
      onDelete: c,
      onConfirmingDeleteChange: l,
      onHighlightApplication: u,
      settings: d,
    } = e,
    [f, p] = (0, tr.useState)(!0),
    m;
  t[0] !== n.items || t[1] !== r
    ? ((m =
        r != null && !n.items.some((e) => e.applications.some((e) => e.bundleIdentifier === r))),
      (t[0] = n.items),
      (t[1] = r),
      (t[2] = m))
    : (m = t[2]);
  let h = m && `opacity-40`,
    g;
  t[3] === h ? (g = t[4]) : ((g = V(`transition-opacity`, h)), (t[3] = h), (t[4] = g));
  let _;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = () => p(Un)), (t[5] = _)) : (_ = t[5]);
  let v;
  t[6] === n.label
    ? (v = t[7])
    : ((v = (0, Z.jsx)(Zn, { label: n.label })), (t[6] = n.label), (t[7] = v));
  let y = f && `rotate-90`,
    b;
  t[8] === y
    ? (b = t[9])
    : ((b = V(`icon-xs text-tertiary transition-transform`, y)), (t[8] = y), (t[9] = b));
  let S;
  t[10] === b ? (S = t[11]) : ((S = (0, Z.jsx)(x, { className: b })), (t[10] = b), (t[11] = S));
  let C;
  t[12] !== f || t[13] !== v || t[14] !== S
    ? ((C = (0, Z.jsxs)(J, {
        className: `gap-2 text-sm leading-5 font-medium text-default`,
        "aria-expanded": f,
        color: `ghostMuted`,
        size: `inline`,
        type: `button`,
        onClick: _,
        children: [v, S],
      })),
      (t[12] = f),
      (t[13] = v),
      (t[14] = S),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== g || t[17] !== C
    ? ((w = (0, Z.jsx)(`h2`, { className: g, children: C })), (t[16] = g), (t[17] = C), (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== i ||
  t[20] !== f ||
  t[21] !== n.items ||
  t[22] !== r ||
  t[23] !== a ||
  t[24] !== o ||
  t[25] !== s ||
  t[26] !== l ||
  t[27] !== c ||
  t[28] !== u ||
  t[29] !== d
    ? ((T = f
        ? (0, Z.jsx)(`div`, {
            className: `mt-2.5 flex flex-col`,
            children: n.items.map((e, t) =>
              (0, Z.jsx)(
                Wn,
                {
                  item: e,
                  settings: d,
                  highlightedApplication: r,
                  isConfirmingDelete: i === e.id,
                  isDeletingItem: a,
                  isUpdatingApplication: o,
                  hasGapAfter:
                    t < n.items.length - 1 &&
                    e.interval.startMs > (n.items[t + 1]?.interval.endMs ?? e.interval.startMs),
                  hasGapBefore:
                    t > 0 &&
                    (n.items[t - 1]?.interval.startMs ?? e.interval.endMs) > e.interval.endMs,
                  onApplicationObservedChange: s,
                  onDelete: () => c(e),
                  onConfirmingDeleteChange: (t) => l(t ? e.id : null),
                  onHighlightApplication: u,
                },
                e.id,
              ),
            ),
          })
        : null),
      (t[19] = i),
      (t[20] = f),
      (t[21] = n.items),
      (t[22] = r),
      (t[23] = a),
      (t[24] = o),
      (t[25] = s),
      (t[26] = l),
      (t[27] = c),
      (t[28] = u),
      (t[29] = d),
      (t[30] = T))
    : (T = t[30]);
  let E;
  return (
    t[31] !== w || t[32] !== T
      ? ((E = (0, Z.jsxs)(`section`, { className: `px-5 py-4`, children: [w, T] })),
        (t[31] = w),
        (t[32] = T),
        (t[33] = E))
      : (E = t[33]),
    E
  );
}
function Un(e) {
  return !e;
}
function Wn(e) {
  let t = (0, er.c)(96),
    {
      hasGapAfter: n,
      hasGapBefore: r,
      highlightedApplication: i,
      isConfirmingDelete: a,
      isDeletingItem: o,
      isUpdatingApplication: s,
      item: c,
      onApplicationObservedChange: l,
      onDelete: u,
      onConfirmingDeleteChange: d,
      onHighlightApplication: p,
      settings: m,
    } = e,
    h = ne(),
    g;
  t[0] !== i || t[1] !== c.applications
    ? ((g = i != null && !c.applications.some((e) => e.bundleIdentifier === i)),
      (t[0] = i),
      (t[1] = c.applications),
      (t[2] = g))
    : (g = t[2]);
  let _ = g && `opacity-40`,
    v;
  t[3] === _
    ? (v = t[4])
    : ((v = V(zn.timelineItem, `group/timeline grid items-stretch gap-x-4 transition-opacity`, _)),
      (t[3] = _),
      (t[4] = v));
  let y = c.summaryLevel !== `six_hour`,
    b;
  t[5] !== h || t[6] !== c ? ((b = Xn(c, h)), (t[5] = h), (t[6] = c), (t[7] = b)) : (b = t[7]);
  let x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = V(zn.timelineTime, `text-end leading-4 font-medium text-secondary`)), (t[8] = x))
    : (x = t[8]);
  let S;
  t[9] === c.interval.startMs
    ? (S = t[10])
    : ((S = new Date(c.interval.startMs).toISOString()), (t[9] = c.interval.startMs), (t[10] = S));
  let C;
  t[11] === c ? (C = t[12]) : ((C = (0, Z.jsx)(Yn, { item: c })), (t[11] = c), (t[12] = C));
  let w;
  t[13] !== S || t[14] !== C
    ? ((w = (0, Z.jsx)(`time`, { className: x, dateTime: S, children: C })),
      (t[13] = S),
      (t[14] = C),
      (t[15] = w))
    : (w = t[15]);
  let T;
  t[16] !== y || t[17] !== b || t[18] !== w
    ? ((T = (0, Z.jsx)(ee, { disabled: y, tooltipContent: b, children: w })),
      (t[16] = y),
      (t[17] = b),
      (t[18] = w),
      (t[19] = T))
    : (T = t[19]);
  let E = r && zn.timelineRailGapBefore,
    D = n && zn.timelineRailGapAfter,
    O;
  t[20] !== E || t[21] !== D
    ? ((O = V(zn.timelineRail, `relative min-h-full`, E, D)), (t[20] = E), (t[21] = D), (t[22] = O))
    : (O = t[22]);
  let k;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(`span`, {
        className: V(
          zn.timelineDot,
          `absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-text-tertiary`,
        ),
      })),
      (t[23] = k))
    : (k = t[23]);
  let A;
  t[24] === O
    ? (A = t[25])
    : ((A = (0, Z.jsx)(`span`, { className: O, "aria-hidden": `true`, children: k })),
      (t[24] = O),
      (t[25] = A));
  let j;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = V(zn.timelineContent, `min-w-0`)), (t[26] = j))
    : (j = t[26]);
  let M;
  t[27] === c.title
    ? (M = t[28])
    : ((M = (0, Z.jsx)(`h3`, {
        className: `min-w-0 truncate text-sm leading-5 font-medium text-default`,
        children: c.title,
      })),
      (t[27] = c.title),
      (t[28] = M));
  let N = a && `opacity-100`,
    P;
  t[29] === N
    ? (P = t[30])
    : ((P = V(
        `flex items-center gap-1 opacity-0 transition-opacity duration-basic group-focus-within/timeline:opacity-100 group-hover/timeline:opacity-100`,
        N,
      )),
      (t[29] = N),
      (t[30] = P));
  let F;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsx)(f, {
        id: `settings.chronicle.history.revealMemoryFile`,
        defaultMessage: `Reveal in Finder`,
        description: `Tooltip for revealing a Computer history memory file in Finder`,
      })),
      (t[31] = F))
    : (F = t[31]);
  let I;
  t[32] !== h || t[33] !== c.title
    ? ((I = h.formatMessage(
        {
          id: `settings.chronicle.history.revealMemoryFileAriaLabel`,
          defaultMessage: `Reveal {title} in Finder`,
          description: `Accessible label for revealing a Computer history memory file in Finder`,
        },
        { title: c.title },
      )),
      (t[32] = h),
      (t[33] = c.title),
      (t[34] = I))
    : (I = t[34]);
  let L;
  t[35] === c.memoryFilePath
    ? (L = t[36])
    : ((L = (e) => {
        (e.currentTarget.blur(), de({ cwd: null, path: c.memoryFilePath, target: `fileManager` }));
      }),
      (t[35] = c.memoryFilePath),
      (t[36] = L));
  let R;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Z.jsx)(ue, { "aria-hidden": !0, className: `icon-2xs shrink-0` })), (t[37] = R))
    : (R = t[37]);
  let te;
  t[38] !== o || t[39] !== I || t[40] !== L
    ? ((te = (0, Z.jsx)(ee, {
        tooltipContent: F,
        children: (0, Z.jsx)(J, {
          color: `ghost`,
          size: `default`,
          radius: `large`,
          className: `size-5.5 shrink-0 justify-center`,
          disabled: o,
          "aria-label": I,
          onClick: L,
          children: R,
        }),
      })),
      (t[38] = o),
      (t[39] = I),
      (t[40] = L),
      (t[41] = te))
    : (te = t[41]);
  let re = !a && void 0,
    ie;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Z.jsx)(f, {
        id: `settings.chronicle.history.deleteItemTooltip`,
        defaultMessage: `Delete`,
        description: `Tooltip for deleting a Computer history item`,
      })),
      (t[42] = ie))
    : (ie = t[42]);
  let z = a ? `danger` : `ghost`,
    ae = a ? `w-14` : `w-5.5`,
    oe;
  t[43] === ae
    ? (oe = t[44])
    : ((oe = V(zn.timelineDelete, `h-5.5 shrink-0 justify-center`, ae)),
      (t[43] = ae),
      (t[44] = oe));
  let se = a ? `true` : void 0,
    B;
  t[45] !== h || t[46] !== a || t[47] !== c.title
    ? ((B = a
        ? h.formatMessage(
            {
              id: `settings.chronicle.history.confirmDeleteItem`,
              defaultMessage: `Confirm delete {title}`,
              description: `Accessible label for confirming deletion of a Computer history item`,
            },
            { title: c.title },
          )
        : h.formatMessage(
            {
              id: `settings.chronicle.history.deleteItem`,
              defaultMessage: `Delete {title}`,
              description: `Accessible label for deleting a Computer history item`,
            },
            { title: c.title },
          )),
      (t[45] = h),
      (t[46] = a),
      (t[47] = c.title),
      (t[48] = B))
    : (B = t[48]);
  let ce;
  t[49] !== a || t[50] !== d || t[51] !== u
    ? ((ce = () => {
        if (!a) {
          (qe(), d(!0));
          return;
        }
        (d(!1), u());
      }),
      (t[49] = a),
      (t[50] = d),
      (t[51] = u),
      (t[52] = ce))
    : (ce = t[52]);
  let le;
  t[53] === a
    ? (le = t[54])
    : ((le = a
        ? (0, Z.jsx)(f, {
            id: `settings.chronicle.history.confirmDelete`,
            defaultMessage: `Delete`,
            description: `Inline confirmation for deleting a Computer history item`,
          })
        : (0, Z.jsx)(mt, { "aria-hidden": !0, className: `icon-2xs shrink-0` })),
      (t[53] = a),
      (t[54] = le));
  let H;
  t[55] !== o ||
  t[56] !== z ||
  t[57] !== oe ||
  t[58] !== se ||
  t[59] !== B ||
  t[60] !== ce ||
  t[61] !== le
    ? ((H = (0, Z.jsx)(J, {
        color: z,
        size: `default`,
        radius: `large`,
        className: oe,
        "data-chronicle-delete-confirming": se,
        disabled: o,
        "aria-label": B,
        onClick: ce,
        children: le,
      })),
      (t[55] = o),
      (t[56] = z),
      (t[57] = oe),
      (t[58] = se),
      (t[59] = B),
      (t[60] = ce),
      (t[61] = le),
      (t[62] = H))
    : (H = t[62]);
  let U;
  t[63] !== a || t[64] !== re || t[65] !== H
    ? ((U = (0, Z.jsx)(ee, { disableHoverOpen: a, open: re, tooltipContent: ie, children: H })),
      (t[63] = a),
      (t[64] = re),
      (t[65] = H),
      (t[66] = U))
    : (U = t[66]);
  let fe;
  t[67] !== P || t[68] !== te || t[69] !== U
    ? ((fe = (0, Z.jsxs)(`div`, { className: P, children: [te, U] })),
      (t[67] = P),
      (t[68] = te),
      (t[69] = U),
      (t[70] = fe))
    : (fe = t[70]);
  let W;
  t[71] !== M || t[72] !== fe
    ? ((W = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [M, fe],
      })),
      (t[71] = M),
      (t[72] = fe),
      (t[73] = W))
    : (W = t[73]);
  let G;
  t[74] === c.description
    ? (G = t[75])
    : ((G = (0, Z.jsx)(`p`, {
        className: `mt-[3px] text-[13px] leading-5 text-secondary`,
        children: c.description,
      })),
      (t[74] = c.description),
      (t[75] = G));
  let pe;
  t[76] !== i ||
  t[77] !== s ||
  t[78] !== c.applications ||
  t[79] !== l ||
  t[80] !== p ||
  t[81] !== m
    ? ((pe =
        c.applications.length > 0
          ? (0, Z.jsx)(`div`, {
              className: `mt-2 flex flex-wrap items-center gap-[9px]`,
              children: c.applications.map((e) =>
                (0, Z.jsx)(
                  qn,
                  {
                    application: e,
                    highlightedApplication: i,
                    isUpdatingApplication: s,
                    settings: m,
                    onApplicationObservedChange: l,
                    onHighlightApplication: p,
                  },
                  e.bundleIdentifier,
                ),
              ),
            })
          : null),
      (t[76] = i),
      (t[77] = s),
      (t[78] = c.applications),
      (t[79] = l),
      (t[80] = p),
      (t[81] = m),
      (t[82] = pe))
    : (pe = t[82]);
  let K;
  t[83] !== c.memoryFilePath || t[84] !== c.suggestion
    ? ((K =
        c.suggestion == null
          ? null
          : (0, Z.jsx)(Kn, { suggestion: c.suggestion, memoryFilePath: c.memoryFilePath })),
      (t[83] = c.memoryFilePath),
      (t[84] = c.suggestion),
      (t[85] = K))
    : (K = t[85]);
  let me;
  t[86] !== W || t[87] !== G || t[88] !== pe || t[89] !== K
    ? ((me = (0, Z.jsxs)(`div`, { className: j, children: [W, G, pe, K] })),
      (t[86] = W),
      (t[87] = G),
      (t[88] = pe),
      (t[89] = K),
      (t[90] = me))
    : (me = t[90]);
  let he;
  return (
    t[91] !== T || t[92] !== A || t[93] !== v || t[94] !== me
      ? ((he = (0, Z.jsxs)(`article`, { className: v, children: [T, A, me] })),
        (t[91] = T),
        (t[92] = A),
        (t[93] = v),
        (t[94] = me),
        (t[95] = he))
      : (he = t[95]),
    he
  );
}
function Gn(e) {
  let t = (0, er.c)(8),
    { disabled: n } = e,
    r = ne(),
    i = N(),
    a;
  t[0] !== r || t[1] !== i
    ? ((a = () => {
        let e = [
            nr.todayTasksPrompt,
            nr.standupPrompt,
            nr.findDocumentPrompt,
            nr.followUpsPrompt,
            nr.roastBehaviorPrompt,
            nr.distractionsPrompt,
            nr.dailyFeedbackPrompt,
            nr.writingStylePrompt,
            nr.writingStyleSkillPrompt,
            nr.keyboardShortcutsPrompt,
            nr.aiOpportunitiesPrompt,
            nr.commonPhrasePrompt,
            nr.focusPatternsPrompt,
            nr.resumeWorkPrompt,
          ],
          t = e[Math.floor(Math.random() * e.length)];
        t != null &&
          i({
            prefillPrompt: F({
              defaultPrompt: r.formatMessage(t),
              pluginDisplayName: r.formatMessage(Ct),
              pluginId: `${w}@${G}`,
            }),
          });
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o, s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(Me, { asset: $e })),
      (s = (0, Z.jsx)(f, {
        id: `settings.chronicle.history.askAboutHistory`,
        defaultMessage: `Ask about your history`,
        description: `Button for starting a conversation about Computer history`,
      })),
      (t[3] = o),
      (t[4] = s))
    : ((o = t[3]), (s = t[4]));
  let c;
  return (
    t[5] !== n || t[6] !== a
      ? ((c = (0, Z.jsxs)(J, {
          color: `outline`,
          size: `toolbar`,
          radius: `large`,
          disabled: n,
          onClick: a,
          children: [o, s],
        })),
        (t[5] = n),
        (t[6] = a),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Kn(e) {
  let t = (0, er.c)(19),
    { memoryFilePath: n, suggestion: r } = e,
    i = ne(),
    a = N(),
    o;
  t[0] === r.type
    ? (o = t[1])
    : ((o = (0, Z.jsx)(`div`, {
        className: `text-sm leading-5 font-medium text-default`,
        children:
          r.type === `skill`
            ? (0, Z.jsx)(f, {
                id: `settings.chronicle.history.suggestedSkill`,
                defaultMessage: `Suggested skill`,
                description: `Heading for a reusable skill suggested from Computer history`,
              })
            : (0, Z.jsx)(f, {
                id: `settings.chronicle.history.suggestedAutomation`,
                defaultMessage: `Suggested automation`,
                description: `Heading for an automation suggested from Computer history`,
              }),
      })),
      (t[0] = r.type),
      (t[1] = o));
  let s;
  t[2] === r.description
    ? (s = t[3])
    : ((s = (0, Z.jsx)(`p`, {
        className: `mt-1 text-sm leading-5 text-secondary`,
        children: r.description,
      })),
      (t[2] = r.description),
      (t[3] = s));
  let c;
  t[4] !== i || t[5] !== n || t[6] !== a || t[7] !== r
    ? ((c = () => a({ prefillPrompt: xt({ intl: i, memoryFilePath: n, suggestion: r }) })),
      (t[4] = i),
      (t[5] = n),
      (t[6] = a),
      (t[7] = r),
      (t[8] = c))
    : (c = t[8]);
  let l;
  t[9] !== r.name || t[10] !== r.type
    ? ((l =
        r.type === `skill`
          ? (0, Z.jsx)(f, {
              id: `settings.chronicle.history.createSuggestedSkill`,
              defaultMessage: `Create {name} skill`,
              description: `Action to create the named reusable skill suggested from Computer history`,
              values: { name: r.name },
            })
          : (0, Z.jsx)(f, {
              id: `settings.chronicle.history.createSuggestedAutomation`,
              defaultMessage: `Create {name} automation`,
              description: `Action to create the named automation suggested from Computer history`,
              values: { name: r.name },
            })),
      (t[9] = r.name),
      (t[10] = r.type),
      (t[11] = l))
    : (l = t[11]);
  let u;
  t[12] !== c || t[13] !== l
    ? ((u = (0, Z.jsx)(`button`, {
        className: `mt-1 cursor-interaction text-sm leading-5 font-medium text-info underline-offset-2 hover:underline hover:brightness-95`,
        type: `button`,
        onClick: c,
        children: l,
      })),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u))
    : (u = t[14]);
  let d;
  return (
    t[15] !== o || t[16] !== s || t[17] !== u
      ? ((d = (0, Z.jsxs)(`div`, {
          className: `mt-3 rounded-lg bg-text/5 px-3 py-2`,
          children: [o, s, u],
        })),
        (t[15] = o),
        (t[16] = s),
        (t[17] = u),
        (t[18] = d))
      : (d = t[18]),
    d
  );
}
function qn(e) {
  let t = (0, er.c)(46),
    {
      application: n,
      highlightedApplication: r,
      isUpdatingApplication: i,
      onApplicationObservedChange: a,
      onHighlightApplication: o,
      settings: s,
    } = e,
    c = ne(),
    [l, u] = (0, tr.useState)(!1),
    d;
  t[0] !== n.bundleIdentifier || t[1] !== s
    ? ((d = s == null || Vt(s, n.bundleIdentifier)),
      (t[0] = n.bundleIdentifier),
      (t[1] = s),
      (t[2] = d))
    : (d = t[2]);
  let p = d,
    m = s == null || i,
    h;
  t[3] !== n.bundleIdentifier || t[4] !== m || t[5] !== o
    ? ((h = (e) => {
        if (m) {
          (u(!1), o(null));
          return;
        }
        (u(e), o(e ? n.bundleIdentifier : null));
      }),
      (t[3] = n.bundleIdentifier),
      (t[4] = m),
      (t[5] = o),
      (t[6] = h))
    : (h = t[6]);
  let g;
  t[7] !== n.displayName || t[8] !== c
    ? ((g = c.formatMessage(
        {
          id: `settings.chronicle.history.openApplicationMenu`,
          defaultMessage: `Open {app} menu`,
          description: `Accessible label for opening a timeline application menu`,
        },
        { app: n.displayName },
      )),
      (t[7] = n.displayName),
      (t[8] = c),
      (t[9] = g))
    : (g = t[9]);
  let _ = !p && `grayscale`,
    v = r != null && r !== n.bundleIdentifier && `opacity-40`,
    y;
  t[10] !== _ || t[11] !== v
    ? ((y = V(
        `size-5 overflow-hidden rounded-[5px] transition-opacity duration-[120ms] ease-in-out aria-disabled:!opacity-100`,
        _,
        v,
      )),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] !== n.bundleIdentifier || t[14] !== m || t[15] !== o
    ? ((b = () => {
        m || o(n.bundleIdentifier);
      }),
      (t[13] = n.bundleIdentifier),
      (t[14] = m),
      (t[15] = o),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== o || t[18] !== l
    ? ((x = () => {
        l || o(null);
      }),
      (t[17] = o),
      (t[18] = l),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== n.displayName || t[21] !== n.iconDataURL
    ? ((S =
        n.iconDataURL == null
          ? (0, Z.jsx)(`span`, {
              className: `flex size-full items-center justify-center bg-text/5 text-[10px] font-medium text-secondary`,
              children: n.displayName.slice(0, 1),
            })
          : (0, Z.jsx)(`img`, {
              className: `size-full object-contain`,
              src: n.iconDataURL,
              alt: ``,
            })),
      (t[20] = n.displayName),
      (t[21] = n.iconDataURL),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== g || t[24] !== y || t[25] !== b || t[26] !== x || t[27] !== S
    ? ((C = (0, Z.jsx)(`button`, {
        "aria-label": g,
        className: y,
        type: `button`,
        onMouseEnter: b,
        onMouseLeave: x,
        children: S,
      })),
      (t[23] = g),
      (t[24] = y),
      (t[25] = b),
      (t[26] = x),
      (t[27] = S),
      (t[28] = C))
    : (C = t[28]);
  let w;
  t[29] !== n || t[30] !== p || t[31] !== a
    ? ((w = () => a(n, !p)), (t[29] = n), (t[30] = p), (t[31] = a), (t[32] = w))
    : (w = t[32]);
  let T;
  t[33] !== n.displayName || t[34] !== p
    ? ((T = p
        ? (0, Z.jsx)(f, {
            id: `settings.chronicle.history.excludeApplication`,
            defaultMessage: `Exclude {app} from future history`,
            description: `Timeline app action that excludes the app from future Computer history`,
            values: { app: n.displayName },
          })
        : (0, Z.jsx)(f, {
            id: `settings.chronicle.history.includeApplication`,
            defaultMessage: `Include {app} in future history`,
            description: `Timeline app action that includes the app in future Computer history`,
            values: { app: n.displayName },
          })),
      (t[33] = n.displayName),
      (t[34] = p),
      (t[35] = T))
    : (T = t[35]);
  let D;
  t[36] !== i || t[37] !== w || t[38] !== T
    ? ((D = (0, Z.jsx)(E.Item, { disabled: i, onSelect: w, children: T })),
      (t[36] = i),
      (t[37] = w),
      (t[38] = T),
      (t[39] = D))
    : (D = t[39]);
  let O;
  return (
    t[40] !== m || t[41] !== l || t[42] !== C || t[43] !== D || t[44] !== h
      ? ((O = (0, Z.jsx)(j, {
          align: `start`,
          contentClassName: `!w-max !min-w-[180px]`,
          disabled: m,
          open: l,
          sideOffset: 6,
          onOpenChange: h,
          triggerButton: C,
          children: D,
        })),
        (t[40] = m),
        (t[41] = l),
        (t[42] = C),
        (t[43] = D),
        (t[44] = h),
        (t[45] = O))
      : (O = t[45]),
    O
  );
}
function Jn(e) {
  let t = (0, er.c)(10),
    { disabled: n, onRequest: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = [
        [
          (0, Z.jsx)(
            f,
            {
              id: `settings.chronicle.history.clearTenMinutes`,
              defaultMessage: `Clear last 10 minutes`,
              description: `Clear Computer history range option`,
            },
            `last_ten_minutes`,
          ),
          `last_ten_minutes`,
        ],
        [
          (0, Z.jsx)(
            f,
            {
              id: `settings.chronicle.history.clearHour`,
              defaultMessage: `Clear last hour`,
              description: `Clear Computer history range option`,
            },
            `last_hour`,
          ),
          `last_hour`,
        ],
        [
          (0, Z.jsx)(
            f,
            {
              id: `settings.chronicle.history.clearDay`,
              defaultMessage: `Clear last day`,
              description: `Clear Computer history range option`,
            },
            `last_day`,
          ),
          `last_day`,
        ],
        [
          (0, Z.jsx)(
            f,
            {
              id: `settings.chronicle.history.clearAll`,
              defaultMessage: `Clear all`,
              description: `Clear all Computer history range option`,
            },
            `all`,
          ),
          `all`,
        ],
      ]),
      (t[0] = i))
    : (i = t[0]);
  let a = i,
    o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(f, {
        id: `settings.chronicle.history.clear`,
        defaultMessage: `Clear history`,
        description: `Clear Computer history menu button`,
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Z.jsx)(ce, { disabled: n, children: o })), (t[2] = n), (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = a.map((e) => {
        let [t, n] = e;
        return (0, Z.jsx)(
          E.Item,
          {
            className: n === `all` ? `!text-chart-red` : void 0,
            onSelect: () => r({ scope: n, interval: null }),
            children: t,
          },
          n,
        );
      })),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== n || t[7] !== s || t[8] !== c
      ? ((l = (0, Z.jsx)(j, {
          align: `end`,
          contentWidth: `menu`,
          disabled: n,
          triggerButton: s,
          children: c,
        })),
        (t[6] = n),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Yn(e) {
  let t = (0, er.c)(4),
    { item: n } = e,
    r = ne(),
    i = new Date(n.interval.startMs);
  if (n.summaryLevel === `ten_minute`)
    return (0, Z.jsx)(Z.Fragment, {
      children: r.formatTime(i, { hour: `numeric`, minute: `2-digit` }),
    });
  let a = i.getHours();
  if (a >= 4 && a < 10) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(f, {
            id: `settings.chronicle.history.morning`,
            defaultMessage: `Morning`,
            description: `Morning label for a six-hour Computer history summary`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (a >= 10 && a < 16) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(f, {
            id: `settings.chronicle.history.afternoon`,
            defaultMessage: `Afternoon`,
            description: `Afternoon label for a six-hour Computer history summary`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a >= 16 && a < 22) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(f, {
            id: `settings.chronicle.history.evening`,
            defaultMessage: `Evening`,
            description: `Evening label for a six-hour Computer history summary`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let o;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Z.jsx)(f, {
          id: `settings.chronicle.history.overnight`,
          defaultMessage: `Overnight`,
          description: `Overnight label for a six-hour Computer history summary`,
        })),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function Xn(e, t) {
  let n = { hour: `numeric`, minute: `2-digit` },
    r = t.formatTime(new Date(e.interval.startMs), n),
    i = t.formatTime(new Date(e.interval.endMs), n);
  return t.formatMessage(
    {
      id: `settings.chronicle.history.timeRange`,
      defaultMessage: `{start} – {end}`,
      description: `Local time range for a Computer history item`,
    },
    { start: r, end: i },
  );
}
function Zn(e) {
  let t = (0, er.c)(7),
    { label: n } = e,
    r = ne();
  if (n.kind === `today`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(f, {
            id: `settings.chronicle.history.today`,
            defaultMessage: `Today`,
            description: `Computer history group label for today`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.kind === `yesterday`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(f, {
            id: `settings.chronicle.history.yesterday`,
            defaultMessage: `Yesterday`,
            description: `Computer history group label for yesterday`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  t[2] !== r || t[3] !== n.date
    ? ((i = r.formatDate(n.date, { weekday: `long`, month: `long`, day: `numeric` })),
      (t[2] = r),
      (t[3] = n.date),
      (t[4] = i))
    : (i = t[4]);
  let a;
  return (
    t[5] === i
      ? (a = t[6])
      : ((a = (0, Z.jsx)(Z.Fragment, { children: i })), (t[5] = i), (t[6] = a)),
    a
  );
}
function Qn(e, t) {
  let n = new Map();
  for (let t of e) {
    let e = new Date(t.interval.startMs),
      r = `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`,
      i = n.get(r) ?? [];
    (i.push(t), n.set(r, i));
  }
  let r = new Date(t);
  return (
    r.setDate(t.getDate() - 1),
    [...n.entries()].flatMap(([e, n]) => {
      let i = n[0];
      if (i == null) return [];
      let a = new Date(i.interval.startMs),
        o;
      return (
        (o = $n(a, t)
          ? { kind: `today` }
          : $n(a, r)
            ? { kind: `yesterday` }
            : { kind: `date`, date: a }),
        [{ key: e, label: o, items: n }]
      );
    })
  );
}
function $n(e, t) {
  return (
    e.getFullYear() === t.getFullYear() &&
    e.getMonth() === t.getMonth() &&
    e.getDate() === t.getDate()
  );
}
var er,
  tr,
  Z,
  nr,
  rr = e(() => {
    ((er = Ve()),
      we(),
      C(),
      ut(),
      L(),
      c(),
      (tr = t(o(), 1)),
      U(),
      _t(),
      St(),
      a(),
      ve(),
      je(),
      Be(),
      k(),
      We(),
      d(),
      fe(),
      M(),
      ct(),
      dt(),
      ie(),
      Ke(),
      B(),
      W(),
      S(),
      fn(),
      Bt(),
      Tt(),
      Bn(),
      (Z = Ne()),
      (nr = at({
        todayTasksPrompt: {
          id: `settings.chronicle.history.todayTasksPrompt`,
          defaultMessage: `Give me a list of tasks I’ve worked on today and their status`,
          description: `Suggested conversation prompt asking about today's tasks and their status`,
        },
        standupPrompt: {
          id: `settings.chronicle.history.standupPrompt`,
          defaultMessage: `Prepare a summary of what I did yesterday for standup`,
          description: `Suggested conversation prompt requesting a standup summary from yesterday's Computer history`,
        },
        findDocumentPrompt: {
          id: `settings.chronicle.history.findDocumentPrompt`,
          defaultMessage: `Where can I find the proposal document I was looking for earlier today?`,
          description: `Suggested conversation prompt asking to locate a recently edited document`,
        },
        followUpsPrompt: {
          id: `settings.chronicle.history.followUpsPrompt`,
          defaultMessage: `Who contacted me today that I need to follow up with?`,
          description: `Suggested conversation prompt asking who contacted the user today and needs a follow-up`,
        },
        roastBehaviorPrompt: {
          id: `settings.chronicle.history.roastBehaviorPrompt`,
          defaultMessage: `Roast my computer behavior`,
          description: `Suggested conversation prompt requesting a humorous critique of the user's computer activity`,
        },
        distractionsPrompt: {
          id: `settings.chronicle.history.distractionsPrompt`,
          defaultMessage: `How often do I get distracted, and what usually pulls me off task?`,
          description: `Suggested conversation prompt asking how frequently the user gets distracted and what causes those distractions`,
        },
        dailyFeedbackPrompt: {
          id: `settings.chronicle.history.dailyFeedbackPrompt`,
          defaultMessage: `Give me feedback on how I operate day to day`,
          description: `Suggested conversation prompt requesting feedback on the user's everyday work habits`,
        },
        writingStylePrompt: {
          id: `settings.chronicle.history.writingStylePrompt`,
          defaultMessage: `Analyse the writing samples you have from me and describe my writing style with examples and guidelines`,
          description: `Suggested conversation prompt asking to analyze the user's writing style from Computer history`,
        },
        writingStyleSkillPrompt: {
          id: `settings.chronicle.history.writingStyleSkillPrompt`,
          defaultMessage: `Create a reusable skill that writes like me`,
          description: `Suggested conversation prompt asking to create a reusable skill that matches the user's writing style`,
        },
        keyboardShortcutsPrompt: {
          id: `settings.chronicle.history.keyboardShortcutsPrompt`,
          defaultMessage: `What keyboard shortcuts do I use most? And which should I be using more?`,
          description: `Suggested conversation prompt asking about frequently used keyboard shortcuts and shortcuts the user should use more often`,
        },
        aiOpportunitiesPrompt: {
          id: `settings.chronicle.history.aiOpportunitiesPrompt`,
          defaultMessage: `Where am I being ineffective, and what should I be using AI for instead?`,
          description: `Suggested conversation prompt asking how the user could improve their productivity by using artificial intelligence`,
        },
        commonPhrasePrompt: {
          id: `settings.chronicle.history.commonPhrasePrompt`,
          defaultMessage: `What is my most commonly used phrase?`,
          description: `Suggested conversation prompt asking which phrase the user repeats most frequently in their computer activity`,
        },
        focusPatternsPrompt: {
          id: `settings.chronicle.history.focusPatternsPrompt`,
          defaultMessage: `How do I split my time between focused work, switching tabs, and returning to unfinished tasks?`,
          description: `Suggested conversation prompt asking about focused work and task-switching patterns`,
        },
        resumeWorkPrompt: {
          id: `settings.chronicle.history.resumeWorkPrompt`,
          defaultMessage: `What was I working on before my last break?`,
          description: `Suggested conversation prompt asking to resume previous work`,
        },
      })));
  });
function ir() {
  let e = (0, ar.c)(5),
    t = i(Se),
    n = ae(P.chronicleMenuBarIndicatorEnabled),
    a = r(),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, or.jsx)(f, {
        id: `settings.chronicle.showIndicatorInMenuBar`,
        defaultMessage: `Show indicator in menu bar`,
        description: `Label for showing the Computer history recording dot beside the app's macOS menu bar icon`,
      })),
      (e[0] = o))
    : (o = e[0]);
  let s;
  return (
    e[1] !== n || e[2] !== a || e[3] !== t
      ? ((s = (0, or.jsx)(Xe, {
          className: `select-none`,
          label: o,
          control: (e) =>
            (0, or.jsx)(z, {
              ...e,
              checked: n,
              disabled: a,
              onChange: (e) => {
                ge(t, P.chronicleMenuBarIndicatorEnabled, e).catch(() => {
                  t.get(Re).danger(
                    (0, or.jsx)(f, {
                      id: `settings.chronicle.showIndicatorInMenuBarError`,
                      defaultMessage: `Computer history indicator visibility could not be updated`,
                      description: `Toast shown when saving the Computer history menu bar indicator visibility preference fails`,
                    }),
                  );
                });
              },
            }),
        })),
        (e[1] = n),
        (e[2] = a),
        (e[3] = t),
        (e[4] = s))
      : (s = e[4]),
    s
  );
}
var ar,
  or,
  sr = e(() => {
    ((ar = Ve()), L(), c(), U(), Be(), n(), Ke(), Ye(), he(), (or = Ne()));
  });
async function cr(e, { hostId: t, setMemoryFeatureEnabled: n, writeMemoryConfig: r }) {
  let { data: i } = e.get(H, t),
    { data: a } = e.get(et, t),
    o = a == null ? void 0 : De(a);
  if (i?.configReadSucceeded !== !0 || o == null)
    throw Error(`Memories prerequisites are unavailable`);
  let s = i.config,
    c = it(s),
    l = o.enabled === !0,
    u = l && c.generateMemories && c.useMemories;
  if (
    !(await lr({
      memoryFeatureEnabled: l,
      generateMemoriesEnabled: c.generateMemories,
      useMemoriesEnabled: c.useMemories,
      setMemoryFeatureEnabled: n,
      writeMemoryConfig: r,
    }))
  )
    return;
  let d = {
    chronicleResearchPreviewEnabled: lt(s, m) === !0,
    chronicleResearchPreviewVisible: !1,
    isMemoryFeatureEnabled: l,
    memoryConfig: c,
  };
  Lt({
    productLogger: e.get(Ge),
    previousEnabled: u,
    selectedEnabled: !0,
    settingName: `memories`,
    state: zt(d, {
      isMemoryFeatureEnabled: !0,
      memoryConfigPatch: { generateMemories: !0, useMemories: !0 },
    }),
  });
}
async function lr({
  memoryFeatureEnabled: e,
  generateMemoriesEnabled: t,
  useMemoriesEnabled: n,
  setMemoryFeatureEnabled: r,
  writeMemoryConfig: i,
}) {
  let a = [],
    o = [];
  (e || a.push(r()),
    t || o.push({ keyPath: `memories.generate_memories`, value: !0 }),
    n || o.push({ keyPath: `memories.use_memories`, value: !0 }),
    o.length > 0 && a.push(i(o)));
  let s = await Promise.all(a);
  if (s.some((e) => e.status === `okOverridden`)) throw Error(`Memories settings are overridden`);
  return s.length > 0;
}
async function ur({ enableMemories: e, getChronicleState: t }) {
  await e();
  let n = await t().catch(() => null);
  return n?.enabled === !0
    ? n.recorderState === `running` ||
      n.recorderState === `paused` ||
      n.activationState === `starting`
      ? `already_active`
      : `retry_required`
    : `enable_required`;
}
var dr,
  fr,
  pr,
  mr = e(() => {
    (L(),
      c(),
      g(),
      Ae(),
      se(),
      h(),
      Te(),
      Ke(),
      Pt(),
      te(),
      (dr = Fe(Se, (e, { get: t }) => t(H, e).data?.configReadSucceeded === !0)),
      (fr = Fe(Se, (e, { get: t }) => {
        let { data: n } = t(et, e);
        return n != null && De(n) != null;
      })),
      (pr = Fe(Se, (e, { get: t }) => {
        let { data: n } = t(H, e),
          { data: r } = t(et, e),
          i = r == null ? void 0 : De(r),
          a = it(n?.config);
        return (
          n?.configReadSucceeded === !0 && i?.enabled === !0 && a.generateMemories && a.useMemories
        );
      })));
  });
function hr(e) {
  if (e instanceof AggregateError) {
    for (let t of e.errors) {
      let e = hr(t);
      if (e != null) return e;
    }
    return null;
  }
  if (!(e instanceof Error)) return null;
  let t = e.message.match(gr)?.[1];
  if (t != null) return { code: t, source: `computer_use` };
  let n = e.message.match(_r)?.[1];
  return n == null ? null : { code: n, source: `os_status` };
}
var gr,
  _r,
  vr = e(() => {
    ((gr = /^Codex Computer Use Apple Event error (-?\d+):/),
      (_r = /^AE.+ failed with (-?\d+)(?:\s|$)/));
  });
function yr(e) {
  let t = (0, Ar.c)(43),
    { initialApplicationMenuOpen: n, onOpenChange: r, onSaved: a, open: o } = e,
    s = n !== void 0 && n,
    c = i(Se),
    l = ne(),
    [u, d] = (0, Mr.useState)(s),
    p = o && u,
    m;
  t[0] === p ? (m = t[1]) : ((m = { enabled: p }), (t[0] = p), (t[1] = m));
  let { data: h, isError: g, isLoading: _ } = v(Ft, m),
    [y, x] = (0, Mr.useState)(null),
    [S, C] = (0, Mr.useState)(``),
    [w, T] = (0, Mr.useState)(!1),
    [E, D] = (0, Mr.useState)(null),
    O;
  t[2] === r
    ? (O = t[3])
    : ((O = () => {
        (x(null), d(!1), D(null), C(``), T(!1), r(!1));
      }),
      (t[2] = r),
      (t[3] = O));
  let k = O,
    M;
  t[4] !== k || t[5] !== r
    ? ((M = (e) => {
        if (!e) {
          k();
          return;
        }
        r(!0);
      }),
      (t[4] = k),
      (t[5] = r),
      (t[6] = M))
    : (M = t[6]);
  let N = M,
    ee;
  t[7] === o ? (ee = t[8]) : ((ee = { enabled: o }), (t[7] = o), (t[8] = ee));
  let { data: P, error: F, isError: L, isLoading: R, refetch: te } = v(Rt, ee),
    re;
  t[9] === F ? (re = t[10]) : ((re = hr(F)?.code), (t[9] = F), (t[10] = re));
  let ie = re,
    z = y ?? (P == null ? null : Wt(P)),
    ae = z?.applicationBundleIdentifiers ?? [],
    oe;
  t[11] === o ? (oe = t[12]) : ((oe = { enabled: o }), (t[11] = o), (t[12] = oe));
  let { data: se } = I(kt, ae, oe),
    B = v(Nt),
    ce = new Map([...(se ?? []), ...(h ?? [])].map(Sr)),
    le =
      z == null
        ? []
        : z.applicationBundleIdentifiers.map(
            (e) =>
              ce.get(e) ?? {
                bundleIdentifier: e,
                displayName: e.split(`.`).at(-1) ?? e,
                iconDataURL: null,
                isWebBrowser: !1,
              },
          ),
    ue = () => {
      if (z == null) return;
      let e = kr(S);
      e != null &&
        (z.urlDomains.includes(e) || x({ ...z, urlDomains: [...z.urlDomains, e] }), C(``), T(!1));
    },
    V = tt,
    H;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = {
        "aria-describedby": void 0,
        onOpenAutoFocus: (e) => {
          e.currentTarget instanceof HTMLElement && D(e.currentTarget);
        },
      }),
      (t[13] = H))
    : (H = t[13]);
  let U = A,
    de = (e) => {
      (e.preventDefault(),
        z != null &&
          !B.isPending &&
          B.mutate(z, {
            onSuccess: () => {
              (k(), a?.());
            },
            onError: () => {
              c.get(Re).danger(
                (0, Q.jsx)(f, {
                  id: `settings.chronicle.permissions.saveErrorToast`,
                  defaultMessage: `Computer history permissions could not be saved`,
                  description: `Toast shown when saving Computer history permissions fails`,
                }),
              );
            },
          }));
    },
    fe = be,
    W;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Q.jsx)(Qe, {
        asChild: !0,
        children: (0, Q.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, Q.jsx)(f, {
            id: `settings.chronicle.permissions.dialogTitle`,
            defaultMessage: `Computer history permissions`,
            description: `Computer history permissions dialog title`,
          }),
        }),
      })),
      (t[14] = W))
    : (W = t[14]);
  let G = L
      ? (0, Q.jsxs)(`div`, {
          className: `flex min-h-[300px] flex-col items-center justify-center gap-3 text-center text-sm text-secondary`,
          children: [
            (0, Q.jsx)(`div`, {
              className: `flex flex-col gap-1`,
              children: (0, Q.jsx)(f, {
                id: `settings.chronicle.permissions.errorWithOptionalCodeAndRestartGuidance`,
                defaultMessage: `<line>Computer history permissions could not be loaded{hasCode, select, yes { (error {code})} other {}}.</line><line>If the issue persists, please restart ChatGPT.</line>`,
                description: `Computer history permissions error state with an optional technical error code, advising the user to restart ChatGPT if the issue persists`,
                values: { code: ie ?? ``, hasCode: ie == null ? `no` : `yes`, line: xr },
              }),
            }),
            (0, Q.jsx)(J, {
              color: `outline`,
              onClick: () => void te(),
              children: (0, Q.jsx)(f, {
                id: `settings.chronicle.permissions.retry`,
                defaultMessage: `Try again`,
                description: `Retry loading Computer history permissions`,
              }),
            }),
          ],
        })
      : z == null || R
        ? (0, Q.jsx)(`div`, {
            className: `py-16 text-center text-sm text-secondary`,
            children: (0, Q.jsx)(f, {
              id: `settings.chronicle.permissions.loading`,
              defaultMessage: `Loading permissions…`,
              description: `Computer history permissions loading state`,
            }),
          })
        : (0, Q.jsxs)(`div`, {
            className: `grid min-h-0 grid-cols-2 gap-3 max-sm:grid-cols-1`,
            children: [
              (0, Q.jsxs)(wr, {
                kind: `apps`,
                behavior: z.defaultApplicationBehavior,
                onBehaviorChange: (e) => x({ ...z, defaultApplicationBehavior: e }),
                children: [
                  (0, Q.jsx)(j, {
                    contentWidth: `menuWide`,
                    contentMaxHeight: `tall`,
                    open: u,
                    portalContainer: E,
                    onContentFocus: br,
                    onOpenChange: d,
                    triggerButton: (0, Q.jsxs)(J, {
                      color: `ghostActive`,
                      size: `toolbar`,
                      className: `mx-1 mt-1 !h-10 w-[calc(100%-0.5rem)] !justify-start !gap-2.5 !border-0`,
                      children: [
                        (0, Q.jsx)(`span`, {
                          className: `flex size-6 items-center justify-center text-secondary`,
                          children: (0, Q.jsx)(ye, { className: `!size-[18px]` }),
                        }),
                        (0, Q.jsx)(f, {
                          id: `settings.chronicle.permissions.addApp`,
                          defaultMessage: `Add app`,
                          description: `Add application to Computer history permissions`,
                        }),
                      ],
                    }),
                    children: (0, Q.jsx)(Cr, {
                      applications: h ?? [],
                      isError: g,
                      isLoading: _,
                      selectedBundleIdentifiers: z.applicationBundleIdentifiers,
                      onSelect: (e) =>
                        x({
                          ...z,
                          applicationBundleIdentifiers: [
                            ...z.applicationBundleIdentifiers,
                            e.bundleIdentifier,
                          ],
                        }),
                    }),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-1 pb-1`,
                    children: le.map((e) =>
                      (0, Q.jsx)(
                        Dr,
                        {
                          application: e,
                          subtitle:
                            e.isWebBrowser && z.defaultApplicationBehavior === `do_not_observe`
                              ? Or(z.defaultURLBehavior, z.urlDomains.length)
                              : null,
                          onRemove: () =>
                            x({
                              ...z,
                              applicationBundleIdentifiers: z.applicationBundleIdentifiers.filter(
                                (t) => t !== e.bundleIdentifier,
                              ),
                            }),
                        },
                        e.bundleIdentifier,
                      ),
                    ),
                  }),
                ],
              }),
              (0, Q.jsxs)(wr, {
                kind: `websites`,
                behavior: z.defaultURLBehavior,
                onBehaviorChange: (e) => x({ ...z, defaultURLBehavior: e }),
                children: [
                  w
                    ? (0, Q.jsxs)(`div`, {
                        className: `mx-1 mt-1 grid min-h-10 grid-cols-[24px_minmax(0,1fr)_auto] items-center gap-2 rounded-lg py-[5px] ps-2 pe-1.5`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `flex size-6 items-center justify-center rounded-lg bg-text/5 text-tertiary`,
                            children: (0, Q.jsx)(Me, { "aria-hidden": !1, asset: b }),
                          }),
                          (0, Q.jsx)(`input`, {
                            autoFocus: !0,
                            className: `min-w-0 flex-1 bg-transparent text-[13px] leading-[17px] outline-none`,
                            value: S,
                            onChange: (e) => C(e.currentTarget.value),
                            onKeyDown: (e) => {
                              if (e.key === `Escape`) {
                                (C(``), T(!1));
                                return;
                              }
                              e.key === `Enter` && (e.preventDefault(), ue());
                            },
                            placeholder: l.formatMessage({
                              id: `settings.chronicle.permissions.domainPlaceholder`,
                              defaultMessage: `example.com`,
                              description: `Website domain input placeholder`,
                            }),
                            "aria-label": l.formatMessage({
                              id: `settings.chronicle.permissions.domainLabel`,
                              defaultMessage: `Website domain`,
                              description: `Website domain input accessible label`,
                            }),
                          }),
                          (0, Q.jsx)(J, {
                            color: `secondary`,
                            size: `composerSm`,
                            radius: `large`,
                            type: `button`,
                            onClick: ue,
                            children: (0, Q.jsx)(f, {
                              id: `settings.chronicle.permissions.saveWebsite`,
                              defaultMessage: `Save`,
                              description: `Save a website in Computer history permissions`,
                            }),
                          }),
                        ],
                      })
                    : (0, Q.jsxs)(J, {
                        color: `ghostActive`,
                        size: `toolbar`,
                        className: `mx-1 mt-1 !h-10 w-[calc(100%-0.5rem)] !justify-start !gap-2.5 !border-0`,
                        onClick: () => T(!0),
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `flex size-6 items-center justify-center text-secondary`,
                            children: (0, Q.jsx)(ye, { className: `!size-[18px]` }),
                          }),
                          (0, Q.jsx)(f, {
                            id: `settings.chronicle.permissions.addWebsite`,
                            defaultMessage: `Add website`,
                            description: `Add website to Computer history permissions`,
                          }),
                        ],
                      }),
                  (0, Q.jsx)(`div`, {
                    className: `flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-1 pb-1`,
                    children: z.urlDomains.map((e) =>
                      (0, Q.jsx)(
                        Tr,
                        {
                          icon: (0, Q.jsx)(`span`, {
                            className: `flex size-6 shrink-0 items-center justify-center rounded-lg bg-text/5 text-secondary`,
                            children: (0, Q.jsx)(Me, {
                              className: `text-secondary`,
                              "aria-hidden": !1,
                              asset: b,
                            }),
                          }),
                          label: e,
                          onRemove: () =>
                            x({ ...z, urlDomains: z.urlDomains.filter((t) => t !== e) }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
    pe;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Q.jsx)(`p`, {
        className: `mt-3 text-xs leading-[17px] text-secondary`,
        children: (0, Q.jsx)(on, {}),
      })),
      (t[15] = pe))
    : (pe = t[15]);
  let K;
  t[16] !== fe || t[17] !== W || t[18] !== G
    ? ((K = (0, Q.jsxs)(fe, { children: [W, G, pe] })),
      (t[16] = fe),
      (t[17] = W),
      (t[18] = G),
      (t[19] = K))
    : (K = t[19]);
  let me;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Q.jsx)(f, {
        id: `settings.chronicle.permissions.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel Computer history permission changes`,
      })),
      (t[20] = me))
    : (me = t[20]);
  let he;
  t[21] === k
    ? (he = t[22])
    : ((he = (0, Q.jsx)(J, {
        color: `ghost`,
        className: `enabled:hover:!text-default`,
        type: `button`,
        onClick: k,
        children: me,
      })),
      (t[21] = k),
      (t[22] = he));
  let ge = z == null,
    ve;
  t[23] === a
    ? (ve = t[24])
    : ((ve =
        a == null
          ? (0, Q.jsx)(f, {
              id: `settings.chronicle.permissions.done`,
              defaultMessage: `Done`,
              description: `Save Computer history permission changes`,
            })
          : (0, Q.jsx)(f, {
              id: `settings.chronicle.permissions.continue`,
              defaultMessage: `Continue`,
              description: `Save initial Computer history permissions and continue turning on Computer history`,
            })),
      (t[23] = a),
      (t[24] = ve));
  let xe;
  t[25] !== B.isPending || t[26] !== ge || t[27] !== ve
    ? ((xe = (0, Q.jsx)(J, {
        color: `primary`,
        loading: B.isPending,
        disabled: ge,
        type: `submit`,
        children: ve,
      })),
      (t[25] = B.isPending),
      (t[26] = ge),
      (t[27] = ve),
      (t[28] = xe))
    : (xe = t[28]);
  let q;
  t[29] !== he || t[30] !== xe
    ? ((q = (0, Q.jsx)(be, {
        children: (0, Q.jsxs)(_e, { className: `gap-3`, children: [he, xe] }),
      })),
      (t[29] = he),
      (t[30] = xe),
      (t[31] = q))
    : (q = t[31]);
  let Ce;
  t[32] !== U || t[33] !== de || t[34] !== K || t[35] !== q
    ? ((Ce = (0, Q.jsxs)(U, {
        as: `form`,
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-4rem)] min-h-0 overflow-y-auto !p-5`,
        onSubmit: de,
        children: [K, q],
      })),
      (t[32] = U),
      (t[33] = de),
      (t[34] = K),
      (t[35] = q),
      (t[36] = Ce))
    : (Ce = t[36]);
  let we;
  return (
    t[37] !== V || t[38] !== N || t[39] !== o || t[40] !== H || t[41] !== Ce
      ? ((we = (0, Q.jsx)(V, {
          open: o,
          onOpenChange: N,
          showDialogClose: !1,
          contentOverflow: `visible`,
          contentProps: H,
          size: `xwide`,
          children: Ce,
        })),
        (t[37] = V),
        (t[38] = N),
        (t[39] = o),
        (t[40] = H),
        (t[41] = Ce),
        (t[42] = we))
      : (we = t[42]),
    we
  );
}
function br(e) {
  e.target === e.currentTarget &&
    e.currentTarget.querySelector(`input`)?.focus({ preventScroll: !0 });
}
function xr(e) {
  return (0, Q.jsx)(`div`, { children: e });
}
function Sr(e) {
  return [e.bundleIdentifier, e];
}
function Cr(e) {
  let t = (0, Ar.c)(21),
    { applications: n, isError: r, isLoading: i, onSelect: a, selectedBundleIdentifiers: o } = e,
    s = ne(),
    [c, l] = (0, Mr.useState)(``),
    u;
  if (
    t[0] !== n ||
    t[1] !== s ||
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== c ||
    t[6] !== o
  ) {
    let e = c.trim().toLocaleLowerCase(),
      d;
    t[8] === o ? (d = t[9]) : ((d = new Set(o)), (t[8] = o), (t[9] = d));
    let p = d,
      m;
    t[10] === p ? (m = t[11]) : ((m = (e) => !p.has(e.bundleIdentifier)), (t[10] = p), (t[11] = m));
    let h = (0, jr.default)(n, `bundleIdentifier`).filter(m),
      g = h.filter(
        (t) =>
          e === `` ||
          t.displayName.toLocaleLowerCase().includes(e) ||
          t.bundleIdentifier.toLocaleLowerCase().includes(e),
      ),
      _;
    t[12] === s
      ? (_ = t[13])
      : ((_ = s.formatMessage({
          id: `settings.chronicle.permissions.searchAppsLabel`,
          defaultMessage: `Search apps`,
          description: `Accessible label for searching Computer history applications`,
        })),
        (t[12] = s),
        (t[13] = _));
    let v;
    t[14] === s
      ? (v = t[15])
      : ((v = s.formatMessage({
          id: `settings.chronicle.permissions.searchApps`,
          defaultMessage: `Search apps`,
          description: `Placeholder for searching Computer history applications`,
        })),
        (t[14] = s),
        (t[15] = v));
    let y;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (e) => l(e.currentTarget.value)), (t[16] = y))
      : (y = t[16]);
    let b;
    (t[17] !== c || t[18] !== _ || t[19] !== v
      ? ((b = (0, Q.jsx)(E.SearchInput, {
          autoFocus: !0,
          "aria-label": _,
          placeholder: v,
          value: c,
          onChange: y,
        })),
        (t[17] = c),
        (t[18] = _),
        (t[19] = v),
        (t[20] = b))
      : (b = t[20]),
      (u = (0, Q.jsxs)(Q.Fragment, {
        children: [
          b,
          i
            ? (0, Q.jsx)(E.Message, {
                children: (0, Q.jsx)(f, {
                  id: `settings.chronicle.permissions.loadingApps`,
                  defaultMessage: `Loading apps…`,
                  description: `Shown while detected Computer history applications are loading`,
                }),
              })
            : r
              ? (0, Q.jsx)(E.Message, {
                  children: (0, Q.jsx)(f, {
                    id: `settings.chronicle.permissions.appsError`,
                    defaultMessage: `Detected apps could not be loaded`,
                    description: `Shown when detected Computer history applications cannot be loaded`,
                  }),
                })
              : g.length === 0
                ? (0, Q.jsx)(E.Message, {
                    children:
                      h.length === 0
                        ? (0, Q.jsx)(f, {
                            id: `settings.chronicle.permissions.allAppsAdded`,
                            defaultMessage: `All detected apps are added`,
                            description: `Shown when no more detected apps can be added`,
                          })
                        : (0, Q.jsx)(f, {
                            id: `settings.chronicle.permissions.noAppsFound`,
                            defaultMessage: `No apps found`,
                            description: `Shown when no detected apps match the search`,
                          }),
                  })
                : g.map((e) =>
                    (0, Q.jsx)(
                      E.Item,
                      { onSelect: () => a(e), children: (0, Q.jsx)(Er, { application: e }) },
                      e.bundleIdentifier,
                    ),
                  ),
        ],
      })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = c),
      (t[6] = o),
      (t[7] = u));
  } else u = t[7];
  return u;
}
function wr(e) {
  let t = (0, Ar.c)(31),
    { behavior: n, children: r, kind: i, onBehaviorChange: a } = e,
    o;
  t[0] !== n || t[1] !== i
    ? ((o = (0, Q.jsx)(cn, { behavior: n, kind: i })), (t[0] = n), (t[1] = i), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(rt, { className: `icon-2xs text-tertiary` })), (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = (0, Q.jsxs)(J, {
        color: `ghostActive`,
        size: `compact`,
        className: `-ms-2 gap-[7px] self-start !border-0 !text-[14px] !leading-5 !font-medium tracking-normal`,
        children: [o, s],
      })),
      (t[4] = o),
      (t[5] = c));
  let l = n === `observe` ? Je : void 0,
    u;
  t[6] === a ? (u = t[7]) : ((u = () => a(`observe`)), (t[6] = a), (t[7] = u));
  let d;
  t[8] === i
    ? (d = t[9])
    : ((d = (0, Q.jsx)(cn, { behavior: `observe`, kind: i })), (t[8] = i), (t[9] = d));
  let f;
  t[10] !== l || t[11] !== u || t[12] !== d
    ? ((f = (0, Q.jsx)(E.Item, { RightIcon: l, onSelect: u, children: d })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let p = n === `do_not_observe` ? Je : void 0,
    m;
  t[14] === a ? (m = t[15]) : ((m = () => a(`do_not_observe`)), (t[14] = a), (t[15] = m));
  let h;
  t[16] === i
    ? (h = t[17])
    : ((h = (0, Q.jsx)(cn, { behavior: `do_not_observe`, kind: i })), (t[16] = i), (t[17] = h));
  let g;
  t[18] !== h || t[19] !== p || t[20] !== m
    ? ((g = (0, Q.jsx)(E.Item, { RightIcon: p, onSelect: m, children: h })),
      (t[18] = h),
      (t[19] = p),
      (t[20] = m),
      (t[21] = g))
    : (g = t[21]);
  let _;
  t[22] !== g || t[23] !== c || t[24] !== f
    ? ((_ = (0, Q.jsxs)(j, { contentWidth: `menu`, triggerButton: c, children: [f, g] })),
      (t[22] = g),
      (t[23] = c),
      (t[24] = f),
      (t[25] = _))
    : (_ = t[25]);
  let v;
  t[26] === r
    ? (v = t[27])
    : ((v = (0, Q.jsx)(`div`, {
        className: `flex h-[250px] min-h-0 flex-col overflow-visible rounded-xl border border-default bg-text/[0.025]`,
        children: r,
      })),
      (t[26] = r),
      (t[27] = v));
  let y;
  return (
    t[28] !== _ || t[29] !== v
      ? ((y = (0, Q.jsxs)(`section`, {
          className: `flex min-h-0 flex-col gap-2`,
          children: [_, v],
        })),
        (t[28] = _),
        (t[29] = v),
        (t[30] = y))
      : (y = t[30]),
    y
  );
}
function Tr(e) {
  let t = (0, Ar.c)(17),
    { icon: n, label: r, onRemove: i, subtitle: a } = e,
    o = ne(),
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = (0, Q.jsx)(`span`, { className: `truncate`, children: r })), (t[0] = r), (t[1] = s));
  let c;
  t[2] === a
    ? (c = t[3])
    : ((c =
        a == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `truncate text-[11px] leading-[15px] text-secondary`,
              children: a,
            })),
      (t[2] = a),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, Q.jsxs)(`div`, { className: `flex min-w-0 flex-col`, children: [s, c] })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === o
    ? (u = t[8])
    : ((u = o.formatMessage({
        id: `settings.chronicle.permissions.remove`,
        defaultMessage: `Remove`,
        description: `Remove a Computer history permission item`,
      })),
      (t[7] = o),
      (t[8] = u));
  let d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(Ee, {})), (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== i || t[11] !== u
    ? ((f = (0, Q.jsx)(J, {
        color: `ghost`,
        size: `iconSm`,
        uniform: !0,
        className: `!size-6 !rounded-lg !p-0 !text-secondary opacity-0 transition-opacity group-focus-within/permission:opacity-100 group-hover/permission:opacity-100 focus-visible:opacity-100 enabled:hover:!text-default [&>svg]:!size-3`,
        "aria-label": u,
        onClick: i,
        children: d,
      })),
      (t[10] = i),
      (t[11] = u),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== n || t[14] !== l || t[15] !== f
      ? ((p = (0, Q.jsxs)(`div`, {
          className: `group/permission grid min-h-10 shrink-0 grid-cols-[24px_minmax(0,1fr)_24px] items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-[17px] focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover`,
          children: [n, l, f],
        })),
        (t[13] = n),
        (t[14] = l),
        (t[15] = f),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function Er(e) {
  let t = (0, Ar.c)(8),
    { application: n } = e,
    r;
  t[0] !== n.displayName || t[1] !== n.iconDataURL
    ? ((r =
        n.iconDataURL == null
          ? (0, Q.jsx)(`span`, {
              className: `flex size-6 shrink-0 items-center justify-center rounded-lg bg-text/5 text-[10px]`,
              "aria-hidden": `true`,
              children: n.displayName.slice(0, 1),
            })
          : (0, Q.jsx)(`img`, {
              className: `size-6 shrink-0 object-contain`,
              src: n.iconDataURL,
              alt: ``,
            })),
      (t[0] = n.displayName),
      (t[1] = n.iconDataURL),
      (t[2] = r))
    : (r = t[2]);
  let i;
  t[3] === n.displayName
    ? (i = t[4])
    : ((i = (0, Q.jsx)(`span`, { className: `truncate`, children: n.displayName })),
      (t[3] = n.displayName),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Q.jsxs)(`span`, {
          className: `flex min-w-0 items-center gap-2.5`,
          children: [r, i],
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Dr(e) {
  let t = (0, Ar.c)(13),
    { application: n, onRemove: r, subtitle: i } = e,
    a;
  t[0] === n.bundleIdentifier
    ? (a = t[1])
    : ((a = { kind: `appId`, appId: n.bundleIdentifier }), (t[0] = n.bundleIdentifier), (t[1] = a));
  let o = yt(a),
    s = n.iconDataURL == null ? (o?.appPath ?? null) : null,
    c;
  t[2] === s ? (c = t[3]) : ((c = { appPath: s }), (t[2] = s), (t[3] = c));
  let { iconSmall: l } = ft(c),
    u = n.iconDataURL ?? l,
    d;
  t[4] !== n.displayName || t[5] !== u || t[6] !== o?.displayName
    ? ((d = u
        ? (0, Q.jsx)(`img`, { className: `size-6 shrink-0 object-contain`, src: u, alt: `` })
        : (0, Q.jsx)(`span`, {
            className: `flex size-6 shrink-0 items-center justify-center rounded-lg bg-text/5 text-[10px]`,
            "aria-hidden": `true`,
            children: (o?.displayName ?? n.displayName).slice(0, 1),
          })),
      (t[4] = n.displayName),
      (t[5] = u),
      (t[6] = o?.displayName),
      (t[7] = d))
    : (d = t[7]);
  let f = o?.displayName ?? n.displayName,
    p;
  return (
    t[8] !== r || t[9] !== i || t[10] !== d || t[11] !== f
      ? ((p = (0, Q.jsx)(Tr, { icon: d, label: f, subtitle: i, onRemove: r })),
        (t[8] = r),
        (t[9] = i),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function Or(e, t) {
  return e === `observe`
    ? t === 0
      ? (0, Q.jsx)(f, {
          id: `settings.chronicle.permissions.allWebsites`,
          defaultMessage: `All websites`,
          description: `Browser permission subtitle when every website is included`,
        })
      : (0, Q.jsx)(f, {
          id: `settings.chronicle.permissions.allButWebsites`,
          defaultMessage: `All but {count, plural, one {# website} other {# websites}}`,
          description: `Browser permission subtitle when some websites are excluded`,
          values: { count: t },
        })
    : t === 0
      ? (0, Q.jsx)(f, {
          id: `settings.chronicle.permissions.noWebsites`,
          defaultMessage: `No websites`,
          description: `Browser permission subtitle when no websites are included`,
        })
      : (0, Q.jsx)(f, {
          id: `settings.chronicle.permissions.onlyWebsites`,
          defaultMessage: `Only {count, plural, one {# website} other {# websites}}`,
          description: `Browser permission subtitle when only some websites are included`,
          values: { count: t },
        });
}
function kr(e) {
  let t = e.trim().toLowerCase();
  if (t === ``) return null;
  try {
    return new URL(t.includes(`://`) ? t : `https://${t}`).hostname;
  } catch {
    return null;
  }
}
var Ar,
  jr,
  Mr,
  Q,
  Nr = e(() => {
    ((Ar = Ve()),
      T(),
      (jr = t(le(), 1)),
      L(),
      (Mr = t(o(), 1)),
      U(),
      vr(),
      pt(),
      a(),
      Le(),
      Oe(),
      ve(),
      je(),
      Be(),
      D(),
      ot(),
      oe(),
      ke(),
      bt(),
      Ke(),
      fn(),
      Bt(),
      Tt(),
      (Q = Ne()));
  });
function Pr() {
  let e = (0, zr.c)(68),
    t = i(Se),
    { selectedHostId: n } = s(),
    { data: r, isLoading: a } = I(H, n),
    [o, c] = (0, Br.useState)(!1),
    [u, d] = (0, Br.useState)(!1),
    [m, h] = (0, Br.useState)(!1),
    [g, _] = (0, Br.useState)(!1),
    [y, b] = (0, Br.useState)(!1),
    [x, S] = (0, Br.useState)(null),
    C = Ue.chronicle,
    w = r?.config,
    T;
  e[0] === w ? (T = e[1]) : ((T = lt(w, `chronicle`)), (e[0] = w), (e[1] = T));
  let E = T === !0,
    D;
  e[2] === E ? (D = e[3]) : ((D = { enabled: E }), (e[2] = E), (e[3] = D));
  let { data: k, dataUpdatedAt: A, errorUpdatedAt: j, isError: M } = v(Dt, D),
    N = v(jt),
    ee = I(dr, n),
    P = I(fr, n),
    { isLoading: F } = I(et, n),
    L = I(pr, n),
    R;
  e[4] === n ? (R = e[5]) : ((R = { hostId: n }), (e[4] = n), (e[5] = R));
  let te = He(R),
    ne = wt(n),
    re = v(It),
    ie = N.isPending && N.variables?.enabled === !0,
    z = k ?? re.data ?? N.data,
    ae = ie || re.isPending || z?.activationState === `starting`,
    oe = ie || (z?.enabled ?? E),
    se = ee && P,
    B = oe && (L || !se),
    ce = M || j > A,
    le = C == null || a || N.isPending || re.isPending,
    ue = le || !se,
    V;
  C == null
    ? (V = `service-unavailable`)
    : a
      ? (V = `configuration-loading`)
      : ee
        ? F
          ? (V = `memory-feature-loading`)
          : P || (V = `memory-feature-unavailable`)
        : (V = `configuration-unavailable`);
  let U;
  e[6] !== E || e[7] !== t || e[8] !== k?.enabled
    ? ((U = () => {
        k?.enabled !== !1 || !E || (p(t.queryClient, Ce), p(t.queryClient, [`user-saved-config`]));
      }),
      (e[6] = E),
      (e[7] = t),
      (e[8] = k?.enabled),
      (e[9] = U))
    : (U = e[9]);
  let de = k?.enabled,
    fe;
  (e[10] !== E || e[11] !== t || e[12] !== de
    ? ((fe = [E, t, de]), (e[10] = E), (e[11] = t), (e[12] = de), (e[13] = fe))
    : (fe = e[13]),
    (0, Br.useEffect)(U, fe));
  let W;
  e[14] !== t || e[15] !== n || e[16] !== N
    ? ((W = (e) => {
        N.mutate(
          { enabled: e, hostId: n },
          {
            onSuccess: (n) => {
              e &&
                !n.enabled &&
                t.get(Re).danger(
                  (0, $.jsx)(f, {
                    id: `settings.chronicle.permissionsDeniedToast`,
                    defaultMessage: `Computer history wasn’t turned on because required permissions weren’t granted`,
                    description: `Toast shown when Computer history setup is closed before required permissions are granted`,
                  }),
                );
            },
            onError: () => {
              t.get(Re)[e ? `warning` : `danger`](
                e
                  ? (0, $.jsx)(f, {
                      id: `settings.chronicle.enableErrorToast`,
                      defaultMessage: `Computer history could not be turned on. Restart ChatGPT, and try again`,
                      description: `Toast shown when Computer history enablement fails, suggesting the user restart ChatGPT`,
                    })
                  : (0, $.jsx)(f, {
                      id: `settings.chronicle.disableErrorToast`,
                      defaultMessage: `Computer history could not be turned off`,
                      description: `Toast shown when Computer history disablement fails`,
                    }),
              );
            },
          },
        );
      }),
      (e[14] = t),
      (e[15] = n),
      (e[16] = N),
      (e[17] = W))
    : (W = e[17]);
  let G = W,
    pe;
  e[18] !== re || e[19] !== t
    ? ((pe = () => {
        re.mutate(void 0, {
          onError: () => {
            t.get(Re).danger(
              (0, $.jsx)(f, {
                id: `settings.chronicle.retryActivationErrorToast`,
                defaultMessage: `Computer history could not be resumed`,
                description: `Toast shown when retrying Computer history activation fails`,
              }),
            );
          },
        });
      }),
      (e[18] = re),
      (e[19] = t),
      (e[20] = pe))
    : (pe = e[20]);
  let K = pe,
    me;
  e[21] !== L || e[22] !== G
    ? ((me = () => {
        L ? G(!0) : d(!0);
      }),
      (e[21] = L),
      (e[22] = G),
      (e[23] = me))
    : (me = e[23]);
  let he = me,
    ge;
  e[24] !== K || e[25] !== t || e[26] !== n || e[27] !== G || e[28] !== te || e[29] !== ne
    ? ((ge = async () => {
        C != null &&
          (h(!0),
          await (async () => {
            try {
              let e = await ur({
                enableMemories: () =>
                  cr(t, {
                    hostId: n,
                    setMemoryFeatureEnabled: () => te.mutateAsync({ featureName: nt, enabled: !0 }),
                    writeMemoryConfig: (e) => ne.mutateAsync({ edits: e }),
                  }),
                getChronicleState: () => C.getState(),
              });
              d(!1);
              bb156: switch (e) {
                case `already_active`:
                  break bb156;
                case `enable_required`:
                  G(!0);
                  break bb156;
                case `retry_required`:
                  K();
              }
            } catch {
              t.get(Re).danger(
                (0, $.jsx)(f, {
                  id: `settings.chronicle.enableMemoriesErrorToast`,
                  defaultMessage: `Memories could not be turned on`,
                  description: `Toast shown when enabling Memories for Computer history fails`,
                }),
              );
            }
          })().finally(() => {
            h(!1);
          }));
      }),
      (e[24] = K),
      (e[25] = t),
      (e[26] = n),
      (e[27] = G),
      (e[28] = te),
      (e[29] = ne),
      (e[30] = ge))
    : (ge = e[30]);
  let _e = ge,
    ve;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(l, { slug: `chronicle` })), (e[31] = ve))
    : (ve = e[31]);
  let ye;
  e[32] !== ae ||
  e[33] !== le ||
  e[34] !== z ||
  e[35] !== ce ||
  e[36] !== ue ||
  e[37] !== V ||
  e[38] !== K ||
  e[39] !== t ||
  e[40] !== G ||
  e[41] !== B
    ? ((ye = B
        ? (0, $.jsx)(Fr, {
            activationInProgress: ae,
            currentState: z,
            isServiceUnavailable: ce,
            onClearRequest: S,
            onOpenPermissions: () => {
              (t.query.invalidate(Rt), _(!0));
            },
            onRetryActivation: K,
            onToggle: G,
            toggleDisabled: le,
          })
        : (0, $.jsx)(_n, { disabled: ue, disabledReason: V, onTurnOn: () => c(!0) })),
      (e[32] = ae),
      (e[33] = le),
      (e[34] = z),
      (e[35] = ce),
      (e[36] = ue),
      (e[37] = V),
      (e[38] = K),
      (e[39] = t),
      (e[40] = G),
      (e[41] = B),
      (e[42] = ye))
    : (ye = e[42]);
  let be;
  e[43] === he
    ? (be = e[44])
    : ((be = () => {
        (c(!1), he());
      }),
      (e[43] = he),
      (e[44] = be));
  let xe;
  e[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = () => {
        (c(!1), b(!0), _(!0));
      }),
      (e[45] = xe))
    : (xe = e[45]);
  let q;
  e[46] !== o || e[47] !== be
    ? ((q = (0, $.jsx)(Gt, { open: o, onOpenChange: c, onAllowAllApps: be, onCustomizeApps: xe })),
      (e[46] = o),
      (e[47] = be),
      (e[48] = q))
    : (q = e[48]);
  let we;
  e[49] === _e
    ? (we = e[50])
    : ((we = () => {
        _e();
      }),
      (e[49] = _e),
      (e[50] = we));
  let Te;
  e[51] !== u || e[52] !== m || e[53] !== we
    ? ((Te = (0, $.jsx)(Tn, { open: u, isPending: m, onOpenChange: d, onTurnOn: we })),
      (e[51] = u),
      (e[52] = m),
      (e[53] = we),
      (e[54] = Te))
    : (Te = e[54]);
  let Ee;
  e[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (e) => {
        (_(e), e || b(!1));
      }),
      (e[55] = Ee))
    : (Ee = e[55]);
  let De = y ? he : void 0,
    Oe;
  e[56] !== g || e[57] !== De
    ? ((Oe = (0, $.jsx)(yr, { open: g, onOpenChange: Ee, onSaved: De })),
      (e[56] = g),
      (e[57] = De),
      (e[58] = Oe))
    : (Oe = e[58]);
  let ke;
  e[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (e) => {
        e || S(null);
      }),
      (e[59] = ke))
    : (ke = e[59]);
  let Ae;
  e[60] === x
    ? (Ae = e[61])
    : ((Ae = (0, $.jsx)(Lr, { request: x, onOpenChange: ke })), (e[60] = x), (e[61] = Ae));
  let je;
  return (
    e[62] !== ye || e[63] !== q || e[64] !== Te || e[65] !== Oe || e[66] !== Ae
      ? ((je = (0, $.jsxs)(O, { title: ve, children: [ye, q, Te, Oe, Ae] })),
        (e[62] = ye),
        (e[63] = q),
        (e[64] = Te),
        (e[65] = Oe),
        (e[66] = Ae),
        (e[67] = je))
      : (je = e[67]),
    je
  );
}
function Fr(e) {
  let t = (0, zr.c)(46),
    {
      activationInProgress: n,
      currentState: r,
      isServiceUnavailable: a,
      onClearRequest: o,
      onOpenPermissions: s,
      onRetryActivation: c,
      onToggle: l,
      toggleDisabled: u,
    } = e,
    d = i(Se),
    p = ne(),
    { data: m } = v(Rt),
    h;
  t[0] === m ? (h = t[1]) : ((h = m == null ? null : Wt(m)), (t[0] = m), (t[1] = h));
  let g = h,
    _ = (g?.applicationBundleIdentifiers.length ?? 0) + (g?.urlDomains.length ?? 0),
    y = v(Ot),
    b =
      r?.activationState === `waiting_for_permissions` ||
      (r?.recorderState === `stopped` && r.activationState === `idle`),
    x = a || r?.activationState === `failed`,
    S = n || b || x,
    C = u || y.isPending,
    w;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(Jt, {})), (t[2] = w))
    : (w = t[2]);
  let T;
  t[3] === x
    ? (T = t[4])
    : ((T = x
        ? (0, $.jsx)(f, {
            id: `settings.chronicle.unavailableWithLearnMore`,
            defaultMessage: `Computer history is temporarily unavailable. <learnMore>Learn more</learnMore>`,
            description: `Status shown when Codex cannot connect to Computer history, followed by a learn-more link`,
            values: { learnMore: Ir },
          })
        : (0, $.jsx)(Yt, {})),
      (t[3] = x),
      (t[4] = T));
  let E;
  t[5] !== n ||
  t[6] !== b ||
  t[7] !== C ||
  t[8] !== r?.recorderState ||
  t[9] !== c ||
  t[10] !== y ||
  t[11] !== d ||
  t[12] !== S ||
  t[13] !== u
    ? ((E = S
        ? (0, $.jsx)(J, {
            color: `secondary`,
            radius: `large`,
            disabled: C,
            loading: n,
            onClick: c,
            children: n
              ? (0, $.jsx)(f, {
                  id: `settings.chronicle.activationInProgress`,
                  defaultMessage: `Resume`,
                  description: `Computer history action shown while activation is already in progress`,
                })
              : b
                ? (0, $.jsx)(f, {
                    id: `settings.chronicle.finishSetup`,
                    defaultMessage: `Finish setup`,
                    description: `Retry Computer history startup while waiting for permissions`,
                  })
                : (0, $.jsx)(f, {
                    id: `settings.chronicle.tryAgain`,
                    defaultMessage: `Try again`,
                    description: `Retry Computer history startup after a failure`,
                  }),
          })
        : r?.recorderState === `running` || r?.recorderState === `paused`
          ? (0, $.jsx)(J, {
              color: `secondary`,
              radius: `large`,
              disabled: u,
              loading: y.isPending,
              onClick: () =>
                y.mutate(r?.recorderState, {
                  onError: () => {
                    d.get(Re).danger(
                      (0, $.jsx)(f, {
                        id: `settings.chronicle.pauseResumeErrorToast`,
                        defaultMessage: `Computer history could not be paused or resumed`,
                        description: `Toast shown when pausing or resuming Computer history fails`,
                      }),
                    );
                  },
                }),
              children:
                r?.recorderState === `paused`
                  ? (0, $.jsx)(f, {
                      id: `settings.chronicle.resume`,
                      defaultMessage: `Resume`,
                      description: `Resume Computer history button`,
                    })
                  : (0, $.jsx)(f, {
                      id: `settings.chronicle.pause`,
                      defaultMessage: `Pause`,
                      description: `Pause Computer history button`,
                    }),
            })
          : null),
      (t[5] = n),
      (t[6] = b),
      (t[7] = C),
      (t[8] = r?.recorderState),
      (t[9] = c),
      (t[10] = y),
      (t[11] = d),
      (t[12] = S),
      (t[13] = u),
      (t[14] = E))
    : (E = t[14]);
  let D;
  t[15] === p
    ? (D = t[16])
    : ((D = p.formatMessage({
        id: `settings.chronicle.turnOffAriaLabel`,
        defaultMessage: `Turn off Computer history`,
        description: `Accessible label for the Computer history toggle`,
      })),
      (t[15] = p),
      (t[16] = D));
  let O;
  t[17] !== C || t[18] !== l || t[19] !== D
    ? ((O = (0, $.jsx)(z, { checked: !0, disabled: C, ariaLabel: D, onChange: l })),
      (t[17] = C),
      (t[18] = l),
      (t[19] = D),
      (t[20] = O))
    : (O = t[20]);
  let k;
  t[21] !== E || t[22] !== O
    ? ((k = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [E, O] })),
      (t[21] = E),
      (t[22] = O),
      (t[23] = k))
    : (k = t[23]);
  let A;
  t[24] !== T || t[25] !== k
    ? ((A = (0, $.jsx)(Xe, { label: w, description: T, control: k })),
      (t[24] = T),
      (t[25] = k),
      (t[26] = A))
    : (A = t[26]);
  let j;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(ir, {})), (t[27] = j))
    : (j = t[27]);
  let M, N;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(Zt, {})), (N = (0, $.jsx)(Qt, {})), (t[28] = M), (t[29] = N))
    : ((M = t[28]), (N = t[29]));
  let ee;
  t[30] === _
    ? (ee = t[31])
    : ((ee =
        _ === 0
          ? (0, $.jsx)(f, {
              id: `settings.chronicle.permissions.choose`,
              defaultMessage: `Choose`,
              description: `Choose Computer history permissions button`,
            })
          : (0, $.jsx)(f, {
              id: `settings.chronicle.permissions.selectedCount`,
              defaultMessage: `{count} selected`,
              description: `Number of selected Computer history permission entries`,
              values: { count: _ },
            })),
      (t[30] = _),
      (t[31] = ee));
  let P;
  t[32] !== a || t[33] !== s || t[34] !== ee
    ? ((P = (0, $.jsx)(Xe, {
        label: M,
        description: N,
        control: (0, $.jsx)(J, {
          color: `secondary`,
          size: `toolbar`,
          radius: `large`,
          disabled: a,
          onClick: s,
          children: ee,
        }),
      })),
      (t[32] = a),
      (t[33] = s),
      (t[34] = ee),
      (t[35] = P))
    : (P = t[35]);
  let F;
  t[36] !== P || t[37] !== A
    ? ((F = (0, $.jsx)(xe, {
        children: (0, $.jsx)(xe.Content, { children: (0, $.jsxs)(pe, { children: [A, j, P] }) }),
      })),
      (t[36] = P),
      (t[37] = A),
      (t[38] = F))
    : (F = t[38]);
  let I;
  t[39] !== a || t[40] !== o || t[41] !== m
    ? ((I = (0, $.jsx)(Vn, { isServiceUnavailable: a, onClearRequest: o, settings: m })),
      (t[39] = a),
      (t[40] = o),
      (t[41] = m),
      (t[42] = I))
    : (I = t[42]);
  let L;
  return (
    t[43] !== F || t[44] !== I
      ? ((L = (0, $.jsxs)(`div`, { className: `flex flex-col gap-8`, children: [F, I] })),
        (t[43] = F),
        (t[44] = I),
        (t[45] = L))
      : (L = t[45]),
    L
  );
}
function Ir(e) {
  return (0, $.jsx)(
    Et,
    { children: Br.Children.toArray(e) },
    `computer-history-unavailable-learn-more`,
  );
}
function Lr(e) {
  let t = (0, zr.c)(32),
    { onOpenChange: n, request: r } = e,
    a = i(Se),
    o = v(Mt),
    s = r != null,
    c;
  t[0] !== o || t[1] !== n || t[2] !== r || t[3] !== a
    ? ((c = (e) => {
        (e.preventDefault(),
          r != null &&
            !o.isPending &&
            o.mutate(r, {
              onSuccess: () => n(!1),
              onError: () => {
                a.get(Re).danger(
                  (0, $.jsx)(f, {
                    id: `settings.chronicle.history.clearErrorToast`,
                    defaultMessage: `Computer history could not be cleared`,
                    description: `Toast shown when clearing Computer history fails`,
                  }),
                );
              },
            }));
      }),
      (t[0] = o),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(Qe, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(f, {
            id: `settings.chronicle.history.clearDialogAccessibleTitle`,
            defaultMessage: `Clear computer history`,
            description: `Accessible title for clear Computer history dialog`,
          }),
        }),
      })),
      (t[5] = l))
    : (l = t[5]);
  let u = r?.scope,
    d;
  t[6] === u ? (d = t[7]) : ((d = (0, $.jsx)(Rr, { scope: u })), (t[6] = u), (t[7] = d));
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(f, {
        id: `settings.chronicle.history.clearDialogDescription`,
        defaultMessage: `Your actions and any memories created from them will be deleted. This cannot be undone.`,
        description: `Clear Computer history confirmation description`,
      })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] === d
    ? (m = t[10])
    : ((m = (0, $.jsxs)(be, { children: [l, (0, $.jsx)(me, { title: d, subtitle: p })] })),
      (t[9] = d),
      (t[10] = m));
  let h;
  t[11] === n ? (h = t[12]) : ((h = () => n(!1)), (t[11] = n), (t[12] = h));
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(f, {
        id: `settings.chronicle.history.clearCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel clearing Computer history`,
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] === h
    ? (_ = t[15])
    : ((_ = (0, $.jsx)(J, { color: `ghost`, type: `button`, onClick: h, children: g })),
      (t[14] = h),
      (t[15] = _));
  let y;
  t[16] === r?.scope
    ? (y = t[17])
    : ((y =
        r?.scope === `interval`
          ? (0, $.jsx)(f, {
              id: `settings.chronicle.history.deleteConfirm`,
              defaultMessage: `Delete`,
              description: `Confirm deleting a Computer history item`,
            })
          : (0, $.jsx)(f, {
              id: `settings.chronicle.history.clearConfirm`,
              defaultMessage: `Clear`,
              description: `Confirm clearing Computer history`,
            })),
      (t[16] = r?.scope),
      (t[17] = y));
  let b;
  t[18] !== o.isPending || t[19] !== y
    ? ((b = (0, $.jsx)(J, { color: `danger`, loading: o.isPending, type: `submit`, children: y })),
      (t[18] = o.isPending),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] !== _ || t[22] !== b
    ? ((x = (0, $.jsx)(be, { children: (0, $.jsxs)(_e, { children: [_, b] }) })),
      (t[21] = _),
      (t[22] = b),
      (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] !== x || t[25] !== c || t[26] !== m
    ? ((S = (0, $.jsxs)(A, { as: `form`, onSubmit: c, children: [m, x] })),
      (t[24] = x),
      (t[25] = c),
      (t[26] = m),
      (t[27] = S))
    : (S = t[27]);
  let C;
  return (
    t[28] !== n || t[29] !== s || t[30] !== S
      ? ((C = (0, $.jsx)(tt, { open: s, onOpenChange: n, showDialogClose: !0, children: S })),
        (t[28] = n),
        (t[29] = s),
        (t[30] = S),
        (t[31] = C))
      : (C = t[31]),
    C
  );
}
function Rr(e) {
  let t = (0, zr.c)(6),
    { scope: n } = e;
  switch (n) {
    case `application_session`:
    case `interval`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.chronicle.history.deleteItemTitle`,
              defaultMessage: `Delete this history item?`,
              description: `Delete Computer history item confirmation title`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `last_ten_minutes`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.chronicle.history.clearTenMinutesTitle`,
              defaultMessage: `Clear the last 10 minutes?`,
              description: `Clear recent Computer history confirmation title`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `last_hour`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.chronicle.history.clearHourTitle`,
              defaultMessage: `Clear the last hour?`,
              description: `Clear recent Computer history confirmation title`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `last_day`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.chronicle.history.clearDayTitle`,
              defaultMessage: `Clear the last day?`,
              description: `Clear recent Computer history confirmation title`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `all`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.chronicle.history.clearAllTitle`,
              defaultMessage: `Clear all history?`,
              description: `Clear all Computer history confirmation title`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case void 0: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)($.Fragment, {})), (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
var zr, Br, $;
e(() => {
  ((zr = Ve()),
    L(),
    c(),
    (Br = t(o(), 1)),
    U(),
    a(),
    Le(),
    Oe(),
    Be(),
    n(),
    Ht(),
    Ae(),
    h(),
    Te(),
    _(),
    Pe(),
    Ke(),
    K(),
    B(),
    re(),
    he(),
    W(),
    S(),
    qt(),
    wn(),
    An(),
    rr(),
    sr(),
    Ut(),
    mr(),
    Nr(),
    fn(),
    Bt(),
    Tt(),
    ($ = Ne()));
})();
export { Pr as ComputerHistorySettingsPage };
//# sourceMappingURL=chronicle-settings-page-cd85637c8d44.js.map
