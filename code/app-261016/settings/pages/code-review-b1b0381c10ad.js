import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Cit as r,
  PBt as i,
  Qst as a,
  RFt as o,
  XOt as s,
  ZSt as c,
  hyt as l,
  myt as u,
  okt as d,
  sct as f,
  vst as p,
  yit as m,
  yst as h,
  zFt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ft as _,
  BBr as v,
  BPt as y,
  Fer as b,
  Jwr as x,
  LPt as S,
  QFt as C,
  RBr as w,
  Wwr as T,
  eIt as E,
  eer as D,
  l1r as O,
  nnt as k,
  o1r as A,
  rnt as j,
} from "./app-initial-ad16eaadf81f.js";
var M;
function N() {
  return (N = e(() => {
    M = `# Review Guidelines

You are acting as a reviewer for a proposed code change made by another engineer.

Review the change and respond in normal Markdown. Do not return JSON, XML, a findings object, or any structured review schema.

When feedback should be attached directly to a changed line, emit one \`::code-comment{...}\` directive for that issue. The directive creates an inline code comment in the review UI; keep the visible response as normal Markdown. Emit no directives when there are no actionable inline comments.

Required \`code-comment\` attributes: \`title\`, \`body\`, and \`file\`. Optional attributes: \`start\`, \`end\`, and \`priority\`. Use the shortest useful line range. \`file\` should be an absolute path or include the workspace folder segment.

Focus on discrete, actionable issues the original author would likely fix if they knew about them. Prefer no issues over speculative or low-signal feedback.

General guidelines for whether to call out an issue:

1. It meaningfully impacts correctness, performance, security, or maintainability.
2. It is discrete and actionable.
3. It was introduced by the change under review.
4. The author would likely fix it once aware.
5. It does not rely on unstated assumptions about intent.
6. It identifies the affected behavior clearly rather than speculating broadly.

## Repository Rule Attribution

Use the root and scoped project instruction files applicable to changed files, respecting normal project-document precedence (\`AGENTS.override.md\`, \`AGENTS.md\`, then configured fallback filenames) and selecting at most one file per directory. Guidance may use headings, checklists, bullets, tables, or concise prose; do not require formal IDs or schemas. More-specific guidance wins on conflict, and user instructions about review scope or style take precedence.

Review the diff independently and deduplicate findings by changed location and defect/remedy. A finding is rule-supported only when applicable guidance materially contributes repository-specific scope, an invariant, remedy, convention, or confirmation behavior beyond generic correctness advice. Preserve and union rule support when candidates merge, then check every final candidate against the applicable rules. Do not omit ordinary findings or invent findings solely because a rule file exists.

When collaboration is available, use at most one focused investigator per applicable rule. For each rule-supported finding, verify the applicable project instruction file that supplies the rule and its smallest supporting line range, then include one compact Markdown or local-file reference in the visible comment body. Do not fabricate citations or add hidden metadata.

When you call out an issue, include the relevant file and line or function in prose, explain the scenario where it matters, and keep the explanation concise. Use priority labels such as \`[P1]\` or \`[P2]\` only when helpful to communicate severity.

If there are no actionable issues, say that directly and briefly.
`;
  }))();
}
function P({ reviewInstructions: e, requestMessage: t }) {
  return [T, M.trim(), e.trim(), A, t].join(`
`);
}
async function F({ context: e, hostId: t, intl: n }) {
  if (e.mode === `uncommitted`) {
    let e = n.formatMessage({
      id: `quickAction.request.codeReview.uncommitted`,
      defaultMessage: `Please review my uncommitted changes`,
      description: `User message used when reviewing uncommitted changes`,
    });
    return {
      diffFilter: `unstaged`,
      prompt: P({ reviewInstructions: z, requestMessage: e }),
      baseBranch: null,
    };
  }
  let r = await m(`git-merge-base`, {
    source: `review_model`,
    params: { gitRoot: e.gitRoot, baseBranch: e.baseBranch, hostId: t },
  });
  if (!r.mergeBaseSha) throw Error(`Failed to resolve a merge base between HEAD and ${e.baseBranch}.`);
  let i = n.formatMessage(
    {
      id: `quickAction.request.codeReview.branches`,
      defaultMessage: `Please review changes on {from} against {to}`,
      description: `User message used when reviewing against a selected base branch`,
    },
    { from: e.sourceBranch, to: e.baseBranch },
  );
  return {
    diffFilter: `branch`,
    prompt: P({
      reviewInstructions: R.replaceAll(`{baseBranch}`, e.baseBranch).replaceAll(
        `{mergeBaseSha}`,
        r.mergeBaseSha.trim(),
      ),
      requestMessage: i,
    }),
    baseBranch: e.baseBranch,
  };
}
function I(e) {
  let n = (0, L.c)(15),
    { hostId: r, permissions: i, onError: o, onSuccess: s } = e,
    c = t(a),
    f = d(),
    p;
  n[0] !== r || n[1] !== f || n[2] !== i || n[3] !== c
    ? ((p = async (e) => {
        let { context: t, conversationId: n, delivery: a } = e,
          { gitRoot: o, cwd: s } = t,
          d = await F({ context: t, hostId: r, intl: f }),
          p = n == null ? null : c.get(b, n);
        if (a === `inline` && n != null && p === r) {
          if (c.get(w, r) == null) throw Error(`Code review host is unavailable`);
          return (
            await y(c, r, n, {
              request: {
                turnTrigger: `code_review`,
                threadId: n,
                cwd: s,
                input: [{ type: `text`, text: d.prompt, text_elements: [] }],
                approvalsReviewer: i.approvalsReviewer,
                ...l(i),
                ...(i.activePermissionProfile == null ? {} : { runtimeWorkspaceRoots: u(i) }),
                collaborationMode: null,
                serviceTier: await j(c, r, null),
              },
              context: { inheritThreadSettings: !1 },
            }),
            { delivery: `inline`, diffFilter: d.diffFilter, baseBranch: d.baseBranch }
          );
        }
        let m = await E(c, r, {
          threadSource: `code_review`,
          turnTrigger: `code_review`,
          input: [{ type: `text`, text: d.prompt, text_elements: [] }],
          cwd: s,
          workspaceRoots: [o],
          collaborationMode: null,
          serviceTier: await j(c, r, null),
          permissionsConfig: i,
          approvalsReviewer: i.approvalsReviewer,
        });
        if (m.status !== `created`) throw C(c, m);
        return {
          baseBranch: d.baseBranch,
          conversationId: m.conversationId,
          creation: m,
          delivery: `detached`,
          diffFilter: d.diffFilter,
        };
      }),
      (n[0] = r),
      (n[1] = f),
      (n[2] = i),
      (n[3] = c),
      (n[4] = p))
    : (p = n[4]);
  let m;
  n[5] !== o || n[6] !== s || n[7] !== c
    ? ((m = (e) => {
        if ((s(e), e.delivery === `detached` && e.creation != null)) {
          let t = C(c, e.creation);
          t != null && o(t);
        }
      }),
      (n[5] = o),
      (n[6] = s),
      (n[7] = c),
      (n[8] = m))
    : (m = n[8]);
  let _;
  n[9] === o
    ? (_ = n[10])
    : ((_ = (e) => {
        (g.error(`Failed to start quick review conversation`, { safe: {}, sensitive: { error: e } }), o(e));
      }),
      (n[9] = o),
      (n[10] = _));
  let v;
  return (
    n[11] !== p || n[12] !== m || n[13] !== _
      ? ((v = { mutationFn: p, onSuccess: m, onError: _ }),
        (n[11] = p),
        (n[12] = m),
        (n[13] = _),
        (n[14] = v))
      : (v = n[14]),
    h(v)
  );
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = i()),
      p(),
      c(),
      f(),
      O(),
      x(),
      s(),
      v(),
      D(),
      _(),
      S(),
      k(),
      N(),
      n(),
      o(),
      r(),
      (R =
        "Review the code changes against the base branch '{baseBranch}'. The merge base commit for this comparison is {mergeBaseSha}. Run `git diff {mergeBaseSha}` to inspect the changes relative to {baseBranch}. Provide concise, actionable feedback in a normal Markdown response."),
      (z = `Review the current code changes (staged, unstaged, and untracked files) and provide concise, actionable feedback in a normal Markdown response.`));
  }))();
}
export { F as n, I as r, B as t };
//# sourceMappingURL=code-review-b1b0381c10ad.js.map
