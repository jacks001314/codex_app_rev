import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as n, HNt as r, Pxt as i, nSt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import {
  JOr as s,
  OPr as c,
  QOr as l,
  YOr as u,
  hZn as d,
  kPr as f,
  rkr as p,
  yjn as m,
} from "./app-initial-5851df3f6cb1.js";
import { n as h, t as g } from "./plan-file-96ce4584d7d0.js";
function _(e, t) {
  return e != null && t.includes(e.replace(/^file-inline-/, ``).split(`~`)[0]);
}
var v, y, b, x;
function S() {
  return (S = e(() => {
    ((v = t(r(), 1)),
      i(),
      p(),
      o(),
      c(),
      m(),
      h(),
      (y = a(
        n,
        (e, { get: t }) => {
          if (!t(f, `3901104270`)) return [];
          let n = t(d, e)?.filter(({ source: e }) => e !== `list`) ?? [];
          return n.length === 0
            ? []
            : (t(l, t(s)),
              n.flatMap(({ automationId: e, messageId: n }) => {
                let r = t(u, e).data?.automation;
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
      (b = a(
        n,
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
      (x = a(
        n,
        (e, { get: t }) => {
          let n = t(b, e).filter((e) => e.planType !== `language_learning`),
            r = t(d, e)?.filter(
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
//# sourceMappingURL=conversation-plan-files-fab485da32fe.js.map
