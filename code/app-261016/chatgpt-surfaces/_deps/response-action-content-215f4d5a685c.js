import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  Oit as a,
  PBt as o,
  Qst as s,
  RFt as c,
  TY as l,
  Vrt as u,
  Wq as d,
  XOt as f,
  ZSt as p,
  ck as m,
  jit as h,
  okt as g,
  qrt as _,
  rk as v,
  tkt as y,
  zFt as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Mir as x,
  Nir as S,
  S3 as C,
  _ur as w,
  gur as T,
  hdn as E,
  pur as D,
  rdn as O,
  x3 as k,
} from "./app-initial-ad16eaadf81f.js";
function A(e) {
  let n = (0, M.c)(11),
    { conversationId: r, item: i } = e,
    a = t(s),
    o = g(),
    [c, l] = (0, N.useState)(!1),
    u = i.latestMessageId ?? i.messageId;
  if (!i.completed || u == null) return null;
  let f;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, P.jsx)(d, {})), (n[0] = f)) : (f = n[0]);
  let p;
  n[1] !== r || n[2] !== o || n[3] !== u || n[4] !== c || n[5] !== a
    ? ((p = () => {
        c || j(a, o, r, u, l);
      }),
      (n[1] = r),
      (n[2] = o),
      (n[3] = u),
      (n[4] = c),
      (n[5] = a),
      (n[6] = p))
    : (p = n[6]);
  let m;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, P.jsx)(y, {
        id: `codex.space.page.dil.saveToSpaces`,
        defaultMessage: `Save to Space`,
        description: `Menu item that saves the completed ChatGPT response, including interactive widgets, as a new Page in Spaces`,
      })),
      (n[7] = m))
    : (m = n[7]);
  let h;
  return (
    n[8] !== c || n[9] !== p
      ? ((h = (0, P.jsx)(v.Item, { disabled: c, leftIcon: f, onSelect: p, children: m })),
        (n[8] = c),
        (n[9] = p),
        (n[10] = h))
      : (h = n[10]),
    h
  );
}
async function j(e, t, n, r, i) {
  let a = e.get(T);
  if (a == null || !k(e)) return;
  let o = w(e, a),
    s = t.formatMessage({
      id: `codex.space.page.dil.savedResponse`,
      defaultMessage: `Saved response`,
      description: `Initial editable title of a Page created from a ChatGPT response`,
    });
  i(!0);
  let c = `create_page`;
  try {
    let t = await e
      .get(O)
      .mutateAsync({
        accountId: a,
        signal: o.signal,
        requestBody: {
          destination: `personal_file_drive`,
          title: s,
          idempotency_key: `response:${n}:${r}`,
          conversation_id: n,
          message_id: r,
        },
      });
    o.signal.aborted || ((c = `open_page`), S(e, `/space/${t.metadata.page_id}`));
  } catch (n) {
    if (!o.signal.aborted) {
      let r;
      (n instanceof h && (r = n.status),
        b.warning(`ChatGPT response save to Page failed`, { safe: { stage: c, status: r } }),
        e
          .get(_)
          .danger(
            t.formatMessage({
              id: `codex.space.page.dil.saveFailed`,
              defaultMessage: `Could not save response. Try again`,
              description: `Toast when saving a ChatGPT response to a Page fails; retry uses the same creation identity`,
            }),
            { errorAnalytics: { toastId: `codex.space.page.dil.saveFailed` } },
          ));
    }
  } finally {
    (o.stop(), i(!1));
  }
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = o()), p(), (N = r()), f(), x(), m(), l(), u(), D(), C(), E(), n(), c(), a(), (P = i()));
  }))();
}
F();
export { A as PageResponseSaveAction };
//# sourceMappingURL=response-action-content-215f4d5a685c.js.map
