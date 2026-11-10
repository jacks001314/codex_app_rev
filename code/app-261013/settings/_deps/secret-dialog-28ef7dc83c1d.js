import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Kat as ee,
  Pxt as a,
  TJ as o,
  UH as s,
  VDt as te,
  VH as ne,
  _O as re,
  cO as ie,
  cz as c,
  fO as ae,
  gO as oe,
  jDt as se,
  lO as l,
  mO as ce,
  oO as le,
  qat as u,
  sO as ue,
  sz as de,
  t3 as fe,
  vO as d,
  vzt as f,
  wot as p,
  xMt as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as g,
  GMr as pe,
  TPn as me,
  XMr as he,
  XQ as ge,
  YQ as _e,
  tNr as _,
} from "./app-initial-5851df3f6cb1.js";
import { i as ve, n as v, r as ye, t as be } from "./targets-491db353a53e.js";
import { n as xe, r as Se } from "./validation-message-e25ad070fad8.js";
function y(e) {
  let a = (0, we.c)(99),
    {
      accountId: o,
      userId: c,
      initialNamespace: ae,
      initialName: se,
      initialValue: u,
      valueReadFailed: fe,
      secret: d,
      deleting: f,
      onClose: p,
    } = e,
    m = i(n),
    h = te(),
    [g, ge] = (0, b.useState)(ae),
    [_, ve] = (0, b.useState)(d?.env_var ?? se ?? ``),
    [v, Se] = (0, b.useState)(!1),
    [y, Te] = (0, b.useState)(!1),
    S;
  a[0] === d?.target
    ? (S = a[1])
    : ((S = d?.target ?? { type: `all_environment_configs` }), (a[0] = d?.target), (a[1] = S));
  let [C, Ee] = (0, b.useState)(S),
    [w, De] = (0, b.useState)(!1),
    [T, E] = (0, b.useState)(null),
    D;
  a[2] !== h || a[3] !== v
    ? ((D = v
        ? h.formatMessage({
            id: `personalVault.hideValue`,
            defaultMessage: `Hide value`,
            description: `Accessible label for the button that masks the personal secret value being entered`,
          })
        : h.formatMessage({
            id: `personalVault.showValue`,
            defaultMessage: `Show value`,
            description: `Accessible label for the button that reveals the personal secret value being entered`,
          })),
      (a[2] = h),
      (a[3] = v),
      (a[4] = D))
    : (D = a[4]);
  let O = D,
    k = C.type === `all_environment_configs` || C.ids.length > 0,
    A;
  a[5] === _ ? (A = a[6]) : ((A = _e(_)), (a[5] = _), (a[6] = A));
  let j = A === `reserved-key`,
    M;
  a[7] !== o || a[8] !== m || a[9] !== c
    ? ((M = () => m.get(pe) === o && m.get(he) === c), (a[7] = o), (a[8] = m), (a[9] = c), (a[10] = M))
    : (M = a[10]);
  let N = M,
    P;
  a[11] !== o ||
  a[12] !== f ||
  a[13] !== _ ||
  a[14] !== y ||
  a[15] !== u ||
  a[16] !== N ||
  a[17] !== j ||
  a[18] !== g ||
  a[19] !== p ||
  a[20] !== w ||
  a[21] !== d ||
  a[22] !== C ||
  a[23] !== c ||
  a[24] !== k
    ? ((P = async function (e) {
        if ((e.preventDefault(), w || !N() || (!f && (!k || j)))) return;
        let t = e.currentTarget,
          n = new FormData(t).get(`value`),
          r = ee?.environmentConfigs;
        if (r == null) {
          E(`permission`);
          return;
        }
        let i;
        if (f && d != null)
          i = { accountId: o, userId: c, method: `DELETE`, body: { namespace: g, ids: [d.id] } };
        else {
          if (typeof n != `string` || (d == null && n.length === 0)) return;
          i = {
            accountId: o,
            userId: c,
            method: `POST`,
            body: {
              namespace: g,
              secrets: [
                d == null
                  ? { name: _, env_var: _, target: C, value: n }
                  : {
                      id: d.id,
                      name: d.name,
                      env_var: _,
                      target: C,
                      value: n.length > 0 && (u == null || y) ? n : void 0,
                    },
              ],
            },
          };
        }
        (De(!0), E(null));
        let a = await r.requestPersonalSecrets(i).catch(Ce);
        if ((De(!1), !N() || !t.isConnected)) return;
        let s = a?.ok && !(`next_cursor` in a.data) ? a.data.secrets[0] : void 0;
        if (a?.ok && a.data.secrets.length === 1 && s?.id != null && s.error == null) {
          p(g, { id: s.id, name: s.name, env_var: s.env_var ?? _, target: s.target ?? C });
          return;
        }
        a != null && !a.ok && (a.error === `authentication` || a.status === 403)
          ? E(`permission`)
          : E(f ? `delete` : `save`);
      }),
      (a[11] = o),
      (a[12] = f),
      (a[13] = _),
      (a[14] = y),
      (a[15] = u),
      (a[16] = N),
      (a[17] = j),
      (a[18] = g),
      (a[19] = p),
      (a[20] = w),
      (a[21] = d),
      (a[22] = C),
      (a[23] = c),
      (a[24] = k),
      (a[25] = P))
    : (P = a[25]);
  let Oe = P,
    F;
  a[26] !== g || a[27] !== p || a[28] !== w
    ? ((F = (e) => {
        !e && !w && p(g);
      }),
      (a[26] = g),
      (a[27] = p),
      (a[28] = w),
      (a[29] = F))
    : (F = a[29]);
  let I;
  a[30] === Oe ? (I = a[31]) : ((I = (e) => void Oe(e)), (a[30] = Oe), (a[31] = I));
  let L;
  a[32] !== f || a[33] !== d?.env_var || a[34] !== d?.name
    ? ((L = f
        ? (0, x.jsx)(r, {
            id: `personalVault.deleteTitle`,
            defaultMessage: `Delete {key}?`,
            description: `Confirm deletion of a personal secret`,
            values: { key: d?.env_var ?? d?.name },
          })
        : null),
      (a[32] = f),
      (a[33] = d?.env_var),
      (a[34] = d?.name),
      (a[35] = L))
    : (L = a[35]);
  let R;
  a[36] !== f || a[37] !== d
    ? ((R =
        !f && d == null
          ? (0, x.jsx)(r, {
              id: `personalVault.addEntryTitle`,
              defaultMessage: `Add to personal vault`,
              description: `Dialog title for adding an environment variable or network secret to the personal vault`,
            })
          : null),
      (a[36] = f),
      (a[37] = d),
      (a[38] = R))
    : (R = a[38]);
  let z;
  a[39] !== f || a[40] !== g || a[41] !== d
    ? ((z =
        !f &&
        d != null &&
        (g === `not_sensitive`
          ? (0, x.jsx)(r, {
              id: `personalVault.editVariable`,
              defaultMessage: `Edit variable`,
              description: `Dialog title for editing a personal environment variable`,
            })
          : (0, x.jsx)(r, {
              id: `personalVault.editTitle`,
              defaultMessage: `Edit network secret`,
              description: `Dialog title for editing a personal secret`,
            }))),
      (a[39] = f),
      (a[40] = g),
      (a[41] = d),
      (a[42] = z))
    : (z = a[42]);
  let B;
  a[43] !== z || a[44] !== L || a[45] !== R
    ? ((B = (0, x.jsxs)(re, { children: [L, R, z] })), (a[43] = z), (a[44] = L), (a[45] = R), (a[46] = B))
    : (B = a[46]);
  let V;
  a[47] === f
    ? (V = a[48])
    : ((V = f
        ? (0, x.jsx)(r, {
            id: `personalVault.deleteDescription`,
            defaultMessage: `New tasks will no longer be able to use this value`,
            description: `Explains the effect of deleting a personal vault entry`,
          })
        : null),
      (a[47] = f),
      (a[48] = V));
  let H;
  a[49] !== f || a[50] !== g
    ? ((H =
        !f &&
        (g === `not_sensitive`
          ? (0, x.jsx)(r, {
              id: `personalVault.variableFormDescription`,
              defaultMessage: `Only your tasks can use this variable where the environment requests its key. Its value is visible to the task.`,
              description: `Personal environment variables match the executing user's requirements and are delivered as plaintext`,
            })
          : (0, x.jsx)(r, {
              id: `personalVault.formDescription`,
              defaultMessage: `Your tasks use a placeholder for this secret. Its value is sent only to domains allowed by the environment.`,
              description: `Personal network secrets match the executing user's requirements and use the environment's allowed domains`,
            }))),
      (a[49] = f),
      (a[50] = g),
      (a[51] = H))
    : (H = a[51]);
  let U;
  a[52] !== V || a[53] !== H
    ? ((U = (0, x.jsxs)(oe, { className: `contents`, children: [V, H] })),
      (a[52] = V),
      (a[53] = H),
      (a[54] = U))
    : (U = a[54]);
  let W;
  a[55] !== B || a[56] !== U
    ? ((W = (0, x.jsx)(l, { children: (0, x.jsx)(ie, { title: B, subtitle: U }) })),
      (a[55] = B),
      (a[56] = U),
      (a[57] = W))
    : (W = a[57]);
  let G;
  a[58] !== f ||
  a[59] !== _ ||
  a[60] !== y ||
  a[61] !== u ||
  a[62] !== j ||
  a[63] !== g ||
  a[64] !== w ||
  a[65] !== d ||
  a[66] !== C ||
  a[67] !== fe ||
  a[68] !== O ||
  a[69] !== v
    ? ((G = f
        ? null
        : (0, x.jsx)(l, {
            spacing: `large`,
            children: (0, x.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                (0, x.jsx)(`p`, {
                  className: `text-sm text-secondary select-none`,
                  children: (0, x.jsx)(r, {
                    id: `personalVault.savingDescription`,
                    defaultMessage: `Network secret values stay hidden after saving. All entries are optional.`,
                    description: `Guidance in the add and edit personal vault forms: saved network secret values cannot be viewed afterward, while ordinary environment variables can be read when editing. Saving vault entries is optional.`,
                  }),
                }),
                d == null
                  ? (0, x.jsx)(ye, {
                      namespace: g,
                      disabled: w,
                      onChange: (e) => {
                        (ge(e), Se(!1));
                      },
                    })
                  : null,
                (0, x.jsxs)(`div`, {
                  className: `flex flex-col gap-2`,
                  children: [
                    (0, x.jsx)(`label`, {
                      htmlFor: `personal-secret-key`,
                      className: `text-sm select-none`,
                      children: (0, x.jsx)(r, {
                        id: `personalVault.key`,
                        defaultMessage: `Key`,
                        description: `Environment variable name used to match a personal secret`,
                      }),
                    }),
                    (0, x.jsx)(me, {
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
                      children: (0, x.jsx)(r, {
                        id: `personalVault.value`,
                        defaultMessage: `Value`,
                        description: `Secure input for a new or replacement personal secret value`,
                      }),
                    }),
                    (0, x.jsx)(me, {
                      id: `personal-secret-value`,
                      "aria-describedby": d == null ? void 0 : `personal-secret-saved-value`,
                      name: `value`,
                      defaultValue: g === `not_sensitive` ? u : void 0,
                      type: g === `not_sensitive` || v ? `text` : `password`,
                      placeholder: d != null && g === `sensitive` ? `••••••••••••` : void 0,
                      autoComplete: g === `not_sensitive` ? `off` : `new-password`,
                      spellCheck: !1,
                      required: d == null,
                      disabled: w,
                      onChange: (e) => Te(e.currentTarget.value.length > 0),
                      trailingControl:
                        g === `sensitive` && (d == null || y)
                          ? (0, x.jsx)(de, {
                              cloneCustomTrigger: !0,
                              tooltipContent: O,
                              children: (0, x.jsx)(t, {
                                "aria-label": O,
                                "aria-controls": `personal-secret-value`,
                                color: `ghost`,
                                size: `inputIcon`,
                                type: `button`,
                                disabled: w || !y,
                                onClick: () => Se(!v),
                                children: v ? (0, x.jsx)(s, {}) : (0, x.jsx)(ne, {}),
                              }),
                            })
                          : (0, x.jsx)(x.Fragment, {}),
                    }),
                    d == null
                      ? null
                      : (0, x.jsx)(`p`, {
                          id: `personal-secret-saved-value`,
                          className: `text-sm text-secondary select-none`,
                          children:
                            g === `not_sensitive`
                              ? (0, x.jsx)(r, {
                                  id: `personalVault.keepEnvironmentValue`,
                                  defaultMessage: `Leave unchanged or blank to keep the saved value`,
                                  description: `When editing a personal environment variable, only a new nonempty value replaces the saved value`,
                                })
                              : (0, x.jsx)(r, {
                                  id: `personalVault.keepValue`,
                                  defaultMessage: `Saved value is hidden. Leave blank to keep it.`,
                                  description: `Editing secret metadata does not require reading or replacing the stored value`,
                                }),
                        }),
                  ],
                }),
                fe && g === `not_sensitive`
                  ? (0, x.jsx)(`p`, {
                      role: `alert`,
                      children: (0, x.jsx)(r, {
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
      (a[58] = f),
      (a[59] = _),
      (a[60] = y),
      (a[61] = u),
      (a[62] = j),
      (a[63] = g),
      (a[64] = w),
      (a[65] = d),
      (a[66] = C),
      (a[67] = fe),
      (a[68] = O),
      (a[69] = v),
      (a[70] = G))
    : (G = a[70]);
  let K;
  a[71] === T
    ? (K = a[72])
    : ((K =
        T == null
          ? null
          : (0, x.jsx)(l, {
              spacing: `large`,
              children: (0, x.jsxs)(`p`, {
                role: `alert`,
                className: `text-sm text-danger`,
                children: [
                  T === `permission`
                    ? (0, x.jsx)(r, {
                        id: `personalVault.permissionError`,
                        defaultMessage: `Your account no longer has access. Close this dialog and sign in again.`,
                        description: `A personal vault operation failed authorization`,
                      })
                    : null,
                  T === `delete`
                    ? (0, x.jsx)(r, {
                        id: `personalVault.deleteError`,
                        defaultMessage: `Couldn’t confirm deletion. Retry or close this dialog to reload the vault.`,
                        description: `A personal secret deletion failed or its result was lost`,
                      })
                    : null,
                  T === `save`
                    ? (0, x.jsx)(r, {
                        id: `personalVault.saveError`,
                        defaultMessage: `Couldn’t confirm the save. Check the vault before trying again, and make sure the key does not overlap another secret’s environments.`,
                        description: `A personal secret save failed or its result was lost; never display the backend error or secret value`,
                      })
                    : null,
                ],
              }),
            })),
      (a[71] = T),
      (a[72] = K));
  let q;
  a[73] !== g || a[74] !== p ? ((q = () => p(g)), (a[73] = g), (a[74] = p), (a[75] = q)) : (q = a[75]);
  let J;
  a[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, x.jsx)(r, {
        id: `personalVault.cancel`,
        defaultMessage: `Cancel`,
        description: `Close the personal secret dialog without saving`,
      })),
      (a[76] = J))
    : (J = a[76]);
  let Y;
  a[77] !== w || a[78] !== q
    ? ((Y = (0, x.jsx)(t, { color: `secondary`, type: `button`, disabled: w, onClick: q, children: J })),
      (a[77] = w),
      (a[78] = q),
      (a[79] = Y))
    : (Y = a[79]);
  let ke = f ? `danger` : `primary`,
    Ae = T === `permission` || (!f && (!k || j)),
    X;
  a[80] === f
    ? (X = a[81])
    : ((X = f
        ? (0, x.jsx)(r, {
            id: `personalVault.delete`,
            defaultMessage: `Delete`,
            description: `Delete a personal secret`,
          })
        : (0, x.jsx)(r, {
            id: `personalVault.save`,
            defaultMessage: `Save`,
            description: `Save a personal secret and its configuration targets`,
          })),
      (a[80] = f),
      (a[81] = X));
  let Z;
  a[82] !== w || a[83] !== ke || a[84] !== Ae || a[85] !== X
    ? ((Z = (0, x.jsx)(t, { color: ke, type: `submit`, loading: w, disabled: Ae, children: X })),
      (a[82] = w),
      (a[83] = ke),
      (a[84] = Ae),
      (a[85] = X),
      (a[86] = Z))
    : (Z = a[86]);
  let Q;
  a[87] !== Y || a[88] !== Z
    ? ((Q = (0, x.jsx)(l, {
        spacing: `large`,
        children: (0, x.jsxs)(ue, { expandSingleButton: !1, children: [Y, Z] }),
      })),
      (a[87] = Y),
      (a[88] = Z),
      (a[89] = Q))
    : (Q = a[89]);
  let $;
  a[90] !== W || a[91] !== G || a[92] !== K || a[93] !== Q || a[94] !== I
    ? (($ = (0, x.jsxs)(le, { as: `form`, onSubmit: I, size: `viewport`, children: [W, G, K, Q] })),
      (a[90] = W),
      (a[91] = G),
      (a[92] = K),
      (a[93] = Q),
      (a[94] = I),
      (a[95] = $))
    : ($ = a[95]);
  let je;
  return (
    a[96] !== $ || a[97] !== F
      ? ((je = (0, x.jsx)(ce, { open: !0, onOpenChange: F, children: $ })),
        (a[96] = $),
        (a[97] = F),
        (a[98] = je))
      : (je = a[98]),
    je
  );
}
function Ce() {
  return null;
}
var we, b, x;
function Te() {
  return (Te = e(() => {
    ((we = f()),
      a(),
      ge(),
      (b = h()),
      se(),
      _(),
      fe(),
      d(),
      ae(),
      o(),
      g(),
      c(),
      Se(),
      u(),
      p(),
      ve(),
      v(),
      (x = m()));
  }))();
}
Te();
export { y as PersonalSecretDialog };
//# sourceMappingURL=secret-dialog-28ef7dc83c1d.js.map
