import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  BLt as r,
  BV as i,
  EPt as a,
  Ext as o,
  GE as s,
  IDt as c,
  Iot as l,
  JC as u,
  Lot as d,
  Mot as f,
  Mz as p,
  Not as m,
  Nz as h,
  Pxt as g,
  Q as _,
  QC as ee,
  TDt as v,
  TJ as y,
  TLt as b,
  Uot as x,
  VDt as S,
  Vxt as C,
  WE as te,
  Xot as ne,
  Yot as w,
  Z as T,
  _O as re,
  _xt as E,
  cO as ie,
  fLt as D,
  fO as O,
  gO as k,
  i3 as A,
  iw as j,
  jDt as M,
  lO as N,
  mO as ae,
  oO as P,
  oxt as F,
  pIt as I,
  pLt as L,
  qC as oe,
  r3 as R,
  sJ as se,
  sO as z,
  t3 as B,
  tw as V,
  vO as H,
  vzt as U,
  wxt as ce,
  xMt as W,
  yzt as G,
  zLt as K,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ek as q,
  GMr as le,
  JPn as J,
  NDr as Y,
  Tk as ue,
  YMr as de,
  Ymr as fe,
  ZPn as pe,
  _F as me,
  _zt as he,
  aF as ge,
  eDr as _e,
  ehr as ve,
  fur as ye,
  gzt as be,
  hF as xe,
  llt as Se,
  nDr as Ce,
  oF as X,
  pOr as we,
  pur as Te,
  qMr as Ee,
  tNr as De,
  ult as Oe,
} from "./app-initial-5851df3f6cb1.js";
import { n as ke, t as Ae } from "./delete-dialog-08927b8bf282.js";
var je;
function Me() {
  return (Me = e(() => {
    je = `` + new URL(`onepassword-82655804ea25.png`, import.meta.url).href;
  }))();
}
function Ne() {
  let e = (0, Ie.c)(2),
    t = Ce(`2244853012`),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = t ? (0, Z.jsx)(Pe, {}) : null), (e[0] = t), (e[1] = n)), n);
}
function Pe() {
  let e = (0, Ie.c)(95),
    n = C(le),
    i = C(Ee),
    a = C(de),
    s = ce(),
    l = o(),
    u = new URLSearchParams(s.search),
    f = r().safeParse(u.get(`onepassword_account_id`)).data,
    p = f != null && f !== n,
    m = u.get(`onepassword_result`) === `unconfirmed`,
    [h, g] = (0, Le.useState)(!1),
    _;
  e[0] !== n || e[1] !== a
    ? ((_ = [`password-manager-connection`, a, n]), (e[0] = n), (e[1] = a), (e[2] = _))
    : (_ = e[2]);
  let ee = n != null && a != null && !p,
    v;
  e[3] !== n || e[4] !== a
    ? ((v = (e) => {
        let { signal: t } = e;
        if (n == null || a == null) throw Error(`Missing authenticated identity`);
        return fe.safeGet(`/password-managers/1password`, {
          expectedIdentity: { accountId: n, userId: a },
          additionalHeaders: { "ChatGPT-Account-ID": n },
          retry: !1,
          expectedErrorStatuses: [403, 404, 503],
          signal: t,
        });
      }),
      (e[3] = n),
      (e[4] = a),
      (e[5] = v))
    : (v = e[5]);
  let y;
  e[6] === m
    ? (y = e[7])
    : ((y = (e) => !m && e.state.data?.state === `connecting` && 1500), (e[6] = m), (e[7] = y));
  let b;
  e[8] !== _ || e[9] !== ee || e[10] !== v || e[11] !== y
    ? ((b = {
        queryKey: _,
        enabled: ee,
        queryFn: v,
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: `always`,
        refetchInterval: y,
      }),
      (e[8] = _),
      (e[9] = ee),
      (e[10] = v),
      (e[11] = y),
      (e[12] = b))
    : (b = e[12]);
  let { data: x, isFetching: S, isError: w, refetch: T } = ne(b),
    E;
  e[13] !== n || e[14] !== a
    ? ((E = () => {
        if (n == null || a == null) throw Error(`Missing authenticated identity`);
        return fe.safeDelete(`/password-managers/1password`, {
          expectedIdentity: { accountId: n, userId: a },
          additionalHeaders: { "ChatGPT-Account-ID": n },
          retry: `never`,
        });
      }),
      (e[13] = n),
      (e[14] = a),
      (e[15] = E))
    : (E = e[15]);
  let D;
  e[16] === T ? (D = e[17]) : ((D = () => T()), (e[16] = T), (e[17] = D));
  let O;
  e[18] !== E || e[19] !== D
    ? ((O = { mutationFn: E, onSettled: D }), (e[18] = E), (e[19] = D), (e[20] = O))
    : (O = e[20]);
  let A = d(O),
    j;
  e[21] !== n || e[22] !== i || e[23] !== a
    ? ((j = (e) => {
        if (n == null || i == null || a == null || e === null)
          throw (e?.close(), Error(`Unable to start 1Password enrollment`));
        return Fe(n, i, a, e);
      }),
      (e[21] = n),
      (e[22] = i),
      (e[23] = a),
      (e[24] = j))
    : (j = e[24]);
  let M;
  e[25] === g ? (M = e[26]) : ((M = () => g(!1)), (e[25] = g), (e[26] = M));
  let I;
  e[27] === T ? (I = e[28]) : ((I = () => T()), (e[27] = T), (e[28] = I));
  let L;
  e[29] !== I || e[30] !== j || e[31] !== M
    ? ((L = { mutationFn: j, onSuccess: M, onSettled: I }),
      (e[29] = I),
      (e[30] = j),
      (e[31] = M),
      (e[32] = L))
    : (L = e[32]);
  let R = d(L),
    se;
  e[33] === T ? (se = e[34]) : ((se = () => T()), (e[33] = T), (e[34] = se));
  let B;
  e[35] !== R || e[36] !== A
    ? ((B = () => {
        (A.reset(), R.reset());
      }),
      (e[35] = R),
      (e[36] = A),
      (e[37] = B))
    : (B = e[37]);
  let H;
  e[38] !== se || e[39] !== B
    ? ((H = { mutationFn: se, onMutate: B }), (e[38] = se), (e[39] = B), (e[40] = H))
    : (H = e[40]);
  let U = d(H),
    W = w || A.isError || R.isError,
    G = x?.state === `connecting` && !m,
    K = !p && !G && x?.available && x.enrollment_url != null && i != null;
  if (!p && (f != null || m) && ((x?.state === `connected` && !S && !w) || A.isSuccess))
    return (
      u.delete(`onepassword_account_id`),
      u.delete(`onepassword_result`),
      (0, Z.jsx)(F, { to: { pathname: s.pathname, search: u.toString(), hash: s.hash }, replace: !0 })
    );
  let q;
  if (p) {
    let t;
    (e[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.workspaceMismatch`,
          defaultMessage: `Switch back to the workspace where you started connecting 1Password`,
          description: `Message in Cloud Browser Credential Manager after returning from 1Password consent when the active ChatGPT workspace differs from the workspace that started the connection. Connection status and actions are hidden until the user manually switches back. Multiline body text with no placeholders.`,
        })),
        (e[41] = t))
      : (t = e[41]),
      (q = t));
  } else if (W) {
    let t;
    (e[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.error`,
          defaultMessage: `We couldn’t confirm your connection. Refresh to try again`,
          description: `Credential Manager error when connection status or disconnect could not be confirmed; it does not claim the operation failed`,
        })),
        (e[42] = t))
      : (t = e[42]),
      (q = t));
  } else if (x == null) {
    let t;
    (e[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.loading`,
          defaultMessage: `Checking connection…`,
          description: `Credential Manager loading state before the backend has returned connection status`,
        })),
        (e[43] = t))
      : (t = e[43]),
      (q = t));
  } else if (x.state === `connected`) {
    let t;
    (e[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.connected`,
          defaultMessage: `Connected`,
          description: `Credential Manager state after the backend confirms a persisted 1Password connection`,
        })),
        (e[44] = t))
      : (t = e[44]),
      (q = t));
  } else if (!x.available || x.enrollment_url == null) {
    let t;
    (e[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.unavailable`,
          defaultMessage: `1Password setup isn’t available in this workspace yet`,
          description: `Explains why the connection action is unavailable when the backend has not enabled 1Password enrollment`,
        })),
        (e[45] = t))
      : (t = e[45]),
      (q = t));
  } else if (m) {
    let t;
    (e[46] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.callbackUnconfirmed`,
          defaultMessage: `We couldn’t confirm your connection. Connect again to retry`,
          description: `Message in Cloud Browser Credential Manager after the 1Password callback could not be validated or completed and the backend has not confirmed a connection. It asks the user to start a new connection attempt. Multiline body text with no placeholders.`,
        })),
        (e[46] = t))
      : (t = e[46]),
      (q = t));
  } else if (x.state === `connecting`) {
    let t;
    (e[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.connecting`,
          defaultMessage: `Connecting… Complete authorization in your browser`,
          description: `Credential Manager status while 1Password enrollment is still pending; closing the browser does not complete enrollment`,
        })),
        (e[47] = t))
      : (t = e[47]),
      (q = t));
  } else if (x.state === `failed` || x.state === `reconnect_required`) {
    let t;
    (e[48] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.reconnect`,
          defaultMessage: `Connection needs attention. Connect again to retry`,
          description: `Credential Manager status after enrollment fails or authorization must be renewed`,
        })),
        (e[48] = t))
      : (t = e[48]),
      (q = t));
  } else {
    let t;
    (e[49] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.disconnected`,
          defaultMessage: `Use selected logins from 1Password when ChatGPT asks you to sign in`,
          description: `Credential Manager state when no persisted 1Password connection exists`,
        })),
        (e[49] = t))
      : (t = e[49]),
      (q = t));
  }
  let J;
  e[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Z.jsx)(ue.Header, {
        title: (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.title`,
          defaultMessage: `Password manager`,
          description: `Heading in Cloud Browser settings for connecting and managing password managers for the current account`,
        }),
      })),
      (e[50] = J))
    : (J = e[50]);
  let Y, pe;
  e[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, Z.jsx)(be, {
        className: `size-8 rounded-md`,
        src: je,
        alt: ``,
        fallback: (0, Z.jsx)(Z.Fragment, {}),
      })),
      (pe = (0, Z.jsx)(c, {
        id: `settings.chatGpt.cloudBrowser.credentials.provider`,
        defaultMessage: `1Password`,
        description: `Product name of the supported password manager in Cloud Browser Credential Manager and its chooser. Keep the brand name 1Password unchanged.`,
      })),
      (e[51] = Y),
      (e[52] = pe))
    : ((Y = e[51]), (pe = e[52]));
  let me;
  e[53] !== K ||
  e[54] !== R ||
  e[55] !== x?.state ||
  e[56] !== A ||
  e[57] !== W ||
  e[58] !== G ||
  e[59] !== U ||
  e[60] !== g ||
  e[61] !== p
    ? ((me =
        !p && (!G || W)
          ? (0, Z.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-2`,
              children: [
                K && x?.state !== `connected`
                  ? (0, Z.jsx)(t, {
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: U.isPending || A.isPending || R.isPending,
                      onClick: () => {
                        (R.reset(), g(!0));
                      },
                      children: (0, Z.jsx)(c, {
                        id: `settings.chatGpt.cloudBrowser.credentials.setUp`,
                        defaultMessage: `Set up`,
                        description: `Opens the 1Password setup explanation and consent action`,
                      }),
                    })
                  : null,
                x?.state === `connected` || x?.state === `reconnect_required`
                  ? (0, Z.jsx)(t, {
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: A.isPending || R.isPending,
                      loading: A.isPending,
                      onClick: () => A.mutate(),
                      children: (0, Z.jsx)(c, {
                        id: `settings.chatGpt.cloudBrowser.credentials.disconnect`,
                        defaultMessage: `Disconnect`,
                        description: `Credential Manager button removing the 1Password connection, also available while enrollment is disabled`,
                      }),
                    })
                  : null,
                (0, Z.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: U.isPending || A.isPending || R.isPending,
                  loading: U.isPending,
                  onClick: () => U.mutate(),
                  children: (0, Z.jsx)(c, {
                    id: `settings.chatGpt.cloudBrowser.credentials.refresh`,
                    defaultMessage: `Refresh`,
                    description: `Credential Manager button that fetches authoritative password-manager connection status`,
                  }),
                }),
              ],
            })
          : void 0),
      (e[53] = K),
      (e[54] = R),
      (e[55] = x?.state),
      (e[56] = A),
      (e[57] = W),
      (e[58] = G),
      (e[59] = U),
      (e[60] = g),
      (e[61] = p),
      (e[62] = me))
    : (me = e[62]);
  let he;
  e[63] !== q || e[64] !== me
    ? ((he = (0, Z.jsx)(ue.Content, {
        children: (0, Z.jsx)(oe, {
          children: (0, Z.jsx)(V, { icon: Y, label: pe, description: q, control: me }),
        }),
      })),
      (e[63] = q),
      (e[64] = me),
      (e[65] = he))
    : (he = e[65]);
  let ge = (e) => {
      (e.preventDefault(),
        K &&
          (m &&
            (u.delete(`onepassword_result`),
            l({ pathname: s.pathname, search: u.toString(), hash: s.hash }, { replace: !0 })),
          R.mutate(void 0)));
    },
    _e;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Z.jsx)(be, {
        className: `size-full rounded`,
        src: je,
        alt: ``,
        fallback: (0, Z.jsx)(Z.Fragment, {}),
      })),
      (e[66] = _e))
    : (_e = e[66]);
  let ve;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, Z.jsx)(re, {
        children: (0, Z.jsx)(c, {
          id: `settings.chatGpt.cloudBrowser.credentials.choose`,
          defaultMessage: `Set up 1Password?`,
          description: `Title of the 1Password setup consent dialog`,
        }),
      })),
      (e[67] = ve))
    : (ve = e[67]);
  let ye;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, Z.jsx)(N, {
        children: (0, Z.jsx)(ie, {
          icon: _e,
          title: ve,
          subtitle: (0, Z.jsx)(k, {
            children: (0, Z.jsx)(c, {
              id: `settings.chatGpt.cloudBrowser.credentials.setupDescription`,
              defaultMessage: `Use selected logins from 1Password when ChatGPT asks you to sign in. You choose which login to share.`,
              description: `Explains 1Password setup before the user opens the provider authorization flow`,
            }),
          }),
        }),
      })),
      (e[68] = ye))
    : (ye = e[68]);
  let xe;
  e[69] !== R.isError || e[70] !== R.variables
    ? ((xe = R.isError
        ? (0, Z.jsx)(N, {
            children: (0, Z.jsx)(te, {
              type: `error`,
              variant: `callout`,
              role: `alert`,
              content:
                R.variables === null
                  ? (0, Z.jsx)(c, {
                      id: `settings.chatGpt.cloudBrowser.credentials.popupBlocked`,
                      defaultMessage: `Allow popups to connect 1Password, then try again`,
                      description: `Error in the password-manager chooser when the browser blocks opening the 1Password consent tab`,
                    })
                  : (0, Z.jsx)(c, {
                      id: `settings.chatGpt.cloudBrowser.credentials.connectError`,
                      defaultMessage: `We couldn’t start the connection. Try again`,
                      description: `Error in the password-manager chooser when enrollment could not start or its consent tab was closed`,
                    }),
            }),
          })
        : null),
      (e[69] = R.isError),
      (e[70] = R.variables),
      (e[71] = xe))
    : (xe = e[71]);
  let Se;
  e[72] === g ? (Se = e[73]) : ((Se = () => g(!1)), (e[72] = g), (e[73] = Se));
  let Ce;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, Z.jsx)(c, {
        id: `settings.chatGpt.cloudBrowser.credentials.cancelSetup`,
        defaultMessage: `Cancel`,
        description: `Closes 1Password setup without starting authorization`,
      })),
      (e[74] = Ce))
    : (Ce = e[74]);
  let X;
  e[75] === Se
    ? (X = e[76])
    : ((X = (0, Z.jsx)(t, { type: `button`, color: `secondary`, onClick: Se, children: Ce })),
      (e[75] = Se),
      (e[76] = X));
  let we = !K || U.isPending || R.isPending,
    Te;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, Z.jsx)(c, {
        id: `settings.chatGpt.cloudBrowser.credentials.startSetup`,
        defaultMessage: `Set up 1Password`,
        description: `Starts authorization with 1Password after the user reviews setup`,
      })),
      (e[77] = Te))
    : (Te = e[77]);
  let De;
  e[78] !== R.isPending || e[79] !== we
    ? ((De = (0, Z.jsx)(t, {
        color: `primary`,
        disabled: we,
        loading: R.isPending,
        type: `submit`,
        children: Te,
      })),
      (e[78] = R.isPending),
      (e[79] = we),
      (e[80] = De))
    : (De = e[80]);
  let Oe;
  e[81] !== X || e[82] !== De
    ? ((Oe = (0, Z.jsxs)(z, { children: [X, De] })), (e[81] = X), (e[82] = De), (e[83] = Oe))
    : (Oe = e[83]);
  let ke;
  e[84] !== ge || e[85] !== xe || e[86] !== Oe
    ? ((ke = (0, Z.jsxs)(P, { as: `form`, onSubmit: ge, children: [ye, xe, Oe] })),
      (e[84] = ge),
      (e[85] = xe),
      (e[86] = Oe),
      (e[87] = ke))
    : (ke = e[87]);
  let Ae;
  e[88] !== g || e[89] !== h || e[90] !== ke
    ? ((Ae = (0, Z.jsx)(ae, { open: h, onOpenChange: g, size: `compact`, children: ke })),
      (e[88] = g),
      (e[89] = h),
      (e[90] = ke),
      (e[91] = Ae))
    : (Ae = e[91]);
  let Me;
  return (
    e[92] !== he || e[93] !== Ae
      ? ((Me = (0, Z.jsxs)(ue, { children: [J, he, Ae] })), (e[92] = he), (e[93] = Ae), (e[94] = Me))
      : (Me = e[94]),
    Me
  );
}
async function Fe(e, t, n, r) {
  try {
    let i = await fe.safePost(`/password-managers/1password/enrollment`, {
        expectedIdentity: { accountId: e, userId: n },
        additionalHeaders: { "ChatGPT-Account-ID": e },
        requestBody: { expected_account_user_id: t },
        retry: `never`,
      }),
      a = new URL(i.authorization_url);
    if (
      ![
        `https://my.b5dev.eu/oauth/authorize`,
        `https://my.b5dev.com/oauth/authorize`,
        `https://my.1password.com/oauth/authorize`,
        `https://start.b5dev.eu/sign-up/agent/individual`,
        `https://start.b5dev.com/sign-up/agent/individual`,
        `https://start.1password.com/sign-up/agent/individual`,
      ].includes(a.origin + a.pathname)
    )
      throw Error(`Invalid 1Password authorization destination`);
    if (r != null) {
      if (r.closed) throw Error(`1Password enrollment tab was closed`);
      r.sessionStorage.clear();
      let e = r.document.createElement(`meta`);
      ((e.name = `referrer`),
        (e.content = `no-referrer`),
        r.document.head.append(e),
        r.location.replace(a.href));
    } else pe({ href: a.href, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
  } catch (e) {
    throw (r?.close(), e);
  }
}
var Ie, Le, Z;
function Re() {
  return (Re = e(() => {
    ((Ie = U()),
      l(),
      w(),
      g(),
      (Le = G()),
      M(),
      E(),
      a(),
      Me(),
      De(),
      ve(),
      s(),
      B(),
      H(),
      O(),
      J(),
      he(),
      q(),
      j(),
      u(),
      _e(),
      (Z = W()));
  }))();
}
function ze(e) {
  let n = (0, Ve.c)(33),
    { password: r, onClose: i, onRemove: a } = e,
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { "aria-describedby": void 0 }), (n[0] = o))
    : (o = n[0]);
  let s;
  n[1] === i
    ? (s = n[2])
    : ((s = (e) => {
        e || i();
      }),
      (n[1] = i),
      (n[2] = s));
  let l;
  n[3] === r.origin ? (l = n[4]) : ((l = new URL(r.origin)), (n[3] = r.origin), (n[4] = l));
  let u;
  n[5] === l.hostname
    ? (u = n[6])
    : ((u = (0, Q.jsx)(re, { children: l.hostname })), (n[5] = l.hostname), (n[6] = u));
  let d;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(p, { asset: T })), (n[7] = d))
    : (d = n[7]);
  let f;
  n[8] === u
    ? (f = n[9])
    : ((f = (0, Q.jsx)(N, { children: (0, Q.jsx)(ie, { title: u, icon: d }) })), (n[8] = u), (n[9] = f));
  let m;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(c, {
        id: `restricted.passwords.account`,
        defaultMessage: `Account`,
        description: `Label for the masked account identifier in a saved password's details`,
      })),
      (n[10] = m))
    : (m = n[10]);
  let h;
  n[11] === r.account_label
    ? (h = n[12])
    : ((h = (0, Q.jsx)(V, {
        label: m,
        control: (0, Q.jsx)(`span`, { className: `select-text`, children: r.account_label }),
        controlSizing: `content`,
      })),
      (n[11] = r.account_label),
      (n[12] = h));
  let g;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(c, {
        id: `restricted.passwords.website`,
        defaultMessage: `Website`,
        description: `Label for a saved password's website origin`,
      })),
      (n[13] = g))
    : (g = n[13]);
  let _;
  n[14] === r.origin
    ? (_ = n[15])
    : ((_ = (0, Q.jsx)(V, {
        label: g,
        control: (0, Q.jsx)(`span`, { className: `break-all select-text`, children: r.origin }),
        controlSizing: `content`,
      })),
      (n[14] = r.origin),
      (n[15] = _));
  let ee;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Q.jsx)(c, {
        id: `restricted.passwords.savedAt`,
        defaultMessage: `Saved`,
        description: `When this website password was first saved, not the time it was last used`,
      })),
      (n[16] = ee))
    : (ee = n[16]);
  let y = r.created_at * 1e3,
    b;
  n[17] === y
    ? (b = n[18])
    : ((b = (0, Q.jsx)(V, {
        label: ee,
        control: (0, Q.jsx)(v, { value: y, year: `numeric`, month: `short`, day: `numeric` }),
        controlSizing: `content`,
      })),
      (n[17] = y),
      (n[18] = b));
  let x;
  n[19] !== _ || n[20] !== b || n[21] !== h
    ? ((x = (0, Q.jsx)(N, { children: (0, Q.jsxs)(oe, { children: [h, _, b] }) })),
      (n[19] = _),
      (n[20] = b),
      (n[21] = h),
      (n[22] = x))
    : (x = n[22]);
  let S;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(c, {
        id: `restricted.passwords.delete`,
        defaultMessage: `Delete password`,
        description: `Opens confirmation before deleting a saved website password`,
      })),
      (n[23] = S))
    : (S = n[23]);
  let C;
  n[24] === a
    ? (C = n[25])
    : ((C = (0, Q.jsx)(N, {
        children: (0, Q.jsx)(z, {
          children: (0, Q.jsx)(t, { color: `danger`, size: `toolbar`, onClick: a, children: S }),
        }),
      })),
      (n[24] = a),
      (n[25] = C));
  let te;
  n[26] !== x || n[27] !== C || n[28] !== f
    ? ((te = (0, Q.jsxs)(P, { "data-dd-privacy": `mask`, children: [f, x, C] })),
      (n[26] = x),
      (n[27] = C),
      (n[28] = f),
      (n[29] = te))
    : (te = n[29]);
  let ne;
  return (
    n[30] !== te || n[31] !== s
      ? ((ne = (0, Q.jsx)(ae, { open: !0, size: `compact`, contentProps: o, onOpenChange: s, children: te })),
        (n[30] = te),
        (n[31] = s),
        (n[32] = ne))
      : (ne = n[32]),
    ne
  );
}
function Be(e) {
  let t = (0, Ve.c)(12),
    { password: n, isPending: r, onClose: i, onConfirm: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(c, {
        id: `restricted.passwords.confirmTitle`,
        defaultMessage: `Delete this password?`,
        description: `Confirmation title before permanently deleting a saved website password`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, Q.jsx)(`br`, {})), (t[1] = s)) : (s = t[1]);
  let l, u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(`br`, {})),
      (u = (0, Q.jsx)(c, {
        id: `restricted.passwords.confirmDescription`,
        defaultMessage: `This won’t sign you out of the website`,
        description: `Deleting a saved password does not end an existing website session`,
      })),
      (t[2] = l),
      (t[3] = u))
    : ((l = t[2]), (u = t[3]));
  let d;
  t[4] !== n.account_label || t[5] !== n.origin
    ? ((d = (0, Q.jsxs)(`span`, {
        className: `break-all`,
        "data-dd-privacy": `mask`,
        children: [n.origin, s, n.account_label, l, u],
      })),
      (t[4] = n.account_label),
      (t[5] = n.origin),
      (t[6] = d))
    : (d = t[6]);
  let f;
  return (
    t[7] !== r || t[8] !== i || t[9] !== a || t[10] !== d
      ? ((f = (0, Q.jsx)(Ae, { title: o, description: d, pending: r, onClose: i, onConfirm: a })),
        (t[7] = r),
        (t[8] = i),
        (t[9] = a),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var Ve, Q;
function He() {
  return (He = e(() => {
    ((Ve = U()), _(), M(), B(), H(), O(), h(), ke(), j(), u(), (Q = W()));
  }))();
}
function Ue(e, t) {
  return x({
    queryKey: [`saved-credentials`, t, e],
    queryFn: async ({ pageParam: n, signal: r }) =>
      Ge.parse(
        await fe.safeGet(`/saved-credentials`, {
          additionalHeaders: { "ChatGPT-Account-ID": e },
          expectedErrorStatuses: [403, 404],
          expectedIdentity: { accountId: e, userId: t },
          parameters: { query: { cursor: n } },
          retry: !1,
          signal: r,
        }),
      ),
    initialPageParam: void 0,
    getNextPageParam: (e) => e.next_cursor ?? void 0,
    staleTime: 0,
    gcTime: 0,
    retry: !1,
  });
}
async function We(e, t, r) {
  L({ status: n(`deleted`) }).parse(
    await fe.safeDelete(`/saved-credentials/{credential_id}`, {
      additionalHeaders: { "ChatGPT-Account-ID": e },
      expectedIdentity: { accountId: e, userId: t },
      parameters: { path: { credential_id: r } },
      retry: !1,
    }),
  );
}
var Ge;
function Ke() {
  return (Ke = e(() => {
    (a(),
      ve(),
      (Ge = L({
        items: I(L({ credential_id: b(), origin: K(), account_label: b(), created_at: D() })),
        next_cursor: b().nullish(),
      })));
  }))();
}
function qe(e) {
  let t = (0, Xe.c)(3),
    n = C(we),
    r = Te(),
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i =
          n == null || r.isLoading || r.userId == null
            ? (0, $.jsx)(R, {})
            : (0, $.jsx)(Je, { accountId: n, userId: r.userId }, JSON.stringify([n, r.userId]))),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Je(e) {
  let n = (0, Xe.c)(97),
    { accountId: r, userId: a } = e,
    o = S(),
    [s, l] = (0, Ze.useState)(``),
    [u, f] = (0, Ze.useState)(),
    [h, g] = (0, Ze.useState)(),
    _;
  n[0] !== r || n[1] !== a ? ((_ = Ue(r, a)), (n[0] = r), (n[1] = a), (n[2] = _)) : (_ = n[2]);
  let {
      data: v,
      isPending: y,
      isFetching: b,
      isError: x,
      hasNextPage: C,
      fetchNextPage: ne,
      refetch: w,
    } = m(_),
    re;
  n[3] !== r || n[4] !== a ? ((re = (e) => We(r, a, e)), (n[3] = r), (n[4] = a), (n[5] = re)) : (re = n[5]);
  let E;
  n[6] === w
    ? (E = n[7])
    : ((E = async () => {
        (g(void 0), f(void 0), await w());
      }),
      (n[6] = w),
      (n[7] = E));
  let ie;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = () => {
        (g(void 0), f(void 0));
      }),
      (n[8] = ie))
    : (ie = n[8]);
  let D;
  n[9] !== re || n[10] !== E
    ? ((D = { mutationFn: re, retry: !1, onSuccess: E, onError: ie }), (n[9] = re), (n[10] = E), (n[11] = D))
    : (D = n[11]);
  let { mutate: O, isPending: k, isError: A, reset: j } = d(D),
    M,
    N,
    ae,
    P,
    F,
    I,
    L,
    z,
    B,
    V,
    H,
    U,
    ce,
    W;
  if (
    n[12] !== v?.pages ||
    n[13] !== C ||
    n[14] !== o ||
    n[15] !== x ||
    n[16] !== b ||
    n[17] !== y ||
    n[18] !== k ||
    n[19] !== w ||
    n[20] !== A ||
    n[21] !== j ||
    n[22] !== s
  ) {
    let e = v?.pages.flatMap(Ye);
    P = s.trim().toLocaleLowerCase();
    let r = e?.filter((e) => `${e.origin} ${e.account_label}`.toLocaleLowerCase().includes(P));
    ((ae = xe),
      (I = `select-none`),
      n[37] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((L = (0, $.jsx)(c, { ...X.title })),
          (z = (0, $.jsx)(c, { ...X.description })),
          (n[37] = L),
          (n[38] = z))
        : ((L = n[37]), (z = n[38])));
    let a;
    n[39] === o ? (a = n[40]) : ((a = o.formatMessage(X.search)), (n[39] = o), (n[40] = a));
    let u;
    (n[41] === o ? (u = n[42]) : ((u = o.formatMessage(X.search)), (n[41] = o), (n[42] = u)),
      n[43] !== s || n[44] !== a || n[45] !== u
        ? ((B = (0, $.jsx)(Se, {
            id: `saved-password-search`,
            autoFocus: !1,
            inputRole: `searchbox`,
            label: a,
            placeholder: u,
            searchQuery: s,
            onSearchQueryChange: l,
          })),
          (n[43] = s),
          (n[44] = a),
          (n[45] = u),
          (n[46] = B))
        : (B = n[46]),
      n[47] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((V = (0, $.jsx)(Ne, {})), (n[47] = V))
        : (V = n[47]),
      (N = ue));
    let d =
        e != null && !C
          ? (0, $.jsx)(c, {
              id: `restricted.passwords.count`,
              defaultMessage: `Saved passwords ({count})`,
              description: `Heading showing the total number of saved website passwords after all pages have loaded`,
              values: { count: e.length },
            })
          : (0, $.jsx)(c, {
              id: `restricted.passwords.saved`,
              defaultMessage: `Saved passwords`,
              description: `Heading above the list of saved website passwords`,
            }),
      m = b || k,
      h;
    n[48] !== w || n[49] !== j
      ? ((h = () => {
          (j(), w());
        }),
        (n[48] = w),
        (n[49] = j),
        (n[50] = h))
      : (h = n[50]);
    let _;
    n[51] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, $.jsx)(c, {
          id: `restricted.passwords.refresh`,
          defaultMessage: `Refresh`,
          description: `Reload the saved password list without using or saving a password`,
        })),
        (n[51] = _))
      : (_ = n[51]);
    let S;
    (n[52] !== m || n[53] !== h
      ? ((S = (0, $.jsx)(t, { color: `secondary`, size: `toolbar`, disabled: m, onClick: h, children: _ })),
        (n[52] = m),
        (n[53] = h),
        (n[54] = S))
      : (S = n[54]),
      n[55] !== d || n[56] !== S
        ? ((F = (0, $.jsx)(ue.Header, { title: d, actions: S })), (n[55] = d), (n[56] = S), (n[57] = F))
        : (F = n[57]),
      (M = ue.Content),
      n[58] !== x || n[59] !== A
        ? ((H =
            x || A
              ? (0, $.jsx)(te, {
                  type: `error`,
                  variant: `callout`,
                  role: `alert`,
                  content: (0, $.jsx)(c, {
                    id: `restricted.passwords.error`,
                    defaultMessage: `We couldn’t confirm the latest saved passwords. Refresh to check.`,
                    description: `An uncertain list or deletion result; refresh reconciles server state without retrying the deletion`,
                  }),
                })
              : null),
          (n[58] = x),
          (n[59] = A),
          (n[60] = H))
        : (H = n[60]),
      n[61] === b
        ? (U = n[62])
        : ((U = b
            ? (0, $.jsxs)(`div`, {
                role: `status`,
                className: `flex items-center gap-2 text-sm text-secondary`,
                children: [
                  (0, $.jsx)(R, {}),
                  (0, $.jsx)(c, {
                    id: `restricted.passwords.loading`,
                    defaultMessage: `Loading saved passwords…`,
                    description: `Status while loading or refreshing saved passwords`,
                  }),
                ],
              })
            : null),
          (n[61] = b),
          (n[62] = U)),
      (ce =
        !y && !x && r?.length === 0
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: P
                ? (0, $.jsx)(c, {
                    id: `restricted.passwords.noMatches`,
                    defaultMessage: `No matching passwords`,
                    description: `No loaded saved passwords match the search`,
                  })
                : (0, $.jsx)(c, {
                    id: `restricted.passwords.empty`,
                    defaultMessage: `No saved passwords`,
                    description: `The user has not saved any website passwords`,
                  }),
            })
          : null),
      (W =
        r != null && r.length > 0
          ? (0, $.jsx)(`div`, {
              "data-dd-privacy": `mask`,
              children: (0, $.jsx)(oe, {
                children: r.map((e) =>
                  (0, $.jsx)(
                    ee,
                    {
                      edgeRounding: `surface`,
                      icon: (0, $.jsx)(p, { asset: T }),
                      label: new URL(e.origin).hostname,
                      description: e.account_label,
                      onClick: () => f(e),
                      trailing: (0, $.jsx)(i, {}),
                      actions: (0, $.jsx)(t, {
                        "aria-label": o.formatMessage(
                          {
                            id: `restricted.passwords.remove`,
                            defaultMessage: `Remove password for {site}, {account}`,
                            description: `Accessible label for removing one saved password, identified by website and masked account`,
                          },
                          { site: e.origin, account: e.account_label },
                        ),
                        color: `ghost`,
                        size: `toolbar`,
                        disabled: k,
                        onClick: () => g(e),
                        children: (0, $.jsx)(se, {}),
                      }),
                    },
                    e.credential_id,
                  ),
                ),
              }),
            })
          : null),
      (n[12] = v?.pages),
      (n[13] = C),
      (n[14] = o),
      (n[15] = x),
      (n[16] = b),
      (n[17] = y),
      (n[18] = k),
      (n[19] = w),
      (n[20] = A),
      (n[21] = j),
      (n[22] = s),
      (n[23] = M),
      (n[24] = N),
      (n[25] = ae),
      (n[26] = P),
      (n[27] = F),
      (n[28] = I),
      (n[29] = L),
      (n[30] = z),
      (n[31] = B),
      (n[32] = V),
      (n[33] = H),
      (n[34] = U),
      (n[35] = ce),
      (n[36] = W));
  } else
    ((M = n[23]),
      (N = n[24]),
      (ae = n[25]),
      (P = n[26]),
      (F = n[27]),
      (I = n[28]),
      (L = n[29]),
      (z = n[30]),
      (B = n[31]),
      (V = n[32]),
      (H = n[33]),
      (U = n[34]),
      (ce = n[35]),
      (W = n[36]));
  let G;
  n[63] !== M || n[64] !== H || n[65] !== U || n[66] !== ce || n[67] !== W
    ? ((G = (0, $.jsxs)(M, { children: [H, U, ce, W] })),
      (n[63] = M),
      (n[64] = H),
      (n[65] = U),
      (n[66] = ce),
      (n[67] = W),
      (n[68] = G))
    : (G = n[68]);
  let K;
  n[69] !== ne || n[70] !== C || n[71] !== b || n[72] !== k || n[73] !== P
    ? ((K = C
        ? (0, $.jsxs)(ue.Footer, {
            children: [
              P
                ? (0, $.jsx)(c, {
                    id: `restricted.passwords.searchMore`,
                    defaultMessage: `Load more passwords to search the rest`,
                    description: `Explains that search applies to loaded passwords while more pages are available`,
                  })
                : null,
              (0, $.jsx)(t, {
                color: `secondary`,
                size: `toolbar`,
                disabled: b || k,
                onClick: () => void ne(),
                children: (0, $.jsx)(c, {
                  id: `restricted.passwords.more`,
                  defaultMessage: `Load more`,
                  description: `Load the next page of saved passwords`,
                }),
              }),
            ],
          })
        : null),
      (n[69] = ne),
      (n[70] = C),
      (n[71] = b),
      (n[72] = k),
      (n[73] = P),
      (n[74] = K))
    : (K = n[74]);
  let q;
  n[75] !== N || n[76] !== F || n[77] !== G || n[78] !== K
    ? ((q = (0, $.jsxs)(N, { children: [F, G, K] })),
      (n[75] = N),
      (n[76] = F),
      (n[77] = G),
      (n[78] = K),
      (n[79] = q))
    : (q = n[79]);
  let le;
  n[80] !== h || n[81] !== u
    ? ((le =
        u != null && h == null
          ? (0, $.jsx)(ze, { password: u, onClose: () => f(void 0), onRemove: () => g(u) })
          : null),
      (n[80] = h),
      (n[81] = u),
      (n[82] = le))
    : (le = n[82]);
  let J;
  n[83] !== k || n[84] !== O || n[85] !== h
    ? ((J =
        h == null
          ? null
          : (0, $.jsx)(Be, {
              password: h,
              isPending: k,
              onClose: () => g(void 0),
              onConfirm: () => {
                k || O(h.credential_id);
              },
            })),
      (n[83] = k),
      (n[84] = O),
      (n[85] = h),
      (n[86] = J))
    : (J = n[86]);
  let Y;
  return (
    n[87] !== ae ||
    n[88] !== I ||
    n[89] !== L ||
    n[90] !== z ||
    n[91] !== B ||
    n[92] !== V ||
    n[93] !== q ||
    n[94] !== le ||
    n[95] !== J
      ? ((Y = (0, $.jsxs)(ae, {
          className: I,
          title: L,
          subtitle: z,
          stickyControls: B,
          children: [V, q, le, J],
        })),
        (n[87] = ae),
        (n[88] = I),
        (n[89] = L),
        (n[90] = z),
        (n[91] = B),
        (n[92] = V),
        (n[93] = q),
        (n[94] = le),
        (n[95] = J),
        (n[96] = Y))
      : (Y = n[96]),
    Y
  );
}
function Ye(e) {
  return e.items;
}
var Xe, Ze, $;
function Qe() {
  return (Qe = e(() => {
    ((Xe = U()),
      _(),
      f(),
      l(),
      g(),
      (Ze = G()),
      M(),
      ye(),
      Y(),
      s(),
      B(),
      h(),
      y(),
      Oe(),
      A(),
      me(),
      Re(),
      q(),
      j(),
      u(),
      He(),
      ge(),
      Ke(),
      ($ = W()));
  }))();
}
Qe();
export { qe as PasswordsSettings };
//# sourceMappingURL=settings-e8442dfdfad6.js.map
