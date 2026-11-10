const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./appgen-change-slug-dialog-a5bdbe6056c6.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./dialog-32b2bce467fc.js",
      "./use-workspace-users-2d1e66aa1ddc.js",
      "./profile-card-596b3632a9d9.js",
      "./profile-avatar-bc7371feb0c0.js",
      "./state-d01a5a96b9cf.js",
      "./avatar-b3af498c99de.js",
      "./tab-664b022c04a8.js",
      "./dialog-utils-21c4d759328d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  BL as a,
  Bst as o,
  D4 as s,
  DB as c,
  FBt as l,
  Gj as u,
  HFt as d,
  HO as f,
  IO as p,
  JO as m,
  Jx as h,
  KH as g,
  KO as _,
  KSt as v,
  LNt as y,
  LO as b,
  Lst as x,
  Mst as S,
  NO as C,
  NSt as w,
  O4 as T,
  O6 as E,
  OB as D,
  OFt as O,
  PBt as k,
  PO as A,
  Pit as j,
  QY as M,
  Qit as N,
  Qst as P,
  RO as ee,
  Rrt as F,
  Rst as te,
  SSt as I,
  TY as ne,
  USt as re,
  VL as ie,
  VRt as L,
  VSt as ae,
  Vrt as oe,
  WO as se,
  Wj as ce,
  Wnt as le,
  XOt as R,
  Y3 as z,
  YOt as ue,
  Yx as de,
  Z3 as B,
  ZSt as V,
  ZY as fe,
  cwt as pe,
  e6 as H,
  ew as me,
  gRt as U,
  iCt as he,
  iwt as W,
  jit as ge,
  jst as _e,
  kFt as ve,
  kRt as G,
  lk as ye,
  nB as be,
  nCt as xe,
  nQ as Se,
  okt as Ce,
  qO as we,
  qrt as Te,
  rB as Ee,
  sw as De,
  tCt as Oe,
  tQ as ke,
  tkt as K,
  uk as Ae,
  uw as je,
  vT as Me,
  vst as Ne,
  yT as Pe,
  yst as Fe,
  zO as Ie,
  zst as Le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as q,
  $_n as Re,
  A5n as ze,
  BI as Be,
  BRr as Ve,
  Bvn as J,
  Cjr as He,
  Cqt as Ue,
  D5n as We,
  Dqt as Ge,
  Dvn as Ke,
  EAr as qe,
  EV as Je,
  Evn as Ye,
  FP as Xe,
  GLn as Ze,
  IP as Qe,
  Mvn as $e,
  Nvn as et,
  Ovn as tt,
  Pvn as nt,
  QF as rt,
  RV as it,
  SSt as at,
  UI as ot,
  Uvn as st,
  VI as ct,
  Vvn as lt,
  XEn as ut,
  Xvn as dt,
  YEn as ft,
  Ydr as pt,
  Yvn as mt,
  ZLn as ht,
  _Ar as gt,
  _vn as _t,
  cA as vt,
  dCr as yt,
  eI as bt,
  gvn as xt,
  hvn as St,
  iRr as Ct,
  imr as wt,
  jV as Tt,
  jcn as Et,
  jvn as Dt,
  kV as Ot,
  mCr as kt,
  qLn as At,
  rmr as jt,
  rvn as Mt,
  sA as Nt,
  sRr as Pt,
  tvn as Ft,
  tyr as It,
  uAr as Lt,
  vvn as Rt,
  wAr as zt,
  wLr as Bt,
  wSt as Vt,
  wcn as Ht,
  wvn as Ut,
  xMr as Wt,
  xjr as Gt,
  yMr as Kt,
  zRr as qt,
  zvn as Jt,
} from "./app-initial-ad16eaadf81f.js";
import { Em as Yt, Tm as Xt } from "./app-primary-3e00728c2a4c.js";
import {
  g as Zt,
  h as Qt,
  m as $t,
  n as en,
  p as tn,
  t as nn,
} from "./appgen-site-detail-layout-8ded3439c229.js";
import { a as rn, i as an, o as on, t as sn } from "./appgen-access-state-messages-dd6b2c460774.js";
import { n as cn, t as ln } from "./open-appgen-share-dialog-ccbe887b06fc.js";
import { n as un, t as dn } from "./sites-share-query-f94060562c21.js";
import { n as fn, t as pn } from "./settings-rows-ddb669c33599.js";
import { i as mn, n as hn, o as gn, r as _n, t as vn } from "./site-delete-confirmation-ef0a116df40a.js";
function yn(e) {
  let t = (0, xn.c)(21),
    { projectId: n } = e,
    r = ae(),
    i = re(),
    a,
    o;
  if (t[0] !== r || t[1] !== n) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new URLSearchParams(r.search),
        i;
      if (
        (t[4] === r.state
          ? (i = t[5])
          : ((i = Cn.safeParse(r.state).data ?? {}), (t[4] = r.state), (t[5] = i)),
        (a = i),
        e.has(`sites_access_request_token`))
      ) {
        let i = zt(e);
        (e.delete(Lt), e.delete(`account_id`));
        let s = { ...r, search: e.toString() },
          c = i == null ? void 0 : { projectId: n, token: i },
          l;
        t[6] !== a || t[7] !== c
          ? ((l = { ...a, sitesAccessRequest: c }), (t[6] = a), (t[7] = c), (t[8] = l))
          : (l = t[8]);
        let u;
        (t[9] !== s || t[10] !== l
          ? ((u = (0, Y.jsx)(I, { replace: !0, to: s, state: l })), (t[9] = s), (t[10] = l), (t[11] = u))
          : (u = t[11]),
          (o = u));
        break bb0;
      }
    }
    ((t[0] = r), (t[1] = n), (t[2] = a), (t[3] = o));
  } else ((a = t[2]), (o = t[3]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s = a.sitesAccessRequest;
  if (s == null || s.projectId !== n) return null;
  let c = `${n}:${s.token}`,
    l;
  t[12] !== r || t[13] !== i || t[14] !== a
    ? ((l = () => {
        let { sitesAccessRequest: e, ...t } = a;
        i(r, { replace: !0, state: t });
      }),
      (t[12] = r),
      (t[13] = i),
      (t[14] = a),
      (t[15] = l))
    : (l = t[15]);
  let u;
  return (
    t[16] !== n || t[17] !== s.token || t[18] !== c || t[19] !== l
      ? ((u = (0, Y.jsx)(bn, { projectId: n, token: s.token, onClose: l }, c)),
        (t[16] = n),
        (t[17] = s.token),
        (t[18] = c),
        (t[19] = l),
        (t[20] = u))
      : (u = t[20]),
    u
  );
}
function bn(e) {
  let t = (0, xn.c)(90),
    { projectId: n, token: i, onClose: a } = e,
    o = r(P),
    s = Ce(),
    c = te(),
    { accountId: l, userId: u } = wt(),
    d;
  t[0] !== l || t[1] !== n || t[2] !== i || t[3] !== u
    ? ((d = [`appgen`, `access-request`, u, l, n, i]),
      (t[0] = l),
      (t[1] = n),
      (t[2] = i),
      (t[3] = u),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== n || t[6] !== i
    ? ((f = (e) => {
        let { signal: t } = e;
        return Ct.safeGet(`/websites/{project_id}/access_request`, {
          parameters: { path: { project_id: n }, query: { token: i } },
          signal: t,
        });
      }),
      (t[5] = n),
      (t[6] = i),
      (t[7] = f))
    : (f = t[7]);
  let m;
  t[8] !== d || t[9] !== f
    ? ((m = { queryKey: d, queryFn: f, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
      (t[8] = d),
      (t[9] = f),
      (t[10] = m))
    : (m = t[10]);
  let { data: h, error: g, isError: v, isFetching: y, refetch: x } = S(m),
    C;
  t[11] === g
    ? (C = t[12])
    : ((C = g instanceof ge && [400, 403, 404, 410].includes(g.status)), (t[11] = g), (t[12] = C));
  let w = C,
    T = (0, Sn.useRef)(!1),
    E;
  t[13] !== s || t[14] !== a || t[15] !== o
    ? ((E = () => {
        T.current ||
          ((T.current = !0),
          o
            .get(Te)
            .danger(
              s.formatMessage({
                id: `appgenSettings.accessRequest.unavailable`,
                defaultMessage: `This access request is no longer available`,
                description: `Error toast after opening an expired, invalid, or unavailable Site access-request email link. Do not reveal whether the Site or requester exists.`,
              }),
              { errorAnalytics: { toastId: `sites_access_request_unavailable` } },
            ),
          a());
      }),
      (t[13] = s),
      (t[14] = a),
      (t[15] = o),
      (t[16] = E))
    : (E = t[16]);
  let D = (0, Sn.useEffectEvent)(E),
    O;
  t[17] !== w || t[18] !== D
    ? ((O = () => {
        w && D();
      }),
      (t[17] = w),
      (t[18] = D),
      (t[19] = O))
    : (O = t[19]);
  let k;
  (t[20] === w ? (k = t[21]) : ((k = [w]), (t[20] = w), (t[21] = k)), (0, Sn.useEffect)(O, k));
  let A;
  t[22] !== n || t[23] !== i
    ? ((A = () =>
        Ct.safePost(`/websites/{project_id}/access_request`, {
          parameters: { path: { project_id: n } },
          requestBody: { token: i },
        })),
      (t[22] = n),
      (t[23] = i),
      (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] !== c || t[26] !== n
    ? ((j = async () => {
        await Promise.all([J(c, [n]), c.invalidateQueries({ queryKey: [...dn, n] })]);
      }),
      (t[25] = c),
      (t[26] = n),
      (t[27] = j))
    : (j = t[27]);
  let M;
  t[28] !== A || t[29] !== j
    ? ((M = { mutationFn: A, onSuccess: j, retry: !1 }), (t[28] = A), (t[29] = j), (t[30] = M))
    : (M = t[30]);
  let { mutate: N, isPending: F } = Fe(M);
  if (v && !w) {
    let e;
    t[31] === a
      ? (e = t[32])
      : ((e = (e) => {
          e || a();
        }),
        (t[31] = a),
        (t[32] = e));
    let n;
    t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(ee, {
          title: (0, Y.jsx)(we, {
            children: (0, Y.jsx)(K, {
              id: `appgenSettings.accessRequest.loadError`,
              defaultMessage: `Unable to load access request`,
              description: `Title when loading a Site access request temporarily fails; the owner can retry without reopening the email`,
            }),
          }),
        })),
        (t[33] = n))
      : (n = t[33]);
    let r;
    t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(K, {
          id: `appgenSettings.accessRequest.notNow`,
          defaultMessage: `Not now`,
          description: `Dismiss a Site access request without approving or rejecting it.`,
        })),
        (t[34] = r))
      : (r = t[34]);
    let i;
    t[35] === a
      ? (i = t[36])
      : ((i = (0, Y.jsx)(z, { color: `secondary`, onClick: a, children: r })), (t[35] = a), (t[36] = i));
    let o;
    t[37] === x
      ? (o = t[38])
      : ((o = () => {
          x();
        }),
        (t[37] = x),
        (t[38] = o));
    let s;
    t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Y.jsx)(K, {
          id: `appgenSettings.accessRequest.retry`,
          defaultMessage: `Retry`,
          description: `Retry loading an emailed Site access request after a temporary failure`,
        })),
        (t[39] = s))
      : (s = t[39]);
    let c;
    t[40] !== y || t[41] !== o
      ? ((c = (0, Y.jsx)(z, { loading: y, disabled: y, onClick: o, children: s })),
        (t[40] = y),
        (t[41] = o),
        (t[42] = c))
      : (c = t[42]);
    let l;
    t[43] !== i || t[44] !== c
      ? ((l = (0, Y.jsxs)(p, { children: [n, (0, Y.jsxs)(b, { children: [i, c] })] })),
        (t[43] = i),
        (t[44] = c),
        (t[45] = l))
      : (l = t[45]);
    let u;
    return (
      t[46] !== e || t[47] !== l
        ? ((u = (0, Y.jsx)(se, { open: !0, size: `compact`, onOpenChange: e, children: l })),
          (t[46] = e),
          (t[47] = l),
          (t[48] = u))
        : (u = t[48]),
      u
    );
  }
  if (h == null || w) return null;
  let I = !F,
    ne;
  t[49] !== F || t[50] !== a
    ? ((ne = (e) => {
        !e && !F && a();
      }),
      (t[49] = F),
      (t[50] = a),
      (t[51] = ne))
    : (ne = t[51]);
  let re;
  t[52] !== N || t[53] !== s || t[54] !== F || t[55] !== a || t[56] !== n || t[57] !== o
    ? ((re = (e) => {
        (e.preventDefault(),
          !F &&
            N(void 0, {
              onSuccess: (e) => {
                (a(),
                  cn(o, n, {
                    initialIsOwner: !0,
                    initialProjectTitle: e.project_title,
                    source: le.CODEX_SITES_SHARING_SOURCE_SETTINGS,
                  }),
                  o
                    .get(Te)
                    .success(
                      s.formatMessage(
                        {
                          id: `appgenSettings.accessRequest.approved`,
                          defaultMessage: `{requesterName} can now view this site`,
                          description: `Success toast after a Site owner approves an emailed view-access request. requesterName is the requester's display name.`,
                        },
                        { requesterName: e.requester_name },
                      ),
                    ));
              },
              onError: () =>
                o
                  .get(Te)
                  .danger(
                    s.formatMessage({
                      id: `appgenSettings.accessRequest.approveError`,
                      defaultMessage: `Unable to allow access`,
                      description: `Error toast when approving a Site view-access request fails. The owner can retry from the open dialog.`,
                    }),
                    { errorAnalytics: { toastId: `sites_access_request_approve_error` } },
                  ),
            }));
      }),
      (t[52] = N),
      (t[53] = s),
      (t[54] = F),
      (t[55] = a),
      (t[56] = n),
      (t[57] = o),
      (t[58] = re))
    : (re = t[58]);
  let ie;
  t[59] === h.requester_name
    ? (ie = t[60])
    : ((ie = h.requester_name.trim()), (t[59] = h.requester_name), (t[60] = ie));
  let L;
  t[61] === ie
    ? (L = t[62])
    : ((L = (0, Y.jsx)(we, {
        children: (0, Y.jsx)(K, {
          id: `appgenSettings.accessRequest.title`,
          defaultMessage: `{requesterName} wants to view`,
          description: `Title of the Site access-request review dialog opened from an email. requesterName is the name of the person asking to view the Site.`,
          values: { requesterName: ie },
        }),
      })),
      (t[61] = ie),
      (t[62] = L));
  let ae = h.requester_email,
    oe;
  t[63] === h.project_title
    ? (oe = t[64])
    : ((oe = h.project_title.trim()), (t[63] = h.project_title), (t[64] = oe));
  let ce;
  t[65] !== h.requester_email || t[66] !== oe
    ? ((ce = (0, Y.jsx)(_, {
        children: (0, Y.jsx)(K, {
          id: `appgenSettings.accessRequest.description`,
          defaultMessage: `Allow {requesterEmail} to view {projectTitle}?`,
          description: `Confirmation in the Site access-request dialog. requesterEmail identifies the person asking for viewer access; projectTitle is the Site's title.`,
          values: { requesterEmail: ae, projectTitle: oe },
        }),
      })),
      (t[65] = h.requester_email),
      (t[66] = oe),
      (t[67] = ce))
    : (ce = t[67]);
  let R;
  t[68] !== L || t[69] !== ce
    ? ((R = (0, Y.jsx)(ee, { title: L, subtitle: ce })), (t[68] = L), (t[69] = ce), (t[70] = R))
    : (R = t[70]);
  let ue;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Y.jsx)(K, {
        id: `appgenSettings.accessRequest.notNow`,
        defaultMessage: `Not now`,
        description: `Dismiss a Site access request without approving or rejecting it.`,
      })),
      (t[71] = ue))
    : (ue = t[71]);
  let de;
  t[72] !== F || t[73] !== a
    ? ((de = (0, Y.jsx)(z, { color: `secondary`, type: `button`, disabled: F, onClick: a, children: ue })),
      (t[72] = F),
      (t[73] = a),
      (t[74] = de))
    : (de = t[74]);
  let B;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Y.jsx)(K, {
        id: `appgenSettings.accessRequest.allow`,
        defaultMessage: `Allow access`,
        description: `Approve the pending request to view this Site.`,
      })),
      (t[75] = B))
    : (B = t[75]);
  let V;
  t[76] === F
    ? (V = t[77])
    : ((V = (0, Y.jsx)(z, { type: `submit`, loading: F, disabled: F, children: B })),
      (t[76] = F),
      (t[77] = V));
  let fe;
  t[78] !== de || t[79] !== V
    ? ((fe = (0, Y.jsxs)(b, { children: [de, V] })), (t[78] = de), (t[79] = V), (t[80] = fe))
    : (fe = t[80]);
  let pe;
  t[81] !== re || t[82] !== R || t[83] !== fe
    ? ((pe = (0, Y.jsxs)(p, { as: `form`, className: `gap-4 px-4 py-3`, onSubmit: re, children: [R, fe] })),
      (t[81] = re),
      (t[82] = R),
      (t[83] = fe),
      (t[84] = pe))
    : (pe = t[84]);
  let H;
  return (
    t[85] !== F || t[86] !== I || t[87] !== ne || t[88] !== pe
      ? ((H = (0, Y.jsx)(se, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: F,
          showDialogClose: I,
          onOpenChange: ne,
          children: pe,
        })),
        (t[85] = F),
        (t[86] = I),
        (t[87] = ne),
        (t[88] = pe),
        (t[89] = H))
      : (H = t[89]),
    H
  );
}
var xn, Sn, Y, Cn;
function wn() {
  return (wn = e(() => {
    ((xn = k()),
      F(),
      Ne(),
      _e(),
      x(),
      V(),
      (Sn = l()),
      R(),
      w(),
      d(),
      jt(),
      It(),
      B(),
      m(),
      f(),
      oe(),
      i(),
      j(),
      Jt(),
      qe(),
      ln(),
      un(),
      (Y = y()),
      (Cn = U({ sitesAccessRequest: G({ projectId: L(), token: L().trim().min(1).max(4096) }).optional() })));
  }))();
}
function Tn(e) {
  let n = (0, In.c)(27),
    { customDomains: i, isAvailable: a, isError: o, isLoading: s, onRetry: c, projectId: l } = e,
    u = a === void 0 || a,
    d = r(P),
    f = Ce(),
    p = (0, Ln.useRef)(null),
    [m, h] = (0, Ln.useState)(null),
    g;
  n[0] === i?.items ? (g = n[1]) : ((g = i?.items ?? []), (n[0] = i?.items), (n[1] = g));
  let _ = g,
    v = i != null && !o && _.length === 0,
    y,
    b;
  (n[2] === m
    ? ((y = n[3]), (b = n[4]))
    : ((y = () => {
        m != null && p.current?.focus();
      }),
      (b = [m]),
      (n[2] = m),
      (n[3] = y),
      (n[4] = b)),
    (0, Ln.useLayoutEffect)(y, b));
  let x;
  n[5] === c
    ? (x = n[6])
    : ((x = async function () {
        h(`pending`);
        try {
          h(await c());
        } catch {
          h(`error`);
        }
      }),
      (n[5] = c),
      (n[6] = x));
  let S = x,
    C = null;
  if (m === `pending`) {
    let e;
    (n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.loading.description`,
          defaultMessage: `Loading custom domains`,
          description: `Loading text for custom domain settings`,
        })),
        (n[7] = e))
      : (e = n[7]),
      (C = e));
  } else if (m === `error`) {
    let e;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.error.description`,
          defaultMessage: `Unable to load custom domains`,
          description: `Error text when custom domains fail to load`,
        })),
        (n[8] = e))
      : (e = n[8]),
      (C = e));
  } else if (m === `success`) {
    let e;
    (n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.retry.success`,
          defaultMessage: `Custom domains loaded`,
          description: `Screen-reader announcement after custom domains load successfully following a retry`,
        })),
        (n[9] = e))
      : (e = n[9]),
      (C = e));
  } else if (m === `unavailable`) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.retry.unavailable`,
          defaultMessage: `Custom domains aren’t available`,
          description: `Screen-reader announcement when a retry confirms custom domains are unavailable`,
        })),
        (n[10] = e))
      : (e = n[10]),
      (C = e));
  }
  let w;
  n[11] !== m || n[12] !== C
    ? ((w =
        m == null
          ? null
          : (0, X.jsx)(`span`, {
              "aria-atomic": `true`,
              "aria-live": `polite`,
              className: `sr-only`,
              role: `status`,
              children: C,
            })),
      (n[11] = m),
      (n[12] = C),
      (n[13] = w))
    : (w = n[13]);
  let T;
  n[14] !== v ||
  n[15] !== _ ||
  n[16] !== S ||
  n[17] !== f ||
  n[18] !== u ||
  n[19] !== o ||
  n[20] !== s ||
  n[21] !== l ||
  n[22] !== d
    ? ((T = u
        ? (0, X.jsx)(`div`, {
            "aria-label": f.formatMessage({
              id: `appgenSettings.customDomains.row.label`,
              defaultMessage: `Custom domain`,
              description: `Row label for the Site custom-domain control`,
            }),
            ref: p,
            role: `group`,
            tabIndex: -1,
            children: s
              ? (0, X.jsx)(De, {
                  labelWeight: `normal`,
                  layout: `split`,
                  label: (0, X.jsx)(K, {
                    id: `appgenSettings.customDomains.row.label`,
                    defaultMessage: `Custom domain`,
                    description: `Row label for the Site custom-domain control`,
                  }),
                  description: (0, X.jsx)(K, {
                    id: `appgenSettings.customDomains.loading.description`,
                    defaultMessage: `Loading custom domains`,
                    description: `Loading text for custom domain settings`,
                  }),
                  control: (0, X.jsx)(t, { className: `icon-xs` }),
                })
              : o
                ? (0, X.jsx)(De, {
                    labelWeight: `normal`,
                    layout: `split`,
                    label: (0, X.jsx)(K, {
                      id: `appgenSettings.customDomains.row.label`,
                      defaultMessage: `Custom domain`,
                      description: `Row label for the Site custom-domain control`,
                    }),
                    description: (0, X.jsx)(K, {
                      id: `appgenSettings.customDomains.error.description`,
                      defaultMessage: `Unable to load custom domains`,
                      description: `Error text when custom domains fail to load`,
                    }),
                    control: (0, X.jsx)(z, {
                      color: `outlineSurface`,
                      size: `toolbar`,
                      type: `button`,
                      onClick: () => void S(),
                      children: (0, X.jsx)(K, {
                        id: `appgenSettings.customDomains.error.retry`,
                        defaultMessage: `Retry`,
                        description: `Button to retry loading a Site's custom domains after a load failure`,
                      }),
                    }),
                  })
                : _.length === 0
                  ? (0, X.jsx)(De, {
                      labelWeight: `normal`,
                      layout: `split`,
                      label: (0, X.jsx)(K, {
                        id: `appgenSettings.customDomains.row.label`,
                        defaultMessage: `Custom domain`,
                        description: `Row label for the Site custom-domain control`,
                      }),
                      control: v
                        ? (0, X.jsx)(z, {
                            color: `outlineSurface`,
                            size: `toolbar`,
                            onClick: () => {
                              (Ot(d, l, `add`), ze(d, An, { projectId: l }));
                            },
                            children: (0, X.jsx)(K, {
                              id: `appgenSettings.customDomains.add`,
                              defaultMessage: `Add custom domain`,
                              description: `Button label for adding a custom domain to a site`,
                            }),
                          })
                        : null,
                    })
                  : (0, X.jsx)(pn, {
                      dividerInset: `none`,
                      children: _.map((e) => (0, X.jsx)(En, { customDomain: e, projectId: l }, e.id)),
                    }),
          })
        : null),
      (n[14] = v),
      (n[15] = _),
      (n[16] = S),
      (n[17] = f),
      (n[18] = u),
      (n[19] = o),
      (n[20] = s),
      (n[21] = l),
      (n[22] = d),
      (n[23] = T))
    : (T = n[23]);
  let E;
  return (
    n[24] !== w || n[25] !== T
      ? ((E = (0, X.jsxs)(X.Fragment, { children: [w, T] })), (n[24] = w), (n[25] = T), (n[26] = E))
      : (E = n[26]),
    E
  );
}
function En(e) {
  let n = (0, In.c)(41),
    { customDomain: i, projectId: a } = e,
    o = r(P),
    l = Ce(),
    u = xe(Dt, a),
    d = xe($e, a),
    f = u.isPending || d.isPending,
    p;
  n[0] !== l || n[1] !== o
    ? ((p = function () {
        o.get(Te).danger(
          l.formatMessage({
            id: `appgenSettings.customDomains.refresh.error`,
            defaultMessage: `Unable to refresh domain status`,
            description: `Error toast shown when custom domain refresh fails`,
          }),
          { errorAnalytics: { toastId: `sites_settings_custom_domain_refresh_error` } },
        );
      }),
      (n[0] = l),
      (n[1] = o),
      (n[2] = p))
    : (p = n[2]);
  let m = p,
    h = i.status === `active`,
    _;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(K, {
        id: `appgenSettings.customDomains.row.label`,
        defaultMessage: `Custom domain`,
        description: `Row label for the Site custom-domain control`,
      })),
      (n[3] = _))
    : (_ = n[3]);
  let v;
  n[4] === i.hostname
    ? (v = n[5])
    : ((v = (0, X.jsx)(`div`, { className: `max-w-60 truncate text-sm text-default`, children: i.hostname })),
      (n[4] = i.hostname),
      (n[5] = v));
  let y;
  n[6] === i.status
    ? (y = n[7])
    : ((y =
        i.status === `pending`
          ? (0, X.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-1 text-xs text-secondary`,
              children: [
                (0, X.jsx)(g, { "aria-hidden": !0 }),
                (0, X.jsx)(`span`, {
                  className: `truncate`,
                  children: (0, X.jsx)(K, {
                    id: `appgenSettings.customDomains.pending.description`,
                    defaultMessage: `Pending DNS changes. May take 24h to reflect.`,
                    description: `Status copy for a custom domain waiting on DNS changes`,
                  }),
                }),
              ],
            })
          : i.status === `failed`
            ? (0, X.jsxs)(`div`, {
                className: `flex items-center gap-1 text-xs text-chart-red`,
                children: [
                  (0, X.jsx)(c, { className: `shrink-0`, asset: Me }),
                  (0, X.jsx)(K, {
                    id: `appgenSettings.customDomains.failed.description`,
                    defaultMessage: `DNS setup failed. Review your records.`,
                    description: `Status copy for a custom domain with failed DNS verification`,
                  }),
                ],
              })
            : null),
      (n[6] = i.status),
      (n[7] = y));
  let b;
  n[8] === i.last_error
    ? (b = n[9])
    : ((b =
        i.last_error == null
          ? null
          : (0, X.jsx)(`div`, {
              className: `max-w-80 text-xs wrap-anywhere text-chart-red`,
              children: (0, X.jsx)(K, {
                id: `appgenSettings.customDomains.lastError`,
                defaultMessage: `Last error: {message}`,
                description: `Last provider error shown for a custom domain`,
                values: { message: i.last_error },
              }),
            })),
      (n[8] = i.last_error),
      (n[9] = b));
  let x;
  n[10] !== v || n[11] !== y || n[12] !== b
    ? ((x = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-col items-end gap-0.5 text-end`,
        children: [v, y, b],
      })),
      (n[10] = v),
      (n[11] = y),
      (n[12] = b),
      (n[13] = x))
    : (x = n[13]);
  let S;
  n[14] !== i ||
  n[15] !== l ||
  n[16] !== h ||
  n[17] !== f ||
  n[18] !== a ||
  n[19] !== u ||
  n[20] !== o ||
  n[21] !== m
    ? ((S = h
        ? null
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(z, {
                "aria-label": l.formatMessage(
                  {
                    id: `appgenSettings.customDomains.setup.ariaLabel`,
                    defaultMessage: `View DNS setup for {hostname}`,
                    description: `Accessible label for reopening custom domain DNS setup`,
                  },
                  { hostname: i.hostname },
                ),
                color: `ghost`,
                disabled: f,
                size: `icon`,
                onClick: () => {
                  ze(o, Dn, { customDomain: i });
                },
                children: (0, X.jsx)(c, { asset: Me }),
              }),
              (0, X.jsx)(z, {
                "aria-label": l.formatMessage(
                  {
                    id: `appgenSettings.customDomains.refresh.ariaLabel`,
                    defaultMessage: `Refresh {hostname} status`,
                    description: `Accessible label for refreshing a custom domain status`,
                  },
                  { hostname: i.hostname },
                ),
                color: `ghost`,
                disabled: f,
                size: `icon`,
                onClick: () => {
                  let e = i.status,
                    t = Tt(o, a, it.CHATGPT_SITES_OPERATION_TYPE_CUSTOM_DOMAIN_REFRESH, {
                      previousStatus: e,
                    });
                  u.mutateAsync(i.id).then(
                    (n) => {
                      t.succeeded({ previousStatus: e, status: n.status });
                    },
                    () => {
                      (t.failed({ previousStatus: e }), m());
                    },
                  );
                },
                children: u.isPending ? (0, X.jsx)(t, { className: `icon-xs` }) : (0, X.jsx)(c, { asset: s }),
              }),
            ],
          })),
      (n[14] = i),
      (n[15] = l),
      (n[16] = h),
      (n[17] = f),
      (n[18] = a),
      (n[19] = u),
      (n[20] = o),
      (n[21] = m),
      (n[22] = S))
    : (S = n[22]);
  let C;
  n[23] !== i.hostname || n[24] !== l
    ? ((C = l.formatMessage(
        {
          id: `appgenSettings.customDomains.remove.ariaLabel`,
          defaultMessage: `Remove {hostname}`,
          description: `Accessible label for removing a custom domain`,
        },
        { hostname: i.hostname },
      )),
      (n[23] = i.hostname),
      (n[24] = l),
      (n[25] = C))
    : (C = n[25]);
  let w;
  n[26] !== i || n[27] !== a || n[28] !== o
    ? ((w = () => {
        (Ot(o, a, `remove`), ze(o, jn, { customDomain: i, projectId: a }));
      }),
      (n[26] = i),
      (n[27] = a),
      (n[28] = o),
      (n[29] = w))
    : (w = n[29]);
  let T;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(c, { asset: M })), (n[30] = T))
    : (T = n[30]);
  let E;
  n[31] !== f || n[32] !== C || n[33] !== w
    ? ((E = (0, X.jsx)(z, {
        "aria-label": C,
        color: `ghost`,
        disabled: f,
        size: `icon`,
        onClick: w,
        children: T,
      })),
      (n[31] = f),
      (n[32] = C),
      (n[33] = w),
      (n[34] = E))
    : (E = n[34]);
  let D;
  n[35] !== E || n[36] !== S
    ? ((D = (0, X.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [S, E] })),
      (n[35] = E),
      (n[36] = S),
      (n[37] = D))
    : (D = n[37]);
  let O;
  return (
    n[38] !== D || n[39] !== x
      ? ((O = (0, X.jsx)(De, {
          labelWeight: `normal`,
          layout: `split`,
          label: _,
          control: (0, X.jsxs)(`div`, { className: `flex min-w-0 items-center gap-3`, children: [x, D] }),
        })),
        (n[38] = D),
        (n[39] = x),
        (n[40] = O))
      : (O = n[40]),
    O
  );
}
function Dn(e) {
  let t = (0, In.c)(30),
    { customDomain: n, onClose: r } = e,
    i = Ce(),
    a = Ge(),
    o,
    s;
  t[0] !== n || t[1] !== i
    ? ((o = Mn(n)),
      (s = at({
        defaultPrompt: i.formatMessage(
          {
            id: `appgenSettings.customDomains.setupDialog.askChatGptPrompt`,
            defaultMessage: `Help me register {hostname} as the custom domain for my site by adding these DNS records at my domain provider. Use the in-app browser if needed.
{dnsRecords}`,
            description: `Prefilled prompt for a new Sites thread opened from custom-domain DNS setup. It asks Sites to help finish registration at the user's domain provider, using the in-app browser when useful. {hostname} is the exact custom hostname and {dnsRecords} is a newline-separated list of DNS record type, host name, and value.`,
          },
          { dnsRecords: On(o), hostname: n.hostname },
        ),
        pluginDisplayName: `Sites`,
        pluginId: yt,
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s))
    : ((o = t[2]), (s = t[3]));
  let c = s,
    l;
  t[4] === i
    ? (l = t[5])
    : ((l = i.formatMessage({
        id: `appgenSettings.customDomains.setupDialog.close`,
        defaultMessage: `Close custom domain setup`,
        description: `Accessible label for closing the custom domain DNS setup dialog`,
      })),
      (t[4] = i),
      (t[5] = l));
  let u;
  t[6] === r
    ? (u = t[7])
    : ((u = (e) => {
        e || r();
      }),
      (t[6] = r),
      (t[7] = u));
  let d;
  t[8] === r
    ? (d = t[9])
    : ((d = (e) => {
        (e.preventDefault(), r());
      }),
      (t[8] = r),
      (t[9] = d));
  let f;
  t[10] === n.hostname
    ? (f = t[11])
    : ((f = (0, X.jsx)(we, {
        className: `contents`,
        children: (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.setupDialog.title`,
          defaultMessage: `Complete setup for {hostname}`,
          description: `Title for custom domain DNS setup dialog`,
          values: { hostname: n.hostname },
        }),
      })),
      (t[10] = n.hostname),
      (t[11] = f));
  let m;
  t[12] !== c || t[13] !== r || t[14] !== a
    ? ((m = (0, X.jsx)(_, {
        className: `contents`,
        children: (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.setupDialog.description`,
          defaultMessage: `Complete your custom domain by copying these values and paste them into the DNS settings at your domain provider. You can also <chatgptLink>ask ChatGPT</chatgptLink> to do it.`,
          description: `Instructions for completing custom domain DNS setup`,
          values: {
            chatgptLink: (e) =>
              (0, X.jsx)(
                `button`,
                {
                  className: `cursor-interaction border-0 bg-transparent p-0 underline decoration-dotted underline-offset-2`,
                  type: `button`,
                  onClick: () => {
                    (r(), a({ activeProject: null, prefillPrompt: c, startInSidebar: !0 }));
                  },
                  children: e,
                },
                `chatgpt-link`,
              ),
          },
        }),
      })),
      (t[12] = c),
      (t[13] = r),
      (t[14] = a),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] !== f || t[17] !== m
    ? ((h = (0, X.jsx)(ee, {
        title: f,
        titleClassName: `truncate pe-8 font-medium`,
        titleSize: `base`,
        subtitle: m,
        subtitleSize: `base`,
        subtitleTone: `secondary`,
        subtitleClassName: `leading-5`,
      })),
      (t[16] = f),
      (t[17] = m),
      (t[18] = h))
    : (h = t[18]);
  let g;
  t[19] === o
    ? (g = t[20])
    : ((g = (0, X.jsx)(Ie, { children: (0, X.jsx)(kn, { records: o }) })), (t[19] = o), (t[20] = g));
  let v;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(Ie, {
        children: (0, X.jsx)(b, {
          expandSingleButton: !1,
          children: (0, X.jsx)(z, {
            type: `submit`,
            children: (0, X.jsx)(K, {
              id: `appgenSettings.customDomains.setupDialog.complete`,
              defaultMessage: `I have added the records at my provider`,
              description: `Button label for completing custom domain DNS setup`,
            }),
          }),
        }),
      })),
      (t[21] = v))
    : (v = t[21]);
  let y;
  t[22] !== d || t[23] !== h || t[24] !== g
    ? ((y = (0, X.jsxs)(p, { as: `form`, className: `gap-3 px-4 py-4`, onSubmit: d, children: [h, g, v] })),
      (t[22] = d),
      (t[23] = h),
      (t[24] = g),
      (t[25] = y))
    : (y = t[25]);
  let x;
  return (
    t[26] !== y || t[27] !== l || t[28] !== u
      ? ((x = (0, X.jsx)(se, {
          dialogCloseLabel: l,
          open: !0,
          size: `default`,
          onOpenChange: u,
          children: y,
        })),
        (t[26] = y),
        (t[27] = l),
        (t[28] = u),
        (t[29] = x))
      : (x = t[29]),
    x
  );
}
function On(e) {
  return e.map((e) => [e.type, e.name, e.value].join(` `)).join(`
`);
}
function kn(e) {
  let t = (0, In.c)(11),
    { records: n } = e,
    r = Ce();
  if (n.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsxs)(`colgroup`, {
        className: `max-sm:hidden`,
        children: [
          (0, X.jsx)(`col`, { className: `w-[72px]` }),
          (0, X.jsx)(`col`, { className: `w-[40%]` }),
          (0, X.jsx)(`col`, {}),
        ],
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(`th`, {
        className: `px-0 py-1 text-start font-normal`,
        scope: `col`,
        children: (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.dns.type`,
          defaultMessage: `Type`,
          description: `DNS record table type column`,
        }),
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(`th`, {
        className: `px-0 py-1 text-start font-normal`,
        scope: `col`,
        children: (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.dns.hostname`,
          defaultMessage: `Host name`,
          description: `DNS record table host name column`,
        }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(`thead`, {
        className: `max-sm:sr-only`,
        children: (0, X.jsxs)(`tr`, {
          className: `h-7 border-b border-default text-sm font-normal text-tertiary`,
          children: [
            a,
            o,
            (0, X.jsx)(`th`, {
              className: `px-0 py-1 text-start font-normal`,
              scope: `col`,
              children: (0, X.jsx)(K, {
                id: `appgenSettings.customDomains.dns.value`,
                defaultMessage: `Value`,
                description: `DNS record table value column`,
              }),
            }),
          ],
        }),
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  if (t[4] !== r || t[5] !== n) {
    let e;
    (t[7] === r
      ? (e = t[8])
      : ((e = (e) =>
          (0, X.jsxs)(
            `tr`,
            {
              className: `h-7 border-b border-default text-sm text-default last:border-b-0 max-sm:block`,
              children: [
                (0, X.jsx)(`td`, { className: `px-0 py-1 text-secondary max-sm:hidden`, children: e.type }),
                (0, X.jsx)(`td`, {
                  className: `px-0 py-1 max-sm:block`,
                  children: (0, X.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-between gap-2`,
                    children: [
                      (0, X.jsx)(`span`, {
                        className: `me-1 hidden text-tertiary max-sm:inline`,
                        children: e.type,
                      }),
                      (0, X.jsx)(`div`, { className: `min-w-0 truncate`, children: e.name }),
                      (0, X.jsx)(h, {
                        ariaLabel: r.formatMessage(
                          {
                            id: `appgenSettings.customDomains.dns.copyHostname`,
                            defaultMessage: `Copy {type} DNS host name for {name}`,
                            description: `Accessible label for copying one DNS record host name. {type} is the DNS record type and {name} is the record host name.`,
                          },
                          { name: e.name, type: e.type },
                        ),
                        buttonText: !0,
                        className: `h-auto shrink-0 rounded-full! border! border-default! px-2 py-0.5 text-sm text-default`,
                        showIcon: !1,
                        onCopy: (t) => C(e.name, t),
                      }),
                    ],
                  }),
                }),
                (0, X.jsx)(`td`, {
                  className: `px-0 py-1 max-sm:block`,
                  children: (0, X.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-between gap-2`,
                    children: [
                      (0, X.jsx)(`div`, { className: `min-w-0 truncate`, children: e.value }),
                      (0, X.jsx)(h, {
                        ariaLabel: r.formatMessage(
                          {
                            id: `appgenSettings.customDomains.dns.copyValueForRecord`,
                            defaultMessage: `Copy {type} DNS value for {name}`,
                            description: `Accessible label for copying one DNS record value. {type} is the DNS record type and {name} is the record host name.`,
                          },
                          { name: e.name, type: e.type },
                        ),
                        buttonText: !0,
                        className: `h-auto shrink-0 rounded-full! border! border-default! px-2 py-0.5 text-sm text-default`,
                        showIcon: !1,
                        onCopy: (t) => C(e.value, t),
                      }),
                    ],
                  }),
                }),
              ],
            },
            e.id,
          )),
        (t[7] = r),
        (t[8] = e)),
      (c = n.map(e)),
      (t[4] = r),
      (t[5] = n),
      (t[6] = c));
  } else c = t[6];
  let l;
  return (
    t[9] === c
      ? (l = t[10])
      : ((l = (0, X.jsx)(`div`, {
          className: `overflow-hidden`,
          children: (0, X.jsxs)(`table`, {
            className: `w-full table-fixed border-collapse`,
            children: [i, s, (0, X.jsx)(`tbody`, { children: c })],
          }),
        })),
        (t[9] = c),
        (t[10] = l)),
    l
  );
}
function An(e) {
  let t = (0, In.c)(51),
    { onClose: n, projectId: i } = e,
    a = r(P),
    o = xe(Ut, i),
    s = Ce(),
    [c, l] = (0, Ln.useState)(``),
    [u, d] = (0, Ln.useState)(null),
    f;
  t[0] === c ? (f = t[1]) : ((f = c.trim()), (t[0] = c), (t[1] = f));
  let m = f,
    h = m.length === 0 || o.isPending,
    g;
  t[2] !== s || t[3] !== a
    ? ((g = function (e) {
        a.get(Te).danger(
          s.formatMessage({
            id: `appgenSettings.customDomains.addDialog.error`,
            defaultMessage: `Unable to add domain`,
            description: `Error toast shown when adding a custom domain fails`,
          }),
          {
            description: lt(e)
              ? (0, X.jsx)(K, {
                  id: `appgenSettings.customDomains.addDialog.publishRequired`,
                  defaultMessage: `Publish this site before adding a custom domain`,
                  description: `Guidance shown when adding a custom domain fails because the Site has not been published yet`,
                })
              : void 0,
            errorAnalytics: { toastId: `sites_settings_custom_domain_add_error` },
          },
        );
      }),
      (t[2] = s),
      (t[3] = a),
      (t[4] = g))
    : (g = t[4]);
  let v = g;
  if (u != null) {
    let e;
    return (
      t[5] !== u || t[6] !== n
        ? ((e = (0, X.jsx)(Dn, { customDomain: u, onClose: n })), (t[5] = u), (t[6] = n), (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let y = o.isPending,
    x = !o.isPending,
    S;
  t[8] !== o.isPending || t[9] !== n
    ? ((S = (e) => {
        !e && !o.isPending && n();
      }),
      (t[8] = o.isPending),
      (t[9] = n),
      (t[10] = S))
    : (S = t[10]);
  let C;
  t[11] !== o || t[12] !== h || t[13] !== i || t[14] !== a || t[15] !== v || t[16] !== m
    ? ((C = (e) => {
        if ((e.preventDefault(), h)) return;
        let t = Tt(a, i, it.CHATGPT_SITES_OPERATION_TYPE_CUSTOM_DOMAIN_ADD);
        o.mutateAsync({ hostname: m }).then(
          (e) => {
            (t.succeeded({ status: e.status }), d(e));
          },
          (e) => {
            (t.failed(), v(e));
          },
        );
      }),
      (t[11] = o),
      (t[12] = h),
      (t[13] = i),
      (t[14] = a),
      (t[15] = v),
      (t[16] = m),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(we, {
        className: `contents`,
        children: (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.addDialog.title`,
          defaultMessage: `Add custom domain`,
          description: `Title for custom domain add dialog`,
        }),
      })),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(ee, {
        title: w,
        titleClassName: `truncate pe-8`,
        subtitle: (0, X.jsx)(_, {
          className: `contents`,
          children: (0, X.jsx)(K, {
            id: `appgenSettings.customDomains.addDialog.description`,
            defaultMessage: `To use this feature, you need to own a domain and be able to manage its DNS records`,
            description: `Description for custom domain add dialog`,
          }),
        }),
      })),
      (t[19] = T))
    : (T = t[19]);
  let E;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.addDialog.inputLabel`,
          defaultMessage: `Custom domain`,
          description: `Label for custom domain input`,
        }),
      })),
      (t[20] = E))
    : (E = t[20]);
  let D;
  t[21] === s
    ? (D = t[22])
    : ((D = s.formatMessage({
        id: `appgenSettings.customDomains.addDialog.inputAriaLabel`,
        defaultMessage: `Custom domain`,
        description: `Accessible label for custom domain input`,
      })),
      (t[21] = s),
      (t[22] = D));
  let O = o.isPending,
    k;
  t[23] === s
    ? (k = t[24])
    : ((k = s.formatMessage({
        id: `appgenSettings.customDomains.addDialog.placeholder`,
        defaultMessage: `www.example.com`,
        description: `Placeholder for custom domain input`,
      })),
      (t[23] = s),
      (t[24] = k));
  let A;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        l(e.target.value);
      }),
      (t[25] = A))
    : (A = t[25]);
  let j;
  t[26] !== o.isPending || t[27] !== c || t[28] !== D || t[29] !== k
    ? ((j = (0, X.jsx)(Ie, {
        children: (0, X.jsxs)(`label`, {
          className: `flex flex-col gap-1.5`,
          children: [
            E,
            (0, X.jsx)(ht, {
              variant: `code`,
              "aria-label": D,
              autoFocus: !0,
              disabled: O,
              placeholder: k,
              spellCheck: !1,
              type: `text`,
              value: c,
              onChange: A,
            }),
          ],
        }),
      })),
      (t[26] = o.isPending),
      (t[27] = c),
      (t[28] = D),
      (t[29] = k),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, X.jsx)(K, {
        id: `appgenSettings.customDomains.addDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom domain add dialog`,
      })),
      (t[31] = M))
    : (M = t[31]);
  let N;
  t[32] !== o.isPending || t[33] !== n
    ? ((N = (0, X.jsx)(z, {
        color: `ghost`,
        disabled: o.isPending,
        type: `button`,
        onClick: n,
        children: M,
      })),
      (t[32] = o.isPending),
      (t[33] = n),
      (t[34] = N))
    : (N = t[34]);
  let F;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(K, {
        id: `appgenSettings.customDomains.addDialog.submit`,
        defaultMessage: `Add domain`,
        description: `Submit button label for custom domain add dialog`,
      })),
      (t[35] = F))
    : (F = t[35]);
  let te;
  t[36] !== o.isPending || t[37] !== h
    ? ((te = (0, X.jsx)(z, { disabled: h, loading: o.isPending, type: `submit`, children: F })),
      (t[36] = o.isPending),
      (t[37] = h),
      (t[38] = te))
    : (te = t[38]);
  let I;
  t[39] !== N || t[40] !== te
    ? ((I = (0, X.jsx)(Ie, { children: (0, X.jsxs)(b, { children: [N, te] }) })),
      (t[39] = N),
      (t[40] = te),
      (t[41] = I))
    : (I = t[41]);
  let ne;
  t[42] !== j || t[43] !== I || t[44] !== C
    ? ((ne = (0, X.jsxs)(p, { as: `form`, className: `gap-4 px-4 py-3`, onSubmit: C, children: [T, j, I] })),
      (t[42] = j),
      (t[43] = I),
      (t[44] = C),
      (t[45] = ne))
    : (ne = t[45]);
  let re;
  return (
    t[46] !== o.isPending || t[47] !== ne || t[48] !== x || t[49] !== S
      ? ((re = (0, X.jsx)(se, {
          open: !0,
          shouldIgnoreClickOutside: y,
          showDialogClose: x,
          size: `compact`,
          onOpenChange: S,
          children: ne,
        })),
        (t[46] = o.isPending),
        (t[47] = ne),
        (t[48] = x),
        (t[49] = S),
        (t[50] = re))
      : (re = t[50]),
    re
  );
}
function jn(e) {
  let t = (0, In.c)(38),
    { customDomain: n, onClose: i, projectId: a } = e,
    o = r(P),
    s = xe($e, a),
    c = Ce(),
    l;
  t[0] !== c || t[1] !== o
    ? ((l = function () {
        o.get(Te).danger(
          c.formatMessage({
            id: `appgenSettings.customDomains.removeDialog.error`,
            defaultMessage: `Unable to remove domain`,
            description: `Error toast shown when removing a custom domain fails`,
          }),
          { errorAnalytics: { toastId: `sites_settings_custom_domain_remove_error` } },
        );
      }),
      (t[0] = c),
      (t[1] = o),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d = !s.isPending,
    f;
  t[3] !== i || t[4] !== s.isPending
    ? ((f = (e) => {
        !e && !s.isPending && i();
      }),
      (t[3] = i),
      (t[4] = s.isPending),
      (t[5] = f))
    : (f = t[5]);
  let m;
  t[6] !== n.id || t[7] !== n.status || t[8] !== i || t[9] !== a || t[10] !== s || t[11] !== o || t[12] !== u
    ? ((m = (e) => {
        if ((e.preventDefault(), s.isPending)) return;
        let t = n.status,
          r = Tt(o, a, it.CHATGPT_SITES_OPERATION_TYPE_CUSTOM_DOMAIN_REMOVE, { previousStatus: t });
        s.mutateAsync(n.id).then(
          (e) => {
            (r.succeeded({ previousStatus: t, status: e.status }), i());
          },
          () => {
            (r.failed({ previousStatus: t }), u());
          },
        );
      }),
      (t[6] = n.id),
      (t[7] = n.status),
      (t[8] = i),
      (t[9] = a),
      (t[10] = s),
      (t[11] = o),
      (t[12] = u),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === n.hostname
    ? (h = t[15])
    : ((h = (0, X.jsx)(we, {
        className: `contents`,
        children: (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.removeDialog.title`,
          defaultMessage: `Remove {hostname}?`,
          description: `Title for custom domain removal dialog`,
          values: { hostname: n.hostname },
        }),
      })),
      (t[14] = n.hostname),
      (t[15] = h));
  let g;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(_, {
        className: `contents`,
        children: (0, X.jsx)(K, {
          id: `appgenSettings.customDomains.removeDialog.description`,
          defaultMessage: `Visitors will no longer be able to use this domain for the site`,
          description: `Description for custom domain removal dialog`,
        }),
      })),
      (t[16] = g))
    : (g = t[16]);
  let v;
  t[17] === h
    ? (v = t[18])
    : ((v = (0, X.jsx)(ee, { title: h, titleClassName: `truncate pe-8`, subtitle: g })),
      (t[17] = h),
      (t[18] = v));
  let y;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, X.jsx)(K, {
        id: `appgenSettings.customDomains.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom domain removal dialog`,
      })),
      (t[19] = y))
    : (y = t[19]);
  let x;
  t[20] !== i || t[21] !== s.isPending
    ? ((x = (0, X.jsx)(z, {
        color: `ghost`,
        disabled: s.isPending,
        type: `button`,
        onClick: i,
        children: y,
      })),
      (t[20] = i),
      (t[21] = s.isPending),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(K, {
        id: `appgenSettings.customDomains.removeDialog.submit`,
        defaultMessage: `Remove`,
        description: `Confirm button label for custom domain removal dialog`,
      })),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] === s.isPending
    ? (C = t[25])
    : ((C = (0, X.jsx)(z, { color: `danger`, loading: s.isPending, type: `submit`, children: S })),
      (t[24] = s.isPending),
      (t[25] = C));
  let w;
  t[26] !== C || t[27] !== x
    ? ((w = (0, X.jsx)(Ie, { children: (0, X.jsxs)(b, { children: [x, C] }) })),
      (t[26] = C),
      (t[27] = x),
      (t[28] = w))
    : (w = t[28]);
  let T;
  t[29] !== w || t[30] !== m || t[31] !== v
    ? ((T = (0, X.jsxs)(p, { as: `form`, className: `gap-4 px-4 py-3`, onSubmit: m, children: [v, w] })),
      (t[29] = w),
      (t[30] = m),
      (t[31] = v),
      (t[32] = T))
    : (T = t[32]);
  let E;
  return (
    t[33] !== s.isPending || t[34] !== T || t[35] !== d || t[36] !== f
      ? ((E = (0, X.jsx)(se, {
          open: !0,
          shouldIgnoreClickOutside: s.isPending,
          showDialogClose: d,
          size: `compact`,
          onOpenChange: f,
          children: T,
        })),
        (t[33] = s.isPending),
        (t[34] = T),
        (t[35] = d),
        (t[36] = f),
        (t[37] = E))
      : (E = t[37]),
    E
  );
}
function Mn(e) {
  return [
    ...Nn(e),
    ...e.validation_records.flatMap((e, t) => {
      let n = Pn(e.record_type),
        r = Pn(e.name),
        i = Pn(e.value);
      return n == null || r == null || i == null
        ? []
        : [{ id: `validation:${t}:${n}:${r}`, name: r, type: n, value: i }];
    }),
  ];
}
function Nn(e) {
  return Fn(e.hostname) && e.apex_proxy_ipv4_targets.length > 0
    ? e.apex_proxy_ipv4_targets.map((e, t) => ({ id: `apex:${t}:${e}`, name: `@`, type: `A`, value: e }))
    : e.cname_target == null
      ? e.apex_proxy_ipv4_targets.map((t, n) => ({
          id: `apex:${n}:${t}`,
          name: e.hostname,
          type: `A`,
          value: t,
        }))
      : [{ id: `cname`, name: e.hostname, type: `CNAME`, value: e.cname_target }];
}
function Pn(e) {
  let t = e?.trim();
  return t == null || t.length === 0 ? null : t;
}
function Fn(e) {
  let t = u(e, { allowPrivateDomains: !0 });
  return t.domain != null && t.domain.toLowerCase() === e.toLowerCase();
}
var In, Ln, X;
function Rn() {
  return (Rn = e(() => {
    ((In = k()),
      T(),
      Pe(),
      fe(),
      V(),
      (Ln = l()),
      R(),
      ce(),
      B(),
      de(),
      m(),
      f(),
      D(),
      ne(),
      We(),
      H(),
      q(),
      oe(),
      Ue(),
      Vt(),
      kt(),
      i(),
      je(),
      fn(),
      A(),
      Je(),
      Jt(),
      (X = y()));
  }))();
}
function zn(e) {
  return {
    entries: e.entries.map(({ is_secret: e, key: t, value: n }) =>
      e
        ? { isSecret: !0, key: t, keyInputDisabledWhileValue: Gn, previousKey: t, value: Gn }
        : { isSecret: !1, key: t, previousKey: t, value: n ?? `` },
    ),
  };
}
function Bn(e, t) {
  if (Vn(t) != null) return null;
  let n = new Set(t.entries.map((e) => (Un(e) ? e.previousKey : e.key)));
  return {
    remove: e.entries.filter(({ key: e }) => !n.has(e)).map(({ key: e }) => e),
    set_values: t.entries
      .filter((t) => !Un(t) && Wn(e, t))
      .map((e) => ({ is_secret: e.isSecret, key: e.key, type: `envvar`, value: e.value })),
  };
}
function Vn(e) {
  let t = e.entries.map(({ key: e }) => e);
  return t.some((e) => e.trim().length === 0)
    ? `missing-key`
    : new Set(t).size === t.length
      ? e.entries.some(
          (e) =>
            !e.isSecret &&
            e.keyInputDisabledWhileValue != null &&
            e.previousKey != null &&
            (e.value === Gn || e.value === ``),
        )
        ? `stored-secret-needs-value`
        : null
      : `duplicate-key`;
}
function Hn(e, t, n, r) {
  let i = zn(n);
  return {
    entries: [
      ...e.entries.flatMap((e) => {
        let n = t.entries.find((t) =>
            e.previousKey == null ? t.key === e.key : t.previousKey === e.previousKey,
          ),
          a = i.entries.find(({ key: e }) => e === n?.key);
        return !r?.has(e.previousKey ?? e.key) &&
          e.key === n?.key &&
          e.value === n.value &&
          e.isSecret === n.isSecret
          ? a == null
            ? []
            : [a]
          : [{ ...e, previousKey: a?.key ?? e.previousKey }];
      }),
      ...i.entries.filter(
        ({ key: n }) =>
          !r?.has(n) && !t.entries.some((e) => e.key === n) && !e.entries.some((e) => e.key === n),
      ),
    ],
  };
}
function Un(e) {
  return (
    e.isSecret &&
    e.keyInputDisabledWhileValue != null &&
    e.previousKey != null &&
    (e.value === Gn || e.value === ``)
  );
}
function Wn(e, t) {
  let n = e.entries.find((e) => e.key === (t.previousKey ?? t.key));
  return n == null || n.is_secret !== t.isSecret || n.key !== t.key || n.value !== t.value;
}
var Gn;
function Kn() {
  return (Kn = e(() => {
    Gn = `<REDACTED>`;
  }))();
}
function qn(e) {
  let t = (0, Jn.c)(12),
    { liveUrl: n, title: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = ct(n)), (t[0] = n), (t[1] = i));
  let o = i,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Yn.jsx)(`span`, {
        className: `flex size-10 shrink-0 items-center justify-center`,
        children: (0, Yn.jsx)(a, { className: `icon-md` }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r
    ? (c = t[4])
    : ((c = (0, Yn.jsx)(`div`, { className: `truncate text-sm font-medium text-default`, children: r })),
      (t[3] = r),
      (t[4] = c));
  let l;
  t[5] === o
    ? (l = t[6])
    : ((l =
        o ??
        (0, Yn.jsx)(K, {
          id: `appgenShareDialog.site.notPublished`,
          defaultMessage: `Not published yet`,
          description: `Label in a Site card for a site without a published URL`,
        })),
      (t[5] = o),
      (t[6] = l));
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, Yn.jsx)(`div`, { className: `truncate text-xs text-tertiary`, children: l })),
      (t[7] = l),
      (t[8] = u));
  let d;
  return (
    t[9] !== c || t[10] !== u
      ? ((d = (0, Yn.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg bg-secondary-soft p-3`,
          children: [
            s,
            (0, Yn.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [c, u] }),
          ],
        })),
        (t[9] = c),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
var Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    ((Jn = k()), R(), ie(), ot(), (Yn = y()));
  }))();
}
function Zn(e) {
  let t = (0, Qn.c)(24),
    { disabled: n, name: r, onCancel: i, onConfirm: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = o));
  let s;
  t[2] !== n || t[3] !== a
    ? ((s = (e) => {
        (e.preventDefault(), n || a());
      }),
      (t[2] = n),
      (t[3] = a),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(we, {
        children: (0, Z.jsx)(K, {
          id: `envEntryDeleteDialog.title`,
          defaultMessage: `Delete environment variable?`,
          description: `Title of the confirmation dialog before deleting a Site environment variable or secret`,
        }),
      })),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === r
    ? (l = t[7])
    : ((l = (0, Z.jsx)(Ie, {
        children: (0, Z.jsx)(ee, {
          title: c,
          subtitle: (0, Z.jsx)(_, {
            className: `wrap-anywhere select-text`,
            children:
              r.trim() === ``
                ? (0, Z.jsx)(K, {
                    id: `envEntryDeleteDialog.description.unnamed`,
                    defaultMessage: `Site features that depend on this variable may stop working. This cannot be undone.`,
                    description: `Warning before deleting an unnamed Site environment variable; deletion can break features that use it`,
                  })
                : (0, Z.jsx)(K, {
                    id: `envEntryDeleteDialog.description.named`,
                    defaultMessage: `This will delete {name}. Site features that depend on this variable may stop working. This cannot be undone.`,
                    description: `Warning before deleting a Site environment variable or secret. The name is only the variable's key, never its value.`,
                    values: { name: r },
                  }),
          }),
        }),
      })),
      (t[6] = r),
      (t[7] = l));
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(K, {
        id: `envEntryDeleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss the environment variable deletion confirmation without deleting`,
      })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === i
    ? (d = t[10])
    : ((d = (0, Z.jsx)(z, { autoFocus: !0, color: `outline`, onClick: i, children: u })),
      (t[9] = i),
      (t[10] = d));
  let f;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(K, {
        id: `envEntryDeleteDialog.confirm`,
        defaultMessage: `Delete variable`,
        description: `Destructive button confirming deletion of a Site environment variable or secret`,
      })),
      (t[11] = f))
    : (f = t[11]);
  let m;
  t[12] === n
    ? (m = t[13])
    : ((m = (0, Z.jsx)(z, { color: `danger`, disabled: n, type: `submit`, children: f })),
      (t[12] = n),
      (t[13] = m));
  let h;
  t[14] !== d || t[15] !== m
    ? ((h = (0, Z.jsx)(Ie, { children: (0, Z.jsxs)(b, { children: [d, m] }) })),
      (t[14] = d),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] !== s || t[18] !== l || t[19] !== h
    ? ((g = (0, Z.jsxs)(p, { as: `form`, onSubmit: s, children: [l, h] })),
      (t[17] = s),
      (t[18] = l),
      (t[19] = h),
      (t[20] = g))
    : (g = t[20]);
  let v;
  return (
    t[21] !== o || t[22] !== g
      ? ((v = (0, Z.jsx)(se, { open: !0, showDialogClose: !1, onOpenChange: o, children: g })),
        (t[21] = o),
        (t[22] = g),
        (t[23] = v))
      : (v = t[23]),
    v
  );
}
var Qn, Z;
function $n() {
  return ($n = e(() => {
    ((Qn = k()), R(), B(), m(), f(), (Z = y()));
  }))();
}
function er(e, t, n) {
  let r = tr(n),
    i = r[0];
  return i == null ? null : [...e.map((e, n) => (n === t ? { ...e, ...i } : e)), ...r.slice(1)];
}
function tr(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.trim();
    if (e.length === 0 || e.startsWith(`#`) || e.startsWith(`;`)) continue;
    e.startsWith(`export `) && (e = e.slice(7).trim());
    let r = nr(e, `#`, (t) => e[t - 1]?.trim() === ``);
    if ((r !== -1 && (e = e.slice(0, r).trim()), e.length === 0)) continue;
    let i = nr(e, `=`);
    if (i === -1) continue;
    let a = e.slice(0, i).trim();
    a.length !== 0 && t.push({ key: a, value: rr(e.slice(i + 1).trim()) });
  }
  return t;
}
function nr(e, t, n = () => !0) {
  let r = !1,
    i = !1,
    a = !1;
  for (let o = 0; o < e.length; o += 1) {
    let s = e[o];
    if (r) {
      r = !1;
      continue;
    }
    if (s === `\\`) {
      r = !0;
      continue;
    }
    if (s === `'` && !i) {
      a = !a;
      continue;
    }
    if (s === `"` && !a) {
      i = !i;
      continue;
    }
    if (s === t && !a && !i && n(o)) return o;
  }
  return -1;
}
function rr(e) {
  return (e.startsWith(`"`) && e.endsWith(`"`)) || (e.startsWith(`'`) && e.endsWith(`'`))
    ? e.slice(1, -1)
    : e;
}
function ir(e) {
  let t = (0, or.c)(35),
    {
      disabled: r,
      isSaving: i,
      requiresSecrets: a,
      entries: o,
      isSaveUncertain: s,
      onChange: l,
      onAdd: u,
      onCommit: d,
    } = e,
    f = r !== void 0 && r,
    p = i !== void 0 && i,
    m = a !== void 0 && a,
    h = o.length === 0,
    [g, _] = (0, sr.useState)(null);
  g != null && o[g.index]?.key !== g.key && _(null);
  let v = h ? `border-b border-subtle pb-1` : void 0,
    y;
  t[0] !== o || t[1] !== u || t[2] !== l || t[3] !== m
    ? ((y = () => {
        (l([...o, { isSecret: m, key: ``, value: `` }]), u?.());
      }),
      (t[0] = o),
      (t[1] = u),
      (t[2] = l),
      (t[3] = m),
      (t[4] = y))
    : (y = t[4]);
  let b, x;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(c, { "aria-hidden": !1, asset: Se })),
      (x = (0, Q.jsx)(K, {
        id: `appgenSettings.environmentVariables.add`,
        defaultMessage: `Add variable`,
        description: `Button label to add a site environment variable`,
      })),
      (t[5] = b),
      (t[6] = x))
    : ((b = t[5]), (x = t[6]));
  let S;
  t[7] !== f || t[8] !== y
    ? ((S = (0, Q.jsxs)(z, {
        color: `outlineSurface`,
        disabled: f,
        size: `toolbar`,
        onClick: y,
        children: [b, x],
      })),
      (t[7] = f),
      (t[8] = y),
      (t[9] = S))
    : (S = t[9]);
  let C;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(K, {
        id: `appgenSettings.environmentVariables.description.v2`,
        defaultMessage: `Add API keys and other environment variables your site needs`,
        description: `Supporting text in a site's Environment variables settings section. Explains that users can add API keys and other environment variables needed by their site.`,
      })),
      (t[10] = C))
    : (C = t[10]);
  let w;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(`span`, {
        className: `text-base`,
        children: (0, Q.jsx)(K, {
          id: `appgenSettings.environmentVariables.title`,
          defaultMessage: `Environment variables`,
          description: `Heading for site environment variable settings`,
        }),
      })),
      (t[11] = w))
    : (w = t[11]);
  let T;
  t[12] === S
    ? (T = t[13])
    : ((T = (0, Q.jsx)(Nt.Header, { actions: S, subtitle: C, title: w })), (t[12] = S), (t[13] = T));
  let E;
  t[14] !== f ||
  t[15] !== o ||
  t[16] !== h ||
  t[17] !== s ||
  t[18] !== p ||
  t[19] !== l ||
  t[20] !== d ||
  t[21] !== m
    ? ((E = h
        ? null
        : (0, Q.jsx)(Nt.Content, {
            children: (0, Q.jsx)(n, {
              variant: `flat`,
              children: (0, Q.jsxs)(`div`, {
                className: `grid grid-cols-12 items-center gap-x-2 gap-y-2 p-4`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `contents text-xs font-medium text-codex-description select-none`,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `col-span-5`,
                        children: (0, Q.jsx)(K, {
                          id: `envEntrySettingsGroup.key.label`,
                          defaultMessage: `Key`,
                          description: `Column label for environment variable keys`,
                        }),
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `col-span-5`,
                        children: (0, Q.jsx)(K, {
                          id: `envEntrySettingsGroup.value.label`,
                          defaultMessage: `Value`,
                          description: `Column label for environment variable values`,
                        }),
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `col-span-1`,
                        children: (0, Q.jsx)(K, {
                          id: `envEntrySettingsGroup.secret.label`,
                          defaultMessage: `Secret`,
                          description: `Column label for environment variable secret toggles`,
                        }),
                      }),
                      (0, Q.jsx)(`span`, { "aria-hidden": `true`, className: `col-span-1` }),
                    ],
                  }),
                  o.map((e, t) =>
                    (0, Q.jsx)(
                      ar,
                      {
                        disabled: f || (p && e.keyInputDisabledWhileValue != null),
                        entry: e,
                        removeDisabled: f || p,
                        requiresSecrets: m,
                        rowNumber: t + 1,
                        onCommit: d,
                        onChange: (e, n) => {
                          (l(o.map((n, r) => (r === t ? e : n))), n && d?.());
                        },
                        onKeyPaste: (n) => {
                          let r = er(o, t, n.clipboardData.getData(`text/plain`));
                          r != null &&
                            (n.preventDefault(),
                            l(r.map((t, n) => ({ ...t, isSecret: m || (o[n]?.isSecret ?? e.isSecret) }))));
                        },
                        onRemove: () => {
                          if (e.previousKey != null || s?.(e.key)) {
                            _({ index: t, key: e.key });
                            return;
                          }
                          (l(o.filter((e, n) => n !== t)), d?.());
                        },
                      },
                      t,
                    ),
                  ),
                ],
              }),
            }),
          })),
      (t[14] = f),
      (t[15] = o),
      (t[16] = h),
      (t[17] = s),
      (t[18] = p),
      (t[19] = l),
      (t[20] = d),
      (t[21] = m),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] !== f || t[24] !== o || t[25] !== g || t[26] !== p || t[27] !== l || t[28] !== d
    ? ((D =
        g != null &&
        o[g.index]?.key === g.key &&
        (0, Q.jsx)(Zn, {
          disabled: f || p,
          name: g.key,
          onCancel: () => _(null),
          onConfirm: () => {
            (_(null), l(o.filter((e, t) => t !== g.index)), d?.());
          },
        })),
      (t[23] = f),
      (t[24] = o),
      (t[25] = g),
      (t[26] = p),
      (t[27] = l),
      (t[28] = d),
      (t[29] = D))
    : (D = t[29]);
  let O;
  return (
    t[30] !== T || t[31] !== E || t[32] !== D || t[33] !== v
      ? ((O = (0, Q.jsxs)(Nt, { className: v, children: [T, E, D] })),
        (t[30] = T),
        (t[31] = E),
        (t[32] = D),
        (t[33] = v),
        (t[34] = O))
      : (O = t[34]),
    O
  );
}
function ar(e) {
  let t = (0, or.c)(63),
    {
      disabled: n,
      entry: r,
      requiresSecrets: i,
      onChange: a,
      onKeyPaste: o,
      onCommit: s,
      onRemove: c,
      rowNumber: l,
      removeDisabled: u,
    } = e,
    d = Ce(),
    f = (0, sr.useRef)(!1),
    p = r.isSecret && r.previousKey != null ? r.keyInputDisabledWhileValue : void 0,
    m = p != null,
    h;
  t[0] !== r || t[1] !== a || t[2] !== s || t[3] !== p
    ? ((h = (e) => {
        (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) ||
          (p != null && r.value === `` && a({ ...r, value: p }), s?.());
      }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = s),
      (t[3] = p),
      (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] === s
    ? (g = t[6])
    : ((g = (e) => {
        s != null &&
          e.key === `Enter` &&
          !e.nativeEvent.isComposing &&
          e.nativeEvent.keyCode !== 229 &&
          e.target instanceof HTMLInputElement &&
          (e.preventDefault(), s());
      }),
      (t[5] = s),
      (t[6] = g));
  let _;
  t[7] === d
    ? (_ = t[8])
    : ((_ = d.formatMessage({
        id: `envEntrySettingsGroup.key.ariaLabel`,
        defaultMessage: `Key`,
        description: `Accessible label for an environment variable or secret key input`,
      })),
      (t[7] = d),
      (t[8] = _));
  let v = n || m,
    y;
  t[9] === d
    ? (y = t[10])
    : ((y = d.formatMessage({
        id: `envEntrySettingsGroup.key.placeholder`,
        defaultMessage: `Key`,
        description: `Placeholder for an environment variable or secret key input`,
      })),
      (t[9] = d),
      (t[10] = y));
  let b;
  t[11] !== r || t[12] !== a
    ? ((b = (e) => {
        a({ ...r, key: e.target.value });
      }),
      (t[11] = r),
      (t[12] = a),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] !== r.key || t[15] !== o || t[16] !== _ || t[17] !== v || t[18] !== y || t[19] !== b
    ? ((x = (0, Q.jsx)(`div`, {
        className: `col-span-5`,
        children: (0, Q.jsx)(ht, {
          variant: `code`,
          "aria-label": _,
          disabled: v,
          placeholder: y,
          value: r.key,
          onPaste: o,
          onChange: b,
        }),
      })),
      (t[14] = r.key),
      (t[15] = o),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== n || t[22] !== r || t[23] !== d || t[24] !== m || t[25] !== a || t[26] !== p
    ? ((S = (0, Q.jsx)(`div`, {
        className: `col-span-5`,
        children:
          p != null && r.value === p
            ? (0, Q.jsx)(z, {
                ref: (e) => {
                  e != null && f.current && ((f.current = !1), e.focus());
                },
                "aria-label": d.formatMessage(
                  {
                    id: `envEntrySettingsGroup.replaceSecret.ariaLabel`,
                    defaultMessage: `Replace secret value for {key}`,
                    description: `Accessible label for the button that opens an empty password input to replace a saved site secret. The key is the environment variable name.`,
                  },
                  { key: r.key },
                ),
                color: `outline`,
                disabled: n,
                size: `toolbar`,
                onClick: () => a({ ...r, value: `` }),
                children: (0, Q.jsx)(K, {
                  id: `envEntrySettingsGroup.replaceSecret`,
                  defaultMessage: `Replace secret`,
                  description: `Button label for replacing a saved site environment variable whose secret value cannot be viewed`,
                }),
              })
            : (0, Q.jsx)(ht, {
                autoComplete: r.isSecret ? `new-password` : `off`,
                autoFocus: m,
                variant: `code`,
                "aria-label": d.formatMessage({
                  id: `envEntrySettingsGroup.value.ariaLabel`,
                  defaultMessage: `Value`,
                  description: `Accessible label for an environment variable or secret value input`,
                }),
                disabled: n,
                placeholder: d.formatMessage({
                  id: `envEntrySettingsGroup.value.placeholder`,
                  defaultMessage: `Value`,
                  description: `Placeholder for an environment variable or secret value input`,
                }),
                type: r.isSecret ? `password` : `text`,
                value: r.value,
                onChange: (e) => {
                  a({ ...r, value: e.target.value });
                },
                onKeyDown: (e) => {
                  e.key === `Escape` &&
                    p != null &&
                    (e.preventDefault(), e.stopPropagation(), (f.current = !0), a({ ...r, value: p }));
                },
              }),
      })),
      (t[21] = n),
      (t[22] = r),
      (t[23] = d),
      (t[24] = m),
      (t[25] = a),
      (t[26] = p),
      (t[27] = S))
    : (S = t[27]);
  let C = !i,
    w;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(K, {
        id: `envEntrySettingsGroup.secret.requiredHelp`,
        defaultMessage: `Data residency requires all values to be secrets`,
        description: `Tooltip shown when a Site owner hovers over or focuses the disabled Secret toggle in Site environment settings. Explains why the toggle must stay on: the Site has geographic data restrictions. Secret means a protected configuration value such as an API key.`,
      })),
      (t[28] = w))
    : (w = t[28]);
  let T = i ? `group` : void 0,
    E = i ? 0 : void 0,
    D = i ? `pointer-events-none` : void 0,
    O;
  t[29] !== r.key || t[30] !== d || t[31] !== l
    ? ((O =
        r.key === ``
          ? d.formatMessage(
              {
                id: `envEntrySettingsGroup.secret.unnamedAriaLabel`,
                defaultMessage: `Treat environment variable {rowNumber} as a secret`,
                description: `Accessible label for marking an unnamed environment variable as secret`,
              },
              { rowNumber: l },
            )
          : d.formatMessage(
              {
                id: `envEntrySettingsGroup.secret.namedAriaLabel`,
                defaultMessage: `Treat {key} as a secret`,
                description: `Accessible label for marking a named environment variable as secret`,
              },
              { key: r.key },
            )),
      (t[29] = r.key),
      (t[30] = d),
      (t[31] = l),
      (t[32] = O))
    : (O = t[32]);
  let k = n || m || i,
    A;
  t[33] !== r || t[34] !== a
    ? ((A = (e) => {
        a({ ...r, isSecret: e }, !0);
      }),
      (t[33] = r),
      (t[34] = a),
      (t[35] = A))
    : (A = t[35]);
  let j;
  t[36] !== r.isSecret || t[37] !== D || t[38] !== O || t[39] !== k || t[40] !== A
    ? ((j = (0, Q.jsx)(ye, {
        className: D,
        ariaLabel: O,
        checked: r.isSecret,
        disabled: k,
        size: `sm`,
        onChange: A,
      })),
      (t[36] = r.isSecret),
      (t[37] = D),
      (t[38] = O),
      (t[39] = k),
      (t[40] = A),
      (t[41] = j))
    : (j = t[41]);
  let M;
  t[42] !== T || t[43] !== E || t[44] !== j
    ? ((M = (0, Q.jsx)(`span`, { role: T, tabIndex: E, children: j })),
      (t[42] = T),
      (t[43] = E),
      (t[44] = j),
      (t[45] = M))
    : (M = t[45]);
  let N;
  t[46] !== M || t[47] !== C
    ? ((N = (0, Q.jsx)(`div`, {
        className: `col-span-1 flex justify-center`,
        children: (0, Q.jsx)(be, { disabled: C, tooltipContent: w, children: M }),
      })),
      (t[46] = M),
      (t[47] = C),
      (t[48] = N))
    : (N = t[48]);
  let P;
  t[49] === d
    ? (P = t[50])
    : ((P = d.formatMessage({
        id: `envEntrySettingsGroup.remove.ariaLabel`,
        defaultMessage: `Remove entry`,
        description: `Accessible label for removing an environment variable or secret row`,
      })),
      (t[49] = d),
      (t[50] = P));
  let ee;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Q.jsx)(Xt, { className: `icon-2xs` })), (t[51] = ee))
    : (ee = t[51]);
  let F;
  t[52] !== c || t[53] !== u || t[54] !== P
    ? ((F = (0, Q.jsx)(`div`, {
        className: `col-span-1 flex justify-end`,
        children: (0, Q.jsx)(z, {
          "aria-label": P,
          color: `ghost`,
          disabled: u,
          size: `icon`,
          onClick: c,
          children: ee,
        }),
      })),
      (t[52] = c),
      (t[53] = u),
      (t[54] = P),
      (t[55] = F))
    : (F = t[55]);
  let te;
  return (
    t[56] !== h || t[57] !== N || t[58] !== g || t[59] !== F || t[60] !== x || t[61] !== S
      ? ((te = (0, Q.jsxs)(`div`, {
          className: `contents`,
          role: `group`,
          onBlur: h,
          onKeyDown: g,
          children: [x, S, N, F],
        })),
        (t[56] = h),
        (t[57] = N),
        (t[58] = g),
        (t[59] = F),
        (t[60] = x),
        (t[61] = S),
        (t[62] = te))
      : (te = t[62]),
    te
  );
}
var or, sr, Q;
function cr() {
  return (cr = e(() => {
    ((or = k()), ke(), (sr = l()), R(), B(), D(), q(), Ae(), Ee(), Yt(), vt(), me(), $n(), (Q = y()));
  }))();
}
function lr(e, t) {
  O(
    async () => {
      let { AppgenChangeSlugDialog: e } = await import(`./appgen-change-slug-dialog-a5bdbe6056c6.js`);
      return { AppgenChangeSlugDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  ).then(({ AppgenChangeSlugDialog: n }) => {
    ze(e, n, t);
  });
}
function ur() {
  return (ur = e(() => {
    (We(), ve());
  }))();
}
function dr(e) {
  let t = (0, pr.c)(20),
    { disabled: n, onBeforeTransfer: i, onTransferred: a, project: o } = e,
    s = r(P),
    { data: c } = Et(),
    l = He(`476199071`),
    u = He(`1664214667`),
    d = l && u && c?.structure === `workspace` && o.current_user_role === `owner`,
    f;
  t[0] === o.id ? (f = t[1]) : ((f = [...Rt, o.id, `ownership-transfer`]), (t[0] = o.id), (t[1] = f));
  let p;
  t[2] === o.id
    ? (p = t[3])
    : ((p = async (e) => {
        let { signal: t } = e;
        try {
          return await Ct.safeGet(`/codex/sites/projects/{project_id}/owner`, {
            parameters: { path: { project_id: o.id } },
            expectedErrorStatuses: [404],
            signal: t,
            surface: `appgen`,
          });
        } catch (e) {
          let t = e;
          if (t instanceof ge && t.status === 404) return { can_transfer_ownership: !1 };
          throw t;
        }
      }),
      (t[2] = o.id),
      (t[3] = p));
  let m;
  t[4] !== d || t[5] !== f || t[6] !== p
    ? ((m = { queryKey: f, enabled: d, queryFn: p, retry: !1, staleTime: Le.THIRTY_SECONDS }),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m))
    : (m = t[7]);
  let { data: h } = S(m);
  if (!d || c == null || !h?.can_transfer_ownership) return null;
  let g, _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, mr.jsx)(K, {
        id: `appgenSettings.transfer.label`,
        defaultMessage: `Transfer ownership`,
        description: `Label for the Site settings action that makes another workspace member the Site owner`,
      })),
      (_ = (0, mr.jsx)(K, {
        id: `appgenSettings.transfer.description`,
        defaultMessage: `Make someone else in your workspace the owner of this site`,
        description: `Explanation beside the Site ownership transfer action. Transfers stay within the current workspace.`,
      })),
      (t[8] = g),
      (t[9] = _))
    : ((g = t[8]), (_ = t[9]));
  let v;
  t[10] !== c.account_user_id || t[11] !== i || t[12] !== a || t[13] !== o || t[14] !== s
    ? ((v = () => {
        fr(s, { currentAccountUserId: c.account_user_id, onBeforeTransfer: i, onTransferred: a, project: o });
      }),
      (t[10] = c.account_user_id),
      (t[11] = i),
      (t[12] = a),
      (t[13] = o),
      (t[14] = s),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, mr.jsx)(K, {
        id: `appgenSettings.transfer.button`,
        defaultMessage: `Transfer ownership`,
        description: `Button that opens the dialog to choose a new owner for this Site`,
      })),
      (t[16] = y))
    : (y = t[16]);
  let b;
  return (
    t[17] !== n || t[18] !== v
      ? ((b = (0, mr.jsx)(De, {
          labelWeight: `normal`,
          layout: `split`,
          label: g,
          description: _,
          control: (0, mr.jsx)(z, {
            color: `secondary`,
            disabled: n,
            size: `toolbar`,
            type: `button`,
            onClick: v,
            children: y,
          }),
        })),
        (t[17] = n),
        (t[18] = v),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
function fr(e, t) {
  O(
    async () => {
      let { OwnershipTransferDialog: e } = await import(`./dialog-32b2bce467fc.js`);
      return { OwnershipTransferDialog: e };
    },
    __vite__mapDeps([6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13]),
    import.meta.url,
  ).then(({ OwnershipTransferDialog: n }) => {
    ze(e, n, t);
  });
}
var pr, mr;
function hr() {
  return (hr = e(() => {
    ((pr = k()), _e(), V(), R(), Ht(), B(), We(), i(), je(), Gt(), o(), Pt(), j(), Jt(), (mr = y()), ve());
  }))();
}
function gr(e) {
  let t = (0, jr.c)(16),
    { navigation: n, initialEnvironmentDraft: r, initialTitle: i } = e,
    a = v(),
    o = n?.projectId ?? a.projectId,
    s = re();
  if (o == null) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(tn, { navigation: n, to: gt })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let c;
  t[2] === o ? (c = t[3]) : ((c = (0, $.jsx)(yn, { projectId: o })), (t[2] = o), (t[3] = c));
  let l;
  t[4] !== s || t[5] !== n?.onNavigate
    ? ((l = () => {
        (n?.onNavigate ?? s)(gt);
      }),
      (t[4] = s),
      (t[5] = n?.onNavigate),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== r || t[8] !== i || t[9] !== n || t[10] !== o || t[11] !== l
    ? ((u = (0, $.jsx)(_r, {
        navigation: n,
        initialEnvironmentDraft: r,
        initialTitle: i,
        projectId: o,
        onDeleted: l,
      })),
      (t[7] = r),
      (t[8] = i),
      (t[9] = n),
      (t[10] = o),
      (t[11] = l),
      (t[12] = u))
    : (u = t[12]);
  let d;
  return (
    t[13] !== c || t[14] !== u
      ? ((d = (0, $.jsxs)($.Fragment, { children: [c, u] })), (t[13] = c), (t[14] = u), (t[15] = d))
      : (d = t[15]),
    d
  );
}
function _r(e) {
  let t = (0, jr.c)(14),
    { navigation: n, initialEnvironmentDraft: r, initialTitle: i, onDeleted: a, projectId: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = Re(o)), (t[0] = o), (t[1] = s));
  let { data: c } = S(s),
    l = c != null,
    u;
  t[2] === l ? (u = t[3]) : ((u = { enabled: l }), (t[2] = l), (t[3] = u));
  let { data: d, isLoading: f } = xe(tt, o, u),
    p;
  t[4] !== d || t[5] !== r || t[6] !== i || t[7] !== f || t[8] !== a
    ? ((p = (e) =>
        (0, $.jsx)(yr, {
          embedded: !1,
          environment: d,
          initialEnvironmentDraft: r,
          initialTitle: i,
          isEnvironmentLoading: f,
          onDeleted: a,
          site: e,
        })),
      (t[4] = d),
      (t[5] = r),
      (t[6] = i),
      (t[7] = f),
      (t[8] = a),
      (t[9] = p))
    : (p = t[9]);
  let m;
  return (
    t[10] !== n || t[11] !== o || t[12] !== p
      ? ((m = (0, $.jsx)(nn, { navigation: n, projectId: o, selectedTab: `settings`, children: p })),
        (t[10] = n),
        (t[11] = o),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function vr(e) {
  let t = (0, jr.c)(17),
    { initialEnvironmentDraft: n, initialTitle: r, onDeleted: i, onTransferred: a, projectId: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = Re(o)), (t[0] = o), (t[1] = s));
  let { data: c, isError: l, isLoading: u, refetch: d } = S(s),
    f = c != null,
    p;
  t[2] === f ? (p = t[3]) : ((p = { enabled: f }), (t[2] = f), (t[3] = p));
  let { data: m, isLoading: h } = xe(tt, o, p),
    g;
  if (u) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(Qt, {})), (t[4] = e)) : (e = t[4]),
      (g = e));
  } else if (l || c == null) {
    let e;
    (t[5] === d ? (e = t[6]) : ((e = (0, $.jsx)(kr, { onRetry: () => void d() })), (t[5] = d), (t[6] = e)),
      (g = e));
  } else {
    let e;
    (t[7] !== m || t[8] !== n || t[9] !== r || t[10] !== h || t[11] !== i || t[12] !== a || t[13] !== c
      ? ((e = (0, $.jsx)(yr, {
          embedded: !0,
          environment: m,
          initialEnvironmentDraft: n,
          initialTitle: r,
          isEnvironmentLoading: h,
          onDeleted: i,
          onTransferred: a,
          site: c,
        })),
        (t[7] = m),
        (t[8] = n),
        (t[9] = r),
        (t[10] = h),
        (t[11] = i),
        (t[12] = a),
        (t[13] = c),
        (t[14] = e))
      : (e = t[14]),
      (g = e));
  }
  let _;
  return (
    t[15] === g
      ? (_ = t[16])
      : ((_ = (0, $.jsx)(`div`, {
          className: `flex min-h-0 flex-1 flex-col`,
          children: (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 scrollbar-stable overflow-y-auto`,
            children: (0, $.jsx)(rt, { className: `w-full px-4 py-3`, embedded: !0, children: g }),
          }),
        })),
        (t[15] = g),
        (t[16] = _)),
    _
  );
}
function yr(e) {
  let t = (0, jr.c)(19),
    {
      embedded: n,
      environment: i,
      initialEnvironmentDraft: a,
      initialTitle: o,
      isEnvironmentLoading: s,
      onDeleted: c,
      onTransferred: l,
      site: u,
    } = e,
    d = r(P);
  if (s) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(Qt, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (i == null) {
    let e;
    return (
      t[1] !== d || t[2] !== u.id
        ? ((e = (0, $.jsx)(kr, { onRetry: () => void d.get(tt, u.id).refetch() })),
          (t[1] = d),
          (t[2] = u.id),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let f;
  t[4] !== n || t[5] !== u.live_url || t[6] !== u.title
    ? ((f = n ? (0, $.jsx)(qn, { liveUrl: u.live_url, title: u.title }) : null),
      (t[4] = n),
      (t[5] = u.live_url),
      (t[6] = u.title),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== n || t[9] !== i || t[10] !== a || t[11] !== o || t[12] !== c || t[13] !== l || t[14] !== u
    ? ((p = (0, $.jsx)(
        br,
        {
          embedded: n,
          environment: i,
          initialEnvironmentDraft: a,
          initialTitle: o,
          onDeleted: c,
          onTransferred: l,
          site: u,
        },
        u.id,
      )),
      (t[8] = n),
      (t[9] = i),
      (t[10] = a),
      (t[11] = o),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u),
      (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== f || t[17] !== p
      ? ((m = (0, $.jsxs)($.Fragment, { children: [f, p] })), (t[16] = f), (t[17] = p), (t[18] = m))
      : (m = t[18]),
    m
  );
}
function br(e) {
  let t = (0, jr.c)(236),
    {
      embedded: i,
      environment: a,
      initialEnvironmentDraft: o,
      initialTitle: s,
      onDeleted: c,
      onTransferred: l,
      site: u,
    } = e,
    d = r(P),
    f = te(),
    { live_url: p, hosted_url: m, id: h, slug: g, title: _ } = u,
    v = He(`324493575`),
    { data: y, isError: b, isFetched: x, isFetching: C, refetch: w } = he(st),
    T = y?.custom_domains_enabled === !0,
    D = x && C && y == null,
    O;
  t[0] === T ? (O = t[1]) : ((O = { enabled: T }), (t[0] = T), (t[1] = O));
  let { data: k, isError: A, isLoading: j, refetch: M } = xe(Ye, h, O),
    ee = xe(et, h),
    F = xe(nt, h),
    I = Ce(),
    ne = he(qt),
    re = he(Ve),
    ie;
  t[2] !== ne || t[3] !== a || t[4] !== o || t[5] !== s || t[6] !== u || t[7] !== re
    ? ((ie = {
        accountId: ne,
        userId: re,
        site: u,
        environment: a,
        initialTitle: s,
        initialEnvironmentDraft: o,
      }),
      (t[2] = ne),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = u),
      (t[7] = re),
      (t[8] = ie))
    : (ie = t[8]);
  let L = Oe(Xe, ie),
    ae = he(L.pendingEdit$),
    oe = he(L.pendingTitle$),
    se = m ?? (Be(p, g) == null ? null : p),
    ce = he(L.titleStatus$),
    le = he(L.environmentStatus$),
    {
      setPendingEdit: R,
      setPendingTitle: ue,
      setTitleStatus: de,
      setEnvironmentStatus: B,
      titleEditRef: V,
      savedTitleRef: fe,
      environmentEditRef: H,
      environmentUncertainKeysRef: me,
      titleTimerRef: U,
      titleSavingRef: W,
      environmentSavingRef: ge,
      titleRequestedRef: _e,
      environmentRequestedRef: ve,
      skipFlushRef: G,
      titleFailedRef: ye,
    } = L,
    [be, Se] = (0, Mr.useState)(ae != null),
    we;
  t[9] !== a || t[10] !== ae?.draft
    ? ((we = ae?.draft ?? zn(a)), (t[9] = a), (t[10] = ae?.draft), (t[11] = we))
    : (we = t[11]);
  let Ee = we,
    ke = ae == null || !be ? null : Vn(ae.draft),
    Ae;
  t[12] !== oe || t[13] !== _ ? ((Ae = mn(oe, _)), (t[12] = oe), (t[13] = _), (t[14] = Ae)) : (Ae = t[14]);
  let { isInvalid: je, title: Me } = Ae,
    Ne = ce === `saving` || le === `saving`,
    Pe = (0, Mr.useRef)(!1),
    Fe,
    Ie;
  (t[15] !== fe || t[16] !== _ || t[17] !== V || t[18] !== ye || t[19] !== W
    ? ((Fe = () => {
        !W.current && V.current == null && !ye.current && (fe.current = _);
      }),
      (Ie = [_, W, V, ye, fe]),
      (t[15] = fe),
      (t[16] = _),
      (t[17] = V),
      (t[18] = ye),
      (t[19] = W),
      (t[20] = Fe),
      (t[21] = Ie))
    : ((Fe = t[20]), (Ie = t[21])),
    (0, Mr.useEffect)(Fe, Ie));
  let Le;
  t[22] !== L ||
  t[23] !== I ||
  t[24] !== fe ||
  t[25] !== d ||
  t[26] !== ue ||
  t[27] !== de ||
  t[28] !== G ||
  t[29] !== V ||
  t[30] !== ye ||
  t[31] !== _e ||
  t[32] !== W ||
  t[33] !== U ||
  t[34] !== F
    ? ((Le = () => {
        G.current ||
          Pe.current ||
          !L.isCurrentIdentity() ||
          (U.current != null && (clearTimeout(U.current), (U.current = null)),
          (_e.current = !0),
          !W.current &&
            ((W.current = !0),
            (async () => {
              for (; _e.current && !Pe.current && L.isCurrentIdentity();) {
                _e.current = !1;
                let e = V.current,
                  { update: t } = mn(e, fe.current, ye.current);
                if (t == null) {
                  e?.trim() === fe.current && ((V.current = null), ue(null), de(`idle`));
                  break;
                }
                de(`saving`);
                try {
                  (await F.mutateAsync(t),
                    (fe.current = t.title),
                    (ye.current = !1),
                    V.current === e && ((V.current = null), ue(null)),
                    de(V.current == null ? `saved` : `idle`));
                } catch {
                  ((ye.current = !0),
                    de(`error`),
                    (_e.current = !1),
                    d
                      .get(Te)
                      .danger(I.formatMessage(Ir.title), {
                        errorAnalytics: { toastId: `sites_settings_save_error` },
                      }));
                }
              }
              W.current = !1;
            })()));
      }),
      (t[22] = L),
      (t[23] = I),
      (t[24] = fe),
      (t[25] = d),
      (t[26] = ue),
      (t[27] = de),
      (t[28] = G),
      (t[29] = V),
      (t[30] = ye),
      (t[31] = _e),
      (t[32] = W),
      (t[33] = U),
      (t[34] = F),
      (t[35] = Le))
    : (Le = t[35]);
  let q = Le,
    Re;
  t[36] !== L ||
  t[37] !== H ||
  t[38] !== ve ||
  t[39] !== ge ||
  t[40] !== me ||
  t[41] !== I ||
  t[42] !== h ||
  t[43] !== f ||
  t[44] !== d ||
  t[45] !== B ||
  t[46] !== R ||
  t[47] !== G ||
  t[48] !== ee
    ? ((Re = () => {
        if (G.current || !L.isCurrentIdentity()) return;
        let e = H.current,
          t = e != null && Vn(e.draft) != null;
        (Se(t),
          !t &&
            ((ve.current = !0),
            !ge.current &&
              ((ge.current = !0),
              (async () => {
                for (; ve.current && L.isCurrentIdentity();) {
                  ve.current = !1;
                  try {
                    if (me.current != null) {
                      B(`saving`);
                      let e = await f.fetchQuery({ ...d.query.getOptions(tt, h), staleTime: 0 });
                      if (G.current || !L.isCurrentIdentity()) {
                        B(`error`);
                        break;
                      }
                      let t = H.current;
                      if (t == null) break;
                      let n = {
                        baseEnvironment: e,
                        draft: Hn(t.draft, zn(t.baseEnvironment), e, me.current),
                      };
                      ((H.current = n), R(n), (me.current = null), B(`idle`));
                    }
                    let e = H.current;
                    if (e == null) break;
                    let t = Bn(e.baseEnvironment, e.draft);
                    if (t == null) break;
                    if (t.remove.length === 0 && t.set_values.length === 0) {
                      ((H.current = null), R(null), B(`idle`));
                      break;
                    }
                    (B(`saving`), (me.current = new Set([...t.remove, ...t.set_values.map(Er)])));
                    let n = await ee.mutateAsync(t);
                    me.current = null;
                    let r = H.current,
                      i =
                        r == null || r === e ? null : { baseEnvironment: n, draft: Hn(r.draft, e.draft, n) };
                    ((H.current = i), R(i), B(i == null ? `saved` : `idle`));
                    let a = new Set(e.baseEnvironment.entries.filter(Tr).map(wr)),
                      o = new Set(e.draft.entries.map(Cr)),
                      s = e.draft.entries.filter((e) => {
                        let { isSecret: t, key: n, previousKey: r } = e;
                        return !t && r == null && (!a.has(n) || o.has(n));
                      }).length;
                    if (s > 0)
                      try {
                        Wt(d, E, { addedCount: N(s), projectId: h });
                      } catch {}
                  } catch (e) {
                    let t = e;
                    (B(`error`), (ve.current = !1));
                    let n = Ar(t),
                      r = I.formatMessage(Ir.environment);
                    (n === `environment_requires_secrets`
                      ? (r = I.formatMessage({
                          id: `appgenSettings.save.secretsRequired`,
                          defaultMessage: `Environment variables aren’t supported for this Site due to its geographic restrictions. Enable Secret for each value, then try again.`,
                          description: `Error toast when a Site owner tries to save an ordinary environment variable in a workspace with regional data controls. Secret is the per-value toggle in the form. Enabling it stores the value in the regional Secrets Store.`,
                        }))
                      : n === `invalid_secret_name`
                        ? (r = I.formatMessage({
                            id: `appgenSettings.save.invalidSecretName`,
                            defaultMessage: `Secret names must be 1–100 characters, start with A–Z, a–z, or _, and contain only A–Z, a–z, 0–9, or _. Choose a valid name and update references in your app.`,
                            description: `Error toast in Site settings when an owner saves a secret with an invalid name. Preserve the literal character ranges A–Z, a–z, 0–9, the underscore _, and the 1–100 length limit. The owner must rename the secret and update its uses in app code. Plain text without Markdown.`,
                          }))
                        : n === `regional_environment_unavailable` &&
                          (r = I.formatMessage({
                            id: `appgenSettings.save.regionalEnvironmentUnavailable`,
                            defaultMessage: `Use the Sites agent to add, update, or remove secrets for this Site`,
                            description: `Error toast when the legacy Site settings service cannot edit regional secrets. Direct the owner to the Sites agent, which can use the supported environment tools.`,
                          })),
                      d.get(Te).danger(r, { errorAnalytics: { toastId: `sites_settings_save_error` } }));
                  }
                }
                ge.current = !1;
              })())));
      }),
      (t[36] = L),
      (t[37] = H),
      (t[38] = ve),
      (t[39] = ge),
      (t[40] = me),
      (t[41] = I),
      (t[42] = h),
      (t[43] = f),
      (t[44] = d),
      (t[45] = B),
      (t[46] = R),
      (t[47] = G),
      (t[48] = ee),
      (t[49] = Re))
    : (Re = t[49]);
  let J = Re,
    Ue;
  t[50] !== L || t[51] !== J || t[52] !== q || t[53] !== G
    ? ((Ue = () => {
        !G.current && L.isCurrentIdentity() && (q(), J());
      }),
      (t[50] = L),
      (t[51] = J),
      (t[52] = q),
      (t[53] = G),
      (t[54] = Ue))
    : (Ue = t[54]);
  let We = (0, Mr.useEffectEvent)(Ue),
    Ge;
  t[55] === We ? (Ge = t[56]) : ((Ge = () => () => We()), (t[55] = We), (t[56] = Ge));
  let Ke;
  (t[57] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ke = []), (t[57] = Ke)) : (Ke = t[57]),
    (0, Mr.useEffect)(Ge, Ke));
  let qe;
  t[58] === h
    ? (qe = t[59])
    : ((qe = { queryKey: [...xt, h], queryFn: pe, gcTime: Fr, staleTime: 1 / 0 }), (t[58] = h), (t[59] = qe));
  let { data: Je } = S(qe),
    Qe = Je != null && Je.requestedSlug !== g,
    $e;
  t[60] !== Je || t[61] !== h || t[62] !== f
    ? (($e = () => {
        let e = !1;
        return (
          f.setQueryData([...xt, h], (t) =>
            t == null || Je == null || t.expiresAt !== Je.expiresAt || t.requestedSlug !== Je.requestedSlug
              ? t
              : ((e = !0), null),
          ),
          e
        );
      }),
      (t[60] = Je),
      (t[61] = h),
      (t[62] = f),
      (t[63] = $e))
    : ($e = t[63]);
  let rt = $e,
    it;
  t[64] !== I || t[65] !== h || t[66] !== f || t[67] !== d
    ? ((it = () => {
        let e = !1;
        (f.setQueryData([...xt, h], (t) => (t == null || Date.now() < t.expiresAt ? t : ((e = !0), null))),
          e &&
            d
              .get(Te)
              .danger(
                I.formatMessage({
                  id: `appgenSettings.general.url.changeTimeout`,
                  defaultMessage: `Site URL change is taking longer than expected`,
                  description: `Error toast shown when a requested Site URL change does not finish within ten minutes`,
                }),
                { errorAnalytics: { toastId: `sites_settings_slug_save_timeout` } },
              ));
      }),
      (t[64] = I),
      (t[65] = h),
      (t[66] = f),
      (t[67] = d),
      (t[68] = it))
    : (it = t[68]);
  let at = it,
    ot = Je?.requestedSlug,
    lt;
  t[69] !== h || t[70] !== ot
    ? ((lt = [...xt, h, `poll`, ot]), (t[69] = h), (t[70] = ot), (t[71] = lt))
    : (lt = t[71]);
  let ut;
  t[72] !== at ||
  t[73] !== rt ||
  t[74] !== I ||
  t[75] !== Je?.requestedSlug ||
  t[76] !== h ||
  t[77] !== f ||
  t[78] !== d
    ? ((ut = async () => {
        let e;
        try {
          e = await Ft(h);
        } catch (e) {
          let t = e;
          throw (
            rt() &&
              d
                .get(Te)
                .danger(
                  I.formatMessage({
                    id: `appgenSettings.general.url.changePollError`,
                    defaultMessage: `Unable to confirm site URL change`,
                    description: `Error toast shown when checking the status of a requested Site URL change fails`,
                  }),
                  { errorAnalytics: { toastId: `appgenSettings.general.url.changePollError` } },
                ),
            t
          );
        }
        return (
          e.slug === Je?.requestedSlug
            ? (f.setQueryData([...St, h], e),
              await Promise.all([
                f.invalidateQueries({ queryKey: _t }),
                f.invalidateQueries({ queryKey: [...mt, h] }),
              ]),
              rt())
            : at(),
          e
        );
      }),
      (t[72] = at),
      (t[73] = rt),
      (t[74] = I),
      (t[75] = Je?.requestedSlug),
      (t[76] = h),
      (t[77] = f),
      (t[78] = d),
      (t[79] = ut))
    : (ut = t[79]);
  let dt;
  (t[80] !== Qe || t[81] !== lt || t[82] !== ut
    ? ((dt = { queryKey: lt, queryFn: ut, enabled: Qe, refetchInterval: Pr, retry: !1, staleTime: 0 }),
      (t[80] = Qe),
      (t[81] = lt),
      (t[82] = ut),
      (t[83] = dt))
    : (dt = t[83]),
    S(dt));
  let ft =
      v &&
      y?.slug_change_enabled === !0 &&
      u.status === `active` &&
      (u.current_user_role === `owner` || u.current_user_role === void 0),
    pt = null;
  if (je) {
    let e;
    (t[84] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          id: Nr,
          className: `text-sm text-chart-red`,
          role: `alert`,
          children: (0, $.jsx)(K, {
            id: `appgenSettings.general.title.required`,
            defaultMessage: `Site title is required`,
            description: `Inline validation message below the Site settings form when the Site title is empty`,
          }),
        })),
        (t[84] = e))
      : (e = t[84]),
      (pt = e));
  } else if (ke === `missing-key`) {
    let e;
    (t[85] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `text-sm text-red`,
          role: `alert`,
          children: (0, $.jsx)(K, {
            id: `appgenSettings.environmentKeys.required`,
            defaultMessage: `Enter a key for every environment variable, or remove the empty row`,
            description: `Inline validation on the settings form on the Site settings page. A Site owner added an environment-variable row with an empty or whitespace-only key. Explain how to fix the draft before saving. No placeholders.`,
          }),
        })),
        (t[85] = e))
      : (e = t[85]),
      (pt = e));
  } else if (ke === `duplicate-key`) {
    let e;
    (t[86] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `text-sm text-red`,
          role: `alert`,
          children: (0, $.jsx)(K, {
            id: `appgenSettings.environmentKeys.duplicate`,
            defaultMessage: `Environment variable keys must be unique`,
            description: `Validation shown when environment settings use a duplicate key`,
          }),
        })),
        (t[86] = e))
      : (e = t[86]),
      (pt = e));
  } else if (ke === `stored-secret-needs-value`) {
    let e;
    (t[87] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `text-sm text-red`,
          role: `alert`,
          children: (0, $.jsx)(K, {
            id: `appgenSettings.environmentVariables.storedSecretNeedsValue`,
            defaultMessage: `Enter a new value before making a stored secret public`,
            description: `Validation shown when a stored secret is changed to a public environment variable without replacing its hidden value`,
          }),
        })),
        (t[87] = e))
      : (e = t[87]),
      (pt = e));
  }
  let gt = null;
  ce === `error` && le === `error`
    ? (gt = `both`)
    : ce === `error`
      ? (gt = `title`)
      : le === `error` && (gt = `environment`);
  let vt = null;
  if (Ne) {
    let e;
    (t[88] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(K, {
          id: `appgenSettings.autosave.saving`,
          defaultMessage: `Saving…`,
          description: `Status on Site settings and the settings dialog while the owner's name or environment changes are being saved automatically`,
        })),
        (t[88] = e))
      : (e = t[88]),
      (vt = e));
  } else if (
    gt == null &&
    !je &&
    ke == null &&
    oe == null &&
    ae == null &&
    (ce === `saved` || le === `saved`)
  ) {
    let e;
    (t[89] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(K, {
          id: `appgenSettings.autosave.saved`,
          defaultMessage: `Saved`,
          description: `Status confirming that the Site owner's latest name and environment edits were saved successfully`,
        })),
        (t[89] = e))
      : (e = t[89]),
      (vt = e));
  }
  let yt;
  t[90] !== J || t[91] !== q
    ? ((yt = (e) => {
        (e.preventDefault(), q(), J());
      }),
      (t[90] = J),
      (t[91] = q),
      (t[92] = yt))
    : (yt = t[92]);
  let bt;
  t[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = (0, $.jsx)(Nt.Header, {
        title: (0, $.jsx)(`span`, {
          className: `text-base`,
          children: (0, $.jsx)(K, {
            id: `appgenSettings.general.title`,
            defaultMessage: `General`,
            description: `Section heading for general Site information on the Site settings page`,
          }),
        }),
      })),
      (t[93] = bt))
    : (bt = t[93]);
  let Ct, wt;
  t[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, $.jsx)(K, {
        id: `appgenSettings.general.title.label`,
        defaultMessage: `Name`,
        description: `Short label for the editable Site title field on the Site settings page`,
      })),
      (wt = (0, $.jsx)(K, {
        id: `appgenSettings.general.title.description`,
        defaultMessage: `Name for your site`,
        description: `Help text for the editable Site title field on the Site settings page`,
      })),
      (t[94] = Ct),
      (t[95] = wt))
    : ((Ct = t[94]), (wt = t[95]));
  let Tt;
  t[96] === I
    ? (Tt = t[97])
    : ((Tt = I.formatMessage({
        id: `appgenSettings.general.title.ariaLabel`,
        defaultMessage: `Site title`,
        description: `Accessible label for the Site title text input on the Site settings page`,
      })),
      (t[96] = I),
      (t[97] = Tt));
  let Et = je ? Nr : void 0,
    Dt;
  t[98] !== q || t[99] !== ue || t[100] !== de || t[101] !== V || t[102] !== U
    ? ((Dt = (e) => {
        let t = e.target.value;
        ((V.current = t),
          ue(t),
          de(Sr),
          U.current != null && clearTimeout(U.current),
          Pe.current || (U.current = setTimeout(q, 900)));
      }),
      (t[98] = q),
      (t[99] = ue),
      (t[100] = de),
      (t[101] = V),
      (t[102] = U),
      (t[103] = Dt))
    : (Dt = t[103]);
  let Ot;
  t[104] === U
    ? (Ot = t[105])
    : ((Ot = () => {
        ((Pe.current = !0), U.current != null && clearTimeout(U.current));
      }),
      (t[104] = U),
      (t[105] = Ot));
  let kt;
  t[106] !== q || t[107] !== U
    ? ((kt = () => {
        ((Pe.current = !1), U.current != null && clearTimeout(U.current), (U.current = setTimeout(q, 900)));
      }),
      (t[106] = q),
      (t[107] = U),
      (t[108] = kt))
    : (kt = t[108]);
  let At;
  t[109] === q
    ? (At = t[110])
    : ((At = (e) => {
        e.key === `Enter` &&
          !e.nativeEvent.isComposing &&
          e.nativeEvent.keyCode !== 229 &&
          (e.preventDefault(), q());
      }),
      (t[109] = q),
      (t[110] = At));
  let jt;
  t[111] !== je ||
  t[112] !== q ||
  t[113] !== Tt ||
  t[114] !== Et ||
  t[115] !== Dt ||
  t[116] !== Ot ||
  t[117] !== kt ||
  t[118] !== At ||
  t[119] !== Me
    ? ((jt = (0, $.jsx)(De, {
        labelWeight: `normal`,
        layout: `split`,
        label: Ct,
        description: wt,
        control: (0, $.jsx)(`div`, {
          className: `w-full max-w-84`,
          children: (0, $.jsx)(ht, {
            "aria-label": Tt,
            "aria-describedby": Et,
            "aria-invalid": je,
            maxLength: 100,
            type: `text`,
            value: Me,
            onChange: Dt,
            onCompositionStart: Ot,
            onCompositionEnd: kt,
            onBlur: q,
            onKeyDown: At,
          }),
        }),
      })),
      (t[111] = je),
      (t[112] = q),
      (t[113] = Tt),
      (t[114] = Et),
      (t[115] = Dt),
      (t[116] = Ot),
      (t[117] = kt),
      (t[118] = At),
      (t[119] = Me),
      (t[120] = jt))
    : (jt = t[120]);
  let Mt;
  t[121] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = (0, $.jsx)(K, {
        id: `appgenSettings.general.url.label`,
        defaultMessage: `URL`,
        description: `Label for the published Site URL on the Site settings page`,
      })),
      (t[121] = Mt))
    : (Mt = t[121]);
  let Pt;
  t[122] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pt = (0, $.jsx)(K, {
        id: `appgenSettings.general.url.description`,
        defaultMessage: `Web address`,
        description: `Description for the published Site URL on the Site settings page`,
      })),
      (t[122] = Pt))
    : (Pt = t[122]);
  let It;
  t[123] !== i || t[124] !== se || t[125] !== u.status || t[126] !== g
    ? ((It =
        se == null || u.status === `suspended`
          ? g
          : (0, $.jsx)(Ze, {
              className: `block max-w-full truncate`,
              appearance: `secondary`,
              underline: `hover`,
              href: se,
              initiator: `sites_library`,
              openAsWebsite: !0,
              openTarget: i ? `external-browser` : void 0,
              children: ct(se),
            })),
      (t[123] = i),
      (t[124] = se),
      (t[125] = u.status),
      (t[126] = g),
      (t[127] = It))
    : (It = t[127]);
  let Lt;
  t[128] === It
    ? (Lt = t[129])
    : ((Lt = (0, $.jsx)(`span`, {
        className: `min-w-0 flex-1 text-end text-sm text-secondary`,
        children: It,
      })),
      (t[128] = It),
      (t[129] = Lt));
  let Rt;
  t[130] !== ft ||
  t[131] !== se ||
  t[132] !== I ||
  t[133] !== Qe ||
  t[134] !== h ||
  t[135] !== d ||
  t[136] !== g
    ? ((Rt = ft
        ? (0, $.jsx)(z, {
            "aria-label": I.formatMessage({
              id: `appgenSettings.general.url.changeAriaLabel`,
              defaultMessage: `Change hosted site URL`,
              description: `Accessible label for opening the hosted Site URL change dialog`,
            }),
            color: `outlineSurface`,
            loading: Qe,
            size: `toolbar`,
            onClick: () => {
              lr(d, { currentSlug: g, hostedDomainSuffix: Be(se, g), projectId: h });
            },
            children: (0, $.jsx)(K, {
              id: `appgenSettings.general.url.change`,
              defaultMessage: `Change`,
              description: `Button label for changing a Site's hosted URL`,
            }),
          })
        : null),
      (t[130] = ft),
      (t[131] = se),
      (t[132] = I),
      (t[133] = Qe),
      (t[134] = h),
      (t[135] = d),
      (t[136] = g),
      (t[137] = Rt))
    : (Rt = t[137]);
  let zt;
  t[138] !== Lt || t[139] !== Rt
    ? ((zt = (0, $.jsx)(De, {
        labelWeight: `normal`,
        layout: `split`,
        label: Mt,
        labelSizing: `content`,
        controlSizing: `grow`,
        description: Pt,
        control: (0, $.jsxs)(`div`, {
          className: `flex w-full min-w-0 items-center justify-end gap-2 max-sm:justify-between`,
          children: [Lt, Rt],
        }),
      })),
      (t[138] = Lt),
      (t[139] = Rt),
      (t[140] = zt))
    : (zt = t[140]);
  let Bt = b ? void 0 : k,
    Vt = T || b || D,
    Ht = !D && (b || A),
    Ut = D || (!b && j),
    Gt;
  t[141] !== b || t[142] !== M || t[143] !== w
    ? ((Gt = async () => {
        if (b) {
          let e = await w();
          if (e.isError) return `error`;
          if (e.data?.custom_domains_enabled !== !0) return `unavailable`;
        }
        return (await M()).isError ? `error` : `success`;
      }),
      (t[141] = b),
      (t[142] = M),
      (t[143] = w),
      (t[144] = Gt))
    : (Gt = t[144]);
  let Kt;
  t[145] !== h || t[146] !== Bt || t[147] !== Vt || t[148] !== Ht || t[149] !== Ut || t[150] !== Gt
    ? ((Kt = (0, $.jsx)(Tn, {
        customDomains: Bt,
        isAvailable: Vt,
        isError: Ht,
        isLoading: Ut,
        onRetry: Gt,
        projectId: h,
      })),
      (t[145] = h),
      (t[146] = Bt),
      (t[147] = Vt),
      (t[148] = Ht),
      (t[149] = Ut),
      (t[150] = Gt),
      (t[151] = Kt))
    : (Kt = t[151]);
  let Jt;
  t[152] !== h || t[153] !== u.sharing || t[154] !== _
    ? ((Jt = (0, $.jsx)(Dr, { accessState: u.sharing, projectId: h, siteTitle: _ })),
      (t[152] = h),
      (t[153] = u.sharing),
      (t[154] = _),
      (t[155] = Jt))
    : (Jt = t[155]);
  let Yt;
  t[156] !== jt || t[157] !== zt || t[158] !== Kt || t[159] !== Jt
    ? ((Yt = (0, $.jsxs)(Nt, {
        children: [
          bt,
          (0, $.jsx)(Nt.Content, {
            children: (0, $.jsxs)(n, { variant: `flat`, children: [jt, zt, Kt, Jt] }),
          }),
        ],
      })),
      (t[156] = jt),
      (t[157] = zt),
      (t[158] = Kt),
      (t[159] = Jt),
      (t[160] = Yt))
    : (Yt = t[160]);
  let Xt = le === `saving`,
    Zt;
  t[161] === me ? (Zt = t[162]) : ((Zt = (e) => me.current?.has(e) === !0), (t[161] = me), (t[162] = Zt));
  let Qt = a.requires_secrets === !0,
    $t;
  t[163] === Symbol.for(`react.memo_cache_sentinel`) ? (($t = () => Se(!1)), (t[163] = $t)) : ($t = t[163]);
  let en;
  t[164] !== a || t[165] !== H || t[166] !== B || t[167] !== R
    ? ((en = (e) => {
        let t = { baseEnvironment: H.current?.baseEnvironment ?? a, draft: { entries: e } };
        ((H.current = t), R(t), B(xr));
      }),
      (t[164] = a),
      (t[165] = H),
      (t[166] = B),
      (t[167] = R),
      (t[168] = en))
    : (en = t[168]);
  let tn;
  t[169] !== Ee.entries || t[170] !== J || t[171] !== Xt || t[172] !== Zt || t[173] !== Qt || t[174] !== en
    ? ((tn = (0, $.jsx)(ir, {
        entries: Ee.entries,
        isSaving: Xt,
        isSaveUncertain: Zt,
        requiresSecrets: Qt,
        onAdd: $t,
        onChange: en,
        onCommit: J,
      })),
      (t[169] = Ee.entries),
      (t[170] = J),
      (t[171] = Xt),
      (t[172] = Zt),
      (t[173] = Qt),
      (t[174] = en),
      (t[175] = tn))
    : (tn = t[175]);
  let nn;
  t[176] !== le || t[177] !== J || t[178] !== q || t[179] !== gt || t[180] !== ce
    ? ((nn =
        gt == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, $.jsx)(`p`, {
                  className: `text-sm text-red`,
                  role: `alert`,
                  children: (0, $.jsx)(K, { ...Ir[gt] }),
                }),
                (0, $.jsx)(z, {
                  size: `toolbar`,
                  type: `button`,
                  onClick: () => {
                    (ce === `error` && q(), le === `error` && J());
                  },
                  children: (0, $.jsx)(K, {
                    id: `appgenSettings.autosave.retry`,
                    defaultMessage: `Retry`,
                    description: `Button on Site settings and the settings dialog that retries failed automatic saves, preserving the owner's edits`,
                  }),
                }),
              ],
            })),
      (t[176] = le),
      (t[177] = J),
      (t[178] = q),
      (t[179] = gt),
      (t[180] = ce),
      (t[181] = nn))
    : (nn = t[181]);
  let rn;
  t[182] === vt
    ? (rn = t[183])
    : ((rn = (0, $.jsx)(`p`, { className: `text-sm text-secondary`, role: `status`, children: vt })),
      (t[182] = vt),
      (t[183] = rn));
  let an;
  t[184] !== tn || t[185] !== nn || t[186] !== rn || t[187] !== pt
    ? ((an = (0, $.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [tn, pt, nn, rn] })),
      (t[184] = tn),
      (t[185] = nn),
      (t[186] = rn),
      (t[187] = pt),
      (t[188] = an))
    : (an = t[188]);
  let on;
  t[189] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((on = (0, $.jsx)(Nt.Header, {
        title: (0, $.jsx)(K, {
          id: `appgenSettings.danger.title`,
          defaultMessage: `Danger zone`,
          description: `Heading for destructive site actions`,
        }),
      })),
      (t[189] = on))
    : (on = t[189]);
  let sn;
  t[190] !== L ||
  t[191] !== H ||
  t[192] !== ge ||
  t[193] !== me ||
  t[194] !== J ||
  t[195] !== q ||
  t[196] !== G ||
  t[197] !== V ||
  t[198] !== ye ||
  t[199] !== W
    ? ((sn = () =>
        G.current || !L.isCurrentIdentity()
          ? !1
          : (q(),
            J(),
            !Pe.current &&
              !W.current &&
              !ge.current &&
              V.current == null &&
              H.current == null &&
              me.current == null &&
              !ye.current)),
      (t[190] = L),
      (t[191] = H),
      (t[192] = ge),
      (t[193] = me),
      (t[194] = J),
      (t[195] = q),
      (t[196] = G),
      (t[197] = V),
      (t[198] = ye),
      (t[199] = W),
      (t[200] = sn))
    : (sn = t[200]);
  let cn;
  t[201] !== Ne || t[202] !== l || t[203] !== u || t[204] !== sn
    ? ((cn = (0, $.jsx)(dr, { disabled: Ne, onBeforeTransfer: sn, onTransferred: l, project: u })),
      (t[201] = Ne),
      (t[202] = l),
      (t[203] = u),
      (t[204] = sn),
      (t[205] = cn))
    : (cn = t[205]);
  let ln, un;
  t[206] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ln = (0, $.jsx)(K, {
        id: `appgenSettings.danger.delete.label`,
        defaultMessage: `Delete site`,
        description: `Label for the delete site action`,
      })),
      (un = (0, $.jsx)(K, {
        id: `appgenSettings.danger.delete.description`,
        defaultMessage: `Permanently delete this site`,
        description: `Description for the delete site action`,
      })),
      (t[206] = ln),
      (t[207] = un))
    : ((ln = t[206]), (un = t[207]));
  let dn;
  t[208] !== H ||
  t[209] !== ge ||
  t[210] !== c ||
  t[211] !== h ||
  t[212] !== J ||
  t[213] !== q ||
  t[214] !== d ||
  t[215] !== R ||
  t[216] !== ue ||
  t[217] !== g ||
  t[218] !== _ ||
  t[219] !== G ||
  t[220] !== V ||
  t[221] !== W ||
  t[222] !== U
    ? ((dn = () => {
        ze(d, Or, {
          onDeleteStart: () =>
            W.current || ge.current
              ? !1
              : ((G.current = !0), U.current != null && clearTimeout(U.current), !0),
          onDeleteError: () => {
            ((G.current = !1), q(), J());
          },
          onDeleted: () => {
            ((V.current = null), (H.current = null), ue(null), R(null), c());
          },
          projectId: h,
          siteSlug: g,
          siteTitle: _,
        });
      }),
      (t[208] = H),
      (t[209] = ge),
      (t[210] = c),
      (t[211] = h),
      (t[212] = J),
      (t[213] = q),
      (t[214] = d),
      (t[215] = R),
      (t[216] = ue),
      (t[217] = g),
      (t[218] = _),
      (t[219] = G),
      (t[220] = V),
      (t[221] = W),
      (t[222] = U),
      (t[223] = dn))
    : (dn = t[223]);
  let fn;
  t[224] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fn = (0, $.jsx)(K, {
        id: `appgenSettings.danger.delete.button`,
        defaultMessage: `Delete site`,
        description: `Delete site button label`,
      })),
      (t[224] = fn))
    : (fn = t[224]);
  let pn;
  t[225] !== Ne || t[226] !== dn
    ? ((pn = (0, $.jsx)(De, {
        labelWeight: `normal`,
        layout: `split`,
        label: ln,
        description: un,
        control: (0, $.jsx)(z, {
          color: `dangerOutline`,
          disabled: Ne,
          size: `toolbar`,
          type: `button`,
          onClick: dn,
          children: fn,
        }),
      })),
      (t[225] = Ne),
      (t[226] = dn),
      (t[227] = pn))
    : (pn = t[227]);
  let hn;
  t[228] !== cn || t[229] !== pn
    ? ((hn = (0, $.jsxs)(Nt, {
        children: [
          on,
          (0, $.jsx)(Nt.Content, { children: (0, $.jsxs)(n, { variant: `flat`, children: [cn, pn] }) }),
        ],
      })),
      (t[228] = cn),
      (t[229] = pn),
      (t[230] = hn))
    : (hn = t[230]);
  let gn;
  return (
    t[231] !== yt || t[232] !== Yt || t[233] !== an || t[234] !== hn
      ? ((gn = (0, $.jsxs)(`form`, {
          className: `flex flex-col gap-12`,
          onSubmit: yt,
          children: [Yt, an, hn],
        })),
        (t[231] = yt),
        (t[232] = Yt),
        (t[233] = an),
        (t[234] = hn),
        (t[235] = gn))
      : (gn = t[235]),
    gn
  );
}
function xr(e) {
  return e === `error` || e === `saving` ? e : `idle`;
}
function Sr(e) {
  return e === `error` || e === `saving` ? e : `idle`;
}
function Cr(e) {
  let { previousKey: t } = e;
  return t;
}
function wr(e) {
  let { key: t } = e;
  return t;
}
function Tr(e) {
  let { is_secret: t } = e;
  return !t;
}
function Er(e) {
  let { key: t } = e;
  return t;
}
function Dr(e) {
  let t = (0, jr.c)(25),
    { accessState: n, projectId: i, siteTitle: a } = e,
    o = r(P),
    s = Ce(),
    c,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(K, {
        id: `appgenSettings.sharing.label`,
        defaultMessage: `Sharing`,
        description: `Label for site sharing settings`,
      })),
      (l = (0, $.jsx)(K, {
        id: `appgenSettings.sharing.description`,
        defaultMessage: `Who can view your site`,
        description: `Description for site sharing settings`,
      })),
      (t[0] = c),
      (t[1] = l))
    : ((c = t[0]), (l = t[1]));
  let u;
  t[2] === n
    ? (u = t[3])
    : ((u = (0, $.jsx)(rn, { "aria-hidden": !0, accessState: n, className: `icon-2xs shrink-0` })),
      (t[2] = n),
      (t[3] = u));
  let d;
  t[4] === n ? (d = t[5]) : ((d = sn(n)), (t[4] = n), (t[5] = d));
  let f;
  t[6] !== n || t[7] !== d
    ? ((f = (0, $.jsx)(K, { ...d, values: n })), (t[6] = n), (t[7] = d), (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== u || t[10] !== f
    ? ((p = (0, $.jsxs)(`span`, {
        className: `flex items-center gap-1 text-sm text-secondary`,
        children: [u, f],
      })),
      (t[9] = u),
      (t[10] = f),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === s
    ? (m = t[13])
    : ((m = s.formatMessage({
        id: `appgenSettings.sharing.buttonAriaLabel`,
        defaultMessage: `Manage sharing`,
        description: `Accessible label for managing site sharing`,
      })),
      (t[12] = s),
      (t[13] = m));
  let h;
  t[14] !== i || t[15] !== o || t[16] !== a
    ? ((h = () => cn(o, i, { initialProjectTitle: a, source: le.CODEX_SITES_SHARING_SOURCE_SETTINGS })),
      (t[14] = i),
      (t[15] = o),
      (t[16] = a),
      (t[17] = h))
    : (h = t[17]);
  let g;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(K, {
        id: `appgenSettings.sharing.button`,
        defaultMessage: `Manage`,
        description: `Button label for managing site sharing settings`,
      })),
      (t[18] = g))
    : (g = t[18]);
  let _;
  t[19] !== m || t[20] !== h
    ? ((_ = (0, $.jsx)(z, {
        "aria-label": m,
        color: `outlineSurface`,
        size: `toolbar`,
        onClick: h,
        children: g,
      })),
      (t[19] = m),
      (t[20] = h),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  return (
    t[22] !== _ || t[23] !== p
      ? ((v = (0, $.jsx)(De, {
          labelWeight: `normal`,
          layout: `split`,
          label: c,
          description: l,
          control: (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2 max-sm:w-full max-sm:justify-between`,
            children: [p, _],
          }),
        })),
        (t[22] = _),
        (t[23] = p),
        (t[24] = v))
      : (v = t[24]),
    v
  );
}
function Or(e) {
  let t = (0, jr.c)(51),
    {
      onClose: n,
      onDeleteStart: i,
      onDeleteError: a,
      onDeleted: o,
      projectId: s,
      siteSlug: c,
      siteTitle: l,
    } = e,
    u = r(P),
    d = xe(Ke, s),
    f = Ce(),
    [m, h] = (0, Mr.useState)(``),
    g;
  t[0] === l
    ? (g = t[1])
    : ((g = (0, $.jsx)(K, {
        id: `appgenSettings.deleteDialog.title`,
        defaultMessage: `Delete {siteTitle}?`,
        description: `Title for dialog confirming deletion of a site`,
        values: { siteTitle: l },
      })),
      (t[0] = l),
      (t[1] = g));
  let v = g,
    y = !d.isPending,
    x;
  t[2] !== d.isPending || t[3] !== n
    ? ((x = (e) => {
        !e && !d.isPending && n();
      }),
      (t[2] = d.isPending),
      (t[3] = n),
      (t[4] = x))
    : (x = t[4]);
  let S;
  t[5] !== m ||
  t[6] !== d ||
  t[7] !== f ||
  t[8] !== n ||
  t[9] !== a ||
  t[10] !== i ||
  t[11] !== o ||
  t[12] !== u ||
  t[13] !== c
    ? ((S = (e) => {
        (e.preventDefault(),
          gn(c, m) &&
            !d.isPending &&
            i() &&
            d.mutateAsync().then(
              () => {
                (u
                  .get(Te)
                  .success(
                    f.formatMessage({
                      id: `appgenSettings.deleteDialog.success`,
                      defaultMessage: `Site deleted`,
                      description: `Success toast shown after deleting a site`,
                    }),
                  ),
                  n(),
                  o());
              },
              () => {
                (a(),
                  u
                    .get(Te)
                    .danger(
                      f.formatMessage({
                        id: `appgenSettings.deleteDialog.error`,
                        defaultMessage: `Unable to delete site`,
                        description: `Error toast shown when deleting a site fails`,
                      }),
                      { errorAnalytics: { toastId: `sites_settings_delete_error` } },
                    ));
              },
            ));
      }),
      (t[5] = m),
      (t[6] = d),
      (t[7] = f),
      (t[8] = n),
      (t[9] = a),
      (t[10] = i),
      (t[11] = o),
      (t[12] = u),
      (t[13] = c),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] === v
    ? (C = t[16])
    : ((C = (0, $.jsx)(we, { className: `contents`, children: v })), (t[15] = v), (t[16] = C));
  let w;
  t[17] === c
    ? (w = t[18])
    : ((w = (0, $.jsx)(_, { className: `contents`, children: (0, $.jsx)(hn, { siteSlug: c }) })),
      (t[17] = c),
      (t[18] = w));
  let T;
  t[19] !== C || t[20] !== w
    ? ((T = (0, $.jsx)(`div`, {
        className: `flex w-full flex-col`,
        children: (0, $.jsx)(ee, { title: C, titleClassName: `truncate pe-8`, subtitle: w }),
      })),
      (t[19] = C),
      (t[20] = w),
      (t[21] = T))
    : (T = t[21]);
  let E;
  t[22] !== m || t[23] !== d.isPending || t[24] !== c
    ? ((E = (0, $.jsx)(Ie, {
        children: (0, $.jsx)(vn, { siteSlug: c, confirmationSlug: m, onChange: h, pending: d.isPending }),
      })),
      (t[22] = m),
      (t[23] = d.isPending),
      (t[24] = c),
      (t[25] = E))
    : (E = t[25]);
  let D;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(K, {
        id: `appgenSettings.deleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete site confirmation dialog`,
      })),
      (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] !== d.isPending || t[28] !== n
    ? ((O = (0, $.jsx)(z, {
        color: `ghost`,
        disabled: d.isPending,
        type: `button`,
        onClick: n,
        children: D,
      })),
      (t[27] = d.isPending),
      (t[28] = n),
      (t[29] = O))
    : (O = t[29]);
  let k;
  t[30] !== m || t[31] !== d.isPending || t[32] !== c
    ? ((k = !gn(c, m) || d.isPending), (t[30] = m), (t[31] = d.isPending), (t[32] = c), (t[33] = k))
    : (k = t[33]);
  let A;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(K, {
        id: `appgenSettings.deleteDialog.confirm`,
        defaultMessage: `Permanently delete`,
        description: `Confirm button label for delete site confirmation dialog`,
      })),
      (t[34] = A))
    : (A = t[34]);
  let j;
  t[35] !== d.isPending || t[36] !== k
    ? ((j = (0, $.jsx)(z, {
        color: `danger`,
        disabled: k,
        loading: d.isPending,
        type: `submit`,
        children: A,
      })),
      (t[35] = d.isPending),
      (t[36] = k),
      (t[37] = j))
    : (j = t[37]);
  let M;
  t[38] !== O || t[39] !== j
    ? ((M = (0, $.jsx)(Ie, { children: (0, $.jsxs)(b, { children: [O, j] }) })),
      (t[38] = O),
      (t[39] = j),
      (t[40] = M))
    : (M = t[40]);
  let N;
  t[41] !== M || t[42] !== S || t[43] !== T || t[44] !== E
    ? ((N = (0, $.jsxs)(p, { as: `form`, className: `gap-4 px-4 py-3`, onSubmit: S, children: [T, E, M] })),
      (t[41] = M),
      (t[42] = S),
      (t[43] = T),
      (t[44] = E),
      (t[45] = N))
    : (N = t[45]);
  let F;
  return (
    t[46] !== d.isPending || t[47] !== N || t[48] !== y || t[49] !== x
      ? ((F = (0, $.jsx)(se, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: d.isPending,
          showDialogClose: y,
          onOpenChange: x,
          children: N,
        })),
        (t[46] = d.isPending),
        (t[47] = N),
        (t[48] = y),
        (t[49] = x),
        (t[50] = F))
      : (F = t[50]),
    F
  );
}
function kr(e) {
  let t = (0, jr.c)(6),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(K, {
        id: `appgenSettings.error.retry`,
        defaultMessage: `Retry`,
        description: `Button to retry loading Site settings after a load failure`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = (0, $.jsx)(z, { color: `outline`, onClick: n, children: r })), (t[1] = n), (t[2] = i));
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(K, {
        id: `appgenSettings.error.title`,
        defaultMessage: `Unable to load site settings`,
        description: `Error state title for the site settings page`,
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === i
      ? (o = t[5])
      : ((o = (0, $.jsx)(ft, { layout: `page`, actions: i, title: a })), (t[4] = i), (t[5] = o)),
    o
  );
}
function Ar(e) {
  if (e instanceof ge)
    try {
      return G({ detail: G({ type: L() }) }).safeParse(JSON.parse(e.message)).data?.detail.type;
    } catch {
      return;
    }
}
var jr, Mr, $, Nr, Pr, Fr, Ir;
function Lr() {
  return (Lr = e(() => {
    ((jr = k()),
      pt(),
      F(),
      W(),
      _e(),
      x(),
      V(),
      (Mr = l()),
      R(),
      w(),
      d(),
      Bt(),
      B(),
      m(),
      f(),
      At(),
      ut(),
      We(),
      q(),
      oe(),
      Kt(),
      i(),
      bt(),
      vt(),
      je(),
      me(),
      Gt(),
      j(),
      wn(),
      on(),
      an(),
      Rn(),
      Kn(),
      Jt(),
      qe(),
      Qe(),
      Zt(),
      Xn(),
      en(),
      $t(),
      Mt(),
      ot(),
      cr(),
      ur(),
      ln(),
      hr(),
      _n(),
      dt(),
      ($ = y()),
      (Nr = `appgen-settings-site-title-error`),
      (Pr = 1e3),
      (Fr = 66e4),
      (Ir = ue({
        title: {
          id: `appgenSettings.save.titleError`,
          defaultMessage: `The site name couldn’t be saved. Your edit is still here; select Retry to try again.`,
          description: `Persistent inline error and toast after the Site settings name update fails. The Site owner retains the draft and can retry the automatic save; any environment-variable update succeeded or was unnecessary. No placeholders.`,
        },
        environment: {
          id: `appgenSettings.save.environmentError`,
          defaultMessage: `Environment variables couldn’t be saved. Your edits are still here; select Retry to try again.`,
          description: `Persistent inline error and toast after Site environment variables fail to save. The Site owner retains the draft and can retry the automatic save; any name update succeeded or was unnecessary. No placeholders.`,
        },
        both: {
          id: `appgenSettings.save.allError`,
          defaultMessage: `The site name and environment variables couldn’t be saved. Your edits are still here; select Retry to try again.`,
          description: `Persistent inline error and toast after both Site settings updates fail. Reassure the Site owner that the name and environment-variable drafts remain available and explain the Save retry action. No placeholders.`,
        },
      })));
  }))();
}
export { gr as n, Lr as r, vr as t };
//# sourceMappingURL=appgen-settings-page-63b694c76908.js.map
