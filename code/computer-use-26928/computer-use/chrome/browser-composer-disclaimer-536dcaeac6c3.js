import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BEt as t,
  Cft as n,
  Ez as r,
  F5t as i,
  N5t as a,
  O5t as o,
  OAt as s,
  Pdt as c,
  Urn as l,
  Wrn as u,
  Yrn as d,
  _dn as f,
  cMt as p,
  d5t as m,
  dMt as h,
  lG as g,
  mcn as _,
  nDt as v,
  tDt as y,
  uG as b,
  uMt as x,
  v5t as S,
  zEt as C,
} from "./app-shared-7552fc8d5d82.js";
import {
  Akn as w,
  Aun as T,
  D2t as ee,
  GOn as te,
  J7 as ne,
  Mbn as E,
  Mkn as D,
  Mun as O,
  P2t as k,
  X7 as A,
  Y7 as j,
} from "./app-initial-3916b423772b.js";
import { Rf as M, gy as N, hy as P, zf as F } from "./app-primary-7b889402e22e.js";
function I(e) {
  let t = (0, R.c)(14),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ conversationId: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] !== n || t[4] !== r.children
    ? ((i = (0, z.jsx)(L, { conversationId: n, exclude: !0, children: r.children })),
      (t[3] = n),
      (t[4] = r.children),
      (t[5] = i))
    : (i = t[5]);
  let a;
  t[6] !== r || t[7] !== i
    ? ((a = (0, z.jsx)(j, { ...r, children: i })), (t[6] = r), (t[7] = i), (t[8] = a))
    : (a = t[8]);
  let o;
  t[9] === r ? (o = t[10]) : ((o = (0, z.jsx)(ne, { ...r })), (t[9] = r), (t[10] = o));
  let s;
  return (
    t[11] !== a || t[12] !== o
      ? ((s = (0, z.jsxs)(z.Fragment, { children: [a, o] })), (t[11] = a), (t[12] = o), (t[13] = s))
      : (s = t[13]),
    s
  );
}
function L(e) {
  let t = (0, R.c)(4),
    { children: n, conversationId: r, exclude: i } = e,
    o = i !== void 0 && i,
    s = a(N, r),
    c;
  return (
    t[0] !== n || t[1] !== o || t[2] !== s
      ? ((c = s === o ? null : (0, z.jsx)(z.Fragment, { children: n })),
        (t[0] = n),
        (t[1] = o),
        (t[2] = s),
        (t[3] = c))
      : (c = t[3]),
    c
  );
}
var R, z;
function B() {
  return (B = e(() => {
    ((R = f()), o(), P(), A(), (z = _()));
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
      ? ((a = (0, Z.jsx)(M, { className: n, placement: r, children: i })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a))
      : (a = t[5]),
    a
  );
}
function H(e) {
  let n = (0, X.c)(15),
    {
      conversationId: r,
      hasUserMessage: i,
      isTemporaryChat: a,
      placement: o,
      regulatedConnectorKindOverride: s,
    } = e,
    c = o === void 0 ? `thread` : o,
    { search: l } = S(),
    { data: u } = k(),
    d;
  n[0] !== i || n[1] !== a || n[2] !== c || n[3] !== l
    ? ((d = (a ?? t(l)) && !(i ?? c === `thread`)),
      (n[0] = i),
      (n[1] = a),
      (n[2] = c),
      (n[3] = l),
      (n[4] = d))
    : (d = n[4]);
  let f = d;
  if (u == null) return null;
  if (u.structure === `workspace`) {
    let e;
    return (
      n[5] !== u || n[6] !== r || n[7] !== f
        ? ((e = (0, Z.jsx)(J, { account: u, conversationId: r, isTemporaryChat: f })),
          (n[5] = u),
          (n[6] = r),
          (n[7] = f),
          (n[8] = e))
        : (e = n[8]),
      e
    );
  }
  let p;
  return (
    n[9] !== u.id || n[10] !== r || n[11] !== c || n[12] !== s || n[13] !== f
      ? ((p = (0, Z.jsx)(U, {
          accountId: u.id,
          conversationId: r,
          isTemporaryChat: f,
          placement: c,
          regulatedConnectorKindOverride: s,
        })),
        (n[9] = u.id),
        (n[10] = r),
        (n[11] = c),
        (n[12] = s),
        (n[13] = f),
        (n[14] = p))
      : (p = n[14]),
    p
  );
}
function U(e) {
  let t = (0, X.c)(12),
    {
      accountId: n,
      conversationId: r,
      isTemporaryChat: i,
      placement: a,
      regulatedConnectorKindOverride: o,
    } = e,
    s = x(`1831960162`);
  if (!h(`1831960162`) && !s) {
    let e;
    return (
      t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o
        ? ((e = (0, Z.jsx)(W, {
            accountId: n,
            conversationId: r,
            isTemporaryChat: i,
            placement: a,
            regulatedConnectorKindOverride: o,
          })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i),
          (t[3] = a),
          (t[4] = o),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let c;
  return (
    t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o || t[10] !== s
      ? ((c = (0, Z.jsx)(G, {
          conversationId: r,
          isTemporaryChat: i,
          placement: a,
          regulatedConnectorKindOverride: o,
          showAiServiceDisclaimer: s,
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function W(e) {
  let t = (0, X.c)(6),
    {
      accountId: r,
      conversationId: a,
      isTemporaryChat: o,
      placement: s,
      regulatedConnectorKindOverride: c,
    } = e,
    { userId: l } = b(),
    u = i(n),
    { data: d } = i(w),
    f = l != null && u === r,
    p = x(f && (d == null || d.age_status === `under_18`) ? `1639821169` : !1);
  if (!f) return null;
  let m;
  return (
    t[0] !== a || t[1] !== o || t[2] !== s || t[3] !== c || t[4] !== p
      ? ((m = (0, Z.jsx)(G, {
          conversationId: a,
          isTemporaryChat: o,
          placement: s,
          regulatedConnectorKindOverride: c,
          showAiServiceDisclaimer: p,
        })),
        (t[0] = a),
        (t[1] = o),
        (t[2] = s),
        (t[3] = c),
        (t[4] = p),
        (t[5] = m))
      : (m = t[5]),
    m
  );
}
function G(e) {
  let t = (0, X.c)(10),
    {
      conversationId: n,
      isTemporaryChat: r,
      placement: i,
      regulatedConnectorKindOverride: a,
      showAiServiceDisclaimer: o,
    } = e,
    s = globalThis.window?.__CODEX_BROWSER_SIDE_CHAT__ === !0;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, { ...Q.temporaryChat })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (o) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, { ...Q.aiService })), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a !== void 0) {
    if (a == null && (s || i === `home`)) return null;
    let e;
    t[2] === a
      ? (e = t[3])
      : ((e = (0, Z.jsx)(q, { regulatedConnectorKind: a })), (t[2] = a), (t[3] = e));
    let r = e,
      o = a != null || n == null,
      c;
    return (
      t[4] !== n || t[5] !== r || t[6] !== o
        ? ((c = o ? r : (0, Z.jsx)(I, { browser: !0, conversationId: n, children: r })),
          (t[4] = n),
          (t[5] = r),
          (t[6] = o),
          (t[7] = c))
        : (c = t[7]),
      c
    );
  }
  if (i === `home`) return null;
  let c;
  return (
    t[8] === n
      ? (c = t[9])
      : ((c = (0, Z.jsx)(K, { conversationId: n, isBrowserSideChat: s })), (t[8] = n), (t[9] = c)),
    c
  );
}
function K(e) {
  let t = (0, X.c)(6),
    { conversationId: n, isBrowserSideChat: r } = e,
    i = a(te, n ?? null);
  if (r && i == null) return null;
  let o;
  t[0] === i
    ? (o = t[1])
    : ((o = (0, Z.jsx)(q, { regulatedConnectorKind: i })), (t[0] = i), (t[1] = o));
  let s = o,
    c = i != null || n == null,
    l;
  return (
    t[2] !== n || t[3] !== s || t[4] !== c
      ? ((l = c ? s : (0, Z.jsx)(I, { browser: !0, conversationId: n, children: s })),
        (t[2] = n),
        (t[3] = s),
        (t[4] = c),
        (t[5] = l))
      : (l = t[5]),
    l
  );
}
function q(e) {
  let t = (0, X.c)(3),
    { regulatedConnectorKind: n } = e;
  if (n === `finance`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, { ...Q.finance })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `health`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, { ...Q.health })), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsx)(d, { ...Q.personal })), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function J(e) {
  "use forget";
  let t = (0, X.c)(13),
    { account: n, conversationId: r, isTemporaryChat: i } = e,
    o = globalThis.window?.__CODEX_BROWSER_SIDE_CHAT__ === !0,
    { data: c } = a(s, n.id),
    { data: l } = a(y, n.id);
  if (c == null) return null;
  let u = c.account.workspace_type === `early-access`;
  if (!u && l == null) return null;
  let f = c.account.name ?? n.name,
    p;
  if (l?.beta_settings.training_allowed === !0) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(d, { ...Q.workspaceResearchPartner, values: { link: Y } })), (t[0] = e))
      : (e = t[0]),
      (p = e));
  } else if (u) {
    let e;
    (t[1] === f
      ? (e = t[2])
      : ((e =
          f == null
            ? (0, Z.jsx)(d, { ...Q.earlyAccessWorkspaceWithoutName })
            : (0, Z.jsx)(d, { ...Q.earlyAccessWorkspace, values: { workspaceName: f } })),
        (t[1] = f),
        (t[2] = e)),
      (p = e));
  } else if (i) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(d, { ...Q.workspaceTemporaryChat })), (t[3] = e))
      : (e = t[3]),
      (p = e));
  } else if (c.account.ekm_config != null) {
    if (n.plan_type === `k12`) {
      let e;
      (t[4] === f
        ? (e = t[5])
        : ((e =
            f == null
              ? (0, Z.jsx)(d, { ...Q.encryptedK12WorkspaceWithoutName })
              : (0, Z.jsx)(d, { ...Q.encryptedK12Workspace, values: { workspaceName: f } })),
          (t[4] = f),
          (t[5] = e)),
        (p = e));
    } else {
      let e;
      (t[6] === f
        ? (e = t[7])
        : ((e =
            f == null
              ? (0, Z.jsx)(d, { ...Q.encryptedWorkspaceWithoutName })
              : (0, Z.jsx)(d, { ...Q.encryptedWorkspace, values: { workspaceName: f } })),
          (t[6] = f),
          (t[7] = e)),
        (p = e));
    }
  } else if (n.plan_type === `k12`) {
    let e;
    (t[8] === f
      ? (e = t[9])
      : ((e =
          f == null
            ? (0, Z.jsx)(d, { ...Q.k12WorkspaceWithoutName })
            : (0, Z.jsx)(d, { ...Q.k12Workspace, values: { workspaceName: f } })),
        (t[8] = f),
        (t[9] = e)),
      (p = e));
  } else {
    if (o) return null;
    let e;
    if (
      (t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, { ...Q.workspace })), (t[10] = e))
        : (e = t[10]),
      (p = e),
      r != null)
    ) {
      let e;
      return (
        t[11] === r
          ? (e = t[12])
          : ((e = (0, Z.jsx)(I, { browser: !0, conversationId: r, children: p })),
            (t[11] = r),
            (t[12] = e)),
        e
      );
    }
  }
  return p;
}
function Y(e) {
  return (0, Z.jsx)(T, {
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
    ((X = f()),
      o(),
      u(),
      m(),
      v(),
      g(),
      r(),
      D(),
      E(),
      c(),
      C(),
      ee(),
      O(),
      B(),
      p(),
      F(),
      (Z = _()),
      (Q = l({
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
  }))();
}
export { H as n, $ as r, V as t };
//# sourceMappingURL=browser-composer-disclaimer-536dcaeac6c3.js.map
