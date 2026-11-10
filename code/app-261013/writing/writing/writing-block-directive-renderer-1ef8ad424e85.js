import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n } from "./app-shared-bbfeca5e5737.js";
import {
  $tr as r,
  DQn as i,
  G as a,
  H as o,
  SQn as s,
  fxr as c,
  hQn as l,
  mQn as u,
  mxr as d,
  pxr as f,
} from "./app-initial-5851df3f6cb1.js";
import { n as p, t as m } from "./editable-writing-block-67c0bb761270.js";
function h({ attributes: e, isStreaming: t, rawText: n }) {
  let i = (n ?? ``).replace(/^\r?\n/, ``).replace(/\r?\n$/, ``),
    a = d(r(e, `metadata`)),
    o = _({ content: i, metadata: a, preserveEmptySections: !t });
  return {
    bodyContent: i,
    content: o?.[0]?.content ?? i,
    emailMetadata: {
      bcc: r(e, `bcc`),
      cc: r(e, `cc`),
      recipient: r(e, `recipient`),
      subject: r(e, `subject`),
    },
    id: r(e, `id`),
    metadata: a,
    title: r(e, `title`),
    toneSections: o,
    variant: r(e, `variant`),
  };
}
function g(e) {
  return c(e);
}
function _({ content: e, metadata: t, preserveEmptySections: n = !1 }) {
  if (t?.write_like_me_generated === !0)
    return s(t).map((e) => ({ content: e.content, id: e.id, tone: e.label }));
  let r = u({ content: e, metadata: t, preserveEmptySections: n }),
    i = u({ content: ``, metadata: t });
  return r == null || i == null
    ? r
    : r.map((e, t) => {
        let n = i[t];
        return n == null || n.tone !== e.tone || n.id === e.id ? e : { ...e, id: n.id };
      });
}
function v() {
  return (v = e(() => {
    (l(), i(), f());
  }))();
}
function y(e) {
  let t = (0, b.c)(29),
    {
      attributes: n,
      contentReferences: r,
      isStreaming: i,
      rawText: a,
      renderExtension: s,
      renderPersisted: c,
      testId: l,
    } = e,
    u,
    d,
    f,
    p,
    g,
    _,
    v,
    y,
    S,
    C,
    w;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== s || t[5] !== c || t[6] !== l) {
    w = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      d = h({ attributes: n, isStreaming: i, rawText: a });
      let e = c?.(d);
      if (e != null) {
        w = (0, x.jsx)(x.Fragment, { children: e });
        break bb0;
      }
      ((u = m),
        (f = o(d.content, { contentReferences: r, isStreaming: i })),
        (p = void 0),
        (g = d.emailMetadata),
        (_ = !1),
        (v = s?.(d)),
        (y = l),
        (S = d.title),
        (C =
          d.toneSections?.map((e) => ({
            ...e,
            content: o(e.content, { contentReferences: r, isStreaming: i }),
          })) ?? null));
    }
    ((t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w));
  } else
    ((u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]),
      (g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (S = t[15]),
      (C = t[16]),
      (w = t[17]));
  if (w !== Symbol.for(`react.early_return_sentinel`)) return w;
  let T;
  return (
    t[18] !== u ||
    t[19] !== d.variant ||
    t[20] !== f ||
    t[21] !== p ||
    t[22] !== g ||
    t[23] !== _ ||
    t[24] !== v ||
    t[25] !== y ||
    t[26] !== S ||
    t[27] !== C
      ? ((T = (0, x.jsx)(u, {
          content: f,
          editorKey: p,
          emailMetadata: g,
          isEditable: _,
          render: v,
          testId: y,
          title: S,
          toneSections: C,
          variant: d.variant,
        })),
        (t[18] = u),
        (t[19] = d.variant),
        (t[20] = f),
        (t[21] = p),
        (t[22] = g),
        (t[23] = _),
        (t[24] = v),
        (t[25] = y),
        (t[26] = S),
        (t[27] = C),
        (t[28] = T))
      : (T = t[28]),
    T
  );
}
var b, x;
function S() {
  return (S = e(() => {
    ((b = t()), a(), p(), v(), (x = n()));
  }))();
}
export { v as a, _ as i, S as n, g as r, y as t };
//# sourceMappingURL=writing-block-directive-renderer-1ef8ad424e85.js.map
