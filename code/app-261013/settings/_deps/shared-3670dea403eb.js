import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Iot as i,
  Ixt as a,
  JC as o,
  LV as s,
  Lot as c,
  Pxt as l,
  TJ as u,
  VDt as d,
  _O as f,
  cO as p,
  fO as m,
  gO as h,
  iw as g,
  jDt as _,
  lK as v,
  lO as y,
  mO as b,
  nst as x,
  oO as S,
  qC as C,
  sO as w,
  t3 as T,
  tst as E,
  tw as D,
  vO as O,
  vzt as k,
  wot as A,
  xMt as j,
  yzt as M,
} from "./app-shared-bbfeca5e5737.js";
import { Bnn as N, Ymr as P, ehr as F, xPn as I, yPn as L, znn as R } from "./app-initial-5851df3f6cb1.js";
import { i as z, n as B, r as V, t as H } from "./queries-5461a01c4337.js";
function U(e) {
  let n = (0, X.c)(5),
    { onClick: i, disabled: a } = e,
    o,
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(s, {})),
      (c = (0, Q.jsx)(r, {
        id: `settingsModal.back`,
        defaultMessage: `Back`,
        description: `Back button for settings subpage header`,
      })),
      (n[0] = o),
      (n[1] = c))
    : ((o = n[0]), (c = n[1]));
  let l;
  return (
    n[2] !== a || n[3] !== i
      ? ((l = (0, Q.jsxs)(t, { color: `ghost`, onClick: i, disabled: a, children: [o, c] })),
        (n[2] = a),
        (n[3] = i),
        (n[4] = l))
      : (l = n[4]),
    l
  );
}
function W(e) {
  let t = (0, X.c)(8),
    { modal: n, iconOnly: i } = e,
    a = n !== void 0 && n,
    o = i !== void 0 && i,
    s = d();
  if (o) {
    let e;
    t[0] === s
      ? (e = t[1])
      : ((e = s.formatMessage({
          id: `settingsModal.amphoraControlsLearnMoreAriaLabel`,
          defaultMessage: `Learn more about parental controls`,
          description: `Accessible label for the help icon in the Parental controls settings header`,
        })),
        (t[0] = s),
        (t[1] = e));
    let n, i;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(r, {
          id: `settingsModal.amphoraControlsLearnMoreTooltip`,
          defaultMessage: `Learn more`,
          description: `Tooltip for the help icon in the parental controls settings header`,
        })),
        (i = (0, Q.jsx)(v, {})),
        (t[2] = n),
        (t[3] = i))
      : ((n = t[2]), (i = t[3]));
    let a;
    return (
      t[4] === e
        ? (a = t[5])
        : ((a = (0, Q.jsx)(L, {
            href: `https://help.openai.com/articles/12315553-parental-controls-on-chatgpt-faq`,
            initiator: `open_in_browser_bridge`,
            "aria-label": e,
            tooltipContent: n,
            children: i,
          })),
          (t[4] = e),
          (t[5] = a)),
      a
    );
  }
  let c;
  return (
    t[6] === a
      ? (c = t[7])
      : ((c = (0, Q.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(r, {
            id: `settings.chatGpt.parentalControls.learnMoreLink`,
            defaultMessage: `<link>Learn more</link> about parental controls`,
            description: `Helper paragraph in parental controls. Only Learn more is a link to the Help Center article.`,
            values: {
              link: (e) =>
                (0, Q.jsx)(L, {
                  appearance: `secondary`,
                  href: `https://help.openai.com/articles/12315553-parental-controls-on-chatgpt-faq`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: a ? `external-browser` : void 0,
                  children: e,
                }),
            },
          }),
        })),
        (t[6] = a),
        (t[7] = c)),
    c
  );
}
function G(e) {
  let t = (0, X.c)(22),
    { member: n } = e,
    i = d(),
    a;
  t[0] !== i || t[1] !== n.account_identifier || t[2] !== n.email || t[3] !== n.name || t[4] !== n.status
    ? ((a =
        n.name ||
        n.email ||
        n.account_identifier ||
        (n.status === `invited`
          ? i.formatMessage({
              id: `amphora.members.missingMember`,
              defaultMessage: `[missing]`,
              description: `Fallback label for missing member`,
            })
          : i.formatMessage({
              id: `settings.chatGpt.parentalControls.memberFallback`,
              defaultMessage: `Member`,
              description: `Fallback member display name in the parental controls profile`,
            }))),
      (t[0] = i),
      (t[1] = n.account_identifier),
      (t[2] = n.email),
      (t[3] = n.name),
      (t[4] = n.status),
      (t[5] = a))
    : (a = t[5]);
  let o = a,
    s = n.email || n.account_identifier,
    c = n.user_id ?? void 0,
    l = n.profile_picture_url ?? null,
    u;
  t[6] !== o || t[7] !== c || t[8] !== l
    ? ((u = (0, Q.jsx)(R, { name: o, alt: ``, colorKey: c, src: l, size: `md` })),
      (t[6] = o),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u))
    : (u = t[9]);
  let f;
  t[10] === o
    ? (f = t[11])
    : ((f = (0, Q.jsx)(`span`, { className: `break-words select-text`, children: o })),
      (t[10] = o),
      (t[11] = f));
  let p;
  t[12] !== s || t[13] !== n.status
    ? ((p =
        n.status === `invited`
          ? (0, Q.jsx)(r, {
              id: `amphora.invited.status.sent`,
              defaultMessage: `Invitation sent`,
              description: `Helper text below email for a pending family invite`,
            })
          : (0, Q.jsx)(`span`, { className: `break-words select-text`, children: s })),
      (t[12] = s),
      (t[13] = n.status),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] === n.role
    ? (m = t[16])
    : ((m = n.role === `owner` ? (0, Q.jsx)(K, {}) : null), (t[15] = n.role), (t[16] = m));
  let h;
  return (
    t[17] !== u || t[18] !== f || t[19] !== p || t[20] !== m
      ? ((h = (0, Q.jsx)(C, { children: (0, Q.jsx)(D, { icon: u, label: f, description: p, control: m }) })),
        (t[17] = u),
        (t[18] = f),
        (t[19] = p),
        (t[20] = m),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
function K() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`span`, {
          className: `text-sm text-secondary select-none`,
          children: (0, Q.jsx)(r, {
            id: `settings.chatGpt.parentalControls.parent`,
            defaultMessage: `Parent`,
            description: `Relationship badge next to a parent's name in parental controls`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function q() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, Q.jsx)(r, {
            id: `settings.chatGpt.parentalControls.actionError`,
            defaultMessage: `Something went wrong. Try again.`,
            description: `Error in parental controls after an unsuccessful action; the form stays open so the user can retry`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function J(e) {
  let i = (0, X.c)(46),
    { account: o, amphoraId: s, member: l, self: u, leavingFamily: d, parentDetails: f, onRemoved: p } = e,
    m = d !== void 0 && d,
    g = f !== void 0 && f,
    _ = a(n),
    [v, y] = (0, Z.useState)(!1),
    b = x(),
    S = (0, Z.useRef)(null),
    C,
    w;
  (i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => () => {
        S.current?.abort();
      }),
      (w = []),
      (i[0] = C),
      (i[1] = w))
    : ((C = i[0]), (w = i[1])),
    (0, Z.useEffect)(C, w));
  let T;
  i[2] !== o.accountId || i[3] !== o.userId
    ? ((T = B(o.userId, o.accountId)), (i[2] = o.accountId), (i[3] = o.userId), (i[4] = T))
    : (T = i[4]);
  let E = T,
    D;
  i[5] !== o.accountId || i[6] !== o.userId
    ? ((D = [`chatgpt-parental-controls`, o.userId, o.accountId]),
      (i[5] = o.accountId),
      (i[6] = o.userId),
      (i[7] = D))
    : (D = i[7]);
  let O = D,
    k;
  i[8] !== o ||
  i[9] !== s ||
  i[10] !== b ||
  i[11] !== E ||
  i[12] !== l ||
  i[13] !== O ||
  i[14] !== _ ||
  i[15] !== u
    ? ((k = async () => {
        let e = b.getQueryData(E.current.queryKey),
          t = b.getQueryData(E.members(s).queryKey)?.items.find((e) => {
            let { user_id: t } = e;
            return t === l.user_id;
          });
        if (S.current != null || !z(_, o) || e?.id !== s || t?.status !== `accepted` || t.role !== l.role)
          throw Error(`Family membership changed before unlinking`);
        let n = new AbortController();
        S.current = n;
        let r = _.watch((e) => {
          z(e, o) || n.abort();
        });
        return (
          b.invalidateQueries({ queryKey: O, refetchType: `none` }),
          P.safePost(`/amphora/{amphora_id}/remove`, {
            additionalHeaders: { "ChatGPT-Account-ID": o.accountId },
            parameters: { path: { amphora_id: encodeURIComponent(s) } },
            requestBody: { user_id: u ? o.userId : l.user_id },
            signal: n.signal,
          })
            .then((e) => {
              if (n.signal.aborted || !z(_, o)) throw new DOMException(`Account changed`, `AbortError`);
              return e;
            })
            .finally(() => {
              (r(), S.current === n && (S.current = null));
            })
        );
      }),
      (i[8] = o),
      (i[9] = s),
      (i[10] = b),
      (i[11] = E),
      (i[12] = l),
      (i[13] = O),
      (i[14] = _),
      (i[15] = u),
      (i[16] = k))
    : (k = i[16]);
  let A;
  i[17] !== o || i[18] !== b || i[19] !== p || i[20] !== O || i[21] !== _
    ? ((A = () => {
        z(_, o) && (p(), b.invalidateQueries({ queryKey: O, refetchType: `active` }));
      }),
      (i[17] = o),
      (i[18] = b),
      (i[19] = p),
      (i[20] = O),
      (i[21] = _),
      (i[22] = A))
    : (A = i[22]);
  let j;
  i[23] !== k || i[24] !== A
    ? ((j = { mutationFn: k, onSuccess: A }), (i[23] = k), (i[24] = A), (i[25] = j))
    : (j = i[25]);
  let { mutate: M, isPending: N, isError: F } = c(j),
    I;
  i[26] === g
    ? (I = i[27])
    : ((I = g
        ? (0, Q.jsx)(r, {
            id: `amphora.parent.removeFromFamily`,
            defaultMessage: `Remove from family`,
            description: `Button label for unlinking parent accounts`,
          })
        : (0, Q.jsx)(r, {
            id: `amphora.memberSettings.unlinkButton`,
            defaultMessage: `Unlink accounts`,
            description: `Button label for removing a member from the family group`,
          })),
      (i[26] = g),
      (i[27] = I));
  let L = I,
    R = u === !0,
    V;
  if (m) {
    let e;
    (i[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(r, {
          id: `settings.chatGpt.parentalControls.unlink.leaveDescription`,
          defaultMessage: `Are you sure you want to leave this family group?`,
          description: `Confirmation shown to a parent viewing another parent's profile; confirming removes the signed-in parent from the parental-controls family`,
        })),
        (i[28] = e))
      : (e = i[28]),
      (V = e));
  } else if (R) {
    let e;
    (i[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(r, {
          id: `amphora.relationship.unlinkConfirm`,
          defaultMessage: `Are you sure you want to unlink your accounts?`,
          description: `Confirmation text when unlinking the accounts`,
        })),
        (i[29] = e))
      : (e = i[29]),
      (V = e));
  } else {
    let e = l.name || l.email || l.account_identifier,
      t = l.name || l.email || l.account_identifier ? `present` : `missing`,
      n;
    (i[30] !== e || i[31] !== t
      ? ((n = (0, Q.jsx)(r, {
          id: `amphora.memberSettings.unlinkConfirm.withFallback`,
          defaultMessage: `{nameState, select, present {Remove {name} from this family group?} other {Remove this member from this family group?}}`,
          description: `Confirmation before unlinking a family member. name is the member's display name, email or account identifier when nameState is present; otherwise use the complete unnamed-member question.`,
          values: { name: e, nameState: t },
        })),
        (i[30] = e),
        (i[31] = t),
        (i[32] = n))
      : (n = i[32]),
      (V = n));
  }
  let H;
  i[33] === Symbol.for(`react.memo_cache_sentinel`) ? ((H = () => y(!0)), (i[33] = H)) : (H = i[33]);
  let U;
  i[34] === L
    ? (U = i[35])
    : ((U = (0, Q.jsx)(`div`, { children: (0, Q.jsx)(t, { color: `danger`, onClick: H, children: L }) })),
      (i[34] = L),
      (i[35] = U));
  let W;
  i[36] !== v || i[37] !== V || i[38] !== F || i[39] !== N || i[40] !== L || i[41] !== M
    ? ((W =
        v &&
        (0, Q.jsxs)(Y, {
          title: L,
          onClose: () => y(!1),
          onSubmit: () => M(),
          pending: N,
          confirmLabel: L,
          children: [(0, Q.jsx)(h, { children: V }), F && (0, Q.jsx)(q, {})],
        })),
      (i[36] = v),
      (i[37] = V),
      (i[38] = F),
      (i[39] = N),
      (i[40] = L),
      (i[41] = M),
      (i[42] = W))
    : (W = i[42]);
  let G;
  return (
    i[43] !== U || i[44] !== W
      ? ((G = (0, Q.jsxs)(Q.Fragment, { children: [U, W] })), (i[43] = U), (i[44] = W), (i[45] = G))
      : (G = i[45]),
    G
  );
}
function Y(e) {
  let n = (0, X.c)(29),
    { title: i, children: a, onClose: o, onSubmit: s, pending: c, confirmDisabled: l, confirmLabel: u } = e,
    d = c !== void 0 && c,
    m = l !== void 0 && l,
    h;
  n[0] !== o || n[1] !== d
    ? ((h = (e) => {
        !e && !d && o();
      }),
      (n[0] = o),
      (n[1] = d),
      (n[2] = h))
    : (h = n[2]);
  let g;
  n[3] !== m || n[4] !== s || n[5] !== d
    ? ((g = (e) => {
        (e.preventDefault(), e.stopPropagation(), !d && !m && s());
      }),
      (n[3] = m),
      (n[4] = s),
      (n[5] = d),
      (n[6] = g))
    : (g = n[6]);
  let _;
  n[7] === i
    ? (_ = n[8])
    : ((_ = (0, Q.jsx)(p, { title: (0, Q.jsx)(f, { children: i }) })), (n[7] = i), (n[8] = _));
  let v;
  n[9] === a
    ? (v = n[10])
    : ((v = (0, Q.jsx)(y, { className: `flex flex-col gap-3`, children: a })), (n[9] = a), (n[10] = v));
  let x;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(r, {
        id: `amphora.members.cancelButton`,
        defaultMessage: `Cancel`,
        description: `Cancel button text in family invite modal`,
      })),
      (n[11] = x))
    : (x = n[11]);
  let C;
  n[12] !== o || n[13] !== d
    ? ((C = (0, Q.jsx)(t, { color: `secondary`, onClick: o, disabled: d, children: x })),
      (n[12] = o),
      (n[13] = d),
      (n[14] = C))
    : (C = n[14]);
  let T = d || m,
    E;
  n[15] !== u || n[16] !== T
    ? ((E = (0, Q.jsx)(t, { type: `submit`, disabled: T, children: u })),
      (n[15] = u),
      (n[16] = T),
      (n[17] = E))
    : (E = n[17]);
  let D;
  n[18] !== E || n[19] !== C
    ? ((D = (0, Q.jsxs)(w, { children: [C, E] })), (n[18] = E), (n[19] = C), (n[20] = D))
    : (D = n[20]);
  let O;
  n[21] !== D || n[22] !== g || n[23] !== _ || n[24] !== v
    ? ((O = (0, Q.jsxs)(S, { as: `form`, onSubmit: g, children: [_, v, D] })),
      (n[21] = D),
      (n[22] = g),
      (n[23] = _),
      (n[24] = v),
      (n[25] = O))
    : (O = n[25]);
  let k;
  return (
    n[26] !== O || n[27] !== h
      ? ((k = (0, Q.jsx)(b, {
          open: !0,
          onOpenChange: h,
          size: `compact`,
          showDialogClose: !0,
          children: O,
        })),
        (n[26] = O),
        (n[27] = h),
        (n[28] = k))
      : (k = n[28]),
    k
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = k()),
      i(),
      E(),
      l(),
      (Z = M()),
      _(),
      F(),
      N(),
      T(),
      O(),
      m(),
      I(),
      u(),
      A(),
      g(),
      o(),
      V(),
      H(),
      (Q = j()));
  }))();
}
export { G as a, $ as c, W as i, U as n, K as o, Y as r, J as s, q as t };
//# sourceMappingURL=shared-3670dea403eb.js.map
