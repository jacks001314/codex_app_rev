import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Pat as r,
  Pxt as i,
  Yxt as a,
  frt as o,
  urt as s,
  wot as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  CKn as l,
  EGn as u,
  GMr as d,
  IGn as f,
  Qmr as p,
  TGn as m,
  YMr as h,
  Ymr as g,
  Zmr as _,
  cct as v,
  ehr as y,
  tNr as b,
  uct as x,
  wKn as S,
} from "./app-initial-5851df3f6cb1.js";
async function C(e, t, n, r, i) {
  let a = () => {
    if (
      (i.throwIfAborted(),
      n.versionId != null || e.get(d) !== t.accountId || e.get(h) !== t.userId || e.get(x) !== !0)
    )
      throw Error(`Agent file access changed`);
  };
  a();
  let o = { agent_id: n.agentId },
    [c, l] = await Promise.all([
      g.safeGet(`/hermes/agent/{agent_id}/builder-view`, {
        parameters: { path: o },
        signal: i,
        expectedIdentity: t,
      }),
      n.skillId == null
        ? g.safeGet(`/hermes/agent/{agent_id}/files/tree`, {
            parameters: { path: o },
            signal: i,
            expectedIdentity: t,
          })
        : g.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/files/tree`, {
            parameters: { path: { ...o, skill_id: n.skillId } },
            signal: i,
            expectedIdentity: t,
          }),
    ]);
  if ((a(), ![`hermes_write`, `hermes_admin`].includes(c.agent.viewer_capability)))
    throw Error(`This agent is no longer editable`);
  if (n.skillId != null) {
    let e = c.draft_version.config?.skills?.find((e) => e.id === n.skillId);
    if (e == null || `chatgpt_skill_id` in e) throw Error(`Shared skills cannot be changed from this agent`);
    let t = l.nodes.find((e) => e.id === l.root_node_id);
    if (
      (t == null ? l.nodes : (t.children ?? []))
        .filter((e) => e.name.toLowerCase() === `agents`)
        .some(
          (e) =>
            ((r.type === `rename` || r.type === `delete`) &&
              ((t) =>
                e.id === t ||
                !!e.children?.some((e) => e.id === t && e.name.toLowerCase() === `openai.yaml`))(
                r.node.id,
              )) ||
            (r.type === `upload` &&
              r.replace &&
              r.parentId === e.id &&
              r.file.name.toLowerCase() === `openai.yaml`),
        )
    )
      throw Error(`Edit generated skill settings from the skill overview`);
  }
  let u = {
    current_tree_revision: l.tree_revision,
    expected_draft_version_id: c.draft_version.id,
    expected_draft_revision: c.draft_revision,
  };
  if (r.type === `folder`) {
    let e = { ...u, parent_node_id: r.parentId, name: r.name },
      s =
        n.skillId == null
          ? await g.safePost(`/hermes/agent/{agent_id}/files/folders`, {
              parameters: { path: o },
              requestBody: e,
              signal: i,
              expectedIdentity: t,
            })
          : await g.safePost(`/hermes/agent/{agent_id}/skills/{skill_id}/files/folders`, {
              parameters: { path: { ...o, skill_id: n.skillId } },
              requestBody: e,
              signal: i,
              expectedIdentity: t,
            });
    return (a(), s.node.id);
  }
  if (r.type === `rename`) {
    let e = { ...u, name: r.name };
    n.skillId == null
      ? await g.safePatch(`/hermes/agent/{agent_id}/files/nodes/{node_id}`, {
          parameters: { path: { ...o, node_id: r.node.id } },
          requestBody: e,
          signal: i,
          expectedIdentity: t,
        })
      : await g.safePatch(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes/{node_id}`, {
          parameters: { path: { ...o, skill_id: n.skillId, node_id: r.node.id } },
          requestBody: e,
          signal: i,
          expectedIdentity: t,
        });
  } else if (r.type === `delete`)
    n.skillId == null
      ? await g.safePost(`/hermes/agent/{agent_id}/files/nodes/{node_id}`, {
          parameters: { path: { ...o, node_id: r.node.id }, query: { recursive: !0 } },
          requestBody: u,
          signal: i,
          expectedIdentity: t,
        })
      : await g.safePost(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes/{node_id}`, {
          parameters: { path: { ...o, skill_id: n.skillId, node_id: r.node.id }, query: { recursive: !0 } },
          requestBody: u,
          signal: i,
          expectedIdentity: t,
        });
  else {
    let { file: e } = r;
    if ((!r.replace && e.size === 0) || e.size > 536870912)
      throw Error(`Choose a nonempty file up to 512 MB`);
    let c = {
        ...u,
        parent_node_id: r.parentId,
        name: e.name,
        size_bytes: e.size,
        mime_type: e.type || null,
        collision_handling: r.replace ? `replace` : `keep_both`,
      },
      l =
        n.skillId == null
          ? await g.safePost(`/hermes/agent/{agent_id}/files/upload-sessions`, {
              parameters: { path: o },
              requestBody: c,
              signal: i,
              expectedIdentity: t,
            })
          : await g.safePost(`/hermes/agent/{agent_id}/skills/{skill_id}/files/upload-sessions`, {
              parameters: { path: { ...o, skill_id: n.skillId } },
              requestBody: c,
              signal: i,
              expectedIdentity: t,
            });
    (a(),
      await s
        .getInstance()
        .upload(`PUT`, l.upload_url, {
          body: e,
          headers: {
            "x-ms-blob-type": `BlockBlob`,
            "x-ms-version": `2020-04-08`,
            "Content-Type": e.type || `application/octet-stream`,
          },
          signal: i,
        }),
      a());
    let d = { expected_draft_revision: l.draft_revision };
    n.skillId == null
      ? await g.safePost(`/hermes/agent/{agent_id}/files/upload-sessions/{session_id}/complete`, {
          parameters: { path: { ...o, session_id: l.session_id } },
          requestBody: d,
          signal: i,
          expectedIdentity: t,
        })
      : await g.safePost(
          `/hermes/agent/{agent_id}/skills/{skill_id}/files/upload-sessions/{session_id}/complete`,
          {
            parameters: { path: { ...o, skill_id: n.skillId, session_id: l.session_id } },
            requestBody: d,
            signal: i,
            expectedIdentity: t,
          },
        );
  }
  return (a(), null);
}
async function w(e, t, n, r, i = !1) {
  let a = { version_id: e.versionId, download: i ? `true` : void 0 },
    o = { agent_id: e.agentId, node_id: t.id },
    s =
      e.skillId == null
        ? await g.safeGet(`/hermes/agent/{agent_id}/files/nodes/{node_id}/download-url`, {
            parameters: { path: o, query: a },
            signal: r,
            expectedIdentity: n,
          })
        : await g.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes/{node_id}/download-url`, {
            parameters: { path: { ...o, skill_id: e.skillId }, query: a },
            signal: r,
            expectedIdentity: n,
          }),
    c = l(s.download_url);
  if (c == null) throw Error(`Invalid agent file download URL`);
  return {
    fileName: s.file_name ?? t.name,
    target: {
      type: `download-url`,
      downloadUrl: _(c) ?? c,
      requestHeaders: s.needs_auth_token ? p() : void 0,
    },
  };
}
async function T(e, t, n, r, i, a) {
  let o = new Map([[``, r]]);
  for (let r of i) {
    let i = (r.webkitRelativePath || r.name).split(`/`);
    if (i.some((e) => !e || e === `.` || e === `..`)) throw Error(`Invalid agent upload path`);
    let s = ``;
    for (let r of i.slice(0, -1)) {
      let i = s ? `${s}/${r}` : r;
      if (!o.has(i)) {
        let c = o.get(s);
        if (c == null) throw Error(`Missing upload folder`);
        let l = null,
          u;
        do {
          let e = { parent_node_id: c, cursor: l, limit: 100, sort: `name_asc` },
            i =
              n.skillId == null
                ? await g.safeGet(`/hermes/agent/{agent_id}/files/nodes`, {
                    parameters: { path: { agent_id: n.agentId }, query: e },
                    signal: a,
                    expectedIdentity: t,
                  })
                : await g.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes`, {
                    parameters: { path: { agent_id: n.agentId, skill_id: n.skillId }, query: e },
                    signal: a,
                    expectedIdentity: t,
                  });
          ((u = i.children.find((e) => e.kind === `folder` && e.name === r)), (l = i.next_cursor ?? null));
        } while (u == null && l != null);
        let d = u?.id ?? (await C(e, t, n, { type: `folder`, parentId: c, name: r }, a));
        if (d == null) throw Error(`Could not create upload folder`);
        o.set(i, d);
      }
      s = i;
    }
    let c = o.get(s);
    if (c == null) throw Error(`Missing upload destination`);
    await C(e, t, n, { type: `upload`, parentId: c, file: r }, a);
  }
}
async function E(e, t, n, r) {
  let i = new AbortController(),
    a = e.watch((e) => {
      (e.get(d) !== r.accountId || e.get(h) !== r.userId) && i.abort();
    });
  try {
    i.signal.throwIfAborted();
    let e = await w(t, n, r, i.signal, !0);
    (i.signal.throwIfAborted(), await m({ conversationId: null, ...e, signal: i.signal }));
  } finally {
    a();
  }
}
async function D(e, t, n, r) {
  let { target: i } = await w(e, t, n, r);
  return (await u({ conversationId: null, maxBytes: 1e6, signal: r, target: i })).text();
}
function O(e) {
  return (
    (e.size_bytes ?? 0) <= 1e6 &&
    (e.mime_type?.startsWith(`text/`) === !0 ||
      /(?:json|xml|yaml|javascript|toml)/i.test(e.mime_type ?? ``) ||
      /\.(?:txt|md|mdx|csv|tsv|json|jsonl|xml|yaml|yml|toml|ini|log|js|jsx|ts|tsx|py|sql|sh|html|css)$/i.test(
        e.name,
      ))
  );
}
function k(e) {
  let t = e.name.toLowerCase();
  return (
    (e.recursive_parents?.length === 1 && t === `agents`) ||
    (e.recursive_parents?.length === 2 &&
      e.recursive_parents[1].name.toLowerCase() === `agents` &&
      t === `openai.yaml`)
  );
}
var A;
function j() {
  return (j = e(() => {
    (i(),
      b(),
      f(),
      y(),
      S(),
      c(),
      n(),
      o(),
      v(),
      (A = a(t, (e, { get: t }) => {
        let n = t(d),
          i = t(h);
        return {
          enabled: n != null && i != null,
          queryKey: [`workspace-agent`, `files`, n, i, e.agentId, e.skillId, e.versionId, e.nodeId],
          initialPageParam: null,
          queryFn: ({ pageParam: t, signal: r }) => {
            if (n == null || i == null) throw Error(`Missing active workspace identity`);
            let a = {
                parent_node_id: e.nodeId,
                version_id: e.versionId,
                cursor: t,
                limit: 100,
                sort: `name_asc`,
              },
              o = { accountId: n, userId: i };
            return e.skillId == null
              ? g.safeGet(`/hermes/agent/{agent_id}/files/nodes`, {
                  parameters: { path: { agent_id: e.agentId }, query: a },
                  signal: r,
                  expectedIdentity: o,
                })
              : g.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes`, {
                  parameters: { path: { agent_id: e.agentId, skill_id: e.skillId }, query: a },
                  signal: r,
                  expectedIdentity: o,
                });
          },
          getNextPageParam: (e) => e.next_cursor ?? void 0,
          staleTime: r.ONE_MINUTE,
          retry: !1,
        };
      })));
  }))();
}
export { O as a, D as c, j as i, T as l, E as n, k as o, w as r, C as s, A as t };
//# sourceMappingURL=files-data-970a69a85625.js.map
