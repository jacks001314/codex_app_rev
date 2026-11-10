import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  Ien as n,
  Ms as r,
  Ps as i,
  Spn as a,
  Ven as o,
  bpn as s,
} from "./app-initial-f094ef01c64d.js";
function c({ intl: e, memoryFilePath: t, suggestion: i }) {
  return r({
    defaultPrompt:
      i.type === `skill`
        ? e.formatMessage(
            {
              id: `settings.chronicle.history.createNamedSuggestedSkillPrompt`,
              defaultMessage: `Create a new "{name}" skill based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"`,
              description: `Prefilled conversation request for creating a named reusable skill from a Computer history suggestion`,
            },
            {
              name: i.name,
              request: i.description,
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
              name: i.name,
              request: i.description,
              memoryFilePath: t,
              paragraphBreak: `

`,
            },
          ),
    pluginDisplayName: e.formatMessage(l),
    pluginId: `${n}@${o}`,
  });
}
var l,
  u = e(() => {
    (t(),
      a(),
      i(),
      (l = s({
        id: `settings.chronicle.history.pluginDisplayName`,
        defaultMessage: `Computer History`,
        description: `Display name of the Computer History plugin in a prefilled conversation mention`,
      })));
  });
export { c as n, u as r, l as t };
//# sourceMappingURL=computer-history-suggestion-prompt-2b08a74743d6.js.map
