const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./appgen-change-slug-dialog-de19e51890b5.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./dialog-5f51fbe2d2e6.js",
      "./use-workspace-users-9ff632adf20a.js",
      "./profile-card-24cf744f537b.js",
      "./profile-avatar-90effac925f0.js",
      "./state-23e2d7b7e609.js",
      "./avatar-ed18f22a2837.js",
      "./tab-214abc64feae.js",
      "./dialog-utils-21c4d759328d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  ADt as r,
  Cot as i,
  D2 as a,
  EPt as o,
  Ext as s,
  Fat as c,
  IDt as l,
  Iot as u,
  Irt as d,
  Ixt as f,
  JC as p,
  LT as m,
  Lot as h,
  M3 as g,
  MO as _,
  Mz as v,
  Nz as y,
  O2 as b,
  Pat as x,
  Pxt as S,
  QI as C,
  QJ as w,
  RT as T,
  Rnt as E,
  Rxt as D,
  TJ as O,
  TLt as k,
  USt as A,
  VDt as ee,
  Vxt as j,
  Wtt as M,
  XV as N,
  Xot as P,
  Yot as F,
  ZI as I,
  ZJ as te,
  _O as ne,
  _xt as L,
  bx as re,
  cO as R,
  cz as ie,
  eLt as ae,
  eZ as oe,
  fO as z,
  fPt as se,
  gO as ce,
  hot as le,
  hrt as ue,
  i3 as de,
  iO as fe,
  iw as B,
  jDt as V,
  jO as pe,
  kxt as H,
  lO as U,
  lot as me,
  mO as W,
  nj as he,
  nst as ge,
  oO as G,
  oxt as _e,
  pLt as ve,
  pPt as ye,
  qC as be,
  r3 as xe,
  rO as K,
  sO as q,
  sz as Se,
  t3 as Ce,
  tj as we,
  tst as Te,
  tw as Ee,
  vO as De,
  vrt as Oe,
  vzt as ke,
  wot as Ae,
  wxt as je,
  xMt as Me,
  yx as Ne,
  yzt as Pe,
  zSt as Fe,
  zxt as Ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Tr as J,
  ACn as Le,
  Agn as Y,
  BB as Re,
  BYt as ze,
  Cgn as Be,
  DPn as Ve,
  Ek as He,
  FB as Ue,
  Fhn as We,
  Fin as Ge,
  G4n as Ke,
  GMr as qe,
  Hin as Je,
  IYt as Ye,
  J4n as Xe,
  KTr as Ze,
  Lhn as Qe,
  Nhn as $e,
  QDr as et,
  Qhn as tt,
  RB as nt,
  TPn as rt,
  Tk as it,
  XDr as at,
  XMr as ot,
  Xhn as st,
  Yhn as ct,
  Ymr as lt,
  Zhn as ut,
  _F as dt,
  bgn as ft,
  cEr as pt,
  cgn as mt,
  dgn as ht,
  dxt as gt,
  eDr as _t,
  eP as vt,
  ehr as yt,
  fgn as bt,
  fur as xt,
  fyr as St,
  hF as Ct,
  iI as wt,
  iPr as Tt,
  ign as Et,
  jCn as Dt,
  kgn as Ot,
  lxt as kt,
  lyr as At,
  mgn as jt,
  nDr as Mt,
  oEr as Nt,
  oI as Pt,
  ocr as Ft,
  ogn as It,
  pgn as Lt,
  pur as Rt,
  qB as zt,
  rI as Bt,
  sPr as Vt,
  sgn as Ht,
  tNr as Ut,
  tP as Wt,
  xPn as Gt,
  xgn as Kt,
  yPn as qt,
  ygn as Jt,
} from "./app-initial-5851df3f6cb1.js";
import { fm as Yt, pm as Xt } from "./app-primary-fe8a450b3b04.js";
import {
  g as Zt,
  h as Qt,
  m as $t,
  n as en,
  p as tn,
  t as nn,
} from "./appgen-site-detail-layout-f1525d985a83.js";
import { a as rn, i as an, o as on, t as sn } from "./appgen-access-state-messages-64c90daeb132.js";
import { n as cn, t as ln } from "./open-appgen-share-dialog-8d437cfd3c67.js";
import { r as un, t as dn } from "./sites-share-query-8b03740b1df6.js";
import { n as fn, t as pn } from "./settings-rows-3e4ff6fa8232.js";
import { i as mn, n as hn, o as gn, r as _n, t as vn } from "./site-delete-confirmation-b17089235f40.js";
function yn(e) {
  let t = (0, xn.c)(21),
    { projectId: n } = e,
    r = je(),
    i = s(),
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
        let i = Nt(e);
        (e.delete(Ze), e.delete(`account_id`));
        let s = { ...r, search: e.toString() },
          c = i == null ? void 0 : { projectId: n, token: i },
          l;
        t[6] !== a || t[7] !== c
          ? ((l = { ...a, sitesAccessRequest: c }), (t[6] = a), (t[7] = c), (t[8] = l))
          : (l = t[8]);
        let u;
        (t[9] !== s || t[10] !== l
          ? ((u = (0, X.jsx)(_e, { replace: !0, to: s, state: l })), (t[9] = s), (t[10] = l), (t[11] = u))
          : (u = t[11]),
          (o = u));
        break bb0;
      }
    }
    ((t[0] = r), (t[1] = n), (t[2] = a), (t[3] = o));
  } else ((a = t[2]), (o = t[3]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let c = a.sitesAccessRequest;
  if (c == null || c.projectId !== n) return null;
  let l = `${n}:${c.token}`,
    u;
  t[12] !== r || t[13] !== i || t[14] !== a
    ? ((u = () => {
        let { sitesAccessRequest: e, ...t } = a;
        i(r, { replace: !0, state: t });
      }),
      (t[12] = r),
      (t[13] = i),
      (t[14] = a),
      (t[15] = u))
    : (u = t[15]);
  let d;
  return (
    t[16] !== n || t[17] !== c.token || t[18] !== l || t[19] !== u
      ? ((d = (0, X.jsx)(bn, { projectId: n, token: c.token, onClose: u }, l)),
        (t[16] = n),
        (t[17] = c.token),
        (t[18] = l),
        (t[19] = u),
        (t[20] = d))
      : (d = t[20]),
    d
  );
}
function bn(e) {
  let n = (0, xn.c)(90),
    { projectId: r, token: a, onClose: o } = e,
    s = f(i),
    c = ee(),
    u = ge(),
    { accountId: d, userId: p } = Rt(),
    m;
  n[0] !== d || n[1] !== r || n[2] !== a || n[3] !== p
    ? ((m = [`appgen`, `access-request`, p, d, r, a]),
      (n[0] = d),
      (n[1] = r),
      (n[2] = a),
      (n[3] = p),
      (n[4] = m))
    : (m = n[4]);
  let g;
  n[5] !== r || n[6] !== a
    ? ((g = (e) => {
        let { signal: t } = e;
        return lt.safeGet(`/websites/{project_id}/access_request`, {
          parameters: { path: { project_id: r }, query: { token: a } },
          signal: t,
        });
      }),
      (n[5] = r),
      (n[6] = a),
      (n[7] = g))
    : (g = n[7]);
  let _;
  n[8] !== m || n[9] !== g
    ? ((_ = { queryKey: m, queryFn: g, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
      (n[8] = m),
      (n[9] = g),
      (n[10] = _))
    : (_ = n[10]);
  let { data: v, error: y, isError: b, isFetching: x, refetch: S } = P(_),
    C;
  n[11] === y
    ? (C = n[12])
    : ((C = y instanceof ue && [400, 403, 404, 410].includes(y.status)), (n[11] = y), (n[12] = C));
  let w = C,
    T = (0, Sn.useRef)(!1),
    E;
  n[13] !== c || n[14] !== o || n[15] !== s
    ? ((E = () => {
        T.current ||
          ((T.current = !0),
          s
            .get(le)
            .danger(
              c.formatMessage({
                id: `appgenSettings.accessRequest.unavailable`,
                defaultMessage: `This access request is no longer available`,
                description: `Error toast after opening an expired, invalid, or unavailable Site access-request email link. Do not reveal whether the Site or requester exists.`,
              }),
              { errorAnalytics: { toastId: `sites_access_request_unavailable` } },
            ),
          o());
      }),
      (n[13] = c),
      (n[14] = o),
      (n[15] = s),
      (n[16] = E))
    : (E = n[16]);
  let D = (0, Sn.useEffectEvent)(E),
    O;
  n[17] !== w || n[18] !== D
    ? ((O = () => {
        w && D();
      }),
      (n[17] = w),
      (n[18] = D),
      (n[19] = O))
    : (O = n[19]);
  let k;
  (n[20] === w ? (k = n[21]) : ((k = [w]), (n[20] = w), (n[21] = k)), (0, Sn.useEffect)(O, k));
  let A;
  n[22] !== r || n[23] !== a
    ? ((A = () =>
        lt.safePost(`/websites/{project_id}/access_request`, {
          parameters: { path: { project_id: r } },
          requestBody: { token: a },
        })),
      (n[22] = r),
      (n[23] = a),
      (n[24] = A))
    : (A = n[24]);
  let j;
  n[25] !== u || n[26] !== r
    ? ((j = async () => {
        await Promise.all([ft(u, [r]), u.invalidateQueries({ queryKey: [...dn, r] })]);
      }),
      (n[25] = u),
      (n[26] = r),
      (n[27] = j))
    : (j = n[27]);
  let N;
  n[28] !== A || n[29] !== j
    ? ((N = { mutationFn: A, onSuccess: j, retry: !1 }), (n[28] = A), (n[29] = j), (n[30] = N))
    : (N = n[30]);
  let { mutate: F, isPending: I } = h(N);
  if (b && !w) {
    let e;
    n[31] === o
      ? (e = n[32])
      : ((e = (e) => {
          e || o();
        }),
        (n[31] = o),
        (n[32] = e));
    let r;
    n[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(R, {
          title: (0, X.jsx)(ne, {
            children: (0, X.jsx)(l, {
              id: `appgenSettings.accessRequest.loadError`,
              defaultMessage: `Unable to load access request`,
              description: `Title when loading a Site access request temporarily fails; the owner can retry without reopening the email`,
            }),
          }),
        })),
        (n[33] = r))
      : (r = n[33]);
    let i;
    n[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, X.jsx)(l, {
          id: `appgenSettings.accessRequest.notNow`,
          defaultMessage: `Not now`,
          description: `Dismiss a Site access request without approving or rejecting it.`,
        })),
        (n[34] = i))
      : (i = n[34]);
    let a;
    n[35] === o
      ? (a = n[36])
      : ((a = (0, X.jsx)(t, { color: `secondary`, onClick: o, children: i })), (n[35] = o), (n[36] = a));
    let s;
    n[37] === S
      ? (s = n[38])
      : ((s = () => {
          S();
        }),
        (n[37] = S),
        (n[38] = s));
    let c;
    n[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, X.jsx)(l, {
          id: `appgenSettings.accessRequest.retry`,
          defaultMessage: `Retry`,
          description: `Retry loading an emailed Site access request after a temporary failure`,
        })),
        (n[39] = c))
      : (c = n[39]);
    let u;
    n[40] !== x || n[41] !== s
      ? ((u = (0, X.jsx)(t, { loading: x, disabled: x, onClick: s, children: c })),
        (n[40] = x),
        (n[41] = s),
        (n[42] = u))
      : (u = n[42]);
    let d;
    n[43] !== a || n[44] !== u
      ? ((d = (0, X.jsxs)(G, { children: [r, (0, X.jsxs)(q, { children: [a, u] })] })),
        (n[43] = a),
        (n[44] = u),
        (n[45] = d))
      : (d = n[45]);
    let f;
    return (
      n[46] !== e || n[47] !== d
        ? ((f = (0, X.jsx)(W, { open: !0, size: `compact`, onOpenChange: e, children: d })),
          (n[46] = e),
          (n[47] = d),
          (n[48] = f))
        : (f = n[48]),
      f
    );
  }
  if (v == null || w) return null;
  let te = !I,
    L;
  n[49] !== I || n[50] !== o
    ? ((L = (e) => {
        !e && !I && o();
      }),
      (n[49] = I),
      (n[50] = o),
      (n[51] = L))
    : (L = n[51]);
  let re;
  n[52] !== F || n[53] !== c || n[54] !== I || n[55] !== o || n[56] !== r || n[57] !== s
    ? ((re = (e) => {
        (e.preventDefault(),
          !I &&
            F(void 0, {
              onSuccess: (e) => {
                (o(),
                  cn(s, r, {
                    initialIsOwner: !0,
                    initialProjectTitle: e.project_title,
                    source: M.CODEX_SITES_SHARING_SOURCE_SETTINGS,
                  }),
                  s
                    .get(le)
                    .success(
                      c.formatMessage(
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
                s
                  .get(le)
                  .danger(
                    c.formatMessage({
                      id: `appgenSettings.accessRequest.approveError`,
                      defaultMessage: `Unable to allow access`,
                      description: `Error toast when approving a Site view-access request fails. The owner can retry from the open dialog.`,
                    }),
                    { errorAnalytics: { toastId: `sites_access_request_approve_error` } },
                  ),
            }));
      }),
      (n[52] = F),
      (n[53] = c),
      (n[54] = I),
      (n[55] = o),
      (n[56] = r),
      (n[57] = s),
      (n[58] = re))
    : (re = n[58]);
  let ie;
  n[59] === v.requester_name
    ? (ie = n[60])
    : ((ie = v.requester_name.trim()), (n[59] = v.requester_name), (n[60] = ie));
  let ae;
  n[61] === ie
    ? (ae = n[62])
    : ((ae = (0, X.jsx)(ne, {
        children: (0, X.jsx)(l, {
          id: `appgenSettings.accessRequest.title`,
          defaultMessage: `{requesterName} wants to view`,
          description: `Title of the Site access-request review dialog opened from an email. requesterName is the name of the person asking to view the Site.`,
          values: { requesterName: ie },
        }),
      })),
      (n[61] = ie),
      (n[62] = ae));
  let oe = v.requester_email,
    z;
  n[63] === v.project_title
    ? (z = n[64])
    : ((z = v.project_title.trim()), (n[63] = v.project_title), (n[64] = z));
  let se;
  n[65] !== v.requester_email || n[66] !== z
    ? ((se = (0, X.jsx)(ce, {
        children: (0, X.jsx)(l, {
          id: `appgenSettings.accessRequest.description`,
          defaultMessage: `Allow {requesterEmail} to view {projectTitle}?`,
          description: `Confirmation in the Site access-request dialog. requesterEmail identifies the person asking for viewer access; projectTitle is the Site's title.`,
          values: { requesterEmail: oe, projectTitle: z },
        }),
      })),
      (n[65] = v.requester_email),
      (n[66] = z),
      (n[67] = se))
    : (se = n[67]);
  let de;
  n[68] !== ae || n[69] !== se
    ? ((de = (0, X.jsx)(R, { title: ae, subtitle: se })), (n[68] = ae), (n[69] = se), (n[70] = de))
    : (de = n[70]);
  let fe;
  n[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, X.jsx)(l, {
        id: `appgenSettings.accessRequest.notNow`,
        defaultMessage: `Not now`,
        description: `Dismiss a Site access request without approving or rejecting it.`,
      })),
      (n[71] = fe))
    : (fe = n[71]);
  let B;
  n[72] !== I || n[73] !== o
    ? ((B = (0, X.jsx)(t, { color: `secondary`, type: `button`, disabled: I, onClick: o, children: fe })),
      (n[72] = I),
      (n[73] = o),
      (n[74] = B))
    : (B = n[74]);
  let V;
  n[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, X.jsx)(l, {
        id: `appgenSettings.accessRequest.allow`,
        defaultMessage: `Allow access`,
        description: `Approve the pending request to view this Site.`,
      })),
      (n[75] = V))
    : (V = n[75]);
  let pe;
  n[76] === I
    ? (pe = n[77])
    : ((pe = (0, X.jsx)(t, { type: `submit`, loading: I, disabled: I, children: V })),
      (n[76] = I),
      (n[77] = pe));
  let H;
  n[78] !== B || n[79] !== pe
    ? ((H = (0, X.jsxs)(q, { children: [B, pe] })), (n[78] = B), (n[79] = pe), (n[80] = H))
    : (H = n[80]);
  let U;
  n[81] !== re || n[82] !== de || n[83] !== H
    ? ((U = (0, X.jsxs)(G, { as: `form`, className: `gap-4 px-4 py-3`, onSubmit: re, children: [de, H] })),
      (n[81] = re),
      (n[82] = de),
      (n[83] = H),
      (n[84] = U))
    : (U = n[84]);
  let me;
  return (
    n[85] !== I || n[86] !== te || n[87] !== L || n[88] !== U
      ? ((me = (0, X.jsx)(W, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: I,
          showDialogClose: te,
          onOpenChange: L,
          children: U,
        })),
        (n[85] = I),
        (n[86] = te),
        (n[87] = L),
        (n[88] = U),
        (n[89] = me))
      : (me = n[89]),
    me
  );
}
var xn, Sn, X, Cn;
function wn() {
  return (wn = e(() => {
    ((xn = ke()),
      E(),
      u(),
      F(),
      Te(),
      S(),
      (Sn = Pe()),
      V(),
      L(),
      o(),
      xt(),
      yt(),
      Ce(),
      De(),
      z(),
      me(),
      Ae(),
      Oe(),
      Jt(),
      pt(),
      ln(),
      un(),
      (X = Me()),
      (Cn = ae({
        sitesAccessRequest: ve({ projectId: k(), token: k().trim().min(1).max(4096) }).optional(),
      })));
  }))();
}
function Tn(e) {
  let n = (0, In.c)(27),
    { customDomains: r, isAvailable: a, isError: o, isLoading: s, onRetry: c, projectId: u } = e,
    d = a === void 0 || a,
    p = f(i),
    m = ee(),
    h = (0, Ln.useRef)(null),
    [g, _] = (0, Ln.useState)(null),
    v;
  n[0] === r?.items ? (v = n[1]) : ((v = r?.items ?? []), (n[0] = r?.items), (n[1] = v));
  let y = v,
    b = r != null && !o && y.length === 0,
    x,
    S;
  (n[2] === g
    ? ((x = n[3]), (S = n[4]))
    : ((x = () => {
        g != null && h.current?.focus();
      }),
      (S = [g]),
      (n[2] = g),
      (n[3] = x),
      (n[4] = S)),
    (0, Ln.useLayoutEffect)(x, S));
  let C;
  n[5] === c
    ? (C = n[6])
    : ((C = async function () {
        _(`pending`);
        try {
          _(await c());
        } catch {
          _(`error`);
        }
      }),
      (n[5] = c),
      (n[6] = C));
  let w = C,
    T = null;
  if (g === `pending`) {
    let e;
    (n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.loading.description`,
          defaultMessage: `Loading custom domains`,
          description: `Loading text for custom domain settings`,
        })),
        (n[7] = e))
      : (e = n[7]),
      (T = e));
  } else if (g === `error`) {
    let e;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.error.description`,
          defaultMessage: `Unable to load custom domains`,
          description: `Error text when custom domains fail to load`,
        })),
        (n[8] = e))
      : (e = n[8]),
      (T = e));
  } else if (g === `success`) {
    let e;
    (n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.retry.success`,
          defaultMessage: `Custom domains loaded`,
          description: `Screen-reader announcement after custom domains load successfully following a retry`,
        })),
        (n[9] = e))
      : (e = n[9]),
      (T = e));
  } else if (g === `unavailable`) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.retry.unavailable`,
          defaultMessage: `Custom domains aren’t available`,
          description: `Screen-reader announcement when a retry confirms custom domains are unavailable`,
        })),
        (n[10] = e))
      : (e = n[10]),
      (T = e));
  }
  let E;
  n[11] !== g || n[12] !== T
    ? ((E =
        g == null
          ? null
          : (0, Z.jsx)(`span`, {
              "aria-atomic": `true`,
              "aria-live": `polite`,
              className: `sr-only`,
              role: `status`,
              children: T,
            })),
      (n[11] = g),
      (n[12] = T),
      (n[13] = E))
    : (E = n[13]);
  let D;
  n[14] !== b ||
  n[15] !== y ||
  n[16] !== w ||
  n[17] !== m ||
  n[18] !== d ||
  n[19] !== o ||
  n[20] !== s ||
  n[21] !== u ||
  n[22] !== p
    ? ((D = d
        ? (0, Z.jsx)(`div`, {
            "aria-label": m.formatMessage({
              id: `appgenSettings.customDomains.row.label`,
              defaultMessage: `Custom domain`,
              description: `Row label for the Site custom-domain control`,
            }),
            ref: h,
            role: `group`,
            tabIndex: -1,
            children: s
              ? (0, Z.jsx)(Ee, {
                  labelWeight: `normal`,
                  layout: `split`,
                  label: (0, Z.jsx)(l, {
                    id: `appgenSettings.customDomains.row.label`,
                    defaultMessage: `Custom domain`,
                    description: `Row label for the Site custom-domain control`,
                  }),
                  description: (0, Z.jsx)(l, {
                    id: `appgenSettings.customDomains.loading.description`,
                    defaultMessage: `Loading custom domains`,
                    description: `Loading text for custom domain settings`,
                  }),
                  control: (0, Z.jsx)(xe, { className: `icon-xs` }),
                })
              : o
                ? (0, Z.jsx)(Ee, {
                    labelWeight: `normal`,
                    layout: `split`,
                    label: (0, Z.jsx)(l, {
                      id: `appgenSettings.customDomains.row.label`,
                      defaultMessage: `Custom domain`,
                      description: `Row label for the Site custom-domain control`,
                    }),
                    description: (0, Z.jsx)(l, {
                      id: `appgenSettings.customDomains.error.description`,
                      defaultMessage: `Unable to load custom domains`,
                      description: `Error text when custom domains fail to load`,
                    }),
                    control: (0, Z.jsx)(t, {
                      color: `outlineSurface`,
                      size: `toolbar`,
                      type: `button`,
                      onClick: () => void w(),
                      children: (0, Z.jsx)(l, {
                        id: `appgenSettings.customDomains.error.retry`,
                        defaultMessage: `Retry`,
                        description: `Button to retry loading a Site's custom domains after a load failure`,
                      }),
                    }),
                  })
                : y.length === 0
                  ? (0, Z.jsx)(Ee, {
                      labelWeight: `normal`,
                      layout: `split`,
                      label: (0, Z.jsx)(l, {
                        id: `appgenSettings.customDomains.row.label`,
                        defaultMessage: `Custom domain`,
                        description: `Row label for the Site custom-domain control`,
                      }),
                      control: b
                        ? (0, Z.jsx)(t, {
                            color: `outlineSurface`,
                            size: `toolbar`,
                            onClick: () => {
                              (nt(p, u, `add`), Xe(p, An, { projectId: u }));
                            },
                            children: (0, Z.jsx)(l, {
                              id: `appgenSettings.customDomains.add`,
                              defaultMessage: `Add custom domain`,
                              description: `Button label for adding a custom domain to a site`,
                            }),
                          })
                        : null,
                    })
                  : (0, Z.jsx)(pn, {
                      dividerInset: `none`,
                      children: y.map((e) => (0, Z.jsx)(En, { customDomain: e, projectId: u }, e.id)),
                    }),
          })
        : null),
      (n[14] = b),
      (n[15] = y),
      (n[16] = w),
      (n[17] = m),
      (n[18] = d),
      (n[19] = o),
      (n[20] = s),
      (n[21] = u),
      (n[22] = p),
      (n[23] = D))
    : (D = n[23]);
  let O;
  return (
    n[24] !== E || n[25] !== D
      ? ((O = (0, Z.jsxs)(Z.Fragment, { children: [E, D] })), (n[24] = E), (n[25] = D), (n[26] = O))
      : (O = n[26]),
    O
  );
}
function En(e) {
  let n = (0, In.c)(41),
    { customDomain: r, projectId: o } = e,
    s = f(i),
    c = ee(),
    u = Ie(ht, o),
    d = Ie(bt, o),
    p = u.isPending || d.isPending,
    h;
  n[0] !== c || n[1] !== s
    ? ((h = function () {
        s.get(le).danger(
          c.formatMessage({
            id: `appgenSettings.customDomains.refresh.error`,
            defaultMessage: `Unable to refresh domain status`,
            description: `Error toast shown when custom domain refresh fails`,
          }),
          { errorAnalytics: { toastId: `sites_settings_custom_domain_refresh_error` } },
        );
      }),
      (n[0] = c),
      (n[1] = s),
      (n[2] = h))
    : (h = n[2]);
  let g = h,
    _ = r.status === `active`,
    y;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(l, {
        id: `appgenSettings.customDomains.row.label`,
        defaultMessage: `Custom domain`,
        description: `Row label for the Site custom-domain control`,
      })),
      (n[3] = y))
    : (y = n[3]);
  let b;
  n[4] === r.hostname
    ? (b = n[5])
    : ((b = (0, Z.jsx)(`div`, { className: `max-w-60 truncate text-sm text-default`, children: r.hostname })),
      (n[4] = r.hostname),
      (n[5] = b));
  let x;
  n[6] === r.status
    ? (x = n[7])
    : ((x =
        r.status === `pending`
          ? (0, Z.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-1 text-xs text-secondary`,
              children: [
                (0, Z.jsx)(N, { "aria-hidden": !0 }),
                (0, Z.jsx)(`span`, {
                  className: `truncate`,
                  children: (0, Z.jsx)(l, {
                    id: `appgenSettings.customDomains.pending.description`,
                    defaultMessage: `Pending DNS changes. May take 24h to reflect.`,
                    description: `Status copy for a custom domain waiting on DNS changes`,
                  }),
                }),
              ],
            })
          : r.status === `failed`
            ? (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-1 text-xs text-chart-red`,
                children: [
                  (0, Z.jsx)(v, { className: `shrink-0`, asset: m }),
                  (0, Z.jsx)(l, {
                    id: `appgenSettings.customDomains.failed.description`,
                    defaultMessage: `DNS setup failed. Review your records.`,
                    description: `Status copy for a custom domain with failed DNS verification`,
                  }),
                ],
              })
            : null),
      (n[6] = r.status),
      (n[7] = x));
  let S;
  n[8] === r.last_error
    ? (S = n[9])
    : ((S =
        r.last_error == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: `max-w-80 text-xs wrap-anywhere text-chart-red`,
              children: (0, Z.jsx)(l, {
                id: `appgenSettings.customDomains.lastError`,
                defaultMessage: `Last error: {message}`,
                description: `Last provider error shown for a custom domain`,
                values: { message: r.last_error },
              }),
            })),
      (n[8] = r.last_error),
      (n[9] = S));
  let C;
  n[10] !== b || n[11] !== x || n[12] !== S
    ? ((C = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 flex-col items-end gap-0.5 text-end`,
        children: [b, x, S],
      })),
      (n[10] = b),
      (n[11] = x),
      (n[12] = S),
      (n[13] = C))
    : (C = n[13]);
  let T;
  n[14] !== r ||
  n[15] !== c ||
  n[16] !== _ ||
  n[17] !== p ||
  n[18] !== o ||
  n[19] !== u ||
  n[20] !== s ||
  n[21] !== g
    ? ((T = _
        ? null
        : (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(t, {
                "aria-label": c.formatMessage(
                  {
                    id: `appgenSettings.customDomains.setup.ariaLabel`,
                    defaultMessage: `View DNS setup for {hostname}`,
                    description: `Accessible label for reopening custom domain DNS setup`,
                  },
                  { hostname: r.hostname },
                ),
                color: `ghost`,
                disabled: p,
                size: `icon`,
                onClick: () => {
                  Xe(s, Dn, { customDomain: r });
                },
                children: (0, Z.jsx)(v, { asset: m }),
              }),
              (0, Z.jsx)(t, {
                "aria-label": c.formatMessage(
                  {
                    id: `appgenSettings.customDomains.refresh.ariaLabel`,
                    defaultMessage: `Refresh {hostname} status`,
                    description: `Accessible label for refreshing a custom domain status`,
                  },
                  { hostname: r.hostname },
                ),
                color: `ghost`,
                disabled: p,
                size: `icon`,
                onClick: () => {
                  let e = r.status,
                    t = Re(s, o, zt.CHATGPT_SITES_OPERATION_TYPE_CUSTOM_DOMAIN_REFRESH, {
                      previousStatus: e,
                    });
                  u.mutateAsync(r.id).then(
                    (n) => {
                      t.succeeded({ previousStatus: e, status: n.status });
                    },
                    () => {
                      (t.failed({ previousStatus: e }), g());
                    },
                  );
                },
                children: u.isPending
                  ? (0, Z.jsx)(xe, { className: `icon-xs` })
                  : (0, Z.jsx)(v, { asset: a }),
              }),
            ],
          })),
      (n[14] = r),
      (n[15] = c),
      (n[16] = _),
      (n[17] = p),
      (n[18] = o),
      (n[19] = u),
      (n[20] = s),
      (n[21] = g),
      (n[22] = T))
    : (T = n[22]);
  let E;
  n[23] !== r.hostname || n[24] !== c
    ? ((E = c.formatMessage(
        {
          id: `appgenSettings.customDomains.remove.ariaLabel`,
          defaultMessage: `Remove {hostname}`,
          description: `Accessible label for removing a custom domain`,
        },
        { hostname: r.hostname },
      )),
      (n[23] = r.hostname),
      (n[24] = c),
      (n[25] = E))
    : (E = n[25]);
  let D;
  n[26] !== r || n[27] !== o || n[28] !== s
    ? ((D = () => {
        (nt(s, o, `remove`), Xe(s, jn, { customDomain: r, projectId: o }));
      }),
      (n[26] = r),
      (n[27] = o),
      (n[28] = s),
      (n[29] = D))
    : (D = n[29]);
  let O;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(v, { asset: w })), (n[30] = O))
    : (O = n[30]);
  let k;
  n[31] !== p || n[32] !== E || n[33] !== D
    ? ((k = (0, Z.jsx)(t, {
        "aria-label": E,
        color: `ghost`,
        disabled: p,
        size: `icon`,
        onClick: D,
        children: O,
      })),
      (n[31] = p),
      (n[32] = E),
      (n[33] = D),
      (n[34] = k))
    : (k = n[34]);
  let A;
  n[35] !== k || n[36] !== T
    ? ((A = (0, Z.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [T, k] })),
      (n[35] = k),
      (n[36] = T),
      (n[37] = A))
    : (A = n[37]);
  let j;
  return (
    n[38] !== A || n[39] !== C
      ? ((j = (0, Z.jsx)(Ee, {
          labelWeight: `normal`,
          layout: `split`,
          label: y,
          control: (0, Z.jsxs)(`div`, { className: `flex min-w-0 items-center gap-3`, children: [C, A] }),
        })),
        (n[38] = A),
        (n[39] = C),
        (n[40] = j))
      : (j = n[40]),
    j
  );
}
function Dn(e) {
  let n = (0, In.c)(30),
    { customDomain: r, onClose: i } = e,
    a = ee(),
    o = ze(),
    s,
    c;
  n[0] !== r || n[1] !== a
    ? ((s = Mn(r)),
      (c = kt({
        defaultPrompt: a.formatMessage(
          {
            id: `appgenSettings.customDomains.setupDialog.askChatGptPrompt`,
            defaultMessage: `Help me register {hostname} as the custom domain for my site by adding these DNS records at my domain provider. Use the in-app browser if needed.
{dnsRecords}`,
            description: `Prefilled prompt for a new Sites thread opened from custom-domain DNS setup. It asks Sites to help finish registration at the user's domain provider, using the in-app browser when useful. {hostname} is the exact custom hostname and {dnsRecords} is a newline-separated list of DNS record type, host name, and value.`,
          },
          { dnsRecords: On(s), hostname: r.hostname },
        ),
        pluginDisplayName: `Sites`,
        pluginId: At,
      })),
      (n[0] = r),
      (n[1] = a),
      (n[2] = s),
      (n[3] = c))
    : ((s = n[2]), (c = n[3]));
  let u = c,
    d;
  n[4] === a
    ? (d = n[5])
    : ((d = a.formatMessage({
        id: `appgenSettings.customDomains.setupDialog.close`,
        defaultMessage: `Close custom domain setup`,
        description: `Accessible label for closing the custom domain DNS setup dialog`,
      })),
      (n[4] = a),
      (n[5] = d));
  let f;
  n[6] === i
    ? (f = n[7])
    : ((f = (e) => {
        e || i();
      }),
      (n[6] = i),
      (n[7] = f));
  let p;
  n[8] === i
    ? (p = n[9])
    : ((p = (e) => {
        (e.preventDefault(), i());
      }),
      (n[8] = i),
      (n[9] = p));
  let m;
  n[10] === r.hostname
    ? (m = n[11])
    : ((m = (0, Z.jsx)(ne, {
        className: `contents`,
        children: (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.setupDialog.title`,
          defaultMessage: `Complete setup for {hostname}`,
          description: `Title for custom domain DNS setup dialog`,
          values: { hostname: r.hostname },
        }),
      })),
      (n[10] = r.hostname),
      (n[11] = m));
  let h;
  n[12] !== u || n[13] !== i || n[14] !== o
    ? ((h = (0, Z.jsx)(ce, {
        className: `contents`,
        children: (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.setupDialog.description`,
          defaultMessage: `Complete your custom domain by copying these values and paste them into the DNS settings at your domain provider. You can also <chatgptLink>ask ChatGPT</chatgptLink> to do it.`,
          description: `Instructions for completing custom domain DNS setup`,
          values: {
            chatgptLink: (e) =>
              (0, Z.jsx)(
                `button`,
                {
                  className: `cursor-interaction border-0 bg-transparent p-0 underline decoration-dotted underline-offset-2`,
                  type: `button`,
                  onClick: () => {
                    (i(), o({ activeProject: null, prefillPrompt: u, startInSidebar: !0 }));
                  },
                  children: e,
                },
                `chatgpt-link`,
              ),
          },
        }),
      })),
      (n[12] = u),
      (n[13] = i),
      (n[14] = o),
      (n[15] = h))
    : (h = n[15]);
  let g;
  n[16] !== m || n[17] !== h
    ? ((g = (0, Z.jsx)(R, {
        title: m,
        titleClassName: `truncate pe-8 font-medium`,
        titleSize: `base`,
        subtitle: h,
        subtitleSize: `base`,
        subtitleTone: `secondary`,
        subtitleClassName: `leading-5`,
      })),
      (n[16] = m),
      (n[17] = h),
      (n[18] = g))
    : (g = n[18]);
  let _;
  n[19] === s
    ? (_ = n[20])
    : ((_ = (0, Z.jsx)(U, { children: (0, Z.jsx)(kn, { records: s }) })), (n[19] = s), (n[20] = _));
  let v;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(U, {
        children: (0, Z.jsx)(q, {
          expandSingleButton: !1,
          children: (0, Z.jsx)(t, {
            type: `submit`,
            children: (0, Z.jsx)(l, {
              id: `appgenSettings.customDomains.setupDialog.complete`,
              defaultMessage: `I have added the records at my provider`,
              description: `Button label for completing custom domain DNS setup`,
            }),
          }),
        }),
      })),
      (n[21] = v))
    : (v = n[21]);
  let y;
  n[22] !== p || n[23] !== g || n[24] !== _
    ? ((y = (0, Z.jsxs)(G, { as: `form`, className: `gap-3 px-4 py-4`, onSubmit: p, children: [g, _, v] })),
      (n[22] = p),
      (n[23] = g),
      (n[24] = _),
      (n[25] = y))
    : (y = n[25]);
  let b;
  return (
    n[26] !== y || n[27] !== d || n[28] !== f
      ? ((b = (0, Z.jsx)(W, {
          dialogCloseLabel: d,
          open: !0,
          size: `default`,
          onOpenChange: f,
          children: y,
        })),
        (n[26] = y),
        (n[27] = d),
        (n[28] = f),
        (n[29] = b))
      : (b = n[29]),
    b
  );
}
function On(e) {
  return e.map((e) => [e.type, e.name, e.value].join(` `)).join(`
`);
}
function kn(e) {
  let t = (0, In.c)(11),
    { records: n } = e,
    r = ee();
  if (n.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsxs)(`colgroup`, {
        className: `max-sm:hidden`,
        children: [
          (0, Z.jsx)(`col`, { className: `w-[72px]` }),
          (0, Z.jsx)(`col`, { className: `w-[40%]` }),
          (0, Z.jsx)(`col`, {}),
        ],
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`th`, {
        className: `px-0 py-1 text-start font-normal`,
        scope: `col`,
        children: (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.dns.type`,
          defaultMessage: `Type`,
          description: `DNS record table type column`,
        }),
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(`th`, {
        className: `px-0 py-1 text-start font-normal`,
        scope: `col`,
        children: (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.dns.hostname`,
          defaultMessage: `Host name`,
          description: `DNS record table host name column`,
        }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(`thead`, {
        className: `max-sm:sr-only`,
        children: (0, Z.jsxs)(`tr`, {
          className: `h-7 border-b border-default text-sm font-normal text-tertiary`,
          children: [
            a,
            o,
            (0, Z.jsx)(`th`, {
              className: `px-0 py-1 text-start font-normal`,
              scope: `col`,
              children: (0, Z.jsx)(l, {
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
          (0, Z.jsxs)(
            `tr`,
            {
              className: `h-7 border-b border-default text-sm text-default last:border-b-0 max-sm:block`,
              children: [
                (0, Z.jsx)(`td`, { className: `px-0 py-1 text-secondary max-sm:hidden`, children: e.type }),
                (0, Z.jsx)(`td`, {
                  className: `px-0 py-1 max-sm:block`,
                  children: (0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-between gap-2`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `me-1 hidden text-tertiary max-sm:inline`,
                        children: e.type,
                      }),
                      (0, Z.jsx)(`div`, { className: `min-w-0 truncate`, children: e.name }),
                      (0, Z.jsx)(Ne, {
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
                        onCopy: (t) => K(e.name, t),
                      }),
                    ],
                  }),
                }),
                (0, Z.jsx)(`td`, {
                  className: `px-0 py-1 max-sm:block`,
                  children: (0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-between gap-2`,
                    children: [
                      (0, Z.jsx)(`div`, { className: `min-w-0 truncate`, children: e.value }),
                      (0, Z.jsx)(Ne, {
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
                        onCopy: (t) => K(e.value, t),
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
  let u;
  return (
    t[9] === c
      ? (u = t[10])
      : ((u = (0, Z.jsx)(`div`, {
          className: `overflow-hidden`,
          children: (0, Z.jsxs)(`table`, {
            className: `w-full table-fixed border-collapse`,
            children: [i, s, (0, Z.jsx)(`tbody`, { children: c })],
          }),
        })),
        (t[9] = c),
        (t[10] = u)),
    u
  );
}
function An(e) {
  let n = (0, In.c)(51),
    { onClose: r, projectId: a } = e,
    o = f(i),
    s = Ie(Et, a),
    c = ee(),
    [u, d] = (0, Ln.useState)(``),
    [p, m] = (0, Ln.useState)(null),
    h;
  n[0] === u ? (h = n[1]) : ((h = u.trim()), (n[0] = u), (n[1] = h));
  let g = h,
    _ = g.length === 0 || s.isPending,
    v;
  n[2] !== c || n[3] !== o
    ? ((v = function (e) {
        o.get(le).danger(
          c.formatMessage({
            id: `appgenSettings.customDomains.addDialog.error`,
            defaultMessage: `Unable to add domain`,
            description: `Error toast shown when adding a custom domain fails`,
          }),
          {
            description: Kt(e)
              ? (0, Z.jsx)(l, {
                  id: `appgenSettings.customDomains.addDialog.publishRequired`,
                  defaultMessage: `Publish this site before adding a custom domain`,
                  description: `Guidance shown when adding a custom domain fails because the Site has not been published yet`,
                })
              : void 0,
            errorAnalytics: { toastId: `sites_settings_custom_domain_add_error` },
          },
        );
      }),
      (n[2] = c),
      (n[3] = o),
      (n[4] = v))
    : (v = n[4]);
  let y = v;
  if (p != null) {
    let e;
    return (
      n[5] !== p || n[6] !== r
        ? ((e = (0, Z.jsx)(Dn, { customDomain: p, onClose: r })), (n[5] = p), (n[6] = r), (n[7] = e))
        : (e = n[7]),
      e
    );
  }
  let b = s.isPending,
    x = !s.isPending,
    S;
  n[8] !== s.isPending || n[9] !== r
    ? ((S = (e) => {
        !e && !s.isPending && r();
      }),
      (n[8] = s.isPending),
      (n[9] = r),
      (n[10] = S))
    : (S = n[10]);
  let C;
  n[11] !== s || n[12] !== _ || n[13] !== a || n[14] !== o || n[15] !== y || n[16] !== g
    ? ((C = (e) => {
        if ((e.preventDefault(), _)) return;
        let t = Re(o, a, zt.CHATGPT_SITES_OPERATION_TYPE_CUSTOM_DOMAIN_ADD);
        s.mutateAsync({ hostname: g }).then(
          (e) => {
            (t.succeeded({ status: e.status }), m(e));
          },
          (e) => {
            (t.failed(), y(e));
          },
        );
      }),
      (n[11] = s),
      (n[12] = _),
      (n[13] = a),
      (n[14] = o),
      (n[15] = y),
      (n[16] = g),
      (n[17] = C))
    : (C = n[17]);
  let w;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(ne, {
        className: `contents`,
        children: (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.addDialog.title`,
          defaultMessage: `Add custom domain`,
          description: `Title for custom domain add dialog`,
        }),
      })),
      (n[18] = w))
    : (w = n[18]);
  let T;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(R, {
        title: w,
        titleClassName: `truncate pe-8`,
        subtitle: (0, Z.jsx)(ce, {
          className: `contents`,
          children: (0, Z.jsx)(l, {
            id: `appgenSettings.customDomains.addDialog.description`,
            defaultMessage: `To use this feature, you need to own a domain and be able to manage its DNS records`,
            description: `Description for custom domain add dialog`,
          }),
        }),
      })),
      (n[19] = T))
    : (T = n[19]);
  let E;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.addDialog.inputLabel`,
          defaultMessage: `Custom domain`,
          description: `Label for custom domain input`,
        }),
      })),
      (n[20] = E))
    : (E = n[20]);
  let D;
  n[21] === c
    ? (D = n[22])
    : ((D = c.formatMessage({
        id: `appgenSettings.customDomains.addDialog.inputAriaLabel`,
        defaultMessage: `Custom domain`,
        description: `Accessible label for custom domain input`,
      })),
      (n[21] = c),
      (n[22] = D));
  let O = s.isPending,
    k;
  n[23] === c
    ? (k = n[24])
    : ((k = c.formatMessage({
        id: `appgenSettings.customDomains.addDialog.placeholder`,
        defaultMessage: `www.example.com`,
        description: `Placeholder for custom domain input`,
      })),
      (n[23] = c),
      (n[24] = k));
  let A;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        d(e.target.value);
      }),
      (n[25] = A))
    : (A = n[25]);
  let j;
  n[26] !== s.isPending || n[27] !== u || n[28] !== D || n[29] !== k
    ? ((j = (0, Z.jsx)(U, {
        children: (0, Z.jsxs)(`label`, {
          className: `flex flex-col gap-1.5`,
          children: [
            E,
            (0, Z.jsx)(rt, {
              variant: `code`,
              "aria-label": D,
              autoFocus: !0,
              disabled: O,
              placeholder: k,
              spellCheck: !1,
              type: `text`,
              value: u,
              onChange: A,
            }),
          ],
        }),
      })),
      (n[26] = s.isPending),
      (n[27] = u),
      (n[28] = D),
      (n[29] = k),
      (n[30] = j))
    : (j = n[30]);
  let M;
  n[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(l, {
        id: `appgenSettings.customDomains.addDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom domain add dialog`,
      })),
      (n[31] = M))
    : (M = n[31]);
  let N;
  n[32] !== s.isPending || n[33] !== r
    ? ((N = (0, Z.jsx)(t, {
        color: `ghost`,
        disabled: s.isPending,
        type: `button`,
        onClick: r,
        children: M,
      })),
      (n[32] = s.isPending),
      (n[33] = r),
      (n[34] = N))
    : (N = n[34]);
  let P;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(l, {
        id: `appgenSettings.customDomains.addDialog.submit`,
        defaultMessage: `Add domain`,
        description: `Submit button label for custom domain add dialog`,
      })),
      (n[35] = P))
    : (P = n[35]);
  let F;
  n[36] !== s.isPending || n[37] !== _
    ? ((F = (0, Z.jsx)(t, { disabled: _, loading: s.isPending, type: `submit`, children: P })),
      (n[36] = s.isPending),
      (n[37] = _),
      (n[38] = F))
    : (F = n[38]);
  let I;
  n[39] !== N || n[40] !== F
    ? ((I = (0, Z.jsx)(U, { children: (0, Z.jsxs)(q, { children: [N, F] }) })),
      (n[39] = N),
      (n[40] = F),
      (n[41] = I))
    : (I = n[41]);
  let te;
  n[42] !== j || n[43] !== I || n[44] !== C
    ? ((te = (0, Z.jsxs)(G, { as: `form`, className: `gap-4 px-4 py-3`, onSubmit: C, children: [T, j, I] })),
      (n[42] = j),
      (n[43] = I),
      (n[44] = C),
      (n[45] = te))
    : (te = n[45]);
  let L;
  return (
    n[46] !== s.isPending || n[47] !== te || n[48] !== x || n[49] !== S
      ? ((L = (0, Z.jsx)(W, {
          open: !0,
          shouldIgnoreClickOutside: b,
          showDialogClose: x,
          size: `compact`,
          onOpenChange: S,
          children: te,
        })),
        (n[46] = s.isPending),
        (n[47] = te),
        (n[48] = x),
        (n[49] = S),
        (n[50] = L))
      : (L = n[50]),
    L
  );
}
function jn(e) {
  let n = (0, In.c)(38),
    { customDomain: r, onClose: a, projectId: o } = e,
    s = f(i),
    c = Ie(bt, o),
    u = ee(),
    d;
  n[0] !== u || n[1] !== s
    ? ((d = function () {
        s.get(le).danger(
          u.formatMessage({
            id: `appgenSettings.customDomains.removeDialog.error`,
            defaultMessage: `Unable to remove domain`,
            description: `Error toast shown when removing a custom domain fails`,
          }),
          { errorAnalytics: { toastId: `sites_settings_custom_domain_remove_error` } },
        );
      }),
      (n[0] = u),
      (n[1] = s),
      (n[2] = d))
    : (d = n[2]);
  let p = d,
    m = !c.isPending,
    h;
  n[3] !== a || n[4] !== c.isPending
    ? ((h = (e) => {
        !e && !c.isPending && a();
      }),
      (n[3] = a),
      (n[4] = c.isPending),
      (n[5] = h))
    : (h = n[5]);
  let g;
  n[6] !== r.id || n[7] !== r.status || n[8] !== a || n[9] !== o || n[10] !== c || n[11] !== s || n[12] !== p
    ? ((g = (e) => {
        if ((e.preventDefault(), c.isPending)) return;
        let t = r.status,
          n = Re(s, o, zt.CHATGPT_SITES_OPERATION_TYPE_CUSTOM_DOMAIN_REMOVE, { previousStatus: t });
        c.mutateAsync(r.id).then(
          (e) => {
            (n.succeeded({ previousStatus: t, status: e.status }), a());
          },
          () => {
            (n.failed({ previousStatus: t }), p());
          },
        );
      }),
      (n[6] = r.id),
      (n[7] = r.status),
      (n[8] = a),
      (n[9] = o),
      (n[10] = c),
      (n[11] = s),
      (n[12] = p),
      (n[13] = g))
    : (g = n[13]);
  let _;
  n[14] === r.hostname
    ? (_ = n[15])
    : ((_ = (0, Z.jsx)(ne, {
        className: `contents`,
        children: (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.removeDialog.title`,
          defaultMessage: `Remove {hostname}?`,
          description: `Title for custom domain removal dialog`,
          values: { hostname: r.hostname },
        }),
      })),
      (n[14] = r.hostname),
      (n[15] = _));
  let v;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(ce, {
        className: `contents`,
        children: (0, Z.jsx)(l, {
          id: `appgenSettings.customDomains.removeDialog.description`,
          defaultMessage: `Visitors will no longer be able to use this domain for the site`,
          description: `Description for custom domain removal dialog`,
        }),
      })),
      (n[16] = v))
    : (v = n[16]);
  let y;
  n[17] === _
    ? (y = n[18])
    : ((y = (0, Z.jsx)(R, { title: _, titleClassName: `truncate pe-8`, subtitle: v })),
      (n[17] = _),
      (n[18] = y));
  let b;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(l, {
        id: `appgenSettings.customDomains.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom domain removal dialog`,
      })),
      (n[19] = b))
    : (b = n[19]);
  let x;
  n[20] !== a || n[21] !== c.isPending
    ? ((x = (0, Z.jsx)(t, {
        color: `ghost`,
        disabled: c.isPending,
        type: `button`,
        onClick: a,
        children: b,
      })),
      (n[20] = a),
      (n[21] = c.isPending),
      (n[22] = x))
    : (x = n[22]);
  let S;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(l, {
        id: `appgenSettings.customDomains.removeDialog.submit`,
        defaultMessage: `Remove`,
        description: `Confirm button label for custom domain removal dialog`,
      })),
      (n[23] = S))
    : (S = n[23]);
  let C;
  n[24] === c.isPending
    ? (C = n[25])
    : ((C = (0, Z.jsx)(t, { color: `danger`, loading: c.isPending, type: `submit`, children: S })),
      (n[24] = c.isPending),
      (n[25] = C));
  let w;
  n[26] !== C || n[27] !== x
    ? ((w = (0, Z.jsx)(U, { children: (0, Z.jsxs)(q, { children: [x, C] }) })),
      (n[26] = C),
      (n[27] = x),
      (n[28] = w))
    : (w = n[28]);
  let T;
  n[29] !== w || n[30] !== g || n[31] !== y
    ? ((T = (0, Z.jsxs)(G, { as: `form`, className: `gap-4 px-4 py-3`, onSubmit: g, children: [y, w] })),
      (n[29] = w),
      (n[30] = g),
      (n[31] = y),
      (n[32] = T))
    : (T = n[32]);
  let E;
  return (
    n[33] !== c.isPending || n[34] !== T || n[35] !== m || n[36] !== h
      ? ((E = (0, Z.jsx)(W, {
          open: !0,
          shouldIgnoreClickOutside: c.isPending,
          showDialogClose: m,
          size: `compact`,
          onOpenChange: h,
          children: T,
        })),
        (n[33] = c.isPending),
        (n[34] = T),
        (n[35] = m),
        (n[36] = h),
        (n[37] = E))
      : (E = n[37]),
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
  let t = he(e, { allowPrivateDomains: !0 });
  return t.domain != null && t.domain.toLowerCase() === e.toLowerCase();
}
var In, Ln, Z;
function Rn() {
  return (Rn = e(() => {
    ((In = ke()),
      b(),
      T(),
      te(),
      S(),
      (Ln = Pe()),
      V(),
      we(),
      Ce(),
      re(),
      De(),
      z(),
      y(),
      O(),
      Ke(),
      de(),
      Ve(),
      me(),
      Ye(),
      gt(),
      St(),
      Ae(),
      B(),
      fn(),
      fe(),
      Ue(),
      Jt(),
      (Z = Me()));
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
  t[0] === n ? (i = t[1]) : ((i = wt(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Yn.jsx)(`span`, {
        className: `flex size-10 shrink-0 items-center justify-center`,
        children: (0, Yn.jsx)(I, { className: `icon-md` }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = (0, Yn.jsx)(`div`, { className: `truncate text-sm font-medium text-default`, children: r })),
      (t[3] = r),
      (t[4] = s));
  let c;
  t[5] === a
    ? (c = t[6])
    : ((c =
        a ??
        (0, Yn.jsx)(l, {
          id: `appgenShareDialog.site.notPublished`,
          defaultMessage: `Not published yet`,
          description: `Label in a Site card for a site without a published URL`,
        })),
      (t[5] = a),
      (t[6] = c));
  let u;
  t[7] === c
    ? (u = t[8])
    : ((u = (0, Yn.jsx)(`div`, { className: `truncate text-xs text-tertiary`, children: c })),
      (t[7] = c),
      (t[8] = u));
  let d;
  return (
    t[9] !== s || t[10] !== u
      ? ((d = (0, Yn.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg bg-secondary-soft p-3`,
          children: [
            o,
            (0, Yn.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [s, u] }),
          ],
        })),
        (t[9] = s),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
var Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    ((Jn = ke()), V(), C(), Pt(), (Yn = Me()));
  }))();
}
function Zn(e) {
  let n = (0, Qn.c)(24),
    { disabled: r, name: i, onCancel: a, onConfirm: o } = e,
    s;
  n[0] === a
    ? (s = n[1])
    : ((s = (e) => {
        e || a();
      }),
      (n[0] = a),
      (n[1] = s));
  let c;
  n[2] !== r || n[3] !== o
    ? ((c = (e) => {
        (e.preventDefault(), r || o());
      }),
      (n[2] = r),
      (n[3] = o),
      (n[4] = c))
    : (c = n[4]);
  let u;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $n.jsx)(ne, {
        children: (0, $n.jsx)(l, {
          id: `envEntryDeleteDialog.title`,
          defaultMessage: `Delete environment variable?`,
          description: `Title of the confirmation dialog before deleting a Site environment variable or secret`,
        }),
      })),
      (n[5] = u))
    : (u = n[5]);
  let d;
  n[6] === i
    ? (d = n[7])
    : ((d = (0, $n.jsx)(U, {
        children: (0, $n.jsx)(R, {
          title: u,
          subtitle: (0, $n.jsx)(ce, {
            className: `wrap-anywhere select-text`,
            children:
              i.trim() === ``
                ? (0, $n.jsx)(l, {
                    id: `envEntryDeleteDialog.description.unnamed`,
                    defaultMessage: `Site features that depend on this variable may stop working. This cannot be undone.`,
                    description: `Warning before deleting an unnamed Site environment variable; deletion can break features that use it`,
                  })
                : (0, $n.jsx)(l, {
                    id: `envEntryDeleteDialog.description.named`,
                    defaultMessage: `This will delete {name}. Site features that depend on this variable may stop working. This cannot be undone.`,
                    description: `Warning before deleting a Site environment variable or secret. The name is only the variable's key, never its value.`,
                    values: { name: i },
                  }),
          }),
        }),
      })),
      (n[6] = i),
      (n[7] = d));
  let f;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $n.jsx)(l, {
        id: `envEntryDeleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss the environment variable deletion confirmation without deleting`,
      })),
      (n[8] = f))
    : (f = n[8]);
  let p;
  n[9] === a
    ? (p = n[10])
    : ((p = (0, $n.jsx)(t, { autoFocus: !0, color: `outline`, onClick: a, children: f })),
      (n[9] = a),
      (n[10] = p));
  let m;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $n.jsx)(l, {
        id: `envEntryDeleteDialog.confirm`,
        defaultMessage: `Delete variable`,
        description: `Destructive button confirming deletion of a Site environment variable or secret`,
      })),
      (n[11] = m))
    : (m = n[11]);
  let h;
  n[12] === r
    ? (h = n[13])
    : ((h = (0, $n.jsx)(t, { color: `danger`, disabled: r, type: `submit`, children: m })),
      (n[12] = r),
      (n[13] = h));
  let g;
  n[14] !== p || n[15] !== h
    ? ((g = (0, $n.jsx)(U, { children: (0, $n.jsxs)(q, { children: [p, h] }) })),
      (n[14] = p),
      (n[15] = h),
      (n[16] = g))
    : (g = n[16]);
  let _;
  n[17] !== c || n[18] !== d || n[19] !== g
    ? ((_ = (0, $n.jsxs)(G, { as: `form`, onSubmit: c, children: [d, g] })),
      (n[17] = c),
      (n[18] = d),
      (n[19] = g),
      (n[20] = _))
    : (_ = n[20]);
  let v;
  return (
    n[21] !== s || n[22] !== _
      ? ((v = (0, $n.jsx)(W, { open: !0, showDialogClose: !1, onOpenChange: s, children: _ })),
        (n[21] = s),
        (n[22] = _),
        (n[23] = v))
      : (v = n[23]),
    v
  );
}
var Qn, $n;
function er() {
  return (er = e(() => {
    ((Qn = ke()), V(), Ce(), De(), z(), ($n = Me()));
  }))();
}
function tr(e, t, n) {
  let r = nr(n),
    i = r[0];
  return i == null ? null : [...e.map((e, n) => (n === t ? { ...e, ...i } : e)), ...r.slice(1)];
}
function nr(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.trim();
    if (e.length === 0 || e.startsWith(`#`) || e.startsWith(`;`)) continue;
    e.startsWith(`export `) && (e = e.slice(7).trim());
    let r = rr(e, `#`, (t) => e[t - 1]?.trim() === ``);
    if ((r !== -1 && (e = e.slice(0, r).trim()), e.length === 0)) continue;
    let i = rr(e, `=`);
    if (i === -1) continue;
    let a = e.slice(0, i).trim();
    a.length !== 0 && t.push({ key: a, value: ir(e.slice(i + 1).trim()) });
  }
  return t;
}
function rr(e, t, n = () => !0) {
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
function ir(e) {
  return (e.startsWith(`"`) && e.endsWith(`"`)) || (e.startsWith(`'`) && e.endsWith(`'`))
    ? e.slice(1, -1)
    : e;
}
function ar(e) {
  let n = (0, sr.c)(35),
    {
      disabled: r,
      isSaving: i,
      requiresSecrets: a,
      entries: o,
      isSaveUncertain: s,
      onChange: c,
      onAdd: u,
      onCommit: d,
    } = e,
    f = r !== void 0 && r,
    p = i !== void 0 && i,
    m = a !== void 0 && a,
    h = o.length === 0,
    [g, _] = (0, cr.useState)(null);
  g != null && o[g.index]?.key !== g.key && _(null);
  let y = h ? `border-b border-subtle pb-1` : void 0,
    b;
  n[0] !== o || n[1] !== u || n[2] !== c || n[3] !== m
    ? ((b = () => {
        (c([...o, { isSecret: m, key: ``, value: `` }]), u?.());
      }),
      (n[0] = o),
      (n[1] = u),
      (n[2] = c),
      (n[3] = m),
      (n[4] = b))
    : (b = n[4]);
  let x, S;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(v, { "aria-hidden": !1, asset: oe })),
      (S = (0, Q.jsx)(l, {
        id: `appgenSettings.environmentVariables.add`,
        defaultMessage: `Add variable`,
        description: `Button label to add a site environment variable`,
      })),
      (n[5] = x),
      (n[6] = S))
    : ((x = n[5]), (S = n[6]));
  let C;
  n[7] !== f || n[8] !== b
    ? ((C = (0, Q.jsxs)(t, {
        color: `outlineSurface`,
        disabled: f,
        size: `toolbar`,
        onClick: b,
        children: [x, S],
      })),
      (n[7] = f),
      (n[8] = b),
      (n[9] = C))
    : (C = n[9]);
  let w;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(l, {
        id: `appgenSettings.environmentVariables.description.v2`,
        defaultMessage: `Add API keys and other environment variables your site needs`,
        description: `Supporting text in a site's Environment variables settings section. Explains that users can add API keys and other environment variables needed by their site.`,
      })),
      (n[10] = w))
    : (w = n[10]);
  let T;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(`span`, {
        className: `text-base`,
        children: (0, Q.jsx)(l, {
          id: `appgenSettings.environmentVariables.title`,
          defaultMessage: `Environment variables`,
          description: `Heading for site environment variable settings`,
        }),
      })),
      (n[11] = T))
    : (T = n[11]);
  let E;
  n[12] === C
    ? (E = n[13])
    : ((E = (0, Q.jsx)(it.Header, { actions: C, subtitle: w, title: T })), (n[12] = C), (n[13] = E));
  let D;
  n[14] !== f ||
  n[15] !== o ||
  n[16] !== h ||
  n[17] !== s ||
  n[18] !== p ||
  n[19] !== c ||
  n[20] !== d ||
  n[21] !== m
    ? ((D = h
        ? null
        : (0, Q.jsx)(it.Content, {
            children: (0, Q.jsx)(be, {
              variant: `flat`,
              children: (0, Q.jsxs)(`div`, {
                className: `grid grid-cols-12 items-center gap-x-2 gap-y-2 p-4`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `contents text-xs font-medium text-codex-description select-none`,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `col-span-5`,
                        children: (0, Q.jsx)(l, {
                          id: `envEntrySettingsGroup.key.label`,
                          defaultMessage: `Key`,
                          description: `Column label for environment variable keys`,
                        }),
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `col-span-5`,
                        children: (0, Q.jsx)(l, {
                          id: `envEntrySettingsGroup.value.label`,
                          defaultMessage: `Value`,
                          description: `Column label for environment variable values`,
                        }),
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `col-span-1`,
                        children: (0, Q.jsx)(l, {
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
                      or,
                      {
                        disabled: f || (p && e.keyInputDisabledWhileValue != null),
                        entry: e,
                        removeDisabled: f || p,
                        requiresSecrets: m,
                        rowNumber: t + 1,
                        onCommit: d,
                        onChange: (e, n) => {
                          (c(o.map((n, r) => (r === t ? e : n))), n && d?.());
                        },
                        onKeyPaste: (n) => {
                          let r = tr(o, t, n.clipboardData.getData(`text/plain`));
                          r != null &&
                            (n.preventDefault(),
                            c(r.map((t, n) => ({ ...t, isSecret: m || (o[n]?.isSecret ?? e.isSecret) }))));
                        },
                        onRemove: () => {
                          if (e.previousKey != null || s?.(e.key)) {
                            _({ index: t, key: e.key });
                            return;
                          }
                          (c(o.filter((e, n) => n !== t)), d?.());
                        },
                      },
                      t,
                    ),
                  ),
                ],
              }),
            }),
          })),
      (n[14] = f),
      (n[15] = o),
      (n[16] = h),
      (n[17] = s),
      (n[18] = p),
      (n[19] = c),
      (n[20] = d),
      (n[21] = m),
      (n[22] = D))
    : (D = n[22]);
  let O;
  n[23] !== f || n[24] !== o || n[25] !== g || n[26] !== p || n[27] !== c || n[28] !== d
    ? ((O =
        g != null &&
        o[g.index]?.key === g.key &&
        (0, Q.jsx)(Zn, {
          disabled: f || p,
          name: g.key,
          onCancel: () => _(null),
          onConfirm: () => {
            (_(null), c(o.filter((e, t) => t !== g.index)), d?.());
          },
        })),
      (n[23] = f),
      (n[24] = o),
      (n[25] = g),
      (n[26] = p),
      (n[27] = c),
      (n[28] = d),
      (n[29] = O))
    : (O = n[29]);
  let k;
  return (
    n[30] !== E || n[31] !== D || n[32] !== O || n[33] !== y
      ? ((k = (0, Q.jsxs)(it, { className: y, children: [E, D, O] })),
        (n[30] = E),
        (n[31] = D),
        (n[32] = O),
        (n[33] = y),
        (n[34] = k))
      : (k = n[34]),
    k
  );
}
function or(e) {
  let n = (0, sr.c)(63),
    {
      disabled: r,
      entry: i,
      requiresSecrets: a,
      onChange: o,
      onKeyPaste: s,
      onCommit: c,
      onRemove: u,
      rowNumber: d,
      removeDisabled: f,
    } = e,
    p = ee(),
    m = (0, cr.useRef)(!1),
    h = i.isSecret && i.previousKey != null ? i.keyInputDisabledWhileValue : void 0,
    g = h != null,
    _;
  n[0] !== i || n[1] !== o || n[2] !== c || n[3] !== h
    ? ((_ = (e) => {
        (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) ||
          (h != null && i.value === `` && o({ ...i, value: h }), c?.());
      }),
      (n[0] = i),
      (n[1] = o),
      (n[2] = c),
      (n[3] = h),
      (n[4] = _))
    : (_ = n[4]);
  let v;
  n[5] === c
    ? (v = n[6])
    : ((v = (e) => {
        c != null &&
          e.key === `Enter` &&
          !e.nativeEvent.isComposing &&
          e.nativeEvent.keyCode !== 229 &&
          e.target instanceof HTMLInputElement &&
          (e.preventDefault(), c());
      }),
      (n[5] = c),
      (n[6] = v));
  let y;
  n[7] === p
    ? (y = n[8])
    : ((y = p.formatMessage({
        id: `envEntrySettingsGroup.key.ariaLabel`,
        defaultMessage: `Key`,
        description: `Accessible label for an environment variable or secret key input`,
      })),
      (n[7] = p),
      (n[8] = y));
  let b = r || g,
    x;
  n[9] === p
    ? (x = n[10])
    : ((x = p.formatMessage({
        id: `envEntrySettingsGroup.key.placeholder`,
        defaultMessage: `Key`,
        description: `Placeholder for an environment variable or secret key input`,
      })),
      (n[9] = p),
      (n[10] = x));
  let S;
  n[11] !== i || n[12] !== o
    ? ((S = (e) => {
        o({ ...i, key: e.target.value });
      }),
      (n[11] = i),
      (n[12] = o),
      (n[13] = S))
    : (S = n[13]);
  let C;
  n[14] !== i.key || n[15] !== s || n[16] !== y || n[17] !== b || n[18] !== x || n[19] !== S
    ? ((C = (0, Q.jsx)(`div`, {
        className: `col-span-5`,
        children: (0, Q.jsx)(rt, {
          variant: `code`,
          "aria-label": y,
          disabled: b,
          placeholder: x,
          value: i.key,
          onPaste: s,
          onChange: S,
        }),
      })),
      (n[14] = i.key),
      (n[15] = s),
      (n[16] = y),
      (n[17] = b),
      (n[18] = x),
      (n[19] = S),
      (n[20] = C))
    : (C = n[20]);
  let w;
  n[21] !== r || n[22] !== i || n[23] !== p || n[24] !== g || n[25] !== o || n[26] !== h
    ? ((w = (0, Q.jsx)(`div`, {
        className: `col-span-5`,
        children:
          h != null && i.value === h
            ? (0, Q.jsx)(t, {
                ref: (e) => {
                  e != null && m.current && ((m.current = !1), e.focus());
                },
                "aria-label": p.formatMessage(
                  {
                    id: `envEntrySettingsGroup.replaceSecret.ariaLabel`,
                    defaultMessage: `Replace secret value for {key}`,
                    description: `Accessible label for the button that opens an empty password input to replace a saved site secret. The key is the environment variable name.`,
                  },
                  { key: i.key },
                ),
                color: `outline`,
                disabled: r,
                size: `toolbar`,
                onClick: () => o({ ...i, value: `` }),
                children: (0, Q.jsx)(l, {
                  id: `envEntrySettingsGroup.replaceSecret`,
                  defaultMessage: `Replace secret`,
                  description: `Button label for replacing a saved site environment variable whose secret value cannot be viewed`,
                }),
              })
            : (0, Q.jsx)(rt, {
                autoComplete: i.isSecret ? `new-password` : `off`,
                autoFocus: g,
                variant: `code`,
                "aria-label": p.formatMessage({
                  id: `envEntrySettingsGroup.value.ariaLabel`,
                  defaultMessage: `Value`,
                  description: `Accessible label for an environment variable or secret value input`,
                }),
                disabled: r,
                placeholder: p.formatMessage({
                  id: `envEntrySettingsGroup.value.placeholder`,
                  defaultMessage: `Value`,
                  description: `Placeholder for an environment variable or secret value input`,
                }),
                type: i.isSecret ? `password` : `text`,
                value: i.value,
                onChange: (e) => {
                  o({ ...i, value: e.target.value });
                },
                onKeyDown: (e) => {
                  e.key === `Escape` &&
                    h != null &&
                    (e.preventDefault(), e.stopPropagation(), (m.current = !0), o({ ...i, value: h }));
                },
              }),
      })),
      (n[21] = r),
      (n[22] = i),
      (n[23] = p),
      (n[24] = g),
      (n[25] = o),
      (n[26] = h),
      (n[27] = w))
    : (w = n[27]);
  let T = !a,
    E;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(l, {
        id: `envEntrySettingsGroup.secret.requiredHelp`,
        defaultMessage: `Data residency requires all values to be secrets`,
        description: `Tooltip shown when a Site owner hovers over or focuses the disabled Secret toggle in Site environment settings. Explains why the toggle must stay on: the Site has geographic data restrictions. Secret means a protected configuration value such as an API key.`,
      })),
      (n[28] = E))
    : (E = n[28]);
  let D = a ? `group` : void 0,
    O = a ? 0 : void 0,
    k = a ? `pointer-events-none` : void 0,
    A;
  n[29] !== i.key || n[30] !== p || n[31] !== d
    ? ((A =
        i.key === ``
          ? p.formatMessage(
              {
                id: `envEntrySettingsGroup.secret.unnamedAriaLabel`,
                defaultMessage: `Treat environment variable {rowNumber} as a secret`,
                description: `Accessible label for marking an unnamed environment variable as secret`,
              },
              { rowNumber: d },
            )
          : p.formatMessage(
              {
                id: `envEntrySettingsGroup.secret.namedAriaLabel`,
                defaultMessage: `Treat {key} as a secret`,
                description: `Accessible label for marking a named environment variable as secret`,
              },
              { key: i.key },
            )),
      (n[29] = i.key),
      (n[30] = p),
      (n[31] = d),
      (n[32] = A))
    : (A = n[32]);
  let j = r || g || a,
    M;
  n[33] !== i || n[34] !== o
    ? ((M = (e) => {
        o({ ...i, isSecret: e }, !0);
      }),
      (n[33] = i),
      (n[34] = o),
      (n[35] = M))
    : (M = n[35]);
  let N;
  n[36] !== i.isSecret || n[37] !== k || n[38] !== A || n[39] !== j || n[40] !== M
    ? ((N = (0, Q.jsx)(pe, {
        className: k,
        ariaLabel: A,
        checked: i.isSecret,
        disabled: j,
        size: `sm`,
        onChange: M,
      })),
      (n[36] = i.isSecret),
      (n[37] = k),
      (n[38] = A),
      (n[39] = j),
      (n[40] = M),
      (n[41] = N))
    : (N = n[41]);
  let P;
  n[42] !== D || n[43] !== O || n[44] !== N
    ? ((P = (0, Q.jsx)(`span`, { role: D, tabIndex: O, children: N })),
      (n[42] = D),
      (n[43] = O),
      (n[44] = N),
      (n[45] = P))
    : (P = n[45]);
  let F;
  n[46] !== P || n[47] !== T
    ? ((F = (0, Q.jsx)(`div`, {
        className: `col-span-1 flex justify-center`,
        children: (0, Q.jsx)(Se, { disabled: T, tooltipContent: E, children: P }),
      })),
      (n[46] = P),
      (n[47] = T),
      (n[48] = F))
    : (F = n[48]);
  let I;
  n[49] === p
    ? (I = n[50])
    : ((I = p.formatMessage({
        id: `envEntrySettingsGroup.remove.ariaLabel`,
        defaultMessage: `Remove entry`,
        description: `Accessible label for removing an environment variable or secret row`,
      })),
      (n[49] = p),
      (n[50] = I));
  let te;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsx)(Yt, { className: `icon-2xs` })), (n[51] = te))
    : (te = n[51]);
  let ne;
  n[52] !== u || n[53] !== f || n[54] !== I
    ? ((ne = (0, Q.jsx)(`div`, {
        className: `col-span-1 flex justify-end`,
        children: (0, Q.jsx)(t, {
          "aria-label": I,
          color: `ghost`,
          disabled: f,
          size: `icon`,
          onClick: u,
          children: te,
        }),
      })),
      (n[52] = u),
      (n[53] = f),
      (n[54] = I),
      (n[55] = ne))
    : (ne = n[55]);
  let L;
  return (
    n[56] !== _ || n[57] !== F || n[58] !== v || n[59] !== ne || n[60] !== C || n[61] !== w
      ? ((L = (0, Q.jsxs)(`div`, {
          className: `contents`,
          role: `group`,
          onBlur: _,
          onKeyDown: v,
          children: [C, w, F, ne],
        })),
        (n[56] = _),
        (n[57] = F),
        (n[58] = v),
        (n[59] = ne),
        (n[60] = C),
        (n[61] = w),
        (n[62] = L))
      : (L = n[62]),
    L
  );
}
var sr, cr, Q;
function lr() {
  return (lr = e(() => {
    ((sr = ke()), n(), (cr = Pe()), V(), Ce(), y(), Ve(), _(), ie(), Xt(), He(), p(), er(), (Q = Me()));
  }))();
}
function ur(e, t) {
  se(
    async () => {
      let { AppgenChangeSlugDialog: e } = await import(`./appgen-change-slug-dialog-de19e51890b5.js`);
      return { AppgenChangeSlugDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  ).then(({ AppgenChangeSlugDialog: n }) => {
    Xe(e, n, t);
  });
}
function dr() {
  return (dr = e(() => {
    (Ke(), ye());
  }))();
}
function fr(e) {
  let n = (0, mr.c)(20),
    { disabled: r, onBeforeTransfer: a, onTransferred: o, project: s } = e,
    c = f(i),
    { data: u } = Je(),
    d = Mt(`476199071`),
    p = Mt(`1664214667`),
    m = d && p && u?.structure === `workspace` && s.current_user_role === `owner`,
    h;
  n[0] === s.id ? (h = n[1]) : ((h = [...tt, s.id, `ownership-transfer`]), (n[0] = s.id), (n[1] = h));
  let g;
  n[2] === s.id
    ? (g = n[3])
    : ((g = async (e) => {
        let { signal: t } = e;
        try {
          return await Tt.safeGet(`/wham/sites/projects/{project_id}/owner`, {
            parameters: { path: { project_id: s.id } },
            expectedErrorStatuses: [404],
            signal: t,
            surface: `appgen`,
          });
        } catch (e) {
          let t = e;
          if (t instanceof ue && t.status === 404) return { can_transfer_ownership: !1 };
          throw t;
        }
      }),
      (n[2] = s.id),
      (n[3] = g));
  let _;
  n[4] !== m || n[5] !== h || n[6] !== g
    ? ((_ = { queryKey: h, enabled: m, queryFn: g, retry: !1, staleTime: x.THIRTY_SECONDS }),
      (n[4] = m),
      (n[5] = h),
      (n[6] = g),
      (n[7] = _))
    : (_ = n[7]);
  let { data: v } = P(_);
  if (!m || u == null || !v?.can_transfer_ownership) return null;
  let y, b;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, hr.jsx)(l, {
        id: `appgenSettings.transfer.label`,
        defaultMessage: `Transfer ownership`,
        description: `Label for the Site settings action that makes another workspace member the Site owner`,
      })),
      (b = (0, hr.jsx)(l, {
        id: `appgenSettings.transfer.description`,
        defaultMessage: `Make someone else in your workspace the owner of this site`,
        description: `Explanation beside the Site ownership transfer action. Transfers stay within the current workspace.`,
      })),
      (n[8] = y),
      (n[9] = b))
    : ((y = n[8]), (b = n[9]));
  let S;
  n[10] !== u.account_user_id || n[11] !== a || n[12] !== o || n[13] !== s || n[14] !== c
    ? ((S = () => {
        pr(c, { currentAccountUserId: u.account_user_id, onBeforeTransfer: a, onTransferred: o, project: s });
      }),
      (n[10] = u.account_user_id),
      (n[11] = a),
      (n[12] = o),
      (n[13] = s),
      (n[14] = c),
      (n[15] = S))
    : (S = n[15]);
  let C;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, hr.jsx)(l, {
        id: `appgenSettings.transfer.button`,
        defaultMessage: `Transfer ownership`,
        description: `Button that opens the dialog to choose a new owner for this Site`,
      })),
      (n[16] = C))
    : (C = n[16]);
  let w;
  return (
    n[17] !== r || n[18] !== S
      ? ((w = (0, hr.jsx)(Ee, {
          labelWeight: `normal`,
          layout: `split`,
          label: y,
          description: b,
          control: (0, hr.jsx)(t, {
            color: `secondary`,
            disabled: r,
            size: `toolbar`,
            type: `button`,
            onClick: S,
            children: C,
          }),
        })),
        (n[17] = r),
        (n[18] = S),
        (n[19] = w))
      : (w = n[19]),
    w
  );
}
function pr(e, t) {
  se(
    async () => {
      let { OwnershipTransferDialog: e } = await import(`./dialog-5f51fbe2d2e6.js`);
      return { OwnershipTransferDialog: e };
    },
    __vite__mapDeps([6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13]),
    import.meta.url,
  ).then(({ OwnershipTransferDialog: n }) => {
    Xe(e, n, t);
  });
}
var mr, hr;
function gr() {
  return (gr = e(() => {
    ((mr = ke()), F(), S(), V(), Ge(), Ce(), Ke(), Ae(), B(), _t(), c(), Vt(), Oe(), Jt(), (hr = Me()), ye());
  }))();
}
function _r(e) {
  let t = (0, Mr.c)(16),
    { navigation: n, initialEnvironmentDraft: r, initialTitle: i } = e,
    a = H(),
    o = n?.projectId ?? a.projectId,
    c = s();
  if (o == null) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(tn, { navigation: n, to: J })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let l;
  t[2] === o ? (l = t[3]) : ((l = (0, $.jsx)(yn, { projectId: o })), (t[2] = o), (t[3] = l));
  let u;
  t[4] !== c || t[5] !== n?.onNavigate
    ? ((u = () => {
        (n?.onNavigate ?? c)(J);
      }),
      (t[4] = c),
      (t[5] = n?.onNavigate),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== r || t[8] !== i || t[9] !== n || t[10] !== o || t[11] !== u
    ? ((d = (0, $.jsx)(vr, {
        navigation: n,
        initialEnvironmentDraft: r,
        initialTitle: i,
        projectId: o,
        onDeleted: u,
      })),
      (t[7] = r),
      (t[8] = i),
      (t[9] = n),
      (t[10] = o),
      (t[11] = u),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== l || t[14] !== d
      ? ((f = (0, $.jsxs)($.Fragment, { children: [l, d] })), (t[13] = l), (t[14] = d), (t[15] = f))
      : (f = t[15]),
    f
  );
}
function vr(e) {
  let t = (0, Mr.c)(14),
    { navigation: n, initialEnvironmentDraft: r, initialTitle: i, onDeleted: a, projectId: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = $e(o)), (t[0] = o), (t[1] = s));
  let { data: c } = P(s),
    l = c != null,
    u;
  t[2] === l ? (u = t[3]) : ((u = { enabled: l }), (t[2] = l), (t[3] = u));
  let { data: d, isLoading: f } = Ie(mt, o, u),
    p;
  t[4] !== d || t[5] !== r || t[6] !== i || t[7] !== f || t[8] !== a
    ? ((p = (e) =>
        (0, $.jsx)(br, {
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
function yr(e) {
  let t = (0, Mr.c)(17),
    { initialEnvironmentDraft: n, initialTitle: r, onDeleted: i, onTransferred: a, projectId: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = $e(o)), (t[0] = o), (t[1] = s));
  let { data: c, isError: l, isLoading: u, refetch: d } = P(s),
    f = c != null,
    p;
  t[2] === f ? (p = t[3]) : ((p = { enabled: f }), (t[2] = f), (t[3] = p));
  let { data: m, isLoading: h } = Ie(mt, o, p),
    g;
  if (u) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(Qt, {})), (t[4] = e)) : (e = t[4]),
      (g = e));
  } else if (l || c == null) {
    let e;
    (t[5] === d ? (e = t[6]) : ((e = (0, $.jsx)(Ar, { onRetry: () => void d() })), (t[5] = d), (t[6] = e)),
      (g = e));
  } else {
    let e;
    (t[7] !== m || t[8] !== n || t[9] !== r || t[10] !== h || t[11] !== i || t[12] !== a || t[13] !== c
      ? ((e = (0, $.jsx)(br, {
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
            children: (0, $.jsx)(Ct, { className: `w-full px-4 py-3`, embedded: !0, children: g }),
          }),
        })),
        (t[15] = g),
        (t[16] = _)),
    _
  );
}
function br(e) {
  let t = (0, Mr.c)(19),
    {
      embedded: n,
      environment: r,
      initialEnvironmentDraft: a,
      initialTitle: o,
      isEnvironmentLoading: s,
      onDeleted: c,
      onTransferred: l,
      site: u,
    } = e,
    d = f(i);
  if (s) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(Qt, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (r == null) {
    let e;
    return (
      t[1] !== d || t[2] !== u.id
        ? ((e = (0, $.jsx)(Ar, { onRetry: () => void d.get(mt, u.id).refetch() })),
          (t[1] = d),
          (t[2] = u.id),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let p;
  t[4] !== n || t[5] !== u.live_url || t[6] !== u.title
    ? ((p = n ? (0, $.jsx)(qn, { liveUrl: u.live_url, title: u.title }) : null),
      (t[4] = n),
      (t[5] = u.live_url),
      (t[6] = u.title),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== n || t[9] !== r || t[10] !== a || t[11] !== o || t[12] !== c || t[13] !== l || t[14] !== u
    ? ((m = (0, $.jsx)(
        xr,
        {
          embedded: n,
          environment: r,
          initialEnvironmentDraft: a,
          initialTitle: o,
          onDeleted: c,
          onTransferred: l,
          site: u,
        },
        u.id,
      )),
      (t[8] = n),
      (t[9] = r),
      (t[10] = a),
      (t[11] = o),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== p || t[17] !== m
      ? ((h = (0, $.jsxs)($.Fragment, { children: [p, m] })), (t[16] = p), (t[17] = m), (t[18] = h))
      : (h = t[18]),
    h
  );
}
function xr(e) {
  let n = (0, Mr.c)(236),
    {
      embedded: r,
      environment: a,
      initialEnvironmentDraft: o,
      initialTitle: s,
      onDeleted: c,
      onTransferred: u,
      site: p,
    } = e,
    m = f(i),
    h = ge(),
    { live_url: _, hosted_url: v, id: y, slug: b, title: x } = p,
    S = Mt(`324493575`),
    { data: C, isError: w, isFetched: T, isFetching: E, refetch: O } = j(Be),
    k = C?.custom_domains_enabled === !0,
    M = T && E && C == null,
    N;
  n[0] === k ? (N = n[1]) : ((N = { enabled: k }), (n[0] = k), (n[1] = N));
  let { data: F, isError: I, isLoading: te, refetch: ne } = Ie(It, y, N),
    L = Ie(Lt, y),
    re = Ie(jt, y),
    R = ee(),
    ie = j(qe),
    ae = j(ot),
    oe;
  n[2] !== ie || n[3] !== a || n[4] !== o || n[5] !== s || n[6] !== p || n[7] !== ae
    ? ((oe = {
        accountId: ie,
        userId: ae,
        site: p,
        environment: a,
        initialTitle: s,
        initialEnvironmentDraft: o,
      }),
      (n[2] = ie),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s),
      (n[6] = p),
      (n[7] = ae),
      (n[8] = oe))
    : (oe = n[8]);
  let z = D(vt, oe),
    se = j(z.pendingEdit$),
    ce = j(z.pendingTitle$),
    ue = v ?? (Bt(_, b) == null ? null : _),
    de = j(z.titleStatus$),
    fe = j(z.environmentStatus$),
    {
      setPendingEdit: B,
      setPendingTitle: V,
      setTitleStatus: pe,
      setEnvironmentStatus: H,
      titleEditRef: U,
      savedTitleRef: me,
      environmentEditRef: W,
      environmentUncertainKeysRef: he,
      titleTimerRef: G,
      titleSavingRef: _e,
      environmentSavingRef: ve,
      titleRequestedRef: ye,
      environmentRequestedRef: xe,
      skipFlushRef: K,
      titleFailedRef: q,
    } = z,
    [Se, Ce] = (0, Nr.useState)(se != null),
    we;
  n[9] !== a || n[10] !== se?.draft
    ? ((we = se?.draft ?? zn(a)), (n[9] = a), (n[10] = se?.draft), (n[11] = we))
    : (we = n[11]);
  let Te = we,
    De = se == null || !Se ? null : Vn(se.draft),
    Oe;
  n[12] !== ce || n[13] !== x ? ((Oe = mn(ce, x)), (n[12] = ce), (n[13] = x), (n[14] = Oe)) : (Oe = n[14]);
  let { isInvalid: ke, title: Ae } = Oe,
    je = de === `saving` || fe === `saving`,
    Me = (0, Nr.useRef)(!1),
    Ne,
    Pe;
  (n[15] !== me || n[16] !== x || n[17] !== U || n[18] !== q || n[19] !== _e
    ? ((Ne = () => {
        !_e.current && U.current == null && !q.current && (me.current = x);
      }),
      (Pe = [x, _e, U, q, me]),
      (n[15] = me),
      (n[16] = x),
      (n[17] = U),
      (n[18] = q),
      (n[19] = _e),
      (n[20] = Ne),
      (n[21] = Pe))
    : ((Ne = n[20]), (Pe = n[21])),
    (0, Nr.useEffect)(Ne, Pe));
  let Fe;
  n[22] !== z ||
  n[23] !== R ||
  n[24] !== me ||
  n[25] !== m ||
  n[26] !== V ||
  n[27] !== pe ||
  n[28] !== K ||
  n[29] !== U ||
  n[30] !== q ||
  n[31] !== ye ||
  n[32] !== _e ||
  n[33] !== G ||
  n[34] !== re
    ? ((Fe = () => {
        K.current ||
          Me.current ||
          !z.isCurrentIdentity() ||
          (G.current != null && (clearTimeout(G.current), (G.current = null)),
          (ye.current = !0),
          !_e.current &&
            ((_e.current = !0),
            (async () => {
              for (; ye.current && !Me.current && z.isCurrentIdentity();) {
                ye.current = !1;
                let e = U.current,
                  { update: t } = mn(e, me.current, q.current);
                if (t == null) {
                  e?.trim() === me.current && ((U.current = null), V(null), pe(`idle`));
                  break;
                }
                pe(`saving`);
                try {
                  (await re.mutateAsync(t),
                    (me.current = t.title),
                    (q.current = !1),
                    U.current === e && ((U.current = null), V(null)),
                    pe(U.current == null ? `saved` : `idle`));
                } catch {
                  ((q.current = !0),
                    pe(`error`),
                    (ye.current = !1),
                    m
                      .get(le)
                      .danger(R.formatMessage(Lr.title), {
                        errorAnalytics: { toastId: `sites_settings_save_error` },
                      }));
                }
              }
              _e.current = !1;
            })()));
      }),
      (n[22] = z),
      (n[23] = R),
      (n[24] = me),
      (n[25] = m),
      (n[26] = V),
      (n[27] = pe),
      (n[28] = K),
      (n[29] = U),
      (n[30] = q),
      (n[31] = ye),
      (n[32] = _e),
      (n[33] = G),
      (n[34] = re),
      (n[35] = Fe))
    : (Fe = n[35]);
  let J = Fe,
    Le;
  n[36] !== z ||
  n[37] !== W ||
  n[38] !== xe ||
  n[39] !== ve ||
  n[40] !== he ||
  n[41] !== R ||
  n[42] !== y ||
  n[43] !== h ||
  n[44] !== m ||
  n[45] !== H ||
  n[46] !== B ||
  n[47] !== K ||
  n[48] !== L
    ? ((Le = () => {
        if (K.current || !z.isCurrentIdentity()) return;
        let e = W.current,
          t = e != null && Vn(e.draft) != null;
        (Ce(t),
          !t &&
            ((xe.current = !0),
            !ve.current &&
              ((ve.current = !0),
              (async () => {
                for (; xe.current && z.isCurrentIdentity();) {
                  xe.current = !1;
                  try {
                    if (he.current != null) {
                      H(`saving`);
                      let e = await h.fetchQuery({ ...m.query.getOptions(mt, y), staleTime: 0 });
                      if (K.current || !z.isCurrentIdentity()) {
                        H(`error`);
                        break;
                      }
                      let t = W.current;
                      if (t == null) break;
                      let n = {
                        baseEnvironment: e,
                        draft: Hn(t.draft, zn(t.baseEnvironment), e, he.current),
                      };
                      ((W.current = n), B(n), (he.current = null), H(`idle`));
                    }
                    let e = W.current;
                    if (e == null) break;
                    let t = Bn(e.baseEnvironment, e.draft);
                    if (t == null) break;
                    if (t.remove.length === 0 && t.set_values.length === 0) {
                      ((W.current = null), B(null), H(`idle`));
                      break;
                    }
                    (H(`saving`), (he.current = new Set([...t.remove, ...t.set_values.map(Dr)])));
                    let n = await L.mutateAsync(t);
                    he.current = null;
                    let r = W.current,
                      i =
                        r == null || r === e ? null : { baseEnvironment: n, draft: Hn(r.draft, e.draft, n) };
                    ((W.current = i), B(i), H(i == null ? `saved` : `idle`));
                    let a = new Set(e.baseEnvironment.entries.filter(Er).map(Tr)),
                      o = new Set(e.draft.entries.map(wr)),
                      s = e.draft.entries.filter((e) => {
                        let { isSecret: t, key: n, previousKey: r } = e;
                        return !t && r == null && (!a.has(n) || o.has(n));
                      }).length;
                    if (s > 0)
                      try {
                        et(m, g, { addedCount: d(s), projectId: y });
                      } catch {}
                  } catch (e) {
                    let t = e;
                    (H(`error`), (xe.current = !1));
                    let n = jr(t),
                      r = R.formatMessage(Lr.environment);
                    (n === `environment_requires_secrets`
                      ? (r = R.formatMessage({
                          id: `appgenSettings.save.secretsRequired`,
                          defaultMessage: `Environment variables aren’t supported for this Site due to its geographic restrictions. Enable Secret for each value, then try again.`,
                          description: `Error toast when a Site owner tries to save an ordinary environment variable in a workspace with regional data controls. Secret is the per-value toggle in the form. Enabling it stores the value in the regional Secrets Store.`,
                        }))
                      : n === `invalid_secret_name`
                        ? (r = R.formatMessage({
                            id: `appgenSettings.save.invalidSecretName`,
                            defaultMessage: `Secret names must be 1–100 characters, start with A–Z, a–z, or _, and contain only A–Z, a–z, 0–9, or _. Choose a valid name and update references in your app.`,
                            description: `Error toast in Site settings when an owner saves a secret with an invalid name. Preserve the literal character ranges A–Z, a–z, 0–9, the underscore _, and the 1–100 length limit. The owner must rename the secret and update its uses in app code. Plain text without Markdown.`,
                          }))
                        : n === `regional_environment_unavailable` &&
                          (r = R.formatMessage({
                            id: `appgenSettings.save.regionalEnvironmentUnavailable`,
                            defaultMessage: `Use the Sites agent to add, update, or remove secrets for this Site`,
                            description: `Error toast when the legacy Site settings service cannot edit regional secrets. Direct the owner to the Sites agent, which can use the supported environment tools.`,
                          })),
                      m.get(le).danger(r, { errorAnalytics: { toastId: `sites_settings_save_error` } }));
                  }
                }
                ve.current = !1;
              })())));
      }),
      (n[36] = z),
      (n[37] = W),
      (n[38] = xe),
      (n[39] = ve),
      (n[40] = he),
      (n[41] = R),
      (n[42] = y),
      (n[43] = h),
      (n[44] = m),
      (n[45] = H),
      (n[46] = B),
      (n[47] = K),
      (n[48] = L),
      (n[49] = Le))
    : (Le = n[49]);
  let Y = Le,
    Re;
  n[50] !== z || n[51] !== Y || n[52] !== J || n[53] !== K
    ? ((Re = () => {
        !K.current && z.isCurrentIdentity() && (J(), Y());
      }),
      (n[50] = z),
      (n[51] = Y),
      (n[52] = J),
      (n[53] = K),
      (n[54] = Re))
    : (Re = n[54]);
  let ze = (0, Nr.useEffectEvent)(Re),
    Ve;
  n[55] === ze ? (Ve = n[56]) : ((Ve = () => () => ze()), (n[55] = ze), (n[56] = Ve));
  let He;
  (n[57] === Symbol.for(`react.memo_cache_sentinel`) ? ((He = []), (n[57] = He)) : (He = n[57]),
    (0, Nr.useEffect)(Ve, He));
  let Ue;
  n[58] === y
    ? (Ue = n[59])
    : ((Ue = { queryKey: [...st, y], queryFn: A, gcTime: Ir, staleTime: 1 / 0 }), (n[58] = y), (n[59] = Ue));
  let { data: Ge } = P(Ue),
    Ke = Ge != null && Ge.requestedSlug !== b,
    Je;
  n[60] !== Ge || n[61] !== y || n[62] !== h
    ? ((Je = () => {
        let e = !1;
        return (
          h.setQueryData([...st, y], (t) =>
            t == null || Ge == null || t.expiresAt !== Ge.expiresAt || t.requestedSlug !== Ge.requestedSlug
              ? t
              : ((e = !0), null),
          ),
          e
        );
      }),
      (n[60] = Ge),
      (n[61] = y),
      (n[62] = h),
      (n[63] = Je))
    : (Je = n[63]);
  let Ye = Je,
    Ze;
  n[64] !== R || n[65] !== y || n[66] !== h || n[67] !== m
    ? ((Ze = () => {
        let e = !1;
        (h.setQueryData([...st, y], (t) => (t == null || Date.now() < t.expiresAt ? t : ((e = !0), null))),
          e &&
            m
              .get(le)
              .danger(
                R.formatMessage({
                  id: `appgenSettings.general.url.changeTimeout`,
                  defaultMessage: `Site URL change is taking longer than expected`,
                  description: `Error toast shown when a requested Site URL change does not finish within ten minutes`,
                }),
                { errorAnalytics: { toastId: `sites_settings_slug_save_timeout` } },
              ));
      }),
      (n[64] = R),
      (n[65] = y),
      (n[66] = h),
      (n[67] = m),
      (n[68] = Ze))
    : (Ze = n[68]);
  let Qe = Ze,
    $e = Ge?.requestedSlug,
    tt;
  n[69] !== y || n[70] !== $e
    ? ((tt = [...st, y, `poll`, $e]), (n[69] = y), (n[70] = $e), (n[71] = tt))
    : (tt = n[71]);
  let nt;
  n[72] !== Qe ||
  n[73] !== Ye ||
  n[74] !== R ||
  n[75] !== Ge?.requestedSlug ||
  n[76] !== y ||
  n[77] !== h ||
  n[78] !== m
    ? ((nt = async () => {
        let e;
        try {
          e = await We(y);
        } catch (e) {
          let t = e;
          throw (
            Ye() &&
              m
                .get(le)
                .danger(
                  R.formatMessage({
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
          e.slug === Ge?.requestedSlug
            ? (h.setQueryData([...ct, y], e),
              await Promise.all([
                h.invalidateQueries({ queryKey: ut }),
                h.invalidateQueries({ queryKey: [...Ot, y] }),
              ]),
              Ye())
            : Qe(),
          e
        );
      }),
      (n[72] = Qe),
      (n[73] = Ye),
      (n[74] = R),
      (n[75] = Ge?.requestedSlug),
      (n[76] = y),
      (n[77] = h),
      (n[78] = m),
      (n[79] = nt))
    : (nt = n[79]);
  let at;
  (n[80] !== Ke || n[81] !== tt || n[82] !== nt
    ? ((at = { queryKey: tt, queryFn: nt, enabled: Ke, refetchInterval: Fr, retry: !1, staleTime: 0 }),
      (n[80] = Ke),
      (n[81] = tt),
      (n[82] = nt),
      (n[83] = at))
    : (at = n[83]),
    P(at));
  let lt =
      S &&
      C?.slug_change_enabled === !0 &&
      p.status === `active` &&
      (p.current_user_role === `owner` || p.current_user_role === void 0),
    dt = null;
  if (ke) {
    let e;
    (n[84] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          id: Pr,
          className: `text-sm text-chart-red`,
          role: `alert`,
          children: (0, $.jsx)(l, {
            id: `appgenSettings.general.title.required`,
            defaultMessage: `Site title is required`,
            description: `Inline validation message below the Site settings form when the Site title is empty`,
          }),
        })),
        (n[84] = e))
      : (e = n[84]),
      (dt = e));
  } else if (De === `missing-key`) {
    let e;
    (n[85] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `text-sm text-red`,
          role: `alert`,
          children: (0, $.jsx)(l, {
            id: `appgenSettings.environmentKeys.required`,
            defaultMessage: `Enter a key for every environment variable, or remove the empty row`,
            description: `Inline validation on the settings form on the Site settings page. A Site owner added an environment-variable row with an empty or whitespace-only key. Explain how to fix the draft before saving. No placeholders.`,
          }),
        })),
        (n[85] = e))
      : (e = n[85]),
      (dt = e));
  } else if (De === `duplicate-key`) {
    let e;
    (n[86] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `text-sm text-red`,
          role: `alert`,
          children: (0, $.jsx)(l, {
            id: `appgenSettings.environmentKeys.duplicate`,
            defaultMessage: `Environment variable keys must be unique`,
            description: `Validation shown when environment settings use a duplicate key`,
          }),
        })),
        (n[86] = e))
      : (e = n[86]),
      (dt = e));
  } else if (De === `stored-secret-needs-value`) {
    let e;
    (n[87] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `text-sm text-red`,
          role: `alert`,
          children: (0, $.jsx)(l, {
            id: `appgenSettings.environmentVariables.storedSecretNeedsValue`,
            defaultMessage: `Enter a new value before making a stored secret public`,
            description: `Validation shown when a stored secret is changed to a public environment variable without replacing its hidden value`,
          }),
        })),
        (n[87] = e))
      : (e = n[87]),
      (dt = e));
  }
  let ft = null;
  de === `error` && fe === `error`
    ? (ft = `both`)
    : de === `error`
      ? (ft = `title`)
      : fe === `error` && (ft = `environment`);
  let pt = null;
  if (je) {
    let e;
    (n[88] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(l, {
          id: `appgenSettings.autosave.saving`,
          defaultMessage: `Saving…`,
          description: `Status on Site settings and the settings dialog while the owner's name or environment changes are being saved automatically`,
        })),
        (n[88] = e))
      : (e = n[88]),
      (pt = e));
  } else if (
    ft == null &&
    !ke &&
    De == null &&
    ce == null &&
    se == null &&
    (de === `saved` || fe === `saved`)
  ) {
    let e;
    (n[89] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(l, {
          id: `appgenSettings.autosave.saved`,
          defaultMessage: `Saved`,
          description: `Status confirming that the Site owner's latest name and environment edits were saved successfully`,
        })),
        (n[89] = e))
      : (e = n[89]),
      (pt = e));
  }
  let ht;
  n[90] !== Y || n[91] !== J
    ? ((ht = (e) => {
        (e.preventDefault(), J(), Y());
      }),
      (n[90] = Y),
      (n[91] = J),
      (n[92] = ht))
    : (ht = n[92]);
  let gt;
  n[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, $.jsx)(it.Header, {
        title: (0, $.jsx)(`span`, {
          className: `text-base`,
          children: (0, $.jsx)(l, {
            id: `appgenSettings.general.title`,
            defaultMessage: `General`,
            description: `Section heading for general Site information on the Site settings page`,
          }),
        }),
      })),
      (n[93] = gt))
    : (gt = n[93]);
  let _t, yt;
  n[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = (0, $.jsx)(l, {
        id: `appgenSettings.general.title.label`,
        defaultMessage: `Name`,
        description: `Short label for the editable Site title field on the Site settings page`,
      })),
      (yt = (0, $.jsx)(l, {
        id: `appgenSettings.general.title.description`,
        defaultMessage: `Name for your site`,
        description: `Help text for the editable Site title field on the Site settings page`,
      })),
      (n[94] = _t),
      (n[95] = yt))
    : ((_t = n[94]), (yt = n[95]));
  let bt;
  n[96] === R
    ? (bt = n[97])
    : ((bt = R.formatMessage({
        id: `appgenSettings.general.title.ariaLabel`,
        defaultMessage: `Site title`,
        description: `Accessible label for the Site title text input on the Site settings page`,
      })),
      (n[96] = R),
      (n[97] = bt));
  let xt = ke ? Pr : void 0,
    St;
  n[98] !== J || n[99] !== V || n[100] !== pe || n[101] !== U || n[102] !== G
    ? ((St = (e) => {
        let t = e.target.value;
        ((U.current = t),
          V(t),
          pe(Cr),
          G.current != null && clearTimeout(G.current),
          Me.current || (G.current = setTimeout(J, 900)));
      }),
      (n[98] = J),
      (n[99] = V),
      (n[100] = pe),
      (n[101] = U),
      (n[102] = G),
      (n[103] = St))
    : (St = n[103]);
  let Ct;
  n[104] === G
    ? (Ct = n[105])
    : ((Ct = () => {
        ((Me.current = !0), G.current != null && clearTimeout(G.current));
      }),
      (n[104] = G),
      (n[105] = Ct));
  let Tt;
  n[106] !== J || n[107] !== G
    ? ((Tt = () => {
        ((Me.current = !1), G.current != null && clearTimeout(G.current), (G.current = setTimeout(J, 900)));
      }),
      (n[106] = J),
      (n[107] = G),
      (n[108] = Tt))
    : (Tt = n[108]);
  let Et;
  n[109] === J
    ? (Et = n[110])
    : ((Et = (e) => {
        e.key === `Enter` &&
          !e.nativeEvent.isComposing &&
          e.nativeEvent.keyCode !== 229 &&
          (e.preventDefault(), J());
      }),
      (n[109] = J),
      (n[110] = Et));
  let Dt;
  n[111] !== ke ||
  n[112] !== J ||
  n[113] !== bt ||
  n[114] !== xt ||
  n[115] !== St ||
  n[116] !== Ct ||
  n[117] !== Tt ||
  n[118] !== Et ||
  n[119] !== Ae
    ? ((Dt = (0, $.jsx)(Ee, {
        labelWeight: `normal`,
        layout: `split`,
        label: _t,
        description: yt,
        control: (0, $.jsx)(`div`, {
          className: `w-full max-w-84`,
          children: (0, $.jsx)(rt, {
            "aria-label": bt,
            "aria-describedby": xt,
            "aria-invalid": ke,
            maxLength: 100,
            type: `text`,
            value: Ae,
            onChange: St,
            onCompositionStart: Ct,
            onCompositionEnd: Tt,
            onBlur: J,
            onKeyDown: Et,
          }),
        }),
      })),
      (n[111] = ke),
      (n[112] = J),
      (n[113] = bt),
      (n[114] = xt),
      (n[115] = St),
      (n[116] = Ct),
      (n[117] = Tt),
      (n[118] = Et),
      (n[119] = Ae),
      (n[120] = Dt))
    : (Dt = n[120]);
  let kt;
  n[121] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((kt = (0, $.jsx)(l, {
        id: `appgenSettings.general.url.label`,
        defaultMessage: `URL`,
        description: `Label for the published Site URL on the Site settings page`,
      })),
      (n[121] = kt))
    : (kt = n[121]);
  let At;
  n[122] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((At = (0, $.jsx)(l, {
        id: `appgenSettings.general.url.description`,
        defaultMessage: `Web address`,
        description: `Description for the published Site URL on the Site settings page`,
      })),
      (n[122] = At))
    : (At = n[122]);
  let Nt;
  n[123] !== r || n[124] !== ue || n[125] !== p.status || n[126] !== b
    ? ((Nt =
        ue == null || p.status === `suspended`
          ? b
          : (0, $.jsx)(qt, {
              className: `block max-w-full truncate`,
              appearance: `secondary`,
              underline: `hover`,
              href: ue,
              initiator: `sites_library`,
              openAsWebsite: !0,
              openTarget: r ? `external-browser` : void 0,
              children: wt(ue),
            })),
      (n[123] = r),
      (n[124] = ue),
      (n[125] = p.status),
      (n[126] = b),
      (n[127] = Nt))
    : (Nt = n[127]);
  let Pt;
  n[128] === Nt
    ? (Pt = n[129])
    : ((Pt = (0, $.jsx)(`span`, {
        className: `min-w-0 flex-1 text-end text-sm text-secondary`,
        children: Nt,
      })),
      (n[128] = Nt),
      (n[129] = Pt));
  let Ft;
  n[130] !== lt ||
  n[131] !== ue ||
  n[132] !== R ||
  n[133] !== Ke ||
  n[134] !== y ||
  n[135] !== m ||
  n[136] !== b
    ? ((Ft = lt
        ? (0, $.jsx)(t, {
            "aria-label": R.formatMessage({
              id: `appgenSettings.general.url.changeAriaLabel`,
              defaultMessage: `Change hosted site URL`,
              description: `Accessible label for opening the hosted Site URL change dialog`,
            }),
            color: `outlineSurface`,
            loading: Ke,
            size: `toolbar`,
            onClick: () => {
              ur(m, { currentSlug: b, hostedDomainSuffix: Bt(ue, b), projectId: y });
            },
            children: (0, $.jsx)(l, {
              id: `appgenSettings.general.url.change`,
              defaultMessage: `Change`,
              description: `Button label for changing a Site's hosted URL`,
            }),
          })
        : null),
      (n[130] = lt),
      (n[131] = ue),
      (n[132] = R),
      (n[133] = Ke),
      (n[134] = y),
      (n[135] = m),
      (n[136] = b),
      (n[137] = Ft))
    : (Ft = n[137]);
  let Rt;
  n[138] !== Pt || n[139] !== Ft
    ? ((Rt = (0, $.jsx)(Ee, {
        labelWeight: `normal`,
        layout: `split`,
        label: kt,
        labelSizing: `content`,
        controlSizing: `grow`,
        description: At,
        control: (0, $.jsxs)(`div`, {
          className: `flex w-full min-w-0 items-center justify-end gap-2 max-sm:justify-between`,
          children: [Pt, Ft],
        }),
      })),
      (n[138] = Pt),
      (n[139] = Ft),
      (n[140] = Rt))
    : (Rt = n[140]);
  let zt = w ? void 0 : F,
    Vt = k || w || M,
    Ht = !M && (w || I),
    Ut = M || (!w && te),
    Wt;
  n[141] !== w || n[142] !== ne || n[143] !== O
    ? ((Wt = async () => {
        if (w) {
          let e = await O();
          if (e.isError) return `error`;
          if (e.data?.custom_domains_enabled !== !0) return `unavailable`;
        }
        return (await ne()).isError ? `error` : `success`;
      }),
      (n[141] = w),
      (n[142] = ne),
      (n[143] = O),
      (n[144] = Wt))
    : (Wt = n[144]);
  let Gt;
  n[145] !== y || n[146] !== zt || n[147] !== Vt || n[148] !== Ht || n[149] !== Ut || n[150] !== Wt
    ? ((Gt = (0, $.jsx)(Tn, {
        customDomains: zt,
        isAvailable: Vt,
        isError: Ht,
        isLoading: Ut,
        onRetry: Wt,
        projectId: y,
      })),
      (n[145] = y),
      (n[146] = zt),
      (n[147] = Vt),
      (n[148] = Ht),
      (n[149] = Ut),
      (n[150] = Wt),
      (n[151] = Gt))
    : (Gt = n[151]);
  let Kt;
  n[152] !== y || n[153] !== p.sharing || n[154] !== x
    ? ((Kt = (0, $.jsx)(Or, { accessState: p.sharing, projectId: y, siteTitle: x })),
      (n[152] = y),
      (n[153] = p.sharing),
      (n[154] = x),
      (n[155] = Kt))
    : (Kt = n[155]);
  let Jt;
  n[156] !== Dt || n[157] !== Rt || n[158] !== Gt || n[159] !== Kt
    ? ((Jt = (0, $.jsxs)(it, {
        children: [
          gt,
          (0, $.jsx)(it.Content, {
            children: (0, $.jsxs)(be, { variant: `flat`, children: [Dt, Rt, Gt, Kt] }),
          }),
        ],
      })),
      (n[156] = Dt),
      (n[157] = Rt),
      (n[158] = Gt),
      (n[159] = Kt),
      (n[160] = Jt))
    : (Jt = n[160]);
  let Yt = fe === `saving`,
    Xt;
  n[161] === he ? (Xt = n[162]) : ((Xt = (e) => he.current?.has(e) === !0), (n[161] = he), (n[162] = Xt));
  let Zt = a.requires_secrets === !0,
    Qt;
  n[163] === Symbol.for(`react.memo_cache_sentinel`) ? ((Qt = () => Ce(!1)), (n[163] = Qt)) : (Qt = n[163]);
  let $t;
  n[164] !== a || n[165] !== W || n[166] !== H || n[167] !== B
    ? (($t = (e) => {
        let t = { baseEnvironment: W.current?.baseEnvironment ?? a, draft: { entries: e } };
        ((W.current = t), B(t), H(Sr));
      }),
      (n[164] = a),
      (n[165] = W),
      (n[166] = H),
      (n[167] = B),
      (n[168] = $t))
    : ($t = n[168]);
  let en;
  n[169] !== Te.entries || n[170] !== Y || n[171] !== Yt || n[172] !== Xt || n[173] !== Zt || n[174] !== $t
    ? ((en = (0, $.jsx)(ar, {
        entries: Te.entries,
        isSaving: Yt,
        isSaveUncertain: Xt,
        requiresSecrets: Zt,
        onAdd: Qt,
        onChange: $t,
        onCommit: Y,
      })),
      (n[169] = Te.entries),
      (n[170] = Y),
      (n[171] = Yt),
      (n[172] = Xt),
      (n[173] = Zt),
      (n[174] = $t),
      (n[175] = en))
    : (en = n[175]);
  let tn;
  n[176] !== fe || n[177] !== Y || n[178] !== J || n[179] !== ft || n[180] !== de
    ? ((tn =
        ft == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, $.jsx)(`p`, {
                  className: `text-sm text-red`,
                  role: `alert`,
                  children: (0, $.jsx)(l, { ...Lr[ft] }),
                }),
                (0, $.jsx)(t, {
                  size: `toolbar`,
                  type: `button`,
                  onClick: () => {
                    (de === `error` && J(), fe === `error` && Y());
                  },
                  children: (0, $.jsx)(l, {
                    id: `appgenSettings.autosave.retry`,
                    defaultMessage: `Retry`,
                    description: `Button on Site settings and the settings dialog that retries failed automatic saves, preserving the owner's edits`,
                  }),
                }),
              ],
            })),
      (n[176] = fe),
      (n[177] = Y),
      (n[178] = J),
      (n[179] = ft),
      (n[180] = de),
      (n[181] = tn))
    : (tn = n[181]);
  let nn;
  n[182] === pt
    ? (nn = n[183])
    : ((nn = (0, $.jsx)(`p`, { className: `text-sm text-secondary`, role: `status`, children: pt })),
      (n[182] = pt),
      (n[183] = nn));
  let rn;
  n[184] !== en || n[185] !== tn || n[186] !== nn || n[187] !== dt
    ? ((rn = (0, $.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [en, dt, tn, nn] })),
      (n[184] = en),
      (n[185] = tn),
      (n[186] = nn),
      (n[187] = dt),
      (n[188] = rn))
    : (rn = n[188]);
  let an;
  n[189] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((an = (0, $.jsx)(it.Header, {
        title: (0, $.jsx)(l, {
          id: `appgenSettings.danger.title`,
          defaultMessage: `Danger zone`,
          description: `Heading for destructive site actions`,
        }),
      })),
      (n[189] = an))
    : (an = n[189]);
  let on;
  n[190] !== z ||
  n[191] !== W ||
  n[192] !== ve ||
  n[193] !== he ||
  n[194] !== Y ||
  n[195] !== J ||
  n[196] !== K ||
  n[197] !== U ||
  n[198] !== q ||
  n[199] !== _e
    ? ((on = () =>
        K.current || !z.isCurrentIdentity()
          ? !1
          : (J(),
            Y(),
            !Me.current &&
              !_e.current &&
              !ve.current &&
              U.current == null &&
              W.current == null &&
              he.current == null &&
              !q.current)),
      (n[190] = z),
      (n[191] = W),
      (n[192] = ve),
      (n[193] = he),
      (n[194] = Y),
      (n[195] = J),
      (n[196] = K),
      (n[197] = U),
      (n[198] = q),
      (n[199] = _e),
      (n[200] = on))
    : (on = n[200]);
  let sn;
  n[201] !== je || n[202] !== u || n[203] !== p || n[204] !== on
    ? ((sn = (0, $.jsx)(fr, { disabled: je, onBeforeTransfer: on, onTransferred: u, project: p })),
      (n[201] = je),
      (n[202] = u),
      (n[203] = p),
      (n[204] = on),
      (n[205] = sn))
    : (sn = n[205]);
  let cn, ln;
  n[206] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((cn = (0, $.jsx)(l, {
        id: `appgenSettings.danger.delete.label`,
        defaultMessage: `Delete site`,
        description: `Label for the delete site action`,
      })),
      (ln = (0, $.jsx)(l, {
        id: `appgenSettings.danger.delete.description`,
        defaultMessage: `Permanently delete this site`,
        description: `Description for the delete site action`,
      })),
      (n[206] = cn),
      (n[207] = ln))
    : ((cn = n[206]), (ln = n[207]));
  let un;
  n[208] !== W ||
  n[209] !== ve ||
  n[210] !== c ||
  n[211] !== y ||
  n[212] !== Y ||
  n[213] !== J ||
  n[214] !== m ||
  n[215] !== B ||
  n[216] !== V ||
  n[217] !== b ||
  n[218] !== x ||
  n[219] !== K ||
  n[220] !== U ||
  n[221] !== _e ||
  n[222] !== G
    ? ((un = () => {
        Xe(m, kr, {
          onDeleteStart: () =>
            _e.current || ve.current
              ? !1
              : ((K.current = !0), G.current != null && clearTimeout(G.current), !0),
          onDeleteError: () => {
            ((K.current = !1), J(), Y());
          },
          onDeleted: () => {
            ((U.current = null), (W.current = null), V(null), B(null), c());
          },
          projectId: y,
          siteSlug: b,
          siteTitle: x,
        });
      }),
      (n[208] = W),
      (n[209] = ve),
      (n[210] = c),
      (n[211] = y),
      (n[212] = Y),
      (n[213] = J),
      (n[214] = m),
      (n[215] = B),
      (n[216] = V),
      (n[217] = b),
      (n[218] = x),
      (n[219] = K),
      (n[220] = U),
      (n[221] = _e),
      (n[222] = G),
      (n[223] = un))
    : (un = n[223]);
  let dn;
  n[224] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dn = (0, $.jsx)(l, {
        id: `appgenSettings.danger.delete.button`,
        defaultMessage: `Delete site`,
        description: `Delete site button label`,
      })),
      (n[224] = dn))
    : (dn = n[224]);
  let fn;
  n[225] !== je || n[226] !== un
    ? ((fn = (0, $.jsx)(Ee, {
        labelWeight: `normal`,
        layout: `split`,
        label: cn,
        description: ln,
        control: (0, $.jsx)(t, {
          color: `dangerOutline`,
          disabled: je,
          size: `toolbar`,
          type: `button`,
          onClick: un,
          children: dn,
        }),
      })),
      (n[225] = je),
      (n[226] = un),
      (n[227] = fn))
    : (fn = n[227]);
  let pn;
  n[228] !== sn || n[229] !== fn
    ? ((pn = (0, $.jsxs)(it, {
        children: [
          an,
          (0, $.jsx)(it.Content, { children: (0, $.jsxs)(be, { variant: `flat`, children: [sn, fn] }) }),
        ],
      })),
      (n[228] = sn),
      (n[229] = fn),
      (n[230] = pn))
    : (pn = n[230]);
  let hn;
  return (
    n[231] !== ht || n[232] !== Jt || n[233] !== rn || n[234] !== pn
      ? ((hn = (0, $.jsxs)(`form`, {
          className: `flex flex-col gap-12`,
          onSubmit: ht,
          children: [Jt, rn, pn],
        })),
        (n[231] = ht),
        (n[232] = Jt),
        (n[233] = rn),
        (n[234] = pn),
        (n[235] = hn))
      : (hn = n[235]),
    hn
  );
}
function Sr(e) {
  return e === `error` || e === `saving` ? e : `idle`;
}
function Cr(e) {
  return e === `error` || e === `saving` ? e : `idle`;
}
function wr(e) {
  let { previousKey: t } = e;
  return t;
}
function Tr(e) {
  let { key: t } = e;
  return t;
}
function Er(e) {
  let { is_secret: t } = e;
  return !t;
}
function Dr(e) {
  let { key: t } = e;
  return t;
}
function Or(e) {
  let n = (0, Mr.c)(25),
    { accessState: r, projectId: a, siteTitle: o } = e,
    s = f(i),
    c = ee(),
    u,
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(l, {
        id: `appgenSettings.sharing.label`,
        defaultMessage: `Sharing`,
        description: `Label for site sharing settings`,
      })),
      (d = (0, $.jsx)(l, {
        id: `appgenSettings.sharing.description`,
        defaultMessage: `Who can view your site`,
        description: `Description for site sharing settings`,
      })),
      (n[0] = u),
      (n[1] = d))
    : ((u = n[0]), (d = n[1]));
  let p;
  n[2] === r
    ? (p = n[3])
    : ((p = (0, $.jsx)(rn, { "aria-hidden": !0, accessState: r, className: `icon-2xs shrink-0` })),
      (n[2] = r),
      (n[3] = p));
  let m;
  n[4] === r ? (m = n[5]) : ((m = sn(r)), (n[4] = r), (n[5] = m));
  let h;
  n[6] !== r || n[7] !== m
    ? ((h = (0, $.jsx)(l, { ...m, values: r })), (n[6] = r), (n[7] = m), (n[8] = h))
    : (h = n[8]);
  let g;
  n[9] !== p || n[10] !== h
    ? ((g = (0, $.jsxs)(`span`, {
        className: `flex items-center gap-1 text-sm text-secondary`,
        children: [p, h],
      })),
      (n[9] = p),
      (n[10] = h),
      (n[11] = g))
    : (g = n[11]);
  let _;
  n[12] === c
    ? (_ = n[13])
    : ((_ = c.formatMessage({
        id: `appgenSettings.sharing.buttonAriaLabel`,
        defaultMessage: `Manage sharing`,
        description: `Accessible label for managing site sharing`,
      })),
      (n[12] = c),
      (n[13] = _));
  let v;
  n[14] !== a || n[15] !== s || n[16] !== o
    ? ((v = () => cn(s, a, { initialProjectTitle: o, source: M.CODEX_SITES_SHARING_SOURCE_SETTINGS })),
      (n[14] = a),
      (n[15] = s),
      (n[16] = o),
      (n[17] = v))
    : (v = n[17]);
  let y;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(l, {
        id: `appgenSettings.sharing.button`,
        defaultMessage: `Manage`,
        description: `Button label for managing site sharing settings`,
      })),
      (n[18] = y))
    : (y = n[18]);
  let b;
  n[19] !== _ || n[20] !== v
    ? ((b = (0, $.jsx)(t, {
        "aria-label": _,
        color: `outlineSurface`,
        size: `toolbar`,
        onClick: v,
        children: y,
      })),
      (n[19] = _),
      (n[20] = v),
      (n[21] = b))
    : (b = n[21]);
  let x;
  return (
    n[22] !== b || n[23] !== g
      ? ((x = (0, $.jsx)(Ee, {
          labelWeight: `normal`,
          layout: `split`,
          label: u,
          description: d,
          control: (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2 max-sm:w-full max-sm:justify-between`,
            children: [g, b],
          }),
        })),
        (n[22] = b),
        (n[23] = g),
        (n[24] = x))
      : (x = n[24]),
    x
  );
}
function kr(e) {
  let n = (0, Mr.c)(51),
    {
      onClose: r,
      onDeleteStart: a,
      onDeleteError: o,
      onDeleted: s,
      projectId: c,
      siteSlug: u,
      siteTitle: d,
    } = e,
    p = f(i),
    m = Ie(Ht, c),
    h = ee(),
    [g, _] = (0, Nr.useState)(``),
    v;
  n[0] === d
    ? (v = n[1])
    : ((v = (0, $.jsx)(l, {
        id: `appgenSettings.deleteDialog.title`,
        defaultMessage: `Delete {siteTitle}?`,
        description: `Title for dialog confirming deletion of a site`,
        values: { siteTitle: d },
      })),
      (n[0] = d),
      (n[1] = v));
  let y = v,
    b = !m.isPending,
    x;
  n[2] !== m.isPending || n[3] !== r
    ? ((x = (e) => {
        !e && !m.isPending && r();
      }),
      (n[2] = m.isPending),
      (n[3] = r),
      (n[4] = x))
    : (x = n[4]);
  let S;
  n[5] !== g ||
  n[6] !== m ||
  n[7] !== h ||
  n[8] !== r ||
  n[9] !== o ||
  n[10] !== a ||
  n[11] !== s ||
  n[12] !== p ||
  n[13] !== u
    ? ((S = (e) => {
        (e.preventDefault(),
          gn(u, g) &&
            !m.isPending &&
            a() &&
            m.mutateAsync().then(
              () => {
                (p
                  .get(le)
                  .success(
                    h.formatMessage({
                      id: `appgenSettings.deleteDialog.success`,
                      defaultMessage: `Site deleted`,
                      description: `Success toast shown after deleting a site`,
                    }),
                  ),
                  r(),
                  s());
              },
              () => {
                (o(),
                  p
                    .get(le)
                    .danger(
                      h.formatMessage({
                        id: `appgenSettings.deleteDialog.error`,
                        defaultMessage: `Unable to delete site`,
                        description: `Error toast shown when deleting a site fails`,
                      }),
                      { errorAnalytics: { toastId: `sites_settings_delete_error` } },
                    ));
              },
            ));
      }),
      (n[5] = g),
      (n[6] = m),
      (n[7] = h),
      (n[8] = r),
      (n[9] = o),
      (n[10] = a),
      (n[11] = s),
      (n[12] = p),
      (n[13] = u),
      (n[14] = S))
    : (S = n[14]);
  let C;
  n[15] === y
    ? (C = n[16])
    : ((C = (0, $.jsx)(ne, { className: `contents`, children: y })), (n[15] = y), (n[16] = C));
  let w;
  n[17] === u
    ? (w = n[18])
    : ((w = (0, $.jsx)(ce, { className: `contents`, children: (0, $.jsx)(hn, { siteSlug: u }) })),
      (n[17] = u),
      (n[18] = w));
  let T;
  n[19] !== C || n[20] !== w
    ? ((T = (0, $.jsx)(`div`, {
        className: `flex w-full flex-col`,
        children: (0, $.jsx)(R, { title: C, titleClassName: `truncate pe-8`, subtitle: w }),
      })),
      (n[19] = C),
      (n[20] = w),
      (n[21] = T))
    : (T = n[21]);
  let E;
  n[22] !== g || n[23] !== m.isPending || n[24] !== u
    ? ((E = (0, $.jsx)(U, {
        children: (0, $.jsx)(vn, { siteSlug: u, confirmationSlug: g, onChange: _, pending: m.isPending }),
      })),
      (n[22] = g),
      (n[23] = m.isPending),
      (n[24] = u),
      (n[25] = E))
    : (E = n[25]);
  let D;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(l, {
        id: `appgenSettings.deleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete site confirmation dialog`,
      })),
      (n[26] = D))
    : (D = n[26]);
  let O;
  n[27] !== m.isPending || n[28] !== r
    ? ((O = (0, $.jsx)(t, {
        color: `ghost`,
        disabled: m.isPending,
        type: `button`,
        onClick: r,
        children: D,
      })),
      (n[27] = m.isPending),
      (n[28] = r),
      (n[29] = O))
    : (O = n[29]);
  let k;
  n[30] !== g || n[31] !== m.isPending || n[32] !== u
    ? ((k = !gn(u, g) || m.isPending), (n[30] = g), (n[31] = m.isPending), (n[32] = u), (n[33] = k))
    : (k = n[33]);
  let A;
  n[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(l, {
        id: `appgenSettings.deleteDialog.confirm`,
        defaultMessage: `Permanently delete`,
        description: `Confirm button label for delete site confirmation dialog`,
      })),
      (n[34] = A))
    : (A = n[34]);
  let j;
  n[35] !== m.isPending || n[36] !== k
    ? ((j = (0, $.jsx)(t, {
        color: `danger`,
        disabled: k,
        loading: m.isPending,
        type: `submit`,
        children: A,
      })),
      (n[35] = m.isPending),
      (n[36] = k),
      (n[37] = j))
    : (j = n[37]);
  let M;
  n[38] !== O || n[39] !== j
    ? ((M = (0, $.jsx)(U, { children: (0, $.jsxs)(q, { children: [O, j] }) })),
      (n[38] = O),
      (n[39] = j),
      (n[40] = M))
    : (M = n[40]);
  let N;
  n[41] !== M || n[42] !== S || n[43] !== T || n[44] !== E
    ? ((N = (0, $.jsxs)(G, { as: `form`, className: `gap-4 px-4 py-3`, onSubmit: S, children: [T, E, M] })),
      (n[41] = M),
      (n[42] = S),
      (n[43] = T),
      (n[44] = E),
      (n[45] = N))
    : (N = n[45]);
  let P;
  return (
    n[46] !== m.isPending || n[47] !== N || n[48] !== b || n[49] !== x
      ? ((P = (0, $.jsx)(W, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: m.isPending,
          showDialogClose: b,
          onOpenChange: x,
          children: N,
        })),
        (n[46] = m.isPending),
        (n[47] = N),
        (n[48] = b),
        (n[49] = x),
        (n[50] = P))
      : (P = n[50]),
    P
  );
}
function Ar(e) {
  let n = (0, Mr.c)(6),
    { onRetry: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(l, {
        id: `appgenSettings.error.retry`,
        defaultMessage: `Retry`,
        description: `Button to retry loading Site settings after a load failure`,
      })),
      (n[0] = i))
    : (i = n[0]);
  let a;
  n[1] === r
    ? (a = n[2])
    : ((a = (0, $.jsx)(t, { color: `outline`, onClick: r, children: i })), (n[1] = r), (n[2] = a));
  let o;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(l, {
        id: `appgenSettings.error.title`,
        defaultMessage: `Unable to load site settings`,
        description: `Error state title for the site settings page`,
      })),
      (n[3] = o))
    : (o = n[3]);
  let s;
  return (
    n[4] === a
      ? (s = n[5])
      : ((s = (0, $.jsx)(Le, { layout: `page`, actions: a, title: o })), (n[4] = a), (n[5] = s)),
    s
  );
}
function jr(e) {
  if (e instanceof ue)
    try {
      return ve({ detail: ve({ type: k() }) }).safeParse(JSON.parse(e.message)).data?.detail.type;
    } catch {
      return;
    }
}
var Mr, Nr, $, Pr, Fr, Ir, Lr;
function Rr() {
  return (Rr = e(() => {
    ((Mr = ke()),
      Ft(),
      E(),
      Fe(),
      F(),
      Te(),
      S(),
      (Nr = Pe()),
      V(),
      L(),
      o(),
      Ut(),
      Ce(),
      De(),
      z(),
      Gt(),
      Dt(),
      Ke(),
      Ve(),
      me(),
      at(),
      Ae(),
      dt(),
      He(),
      B(),
      p(),
      _t(),
      Oe(),
      wn(),
      on(),
      an(),
      Rn(),
      Kn(),
      Jt(),
      pt(),
      Wt(),
      Zt(),
      Xn(),
      en(),
      $t(),
      Qe(),
      Pt(),
      lr(),
      dr(),
      ln(),
      gr(),
      _n(),
      Y(),
      ($ = Me()),
      (Pr = `appgen-settings-site-title-error`),
      (Fr = 1e3),
      (Ir = 66e4),
      (Lr = r({
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
export { _r as n, Rr as r, yr as t };
//# sourceMappingURL=appgen-settings-page-6bd70fc39161.js.map
