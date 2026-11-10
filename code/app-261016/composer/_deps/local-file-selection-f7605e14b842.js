import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ez as t, Oz as n, Vrt as r, qrt as i, sct as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  Csn as o,
  FBr as s,
  IBr as c,
  Smt as l,
  Ssn as u,
  gsn as d,
  hin as f,
  iS as p,
  li as m,
  mrn as h,
  oi as g,
  sS as _,
  tin as v,
  wmt as y,
} from "./app-initial-ad16eaadf81f.js";
async function b(
  e,
  n,
  { hostId: r, intl: a, isSpaceEnabled: c, signal: u, isSelectionCurrent: m, attachmentAttempt: _ },
) {
  if (u?.aborted || m?.() === !1) {
    _?.canceled([n.id]);
    return;
  }
  if (e.get(h).some((e) => e.libraryFile?.libraryFileId === n.id)) {
    _?.excluded([n.id]);
    return;
  }
  if (n.file_size_bytes == null || n.file_size_bytes > 47185920) {
    (_?.excluded([n.id]),
      e
        .get(i)
        .danger(
          a.formatMessage({
            id: `composer.workMode.files.localFileTooLarge`,
            defaultMessage: `This file is too large to attach to a local chat`,
            description: `Error toast shown when a user selects a Library file that cannot be transferred to a local Work chat`,
          }),
          { errorAnalytics: { toastId: `composer.workMode.files.localFileTooLarge` } },
        ));
    return;
  }
  let v = new AbortController(),
    y = u == null ? v.signal : AbortSignal.any([u, v.signal]),
    b = () => !y.aborted && m?.() !== !1,
    x = crypto.randomUUID(),
    S = d(e, { hostId: r, id: x, onCancel: () => v.abort() });
  e.set(o, (e) => [...e, { id: x, label: t(n.file_name) }]);
  try {
    let i = await p(n, y);
    if (!b()) {
      _?.canceled([n.id]);
      return;
    }
    let a = await s(e, r).createFileAttachment({ contents: i, label: t(n.file_name) });
    if (!b()) {
      (g(e, r, a.path), _?.canceled([n.id]));
      return;
    }
    (f(e, `fileAttachments`, (e) => [
      ...e,
      {
        ...a,
        libraryFile: {
          currentVersion: n.current_version_number ?? void 0,
          fileId: n.file_id,
          libraryFileId: n.id,
        },
      },
    ]),
      _?.attached([n.id]),
      S.succeed());
  } catch (t) {
    b()
      ? (_?.failed([n.id], l(t)),
        e
          .get(i)
          .danger(
            c
              ? a.formatMessage({
                  id: `composer.workMode.files.attachError.space`,
                  defaultMessage: `Unable to attach this file`,
                  description: `Error toast shown when downloading or attaching a Space file to a local Work chat fails`,
                })
              : a.formatMessage({
                  id: `composer.workMode.files.attachError`,
                  defaultMessage: `Couldn't attach this Library file`,
                  description: `Error toast shown when downloading or attaching a Library file to a local Work chat fails`,
                }),
            { errorAnalytics: { toastId: `composer.workMode.files.attachError` } },
          ))
      : _?.canceled([n.id]);
  } finally {
    (S.fail(), e.set(o, (e) => e.filter(({ id: e }) => e !== x)));
  }
}
function x() {
  return (x = e(() => {
    (a(), c(), v(), m(), u(), r(), n(), y(), _());
  }))();
}
export { x as n, b as t };
//# sourceMappingURL=local-file-selection-f7605e14b842.js.map
