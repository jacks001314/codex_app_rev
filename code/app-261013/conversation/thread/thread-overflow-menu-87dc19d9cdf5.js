import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AH as n,
  Aat as r,
  CPt as i,
  Cot as a,
  Dz as o,
  Ext as s,
  Ixt as c,
  Jbt as l,
  Md as u,
  Mz as d,
  Nz as f,
  Oat as p,
  Pxt as m,
  Rnt as h,
  SO as g,
  SPt as ee,
  TJ as _,
  VDt as te,
  Vxt as ne,
  _Pt as re,
  _xt as v,
  cJ as y,
  gnt as ie,
  hPt as ae,
  hnt as oe,
  hot as se,
  jDt as b,
  jH as ce,
  jd as le,
  kDt as ue,
  kz as de,
  lot as fe,
  mnt as pe,
  nSt as me,
  qft as he,
  rrt as ge,
  rst as _e,
  sJ as ve,
  srt as ye,
  t3 as be,
  tq as xe,
  vzt as Se,
  wot as Ce,
  xMt as we,
  xO as Te,
  yzt as Ee,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as De,
  $Y as S,
  $pr as C,
  ACt as Oe,
  AUt as ke,
  Bun as w,
  C$n as Ae,
  Cbn as je,
  Cwr as Me,
  Dbn as Ne,
  G4n as T,
  G8n as Pe,
  GS as Fe,
  I9n as E,
  Iyn as Ie,
  J4n as Le,
  JJ as Re,
  JX as D,
  JY as ze,
  Jwn as Be,
  KS as Ve,
  Lyn as He,
  MCt as O,
  N8n as Ue,
  Nyn as We,
  Obn as Ge,
  QDr as Ke,
  QY as qe,
  Qwn as Je,
  R9n as Ye,
  T8n as Xe,
  Tbn as Ze,
  UCt as Qe,
  Uer as $e,
  Upr as et,
  VCt as tt,
  XDr as nt,
  Xer as rt,
  Xpr as it,
  Xut as at,
  YJ as ot,
  Yut as st,
  Ywn as ct,
  ZY as lt,
  Zgn as k,
  _Dr as ut,
  _bn as A,
  aTn as dt,
  b7n as ft,
  cTn as pt,
  cY as mt,
  c_n as ht,
  cs as gt,
  dCt as _t,
  dL as vt,
  dbn as yt,
  eTn as bt,
  etr as xt,
  fL as St,
  fSn as Ct,
  fbn as wt,
  gCt as Tt,
  gar as Et,
  gwr as Dt,
  h7t as Ot,
  hCt as kt,
  hX as At,
  har as jt,
  iTn as j,
  i_n as M,
  k5n as Mt,
  kUt as Nt,
  lCt as Pt,
  lSn as N,
  lY as Ft,
  lbn as It,
  ls as Lt,
  mCt as Rt,
  mX as P,
  oHt as F,
  p7t as zt,
  pCt as Bt,
  pbn as Vt,
  qS as Ht,
  qX as Ut,
  qY as Wt,
  qwr as Gt,
  sHt as Kt,
  tTr as qt,
  t_n as Jt,
  tmr as I,
  uCt as Yt,
  v8n as Xt,
  vDr as L,
  vbn as Zt,
  w$n as Qt,
  w8n as $t,
  y7n as en,
  z5n as tn,
  zun as nn,
} from "./app-initial-5851df3f6cb1.js";
import { n as rn, r as an } from "./use-target-apps-df427db284a8.js";
import { r as R, t as on } from "./tab-context-menu-da18223a05b8.js";
import { n as z, r as sn, t as cn } from "./thread-panel-plugins-menu-item-dadd3e71802e.js";
import { n as B, t as ln } from "./thread-pin-shortcut-bridge-fcf90cbec36c.js";
function un(e) {
  let t = (0, V.c)(20),
    { conversationId: n, hostId: r, onDelete: i } = e,
    a = te(),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { hostId: r, threadId: n }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = x(It, o),
    c;
  t[3] !== n || t[4] !== r
    ? ((c = { hostId: r, threadId: n }), (t[3] = n), (t[4] = r), (t[5] = c))
    : (c = t[5]);
  let l = x(I, c),
    u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = { 16: ve, 20: y }), (t[6] = u)) : (u = t[6]);
  let d;
  if (t[7] !== s || t[8] !== a) {
    let e;
    (t[10] === s ? (e = t[11]) : ((e = Vt(s)), (t[10] = s), (t[11] = e)),
      (d = a.formatMessage(ut.deleteOrbit, { aeonName: s, hasName: !e })),
      (t[7] = s),
      (t[8] = a),
      (t[9] = d));
  } else d = t[9];
  let f;
  t[12] === a
    ? (f = t[13])
    : ((f = a.formatMessage(
        {
          id: `restricted.aeon.resetOrbit.commandDescription.dot.productName`,
          defaultMessage: `Delete your {dot}, archive its conversations, and remove its memories and scheduled tasks`,
          description: `Command description for deleting the current cloud dot. The dot placeholder is the untranslated term for the user's agent.`,
        },
        { dot: `dot` },
      )),
      (t[12] = a),
      (t[13] = f));
  let p;
  t[14] !== d || t[15] !== f
    ? ((p = { slashCommandId: `delete`, icon: u, title: d, description: f }),
      (t[14] = d),
      (t[15] = f),
      (t[16] = p))
    : (p = t[16]);
  let m;
  return (
    t[17] !== l || t[18] !== p
      ? ((m = { enabled: l, menuItem: p }), (t[17] = l), (t[18] = p), (t[19] = m))
      : (m = t[19]),
    Qt(`archiveThread`, i, m),
    null
  );
}
var V;
function dn() {
  return (dn = e(() => {
    ((V = Se()), m(), b(), Ae(), _(), L(), wt(), yt(), C());
  }))();
}
function fn(e) {
  let t = (0, pn.c)(6),
    { conversationId: n, cwd: r, hostId: i } = e,
    o = c(a),
    s,
    l;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o
      ? ((s = () =>
          o.watch((e) => {
            let { get: t } = e;
            t(mn, { conversationId: n, cwd: r, hostId: i });
          })),
        (l = [o, n, r, i]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o),
        (t[4] = s),
        (t[5] = l))
      : ((s = t[4]), (l = t[5])),
    (0, H.useEffect)(s, l),
    null
  );
}
var pn, H, mn;
function hn() {
  return (hn = e(() => {
    ((pn = Se()),
      m(),
      (H = Ee()),
      jt(),
      F(),
      Ce(),
      an(),
      (mn = me(a, ({ conversationId: e, cwd: t, hostId: n }, { get: r }) => {
        if (!rn({ cwd: t, hostId: n })) return null;
        let i = r(Et, { conversationId: e, hostId: n });
        return i != null && i.data === void 0
          ? null
          : r(Kt, { cwd: i?.data?.latestWorktree?.workspaceRoot ?? t, hostId: n, path: void 0 });
      })));
  }))();
}
function gn(e) {
  let u = (0, bn.c)(238),
    {
      conversationId: f,
      getConversationMarkdown: p,
      markdownParentConversationId: m,
      pendingClientThreadId: h,
      pendingWorktreeId: g,
      onRenamePendingWorktree: ee,
      onRename: _,
      sideChatTab: v,
      cwd: y,
      hostId: ae,
      title: b,
      canPin: de,
      isWorktreeThread: fe,
      archiveNavigation: me,
      archiveSource: _e,
      dropdownAlign: ve,
      triggerButtonClassName: ye,
      triggerButtonColor: be,
      triggerButtonSize: Se,
      triggerIconClassName: Ce,
      leadingItems: we,
      includePlugins: Ee,
    } = e,
    S = de === void 0 || de,
    C = fe !== void 0 && fe,
    w = me === void 0 ? `home` : me,
    Ae = _e === void 0 ? `thread_overflow_menu` : _e,
    Me = ve === void 0 ? `start` : ve,
    Ne = be === void 0 ? `ghost` : be,
    T = Se === void 0 ? `icon` : Se,
    Fe = Ee !== void 0 && Ee,
    E = c(Dt),
    D = c(a),
    ze = ne(bt),
    Be = ne(ct),
    O = te(),
    We = Fe && !1,
    Je = Tt(),
    { cancelPendingWorktree: Ze } = He(),
    {
      archiveThread: et,
      markThreadAsUnread: tt,
      renameThread: nt,
      copyAppLink: ot,
      copyConversationMarkdown: st,
      copyWorkingDirectory: k,
    } = Je,
    A = s(),
    [_t, vt] = (0, xn.useState)(!1),
    [yt, xt] = (0, xn.useState)(null),
    [Ct, wt] = (0, xn.useState)(null),
    Et = x(De, f),
    Ot = x($t, f),
    jt = x(at, f),
    j = Ot || jt,
    M = ae ?? Et,
    Nt;
  u[0] !== f || u[1] !== M
    ? ((Nt = f == null ? null : { hostId: M, threadId: f }), (u[0] = f), (u[1] = M), (u[2] = Nt))
    : (Nt = u[2]);
  let Ft = x(ft, Nt),
    It;
  u[3] !== f || u[4] !== M
    ? ((It = { conversationId: f, hostId: M }), (u[3] = f), (u[4] = M), (u[5] = It))
    : (It = u[5]);
  let Lt = x(E.value.routeKind === `local-thread` && E.value.conversationId === f && lt, It),
    P = x(Mt, f)?.type === `active`,
    F;
  u[6] === f ? (F = u[7]) : ((F = f ?? l(`missing-conversation`)), (u[6] = f), (u[7] = F));
  let Bt;
  u[8] === F ? (Bt = u[9]) : ((Bt = rt(F)), (u[8] = F), (u[9] = Bt));
  let Vt = x(Jt, Bt),
    Gt = ne(ht),
    Kt = x(tn, f),
    I = x(Zt, f),
    Xt;
  u[10] !== D ||
  u[11] !== f ||
  u[12] !== M ||
  u[13] !== I ||
  u[14] !== _ ||
  u[15] !== ee ||
  u[16] !== h ||
  u[17] !== g ||
  u[18] !== nt ||
  u[19] !== b
    ? ((Xt =
        _ ??
        (() => {
          let e = D.get(dt, h ?? null);
          Le(D, mt, {
            draftKey: g,
            metadataThreadId: g == null ? f : null,
            initialValue: b ?? ``,
            maxLength: I ? 24 : void 0,
            pattern: I ? Oe : void 0,
            messages: I ? Wt : void 0,
            requireNonEmpty: g != null || I,
            trimOnSave: g != null,
            saveInBackground: !I,
            onSave: (t) => {
              let n = f ?? (h == null ? null : D.get(qt, h));
              if (n == null) {
                ee?.(t);
                return;
              }
              return nt({
                conversationId: n,
                hostId:
                  e?.launchMode === `start-conversation`
                    ? (e.threadStartHostId ?? e.hostId)
                    : (e?.hostId ?? M),
                previousTitle: b ?? ``,
                title: t,
                showErrorToast: !1,
              });
            },
          });
        })),
      (u[10] = D),
      (u[11] = f),
      (u[12] = M),
      (u[13] = I),
      (u[14] = _),
      (u[15] = ee),
      (u[16] = h),
      (u[17] = g),
      (u[18] = nt),
      (u[19] = b),
      (u[20] = Xt))
    : (Xt = u[20]);
  let L = Xt,
    en;
  u[21] === S ? (en = u[22]) : ((en = { canPin: S }), (u[21] = S), (u[22] = en));
  let { isPinned: rn, togglePin: an } = kt(f, en),
    R = x(pt, h ?? null) ?? rn,
    z;
  u[23] !== M || u[24] !== R || u[25] !== Ft || u[26] !== S
    ? ((z = S && ((!Ft && ke(M)) || R)), (u[23] = M), (u[24] = R), (u[25] = Ft), (u[26] = S), (u[27] = z))
    : (z = u[27]);
  let B = z,
    V;
  u[28] !== B || u[29] !== j || u[30] !== R || u[31] !== g || u[32] !== E || u[33] !== an
    ? ((V = () => {
        if (B && !j) {
          if (g != null) {
            Ie(E, g, !R);
            return;
          }
          an();
        }
      }),
      (u[28] = B),
      (u[29] = j),
      (u[30] = R),
      (u[31] = g),
      (u[32] = E),
      (u[33] = an),
      (u[34] = V))
    : (V = u[34]);
  let dn = V,
    pn = x(N, `toggleThreadPin`),
    H = B ? pn : null,
    mn = x(N, `renameThread`),
    hn = x(N, `archiveThread`),
    gn = x(N, `copyWorkingDirectory`),
    Sn = x(N, `copyDeeplink`),
    Cn = x(N, `copyConversationMarkdown`),
    wn = x(N, `openSideChat`);
  x(Pe, f);
  let Tn = x(Xe, f),
    En;
  u[35] !== Be || u[36] !== f || u[37] !== Tn || u[38] !== I || u[39] !== j || u[40] !== v
    ? ((En = Be && Tn !== !0 && f != null && !j && !I && v != null && !r()),
      (u[35] = Be),
      (u[36] = f),
      (u[37] = Tn),
      (u[38] = I),
      (u[39] = j),
      (u[40] = v),
      (u[41] = En))
    : (En = u[41]);
  let Dn = En,
    On = x(Ue, f),
    kn = ne(Qe) ?? {},
    An;
  u[42] !== w ||
  u[43] !== et ||
  u[44] !== f ||
  u[45] !== M ||
  u[46] !== A ||
  u[47] !== Gt ||
  u[48] !== Vt ||
  u[49] !== Kt
    ? ((An = (e) => {
        if (f == null) return;
        let t = Vt ?? (Kt === `projectless` || Gt?.includes(f) === !0 ? null : void 0),
          n =
            w === `home`
              ? () => {
                  A(`/`, {
                    replace: !0,
                    state: { focusComposerNonce: Date.now(), ...(t === void 0 ? {} : { project: nn(t) }) },
                  });
                }
              : void 0;
        et({
          conversationId: f,
          hostId: M,
          source: e,
          onArchiveStart: n,
          appHistory: {
            onRedoStart: (e) => {
              e && n?.();
            },
          },
        });
      }),
      (u[42] = w),
      (u[43] = et),
      (u[44] = f),
      (u[45] = M),
      (u[46] = A),
      (u[47] = Gt),
      (u[48] = Vt),
      (u[49] = Kt),
      (u[50] = An))
    : (An = u[50]);
  let W = An,
    jn;
  u[51] !== D || u[52] !== f || u[53] !== W || u[54] !== M || u[55] !== j || u[56] !== P
    ? ((jn = (e) => {
        if (!(f == null || j)) {
          if (D.get(ft, { hostId: M, threadId: f })) {
            At(D, f);
            return;
          }
          (async () => {
            let t = null;
            try {
              let e = await ge(`list-automations`);
              t = zt({ automations: e.items, conversationId: f, includePausedAutomations: !0 });
            } catch (e) {
              let t = e;
              i.error(`Error checking heartbeat automation before archive`, {
                safe: {},
                sensitive: { error: t },
              });
            }
            if (t == null && !P) {
              W(e);
              return;
            }
            (xt(e), wt(t?.name ?? null), vt(!0));
          })();
        }
      }),
      (u[51] = D),
      (u[52] = f),
      (u[53] = W),
      (u[54] = M),
      (u[55] = j),
      (u[56] = P),
      (u[57] = jn))
    : (jn = u[57]);
  let G = jn,
    Mn;
  u[58] !== f || u[59] !== O || u[60] !== E || u[61] !== b
    ? ((Mn = (e) => {
        if (e != null) {
          Ve({ scope: E, automationId: e.id, title: e.name });
          return;
        }
        Ht({
          scope: E,
          seed: {
            directiveKey: `thread-overflow-${f}`,
            mode: null,
            id: null,
            kind: `heartbeat`,
            name: b ?? ``,
            prompt: ``,
            rrule: ``,
            cwds: [],
            executionEnvironment: null,
            localEnvironmentConfigPath: null,
            model: null,
            reasoningEffort: null,
            targetThreadId: f,
            status: `ACTIVE`,
          },
          title:
            b ??
            O.formatMessage({
              id: `localConversation.automation.newTabTitle`,
              defaultMessage: `New scheduled task`,
              description: `Right panel tab title for a scheduled task created from a task`,
            }),
        });
      }),
      (u[58] = f),
      (u[59] = O),
      (u[60] = E),
      (u[61] = b),
      (u[62] = Mn))
    : (Mn = u[62]);
  let Nn = Mn,
    Pn;
  u[63] !== On || u[64] !== f || u[65] !== y || u[66] !== M || u[67] !== O || u[68] !== E || u[69] !== v
    ? ((Pn = () => {
        f != null &&
          v != null &&
          St(E, v, { sourceConversationId: f, cwd: y, hostId: M, collaborationMode: On, intl: O }).catch(
            (e) => {
              (i.error(`Error opening side chat`, { safe: {}, sensitive: { error: e } }),
                E.get(se).danger(
                  O.formatMessage({
                    id: `threadHeader.openSideChatError`,
                    defaultMessage: `Failed to open side chat`,
                    description: `Error message shown when opening a side chat fails`,
                  }),
                  { errorAnalytics: { toastId: `threadHeader.openSideChatError` } },
                ));
            },
          );
      }),
      (u[63] = On),
      (u[64] = f),
      (u[65] = y),
      (u[66] = M),
      (u[67] = O),
      (u[68] = E),
      (u[69] = v),
      (u[70] = Pn))
    : (Pn = u[70]);
  let Fn = Pn,
    In;
  u[71] !== f || u[72] !== st || u[73] !== p || u[74] !== m
    ? ((In = () => {
        f != null && p != null && st({ conversationId: f, parentConversationId: m ?? null, getMarkdown: p });
      }),
      (u[71] = f),
      (u[72] = st),
      (u[73] = p),
      (u[74] = m),
      (u[75] = In))
    : (In = u[75]);
  let Ln = f != null && p != null,
    Rn;
  (u[76] === Ln ? (Rn = u[77]) : ((Rn = { enabled: Ln }), (u[76] = Ln), (u[77] = Rn)),
    Qt(`copyConversationMarkdown`, In, Rn));
  let zn = f != null && Dn,
    Bn;
  (u[78] === zn ? (Bn = u[79]) : ((Bn = { enabled: zn }), (u[78] = zn), (u[79] = Bn)),
    Qt(`openSideChat`, Fn, Bn));
  let Vn;
  u[80] === f ? (Vn = u[81]) : ((Vn = { conversationId: f }), (u[80] = f), (u[81] = Vn));
  let Hn = x(je, Vn),
    Un;
  u[82] !== f || u[83] !== M || u[84] !== tt
    ? ((Un = () => {
        f != null && tt({ conversationId: f, hostId: M });
      }),
      (u[82] = f),
      (u[83] = M),
      (u[84] = tt),
      (u[85] = Un))
    : (Un = u[85]);
  let Wn = E.value.routeKind === `local-thread` && E.value.conversationId === f && Hn.canMarkUnread,
    Gn;
  (u[86] === Wn ? (Gn = u[87]) : ((Gn = { enabled: Wn }), (u[86] = Wn), (u[87] = Gn)),
    Qt(`markThreadUnread`, Un, Gn));
  let Kn;
  u[88] !== f || u[89] !== L || u[90] !== j || u[91] !== g
    ? ((Kn = () => {
        j || (g ?? f) == null || L();
      }),
      (u[88] = f),
      (u[89] = L),
      (u[90] = j),
      (u[91] = g),
      (u[92] = Kn))
    : (Kn = u[92]);
  let qn;
  (u[93] !== f || u[94] !== j || u[95] !== _ || u[96] !== g || u[97] !== b
    ? ((qn = [f, j, g, b, _]), (u[93] = f), (u[94] = j), (u[95] = _), (u[96] = g), (u[97] = b), (u[98] = qn))
    : (qn = u[98]),
    re(`rename-thread`, Kn, qn));
  let Jn, Yn;
  (u[99] === G
    ? ((Jn = u[100]), (Yn = u[101]))
    : ((Jn = (e) => {
        let { source: t } = e;
        G(t);
      }),
      (Yn = [G]),
      (u[99] = G),
      (u[100] = Jn),
      (u[101] = Yn)),
    re(`archive-thread`, Jn, Yn));
  let Xn, Zn;
  (u[102] !== f || u[103] !== k || u[104] !== y || u[105] !== M || u[106] !== g
    ? ((Xn = () => {
        k(y, f != null && g == null ? { conversationId: f, hostId: M } : void 0);
      }),
      (Zn = [y, f, M, g, k]),
      (u[102] = f),
      (u[103] = k),
      (u[104] = y),
      (u[105] = M),
      (u[106] = g),
      (u[107] = Xn),
      (u[108] = Zn))
    : ((Xn = u[107]), (Zn = u[108])),
    re(`copy-conversation-path`, Xn, Zn));
  let Qn, $n;
  (u[109] !== f || u[110] !== k || u[111] !== y || u[112] !== M || u[113] !== g
    ? ((Qn = () => {
        k(y, f != null && g == null ? { conversationId: f, hostId: M } : void 0);
      }),
      ($n = [y, f, M, g, k]),
      (u[109] = f),
      (u[110] = k),
      (u[111] = y),
      (u[112] = M),
      (u[113] = g),
      (u[114] = Qn),
      (u[115] = $n))
    : ((Qn = u[114]), ($n = u[115])),
    re(`copy-working-directory`, Qn, $n));
  let er;
  u[116] !== f || u[117] !== ot || u[118] !== M
    ? ((er = () => {
        f && ot(f, M, void 0);
      }),
      (u[116] = f),
      (u[117] = ot),
      (u[118] = M),
      (u[119] = er))
    : (er = u[119]);
  let tr;
  (u[120] !== D || u[121] !== f || u[122] !== M
    ? ((tr = [D, f, M]), (u[120] = D), (u[121] = f), (u[122] = M), (u[123] = tr))
    : (tr = u[123]),
    re(`copy-deeplink`, er, tr));
  let nr;
  u[124] !== f || u[125] !== y || u[126] !== C || u[127] !== A || u[128] !== E
    ? ((nr = async () => {
        if (f == null) return;
        Ke(E, oe, {
          destination: C
            ? pe.CODEX_THREAD_FORK_DESTINATION_SAME_WORKTREE
            : pe.CODEX_THREAD_FORK_DESTINATION_LOCAL,
          source: ie.CODEX_THREAD_FORK_SOURCE_THREAD_OVERFLOW_MENU,
        });
        let e = await Pt(E, { sourceConversationId: f, sourceWorkspaceRoot: y });
        e != null && A(`/local/${e}`);
      }),
      (u[124] = f),
      (u[125] = y),
      (u[126] = C),
      (u[127] = A),
      (u[128] = E),
      (u[129] = nr))
    : (nr = u[129]);
  let rr = nr,
    ir;
  u[130] !== f || u[131] !== y || u[132] !== kn || u[133] !== A || u[134] !== E
    ? ((ir = async () => {
        if (f == null) return;
        Ke(E, oe, {
          destination: pe.CODEX_THREAD_FORK_DESTINATION_NEW_WORKTREE,
          source: ie.CODEX_THREAD_FORK_SOURCE_THREAD_OVERFLOW_MENU,
        });
        let e = await Yt(E, {
          localEnvironmentSelectionsByWorkspace: kn,
          sourceConversationId: f,
          sourceWorkspaceRoot: y,
        });
        e != null && y != null && A(`/local/${e.clientThreadId}`);
      }),
      (u[130] = f),
      (u[131] = y),
      (u[132] = kn),
      (u[133] = A),
      (u[134] = E),
      (u[135] = ir))
    : (ir = u[135]);
  let ar = ir,
    or;
  u[136] !== W || u[137] !== yt
    ? ((or = () => {
        yt != null && (vt(!1), W(yt));
      }),
      (u[136] = W),
      (u[137] = yt),
      (u[138] = or))
    : (or = u[138]);
  let sr = or,
    cr;
  u[139] !== O || u[140] !== I
    ? ((cr = I ? O.formatMessage(ut.moreActions, { productName: `dot` }) : O.formatMessage(Rt.moreActions)),
      (u[139] = O),
      (u[140] = I),
      (u[141] = cr))
    : (cr = u[141]);
  let lr = cr,
    ur = Ce ?? `icon-sm`,
    dr;
  u[142] === ur ? (dr = u[143]) : ((dr = (0, U.jsx)(gt, { className: ur })), (u[142] = ur), (u[143] = dr));
  let fr = dr;
  if (T === `toolbar`) {
    let e;
    (u[144] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(o, { icon: { 16: n, 20: ce } })), (u[144] = e))
      : (e = u[144]),
      (fr = e));
  } else if (T === `iconMd`) {
    let e;
    (u[145] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(`span`, {
          className: `flex shrink-0`,
          children: (0, U.jsx)(d, { "aria-hidden": !1, asset: le }),
        })),
        (u[145] = e))
      : (e = u[145]),
      (fr = e));
  }
  let pr;
  u[146] !== D ||
  u[147] !== w ||
  u[148] !== B ||
  u[149] !== Ze ||
  u[150] !== k ||
  u[151] !== L ||
  u[152] !== A ||
  u[153] !== h ||
  u[154] !== E
    ? ((pr = () => {
        let e = D.get(dt, h ?? null);
        if (e == null) return [];
        let t = e.clientThreadId == null ? null : $e(rt(e.clientThreadId));
        return Re({
          scope: D,
          surface: `header`,
          paneItems: on(E),
          pendingWorktree: e,
          canPin: B,
          onPinnedChange: (n) => {
            (Ie(D, e.id, n), n && t != null && Ye(D, t));
          },
          onRename: L,
          onArchive: () => {
            (Ze(e.id), t != null && Ye(D, t), w === `home` && A(`/`));
          },
          onCopyWorkingDirectory: k,
        });
      }),
      (u[146] = D),
      (u[147] = w),
      (u[148] = B),
      (u[149] = Ze),
      (u[150] = k),
      (u[151] = L),
      (u[152] = A),
      (u[153] = h),
      (u[154] = E),
      (u[155] = pr))
    : (pr = u[155]);
  let mr = pr,
    hr;
  u[156] !== D ||
  u[157] !== f ||
  u[158] !== rr ||
  u[159] !== ar ||
  u[160] !== Nn ||
  u[161] !== Fn ||
  u[162] !== j
    ? ((hr = (e) => {
        if (!(j && e !== `scheduled-task`))
          bb464: switch (e) {
            case `animation-debug`:
              break bb464;
            case `open-side-chat`:
              Fn();
              break bb464;
            case `fork-into-local`:
              rr();
              break bb464;
            case `fork-into-worktree`:
              ar();
              break bb464;
            case `scheduled-task`:
              Nn(
                zt({
                  automations: D.get(Ge).data?.items ?? [],
                  conversationId: f,
                  includePausedAutomations: !0,
                }),
              );
          }
      }),
      (u[156] = D),
      (u[157] = f),
      (u[158] = rr),
      (u[159] = ar),
      (u[160] = Nn),
      (u[161] = Fn),
      (u[162] = j),
      (u[163] = hr))
    : (hr = u[163]);
  let gr = hr,
    _r;
  u[164] !== D ||
  u[165] !== Ae ||
  u[166] !== Dn ||
  u[167] !== B ||
  u[168] !== f ||
  u[169] !== y ||
  u[170] !== gr ||
  u[171] !== p ||
  u[172] !== mr ||
  u[173] !== G ||
  u[174] !== L ||
  u[175] !== M ||
  u[176] !== C ||
  u[177] !== we ||
  u[178] !== E ||
  u[179] !== We ||
  u[180] !== Je
    ? ((_r = async () => {
        let e = [
          ...(E.get(bt) == null
            ? []
            : [
                {
                  id: `workspace-new-chat`,
                  message: ue({
                    id: `floatingComposer.newChat`,
                    defaultMessage: `New chat`,
                    description: `Menu action to start a new primary chat while keeping the workspace content open`,
                  }),
                  icon: xe,
                  selectAfterClose: !0,
                  onSelect: () => E.get(bt)?.startNewChat(),
                },
              ]),
          ...(we ?? []),
          ...(f == null
            ? mr()
            : await qe({
                scope: D,
                surface: `header`,
                paneItems: on(E),
                isWorktreeThread: C,
                canOpenSideChat: Dn,
                target: { conversationId: f, hostId: M, cwd: y },
                actions: Je,
                canPin: B,
                executeAction: gr,
                getConversationMarkdown: p,
                onRename: L,
                onArchive: () => G(Ae),
              })),
        ];
        return We ? cn(e) : e;
      }),
      (u[164] = D),
      (u[165] = Ae),
      (u[166] = Dn),
      (u[167] = B),
      (u[168] = f),
      (u[169] = y),
      (u[170] = gr),
      (u[171] = p),
      (u[172] = mr),
      (u[173] = G),
      (u[174] = L),
      (u[175] = M),
      (u[176] = C),
      (u[177] = we),
      (u[178] = E),
      (u[179] = We),
      (u[180] = Je),
      (u[181] = _r))
    : (_r = u[181]);
  let vr = _r;
  if (f == null && g == null && ze == null && !We) return null;
  let yr;
  u[182] !== D.query || u[183] !== f
    ? ((yr = async () => {
        f != null && (await D.query.getOrFetch(Ge).catch(yn));
      }),
      (u[182] = D.query),
      (u[183] = f),
      (u[184] = yr))
    : (yr = u[184]);
  let br = yr,
    K;
  u[185] !== f ||
  u[186] !== G ||
  u[187] !== M ||
  u[188] !== j ||
  u[189] !== E.value.conversationId ||
  u[190] !== E.value.routeKind
    ? ((K =
        f != null && !j && E.value.routeKind === `local-thread` && E.value.conversationId === f
          ? (0, U.jsx)(U.Fragment, {
              children: (0, U.jsx)(un, { conversationId: f, hostId: M, onDelete: G }),
            })
          : null),
      (u[185] = f),
      (u[186] = G),
      (u[187] = M),
      (u[188] = j),
      (u[189] = E.value.conversationId),
      (u[190] = E.value.routeKind),
      (u[191] = K))
    : (K = u[191]);
  let q;
  u[192] !== Lt || u[193] !== f || u[194] !== y || u[195] !== M
    ? ((q = Lt && y != null ? (0, U.jsx)(fn, { conversationId: f, cwd: he(y), hostId: M }) : null),
      (u[192] = Lt),
      (u[193] = f),
      (u[194] = y),
      (u[195] = M),
      (u[196] = q))
    : (q = u[196]);
  let J;
  u[197] !== B || u[198] !== f || u[199] !== j || u[200] !== dn
    ? ((J = f == null ? null : (0, U.jsx)(ln, { enabled: B && !j, onToggle: dn })),
      (u[197] = B),
      (u[198] = f),
      (u[199] = j),
      (u[200] = dn),
      (u[201] = J))
    : (J = u[201]);
  let Y;
  u[202] !== D || u[203] !== I || u[204] !== br
    ? ((Y = () => {
        if ((br(), I)) return it(D).then(vn, _n);
      }),
      (u[202] = D),
      (u[203] = I),
      (u[204] = br),
      (u[205] = Y))
    : (Y = u[205]);
  let X;
  u[206] !== hn ||
  u[207] !== Cn ||
  u[208] !== Sn ||
  u[209] !== gn ||
  u[210] !== wn ||
  u[211] !== mn ||
  u[212] !== H
    ? ((X = {
        "archive-thread": hn,
        "copy-conversation-markdown": Cn,
        "copy-deeplink": Sn,
        "copy-working-directory": gn,
        "open-side-chat": wn,
        "pin-thread": H,
        "rename-thread": mn,
        "unpin-thread": H,
      }),
      (u[206] = hn),
      (u[207] = Cn),
      (u[208] = Sn),
      (u[209] = gn),
      (u[210] = wn),
      (u[211] = mn),
      (u[212] = H),
      (u[213] = X))
    : (X = u[213]);
  let xr = T === `toolbar`,
    Z;
  u[214] !== lr || u[215] !== xr || u[216] !== ye || u[217] !== Ne || u[218] !== T || u[219] !== fr
    ? ((Z = (0, U.jsx)(t, {
        className: ye,
        size: T,
        uniform: xr,
        color: Ne,
        "aria-label": lr,
        children: fr,
      })),
      (u[214] = lr),
      (u[215] = xr),
      (u[216] = ye),
      (u[217] = Ne),
      (u[218] = T),
      (u[219] = fr),
      (u[220] = Z))
    : (Z = u[220]);
  let Q;
  u[221] !== Me || u[222] !== vr || u[223] !== Y || u[224] !== X || u[225] !== Z
    ? ((Q = (0, U.jsx)(Te, {
        preserveBrowserContextMenu: !0,
        awaitBeforeOpen: !1,
        getItems: vr,
        renderItem: sn,
        onBeforeOpen: Y,
        shortcuts: X,
        trigger: `click`,
        align: Me,
        contentWidth: `menu`,
        children: Z,
      })),
      (u[221] = Me),
      (u[222] = vr),
      (u[223] = Y),
      (u[224] = X),
      (u[225] = Z),
      (u[226] = Q))
    : (Q = u[226]);
  let $;
  u[227] !== Ct || u[228] !== sr || u[229] !== _t || u[230] !== P
    ? (($ =
        _t &&
        (0, U.jsx)(Ut, {
          heartbeatAutomationName: Ct,
          isRunning: P,
          open: !0,
          onOpenChange: vt,
          onConfirm: sr,
        })),
      (u[227] = Ct),
      (u[228] = sr),
      (u[229] = _t),
      (u[230] = P),
      (u[231] = $))
    : ($ = u[231]);
  let Sr;
  return (
    u[232] !== K || u[233] !== q || u[234] !== J || u[235] !== Q || u[236] !== $
      ? ((Sr = (0, U.jsxs)(U.Fragment, { children: [K, q, J, Q, $] })),
        (u[232] = K),
        (u[233] = q),
        (u[234] = J),
        (u[235] = Q),
        (u[236] = $),
        (u[237] = Sr))
      : (Sr = u[237]),
    Sr
  );
}
function _n() {}
function vn() {}
function yn() {}
var bn, xn, U;
function Sn() {
  return (Sn = e(() => {
    ((bn = Se()),
      h(),
      u(),
      m(),
      _e(),
      (xn = Ee()),
      b(),
      v(),
      Xt(),
      Ne(),
      Ot(),
      Fe(),
      Ct(),
      Ae(),
      p(),
      be(),
      g(),
      f(),
      _(),
      T(),
      de(),
      fe(),
      Lt(),
      Ze(),
      Bt(),
      ae(),
      L(),
      O(),
      ze(),
      A(),
      wt(),
      dn(),
      P(),
      en(),
      et(),
      nt(),
      w(),
      Ce(),
      Me(),
      Gt(),
      st(),
      E(),
      M(),
      Ft(),
      xt(),
      k(),
      Nt(),
      z(),
      Je(),
      Be(),
      R(),
      ee(),
      ye(),
      j(),
      We(),
      D(),
      _t(),
      vt(),
      tt(),
      ot(),
      S(),
      B(),
      hn(),
      (U = we()));
  }))();
}
export { Sn as n, gn as t };
//# sourceMappingURL=thread-overflow-menu-87dc19d9cdf5.js.map
