import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CM as n,
  Cot as r,
  EM as i,
  IDt as ee,
  Ixt as te,
  M2 as a,
  Mz as ne,
  Nz as o,
  Pxt as s,
  VDt as re,
  hot as ie,
  j2 as ae,
  jDt as c,
  lot as l,
  t3 as u,
  vzt as d,
  wot as f,
  xMt as oe,
  yzt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as m,
  Gyn as se,
  Hyn as ce,
  Ifr as le,
  J5t as ue,
  K5t as h,
  Lfr as g,
  Rm as de,
  T2n as fe,
  Wyn as _,
  Xyn as pe,
  Yyn as v,
  ayn as y,
  gwr as me,
  hm as b,
  ih as he,
  kan as ge,
  ryn as _e,
  zm as ve,
} from "./app-initial-5851df3f6cb1.js";
import {
  am as x,
  cm as S,
  dm as C,
  im as ye,
  lm as w,
  om as T,
  sm as be,
  um as xe,
} from "./app-primary-fe8a450b3b04.js";
import { n as E, t as Se } from "./toolbar-row-2c9fc5d31463.js";
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
    ((D = d()),
      a(),
      s(),
      (O = p()),
      c(),
      y(),
      n(),
      u(),
      o(),
      l(),
      E(),
      h(),
      C(),
      b(),
      f(),
      m(),
      g(),
      v(),
      _(),
      x(),
      (k = oe()),
      (A = function (e) {
        let n = (0, D.c)(77),
          { conversationId: a, hostId: o, renderSlots: s, setTabState: c, tabState: l } = e,
          u = te(r),
          d = te(me),
          f = re(),
          oe = ue(),
          { isSaving: p } = l,
          m;
        n[0] === l.draft
          ? (m = n[1])
          : ((m = () =>
              he(l.draft, {
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
            (n[0] = l.draft),
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
        de(_, h);
        let v;
        n[4] !== h || n[5] !== c
          ? ((v = (e) => {
              if (!e) return;
              let t = i(h.getPersistedText());
              c((e) => (e.draft === t ? e : { ...e, draft: t }));
            }),
            (n[4] = h),
            (n[5] = c),
            (n[6] = v))
          : (v = n[6]);
        let y = (0, O.useEffectEvent)(v),
          b;
        n[7] !== h.view || n[8] !== y
          ? ((b = () => ge(h.view, y)), (n[7] = h.view), (n[8] = y), (n[9] = b))
          : (b = n[9]);
        let x;
        (n[10] === h ? (x = n[11]) : ((x = [h]), (n[10] = h), (n[11] = x)), (0, O.useEffect)(b, x));
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
        let A = l.draft !== l.savedObjective,
          j;
        n[18] === l.draft ? (j = n[19]) : ((j = l.draft.trim()), (n[18] = l.draft), (n[19] = j));
        let Oe = j,
          M = !p && Oe.length > 0 && Oe !== l.savedObjective,
          N;
        n[20] !== u ||
        n[21] !== a ||
        n[22] !== h ||
        n[23] !== o ||
        n[24] !== f ||
        n[25] !== p ||
        n[26] !== d ||
        n[27] !== l.savedObjective
          ? ((N = async () => {
              let e = i(h.getPersistedText()).trim(),
                t = ye(d),
                n = d.get(t.tabById$, le.GOAL)?.dndId;
              if (p || d.get(S) || n == null || e.length === 0 || e === l.savedObjective) return;
              let r = null;
              (d.set(S, !0),
                w(d, Ce),
                await fe(
                  (async () => {
                    try {
                      if (
                        ((r = await se({
                          scope: u,
                          draft: { objective: e, imageAttachments: [], pastedTextAttachments: [] },
                          hostId: o,
                        })),
                        !T(d, n))
                      )
                        return;
                      let t = r.objective;
                      w(d, (e) => ({ ...e, pendingSourceObjective: t }));
                      let i = await pe({
                        scope: u,
                        appendTranscriptItem: !1,
                        conversationId: a,
                        hostId: o,
                        intl: f,
                        objective: r.objective,
                        threadSettings: d.get(be) ?? void 0,
                      });
                      if ((i && (r = null), !T(d, n))) return;
                      i
                        ? (h.view.isDestroyed || h.setPromptText(e),
                          w(d, (n) => ({
                            ...n,
                            draft: e,
                            pendingSourceObjective: null,
                            savedAtMs: Date.now(),
                            savedObjective: e,
                            sourceObjective: t,
                          })))
                        : w(d, we);
                    } catch {
                      if (!T(d, n)) return;
                      (w(d, Te),
                        u
                          .get(ie)
                          .danger(
                            f.formatMessage({
                              id: `composer.threadGoal.editSaveError`,
                              defaultMessage: `Failed to save goal objective`,
                              description: `Toast shown when an edited goal objective cannot be saved`,
                            }),
                            { errorAnalytics: { toastId: `composer.threadGoal.editSaveError` } },
                          ));
                    }
                  })(),
                  async () => {
                    (r != null && (await ce({ scope: u, hostId: o, materialized: r })),
                      T(d, n) && w(d, Ee),
                      d.set(S, !1));
                  },
                ));
            }),
            (n[20] = u),
            (n[21] = a),
            (n[22] = h),
            (n[23] = o),
            (n[24] = f),
            (n[25] = p),
            (n[26] = d),
            (n[27] = l.savedObjective),
            (n[28] = N))
          : (N = n[28]);
        let P = N,
          F;
        n[29] !== h || n[30] !== A || n[31] !== p || n[32] !== c || n[33] !== l.savedObjective
          ? ((F = () => {
              A && !p && (h.setPromptText(l.savedObjective), c(De));
            }),
            (n[29] = h),
            (n[30] = A),
            (n[31] = p),
            (n[32] = c),
            (n[33] = l.savedObjective),
            (n[34] = F))
          : (F = n[34]);
        let I = F,
          L;
        n[35] === f
          ? (L = n[36])
          : ((L = f.formatMessage({
              id: `composer.threadGoal.editDialog.ariaLabel`,
              defaultMessage: `Goal`,
              description: `Accessible label and placeholder for the goal editor.`,
            })),
            (n[35] = f),
            (n[36] = L));
        let R = L,
          z;
        n[37] !== M || n[38] !== P
          ? ((z = (e) => {
              xe(e, () => {
                M && P();
              });
            }),
            (n[37] = M),
            (n[38] = P),
            (n[39] = z))
          : (z = n[39]);
        let B = Math.max(0, Math.floor((oe.getTime() - l.savedAtMs) / 6e4)),
          V;
        n[40] === B
          ? (V = n[41])
          : ((V = (0, k.jsx)(`span`, {
              className: `truncate text-size-chat text-codex-description select-none`,
              children: (0, k.jsx)(ee, {
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
        n[42] === f
          ? (U = n[43])
          : ((U = f.formatMessage({
              id: `composer.threadGoal.editor.revert`,
              defaultMessage: `Revert`,
              description: `Button label that restores the last saved thread goal in the goal editor.`,
            })),
            (n[42] = f),
            (n[43] = U));
        let W;
        n[44] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((W = (0, k.jsx)(ne, { asset: ae })), (n[44] = W))
          : (W = n[44]);
        let G;
        n[45] !== I || n[46] !== H || n[47] !== U
          ? ((G = (0, k.jsx)(t, {
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
          ? ((J = (0, k.jsx)(ee, {
              id: `composer.threadGoal.editDialog.save`,
              defaultMessage: `Save`,
              description: `Save button for the goal editor.`,
            })),
            (n[51] = J))
          : (J = n[51]);
        let Y;
        n[52] !== p || n[53] !== K || n[54] !== q
          ? ((Y = (0, k.jsx)(t, {
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
          ? ((X = (0, k.jsxs)(_e, { children: [G, Y] })), (n[56] = G), (n[57] = Y), (n[58] = X))
          : (X = n[58]);
        let Z;
        n[59] !== V || n[60] !== X
          ? ((Z = (0, k.jsxs)(Se, { children: [V, X] })), (n[59] = V), (n[60] = X), (n[61] = Z))
          : (Z = n[61]);
        let Q;
        if (n[62] !== h || n[63] !== R || n[64] !== P || n[65] !== s || n[66] !== Z) {
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
                children: (0, k.jsx)(ve, {
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
            (Q = s({ headerRows: [{ id: `goal-actions`, content: Z }], content: t })),
            (n[62] = h),
            (n[63] = R),
            (n[64] = P),
            (n[65] = s),
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
//# sourceMappingURL=thread-goal-side-panel-content-b3b7649c4c41.js.map
