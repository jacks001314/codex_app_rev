import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  VDt as o,
  cL as s,
  hot as c,
  jDt as l,
  lot as u,
  sL as d,
  t3 as f,
  vzt as p,
  wot as m,
  xMt as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
import { ACn as _, Sdn as v, Tdn as y, bdn as b, jCn as x, jdn as S } from "./app-initial-5851df3f6cb1.js";
function C(e) {
  let a = (0, T.c)(11),
    { connectorId: s, disabled: l, reconnect: u } = e,
    d = i(n),
    f = o(),
    { status: p } = S(),
    [m, h] = (0, E.useState)(!1),
    g = m || p != null,
    _ = l || g,
    v;
  a[0] !== s || a[1] !== f || a[2] !== d
    ? ((v = () => {
        (h(!0),
          b(d, s)
            .catch(w)
            .then((e) => {
              if (e.status === `unavailable`) {
                d.get(c).danger(
                  f.formatMessage({
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
              h(!1);
            }));
      }),
      (a[0] = s),
      (a[1] = f),
      (a[2] = d),
      (a[3] = v))
    : (v = a[3]);
  let y;
  a[4] === u
    ? (y = a[5])
    : ((y = u
        ? (0, D.jsx)(r, {
            id: `restricted.environmentSetup.repositoryPicker.reconnectAction`,
            defaultMessage: `Reconnect GitHub`,
            description: `Starts GitHub plugin setup to reconnect the user's account`,
          })
        : (0, D.jsx)(r, {
            id: `restricted.environmentSetup.repositoryPicker.connectAction`,
            defaultMessage: `Connect GitHub`,
            description: `Starts GitHub plugin setup to connect the user's account`,
          })),
      (a[4] = u),
      (a[5] = y));
  let x;
  return (
    a[6] !== g || a[7] !== _ || a[8] !== v || a[9] !== y
      ? ((x = (0, D.jsx)(t, {
          "aria-busy": g,
          color: `accent`,
          disabled: _,
          loading: g,
          size: `dialog`,
          onClick: v,
          children: y,
        })),
        (a[6] = g),
        (a[7] = _),
        (a[8] = v),
        (a[9] = y),
        (a[10] = x))
      : (x = a[10]),
    x
  );
}
function w() {
  return { status: `unavailable` };
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = p()), a(), (E = g()), l(), f(), u(), y(), m(), v(), (D = h()));
  }))();
}
function k(e) {
  let n = (0, j.c)(17),
    {
      connectorId: i,
      connectionMessage: a,
      connectionAction: o,
      disabled: s,
      reconnect: c,
      status: l,
      onRetry: u,
    } = e,
    f,
    p;
  if (l === `error`) {
    let e;
    (n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(r, {
          id: `restricted.environmentSetup.repositoryPicker.connectionError`,
          defaultMessage: `GitHub connections couldn’t load`,
          description: `Error when GitHub connections cannot be loaded`,
        })),
        (n[0] = e))
      : (e = n[0]),
      (f = e));
    let i;
    n[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, M.jsx)(r, {
          id: `restricted.environmentSetup.repositoryPicker.retryConnection`,
          defaultMessage: `Try again`,
          description: `Retries loading GitHub connections`,
        })),
        (n[1] = i))
      : (i = n[1]);
    let a;
    (n[2] !== s || n[3] !== u
      ? ((a = (0, M.jsx)(t, { color: `accent`, disabled: s, onClick: u, size: `dialog`, children: i })),
        (n[2] = s),
        (n[3] = u),
        (n[4] = a))
      : (a = n[4]),
      (p = a));
  } else if (l === `disabled`) {
    let e;
    (n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(r, {
          id: `restricted.environmentSetup.repositoryPicker.blockedGuidance`,
          defaultMessage: `GitHub isn’t enabled in this workspace<br></br>Ask a workspace admin to enable the GitHub plugin`,
          description: `Explains that the workspace administrator has disabled GitHub and how the user can request access. The br tag starts a new line.`,
          values: { br: A },
        })),
        (n[5] = e))
      : (e = n[5]),
      (f = e));
  } else {
    f = a;
    let e;
    (n[6] !== o || n[7] !== i || n[8] !== s || n[9] !== c
      ? ((e = o ?? (0, M.jsx)(C, { connectorId: i, disabled: s, reconnect: c })),
        (n[6] = o),
        (n[7] = i),
        (n[8] = s),
        (n[9] = c),
        (n[10] = e))
      : (e = n[10]),
      (p = e));
  }
  let m;
  n[11] === l ? (m = n[12]) : ((m = l === `connect` ? (0, M.jsx)(d, {}) : void 0), (n[11] = l), (n[12] = m));
  let h;
  return (
    n[13] !== p || n[14] !== f || n[15] !== m
      ? ((h = (0, M.jsx)(_, {
          className: `flex-1 select-none`,
          title: null,
          description: f,
          actions: p,
          illustration: m,
          illustrationSize: `icon`,
        })),
        (n[13] = p),
        (n[14] = f),
        (n[15] = m),
        (n[16] = h))
      : (h = n[16]),
    h
  );
}
function A() {
  return (0, M.jsx)(`br`, {});
}
var j, M;
function N() {
  return (N = e(() => {
    ((j = p()), l(), f(), x(), s(), O(), (M = h()));
  }))();
}
export { N as n, k as t };
//# sourceMappingURL=github-connection-empty-state-6e3489c4d00a.js.map
