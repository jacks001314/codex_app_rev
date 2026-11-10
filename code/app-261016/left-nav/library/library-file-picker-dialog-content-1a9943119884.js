import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  Bst as i,
  CCt as a,
  CNt as o,
  Cj as s,
  FBt as c,
  HFt as l,
  HO as u,
  IO as d,
  Ij as ee,
  JO as f,
  KE as p,
  LNt as m,
  LO as te,
  Lst as h,
  MNt as g,
  Mst as _,
  NNt as v,
  OT as ne,
  PBt as re,
  QU as ie,
  Qst as ae,
  RO as oe,
  Rst as se,
  TY as y,
  VH as ce,
  WO as le,
  XOt as b,
  Y3 as x,
  YOt as S,
  Z3 as C,
  ZSt as w,
  _V as ue,
  aJ as de,
  cA as fe,
  ej as pe,
  ezt as me,
  hst as he,
  iCt as T,
  iG as ge,
  jst as E,
  kCt as _e,
  kLt as ve,
  kT as D,
  lA as O,
  mst as ye,
  nB as be,
  nCt as xe,
  nj as Se,
  okt as Ce,
  pwt as we,
  qO as Te,
  rB as Ee,
  rj as k,
  tkt as A,
  zst as De,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as Oe,
  Cjr as ke,
  Clt as Ae,
  Emr as je,
  Hcn as j,
  IYn as Me,
  JDt as Ne,
  Kht as Pe,
  LYn as Fe,
  MSt as Ie,
  NSt as M,
  Olr as Le,
  PYn as N,
  QDt as Re,
  Qht as ze,
  Rlr as Be,
  SLn as Ve,
  Slt as He,
  Ucn as Ue,
  Uht as We,
  XEn as Ge,
  YDt as Ke,
  YEn as qe,
  ZDt as Je,
  Zht as Ye,
  _Gn as Xe,
  _Xn as Ze,
  b2 as Qe,
  bGn as $e,
  cgt as et,
  d as tt,
  dgt as P,
  fGn as nt,
  fgt as rt,
  gXn as it,
  hXn as at,
  hut as ot,
  iRr as st,
  imr as ct,
  iut as lt,
  kLr as ut,
  lBr as dt,
  lgt as ft,
  mXn as F,
  mlr as pt,
  mut as mt,
  rmr as I,
  sgt as ht,
  tut as gt,
  tyr as _t,
  u as vt,
  uBr as yt,
  uKn as bt,
  uZn as xt,
  ugt as St,
  vLn as Ct,
  vXn as wt,
  wmr as Tt,
  x2 as L,
  xGn as Et,
  xjr as Dt,
  yGn as R,
} from "./app-initial-ad16eaadf81f.js";
import {
  Br as Ot,
  Hr as kt,
  Ms as At,
  Nr as jt,
  Pr as Mt,
  Vr as Nt,
  js as Pt,
  zr as Ft,
} from "./app-primary-3e00728c2a4c.js";
import { n as It, t as Lt } from "./library-providers-51a2cdb87f24.js";
import { i as Rt, n as zt, r as Bt, t as Vt } from "./library-account-selection-b68e5f302854.js";
import { n as Ht, r as Ut, t as Wt } from "./library-provider-filter-56e8962f2aff.js";
import { n as Gt, t as Kt } from "./library-file-thumbnail-29595ef9f2ca.js";
function qt({ provider: e, connectorLinks: t }) {
  return ft(e, t, !0).flatMap((t) =>
    t.accountKey == null ? [] : [{ ...t, provider: e, externalAccountKey: t.accountKey }],
  );
}
function Jt({
  availableProviders: e,
  baseSelectedProviders: t,
  accountFilterOptions: n,
  accountSelection: r,
}) {
  let i = new Set(),
    a = {};
  for (let o of e) {
    if (!z(o)) continue;
    let e = n.filter((e) => e.provider === o),
      s = r?.[o];
    if (e.length <= 1 && s == null) continue;
    i.add(o);
    let c = new Set(
        e
          .filter(({ externalAccountKey: e }) => t.includes(o) && (s == null || s.includes(e)))
          .map(({ id: e }) => e),
      ),
      { externalAccountKeys: l } = St(e, c);
    a[o] = l?.[o] ?? [];
  }
  let o = t.filter((e) => !z(e) || !i.has(e) || (a[e]?.length ?? 0) > 0),
    s = Rt(
      i.size > 0
        ? Object.fromEntries([...i].filter((e) => o.includes(e)).map((e) => [e, a[e] ?? []]))
        : void 0,
    ),
    c = e.flatMap((e) => (z(e) && i.has(e) ? n.filter((t) => t.provider === e) : [{ id: e, provider: e }])),
    l = c
      .filter((e) =>
        e.externalAccountKey == null
          ? o.includes(e.provider)
          : z(e.provider) && a[e.provider]?.includes(e.externalAccountKey),
      )
      .map((e) => e.id);
  return {
    availableProviderOptions: c,
    externalAccountKeys: s,
    externalAccountKeysKey: s == null ? void 0 : JSON.stringify(s),
    selectedExternalAccountKeys: a,
    selectedProviderOptionIds: l,
    selectedProviders: o,
    accountProviders: i,
  };
}
function z(e) {
  return Vt.some((t) => t === e);
}
function B() {
  return (B = e(() => {
    (Bt(), P());
  }))();
}
function Yt({
  availableProviders: e,
  pendingProviders: t,
  persistedProviders: n,
  pickerProviders: r,
  selection: i,
  isLoading: a,
}) {
  let o = e.filter((e) => e === `box` || e === `dropbox`),
    s = r != null && r.length > 0 && r.every((e) => t.includes(e)),
    c = ((a || o.length === 0) && !s ? n : (r ?? [...n, ...o])).filter(
      (t) => e.includes(t) || (a && V(t)) || s,
    ),
    l = c.length > 0 ? c : [`native`],
    u = [...l, ...e.filter((e) => !Zt(e))],
    d = i ?? u,
    ee = d.filter(Zt),
    f = ee.length > 0 ? ee : d,
    p = f.length > 0 && f.every((e) => t.includes(e)),
    m = i?.filter((n) => e.includes(n) || (p && t.includes(n))) ?? u;
  return { selectedProviders: m.length > 0 || i?.length === 0 ? m : l, shouldWaitForProviders: p };
}
function Xt(e, t, n) {
  if (!Zt(t)) return;
  let r = n.filter(Zt);
  r.length !== 0 &&
    we(e, (e) => {
      e.set(en, r);
      let n = r.filter(V);
      V(t) && n.length > 0 && e.set($t, n);
    });
}
function V(e) {
  return e === `native` || e === `google_drive`;
}
function Zt(e) {
  return V(e) || e === `box` || e === `dropbox`;
}
var Qt, $t, en;
function tn() {
  return (tn = e(() => {
    (w(),
      l(),
      r(),
      ut(),
      (Qt = [`native`, `google_drive`]),
      ($t = Oe(`library-picker-recent-providers`, Qt, {
        coerceStoredValue(e) {
          let t = ve(me()).safeParse(e),
            n = Qt.filter((e) => t.data?.includes(e));
          return n.length > 0 ? n : Qt;
        },
      })),
      (en = _e(ae, () => null)));
  }))();
}
function nn(e) {
  let t = (0, U.c)(8),
    n = Ce(),
    r;
  t[0] !== n || t[1] !== e.onCloseAutoFocus || t[2] !== e.onOpenChange || t[3] !== e.open
    ? ((r = (t) =>
        (0, G.jsx)(le, {
          contentProps: { onCloseAutoFocus: e.onCloseAutoFocus },
          dialogCloseLabel: n.formatMessage({
            id: `libraryPicker.close`,
            defaultMessage: `Close`,
            description: `Accessible label for closing the Add from library dialog`,
          }),
          open: e.open,
          size: `xwide`,
          variant: `chatgpt`,
          onOpenChange: e.onOpenChange,
          children: t,
        })),
      (t[0] = n),
      (t[1] = e.onCloseAutoFocus),
      (t[2] = e.onOpenChange),
      (t[3] = e.open),
      (t[4] = r))
    : (r = t[4]);
  let i;
  return (
    t[5] !== e || t[6] !== r
      ? ((i = (0, G.jsx)(H, { ...e, renderContainer: r })), (t[5] = e), (t[6] = r), (t[7] = i))
      : (i = t[7]),
    i
  );
}
function H(e) {
  let t = (0, U.c)(21),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ fill: i, renderContainer: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i !== void 0 && i,
    { accountId: o, userId: s } = ct(),
    c;
  t[4] !== o || t[5] !== s ? ((c = JSON.stringify([o, s])), (t[4] = o), (t[5] = s), (t[6] = c)) : (c = t[6]);
  let l = c,
    u;
  t[7] === l ? (u = t[8]) : ((u = { scopeKey: l, selection: null }), (t[7] = l), (t[8] = u));
  let [d, ee] = (0, W.useState)(u);
  d.scopeKey !== l && ee({ scopeKey: l, selection: null });
  let f = d.scopeKey === l ? d.selection : null,
    [p, m] = (0, W.useState)(`list`),
    [te, h] = (0, W.useState)(null),
    g;
  t[9] === l ? (g = t[10]) : ((g = (e) => ee({ scopeKey: l, selection: e })), (t[9] = l), (t[10] = g));
  let _;
  t[11] !== f || t[12] !== a || t[13] !== n || t[14] !== te || t[15] !== g || t[16] !== p
    ? ((_ = (0, G.jsx)(rn, {
        ...n,
        fill: a,
        accountSelection: f,
        providerSelection: te,
        viewMode: p,
        onAccountSelectionChange: g,
        onProviderSelectionChange: h,
        onViewModeChange: m,
      })),
      (t[11] = f),
      (t[12] = a),
      (t[13] = n),
      (t[14] = te),
      (t[15] = g),
      (t[16] = p),
      (t[17] = _))
    : (_ = t[17]);
  let v = _,
    ne;
  return (
    t[18] !== v || t[19] !== r ? ((ne = r?.(v) ?? v), (t[18] = v), (t[19] = r), (t[20] = ne)) : (ne = t[20]),
    ne
  );
}
function rn(e) {
  let t = (0, U.c)(135),
    {
      acceptsFile: r,
      accountSelection: i,
      allowMountedLibraryLiveReferences: a,
      analytics: o,
      attachmentTarget: s,
      categories: c,
      attachments: l,
      attachedFileIds: u,
      attachedLibraryFileIds: ee,
      attachedFileCount: f,
      conversationId: p,
      disabled: m,
      providerSelection: h,
      open: v,
      onAccountSelectionChange: re,
      onProviderSelectionChange: ie,
      onOpenChange: y,
      onAttachFiles: le,
      onAttachItems: b,
      sharedAttachmentState: S,
      skipChatAttachmentLimits: C,
      selectionMode: w,
      onUploadFiles: fe,
      onViewModeChange: me,
      viewMode: E,
      fill: _e,
    } = e,
    ve = a !== void 0 && a,
    D = s === void 0 ? `chat` : s,
    O = m !== void 0 && m,
    ye = C !== void 0 && C,
    we = w === void 0 ? `multiple` : w,
    Ee = n(ae),
    k = Ve(),
    Oe = xe(p === void 0 ? null : bt, p ?? null),
    Ae = xe(p === void 0 ? null : nt, p ?? null),
    je = T(ze),
    j = Ce(),
    Pe = se(),
    Ie = T(Ln),
    { accountId: M, userId: N } = ct(),
    He = ke(`3001618585`),
    We = ke(`3224986812`),
    Ge = ke(`2060455659`),
    Ke = ke(`2561885426`),
    Je = ke(`523386142`),
    Ye = ke(`3583034603`),
    Ze = T(rt),
    et = xe(yt, `283315982`),
    tt = T(ht),
    P = ke(`3941040396`),
    it = T(Le),
    at = T(Be),
    ot = xe(yt, `chatgpt-global-search-files-index-first`),
    lt = D === `chat` && it,
    ut = lt && (ot || at),
    dt = xe(ut ? yt : null, `1442582935`) ? `title_and_content` : void 0,
    ft = D === `chat` && (P || lt),
    pt = lt ? { includePages: !0, spaceSearchEnabled: ut, pageSearchTarget: dt, ownedFirst: ut } : {},
    I = v && D === `chat` && P && M != null && N != null,
    _t;
  t[0] !== M || t[1] !== N
    ? ((_t = Tt({ accountId: M, userId: N })), (t[0] = M), (t[1] = N), (t[2] = _t))
    : (_t = t[2]);
  let vt = _t,
    xt;
  t[3] !== vt || t[4] !== I
    ? ((xt = { ...vt, enabled: I, staleTime: De.FIVE_MINUTES }), (t[3] = vt), (t[4] = I), (t[5] = xt))
    : (xt = t[5]);
  let { data: St, error: Ct, isFetching: L } = _(xt),
    Et = I && !L && Ct == null ? St : void 0,
    Dt = (0, W.useId)(),
    R = Ne({
      connectorLinks: Et,
      googleDriveEnabled: He,
      boxEnabled: We,
      dropboxEnabled: Ge,
      sharePointEnabled: Je,
      oneDriveEnabled: Ye,
    }),
    kt;
  t[6] !== et || t[7] !== Ze || t[8] !== I
    ? ((kt = (e) => I && (e === `google_drive` ? et : Ze.has(e))),
      (t[6] = et),
      (t[7] = Ze),
      (t[8] = I),
      (t[9] = kt))
    : (kt = t[9]);
  let At = Vt.filter(kt),
    jt = JSON.stringify([
      M,
      N,
      zt({ accountId: M, accountUserId: N, connectorLinks: St }),
      R,
      At,
      [...tt].sort(),
      I,
      L,
      Ct == null,
    ]),
    Ft;
  t[10] === Et
    ? (Ft = t[11])
    : ((Ft = (e) => qt({ provider: e, connectorLinks: Et ?? [] })), (t[10] = Et), (t[11] = Ft));
  let It = At.flatMap(Ft),
    Lt = i == null ? null : Object.fromEntries(At.flatMap((e) => (i[e] == null ? [] : [[e, i[e]]]))),
    Rt = T($t),
    Bt = T(en),
    Ht = Yt({
      availableProviders: R,
      pendingProviders:
        I && L ? [...(He ? [`google_drive`] : []), ...(We ? [`box`] : []), ...(Ge ? [`dropbox`] : [])] : [],
      persistedProviders: He ? Rt : [`native`],
      pickerProviders: Bt,
      selection: h,
      isLoading: I && L,
    }),
    Ut = Object.keys(Lt ?? {}).length > 0,
    Gt;
  t[12] !== tt || t[13] !== Ut || t[14] !== h
    ? ((Gt = (e) => !tt.has(e) && (!Ut || h == null || h.includes(e))),
      (t[12] = tt),
      (t[13] = Ut),
      (t[14] = h),
      (t[15] = Gt))
    : (Gt = t[15]);
  let Kt = Ht.selectedProviders.filter(Gt),
    z = Jt({
      availableProviders: R,
      baseSelectedProviders: Kt.length === 0 && !Ut ? [`native`] : Kt,
      accountFilterOptions: It,
      accountSelection: Lt,
    }),
    B = z.selectedProviders,
    [V, Zt] = (0, W.useState)(``),
    Qt;
  t[16] === V ? (Qt = t[17]) : ((Qt = V.trim()), (t[16] = V), (t[17] = Qt));
  let tn = Ue(Qt, 300),
    nn;
  t[18] !== tn || t[19] !== V
    ? ((nn = V.trim() === `` ? `` : tn), (t[18] = tn), (t[19] = V), (t[20] = nn))
    : (nn = t[20]);
  let H = nn,
    rn = { ...z.externalAccountKeys };
  for (let e of Vt) e !== `google_drive` && Lt?.[e] == null && delete rn[e];
  let Dn = z.externalAccountKeys;
  H.length > 0 && (Dn = Object.keys(rn).length > 0 ? rn : void 0);
  let Hn = JSON.stringify([jt, B, z.externalAccountKeysKey]),
    Un = (e) => {
      let t = F(e.id);
      if (t == null || t === `unknown` || t === `onedrive`) return !0;
      let n = Dn?.[t];
      if (n == null) return !0;
      let r = Se(e.external_account?.key) ?? pe(e.id);
      return r != null && n.includes(r);
    },
    [Wn, K] = (0, W.useState)(Tn),
    [Gn, q] = (0, W.useState)(wn),
    J = D === `chat` && b != null && je && B.includes(`native`),
    Kn;
  t[21] === Ke ? (Kn = t[22]) : ((Kn = (e) => wt(e) && (e !== `dropbox` || Ke)), (t[21] = Ke), (t[22] = Kn));
  let qn = B.filter(Kn),
    Jn = D === `chat` && b != null && P && qn.length > 0,
    Yn;
  t[23] !== S?.fileIds || t[24] !== S?.folderIds
    ? ((Yn = (e) => (e.kind === `directory` ? S?.folderIds : S?.fileIds)?.has(e.id) === !0),
      (t[23] = S?.fileIds),
      (t[24] = S?.folderIds),
      (t[25] = Yn))
    : (Yn = t[25]);
  let Xn = Yn,
    Zn = (e) => {
      let t = F(e.id);
      return t == null ? J : Jn && Un(e) && e.kind === `directory` && wt(t) && qn.includes(t);
    },
    Y = [...Gn.values()].filter((e) => !Xn(e) && Zn(e)),
    [Qn, $n] = (0, W.useState)(Hn);
  Qn !== Hn && ($n(Hn), K(new Map()), q(new Map()));
  let er = (e) =>
      (c == null || c.includes(e.library_file_category)) &&
      (r == null || r(e)) &&
      !u?.has(e.id) &&
      !u?.has(e.file_id) &&
      Re(e, B) &&
      Un(e) &&
      (D === `chat` ||
        (e.state === `ready` &&
          (e.access_kind == null || e.access_kind === `owned`) &&
          F(e.file_id) == null)),
    X = Array.from(Wn.values()).filter(er),
    tr = X.length + Y.length,
    nr = X.filter(
      (e) =>
        !l?.some(
          (t) =>
            t.status !== `error` &&
            (t.libraryFileId === e.id ||
              (t.status === `ready` && (t.id === e.file_id || t.mountedLibraryFileId === e.id))),
        ),
    ),
    rr = Pt(Ee, l ?? [], nr, ve),
    ir = Y.filter(Cn).length,
    ar = nr.length + ir,
    or = f ?? l?.filter(Sn).length ?? 0,
    sr = Xe({
      currentAttachmentCount: or + (S?.sharedFileCount ?? 0),
      currentNativeAttachmentCount: l == null ? or : $e(l),
      maxUploads: Ie,
      metadata: Oe,
      nowMs: Ae ?? void 0,
      requestedFileCount: ar,
      requestedNativeFileCount: nr.length - rr.size,
    }),
    cr = sr.acceptedCount,
    Z = D === `chat` && !ye && ar > 0 && (sr.blocked || ar > cr),
    lr = new Set(X.map(xn)),
    ur;
  t[26] !== v || t[27] !== E
    ? ((ur = { open: v, viewMode: E }), (t[26] = v), (t[27] = E), (t[28] = ur))
    : (ur = t[28]);
  let [dr, fr] = (0, W.useState)(ur);
  dr.open !== v && fr({ open: v, viewMode: E });
  let pr = [`library-file-picker-files`, M, N, D, c, P, lt, ut, dt, Jn, H, B.join(`,`), qn.join(`,`), jt, Dn],
    {
      data: mr,
      fetchNextPage: hr,
      hasNextPage: gr,
      isError: _r,
      isFetching: vr,
      isFetchingNextPage: yr,
      refetch: br,
    } = he({
      queryKey: pr,
      enabled: v && M != null && N != null && !Ht.shouldWaitForProviders && !(I && L),
      initialPageParam: null,
      staleTime: D === `project` && H.length === 0 ? De.TEN_MINUTES : De.FIVE_SECONDS,
      queryFn: async (e) => {
        let { pageParam: t, signal: n } = e,
          r =
            Nt(Pe.getQueryCache().find({ queryKey: pr, exact: !0 })) == null
              ? o?.startLoad(t == null ? `refresh` : `append`, D === `chat` && P ? B : [`native`])
              : void 0;
        try {
          let e = H && ft ? (t?.queryId ?? crypto.randomUUID()) : void 0,
            i;
          if (D === `project` && c == null && H.length === 0)
            i = {
              items: (
                await st.safeGet(`/files/library/recents`, {
                  parameters: { query: { limit: Rn, providers: [`native`] } },
                  signal: n,
                })
              ).items.map(bn),
              cursor: null,
            };
          else if (Jn)
            i = await Me({
              query: H,
              queryId: e,
              cursor: t?.cursor ?? null,
              signal: n,
              limit: Rn,
              providers: B,
              folderProviders: qn,
              externalAccountKeys: Dn,
              ...pt,
            });
          else {
            let r = await Fe({
              categories: c,
              entrypoint: `composer`,
              query: H,
              queryId: e,
              cursor: t?.cursor.files ?? null,
              signal: n,
              limit: D === `project` ? 10 : Rn,
              providers: ft ? B : void 0,
              externalAccountKeys: Dn,
              ...pt,
            });
            i = {
              items: r.items.map(yn),
              isSearchResult: r.isSearchResult,
              partialResults: r.partialResults,
              searchQueryId: r.searchQueryId,
              cursor: r.cursor == null ? null : { files: r.cursor, folders: null },
            };
          }
          return (n.aborted || r?.({ success: !0, files: i.items.flatMap(vn) }), i);
        } catch (e) {
          let t = e;
          throw (n.aborted || r?.({ success: !1 }), t);
        }
      },
      getNextPageParam: _n,
    }),
    xr;
  t[29] === H
    ? (xr = t[30])
    : ((xr = (e) => {
        let { pageParam: t, signal: n } = e;
        return Mt(H, t, n);
      }),
      (t[29] = H),
      (t[30] = xr));
  let {
      data: Sr,
      fetchNextPage: Cr,
      hasNextPage: wr,
      isError: Tr,
      isFetching: Er,
      isFetchingNextPage: Dr,
      refetch: Or,
    } = he({
      queryKey: [`library-picker-shared`, M, N, H],
      enabled: v && J && M != null && N != null,
      initialPageParam: null,
      staleTime: De.FIVE_SECONDS,
      queryFn: xr,
      getNextPageParam: gn,
    }),
    kr = _r || (J && Tr),
    Ar = vr || (J && Er),
    jr = yr || (J && Dr),
    Mr = gr || (J && wr),
    Nr = async () => {
      await Promise.all([...(gr ? [hr()] : []), ...(J && wr ? [Cr()] : [])]);
    },
    Pr = async () => {
      await Promise.all([
        Ot(Pe, pr, o, D === `chat` && P ? B : [`native`], () => (_r && gr ? hr() : br())),
        ...(J ? [Tr && wr ? Cr() : Or()] : []),
      ]);
    },
    Fr = mr?.pages.flatMap(hn),
    Ir = Fr?.flatMap(mn),
    Lr = Ir?.filter(er),
    Rr = (0, In.default)(
      [
        ...(Fr?.flatMap((e) => (e.kind === `folder` && Zn(e.folder) ? [e.folder] : [])) ?? []),
        ...(J ? (Sr?.pages.flatMap(pn) ?? []) : []),
      ],
      `id`,
    ),
    zr = (Lr?.length ?? 0) + Rr.length,
    Br;
  t[31] === V ? (Br = t[32]) : ((Br = V.trim()), (t[31] = V), (t[32] = Br));
  let Q = Br !== H || (!_r && Lr == null) || (J && !Tr && Sr == null),
    Vr = !Q && kr && zr === 0,
    Hr = !Q && !Vr && !Mr && zr === 0,
    Ur = !Q && !Vr && (zr > 0 || Mr),
    Wr = H.length === 0 ? zn : Bn,
    Gr = (0, W.useEffectEvent)(() =>
      o?.shown(
        dr.viewMode,
        D === `chat` && P ? B : [`native`],
        D === `chat` && P && R.includes(`google_drive`),
      ),
    ),
    Kr;
  t[33] !== L || t[34] !== v || t[35] !== Gr || t[36] !== I
    ? ((Kr = () => {
        !v || (I && L) || Gr();
      }),
      (t[33] = L),
      (t[34] = v),
      (t[35] = Gr),
      (t[36] = I),
      (t[37] = Kr))
    : (Kr = t[37]);
  let qr;
  (t[38] !== o || t[39] !== L || t[40] !== v || t[41] !== I
    ? ((qr = [o, v, I, L]), (t[38] = o), (t[39] = L), (t[40] = v), (t[41] = I), (t[42] = qr))
    : (qr = t[42]),
    (0, W.useEffect)(Kr, qr));
  let Jr, Yr;
  (t[43] !== o || t[44] !== v
    ? ((Jr = () => {
        if (v) return () => o?.dismissed();
      }),
      (Yr = [o, v]),
      (t[43] = o),
      (t[44] = v),
      (t[45] = Jr),
      (t[46] = Yr))
    : ((Jr = t[45]), (Yr = t[46])),
    (0, W.useEffect)(Jr, Yr));
  let Xr = z.selectedProviderOptionIds.length < z.availableProviderOptions.length,
    Zr = mr?.pages[0]?.isSearchResult === !0,
    Qr;
  t[47] === mr?.pages ? (Qr = t[48]) : ((Qr = mr?.pages.some(fn)), (t[47] = mr?.pages), (t[48] = Qr));
  let $r = Qr === !0,
    ei = mr?.pages[0]?.searchQueryId,
    ti = (0, W.useEffectEvent)((e, t) => {
      o?.resultsShown({
        query: H,
        files: e,
        loadedFiles: t,
        sharedItems: Rr,
        hasProviderFilter: Xr,
        hasNextPage: Mr,
        isSearchResult: Zr,
        partialResults: $r,
        searchQueryId: ei,
      });
    });
  (0, W.useEffect)(() => {
    v && !Q && !Ar && !kr && Lr != null && Ir != null && ti(Lr, Ir);
  }, [o, H, Lr, Mr, Xr, J, kr, Ar, Zr, Ir, v, $r, ei, Sr, Q]);
  let ni;
  t[49] !== y || t[50] !== K || t[51] !== q
    ? ((ni = (e) => {
        (e || (Zt(``), K(new Map()), q(new Map())), y(e));
      }),
      (t[49] = y),
      (t[50] = K),
      (t[51] = q),
      (t[52] = ni))
    : (ni = t[52]);
  let ri = ni,
    ii = (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        !(O || Z || tr === 0) &&
          (Y.length > 0 && b?.(Y), X.length > 0 && le(X, o?.startAttachment(X.map(dn))), ri(!1)));
    },
    ai = (e, t) => {
      if (O) return;
      let n = R.filter((n) => (n === e ? t : B.includes(n))),
        r = n.length === 0 ? [`native`] : n;
      ((r.length !== B.length || r.some((e) => !B.includes(e))) && o?.providersChanged(e, r),
        K(new Map()),
        q(new Map()),
        ie(r),
        Xt(Ee, e, r));
    },
    oi = (e, t) => {
      if (O || tt.has(e.provider)) return;
      let n = It.find((t) => t.id === e.id);
      if (n == null) {
        ai(e.provider, t);
        return;
      }
      let { provider: r, externalAccountKey: a } = n,
        o = z.selectedExternalAccountKeys[r] ?? [],
        s = It.filter((e) => e.provider === r)
          .filter((e) => (e.externalAccountKey === a ? t : o.includes(e.externalAccountKey)))
          .map(un),
        c = s.length > 0;
      (c || !B.every((e) => e === r)) &&
        (re({ ...i, [r]: s }), K(new Map()), q(new Map()), B.includes(r) === c ? ie(B) : ai(r, c));
    },
    si;
  t[53] !== o ||
  t[54] !== ee ||
  t[55] !== or ||
  t[56] !== S?.fileIds ||
  t[57] !== S?.folderIds ||
  t[58] !== S?.sharedFileCount
    ? ((si = (e, t, n, r) => {
        o?.selectionChanged({
          item: r,
          changedItems: e,
          selectedCount: or + (S?.sharedFileCount ?? 0) + (S?.folderIds.size ?? 0) + t.length + n.length,
          libraryFileIds: [
            ...new Set([...(ee ?? []), ...(S?.fileIds ?? []), ...t.map(ln), ...n.filter(cn).map(sn)]),
          ],
          folderIds: [...new Set([...(S?.folderIds ?? []), ...n.filter(on).map(an)])],
        });
      }),
      (t[53] = o),
      (t[54] = ee),
      (t[55] = or),
      (t[56] = S?.fileIds),
      (t[57] = S?.folderIds),
      (t[58] = S?.sharedFileCount),
      (t[59] = si))
    : (si = t[59]);
  let ci = si,
    li = (e) => {
      if (O || !er(e)) return;
      let t = new Map(Wn);
      (t.has(e.id) ? t.delete(e.id) : (we === `single` && (t.clear(), q(new Map())), t.set(e.id, e)),
        K(t),
        ci([e], Array.from(t.values()).filter(er), we === `single` ? [] : Y, e));
    },
    $ = E === `list` ? `grid` : `list`,
    ui;
  t[60] !== j || t[61] !== $
    ? ((ui =
        $ === `grid`
          ? j.formatMessage({
              id: `libraryPicker.view.grid`,
              defaultMessage: `Grid view`,
              description: `Accessible label for showing files as a grid in the Add from library dialog`,
            })
          : j.formatMessage({
              id: `libraryPicker.view.list`,
              defaultMessage: `List view`,
              description: `Accessible label for showing files as a list in the Add from library dialog`,
            })),
      (t[60] = j),
      (t[61] = $),
      (t[62] = ui))
    : (ui = t[62]);
  let di = ui,
    fi = d,
    pi = !_e && `h-[560px]`,
    mi;
  t[63] === pi ? (mi = t[64]) : ((mi = g(`gap-4`, pi)), (t[63] = pi), (t[64] = mi));
  let hi = _e ? `full` : `tall`,
    gi;
  t[65] === k
    ? (gi = t[66])
    : ((gi = (0, G.jsx)(oe, {
        className: `px-5 pt-5`,
        title: (0, G.jsx)(Te, {
          children: k
            ? (0, G.jsx)(A, {
                id: `libraryPicker.title.space`,
                defaultMessage: `Add from Space`,
                description: `Short title for the dialog where a ChatGPT user selects one or more Space files to add to the current chat or project. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              })
            : (0, G.jsx)(A, {
                id: `libraryPicker.title`,
                defaultMessage: `Add from Library`,
                description: `Short title for the dialog where a ChatGPT user selects one or more Library files to add to the current chat or project`,
              }),
        }),
      })),
      (t[65] = k),
      (t[66] = gi));
  let _i;
  t[67] !== j || t[68] !== k
    ? ((_i = k
        ? j.formatMessage({
            id: `libraryPicker.search.ariaLabel.space`,
            defaultMessage: `Search Space`,
            description: `Accessible label for the search field in the dialog where a ChatGPT user selects Space files. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : j.formatMessage({
            id: `libraryPicker.search.ariaLabel`,
            defaultMessage: `Search Library`,
            description: `Accessible label for the search field in the dialog where a ChatGPT user selects Library files`,
          })),
      (t[67] = j),
      (t[68] = k),
      (t[69] = _i))
    : (_i = t[69]);
  let vi;
  t[70] !== j || t[71] !== k
    ? ((vi = k
        ? j.formatMessage({
            id: `libraryPicker.search.placeholder.space`,
            defaultMessage: `Search Space`,
            description: `Short placeholder in the search field used to filter Space files before adding them to a chat or project. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : j.formatMessage({
            id: `libraryPicker.search.placeholder`,
            defaultMessage: `Search Library`,
            description: `Short placeholder in the search field used to filter Library files before adding them to a chat or project`,
          })),
      (t[70] = j),
      (t[71] = k),
      (t[72] = vi))
    : (vi = t[72]);
  let yi;
  t[73] !== O || t[74] !== V || t[75] !== _i || t[76] !== vi
    ? ((yi = (0, G.jsx)(mt, {
        id: `library-file-picker-search`,
        className: `min-w-0 flex-1`,
        autoFocus: !0,
        inputRole: `searchbox`,
        isClearable: !1,
        label: _i,
        placeholder: vi,
        readOnly: O,
        searchQuery: V,
        variant: `toolbar`,
        onSearchQueryChange: Zt,
      })),
      (t[73] = O),
      (t[74] = V),
      (t[75] = _i),
      (t[76] = vi),
      (t[77] = yi))
    : (yi = t[77]);
  let bi;
  t[78] !== o || t[79] !== $ || t[80] !== me
    ? ((bi = () => {
        (me($), o?.layoutChanged($));
      }),
      (t[78] = o),
      (t[79] = $),
      (t[80] = me),
      (t[81] = bi))
    : (bi = t[81]);
  let xi;
  t[82] === $
    ? (xi = t[83])
    : ((xi = $ === `grid` ? (0, G.jsx)(de, {}) : (0, G.jsx)(ge, {})), (t[82] = $), (t[83] = xi));
  let Si;
  t[84] !== bi || t[85] !== xi || t[86] !== di
    ? ((Si = (0, G.jsx)(x, {
        "aria-label": di,
        color: `ghost`,
        radius: `full`,
        size: `inputIcon`,
        type: `button`,
        onClick: bi,
        children: xi,
      })),
      (t[84] = bi),
      (t[85] = xi),
      (t[86] = di),
      (t[87] = Si))
    : (Si = t[87]);
  let Ci;
  t[88] !== Si || t[89] !== di
    ? ((Ci = (0, G.jsx)(be, { tooltipContent: di, children: Si })), (t[88] = Si), (t[89] = di), (t[90] = Ci))
    : (Ci = t[90]);
  let wi =
      D !== `page` && R.length > 1
        ? (0, G.jsx)(Wt, {
            availableProviders: R,
            availableProviderOptions: z.availableProviderOptions,
            disabled: O,
            selectedProviders: B,
            selectedProviderOptionIds: z.selectedProviderOptionIds,
            onCheckedChange: ai,
            onOptionCheckedChange: oi,
            onOpen: o?.providerMenuShown,
          })
        : null,
    Ti;
  t[91] !== Ci || t[92] !== wi
    ? ((Ti = (0, G.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1.5`, children: [Ci, wi] })),
      (t[91] = Ci),
      (t[92] = wi),
      (t[93] = Ti))
    : (Ti = t[93]);
  let Ei;
  t[94] !== yi || t[95] !== Ti
    ? ((Ei = (0, G.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2 px-5`, children: [yi, Ti] })),
      (t[94] = yi),
      (t[95] = Ti),
      (t[96] = Ei))
    : (Ei = t[96]);
  let Di;
  t[97] !== o || t[98] !== O || t[99] !== fe
    ? ((Di =
        fe == null
          ? null
          : (0, G.jsx)(`div`, {
              className: `px-5`,
              children: (0, G.jsxs)(x, {
                color: `ghostSecondary`,
                disabled: O,
                onClick: () => {
                  (o?.upload(), fe());
                },
                type: `button`,
                children: [
                  (0, G.jsx)(ue, {}),
                  (0, G.jsx)(A, {
                    id: `libraryPicker.uploadFiles`,
                    defaultMessage: `Upload files`,
                    description: `Alternative action in the Library picker that opens the existing project file-upload dialog and closes the Library picker`,
                  }),
                ],
              }),
            })),
      (t[97] = o),
      (t[98] = O),
      (t[99] = fe),
      (t[100] = Di))
    : (Di = t[100]);
  let Oi =
      E === `grid`
        ? `grid min-h-full grid-cols-1 gap-3 py-2 sm:grid-cols-2 lg:grid-cols-3`
        : `flex min-h-full flex-col gap-0.5 py-2`,
    ki = Q
      ? (0, G.jsx)(En, {
          count: Wr,
          loadingLabel: (0, G.jsx)(A, {
            id: `libraryPicker.loading`,
            defaultMessage: `Loading recent files…`,
            description: `Screen-reader-only status announced in the Add from library dialog while recent Library files or search results are loading. The audience is an end user using assistive technology. Keep this as a short, neutral status with no placeholders or formatting.`,
          }),
          viewMode: E,
        })
      : null,
    Ai = Vr
      ? (0, G.jsx)(qe, {
          title: k
            ? (0, G.jsx)(A, {
                id: `libraryPicker.error.title.space`,
                defaultMessage: `Unable to load files`,
                description: `Short error-state heading shown to an end user when the Add from space dialog cannot load any files. Keep the tone neutral and concise.`,
              })
            : (0, G.jsx)(A, {
                id: `libraryPicker.error.title`,
                defaultMessage: `Unable to load Library files`,
                description: `Short error-state heading shown to an end user when the Add from library dialog cannot load any files. Keep the tone neutral and concise.`,
              }),
          description: (0, G.jsx)(A, {
            id: `libraryPicker.error.description`,
            defaultMessage: `Try again in a moment`,
            description: `Brief recovery guidance shown below the error heading when the Add from library dialog cannot load files. It reassures the end user that retrying shortly may work.`,
          }),
          actions: (0, G.jsx)(x, {
            color: `outline`,
            onClick: () => {
              Pr();
            },
            children: (0, G.jsx)(A, {
              id: `libraryPicker.error.retry`,
              defaultMessage: `Retry`,
              description: `Short button label in the Add from library error state. Activating it retries loading Library files for the end user.`,
            }),
          }),
        })
      : null,
    ji;
  t[101] !== H.length || t[102] !== Hr
    ? ((ji = Hr
        ? (0, G.jsx)(`div`, {
            className: `col-span-full flex min-h-60 flex-1 items-center justify-center px-0 py-6 text-sm text-tertiary`,
            children:
              H.length > 0
                ? (0, G.jsx)(A, {
                    id: `libraryPicker.empty.searchTitle`,
                    defaultMessage: `No matching files`,
                    description: `Concise empty-state message shown to an end user when a search in the Add from library dialog returns no matching files.`,
                  })
                : (0, G.jsx)(A, {
                    id: `libraryPicker.empty.title`,
                    defaultMessage: `No recent files yet`,
                    description: `Concise empty-state message shown to an end user when the Add from library dialog has no recent files to display.`,
                  }),
          })
        : null),
      (t[101] = H.length),
      (t[102] = Hr),
      (t[103] = ji))
    : (ji = t[103]);
  let Mi = Ur
      ? (0, G.jsxs)(G.Fragment, {
          children: [
            Rr.map((e, t) => {
              let n = Gn.has(e.id),
                r = Nn(e, Et),
                i = e.kind === `directory` ? e.name : Pn(e, j),
                a = Fn(j, i, F(e.id), r),
                o =
                  O ||
                  Xn(e) ||
                  (!n &&
                    Y.filter((t) => t.kind === e.kind).length >=
                      10 - (e.kind === `directory` ? (S?.folderIds.size ?? 0) : (S?.sharedFileCount ?? 0))),
                s = () => {
                  if (o) return;
                  let t = new Map(Gn);
                  (t.has(e.id)
                    ? t.delete(e.id)
                    : (we === `single` && (t.clear(), K(new Map())), t.set(e.id, e)),
                    q(t),
                    ci(
                      [e],
                      we === `single` ? [] : X,
                      [...t.values()].filter((e) => !Xn(e) && Zn(e)),
                      e,
                    ));
                };
              return E === `grid`
                ? (0, G.jsx)(
                    An,
                    { accessibleName: a, accountLabel: r, disabled: o, file: e, selected: n, onToggle: s },
                    e.id,
                  )
                : (0, G.jsx)(
                    gt,
                    {
                      ariaCurrent: n || void 0,
                      ariaDescribedBy: `${Dt}-item-${t}`,
                      ariaLabel: a,
                      compactSecondLine: !0,
                      density: `row`,
                      icon:
                        e.kind === `directory` ? (0, G.jsx)(kn, { folder: e }) : (0, G.jsx)(On, { file: e }),
                      isDisabled: o,
                      isSelected: n,
                      rightText: n ? (0, G.jsx)(ce, {}) : null,
                      rightTextPosition: `center`,
                      secondLine:
                        e.kind === `directory`
                          ? (0, G.jsx)(jn, { id: `${Dt}-item-${t}`, accountLabel: r, folder: e })
                          : (0, G.jsx)(Mn, { id: `${Dt}-item-${t}`, accountLabel: r, file: e }),
                      title: i,
                      onSelect: s,
                    },
                    e.id,
                  );
            }),
            Lr?.map((e, t) => {
              let n = lr.has(e.id),
                r = Nn(e, Et),
                i = Pn(e, j),
                a = Fn(j, i, F(e.id), r);
              return E === `grid`
                ? (0, G.jsx)(
                    An,
                    {
                      accessibleName: a,
                      accountLabel: r,
                      disabled: O,
                      file: e,
                      selected: n,
                      onToggle: () => li(e),
                    },
                    e.id,
                  )
                : (0, G.jsx)(
                    gt,
                    {
                      ariaCurrent: n || void 0,
                      ariaDescribedBy: `${Dt}-file-${t}`,
                      ariaLabel: a,
                      compactSecondLine: !0,
                      density: `row`,
                      hasInteractiveContent: !0,
                      icon: (0, G.jsx)(On, { file: e }),
                      isDisabled: O,
                      isSelected: n,
                      rightText: (0, G.jsx)(`span`, {
                        className: g(
                          `relative flex size-5 shrink-0 items-center justify-center`,
                          !n && `opacity-0`,
                          !n && !O && `group-hover:opacity-100 group-focus-within:opacity-100`,
                        ),
                        children: n
                          ? (0, G.jsx)(ne, {
                              className: `pointer-events-auto`,
                              "aria-label": j.formatMessage(Vn.selectFile, { fileDescription: a }),
                              checked: !0,
                              disabled: O,
                              variant: `overlay`,
                              onCheckedChange: () => li(e),
                            })
                          : (0, G.jsx)(`span`, {
                              "aria-hidden": !0,
                              className: `size-5 rounded-full ring-1 ring-border ring-inset`,
                            }),
                      }),
                      rightTextPosition: `center`,
                      secondLine: (0, G.jsx)(Mn, { id: `${Dt}-file-${t}`, accountLabel: r, file: e }),
                      title: i,
                      onSelect: () => li(e),
                    },
                    e.id,
                  );
            }),
            kr && zr > 0
              ? (0, G.jsxs)(`div`, {
                  className: `col-span-full flex items-center justify-center gap-2 p-3 text-sm text-chart-red`,
                  children: [
                    (0, G.jsx)(A, {
                      id: `libraryPicker.inlineError`,
                      defaultMessage: `Some results may be stale`,
                      description: `Short inline warning shown to an end user when a later page of results fails to load in the Add from library dialog, while already loaded files remain visible.`,
                    }),
                    (0, G.jsx)(x, {
                      color: `outline`,
                      disabled: jr,
                      size: `toolbar`,
                      onClick: () => {
                        Pr();
                      },
                      children: (0, G.jsx)(A, {
                        id: `libraryPicker.inlineErrorRetry`,
                        defaultMessage: `Retry`,
                        description: `Short button label beside the pagination warning in the Add from library dialog. Activating it retries loading more file results.`,
                      }),
                    }),
                  ],
                })
              : null,
            (0, G.jsx)(Qe, {
              hasNextPage: Mr && !kr,
              isFetchingNextPage: jr,
              onLoadNextPage: () => {
                Nr();
              },
            }),
          ],
        })
      : null,
    Ni;
  t[104] !== Oi || t[105] !== ki || t[106] !== Ai || t[107] !== ji || t[108] !== Mi
    ? ((Ni = (0, G.jsxs)(`div`, { className: Oi, children: [ki, Ai, ji, Mi] })),
      (t[104] = Oi),
      (t[105] = ki),
      (t[106] = Ai),
      (t[107] = ji),
      (t[108] = Mi),
      (t[109] = Ni))
    : (Ni = t[109]);
  let Pi;
  t[110] !== Q || t[111] !== Ni
    ? ((Pi = (0, G.jsx)(`div`, {
        className: `flex min-h-0 flex-1 flex-col`,
        children: (0, G.jsx)(`div`, {
          "aria-busy": Q,
          className: `min-h-0 flex-1 overflow-y-auto px-5`,
          children: Ni,
        }),
      })),
      (t[110] = Q),
      (t[111] = Ni),
      (t[112] = Pi))
    : (Pi = t[112]);
  let Fi;
  t[113] !== D ||
  t[114] !== O ||
  t[115] !== j ||
  t[116] !== Z ||
  t[117] !== cr ||
  t[118] !== ci ||
  t[119] !== tr ||
  t[120] !== X ||
  t[121] !== Y ||
  t[122] !== K ||
  t[123] !== q
    ? ((Fi =
        tr > 0
          ? (0, G.jsxs)(te, {
              className: `px-5 pb-5`,
              expandSingleButton: !1,
              children: [
                (0, G.jsx)(`span`, {
                  "aria-live": `polite`,
                  className: `me-auto text-sm text-secondary`,
                  children: (0, G.jsx)(A, {
                    id: `libraryPicker.selectedCount`,
                    defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                    description: `Compact status in the Add from library dialog footer showing how many files the end user selected. {count} is the integer number of selected Library files and controls pluralization.`,
                    values: { count: tr },
                  }),
                }),
                (0, G.jsx)(x, {
                  color: `ghost`,
                  type: `button`,
                  onClick: () => {
                    (ci([...X, ...Y], [], []), K(new Map()), q(new Map()));
                  },
                  children: (0, G.jsx)(A, {
                    id: `libraryPicker.cancelSelection`,
                    defaultMessage: `Cancel`,
                    description: `Secondary button label in the Add from library dialog footer. Activating it clears every selected file without closing the dialog.`,
                  }),
                }),
                (0, G.jsx)(be, {
                  tooltipContent: Z ? (0, G.jsx)(A, { ...Vn.attachmentLimit, values: { max: cr } }) : void 0,
                  children: (0, G.jsx)(`span`, {
                    role: Z ? `button` : void 0,
                    "aria-disabled": Z || void 0,
                    tabIndex: Z ? 0 : void 0,
                    "aria-label": Z ? j.formatMessage(Vn.attachmentLimit, { max: cr }) : void 0,
                    children: (0, G.jsxs)(x, {
                      "aria-hidden": Z || void 0,
                      color: `primary`,
                      size: `medium`,
                      disabled: O || Z,
                      type: `submit`,
                      children: [
                        D === `page`
                          ? (0, G.jsx)(A, {
                              id: `libraryPicker.addToPage`,
                              defaultMessage: `Add to page`,
                              description: `Primary button label in the Library picker for adding the selected file to the current Page`,
                            })
                          : null,
                        D === `project`
                          ? (0, G.jsx)(A, {
                              id: `libraryPicker.addToProject`,
                              defaultMessage: `Add to project`,
                              description: `Primary button label in the Add from library dialog footer. Activating it adds all selected Library files as sources in the current ChatGPT project.`,
                            })
                          : null,
                        D === `chat`
                          ? (0, G.jsx)(A, {
                              id: `libraryPicker.addToChat`,
                              defaultMessage: `Add to chat`,
                              description: `Primary button label in the Add from library dialog footer. Activating it attaches all selected Library files to the current ChatGPT conversation.`,
                            })
                          : null,
                      ],
                    }),
                  }),
                }),
              ],
            })
          : null),
      (t[113] = D),
      (t[114] = O),
      (t[115] = j),
      (t[116] = Z),
      (t[117] = cr),
      (t[118] = ci),
      (t[119] = tr),
      (t[120] = X),
      (t[121] = Y),
      (t[122] = K),
      (t[123] = q),
      (t[124] = Fi))
    : (Fi = t[124]);
  let Ii;
  return (
    t[125] !== fi ||
    t[126] !== ii ||
    t[127] !== mi ||
    t[128] !== hi ||
    t[129] !== gi ||
    t[130] !== Ei ||
    t[131] !== Di ||
    t[132] !== Pi ||
    t[133] !== Fi
      ? ((Ii = (0, G.jsxs)(fi, {
          as: `form`,
          className: mi,
          size: hi,
          variant: `chatgpt`,
          onSubmit: ii,
          children: [gi, Ei, Di, Pi, Fi],
        })),
        (t[125] = fi),
        (t[126] = ii),
        (t[127] = mi),
        (t[128] = hi),
        (t[129] = gi),
        (t[130] = Ei),
        (t[131] = Di),
        (t[132] = Pi),
        (t[133] = Fi),
        (t[134] = Ii))
      : (Ii = t[134]),
    Ii
  );
}
function an(e) {
  return e.id;
}
function on(e) {
  return e.kind === `directory`;
}
function sn(e) {
  return e.id;
}
function cn(e) {
  return e.kind === `file`;
}
function ln(e) {
  return e.id;
}
function un(e) {
  return e.externalAccountKey;
}
function dn(e) {
  return e.id;
}
function fn(e) {
  return e.partialResults === !0;
}
function pn(e) {
  return e.items;
}
function mn(e) {
  return e.kind === `file` ? [e.file] : [];
}
function hn(e) {
  return e.items;
}
function gn(e) {
  return e.cursor ?? void 0;
}
function _n(e) {
  return e.cursor == null ? void 0 : { cursor: e.cursor, queryId: e.searchQueryId };
}
function vn(e) {
  return e.kind === `file` ? [e.file] : [];
}
function yn(e) {
  return { kind: `file`, file: e };
}
function bn(e) {
  return { kind: `file`, file: e };
}
function xn(e) {
  return e.id;
}
function Sn(e) {
  let { status: t } = e;
  return t !== `error`;
}
function Cn(e) {
  return e.kind === `file`;
}
function wn() {
  return new Map();
}
function Tn() {
  return new Map();
}
function En(e) {
  let t = (0, U.c)(10),
    { count: n, loadingLabel: r, viewMode: i } = e;
  if (i === `grid`) {
    let e;
    t[0] === r
      ? (e = t[1])
      : ((e = (0, G.jsx)(`output`, { className: `sr-only col-span-full`, children: r })),
        (t[0] = r),
        (t[1] = e));
    let i;
    t[2] === n ? (i = t[3]) : ((i = Array.from({ length: n }).map(Dn)), (t[2] = n), (t[3] = i));
    let a;
    return (
      t[4] !== e || t[5] !== i
        ? ((a = (0, G.jsxs)(G.Fragment, { children: [e, i] })), (t[4] = e), (t[5] = i), (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  let a;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, G.jsx)(`div`, { className: `size-8 shrink-0 rounded-lg bg-text/10` })), (t[7] = a))
    : (a = t[7]);
  let o;
  return (
    t[8] === r
      ? (o = t[9])
      : ((o = (0, G.jsx)(He, { density: `row`, icon: a, loadingLabel: r })), (t[8] = r), (t[9] = o)),
    o
  );
}
function Dn(e, t) {
  return (0, G.jsx)(
    Ie,
    { className: `aspect-square w-full rounded-2xl`, "aria-hidden": !0, variant: `prominent` },
    `library-picker-grid-skeleton-${t}`,
  );
}
function On(e) {
  let t = (0, U.c)(18),
    { file: n } = e,
    r;
  t[0] === n.id ? (r = t[1]) : ((r = F(n.id)), (t[0] = n.id), (t[1] = r));
  let i = r,
    a = `name` in n ? n.name : n.file_name,
    o = n.mime_type ?? void 0,
    s = n.cloud_doc_url ?? void 0,
    c;
  t[2] !== n.file_extension ||
  t[3] !== n.id ||
  t[4] !== n.library_artifact_type ||
  t[5] !== i ||
  t[6] !== a ||
  t[7] !== o ||
  t[8] !== s
    ? ((c = (0, G.jsx)(vt, {
        fileExtension: n.file_extension,
        fileName: a,
        libraryArtifactType: n.library_artifact_type,
        mimeType: o,
        mountedLibraryFileId: n.id,
        provider: i,
        sourceUrl: s,
        style: `row`,
      })),
      (t[2] = n.file_extension),
      (t[3] = n.id),
      (t[4] = n.library_artifact_type),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] === i
    ? (l = t[11])
    : ((l =
        i == null
          ? null
          : (0, G.jsx)(`span`, {
              className: `pointer-events-none absolute -end-1 -bottom-1 flex size-3 items-center justify-center`,
              children: (0, G.jsx)(Ht, { provider: i, size: `badge` }),
            })),
      (t[10] = i),
      (t[11] = l));
  let u;
  t[12] !== c || t[13] !== l
    ? ((u = (0, G.jsxs)(`span`, {
        className: `relative flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-surface dark:bg-surface-tertiary`,
        children: [c, l],
      })),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u))
    : (u = t[14]);
  let d;
  return (
    t[15] !== n || t[16] !== u
      ? ((d = (0, G.jsx)(Kt, { className: `size-8 shrink-0 rounded-lg object-cover`, file: n, fallback: u })),
        (t[15] = n),
        (t[16] = u),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
function kn(e) {
  let t = (0, U.c)(7),
    { folder: n } = e,
    r;
  t[0] === n.id ? (r = t[1]) : ((r = F(n.id)), (t[0] = n.id), (t[1] = r));
  let i = r,
    a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, G.jsx)(ie, {})), (t[2] = a)) : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o =
        i == null
          ? null
          : (0, G.jsx)(`span`, {
              className: `pointer-events-none absolute -end-1 -bottom-1 flex size-3 items-center justify-center`,
              children: (0, G.jsx)(Ht, { provider: i, size: `badge` }),
            })),
      (t[3] = i),
      (t[4] = o));
  let s;
  return (
    t[5] === o
      ? (s = t[6])
      : ((s = (0, G.jsxs)(`span`, {
          className: `relative flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-surface dark:bg-surface-tertiary`,
          children: [a, o],
        })),
        (t[5] = o),
        (t[6] = s)),
    s
  );
}
function An(e) {
  let t = (0, U.c)(60),
    { accessibleName: n, accountLabel: r, disabled: i, file: a, selected: o, onToggle: s } = e,
    c = Ce(),
    l = `kind` in a && a.kind === `directory`,
    u = `name` in a ? a.name : a.file_name,
    d;
  t[0] === a.id ? (d = t[1]) : ((d = F(a.id)), (t[0] = a.id), (t[1] = d));
  let f = d,
    p = a.mime_type ?? void 0,
    m;
  t[2] !== u || t[3] !== p
    ? ((m = ee({ fileName: u, mimeType: p })), (t[2] = u), (t[3] = p), (t[4] = m))
    : (m = t[4]);
  let te = m,
    h;
  t[5] !== a || t[6] !== u || t[7] !== l || t[8] !== c
    ? ((h = l ? u : Pn(a, c)), (t[5] = a), (t[6] = u), (t[7] = l), (t[8] = c), (t[9] = h))
    : (h = t[9]);
  let _ = h,
    v;
  t[10] !== n || t[11] !== c
    ? ((v = c.formatMessage(Vn.selectFile, { fileDescription: n })), (t[10] = n), (t[11] = c), (t[12] = v))
    : (v = t[12]);
  let re = v,
    ae = o ? `border-transparent bg-primary-soft-active` : `border-subtle hover:bg-primary-ghost-hover`,
    oe;
  t[13] === ae
    ? (oe = t[14])
    : ((oe = g(
        `relative block size-full cursor-interaction overflow-hidden rounded-2xl border bg-surface-elevated text-start shadow-card outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface`,
        ae,
      )),
      (t[13] = ae),
      (t[14] = oe));
  let se;
  t[15] === _
    ? (se = t[16])
    : ((se = (0, G.jsx)(`span`, {
        className: `absolute inset-x-4 top-4 line-clamp-2 text-sm leading-5 font-medium [overflow-wrap:anywhere] break-words`,
        children: _,
      })),
      (t[15] = _),
      (t[16] = se));
  let y;
  t[17] !== a.cloud_doc_url ||
  t[18] !== a.file_extension ||
  t[19] !== a.id ||
  t[20] !== a.mime_type ||
  t[21] !== u ||
  t[22] !== l
    ? ((y = (0, G.jsx)(`span`, {
        className: `absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center`,
        children: l
          ? (0, G.jsx)(ie, {})
          : (0, G.jsx)(fe, {
              className: `size-10`,
              fileExtension: a.file_extension,
              fileName: u,
              mimeType: a.mime_type ?? void 0,
              mountedLibraryFileId: a.id,
              sourceUrl: a.cloud_doc_url ?? void 0,
              size: 32,
            }),
      })),
      (t[17] = a.cloud_doc_url),
      (t[18] = a.file_extension),
      (t[19] = a.id),
      (t[20] = a.mime_type),
      (t[21] = u),
      (t[22] = l),
      (t[23] = y))
    : (y = t[23]);
  let ce;
  t[24] !== te || t[25] !== l
    ? ((ce = l
        ? (0, G.jsx)(A, {
            id: `libraryPicker.folderType`,
            defaultMessage: `Folder`,
            description: `Type label for a shared folder in the Add from library picker`,
          })
        : te.label),
      (t[24] = te),
      (t[25] = l),
      (t[26] = ce))
    : (ce = t[26]);
  let le;
  t[27] === ce
    ? (le = t[28])
    : ((le = (0, G.jsx)(`span`, {
        className: `absolute inset-x-4 bottom-4 truncate pe-8 text-xs leading-4 text-tertiary`,
        children: ce,
      })),
      (t[27] = ce),
      (t[28] = le));
  let b;
  t[29] !== le || t[30] !== se || t[31] !== y
    ? ((b = (0, G.jsxs)(G.Fragment, { children: [se, y, le] })),
      (t[29] = le),
      (t[30] = se),
      (t[31] = y),
      (t[32] = b))
    : (b = t[32]);
  let x;
  t[33] !== a || t[34] !== b
    ? ((x = (0, G.jsx)(Kt, { className: `absolute inset-0 size-full object-cover`, file: a, fallback: b })),
      (t[33] = a),
      (t[34] = b),
      (t[35] = x))
    : (x = t[35]);
  let S;
  t[36] === o
    ? (S = t[37])
    : ((S = o
        ? (0, G.jsx)(`span`, {
            className: `pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-text ring-inset`,
          })
        : null),
      (t[36] = o),
      (t[37] = S));
  let C;
  t[38] !== n || t[39] !== i || t[40] !== s || t[41] !== o || t[42] !== x || t[43] !== S || t[44] !== oe
    ? ((C = (0, G.jsxs)(`button`, {
        "aria-label": n,
        "aria-pressed": o,
        className: oe,
        disabled: i,
        type: `button`,
        onClick: s,
        children: [x, S],
      })),
      (t[38] = n),
      (t[39] = i),
      (t[40] = s),
      (t[41] = o),
      (t[42] = x),
      (t[43] = S),
      (t[44] = oe),
      (t[45] = C))
    : (C = t[45]);
  let w;
  t[46] !== i || t[47] !== s || t[48] !== f || t[49] !== re || t[50] !== o
    ? ((w = (0, G.jsx)(`div`, {
        className: `pointer-events-none absolute inset-px`,
        children: (0, G.jsx)(`div`, {
          className: `absolute end-4 bottom-4 z-10 grid size-5 place-items-center`,
          children: o
            ? (0, G.jsx)(`div`, {
                className: `pointer-events-auto relative flex size-5 items-center justify-center`,
                children: (0, G.jsx)(ne, {
                  "aria-label": re,
                  checked: !0,
                  disabled: i,
                  variant: `overlay`,
                  onCheckedChange: s,
                }),
              })
            : (0, G.jsxs)(G.Fragment, {
                children: [
                  f == null
                    ? null
                    : (0, G.jsx)(`span`, {
                        className: g(
                          `col-start-1 row-start-1 flex size-5 items-center justify-center`,
                          !i && `group-hover:opacity-0 group-focus-within:opacity-0`,
                        ),
                        children: (0, G.jsx)(Ht, { provider: f, size: `cardBadge` }),
                      }),
                  (0, G.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: g(
                      `col-start-1 row-start-1 size-5 rounded-full opacity-0 ring-1 ring-border ring-inset`,
                      !i && `group-hover:opacity-100 group-focus-within:opacity-100`,
                    ),
                  }),
                ],
              }),
        }),
      })),
      (t[46] = i),
      (t[47] = s),
      (t[48] = f),
      (t[49] = re),
      (t[50] = o),
      (t[51] = w))
    : (w = t[51]);
  let ue;
  t[52] !== C || t[53] !== w
    ? ((ue = (0, G.jsxs)(`div`, { className: `group relative aspect-square min-w-0`, children: [C, w] })),
      (t[52] = C),
      (t[53] = w),
      (t[54] = ue))
    : (ue = t[54]);
  let de;
  t[55] === r
    ? (de = t[56])
    : ((de =
        r == null
          ? null
          : (0, G.jsx)(`div`, {
              className: `truncate ps-1 pt-2 text-xs text-secondary`,
              title: r,
              children: r,
            })),
      (t[55] = r),
      (t[56] = de));
  let pe;
  return (
    t[57] !== ue || t[58] !== de
      ? ((pe = (0, G.jsxs)(`div`, { className: `min-w-0`, children: [ue, de] })),
        (t[57] = ue),
        (t[58] = de),
        (t[59] = pe))
      : (pe = t[59]),
    pe
  );
}
function jn(e) {
  let t = (0, U.c)(10),
    { id: n, accountLabel: r, folder: i } = e,
    a;
  if (r == null) {
    let e;
    (t[0] === i.display_path
      ? (e = t[1])
      : ((e =
          i.display_path ||
          (0, G.jsx)(A, {
            id: `libraryPicker.folder`,
            defaultMessage: `Folder`,
            description: `File type label beneath a folder name in the Add from library picker when no path is available`,
          })),
        (t[0] = i.display_path),
        (t[1] = e)),
      (a = e));
  } else if (i.display_path) {
    let e;
    (t[2] !== r || t[3] !== i.display_path
      ? ((e = (0, G.jsx)(A, {
          id: `libraryPicker.folder.pathWithAccount`,
          defaultMessage: `{path} · {account}`,
          description: `Metadata beneath a connected folder in Add from library. Path is the folder's display path and account is its nickname or email, distinguishing folders from multiple connected accounts.`,
          values: { path: i.display_path, account: r },
        })),
        (t[2] = r),
        (t[3] = i.display_path),
        (t[4] = e))
      : (e = t[4]),
      (a = e));
  } else {
    let e;
    (t[5] === r
      ? (e = t[6])
      : ((e = (0, G.jsx)(A, {
          id: `libraryPicker.folder.typeWithAccount`,
          defaultMessage: `Folder · {account}`,
          description: `Metadata beneath a connected folder without a display path in Add from library. Account is its nickname or email, distinguishing folders from multiple connected accounts.`,
          values: { account: r },
        })),
        (t[5] = r),
        (t[6] = e)),
      (a = e));
  }
  let o;
  return (
    t[7] !== n || t[8] !== a
      ? ((o = (0, G.jsx)(`span`, { id: n, className: `block truncate`, children: a })),
        (t[7] = n),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function Mn(e) {
  let t = (0, U.c)(9),
    { id: n, accountLabel: r, file: i } = e,
    a = Ce(),
    o;
  t[0] !== i.file_upload_time || t[1] !== a
    ? ((o =
        i.file_upload_time == null
          ? null
          : a.formatDate(i.file_upload_time, {
              day: `numeric`,
              hour: `numeric`,
              minute: `2-digit`,
              month: `short`,
            })),
      (t[0] = i.file_upload_time),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] !== r || t[4] !== s
    ? ((c =
        r == null
          ? (s ??
            (0, G.jsx)(A, {
              defaultMessage: `—`,
              description: `Placeholder shown in the Add from library dialog when a file has no upload date. This is a single em dash with no placeholders or formatting.`,
              id: `library.filePicker.missingUploadDate`,
            }))
          : (0, G.jsx)(A, {
              id: `libraryPicker.file.dateWithAccount`,
              defaultMessage: `{date} · {account}`,
              description: `Metadata beneath a connected file in Add from library when multiple accounts for its storage provider are connected. {date} is the formatted file date or an em dash when unavailable; {account} is the connected account nickname or email.`,
              values: { date: s ?? `—`, account: r },
            })),
      (t[3] = r),
      (t[4] = s),
      (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== n || t[7] !== c
      ? ((l = (0, G.jsx)(`span`, { id: n, className: `block truncate`, children: c })),
        (t[6] = n),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function Nn(e, t) {
  let n = F(e.id);
  return n == null ||
    n === `unknown` ||
    new Set(
      t
        ?.filter((e) => e.connector_id === Ke(n) && e.auth_status === `ACTIVE`)
        .map((e) => Se(e.owner_profile?.id))
        .filter((e) => e != null),
    ).size < 2
    ? null
    : it(e.external_account, n);
}
function Pn(e, t) {
  let n = `name` in e ? e.name : e.file_name;
  if (e.library_artifact_type != null) {
    let r = We(n, e.library_artifact_type, t);
    if (r !== n) return r;
  }
  return p(n, e.mime_type);
}
function Fn(e, t, n, r) {
  let i = at(n);
  if (i != null && r != null)
    return e.formatMessage(
      {
        id: `libraryPicker.item.providerAccountAriaLabel`,
        defaultMessage: `{name}, {provider}, {account}`,
        description: `Accessible name of a connected file or folder in Add from library. Name is its title, provider is the storage service, and account is its nickname or email. This distinguishes same-named results before selecting them.`,
      },
      { name: t, provider: i, account: r },
    );
  let a = Lt(e, n);
  return a == null
    ? t
    : e.formatMessage(
        {
          id: `libraryPicker.file.providerAriaLabel`,
          defaultMessage: `{fileName}, {providerName}`,
          description: `Accessible name for a provider-backed Library file. fileName is the filename and providerName is the connected storage service, such as Google Drive`,
        },
        { fileName: t, providerName: a },
      );
}
var U, In, W, G, Ln, Rn, zn, Bn, Vn;
function Hn() {
  return (Hn = e(() => {
    ((U = re()),
      s(),
      k(),
      ye(),
      E(),
      h(),
      v(),
      (In = t(o(), 1)),
      w(),
      (W = c()),
      b(),
      je(),
      I(),
      Et(),
      _t(),
      C(),
      D(),
      f(),
      u(),
      y(),
      L(),
      Ge(),
      M(),
      ot(),
      lt(),
      Ae(),
      Ee(),
      O(),
      Ct(),
      At(),
      xt(),
      Ze(),
      tt(),
      B(),
      Bt(),
      P(),
      et(),
      Pe(),
      Je(),
      Gt(),
      N(),
      tn(),
      Ut(),
      It(),
      kt(),
      Ye(),
      pt(),
      r(),
      Dt(),
      dt(),
      i(),
      j(),
      Ft(),
      jt(),
      (G = m()),
      (Ln = a(ae, ({ scope: e }) => R(e))),
      (Rn = 25),
      (zn = 6),
      (Bn = 3),
      (Vn = S({
        attachmentLimit: {
          id: `libraryPicker.attachmentLimit`,
          defaultMessage: `Select {max, plural, one {# file} other {# or fewer files}} to add to chat`,
          description: `Tooltip on the disabled Add to chat button in the Library picker. The selection exceeds the remaining attachment slots. {max} is how many additional files can fit after files already attached to the chat are counted.`,
        },
        selectFile: {
          id: `libraryPicker.file.selectWithDescription`,
          defaultMessage: `Select {fileDescription}`,
          description: `Accessible label for selecting a Library file in the Add from library dialog. fileDescription contains the filename and source provider when applicable`,
        },
      })));
  }))();
}
Hn();
export { H as LibraryFilePicker, nn as LibraryFilePickerDialog };
//# sourceMappingURL=library-file-picker-dialog-content-1a9943119884.js.map
