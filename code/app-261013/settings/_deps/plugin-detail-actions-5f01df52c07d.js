const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialogs-8f6d49f39b6b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./es-b1d3b672b686.js",
      "./prop-types-1ebacf647ac7.js",
      "./permissions-a20c840b1cd8.js",
      "./api-49bbf2d5ef8a.js",
      "./dialog-messages-8f97c72ff067.js",
      "./plugin-enterprise-upgrade-dialog-3a060834765a.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  $v as r,
  AO as i,
  B4 as a,
  CO as o,
  Cot as s,
  Cxt as c,
  Fat as l,
  GD as u,
  ID as d,
  IDt as f,
  Iot as p,
  Ixt as m,
  JR as h,
  KD as g,
  Lot as _,
  ME as v,
  Mz as y,
  ND as b,
  NE as x,
  Nz as S,
  Pat as ee,
  Pxt as te,
  Qv as ne,
  TJ as re,
  TO as C,
  VDt as ie,
  Xot as w,
  YR as ae,
  Yot as oe,
  _B as se,
  _O as T,
  _U as ce,
  _wt as E,
  _xt as D,
  bx as O,
  cJ as le,
  cO as ue,
  cz as de,
  e3 as k,
  eZ as fe,
  fO as A,
  fPt as pe,
  gG as me,
  gO as he,
  gwt as j,
  hot as ge,
  hrt as _e,
  jDt as M,
  lO as ve,
  lV as ye,
  lot as N,
  mO as be,
  oO as P,
  pPt as xe,
  sO as F,
  sz as Se,
  t3 as I,
  tB as Ce,
  vO as L,
  vV as we,
  vrt as Te,
  vzt as R,
  wot as Ee,
  xMt as De,
  yx as Oe,
  yzt as ke,
  z4 as z,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as B,
  CBn as Ae,
  Fin as je,
  Fur as Me,
  G4n as Ne,
  Hin as Pe,
  J4n as Fe,
  JPn as Ie,
  OPn as Le,
  Ocr as Re,
  Pur as ze,
  QDr as V,
  Qrt as Be,
  SBn as Ve,
  Scr as He,
  TBn as H,
  Tl as Ue,
  ULn as U,
  WLn as We,
  XDr as W,
  XPn as Ge,
  aDr as G,
  eDr as K,
  fur as q,
  fzt as Ke,
  gKt as J,
  hGt as Y,
  hKt as qe,
  hPr as X,
  iDr as Je,
  iPr as Ye,
  kPn as Xe,
  lit as Ze,
  mGt as Qe,
  nDr as $e,
  pur as et,
  pzt as tt,
  sPr as nt,
  uBn as rt,
  wBn as it,
  yVn as at,
  zsr as ot,
} from "./app-initial-5851df3f6cb1.js";
import { i as st, t as ct } from "./queries-81f7f581f0b1.js";
import { a as lt, r as ut, t as dt } from "./permissions-a20c840b1cd8.js";
import { i as ft, r as pt } from "./plugin-origin-badge-1e1f880d2dac.js";
import { n as mt, t as ht } from "./profile-lock-17cb9817089d.js";
import { o as gt, r as _t, t as vt } from "./api-49bbf2d5ef8a.js";
import { r as yt, t as bt } from "./messages-4cbaa49d7ad9.js";
import { i as xt, r as St } from "./plugin-marketplace-context-c6ab695904bf.js";
function Ct(e) {
  let t = (0, Dt.c)(124),
    { pluginId: n, children: r, renderMenu: i, isOpen: a, deleteOnly: o, onDeleted: c } = e,
    l = a === void 0 || a,
    u = o !== void 0 && o,
    d = m(s),
    p = ie(),
    { accountId: h, userId: g } = et(),
    v;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = { preview: !1 }), (t[0] = v)) : (v = t[0]);
  let { data: y, isLoading: b, isError: x } = Pe(void 0, v),
    S = $e(`2911503418`),
    { client: te } = Je(),
    ne;
  t[1] !== y || t[2] !== S || t[3] !== te
    ? ((ne = lt({
        account: y,
        statsigWorkspaceId: te.getContext().user.customIDs?.workspace_id,
        authoringDisabled: S,
      })),
      (t[1] = y),
      (t[2] = S),
      (t[3] = te),
      (t[4] = ne))
    : (ne = t[4]);
  let re = ne,
    ae = $e(`521320455`),
    oe = $e(`2712711964`),
    T = $e(`973546965`),
    ce;
  t[5] !== n || t[6] !== T ? ((ce = T ? null : Et(n)), (t[5] = n), (t[6] = T), (t[7] = ce)) : (ce = t[7]);
  let E = ce,
    D = T || !u,
    O;
  t[8] !== h || t[9] !== n ? ((O = He(h, n)), (t[8] = h), (t[9] = n), (t[10] = O)) : (O = t[10]);
  let ue = h != null && !x && y?.id === h && D,
    de;
  t[11] !== O || t[12] !== ue
    ? ((de = { ...O, enabled: ue, select: wt, staleTime: ee.ONE_MINUTE }),
      (t[11] = O),
      (t[12] = ue),
      (t[13] = de))
    : (de = t[13]);
  let { data: k, isLoading: fe, isError: A, error: pe, refetch: me } = w(de),
    he;
  t[14] !== y ||
  t[15] !== h ||
  t[16] !== ae ||
  t[17] !== oe ||
  t[18] !== x ||
  t[19] !== A ||
  t[20] !== k ||
  t[21] !== T ||
  t[22] !== g
    ? ((he =
        k != null && !A && !x && y?.id === h
          ? ut({ plugin: k, account: y, userId: g, canCreate: ae, canReupload: oe, canDeletePersonal: T })
          : null),
      (t[14] = y),
      (t[15] = h),
      (t[16] = ae),
      (t[17] = oe),
      (t[18] = x),
      (t[19] = A),
      (t[20] = k),
      (t[21] = T),
      (t[22] = g),
      (t[23] = he))
    : (he = t[23]);
  let j = he,
    M;
  t[24] !== h || t[25] !== E
    ? ((M = [`plugins`, `delete-app`, h, E]), (t[24] = h), (t[25] = E), (t[26] = M))
    : (M = t[26]);
  let ve = h != null && !x && y?.id === h && E != null,
    N;
  t[27] !== h || t[28] !== E
    ? ((N = async (e) => {
        let { signal: t } = e;
        if (h == null || E == null) throw Error(`Plugin deletion requires an account and app`);
        try {
          return await Ye.safeGet(`/aip/connectors/{connector_id}`, {
            surface: `plugin_management`,
            parameters: { path: { connector_id: E }, query: { include_actions: !1 } },
            additionalHeaders: { ...ze(), "ChatGPT-Account-Id": h },
            expectedErrorStatuses: [403, 404],
            signal: t,
          });
        } catch (e) {
          let t = e;
          if (t instanceof _e && (t.status === 403 || t.status === 404)) return null;
          throw t;
        }
      }),
      (t[27] = h),
      (t[28] = E),
      (t[29] = N))
    : (N = t[29]);
  let be;
  t[30] !== M || t[31] !== ve || t[32] !== N
    ? ((be = { queryKey: M, enabled: ve, queryFn: N, staleTime: ee.ONE_MINUTE, retry: !1 }),
      (t[30] = M),
      (t[31] = ve),
      (t[32] = N),
      (t[33] = be))
    : (be = t[33]);
  let { data: P, isPending: xe, isError: F, refetch: Se } = w(be),
    I;
  t[34] !== y || t[35] !== h || t[36] !== P || t[37] !== x || t[38] !== F || t[39] !== g
    ? ((I = P != null && !x && !F && y?.id === h && dt({ connector: P, account: y, userId: g })),
      (t[34] = y),
      (t[35] = h),
      (t[36] = P),
      (t[37] = x),
      (t[38] = F),
      (t[39] = g),
      (t[40] = I))
    : (I = t[40]);
  let L = I,
    we;
  t[41] !== h || t[42] !== n
    ? ((we = [`plugins`, `archive-upload`, h, n]), (t[41] = h), (t[42] = n), (t[43] = we))
    : (we = t[43]);
  let Te = !u && j?.shouldCheckWorkspaceUpload === !0,
    R;
  t[44] !== h || t[45] !== n
    ? ((R = (e) => {
        let { signal: t } = e;
        if (h == null) throw Error(`Plugin management requires an account`);
        return vt(n, h, t);
      }),
      (t[44] = h),
      (t[45] = n),
      (t[46] = R))
    : (R = t[46]);
  let Ee;
  t[47] !== we || t[48] !== Te || t[49] !== R
    ? ((Ee = { queryKey: we, enabled: Te, queryFn: R, staleTime: ee.ONE_MINUTE }),
      (t[47] = we),
      (t[48] = Te),
      (t[49] = R),
      (t[50] = Ee))
    : (Ee = t[50]);
  let { data: De, isError: Oe, refetch: ke } = w(Ee),
    z;
  t[51] !== h || t[52] !== n
    ? ((z = () => {
        if (h == null) throw Error(`Plugin management requires an account`);
        return _t(n, h);
      }),
      (t[51] = h),
      (t[52] = n),
      (t[53] = z))
    : (z = t[53]);
  let B;
  t[54] !== p || t[55] !== d
    ? ((B = () =>
        d
          .get(ge)
          .danger(
            p.formatMessage({
              id: `plugins.management.downloadFailed`,
              defaultMessage: `Couldn't download plugin. Try again`,
              description: `Error when downloading a plugin archive fails`,
            }),
            { errorAnalytics: { toastId: `plugins.management.downloadFailed` } },
          )),
      (t[54] = p),
      (t[55] = d),
      (t[56] = B))
    : (B = t[56]);
  let Ae;
  t[57] !== z || t[58] !== B
    ? ((Ae = { mutationFn: z, onError: B }), (t[57] = z), (t[58] = B), (t[59] = Ae))
    : (Ae = t[59]);
  let { mutate: je, isPending: Me } = _(Ae),
    Ne = !u && k?.canonical_app_id == null && j?.canDelete,
    Ie = T ? j?.canDelete : Ne || L,
    Le = !u && re && (j?.canUploadPersonal || (j?.shouldCheckWorkspaceUpload && De)),
    Re = !u && j?.canDownload,
    V = !u && j?.canManageForWorkspace,
    Be = (D && fe) || (h != null && E != null && !x && (b || (y?.id === h && xe))),
    Ve;
  t[60] !== h ||
  t[61] !== E ||
  t[62] !== u ||
  t[63] !== pe ||
  t[64] !== x ||
  t[65] !== F ||
  t[66] !== A ||
  t[67] !== Oe ||
  t[68] !== D
    ? ((Ve =
        (D && A && !(pe instanceof _e && [403, 404].includes(pe.status))) ||
        (h != null && (D || E != null) && x) ||
        F ||
        (!u && Oe)),
      (t[60] = h),
      (t[61] = E),
      (t[62] = u),
      (t[63] = pe),
      (t[64] = x),
      (t[65] = F),
      (t[66] = A),
      (t[67] = Oe),
      (t[68] = D),
      (t[69] = Ve))
    : (Ve = t[69]);
  let H = Ve,
    Ue = Re || Le || Ie || V || (l && Be) || H,
    U;
  t[70] === r ? (U = t[71]) : ((U = (0, Z.jsx)(C.Group, { children: r })), (t[70] = r), (t[71] = U));
  let We;
  t[72] !== Re || t[73] !== je || t[74] !== Me
    ? ((We = Re
        ? (0, Z.jsx)(C.Item, {
            leftIcon: (0, Z.jsx)(Ce, {}),
            disabled: Me,
            onSelect: () => je(),
            children: (0, Z.jsx)(f, {
              id: `plugins.management.download`,
              defaultMessage: `Download plugin ZIP`,
              description: `Download a hosted plugin archive`,
            }),
          })
        : null),
      (t[72] = Re),
      (t[73] = je),
      (t[74] = Me),
      (t[75] = We))
    : (We = t[75]);
  let W;
  t[76] !== h || t[77] !== Le || t[78] !== n || t[79] !== k || t[80] !== d
    ? ((W = Le
        ? (0, Z.jsx)(C.Item, {
            leftIcon: (0, Z.jsx)(se, {}),
            onSelect: () => {
              h != null &&
                k != null &&
                Tt().then((e) => {
                  let { PluginUploadDialog: t } = e;
                  return Fe(d, t, { pluginId: n, accountId: h, onUpdated: () => st(d.queryClient) });
                });
            },
            children: (0, Z.jsx)(f, {
              id: `plugins.management.upload`,
              defaultMessage: `Upload new version`,
              description: `Upload a new archive to an existing plugin`,
            }),
          })
        : null),
      (t[76] = h),
      (t[77] = Le),
      (t[78] = n),
      (t[79] = k),
      (t[80] = d),
      (t[81] = W))
    : (W = t[81]);
  let Ge;
  t[82] !== h ||
  t[83] !== Ie ||
  t[84] !== L ||
  t[85] !== P ||
  t[86] !== c ||
  t[87] !== n ||
  t[88] !== k ||
  t[89] !== d ||
  t[90] !== T
    ? ((Ge = Ie
        ? (0, Z.jsx)(C.Item, {
            leftIcon: (0, Z.jsx)(le, {}),
            tone: `danger`,
            onSelect: () => {
              if (h == null) return;
              let e, t, r;
              if (T && k != null)
                ((e = { type: `plugin`, pluginId: n }),
                  (t = k.release.display_name),
                  (r = k.canonical_app_id == null ? `package` : `app`));
              else if (L && P != null)
                ((e = { type: `connector`, connectorId: P.id }), (t = P.name), (r = `app`));
              else if (k != null)
                ((e = { type: `workspace-plugin`, pluginId: n }),
                  (t = k.release.display_name),
                  (r = `package`));
              else return;
              Tt().then((n) => {
                let { PluginDeleteDialog: i } = n;
                return Fe(d, i, {
                  target: e,
                  name: t,
                  kind: r,
                  accountId: h,
                  onDeleted: async () => {
                    (await c?.(), await st(d.queryClient));
                  },
                });
              });
            },
            children: (0, Z.jsx)(f, {
              id: `plugins.management.delete`,
              defaultMessage: `Delete plugin`,
              description: `Permanently delete a hosted plugin`,
            }),
          })
        : null),
      (t[82] = h),
      (t[83] = Ie),
      (t[84] = L),
      (t[85] = P),
      (t[86] = c),
      (t[87] = n),
      (t[88] = k),
      (t[89] = d),
      (t[90] = T),
      (t[91] = Ge))
    : (Ge = t[91]);
  let G;
  t[92] !== We || t[93] !== W || t[94] !== Ge
    ? ((G = (0, Z.jsxs)(C.Group, { children: [We, W, Ge] })),
      (t[92] = We),
      (t[93] = W),
      (t[94] = Ge),
      (t[95] = G))
    : (G = t[95]);
  let K;
  t[96] !== V || t[97] !== n
    ? ((K = V
        ? (0, Z.jsx)(C.Item, {
            leftIcon: (0, Z.jsx)(ye, {}),
            href: `/admin/plugins/${encodeURIComponent(n)}`,
            children: (0, Z.jsx)(f, {
              id: `plugins.management.manageForWorkspace`,
              defaultMessage: `Manage for workspace`,
              description: `Open the workspace admin page for this plugin`,
            }),
          })
        : null),
      (t[96] = V),
      (t[97] = n),
      (t[98] = K))
    : (K = t[98]);
  let q;
  t[99] === K ? (q = t[100]) : ((q = (0, Z.jsx)(C.Group, { children: K })), (t[99] = K), (t[100] = q));
  let Ke;
  t[101] === Be
    ? (Ke = t[102])
    : ((Ke = Be
        ? (0, Z.jsx)(C.Item, {
            disabled: !0,
            children: (0, Z.jsx)(f, {
              id: `plugins.management.loading`,
              defaultMessage: `Loading controls…`,
              description: `Management permissions are loading in a plugin menu`,
            }),
          })
        : null),
      (t[101] = Be),
      (t[102] = Ke));
  let J;
  t[103] !== x ||
  t[104] !== F ||
  t[105] !== H ||
  t[106] !== A ||
  t[107] !== Oe ||
  t[108] !== D ||
  t[109] !== me ||
  t[110] !== Se ||
  t[111] !== ke ||
  t[112] !== d
    ? ((J = H
        ? (0, Z.jsx)(C.Item, {
            onSelect: (e) => {
              (e.preventDefault(),
                D && A && me(),
                x && d.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] }),
                Oe && ke(),
                F && Se());
            },
            children: (0, Z.jsx)(f, {
              id: `plugins.management.retry`,
              defaultMessage: `Couldn't load controls. Retry`,
              description: `Retry loading the plugin management permissions`,
            }),
          })
        : null),
      (t[103] = x),
      (t[104] = F),
      (t[105] = H),
      (t[106] = A),
      (t[107] = Oe),
      (t[108] = D),
      (t[109] = me),
      (t[110] = Se),
      (t[111] = ke),
      (t[112] = d),
      (t[113] = J))
    : (J = t[113]);
  let Y;
  t[114] !== U || t[115] !== G || t[116] !== q || t[117] !== Ke || t[118] !== J
    ? ((Y = (0, Z.jsxs)(Z.Fragment, { children: [U, G, q, Ke, J] })),
      (t[114] = U),
      (t[115] = G),
      (t[116] = q),
      (t[117] = Ke),
      (t[118] = J),
      (t[119] = Y))
    : (Y = t[119]);
  let qe = Y,
    X;
  return (
    t[120] !== Ue || t[121] !== qe || t[122] !== i
      ? ((X = i ? i(qe, Ue) : qe), (t[120] = Ue), (t[121] = qe), (t[122] = i), (t[123] = X))
      : (X = t[123]),
    X
  );
}
function wt(e) {
  let { plugin: t } = e;
  return t;
}
function Tt() {
  return pe(
    () => import(`./dialogs-8f6d49f39b6b.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    import.meta.url,
  );
}
function Et(e) {
  let t = /^plugin_(asdk_app_[A-Za-z0-9][A-Za-z0-9_-]*)$/.exec(e);
  return e.length <= 255 && t?.[0] === e ? t[1] : null;
}
var Dt, Z;
function Ot() {
  return (Ot = e(() => {
    ((Dt = R()),
      p(),
      oe(),
      te(),
      M(),
      Me(),
      q(),
      je(),
      i(),
      re(),
      Ne(),
      N(),
      Re(),
      Ee(),
      ct(),
      K(),
      l(),
      nt(),
      Te(),
      gt(),
      (Z = De()),
      xe());
  }))();
}
function kt(e) {
  let n = (0, jt.c)(25),
    { onCopyLink: r, onOpenChange: i, open: a, pluginName: o } = e,
    s = ie(),
    c;
  n[0] === s
    ? (c = n[1])
    : ((c = s.formatMessage({
        id: `plugins.detail.shareLink`,
        defaultMessage: `Copy link`,
        description: `Button label for copying a plugin detail share link`,
      })),
      (n[0] = s),
      (n[1] = c));
  let l = c,
    u;
  n[2] === o
    ? (u = n[3])
    : ((u = (0, Q.jsx)(T, {
        children: (0, Q.jsx)(f, {
          id: `plugins.detail.desktopHandoff.title`,
          defaultMessage: `Use {pluginName} on desktop`,
          description: `Title of an informational dialog shown on mobile web for a desktop-only plugin. pluginName is the plugin's display name.`,
          values: { pluginName: o },
        }),
      })),
      (n[2] = o),
      (n[3] = u));
  let d;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(he, {
        children: (0, Q.jsx)(f, {
          id: `plugins.detail.desktopHandoff.description`,
          defaultMessage: `Open this link on your computer to get started in the desktop app`,
          description: `Instructions in a mobile-web dialog for opening a desktop-only plugin link on a computer`,
        }),
      })),
      (n[4] = d))
    : (d = n[4]);
  let p;
  n[5] === u
    ? (p = n[6])
    : ((p = (0, Q.jsx)(ve, {
        children: (0, Q.jsx)(ue, { className: `select-none`, title: u, subtitle: d }),
      })),
      (n[5] = u),
      (n[6] = p));
  let m;
  n[7] === i ? (m = n[8]) : ((m = () => i(!1)), (n[7] = i), (n[8] = m));
  let h;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(f, {
        id: `plugins.detail.desktopHandoff.dismiss`,
        defaultMessage: `Got it`,
        description: `Button that dismisses the informational mobile-web dialog for a desktop-only plugin`,
      })),
      (n[9] = h))
    : (h = n[9]);
  let g;
  n[10] === m
    ? (g = n[11])
    : ((g = (0, Q.jsx)(t, { color: `secondary`, onClick: m, size: `medium`, children: h })),
      (n[10] = m),
      (n[11] = g));
  let _;
  n[12] !== l || n[13] !== r
    ? ((_ = (0, Q.jsx)(Oe, {
        ariaLabel: l,
        buttonText: l,
        onCopy: r,
        variant: `secondaryAction`,
        renderButton: At,
      })),
      (n[12] = l),
      (n[13] = r),
      (n[14] = _))
    : (_ = n[14]);
  let v;
  n[15] !== g || n[16] !== _
    ? ((v = (0, Q.jsx)(ve, { children: (0, Q.jsxs)(F, { expandSingleButton: !1, children: [g, _] }) })),
      (n[15] = g),
      (n[16] = _),
      (n[17] = v))
    : (v = n[17]);
  let y;
  n[18] !== p || n[19] !== v
    ? ((y = (0, Q.jsxs)(P, { children: [p, v] })), (n[18] = p), (n[19] = v), (n[20] = y))
    : (y = n[20]);
  let b;
  return (
    n[21] !== i || n[22] !== a || n[23] !== y
      ? ((b = (0, Q.jsx)(be, { open: a, onOpenChange: i, size: `narrow`, children: y })),
        (n[21] = i),
        (n[22] = a),
        (n[23] = y),
        (n[24] = b))
      : (b = n[24]),
    b
  );
}
function At(e) {
  return (0, Q.jsx)(t, { ...e, color: `primary`, size: `medium` });
}
var jt, Q;
function Mt() {
  return (Mt = e(() => {
    ((jt = R()), M(), I(), O(), L(), A(), (Q = De()));
  }))();
}
function Nt(e, t) {
  if (e == null || t == null) return null;
  if (!Ft.has(e) && t.some((e) => Pt.has(e)) && t.every((e) => Ft.has(e))) return `enterprise`;
  if (e === `free` || e === `go`) {
    if (t.includes(`plus`)) return `plus`;
    if (t.includes(`pro`)) return `pro`;
  }
  return null;
}
var Pt, Ft;
function It() {
  return (It = e(() => {
    ((Pt = new Set([
      `business`,
      `enterprise_cbp_usage_based`,
      `enterprise_cbp_automation`,
      `enterprise_cbp_trial`,
      `enterprise_cbp_view_only`,
      `hc`,
      `hc_consumption`,
      `finserv`,
      `law`,
      `ent26`,
      `enterprise`,
      `deprecated_enterprise`,
    ])),
      (Ft = new Set([...Pt, `education`, `edu_plus`, `edu_pro`, `edu`, `deprecated_edu`, `k12`, `quorum`])));
  }))();
}
function Lt(e) {
  let n = (0, Rt.c)(20),
    { plugin: r, fallback: i } = e,
    a = m(s),
    { accountId: o, userId: c } = et(),
    l;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { preview: !1 }), (n[0] = l)) : (l = n[0]);
  let { data: u, isLoading: d, isError: p } = Pe(void 0, l),
    h = G(),
    g = Y(),
    [_, v] = (0, zt.useState)(!1);
  if (c == null || u == null || u.id !== o || d || p) return i;
  let y;
  n[1] !== u.plan_type || n[2] !== r.eligiblePlanTypes
    ? ((y = Nt(u.plan_type, r.eligiblePlanTypes)),
      (n[1] = u.plan_type),
      (n[2] = r.eligiblePlanTypes),
      (n[3] = y))
    : (y = n[3]);
  let b = y;
  if (b == null) return i;
  if (b === `enterprise`) {
    let e;
    n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Bt.jsx)(t, {
          color: `primary`,
          size: `toolbar`,
          onClick: () => v(!0),
          children: (0, Bt.jsx)(f, {
            id: `plugins.detail.upgradeToInstall`,
            defaultMessage: `Upgrade to install`,
            description: `Primary action for a plugin available with an Enterprise plan. Opens the plugin-specific contact-sales dialog. Keep the button label short.`,
          }),
        })),
        (n[4] = e))
      : (e = n[4]);
    let i;
    n[5] !== _ || n[6] !== r
      ? ((i = _ ? (0, Bt.jsx)(Ht, { open: _, onOpenChange: v, plugin: r }) : null),
        (n[5] = _),
        (n[6] = r),
        (n[7] = i))
      : (i = n[7]);
    let a;
    return (
      n[8] === i
        ? (a = n[9])
        : ((a = (0, Bt.jsxs)(Bt.Fragment, { children: [e, i] })), (n[8] = i), (n[9] = a)),
      a
    );
  }
  if (!J(h, Vt)) return i;
  let x;
  n[10] !== u.plan_type || n[11] !== g || n[12] !== a || n[13] !== b
    ? ((x = (e) => {
        (V(a, H, {
          action: Ve.CHATGPT_SUBSCRIPTION_UPSELL_ACTION_ACTIVATED,
          entryPoint: it.CHATGPT_SUBSCRIPTION_UPSELL_ENTRY_POINT_PLUGIN_DETAILS,
          ctaTargetPlan:
            b === `plus`
              ? Ae.CHATGPT_SUBSCRIPTION_UPSELL_CTA_TARGET_PLAN_PLUS
              : Ae.CHATGPT_SUBSCRIPTION_UPSELL_CTA_TARGET_PLAN_PRO,
          productExperience: rt.CHATGPT_RATE_LIMIT_BANNER_PRODUCT_EXPERIENCE_CHAT,
        }),
          g({
            currentPlan: u.plan_type === `free` ? X.FREE : X.GO,
            event: e,
            source: `plugin_details`,
            chatGptContext: { openModalLocation: Vt, targetPlan: b, highlightPlan: !0 },
          }));
      }),
      (n[10] = u.plan_type),
      (n[11] = g),
      (n[12] = a),
      (n[13] = b),
      (n[14] = x))
    : (x = n[14]);
  let S;
  n[15] === b
    ? (S = n[16])
    : ((S =
        b === `plus`
          ? (0, Bt.jsx)(f, {
              id: `plugins.detail.upgradeToPlus`,
              defaultMessage: `Upgrade to Plus`,
              description: `Primary action on a plan-restricted plugin detail page for a Free or Go subscriber. Opens pricing for the Plus subscription, which can install this plugin. Plus is the plan name. Keep this button label short.`,
            })
          : (0, Bt.jsx)(f, {
              id: `plugins.detail.upgradeToPro`,
              defaultMessage: `Upgrade to Pro`,
              description: `Primary action on a plan-restricted plugin detail page for a Free or Go subscriber. Opens pricing for the Pro subscription when Plus cannot install this plugin. Pro is the plan name. Keep this button label short.`,
            })),
      (n[15] = b),
      (n[16] = S));
  let ee;
  return (
    n[17] !== x || n[18] !== S
      ? ((ee = (0, Bt.jsx)(t, { color: `upgrade`, size: `toolbar`, onClick: x, children: S })),
        (n[17] = x),
        (n[18] = S),
        (n[19] = ee))
      : (ee = n[19]),
    ee
  );
}
var Rt, zt, Bt, Vt, Ht;
function Ut() {
  return (Ut = e(() => {
    ((Rt = R()),
      at(),
      te(),
      (zt = ke()),
      M(),
      q(),
      je(),
      I(),
      z(),
      qe(),
      Qe(),
      W(),
      Ee(),
      K(),
      B(),
      It(),
      (Bt = De()),
      xe(),
      (Vt = `plugin_directory_paid_home`),
      (Ht = a(
        async () =>
          (
            await pe(
              async () => {
                let { PluginEnterpriseUpgradeDialog: e } = await import(
                  `./plugin-enterprise-upgrade-dialog-3a060834765a.js`
                );
                return { PluginEnterpriseUpgradeDialog: e };
              },
              __vite__mapDeps([11, 1, 2, 3, 4, 5]),
              import.meta.url,
            )
          ).PluginEnterpriseUpgradeDialog,
      )));
  }))();
}
function Wt(e) {
  let n = (0, qt.c)(162),
    {
      blockedReason: r,
      desktopHandoff: i,
      disabledReason: a,
      desktopOpenPluginId: s,
      editDisabledTooltip: l,
      planUpgradePlugin: d,
      hasMultipleConnectedAccounts: p,
      hasWorkspace: m,
      hostedPluginId: h,
      hostedManagementDeleteOnly: g,
      onHostedPluginDeleted: _,
      installPhase: b,
      incentiveTarget: x,
      installProgressPercent: S,
      isInstallBlockedLoading: ee,
      isInstallLocked: te,
      isDesktopOnly: re,
      isEnabled: w,
      isInstalled: oe,
      isInstalledByDefault: se,
      installPolicySource: T,
      isPreparingEdit: E,
      isUninstalling: D,
      isUpdatingEnabled: O,
      manageTo: le,
      openPluginTo: ue,
      setUpOnWebHref: de,
      onEdit: A,
      onEnable: pe,
      onInstall: he,
      onInstallIntent: j,
      onSetUpOnWeb: ge,
      onManage: _e,
      onOpenPlugin: M,
      onSettings: ve,
      onTryInChat: ye,
      onUninstall: N,
      pluginIcon: be,
      shareMenuItem: P,
    } = e,
    xe = p !== void 0 && p,
    F = m !== void 0 && m,
    I = re !== void 0 && re,
    Ce = E !== void 0 && E,
    L = ie(),
    Te = le == null ? t : k,
    R = de?.startsWith(`/`) ? de : void 0,
    Ee = c(le ?? `/plugins`),
    De = c(ue ?? `/plugins`),
    Oe;
  n[0] === s ? (Oe = n[1]) : ((Oe = s == null ? `/codex/open-app` : Be(s)), (n[0] = s), (n[1] = Oe));
  let ke = c(Oe),
    z = ae(),
    B = (0, Jt.useSyncExternalStore)(Yt, We, Xt),
    [Ae, je] = (0, Jt.useState)(!1),
    [Me, Ne] = (0, Jt.useState)(!1),
    Pe = r === `disabled-by-admin`,
    Fe = S != null,
    Ie = oe && !Fe,
    Re = Ie && N != null,
    ze = !Ie && r === `connector-unavailable`,
    V;
  if (D) {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(t, {
          "aria-busy": !0,
          color: `primary`,
          loading: !0,
          size: `toolbar`,
          children: (0, $.jsx)(f, {
            id: `plugins.detail.uninstalling`,
            defaultMessage: `Uninstalling`,
            description: `Primary action on the plugin detail page while uninstall is in progress`,
          }),
        })),
        (n[2] = e))
      : (e = n[2]),
      (V = e));
  } else if (Fe) {
    let e;
    n[3] !== S || n[4] !== z
      ? ((e = (0, $.jsx)(u, { percent: S, reducedMotion: z, size: 16, transitionDurationMs: 500 })),
        (n[3] = S),
        (n[4] = z),
        (n[5] = e))
      : (e = n[5]);
    let r;
    n[6] === b
      ? (r = n[7])
      : ((r =
          b === `installing`
            ? (0, $.jsx)(f, {
                id: `plugins.detail.addingToCodex`,
                defaultMessage: `Installing`,
                description: `Primary install action on the plugin detail page while installation is in progress`,
              })
            : (0, $.jsx)(f, {
                id: `plugins.detail.loading`,
                defaultMessage: `Loading`,
                description: `Primary install action on the plugin detail page while plugin setup is loading`,
              })),
        (n[6] = b),
        (n[7] = r));
    let i;
    (n[8] !== e || n[9] !== r
      ? ((i = (0, $.jsxs)(t, {
          className: `disabled:opacity-100`,
          color: `primary`,
          disabled: !0,
          size: `toolbar`,
          children: [e, r],
        })),
        (n[8] = e),
        (n[9] = r),
        (n[10] = i))
      : (i = n[10]),
      (V = i));
  } else if (a === `required_app_unavailable` && ge != null) {
    let e;
    n[11] !== de || n[12] !== R
      ? ((e = R == null ? { href: de } : { to: R }), (n[11] = de), (n[12] = R), (n[13] = e))
      : (e = n[13]);
    let t;
    n[14] === ge ? (t = n[15]) : ((t = (e) => Ue(e, ge)), (n[14] = ge), (n[15] = t));
    let r;
    n[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(f, {
          id: `plugins.detail.template.setUpOnWeb`,
          defaultMessage: `Connect`,
          description: `Open ChatGPT web to configure a missing app connection required by this plugin`,
        })),
        (n[16] = r))
      : (r = n[16]);
    let i;
    n[17] === R
      ? (i = n[18])
      : ((i =
          R == null
            ? (0, $.jsx)(Le, {
                className: `icon-xs`,
                href: `https://chatgpt.com`,
                openTarget: `external-browser`,
              })
            : null),
        (n[17] = R),
        (n[18] = i));
    let a;
    (n[19] !== e || n[20] !== t || n[21] !== i
      ? ((a = (0, $.jsxs)(k, { ...e, color: `primary`, size: `toolbar`, onClick: t, children: [r, i] })),
        (n[19] = e),
        (n[20] = t),
        (n[21] = i),
        (n[22] = a))
      : (a = n[22]),
      (V = a));
  } else if (Pe) {
    let e;
    n[23] !== a || n[24] !== L
      ? ((e = bt({
          disabledReason: a,
          fallback: L.formatMessage({
            id: `plugins.detail.disabledByAdminButton`,
            defaultMessage: `Disabled by admin`,
            description: `Disabled install action on a plugin's details page when workspace policy blocks the plugin or a required app. This short label does not imply an administrator explicitly disabled the plugin.`,
          }),
          intl: L,
        })),
        (n[23] = a),
        (n[24] = L),
        (n[25] = e))
      : (e = n[25]);
    let r = e,
      i = r;
    if (a === `required_app_unavailable`) {
      let e;
      (n[26] === F
        ? (e = n[27])
        : ((e = F
            ? (0, $.jsx)(f, {
                id: `plugins.detail.requiredAppUnavailableExplanation`,
                defaultMessage: `This plugin can’t be used because a required app is unavailable. Contact your workspace admin for access`,
                description: `Tooltip on the disabled action on a plugin's details page. Explains to an end user that a required app is unavailable and their workspace administrator can help with access. The reason does not prove an admin explicitly disabled the app. Plain text; no placeholders.`,
              })
            : (0, $.jsx)(f, {
                id: `plugins.detail.requiredAppUnavailablePersonalExplanation`,
                defaultMessage: `This plugin can’t be used because a required app is unavailable`,
                description: `Tooltip on a disabled plugin action for a personal account or while account information is loading. A required app is unavailable, but there is no confirmed workspace administrator to contact. Plain text; no placeholders.`,
              })),
          (n[26] = F),
          (n[27] = e)),
        (i = e));
    } else if (a === `disabled_by_admin` || a == null) {
      let e;
      (n[28] === F
        ? (e = n[29])
        : ((e = F
            ? (0, $.jsx)(f, {
                id: `plugins.detail.workspaceApprovalExplanation`,
                defaultMessage: `This plugin or a required app isn’t enabled for your workspace. Contact your admin to enable or approve it`,
                description: `Tooltip on the disabled action on a plugin's details page. Explains to an end user that workspace policy blocks the plugin or a required app, and asks them to contact their administrator. The service does not distinguish an explicit block from a plugin awaiting approval, so do not imply either specific cause. Plain text; no placeholders.`,
              })
            : (0, $.jsx)(f, {
                id: `plugins.detail.unavailableExplanation`,
                defaultMessage: `This plugin isn’t available to you`,
                description: `Tooltip on a disabled plugin action when the service provides no specific explanation and there is no confirmed workspace administrator to contact. Plain text for an end user; no placeholders.`,
              })),
          (n[28] = F),
          (n[29] = e)),
        (i = e));
    }
    let o;
    n[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(ht, { className: `icon-sm` })), (n[30] = o))
      : (o = n[30]);
    let s;
    n[31] === r
      ? (s = n[32])
      : ((s = (0, $.jsxs)(t, {
          "aria-hidden": `true`,
          color: `primary`,
          disabled: !0,
          size: `toolbar`,
          children: [o, r],
        })),
        (n[31] = r),
        (n[32] = s));
    let c;
    n[33] !== r || n[34] !== s
      ? ((c = (0, $.jsx)(`span`, {
          "aria-disabled": `true`,
          "aria-label": r,
          className: `inline-flex`,
          role: `button`,
          tabIndex: 0,
          children: s,
        })),
        (n[33] = r),
        (n[34] = s),
        (n[35] = c))
      : (c = n[35]);
    let l;
    (n[36] !== i || n[37] !== c
      ? ((l = (0, $.jsx)(Se, { tooltipContent: i, children: c })), (n[36] = i), (n[37] = c), (n[38] = l))
      : (l = n[38]),
      (V = l));
  } else if (I) {
    let e;
    if (B) {
      let t;
      (n[39] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(f, {
            id: `plugins.detail.useOnDesktop`,
            defaultMessage: `Use on desktop`,
            description: `Primary action for a desktop-only plugin on mobile web. Opens instructions for using the plugin on a computer.`,
          })),
          (n[39] = t))
        : (t = n[39]),
        (e = t));
    } else if (s == null) {
      let t;
      (n[40] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(f, {
            id: `plugins.detail.desktopOnly`,
            defaultMessage: `Desktop only`,
            description: `Disabled primary action on a plugin detail page in the web browser. This plugin requires the desktop app, even if already installed there. Short informational label for end users.`,
          })),
          (n[40] = t))
        : (t = n[40]),
        (e = t));
    } else {
      let t;
      (n[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(f, {
            id: `plugins.detail.openInDesktopApp`,
            defaultMessage: `Open in desktop app`,
            description: `Primary action on a plugin detail page in a web browser. Opens this desktop-only plugin in the desktop app, or offers a download if the app is not installed.`,
          })),
          (n[41] = t))
        : (t = n[41]),
        (e = t));
    }
    let r;
    (n[42] !== i || n[43] !== e || n[44] !== ke || n[45] !== s || n[46] !== B
      ? ((r = B
          ? (0, $.jsx)(t, {
              color: `secondary`,
              disabled: i == null,
              size: `toolbar`,
              onClick: () => je(!0),
              children: e,
            })
          : (0, $.jsx)(k, {
              color: `secondary`,
              disabled: s == null,
              href: s == null ? void 0 : ke,
              size: `toolbar`,
              onClick: (e) => {
                s != null &&
                  Ge({
                    disposition: `current-tab`,
                    event: e,
                    href: new URL(ke, window.location.origin).href,
                    initiator: `open_in_browser_bridge`,
                  });
              },
              children: e,
            })),
        (n[42] = i),
        (n[43] = e),
        (n[44] = ke),
        (n[45] = s),
        (n[46] = B),
        (n[47] = r))
      : (r = n[47]),
      (V = r));
  } else if (!oe) {
    let e = r != null || ee || te,
      i,
      a;
    n[48] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(y, { "aria-hidden": !1, asset: fe })),
        (a = (0, $.jsx)(f, {
          id: `plugins.detail.install`,
          defaultMessage: `Install plugin`,
          description: `Primary install action on the plugin detail page`,
        })),
        (n[48] = i),
        (n[49] = a))
      : ((i = n[48]), (a = n[49]));
    let o;
    (n[50] !== he || n[51] !== j || n[52] !== e
      ? ((o = (0, $.jsxs)(t, {
          color: `primary`,
          disabled: e,
          focusRing: `inset`,
          onFocus: j,
          onPointerEnter: j,
          onClick: he,
          size: `toolbar`,
          children: [i, a],
        })),
        (n[50] = he),
        (n[51] = j),
        (n[52] = e),
        (n[53] = o))
      : (o = n[53]),
      (V = o));
  } else if (w && M != null) {
    let e;
    n[54] === L
      ? (e = n[55])
      : ((e = L.formatMessage({
          id: `plugins.detail.tryPluginOptions`,
          defaultMessage: `More ways to try this plugin`,
          description: `Accessible label for the dropdown of ways to open or chat with an installed plugin`,
        })),
        (n[54] = L),
        (n[55] = e));
    let t = ue == null ? void 0 : De,
      r;
    n[56] !== M || n[57] !== ue
      ? ((r = ue == null ? void 0 : (e) => Ue(e, M)), (n[56] = M), (n[57] = ue), (n[58] = r))
      : (r = n[58]);
    let i = ue == null ? M : void 0,
      a;
    n[59] === be
      ? (a = n[60])
      : ((a = (0, $.jsx)(C.ItemIcon, { size: `base`, children: be })), (n[59] = be), (n[60] = a));
    let o;
    n[61] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(f, {
          id: `plugins.detail.openPlugin`,
          defaultMessage: `Open plugin`,
          description: `Action that opens an installed plugin's sidebar page`,
        })),
        (n[61] = o))
      : (o = n[61]);
    let s;
    n[62] !== a || n[63] !== t || n[64] !== r || n[65] !== i
      ? ((s = (0, $.jsxs)(C.Item, { href: t, onClick: r, onSelect: i, children: [a, o] })),
        (n[62] = a),
        (n[63] = t),
        (n[64] = r),
        (n[65] = i),
        (n[66] = s))
      : (s = n[66]);
    let c;
    n[67] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, $.jsx)(we, {})), (n[67] = c)) : (c = n[67]);
    let l;
    n[68] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, $.jsx)(f, {
          id: `plugins.detail.tryInChat`,
          defaultMessage: `Try in chat`,
          description: `Secondary action that starts a chat using an installed plugin`,
        })),
        (n[68] = l))
      : (l = n[68]);
    let u;
    n[69] === ye
      ? (u = n[70])
      : ((u = (0, $.jsx)(C.Item, { leftIcon: c, onSelect: ye, children: l })), (n[69] = ye), (n[70] = u));
    let d;
    n[71] !== s || n[72] !== u
      ? ((d = (0, $.jsxs)($.Fragment, { children: [s, u] })), (n[71] = s), (n[72] = u), (n[73] = d))
      : (d = n[73]);
    let p;
    n[74] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, $.jsx)(f, {
          id: `plugins.detail.openPlugin`,
          defaultMessage: `Open plugin`,
          description: `Action that opens an installed plugin's sidebar page`,
        })),
        (n[74] = p))
      : (p = n[74]);
    let m;
    (n[75] !== D || n[76] !== O || n[77] !== M || n[78] !== d || n[79] !== e
      ? ((m = (0, $.jsx)(v, {
          color: `primary`,
          disabled: D,
          dropdownAlign: `end`,
          dropdownContentWidth: `sm`,
          loading: O,
          onClick: M,
          secondaryAriaLabel: e,
          size: `toolbar`,
          dropdownContent: d,
          children: p,
        })),
        (n[75] = D),
        (n[76] = O),
        (n[77] = M),
        (n[78] = d),
        (n[79] = e),
        (n[80] = m))
      : (m = n[80]),
      (V = m));
  } else {
    let e = w ? ye : pe,
      r;
    n[81] !== w || n[82] !== O
      ? ((r = !O && w ? (0, $.jsx)(Ke, { className: `icon-xs` }) : null),
        (n[81] = w),
        (n[82] = O),
        (n[83] = r))
      : (r = n[83]);
    let i;
    n[84] === w
      ? (i = n[85])
      : ((i = w
          ? (0, $.jsxs)($.Fragment, {
              children: [
                null,
                (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(f, {
                    id: `plugins.detail.tryInCodex`,
                    defaultMessage: `Try now`,
                    description: `Try action on the plugin detail page`,
                  }),
                }),
              ],
            })
          : (0, $.jsx)(f, {
              id: `plugins.detail.enableInCodex`,
              defaultMessage: `Enable`,
              description: `Enable action on the plugin detail page`,
            })),
        (n[84] = w),
        (n[85] = i));
    let a;
    (n[86] !== D || n[87] !== O || n[88] !== e || n[89] !== r || n[90] !== i
      ? ((a = (0, $.jsxs)(t, {
          color: `primary`,
          disabled: D,
          focusRing: `inset`,
          loading: O,
          onClick: e,
          size: `toolbar`,
          children: [r, i],
        })),
        (n[86] = D),
        (n[87] = O),
        (n[88] = e),
        (n[89] = r),
        (n[90] = i),
        (n[91] = a))
      : (a = n[91]),
      (V = a));
  }
  if (h != null && d != null && Pe && a === `plan_not_eligible` && !oe && !Fe && !D && !I && !ee && !te) {
    let e;
    (n[92] !== d || n[93] !== V
      ? ((e = (0, $.jsx)(Lt, { plugin: d, fallback: V })), (n[92] = d), (n[93] = V), (n[94] = e))
      : (e = n[94]),
      (V = e));
  }
  let Ve = V;
  if (ze) {
    let e;
    n[95] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(f, {
          id: `plugins.install.connectorUnavailable`,
          defaultMessage: `App unavailable`,
          description: `Tooltip shown when plugin install is unavailable because the plugin's apps are not available in the current app directory`,
        })),
        (n[95] = e))
      : (e = n[95]);
    let t;
    (n[96] === V
      ? (t = n[97])
      : ((t = (0, $.jsx)(Se, { tooltipContent: e, children: V })), (n[96] = V), (n[97] = t)),
      (Ve = t));
  } else if (x != null && Ie && w) {
    let e = x.isConnectionReady && !D && !O,
      t;
    (n[98] !== x || n[99] !== V || n[100] !== e
      ? ((t = (0, $.jsx)(pt, { ...x, isConnectionReady: e, surface: `detail`, children: V })),
        (n[98] = x),
        (n[99] = V),
        (n[100] = e),
        (n[101] = t))
      : (t = n[101]),
      (Ve = t));
  }
  let He;
  n[102] !== l || n[103] !== Ce || n[104] !== A
    ? ((He =
        A == null
          ? null
          : (0, $.jsx)(C.Item, {
              disabled: Ce || l != null,
              focusableWhenDisabled: l != null,
              leftIcon: (0, $.jsx)(me, {}),
              tooltipText: l,
              onSelect: A,
              children: (0, $.jsx)(f, {
                id: `plugins.detail.edit`,
                defaultMessage: `Edit plugin`,
                description: `Open a Work or Chat draft to edit the selected migrated plugin`,
              }),
            })),
      (n[102] = l),
      (n[103] = Ce),
      (n[104] = A),
      (n[105] = He))
    : (He = n[105]);
  let H;
  n[106] === ve
    ? (H = n[107])
    : ((H =
        ve == null
          ? null
          : (0, $.jsx)(C.Item, {
              leftIcon: (0, $.jsx)(ce, {}),
              onSelect: ve,
              children: (0, $.jsx)(f, {
                id: `plugins.detail.settings`,
                defaultMessage: `Settings`,
                description: `Open the plugin's dedicated settings page`,
              }),
            })),
      (n[106] = ve),
      (n[107] = H));
  let U;
  n[108] !== xe ||
  n[109] !== T ||
  n[110] !== se ||
  n[111] !== D ||
  n[112] !== O ||
  n[113] !== N ||
  n[114] !== Re
    ? ((U =
        Re &&
        (0, $.jsx)(Gt, {
          disconnectsAllAccounts: xe,
          isInstalledByDefault: se,
          installPolicySource: T,
          isUninstalling: D,
          isUpdatingEnabled: O,
          onUninstall: () => {
            (Ne(!1), N());
          },
        })),
      (n[108] = xe),
      (n[109] = T),
      (n[110] = se),
      (n[111] = D),
      (n[112] = O),
      (n[113] = N),
      (n[114] = Re),
      (n[115] = U))
    : (U = n[115]);
  let W;
  n[116] !== P || n[117] !== He || n[118] !== H || n[119] !== U
    ? ((W = (0, $.jsxs)($.Fragment, { children: [He, P, H, U] })),
      (n[116] = P),
      (n[117] = He),
      (n[118] = H),
      (n[119] = U),
      (n[120] = W))
    : (W = n[120]);
  let G = W,
    K = Re || A != null || P != null || ve != null,
    q;
  n[121] !== K || n[122] !== L || n[123] !== Me || n[124] !== Ce
    ? ((q = (e, t) =>
        K || (t !== void 0 && t)
          ? (0, $.jsx)(o, {
              align: `end`,
              contentWidth: `sm`,
              open: Me,
              onOpenChange: Ne,
              onCloseAutoFocus: () => Ne(!1),
              triggerButton: (0, $.jsx)(ne, {
                pill: !0,
                size: `toolbar`,
                "aria-busy": Ce,
                loading: Ce,
                label: L.formatMessage({
                  id: `plugins.detail.moreActions`,
                  defaultMessage: `More actions`,
                  description: `Aria label for the plugin detail page overflow menu`,
                }),
              }),
              children: (0, $.jsxs)(`div`, {
                className: `group/plugin-menu`,
                children: [
                  e,
                  (0, $.jsxs)(C.Message, {
                    compact: !0,
                    className: `group-has-[[role=menuitem]]/plugin-menu:hidden`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `group-has-[[data-plugin-share-loading]]/plugin-menu:hidden`,
                        children: (0, $.jsx)(f, {
                          id: `plugins.detail.noAvailableActions`,
                          defaultMessage: `No available actions`,
                          description: `Empty state in a plugin's More actions menu when the current user has no available actions`,
                        }),
                      }),
                      (0, $.jsx)(`span`, {
                        className: `hidden group-has-[[data-plugin-share-loading]]/plugin-menu:inline`,
                        children: (0, $.jsx)(f, {
                          id: `plugins.management.loading`,
                          defaultMessage: `Loading controls…`,
                          description: `Management permissions are loading in a plugin menu`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : null),
      (n[121] = K),
      (n[122] = L),
      (n[123] = Me),
      (n[124] = Ce),
      (n[125] = q))
    : (q = n[125]);
  let J = q,
    Y;
  n[126] !== I || n[127] !== J || n[128] !== P
    ? ((Y = I && P != null ? J(P) : null), (n[126] = I), (n[127] = J), (n[128] = P), (n[129] = Y))
    : (Y = n[129]);
  let qe;
  n[130] !== K ||
  n[131] !== g ||
  n[132] !== h ||
  n[133] !== I ||
  n[134] !== Fe ||
  n[135] !== Me ||
  n[136] !== G ||
  n[137] !== _ ||
  n[138] !== J
    ? ((qe =
        !I &&
        (h != null && (K || !Fe)
          ? (0, $.jsx)(Ct, {
              pluginId: h,
              renderMenu: J,
              isOpen: Me,
              deleteOnly: g,
              onDeleted: _,
              children: G,
            })
          : J(G))),
      (n[130] = K),
      (n[131] = g),
      (n[132] = h),
      (n[133] = I),
      (n[134] = Fe),
      (n[135] = Me),
      (n[136] = G),
      (n[137] = _),
      (n[138] = J),
      (n[139] = qe))
    : (qe = n[139]);
  let X;
  n[140] !== Te || n[141] !== I || n[142] !== oe || n[143] !== Ee || n[144] !== le || n[145] !== _e
    ? ((X =
        !I && oe && _e != null
          ? (0, $.jsxs)(Te, {
              color: `secondary`,
              href: le == null ? void 0 : Ee,
              size: `toolbar`,
              onClick: (e) => Ue(e, _e),
              children: [
                (0, $.jsx)(ce, {}),
                (0, $.jsx)(f, {
                  id: `plugins.detail.manage`,
                  defaultMessage: `Manage`,
                  description: `Open this plugin in plugin settings`,
                }),
              ],
            })
          : null),
      (n[140] = Te),
      (n[141] = I),
      (n[142] = oe),
      (n[143] = Ee),
      (n[144] = le),
      (n[145] = _e),
      (n[146] = X))
    : (X = n[146]);
  let Je;
  n[147] !== V || n[148] !== z || n[149] !== Ve
    ? ((Je = (0, $.jsx)(Kt, { measurement: V, reducedMotion: z, children: Ve })),
      (n[147] = V),
      (n[148] = z),
      (n[149] = Ve),
      (n[150] = Je))
    : (Je = n[150]);
  let Ye;
  n[151] !== Y || n[152] !== qe || n[153] !== X || n[154] !== Je
    ? ((Ye = (0, $.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-end gap-2`,
        children: [Y, qe, X, Je],
      })),
      (n[151] = Y),
      (n[152] = qe),
      (n[153] = X),
      (n[154] = Je),
      (n[155] = Ye))
    : (Ye = n[155]);
  let Xe;
  n[156] !== i || n[157] !== Ae
    ? ((Xe =
        i == null
          ? null
          : (0, $.jsx)(kt, {
              onCopyLink: i.onCopyLink,
              onOpenChange: je,
              open: Ae,
              pluginName: i.pluginName,
            })),
      (n[156] = i),
      (n[157] = Ae),
      (n[158] = Xe))
    : (Xe = n[158]);
  let Ze;
  return (
    n[159] !== Ye || n[160] !== Xe
      ? ((Ze = (0, $.jsxs)($.Fragment, { children: [Ye, Xe] })), (n[159] = Ye), (n[160] = Xe), (n[161] = Ze))
      : (Ze = n[161]),
    Ze
  );
}
function Gt(e) {
  let t = (0, qt.c)(12),
    {
      disconnectsAllAccounts: n,
      isInstalledByDefault: r,
      installPolicySource: i,
      isUninstalling: a,
      isUpdatingEnabled: o,
      onUninstall: s,
    } = e,
    c = n !== void 0 && n,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, $.jsx)(le, {})), (t[0] = l)) : (l = t[0]);
  let u = o || a || r,
    d;
  t[1] !== c || t[2] !== r
    ? ((d =
        c && !r
          ? (0, $.jsx)(`span`, {
              className: `text-xs`,
              children: (0, $.jsx)(f, {
                id: `plugins.detail.uninstall.disconnectsAllAccounts`,
                defaultMessage: `Disconnects all accounts`,
                description: `Warning beneath the Uninstall action when a plugin app has multiple connected accounts: uninstalling disconnects every account connected to those apps`,
              }),
            })
          : void 0),
      (t[1] = c),
      (t[2] = r),
      (t[3] = d))
    : (d = t[3]);
  let p;
  t[4] !== i || t[5] !== r
    ? ((p = r
        ? (0, $.jsx)(St, { source: i })
        : (0, $.jsx)(f, {
            id: `plugins.detail.uninstall`,
            defaultMessage: `Uninstall`,
            description: `Uninstall action on the plugin detail page`,
          })),
      (t[4] = i),
      (t[5] = r),
      (t[6] = p))
    : (p = t[6]);
  let m;
  return (
    t[7] !== s || t[8] !== u || t[9] !== d || t[10] !== p
      ? ((m = (0, $.jsx)(C.Item, {
          leftIcon: l,
          disabled: u,
          onSelect: s,
          SubText: d,
          tone: `danger`,
          children: p,
        })),
        (t[7] = s),
        (t[8] = u),
        (t[9] = d),
        (t[10] = p),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
function Kt(e) {
  let t = (0, qt.c)(18),
    { children: n, measurement: r, reducedMotion: i } = e,
    [a, o] = d(),
    [s, c] = (0, Jt.useState)(!1),
    l;
  t[0] !== r || t[1] !== a
    ? ((l = (0, $.jsx)(`div`, {
        ref: a,
        className: `pointer-events-none invisible fixed top-0 left-0 min-w-max`,
        "aria-hidden": !0,
        inert: !0,
        children: r,
      })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u = o ?? `auto`,
    f;
  t[3] === u ? (f = t[4]) : ((f = { width: u }), (t[3] = u), (t[4] = f));
  let p = i || !s ? 0 : 0.18,
    m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = [0.77, 0, 0.175, 1]), (t[5] = m)) : (m = t[5]);
  let h;
  t[6] === p ? (h = t[7]) : ((h = { duration: p, ease: m }), (t[6] = p), (t[7] = h));
  let g;
  t[8] === o
    ? (g = t[9])
    : ((g = () => {
        o != null && c(!0);
      }),
      (t[8] = o),
      (t[9] = g));
  let _;
  t[10] !== n || t[11] !== f || t[12] !== h || t[13] !== g
    ? ((_ = (0, $.jsx)(E.div, {
        animate: f,
        className: `inline-flex shrink-0 justify-end overflow-hidden [&>button]:w-full [&>button]:min-w-0 [&>button]:shrink-0 [&>button]:justify-center [&>button]:overflow-hidden`,
        initial: !1,
        transition: h,
        onAnimationComplete: g,
        children: n,
      })),
      (t[10] = n),
      (t[11] = f),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== l || t[16] !== _
      ? ((v = (0, $.jsxs)($.Fragment, { children: [l, _] })), (t[15] = l), (t[16] = _), (t[17] = v))
      : (v = t[17]),
    v
  );
}
var qt, Jt, $, Yt, Xt;
function Zt() {
  return (Zt = e(() => {
    ((qt = R()),
      n(),
      U(),
      j(),
      (Jt = ke()),
      M(),
      D(),
      I(),
      x(),
      i(),
      Ie(),
      Xe(),
      S(),
      re(),
      r(),
      g(),
      de(),
      h(),
      tt(),
      mt(),
      b(),
      ft(),
      ot(),
      Ot(),
      Mt(),
      Ze(),
      yt(),
      xt(),
      Ut(),
      ($ = De()),
      (Yt = () => () => {}),
      (Xt = () => !1));
  }))();
}
export { Mt as a, kt as i, Kt as n, Zt as r, Wt as t };
//# sourceMappingURL=plugin-detail-actions-5f01df52c07d.js.map
