import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IO as r,
  JO as i,
  LNt as a,
  LO as o,
  PBt as s,
  RO as c,
  TY as l,
  WO as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  _D as h,
  _W as g,
  ast as _,
  fD as ee,
  gD as v,
  hD as y,
  ist as b,
  mD as x,
  nB as S,
  nCt as C,
  okt as te,
  qO as w,
  rB as T,
  tkt as E,
  zO as D,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as O,
  Han as k,
  Man as A,
  Nan as j,
  Qd as M,
  Uan as N,
  Van as P,
  Wan as F,
  ZLn as I,
  Zd as L,
  jan as R,
  otn as z,
  stn as B,
} from "./app-initial-ad16eaadf81f.js";
import { n as V, t as H } from "./color-palette-6b374266e49e.js";
import { n as U, t as W } from "./useForm-357912521946.js";
import { n as G, r as K } from "./remote-connection-editor-draft-4848da584c67.js";
function q() {
  let e = b?.sshConnections;
  if (e == null) throw Error(`SSH connections are unavailable on this host`);
  return e;
}
function J() {
  return (J = e(() => {
    _();
  }))();
}
function Y(e) {
  let t = (0, X.c)(6),
    { hostId: n, color: r, disabled: i, onChange: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(`span`, {
        className: `text-xs font-medium text-default select-none`,
        children: (0, Q.jsx)(E, {
          id: `codex.remoteConnectionEditor.color`,
          defaultMessage: `Color`,
          description: `Label for the color of a remote connection`,
        }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  return (
    t[1] !== r || t[2] !== i || t[3] !== n || t[4] !== a
      ? ((s = (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2`,
          children: [o, (0, Q.jsx)(ne, { hostId: n, color: r, disabled: i, onChange: a })],
        })),
        (t[1] = r),
        (t[2] = i),
        (t[3] = n),
        (t[4] = a),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function ne(e) {
  let t = (0, X.c)(38),
    { hostId: n, color: r, disabled: i, embedded: a, onChange: o } = e,
    s = a !== void 0 && a,
    c = te(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `codex.remoteHostColorPicker.pickerAriaLabel`,
        defaultMessage: `Change connection color`,
        description: `Accessible label for the connection color picker button`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u = l,
    d = A(),
    p = j(d),
    m = C(B, n),
    [h, _] = (0, Z.useState)(!1),
    b = s ? `ghostActive` : `secondary`,
    w = s ? `inputSegment` : `settingsSelect`,
    T = !s,
    D;
  t[2] !== r || t[3] !== m || t[4] !== p
    ? ((D = N(r, p) ?? m), (t[2] = r), (t[3] = m), (t[4] = p), (t[5] = D))
    : (D = t[5]);
  let O;
  t[6] === D ? (O = t[7]) : ((O = (0, Q.jsx)(g, { style: { color: D } })), (t[6] = D), (t[7] = O));
  let M;
  t[8] !== u || t[9] !== i || t[10] !== b || t[11] !== w || t[12] !== T || t[13] !== O
    ? ((M = (0, Q.jsx)(f, {
        color: b,
        size: w,
        uniform: T,
        type: `button`,
        disabled: i,
        "aria-label": u,
        children: O,
      })),
      (t[8] = u),
      (t[9] = i),
      (t[10] = b),
      (t[11] = w),
      (t[12] = T),
      (t[13] = O),
      (t[14] = M))
    : (M = t[14]);
  let F;
  t[15] !== u || t[16] !== h || t[17] !== M
    ? ((F = (0, Q.jsx)(v, {
        asChild: !0,
        children: (0, Q.jsx)(S, {
          cloneCustomTrigger: !0,
          triggerPopupOpen: h,
          tooltipContent: u,
          children: M,
        }),
      })),
      (t[15] = u),
      (t[16] = h),
      (t[17] = M),
      (t[18] = F))
    : (F = t[18]);
  let I = s ? `start` : `end`,
    L;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsx)(y, {
        className: `px-2 py-1 text-sm text-default select-none`,
        children: (0, Q.jsx)(E, {
          id: `codex.remoteHostColorPicker.title`,
          defaultMessage: `Connection color`,
          description: `Title above preset colors for a remote connection`,
        }),
      })),
      (t[19] = L))
    : (L = t[19]);
  let R;
  t[20] === r ? (R = t[21]) : ((R = P(r) ?? void 0), (t[20] = r), (t[21] = R));
  let z;
  t[22] === c
    ? (z = t[23])
    : ((z = c.formatMessage({
        id: `codex.remoteHostColorPicker.colors`,
        defaultMessage: `Connection colors`,
        description: `Accessible label for remote connection color presets`,
      })),
      (t[22] = c),
      (t[23] = z));
  let V;
  t[24] === o
    ? (V = t[25])
    : ((V = (e) => {
        (o(k(e)), _(!1));
      }),
      (t[24] = o),
      (t[25] = V));
  let U;
  t[26] !== m || t[27] !== R || t[28] !== z || t[29] !== V
    ? ((U = (0, Q.jsx)(H, { color: R, defaultSwatchColor: m, groupAriaLabel: z, onColorChange: V })),
      (t[26] = m),
      (t[27] = R),
      (t[28] = z),
      (t[29] = V),
      (t[30] = U))
    : (U = t[30]);
  let W;
  t[31] !== I || t[32] !== U
    ? ((W = (0, Q.jsxs)(x, {
        align: I,
        size: `content`,
        sideOffset: 6,
        className: `gap-1 p-2`,
        children: [L, U],
      })),
      (t[31] = I),
      (t[32] = U),
      (t[33] = W))
    : (W = t[33]);
  let G;
  return (
    t[34] !== h || t[35] !== W || t[36] !== F
      ? ((G = (0, Q.jsxs)(ee, { modal: !0, open: h, onOpenChange: _, children: [F, W] })),
        (t[34] = h),
        (t[35] = W),
        (t[36] = F),
        (t[37] = G))
      : (G = t[37]),
    G
  );
}
var X, Z, Q;
function re() {
  return (re = e(() => {
    ((X = s()), m(), (Z = t()), d(), p(), l(), h(), T(), F(), V(), R(), z(), (Q = a()));
  }))();
}
function ie(e) {
  let t = (0, ue.c)(73),
    {
      open: n,
      mode: i,
      draft: a,
      existingConnections: s,
      editingHostId: l,
      color: d,
      onOpenChange: p,
      onSubmit: m,
      isSaving: h,
    } = e,
    g = te(),
    [_, ee] = (0, de.useState)(),
    v = i === `edit` && a.targetKind === `alias`,
    y;
  t[0] !== l || t[1] !== s
    ? ((y = (e) => {
        let t = G({ draft: e, existingConnections: s, editingHostId: l });
        if (t.length !== 0) return t;
      }),
      (t[0] = l),
      (t[1] = s),
      (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] === b
    ? (x = t[4])
    : ((x = {
        onChange: (e) => {
          let { value: t } = e;
          return b(t);
        },
        onSubmit: (e) => {
          let { value: t } = e;
          return b(t);
        },
      }),
      (t[3] = b),
      (t[4] = x));
  let S;
  t[5] !== _ || t[6] !== h || t[7] !== m
    ? ((S = (e) => {
        let { value: t } = e;
        h || m(t, _);
      }),
      (t[5] = _),
      (t[6] = h),
      (t[7] = m),
      (t[8] = S))
    : (S = t[8]);
  let C;
  t[9] !== a || t[10] !== x || t[11] !== S
    ? ((C = { defaultValues: a, validators: x, onSubmit: S }),
      (t[9] = a),
      (t[10] = x),
      (t[11] = S),
      (t[12] = C))
    : (C = t[12]);
  let T = U(C),
    O;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing the remote connection editor dialog`,
      })),
      (t[13] = O))
    : (O = t[13]);
  let k = i === `add` ? `default` : `compact`,
    A;
  t[14] === T
    ? (A = t[15])
    : ((A = (e) => {
        (e.preventDefault(), T.handleSubmit());
      }),
      (t[14] = T),
      (t[15] = A));
  let j;
  t[16] === i
    ? (j = t[17])
    : ((j = (0, $.jsx)(D, {
        children: (0, $.jsx)(c, {
          title: (0, $.jsx)(w, {
            children:
              i === `add`
                ? (0, $.jsx)(E, {
                    id: `settings.remoteConnections.dialog.addTitle`,
                    defaultMessage: `Add SSH connection`,
                    description: `Title for add remote connection dialog`,
                  })
                : (0, $.jsx)(E, {
                    id: `settings.remoteConnections.dialog.editTitle`,
                    defaultMessage: `Edit connection`,
                    description: `Title for edit remote connection dialog`,
                  }),
          }),
        }),
      })),
      (t[16] = i),
      (t[17] = j));
  let M;
  t[18] === h
    ? (M = t[19])
    : ((M = (e) =>
        h || e.submissionAttempts === 0 ? [] : (e.errorMap.onChange ?? e.errorMap.onSubmit ?? [])),
      (t[18] = h),
      (t[19] = M));
  let N;
  t[20] !== T.Subscribe || t[21] !== M
    ? ((N = (0, $.jsx)(T.Subscribe, { selector: M, children: oe })),
      (t[20] = T.Subscribe),
      (t[21] = M),
      (t[22] = N))
    : (N = t[22]);
  let P;
  t[23] !== d || t[24] !== a || t[25] !== _ || t[26] !== l || t[27] !== h || t[28] !== i
    ? ((P = (e) => {
        let t = (0, $.jsx)(E, {
          id: `settings.remoteConnections.dialog.field.displayName`,
          defaultMessage: `Display name`,
          description: `Label for display name field in remote connection editor dialog`,
        });
        return i === `add` || l != null
          ? (0, $.jsxs)(`div`, {
              children: [
                (0, $.jsx)(`label`, {
                  htmlFor: `remote-connection-display-name`,
                  className:
                    i === `add` ? `mb-1 block text-xs font-medium text-default select-none` : `sr-only`,
                  children: t,
                }),
                (0, $.jsx)(I, {
                  variant: `segmented`,
                  leadingControl: (0, $.jsx)(ne, {
                    hostId: a.hostId,
                    color: _ === void 0 ? d : _,
                    disabled: h,
                    embedded: !0,
                    onChange: ee,
                  }),
                  id: `remote-connection-display-name`,
                  autoFocus: i === `add`,
                  value: e.state.value,
                  onChange: (t) => e.handleChange(t.target.value),
                  onBlur: e.handleBlur,
                  disabled: h,
                }),
              ],
            })
          : (0, $.jsx)(ce, {
              label: t,
              value: e.state.value,
              onChange: e.handleChange,
              onBlur: e.handleBlur,
              disabled: h,
            });
      }),
      (t[23] = d),
      (t[24] = a),
      (t[25] = _),
      (t[26] = l),
      (t[27] = h),
      (t[28] = i),
      (t[29] = P))
    : (P = t[29]);
  let F;
  t[30] !== T.Field || t[31] !== P
    ? ((F = (0, $.jsx)(T.Field, { name: `displayName`, children: P })),
      (t[30] = T.Field),
      (t[31] = P),
      (t[32] = F))
    : (F = t[32]);
  let R;
  t[33] !== g || t[34] !== v || t[35] !== h
    ? ((R = (e) =>
        (0, $.jsx)(ce, {
          label: v
            ? (0, $.jsx)(E, {
                id: `settings.remoteConnections.dialog.field.alias`,
                defaultMessage: `Alias`,
                description: `Label for SSH alias field in remote connection editor dialog`,
              })
            : (0, $.jsx)(E, {
                id: `settings.remoteConnections.dialog.field.sshHost`,
                defaultMessage: `Hostname`,
                description: `Label for SSH target field in remote connection editor dialog`,
              }),
          placeholder: v
            ? void 0
            : g.formatMessage({
                id: `settings.remoteConnections.dialog.field.sshHost.placeholder`,
                defaultMessage: `host.com or user@host.com`,
                description: `Placeholder for SSH target field in remote connection editor dialog`,
              }),
          value: e.state.value,
          onChange: e.handleChange,
          onBlur: e.handleBlur,
          disabled: h || v,
        })),
      (t[33] = g),
      (t[34] = v),
      (t[35] = h),
      (t[36] = R))
    : (R = t[36]);
  let z;
  t[37] !== T.Field || t[38] !== R
    ? ((z = (0, $.jsx)(T.Field, { name: `sshHost`, children: R })),
      (t[37] = T.Field),
      (t[38] = R),
      (t[39] = z))
    : (z = t[39]);
  let B;
  t[40] !== T.Field || t[41] !== T.Subscribe || t[42] !== g || t[43] !== v || t[44] !== h
    ? ((B = v
        ? null
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(T.Field, {
                name: `sshPort`,
                children: (e) =>
                  (0, $.jsx)(ce, {
                    label: (0, $.jsxs)($.Fragment, {
                      children: [
                        (0, $.jsx)(E, {
                          id: `settings.remoteConnections.dialog.field.sshPort`,
                          defaultMessage: `SSH port`,
                          description: `Label for SSH port field in remote connection editor dialog`,
                        }),
                        ` `,
                        (0, $.jsx)(`span`, {
                          className: `font-normal text-secondary`,
                          children: (0, $.jsx)(E, {
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
              (0, $.jsx)(T.Field, {
                name: `authMode`,
                children: (e) =>
                  (0, $.jsx)(L, {
                    ariaLabel: g.formatMessage({
                      id: `settings.remoteConnections.dialog.authMode.ariaLabel`,
                      defaultMessage: `SSH authentication method`,
                      description: `Accessible label for choosing the SSH authentication method in the remote connection editor dialog`,
                    }),
                    fullWidth: !0,
                    options: [
                      {
                        id: `none`,
                        disabled: h,
                        label: (0, $.jsx)(E, {
                          id: `settings.remoteConnections.dialog.authMode.none`,
                          defaultMessage: `No Auth`,
                          description: `Option label for using no explicit SSH identity file`,
                        }),
                      },
                      {
                        id: `identity`,
                        disabled: h,
                        label: (0, $.jsx)(E, {
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
              (0, $.jsx)(T.Subscribe, {
                selector: ae,
                children: (e) =>
                  e === `identity`
                    ? (0, $.jsx)(T.Field, {
                        name: `identity`,
                        children: (e) =>
                          (0, $.jsx)(ce, {
                            label: (0, $.jsx)(E, {
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
      (t[40] = T.Field),
      (t[41] = T.Subscribe),
      (t[42] = g),
      (t[43] = v),
      (t[44] = h),
      (t[45] = B))
    : (B = t[45]);
  let V;
  t[46] !== F || t[47] !== z || t[48] !== B
    ? ((V = (0, $.jsx)(D, {
        children: (0, $.jsxs)(`div`, { className: `grid grid-cols-1 gap-4`, children: [F, z, B] }),
      })),
      (t[46] = F),
      (t[47] = z),
      (t[48] = B),
      (t[49] = V))
    : (V = t[49]);
  let H;
  t[50] === p ? (H = t[51]) : ((H = () => p(!1)), (t[50] = p), (t[51] = H));
  let W;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for remote connection editor dialog`,
      })),
      (t[52] = W))
    : (W = t[52]);
  let K;
  t[53] !== h || t[54] !== H
    ? ((K = (0, $.jsx)(f, { color: `ghost`, type: `button`, disabled: h, onClick: H, children: W })),
      (t[53] = h),
      (t[54] = H),
      (t[55] = K))
    : (K = t[55]);
  let q;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.apply`,
        defaultMessage: `Save`,
        description: `Save button for remote connection editor dialog`,
      })),
      (t[56] = q))
    : (q = t[56]);
  let J;
  t[57] === h
    ? (J = t[58])
    : ((J = (0, $.jsx)(f, { color: `primary`, type: `submit`, loading: h, children: q })),
      (t[57] = h),
      (t[58] = J));
  let Y;
  t[59] !== K || t[60] !== J
    ? ((Y = (0, $.jsx)(D, { className: `pt-4`, children: (0, $.jsxs)(o, { children: [K, J] }) })),
      (t[59] = K),
      (t[60] = J),
      (t[61] = Y))
    : (Y = t[61]);
  let X;
  t[62] !== N || t[63] !== V || t[64] !== Y || t[65] !== A || t[66] !== j
    ? ((X = (0, $.jsxs)(r, { as: `form`, onSubmit: A, children: [j, N, V, Y] })),
      (t[62] = N),
      (t[63] = V),
      (t[64] = Y),
      (t[65] = A),
      (t[66] = j),
      (t[67] = X))
    : (X = t[67]);
  let Z;
  return (
    t[68] !== p || t[69] !== n || t[70] !== X || t[71] !== k
      ? ((Z = (0, $.jsx)(u, { open: n, onOpenChange: p, dialogCloseLabel: O, size: k, children: X })),
        (t[68] = p),
        (t[69] = n),
        (t[70] = X),
        (t[71] = k),
        (t[72] = Z))
      : (Z = t[72]),
    Z
  );
}
function ae(e) {
  return e.values.authMode;
}
function oe(e) {
  return e.length > 0
    ? (0, $.jsx)(D, {
        children: (0, $.jsx)(`div`, {
          className: `rounded-md border p-2 text-sm text-danger`,
          children: e.map(se),
        }),
      })
    : null;
}
function se(e) {
  return (0, $.jsx)(`div`, { children: le(e) }, e);
}
function ce(e) {
  let t = (0, ue.c)(16),
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
    ? ((f = (0, $.jsx)(I, { value: i, disabled: l, onChange: d, onBlur: s, placeholder: a })),
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
function le(e) {
  switch (e) {
    case `displayNameRequired`:
      return (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.field.displayName.error`,
        defaultMessage: `Display name is required`,
        description: `Error message for display name field in remote connection editor dialog`,
      });
    case `sshHostRequired`:
      return (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.field.sshHost.error`,
        defaultMessage: `Hostname is required`,
        description: `Error message for SSH target field in remote connection editor dialog`,
      });
    case `sshPortInteger`:
      return (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.field.sshPort.intError`,
        defaultMessage: `SSH port must be an integer`,
        description: `Error message for SSH port field when the input is not an integer`,
      });
    case `sshPortRange`:
      return (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.field.sshPort.rangeError`,
        defaultMessage: `SSH port must be between 1 and 65535`,
        description: `Error message for SSH port field when the input is not between 1 and 65535`,
      });
    case `identityRequired`:
      return (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.field.identity.error`,
        defaultMessage: `Identity file path is required`,
        description: `Error message for identity file path field in remote connection editor dialog`,
      });
    case `duplicateDisplayName`:
      return (0, $.jsx)(E, {
        id: `settings.remoteConnections.dialog.field.displayName.duplicateError`,
        defaultMessage: `A connection with this display name already exists`,
        description: `Error message for duplicate display name in the remote connection editor dialog`,
      });
  }
}
var ue, de, $;
function fe() {
  return (fe = e(() => {
    ((ue = s()), W(), (de = t()), d(), p(), i(), n(), M(), O(), K(), re(), ($ = a()));
  }))();
}
export { q as a, re as i, fe as n, J as o, Y as r, ie as t };
//# sourceMappingURL=remote-connection-editor-dialog-7e34b673b8ca.js.map
