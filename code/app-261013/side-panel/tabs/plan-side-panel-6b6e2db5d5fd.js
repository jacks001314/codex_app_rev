import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Kat as n,
  LR as r,
  SPt as i,
  Sht as a,
  qat as o,
  rst as s,
  ygt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ant as l,
  Cxt as u,
  Ifr as d,
  K6n as f,
  Lfr as p,
  Mnt as m,
  d_r as h,
  dwn as g,
  jnt as _,
  knt as v,
  m_r as y,
  pwn as b,
  tDn as x,
  uDn as S,
  v8n as C,
  wxt as w,
} from "./app-initial-5851df3f6cb1.js";
import { n as T, r as E } from "./text-file-storage-b2e57fb6ac22.js";
import { i as D, n as O, o as k, r as A, t as j } from "./editable-plan-tab-44cf711b8cad.js";
function M(e, r) {
  if (n?.workspaceFiles.write) {
    let n = e.get(S);
    if (!c(n)) {
      N(e, r, n)
        .then((t) => {
          t === `unavailable` && F(e, r);
        })
        .catch((n) => {
          (t.warning(`Failed to open editable plan`, { safe: {}, sensitive: { error: n } }), F(e, r));
        });
      return;
    }
  }
  F(e, r);
}
async function N(e, { content: t, conversationId: r, key: i, title: o }, s) {
  let c = n.workspaceFiles.write;
  if (c == null) return `unavailable`;
  let l = e.get(A);
  if (l != null && l.key !== i) {
    let t = e.get(D, `${s}:${r}:${l.key}`)?.save;
    if (t != null && !(await t())) return `unsaved`;
  }
  let { codexHome: u } = await e.query.getOrFetch(h, { hostId: s }),
    d = a(u, `plans`, r, i),
    p = a(d, `PLAN.md`);
  await e.get(f, s).sendRequest(`fs/createDirectory`, { path: d, recursive: !0 });
  let m = await c({ bytes: new TextEncoder().encode(t), hostId: s, ifMatch: `missing`, path: p });
  if (m.outcome === `too-large`) return `unavailable`;
  let g = `${s}:${r}:${i}`,
    _ = t;
  if (m.outcome === `conflict`) {
    let t = e.get(D, g);
    _ = t?.path === p ? t.content : (await E({ filePath: p, hostId: s })).content;
  }
  return P(e, { content: _, conversationId: r, hostId: s, key: i, path: p, title: o })
    ? `opened`
    : `unavailable`;
}
function P(e, t) {
  return O(e, t, w);
}
function F(
  e,
  { content: t, conversationId: n, cwd: r, hideCodeBlocks: i, key: a, planKey: o, title: s },
  { revealAndFocus: c = !0, insertPosition: l, tabId: u = d.PLAN } = {},
) {
  return (
    e.set(A, { key: a, tabId: u }),
    b(e, I, {
      revealAndFocus: c,
      defaultState: () => ({ planKey: a, scrollTop: 0 }),
      durableRoute: o == null ? void 0 : { kind: _, params: { planKey: o }, payloadVersion: 1 },
      id: u,
      insertPosition: l,
      onClose: (e) => {
        e.get(A)?.key === a && e.set(A, null);
      },
      props: { content: t, conversationId: n, cwd: r, hideCodeBlocks: i, planKey: a },
      title: s,
    })
  );
}
var I;
function L() {
  return (L = e(() => {
    (s(), C(), g(), o(), x(), y(), v(), u(), T(), p(), i(), r(), j(), k(), m(), (I = l({ open: F })));
  }))();
}
export { M as n, F as r, L as t };
//# sourceMappingURL=plan-side-panel-6b6e2db5d5fd.js.map
