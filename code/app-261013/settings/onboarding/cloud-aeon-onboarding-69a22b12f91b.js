import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CPt as t, Jbt as n, SPt as r, hrt as i, rst as a, vrt as o } from "./app-shared-bbfeca5e5737.js";
import {
  A7 as s,
  BPr as c,
  C7 as l,
  GMr as u,
  GYt as d,
  Gor as f,
  Hor as p,
  Lwr as m,
  O7 as h,
  VPr as g,
  Vor as _,
  WYt as v,
  Wor as y,
  XMr as b,
  XPr as x,
  Y7 as S,
  YPr as C,
  Ymr as w,
  aIr as T,
  d1 as E,
  dDr as D,
  ehr as O,
  fbn as k,
  hDr as A,
  hbn as j,
  iR as M,
  iTr as N,
  mbn as P,
  oIr as F,
  p1 as I,
  pbn as L,
  q7 as R,
  qwr as z,
  rR as B,
  tNr as V,
  w7 as H,
  zor as U,
} from "./app-initial-5851df3f6cb1.js";
import { n as W, t as G } from "./pet-avatar-png-5e7c6a1d30f7.js";
async function K(e, t, n, r, i) {
  if (n == null || r == null)
    throw Error(
      e
        .get(F)
        .formatMessage(
          {
            id: `orbit.petSnapshot.signInRequired.productName`,
            defaultMessage: `Sign in to use this pet for your {dot}`,
            description: `Error when saving a local pet for the user's agent requires signing in. dot is a common noun for the agent and must remain untranslated.`,
          },
          { dot: `dot` },
        ),
    );
  let a = () => {
    if ((i.throwIfAborted(), e.get(u) !== n || e.get(b) !== r))
      throw Error(
        e
          .get(F)
          .formatMessage(
            {
              id: `orbit.petSnapshot.accountChanged.productName`,
              defaultMessage: `Your account changed while setting up your {dot}’s pet`,
              description: `Error when the signed-in identity changes while setting up the user's agent's pet. dot is a common noun for the agent and must remain untranslated.`,
            },
            { dot: `dot` },
          ),
      );
  };
  a();
  let o = await e.query.getOrFetch(h, t);
  a();
  let s = o?.id === t ? R([o]).find((e) => e.id === t) : void 0;
  if (s == null) throw Error(`The selected pet is unavailable`);
  let c = await G(s, i);
  a();
  let l = new FormData();
  l.append(`file`, c, `avatar.png`);
  let { snapshot: d } = await w.safePost(`/cloud-aeons/avatar-snapshots`, {
    additionalHeaders: { "ChatGPT-Account-Id": n },
    requestBody: l,
    expectedIdentity: { accountId: n, userId: r },
    assertRequestCurrent: a,
    signal: i,
    retry: !1,
  });
  return (a(), d);
}
function q() {
  return (q = e(() => {
    (V(), S(), s(), O(), T(), k(), W());
  }))();
}
async function J(e, { clientThreadId: r, draft: a, hostId: o, retryPendingDeletion: s = !1 }) {
  let c = d(e, { clientThreadId: r }, `profile_request`),
    l = e.get(u),
    f = e.get(b);
  if (l == null || f == null)
    return (
      c.finish(`failure`, `create_rejected`),
      {
        status: `rejected`,
        error: Error(
          e
            .get(F)
            .formatMessage(
              {
                id: `orbit.creation.signInRequired.productName`,
                defaultMessage: `Creating your {dot} requires a signed-in account`,
                description: `Error when creating the user's agent requires signing in. dot is a common noun for the agent and must remain untranslated.`,
              },
              { dot: `dot` },
            ),
        ),
      }
    );
  try {
    A(e);
  } catch (e) {
    return (c.finish(`failure`, `create_rejected`), { status: `rejected`, error: e });
  }
  let p = {
    hostId: o,
    title: L(a.name) ? e.get(F).formatMessage(P) : a.name,
    prompt: ``,
    hideUserMessage: !0,
    status: `creating`,
    submittedAtMs: Date.now(),
  };
  if ((N(e, r, p), s))
    try {
      await w.safePost(`/tbo/deletion-recovery`, {
        expectedIdentity: { accountId: l, userId: f },
        retry: `never`,
        signal: AbortSignal.timeout(3e4),
      });
    } catch (t) {
      return (
        c.finish(`failure`, `create_rejected`),
        N(e, r, { ...p, status: `failed` }),
        { status: `rejected`, error: t }
      );
    }
  let h,
    v,
    x = a.appearance?.avatar === `pet` ? (a.petId ?? e.get(H) ?? `default`) : null,
    S = c.stage(`client.create`),
    T = Date.now() + 12e4,
    E = AbortSignal.timeout(6e4),
    D = e.query.snapshot(y),
    O = !1;
  try {
    let t = x?.startsWith(`custom:`) ? await K(e, x, l, f, E) : void 0;
    if (e.get(u) !== l || e.get(b) !== f)
      throw Error(
        e
          .get(F)
          .formatMessage(
            {
              id: `orbit.creation.accountChanged.productName`,
              defaultMessage: `Your account changed while creating your {dot}`,
              description: `Error when the signed-in identity changes while creating the user's agent. dot is a common noun for the agent and must remain untranslated.`,
            },
            { dot: `dot` },
          ),
      );
    for (;;)
      try {
        ((O = !0),
          (h = await w.safePost(`/tbo`, {
            requestBody: {
              display_name: L(a.name) ? `` : a.name,
              ...(x == null
                ? { avatar: a.appearance?.avatar }
                : {
                    avatar_type: `codex-pet`,
                    avatar_manifest: { pet_id: x, snapshot: t },
                    avatar_url: t?.asset_pointer,
                  }),
              create_thread: !0,
              create_additional: a.isFirstAeon !== !0,
              should_initialize: !0,
            },
            expectedIdentity: { accountId: l, userId: f },
            retry: `never`,
            signal: AbortSignal.timeout(54e4),
          })));
        break;
      } catch (t) {
        if (!Y(t)) throw t;
        let n = Math.max(1e3, (t.retryAtMs ?? Date.now() + 5e3) - Date.now());
        if (
          Date.now() + n > T ||
          (await new Promise((e) => setTimeout(e, n)), e.get(u) !== l || e.get(b) !== f)
        )
          throw t;
      }
    if (h.root_thread_id == null) throw Error(`Creating your dot did not return its root thread`);
    ((v = h.root_thread_id),
      c.identify({ profileId: h.id, threadId: h.root_thread_id, roomId: h.messaging_room_id ?? void 0 }),
      S(`success`));
  } catch (n) {
    let a =
      n instanceof i &&
      n.responseStatus === 409 &&
      ((!n.errorCode?.startsWith(`cloud_aeon_`) &&
        /primary (?:dot|aeon) selection changed/i.test(n.message)) ||
        n.errorCode === `cloud_aeon_recovery_required` ||
        (n.errorCode == null &&
          n.message.includes(`Your existing dot must be recovered or deleted before creating another`)));
    return !O ||
      (n instanceof i &&
        n.responseStatus != null &&
        (([400, 401, 403, 404, 422, 429].includes(n.responseStatus) &&
          !n.errorCode?.startsWith(`cloud_aeon_`)) ||
          a ||
          (n.responseStatus === 503 &&
            (n.errorCode === `cloud_aeon_onboarding_config_unavailable` ||
              n.errorCode === `cloud_aeon_creation_state_unavailable`)) ||
          Y(n)))
      ? (S(`failure`, `create_rejected`),
        c.finish(`failure`, `create_rejected`),
        N(e, r, { ...p, status: `failed` }),
        { status: `rejected`, error: n })
      : (S(`unknown`, `create_unknown`),
        N(e, r, { ...p, status: `outcome-unknown`, requestId: r }),
        t.warning(`Orbit creation could not be confirmed`, { safe: {}, sensitive: { error: n } }),
        { status: `unknown` });
  }
  if (h.messaging_room_id == null)
    try {
      let e = await w.safePost(`/tbo/{tbo_id}/messaging-room`, {
        parameters: { path: { tbo_id: h.id } },
        expectedIdentity: { accountId: l, userId: f },
        retry: `never`,
      });
      if (e.messaging_room_id == null) throw Error(`Orbit messaging room is unavailable`);
      ((h = { ...h, ...e, root_thread_id: v }), c.identify({ roomId: e.messaging_room_id }));
    } catch (n) {
      return (
        c.finish(`unknown`, `create_unknown`),
        N(e, r, { ...p, status: `outcome-unknown`, requestId: r }),
        g(e.queryClient, [`primary-aeon`, l, f]),
        e.query.snapshot(_).invalidate(),
        D.invalidate(),
        t.warning(`Orbit messaging room could not be confirmed`, { safe: {}, sensitive: { error: n } }),
        { status: `unknown` }
      );
    }
  let k = n(v);
  if (e.get(u) !== l || e.get(b) !== f)
    return (
      c.finish(`cancelled`, `account_changed`),
      N(e, r, { ...p, status: `outcome-unknown`, requestId: r }),
      { status: `unknown` }
    );
  g(e.queryClient, [`primary-aeon`, l, f]);
  let j = c.stage(`client.resume`);
  try {
    (m(e, { clientThreadId: r, conversationId: k, hostId: o }),
      U(e, k, h),
      I(k, a),
      N(e, r, null),
      M(e, { accountId: l, userId: f, clientThreadId: r, conversationId: k, hostId: o }),
      e.query.snapshot(_).invalidate(),
      D.invalidate());
    let t = await C(e, o).resumeConversation({
      conversationId: k,
      preserveServerConfiguration: !0,
      model: null,
      reasoningEffort: null,
      workspaceRoots: [`/`],
    });
    t.status === `ready`
      ? j(`success`)
      : j(t.reason === `canceled` || t.reason === `inactive-window` ? `cancelled` : `unknown`, t.reason);
  } catch (e) {
    (j(`failure`, `load_failed`),
      t.warning(`Failed to load the created Orbit`, { safe: { threadId: k }, sensitive: { error: e } }));
  }
  return { status: `accepted`, orbitId: h.id, threadId: k };
}
function Y(e) {
  return (
    e instanceof i &&
    e.responseStatus === 409 &&
    (e.errorCode === `cloud_aeon_deletion_pending` ||
      (e.errorCode == null && /deletion is still in progress/i.test(e.message)))
  );
}
function X() {
  return (X = e(() => {
    (a(), x(), V(), l(), O(), T(), c(), z(), j(), r(), o(), E(), k(), f(), p(), B(), D(), v(), q());
  }))();
}
export { J as n, X as t };
//# sourceMappingURL=cloud-aeon-onboarding-69a22b12f91b.js.map
