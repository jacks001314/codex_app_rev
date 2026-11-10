import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, PA as n, WA as r, jDt as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
function s(e) {
  let n = (0, c.c)(10),
    { category: i } = e;
  switch (i) {
    case `plan`: {
      let e;
      return (
        n[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, l.jsx)(t, {
              id: `chatgptConversations.summaryPanel.outputs.type.plan`,
              defaultMessage: `Plan`,
              description: `Compact trailing type label on the saved plan file row under Goal in the Chat and Work conversation summary. The row opens the plan document.`,
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    case `document`: {
      let e;
      return (
        n[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, l.jsx)(t, {
              id: `chatgptConversations.summaryPanel.outputs.type.document`,
              defaultMessage: `Doc`,
              description: `Compact trailing type label for a document in the Outputs list, including Google Docs, Word documents, and text files`,
            })),
            (n[1] = e))
          : (e = n[1]),
        e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        n[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, l.jsx)(t, {
              id: `chatgptConversations.summaryPanel.outputs.type.spreadsheet`,
              defaultMessage: `Sheet`,
              description: `Compact trailing type label for a spreadsheet in the Outputs list, including Google Sheets, Excel, and CSV files`,
            })),
            (n[2] = e))
          : (e = n[2]),
        e
      );
    }
    case `presentation`: {
      let e;
      return (
        n[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, l.jsx)(t, {
              id: `chatgptConversations.summaryPanel.outputs.type.presentation`,
              defaultMessage: `Slides`,
              description: `Compact trailing type label for a slide presentation in the Outputs list, including Google Slides, PowerPoint, and Keynote files`,
            })),
            (n[3] = e))
          : (e = n[3]),
        e
      );
    }
    case `site`: {
      let e;
      return (
        n[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, l.jsx)(t, {
              id: `chatgptConversations.summaryPanel.outputs.type.site`,
              defaultMessage: `Site`,
              description: `Compact trailing type label for a hosted website in the Outputs list`,
            })),
            (n[4] = e))
          : (e = n[4]),
        e
      );
    }
    case `page`: {
      let e;
      return (
        n[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, l.jsx)(t, {
              id: `chatgptConversations.summaryPanel.outputs.type.page`,
              defaultMessage: `Page`,
              description: `Compact trailing type label for a Page in the Outputs list`,
            })),
            (n[5] = e))
          : (e = n[5]),
        e
      );
    }
    case `audio`:
    case `code`:
    case `file`:
    case `html`:
    case `image`:
    case `pdf`: {
      let e;
      n[6] === i ? (e = n[7]) : ((e = r(i)), (n[6] = i), (n[7] = e));
      let a;
      return (n[8] === e ? (a = n[9]) : ((a = (0, l.jsx)(t, { ...e })), (n[8] = e), (n[9] = a)), a);
    }
  }
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = a()), n(), i(), (l = o()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=output-type-label-51b2b442bb76.js.map
