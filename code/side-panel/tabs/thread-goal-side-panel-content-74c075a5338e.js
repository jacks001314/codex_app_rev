import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  Cpn as a,
  IO as o,
  LO as ee,
  O3t as s,
  Opn as te,
  Sp as ne,
  Spn as c,
  Spt as l,
  a3t as re,
  dWt as ie,
  e6 as ae,
  eIt as oe,
  gMt as u,
  gRt as se,
  hMt as ce,
  hmn as le,
  jXt as ue,
  kMt as d,
  kXt as f,
  kmn as p,
  lWt as m,
  n6 as h,
  o3t as de,
  o6 as g,
  r6 as fe,
  s6 as pe,
  tIt as _,
  xRt as v,
  xp as y,
  xpt as me,
} from "./app-initial-f094ef01c64d.js";
import {
  Cx as he,
  Dx as ge,
  Gn as _e,
  Hn as ve,
  Hs as ye,
  Kn as b,
  Sx as be,
  Un as x,
  Us as S,
  Vx as xe,
  Wn as C,
  cx as w,
  lx as T,
  qn as E,
} from "./app-primary-4c40d73a1074.js";
function Se(e) {
  return { ...e, isSaving: !0 };
}
function Ce(e) {
  return { ...e, pendingSourceObjective: null };
}
function we(e) {
  return { ...e, pendingSourceObjective: null };
}
function Te(e) {
  return { ...e, isSaving: !1 };
}
function Ee(e) {
  return { ...e, draft: e.savedObjective };
}
var D, O, k, A;
e(() => {
  ((D = p()),
    l(),
    s(),
    (O = t(i(), 1)),
    c(),
    m(),
    r(),
    u(),
    f(),
    o(),
    S(),
    T(),
    de(),
    v(),
    _(),
    w(),
    y(),
    g(),
    h(),
    x(),
    (k = le()),
    (A = function (e) {
      let t = (0, D.c)(72),
        { conversationId: r, hostId: i, setTabState: o, tabState: s } = e,
        c = n(re),
        l = n(se),
        u = te(),
        le = ee(),
        { isSaving: f } = s,
        p;
      t[0] === s.draft
        ? (p = t[1])
        : ((p = () =>
            ge(s.draft, {
              defaultTextKind: `prompt`,
              enableCodeBlocks: !0,
              enableFileMentions: !1,
              enableRichText: !0,
              enableSelectedTextLinks: !0,
              enableSkillMentions: !1,
              enableSlashCommands: !1,
              enterBehavior: `newline`,
              restoreMarkdownLinksAsTextLinks: !0,
              restorePathLinksAsFileMentions: !1,
            })),
          (t[0] = s.draft),
          (t[1] = p));
      let [m] = (0, O.useState)(p),
        h;
      t[2] === m
        ? (h = t[3])
        : ((h = () => () => {
            m.view.isDestroyed || m.destroy();
          }),
          (t[2] = m),
          (t[3] = h));
      let [de] = (0, O.useState)(h);
      be(de);
      let g;
      t[4] !== m || t[5] !== o
        ? ((g = (e) => {
            if (!e) return;
            let t = ie(m.getPersistedText());
            o((e) => (e.draft === t ? e : { ...e, draft: t }));
          }),
          (t[4] = m),
          (t[5] = o),
          (t[6] = g))
        : (g = t[6]);
      let _ = (0, O.useEffectEvent)(g),
        v;
      t[7] !== m.view || t[8] !== _
        ? ((v = () => xe(m.view, _)), (t[7] = m.view), (t[8] = _), (t[9] = v))
        : (v = t[9]);
      let y;
      (t[10] === m ? (y = t[11]) : ((y = [m]), (t[10] = m), (t[11] = y)), (0, O.useEffect)(v, y));
      let x;
      t[12] !== m.view || t[13] !== f
        ? ((x = () => {
            m.view.setProps({ editable: () => !f });
          }),
          (t[12] = m.view),
          (t[13] = f),
          (t[14] = x))
        : (x = t[14]);
      let S;
      (t[15] !== m || t[16] !== f
        ? ((S = [m, f]), (t[15] = m), (t[16] = f), (t[17] = S))
        : (S = t[17]),
        (0, O.useEffect)(x, S));
      let w = s.draft !== s.savedObjective,
        T;
      t[18] === s.draft ? (T = t[19]) : ((T = s.draft.trim()), (t[18] = s.draft), (t[19] = T));
      let A = T,
        j = !f && A.length > 0 && A !== s.savedObjective,
        M;
      t[20] !== c ||
      t[21] !== r ||
      t[22] !== m ||
      t[23] !== i ||
      t[24] !== u ||
      t[25] !== f ||
      t[26] !== l ||
      t[27] !== s.savedObjective
        ? ((M = async () => {
            let e = ie(m.getPersistedText()).trim(),
              t = ve(l),
              n = l.get(t.tabById$, oe.GOAL)?.dndId;
            if (f || l.get(b) || n == null || e.length === 0 || e === s.savedObjective) return;
            let a = null;
            (l.set(b, !0),
              E(l, Se),
              await ne(
                (async () => {
                  try {
                    if (
                      ((a = await fe({
                        scope: c,
                        draft: { objective: e, imageAttachments: [], pastedTextAttachments: [] },
                        hostId: i,
                      })),
                      !C(l, n))
                    )
                      return;
                    let t = a.objective;
                    E(l, (e) => ({ ...e, pendingSourceObjective: t }));
                    let o = await pe({
                      scope: c,
                      appendTranscriptItem: !1,
                      conversationId: r,
                      hostId: i,
                      intl: u,
                      objective: a.objective,
                      threadSettings: l.get(_e) ?? void 0,
                    });
                    if ((o && (a = null), !C(l, n))) return;
                    o
                      ? (m.view.isDestroyed || m.setPromptText(e),
                        E(l, (n) => ({
                          ...n,
                          draft: e,
                          pendingSourceObjective: null,
                          savedAtMs: Date.now(),
                          savedObjective: e,
                          sourceObjective: t,
                        })))
                      : E(l, Ce);
                  } catch {
                    if (!C(l, n)) return;
                    (E(l, we),
                      c.get(ue).danger(
                        u.formatMessage({
                          id: `composer.threadGoal.editSaveError`,
                          defaultMessage: `Failed to save goal objective`,
                          description: `Toast shown when an edited goal objective cannot be saved`,
                        }),
                      ));
                  }
                })(),
                async () => {
                  (a != null && (await ae({ scope: c, hostId: i, materialized: a })),
                    C(l, n) && E(l, Te),
                    l.set(b, !1));
                },
              ));
          }),
          (t[20] = c),
          (t[21] = r),
          (t[22] = m),
          (t[23] = i),
          (t[24] = u),
          (t[25] = f),
          (t[26] = l),
          (t[27] = s.savedObjective),
          (t[28] = M))
        : (M = t[28]);
      let N = M,
        P;
      t[29] !== m || t[30] !== w || t[31] !== f || t[32] !== o || t[33] !== s.savedObjective
        ? ((P = () => {
            !w || f || (m.setPromptText(s.savedObjective), o(Ee));
          }),
          (t[29] = m),
          (t[30] = w),
          (t[31] = f),
          (t[32] = o),
          (t[33] = s.savedObjective),
          (t[34] = P))
        : (P = t[34]);
      let F = P,
        I;
      t[35] === u
        ? (I = t[36])
        : ((I = u.formatMessage({
            id: `composer.threadGoal.editDialog.ariaLabel`,
            defaultMessage: `Goal`,
            description: `Accessible label and placeholder for the goal editor.`,
          })),
          (t[35] = u),
          (t[36] = I));
      let L = I,
        R;
      t[37] !== j || t[38] !== N
        ? ((R = (e) => {
            ye(e, () => {
              j && N();
            });
          }),
          (t[37] = j),
          (t[38] = N),
          (t[39] = R))
        : (R = t[39]);
      let z;
      t[40] === N
        ? (z = t[41])
        : ((z = () => {
            N();
          }),
          (t[40] = N),
          (t[41] = z));
      let B;
      t[42] !== m || t[43] !== L || t[44] !== z
        ? ((B = (0, k.jsx)(`div`, {
            className: `min-h-0 flex-1 overflow-y-auto p-panel`,
            children: (0, k.jsx)(he, {
              ariaLabel: L,
              className: `text-base`,
              composerController: m,
              minHeight: `100%`,
              placeholder: L,
              onSubmit: z,
            }),
          })),
          (t[42] = m),
          (t[43] = L),
          (t[44] = z),
          (t[45] = B))
        : (B = t[45]);
      let V = Math.max(0, Math.floor((le.getTime() - s.savedAtMs) / 6e4)),
        H;
      t[46] === V
        ? (H = t[47])
        : ((H = (0, k.jsx)(`span`, {
            className: `truncate text-size-chat text-codex-description select-none`,
            children: (0, k.jsx)(a, {
              id: `composer.threadGoal.editor.updatedAgo`,
              defaultMessage: `{minutes, plural, =0 {Updated just now} one {Updated # min ago} other {Updated # min ago}}`,
              description: `Relative time since the thread goal objective was last updated.`,
              values: { minutes: V },
            }),
          })),
          (t[46] = V),
          (t[47] = H));
      let U = !w || f,
        W;
      t[48] === u
        ? (W = t[49])
        : ((W = u.formatMessage({
            id: `composer.threadGoal.editor.revert`,
            defaultMessage: `Revert`,
            description: `Button label that restores the last saved thread goal in the goal editor.`,
          })),
          (t[48] = u),
          (t[49] = W));
      let G;
      t[50] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((G = (0, k.jsx)(ce, { asset: me })), (t[50] = G))
        : (G = t[50]);
      let K;
      t[51] !== F || t[52] !== U || t[53] !== W
        ? ((K = (0, k.jsx)(d, {
            color: `ghost`,
            disabled: U,
            size: `toolbar`,
            uniform: !0,
            onClick: F,
            "aria-label": W,
            children: G,
          })),
          (t[51] = F),
          (t[52] = U),
          (t[53] = W),
          (t[54] = K))
        : (K = t[54]);
      let q = !j,
        J;
      t[55] === N
        ? (J = t[56])
        : ((J = () => {
            N();
          }),
          (t[55] = N),
          (t[56] = J));
      let Y;
      t[57] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Y = (0, k.jsx)(a, {
            id: `composer.threadGoal.editDialog.save`,
            defaultMessage: `Save`,
            description: `Save button for the goal editor.`,
          })),
          (t[57] = Y))
        : (Y = t[57]);
      let X;
      t[58] !== f || t[59] !== q || t[60] !== J
        ? ((X = (0, k.jsx)(d, {
            color: `primary`,
            disabled: q,
            loading: f,
            size: `toolbar`,
            onClick: J,
            children: Y,
          })),
          (t[58] = f),
          (t[59] = q),
          (t[60] = J),
          (t[61] = X))
        : (X = t[61]);
      let Z;
      t[62] !== K || t[63] !== X
        ? ((Z = (0, k.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [K, X],
          })),
          (t[62] = K),
          (t[63] = X),
          (t[64] = Z))
        : (Z = t[64]);
      let Q;
      t[65] !== H || t[66] !== Z
        ? ((Q = (0, k.jsxs)(`div`, {
            className: `flex shrink-0 items-center justify-between gap-2 p-panel`,
            children: [H, Z],
          })),
          (t[65] = H),
          (t[66] = Z),
          (t[67] = Q))
        : (Q = t[67]);
      let $;
      return (
        t[68] !== R || t[69] !== B || t[70] !== Q
          ? (($ = (0, k.jsxs)(`div`, {
              className: `flex h-full min-h-0 flex-col bg-surface`,
              role: `presentation`,
              onKeyDown: R,
              children: [B, Q],
            })),
            (t[68] = R),
            (t[69] = B),
            (t[70] = Q),
            (t[71] = $))
          : ($ = t[71]),
        $
      );
    }));
})();
export { A as ThreadGoalSidePanelTab };
//# sourceMappingURL=thread-goal-side-panel-content-74c075a5338e.js.map
