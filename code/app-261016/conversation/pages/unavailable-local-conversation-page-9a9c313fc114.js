import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  Apt as i,
  CCt as a,
  DB as o,
  FBt as s,
  Jbt as c,
  LNt as l,
  NSt as u,
  OB as d,
  OH as f,
  Opt as p,
  PBt as m,
  Qst as h,
  RFt as g,
  S3 as _,
  TY as v,
  UK as y,
  USt as b,
  Ust as x,
  VSt as S,
  Vrt as C,
  Vst as w,
  WK as T,
  XOt as E,
  Y3 as D,
  Z3 as O,
  ZSt as k,
  _S as A,
  aCt as j,
  ast as M,
  ck as N,
  e6 as P,
  gS as ee,
  iCt as te,
  ist as ne,
  nB as re,
  nCt as F,
  okt as I,
  qrt as L,
  rB as R,
  rk as z,
  sct as B,
  tCt as V,
  tJ as H,
  tk as ie,
  tkt as U,
  uH as W,
  vT as G,
  vst as K,
  x3 as q,
  yT as J,
  yst as Y,
  zFt as ae,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as X,
  $dt as oe,
  BCr as se,
  BHt as ce,
  CDr as le,
  CHt as ue,
  CIr as de,
  CTt as fe,
  DDr as pe,
  DSr as me,
  Der as he,
  Dgr as ge,
  ESr as _e,
  FBr as ve,
  FDr as ye,
  Fer as be,
  Fnt as xe,
  GVt as Se,
  H9n as Ce,
  HJ as we,
  HOn as Te,
  IBr as Ee,
  IHt as De,
  J2 as Oe,
  KBr as ke,
  KVt as Ae,
  MOr as je,
  Nkr as Me,
  OCn as Ne,
  OSr as Pe,
  Pkr as Fe,
  Q9n as Ie,
  Qdt as Le,
  RCr as Re,
  Rnt as ze,
  SHt as Be,
  SIr as Ve,
  SOn as He,
  TTt as Ue,
  UOn as We,
  VJ as Ge,
  V_t as Ke,
  X9n as qe,
  XEn as Je,
  XVt as Ye,
  Xnr as Xe,
  Xnt as Ze,
  YEn as Qe,
  YTr as $e,
  Ycr as et,
  Ynt as tt,
  Ysn as nt,
  Zdt as rt,
  Znr as it,
  Zsn as at,
  _Ht as ot,
  a9n as st,
  bHt as ct,
  bTt as lt,
  cer as ut,
  eer as dt,
  eft as ft,
  fCn as pt,
  gHt as mt,
  gSr as ht,
  hOn as gt,
  i9n as _t,
  ikr as vt,
  jSr as yt,
  j_t as bt,
  jgr as xt,
  kCn as St,
  ler as Ct,
  lkr as wt,
  mDr as Tt,
  mHt as Et,
  mOn as Dt,
  mSr as Ot,
  mwr as kt,
  ncr as At,
  nft as jt,
  nvr as Mt,
  oer as Nt,
  okr as Pt,
  ovr as Ft,
  pCn as It,
  pDr as Lt,
  q2 as Rt,
  rft as zt,
  s9n as Bt,
  tcr as Vt,
  ter as Ht,
  tft as Ut,
  tvr as Wt,
  vHt as Gt,
  vSr as Kt,
  wLr as qt,
  wOn as Jt,
  yHt as Yt,
  zCr as Xt,
  zOr as Zt,
  zRr as Qt,
} from "./app-initial-ad16eaadf81f.js";
import { Xt as $t, Yt as en, yh as tn } from "./app-primary-3e00728c2a4c.js";
import { n as nn, t as rn } from "./content-chat-surface-4e82aae84549.js";
import { n as an, t as on } from "./delete-archived-chats-dialog-26bed4eece2a.js";
import { n as sn, t as cn } from "./preview-footer-controls-5643864f8a3d.js";
import {
  a as ln,
  d as un,
  f as dn,
  n as fn,
  o as pn,
  p as mn,
  s as hn,
  u as gn,
} from "./local-conversation-thread-632d930bbfe2.js";
import { n as _n, t as vn } from "./pending-local-conversation-thread-737de6a09b8e.js";
import { n as yn, t as bn } from "./realtime-voice-launch-surface-61aa357789c3.js";
import { i as xn, n as Sn, r as Cn, t as wn } from "./side-chat-composer-4eb5d93ed4a2.js";
import { n as Tn, t as En } from "./lazy-room-view-c0e73cf69f4f.js";
import { r as Dn, t as On } from "./selection-composer-visibility-99cb54445fcd.js";
import { n as kn, t as An } from "./thread-scroll-layout-d113e24968c3.js";
import { n as jn, t as Mn } from "./notifications-2eb77f3d52ee.js";
function Nn(e) {
  let t = (0, Pn.c)(77),
    { conversationId: r, hostId: a } = e,
    s = n(h),
    c = F(Ce, r),
    l = F(Nt, r),
    u = te(jt),
    d;
  t[0] !== r || t[1] !== a || t[2] !== u
    ? ((d = u?.find((e) => {
        let { task: t } = e;
        return t.kind === `local` && t.hostId === a && t.thread.id === r;
      })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = u),
      (t[3] = d))
    : (d = t[3]);
  let f = d,
    p = te(zt),
    [m, g] = (0, Fn.useState)(null),
    _ = S(),
    v = b(),
    y;
  t[4] !== _.hash || t[5] !== _.pathname || t[6] !== _.search || t[7] !== _.state || t[8] !== v || t[9] !== s
    ? ((y = () => {
        (oe(s),
          v(
            { pathname: _.pathname, search: _.search, hash: _.hash },
            { replace: !0, state: { ..._.state, archivedConversationPreview: !1 } },
          ));
      }),
      (t[4] = _.hash),
      (t[5] = _.pathname),
      (t[6] = _.search),
      (t[7] = _.state),
      (t[8] = v),
      (t[9] = s),
      (t[10] = y))
    : (y = t[10]);
  let x = y,
    C,
    w;
  t[11] !== r || t[12] !== a || t[13] !== s
    ? ((C = () => {
        let e = s.get(zt);
        return e?.kind === `local` && e.hostId === a && e.thread.id === r ? Le(s, e) : void 0;
      }),
      (w = async (e) => {
        (e != null && a !== `durable` && (await fe(s, { conversationId: r, cwd: e, hostId: a })),
          await ve(s, a).unarchiveConversation(r, { useAppServerPins: s.get(Xe) }));
      }),
      (t[11] = r),
      (t[12] = a),
      (t[13] = s),
      (t[14] = C),
      (t[15] = w))
    : ((C = t[14]), (w = t[15]));
  let T;
  t[16] !== r || t[17] !== x || t[18] !== a || t[19] !== s
    ? ((T = (e, t, n) => {
        n?.(`restored`);
        let i = s.get(L).info((0, Z.jsx)(U, { ...Ge.unarchiveSuccessPlain }), {
          leading: (0, Z.jsx)(o, { "aria-hidden": !1, asset: q }),
          primaryAction: {
            label: (0, Z.jsx)(U, { ...Ge.viewNow }),
            onClick: () => {
              (i.close(), x());
            },
          },
          id: `unarchive-thread-${r}`,
        });
        s.queryClient.invalidateQueries({ queryKey: [`archived-threads`, a] });
      }),
      (t[16] = r),
      (t[17] = x),
      (t[18] = a),
      (t[19] = s),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] !== a || t[22] !== s
    ? ((E = (e, t, n) => {
        (n?.($e(e) ? `restored` : null),
          $e(e)
            ? (s.queryClient.invalidateQueries({ queryKey: [`archived-threads`, a] }),
              s
                .get(L)
                .danger((0, Z.jsx)(U, { ...Ge.openError }), {
                  errorAnalytics: { toastId: `localPreviewFooter.onError.openError` },
                }))
            : s
                .get(L)
                .danger(
                  (0, Z.jsx)(U, {
                    id: `localConversation.archived.previewUnarchiveError`,
                    defaultMessage: `Could not unarchive this chat`,
                    description: `Error shown when restoring an archived chat from the transcript footer fails`,
                  }),
                  { errorAnalytics: { toastId: `localConversation.archived.previewUnarchiveError` } },
                ));
      }),
      (t[21] = a),
      (t[22] = s),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== C || t[25] !== w || t[26] !== T || t[27] !== E
    ? ((D = { onMutate: C, mutationFn: w, onSuccess: T, onError: E }),
      (t[24] = C),
      (t[25] = w),
      (t[26] = T),
      (t[27] = E),
      (t[28] = D))
    : (D = t[28]);
  let { mutate: O, isPending: k } = Y(D),
    A;
  t[29] === s
    ? (A = t[30])
    : ((A = () => ({ accountId: s.get(Qt), visit: s.get(rt), location: s.get(et) })),
      (t[29] = s),
      (t[30] = A));
  let j;
  t[31] !== r || t[32] !== a || t[33] !== s
    ? ((j = () => ve(s, a).deleteArchivedConversation(r)), (t[31] = r), (t[32] = a), (t[33] = s), (t[34] = j))
    : (j = t[34]);
  let M;
  t[35] !== r || t[36] !== a || t[37] !== v || t[38] !== s
    ? ((M = async (e, t, n) => {
        if (s.get(Qt) !== n.accountId) return;
        if (!e.includes(r)) {
          s.get(L).danger((0, Z.jsx)(U, { ...Ge.deleteError }), {
            errorAnalytics: { toastId: `localPreviewFooter.onSuccess.deleteError` },
          });
          return;
        }
        if (
          (await s.queryClient.cancelQueries({ queryKey: [`archived-threads`, a] }),
          s.get(Qt) !== n.accountId)
        )
          return;
        (s.queryClient.setQueriesData({ queryKey: [`archived-threads`, a, `sidebar`] }, (t) =>
          t == null
            ? t
            : { ...t, pages: t.pages.map((t) => ({ ...t, data: t.data.filter((t) => !e.includes(t.id)) })) },
        ),
          g(null),
          s.get(L).success((0, Z.jsx)(U, { ...Ge.deleteSuccessPlain })));
        let i = s.get(zt);
        s.get(rt) === n.visit &&
          s.get(et) === n.location &&
          i?.kind === `local` &&
          i.hostId === a &&
          i.thread.id === r &&
          (s.set(zt, null),
          v(n.visit?.pathname === `/archive` ? n.visit : `/`, {
            replace: !0,
            state: n.visit?.pathname === `/archive` ? n.visit.state : null,
          }));
      }),
      (t[35] = r),
      (t[36] = a),
      (t[37] = v),
      (t[38] = s),
      (t[39] = M))
    : (M = t[39]);
  let N;
  t[40] === s
    ? (N = t[41])
    : ((N = (e, t, n) => {
        s.get(Qt) === n?.accountId &&
          s
            .get(L)
            .danger((0, Z.jsx)(U, { ...(i(e, `thread/delete`) ? Ge.deleteUnsupported : Ge.deleteError) }), {
              errorAnalytics: { toastId: `localPreviewFooter.onError.deleteUnsupported` },
            });
      }),
      (t[40] = s),
      (t[41] = N));
  let P;
  t[42] !== a || t[43] !== s
    ? ((P = () => {
        s.queryClient.invalidateQueries({ queryKey: [`archived-threads`, a] });
      }),
      (t[42] = a),
      (t[43] = s),
      (t[44] = P))
    : (P = t[44]);
  let ee;
  t[45] !== M || t[46] !== N || t[47] !== P || t[48] !== A || t[49] !== j
    ? ((ee = { onMutate: A, mutationFn: j, onSuccess: M, onError: N, onSettled: P }),
      (t[45] = M),
      (t[46] = N),
      (t[47] = P),
      (t[48] = A),
      (t[49] = j),
      (t[50] = ee))
    : (ee = t[50]);
  let { mutate: re, isPending: I } = Y(ee),
    R;
  t[51] !== r || t[52] !== a || t[53] !== p
    ? ((R =
        a === `local` &&
        ne?.threadArchive != null &&
        p?.kind === `local` &&
        p.hostId === a &&
        p.thread.id === r
          ? () => g(p.thread)
          : void 0),
      (t[51] = r),
      (t[52] = a),
      (t[53] = p),
      (t[54] = R))
    : (R = t[54]);
  let z = !l || f?.status === `restored`,
    B = k || f?.status === `restoring`,
    V;
  t[55] !== c || t[56] !== O ? ((V = () => O(c)), (t[55] = c), (t[56] = O), (t[57] = V)) : (V = t[57]);
  let H;
  t[58] !== x || t[59] !== I || t[60] !== R || t[61] !== z || t[62] !== B || t[63] !== V
    ? ((H = (0, Z.jsx)(cn, {
        deleting: I,
        onDelete: R,
        restored: z,
        restoring: B,
        onUnarchive: V,
        onDone: x,
      })),
      (t[58] = x),
      (t[59] = I),
      (t[60] = R),
      (t[61] = z),
      (t[62] = B),
      (t[63] = V),
      (t[64] = H))
    : (H = t[64]);
  let ie;
  t[65] === m
    ? (ie = t[66])
    : ((ie = m == null ? null : { kind: `single`, thread: m }), (t[65] = m), (t[66] = ie));
  let W;
  t[67] === re ? (W = t[68]) : ((W = () => re()), (t[67] = re), (t[68] = W));
  let G;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (e) => {
        e || g(null);
      }),
      (t[69] = G))
    : (G = t[69]);
  let K;
  t[70] !== I || t[71] !== ie || t[72] !== W
    ? ((K = (0, Z.jsx)(on, { state: ie, isDeleting: I, onConfirm: W, onOpenChange: G })),
      (t[70] = I),
      (t[71] = ie),
      (t[72] = W),
      (t[73] = K))
    : (K = t[73]);
  let J;
  return (
    t[74] !== H || t[75] !== K
      ? ((J = (0, Z.jsxs)(Z.Fragment, { children: [H, K] })), (t[74] = H), (t[75] = K), (t[76] = J))
      : (J = t[76]),
    J
  );
}
var Pn, Fn, Z;
function In() {
  return (In = e(() => {
    ((Pn = m()),
      _(),
      K(),
      kt(),
      k(),
      B(),
      p(),
      (Fn = s()),
      E(),
      u(),
      Ee(),
      dt(),
      qt(),
      d(),
      C(),
      X(),
      it(),
      M(),
      r(),
      we(),
      an(),
      ke(),
      lt(),
      sn(),
      ft(),
      (Z = l()));
  }))();
}
function Ln(e) {
  let r = (0, Bn.c)(56),
    { conversationId: i, title: a, defaultOpen: o, newChatDisabled: s, onNewChat: c, onSelectChat: l } = e,
    u = o !== void 0 && o,
    d = s !== void 0 && s,
    p = n(je),
    m = I(),
    h = te(gt),
    [g, _] = (0, Vn.useState)(u),
    v = (0, Vn.useRef)(!1),
    y = F(i == null ? null : Yt, i),
    b = F(Gt, i),
    S = te(ot),
    C = F(qe, i),
    w = F(Ut, i),
    E = F(Nt, i);
  F(he, i);
  let O;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = !x() && !0), (r[0] = O)) : (O = r[0]);
  let k = O,
    A;
  r[1] !== h || r[2] !== m
    ? ((A = h
        ? m.formatMessage({
            id: `floatingComposer.chooseChat`,
            defaultMessage: `Switch chat`,
            description: `Tooltip and accessible label for the floating composer menu that switches chats or starts a side chat`,
          })
        : m.formatMessage({
            id: `floatingComposer.chatOptions`,
            defaultMessage: `Chat options`,
            description: `Tooltip and accessible label for a workspace chat menu with a New chat action`,
          })),
      (r[1] = h),
      (r[2] = m),
      (r[3] = A))
    : (A = r[3]);
  let j = A,
    M;
  r[4] !== l || r[5] !== p
    ? ((M = (e) => {
        (p.set(ot, { ...p.get(ot), conversationId: e }), (v.current = !0), l?.(e));
      }),
      (r[4] = l),
      (r[5] = p),
      (r[6] = M))
    : (M = r[6]);
  let N = M,
    P;
  r[7] !== i || r[8] !== m || r[9] !== l || r[10] !== p
    ? ((P = async () => {
        if (i != null)
          try {
            let e = await xn(p, i, m);
            e != null && p.get(ot).conversationId === e && l?.(e);
          } catch (e) {
            let t = e;
            (ae.error(`Failed to create a side chat from the floating composer`, {
              safe: {},
              sensitive: { error: t },
            }),
              p
                .get(L)
                .danger(
                  (0, Q.jsx)(U, {
                    id: `floatingComposer.createSideChatError`,
                    defaultMessage: `Failed to start a new side chat`,
                    description: `Error shown when creating a side chat from the floating composer fails`,
                  }),
                  { errorAnalytics: { toastId: `floatingComposer.createSideChatError` } },
                ));
          }
      }),
      (r[7] = i),
      (r[8] = m),
      (r[9] = l),
      (r[10] = p),
      (r[11] = P))
    : (P = r[11]);
  let ee = P,
    ne;
  r[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (e) => {
        v.current &&= (e.preventDefault(), !1);
      }),
      (r[12] = ne))
    : (ne = r[12]);
  let R;
  r[13] === a
    ? (R = r[14])
    : ((R =
        a ??
        (0, Q.jsx)(U, {
          id: `quickChat.mainConversation`,
          defaultMessage: `Chat`,
          description: `Fallback title for the task's main conversation in the floating chat`,
        })),
      (r[13] = a),
      (r[14] = R));
  let B;
  r[15] === R
    ? (B = r[16])
    : ((B = (0, Q.jsx)(`span`, { className: `truncate`, children: R })), (r[15] = R), (r[16] = B));
  let V;
  r[17] !== h || r[18] !== S
    ? ((V = h && S.isCreating ? (0, Q.jsx)(t, { as: `span`, className: `icon-xxs` }) : (0, Q.jsx)(f, {})),
      (r[17] = h),
      (r[18] = S),
      (r[19] = V))
    : (V = r[19]);
  let W;
  r[20] !== j || r[21] !== V || r[22] !== B
    ? ((W = (0, Q.jsxs)(D, {
        className: `max-w-full min-w-0`,
        color: `ghostSecondary`,
        size: `toolbar`,
        "aria-label": j,
        children: [B, V],
      })),
      (r[20] = j),
      (r[21] = V),
      (r[22] = B),
      (r[23] = W))
    : (W = r[23]);
  let G;
  r[24] !== j || r[25] !== W
    ? ((G = (0, Q.jsx)(re, { cloneCustomTrigger: !0, tooltipContent: j, children: W })),
      (r[24] = j),
      (r[25] = W),
      (r[26] = G))
    : (G = r[26]);
  let K;
  r[27] !== h || r[28] !== i || r[29] !== N || r[30] !== b || r[31] !== y
    ? ((K =
        !h || i == null
          ? null
          : (0, Q.jsxs)(z.Section, {
              className: `vertical-scroll-fade-mask min-h-0 overflow-y-auto`,
              children: [
                (0, Q.jsx)(Rn, {
                  conversationId: i,
                  isMain: !0,
                  isActive: b == null,
                  onSelect: () => N(null),
                }),
                y?.map((e) =>
                  (0, Q.jsx)(
                    Rn,
                    { conversationId: e, isMain: !1, isActive: b === e, onSelect: () => N(e) },
                    e,
                  ),
                ),
              ],
            })),
      (r[27] = h),
      (r[28] = i),
      (r[29] = N),
      (r[30] = b),
      (r[31] = y),
      (r[32] = K))
    : (K = r[32]);
  let q;
  r[33] !== h || r[34] !== i
    ? ((q = !h || i == null ? null : (0, Q.jsx)(z.Separator, {})), (r[33] = h), (r[34] = i), (r[35] = q))
    : (q = r[35]);
  let J;
  r[36] !== d || r[37] !== c
    ? ((J =
        c == null
          ? null
          : (0, Q.jsx)(z.Item, {
              LeftIcon: H,
              disabled: d,
              onSelect: () => {
                ((v.current = !0), c());
              },
              children: (0, Q.jsx)(U, {
                id: `floatingComposer.newChat`,
                defaultMessage: `New chat`,
                description: `Menu action to start a new primary chat while keeping the workspace content open`,
              }),
            })),
      (r[36] = d),
      (r[37] = c),
      (r[38] = J))
    : (J = r[38]);
  let Y;
  r[39] !== h || r[40] !== i || r[41] !== ee || r[42] !== C || r[43] !== w || r[44] !== E || r[45] !== S
    ? ((Y = h
        ? (0, Q.jsx)(z.Item, {
            LeftIcon: T,
            disabled: !k || i == null || !C || w || E || S.isCreating,
            onSelect: () => void ee(),
            children: S.isCreating
              ? (0, Q.jsx)(U, {
                  id: `floatingComposer.creatingSideChat`,
                  defaultMessage: `Starting side chat…`,
                  description: `Menu action while a new side chat is being created`,
                })
              : (0, Q.jsx)(U, {
                  id: `floatingComposer.newSideChat`,
                  defaultMessage: `New side chat`,
                  description: `Menu action to create and select a new side chat in the floating composer`,
                }),
          })
        : null),
      (r[39] = h),
      (r[40] = i),
      (r[41] = ee),
      (r[42] = C),
      (r[43] = w),
      (r[44] = E),
      (r[45] = S),
      (r[46] = Y))
    : (Y = r[46]);
  let X;
  r[47] !== K || r[48] !== q || r[49] !== J || r[50] !== Y
    ? ((X = (0, Q.jsxs)(`div`, { className: `flex max-h-[300px] min-h-0 flex-col`, children: [K, q, J, Y] })),
      (r[47] = K),
      (r[48] = q),
      (r[49] = J),
      (r[50] = Y),
      (r[51] = X))
    : (X = r[51]);
  let oe;
  return (
    r[52] !== g || r[53] !== G || r[54] !== X
      ? ((oe = (0, Q.jsx)(ie, {
          open: g,
          onOpenChange: _,
          onCloseAutoFocus: ne,
          contentWidth: `panel`,
          triggerButton: G,
          children: X,
        })),
        (r[52] = g),
        (r[53] = G),
        (r[54] = X),
        (r[55] = oe))
      : (oe = r[55]),
    oe
  );
}
function Rn(e) {
  let n = (0, Bn.c)(42),
    { conversationId: r, isMain: i, isActive: a, onSelect: s } = e,
    c = I(),
    l = F(Be, r),
    u = F(ct, r),
    d = F(be, r),
    f;
  n[0] !== r || n[1] !== d
    ? ((f = { hostId: d, conversationId: r }), (n[0] = r), (n[1] = d), (n[2] = f))
    : (f = n[2]);
  let p = F(It, f),
    m;
  if (n[3] !== p || n[4] !== c || n[5] !== i || n[6] !== u.type || n[7] !== u.unread) {
    let e = c.formatMessage({
        id: `floatingComposer.chatStatusUnread`,
        defaultMessage: `Unread response`,
        description: `Status of a chat with an unread response in the floating composer menu`,
      }),
      t;
    if (p?.kind === `approval`) {
      let e;
      (n[9] === c
        ? (e = n[10])
        : ((e = c.formatMessage({
            id: `floatingComposer.chatStatusApproval`,
            defaultMessage: `Awaiting approval`,
            description: `Status of a chat waiting for approval in the floating composer menu`,
          })),
          (n[9] = c),
          (n[10] = e)),
        (t = e));
    } else if (p?.kind === `input`) {
      let e;
      (n[11] === c
        ? (e = n[12])
        : ((e = c.formatMessage({
            id: `floatingComposer.chatStatusNeedsInput`,
            defaultMessage: `Needs input`,
            description: `Status of a chat waiting for the user to respond in the floating composer menu`,
          })),
          (n[11] = c),
          (n[12] = e)),
        (t = e));
    } else if (u.type === `error`) {
      let e;
      (n[13] === c
        ? (e = n[14])
        : ((e = c.formatMessage({
            id: `floatingComposer.chatStatusError`,
            defaultMessage: `Error`,
            description: `Status of a chat with a system error in the floating composer menu`,
          })),
          (n[13] = c),
          (n[14] = e)),
        (t = e));
    } else if (u.type === `loading`) {
      let e;
      (n[15] === c
        ? (e = n[16])
        : ((e = c.formatMessage({
            id: `floatingComposer.chatStatusRunning`,
            defaultMessage: `Running`,
            description: `Status of a chat that is working in the floating composer menu`,
          })),
          (n[15] = c),
          (n[16] = e)),
        (t = e));
    } else if (u.unread) t = e;
    else {
      let e;
      (n[17] === c
        ? (e = n[18])
        : ((e = c.formatMessage({
            id: `floatingComposer.chatStatusIdle`,
            defaultMessage: `Idle`,
            description: `Status of a chat with no activity or unread response in the floating composer menu`,
          })),
          (n[17] = c),
          (n[18] = e)),
        (t = e));
    }
    let r = u.unread && (p != null || u.type !== `idle`);
    ((m = c.formatList(
      [
        ...(i
          ? [
              c.formatMessage({
                id: `floatingComposer.mainChat`,
                defaultMessage: `Main chat`,
                description: `Accessible description identifying the parent task in the floating composer menu`,
              }),
            ]
          : []),
        t,
        ...(r ? [e] : []),
      ],
      { type: `unit` },
    )),
      (n[3] = p),
      (n[4] = c),
      (n[5] = i),
      (n[6] = u.type),
      (n[7] = u.unread),
      (n[8] = m));
  } else m = n[8];
  let h = m,
    g;
  n[19] !== r || n[20] !== i || n[21] !== u.unread
    ? ((g = i
        ? (0, Q.jsx)(Rt, { badgeEnabled: u.unread, children: (0, Q.jsx)(W, {}) })
        : (0, Q.jsx)(zn, { conversationId: r })),
      (n[19] = r),
      (n[20] = i),
      (n[21] = u.unread),
      (n[22] = g))
    : (g = n[22]);
  let _ = g;
  if (p != null) {
    let e;
    n[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(o, { asset: ee })), (n[23] = e))
      : (e = n[23]);
    let t;
    (n[24] === u.unread
      ? (t = n[25])
      : ((t = (0, Q.jsx)(Rt, { badgeEnabled: u.unread, children: e })), (n[24] = u.unread), (n[25] = t)),
      (_ = t));
  } else if (u.type === `error`) {
    let e;
    n[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(o, { asset: G, className: `text-danger` })), (n[26] = e))
      : (e = n[26]);
    let t;
    (n[27] === u.unread
      ? (t = n[28])
      : ((t = (0, Q.jsx)(Rt, { badgeEnabled: u.unread, children: e })), (n[27] = u.unread), (n[28] = t)),
      (_ = t));
  } else if (i && u.type === `loading`) {
    let e;
    (n[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(t, { className: `icon-xs shrink-0 text-text/70` })), (n[29] = e))
      : (e = n[29]),
      (_ = e));
  }
  let v;
  n[30] === _
    ? (v = n[31])
    : ((v = (0, Q.jsx)(z.ItemIcon, {
        size: `xs`,
        children: (0, Q.jsx)(`span`, { "aria-hidden": `true`, children: _ }),
      })),
      (n[30] = _),
      (n[31] = v));
  let y;
  n[32] !== i || n[33] !== l
    ? ((y =
        l ??
        (i
          ? (0, Q.jsx)(U, {
              id: `quickChat.mainConversation`,
              defaultMessage: `Chat`,
              description: `Fallback title for the task's main conversation in the floating chat`,
            })
          : (0, Q.jsx)(U, {
              id: `floatingComposer.sideChat`,
              defaultMessage: `Side chat`,
              description: `Fallback title for a side chat in the floating composer menu`,
            }))),
      (n[32] = i),
      (n[33] = l),
      (n[34] = y))
    : (y = n[34]);
  let b;
  return (
    n[35] !== h || n[36] !== a || n[37] !== s || n[38] !== v || n[39] !== y || n[40] !== l
      ? ((b = (0, Q.jsx)(z.Item, {
          "aria-description": h,
          isActive: a,
          leftIcon: v,
          textOverflow: `fade`,
          tooltipOpenWhen: `trigger-overflows`,
          tooltipText: l,
          onSelect: s,
          children: y,
        })),
        (n[35] = h),
        (n[36] = a),
        (n[37] = s),
        (n[38] = v),
        (n[39] = y),
        (n[40] = l),
        (n[41] = b))
      : (b = n[41]),
    b
  );
}
function zn(e) {
  let n = (0, Bn.c)(4),
    { conversationId: r } = e,
    i = F(Ct, r) === !0,
    a = F(Ie, r) === !0;
  if (i) {
    let e;
    return (
      n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(t, { className: `icon-xs shrink-0 text-text/70` })), (n[0] = e))
        : (e = n[0]),
      e
    );
  }
  let o;
  n[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, Q.jsx)(y, {})), (n[1] = o)) : (o = n[1]);
  let s;
  return (
    n[2] === a
      ? (s = n[3])
      : ((s = (0, Q.jsx)(Rt, { badgeEnabled: a, children: o })), (n[2] = a), (n[3] = s)),
    s
  );
}
var Bn, Vn, Q;
function Hn() {
  return (Hn = e(() => {
    ((Bn = m()),
      J(),
      A(),
      k(),
      (Vn = s()),
      E(),
      dt(),
      w(),
      Oe(),
      O(),
      N(),
      d(),
      v(),
      P(),
      C(),
      R(),
      pt(),
      Zt(),
      ft(),
      Dt(),
      g(),
      Cn(),
      ue(),
      (Q = l()));
  }))();
}
var Un;
function Wn() {
  return (Wn = e(() => {
    (Lt(),
      dt(),
      Ot(),
      Vt(),
      jn(),
      Ve(),
      se(),
      gn(),
      ue(),
      (Un = Mn({
        conversationIds: ({ get: e }, t) => [t, ...e(Yt, t)],
        status: ({ get: e }, t) => {
          let n = e(Et, t);
          if (n.type === `idle` && !n.unread) return { pending: !1, completed: !1, unread: !1 };
          let r = e(be, t),
            i = e(_e, { hostId: r, threadId: t })?.at(-1),
            a = e(Pe, i ?? null),
            o = e(me, { hostId: r, threadId: t });
          return {
            pending: n.type === `loading` || o === `loading` || a?.status === `inProgress`,
            completed: n.type === `idle` && a?.status === `completed`,
            unread: n.unread,
          };
        },
        preview: (e, t) => {
          let { get: n } = e,
            r = n(be, t),
            i = n(_e, { hostId: r, threadId: t })?.at(-1);
          if (i == null) return null;
          let a = n(yt, i),
            o = At(Kt(e, i));
          for (let e of a?.toReversed() ?? []) {
            let t = n(ht, { ...i, itemId: e });
            if (t?.type !== `agentMessage` || (t.phase === `commentary` && t.delivery !== `async`)) continue;
            let r = Re({ content: t.text, phase: t.phase, isStreaming: !1, isHeartbeatAutomationTurn: o }),
              a = Xt(r, n(de)),
              s = a == null ? `` : Tt(a).trim();
            if (s !== ``) return s;
          }
          return ``;
        },
        title: ({ get: e }, t) => e(Be, t),
        open: (e, t) => {
          e.set(ot, { conversationId: t, isCreating: !1 });
        },
        dismiss: un,
      })));
  }))();
}
function Gn(e) {
  let t = (0, Kn.c)(62),
    {
      children: r,
      isHidden: i,
      conversationId: a,
      pendingClientThreadId: o,
      onNewChat: s,
      newChatDisabled: c,
      emptyTitle: l,
      renderMainTranscript: u,
      renderSideChatComposer: d,
    } = e,
    f = n(le),
    p = n(je),
    m;
  t[0] === f ? (m = t[1]) : ((m = f.getOwnValue(le)), (t[0] = f), (t[1] = m));
  let h = m,
    g = (0, qn.useRef)(null),
    _ = (0, qn.useId)(),
    v = F(Gt, a),
    y = v ?? a,
    b = y != null || o != null,
    x = F(be, y),
    S;
  t[2] !== x || t[3] !== y
    ? ((S = y == null ? null : { hostId: x, threadId: y }), (t[2] = x), (t[3] = y), (t[4] = S))
    : (S = t[4]);
  let C = S,
    w = F(Ft, C),
    T = F(Wt, C),
    E;
  t[5] !== T || t[6] !== w || t[7] !== p || t[8] !== v
    ? ((E = w || T !== !1 || (v == null && Fe(p.value))),
      (t[5] = T),
      (t[6] = w),
      (t[7] = p),
      (t[8] = v),
      (t[9] = E))
    : (E = t[9]);
  let D = E,
    O = V(ct, y),
    k = F(Be, y) ?? (y == null ? l : null),
    A = F(mt, a),
    M = F(St, y),
    N = F(Bt, y),
    P = te(ze),
    ee = te(Dn),
    ne = te(Jn),
    re = te(tt),
    I = V(Un, a == null || D || N || (P && re === `expanded`) ? null : a),
    L = F(qe, y),
    R = F(ut, y),
    z;
  t[10] === v ? (z = t[11]) : ((z = v == null ? null : Pt(v)), (t[10] = v), (t[11] = z));
  let B = F(v == null ? null : vt, z),
    H;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = () => {
        requestAnimationFrame(() => {
          g.current?.querySelector(`[data-codex-composer], [data-composer-markdown]`)?.focus();
        });
      }),
      (t[12] = H))
    : (H = t[12]);
  let ie = H,
    U;
  t[13] !== B || t[14] !== a || t[15] !== h || t[16] !== v
    ? ((U = v == null ? h : pe(v, `side`, a, B ?? void 0)),
      (t[13] = B),
      (t[14] = a),
      (t[15] = h),
      (t[16] = v),
      (t[17] = U))
    : (U = t[17]);
  let W = b || D,
    G = !b,
    K = i || ee || ne,
    q;
  t[18] !== a || t[19] !== c || t[20] !== s || t[21] !== k
    ? ((q =
        a == null && s == null
          ? void 0
          : (0, $.jsx)(Ln, {
              conversationId: a,
              title: k,
              onNewChat: s,
              newChatDisabled: c,
              onSelectChat: ie,
            })),
      (t[18] = a),
      (t[19] = c),
      (t[20] = s),
      (t[21] = k),
      (t[22] = q))
    : (q = t[22]);
  let J;
  t[23] !== M || t[24] !== A
    ? ((J = M && A.type === `loading` ? { ...A, type: `idle` } : A), (t[23] = M), (t[24] = A), (t[25] = J))
    : (J = t[25]);
  let Y;
  t[26] !== _ ||
  t[27] !== L ||
  t[28] !== x ||
  t[29] !== R ||
  t[30] !== o ||
  t[31] !== u ||
  t[32] !== y ||
  t[33] !== D ||
  t[34] !== v
    ? ((Y = D
        ? void 0
        : (e) => {
            let { isVisible: t } = e,
              n = null;
            return (
              v == null && o != null
                ? (n = (0, $.jsx)(`div`, {
                    className: `min-h-0 flex-1`,
                    children: (0, $.jsx)(An, { children: (0, $.jsx)(vn, { clientThreadId: o }) }),
                  }))
                : y != null &&
                  L &&
                  (n = (0, $.jsx)(
                    fn,
                    {
                      conversationId: y,
                      contentSearchOrchestrationId: _,
                      hostId: x,
                      trackReadState: t,
                      isReadOnly: R === !0,
                      retainActiveInterest: R !== !0,
                      showSideChatEmptyState: v != null && R === !1,
                    },
                    y,
                  )),
              v == null && u != null ? u({ transcript: n, isVisible: t }) : n
            );
          }),
      (t[26] = _),
      (t[27] = L),
      (t[28] = x),
      (t[29] = R),
      (t[30] = o),
      (t[31] = u),
      (t[32] = y),
      (t[33] = D),
      (t[34] = v),
      (t[35] = Y))
    : (Y = t[35]);
  let ae;
  t[36] !== r ||
  t[37] !== _ ||
  t[38] !== a ||
  t[39] !== d ||
  t[40] !== p ||
  t[41] !== f ||
  t[42] !== y ||
  t[43] !== D ||
  t[44] !== v
    ? ((ae = (e) => {
        let t;
        return (
          (t = D
            ? (0, $.jsx)(qn.Suspense, {
                fallback: (0, $.jsx)(Te, {}),
                children: (0, $.jsx)(
                  En,
                  { conversationId: y, active: !e?.isMinimized && !e?.isHidden, showHeader: !1 },
                  y,
                ),
              })
            : v == null
              ? r(e)
              : d == null
                ? (0, $.jsx)(wn, {
                    browserConversationId: ge(f) ?? void 0,
                    conversationId: v,
                    presentation: e,
                  })
                : d(v, e)),
          (0, $.jsx)(`div`, {
            ref: g,
            onMouseDownCapture: () => {
              Ke(p, `conversation`, _);
            },
            onFocusCapture: () => {
              Ke(p, `conversation`, _);
            },
            children: (0, $.jsx)(_t.Consumer, {
              children: (e) => (0, $.jsx)(_t, { value: { ...e, floatingChatGroupId: a }, children: t }),
            }),
          })
        );
      }),
      (t[36] = r),
      (t[37] = _),
      (t[38] = a),
      (t[39] = d),
      (t[40] = p),
      (t[41] = f),
      (t[42] = y),
      (t[43] = D),
      (t[44] = v),
      (t[45] = ae))
    : (ae = t[45]);
  let X;
  t[46] !== N ||
  t[47] !== b ||
  t[48] !== I ||
  t[49] !== q ||
  t[50] !== J ||
  t[51] !== Y ||
  t[52] !== ae ||
  t[53] !== W ||
  t[54] !== G ||
  t[55] !== K ||
  t[56] !== k ||
  t[57] !== O
    ? ((X = (0, $.jsx)(rn, {
        hasTranscript: W,
        showComposerDivider: b,
        composerOnly: G,
        isHidden: K,
        title: k,
        titleContent: q,
        statusState: J,
        titleStatusState: O,
        hasElicitation: N,
        notifications: I,
        renderTranscript: Y,
        children: ae,
      })),
      (t[46] = N),
      (t[47] = b),
      (t[48] = I),
      (t[49] = q),
      (t[50] = J),
      (t[51] = Y),
      (t[52] = ae),
      (t[53] = W),
      (t[54] = G),
      (t[55] = K),
      (t[56] = k),
      (t[57] = O),
      (t[58] = X))
    : (X = t[58]);
  let oe;
  return (
    t[59] !== X || t[60] !== U
      ? ((oe = (0, $.jsx)(j, { scope: le, value: U, children: X })), (t[59] = X), (t[60] = U), (t[61] = oe))
      : (oe = t[61]),
    oe
  );
}
var Kn, qn, $, Jn;
function Yn() {
  return (Yn = e(() => {
    ((Kn = m()),
      k(),
      (qn = s()),
      dt(),
      xt(),
      nn(),
      Ze(),
      De(),
      bt(),
      We(),
      Ne(),
      Tn(),
      Me(),
      Mt(),
      Se(),
      On(),
      ye(),
      Zt(),
      wt(),
      st(),
      xe(),
      kn(),
      hn(),
      _n(),
      Hn(),
      Wn(),
      Sn(),
      ue(),
      ($ = l()),
      (Jn = a(je, ({ get: e }) => {
        let t = e(ce);
        return e(Ye) != null || (t?.kind === `codex` && e(Ae, { accountId: t.accountId, pageId: t.pageId }));
      })));
  }))();
}
function Xn(e) {
  let t = (0, Zn.c)(34),
    { conversationId: r, resumeState: i, renderComposer: a, onNewChat: o } = e,
    s = n(je),
    l = te(gt),
    u = I(),
    d = te(at),
    f = F(be, r),
    p = F(Ue, r),
    m = F(Ct, r) ?? !1;
  (F(Ht, r), F(he, r));
  let h = m || !1,
    g = F(qe, r),
    _;
  t[0] !== r || t[1] !== f || t[2] !== s.value.clientThreadId
    ? ((_ = { clientThreadId: s.value.clientThreadId, conversationId: r, hostId: f }),
      (t[0] = r),
      (t[1] = f),
      (t[2] = s.value.clientThreadId),
      (t[3] = _))
    : (_ = t[3]);
  let v = F(Jt, _),
    y;
  t[4] !== r ||
  t[5] !== g ||
  t[6] !== u ||
  t[7] !== h ||
  t[8] !== p ||
  t[9] !== v ||
  t[10] !== a ||
  t[11] !== i.hasResumeFailed ||
  t[12] !== i.isResuming ||
  t[13] !== i.isUnavailable ||
  t[14] !== i.isWriterConflict ||
  t[15] !== i.retryResume ||
  t[16] !== l ||
  t[17] !== s ||
  t[18] !== d
    ? ((y = (e) => {
        let t = {
          ...tn(e),
          selectedProject: d,
          browserConversationId: ge(s) ?? void 0,
          aboveComposerContentLayout: `header`,
          isResponseInProgress: h,
          isThreadResuming: i.isResuming,
          isThreadHistoryLoading: r == null || !g || i.isResuming,
          submitDisabled:
            r == null || v != null || i.hasResumeFailed || i.isUnavailable || i.isWriterConflict,
          composerLayoutMode: `auto-single-line`,
          localWorkspaceMaterialization: p,
          showUtilityBarBranchWhen: `always`,
          showUtilityBar: !1,
          onLocalSubmitStart: e?.onSubmitStart,
          onCreateSideConversation: l && r != null ? (e) => xn(s, r, u, e) : void 0,
        };
        return (0, Qn.jsxs)(en, {
          children: [
            i.hasResumeFailed || i.isUnavailable ? (0, Qn.jsx)(ln, { onRetry: i.retryResume }) : null,
            i.isWriterConflict ? (0, Qn.jsx)(pn, { isResuming: i.isResuming, onRetry: i.retryResume }) : null,
            a(t, e),
          ],
        });
      }),
      (t[4] = r),
      (t[5] = g),
      (t[6] = u),
      (t[7] = h),
      (t[8] = p),
      (t[9] = v),
      (t[10] = a),
      (t[11] = i.hasResumeFailed),
      (t[12] = i.isResuming),
      (t[13] = i.isUnavailable),
      (t[14] = i.isWriterConflict),
      (t[15] = i.retryResume),
      (t[16] = l),
      (t[17] = s),
      (t[18] = d),
      (t[19] = y))
    : (y = t[19]);
  let b = y,
    x = v != null,
    S;
  t[20] !== r ||
  t[21] !== f ||
  t[22] !== v ||
  t[23] !== i.hasResumeFailed ||
  t[24] !== i.isUnavailable ||
  t[25] !== s.value.clientThreadId
    ? ((S = (e) => {
        let { transcript: t, isVisible: n } = e;
        return i.hasResumeFailed || i.isUnavailable
          ? null
          : v == null
            ? (0, Qn.jsx)(dn, {
                clientThreadId: c(s.value.clientThreadId) ? s.value.clientThreadId : void 0,
                codexPerspective:
                  r == null
                    ? null
                    : (0, Qn.jsxs)(Qn.Fragment, {
                        children: [t, (0, Qn.jsx)(bn, { threadLocator: { conversationId: r, hostId: f } })],
                      }),
                conversationId: r,
                hostId: f,
                includesComposer: !1,
                isVisible: n,
              })
            : t;
      }),
      (t[20] = r),
      (t[21] = f),
      (t[22] = v),
      (t[23] = i.hasResumeFailed),
      (t[24] = i.isUnavailable),
      (t[25] = s.value.clientThreadId),
      (t[26] = S))
    : (S = t[26]);
  let C;
  return (
    t[27] !== r || t[28] !== o || t[29] !== v || t[30] !== b || t[31] !== x || t[32] !== S
      ? ((C = (0, Qn.jsx)(Gn, {
          conversationId: r,
          pendingClientThreadId: v,
          onNewChat: o,
          newChatDisabled: x,
          renderMainTranscript: S,
          children: b,
        })),
        (t[27] = r),
        (t[28] = o),
        (t[29] = v),
        (t[30] = b),
        (t[31] = x),
        (t[32] = S),
        (t[33] = C))
      : (C = t[33]),
    C
  );
}
var Zn, Qn;
function $n() {
  return ($n = e(() => {
    ((Zn = m()),
      k(),
      B(),
      E(),
      dt(),
      xt(),
      $t(),
      yn(),
      mn(),
      nt(),
      Zt(),
      Dt(),
      lt(),
      Cn(),
      Yn(),
      hn(),
      He(),
      (Qn = l()));
  }))();
}
function er() {
  let e = (0, tr.c)(7),
    t = b(),
    n,
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, nr.jsx)(U, {
        id: `localConversation.remoteConnectionUnavailable.title`,
        defaultMessage: `Remote connection unavailable`,
        description: `Title shown when a task belongs to a remote connection that is no longer configured`,
      })),
      (r = (0, nr.jsx)(U, {
        id: `localConversation.remoteConnectionUnavailable.description`,
        defaultMessage: `This chat's remote connection is no longer configured. Add it again in Settings to continue`,
        description: `Description shown when a task cannot load because its remote host was removed`,
      })),
      (e[0] = n),
      (e[1] = r))
    : ((n = e[0]), (r = e[1]));
  let i;
  e[2] === t ? (i = e[3]) : ((i = () => void t(`/settings/connections`)), (e[2] = t), (e[3] = i));
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, nr.jsx)(U, {
        id: `localConversation.remoteConnectionUnavailable.action`,
        defaultMessage: `Open connection settings`,
        description: `Button that opens connection settings for a task whose remote host was removed`,
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  return (
    e[5] === i
      ? (o = e[6])
      : ((o = (0, nr.jsx)(Qe, {
          className: `h-full`,
          title: n,
          description: r,
          actions: (0, nr.jsx)(D, { onClick: i, children: a }),
        })),
        (e[5] = i),
        (e[6] = o)),
    o
  );
}
var tr, nr;
function rr() {
  return (rr = e(() => {
    ((tr = m()), E(), u(), O(), Je(), (nr = l()));
  }))();
}
export { Gn as a, In as c, $n as i, rr as n, Yn as o, Xn as r, Nn as s, er as t };
//# sourceMappingURL=unavailable-local-conversation-page-9a9c313fc114.js.map
