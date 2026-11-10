import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Mz as r,
  Nz as i,
  Rv as a,
  _O as o,
  cO as s,
  fO as c,
  gO as l,
  i3 as u,
  jDt as d,
  lO as f,
  mO as p,
  oO as m,
  r3 as h,
  sO as g,
  t3 as _,
  vO as v,
  vzt as y,
  xMt as b,
  zv as x,
} from "./app-shared-bbfeca5e5737.js";
import { _F as S, hF as C } from "./app-initial-5851df3f6cb1.js";
function w(e) {
  let i = (0, D.c)(11),
    { ref: o, title: s, subtitle: c, action: l, onBack: u, children: d } = e,
    f,
    p;
  i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, O.jsx)(r, { className: `rtl:rotate-180`, asset: a })),
      (p = (0, O.jsx)(n, {
        id: `settings.chatGpt.security.back`,
        defaultMessage: `Back`,
        description: `Button in a Security and login settings subpage that returns to its parent page without changing account settings.`,
      })),
      (i[0] = f),
      (i[1] = p))
    : ((f = i[0]), (p = i[1]));
  let m;
  i[2] === u
    ? (m = i[3])
    : ((m = (0, O.jsxs)(t, { color: `ghostActive`, size: `toolbar`, onClick: u, children: [f, p] })),
      (i[2] = u),
      (i[3] = m));
  let h;
  return (
    i[4] !== l || i[5] !== d || i[6] !== o || i[7] !== c || i[8] !== m || i[9] !== s
      ? ((h = (0, O.jsx)(C, { ref: o, title: s, subtitle: c, action: l, backSlot: m, children: d })),
        (i[4] = l),
        (i[5] = d),
        (i[6] = o),
        (i[7] = c),
        (i[8] = m),
        (i[9] = s),
        (i[10] = h))
      : (h = i[10]),
    h
  );
}
function T(e) {
  let r = (0, D.c)(3),
    { isError: i, onRetry: a } = e,
    o;
  return (
    r[0] !== i || r[1] !== a
      ? ((o = i
          ? (0, O.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-col items-start gap-3 text-sm text-secondary`,
              children: [
                (0, O.jsx)(n, {
                  id: `settings.chatGpt.security.loadError`,
                  defaultMessage: `Couldn’t load security settings. Please try again`,
                  description: `Error on a ChatGPT Security and login settings page when its account data request fails. The retry button reloads this data.`,
                }),
                (0, O.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: a,
                  children: (0, O.jsx)(n, {
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
                (0, O.jsx)(h, {}),
                (0, O.jsx)(n, {
                  id: `settings.chatGpt.security.loading`,
                  defaultMessage: `Loading security settings…`,
                  description: `Loading status while a ChatGPT Security and login settings page fetches account data.`,
                }),
              ],
            })),
        (r[0] = i),
        (r[1] = a),
        (r[2] = o))
      : (o = r[2]),
    o
  );
}
function E(e) {
  let r = (0, D.c)(38),
    {
      title: i,
      children: a,
      confirmLabel: c,
      onConfirm: u,
      onClose: d,
      isPending: h,
      isError: _,
      errorMessage: v,
      informational: y,
      cancelLabel: b,
      confirmColor: x,
    } = e,
    S = _ !== void 0 && _,
    C = y !== void 0 && y,
    w;
  r[0] === a
    ? (w = r[1])
    : ((w = a == null ? { "aria-describedby": void 0 } : void 0), (r[0] = a), (r[1] = w));
  let T;
  r[2] !== h || r[3] !== d
    ? ((T = (e) => {
        !e && !h && d();
      }),
      (r[2] = h),
      (r[3] = d),
      (r[4] = T))
    : (T = r[4]);
  let E;
  r[5] !== h || r[6] !== u
    ? ((E = (e) => {
        (e.preventDefault(), h || u());
      }),
      (r[5] = h),
      (r[6] = u),
      (r[7] = E))
    : (E = r[7]);
  let k;
  r[8] === i
    ? (k = r[9])
    : ((k = (0, O.jsx)(f, {
        children: (0, O.jsx)(s, { title: (0, O.jsx)(o, { className: `select-none`, children: i }) }),
      })),
      (r[8] = i),
      (r[9] = k));
  let A;
  r[10] === a
    ? (A = r[11])
    : ((A =
        a == null
          ? null
          : (0, O.jsx)(f, {
              spacing: `large`,
              children: (0, O.jsx)(l, {
                asChild: !0,
                children: (0, O.jsx)(`div`, { className: `text-sm text-secondary`, children: a }),
              }),
            })),
      (r[10] = a),
      (r[11] = A));
  let j;
  r[12] !== v || r[13] !== S
    ? ((j = S
        ? (0, O.jsx)(f, {
            children: (0, O.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children:
                v ??
                (0, O.jsx)(n, {
                  id: `settings.chatGpt.security.actionFailed`,
                  defaultMessage: `Couldn’t complete this action. Please try again`,
                  description: `Inline error after a confirmed account security action fails. The dialog stays open so the user can retry or cancel.`,
                }),
            }),
          })
        : null),
      (r[12] = v),
      (r[13] = S),
      (r[14] = j))
    : (j = r[14]);
  let M = !C,
    N;
  r[15] !== b || r[16] !== C || r[17] !== h || r[18] !== d
    ? ((N = C
        ? null
        : (0, O.jsx)(t, {
            type: `button`,
            color: `secondary`,
            disabled: h,
            onClick: d,
            children:
              b ??
              (0, O.jsx)(n, {
                id: `settings.chatGpt.security.cancel`,
                defaultMessage: `Cancel`,
                description: `Dismisses an account security confirmation without changing authentication, devices, or app access.`,
              }),
          })),
      (r[15] = b),
      (r[16] = C),
      (r[17] = h),
      (r[18] = d),
      (r[19] = N))
    : (N = r[19]);
  let P = x ?? (C ? `primary` : `danger`),
    F;
  r[20] !== c || r[21] !== h || r[22] !== P
    ? ((F = (0, O.jsx)(t, { type: `submit`, color: P, loading: h, disabled: h, children: c })),
      (r[20] = c),
      (r[21] = h),
      (r[22] = P),
      (r[23] = F))
    : (F = r[23]);
  let I;
  r[24] !== N || r[25] !== F || r[26] !== M
    ? ((I = (0, O.jsx)(f, { children: (0, O.jsxs)(g, { expandSingleButton: M, children: [N, F] }) })),
      (r[24] = N),
      (r[25] = F),
      (r[26] = M),
      (r[27] = I))
    : (I = r[27]);
  let L;
  r[28] !== I || r[29] !== E || r[30] !== k || r[31] !== A || r[32] !== j
    ? ((L = (0, O.jsxs)(m, { as: `form`, onSubmit: E, children: [k, A, j, I] })),
      (r[28] = I),
      (r[29] = E),
      (r[30] = k),
      (r[31] = A),
      (r[32] = j),
      (r[33] = L))
    : (L = r[33]);
  let R;
  return (
    r[34] !== L || r[35] !== w || r[36] !== T
      ? ((R = (0, O.jsx)(p, { open: !0, contentProps: w, onOpenChange: T, children: L })),
        (r[34] = L),
        (r[35] = w),
        (r[36] = T),
        (r[37] = R))
      : (R = r[37]),
    R
  );
}
var D, O;
function k() {
  return (k = e(() => {
    ((D = y()), x(), d(), _(), v(), c(), i(), u(), S(), (O = b()));
  }))();
}
export { k as i, T as n, w as r, E as t };
//# sourceMappingURL=shared-68e21d781554.js.map
