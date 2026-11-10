import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, XOt as n, tkt as r } from "./app-shared-2feb3d4c6fcc.js";
import { r as i, t as a } from "./input-selector-group-7e0669f9a984.js";
import { n as o, r as s, t as c } from "./button-2588f03854b1.js";
var l, u;
function d() {
  return (d = e(() => {
    (n(),
      s(),
      (l = t()),
      (u = ({
        ariaLabel: e,
        finishPassDisabled: t,
        isFinishingPass: n = !1,
        isPlaying: i,
        onFinishPass: a,
        onPlayPause: s,
        onShuffle: u,
        onStep: d,
        playDisabled: f,
        stepDisabled: p,
      }) =>
        (0, l.jsxs)(o, {
          columns: 2,
          role: `group`,
          "aria-label": e,
          children: [
            (0, l.jsx)(c, {
              onClick: u,
              children: (0, l.jsx)(r, {
                id: `learningBlock.sortControls.shuffle`,
                defaultMessage: `Shuffle`,
              }),
            }),
            (0, l.jsx)(c, {
              onClick: s,
              disabled: f,
              "aria-pressed": i,
              children: i
                ? (0, l.jsx)(r, { id: `learningBlock.sortControls.pause`, defaultMessage: `Pause` })
                : (0, l.jsx)(r, { id: `learningBlock.sortControls.play`, defaultMessage: `Play` }),
            }),
            (0, l.jsx)(c, {
              onClick: d,
              disabled: p,
              children: (0, l.jsx)(r, { id: `learningBlock.sortControls.step`, defaultMessage: `Step` }),
            }),
            (0, l.jsx)(c, {
              onClick: a,
              disabled: t,
              "aria-busy": n || void 0,
              children: n
                ? (0, l.jsx)(r, {
                    id: `learningBlock.sortControls.finishingPass`,
                    defaultMessage: `Finishing pass…`,
                  })
                : (0, l.jsx)(r, {
                    id: `learningBlock.sortControls.finishPass`,
                    defaultMessage: `Finish pass`,
                  }),
            }),
          ],
        })));
  }))();
}
var f, p;
function m() {
  return (m = e(() => {
    (i(),
      (f = t()),
      (p = ({ ariaValueText: e, label: t, max: n, onChange: r, onInteractionStart: i, value: o }) =>
        (0, f.jsx)(a, {
          inputs: [
            {
              ariaLabel: t,
              ariaValueText: e,
              min: 1,
              max: n + 1,
              step: 1,
              value: o + 1,
              variable: t,
              variableFormat: `text`,
              formatValueForInput: (e) => String(Math.round(e)),
              onChange: (e) => {
                (i?.(), r(e - 1));
              },
            },
          ],
        })));
  }))();
}
export { d as i, m as n, u as r, p as t };
//# sourceMappingURL=sort-step-slider-6d36521ed6ad.js.map
