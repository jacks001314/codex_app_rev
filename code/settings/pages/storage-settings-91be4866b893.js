import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  BS as n,
  Cpn as r,
  Hu as i,
  JS as a,
  M6t as o,
  P6t as s,
  Qu as c,
  S3t as l,
  Spn as u,
  TJt as d,
  VS as f,
  Vu as p,
  XS as m,
  Xu as h,
  Zu as g,
  hmn as _,
  kMt as v,
  kmn as y,
  nSt as b,
  qu as x,
  s3t as S,
  uSt as C,
  wJt as w,
} from "./app-initial-f094ef01c64d.js";
function T() {
  let e = (0, N.c)(46),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { queryKey: [`chatgpt-library-storage-usage`], queryFn: b, staleTime: w.ONE_MINUTE }),
      (e[0] = t))
    : (t = e[0]);
  let { data: i, isLoading: o } = l(t),
    s,
    c,
    u,
    d,
    f,
    m,
    h,
    _,
    y,
    S,
    C;
  if (e[1] !== o || e[2] !== i) {
    let t = i ? i.breakdown_by_file_type.filter(j).reduce(A, 0) : void 0,
      l = i ? i.breakdown_by_file_type.filter(k).reduce(O, 0) : void 0;
    ((f = a),
      e[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((C = (0, P.jsx)(n, { slug: `storage` })), (e[14] = C))
        : (C = e[14]),
      (d = g));
    let b;
    e[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, P.jsx)(r, {
          id: `settings.chatGpt.storage.usage`,
          defaultMessage: `Storage usage`,
          description: `Heading for ChatGPT library storage usage`,
        })),
        (e[15] = b))
      : (b = e[15]);
    let w;
    (e[16] === i
      ? (w = e[17])
      : ((w = i
          ? (0, P.jsx)(r, {
              id: `settings.chatGpt.storage.usageSummary`,
              defaultMessage: `{used} of {allowed} used`,
              description: `Summary of used and available ChatGPT library storage`,
              values: { used: M(i.used_bytes), allowed: M(i.allowed_bytes) },
            })
          : void 0),
        (e[16] = i),
        (e[17] = w)),
      e[18] === w
        ? (S = e[19])
        : ((S = (0, P.jsx)(g.Header, { title: b, subtitle: w })), (e[18] = w), (e[19] = S)),
      (u = g.Content),
      (c = p),
      (_ = o || void 0));
    let T;
    e[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, P.jsx)(r, {
          id: `settings.chatGpt.storage.files`,
          defaultMessage: `Files`,
          description: `ChatGPT library files storage category`,
        })),
        (e[20] = T))
      : (T = e[20]);
    let E = t == null ? void 0 : M(t),
      N;
    (e[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((N = (0, P.jsx)(v, {
          color: `secondary`,
          size: `toolbar`,
          onClick: D,
          children: (0, P.jsx)(r, {
            id: `settings.chatGpt.storage.manage`,
            defaultMessage: `Manage`,
            description: `Button to manage ChatGPT library storage`,
          }),
        })),
        (e[21] = N))
      : (N = e[21]),
      e[22] === E
        ? (y = e[23])
        : ((y = (0, P.jsx)(x, { label: T, description: E, control: N })), (e[22] = E), (e[23] = y)),
      (s = x),
      e[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((m = (0, P.jsx)(r, {
            id: `settings.chatGpt.storage.images`,
            defaultMessage: `Images`,
            description: `ChatGPT library images storage category`,
          })),
          (e[24] = m))
        : (m = e[24]),
      (h = l == null ? void 0 : M(l)),
      (e[1] = o),
      (e[2] = i),
      (e[3] = s),
      (e[4] = c),
      (e[5] = u),
      (e[6] = d),
      (e[7] = f),
      (e[8] = m),
      (e[9] = h),
      (e[10] = _),
      (e[11] = y),
      (e[12] = S),
      (e[13] = C));
  } else
    ((s = e[3]),
      (c = e[4]),
      (u = e[5]),
      (d = e[6]),
      (f = e[7]),
      (m = e[8]),
      (h = e[9]),
      (_ = e[10]),
      (y = e[11]),
      (S = e[12]),
      (C = e[13]));
  let T;
  e[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, P.jsx)(v, {
        color: `secondary`,
        size: `toolbar`,
        onClick: E,
        children: (0, P.jsx)(r, {
          id: `settings.chatGpt.storage.manage`,
          defaultMessage: `Manage`,
          description: `Button to manage ChatGPT library storage`,
        }),
      })),
      (e[25] = T))
    : (T = e[25]);
  let F;
  e[26] !== s || e[27] !== m || e[28] !== h
    ? ((F = (0, P.jsx)(s, { label: m, description: h, control: T })),
      (e[26] = s),
      (e[27] = m),
      (e[28] = h),
      (e[29] = F))
    : (F = e[29]);
  let I;
  e[30] !== c || e[31] !== _ || e[32] !== y || e[33] !== F
    ? ((I = (0, P.jsxs)(c, { "aria-busy": _, children: [y, F] })),
      (e[30] = c),
      (e[31] = _),
      (e[32] = y),
      (e[33] = F),
      (e[34] = I))
    : (I = e[34]);
  let L;
  e[35] !== u || e[36] !== I
    ? ((L = (0, P.jsx)(u, { children: I })), (e[35] = u), (e[36] = I), (e[37] = L))
    : (L = e[37]);
  let R;
  e[38] !== d || e[39] !== L || e[40] !== S
    ? ((R = (0, P.jsxs)(d, { children: [S, L] })),
      (e[38] = d),
      (e[39] = L),
      (e[40] = S),
      (e[41] = R))
    : (R = e[41]);
  let z;
  return (
    e[42] !== f || e[43] !== R || e[44] !== C
      ? ((z = (0, P.jsx)(f, { title: C, children: R })),
        (e[42] = f),
        (e[43] = R),
        (e[44] = C),
        (e[45] = z))
      : (z = e[45]),
    z
  );
}
function E() {
  return s({
    disposition: `current-tab`,
    href: `https://chatgpt.com/library?type=image`,
    initiator: `open_in_browser_bridge`,
    openTarget: `in-app-browser`,
  });
}
function D() {
  return s({
    disposition: `current-tab`,
    href: `https://chatgpt.com/library`,
    initiator: `open_in_browser_bridge`,
    openTarget: `in-app-browser`,
  });
}
function O(e, t) {
  return e + t.used_bytes;
}
function k(e) {
  let { file_type: t } = e;
  return t === `image`;
}
function A(e, t) {
  return e + t.used_bytes;
}
function j(e) {
  let { file_type: t } = e;
  return t !== `image`;
}
function M(e) {
  if (e < 1024) return `${e} B`;
  let t = [`KB`, `MB`, `GB`, `TB`],
    n = e / 1024,
    r = t[0];
  for (let e of t.slice(1)) {
    if (n < 1024) break;
    ((n /= 1024), (r = e));
  }
  return `${n.toFixed(n >= 10 ? 0 : 1)} ${r}`;
}
var N, P;
e(() => {
  ((N = y()), S(), u(), C(), t(), o(), m(), c(), h(), f(), i(), d(), (P = _()));
})();
export { T as ChatGptStorageSettings };
//# sourceMappingURL=storage-settings-91be4866b893.js.map
