import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CMt as t, wMt as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  A7 as r,
  CIr as i,
  D7 as a,
  O7 as o,
  Ohn as s,
  SIr as c,
  ngn as l,
  xgn as u,
  ygn as d,
} from "./app-initial-ad16eaadf81f.js";
import { n as f, r as p } from "./page-menu-document-f4e5cf204ea3.js";
function m(e, t) {
  let r = n({
    type: `root`,
    children: [
      {
        type: `heading`,
        depth: 2,
        children: [
          {
            type: `text`,
            value: e.formatMessage(
              {
                id: `codex.space.creation.overview.about`,
                defaultMessage: `About {spaceName}`,
                description: `Section heading in a new Space's starter Page; spaceName is the name entered when creating the Space`,
              },
              { spaceName: t },
            ),
          },
        ],
      },
      {
        type: `paragraph`,
        children: [
          {
            type: `text`,
            value: e.formatMessage({
              id: `codex.space.creation.overview.aboutPrompt`,
              defaultMessage: `Describe what this space is for, or ask ChatGPT to help you get started`,
              description: `Editable introductory text in a new Space's starter Page, above an interactive prompt that starts a chat. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            }),
          },
        ],
      },
      {
        type: `code`,
        lang: u,
        value: e.formatMessage({
          id: `codex.space.creation.overview.helpPrompt`,
          defaultMessage: `Help me write a short introduction for this space. First ask me what it is for, then use my answer to update this page`,
          description: `Editable prompt in a new Space's starter Page. The user explicitly activates it to start a chat about the current Page; ChatGPT should ask a question before writing the introduction. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        }),
      },
    ],
  }).trimEnd();
  return l(r).map((e) => ({ kind: `markdown`, markdown: e }));
}
function h() {
  return (h = e(() => {
    (s(), t());
  }))();
}
async function g(e, t, n, a, s) {
  let c = null;
  return (
    await p(e, t.root_page_id, `write`, async (l) => {
      if ((s.throwIfAborted(), n != null && l.getSymbol() == null && !l.mutateDocument((e) => d(e, n))))
        throw Error(`space_symbol_unavailable`);
      let u = o(l.document);
      if (
        a &&
        u.units.every(
          (e) => e.kind === `agent_instructions` || (e.kind === `markdown` && e.markdown.trim() === ``),
        ) &&
        !l.mutateDocument((n) =>
          r(n, [...u.units.filter((e) => e.kind === `agent_instructions`), ...m(e.get(i), t.name)]),
        )
      )
        throw Error(`space_overview_unavailable`);
      if (
        (await l.flush({ signal: s, timeoutMs: null, scope: `current` }),
        s.throwIfAborted(),
        l.getSnapshot().hasRejectedEdits)
      )
        throw Error(`space_setup_save_failed`);
      c = l.getSymbol();
    }),
    c
  );
}
function _() {
  return (_ = e(() => {
    (s(), c(), a(), f(), h());
  }))();
}
_();
export { g as completeSpaceRootSetup };
//# sourceMappingURL=space-root-setup-e71e232447d6.js.map
