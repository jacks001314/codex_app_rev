import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $z as n,
  AO as r,
  CO as i,
  CS as a,
  Cot as o,
  Dz as s,
  Fat as c,
  IDt as l,
  Ixt as ee,
  Kat as te,
  NV as ne,
  Pat as u,
  Pxt as re,
  Rot as d,
  TJ as f,
  TO as p,
  USt as ie,
  VDt as ae,
  Vxt as m,
  Xot as oe,
  Yot as h,
  eU as se,
  gE as ce,
  hot as le,
  iB as ue,
  jDt as g,
  kz as _,
  lot as v,
  qat as y,
  rB as de,
  t3 as fe,
  tE as pe,
  tU as me,
  vzt as b,
  wot as x,
  xMt as he,
  yzt as S,
  zSt as ge,
  znt as _e,
  zot as ve,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as C,
  Cb as w,
  Sb as ye,
  XO as be,
  YO as T,
  ck as E,
  eDr as xe,
  eur as Se,
  lk as Ce,
  nDr as we,
  xb as Te,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ee, t as De } from "./use-app-connect-flow-7088479fda99.js";
import { a as Oe, n as D, o as ke, r as Ae, t as je } from "./download-submenu-2fee9f2333f7.js";
import { n as O, t as Me } from "./artifact-feedback-button-45141c7a2ec4.js";
function Ne(e) {
  let t = (0, Pe.c)(6),
    { hostId: n, kind: r, title: i } = e,
    a = we(`2587877334`),
    o = m(be),
    s;
  return (
    t[0] !== a || t[1] !== o || t[2] !== n || t[3] !== r || t[4] !== i
      ? ((s =
          a && o
            ? (0, Fe.jsx)(Me, {
                artifacts: [
                  {
                    allowArtifactAttachment: !1,
                    artifactType: r === `presentation` ? `slides` : `spreadsheet`,
                    fileFormat: r === `presentation` ? `pptx` : `xlsx`,
                    label: i,
                    path: null,
                  },
                ],
                fileSizeBytes: null,
                hostId: n,
                variant: `menu`,
              })
            : null),
        (t[0] = a),
        (t[1] = o),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
var Pe, Fe;
function k() {
  return (k = e(() => {
    ((Pe = b()), re(), T(), xe(), O(), (Fe = he()));
  }))();
}
function Ie(e) {
  let t = (0, Be.c)(11),
    {
      analyticsClickSource: n,
      artifactRef: r,
      downloadId: i,
      exportFile: a,
      editorMenuItems: o,
      hostId: s,
      kind: c,
      threadId: l,
      title: ee,
      variant: te,
    } = e,
    ne = te === void 0 ? `menu` : te;
  if (!Ce(s)) return null;
  let u;
  return (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== i ||
    t[3] !== o ||
    t[4] !== a ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l ||
    t[8] !== ee ||
    t[9] !== ne
      ? ((u = (0, M.jsx)(M.Fragment, {
          children: (0, M.jsx)(A, {
            analyticsClickSource: n,
            artifactRef: r,
            downloadId: i,
            exportFile: a,
            editorMenuItems: o,
            hostId: s,
            kind: c,
            threadId: l,
            title: ee,
            variant: ne,
          }),
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o),
        (t[4] = a),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = ee),
        (t[9] = ne),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function A(e) {
  let r = (0, Be.c)(150),
    {
      analyticsClickSource: a,
      artifactRef: c,
      downloadId: re,
      exportFile: d,
      editorMenuItems: f,
      hostId: m,
      kind: h,
      threadId: g,
      title: _,
      variant: v,
    } = e,
    y = ee(o),
    fe = (0, j.useId)(),
    b = re ?? fe,
    x;
  r[0] === b ? (x = r[1]) : ((x = { mutationKey: [`artifact-download`, b] }), (r[0] = b), (r[1] = x));
  let he = ve(x) > 0,
    S = ae(),
    { platform: ge } = Se(),
    C = te?.artifactSessions,
    w;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = {
        queryKey: [`artifact-session-supports-native-open`],
        queryFn:
          C == null
            ? ie
            : (e) => {
                let { signal: t } = e;
                return _e(C.supportsNativeOpen(), t);
              },
        retry: !1,
        staleTime: u.INFINITE,
      }),
      (r[2] = w))
    : (w = r[2]);
  let { data: be } = oe(w),
    [T, E] = (0, j.useState)(!1),
    [xe, Ce] = (0, j.useState)(0),
    [we, De] = (0, j.useState)(!1),
    [D, ke] = (0, j.useState)(!1),
    O = he || we || D,
    Me;
  r[3] !== c || r[4] !== xe || r[5] !== g
    ? ((Me = [`artifact-session-native-open-targets`, g, c, xe]),
      (r[3] = c),
      (r[4] = xe),
      (r[5] = g),
      (r[6] = Me))
    : (Me = r[6]);
  let Pe = Me,
    Fe = (v === `menu` || (v === `download` && T)) && be === !0 && C != null,
    k;
  r[7] !== c || r[8] !== g
    ? ((k =
        C == null
          ? ie
          : (e) => {
              let { signal: t } = e;
              return _e(C.getNativeOpenTargets({ artifactRef: c, threadId: g }), t);
            }),
      (r[7] = c),
      (r[8] = g),
      (r[9] = k))
    : (k = r[9]);
  let Ie;
  r[10] !== Fe || r[11] !== k || r[12] !== Pe
    ? ((Ie = {
        enabled: Fe,
        gcTime: 0,
        queryKey: Pe,
        queryFn: k,
        refetchOnReconnect: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: u.ONE_MINUTE,
      }),
      (r[10] = Fe),
      (r[11] = k),
      (r[12] = Pe),
      (r[13] = Ie))
    : (Ie = r[13]);
  let { data: A, isError: Ve, isFetching: N, refetch: He } = oe(Ie),
    Ue = te?.workspaceFiles?.getDownloadsFolderIcon,
    P;
  r[14] !== T || r[15] !== v
    ? ((P = v !== `menu` || Ue == null || !T ? ie : () => Ue()), (r[14] = T), (r[15] = v), (r[16] = P))
    : (P = r[16]);
  let We;
  r[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = [`workspace-file-downloads`, `folder-icon`]), (r[17] = We))
    : (We = r[17]);
  let Ge;
  r[18] === P
    ? (Ge = r[19])
    : ((Ge = { queryFn: P, queryKey: We, staleTime: u.INFINITE }), (r[18] = P), (r[19] = Ge));
  let { data: Ke } = oe(Ge),
    qe;
  r[20] === m ? (qe = r[21]) : ((qe = { hostId: m }), (r[20] = m), (r[21] = qe));
  let {
      clearConnectingApp: Je,
      connectingApp: Ye,
      handleAppConnectOAuthStarted: Xe,
      handleConnectApp: Ze,
    } = Ee(qe),
    Qe;
  r[22] !== m || r[23] !== h || r[24] !== _
    ? ((Qe = (0, M.jsx)(Ne, { hostId: m, kind: h, title: _ })),
      (r[22] = m),
      (r[23] = h),
      (r[24] = _),
      (r[25] = Qe))
    : (Qe = r[25]);
  let F = Qe,
    I = h === `presentation` ? `pptx` : `xlsx`,
    $e;
  r[26] !== b || r[27] !== d || r[28] !== D || r[29] !== we || r[30] !== I || r[31] !== _ || r[32] !== v
    ? (($e =
        d === void 0
          ? null
          : (0, M.jsx)(je, {
              disabled: we || D,
              downloadId: b,
              format: I,
              variant: v === `download` ? `items` : `submenu`,
              exportFile:
                d == null
                  ? null
                  : async (e) => ({
                      bytes: await d(e),
                      fileName: `${_.replace(/\.(pptx|xlsx|pdf)$/i, ``)}.${e === `office` ? I : e}`,
                    }),
            })),
      (r[26] = b),
      (r[27] = d),
      (r[28] = D),
      (r[29] = we),
      (r[30] = I),
      (r[31] = _),
      (r[32] = v),
      (r[33] = $e))
    : ($e = r[33]);
  let L = $e;
  if (C == null || be !== !0) {
    if (v === `title`) {
      let e;
      return (
        r[34] !== f || r[35] !== F || r[36] !== T || r[37] !== h || r[38] !== _
          ? ((e = (0, M.jsx)(pe, {
              artifactKind: h,
              editorMenuItems: f,
              title: _,
              open: T,
              onOpenChange: E,
              children: F,
            })),
            (r[34] = f),
            (r[35] = F),
            (r[36] = T),
            (r[37] = h),
            (r[38] = _),
            (r[39] = e))
          : (e = r[39]),
        e
      );
    }
    if (v === `download` && L != null) {
      let e;
      return (
        r[40] !== O || r[41] !== T || r[42] !== L
          ? ((e = (0, M.jsx)(Te, { pending: O, open: T, onOpenChange: E, downloadItems: L })),
            (r[40] = O),
            (r[41] = T),
            (r[42] = L),
            (r[43] = e))
          : (e = r[43]),
        e
      );
    }
    return null;
  }
  let R = A?.status === `ready` ? A.targets : null,
    et = A?.status === `ready` ? A.fileManagerIcon : null,
    tt = Ve || A?.status === `failed`,
    nt = !N && (tt || R?.length === 0),
    rt;
  r[44] !== S || r[45] !== ge ? ((rt = ze(S, ge)), (r[44] = S), (r[45] = ge), (r[46] = rt)) : (rt = r[46]);
  let it = rt,
    at;
  r[47] !== c || r[48] !== S || r[49] !== O || r[50] !== y || r[51] !== g
    ? ((at = async (e) => {
        if (O) return;
        De(!0);
        let t = await _e(C.performNativeFileAction({ artifactRef: c, threadId: g, action: e })).catch(Re);
        if ((De(!1), t?.status === `completed`)) {
          e.type === `download-copy` &&
            y
              .get(le)
              .success(
                S.formatMessage({
                  id: `localConversation.endResource.downloadCopy.success`,
                  defaultMessage: `Saved a copy to Downloads`,
                  description: `Success message after copying an artifact to the Downloads folder`,
                }),
              );
          return;
        }
        switch ((t?.reason === `target-unavailable` && Ce(Le), e.type)) {
          case `download-copy`:
            y.get(le).danger(
              S.formatMessage({
                id: `localConversation.endResource.downloadCopy.failure`,
                defaultMessage: `Could not download a copy`,
                description: `Error message after an artifact could not be copied to the Downloads folder`,
              }),
              { errorAnalytics: { toastId: `localConversation.endResource.downloadCopy.failure` } },
            );
            return;
          case `show-in-folder`:
            y.get(le).danger(
              S.formatMessage({
                id: `artifactSession.openIn.showInFolder.failure`,
                defaultMessage: `Could not show this artifact in the file manager`,
                description: `Error message after a live Artifact Session could not be revealed in the system file manager`,
              }),
              { errorAnalytics: { toastId: `artifactSession.openIn.showInFolder.failure` } },
            );
            return;
          case `open`:
            y.get(le).danger(
              S.formatMessage({
                id: `artifactSession.openIn.failed`,
                defaultMessage: `Couldn’t open in the selected app`,
                description: `Error toast shown when a live Artifact Session cannot be opened in a native desktop app`,
              }),
              { errorAnalytics: { toastId: `artifactSession.openIn.failed` } },
            );
        }
      }),
      (r[47] = c),
      (r[48] = S),
      (r[49] = O),
      (r[50] = y),
      (r[51] = g),
      (r[52] = at))
    : (at = r[52]);
  let z = at,
    ot;
  r[53] !== c || r[54] !== g
    ? ((ot = async () => {
        let e = await _e(C.readNativeSnapshot({ artifactRef: c, threadId: g }));
        if (e.status === `failed`) throw Error(`Artifact Session snapshot materialization failed`);
        return { bytes: e.bytes, contentType: e.contentType, fileName: e.fileName };
      }),
      (r[53] = c),
      (r[54] = g),
      (r[55] = ot))
    : (ot = r[55]);
  let st = ot,
    ct;
  r[56] === v
    ? (ct = r[57])
    : ((ct = v === `menu` ? (0, M.jsx)(se, {}) : (0, M.jsx)(s, { icon: { 16: se, 20: me } })),
      (r[56] = v),
      (r[57] = ct));
  let lt = ct,
    ut = v === `download` ? `app` : `action`,
    B;
  r[58] === g
    ? (B = r[59])
    : ((B = { threadId: g, turnId: null, inputMessageId: null, messageId: null }), (r[58] = g), (r[59] = B));
  let dt = v === `menu` ? `sm` : `base`,
    ft;
  r[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = () => {
        E(!1);
      }),
      (r[60] = ft))
    : (ft = r[60]);
  let pt = `artifact-session:${c}`,
    V;
  r[61] !== a ||
  r[62] !== Ze ||
  r[63] !== m ||
  r[64] !== D ||
  r[65] !== h ||
  r[66] !== st ||
  r[67] !== ut ||
  r[68] !== B ||
  r[69] !== dt ||
  r[70] !== pt ||
  r[71] !== _
    ? ((V = (0, M.jsx)(Oe, {
        labelVariant: ut,
        analyticsClickSource: a,
        analyticsContext: B,
        handleConnectApp: Ze,
        hostId: m,
        iconSize: dt,
        isOpening: D,
        keepOpenWhileOpening: !0,
        onCloseDropdown: ft,
        onOpeningChange: ke,
        readUploadFile: st,
        sourceId: pt,
        targetType: h,
        title: _,
      })),
      (r[61] = a),
      (r[62] = Ze),
      (r[63] = m),
      (r[64] = D),
      (r[65] = h),
      (r[66] = st),
      (r[67] = ut),
      (r[68] = B),
      (r[69] = dt),
      (r[70] = pt),
      (r[71] = _),
      (r[72] = V))
    : (V = r[72]);
  let H;
  r[73] !== O || r[74] !== z || r[75] !== R || r[76] !== v
    ? ((H = R?.map((e) =>
        (0, M.jsx)(
          p.Item,
          {
            disabled: O,
            leftIcon: (0, M.jsx)(ce, {
              size: v === `menu` ? `sm` : `base`,
              children: (0, M.jsx)(`img`, { alt: ``, className: `size-full`, src: e.icon }),
            }),
            onSelect: () => {
              z({ type: `open`, targetId: e.id });
            },
            children: (0, M.jsx)(l, {
              id: `localConversation.endResource.nativeAppWithDefault.label`,
              defaultMessage: `{target}{isDefault, select, true { (Default)} other {}}`,
              description: `Native app name in a resource card's Open menu, with a suffix when it is the system default`,
              values: { isDefault: e.default === !0, target: e.label },
            }),
          },
          e.id,
        ),
      )),
      (r[73] = O),
      (r[74] = z),
      (r[75] = R),
      (r[76] = v),
      (r[77] = H))
    : (H = r[77]);
  let U;
  r[78] !== T || r[79] !== N
    ? ((U =
        T && N
          ? (0, M.jsx)(p.Message, {
              compact: !0,
              children: (0, M.jsx)(l, {
                id: `localConversation.endResource.loadingAvailableApps`,
                defaultMessage: `Loading available apps…`,
                description: `Dropdown item shown while loading apps that can open a conversation resource`,
              }),
            })
          : null),
      (r[78] = T),
      (r[79] = N),
      (r[80] = U))
    : (U = r[80]);
  let W;
  r[81] !== N || r[82] !== R?.length
    ? ((W =
        R?.length === 0 && !N
          ? (0, M.jsx)(p.Message, {
              compact: !0,
              children: (0, M.jsx)(l, {
                id: `artifactSession.openIn.noAvailableApps`,
                defaultMessage: `No available apps`,
                description: `Empty state shown when no native apps can open a live Artifact Session`,
              }),
            })
          : null),
      (r[81] = N),
      (r[82] = R?.length),
      (r[83] = W))
    : (W = r[83]);
  let G;
  r[84] !== tt || r[85] !== N
    ? ((G =
        tt && !N
          ? (0, M.jsx)(p.Message, {
              compact: !0,
              role: `alert`,
              tone: `error`,
              children: (0, M.jsx)(l, {
                id: `artifactSession.openIn.loadTargetsFailed`,
                defaultMessage: `Couldn’t load available apps`,
                description: `Error shown when native apps for opening a live Artifact Session cannot be discovered`,
              }),
            })
          : null),
      (r[84] = tt),
      (r[85] = N),
      (r[86] = G))
    : (G = r[86]);
  let K;
  r[87] !== nt || r[88] !== He
    ? ((K = nt
        ? (0, M.jsx)(p.Item, {
            onSelect: (e) => {
              (e.preventDefault(), He());
            },
            children: (0, M.jsx)(l, {
              id: `artifactSession.openIn.retry`,
              defaultMessage: `Try again`,
              description: `Button that retries native app discovery for a live Artifact Session`,
            }),
          })
        : null),
      (r[87] = nt),
      (r[88] = He),
      (r[89] = K))
    : (K = r[89]);
  let mt = v === `menu` ? `sm` : `base`,
    q;
  r[90] !== et || r[91] !== lt
    ? ((q = et == null ? lt : (0, M.jsx)(`img`, { alt: ``, className: `size-full`, src: et })),
      (r[90] = et),
      (r[91] = lt),
      (r[92] = q))
    : (q = r[92]);
  let J;
  r[93] !== mt || r[94] !== q
    ? ((J = (0, M.jsx)(ce, { size: mt, children: q })), (r[93] = mt), (r[94] = q), (r[95] = J))
    : (J = r[95]);
  let Y;
  r[96] === z
    ? (Y = r[97])
    : ((Y = () => {
        z({ type: `show-in-folder` });
      }),
      (r[96] = z),
      (r[97] = Y));
  let X;
  r[98] !== O || r[99] !== it || r[100] !== J || r[101] !== Y
    ? ((X = (0, M.jsx)(p.Item, { disabled: O, leftIcon: J, onSelect: Y, children: it })),
      (r[98] = O),
      (r[99] = it),
      (r[100] = J),
      (r[101] = Y),
      (r[102] = X))
    : (X = r[102]);
  let ht;
  r[103] !== V || r[104] !== H || r[105] !== U || r[106] !== W || r[107] !== G || r[108] !== K || r[109] !== X
    ? ((ht = (0, M.jsxs)(M.Fragment, { children: [V, H, U, W, G, K, X] })),
      (r[103] = V),
      (r[104] = H),
      (r[105] = U),
      (r[106] = W),
      (r[107] = G),
      (r[108] = K),
      (r[109] = X),
      (r[110] = ht))
    : (ht = r[110]);
  let Z = ht,
    gt;
  r[111] !== Ke || r[112] !== O || r[113] !== z || r[114] !== v || r[115] !== L
    ? ((gt =
        v !== `menu` && L != null
          ? L
          : (0, M.jsx)(p.Item, {
              disabled: O,
              leftIcon: (0, M.jsxs)(ce, {
                size: v === `title` ? `base` : `sm`,
                children: [
                  v === `title` && (0, M.jsx)(s, { icon: { 16: de, 20: ue } }),
                  v !== `title` &&
                    (Ke == null
                      ? (0, M.jsx)(n, {})
                      : (0, M.jsx)(`img`, { alt: ``, className: `icon-sm`, src: Ke })),
                ],
              }),
              onSelect: () => {
                z({ type: `download-copy` });
              },
              children:
                v === `title`
                  ? (0, M.jsx)(l, {
                      id: `artifactSession.downloadTitleMenu`,
                      defaultMessage: `Download`,
                      description: `Title menu action for downloading the current live artifact`,
                    })
                  : (0, M.jsx)(l, {
                      id: `localConversation.endResource.downloadCopy`,
                      defaultMessage: `Download a copy`,
                      description: `Dropdown item for saving a separate copy of an artifact to Downloads`,
                    }),
            })),
      (r[111] = Ke),
      (r[112] = O),
      (r[113] = z),
      (r[114] = v),
      (r[115] = L),
      (r[116] = gt))
    : (gt = r[116]);
  let _t = gt,
    Q;
  if (v === `title`) {
    let e;
    (r[117] !== f || r[118] !== F || r[119] !== T || r[120] !== h || r[121] !== _
      ? ((e = (0, M.jsx)(pe, {
          artifactKind: h,
          editorMenuItems: f,
          title: _,
          open: T,
          onOpenChange: E,
          children: F,
        })),
        (r[117] = f),
        (r[118] = F),
        (r[119] = T),
        (r[120] = h),
        (r[121] = _),
        (r[122] = e))
      : (e = r[122]),
      (Q = e));
  } else if (v === `download`) {
    let e;
    r[123] !== I || r[124] !== z || r[125] !== _ || r[126] !== L
      ? ((e =
          L ?? (0, M.jsx)(ye, { fileName: `${_}.${I}`, onSelect: () => void z({ type: `download-copy` }) })),
        (r[123] = I),
        (r[124] = z),
        (r[125] = _),
        (r[126] = L),
        (r[127] = e))
      : (e = r[127]);
    let t;
    (r[128] !== O || r[129] !== T || r[130] !== Z || r[131] !== e
      ? ((t = (0, M.jsx)(Te, { pending: O, open: T, onOpenChange: E, downloadItems: e, openItems: Z })),
        (r[128] = O),
        (r[129] = T),
        (r[130] = Z),
        (r[131] = e),
        (r[132] = t))
      : (t = r[132]),
      (Q = t));
  } else {
    let e, n;
    r[133] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(l, {
          id: `artifactSession.openIn.menu`,
          defaultMessage: `Open in`,
          description: `Button that opens the menu of apps and export actions for a live artifact`,
        })),
        (n = (0, M.jsx)(ne, {})),
        (r[133] = e),
        (r[134] = n))
      : ((e = r[133]), (n = r[134]));
    let a;
    r[135] === O
      ? (a = r[136])
      : ((a = (0, M.jsxs)(t, {
          className: `pointer-events-auto shrink-0`,
          color: `outline`,
          size: `toolbar`,
          loading: O,
          children: [e, n],
        })),
        (r[135] = O),
        (r[136] = a));
    let o;
    (r[137] !== _t || r[138] !== T || r[139] !== Z || r[140] !== a
      ? ((o = (0, M.jsxs)(i, {
          align: `end`,
          surface: `opaque`,
          open: T,
          onOpenChange: E,
          triggerButton: a,
          children: [Z, _t],
        })),
        (r[137] = _t),
        (r[138] = T),
        (r[139] = Z),
        (r[140] = a),
        (r[141] = o))
      : (o = r[141]),
      (Q = o));
  }
  let $;
  r[142] !== Je || r[143] !== Ye || r[144] !== Xe || r[145] !== m
    ? (($ = Ye == null ? null : (0, M.jsx)(Ae, { app: Ye, hostId: m, onClose: Je, onOAuthStarted: Xe })),
      (r[142] = Je),
      (r[143] = Ye),
      (r[144] = Xe),
      (r[145] = m),
      (r[146] = $))
    : ($ = r[146]);
  let vt;
  return (
    r[147] !== Q || r[148] !== $
      ? ((vt = (0, M.jsxs)(M.Fragment, { children: [Q, $] })), (r[147] = Q), (r[148] = $), (r[149] = vt))
      : (vt = r[149]),
    vt
  );
}
function Le(e) {
  return e + 1;
}
function Re() {
  return null;
}
function ze(e, t) {
  switch (t) {
    case `macOS`:
      return e.formatMessage({
        id: `localConversation.endResource.showInFinder`,
        defaultMessage: `Show in Finder`,
        description: `Dropdown item for revealing a conversation resource in Finder`,
      });
    case `windows`:
      return e.formatMessage({
        id: `localConversation.endResource.showInFileExplorer`,
        defaultMessage: `Show in File Explorer`,
        description: `Dropdown item for revealing a conversation resource in File Explorer`,
      });
    case `linux`:
      return e.formatMessage({
        id: `localConversation.endResource.showInFileManager`,
        defaultMessage: `Show in File Manager`,
        description: `Dropdown item for revealing a conversation resource in the system file manager`,
      });
  }
}
var Be, j, M;
function Ve() {
  return (Ve = e(() => {
    ((Be = b()),
      ge(),
      d(),
      h(),
      re(),
      (j = S()),
      g(),
      De(),
      ke(),
      fe(),
      r(),
      f(),
      _(),
      v(),
      C(),
      y(),
      x(),
      c(),
      a(),
      w(),
      D(),
      E(),
      k(),
      (M = he()));
  }))();
}
export { Ve as n, Ie as t };
//# sourceMappingURL=file-actions-879c5ee21b99.js.map
