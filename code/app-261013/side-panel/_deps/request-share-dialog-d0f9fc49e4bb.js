import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  GE as n,
  IDt as r,
  Iot as i,
  Ixt as a,
  JDt as o,
  Lot as ee,
  Pxt as s,
  Rpt as c,
  TJ as l,
  Vxt as u,
  WE as d,
  Xot as f,
  Yot as p,
  fO as m,
  hot as te,
  jDt as h,
  lO as ne,
  lot as g,
  rW as _,
  rst as re,
  vzt as v,
  wot as ie,
  xMt as ae,
  yAt as oe,
  yzt as se,
  zxt as ce,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bar as y,
  Bsn as le,
  CV as ue,
  DV as de,
  Dor as fe,
  EV as pe,
  Ear as me,
  Fin as b,
  GMr as he,
  HH as ge,
  Iin as _e,
  MRt as ve,
  NRt as x,
  OV as ye,
  Oor as be,
  Rc as xe,
  SV as Se,
  Tc as Ce,
  WH as we,
  XMr as Te,
  Ymr as S,
  bV as C,
  dH as w,
  dMr as Ee,
  drt as T,
  ehr as E,
  fMr as D,
  iV as De,
  kV as Oe,
  lrt as O,
  nV as ke,
  oV as Ae,
  rV as k,
  tNr as A,
  uH as je,
  urt as Me,
  vV as Ne,
  wc as Pe,
  wsn as Fe,
  xc as Ie,
  xsn as j,
  zc as Le,
} from "./app-initial-5851df3f6cb1.js";
import { n as Re, t as ze } from "./avatar-ed18f22a2837.js";
import { i as M, n as Be } from "./profile-card-24cf744f537b.js";
import { i as N, r as Ve } from "./member-count-5e188d46464b.js";
import { t as He } from "./modal-permission-dropdown-75a4787ca1b8.js";
import { c as Ue, l as We, n as Ge, t as Ke } from "./recipient-picker-caea7e148b2f.js";
import { n as qe, t as Je } from "./role-label-47a44c95e79a.js";
import { t as Ye } from "./permission-dropdown-e25fe01e48c3.js";
import { n as Xe, r as Ze } from "./state-d827adeac3bf.js";
function Qe(e) {
  let n = (0, P.c)(12),
    { disabled: i, pageId: o, spaceId: ee } = e,
    s = a(t),
    c = ce(T, o),
    [l, u] = (0, F.useState)(!1),
    d = i || o == null,
    f;
  n[0] !== l || n[1] !== c || n[2] !== o || n[3] !== s || n[4] !== ee
    ? ((f = () => {
        let e = s.get(he);
        e != null &&
          o != null &&
          !l &&
          s.get(y) &&
          (u(!0),
          O(s, c, void 0, { spaceId: ee }).then((t) => {
            (u(!1), t && s.get(y) && s.get(he) === e && w(s));
          }));
      }),
      (n[0] = l),
      (n[1] = c),
      (n[2] = o),
      (n[3] = s),
      (n[4] = ee),
      (n[5] = f))
    : (f = n[5]);
  let p, m;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, I.jsx)(_, {})),
      (m = (0, I.jsx)(r, {
        id: `codex.pages.sharing.copyLink`,
        defaultMessage: `Copy link`,
        description: `Button in Page and Space sharing dialogs that copies the Page or Space homepage URL without changing access`,
      })),
      (n[6] = p),
      (n[7] = m))
    : ((p = n[6]), (m = n[7]));
  let te;
  return (
    n[8] !== l || n[9] !== d || n[10] !== f
      ? ((te = (0, I.jsxs)(oe, {
          color: `secondary`,
          variant: `outline`,
          disabled: d,
          loading: l,
          size: `xl`,
          type: `button`,
          onClick: f,
          children: [p, m],
        })),
        (n[8] = l),
        (n[9] = d),
        (n[10] = f),
        (n[11] = te))
      : (te = n[11]),
    te
  );
}
var P, F, I;
function $e() {
  return ($e = e(() => {
    ((P = v()), o(), s(), (F = se()), h(), A(), l(), ie(), je(), me(), Me(), (I = ae()));
  }))();
}
function et(e) {
  let n = (0, ht.c)(87),
    { target: i, pageId: o, requestFor: s, copyLinkSpaceId: l, onClose: p } = e,
    m = s === void 0 ? `others` : s,
    h = a(t),
    g = u(fe),
    _ = u(Te),
    re = u(Ie),
    v = ce(Fe, o),
    { data: ie, isError: ae, refetch: se } = _e(),
    y = ie?.accounts?.find((e) => e.id === g),
    ue = re && m === `others` && y?.structure === `workspace`,
    de;
  n[0] === ue ? (de = n[1]) : ((de = { enabled: ue }), (n[0] = ue), (n[1] = de));
  let { data: me, isError: b, refetch: he } = ce(Ee, g ?? ``, de),
    ge = y == null ? void 0 : Ue(y, me, b),
    x = re && !ae && g != null && _ != null && (m === `self` ? Ce(y) : y?.structure === `workspace`),
    S = x && m === `others` && me != null && !b && ge?.canSearchMembers === !0,
    C;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = new AbortController()), (n[2] = C)) : (C = n[2]);
  let w = (0, L.useRef)(C),
    T,
    E;
  (n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        let e = new AbortController();
        return ((w.current = e), () => e.abort());
      }),
      (E = []),
      (n[3] = T),
      (n[4] = E))
    : ((T = n[3]), (E = n[4])),
    (0, L.useLayoutEffect)(T, E));
  let [D, Oe] = (0, L.useState)(`viewer`),
    [O, Ae] = (0, L.useState)(m === `self` ? `editor` : void 0),
    k;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = []), (n[5] = k)) : (k = n[5]);
  let [A, je] = (0, L.useState)(k),
    [Me, Pe] = (0, L.useState)(``),
    j;
  n[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = []), (n[6] = j)) : (j = n[6]);
  let [Le, Re] = (0, L.useState)(j),
    M;
  n[7] !== g || n[8] !== i.id || n[9] !== i.kind || n[10] !== _
    ? ((M = [`space`, `requested-access`, _, g, i.kind, i.id]),
      (n[7] = g),
      (n[8] = i.id),
      (n[9] = i.kind),
      (n[10] = _),
      (n[11] = M))
    : (M = n[11]);
  let N;
  n[12] !== g || n[13] !== x || n[14] !== o || n[15] !== h || n[16] !== i || n[17] !== _
    ? ((N = async (e) => {
        let { signal: t } = e;
        if (!x || g == null || _ == null) throw Error(`pages_disabled`);
        let n = be(h, g, _),
          r = AbortSignal.any([t, w.current.signal, n.signal]);
        return ft(i, r)
          .then(async (e) => {
            r.throwIfAborted();
            let t = h.get(Fe, o)?.access,
              n = `viewer`;
            if (
              (t?.can_write ? (n = `editor`) : t?.can_comment && (n = `commenter`),
              e.current_role != null && t != null && e.current_role !== n)
            ) {
              let [e] = await c(
                Promise.allSettled([
                  h.get(le, o).refetch({ throwOnError: !0 }),
                  i.kind === `space` ? h.get(Ze, i.id).refetch({ throwOnError: !0 }) : void 0,
                ]),
                r,
              );
              if ((r.throwIfAborted(), e.status === `fulfilled` && e.value.data != null)) {
                let t = e.value.data.metadata;
                we(h, g, (e) => (e.page_id === o ? { ...e, access: t.access } : e), void 0);
              }
            }
            return e;
          })
          .finally(n.stop);
      }),
      (n[12] = g),
      (n[13] = x),
      (n[14] = o),
      (n[15] = h),
      (n[16] = i),
      (n[17] = _),
      (n[18] = N))
    : (N = n[18]);
  let We;
  n[19] !== x || n[20] !== N || n[21] !== M
    ? ((We = {
        queryKey: M,
        enabled: x,
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
        queryFn: N,
      }),
      (n[19] = x),
      (n[20] = N),
      (n[21] = M),
      (n[22] = We))
    : (We = n[22]);
  let { data: Ge, isFetching: qe, isError: Ye, isFetchedAfterMount: Xe, refetch: P } = f(We),
    F = x && Xe && !Ye ? Ge : void 0,
    I = [...(F?.requests ?? []), ...Le],
    $e = new Set(
      I.filter((e) =>
        e.recipients?.some((e) => {
          let { principal: t } = e;
          return (
            t.principal_type === F?.requester.principal_type && t.principal_id === F?.requester.principal_id
          );
        }),
      ).map(dt),
    ),
    et = new Set(
      F?.requestable_roles?.filter(
        (e) =>
          new Set(
            I.filter((t) => t.requested_role === e)
              .flatMap(ut)
              .map(lt),
          ).size >= 100,
      ),
    ),
    z = m === `self` && O != null && F?.requestable_roles?.includes(O) === !0 && !$e.has(O) && !et.has(O),
    gt = new Set(
      I.filter((e) => (e.requested_role ?? `viewer`) === D)
        .flatMap(ct)
        .map(st),
    ),
    B = Math.max(0, 100 - gt.size - (O === D && z ? 1 : 0)),
    _t;
  n[23] === F
    ? (_t = n[24])
    : ((_t = (F == null ? [] : [F.owner, F.requester]).map(ot)), (n[23] = F), (n[24] = _t));
  let vt = new Set([...gt, ..._t]),
    V = A.flatMap((e) => {
      let { recipient: t } = e;
      return t.recipient_type === `principal` &&
        (t.principal_type === `user` || t.principal_type === `group`) &&
        !vt.has(`${t.principal_type}:${t.principal_id}`)
        ? [{ principal_type: t.principal_type, principal_id: t.principal_id }]
        : [];
    }),
    H;
  n[25] !== g ||
  n[26] !== x ||
  n[27] !== S ||
  n[28] !== z ||
  n[29] !== F ||
  n[30] !== P ||
  n[31] !== B ||
  n[32] !== D ||
  n[33] !== h ||
  n[34] !== A.length ||
  n[35] !== O ||
  n[36] !== i ||
  n[37] !== _ ||
  n[38] !== V
    ? ((H = async () => {
        if (
          !x ||
          g == null ||
          _ == null ||
          F == null ||
          (O == null && A.length === 0) ||
          (O != null && !z) ||
          (A.length > 0 && (!S || A.length !== V.length || V.length > B)) ||
          !h.get(Ie)
        )
          throw Error(`access_request_not_permitted`);
        let e = be(h, g, _),
          t = AbortSignal.any([w.current.signal, e.signal]),
          n = await Promise.allSettled([
            O == null ? void 0 : mt(h, i, { role: O }, t),
            A.length === 0 ? void 0 : pt(h, i, { recipients: V, role: D }, t),
          ]).finally(e.stop);
        if (
          (t.throwIfAborted(), w.current.signal.aborted || h.get(fe) !== g || h.get(Te) !== _ || !h.get(Ie))
        )
          throw Error(`pages_disabled`);
        let r = n.flatMap(at);
        if (
          (Re((e) => [...e, ...r]),
          n[0]?.status === `fulfilled` && Ae(void 0),
          n[1]?.status === `fulfilled` && (je([]), Pe(``)),
          r.length > 0)
        ) {
          let e = xe(
            h,
            `access_request_refresh`,
            { resource_kind: i.kind, decision: `request`, completion_mode: `submitted` },
            w.current.signal,
          );
          P().then(
            (t) => e(t.isError ? `failure` : `success`),
            () => e(`failure`),
          );
        }
        for (let e of n) if (e.status === `rejected`) throw e.reason;
      }),
      (n[25] = g),
      (n[26] = x),
      (n[27] = S),
      (n[28] = z),
      (n[29] = F),
      (n[30] = P),
      (n[31] = B),
      (n[32] = D),
      (n[33] = h),
      (n[34] = A.length),
      (n[35] = O),
      (n[36] = i),
      (n[37] = _),
      (n[38] = V),
      (n[39] = H))
    : (H = n[39]);
  let U;
  n[40] !== g || n[41] !== h || n[42] !== _
    ? ((U = () => {
        !w.current.signal.aborted &&
          h.get(fe) === g &&
          h.get(Te) === _ &&
          h.get(Ie) &&
          h
            .get(te)
            .success(
              (0, R.jsx)(r, {
                id: `codex.pages.requestShare.sent`,
                defaultMessage: `Request submitted`,
                description: `Success toast after asking a Page or Space owner to change your access or grant other people access; access has not yet been granted`,
              }),
            );
      }),
      (n[40] = g),
      (n[41] = h),
      (n[42] = _),
      (n[43] = U))
    : (U = n[43]);
  let yt;
  n[44] !== H || n[45] !== U
    ? ((yt = { retry: !1, networkMode: `always`, mutationFn: H, onSuccess: U }),
      (n[44] = H),
      (n[45] = U),
      (n[46] = yt))
    : (yt = n[46]);
  let { mutate: bt, isPending: W, isError: xt } = ee(yt),
    St = !x || F == null || qe || W,
    Ct =
      !St &&
      (O != null || A.length > 0) &&
      (O == null || z) &&
      (A.length === 0 || (S && A.length <= B && V.length === A.length)),
    wt = new Map();
  for (let e of I)
    for (let t of e.recipients ?? []) {
      let n = `${e.request_id}:${e.created_at}:${t.principal.principal_type}:${t.principal.principal_id}`;
      (wt.get(n)?.recipient.status === `pending` || !wt.has(n)) && wt.set(n, { request: e, recipient: t });
    }
  let Tt = [...wt].filter(it),
    G;
  n[47] !== m || n[48] !== i.id || n[49] !== i.kind
    ? ((G =
        m === `self`
          ? (0, R.jsx)(r, {
              id: `codex.pages.requestAccess.title`,
              defaultMessage: `Request access`,
              description: `Title of the dialog for requesting a higher Page or Space role for yourself`,
            })
          : (0, R.jsx)(ke, { kind: i.kind, id: i.id, action: `ask` })),
      (n[47] = m),
      (n[48] = i.id),
      (n[49] = i.kind),
      (n[50] = G))
    : (G = n[50]);
  let K;
  n[51] !== v?.document_type || n[52] !== o || n[53] !== m || n[54] !== i.kind
    ? ((K =
        m === `self`
          ? (0, R.jsx)(r, {
              id: `codex.pages.requestAccess.descriptionByKind.byDocumentType`,
              defaultMessage: `{kind, select, space {Your request will be sent to the space owner} other {{documentType, select, granola_presentation {Your request will be sent to the slide owner} granola_workbook {Your request will be sent to the sheet owner} other {Your request will be sent to the page owner}}}}`,
              description: `Explains that higher access requires approval from the owner of the selected Page or Space; kind identifies the resource receiving the request. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation. documentType selects slide, sheet, or page for the current document.`,
              values: { documentType: v?.document_type ?? `page`, kind: i.kind },
            })
          : (0, R.jsx)(De, { kind: i.kind, pageId: o })),
      (n[51] = v?.document_type),
      (n[52] = o),
      (n[53] = m),
      (n[54] = i.kind),
      (n[55] = K))
    : (K = n[55]);
  let q;
  n[56] !== Ct || n[57] !== bt
    ? ((q = () => {
        Ct && bt();
      }),
      (n[56] = Ct),
      (n[57] = bt),
      (n[58] = q))
    : (q = n[58]);
  let J;
  n[59] !== l || n[60] !== W || n[61] !== o || n[62] !== m
    ? ((J = m === `others` && (0, R.jsx)(Qe, { pageId: o, spaceId: l, disabled: W })),
      (n[59] = l),
      (n[60] = W),
      (n[61] = o),
      (n[62] = m),
      (n[63] = J))
    : (J = n[63]);
  let Y;
  n[64] === J
    ? (Y = n[65])
    : ((Y = (0, R.jsx)(`div`, { className: `me-auto`, children: J })), (n[64] = J), (n[65] = Y));
  let Et;
  n[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = (0, R.jsx)(r, {
        id: `shareDialog.primaryAction.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling staged changes in a share dialog`,
      })),
      (n[66] = Et))
    : (Et = n[66]);
  let X;
  n[67] !== W || n[68] !== p
    ? ((X = (0, R.jsx)(oe, {
        color: `secondary`,
        variant: `outline`,
        size: `xl`,
        type: `button`,
        disabled: W,
        onClick: p,
        children: Et,
      })),
      (n[67] = W),
      (n[68] = p),
      (n[69] = X))
    : (X = n[69]);
  let Dt = !Ct,
    Z;
  n[70] === m
    ? (Z = n[71])
    : ((Z =
        m === `self`
          ? (0, R.jsx)(r, {
              id: `codex.pages.requestAccess.send`,
              defaultMessage: `Send`,
              description: `Button sending a request for a higher Page or Space role to its owner`,
            })
          : (0, R.jsx)(r, {
              id: `codex.pages.requestShare.send`,
              defaultMessage: `Send request`,
              description: `Button asking a Page or Space owner to approve your selected access and any selected people or groups`,
            })),
      (n[70] = m),
      (n[71] = Z));
  let Q;
  n[72] !== W || n[73] !== Dt || n[74] !== Z
    ? ((Q = (0, R.jsx)(oe, {
        color: `primary`,
        disabledTone: `dimmed`,
        size: `xl`,
        type: `submit`,
        disabled: Dt,
        loading: W,
        children: Z,
      })),
      (n[72] = W),
      (n[73] = Dt),
      (n[74] = Z),
      (n[75] = Q))
    : (Q = n[75]);
  let $;
  n[76] !== Y || n[77] !== X || n[78] !== Q
    ? (($ = (0, R.jsxs)(R.Fragment, { children: [Y, X, Q] })),
      (n[76] = Y),
      (n[77] = X),
      (n[78] = Q),
      (n[79] = $))
    : ($ = n[79]);
  let Ot =
      F == null || g == null
        ? (0, R.jsx)(ne, {
            children: (0, R.jsx)(Se, {
              isLoading: !Ye && !ae && (qe || y == null),
              onRetry: () => {
                (se(), he(), x && P());
              },
            }),
          })
        : (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsxs)(ne, {
                className: `gap-4`,
                children: [
                  m === `others` &&
                    (0, R.jsx)(d, {
                      variant: `privacyNotice`,
                      title: (0, R.jsx)(r, {
                        id: `codex.pages.requestShare.approvalRequired`,
                        defaultMessage: `Owner must approve access first`,
                        description: `Banner explaining that a Page or Space viewer's own access changes and invitations require the owner's approval`,
                      }),
                      content:
                        F.current_role === `commenter`
                          ? (0, R.jsx)(r, {
                              id: `codex.pages.requestShare.commenterDescription`,
                              defaultMessage: `You’re a commenter and can’t manage access`,
                              description: `Explains why a Page commenter must ask the owner to grant others access`,
                            })
                          : (0, R.jsx)(r, {
                              id: `codex.pages.requestShare.viewerDescription`,
                              defaultMessage: `You’re a viewer and can’t manage access`,
                              description: `Explains why a Page viewer must ask the owner to grant others access`,
                            }),
                    }),
                  m === `self` &&
                    F.current_role != null &&
                    F.requestable_roles != null &&
                    (0, R.jsx)(`div`, {
                      className: `flex items-center`,
                      children:
                        F.requestable_roles.length === 0
                          ? (0, R.jsx)(Je, { permission: F.current_role })
                          : (0, R.jsx)(He, {
                              variant: `field`,
                              value: O ?? `editor`,
                              options: F.requestable_roles.map((e) => ({
                                value: e,
                                disabled: $e.has(e) || et.has(e),
                                tooltipText: et.has(e)
                                  ? (0, R.jsx)(r, {
                                      id: `codex.pages.requestShare.selfCapacity`,
                                      defaultMessage: `Request limit reached for this role`,
                                      description: `Explains why you cannot request a higher Page or Space role when your previous requests for that role already include 100 people or groups`,
                                    })
                                  : void 0,
                              })),
                              disabled: St,
                              renderLabel: rt,
                              onChange: (e) => {
                                Ae(
                                  e !== F.current_role && (e === `commenter` || e === `editor`) ? e : void 0,
                                );
                              },
                            }),
                    }),
                  S &&
                    (0, R.jsxs)(R.Fragment, {
                      children: [
                        (0, R.jsx)(Ke, {
                          accountId: g,
                          currentPrincipalId: F.requester.principal_id,
                          currentEmail: void 0,
                          isWorkspace: !0,
                          canSearchMembers: ge?.canSearchMembers === !0,
                          allowGroups: ge?.allowGroups === !0,
                          disabled: St,
                          existingPrincipalKeys: vt,
                          existingEmails: new Set(),
                          query: Me,
                          onQueryChange: Pe,
                          selected: A,
                          onChange: (e) => {
                            (je(e), D === `commenter` && e.some(nt) && Oe(`viewer`));
                          },
                          role: D,
                          allowedRoles: A.some(tt) ? [`viewer`, `editor`] : [`viewer`, `commenter`, `editor`],
                          onRoleChange: Oe,
                        }),
                        (B === 0 || A.length > B) &&
                          (0, R.jsx)(d, {
                            type: `warning`,
                            role: `status`,
                            content: (0, R.jsx)(r, {
                              id: `codex.pages.requestShare.capacity`,
                              defaultMessage: `You can request each role for up to 100 people or groups; {remaining, plural, =0 {you’ve reached this role’s limit} one {select at most # more recipient} other {select at most # more recipients}}`,
                              description: `Explains the cumulative access-request limit for the currently selected role, counting pending and resolved recipients from earlier requests`,
                              values: { remaining: B },
                            }),
                          }),
                      ],
                    }),
                  m === `others` &&
                    (b || me == null) &&
                    (0, R.jsx)(Se, { isLoading: !b, onRetry: () => void he() }),
                  xt &&
                    (0, R.jsx)(d, {
                      type: `error`,
                      role: `alert`,
                      content: (0, R.jsx)(r, {
                        id: `codex.pages.requestShare.failed`,
                        defaultMessage: `Couldn’t send the access request. Try again`,
                        description: `Error after asking a Page or Space owner to grant access; unsent requests are retained for retry`,
                      }),
                    }),
                ],
              }),
              m === `others` &&
                (0, R.jsx)(ye, {
                  kind: `link`,
                  children: (0, R.jsx)(`span`, {
                    className: `text-sm text-secondary`,
                    children: (0, R.jsx)(r, {
                      id: `codex.pages.requestShare.linkAccessManaged`,
                      defaultMessage: `Managed by the owner`,
                      description: `Read-only link access notice when the sharing API does not expose the link policy to a Page or Space viewer`,
                    }),
                  }),
                }),
              Tt.length > 0 &&
                (0, R.jsx)(ye, {
                  children: Tt.map((e) => {
                    let [t, n] = e,
                      { request: i, recipient: a } = n;
                    return (0, R.jsx)(
                      pe,
                      {
                        avatar: (0, R.jsx)(`span`, {
                          className: `opacity-50`,
                          children:
                            a.principal.principal_type === `group`
                              ? (0, R.jsx)(Ve, { groupId: a.principal.principal_id })
                              : (0, R.jsx)(ze, {
                                  accountUserId: a.principal.principal_id,
                                  name: a.name ?? a.email ?? ``,
                                  size: `group`,
                                }),
                        }),
                        label: (0, R.jsx)(`span`, {
                          className: `opacity-50`,
                          children:
                            a.principal.principal_id === F.requester.principal_id &&
                            a.principal.principal_type === F.requester.principal_type
                              ? (0, R.jsx)(r, {
                                  id: `codex.pages.requestShare.you`,
                                  defaultMessage: `You`,
                                  description: `Label identifying you as the beneficiary of a request for higher Page or Space access`,
                                })
                              : (a.name ??
                                a.email ??
                                (0, R.jsx)(r, {
                                  id: `codex.pages.requestShare.person`,
                                  defaultMessage: `Requested person`,
                                  description: `Fallback label when an access request recipient has no available display name or email`,
                                })),
                        }),
                        renderIdentity: (e) =>
                          (0, R.jsx)(Be, {
                            inShareDialog: !0,
                            accountUserId:
                              a.principal.principal_type === `user` && (a.name ?? a.email) != null
                                ? a.principal.principal_id
                                : null,
                            label: a.name ?? a.email ?? ``,
                            labelEmail: a.email,
                            children: e,
                          }),
                        secondaryLabel:
                          a.email == null
                            ? void 0
                            : (0, R.jsx)(`span`, { className: `opacity-50`, children: a.email }),
                        trailingContent: (0, R.jsxs)(`div`, {
                          className: `flex shrink-0 items-center gap-3`,
                          children: [
                            (0, R.jsx)(ve, {
                              className: `whitespace-nowrap`,
                              children: (0, R.jsx)(r, {
                                id: `shareDialog.pendingApproval`,
                                defaultMessage: `Pending approval`,
                                description: `Status of a request waiting for the resource owner's approval to grant access`,
                              }),
                            }),
                            (0, R.jsx)(`span`, {
                              className: `text-sm text-tertiary`,
                              children: (0, R.jsx)(Je, { permission: i.requested_role ?? `viewer` }),
                            }),
                          ],
                        }),
                      },
                      t,
                    );
                  }),
                }),
            ],
          }),
    kt;
  return (
    n[80] !== W || n[81] !== G || n[82] !== K || n[83] !== q || n[84] !== $ || n[85] !== Ot
      ? ((kt = (0, R.jsx)(Ne, {
          title: G,
          subtitle: K,
          isDismissalDisabled: W,
          onSubmit: q,
          footer: $,
          children: Ot,
        })),
        (n[80] = W),
        (n[81] = G),
        (n[82] = K),
        (n[83] = q),
        (n[84] = $),
        (n[85] = Ot),
        (n[86] = kt))
      : (kt = n[86]),
    kt
  );
}
function tt(e) {
  let { recipient: t } = e;
  return t.recipient_type === `principal` && t.principal_type === `group`;
}
function nt(e) {
  let { recipient: t } = e;
  return t.recipient_type === `principal` && t.principal_type === `group`;
}
function rt(e) {
  return (0, R.jsx)(Je, { permission: e });
}
function it(e) {
  let [, t] = e,
    { recipient: n } = t;
  return n.status === `pending`;
}
function at(e) {
  return e.status === `fulfilled` && e.value != null ? [e.value] : [];
}
function ot(e) {
  return `${e.principal_type}:${e.principal_id}`;
}
function st(e) {
  let { principal: t } = e;
  return `${t.principal_type}:${t.principal_id}`;
}
function ct(e) {
  return e.recipients ?? [];
}
function lt(e) {
  let { principal: t } = e;
  return `${t.principal_type}:${t.principal_id}`;
}
function ut(e) {
  return e.recipients ?? [];
}
function dt(e) {
  return e.requested_role;
}
async function ft(e, t) {
  let n = [],
    r = new Set(),
    i;
  for (let a = 0; a < 20; a += 1) {
    t.throwIfAborted();
    let a = await c(
      e.kind === `page`
        ? S.safeGet(`/pages/{page_id}/access-requests/requested`, {
            parameters: { path: { page_id: e.id }, query: { cursor: i, limit: 100 } },
            signal: t,
          })
        : S.safeGet(`/spaces/v2/{space_id}/access-requests/requested`, {
            parameters: { path: { space_id: e.id }, query: { cursor: i, limit: 100 } },
            signal: t,
          }),
      t,
    );
    if ((t.throwIfAborted(), n.push(...a.requests), a.next_cursor == null)) return { ...a, requests: n };
    if (r.has(a.next_cursor)) throw Error(`access_request_cursor_repeated`);
    ((i = a.next_cursor), r.add(i));
  }
  throw Error(`access_request_pagination_limit_exceeded`);
}
async function pt(e, t, n, r) {
  r.throwIfAborted();
  let i = xe(
    e,
    `access_request_command`,
    { resource_kind: t.kind, decision: `request_others`, completion_mode: `submitted` },
    r,
  );
  try {
    let e = await c(
      t.kind === `page`
        ? S.safePost(`/pages/{page_id}/access-requests/for-others`, {
            parameters: { path: { page_id: t.id } },
            requestBody: n,
            signal: r,
          })
        : S.safePost(`/spaces/v2/{space_id}/access-requests/for-others`, {
            parameters: { path: { space_id: t.id } },
            requestBody: n,
            signal: r,
          }),
      r,
    );
    return (r.throwIfAborted(), i(`success`), e);
  } finally {
    i(r.aborted ? `canceled` : `failure`);
  }
}
async function mt(e, t, n, r) {
  r.throwIfAborted();
  let i = xe(
    e,
    `access_request_command`,
    { resource_kind: t.kind, decision: `request_self`, completion_mode: `submitted` },
    r,
  );
  try {
    let e = await c(
      t.kind === `page`
        ? S.safePost(`/pages/{page_id}/access-requests/for-self`, {
            parameters: { path: { page_id: t.id } },
            requestBody: n,
            signal: r,
          })
        : S.safePost(`/spaces/v2/{space_id}/access-requests/for-self`, {
            parameters: { path: { space_id: t.id } },
            requestBody: n,
            signal: r,
          }),
      r,
    );
    return (r.throwIfAborted(), i(`success`), e);
  } finally {
    i(r.aborted ? `canceled` : `failure`);
  }
}
var ht, L, R;
function z() {
  return (z = e(() => {
    ((ht = v()),
      o(),
      i(),
      p(),
      s(),
      re(),
      (L = se()),
      h(),
      Le(),
      A(),
      D(),
      E(),
      b(),
      x(),
      n(),
      m(),
      g(),
      Ge(),
      Xe(),
      ge(),
      $e(),
      Re(),
      M(),
      Ae(),
      k(),
      j(),
      ie(),
      N(),
      de(),
      Oe(),
      C(),
      ue(),
      Ye(),
      We(),
      qe(),
      Pe(),
      (R = ae()));
  }))();
}
export { $e as i, z as n, Qe as r, et as t };
//# sourceMappingURL=request-share-dialog-d0f9fc49e4bb.js.map
