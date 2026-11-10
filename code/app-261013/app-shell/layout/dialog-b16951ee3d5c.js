import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  _O as n,
  jDt as r,
  mO as i,
  vO as a,
  vzt as o,
  xMt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
import { n as l, t as u } from "./preview-58dcd2a67a7c.js";
function d(e) {
  let r = (0, p.c)(25),
    {
      libraryFileId: a,
      initialCardId: o,
      initialCard: s,
      analyticsContext: c,
      onSaved: l,
      onCardsChanged: d,
      onRecoverDraft: g,
      onClose: _,
    } = e,
    v;
  r[0] === o
    ? (v = r[1])
    : ((v = () =>
        o != null && typeof document < `u`
          ? document.querySelector(
              `[data-app-shell-main-surface]:not([data-app-shell-active-page="false"] *)`,
            )
          : null),
      (r[0] = o),
      (r[1] = v));
  let [y] = (0, m.useState)(v),
    b = `flex h-full w-full flex-col text-default ${o == null ? `bg-surface` : `bg-transparent`}`,
    x;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { onInteractOutside: f }), (r[2] = x))
    : (x = r[2]);
  let S;
  r[3] === _
    ? (S = r[4])
    : ((S = (e) => {
        e || _();
      }),
      (r[3] = _),
      (r[4] = S));
  let C;
  r[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, h.jsx)(n, {
        className: `sr-only`,
        children: (0, h.jsx)(t, {
          id: `libraryNext.flashcards.dialogTitle`,
          defaultMessage: `Flashcards`,
          description: `Accessible dialog title for viewing and editing a saved flashcard deck opened from a conversation.`,
        }),
      })),
      (r[5] = C))
    : (C = r[5]);
  let w;
  r[6] !== o || r[7] !== a ? ((w = JSON.stringify([a, o])), (r[6] = o), (r[7] = a), (r[8] = w)) : (w = r[8]);
  let T = o == null ? void 0 : _,
    E;
  r[9] !== c ||
  r[10] !== s ||
  r[11] !== o ||
  r[12] !== a ||
  r[13] !== d ||
  r[14] !== _ ||
  r[15] !== g ||
  r[16] !== l ||
  r[17] !== w ||
  r[18] !== T
    ? ((E = (0, h.jsx)(
        u,
        {
          libraryFileId: a,
          initialCardId: o,
          initialCard: s,
          analyticsContext: c,
          onSaved: l,
          onCardsChanged: d,
          onRecoverDraft: g,
          onEditorClose: T,
          onViewerClose: _,
        },
        w,
      )),
      (r[9] = c),
      (r[10] = s),
      (r[11] = o),
      (r[12] = a),
      (r[13] = d),
      (r[14] = _),
      (r[15] = g),
      (r[16] = l),
      (r[17] = w),
      (r[18] = T),
      (r[19] = E))
    : (E = r[19]);
  let D;
  return (
    r[20] !== y || r[21] !== b || r[22] !== S || r[23] !== E
      ? ((D = (0, h.jsxs)(i, {
          open: !0,
          modal: !1,
          unstyledContent: !0,
          viewportSized: !0,
          portalContainer: y,
          contentClassName: b,
          showDialogClose: !1,
          contentProps: x,
          onOpenChange: S,
          children: [C, E],
        })),
        (r[20] = y),
        (r[21] = b),
        (r[22] = S),
        (r[23] = E),
        (r[24] = D))
      : (D = r[24]),
    D
  );
}
function f(e) {
  return e.preventDefault();
}
var p, m, h;
function g() {
  return (g = e(() => {
    ((p = o()), (m = c()), r(), a(), l(), (h = s()));
  }))();
}
g();
export { d as FlashcardsDialog };
//# sourceMappingURL=dialog-b16951ee3d5c.js.map
