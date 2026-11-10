import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { Cpn as t, Spn as n, hmn as r, kmn as i } from "./app-initial-f094ef01c64d.js";
function a(e) {
  let n = (0, o.c)(4),
    { status: r } = e;
  switch (r) {
    case `closed`: {
      let e;
      return (
        n[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(t, {
              id: `pullRequestSidePanel.state.closed`,
              defaultMessage: `Closed`,
              description: `Closed pull request state shown in the side panel header`,
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    case `draft`: {
      let e;
      return (
        n[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(t, {
              id: `pullRequestSidePanel.state.draft`,
              defaultMessage: `Draft`,
              description: `Draft pull request state shown in the side panel header`,
            })),
            (n[1] = e))
          : (e = n[1]),
        e
      );
    }
    case `merged`: {
      let e;
      return (
        n[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(t, {
              id: `pullRequestSidePanel.state.merged`,
              defaultMessage: `Merged`,
              description: `Merged pull request state shown in the side panel header`,
            })),
            (n[2] = e))
          : (e = n[2]),
        e
      );
    }
    case `open`: {
      let e;
      return (
        n[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(t, {
              id: `pullRequestSidePanel.state.open`,
              defaultMessage: `Ready for review`,
              description: `Ready for review pull request state shown in the side panel`,
            })),
            (n[3] = e))
          : (e = n[3]),
        e
      );
    }
  }
}
var o,
  s,
  c = e(() => {
    ((o = i()), n(), (s = r()));
  });
export { c as n, a as t };
//# sourceMappingURL=pull-request-status-label-5a6c4f7bce5d.js.map
