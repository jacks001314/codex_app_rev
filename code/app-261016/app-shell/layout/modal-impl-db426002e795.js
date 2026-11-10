import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  HO as i,
  IO as a,
  JO as o,
  LNt as s,
  LO as c,
  Mst as l,
  PBt as u,
  Qst as d,
  RO as f,
  WO as p,
  XOt as m,
  Y3 as h,
  Z3 as g,
  ZSt as _,
  e6 as v,
  jst as y,
  qO as b,
  tkt as x,
  vD as S,
  yD as C,
  zO as w,
} from "./app-shared-2feb3d4c6fcc.js";
import { Dz as T, Ez as E, imr as D, rmr as O } from "./app-initial-ad16eaadf81f.js";
import { i as k, n as A } from "./queries-ea9f18d3fc31.js";
import { n as j, r as M, t as N } from "./form-64562a4532a4.js";
function P(e) {
  let r = (0, I.c)(25),
    { workspaceId: i, surface: a, onClose: o } = e,
    s = n(d),
    { accountId: c } = D(),
    u = c === i,
    f;
  r[0] !== s || r[1] !== i ? ((f = A(s, i)), (r[0] = s), (r[1] = i), (r[2] = f)) : (f = r[2]);
  let m;
  r[3] !== u || r[4] !== f
    ? ((m = { ...f, staleTime: 0, enabled: u }), (r[3] = u), (r[4] = f), (r[5] = m))
    : (m = r[5]);
  let { data: g, isPending: _, isError: v, refetch: y } = l(m),
    b = null,
    C;
  if (!u) {
    let e;
    (r[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, L.jsx)(S, {
          type: `error`,
          content: (0, L.jsx)(x, {
            id: `codex.workspaceInvite.workspaceChanged`,
            defaultMessage: `Your workspace changed. Close this window and open invitations again.`,
            description: `Explains why an invitation form for a previous workspace is unavailable`,
          }),
        })),
        (r[6] = e))
      : (e = r[6]),
      (b = e));
  } else if (v || (!_ && g == null)) {
    let e;
    (r[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, L.jsx)(S, {
          type: `error`,
          content: (0, L.jsx)(x, {
            id: `codex.workspaceInvite.loadError`,
            defaultMessage: `Couldn't load your workspace. Try again.`,
            description: `Error loading workspace details for standard member invitations`,
          }),
        })),
        (r[7] = e))
      : (e = r[7]),
      (b = e));
    let t;
    r[8] === y ? (t = r[9]) : ((t = () => void y()), (r[8] = y), (r[9] = t));
    let n;
    r[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, L.jsx)(x, {
          id: `codex.workspaceInvite.retry`,
          defaultMessage: `Try again`,
          description: `Retries loading the workspace invitation form`,
        })),
        (r[10] = n))
      : (n = r[10]);
    let i;
    (r[11] === t
      ? (i = r[12])
      : ((i = (0, L.jsx)(h, { type: `button`, color: `primary`, onClick: t, children: n })),
        (r[11] = t),
        (r[12] = i)),
      (C = i));
  }
  let w;
  r[13] === o
    ? (w = r[14])
    : ((w = (e) => {
        e || o();
      }),
      (r[13] = o),
      (r[14] = w));
  let T;
  r[15] !== o || r[16] !== a || r[17] !== C || r[18] !== b || r[19] !== g || r[20] !== i
    ? ((T =
        b != null || g == null
          ? (0, L.jsx)(F, {
              content:
                b ??
                (0, L.jsx)(`div`, {
                  className: `flex min-h-48 items-center justify-center`,
                  children: (0, L.jsx)(t, { className: `size-6 text-tertiary` }),
                }),
              footerAction: C,
            })
          : (0, L.jsx)(j, {
              workspace: g,
              workspaceId: i,
              surface: a,
              maxInvites: null,
              availablePaidSeatCounts: null,
              billingLinkOpenTarget: `external-browser`,
              onCancel: o,
              onSuccess: o,
              layout: F,
            })),
      (r[15] = o),
      (r[16] = a),
      (r[17] = C),
      (r[18] = b),
      (r[19] = g),
      (r[20] = i),
      (r[21] = T))
    : (T = r[21]);
  let E;
  return (
    r[22] !== w || r[23] !== T
      ? ((E = (0, L.jsx)(p, { open: !0, variant: `chatgpt`, size: `wide`, onOpenChange: w, children: T })),
        (r[22] = w),
        (r[23] = T),
        (r[24] = E))
      : (E = r[24]),
    E
  );
}
function F(e) {
  let t = (0, I.c)(15),
    { content: n, footerAction: r, busy: i, canSubmit: o, onSubmit: s } = e,
    l = i !== void 0 && i,
    u = o !== void 0 && o,
    d;
  t[0] !== u || t[1] !== s
    ? ((d = (e) => {
        (e.preventDefault(), u && s?.());
      }),
      (t[0] = u),
      (t[1] = s),
      (t[2] = d))
    : (d = t[2]);
  let p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, L.jsx)(f, { title: (0, L.jsx)(b, { children: (0, L.jsx)(x, { ...T.title }) }) })), (t[3] = p))
    : (p = t[3]);
  let m;
  t[4] === n
    ? (m = t[5])
    : ((m = (0, L.jsx)(w, { className: `min-h-0 overflow-y-auto`, children: n })), (t[4] = n), (t[5] = m));
  let g;
  t[6] !== l || t[7] !== u || t[8] !== r || t[9] !== s
    ? ((g =
        (r != null || s != null) &&
        (0, L.jsx)(c, {
          expandSingleButton: !1,
          children:
            r ??
            (0, L.jsx)(h, {
              type: `submit`,
              color: `primary`,
              disabled: !u,
              loading: l,
              children: (0, L.jsx)(N, { busy: l }),
            }),
        })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = r),
      (t[9] = s),
      (t[10] = g))
    : (g = t[10]);
  let _;
  return (
    t[11] !== d || t[12] !== m || t[13] !== g
      ? ((_ = (0, L.jsxs)(a, {
          as: `form`,
          size: `scrollable`,
          noValidate: !0,
          onSubmit: d,
          children: [p, m, g],
        })),
        (t[11] = d),
        (t[12] = m),
        (t[13] = g),
        (t[14] = _))
      : (_ = t[14]),
    _
  );
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = u()), y(), _(), m(), O(), C(), g(), o(), i(), v(), k(), r(), M(), E(), (L = s()));
  }))();
}
R();
export { P as WorkspaceInviteDialog };
//# sourceMappingURL=modal-impl-db426002e795.js.map
