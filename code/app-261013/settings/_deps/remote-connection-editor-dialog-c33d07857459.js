import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BE as n,
  HE as r,
  IDt as i,
  Pxt as a,
  RE as o,
  TJ as s,
  UE as c,
  VDt as l,
  VE as u,
  _O as d,
  cO as f,
  cz as p,
  fO as m,
  jDt as h,
  lO as g,
  mO as _,
  oO as ee,
  sO as v,
  sz as y,
  t3 as b,
  vO as x,
  vzt as S,
  xMt as C,
  xU as w,
  yzt as T,
  zxt as E,
} from "./app-shared-bbfeca5e5737.js";
import {
  B7t as D,
  Cnn as O,
  DPn as k,
  Snn as A,
  TPn as j,
  Xd as M,
  Yd as N,
  bnn as P,
  dnn as F,
  fnn as I,
  unn as L,
  xnn as R,
  z7t as z,
} from "./app-initial-5851df3f6cb1.js";
import { n as B, t as V } from "./color-palette-f2eb706d849c.js";
import { n as H, t as U } from "./useForm-9d52db816610.js";
import { n as W, r as G } from "./remote-connection-editor-draft-ccc3b80c4a23.js";
function K(e) {
  let t = (0, q.c)(6),
    { hostId: n, color: r, disabled: a, onChange: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(`span`, {
        className: `text-xs font-medium text-default select-none`,
        children: (0, Y.jsx)(i, {
          id: `codex.remoteConnectionEditor.color`,
          defaultMessage: `Color`,
          description: `Label for the color of a remote connection`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  return (
    t[1] !== r || t[2] !== a || t[3] !== n || t[4] !== o
      ? ((c = (0, Y.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2`,
          children: [s, (0, Y.jsx)(te, { hostId: n, color: r, disabled: a, onChange: o })],
        })),
        (t[1] = r),
        (t[2] = a),
        (t[3] = n),
        (t[4] = o),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function te(e) {
  let a = (0, q.c)(38),
    { hostId: s, color: c, disabled: d, embedded: f, onChange: p } = e,
    m = f !== void 0 && f,
    h = l(),
    g;
  a[0] === h
    ? (g = a[1])
    : ((g = h.formatMessage({
        id: `codex.remoteHostColorPicker.pickerAriaLabel`,
        defaultMessage: `Change connection color`,
        description: `Accessible label for the connection color picker button`,
      })),
      (a[0] = h),
      (a[1] = g));
  let _ = g,
    ee = F(),
    v = I(ee),
    b = E(D, s),
    [x, S] = (0, J.useState)(!1),
    C = m ? `ghostActive` : `secondary`,
    T = m ? `inputSegment` : `settingsSelect`,
    O = !m,
    k;
  a[2] !== c || a[3] !== b || a[4] !== v
    ? ((k = A(c, v) ?? b), (a[2] = c), (a[3] = b), (a[4] = v), (a[5] = k))
    : (k = a[5]);
  let j;
  a[6] === k ? (j = a[7]) : ((j = (0, Y.jsx)(w, { style: { color: k } })), (a[6] = k), (a[7] = j));
  let M;
  a[8] !== _ || a[9] !== d || a[10] !== C || a[11] !== T || a[12] !== O || a[13] !== j
    ? ((M = (0, Y.jsx)(t, {
        color: C,
        size: T,
        uniform: O,
        type: `button`,
        disabled: d,
        "aria-label": _,
        children: j,
      })),
      (a[8] = _),
      (a[9] = d),
      (a[10] = C),
      (a[11] = T),
      (a[12] = O),
      (a[13] = j),
      (a[14] = M))
    : (M = a[14]);
  let N;
  a[15] !== _ || a[16] !== x || a[17] !== M
    ? ((N = (0, Y.jsx)(r, {
        asChild: !0,
        children: (0, Y.jsx)(y, {
          cloneCustomTrigger: !0,
          triggerPopupOpen: x,
          tooltipContent: _,
          children: M,
        }),
      })),
      (a[15] = _),
      (a[16] = x),
      (a[17] = M),
      (a[18] = N))
    : (N = a[18]);
  let L = m ? `start` : `end`,
    z;
  a[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Y.jsx)(u, {
        className: `px-2 py-1 text-sm text-default select-none`,
        children: (0, Y.jsx)(i, {
          id: `codex.remoteHostColorPicker.title`,
          defaultMessage: `Connection color`,
          description: `Title above preset colors for a remote connection`,
        }),
      })),
      (a[19] = z))
    : (z = a[19]);
  let B;
  a[20] === c ? (B = a[21]) : ((B = P(c) ?? void 0), (a[20] = c), (a[21] = B));
  let H;
  a[22] === h
    ? (H = a[23])
    : ((H = h.formatMessage({
        id: `codex.remoteHostColorPicker.colors`,
        defaultMessage: `Connection colors`,
        description: `Accessible label for remote connection color presets`,
      })),
      (a[22] = h),
      (a[23] = H));
  let U;
  a[24] === p
    ? (U = a[25])
    : ((U = (e) => {
        (p(R(e)), S(!1));
      }),
      (a[24] = p),
      (a[25] = U));
  let W;
  a[26] !== b || a[27] !== B || a[28] !== H || a[29] !== U
    ? ((W = (0, Y.jsx)(V, { color: B, defaultSwatchColor: b, groupAriaLabel: H, onColorChange: U })),
      (a[26] = b),
      (a[27] = B),
      (a[28] = H),
      (a[29] = U),
      (a[30] = W))
    : (W = a[30]);
  let G;
  a[31] !== L || a[32] !== W
    ? ((G = (0, Y.jsxs)(n, {
        align: L,
        size: `content`,
        sideOffset: 6,
        className: `gap-1 p-2`,
        children: [z, W],
      })),
      (a[31] = L),
      (a[32] = W),
      (a[33] = G))
    : (G = a[33]);
  let K;
  return (
    a[34] !== x || a[35] !== G || a[36] !== N
      ? ((K = (0, Y.jsxs)(o, { modal: !0, open: x, onOpenChange: S, children: [N, G] })),
        (a[34] = x),
        (a[35] = G),
        (a[36] = N),
        (a[37] = K))
      : (K = a[37]),
    K
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = S()), a(), (J = T()), h(), b(), s(), c(), p(), O(), B(), L(), z(), (Y = C()));
  }))();
}
function Z(e) {
  let n = (0, oe.c)(73),
    {
      open: r,
      mode: a,
      draft: o,
      existingConnections: s,
      editingHostId: c,
      color: u,
      onOpenChange: p,
      onSubmit: m,
      isSaving: h,
    } = e,
    y = l(),
    [b, x] = (0, se.useState)(),
    S = a === `edit` && o.targetKind === `alias`,
    C;
  n[0] !== c || n[1] !== s
    ? ((C = (e) => {
        let t = W({ draft: e, existingConnections: s, editingHostId: c });
        if (t.length !== 0) return t;
      }),
      (n[0] = c),
      (n[1] = s),
      (n[2] = C))
    : (C = n[2]);
  let w = C,
    T;
  n[3] === w
    ? (T = n[4])
    : ((T = {
        onChange: (e) => {
          let { value: t } = e;
          return w(t);
        },
        onSubmit: (e) => {
          let { value: t } = e;
          return w(t);
        },
      }),
      (n[3] = w),
      (n[4] = T));
  let E;
  n[5] !== b || n[6] !== h || n[7] !== m
    ? ((E = (e) => {
        let { value: t } = e;
        h || m(t, b);
      }),
      (n[5] = b),
      (n[6] = h),
      (n[7] = m),
      (n[8] = E))
    : (E = n[8]);
  let D;
  n[9] !== o || n[10] !== T || n[11] !== E
    ? ((D = { defaultValues: o, validators: T, onSubmit: E }),
      (n[9] = o),
      (n[10] = T),
      (n[11] = E),
      (n[12] = D))
    : (D = n[12]);
  let O = H(D),
    k;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing the remote connection editor dialog`,
      })),
      (n[13] = k))
    : (k = n[13]);
  let A = a === `add` ? `default` : `compact`,
    M;
  n[14] === O
    ? (M = n[15])
    : ((M = (e) => {
        (e.preventDefault(), O.handleSubmit());
      }),
      (n[14] = O),
      (n[15] = M));
  let P;
  n[16] === a
    ? (P = n[17])
    : ((P = (0, $.jsx)(g, {
        children: (0, $.jsx)(f, {
          title: (0, $.jsx)(d, {
            children:
              a === `add`
                ? (0, $.jsx)(i, {
                    id: `settings.remoteConnections.dialog.addTitle`,
                    defaultMessage: `Add SSH connection`,
                    description: `Title for add remote connection dialog`,
                  })
                : (0, $.jsx)(i, {
                    id: `settings.remoteConnections.dialog.editTitle`,
                    defaultMessage: `Edit connection`,
                    description: `Title for edit remote connection dialog`,
                  }),
          }),
        }),
      })),
      (n[16] = a),
      (n[17] = P));
  let F;
  n[18] === h
    ? (F = n[19])
    : ((F = (e) =>
        h || e.submissionAttempts === 0 ? [] : (e.errorMap.onChange ?? e.errorMap.onSubmit ?? [])),
      (n[18] = h),
      (n[19] = F));
  let I;
  n[20] !== O.Subscribe || n[21] !== F
    ? ((I = (0, $.jsx)(O.Subscribe, { selector: F, children: re })),
      (n[20] = O.Subscribe),
      (n[21] = F),
      (n[22] = I))
    : (I = n[22]);
  let L;
  n[23] !== u || n[24] !== o || n[25] !== b || n[26] !== c || n[27] !== h || n[28] !== a
    ? ((L = (e) => {
        let t = (0, $.jsx)(i, {
          id: `settings.remoteConnections.dialog.field.displayName`,
          defaultMessage: `Display name`,
          description: `Label for display name field in remote connection editor dialog`,
        });
        return a === `add` || c != null
          ? (0, $.jsxs)(`div`, {
              children: [
                (0, $.jsx)(`label`, {
                  htmlFor: `remote-connection-display-name`,
                  className:
                    a === `add` ? `mb-1 block text-xs font-medium text-default select-none` : `sr-only`,
                  children: t,
                }),
                (0, $.jsx)(j, {
                  variant: `segmented`,
                  leadingControl: (0, $.jsx)(te, {
                    hostId: o.hostId,
                    color: b === void 0 ? u : b,
                    disabled: h,
                    embedded: !0,
                    onChange: x,
                  }),
                  id: `remote-connection-display-name`,
                  autoFocus: a === `add`,
                  value: e.state.value,
                  onChange: (t) => e.handleChange(t.target.value),
                  onBlur: e.handleBlur,
                  disabled: h,
                }),
              ],
            })
          : (0, $.jsx)(ie, {
              label: t,
              value: e.state.value,
              onChange: e.handleChange,
              onBlur: e.handleBlur,
              disabled: h,
            });
      }),
      (n[23] = u),
      (n[24] = o),
      (n[25] = b),
      (n[26] = c),
      (n[27] = h),
      (n[28] = a),
      (n[29] = L))
    : (L = n[29]);
  let R;
  n[30] !== O.Field || n[31] !== L
    ? ((R = (0, $.jsx)(O.Field, { name: `displayName`, children: L })),
      (n[30] = O.Field),
      (n[31] = L),
      (n[32] = R))
    : (R = n[32]);
  let z;
  n[33] !== y || n[34] !== S || n[35] !== h
    ? ((z = (e) =>
        (0, $.jsx)(ie, {
          label: S
            ? (0, $.jsx)(i, {
                id: `settings.remoteConnections.dialog.field.alias`,
                defaultMessage: `Alias`,
                description: `Label for SSH alias field in remote connection editor dialog`,
              })
            : (0, $.jsx)(i, {
                id: `settings.remoteConnections.dialog.field.sshHost`,
                defaultMessage: `Hostname`,
                description: `Label for SSH target field in remote connection editor dialog`,
              }),
          placeholder: S
            ? void 0
            : y.formatMessage({
                id: `settings.remoteConnections.dialog.field.sshHost.placeholder`,
                defaultMessage: `host.com or user@host.com`,
                description: `Placeholder for SSH target field in remote connection editor dialog`,
              }),
          value: e.state.value,
          onChange: e.handleChange,
          onBlur: e.handleBlur,
          disabled: h || S,
        })),
      (n[33] = y),
      (n[34] = S),
      (n[35] = h),
      (n[36] = z))
    : (z = n[36]);
  let B;
  n[37] !== O.Field || n[38] !== z
    ? ((B = (0, $.jsx)(O.Field, { name: `sshHost`, children: z })),
      (n[37] = O.Field),
      (n[38] = z),
      (n[39] = B))
    : (B = n[39]);
  let V;
  n[40] !== O.Field || n[41] !== O.Subscribe || n[42] !== y || n[43] !== S || n[44] !== h
    ? ((V = S
        ? null
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(O.Field, {
                name: `sshPort`,
                children: (e) =>
                  (0, $.jsx)(ie, {
                    label: (0, $.jsxs)($.Fragment, {
                      children: [
                        (0, $.jsx)(i, {
                          id: `settings.remoteConnections.dialog.field.sshPort`,
                          defaultMessage: `SSH port`,
                          description: `Label for SSH port field in remote connection editor dialog`,
                        }),
                        ` `,
                        (0, $.jsx)(`span`, {
                          className: `font-normal text-secondary`,
                          children: (0, $.jsx)(i, {
                            id: `settings.remoteConnections.dialog.field.optional`,
                            defaultMessage: `(optional)`,
                            description: `Marker shown next to optional fields in the remote connection editor dialog`,
                          }),
                        }),
                      ],
                    }),
                    value: e.state.value,
                    onChange: e.handleChange,
                    onBlur: e.handleBlur,
                    disabled: h,
                  }),
              }),
              (0, $.jsx)(O.Field, {
                name: `authMode`,
                children: (e) =>
                  (0, $.jsx)(N, {
                    ariaLabel: y.formatMessage({
                      id: `settings.remoteConnections.dialog.authMode.ariaLabel`,
                      defaultMessage: `SSH authentication method`,
                      description: `Accessible label for choosing the SSH authentication method in the remote connection editor dialog`,
                    }),
                    fullWidth: !0,
                    options: [
                      {
                        id: `none`,
                        disabled: h,
                        label: (0, $.jsx)(i, {
                          id: `settings.remoteConnections.dialog.authMode.none`,
                          defaultMessage: `No Auth`,
                          description: `Option label for using no explicit SSH identity file`,
                        }),
                      },
                      {
                        id: `identity`,
                        disabled: h,
                        label: (0, $.jsx)(i, {
                          id: `settings.remoteConnections.dialog.authMode.identity`,
                          defaultMessage: `Identity`,
                          description: `Option label for using an SSH identity file`,
                        }),
                      },
                    ],
                    selectedId: e.state.value,
                    onSelect: e.handleChange,
                  }),
              }),
              (0, $.jsx)(O.Subscribe, {
                selector: ne,
                children: (e) =>
                  e === `identity`
                    ? (0, $.jsx)(O.Field, {
                        name: `identity`,
                        children: (e) =>
                          (0, $.jsx)(ie, {
                            label: (0, $.jsx)(i, {
                              id: `settings.remoteConnections.dialog.field.identity`,
                              defaultMessage: `Identity file path`,
                              description: `Label for required identity file path field in remote connection editor dialog`,
                            }),
                            value: e.state.value,
                            onChange: e.handleChange,
                            onBlur: e.handleBlur,
                            disabled: h,
                          }),
                      })
                    : null,
              }),
            ],
          })),
      (n[40] = O.Field),
      (n[41] = O.Subscribe),
      (n[42] = y),
      (n[43] = S),
      (n[44] = h),
      (n[45] = V))
    : (V = n[45]);
  let U;
  n[46] !== R || n[47] !== B || n[48] !== V
    ? ((U = (0, $.jsx)(g, {
        children: (0, $.jsxs)(`div`, { className: `grid grid-cols-1 gap-4`, children: [R, B, V] }),
      })),
      (n[46] = R),
      (n[47] = B),
      (n[48] = V),
      (n[49] = U))
    : (U = n[49]);
  let G;
  n[50] === p ? (G = n[51]) : ((G = () => p(!1)), (n[50] = p), (n[51] = G));
  let K;
  n[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for remote connection editor dialog`,
      })),
      (n[52] = K))
    : (K = n[52]);
  let q;
  n[53] !== h || n[54] !== G
    ? ((q = (0, $.jsx)(t, { color: `ghost`, type: `button`, disabled: h, onClick: G, children: K })),
      (n[53] = h),
      (n[54] = G),
      (n[55] = q))
    : (q = n[55]);
  let J;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.apply`,
        defaultMessage: `Save`,
        description: `Save button for remote connection editor dialog`,
      })),
      (n[56] = J))
    : (J = n[56]);
  let Y;
  n[57] === h
    ? (Y = n[58])
    : ((Y = (0, $.jsx)(t, { color: `primary`, type: `submit`, loading: h, children: J })),
      (n[57] = h),
      (n[58] = Y));
  let X;
  n[59] !== q || n[60] !== Y
    ? ((X = (0, $.jsx)(g, { className: `pt-4`, children: (0, $.jsxs)(v, { children: [q, Y] }) })),
      (n[59] = q),
      (n[60] = Y),
      (n[61] = X))
    : (X = n[61]);
  let Z;
  n[62] !== I || n[63] !== U || n[64] !== X || n[65] !== M || n[66] !== P
    ? ((Z = (0, $.jsxs)(ee, { as: `form`, onSubmit: M, children: [P, I, U, X] })),
      (n[62] = I),
      (n[63] = U),
      (n[64] = X),
      (n[65] = M),
      (n[66] = P),
      (n[67] = Z))
    : (Z = n[67]);
  let Q;
  return (
    n[68] !== p || n[69] !== r || n[70] !== Z || n[71] !== A
      ? ((Q = (0, $.jsx)(_, { open: r, onOpenChange: p, dialogCloseLabel: k, size: A, children: Z })),
        (n[68] = p),
        (n[69] = r),
        (n[70] = Z),
        (n[71] = A),
        (n[72] = Q))
      : (Q = n[72]),
    Q
  );
}
function ne(e) {
  return e.values.authMode;
}
function re(e) {
  return e.length > 0
    ? (0, $.jsx)(g, {
        children: (0, $.jsx)(`div`, {
          className: `rounded-md border p-2 text-sm text-danger`,
          children: e.map(Q),
        }),
      })
    : null;
}
function Q(e) {
  return (0, $.jsx)(`div`, { children: ae(e) }, e);
}
function ie(e) {
  let t = (0, oe.c)(16),
    { label: n, description: r, value: i, placeholder: a, onChange: o, onBlur: s, disabled: c } = e,
    l = c !== void 0 && c,
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = (0, $.jsx)(`span`, { className: `text-xs font-medium text-default`, children: n })),
      (t[0] = n),
      (t[1] = u));
  let d;
  t[2] === o ? (d = t[3]) : ((d = (e) => o(e.target.value)), (t[2] = o), (t[3] = d));
  let f;
  t[4] !== l || t[5] !== s || t[6] !== a || t[7] !== d || t[8] !== i
    ? ((f = (0, $.jsx)(j, { value: i, disabled: l, onChange: d, onBlur: s, placeholder: a })),
      (t[4] = l),
      (t[5] = s),
      (t[6] = a),
      (t[7] = d),
      (t[8] = i),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === r
    ? (p = t[11])
    : ((p = r ? (0, $.jsx)(`span`, { className: `text-xs text-secondary`, children: r }) : null),
      (t[10] = r),
      (t[11] = p));
  let m;
  return (
    t[12] !== u || t[13] !== f || t[14] !== p
      ? ((m = (0, $.jsxs)(`label`, { className: `flex flex-col gap-1`, children: [u, f, p] })),
        (t[12] = u),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
function ae(e) {
  switch (e) {
    case `displayNameRequired`:
      return (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.field.displayName.error`,
        defaultMessage: `Display name is required`,
        description: `Error message for display name field in remote connection editor dialog`,
      });
    case `sshHostRequired`:
      return (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.field.sshHost.error`,
        defaultMessage: `Hostname is required`,
        description: `Error message for SSH target field in remote connection editor dialog`,
      });
    case `sshPortInteger`:
      return (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.field.sshPort.intError`,
        defaultMessage: `SSH port must be an integer`,
        description: `Error message for SSH port field when the input is not an integer`,
      });
    case `sshPortRange`:
      return (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.field.sshPort.rangeError`,
        defaultMessage: `SSH port must be between 1 and 65535`,
        description: `Error message for SSH port field when the input is not between 1 and 65535`,
      });
    case `identityRequired`:
      return (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.field.identity.error`,
        defaultMessage: `Identity file path is required`,
        description: `Error message for identity file path field in remote connection editor dialog`,
      });
    case `duplicateDisplayName`:
      return (0, $.jsx)(i, {
        id: `settings.remoteConnections.dialog.field.displayName.duplicateError`,
        defaultMessage: `A connection with this display name already exists`,
        description: `Error message for duplicate display name in the remote connection editor dialog`,
      });
  }
}
var oe, se, $;
function ce() {
  return (ce = e(() => {
    ((oe = S()), U(), (se = T()), h(), b(), x(), m(), M(), k(), G(), X(), ($ = C()));
  }))();
}
export { X as i, ce as n, K as r, Z as t };
//# sourceMappingURL=remote-connection-editor-dialog-c33d07857459.js.map
