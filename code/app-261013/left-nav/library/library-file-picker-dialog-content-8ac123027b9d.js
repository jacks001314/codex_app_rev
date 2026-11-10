import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  ADt as r,
  Ak as i,
  Cot as a,
  EPt as o,
  Fat as s,
  GV as c,
  HT as l,
  IDt as u,
  Ixt as d,
  JSt as f,
  Mot as p,
  Not as m,
  PA as h,
  Pat as g,
  Pxt as _,
  RLt as v,
  SE as y,
  TJ as ee,
  VDt as te,
  VT as ne,
  Vxt as b,
  Xot as re,
  Yot as x,
  _Mt as S,
  _O as ie,
  aq as ae,
  cO as oe,
  cW as se,
  cz as ce,
  dA as le,
  fO as C,
  fSt as w,
  gMt as ue,
  jDt as T,
  jk as E,
  mA as D,
  mO as de,
  nst as fe,
  oO as pe,
  oSt as me,
  pA as he,
  pIt as ge,
  qA as _e,
  sMt as O,
  sO as ve,
  sz as ye,
  t3 as be,
  tU as k,
  tst as A,
  vO as xe,
  vzt as Se,
  wot as Ce,
  xB as we,
  xMt as j,
  yzt as Te,
  zxt as Ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as De,
  $mt as Oe,
  ACn as ke,
  Bar as Ae,
  Bmt as M,
  Ear as je,
  Fmt as Me,
  Fur as N,
  GKn as P,
  KKn as Ne,
  KNn as Pe,
  Lqn as Fe,
  Mmt as Ie,
  Nur as Le,
  OPr as Re,
  Qmt as ze,
  UKn as F,
  Vmt as Be,
  WKn as Ve,
  XNn as He,
  Xar as Ue,
  Xct as We,
  Xmt as Ge,
  YVn as Ke,
  Ymr as qe,
  Zmt as Je,
  _ct as Ye,
  cjt as Xe,
  d as I,
  dKn as Ze,
  djt as Qe,
  eDr as $e,
  eHn as et,
  ean as tt,
  ehr as nt,
  eht as rt,
  fjt as it,
  fur as at,
  iHn as L,
  iNr as ot,
  jCn as st,
  kPr as ct,
  ljt as lt,
  llt as ut,
  mKn as dt,
  n0 as ft,
  nDr as pt,
  nEt as mt,
  nHn as R,
  pKn as ht,
  pur as gt,
  qHn as _t,
  qKn as vt,
  rHn as yt,
  rNr as bt,
  t0 as xt,
  tEt as St,
  tan as Ct,
  tht as wt,
  u as Tt,
  ult as Et,
  vct as Dt,
} from "./app-initial-5851df3f6cb1.js";
import {
  Ar as Ot,
  Mr as kt,
  Tr as At,
  bs as jt,
  jr as Mt,
  kr as Nt,
  wr as Pt,
  xs as Ft,
} from "./app-primary-fe8a450b3b04.js";
import { n as It, t as Lt } from "./library-providers-987490869a4e.js";
import { i as Rt, n as zt, r as Bt, t as Vt } from "./library-account-selection-b68e5f302854.js";
import { n as Ht, r as Ut, t as Wt } from "./library-provider-filter-eb6e18971656.js";
import { n as z, t as B } from "./library-file-thumbnail-f2bba5729b28.js";
function Gt({ provider: e, connectorLinks: t }) {
  return ze(e, t, !0).flatMap((t) =>
    t.accountKey == null ? [] : [{ ...t, provider: e, externalAccountKey: t.accountKey }],
  );
}
function Kt({
  availableProviders: e,
  baseSelectedProviders: t,
  accountFilterOptions: n,
  accountSelection: r,
}) {
  let i = new Set(),
    a = {};
  for (let o of e) {
    if (!V(o)) continue;
    let e = n.filter((e) => e.provider === o),
      s = r?.[o];
    if (e.length <= 1 && s == null) continue;
    i.add(o);
    let c = new Set(
        e
          .filter(({ externalAccountKey: e }) => t.includes(o) && (s == null || s.includes(e)))
          .map(({ id: e }) => e),
      ),
      { externalAccountKeys: l } = Oe(e, c);
    a[o] = l?.[o] ?? [];
  }
  let o = t.filter((e) => !V(e) || !i.has(e) || (a[e]?.length ?? 0) > 0),
    s = Rt(
      i.size > 0
        ? Object.fromEntries([...i].filter((e) => o.includes(e)).map((e) => [e, a[e] ?? []]))
        : void 0,
    ),
    c = e.flatMap((e) => (V(e) && i.has(e) ? n.filter((t) => t.provider === e) : [{ id: e, provider: e }])),
    l = c
      .filter((e) =>
        e.externalAccountKey == null
          ? o.includes(e.provider)
          : V(e.provider) && a[e.provider]?.includes(e.externalAccountKey),
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
function V(e) {
  return Vt.some((t) => t === e);
}
function qt() {
  return (qt = e(() => {
    (Bt(), rt());
  }))();
}
function Jt({
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
      (t) => e.includes(t) || (a && Xt(t)) || s,
    ),
    l = c.length > 0 ? c : [`native`],
    u = [...l, ...e.filter((e) => !Zt(e))],
    d = i ?? u,
    f = d.filter(Zt),
    p = f.length > 0 ? f : d,
    m = p.length > 0 && p.every((e) => t.includes(e)),
    h = i?.filter((n) => e.includes(n) || (m && t.includes(n))) ?? u;
  return { selectedProviders: h.length > 0 || i?.length === 0 ? h : l, shouldWaitForProviders: m };
}
function Yt(e, t, n) {
  if (!Zt(t)) return;
  let r = n.filter(Zt);
  r.length !== 0 &&
    f(e, (e) => {
      e.set(en, r);
      let n = r.filter(Xt);
      Xt(t) && n.length > 0 && e.set($t, n);
    });
}
function Xt(e) {
  return e === `native` || e === `google_drive`;
}
function Zt(e) {
  return Xt(e) || e === `box` || e === `dropbox`;
}
var Qt, $t, en;
function H() {
  return (H = e(() => {
    (_(),
      o(),
      Ce(),
      bt(),
      (Qt = [`native`, `google_drive`]),
      ($t = ot(`library-picker-recent-providers`, Qt, {
        coerceStoredValue(e) {
          let t = ge(v()).safeParse(e),
            n = Qt.filter((e) => t.data?.includes(e));
          return n.length > 0 ? n : Qt;
        },
      })),
      (en = w(a, () => null)));
  }))();
}
function tn(e) {
  let t = (0, U.c)(23),
    n = te(),
    { accountId: r, userId: i } = gt(),
    a;
  t[0] !== r || t[1] !== i ? ((a = JSON.stringify([r, i])), (t[0] = r), (t[1] = i), (t[2] = a)) : (a = t[2]);
  let o = a,
    s;
  t[3] === o ? (s = t[4]) : ((s = { scopeKey: o, selection: null }), (t[3] = o), (t[4] = s));
  let [c, l] = (0, W.useState)(s);
  c.scopeKey !== o && l({ scopeKey: o, selection: null });
  let u = c.scopeKey === o ? c.selection : null,
    [d, f] = (0, W.useState)(`list`),
    [p, m] = (0, W.useState)(null),
    h;
  t[5] === e.onCloseAutoFocus
    ? (h = t[6])
    : ((h = { onCloseAutoFocus: e.onCloseAutoFocus }), (t[5] = e.onCloseAutoFocus), (t[6] = h));
  let g;
  t[7] === n
    ? (g = t[8])
    : ((g = n.formatMessage({
        id: `libraryPicker.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing the Add from library dialog`,
      })),
      (t[7] = n),
      (t[8] = g));
  let _;
  t[9] === o ? (_ = t[10]) : ((_ = (e) => l({ scopeKey: o, selection: e })), (t[9] = o), (t[10] = _));
  let v;
  t[11] !== u || t[12] !== e || t[13] !== p || t[14] !== _ || t[15] !== d
    ? ((v = (0, G.jsx)(nn, {
        ...e,
        accountSelection: u,
        providerSelection: p,
        viewMode: d,
        onAccountSelectionChange: _,
        onProviderSelectionChange: m,
        onViewModeChange: f,
      })),
      (t[11] = u),
      (t[12] = e),
      (t[13] = p),
      (t[14] = _),
      (t[15] = d),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== e.onOpenChange || t[18] !== e.open || t[19] !== h || t[20] !== g || t[21] !== v
      ? ((y = (0, G.jsx)(de, {
          contentProps: h,
          dialogCloseLabel: g,
          open: e.open,
          size: `xwide`,
          variant: `chatgpt`,
          onOpenChange: e.onOpenChange,
          children: v,
        })),
        (t[17] = e.onOpenChange),
        (t[18] = e.open),
        (t[19] = h),
        (t[20] = g),
        (t[21] = v),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
function nn(e) {
  let t = (0, U.c)(131),
    {
      acceptsFile: r,
      accountSelection: i,
      allowMountedLibraryLiveReferences: o,
      analytics: s,
      attachmentTarget: l,
      categories: f,
      attachments: p,
      attachedFileIds: h,
      attachedLibraryFileIds: _,
      attachedFileCount: v,
      conversationId: y,
      disabled: ee,
      providerSelection: x,
      open: S,
      onAccountSelectionChange: ce,
      onProviderSelectionChange: C,
      onOpenChange: w,
      onAttachFiles: T,
      onAttachItems: E,
      sharedAttachmentState: D,
      skipChatAttachmentLimits: de,
      selectionMode: me,
      onUploadFiles: ge,
      onViewModeChange: _e,
      viewMode: O,
    } = e,
    be = o !== void 0 && o,
    k = l === void 0 ? `chat` : l,
    A = ee !== void 0 && ee,
    xe = de !== void 0 && de,
    Se = me === void 0 ? `multiple` : me,
    Ce = d(a),
    j = He(),
    Te = Ee(y === void 0 ? null : _t, y ?? null),
    De = Ee(y === void 0 ? null : Ke, y ?? null),
    Oe = b(Be),
    M = te(),
    je = fe(),
    Me = b(In),
    { accountId: N, userId: P } = gt(),
    Ne = pt(`3001618585`),
    Pe = pt(`3224986812`),
    Fe = pt(`2060455659`),
    Ie = pt(`2561885426`),
    Re = pt(`523386142`),
    ze = pt(`3583034603`),
    Ve = b(wt),
    Je = Ee(ct, `283315982`),
    Ye = b(Ge),
    I = pt(`3941040396`),
    Ze = b(Ae),
    Qe = b(Ue),
    $e = Ee(ct, `chatgpt-global-search-files-index-first`),
    tt = k === `chat` && Ze,
    nt;
  tt && ($e ? (nt = `files`) : Qe && (nt = `space`));
  let rt = k === `chat` && (I || tt),
    at = tt ? { includePages: !0, spaceSearchSource: nt } : {},
    L = S && k === `chat` && I && N != null && P != null,
    ot;
  t[0] !== N || t[1] !== P
    ? ((ot = Le({ accountId: N, userId: P })), (t[0] = N), (t[1] = P), (t[2] = ot))
    : (ot = t[2]);
  let st = ot,
    lt;
  t[3] !== st || t[4] !== L
    ? ((lt = { ...st, enabled: L, staleTime: g.FIVE_MINUTES }), (t[3] = st), (t[4] = L), (t[5] = lt))
    : (lt = t[5]);
  let { data: ft, error: mt, isFetching: R } = re(lt),
    bt = L && !R && mt == null ? ft : void 0,
    St = (0, W.useId)(),
    Tt = Xe({
      connectorLinks: bt,
      googleDriveEnabled: Ne,
      boxEnabled: Pe,
      dropboxEnabled: Fe,
      sharePointEnabled: Re,
      oneDriveEnabled: ze,
    }),
    Et;
  t[6] !== Je || t[7] !== Ve || t[8] !== L
    ? ((Et = (e) => L && (e === `google_drive` ? Je : Ve.has(e))),
      (t[6] = Je),
      (t[7] = Ve),
      (t[8] = L),
      (t[9] = Et))
    : (Et = t[9]);
  let Dt = Vt.filter(Et),
    kt = JSON.stringify([
      N,
      P,
      zt({ accountId: N, accountUserId: P, connectorLinks: ft }),
      Tt,
      Dt,
      [...Ye].sort(),
      L,
      R,
      mt == null,
    ]),
    Nt;
  t[10] === bt
    ? (Nt = t[11])
    : ((Nt = (e) => Gt({ provider: e, connectorLinks: bt ?? [] })), (t[10] = bt), (t[11] = Nt));
  let Pt = Dt.flatMap(Nt),
    Ft = i == null ? null : Object.fromEntries(Dt.flatMap((e) => (i[e] == null ? [] : [[e, i[e]]]))),
    It = b($t),
    Lt = b(en),
    Rt = Jt({
      availableProviders: Tt,
      pendingProviders:
        L && R ? [...(Ne ? [`google_drive`] : []), ...(Pe ? [`box`] : []), ...(Fe ? [`dropbox`] : [])] : [],
      persistedProviders: Ne ? It : [`native`],
      pickerProviders: Lt,
      selection: x,
      isLoading: L && R,
    }),
    Bt = Object.keys(Ft ?? {}).length > 0,
    Ht;
  t[12] !== Ye || t[13] !== Bt || t[14] !== x
    ? ((Ht = (e) => !Ye.has(e) && (!Bt || x == null || x.includes(e))),
      (t[12] = Ye),
      (t[13] = Bt),
      (t[14] = x),
      (t[15] = Ht))
    : (Ht = t[15]);
  let Ut = Rt.selectedProviders.filter(Ht),
    z = Kt({
      availableProviders: Tt,
      baseSelectedProviders: Ut.length === 0 && !Bt ? [`native`] : Ut,
      accountFilterOptions: Pt,
      accountSelection: Ft,
    }),
    B = z.selectedProviders,
    [V, qt] = (0, W.useState)(``),
    Xt;
  t[16] === V ? (Xt = t[17]) : ((Xt = V.trim()), (t[16] = V), (t[17] = Xt));
  let Zt = Ct(Xt, 300),
    Qt;
  t[18] !== Zt || t[19] !== V
    ? ((Qt = V.trim() === `` ? `` : Zt), (t[18] = Zt), (t[19] = V), (t[20] = Qt))
    : (Qt = t[20]);
  let H = Qt,
    tn = { ...z.externalAccountKeys };
  for (let e of Vt) e !== `google_drive` && Ft?.[e] == null && delete tn[e];
  let nn = z.externalAccountKeys;
  H.length > 0 && (nn = Object.keys(tn).length > 0 ? tn : void 0);
  let En = JSON.stringify([kt, B, z.externalAccountKeysKey]),
    Vn = (e) => {
      let t = F(e.id);
      if (t == null || t === `unknown` || t === `onedrive`) return !0;
      let n = nn?.[t];
      if (n == null) return !0;
      let r = he(e.external_account?.key) ?? le(e.id);
      return r != null && n.includes(r);
    },
    [Hn, K] = (0, W.useState)(wn),
    [Un, q] = (0, W.useState)(Cn),
    J = k === `chat` && E != null && Oe && B.includes(`native`),
    Wn;
  t[21] === Ie ? (Wn = t[22]) : ((Wn = (e) => vt(e) && (e !== `dropbox` || Ie)), (t[21] = Ie), (t[22] = Wn));
  let Gn = B.filter(Wn),
    Kn = k === `chat` && E != null && I && Gn.length > 0,
    qn;
  t[23] !== D?.fileIds || t[24] !== D?.folderIds
    ? ((qn = (e) => (e.kind === `directory` ? D?.folderIds : D?.fileIds)?.has(e.id) === !0),
      (t[23] = D?.fileIds),
      (t[24] = D?.folderIds),
      (t[25] = qn))
    : (qn = t[25]);
  let Jn = qn,
    Yn = (e) => {
      let t = F(e.id);
      return t == null ? J : Kn && Vn(e) && e.kind === `directory` && vt(t) && Gn.includes(t);
    },
    Y = [...Un.values()].filter((e) => !Jn(e) && Yn(e)),
    [Xn, Zn] = (0, W.useState)(En);
  Xn !== En && (Zn(En), K(new Map()), q(new Map()));
  let Qn = (e) =>
      (f == null || f.includes(e.library_file_category)) &&
      (r == null || r(e)) &&
      !h?.has(e.id) &&
      !h?.has(e.file_id) &&
      it(e, B) &&
      Vn(e) &&
      (k === `chat` ||
        (e.state === `ready` &&
          (e.access_kind == null || e.access_kind === `owned`) &&
          F(e.file_id) == null)),
    X = Array.from(Hn.values()).filter(Qn),
    $n = X.length + Y.length,
    er = X.filter(
      (e) =>
        !p?.some(
          (t) =>
            t.status !== `error` &&
            (t.libraryFileId === e.id ||
              (t.status === `ready` && (t.id === e.file_id || t.mountedLibraryFileId === e.id))),
        ),
    ),
    tr = jt(Ce, p ?? [], er, be),
    nr = Y.filter(Sn).length,
    rr = er.length + nr,
    ir = v ?? p?.filter(xn).length ?? 0,
    ar = et({
      currentAttachmentCount: ir + (D?.sharedFileCount ?? 0),
      currentNativeAttachmentCount: p == null ? ir : yt(p),
      maxUploads: Me,
      metadata: Te,
      nowMs: De ?? void 0,
      requestedFileCount: rr,
      requestedNativeFileCount: er.length - tr.size,
    }),
    or = ar.acceptedCount,
    Z = k === `chat` && !xe && rr > 0 && (ar.blocked || rr > or),
    sr = new Set(X.map(bn)),
    cr;
  t[26] !== S || t[27] !== O
    ? ((cr = { open: S, viewMode: O }), (t[26] = S), (t[27] = O), (t[28] = cr))
    : (cr = t[28]);
  let [lr, ur] = (0, W.useState)(cr);
  lr.open !== S && ur({ open: S, viewMode: O });
  let dr = [`library-file-picker-files`, N, P, k, f, I, tt, nt, Kn, H, B.join(`,`), Gn.join(`,`), kt, nn],
    {
      data: fr,
      fetchNextPage: pr,
      hasNextPage: mr,
      isError: hr,
      isFetching: gr,
      isFetchingNextPage: _r,
      refetch: vr,
    } = m({
      queryKey: dr,
      enabled: S && N != null && P != null && !Rt.shouldWaitForProviders && !(L && R),
      initialPageParam: null,
      staleTime: k === `project` && H.length === 0 ? g.TEN_MINUTES : g.FIVE_SECONDS,
      queryFn: async (e) => {
        let { pageParam: t, signal: n } = e,
          r =
            Mt(je.getQueryCache().find({ queryKey: dr, exact: !0 })) == null
              ? s?.startLoad(t == null ? `refresh` : `append`, k === `chat` && I ? B : [`native`])
              : void 0;
        try {
          let e = H && rt ? (t?.queryId ?? crypto.randomUUID()) : void 0,
            i;
          if (k === `project` && f == null && H.length === 0)
            i = {
              items: (
                await qe.safeGet(`/files/library/recents`, {
                  parameters: { query: { limit: Ln, providers: [`native`] } },
                  signal: n,
                })
              ).items.map(yn),
              cursor: null,
            };
          else if (Kn)
            i = await ht({
              query: H,
              queryId: e,
              cursor: t?.cursor ?? null,
              signal: n,
              limit: Ln,
              providers: B,
              folderProviders: Gn,
              externalAccountKeys: nn,
              ...at,
            });
          else {
            let r = await dt({
              categories: f,
              entrypoint: `composer`,
              query: H,
              queryId: e,
              cursor: t?.cursor.files ?? null,
              signal: n,
              limit: k === `project` ? 10 : Ln,
              providers: rt ? B : void 0,
              externalAccountKeys: nn,
              ...at,
            });
            i = {
              items: r.items.map(vn),
              isSearchResult: r.isSearchResult,
              partialResults: r.partialResults,
              searchQueryId: r.searchQueryId,
              cursor: r.cursor == null ? null : { files: r.cursor, folders: null },
            };
          }
          return (n.aborted || r?.({ success: !0, files: i.items.flatMap(_n) }), i);
        } catch (e) {
          let t = e;
          throw (n.aborted || r?.({ success: !1 }), t);
        }
      },
      getNextPageParam: gn,
    }),
    yr;
  t[29] === H
    ? (yr = t[30])
    : ((yr = (e) => {
        let { pageParam: t, signal: n } = e;
        return At(H, t, n);
      }),
      (t[29] = H),
      (t[30] = yr));
  let {
      data: br,
      fetchNextPage: xr,
      hasNextPage: Sr,
      isError: Cr,
      isFetching: wr,
      isFetchingNextPage: Tr,
      refetch: Er,
    } = m({
      queryKey: [`library-picker-shared`, N, P, H],
      enabled: S && J && N != null && P != null,
      initialPageParam: null,
      staleTime: g.FIVE_SECONDS,
      queryFn: yr,
      getNextPageParam: hn,
    }),
    Dr = hr || (J && Cr),
    Or = gr || (J && wr),
    kr = _r || (J && Tr),
    Ar = mr || (J && Sr),
    jr = async () => {
      await Promise.all([...(mr ? [pr()] : []), ...(J && Sr ? [xr()] : [])]);
    },
    Mr = async () => {
      await Promise.all([
        Ot(je, dr, s, k === `chat` && I ? B : [`native`], () => (hr && mr ? pr() : vr())),
        ...(J ? [Cr && Sr ? xr() : Er()] : []),
      ]);
    },
    Nr = fr?.pages.flatMap(mn),
    Pr = Nr?.flatMap(pn),
    Fr = Pr?.filter(Qn),
    Ir = (0, Fn.default)(
      [
        ...(Nr?.flatMap((e) => (e.kind === `folder` && Yn(e.folder) ? [e.folder] : [])) ?? []),
        ...(J ? (br?.pages.flatMap(fn) ?? []) : []),
      ],
      `id`,
    ),
    Lr = (Fr?.length ?? 0) + Ir.length,
    Rr;
  t[31] === V ? (Rr = t[32]) : ((Rr = V.trim()), (t[31] = V), (t[32] = Rr));
  let Q = Rr !== H || (!hr && Fr == null) || (J && !Cr && br == null),
    zr = !Q && Dr && Lr === 0,
    Br = !Q && !zr && !Ar && Lr === 0,
    Vr = !Q && !zr && (Lr > 0 || Ar),
    Hr = H.length === 0 ? Rn : zn,
    Ur = (0, W.useEffectEvent)(() =>
      s?.shown(
        lr.viewMode,
        k === `chat` && I ? B : [`native`],
        k === `chat` && I && Tt.includes(`google_drive`),
      ),
    ),
    Wr;
  t[33] !== R || t[34] !== S || t[35] !== Ur || t[36] !== L
    ? ((Wr = () => {
        !S || (L && R) || Ur();
      }),
      (t[33] = R),
      (t[34] = S),
      (t[35] = Ur),
      (t[36] = L),
      (t[37] = Wr))
    : (Wr = t[37]);
  let Gr;
  (t[38] !== s || t[39] !== R || t[40] !== S || t[41] !== L
    ? ((Gr = [s, S, L, R]), (t[38] = s), (t[39] = R), (t[40] = S), (t[41] = L), (t[42] = Gr))
    : (Gr = t[42]),
    (0, W.useEffect)(Wr, Gr));
  let Kr, qr;
  (t[43] !== s || t[44] !== S
    ? ((Kr = () => {
        if (S) return () => s?.dismissed();
      }),
      (qr = [s, S]),
      (t[43] = s),
      (t[44] = S),
      (t[45] = Kr),
      (t[46] = qr))
    : ((Kr = t[45]), (qr = t[46])),
    (0, W.useEffect)(Kr, qr));
  let Jr = z.selectedProviderOptionIds.length < z.availableProviderOptions.length,
    Yr = fr?.pages[0]?.isSearchResult === !0,
    Xr;
  t[47] === fr?.pages ? (Xr = t[48]) : ((Xr = fr?.pages.some(dn)), (t[47] = fr?.pages), (t[48] = Xr));
  let Zr = Xr === !0,
    Qr = fr?.pages[0]?.searchQueryId,
    $r = (0, W.useEffectEvent)((e, t) => {
      s?.resultsShown({
        query: H,
        files: e,
        loadedFiles: t,
        sharedItems: Ir,
        hasProviderFilter: Jr,
        hasNextPage: Ar,
        isSearchResult: Yr,
        partialResults: Zr,
        searchQueryId: Qr,
      });
    });
  (0, W.useEffect)(() => {
    S && !Q && !Or && !Dr && Fr != null && Pr != null && $r(Fr, Pr);
  }, [s, H, Fr, Ar, Jr, J, Dr, Or, Yr, Pr, S, Zr, Qr, br, Q]);
  let ei;
  t[49] !== w || t[50] !== K || t[51] !== q
    ? ((ei = (e) => {
        (e || (qt(``), K(new Map()), q(new Map())), w(e));
      }),
      (t[49] = w),
      (t[50] = K),
      (t[51] = q),
      (t[52] = ei))
    : (ei = t[52]);
  let ti = ei,
    ni = (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        !(A || Z || $n === 0) &&
          (Y.length > 0 && E?.(Y), X.length > 0 && T(X, s?.startAttachment(X.map(un))), ti(!1)));
    },
    ri = (e, t) => {
      if (A) return;
      let n = Tt.filter((n) => (n === e ? t : B.includes(n))),
        r = n.length === 0 ? [`native`] : n;
      ((r.length !== B.length || r.some((e) => !B.includes(e))) && s?.providersChanged(e, r),
        K(new Map()),
        q(new Map()),
        C(r),
        Yt(Ce, e, r));
    },
    ii = (e, t) => {
      if (A || Ye.has(e.provider)) return;
      let n = Pt.find((t) => t.id === e.id);
      if (n == null) {
        ri(e.provider, t);
        return;
      }
      let { provider: r, externalAccountKey: a } = n,
        o = z.selectedExternalAccountKeys[r] ?? [],
        s = Pt.filter((e) => e.provider === r)
          .filter((e) => (e.externalAccountKey === a ? t : o.includes(e.externalAccountKey)))
          .map(ln),
        c = s.length > 0;
      (c || !B.every((e) => e === r)) &&
        (ce({ ...i, [r]: s }), K(new Map()), q(new Map()), B.includes(r) === c ? C(B) : ri(r, c));
    },
    ai;
  t[53] !== s ||
  t[54] !== _ ||
  t[55] !== ir ||
  t[56] !== D?.fileIds ||
  t[57] !== D?.folderIds ||
  t[58] !== D?.sharedFileCount
    ? ((ai = (e, t, n, r) => {
        s?.selectionChanged({
          item: r,
          changedItems: e,
          selectedCount: ir + (D?.sharedFileCount ?? 0) + (D?.folderIds.size ?? 0) + t.length + n.length,
          libraryFileIds: [
            ...new Set([...(_ ?? []), ...(D?.fileIds ?? []), ...t.map(cn), ...n.filter(sn).map(on)]),
          ],
          folderIds: [...new Set([...(D?.folderIds ?? []), ...n.filter(an).map(rn)])],
        });
      }),
      (t[53] = s),
      (t[54] = _),
      (t[55] = ir),
      (t[56] = D?.fileIds),
      (t[57] = D?.folderIds),
      (t[58] = D?.sharedFileCount),
      (t[59] = ai))
    : (ai = t[59]);
  let oi = ai,
    si = (e) => {
      if (A || !Qn(e)) return;
      let t = new Map(Hn);
      (t.has(e.id) ? t.delete(e.id) : (Se === `single` && (t.clear(), q(new Map())), t.set(e.id, e)),
        K(t),
        oi([e], Array.from(t.values()).filter(Qn), Se === `single` ? [] : Y, e));
    },
    $ = O === `list` ? `grid` : `list`,
    ci;
  t[60] !== M || t[61] !== $
    ? ((ci =
        $ === `grid`
          ? M.formatMessage({
              id: `libraryPicker.view.grid`,
              defaultMessage: `Grid view`,
              description: `Accessible label for showing files as a grid in the Add from library dialog`,
            })
          : M.formatMessage({
              id: `libraryPicker.view.list`,
              defaultMessage: `List view`,
              description: `Accessible label for showing files as a list in the Add from library dialog`,
            })),
      (t[60] = M),
      (t[61] = $),
      (t[62] = ci))
    : (ci = t[62]);
  let li = ci,
    ui = pe,
    di;
  t[63] === j
    ? (di = t[64])
    : ((di = (0, G.jsx)(oe, {
        className: `px-5 pt-5`,
        title: (0, G.jsx)(ie, {
          children: j
            ? (0, G.jsx)(u, {
                id: `libraryPicker.title.space`,
                defaultMessage: `Add from Space`,
                description: `Short title for the dialog where a ChatGPT user selects one or more Space files to add to the current chat or project. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              })
            : (0, G.jsx)(u, {
                id: `libraryPicker.title`,
                defaultMessage: `Add from Library`,
                description: `Short title for the dialog where a ChatGPT user selects one or more Library files to add to the current chat or project`,
              }),
        }),
      })),
      (t[63] = j),
      (t[64] = di));
  let fi;
  t[65] !== M || t[66] !== j
    ? ((fi = j
        ? M.formatMessage({
            id: `libraryPicker.search.ariaLabel.space`,
            defaultMessage: `Search Space`,
            description: `Accessible label for the search field in the dialog where a ChatGPT user selects Space files. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : M.formatMessage({
            id: `libraryPicker.search.ariaLabel`,
            defaultMessage: `Search Library`,
            description: `Accessible label for the search field in the dialog where a ChatGPT user selects Library files`,
          })),
      (t[65] = M),
      (t[66] = j),
      (t[67] = fi))
    : (fi = t[67]);
  let pi;
  t[68] !== M || t[69] !== j
    ? ((pi = j
        ? M.formatMessage({
            id: `libraryPicker.search.placeholder.space`,
            defaultMessage: `Search Space`,
            description: `Short placeholder in the search field used to filter Space files before adding them to a chat or project. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : M.formatMessage({
            id: `libraryPicker.search.placeholder`,
            defaultMessage: `Search Library`,
            description: `Short placeholder in the search field used to filter Library files before adding them to a chat or project`,
          })),
      (t[68] = M),
      (t[69] = j),
      (t[70] = pi))
    : (pi = t[70]);
  let mi;
  t[71] !== A || t[72] !== V || t[73] !== fi || t[74] !== pi
    ? ((mi = (0, G.jsx)(ut, {
        id: `library-file-picker-search`,
        className: `min-w-0 flex-1`,
        autoFocus: !0,
        inputRole: `searchbox`,
        isClearable: !1,
        label: fi,
        placeholder: pi,
        readOnly: A,
        searchQuery: V,
        variant: `toolbar`,
        onSearchQueryChange: qt,
      })),
      (t[71] = A),
      (t[72] = V),
      (t[73] = fi),
      (t[74] = pi),
      (t[75] = mi))
    : (mi = t[75]);
  let hi;
  t[76] !== s || t[77] !== $ || t[78] !== _e
    ? ((hi = () => {
        (_e($), s?.layoutChanged($));
      }),
      (t[76] = s),
      (t[77] = $),
      (t[78] = _e),
      (t[79] = hi))
    : (hi = t[79]);
  let gi;
  t[80] === $
    ? (gi = t[81])
    : ((gi = $ === `grid` ? (0, G.jsx)(ae, {}) : (0, G.jsx)(se, {})), (t[80] = $), (t[81] = gi));
  let _i;
  t[82] !== hi || t[83] !== gi || t[84] !== li
    ? ((_i = (0, G.jsx)(n, {
        "aria-label": li,
        color: `ghost`,
        radius: `full`,
        size: `inputIcon`,
        type: `button`,
        onClick: hi,
        children: gi,
      })),
      (t[82] = hi),
      (t[83] = gi),
      (t[84] = li),
      (t[85] = _i))
    : (_i = t[85]);
  let vi;
  t[86] !== _i || t[87] !== li
    ? ((vi = (0, G.jsx)(ye, { tooltipContent: li, children: _i })), (t[86] = _i), (t[87] = li), (t[88] = vi))
    : (vi = t[88]);
  let yi =
      k !== `page` && Tt.length > 1
        ? (0, G.jsx)(Wt, {
            availableProviders: Tt,
            availableProviderOptions: z.availableProviderOptions,
            disabled: A,
            selectedProviders: B,
            selectedProviderOptionIds: z.selectedProviderOptionIds,
            onCheckedChange: ri,
            onOptionCheckedChange: ii,
            onOpen: s?.providerMenuShown,
          })
        : null,
    bi;
  t[89] !== vi || t[90] !== yi
    ? ((bi = (0, G.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1.5`, children: [vi, yi] })),
      (t[89] = vi),
      (t[90] = yi),
      (t[91] = bi))
    : (bi = t[91]);
  let xi;
  t[92] !== mi || t[93] !== bi
    ? ((xi = (0, G.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2 px-5`, children: [mi, bi] })),
      (t[92] = mi),
      (t[93] = bi),
      (t[94] = xi))
    : (xi = t[94]);
  let Si;
  t[95] !== s || t[96] !== A || t[97] !== ge
    ? ((Si =
        ge == null
          ? null
          : (0, G.jsx)(`div`, {
              className: `px-5`,
              children: (0, G.jsxs)(n, {
                color: `ghostSecondary`,
                disabled: A,
                onClick: () => {
                  (s?.upload(), ge());
                },
                type: `button`,
                children: [
                  (0, G.jsx)(we, {}),
                  (0, G.jsx)(u, {
                    id: `libraryPicker.uploadFiles`,
                    defaultMessage: `Upload files`,
                    description: `Alternative action in the Library picker that opens the existing project file-upload dialog and closes the Library picker`,
                  }),
                ],
              }),
            })),
      (t[95] = s),
      (t[96] = A),
      (t[97] = ge),
      (t[98] = Si))
    : (Si = t[98]);
  let Ci =
      O === `grid`
        ? `grid min-h-full grid-cols-1 gap-3 py-2 sm:grid-cols-2 lg:grid-cols-3`
        : `flex min-h-full flex-col gap-0.5 py-2`,
    wi = Q
      ? (0, G.jsx)(Tn, {
          count: Hr,
          loadingLabel: (0, G.jsx)(u, {
            id: `libraryPicker.loading`,
            defaultMessage: `Loading recent files…`,
            description: `Screen-reader-only status announced in the Add from library dialog while recent Library files or search results are loading. The audience is an end user using assistive technology. Keep this as a short, neutral status with no placeholders or formatting.`,
          }),
          viewMode: O,
        })
      : null,
    Ti = zr
      ? (0, G.jsx)(ke, {
          title: j
            ? (0, G.jsx)(u, {
                id: `libraryPicker.error.title.space`,
                defaultMessage: `Unable to load files`,
                description: `Short error-state heading shown to an end user when the Add from space dialog cannot load any files. Keep the tone neutral and concise.`,
              })
            : (0, G.jsx)(u, {
                id: `libraryPicker.error.title`,
                defaultMessage: `Unable to load Library files`,
                description: `Short error-state heading shown to an end user when the Add from library dialog cannot load any files. Keep the tone neutral and concise.`,
              }),
          description: (0, G.jsx)(u, {
            id: `libraryPicker.error.description`,
            defaultMessage: `Try again in a moment`,
            description: `Brief recovery guidance shown below the error heading when the Add from library dialog cannot load files. It reassures the end user that retrying shortly may work.`,
          }),
          actions: (0, G.jsx)(n, {
            color: `outline`,
            onClick: () => {
              Mr();
            },
            children: (0, G.jsx)(u, {
              id: `libraryPicker.error.retry`,
              defaultMessage: `Retry`,
              description: `Short button label in the Add from library error state. Activating it retries loading Library files for the end user.`,
            }),
          }),
        })
      : null,
    Ei;
  t[99] !== H.length || t[100] !== Br
    ? ((Ei = Br
        ? (0, G.jsx)(`div`, {
            className: `col-span-full flex min-h-60 flex-1 items-center justify-center px-0 py-6 text-sm text-tertiary`,
            children:
              H.length > 0
                ? (0, G.jsx)(u, {
                    id: `libraryPicker.empty.searchTitle`,
                    defaultMessage: `No matching files`,
                    description: `Concise empty-state message shown to an end user when a search in the Add from library dialog returns no matching files.`,
                  })
                : (0, G.jsx)(u, {
                    id: `libraryPicker.empty.title`,
                    defaultMessage: `No recent files yet`,
                    description: `Concise empty-state message shown to an end user when the Add from library dialog has no recent files to display.`,
                  }),
          })
        : null),
      (t[99] = H.length),
      (t[100] = Br),
      (t[101] = Ei))
    : (Ei = t[101]);
  let Di = Vr
      ? (0, G.jsxs)(G.Fragment, {
          children: [
            Ir.map((e, t) => {
              let n = Un.has(e.id),
                r = Mn(e, bt),
                i = e.kind === `directory` ? e.name : Nn(e, M),
                a = Pn(M, i, F(e.id), r),
                o =
                  A ||
                  Jn(e) ||
                  (!n &&
                    Y.filter((t) => t.kind === e.kind).length >=
                      10 - (e.kind === `directory` ? (D?.folderIds.size ?? 0) : (D?.sharedFileCount ?? 0))),
                s = () => {
                  if (o) return;
                  let t = new Map(Un);
                  (t.has(e.id)
                    ? t.delete(e.id)
                    : (Se === `single` && (t.clear(), K(new Map())), t.set(e.id, e)),
                    q(t),
                    oi(
                      [e],
                      Se === `single` ? [] : X,
                      [...t.values()].filter((e) => !Jn(e) && Yn(e)),
                      e,
                    ));
                };
              return O === `grid`
                ? (0, G.jsx)(
                    kn,
                    { accessibleName: a, accountLabel: r, disabled: o, file: e, selected: n, onToggle: s },
                    e.id,
                  )
                : (0, G.jsx)(
                    We,
                    {
                      ariaCurrent: n || void 0,
                      ariaDescribedBy: `${St}-item-${t}`,
                      ariaLabel: a,
                      compactSecondLine: !0,
                      density: `row`,
                      icon:
                        e.kind === `directory` ? (0, G.jsx)(On, { folder: e }) : (0, G.jsx)(Dn, { file: e }),
                      isDisabled: o,
                      isSelected: n,
                      rightText: n ? (0, G.jsx)(c, {}) : null,
                      rightTextPosition: `center`,
                      secondLine:
                        e.kind === `directory`
                          ? (0, G.jsx)(An, { id: `${St}-item-${t}`, accountLabel: r, folder: e })
                          : (0, G.jsx)(jn, { id: `${St}-item-${t}`, accountLabel: r, file: e }),
                      title: i,
                      onSelect: s,
                    },
                    e.id,
                  );
            }),
            Fr?.map((e, t) => {
              let n = sr.has(e.id),
                r = Mn(e, bt),
                i = Nn(e, M),
                a = Pn(M, i, F(e.id), r);
              return O === `grid`
                ? (0, G.jsx)(
                    kn,
                    {
                      accessibleName: a,
                      accountLabel: r,
                      disabled: A,
                      file: e,
                      selected: n,
                      onToggle: () => si(e),
                    },
                    e.id,
                  )
                : (0, G.jsx)(
                    We,
                    {
                      ariaCurrent: n || void 0,
                      ariaDescribedBy: `${St}-file-${t}`,
                      ariaLabel: a,
                      compactSecondLine: !0,
                      density: `row`,
                      hasInteractiveContent: !0,
                      icon: (0, G.jsx)(Dn, { file: e }),
                      isDisabled: A,
                      isSelected: n,
                      rightText: (0, G.jsx)(`span`, {
                        className: ue(
                          `relative flex size-5 shrink-0 items-center justify-center`,
                          !n && `opacity-0`,
                          !n && !A && `group-hover:opacity-100 group-focus-within:opacity-100`,
                        ),
                        children: n
                          ? (0, G.jsx)(ne, {
                              className: `pointer-events-auto`,
                              "aria-label": M.formatMessage(Bn.selectFile, { fileDescription: a }),
                              checked: !0,
                              disabled: A,
                              variant: `overlay`,
                              onCheckedChange: () => si(e),
                            })
                          : (0, G.jsx)(`span`, {
                              "aria-hidden": !0,
                              className: `size-5 rounded-full ring-1 ring-border ring-inset`,
                            }),
                      }),
                      rightTextPosition: `center`,
                      secondLine: (0, G.jsx)(jn, { id: `${St}-file-${t}`, accountLabel: r, file: e }),
                      title: i,
                      onSelect: () => si(e),
                    },
                    e.id,
                  );
            }),
            Dr && Lr > 0
              ? (0, G.jsxs)(`div`, {
                  className: `col-span-full flex items-center justify-center gap-2 p-3 text-sm text-chart-red`,
                  children: [
                    (0, G.jsx)(u, {
                      id: `libraryPicker.inlineError`,
                      defaultMessage: `Some results may be stale`,
                      description: `Short inline warning shown to an end user when a later page of results fails to load in the Add from library dialog, while already loaded files remain visible.`,
                    }),
                    (0, G.jsx)(n, {
                      color: `outline`,
                      disabled: kr,
                      size: `toolbar`,
                      onClick: () => {
                        Mr();
                      },
                      children: (0, G.jsx)(u, {
                        id: `libraryPicker.inlineErrorRetry`,
                        defaultMessage: `Retry`,
                        description: `Short button label beside the pagination warning in the Add from library dialog. Activating it retries loading more file results.`,
                      }),
                    }),
                  ],
                })
              : null,
            (0, G.jsx)(xt, {
              hasNextPage: Ar && !Dr,
              isFetchingNextPage: kr,
              onLoadNextPage: () => {
                jr();
              },
            }),
          ],
        })
      : null,
    Oi;
  t[102] !== Ci || t[103] !== wi || t[104] !== Ti || t[105] !== Ei || t[106] !== Di
    ? ((Oi = (0, G.jsxs)(`div`, { className: Ci, children: [wi, Ti, Ei, Di] })),
      (t[102] = Ci),
      (t[103] = wi),
      (t[104] = Ti),
      (t[105] = Ei),
      (t[106] = Di),
      (t[107] = Oi))
    : (Oi = t[107]);
  let ki;
  t[108] !== Q || t[109] !== Oi
    ? ((ki = (0, G.jsx)(`div`, {
        className: `flex min-h-0 flex-1 flex-col`,
        children: (0, G.jsx)(`div`, {
          "aria-busy": Q,
          className: `min-h-0 flex-1 overflow-y-auto px-5`,
          children: Oi,
        }),
      })),
      (t[108] = Q),
      (t[109] = Oi),
      (t[110] = ki))
    : (ki = t[110]);
  let Ai;
  t[111] !== k ||
  t[112] !== A ||
  t[113] !== M ||
  t[114] !== Z ||
  t[115] !== or ||
  t[116] !== oi ||
  t[117] !== $n ||
  t[118] !== X ||
  t[119] !== Y ||
  t[120] !== K ||
  t[121] !== q
    ? ((Ai =
        $n > 0
          ? (0, G.jsxs)(ve, {
              className: `px-5 pb-5`,
              expandSingleButton: !1,
              children: [
                (0, G.jsx)(`span`, {
                  "aria-live": `polite`,
                  className: `me-auto text-sm text-secondary`,
                  children: (0, G.jsx)(u, {
                    id: `libraryPicker.selectedCount`,
                    defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                    description: `Compact status in the Add from library dialog footer showing how many files the end user selected. {count} is the integer number of selected Library files and controls pluralization.`,
                    values: { count: $n },
                  }),
                }),
                (0, G.jsx)(n, {
                  color: `ghost`,
                  type: `button`,
                  onClick: () => {
                    (oi([...X, ...Y], [], []), K(new Map()), q(new Map()));
                  },
                  children: (0, G.jsx)(u, {
                    id: `libraryPicker.cancelSelection`,
                    defaultMessage: `Cancel`,
                    description: `Secondary button label in the Add from library dialog footer. Activating it clears every selected file without closing the dialog.`,
                  }),
                }),
                (0, G.jsx)(ye, {
                  tooltipContent: Z ? (0, G.jsx)(u, { ...Bn.attachmentLimit, values: { max: or } }) : void 0,
                  children: (0, G.jsx)(`span`, {
                    role: Z ? `button` : void 0,
                    "aria-disabled": Z || void 0,
                    tabIndex: Z ? 0 : void 0,
                    "aria-label": Z ? M.formatMessage(Bn.attachmentLimit, { max: or }) : void 0,
                    children: (0, G.jsxs)(n, {
                      "aria-hidden": Z || void 0,
                      color: `primary`,
                      size: `medium`,
                      disabled: A || Z,
                      type: `submit`,
                      children: [
                        k === `page`
                          ? (0, G.jsx)(u, {
                              id: `libraryPicker.addToPage`,
                              defaultMessage: `Add to page`,
                              description: `Primary button label in the Library picker for adding the selected file to the current Page`,
                            })
                          : null,
                        k === `project`
                          ? (0, G.jsx)(u, {
                              id: `libraryPicker.addToProject`,
                              defaultMessage: `Add to project`,
                              description: `Primary button label in the Add from library dialog footer. Activating it adds all selected Library files as sources in the current ChatGPT project.`,
                            })
                          : null,
                        k === `chat`
                          ? (0, G.jsx)(u, {
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
      (t[111] = k),
      (t[112] = A),
      (t[113] = M),
      (t[114] = Z),
      (t[115] = or),
      (t[116] = oi),
      (t[117] = $n),
      (t[118] = X),
      (t[119] = Y),
      (t[120] = K),
      (t[121] = q),
      (t[122] = Ai))
    : (Ai = t[122]);
  let ji;
  return (
    t[123] !== ui ||
    t[124] !== ni ||
    t[125] !== di ||
    t[126] !== xi ||
    t[127] !== Si ||
    t[128] !== ki ||
    t[129] !== Ai
      ? ((ji = (0, G.jsxs)(ui, {
          as: `form`,
          className: `h-[560px] gap-4`,
          size: `tall`,
          variant: `chatgpt`,
          onSubmit: ni,
          children: [di, xi, Si, ki, Ai],
        })),
        (t[123] = ui),
        (t[124] = ni),
        (t[125] = di),
        (t[126] = xi),
        (t[127] = Si),
        (t[128] = ki),
        (t[129] = Ai),
        (t[130] = ji))
      : (ji = t[130]),
    ji
  );
}
function rn(e) {
  return e.id;
}
function an(e) {
  return e.kind === `directory`;
}
function on(e) {
  return e.id;
}
function sn(e) {
  return e.kind === `file`;
}
function cn(e) {
  return e.id;
}
function ln(e) {
  return e.externalAccountKey;
}
function un(e) {
  return e.id;
}
function dn(e) {
  return e.partialResults === !0;
}
function fn(e) {
  return e.items;
}
function pn(e) {
  return e.kind === `file` ? [e.file] : [];
}
function mn(e) {
  return e.items;
}
function hn(e) {
  return e.cursor ?? void 0;
}
function gn(e) {
  return e.cursor == null ? void 0 : { cursor: e.cursor, queryId: e.searchQueryId };
}
function _n(e) {
  return e.kind === `file` ? [e.file] : [];
}
function vn(e) {
  return { kind: `file`, file: e };
}
function yn(e) {
  return { kind: `file`, file: e };
}
function bn(e) {
  return e.id;
}
function xn(e) {
  let { status: t } = e;
  return t !== `error`;
}
function Sn(e) {
  return e.kind === `file`;
}
function Cn() {
  return new Map();
}
function wn() {
  return new Map();
}
function Tn(e) {
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
    t[2] === n ? (i = t[3]) : ((i = Array.from({ length: n }).map(En)), (t[2] = n), (t[3] = i));
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
      : ((o = (0, G.jsx)(Ye, { density: `row`, icon: a, loadingLabel: r })), (t[8] = r), (t[9] = o)),
    o
  );
}
function En(e, t) {
  return (0, G.jsx)(
    St,
    { className: `aspect-square w-full rounded-2xl`, "aria-hidden": !0, variant: `prominent` },
    `library-picker-grid-skeleton-${t}`,
  );
}
function Dn(e) {
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
    ? ((c = (0, G.jsx)(Tt, {
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
      ? ((d = (0, G.jsx)(B, { className: `size-8 shrink-0 rounded-lg object-cover`, file: n, fallback: u })),
        (t[15] = n),
        (t[16] = u),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
function On(e) {
  let t = (0, U.c)(7),
    { folder: n } = e,
    r;
  t[0] === n.id ? (r = t[1]) : ((r = F(n.id)), (t[0] = n.id), (t[1] = r));
  let i = r,
    a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, G.jsx)(k, {})), (t[2] = a)) : (a = t[2]);
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
function kn(e) {
  let t = (0, U.c)(60),
    { accessibleName: n, accountLabel: r, disabled: a, file: o, selected: s, onToggle: c } = e,
    l = te(),
    d = `kind` in o && o.kind === `directory`,
    f = `name` in o ? o.name : o.file_name,
    p;
  t[0] === o.id ? (p = t[1]) : ((p = F(o.id)), (t[0] = o.id), (t[1] = p));
  let m = p,
    h = o.mime_type ?? void 0,
    g;
  t[2] !== f || t[3] !== h
    ? ((g = _e({ fileName: f, mimeType: h })), (t[2] = f), (t[3] = h), (t[4] = g))
    : (g = t[4]);
  let _ = g,
    v;
  t[5] !== o || t[6] !== f || t[7] !== d || t[8] !== l
    ? ((v = d ? f : Nn(o, l)), (t[5] = o), (t[6] = f), (t[7] = d), (t[8] = l), (t[9] = v))
    : (v = t[9]);
  let y = v,
    ee;
  t[10] !== n || t[11] !== l
    ? ((ee = l.formatMessage(Bn.selectFile, { fileDescription: n })), (t[10] = n), (t[11] = l), (t[12] = ee))
    : (ee = t[12]);
  let b = ee,
    re = s ? `border-transparent bg-primary-soft-active` : `border-subtle hover:bg-primary-ghost-hover`,
    x;
  t[13] === re
    ? (x = t[14])
    : ((x = ue(
        `relative block size-full cursor-interaction overflow-hidden rounded-2xl border bg-surface-elevated text-start shadow-card outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface`,
        re,
      )),
      (t[13] = re),
      (t[14] = x));
  let S;
  t[15] === y
    ? (S = t[16])
    : ((S = (0, G.jsx)(`span`, {
        className: `absolute inset-x-4 top-4 line-clamp-2 text-sm leading-5 font-medium [overflow-wrap:anywhere] break-words`,
        children: y,
      })),
      (t[15] = y),
      (t[16] = S));
  let ie;
  t[17] !== o.cloud_doc_url ||
  t[18] !== o.file_extension ||
  t[19] !== o.id ||
  t[20] !== o.mime_type ||
  t[21] !== f ||
  t[22] !== d
    ? ((ie = (0, G.jsx)(`span`, {
        className: `absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center`,
        children: d
          ? (0, G.jsx)(k, {})
          : (0, G.jsx)(i, {
              className: `size-10`,
              fileExtension: o.file_extension,
              fileName: f,
              mimeType: o.mime_type ?? void 0,
              mountedLibraryFileId: o.id,
              sourceUrl: o.cloud_doc_url ?? void 0,
              size: 32,
            }),
      })),
      (t[17] = o.cloud_doc_url),
      (t[18] = o.file_extension),
      (t[19] = o.id),
      (t[20] = o.mime_type),
      (t[21] = f),
      (t[22] = d),
      (t[23] = ie))
    : (ie = t[23]);
  let ae;
  t[24] !== _ || t[25] !== d
    ? ((ae = d
        ? (0, G.jsx)(u, {
            id: `libraryPicker.folderType`,
            defaultMessage: `Folder`,
            description: `Type label for a shared folder in the Add from library picker`,
          })
        : _.label),
      (t[24] = _),
      (t[25] = d),
      (t[26] = ae))
    : (ae = t[26]);
  let oe;
  t[27] === ae
    ? (oe = t[28])
    : ((oe = (0, G.jsx)(`span`, {
        className: `absolute inset-x-4 bottom-4 truncate pe-8 text-xs leading-4 text-tertiary`,
        children: ae,
      })),
      (t[27] = ae),
      (t[28] = oe));
  let se;
  t[29] !== oe || t[30] !== S || t[31] !== ie
    ? ((se = (0, G.jsxs)(G.Fragment, { children: [S, ie, oe] })),
      (t[29] = oe),
      (t[30] = S),
      (t[31] = ie),
      (t[32] = se))
    : (se = t[32]);
  let ce;
  t[33] !== o || t[34] !== se
    ? ((ce = (0, G.jsx)(B, { className: `absolute inset-0 size-full object-cover`, file: o, fallback: se })),
      (t[33] = o),
      (t[34] = se),
      (t[35] = ce))
    : (ce = t[35]);
  let le;
  t[36] === s
    ? (le = t[37])
    : ((le = s
        ? (0, G.jsx)(`span`, {
            className: `pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-text ring-inset`,
          })
        : null),
      (t[36] = s),
      (t[37] = le));
  let C;
  t[38] !== n || t[39] !== a || t[40] !== c || t[41] !== s || t[42] !== ce || t[43] !== le || t[44] !== x
    ? ((C = (0, G.jsxs)(`button`, {
        "aria-label": n,
        "aria-pressed": s,
        className: x,
        disabled: a,
        type: `button`,
        onClick: c,
        children: [ce, le],
      })),
      (t[38] = n),
      (t[39] = a),
      (t[40] = c),
      (t[41] = s),
      (t[42] = ce),
      (t[43] = le),
      (t[44] = x),
      (t[45] = C))
    : (C = t[45]);
  let w;
  t[46] !== a || t[47] !== c || t[48] !== m || t[49] !== b || t[50] !== s
    ? ((w = (0, G.jsx)(`div`, {
        className: `pointer-events-none absolute inset-px`,
        children: (0, G.jsx)(`div`, {
          className: `absolute end-4 bottom-4 z-10 grid size-5 place-items-center`,
          children: s
            ? (0, G.jsx)(`div`, {
                className: `pointer-events-auto relative flex size-5 items-center justify-center`,
                children: (0, G.jsx)(ne, {
                  "aria-label": b,
                  checked: !0,
                  disabled: a,
                  variant: `overlay`,
                  onCheckedChange: c,
                }),
              })
            : (0, G.jsxs)(G.Fragment, {
                children: [
                  m == null
                    ? null
                    : (0, G.jsx)(`span`, {
                        className: ue(
                          `col-start-1 row-start-1 flex size-5 items-center justify-center`,
                          !a && `group-hover:opacity-0 group-focus-within:opacity-0`,
                        ),
                        children: (0, G.jsx)(Ht, { provider: m, size: `cardBadge` }),
                      }),
                  (0, G.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: ue(
                      `col-start-1 row-start-1 size-5 rounded-full opacity-0 ring-1 ring-border ring-inset`,
                      !a && `group-hover:opacity-100 group-focus-within:opacity-100`,
                    ),
                  }),
                ],
              }),
        }),
      })),
      (t[46] = a),
      (t[47] = c),
      (t[48] = m),
      (t[49] = b),
      (t[50] = s),
      (t[51] = w))
    : (w = t[51]);
  let T;
  t[52] !== C || t[53] !== w
    ? ((T = (0, G.jsxs)(`div`, { className: `group relative aspect-square min-w-0`, children: [C, w] })),
      (t[52] = C),
      (t[53] = w),
      (t[54] = T))
    : (T = t[54]);
  let E;
  t[55] === r
    ? (E = t[56])
    : ((E =
        r == null
          ? null
          : (0, G.jsx)(`div`, {
              className: `truncate ps-1 pt-2 text-xs text-secondary`,
              title: r,
              children: r,
            })),
      (t[55] = r),
      (t[56] = E));
  let D;
  return (
    t[57] !== T || t[58] !== E
      ? ((D = (0, G.jsxs)(`div`, { className: `min-w-0`, children: [T, E] })),
        (t[57] = T),
        (t[58] = E),
        (t[59] = D))
      : (D = t[59]),
    D
  );
}
function An(e) {
  let t = (0, U.c)(10),
    { id: n, accountLabel: r, folder: i } = e,
    a;
  if (r == null) {
    let e;
    (t[0] === i.display_path
      ? (e = t[1])
      : ((e =
          i.display_path ||
          (0, G.jsx)(u, {
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
      ? ((e = (0, G.jsx)(u, {
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
      : ((e = (0, G.jsx)(u, {
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
function jn(e) {
  let t = (0, U.c)(9),
    { id: n, accountLabel: r, file: i } = e,
    a = te(),
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
            (0, G.jsx)(u, {
              defaultMessage: `—`,
              description: `Placeholder shown in the Add from library dialog when a file has no upload date. This is a single em dash with no placeholders or formatting.`,
              id: `library.filePicker.missingUploadDate`,
            }))
          : (0, G.jsx)(u, {
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
function Mn(e, t) {
  let n = F(e.id);
  return n == null ||
    n === `unknown` ||
    new Set(
      t
        ?.filter((e) => e.connector_id === lt(n) && e.auth_status === `ACTIVE`)
        .map((e) => he(e.owner_profile?.id))
        .filter((e) => e != null),
    ).size < 2
    ? null
    : P(e.external_account, n);
}
function Nn(e, t) {
  let n = `name` in e ? e.name : e.file_name;
  if (e.library_artifact_type != null) {
    let r = Ie(n, e.library_artifact_type, t);
    if (r !== n) return r;
  }
  return y(n, e.mime_type);
}
function Pn(e, t, n, r) {
  let i = Ve(n);
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
var U, Fn, W, G, In, Ln, Rn, zn, Bn;
function Vn() {
  return (Vn = e(() => {
    ((U = Se()),
      h(),
      D(),
      p(),
      x(),
      A(),
      S(),
      (Fn = t(O(), 1)),
      _(),
      (W = Te()),
      T(),
      N(),
      at(),
      L(),
      nt(),
      be(),
      l(),
      xe(),
      C(),
      ee(),
      ft(),
      st(),
      mt(),
      Et(),
      De(),
      Dt(),
      ce(),
      E(),
      Pe(),
      Ft(),
      Fe(),
      Ne(),
      I(),
      qt(),
      Bt(),
      rt(),
      Je(),
      Me(),
      Qe(),
      z(),
      Ze(),
      H(),
      Ut(),
      It(),
      kt(),
      M(),
      je(),
      Ce(),
      $e(),
      Re(),
      s(),
      tt(),
      Nt(),
      Pt(),
      (G = j()),
      (In = me(a, ({ scope: e }) => R(e))),
      (Ln = 25),
      (Rn = 6),
      (zn = 3),
      (Bn = r({
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
Vn();
export { tn as LibraryFilePickerDialog };
//# sourceMappingURL=library-file-picker-dialog-content-8ac123027b9d.js.map
