import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  A4 as r,
  A6 as i,
  AMt as ee,
  Amn as a,
  B1t as te,
  B6t as o,
  B7 as s,
  BV as c,
  Dmn as l,
  F3t as ne,
  G2 as re,
  GG as ie,
  H2 as ae,
  H4 as oe,
  IXt as u,
  JXt as se,
  KI as d,
  L0 as ce,
  LF as le,
  N3t as f,
  NTt as ue,
  O3t as de,
  Omn as fe,
  Opn as pe,
  QAt as me,
  QJt as he,
  QXt as ge,
  RF as _e,
  SY as ve,
  Smn as p,
  Spn as ye,
  TEt as be,
  TY as xe,
  Ui as Se,
  V1t as Ce,
  V2 as we,
  V7 as Te,
  VTt as Ee,
  W3 as De,
  WG as Oe,
  Wi as ke,
  XAt as Ae,
  XI as m,
  Y3 as je,
  YDt as Me,
  ZJt as h,
  _Jt as g,
  a3t as Ne,
  akt as _,
  bh as v,
  bmn as y,
  cEt as Pe,
  e0t as b,
  eZt as Fe,
  ekt as Ie,
  gRt as Le,
  hmn as x,
  j6 as Re,
  jXt as ze,
  kMt as Be,
  kXt as S,
  kmn as C,
  o3t as w,
  pJt as Ve,
  q3 as He,
  qDt as T,
  rTt as E,
  snn as Ue,
  u3 as D,
  uTt as We,
  v3 as Ge,
  vh as Ke,
  wY as qe,
  xRt as O,
  xY as k,
  yTt as Je,
  z0 as Ye,
  z1t as Xe,
  zV as Ze,
} from "./app-initial-f094ef01c64d.js";
import {
  Ff as Qe,
  If as $e,
  Lf as A,
  af as j,
  bf as et,
  dp as M,
  if as tt,
  op as nt,
  sp as rt,
  up as it,
  xf as at,
} from "./app-primary-4c40d73a1074.js";
import { n as ot, r as st, t as N } from "./open-automation-side-panel-tab-3dba1f01fdd9.js";
import { a as ct, i as lt, n as P, t as ut } from "./thread-pin-shortcut-bridge-692ac0843530.js";
function F(e) {
  let t = (0, ft.c)(185),
    {
      conversationId: r,
      getConversationMarkdown: i,
      markdownParentConversationId: ee,
      pendingClientThreadId: a,
      pendingWorktreeId: o,
      onRenamePendingWorktree: s,
      sideChatTab: c,
      cwd: l,
      hostId: ie,
      title: u,
      canPin: ce,
      isWorktreeThread: de,
      archiveNavigation: me,
      archiveSource: ge,
      dropdownAlign: _e,
      triggerButtonClassName: ye,
      triggerButtonColor: Se,
      triggerButtonSize: we,
      triggerIconClassName: De,
    } = e,
    m = ce === void 0 || ce,
    h = de !== void 0 && de,
    g = me === void 0 ? `home` : me,
    _ = ge === void 0 ? `thread_overflow_menu` : ge,
    v = _e === void 0 ? `start` : _e,
    y = Se === void 0 ? `ghost` : Se,
    b = we === void 0 ? `icon` : we,
    x = n(Le),
    S = n(Ne),
    C = pe(),
    w = xe(),
    { cancelPendingWorktree: T } = je(),
    {
      archiveThread: E,
      markThreadAsUnread: D,
      renameThread: O,
      copyAppLink: k,
      copyConversationMarkdown: A,
      copyWorkingDirectory: j,
    } = w,
    M = se(),
    [rt, at] = (0, I.useState)(!1),
    [N, lt] = (0, I.useState)(null),
    [P, F] = (0, I.useState)(null),
    [pt, mt] = (0, I.useState)(null),
    ht = f(Ee, r),
    gt = f(We, r),
    _t = f(ke, r),
    R = gt || _t,
    z = ie ?? ht,
    B = f(Pe, r)?.type === `active`,
    V;
  t[0] === r ? (V = t[1]) : ((V = r ?? Ue(`missing-conversation`)), (t[0] = r), (t[1] = V));
  let vt;
  t[2] === V ? (vt = t[3]) : ((vt = Ie(V)), (t[2] = V), (t[3] = vt));
  let yt = f(oe, vt),
    bt = ne(Ge),
    xt = f(be, r),
    H = f(!1, r),
    St;
  t[4] === m ? (St = t[5]) : ((St = { canPin: m }), (t[4] = m), (t[5] = St));
  let { isPinned: Ct, togglePin: wt } = qe(r, St),
    Tt = f(re, a ?? null) ?? Ct,
    Et;
  t[6] !== m || t[7] !== R || t[8] !== Tt || t[9] !== o || t[10] !== x || t[11] !== wt
    ? ((Et = () => {
        if (!(!m || R)) {
          if (o != null) {
            He(x, o, !Tt);
            return;
          }
          wt();
        }
      }),
      (t[6] = m),
      (t[7] = R),
      (t[8] = Tt),
      (t[9] = o),
      (t[10] = x),
      (t[11] = wt),
      (t[12] = Et))
    : (Et = t[12]);
  let Dt = Et,
    Ot = f(d, `toggleThreadPin`),
    kt = m ? Ot : null,
    At = f(d, `renameThread`),
    jt = f(d, `archiveThread`),
    Mt = f(d, `copyWorkingDirectory`),
    Nt = f(d, `copyDeeplink`),
    Pt = f(d, `copyConversationMarkdown`),
    Ft = f(d, `openSideChat`);
  f(ue, r);
  let It;
  t[13] !== r || t[14] !== R || t[15] !== c
    ? ((It = r != null && !R && c != null && !he()),
      (t[13] = r),
      (t[14] = R),
      (t[15] = c),
      (t[16] = It))
    : (It = t[16]);
  let Lt = It,
    Rt = f(Je, r),
    zt = ne(Ye) ?? {},
    Bt;
  t[17] !== g ||
  t[18] !== E ||
  t[19] !== r ||
  t[20] !== z ||
  t[21] !== M ||
  t[22] !== bt ||
  t[23] !== yt ||
  t[24] !== xt
    ? ((Bt = (e) => {
        if (r == null) return;
        let t = yt ?? (xt === `projectless` || bt?.includes(r) === !0 ? null : void 0),
          n =
            g === `home`
              ? () => {
                  M(`/`, {
                    replace: !0,
                    state: {
                      focusComposerNonce: Date.now(),
                      ...(t === void 0 ? {} : { project: le(t) }),
                    },
                  });
                }
              : void 0;
        E({
          conversationId: r,
          hostId: z,
          source: e,
          onArchiveStart: n,
          appHistory: {
            onRedoStart: (e) => {
              e && n?.();
            },
          },
        });
      }),
      (t[17] = g),
      (t[18] = E),
      (t[19] = r),
      (t[20] = z),
      (t[21] = M),
      (t[22] = bt),
      (t[23] = yt),
      (t[24] = xt),
      (t[25] = Bt))
    : (Bt = t[25]);
  let U = Bt,
    Vt;
  t[26] !== r || t[27] !== U || t[28] !== R || t[29] !== B
    ? ((Vt = (e) => {
        r == null ||
          R ||
          (async () => {
            let t = null;
            try {
              t = Ke({
                automations: (await Ve(`list-automations`)).items,
                conversationId: r,
                includePausedAutomations: !0,
              });
            } catch (e) {
              let t = e;
              fe.error(`Error checking heartbeat automation before archive`, {
                safe: {},
                sensitive: { error: t },
              });
            }
            if (t == null && !B) {
              U(e);
              return;
            }
            (lt(e), mt(t?.name ?? null), at(!0));
          })();
      }),
      (t[26] = r),
      (t[27] = U),
      (t[28] = R),
      (t[29] = B),
      (t[30] = Vt))
    : (Vt = t[30]);
  let W = Vt,
    Ht;
  t[31] !== r || t[32] !== C || t[33] !== x || t[34] !== u
    ? ((Ht = (e) => {
        if (e != null) {
          ot({ scope: x, automationId: e.id, title: e.name });
          return;
        }
        st({
          scope: x,
          seed: {
            directiveKey: `thread-overflow-${r}`,
            mode: null,
            id: null,
            kind: `heartbeat`,
            name: u ?? ``,
            prompt: ``,
            rrule: ``,
            cwds: [],
            executionEnvironment: null,
            localEnvironmentConfigPath: null,
            model: null,
            reasoningEffort: null,
            targetThreadId: r,
            status: `ACTIVE`,
          },
          title:
            u ??
            C.formatMessage({
              id: `localConversation.automation.newTabTitle`,
              defaultMessage: `New scheduled task`,
              description: `Right panel tab title for a scheduled task created from a task`,
            }),
        });
      }),
      (t[31] = r),
      (t[32] = C),
      (t[33] = x),
      (t[34] = u),
      (t[35] = Ht))
    : (Ht = t[35]);
  let Ut = Ht,
    Wt;
  t[36] !== Rt ||
  t[37] !== r ||
  t[38] !== l ||
  t[39] !== z ||
  t[40] !== C ||
  t[41] !== x ||
  t[42] !== c
    ? ((Wt = () => {
        r == null ||
          c == null ||
          ct(x, c, {
            sourceConversationId: r,
            cwd: l,
            hostId: z,
            collaborationMode: Rt,
            intl: C,
          }).catch((e) => {
            (fe.error(`Error opening side chat`, { safe: {}, sensitive: { error: e } }),
              x.get(ze).danger(
                C.formatMessage({
                  id: `threadHeader.openSideChatError`,
                  defaultMessage: `Failed to open side chat`,
                  description: `Error message shown when opening a side chat fails`,
                }),
              ));
          });
      }),
      (t[36] = Rt),
      (t[37] = r),
      (t[38] = l),
      (t[39] = z),
      (t[40] = C),
      (t[41] = x),
      (t[42] = c),
      (t[43] = Wt))
    : (Wt = t[43]);
  let Gt = Wt,
    Kt;
  t[44] !== r || t[45] !== A || t[46] !== i || t[47] !== ee
    ? ((Kt = () => {
        r != null &&
          i != null &&
          A({ conversationId: r, parentConversationId: ee ?? null, getMarkdown: i });
      }),
      (t[44] = r),
      (t[45] = A),
      (t[46] = i),
      (t[47] = ee),
      (t[48] = Kt))
    : (Kt = t[48]);
  let qt = r != null && i != null,
    Jt;
  (t[49] === qt ? (Jt = t[50]) : ((Jt = { enabled: qt }), (t[49] = qt), (t[50] = Jt)),
    Te(`copyConversationMarkdown`, Kt, Jt));
  let Yt = r != null && Lt,
    Xt;
  (t[51] === Yt ? (Xt = t[52]) : ((Xt = { enabled: Yt }), (t[51] = Yt), (t[52] = Xt)),
    Te(`openSideChat`, Gt, Xt));
  let Zt;
  t[53] !== r || t[54] !== z || t[55] !== D
    ? ((Zt = () => {
        r != null && D({ conversationId: r, hostId: z });
      }),
      (t[53] = r),
      (t[54] = z),
      (t[55] = D),
      (t[56] = Zt))
    : (Zt = t[56]);
  let Qt = x.value.routeKind === `local-thread` && x.value.conversationId === r,
    $t;
  (t[57] === Qt ? ($t = t[58]) : (($t = { enabled: Qt }), (t[57] = Qt), (t[58] = $t)),
    Te(`markThreadUnread`, Zt, $t));
  let en, tn;
  (t[59] !== r || t[60] !== R || t[61] !== o || t[62] !== u
    ? ((en = () => {
        R || (r == null && o == null) || F(u ?? ``);
      }),
      (tn = [r, R, o, u]),
      (t[59] = r),
      (t[60] = R),
      (t[61] = o),
      (t[62] = u),
      (t[63] = en),
      (t[64] = tn))
    : ((en = t[63]), (tn = t[64])),
    p(`rename-thread`, en, tn));
  let nn, rn;
  (t[65] === W
    ? ((nn = t[66]), (rn = t[67]))
    : ((nn = (e) => {
        let { source: t } = e;
        W(t);
      }),
      (rn = [W]),
      (t[65] = W),
      (t[66] = nn),
      (t[67] = rn)),
    p(`archive-thread`, nn, rn));
  let an;
  t[68] !== j || t[69] !== l
    ? ((an = () => {
        j(l);
      }),
      (t[68] = j),
      (t[69] = l),
      (t[70] = an))
    : (an = t[70]);
  let on;
  (t[71] === l ? (on = t[72]) : ((on = [l]), (t[71] = l), (t[72] = on)),
    p(`copy-conversation-path`, an, on));
  let sn;
  t[73] !== j || t[74] !== l
    ? ((sn = () => {
        j(l);
      }),
      (t[73] = j),
      (t[74] = l),
      (t[75] = sn))
    : (sn = t[75]);
  let cn;
  (t[76] === l ? (cn = t[77]) : ((cn = [l]), (t[76] = l), (t[77] = cn)),
    p(`copy-working-directory`, sn, cn));
  let G;
  t[78] !== r || t[79] !== k
    ? ((G = () => {
        r && k(r);
      }),
      (t[78] = r),
      (t[79] = k),
      (t[80] = G))
    : (G = t[80]);
  let ln;
  (t[81] === r ? (ln = t[82]) : ((ln = [r]), (t[81] = r), (t[82] = ln)), p(`copy-deeplink`, G, ln));
  let un;
  t[83] !== r || t[84] !== l || t[85] !== h || t[86] !== M || t[87] !== x
    ? ((un = async () => {
        if (r == null) return;
        Fe(x, te, {
          destination: h
            ? Xe.CODEX_THREAD_FORK_DESTINATION_SAME_WORKTREE
            : Xe.CODEX_THREAD_FORK_DESTINATION_LOCAL,
          source: Ce.CODEX_THREAD_FORK_SOURCE_THREAD_OVERFLOW_MENU,
        });
        let e = await Qe(x, { sourceConversationId: r, sourceWorkspaceRoot: l });
        e != null && M(`/local/${e}`);
      }),
      (t[83] = r),
      (t[84] = l),
      (t[85] = h),
      (t[86] = M),
      (t[87] = x),
      (t[88] = un))
    : (un = t[88]);
  let dn = un,
    fn;
  t[89] !== r || t[90] !== l || t[91] !== zt || t[92] !== M || t[93] !== x
    ? ((fn = async () => {
        if (r == null) return;
        Fe(x, te, {
          destination: Xe.CODEX_THREAD_FORK_DESTINATION_NEW_WORKTREE,
          source: Ce.CODEX_THREAD_FORK_SOURCE_THREAD_OVERFLOW_MENU,
        });
        let e = await $e(x, {
          localEnvironmentSelectionsByWorkspace: zt,
          sourceConversationId: r,
          sourceWorkspaceRoot: l,
        });
        e != null && l != null && M(`/local/${e.clientThreadId}`);
      }),
      (t[89] = r),
      (t[90] = l),
      (t[91] = zt),
      (t[92] = M),
      (t[93] = x),
      (t[94] = fn))
    : (fn = t[94]);
  let pn = fn,
    mn;
  t[95] !== U || t[96] !== N
    ? ((mn = () => {
        N != null && (at(!1), U(N));
      }),
      (t[95] = U),
      (t[96] = N),
      (t[97] = mn))
    : (mn = t[97]);
  let hn = mn,
    gn;
  t[98] !== C || t[99] !== H
    ? ((gn = C.formatMessage(ve.moreActions)), (t[98] = C), (t[99] = H), (t[100] = gn))
    : (gn = t[100]);
  let _n = gn,
    vn = De ?? `icon-sm`,
    yn;
  t[101] !== S ||
  t[102] !== g ||
  t[103] !== m ||
  t[104] !== T ||
  t[105] !== j ||
  t[106] !== M ||
  t[107] !== a ||
  t[108] !== u
    ? ((yn = () => {
        let e = S.get(ae, a ?? null);
        if (e == null) return [];
        let t = e.clientThreadId == null ? null : Ae(Ie(e.clientThreadId));
        return tt({
          scope: S,
          surface: `header`,
          pendingWorktree: e,
          canPin: m,
          onPinnedChange: (n) => {
            (He(S, e.id, n), n && t != null && Me(S, t));
          },
          onRename: () => F(u ?? ``),
          onArchive: () => {
            (T(e.id), t != null && Me(S, t), g === `home` && M(`/`));
          },
          onCopyWorkingDirectory: j,
        });
      }),
      (t[101] = S),
      (t[102] = g),
      (t[103] = m),
      (t[104] = T),
      (t[105] = j),
      (t[106] = M),
      (t[107] = a),
      (t[108] = u),
      (t[109] = yn))
    : (yn = t[109]);
  let bn = yn,
    xn;
  t[110] !== S ||
  t[111] !== r ||
  t[112] !== dn ||
  t[113] !== pn ||
  t[114] !== Ut ||
  t[115] !== Gt ||
  t[116] !== R
    ? ((xn = (e) => {
        if (!(R && e !== `scheduled-task`))
          bb328: switch (e) {
            case `open-side-chat`:
              Gt();
              break bb328;
            case `fork-into-local`:
              dn();
              break bb328;
            case `fork-into-worktree`:
              pn();
              break bb328;
            case `scheduled-task`:
              Ut(
                Ke({
                  automations: S.get(Re).data?.items ?? [],
                  conversationId: r,
                  includePausedAutomations: !0,
                }),
              );
          }
      }),
      (t[110] = S),
      (t[111] = r),
      (t[112] = dn),
      (t[113] = pn),
      (t[114] = Ut),
      (t[115] = Gt),
      (t[116] = R),
      (t[117] = xn))
    : (xn = t[117]);
  let Sn = xn,
    Cn;
  t[118] !== S ||
  t[119] !== _ ||
  t[120] !== Lt ||
  t[121] !== m ||
  t[122] !== r ||
  t[123] !== l ||
  t[124] !== Sn ||
  t[125] !== i ||
  t[126] !== bn ||
  t[127] !== W ||
  t[128] !== z ||
  t[129] !== h ||
  t[130] !== w ||
  t[131] !== u
    ? ((Cn = () =>
        r == null
          ? bn()
          : et({
              scope: S,
              surface: `header`,
              isWorktreeThread: h,
              canOpenSideChat: Lt,
              target: { conversationId: r, hostId: z, cwd: l },
              actions: w,
              canPin: m,
              executeAction: Sn,
              getConversationMarkdown: i,
              onRename: () => F(u ?? ``),
              onArchive: () => W(_),
            })),
      (t[118] = S),
      (t[119] = _),
      (t[120] = Lt),
      (t[121] = m),
      (t[122] = r),
      (t[123] = l),
      (t[124] = Sn),
      (t[125] = i),
      (t[126] = bn),
      (t[127] = W),
      (t[128] = z),
      (t[129] = h),
      (t[130] = w),
      (t[131] = u),
      (t[132] = Cn))
    : (Cn = t[132]);
  let wn = Cn;
  if (r == null && o == null) return null;
  let Tn;
  t[133] !== S.query || t[134] !== r
    ? ((Tn = async () => {
        r != null && (await S.query.getOrFetch(Re).catch(dt));
      }),
      (t[133] = S.query),
      (t[134] = r),
      (t[135] = Tn))
    : (Tn = t[135]);
  let En = Tn,
    K;
  t[136] !== m || t[137] !== r || t[138] !== R || t[139] !== Dt
    ? ((K = r == null ? null : (0, L.jsx)(ut, { enabled: m && !R, onToggle: Dt })),
      (t[136] = m),
      (t[137] = r),
      (t[138] = R),
      (t[139] = Dt),
      (t[140] = K))
    : (K = t[140]);
  let q;
  t[141] !== S || t[142] !== H || t[143] !== En
    ? ((q = () => {
        En();
      }),
      (t[141] = S),
      (t[142] = H),
      (t[143] = En),
      (t[144] = q))
    : (q = t[144]);
  let J;
  t[145] !== jt ||
  t[146] !== Pt ||
  t[147] !== Nt ||
  t[148] !== Mt ||
  t[149] !== Ft ||
  t[150] !== At ||
  t[151] !== kt
    ? ((J = {
        "archive-thread": jt,
        "copy-conversation-markdown": Pt,
        "copy-deeplink": Nt,
        "copy-working-directory": Mt,
        "open-side-chat": Ft,
        "pin-thread": kt,
        "rename-thread": At,
        "unpin-thread": kt,
      }),
      (t[145] = jt),
      (t[146] = Pt),
      (t[147] = Nt),
      (t[148] = Mt),
      (t[149] = Ft),
      (t[150] = At),
      (t[151] = kt),
      (t[152] = J))
    : (J = t[152]);
  let Dn = b === `toolbar`,
    Y;
  t[153] === vn
    ? (Y = t[154])
    : ((Y = (0, L.jsx)(Ze, { className: vn })), (t[153] = vn), (t[154] = Y));
  let X;
  t[155] !== _n || t[156] !== Dn || t[157] !== Y || t[158] !== ye || t[159] !== y || t[160] !== b
    ? ((X = (0, L.jsx)(Be, {
        className: ye,
        size: b,
        uniform: Dn,
        color: y,
        "aria-label": _n,
        children: Y,
      })),
      (t[155] = _n),
      (t[156] = Dn),
      (t[157] = Y),
      (t[158] = ye),
      (t[159] = y),
      (t[160] = b),
      (t[161] = X))
    : (X = t[161]);
  let Z;
  t[162] !== v || t[163] !== wn || t[164] !== q || t[165] !== J || t[166] !== X
    ? ((Z = (0, L.jsx)(Oe, {
        getItems: wn,
        onBeforeOpen: q,
        shortcuts: J,
        trigger: `click`,
        align: v,
        contentWidth: `menu`,
        children: X,
      })),
      (t[162] = v),
      (t[163] = wn),
      (t[164] = q),
      (t[165] = J),
      (t[166] = X),
      (t[167] = Z))
    : (Z = t[167]);
  let Q;
  t[168] !== r || t[169] !== H || t[170] !== s || t[171] !== o || t[172] !== P || t[173] !== O
    ? ((Q =
        P == null
          ? null
          : (0, L.jsx)(it, {
              conversationId: o == null ? r : null,
              initialValue: P,
              messages: void 0,
              onClose: () => F(null),
              requireNonEmpty: o != null,
              trimOnSave: o != null,
              onSave: (e) => {
                if (o != null) {
                  s?.(e);
                  return;
                }
                r != null && O({ conversationId: r, previousTitle: P, title: e });
              },
            })),
      (t[168] = r),
      (t[169] = H),
      (t[170] = s),
      (t[171] = o),
      (t[172] = P),
      (t[173] = O),
      (t[174] = Q))
    : (Q = t[174]);
  let $;
  t[175] !== pt || t[176] !== hn || t[177] !== rt || t[178] !== B
    ? (($ =
        rt &&
        (0, L.jsx)(nt, {
          heartbeatAutomationName: pt,
          isRunning: B,
          open: !0,
          onOpenChange: at,
          onConfirm: hn,
        })),
      (t[175] = pt),
      (t[176] = hn),
      (t[177] = rt),
      (t[178] = B),
      (t[179] = $))
    : ($ = t[179]);
  let On;
  return (
    t[180] !== K || t[181] !== Z || t[182] !== Q || t[183] !== $
      ? ((On = (0, L.jsxs)(L.Fragment, { children: [K, Z, Q, $] })),
        (t[180] = K),
        (t[181] = Z),
        (t[182] = Q),
        (t[183] = $),
        (t[184] = On))
      : (On = t[184]),
    On
  );
}
function dt() {}
var ft,
  I,
  L,
  pt = e(() => {
    ((ft = C()),
      b(),
      de(),
      o(),
      (I = t(a(), 1)),
      ye(),
      u(),
      E(),
      i(),
      v(),
      N(),
      m(),
      s(),
      h(),
      ee(),
      ie(),
      S(),
      c(),
      k(),
      y(),
      ge(),
      _e(),
      w(),
      O(),
      Se(),
      T(),
      me(),
      D(),
      M(),
      _(),
      r(),
      l(),
      g(),
      we(),
      De(),
      rt(),
      A(),
      lt(),
      ce(),
      j(),
      at(),
      P(),
      (L = x()));
  });
export { pt as n, F as t };
//# sourceMappingURL=thread-overflow-menu-242a94915c0b.js.map
