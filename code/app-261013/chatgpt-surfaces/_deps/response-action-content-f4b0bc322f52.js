import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  CPt as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  SPt as s,
  TJ as c,
  TO as l,
  VDt as u,
  WK as d,
  frt as f,
  hot as p,
  hrt as m,
  jDt as h,
  lot as g,
  vzt as _,
  wot as v,
  xMt as y,
  yzt as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  $2 as x,
  Dor as S,
  Oor as C,
  Q2 as w,
  lIr as T,
  lsn as E,
  uIr as D,
  wor as O,
  xsn as k,
} from "./app-initial-5851df3f6cb1.js";
function A(e) {
  let t = (0, M.c)(11),
    { conversationId: n, item: o } = e,
    s = a(r),
    c = u(),
    [f, p] = (0, N.useState)(!1),
    m = o.latestMessageId ?? o.messageId;
  if (!o.completed || m == null) return null;
  let h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, P.jsx)(d, {})), (t[0] = h)) : (h = t[0]);
  let g;
  t[1] !== n || t[2] !== c || t[3] !== m || t[4] !== f || t[5] !== s
    ? ((g = () => {
        f || j(s, c, n, m, p);
      }),
      (t[1] = n),
      (t[2] = c),
      (t[3] = m),
      (t[4] = f),
      (t[5] = s),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, P.jsx)(i, {
        id: `codex.space.page.dil.saveToSpaces`,
        defaultMessage: `Save to Space`,
        description: `Menu item that saves the completed ChatGPT response, including interactive widgets, as a new Page in Spaces`,
      })),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  return (
    t[8] !== f || t[9] !== g
      ? ((v = (0, P.jsx)(l.Item, { disabled: f, leftIcon: h, onSelect: g, children: _ })),
        (t[8] = f),
        (t[9] = g),
        (t[10] = v))
      : (v = t[10]),
    v
  );
}
async function j(e, t, r, i, a) {
  let o = e.get(S);
  if (o == null || !w(e)) return;
  let s = C(e, o),
    c = t.formatMessage({
      id: `codex.space.page.dil.savedResponse`,
      defaultMessage: `Saved response`,
      description: `Initial editable title of a Page created from a ChatGPT response`,
    });
  a(!0);
  let l = `create_page`;
  try {
    let t = await e
      .get(E)
      .mutateAsync({
        accountId: o,
        signal: s.signal,
        requestBody: {
          destination: `personal_file_drive`,
          title: c,
          idempotency_key: `response:${r}:${i}`,
          conversation_id: r,
          message_id: i,
        },
      });
    s.signal.aborted || ((l = `open_page`), D(e, `/space/${t.metadata.page_id}`));
  } catch (r) {
    if (!s.signal.aborted) {
      let i;
      (r instanceof m && (i = r.status),
        n.warning(`ChatGPT response save to Page failed`, { safe: { stage: l, status: i } }),
        e
          .get(p)
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
    (s.stop(), a(!1));
  }
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = _()), o(), (N = b()), h(), T(), t(), c(), g(), O(), x(), k(), v(), s(), f(), (P = y()));
  }))();
}
F();
export { A as PageResponseSaveAction };
//# sourceMappingURL=response-action-content-f4b0bc322f52.js.map
