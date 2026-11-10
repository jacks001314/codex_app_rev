import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  DB as r,
  FBt as i,
  HFt as a,
  HO as o,
  IO as s,
  JO as c,
  KO as l,
  LNt as u,
  LO as d,
  Mst as f,
  NSt as p,
  OB as m,
  ORt as h,
  PBt as g,
  RO as _,
  SSt as v,
  Tst as y,
  Ty as b,
  USt as x,
  VRt as S,
  VSt as C,
  WO as ee,
  WOt as w,
  XOt as T,
  Y3 as E,
  Z3 as D,
  ZSt as O,
  e6 as k,
  ew as A,
  hRt as j,
  hst as te,
  iCt as M,
  iw as N,
  jst as P,
  kLt as F,
  kRt as I,
  mst as L,
  nt as R,
  nzt as z,
  okt as ne,
  qO as B,
  sw as V,
  tkt as H,
  tt as U,
  tzt as W,
  uw as G,
  vD as re,
  vst as K,
  wy as ie,
  yD as q,
  yst as ae,
  zO as J,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as Y,
  F as oe,
  F6t as se,
  HF as ce,
  IMr as le,
  M as ue,
  N as de,
  P as fe,
  P6t as pe,
  QF as me,
  UF as he,
  bLr as ge,
  cA as _e,
  eI as ve,
  hut as ye,
  iRr as be,
  imr as xe,
  j as Se,
  mut as Ce,
  nMr as we,
  rmr as Te,
  sA as Ee,
  tyr as X,
  vLr as De,
  wLr as Oe,
  xjr as ke,
  zRr as Ae,
} from "./app-initial-ad16eaadf81f.js";
import { n as je, t as Me } from "./delete-dialog-a1f8bd682f1f.js";
function Ne() {
  let e = (0, Fe.c)(2),
    t = Y(`2244853012`),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = t ? (0, Z.jsx)(Pe, {}) : null), (e[0] = t), (e[1] = n)), n);
}
function Pe() {
  let e = (0, Fe.c)(90),
    t = M(Ae),
    r = M(De),
    i = M(ge),
    a = C(),
    o = x(),
    c = new URLSearchParams(a.search),
    u = z().safeParse(c.get(`onepassword_account_id`)).data,
    p = u != null && u !== t,
    m = c.get(`onepassword_result`) === `unconfirmed`,
    [h, g] = (0, Ie.useState)(!1),
    y;
  e[0] !== t || e[1] !== i ? ((y = fe(t, i)), (e[0] = t), (e[1] = i), (e[2] = y)) : (y = e[2]);
  let b = t != null && i != null && !p,
    S;
  e[3] === m
    ? (S = e[4])
    : ((S = (e) => !m && e.state.data?.state === `connecting` && 1500), (e[3] = m), (e[4] = S));
  let w;
  e[5] !== y || e[6] !== b || e[7] !== S
    ? ((w = { ...y, staleTime: 0, enabled: b, refetchInterval: S }),
      (e[5] = y),
      (e[6] = b),
      (e[7] = S),
      (e[8] = w))
    : (w = e[8]);
  let { data: T, isFetching: D, isError: O, refetch: k } = f(w),
    A;
  e[9] !== t || e[10] !== i
    ? ((A = () => {
        if (t == null || i == null) throw Error(`Missing authenticated identity`);
        return be.safeDelete(`/password-managers/1password`, {
          expectedIdentity: { accountId: t, userId: i },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          retry: `never`,
        });
      }),
      (e[9] = t),
      (e[10] = i),
      (e[11] = A))
    : (A = e[11]);
  let j;
  e[12] === k ? (j = e[13]) : ((j = () => k()), (e[12] = k), (e[13] = j));
  let te;
  e[14] !== A || e[15] !== j
    ? ((te = { mutationFn: A, onSettled: j }), (e[14] = A), (e[15] = j), (e[16] = te))
    : (te = e[16]);
  let N = ae(te),
    P;
  e[17] !== t || e[18] !== r || e[19] !== i
    ? ((P = (e) => {
        if (t == null || r == null || i == null || e === null)
          throw (e?.close(), Error(`Unable to start 1Password enrollment`));
        return oe(t, r, i, e);
      }),
      (e[17] = t),
      (e[18] = r),
      (e[19] = i),
      (e[20] = P))
    : (P = e[20]);
  let F;
  e[21] === g ? (F = e[22]) : ((F = () => g(!1)), (e[21] = g), (e[22] = F));
  let I;
  e[23] === k ? (I = e[24]) : ((I = () => k()), (e[23] = k), (e[24] = I));
  let L;
  e[25] !== P || e[26] !== F || e[27] !== I
    ? ((L = { mutationFn: P, onSuccess: F, onSettled: I }),
      (e[25] = P),
      (e[26] = F),
      (e[27] = I),
      (e[28] = L))
    : (L = e[28]);
  let R = ae(L),
    ne;
  e[29] === k ? (ne = e[30]) : ((ne = () => k()), (e[29] = k), (e[30] = ne));
  let U;
  e[31] !== R || e[32] !== N
    ? ((U = () => {
        (N.reset(), R.reset());
      }),
      (e[31] = R),
      (e[32] = N),
      (e[33] = U))
    : (U = e[33]);
  let W;
  e[34] !== ne || e[35] !== U
    ? ((W = { mutationFn: ne, onMutate: U }), (e[34] = ne), (e[35] = U), (e[36] = W))
    : (W = e[36]);
  let G = ae(W),
    K = O || N.isError || R.isError,
    ie = T?.state === `connecting` && !m,
    q = !p && !ie && T?.available && T.enrollment_url != null && r != null;
  if (!p && (u != null || m) && ((T?.state === `connected` && !D && !O) || N.isSuccess))
    return (
      c.delete(`onepassword_account_id`),
      c.delete(`onepassword_result`),
      (0, Z.jsx)(v, { to: { pathname: a.pathname, search: c.toString(), hash: a.hash }, replace: !0 })
    );
  let Y;
  if (p) {
    let t;
    (e[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.workspaceMismatch`,
          defaultMessage: `Switch back to the workspace where you started connecting 1Password`,
          description: `Message in Cloud Browser Credential Manager after returning from 1Password consent when the active ChatGPT workspace differs from the workspace that started the connection. Connection status and actions are hidden until the user manually switches back. Multiline body text with no placeholders.`,
        })),
        (e[37] = t))
      : (t = e[37]),
      (Y = t));
  } else if (K) {
    let t;
    (e[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.error`,
          defaultMessage: `We couldn’t confirm your connection. Refresh to try again`,
          description: `Credential Manager error when connection status or disconnect could not be confirmed; it does not claim the operation failed`,
        })),
        (e[38] = t))
      : (t = e[38]),
      (Y = t));
  } else if (T == null) {
    let t;
    (e[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.loading`,
          defaultMessage: `Checking connection…`,
          description: `Credential Manager loading state before the backend has returned connection status`,
        })),
        (e[39] = t))
      : (t = e[39]),
      (Y = t));
  } else if (T.state === `connected`) {
    let t;
    (e[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsxs)(`span`, {
          className: `inline-flex items-center gap-1.5`,
          children: [
            (0, Z.jsx)(`span`, { "aria-hidden": `true`, className: `block size-2 rounded-full bg-green` }),
            (0, Z.jsx)(H, {
              id: `settings.chatGpt.cloudBrowser.credentials.connected`,
              defaultMessage: `Connected`,
              description: `Credential Manager state after the backend confirms a persisted 1Password connection`,
            }),
          ],
        })),
        (e[40] = t))
      : (t = e[40]),
      (Y = t));
  } else if (!T.available || T.enrollment_url == null) {
    let t;
    (e[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.unavailable`,
          defaultMessage: `1Password setup isn’t available in this workspace yet`,
          description: `Explains why the connection action is unavailable when the backend has not enabled 1Password enrollment`,
        })),
        (e[41] = t))
      : (t = e[41]),
      (Y = t));
  } else if (m) {
    let t;
    (e[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.callbackUnconfirmed`,
          defaultMessage: `We couldn’t confirm your connection. Connect again to retry`,
          description: `Message in Cloud Browser Credential Manager after the 1Password callback could not be validated or completed and the backend has not confirmed a connection. It asks the user to start a new connection attempt. Multiline body text with no placeholders.`,
        })),
        (e[42] = t))
      : (t = e[42]),
      (Y = t));
  } else if (T.state === `connecting`) {
    let t;
    (e[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.connecting`,
          defaultMessage: `Connecting… Complete authorization in your browser`,
          description: `Credential Manager status while 1Password enrollment is still pending; closing the browser does not complete enrollment`,
        })),
        (e[43] = t))
      : (t = e[43]),
      (Y = t));
  } else if (T.state === `failed` || T.state === `reconnect_required`) {
    let t;
    (e[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.reconnect`,
          defaultMessage: `Connection needs attention. Connect again to retry`,
          description: `Credential Manager status after enrollment fails or authorization must be renewed`,
        })),
        (e[44] = t))
      : (t = e[44]),
      (Y = t));
  } else {
    let t;
    (e[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.disconnected`,
          defaultMessage: `Use selected logins from 1Password when ChatGPT asks you to sign in`,
          description: `Credential Manager state when no persisted 1Password connection exists`,
        })),
        (e[45] = t))
      : (t = e[45]),
      (Y = t));
  }
  let se, ce;
  e[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Z.jsx)(pe, {
        className: `size-8 rounded-md`,
        src: ue,
        alt: ``,
        fallback: (0, Z.jsx)(Z.Fragment, {}),
      })),
      (ce = (0, Z.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.credentials.provider`,
        defaultMessage: `1Password`,
        description: `Product name of the supported password manager in Cloud Browser Credential Manager and its chooser. Keep the brand name 1Password unchanged.`,
      })),
      (e[46] = se),
      (e[47] = ce))
    : ((se = e[46]), (ce = e[47]));
  let le;
  e[48] !== q ||
  e[49] !== R ||
  e[50] !== T?.state ||
  e[51] !== N ||
  e[52] !== K ||
  e[53] !== ie ||
  e[54] !== G ||
  e[55] !== g ||
  e[56] !== p
    ? ((le =
        !p && (!ie || K)
          ? (0, Z.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-2`,
              children: [
                q && T?.state !== `connected`
                  ? (0, Z.jsx)(E, {
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: G.isPending || N.isPending || R.isPending,
                      onClick: () => {
                        (R.reset(), g(!0));
                      },
                      children: (0, Z.jsx)(H, {
                        id: `settings.chatGpt.cloudBrowser.credentials.setUp`,
                        defaultMessage: `Set up`,
                        description: `Opens the 1Password setup explanation and consent action`,
                      }),
                    })
                  : null,
                T?.state === `connected` || T?.state === `reconnect_required`
                  ? (0, Z.jsx)(E, {
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: N.isPending || R.isPending,
                      loading: N.isPending,
                      onClick: () => N.mutate(),
                      children: (0, Z.jsx)(H, {
                        id: `settings.chatGpt.cloudBrowser.credentials.disconnect`,
                        defaultMessage: `Disconnect`,
                        description: `Credential Manager button removing the 1Password connection, also available while enrollment is disabled`,
                      }),
                    })
                  : null,
                (0, Z.jsx)(E, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: G.isPending || N.isPending || R.isPending,
                  loading: G.isPending,
                  onClick: () => G.mutate(),
                  children: (0, Z.jsx)(H, {
                    id: `settings.chatGpt.cloudBrowser.credentials.refresh`,
                    defaultMessage: `Refresh`,
                    description: `Credential Manager button that fetches authoritative password-manager connection status`,
                  }),
                }),
              ],
            })
          : void 0),
      (e[48] = q),
      (e[49] = R),
      (e[50] = T?.state),
      (e[51] = N),
      (e[52] = K),
      (e[53] = ie),
      (e[54] = G),
      (e[55] = g),
      (e[56] = p),
      (e[57] = le))
    : (le = e[57]);
  let de;
  e[58] !== Y || e[59] !== le
    ? ((de = (0, Z.jsx)(Ee.Content, {
        children: (0, Z.jsx)(n, {
          children: (0, Z.jsx)(V, { icon: se, label: ce, description: Y, control: le }),
        }),
      })),
      (e[58] = Y),
      (e[59] = le),
      (e[60] = de))
    : (de = e[60]);
  let me = (e) => {
      (e.preventDefault(),
        q &&
          (m &&
            (c.delete(`onepassword_result`),
            o({ pathname: a.pathname, search: c.toString(), hash: a.hash }, { replace: !0 })),
          R.mutate(void 0)));
    },
    he;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Z.jsx)(pe, {
        className: `size-full rounded`,
        src: ue,
        alt: ``,
        fallback: (0, Z.jsx)(Z.Fragment, {}),
      })),
      (e[61] = he))
    : (he = e[61]);
  let _e;
  e[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Z.jsx)(B, {
        children: (0, Z.jsx)(H, {
          id: `settings.chatGpt.cloudBrowser.credentials.choose`,
          defaultMessage: `Set up 1Password?`,
          description: `Title of the 1Password setup consent dialog`,
        }),
      })),
      (e[62] = _e))
    : (_e = e[62]);
  let ve;
  e[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, Z.jsx)(J, {
        children: (0, Z.jsx)(_, {
          icon: he,
          title: _e,
          subtitle: (0, Z.jsx)(l, {
            children: (0, Z.jsx)(H, {
              id: `settings.chatGpt.cloudBrowser.credentials.setupDescription`,
              defaultMessage: `Use selected logins from 1Password when ChatGPT asks you to sign in. You choose which login to share.`,
              description: `Explains 1Password setup before the user opens the provider authorization flow`,
            }),
          }),
        }),
      })),
      (e[63] = ve))
    : (ve = e[63]);
  let ye;
  e[64] !== R.isError || e[65] !== R.variables
    ? ((ye = R.isError
        ? (0, Z.jsx)(J, {
            children: (0, Z.jsx)(re, {
              type: `error`,
              variant: `callout`,
              role: `alert`,
              content:
                R.variables === null
                  ? (0, Z.jsx)(H, {
                      id: `settings.chatGpt.cloudBrowser.credentials.popupBlocked`,
                      defaultMessage: `Allow popups to connect 1Password, then try again`,
                      description: `Error in the password-manager chooser when the browser blocks opening the 1Password consent tab`,
                    })
                  : (0, Z.jsx)(H, {
                      id: `settings.chatGpt.cloudBrowser.credentials.connectError`,
                      defaultMessage: `We couldn’t start the connection. Try again`,
                      description: `Error in the password-manager chooser when enrollment could not start or its consent tab was closed`,
                    }),
            }),
          })
        : null),
      (e[64] = R.isError),
      (e[65] = R.variables),
      (e[66] = ye))
    : (ye = e[66]);
  let xe;
  e[67] === g ? (xe = e[68]) : ((xe = () => g(!1)), (e[67] = g), (e[68] = xe));
  let Se;
  e[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, Z.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.credentials.cancelSetup`,
        defaultMessage: `Cancel`,
        description: `Closes 1Password setup without starting authorization`,
      })),
      (e[69] = Se))
    : (Se = e[69]);
  let Ce;
  e[70] === xe
    ? (Ce = e[71])
    : ((Ce = (0, Z.jsx)(E, { type: `button`, color: `secondary`, onClick: xe, children: Se })),
      (e[70] = xe),
      (e[71] = Ce));
  let we = !q || G.isPending || R.isPending,
    Te;
  e[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, Z.jsx)(H, {
        id: `settings.chatGpt.cloudBrowser.credentials.startSetup`,
        defaultMessage: `Set up 1Password`,
        description: `Starts authorization with 1Password after the user reviews setup`,
      })),
      (e[72] = Te))
    : (Te = e[72]);
  let X;
  e[73] !== R.isPending || e[74] !== we
    ? ((X = (0, Z.jsx)(E, {
        color: `primary`,
        disabled: we,
        loading: R.isPending,
        type: `submit`,
        children: Te,
      })),
      (e[73] = R.isPending),
      (e[74] = we),
      (e[75] = X))
    : (X = e[75]);
  let Oe;
  e[76] !== Ce || e[77] !== X
    ? ((Oe = (0, Z.jsxs)(d, { children: [Ce, X] })), (e[76] = Ce), (e[77] = X), (e[78] = Oe))
    : (Oe = e[78]);
  let ke;
  e[79] !== me || e[80] !== ye || e[81] !== Oe
    ? ((ke = (0, Z.jsxs)(s, { as: `form`, onSubmit: me, children: [ve, ye, Oe] })),
      (e[79] = me),
      (e[80] = ye),
      (e[81] = Oe),
      (e[82] = ke))
    : (ke = e[82]);
  let je;
  e[83] !== g || e[84] !== h || e[85] !== ke
    ? ((je = (0, Z.jsx)(ee, { open: h, onOpenChange: g, size: `compact`, children: ke })),
      (e[83] = g),
      (e[84] = h),
      (e[85] = ke),
      (e[86] = je))
    : (je = e[86]);
  let Me;
  return (
    e[87] !== de || e[88] !== je
      ? ((Me = (0, Z.jsxs)(Ee, { children: [de, je] })), (e[87] = de), (e[88] = je), (e[89] = Me))
      : (Me = e[89]),
    Me
  );
}
var Fe, Ie, Z;
function Le() {
  return (Le = e(() => {
    ((Fe = g()),
      K(),
      P(),
      O(),
      (Ie = i()),
      T(),
      p(),
      a(),
      Se(),
      Oe(),
      de(),
      X(),
      q(),
      D(),
      c(),
      o(),
      se(),
      _e(),
      G(),
      A(),
      ke(),
      (Z = u()));
  }))();
}
function Re(e) {
  let t = (0, Be.c)(33),
    { password: i, onClose: a, onRemove: o } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { "aria-describedby": void 0 }), (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === a
    ? (l = t[2])
    : ((l = (e) => {
        e || a();
      }),
      (t[1] = a),
      (t[2] = l));
  let u;
  t[3] === i.origin ? (u = t[4]) : ((u = new URL(i.origin)), (t[3] = i.origin), (t[4] = u));
  let f;
  t[5] === u.hostname
    ? (f = t[6])
    : ((f = (0, Q.jsx)(B, { children: u.hostname })), (t[5] = u.hostname), (t[6] = f));
  let p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(r, { asset: U })), (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === f
    ? (m = t[9])
    : ((m = (0, Q.jsx)(J, { children: (0, Q.jsx)(_, { title: f, icon: p }) })), (t[8] = f), (t[9] = m));
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(H, {
        id: `restricted.passwords.account`,
        defaultMessage: `Account`,
        description: `Label for the masked account identifier in a saved password's details`,
      })),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === i.account_label
    ? (g = t[12])
    : ((g = (0, Q.jsx)(V, {
        label: h,
        control: (0, Q.jsx)(`span`, { className: `select-text`, children: i.account_label }),
        controlSizing: `content`,
      })),
      (t[11] = i.account_label),
      (t[12] = g));
  let v;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(H, {
        id: `restricted.passwords.website`,
        defaultMessage: `Website`,
        description: `Label for a saved password's website origin`,
      })),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] === i.origin
    ? (y = t[15])
    : ((y = (0, Q.jsx)(V, {
        label: v,
        control: (0, Q.jsx)(`span`, { className: `break-all select-text`, children: i.origin }),
        controlSizing: `content`,
      })),
      (t[14] = i.origin),
      (t[15] = y));
  let b;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(H, {
        id: `restricted.passwords.savedAt`,
        defaultMessage: `Saved`,
        description: `When this website password was first saved, not the time it was last used`,
      })),
      (t[16] = b))
    : (b = t[16]);
  let x = i.created_at * 1e3,
    S;
  t[17] === x
    ? (S = t[18])
    : ((S = (0, Q.jsx)(V, {
        label: b,
        control: (0, Q.jsx)(w, { value: x, year: `numeric`, month: `short`, day: `numeric` }),
        controlSizing: `content`,
      })),
      (t[17] = x),
      (t[18] = S));
  let C;
  t[19] !== y || t[20] !== S || t[21] !== g
    ? ((C = (0, Q.jsx)(J, { children: (0, Q.jsxs)(n, { children: [g, y, S] }) })),
      (t[19] = y),
      (t[20] = S),
      (t[21] = g),
      (t[22] = C))
    : (C = t[22]);
  let T;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(H, {
        id: `restricted.passwords.delete`,
        defaultMessage: `Delete password`,
        description: `Opens confirmation before deleting a saved website password`,
      })),
      (t[23] = T))
    : (T = t[23]);
  let D;
  t[24] === o
    ? (D = t[25])
    : ((D = (0, Q.jsx)(J, {
        children: (0, Q.jsx)(d, {
          children: (0, Q.jsx)(E, { color: `danger`, size: `toolbar`, onClick: o, children: T }),
        }),
      })),
      (t[24] = o),
      (t[25] = D));
  let O;
  t[26] !== C || t[27] !== D || t[28] !== m
    ? ((O = (0, Q.jsxs)(s, { "data-dd-privacy": `mask`, children: [m, C, D] })),
      (t[26] = C),
      (t[27] = D),
      (t[28] = m),
      (t[29] = O))
    : (O = t[29]);
  let k;
  return (
    t[30] !== O || t[31] !== l
      ? ((k = (0, Q.jsx)(ee, { open: !0, size: `compact`, contentProps: c, onOpenChange: l, children: O })),
        (t[30] = O),
        (t[31] = l),
        (t[32] = k))
      : (k = t[32]),
    k
  );
}
function ze(e) {
  let t = (0, Be.c)(12),
    { password: n, isPending: r, onClose: i, onConfirm: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(H, {
        id: `restricted.passwords.confirmTitle`,
        defaultMessage: `Delete this password?`,
        description: `Confirmation title before permanently deleting a saved website password`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, Q.jsx)(`br`, {})), (t[1] = s)) : (s = t[1]);
  let c, l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(`br`, {})),
      (l = (0, Q.jsx)(H, {
        id: `restricted.passwords.confirmDescription`,
        defaultMessage: `This won’t sign you out of the website`,
        description: `Deleting a saved password does not end an existing website session`,
      })),
      (t[2] = c),
      (t[3] = l))
    : ((c = t[2]), (l = t[3]));
  let u;
  t[4] !== n.account_label || t[5] !== n.origin
    ? ((u = (0, Q.jsxs)(`span`, {
        className: `break-all`,
        "data-dd-privacy": `mask`,
        children: [n.origin, s, n.account_label, c, l],
      })),
      (t[4] = n.account_label),
      (t[5] = n.origin),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== r || t[8] !== i || t[9] !== a || t[10] !== u
      ? ((d = (0, Q.jsx)(Me, { title: o, description: u, pending: r, onClose: i, onConfirm: a })),
        (t[7] = r),
        (t[8] = i),
        (t[9] = a),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
var Be, Q;
function Ve() {
  return (Ve = e(() => {
    ((Be = g()), R(), T(), D(), c(), o(), m(), je(), G(), A(), (Q = u()));
  }))();
}
function He(e, t) {
  return y({
    queryKey: [`saved-credentials`, t, e],
    queryFn: async ({ pageParam: n, signal: r }) =>
      We.parse(
        await be.safeGet(`/saved-credentials`, {
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
async function Ue(e, t, n) {
  I({ status: j(`deleted`) }).parse(
    await be.safeDelete(`/saved-credentials/{credential_id}`, {
      additionalHeaders: { "ChatGPT-Account-ID": e },
      expectedIdentity: { accountId: e, userId: t },
      parameters: { path: { credential_id: n } },
      retry: !1,
    }),
  );
}
var We;
function Ge() {
  return (Ge = e(() => {
    (a(),
      X(),
      (We = I({
        items: F(I({ credential_id: S(), origin: W(), account_label: S(), created_at: h() })),
        next_cursor: S().nullish(),
      })));
  }))();
}
function Ke(e) {
  let n = (0, Ye.c)(3),
    r = M(le),
    i = xe(),
    a;
  return (
    n[0] !== r || n[1] !== i
      ? ((a =
          r == null || i.isLoading || i.userId == null
            ? (0, $.jsx)(t, {})
            : (0, $.jsx)(qe, { accountId: r, userId: i.userId }, JSON.stringify([r, i.userId]))),
        (n[0] = r),
        (n[1] = i),
        (n[2] = a))
      : (a = n[2]),
    a
  );
}
function qe(e) {
  let r = (0, Ye.c)(94),
    { accountId: i, userId: a } = e,
    o = ne(),
    [s, c] = (0, Xe.useState)(``),
    [l, u] = (0, Xe.useState)(),
    [d, f] = (0, Xe.useState)(),
    p;
  r[0] !== i || r[1] !== a ? ((p = He(i, a)), (r[0] = i), (r[1] = a), (r[2] = p)) : (p = r[2]);
  let {
      data: m,
      isPending: h,
      isFetching: g,
      isError: _,
      hasNextPage: v,
      fetchNextPage: y,
      refetch: b,
    } = te(p),
    x;
  r[3] !== i || r[4] !== a ? ((x = (e) => Ue(i, a, e)), (r[3] = i), (r[4] = a), (r[5] = x)) : (x = r[5]);
  let S;
  r[6] === b
    ? (S = r[7])
    : ((S = async () => {
        (f(void 0), u(void 0), await b());
      }),
      (r[6] = b),
      (r[7] = S));
  let C;
  r[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        (f(void 0), u(void 0));
      }),
      (r[8] = C))
    : (C = r[8]);
  let ee;
  r[9] !== x || r[10] !== S
    ? ((ee = { mutationFn: x, retry: !1, onSuccess: S, onError: C }), (r[9] = x), (r[10] = S), (r[11] = ee))
    : (ee = r[11]);
  let { mutate: w, isPending: T, isError: D, reset: O } = ae(ee),
    k,
    A,
    j,
    M,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    U;
  if (
    r[12] !== m?.pages ||
    r[13] !== v ||
    r[14] !== o ||
    r[15] !== _ ||
    r[16] !== g ||
    r[17] !== h ||
    r[18] !== T ||
    r[19] !== b ||
    r[20] !== D ||
    r[21] !== O ||
    r[22] !== s
  ) {
    let e = m?.pages.flatMap(Je);
    M = s.trim().toLocaleLowerCase();
    let i = e?.filter((e) => `${e.origin} ${e.account_label}`.toLocaleLowerCase().includes(M));
    ((j = me),
      (F = `select-none`),
      r[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((I = (0, $.jsx)(H, { ...he.title })), (r[36] = I))
        : (I = r[36]));
    let a;
    r[37] === o ? (a = r[38]) : ((a = o.formatMessage(he.search)), (r[37] = o), (r[38] = a));
    let l;
    (r[39] === o ? (l = r[40]) : ((l = o.formatMessage(he.search)), (r[39] = o), (r[40] = l)),
      r[41] !== s || r[42] !== a || r[43] !== l
        ? ((L = (0, $.jsx)(Ce, {
            id: `saved-password-search`,
            autoFocus: !1,
            inputRole: `searchbox`,
            label: a,
            placeholder: l,
            searchQuery: s,
            onSearchQueryChange: c,
          })),
          (r[41] = s),
          (r[42] = a),
          (r[43] = l),
          (r[44] = L))
        : (L = r[44]),
      r[45] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((R = (0, $.jsx)(Ne, {})), (r[45] = R))
        : (R = r[45]),
      (A = Ee));
    let d =
        e != null && !v
          ? (0, $.jsx)(H, {
              id: `restricted.passwords.count`,
              defaultMessage: `Saved passwords ({count})`,
              description: `Heading showing the total number of saved website passwords after all pages have loaded`,
              values: { count: e.length },
            })
          : (0, $.jsx)(H, {
              id: `restricted.passwords.saved`,
              defaultMessage: `Saved passwords`,
              description: `Heading above the list of saved website passwords`,
            }),
      f = g || T,
      p;
    r[46] !== b || r[47] !== O
      ? ((p = () => {
          (O(), b());
        }),
        (r[46] = b),
        (r[47] = O),
        (r[48] = p))
      : (p = r[48]);
    let y;
    r[49] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, $.jsx)(H, {
          id: `restricted.passwords.refresh`,
          defaultMessage: `Refresh`,
          description: `Reload the saved password list without using or saving a password`,
        })),
        (r[49] = y))
      : (y = r[49]);
    let x;
    (r[50] !== f || r[51] !== p
      ? ((x = (0, $.jsx)(E, { color: `secondary`, size: `toolbar`, disabled: f, onClick: p, children: y })),
        (r[50] = f),
        (r[51] = p),
        (r[52] = x))
      : (x = r[52]),
      r[53] !== d || r[54] !== x
        ? ((P = (0, $.jsx)(Ee.Header, { title: d, actions: x })), (r[53] = d), (r[54] = x), (r[55] = P))
        : (P = r[55]),
      (k = Ee.Content),
      r[56] !== _ || r[57] !== D
        ? ((z =
            _ || D
              ? (0, $.jsx)(re, {
                  type: `error`,
                  variant: `callout`,
                  role: `alert`,
                  content: (0, $.jsx)(H, {
                    id: `restricted.passwords.error`,
                    defaultMessage: `We couldn’t confirm the latest saved passwords. Refresh to check.`,
                    description: `An uncertain list or deletion result; refresh reconciles server state without retrying the deletion`,
                  }),
                })
              : null),
          (r[56] = _),
          (r[57] = D),
          (r[58] = z))
        : (z = r[58]),
      r[59] === g
        ? (B = r[60])
        : ((B = g
            ? (0, $.jsxs)(`div`, {
                role: `status`,
                className: `flex items-center gap-2 text-sm text-secondary`,
                children: [
                  (0, $.jsx)(t, {}),
                  (0, $.jsx)(H, {
                    id: `restricted.passwords.loading`,
                    defaultMessage: `Loading saved passwords…`,
                    description: `Status while loading or refreshing saved passwords`,
                  }),
                ],
              })
            : null),
          (r[59] = g),
          (r[60] = B)),
      (V =
        !h && !_ && i?.length === 0
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: M
                ? (0, $.jsx)(H, {
                    id: `restricted.passwords.noMatches`,
                    defaultMessage: `No matching passwords`,
                    description: `No loaded saved passwords match the search`,
                  })
                : (0, $.jsx)(H, {
                    id: `restricted.passwords.empty`,
                    defaultMessage: `No saved passwords`,
                    description: `The user has not saved any website passwords`,
                  }),
            })
          : null),
      (U =
        i != null && i.length > 0
          ? (0, $.jsx)(`div`, {
              "data-dd-privacy": `mask`,
              children: (0, $.jsx)(n, {
                children: i.map((e) =>
                  (0, $.jsx)(
                    N,
                    {
                      edgeRounding: `surface`,
                      label: new URL(e.origin).hostname,
                      description: e.account_label,
                      onClick: () => u(e),
                      actions: (0, $.jsx)(ie, {
                        label: o.formatMessage(
                          {
                            id: `restricted.passwords.details`,
                            defaultMessage: `View password details for {site}, {account}`,
                            description: `Accessible label for opening a saved password's details, identified by website and masked account`,
                          },
                          { site: e.origin, account: e.account_label },
                        ),
                        "aria-haspopup": `dialog`,
                        size: `xs`,
                        onClick: () => u(e),
                      }),
                    },
                    e.credential_id,
                  ),
                ),
              }),
            })
          : null),
      (r[12] = m?.pages),
      (r[13] = v),
      (r[14] = o),
      (r[15] = _),
      (r[16] = g),
      (r[17] = h),
      (r[18] = T),
      (r[19] = b),
      (r[20] = D),
      (r[21] = O),
      (r[22] = s),
      (r[23] = k),
      (r[24] = A),
      (r[25] = j),
      (r[26] = M),
      (r[27] = P),
      (r[28] = F),
      (r[29] = I),
      (r[30] = L),
      (r[31] = R),
      (r[32] = z),
      (r[33] = B),
      (r[34] = V),
      (r[35] = U));
  } else
    ((k = r[23]),
      (A = r[24]),
      (j = r[25]),
      (M = r[26]),
      (P = r[27]),
      (F = r[28]),
      (I = r[29]),
      (L = r[30]),
      (R = r[31]),
      (z = r[32]),
      (B = r[33]),
      (V = r[34]),
      (U = r[35]));
  let W;
  r[61] !== k || r[62] !== z || r[63] !== B || r[64] !== V || r[65] !== U
    ? ((W = (0, $.jsxs)(k, { children: [z, B, V, U] })),
      (r[61] = k),
      (r[62] = z),
      (r[63] = B),
      (r[64] = V),
      (r[65] = U),
      (r[66] = W))
    : (W = r[66]);
  let G;
  r[67] !== y || r[68] !== v || r[69] !== g || r[70] !== T || r[71] !== M
    ? ((G = v
        ? (0, $.jsxs)(Ee.Footer, {
            children: [
              M
                ? (0, $.jsx)(H, {
                    id: `restricted.passwords.searchMore`,
                    defaultMessage: `Load more passwords to search the rest`,
                    description: `Explains that search applies to loaded passwords while more pages are available`,
                  })
                : null,
              (0, $.jsx)(E, {
                color: `secondary`,
                size: `toolbar`,
                disabled: g || T,
                onClick: () => void y(),
                children: (0, $.jsx)(H, {
                  id: `restricted.passwords.more`,
                  defaultMessage: `Load more`,
                  description: `Load the next page of saved passwords`,
                }),
              }),
            ],
          })
        : null),
      (r[67] = y),
      (r[68] = v),
      (r[69] = g),
      (r[70] = T),
      (r[71] = M),
      (r[72] = G))
    : (G = r[72]);
  let K;
  r[73] !== A || r[74] !== P || r[75] !== W || r[76] !== G
    ? ((K = (0, $.jsxs)(A, { children: [P, W, G] })),
      (r[73] = A),
      (r[74] = P),
      (r[75] = W),
      (r[76] = G),
      (r[77] = K))
    : (K = r[77]);
  let q;
  r[78] !== d || r[79] !== l
    ? ((q =
        l != null && d == null
          ? (0, $.jsx)(Re, { password: l, onClose: () => u(void 0), onRemove: () => f(l) })
          : null),
      (r[78] = d),
      (r[79] = l),
      (r[80] = q))
    : (q = r[80]);
  let J;
  r[81] !== T || r[82] !== w || r[83] !== d
    ? ((J =
        d == null
          ? null
          : (0, $.jsx)(ze, {
              password: d,
              isPending: T,
              onClose: () => f(void 0),
              onConfirm: () => {
                T || w(d.credential_id);
              },
            })),
      (r[81] = T),
      (r[82] = w),
      (r[83] = d),
      (r[84] = J))
    : (J = r[84]);
  let Y;
  return (
    r[85] !== j ||
    r[86] !== F ||
    r[87] !== I ||
    r[88] !== L ||
    r[89] !== R ||
    r[90] !== K ||
    r[91] !== q ||
    r[92] !== J
      ? ((Y = (0, $.jsxs)(j, { className: F, title: I, stickyControls: L, children: [R, K, q, J] })),
        (r[85] = j),
        (r[86] = F),
        (r[87] = I),
        (r[88] = L),
        (r[89] = R),
        (r[90] = K),
        (r[91] = q),
        (r[92] = J),
        (r[93] = Y))
      : (Y = r[93]),
    Y
  );
}
function Je(e) {
  return e.items;
}
var Ye, Xe, $;
function Ze() {
  return (Ze = e(() => {
    ((Ye = g()),
      L(),
      K(),
      O(),
      (Xe = i()),
      T(),
      Te(),
      we(),
      q(),
      D(),
      b(),
      ye(),
      k(),
      ve(),
      Le(),
      _e(),
      G(),
      A(),
      Ve(),
      ce(),
      Ge(),
      ($ = u()));
  }))();
}
Ze();
export { Ke as PasswordsSettings };
//# sourceMappingURL=settings-4c3b679da3a6.js.map
