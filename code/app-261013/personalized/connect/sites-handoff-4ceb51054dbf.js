import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $6t as t,
  CVn as n,
  DAn as r,
  EVn as i,
  FAn as a,
  GMr as o,
  LHn as s,
  LMn as c,
  LMr as l,
  NDr as u,
  PDr as d,
  Q6t as f,
  XMr as p,
  Ymr as m,
  ehr as h,
  fJt as g,
  fMr as _,
  hJt as v,
  tNr as y,
  xMr as b,
  zHn as x,
  zOr as S,
} from "./app-initial-5851df3f6cb1.js";
import { r as C, t as w } from "./sites-target-3b79f1a5b848.js";
async function T(e, { target: t, intl: n, signal: a }) {
  let s = e.get(p),
    u = () => e.get(o) === t.accountId && e.get(p) === s,
    h = () => {
      if ((a.throwIfAborted(), !u())) throw new w(`accountChanged`);
    };
  if ((h(), t.temporaryChat)) throw new w(`temporary`);
  let g = await e.queryClient.fetchQuery({ ...e.query.getOptions(l, t.accountId), staleTime: 0 });
  h();
  let _ = Object.values(g.accounts).find(({ account: e }) => e.account_id === t.accountId)?.account;
  if (_?.structure !== `personal`) throw new w(`accountChanged`);
  if ((_.plan_type !== `plus` && !x(_.plan_type)) || e.get(b).status !== `allowed`)
    throw new w(`unavailable`);
  let y = await m.safeGet(`/websites/access`, { signal: a });
  if ((h(), !y.enabled)) throw new w(`unavailable`);
  let [S, C] = await Promise.all([
    e.queryClient.fetchQuery({ ...e.query.getOptions(r), staleTime: 0 }),
    e.queryClient.fetchQuery({ ...e.query.getOptions(c), staleTime: 0 }),
    d(e),
  ]).catch((e) => {
    throw (h(), e);
  });
  if ((h(), C.options.length === 0 || e.get(b).status !== `allowed`)) throw new w(`unavailable`);
  let T = f({ hints: S, intl: n, isTemporaryChat: !1, personalized: void 0, surface: `tpp` }).find(
    ({ kind: e }) => e === `site`,
  )?.systemHint;
  if (T == null || T.system_hint === `sketch`) throw new w(`pluginUnavailable`);
  let E = e.get(i),
    D = await v(e, {
      conversationMode: `primary_assistant`,
      conversationOrigin: `tpp`,
      isTemporaryChat: !1,
      model: E.slug,
      thinkingEffort: E.thinkingEffort,
      prompt: n.formatMessage({
        id: `sitesPreview.handoff.prompt`,
        defaultMessage: `@Sites turn the attached HTML file into a working website, preserving its layout, styling, content, and interactions as closely as possible. Make only the changes necessary for it to function and be hosted.`,
        description: `First message sent after confirming the Sites checkout-return dialog. The saved HTML file is attached to a new Work task. Keep @Sites literal as the plugin name.`,
      }),
      systemHints: [T.system_hint],
      attachments: [
        {
          id: `file-inline-${t.libraryFileId}`,
          libraryFileId: t.libraryFileId,
          libraryArtifactType: `site_preview`,
          mimeType: `text/html`,
          name: t.fileName,
          source: `library`,
        },
      ],
      startupSignal: a,
      requireDispatchAcceptance: !0,
      isSubmissionCurrent: () => !a.aborted && u(),
    });
  if ((h(), D == null)) throw new w(`failed`);
  return D.serverConversationId ?? D.conversationId;
}
function E() {
  return (E = e(() => {
    (s(), y(), _(), S(), t(), a(), h(), u(), g(), n(), C());
  }))();
}
E();
export { T as submitSitesHandoff };
//# sourceMappingURL=sites-handoff-4ceb51054dbf.js.map
