import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  EPt as r,
  Iot as i,
  Ixt as a,
  JIt as o,
  Lot as s,
  Pxt as c,
  SPt as l,
  TLt as u,
  nst as d,
  tst as f,
  vzt as p,
  wot as m,
  xLt as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as _,
  Ggr as v,
  HPr as y,
  UPr as b,
  XPr as x,
  YPr as S,
  dO as C,
  lO as w,
  oft as T,
  sft as E,
  t_r as D,
} from "./app-initial-5851df3f6cb1.js";
function O(e, t) {
  let n = Object.fromEntries(t.map(({ keyPath: e, value: t }) => [A[e], t]));
  return Object.assign(structuredClone(e), { memories: k(e.memories, n) });
}
function k(e, t) {
  let n = j.safeParse(e),
    r = n.success ? { ...n.data } : {};
  for (let [e, n] of Object.entries(t)) n == null ? delete r[e] : (r[e] = n);
  return r;
}
var A, j;
function M() {
  return (M = e(() => {
    (r(),
      (A = {
        "memories.generate_memories": `generate_memories`,
        "memories.use_memories": `use_memories`,
        "memories.disable_on_external_context": `disable_on_external_context`,
        "memories.no_memories_if_mcp_or_web_search": `no_memories_if_mcp_or_web_search`,
        "memories.max_raw_memories_for_consolidation": `max_raw_memories_for_consolidation`,
        "memories.max_unused_days": `max_unused_days`,
        "memories.max_rollout_age_days": `max_rollout_age_days`,
        "memories.max_rollouts_per_startup": `max_rollouts_per_startup`,
        "memories.min_rollout_idle_hours": `min_rollout_idle_hours`,
        "memories.extract_model": `extract_model`,
        "memories.consolidation_model": `consolidation_model`,
      }),
      (j = h(u(), o())));
  }))();
}
function N(e) {
  let r = (0, F.c)(17),
    i = a(n),
    o = d(),
    { data: c } = g(D, e),
    l = y(),
    u;
  r[0] === e ? (u = r[1]) : ((u = [...b, e]), (r[0] = e), (r[1] = u));
  let f = u,
    p;
  r[2] !== e || r[3] !== i || r[4] !== c?.configWriteTarget?.filePath
    ? ((p = (t) =>
        S(i, e).sendRequest(`config/batchWrite`, {
          edits: t.edits.map(P),
          filePath: c?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        })),
      (r[2] = e),
      (r[3] = i),
      (r[4] = c?.configWriteTarget?.filePath),
      (r[5] = p))
    : (p = r[5]);
  let m, h;
  r[6] !== o || r[7] !== f
    ? ((m = async (e) => {
        await o.cancelQueries({ queryKey: f });
        let t = o.getQueryData(f);
        return (
          o.setQueryData(f, (t) =>
            t == null ? t : { ...t, response: { ...t.response, config: O(t.response.config, e.edits) } },
          ),
          { previousUserConfig: t }
        );
      }),
      (h = (e, n, r) => {
        (t.error(`Failed to update memory config`, { safe: {}, sensitive: { error: e } }),
          o.setQueryData(f, r?.previousUserConfig));
      }),
      (r[6] = o),
      (r[7] = f),
      (r[8] = m),
      (r[9] = h))
    : ((m = r[8]), (h = r[9]));
  let _;
  r[10] === l
    ? (_ = r[11])
    : ((_ = async () => {
        await Promise.all([l(b), l([`user-saved-config`])]);
      }),
      (r[10] = l),
      (r[11] = _));
  let v;
  return (
    r[12] !== p || r[13] !== m || r[14] !== h || r[15] !== _
      ? ((v = { mutationFn: p, onMutate: m, onError: h, onSettled: _ }),
        (r[12] = p),
        (r[13] = m),
        (r[14] = h),
        (r[15] = _),
        (r[16] = v))
      : (v = r[16]),
    s(v)
  );
}
function P(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var F;
function I() {
  return (I = e(() => {
    ((F = p()), i(), f(), c(), x(), v(), _(), m(), l(), M());
  }))();
}
function L({
  chronicleResearchPreviewEnabled: e,
  chronicleResearchPreviewVisible: t,
  isMemoryFeatureEnabled: n,
  memoryConfig: r,
}) {
  return {
    chronicleResearchPreviewEnabled: e,
    chronicleResearchPreviewVisible: t,
    ...w({ isMemoryFeatureEnabled: n, memoryConfig: r }),
    skipToolAssistedChatsEnabled: r.disableOnExternalContext,
  };
}
function R(e, { chronicleResearchPreviewEnabled: t, isMemoryFeatureEnabled: n, memoryConfigPatch: r } = {}) {
  return L({
    chronicleResearchPreviewEnabled: t ?? e.chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible: e.chronicleResearchPreviewVisible,
    isMemoryFeatureEnabled: n ?? e.isMemoryFeatureEnabled,
    memoryConfig: { ...e.memoryConfig, ...r },
  });
}
function z({ productLogger: e, previousEnabled: t, selectedEnabled: n, settingName: r, state: i }) {
  e.logProductEvent(T, { settingName: r, previousEnabled: t, selectedEnabled: n, ...i });
}
async function B({ productLogger: e, write: t, ...n }) {
  try {
    await t();
  } catch {
    return;
  }
  z({ productLogger: e, ...n });
}
async function V({
  productLogger: e,
  previousState: t,
  selectedEnabled: n,
  featureWrite: r,
  configWrite: i,
  chronicleDisable: a,
}) {
  let [o, s, c] = await Promise.allSettled([r(), i(), a?.() ?? Promise.resolve()]),
    l = o.status === `fulfilled` ? n : t.memoryFeatureEnabled,
    u = s.status === `fulfilled` ? n : t.generateMemoriesEnabled,
    d = s.status === `fulfilled` ? n : t.useMemoriesEnabled,
    f = {
      ...t,
      chronicleResearchPreviewEnabled:
        a != null && c.status === `fulfilled` ? !1 : t.chronicleResearchPreviewEnabled,
      memoryFeatureEnabled: l,
      generateMemoriesEnabled: u,
      useMemoriesEnabled: d,
      memoriesEnabled: l && u && d,
    };
  f.memoriesEnabled !== t.memoriesEnabled &&
    z({
      productLogger: e,
      previousEnabled: t.memoriesEnabled,
      selectedEnabled: n,
      settingName: `memories`,
      state: f,
    });
}
function H() {
  return (H = e(() => {
    (E(), C());
  }))();
}
export { B as a, V as i, H as n, I as o, z as r, N as s, R as t };
//# sourceMappingURL=memory-settings-analytics-a53949a1e312.js.map
