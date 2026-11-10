import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  B6t as r,
  Cpn as i,
  DXt as a,
  Ms as o,
  OXt as s,
  Ps as c,
  Qpt as l,
  Spn as u,
  bmn as d,
  cHt as f,
  f5t as p,
  hmn as m,
  jG as h,
  kG as g,
  kmn as _,
  lWt as v,
  oHt as y,
  snn as b,
  tmt as x,
  uWt as S,
  xmn as C,
} from "./app-initial-f094ef01c64d.js";
import { r as w, t as T } from "./artifact-creation-prompts-a41340b52c1a.js";
function E(e) {
  let t = (0, O.c)(3),
    { disabledBy: n } = e;
  if (n === `openai`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(i, {
            id: `appgenPage.disabledByOpenAI.tooltip`,
            defaultMessage: `Your site may violate OpenAI policies. <learnMore>Learn more</learnMore>`,
            description: `Tooltip explaining why OpenAI disabled a site in the Sites list and linking to the ChatGPT Sites Terms`,
            values: { learnMore: D },
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n !== `workspace_admin`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(i, {
            id: `appgenPage.disabledUnknown.tooltip`,
            defaultMessage: `Disabled`,
            description: `Tooltip for a disabled site whose disabling actor is unavailable`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, A.jsx)(i, {
          id: `appgenPage.disabled.tooltip`,
          defaultMessage: `Disabled by an admin`,
          description: `Tooltip explaining why a workspace admin disabled a site in the Sites list`,
        })),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function D(e) {
  return (0, A.jsx)(
    g,
    {
      className: `text-info underline decoration-current underline-offset-2`,
      href: j,
      initiator: `sites_library`,
      children: k.Children.toArray(e),
    },
    `sites-terms-link`,
  );
}
var O,
  k,
  A,
  j,
  M = e(() => {
    ((O = _()),
      (k = t(n(), 1)),
      u(),
      h(),
      (A = m()),
      (j = `https://openai.com/policies/chatgpt-sites-terms/`));
  });
function N(e, t, n, r, i) {
  if (i == null) return;
  let a = e.get(s).formatMessage(
    {
      id: `appgenConversation.editFilePrompt`,
      defaultMessage: `{fileMention} make these changes…`,
      description: `Prompt for continuing work on a Library file in its original task`,
    },
    { fileMention: S(n, r) },
  );
  t(p(b(i)), { state: { prefillPrompt: `${a} ` } });
}
function P(e, t, n) {
  let r = e.get(s),
    i;
  switch (n.type) {
    case `create-asset`:
      switch (n.assetType) {
        case `document`:
        case `spreadsheet`:
        case `presentation`:
        case `pdf`: {
          let e =
            n.assetType === `pdf`
              ? { label: `PDF`, pluginId: `pdf@openai-primary-runtime` }
              : T[n.assetType].artifact;
          i = o({ defaultPrompt: null, pluginDisplayName: e.label, pluginId: e.pluginId });
          break;
        }
        case `image`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.imagePrompt`,
            defaultMessage: `Create an image of …`,
            description: `Prefill prompt for creating an image from the Library`,
          });
          break;
      }
      break;
    case `create`:
      i = o({
        defaultPrompt: r.formatMessage({
          id: `appgenConversation.createPrompt`,
          defaultMessage: `Create a website that …`,
          description: `Prompt for starting a new site from the Sites page`,
        }),
        pluginDisplayName: `Sites`,
        pluginId: y,
      });
      break;
    case `edit`:
      i = `${r.formatMessage({ id: `appgenConversation.editPrompt`, defaultMessage: `{siteMention} make these changes…`, description: `Prompt for continuing work on an existing site from the Sites page` }, { siteMention: l({ projectId: n.projectId, title: n.projectTitle }) })} `;
      break;
    case `publish`: {
      let e = l({ projectId: n.projectId, title: n.projectTitle });
      i = `${o({ defaultPrompt: r.formatMessage({ id: `appgenConversation.publishPrompt`, defaultMessage: `{siteMention} publish this site`, description: `Prompt for asking the model to publish an existing unpublished Site` }, { siteMention: e }), pluginDisplayName: `Sites`, pluginId: y })} `;
      break;
    }
  }
  (t({
    activeProject: null,
    libraryFileCreation:
      n.type === `create-asset` && n.assetType !== `image` && n.cloudLibraryEnabled ? !0 : void 0,
    prefillPrompt: i,
    startInSidebar: !0,
  }),
    n.type === `edit` &&
      n.liveUrl != null &&
      C.dispatchMessage(`open-in-browser`, {
        initiator: `sites_library`,
        openTarget: `in-app-browser`,
        source: `manual`,
        url: n.liveUrl,
      }));
}
var F = e(() => {
  (r(), w(), x(), v(), a(), d(), f(), c());
});
export { M as a, E as i, F as n, P as r, N as t };
//# sourceMappingURL=start-appgen-conversation-389745f7419d.js.map
