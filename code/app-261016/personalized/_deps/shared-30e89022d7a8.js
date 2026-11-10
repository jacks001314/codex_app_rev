import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  DB as n,
  HO as r,
  IO as i,
  JO as a,
  KO as o,
  LNt as s,
  LO as c,
  OB as l,
  PBt as u,
  RO as d,
  WO as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  dy as g,
  e6 as _,
  qO as v,
  tkt as y,
  uy as b,
  zO as x,
} from "./app-shared-2feb3d4c6fcc.js";
import { QF as S, eI as C } from "./app-initial-ad16eaadf81f.js";
function w(e) {
  let t = (0, D.c)(11),
    { ref: r, title: i, subtitle: a, action: o, onBack: s, children: c } = e,
    l,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, O.jsx)(n, { className: `rtl:rotate-180`, asset: b })),
      (u = (0, O.jsx)(y, {
        id: `settings.chatGpt.security.back`,
        defaultMessage: `Back`,
        description: `Button in a Security and login settings subpage that returns to its parent page without changing account settings.`,
      })),
      (t[0] = l),
      (t[1] = u))
    : ((l = t[0]), (u = t[1]));
  let d;
  t[2] === s
    ? (d = t[3])
    : ((d = (0, O.jsxs)(m, { color: `ghostActive`, size: `toolbar`, onClick: s, children: [l, u] })),
      (t[2] = s),
      (t[3] = d));
  let f;
  return (
    t[4] !== o || t[5] !== c || t[6] !== r || t[7] !== a || t[8] !== d || t[9] !== i
      ? ((f = (0, O.jsx)(S, { ref: r, title: i, subtitle: a, action: o, backSlot: d, children: c })),
        (t[4] = o),
        (t[5] = c),
        (t[6] = r),
        (t[7] = a),
        (t[8] = d),
        (t[9] = i),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function T(e) {
  let n = (0, D.c)(3),
    { isError: r, onRetry: i } = e,
    a;
  return (
    n[0] !== r || n[1] !== i
      ? ((a = r
          ? (0, O.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-col items-start gap-3 text-sm text-secondary`,
              children: [
                (0, O.jsx)(y, {
                  id: `settings.chatGpt.security.loadError`,
                  defaultMessage: `Couldn’t load security settings. Please try again`,
                  description: `Error on a ChatGPT Security and login settings page when its account data request fails. The retry button reloads this data.`,
                }),
                (0, O.jsx)(m, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: i,
                  children: (0, O.jsx)(y, {
                    id: `settings.chatGpt.security.retry`,
                    defaultMessage: `Retry`,
                    description: `Button beside an error in ChatGPT Security and login settings that retries loading account data.`,
                  }),
                }),
              ],
            })
          : (0, O.jsxs)(`div`, {
              role: `status`,
              className: `flex items-center gap-2 text-sm text-secondary`,
              children: [
                (0, O.jsx)(t, {}),
                (0, O.jsx)(y, {
                  id: `settings.chatGpt.security.loading`,
                  defaultMessage: `Loading security settings…`,
                  description: `Loading status while a ChatGPT Security and login settings page fetches account data.`,
                }),
              ],
            })),
        (n[0] = r),
        (n[1] = i),
        (n[2] = a))
      : (a = n[2]),
    a
  );
}
function E(e) {
  let t = (0, D.c)(38),
    {
      title: n,
      children: r,
      confirmLabel: a,
      onConfirm: s,
      onClose: l,
      isPending: u,
      isError: p,
      errorMessage: h,
      informational: g,
      cancelLabel: _,
      confirmColor: b,
    } = e,
    S = p !== void 0 && p,
    C = g !== void 0 && g,
    w;
  t[0] === r
    ? (w = t[1])
    : ((w = r == null ? { "aria-describedby": void 0 } : void 0), (t[0] = r), (t[1] = w));
  let T;
  t[2] !== u || t[3] !== l
    ? ((T = (e) => {
        !e && !u && l();
      }),
      (t[2] = u),
      (t[3] = l),
      (t[4] = T))
    : (T = t[4]);
  let E;
  t[5] !== u || t[6] !== s
    ? ((E = (e) => {
        (e.preventDefault(), u || s());
      }),
      (t[5] = u),
      (t[6] = s),
      (t[7] = E))
    : (E = t[7]);
  let k;
  t[8] === n
    ? (k = t[9])
    : ((k = (0, O.jsx)(x, {
        children: (0, O.jsx)(d, { title: (0, O.jsx)(v, { className: `select-none`, children: n }) }),
      })),
      (t[8] = n),
      (t[9] = k));
  let A;
  t[10] === r
    ? (A = t[11])
    : ((A =
        r == null
          ? null
          : (0, O.jsx)(x, {
              spacing: `large`,
              children: (0, O.jsx)(o, {
                asChild: !0,
                children: (0, O.jsx)(`div`, { className: `text-sm text-secondary`, children: r }),
              }),
            })),
      (t[10] = r),
      (t[11] = A));
  let j;
  t[12] !== h || t[13] !== S
    ? ((j = S
        ? (0, O.jsx)(x, {
            children: (0, O.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children:
                h ??
                (0, O.jsx)(y, {
                  id: `settings.chatGpt.security.actionFailed`,
                  defaultMessage: `Couldn’t complete this action. Please try again`,
                  description: `Inline error after a confirmed account security action fails. The dialog stays open so the user can retry or cancel.`,
                }),
            }),
          })
        : null),
      (t[12] = h),
      (t[13] = S),
      (t[14] = j))
    : (j = t[14]);
  let M = !C,
    N;
  t[15] !== _ || t[16] !== C || t[17] !== u || t[18] !== l
    ? ((N = C
        ? null
        : (0, O.jsx)(m, {
            type: `button`,
            color: `secondary`,
            disabled: u,
            onClick: l,
            children:
              _ ??
              (0, O.jsx)(y, {
                id: `settings.chatGpt.security.cancel`,
                defaultMessage: `Cancel`,
                description: `Dismisses an account security confirmation without changing authentication, devices, or app access.`,
              }),
          })),
      (t[15] = _),
      (t[16] = C),
      (t[17] = u),
      (t[18] = l),
      (t[19] = N))
    : (N = t[19]);
  let P = b ?? (C ? `primary` : `danger`),
    F;
  t[20] !== a || t[21] !== u || t[22] !== P
    ? ((F = (0, O.jsx)(m, { type: `submit`, color: P, loading: u, disabled: u, children: a })),
      (t[20] = a),
      (t[21] = u),
      (t[22] = P),
      (t[23] = F))
    : (F = t[23]);
  let I;
  t[24] !== N || t[25] !== F || t[26] !== M
    ? ((I = (0, O.jsx)(x, { children: (0, O.jsxs)(c, { expandSingleButton: M, children: [N, F] }) })),
      (t[24] = N),
      (t[25] = F),
      (t[26] = M),
      (t[27] = I))
    : (I = t[27]);
  let L;
  t[28] !== I || t[29] !== E || t[30] !== k || t[31] !== A || t[32] !== j
    ? ((L = (0, O.jsxs)(i, { as: `form`, onSubmit: E, children: [k, A, j, I] })),
      (t[28] = I),
      (t[29] = E),
      (t[30] = k),
      (t[31] = A),
      (t[32] = j),
      (t[33] = L))
    : (L = t[33]);
  let R;
  return (
    t[34] !== L || t[35] !== w || t[36] !== T
      ? ((R = (0, O.jsx)(f, { open: !0, contentProps: w, onOpenChange: T, children: L })),
        (t[34] = L),
        (t[35] = w),
        (t[36] = T),
        (t[37] = R))
      : (R = t[37]),
    R
  );
}
var D, O;
function k() {
  return (k = e(() => {
    ((D = u()), g(), p(), h(), a(), r(), l(), _(), C(), (O = s()));
  }))();
}
export { k as i, T as n, w as r, E as t };
//# sourceMappingURL=shared-30e89022d7a8.js.map
