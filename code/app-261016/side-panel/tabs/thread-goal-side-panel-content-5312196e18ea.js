import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  LNt as a,
  M4 as o,
  OB as s,
  PBt as c,
  Qst as ee,
  Vrt as l,
  XOt as u,
  Y3 as te,
  Z3 as d,
  ZSt as f,
  fN as p,
  hN as ne,
  j4 as re,
  okt as ie,
  qrt as ae,
  tkt as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Fgr as m,
  Fm as h,
  MOr as se,
  Pgr as ce,
  XSn as le,
  YSn as g,
  a8n as ue,
  ah as de,
  cSn as _,
  eCn as v,
  hen as fe,
  ih as pe,
  oSn as me,
  pen as y,
  qSn as he,
  tCn as ge,
  wh as _e,
  xln as ve,
  zOr as b,
} from "./app-initial-ad16eaadf81f.js";
import {
  Cm as ye,
  Sm as x,
  _m as be,
  bm as xe,
  vm as S,
  wm as C,
  xm as w,
  ym as T,
} from "./app-primary-3e00728c2a4c.js";
import { n as E, t as Se } from "./toolbar-row-ed131f206dc6.js";
function Ce(e) {
  return { ...e, isSaving: !0 };
}
function we(e) {
  return { ...e, pendingSourceObjective: null };
}
function Te(e) {
  return { ...e, pendingSourceObjective: null };
}
function Ee(e) {
  return { ...e, isSaving: !1 };
}
function De(e) {
  return { ...e, draft: e.savedObjective };
}
var D, O, k, A;
function j() {
  return (j = e(() => {
    ((D = c()),
      o(),
      f(),
      (O = i()),
      u(),
      _(),
      p(),
      d(),
      s(),
      l(),
      E(),
      y(),
      C(),
      h(),
      n(),
      b(),
      m(),
      v(),
      g(),
      S(),
      (k = a()),
      (A = function (e) {
        let n = (0, D.c)(77),
          { conversationId: i, hostId: a, renderSlots: o, setTabState: s, tabState: c } = e,
          l = t(ee),
          u = t(se),
          d = ie(),
          f = fe(),
          { isSaving: p } = c,
          m;
        n[0] === c.draft
          ? (m = n[1])
          : ((m = () =>
              _e(c.draft, {
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
            (n[0] = c.draft),
            (n[1] = m));
        let [h] = (0, O.useState)(m),
          g;
        n[2] === h
          ? (g = n[3])
          : ((g = () => () => {
              h.view.isDestroyed || h.destroy();
            }),
            (n[2] = h),
            (n[3] = g));
        let [_] = (0, O.useState)(g);
        pe(_, h);
        let v;
        n[4] !== h || n[5] !== s
          ? ((v = (e) => {
              if (!e) return;
              let t = ne(h.getPersistedText());
              s((e) => (e.draft === t ? e : { ...e, draft: t }));
            }),
            (n[4] = h),
            (n[5] = s),
            (n[6] = v))
          : (v = n[6]);
        let y = (0, O.useEffectEvent)(v),
          b;
        n[7] !== h.view || n[8] !== y
          ? ((b = () => ve(h.view, y)), (n[7] = h.view), (n[8] = y), (n[9] = b))
          : (b = n[9]);
        let S;
        (n[10] === h ? (S = n[11]) : ((S = [h]), (n[10] = h), (n[11] = S)), (0, O.useEffect)(b, S));
        let C;
        n[12] !== h.view || n[13] !== p
          ? ((C = () => {
              h.view.setProps({ editable: () => !p });
            }),
            (n[12] = h.view),
            (n[13] = p),
            (n[14] = C))
          : (C = n[14]);
        let E;
        (n[15] !== h || n[16] !== p ? ((E = [h, p]), (n[15] = h), (n[16] = p), (n[17] = E)) : (E = n[17]),
          (0, O.useEffect)(C, E));
        let A = c.draft !== c.savedObjective,
          j;
        n[18] === c.draft ? (j = n[19]) : ((j = c.draft.trim()), (n[18] = c.draft), (n[19] = j));
        let Oe = j,
          M = !p && Oe.length > 0 && Oe !== c.savedObjective,
          N;
        n[20] !== l ||
        n[21] !== i ||
        n[22] !== h ||
        n[23] !== a ||
        n[24] !== d ||
        n[25] !== p ||
        n[26] !== u ||
        n[27] !== c.savedObjective
          ? ((N = async () => {
              let e = ne(h.getPersistedText()).trim(),
                t = be(u),
                n = u.get(t.tabById$, ce.GOAL)?.dndId;
              if (p || u.get(w) || n == null || e.length === 0 || e === c.savedObjective) return;
              let r = null;
              (u.set(w, !0),
                x(u, Ce),
                await ue(
                  (async () => {
                    try {
                      if (
                        ((r = await le({
                          scope: l,
                          draft: { objective: e, imageAttachments: [], pastedTextAttachments: [] },
                          hostId: a,
                        })),
                        !T(u, n))
                      )
                        return;
                      let t = r.objective;
                      x(u, (e) => ({ ...e, pendingSourceObjective: t }));
                      let o = await ge({
                        scope: l,
                        appendTranscriptItem: !1,
                        conversationId: i,
                        hostId: a,
                        intl: d,
                        objective: r.objective,
                        threadSettings: u.get(xe) ?? void 0,
                      });
                      if ((o && (r = null), !T(u, n))) return;
                      o
                        ? (h.view.isDestroyed || h.setPromptText(e),
                          x(u, (n) => ({
                            ...n,
                            draft: e,
                            pendingSourceObjective: null,
                            savedAtMs: Date.now(),
                            savedObjective: e,
                            sourceObjective: t,
                          })))
                        : x(u, we);
                    } catch {
                      if (!T(u, n)) return;
                      (x(u, Te),
                        l
                          .get(ae)
                          .danger(
                            d.formatMessage({
                              id: `composer.threadGoal.editSaveError`,
                              defaultMessage: `Failed to save goal objective`,
                              description: `Toast shown when an edited goal objective cannot be saved`,
                            }),
                            { errorAnalytics: { toastId: `composer.threadGoal.editSaveError` } },
                          ));
                    }
                  })(),
                  async () => {
                    (r != null && (await he({ scope: l, hostId: a, materialized: r })),
                      T(u, n) && x(u, Ee),
                      u.set(w, !1));
                  },
                ));
            }),
            (n[20] = l),
            (n[21] = i),
            (n[22] = h),
            (n[23] = a),
            (n[24] = d),
            (n[25] = p),
            (n[26] = u),
            (n[27] = c.savedObjective),
            (n[28] = N))
          : (N = n[28]);
        let P = N,
          F;
        n[29] !== h || n[30] !== A || n[31] !== p || n[32] !== s || n[33] !== c.savedObjective
          ? ((F = () => {
              A && !p && (h.setPromptText(c.savedObjective), s(De));
            }),
            (n[29] = h),
            (n[30] = A),
            (n[31] = p),
            (n[32] = s),
            (n[33] = c.savedObjective),
            (n[34] = F))
          : (F = n[34]);
        let I = F,
          L;
        n[35] === d
          ? (L = n[36])
          : ((L = d.formatMessage({
              id: `composer.threadGoal.editDialog.ariaLabel`,
              defaultMessage: `Goal`,
              description: `Accessible label and placeholder for the goal editor.`,
            })),
            (n[35] = d),
            (n[36] = L));
        let R = L,
          z;
        n[37] !== M || n[38] !== P
          ? ((z = (e) => {
              ye(e, () => {
                M && P();
              });
            }),
            (n[37] = M),
            (n[38] = P),
            (n[39] = z))
          : (z = n[39]);
        let B = Math.max(0, Math.floor((f.getTime() - c.savedAtMs) / 6e4)),
          V;
        n[40] === B
          ? (V = n[41])
          : ((V = (0, k.jsx)(`span`, {
              className: `truncate text-size-chat text-codex-description select-none`,
              children: (0, k.jsx)(oe, {
                id: `composer.threadGoal.editor.updatedAgo`,
                defaultMessage: `{minutes, plural, =0 {Updated just now} one {Updated # min ago} other {Updated # min ago}}`,
                description: `Relative time since the thread goal objective was last updated.`,
                values: { minutes: B },
              }),
            })),
            (n[40] = B),
            (n[41] = V));
        let H = !A || p,
          U;
        n[42] === d
          ? (U = n[43])
          : ((U = d.formatMessage({
              id: `composer.threadGoal.editor.revert`,
              defaultMessage: `Revert`,
              description: `Button label that restores the last saved thread goal in the goal editor.`,
            })),
            (n[42] = d),
            (n[43] = U));
        let W;
        n[44] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((W = (0, k.jsx)(r, { asset: re })), (n[44] = W))
          : (W = n[44]);
        let G;
        n[45] !== I || n[46] !== H || n[47] !== U
          ? ((G = (0, k.jsx)(te, {
              color: `ghost`,
              disabled: H,
              size: `toolbar`,
              uniform: !0,
              onClick: I,
              "aria-label": U,
              children: W,
            })),
            (n[45] = I),
            (n[46] = H),
            (n[47] = U),
            (n[48] = G))
          : (G = n[48]);
        let K = !M,
          q;
        n[49] === P
          ? (q = n[50])
          : ((q = () => {
              P();
            }),
            (n[49] = P),
            (n[50] = q));
        let J;
        n[51] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((J = (0, k.jsx)(oe, {
              id: `composer.threadGoal.editDialog.save`,
              defaultMessage: `Save`,
              description: `Save button for the goal editor.`,
            })),
            (n[51] = J))
          : (J = n[51]);
        let Y;
        n[52] !== p || n[53] !== K || n[54] !== q
          ? ((Y = (0, k.jsx)(te, {
              color: `primary`,
              disabled: K,
              loading: p,
              size: `toolbar`,
              onClick: q,
              children: J,
            })),
            (n[52] = p),
            (n[53] = K),
            (n[54] = q),
            (n[55] = Y))
          : (Y = n[55]);
        let X;
        n[56] !== G || n[57] !== Y
          ? ((X = (0, k.jsxs)(me, { children: [G, Y] })), (n[56] = G), (n[57] = Y), (n[58] = X))
          : (X = n[58]);
        let Z;
        n[59] !== V || n[60] !== X
          ? ((Z = (0, k.jsxs)(Se, { children: [V, X] })), (n[59] = V), (n[60] = X), (n[61] = Z))
          : (Z = n[61]);
        let Q;
        if (n[62] !== h || n[63] !== R || n[64] !== P || n[65] !== o || n[66] !== Z) {
          let e;
          n[68] === P
            ? (e = n[69])
            : ((e = () => {
                P();
              }),
              (n[68] = P),
              (n[69] = e));
          let t;
          (n[70] !== h || n[71] !== R || n[72] !== e
            ? ((t = (0, k.jsx)(`div`, {
                className: `h-full min-h-0 overflow-y-auto p-panel`,
                children: (0, k.jsx)(de, {
                  ariaLabel: R,
                  className: `text-base`,
                  composerController: h,
                  minHeight: `100%`,
                  placeholder: R,
                  onSubmit: e,
                }),
              })),
              (n[70] = h),
              (n[71] = R),
              (n[72] = e),
              (n[73] = t))
            : (t = n[73]),
            (Q = o({ headerRows: [{ id: `goal-actions`, content: Z }], content: t })),
            (n[62] = h),
            (n[63] = R),
            (n[64] = P),
            (n[65] = o),
            (n[66] = Z),
            (n[67] = Q));
        } else Q = n[67];
        let $;
        return (
          n[74] !== z || n[75] !== Q
            ? (($ = (0, k.jsx)(`div`, {
                className: `h-full min-h-0 bg-surface`,
                role: `presentation`,
                onKeyDown: z,
                children: Q,
              })),
              (n[74] = z),
              (n[75] = Q),
              (n[76] = $))
            : ($ = n[76]),
          $
        );
      }));
  }))();
}
j();
export { A as ThreadGoalSidePanelTab };
//# sourceMappingURL=thread-goal-side-panel-content-5312196e18ea.js.map
