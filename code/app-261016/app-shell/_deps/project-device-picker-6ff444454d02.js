import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $1 as t,
  $St as n,
  $st as r,
  CH as i,
  DB as a,
  GW as o,
  LNt as s,
  NSt as c,
  OB as l,
  PBt as u,
  Qst as d,
  TY as f,
  USt as p,
  VSt as m,
  WK as h,
  XOt as g,
  Y3 as _,
  Z3 as v,
  ZSt as y,
  ck as b,
  e0 as x,
  iCt as S,
  kH as C,
  okt as w,
  qW as T,
  rk as E,
  tk as D,
  tkt as O,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GIr as k,
  Gsn as A,
  Gzt as j,
  Jun as M,
  Kzt as N,
  LIr as P,
  RAn as F,
  Yun as I,
  ben as L,
  dat as R,
  okn as z,
  qsn as B,
  skn as V,
  uat as H,
  xen as U,
  zAn as W,
} from "./app-initial-ad16eaadf81f.js";
import { r as G, t as K } from "./remote-connection-editor-draft-4848da584c67.js";
function q(e) {
  let t = (0, Z.c)(42),
    { selectedHostId: n, onSelect: r, remoteOnly: a, readOnly: s, disabled: c } = e,
    l = a !== void 0 && a,
    u = s !== void 0 && s,
    d = c !== void 0 && c,
    f = w(),
    { remoteConnections: p } = S(W),
    m = R(p),
    h = B(),
    g = N(),
    _ = S(I),
    v = S(k),
    y = S(V),
    b = !l && _ && !g && (y === `codex` || v),
    x = h && (!g || l),
    A;
  if (t[0] !== p || t[1] !== n) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => e.hostId === n), (t[3] = n), (t[4] = e)),
      (A = p.find(e)),
      (t[0] = p),
      (t[1] = n),
      (t[2] = A));
  } else A = t[2];
  let j = A;
  if (u) {
    let e;
    t[5] === n
      ? (e = t[6])
      : ((e = n === `local` ? (0, Q.jsx)(o, {}) : (0, Q.jsx)(T, {})), (t[5] = n), (t[6] = e));
    let r;
    t[7] !== j?.displayName || t[8] !== n
      ? ((r =
          n === `local`
            ? (0, Q.jsx)(O, {
                id: `projectSetup.device.thisComputer`,
                defaultMessage: `This computer`,
                description: `Label for source folders on the current computer`,
              })
            : j?.displayName),
        (t[7] = j?.displayName),
        (t[8] = n),
        (t[9] = r))
      : (r = t[9]);
    let i;
    t[10] === r
      ? (i = t[11])
      : ((i = (0, Q.jsx)(`span`, { className: `min-w-0 truncate`, children: r })), (t[10] = r), (t[11] = i));
    let a;
    return (
      t[12] !== e || t[13] !== i
        ? ((a = (0, Q.jsxs)(`span`, {
            className: `flex max-w-full min-w-0 items-center gap-2 text-sm text-secondary select-none`,
            children: [e, i],
          })),
          (t[12] = e),
          (t[13] = i),
          (t[14] = a))
        : (a = t[14]),
      a
    );
  }
  let M;
  t[15] !== j?.displayName || t[16] !== n
    ? ((M =
        n === `local`
          ? (0, Q.jsx)(O, {
              id: `projectSetup.device.localPrompt`,
              defaultMessage: `Add a folder on <device>this computer</device>`,
              description: `Prompt to add source folders. The device tag highlights the selected local computer`,
              values: { device: Y },
            })
          : (0, Q.jsx)(O, {
              id: `projectSetup.device.remotePrompt`,
              defaultMessage: `Add a folder on <device>{deviceName}</device>`,
              description: `Prompt to add source folders. deviceName is the selected remote computer; the device tag highlights it`,
              values: { deviceName: j?.displayName ?? ``, device: J },
            })),
      (t[15] = j?.displayName),
      (t[16] = n),
      (t[17] = M))
    : (M = t[17]);
  let P = M,
    F;
  t[18] === f
    ? (F = t[19])
    : ((F = f.formatMessage({
        id: `projectSetup.device.label`,
        defaultMessage: `Project device`,
        description: `Accessible label for selecting the computer containing project source folders`,
      })),
      (t[18] = f),
      (t[19] = F));
  let L;
  t[20] !== P || t[21] !== n
    ? ((L = (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children:
          n == null
            ? (0, Q.jsx)(O, {
                id: `projectSetup.device.choose`,
                defaultMessage: `Choose a device`,
                description: `Prompt to select a computer for project source folders`,
              })
            : P,
      })),
      (t[20] = P),
      (t[21] = n),
      (t[22] = L))
    : (L = t[22]);
  let z;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(C, { className: `text-default` })), (t[23] = z))
    : (z = t[23]);
  let H;
  t[24] !== d || t[25] !== F || t[26] !== L
    ? ((H = (0, Q.jsxs)(`button`, {
        type: `button`,
        disabled: d,
        "aria-label": F,
        className: `flex max-w-full min-w-0 cursor-interaction items-center justify-center gap-1 text-sm text-secondary`,
        children: [L, z],
      })),
      (t[24] = d),
      (t[25] = F),
      (t[26] = L),
      (t[27] = H))
    : (H = t[27]);
  let U;
  t[28] !== b || t[29] !== r || t[30] !== n
    ? ((U = b
        ? (0, Q.jsx)(E.Item, {
            LeftIcon: o,
            RightIcon: n === `local` ? i : void 0,
            onSelect: () => r(`local`),
            children: (0, Q.jsx)(O, {
              id: `projectSetup.device.thisComputer`,
              defaultMessage: `This computer`,
              description: `Label for source folders on the current computer`,
            }),
          })
        : null),
      (t[28] = b),
      (t[29] = r),
      (t[30] = n),
      (t[31] = U))
    : (U = t[31]);
  let G;
  t[32] !== x || t[33] !== m || t[34] !== r || t[35] !== n
    ? ((G = x
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsxs)(E.Section, {
                children: [
                  (0, Q.jsx)(E.SectionLabel, {
                    children: (0, Q.jsx)(O, {
                      id: `projectSetup.device.remoteDevices`,
                      defaultMessage: `Remote devices`,
                      description: `Heading for connected remote computers in the project device menu`,
                    }),
                  }),
                  m.map((e) =>
                    (0, Q.jsx)(
                      E.Item,
                      {
                        LeftIcon: T,
                        RightIcon: n === e.hostId ? i : void 0,
                        onSelect: () => r(e.hostId),
                        children: (0, Q.jsx)(`span`, {
                          className: `min-w-0 truncate`,
                          children: e.displayName,
                        }),
                      },
                      e.hostId,
                    ),
                  ),
                  m.length === 0
                    ? (0, Q.jsx)(E.Item, {
                        disabled: !0,
                        children: (0, Q.jsx)(O, {
                          id: `workspaceRootDialog.remoteEmpty`,
                          defaultMessage: `No connected remotes`,
                          description: `Label shown when no connected remotes are available in the remote workspace path dialog`,
                        }),
                      })
                    : null,
                ],
              }),
              (0, Q.jsx)(Q.Fragment, { children: (0, Q.jsx)(ee, { onConnected: r }) }),
            ],
          })
        : null),
      (t[32] = x),
      (t[33] = m),
      (t[34] = r),
      (t[35] = n),
      (t[36] = G))
    : (G = t[36]);
  let K;
  return (
    t[37] !== d || t[38] !== U || t[39] !== G || t[40] !== H
      ? ((K = (0, Q.jsxs)(D, {
          align: `center`,
          disabled: d,
          modal: !0,
          contentWidth: `menuBounded`,
          contentMaxHeight: `list`,
          triggerButton: H,
          children: [U, G],
        })),
        (t[37] = d),
        (t[38] = U),
        (t[39] = G),
        (t[40] = H),
        (t[41] = K))
      : (K = t[41]),
    K
  );
}
function J(e) {
  return (0, Q.jsx)(`span`, { className: `text-default`, children: e });
}
function Y(e) {
  return (0, Q.jsx)(`span`, { className: `text-default`, children: e });
}
function X(e) {
  let n = (0, Z.c)(8),
    { children: r, onAdd: i, disabled: o } = e,
    s = o !== void 0 && o,
    c,
    l;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(a, { asset: t })),
      (l = (0, Q.jsx)(O, {
        id: `projectSetup.sources.add`,
        defaultMessage: `Add`,
        description: `Button that opens the folder picker for the selected project device`,
      })),
      (n[0] = c),
      (n[1] = l))
    : ((c = n[0]), (l = n[1]));
  let u;
  n[2] !== s || n[3] !== i
    ? ((u = (0, Q.jsxs)(_, {
        color: `secondary`,
        radius: `full`,
        type: `button`,
        disabled: s,
        onClick: i,
        children: [c, l],
      })),
      (n[2] = s),
      (n[3] = i),
      (n[4] = u))
    : (u = n[4]);
  let d;
  return (
    n[5] !== r || n[6] !== u
      ? ((d = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-col items-center justify-center gap-3 p-6 select-none`,
          children: [r, u],
        })),
        (n[5] = r),
        (n[6] = u),
        (n[7] = d))
      : (d = n[7]),
    d
  );
}
function ee(e) {
  let t = (0, Z.c)(11),
    { onConnected: r } = e,
    i = n(d),
    a = m(),
    o = p(),
    s;
  t[0] !== a.hash ||
  t[1] !== a.pathname ||
  t[2] !== a.search ||
  t[3] !== a.state ||
  t[4] !== o ||
  t[5] !== r ||
  t[6] !== i
    ? ((s = () => {
        let e = `${a.pathname}${a.search}${a.hash}`;
        (i.set(U, {
          draft: K(),
          hostId: null,
          onCancel: () => {
            (i.set(U, null), o(e, { replace: !0, state: a.state }));
          },
          onConnected: (t) => {
            (r(t), i.set(U, null), o(e, { replace: !0, state: a.state }));
          },
        }),
          o(`/settings/connections/ssh/add`));
      }),
      (t[0] = a.hash),
      (t[1] = a.pathname),
      (t[2] = a.search),
      (t[3] = a.state),
      (t[4] = o),
      (t[5] = r),
      (t[6] = i),
      (t[7] = s))
    : (s = t[7]);
  let c;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(O, {
        id: `projectSetupDialog.addRemoteConnection`,
        defaultMessage: `Add remote`,
        description: `Menu item that sets up a new SSH connection while creating a remote project`,
      })),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] === s
      ? (l = t[10])
      : ((l = (0, Q.jsx)(E.Item, { LeftIcon: h, onSelect: s, children: c })), (t[9] = s), (t[10] = l)),
    l
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = u()),
      x(),
      y(),
      g(),
      c(),
      H(),
      P(),
      v(),
      b(),
      l(),
      f(),
      j(),
      L(),
      G(),
      A(),
      F(),
      r(),
      M(),
      z(),
      (Q = s()));
  }))();
}
export { X as n, $ as r, q as t };
//# sourceMappingURL=project-device-picker-6ff444454d02.js.map
