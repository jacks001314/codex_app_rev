const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./templates-6c3aa86b060e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-connect-modal-763ad0733e86.js",
      "./app-connect-skeleton-990edda9425c.js",
      "./app-connect-modal-by-id-ee9e7bc8d7c4.js",
      "./app-connect-load-state-80040a1f57f3.js",
      "./app-info-b43c099f07b0.js",
      "./create-permissions-48c01d3c6f8e.js",
      "./permissions-a20c840b1cd8.js",
      "./select-4c14bfc522da.js",
      "./select-control-661f8ec490d1.js",
      "./select-control-1bcf227d3465.css",
      "./select-c443f552004f.css",
      "./create-dialog-37f7447bded2.js",
      "./use-app-connect-flow-7fc070fa8fd7.js",
      "./app-connect-queries-f7767476a146.js",
      "./availability-e0ac6f935d38.js",
      "./microsoft-oauth-bundle-ca8e0d4a5995.js",
      "./es-e408b9158134.js",
      "./prop-types-1ebacf647ac7.js",
      "./api-b14d863c8e83.js",
      "./builder-analytics-f4d73421cfb8.js",
      "./workspace-agent-icon-cf51c4c0930d.js",
      "./helpers-97e80d920c48.js",
      "./types-bf88a8ab2993.js",
      "./SparkleFill-4f53dcc10c9c.js",
      "./workspace-agent-icon-8814b33caf67.css",
      "./templates-c4aeb4094802.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  F3 as n,
  HFt as r,
  HO as i,
  I3 as a,
  IO as o,
  JO as s,
  LNt as c,
  LRt as l,
  OFt as u,
  ULt as d,
  VRt as f,
  WO as p,
  XOt as m,
  e6 as h,
  hRt as g,
  kFt as _,
  kLt as v,
  kRt as y,
  qO as b,
  tkt as x,
} from "./app-shared-2feb3d4c6fcc.js";
var S, C;
function w() {
  return (w = e(() => {
    (m(),
      s(),
      i(),
      n(),
      h(),
      (S = c()),
      _(),
      (C = a(
        async () =>
          (
            await u(
              async () => {
                let { WorkspaceAgentTemplates: e } = await import(`./templates-6c3aa86b060e.js`);
                return { WorkspaceAgentTemplates: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                26, 27, 28, 29, 30, 31,
              ]),
              import.meta.url,
            )
          ).WorkspaceAgentTemplates,
        {
          fallback: ({ onClose: e }) =>
            (0, S.jsx)(p, {
              open: !0,
              onOpenChange: (t) => {
                t || e();
              },
              children: (0, S.jsxs)(o, {
                children: [
                  (0, S.jsx)(b, {
                    children: (0, S.jsx)(x, {
                      id: `workspaceAgents.templates.loading`,
                      defaultMessage: `Loading templates…`,
                      description: `Status while agent templates are loading`,
                    }),
                  }),
                  (0, S.jsx)(t, {}),
                ],
              }),
            }),
        },
      )));
  }))();
}
function T(e, t, n) {
  return {
    type: `template`,
    templateName: e.template_name,
    selections: t,
    text:
      e.default_prompt?.trim() ||
      n.formatMessage(
        {
          id: `workspaceAgents.templates.startPrompt`,
          defaultMessage: `Start from the {templateName} template and help me customize the agent`,
          description: `Initial message to the agent builder assistant after a user selects a template. templateName is the template's display name.`,
        },
        { templateName: e.display_name },
      ),
  };
}
async function E(e, t, n) {
  t.type === `compose`
    ? (await e.compose({ text: t.text }), await e.focus())
    : t.type === `send`
      ? await e.send({ text: t.text })
      : await e.send({
          content: [
            {
              type: `input_tag`,
              text: ``,
              id: `template:${t.templateName}`,
              group: n.formatMessage({
                id: `workspaceAgents.templates.tagGroup`,
                defaultMessage: `Templates`,
                description: `Group label for a selected agent template in the builder assistant composer`,
              }),
              data: {
                type: `template`,
                template_name: t.templateName,
                selected_tool_ids_by_category: t.selections,
              },
            },
            { type: `input_text`, text: t.text },
          ],
        });
}
var D, O;
function k() {
  return (k = e(() => {
    (r(),
      (D = d(`type`, [
        y({ type: g(`send`), text: f() }),
        y({ type: g(`compose`), text: f() }),
        y({ type: g(`template`), text: f(), templateName: f().min(1), selections: l(f(), v(f())) }),
      ])),
      (O = y({ workspaceAgentAssistant: D.optional() })));
  }))();
}
export { C as a, O as i, k as n, w as o, E as r, T as t };
//# sourceMappingURL=navigation-326e4adebcdc.js.map
