import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  Cat as n,
  IDt as r,
  Pxt as i,
  Vxt as a,
  _xt as o,
  jDt as s,
  vzt as c,
  wat as l,
  wxt as u,
  xMt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Br as p,
  Fin as m,
  Hin as h,
  NDr as g,
  PZn as _,
  cXn as v,
  dMr as y,
  eDr as b,
  fMr as x,
  fur as S,
  h$n as C,
  nDr as w,
  p$n as T,
  pOr as E,
  pur as D,
  rDr as O,
  tPr as k,
  xPn as A,
  yPn as j,
  yjn as M,
  zOr as N,
  zr as P,
} from "./app-initial-5851df3f6cb1.js";
import { Uf as F, Wf as I } from "./app-primary-fe8a450b3b04.js";
function L(e) {
  let t = (0, R.c)(9),
    { context: n } = e,
    i;
  t[0] === n.businessName ? (i = t[1]) : ((i = n.businessName?.trim()), (t[0] = n.businessName), (t[1] = i));
  let a = i,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = (0, z.jsx)(`p`, {
        children: a
          ? (0, z.jsx)(r, {
              id: `chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.named`,
              defaultMessage: `{businessName} can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.`,
              values: { businessName: a },
              description: `Privacy disclosure below the composer in every organic or sponsored Business Agent chat. It reassures users that the business cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. The {businessName} placeholder is the advertiser-provided business display name and may be long. Allow the sentence to wrap.`,
            })
          : (0, z.jsx)(r, {
              id: `chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.unnamed`,
              defaultMessage: `This business can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.`,
              description: `Privacy disclosure below the composer in every organic or sponsored Business Agent chat when no business display name is available. It reassures users that the business operating the agent cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. Allow the sentence to wrap.`,
            }),
      })),
      (t[2] = a),
      (t[3] = o));
  let s;
  t[4] === n.notice
    ? (s = t[5])
    : ((s = n.notice?.trim() ? (0, z.jsx)(`p`, { children: n.notice }) : null),
      (t[4] = n.notice),
      (t[5] = s));
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, z.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [o, s] })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
var R, z;
function B() {
  return (B = e(() => {
    ((R = c()), s(), (z = d()));
  }))();
}
function V(e) {
  let t = (0, X.c)(6),
    n = e.placement === `home` ? `empty:hidden` : void 0,
    r = e.placement ?? `thread`,
    i;
  t[0] === e ? (i = t[1]) : ((i = (0, Z.jsx)(H, { ...e })), (t[0] = e), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== r || t[4] !== i
      ? ((a = (0, Z.jsx)(F, {
          browser: !0,
          children: (0, Z.jsx)(P, { className: n, placement: r, children: i }),
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a))
      : (a = t[5]),
    a
  );
}
function H(e) {
  let t = (0, X.c)(21),
    {
      aiServiceDisclaimer: n,
      conversationId: r,
      hasUserMessage: i,
      isTemporaryChat: a,
      ordinaryDisclaimer: o,
      placement: s,
      regulatedConnectorKindOverride: c,
    } = e,
    d = s === void 0 ? `thread` : s,
    { search: p } = u(),
    { data: m } = h(),
    g = f(v, r ?? null),
    y = f(_, g?.status === `ready` && c === void 0 ? (r ?? null) : null),
    b;
  t[0] !== i || t[1] !== a || t[2] !== d || t[3] !== p
    ? ((b = (a ?? l(p)) && !(i ?? d === `thread`)),
      (t[0] = i),
      (t[1] = a),
      (t[2] = d),
      (t[3] = p),
      (t[4] = b))
    : (b = t[4]);
  let x = b;
  if (m == null) return null;
  if (g != null) {
    if (g.status !== `ready`) return null;
    let e = c === void 0 ? y : c;
    if (e != null) {
      let n;
      return (
        t[5] !== e || t[6] !== o
          ? ((n = (0, Z.jsx)(q, { ordinaryDisclaimer: o, regulatedConnectorKind: e })),
            (t[5] = e),
            (t[6] = o),
            (t[7] = n))
          : (n = t[7]),
        n
      );
    }
    let n;
    return (
      t[8] === g.context
        ? (n = t[9])
        : ((n = (0, Z.jsx)(L, { context: g.context })), (t[8] = g.context), (t[9] = n)),
      n
    );
  }
  if (m.structure === `workspace`) {
    let e;
    return (
      t[10] !== m || t[11] !== x
        ? ((e = (0, Z.jsx)(J, { account: m, isTemporaryChat: x })), (t[10] = m), (t[11] = x), (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  let S;
  return (
    t[13] !== m.id || t[14] !== n || t[15] !== r || t[16] !== o || t[17] !== d || t[18] !== c || t[19] !== x
      ? ((S = (0, Z.jsx)(U, {
          accountId: m.id,
          aiServiceDisclaimer: n,
          conversationId: r,
          isTemporaryChat: x,
          ordinaryDisclaimer: o,
          placement: d,
          regulatedConnectorKindOverride: c,
        })),
        (t[13] = m.id),
        (t[14] = n),
        (t[15] = r),
        (t[16] = o),
        (t[17] = d),
        (t[18] = c),
        (t[19] = x),
        (t[20] = S))
      : (S = t[20]),
    S
  );
}
function U(e) {
  let t = (0, X.c)(16),
    {
      accountId: n,
      aiServiceDisclaimer: r,
      conversationId: i,
      isTemporaryChat: a,
      ordinaryDisclaimer: o,
      placement: s,
      regulatedConnectorKindOverride: c,
    } = e,
    l = w(`1831960162`);
  if (!O(`1831960162`) && !l) {
    let e;
    return (
      t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== s || t[6] !== c
        ? ((e = (0, Z.jsx)(W, {
            accountId: n,
            aiServiceDisclaimer: r,
            conversationId: i,
            isTemporaryChat: a,
            ordinaryDisclaimer: o,
            placement: s,
            regulatedConnectorKindOverride: c,
          })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i),
          (t[3] = a),
          (t[4] = o),
          (t[5] = s),
          (t[6] = c),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let u;
  return (
    t[8] !== r || t[9] !== i || t[10] !== a || t[11] !== o || t[12] !== s || t[13] !== c || t[14] !== l
      ? ((u = (0, Z.jsx)(G, {
          aiServiceDisclaimer: r,
          conversationId: i,
          isTemporaryChat: a,
          ordinaryDisclaimer: o,
          placement: s,
          regulatedConnectorKindOverride: c,
          showAiServiceDisclaimer: l,
        })),
        (t[8] = r),
        (t[9] = i),
        (t[10] = a),
        (t[11] = o),
        (t[12] = s),
        (t[13] = c),
        (t[14] = l),
        (t[15] = u))
      : (u = t[15]),
    u
  );
}
function W(e) {
  let t = (0, X.c)(8),
    {
      accountId: n,
      aiServiceDisclaimer: r,
      conversationId: i,
      isTemporaryChat: o,
      ordinaryDisclaimer: s,
      placement: c,
      regulatedConnectorKindOverride: l,
    } = e,
    { userId: u } = D(),
    d = a(E),
    { data: f } = a(T),
    p = u != null && d === n,
    m = w(p && (f == null || f.age_status === `under_18`) ? `1639821169` : !1);
  if (!p) return null;
  let h;
  return (
    t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== s || t[4] !== c || t[5] !== l || t[6] !== m
      ? ((h = (0, Z.jsx)(G, {
          aiServiceDisclaimer: r,
          conversationId: i,
          isTemporaryChat: o,
          ordinaryDisclaimer: s,
          placement: c,
          regulatedConnectorKindOverride: l,
          showAiServiceDisclaimer: m,
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = o),
        (t[3] = s),
        (t[4] = c),
        (t[5] = l),
        (t[6] = m),
        (t[7] = h))
      : (h = t[7]),
    h
  );
}
function G(e) {
  let t = (0, X.c)(9),
    {
      aiServiceDisclaimer: n,
      conversationId: i,
      isTemporaryChat: a,
      ordinaryDisclaimer: o,
      placement: s,
      regulatedConnectorKindOverride: c,
      showAiServiceDisclaimer: l,
    } = e,
    u = globalThis.window?.__CODEX_BROWSER_SIDE_CHAT__ === !0;
  if (a) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(r, { ...Q.temporaryChat })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (l) {
    let e;
    return (
      t[1] === n ? (e = t[2]) : ((e = n ?? (0, Z.jsx)(r, { ...Q.aiService })), (t[1] = n), (t[2] = e)),
      e
    );
  }
  if (c !== void 0) {
    if (c == null && (u || s === `home`)) return null;
    let e;
    return (
      t[3] !== o || t[4] !== c
        ? ((e = (0, Z.jsx)(q, { ordinaryDisclaimer: o, regulatedConnectorKind: c })),
          (t[3] = o),
          (t[4] = c),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (s === `home`) return null;
  let d;
  return (
    t[6] !== i || t[7] !== o
      ? ((d = (0, Z.jsx)(K, { conversationId: i, isBrowserSideChat: u, ordinaryDisclaimer: o })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
function K(e) {
  let t = (0, X.c)(3),
    { conversationId: n, isBrowserSideChat: r, ordinaryDisclaimer: i } = e,
    a = f(_, n ?? null);
  if (r && a == null) return null;
  let o;
  return (
    t[0] !== i || t[1] !== a
      ? ((o = (0, Z.jsx)(q, { ordinaryDisclaimer: i, regulatedConnectorKind: a })),
        (t[0] = i),
        (t[1] = a),
        (t[2] = o))
      : (o = t[2]),
    o
  );
}
function q(e) {
  let t = (0, X.c)(4),
    { ordinaryDisclaimer: n, regulatedConnectorKind: i } = e;
  if (i === `finance`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(r, { ...Q.finance })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i === `health`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(r, { ...Q.health })), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let a;
  return (t[2] === n ? (a = t[3]) : ((a = n ?? (0, Z.jsx)(r, { ...Q.personal })), (t[2] = n), (t[3] = a)), a);
}
function J(e) {
  "use forget";
  let t = (0, X.c)(8),
    { account: n, isTemporaryChat: i } = e,
    a = globalThis.window?.__CODEX_BROWSER_SIDE_CHAT__ === !0,
    { data: o } = f(k, n.id),
    { data: s } = f(y, n.id);
  if (o == null) return null;
  let c = o.account.workspace_type === `early-access`;
  if (!c && s == null) return null;
  let l = o.account.name ?? n.name,
    u;
  if (s?.beta_settings.training_allowed === !0) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(r, { ...Q.workspaceResearchPartner, values: { link: Y } })), (t[0] = e))
      : (e = t[0]),
      (u = e));
  } else if (c) {
    let e;
    (t[1] === l
      ? (e = t[2])
      : ((e =
          l == null
            ? (0, Z.jsx)(r, { ...Q.earlyAccessWorkspaceWithoutName })
            : (0, Z.jsx)(r, { ...Q.earlyAccessWorkspace, values: { workspaceName: l } })),
        (t[1] = l),
        (t[2] = e)),
      (u = e));
  } else if (i) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(r, { ...Q.workspaceTemporaryChat })), (t[3] = e))
      : (e = t[3]),
      (u = e));
  } else if (o.account.ekm_config != null) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(r, { ...Q.encryptedWorkspace })), (t[4] = e))
      : (e = t[4]),
      (u = e));
  } else if (n.plan_type === `k12`) {
    let e;
    (t[5] === l
      ? (e = t[6])
      : ((e =
          l == null
            ? (0, Z.jsx)(r, { ...Q.k12WorkspaceWithoutName })
            : (0, Z.jsx)(r, { ...Q.k12Workspace, values: { workspaceName: l } })),
        (t[5] = l),
        (t[6] = e)),
      (u = e));
  } else {
    if (a) return null;
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(r, { ...Q.workspace })), (t[7] = e))
      : (e = t[7]),
      (u = e));
  }
  return u;
}
function Y(e) {
  return (0, Z.jsx)(j, {
    className: `cursor-interaction underline underline-offset-2 hover:text-default`,
    href: `https://help.openai.com/articles/20001245`,
    initiator: `open_in_browser_bridge`,
    isBrowserEnabled: !1,
    children: e,
  });
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = c()),
      i(),
      s(),
      o(),
      x(),
      S(),
      B(),
      N(),
      C(),
      M(),
      g(),
      n(),
      m(),
      A(),
      I(),
      b(),
      p(),
      (Z = d()),
      (Q = t({
        finance: {
          id: `mattressFinanceDisclaimer.composerDisclaimer`,
          defaultMessage: `ChatGPT can make mistakes and isn’t a licensed investment adviser or authorized to prepare tax returns.`,
          description: `Footer disclaimer shown below the ChatGPT Personal Finance chat composer on web and below the regular Chat composer after a Finance app, connector, or plugin is selected or invoked. Legal/regulatory context: U.S.-specific. ‘Licensed investment adviser’ refers to a regulated, licensed/registered professional (e.g., SEC/state registered). ‘Prepare tax returns’ means preparing and filing tax return documents for tax authorities (not ‘tax refunds’). Keep the tone as a legal disclaimer.`,
        },
        health: {
          id: `potion.footerDisclaimer.medicalDisclaimer`,
          defaultMessage: `ChatGPT can make mistakes and isn't intended for diagnosis or treatment. Consult a doctor for medical advice.`,
          description: `Medical disclaimer under the Health message composer`,
        },
        aiService: {
          id: `codex.composer.browserDisclaimer.aiService`,
          defaultMessage: `ChatGPT is AI and can make mistakes. Check important info.`,
          description: `Compact legal disclosure beside the ChatGPT composer on Home and in conversations for eligible personal-account users. It explicitly identifies ChatGPT as artificial intelligence and reminds users to verify important information. Keep both sentences together; the footer may wrap on narrow screens.`,
        },
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
          id: `codex.composer.browserDisclaimer.encryptedWorkspaceData`,
          defaultMessage: `ChatGPT can make mistakes. OpenAI doesn’t train on your workspace data, which is encrypted with keys managed by your organization.`,
          description: `Legal and privacy disclosure above the browser composer for Business, Enterprise, and ChatGPT for Teachers workspaces protected by organization-managed cryptographic encryption keys. Reassures members that OpenAI does not train on their workspace data and that their organization manages its encryption keys. Uses the same generic ChatGPT wording regardless of the workspace name or plan.`,
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
      })));
  }))();
}
export { H as n, $ as r, V as t };
//# sourceMappingURL=browser-composer-disclaimer-96976c4a903c.js.map
