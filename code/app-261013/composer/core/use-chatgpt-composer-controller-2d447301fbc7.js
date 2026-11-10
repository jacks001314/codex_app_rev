import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Gct as r,
  Hnt as i,
  Ixt as a,
  Pxt as o,
  Wnt as s,
  rst as c,
  vzt as l,
  wot as u,
  xlt as d,
  yzt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  BVn as p,
  Rm as m,
  Srn as h,
  VVn as g,
  bZn as _,
  hm as v,
  ih as y,
  sNn as b,
  wNn as x,
  xNn as S,
  xrn as C,
  yjn as w,
} from "./app-initial-5851df3f6cb1.js";
function T(e) {
  let t = (0, E.c)(19),
    o;
  t[0] === e ? (o = t[1]) : ((o = e === void 0 ? {} : e), (t[0] = e), (t[1] = o));
  let { composerController: s, conversationId: c, draftKey: l, initialPrompt: u, initialPromptKind: d } = o,
    f = l === void 0 ? c : l,
    h = a(n),
    g;
  t[2] !== c || t[3] !== f || t[4] !== u || t[5] !== d || t[6] !== h
    ? ((g = () =>
        (0, D.default)(() => {
          let e = c == null ? null : h.get(_, c),
            t = y(u ?? (f == null ? `` : h.get(b, f)), {
              addInitialContentToHistory: u == null && f != null,
              defaultTextKind: d ?? ((u == null && f != null) || C(u ?? ``).length > 0 ? `prompt` : `plain`),
              enableFileMentions: !0,
              enableRichText: !0,
              enableSkillMentions: !1,
              enableSlashCommands: { triggers: [`/`] },
              plainTextMode: i(h.get, r.composerPlainTextMode),
              suggestionOptions: {
                enableInlineSystemHints: e !== `tpp` && e !== `flora`,
                variant: e !== `tpp` && e !== `flora` ? `chatgpt` : void 0,
              },
            });
          return (
            u == null &&
              c != null &&
              typeof f == `string` &&
              p(h, f) != null &&
              e !== `tpp` &&
              e !== `flora` &&
              x(h, c, t.getChatGptPrompt().systemHints),
            t
          );
        })),
      (t[2] = c),
      (t[3] = f),
      (t[4] = u),
      (t[5] = d),
      (t[6] = h),
      (t[7] = g))
    : (g = t[7]);
  let [v] = (0, O.useState)(g),
    S;
  t[8] !== v || t[9] !== s ? ((S = s ?? v()), (t[8] = v), (t[9] = s), (t[10] = S)) : (S = t[10]);
  let w = S,
    T = (0, O.useRef)(null),
    k,
    A;
  (t[11] !== w || t[12] !== f || t[13] !== h
    ? ((k = () => {
        if (f == null) return;
        let e = h.get(b, f);
        return (
          T.current != null && T.current !== e && w.restoreDraft(e),
          () => {
            T.current = h.get(b, f);
          }
        );
      }),
      (A = [w, f, h]),
      (t[11] = w),
      (t[12] = f),
      (t[13] = h),
      (t[14] = k),
      (t[15] = A))
    : ((k = t[14]), (A = t[15])),
    (0, O.useLayoutEffect)(k, A));
  let j;
  return (
    t[16] !== w || t[17] !== s
      ? ((j = () => {
          s == null && !w.view.isDestroyed && w.destroy();
        }),
        (t[16] = w),
        (t[17] = s),
        (t[18] = j))
      : (j = t[18]),
    m(j, w),
    w
  );
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = l()), (D = t(d(), 1)), o(), c(), (O = f()), h(), v(), u(), s(), S(), g(), w());
  }))();
}
export { T as n, k as t };
//# sourceMappingURL=use-chatgpt-composer-controller-2d447301fbc7.js.map
