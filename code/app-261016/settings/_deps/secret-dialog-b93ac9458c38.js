import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as ee,
  $st as t,
  BU as te,
  FBt as n,
  HO as r,
  IO as i,
  JO as a,
  KO as o,
  LNt as ne,
  LO as re,
  PBt as s,
  Qst as ie,
  RO as ae,
  RU as oe,
  TY as c,
  WO as se,
  XOt as l,
  Y3 as ce,
  Z3 as u,
  ZSt as d,
  ast as f,
  ist as le,
  nB as ue,
  okt as de,
  qO as fe,
  rB as p,
  tkt as m,
  zO as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as g,
  BRr as pe,
  L1 as me,
  R1 as he,
  ZLn as ge,
  wLr as _,
  zRr as _e,
} from "./app-initial-ad16eaadf81f.js";
import { i as ve, n as v, r as ye, t as be } from "./targets-5fc9003b8270.js";
import { n as xe, r as Se } from "./validation-message-bccaffa8ccca.js";
function y(e) {
  let t = (0, we.c)(99),
    {
      accountId: n,
      userId: r,
      initialNamespace: a,
      initialName: ne,
      initialValue: s,
      valueReadFailed: c,
      secret: l,
      deleting: u,
      onClose: d,
    } = e,
    f = ee(ie),
    p = de(),
    [g, he] = (0, b.useState)(a),
    [_, ve] = (0, b.useState)(l?.env_var ?? ne ?? ``),
    [v, Se] = (0, b.useState)(!1),
    [y, Te] = (0, b.useState)(!1),
    S;
  t[0] === l?.target
    ? (S = t[1])
    : ((S = l?.target ?? { type: `all_environment_configs` }), (t[0] = l?.target), (t[1] = S));
  let [C, Ee] = (0, b.useState)(S),
    [w, De] = (0, b.useState)(!1),
    [T, E] = (0, b.useState)(null),
    D;
  t[2] !== p || t[3] !== v
    ? ((D = v
        ? p.formatMessage({
            id: `personalVault.hideValue`,
            defaultMessage: `Hide value`,
            description: `Accessible label for the button that masks the personal secret value being entered`,
          })
        : p.formatMessage({
            id: `personalVault.showValue`,
            defaultMessage: `Show value`,
            description: `Accessible label for the button that reveals the personal secret value being entered`,
          })),
      (t[2] = p),
      (t[3] = v),
      (t[4] = D))
    : (D = t[4]);
  let O = D,
    k = C.type === `all_environment_configs` || C.ids.length > 0,
    A;
  t[5] === _ ? (A = t[6]) : ((A = me(_)), (t[5] = _), (t[6] = A));
  let j = A === `reserved-key`,
    M;
  t[7] !== n || t[8] !== f || t[9] !== r
    ? ((M = () => f.get(_e) === n && f.get(pe) === r), (t[7] = n), (t[8] = f), (t[9] = r), (t[10] = M))
    : (M = t[10]);
  let N = M,
    Oe;
  t[11] !== n ||
  t[12] !== u ||
  t[13] !== _ ||
  t[14] !== y ||
  t[15] !== s ||
  t[16] !== N ||
  t[17] !== j ||
  t[18] !== g ||
  t[19] !== d ||
  t[20] !== w ||
  t[21] !== l ||
  t[22] !== C ||
  t[23] !== r ||
  t[24] !== k
    ? ((Oe = async function (e) {
        if ((e.preventDefault(), w || !N() || (!u && (!k || j)))) return;
        let ee = e.currentTarget,
          t = new FormData(ee).get(`value`),
          te = le?.environmentConfigs;
        if (te == null) {
          E(`permission`);
          return;
        }
        let i;
        if (u && l != null)
          i = { accountId: n, userId: r, method: `DELETE`, body: { namespace: g, ids: [l.id] } };
        else {
          if (typeof t != `string` || (l == null && t.length === 0)) return;
          i = {
            accountId: n,
            userId: r,
            method: `POST`,
            body: {
              namespace: g,
              secrets: [
                l == null
                  ? { name: _, env_var: _, target: C, value: t }
                  : {
                      id: l.id,
                      name: l.name,
                      env_var: _,
                      target: C,
                      value: t.length > 0 && (s == null || y) ? t : void 0,
                    },
              ],
            },
          };
        }
        (De(!0), E(null));
        let a = await te.requestPersonalSecrets(i).catch(Ce);
        if ((De(!1), !N() || !ee.isConnected)) return;
        let o = a?.ok && !(`next_cursor` in a.data) ? a.data.secrets[0] : void 0;
        if (a?.ok && a.data.secrets.length === 1 && o?.id != null && o.error == null) {
          d(g, { id: o.id, name: o.name, env_var: o.env_var ?? _, target: o.target ?? C });
          return;
        }
        a != null && !a.ok && (a.error === `authentication` || a.status === 403)
          ? E(`permission`)
          : E(u ? `delete` : `save`);
      }),
      (t[11] = n),
      (t[12] = u),
      (t[13] = _),
      (t[14] = y),
      (t[15] = s),
      (t[16] = N),
      (t[17] = j),
      (t[18] = g),
      (t[19] = d),
      (t[20] = w),
      (t[21] = l),
      (t[22] = C),
      (t[23] = r),
      (t[24] = k),
      (t[25] = Oe))
    : (Oe = t[25]);
  let ke = Oe,
    P;
  t[26] !== g || t[27] !== d || t[28] !== w
    ? ((P = (e) => {
        !e && !w && d(g);
      }),
      (t[26] = g),
      (t[27] = d),
      (t[28] = w),
      (t[29] = P))
    : (P = t[29]);
  let F;
  t[30] === ke ? (F = t[31]) : ((F = (e) => void ke(e)), (t[30] = ke), (t[31] = F));
  let I;
  t[32] !== u || t[33] !== l?.env_var || t[34] !== l?.name
    ? ((I = u
        ? (0, x.jsx)(m, {
            id: `personalVault.deleteTitle`,
            defaultMessage: `Delete {key}?`,
            description: `Confirm deletion of a personal secret`,
            values: { key: l?.env_var ?? l?.name },
          })
        : null),
      (t[32] = u),
      (t[33] = l?.env_var),
      (t[34] = l?.name),
      (t[35] = I))
    : (I = t[35]);
  let L;
  t[36] !== u || t[37] !== l
    ? ((L =
        !u && l == null
          ? (0, x.jsx)(m, {
              id: `personalVault.addEntryTitle`,
              defaultMessage: `Add to personal vault`,
              description: `Dialog title for adding an environment variable or network secret to the personal vault`,
            })
          : null),
      (t[36] = u),
      (t[37] = l),
      (t[38] = L))
    : (L = t[38]);
  let R;
  t[39] !== u || t[40] !== g || t[41] !== l
    ? ((R =
        !u &&
        l != null &&
        (g === `not_sensitive`
          ? (0, x.jsx)(m, {
              id: `personalVault.editVariable`,
              defaultMessage: `Edit variable`,
              description: `Dialog title for editing a personal environment variable`,
            })
          : (0, x.jsx)(m, {
              id: `personalVault.editTitle`,
              defaultMessage: `Edit network secret`,
              description: `Dialog title for editing a personal secret`,
            }))),
      (t[39] = u),
      (t[40] = g),
      (t[41] = l),
      (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] !== R || t[44] !== I || t[45] !== L
    ? ((z = (0, x.jsxs)(fe, { children: [I, L, R] })), (t[43] = R), (t[44] = I), (t[45] = L), (t[46] = z))
    : (z = t[46]);
  let B;
  t[47] === u
    ? (B = t[48])
    : ((B = u
        ? (0, x.jsx)(m, {
            id: `personalVault.deleteDescription`,
            defaultMessage: `New tasks will no longer be able to use this value`,
            description: `Explains the effect of deleting a personal vault entry`,
          })
        : null),
      (t[47] = u),
      (t[48] = B));
  let V;
  t[49] !== u || t[50] !== g
    ? ((V =
        !u &&
        (g === `not_sensitive`
          ? (0, x.jsx)(m, {
              id: `personalVault.variableFormDescription`,
              defaultMessage: `Only your tasks can use this variable where the environment requests its key. Its value is visible to the task.`,
              description: `Personal environment variables match the executing user's requirements and are delivered as plaintext`,
            })
          : (0, x.jsx)(m, {
              id: `personalVault.formDescription`,
              defaultMessage: `Your tasks use a placeholder for this secret. Its value is sent only to domains allowed by the environment.`,
              description: `Personal network secrets match the executing user's requirements and use the environment's allowed domains`,
            }))),
      (t[49] = u),
      (t[50] = g),
      (t[51] = V))
    : (V = t[51]);
  let H;
  t[52] !== B || t[53] !== V
    ? ((H = (0, x.jsxs)(o, { className: `contents`, children: [B, V] })),
      (t[52] = B),
      (t[53] = V),
      (t[54] = H))
    : (H = t[54]);
  let U;
  t[55] !== z || t[56] !== H
    ? ((U = (0, x.jsx)(h, { children: (0, x.jsx)(ae, { title: z, subtitle: H }) })),
      (t[55] = z),
      (t[56] = H),
      (t[57] = U))
    : (U = t[57]);
  let W;
  t[58] !== u ||
  t[59] !== _ ||
  t[60] !== y ||
  t[61] !== s ||
  t[62] !== j ||
  t[63] !== g ||
  t[64] !== w ||
  t[65] !== l ||
  t[66] !== C ||
  t[67] !== c ||
  t[68] !== O ||
  t[69] !== v
    ? ((W = u
        ? null
        : (0, x.jsx)(h, {
            spacing: `large`,
            children: (0, x.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                (0, x.jsx)(`p`, {
                  className: `text-sm text-secondary select-none`,
                  children: (0, x.jsx)(m, {
                    id: `personalVault.savingDescription`,
                    defaultMessage: `Network secret values stay hidden after saving. All entries are optional.`,
                    description: `Guidance in the add and edit personal vault forms: saved network secret values cannot be viewed afterward, while ordinary environment variables can be read when editing. Saving vault entries is optional.`,
                  }),
                }),
                l == null
                  ? (0, x.jsx)(ye, {
                      namespace: g,
                      disabled: w,
                      onChange: (e) => {
                        (he(e), Se(!1));
                      },
                    })
                  : null,
                (0, x.jsxs)(`div`, {
                  className: `flex flex-col gap-2`,
                  children: [
                    (0, x.jsx)(`label`, {
                      htmlFor: `personal-secret-key`,
                      className: `text-sm select-none`,
                      children: (0, x.jsx)(m, {
                        id: `personalVault.key`,
                        defaultMessage: `Key`,
                        description: `Environment variable name used to match a personal secret`,
                      }),
                    }),
                    (0, x.jsx)(ge, {
                      id: `personal-secret-key`,
                      "aria-invalid": j,
                      "aria-describedby": j ? `personal-secret-key-error` : void 0,
                      autoFocus: !0,
                      autoComplete: `off`,
                      spellCheck: !1,
                      required: !0,
                      pattern: `[A-Za-z_][A-Za-z0-9_]*`,
                      maxLength: 256,
                      value: _,
                      disabled: w,
                      onChange: (e) => ve(e.target.value),
                    }),
                    j
                      ? (0, x.jsx)(`p`, {
                          id: `personal-secret-key-error`,
                          className: `text-sm text-danger`,
                          role: `alert`,
                          children: (0, x.jsx)(xe, { error: `reserved-key` }),
                        })
                      : null,
                  ],
                }),
                (0, x.jsxs)(`div`, {
                  className: `flex flex-col gap-2`,
                  children: [
                    (0, x.jsx)(`label`, {
                      htmlFor: `personal-secret-value`,
                      className: `text-sm select-none`,
                      children: (0, x.jsx)(m, {
                        id: `personalVault.value`,
                        defaultMessage: `Value`,
                        description: `Secure input for a new or replacement personal secret value`,
                      }),
                    }),
                    (0, x.jsx)(ge, {
                      id: `personal-secret-value`,
                      "aria-describedby": l == null ? void 0 : `personal-secret-saved-value`,
                      name: `value`,
                      defaultValue: g === `not_sensitive` ? s : void 0,
                      type: g === `not_sensitive` || v ? `text` : `password`,
                      placeholder: l != null && g === `sensitive` ? `••••••••••••` : void 0,
                      autoComplete: g === `not_sensitive` ? `off` : `new-password`,
                      spellCheck: !1,
                      required: l == null,
                      disabled: w,
                      onChange: (e) => Te(e.currentTarget.value.length > 0),
                      trailingControl:
                        g === `sensitive` && (l == null || y)
                          ? (0, x.jsx)(ue, {
                              cloneCustomTrigger: !0,
                              tooltipContent: O,
                              children: (0, x.jsx)(ce, {
                                "aria-label": O,
                                "aria-controls": `personal-secret-value`,
                                color: `ghost`,
                                size: `inputIcon`,
                                type: `button`,
                                disabled: w || !y,
                                onClick: () => Se(!v),
                                children: v ? (0, x.jsx)(te, {}) : (0, x.jsx)(oe, {}),
                              }),
                            })
                          : (0, x.jsx)(x.Fragment, {}),
                    }),
                    l == null
                      ? null
                      : (0, x.jsx)(`p`, {
                          id: `personal-secret-saved-value`,
                          className: `text-sm text-secondary select-none`,
                          children:
                            g === `not_sensitive`
                              ? (0, x.jsx)(m, {
                                  id: `personalVault.keepEnvironmentValue`,
                                  defaultMessage: `Leave unchanged or blank to keep the saved value`,
                                  description: `When editing a personal environment variable, only a new nonempty value replaces the saved value`,
                                })
                              : (0, x.jsx)(m, {
                                  id: `personalVault.keepValue`,
                                  defaultMessage: `Saved value is hidden. Leave blank to keep it.`,
                                  description: `Editing secret metadata does not require reading or replacing the stored value`,
                                }),
                        }),
                  ],
                }),
                c && g === `not_sensitive`
                  ? (0, x.jsx)(`p`, {
                      role: `alert`,
                      children: (0, x.jsx)(m, {
                        id: `personalVault.valueReadFailed`,
                        defaultMessage: `Couldn't load the saved value. You can still enter a replacement or leave it blank to keep it.`,
                        description: `The saved personal environment variable could not be loaded; editing metadata or entering a new value is still possible`,
                      }),
                    })
                  : null,
                (0, x.jsx)(be, { target: C, disabled: w, onChange: Ee }),
              ],
            }),
          })),
      (t[58] = u),
      (t[59] = _),
      (t[60] = y),
      (t[61] = s),
      (t[62] = j),
      (t[63] = g),
      (t[64] = w),
      (t[65] = l),
      (t[66] = C),
      (t[67] = c),
      (t[68] = O),
      (t[69] = v),
      (t[70] = W))
    : (W = t[70]);
  let G;
  t[71] === T
    ? (G = t[72])
    : ((G =
        T == null
          ? null
          : (0, x.jsx)(h, {
              spacing: `large`,
              children: (0, x.jsxs)(`p`, {
                role: `alert`,
                className: `text-sm text-danger`,
                children: [
                  T === `permission`
                    ? (0, x.jsx)(m, {
                        id: `personalVault.permissionError`,
                        defaultMessage: `Your account no longer has access. Close this dialog and sign in again.`,
                        description: `A personal vault operation failed authorization`,
                      })
                    : null,
                  T === `delete`
                    ? (0, x.jsx)(m, {
                        id: `personalVault.deleteError`,
                        defaultMessage: `Couldn’t confirm deletion. Retry or close this dialog to reload the vault.`,
                        description: `A personal secret deletion failed or its result was lost`,
                      })
                    : null,
                  T === `save`
                    ? (0, x.jsx)(m, {
                        id: `personalVault.saveError`,
                        defaultMessage: `Couldn’t confirm the save. Check the vault before trying again, and make sure the key does not overlap another secret’s environments.`,
                        description: `A personal secret save failed or its result was lost; never display the backend error or secret value`,
                      })
                    : null,
                ],
              }),
            })),
      (t[71] = T),
      (t[72] = G));
  let K;
  t[73] !== g || t[74] !== d ? ((K = () => d(g)), (t[73] = g), (t[74] = d), (t[75] = K)) : (K = t[75]);
  let q;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, x.jsx)(m, {
        id: `personalVault.cancel`,
        defaultMessage: `Cancel`,
        description: `Close the personal secret dialog without saving`,
      })),
      (t[76] = q))
    : (q = t[76]);
  let J;
  t[77] !== w || t[78] !== K
    ? ((J = (0, x.jsx)(ce, { color: `secondary`, type: `button`, disabled: w, onClick: K, children: q })),
      (t[77] = w),
      (t[78] = K),
      (t[79] = J))
    : (J = t[79]);
  let Ae = u ? `danger` : `primary`,
    je = T === `permission` || (!u && (!k || j)),
    Y;
  t[80] === u
    ? (Y = t[81])
    : ((Y = u
        ? (0, x.jsx)(m, {
            id: `personalVault.delete`,
            defaultMessage: `Delete`,
            description: `Delete a personal secret`,
          })
        : (0, x.jsx)(m, {
            id: `personalVault.save`,
            defaultMessage: `Save`,
            description: `Save a personal secret and its configuration targets`,
          })),
      (t[80] = u),
      (t[81] = Y));
  let X;
  t[82] !== w || t[83] !== Ae || t[84] !== je || t[85] !== Y
    ? ((X = (0, x.jsx)(ce, { color: Ae, type: `submit`, loading: w, disabled: je, children: Y })),
      (t[82] = w),
      (t[83] = Ae),
      (t[84] = je),
      (t[85] = Y),
      (t[86] = X))
    : (X = t[86]);
  let Z;
  t[87] !== J || t[88] !== X
    ? ((Z = (0, x.jsx)(h, {
        spacing: `large`,
        children: (0, x.jsxs)(re, { expandSingleButton: !1, children: [J, X] }),
      })),
      (t[87] = J),
      (t[88] = X),
      (t[89] = Z))
    : (Z = t[89]);
  let Q;
  t[90] !== U || t[91] !== W || t[92] !== G || t[93] !== Z || t[94] !== F
    ? ((Q = (0, x.jsxs)(i, { as: `form`, onSubmit: F, size: `viewport`, children: [U, W, G, Z] })),
      (t[90] = U),
      (t[91] = W),
      (t[92] = G),
      (t[93] = Z),
      (t[94] = F),
      (t[95] = Q))
    : (Q = t[95]);
  let $;
  return (
    t[96] !== Q || t[97] !== P
      ? (($ = (0, x.jsx)(se, { open: !0, onOpenChange: P, children: Q })),
        (t[96] = Q),
        (t[97] = P),
        (t[98] = $))
      : ($ = t[98]),
    $
  );
}
function Ce() {
  return null;
}
var we, b, x;
function Te() {
  return (Te = e(() => {
    ((we = s()),
      d(),
      he(),
      (b = n()),
      l(),
      _(),
      u(),
      a(),
      r(),
      c(),
      g(),
      p(),
      Se(),
      f(),
      t(),
      ve(),
      v(),
      (x = ne()));
  }))();
}
Te();
export { y as PersonalSecretDialog };
//# sourceMappingURL=secret-dialog-b93ac9458c38.js.map
