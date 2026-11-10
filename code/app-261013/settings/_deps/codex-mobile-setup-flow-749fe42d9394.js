import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  Cot as n,
  Ext as r,
  Het as i,
  IDt as ee,
  Iot as a,
  Ixt as o,
  Lot as s,
  Pxt as c,
  Rnt as l,
  Uet as te,
  Vxt as u,
  Zxt as d,
  _xt as f,
  iot as p,
  jDt as m,
  rrt as h,
  srt as g,
  vzt as _,
  wot as v,
  xMt as y,
  yzt as b,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  ADn as S,
  BDn as C,
  CDn as ne,
  Cw as re,
  DDn as ie,
  Dw as ae,
  EDn as oe,
  Ew as w,
  FDn as se,
  IDn as T,
  JPn as ce,
  LDn as le,
  NDn as E,
  ODn as ue,
  OPr as D,
  PDn as de,
  QDr as fe,
  RDn as O,
  Sw as pe,
  TDn as k,
  Tw as A,
  XDr as j,
  XHt as M,
  XPn as N,
  YHt as P,
  dFr as me,
  fFr as F,
  jDn as I,
  kPr as L,
  oFr as R,
  pFr as z,
  uFr as B,
  ww as V,
  xw as H,
} from "./app-initial-5851df3f6cb1.js";
import { Jt as U, Kt as W } from "./app-primary-fe8a450b3b04.js";
import {
  a as G,
  c as he,
  i as K,
  l as q,
  n as J,
  t as ge,
} from "./codex-mobile-setup-dialog-f9d566940f74.js";
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
    (c(),
      E(),
      v(),
      z(),
      D(),
      S(),
      (ye = 3e4),
      (be = t(n, ({ get: e, scope: t }) => {
        let n = F(e, `local_remote_control_environment_id`) ?? null,
          r = !e(L, `2055603567`);
        return {
          queryKey: [`remote-control-clients`, n, r],
          queryFn: () => I(t, n, { includeBrowserClients: r }),
          staleTime: ye,
        };
      })),
      (xe = d(n, (e, { get: t, scope: n }) => {
        let r = t(se, e),
          i = r?.environmentId;
        return {
          enabled: i != null,
          queryKey: [`remote-control-clients`, `app-server`, e, r?.installationId],
          queryFn: () => (i == null ? Promise.resolve([]) : I(n, i, { appServerHostId: e })),
          staleTime: ye,
        };
      })),
      (Se = d(n, (e, { get: t, scope: n }) => {
        let r = F(t, `local_remote_control_environment_id`) ?? null,
          i = !t(L, `2055603567`);
        return {
          enabled: e,
          queryKey: [`remote-control-clients`, r, i],
          queryFn: () => I(n, r, { includeBrowserClients: i }),
          refetchInterval: e ? 1e3 : !1,
          staleTime: 0,
        };
      })),
      (Ce = d(
        n,
        (
          { existingClientIds: e, hostId: t, localRemoteControlClientId: n, waiting: r },
          { get: i, queryClient: ee, scope: a },
        ) => {
          let o = null,
            s = null,
            c = !i(L, `2055603567`);
          if (r && t == null) o = F(i, `local_remote_control_environment_id`) ?? null;
          else if (r) {
            let e = i(se, t);
            ((o = e?.environmentId), (s = e?.installationId));
          }
          let l = [
            `remote-control-clients`,
            `waiting-for-added`,
            t,
            c,
            t == null ? o : s,
            e == null ? null : Array.from(e).sort(),
            n,
          ];
          return {
            enabled: r && e != null && (t == null || o != null),
            gcTime: 0,
            queryKey: l,
            queryFn: async () => {
              let r = ee.getQueryData(l);
              if (r != null || e == null) return r ?? null;
              let i = await I(a, o ?? null, { appServerHostId: t ?? void 0, includeBrowserClients: c });
              return (
                t != null && ee.setQueryData([`remote-control-clients`, `app-server`, t, s], i),
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
  T(e, t, !1);
  let r = le(e, t, { ignoreCurrentError: !0 });
  try {
    let n = Ee(e, t, !0);
    return await Promise.race([r, n.then(() => r)]);
  } catch (n) {
    throw (T(e, t, !0), n);
  }
}
async function Ee(e, t, n) {
  return t === `local`
    ? (await h(`set-local-remote-control-enabled`, { params: { enabled: n } }), A(e, n, { force: !0 }))
    : ae(e, t, n);
}
function De() {
  return (De = e(() => {
    (w(), E(), R(), g(), V());
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
  return e.some((e) => e instanceof O);
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
    C();
  }))();
}
function Pe(e) {
  let t = (0, Le.c)(76),
    { initialStep: ee, onClose: a, variant: c } = e,
    l = o(n),
    d = r(),
    f = (0, Q.useRef)(null),
    m = x(de, p),
    h = u(he) ?? `auto`,
    g = u(ne),
    [_, v] = (0, Q.useState)(ee ?? null),
    [y, b] = (0, Q.useState)(null),
    [S] = me(`local_remote_control_client_id`),
    C;
  t[0] !== m || t[1] !== _ || t[2] !== g.data
    ? ((C = _ ?? Ae({ remoteControlHostEnabled: m, hasEnrolledRemoteControlClient: g.data })),
      (t[0] = m),
      (t[1] = _),
      (t[2] = g.data),
      (t[3] = C))
    : (C = t[3]);
  let ae = C,
    w = x(Se, ae === `waiting`),
    se = _e(w.data, S),
    T = u(ue),
    ce = ae === `waiting` && (y == null ? se?.length : ve(se, y)) ? `connected` : ae,
    le = u(ie),
    E = h === `auto` ? (ae === `mfa-required` && le.data ? `allow-host` : ce) : h,
    D;
  t[4] !== E || t[5] !== l || t[6] !== c
    ? ((D = (e) => {
        fe(l, i, { action: e, step: E, surface: c });
      }),
      (t[4] = E),
      (t[5] = l),
      (t[6] = c),
      (t[7] = D))
    : (D = t[7]);
  let O = D,
    k,
    A;
  (t[8] !== E || t[9] !== l || t[10] !== c
    ? ((k = () => {
        let e = `${c}:${E}`;
        f.current !== e && ((f.current = e), fe(l, te, { step: E, surface: c }));
      }),
      (A = [E, l, c]),
      (t[8] = E),
      (t[9] = l),
      (t[10] = c),
      (t[11] = k),
      (t[12] = A))
    : ((k = t[11]), (A = t[12])),
    (0, Q.useEffect)(k, A));
  let j;
  t[13] === l ? (j = t[14]) : ((j = () => oe(l)), (t[13] = l), (t[14] = j));
  let M;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => {
        v(e ? `mfa-required` : `allow-host`);
      }),
      (t[15] = M))
    : (M = t[15]);
  let N;
  t[16] === j ? (N = t[17]) : ((N = { mutationFn: j, onSuccess: M }), (t[16] = j), (t[17] = N));
  let P = s(N),
    F;
  t[18] === l
    ? (F = t[19])
    : ((F = async () => {
        await Te(l, p, !0);
        let e = l.query.snapshot(be);
        return (await e.invalidate({ exact: !0, refetchType: `none` }), e.fetch());
      }),
      (t[18] = l),
      (t[19] = F));
  let I;
  t[20] === S
    ? (I = t[21])
    : ((I = (e) => {
        (b(new Set(_e(e, S)?.map(Fe))), v(`waiting`));
      }),
      (t[20] = S),
      (t[21] = I));
  let L;
  t[22] === l
    ? (L = t[23])
    : ((L = (e) => {
        re(l, e);
      }),
      (t[22] = l),
      (t[23] = L));
  let R;
  t[24] !== L || t[25] !== F || t[26] !== I
    ? ((R = { mutationFn: F, onSuccess: I, onError: L }), (t[24] = L), (t[25] = F), (t[26] = I), (t[27] = R))
    : (R = t[27]);
  let z = s(R),
    B;
  t[28] !== z || t[29] !== O
    ? ((B = () => {
        (O(`allow_host`), z.mutate());
      }),
      (t[28] = z),
      (t[29] = O),
      (t[30] = B))
    : (B = t[30]);
  let V = B,
    H;
  t[31] !== z.error || t[32] !== P.error || t[33] !== T.error || t[34] !== w.error || t[35] !== g.error
    ? ((H = je([g.error, w.error, T.error, P.error, z.error])),
      (t[31] = z.error),
      (t[32] = P.error),
      (t[33] = T.error),
      (t[34] = w.error),
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
  let K = P.isPending || z.isPending || (T.data === `required` && le.isLoading),
    q;
  t[41] !== z.error || t[42] !== z.isError
    ? ((q = z.isError && !pe(z.error)), (t[41] = z.error), (t[42] = z.isError), (t[43] = q))
    : (q = t[43]);
  let J = q;
  if ((h === `auto` && _ == null && m && g.isLoading) || U) return null;
  if (c === `dialog`) {
    let e;
    t[44] === a
      ? (e = t[45])
      : ((e = (e) => {
          e || a();
        }),
        (t[44] = a),
        (t[45] = e));
    let n;
    t[46] !== a || t[47] !== O
      ? ((n = () => {
          (O(`skip`), a());
        }),
        (t[46] = a),
        (t[47] = O),
        (t[48] = n))
      : (n = t[48]);
    let r;
    t[49] !== P || t[50] !== O
      ? ((r = () => {
          (O(`start_setup`), P.mutate());
        }),
        (t[49] = P),
        (t[50] = O),
        (t[51] = r))
      : (r = t[51]);
    let i;
    return (
      t[52] !== V ||
      t[53] !== P.isError ||
      t[54] !== E ||
      t[55] !== K ||
      t[56] !== J ||
      t[57] !== e ||
      t[58] !== n ||
      t[59] !== r
        ? ((i = (0, $.jsx)(ge, {
            open: !0,
            showAllowHostError: J,
            showStartSetupError: P.isError,
            setupInProgress: K,
            step: E,
            onAllowHost: V,
            onOpenChange: e,
            onSkip: n,
            onStartSetup: r,
          })),
          (t[52] = V),
          (t[53] = P.isError),
          (t[54] = E),
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
  t[61] !== a || t[62] !== O
    ? ((Y = () => {
        (O(`skip`), a());
      }),
      (t[61] = a),
      (t[62] = O),
      (t[63] = Y))
    : (Y = t[63]);
  let X;
  t[64] !== P || t[65] !== O
    ? ((X = () => {
        (O(`start_setup`), P.mutate());
      }),
      (t[64] = P),
      (t[65] = O),
      (t[66] = X))
    : (X = t[66]);
  let Z;
  return (
    t[67] !== V ||
    t[68] !== P.isError ||
    t[69] !== a ||
    t[70] !== E ||
    t[71] !== K ||
    t[72] !== J ||
    t[73] !== Y ||
    t[74] !== X
      ? ((Z = (0, $.jsx)(Ie, {
          showAllowHostError: J,
          showStartSetupError: P.isError,
          setupInProgress: K,
          step: E,
          onAllowHost: V,
          onFinishSetup: a,
          onSkip: Y,
          onStartSetup: X,
        })),
        (t[67] = V),
        (t[68] = P.isError),
        (t[69] = a),
        (t[70] = E),
        (t[71] = K),
        (t[72] = J),
        (t[73] = Y),
        (t[74] = X),
        (t[75] = Z))
      : (Z = t[75]),
    Z
  );
}
function Fe(e) {
  return e.clientId;
}
function Ie(e) {
  let t = (0, Le.c)(27),
    {
      onAllowHost: a,
      onFinishSetup: s,
      onSkip: c,
      onStartSetup: l,
      setupInProgress: te,
      showAllowHostError: u,
      showStartSetupError: d,
      step: f,
    } = e,
    p = o(n),
    m = r(),
    h;
  t[0] !== p || t[1] !== f
    ? ((h = (e) => {
        fe(p, i, { action: e, step: f, surface: `page` });
      }),
      (t[0] = p),
      (t[1] = f),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    _;
  t[3] === f
    ? (_ = t[4])
    : ((_ =
        f === `allow-host` || f === `mfa-required` || f === `waiting`
          ? (0, $.jsx)(P.Header, {
              children: (0, $.jsx)(W, {
                start: (0, $.jsx)(ee, {
                  id: `codexMobile.setupPage.remoteTitle`,
                  defaultMessage: `Set up Remote`,
                  description: `Toolbar title shown during Remote setup`,
                }),
              }),
            })
          : null),
      (t[3] = f),
      (t[4] = _));
  let v;
  t[5] === g
    ? (v = t[6])
    : ((v = (e) => {
        (g(`continue_on_chatgpt`),
          N({
            event: e,
            href: `https://chatgpt.com/#settings/Security?mfa_source=codex_remote`,
            initiator: `open_in_browser_bridge`,
          }));
      }),
      (t[5] = g),
      (t[6] = v));
  let y;
  t[7] !== s || t[8] !== g
    ? ((y = () => {
        (g(`finish_setup`), s());
      }),
      (t[7] = s),
      (t[8] = g),
      (t[9] = y))
    : (y = t[9]);
  let b;
  t[10] !== m || t[11] !== g
    ? ((b = () => {
        (g(`manage_connections`), m(`/settings/connections`));
      }),
      (t[10] = m),
      (t[11] = g),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== a ||
  t[14] !== c ||
  t[15] !== l ||
  t[16] !== te ||
  t[17] !== u ||
  t[18] !== d ||
  t[19] !== f ||
  t[20] !== v ||
  t[21] !== y ||
  t[22] !== b
    ? ((x = (0, $.jsx)(K, {
        onAllowHost: a,
        onContinueOnChatGPT: v,
        onFinishSetup: y,
        onManageConnections: b,
        onSkip: c,
        onStartSetup: l,
        setupInProgress: te,
        showAllowHostError: u,
        showStartSetupError: d,
        step: f,
        variant: `page`,
      })),
      (t[13] = a),
      (t[14] = c),
      (t[15] = l),
      (t[16] = te),
      (t[17] = u),
      (t[18] = d),
      (t[19] = f),
      (t[20] = v),
      (t[21] = y),
      (t[22] = b),
      (t[23] = x))
    : (x = t[23]);
  let S;
  return (
    t[24] !== _ || t[25] !== x
      ? ((S = (0, $.jsxs)($.Fragment, { children: [_, x] })), (t[24] = _), (t[25] = x), (t[26] = S))
      : (S = t[26]),
    S
  );
}
var Le, Q, $;
function Re() {
  return (Re = e(() => {
    ((Le = _()),
      l(),
      a(),
      c(),
      (Q = b()),
      m(),
      f(),
      E(),
      M(),
      ce(),
      j(),
      we(),
      H(),
      De(),
      v(),
      R(),
      B(),
      U(),
      q(),
      J(),
      k(),
      Ne(),
      G(),
      ($ = y()));
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
//# sourceMappingURL=codex-mobile-setup-flow-749fe42d9394.js.map
