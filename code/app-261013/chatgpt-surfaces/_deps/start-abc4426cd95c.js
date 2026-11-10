const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./hosted-9282d376d299.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./target-2990e1e26a79.js",
      "./plugin-suggestion-lifecycle-305832bb6064.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CM as t,
  Gdt as n,
  Rnt as r,
  TM as i,
  _I as a,
  fPt as o,
  gI as s,
  n7 as c,
  pPt as l,
  rst as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  A9 as d,
  GRt as f,
  Idn as p,
  Ldn as m,
  Met as h,
  Mlr as g,
  Net as _,
  QDr as v,
  URt as y,
  WRt as b,
  XDr as x,
  XMr as S,
  XPr as C,
  XTt as w,
  YPr as T,
  YTt as E,
  aIr as D,
  hOr as O,
  k9 as k,
  oIr as A,
  pOr as j,
  tNr as M,
} from "./app-initial-5851df3f6cb1.js";
import { i as N, n as P, r as F, t as I } from "./target-2990e1e26a79.js";
function L(e, t, n) {
  v(e, c, { feature: `onboarding`, action: n, pluginId: g(t.plugin.plugin) });
}
function R() {
  return (R = e(() => {
    (r(), x());
  }))();
}
async function z(e, t, r) {
  let { target: a } = t,
    c = p(t.plugin),
    l = s(t.plugin.plugin.id),
    u = e
      .get(A)
      .formatMessage(
        {
          id: `plugins.onboarding.prompt`,
          defaultMessage: `Help me set up {plugin} with the {skill} skill`,
          description: `User message sent after choosing plugin setup; plugin and skill are clickable mentions`,
        },
        {
          plugin: i(`@${c}`, l),
          skill: i(`${a.type === `chatgpt` ? `@` : `$`}${t.skill.name}`, t.skill.path),
        },
      );
  if (
    !I(e, a) ||
    !e.get(N, a) ||
    (a.account != null && (e.get(j) !== a.account.accountId || e.get(S) !== a.account.userId))
  )
    return {
      status: `failed`,
      message: e
        .get(A)
        .formatMessage({
          id: `plugins.onboarding.startFailed`,
          defaultMessage: `Couldn’t start setup. Please try again`,
          description: `Error when starting a plugin setup conversation fails`,
        }),
    };
  if (a.type === `chatgpt`) {
    let { startChatGptPluginOnboarding: t } = await o(
      async () => {
        let { startChatGptPluginOnboarding: e } = await import(`./hosted-9282d376d299.js`);
        return { startChatGptPluginOnboarding: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url,
    );
    return t(e, a, u);
  }
  let d = [
    { type: `mention`, name: c, path: l },
    { type: `skill`, name: t.skill.name, path: t.skill.path },
  ];
  if (a.conversationId != null) {
    let t = await _(e, a.hostId, null);
    await B(e, a);
    let r;
    try {
      await w(e, a.hostId, a.conversationId, {
        prompt: u,
        inputItems: d,
        turnTrigger: `plugin_onboarding`,
        serviceTier: t,
      });
    } catch (e) {
      r = n(e);
    }
    return { status: `started`, route: P(a, a.conversationId), message: r };
  }
  let m = (t) =>
      t.status === `failed`
        ? t
        : t.status === `created`
          ? { status: `started`, route: P(a, t.conversationId), message: y(e, t)?.message }
          : { status: `outcome-unknown`, message: y(e, t).message },
    h = !1,
    g,
    v = async (e) => {
      ((g = e), h && (await r?.(m(e))));
    };
  if (a.hostId === `durable`) {
    let t = await f(
      e,
      a.hostId,
      {
        input: [{ type: `text`, text: u, text_elements: [] }, ...d],
        cwd: `~`,
        workspaceRoots: [`~`],
        workspaceKind: `projectless`,
        cloudThreadPrototype: !0,
        collaborationMode: null,
        serviceTier: null,
        useAppServerPermissionDefault: !0,
        turnTrigger: `plugin_onboarding`,
      },
      { onSettled: v },
    );
    return ((h = !0), m(g ?? t));
  }
  let b = await k({
    scope: e,
    additionalUserInput: d,
    model: void 0,
    thinking: void 0,
    prompt: u,
    target: { type: `projectless` },
    turnTrigger: `plugin_onboarding`,
    onSettled: v,
  });
  if (((h = !0), b.kind !== `creation`)) throw Error(`Plugin setup requires a local conversation`);
  return m(g ?? b.result);
}
async function B(e, t) {
  let n = t.pendingElicitationReply;
  if (n != null)
    try {
      await T(e, t.hostId).replyWithMcpServerElicitationResponse(n.conversationId, n.requestId, n.response);
    } catch {
      throw Error(
        e
          .get(A)
          .formatMessage({
            id: `plugins.onboarding.installCompletionFailed`,
            defaultMessage: `Couldn’t complete installation. Please try again`,
            description: `Error when continuing after installation or starting setup cannot resume the conversation's pending plugin installation request`,
          }),
      );
    }
}
function V() {
  return (V = e(() => {
    (u(), m(), d(), C(), E(), b(), h(), O(), M(), a(), t(), D(), F(), l());
  }))();
}
export { L as a, R as i, V as n, z as r, B as t };
//# sourceMappingURL=start-abc4426cd95c.js.map
