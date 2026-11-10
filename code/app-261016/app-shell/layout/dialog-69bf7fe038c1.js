import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  JO as n,
  LNt as r,
  PBt as i,
  WO as a,
  XOt as o,
  qO as s,
  tkt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as l, t as u } from "./preview-cfbe5fcbf83b.js";
function d(e) {
  let t = (0, p.c)(25),
    {
      libraryFileId: n,
      initialCardId: r,
      initialCard: i,
      analyticsContext: o,
      onSaved: l,
      onCardsChanged: d,
      onRecoverDraft: g,
      onClose: _,
    } = e,
    v;
  t[0] === r
    ? (v = t[1])
    : ((v = () =>
        r != null && typeof document < `u`
          ? document.querySelector(
              `[data-app-shell-main-surface]:not([data-app-shell-active-page="false"] *)`,
            )
          : null),
      (t[0] = r),
      (t[1] = v));
  let [y] = (0, m.useState)(v),
    b = `flex h-full w-full flex-col text-default ${r == null ? `bg-surface` : `bg-transparent`}`,
    x;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { onInteractOutside: f }), (t[2] = x))
    : (x = t[2]);
  let S;
  t[3] === _
    ? (S = t[4])
    : ((S = (e) => {
        e || _();
      }),
      (t[3] = _),
      (t[4] = S));
  let C;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, h.jsx)(s, {
        className: `sr-only`,
        children: (0, h.jsx)(c, {
          id: `libraryNext.flashcards.dialogTitle`,
          defaultMessage: `Flashcards`,
          description: `Accessible dialog title for viewing and editing a saved flashcard deck opened from a conversation.`,
        }),
      })),
      (t[5] = C))
    : (C = t[5]);
  let w;
  t[6] !== r || t[7] !== n ? ((w = JSON.stringify([n, r])), (t[6] = r), (t[7] = n), (t[8] = w)) : (w = t[8]);
  let T = r == null ? void 0 : _,
    E;
  t[9] !== o ||
  t[10] !== i ||
  t[11] !== r ||
  t[12] !== n ||
  t[13] !== d ||
  t[14] !== _ ||
  t[15] !== g ||
  t[16] !== l ||
  t[17] !== w ||
  t[18] !== T
    ? ((E = (0, h.jsx)(
        u,
        {
          libraryFileId: n,
          initialCardId: r,
          initialCard: i,
          analyticsContext: o,
          onSaved: l,
          onCardsChanged: d,
          onRecoverDraft: g,
          onEditorClose: T,
          onViewerClose: _,
        },
        w,
      )),
      (t[9] = o),
      (t[10] = i),
      (t[11] = r),
      (t[12] = n),
      (t[13] = d),
      (t[14] = _),
      (t[15] = g),
      (t[16] = l),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E))
    : (E = t[19]);
  let D;
  return (
    t[20] !== y || t[21] !== b || t[22] !== S || t[23] !== E
      ? ((D = (0, h.jsxs)(a, {
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
        (t[20] = y),
        (t[21] = b),
        (t[22] = S),
        (t[23] = E),
        (t[24] = D))
      : (D = t[24]),
    D
  );
}
function f(e) {
  return e.preventDefault();
}
var p, m, h;
function g() {
  return (g = e(() => {
    ((p = i()), (m = t()), o(), n(), l(), (h = r()));
  }))();
}
g();
export { d as FlashcardsDialog };
//# sourceMappingURL=dialog-69bf7fe038c1.js.map
