import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Cit as r,
  FBt as i,
  Htt as a,
  LNt as o,
  NSt as s,
  PBt as c,
  Qst as l,
  Rrt as u,
  USt as ee,
  Utt as te,
  XOt as d,
  Yst as f,
  ZSt as p,
  gCt as m,
  iCt as h,
  mCt as g,
  nCt as _,
  tkt as ne,
  vst as v,
  yit as y,
  yst as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $An as x,
  $w as S,
  Byn as C,
  JAn as w,
  JRt as re,
  KAn as ie,
  KBr as T,
  KP as ae,
  Qw as oe,
  SRn as se,
  XAn as ce,
  Xw as E,
  YAn as le,
  YRt as D,
  ZAn as ue,
  Zw as de,
  ajn as O,
  bRn as k,
  eT as A,
  ejn as j,
  ijn as M,
  lBr as N,
  ljn as P,
  nT as F,
  njn as I,
  ojn as L,
  qP as fe,
  rjn as pe,
  sjn as R,
  tT as z,
  uBr as B,
  xMr as me,
  yMr as V,
  zyn as H,
} from "./app-initial-ad16eaadf81f.js";
import { rn as U, tn as W } from "./app-primary-3e00728c2a4c.js";
import {
  a as G,
  c as he,
  i as K,
  l as q,
  n as J,
  t as ge,
} from "./codex-mobile-setup-dialog-94743be48736.js";
function _e(e, t) {
  if (e != null) return t == null ? e : e.filter((e) => e.clientId !== t);
}
function ve(e, t) {
  return e?.some((e) => !t.has(e.clientId)) === !0;
}
function Y(e, t) {
  return e == null || !ve(e, t) ? null : t.size === 0 && e.length === 1 ? `connected` : `dismiss`;
}
function X() {
  return (X = e(() => {}))();
}
function Z({ existingClientIds: e, hostId: t, localRemoteControlClientId: n, waiting: r }) {
  return JSON.stringify({
    existingClientIds: e == null ? null : Array.from(e).sort(),
    hostId: t,
    localRemoteControlClientId: n,
    waiting: r,
  });
}
var ye, be, xe, Se, Ce;
function we() {
  return (we = e(() => {
    (p(),
      I(),
      n(),
      C(),
      N(),
      x(),
      (ye = 3e4),
      (be = m(l, ({ get: e, scope: t }) => {
        let n = H(e, `local_remote_control_environment_id`) ?? null,
          r = !e(B, `2055603567`);
        return {
          queryKey: [`remote-control-clients`, n, r],
          queryFn: () => j(t, n, { includeBrowserClients: r }),
          staleTime: ye,
        };
      })),
      (xe = g(l, (e, { get: t, scope: n }) => {
        let r = t(M, e),
          i = r?.environmentId;
        return {
          enabled: i != null,
          queryKey: [`remote-control-clients`, `app-server`, e, r?.installationId],
          queryFn: () => (i == null ? Promise.resolve([]) : j(n, i, { appServerHostId: e })),
          staleTime: ye,
        };
      })),
      (Se = g(l, (e, { get: t, scope: n }) => {
        let r = H(t, `local_remote_control_environment_id`) ?? null,
          i = !t(B, `2055603567`);
        return {
          enabled: e,
          queryKey: [`remote-control-clients`, r, i],
          queryFn: () => j(n, r, { includeBrowserClients: i }),
          refetchInterval: e ? 1e3 : !1,
          staleTime: 0,
        };
      })),
      (Ce = g(
        l,
        (
          { existingClientIds: e, hostId: t, localRemoteControlClientId: n, waiting: r },
          { get: i, queryClient: a, scope: o },
        ) => {
          let s = null,
            c = null,
            l = !i(B, `2055603567`);
          if (r && t == null) s = H(i, `local_remote_control_environment_id`) ?? null;
          else if (r) {
            let e = i(M, t);
            ((s = e?.environmentId), (c = e?.installationId));
          }
          let u = [
            `remote-control-clients`,
            `waiting-for-added`,
            t,
            l,
            t == null ? s : c,
            e == null ? null : Array.from(e).sort(),
            n,
          ];
          return {
            enabled: r && e != null && (t == null || s != null),
            gcTime: 0,
            queryKey: u,
            queryFn: async () => {
              let r = a.getQueryData(u);
              if (r != null || e == null) return r ?? null;
              let i = await j(o, s ?? null, { appServerHostId: t ?? void 0, includeBrowserClients: l });
              return (
                t != null && a.setQueryData([`remote-control-clients`, `app-server`, t, c], i),
                Y(_e(i, n), e)
              );
            },
            refetchInterval: (e) => (r && e.state.data == null ? 1e3 : !1),
            staleTime: 0,
          };
        },
        { key: Z },
      )));
  }))();
}
async function Te(e, t, n) {
  if (!n) return Ee(e, t, !1);
  O(e, t, !1);
  let r = L(e, t, { ignoreCurrentError: !0 });
  try {
    let n = Ee(e, t, !0);
    return await Promise.race([r, n.then(() => r)]);
  } catch (n) {
    throw (O(e, t, !0), n);
  }
}
async function Ee(e, t, n) {
  return t === `local`
    ? (await y(`set-local-remote-control-enabled`, { params: { enabled: n } }), A(e, n, { force: !0 }))
    : F(e, t, n);
}
function De() {
  return (De = e(() => {
    (z(), I(), T(), r(), S());
  }))();
}
function Oe({ isMfaSetupRequiredError: e, mfaSetupRequired: t, remoteControlStatus: n }) {
  return Me(n) || e ? `initial` : t ? `mfa-required` : void 0;
}
function ke({
  initialRemoteControlStatus: e,
  isMfaSetupRequiredError: t,
  mfaSetupRequired: n,
  remoteControlStatus: r,
  setupStepDebugOverride: i,
}) {
  return t || !!n || Me(r) || Me(e) || i !== `auto`;
}
function Ae({ remoteControlHostEnabled: e, hasEnrolledRemoteControlClient: t }) {
  return e ? (t ? `connected` : `waiting`) : `initial`;
}
function je(e) {
  return e.some((e) => e instanceof R);
}
function Me(e) {
  switch (e) {
    case `disabled`:
    case `errored`:
      return !0;
    case `connecting`:
    case `connected`:
      return !1;
  }
}
function Ne() {
  return (Ne = e(() => {
    P();
  }))();
}
function Pe(e) {
  let n = (0, Le.c)(76),
    { initialStep: r, onClose: i, variant: o } = e,
    s = t(l),
    c = ee(),
    u = (0, Q.useRef)(null),
    d = _(pe, f),
    p = h(he) ?? `auto`,
    m = h(ie),
    [g, ne] = (0, Q.useState)(r ?? null),
    [v, y] = (0, Q.useState)(null),
    [x] = fe(`local_remote_control_client_id`),
    S;
  n[0] !== d || n[1] !== g || n[2] !== m.data
    ? ((S = g ?? Ae({ remoteControlHostEnabled: d, hasEnrolledRemoteControlClient: m.data })),
      (n[0] = d),
      (n[1] = g),
      (n[2] = m.data),
      (n[3] = S))
    : (S = n[3]);
  let C = S,
    w = _(Se, C === `waiting`),
    re = _e(w.data, x),
    T = h(ue),
    ae = C === `waiting` && (v == null ? re?.length : ve(re, v)) ? `connected` : C,
    se = h(ce),
    E = p === `auto` ? (C === `mfa-required` && se.data ? `allow-host` : ae) : p,
    D;
  n[4] !== E || n[5] !== s || n[6] !== o
    ? ((D = (e) => {
        me(s, a, { action: e, step: E, surface: o });
      }),
      (n[4] = E),
      (n[5] = s),
      (n[6] = o),
      (n[7] = D))
    : (D = n[7]);
  let O = D,
    k,
    A;
  (n[8] !== E || n[9] !== s || n[10] !== o
    ? ((k = () => {
        let e = `${o}:${E}`;
        u.current !== e && ((u.current = e), me(s, te, { step: E, surface: o }));
      }),
      (A = [E, s, o]),
      (n[8] = E),
      (n[9] = s),
      (n[10] = o),
      (n[11] = k),
      (n[12] = A))
    : ((k = n[11]), (A = n[12])),
    (0, Q.useEffect)(k, A));
  let j;
  n[13] === s ? (j = n[14]) : ((j = () => le(s)), (n[13] = s), (n[14] = j));
  let M;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => {
        ne(e ? `mfa-required` : `allow-host`);
      }),
      (n[15] = M))
    : (M = n[15]);
  let N;
  n[16] === j ? (N = n[17]) : ((N = { mutationFn: j, onSuccess: M }), (n[16] = j), (n[17] = N));
  let P = b(N),
    F;
  n[18] === s
    ? (F = n[19])
    : ((F = async () => {
        await Te(s, f, !0);
        let e = s.query.snapshot(be);
        return (await e.invalidate({ exact: !0, refetchType: `none` }), e.fetch());
      }),
      (n[18] = s),
      (n[19] = F));
  let I;
  n[20] === x
    ? (I = n[21])
    : ((I = (e) => {
        (y(new Set(_e(e, x)?.map(Fe))), ne(`waiting`));
      }),
      (n[20] = x),
      (n[21] = I));
  let L;
  n[22] === s
    ? (L = n[23])
    : ((L = (e) => {
        oe(s, e);
      }),
      (n[22] = s),
      (n[23] = L));
  let R;
  n[24] !== L || n[25] !== F || n[26] !== I
    ? ((R = { mutationFn: F, onSuccess: I, onError: L }), (n[24] = L), (n[25] = F), (n[26] = I), (n[27] = R))
    : (R = n[27]);
  let z = b(R),
    B;
  n[28] !== z || n[29] !== O
    ? ((B = () => {
        (O(`allow_host`), z.mutate());
      }),
      (n[28] = z),
      (n[29] = O),
      (n[30] = B))
    : (B = n[30]);
  let V = B,
    H;
  n[31] !== z.error || n[32] !== P.error || n[33] !== T.error || n[34] !== w.error || n[35] !== m.error
    ? ((H = je([m.error, w.error, T.error, P.error, z.error])),
      (n[31] = z.error),
      (n[32] = P.error),
      (n[33] = T.error),
      (n[34] = w.error),
      (n[35] = m.error),
      (n[36] = H))
    : (H = n[36]);
  let U = H,
    W,
    G;
  (n[37] !== c || n[38] !== U
    ? ((W = () => {
        U && c(`/login`, { replace: !0 });
      }),
      (G = [c, U]),
      (n[37] = c),
      (n[38] = U),
      (n[39] = W),
      (n[40] = G))
    : ((W = n[39]), (G = n[40])),
    (0, Q.useEffect)(W, G));
  let K = P.isPending || z.isPending || (T.data === `required` && se.isLoading),
    q;
  n[41] !== z.error || n[42] !== z.isError
    ? ((q = z.isError && !de(z.error)), (n[41] = z.error), (n[42] = z.isError), (n[43] = q))
    : (q = n[43]);
  let J = q;
  if ((p === `auto` && g == null && d && m.isLoading) || U) return null;
  if (o === `dialog`) {
    let e;
    n[44] === i
      ? (e = n[45])
      : ((e = (e) => {
          e || i();
        }),
        (n[44] = i),
        (n[45] = e));
    let t;
    n[46] !== i || n[47] !== O
      ? ((t = () => {
          (O(`skip`), i());
        }),
        (n[46] = i),
        (n[47] = O),
        (n[48] = t))
      : (t = n[48]);
    let r;
    n[49] !== P || n[50] !== O
      ? ((r = () => {
          (O(`start_setup`), P.mutate());
        }),
        (n[49] = P),
        (n[50] = O),
        (n[51] = r))
      : (r = n[51]);
    let a;
    return (
      n[52] !== V ||
      n[53] !== P.isError ||
      n[54] !== E ||
      n[55] !== K ||
      n[56] !== J ||
      n[57] !== e ||
      n[58] !== t ||
      n[59] !== r
        ? ((a = (0, $.jsx)(ge, {
            open: !0,
            showAllowHostError: J,
            showStartSetupError: P.isError,
            setupInProgress: K,
            step: E,
            onAllowHost: V,
            onOpenChange: e,
            onSkip: t,
            onStartSetup: r,
          })),
          (n[52] = V),
          (n[53] = P.isError),
          (n[54] = E),
          (n[55] = K),
          (n[56] = J),
          (n[57] = e),
          (n[58] = t),
          (n[59] = r),
          (n[60] = a))
        : (a = n[60]),
      a
    );
  }
  let Y;
  n[61] !== i || n[62] !== O
    ? ((Y = () => {
        (O(`skip`), i());
      }),
      (n[61] = i),
      (n[62] = O),
      (n[63] = Y))
    : (Y = n[63]);
  let X;
  n[64] !== P || n[65] !== O
    ? ((X = () => {
        (O(`start_setup`), P.mutate());
      }),
      (n[64] = P),
      (n[65] = O),
      (n[66] = X))
    : (X = n[66]);
  let Z;
  return (
    n[67] !== V ||
    n[68] !== P.isError ||
    n[69] !== i ||
    n[70] !== E ||
    n[71] !== K ||
    n[72] !== J ||
    n[73] !== Y ||
    n[74] !== X
      ? ((Z = (0, $.jsx)(Ie, {
          showAllowHostError: J,
          showStartSetupError: P.isError,
          setupInProgress: K,
          step: E,
          onAllowHost: V,
          onFinishSetup: i,
          onSkip: Y,
          onStartSetup: X,
        })),
        (n[67] = V),
        (n[68] = P.isError),
        (n[69] = i),
        (n[70] = E),
        (n[71] = K),
        (n[72] = J),
        (n[73] = Y),
        (n[74] = X),
        (n[75] = Z))
      : (Z = n[75]),
    Z
  );
}
function Fe(e) {
  return e.clientId;
}
function Ie(e) {
  let n = (0, Le.c)(27),
    {
      onAllowHost: r,
      onFinishSetup: i,
      onSkip: o,
      onStartSetup: s,
      setupInProgress: c,
      showAllowHostError: u,
      showStartSetupError: te,
      step: d,
    } = e,
    f = t(l),
    p = ee(),
    m;
  n[0] !== f || n[1] !== d
    ? ((m = (e) => {
        me(f, a, { action: e, step: d, surface: `page` });
      }),
      (n[0] = f),
      (n[1] = d),
      (n[2] = m))
    : (m = n[2]);
  let h = m,
    g;
  n[3] === d
    ? (g = n[4])
    : ((g =
        d === `allow-host` || d === `mfa-required` || d === `waiting`
          ? (0, $.jsx)(re.Header, {
              children: (0, $.jsx)(W, {
                start: (0, $.jsx)(ne, {
                  id: `codexMobile.setupPage.remoteTitle`,
                  defaultMessage: `Set up Remote`,
                  description: `Toolbar title shown during Remote setup`,
                }),
              }),
            })
          : null),
      (n[3] = d),
      (n[4] = g));
  let _;
  n[5] === h
    ? (_ = n[6])
    : ((_ = (e) => {
        (h(`continue_on_chatgpt`),
          se({
            event: e,
            href: `https://chatgpt.com/#settings/Security?mfa_source=codex_remote`,
            initiator: `open_in_browser_bridge`,
          }));
      }),
      (n[5] = h),
      (n[6] = _));
  let v;
  n[7] !== i || n[8] !== h
    ? ((v = () => {
        (h(`finish_setup`), i());
      }),
      (n[7] = i),
      (n[8] = h),
      (n[9] = v))
    : (v = n[9]);
  let y;
  n[10] !== p || n[11] !== h
    ? ((y = () => {
        (h(`manage_connections`), p(`/settings/connections`));
      }),
      (n[10] = p),
      (n[11] = h),
      (n[12] = y))
    : (y = n[12]);
  let b;
  n[13] !== r ||
  n[14] !== o ||
  n[15] !== s ||
  n[16] !== c ||
  n[17] !== u ||
  n[18] !== te ||
  n[19] !== d ||
  n[20] !== _ ||
  n[21] !== v ||
  n[22] !== y
    ? ((b = (0, $.jsx)(K, {
        onAllowHost: r,
        onContinueOnChatGPT: _,
        onFinishSetup: v,
        onManageConnections: y,
        onSkip: o,
        onStartSetup: s,
        setupInProgress: c,
        showAllowHostError: u,
        showStartSetupError: te,
        step: d,
        variant: `page`,
      })),
      (n[13] = r),
      (n[14] = o),
      (n[15] = s),
      (n[16] = c),
      (n[17] = u),
      (n[18] = te),
      (n[19] = d),
      (n[20] = _),
      (n[21] = v),
      (n[22] = y),
      (n[23] = b))
    : (b = n[23]);
  let x;
  return (
    n[24] !== g || n[25] !== b
      ? ((x = (0, $.jsxs)($.Fragment, { children: [g, b] })), (n[24] = g), (n[25] = b), (n[26] = x))
      : (x = n[26]),
    x
  );
}
var Le, Q, $;
function Re() {
  return (Re = e(() => {
    ((Le = c()),
      u(),
      v(),
      p(),
      (Q = i()),
      d(),
      s(),
      I(),
      D(),
      k(),
      V(),
      we(),
      E(),
      De(),
      n(),
      T(),
      ae(),
      U(),
      q(),
      J(),
      w(),
      Ne(),
      G(),
      ($ = o()));
  }))();
}
export {
  ke as a,
  xe as c,
  Ce as d,
  _e as f,
  Ne as i,
  we as l,
  Re as n,
  De as o,
  X as p,
  Oe as r,
  Te as s,
  Pe as t,
  be as u,
};
//# sourceMappingURL=codex-mobile-setup-flow-b64dce661365.js.map
