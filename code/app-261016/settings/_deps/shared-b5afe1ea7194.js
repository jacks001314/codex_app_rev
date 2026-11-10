import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  HO as a,
  IO as o,
  JO as s,
  KO as c,
  LNt as l,
  LO as u,
  Lst as d,
  NH as f,
  PBt as p,
  Qst as m,
  RO as h,
  Rst as g,
  TY as _,
  WO as v,
  XOt as y,
  Y3 as b,
  Z3 as x,
  ZSt as S,
  ew as C,
  okt as w,
  oq as T,
  qO as E,
  sw as D,
  tkt as O,
  uw as k,
  vst as A,
  yst as j,
  zO as M,
} from "./app-shared-2feb3d4c6fcc.js";
import { GLn as N, iRr as P, oon as F, qLn as I, son as L, tyr as R } from "./app-initial-ad16eaadf81f.js";
import { i as z, n as B, r as V, t as H } from "./queries-94cb24d2279c.js";
function U(e) {
  let t = (0, X.c)(5),
    { onClick: n, disabled: r } = e,
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(f, {})),
      (a = (0, Q.jsx)(O, {
        id: `settingsModal.back`,
        defaultMessage: `Back`,
        description: `Back button for settings subpage header`,
      })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let o;
  return (
    t[2] !== r || t[3] !== n
      ? ((o = (0, Q.jsxs)(b, { color: `ghost`, onClick: n, disabled: r, children: [i, a] })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function W(e) {
  let t = (0, X.c)(8),
    { modal: n, iconOnly: r } = e,
    i = n !== void 0 && n,
    a = r !== void 0 && r,
    o = w();
  if (a) {
    let e;
    t[0] === o
      ? (e = t[1])
      : ((e = o.formatMessage({
          id: `settingsModal.amphoraControlsLearnMoreAriaLabel`,
          defaultMessage: `Learn more about parental controls`,
          description: `Accessible label for the help icon in the Parental controls settings header`,
        })),
        (t[0] = o),
        (t[1] = e));
    let n, r;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(O, {
          id: `settingsModal.amphoraControlsLearnMoreTooltip`,
          defaultMessage: `Learn more`,
          description: `Tooltip for the help icon in the parental controls settings header`,
        })),
        (r = (0, Q.jsx)(T, {})),
        (t[2] = n),
        (t[3] = r))
      : ((n = t[2]), (r = t[3]));
    let i;
    return (
      t[4] === e
        ? (i = t[5])
        : ((i = (0, Q.jsx)(N, {
            href: `https://help.openai.com/articles/12315553-parental-controls-on-chatgpt-faq`,
            initiator: `open_in_browser_bridge`,
            "aria-label": e,
            tooltipContent: n,
            children: r,
          })),
          (t[4] = e),
          (t[5] = i)),
      i
    );
  }
  let s;
  return (
    t[6] === i
      ? (s = t[7])
      : ((s = (0, Q.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(O, {
            id: `settings.chatGpt.parentalControls.learnMoreLink`,
            defaultMessage: `<link>Learn more</link> about parental controls`,
            description: `Helper paragraph in parental controls. Only Learn more is a link to the Help Center article.`,
            values: {
              link: (e) =>
                (0, Q.jsx)(N, {
                  appearance: `secondary`,
                  href: `https://help.openai.com/articles/12315553-parental-controls-on-chatgpt-faq`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: i ? `external-browser` : void 0,
                  children: e,
                }),
            },
          }),
        })),
        (t[6] = i),
        (t[7] = s)),
    s
  );
}
function G(e) {
  let n = (0, X.c)(22),
    { member: r } = e,
    i = w(),
    a;
  n[0] !== i || n[1] !== r.account_identifier || n[2] !== r.email || n[3] !== r.name || n[4] !== r.status
    ? ((a =
        r.name ||
        r.email ||
        r.account_identifier ||
        (r.status === `invited`
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
      (n[0] = i),
      (n[1] = r.account_identifier),
      (n[2] = r.email),
      (n[3] = r.name),
      (n[4] = r.status),
      (n[5] = a))
    : (a = n[5]);
  let o = a,
    s = r.email || r.account_identifier,
    c = r.user_id ?? void 0,
    l = r.profile_picture_url ?? null,
    u;
  n[6] !== o || n[7] !== c || n[8] !== l
    ? ((u = (0, Q.jsx)(F, { name: o, alt: ``, colorKey: c, src: l, size: `md` })),
      (n[6] = o),
      (n[7] = c),
      (n[8] = l),
      (n[9] = u))
    : (u = n[9]);
  let d;
  n[10] === o
    ? (d = n[11])
    : ((d = (0, Q.jsx)(`span`, { className: `break-words select-text`, children: o })),
      (n[10] = o),
      (n[11] = d));
  let f;
  n[12] !== s || n[13] !== r.status
    ? ((f =
        r.status === `invited`
          ? (0, Q.jsx)(O, {
              id: `amphora.invited.status.sent`,
              defaultMessage: `Invitation sent`,
              description: `Helper text below email for a pending family invite`,
            })
          : (0, Q.jsx)(`span`, { className: `break-words select-text`, children: s })),
      (n[12] = s),
      (n[13] = r.status),
      (n[14] = f))
    : (f = n[14]);
  let p;
  n[15] === r.role
    ? (p = n[16])
    : ((p = r.role === `owner` ? (0, Q.jsx)(K, {}) : null), (n[15] = r.role), (n[16] = p));
  let m;
  return (
    n[17] !== u || n[18] !== d || n[19] !== f || n[20] !== p
      ? ((m = (0, Q.jsx)(t, { children: (0, Q.jsx)(D, { icon: u, label: d, description: f, control: p }) })),
        (n[17] = u),
        (n[18] = d),
        (n[19] = f),
        (n[20] = p),
        (n[21] = m))
      : (m = n[21]),
    m
  );
}
function K() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`span`, {
          className: `text-sm text-secondary select-none`,
          children: (0, Q.jsx)(O, {
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
          children: (0, Q.jsx)(O, {
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
  let t = (0, X.c)(46),
    { account: r, amphoraId: i, member: a, self: o, leavingFamily: s, parentDetails: l, onRemoved: u } = e,
    d = s !== void 0 && s,
    f = l !== void 0 && l,
    p = n(m),
    [h, _] = (0, Z.useState)(!1),
    v = g(),
    y = (0, Z.useRef)(null),
    x,
    S;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => () => {
        y.current?.abort();
      }),
      (S = []),
      (t[0] = x),
      (t[1] = S))
    : ((x = t[0]), (S = t[1])),
    (0, Z.useEffect)(x, S));
  let C;
  t[2] !== r.accountId || t[3] !== r.userId
    ? ((C = B(r.userId, r.accountId)), (t[2] = r.accountId), (t[3] = r.userId), (t[4] = C))
    : (C = t[4]);
  let w = C,
    T;
  t[5] !== r.accountId || t[6] !== r.userId
    ? ((T = [`chatgpt-parental-controls`, r.userId, r.accountId]),
      (t[5] = r.accountId),
      (t[6] = r.userId),
      (t[7] = T))
    : (T = t[7]);
  let E = T,
    D;
  t[8] !== r ||
  t[9] !== i ||
  t[10] !== v ||
  t[11] !== w ||
  t[12] !== a ||
  t[13] !== E ||
  t[14] !== p ||
  t[15] !== o
    ? ((D = async () => {
        let e = v.getQueryData(w.current.queryKey),
          t = v.getQueryData(w.members(i).queryKey)?.items.find((e) => {
            let { user_id: t } = e;
            return t === a.user_id;
          });
        if (y.current != null || !z(p, r) || e?.id !== i || t?.status !== `accepted` || t.role !== a.role)
          throw Error(`Family membership changed before unlinking`);
        let n = new AbortController();
        y.current = n;
        let s = p.watch((e) => {
          z(e, r) || n.abort();
        });
        return (
          v.invalidateQueries({ queryKey: E, refetchType: `none` }),
          P.safePost(`/amphora/{amphora_id}/remove`, {
            additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
            parameters: { path: { amphora_id: encodeURIComponent(i) } },
            requestBody: { user_id: o ? r.userId : a.user_id },
            signal: n.signal,
          })
            .then((e) => {
              if (n.signal.aborted || !z(p, r)) throw new DOMException(`Account changed`, `AbortError`);
              return e;
            })
            .finally(() => {
              (s(), y.current === n && (y.current = null));
            })
        );
      }),
      (t[8] = r),
      (t[9] = i),
      (t[10] = v),
      (t[11] = w),
      (t[12] = a),
      (t[13] = E),
      (t[14] = p),
      (t[15] = o),
      (t[16] = D))
    : (D = t[16]);
  let k;
  t[17] !== r || t[18] !== v || t[19] !== u || t[20] !== E || t[21] !== p
    ? ((k = () => {
        z(p, r) && (u(), v.invalidateQueries({ queryKey: E, refetchType: `active` }));
      }),
      (t[17] = r),
      (t[18] = v),
      (t[19] = u),
      (t[20] = E),
      (t[21] = p),
      (t[22] = k))
    : (k = t[22]);
  let A;
  t[23] !== D || t[24] !== k
    ? ((A = { mutationFn: D, onSuccess: k }), (t[23] = D), (t[24] = k), (t[25] = A))
    : (A = t[25]);
  let { mutate: M, isPending: N, isError: F } = j(A),
    I;
  t[26] === f
    ? (I = t[27])
    : ((I = f
        ? (0, Q.jsx)(O, {
            id: `amphora.parent.removeFromFamily`,
            defaultMessage: `Remove from family`,
            description: `Button label for unlinking parent accounts`,
          })
        : (0, Q.jsx)(O, {
            id: `amphora.memberSettings.unlinkButton`,
            defaultMessage: `Unlink accounts`,
            description: `Button label for removing a member from the family group`,
          })),
      (t[26] = f),
      (t[27] = I));
  let L = I,
    R = o === !0,
    V;
  if (d) {
    let e;
    (t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(O, {
          id: `settings.chatGpt.parentalControls.unlink.leaveDescription`,
          defaultMessage: `Are you sure you want to leave this family group?`,
          description: `Confirmation shown to a parent viewing another parent's profile; confirming removes the signed-in parent from the parental-controls family`,
        })),
        (t[28] = e))
      : (e = t[28]),
      (V = e));
  } else if (R) {
    let e;
    (t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(O, {
          id: `amphora.relationship.unlinkConfirm`,
          defaultMessage: `Are you sure you want to unlink your accounts?`,
          description: `Confirmation text when unlinking the accounts`,
        })),
        (t[29] = e))
      : (e = t[29]),
      (V = e));
  } else {
    let e = a.name || a.email || a.account_identifier,
      n = a.name || a.email || a.account_identifier ? `present` : `missing`,
      r;
    (t[30] !== e || t[31] !== n
      ? ((r = (0, Q.jsx)(O, {
          id: `amphora.memberSettings.unlinkConfirm.withFallback`,
          defaultMessage: `{nameState, select, present {Remove {name} from this family group?} other {Remove this member from this family group?}}`,
          description: `Confirmation before unlinking a family member. name is the member's display name, email or account identifier when nameState is present; otherwise use the complete unnamed-member question.`,
          values: { name: e, nameState: n },
        })),
        (t[30] = e),
        (t[31] = n),
        (t[32] = r))
      : (r = t[32]),
      (V = r));
  }
  let H;
  t[33] === Symbol.for(`react.memo_cache_sentinel`) ? ((H = () => _(!0)), (t[33] = H)) : (H = t[33]);
  let U;
  t[34] === L
    ? (U = t[35])
    : ((U = (0, Q.jsx)(`div`, { children: (0, Q.jsx)(b, { color: `danger`, onClick: H, children: L }) })),
      (t[34] = L),
      (t[35] = U));
  let W;
  t[36] !== h || t[37] !== V || t[38] !== F || t[39] !== N || t[40] !== L || t[41] !== M
    ? ((W =
        h &&
        (0, Q.jsxs)(Y, {
          title: L,
          onClose: () => _(!1),
          onSubmit: () => M(),
          pending: N,
          confirmLabel: L,
          children: [(0, Q.jsx)(c, { children: V }), F && (0, Q.jsx)(q, {})],
        })),
      (t[36] = h),
      (t[37] = V),
      (t[38] = F),
      (t[39] = N),
      (t[40] = L),
      (t[41] = M),
      (t[42] = W))
    : (W = t[42]);
  let G;
  return (
    t[43] !== U || t[44] !== W
      ? ((G = (0, Q.jsxs)(Q.Fragment, { children: [U, W] })), (t[43] = U), (t[44] = W), (t[45] = G))
      : (G = t[45]),
    G
  );
}
function Y(e) {
  let t = (0, X.c)(29),
    { title: n, children: r, onClose: i, onSubmit: a, pending: s, confirmDisabled: c, confirmLabel: l } = e,
    d = s !== void 0 && s,
    f = c !== void 0 && c,
    p;
  t[0] !== i || t[1] !== d
    ? ((p = (e) => {
        !e && !d && i();
      }),
      (t[0] = i),
      (t[1] = d),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== f || t[4] !== a || t[5] !== d
    ? ((m = (e) => {
        (e.preventDefault(), e.stopPropagation(), !d && !f && a());
      }),
      (t[3] = f),
      (t[4] = a),
      (t[5] = d),
      (t[6] = m))
    : (m = t[6]);
  let g;
  t[7] === n
    ? (g = t[8])
    : ((g = (0, Q.jsx)(h, { title: (0, Q.jsx)(E, { children: n }) })), (t[7] = n), (t[8] = g));
  let _;
  t[9] === r
    ? (_ = t[10])
    : ((_ = (0, Q.jsx)(M, { className: `flex flex-col gap-3`, children: r })), (t[9] = r), (t[10] = _));
  let y;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(O, {
        id: `amphora.members.cancelButton`,
        defaultMessage: `Cancel`,
        description: `Cancel button text in family invite modal`,
      })),
      (t[11] = y))
    : (y = t[11]);
  let x;
  t[12] !== i || t[13] !== d
    ? ((x = (0, Q.jsx)(b, { color: `secondary`, onClick: i, disabled: d, children: y })),
      (t[12] = i),
      (t[13] = d),
      (t[14] = x))
    : (x = t[14]);
  let S = d || f,
    C;
  t[15] !== l || t[16] !== S
    ? ((C = (0, Q.jsx)(b, { type: `submit`, disabled: S, children: l })),
      (t[15] = l),
      (t[16] = S),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] !== C || t[19] !== x
    ? ((w = (0, Q.jsxs)(u, { children: [x, C] })), (t[18] = C), (t[19] = x), (t[20] = w))
    : (w = t[20]);
  let T;
  t[21] !== w || t[22] !== m || t[23] !== g || t[24] !== _
    ? ((T = (0, Q.jsxs)(o, { as: `form`, onSubmit: m, children: [g, _, w] })),
      (t[21] = w),
      (t[22] = m),
      (t[23] = g),
      (t[24] = _),
      (t[25] = T))
    : (T = t[25]);
  let D;
  return (
    t[26] !== T || t[27] !== p
      ? ((D = (0, Q.jsx)(v, {
          open: !0,
          onOpenChange: p,
          size: `compact`,
          showDialogClose: !0,
          children: T,
        })),
        (t[26] = T),
        (t[27] = p),
        (t[28] = D))
      : (D = t[28]),
    D
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = p()),
      A(),
      d(),
      S(),
      (Z = i()),
      y(),
      R(),
      L(),
      x(),
      s(),
      a(),
      I(),
      _(),
      r(),
      k(),
      C(),
      V(),
      H(),
      (Q = l()));
  }))();
}
export { G as a, $ as c, W as i, U as n, K as o, Y as r, J as s, q as t };
//# sourceMappingURL=shared-b5afe1ea7194.js.map
