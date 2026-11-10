import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  FBt as i,
  HO as a,
  LNt as o,
  NSt as s,
  PBt as c,
  Qst as l,
  TE as u,
  Vrt as d,
  XOt as f,
  XS as p,
  XSt as m,
  Y3 as h,
  Z3 as g,
  ZSt as _,
  iCt as v,
  iFt as y,
  nB as b,
  nCt as x,
  okt as S,
  pkt as C,
  qrt as w,
  rB as T,
  tkt as E,
  zO as D,
  zjt as O,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $H as k,
  AH as A,
  Ac as j,
  Alt as M,
  BRr as N,
  Cjr as ee,
  Dc as te,
  Ec as ne,
  IU as P,
  Jlr as F,
  LH as re,
  LU as ie,
  MH as I,
  NH as L,
  OU as R,
  Oc as z,
  Odn as B,
  PH as ae,
  SW as V,
  TU as oe,
  Tc as se,
  Tcn as H,
  Vdn as ce,
  Ylr as U,
  ZH as le,
  Zdn as W,
  Zht as ue,
  _St as de,
  aU as fe,
  dW as G,
  egt as pe,
  fW as K,
  gur as me,
  hdn as q,
  ifn as J,
  jc as he,
  kU as Y,
  kc as X,
  klt as ge,
  mW as _e,
  ngt as ve,
  oU as ye,
  pW as be,
  rgt as xe,
  uU as Se,
  uW as Ce,
  vLr as we,
  vSt as Te,
  vdn as Ee,
  wLr as De,
  wW as Oe,
  wc as ke,
  wcn as Ae,
  xjr as je,
  zH as Me,
} from "./app-initial-ad16eaadf81f.js";
import { n as Ne, t as Pe } from "./avatar-b3af498c99de.js";
import { i as Fe, n as Ie } from "./profile-card-596b3632a9d9.js";
import { t as Le } from "./modal-permission-dropdown-6dcd00cb5144.js";
import { n as Re, t as ze } from "./role-label-f76597fae88b.js";
import { t as Be } from "./permission-dropdown-5c542829d6d7.js";
import { a as Ve, n as He, o as Ue, t as We } from "./progress-3dff812c5a6d.js";
import { n as Ge, t as Ke } from "./collaborator-avatar-10a2fed246c1.js";
import { i as qe, n as Je, r as Ye, t as Xe } from "./facepile-acf5586b71ad.js";
import { n as Ze, t as Qe } from "./detail-section-state-45be9ee036ee.js";
import { n as $e, t as et } from "./page-collaborator-colors-258e2583d6b4.js";
import { n as tt, t as nt } from "./space-sharing-e039b79b09ff.js";
function rt(e) {
  let t = (0, dt.c)(12),
    { children: n, dialog: r, renderDialog: i, target: a } = e,
    o = v(z),
    s = v(xe),
    c = v(me),
    l = v(N);
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
          it,
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
function it(e) {
  let t = (0, dt.c)(10),
    n;
  t[0] !== e.accountId || t[1] !== e.userId
    ? ((n = { accountId: e.accountId, userId: e.userId }),
      (t[0] = e.accountId),
      (t[1] = e.userId),
      (t[2] = n))
    : (n = t[2]);
  let [r, i] = (0, ft.useState)(n),
    a = v(xe);
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
      ? ((s = (0, Z.jsx)(at, { ...e }, o)), (t[7] = e), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function at(e) {
  let t = (0, dt.c)(91),
    { accountId: r, children: i, dialog: a, renderDialog: o, target: s, userId: c } = e,
    u = o === void 0 || o,
    d = n(l),
    f = S(),
    p = v(xe),
    g = p === `available`,
    [_, y] = m(),
    [b, C] = (0, ft.useState)(!1),
    T = a?.onOpenChange ?? C,
    k = (0, ft.useRef)(null),
    A = a?.triggerRef ?? k,
    j = x(se, s),
    [M, ee] = (0, ft.useState)(ut),
    ne;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((ne = {}), (t[0] = ne)) : (ne = t[0]);
  let [P, F] = (0, ft.useState)(ne),
    {
      data: ie,
      isError: I,
      isPending: L,
      refetch: R,
      hasNextPage: z,
      fetchNextPage: B,
      isFetchingNextPage: ae,
    } = x(te, s),
    V,
    oe,
    H,
    ce,
    U,
    W,
    ue,
    de,
    G,
    K,
    q,
    J,
    Y,
    X;
  if (
    t[1] !== r ||
    t[2] !== g ||
    t[3] !== ie?.pages ||
    t[4] !== M ||
    t[5] !== a?.open ||
    t[6] !== z ||
    t[7] !== f ||
    t[8] !== I ||
    t[9] !== L ||
    t[10] !== p ||
    t[11] !== b ||
    t[12] !== j ||
    t[13] !== R ||
    t[14] !== P ||
    t[15] !== d ||
    t[16] !== _ ||
    t[17] !== T ||
    t[18] !== y ||
    t[19] !== s ||
    t[20] !== A ||
    t[21] !== c
  ) {
    let e = (g && !I ? ie?.pages.flatMap(lt) : void 0)?.flatMap(st).filter((e) => {
        let { request: t, recipient: n } = e,
          r = ke(t.request_id, t.created_at, n?.principal);
        return !M.has(r) && !j?.has(r);
      }),
      n = p === `loading` || (g && L),
      i = p === `error` || (g && I);
    ce = (a?.open ?? b) || _.get(`review_access_requests`) === `1`;
    let o;
    t[36] !== r || t[37] !== P || t[38] !== d || t[39] !== s || t[40] !== c
      ? ((o = async (e, t) => {
          let { request: n, recipient: i } = e,
            a = ke(n.request_id, n.created_at, i?.principal);
          ee((e) => new Set(e).add(a));
          try {
            await he(
              d,
              s,
              t === `approve`
                ? {
                    accountId: r,
                    userId: c,
                    requestId: n.request_id,
                    requestCreatedAt: n.created_at,
                    recipient: i?.principal,
                    decision: t,
                    role: P[a] ?? n.requested_role ?? `viewer`,
                  }
                : {
                    accountId: r,
                    userId: c,
                    requestId: n.request_id,
                    requestCreatedAt: n.created_at,
                    recipient: i?.principal,
                    decision: t,
                  },
            );
          } catch (e) {
            let t = e;
            if (t instanceof Error && t.message === `access_request_decision_pending`) return;
            (ee((e) => {
              let t = new Set(e);
              return (t.delete(a), t);
            }),
              d.get(me) === r &&
                d.get(N) === c &&
                d
                  .get(w)
                  .danger(
                    (0, Z.jsx)(E, {
                      id: `codex.pages.accessRequests.decisionError`,
                      defaultMessage: `Could not update this access request. Try again`,
                      description: `Error toast when granting or rejecting a Page or Space access request fails`,
                    }),
                    { errorAnalytics: { toastId: `codex.pages.accessRequests.decisionError` } },
                  ));
          }
        }),
        (t[36] = r),
        (t[37] = P),
        (t[38] = d),
        (t[39] = s),
        (t[40] = c),
        (t[41] = o))
      : (o = t[41]);
    let l = o;
    ((X =
      e != null && e.length > 0
        ? (0, Z.jsx)(h, {
            ref: (e) => (
              (A.current = e),
              () => {
                A.current === e && (A.current = null);
              }
            ),
            "aria-label": f.formatMessage(
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
            onClick: () => T(!0),
            children: f.formatNumber(e.length),
          })
        : null),
      (H = Se),
      t[42] === A.current
        ? (U = t[43])
        : ((U = (e) => {
            A.current?.isConnected && (e.preventDefault(), A.current.focus());
          }),
          (t[42] = A.current),
          (t[43] = U)),
      t[44] !== _ || t[45] !== T || t[46] !== y
        ? ((W = () => {
            if ((T(!1), _.has(`review_access_requests`))) {
              let e = new URLSearchParams(_);
              (e.delete(`review_access_requests`),
                e.delete(`review_access_requests_scope`),
                y(e, { replace: !0 }));
            }
          }),
          (t[44] = _),
          (t[45] = T),
          (t[46] = y),
          (t[47] = W))
        : (W = t[47]),
      (oe = le),
      t[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((J = (0, Z.jsx)(E, {
            id: `codex.pages.accessRequests.title`,
            defaultMessage: `Manage access requests`,
            description: `Title of the owner review dialog for pending access requests`,
          })),
          (t[48] = J))
        : (J = t[48]));
    let u = s.kind === `page` ? s.id : void 0;
    (t[49] !== u || t[50] !== s.kind
      ? ((Y = (0, Z.jsx)(re, { kind: s.kind, pageId: u })), (t[49] = u), (t[50] = s.kind), (t[51] = Y))
      : (Y = t[51]),
      (V = D),
      t[52] === n
        ? (G = t[53])
        : ((G = n
            ? (0, Z.jsx)(Qe, {
                role: `status`,
                children: (0, Z.jsx)(E, {
                  id: `codex.pages.accessRequests.loading`,
                  defaultMessage: `Loading requests…`,
                  description: `Loading pending access requests`,
                }),
              })
            : null),
          (t[52] = n),
          (t[53] = G)),
      t[54] !== i || t[55] !== p || t[56] !== R || t[57] !== d
        ? ((K = i
            ? (0, Z.jsxs)(Qe, {
                role: `alert`,
                tone: `danger`,
                children: [
                  (0, Z.jsx)(E, {
                    id: `codex.pages.accessRequests.error`,
                    defaultMessage: `Could not update access requests. Try again.`,
                    description: `Recoverable failure loading access requests`,
                  }),
                  (0, Z.jsx)(h, {
                    color: `secondary`,
                    size: `compact`,
                    onClick: () => {
                      p === `error` ? d.get(pe).refetch() : R();
                    },
                    children: (0, Z.jsx)(E, {
                      id: `codex.pages.accessRequests.retry`,
                      defaultMessage: `Try again`,
                      description: `Reload access requests after failure`,
                    }),
                  }),
                ],
              })
            : null),
          (t[54] = i),
          (t[55] = p),
          (t[56] = R),
          (t[57] = d),
          (t[58] = K))
        : (K = t[58]),
      (q =
        e?.length === 0 && !z && !i
          ? (0, Z.jsx)(Qe, {
              children: (0, Z.jsx)(E, {
                id: `codex.pages.accessRequests.empty`,
                defaultMessage: `No pending requests`,
                description: `The current Page or Space has no outstanding access requests`,
              }),
            })
          : null),
      (ue = `flex flex-col gap-1`),
      (de = e?.map((e) => {
        let { request: t, recipient: n } = e,
          r = ke(t.request_id, t.created_at, n?.principal),
          i = n?.name ?? n?.email,
          a =
            n?.principal.principal_type === `user` && i != null
              ? { accountUserId: n.principal.principal_id, name: i }
              : null,
          o = n == null ? t.requester_email : n.email,
          s;
        return (
          (s =
            n == null
              ? (t.requester_name ??
                t.requester_email ??
                (0, Z.jsx)(E, {
                  id: `codex.pages.accessRequests.unknownRequester`,
                  defaultMessage: `Someone`,
                  description: `Fallback name for an access requester whose name and email are unavailable`,
                }))
              : a == null
                ? (0, Z.jsx)(E, {
                    id: `codex.pages.accessRequests.recipientFallback`,
                    defaultMessage: `{type, select, group {Group} other {Collaborator}}`,
                    description: `Fallback identity for an access-request beneficiary whose name and email are unavailable; type distinguishes a group from an individual collaborator`,
                    values: { type: n.principal.principal_type },
                  })
                : a.name),
          (0, Z.jsx)(
            fe,
            {
              avatar:
                a == null
                  ? void 0
                  : (0, Z.jsx)(Pe, { accountUserId: a.accountUserId, name: a.name, size: `group` }),
              renderIdentity:
                a == null
                  ? void 0
                  : (e) =>
                      (0, Z.jsx)(Ie, {
                        accountUserId: a.accountUserId,
                        label: a.name,
                        labelEmail: o,
                        children: e,
                      }),
              avatarLabel: n == null ? (t.requester_name ?? void 0) : (i ?? void 0),
              label: s,
              secondaryLabel:
                o == null ? void 0 : (0, Z.jsx)(`span`, { className: `select-text`, children: o }),
              stackActionsOnNarrow: !0,
              trailingContent: (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, Z.jsx)(Le, {
                    color: `primary`,
                    size: `xl`,
                    variant: `inline`,
                    options:
                      n?.principal.principal_type === `group`
                        ? [{ value: `viewer` }, { value: `editor` }]
                        : [{ value: `viewer` }, { value: `commenter` }, { value: `editor` }],
                    value: P[r] ?? t.requested_role ?? `viewer`,
                    renderLabel: ot,
                    onChange: (e) => F({ ...P, [r]: e }),
                  }),
                  (0, Z.jsx)(O, {
                    "aria-label":
                      n == null
                        ? void 0
                        : f.formatMessage(
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
                    children: (0, Z.jsx)(E, {
                      id: `codex.pages.accessRequests.reject`,
                      defaultMessage: `Deny`,
                      description: `Reject this person's request without granting access`,
                    }),
                  }),
                  (0, Z.jsx)(O, {
                    "aria-label":
                      n == null
                        ? void 0
                        : f.formatMessage(
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
                    children: (0, Z.jsx)(E, {
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
      (t[2] = g),
      (t[3] = ie?.pages),
      (t[4] = M),
      (t[5] = a?.open),
      (t[6] = z),
      (t[7] = f),
      (t[8] = I),
      (t[9] = L),
      (t[10] = p),
      (t[11] = b),
      (t[12] = j),
      (t[13] = R),
      (t[14] = P),
      (t[15] = d),
      (t[16] = _),
      (t[17] = T),
      (t[18] = y),
      (t[19] = s),
      (t[20] = A),
      (t[21] = c),
      (t[22] = V),
      (t[23] = oe),
      (t[24] = H),
      (t[25] = ce),
      (t[26] = U),
      (t[27] = W),
      (t[28] = ue),
      (t[29] = de),
      (t[30] = G),
      (t[31] = K),
      (t[32] = q),
      (t[33] = J),
      (t[34] = Y),
      (t[35] = X));
  } else
    ((V = t[22]),
      (oe = t[23]),
      (H = t[24]),
      (ce = t[25]),
      (U = t[26]),
      (W = t[27]),
      (ue = t[28]),
      (de = t[29]),
      (G = t[30]),
      (K = t[31]),
      (q = t[32]),
      (J = t[33]),
      (Y = t[34]),
      (X = t[35]));
  let ge;
  t[59] !== ue || t[60] !== de
    ? ((ge = (0, Z.jsx)(`div`, { className: ue, children: de })), (t[59] = ue), (t[60] = de), (t[61] = ge))
    : (ge = t[61]);
  let _e;
  t[62] !== g || t[63] !== B || t[64] !== z || t[65] !== ae
    ? ((_e =
        g && z
          ? (0, Z.jsx)(h, {
              color: `secondary`,
              loading: ae,
              onClick: () => void B(),
              children: (0, Z.jsx)(E, {
                id: `codex.pages.accessRequests.more`,
                defaultMessage: `Load more`,
                description: `Load another page of pending access requests`,
              }),
            })
          : null),
      (t[62] = g),
      (t[63] = B),
      (t[64] = z),
      (t[65] = ae),
      (t[66] = _e))
    : (_e = t[66]);
  let ve;
  t[67] !== V || t[68] !== ge || t[69] !== _e || t[70] !== G || t[71] !== K || t[72] !== q
    ? ((ve = (0, Z.jsxs)(V, { children: [G, K, q, ge, _e] })),
      (t[67] = V),
      (t[68] = ge),
      (t[69] = _e),
      (t[70] = G),
      (t[71] = K),
      (t[72] = q),
      (t[73] = ve))
    : (ve = t[73]);
  let ye;
  t[74] !== oe || t[75] !== ve || t[76] !== J || t[77] !== Y
    ? ((ye = (0, Z.jsx)(oe, { title: J, subtitle: Y, children: ve })),
      (t[74] = oe),
      (t[75] = ve),
      (t[76] = J),
      (t[77] = Y),
      (t[78] = ye))
    : (ye = t[78]);
  let be;
  t[79] !== H || t[80] !== U || t[81] !== W || t[82] !== ye
    ? ((be = (0, Z.jsx)(H, { onCloseAutoFocus: U, onClose: W, children: ye })),
      (t[79] = H),
      (t[80] = U),
      (t[81] = W),
      (t[82] = ye),
      (t[83] = be))
    : (be = t[83]);
  let Ce = be,
    we;
  t[84] !== i || t[85] !== X ? ((we = i?.(X)), (t[84] = i), (t[85] = X), (t[86] = we)) : (we = t[86]);
  let Te = u && i == null ? X : null,
    Ee = u && ce ? Ce : null,
    De;
  return (
    t[87] !== we || t[88] !== Te || t[89] !== Ee
      ? ((De = (0, Z.jsxs)(Z.Fragment, { children: [we, Te, Ee] })),
        (t[87] = we),
        (t[88] = Te),
        (t[89] = Ee),
        (t[90] = De))
      : (De = t[90]),
    De
  );
}
function ot(e) {
  return (0, Z.jsx)(ze, { permission: e });
}
function st(e) {
  return e.recipients == null
    ? [{ request: e, recipient: void 0 }]
    : e.recipients.filter(ct).map((t) => ({ request: e, recipient: t }));
}
function ct(e) {
  return e.status === `pending`;
}
function lt(e) {
  return e.requests;
}
function ut() {
  return new Set();
}
var dt, ft, Z;
function pt() {
  return (pt = e(() => {
    ((dt = c()),
      C(),
      _(),
      (ft = i()),
      f(),
      s(),
      De(),
      g(),
      Ze(),
      a(),
      d(),
      ue(),
      Ne(),
      Fe(),
      Me(),
      q(),
      r(),
      ye(),
      k(),
      Be(),
      Re(),
      X(),
      (Z = o()));
  }))();
}
function mt(e) {
  let t = (0, _t.c)(13),
    { pageId: r } = e,
    i = n(l),
    a = v(me),
    o;
  t[0] !== a || t[1] !== r
    ? ((o = { accountId: a, pageId: r }), (t[0] = a), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c = x(Ve, s),
    u = S(),
    d;
  t[3] === u
    ? (d = t[4])
    : ((d = u.formatMessage({
        id: `pages.presentation.followChatGPT`,
        defaultMessage: `Follow ChatGPT`,
        description: `Accessible label for the ChatGPT avatar that resumes following its edits in a presentation`,
      })),
      (t[3] = u),
      (t[4] = d));
  let f = d,
    p = c ? `border-blue` : void 0,
    m;
  t[5] !== s || t[6] !== i ? ((m = () => i.set(Ue, s, gt)), (t[5] = s), (t[6] = i), (t[7] = m)) : (m = t[7]);
  let h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, vt.jsx)(`span`, {
        "data-presentation-creation-avatar": !0,
        className: `flex size-6 items-center justify-center rounded-full bg-black text-white`,
        children: (0, vt.jsx)(de, { className: `size-4`, "aria-hidden": `true` }),
      })),
      (t[8] = h))
    : (h = t[8]);
  let g;
  return (
    t[9] !== f || t[10] !== p || t[11] !== m
      ? ((g = (0, vt.jsx)(Ke, {
          ariaLabel: f,
          borderClassName: p,
          onClick: m,
          tooltip: f,
          renderTooltip: ht,
          children: h,
        })),
        (t[9] = f),
        (t[10] = p),
        (t[11] = m),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
function ht(e) {
  return (0, vt.jsx)(b, {
    tooltipContent: (0, vt.jsxs)(`div`, {
      className: `flex flex-col items-center gap-1`,
      children: [
        (0, vt.jsx)(E, {
          id: `pages.presentation.agentName`,
          defaultMessage: `ChatGPT`,
          description: `Name of the agent in a presentation's collaborator facepile; do not translate ChatGPT`,
        }),
        (0, vt.jsx)(`span`, {
          className: `opacity-60`,
          children: (0, vt.jsx)(E, {
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
function gt(e) {
  return { ...e, enabled: !0 };
}
var _t, vt;
function yt() {
  return (yt = e(() => {
    ((_t = c()), _(), f(), Ge(), T(), Te(), r(), q(), We(), (vt = o()));
  }))();
}
function bt() {
  return { collaborators: [] };
}
function xt(e, t) {
  if (t.type === `reset`) return bt();
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
  return (0, St.default)(e.collaborators, s) ? e : { collaborators: s };
}
var St;
function Ct() {
  return (Ct = e(() => {
    St = t(y(), 1);
  }))();
}
function wt(e) {
  let t = (0, Dt.c)(42),
    { canShare: n, onLocate: r, onOpen: i, pageId: a, session: o, showPlaceholder: s } = e,
    c = s !== void 0 && s,
    l = v(me),
    u = ee(`821992342`),
    d;
  t[0] !== l || t[1] !== a
    ? ((d = { accountId: l, pageId: a }), (t[0] = l), (t[1] = a), (t[2] = d))
    : (d = t[2]);
  let f = x(u ? He : !1, d),
    p;
  t[3] === o ? (p = t[4]) : ((p = () => o?.getSnapshot().collaborators ?? null), (t[3] = o), (t[4] = p));
  let m = p,
    h;
  t[5] === o ? (h = t[6]) : ((h = () => o?.getSnapshot().commentActor ?? null), (t[5] = o), (t[6] = h));
  let g = h,
    _;
  t[7] === o
    ? (_ = t[8])
    : ((_ = () => o?.getServerSnapshot().collaborators ?? null), (t[7] = o), (t[8] = _));
  let y = (0, Ot.useSyncExternalStore)(o == null ? Et : o.subscribe, m, _),
    b;
  t[9] !== y || t[10] !== o
    ? ((b = () => ({
        session: o,
        source: y,
        order: y == null ? bt() : xt(bt(), { type: `snapshot`, collaborators: y }),
      })),
      (t[9] = y),
      (t[10] = o),
      (t[11] = b))
    : (b = t[11]);
  let [C, w] = (0, Ot.useState)(b);
  (C.session !== o || C.source !== y) &&
    w({
      session: o,
      source: y,
      order:
        y == null
          ? bt()
          : xt(C.session === o ? C.order : bt(), {
              type: C.session === o ? `presence` : `snapshot`,
              collaborators: y,
            }),
    });
  let T;
  t[12] === o
    ? (T = t[13])
    : ((T = () => o?.getServerSnapshot().commentActor ?? null), (t[12] = o), (t[13] = T));
  let E = (0, Ot.useSyncExternalStore)(o == null ? Et : o.subscribe, g, T),
    D = v(we) ?? E?.accountUserId,
    O = S(),
    k;
  t[14] === a ? (k = t[15]) : ((k = { type: `page`, id: a }), (t[14] = a), (t[15] = k));
  let A = n && o != null,
    j;
  t[16] === A ? (j = t[17]) : ((j = { enabled: A }), (t[16] = A), (t[17] = j));
  let { data: M } = x(Y, k, j),
    N = n ? M : void 0,
    te;
  if (
    t[18] !== f ||
    t[19] !== C.order.collaborators ||
    t[20] !== D ||
    t[21] !== E ||
    t[22] !== O ||
    t[23] !== r ||
    t[24] !== i ||
    t[25] !== a ||
    t[26] !== N ||
    t[27] !== c
  ) {
    let e;
    t[29] === D
      ? (e = t[30])
      : ((e = (e) => [
          e.accountUserId.split(`__`)[0],
          { ...e, active: !0, isLocal: e.accountUserId.split(`__`)[0] === D?.split(`__`)[0] },
        ]),
        (t[29] = D),
        (t[30] = e));
    let n = new Map(C.order.collaborators.map(e));
    if (
      (E != null &&
        E.accountUserId.split(`__`)[0] === D?.split(`__`)[0] &&
        n.set(E.accountUserId.split(`__`)[0], { ...E, active: !1, editing: !1, isLocal: !0 }),
      N != null)
    ) {
      let e = N.owner.principal_id,
        r = e.split(`__`)[0],
        i;
      t[31] === D ? (i = t[32]) : ((i = D?.split(`__`)[0]), (t[31] = D), (t[32] = i));
      let a;
      t[33] === e ? (a = t[34]) : ((a = e.split(`__`)), (t[33] = e), (t[34] = a));
      let o = i === a[0],
        s = (o ? E?.displayName : void 0) ?? N.owner_display_name;
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
            isLocal: D?.split(`__`)[0] === t.principal_id.split(`__`)[0],
          });
      }
    }
    let o = [...n.values()].sort(Tt),
      s;
    t[35] !== f || t[36] !== a
      ? ((s = f
          ? [{ id: `presentation-creation-agent`, name: `ChatGPT`, avatar: (0, kt.jsx)(mt, { pageId: a }) }]
          : []),
        (t[35] = f),
        (t[36] = a),
        (t[37] = s))
      : (s = t[37]);
    let l;
    (t[38] !== O || t[39] !== r || t[40] !== i
      ? ((l = (e) => {
          let t;
          t = e.active
            ? O.formatMessage(
                {
                  id: `codex.space.page.collaborator.tooltip`,
                  defaultMessage: `{name} is {editing, select, true {editing} other {viewing}}`,
                  description: `Tooltip over a collaborator avatar in a shared Page header; name is the collaborator's display name and editing indicates whether their cursor is active`,
                },
                { editing: String(e.editing), name: e.displayName },
              )
            : e.isLocal
              ? O.formatMessage(
                  {
                    id: `codex.space.page.collaborator.localAccessTooltip`,
                    defaultMessage: `{name} (you)`,
                    description: `Tooltip over the signed-in person's avatar in a shared Page header when they are not active in another session; name is their display name`,
                  },
                  { name: e.displayName },
                )
              : O.formatMessage(
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
            label: (0, kt.jsx)(Ie, {
              accountUserId: e.accountUserId,
              label: e.displayName,
              children: e.displayName,
            }),
            avatar: (0, kt.jsx)(Ke, {
              ariaLabel: n
                ? O.formatMessage(
                    {
                      id: `codex.space.page.collaborator.locateLabel`,
                      defaultMessage: `Go to {name}’s cursor`,
                      description: `Accessible label for a collaborator avatar button that scrolls to that person's cursor in a shared Page; name is the collaborator's display name`,
                    },
                    { name: e.displayName },
                  )
                : t,
              borderClassName: e.editing ? et(e.accountUserId).caret : void 0,
              onClick: a
                ? () => {
                    (!n || !r(e.accountUserId)) && i?.();
                  }
                : void 0,
              renderTooltip: (n) =>
                (0, kt.jsx)(Ie, {
                  accountUserId: e.accountUserId,
                  fallbackTooltip: t,
                  label: e.displayName,
                  triggerIsFocusable: a,
                  children: n,
                }),
              tooltip: t,
              children: (0, kt.jsx)(Pe, {
                accountUserId: e.accountUserId,
                loadingFallback: (0, kt.jsx)(Ye, {}),
                muted: !e.active && !e.isLocal,
                name: e.displayName,
              }),
            }),
          };
        }),
        (t[38] = O),
        (t[39] = r),
        (t[40] = i),
        (t[41] = l))
      : (l = t[41]),
      (te = (0, kt.jsx)(Xe, { pageId: a, collapsible: !f, showPlaceholder: c, people: [...s, ...o.map(l)] })),
      (t[18] = f),
      (t[19] = C.order.collaborators),
      (t[20] = D),
      (t[21] = E),
      (t[22] = O),
      (t[23] = r),
      (t[24] = i),
      (t[25] = a),
      (t[26] = N),
      (t[27] = c),
      (t[28] = te));
  } else te = t[28];
  return te;
}
function Tt(e, t) {
  return Number(t.isLocal) - Number(e.isLocal);
}
function Et() {
  return () => {};
}
var Dt, Ot, kt;
function At() {
  return (At = e(() => {
    ((Dt = c()),
      _(),
      (Ot = i()),
      f(),
      De(),
      Ge(),
      qe(),
      R(),
      yt(),
      We(),
      $e(),
      Ne(),
      Je(),
      Fe(),
      Ct(),
      q(),
      je(),
      (kt = o()));
  }))();
}
function jt(e) {
  let t = (0, Ft.c)(53),
    {
      canShare: r,
      children: i,
      dialog: a,
      renderDialog: o,
      onLocateCollaborator: s,
      pageId: c,
      session: u,
      presence: d,
      comments: f,
      showShareAction: p,
    } = e,
    m = o === void 0 || o,
    h = d === void 0 ? u : d,
    g = n(l),
    _ = S(),
    y = x(Ee, c),
    C = v(ne),
    w = v(me),
    { data: T, isError: E } = H(),
    D;
  t[0] !== w || t[1] !== T?.accounts
    ? ((D = T?.accounts?.find((e) => e.id === w)), (t[0] = w), (t[1] = T?.accounts), (t[2] = D))
    : (D = t[2]);
  let O = D,
    k = x(be, c),
    j = x(K, c),
    M;
  t[3] !== j || t[4] !== O?.structure || t[5] !== E || t[6] !== k || t[7] !== y || t[8] !== C
    ? ((M =
        C &&
        !E &&
        O?.structure === `workspace` &&
        J(y) &&
        j?.can_read === !0 &&
        j.can_share === !1 &&
        k !== `request_changes`),
      (t[3] = j),
      (t[4] = O?.structure),
      (t[5] = E),
      (t[6] = k),
      (t[7] = y),
      (t[8] = C),
      (t[9] = M))
    : (M = t[9]);
  let N = M,
    [ee, te] = (0, It.useState)(!1),
    P = a?.open ?? ee,
    F = a?.onOpenChange ?? te,
    re;
  t[10] !== N || t[11] !== r || t[12] !== F || t[13] !== p
    ? ((re =
        (r || N) && p
          ? () => {
              F(!0);
            }
          : void 0),
      (t[10] = N),
      (t[11] = r),
      (t[12] = F),
      (t[13] = p),
      (t[14] = re))
    : (re = t[14]);
  let I = re,
    L;
  if (
    t[15] !== r ||
    t[16] !== i ||
    t[17] !== a?.triggerRef ||
    t[18] !== _ ||
    t[19] !== y ||
    t[20] !== s ||
    t[21] !== I ||
    t[22] !== c ||
    t[23] !== h ||
    t[24] !== g
  ) {
    let e = I != null && U(y),
      n;
    t[26] !== r || t[27] !== y || t[28] !== I || t[29] !== c || t[30] !== g
      ? ((n =
          I == null
            ? void 0
            : () => {
                if ((A.prefetch(), r && J(y) && g.get(ve))) {
                  g.query.fetch(Y, { type: `page`, id: c, includeInheritedAccess: !0 }).catch(Mt);
                  let e = g.query.getOptions(ie, { type: `page`, id: c });
                  e.enabled && g.queryClient.prefetchQuery(e);
                }
              }),
        (t[26] = r),
        (t[27] = y),
        (t[28] = I),
        (t[29] = c),
        (t[30] = g),
        (t[31] = n))
      : (n = t[31]);
    let o = n,
      l;
    t[32] === _
      ? (l = t[33])
      : ((l = _.formatMessage({
          id: `codex.space.page.share`,
          defaultMessage: `Share`,
          description: `Button in the shared Page header that opens its people and groups access dialog for an owner or editor`,
        })),
        (t[32] = _),
        (t[33] = l));
    let u = l,
      d;
    t[34] !== a?.triggerRef || t[35] !== I || t[36] !== o || t[37] !== u
      ? ((d =
          I == null
            ? null
            : (0, Q.jsx)(b, {
                cloneCustomTrigger: !0,
                openWhen: `visibility-target-hidden`,
                tooltipContent: u,
                children: (0, Q.jsx)(ge, { ref: a?.triggerRef, "aria-label": u, onFocus: o, onClick: I }),
              })),
        (t[34] = a?.triggerRef),
        (t[35] = I),
        (t[36] = o),
        (t[37] = u),
        (t[38] = d))
      : (d = t[38]);
    let f;
    (t[39] === d ? (f = t[40]) : ((f = (0, Q.jsx)(Q.Fragment, { children: d })), (t[39] = d), (t[40] = f)),
      (L = i({
        controls: f,
        onShare: I,
        people:
          (h != null || e) &&
          (0, Q.jsx)(wt, { canShare: r, onLocate: s, onOpen: I, pageId: c, session: h, showPlaceholder: e }),
        prewarmSharing: o,
      })),
      (t[15] = r),
      (t[16] = i),
      (t[17] = a?.triggerRef),
      (t[18] = _),
      (t[19] = y),
      (t[20] = s),
      (t[21] = I),
      (t[22] = c),
      (t[23] = h),
      (t[24] = g),
      (t[25] = L));
  } else L = t[25];
  let R;
  t[41] !== r ||
  t[42] !== f ||
  t[43] !== a?.onCloseAutoFocus ||
  t[44] !== I ||
  t[45] !== P ||
  t[46] !== c ||
  t[47] !== m ||
  t[48] !== F
    ? ((R =
        m && I != null && P
          ? (0, Q.jsx)(A, {
              pageId: c,
              comments: f,
              requestAccess: !r,
              onClose: () => F(!1),
              onCloseAutoFocus: a?.onCloseAutoFocus,
            })
          : null),
      (t[41] = r),
      (t[42] = f),
      (t[43] = a?.onCloseAutoFocus),
      (t[44] = I),
      (t[45] = P),
      (t[46] = c),
      (t[47] = m),
      (t[48] = F),
      (t[49] = R))
    : (R = t[49]);
  let z;
  return (
    t[50] !== L || t[51] !== R
      ? ((z = (0, Q.jsxs)(Q.Fragment, { children: [L, R] })), (t[50] = L), (t[51] = R), (t[52] = z))
      : (z = t[52]),
    z
  );
}
function Mt() {}
function Nt(e) {
  let t = (0, Ft.c)(49),
    { canShare: r, children: i, dialog: a, renderDialog: o, pageId: s, space: c } = e,
    u = o === void 0 || o,
    d = n(l),
    f = S(),
    p = v(ne),
    m = v(me),
    { data: h, isError: g } = H(),
    _;
  t[0] !== m || t[1] !== h?.accounts
    ? ((_ = h?.accounts?.find((e) => e.id === m)), (t[0] = m), (t[1] = h?.accounts), (t[2] = _))
    : (_ = t[2]);
  let y = _,
    C = x(Ee, c.root_page_id),
    [w, T] = (0, It.useState)(!1),
    E = a?.open ?? w,
    D = a?.onOpenChange ?? T,
    O = c.interaction_mode == null,
    k;
  t[3] === O ? (k = t[4]) : ((k = { enabled: O }), (t[3] = O), (t[4] = k));
  let { data: A } = x(ce, c.id, k),
    j;
  t[5] === c.id ? (j = t[6]) : ((j = { type: `space`, id: c.id }), (t[5] = c.id), (t[6] = j));
  let M;
  t[7] === r ? (M = t[8]) : ((M = { enabled: r }), (t[7] = r), (t[8] = M));
  let { data: N } = x(Y, j, M),
    ee = N != null && oe(N),
    te =
      p &&
      !g &&
      y?.structure === `workspace` &&
      C?.drive_space_id === c.id &&
      C.access.can_read === !0 &&
      C.access.can_share === !1,
    P;
  t[9] !== te || t[10] !== r || t[11] !== A?.interaction_mode || t[12] !== d || t[13] !== D || t[14] !== c
    ? ((P =
        Ce(c.interaction_mode, A?.interaction_mode) === `request_changes` || (!r && !te)
          ? void 0
          : () => {
              tt(d, c, () => D(!0));
            }),
      (t[9] = te),
      (t[10] = r),
      (t[11] = A?.interaction_mode),
      (t[12] = d),
      (t[13] = D),
      (t[14] = c),
      (t[15] = P))
    : (P = t[15]);
  let F = P,
    re;
  t[16] !== r || t[17] !== F || t[18] !== d || t[19] !== c.id
    ? ((re =
        F == null
          ? void 0
          : () => {
              if ((L.prefetch(), r && d.get(ve))) {
                d.query.fetch(Y, { type: `space`, id: c.id, includeInheritedAccess: !0 }).catch(Pt);
                let e = d.query.getOptions(ie, { type: `space`, id: c.id });
                e.enabled && d.queryClient.prefetchQuery(e);
              }
            }),
      (t[16] = r),
      (t[17] = F),
      (t[18] = d),
      (t[19] = c.id),
      (t[20] = re))
    : (re = t[20]);
  let I = re,
    R;
  t[21] !== f || t[22] !== c.name
    ? ((R = f.formatMessage(
        {
          id: `codex.space.share`,
          defaultMessage: `Share {spaceName}`,
          description: `Button in a Space root Page header that opens the Space sharing dialog`,
        },
        { spaceName: c.name },
      )),
      (t[21] = f),
      (t[22] = c.name),
      (t[23] = R))
    : (R = t[23]);
  let z = R,
    B;
  t[24] !== a?.triggerRef || t[25] !== F || t[26] !== I || t[27] !== z
    ? ((B =
        F != null &&
        (0, Q.jsx)(b, {
          cloneCustomTrigger: !0,
          openWhen: `visibility-target-hidden`,
          tooltipContent: z,
          children: (0, Q.jsx)(ge, { ref: a?.triggerRef, "aria-label": z, onFocus: I, onClick: F }),
        })),
      (t[24] = a?.triggerRef),
      (t[25] = F),
      (t[26] = I),
      (t[27] = z),
      (t[28] = B))
    : (B = t[28]);
  let ae;
  t[29] === B ? (ae = t[30]) : ((ae = (0, Q.jsx)(Q.Fragment, { children: B })), (t[29] = B), (t[30] = ae));
  let V = ae,
    se = ee ? F : void 0,
    U;
  t[31] !== i || t[32] !== V || t[33] !== F || t[34] !== I || t[35] !== se
    ? ((U = i({ controls: V, facepileOnOpen: se, onShare: F, people: null, prewarmSharing: I })),
      (t[31] = i),
      (t[32] = V),
      (t[33] = F),
      (t[34] = I),
      (t[35] = se),
      (t[36] = U))
    : (U = t[36]);
  let le;
  t[37] !== r ||
  t[38] !== a?.onCloseAutoFocus ||
  t[39] !== F ||
  t[40] !== E ||
  t[41] !== s ||
  t[42] !== u ||
  t[43] !== D ||
  t[44] !== c
    ? ((le =
        u && F != null && E
          ? (0, Q.jsx)(L, {
              pageId: s,
              requestAccess: !r,
              space: c,
              onClose: () => D(!1),
              onCloseAutoFocus: a?.onCloseAutoFocus,
            })
          : null),
      (t[37] = r),
      (t[38] = a?.onCloseAutoFocus),
      (t[39] = F),
      (t[40] = E),
      (t[41] = s),
      (t[42] = u),
      (t[43] = D),
      (t[44] = c),
      (t[45] = le))
    : (le = t[45]);
  let W;
  return (
    t[46] !== U || t[47] !== le
      ? ((W = (0, Q.jsxs)(Q.Fragment, { children: [U, le] })), (t[46] = U), (t[47] = le), (t[48] = W))
      : (W = t[48]),
    W
  );
}
function Pt() {}
var Ft, It, Q;
function Lt() {
  return (Lt = e(() => {
    ((Ft = c()),
      _(),
      (It = i()),
      f(),
      Ae(),
      T(),
      ue(),
      X(),
      P(),
      R(),
      F(),
      G(),
      At(),
      ae(),
      nt(),
      q(),
      r(),
      M(),
      (Q = o()));
  }))();
}
function Rt(e) {
  let t = (0, Ht.c)(6);
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
  return (t[4] === e ? (n = t[5]) : ((n = (0, $.jsx)(zt, { ...e })), (t[4] = e), (t[5] = n)), n);
}
function zt(e) {
  let t = (0, Ht.c)(35),
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
      presence: f,
      comments: p,
    } = e,
    m = f === void 0 ? d : f,
    { data: h, isError: g } = v(W),
    { space: _, isDriveBacked: y } = x(B, u),
    b = x(Ee, u),
    S;
  t[0] !== a ||
  t[1] !== y ||
  t[2] !== c ||
  t[3] !== b?.drive_scope ||
  t[4] !== b?.parent ||
  t[5] !== u ||
  t[6] !== s ||
  t[7] !== _
    ? ((S = (e) => {
        let t = null,
          n = { dialog: a, renderDialog: s, children: a == null ? void 0 : e };
        return (
          _?.root_page_id === u
            ? (t = (0, $.jsx)(Vt, { ...n, spaceId: _.id }))
            : c &&
              y === !0 &&
              (b?.drive_scope === `personal` || b?.parent != null || _ != null) &&
              (t = (0, $.jsx)(rt, { ...n, target: { kind: `page`, id: u } })),
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
      (t[7] = _),
      (t[8] = S))
    : (S = t[8]);
  let C = S,
    w;
  t[9] !== n ||
  t[10] !== r ||
  t[11] !== p ||
  t[12] !== i ||
  t[13] !== y ||
  t[14] !== g ||
  t[15] !== b ||
  t[16] !== l ||
  t[17] !== u ||
  t[18] !== m ||
  t[19] !== C ||
  t[20] !== s ||
  t[21] !== d ||
  t[22] !== _ ||
  t[23] !== h
    ? ((w = (e) =>
        _?.root_page_id === u
          ? (0, $.jsx)(Nt, {
              canShare: n,
              dialog: i,
              renderDialog: s,
              pageId: u,
              space: _,
              children: (t) => {
                let { controls: n, facepileOnOpen: i, onShare: a, prewarmSharing: o } = t,
                  s = a != null && U(b);
                return C((t) =>
                  r({
                    accessRequestReview: t,
                    controls: (0, $.jsxs)($.Fragment, { children: [n, t] }),
                    onShare: a,
                    requestEditAccess: e,
                    people:
                      (m != null || s) &&
                      (0, $.jsx)(wt, {
                        canShare: !1,
                        onLocate: l,
                        onOpen: i,
                        pageId: u,
                        session: m,
                        showPlaceholder: s,
                      }),
                    prewarmSharing: o,
                  }),
                );
              },
            })
          : (0, $.jsx)(jt, {
              canShare: n && y != null,
              dialog: i,
              renderDialog: s,
              onLocateCollaborator: l,
              pageId: u,
              presence: m,
              comments: p,
              session: d,
              showShareAction: y === !0 || (y === !1 && (h != null || g)),
              children: (t) =>
                C((n) =>
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
      (t[11] = p),
      (t[12] = i),
      (t[13] = y),
      (t[14] = g),
      (t[15] = b),
      (t[16] = l),
      (t[17] = u),
      (t[18] = m),
      (t[19] = C),
      (t[20] = s),
      (t[21] = d),
      (t[22] = _),
      (t[23] = h),
      (t[24] = w))
    : (w = t[24]);
  let T = w,
    E = y === !0,
    D;
  t[25] !== u || t[26] !== _
    ? ((D = _?.root_page_id === u ? { kind: `space`, id: _.id } : { kind: `page`, id: u }),
      (t[25] = u),
      (t[26] = _),
      (t[27] = D))
    : (D = t[27]);
  let O;
  return (
    t[28] !== o || t[29] !== u || t[30] !== s || t[31] !== T || t[32] !== E || t[33] !== D
      ? ((O = (0, $.jsx)(
          Bt,
          { dialog: o, isDriveBacked: E, pageId: u, renderDialog: s, target: D, children: T },
          u,
        )),
        (t[28] = o),
        (t[29] = u),
        (t[30] = s),
        (t[31] = T),
        (t[32] = E),
        (t[33] = D),
        (t[34] = O))
      : (O = t[34]),
    O
  );
}
function Bt(e) {
  let t = (0, Ht.c)(23),
    { children: n, dialog: r, isDriveBacked: i, pageId: a, renderDialog: o, target: s } = e,
    c = o === void 0 || o,
    l = x(Ee, a),
    d = x(_e, a),
    f = v(ne),
    p = v(me),
    { data: m, isError: h } = H(),
    g = m?.accounts?.find((e) => e.id === p),
    [_, y] = (0, Ut.useState)(!1),
    b = r?.open ?? _,
    S = r?.onOpenChange ?? y;
  if (
    !i ||
    !f ||
    h ||
    !j(g) ||
    l?.access.can_read !== !0 ||
    l.access.can_write !== !1 ||
    l.access.can_share !== !1 ||
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
    ? ((T = (0, $.jsx)(E, {
        id: `codex.pages.requestEditAccess.button`,
        defaultMessage: `Request edit access`,
        description: `Button for a Page viewer or commenter to ask the owner for a higher role`,
      })),
      (t[6] = T))
    : (T = t[6]);
  let D;
  t[7] !== C || t[8] !== w
    ? ((D = (0, $.jsx)(u, { ref: C, onClick: w, children: T })), (t[7] = C), (t[8] = w), (t[9] = D))
    : (D = t[9]);
  let O;
  t[10] !== n || t[11] !== D ? ((O = n(D)), (t[10] = n), (t[11] = D), (t[12] = O)) : (O = t[12]);
  let k;
  t[13] !== r?.onCloseAutoFocus || t[14] !== b || t[15] !== a || t[16] !== c || t[17] !== S || t[18] !== s
    ? ((k =
        c && b
          ? (0, $.jsx)(I, {
              target: s,
              pageId: a,
              onClose: () => S(!1),
              onCloseAutoFocus: r?.onCloseAutoFocus,
            })
          : null),
      (t[13] = r?.onCloseAutoFocus),
      (t[14] = b),
      (t[15] = a),
      (t[16] = c),
      (t[17] = S),
      (t[18] = s),
      (t[19] = k))
    : (k = t[19]);
  let A;
  return (
    t[20] !== O || t[21] !== k
      ? ((A = (0, $.jsxs)($.Fragment, { children: [O, k] })), (t[20] = O), (t[21] = k), (t[22] = A))
      : (A = t[22]),
    A
  );
}
function Vt(e) {
  let t = (0, Ht.c)(6),
    { children: n, dialog: r, renderDialog: i, spaceId: a } = e,
    o = x(V, a),
    s;
  return (
    t[0] !== n || t[1] !== r || t[2] !== o?.isOwner || t[3] !== i || t[4] !== a
      ? ((s =
          o?.isOwner === !0
            ? (0, $.jsx)(rt, { target: { kind: `space`, id: a }, dialog: r, renderDialog: i, children: n })
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
var Ht, Ut, $;
function Wt() {
  return (Wt = e(() => {
    ((Ht = c()),
      _(),
      (Ut = i()),
      f(),
      Ae(),
      pt(),
      X(),
      Oe(),
      F(),
      G(),
      At(),
      Lt(),
      ae(),
      q(),
      p(),
      ($ = o()));
  }))();
}
export { Lt as a, Nt as i, Rt as n, Wt as r, Vt as t };
//# sourceMappingURL=sharing-6c4d609745aa.js.map
