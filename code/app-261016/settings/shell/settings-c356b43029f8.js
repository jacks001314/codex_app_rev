import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as n,
  $St as r,
  $st as i,
  BO as a,
  Bst as o,
  CH as s,
  FBt as c,
  HO as l,
  IH as u,
  IO as d,
  JO as f,
  LNt as p,
  LO as m,
  Lst as h,
  Mst as g,
  NSt as _,
  PBt as v,
  Pit as y,
  Qst as b,
  RO as x,
  Rst as ee,
  SSt as S,
  TY as C,
  VSt as w,
  Vrt as T,
  WO as E,
  XOt as D,
  Y3 as O,
  YOt as k,
  YR as A,
  Z3 as j,
  ZSt as M,
  _W as N,
  ck as P,
  ew as F,
  iCt as I,
  iw as te,
  jit as L,
  jst as R,
  kH as z,
  nB as B,
  okt as ne,
  qO as re,
  qrt as ie,
  rB as ae,
  rk as oe,
  sY as se,
  sw as V,
  tV as ce,
  tk as le,
  tkt as H,
  uw as U,
  vD as ue,
  vst as W,
  yD as G,
  yR as de,
  yst as fe,
  zO as pe,
  zst as me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as he,
  Dmr as ge,
  FF as _e,
  GF as ve,
  K_r as ye,
  QF as be,
  RF as xe,
  WF as Se,
  XF as Ce,
  ZF as we,
  ZLn as Te,
  Z_r as Ee,
  _p as De,
  bLr as Oe,
  cA as ke,
  du as Ae,
  eI as je,
  gp as Me,
  iRr as K,
  sA as q,
  tyr as Ne,
  uu as Pe,
  vLr as Fe,
  wLr as Ie,
  zRr as Le,
} from "./app-initial-ad16eaadf81f.js";
import { n as Re, t as ze } from "./settings-row-disclosure-4167ebc9233a.js";
import { n as Be, t as Ve } from "./delete-dialog-a1f8bd682f1f.js";
var He;
function Ue() {
  return (Ue = e(() => {
    (D(),
      (He = k({
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
    { sitePermissions: r, cookies: i, onOpenOrbitCookies: a, defaultPermissions: o, passkeys: s } = e,
    c,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Ke.jsx)(H, { ...Se.title })),
      (l = (0, Ke.jsx)(H, {
        id: `restricted.cloudComputer.description`,
        defaultMessage: `Manage cloud browsing settings and saved website cookies`,
        description: `Subtitle of cloud computer settings, which includes cookie managers for ChatGPT Work and the user's dot`,
      })),
      (t[0] = c),
      (t[1] = l))
    : ((c = t[0]), (l = t[1]));
  let d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Ke.jsx)(q.Header, {
        title: (0, Ke.jsx)(H, {
          id: `restricted.cloudComputer.general.title`,
          defaultMessage: `General`,
          description: `Heading for cloud computer cookie and website approval settings`,
        }),
      })),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === a
    ? (f = t[4])
    : ((f =
        a != null &&
        (0, Ke.jsx)(te, {
          edgeRounding: `surface`,
          label: (0, Ke.jsx)(H, { ...He.title }),
          description: (0, Ke.jsx)(H, { ...He.description }),
          onClick: a,
          trailing: (0, Ke.jsx)(u, { className: `text-tertiary` }),
        })),
      (t[3] = a),
      (t[4] = f));
  let p;
  t[5] !== i || t[6] !== o || t[7] !== f
    ? ((p = (0, Ke.jsxs)(q, {
        children: [d, (0, Ke.jsx)(q.Content, { children: (0, Ke.jsxs)(n, { children: [i, f, o] }) })],
      })),
      (t[5] = i),
      (t[6] = o),
      (t[7] = f),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== s || t[10] !== r || t[11] !== p
      ? ((m = (0, Ke.jsxs)(be, { title: c, subtitle: l, children: [p, r, s] })),
        (t[9] = s),
        (t[10] = r),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
var Ge, Ke;
function qe() {
  return (qe = e(() => {
    ((Ge = v()), D(), C(), je(), ke(), U(), F(), ve(), Ue(), (Ke = p()));
  }))();
}
var J;
function Je() {
  return (Je = e(() => {
    (D(),
      (J = k({
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
    i = r(b),
    a = ne(),
    o = ee(),
    s = I(Fe),
    c;
  t[0] === s ? (c = t[1]) : ((c = [`chatgpt-cloud-browser-cookies`, s]), (t[0] = s), (t[1] = c));
  let l = c,
    u = s != null,
    d;
  t[2] !== l || t[3] !== u
    ? ((d = { queryKey: l, enabled: u, queryFn: Ze, staleTime: me.ONE_MINUTE }),
      (t[2] = l),
      (t[3] = u),
      (t[4] = d))
    : (d = t[4]);
  let { data: f, isPending: p, isError: m, refetch: h } = g(d),
    _;
  t[5] !== o || t[6] !== l
    ? ((_ = (e, t) => {
        (o.setQueryData(l, (e) =>
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
          o.invalidateQueries({ queryKey: l }));
      }),
      (t[5] = o),
      (t[6] = l),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] !== a || t[9] !== i
    ? ((v = () =>
        i
          .get(ie)
          .danger(a.formatMessage(J.cookiesDeleteError), {
            errorAnalytics: { toastId: `settings.chatGpt.cloudBrowser.cookiesDeleteError` },
          })),
      (t[8] = a),
      (t[9] = i),
      (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] !== _ || t[12] !== v
    ? ((y = { mutationFn: Xe, onSuccess: _, onError: v }), (t[11] = _), (t[12] = v), (t[13] = y))
    : (y = t[13]);
  let x = y,
    S = f?.hosts,
    C;
  t[14] === m
    ? (C = t[15])
    : ((C = m ? (0, Y.jsx)(H, { ...J.cookiesLoadError }) : null), (t[14] = m), (t[15] = C));
  let w = s != null,
    T;
  t[16] === h ? (T = t[17]) : ((T = () => void h()), (t[16] = h), (t[17] = T));
  let E;
  return (
    t[18] !== s ||
    t[19] !== x ||
    t[20] !== p ||
    t[21] !== n ||
    t[22] !== T ||
    t[23] !== S ||
    t[24] !== C ||
    t[25] !== w
      ? ((E = (0, Y.jsx)(
          Qe,
          {
            hosts: S,
            isPending: p,
            loadError: C,
            canDelete: w,
            onBack: n,
            onRetry: T,
            deleteMutationOptions: x,
          },
          s,
        )),
        (t[18] = s),
        (t[19] = x),
        (t[20] = p),
        (t[21] = n),
        (t[22] = T),
        (t[23] = S),
        (t[24] = C),
        (t[25] = w),
        (t[26] = E))
      : (E = t[26]),
    E
  );
}
async function Xe(e) {
  e === `all`
    ? await K.safeDelete(`/agent/browser_context`)
    : await K.safeDelete(`/flora/browser/cookies/{hostname}`, {
        parameters: { path: { hostname: e.hostname }, query: { include_subdomains: e.includeSubdomains } },
      });
}
function Ze() {
  return K.safeGet(`/flora/browser/cookies`);
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
      deleteMutationOptions: f,
      renderConfirmationTitle: p,
      confirmationDescription: m,
      deletionError: h,
    } = e,
    [g, _] = (0, rt.useState)(null),
    v = fe(f),
    y;
  t[0] === v
    ? (y = t[1])
    : ((y = function (e) {
        (v.reset(), _(e));
      }),
      (t[0] = v),
      (t[1] = y));
  let b = y,
    x;
  if (i) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Y.jsx)(Ce, {})), (t[2] = e)) : (e = t[2]),
      (x = e));
  } else if (a != null) {
    let e;
    t[3] === a
      ? (e = t[4])
      : ((e = (0, Y.jsx)(`span`, { role: `alert`, children: a })), (t[3] = a), (t[4] = e));
    let n;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(H, { ...J.retry })), (t[5] = n))
      : (n = t[5]);
    let r;
    t[6] === d
      ? (r = t[7])
      : ((r = (0, Y.jsx)(O, { color: `secondary`, size: `toolbar`, onClick: d, children: n })),
        (t[6] = d),
        (t[7] = r));
    let i;
    (t[8] !== e || t[9] !== r
      ? ((i = (0, Y.jsx)(V, { label: e, control: r })), (t[8] = e), (t[9] = r), (t[10] = i))
      : (i = t[10]),
      (x = i));
  } else if (r?.length === 0) {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(Me, {
          align: `start`,
          layout: `settings-row`,
          children: (0, Y.jsx)(H, {
            id: `settings.chatGpt.cloudBrowser.cookies.empty`,
            defaultMessage: `No cookies saved`,
            description: `No cloud browser cookies are saved`,
          }),
        })),
        (t[11] = e))
      : (e = t[11]),
      (x = e));
  } else {
    let e;
    t[12] === r
      ? (e = t[13])
      : ((e = Object.entries((0, nt.default)(r, `registrable_domain`))), (t[12] = r), (t[13] = e));
    let i;
    (t[14] !== o || t[15] !== v.isPending || t[16] !== b || t[17] !== e
      ? ((i = (0, Y.jsx)(n, {
          children: e.map((e) => {
            let [t, n] = e;
            return (0, Y.jsx)($e, { domain: t, hosts: n, pending: !o || v.isPending, onDelete: b }, t);
          }),
        })),
        (t[14] = o),
        (t[15] = v.isPending),
        (t[16] = b),
        (t[17] = e),
        (t[18] = i))
      : (i = t[18]),
      (x = i));
  }
  let ee, S;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Y.jsx)(ce, {})), (S = (0, Y.jsx)(H, { ...J.cookiesBack })), (t[19] = ee), (t[20] = S))
    : ((ee = t[19]), (S = t[20]));
  let C;
  t[21] === u
    ? (C = t[22])
    : ((C = (0, Y.jsxs)(O, { color: `ghost`, size: `toolbar`, onClick: u, children: [ee, S] })),
      (t[21] = u),
      (t[22] = C));
  let w;
  t[23] === s
    ? (w = t[24])
    : ((w =
        s ??
        (0, Y.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.cookies`,
          defaultMessage: `Cookies`,
          description: `Title of cloud browser cookie management`,
        })),
      (t[23] = s),
      (t[24] = w));
  let T;
  t[25] === s
    ? (T = t[26])
    : ((T =
        s ??
        (0, Y.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.cookies`,
          defaultMessage: `Cookies`,
          description: `Cloud browser cookies`,
        })),
      (t[25] = s),
      (t[26] = T));
  let E;
  t[27] === l
    ? (E = t[28])
    : ((E =
        l ??
        (0, Y.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.cookies.clearDescription`,
          defaultMessage: `Remove cookies saved by the cloud browser`,
          description: `Description of deleting all cookies in the cloud browser`,
        })),
      (t[27] = l),
      (t[28] = E));
  let D = !o || v.isPending,
    k;
  t[29] === b ? (k = t[30]) : ((k = () => b(`all`)), (t[29] = b), (t[30] = k));
  let A;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Y.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.cookies.clearAll`,
        defaultMessage: `Clear all`,
        description: `Open confirmation to delete all cloud browser cookies`,
      })),
      (t[31] = A))
    : (A = t[31]);
  let j;
  t[32] !== D || t[33] !== k
    ? ((j = (0, Y.jsx)(O, { color: `danger`, size: `toolbar`, disabled: D, onClick: k, children: A })),
      (t[32] = D),
      (t[33] = k),
      (t[34] = j))
    : (j = t[34]);
  let M;
  t[35] !== j || t[36] !== T || t[37] !== E
    ? ((M = (0, Y.jsx)(q, {
        children: (0, Y.jsx)(q.Content, {
          children: (0, Y.jsx)(n, { children: (0, Y.jsx)(V, { label: T, description: E, control: j }) }),
        }),
      })),
      (t[35] = j),
      (t[36] = T),
      (t[37] = E),
      (t[38] = M))
    : (M = t[38]);
  let N;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Y.jsx)(q.Header, {
        title: (0, Y.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.sites`,
          defaultMessage: `Sites`,
          description: `Websites with saved cloud browser cookies`,
        }),
      })),
      (t[39] = N))
    : (N = t[39]);
  let P;
  t[40] === x
    ? (P = t[41])
    : ((P = (0, Y.jsxs)(q, { children: [N, (0, Y.jsx)(q.Content, { children: x })] })),
      (t[40] = x),
      (t[41] = P));
  let F;
  t[42] !== o || t[43] !== m || t[44] !== v || t[45] !== g || t[46] !== h || t[47] !== p
    ? ((F =
        g != null &&
        (0, Y.jsx)(Ve, {
          pending: v.isPending,
          disabled: !o,
          onClose: () => _(null),
          onConfirm: () => v.mutate(g, { onSuccess: () => _(null) }),
          error: v.isError ? h : null,
          title:
            p?.(g) ??
            (g === `all`
              ? (0, Y.jsx)(H, { ...J.cookiesClearTitle })
              : (0, Y.jsx)(H, { ...J.cookiesDeleteTitle, values: { hostname: g.hostname } })),
          description:
            m ??
            (g === `all`
              ? (0, Y.jsx)(H, { ...J.cookiesDeleteDescription })
              : (0, Y.jsx)(H, { ...J.cookiesDeleteSiteDescription })),
        })),
      (t[42] = o),
      (t[43] = m),
      (t[44] = v),
      (t[45] = g),
      (t[46] = h),
      (t[47] = p),
      (t[48] = F))
    : (F = t[48]);
  let I;
  return (
    t[49] !== c || t[50] !== M || t[51] !== P || t[52] !== F || t[53] !== C || t[54] !== w
      ? ((I = (0, Y.jsxs)(be, { backSlot: C, title: w, subtitle: c, children: [M, P, F] })),
        (t[49] = c),
        (t[50] = M),
        (t[51] = P),
        (t[52] = F),
        (t[53] = C),
        (t[54] = w),
        (t[55] = I))
      : (I = t[55]),
    I
  );
}
function $e(e) {
  let t = (0, tt.c)(22),
    { domain: n, hosts: r, pending: i, onDelete: a } = e,
    o = ne(),
    [s, c] = (0, rt.useState)(!1),
    l = (0, rt.useId)(),
    d = r.length > 1 || r[0]?.hostname !== n,
    f;
  t[0] !== d || t[1] !== l || t[2] !== n || t[3] !== s || t[4] !== o || t[5] !== a || t[6] !== i
    ? ((f = function (e, t, r) {
        let f = r
          ? o.formatMessage(
              {
                id: `settings.chatGpt.cloudBrowser.cookies.deleteSite`,
                defaultMessage: `Delete cookies for {site}`,
                description: `Delete cookies for the named website and its subdomains`,
              },
              { site: e },
            )
          : o.formatMessage(
              {
                id: `settings.chatGpt.cloudBrowser.cookies.deleteHost`,
                defaultMessage: `Delete cookies for {hostname} only`,
                description: `Delete cookies for one hostname, preserving sibling and child subdomains`,
              },
              { hostname: e },
            );
        return (0, Y.jsx)(
          V,
          {
            variant: r ? `default` : `nested`,
            icon: (0, Y.jsx)(Pe, { className: `size-4`, href: `https://${e}` }),
            label: e,
            description: (0, Y.jsx)(H, {
              id: `settings.chatGpt.cloudBrowser.cookiesCount`,
              defaultMessage: `{count, plural, one {# cookie} other {# cookies}}`,
              description: `Number of cookies saved for a website`,
              values: { count: t },
            }),
            control: (0, Y.jsxs)(Y.Fragment, {
              children: [
                r &&
                  d &&
                  (0, Y.jsx)(O, {
                    color: `ghost`,
                    size: `toolbar`,
                    "aria-label": o.formatMessage(
                      {
                        id: `settings.chatGpt.cloudBrowser.cookies.toggleHosts`,
                        defaultMessage: `Hosts for {site}`,
                        description: `Expand or collapse the individual cookie hosts for a website`,
                      },
                      { site: n },
                    ),
                    "aria-controls": l,
                    "aria-expanded": s,
                    onClick: () => c(!s),
                    children: s ? (0, Y.jsx)(z, {}) : (0, Y.jsx)(u, {}),
                  }),
                (0, Y.jsx)(B, {
                  cloneCustomTrigger: !0,
                  tooltipContent: f,
                  children: (0, Y.jsx)(O, {
                    color: `ghost`,
                    size: `toolbar`,
                    disabled: i,
                    onClick: () => a({ hostname: e, includeSubdomains: r }),
                    "aria-label": f,
                    children: (0, Y.jsx)(se, {}),
                  }),
                }),
              ],
            }),
          },
          e,
        );
      }),
      (t[0] = d),
      (t[1] = l),
      (t[2] = n),
      (t[3] = s),
      (t[4] = o),
      (t[5] = a),
      (t[6] = i),
      (t[7] = f))
    : (f = t[7]);
  let p = f,
    m = d && s,
    h;
  if (t[8] !== r || t[9] !== p) {
    let e;
    (t[11] === p ? (e = t[12]) : ((e = (e) => p(e.hostname, e.cookie_count, !1)), (t[11] = p), (t[12] = e)),
      (h = r.map(e)),
      (t[8] = r),
      (t[9] = p),
      (t[10] = h));
  } else h = t[10];
  let g;
  t[13] !== n || t[14] !== r || t[15] !== p
    ? ((g = p(n, r.reduce(et, 0), !0)), (t[13] = n), (t[14] = r), (t[15] = p), (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== l || t[18] !== m || t[19] !== h || t[20] !== g
      ? ((_ = (0, Y.jsx)(ze, { contentId: l, expanded: m, content: h, children: g })),
        (t[17] = l),
        (t[18] = m),
        (t[19] = h),
        (t[20] = g),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function et(e, t) {
  return e + t.cookie_count;
}
var tt, nt, rt, Y;
function it() {
  return (it = e(() => {
    ((tt = v()),
      W(),
      R(),
      h(),
      (nt = t(ge(), 1)),
      M(),
      (rt = c()),
      D(),
      Ie(),
      Ne(),
      j(),
      C(),
      De(),
      Ae(),
      T(),
      ae(),
      i(),
      je(),
      ke(),
      we(),
      U(),
      Re(),
      F(),
      o(),
      Be(),
      Je(),
      (Y = p()));
  }))();
}
function at(e, t, n) {
  function r() {
    if (e.get(Le) !== t || e.get(Oe) !== n) throw new DOMException(`Account changed`, `AbortError`);
  }
  return {
    queryKey: [`orbit-cloud-browser-cookies`, t, n],
    enabled: t != null && n != null,
    queryFn: async ({ signal: e }) => {
      if (t == null || n == null) throw new DOMException(`Account unavailable`, `AbortError`);
      let i = await K.safeGet(`/flora/browser/cookies`, {
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
    (Ie(), Ne());
  }))();
}
function st(e) {
  let t = (0, lt.c)(63),
    { onBack: i } = e,
    a = r(b),
    o = ee(),
    s = I(Le),
    c = I(Oe),
    l = s != null && c != null,
    u;
  t[0] !== s || t[1] !== c
    ? ((u = [`orbit-cloud-browser-cookies`, s, c]), (t[0] = s), (t[1] = c), (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] !== s || t[4] !== a || t[5] !== c
    ? ((f = function () {
        if (a.get(Le) !== s || a.get(Oe) !== c) throw new DOMException(`Account changed`, `AbortError`);
      }),
      (t[3] = s),
      (t[4] = a),
      (t[5] = c),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] !== s || t[8] !== a || t[9] !== c
    ? ((m = at(a, s, c)), (t[7] = s), (t[8] = a), (t[9] = c), (t[10] = m))
    : (m = t[10]);
  let { data: h, error: _, isPending: v, isError: y, isFetching: x, refetch: S } = g(m),
    C = l && !y ? h?.target : void 0;
  if (l && _ instanceof L && _.status === 404 && _.errorCode === `orbit_cookie_target_unavailable`) {
    let e, r;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(ce, {})), (r = (0, X.jsx)(H, { ...J.cookiesBack })), (t[11] = e), (t[12] = r))
      : ((e = t[11]), (r = t[12]));
    let a;
    t[13] === i
      ? (a = t[14])
      : ((a = (0, X.jsxs)(O, { color: `ghost`, size: `toolbar`, onClick: i, children: [e, r] })),
        (t[13] = i),
        (t[14] = a));
    let o;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, X.jsx)(H, { ...He.title })), (t[15] = o))
      : (o = t[15]);
    let s, c;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, X.jsx)(H, {
          id: `settings.cloudComputer.orbitCookies.unavailable`,
          defaultMessage: `No dot found`,
          description: `Empty state in dot cookie settings when there is no available primary dot`,
        })),
        (c = (0, X.jsx)(H, {
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
      ? ((u = (0, X.jsx)(H, {
          id: `settings.cloudComputer.orbitCookies.refresh`,
          defaultMessage: `Refresh`,
          description: `Button to check again for an available dot and its saved website cookies`,
        })),
        (t[20] = u))
      : (u = t[20]);
    let d;
    t[21] !== x || t[22] !== l
      ? ((d = (0, X.jsx)(q, {
          children: (0, X.jsx)(q.Content, {
            children: (0, X.jsx)(n, {
              children: (0, X.jsx)(V, {
                label: s,
                description: c,
                control: (0, X.jsx)(O, {
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
    let f;
    return (
      t[24] !== d || t[25] !== a
        ? ((f = (0, X.jsx)(be, { backSlot: a, title: o, children: d })),
          (t[24] = d),
          (t[25] = a),
          (t[26] = f))
        : (f = t[26]),
      f
    );
  }
  let w;
  t[27] !== s || t[28] !== C?.primary_generation || t[29] !== C?.workspace_id || t[30] !== c
    ? ((w = JSON.stringify([s, c, C?.workspace_id, C?.primary_generation])),
      (t[27] = s),
      (t[28] = C?.primary_generation),
      (t[29] = C?.workspace_id),
      (t[30] = c),
      (t[31] = w))
    : (w = t[31]);
  let T = C == null ? void 0 : h?.hosts,
    E;
  t[32] === y
    ? (E = t[33])
    : ((E = y
        ? (0, X.jsx)(H, {
            id: `restricted.cloudComputer.orbitCookies.loadError.dot`,
            defaultMessage: `Your dot's cookies couldn't be loaded`,
            description: `Error loading saved website cookies for the user's dot; the user can retry`,
          })
        : null),
      (t[32] = y),
      (t[33] = E));
  let D = C != null,
    k,
    A,
    j;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, X.jsx)(H, { ...He.title })),
      (j = (0, X.jsx)(H, { ...He.description })),
      (k = (0, X.jsx)(H, {
        id: `restricted.cloudComputer.orbitCookies.clearDescription.dot`,
        defaultMessage: `Remove cookies saved by your dot`,
        description: `Description of Clear all in the cookie manager for the user's dot`,
      })),
      (t[34] = k),
      (t[35] = A),
      (t[36] = j))
    : ((k = t[34]), (A = t[35]), (j = t[36]));
  let M;
  t[37] === S ? (M = t[38]) : ((M = () => void S()), (t[37] = S), (t[38] = M));
  let N;
  t[39] !== s || t[40] !== p || t[41] !== o || t[42] !== d || t[43] !== C || t[44] !== c
    ? ((N = async (e) => {
        if ((await o.cancelQueries({ queryKey: d }), p(), C == null || s == null || c == null))
          throw new DOMException(`Cookie target unavailable`, `AbortError`);
        let t = {
          additionalHeaders: { "ChatGPT-Account-Id": s },
          expectedIdentity: { accountId: s, userId: c },
          expectedErrorStatuses: [403, 404, 409],
          assertRequestCurrent: p,
        };
        e === `all`
          ? await K.safeDelete(`/agent/browser_context`, {
              ...t,
              parameters: { query: { surface: `Orbit`, ...C } },
              retry: !1,
            })
          : await K.safeDelete(`/flora/browser/cookies/{hostname}`, {
              ...t,
              parameters: {
                path: { hostname: e.hostname },
                query: { surface: `Orbit`, ...C, include_subdomains: e.includeSubdomains },
              },
              retry: !1,
            });
      }),
      (t[39] = s),
      (t[40] = p),
      (t[41] = o),
      (t[42] = d),
      (t[43] = C),
      (t[44] = c),
      (t[45] = N))
    : (N = t[45]);
  let P;
  t[46] !== o || t[47] !== d
    ? ((P = () => o.invalidateQueries({ queryKey: d })), (t[46] = o), (t[47] = d), (t[48] = P))
    : (P = t[48]);
  let F;
  t[49] !== N || t[50] !== P
    ? ((F = { mutationFn: N, onSettled: P, retry: !1 }), (t[49] = N), (t[50] = P), (t[51] = F))
    : (F = t[51]);
  let te, R;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, X.jsx)(H, {
        id: `restricted.cloudComputer.orbitCookies.deleteWarning.dot`,
        defaultMessage: `Cookies saved by your dot will be permanently deleted. Your dot may need to sign in to affected websites again.`,
        description: `Warning in the dot's cookie deletion dialog for one host, a site, or all saved cookies; affected websites may require signing in again`,
      })),
      (R = (0, X.jsx)(H, {
        id: `restricted.cloudComputer.orbitCookies.deleteError.dot`,
        defaultMessage: `Your dot's cookies couldn't be deleted. Try again.`,
        description: `Retryable error in the cookie manager for the user's dot`,
      })),
      (t[52] = te),
      (t[53] = R))
    : ((te = t[52]), (R = t[53]));
  let z;
  return (
    t[54] !== v ||
    t[55] !== i ||
    t[56] !== M ||
    t[57] !== F ||
    t[58] !== w ||
    t[59] !== T ||
    t[60] !== E ||
    t[61] !== D
      ? ((z = (0, X.jsx)(
          Qe,
          {
            hosts: T,
            isPending: v,
            loadError: E,
            canDelete: D,
            title: A,
            subtitle: j,
            description: k,
            onBack: i,
            onRetry: M,
            deleteMutationOptions: F,
            renderConfirmationTitle: ct,
            confirmationDescription: te,
            deletionError: R,
          },
          w,
        )),
        (t[54] = v),
        (t[55] = i),
        (t[56] = M),
        (t[57] = F),
        (t[58] = w),
        (t[59] = T),
        (t[60] = E),
        (t[61] = D),
        (t[62] = z))
      : (z = t[62]),
    z
  );
}
function ct(e) {
  return e === `all`
    ? (0, X.jsx)(H, {
        id: `restricted.cloudComputer.orbitCookies.clearTitle.dot`,
        defaultMessage: `Clear all of your dot's cookies?`,
        description: `Confirmation title for permanently deleting all saved website cookies for the user's dot`,
      })
    : (0, X.jsx)(H, {
        id: `restricted.cloudComputer.orbitCookies.deleteTitle.dot`,
        defaultMessage: `Delete your dot's cookies for {hostname}?`,
        description: `Confirmation title for deleting the dot's cookies for a website; hostname is the selected website or individual host`,
        values: { hostname: e.hostname },
      });
}
var lt, X;
function ut() {
  return (ut = e(() => {
    ((lt = v()),
      R(),
      h(),
      M(),
      D(),
      Ie(),
      Ne(),
      j(),
      C(),
      i(),
      je(),
      it(),
      Je(),
      ke(),
      U(),
      F(),
      y(),
      Ue(),
      ot(),
      (X = p()));
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
          ? (0, pt.jsx)(H, {
              id: `settings.chatGpt.cloudComputer.site.allow`,
              defaultMessage: `Always allow`,
              description: `Website-specific permission in Cloud computer settings that allows browsing on this site without asking. Short option label.`,
            })
          : (0, pt.jsx)(H, {
              id: `settings.chatGpt.cloudComputer.site.block`,
              defaultMessage: `Always block`,
              description: `Website-specific permission in Cloud computer settings that prevents browsing on this site. Short option label.`,
            })),
      (t[5] = r),
      (t[6] = o));
  let c;
  t[7] !== n || t[8] !== i || t[9] !== o
    ? ((c = (0, pt.jsx)(_e, { ...n, disabled: i, children: o })),
      (t[7] = n),
      (t[8] = i),
      (t[9] = o),
      (t[10] = c))
    : (c = t[10]);
  let l = r === `deny` ? s : void 0,
    u;
  t[11] === a ? (u = t[12]) : ((u = () => a(`deny`)), (t[11] = a), (t[12] = u));
  let d;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, pt.jsx)(H, {
        id: `settings.chatGpt.cloudComputer.site.block`,
        defaultMessage: `Always block`,
        description: `Website-specific permission in Cloud computer settings that prevents browsing on this site. Short option label.`,
      })),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] !== l || t[15] !== u
    ? ((f = (0, pt.jsx)(oe.Item, { RightIcon: l, onSelect: u, children: d })),
      (t[14] = l),
      (t[15] = u),
      (t[16] = f))
    : (f = t[16]);
  let p;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, pt.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.site.allowWarning`,
        defaultMessage: `Elevated risk for your data`,
        description: `Warns that allowing this website without approval increases risk to the user's data`,
      })),
      (t[17] = p))
    : (p = t[17]);
  let m = r === `allow` ? s : void 0,
    h;
  t[18] === a ? (h = t[19]) : ((h = () => a(`allow`)), (t[18] = a), (t[19] = h));
  let g;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, pt.jsx)(H, {
        id: `settings.chatGpt.cloudComputer.site.allow`,
        defaultMessage: `Always allow`,
        description: `Website-specific permission in Cloud computer settings that allows browsing on this site without asking. Short option label.`,
      })),
      (t[20] = g))
    : (g = t[20]);
  let _;
  t[21] !== m || t[22] !== h
    ? ((_ = (0, pt.jsx)(oe.Item, {
        subTextAllowWrap: !0,
        tone: `warning`,
        SubText: p,
        RightIcon: m,
        onSelect: h,
        children: g,
      })),
      (t[21] = m),
      (t[22] = h),
      (t[23] = _))
    : (_ = t[23]);
  let v;
  return (
    t[24] !== _ || t[25] !== c || t[26] !== f
      ? ((v = (0, pt.jsxs)(le, { align: `end`, triggerButton: c, children: [f, _] })),
        (t[24] = _),
        (t[25] = c),
        (t[26] = f),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
var ft, pt;
function mt() {
  return (mt = e(() => {
    ((ft = v()), D(), P(), C(), xe(), (pt = p()));
  }))();
}
function ht(e) {
  let t = (0, _t.c)(72),
    { open: n, trigger: r, pending: i, failed: o, onSubmit: s, onOpenChange: c } = e,
    l = ne(),
    [u, f] = (0, vt.useState)(``),
    [p, h] = (0, vt.useState)(`allow`),
    g = (0, vt.useId)(),
    _ = (0, vt.useId)(),
    v = (0, vt.useId)(),
    y;
  t[0] === u ? (y = t[1]) : ((y = gt(u)), (t[0] = u), (t[1] = y));
  let b = y,
    ee;
  t[2] !== b || t[3] !== u
    ? ((ee = u.trim().length > 0 && b == null), (t[2] = b), (t[3] = u), (t[4] = ee))
    : (ee = t[4]);
  let S = ee,
    C;
  t[5] !== c || t[6] !== i
    ? ((C = (e) => {
        i || (f(``), h(`allow`), c(e));
      }),
      (t[5] = c),
      (t[6] = i),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T = !i,
    D;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { "aria-describedby": void 0 }), (t[8] = D))
    : (D = t[8]);
  let k;
  t[9] !== p || t[10] !== s || t[11] !== b || t[12] !== i
    ? ((k = (e) => {
        (e.preventDefault(), b != null && !i && s({ pattern: b.canonicalPattern, decision: p }));
      }),
      (t[9] = p),
      (t[10] = s),
      (t[11] = b),
      (t[12] = i),
      (t[13] = k))
    : (k = t[13]);
  let A;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Z.jsx)(pe, {
        children: (0, Z.jsx)(x, {
          title: (0, Z.jsx)(re, {
            children: (0, Z.jsx)(H, {
              id: `settings.chatGpt.cloudBrowser.addDialog.title`,
              defaultMessage: `Add website`,
              description: `Title of the dialog for adding a cloud browser website permission`,
            }),
          }),
        }),
      })),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.addDialog.site`,
        defaultMessage: `Site or pattern`,
        description: `Label for the website origin or wildcard pattern input`,
      })),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] === g
    ? (M = t[17])
    : ((M = (0, Z.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: g,
        children: j,
      })),
      (t[16] = g),
      (t[17] = M));
  let N;
  t[18] === l
    ? (N = t[19])
    : ((N = l.formatMessage({
        id: `settings.chatGpt.cloudBrowser.addDialog.placeholder`,
        defaultMessage: `https://example.com`,
        description: `Example website address in the cloud browser site-permission input. Do not translate the address.`,
      })),
      (t[18] = l),
      (t[19] = N));
  let P = S ? _ : void 0,
    F;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (e) => f(e.currentTarget.value)), (t[20] = F))
    : (F = t[20]);
  let I;
  t[21] !== g || t[22] !== S || t[23] !== i || t[24] !== u || t[25] !== N || t[26] !== P
    ? ((I = (0, Z.jsx)(Te, {
        id: g,
        autoFocus: !0,
        autoCapitalize: `off`,
        autoComplete: `off`,
        spellCheck: !1,
        inputMode: `url`,
        maxLength: 4096,
        required: !0,
        disabled: i,
        value: u,
        placeholder: N,
        "aria-invalid": S,
        "aria-describedby": P,
        onChange: F,
      })),
      (t[21] = g),
      (t[22] = S),
      (t[23] = i),
      (t[24] = u),
      (t[25] = N),
      (t[26] = P),
      (t[27] = I))
    : (I = t[27]);
  let te;
  t[28] !== _ || t[29] !== S
    ? ((te =
        S &&
        (0, Z.jsx)(`span`, {
          id: _,
          className: `text-xs text-danger`,
          role: `alert`,
          children: (0, Z.jsx)(H, {
            id: `settings.chatGpt.cloudBrowser.addDialog.invalid`,
            defaultMessage: `Enter a valid website address`,
            description: `Validation error below the cloud browser site-permission input when the address is invalid`,
          }),
        })),
      (t[28] = _),
      (t[29] = S),
      (t[30] = te))
    : (te = t[30]);
  let L;
  t[31] !== I || t[32] !== te || t[33] !== M
    ? ((L = (0, Z.jsx)(pe, { spacing: `large`, children: (0, Z.jsxs)(a, { children: [M, I, te] }) })),
      (t[31] = I),
      (t[32] = te),
      (t[33] = M),
      (t[34] = L))
    : (L = t[34]);
  let R;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Z.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.addDialog.permission`,
        defaultMessage: `Browsing`,
        description: `Label for the allow-or-block permission selector`,
      })),
      (t[35] = R))
    : (R = t[35]);
  let z;
  t[36] === v
    ? (z = t[37])
    : ((z = (0, Z.jsx)(`span`, {
        id: v,
        className: `text-sm font-medium text-default select-none`,
        children: R,
      })),
      (t[36] = v),
      (t[37] = z));
  let B;
  t[38] !== p || t[39] !== i || t[40] !== v
    ? ((B = (0, Z.jsx)(dt, { "aria-labelledby": v, decision: p, disabled: i, onSelect: h })),
      (t[38] = p),
      (t[39] = i),
      (t[40] = v),
      (t[41] = B))
    : (B = t[41]);
  let ie;
  t[42] !== z || t[43] !== B
    ? ((ie = (0, Z.jsx)(pe, { spacing: `large`, children: (0, Z.jsxs)(a, { children: [z, B] }) })),
      (t[42] = z),
      (t[43] = B),
      (t[44] = ie))
    : (ie = t[44]);
  let ae;
  t[45] === o
    ? (ae = t[46])
    : ((ae =
        o &&
        (0, Z.jsx)(pe, {
          children: (0, Z.jsx)(ue, {
            type: `error`,
            variant: `callout`,
            role: `alert`,
            content: (0, Z.jsx)(H, {
              id: `settings.chatGpt.cloudBrowser.addDialog.failed`,
              defaultMessage: `Cloud browser settings couldn't be updated`,
              description: `Retryable error after saving a cloud website permission fails`,
            }),
          }),
        })),
      (t[45] = o),
      (t[46] = ae));
  let oe;
  t[47] === w ? (oe = t[48]) : ((oe = () => w(!1)), (t[47] = w), (t[48] = oe));
  let se;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Z.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.cancelAddSite`,
        defaultMessage: `Cancel`,
        description: `Close the add website dialog without saving`,
      })),
      (t[49] = se))
    : (se = t[49]);
  let V;
  t[50] !== i || t[51] !== oe
    ? ((V = (0, Z.jsx)(O, { type: `button`, color: `secondary`, disabled: i, onClick: oe, children: se })),
      (t[50] = i),
      (t[51] = oe),
      (t[52] = V))
    : (V = t[52]);
  let ce = b == null || i,
    le;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, Z.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.addDialog.save`,
        defaultMessage: `Add website`,
        description: `Save the website and its browsing permission`,
      })),
      (t[53] = le))
    : (le = t[53]);
  let U;
  t[54] !== i || t[55] !== ce
    ? ((U = (0, Z.jsx)(O, { type: `submit`, color: `primary`, disabled: ce, loading: i, children: le })),
      (t[54] = i),
      (t[55] = ce),
      (t[56] = U))
    : (U = t[56]);
  let W;
  t[57] !== V || t[58] !== U
    ? ((W = (0, Z.jsx)(pe, { spacing: `large`, children: (0, Z.jsxs)(m, { children: [V, U] }) })),
      (t[57] = V),
      (t[58] = U),
      (t[59] = W))
    : (W = t[59]);
  let G;
  t[60] !== L || t[61] !== ie || t[62] !== ae || t[63] !== W || t[64] !== k
    ? ((G = (0, Z.jsxs)(d, { as: `form`, onSubmit: k, children: [A, L, ie, ae, W] })),
      (t[60] = L),
      (t[61] = ie),
      (t[62] = ae),
      (t[63] = W),
      (t[64] = k),
      (t[65] = G))
    : (G = t[65]);
  let de;
  return (
    t[66] !== w || t[67] !== n || t[68] !== G || t[69] !== T || t[70] !== r
      ? ((de = (0, Z.jsx)(E, {
          open: n,
          triggerContent: r,
          size: `compact`,
          showDialogClose: T,
          onOpenChange: w,
          contentProps: D,
          children: G,
        })),
        (t[66] = w),
        (t[67] = n),
        (t[68] = G),
        (t[69] = T),
        (t[70] = r),
        (t[71] = de))
      : (de = t[71]),
    de
  );
}
function gt(e) {
  let t = e.trim().replace(/\/$/, ``),
    n = t.includes(`://`) ? t : `https://${t}`;
  return n.length <= 4096 ? A(n) : null;
}
var _t, vt, Z;
function yt() {
  return (yt = e(() => {
    ((_t = v()), de(), (vt = c()), D(), G(), j(), f(), l(), he(), mt(), (Z = p()));
  }))();
}
function bt() {
  let e = (0, Ct.c)(37),
    t = r(b),
    i = ne(),
    a = ee(),
    o = I(Fe),
    s;
  e[0] === o ? (s = e[1]) : ((s = [`chatgpt-cloud-browser-passkeys`, o]), (e[0] = o), (e[1] = s));
  let c = s,
    [l, u] = (0, wt.useState)(null),
    d = o != null,
    f;
  e[2] !== c || e[3] !== d
    ? ((f = { queryKey: c, enabled: d, queryFn: St, staleTime: me.ONE_MINUTE }),
      (e[2] = c),
      (e[3] = d),
      (e[4] = f))
    : (f = e[4]);
  let { data: p, isPending: m, isError: h, refetch: _ } = g(f),
    v;
  e[5] !== a || e[6] !== c
    ? ((v = (e, t) => {
        (a.setQueryData(c, (e) =>
          e == null ? e : { passkeys: e.passkeys.filter((e) => e.credential_id !== t) },
        ),
          u(null),
          a.invalidateQueries({ queryKey: c }));
      }),
      (e[5] = a),
      (e[6] = c),
      (e[7] = v))
    : (v = e[7]);
  let y;
  e[8] !== i || e[9] !== t
    ? ((y = () =>
        t
          .get(ie)
          .danger(i.formatMessage(J.passkeysDeleteError), {
            errorAnalytics: { toastId: `settings.chatGpt.cloudBrowser.passkeys.deleteError` },
          })),
      (e[8] = i),
      (e[9] = t),
      (e[10] = y))
    : (y = e[10]);
  let x;
  e[11] !== v || e[12] !== y
    ? ((x = { mutationFn: xt, onSuccess: v, onError: y }), (e[11] = v), (e[12] = y), (e[13] = x))
    : (x = e[13]);
  let S = fe(x),
    C;
  if (m) {
    let t;
    (e[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Ce, {})), (e[14] = t))
      : (t = e[14]),
      (C = t));
  } else if (h) {
    let t;
    e[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`span`, { role: `alert`, children: (0, Q.jsx)(H, { ...J.passkeysLoadError }) })),
        (e[15] = t))
      : (t = e[15]);
    let n;
    e[16] === _ ? (n = e[17]) : ((n = () => void _()), (e[16] = _), (e[17] = n));
    let r;
    e[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(H, { ...J.retry })), (e[18] = r))
      : (r = e[18]);
    let i;
    (e[19] === n
      ? (i = e[20])
      : ((i = (0, Q.jsx)(V, {
          label: t,
          control: (0, Q.jsx)(O, { color: `secondary`, size: `toolbar`, onClick: n, children: r }),
        })),
        (e[19] = n),
        (e[20] = i)),
      (C = i));
  } else if (p?.passkeys.length === 0) {
    let t;
    (e[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Me, {
          align: `start`,
          layout: `settings-row`,
          children: (0, Q.jsx)(H, {
            id: `settings.chatGpt.cloudBrowser.passkeys.empty`,
            defaultMessage: `No passkeys saved`,
            description: `There are no saved cloud browser passkeys`,
          }),
        })),
        (e[21] = t))
      : (t = e[21]),
      (C = t));
  } else {
    let t;
    e[22] !== p?.passkeys || e[23] !== S || e[24] !== i
      ? ((t = p?.passkeys.map((e) =>
          (0, Q.jsx)(
            V,
            {
              label: e.relying_party_id,
              description: e.user_display_name || e.user_name,
              control: (0, Q.jsx)(O, {
                color: `danger`,
                size: `toolbar`,
                disabled: S.isPending,
                onClick: () => u(e),
                "aria-label": i.formatMessage(
                  {
                    id: `settings.chatGpt.cloudBrowser.passkeys.deleteLabel`,
                    defaultMessage: `Delete passkey for {account} on {website}`,
                    description: `Delete the named account's cloud browser passkey on the named website`,
                  },
                  { account: e.user_display_name || e.user_name, website: e.relying_party_id },
                ),
                children: (0, Q.jsx)(H, {
                  id: `settings.chatGpt.cloudBrowser.passkeys.delete`,
                  defaultMessage: `Delete passkey`,
                  description: `Open confirmation before deleting a saved cloud browser passkey`,
                }),
              }),
            },
            e.credential_id,
          ),
        )),
        (e[22] = p?.passkeys),
        (e[23] = S),
        (e[24] = i),
        (e[25] = t))
      : (t = e[25]);
    let r;
    (e[26] === t ? (r = e[27]) : ((r = (0, Q.jsx)(n, { children: t })), (e[26] = t), (e[27] = r)), (C = r));
  }
  let w;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(q.Header, {
        title: (0, Q.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.passkeys.title`,
          defaultMessage: `Passkeys`,
          description: `Section for website passkeys saved by the cloud browser`,
        }),
      })),
      (e[28] = w))
    : (w = e[28]);
  let T;
  e[29] === C ? (T = e[30]) : ((T = (0, Q.jsx)(q.Content, { children: C })), (e[29] = C), (e[30] = T));
  let E;
  e[31] !== S || e[32] !== l
    ? ((E =
        l != null &&
        (0, Q.jsx)(Ve, {
          pending: S.isPending,
          onClose: () => u(null),
          onConfirm: () => S.mutate(l.credential_id),
          title: (0, Q.jsx)(H, { ...J.passkeysDeleteTitle }),
          description: (0, Q.jsx)(H, {
            ...J.passkeysDeleteDescription,
            values: { account: l.user_display_name || l.user_name, website: l.relying_party_id },
          }),
        })),
      (e[31] = S),
      (e[32] = l),
      (e[33] = E))
    : (E = e[33]);
  let D;
  return (
    e[34] !== T || e[35] !== E
      ? ((D = (0, Q.jsxs)(q, { children: [w, T, E] })), (e[34] = T), (e[35] = E), (e[36] = D))
      : (D = e[36]),
    D
  );
}
function xt(e) {
  return K.safeDelete(`/flora/browser/passkeys/{credential_id}`, {
    parameters: { path: { credential_id: e } },
  });
}
function St() {
  return K.safeGet(`/flora/browser/passkeys`);
}
var Ct, wt, Q;
function Tt() {
  return (Tt = e(() => {
    ((Ct = v()),
      W(),
      R(),
      h(),
      M(),
      (wt = c()),
      D(),
      Ie(),
      Ne(),
      j(),
      De(),
      T(),
      i(),
      ke(),
      we(),
      U(),
      F(),
      o(),
      Be(),
      Je(),
      (Q = p()));
  }))();
}
function Et() {
  let e = (0, At.c)(4),
    t = I(Fe),
    n = w(),
    r = new URLSearchParams(n.search);
  if (r.has(`onepassword_account_id`) || r.has(`onepassword_result`)) {
    let t;
    return (
      e[0] === n
        ? (t = e[1])
        : ((t = (0, $.jsx)(S, { to: { ...n, pathname: `/settings/passwords` }, replace: !0 })),
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
    { accountUserId: i } = e,
    a = r(b),
    o = [`chatgpt-cloud-browser-config`, i],
    c = I(Ee),
    l = I(Le),
    d = I(Oe),
    f;
  t[0] !== l || t[1] !== a || t[2] !== d
    ? ((f = at(a, l, d)), (t[0] = l), (t[1] = a), (t[2] = d), (t[3] = f))
    : (f = t[3]);
  let p = f,
    m = p.enabled && !c,
    h;
  t[4] !== p || t[5] !== m
    ? ((h = { ...p, enabled: m, staleTime: p.staleTime }), (t[4] = p), (t[5] = m), (t[6] = h))
    : (h = t[6]);
  let { data: _, isError: v } = g(h),
    y = c || (!v && (_?.hosts.length ?? 0) > 0),
    x = ne(),
    S = ee(),
    [C, w] = (0, jt.useState)(!1),
    [T, E] = (0, jt.useState)(null),
    {
      data: D,
      isPending: k,
      isError: A,
      refetch: j,
    } = g({ queryKey: o, enabled: i != null, queryFn: kt, staleTime: me.ONE_MINUTE }),
    M = JSON.stringify(o),
    P;
  t[7] === M ? (P = t[8]) : ((P = { id: M }), (t[7] = M), (t[8] = P));
  let F = (e) => {
      S.setQueryData(o, e);
    },
    L;
  t[9] !== x || t[10] !== C || t[11] !== a
    ? ((L = () => {
        C ||
          a
            .get(ie)
            .danger(x.formatMessage(J.updateError), {
              errorAnalytics: { toastId: `cloud-browser-settings-update-failed` },
            });
      }),
      (t[9] = x),
      (t[10] = C),
      (t[11] = a),
      (t[12] = L))
    : (L = t[12]);
  let R;
  t[13] !== P || t[14] !== F || t[15] !== L
    ? ((R = { scope: P, mutationFn: Ot, onSuccess: F, onError: L }),
      (t[13] = P),
      (t[14] = F),
      (t[15] = L),
      (t[16] = R))
    : (R = t[16]);
  let z = fe(R),
    B = D == null || k || z.isPending,
    re;
  t[17] !== D?.approval_mode || t[18] !== D?.disable_auto_review
    ? ((re = `auto_approve`),
      D?.approval_mode === `never_ask`
        ? (re = `always_allow`)
        : D?.disable_auto_review === !0 && (re = `always_ask`),
      (t[17] = D?.approval_mode),
      (t[18] = D?.disable_auto_review),
      (t[19] = re))
    : (re = t[19]);
  let ae = Mt[re],
    ce;
  if (
    (t[20] !== D || t[21] !== A || t[22] !== ae.label
      ? ((ce = ae.label),
        D ??
          (ce = A
            ? (0, $.jsx)(H, { ...J.permissionUnavailable })
            : (0, $.jsx)(H, { ...J.permissionLoading })),
        (t[20] = D),
        (t[21] = A),
        (t[22] = ae.label),
        (t[23] = ce))
      : (ce = t[23]),
    T === `work`)
  ) {
    let e;
    return (
      t[24] === E ? (e = t[25]) : ((e = (0, $.jsx)(Ye, { onBack: () => E(null) })), (t[24] = E), (t[25] = e)),
      e
    );
  }
  if (T === `primary`) {
    let e;
    return (
      t[26] === E ? (e = t[27]) : ((e = (0, $.jsx)(st, { onBack: () => E(null) })), (t[26] = E), (t[27] = e)),
      e
    );
  }
  let U, ue;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.sitePermissions`,
        defaultMessage: `Website permissions`,
        description: `Heading for ChatGPT cloud browser site permissions`,
      })),
      (ue = (0, $.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.sitePermissions.description`,
        defaultMessage: `Add sites to override the default permission`,
        description: `Supporting text explaining that website-specific rules override the default browsing permission`,
      })),
      (t[28] = U),
      (t[29] = ue))
    : ((U = t[28]), (ue = t[29]));
  let W, G;
  t[30] !== w || t[31] !== z
    ? ((W = (e) => {
        (e && z.reset(), w(e));
      }),
      (G = (e) => z.mutate({ origin_mutation: e }, { onSuccess: () => w(!1) })),
      (t[30] = w),
      (t[31] = z),
      (t[32] = W),
      (t[33] = G))
    : ((W = t[32]), (G = t[33]));
  let de;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.addSite`,
        defaultMessage: `Add website`,
        description: `Button in Cloud computer settings that opens a form to add a website-specific browsing permission.`,
      })),
      (t[34] = de))
    : (de = t[34]);
  let pe;
  t[35] === B
    ? (pe = t[36])
    : ((pe = (0, $.jsx)(O, { color: `secondary`, size: `toolbar`, disabled: B, children: de })),
      (t[35] = B),
      (t[36] = pe));
  let he;
  t[37] !== C || t[38] !== W || t[39] !== G || t[40] !== pe || t[41] !== z.isError || t[42] !== z.isPending
    ? ((he = (0, $.jsx)(q.Header, {
        title: U,
        subtitle: ue,
        actions: (0, $.jsx)(ht, {
          open: C,
          pending: z.isPending,
          failed: z.isError,
          onOpenChange: W,
          onSubmit: G,
          trigger: pe,
        }),
      })),
      (t[37] = C),
      (t[38] = W),
      (t[39] = G),
      (t[40] = pe),
      (t[41] = z.isError),
      (t[42] = z.isPending),
      (t[43] = he))
    : (he = t[43]);
  let ge;
  t[44] === k ? (ge = t[45]) : ((ge = k && (0, $.jsx)(Ce, {})), (t[44] = k), (t[45] = ge));
  let ve;
  t[46] !== B || t[47] !== D || t[48] !== x || t[49] !== z
    ? ((ve =
        D != null &&
        D.origins.length > 0 &&
        (0, $.jsx)(n, {
          children: D.origins.map((e) =>
            (0, $.jsx)(
              V,
              {
                label: (0, $.jsx)(`span`, { className: `break-all`, title: e.pattern, children: e.pattern }),
                icon: (0, $.jsx)(N, {}),
                control: (t) =>
                  (0, $.jsxs)($.Fragment, {
                    children: [
                      (0, $.jsx)(dt, {
                        ...t,
                        decision: e.decision,
                        disabled: B,
                        onSelect: (t) => z.mutate({ origin_mutation: { pattern: e.pattern, decision: t } }),
                      }),
                      (0, $.jsx)(O, {
                        "aria-label": x.formatMessage(
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
      (t[47] = D),
      (t[48] = x),
      (t[49] = z),
      (t[50] = ve))
    : (ve = t[50]);
  let ye;
  t[51] !== A || t[52] !== j
    ? ((ye =
        A &&
        (0, $.jsx)(V, {
          label: (0, $.jsx)(H, { ...J.settingsLoadError }),
          control: (0, $.jsx)(O, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => void j(),
            children: (0, $.jsx)(H, { ...J.settingsRetry }),
          }),
        })),
      (t[51] = A),
      (t[52] = j),
      (t[53] = ye))
    : (ye = t[53]);
  let be;
  t[54] !== ge || t[55] !== ve || t[56] !== ye
    ? ((be = (0, $.jsxs)(q.Content, { children: [ge, ve, ye] })),
      (t[54] = ge),
      (t[55] = ve),
      (t[56] = ye),
      (t[57] = be))
    : (be = t[57]);
  let xe;
  t[58] !== he || t[59] !== be
    ? ((xe = (0, $.jsxs)(q, { children: [he, be] })), (t[58] = he), (t[59] = be), (t[60] = xe))
    : (xe = t[60]);
  let we = xe,
    Te,
    De;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(H, { ...Se.cookies })),
      (De = (0, $.jsx)(H, { ...Se.cookiesDescription })),
      (t[61] = Te),
      (t[62] = De))
    : ((Te = t[61]), (De = t[62]));
  let ke;
  t[63] === E ? (ke = t[64]) : ((ke = () => E(`work`)), (t[63] = E), (t[64] = ke));
  let Ae;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(u, { className: `text-tertiary` })), (t[65] = Ae))
    : (Ae = t[65]);
  let je;
  t[66] === ke
    ? (je = t[67])
    : ((je = (0, $.jsx)(te, {
        edgeRounding: `surface`,
        label: Te,
        description: De,
        onClick: ke,
        trailing: Ae,
      })),
      (t[66] = ke),
      (t[67] = je));
  let Me = je,
    K,
    Ne;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(H, { ...Se.approvals })),
      (Ne = (0, $.jsx)(H, { ...Se.approvalsDescription })),
      (t[68] = K),
      (t[69] = Ne))
    : ((K = t[68]), (Ne = t[69]));
  let Pe;
  t[70] !== B || t[71] !== re || t[72] !== ce || t[73] !== z
    ? ((Pe = (0, $.jsx)(V, {
        label: K,
        description: Ne,
        control: (e) =>
          (0, $.jsx)(le, {
            align: `end`,
            triggerButton: (0, $.jsx)(_e, { ...e, disabled: B, children: ce }),
            children: Object.entries(Mt).map((e) => {
              let [t, n] = e;
              return (0, $.jsx)(
                oe.Item,
                {
                  subTextAllowWrap: !0,
                  SubText: n.description,
                  tone: t === `always_allow` ? `warning` : `default`,
                  RightIcon: re === t ? s : void 0,
                  onSelect: () => z.mutate(n.patch),
                  children: n.label,
                },
                t,
              );
            }),
          }),
      })),
      (t[70] = B),
      (t[71] = re),
      (t[72] = ce),
      (t[73] = z),
      (t[74] = Pe))
    : (Pe = t[74]);
  let Fe = Pe,
    Ie;
  t[75] !== E || t[76] !== y
    ? ((Ie = y ? () => E(`primary`) : void 0), (t[75] = E), (t[76] = y), (t[77] = Ie))
    : (Ie = t[77]);
  let Re;
  t[78] === D?.webauthn_enabled
    ? (Re = t[79])
    : ((Re = D?.webauthn_enabled === !0 && (0, $.jsx)(bt, {})), (t[78] = D?.webauthn_enabled), (t[79] = Re));
  let ze;
  return (
    t[80] !== Me || t[81] !== Fe || t[82] !== we || t[83] !== Ie || t[84] !== Re
      ? ((ze = (0, $.jsx)(We, {
          sitePermissions: we,
          cookies: Me,
          onOpenOrbitCookies: Ie,
          defaultPermissions: Fe,
          passkeys: Re,
        })),
        (t[80] = Me),
        (t[81] = Fe),
        (t[82] = we),
        (t[83] = Ie),
        (t[84] = Re),
        (t[85] = ze))
      : (ze = t[85]),
    ze
  );
}
function Ot(e) {
  return K.safePatch(`/flora/browser/config`, { requestBody: e });
}
function kt() {
  return K.safeGet(`/flora/browser/config`);
}
var At, jt, $, Mt;
function Nt() {
  return (Nt = e(() => {
    ((At = v()),
      W(),
      R(),
      h(),
      M(),
      (jt = c()),
      D(),
      _(),
      Ie(),
      Ne(),
      j(),
      P(),
      C(),
      T(),
      ye(),
      i(),
      ve(),
      qe(),
      ut(),
      ot(),
      ke(),
      we(),
      U(),
      xe(),
      F(),
      o(),
      yt(),
      it(),
      Tt(),
      mt(),
      Je(),
      ($ = p()),
      (Mt = {
        always_ask: {
          label: (0, $.jsx)(H, {
            id: `settings.chatGpt.cloudBrowser.alwaysAsk`,
            defaultMessage: `Always ask`,
            description: `Cloud browser permission that asks before actions`,
          }),
          description: (0, $.jsx)(H, {
            id: `settings.chatGpt.cloudBrowser.always_ask.description`,
            defaultMessage: `Ask before ChatGPT opens a website`,
            description: `Explains that Always ask requires approval before browsing`,
          }),
          patch: { approval_mode: `always_ask`, disable_auto_review: !0 },
        },
        auto_approve: {
          label: (0, $.jsx)(H, {
            id: `settings.chatGpt.cloudBrowser.autoApprove`,
            defaultMessage: `Auto approve`,
            description: `Short option label in ChatGPT Cloud browser settings for automatically approving or denying browsing actions based on risk.`,
          }),
          description: (0, $.jsx)(H, {
            id: `settings.chatGpt.cloudBrowser.auto_approve.description`,
            defaultMessage: `Automatically approve or deny actions based on their risk`,
            description: `Explains risk-based automatic approval`,
          }),
          patch: { approval_mode: `always_ask`, disable_auto_review: !1 },
        },
        always_allow: {
          label: (0, $.jsx)(H, {
            id: `settings.chatGpt.cloudBrowser.alwaysAllow`,
            defaultMessage: `Always allow`,
            description: `Short option label in ChatGPT Cloud browser settings for letting the browser open websites without asking the end user first.`,
          }),
          description: (0, $.jsx)(H, {
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
//# sourceMappingURL=settings-c356b43029f8.js.map
