import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { XCt as t, YCt as n } from "./app-shared-2feb3d4c6fcc.js";
import { CMr as r, Dzn as i, Ozn as a, yMr as o } from "./app-initial-ad16eaadf81f.js";
async function s(e, t, r) {
  c(e, l[t].started);
  let i;
  try {
    i = await r();
  } catch (r) {
    throw (!(r instanceof n) && !(r instanceof Error && r.name === `AbortError`) && c(e, l[t].failed), r);
  }
  return (c(e, l[t].succeeded), i);
}
async function c(e, t) {
  try {
    await e.get(r).trackCounter(t);
  } catch {}
}
var l;
function u() {
  return (u = e(() => {
    (a(),
      t(),
      o(),
      (l = {
        create: {
          started: i.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_CREATE_STARTED,
          succeeded: i.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_CREATE_SUCCEEDED,
          failed: i.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_CREATE_FAILED,
        },
        restore: {
          started: i.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_RESTORE_STARTED,
          succeeded: i.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_RESTORE_SUCCEEDED,
          failed: i.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_RESTORE_FAILED,
        },
      }));
  }))();
}
export { s as n, u as t };
//# sourceMappingURL=version-history-mutation-c3d1e9519c5d.js.map
