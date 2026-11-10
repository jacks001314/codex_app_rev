import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  BMt as i,
  Cpn as a,
  F3t as o,
  G3t as s,
  H$t as c,
  HMt as l,
  Hbt as u,
  IXt as d,
  JXt as ee,
  KYt as f,
  Kbt as p,
  M6t as m,
  N3t as h,
  N6t as g,
  O3t as _,
  QXt as v,
  Spn as y,
  U$t as b,
  U3t as x,
  UMt as S,
  Ubt as C,
  VMt as w,
  Vbt as T,
  Wbt as te,
  XYt as ne,
  Ybt as re,
  ZYt as ie,
  Zbt as E,
  _Jt as ae,
  _a as oe,
  a3t as D,
  d3t as se,
  e0t as O,
  e4t as ce,
  eZt as le,
  ga as k,
  hXt as A,
  hYt as j,
  ha as ue,
  hmn as de,
  kmn as M,
  lF as fe,
  mXt as N,
  mYt as P,
  ma as pe,
  o3t as F,
  pJt as I,
  pa as L,
  qbt as R,
  s3t as z,
  uF as B,
  va as V,
  ya as H,
  zMt as U,
  zbt as me,
} from "./app-initial-f094ef01c64d.js";
import { Jw as W, qw as G } from "./app-primary-4c40d73a1074.js";
import {
  a as K,
  d as q,
  i as J,
  n as Y,
  t as he,
  u as ge,
} from "./codex-mobile-setup-dialog-2b571bdc4cdd.js";
function _e(e, t) {
  if (e != null) return t == null ? e : e.filter((e) => e.clientId !== t);
}
function ve(e, t) {
  return e?.some((e) => !t.has(e.clientId)) === !0;
}
function X(e, t) {
  return e == null || !ve(e, t) ? null : t.size === 0 && e.length === 1 ? `connected` : `dismiss`;
}
var Z = e(() => {});
function ye({ existingClientIds: e, hostId: t, localRemoteControlClientId: n, waiting: r }) {
  return JSON.stringify({
    existingClientIds: e == null ? null : Array.from(e).sort(),
    hostId: t,
    localRemoteControlClientId: n,
    waiting: r,
  });
}
var be,
  xe,
  Se,
  Ce,
  we,
  Te = e(() => {
    (_(),
      U(),
      F(),
      A(),
      P(),
      p(),
      Z(),
      (be = 3e4),
      (xe = s(D, ({ get: e, scope: t }) => {
        let n = N(e, `local_remote_control_environment_id`) ?? null,
          r = !e(j, `2055603567`);
        return {
          queryKey: [`remote-control-clients`, n, r],
          queryFn: () => R(t, n, { includeBrowserClients: r }),
          staleTime: be,
        };
      })),
      (Se = x(D, (e, { get: t, scope: n }) => {
        let r = t(w, e),
          i = r?.environmentId;
        return {
          enabled: i != null,
          queryKey: [`remote-control-clients`, `app-server`, e, r?.installationId],
          queryFn: () => (i == null ? Promise.resolve([]) : R(n, i, { appServerHostId: e })),
          staleTime: be,
        };
      })),
      (Ce = x(D, (e, { get: t, scope: n }) => {
        let r = N(t, `local_remote_control_environment_id`) ?? null,
          i = !t(j, `2055603567`);
        return {
          enabled: e,
          queryKey: [`remote-control-clients`, r, i],
          queryFn: () => R(n, r, { includeBrowserClients: i }),
          refetchInterval: e ? 1e3 : !1,
          staleTime: 0,
        };
      })),
      (we = x(
        D,
        (
          { existingClientIds: e, hostId: t, localRemoteControlClientId: n, waiting: r },
          { get: i, queryClient: a, scope: o },
        ) => {
          let s = null,
            c = null,
            l = !i(j, `2055603567`);
          if (r && t == null) s = N(i, `local_remote_control_environment_id`) ?? null;
          else if (r) {
            let e = i(w, t);
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
              let i = await R(o, s ?? null, {
                appServerHostId: t ?? void 0,
                includeBrowserClients: l,
              });
              return (
                t != null && a.setQueryData([`remote-control-clients`, `app-server`, t, c], i),
                X(_e(i, n), e)
              );
            },
            refetchInterval: (e) => (r && e.state.data == null ? 1e3 : !1),
            staleTime: 0,
          };
        },
        { key: ye },
      )));
  });
async function Ee(e, t, n) {
  if (!n) return De(e, t, !1);
  l(e, t, !1);
  let r = S(e, t, { ignoreCurrentError: !0 });
  try {
    let n = De(e, t, !0);
    return await Promise.race([r, n.then(() => r)]);
  } catch (n) {
    throw (l(e, t, !0), n);
  }
}
async function De(e, t, n) {
  return t === `local`
    ? (await I(`set-local-remote-control-enabled`, { params: { enabled: n } }),
      oe(e, n, { force: !0 }))
    : H(e, t, n);
}
var Oe = e(() => {
  (V(), U(), f(), ae(), k());
});
function ke({ isMfaSetupRequiredError: e, mfaSetupRequired: t, remoteControlStatus: n }) {
  return Ne(n) || e ? `initial` : t ? `mfa-required` : void 0;
}
function Ae({
  initialRemoteControlStatus: e,
  isMfaSetupRequiredError: t,
  mfaSetupRequired: n,
  remoteControlStatus: r,
  setupStepDebugOverride: i,
}) {
  return t || !!n || Ne(r) || Ne(e) || i !== `auto`;
}
function je({ remoteControlHostEnabled: e, hasEnrolledRemoteControlClient: t }) {
  return e ? (t ? `connected` : `waiting`) : `initial`;
}
function Me(e) {
  return e.some((e) => e instanceof re);
}
function Ne(e) {
  switch (e) {
    case `disabled`:
    case `errored`:
      return !0;
    case `connecting`:
    case `connected`:
      return !1;
  }
}
var Pe = e(() => {
  E();
});
function Fe(e) {
  let t = (0, Re.c)(76),
    { initialStep: r, onClose: a, variant: s } = e,
    l = n(D),
    d = ee(),
    f = (0, Q.useRef)(null),
    p = h(i, ce),
    m = o(ge) ?? `auto`,
    g = o(me),
    [_, v] = (0, Q.useState)(r ?? null),
    [y, x] = (0, Q.useState)(null),
    [S] = ie(`local_remote_control_client_id`),
    w;
  t[0] !== p || t[1] !== _ || t[2] !== g.data
    ? ((w = _ ?? je({ remoteControlHostEnabled: p, hasEnrolledRemoteControlClient: g.data })),
      (t[0] = p),
      (t[1] = _),
      (t[2] = g.data),
      (t[3] = w))
    : (w = t[3]);
  let T = w,
    ne = h(Ce, T === `waiting`),
    re = _e(ne.data, S),
    E = o(te),
    ae = T === `waiting` && (y == null ? re?.length : ve(re, y)) ? `connected` : T,
    oe = o(C),
    O = m === `auto` ? (T === `mfa-required` && oe.data ? `allow-host` : ae) : m,
    k;
  t[4] !== O || t[5] !== l || t[6] !== s
    ? ((k = (e) => {
        le(l, c, { action: e, step: O, surface: s });
      }),
      (t[4] = O),
      (t[5] = l),
      (t[6] = s),
      (t[7] = k))
    : (k = t[7]);
  let A = k,
    j,
    de;
  (t[8] !== O || t[9] !== l || t[10] !== s
    ? ((j = () => {
        let e = `${s}:${O}`;
        f.current !== e && ((f.current = e), le(l, b, { step: O, surface: s }));
      }),
      (de = [O, l, s]),
      (t[8] = O),
      (t[9] = l),
      (t[10] = s),
      (t[11] = j),
      (t[12] = de))
    : ((j = t[11]), (de = t[12])),
    (0, Q.useEffect)(j, de));
  let M;
  t[13] === l ? (M = t[14]) : ((M = () => u(l)), (t[13] = l), (t[14] = M));
  let fe;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (e) => {
        v(e ? `mfa-required` : `allow-host`);
      }),
      (t[15] = fe))
    : (fe = t[15]);
  let N;
  t[16] === M ? (N = t[17]) : ((N = { mutationFn: M, onSuccess: fe }), (t[16] = M), (t[17] = N));
  let P = se(N),
    F;
  t[18] === l
    ? (F = t[19])
    : ((F = async () => {
        await Ee(l, ce, !0);
        let e = l.query.snapshot(xe);
        return (await e.invalidate({ exact: !0, refetchType: `none` }), e.fetch());
      }),
      (t[18] = l),
      (t[19] = F));
  let I;
  t[20] === S
    ? (I = t[21])
    : ((I = (e) => {
        (x(new Set(_e(e, S)?.map(Ie))), v(`waiting`));
      }),
      (t[20] = S),
      (t[21] = I));
  let L;
  t[22] === l
    ? (L = t[23])
    : ((L = (e) => {
        ue(l, e);
      }),
      (t[22] = l),
      (t[23] = L));
  let R;
  t[24] !== L || t[25] !== F || t[26] !== I
    ? ((R = { mutationFn: F, onSuccess: I, onError: L }),
      (t[24] = L),
      (t[25] = F),
      (t[26] = I),
      (t[27] = R))
    : (R = t[27]);
  let z = se(R),
    B;
  t[28] !== z || t[29] !== A
    ? ((B = () => {
        (A(`allow_host`), z.mutate());
      }),
      (t[28] = z),
      (t[29] = A),
      (t[30] = B))
    : (B = t[30]);
  let V = B,
    H;
  t[31] !== z.error ||
  t[32] !== P.error ||
  t[33] !== E.error ||
  t[34] !== ne.error ||
  t[35] !== g.error
    ? ((H = Me([g.error, ne.error, E.error, P.error, z.error])),
      (t[31] = z.error),
      (t[32] = P.error),
      (t[33] = E.error),
      (t[34] = ne.error),
      (t[35] = g.error),
      (t[36] = H))
    : (H = t[36]);
  let U = H,
    W,
    G;
  (t[37] !== d || t[38] !== U
    ? ((W = () => {
        U && d(`/login`, { replace: !0 });
      }),
      (G = [d, U]),
      (t[37] = d),
      (t[38] = U),
      (t[39] = W),
      (t[40] = G))
    : ((W = t[39]), (G = t[40])),
    (0, Q.useEffect)(W, G));
  let K = P.isPending || z.isPending || (E.data === `required` && oe.isLoading),
    q;
  t[41] !== z.error || t[42] !== z.isError
    ? ((q = z.isError && !pe(z.error)), (t[41] = z.error), (t[42] = z.isError), (t[43] = q))
    : (q = t[43]);
  let J = q;
  if ((m === `auto` && _ == null && p && g.isLoading) || U) return null;
  if (s === `dialog`) {
    let e;
    t[44] === a
      ? (e = t[45])
      : ((e = (e) => {
          e || a();
        }),
        (t[44] = a),
        (t[45] = e));
    let n;
    t[46] !== a || t[47] !== A
      ? ((n = () => {
          (A(`skip`), a());
        }),
        (t[46] = a),
        (t[47] = A),
        (t[48] = n))
      : (n = t[48]);
    let r;
    t[49] !== P || t[50] !== A
      ? ((r = () => {
          (A(`start_setup`), P.mutate());
        }),
        (t[49] = P),
        (t[50] = A),
        (t[51] = r))
      : (r = t[51]);
    let i;
    return (
      t[52] !== V ||
      t[53] !== P.isError ||
      t[54] !== O ||
      t[55] !== K ||
      t[56] !== J ||
      t[57] !== e ||
      t[58] !== n ||
      t[59] !== r
        ? ((i = (0, $.jsx)(he, {
            open: !0,
            showAllowHostError: J,
            showStartSetupError: P.isError,
            setupInProgress: K,
            step: O,
            onAllowHost: V,
            onOpenChange: e,
            onSkip: n,
            onStartSetup: r,
          })),
          (t[52] = V),
          (t[53] = P.isError),
          (t[54] = O),
          (t[55] = K),
          (t[56] = J),
          (t[57] = e),
          (t[58] = n),
          (t[59] = r),
          (t[60] = i))
        : (i = t[60]),
      i
    );
  }
  let Y;
  t[61] !== a || t[62] !== A
    ? ((Y = () => {
        (A(`skip`), a());
      }),
      (t[61] = a),
      (t[62] = A),
      (t[63] = Y))
    : (Y = t[63]);
  let X;
  t[64] !== P || t[65] !== A
    ? ((X = () => {
        (A(`start_setup`), P.mutate());
      }),
      (t[64] = P),
      (t[65] = A),
      (t[66] = X))
    : (X = t[66]);
  let Z;
  return (
    t[67] !== V ||
    t[68] !== P.isError ||
    t[69] !== a ||
    t[70] !== O ||
    t[71] !== K ||
    t[72] !== J ||
    t[73] !== Y ||
    t[74] !== X
      ? ((Z = (0, $.jsx)(Le, {
          showAllowHostError: J,
          showStartSetupError: P.isError,
          setupInProgress: K,
          step: O,
          onAllowHost: V,
          onFinishSetup: a,
          onSkip: Y,
          onStartSetup: X,
        })),
        (t[67] = V),
        (t[68] = P.isError),
        (t[69] = a),
        (t[70] = O),
        (t[71] = K),
        (t[72] = J),
        (t[73] = Y),
        (t[74] = X),
        (t[75] = Z))
      : (Z = t[75]),
    Z
  );
}
function Ie(e) {
  return e.clientId;
}
function Le(e) {
  let t = (0, Re.c)(27),
    {
      onAllowHost: r,
      onFinishSetup: i,
      onSkip: o,
      onStartSetup: s,
      setupInProgress: l,
      showAllowHostError: u,
      showStartSetupError: d,
      step: f,
    } = e,
    p = n(D),
    m = ee(),
    h;
  t[0] !== p || t[1] !== f
    ? ((h = (e) => {
        le(p, c, { action: e, step: f, surface: `page` });
      }),
      (t[0] = p),
      (t[1] = f),
      (t[2] = h))
    : (h = t[2]);
  let _ = h,
    v;
  t[3] === f
    ? (v = t[4])
    : ((v =
        f === `allow-host` || f === `mfa-required` || f === `waiting`
          ? (0, $.jsx)(fe.Header, {
              children: (0, $.jsx)(G, {
                start: (0, $.jsx)(a, {
                  id: `codexMobile.setupPage.remoteTitle`,
                  defaultMessage: `Set up Remote`,
                  description: `Toolbar title shown during Remote setup`,
                }),
              }),
            })
          : null),
      (t[3] = f),
      (t[4] = v));
  let y;
  t[5] === _
    ? (y = t[6])
    : ((y = (e) => {
        (_(`continue_on_chatgpt`),
          g({
            event: e,
            href: `https://chatgpt.com/#settings/Security`,
            initiator: `open_in_browser_bridge`,
          }));
      }),
      (t[5] = _),
      (t[6] = y));
  let b;
  t[7] !== i || t[8] !== _
    ? ((b = () => {
        (_(`finish_setup`), i());
      }),
      (t[7] = i),
      (t[8] = _),
      (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] !== m || t[11] !== _
    ? ((x = () => {
        (_(`manage_connections`), m(`/settings/connections`));
      }),
      (t[10] = m),
      (t[11] = _),
      (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] !== r ||
  t[14] !== o ||
  t[15] !== s ||
  t[16] !== l ||
  t[17] !== u ||
  t[18] !== d ||
  t[19] !== f ||
  t[20] !== y ||
  t[21] !== b ||
  t[22] !== x
    ? ((S = (0, $.jsx)(J, {
        onAllowHost: r,
        onContinueOnChatGPT: y,
        onFinishSetup: b,
        onManageConnections: x,
        onSkip: o,
        onStartSetup: s,
        setupInProgress: l,
        showAllowHostError: u,
        showStartSetupError: d,
        step: f,
        variant: `page`,
      })),
      (t[13] = r),
      (t[14] = o),
      (t[15] = s),
      (t[16] = l),
      (t[17] = u),
      (t[18] = d),
      (t[19] = f),
      (t[20] = y),
      (t[21] = b),
      (t[22] = x),
      (t[23] = S))
    : (S = t[23]);
  let C;
  return (
    t[24] !== v || t[25] !== S
      ? ((C = (0, $.jsxs)($.Fragment, { children: [v, S] })), (t[24] = v), (t[25] = S), (t[26] = C))
      : (C = t[26]),
    C
  );
}
var Re,
  Q,
  $,
  ze = e(() => {
    ((Re = M()),
      O(),
      z(),
      _(),
      (Q = t(r(), 1)),
      y(),
      d(),
      U(),
      B(),
      m(),
      v(),
      Te(),
      Z(),
      L(),
      Oe(),
      F(),
      f(),
      ne(),
      W(),
      q(),
      Y(),
      T(),
      Pe(),
      K(),
      ($ = de()));
  });
export {
  Ae as a,
  Se as c,
  we as d,
  _e as f,
  Pe as i,
  Te as l,
  ze as n,
  Oe as o,
  Z as p,
  ke as r,
  Ee as s,
  Fe as t,
  xe as u,
};
//# sourceMappingURL=codex-mobile-setup-flow-a0aae97976bd.js.map
