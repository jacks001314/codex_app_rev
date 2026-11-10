import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ket as t,
  W3 as n,
  Wrn as r,
  Yrn as i,
  _2 as a,
  _dn as o,
  g2 as s,
  lT as c,
  mcn as l,
  r5 as u,
  sT as d,
} from "./app-shared-7552fc8d5d82.js";
import { nc as f, rc as p } from "./app-initial-3916b423772b.js";
function m(e) {
  let t = (0, h.c)(22),
    { browserAuth: r, status: a, loadRemote: o } = e,
    c = a === void 0 ? `pending` : a,
    l = o === void 0 || o,
    p;
  if (t[0] !== r.origin || t[1] !== l || t[2] !== c) {
    let e = new URL(r.origin),
      a = e.origin,
      o = d(e.hostname, { allowPrivateDomains: !0 }) ?? e.hostname,
      m = a.lastIndexOf(o),
      h;
    if (c === `pending`)
      h = (0, g.jsx)(i, {
        id: `chatgptConversations.cloudBrowser.auth.page.title`,
        defaultMessage: `Sign in to {site}`,
        description: `Heading on the standalone cloud-browser credential page opened from a sign-in request. It tells the end user which website they are signing in to. Placeholder {site} is the credential provider's domain, such as resy.com, without a leading www.; it is not a translated brand name. Keep the heading concise; it may wrap on mobile.`,
        values: { site: o },
      });
    else if (c === `accepted`)
      h = (0, g.jsx)(i, {
        id: `chatgptConversations.cloudBrowser.auth.page.signingIn`,
        defaultMessage: `Signing in to {site}`,
        description: `Confirmation heading on the standalone browser sign-in page after the user's credentials were submitted and their response was sent to the task. Sign-in is underway, not guaranteed complete. {site} is the website's domain, such as example.com. Keep this mobile heading concise.`,
        values: { site: o },
      });
    else {
      let e;
      (t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, g.jsx)(i, {
            id: `chatgptConversations.cloudBrowser.auth.page.skipped`,
            defaultMessage: `Sign-in skipped`,
            description: `Confirmation heading on the standalone browser sign-in page after the user's skip or cancel response was sent to the task. No successful sign-in is implied. Short mobile heading.`,
          })),
          (t[4] = e))
        : (e = t[4]),
        (h = e));
    }
    let _;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, g.jsx)(`span`, {
          className: `flex size-14 shrink-0 items-center justify-center rounded-xl border border-default`,
          children: (0, g.jsx)(s, { className: `size-12` }),
        })),
        (t[5] = _))
      : (_ = t[5]);
    let v;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, g.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` })), (t[6] = v))
      : (v = t[6]);
    let y;
    t[7] === c
      ? (y = t[8])
      : ((y =
          c === `pending`
            ? (0, g.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` })
            : (0, g.jsx)(n, { className: `text-success` })),
        (t[7] = c),
        (t[8] = y));
    let b;
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, g.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` })), (t[9] = b))
      : (b = t[9]);
    let x;
    t[10] === y
      ? (x = t[11])
      : ((x = (0, g.jsxs)(`span`, { className: `flex items-center gap-1`, children: [v, y, b] })),
        (t[10] = y),
        (t[11] = x));
    let S = (0, g.jsx)(`span`, {
        className: `flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-default`,
        children: (0, g.jsx)(f, { className: `size-12`, href: a, loadRemote: l }),
      }),
      C;
    t[12] !== x || t[13] !== S
      ? ((C = (0, g.jsxs)(`div`, {
          "aria-hidden": `true`,
          className: `flex items-center gap-3`,
          children: [_, x, S],
        })),
        (t[12] = x),
        (t[13] = S),
        (t[14] = C))
      : (C = t[14]);
    let w;
    t[15] === h
      ? (w = t[16])
      : ((w = (0, g.jsx)(`h1`, {
          className: `w-full min-w-0 text-heading-app leading-tight font-normal break-words text-default select-none`,
          children: h,
        })),
        (t[15] = h),
        (t[16] = w));
    let T;
    t[17] === c
      ? (T = t[18])
      : ((T =
          c === `pending`
            ? null
            : (0, g.jsx)(`p`, {
                className: `text-sm text-secondary`,
                children: (0, g.jsx)(i, {
                  id: `chatgptConversations.cloudBrowser.auth.page.returnToConversation`,
                  defaultMessage: `You can return to your conversation`,
                  description: `Supporting text beneath the standalone browser sign-in confirmation. Tells the user to return manually to the originating conversation after their sign-in or skip response was sent. Does not claim website sign-in or task completion.`,
                }),
              })),
        (t[17] = c),
        (t[18] = T));
    let E;
    (t[19] !== w || t[20] !== T
      ? ((E = (0, g.jsxs)(`div`, {
          className: `flex w-full min-w-0 flex-col gap-2`,
          children: [w, T],
        })),
        (t[19] = w),
        (t[20] = T),
        (t[21] = E))
      : (E = t[21]),
      (p = (0, g.jsxs)(`div`, {
        className:
          c === `pending`
            ? `flex min-w-0 flex-col items-center gap-4 text-center`
            : `flex min-w-0 flex-col items-center gap-6 text-center`,
        children: [
          C,
          E,
          c === `pending`
            ? (0, g.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-1 text-sm text-secondary`,
                children: [
                  e.protocol === `https:` ? (0, g.jsx)(u, {}) : null,
                  (0, g.jsxs)(`span`, {
                    className: `min-w-0 break-all`,
                    dir: `ltr`,
                    children: [
                      a.slice(0, m),
                      (0, g.jsx)(`span`, { className: `text-default`, children: o }),
                      a.slice(m + o.length),
                    ],
                  }),
                ],
              })
            : null,
        ],
      })),
      (t[0] = r.origin),
      (t[1] = l),
      (t[2] = c),
      (t[3] = p));
  } else p = t[3];
  return p;
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = o()), r(), c(), p(), t(), a(), (g = l()));
  }))();
}
export { _ as n, m as t };
//# sourceMappingURL=browser-auth-header-3399e80a0389.js.map
