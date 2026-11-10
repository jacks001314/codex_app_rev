import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BY as r,
  DB as i,
  FBt as a,
  HO as o,
  IO as ee,
  JO as s,
  LNt as c,
  LO as te,
  OB as l,
  PBt as u,
  Qst as ne,
  RFt as d,
  RO as re,
  Vrt as f,
  WO as ie,
  XOt as p,
  Y3 as ae,
  Z3 as m,
  ZSt as h,
  nCt as oe,
  okt as se,
  qO as ce,
  qrt as le,
  sct as g,
  tkt as _,
  tpt as ue,
  zFt as de,
  zO as fe,
  zY as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CRn as pe,
  FBr as me,
  FSt as he,
  IBr as y,
  PSt as b,
  bRn as ge,
} from "./app-initial-ad16eaadf81f.js";
import { n as _e, r as x, t as ve } from "./chatgpt-desktop-auth-url-3f7398fa25bc.js";
import {
  a as S,
  i as C,
  n as w,
  o as ye,
  r as be,
  t as xe,
} from "./onboarding-login-content-f7bde5c8a665.js";
function T(e) {
  let t = (0, Se.c)(5),
    { hostId: n, open: r, onOpenChange: i, onAuthenticated: a } = e;
  if (!r || n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, O.jsx)(O.Fragment, {})), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  return (
    t[1] !== n || t[2] !== a || t[3] !== i
      ? ((o = (0, O.jsx)(E, { hostId: n, onOpenChange: i, onAuthenticated: a }, n)),
        (t[1] = n),
        (t[2] = a),
        (t[3] = i),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function E(e) {
  let n = (0, Se.c)(83),
    { hostId: a, onOpenChange: o, onAuthenticated: s } = e,
    c = t(ne),
    l = se(),
    u = oe(ye, a),
    d = u.status === `ready` && u.chatgpt,
    f = u.status === `ready` && u.api,
    [p, m] = (0, D.useState)(null),
    [h, g] = (0, D.useState)(``),
    [v, y] = (0, D.useState)(!1),
    [b, ge] = (0, D.useState)(null),
    x = b != null,
    S = p != null,
    C,
    w;
  (n[0] === p
    ? ((C = n[1]), (w = n[2]))
    : ((C = () => () => p?.abort()), (w = [p]), (n[0] = p), (n[1] = C), (n[2] = w)),
    (0, D.useEffect)(C, w));
  let T, E;
  (n[3] === b
    ? ((T = n[4]), (E = n[5]))
    : ((T = () => () => b?.abort()), (E = [b]), (n[3] = b), (n[4] = T), (n[5] = E)),
    (0, D.useEffect)(T, E));
  let k, A;
  (n[6] !== p || n[7] !== d
    ? ((k = () => {
        d || p?.abort();
      }),
      (A = [p, d]),
      (n[6] = p),
      (n[7] = d),
      (n[8] = k),
      (n[9] = A))
    : ((k = n[8]), (A = n[9])),
    (0, D.useEffect)(k, A));
  let j, M;
  (n[10] !== f || n[11] !== b
    ? ((j = () => {
        f || b?.abort();
      }),
      (M = [f, b]),
      (n[10] = f),
      (n[11] = b),
      (n[12] = j),
      (n[13] = M))
    : ((j = n[12]), (M = n[13])),
    (0, D.useEffect)(j, M));
  let N;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => {
        (m(null), g(``), y(!1), ge(null));
      }),
      (n[14] = N))
    : (N = n[14]);
  let Ce = N,
    we;
  n[15] !== p || n[16] !== b || n[17] !== o
    ? ((we = (e) => {
        let { abortPendingLogin: t } = e;
        (t && (p?.abort(), b?.abort()), Ce(), o(!1));
      }),
      (n[15] = p),
      (n[16] = b),
      (n[17] = o),
      (n[18] = we))
    : (we = n[18]);
  let P = we,
    F;
  n[19] !== l || n[20] !== c
    ? ((F = (e) => {
        c.get(le).warning(
          l.formatMessage(
            {
              id: `settings.remoteConnections.auth.error`,
              defaultMessage: `Sign-in failed: {message}`,
              description: `Toast shown when remote connection authentication fails`,
            },
            { message: ue(e) },
          ),
        );
      }),
      (n[19] = l),
      (n[20] = c),
      (n[21] = F))
    : (F = n[21]);
  let I = F,
    L;
  n[22] !== p ||
  n[23] !== P ||
  n[24] !== a ||
  n[25] !== S ||
  n[26] !== u.chatgpt ||
  n[27] !== u.status ||
  n[28] !== s ||
  n[29] !== c ||
  n[30] !== I
    ? ((L = async () => {
        if (S) {
          (p?.abort(), m(null));
          return;
        }
        if (u.status !== `ready` || !u.chatgpt) return;
        let e = new AbortController();
        (m(e),
          await (async () => {
            try {
              let { authUrl: t, completion: n } = await he({ scope: c, hostId: a, signal: e.signal });
              e.signal.aborted ||
                pe({
                  href: ve({
                    authUrl: t,
                    codexAppVersion: _e(c),
                    useDesktopAuth: !1,
                    useStreamlinedLoginUx: !1,
                  }),
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                });
              let r = await n;
              if (e.signal.aborted) return;
              if (!r.success) {
                (de.warning(`[remote-connections/auth] chatgpt_sign_in_failed`, {
                  safe: {},
                  sensitive: { hostId: a, error: r.error ?? `Unknown error` },
                }),
                  I(r.error ?? `Unknown error`));
                return;
              }
              (s?.(a), P({ abortPendingLogin: !1 }));
            } catch (e) {
              let t = e;
              if (t?.name === `AbortError`) return;
              (de.warning(`[remote-connections/auth] chatgpt_sign_in_failed`, {
                safe: {},
                sensitive: { error: t, hostId: a },
              }),
                I(t));
            }
          })().finally(() => {
            m((t) => (t === e ? null : t));
          }));
      }),
      (n[22] = p),
      (n[23] = P),
      (n[24] = a),
      (n[25] = S),
      (n[26] = u.chatgpt),
      (n[27] = u.status),
      (n[28] = s),
      (n[29] = c),
      (n[30] = I),
      (n[31] = L))
    : (L = n[31]);
  let Te = L,
    R;
  n[32] !== h ||
  n[33] !== P ||
  n[34] !== a ||
  n[35] !== x ||
  n[36] !== u.api ||
  n[37] !== u.status ||
  n[38] !== s ||
  n[39] !== c ||
  n[40] !== I
    ? ((R = async () => {
        let e = h.trim();
        if (!e || x || u.status !== `ready` || !u.api) return;
        let t = new AbortController();
        (ge(t),
          await (async () => {
            try {
              if ((await me(c, a).loginWithApiKey(e), t.signal.aborted)) return;
              (s?.(a), P({ abortPendingLogin: !1 }));
            } catch (e) {
              let n = e;
              if (t.signal.aborted) return;
              (de.warning(`[remote-connections/auth] api_key_sign_in_failed`, {
                safe: {},
                sensitive: { error: n, hostId: a },
              }),
                I(n));
            }
          })().finally(() => {
            ge((e) => (e === t ? null : e));
          }));
      }),
      (n[32] = h),
      (n[33] = P),
      (n[34] = a),
      (n[35] = x),
      (n[36] = u.api),
      (n[37] = u.status),
      (n[38] = s),
      (n[39] = c),
      (n[40] = I),
      (n[41] = R))
    : (R = n[41]);
  let Ee = R,
    z;
  n[42] !== P || n[43] !== o
    ? ((z = (e) => {
        if (!e) {
          P({ abortPendingLogin: !0 });
          return;
        }
        o(!0);
      }),
      (n[42] = P),
      (n[43] = o),
      (n[44] = z))
    : (z = n[44]);
  let B;
  n[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = { "aria-describedby": void 0 }), (n[45] = B))
    : (B = n[45]);
  let V;
  n[46] === l
    ? (V = n[47])
    : ((V = l.formatMessage({
        id: `settings.remoteConnections.auth.title`,
        defaultMessage: `Login required`,
        description: `Title for the remote connection login dialog`,
      })),
      (n[46] = l),
      (n[47] = V));
  let H;
  n[48] === V
    ? (H = n[49])
    : ((H = (0, O.jsx)(ce, { className: `sr-only`, children: V })), (n[48] = V), (n[49] = H));
  let U;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, O.jsx)(re, {
        className: `min-w-0 flex-1`,
        title: (0, O.jsx)(_, {
          id: `settings.remoteConnections.auth.title`,
          defaultMessage: `Login required`,
          description: `Title for the remote connection login dialog`,
        }),
        subtitle: (0, O.jsx)(_, {
          id: `settings.remoteConnections.auth.description`,
          defaultMessage: `Authenticate the Codex CLI on this remote machine to continue`,
          description: `Description for the remote connection login dialog`,
        }),
      })),
      (n[50] = U))
    : (U = n[50]);
  let W;
  n[51] === l
    ? (W = n[52])
    : ((W = l.formatMessage({
        id: `settings.remoteConnections.auth.closeIcon`,
        defaultMessage: `Close`,
        description: `Accessible label for the remote connection login dialog close button`,
      })),
      (n[51] = l),
      (n[52] = W));
  let G;
  n[53] === P ? (G = n[54]) : ((G = () => P({ abortPendingLogin: !0 })), (n[53] = P), (n[54] = G));
  let K;
  n[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, O.jsx)(i, { "aria-hidden": !1, asset: r })), (n[55] = K))
    : (K = n[55]);
  let q;
  n[56] !== W || n[57] !== G
    ? ((q = (0, O.jsx)(fe, {
        children: (0, O.jsxs)(`div`, {
          className: `flex items-start justify-between gap-3`,
          children: [
            U,
            (0, O.jsx)(ae, {
              "aria-label": W,
              className: `-me-1 -mt-1 shrink-0`,
              color: `ghost`,
              size: `icon`,
              onClick: G,
              children: K,
            }),
          ],
        }),
      })),
      (n[56] = W),
      (n[57] = G),
      (n[58] = q))
    : (q = n[58]);
  let J;
  n[59] !== h ||
  n[60] !== Ee ||
  n[61] !== Te ||
  n[62] !== a ||
  n[63] !== v ||
  n[64] !== x ||
  n[65] !== S ||
  n[66] !== u.api ||
  n[67] !== u.chatgpt ||
  n[68] !== u.status
    ? ((J = (0, O.jsx)(fe, {
        children: (0, O.jsx)(`div`, {
          className: `flex justify-center pt-2`,
          children:
            u.status !== `ready` || (!u.api && !u.chatgpt)
              ? (0, O.jsx)(be, { hostId: a })
              : (0, O.jsx)(xe, {
                  allowApiKey: u.api,
                  allowChatGpt: u.chatgpt,
                  apiKeyValue: h,
                  isApiKeyEntryVisible: v,
                  isApiKeySignInPending: x,
                  isChatGptSignInPending: S,
                  onApiKeySecondaryAction: () => {
                    (g(``), y(!1));
                  },
                  onApiKeySubmit: Ee,
                  onApiKeyValueChange: g,
                  onChatGptSignIn: Te,
                  onShowApiKeyEntry: () => y(!0),
                  apiKeySecondaryActionLabel: (0, O.jsx)(_, {
                    id: `settings.remoteConnections.auth.back`,
                    defaultMessage: `Back`,
                    description: `Back button in the remote connection login dialog`,
                  }),
                }),
        }),
      })),
      (n[59] = h),
      (n[60] = Ee),
      (n[61] = Te),
      (n[62] = a),
      (n[63] = v),
      (n[64] = x),
      (n[65] = S),
      (n[66] = u.api),
      (n[67] = u.chatgpt),
      (n[68] = u.status),
      (n[69] = J))
    : (J = n[69]);
  let Y;
  n[70] === P ? (Y = n[71]) : ((Y = () => P({ abortPendingLogin: !0 })), (n[70] = P), (n[71] = Y));
  let X;
  n[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, O.jsx)(_, {
        id: `settings.remoteConnections.auth.close`,
        defaultMessage: `Close`,
        description: `Close button for the remote connection login dialog`,
      })),
      (n[72] = X))
    : (X = n[72]);
  let Z;
  n[73] === Y
    ? (Z = n[74])
    : ((Z = (0, O.jsx)(fe, {
        children: (0, O.jsx)(te, {
          children: (0, O.jsx)(ae, { color: `ghost`, type: `button`, onClick: Y, children: X }),
        }),
      })),
      (n[73] = Y),
      (n[74] = Z));
  let Q;
  n[75] !== H || n[76] !== q || n[77] !== J || n[78] !== Z
    ? ((Q = (0, O.jsxs)(ee, { children: [H, q, J, Z] })),
      (n[75] = H),
      (n[76] = q),
      (n[77] = J),
      (n[78] = Z),
      (n[79] = Q))
    : (Q = n[79]);
  let $;
  return (
    n[80] !== z || n[81] !== Q
      ? (($ = (0, O.jsx)(ie, {
          open: !0,
          onOpenChange: z,
          contentProps: B,
          showDialogClose: !1,
          size: `compact`,
          children: Q,
        })),
        (n[80] = z),
        (n[81] = Q),
        (n[82] = $))
      : ($ = n[82]),
    $
  );
}
var Se, D, O;
function k() {
  return (k = e(() => {
    ((Se = u()),
      v(),
      h(),
      g(),
      (D = a()),
      p(),
      y(),
      b(),
      m(),
      s(),
      o(),
      ge(),
      l(),
      f(),
      S(),
      C(),
      w(),
      n(),
      x(),
      d(),
      (O = c()));
  }))();
}
export { k as n, T as t };
//# sourceMappingURL=remote-connection-auth-dialog-389dcd6aec71.js.map
