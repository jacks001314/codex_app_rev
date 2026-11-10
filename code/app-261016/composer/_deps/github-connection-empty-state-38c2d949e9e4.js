import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  Vrt as s,
  XL as c,
  XOt as l,
  Y3 as u,
  Z3 as d,
  ZL as f,
  ZSt as p,
  okt as m,
  qrt as h,
  tkt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import { XEn as _, YEn as v, bnn as y, dnn as b, lnn as x, mnn as S } from "./app-initial-ad16eaadf81f.js";
function C(e) {
  let n = (0, T.c)(11),
    { connectorId: r, disabled: i, reconnect: a } = e,
    s = t(o),
    c = m(),
    { status: l } = y(),
    [d, f] = (0, E.useState)(!1),
    p = d || l != null,
    _ = i || p,
    v;
  n[0] !== r || n[1] !== c || n[2] !== s
    ? ((v = () => {
        (f(!0),
          x(s, r)
            .catch(w)
            .then((e) => {
              if (e.status === `unavailable`) {
                s.get(h).danger(
                  c.formatMessage({
                    id: `environmentSetup.repositoryPicker.connectGithub.unavailable`,
                    defaultMessage: `GitHub could not be loaded. Try again`,
                    description: `Error when the GitHub plugin cannot be found to connect it from the environment repository picker`,
                  }),
                  {
                    errorAnalytics: {
                      toastId: `environmentSetup.repositoryPicker.connectGithub.unavailable`,
                    },
                  },
                );
                return;
              }
            })
            .finally(() => {
              f(!1);
            }));
      }),
      (n[0] = r),
      (n[1] = c),
      (n[2] = s),
      (n[3] = v))
    : (v = n[3]);
  let b;
  n[4] === a
    ? (b = n[5])
    : ((b = a
        ? (0, D.jsx)(g, {
            id: `restricted.environmentSetup.repositoryPicker.reconnectAction`,
            defaultMessage: `Reconnect GitHub`,
            description: `Starts GitHub plugin setup to reconnect the user's account`,
          })
        : (0, D.jsx)(g, {
            id: `restricted.environmentSetup.repositoryPicker.connectAction`,
            defaultMessage: `Connect GitHub`,
            description: `Starts GitHub plugin setup to connect the user's account`,
          })),
      (n[4] = a),
      (n[5] = b));
  let S;
  return (
    n[6] !== p || n[7] !== _ || n[8] !== v || n[9] !== b
      ? ((S = (0, D.jsx)(u, {
          "aria-busy": p,
          color: `accent`,
          disabled: _,
          loading: p,
          size: `dialog`,
          onClick: v,
          children: b,
        })),
        (n[6] = p),
        (n[7] = _),
        (n[8] = v),
        (n[9] = b),
        (n[10] = S))
      : (S = n[10]),
    S
  );
}
function w() {
  return { status: `unavailable` };
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = a()), p(), (E = r()), l(), d(), s(), S(), n(), b(), (D = i()));
  }))();
}
function k(e) {
  let t = (0, j.c)(17),
    {
      connectorId: n,
      connectionMessage: r,
      connectionAction: i,
      disabled: a,
      reconnect: o,
      status: s,
      onRetry: l,
    } = e,
    d,
    f;
  if (s === `error`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(g, {
          id: `restricted.environmentSetup.repositoryPicker.connectionError`,
          defaultMessage: `GitHub connections couldn’t load`,
          description: `Error when GitHub connections cannot be loaded`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (d = e));
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, M.jsx)(g, {
          id: `restricted.environmentSetup.repositoryPicker.retryConnection`,
          defaultMessage: `Try again`,
          description: `Retries loading GitHub connections`,
        })),
        (t[1] = n))
      : (n = t[1]);
    let r;
    (t[2] !== a || t[3] !== l
      ? ((r = (0, M.jsx)(u, { color: `accent`, disabled: a, onClick: l, size: `dialog`, children: n })),
        (t[2] = a),
        (t[3] = l),
        (t[4] = r))
      : (r = t[4]),
      (f = r));
  } else if (s === `disabled`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(g, {
          id: `restricted.environmentSetup.repositoryPicker.blockedGuidance`,
          defaultMessage: `GitHub isn’t enabled in this workspace<br></br>Ask a workspace admin to enable the GitHub plugin`,
          description: `Explains that the workspace administrator has disabled GitHub and how the user can request access. The br tag starts a new line.`,
          values: { br: A },
        })),
        (t[5] = e))
      : (e = t[5]),
      (d = e));
  } else {
    d = r;
    let e;
    (t[6] !== i || t[7] !== n || t[8] !== a || t[9] !== o
      ? ((e = i ?? (0, M.jsx)(C, { connectorId: n, disabled: a, reconnect: o })),
        (t[6] = i),
        (t[7] = n),
        (t[8] = a),
        (t[9] = o),
        (t[10] = e))
      : (e = t[10]),
      (f = e));
  }
  let p;
  t[11] === s ? (p = t[12]) : ((p = s === `connect` ? (0, M.jsx)(c, {}) : void 0), (t[11] = s), (t[12] = p));
  let m;
  return (
    t[13] !== f || t[14] !== d || t[15] !== p
      ? ((m = (0, M.jsx)(v, {
          className: `flex-1 select-none`,
          title: null,
          description: d,
          actions: f,
          illustration: p,
          illustrationSize: `icon`,
        })),
        (t[13] = f),
        (t[14] = d),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function A() {
  return (0, M.jsx)(`br`, {});
}
var j, M;
function N() {
  return (N = e(() => {
    ((j = a()), l(), d(), _(), f(), O(), (M = i()));
  }))();
}
export { N as n, k as t };
//# sourceMappingURL=github-connection-empty-state-38c2d949e9e4.js.map
