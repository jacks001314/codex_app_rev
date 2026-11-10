import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Hrn as t, O8t as n, RJt as r, Wrn as i, b8t as a } from "./app-shared-7552fc8d5d82.js";
import { Aht as o, Oht as s } from "./app-initial-3916b423772b.js";
function c({ intl: e, memoryFilePath: t, suggestion: r }) {
  return s({
    defaultPrompt:
      r.type === `skill`
        ? e.formatMessage(
            {
              id: `settings.chronicle.history.createNamedSuggestedSkillPrompt`,
              defaultMessage: `Create a new "{name}" skill based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"`,
              description: `Prefilled conversation request for creating a named reusable skill from a Computer history suggestion`,
            },
            {
              name: r.name,
              request: r.description,
              memoryFilePath: t,
              paragraphBreak: `

`,
            },
          )
        : e.formatMessage(
            {
              id: `settings.chronicle.history.createNamedSuggestedAutomationPrompt`,
              defaultMessage: `Create a new "{name}" automation based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"{paragraphBreak}Use my local timezone and a new chat for scheduled runs.`,
              description: `Prefilled conversation request for creating a named automation from a Computer history suggestion`,
            },
            {
              name: r.name,
              request: r.description,
              memoryFilePath: t,
              paragraphBreak: `

`,
            },
          ),
    pluginDisplayName: e.formatMessage(l),
    pluginId: `${a}@${n}`,
  });
}
var l;
function u() {
  return (u = e(() => {
    (r(),
      i(),
      o(),
      (l = t({
        id: `settings.chronicle.history.pluginDisplayName`,
        defaultMessage: `Computer History`,
        description: `Display name of the Computer History plugin in a prefilled conversation mention`,
      })));
  }))();
}
export { c as n, u as r, l as t };
//# sourceMappingURL=computer-history-suggestion-prompt-a99d63728b31.js.map
