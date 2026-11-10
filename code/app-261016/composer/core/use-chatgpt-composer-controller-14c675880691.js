import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  FBt as i,
  PBt as a,
  Qst as o,
  Tut as s,
  Ylt as c,
  ZSt as l,
  iit as u,
  oit as d,
  sct as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Fm as p,
  GIn as m,
  Hon as h,
  JIn as g,
  Uon as _,
  VPn as v,
  iGn as y,
  ih as b,
  jIn as x,
  q1n as S,
  rGn as C,
  wh as w,
} from "./app-initial-ad16eaadf81f.js";
function T(e) {
  let t = (0, E.c)(19),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { composerController: i, conversationId: a, draftKey: s, initialPrompt: l, initialPromptKind: d } = r,
    f = s === void 0 ? a : s,
    p = n(o),
    m;
  t[2] !== a || t[3] !== f || t[4] !== l || t[5] !== d || t[6] !== p
    ? ((m = () =>
        (0, D.default)(() => {
          let e = a == null ? null : p.get(S, a),
            t = w(l ?? (f == null ? `` : p.get(x, f)), {
              addInitialContentToHistory: l == null && f != null,
              defaultTextKind: d ?? ((l == null && f != null) || h(l ?? ``).length > 0 ? `prompt` : `plain`),
              enableFileMentions: !0,
              enableRichText: !0,
              enableSkillMentions: !1,
              enableSlashCommands: { triggers: [`/`] },
              plainTextMode: u(p.get, c.composerPlainTextMode),
              suggestionOptions: {
                enableInlineSystemHints: e !== `tpp` && e !== `flora`,
                variant: e !== `tpp` && e !== `flora` ? `chatgpt` : void 0,
              },
            });
          return (
            l == null &&
              a != null &&
              typeof f == `string` &&
              C(p, f) != null &&
              e !== `tpp` &&
              e !== `flora` &&
              g(p, a, t.getChatGptPrompt().systemHints),
            t
          );
        })),
      (t[2] = a),
      (t[3] = f),
      (t[4] = l),
      (t[5] = d),
      (t[6] = p),
      (t[7] = m))
    : (m = t[7]);
  let [_] = (0, O.useState)(m),
    v;
  t[8] !== _ || t[9] !== i ? ((v = i ?? _()), (t[8] = _), (t[9] = i), (t[10] = v)) : (v = t[10]);
  let y = v,
    T = (0, O.useRef)(null),
    k,
    A;
  (t[11] !== y || t[12] !== f || t[13] !== p
    ? ((k = () => {
        if (f == null) return;
        let e = p.get(x, f);
        return (
          T.current != null && T.current !== e && y.restoreDraft(e),
          () => {
            T.current = p.get(x, f);
          }
        );
      }),
      (A = [y, f, p]),
      (t[11] = y),
      (t[12] = f),
      (t[13] = p),
      (t[14] = k),
      (t[15] = A))
    : ((k = t[14]), (A = t[15])),
    (0, O.useLayoutEffect)(k, A));
  let j;
  return (
    t[16] !== y || t[17] !== i
      ? ((j = () => {
          i == null && !y.view.isDestroyed && y.destroy();
        }),
        (t[16] = y),
        (t[17] = i),
        (t[18] = j))
      : (j = t[18]),
    b(j, y),
    y
  );
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = a()), (D = t(s(), 1)), l(), f(), (O = i()), _(), p(), r(), d(), m(), y(), v());
  }))();
}
export { T as n, k as t };
//# sourceMappingURL=use-chatgpt-composer-controller-14c675880691.js.map
