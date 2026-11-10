import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  Dz as n,
  Sz as r,
  _6 as i,
  _Jt as a,
  bnn as o,
  bz as s,
  g6 as c,
  h6 as l,
  m7t as u,
  pJt as d,
  snn as f,
} from "./app-initial-f094ef01c64d.js";
function p({ item: e, preferences: t, repo: n, targetThreadId: i }) {
  return {
    kind: `heartbeat`,
    name: `Auto-fix PR #${e.number}`,
    prompt: S({ item: e, preferences: t, repo: n }),
    targetThreadId: i,
    model: null,
    reasoningEffort: null,
    rrule: s({ ...r(), intervalHours: 1, intervalMinutes: T }),
  };
}
function m(e, t) {
  if (e == null) return null;
  let n = `${E}${t}`;
  return (
    e.find((e) => {
      if (!i(e) || e.status === `DELETED`) return !1;
      let t = e.prompt.split(`
`),
        r = t.indexOf(`## Pull request fix automation:`),
        a = t.indexOf(``, r + 1);
      return r >= 0 && a > r && t.slice(r + 1, a).includes(n);
    }) ?? null
  );
}
function h(e) {
  return e?.status === `ACTIVE`;
}
async function g({
  automation: e,
  createThread: t,
  finishThreadSetup: n,
  item: r,
  preferences: i,
  repo: a,
  sendMessage: o,
}) {
  let s = e == null,
    { automation: c, setupError: l } = await y({
      automation: e,
      createThread: t,
      finishThreadSetup: n,
      item: r,
      preferences: i,
      repo: a,
    });
  if (l != null) return { automation: c, runError: l };
  try {
    return (
      await o(c.targetThreadId, s ? x({ item: r, preferences: i, repo: a }) : c.prompt),
      { automation: c, runError: null }
    );
  } catch (e) {
    return { automation: c, runError: u(e) };
  }
}
async function _(e) {
  return b(e, `PAUSED`);
}
async function v(e) {
  let { items: t } = await d(`list-automations`),
    n = t.flatMap((t) => {
      if (!i(t) || t.status !== `ACTIVE`) return [];
      let n = t.prompt.split(`
`),
        r = n.indexOf(D);
      if (r < 0) return [];
      let a = [...n.slice(0, r + 1), ...C(e)].join(`
`);
      return a === t.prompt ? [] : [b(t, `ACTIVE`, a)];
    });
  return Promise.all(n);
}
async function y({
  automation: e,
  createThread: t,
  finishThreadSetup: n,
  item: r,
  preferences: i,
  repo: a,
}) {
  if (e == null) {
    let e = await t(),
      n = e.conversationId,
      { item: s } = await d(`automation-create`, {
        params: {
          ...p({ item: r, preferences: i, repo: a, targetThreadId: n }),
          ...(e.synchronization.status === `failed` ? { status: `PAUSED` } : {}),
        },
      });
    if (!o(s)) throw Error(`Automatic fix heartbeat could not be created`);
    return {
      automation: s,
      setupError: e.synchronization.status === `failed` ? e.synchronization.message : null,
    };
  }
  if (e.status === `PAUSED`) {
    let t;
    try {
      t = await n(f(e.targetThreadId));
    } catch (t) {
      return { automation: e, setupError: u(t) };
    }
    if (t.status === `refused`)
      return {
        automation: e,
        setupError: `The retained task is not a supported automatic-fix fork`,
      };
    if (t.status === `not-ready`)
      return { automation: e, setupError: `Task setup is not ready: ${t.reason}` };
    if (t.synchronization.status === `failed`)
      return { automation: e, setupError: t.synchronization.message };
  }
  let s = S({ item: r, preferences: i, repo: a });
  return e.status === `PAUSED` || e.prompt !== s
    ? { automation: await b(e, `ACTIVE`, s), setupError: null }
    : { automation: e, setupError: null };
}
async function b(e, t, n = e.prompt) {
  let { item: r } = await d(`automation-update`, {
    params: {
      id: e.id,
      kind: `heartbeat`,
      name: e.name,
      prompt: n,
      status: t,
      targetThreadId: e.targetThreadId,
      model: e.model,
      reasoningEffort: e.reasoningEffort,
      rrule: e.rrule,
    },
  });
  if (!o(r)) throw Error(`Automatic fix heartbeat could not be updated`);
  return r;
}
function x({ item: e, preferences: t, repo: n }) {
  return [
    `Begin automatically fixing PR #${e.number}.`,
    `A 10-minute heartbeat is attached to this thread and will continue checking the pull request until the task is complete or blocked.`,
    ``,
    ...w({ item: e, repo: n }),
    ...C(t),
  ].join(`
`);
}
function S({ item: e, preferences: t, repo: n }) {
  return [l, ...w({ item: e, repo: n }), ``, D, ...C(t)].join(`
`);
}
function C({ autoMerge: e, instructions: t }) {
  let n = t.trim();
  return [
    `The following behavior is the default. Explicit custom user instructions below override conflicting defaults, but never bypass safety, permissions, or access restrictions.`,
    "Inspect the latest PR state with `gh`, including mergeability and all current checks.",
    `By default, fix only failing checks caused by this PR and merge conflicts with its base branch. Do not change code for unrelated failures, infrastructure outages, or flakes unless the custom user instructions explicitly authorize broader remediation.`,
    `Start from logs and annotations before changing code. Use installed CI skills or tools for external providers such as Buildkite, and report the exact missing credential or access if blocked.`,
    `Do not modify the configured checkout, switch its branch, clean it, reset it, or commit from it.`,
    `Inspect from the configured checkout, then create an isolated git worktree only when a code change or conflict resolution is required. Make every mutation in that isolated worktree so the user's active checkout is not disturbed.`,
    `Keep changes minimal and relevant to the authorized task. Run the narrowest useful verification, commit, and push only to the PR branch unless custom instructions explicitly authorize a separate fix PR.`,
    e
      ? `Once all required checks pass and the PR is mergeable, merge it using the user's custom instructions or the repository's merge workflow. If merging fails, diagnose the failure, update the branch when needed, retry the merge workflow, and continue until the PR is merged or closed.`
      : `Do not merge the pull request unless the custom user instructions explicitly request it; otherwise, the user controls merging separately.`,
    `Clean up a temporary worktree when it is safe. Never remove a worktree that contains uncommitted work or that you did not create for this task.`,
    `Re-check live GitHub state instead of trusting prior turns.`,
    `If checks are still pending, finish the useful work for this turn without sleeping; the heartbeat will check again in ${T} minutes.`,
    e
      ? `When the PR is merged or closed, pause this heartbeat automation with the automation update tool before your final response. Do not stop merely because the checks pass.`
      : `When the PR is green and conflict-free, merged, or closed, pause this heartbeat automation with the automation update tool before your final response, unless the custom user instructions explicitly require continuing until it merges.`,
    `If progress requires user input or unavailable credentials, ask one concise question in this thread, report the exact blocker, and pause this heartbeat automation. The user can reply here and resume it when ready.`,
    `Do not create or suggest another automation.`,
    ...(n.length > 0
      ? [``, `Custom user instructions (these override conflicting defaults):`, n]
      : []),
  ];
}
function w({ item: e, repo: t }) {
  return [
    `Repository: ${t ?? e.repo ?? `the current repository`}`,
    `Pull request: #${e.number}`,
    `${E}${e.url}`,
    `Branch: ${e.headBranch} -> ${e.baseBranch}`,
  ];
}
var T,
  E,
  D,
  O = e(() => {
    (t(),
      n(),
      a(),
      c(),
      (T = 10),
      (E = `Pull request URL: `),
      (D = `This is a heartbeat turn. Continue automatically fixing this pull request.`));
  });
export { g as a, _ as i, O as n, v as o, h as r, m as t };
//# sourceMappingURL=pull-request-fix-automation-d39ed4e2b4ea.js.map
