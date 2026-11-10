import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cat as t, fA as n, lA as r, mA as i, wat as a, yA as o } from "./app-shared-bbfeca5e5737.js";
import {
  A3t as s,
  BZn as c,
  G6t as l,
  M3t as u,
  N3t as d,
  P3t as f,
  QDr as p,
  XDr as m,
  bZn as h,
  j3t as g,
  yjn as _,
} from "./app-initial-5851df3f6cb1.js";
function v(e, t) {
  return {
    onPreviewOpened: () => y(e, { ...t, action: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW }),
    onDownload: () => y(e, { ...t, action: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD }),
    onClose: () => y(e, { ...t, action: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CLOSE_PREVIEW }),
    onInteractionAttempt: (n) => {
      y(e, { ...t, action: x[n] });
    },
  };
}
function y(e, { action: t, importKind: i, source: l, isEditing: m, originatingTurn: _ }) {
  if (l == null || m) return;
  let { conversationId: v, target: y } = l;
  if (
    e.value.routeKind !== `chatgpt-thread` ||
    e.value.conversationId !== v ||
    l.sharedConversationId != null ||
    l.artifactInteractionExcluded === !0 ||
    e.get(c, v) != null
  )
    return;
  let x;
  if (i === `pptx`) x = f.CHATGPT_WEB_ARTIFACT_KIND_PRESENTATION;
  else if (i === `xlsx` || i === `csv` || i === `tsv`) x = f.CHATGPT_WEB_ARTIFACT_KIND_SPREADSHEET;
  else return;
  let S = e.get(h, v),
    C = S === `tpp` || S === `flora`;
  if (!(C && t === s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW))
    try {
      let i = `fileId` in y ? y.fileId : void 0,
        s = `libraryFileId` in y ? y.libraryFileId : void 0,
        c = r(y.type === `mounted-library` ? y.mountedLibraryFileId : void 0, s, i),
        l = c != null && (n(c) != null || o(c)) ? c : void 0;
      p(e, g, {
        action: t,
        artifactKind: x,
        conversationId: v,
        fileId: b(i),
        libraryFileId: b(s),
        mountedLibraryFileId: l,
        messageId: _?.messageId ?? (y.type === `sandbox` ? y.messageId : void 0),
        inputMessageId: _?.inputMessageId ?? void 0,
        turnExchangeId: _?.turnId,
        interactionMode: u.CHATGPT_WEB_ARTIFACT_INTERACTION_MODE_VIEW_ONLY,
        isTemporaryChat: a(e.value.search ?? ``),
        productExperience: C
          ? d.CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_WORK
          : d.CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_CHAT,
      });
    } catch {}
}
function b(e) {
  return e?.replace(/^(?:file-library:)+/u, ``).startsWith(`external-`) ? void 0 : e || void 0;
}
var x;
function S() {
  return (S = e(() => {
    (i(),
      l(),
      m(),
      _(),
      t(),
      (x = {
        "autofit-column": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_AUTOFIT_COLUMN,
        "autofit-row": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_AUTOFIT_ROW,
        "click-formula-bar": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CLICK_FORMULA_BAR,
        copy: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_COPY,
        cut: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CUT,
        "delete-selection": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DELETE_SELECTION,
        "double-click-content": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOUBLE_CLICK_CONTENT,
        "fit-to-viewport": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_FIT_TO_VIEWPORT,
        paste: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_PASTE,
        "paste-without-formatting": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_PASTE_WITHOUT_FORMATTING,
        redo: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_REDO,
        "resize-column": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_RESIZE_COLUMN,
        "resize-row": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_RESIZE_ROW,
        save: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SAVE,
        search: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SEARCH,
        "select-all": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SELECT_ALL,
        undo: s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_UNDO,
        "zoom-in": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_ZOOM_IN,
        "zoom-out": s.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_ZOOM_OUT,
      }));
  }))();
}
export { S as n, y as r, v as t };
//# sourceMappingURL=chatgpt-artifact-interaction-analytics-a06882245677.js.map
