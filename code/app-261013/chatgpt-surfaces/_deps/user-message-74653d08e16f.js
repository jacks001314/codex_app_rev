const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./hook-stats-dialog-4c7dfc3b0600.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./hooks-settings-model-f200bbc1bcb6.js",
      "./hooks-settings-copy-2f5f2d429af4.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  B4 as r,
  CM as i,
  Cot as a,
  Dz as o,
  EM as s,
  GR as c,
  Gct as l,
  IDt as u,
  Ixt as d,
  LU as f,
  Pxt as p,
  RU as m,
  Sx as h,
  TJ as g,
  VDt as ee,
  Vxt as _,
  Wnt as v,
  _Mt as te,
  _O as ne,
  bb as re,
  cz as ie,
  fPt as ae,
  gMt as y,
  iO as oe,
  ik as se,
  jDt as ce,
  kz as le,
  mO as ue,
  oD as de,
  pPt as fe,
  rO as pe,
  rk as me,
  rst as b,
  sD as x,
  sz as S,
  t3 as C,
  vM as he,
  vO as ge,
  vzt as w,
  wot as _e,
  xMt as T,
  xb as ve,
  xx as ye,
  yMt as be,
  yzt as E,
  z4 as D,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  Arn as k,
  Brn as A,
  Cwr as j,
  Ern as M,
  F8t as N,
  FEr as xe,
  Hg as Se,
  I8t as Ce,
  IAt as we,
  Orn as Te,
  PAt as Ee,
  PEr as P,
  QOt as De,
  Rm as Oe,
  Urn as ke,
  Vg as Ae,
  XDr as je,
  ZOt as Me,
  _d as Ne,
  _m as Pe,
  bd as Fe,
  bm as F,
  drn as Ie,
  eOr as Le,
  frn as Re,
  gd as ze,
  gir as I,
  gu as Be,
  gwr as Ve,
  hir as He,
  hm as L,
  hu as Ue,
  ih as We,
  kan as Ge,
  krn as Ke,
  mYr as R,
  om as qe,
  pYr as Je,
  prn as Ye,
  sm as Xe,
  urn as z,
  vd as B,
  vwr as Ze,
  wrn as V,
  xd as Qe,
  xwr as H,
  zm as U,
} from "./app-initial-5851df3f6cb1.js";
import {
  Bp as $e,
  Cn as et,
  Sd as tt,
  Sn as nt,
  Vp as rt,
  af as W,
  of as it,
  xd as at,
} from "./app-primary-fe8a450b3b04.js";
import { a as G, t as ot } from "./timestamps-85bd12c0e1b2.js";
import { n as st, t as K } from "./collapsible-user-message-content-53649d62c3a8.js";
import { n as ct, r as lt } from "./plan-implementation-request-0cd55f1ae7b1.js";
function ut({ intl: e, sentAtMs: t, now: n, weekdayFormat: r = `long` }) {
  let i = new Date(t),
    a = ot(i, n),
    o = { hour: `numeric`, minute: `2-digit`, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone };
  return a === 0
    ? e.formatDate(i, o)
    : a < 0 && a > -7
      ? e.formatDate(i, { ...o, weekday: r })
      : e.formatDate(i, { ...o, month: `short`, day: `numeric` });
}
function dt() {
  return (dt = e(() => {
    G();
  }))();
}
function ft(e) {
  let t = (0, q.c)(10),
    { className: n, sentAtMs: r, nowMs: i, weekdayFormat: a } = e,
    o = ee();
  if (r == null) return null;
  let s;
  t[0] === n ? (s = t[1]) : ((s = y(`text-xs text-tertiary`, n)), (t[0] = n), (t[1] = s));
  let c;
  t[2] !== o || t[3] !== i || t[4] !== r || t[5] !== a
    ? ((c = ut({ intl: o, sentAtMs: r, now: i == null ? new Date() : new Date(i), weekdayFormat: a })),
      (t[2] = o),
      (t[3] = i),
      (t[4] = r),
      (t[5] = a),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = (0, pt.jsx)(`span`, { className: s, children: c })), (t[7] = s), (t[8] = c), (t[9] = l))
      : (l = t[9]),
    l
  );
}
var q, pt;
function J() {
  return (J = e(() => {
    ((q = w()), te(), ce(), dt(), (pt = T()));
  }))();
}
function mt(e) {
  let t = (0, gt.c)(19),
    { stats: n } = e,
    r = ee(),
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r.formatMessage({
        id: `assistantMessage.hookStats.dialogLabel`,
        defaultMessage: `Hook stats`,
        description: `Accessible label and tooltip for the button opening hook run statistics for this turn`,
      })),
      (t[0] = r),
      (t[1] = i));
  let a = i,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { "aria-describedby": void 0 }), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = { 16: f, 20: m }), (t[3] = c)) : (c = t[3]);
  let l = (n.blockedCount > 0 || n.errorCount > 0) && `text-warning`,
    u;
  t[4] === l ? (u = t[5]) : ((u = y(`pointer-events-none`, l)), (t[4] = l), (t[5] = u));
  let d;
  t[6] === u ? (d = t[7]) : ((d = (0, Y.jsx)(o, { icon: c, className: u })), (t[6] = u), (t[7] = d));
  let p;
  t[8] !== a || t[9] !== d
    ? ((p = (0, Y.jsx)(`button`, {
        className: `flex cursor-interaction items-center justify-center rounded-full border border-transparent p-0.5 text-tertiary select-none no-drag hover:bg-primary-ghost-hover hover:text-default focus:outline-none focus-visible:bg-primary-ghost-hover focus-visible:text-default electron:rounded-md electron:p-1`,
        type: `button`,
        "aria-label": a,
        children: d,
      })),
      (t[8] = a),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let h;
  t[11] !== a || t[12] !== p
    ? ((h = (0, Y.jsx)(S, { tooltipContent: a, children: p })), (t[11] = a), (t[12] = p), (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === n ? (g = t[15]) : ((g = (0, Y.jsx)(_t, { stats: n })), (t[14] = n), (t[15] = g));
  let _;
  return (
    t[16] !== h || t[17] !== g
      ? ((_ = (0, Y.jsx)(ue, {
          autoFocusCloseButton: !0,
          contentProps: s,
          size: `xwideTall`,
          triggerContent: h,
          children: g,
        })),
        (t[16] = h),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function ht(e) {
  let t = (0, gt.c)(3),
    { failed: n } = e,
    r = n !== void 0 && n,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Y.jsx)(ne, {
        children: (0, Y.jsx)(u, {
          id: `assistantMessage.hookStats.dialogTitle`,
          defaultMessage: `Hook stats`,
          description: `Title of the dialog showing hook runs for one completed turn`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] === r
      ? (a = t[2])
      : ((a = (0, Y.jsxs)(Y.Fragment, {
          children: [
            i,
            (0, Y.jsx)(`p`, {
              className: `text-secondary`,
              children: r
                ? (0, Y.jsx)(u, {
                    id: `assistantMessage.hookStats.loadFailed`,
                    defaultMessage: `Could not load hook stats`,
                    description: `Shown when the hook history dialog could not load its display component`,
                  })
                : (0, Y.jsx)(u, {
                    id: `assistantMessage.hookStats.loading`,
                    defaultMessage: `Loading hook stats…`,
                    description: `Shown while the hook history dialog loads its display component`,
                  }),
            }),
          ],
        })),
        (t[1] = r),
        (t[2] = a)),
    a
  );
}
var gt, Y, _t;
function vt() {
  return (vt = e(() => {
    ((gt = w()),
      te(),
      ce(),
      ge(),
      g(),
      D(),
      le(),
      ie(),
      (Y = T()),
      fe(),
      (_t = r(
        async () =>
          (
            await ae(
              async () => {
                let { HookStatsDialogContent: e } = await import(`./hook-stats-dialog-4c7dfc3b0600.js`);
                return { HookStatsDialogContent: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5]),
              import.meta.url,
            )
          ).HookStatsDialogContent,
        { fallback: (0, Y.jsx)(ht, {}), errorFallback: (0, Y.jsx)(ht, { failed: !0 }) },
      )));
  }))();
}
function yt(e) {
  let t = (0, bt.c)(18),
    {
      ref: n,
      text: r,
      cwd: i,
      hostId: a,
      collapsedLineCount: o,
      directives: s,
      hasSerializedParagraphs: c,
      isAeonFormatted: l,
      renderMath: u,
      serializeVisibleText: f,
    } = e,
    p = d(Ve),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { name: `browser.in-app` }), (t[0] = m))
    : (m = t[0]);
  let h = O(P, m).isCapable,
    g;
  t[1] !== h || t[2] !== p
    ? ((g = h ? (H(p.value) ?? void 0) : void 0), (t[1] = h), (t[2] = p), (t[3] = g))
    : (g = t[3]);
  let ee = g,
    _;
  t[4] !== i ||
  t[5] !== s ||
  t[6] !== ee ||
  t[7] !== c ||
  t[8] !== a ||
  t[9] !== n ||
  t[10] !== u ||
  t[11] !== f
    ? ((_ = (e) =>
        (0, xt.jsx)(W, {
          ref: n,
          cwd: i,
          directives: s,
          externalLinkContextMenuConversationId: ee,
          hostId: a,
          hasSerializedParagraphs: c,
          renderMath: u,
          text: f?.(e) ?? e,
          variant: `user-message`,
        })),
      (t[4] = i),
      (t[5] = s),
      (t[6] = ee),
      (t[7] = c),
      (t[8] = a),
      (t[9] = n),
      (t[10] = u),
      (t[11] = f),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  return (
    t[13] !== o || t[14] !== l || t[15] !== _ || t[16] !== r
      ? ((v = (0, xt.jsx)(K, { collapsedLineCount: o, isAeonFormatted: l, text: r, children: _ })),
        (t[13] = o),
        (t[14] = l),
        (t[15] = _),
        (t[16] = r),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
var bt, xt;
function St() {
  return (St = e(() => {
    ((bt = w()), p(), xe(), j(), it(), st(), (xt = T()));
  }))();
}
function Ct(e) {
  let r = (0, Et.c)(123),
    {
      allowEmptyMessage: i,
      cwd: o,
      enablePlainMessageRichTextEditing: s,
      hostId: c,
      initialAuthoredMarkdownLinkSourcesByOccurrence: f,
      initialMessage: p,
      enableChatGptSystemHints: m,
      initialLiteralMarkdownLinkSources: h,
      initialRenderFormat: g,
      onCancel: v,
      onDraftChange: te,
      onEditInputMount: ne,
      onSubmit: ie,
    } = e,
    ae = i !== void 0 && i,
    y = s !== void 0 && s,
    oe = f === void 0 ? null : f,
    se = h === void 0 ? null : h,
    ce = d(a),
    le = ee(),
    ue = _(Ce),
    de = n(l.composerEnterBehavior),
    fe = n(l.composerPlainTextMode),
    pe = (0, X.useRef)(null),
    me;
  r[0] !== m ||
  r[1] !== y ||
  r[2] !== de ||
  r[3] !== oe ||
  r[4] !== se ||
  r[5] !== p ||
  r[6] !== g ||
  r[7] !== fe
    ? ((me = () => {
        let e = Ie(p),
          t = z(p),
          n = g === `markdown` || (y && !Re(p)),
          r = n ? `literal` : `plain`;
        g === `markdown` ? (r = `prompt`) : (e || t) && (r = n ? `literal-prompt` : `prompt`);
        let i = n ? (se ?? Te(p)) : null,
          a = We(p, {
            defaultTextKind: r,
            enterBehavior: de,
            enableRichText: n,
            enableSelectedTextLinks: !0,
            enableSlashCommands: !1,
            literalMarkdownLinkSources: i,
            plainTextMode: fe,
            restoreMarkdownLinksAsTextLinks: !0,
            restorePathLinksAsFileMentions: e || !t,
            suggestionOptions: { enableInlineSystemHints: m },
          });
        return {
          authoredMarkdownLinkOccurrenceIds: new Set(
            (a.getLiteralMarkdownLinks() ?? []).flatMap((e, t) => {
              let { occurrenceId: n } = e;
              return n != null && (oe == null ? g === `markdown` : oe[t] != null) ? [n] : [];
            }),
          ),
          editor: a,
        };
      }),
      (r[0] = m),
      (r[1] = y),
      (r[2] = de),
      (r[3] = oe),
      (r[4] = se),
      (r[5] = p),
      (r[6] = g),
      (r[7] = fe),
      (r[8] = me))
    : (me = r[8]);
  let [b] = (0, X.useState)(me),
    { authoredMarkdownLinkOccurrenceIds: x, editor: S } = b,
    C;
  r[9] !== S.view.dom || r[10] !== ne
    ? ((C = () => ne?.(S.view.dom)), (r[9] = S.view.dom), (r[10] = ne), (r[11] = C))
    : (C = r[11]);
  let he = (0, X.useEffectEvent)(C),
    ge;
  r[12] === he ? (ge = r[13]) : ((ge = () => he()), (r[12] = he), (r[13] = ge));
  let w;
  (r[14] === S ? (w = r[15]) : ((w = [S]), (r[14] = S), (r[15] = w)), (0, X.useLayoutEffect)(ge, w));
  let _e, T;
  (r[16] !== S || r[17] !== de
    ? ((_e = () => {
        S.setEnterBehavior(de);
      }),
      (T = [S, de]),
      (r[16] = S),
      (r[17] = de),
      (r[18] = _e),
      (r[19] = T))
    : ((_e = r[18]), (T = r[19])),
    (0, X.useLayoutEffect)(_e, T));
  let ve, ye;
  (r[20] !== S || r[21] !== fe
    ? ((ve = () => {
        S.setPlainTextMode(fe);
      }),
      (ye = [S, fe]),
      (r[20] = S),
      (r[21] = fe),
      (r[22] = ve),
      (r[23] = ye))
    : ((ve = r[22]), (ye = r[23])),
    (0, X.useEffect)(ve, ye));
  let be;
  (r[24] === S
    ? (be = r[25])
    : ((be = () => {
        S.view.isDestroyed || S.destroy();
      }),
      (r[24] = S),
      (r[25] = be)),
    Oe(be, S));
  let E;
  bb0: {
    if (o == null) {
      E = void 0;
      break bb0;
    }
    let e;
    (r[26] === o ? (e = r[27]) : ((e = [o]), (r[26] = o), (r[27] = e)), (E = e));
  }
  let D = E,
    O = Ne(S),
    k = Pe(S),
    A = O.ui?.active ?? !1,
    j;
  r[28] === A ? (j = r[29]) : ((j = { anchorRef: pe, isActive: A }), (r[28] = A), (r[29] = j));
  let M = rt(j),
    N = k.ui?.active ?? !1,
    xe;
  r[30] === N ? (xe = r[31]) : ((xe = { anchorRef: pe, isActive: N }), (r[30] = N), (r[31] = xe));
  let Ee = rt(xe),
    [P, De] = (0, X.useState)(!1),
    ke = we(S, wt, `document`),
    Ae;
  r[32] !== x || r[33] !== S || r[34] !== m || r[35] !== te
    ? ((Ae = (e) => {
        e && te(Tt(S, x, S.getPersistedText(), m));
      }),
      (r[32] = x),
      (r[33] = S),
      (r[34] = m),
      (r[35] = te),
      (r[36] = Ae))
    : (Ae = r[36]);
  let je = (0, X.useEffectEvent)(Ae),
    Me;
  r[37] === v
    ? (Me = r[38])
    : ((Me = () => {
        v();
      }),
      (r[37] = v),
      (r[38] = Me));
  let Fe = (0, X.useEffectEvent)(Me),
    Le;
  r[39] !== S.view || r[40] !== je
    ? ((Le = () => Ge(S.view, je)), (r[39] = S.view), (r[40] = je), (r[41] = Le))
    : (Le = r[41]);
  let ze;
  (r[42] === S ? (ze = r[43]) : ((ze = [S]), (r[42] = S), (r[43] = ze)), (0, X.useEffect)(Le, ze));
  let I;
  r[44] !== S.view || r[45] !== Fe
    ? ((I = () => Se(S.view, { Escape: (e) => !e.defaultPrevented && (e.preventDefault(), Fe(), !0) })),
      (r[44] = S.view),
      (r[45] = Fe),
      (r[46] = I))
    : (I = r[46]);
  let Be;
  (r[47] === S ? (Be = r[48]) : ((Be = [S]), (r[47] = S), (r[48] = Be)), (0, X.useEffect)(I, Be));
  let Ve;
  r[49] !== ae || r[50] !== x || r[51] !== S || r[52] !== m || r[53] !== P || r[54] !== ie || r[55] !== ce
    ? ((Ve = async () => {
        let e = wt(S);
        P ||
          ce.get(Ce) ||
          (!e && !ae) ||
          (De(!0),
          await (async () => {
            let { message: t, renderFormat: n, inlineSystemHints: r } = Tt(S, x, S.getText(), m);
            await ie(e ? t.trim() : ``, e ? n : void 0, r);
          })().finally(() => {
            De(!1);
          }));
      }),
      (r[49] = ae),
      (r[50] = x),
      (r[51] = S),
      (r[52] = m),
      (r[53] = P),
      (r[54] = ie),
      (r[55] = ce),
      (r[56] = Ve))
    : (Ve = r[56]);
  let He = Ve,
    L;
  r[57] === He
    ? (L = r[58])
    : ((L = (e) => {
        (e.preventDefault(), He());
      }),
      (r[57] = He),
      (r[58] = L));
  let Ue = O.ui?.active ?? !1,
    Ke = O.ui?.query ?? ``,
    R = O.ui?.source ?? null,
    Je;
  r[59] !== c ||
  r[60] !== O.addMention ||
  r[61] !== O.closeAutocomplete ||
  r[62] !== O.setSelectedMention ||
  r[63] !== D ||
  r[64] !== Ke ||
  r[65] !== R
    ? ((Je = (0, Z.jsx)(Qe, {
        hostId: c,
        onAddContext: O.addMention,
        onRequestClose: O.closeAutocomplete,
        onUpdateSelectedMention: O.setSelectedMention,
        query: Ke,
        fileSearchRootPaths: D,
        skillRoots: D,
        source: R,
      })),
      (r[59] = c),
      (r[60] = O.addMention),
      (r[61] = O.closeAutocomplete),
      (r[62] = O.setSelectedMention),
      (r[63] = D),
      (r[64] = Ke),
      (r[65] = R),
      (r[66] = Je))
    : (Je = r[66]);
  let Ye;
  r[67] !== M || r[68] !== S || r[69] !== O.ui || r[70] !== Ue || r[71] !== Je
    ? ((Ye = (0, Z.jsx)(re, {
        anchorRef: pe,
        composerController: S,
        isActive: Ue,
        mentionUiState: O.ui,
        placement: M,
        children: Je,
      })),
      (r[67] = M),
      (r[68] = S),
      (r[69] = O.ui),
      (r[70] = Ue),
      (r[71] = Je),
      (r[72] = Ye))
    : (Ye = r[72]);
  let Xe = o ?? void 0,
    Ze;
  r[73] !== S || r[74] !== c || r[75] !== D || r[76] !== k || r[77] !== Ee || r[78] !== Xe
    ? ((Ze = (0, Z.jsx)(F, {
        autocomplete: k,
        cwd: Xe,
        roots: D,
        hostId: c,
        composerController: S,
        anchorRef: pe,
        placement: Ee,
      })),
      (r[73] = S),
      (r[74] = c),
      (r[75] = D),
      (r[76] = k),
      (r[77] = Ee),
      (r[78] = Xe),
      (r[79] = Ze))
    : (Ze = r[79]);
  let V = O.ui?.active === !0,
    H;
  r[80] !== S || r[81] !== c || r[82] !== D || r[83] !== V
    ? ((H = (0, Z.jsx)(qe, { composerController: S, hostId: c, roots: D, shouldLoadPlugins: V })),
      (r[80] = S),
      (r[81] = c),
      (r[82] = D),
      (r[83] = V),
      (r[84] = H))
    : (H = r[84]);
  let $e;
  r[85] === le
    ? ($e = r[86])
    : (($e = le.formatMessage({
        id: `codex.userMessage.editTextareaAriaLabel`,
        defaultMessage: `Edit message`,
        description: `Aria label for the editor used to edit the previous user message`,
      })),
      (r[85] = le),
      (r[86] = $e));
  let et;
  r[87] === le
    ? (et = r[88])
    : ((et = le.formatMessage({
        id: `codex.userMessage.editPlaceholder`,
        defaultMessage: `Edit message`,
        description: `Placeholder shown in the editor used to edit a previous user message`,
      })),
      (r[87] = le),
      (r[88] = et));
  let tt;
  r[89] !== O.handleMentionEvent || r[90] !== k.handleMentionEvent
    ? ((tt = (e) => {
        B(e, { onAtMention: O.handleMentionEvent, onSkillMention: k.handleMentionEvent });
      }),
      (r[89] = O.handleMentionEvent),
      (r[90] = k.handleMentionEvent),
      (r[91] = tt))
    : (tt = r[91]);
  let nt;
  r[92] === He
    ? (nt = r[93])
    : ((nt = () => {
        He();
      }),
      (r[92] = He),
      (r[93] = nt));
  let W;
  r[94] !== S || r[95] !== $e || r[96] !== et || r[97] !== tt || r[98] !== nt
    ? ((W = (0, Z.jsx)(U, {
        ariaLabel: $e,
        className: `font-content text-base`,
        composerController: S,
        placeholder: et,
        onSuggestionHandler: tt,
        onSubmit: nt,
      })),
      (r[94] = S),
      (r[95] = $e),
      (r[96] = et),
      (r[97] = tt),
      (r[98] = nt),
      (r[99] = W))
    : (W = r[99]);
  let it;
  r[100] !== ue || r[101] !== W
    ? ((it = (0, Z.jsx)(`div`, {
        className: `mb-2 flex-grow overflow-y-auto px-3 pt-3`,
        inert: ue,
        children: W,
      })),
      (r[100] = ue),
      (r[101] = W),
      (r[102] = it))
    : (it = r[102]);
  let at;
  r[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, Z.jsx)(u, {
        id: `codex.userMessage.cancelEditMessage`,
        defaultMessage: `Cancel`,
        description: `Button label for canceling an edited user message`,
      })),
      (r[103] = at))
    : (at = r[103]);
  let G;
  r[104] !== P || r[105] !== v
    ? ((G = (0, Z.jsx)(t, { color: `outline`, size: `toolbar`, disabled: P, onClick: v, children: at })),
      (r[104] = P),
      (r[105] = v),
      (r[106] = G))
    : (G = r[106]);
  let ot = ue || (!ke && !ae),
    st;
  r[107] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, Z.jsx)(u, {
        id: `codex.userMessage.sendEditedMessage`,
        defaultMessage: `Send`,
        description: `Button label for submitting an edited user message`,
      })),
      (r[107] = st))
    : (st = r[107]);
  let K;
  r[108] !== P || r[109] !== ot
    ? ((K = (0, Z.jsx)(t, {
        color: `primary`,
        size: `toolbar`,
        loading: P,
        disabled: ot,
        type: `submit`,
        children: st,
      })),
      (r[108] = P),
      (r[109] = ot),
      (r[110] = K))
    : (K = r[110]);
  let ct;
  r[111] !== G || r[112] !== K
    ? ((ct = (0, Z.jsxs)(`div`, { className: `flex justify-end gap-1.5 px-3 pb-3`, children: [G, K] })),
      (r[111] = G),
      (r[112] = K),
      (r[113] = ct))
    : (ct = r[113]);
  let lt;
  r[114] !== Ye || r[115] !== Ze || r[116] !== H || r[117] !== it || r[118] !== ct
    ? ((lt = (0, Z.jsxs)(`div`, {
        ref: pe,
        className: `relative z-10 flex min-h-0 flex-1 flex-col`,
        children: [Ye, Ze, H, it, ct],
      })),
      (r[114] = Ye),
      (r[115] = Ze),
      (r[116] = H),
      (r[117] = it),
      (r[118] = ct),
      (r[119] = lt))
    : (lt = r[119]);
  let ut;
  return (
    r[120] !== L || r[121] !== lt
      ? ((ut = (0, Z.jsx)(`form`, {
          className: `relative flex w-full flex-col rounded-3xl bg-text/5 dark:bg-primary-soft`,
          onSubmit: L,
          children: lt,
        })),
        (r[120] = L),
        (r[121] = lt),
        (r[122] = ut))
      : (ut = r[122]),
    ut
  );
}
function wt(e) {
  let t = !1;
  return (
    e.view.state.doc.descendants(
      (e) => ((t = t || (e.isText && e.textContent.trim().length > 0) || V(e) != null), !t),
    ),
    t
  );
}
function Tt(e, t, n, r) {
  let i = e.getLiteralMarkdownLinks(),
    a = r ? e.getChatGptPrompt().systemHints : void 0;
  if (i == null)
    return {
      authoredMarkdownLinkSourcesByOccurrence: null,
      literalMarkdownLinkSources: null,
      message: s(e.getPlainText()),
      renderFormat: void 0,
      inlineSystemHints: a,
    };
  let o = e.getPlainText({ preserveLinkMarkers: !0 }),
    l = c(o).some(({ path: e }) => e.startsWith(he)),
    u = i.map(({ literalSource: e }) => e),
    d = i.map(({ literalSource: e, occurrenceId: n, serializedLink: r }) =>
      n != null && t.has(n) ? (e ?? r) : null,
    );
  for (; d.length > 0 && d.at(-1) == null;) d.pop();
  let f =
    e.hasMarkdownFormatting({ includeLinks: !1 }) || l || d.some((e) => e != null) ? `markdown` : void 0;
  return {
    authoredMarkdownLinkSourcesByOccurrence: d,
    literalMarkdownLinkSources: u,
    message: f == null ? o : k(n, u),
    renderFormat: f,
    inlineSystemHints: a,
  };
}
var Et, X, Z;
function Dt() {
  return (Dt = e(() => {
    ((Et = w()),
      p(),
      b(),
      (X = E()),
      ce(),
      N(),
      ve(),
      Fe(),
      Xe(),
      Ae(),
      M(),
      Ke(),
      i(),
      Ye(),
      Ee(),
      ze(),
      $e(),
      L(),
      _e(),
      v(),
      C(),
      (Z = T()));
  }))();
}
var Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Q;
function Lt() {
  return (Lt = e(() => {
    ((Ot = `_bubble_168sz_1`),
      (kt = `_leadingBubble_168sz_7`),
      (At = `_compactMessageReaction_168sz_11`),
      (jt = `_compactMessageBubble_168sz_15`),
      (Mt = `_compactMessageContainer_168sz_31`),
      (Nt = `_otherUserMessage_168sz_39`),
      (Pt = `_accentedBubble_168sz_44`),
      (Ft = `_temporaryBubble_168sz_58`),
      (It = `_temporaryOutline_168sz_64`),
      (Q = {
        bubble: Ot,
        leadingBubble: kt,
        compactMessageReaction: At,
        compactMessageBubble: jt,
        compactMessageContainer: Mt,
        otherUserMessage: Nt,
        accentedBubble: Pt,
        temporaryBubble: Ft,
        temporaryOutline: It,
      }));
  }))();
}
function Rt(e) {
  let n = (0, Vt.c)(171),
    {
      message: r,
      alignment: i,
      accentColor: a,
      senderAccountUserId: o,
      sentAtMs: s,
      collapsedLineCount: c,
      alwaysShowActions: l,
      compactActions: f,
      hideActions: p,
      messageStatus: m,
      messageStatusIcon: h,
      messageReaction: g,
      messageReactionPlacement: v,
      hookStats: te,
      referencesPriorConversation: ne,
      reviewMode: re,
      pullRequestFixMode: ie,
      autoResolveSync: ae,
      allowEmptyEditMessage: oe,
      enablePlainMessageRichTextEditing: se,
      hasExternalAttachments: ce,
      isAeonFormatted: le,
      isTemporaryChat: ue,
      commentCount: fe,
      additionalActions: b,
      messageHeader: x,
      messageContent: C,
      copyContentRef: he,
      copyPlainTextFromSource: ge,
      editMessageFormat: w,
      enableChatGptSystemHints: _e,
      initialEditMessage: T,
      onCopy: ve,
      onEditInputMount: be,
      onEditMessage: E,
      onCopySucceeded: D,
      threadId: k,
      turnId: A,
      cwd: j,
      hostId: M,
    } = e,
    N = i === void 0 ? `end` : i,
    xe = l !== void 0 && l,
    Se = f !== void 0 && f,
    we = p !== void 0 && p,
    Te = v === void 0 ? `corner` : v,
    Ee = ne !== void 0 && ne,
    P = re !== void 0 && re,
    De = ie !== void 0 && ie,
    Oe = ae !== void 0 && ae,
    ke = oe !== void 0 && oe,
    Ae = se !== void 0 && se,
    je = ce !== void 0 && ce,
    Ne = ue !== void 0 && ue,
    Pe = fe === void 0 ? 0 : fe,
    Fe = ge !== void 0 && ge,
    F = d(Ve),
    Ie = _(Ce),
    Re;
  n[0] !== F.value || n[1] !== k
    ? ((Re = k ?? Ze(F.value)), (n[0] = F.value), (n[1] = k), (n[2] = Re))
    : (Re = n[2]);
  let ze = O(le == null && tt, Re),
    I = le ?? ze,
    Be = _(o == null ? null : Me),
    L = Be != null && o !== Be.accountUserId && o !== Be.email,
    Ue = Je(r),
    We = Ue.trim(),
    Ge = lt(Ue),
    Ke = E != null && A != null && !Ge,
    [R, qe] = (0, Ht.useState)(!1),
    Ye = (0, Ht.useRef)(null),
    Xe = (0, Ht.useRef)(!1),
    z = O(et, A),
    B = Ke && z != null,
    V = ee(),
    Qe = _(Le),
    H = Ge
      ? V.formatMessage({
          id: `codex.userMessage.implementPlan`,
          defaultMessage: `Yes, implement this plan`,
          description: `Display text for the synthetic implement-plan follow-up prompt`,
        })
      : Ue,
    U = H.trim().length > 0,
    $e = Ee || P || De || Oe || je || Pe > 0,
    nt = U || !$e,
    rt = $e || m != null || (!Se && !we && !I),
    W;
  n[3] !== he ||
  n[4] !== Fe ||
  n[5] !== Ge ||
  n[6] !== ve ||
  n[7] !== D ||
  n[8] !== Qe ||
  n[9] !== qe ||
  n[10] !== k ||
  n[11] !== We ||
  n[12] !== A
    ? ((W = (e) => {
        if (Xe.current) return;
        ((Xe.current = !0),
          ve?.(),
          k != null &&
            A != null &&
            Qe.submitCodexAnalyticsEvent?.({
              action: `copy`,
              eventKind: `action`,
              metadata: { surface: `user_message` },
              threadId: k,
              turnId: A,
            }));
        let t = Ge ? null : Bt(he ?? Ye),
          n = !Fe && t != null ? t.plainText : He(We);
        pe(
          t == null
            ? n
            : {
                "text/plain": n,
                "text/html": Fe ? `<div style="white-space: pre-wrap">${t.htmlText}</div>` : t.htmlText,
              },
        )
          .then((t) => {
            t && (D?.(n, e), qe(!0), setTimeout(() => qe(!1), 1500));
          })
          .finally(() => {
            Xe.current = !1;
          });
      }),
      (n[3] = he),
      (n[4] = Fe),
      (n[5] = Ge),
      (n[6] = ve),
      (n[7] = D),
      (n[8] = Qe),
      (n[9] = qe),
      (n[10] = k),
      (n[11] = We),
      (n[12] = A),
      (n[13] = W))
    : (W = n[13]);
  let it = W,
    at;
  n[14] !== F || n[15] !== A
    ? ((at = (e) => {
        F.set(et, A, e);
      }),
      (n[14] = F),
      (n[15] = A),
      (n[16] = at))
    : (at = n[16]);
  let G = at,
    ot;
  n[17] !== E || n[18] !== G
    ? ((ot = async (e, t, n) => {
        if (E != null)
          try {
            (n == null ? (t == null ? await E(e) : await E(e, t)) : await E(e, t, n), G(null));
          } catch {}
      }),
      (n[17] = E),
      (n[18] = G),
      (n[19] = ot))
    : (ot = n[19]);
  let st = ot,
    K;
  n[20] !== z ||
  n[21] !== w ||
  n[22] !== T ||
  n[23] !== Qe ||
  n[24] !== F ||
  n[25] !== G ||
  n[26] !== k ||
  n[27] !== We ||
  n[28] !== A
    ? ((K = () => {
        F.get(Ce) ||
          (k != null &&
            A != null &&
            Qe.submitCodexAnalyticsEvent?.({
              action: `edit`,
              eventKind: `action`,
              metadata: { surface: `user_message` },
              threadId: k,
              turnId: A,
            }),
          z ??
            G({
              authoredMarkdownLinkSourcesByOccurrence: null,
              literalMarkdownLinkSources: null,
              message: T?.trim() ?? We,
              renderFormat: w,
            }));
      }),
      (n[20] = z),
      (n[21] = w),
      (n[22] = T),
      (n[23] = Qe),
      (n[24] = F),
      (n[25] = G),
      (n[26] = k),
      (n[27] = We),
      (n[28] = A),
      (n[29] = K))
    : (K = n[29]);
  let ct = K,
    ut;
  n[30] !== c || n[31] !== j || n[32] !== H || n[33] !== U || n[34] !== M || n[35] !== I || n[36] !== C
    ? ((ut = U
        ? ((typeof C == `function` ? C(I) : C) ??
          (0, $.jsx)(yt, {
            ref: Ye,
            text: H,
            cwd: j ?? null,
            hostId: M,
            collapsedLineCount: c,
            isAeonFormatted: I,
          }))
        : (0, $.jsx)(`div`, {
            className: `mb-px text-size-chat text-codex-description`,
            children: (0, $.jsx)(u, {
              id: `codex.userMessage.noContent`,
              defaultMessage: `(No content)`,
              description: `Text for when a user message has no content`,
            }),
          })),
      (n[30] = c),
      (n[31] = j),
      (n[32] = H),
      (n[33] = U),
      (n[34] = M),
      (n[35] = I),
      (n[36] = C),
      (n[37] = ut))
    : (ut = n[37]);
  let dt = ut,
    q,
    pt;
  if (
    n[38] !== a ||
    n[39] !== N ||
    n[40] !== ke ||
    n[41] !== j ||
    n[42] !== z ||
    n[43] !== _e ||
    n[44] !== Ae ||
    n[45] !== it ||
    n[46] !== st ||
    n[47] !== U ||
    n[48] !== M ||
    n[49] !== V ||
    n[50] !== I ||
    n[51] !== B ||
    n[52] !== L ||
    n[53] !== Ne ||
    n[54] !== be ||
    n[55] !== R ||
    n[56] !== G ||
    n[57] !== nt ||
    n[58] !== dt
  ) {
    let e = y(
        `bg-user-message text-user-message min-w-0 max-w-(--user-chat-width) overflow-hidden break-words px-(--thread-content-margin) [&_.contain-inline-size]:[contain:initial]`,
        Q.bubble,
        N === `start` && Q.leadingBubble,
        I && Q.compactMessageBubble,
        L && Q.otherUserMessage,
        a != null && Q.accentedBubble,
        I ? `py-2` : `py-2.5`,
        Ne ? Q.temporaryBubble : `rounded-2xl`,
        !U && `leading-none`,
      ),
      r;
    n[61] === a ? (r = n[62]) : ((r = { "--user-message-accent-color": a }), (n[61] = a), (n[62] = r));
    let i = r,
      o;
    n[63] !== V || n[64] !== R
      ? ((o = R
          ? V.formatMessage({
              id: `codex.userMessage.copiedAriaLabel`,
              defaultMessage: `Copied`,
              description: `Aria label for the copy button after the content has been copied`,
            })
          : V.formatMessage({
              id: `codex.userMessage.copyAriaLabel`,
              defaultMessage: `Copy message`,
              description: `Aria label for the button that copies the user's message`,
            })),
        (n[63] = V),
        (n[64] = R),
        (n[65] = o))
      : (o = n[65]);
    let s = o,
      c = R ? void 0 : it,
      l;
    n[66] === R
      ? (l = n[67])
      : ((l = R ? (0, $.jsx)(me, { className: `icon-xs` }) : (0, $.jsx)(ye, { className: `icon-xs` })),
        (n[66] = R),
        (n[67] = l));
    let u;
    n[68] !== s || n[69] !== c || n[70] !== l
      ? ((u = (0, $.jsx)(t, {
          className: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
          color: `ghost`,
          size: `icon`,
          "aria-label": s,
          onClick: c,
          children: l,
        })),
        (n[68] = s),
        (n[69] = c),
        (n[70] = l),
        (n[71] = u))
      : (u = n[71]);
    let d;
    (n[72] !== s || n[73] !== u
      ? ((d = (0, $.jsx)(S, { tooltipContent: s, children: u })), (n[72] = s), (n[73] = u), (n[74] = d))
      : (d = n[74]),
      (q = d),
      (pt = B
        ? (0, $.jsx)(`div`, {
            className: `w-full p-px`,
            children: (0, $.jsx)(Ct, {
              allowEmptyMessage: ke,
              cwd: j ?? null,
              enableChatGptSystemHints: _e,
              enablePlainMessageRichTextEditing: Ae,
              hostId: M,
              initialAuthoredMarkdownLinkSourcesByOccurrence: z.authoredMarkdownLinkSourcesByOccurrence,
              initialMessage: z.message.trim(),
              initialLiteralMarkdownLinkSources: z.literalMarkdownLinkSources,
              initialRenderFormat: z.renderFormat,
              onCancel: () => {
                G(null);
              },
              onDraftChange: G,
              onEditInputMount: be,
              onSubmit: st,
            }),
          })
        : nt
          ? (0, $.jsxs)(`div`, {
              "data-user-message-bubble": !0,
              className: y(e, `relative text-start`),
              style: i,
              children: [
                Ne
                  ? (0, $.jsx)(`svg`, {
                      "aria-hidden": `true`,
                      className: y(`pointer-events-none absolute inset-0 h-full w-full`, Q.temporaryOutline),
                      focusable: `false`,
                      children: (0, $.jsx)(`rect`, {
                        x: `0.5`,
                        y: `0.5`,
                        width: `calc(100% - 1px)`,
                        height: `calc(100% - 1px)`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeOpacity: `0.4`,
                        strokeWidth: `1`,
                        strokeDasharray: `8 8`,
                        vectorEffect: `non-scaling-stroke`,
                      }),
                    })
                  : null,
                dt,
              ],
            })
          : null),
      (n[38] = a),
      (n[39] = N),
      (n[40] = ke),
      (n[41] = j),
      (n[42] = z),
      (n[43] = _e),
      (n[44] = Ae),
      (n[45] = it),
      (n[46] = st),
      (n[47] = U),
      (n[48] = M),
      (n[49] = V),
      (n[50] = I),
      (n[51] = B),
      (n[52] = L),
      (n[53] = Ne),
      (n[54] = be),
      (n[55] = R),
      (n[56] = G),
      (n[57] = nt),
      (n[58] = dt),
      (n[59] = q),
      (n[60] = pt));
  } else ((q = n[59]), (pt = n[60]));
  let J = pt,
    ht = !B && g != null,
    gt = L && Q.otherUserMessage,
    Y;
  n[75] === gt
    ? (Y = n[76])
    : ((Y = y(
        Q.compactMessageReaction,
        gt,
        `relative flex size-7 items-center justify-center rounded-full border-2 border-surface [&_button]:absolute [&_button]:-inset-0.5 [&_button]:size-auto [&_button]:cursor-default [&_button]:text-sm [&_button]:drop-shadow-none`,
      )),
      (n[75] = gt),
      (n[76] = Y));
  let _t;
  n[77] !== g || n[78] !== Y
    ? ((_t = (0, $.jsx)(`div`, { className: Y, children: g })), (n[77] = g), (n[78] = Y), (n[79] = _t))
    : (_t = n[79]);
  let vt = _t,
    bt = J;
  if (I) {
    let e = B
        ? `flex w-full flex-col items-end gap-1`
        : `grid max-w-full grid-cols-[auto_minmax(0,max-content)] items-center gap-x-2 gap-y-1`,
      t = b == null && `gap-x-0`,
      r = ht && x == null && `pt-5`,
      i;
    n[80] !== e || n[81] !== t || n[82] !== r
      ? ((i = y(e, t, r)), (n[80] = e), (n[81] = t), (n[82] = r), (n[83] = i))
      : (i = n[83]);
    let a;
    n[84] === x
      ? (a = n[85])
      : ((a =
          x == null
            ? null
            : (0, $.jsx)(`div`, {
                className: y(`col-start-2 flex min-w-0 justify-end`, Q.compactMessageContainer),
                children: x,
              })),
        (n[84] = x),
        (n[85] = a));
    let o;
    n[86] !== b || n[87] !== B
      ? ((o = !B && b != null ? (0, $.jsx)(`div`, { className: `col-start-1`, children: b }) : null),
        (n[86] = b),
        (n[87] = B),
        (n[88] = o))
      : (o = n[88]);
    let s = B && `w-full`,
      c = !B && Q.compactMessageContainer,
      l = ht && x != null && `mt-5`,
      u;
    n[89] !== s || n[90] !== c || n[91] !== l
      ? ((u = y(`relative col-start-2 min-w-0 justify-self-end`, s, c, l)),
        (n[89] = s),
        (n[90] = c),
        (n[91] = l),
        (n[92] = u))
      : (u = n[92]);
    let d = ht ? vt : null,
      f;
    n[93] === d
      ? (f = n[94])
      : ((f = (0, $.jsx)(`div`, {
          className: `absolute -start-3.5 -top-5 z-10 translate-x-0.5 translate-y-0.5 rtl:-translate-x-0.5`,
          "aria-live": `polite`,
          "aria-atomic": !0,
          children: d,
        })),
        (n[93] = d),
        (n[94] = f));
    let p;
    n[95] !== J || n[96] !== u || n[97] !== f
      ? ((p = (0, $.jsxs)(`div`, { className: u, children: [J, f] })),
        (n[95] = J),
        (n[96] = u),
        (n[97] = f),
        (n[98] = p))
      : (p = n[98]);
    let m;
    (n[99] !== i || n[100] !== a || n[101] !== o || n[102] !== p
      ? ((m = (0, $.jsxs)(`div`, { className: i, children: [a, o, p] })),
        (n[99] = i),
        (n[100] = a),
        (n[101] = o),
        (n[102] = p),
        (n[103] = m))
      : (m = n[103]),
      (bt = m));
  } else if (g != null) {
    let e = Te === `corner` && `mb-2`,
      t;
    n[104] === e
      ? (t = n[105])
      : ((t = y(`relative flex w-full justify-end`, e)), (n[104] = e), (n[105] = t));
    let r =
        Te === `below`
          ? `absolute end-4 -bottom-5 z-1`
          : `absolute -end-0.5 -bottom-0.5 translate-x-1/4 translate-y-1/4 rtl:-translate-x-1/4`,
      i = ht ? g : null,
      a;
    n[106] !== r || n[107] !== i
      ? ((a = (0, $.jsx)(`div`, { className: r, "aria-live": `polite`, "aria-atomic": !0, children: i })),
        (n[106] = r),
        (n[107] = i),
        (n[108] = a))
      : (a = n[108]);
    let o;
    (n[109] !== J || n[110] !== t || n[111] !== a
      ? ((o = (0, $.jsxs)(`div`, { className: t, children: [J, a] })),
        (n[109] = J),
        (n[110] = t),
        (n[111] = a),
        (n[112] = o))
      : (o = n[112]),
      (bt = o));
  }
  let xt;
  n[113] === V
    ? (xt = n[114])
    : ((xt = V.formatMessage({
        id: `codex.userMessage.editAriaLabel`,
        defaultMessage: `Edit message`,
        description: `Tooltip and accessible label for the button that edits the user's message`,
      })),
      (n[113] = V),
      (n[114] = xt));
  let St = xt,
    wt = N === `start` ? `items-start` : `items-end`,
    Tt;
  n[115] === wt
    ? (Tt = n[116])
    : ((Tt = y(`group/user-message flex w-full flex-col gap-1`, wt)), (n[115] = wt), (n[116] = Tt));
  let Et = I ? null : x,
    X;
  n[117] !== N ||
  n[118] !== Se ||
  n[119] !== q ||
  n[120] !== U ||
  n[121] !== we ||
  n[122] !== I ||
  n[123] !== B ||
  n[124] !== bt
    ? ((X =
        Se && !we && U && !B && !I
          ? (0, $.jsxs)(`div`, {
              className: y(
                `flex w-full items-center gap-1`,
                N === `start` ? `flex-row-reverse justify-end` : `justify-end`,
              ),
              children: [
                (0, $.jsx)(`div`, {
                  className: `turn-action-controls opacity-0 group-focus-within/user-message:opacity-100 group-hover/user-message:opacity-100`,
                  children: q,
                }),
                bt,
              ],
            })
          : bt),
      (n[117] = N),
      (n[118] = Se),
      (n[119] = q),
      (n[120] = U),
      (n[121] = we),
      (n[122] = I),
      (n[123] = B),
      (n[124] = bt),
      (n[125] = X))
    : (X = n[125]);
  let Z = Te === `below` && ht && `me-12`,
    Dt = !rt && `hidden`,
    Ot;
  n[126] !== Z || n[127] !== Dt
    ? ((Ot = y(`flex flex-row-reverse items-center gap-1`, Z, Dt)),
      (n[126] = Z),
      (n[127] = Dt),
      (n[128] = Ot))
    : (Ot = n[128]);
  let kt;
  n[129] !== m || n[130] !== h
    ? ((kt =
        m == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `ms-1 me-1 flex items-center gap-2`,
              children: [h, (0, $.jsx)(zt, { children: m })],
            })),
      (n[129] = m),
      (n[130] = h),
      (n[131] = kt))
    : (kt = n[131]);
  let At;
  n[132] === Ee
    ? (At = n[133])
    : ((At =
        Ee &&
        (0, $.jsx)(zt, {
          children: (0, $.jsx)(u, {
            id: `codex.userMessage.priorConversation`,
            defaultMessage: `References prior conversation`,
            description: `Text for the prior conversation button`,
          }),
        })),
      (n[132] = Ee),
      (n[133] = At));
  let jt;
  n[134] === P
    ? (jt = n[135])
    : ((jt =
        P &&
        (0, $.jsx)(zt, {
          children: (0, $.jsx)(u, {
            id: `codex.userMessage.reviewMode`,
            defaultMessage: `Review mode`,
            description: `Chip shown when a user asked for a code review`,
          }),
        })),
      (n[134] = P),
      (n[135] = jt));
  let Mt;
  n[136] === De
    ? (Mt = n[137])
    : ((Mt =
        De &&
        (0, $.jsx)(zt, {
          children: (0, $.jsx)(u, {
            id: `codex.userMessage.pullRequestFixMode`,
            defaultMessage: `PR fix`,
            description: `Chip shown when the user started a pull request CI fix task`,
          }),
        })),
      (n[136] = De),
      (n[137] = Mt));
  let Nt;
  n[138] === Oe
    ? (Nt = n[139])
    : ((Nt =
        Oe &&
        (0, $.jsx)(zt, {
          children: (0, $.jsx)(u, {
            id: `codex.userMessage.autoResolveSync`,
            defaultMessage: `Auto resolve conflicts`,
            description: `Chip shown when the user requested auto resolve for handoff conflicts`,
          }),
        })),
      (n[138] = Oe),
      (n[139] = Nt));
  let Pt;
  n[140] === Pe
    ? (Pt = n[141])
    : ((Pt =
        Pe > 0 &&
        (0, $.jsx)(zt, {
          children: (0, $.jsx)(u, {
            id: `codex.userMessage.commentCount`,
            defaultMessage: `{count, plural, one {# comment} other {# comments}}`,
            description: `Chip shown when the user included inline diff comments in the prompt`,
            values: { count: Pe },
          }),
        })),
      (n[140] = Pe),
      (n[141] = Pt));
  let Ft;
  n[142] !== b ||
  n[143] !== xe ||
  n[144] !== Ke ||
  n[145] !== Se ||
  n[146] !== q ||
  n[147] !== St ||
  n[148] !== ct ||
  n[149] !== U ||
  n[150] !== we ||
  n[151] !== te ||
  n[152] !== I ||
  n[153] !== B ||
  n[154] !== Ie ||
  n[155] !== s
    ? ((Ft =
        (U || Ke || b != null) && !B && !Se && !we && !I
          ? (0, $.jsxs)(`div`, {
              className: y(
                `isolate me-1 ms-1 flex items-center gap-2`,
                xe
                  ? void 0
                  : `opacity-0 group-focus-within/user-message:opacity-100 group-hover/user-message:opacity-100 [@media(hover:none)]:opacity-100`,
              ),
              children: [
                s == null
                  ? null
                  : (0, $.jsx)(`span`, {
                      className: `flex opacity-0 group-focus-within/user-message:opacity-100 group-hover/user-message:opacity-100`,
                      children: (0, $.jsx)(ft, { sentAtMs: s }),
                    }),
                (0, $.jsxs)(`div`, {
                  className: `flex turn-action-controls items-center gap-0.5 browser:gap-0`,
                  children: [
                    te == null ? null : (0, $.jsx)(mt, { stats: te }),
                    U ? q : null,
                    b,
                    Ke && !Ie
                      ? (0, $.jsx)(S, {
                          tooltipContent: St,
                          children: (0, $.jsx)(t, {
                            className: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                            color: `ghost`,
                            size: `icon`,
                            "aria-label": St,
                            onClick: ct,
                            children: (0, $.jsx)(de, { className: `icon-xs` }),
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null),
      (n[142] = b),
      (n[143] = xe),
      (n[144] = Ke),
      (n[145] = Se),
      (n[146] = q),
      (n[147] = St),
      (n[148] = ct),
      (n[149] = U),
      (n[150] = we),
      (n[151] = te),
      (n[152] = I),
      (n[153] = B),
      (n[154] = Ie),
      (n[155] = s),
      (n[156] = Ft))
    : (Ft = n[156]);
  let It;
  n[157] !== Ot ||
  n[158] !== kt ||
  n[159] !== At ||
  n[160] !== jt ||
  n[161] !== Mt ||
  n[162] !== Nt ||
  n[163] !== Pt ||
  n[164] !== Ft
    ? ((It = (0, $.jsxs)(`div`, { className: Ot, children: [kt, At, jt, Mt, Nt, Pt, Ft] })),
      (n[157] = Ot),
      (n[158] = kt),
      (n[159] = At),
      (n[160] = jt),
      (n[161] = Mt),
      (n[162] = Nt),
      (n[163] = Pt),
      (n[164] = Ft),
      (n[165] = It))
    : (It = n[165]);
  let Lt;
  return (
    n[166] !== Tt || n[167] !== Et || n[168] !== X || n[169] !== It
      ? ((Lt = (0, $.jsxs)(`div`, { className: Tt, children: [Et, X, It] })),
        (n[166] = Tt),
        (n[167] = Et),
        (n[168] = X),
        (n[169] = It),
        (n[170] = Lt))
      : (Lt = n[170]),
    Lt
  );
}
function zt(e) {
  let t = (0, Vt.c)(8),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = y(`text-codex-description text-xs`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(`span`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Bt(e) {
  let t = e.current?.closest(`[data-search-result-target]`),
    n = t == null ? void 0 : Ue(t).find(({ element: e, target: n }) => e === t && n.isTruncated)?.target;
  n?.reveal != null && (0, Ut.flushSync)(n.reveal);
  try {
    let t = e.current;
    return t == null ? null : A(t, { includeCollapsedContent: !0 });
  } finally {
    n?.reveal != null && (0, Ut.flushSync)(n.reveal);
  }
}
var Vt, Ht, Ut, $;
function Wt() {
  return (Wt = e(() => {
    ((Vt = w()),
      te(),
      p(),
      R(),
      (Ht = E()),
      (Ut = be()),
      ce(),
      N(),
      ct(),
      Be(),
      at(),
      vt(),
      ke(),
      De(),
      je(),
      j(),
      oe(),
      I(),
      C(),
      ie(),
      se(),
      h(),
      x(),
      St(),
      J(),
      nt(),
      Dt(),
      Lt(),
      ($ = T()));
  }))();
}
export { _t as a, J as c, St as i, ut as l, Wt as n, vt as o, yt as r, ft as s, Rt as t, dt as u };
//# sourceMappingURL=user-message-74653d08e16f.js.map
