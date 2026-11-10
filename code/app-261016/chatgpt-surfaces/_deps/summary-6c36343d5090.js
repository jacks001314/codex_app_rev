import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, Y3 as i, Z3 as a, tkt as o } from "./app-shared-2feb3d4c6fcc.js";
function s(e) {
  let t = (0, u.c)(7),
    { result: n, title: r, onView: a } = e,
    s = l,
    f = c,
    p;
  t[0] === a
    ? (p = t[1])
    : ((p = (e) =>
        (0, d.jsx)(`span`, {
          className: `shrink-0 font-semibold text-secondary`,
          children: (0, d.jsx)(i, { color: `ghostMuted`, size: `inline`, onClick: a, children: e }),
        })),
      (t[0] = a),
      (t[1] = p));
  let m = p,
    h;
  return (
    t[2] !== a || t[3] !== n || t[4] !== r || t[5] !== m
      ? ((h = (0, d.jsx)(`div`, {
          className: `my-3 flex w-fit max-w-full items-center gap-1.5 text-sm text-tertiary`,
          children:
            n == null
              ? (0, d.jsx)(o, {
                  id: `chatgptConversations.libraryWritingBlock.createdWithHistorySummaryRow`,
                  defaultMessage: `<label>Created {hasTitle, select, yes {{title}} other {Document}}</label>{hasView, select, yes { <separator>•</separator> <view>View</view>} other {}}`,
                  description: `Summary where a Library writing block was originally created. title is the document's name when available, otherwise Document is shown. The optional View link opens the original saved version in history`,
                  values: {
                    hasTitle: r == null ? `no` : `yes`,
                    title: r ?? ``,
                    hasView: a == null ? `no` : `yes`,
                    label: s,
                    separator: f,
                    view: m,
                  },
                })
              : (0, d.jsx)(o, {
                  id: `chatgptConversations.writingBlock.patch.summaryWithOptionalHistoryRow`,
                  defaultMessage: `<label>{hasSummary, select, yes {{summary}} other {Edited}}</label>{hasView, select, yes { <separator>•</separator> <view>View</view>} other {}}`,
                  description: `Compact status for a successful Library document edit. summary is the tool's description, or Edited is shown when there is no summary. When hasView is yes, the view link opens this edit's saved version in document history. Keep the separator and View link together`,
                  values: {
                    hasSummary: n.summary == null ? `no` : `yes`,
                    summary: n.summary ?? ``,
                    hasView: a == null ? `no` : `yes`,
                    label: s,
                    separator: f,
                    view: m,
                  },
                }),
        })),
        (t[2] = a),
        (t[3] = n),
        (t[4] = r),
        (t[5] = m),
        (t[6] = h))
      : (h = t[6]),
    h
  );
}
function c(e) {
  return (0, d.jsx)(`span`, { className: `select-none`, "aria-hidden": !0, children: e });
}
function l(e) {
  return (0, d.jsx)(`span`, { className: `min-w-0 break-words`, children: e });
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = n()), r(), a(), (d = t()));
  }))();
}
export { f as n, s as t };
//# sourceMappingURL=summary-6c36343d5090.js.map
