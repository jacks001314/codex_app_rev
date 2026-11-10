import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ejt as t, tjt as n } from "./app-shared-bbfeca5e5737.js";
import {
  Vpn as r,
  a5 as i,
  aIr as a,
  i5 as o,
  imn as s,
  oIr as c,
  omn as l,
  ppn as u,
  s5 as d,
} from "./app-initial-5851df3f6cb1.js";
import { n as f, r as p } from "./page-menu-document-12e4530cb10b.js";
function m(e, t) {
  let i = n({
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
        lang: l,
        value: e.formatMessage({
          id: `codex.space.creation.overview.helpPrompt`,
          defaultMessage: `Help me write a short introduction for this space. First ask me what it is for, then use my answer to update this page`,
          description: `Editable prompt in a new Space's starter Page. The user explicitly activates it to start a chat about the current Page; ChatGPT should ask a question before writing the introduction. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        }),
      },
    ],
  }).trimEnd();
  return r(i).map((e) => ({ kind: `markdown`, markdown: e }));
}
function h() {
  return (h = e(() => {
    (u(), t());
  }))();
}
async function g(e, t, n, r, a) {
  let o = null;
  return (
    await p(e, t.root_page_id, `write`, async (l) => {
      if ((a.throwIfAborted(), n != null && l.getSymbol() == null && !l.mutateDocument((e) => s(e, n))))
        throw Error(`space_symbol_unavailable`);
      let u = i(l.document);
      if (
        r &&
        u.units.every(
          (e) => e.kind === `agent_instructions` || (e.kind === `markdown` && e.markdown.trim() === ``),
        ) &&
        !l.mutateDocument((n) =>
          d(n, [...u.units.filter((e) => e.kind === `agent_instructions`), ...m(e.get(c), t.name)]),
        )
      )
        throw Error(`space_overview_unavailable`);
      if (
        (await l.flush({ signal: a, timeoutMs: null, scope: `current` }),
        a.throwIfAborted(),
        l.getSnapshot().hasRejectedEdits)
      )
        throw Error(`space_setup_save_failed`);
      o = l.getSymbol();
    }),
    o
  );
}
function _() {
  return (_ = e(() => {
    (u(), a(), o(), f(), h());
  }))();
}
_();
export { g as completeSpaceRootSetup };
//# sourceMappingURL=space-root-setup-695df75e5121.js.map
