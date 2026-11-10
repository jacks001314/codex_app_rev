import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  B6t as i,
  Hnt as a,
  Irt as o,
  KKt as s,
  O3t as c,
  O8t as l,
  Tat as u,
  Vnt as d,
  a3t as f,
  kmn as p,
  krt as m,
  o3t as h,
  qKt as g,
} from "./app-initial-f094ef01c64d.js";
import { Dx as _, Sx as v, lx as y } from "./app-primary-4c40d73a1074.js";
function b(e) {
  let t = (0, x.c)(10),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { conversationId: i, initialPrompt: a } = r,
    o = n(f),
    c;
  t[2] !== i || t[3] !== a || t[4] !== o
    ? ((c = () =>
        (0, S.default)(() =>
          _(a ?? (i == null ? `` : o.get(m, i)), {
            defaultTextKind: (a == null && i != null) || d(a ?? ``).length > 0 ? `prompt` : `plain`,
            enableFileMentions: !0,
            enableRichText: !0,
            enableSkillMentions: !1,
            enableSlashCommands: { triggers: [`/`] },
            plainTextMode: s(o.get, l.composerPlainTextMode),
          }),
        )),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = c))
    : (c = t[5]);
  let [u] = (0, C.useState)(c),
    p;
  t[6] === u ? (p = t[7]) : ((p = u()), (t[6] = u), (t[7] = p));
  let h = p,
    g;
  return (
    t[8] === h
      ? (g = t[9])
      : ((g = () => {
          h.view.isDestroyed || h.destroy();
        }),
        (t[8] = h),
        (t[9] = g)),
    v(g),
    h
  );
}
var x,
  S,
  C,
  w = e(() => {
    ((x = p()), (S = t(u(), 1)), c(), i(), (C = t(r(), 1)), a(), y(), h(), g(), o());
  });
export { b as n, w as t };
//# sourceMappingURL=use-chatgpt-composer-controller-f59d12db17ed.js.map
