import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  CS as r,
  Cot as i,
  HNt as a,
  IDt as o,
  Ixt as s,
  JDt as c,
  Nxt as l,
  Pxt as u,
  VDt as d,
  Vxt as f,
  _xt as p,
  cz as m,
  fO as h,
  hot as g,
  jDt as _,
  lO as v,
  lot as y,
  nE as b,
  sz as x,
  t3 as S,
  vzt as C,
  wot as w,
  xMt as T,
  yAt as E,
  yzt as D,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  $B as k,
  $H as A,
  Bmt as j,
  Cc as M,
  DV as N,
  Dor as ee,
  EV as te,
  Ec as ne,
  Fin as P,
  Gmt as re,
  Iin as ie,
  Kmt as F,
  Psn as I,
  QH as L,
  Sc as R,
  Tc as z,
  Tct as B,
  Umt as V,
  XH as ae,
  XMr as oe,
  ZB as se,
  ZH as H,
  aor as U,
  axt as W,
  bV as ce,
  bc as le,
  cU as ue,
  dB as G,
  eDr as K,
  eU as de,
  eV as fe,
  hB as q,
  iV as pe,
  ixt as J,
  jV as me,
  mB as he,
  nDr as Y,
  oV as X,
  oor as ge,
  qMr as _e,
  qsn as ve,
  rcn as ye,
  tNr as be,
  tV as xe,
  uU as Se,
  ucn as Ce,
  vV as we,
  wc as Te,
  wct as Ee,
  wsn as De,
  xc as Oe,
  xsn as ke,
  yc as Ae,
} from "./app-initial-5851df3f6cb1.js";
import { n as je, t as Me } from "./avatar-ed18f22a2837.js";
import { i as Ne, n as Pe } from "./profile-card-24cf744f537b.js";
import { t as Fe } from "./modal-permission-dropdown-75a4787ca1b8.js";
import { n as Ie, t as Le } from "./role-label-47a44c95e79a.js";
import { t as Re } from "./permission-dropdown-e25fe01e48c3.js";
import { a as ze, n as Be, o as Ve, t as He } from "./progress-1945f894d035.js";
import { n as Ue, t as We } from "./collaborator-avatar-cfdc8d7a57ac.js";
import { i as Ge, n as Ke, r as qe, t as Je } from "./facepile-4ea3da6a7b88.js";
import { n as Ye, t as Xe } from "./detail-section-state-e7774e5ba7f3.js";
import { n as Ze, t as Qe } from "./page-collaborator-colors-72b01c060790.js";
import { n as $e, t as et } from "./space-sharing-10564e7624de.js";
function tt(e) {
  let t = (0, lt.c)(12),
    { children: n, dialog: r, renderDialog: i, target: a } = e,
    o = f(M),
    s = f(F),
    c = f(ee),
    l = f(oe);
  if (!o || s === `unavailable` || c == null || l == null) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = n?.(null)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e ? (r = t[3]) : ((r = (0, Z.jsx)(Z.Fragment, { children: e })), (t[2] = e), (t[3] = r)),
      r
    );
  }
  let u = `${a.kind}:${a.id}`,
    d;
  return (
    t[4] !== c || t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== u || t[9] !== a || t[10] !== l
      ? ((d = (0, Z.jsx)(
          nt,
          { accountId: c, dialog: r, renderDialog: i, target: a, userId: l, children: n },
          u,
        )),
        (t[4] = c),
        (t[5] = n),
        (t[6] = r),
        (t[7] = i),
        (t[8] = u),
        (t[9] = a),
        (t[10] = l),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function nt(e) {
  let t = (0, lt.c)(10),
    n;
  t[0] !== e.accountId || t[1] !== e.userId
    ? ((n = { accountId: e.accountId, userId: e.userId }),
      (t[0] = e.accountId),
      (t[1] = e.userId),
      (t[2] = n))
    : (n = t[2]);
  let [r, i] = (0, ut.useState)(n),
    a = f(F);
  if (r.accountId !== e.accountId || r.userId !== e.userId) {
    if (a !== `available`) {
      let n;
      t[3] === e.children ? (n = t[4]) : ((n = e.children?.(null)), (t[3] = e.children), (t[4] = n));
      let r;
      return (
        t[5] === n ? (r = t[6]) : ((r = (0, Z.jsx)(Z.Fragment, { children: n })), (t[5] = n), (t[6] = r)),
        r
      );
    }
    i({ accountId: e.accountId, userId: e.userId });
  }
  let o = `${e.accountId}:${e.userId}:${e.target.kind}:${e.target.id}`,
    s;
  return (
    t[7] !== e || t[8] !== o
      ? ((s = (0, Z.jsx)(rt, { ...e }, o)), (t[7] = e), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function rt(e) {
  let t = (0, lt.c)(91),
    { accountId: r, children: a, dialog: c, renderDialog: u, target: p, userId: m } = e,
    h = u === void 0 || u,
    _ = s(i),
    y = d(),
    b = f(F),
    x = b === `available`,
    [S, C] = l(),
    [w, T] = (0, ut.useState)(!1),
    D = c?.onOpenChange ?? T,
    k = (0, ut.useRef)(null),
    A = c?.triggerRef ?? k,
    j = O(le, p),
    [M, N] = (0, ut.useState)(ct),
    P;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = {}), (t[0] = P)) : (P = t[0]);
  let [re, ie] = (0, ut.useState)(P),
    {
      data: I,
      isError: L,
      isPending: z,
      refetch: B,
      hasNextPage: ae,
      fetchNextPage: se,
      isFetchingNextPage: H,
    } = O(R, p),
    U,
    W,
    ce,
    ue,
    G,
    K,
    de,
    fe,
    q,
    J,
    he,
    Y,
    X,
    ge;
  if (
    t[1] !== r ||
    t[2] !== x ||
    t[3] !== I?.pages ||
    t[4] !== M ||
    t[5] !== c?.open ||
    t[6] !== ae ||
    t[7] !== y ||
    t[8] !== L ||
    t[9] !== z ||
    t[10] !== b ||
    t[11] !== w ||
    t[12] !== j ||
    t[13] !== B ||
    t[14] !== re ||
    t[15] !== _ ||
    t[16] !== S ||
    t[17] !== D ||
    t[18] !== C ||
    t[19] !== p ||
    t[20] !== A ||
    t[21] !== m
  ) {
    let e = (x && !L ? I?.pages.flatMap(st) : void 0)?.flatMap(at).filter((e) => {
        let { request: t, recipient: n } = e,
          r = Ae(t.request_id, t.created_at, n?.principal);
        return !M.has(r) && !j?.has(r);
      }),
      i = b === `loading` || (x && z),
      a = b === `error` || (x && L);
    ue = (c?.open ?? w) || S.get(`review_access_requests`) === `1`;
    let s;
    t[36] !== r || t[37] !== re || t[38] !== _ || t[39] !== p || t[40] !== m
      ? ((s = async (e, t) => {
          let { request: n, recipient: i } = e,
            a = Ae(n.request_id, n.created_at, i?.principal);
          N((e) => new Set(e).add(a));
          try {
            await ne(
              _,
              p,
              t === `approve`
                ? {
                    accountId: r,
                    userId: m,
                    requestId: n.request_id,
                    requestCreatedAt: n.created_at,
                    recipient: i?.principal,
                    decision: t,
                    role: re[a] ?? n.requested_role ?? `viewer`,
                  }
                : {
                    accountId: r,
                    userId: m,
                    requestId: n.request_id,
                    requestCreatedAt: n.created_at,
                    recipient: i?.principal,
                    decision: t,
                  },
            );
          } catch (e) {
            let t = e;
            if (t instanceof Error && t.message === `access_request_decision_pending`) return;
            (N((e) => {
              let t = new Set(e);
              return (t.delete(a), t);
            }),
              _.get(ee) === r &&
                _.get(oe) === m &&
                _.get(g).danger(
                  (0, Z.jsx)(o, {
                    id: `codex.pages.accessRequests.decisionError`,
                    defaultMessage: `Could not update this access request. Try again`,
                    description: `Error toast when granting or rejecting a Page or Space access request fails`,
                  }),
                  { errorAnalytics: { toastId: `codex.pages.accessRequests.decisionError` } },
                ));
          }
        }),
        (t[36] = r),
        (t[37] = re),
        (t[38] = _),
        (t[39] = p),
        (t[40] = m),
        (t[41] = s))
      : (s = t[41]);
    let l = s;
    ((ge =
      e != null && e.length > 0
        ? (0, Z.jsx)(n, {
            ref: (e) => (
              (A.current = e),
              () => {
                A.current === e && (A.current = null);
              }
            ),
            "aria-label": y.formatMessage(
              {
                id: `codex.pages.accessRequests.activity`,
                defaultMessage: `Access requests{count, plural, =0 {} one { ({count})} other { ({count})}}`,
                description: `Owner toolbar notification button with the number of loaded recipients awaiting access approval for the current Page or Space`,
              },
              { count: e.length },
            ),
            color: `accent`,
            radius: `full`,
            size: `compact`,
            uniform: !0,
            onClick: () => D(!0),
            children: y.formatNumber(e.length),
          })
        : null),
      (ce = me),
      t[42] === A.current
        ? (G = t[43])
        : ((G = (e) => {
            A.current?.isConnected && (e.preventDefault(), A.current.focus());
          }),
          (t[42] = A.current),
          (t[43] = G)),
      t[44] !== S || t[45] !== D || t[46] !== C
        ? ((K = () => {
            if ((D(!1), S.has(`review_access_requests`))) {
              let e = new URLSearchParams(S);
              (e.delete(`review_access_requests`),
                e.delete(`review_access_requests_scope`),
                C(e, { replace: !0 }));
            }
          }),
          (t[44] = S),
          (t[45] = D),
          (t[46] = C),
          (t[47] = K))
        : (K = t[47]),
      (W = we),
      t[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Y = (0, Z.jsx)(o, {
            id: `codex.pages.accessRequests.title`,
            defaultMessage: `Manage access requests`,
            description: `Title of the owner review dialog for pending access requests`,
          })),
          (t[48] = Y))
        : (Y = t[48]));
    let u = p.kind === `page` ? p.id : void 0;
    (t[49] !== u || t[50] !== p.kind
      ? ((X = (0, Z.jsx)(pe, { kind: p.kind, pageId: u })), (t[49] = u), (t[50] = p.kind), (t[51] = X))
      : (X = t[51]),
      (U = v),
      t[52] === i
        ? (q = t[53])
        : ((q = i
            ? (0, Z.jsx)(Xe, {
                role: `status`,
                children: (0, Z.jsx)(o, {
                  id: `codex.pages.accessRequests.loading`,
                  defaultMessage: `Loading requests…`,
                  description: `Loading pending access requests`,
                }),
              })
            : null),
          (t[52] = i),
          (t[53] = q)),
      t[54] !== a || t[55] !== b || t[56] !== B || t[57] !== _
        ? ((J = a
            ? (0, Z.jsxs)(Xe, {
                role: `alert`,
                tone: `danger`,
                children: [
                  (0, Z.jsx)(o, {
                    id: `codex.pages.accessRequests.error`,
                    defaultMessage: `Could not update access requests. Try again.`,
                    description: `Recoverable failure loading access requests`,
                  }),
                  (0, Z.jsx)(n, {
                    color: `secondary`,
                    size: `compact`,
                    onClick: () => {
                      b === `error` ? _.get(V).refetch() : B();
                    },
                    children: (0, Z.jsx)(o, {
                      id: `codex.pages.accessRequests.retry`,
                      defaultMessage: `Try again`,
                      description: `Reload access requests after failure`,
                    }),
                  }),
                ],
              })
            : null),
          (t[54] = a),
          (t[55] = b),
          (t[56] = B),
          (t[57] = _),
          (t[58] = J))
        : (J = t[58]),
      (he =
        e?.length === 0 && !ae && !a
          ? (0, Z.jsx)(Xe, {
              children: (0, Z.jsx)(o, {
                id: `codex.pages.accessRequests.empty`,
                defaultMessage: `No pending requests`,
                description: `The current Page or Space has no outstanding access requests`,
              }),
            })
          : null),
      (de = `flex flex-col gap-1`),
      (fe = e?.map((e) => {
        let { request: t, recipient: n } = e,
          r = Ae(t.request_id, t.created_at, n?.principal),
          i = n?.name ?? n?.email,
          a =
            n?.principal.principal_type === `user` && i != null
              ? { accountUserId: n.principal.principal_id, name: i }
              : null,
          s = n == null ? t.requester_email : n.email,
          c;
        return (
          (c =
            n == null
              ? (t.requester_name ??
                t.requester_email ??
                (0, Z.jsx)(o, {
                  id: `codex.pages.accessRequests.unknownRequester`,
                  defaultMessage: `Someone`,
                  description: `Fallback name for an access requester whose name and email are unavailable`,
                }))
              : a == null
                ? (0, Z.jsx)(o, {
                    id: `codex.pages.accessRequests.recipientFallback`,
                    defaultMessage: `{type, select, group {Group} other {Collaborator}}`,
                    description: `Fallback identity for an access-request beneficiary whose name and email are unavailable; type distinguishes a group from an individual collaborator`,
                    values: { type: n.principal.principal_type },
                  })
                : a.name),
          (0, Z.jsx)(
            te,
            {
              avatar:
                a == null
                  ? void 0
                  : (0, Z.jsx)(Me, { accountUserId: a.accountUserId, name: a.name, size: `group` }),
              renderIdentity:
                a == null
                  ? void 0
                  : (e) =>
                      (0, Z.jsx)(Pe, {
                        accountUserId: a.accountUserId,
                        label: a.name,
                        labelEmail: s,
                        children: e,
                      }),
              avatarLabel: n == null ? (t.requester_name ?? void 0) : (i ?? void 0),
              label: c,
              secondaryLabel:
                s == null ? void 0 : (0, Z.jsx)(`span`, { className: `select-text`, children: s }),
              stackActionsOnNarrow: !0,
              trailingContent: (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, Z.jsx)(Fe, {
                    color: `primary`,
                    size: `xl`,
                    variant: `inline`,
                    options:
                      n?.principal.principal_type === `group`
                        ? [{ value: `viewer` }, { value: `editor` }]
                        : [{ value: `viewer` }, { value: `commenter` }, { value: `editor` }],
                    value: re[r] ?? t.requested_role ?? `viewer`,
                    renderLabel: it,
                    onChange: (e) => ie({ ...re, [r]: e }),
                  }),
                  (0, Z.jsx)(E, {
                    "aria-label":
                      n == null
                        ? void 0
                        : y.formatMessage(
                            {
                              id: `codex.pages.accessRequests.rejectRecipient`,
                              defaultMessage: `{known, select, true {Deny access for {name}} other {Deny access request}}`,
                              description: `Accessible label for rejecting an access request for a beneficiary, identified by name or email when available`,
                            },
                            { known: i != null, name: i },
                          ),
                    color: `primary`,
                    size: `xl`,
                    variant: `outline`,
                    onClick: () => void l(e, `reject`),
                    children: (0, Z.jsx)(o, {
                      id: `codex.pages.accessRequests.reject`,
                      defaultMessage: `Deny`,
                      description: `Reject this person's request without granting access`,
                    }),
                  }),
                  (0, Z.jsx)(E, {
                    "aria-label":
                      n == null
                        ? void 0
                        : y.formatMessage(
                            {
                              id: `codex.pages.accessRequests.grantRecipient`,
                              defaultMessage: `{known, select, true {Approve access for {name}} other {Approve access request}}`,
                              description: `Accessible label for granting the selected role to an access-request beneficiary, identified by name or email when available`,
                            },
                            { known: i != null, name: i },
                          ),
                    color: `primary`,
                    size: `xl`,
                    onClick: () => void l(e, `approve`),
                    children: (0, Z.jsx)(o, {
                      id: `codex.pages.accessRequests.grant`,
                      defaultMessage: `Approve`,
                      description: `Approve this request and grant the selected access role`,
                    }),
                  }),
                ],
              }),
            },
            r,
          )
        );
      })),
      (t[1] = r),
      (t[2] = x),
      (t[3] = I?.pages),
      (t[4] = M),
      (t[5] = c?.open),
      (t[6] = ae),
      (t[7] = y),
      (t[8] = L),
      (t[9] = z),
      (t[10] = b),
      (t[11] = w),
      (t[12] = j),
      (t[13] = B),
      (t[14] = re),
      (t[15] = _),
      (t[16] = S),
      (t[17] = D),
      (t[18] = C),
      (t[19] = p),
      (t[20] = A),
      (t[21] = m),
      (t[22] = U),
      (t[23] = W),
      (t[24] = ce),
      (t[25] = ue),
      (t[26] = G),
      (t[27] = K),
      (t[28] = de),
      (t[29] = fe),
      (t[30] = q),
      (t[31] = J),
      (t[32] = he),
      (t[33] = Y),
      (t[34] = X),
      (t[35] = ge));
  } else
    ((U = t[22]),
      (W = t[23]),
      (ce = t[24]),
      (ue = t[25]),
      (G = t[26]),
      (K = t[27]),
      (de = t[28]),
      (fe = t[29]),
      (q = t[30]),
      (J = t[31]),
      (he = t[32]),
      (Y = t[33]),
      (X = t[34]),
      (ge = t[35]));
  let _e;
  t[59] !== de || t[60] !== fe
    ? ((_e = (0, Z.jsx)(`div`, { className: de, children: fe })), (t[59] = de), (t[60] = fe), (t[61] = _e))
    : (_e = t[61]);
  let ve;
  t[62] !== x || t[63] !== se || t[64] !== ae || t[65] !== H
    ? ((ve =
        x && ae
          ? (0, Z.jsx)(n, {
              color: `secondary`,
              loading: H,
              onClick: () => void se(),
              children: (0, Z.jsx)(o, {
                id: `codex.pages.accessRequests.more`,
                defaultMessage: `Load more`,
                description: `Load another page of pending access requests`,
              }),
            })
          : null),
      (t[62] = x),
      (t[63] = se),
      (t[64] = ae),
      (t[65] = H),
      (t[66] = ve))
    : (ve = t[66]);
  let ye;
  t[67] !== U || t[68] !== _e || t[69] !== ve || t[70] !== q || t[71] !== J || t[72] !== he
    ? ((ye = (0, Z.jsxs)(U, { children: [q, J, he, _e, ve] })),
      (t[67] = U),
      (t[68] = _e),
      (t[69] = ve),
      (t[70] = q),
      (t[71] = J),
      (t[72] = he),
      (t[73] = ye))
    : (ye = t[73]);
  let be;
  t[74] !== W || t[75] !== ye || t[76] !== Y || t[77] !== X
    ? ((be = (0, Z.jsx)(W, { title: Y, subtitle: X, children: ye })),
      (t[74] = W),
      (t[75] = ye),
      (t[76] = Y),
      (t[77] = X),
      (t[78] = be))
    : (be = t[78]);
  let xe;
  t[79] !== ce || t[80] !== G || t[81] !== K || t[82] !== be
    ? ((xe = (0, Z.jsx)(ce, { onCloseAutoFocus: G, onClose: K, children: be })),
      (t[79] = ce),
      (t[80] = G),
      (t[81] = K),
      (t[82] = be),
      (t[83] = xe))
    : (xe = t[83]);
  let Se = xe,
    Ce;
  t[84] !== a || t[85] !== ge ? ((Ce = a?.(ge)), (t[84] = a), (t[85] = ge), (t[86] = Ce)) : (Ce = t[86]);
  let Te = h && a == null ? ge : null,
    Ee = h && ue ? Se : null,
    De;
  return (
    t[87] !== Ce || t[88] !== Te || t[89] !== Ee
      ? ((De = (0, Z.jsxs)(Z.Fragment, { children: [Ce, Te, Ee] })),
        (t[87] = Ce),
        (t[88] = Te),
        (t[89] = Ee),
        (t[90] = De))
      : (De = t[90]),
    De
  );
}
function it(e) {
  return (0, Z.jsx)(Le, { permission: e });
}
function at(e) {
  return e.recipients == null
    ? [{ request: e, recipient: void 0 }]
    : e.recipients.filter(ot).map((t) => ({ request: e, recipient: t }));
}
function ot(e) {
  return e.status === `pending`;
}
function st(e) {
  return e.requests;
}
function ct() {
  return new Set();
}
var lt, ut, Z;
function dt() {
  return (dt = e(() => {
    ((lt = C()),
      c(),
      u(),
      (ut = D()),
      _(),
      p(),
      be(),
      S(),
      Ye(),
      h(),
      y(),
      j(),
      je(),
      Ne(),
      X(),
      ke(),
      w(),
      N(),
      ce(),
      Re(),
      Ie(),
      Te(),
      (Z = T()));
  }))();
}
function ft(e) {
  let t = (0, ht.c)(13),
    { pageId: n } = e,
    r = s(i),
    a = f(ee),
    o;
  t[0] !== a || t[1] !== n
    ? ((o = { accountId: a, pageId: n }), (t[0] = a), (t[1] = n), (t[2] = o))
    : (o = t[2]);
  let c = o,
    l = O(ze, c),
    u = d(),
    p;
  t[3] === u
    ? (p = t[4])
    : ((p = u.formatMessage({
        id: `pages.presentation.followChatGPT`,
        defaultMessage: `Follow ChatGPT`,
        description: `Accessible label for the ChatGPT avatar that resumes following its edits in a presentation`,
      })),
      (t[3] = u),
      (t[4] = p));
  let m = p,
    h = l ? `border-blue` : void 0,
    g;
  t[5] !== c || t[6] !== r ? ((g = () => r.set(Ve, c, mt)), (t[5] = c), (t[6] = r), (t[7] = g)) : (g = t[7]);
  let _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, gt.jsx)(`span`, {
        "data-presentation-creation-avatar": !0,
        className: `flex size-6 items-center justify-center rounded-full bg-black text-white`,
        children: (0, gt.jsx)(J, { className: `size-4`, "aria-hidden": `true` }),
      })),
      (t[8] = _))
    : (_ = t[8]);
  let v;
  return (
    t[9] !== m || t[10] !== h || t[11] !== g
      ? ((v = (0, gt.jsx)(We, {
          ariaLabel: m,
          borderClassName: h,
          onClick: g,
          tooltip: m,
          renderTooltip: pt,
          children: _,
        })),
        (t[9] = m),
        (t[10] = h),
        (t[11] = g),
        (t[12] = v))
      : (v = t[12]),
    v
  );
}
function pt(e) {
  return (0, gt.jsx)(x, {
    tooltipContent: (0, gt.jsxs)(`div`, {
      className: `flex flex-col items-center gap-1`,
      children: [
        (0, gt.jsx)(o, {
          id: `pages.presentation.agentName`,
          defaultMessage: `ChatGPT`,
          description: `Name of the agent in a presentation's collaborator facepile; do not translate ChatGPT`,
        }),
        (0, gt.jsx)(`span`, {
          className: `opacity-60`,
          children: (0, gt.jsx)(o, {
            id: `pages.presentation.clickToFollow`,
            defaultMessage: `Click to follow`,
            description: `Tooltip instruction for following ChatGPT's edits by clicking its avatar in a presentation`,
          }),
        }),
      ],
    }),
    children: e,
  });
}
function mt(e) {
  return { ...e, enabled: !0 };
}
var ht, gt;
function _t() {
  return (_t = e(() => {
    ((ht = C()), u(), _(), Ue(), m(), W(), w(), ke(), He(), (gt = T()));
  }))();
}
function vt() {
  return { collaborators: [] };
}
function yt(e, t) {
  if (t.type === `reset`) return vt();
  let n = new Map(e.collaborators.map((e) => [e.accountUserId, e])),
    r = new Map(t.collaborators.map((e) => [e.accountUserId, e])),
    i = t.collaborators
      .filter((e) => {
        let t = n.get(e.accountUserId);
        return t == null || t.editing !== e.editing;
      })
      .sort((e, t) => e.displayName.localeCompare(t.displayName)),
    a = e.collaborators.flatMap((e) => {
      let t = r.get(e.accountUserId);
      return t?.editing === e.editing ? [t] : [];
    }),
    o = [...i, ...a],
    s = [...o.filter((e) => e.editing), ...o.filter((e) => !e.editing)];
  return (0, bt.default)(e.collaborators, s) ? e : { collaborators: s };
}
var bt;
function xt() {
  return (xt = e(() => {
    bt = t(a(), 1);
  }))();
}
function St(e) {
  let t = (0, Tt.c)(42),
    { canShare: n, onLocate: r, onOpen: i, pageId: a, session: o, showPlaceholder: s } = e,
    c = s !== void 0 && s,
    l = f(ee),
    u = Y(`821992342`),
    p;
  t[0] !== l || t[1] !== a
    ? ((p = { accountId: l, pageId: a }), (t[0] = l), (t[1] = a), (t[2] = p))
    : (p = t[2]);
  let m = O(u ? Be : !1, p),
    h;
  t[3] === o ? (h = t[4]) : ((h = () => o?.getSnapshot().collaborators ?? null), (t[3] = o), (t[4] = h));
  let g = h,
    _;
  t[5] === o ? (_ = t[6]) : ((_ = () => o?.getSnapshot().commentActor ?? null), (t[5] = o), (t[6] = _));
  let v = _,
    y;
  t[7] === o
    ? (y = t[8])
    : ((y = () => o?.getServerSnapshot().collaborators ?? null), (t[7] = o), (t[8] = y));
  let b = (0, Et.useSyncExternalStore)(o == null ? wt : o.subscribe, g, y),
    x;
  t[9] !== b || t[10] !== o
    ? ((x = () => ({
        session: o,
        source: b,
        order: b == null ? vt() : yt(vt(), { type: `snapshot`, collaborators: b }),
      })),
      (t[9] = b),
      (t[10] = o),
      (t[11] = x))
    : (x = t[11]);
  let [S, C] = (0, Et.useState)(x);
  (S.session !== o || S.source !== b) &&
    C({
      session: o,
      source: b,
      order:
        b == null
          ? vt()
          : yt(S.session === o ? S.order : vt(), {
              type: S.session === o ? `presence` : `snapshot`,
              collaborators: b,
            }),
    });
  let w;
  t[12] === o
    ? (w = t[13])
    : ((w = () => o?.getServerSnapshot().commentActor ?? null), (t[12] = o), (t[13] = w));
  let T = (0, Et.useSyncExternalStore)(o == null ? wt : o.subscribe, v, w),
    E = f(_e) ?? T?.accountUserId,
    D = d(),
    k;
  t[14] === a ? (k = t[15]) : ((k = { type: `page`, id: a }), (t[14] = a), (t[15] = k));
  let A = n && o != null,
    j;
  t[16] === A ? (j = t[17]) : ((j = { enabled: A }), (t[16] = A), (t[17] = j));
  let { data: M } = O(q, k, j),
    N = n ? M : void 0,
    te;
  if (
    t[18] !== m ||
    t[19] !== S.order.collaborators ||
    t[20] !== E ||
    t[21] !== T ||
    t[22] !== D ||
    t[23] !== r ||
    t[24] !== i ||
    t[25] !== a ||
    t[26] !== N ||
    t[27] !== c
  ) {
    let e;
    t[29] === E
      ? (e = t[30])
      : ((e = (e) => [
          e.accountUserId.split(`__`)[0],
          { ...e, active: !0, isLocal: e.accountUserId.split(`__`)[0] === E?.split(`__`)[0] },
        ]),
        (t[29] = E),
        (t[30] = e));
    let n = new Map(S.order.collaborators.map(e));
    if (
      (T != null &&
        T.accountUserId.split(`__`)[0] === E?.split(`__`)[0] &&
        n.set(T.accountUserId.split(`__`)[0], { ...T, active: !1, editing: !1, isLocal: !0 }),
      N != null)
    ) {
      let e = N.owner.principal_id,
        r = e.split(`__`)[0],
        i;
      t[31] === E ? (i = t[32]) : ((i = E?.split(`__`)[0]), (t[31] = E), (t[32] = i));
      let a;
      t[33] === e ? (a = t[34]) : ((a = e.split(`__`)), (t[33] = e), (t[34] = a));
      let o = i === a[0],
        s = (o ? T?.displayName : void 0) ?? N.owner_display_name;
      s != null &&
        !n.has(r) &&
        n.set(r, { accountUserId: e, active: !1, displayName: s, editing: !1, isLocal: o });
      for (let e of N.shares) {
        let t = e.recipient;
        e.status !== `active` ||
          t.recipient_type !== `principal` ||
          t.principal_type !== `user` ||
          n.has(t.principal_id.split(`__`)[0]) ||
          n.set(t.principal_id.split(`__`)[0], {
            accountUserId: t.principal_id,
            active: !1,
            displayName: e.recipient_display_name ?? t.principal_id,
            editing: !1,
            isLocal: E?.split(`__`)[0] === t.principal_id.split(`__`)[0],
          });
      }
    }
    let o = [...n.values()].sort(Ct),
      s;
    t[35] !== m || t[36] !== a
      ? ((s = m
          ? [{ id: `presentation-creation-agent`, name: `ChatGPT`, avatar: (0, Dt.jsx)(ft, { pageId: a }) }]
          : []),
        (t[35] = m),
        (t[36] = a),
        (t[37] = s))
      : (s = t[37]);
    let l;
    (t[38] !== D || t[39] !== r || t[40] !== i
      ? ((l = (e) => {
          let t;
          t = e.active
            ? D.formatMessage(
                {
                  id: `codex.space.page.collaborator.tooltip`,
                  defaultMessage: `{name} is {editing, select, true {editing} other {viewing}}`,
                  description: `Tooltip over a collaborator avatar in a shared Page header; name is the collaborator's display name and editing indicates whether their cursor is active`,
                },
                { editing: String(e.editing), name: e.displayName },
              )
            : e.isLocal
              ? D.formatMessage(
                  {
                    id: `codex.space.page.collaborator.localAccessTooltip`,
                    defaultMessage: `{name} (you)`,
                    description: `Tooltip over the signed-in person's avatar in a shared Page header when they are not active in another session; name is their display name`,
                  },
                  { name: e.displayName },
                )
              : D.formatMessage(
                  {
                    id: `codex.space.page.collaborator.accessTooltip`,
                    defaultMessage: `{name} has access`,
                    description: `Tooltip over the neutral avatar of a person who can access a shared Page but is not currently active in its document`,
                  },
                  { name: e.displayName },
                );
          let n = e.editing && r != null,
            a = n || i != null;
          return {
            id: e.accountUserId,
            name: e.displayName,
            label: (0, Dt.jsx)(Pe, {
              accountUserId: e.accountUserId,
              label: e.displayName,
              children: e.displayName,
            }),
            avatar: (0, Dt.jsx)(We, {
              ariaLabel: n
                ? D.formatMessage(
                    {
                      id: `codex.space.page.collaborator.locateLabel`,
                      defaultMessage: `Go to {name}’s cursor`,
                      description: `Accessible label for a collaborator avatar button that scrolls to that person's cursor in a shared Page; name is the collaborator's display name`,
                    },
                    { name: e.displayName },
                  )
                : t,
              borderClassName: e.editing ? Qe(e.accountUserId).caret : void 0,
              onClick: a
                ? () => {
                    (!n || !r(e.accountUserId)) && i?.();
                  }
                : void 0,
              renderTooltip: (n) =>
                (0, Dt.jsx)(Pe, {
                  accountUserId: e.accountUserId,
                  fallbackTooltip: t,
                  label: e.displayName,
                  triggerIsFocusable: a,
                  children: n,
                }),
              tooltip: t,
              children: (0, Dt.jsx)(Me, {
                accountUserId: e.accountUserId,
                loadingFallback: (0, Dt.jsx)(qe, {}),
                muted: !e.active && !e.isLocal,
                name: e.displayName,
              }),
            }),
          };
        }),
        (t[38] = D),
        (t[39] = r),
        (t[40] = i),
        (t[41] = l))
      : (l = t[41]),
      (te = (0, Dt.jsx)(Je, { pageId: a, collapsible: !m, showPlaceholder: c, people: [...s, ...o.map(l)] })),
      (t[18] = m),
      (t[19] = S.order.collaborators),
      (t[20] = E),
      (t[21] = T),
      (t[22] = D),
      (t[23] = r),
      (t[24] = i),
      (t[25] = a),
      (t[26] = N),
      (t[27] = c),
      (t[28] = te));
  } else te = t[28];
  return te;
}
function Ct(e, t) {
  return Number(t.isLocal) - Number(e.isLocal);
}
function wt() {
  return () => {};
}
var Tt, Et, Dt;
function Ot() {
  return (Ot = e(() => {
    ((Tt = C()),
      u(),
      (Et = D()),
      _(),
      be(),
      Ue(),
      Ge(),
      he(),
      _t(),
      He(),
      Ze(),
      je(),
      Ke(),
      Ne(),
      xt(),
      ke(),
      K(),
      (Dt = T()));
  }))();
}
function kt(e) {
  let t = (0, Nt.c)(53),
    {
      canShare: n,
      children: r,
      dialog: a,
      renderDialog: o,
      onLocateCollaborator: c,
      pageId: l,
      session: u,
      presence: p,
      comments: m,
      showShareAction: h,
    } = e,
    g = o === void 0 || o,
    _ = p === void 0 ? u : p,
    v = s(i),
    y = d(),
    b = O(De, l),
    S = f(Oe),
    C = f(ee),
    { data: w, isError: T } = ie(),
    E;
  t[0] !== C || t[1] !== w?.accounts
    ? ((E = w?.accounts?.find((e) => e.id === C)), (t[0] = C), (t[1] = w?.accounts), (t[2] = E))
    : (E = t[2]);
  let D = E,
    k = O(A, l),
    j = O(L, l),
    M;
  t[3] !== j || t[4] !== D?.structure || t[5] !== T || t[6] !== k || t[7] !== b || t[8] !== S
    ? ((M =
        S &&
        !T &&
        D?.structure === `workspace` &&
        Ce(b) &&
        j?.can_read === !0 &&
        j.can_share === !1 &&
        k !== `request_changes`),
      (t[3] = j),
      (t[4] = D?.structure),
      (t[5] = T),
      (t[6] = k),
      (t[7] = b),
      (t[8] = S),
      (t[9] = M))
    : (M = t[9]);
  let N = M,
    [te, ne] = (0, Pt.useState)(!1),
    P = a?.open ?? te,
    F = a?.onOpenChange ?? ne,
    I;
  t[10] !== N || t[11] !== n || t[12] !== F || t[13] !== h
    ? ((I =
        (n || N) && h
          ? () => {
              F(!0);
            }
          : void 0),
      (t[10] = N),
      (t[11] = n),
      (t[12] = F),
      (t[13] = h),
      (t[14] = I))
    : (I = t[14]);
  let R = I,
    z;
  if (
    t[15] !== n ||
    t[16] !== r ||
    t[17] !== a?.triggerRef ||
    t[18] !== y ||
    t[19] !== b ||
    t[20] !== c ||
    t[21] !== R ||
    t[22] !== l ||
    t[23] !== _ ||
    t[24] !== v
  ) {
    let e = R != null && ge(b),
      i;
    t[26] !== n || t[27] !== b || t[28] !== R || t[29] !== l || t[30] !== v
      ? ((i =
          R == null
            ? void 0
            : () => {
                (se.prefetch(),
                  n &&
                    Ce(b) &&
                    v.get(re) &&
                    v.query.fetch(q, { type: `page`, id: l, includeInheritedAccess: !0 }).catch(At));
              }),
        (t[26] = n),
        (t[27] = b),
        (t[28] = R),
        (t[29] = l),
        (t[30] = v),
        (t[31] = i))
      : (i = t[31]);
    let o = i,
      s;
    t[32] === y
      ? (s = t[33])
      : ((s = y.formatMessage({
          id: `codex.space.page.share`,
          defaultMessage: `Share`,
          description: `Button in the shared Page header that opens its people and groups access dialog for an owner or editor`,
        })),
        (t[32] = y),
        (t[33] = s));
    let u = s,
      d;
    t[34] !== a?.triggerRef || t[35] !== R || t[36] !== o || t[37] !== u
      ? ((d =
          R == null
            ? null
            : (0, Q.jsx)(x, {
                cloneCustomTrigger: !0,
                openWhen: `visibility-target-hidden`,
                tooltipContent: u,
                children: (0, Q.jsx)(Ee, { ref: a?.triggerRef, "aria-label": u, onFocus: o, onClick: R }),
              })),
        (t[34] = a?.triggerRef),
        (t[35] = R),
        (t[36] = o),
        (t[37] = u),
        (t[38] = d))
      : (d = t[38]);
    let f;
    (t[39] === d ? (f = t[40]) : ((f = (0, Q.jsx)(Q.Fragment, { children: d })), (t[39] = d), (t[40] = f)),
      (z = r({
        controls: f,
        onShare: R,
        people:
          (_ != null || e) &&
          (0, Q.jsx)(St, { canShare: n, onLocate: c, onOpen: R, pageId: l, session: _, showPlaceholder: e }),
        prewarmSharing: o,
      })),
      (t[15] = n),
      (t[16] = r),
      (t[17] = a?.triggerRef),
      (t[18] = y),
      (t[19] = b),
      (t[20] = c),
      (t[21] = R),
      (t[22] = l),
      (t[23] = _),
      (t[24] = v),
      (t[25] = z));
  } else z = t[25];
  let B;
  t[41] !== n ||
  t[42] !== m ||
  t[43] !== a?.onCloseAutoFocus ||
  t[44] !== R ||
  t[45] !== P ||
  t[46] !== l ||
  t[47] !== g ||
  t[48] !== F
    ? ((B =
        g && R != null && P
          ? (0, Q.jsx)(se, {
              pageId: l,
              comments: m,
              requestAccess: !n,
              onClose: () => F(!1),
              onCloseAutoFocus: a?.onCloseAutoFocus,
            })
          : null),
      (t[41] = n),
      (t[42] = m),
      (t[43] = a?.onCloseAutoFocus),
      (t[44] = R),
      (t[45] = P),
      (t[46] = l),
      (t[47] = g),
      (t[48] = F),
      (t[49] = B))
    : (B = t[49]);
  let V;
  return (
    t[50] !== z || t[51] !== B
      ? ((V = (0, Q.jsxs)(Q.Fragment, { children: [z, B] })), (t[50] = z), (t[51] = B), (t[52] = V))
      : (V = t[52]),
    V
  );
}
function At() {}
function jt(e) {
  let t = (0, Nt.c)(49),
    { canShare: n, children: r, dialog: a, renderDialog: o, pageId: c, space: l } = e,
    u = o === void 0 || o,
    p = s(i),
    m = d(),
    h = f(Oe),
    g = f(ee),
    { data: _, isError: v } = ie(),
    y;
  t[0] !== g || t[1] !== _?.accounts
    ? ((y = _?.accounts?.find((e) => e.id === g)), (t[0] = g), (t[1] = _?.accounts), (t[2] = y))
    : (y = t[2]);
  let b = y,
    S = O(De, l.root_page_id),
    [C, w] = (0, Pt.useState)(!1),
    T = a?.open ?? C,
    E = a?.onOpenChange ?? w,
    D = l.interaction_mode == null,
    k;
  t[3] === D ? (k = t[4]) : ((k = { enabled: D }), (t[3] = D), (t[4] = k));
  let { data: A } = O(ve, l.id, k),
    j;
  t[5] === l.id ? (j = t[6]) : ((j = { type: `space`, id: l.id }), (t[5] = l.id), (t[6] = j));
  let M;
  t[7] === n ? (M = t[8]) : ((M = { enabled: n }), (t[7] = n), (t[8] = M));
  let { data: N } = O(q, j, M),
    te = N != null && G(N),
    ne =
      h &&
      !v &&
      b?.structure === `workspace` &&
      S?.drive_space_id === l.id &&
      S.access.can_read === !0 &&
      S.access.can_share === !1,
    P;
  t[9] !== ne || t[10] !== n || t[11] !== A?.interaction_mode || t[12] !== p || t[13] !== E || t[14] !== l
    ? ((P =
        ae(l.interaction_mode, A?.interaction_mode) === `request_changes` || (!n && !ne)
          ? void 0
          : () => {
              $e(p, l, () => E(!0));
            }),
      (t[9] = ne),
      (t[10] = n),
      (t[11] = A?.interaction_mode),
      (t[12] = p),
      (t[13] = E),
      (t[14] = l),
      (t[15] = P))
    : (P = t[15]);
  let F = P,
    I;
  t[16] !== n || t[17] !== F || t[18] !== p || t[19] !== l.id
    ? ((I =
        F == null
          ? void 0
          : () => {
              (fe.prefetch(),
                n &&
                  p.get(re) &&
                  p.query.fetch(q, { type: `space`, id: l.id, includeInheritedAccess: !0 }).catch(Mt));
            }),
      (t[16] = n),
      (t[17] = F),
      (t[18] = p),
      (t[19] = l.id),
      (t[20] = I))
    : (I = t[20]);
  let L = I,
    R;
  t[21] !== m || t[22] !== l.name
    ? ((R = m.formatMessage(
        {
          id: `codex.space.share`,
          defaultMessage: `Share {spaceName}`,
          description: `Button in a Space root Page header that opens the Space sharing dialog`,
        },
        { spaceName: l.name },
      )),
      (t[21] = m),
      (t[22] = l.name),
      (t[23] = R))
    : (R = t[23]);
  let z = R,
    B;
  t[24] !== a?.triggerRef || t[25] !== F || t[26] !== L || t[27] !== z
    ? ((B =
        F != null &&
        (0, Q.jsx)(x, {
          cloneCustomTrigger: !0,
          openWhen: `visibility-target-hidden`,
          tooltipContent: z,
          children: (0, Q.jsx)(Ee, { ref: a?.triggerRef, "aria-label": z, onFocus: L, onClick: F }),
        })),
      (t[24] = a?.triggerRef),
      (t[25] = F),
      (t[26] = L),
      (t[27] = z),
      (t[28] = B))
    : (B = t[28]);
  let V;
  t[29] === B ? (V = t[30]) : ((V = (0, Q.jsx)(Q.Fragment, { children: B })), (t[29] = B), (t[30] = V));
  let oe = V,
    se = te ? F : void 0,
    H;
  t[31] !== r || t[32] !== oe || t[33] !== F || t[34] !== L || t[35] !== se
    ? ((H = r({ controls: oe, facepileOnOpen: se, onShare: F, people: null, prewarmSharing: L })),
      (t[31] = r),
      (t[32] = oe),
      (t[33] = F),
      (t[34] = L),
      (t[35] = se),
      (t[36] = H))
    : (H = t[36]);
  let U;
  t[37] !== n ||
  t[38] !== a?.onCloseAutoFocus ||
  t[39] !== F ||
  t[40] !== T ||
  t[41] !== c ||
  t[42] !== u ||
  t[43] !== E ||
  t[44] !== l
    ? ((U =
        u && F != null && T
          ? (0, Q.jsx)(fe, {
              pageId: c,
              requestAccess: !n,
              space: l,
              onClose: () => E(!1),
              onCloseAutoFocus: a?.onCloseAutoFocus,
            })
          : null),
      (t[37] = n),
      (t[38] = a?.onCloseAutoFocus),
      (t[39] = F),
      (t[40] = T),
      (t[41] = c),
      (t[42] = u),
      (t[43] = E),
      (t[44] = l),
      (t[45] = U))
    : (U = t[45]);
  let W;
  return (
    t[46] !== H || t[47] !== U
      ? ((W = (0, Q.jsxs)(Q.Fragment, { children: [H, U] })), (t[46] = H), (t[47] = U), (t[48] = W))
      : (W = t[48]),
    W
  );
}
function Mt() {}
var Nt, Pt, Q;
function Ft() {
  return (Ft = e(() => {
    ((Nt = C()),
      u(),
      (Pt = D()),
      _(),
      P(),
      m(),
      j(),
      Te(),
      he(),
      U(),
      H(),
      Ot(),
      xe(),
      et(),
      ke(),
      w(),
      B(),
      (Q = T()));
  }))();
}
function It(e) {
  let t = (0, Bt.c)(6);
  if (e.disabled) {
    let n;
    t[0] === e.children
      ? (n = t[1])
      : ((n = e.children({
          accessRequestReview: null,
          controls: null,
          onShare: void 0,
          people: null,
          prewarmSharing: void 0,
          requestEditAccess: null,
        })),
        (t[0] = e.children),
        (t[1] = n));
    let r;
    return (
      t[2] === n ? (r = t[3]) : ((r = (0, $.jsx)($.Fragment, { children: n })), (t[2] = n), (t[3] = r)),
      r
    );
  }
  let n;
  return (t[4] === e ? (n = t[5]) : ((n = (0, $.jsx)(Lt, { ...e })), (t[4] = e), (t[5] = n)), n);
}
function Lt(e) {
  let t = (0, Bt.c)(35),
    {
      canShare: n,
      children: r,
      dialog: i,
      accessRequestDialog: a,
      editAccessDialog: o,
      renderDialog: s,
      isOwner: c,
      onLocateCollaborator: l,
      pageId: u,
      session: d,
      presence: p,
      comments: m,
    } = e,
    h = p === void 0 ? d : p,
    { data: g, isError: _ } = f(ye),
    { space: v, isDriveBacked: y } = O(I, u),
    b = O(De, u),
    x;
  t[0] !== a ||
  t[1] !== y ||
  t[2] !== c ||
  t[3] !== b?.drive_scope ||
  t[4] !== b?.parent ||
  t[5] !== u ||
  t[6] !== s ||
  t[7] !== v
    ? ((x = (e) => {
        let t = null,
          n = { dialog: a, renderDialog: s, children: a == null ? void 0 : e };
        return (
          v?.root_page_id === u
            ? (t = (0, $.jsx)(zt, { ...n, spaceId: v.id }))
            : c &&
              y === !0 &&
              (b?.drive_scope === `personal` || b?.parent != null || v != null) &&
              (t = (0, $.jsx)(tt, { ...n, target: { kind: `page`, id: u } })),
          a == null || t == null ? e(t) : t
        );
      }),
      (t[0] = a),
      (t[1] = y),
      (t[2] = c),
      (t[3] = b?.drive_scope),
      (t[4] = b?.parent),
      (t[5] = u),
      (t[6] = s),
      (t[7] = v),
      (t[8] = x))
    : (x = t[8]);
  let S = x,
    C;
  t[9] !== n ||
  t[10] !== r ||
  t[11] !== m ||
  t[12] !== i ||
  t[13] !== y ||
  t[14] !== _ ||
  t[15] !== b ||
  t[16] !== l ||
  t[17] !== u ||
  t[18] !== h ||
  t[19] !== S ||
  t[20] !== s ||
  t[21] !== d ||
  t[22] !== v ||
  t[23] !== g
    ? ((C = (e) =>
        v?.root_page_id === u
          ? (0, $.jsx)(jt, {
              canShare: n,
              dialog: i,
              renderDialog: s,
              pageId: u,
              space: v,
              children: (t) => {
                let { controls: n, facepileOnOpen: i, onShare: a, prewarmSharing: o } = t,
                  s = a != null && ge(b);
                return S((t) =>
                  r({
                    accessRequestReview: t,
                    controls: (0, $.jsxs)($.Fragment, { children: [n, t] }),
                    onShare: a,
                    requestEditAccess: e,
                    people:
                      (h != null || s) &&
                      (0, $.jsx)(St, {
                        canShare: !1,
                        onLocate: l,
                        onOpen: i,
                        pageId: u,
                        session: h,
                        showPlaceholder: s,
                      }),
                    prewarmSharing: o,
                  }),
                );
              },
            })
          : (0, $.jsx)(kt, {
              canShare: n && y != null,
              dialog: i,
              renderDialog: s,
              onLocateCollaborator: l,
              pageId: u,
              presence: h,
              comments: m,
              session: d,
              showShareAction: y === !0 || (y === !1 && (g != null || _)),
              children: (t) =>
                S((n) =>
                  r({
                    ...t,
                    requestEditAccess: e,
                    accessRequestReview: n,
                    controls: (0, $.jsxs)($.Fragment, { children: [t.controls, n] }),
                  }),
                ),
            })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = m),
      (t[12] = i),
      (t[13] = y),
      (t[14] = _),
      (t[15] = b),
      (t[16] = l),
      (t[17] = u),
      (t[18] = h),
      (t[19] = S),
      (t[20] = s),
      (t[21] = d),
      (t[22] = v),
      (t[23] = g),
      (t[24] = C))
    : (C = t[24]);
  let w = C,
    T = y === !0,
    E;
  t[25] !== u || t[26] !== v
    ? ((E = v?.root_page_id === u ? { kind: `space`, id: v.id } : { kind: `page`, id: u }),
      (t[25] = u),
      (t[26] = v),
      (t[27] = E))
    : (E = t[27]);
  let D;
  return (
    t[28] !== o || t[29] !== u || t[30] !== s || t[31] !== w || t[32] !== T || t[33] !== E
      ? ((D = (0, $.jsx)(
          Rt,
          { dialog: o, isDriveBacked: T, pageId: u, renderDialog: s, target: E, children: w },
          u,
        )),
        (t[28] = o),
        (t[29] = u),
        (t[30] = s),
        (t[31] = w),
        (t[32] = T),
        (t[33] = E),
        (t[34] = D))
      : (D = t[34]),
    D
  );
}
function Rt(e) {
  let t = (0, Bt.c)(23),
    { children: n, dialog: r, isDriveBacked: i, pageId: a, renderDialog: s, target: c } = e,
    l = s === void 0 || s,
    u = O(De, a),
    d = O(de, a),
    p = f(Oe),
    m = f(ee),
    { data: h, isError: g } = ie(),
    _ = h?.accounts?.find((e) => e.id === m),
    [v, y] = (0, Vt.useState)(!1),
    x = r?.open ?? v,
    S = r?.onOpenChange ?? y;
  if (
    !i ||
    !p ||
    g ||
    !z(_) ||
    u?.access.can_read !== !0 ||
    u.access.can_write !== !1 ||
    u.access.can_share !== !1 ||
    d.loading ||
    d.mode === `request_changes`
  ) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = n(null)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e ? (r = t[3]) : ((r = (0, $.jsx)($.Fragment, { children: e })), (t[2] = e), (t[3] = r)),
      r
    );
  }
  let C = r?.triggerRef,
    w;
  t[4] === S ? (w = t[5]) : ((w = () => S(!0)), (t[4] = S), (t[5] = w));
  let T;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(o, {
        id: `codex.pages.requestEditAccess.button`,
        defaultMessage: `Request edit access`,
        description: `Button for a Page viewer or commenter to ask the owner for a higher role`,
      })),
      (t[6] = T))
    : (T = t[6]);
  let E;
  t[7] !== C || t[8] !== w
    ? ((E = (0, $.jsx)(b, { ref: C, onClick: w, children: T })), (t[7] = C), (t[8] = w), (t[9] = E))
    : (E = t[9]);
  let D;
  t[10] !== n || t[11] !== E ? ((D = n(E)), (t[10] = n), (t[11] = E), (t[12] = D)) : (D = t[12]);
  let A;
  t[13] !== r?.onCloseAutoFocus || t[14] !== x || t[15] !== a || t[16] !== l || t[17] !== S || t[18] !== c
    ? ((A =
        l && x
          ? (0, $.jsx)(k, {
              target: c,
              pageId: a,
              onClose: () => S(!1),
              onCloseAutoFocus: r?.onCloseAutoFocus,
            })
          : null),
      (t[13] = r?.onCloseAutoFocus),
      (t[14] = x),
      (t[15] = a),
      (t[16] = l),
      (t[17] = S),
      (t[18] = c),
      (t[19] = A))
    : (A = t[19]);
  let j;
  return (
    t[20] !== D || t[21] !== A
      ? ((j = (0, $.jsxs)($.Fragment, { children: [D, A] })), (t[20] = D), (t[21] = A), (t[22] = j))
      : (j = t[22]),
    j
  );
}
function zt(e) {
  let t = (0, Bt.c)(6),
    { children: n, dialog: r, renderDialog: i, spaceId: a } = e,
    o = O(ue, a),
    s;
  return (
    t[0] !== n || t[1] !== r || t[2] !== o?.isOwner || t[3] !== i || t[4] !== a
      ? ((s =
          o?.isOwner === !0
            ? (0, $.jsx)(tt, { target: { kind: `space`, id: a }, dialog: r, renderDialog: i, children: n })
            : (0, $.jsx)($.Fragment, { children: n?.(null) })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = o?.isOwner),
        (t[3] = i),
        (t[4] = a),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
var Bt, Vt, $;
function Ht() {
  return (Ht = e(() => {
    ((Bt = C()),
      u(),
      (Vt = D()),
      _(),
      P(),
      dt(),
      Te(),
      Se(),
      U(),
      H(),
      Ot(),
      Ft(),
      xe(),
      ke(),
      r(),
      ($ = T()));
  }))();
}
export { Ft as a, jt as i, It as n, Ht as r, zt as t };
//# sourceMappingURL=sharing-1780db7b1f52.js.map
