import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $_t as t,
  CPt as n,
  Cot as r,
  Iot as i,
  Ixt as a,
  Lot as o,
  Pxt as s,
  Q_t as c,
  SPt as l,
  VDt as u,
  jDt as d,
  rrt as f,
  rst as p,
  srt as m,
  vzt as h,
  wot as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as _,
  ALt as v,
  Ebr as y,
  GRt as b,
  Met as x,
  NLt as S,
  Net as C,
  QPr as w,
  Sbr as T,
  URt as E,
  WRt as D,
  dYr as O,
  eFr as k,
  mYr as A,
  v8n as j,
} from "./app-initial-5851df3f6cb1.js";
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
  return [T, M.trim(), e.trim(), O, t].join(`
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
  let r = await f(`git-merge-base`, {
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
  let i = (0, L.c)(15),
    { hostId: s, permissions: l, onError: d, onSuccess: f } = e,
    p = a(r),
    m = u(),
    h;
  i[0] !== s || i[1] !== m || i[2] !== l || i[3] !== p
    ? ((h = async (e) => {
        let { context: n, conversationId: r, delivery: i } = e,
          { gitRoot: a, cwd: o } = n,
          u = await F({ context: n, hostId: s, intl: m }),
          d = r == null ? null : p.get(_, r);
        if (i === `inline` && r != null && d === s) {
          if (p.get(w, s) == null) throw Error(`Code review host is unavailable`);
          return (
            await S(p, s, r, {
              request: {
                turnTrigger: `code_review`,
                threadId: r,
                cwd: o,
                input: [{ type: `text`, text: u.prompt, text_elements: [] }],
                approvalsReviewer: l.approvalsReviewer,
                ...t(l),
                ...(l.activePermissionProfile == null ? {} : { runtimeWorkspaceRoots: c(l) }),
                collaborationMode: null,
                serviceTier: await C(p, s, null),
              },
              context: { inheritThreadSettings: !1 },
            }),
            { delivery: `inline`, diffFilter: u.diffFilter, baseBranch: u.baseBranch }
          );
        }
        let f = await b(p, s, {
          threadSource: `code_review`,
          turnTrigger: `code_review`,
          input: [{ type: `text`, text: u.prompt, text_elements: [] }],
          cwd: o,
          workspaceRoots: [a],
          collaborationMode: null,
          serviceTier: await C(p, s, null),
          permissionsConfig: l,
          approvalsReviewer: l.approvalsReviewer,
        });
        if (f.status !== `created`) throw E(p, f);
        return {
          baseBranch: u.baseBranch,
          conversationId: f.conversationId,
          creation: f,
          delivery: `detached`,
          diffFilter: u.diffFilter,
        };
      }),
      (i[0] = s),
      (i[1] = m),
      (i[2] = l),
      (i[3] = p),
      (i[4] = h))
    : (h = i[4]);
  let g;
  i[5] !== d || i[6] !== f || i[7] !== p
    ? ((g = (e) => {
        if ((f(e), e.delivery === `detached` && e.creation != null)) {
          let t = E(p, e.creation);
          t != null && d(t);
        }
      }),
      (i[5] = d),
      (i[6] = f),
      (i[7] = p),
      (i[8] = g))
    : (g = i[8]);
  let v;
  i[9] === d
    ? (v = i[10])
    : ((v = (e) => {
        (n.error(`Failed to start quick review conversation`, { safe: {}, sensitive: { error: e } }), d(e));
      }),
      (i[9] = d),
      (i[10] = v));
  let y;
  return (
    i[11] !== h || i[12] !== g || i[13] !== v
      ? ((y = { mutationFn: h, onSuccess: g, onError: v }),
        (i[11] = h),
        (i[12] = g),
        (i[13] = v),
        (i[14] = y))
      : (y = i[14]),
    o(y)
  );
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = h()),
      i(),
      s(),
      p(),
      A(),
      y(),
      d(),
      k(),
      j(),
      D(),
      v(),
      x(),
      N(),
      g(),
      l(),
      m(),
      (R =
        "Review the code changes against the base branch '{baseBranch}'. The merge base commit for this comparison is {mergeBaseSha}. Run `git diff {mergeBaseSha}` to inspect the changes relative to {baseBranch}. Provide concise, actionable feedback in a normal Markdown response."),
      (z = `Review the current code changes (staged, unstaged, and untracked files) and provide concise, actionable feedback in a normal Markdown response.`));
  }))();
}
export { F as n, I as r, B as t };
//# sourceMappingURL=code-review-d9eaf43ac782.js.map
