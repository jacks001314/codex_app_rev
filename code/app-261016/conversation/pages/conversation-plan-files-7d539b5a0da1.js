import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as n, Qst as r, ZSt as i, iFt as a, yCt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  DNr as s,
  H1n as c,
  SNr as l,
  VPn as u,
  lBr as d,
  uBr as f,
  vNr as p,
  yNr as m,
} from "./app-initial-ad16eaadf81f.js";
import { n as h, t as g } from "./plan-file-4ed41883a51a.js";
function _(e, t) {
  return e != null && t.includes(e.replace(/^file-inline-/, ``).split(`~`)[0]);
}
var v, y, b, x;
function S() {
  return (S = e(() => {
    ((v = t(a(), 1)),
      i(),
      s(),
      n(),
      d(),
      u(),
      h(),
      (y = o(
        r,
        (e, { get: t }) => {
          if (!t(f, `3901104270`)) return [];
          let n = t(c, e)?.filter(({ source: e }) => e !== `list`) ?? [];
          return n.length === 0
            ? []
            : (t(l, t(p)),
              n.flatMap(({ automationId: e, messageId: n }) => {
                let r = t(m, e).data?.automation;
                if (r == null) return [];
                let i = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(r.plan_file_id ?? ``)?.[1];
                return i == null
                  ? []
                  : [
                      {
                        automationId: e,
                        planType: r.plan_type ?? null,
                        messageId: n,
                        libraryFileId: i,
                        query: t(g, i),
                      },
                    ];
              }));
        },
        { isEqual: v.default },
      )),
      (b = o(
        r,
        (e, { get: t }) => {
          let n = new Map();
          for (let { automationId: r, planType: i, messageId: a, libraryFileId: o, query: s } of t(y, e)) {
            if (n.has(o)) continue;
            let e = s.data;
            e?.mime_type === `text/markdown` &&
              e.access_kind === `owned` &&
              n.set(o, {
                automationId: r,
                planType: i,
                downloadTarget: { type: `file-id`, fileId: `file-inline-${e.id}`, libraryFileId: e.id },
                fileId: `file-inline-${e.id}`,
                key: `automation-plan:${e.id}`,
                kind: `file`,
                libraryArtifactType: e.library_artifact_type,
                libraryFileId: e.id,
                messageId: a,
                mimeType: e.mime_type,
                name: e.name,
                sandboxPath: null,
                sizeBytes: null,
              });
          }
          return [...n.values()];
        },
        { isEqual: v.default },
      )),
      (x = o(
        r,
        (e, { get: t }) => {
          let n = t(b, e).filter((e) => e.planType !== `language_learning`),
            r = t(c, e)?.filter(
              (e) => e.source !== `list` && n.some((t) => t.automationId === e.automationId),
            ),
            i = r?.at(-1)?.messageId;
          if (i == null) return null;
          let a = new Set(r?.filter((e) => e.messageId === i).map((e) => e.automationId));
          return a.size === 1 ? (n.find((e) => a.has(e.automationId)) ?? null) : null;
        },
        { isEqual: v.default },
      )));
  }))();
}
export { _ as a, S as i, y as n, x as r, b as t };
//# sourceMappingURL=conversation-plan-files-7d539b5a0da1.js.map
