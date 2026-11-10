import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Ab as r,
  Amn as i,
  B6t as a,
  Db as o,
  E$t as s,
  F3t as c,
  Gy as l,
  IXt as u,
  MCt as d,
  NCt as f,
  O3t as p,
  Ob as m,
  XXt as h,
  ZXt as g,
  a3t as _,
  cFt as v,
  hmn as y,
  hz as b,
  jCt as x,
  kb as S,
  kmn as C,
  mz as w,
  nFt as T,
  o3t as E,
  snn as D,
  tb as O,
  w$t as k,
} from "./app-initial-f094ef01c64d.js";
import { n as A, t as j } from "./quick-chat-window-e34d91db747a.js";
function M() {
  let e = (0, P.c)(13),
    t = n(_),
    { conversationId: r } = h(),
    [i] = g(),
    a = c(O),
    o,
    l;
  if (
    (e[0] === r
      ? ((o = e[1]), (l = e[2]))
      : ((o = () => {
          if (r == null) {
            w.quickChatWindow?.rendererReady(null);
            return;
          }
          T();
          let e = requestAnimationFrame(() => {
            w.quickChatWindow?.rendererReady(r);
          });
          return () => cancelAnimationFrame(e);
        }),
        (l = [r]),
        (e[0] = r),
        (e[1] = o),
        (e[2] = l)),
    (0, F.useEffect)(o, l),
    r == null)
  )
    return null;
  let u;
  if (e[3] !== r || e[4] !== i || e[5] !== a) {
    let t = x(r),
      n = i.get(`contextSourceConversationId`);
    ((u = a ?? {
      contextSourceConversationId: n == null ? null : D(n),
      conversationId: t,
      hasConversation: !f(t),
      initialScrollMode: `follow`,
      projectId: null,
      projectName: null,
      selectedTextSourceConversationId: null,
      title: null,
    }),
      (e[3] = r),
      (e[4] = i),
      (e[5] = a),
      (e[6] = u));
  } else u = e[6];
  let d = u,
    p;
  e[7] !== t || e[8] !== d.hasConversation
    ? ((p = (e) => {
        (m(t, {
          action: k.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_CLOSED,
          hasConversation: d.hasConversation,
          source: e,
          surface: s.CODEX_QUICK_CHAT_SURFACE_WINDOW,
        }),
          window.close());
      }),
      (e[7] = t),
      (e[8] = d.hasConversation),
      (e[9] = p))
    : (p = e[9]);
  let v;
  return (
    e[10] !== d || e[11] !== p
      ? ((v = (0, I.jsx)(S, {
          value: `quick-chat`,
          children: (0, I.jsx)(j, {
            canPopOut: !1,
            session: d,
            variant: `window`,
            onAddToComposer: N,
            onClose: p,
          }),
        })),
        (e[10] = d),
        (e[11] = p),
        (e[12] = v))
      : (v = e[12]),
    v
  );
}
async function N(e) {
  let t = w.quickChatWindow;
  if (t == null) throw Error(`Quick Chat window service is unavailable`);
  await t.addToComposer(e);
}
var P, F, I;
e(() => {
  ((P = C()), p(), a(), (F = t(i(), 1)), u(), v(), b(), E(), r(), d(), o(), l(), A(), (I = y()));
})();
export { M as QuickChatWindowPage };
//# sourceMappingURL=quick-chat-window-page-374d1c3ded75.js.map
