import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ASt as t, jSt as n } from "./app-shared-bbfeca5e5737.js";
import { $Fn as r, XDr as i, eIn as a, eOr as o } from "./app-initial-5851df3f6cb1.js";
async function s(e, n, r) {
  c(e, l[n].started);
  let i;
  try {
    i = await r();
  } catch (r) {
    throw (!(r instanceof t) && !(r instanceof Error && r.name === `AbortError`) && c(e, l[n].failed), r);
  }
  return (c(e, l[n].succeeded), i);
}
async function c(e, t) {
  try {
    await e.get(o).trackCounter(t);
  } catch {}
}
var l;
function u() {
  return (u = e(() => {
    (a(),
      n(),
      i(),
      (l = {
        create: {
          started: r.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_CREATE_STARTED,
          succeeded: r.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_CREATE_SUCCEEDED,
          failed: r.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_CREATE_FAILED,
        },
        restore: {
          started: r.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_RESTORE_STARTED,
          succeeded: r.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_RESTORE_SUCCEEDED,
          failed: r.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_RESTORE_FAILED,
        },
      }));
  }))();
}
export { s as n, u as t };
//# sourceMappingURL=version-history-mutation-9ff287d45642.js.map
