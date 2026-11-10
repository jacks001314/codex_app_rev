import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Zt as t,
  BRr as n,
  BWn as r,
  KIr as i,
  LIr as a,
  UWn as o,
  XGt as s,
  YNn as c,
  eKn as l,
  eQt as u,
  iRr as d,
  lLr as f,
  lNr as p,
  nKn as m,
  nMr as h,
  qGt as g,
  rMr as _,
  rPn as v,
  sIn as y,
  tyr as b,
  wLr as x,
  zRr as S,
} from "./app-initial-ad16eaadf81f.js";
import { r as C, t as w } from "./sites-target-a32fe9731ac3.js";
async function T(e, { target: r, intl: a, signal: l }) {
  let u = e.get(n),
    p = () => e.get(S) === r.accountId && e.get(n) === u,
    h = () => {
      if ((l.throwIfAborted(), !p())) throw new w(`accountChanged`);
    };
  if ((h(), r.temporaryChat)) throw new w(`temporary`);
  let g = await e.queryClient.fetchQuery({ ...e.query.getOptions(f, r.accountId), staleTime: 0 });
  h();
  let v = Object.values(g.accounts).find(({ account: e }) => e.account_id === r.accountId)?.account;
  if (v?.structure !== `personal`) throw new w(`accountChanged`);
  if ((v.plan_type !== `plus` && !m(v.plan_type)) || e.get(i).status !== `allowed`)
    throw new w(`unavailable`);
  let b = await d.safeGet(`/websites/access`, { signal: l });
  if ((h(), !b.enabled)) throw new w(`unavailable`);
  let [x, C] = await Promise.all([
    e.queryClient.fetchQuery({ ...e.query.getOptions(c), staleTime: 0 }),
    e.queryClient.fetchQuery({ ...e.query.getOptions(y), staleTime: 0 }),
    _(e),
  ]).catch((e) => {
    throw (h(), e);
  });
  if ((h(), C.options.length === 0 || e.get(i).status !== `allowed`)) throw new w(`unavailable`);
  let T = t({ hints: x, intl: a, isTemporaryChat: !1, personalized: void 0, surface: `tpp` }).find(
    ({ kind: e }) => e === `site`,
  )?.systemHint;
  if (T == null || T.system_hint === `sketch`) throw new w(`pluginUnavailable`);
  let E = e.get(o),
    D = await s(e, {
      conversationMode: `primary_assistant`,
      conversationOrigin: `tpp`,
      isTemporaryChat: !1,
      model: E.slug,
      thinkingEffort: E.thinkingEffort,
      prompt: a.formatMessage({
        id: `sitesPreview.handoff.prompt`,
        defaultMessage: `@Sites turn the attached HTML file into a working website, preserving its layout, styling, content, and interactions as closely as possible. Make only the changes necessary for it to function and be hosted.`,
        description: `First message sent after confirming the Sites checkout-return dialog. The saved HTML file is attached to a new Work task. Keep @Sites literal as the plugin name.`,
      }),
      systemHints: [T.system_hint],
      attachments: [
        {
          id: `file-inline-${r.libraryFileId}`,
          libraryFileId: r.libraryFileId,
          libraryArtifactType: `site_preview`,
          mimeType: `text/html`,
          name: r.fileName,
          source: `library`,
        },
      ],
      startupSignal: l,
      requireDispatchAcceptance: !0,
      isSubmissionCurrent: () => !l.aborted && p(),
    });
  if ((h(), D == null)) throw new w(`failed`);
  return D.serverConversationId ?? D.conversationId;
}
function E() {
  return (E = e(() => {
    (l(), x(), a(), p(), u(), v(), b(), h(), g(), r(), C());
  }))();
}
E();
export { T as submitSitesHandoff };
//# sourceMappingURL=sites-handoff-ff80f544ce6c.js.map
