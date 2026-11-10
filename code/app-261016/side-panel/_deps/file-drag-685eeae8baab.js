import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ast as t, ist as n } from "./app-shared-2feb3d4c6fcc.js";
function r({ enabled: e, file: t, onClick: r }) {
  let i = e && n?.fileDrags != null && window.electronBridge?.startFileDrag != null,
    a = () => {
      i && n.fileDrags?.prepareDrag(t).catch(() => {});
    },
    o = (e) => {
      e.currentTarget.dataset.fileDragStarted = `false`;
    };
  return {
    draggable: i,
    onClick: (e) => {
      let t = e.currentTarget.dataset.fileDragStarted === `true`;
      ((e.currentTarget.dataset.fileDragStarted = `false`), t || r(e));
    },
    onDragStart: (e) => {
      if (!i) return;
      e.preventDefault();
      let n = window.electronBridge?.startFileDrag?.(t) === !0;
      e.currentTarget.dataset.fileDragStarted = String(n);
    },
    onKeyDown: o,
    onPointerDown: (e) => {
      (o(e), a());
    },
    onPointerEnter: a,
  };
}
function i() {
  return (i = e(() => {
    t();
  }))();
}
export { i as n, r as t };
//# sourceMappingURL=file-drag-685eeae8baab.js.map
