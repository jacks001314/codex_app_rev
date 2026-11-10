import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  Cot as i,
  DV as a,
  Ext as o,
  IDt as s,
  Ixt as c,
  Mz as l,
  NV as u,
  Nz as d,
  Pxt as f,
  Q$ as p,
  TJ as m,
  TO as h,
  VDt as g,
  Vxt as _,
  YU as v,
  Z$ as y,
  ZU as b,
  _xt as x,
  jDt as S,
  qG as C,
  t3 as w,
  vzt as T,
  wot as E,
  wxt as D,
  xMt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  $5t as k,
  Grt as A,
  LTn as j,
  OWt as M,
  RTn as N,
  Wrt as P,
  bMr as ee,
  e7t as F,
  esn as I,
  fMr as L,
  gDn as R,
  hDn as z,
  ifn as B,
  kWt as V,
  nfn as H,
  tsn as U,
} from "./app-initial-5851df3f6cb1.js";
import { r as W, t as G } from "./remote-connection-editor-draft-ccc3b80c4a23.js";
function K(e) {
  let t = (0, Z.c)(42),
    { selectedHostId: n, onSelect: i, remoteOnly: o, readOnly: c, disabled: l } = e,
    d = o !== void 0 && o,
    f = c !== void 0 && c,
    p = l !== void 0 && l,
    m = g(),
    { remoteConnections: y } = _(R),
    x = A(y),
    S = B(),
    C = V(),
    w = _(U),
    T = _(ee),
    E = _(N),
    D = !d && w && !C && (E === `codex` || T),
    O = S && (!C || d),
    k;
  if (t[0] !== y || t[1] !== n) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => e.hostId === n), (t[3] = n), (t[4] = e)),
      (k = y.find(e)),
      (t[0] = y),
      (t[1] = n),
      (t[2] = k));
  } else k = t[2];
  let j = k;
  if (f) {
    let e;
    t[5] === n
      ? (e = t[6])
      : ((e = n === `local` ? (0, Q.jsx)(v, {}) : (0, Q.jsx)(b, {})), (t[5] = n), (t[6] = e));
    let r;
    t[7] !== j?.displayName || t[8] !== n
      ? ((r =
          n === `local`
            ? (0, Q.jsx)(s, {
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
          ? (0, Q.jsx)(s, {
              id: `projectSetup.device.localPrompt`,
              defaultMessage: `Add a folder on <device>this computer</device>`,
              description: `Prompt to add source folders. The device tag highlights the selected local computer`,
              values: { device: J },
            })
          : (0, Q.jsx)(s, {
              id: `projectSetup.device.remotePrompt`,
              defaultMessage: `Add a folder on <device>{deviceName}</device>`,
              description: `Prompt to add source folders. deviceName is the selected remote computer; the device tag highlights it`,
              values: { deviceName: j?.displayName ?? ``, device: q },
            })),
      (t[15] = j?.displayName),
      (t[16] = n),
      (t[17] = M))
    : (M = t[17]);
  let P = M,
    F;
  t[18] === m
    ? (F = t[19])
    : ((F = m.formatMessage({
        id: `projectSetup.device.label`,
        defaultMessage: `Project device`,
        description: `Accessible label for selecting the computer containing project source folders`,
      })),
      (t[18] = m),
      (t[19] = F));
  let I;
  t[20] !== P || t[21] !== n
    ? ((I = (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children:
          n == null
            ? (0, Q.jsx)(s, {
                id: `projectSetup.device.choose`,
                defaultMessage: `Choose a device`,
                description: `Prompt to select a computer for project source folders`,
              })
            : P,
      })),
      (t[20] = P),
      (t[21] = n),
      (t[22] = I))
    : (I = t[22]);
  let L;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsx)(u, { className: `text-default` })), (t[23] = L))
    : (L = t[23]);
  let z;
  t[24] !== p || t[25] !== F || t[26] !== I
    ? ((z = (0, Q.jsxs)(`button`, {
        type: `button`,
        disabled: p,
        "aria-label": F,
        className: `flex max-w-full min-w-0 cursor-interaction items-center justify-center gap-1 text-sm text-secondary`,
        children: [I, L],
      })),
      (t[24] = p),
      (t[25] = F),
      (t[26] = I),
      (t[27] = z))
    : (z = t[27]);
  let H;
  t[28] !== D || t[29] !== i || t[30] !== n
    ? ((H = D
        ? (0, Q.jsx)(h.Item, {
            LeftIcon: v,
            RightIcon: n === `local` ? a : void 0,
            onSelect: () => i(`local`),
            children: (0, Q.jsx)(s, {
              id: `projectSetup.device.thisComputer`,
              defaultMessage: `This computer`,
              description: `Label for source folders on the current computer`,
            }),
          })
        : null),
      (t[28] = D),
      (t[29] = i),
      (t[30] = n),
      (t[31] = H))
    : (H = t[31]);
  let W;
  t[32] !== O || t[33] !== x || t[34] !== i || t[35] !== n
    ? ((W = O
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsxs)(h.Section, {
                children: [
                  (0, Q.jsx)(h.SectionLabel, {
                    children: (0, Q.jsx)(s, {
                      id: `projectSetup.device.remoteDevices`,
                      defaultMessage: `Remote devices`,
                      description: `Heading for connected remote computers in the project device menu`,
                    }),
                  }),
                  x.map((e) =>
                    (0, Q.jsx)(
                      h.Item,
                      {
                        LeftIcon: b,
                        RightIcon: n === e.hostId ? a : void 0,
                        onSelect: () => i(e.hostId),
                        children: (0, Q.jsx)(`span`, {
                          className: `min-w-0 truncate`,
                          children: e.displayName,
                        }),
                      },
                      e.hostId,
                    ),
                  ),
                  x.length === 0
                    ? (0, Q.jsx)(h.Item, {
                        disabled: !0,
                        children: (0, Q.jsx)(s, {
                          id: `workspaceRootDialog.remoteEmpty`,
                          defaultMessage: `No connected remotes`,
                          description: `Label shown when no connected remotes are available in the remote workspace path dialog`,
                        }),
                      })
                    : null,
                ],
              }),
              (0, Q.jsx)(Q.Fragment, { children: (0, Q.jsx)(X, { onConnected: i }) }),
            ],
          })
        : null),
      (t[32] = O),
      (t[33] = x),
      (t[34] = i),
      (t[35] = n),
      (t[36] = W))
    : (W = t[36]);
  let G;
  return (
    t[37] !== p || t[38] !== H || t[39] !== W || t[40] !== z
      ? ((G = (0, Q.jsxs)(r, {
          align: `center`,
          disabled: p,
          modal: !0,
          contentWidth: `menuBounded`,
          contentMaxHeight: `list`,
          triggerButton: z,
          children: [H, W],
        })),
        (t[37] = p),
        (t[38] = H),
        (t[39] = W),
        (t[40] = z),
        (t[41] = G))
      : (G = t[41]),
    G
  );
}
function q(e) {
  return (0, Q.jsx)(`span`, { className: `text-default`, children: e });
}
function J(e) {
  return (0, Q.jsx)(`span`, { className: `text-default`, children: e });
}
function Y(e) {
  let n = (0, Z.c)(8),
    { children: r, onAdd: i, disabled: a } = e,
    o = a !== void 0 && a,
    c,
    u;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(l, { asset: y })),
      (u = (0, Q.jsx)(s, {
        id: `projectSetup.sources.add`,
        defaultMessage: `Add`,
        description: `Button that opens the folder picker for the selected project device`,
      })),
      (n[0] = c),
      (n[1] = u))
    : ((c = n[0]), (u = n[1]));
  let d;
  n[2] !== o || n[3] !== i
    ? ((d = (0, Q.jsxs)(t, {
        color: `secondary`,
        radius: `full`,
        type: `button`,
        disabled: o,
        onClick: i,
        children: [c, u],
      })),
      (n[2] = o),
      (n[3] = i),
      (n[4] = d))
    : (d = n[4]);
  let f;
  return (
    n[5] !== r || n[6] !== d
      ? ((f = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-col items-center justify-center gap-3 p-6 select-none`,
          children: [r, d],
        })),
        (n[5] = r),
        (n[6] = d),
        (n[7] = f))
      : (f = n[7]),
    f
  );
}
function X(e) {
  let t = (0, Z.c)(11),
    { onConnected: n } = e,
    r = c(i),
    a = D(),
    l = o(),
    u;
  t[0] !== a.hash ||
  t[1] !== a.pathname ||
  t[2] !== a.search ||
  t[3] !== a.state ||
  t[4] !== l ||
  t[5] !== n ||
  t[6] !== r
    ? ((u = () => {
        let e = `${a.pathname}${a.search}${a.hash}`;
        (r.set(F, {
          draft: G(),
          hostId: null,
          onCancel: () => {
            (r.set(F, null), l(e, { replace: !0, state: a.state }));
          },
          onConnected: (t) => {
            (n(t), r.set(F, null), l(e, { replace: !0, state: a.state }));
          },
        }),
          l(`/settings/connections/ssh/add`));
      }),
      (t[0] = a.hash),
      (t[1] = a.pathname),
      (t[2] = a.search),
      (t[3] = a.state),
      (t[4] = l),
      (t[5] = n),
      (t[6] = r),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(s, {
        id: `projectSetupDialog.addRemoteConnection`,
        defaultMessage: `Add remote`,
        description: `Menu item that sets up a new SSH connection while creating a remote project`,
      })),
      (t[8] = d))
    : (d = t[8]);
  let f;
  return (
    t[9] === u
      ? (f = t[10])
      : ((f = (0, Q.jsx)(h.Item, { LeftIcon: C, onSelect: u, children: d })), (t[9] = u), (t[10] = f)),
    f
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = T()),
      p(),
      f(),
      S(),
      x(),
      P(),
      L(),
      w(),
      n(),
      d(),
      m(),
      M(),
      k(),
      W(),
      H(),
      z(),
      E(),
      I(),
      j(),
      (Q = O()));
  }))();
}
export { Y as n, $ as r, K as t };
//# sourceMappingURL=project-device-picker-c835093b649c.js.map
