import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CM as t, TM as n, _I as r, mI as i } from "./app-shared-bbfeca5e5737.js";
import {
  $6t as a,
  DAn as o,
  FAn as s,
  GMr as c,
  LMn as l,
  LMr as u,
  Q6t as d,
  XMr as f,
  Ymr as p,
  ZQn as m,
  e$n as h,
  ehr as g,
  fJt as _,
  hJt as v,
  tNr as y,
  vEr as b,
  xEr as x,
  zOr as S,
} from "./app-initial-5851df3f6cb1.js";
import { r as C, t as w } from "./handoff-error-1046b576cd5d.js";
async function T(e, { accountId: t, file: r, isTemporaryChat: a }, s, h) {
  let g = e.get(f),
    _ = (n = e) => g != null && n.get(f) === g && n.get(c) === t;
  if (!_()) throw new w(`accountChanged`);
  if (a) throw new w(`temporary`);
  h.signal.throwIfAborted();
  let y = e.watch((e) => {
    _(e) || h.abort();
  });
  try {
    let [a, c, f, g] = await Promise.all([
      e.queryClient.fetchQuery({ ...e.query.snapshot(u, t).getOptions(), staleTime: 0 }),
      p.safeGet(`/websites/access`, { signal: h.signal }),
      e.queryClient.fetchQuery({ ...e.query.snapshot(o).getOptions(), staleTime: 0 }),
      e.queryClient.fetchQuery({ ...e.query.snapshot(l).getOptions(), staleTime: 0 }),
    ]);
    h.signal.throwIfAborted();
    let y = Object.values(a.accounts).find((e) => e.account.account_id === t);
    if (y == null || y.account.structure !== `personal`) throw new w(`accountChanged`);
    if (
      (y.account.plan_type !== `plus` &&
        y.account.plan_type !== `pro` &&
        y.account.plan_type !== `prolite` &&
        y.account.plan_type !== `promax`) ||
      !c.enabled ||
      !x(e) ||
      g.options.length === 0
    )
      throw new w(`unavailable`);
    let b = d({ hints: f, intl: s, isTemporaryChat: !1, personalized: void 0, surface: `tpp` }).find(
      (e) => e.kind === `site`,
    );
    if (b == null || b.systemHint == null || b.systemHint.system_hint === `sketch`)
      throw new w(`pluginUnavailable`);
    let S = m(),
      C = await v(e, {
        conversationId: S,
        conversationOrigin: `tpp`,
        model: g.defaultModelSlug,
        systemHints: [b.systemHint.system_hint],
        attachments: [
          {
            id: `file-inline-${r.id}`,
            libraryFileId: r.id,
            libraryArtifactType: `site_preview`,
            source: `library`,
            name: r.file_name,
            mimeType: `text/html`,
          },
        ],
        prompt: s.formatMessage(
          {
            id: `sitesPreview.publish.prompt.withPluginMention`,
            defaultMessage: `{sites} turn the attached HTML file into a working website, preserving its layout, styling, content, and interactions as closely as possible. Make only the changes necessary for it to function and be hosted.`,
            description: `First user message in a Work task started by publishing a saved website preview. The HTML is attached. {sites} is a formatted mention of the selected Sites plugin; address the request to that plugin.`,
          },
          {
            sites: n(
              b.systemHint.name,
              i(b.systemHint.system_hint.slice(b.systemHint.system_hint.indexOf(`:`) + 1)),
            ),
          },
        ),
        enableMessageFollowups: !0,
        requireDispatchAcceptance: !0,
        startupSignal: h.signal,
        isSubmissionCurrent: _,
      });
    if ((h.signal.throwIfAborted(), C == null)) throw new w(`failed`);
    return C.conversationId;
  } finally {
    y();
  }
}
function E() {
  return (E = e(() => {
    (y(), S(), a(), s(), g(), h(), _(), b(), r(), t(), C());
  }))();
}
E();
export { T as publishSitesPreview };
//# sourceMappingURL=publish-2d156f259c96.js.map
