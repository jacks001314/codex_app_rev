require("./rolldown-runtime-CPUxUITh.js");
const e = require("./conversation-turn-mutations-wKT0NopF.js");
function t(t, n, r, i) {
  let a = e.n(t, (e) => e.turnId === n);
  a != null && (a.aeonAssistantMessageStartedAtMsById = { ...a.aeonAssistantMessageStartedAtMsById, [r]: i });
}
exports.recordAeonAssistantMessageDelivery = t;
//# sourceMappingURL=record-aeon-assistant-message-delivery-Bs4EHN9Y.js.map
