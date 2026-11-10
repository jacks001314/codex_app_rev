import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  Ext as i,
  IDt as a,
  Iot as o,
  Ixt as s,
  Lot as c,
  Pxt as l,
  TJ as u,
  Trt as d,
  VDt as f,
  _O as ee,
  _xt as p,
  cO as te,
  fO as m,
  frt as h,
  gO as ne,
  hot as g,
  hrt as re,
  jDt as _,
  lO as ie,
  lot as v,
  mO as ae,
  nst as oe,
  oO as se,
  sO as ce,
  t3 as y,
  tst as b,
  uO as le,
  vO as x,
  vzt as ue,
  wot as S,
  xMt as C,
  xrt as w,
  yG as de,
  yzt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as E,
  GMr as fe,
  NDr as D,
  TPn as pe,
  XMr as me,
  Ymr as he,
  _F as O,
  ehr as k,
  hF as ge,
  jDr as A,
  tNr as j,
  xPn as M,
  yPn as N,
} from "./app-initial-5851df3f6cb1.js";
import { a as P, i as F, o as I, r as L } from "./parsePhoneNumber-d60824298d64.js";
import { n as R, t as _e } from "./phone-number-input-9269834fc476.js";
import { n as ve, t as z } from "./radio-group-11cefafc81df.js";
import { n as B, t as V } from "./withMetadataArgument-66f337837d55.js";
import { i as H, n as ye, r as U, t as W } from "./queries-5461a01c4337.js";
import { a as G, c as K, i as be, n as q, r as xe, t as Se } from "./shared-3670dea403eb.js";
import { n as Ce, t as J } from "./parental-controls-invitation-background-c88ddd8be059.js";
function Y(e) {
  "@babel/helpers - typeof";
  return (
    (Y =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Y(e)
  );
}
function X(e, t) {
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
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? X(Object(n), !0).forEach(function (t) {
          Z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : X(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Z(e, t, n) {
  return (
    (t = Te(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Te(e) {
  var t = Ee(e, `string`);
  return Y(t) == `symbol` ? t : t + ``;
}
function Ee(e, t) {
  if (Y(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Y(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function De() {
  var e = I(arguments),
    t = e.text,
    n = e.options,
    r = e.metadata;
  n = we(we({}, n), {}, { extract: !1 });
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
    (T(),
      (je = C()),
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
    { account: i, amphoraId: o, forceTeen: l, forceParent: u, onClose: d } = e,
    p = u !== void 0 && u,
    m = s(r),
    h = f(),
    g = oe(),
    re = (0, Q.useRef)(null),
    _,
    v;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => () => {
        re.current?.abort();
      }),
      (v = []),
      (n[0] = _),
      (n[1] = v))
    : ((_ = n[0]), (v = n[1])),
    (0, Q.useEffect)(_, v));
  let [y, b] = (0, Q.useState)(o),
    [x, ue] = (0, Q.useState)(`email`),
    [S, C] = (0, Q.useState)(``),
    [w, de] = (0, Q.useState)(``),
    T;
  n[2] !== p || n[3] !== l
    ? ((T = () => (l ? `teen` : p ? `parent` : null)), (n[2] = p), (n[3] = l), (n[4] = T))
    : (T = n[4]);
  let [E, fe] = (0, Q.useState)(T),
    [D, me] = (0, Q.useState)(!1),
    O;
  n[5] !== S || n[6] !== x || n[7] !== w
    ? ((O = x === `email` ? S.trim() : w.trim()), (n[5] = S), (n[6] = x), (n[7] = w), (n[8] = O))
    : (O = n[8]);
  let k = O,
    ge;
  n[9] !== i || n[10] !== o || n[11] !== g || n[12] !== y || n[13] !== k || n[14] !== E || n[15] !== m
    ? ((ge = async () => {
        if (E == null) return;
        if (re.current || !H(m, i)) throw Error(`Family account changed before inviting`);
        let e = new AbortController();
        re.current = e;
        let t = m.watch((t) => {
            H(t, i) || e.abort();
          }),
          n = () => {
            if (e.signal.aborted || !H(m, i)) throw new DOMException(`Account changed`, `AbortError`);
          },
          r = { "ChatGPT-Account-ID": i.accountId };
        return (
          y == null || o != null
            ? he.safeGet(`/amphora`, { additionalHeaders: r, signal: e.signal }).then((e) => {
                n();
                let t = Pe(e.role);
                if (
                  (y != null && e.id !== y) ||
                  (e.id && (E === `teen` ? t !== `parent` : t !== `teen` && t !== `child`))
                )
                  throw Error(`Family membership changed before inviting`);
                return e.id ?? y;
              })
            : Promise.resolve(y)
        )
          .then(async (t) => {
            let a = t;
            if (a == null) {
              let t = await he.safePost(`/amphora`, {
                additionalHeaders: r,
                requestBody: { role: E === `parent` ? `teen` : `parent` },
                signal: e.signal,
              });
              if ((n(), !t.id)) throw Error(`Family creation returned no group`);
              ((a = t.id),
                b(a),
                await g.invalidateQueries({
                  queryKey: ye(i.userId, i.accountId).current.queryKey,
                  refetchType: `none`,
                }));
            } else {
              let t = await he.safeGet(`/amphora/{amphora_id}/members`, {
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
                    (t?.toLowerCase() === k.toLowerCase() || n?.toLowerCase() === k.toLowerCase())
                  );
                }))
              )
                return;
              if (t.total > t.items.length) throw Error(`Family members could not be fully checked`);
              b(a);
            }
            (n(),
              await he.safePost(`/amphora/{amphora_id}/members`, {
                additionalHeaders: r,
                parameters: { path: { amphora_id: encodeURIComponent(a) } },
                requestBody: { members: [{ account_identifier: k, role: E }] },
                signal: e.signal,
              }));
          })
          .finally(() => {
            (t(), re.current === e && (re.current = null));
          });
      }),
      (n[9] = i),
      (n[10] = o),
      (n[11] = g),
      (n[12] = y),
      (n[13] = k),
      (n[14] = E),
      (n[15] = m),
      (n[16] = ge))
    : (ge = n[16]);
  let A;
  n[17] !== i || n[18] !== g || n[19] !== d || n[20] !== m
    ? ((A = async () => {
        H(m, i) &&
          (await g.invalidateQueries({ queryKey: [`chatgpt-parental-controls`, i.userId, i.accountId] }),
          H(m, i) && d());
      }),
      (n[17] = i),
      (n[18] = g),
      (n[19] = d),
      (n[20] = m),
      (n[21] = A))
    : (A = n[21]);
  let j;
  n[22] !== ge || n[23] !== A
    ? ((j = { mutationFn: ge, onSuccess: A }), (n[22] = ge), (n[23] = A), (n[24] = j))
    : (j = n[24]);
  let { mutate: M, isPending: N, isError: P, error: F } = c(j),
    I;
  n[25] !== i || n[26] !== o || n[27] !== g || n[28] !== y || n[29] !== d
    ? ((I = () => {
        (y && !o && g.invalidateQueries({ queryKey: ye(i.userId, i.accountId).current.queryKey }), d());
      }),
      (n[25] = i),
      (n[26] = o),
      (n[27] = g),
      (n[28] = y),
      (n[29] = d),
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
  let z;
  n[34] !== k || n[35] !== N || n[36] !== x || n[37] !== M || n[38] !== w || n[39] !== E
    ? ((z = (e) => {
        e.preventDefault();
        let t =
          x === `phone`
            ? ke(w)
            : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
                k,
              );
        (me(!t), t && E && !N && M());
      }),
      (n[34] = k),
      (n[35] = N),
      (n[36] = x),
      (n[37] = M),
      (n[38] = w),
      (n[39] = E),
      (n[40] = z))
    : (z = n[40]);
  let B;
  n[41] === l
    ? (B = n[42])
    : ((B = (0, $.jsx)(te, {
        titleSize: `base`,
        title: (0, $.jsx)(ee, {
          children: l
            ? (0, $.jsx)(a, {
                id: `amphora.inviteChildModalTitle`,
                defaultMessage: `Add a child`,
                description: `Title for child invite modal`,
              })
            : (0, $.jsx)(a, {
                id: `amphora.inviteMemberModalTitle`,
                defaultMessage: `Invite family member`,
                description: `Title for family invite modal`,
              }),
        }),
      })),
      (n[41] = l),
      (n[42] = B));
  let V;
  n[43] === x
    ? (V = n[44])
    : ((V = (0, $.jsx)(`label`, {
        className: `text-sm font-medium`,
        htmlFor: `family-invite-identifier`,
        children:
          x === `email`
            ? (0, $.jsx)(a, {
                id: `amphora.members.invitesInputLabel`,
                defaultMessage: `Email address`,
                description: `Label for invite email input`,
              })
            : (0, $.jsx)(a, {
                id: `amphora.members.invitesPhoneInputLabel`,
                defaultMessage: `Phone number`,
                description: `Label for invite phone input`,
              }),
      })),
      (n[43] = x),
      (n[44] = V));
  let U;
  n[45] === x
    ? (U = n[46])
    : ((U = (0, $.jsx)(t, {
        color: `ghost`,
        onClick: () => {
          (ue(x === `email` ? `phone` : `email`), me(!1));
        },
        children:
          x === `email`
            ? (0, $.jsx)(a, {
                id: `amphora.members.usePhoneLink`,
                defaultMessage: `Use phone`,
                description: `Link label to switch invite input to phone`,
              })
            : (0, $.jsx)(a, {
                id: `amphora.members.useEmailLink`,
                defaultMessage: `Use email`,
                description: `Link label to switch invite input to email`,
              }),
      })),
      (n[45] = x),
      (n[46] = U));
  let W;
  n[47] !== V || n[48] !== U
    ? ((W = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 text-sm`,
        children: [V, U],
      })),
      (n[47] = V),
      (n[48] = U),
      (n[49] = W))
    : (W = n[49]);
  let G;
  n[50] !== S || n[51] !== h || n[52] !== D || n[53] !== N || n[54] !== x || n[55] !== w
    ? ((G =
        x === `phone`
          ? (0, $.jsx)(_e, {
              id: `family-invite-identifier`,
              name: `account_identifier`,
              autoFocus: !0,
              value: w,
              onChange: (e) => {
                (de(e), me(!1));
              },
              "aria-invalid": D,
              disabled: N,
              placeholder: h.formatMessage({
                id: `settings.chatGpt.parentalControls.phonePlaceholder`,
                defaultMessage: `Phone number`,
                description: `Placeholder for a family invitation phone number in the selected country`,
              }),
            })
          : (0, $.jsx)(pe, {
              id: `family-invite-identifier`,
              name: `account_identifier`,
              autoFocus: !0,
              type: `email`,
              value: S,
              onChange: (e) => {
                (C(e.target.value), me(!1));
              },
              "aria-invalid": D,
              disabled: N,
              placeholder: h.formatMessage({
                id: `amphora.members.invitesInputPlaceholder2`,
                defaultMessage: `name@email.com`,
                description: `Placeholder for invite email input`,
              }),
            })),
      (n[50] = S),
      (n[51] = h),
      (n[52] = D),
      (n[53] = N),
      (n[54] = x),
      (n[55] = w),
      (n[56] = G))
    : (G = n[56]);
  let K;
  n[57] !== D || n[58] !== x
    ? ((K =
        D &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children:
            x === `email`
              ? (0, $.jsx)(a, {
                  id: `amphora.members.invalidEmailError`,
                  defaultMessage: `Enter a valid email address.`,
                  description: `Error message shown when the invite email address fails validation.`,
                })
              : (0, $.jsx)(a, {
                  id: `amphora.members.invalidPhoneError`,
                  defaultMessage: `Enter a valid phone number.`,
                  description: `Error message shown when the invite phone number fails validation.`,
                }),
        })),
      (n[57] = D),
      (n[58] = x),
      (n[59] = K))
    : (K = n[59]);
  let be;
  n[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(ne, {
        className: `text-xs`,
        children: (0, $.jsx)(a, {
          id: `amphora.members.invitesInputHelperText2`,
          defaultMessage: `If your family member is new to ChatGPT, they'll be asked to create an account.`,
          description: `Helper text shown under invite email input`,
        }),
      })),
      (n[60] = be))
    : (be = n[60]);
  let q;
  n[61] !== W || n[62] !== G || n[63] !== K
    ? ((q = (0, $.jsxs)(le, { children: [W, G, K, be] })), (n[61] = W), (n[62] = G), (n[63] = K), (n[64] = q))
    : (q = n[64]);
  let xe;
  n[65] !== p || n[66] !== l || n[67] !== h || n[68] !== N || n[69] !== E
    ? ((xe =
        !l &&
        !p &&
        (0, $.jsxs)(`fieldset`, {
          className: `flex flex-col gap-3`,
          disabled: N,
          children: [
            (0, $.jsx)(`legend`, {
              className: `pb-2 text-sm font-medium`,
              children: (0, $.jsx)(a, { ...Ke.relationshipQuestion }),
            }),
            (0, $.jsxs)(ve, {
              name: `relationship`,
              value: E ?? ``,
              onChange: (e) => fe(e || null),
              direction: `col`,
              disabled: N,
              "aria-label": h.formatMessage(Ke.relationshipQuestion),
              children: [
                (0, $.jsx)(ve.Item, {
                  value: `parent`,
                  children: (0, $.jsx)(a, {
                    id: `amphora.members.inviteModalRoleOwner`,
                    defaultMessage: `My parent or guardian`,
                    description: `Parent or guardian option in family invite modal`,
                  }),
                }),
                (0, $.jsx)(ve.Item, {
                  value: `teen`,
                  children: (0, $.jsx)(a, {
                    id: `amphora.members.inviteModalRoleMember`,
                    defaultMessage: `My child`,
                    description: `Child option in family invite modal`,
                  }),
                }),
              ],
            }),
          ],
        })),
      (n[65] = p),
      (n[66] = l),
      (n[67] = h),
      (n[68] = N),
      (n[69] = E),
      (n[70] = xe))
    : (xe = n[70]);
  let Se;
  n[71] === E ? (Se = n[72]) : ((Se = E && (0, $.jsx)(Le, { role: E })), (n[71] = E), (n[72] = Se));
  let Ce;
  n[73] !== F || n[74] !== P
    ? ((Ce =
        P &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, $.jsx)(a, {
            id: `amphora.members.inviteError`,
            defaultMessage: `Unable to send invite: {error}`,
            description: `Error shown when a family invitation cannot be sent; error contains the server's failure message`,
            values: { error: We(F) },
          }),
        })),
      (n[73] = F),
      (n[74] = P),
      (n[75] = Ce))
    : (Ce = n[75]);
  let J;
  n[76] !== q || n[77] !== xe || n[78] !== Se || n[79] !== Ce
    ? ((J = (0, $.jsxs)(ie, { className: `gap-5`, spacing: `large`, children: [q, xe, Se, Ce] })),
      (n[76] = q),
      (n[77] = xe),
      (n[78] = Se),
      (n[79] = Ce),
      (n[80] = J))
    : (J = n[80]);
  let Y;
  n[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, $.jsx)(a, {
        id: `amphora.members.cancelButton`,
        defaultMessage: `Cancel`,
        description: `Cancel button text in family invite modal`,
      })),
      (n[81] = Y))
    : (Y = n[81]);
  let X;
  n[82] !== L || n[83] !== N
    ? ((X = (0, $.jsx)(t, { color: `secondary`, onClick: L, disabled: N, children: Y })),
      (n[82] = L),
      (n[83] = N),
      (n[84] = X))
    : (X = n[84]);
  let we = !E || !k || D || N,
    Z;
  n[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, $.jsx)(a, {
        id: `amphora.members.modalInviteButton`,
        defaultMessage: `Send`,
        description: `Invite button text in family invite modal`,
      })),
      (n[85] = Z))
    : (Z = n[85]);
  let Te;
  n[86] === we
    ? (Te = n[87])
    : ((Te = (0, $.jsx)(t, { type: `submit`, disabled: we, children: Z })), (n[86] = we), (n[87] = Te));
  let Ee;
  n[88] !== X || n[89] !== Te
    ? ((Ee = (0, $.jsx)(ie, { spacing: `large`, children: (0, $.jsxs)(ce, { children: [X, Te] }) })),
      (n[88] = X),
      (n[89] = Te),
      (n[90] = Ee))
    : (Ee = n[90]);
  let De;
  n[91] !== z || n[92] !== B || n[93] !== J || n[94] !== Ee
    ? ((De = (0, $.jsxs)(se, { as: `form`, noValidate: !0, onSubmit: z, children: [B, J, Ee] })),
      (n[91] = z),
      (n[92] = B),
      (n[93] = J),
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
              ? (0, $.jsx)(a, {
                  id: `settings.chatGpt.parentalControls.inviteChildPrivacyLink`,
                  defaultMessage: `If your child accepts, you'll be able to manage some of their settings, set time limits, and add safeguards that work for your family. You won't have access to details about your teen's conversations with ChatGPT, except in certain rare safety circumstances. You can unlink accounts anytime. <link>Learn more</link>`,
                  description: `Privacy and control explanation when inviting a child to parental controls`,
                  values: { link: ze },
                })
              : (0, $.jsx)(a, {
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
  return (0, $.jsx)(N, {
    appearance: `secondary`,
    href: `https://help.openai.com/en/articles/12315553-parental-controls-faq`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function ze(e) {
  return (0, $.jsx)(N, {
    appearance: `secondary`,
    href: `https://help.openai.com/en/articles/12315553-parental-controls-faq`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Be(e) {
  let n = (0, Ge.c)(67),
    { account: i, amphoraId: o, member: l, onBack: u } = e,
    d = s(r),
    [f, p] = (0, Q.useState)(null),
    m = oe(),
    h = (0, Q.useRef)(null),
    g,
    re;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => () => {
        h.current?.abort();
      }),
      (re = []),
      (n[0] = g),
      (n[1] = re))
    : ((g = n[0]), (re = n[1])),
    (0, Q.useEffect)(g, re));
  let _ = l.email || l.account_identifier,
    v;
  n[2] !== i.accountId || n[3] !== i.userId
    ? ((v = [`chatgpt-parental-controls`, i.userId, i.accountId]),
      (n[2] = i.accountId),
      (n[3] = i.userId),
      (n[4] = v))
    : (v = n[4]);
  let y = v,
    b;
  n[5] !== i || n[6] !== o || n[7] !== m || n[8] !== y || n[9] !== _ || n[10] !== l.email || n[11] !== d
    ? ((b = async (e) => {
        if (!_) throw Error(`Missing invitation identifier`);
        if (h.current || !H(d, i)) throw Error(`Family account changed before updating invitation`);
        let t = new AbortController();
        h.current = t;
        let n = d.watch((e) => {
            H(e, i) || t.abort();
          }),
          r = { "ChatGPT-Account-ID": i.accountId },
          a = { path: { amphora_id: encodeURIComponent(o) } },
          s = !1;
        return m
          .cancelQueries({ queryKey: y })
          .then(() => {
            if (t.signal.aborted) throw new DOMException(`Account changed`, `AbortError`);
            return e === `resend`
              ? he.safePost(`/amphora/{amphora_id}/members/resend`, {
                  additionalHeaders: r,
                  parameters: a,
                  requestBody: { account_identifier: _ },
                  signal: t.signal,
                })
              : he.safePost(`/amphora/{amphora_id}/remove`, {
                  additionalHeaders: r,
                  parameters: a,
                  requestBody: l.email ? { email: l.email } : { account_identifier: _ },
                  signal: t.signal,
                });
          })
          .then(() => {
            if (t.signal.aborted || !H(d, i)) throw new DOMException(`Account changed`, `AbortError`);
            s = !0;
          })
          .finally(() => {
            (n(),
              h.current === t && (h.current = null),
              m.invalidateQueries({ queryKey: y, refetchType: !s && H(d, i) ? `active` : `none` }));
          });
      }),
      (n[5] = i),
      (n[6] = o),
      (n[7] = m),
      (n[8] = y),
      (n[9] = _),
      (n[10] = l.email),
      (n[11] = d),
      (n[12] = b))
    : (b = n[12]);
  let le;
  n[13] !== i || n[14] !== m || n[15] !== y || n[16] !== u || n[17] !== d
    ? ((le = (e, t) => {
        H(d, i) && (t === `resend` ? p(`sent`) : (u(), m.invalidateQueries({ queryKey: y })));
      }),
      (n[13] = i),
      (n[14] = m),
      (n[15] = y),
      (n[16] = u),
      (n[17] = d),
      (n[18] = le))
    : (le = n[18]);
  let x;
  n[19] !== b || n[20] !== le
    ? ((x = { mutationFn: b, onSuccess: le }), (n[19] = b), (n[20] = le), (n[21] = x))
    : (x = n[21]);
  let { mutate: ue, isPending: S, isError: C, error: w, variables: de } = c(x),
    T;
  n[22] !== m || n[23] !== y
    ? ((T = () => {
        (p(null), m.invalidateQueries({ queryKey: y }));
      }),
      (n[22] = m),
      (n[23] = y),
      (n[24] = T))
    : (T = n[24]);
  let E = T,
    fe;
  n[25] === u ? (fe = n[26]) : ((fe = (0, $.jsx)(q, { onClick: u })), (n[25] = u), (n[26] = fe));
  let D;
  n[27] === l ? (D = n[28]) : ((D = (0, $.jsx)(G, { member: l })), (n[27] = l), (n[28] = D));
  let me = S || !_,
    O,
    k;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = () => p(`resend`)),
      (k = (0, $.jsx)(a, {
        id: `amphora.invited.resend`,
        defaultMessage: `Resend invitation`,
        description: `Resend invitation button`,
      })),
      (n[29] = O),
      (n[30] = k))
    : ((O = n[29]), (k = n[30]));
  let A;
  n[31] === me
    ? (A = n[32])
    : ((A = (0, $.jsx)(t, { color: `secondary`, disabled: me, onClick: O, children: k })),
      (n[31] = me),
      (n[32] = A));
  let j = S || !_,
    M;
  n[33] === ue ? (M = n[34]) : ((M = () => ue(`cancel`)), (n[33] = ue), (n[34] = M));
  let N;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(a, {
        id: `amphora.invited.cancel`,
        defaultMessage: `Cancel invitation`,
        description: `Cancel invitation button`,
      })),
      (n[35] = N))
    : (N = n[35]);
  let P;
  n[36] !== j || n[37] !== M
    ? ((P = (0, $.jsx)(t, { color: `danger`, disabled: j, onClick: M, children: N })),
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
  n[42] !== w || n[43] !== C || n[44] !== de
    ? ((I =
        C &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children:
            de === `resend`
              ? (0, $.jsx)(a, {
                  id: `amphora.invited.resend.error`,
                  defaultMessage: `Unable to resend invite: {error}`,
                  description: `Error when resending a family invitation; error contains the failure message`,
                  values: { error: We(w) },
                })
              : (0, $.jsx)(a, {
                  id: `amphora.invited.cancel.error`,
                  defaultMessage: `Unable to cancel invite: {error}`,
                  description: `Error when canceling a family invitation; error contains the failure message`,
                  values: { error: We(w) },
                }),
        })),
      (n[42] = w),
      (n[43] = C),
      (n[44] = de),
      (n[45] = I))
    : (I = n[45]);
  let L;
  n[46] === l.role
    ? (L = n[47])
    : ((L =
        l.role === `owner`
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(a, {
                id: `amphora.invited.childLinkParentInviteDescription`,
                defaultMessage: `You can link to one parent at a time`,
                description: `Helper text shown in the page to manage a parent invitation.`,
              }),
            })
          : (0, $.jsx)(be, {})),
      (n[46] = l.role),
      (n[47] = L));
  let R;
  n[48] !== f || n[49] !== w || n[50] !== _ || n[51] !== C || n[52] !== S || n[53] !== ue
    ? ((R =
        f === `resend` &&
        (0, $.jsxs)(xe, {
          title: (0, $.jsx)(a, {
            id: `amphora.invited.resend.confirmTitle`,
            defaultMessage: `Resend invitation`,
            description: `Title for resend confirmation modal`,
          }),
          onClose: () => p(null),
          onSubmit: () => ue(`resend`),
          pending: S,
          confirmLabel: (0, $.jsx)(a, {
            id: `amphora.invited.resend.send`,
            defaultMessage: `Send`,
            description: `Send button in resend confirmation modal`,
          }),
          children: [
            (0, $.jsx)(ne, {
              children: (0, $.jsx)(a, {
                id: `amphora.invited.resend.confirmDesc`,
                defaultMessage: `We’ll send another invite to your family member. If they’re new to ChatGPT, they’ll be asked to create an account.`,
                description: `Body text for resend confirmation modal`,
              }),
            }),
            (0, $.jsx)(pe, { name: `identifier`, "aria-label": _ ?? ``, value: _ ?? ``, disabled: !0 }),
            C &&
              (0, $.jsx)(`p`, {
                role: `alert`,
                className: `text-sm text-danger`,
                children: (0, $.jsx)(a, {
                  id: `amphora.invited.resend.error`,
                  defaultMessage: `Unable to resend invite: {error}`,
                  description: `Error when resending a family invitation; error contains the failure message`,
                  values: { error: We(w) },
                }),
              }),
          ],
        })),
      (n[48] = f),
      (n[49] = w),
      (n[50] = _),
      (n[51] = C),
      (n[52] = S),
      (n[53] = ue),
      (n[54] = R))
    : (R = n[54]);
  let _e;
  n[55] !== f || n[56] !== E || n[57] !== _
    ? ((_e =
        f === `sent` &&
        (0, $.jsx)(ae, {
          open: !0,
          size: `compact`,
          showDialogClose: !0,
          onOpenChange: E,
          children: (0, $.jsxs)(se, {
            children: [
              (0, $.jsx)(te, {
                title: (0, $.jsx)(ee, {
                  children: (0, $.jsx)(a, {
                    id: `amphora.invited.resend.sentTitle`,
                    defaultMessage: `Sent!`,
                    description: `Title for resend success modal`,
                  }),
                }),
              }),
              (0, $.jsx)(ie, {
                className: `flex flex-col gap-3`,
                children: (0, $.jsx)(ne, {
                  children: (0, $.jsx)(a, {
                    id: `amphora.invited.resend.sentDesc`,
                    defaultMessage: `We sent {identifier} a new invite. If they’re new to ChatGPT, they’ll be asked to create a new account.`,
                    description: `Body text for resend success modal`,
                    values: { identifier: _ },
                  }),
                }),
              }),
              (0, $.jsx)(ce, {
                children: (0, $.jsx)(t, {
                  onClick: E,
                  children: (0, $.jsx)(a, {
                    id: `amphora.invited.done`,
                    defaultMessage: `Done`,
                    description: `Done button label`,
                  }),
                }),
              }),
            ],
          }),
        })),
      (n[55] = f),
      (n[56] = E),
      (n[57] = _),
      (n[58] = _e))
    : (_e = n[58]);
  let ve;
  return (
    n[59] !== F || n[60] !== I || n[61] !== L || n[62] !== R || n[63] !== _e || n[64] !== fe || n[65] !== D
      ? ((ve = (0, $.jsxs)(ge, { backSlot: fe, children: [D, F, I, L, R, _e] })),
        (n[59] = F),
        (n[60] = I),
        (n[61] = L),
        (n[62] = R),
        (n[63] = _e),
        (n[64] = fe),
        (n[65] = D),
        (n[66] = ve))
      : (ve = n[66]),
    ve
  );
}
function Ve(e) {
  let n = (0, Ge.c)(148),
    { account: o, invitation: c, decision: l, onDecision: u, onClose: d } = e,
    f = s(r),
    p = oe(),
    m = i(),
    h = c.payload,
    _ = (0, Q.useRef)(null),
    v = (0, Q.useRef)(null),
    y = (0, Q.useRef)(l),
    [b, le] = (0, Q.useState)(!1),
    [x, ue] = (0, Q.useState)(l == null ? null : `dismiss`),
    S,
    C;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => () => {
        (_.current?.abort(), v.current?.(), (v.current = null));
      }),
      (C = []),
      (n[0] = S),
      (n[1] = C))
    : ((S = n[0]), (C = n[1])),
    (0, Q.useEffect)(S, C));
  let w;
  n[2] !== o.accountId || n[3] !== o.userId
    ? ((w = [`chatgpt-parental-controls`, o.userId, o.accountId]),
      (n[2] = o.accountId),
      (n[3] = o.userId),
      (n[4] = w))
    : (w = n[4]);
  let T = w,
    E;
  n[5] !== o.accountId || n[6] !== o.userId
    ? ((E = [`chatgpt-family-notifications`, o.userId, o.accountId]),
      (n[5] = o.accountId),
      (n[6] = o.userId),
      (n[7] = E))
    : (E = n[7]);
  let D = E,
    pe;
  n[8] !== p || n[9] !== c.id || n[10] !== D
    ? ((pe = () => {
        p.setQueriesData(
          { queryKey: D },
          (e) =>
            e && {
              ...e,
              items: e.items.map((e) =>
                e.id === c.id ? { ...e, reacted_to_at: new Date().toISOString() } : e,
              ),
            },
        );
      }),
      (n[8] = p),
      (n[9] = c.id),
      (n[10] = D),
      (n[11] = pe))
    : (pe = n[11]);
  let O = pe,
    k;
  n[12] !== o || n[13] !== p || n[14] !== T || n[15] !== D || n[16] !== d || n[17] !== f
    ? ((k = () => {
        (d(),
          H(f, o) &&
            (p.invalidateQueries({ queryKey: T }),
            p.invalidateQueries({ queryKey: D }),
            f.query.snapshot(A).invalidate()));
      }),
      (n[12] = o),
      (n[13] = p),
      (n[14] = T),
      (n[15] = D),
      (n[16] = d),
      (n[17] = f),
      (n[18] = k))
    : (k = n[18]);
  let ge = k,
    j;
  n[19] !== o ||
  n[20] !== p ||
  n[21] !== T ||
  n[22] !== ge ||
  n[23] !== c.id ||
  n[24] !== O ||
  n[25] !== m ||
  n[26] !== D ||
  n[27] !== u ||
  n[28] !== h ||
  n[29] !== f
    ? ((j = (e) => {
        if (_.current != null || !H(f, o) || !h || !(`family_group_id` in h) || !h.family_group_id) return;
        let t = new AbortController();
        ((_.current = t), le(!0), ue(null));
        let n = f.watch((e) => {
          H(e, o) || t.abort();
        });
        v.current = n;
        let r = () => {
            if (t.signal.aborted || !H(f, o)) throw new DOMException(`Account changed`, `AbortError`);
          },
          i = f.query.snapshot(A),
          s = async () => {
            (await Promise.allSettled([
              p.cancelQueries({ queryKey: T }),
              !t.signal.aborted && H(f, o) ? i.cancel() : Promise.resolve(),
            ]),
              p.invalidateQueries({ queryKey: T, refetchType: `none` }),
              p.invalidateQueries({ queryKey: i.queryKey, exact: !0, refetchType: `none` }));
          };
        (e != null && y.current == null
          ? he
              .safePost(`/amphora/{amphora_id}/invite`, {
                additionalHeaders: { "ChatGPT-Account-ID": o.accountId },
                expectedErrorStatuses: [404],
                parameters: { path: { amphora_id: h.family_group_id } },
                requestBody: { choice: e },
                signal: t.signal,
              })
              .then(async () => {
                (r(), (y.current = e), u(e), await s());
              })
              .catch((e) => {
                throw (
                  e instanceof re &&
                    e.status === 404 &&
                    !t.signal.aborted &&
                    H(f, o) &&
                    ((y.current = `unavailable`), u(`unavailable`)),
                  e
                );
              })
          : Promise.resolve()
        )
          .then(async () => {
            if (
              (r(),
              await he.safePost(`/amphora/notifications/{notification_id}/reacted`, {
                additionalHeaders: { "ChatGPT-Account-ID": o.accountId },
                parameters: { path: { notification_id: c.id } },
                signal: t.signal,
              }),
              r(),
              await p.cancelQueries({ queryKey: D }),
              r(),
              y.current === `accept`)
            ) {
              let e,
                t = f
                  .get(g)
                  .info(
                    (0, $.jsx)(a, {
                      id: `amphora.familyInvite.acceptedBanner.title`,
                      defaultMessage: `Request accepted`,
                      description: `Title for the accepted family invite banner`,
                    }),
                    {
                      duration: 1 / 0,
                      onRemove: () => e?.(),
                      hasCloseButton: !0,
                      description:
                        h.role === `owner`
                          ? (0, $.jsx)(a, {
                              id: `amphora.familyInvite.acceptedBanner.description.owner`,
                              defaultMessage: `You can now manage parental controls for {inviterName}`,
                              description: `Accepted banner description when viewer is the parent`,
                              values: { inviterName: h.inviter_name || h.inviter_identifier },
                            })
                          : (0, $.jsx)(a, {
                              id: `amphora.familyInvite.acceptedBanner.description.member`,
                              defaultMessage: `{inviterName} can now manage your parental controls`,
                              description: `Accepted banner description when viewer is the teen; inviterName is the parent who sent the invitation`,
                              values: { inviterName: h.inviter_name || h.inviter_identifier },
                            }),
                      primaryAction: {
                        label: (0, $.jsx)(a, {
                          id: `amphora.familyInvite.acceptedBanner.cta`,
                          defaultMessage: `View settings`,
                          description: `Opens parental controls after accepting a family invitation`,
                        }),
                        onClick: () => {
                          (H(f, o) && m(`/settings/parental-controls`), t.close());
                        },
                      },
                    },
                  );
              e = f.watch((e) => {
                (e.get(me) !== o.userId || e.get(fe) !== o.accountId) && t.close();
              });
            }
            (O(), ge());
          })
          .catch(() => {
            !t.signal.aborted &&
              H(f, o) &&
              (y.current === `unavailable`
                ? ue(null)
                : ue(y.current != null || e == null ? `dismiss` : `response`),
              e != null && y.current == null && s());
          })
          .finally(() => {
            (v.current === n && ((v.current = null), n()),
              _.current === t && (_.current = null),
              !t.signal.aborted && H(f, o) && le(!1));
          });
      }),
      (n[19] = o),
      (n[20] = p),
      (n[21] = T),
      (n[22] = ge),
      (n[23] = c.id),
      (n[24] = O),
      (n[25] = m),
      (n[26] = D),
      (n[27] = u),
      (n[28] = h),
      (n[29] = f),
      (n[30] = j))
    : (j = n[30]);
  let M = j,
    N;
  n[31] !== b || n[32] !== d
    ? ((N = () => {
        b || d();
      }),
      (n[31] = b),
      (n[32] = d),
      (n[33] = N))
    : (N = n[33]);
  let P = N;
  if (!h || !(`family_group_id` in h) || !h.family_group_id) return null;
  if (l === `reject` || l === `unavailable`) {
    let e;
    n[34] === P
      ? (e = n[35])
      : ((e = (e) => {
          e || P();
        }),
        (n[34] = P),
        (n[35] = e));
    let r;
    n[36] === M
      ? (r = n[37])
      : ((r = (e) => {
          (e.preventDefault(), M());
        }),
        (n[36] = M),
        (n[37] = r));
    let i;
    n[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(te, {
          title: (0, $.jsx)(ee, {
            children: (0, $.jsx)(a, {
              id: `settings.chatGpt.familyInvitation.dismissTitle`,
              defaultMessage: `Invitation update`,
              description: `Title when a confirmed or unavailable family invitation still needs notification acknowledgement`,
            }),
          }),
        })),
        (n[38] = i))
      : (i = n[38]);
    let o;
    n[39] !== l || n[40] !== x
      ? ((o =
          (l === `unavailable` || x === `dismiss`) &&
          (0, $.jsx)(ie, {
            children: (0, $.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children:
                l === `unavailable`
                  ? (0, $.jsx)(a, {
                      id: `settings.chatGpt.familyInvitation.unavailable`,
                      defaultMessage: `This invitation is no longer available`,
                      description: `Family invitation that the server reports missing or already consumed`,
                    })
                  : (0, $.jsx)(a, {
                      id: `settings.chatGpt.familyInvitation.dismissError`,
                      defaultMessage: `Invitation declined. The notification couldn’t be dismissed. Retry, or close and return later.`,
                      description: `A confirmed decline whose notification acknowledgement has not succeeded`,
                    }),
            }),
          })),
        (n[39] = l),
        (n[40] = x),
        (n[41] = o))
      : (o = n[41]);
    let s;
    n[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsx)(a, {
          id: `settings.chatGpt.familyInvitation.returnLater`,
          defaultMessage: `Return later`,
          description: `Leave the family invitation acknowledgement retry for later`,
        })),
        (n[42] = s))
      : (s = n[42]);
    let c;
    n[43] !== b || n[44] !== P
      ? ((c = (0, $.jsx)(t, { type: `button`, color: `secondary`, disabled: b, onClick: P, children: s })),
        (n[43] = b),
        (n[44] = P),
        (n[45] = c))
      : (c = n[45]);
    let u;
    n[46] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, $.jsx)(a, {
          id: `settings.chatGpt.familyInvitation.retryDismiss`,
          defaultMessage: `Retry`,
          description: `Retry acknowledging a previously confirmed family invitation response`,
        })),
        (n[46] = u))
      : (u = n[46]);
    let d;
    n[47] === b
      ? (d = n[48])
      : ((d = (0, $.jsx)(t, { type: `submit`, loading: b, children: u })), (n[47] = b), (n[48] = d));
    let f;
    n[49] !== c || n[50] !== d
      ? ((f = (0, $.jsxs)(ce, { children: [c, d] })), (n[49] = c), (n[50] = d), (n[51] = f))
      : (f = n[51]);
    let p;
    n[52] !== r || n[53] !== o || n[54] !== f
      ? ((p = (0, $.jsxs)(se, { as: `form`, onSubmit: r, children: [i, o, f] })),
        (n[52] = r),
        (n[53] = o),
        (n[54] = f),
        (n[55] = p))
      : (p = n[55]);
    let m;
    return (
      n[56] !== p || n[57] !== e
        ? ((m = (0, $.jsx)(ae, {
            open: !0,
            size: `compact`,
            showDialogClose: !0,
            onOpenChange: e,
            children: p,
          })),
          (n[56] = p),
          (n[57] = e),
          (n[58] = m))
        : (m = n[58]),
      m
    );
  }
  if (l === `accept`) {
    let e;
    n[59] === P
      ? (e = n[60])
      : ((e = (e) => {
          e || P();
        }),
        (n[59] = P),
        (n[60] = e));
    let r;
    n[61] === M
      ? (r = n[62])
      : ((r = (e) => {
          (e.preventDefault(), M());
        }),
        (n[61] = M),
        (n[62] = r));
    let i;
    n[63] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(te, {
          title: (0, $.jsx)(ee, {
            children: (0, $.jsx)(a, {
              id: `amphora.familyInvite.acceptedBanner.title`,
              defaultMessage: `Request accepted`,
              description: `Title for the accepted family invite banner`,
            }),
          }),
        })),
        (n[63] = i))
      : (i = n[63]);
    let o;
    n[64] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(ne, {
          children: (0, $.jsx)(a, {
            id: `amphora.familyInvite.acceptedBanner.description.default`,
            defaultMessage: `Parental controls are now linked`,
            description: `Fallback accepted banner description`,
          }),
        })),
        (n[64] = o))
      : (o = n[64]);
    let s;
    n[65] === x
      ? (s = n[66])
      : ((s =
          x === `dismiss` &&
          (0, $.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, $.jsx)(a, {
              id: `settings.chatGpt.familyInvitation.acceptedDismissError`,
              defaultMessage: `Invitation accepted. The notification couldn’t be dismissed. Retry, or close and return later.`,
              description: `A confirmed acceptance whose notification acknowledgement has not succeeded`,
            }),
          })),
        (n[65] = x),
        (n[66] = s));
    let c;
    n[67] === s
      ? (c = n[68])
      : ((c = (0, $.jsxs)(ie, { className: `flex flex-col gap-3`, children: [o, s] })),
        (n[67] = s),
        (n[68] = c));
    let l;
    n[69] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, $.jsx)(a, {
          id: `settings.chatGpt.familyInvitation.returnAcceptedLater`,
          defaultMessage: `Return later`,
          description: `Leave a confirmed invitation acceptance with an acknowledgement retry available`,
        })),
        (n[69] = l))
      : (l = n[69]);
    let u;
    n[70] !== b || n[71] !== P
      ? ((u = (0, $.jsx)(t, { type: `button`, color: `secondary`, disabled: b, onClick: P, children: l })),
        (n[70] = b),
        (n[71] = P),
        (n[72] = u))
      : (u = n[72]);
    let d;
    n[73] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, $.jsx)(a, {
          id: `settings.chatGpt.familyInvitation.retryAcceptedDismiss`,
          defaultMessage: `Retry`,
          description: `Retry acknowledging a confirmed invitation acceptance`,
        })),
        (n[73] = d))
      : (d = n[73]);
    let f;
    n[74] === b
      ? (f = n[75])
      : ((f = (0, $.jsx)(t, { type: `submit`, loading: b, children: d })), (n[74] = b), (n[75] = f));
    let p;
    n[76] !== u || n[77] !== f
      ? ((p = (0, $.jsx)(ce, { children: (0, $.jsxs)($.Fragment, { children: [u, f] }) })),
        (n[76] = u),
        (n[77] = f),
        (n[78] = p))
      : (p = n[78]);
    let m;
    n[79] !== r || n[80] !== c || n[81] !== p
      ? ((m = (0, $.jsxs)(se, { as: `form`, onSubmit: r, children: [i, c, p] })),
        (n[79] = r),
        (n[80] = c),
        (n[81] = p),
        (n[82] = m))
      : (m = n[82]);
    let h;
    return (
      n[83] !== m || n[84] !== e
        ? ((h = (0, $.jsx)(ae, {
            open: !0,
            size: `compact`,
            showDialogClose: !0,
            onOpenChange: e,
            children: m,
          })),
          (n[83] = m),
          (n[84] = e),
          (n[85] = h))
        : (h = n[85]),
      h
    );
  }
  let F;
  n[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = { "aria-describedby": void 0 }), (n[86] = F))
    : (F = n[86]);
  let I;
  n[87] !== b || n[88] !== x || n[89] !== P || n[90] !== M
    ? ((I = (e) => {
        !e && !b && (x === `dismiss` ? P() : M());
      }),
      (n[87] = b),
      (n[88] = x),
      (n[89] = P),
      (n[90] = M),
      (n[91] = I))
    : (I = n[91]);
  let L;
  n[92] !== b || n[93] !== M
    ? ((L = (e) => {
        (e.preventDefault(), b || M(`accept`));
      }),
      (n[92] = b),
      (n[93] = M),
      (n[94] = L))
    : (L = n[94]);
  let R;
  n[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(`img`, { src: Ce, alt: ``, className: `absolute size-full object-cover` })),
      (n[95] = R))
    : (R = n[95]);
  let _e;
  n[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(`div`, {
        className: `flex size-20 translate-x-1 rotate-[-10deg] items-center justify-center rounded-[20px] bg-surface shadow-lg rtl:-translate-x-1 rtl:rotate-[10deg]`,
        children: (0, $.jsx)(de, { className: `text-tertiary` }),
      })),
      (n[96] = _e))
    : (_e = n[96]);
  let ve;
  n[97] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsxs)(`div`, {
        className: `relative grid h-[214px] shrink-0 place-items-center max-md:h-[136px]`,
        "aria-hidden": `true`,
        children: [
          R,
          (0, $.jsxs)(`div`, {
            className: `relative flex items-center`,
            "data-theme": `light`,
            children: [
              _e,
              (0, $.jsx)(`div`, {
                className: `flex size-20 -translate-x-1 rotate-[10deg] items-center justify-center rounded-[20px] bg-surface shadow-lg rtl:translate-x-1 rtl:rotate-[-10deg]`,
                children: (0, $.jsx)(Me, { className: `size-10 text-default` }),
              }),
            ],
          }),
        ],
      })),
      (n[97] = ve))
    : (ve = n[97]);
  let z;
  n[98] !== h.inviter_identifier || n[99] !== h.inviter_name || n[100] !== h.role
    ? ((z = (0, $.jsx)(te, {
        titleSize: `lg`,
        title: (0, $.jsx)(ee, {
          children:
            h.role === `owner`
              ? (0, $.jsx)(a, {
                  id: `amphora.familyInvite.parentRoleTitle`,
                  defaultMessage: `Are you {inviterName}'s parent or guardian?`,
                  description: `Title shown to the invited parent; inviterName is the teen who sent the invite`,
                  values: { inviterName: h.inviter_name || h.inviter_identifier },
                })
              : (0, $.jsx)(a, {
                  id: `amphora.familyInvite.infoModal.title.member`,
                  defaultMessage: `Add {inviterName} as your parent or guardian?`,
                  description: `Title shown to an invited teen; inviterName is the parent who sent the invite`,
                  values: { inviterName: h.inviter_name || h.inviter_identifier },
                }),
        }),
      })),
      (n[98] = h.inviter_identifier),
      (n[99] = h.inviter_name),
      (n[100] = h.role),
      (n[101] = z))
    : (z = n[101]);
  let B;
  n[102] === h.inviter_identifier
    ? (B = n[103])
    : ((B = (0, $.jsx)(`p`, { className: `text-default select-text`, children: h.inviter_identifier })),
      (n[102] = h.inviter_identifier),
      (n[103] = B));
  let V;
  n[104] !== h.inviter_identifier || n[105] !== h.inviter_name || n[106] !== h.role
    ? ((V = (0, $.jsx)(`p`, {
        children:
          h.role === `owner`
            ? (0, $.jsx)(a, {
                id: `amphora.familyInvite.messagesForParents.description`,
                defaultMessage: `If you accept, you’ll be able to manage some of your teen’s settings, set time limits, and add safeguards that work for your family`,
                description: `Explains parental controls to a parent accepting an invitation`,
              })
            : (0, $.jsx)(a, {
                id: `amphora.familyInvite.messagesForTeens.description`,
                defaultMessage: `If you accept, {inviterName} will be able to manage some of your settings, set time limits, and add safeguards that work for your family`,
                description: `Explains parental controls to a teen accepting an invitation`,
                values: { inviterName: h.inviter_name || h.inviter_identifier },
              }),
      })),
      (n[104] = h.inviter_identifier),
      (n[105] = h.inviter_name),
      (n[106] = h.role),
      (n[107] = V))
    : (V = n[107]);
  let ye;
  n[108] === h.role
    ? (ye = n[109])
    : ((ye = (0, $.jsx)(`p`, {
        children:
          h.role === `owner`
            ? (0, $.jsx)(a, {
                id: `amphora.familyInvite.messagesForParents.learnMore`,
                defaultMessage: `You won’t have access to details about your teen’s conversations with ChatGPT, except in certain rare safety circumstances. You can unlink accounts anytime. <link>Learn more</link>`,
                description: `Explains conversation privacy and account unlinking to an invited parent, with a link to the parental controls FAQ`,
                values: { link: Ue },
              })
            : (0, $.jsx)(a, {
                id: `amphora.familyInvite.messagesForTeens.learnMore`,
                defaultMessage: `We won’t share details of your conversations with ChatGPT, except in certain rare safety circumstances. You can unlink accounts anytime. <link>Learn more</link>`,
                description: `Explains conversation privacy and account unlinking to an invited teen, with a link to the parental controls FAQ`,
                values: { link: He },
              }),
      })),
      (n[108] = h.role),
      (n[109] = ye));
  let U;
  n[110] === x ? (U = n[111]) : ((U = x === `response` && (0, $.jsx)(Se, {})), (n[110] = x), (n[111] = U));
  let W;
  n[112] === x
    ? (W = n[113])
    : ((W =
        x === `dismiss` &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, $.jsx)(a, {
            id: `settings.chatGpt.familyInvitation.undecidedDismissError`,
            defaultMessage: `The notification couldn’t be dismissed. Retry, or close and return later.`,
            description: `Acknowledgement of an invitation without a membership decision failed`,
          }),
        })),
      (n[112] = x),
      (n[113] = W));
  let G;
  n[114] !== B || n[115] !== V || n[116] !== ye || n[117] !== U || n[118] !== W
    ? ((G = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-6 text-base text-secondary`,
        children: [B, V, ye, U, W],
      })),
      (n[114] = B),
      (n[115] = V),
      (n[116] = ye),
      (n[117] = U),
      (n[118] = W),
      (n[119] = G))
    : (G = n[119]);
  let K;
  n[120] !== z || n[121] !== G
    ? ((K = (0, $.jsxs)(`div`, { className: `flex flex-col gap-6 px-8 pt-8 pb-0`, children: [z, G] })),
      (n[120] = z),
      (n[121] = G),
      (n[122] = K))
    : (K = n[122]);
  let be;
  n[123] !== b || n[124] !== x || n[125] !== P || n[126] !== M
    ? ((be =
        x === `dismiss` &&
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(t, {
              type: `button`,
              color: `secondary`,
              disabled: b,
              onClick: P,
              children: (0, $.jsx)(a, {
                id: `settings.chatGpt.familyInvitation.returnUndecidedLater`,
                defaultMessage: `Return later`,
                description: `Leave an unacknowledged family invitation available for later`,
              }),
            }),
            (0, $.jsx)(t, {
              color: `secondary`,
              type: `button`,
              disabled: b,
              onClick: () => M(),
              children: (0, $.jsx)(a, {
                id: `settings.chatGpt.familyInvitation.retryUndecidedDismiss`,
                defaultMessage: `Retry`,
                description: `Retry acknowledging a family invitation without a membership decision`,
              }),
            }),
          ],
        })),
      (n[123] = b),
      (n[124] = x),
      (n[125] = P),
      (n[126] = M),
      (n[127] = be))
    : (be = n[127]);
  let q;
  n[128] === M ? (q = n[129]) : ((q = () => M(`reject`)), (n[128] = M), (n[129] = q));
  let xe;
  n[130] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, $.jsx)(a, {
        id: `settings.chatGpt.parentalControls.decline`,
        defaultMessage: `Decline`,
        description: `Declines an incoming parental-controls invitation`,
      })),
      (n[130] = xe))
    : (xe = n[130]);
  let J;
  n[131] !== b || n[132] !== q
    ? ((J = (0, $.jsx)(t, { color: `secondary`, type: `button`, disabled: b, onClick: q, children: xe })),
      (n[131] = b),
      (n[132] = q),
      (n[133] = J))
    : (J = n[133]);
  let Y;
  n[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, $.jsx)(a, {
        id: `settings.chatGpt.parentalControls.accept`,
        defaultMessage: `Accept`,
        description: `Accepts an incoming parental-controls invitation`,
      })),
      (n[134] = Y))
    : (Y = n[134]);
  let X;
  n[135] === b
    ? (X = n[136])
    : ((X = (0, $.jsx)(t, { type: `submit`, disabled: b, children: Y })), (n[135] = b), (n[136] = X));
  let we;
  n[137] !== be || n[138] !== J || n[139] !== X
    ? ((we = (0, $.jsx)(`div`, {
        className: `px-8 pt-4 pb-8`,
        children: (0, $.jsxs)(ce, { children: [be, J, X] }),
      })),
      (n[137] = be),
      (n[138] = J),
      (n[139] = X),
      (n[140] = we))
    : (we = n[140]);
  let Z;
  n[141] !== L || n[142] !== K || n[143] !== we
    ? ((Z = (0, $.jsxs)(se, { as: `form`, variant: `chatgpt`, onSubmit: L, children: [ve, K, we] })),
      (n[141] = L),
      (n[142] = K),
      (n[143] = we),
      (n[144] = Z))
    : (Z = n[144]);
  let Te;
  return (
    n[145] !== I || n[146] !== Z
      ? ((Te = (0, $.jsx)(ae, {
          open: !0,
          size: `beacon`,
          radius: `compact`,
          overlayClassName: `bg-text/5 backdrop-blur-sm`,
          contentProps: F,
          showDialogClose: !0,
          onOpenChange: I,
          children: Z,
        })),
        (n[145] = I),
        (n[146] = Z),
        (n[147] = Te))
      : (Te = n[147]),
    Te
  );
}
function He(e) {
  return (0, $.jsx)(N, {
    appearance: `secondary`,
    href: `https://help.openai.com/en/articles/12315553-parental-controls-faq`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Ue(e) {
  return (0, $.jsx)(N, {
    appearance: `secondary`,
    href: `https://help.openai.com/en/articles/12315553-parental-controls-faq`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function We(e) {
  return e instanceof re && e.diagnosticError instanceof w ? e.diagnosticError.message : e.message;
}
var Ge, Q, $, Ke;
function qe() {
  return (qe = e(() => {
    ((Ge = ue()),
      z(),
      o(),
      b(),
      Ae(),
      l(),
      (Q = T()),
      _(),
      p(),
      J(),
      j(),
      k(),
      D(),
      d(),
      y(),
      x(),
      m(),
      M(),
      u(),
      E(),
      v(),
      Ne(),
      S(),
      O(),
      R(),
      h(),
      U(),
      W(),
      K(),
      ($ = C()),
      (Ke = n({
        relationshipQuestion: {
          id: `amphora.members.relationshipQuestion`,
          defaultMessage: `This person is:`,
          description: `Label shown above the relationship picker in invite modal`,
        },
      })));
  }))();
}
export { Pe as a, qe as i, Ie as n, Fe as o, Be as r, Ve as t };
//# sourceMappingURL=invitations-6a97e67bf026.js.map
