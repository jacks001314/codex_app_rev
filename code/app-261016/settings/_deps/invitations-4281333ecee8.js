import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BO as r,
  FBt as i,
  HO as a,
  IO as ee,
  JO as o,
  KO as s,
  LNt as c,
  LO as te,
  Lit as l,
  Lst as u,
  NSt as d,
  Oit as f,
  PBt as p,
  Qst as ne,
  RO as re,
  Rst as ie,
  TY as m,
  USt as h,
  Vit as g,
  Vrt as _,
  WO as ae,
  XOt as oe,
  Y3 as v,
  YOt as y,
  Z3 as se,
  ZSt as b,
  gK as ce,
  jit as x,
  okt as S,
  qO as le,
  qrt as ue,
  tkt as C,
  vst as w,
  yst as de,
  zO as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as T,
  BRr as pe,
  GLn as E,
  QF as me,
  ZLn as he,
  eI as D,
  eMr as O,
  iRr as ge,
  nMr as k,
  qLn as A,
  tyr as j,
  wLr as M,
  zRr as N,
} from "./app-initial-ad16eaadf81f.js";
import { a as P, i as F, o as I, r as L } from "./parsePhoneNumber-d60824298d64.js";
import { n as R, t as z } from "./phone-number-input-c1e0f7bd6044.js";
import { n as B, t as V } from "./withMetadataArgument-66f337837d55.js";
import { n as _e, t as H } from "./radio-group-8a1b881bed8e.js";
import { i as U, n as ve, r as W, t as G } from "./queries-94cb24d2279c.js";
import { a as K, c as q, i as ye, n as J, r as be, t as xe } from "./shared-b5afe1ea7194.js";
import { n as Se, t as Y } from "./parental-controls-invitation-background-c88ddd8be059.js";
function X(e) {
  "@babel/helpers - typeof";
  return (
    (X =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    X(e)
  );
}
function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Z(Object(n), !0).forEach(function (t) {
          we(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Z(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function we(e, t, n) {
  return (
    (t = Te(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Te(e) {
  var t = Ee(e, `string`);
  return X(t) == `symbol` ? t : t + ``;
}
function Ee(e, t) {
  if (X(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (X(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function De() {
  var e = I(arguments),
    t = e.text,
    n = e.options,
    r = e.metadata;
  n = Ce(Ce({}, n), {}, { extract: !1 });
  var i = F(t, n, r);
  return (i && i.isValid()) || !1;
}
function Oe() {
  return (Oe = e(() => {
    (P(), L());
  }))();
}
function ke() {
  return B(De, arguments);
}
function Ae() {
  return (Ae = e(() => {
    (V(), Oe());
  }))();
}
var je, Me;
function Ne() {
  return (Ne = e(() => {
    (i(),
      (je = c()),
      (Me = (e) =>
        (0, je.jsxs)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, je.jsx)(`path`, {
              d: `M10.5 11.25C12.1569 11.25 13.5 9.90685 13.5 8.25C13.5 6.59315 12.1569 5.25 10.5 5.25C8.84315 5.25 7.5 6.59315 7.5 8.25C7.5 9.90685 8.84315 11.25 10.5 11.25Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
            }),
            (0, je.jsx)(`path`, {
              d: `M4.5 18.75C4.5 15.4363 7.18629 12.75 10.5 12.75C11.6177 12.75 12.664 13.0556 13.5599 13.5878`,
              stroke: `currentColor`,
              strokeLinecap: `round`,
              strokeWidth: 1.5,
            }),
            (0, je.jsx)(`path`, {
              d: `M17.25 19.5C17.1178 19.5 16.9856 19.4652 16.8675 19.3957C14.378 17.9305 13.5 16.4158 13.5 15.1875C13.5 14.0505 14.361 13.125 15.425 13.125C16.0064 13.125 16.4614 13.3988 16.7812 13.7137C16.8988 13.8295 17.1012 13.8295 17.2188 13.7137C17.5386 13.3988 17.9936 13.125 18.575 13.125C19.639 13.125 20.5 14.0505 20.5 15.1875C20.5 16.4158 19.622 17.9305 17.1325 19.3957C17.0144 19.4652 16.8822 19.5 16.75 19.5H17.25Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }))();
}
function Pe(e) {
  if (e == null) return null;
  switch (e) {
    case `owner`:
    case `parent`:
      return `parent`;
    case `member_role`:
    case `teen`:
      return `teen`;
    case `child`:
      return `child`;
    default:
      return null;
  }
}
function Fe() {
  return (Fe = e(() => {}))();
}
function Ie(e) {
  let n = (0, Ge.c)(99),
    { account: i, amphoraId: a, forceTeen: o, forceParent: c, onClose: l } = e,
    u = c !== void 0 && c,
    d = t(ne),
    f = S(),
    p = ie(),
    m = (0, Q.useRef)(null),
    h,
    g;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => () => {
        m.current?.abort();
      }),
      (g = []),
      (n[0] = h),
      (n[1] = g))
    : ((h = n[0]), (g = n[1])),
    (0, Q.useEffect)(h, g));
  let [_, oe] = (0, Q.useState)(a),
    [y, se] = (0, Q.useState)(`email`),
    [b, ce] = (0, Q.useState)(``),
    [x, ue] = (0, Q.useState)(``),
    w;
  n[2] !== u || n[3] !== o
    ? ((w = () => (o ? `teen` : u ? `parent` : null)), (n[2] = u), (n[3] = o), (n[4] = w))
    : (w = n[4]);
  let [T, pe] = (0, Q.useState)(w),
    [E, me] = (0, Q.useState)(!1),
    D;
  n[5] !== b || n[6] !== y || n[7] !== x
    ? ((D = y === `email` ? b.trim() : x.trim()), (n[5] = b), (n[6] = y), (n[7] = x), (n[8] = D))
    : (D = n[8]);
  let O = D,
    k;
  n[9] !== i || n[10] !== a || n[11] !== p || n[12] !== _ || n[13] !== O || n[14] !== T || n[15] !== d
    ? ((k = async () => {
        if (T == null) return;
        if (m.current || !U(d, i)) throw Error(`Family account changed before inviting`);
        let e = new AbortController();
        m.current = e;
        let t = d.watch((t) => {
            U(t, i) || e.abort();
          }),
          n = () => {
            if (e.signal.aborted || !U(d, i)) throw new DOMException(`Account changed`, `AbortError`);
          },
          r = { "ChatGPT-Account-ID": i.accountId };
        return (
          _ == null || a != null
            ? ge.safeGet(`/amphora`, { additionalHeaders: r, signal: e.signal }).then((e) => {
                n();
                let t = Pe(e.role);
                if (
                  (_ != null && e.id !== _) ||
                  (e.id && (T === `teen` ? t !== `parent` : t !== `teen` && t !== `child`))
                )
                  throw Error(`Family membership changed before inviting`);
                return e.id ?? _;
              })
            : Promise.resolve(_)
        )
          .then(async (t) => {
            let a = t;
            if (a == null) {
              let t = await ge.safePost(`/amphora`, {
                additionalHeaders: r,
                requestBody: { role: T === `parent` ? `teen` : `parent` },
                signal: e.signal,
              });
              if ((n(), !t.id)) throw Error(`Family creation returned no group`);
              ((a = t.id),
                oe(a),
                await p.invalidateQueries({
                  queryKey: ve(i.userId, i.accountId).current.queryKey,
                  refetchType: `none`,
                }));
            } else {
              let t = await ge.safeGet(`/amphora/{amphora_id}/members`, {
                additionalHeaders: r,
                parameters: { path: { amphora_id: encodeURIComponent(a) } },
                signal: e.signal,
              });
              if (
                (n(),
                t.items.some((e) => {
                  let { account_identifier: t, email: n, status: r, user_id: a } = e;
                  return (
                    (r === `invited` || (r === `accepted` && a !== i.userId)) &&
                    (t?.toLowerCase() === O.toLowerCase() || n?.toLowerCase() === O.toLowerCase())
                  );
                }))
              )
                return;
              if (t.total > t.items.length) throw Error(`Family members could not be fully checked`);
              oe(a);
            }
            (n(),
              await ge.safePost(`/amphora/{amphora_id}/members`, {
                additionalHeaders: r,
                parameters: { path: { amphora_id: encodeURIComponent(a) } },
                requestBody: { members: [{ account_identifier: O, role: T }] },
                signal: e.signal,
              }));
          })
          .finally(() => {
            (t(), m.current === e && (m.current = null));
          });
      }),
      (n[9] = i),
      (n[10] = a),
      (n[11] = p),
      (n[12] = _),
      (n[13] = O),
      (n[14] = T),
      (n[15] = d),
      (n[16] = k))
    : (k = n[16]);
  let A;
  n[17] !== i || n[18] !== p || n[19] !== l || n[20] !== d
    ? ((A = async () => {
        U(d, i) &&
          (await p.invalidateQueries({ queryKey: [`chatgpt-parental-controls`, i.userId, i.accountId] }),
          U(d, i) && l());
      }),
      (n[17] = i),
      (n[18] = p),
      (n[19] = l),
      (n[20] = d),
      (n[21] = A))
    : (A = n[21]);
  let j;
  n[22] !== k || n[23] !== A
    ? ((j = { mutationFn: k, onSuccess: A }), (n[22] = k), (n[23] = A), (n[24] = j))
    : (j = n[24]);
  let { mutate: M, isPending: N, isError: P, error: F } = de(j),
    I;
  n[25] !== i || n[26] !== a || n[27] !== p || n[28] !== _ || n[29] !== l
    ? ((I = () => {
        (_ && !a && p.invalidateQueries({ queryKey: ve(i.userId, i.accountId).current.queryKey }), l());
      }),
      (n[25] = i),
      (n[26] = a),
      (n[27] = p),
      (n[28] = _),
      (n[29] = l),
      (n[30] = I))
    : (I = n[30]);
  let L = I,
    R;
  n[31] !== L || n[32] !== N
    ? ((R = (e) => {
        !e && !N && L();
      }),
      (n[31] = L),
      (n[32] = N),
      (n[33] = R))
    : (R = n[33]);
  let B;
  n[34] !== O || n[35] !== N || n[36] !== y || n[37] !== M || n[38] !== x || n[39] !== T
    ? ((B = (e) => {
        e.preventDefault();
        let t =
          y === `phone`
            ? ke(x)
            : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
                O,
              );
        (me(!t), t && T && !N && M());
      }),
      (n[34] = O),
      (n[35] = N),
      (n[36] = y),
      (n[37] = M),
      (n[38] = x),
      (n[39] = T),
      (n[40] = B))
    : (B = n[40]);
  let V;
  n[41] === o
    ? (V = n[42])
    : ((V = (0, $.jsx)(re, {
        titleSize: `base`,
        title: (0, $.jsx)(le, {
          children: o
            ? (0, $.jsx)(C, {
                id: `amphora.inviteChildModalTitle`,
                defaultMessage: `Add a child`,
                description: `Title for child invite modal`,
              })
            : (0, $.jsx)(C, {
                id: `amphora.inviteMemberModalTitle`,
                defaultMessage: `Invite family member`,
                description: `Title for family invite modal`,
              }),
        }),
      })),
      (n[41] = o),
      (n[42] = V));
  let H;
  n[43] === y
    ? (H = n[44])
    : ((H = (0, $.jsx)(`label`, {
        className: `text-sm font-medium`,
        htmlFor: `family-invite-identifier`,
        children:
          y === `email`
            ? (0, $.jsx)(C, {
                id: `amphora.members.invitesInputLabel`,
                defaultMessage: `Email address`,
                description: `Label for invite email input`,
              })
            : (0, $.jsx)(C, {
                id: `amphora.members.invitesPhoneInputLabel`,
                defaultMessage: `Phone number`,
                description: `Label for invite phone input`,
              }),
      })),
      (n[43] = y),
      (n[44] = H));
  let W;
  n[45] === y
    ? (W = n[46])
    : ((W = (0, $.jsx)(v, {
        color: `ghost`,
        onClick: () => {
          (se(y === `email` ? `phone` : `email`), me(!1));
        },
        children:
          y === `email`
            ? (0, $.jsx)(C, {
                id: `amphora.members.usePhoneLink`,
                defaultMessage: `Use phone`,
                description: `Link label to switch invite input to phone`,
              })
            : (0, $.jsx)(C, {
                id: `amphora.members.useEmailLink`,
                defaultMessage: `Use email`,
                description: `Link label to switch invite input to email`,
              }),
      })),
      (n[45] = y),
      (n[46] = W));
  let G;
  n[47] !== H || n[48] !== W
    ? ((G = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 text-sm`,
        children: [H, W],
      })),
      (n[47] = H),
      (n[48] = W),
      (n[49] = G))
    : (G = n[49]);
  let K;
  n[50] !== b || n[51] !== f || n[52] !== E || n[53] !== N || n[54] !== y || n[55] !== x
    ? ((K =
        y === `phone`
          ? (0, $.jsx)(z, {
              id: `family-invite-identifier`,
              name: `account_identifier`,
              autoFocus: !0,
              value: x,
              onChange: (e) => {
                (ue(e), me(!1));
              },
              "aria-invalid": E,
              disabled: N,
              placeholder: f.formatMessage({
                id: `settings.chatGpt.parentalControls.phonePlaceholder`,
                defaultMessage: `Phone number`,
                description: `Placeholder for a family invitation phone number in the selected country`,
              }),
            })
          : (0, $.jsx)(he, {
              id: `family-invite-identifier`,
              name: `account_identifier`,
              autoFocus: !0,
              type: `email`,
              value: b,
              onChange: (e) => {
                (ce(e.target.value), me(!1));
              },
              "aria-invalid": E,
              disabled: N,
              placeholder: f.formatMessage({
                id: `amphora.members.invitesInputPlaceholder2`,
                defaultMessage: `name@email.com`,
                description: `Placeholder for invite email input`,
              }),
            })),
      (n[50] = b),
      (n[51] = f),
      (n[52] = E),
      (n[53] = N),
      (n[54] = y),
      (n[55] = x),
      (n[56] = K))
    : (K = n[56]);
  let q;
  n[57] !== E || n[58] !== y
    ? ((q =
        E &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children:
            y === `email`
              ? (0, $.jsx)(C, {
                  id: `amphora.members.invalidEmailError`,
                  defaultMessage: `Enter a valid email address.`,
                  description: `Error message shown when the invite email address fails validation.`,
                })
              : (0, $.jsx)(C, {
                  id: `amphora.members.invalidPhoneError`,
                  defaultMessage: `Enter a valid phone number.`,
                  description: `Error message shown when the invite phone number fails validation.`,
                }),
        })),
      (n[57] = E),
      (n[58] = y),
      (n[59] = q))
    : (q = n[59]);
  let ye;
  n[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(s, {
        className: `text-xs`,
        children: (0, $.jsx)(C, {
          id: `amphora.members.invitesInputHelperText2`,
          defaultMessage: `If your family member is new to ChatGPT, they'll be asked to create an account.`,
          description: `Helper text shown under invite email input`,
        }),
      })),
      (n[60] = ye))
    : (ye = n[60]);
  let J;
  n[61] !== G || n[62] !== K || n[63] !== q
    ? ((J = (0, $.jsxs)(r, { children: [G, K, q, ye] })), (n[61] = G), (n[62] = K), (n[63] = q), (n[64] = J))
    : (J = n[64]);
  let be;
  n[65] !== u || n[66] !== o || n[67] !== f || n[68] !== N || n[69] !== T
    ? ((be =
        !o &&
        !u &&
        (0, $.jsxs)(`fieldset`, {
          className: `flex flex-col gap-3`,
          disabled: N,
          children: [
            (0, $.jsx)(`legend`, {
              className: `pb-2 text-sm font-medium`,
              children: (0, $.jsx)(C, { ...Ke.relationshipQuestion }),
            }),
            (0, $.jsxs)(_e, {
              name: `relationship`,
              value: T ?? ``,
              onChange: (e) => pe(e || null),
              direction: `col`,
              disabled: N,
              "aria-label": f.formatMessage(Ke.relationshipQuestion),
              children: [
                (0, $.jsx)(_e.Item, {
                  value: `parent`,
                  children: (0, $.jsx)(C, {
                    id: `amphora.members.inviteModalRoleOwner`,
                    defaultMessage: `My parent or guardian`,
                    description: `Parent or guardian option in family invite modal`,
                  }),
                }),
                (0, $.jsx)(_e.Item, {
                  value: `teen`,
                  children: (0, $.jsx)(C, {
                    id: `amphora.members.inviteModalRoleMember`,
                    defaultMessage: `My child`,
                    description: `Child option in family invite modal`,
                  }),
                }),
              ],
            }),
          ],
        })),
      (n[65] = u),
      (n[66] = o),
      (n[67] = f),
      (n[68] = N),
      (n[69] = T),
      (n[70] = be))
    : (be = n[70]);
  let xe;
  n[71] === T ? (xe = n[72]) : ((xe = T && (0, $.jsx)(Le, { role: T })), (n[71] = T), (n[72] = xe));
  let Se;
  n[73] !== F || n[74] !== P
    ? ((Se =
        P &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, $.jsx)(C, {
            id: `amphora.members.inviteError`,
            defaultMessage: `Unable to send invite: {error}`,
            description: `Error shown when a family invitation cannot be sent; error contains the server's failure message`,
            values: { error: We(F) },
          }),
        })),
      (n[73] = F),
      (n[74] = P),
      (n[75] = Se))
    : (Se = n[75]);
  let Y;
  n[76] !== J || n[77] !== be || n[78] !== xe || n[79] !== Se
    ? ((Y = (0, $.jsxs)(fe, { className: `gap-5`, spacing: `large`, children: [J, be, xe, Se] })),
      (n[76] = J),
      (n[77] = be),
      (n[78] = xe),
      (n[79] = Se),
      (n[80] = Y))
    : (Y = n[80]);
  let X;
  n[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, $.jsx)(C, {
        id: `amphora.members.cancelButton`,
        defaultMessage: `Cancel`,
        description: `Cancel button text in family invite modal`,
      })),
      (n[81] = X))
    : (X = n[81]);
  let Z;
  n[82] !== L || n[83] !== N
    ? ((Z = (0, $.jsx)(v, { color: `secondary`, onClick: L, disabled: N, children: X })),
      (n[82] = L),
      (n[83] = N),
      (n[84] = Z))
    : (Z = n[84]);
  let Ce = !T || !O || E || N,
    we;
  n[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, $.jsx)(C, {
        id: `amphora.members.modalInviteButton`,
        defaultMessage: `Send`,
        description: `Invite button text in family invite modal`,
      })),
      (n[85] = we))
    : (we = n[85]);
  let Te;
  n[86] === Ce
    ? (Te = n[87])
    : ((Te = (0, $.jsx)(v, { type: `submit`, disabled: Ce, children: we })), (n[86] = Ce), (n[87] = Te));
  let Ee;
  n[88] !== Z || n[89] !== Te
    ? ((Ee = (0, $.jsx)(fe, { spacing: `large`, children: (0, $.jsxs)(te, { children: [Z, Te] }) })),
      (n[88] = Z),
      (n[89] = Te),
      (n[90] = Ee))
    : (Ee = n[90]);
  let De;
  n[91] !== B || n[92] !== V || n[93] !== Y || n[94] !== Ee
    ? ((De = (0, $.jsxs)(ee, { as: `form`, noValidate: !0, onSubmit: B, children: [V, Y, Ee] })),
      (n[91] = B),
      (n[92] = V),
      (n[93] = Y),
      (n[94] = Ee),
      (n[95] = De))
    : (De = n[95]);
  let Oe;
  return (
    n[96] !== R || n[97] !== De
      ? ((Oe = (0, $.jsx)(ae, {
          open: !0,
          size: `compact`,
          showDialogClose: !0,
          onOpenChange: R,
          children: De,
        })),
        (n[96] = R),
        (n[97] = De),
        (n[98] = Oe))
      : (Oe = n[98]),
    Oe
  );
}
function Le(e) {
  let t = (0, Ge.c)(2),
    { role: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`p`, {
          className: `text-xs text-secondary select-none`,
          children:
            n === `teen`
              ? (0, $.jsx)(C, {
                  id: `settings.chatGpt.parentalControls.inviteChildPrivacyLink`,
                  defaultMessage: `If your child accepts, you'll be able to manage some of their settings, set time limits, and add safeguards that work for your family. You won't have access to details about your teen's conversations with ChatGPT, except in certain rare safety circumstances. You can unlink accounts anytime. <link>Learn more</link>`,
                  description: `Privacy and control explanation when inviting a child to parental controls`,
                  values: { link: ze },
                })
              : (0, $.jsx)(C, {
                  id: `settings.chatGpt.parentalControls.inviteParentPrivacyLink`,
                  defaultMessage: `Your parent or guardian will be able to adjust certain features, set time limits, and add safeguards to help guide your experience. We won't share details of your conversations with ChatGPT, except in certain rare safety circumstances. You can unlink accounts anytime. <link>Learn more</link>`,
                  description: `Privacy and control explanation when inviting a parent to parental controls`,
                  values: { link: Re },
                }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Re(e) {
  return (0, $.jsx)(E, {
    appearance: `secondary`,
    href: `https://help.openai.com/en/articles/12315553-parental-controls-faq`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function ze(e) {
  return (0, $.jsx)(E, {
    appearance: `secondary`,
    href: `https://help.openai.com/en/articles/12315553-parental-controls-faq`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Be(e) {
  let n = (0, Ge.c)(67),
    { account: r, amphoraId: i, member: a, onBack: o } = e,
    c = t(ne),
    [l, u] = (0, Q.useState)(null),
    d = ie(),
    f = (0, Q.useRef)(null),
    p,
    m;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => () => {
        f.current?.abort();
      }),
      (m = []),
      (n[0] = p),
      (n[1] = m))
    : ((p = n[0]), (m = n[1])),
    (0, Q.useEffect)(p, m));
  let h = a.email || a.account_identifier,
    g;
  n[2] !== r.accountId || n[3] !== r.userId
    ? ((g = [`chatgpt-parental-controls`, r.userId, r.accountId]),
      (n[2] = r.accountId),
      (n[3] = r.userId),
      (n[4] = g))
    : (g = n[4]);
  let _ = g,
    oe;
  n[5] !== r || n[6] !== i || n[7] !== d || n[8] !== _ || n[9] !== h || n[10] !== a.email || n[11] !== c
    ? ((oe = async (e) => {
        if (!h) throw Error(`Missing invitation identifier`);
        if (f.current || !U(c, r)) throw Error(`Family account changed before updating invitation`);
        let t = new AbortController();
        f.current = t;
        let n = c.watch((e) => {
            U(e, r) || t.abort();
          }),
          ee = { "ChatGPT-Account-ID": r.accountId },
          o = { path: { amphora_id: encodeURIComponent(i) } },
          s = !1;
        return d
          .cancelQueries({ queryKey: _ })
          .then(() => {
            if (t.signal.aborted) throw new DOMException(`Account changed`, `AbortError`);
            return e === `resend`
              ? ge.safePost(`/amphora/{amphora_id}/members/resend`, {
                  additionalHeaders: ee,
                  parameters: o,
                  requestBody: { account_identifier: h },
                  signal: t.signal,
                })
              : ge.safePost(`/amphora/{amphora_id}/remove`, {
                  additionalHeaders: ee,
                  parameters: o,
                  requestBody: a.email ? { email: a.email } : { account_identifier: h },
                  signal: t.signal,
                });
          })
          .then(() => {
            if (t.signal.aborted || !U(c, r)) throw new DOMException(`Account changed`, `AbortError`);
            s = !0;
          })
          .finally(() => {
            (n(),
              f.current === t && (f.current = null),
              d.invalidateQueries({ queryKey: _, refetchType: !s && U(c, r) ? `active` : `none` }));
          });
      }),
      (n[5] = r),
      (n[6] = i),
      (n[7] = d),
      (n[8] = _),
      (n[9] = h),
      (n[10] = a.email),
      (n[11] = c),
      (n[12] = oe))
    : (oe = n[12]);
  let y;
  n[13] !== r || n[14] !== d || n[15] !== _ || n[16] !== o || n[17] !== c
    ? ((y = (e, t) => {
        U(c, r) && (t === `resend` ? u(`sent`) : (o(), d.invalidateQueries({ queryKey: _ })));
      }),
      (n[13] = r),
      (n[14] = d),
      (n[15] = _),
      (n[16] = o),
      (n[17] = c),
      (n[18] = y))
    : (y = n[18]);
  let se;
  n[19] !== oe || n[20] !== y
    ? ((se = { mutationFn: oe, onSuccess: y }), (n[19] = oe), (n[20] = y), (n[21] = se))
    : (se = n[21]);
  let { mutate: b, isPending: ce, isError: x, error: S, variables: ue } = de(se),
    w;
  n[22] !== d || n[23] !== _
    ? ((w = () => {
        (u(null), d.invalidateQueries({ queryKey: _ }));
      }),
      (n[22] = d),
      (n[23] = _),
      (n[24] = w))
    : (w = n[24]);
  let T = w,
    pe;
  n[25] === o ? (pe = n[26]) : ((pe = (0, $.jsx)(J, { onClick: o })), (n[25] = o), (n[26] = pe));
  let E;
  n[27] === a ? (E = n[28]) : ((E = (0, $.jsx)(K, { member: a })), (n[27] = a), (n[28] = E));
  let D = ce || !h,
    O,
    k;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = () => u(`resend`)),
      (k = (0, $.jsx)(C, {
        id: `amphora.invited.resend`,
        defaultMessage: `Resend invitation`,
        description: `Resend invitation button`,
      })),
      (n[29] = O),
      (n[30] = k))
    : ((O = n[29]), (k = n[30]));
  let A;
  n[31] === D
    ? (A = n[32])
    : ((A = (0, $.jsx)(v, { color: `secondary`, disabled: D, onClick: O, children: k })),
      (n[31] = D),
      (n[32] = A));
  let j = ce || !h,
    M;
  n[33] === b ? (M = n[34]) : ((M = () => b(`cancel`)), (n[33] = b), (n[34] = M));
  let N;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(C, {
        id: `amphora.invited.cancel`,
        defaultMessage: `Cancel invitation`,
        description: `Cancel invitation button`,
      })),
      (n[35] = N))
    : (N = n[35]);
  let P;
  n[36] !== j || n[37] !== M
    ? ((P = (0, $.jsx)(v, { color: `danger`, disabled: j, onClick: M, children: N })),
      (n[36] = j),
      (n[37] = M),
      (n[38] = P))
    : (P = n[38]);
  let F;
  n[39] !== A || n[40] !== P
    ? ((F = (0, $.jsxs)(`div`, { className: `flex flex-wrap gap-3`, children: [A, P] })),
      (n[39] = A),
      (n[40] = P),
      (n[41] = F))
    : (F = n[41]);
  let I;
  n[42] !== S || n[43] !== x || n[44] !== ue
    ? ((I =
        x &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children:
            ue === `resend`
              ? (0, $.jsx)(C, {
                  id: `amphora.invited.resend.error`,
                  defaultMessage: `Unable to resend invite: {error}`,
                  description: `Error when resending a family invitation; error contains the failure message`,
                  values: { error: We(S) },
                })
              : (0, $.jsx)(C, {
                  id: `amphora.invited.cancel.error`,
                  defaultMessage: `Unable to cancel invite: {error}`,
                  description: `Error when canceling a family invitation; error contains the failure message`,
                  values: { error: We(S) },
                }),
        })),
      (n[42] = S),
      (n[43] = x),
      (n[44] = ue),
      (n[45] = I))
    : (I = n[45]);
  let L;
  n[46] === a.role
    ? (L = n[47])
    : ((L =
        a.role === `owner`
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(C, {
                id: `amphora.invited.childLinkParentInviteDescription`,
                defaultMessage: `You can link to one parent at a time`,
                description: `Helper text shown in the page to manage a parent invitation.`,
              }),
            })
          : (0, $.jsx)(ye, {})),
      (n[46] = a.role),
      (n[47] = L));
  let R;
  n[48] !== l || n[49] !== S || n[50] !== h || n[51] !== x || n[52] !== ce || n[53] !== b
    ? ((R =
        l === `resend` &&
        (0, $.jsxs)(be, {
          title: (0, $.jsx)(C, {
            id: `amphora.invited.resend.confirmTitle`,
            defaultMessage: `Resend invitation`,
            description: `Title for resend confirmation modal`,
          }),
          onClose: () => u(null),
          onSubmit: () => b(`resend`),
          pending: ce,
          confirmLabel: (0, $.jsx)(C, {
            id: `amphora.invited.resend.send`,
            defaultMessage: `Send`,
            description: `Send button in resend confirmation modal`,
          }),
          children: [
            (0, $.jsx)(s, {
              children: (0, $.jsx)(C, {
                id: `amphora.invited.resend.confirmDesc`,
                defaultMessage: `We’ll send another invite to your family member. If they’re new to ChatGPT, they’ll be asked to create an account.`,
                description: `Body text for resend confirmation modal`,
              }),
            }),
            (0, $.jsx)(he, { name: `identifier`, "aria-label": h ?? ``, value: h ?? ``, disabled: !0 }),
            x &&
              (0, $.jsx)(`p`, {
                role: `alert`,
                className: `text-sm text-danger`,
                children: (0, $.jsx)(C, {
                  id: `amphora.invited.resend.error`,
                  defaultMessage: `Unable to resend invite: {error}`,
                  description: `Error when resending a family invitation; error contains the failure message`,
                  values: { error: We(S) },
                }),
              }),
          ],
        })),
      (n[48] = l),
      (n[49] = S),
      (n[50] = h),
      (n[51] = x),
      (n[52] = ce),
      (n[53] = b),
      (n[54] = R))
    : (R = n[54]);
  let z;
  n[55] !== l || n[56] !== T || n[57] !== h
    ? ((z =
        l === `sent` &&
        (0, $.jsx)(ae, {
          open: !0,
          size: `compact`,
          showDialogClose: !0,
          onOpenChange: T,
          children: (0, $.jsxs)(ee, {
            children: [
              (0, $.jsx)(re, {
                title: (0, $.jsx)(le, {
                  children: (0, $.jsx)(C, {
                    id: `amphora.invited.resend.sentTitle`,
                    defaultMessage: `Sent!`,
                    description: `Title for resend success modal`,
                  }),
                }),
              }),
              (0, $.jsx)(fe, {
                className: `flex flex-col gap-3`,
                children: (0, $.jsx)(s, {
                  children: (0, $.jsx)(C, {
                    id: `amphora.invited.resend.sentDesc`,
                    defaultMessage: `We sent {identifier} a new invite. If they’re new to ChatGPT, they’ll be asked to create a new account.`,
                    description: `Body text for resend success modal`,
                    values: { identifier: h },
                  }),
                }),
              }),
              (0, $.jsx)(te, {
                children: (0, $.jsx)(v, {
                  onClick: T,
                  children: (0, $.jsx)(C, {
                    id: `amphora.invited.done`,
                    defaultMessage: `Done`,
                    description: `Done button label`,
                  }),
                }),
              }),
            ],
          }),
        })),
      (n[55] = l),
      (n[56] = T),
      (n[57] = h),
      (n[58] = z))
    : (z = n[58]);
  let B;
  return (
    n[59] !== F || n[60] !== I || n[61] !== L || n[62] !== R || n[63] !== z || n[64] !== pe || n[65] !== E
      ? ((B = (0, $.jsxs)(me, { backSlot: pe, children: [E, F, I, L, R, z] })),
        (n[59] = F),
        (n[60] = I),
        (n[61] = L),
        (n[62] = R),
        (n[63] = z),
        (n[64] = pe),
        (n[65] = E),
        (n[66] = B))
      : (B = n[66]),
    B
  );
}
function Ve(e) {
  let n = (0, Ge.c)(148),
    { account: r, invitation: i, decision: a, onDecision: o, onClose: c } = e,
    l = t(ne),
    u = ie(),
    d = h(),
    f = i.payload,
    p = (0, Q.useRef)(null),
    m = (0, Q.useRef)(null),
    g = (0, Q.useRef)(a),
    [_, oe] = (0, Q.useState)(!1),
    [y, se] = (0, Q.useState)(a == null ? null : `dismiss`),
    b,
    S;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => () => {
        (p.current?.abort(), m.current?.(), (m.current = null));
      }),
      (S = []),
      (n[0] = b),
      (n[1] = S))
    : ((b = n[0]), (S = n[1])),
    (0, Q.useEffect)(b, S));
  let w;
  n[2] !== r.accountId || n[3] !== r.userId
    ? ((w = [`chatgpt-parental-controls`, r.userId, r.accountId]),
      (n[2] = r.accountId),
      (n[3] = r.userId),
      (n[4] = w))
    : (w = n[4]);
  let de = w,
    T;
  n[5] !== r.accountId || n[6] !== r.userId
    ? ((T = [`chatgpt-family-notifications`, r.userId, r.accountId]),
      (n[5] = r.accountId),
      (n[6] = r.userId),
      (n[7] = T))
    : (T = n[7]);
  let E = T,
    me;
  n[8] !== u || n[9] !== i.id || n[10] !== E
    ? ((me = () => {
        u.setQueriesData(
          { queryKey: E },
          (e) =>
            e && {
              ...e,
              items: e.items.map((e) =>
                e.id === i.id ? { ...e, reacted_to_at: new Date().toISOString() } : e,
              ),
            },
        );
      }),
      (n[8] = u),
      (n[9] = i.id),
      (n[10] = E),
      (n[11] = me))
    : (me = n[11]);
  let he = me,
    D;
  n[12] !== r || n[13] !== u || n[14] !== de || n[15] !== E || n[16] !== c || n[17] !== l
    ? ((D = () => {
        (c(),
          U(l, r) &&
            (u.invalidateQueries({ queryKey: de }),
            u.invalidateQueries({ queryKey: E }),
            l.query.snapshot(O).invalidate()));
      }),
      (n[12] = r),
      (n[13] = u),
      (n[14] = de),
      (n[15] = E),
      (n[16] = c),
      (n[17] = l),
      (n[18] = D))
    : (D = n[18]);
  let k = D,
    A;
  n[19] !== r ||
  n[20] !== u ||
  n[21] !== de ||
  n[22] !== k ||
  n[23] !== i.id ||
  n[24] !== he ||
  n[25] !== d ||
  n[26] !== E ||
  n[27] !== o ||
  n[28] !== f ||
  n[29] !== l
    ? ((A = (e) => {
        if (p.current != null || !U(l, r) || !f || !(`family_group_id` in f) || !f.family_group_id) return;
        let t = new AbortController();
        ((p.current = t), oe(!0), se(null));
        let n = l.watch((e) => {
          U(e, r) || t.abort();
        });
        m.current = n;
        let a = () => {
            if (t.signal.aborted || !U(l, r)) throw new DOMException(`Account changed`, `AbortError`);
          },
          ee = l.query.snapshot(O),
          s = async () => {
            (await Promise.allSettled([
              u.cancelQueries({ queryKey: de }),
              !t.signal.aborted && U(l, r) ? ee.cancel() : Promise.resolve(),
            ]),
              u.invalidateQueries({ queryKey: de, refetchType: `none` }),
              u.invalidateQueries({ queryKey: ee.queryKey, exact: !0, refetchType: `none` }));
          };
        (e != null && g.current == null
          ? ge
              .safePost(`/amphora/{amphora_id}/invite`, {
                additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
                expectedErrorStatuses: [404],
                parameters: { path: { amphora_id: f.family_group_id } },
                requestBody: { choice: e },
                signal: t.signal,
              })
              .then(async () => {
                (a(), (g.current = e), o(e), await s());
              })
              .catch((e) => {
                throw (
                  e instanceof x &&
                    e.status === 404 &&
                    !t.signal.aborted &&
                    U(l, r) &&
                    ((g.current = `unavailable`), o(`unavailable`)),
                  e
                );
              })
          : Promise.resolve()
        )
          .then(async () => {
            if (
              (a(),
              await ge.safePost(`/amphora/notifications/{notification_id}/reacted`, {
                additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
                parameters: { path: { notification_id: i.id } },
                signal: t.signal,
              }),
              a(),
              await u.cancelQueries({ queryKey: E }),
              a(),
              g.current === `accept`)
            ) {
              let e,
                t = l
                  .get(ue)
                  .info(
                    (0, $.jsx)(C, {
                      id: `amphora.familyInvite.acceptedBanner.title`,
                      defaultMessage: `Request accepted`,
                      description: `Title for the accepted family invite banner`,
                    }),
                    {
                      duration: 1 / 0,
                      onRemove: () => e?.(),
                      hasCloseButton: !0,
                      description:
                        f.role === `owner`
                          ? (0, $.jsx)(C, {
                              id: `amphora.familyInvite.acceptedBanner.description.owner`,
                              defaultMessage: `You can now manage parental controls for {inviterName}`,
                              description: `Accepted banner description when viewer is the parent`,
                              values: { inviterName: f.inviter_name || f.inviter_identifier },
                            })
                          : (0, $.jsx)(C, {
                              id: `amphora.familyInvite.acceptedBanner.description.member`,
                              defaultMessage: `{inviterName} can now manage your parental controls`,
                              description: `Accepted banner description when viewer is the teen; inviterName is the parent who sent the invitation`,
                              values: { inviterName: f.inviter_name || f.inviter_identifier },
                            }),
                      primaryAction: {
                        label: (0, $.jsx)(C, {
                          id: `amphora.familyInvite.acceptedBanner.cta`,
                          defaultMessage: `View settings`,
                          description: `Opens parental controls after accepting a family invitation`,
                        }),
                        onClick: () => {
                          (U(l, r) && d(`/settings/parental-controls`), t.close());
                        },
                      },
                    },
                  );
              e = l.watch((e) => {
                (e.get(pe) !== r.userId || e.get(N) !== r.accountId) && t.close();
              });
            }
            (he(), k());
          })
          .catch(() => {
            !t.signal.aborted &&
              U(l, r) &&
              (g.current === `unavailable`
                ? se(null)
                : se(g.current != null || e == null ? `dismiss` : `response`),
              e != null && g.current == null && s());
          })
          .finally(() => {
            (m.current === n && ((m.current = null), n()),
              p.current === t && (p.current = null),
              !t.signal.aborted && U(l, r) && oe(!1));
          });
      }),
      (n[19] = r),
      (n[20] = u),
      (n[21] = de),
      (n[22] = k),
      (n[23] = i.id),
      (n[24] = he),
      (n[25] = d),
      (n[26] = E),
      (n[27] = o),
      (n[28] = f),
      (n[29] = l),
      (n[30] = A))
    : (A = n[30]);
  let j = A,
    M;
  n[31] !== _ || n[32] !== c
    ? ((M = () => {
        _ || c();
      }),
      (n[31] = _),
      (n[32] = c),
      (n[33] = M))
    : (M = n[33]);
  let P = M;
  if (!f || !(`family_group_id` in f) || !f.family_group_id) return null;
  if (a === `reject` || a === `unavailable`) {
    let e;
    n[34] === P
      ? (e = n[35])
      : ((e = (e) => {
          e || P();
        }),
        (n[34] = P),
        (n[35] = e));
    let t;
    n[36] === j
      ? (t = n[37])
      : ((t = (e) => {
          (e.preventDefault(), j());
        }),
        (n[36] = j),
        (n[37] = t));
    let r;
    n[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(re, {
          title: (0, $.jsx)(le, {
            children: (0, $.jsx)(C, {
              id: `settings.chatGpt.familyInvitation.dismissTitle`,
              defaultMessage: `Invitation update`,
              description: `Title when a confirmed or unavailable family invitation still needs notification acknowledgement`,
            }),
          }),
        })),
        (n[38] = r))
      : (r = n[38]);
    let i;
    n[39] !== a || n[40] !== y
      ? ((i =
          (a === `unavailable` || y === `dismiss`) &&
          (0, $.jsx)(fe, {
            children: (0, $.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children:
                a === `unavailable`
                  ? (0, $.jsx)(C, {
                      id: `settings.chatGpt.familyInvitation.unavailable`,
                      defaultMessage: `This invitation is no longer available`,
                      description: `Family invitation that the server reports missing or already consumed`,
                    })
                  : (0, $.jsx)(C, {
                      id: `settings.chatGpt.familyInvitation.dismissError`,
                      defaultMessage: `Invitation declined. The notification couldn’t be dismissed. Retry, or close and return later.`,
                      description: `A confirmed decline whose notification acknowledgement has not succeeded`,
                    }),
            }),
          })),
        (n[39] = a),
        (n[40] = y),
        (n[41] = i))
      : (i = n[41]);
    let o;
    n[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(C, {
          id: `settings.chatGpt.familyInvitation.returnLater`,
          defaultMessage: `Return later`,
          description: `Leave the family invitation acknowledgement retry for later`,
        })),
        (n[42] = o))
      : (o = n[42]);
    let s;
    n[43] !== _ || n[44] !== P
      ? ((s = (0, $.jsx)(v, { type: `button`, color: `secondary`, disabled: _, onClick: P, children: o })),
        (n[43] = _),
        (n[44] = P),
        (n[45] = s))
      : (s = n[45]);
    let c;
    n[46] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, $.jsx)(C, {
          id: `settings.chatGpt.familyInvitation.retryDismiss`,
          defaultMessage: `Retry`,
          description: `Retry acknowledging a previously confirmed family invitation response`,
        })),
        (n[46] = c))
      : (c = n[46]);
    let l;
    n[47] === _
      ? (l = n[48])
      : ((l = (0, $.jsx)(v, { type: `submit`, loading: _, children: c })), (n[47] = _), (n[48] = l));
    let u;
    n[49] !== s || n[50] !== l
      ? ((u = (0, $.jsxs)(te, { children: [s, l] })), (n[49] = s), (n[50] = l), (n[51] = u))
      : (u = n[51]);
    let d;
    n[52] !== t || n[53] !== i || n[54] !== u
      ? ((d = (0, $.jsxs)(ee, { as: `form`, onSubmit: t, children: [r, i, u] })),
        (n[52] = t),
        (n[53] = i),
        (n[54] = u),
        (n[55] = d))
      : (d = n[55]);
    let f;
    return (
      n[56] !== d || n[57] !== e
        ? ((f = (0, $.jsx)(ae, {
            open: !0,
            size: `compact`,
            showDialogClose: !0,
            onOpenChange: e,
            children: d,
          })),
          (n[56] = d),
          (n[57] = e),
          (n[58] = f))
        : (f = n[58]),
      f
    );
  }
  if (a === `accept`) {
    let e;
    n[59] === P
      ? (e = n[60])
      : ((e = (e) => {
          e || P();
        }),
        (n[59] = P),
        (n[60] = e));
    let t;
    n[61] === j
      ? (t = n[62])
      : ((t = (e) => {
          (e.preventDefault(), j());
        }),
        (n[61] = j),
        (n[62] = t));
    let r;
    n[63] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(re, {
          title: (0, $.jsx)(le, {
            children: (0, $.jsx)(C, {
              id: `amphora.familyInvite.acceptedBanner.title`,
              defaultMessage: `Request accepted`,
              description: `Title for the accepted family invite banner`,
            }),
          }),
        })),
        (n[63] = r))
      : (r = n[63]);
    let i;
    n[64] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(s, {
          children: (0, $.jsx)(C, {
            id: `amphora.familyInvite.acceptedBanner.description.default`,
            defaultMessage: `Parental controls are now linked`,
            description: `Fallback accepted banner description`,
          }),
        })),
        (n[64] = i))
      : (i = n[64]);
    let a;
    n[65] === y
      ? (a = n[66])
      : ((a =
          y === `dismiss` &&
          (0, $.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, $.jsx)(C, {
              id: `settings.chatGpt.familyInvitation.acceptedDismissError`,
              defaultMessage: `Invitation accepted. The notification couldn’t be dismissed. Retry, or close and return later.`,
              description: `A confirmed acceptance whose notification acknowledgement has not succeeded`,
            }),
          })),
        (n[65] = y),
        (n[66] = a));
    let o;
    n[67] === a
      ? (o = n[68])
      : ((o = (0, $.jsxs)(fe, { className: `flex flex-col gap-3`, children: [i, a] })),
        (n[67] = a),
        (n[68] = o));
    let c;
    n[69] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, $.jsx)(C, {
          id: `settings.chatGpt.familyInvitation.returnAcceptedLater`,
          defaultMessage: `Return later`,
          description: `Leave a confirmed invitation acceptance with an acknowledgement retry available`,
        })),
        (n[69] = c))
      : (c = n[69]);
    let l;
    n[70] !== _ || n[71] !== P
      ? ((l = (0, $.jsx)(v, { type: `button`, color: `secondary`, disabled: _, onClick: P, children: c })),
        (n[70] = _),
        (n[71] = P),
        (n[72] = l))
      : (l = n[72]);
    let u;
    n[73] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, $.jsx)(C, {
          id: `settings.chatGpt.familyInvitation.retryAcceptedDismiss`,
          defaultMessage: `Retry`,
          description: `Retry acknowledging a confirmed invitation acceptance`,
        })),
        (n[73] = u))
      : (u = n[73]);
    let d;
    n[74] === _
      ? (d = n[75])
      : ((d = (0, $.jsx)(v, { type: `submit`, loading: _, children: u })), (n[74] = _), (n[75] = d));
    let f;
    n[76] !== l || n[77] !== d
      ? ((f = (0, $.jsx)(te, { children: (0, $.jsxs)($.Fragment, { children: [l, d] }) })),
        (n[76] = l),
        (n[77] = d),
        (n[78] = f))
      : (f = n[78]);
    let p;
    n[79] !== t || n[80] !== o || n[81] !== f
      ? ((p = (0, $.jsxs)(ee, { as: `form`, onSubmit: t, children: [r, o, f] })),
        (n[79] = t),
        (n[80] = o),
        (n[81] = f),
        (n[82] = p))
      : (p = n[82]);
    let ne;
    return (
      n[83] !== p || n[84] !== e
        ? ((ne = (0, $.jsx)(ae, {
            open: !0,
            size: `compact`,
            showDialogClose: !0,
            onOpenChange: e,
            children: p,
          })),
          (n[83] = p),
          (n[84] = e),
          (n[85] = ne))
        : (ne = n[85]),
      ne
    );
  }
  let F;
  n[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = { "aria-describedby": void 0 }), (n[86] = F))
    : (F = n[86]);
  let I;
  n[87] !== _ || n[88] !== y || n[89] !== P || n[90] !== j
    ? ((I = (e) => {
        !e && !_ && (y === `dismiss` ? P() : j());
      }),
      (n[87] = _),
      (n[88] = y),
      (n[89] = P),
      (n[90] = j),
      (n[91] = I))
    : (I = n[91]);
  let L;
  n[92] !== _ || n[93] !== j
    ? ((L = (e) => {
        (e.preventDefault(), _ || j(`accept`));
      }),
      (n[92] = _),
      (n[93] = j),
      (n[94] = L))
    : (L = n[94]);
  let R;
  n[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(`img`, { src: Se, alt: ``, className: `absolute size-full object-cover` })),
      (n[95] = R))
    : (R = n[95]);
  let z;
  n[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(`div`, {
        className: `flex size-20 translate-x-1 rotate-[-10deg] items-center justify-center rounded-[20px] bg-surface shadow-lg rtl:-translate-x-1 rtl:rotate-[10deg]`,
        children: (0, $.jsx)(ce, { className: `text-tertiary` }),
      })),
      (n[96] = z))
    : (z = n[96]);
  let B;
  n[97] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsxs)(`div`, {
        className: `relative grid h-[214px] shrink-0 place-items-center max-md:h-[136px]`,
        "aria-hidden": `true`,
        children: [
          R,
          (0, $.jsxs)(`div`, {
            className: `relative flex items-center`,
            "data-theme": `light`,
            children: [
              z,
              (0, $.jsx)(`div`, {
                className: `flex size-20 -translate-x-1 rotate-[10deg] items-center justify-center rounded-[20px] bg-surface shadow-lg rtl:translate-x-1 rtl:rotate-[-10deg]`,
                children: (0, $.jsx)(Me, { className: `size-10 text-default` }),
              }),
            ],
          }),
        ],
      })),
      (n[97] = B))
    : (B = n[97]);
  let V;
  n[98] !== f.inviter_identifier || n[99] !== f.inviter_name || n[100] !== f.role
    ? ((V = (0, $.jsx)(re, {
        titleSize: `lg`,
        title: (0, $.jsx)(le, {
          children:
            f.role === `owner`
              ? (0, $.jsx)(C, {
                  id: `amphora.familyInvite.parentRoleTitle`,
                  defaultMessage: `Are you {inviterName}'s parent or guardian?`,
                  description: `Title shown to the invited parent; inviterName is the teen who sent the invite`,
                  values: { inviterName: f.inviter_name || f.inviter_identifier },
                })
              : (0, $.jsx)(C, {
                  id: `amphora.familyInvite.infoModal.title.member`,
                  defaultMessage: `Add {inviterName} as your parent or guardian?`,
                  description: `Title shown to an invited teen; inviterName is the parent who sent the invite`,
                  values: { inviterName: f.inviter_name || f.inviter_identifier },
                }),
        }),
      })),
      (n[98] = f.inviter_identifier),
      (n[99] = f.inviter_name),
      (n[100] = f.role),
      (n[101] = V))
    : (V = n[101]);
  let _e;
  n[102] === f.inviter_identifier
    ? (_e = n[103])
    : ((_e = (0, $.jsx)(`p`, { className: `text-default select-text`, children: f.inviter_identifier })),
      (n[102] = f.inviter_identifier),
      (n[103] = _e));
  let H;
  n[104] !== f.inviter_identifier || n[105] !== f.inviter_name || n[106] !== f.role
    ? ((H = (0, $.jsx)(`p`, {
        children:
          f.role === `owner`
            ? (0, $.jsx)(C, {
                id: `amphora.familyInvite.messagesForParents.description`,
                defaultMessage: `If you accept, you’ll be able to manage some of your teen’s settings, set time limits, and add safeguards that work for your family`,
                description: `Explains parental controls to a parent accepting an invitation`,
              })
            : (0, $.jsx)(C, {
                id: `amphora.familyInvite.messagesForTeens.description`,
                defaultMessage: `If you accept, {inviterName} will be able to manage some of your settings, set time limits, and add safeguards that work for your family`,
                description: `Explains parental controls to a teen accepting an invitation`,
                values: { inviterName: f.inviter_name || f.inviter_identifier },
              }),
      })),
      (n[104] = f.inviter_identifier),
      (n[105] = f.inviter_name),
      (n[106] = f.role),
      (n[107] = H))
    : (H = n[107]);
  let ve;
  n[108] === f.role
    ? (ve = n[109])
    : ((ve = (0, $.jsx)(`p`, {
        children:
          f.role === `owner`
            ? (0, $.jsx)(C, {
                id: `amphora.familyInvite.messagesForParents.learnMore`,
                defaultMessage: `You won’t have access to details about your teen’s conversations with ChatGPT, except in certain rare safety circumstances. You can unlink accounts anytime. <link>Learn more</link>`,
                description: `Explains conversation privacy and account unlinking to an invited parent, with a link to the parental controls FAQ`,
                values: { link: Ue },
              })
            : (0, $.jsx)(C, {
                id: `amphora.familyInvite.messagesForTeens.learnMore`,
                defaultMessage: `We won’t share details of your conversations with ChatGPT, except in certain rare safety circumstances. You can unlink accounts anytime. <link>Learn more</link>`,
                description: `Explains conversation privacy and account unlinking to an invited teen, with a link to the parental controls FAQ`,
                values: { link: He },
              }),
      })),
      (n[108] = f.role),
      (n[109] = ve));
  let W;
  n[110] === y ? (W = n[111]) : ((W = y === `response` && (0, $.jsx)(xe, {})), (n[110] = y), (n[111] = W));
  let G;
  n[112] === y
    ? (G = n[113])
    : ((G =
        y === `dismiss` &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, $.jsx)(C, {
            id: `settings.chatGpt.familyInvitation.undecidedDismissError`,
            defaultMessage: `The notification couldn’t be dismissed. Retry, or close and return later.`,
            description: `Acknowledgement of an invitation without a membership decision failed`,
          }),
        })),
      (n[112] = y),
      (n[113] = G));
  let K;
  n[114] !== _e || n[115] !== H || n[116] !== ve || n[117] !== W || n[118] !== G
    ? ((K = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-6 text-base text-secondary`,
        children: [_e, H, ve, W, G],
      })),
      (n[114] = _e),
      (n[115] = H),
      (n[116] = ve),
      (n[117] = W),
      (n[118] = G),
      (n[119] = K))
    : (K = n[119]);
  let q;
  n[120] !== V || n[121] !== K
    ? ((q = (0, $.jsxs)(`div`, { className: `flex flex-col gap-6 px-8 pt-8 pb-0`, children: [V, K] })),
      (n[120] = V),
      (n[121] = K),
      (n[122] = q))
    : (q = n[122]);
  let ye;
  n[123] !== _ || n[124] !== y || n[125] !== P || n[126] !== j
    ? ((ye =
        y === `dismiss` &&
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(v, {
              type: `button`,
              color: `secondary`,
              disabled: _,
              onClick: P,
              children: (0, $.jsx)(C, {
                id: `settings.chatGpt.familyInvitation.returnUndecidedLater`,
                defaultMessage: `Return later`,
                description: `Leave an unacknowledged family invitation available for later`,
              }),
            }),
            (0, $.jsx)(v, {
              color: `secondary`,
              type: `button`,
              disabled: _,
              onClick: () => j(),
              children: (0, $.jsx)(C, {
                id: `settings.chatGpt.familyInvitation.retryUndecidedDismiss`,
                defaultMessage: `Retry`,
                description: `Retry acknowledging a family invitation without a membership decision`,
              }),
            }),
          ],
        })),
      (n[123] = _),
      (n[124] = y),
      (n[125] = P),
      (n[126] = j),
      (n[127] = ye))
    : (ye = n[127]);
  let J;
  n[128] === j ? (J = n[129]) : ((J = () => j(`reject`)), (n[128] = j), (n[129] = J));
  let be;
  n[130] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(C, {
        id: `settings.chatGpt.parentalControls.decline`,
        defaultMessage: `Decline`,
        description: `Declines an incoming parental-controls invitation`,
      })),
      (n[130] = be))
    : (be = n[130]);
  let Y;
  n[131] !== _ || n[132] !== J
    ? ((Y = (0, $.jsx)(v, { color: `secondary`, type: `button`, disabled: _, onClick: J, children: be })),
      (n[131] = _),
      (n[132] = J),
      (n[133] = Y))
    : (Y = n[133]);
  let X;
  n[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, $.jsx)(C, {
        id: `settings.chatGpt.parentalControls.accept`,
        defaultMessage: `Accept`,
        description: `Accepts an incoming parental-controls invitation`,
      })),
      (n[134] = X))
    : (X = n[134]);
  let Z;
  n[135] === _
    ? (Z = n[136])
    : ((Z = (0, $.jsx)(v, { type: `submit`, disabled: _, children: X })), (n[135] = _), (n[136] = Z));
  let Ce;
  n[137] !== ye || n[138] !== Y || n[139] !== Z
    ? ((Ce = (0, $.jsx)(`div`, {
        className: `px-8 pt-4 pb-8`,
        children: (0, $.jsxs)(te, { children: [ye, Y, Z] }),
      })),
      (n[137] = ye),
      (n[138] = Y),
      (n[139] = Z),
      (n[140] = Ce))
    : (Ce = n[140]);
  let we;
  n[141] !== L || n[142] !== q || n[143] !== Ce
    ? ((we = (0, $.jsxs)(ee, { as: `form`, variant: `chatgpt`, onSubmit: L, children: [B, q, Ce] })),
      (n[141] = L),
      (n[142] = q),
      (n[143] = Ce),
      (n[144] = we))
    : (we = n[144]);
  let Te;
  return (
    n[145] !== I || n[146] !== we
      ? ((Te = (0, $.jsx)(ae, {
          open: !0,
          size: `beacon`,
          radius: `compact`,
          overlayClassName: `bg-text/5 backdrop-blur-sm`,
          contentProps: F,
          showDialogClose: !0,
          onOpenChange: I,
          children: we,
        })),
        (n[145] = I),
        (n[146] = we),
        (n[147] = Te))
      : (Te = n[147]),
    Te
  );
}
function He(e) {
  return (0, $.jsx)(E, {
    appearance: `secondary`,
    href: `https://help.openai.com/en/articles/12315553-parental-controls-faq`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Ue(e) {
  return (0, $.jsx)(E, {
    appearance: `secondary`,
    href: `https://help.openai.com/en/articles/12315553-parental-controls-faq`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function We(e) {
  return e instanceof x && e.diagnosticError instanceof l ? e.diagnosticError.message : e.message;
}
var Ge, Q, $, Ke;
function qe() {
  return (qe = e(() => {
    ((Ge = p()),
      H(),
      w(),
      u(),
      Ae(),
      b(),
      (Q = i()),
      oe(),
      d(),
      Y(),
      M(),
      j(),
      k(),
      g(),
      se(),
      o(),
      a(),
      A(),
      m(),
      T(),
      _(),
      Ne(),
      n(),
      D(),
      R(),
      f(),
      W(),
      G(),
      q(),
      ($ = c()),
      (Ke = y({
        relationshipQuestion: {
          id: `amphora.members.relationshipQuestion`,
          defaultMessage: `This person is:`,
          description: `Label shown above the relationship picker in invite modal`,
        },
      })));
  }))();
}
export { Pe as a, qe as i, Ie as n, Fe as o, Be as r, Ve as t };
//# sourceMappingURL=invitations-4281333ecee8.js.map
