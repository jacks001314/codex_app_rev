import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $W as n,
  $mt as r,
  $st as i,
  FBt as a,
  HO as o,
  LNt as s,
  Mst as ee,
  PBt as c,
  Qst as te,
  TY as l,
  Vrt as u,
  XOt as d,
  ZSt as f,
  iCt as p,
  jst as m,
  nCt as ne,
  pkt as h,
  qrt as re,
  sct as ie,
  tkt as g,
  vD as ae,
  vst as oe,
  yD as se,
  yst as ce,
  zO as le,
  zjt as ue,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $H as _,
  Ac as de,
  BFt as fe,
  BRr as pe,
  Bc as me,
  Ec as he,
  FH as ge,
  IH as v,
  IIr as _e,
  LH as ve,
  LIr as ye,
  Mit as y,
  Nit as be,
  Olr as b,
  Pdn as xe,
  Tcn as Se,
  Vc as x,
  ZH as Ce,
  _ur as we,
  aU as Te,
  cH as S,
  cU as C,
  gur as Ee,
  hdn as w,
  iRr as T,
  iW as De,
  jit as E,
  kc as D,
  mlr as Oe,
  nU as O,
  nW as ke,
  oU as k,
  sH as A,
  sU as Ae,
  tU as je,
  tyr as Me,
  vdn as Ne,
  wLr as Pe,
  wcn as Fe,
  zFt as Ie,
  zH as j,
  zRr as Le,
} from "./app-initial-ad16eaadf81f.js";
import { n as Re, t as ze } from "./avatar-b3af498c99de.js";
import { i as M, n as Be } from "./profile-card-596b3632a9d9.js";
import { i as N, r as Ve } from "./member-count-bfd3da2c099a.js";
import { t as He } from "./modal-permission-dropdown-6dcd00cb5144.js";
import { c as Ue, l as We, n as Ge, t as Ke } from "./recipient-picker-5b8b87b8e1c8.js";
import { n as qe, t as Je } from "./role-label-f76597fae88b.js";
import { t as Ye } from "./permission-dropdown-5c542829d6d7.js";
import { n as Xe, r as Ze } from "./state-96ed81f5e609.js";
function Qe(e) {
  let r = (0, P.c)(12),
    { disabled: i, pageId: a, spaceId: o } = e,
    s = t(te),
    ee = ne(be, a),
    [c, l] = (0, F.useState)(!1),
    u = i || a == null,
    d;
  r[0] !== c || r[1] !== ee || r[2] !== a || r[3] !== s || r[4] !== o
    ? ((d = () => {
        let e = s.get(Le);
        e != null &&
          a != null &&
          !c &&
          s.get(b) &&
          (l(!0),
          E(s, ee, void 0, { spaceId: o }).then((t) => {
            (l(!1), t && s.get(b) && s.get(Le) === e && S(s));
          }));
      }),
      (r[0] = c),
      (r[1] = ee),
      (r[2] = a),
      (r[3] = s),
      (r[4] = o),
      (r[5] = d))
    : (d = r[5]);
  let f, p;
  r[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, I.jsx)(n, {})),
      (p = (0, I.jsx)(g, {
        id: `codex.pages.sharing.copyLink`,
        defaultMessage: `Copy link`,
        description: `Button in Page and Space sharing dialogs that copies the Page or Space homepage URL without changing access`,
      })),
      (r[6] = f),
      (r[7] = p))
    : ((f = r[6]), (p = r[7]));
  let m;
  return (
    r[8] !== c || r[9] !== u || r[10] !== d
      ? ((m = (0, I.jsxs)(ue, {
          color: `secondary`,
          variant: `outline`,
          disabled: u,
          loading: c,
          size: `xl`,
          type: `button`,
          onClick: d,
          children: [f, p],
        })),
        (r[8] = c),
        (r[9] = u),
        (r[10] = d),
        (r[11] = m))
      : (m = r[11]),
    m
  );
}
var P, F, I;
function $e() {
  return ($e = e(() => {
    ((P = c()), h(), f(), (F = a()), d(), Pe(), l(), i(), A(), Oe(), y(), (I = s()));
  }))();
}
function et(e) {
  let n = (0, ht.c)(87),
    { target: i, pageId: a, requestFor: o, copyLinkSpaceId: s, onClose: c } = e,
    l = o === void 0 ? `others` : o,
    u = t(te),
    d = p(Ee),
    f = p(pe),
    m = p(he),
    h = ne(Ne, a),
    { data: ie, isError: oe, refetch: se } = Se(),
    _ = ie?.accounts?.find((e) => e.id === d),
    fe = m && l === `others` && _?.structure === `workspace`,
    v;
  n[0] === fe ? (v = n[1]) : ((v = { enabled: fe }), (n[0] = fe), (n[1] = v));
  let { data: ye, isError: y, refetch: be } = ne(_e, d ?? ``, v),
    b = _ == null ? void 0 : Ue(_, ye, y),
    x = m && !oe && d != null && f != null && (l === `self` ? de(_) : _?.structure === `workspace`),
    S = x && l === `others` && ye != null && !y && b?.canSearchMembers === !0,
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
    [O, ke] = (0, L.useState)(l === `self` ? `editor` : void 0),
    k;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = []), (n[5] = k)) : (k = n[5]);
  let [A, Me] = (0, L.useState)(k),
    [Pe, Fe] = (0, L.useState)(``),
    j;
  n[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = []), (n[6] = j)) : (j = n[6]);
  let [Le, Re] = (0, L.useState)(j),
    M;
  n[7] !== d || n[8] !== i.id || n[9] !== i.kind || n[10] !== f
    ? ((M = [`space`, `requested-access`, f, d, i.kind, i.id]),
      (n[7] = d),
      (n[8] = i.id),
      (n[9] = i.kind),
      (n[10] = f),
      (n[11] = M))
    : (M = n[11]);
  let N;
  n[12] !== d || n[13] !== x || n[14] !== a || n[15] !== u || n[16] !== i || n[17] !== f
    ? ((N = async (e) => {
        let { signal: t } = e;
        if (!x || d == null || f == null) throw Error(`pages_disabled`);
        let n = we(u, d, f),
          o = AbortSignal.any([t, w.current.signal, n.signal]);
        return ft(i, o)
          .then(async (e) => {
            o.throwIfAborted();
            let t = u.get(Ne, a)?.access,
              n = `viewer`;
            if (
              (t?.can_write ? (n = `editor`) : t?.can_comment && (n = `commenter`),
              e.current_role != null && t != null && e.current_role !== n)
            ) {
              let [e] = await r(
                Promise.allSettled([
                  u.get(xe, a).refetch({ throwOnError: !0 }),
                  i.kind === `space` ? u.get(Ze, i.id).refetch({ throwOnError: !0 }) : void 0,
                ]),
                o,
              );
              if ((o.throwIfAborted(), e.status === `fulfilled` && e.value.data != null)) {
                let t = e.value.data.metadata;
                De(u, d, (e) => (e.page_id === a ? { ...e, access: t.access } : e), void 0);
              }
            }
            return e;
          })
          .finally(n.stop);
      }),
      (n[12] = d),
      (n[13] = x),
      (n[14] = a),
      (n[15] = u),
      (n[16] = i),
      (n[17] = f),
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
  let { data: Ge, isFetching: qe, isError: Ye, isFetchedAfterMount: Xe, refetch: P } = ee(We),
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
    z = l === `self` && O != null && F?.requestable_roles?.includes(O) === !0 && !$e.has(O) && !et.has(O),
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
  n[25] !== d ||
  n[26] !== x ||
  n[27] !== S ||
  n[28] !== z ||
  n[29] !== F ||
  n[30] !== P ||
  n[31] !== B ||
  n[32] !== D ||
  n[33] !== u ||
  n[34] !== A.length ||
  n[35] !== O ||
  n[36] !== i ||
  n[37] !== f ||
  n[38] !== V
    ? ((H = async () => {
        if (
          !x ||
          d == null ||
          f == null ||
          F == null ||
          (O == null && A.length === 0) ||
          (O != null && !z) ||
          (A.length > 0 && (!S || A.length !== V.length || V.length > B)) ||
          !u.get(he)
        )
          throw Error(`access_request_not_permitted`);
        let e = we(u, d, f),
          t = AbortSignal.any([w.current.signal, e.signal]),
          n = await Promise.allSettled([
            O == null ? void 0 : mt(u, i, { role: O }, t),
            A.length === 0 ? void 0 : pt(u, i, { recipients: V, role: D }, t),
          ]).finally(e.stop);
        if (
          (t.throwIfAborted(), w.current.signal.aborted || u.get(Ee) !== d || u.get(pe) !== f || !u.get(he))
        )
          throw Error(`pages_disabled`);
        let r = n.flatMap(at);
        if (
          (Re((e) => [...e, ...r]),
          n[0]?.status === `fulfilled` && ke(void 0),
          n[1]?.status === `fulfilled` && (Me([]), Fe(``)),
          r.length > 0)
        ) {
          let e = me(
            u,
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
      (n[25] = d),
      (n[26] = x),
      (n[27] = S),
      (n[28] = z),
      (n[29] = F),
      (n[30] = P),
      (n[31] = B),
      (n[32] = D),
      (n[33] = u),
      (n[34] = A.length),
      (n[35] = O),
      (n[36] = i),
      (n[37] = f),
      (n[38] = V),
      (n[39] = H))
    : (H = n[39]);
  let U;
  n[40] !== d || n[41] !== u || n[42] !== f
    ? ((U = () => {
        !w.current.signal.aborted &&
          u.get(Ee) === d &&
          u.get(pe) === f &&
          u.get(he) &&
          u
            .get(re)
            .success(
              (0, R.jsx)(g, {
                id: `codex.pages.requestShare.sent`,
                defaultMessage: `Request submitted`,
                description: `Success toast after asking a Page or Space owner to change your access or grant other people access; access has not yet been granted`,
              }),
            );
      }),
      (n[40] = d),
      (n[41] = u),
      (n[42] = f),
      (n[43] = U))
    : (U = n[43]);
  let yt;
  n[44] !== H || n[45] !== U
    ? ((yt = { retry: !1, networkMode: `always`, mutationFn: H, onSuccess: U }),
      (n[44] = H),
      (n[45] = U),
      (n[46] = yt))
    : (yt = n[46]);
  let { mutate: bt, isPending: W, isError: xt } = ce(yt),
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
  n[47] !== l || n[48] !== i.id || n[49] !== i.kind
    ? ((G =
        l === `self`
          ? (0, R.jsx)(g, {
              id: `codex.pages.requestAccess.title`,
              defaultMessage: `Request access`,
              description: `Title of the dialog for requesting a higher Page or Space role for yourself`,
            })
          : (0, R.jsx)(ge, { kind: i.kind, id: i.id, action: `ask` })),
      (n[47] = l),
      (n[48] = i.id),
      (n[49] = i.kind),
      (n[50] = G))
    : (G = n[50]);
  let K;
  n[51] !== h?.document_type || n[52] !== a || n[53] !== l || n[54] !== i.kind
    ? ((K =
        l === `self`
          ? (0, R.jsx)(g, {
              id: `codex.pages.requestAccess.descriptionByKind.byDocumentType`,
              defaultMessage: `{kind, select, space {Your request will be sent to the space owner} other {{documentType, select, granola_presentation {Your request will be sent to the slide owner} granola_workbook {Your request will be sent to the sheet owner} other {Your request will be sent to the page owner}}}}`,
              description: `Explains that higher access requires approval from the owner of the selected Page or Space; kind identifies the resource receiving the request. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation. documentType selects slide, sheet, or page for the current document.`,
              values: { documentType: h?.document_type ?? `page`, kind: i.kind },
            })
          : (0, R.jsx)(ve, { kind: i.kind, pageId: a })),
      (n[51] = h?.document_type),
      (n[52] = a),
      (n[53] = l),
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
  n[59] !== s || n[60] !== W || n[61] !== a || n[62] !== l
    ? ((J = l === `others` && (0, R.jsx)(Qe, { pageId: a, spaceId: s, disabled: W })),
      (n[59] = s),
      (n[60] = W),
      (n[61] = a),
      (n[62] = l),
      (n[63] = J))
    : (J = n[63]);
  let Y;
  n[64] === J
    ? (Y = n[65])
    : ((Y = (0, R.jsx)(`div`, { className: `me-auto`, children: J })), (n[64] = J), (n[65] = Y));
  let Et;
  n[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = (0, R.jsx)(g, {
        id: `shareDialog.primaryAction.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling staged changes in a share dialog`,
      })),
      (n[66] = Et))
    : (Et = n[66]);
  let X;
  n[67] !== W || n[68] !== c
    ? ((X = (0, R.jsx)(ue, {
        color: `secondary`,
        variant: `outline`,
        size: `xl`,
        type: `button`,
        disabled: W,
        onClick: c,
        children: Et,
      })),
      (n[67] = W),
      (n[68] = c),
      (n[69] = X))
    : (X = n[69]);
  let Dt = !Ct,
    Z;
  n[70] === l
    ? (Z = n[71])
    : ((Z =
        l === `self`
          ? (0, R.jsx)(g, {
              id: `codex.pages.requestAccess.send`,
              defaultMessage: `Send`,
              description: `Button sending a request for a higher Page or Space role to its owner`,
            })
          : (0, R.jsx)(g, {
              id: `codex.pages.requestShare.send`,
              defaultMessage: `Send request`,
              description: `Button asking a Page or Space owner to approve your selected access and any selected people or groups`,
            })),
      (n[70] = l),
      (n[71] = Z));
  let Q;
  n[72] !== W || n[73] !== Dt || n[74] !== Z
    ? ((Q = (0, R.jsx)(ue, {
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
      F == null || d == null
        ? (0, R.jsx)(le, {
            children: (0, R.jsx)(je, {
              isLoading: !Ye && !oe && (qe || _ == null),
              onRetry: () => {
                (se(), be(), x && P());
              },
            }),
          })
        : (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsxs)(le, {
                className: `gap-4`,
                children: [
                  l === `others` &&
                    (0, R.jsx)(ae, {
                      variant: `privacyNotice`,
                      title: (0, R.jsx)(g, {
                        id: `codex.pages.requestShare.approvalRequired`,
                        defaultMessage: `Owner must approve access first`,
                        description: `Banner explaining that a Page or Space viewer's own access changes and invitations require the owner's approval`,
                      }),
                      content:
                        F.current_role === `commenter`
                          ? (0, R.jsx)(g, {
                              id: `codex.pages.requestShare.commenterDescription`,
                              defaultMessage: `You’re a commenter and can’t manage access`,
                              description: `Explains why a Page commenter must ask the owner to grant others access`,
                            })
                          : (0, R.jsx)(g, {
                              id: `codex.pages.requestShare.viewerDescription`,
                              defaultMessage: `You’re a viewer and can’t manage access`,
                              description: `Explains why a Page viewer must ask the owner to grant others access`,
                            }),
                    }),
                  l === `self` &&
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
                                  ? (0, R.jsx)(g, {
                                      id: `codex.pages.requestShare.selfCapacity`,
                                      defaultMessage: `Request limit reached for this role`,
                                      description: `Explains why you cannot request a higher Page or Space role when your previous requests for that role already include 100 people or groups`,
                                    })
                                  : void 0,
                              })),
                              disabled: St,
                              renderLabel: rt,
                              onChange: (e) => {
                                ke(
                                  e !== F.current_role && (e === `commenter` || e === `editor`) ? e : void 0,
                                );
                              },
                            }),
                    }),
                  S &&
                    (0, R.jsxs)(R.Fragment, {
                      children: [
                        (0, R.jsx)(Ke, {
                          accountId: d,
                          currentPrincipalId: F.requester.principal_id,
                          currentEmail: void 0,
                          isWorkspace: !0,
                          canSearchMembers: b?.canSearchMembers === !0,
                          allowGroups: b?.allowGroups === !0,
                          disabled: St,
                          existingPrincipalKeys: vt,
                          existingEmails: new Set(),
                          query: Pe,
                          onQueryChange: Fe,
                          selected: A,
                          onChange: (e) => {
                            (Me(e), D === `commenter` && e.some(nt) && Oe(`viewer`));
                          },
                          role: D,
                          allowedRoles: A.some(tt) ? [`viewer`, `editor`] : [`viewer`, `commenter`, `editor`],
                          onRoleChange: Oe,
                        }),
                        (B === 0 || A.length > B) &&
                          (0, R.jsx)(ae, {
                            type: `warning`,
                            role: `status`,
                            content: (0, R.jsx)(g, {
                              id: `codex.pages.requestShare.capacity`,
                              defaultMessage: `You can request each role for up to 100 people or groups; {remaining, plural, =0 {you’ve reached this role’s limit} one {select at most # more recipient} other {select at most # more recipients}}`,
                              description: `Explains the cumulative access-request limit for the currently selected role, counting pending and resolved recipients from earlier requests`,
                              values: { remaining: B },
                            }),
                          }),
                      ],
                    }),
                  l === `others` &&
                    (y || ye == null) &&
                    (0, R.jsx)(je, { isLoading: !y, onRetry: () => void be() }),
                  xt &&
                    (0, R.jsx)(ae, {
                      type: `error`,
                      role: `alert`,
                      content: (0, R.jsx)(g, {
                        id: `codex.pages.requestShare.failed`,
                        defaultMessage: `Couldn’t send the access request. Try again`,
                        description: `Error after asking a Page or Space owner to grant access; unsent requests are retained for retry`,
                      }),
                    }),
                ],
              }),
              l === `others` &&
                (0, R.jsx)(Ae, {
                  kind: `link`,
                  children: (0, R.jsx)(`span`, {
                    className: `text-sm text-secondary`,
                    children: (0, R.jsx)(g, {
                      id: `codex.pages.requestShare.linkAccessManaged`,
                      defaultMessage: `Managed by the owner`,
                      description: `Read-only link access notice when the sharing API does not expose the link policy to a Page or Space viewer`,
                    }),
                  }),
                }),
              Tt.length > 0 &&
                (0, R.jsx)(Ae, {
                  children: Tt.map((e) => {
                    let [t, n] = e,
                      { request: r, recipient: i } = n;
                    return (0, R.jsx)(
                      Te,
                      {
                        avatar: (0, R.jsx)(`span`, {
                          className: `opacity-50`,
                          children:
                            i.principal.principal_type === `group`
                              ? (0, R.jsx)(Ve, { groupId: i.principal.principal_id })
                              : (0, R.jsx)(ze, {
                                  accountUserId: i.principal.principal_id,
                                  name: i.name ?? i.email ?? ``,
                                  size: `group`,
                                }),
                        }),
                        label: (0, R.jsx)(`span`, {
                          className: `opacity-50`,
                          children:
                            i.principal.principal_id === F.requester.principal_id &&
                            i.principal.principal_type === F.requester.principal_type
                              ? (0, R.jsx)(g, {
                                  id: `codex.pages.requestShare.you`,
                                  defaultMessage: `You`,
                                  description: `Label identifying you as the beneficiary of a request for higher Page or Space access`,
                                })
                              : (i.name ??
                                i.email ??
                                (0, R.jsx)(g, {
                                  id: `codex.pages.requestShare.person`,
                                  defaultMessage: `Requested person`,
                                  description: `Fallback label when an access request recipient has no available display name or email`,
                                })),
                        }),
                        renderIdentity: (e) =>
                          (0, R.jsx)(Be, {
                            inShareDialog: !0,
                            accountUserId:
                              i.principal.principal_type === `user` && (i.name ?? i.email) != null
                                ? i.principal.principal_id
                                : null,
                            label: i.name ?? i.email ?? ``,
                            labelEmail: i.email,
                            children: e,
                          }),
                        secondaryLabel:
                          i.email == null
                            ? void 0
                            : (0, R.jsx)(`span`, { className: `opacity-50`, children: i.email }),
                        trailingContent: (0, R.jsxs)(`div`, {
                          className: `flex shrink-0 items-center gap-3`,
                          children: [
                            (0, R.jsx)(Ie, {
                              className: `whitespace-nowrap`,
                              children: (0, R.jsx)(g, {
                                id: `shareDialog.pendingApproval`,
                                defaultMessage: `Pending approval`,
                                description: `Status of a request waiting for the resource owner's approval to grant access`,
                              }),
                            }),
                            (0, R.jsx)(`span`, {
                              className: `text-sm text-tertiary`,
                              children: (0, R.jsx)(Je, { permission: r.requested_role ?? `viewer` }),
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
      ? ((kt = (0, R.jsx)(Ce, {
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
    i = new Set(),
    a;
  for (let o = 0; o < 20; o += 1) {
    t.throwIfAborted();
    let o = await r(
      e.kind === `page`
        ? T.safeGet(`/pages/{page_id}/access-requests/requested`, {
            parameters: { path: { page_id: e.id }, query: { cursor: a, limit: 100 } },
            signal: t,
          })
        : T.safeGet(`/spaces/v2/{space_id}/access-requests/requested`, {
            parameters: { path: { space_id: e.id }, query: { cursor: a, limit: 100 } },
            signal: t,
          }),
      t,
    );
    if ((t.throwIfAborted(), n.push(...o.requests), o.next_cursor == null)) return { ...o, requests: n };
    if (i.has(o.next_cursor)) throw Error(`access_request_cursor_repeated`);
    ((a = o.next_cursor), i.add(a));
  }
  throw Error(`access_request_pagination_limit_exceeded`);
}
async function pt(e, t, n, i) {
  i.throwIfAborted();
  let a = me(
    e,
    `access_request_command`,
    { resource_kind: t.kind, decision: `request_others`, completion_mode: `submitted` },
    i,
  );
  try {
    let e = await r(
      t.kind === `page`
        ? T.safePost(`/pages/{page_id}/access-requests/for-others`, {
            parameters: { path: { page_id: t.id } },
            requestBody: n,
            signal: i,
          })
        : T.safePost(`/spaces/v2/{space_id}/access-requests/for-others`, {
            parameters: { path: { space_id: t.id } },
            requestBody: n,
            signal: i,
          }),
      i,
    );
    return (i.throwIfAborted(), a(`success`), e);
  } finally {
    a(i.aborted ? `canceled` : `failure`);
  }
}
async function mt(e, t, n, i) {
  i.throwIfAborted();
  let a = me(
    e,
    `access_request_command`,
    { resource_kind: t.kind, decision: `request_self`, completion_mode: `submitted` },
    i,
  );
  try {
    let e = await r(
      t.kind === `page`
        ? T.safePost(`/pages/{page_id}/access-requests/for-self`, {
            parameters: { path: { page_id: t.id } },
            requestBody: n,
            signal: i,
          })
        : T.safePost(`/spaces/v2/{space_id}/access-requests/for-self`, {
            parameters: { path: { space_id: t.id } },
            requestBody: n,
            signal: i,
          }),
      i,
    );
    return (i.throwIfAborted(), a(`success`), e);
  } finally {
    a(i.aborted ? `canceled` : `failure`);
  }
}
var ht, L, R;
function z() {
  return (z = e(() => {
    ((ht = c()),
      h(),
      oe(),
      m(),
      f(),
      ie(),
      (L = a()),
      d(),
      x(),
      Pe(),
      ye(),
      Me(),
      Fe(),
      fe(),
      se(),
      o(),
      u(),
      Ge(),
      Xe(),
      ke(),
      $e(),
      Re(),
      M(),
      j(),
      v(),
      w(),
      i(),
      N(),
      k(),
      C(),
      _(),
      O(),
      Ye(),
      We(),
      qe(),
      D(),
      (R = s()));
  }))();
}
export { $e as i, z as n, Qe as r, et as t };
//# sourceMappingURL=request-share-dialog-76ce5c69e816.js.map
