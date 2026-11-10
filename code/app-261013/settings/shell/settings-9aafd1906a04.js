import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  ADt as r,
  AL as i,
  AO as a,
  BV as o,
  CO as s,
  Cot as c,
  DV as l,
  Fat as u,
  GE as d,
  IDt as f,
  Iot as p,
  Ixt as m,
  JC as h,
  Lot as g,
  NV as _,
  Pat as v,
  Pxt as y,
  QC as b,
  TJ as x,
  TO as S,
  VDt as C,
  Vxt as w,
  WE as T,
  Xot as E,
  Yot as D,
  _O as O,
  _xt as k,
  cO as A,
  cz as j,
  fO as M,
  hot as N,
  hrt as P,
  iw as F,
  jDt as I,
  lO as L,
  lot as R,
  mO as ee,
  nst as te,
  oB as ne,
  oO as re,
  oR as ie,
  oxt as ae,
  qC as oe,
  sJ as se,
  sO as ce,
  sz as z,
  t3 as B,
  tst as V,
  tw as H,
  uO as le,
  vO as ue,
  vrt as de,
  vzt as U,
  wot as W,
  wxt as fe,
  xMt as G,
  xU as pe,
  yzt as me,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as he,
  Ek as ge,
  GMr as _e,
  Iur as ve,
  Jpr as ye,
  QP as be,
  TPn as xe,
  Tk as K,
  Upr as Se,
  YMr as Ce,
  Ymr as q,
  _F as we,
  cF as Te,
  cu as Ee,
  ehr as De,
  hF as Oe,
  hp as ke,
  lu as Ae,
  mF as je,
  mp as Me,
  pF as Ne,
  qMr as Pe,
  sF as Fe,
  tF as Ie,
  tNr as Le,
} from "./app-initial-5851df3f6cb1.js";
import { n as Re, t as ze } from "./settings-row-disclosure-81330dc4d2f4.js";
import { n as Be, t as Ve } from "./delete-dialog-08927b8bf282.js";
var He;
function Ue() {
  return (Ue = e(() => {
    (I(),
      (He = r({
        title: {
          id: `restricted.cloudComputer.orbitCookies.dot`,
          defaultMessage: `Your dot's cookies`,
          description: `Name of the cookie manager for the user's dot, separate from ChatGPT Work`,
        },
        description: {
          id: `restricted.cloudComputer.orbitCookies.description.dot`,
          defaultMessage: `Manage cookies saved by your dot`,
          description: `Description of the settings row and page for the dot's saved website cookies`,
        },
      })));
  }))();
}
function We(e) {
  let t = (0, Ge.c)(13),
    { sitePermissions: n, cookies: r, onOpenOrbitCookies: i, defaultPermissions: a, passkeys: s } = e,
    c,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Ke.jsx)(f, { ...Fe.title })),
      (l = (0, Ke.jsx)(f, {
        id: `restricted.cloudComputer.description`,
        defaultMessage: `Manage cloud browsing settings and saved website cookies`,
        description: `Subtitle of cloud computer settings, which includes cookie managers for ChatGPT Work and the user's dot`,
      })),
      (t[0] = c),
      (t[1] = l))
    : ((c = t[0]), (l = t[1]));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Ke.jsx)(K.Header, {
        title: (0, Ke.jsx)(f, {
          id: `restricted.cloudComputer.general.title`,
          defaultMessage: `General`,
          description: `Heading for cloud computer cookie and website approval settings`,
        }),
      })),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === i
    ? (d = t[4])
    : ((d =
        i != null &&
        (0, Ke.jsx)(b, {
          edgeRounding: `surface`,
          label: (0, Ke.jsx)(f, { ...He.title }),
          description: (0, Ke.jsx)(f, { ...He.description }),
          onClick: i,
          trailing: (0, Ke.jsx)(o, { className: `text-tertiary` }),
        })),
      (t[3] = i),
      (t[4] = d));
  let p;
  t[5] !== r || t[6] !== a || t[7] !== d
    ? ((p = (0, Ke.jsxs)(K, {
        children: [u, (0, Ke.jsx)(K.Content, { children: (0, Ke.jsxs)(oe, { children: [r, d, a] }) })],
      })),
      (t[5] = r),
      (t[6] = a),
      (t[7] = d),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== s || t[10] !== n || t[11] !== p
      ? ((m = (0, Ke.jsxs)(Oe, { title: c, subtitle: l, children: [p, n, s] })),
        (t[9] = s),
        (t[10] = n),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
var Ge, Ke;
function qe() {
  return (qe = e(() => {
    ((Ge = U()), I(), x(), we(), ge(), F(), h(), Te(), Ue(), (Ke = G()));
  }))();
}
var J;
function Je() {
  return (Je = e(() => {
    (I(),
      (J = r({
        updateError: {
          id: `settings.chatGpt.cloudBrowser.updateError`,
          defaultMessage: `Cloud browser settings couldn't be updated`,
          description: `Error toast when ChatGPT cloud browser settings cannot be updated`,
        },
        permissionUnavailable: {
          id: `settings.chatGpt.cloudBrowser.permissionUnavailable`,
          defaultMessage: `Unavailable`,
          description: `A cloud website approval setting could not be loaded`,
        },
        permissionLoading: {
          id: `settings.chatGpt.cloudBrowser.permissionLoading`,
          defaultMessage: `Loading…`,
          description: `A cloud website approval setting is loading`,
        },
        settingsLoadError: {
          id: `settings.chatGpt.cloudComputer.loadError`,
          defaultMessage: `Cloud browser settings couldn't be loaded`,
          description: `Error displayed in Cloud computer settings when website permissions could not be loaded. A Retry button lets the user try again.`,
        },
        settingsRetry: {
          id: `settings.chatGpt.cloudComputer.retry`,
          defaultMessage: `Retry`,
          description: `Button in the Cloud computer settings error state that tries to load website permissions again.`,
        },
        cookiesDeleteError: {
          id: `settings.chatGpt.cloudBrowser.cookiesDeleteError`,
          defaultMessage: `Could not delete browser data`,
          description: `Error when cloud browser cookies cannot be deleted; the dialog remains open for retry`,
        },
        cookiesLoadError: {
          id: `settings.chatGpt.cloudBrowser.cookies.loadError`,
          defaultMessage: `Saved cookies couldn't be loaded`,
          description: `Cloud browser cookies failed to load`,
        },
        retry: {
          id: `settings.chatGpt.cloudBrowser.retry`,
          defaultMessage: `Retry`,
          description: `Retry loading cloud browser data`,
        },
        cookiesBack: {
          id: `settings.chatGpt.cloudBrowser.cookies.back`,
          defaultMessage: `Back`,
          description: `Return from cookie management to the parent cloud settings page`,
        },
        cookiesClearTitle: {
          id: `settings.chatGpt.cloudBrowser.cookies.clearTitle`,
          defaultMessage: `Clear all cookies?`,
          description: `Confirm deleting all cloud browser cookies`,
        },
        cookiesDeleteTitle: {
          id: `settings.chatGpt.cloudBrowser.cookies.deleteTitle`,
          defaultMessage: `Delete cookies for {hostname}?`,
          description: `Confirm deleting cookies for the selected website`,
        },
        cookiesDeleteDescription: {
          id: `settings.chatGpt.cloudBrowser.cookies.deleteDescription`,
          defaultMessage: `Cookies saved by the cloud browser will be permanently deleted. Cookies in the browser on your device won't be affected.`,
          description: `Warning before permanently deleting cloud browser cookies`,
        },
        cookiesDeleteSiteDescription: {
          id: `settings.chatGpt.cloudBrowser.cookies.deleteSiteDescription`,
          defaultMessage: `Site data will be permanently deleted. You will be immediately logged out of all sessions, including those used by active conversations.`,
          description: `Warning before deleting cookies for one website or hostname in cloud browser settings. Deletion immediately ends that website’s signed-in cloud browser sessions, including sessions used by active conversations.`,
        },
        passkeysDeleteError: {
          id: `settings.chatGpt.cloudBrowser.passkeys.deleteError`,
          defaultMessage: `Failed to delete passkey`,
          description: `Cloud browser passkey deletion failed; the dialog remains open to retry`,
        },
        passkeysLoadError: {
          id: `settings.chatGpt.cloudBrowser.passkeys.loadError`,
          defaultMessage: `Passkeys couldn't be loaded`,
          description: `Cloud browser passkeys failed to load`,
        },
        passkeysDeleteTitle: {
          id: `settings.chatGpt.cloudBrowser.passkeys.deleteTitle`,
          defaultMessage: `Delete passkey?`,
          description: `Confirmation title before permanently deleting a cloud browser passkey`,
        },
        passkeysDeleteDescription: {
          id: `settings.chatGpt.cloudBrowser.passkeys.deleteDescription`,
          defaultMessage: `Delete the passkey for {account} on {website}? You may lose access to this account.`,
          description: `Warns that permanently deleting the named account's passkey on this website can prevent future sign-ins`,
        },
      })));
  }))();
}
function Ye(e) {
  let t = (0, tt.c)(27),
    { onBack: n } = e,
    r = m(c),
    i = C(),
    a = te(),
    o = w(Pe),
    s;
  t[0] === o ? (s = t[1]) : ((s = [`chatgpt-cloud-browser-cookies`, o]), (t[0] = o), (t[1] = s));
  let l = s,
    u = o != null,
    d;
  t[2] !== l || t[3] !== u
    ? ((d = { queryKey: l, enabled: u, queryFn: Ze, staleTime: v.ONE_MINUTE }),
      (t[2] = l),
      (t[3] = u),
      (t[4] = d))
    : (d = t[4]);
  let { data: p, isPending: h, isError: g, refetch: _ } = E(d),
    y;
  t[5] !== a || t[6] !== l
    ? ((y = (e, t) => {
        (a.setQueryData(l, (e) =>
          e == null
            ? e
            : {
                hosts:
                  t === `all`
                    ? []
                    : e.hosts.filter(
                        (e) =>
                          e.hostname !== t.hostname &&
                          (!t.includeSubdomains || !e.hostname.endsWith(`.${t.hostname}`)),
                      ),
              },
        ),
          a.invalidateQueries({ queryKey: l }));
      }),
      (t[5] = a),
      (t[6] = l),
      (t[7] = y))
    : (y = t[7]);
  let b;
  t[8] !== i || t[9] !== r
    ? ((b = () =>
        r
          .get(N)
          .danger(i.formatMessage(J.cookiesDeleteError), {
            errorAnalytics: { toastId: `settings.chatGpt.cloudBrowser.cookiesDeleteError` },
          })),
      (t[8] = i),
      (t[9] = r),
      (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== y || t[12] !== b
    ? ((x = { mutationFn: Xe, onSuccess: y, onError: b }), (t[11] = y), (t[12] = b), (t[13] = x))
    : (x = t[13]);
  let S = x,
    T = p?.hosts,
    D;
  t[14] === g
    ? (D = t[15])
    : ((D = g ? (0, Y.jsx)(f, { ...J.cookiesLoadError }) : null), (t[14] = g), (t[15] = D));
  let O = o != null,
    k;
  t[16] === _ ? (k = t[17]) : ((k = () => void _()), (t[16] = _), (t[17] = k));
  let A;
  return (
    t[18] !== o ||
    t[19] !== S ||
    t[20] !== h ||
    t[21] !== n ||
    t[22] !== k ||
    t[23] !== T ||
    t[24] !== D ||
    t[25] !== O
      ? ((A = (0, Y.jsx)(
          Qe,
          {
            hosts: T,
            isPending: h,
            loadError: D,
            canDelete: O,
            onBack: n,
            onRetry: k,
            deleteMutationOptions: S,
          },
          o,
        )),
        (t[18] = o),
        (t[19] = S),
        (t[20] = h),
        (t[21] = n),
        (t[22] = k),
        (t[23] = T),
        (t[24] = D),
        (t[25] = O),
        (t[26] = A))
      : (A = t[26]),
    A
  );
}
async function Xe(e) {
  e === `all`
    ? await q.safeDelete(`/agent/browser_context`)
    : await q.safeDelete(`/flora/browser/cookies/{hostname}`, {
        parameters: { path: { hostname: e.hostname }, query: { include_subdomains: e.includeSubdomains } },
      });
}
function Ze() {
  return q.safeGet(`/flora/browser/cookies`);
}
function Qe(e) {
  let t = (0, tt.c)(56),
    {
      hosts: r,
      isPending: i,
      loadError: a,
      canDelete: o,
      title: s,
      subtitle: c,
      description: l,
      onBack: u,
      onRetry: d,
      deleteMutationOptions: p,
      renderConfirmationTitle: m,
      confirmationDescription: h,
      deletionError: _,
    } = e,
    [v, y] = (0, rt.useState)(null),
    b = g(p),
    x;
  t[0] === b
    ? (x = t[1])
    : ((x = function (e) {
        (b.reset(), y(e));
      }),
      (t[0] = b),
      (t[1] = x));
  let S = x,
    C;
  if (i) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Y.jsx)(Ne, {})), (t[2] = e)) : (e = t[2]),
      (C = e));
  } else if (a != null) {
    let e;
    t[3] === a
      ? (e = t[4])
      : ((e = (0, Y.jsx)(`span`, { role: `alert`, children: a })), (t[3] = a), (t[4] = e));
    let r;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(f, { ...J.retry })), (t[5] = r))
      : (r = t[5]);
    let i;
    t[6] === d
      ? (i = t[7])
      : ((i = (0, Y.jsx)(n, { color: `secondary`, size: `toolbar`, onClick: d, children: r })),
        (t[6] = d),
        (t[7] = i));
    let o;
    (t[8] !== e || t[9] !== i
      ? ((o = (0, Y.jsx)(H, { label: e, control: i })), (t[8] = e), (t[9] = i), (t[10] = o))
      : (o = t[10]),
      (C = o));
  } else if (r?.length === 0) {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(Me, {
          align: `start`,
          layout: `settings-row`,
          children: (0, Y.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.cookies.empty`,
            defaultMessage: `No cookies saved`,
            description: `No cloud browser cookies are saved`,
          }),
        })),
        (t[11] = e))
      : (e = t[11]),
      (C = e));
  } else {
    let e;
    t[12] === r
      ? (e = t[13])
      : ((e = Object.entries((0, nt.default)(r, `registrable_domain`))), (t[12] = r), (t[13] = e));
    let n;
    (t[14] !== o || t[15] !== b.isPending || t[16] !== S || t[17] !== e
      ? ((n = (0, Y.jsx)(oe, {
          children: e.map((e) => {
            let [t, n] = e;
            return (0, Y.jsx)($e, { domain: t, hosts: n, pending: !o || b.isPending, onDelete: S }, t);
          }),
        })),
        (t[14] = o),
        (t[15] = b.isPending),
        (t[16] = S),
        (t[17] = e),
        (t[18] = n))
      : (n = t[18]),
      (C = n));
  }
  let w, T;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Y.jsx)(ne, {})), (T = (0, Y.jsx)(f, { ...J.cookiesBack })), (t[19] = w), (t[20] = T))
    : ((w = t[19]), (T = t[20]));
  let E;
  t[21] === u
    ? (E = t[22])
    : ((E = (0, Y.jsxs)(n, { color: `ghost`, size: `toolbar`, onClick: u, children: [w, T] })),
      (t[21] = u),
      (t[22] = E));
  let D;
  t[23] === s
    ? (D = t[24])
    : ((D =
        s ??
        (0, Y.jsx)(f, {
          id: `settings.chatGpt.cloudBrowser.cookies`,
          defaultMessage: `Cookies`,
          description: `Title of cloud browser cookie management`,
        })),
      (t[23] = s),
      (t[24] = D));
  let O;
  t[25] === s
    ? (O = t[26])
    : ((O =
        s ??
        (0, Y.jsx)(f, {
          id: `settings.chatGpt.cloudBrowser.cookies`,
          defaultMessage: `Cookies`,
          description: `Cloud browser cookies`,
        })),
      (t[25] = s),
      (t[26] = O));
  let k;
  t[27] === l
    ? (k = t[28])
    : ((k =
        l ??
        (0, Y.jsx)(f, {
          id: `settings.chatGpt.cloudBrowser.cookies.clearDescription`,
          defaultMessage: `Remove cookies saved by the cloud browser`,
          description: `Description of deleting all cookies in the cloud browser`,
        })),
      (t[27] = l),
      (t[28] = k));
  let A = !o || b.isPending,
    j;
  t[29] === S ? (j = t[30]) : ((j = () => S(`all`)), (t[29] = S), (t[30] = j));
  let M;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Y.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.cookies.clearAll`,
        defaultMessage: `Clear all`,
        description: `Open confirmation to delete all cloud browser cookies`,
      })),
      (t[31] = M))
    : (M = t[31]);
  let N;
  t[32] !== A || t[33] !== j
    ? ((N = (0, Y.jsx)(n, { color: `danger`, size: `toolbar`, disabled: A, onClick: j, children: M })),
      (t[32] = A),
      (t[33] = j),
      (t[34] = N))
    : (N = t[34]);
  let P;
  t[35] !== N || t[36] !== O || t[37] !== k
    ? ((P = (0, Y.jsx)(K, {
        children: (0, Y.jsx)(K.Content, {
          children: (0, Y.jsx)(oe, { children: (0, Y.jsx)(H, { label: O, description: k, control: N }) }),
        }),
      })),
      (t[35] = N),
      (t[36] = O),
      (t[37] = k),
      (t[38] = P))
    : (P = t[38]);
  let F;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Y.jsx)(K.Header, {
        title: (0, Y.jsx)(f, {
          id: `settings.chatGpt.cloudBrowser.sites`,
          defaultMessage: `Sites`,
          description: `Websites with saved cloud browser cookies`,
        }),
      })),
      (t[39] = F))
    : (F = t[39]);
  let I;
  t[40] === C
    ? (I = t[41])
    : ((I = (0, Y.jsxs)(K, { children: [F, (0, Y.jsx)(K.Content, { children: C })] })),
      (t[40] = C),
      (t[41] = I));
  let L;
  t[42] !== o || t[43] !== h || t[44] !== b || t[45] !== v || t[46] !== _ || t[47] !== m
    ? ((L =
        v != null &&
        (0, Y.jsx)(Ve, {
          pending: b.isPending,
          disabled: !o,
          onClose: () => y(null),
          onConfirm: () => b.mutate(v, { onSuccess: () => y(null) }),
          error: b.isError ? _ : null,
          title:
            m?.(v) ??
            (v === `all`
              ? (0, Y.jsx)(f, { ...J.cookiesClearTitle })
              : (0, Y.jsx)(f, { ...J.cookiesDeleteTitle, values: { hostname: v.hostname } })),
          description:
            h ??
            (v === `all`
              ? (0, Y.jsx)(f, { ...J.cookiesDeleteDescription })
              : (0, Y.jsx)(f, { ...J.cookiesDeleteSiteDescription })),
        })),
      (t[42] = o),
      (t[43] = h),
      (t[44] = b),
      (t[45] = v),
      (t[46] = _),
      (t[47] = m),
      (t[48] = L))
    : (L = t[48]);
  let R;
  return (
    t[49] !== c || t[50] !== P || t[51] !== I || t[52] !== L || t[53] !== E || t[54] !== D
      ? ((R = (0, Y.jsxs)(Oe, { backSlot: E, title: D, subtitle: c, children: [P, I, L] })),
        (t[49] = c),
        (t[50] = P),
        (t[51] = I),
        (t[52] = L),
        (t[53] = E),
        (t[54] = D),
        (t[55] = R))
      : (R = t[55]),
    R
  );
}
function $e(e) {
  let t = (0, tt.c)(22),
    { domain: r, hosts: i, pending: a, onDelete: s } = e,
    c = C(),
    [l, u] = (0, rt.useState)(!1),
    d = (0, rt.useId)(),
    p = i.length > 1 || i[0]?.hostname !== r,
    m;
  t[0] !== p || t[1] !== d || t[2] !== r || t[3] !== l || t[4] !== c || t[5] !== s || t[6] !== a
    ? ((m = function (e, t, i) {
        let m = i
          ? c.formatMessage(
              {
                id: `settings.chatGpt.cloudBrowser.cookies.deleteSite`,
                defaultMessage: `Delete cookies for {site}`,
                description: `Delete cookies for the named website and its subdomains`,
              },
              { site: e },
            )
          : c.formatMessage(
              {
                id: `settings.chatGpt.cloudBrowser.cookies.deleteHost`,
                defaultMessage: `Delete cookies for {hostname} only`,
                description: `Delete cookies for one hostname, preserving sibling and child subdomains`,
              },
              { hostname: e },
            );
        return (0, Y.jsx)(
          H,
          {
            variant: i ? `default` : `nested`,
            icon: (0, Y.jsx)(Ee, { className: `size-4`, href: `https://${e}` }),
            label: e,
            description: (0, Y.jsx)(f, {
              id: `settings.chatGpt.cloudBrowser.cookiesCount`,
              defaultMessage: `{count, plural, one {# cookie} other {# cookies}}`,
              description: `Number of cookies saved for a website`,
              values: { count: t },
            }),
            control: (0, Y.jsxs)(Y.Fragment, {
              children: [
                i &&
                  p &&
                  (0, Y.jsx)(n, {
                    color: `ghost`,
                    size: `toolbar`,
                    "aria-label": c.formatMessage(
                      {
                        id: `settings.chatGpt.cloudBrowser.cookies.toggleHosts`,
                        defaultMessage: `Hosts for {site}`,
                        description: `Expand or collapse the individual cookie hosts for a website`,
                      },
                      { site: r },
                    ),
                    "aria-controls": d,
                    "aria-expanded": l,
                    onClick: () => u(!l),
                    children: l ? (0, Y.jsx)(_, {}) : (0, Y.jsx)(o, {}),
                  }),
                (0, Y.jsx)(z, {
                  cloneCustomTrigger: !0,
                  tooltipContent: m,
                  children: (0, Y.jsx)(n, {
                    color: `ghost`,
                    size: `toolbar`,
                    disabled: a,
                    onClick: () => s({ hostname: e, includeSubdomains: i }),
                    "aria-label": m,
                    children: (0, Y.jsx)(se, {}),
                  }),
                }),
              ],
            }),
          },
          e,
        );
      }),
      (t[0] = p),
      (t[1] = d),
      (t[2] = r),
      (t[3] = l),
      (t[4] = c),
      (t[5] = s),
      (t[6] = a),
      (t[7] = m))
    : (m = t[7]);
  let h = m,
    g = p && l,
    v;
  if (t[8] !== i || t[9] !== h) {
    let e;
    (t[11] === h ? (e = t[12]) : ((e = (e) => h(e.hostname, e.cookie_count, !1)), (t[11] = h), (t[12] = e)),
      (v = i.map(e)),
      (t[8] = i),
      (t[9] = h),
      (t[10] = v));
  } else v = t[10];
  let y;
  t[13] !== r || t[14] !== i || t[15] !== h
    ? ((y = h(r, i.reduce(et, 0), !0)), (t[13] = r), (t[14] = i), (t[15] = h), (t[16] = y))
    : (y = t[16]);
  let b;
  return (
    t[17] !== d || t[18] !== g || t[19] !== v || t[20] !== y
      ? ((b = (0, Y.jsx)(ze, { contentId: d, expanded: g, content: v, children: y })),
        (t[17] = d),
        (t[18] = g),
        (t[19] = v),
        (t[20] = y),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
function et(e, t) {
  return e + t.cookie_count;
}
var tt, nt, rt, Y;
function it() {
  return (it = e(() => {
    ((tt = U()),
      p(),
      D(),
      V(),
      (nt = t(ve(), 1)),
      y(),
      (rt = me()),
      I(),
      Le(),
      De(),
      B(),
      x(),
      ke(),
      Ae(),
      R(),
      j(),
      W(),
      we(),
      ge(),
      je(),
      F(),
      Re(),
      h(),
      u(),
      Be(),
      Je(),
      (Y = G()));
  }))();
}
function at(e, t, n) {
  function r() {
    if (e.get(_e) !== t || e.get(Ce) !== n) throw new DOMException(`Account changed`, `AbortError`);
  }
  return {
    queryKey: [`orbit-cloud-browser-cookies`, t, n],
    enabled: t != null && n != null,
    queryFn: async ({ signal: e }) => {
      if (t == null || n == null) throw new DOMException(`Account unavailable`, `AbortError`);
      let i = await q.safeGet(`/flora/browser/cookies`, {
        parameters: { query: { surface: `Orbit` } },
        additionalHeaders: { "ChatGPT-Account-Id": t },
        expectedIdentity: { accountId: t, userId: n },
        expectedErrorStatuses: [403, 404, 409],
        assertRequestCurrent: r,
        signal: e,
        retry: !1,
      });
      if ((e.throwIfAborted(), r(), i.target == null)) throw Error(`Cookie target missing`);
      return i;
    },
    staleTime: 0,
    gcTime: 0,
    retry: !1,
  };
}
function ot() {
  return (ot = e(() => {
    (Le(), De());
  }))();
}
function st(e) {
  let t = (0, lt.c)(63),
    { onBack: r } = e,
    i = m(c),
    a = te(),
    o = w(_e),
    s = w(Ce),
    l = o != null && s != null,
    u;
  t[0] !== o || t[1] !== s
    ? ((u = [`orbit-cloud-browser-cookies`, o, s]), (t[0] = o), (t[1] = s), (t[2] = u))
    : (u = t[2]);
  let d = u,
    p;
  t[3] !== o || t[4] !== i || t[5] !== s
    ? ((p = function () {
        if (i.get(_e) !== o || i.get(Ce) !== s) throw new DOMException(`Account changed`, `AbortError`);
      }),
      (t[3] = o),
      (t[4] = i),
      (t[5] = s),
      (t[6] = p))
    : (p = t[6]);
  let h = p,
    g;
  t[7] !== o || t[8] !== i || t[9] !== s
    ? ((g = at(i, o, s)), (t[7] = o), (t[8] = i), (t[9] = s), (t[10] = g))
    : (g = t[10]);
  let { data: _, error: v, isPending: y, isError: b, isFetching: x, refetch: S } = E(g),
    C = l && !b ? _?.target : void 0;
  if (l && v instanceof P && v.status === 404 && v.errorCode === `orbit_cookie_target_unavailable`) {
    let e, i;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(ne, {})), (i = (0, X.jsx)(f, { ...J.cookiesBack })), (t[11] = e), (t[12] = i))
      : ((e = t[11]), (i = t[12]));
    let a;
    t[13] === r
      ? (a = t[14])
      : ((a = (0, X.jsxs)(n, { color: `ghost`, size: `toolbar`, onClick: r, children: [e, i] })),
        (t[13] = r),
        (t[14] = a));
    let o;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, X.jsx)(f, { ...He.title })), (t[15] = o))
      : (o = t[15]);
    let s, c;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, X.jsx)(f, {
          id: `settings.cloudComputer.orbitCookies.unavailable`,
          defaultMessage: `No dot found`,
          description: `Empty state in dot cookie settings when there is no available primary dot`,
        })),
        (c = (0, X.jsx)(f, {
          id: `settings.cloudComputer.orbitCookies.unavailableDescription`,
          defaultMessage: `Your dot's cookies will appear here when a dot is available`,
          description: `Explanation in dot cookie settings when no primary dot is available; a dot is the user's personal agent`,
        })),
        (t[16] = s),
        (t[17] = c))
      : ((s = t[16]), (c = t[17]));
    let l;
    t[18] === S ? (l = t[19]) : ((l = () => void S()), (t[18] = S), (t[19] = l));
    let u;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, X.jsx)(f, {
          id: `settings.cloudComputer.orbitCookies.refresh`,
          defaultMessage: `Refresh`,
          description: `Button to check again for an available dot and its saved website cookies`,
        })),
        (t[20] = u))
      : (u = t[20]);
    let d;
    t[21] !== x || t[22] !== l
      ? ((d = (0, X.jsx)(K, {
          children: (0, X.jsx)(K.Content, {
            children: (0, X.jsx)(oe, {
              children: (0, X.jsx)(H, {
                label: s,
                description: c,
                control: (0, X.jsx)(n, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: x,
                  onClick: l,
                  children: u,
                }),
              }),
            }),
          }),
        })),
        (t[21] = x),
        (t[22] = l),
        (t[23] = d))
      : (d = t[23]);
    let p;
    return (
      t[24] !== d || t[25] !== a
        ? ((p = (0, X.jsx)(Oe, { backSlot: a, title: o, children: d })),
          (t[24] = d),
          (t[25] = a),
          (t[26] = p))
        : (p = t[26]),
      p
    );
  }
  let T;
  t[27] !== o || t[28] !== C?.primary_generation || t[29] !== C?.workspace_id || t[30] !== s
    ? ((T = JSON.stringify([o, s, C?.workspace_id, C?.primary_generation])),
      (t[27] = o),
      (t[28] = C?.primary_generation),
      (t[29] = C?.workspace_id),
      (t[30] = s),
      (t[31] = T))
    : (T = t[31]);
  let D = C == null ? void 0 : _?.hosts,
    O;
  t[32] === b
    ? (O = t[33])
    : ((O = b
        ? (0, X.jsx)(f, {
            id: `restricted.cloudComputer.orbitCookies.loadError.dot`,
            defaultMessage: `Your dot's cookies couldn't be loaded`,
            description: `Error loading saved website cookies for the user's dot; the user can retry`,
          })
        : null),
      (t[32] = b),
      (t[33] = O));
  let k = C != null,
    A,
    j,
    M;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(f, { ...He.title })),
      (M = (0, X.jsx)(f, { ...He.description })),
      (A = (0, X.jsx)(f, {
        id: `restricted.cloudComputer.orbitCookies.clearDescription.dot`,
        defaultMessage: `Remove cookies saved by your dot`,
        description: `Description of Clear all in the cookie manager for the user's dot`,
      })),
      (t[34] = A),
      (t[35] = j),
      (t[36] = M))
    : ((A = t[34]), (j = t[35]), (M = t[36]));
  let N;
  t[37] === S ? (N = t[38]) : ((N = () => void S()), (t[37] = S), (t[38] = N));
  let F;
  t[39] !== o || t[40] !== h || t[41] !== a || t[42] !== d || t[43] !== C || t[44] !== s
    ? ((F = async (e) => {
        if ((await a.cancelQueries({ queryKey: d }), h(), C == null || o == null || s == null))
          throw new DOMException(`Cookie target unavailable`, `AbortError`);
        let t = {
          additionalHeaders: { "ChatGPT-Account-Id": o },
          expectedIdentity: { accountId: o, userId: s },
          expectedErrorStatuses: [403, 404, 409],
          assertRequestCurrent: h,
        };
        e === `all`
          ? await q.safeDelete(`/agent/browser_context`, {
              ...t,
              parameters: { query: { surface: `Orbit`, ...C } },
              retry: !1,
            })
          : await q.safeDelete(`/flora/browser/cookies/{hostname}`, {
              ...t,
              parameters: {
                path: { hostname: e.hostname },
                query: { surface: `Orbit`, ...C, include_subdomains: e.includeSubdomains },
              },
              retry: !1,
            });
      }),
      (t[39] = o),
      (t[40] = h),
      (t[41] = a),
      (t[42] = d),
      (t[43] = C),
      (t[44] = s),
      (t[45] = F))
    : (F = t[45]);
  let I;
  t[46] !== a || t[47] !== d
    ? ((I = () => a.invalidateQueries({ queryKey: d })), (t[46] = a), (t[47] = d), (t[48] = I))
    : (I = t[48]);
  let L;
  t[49] !== F || t[50] !== I
    ? ((L = { mutationFn: F, onSettled: I, retry: !1 }), (t[49] = F), (t[50] = I), (t[51] = L))
    : (L = t[51]);
  let R, ee;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, X.jsx)(f, {
        id: `restricted.cloudComputer.orbitCookies.deleteWarning.dot`,
        defaultMessage: `Cookies saved by your dot will be permanently deleted. Your dot may need to sign in to affected websites again.`,
        description: `Warning in the dot's cookie deletion dialog for one host, a site, or all saved cookies; affected websites may require signing in again`,
      })),
      (ee = (0, X.jsx)(f, {
        id: `restricted.cloudComputer.orbitCookies.deleteError.dot`,
        defaultMessage: `Your dot's cookies couldn't be deleted. Try again.`,
        description: `Retryable error in the cookie manager for the user's dot`,
      })),
      (t[52] = R),
      (t[53] = ee))
    : ((R = t[52]), (ee = t[53]));
  let re;
  return (
    t[54] !== y ||
    t[55] !== r ||
    t[56] !== N ||
    t[57] !== L ||
    t[58] !== T ||
    t[59] !== D ||
    t[60] !== O ||
    t[61] !== k
      ? ((re = (0, X.jsx)(
          Qe,
          {
            hosts: D,
            isPending: y,
            loadError: O,
            canDelete: k,
            title: j,
            subtitle: M,
            description: A,
            onBack: r,
            onRetry: N,
            deleteMutationOptions: L,
            renderConfirmationTitle: ct,
            confirmationDescription: R,
            deletionError: ee,
          },
          T,
        )),
        (t[54] = y),
        (t[55] = r),
        (t[56] = N),
        (t[57] = L),
        (t[58] = T),
        (t[59] = D),
        (t[60] = O),
        (t[61] = k),
        (t[62] = re))
      : (re = t[62]),
    re
  );
}
function ct(e) {
  return e === `all`
    ? (0, X.jsx)(f, {
        id: `restricted.cloudComputer.orbitCookies.clearTitle.dot`,
        defaultMessage: `Clear all of your dot's cookies?`,
        description: `Confirmation title for permanently deleting all saved website cookies for the user's dot`,
      })
    : (0, X.jsx)(f, {
        id: `restricted.cloudComputer.orbitCookies.deleteTitle.dot`,
        defaultMessage: `Delete your dot's cookies for {hostname}?`,
        description: `Confirmation title for deleting the dot's cookies for a website; hostname is the selected website or individual host`,
        values: { hostname: e.hostname },
      });
}
var lt, X;
function ut() {
  return (ut = e(() => {
    ((lt = U()),
      D(),
      V(),
      y(),
      I(),
      Le(),
      De(),
      B(),
      x(),
      W(),
      we(),
      it(),
      Je(),
      ge(),
      F(),
      h(),
      de(),
      Ue(),
      ot(),
      (X = G()));
  }))();
}
function dt(e) {
  let t = (0, ft.c)(28),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ decision: r, disabled: i, onSelect: a, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  t[5] === r
    ? (o = t[6])
    : ((o =
        r === `allow`
          ? (0, pt.jsx)(f, {
              id: `settings.chatGpt.cloudComputer.site.allow`,
              defaultMessage: `Always allow`,
              description: `Website-specific permission in Cloud computer settings that allows browsing on this site without asking. Short option label.`,
            })
          : (0, pt.jsx)(f, {
              id: `settings.chatGpt.cloudComputer.site.block`,
              defaultMessage: `Always block`,
              description: `Website-specific permission in Cloud computer settings that prevents browsing on this site. Short option label.`,
            })),
      (t[5] = r),
      (t[6] = o));
  let c;
  t[7] !== n || t[8] !== i || t[9] !== o
    ? ((c = (0, pt.jsx)(be, { ...n, disabled: i, children: o })),
      (t[7] = n),
      (t[8] = i),
      (t[9] = o),
      (t[10] = c))
    : (c = t[10]);
  let u = r === `deny` ? l : void 0,
    d;
  t[11] === a ? (d = t[12]) : ((d = () => a(`deny`)), (t[11] = a), (t[12] = d));
  let p;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, pt.jsx)(f, {
        id: `settings.chatGpt.cloudComputer.site.block`,
        defaultMessage: `Always block`,
        description: `Website-specific permission in Cloud computer settings that prevents browsing on this site. Short option label.`,
      })),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== u || t[15] !== d
    ? ((m = (0, pt.jsx)(S.Item, { RightIcon: u, onSelect: d, children: p })),
      (t[14] = u),
      (t[15] = d),
      (t[16] = m))
    : (m = t[16]);
  let h;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, pt.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.site.allowWarning`,
        defaultMessage: `Elevated risk for your data`,
        description: `Warns that allowing this website without approval increases risk to the user's data`,
      })),
      (t[17] = h))
    : (h = t[17]);
  let g = r === `allow` ? l : void 0,
    _;
  t[18] === a ? (_ = t[19]) : ((_ = () => a(`allow`)), (t[18] = a), (t[19] = _));
  let v;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, pt.jsx)(f, {
        id: `settings.chatGpt.cloudComputer.site.allow`,
        defaultMessage: `Always allow`,
        description: `Website-specific permission in Cloud computer settings that allows browsing on this site without asking. Short option label.`,
      })),
      (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] !== g || t[22] !== _
    ? ((y = (0, pt.jsx)(S.Item, {
        subTextAllowWrap: !0,
        tone: `warning`,
        SubText: h,
        RightIcon: g,
        onSelect: _,
        children: v,
      })),
      (t[21] = g),
      (t[22] = _),
      (t[23] = y))
    : (y = t[23]);
  let b;
  return (
    t[24] !== y || t[25] !== c || t[26] !== m
      ? ((b = (0, pt.jsxs)(s, { align: `end`, triggerButton: c, children: [m, y] })),
        (t[24] = y),
        (t[25] = c),
        (t[26] = m),
        (t[27] = b))
      : (b = t[27]),
    b
  );
}
var ft, pt;
function mt() {
  return (mt = e(() => {
    ((ft = U()), I(), a(), x(), Ie(), (pt = G()));
  }))();
}
function ht(e) {
  let t = (0, _t.c)(72),
    { open: r, trigger: i, pending: a, failed: o, onSubmit: s, onOpenChange: c } = e,
    l = C(),
    [u, d] = (0, vt.useState)(``),
    [p, m] = (0, vt.useState)(`allow`),
    h = (0, vt.useId)(),
    g = (0, vt.useId)(),
    _ = (0, vt.useId)(),
    v;
  t[0] === u ? (v = t[1]) : ((v = gt(u)), (t[0] = u), (t[1] = v));
  let y = v,
    b;
  t[2] !== y || t[3] !== u
    ? ((b = u.trim().length > 0 && y == null), (t[2] = y), (t[3] = u), (t[4] = b))
    : (b = t[4]);
  let x = b,
    S;
  t[5] !== c || t[6] !== a
    ? ((S = (e) => {
        a || (d(``), m(`allow`), c(e));
      }),
      (t[5] = c),
      (t[6] = a),
      (t[7] = S))
    : (S = t[7]);
  let w = S,
    E = !a,
    D;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { "aria-describedby": void 0 }), (t[8] = D))
    : (D = t[8]);
  let k;
  t[9] !== p || t[10] !== s || t[11] !== y || t[12] !== a
    ? ((k = (e) => {
        (e.preventDefault(), y != null && !a && s({ pattern: y.canonicalPattern, decision: p }));
      }),
      (t[9] = p),
      (t[10] = s),
      (t[11] = y),
      (t[12] = a),
      (t[13] = k))
    : (k = t[13]);
  let j;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(L, {
        children: (0, Z.jsx)(A, {
          title: (0, Z.jsx)(O, {
            children: (0, Z.jsx)(f, {
              id: `settings.chatGpt.cloudBrowser.addDialog.title`,
              defaultMessage: `Add website`,
              description: `Title of the dialog for adding a cloud browser website permission`,
            }),
          }),
        }),
      })),
      (t[14] = j))
    : (j = t[14]);
  let M;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.addDialog.site`,
        defaultMessage: `Site or pattern`,
        description: `Label for the website origin or wildcard pattern input`,
      })),
      (t[15] = M))
    : (M = t[15]);
  let N;
  t[16] === h
    ? (N = t[17])
    : ((N = (0, Z.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: h,
        children: M,
      })),
      (t[16] = h),
      (t[17] = N));
  let P;
  t[18] === l
    ? (P = t[19])
    : ((P = l.formatMessage({
        id: `settings.chatGpt.cloudBrowser.addDialog.placeholder`,
        defaultMessage: `https://example.com`,
        description: `Example website address in the cloud browser site-permission input. Do not translate the address.`,
      })),
      (t[18] = l),
      (t[19] = P));
  let F = x ? g : void 0,
    I;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => d(e.currentTarget.value)), (t[20] = I))
    : (I = t[20]);
  let R;
  t[21] !== h || t[22] !== x || t[23] !== a || t[24] !== u || t[25] !== P || t[26] !== F
    ? ((R = (0, Z.jsx)(xe, {
        id: h,
        autoFocus: !0,
        autoCapitalize: `off`,
        autoComplete: `off`,
        spellCheck: !1,
        inputMode: `url`,
        maxLength: 4096,
        required: !0,
        disabled: a,
        value: u,
        placeholder: P,
        "aria-invalid": x,
        "aria-describedby": F,
        onChange: I,
      })),
      (t[21] = h),
      (t[22] = x),
      (t[23] = a),
      (t[24] = u),
      (t[25] = P),
      (t[26] = F),
      (t[27] = R))
    : (R = t[27]);
  let te;
  t[28] !== g || t[29] !== x
    ? ((te =
        x &&
        (0, Z.jsx)(`span`, {
          id: g,
          className: `text-xs text-danger`,
          role: `alert`,
          children: (0, Z.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.addDialog.invalid`,
            defaultMessage: `Enter a valid website address`,
            description: `Validation error below the cloud browser site-permission input when the address is invalid`,
          }),
        })),
      (t[28] = g),
      (t[29] = x),
      (t[30] = te))
    : (te = t[30]);
  let ne;
  t[31] !== R || t[32] !== te || t[33] !== N
    ? ((ne = (0, Z.jsx)(L, { spacing: `large`, children: (0, Z.jsxs)(le, { children: [N, R, te] }) })),
      (t[31] = R),
      (t[32] = te),
      (t[33] = N),
      (t[34] = ne))
    : (ne = t[34]);
  let ie;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Z.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.addDialog.permission`,
        defaultMessage: `Browsing`,
        description: `Label for the allow-or-block permission selector`,
      })),
      (t[35] = ie))
    : (ie = t[35]);
  let ae;
  t[36] === _
    ? (ae = t[37])
    : ((ae = (0, Z.jsx)(`span`, {
        id: _,
        className: `text-sm font-medium text-default select-none`,
        children: ie,
      })),
      (t[36] = _),
      (t[37] = ae));
  let oe;
  t[38] !== p || t[39] !== a || t[40] !== _
    ? ((oe = (0, Z.jsx)(dt, { "aria-labelledby": _, decision: p, disabled: a, onSelect: m })),
      (t[38] = p),
      (t[39] = a),
      (t[40] = _),
      (t[41] = oe))
    : (oe = t[41]);
  let se;
  t[42] !== ae || t[43] !== oe
    ? ((se = (0, Z.jsx)(L, { spacing: `large`, children: (0, Z.jsxs)(le, { children: [ae, oe] }) })),
      (t[42] = ae),
      (t[43] = oe),
      (t[44] = se))
    : (se = t[44]);
  let z;
  t[45] === o
    ? (z = t[46])
    : ((z =
        o &&
        (0, Z.jsx)(L, {
          children: (0, Z.jsx)(T, {
            type: `error`,
            variant: `callout`,
            role: `alert`,
            content: (0, Z.jsx)(f, {
              id: `settings.chatGpt.cloudBrowser.addDialog.failed`,
              defaultMessage: `Cloud browser settings couldn't be updated`,
              description: `Retryable error after saving a cloud website permission fails`,
            }),
          }),
        })),
      (t[45] = o),
      (t[46] = z));
  let B;
  t[47] === w ? (B = t[48]) : ((B = () => w(!1)), (t[47] = w), (t[48] = B));
  let V;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Z.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.cancelAddSite`,
        defaultMessage: `Cancel`,
        description: `Close the add website dialog without saving`,
      })),
      (t[49] = V))
    : (V = t[49]);
  let H;
  t[50] !== a || t[51] !== B
    ? ((H = (0, Z.jsx)(n, { type: `button`, color: `secondary`, disabled: a, onClick: B, children: V })),
      (t[50] = a),
      (t[51] = B),
      (t[52] = H))
    : (H = t[52]);
  let ue = y == null || a,
    de;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Z.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.addDialog.save`,
        defaultMessage: `Add website`,
        description: `Save the website and its browsing permission`,
      })),
      (t[53] = de))
    : (de = t[53]);
  let U;
  t[54] !== a || t[55] !== ue
    ? ((U = (0, Z.jsx)(n, { type: `submit`, color: `primary`, disabled: ue, loading: a, children: de })),
      (t[54] = a),
      (t[55] = ue),
      (t[56] = U))
    : (U = t[56]);
  let W;
  t[57] !== H || t[58] !== U
    ? ((W = (0, Z.jsx)(L, { spacing: `large`, children: (0, Z.jsxs)(ce, { children: [H, U] }) })),
      (t[57] = H),
      (t[58] = U),
      (t[59] = W))
    : (W = t[59]);
  let fe;
  t[60] !== ne || t[61] !== se || t[62] !== z || t[63] !== W || t[64] !== k
    ? ((fe = (0, Z.jsxs)(re, { as: `form`, onSubmit: k, children: [j, ne, se, z, W] })),
      (t[60] = ne),
      (t[61] = se),
      (t[62] = z),
      (t[63] = W),
      (t[64] = k),
      (t[65] = fe))
    : (fe = t[65]);
  let G;
  return (
    t[66] !== w || t[67] !== r || t[68] !== fe || t[69] !== E || t[70] !== i
      ? ((G = (0, Z.jsx)(ee, {
          open: r,
          triggerContent: i,
          size: `compact`,
          showDialogClose: E,
          onOpenChange: w,
          contentProps: D,
          children: fe,
        })),
        (t[66] = w),
        (t[67] = r),
        (t[68] = fe),
        (t[69] = E),
        (t[70] = i),
        (t[71] = G))
      : (G = t[71]),
    G
  );
}
function gt(e) {
  let t = e.trim().replace(/\/$/, ``),
    n = t.includes(`://`) ? t : `https://${t}`;
  return n.length <= 4096 ? ie(n) : null;
}
var _t, vt, Z;
function yt() {
  return (yt = e(() => {
    ((_t = U()), i(), (vt = me()), I(), d(), B(), ue(), M(), he(), mt(), (Z = G()));
  }))();
}
function bt() {
  let e = (0, Ct.c)(37),
    t = m(c),
    r = C(),
    i = te(),
    a = w(Pe),
    o;
  e[0] === a ? (o = e[1]) : ((o = [`chatgpt-cloud-browser-passkeys`, a]), (e[0] = a), (e[1] = o));
  let s = o,
    [l, u] = (0, wt.useState)(null),
    d = a != null,
    p;
  e[2] !== s || e[3] !== d
    ? ((p = { queryKey: s, enabled: d, queryFn: St, staleTime: v.ONE_MINUTE }),
      (e[2] = s),
      (e[3] = d),
      (e[4] = p))
    : (p = e[4]);
  let { data: h, isPending: _, isError: y, refetch: b } = E(p),
    x;
  e[5] !== i || e[6] !== s
    ? ((x = (e, t) => {
        (i.setQueryData(s, (e) =>
          e == null ? e : { passkeys: e.passkeys.filter((e) => e.credential_id !== t) },
        ),
          u(null),
          i.invalidateQueries({ queryKey: s }));
      }),
      (e[5] = i),
      (e[6] = s),
      (e[7] = x))
    : (x = e[7]);
  let S;
  e[8] !== r || e[9] !== t
    ? ((S = () =>
        t
          .get(N)
          .danger(r.formatMessage(J.passkeysDeleteError), {
            errorAnalytics: { toastId: `settings.chatGpt.cloudBrowser.passkeys.deleteError` },
          })),
      (e[8] = r),
      (e[9] = t),
      (e[10] = S))
    : (S = e[10]);
  let T;
  e[11] !== x || e[12] !== S
    ? ((T = { mutationFn: xt, onSuccess: x, onError: S }), (e[11] = x), (e[12] = S), (e[13] = T))
    : (T = e[13]);
  let D = g(T),
    O;
  if (_) {
    let t;
    (e[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Ne, {})), (e[14] = t))
      : (t = e[14]),
      (O = t));
  } else if (y) {
    let t;
    e[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`span`, { role: `alert`, children: (0, Q.jsx)(f, { ...J.passkeysLoadError }) })),
        (e[15] = t))
      : (t = e[15]);
    let r;
    e[16] === b ? (r = e[17]) : ((r = () => void b()), (e[16] = b), (e[17] = r));
    let i;
    e[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(f, { ...J.retry })), (e[18] = i))
      : (i = e[18]);
    let a;
    (e[19] === r
      ? (a = e[20])
      : ((a = (0, Q.jsx)(H, {
          label: t,
          control: (0, Q.jsx)(n, { color: `secondary`, size: `toolbar`, onClick: r, children: i }),
        })),
        (e[19] = r),
        (e[20] = a)),
      (O = a));
  } else if (h?.passkeys.length === 0) {
    let t;
    (e[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Me, {
          align: `start`,
          layout: `settings-row`,
          children: (0, Q.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.passkeys.empty`,
            defaultMessage: `No passkeys saved`,
            description: `There are no saved cloud browser passkeys`,
          }),
        })),
        (e[21] = t))
      : (t = e[21]),
      (O = t));
  } else {
    let t;
    e[22] !== h?.passkeys || e[23] !== D || e[24] !== r
      ? ((t = h?.passkeys.map((e) =>
          (0, Q.jsx)(
            H,
            {
              label: e.relying_party_id,
              description: e.user_display_name || e.user_name,
              control: (0, Q.jsx)(n, {
                color: `danger`,
                size: `toolbar`,
                disabled: D.isPending,
                onClick: () => u(e),
                "aria-label": r.formatMessage(
                  {
                    id: `settings.chatGpt.cloudBrowser.passkeys.deleteLabel`,
                    defaultMessage: `Delete passkey for {account} on {website}`,
                    description: `Delete the named account's cloud browser passkey on the named website`,
                  },
                  { account: e.user_display_name || e.user_name, website: e.relying_party_id },
                ),
                children: (0, Q.jsx)(f, {
                  id: `settings.chatGpt.cloudBrowser.passkeys.delete`,
                  defaultMessage: `Delete passkey`,
                  description: `Open confirmation before deleting a saved cloud browser passkey`,
                }),
              }),
            },
            e.credential_id,
          ),
        )),
        (e[22] = h?.passkeys),
        (e[23] = D),
        (e[24] = r),
        (e[25] = t))
      : (t = e[25]);
    let i;
    (e[26] === t ? (i = e[27]) : ((i = (0, Q.jsx)(oe, { children: t })), (e[26] = t), (e[27] = i)), (O = i));
  }
  let k;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(K.Header, {
        title: (0, Q.jsx)(f, {
          id: `settings.chatGpt.cloudBrowser.passkeys.title`,
          defaultMessage: `Passkeys`,
          description: `Section for website passkeys saved by the cloud browser`,
        }),
      })),
      (e[28] = k))
    : (k = e[28]);
  let A;
  e[29] === O ? (A = e[30]) : ((A = (0, Q.jsx)(K.Content, { children: O })), (e[29] = O), (e[30] = A));
  let j;
  e[31] !== D || e[32] !== l
    ? ((j =
        l != null &&
        (0, Q.jsx)(Ve, {
          pending: D.isPending,
          onClose: () => u(null),
          onConfirm: () => D.mutate(l.credential_id),
          title: (0, Q.jsx)(f, { ...J.passkeysDeleteTitle }),
          description: (0, Q.jsx)(f, {
            ...J.passkeysDeleteDescription,
            values: { account: l.user_display_name || l.user_name, website: l.relying_party_id },
          }),
        })),
      (e[31] = D),
      (e[32] = l),
      (e[33] = j))
    : (j = e[33]);
  let M;
  return (
    e[34] !== A || e[35] !== j
      ? ((M = (0, Q.jsxs)(K, { children: [k, A, j] })), (e[34] = A), (e[35] = j), (e[36] = M))
      : (M = e[36]),
    M
  );
}
function xt(e) {
  return q.safeDelete(`/flora/browser/passkeys/{credential_id}`, {
    parameters: { path: { credential_id: e } },
  });
}
function St() {
  return q.safeGet(`/flora/browser/passkeys`);
}
var Ct, wt, Q;
function Tt() {
  return (Tt = e(() => {
    ((Ct = U()),
      p(),
      D(),
      V(),
      y(),
      (wt = me()),
      I(),
      Le(),
      De(),
      B(),
      ke(),
      R(),
      W(),
      ge(),
      je(),
      F(),
      h(),
      u(),
      Be(),
      Je(),
      (Q = G()));
  }))();
}
function Et() {
  let e = (0, At.c)(4),
    t = w(Pe),
    n = fe(),
    r = new URLSearchParams(n.search);
  if (r.has(`onepassword_account_id`) || r.has(`onepassword_result`)) {
    let t;
    return (
      e[0] === n
        ? (t = e[1])
        : ((t = (0, $.jsx)(ae, { to: { ...n, pathname: `/settings/passwords` }, replace: !0 })),
          (e[0] = n),
          (e[1] = t)),
      t
    );
  }
  let i;
  return (
    e[2] === t ? (i = e[3]) : ((i = (0, $.jsx)(Dt, { accountUserId: t }, t)), (e[2] = t), (e[3] = i)),
    i
  );
}
function Dt(e) {
  let t = (0, At.c)(86),
    { accountUserId: r } = e,
    i = m(c),
    a = [`chatgpt-cloud-browser-config`, r],
    u = w(ye),
    d = w(_e),
    p = w(Ce),
    h;
  t[0] !== d || t[1] !== i || t[2] !== p
    ? ((h = at(i, d, p)), (t[0] = d), (t[1] = i), (t[2] = p), (t[3] = h))
    : (h = t[3]);
  let _ = h,
    y = _.enabled && !u,
    x;
  t[4] !== _ || t[5] !== y
    ? ((x = { ..._, enabled: y, staleTime: _.staleTime }), (t[4] = _), (t[5] = y), (t[6] = x))
    : (x = t[6]);
  let { data: T, isError: D } = E(x),
    O = u || (!D && (T?.hosts.length ?? 0) > 0),
    k = C(),
    A = te(),
    [j, M] = (0, jt.useState)(!1),
    [P, F] = (0, jt.useState)(null),
    {
      data: I,
      isPending: L,
      isError: R,
      refetch: ee,
    } = E({ queryKey: a, enabled: r != null, queryFn: kt, staleTime: v.ONE_MINUTE }),
    ne = JSON.stringify(a),
    re;
  t[7] === ne ? (re = t[8]) : ((re = { id: ne }), (t[7] = ne), (t[8] = re));
  let ie = (e) => {
      A.setQueryData(a, e);
    },
    ae;
  t[9] !== k || t[10] !== j || t[11] !== i
    ? ((ae = () => {
        j ||
          i
            .get(N)
            .danger(k.formatMessage(J.updateError), {
              errorAnalytics: { toastId: `cloud-browser-settings-update-failed` },
            });
      }),
      (t[9] = k),
      (t[10] = j),
      (t[11] = i),
      (t[12] = ae))
    : (ae = t[12]);
  let ce;
  t[13] !== re || t[14] !== ie || t[15] !== ae
    ? ((ce = { scope: re, mutationFn: Ot, onSuccess: ie, onError: ae }),
      (t[13] = re),
      (t[14] = ie),
      (t[15] = ae),
      (t[16] = ce))
    : (ce = t[16]);
  let z = g(ce),
    B = I == null || L || z.isPending,
    V;
  t[17] !== I?.approval_mode || t[18] !== I?.disable_auto_review
    ? ((V = `auto_approve`),
      I?.approval_mode === `never_ask`
        ? (V = `always_allow`)
        : I?.disable_auto_review === !0 && (V = `always_ask`),
      (t[17] = I?.approval_mode),
      (t[18] = I?.disable_auto_review),
      (t[19] = V))
    : (V = t[19]);
  let le = Mt[V],
    ue;
  if (
    (t[20] !== I || t[21] !== R || t[22] !== le.label
      ? ((ue = le.label),
        I ??
          (ue = R
            ? (0, $.jsx)(f, { ...J.permissionUnavailable })
            : (0, $.jsx)(f, { ...J.permissionLoading })),
        (t[20] = I),
        (t[21] = R),
        (t[22] = le.label),
        (t[23] = ue))
      : (ue = t[23]),
    P === `work`)
  ) {
    let e;
    return (
      t[24] === F ? (e = t[25]) : ((e = (0, $.jsx)(Ye, { onBack: () => F(null) })), (t[24] = F), (t[25] = e)),
      e
    );
  }
  if (P === `primary`) {
    let e;
    return (
      t[26] === F ? (e = t[27]) : ((e = (0, $.jsx)(st, { onBack: () => F(null) })), (t[26] = F), (t[27] = e)),
      e
    );
  }
  let de, U;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.sitePermissions`,
        defaultMessage: `Website permissions`,
        description: `Heading for ChatGPT cloud browser site permissions`,
      })),
      (U = (0, $.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.sitePermissions.description`,
        defaultMessage: `Add sites to override the default permission`,
        description: `Supporting text explaining that website-specific rules override the default browsing permission`,
      })),
      (t[28] = de),
      (t[29] = U))
    : ((de = t[28]), (U = t[29]));
  let W, fe;
  t[30] !== M || t[31] !== z
    ? ((W = (e) => {
        (e && z.reset(), M(e));
      }),
      (fe = (e) => z.mutate({ origin_mutation: e }, { onSuccess: () => M(!1) })),
      (t[30] = M),
      (t[31] = z),
      (t[32] = W),
      (t[33] = fe))
    : ((W = t[32]), (fe = t[33]));
  let G;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(f, {
        id: `settings.chatGpt.cloudBrowser.addSite`,
        defaultMessage: `Add website`,
        description: `Button in Cloud computer settings that opens a form to add a website-specific browsing permission.`,
      })),
      (t[34] = G))
    : (G = t[34]);
  let me;
  t[35] === B
    ? (me = t[36])
    : ((me = (0, $.jsx)(n, { color: `secondary`, size: `toolbar`, disabled: B, children: G })),
      (t[35] = B),
      (t[36] = me));
  let he;
  t[37] !== j || t[38] !== W || t[39] !== fe || t[40] !== me || t[41] !== z.isError || t[42] !== z.isPending
    ? ((he = (0, $.jsx)(K.Header, {
        title: de,
        subtitle: U,
        actions: (0, $.jsx)(ht, {
          open: j,
          pending: z.isPending,
          failed: z.isError,
          onOpenChange: W,
          onSubmit: fe,
          trigger: me,
        }),
      })),
      (t[37] = j),
      (t[38] = W),
      (t[39] = fe),
      (t[40] = me),
      (t[41] = z.isError),
      (t[42] = z.isPending),
      (t[43] = he))
    : (he = t[43]);
  let ge;
  t[44] === L ? (ge = t[45]) : ((ge = L && (0, $.jsx)(Ne, {})), (t[44] = L), (t[45] = ge));
  let ve;
  t[46] !== B || t[47] !== I || t[48] !== k || t[49] !== z
    ? ((ve =
        I != null &&
        I.origins.length > 0 &&
        (0, $.jsx)(oe, {
          children: I.origins.map((e) =>
            (0, $.jsx)(
              H,
              {
                label: (0, $.jsx)(`span`, { className: `break-all`, title: e.pattern, children: e.pattern }),
                icon: (0, $.jsx)(pe, {}),
                control: (t) =>
                  (0, $.jsxs)($.Fragment, {
                    children: [
                      (0, $.jsx)(dt, {
                        ...t,
                        decision: e.decision,
                        disabled: B,
                        onSelect: (t) => z.mutate({ origin_mutation: { pattern: e.pattern, decision: t } }),
                      }),
                      (0, $.jsx)(n, {
                        "aria-label": k.formatMessage(
                          {
                            id: `settings.chatGpt.cloudComputer.site.remove.label`,
                            defaultMessage: `Remove permission for {site}`,
                            description: `Accessible label for the delete button beside a website rule in Cloud computer settings. The site placeholder is the website URL or pattern whose permission will be removed.`,
                          },
                          { site: e.pattern },
                        ),
                        color: `ghost`,
                        disabled: B,
                        size: `toolbar`,
                        onClick: () =>
                          z.mutate({ origin_mutation: { pattern: e.pattern, decision: `unset` } }),
                        children: (0, $.jsx)(se, {}),
                      }),
                    ],
                  }),
              },
              e.pattern,
            ),
          ),
        })),
      (t[46] = B),
      (t[47] = I),
      (t[48] = k),
      (t[49] = z),
      (t[50] = ve))
    : (ve = t[50]);
  let xe;
  t[51] !== R || t[52] !== ee
    ? ((xe =
        R &&
        (0, $.jsx)(H, {
          label: (0, $.jsx)(f, { ...J.settingsLoadError }),
          control: (0, $.jsx)(n, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => void ee(),
            children: (0, $.jsx)(f, { ...J.settingsRetry }),
          }),
        })),
      (t[51] = R),
      (t[52] = ee),
      (t[53] = xe))
    : (xe = t[53]);
  let Se;
  t[54] !== ge || t[55] !== ve || t[56] !== xe
    ? ((Se = (0, $.jsxs)(K.Content, { children: [ge, ve, xe] })),
      (t[54] = ge),
      (t[55] = ve),
      (t[56] = xe),
      (t[57] = Se))
    : (Se = t[57]);
  let q;
  t[58] !== he || t[59] !== Se
    ? ((q = (0, $.jsxs)(K, { children: [he, Se] })), (t[58] = he), (t[59] = Se), (t[60] = q))
    : (q = t[60]);
  let we = q,
    Te,
    Ee;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(f, { ...Fe.cookies })),
      (Ee = (0, $.jsx)(f, { ...Fe.cookiesDescription })),
      (t[61] = Te),
      (t[62] = Ee))
    : ((Te = t[61]), (Ee = t[62]));
  let De;
  t[63] === F ? (De = t[64]) : ((De = () => F(`work`)), (t[63] = F), (t[64] = De));
  let Oe;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, $.jsx)(o, { className: `text-tertiary` })), (t[65] = Oe))
    : (Oe = t[65]);
  let ke;
  t[66] === De
    ? (ke = t[67])
    : ((ke = (0, $.jsx)(b, {
        edgeRounding: `surface`,
        label: Te,
        description: Ee,
        onClick: De,
        trailing: Oe,
      })),
      (t[66] = De),
      (t[67] = ke));
  let Ae = ke,
    je,
    Me;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(f, { ...Fe.approvals })),
      (Me = (0, $.jsx)(f, { ...Fe.approvalsDescription })),
      (t[68] = je),
      (t[69] = Me))
    : ((je = t[68]), (Me = t[69]));
  let Pe;
  t[70] !== B || t[71] !== V || t[72] !== ue || t[73] !== z
    ? ((Pe = (0, $.jsx)(H, {
        label: je,
        description: Me,
        control: (e) =>
          (0, $.jsx)(s, {
            align: `end`,
            triggerButton: (0, $.jsx)(be, { ...e, disabled: B, children: ue }),
            children: Object.entries(Mt).map((e) => {
              let [t, n] = e;
              return (0, $.jsx)(
                S.Item,
                {
                  subTextAllowWrap: !0,
                  SubText: n.description,
                  tone: t === `always_allow` ? `warning` : `default`,
                  RightIcon: V === t ? l : void 0,
                  onSelect: () => z.mutate(n.patch),
                  children: n.label,
                },
                t,
              );
            }),
          }),
      })),
      (t[70] = B),
      (t[71] = V),
      (t[72] = ue),
      (t[73] = z),
      (t[74] = Pe))
    : (Pe = t[74]);
  let Ie = Pe,
    Le;
  t[75] !== F || t[76] !== O
    ? ((Le = O ? () => F(`primary`) : void 0), (t[75] = F), (t[76] = O), (t[77] = Le))
    : (Le = t[77]);
  let Re;
  t[78] === I?.webauthn_enabled
    ? (Re = t[79])
    : ((Re = I?.webauthn_enabled === !0 && (0, $.jsx)(bt, {})), (t[78] = I?.webauthn_enabled), (t[79] = Re));
  let ze;
  return (
    t[80] !== Ae || t[81] !== Ie || t[82] !== we || t[83] !== Le || t[84] !== Re
      ? ((ze = (0, $.jsx)(We, {
          sitePermissions: we,
          cookies: Ae,
          onOpenOrbitCookies: Le,
          defaultPermissions: Ie,
          passkeys: Re,
        })),
        (t[80] = Ae),
        (t[81] = Ie),
        (t[82] = we),
        (t[83] = Le),
        (t[84] = Re),
        (t[85] = ze))
      : (ze = t[85]),
    ze
  );
}
function Ot(e) {
  return q.safePatch(`/flora/browser/config`, { requestBody: e });
}
function kt() {
  return q.safeGet(`/flora/browser/config`);
}
var At, jt, $, Mt;
function Nt() {
  return (Nt = e(() => {
    ((At = U()),
      p(),
      D(),
      V(),
      y(),
      (jt = me()),
      I(),
      k(),
      Le(),
      De(),
      B(),
      a(),
      x(),
      R(),
      Se(),
      W(),
      Te(),
      qe(),
      ut(),
      ot(),
      ge(),
      je(),
      F(),
      Ie(),
      h(),
      u(),
      yt(),
      it(),
      Tt(),
      mt(),
      Je(),
      ($ = G()),
      (Mt = {
        always_ask: {
          label: (0, $.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.alwaysAsk`,
            defaultMessage: `Always ask`,
            description: `Cloud browser permission that asks before actions`,
          }),
          description: (0, $.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.always_ask.description`,
            defaultMessage: `Ask before ChatGPT opens a website`,
            description: `Explains that Always ask requires approval before browsing`,
          }),
          patch: { approval_mode: `always_ask`, disable_auto_review: !0 },
        },
        auto_approve: {
          label: (0, $.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.autoApprove`,
            defaultMessage: `Auto approve`,
            description: `Short option label in ChatGPT Cloud browser settings for automatically approving or denying browsing actions based on risk.`,
          }),
          description: (0, $.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.auto_approve.description`,
            defaultMessage: `Automatically approve or deny actions based on their risk`,
            description: `Explains risk-based automatic approval`,
          }),
          patch: { approval_mode: `always_ask`, disable_auto_review: !1 },
        },
        always_allow: {
          label: (0, $.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.alwaysAllow`,
            defaultMessage: `Always allow`,
            description: `Short option label in ChatGPT Cloud browser settings for letting the browser open websites without asking the end user first.`,
          }),
          description: (0, $.jsx)(f, {
            id: `settings.chatGpt.cloudBrowser.always_allow.description`,
            defaultMessage: `Let ChatGPT open websites without asking`,
            description: `Explains that Always allow skips approval before browsing`,
          }),
          patch: { approval_mode: `never_ask`, disable_auto_review: !0 },
        },
      }));
  }))();
}
Nt();
export { Et as ChatGptCloudBrowserSettings };
//# sourceMappingURL=settings-9aafd1906a04.js.map
