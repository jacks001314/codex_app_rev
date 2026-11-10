import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cpn as t,
  IXt as n,
  KXt as r,
  N3t as i,
  O3t as a,
  Rpn as o,
  Spn as s,
  dKt as c,
  fKt as l,
  hmn as u,
  jG as d,
  kG as f,
  kmn as p,
  mqt as m,
  pqt as h,
  rq as g,
  uq as _,
  xpn as v,
  zpn as y,
} from "./app-initial-f094ef01c64d.js";
import { nv as b, tv as x } from "./app-primary-4c40d73a1074.js";
function S(e) {
  let n = (0, E.c)(14),
    { hasUserMessage: i, isTemporaryChat: a, placement: o } = e,
    s = o === void 0 ? `thread` : o,
    { search: c } = r(),
    { data: l } = _(),
    u;
  n[0] !== i || n[1] !== a || n[2] !== s || n[3] !== c
    ? ((u = (a ?? m(c)) && !(i ?? s === `thread`)),
      (n[0] = i),
      (n[1] = a),
      (n[2] = s),
      (n[3] = c),
      (n[4] = u))
    : (u = n[4]);
  let d = u;
  if (l == null) return null;
  if (l.structure === `workspace`) {
    let e;
    return (
      n[5] !== l || n[6] !== s || n[7] !== d
        ? ((e = (0, D.jsx)(C, { account: l, isTemporaryChat: d, placement: s })),
          (n[5] = l),
          (n[6] = s),
          (n[7] = d),
          (n[8] = e))
        : (e = n[8]),
      e
    );
  }
  if (s === `home` && !d) return null;
  let f;
  n[9] === d
    ? (f = n[10])
    : ((f = d ? (0, D.jsx)(t, { ...O.temporaryChat }) : (0, D.jsx)(t, { ...O.personal })),
      (n[9] = d),
      (n[10] = f));
  let p;
  return (
    n[11] !== s || n[12] !== f
      ? ((p = (0, D.jsx)(T, { placement: s, children: f })), (n[11] = s), (n[12] = f), (n[13] = p))
      : (p = n[13]),
    p
  );
}
function C(e) {
  "use forget";
  let n = (0, E.c)(14),
    { account: r, isTemporaryChat: a, placement: o } = e,
    { data: s } = i(x, r.id),
    { data: l } = i(c, r.id);
  if (s == null) return null;
  let u = s.account.workspace_type === `early-access`;
  if (!u && l == null) return null;
  let d = s.account.name ?? r.name,
    f;
  if (l?.beta_settings.training_allowed === !0) {
    let e;
    (n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, D.jsx)(t, { ...O.workspaceResearchPartner, values: { link: w } })), (n[0] = e))
      : (e = n[0]),
      (f = e));
  } else if (u) {
    let e;
    (n[1] === d
      ? (e = n[2])
      : ((e =
          d == null
            ? (0, D.jsx)(t, { ...O.earlyAccessWorkspaceWithoutName })
            : (0, D.jsx)(t, { ...O.earlyAccessWorkspace, values: { workspaceName: d } })),
        (n[1] = d),
        (n[2] = e)),
      (f = e));
  } else if (a) {
    let e;
    (n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, D.jsx)(t, { ...O.workspaceTemporaryChat })), (n[3] = e))
      : (e = n[3]),
      (f = e));
  } else if (s.account.ekm_config != null)
    if (r.plan_type === `k12`) {
      let e;
      (n[4] === d
        ? (e = n[5])
        : ((e =
            d == null
              ? (0, D.jsx)(t, { ...O.encryptedK12WorkspaceWithoutName })
              : (0, D.jsx)(t, { ...O.encryptedK12Workspace, values: { workspaceName: d } })),
          (n[4] = d),
          (n[5] = e)),
        (f = e));
    } else {
      let e;
      (n[6] === d
        ? (e = n[7])
        : ((e =
            d == null
              ? (0, D.jsx)(t, { ...O.encryptedWorkspaceWithoutName })
              : (0, D.jsx)(t, { ...O.encryptedWorkspace, values: { workspaceName: d } })),
          (n[6] = d),
          (n[7] = e)),
        (f = e));
    }
  else if (r.plan_type === `k12`) {
    let e;
    (n[8] === d
      ? (e = n[9])
      : ((e =
          d == null
            ? (0, D.jsx)(t, { ...O.k12WorkspaceWithoutName })
            : (0, D.jsx)(t, { ...O.k12Workspace, values: { workspaceName: d } })),
        (n[8] = d),
        (n[9] = e)),
      (f = e));
  } else {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, D.jsx)(t, { ...O.workspace })), (n[10] = e))
      : (e = n[10]),
      (f = e));
  }
  let p;
  return (
    n[11] !== f || n[12] !== o
      ? ((p = (0, D.jsx)(T, { placement: o, children: f })), (n[11] = f), (n[12] = o), (n[13] = p))
      : (p = n[13]),
    p
  );
}
function w(e) {
  return (0, D.jsx)(f, {
    className: `cursor-interaction underline underline-offset-2 hover:text-default`,
    href: `https://help.openai.com/articles/20001245`,
    initiator: `open_in_browser_bridge`,
    isBrowserEnabled: !1,
    children: e,
  });
}
function T(e) {
  let t = (0, E.c)(5),
    { children: n, placement: r } = e,
    i = r === `thread` && `pb-2`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = o(`text-center text-xs text-codex-description select-none`, i)),
      (t[0] = i),
      (t[1] = a));
  let s;
  return (
    t[2] !== n || t[3] !== a
      ? ((s = (0, D.jsx)(`div`, { className: a, children: n })), (t[2] = n), (t[3] = a), (t[4] = s))
      : (s = t[4]),
    s
  );
}
var E,
  D,
  O,
  k = e(() => {
    ((E = p()),
      y(),
      a(),
      s(),
      n(),
      l(),
      b(),
      h(),
      g(),
      d(),
      (D = u()),
      (O = v({
        personal: {
          id: `codex.composer.browserDisclaimer`,
          defaultMessage: `ChatGPT can make mistakes. Check important info.`,
          description: `Compact legal disclosure above the browser conversation composer for a personal ChatGPT account, reminding users that AI responses may contain mistakes and important information should be checked.`,
        },
        temporaryChat: {
          id: `codex.composer.browserDisclaimer.temporaryChat`,
          defaultMessage: `For safety, we may keep a copy of this chat for up to 30 days.`,
          description: `Compact privacy disclosure above the browser composer before a personal-account user sends the first message in a temporary ChatGPT conversation, explaining its maximum safety-retention period.`,
        },
        workspace: {
          id: `codex.composer.browserDisclaimer.workspace`,
          defaultMessage: `ChatGPT can make mistakes. Workspace data isn't used to train models.`,
          description: `Compact legal and privacy disclosure above the browser composer for a Business or Enterprise workspace that has not opted in to model training, reassuring workspace members that their data is excluded from training.`,
        },
        workspaceResearchPartner: {
          id: `codex.composer.browserDisclaimer.workspaceResearchPartner`,
          defaultMessage: `ChatGPT can make mistakes. This workspace is opted in to the ChatGPT Business Research Partner Program. <link>Learn more</link>`,
          description: `Legal and privacy disclosure above the browser composer for a Business workspace opted in to sharing its data through the ChatGPT Business Research Partner Program. The <link> tag wraps a clickable Help Center article labeled Learn more.`,
        },
        earlyAccessWorkspace: {
          id: `codex.composer.browserDisclaimer.earlyAccessWorkspace`,
          defaultMessage: `ChatGPT can make mistakes. OpenAI uses {workspaceName} workspace data to train its models.`,
          description: `Legal and privacy disclosure above the browser composer for an early-access workspace whose data is used to train AI models. The {workspaceName} placeholder is the human-readable name of the current workspace.`,
        },
        earlyAccessWorkspaceWithoutName: {
          id: `codex.composer.browserDisclaimer.earlyAccessWorkspaceWithoutName`,
          defaultMessage: `ChatGPT can make mistakes. OpenAI uses your workspace data to train its models.`,
          description: `Legal and privacy disclosure above the browser composer for an early-access workspace whose data is used to train AI models when the workspace has no display name.`,
        },
        workspaceTemporaryChat: {
          id: `codex.composer.browserDisclaimer.workspaceTemporaryChat`,
          defaultMessage: `Workspace data isn't used to train models by default. For safety, we may keep a copy of this chat for up to 30 days.`,
          description: `Privacy disclosure above the browser composer before a workspace member sends the first message in a temporary ChatGPT conversation, explaining that workspace data is not used for model training and may be retained for safety for up to 30 days.`,
        },
        encryptedWorkspace: {
          id: `codex.composer.browserDisclaimer.encryptedWorkspace`,
          defaultMessage: `ChatGPT can make mistakes. OpenAI doesn't use {workspaceName} workspace data to train its models. The content of this workspace is encrypted with your organization managed keys.`,
          description: `Legal and privacy disclosure above the browser composer for a Business or Enterprise workspace protected by organization-managed cryptographic encryption keys. The {workspaceName} placeholder is the human-readable name of the current workspace.`,
        },
        encryptedWorkspaceWithoutName: {
          id: `codex.composer.browserDisclaimer.encryptedWorkspaceWithoutName`,
          defaultMessage: `ChatGPT can make mistakes. OpenAI doesn't use your workspace data to train its models. The content of this workspace is encrypted with your organization managed keys.`,
          description: `Legal and privacy disclosure above the browser composer for a Business or Enterprise workspace protected by organization-managed cryptographic encryption keys when the workspace has no display name.`,
        },
        k12Workspace: {
          id: `codex.composer.browserDisclaimer.k12Workspace`,
          defaultMessage: `ChatGPT for Teachers can make mistakes. OpenAI doesn't use {workspaceName} workspace data to train its models.`,
          description: `Legal and privacy disclosure above the browser composer for a ChatGPT for Teachers workspace, assuring educators that their workspace data is not used to train AI models. The {workspaceName} placeholder is the human-readable name of the school workspace.`,
        },
        k12WorkspaceWithoutName: {
          id: `codex.composer.browserDisclaimer.k12WorkspaceWithoutName`,
          defaultMessage: `ChatGPT for Teachers can make mistakes. OpenAI doesn't use your workspace data to train its models.`,
          description: `Legal and privacy disclosure above the browser composer for a ChatGPT for Teachers workspace without a display name, assuring educators that their workspace data is not used to train AI models.`,
        },
        encryptedK12Workspace: {
          id: `codex.composer.browserDisclaimer.encryptedK12Workspace`,
          defaultMessage: `ChatGPT for Teachers can make mistakes. OpenAI doesn't use {workspaceName} workspace data to train its models. The content of this workspace is encrypted with your organization managed keys.`,
          description: `Legal and privacy disclosure above the browser composer for a ChatGPT for Teachers workspace protected by organization-managed cryptographic encryption keys. The {workspaceName} placeholder is the human-readable name of the school workspace.`,
        },
        encryptedK12WorkspaceWithoutName: {
          id: `codex.composer.browserDisclaimer.encryptedK12WorkspaceWithoutName`,
          defaultMessage: `ChatGPT for Teachers can make mistakes. OpenAI doesn't use your workspace data to train its models. The content of this workspace is encrypted with your organization managed keys.`,
          description: `Legal and privacy disclosure above the browser composer for a ChatGPT for Teachers workspace protected by organization-managed cryptographic encryption keys when the school workspace has no display name.`,
        },
      })));
  });
export { k as n, S as t };
//# sourceMappingURL=browser-composer-disclaimer-72402b5f9ca1.js.map
