import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  B6t as r,
  Cpn as i,
  Eln as a,
  H$ as o,
  O3t as s,
  OIt as c,
  Opn as l,
  Rpn as u,
  Spn as d,
  TJt as f,
  U$ as p,
  U3t as m,
  _jt as h,
  a3t as g,
  c6t as _,
  dwt as v,
  g7t as y,
  gln as b,
  hjt as x,
  hmn as S,
  iHt as C,
  jln as w,
  kIt as T,
  kmn as E,
  mwt as D,
  nln as O,
  o3t as k,
  rHt as ee,
  wJt as te,
  xpn as ne,
  zpn as re,
} from "./app-initial-f094ef01c64d.js";
import { a as ie, r as A } from "./timestamps-2a227dd4bcfa.js";
function j(e) {
  let t = (0, I.c)(20),
    { sentAtMs: n, nowMs: r } = e,
    a = l(),
    [o] = (0, L.useState)(P);
  if (!Number.isFinite(n)) return null;
  let s, c, u, d, f;
  if (t[0] !== a || t[1] !== o || t[2] !== r || t[3] !== n) {
    let { date: e, time: i, includeAt: l } = A(a, new Date(n), new Date(r ?? o));
    ((c = e),
      (f = i),
      (u = l ? z.older : z.recent),
      (s = F),
      (d = a.formatMessage(u, { date: c, time: f, day: N })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = r),
      (t[3] = n),
      (t[4] = s),
      (t[5] = c),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f));
  } else ((s = t[4]), (c = t[5]), (u = t[6]), (d = t[7]), (f = t[8]));
  let p;
  t[9] !== c || t[10] !== f
    ? ((p = { date: c, time: f, day: M }), (t[9] = c), (t[10] = f), (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== u || t[13] !== p
    ? ((m = (0, R.jsx)(i, { ...u, values: p })), (t[12] = u), (t[13] = p), (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== s || t[16] !== n || t[17] !== d || t[18] !== m
      ? ((h = (0, R.jsx)(s, { label: d, sentAtMs: n, children: m })),
        (t[15] = s),
        (t[16] = n),
        (t[17] = d),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
function M(e) {
  return (0, R.jsx)(`span`, { className: `font-medium`, children: e });
}
function N(e) {
  return e.join(``);
}
function P() {
  return Date.now();
}
function F(e) {
  let t = (0, I.c)(11),
    { children: n, compact: r, label: i, sentAtMs: a } = e,
    o = r !== void 0 && r,
    s = o ? `flex justify-center py-2` : `flex justify-center py-4`,
    c = i == null ? void 0 : `separator`,
    l = o
      ? `text-xs text-tertiary select-none`
      : `text-sm leading-5 font-normal text-tertiary select-none`,
    u;
  t[0] === a ? (u = t[1]) : ((u = new Date(a).toISOString()), (t[0] = a), (t[1] = u));
  let d;
  t[2] !== n || t[3] !== l || t[4] !== u
    ? ((d = (0, R.jsx)(`time`, { className: l, dateTime: u, children: n })),
      (t[2] = n),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d))
    : (d = t[5]);
  let f;
  return (
    t[6] !== i || t[7] !== s || t[8] !== c || t[9] !== d
      ? ((f = (0, R.jsx)(`div`, { "aria-label": i, className: s, role: c, children: d })),
        (t[6] = i),
        (t[7] = s),
        (t[8] = c),
        (t[9] = d),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
var I,
  L,
  R,
  z,
  B = e(() => {
    ((I = E()),
      (L = t(n(), 1)),
      d(),
      ie(),
      (R = S()),
      (z = ne({
        recent: {
          id: `conversation.timestampSeparator.recent`,
          defaultMessage: `<day>{date}</day> {time}`,
          description: `Centered timestamp separating messages in a Codex conversation. The date is a localized relative day such as Today, Yesterday, or Monday; time is the localized time of day. The day tag emphasizes the date. Keep the complete label short and adjust its order or punctuation for the locale.`,
        },
        older: {
          id: `conversation.timestampSeparator.older`,
          defaultMessage: `<day>{date}</day> at {time}`,
          description: `Centered timestamp separating older messages in a Codex conversation. The date is a localized calendar date, including the year when more than 365 days old; time is the localized time of day. The day tag emphasizes the date. Keep the complete label short and translate the date-time relationship naturally.`,
        },
      })));
  });
function V(e) {
  let t = h(e);
  if (t == null) return null;
  let n;
  try {
    n = new URL(e);
  } catch {
    return null;
  }
  return G[t.appId]?.getRequest(n) ?? null;
}
function H(e, t) {
  return G[e.sourceAppId]?.getTitle(e, t) ?? null;
}
function U(e, t) {
  let n = y(t._meta);
  if (n.status !== `valid`) return null;
  for (let t of n.resources) if (V(t.url)?.cacheKey === e.cacheKey) return t.title?.trim() || null;
  return null;
}
var W,
  G,
  K = e(() => {
    (x(),
      r(),
      T(),
      (W = `id,name,mimeType,webViewLink`),
      (G = {
        "google-drive": {
          getRequest(e) {
            let t = /^\/(document|spreadsheets)(?:\/u\/\d+)?\/d\/(?:e\/)?([^/]+)/u.exec(e.pathname),
              n =
                e.hostname.endsWith(`sheets.google.com`) && t == null
                  ? /^\/(?:spreadsheets\/)?d\/(?:e\/)?([^/]+)/u.exec(e.pathname)
                  : null,
              r = t?.[1] ?? (n == null ? null : `spreadsheets`),
              i = t?.[2] ?? n?.[1];
            return i == null
              ? null
              : r === `document`
                ? {
                    arguments: { fields: W, fileId: i },
                    cacheKey: `google-drive:document:${i}`,
                    server: `codex_apps`,
                    sourceAppId: `google-drive`,
                    tool: `google_drive.get_file_metadata`,
                  }
                : r === `spreadsheets`
                  ? {
                      arguments: { fields: W, fileId: i },
                      cacheKey: `google-drive:spreadsheet:${i}`,
                      server: `codex_apps`,
                      sourceAppId: `google-drive`,
                      tool: `google_drive.get_file_metadata`,
                    }
                  : null;
          },
          getTitle(e, t) {
            return U(e, t) ?? c(t.structuredContent)?.title ?? null;
          },
        },
      }));
  }),
  q,
  J,
  Y,
  X,
  ae = e(() => {
    (s(),
      D(),
      p(),
      k(),
      ee(),
      f(),
      K(),
      (q = 1440 * 60 * 1e3),
      (J = C(`conversation-sources:connector-asset-title-cache`, {})),
      (Y = _(g, ({ get: e }) => e(J) != null)),
      (X = m(
        g,
        ({ hostId: e, url: t }, { get: n, scope: r }) => {
          let i = V(t),
            a = i == null ? null : JSON.stringify([e, i.cacheKey]),
            s = n(Y);
          return {
            enabled: i != null && s,
            queryFn: async () => {
              let t = r.get(J);
              if (i == null || a == null || t == null) return null;
              let n = t[a];
              if (n != null && Date.now() - n.resolvedAt < q) return n.title;
              try {
                let t = v({
                    isCodexAppsServer: i.server === `codex_apps`,
                    toolResult: await o(r, e, i.server, i.tool, i.arguments),
                  }),
                  n = H(i, t);
                return (
                  n != null && r.set(J, { ...r.get(J), [a]: { resolvedAt: Date.now(), title: n } }),
                  n
                );
              } catch {
                return null;
              }
            },
            queryKey: [`connector-asset-title`, a ?? JSON.stringify([e, t])],
            retry: !1,
            staleTime: te.FIVE_MINUTES,
          };
        },
        { key: ({ hostId: e, url: t }) => JSON.stringify([e, V(t)?.cacheKey ?? t]) },
      )));
  });
function oe(e) {
  let t = (0, Z.c)(7),
    { className: n, children: r, isVisible: i } = e,
    o = !!b(),
    s;
  t[0] !== r || t[1] !== n || t[2] !== i || t[3] !== o
    ? ((s = i
        ? (0, Q.jsx)(a.div, {
            className: u(`overflow-hidden`, n),
            animate: { height: `auto`, opacity: 1, transitionEnd: { overflow: `visible` } },
            exit: o
              ? { opacity: 0, overflow: `hidden`, pointerEvents: `none` }
              : { height: 0, opacity: 0, overflow: `hidden`, pointerEvents: `none` },
            transition: $,
            children: r,
          })
        : null),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] === s
      ? (c = t[6])
      : ((c = (0, Q.jsx)(w, { initial: !1, children: s })), (t[5] = s), (t[6] = c)),
    c
  );
}
var Z,
  Q,
  $,
  se = e(() => {
    ((Z = E()), re(), O(), (Q = S()), ($ = { duration: 0.22, ease: [0.23, 1, 0.32, 1] }));
  });
export { j as a, ae as i, se as n, B as o, X as r, oe as t };
//# sourceMappingURL=safety-buffering-status-transition-32d2dc8853a3.js.map
