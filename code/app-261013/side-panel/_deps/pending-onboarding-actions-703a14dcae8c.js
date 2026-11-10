import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  Bpt as n,
  Dyt as r,
  EPt as i,
  JSt as a,
  Jbt as o,
  Kat as s,
  Pxt as c,
  Qvt as l,
  TLt as u,
  fLt as d,
  hot as f,
  jDt as p,
  lot as m,
  pLt as h,
  qat as g,
  rst as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Rt as v,
  FFr as y,
  GMr as b,
  Lwr as x,
  Met as S,
  Net as ee,
  QRt as te,
  Rgr as ne,
  XMr as C,
  XPr as w,
  YPr as T,
  Zwr as E,
  _Ct as D,
  _Q as O,
  cQ as k,
  dYr as re,
  fhr as ie,
  hQ as A,
  iTr as j,
  lkn as ae,
  mYr as M,
  mhr as oe,
  omr as N,
  phr as P,
  qwr as F,
  smr as I,
  tNr as L,
  vCt as se,
  yQ as R,
  zFr as z,
  zgr as B,
} from "./app-initial-5851df3f6cb1.js";
import { nl as V, rl as H } from "./app-primary-fe8a450b3b04.js";
import { n as U, r as W, t as G } from "./pending-onboarding-dd037c83320c.js";
function K() {
  return (K = e(() => {
    (i(), h({ error: h({ code: d().int(), message: u() }) }));
  }))();
}
async function ce(
  e,
  t,
  {
    name: r,
    githubRepositories: i,
    networkPolicy: c,
    modelSettings: l,
    legacyEnvironmentId: u,
    repositoryNamesById: d,
    initialPrompt: f,
    existingConfig: p,
    onConfigurationCreated: m,
    onConfigurationReady: h,
    onConnected: g,
    onConversationReady: _,
    onOutcomeUnknown: v,
  },
) {
  let y = e.get(b),
    x = e.get(C);
  if (s?.environmentConfigs == null || y == null || x == null)
    throw Error(
      t.formatMessage({
        id: `restricted.environmentSetup.onboarding.unavailable`,
        defaultMessage: `Cloud environment setup is unavailable`,
        description: `Error when the Desktop environment onboarding service or account is unavailable`,
      }),
    );
  let S = Symbol(`service-tier-timeout`),
    w = await ae(ee(e, N(), l.model), S, Date.now() + 3e4);
  if (w === S)
    throw Error(
      t.formatMessage({
        id: `restricted.environmentSetup.onboarding.connectionTimeout`,
        defaultMessage: `Could not connect to cloud setup. Check your connection and try again`,
        description: `Error when the cloud app-server does not respond before creating an environment or setup chat`,
      }),
    );
  J(e, t, y, x);
  let E = await s.environmentConfigs.request(
    p == null
      ? {
          method: `POST`,
          accountId: y,
          userId: x,
          body:
            u == null
              ? {
                  name: r,
                  repositories: i.map(({ repository: e }) => ({
                    repository_id: e.id,
                    ref: e.default_branch,
                  })),
                  network_policy: c,
                  share_settings: `private`,
                  start_onboarding: !1,
                }
              : { legacy_environment_id: u, start_onboarding: !0 },
        }
      : { method: `GET`, accountId: y, userId: x, configId: p.id },
  );
  if (!E.ok)
    throw u != null &&
      E.status === 400 &&
      E.message ===
        `Could not access this environment's GitHub repository. Make sure it still exists and your connected GitHub account has access, then try again.`
      ? new X(
          t.formatMessage({
            id: `environmentSetup.onboarding.repositoryNotAccessible`,
            defaultMessage: `We couldn't access this environment's GitHub repository. Check that it still exists and that your connected GitHub account can open it, then try again.`,
            description: `Error when converting a legacy cloud environment whose GitHub repository is missing or inaccessible to the connected GitHub account`,
          }),
        )
      : Error(
          t.formatMessage(
            {
              id: `restricted.environmentSetup.onboarding.createFailed`,
              defaultMessage: `Could not start cloud environment setup ({reason})`,
              description: `Error when the ASB environment onboarding request fails`,
            },
            { reason: E.status == null ? E.error : `HTTP ${E.status}` },
          ),
        );
  J(e, t, y, x);
  let D = { ...E.config, onboarding_skill: E.config.onboarding_skill ?? p?.onboarding_skill };
  m?.(D);
  let O = d ?? Object.fromEntries(i.map(({ repository: e }) => [e.id, e.repository_full_name])),
    j =
      u == null
        ? i.map(({ repository: e }) => ({ name: e.repository_full_name, ref: e.default_branch }))
        : (D.draft ?? D).repositories.map(({ repository_id: e, ref: t }) => ({ name: O[e] ?? e, ref: t })),
    M =
      D.onboarding_skill == null
        ? (f ?? (D.thread_id == null ? q(t, `cloud-environment-onboarding:setup`) : q(t)))
        : q(t, D.onboarding_skill),
    P = T(e, N()),
    F = [
      { type: `text`, text: `${JSON.stringify({ repositories: j })}\n\n${re}`, text_elements: [] },
      { type: `text`, text: M, text_elements: [] },
    ],
    I = (n) => {
      (J(e, t, y, x),
        oe(e, n, ie(e, D.environment_id ?? null)),
        e.get(A, n) ??
          a(e, (e) => {
            (k(e, n, { name: D.name, repositories: j.map(({ name: e }) => e), githubRepository: i?.[0] }),
              R(e, n, { accountId: y, userId: x, configId: D.id, name: D.name, repositoryNamesById: O }));
          }),
        h?.(n, M));
    };
  if (D.thread_id == null) {
    let r = te(e, N()),
      i = n(),
      a = await P.startConversation(
        {
          input: F,
          turnTrigger: `environment_onboarding`,
          skipAutoTitleGeneration: !0,
          initialTitle: t.formatMessage(Z.title, { environmentName: D.name }),
          cwd: `/workspace`,
          workspaceRoots: [`/workspace`, `/tmp`],
          collaborationMode: {
            mode: `default`,
            settings: { model: l.model, reasoning_effort: l.reasoningEffort, developer_instructions: null },
          },
          serviceTier: w,
          serviceName: `codex_cloud`,
          mode: `default`,
          cloudThreadPrototype: !0,
          useAppServerPermissionDefault: !0,
        },
        {
          readThreadCreationInputs: async (n, i) => ({
            ...(await r.readCreationInputs(n, i)),
            readEnvironments: async () => (
              J(e, t, y, x),
              {
                environments: [],
                usesDeferredEnvironment: !0,
                savedEnvironmentConfig: {
                  environmentConfigId: D.id,
                  onboarding: !0,
                  accountId: y,
                  userId: x,
                },
              }
            ),
          }),
          afterConversationCreated: async (e) => {
            ((D = { ...D, thread_id: e }),
              m?.(D),
              I(e),
              await P.setThreadTitle(e, t.formatMessage(Z.title, { environmentName: D.name })));
          },
          beforeFirstTurn: ({ conversationId: n }) => {
            (J(e, t, y, x), g?.(), _?.(n));
          },
          onSettled: i.resolve,
        },
      );
    if (
      (a.status === `outcome-unknown` && (v?.(a.requestId), (a = await i.promise)),
      a.status === `outcome-unknown`)
    )
      return { conversationId: null, config: D };
    if (a.status === `failed`) throw Error(a.message);
    if (a.firstTurn.status === `not-started` || a.firstTurn.status === `rejected`)
      throw Error(a.firstTurn.message);
    return (J(e, t, y, x), { conversationId: a.conversationId, config: D });
  }
  if (D.environment_id == null)
    throw Error(
      t.formatMessage({
        id: `restricted.environmentSetup.onboarding.missingTask`,
        defaultMessage: `The server saved the configuration but did not return a setup chat`,
        description: `Error when an older ASB does not support environment onboarding`,
      }),
    );
  let L = o(D.thread_id);
  return (
    I(L),
    await P.resumeConversation(
      {
        conversationId: L,
        model: null,
        serviceTier: w,
        reasoningEffort: null,
        workspaceRoots: [`/workspace`, `/tmp`],
        collaborationMode: null,
        useAppServerPermissionDefault: !0,
      },
      { readResumeInputs: ne(e, N()) },
    ),
    J(e, t, y, x),
    g?.(),
    await P.updateThreadSettingsForNextTurn(L, { model: l.model, effort: l.reasoningEffort }),
    J(e, t, y, x),
    await P.setThreadTitle(L, t.formatMessage(Z.title, { environmentName: D.name }), { onlyIfUntitled: !0 }),
    J(e, t, y, x),
    _?.(L),
    await P.startTurn(L, {
      request: { turnTrigger: `environment_onboarding`, threadId: L, input: F, serviceTier: w },
    }),
    J(e, t, y, x),
    { conversationId: L, config: D }
  );
}
function q(e, t) {
  return t == null
    ? e.formatMessage(Z.prompt)
    : e.formatMessage(
        {
          id: `restricted.environmentSetup.onboarding.skillPrompt`,
          defaultMessage: `Use {skill} to set up this cloud environment`,
          description: `First onboarding message explicitly invoking the required setup skill. The skill placeholder is an exact invocation and must not be translated`,
        },
        { skill: `$${t}` },
      );
}
function J(e, t, n, r) {
  if (e.get(b) !== n || e.get(C) !== r)
    throw Error(
      t.formatMessage({
        id: `restricted.environmentSetup.onboarding.accountChanged`,
        defaultMessage: `Your account changed while creating the environment`,
        description: `Error when the selected account changes during environment creation`,
      }),
    );
}
var Y, X, Z;
function Q() {
  return (Q = e(() => {
    (c(),
      _(),
      K(),
      M(),
      p(),
      w(),
      v(),
      B(),
      S(),
      L(),
      P(),
      I(),
      g(),
      O(),
      (Y = `cloud-environment-onboarding:setup`),
      (X = class extends Error {}),
      (Z = t({
        prompt: {
          id: `restricted.environmentSetup.onboarding.prompt`,
          defaultMessage: `First ask me what I want to get running and discuss any needed details with me. Wait for my response before setting up this cloud environment`,
          description: `First user message directing the setup agent to ask what the user wants to run and wait for their response before starting setup`,
        },
        title: {
          id: `restricted.environmentSetup.onboarding.title`,
          defaultMessage: `Set up {environmentName}`,
          description: `Sidebar title for the chat that sets up the named cloud environment`,
        },
      })));
  }))();
}
function le(e, t, n) {
  let i = e.get(b),
    a = e.get(C);
  if (n.legacyEnvironmentId != null) {
    for (let [t, r] of e.get(W))
      if (
        r.accountId === i &&
        r.userId === a &&
        r.inputs.legacyEnvironmentId === n.legacyEnvironmentId &&
        e.get(E, t) != null
      )
        return t;
  }
  let o = r(),
    s = {
      hostId: N(),
      prompt: q(t, Y),
      title: t.formatMessage(Z.title, { environmentName: n.name }),
      status: `queued`,
    };
  return (
    j(e, o, s),
    e.set(
      W,
      (t) =>
        new Map([
          ...[...t].filter(([t]) => e.get(E, t) != null),
          [
            o,
            {
              accountId: i,
              userId: a,
              name: n.name,
              inputs: { ...n, initialPrompt: s.prompt },
              config: null,
              conversationId: null,
              stage: `creating`,
            },
          ],
        ]),
    ),
    o
  );
}
async function ue(e, t, n, r) {
  let i = e.get(U, r),
    o = e.get(E, r);
  if (i == null || o == null || (o.status !== `queued` && o.status !== `failed`)) return;
  let s = { ...o, status: `creating`, errorMessage: void 0 };
  a(e, () => {
    (j(e, r, s),
      e.set(W, (e) => new Map(e).set(r, { ...i, stage: i.config == null ? `creating` : `connecting` })));
  });
  let c = () => e.get(E, r) === s && e.get(b) === i.accountId && e.get(C) === i.userId;
  function u() {
    e.set(W, (e) => {
      let t = new Map(e);
      return (t.delete(r), t);
    });
  }
  try {
    let o = await ce(e, t, {
      ...i.inputs,
      existingConfig: i.config,
      onOutcomeUnknown: (t) => {
        c() && ((s = { ...s, status: `outcome-unknown`, requestId: t }), j(e, r, s));
      },
      onConfigurationCreated: (t) => {
        c() &&
          e.set(W, (e) => {
            let n = e.get(r);
            return n == null ? e : new Map(e).set(r, { ...n, config: t });
          });
      },
      onConfigurationReady: (t, n) => {
        c() &&
          a(e, () => {
            ((s = { ...s, prompt: n }),
              j(e, r, s),
              e.set(W, (e) => {
                let n = e.get(r);
                return n == null ? e : new Map(e).set(r, { ...n, conversationId: t, stage: `connecting` });
              }));
          });
      },
      onConnected: () => {
        c() &&
          e.set(W, (e) => {
            let t = e.get(r);
            return t == null ? e : new Map(e).set(r, { ...t, stage: `starting` });
          });
      },
      onConversationReady: (t) => {
        c() &&
          (x(e, { clientThreadId: r, conversationId: t, hostId: N() }),
          u(),
          e.get(y)?.pathname === l(r) && n(D(l(t), N()), { replace: !0 }));
      },
    });
    c() && o.conversationId != null && (j(e, r, null), u());
  } catch (n) {
    if (e.get(E, r) !== s) return;
    if (e.get(b) !== i.accountId || e.get(C) !== i.userId) {
      (j(e, r, null), u());
      return;
    }
    (j(
      e,
      r,
      e.get(W).has(r) ? { ...s, status: `failed`, errorMessage: n instanceof X ? n.message : void 0 } : null,
    ),
      e
        .get(f)
        .danger(
          n instanceof X
            ? t.formatMessage({
                id: `environmentSetup.onboarding.migrationFailed`,
                defaultMessage: `We couldn't finish the migration`,
                description: `Heading of an error toast when migrating a legacy cloud environment`,
              })
            : V(n, t),
          {
            description: n instanceof X ? n.message : void 0,
            errorAnalytics: { toastId: `createDialog.CloudEnvironmentCreateDialog` },
          },
        ));
  }
}
function $() {
  return ($ = e(() => {
    (c(), _(), L(), H(), m(), I(), z(), F(), se(), Q(), G());
  }))();
}
export { le as n, ue as r, $ as t };
//# sourceMappingURL=pending-onboarding-actions-703a14dcae8c.js.map
