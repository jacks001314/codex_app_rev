import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CCt as r,
  LNt as i,
  Oit as a,
  PBt as o,
  Qst as s,
  ZSt as c,
  iCt as l,
  jit as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { Cjr as d, VRr as f, iRr as p, tyr as m, wLr as h, xjr as g } from "./app-initial-ad16eaadf81f.js";
function _({ wrapper: e, owner: t, currentOwner: n, mintToken: r, subscribeToOwner: i }) {
  let a = !0,
    o = null,
    s = null,
    c = 0,
    l = new AbortController(),
    u = () => a && n() === t,
    d = (e) => b(e, t),
    f = (t, n, r) => {
      u() &&
        c === r &&
        (t.addEventListener(
          `load`,
          () => {
            u() && c === r && e.dispatchEvent(new Event(`load`));
          },
          { once: !0 },
        ),
        (t.src = n),
        t.removeAttribute(`srcdoc`));
    },
    p = async (e, a, o, s) => {
      let p = () => u() && c === s;
      await S(a.origin, async () => {
        if (!p()) return;
        let c = E.get(a.origin);
        if (c?.owner === t && localStorage.getItem(O(a.origin)) === c.lease) {
          let t = await y(a.origin, `GET`);
          if (!p()) return;
          if (t.status === 204) {
            f(e, a.href, s);
            return;
          }
        }
        let u = await r(a.origin, AbortSignal.any([l.signal, AbortSignal.timeout(1e4)]));
        if (!p()) return;
        if (u == null) {
          f(e, o, s);
          return;
        }
        let m = await y(a.origin, `POST`, u);
        if (m.status === 204) {
          let r = crypto.randomUUID();
          try {
            localStorage.setItem(O(a.origin), r);
          } catch {
            (await y(a.origin, `DELETE`), f(e, o, s));
            return;
          }
          (E.set(a.origin, { owner: t, lease: r }), x(t, n, i));
        }
        if (!p()) {
          n() !== t && (await d(a.origin));
          return;
        }
        if (m.status !== 204) {
          f(e, o, s);
          return;
        }
        let h = await y(a.origin, `GET`);
        if (!p()) {
          n() !== t && (await d(a.origin));
          return;
        }
        h.status === 204 ? f(e, a.href, s) : (await d(a.origin), f(e, o, s));
      });
    },
    m = () => {
      if (!u()) return;
      let t = e.contentDocument?.querySelector(`iframe[data-sites-session-preview]`) ?? null;
      if (!t || t === o) return;
      o = t;
      let n = ++c,
        r = o.src;
      if (((s = C(r, window.location.origin)), !s || !navigator.locks || !v())) {
        f(t, r, n);
        return;
      }
      p(t, s, r, n).catch(() => {
        f(t, r, n);
      });
    },
    h = () => {
      if (a && n() !== t && ((a = !1), l.abort(), o && (o.srcdoc = ``), s && navigator.locks)) {
        let e = s.origin;
        S(e, () => d(e)).catch(() => {});
      }
    },
    g = i(h);
  return (
    e.addEventListener(`load`, m),
    window.addEventListener(`focus`, h),
    window.addEventListener(`storage`, h),
    m(),
    () => {
      (h(),
        (a = !1),
        l.abort(),
        g(),
        e.removeEventListener(`load`, m),
        window.removeEventListener(`focus`, h),
        window.removeEventListener(`storage`, h));
    }
  );
}
function v() {
  let e = navigator.userAgent,
    t = /\b(?:HeadlessChrome|Chrome|Chromium)\/(\d+)/.exec(e);
  if (t) return Number(t[1]) >= 114;
  let n = /\bFirefox\/(\d+)/.exec(e);
  if (n) return Number(n[1]) >= 131;
  let r = /\bVersion\/(\d+)\.(\d+).*Safari\//.exec(e);
  return r != null && (Number(r[1]) > 26 || (Number(r[1]) === 26 && Number(r[2]) >= 2));
}
function y(e, t, n) {
  return fetch(new URL(w, e), {
    method: t,
    credentials: `include`,
    redirect: `error`,
    cache: `no-store`,
    referrerPolicy: `no-referrer`,
    ...(n && { headers: { "OAI-Sites-ID-Token": n } }),
    signal: AbortSignal.timeout(1e4),
  });
}
async function b(e, t) {
  let n = E.get(e);
  if (n?.owner === t) {
    if (localStorage.getItem(O(e)) !== n.lease) {
      E.delete(e);
      return;
    }
    (await y(e, `DELETE`)).ok && (E.delete(e), localStorage.removeItem(O(e)));
  }
}
function x(e, t, n) {
  if (D.has(e)) return;
  D.add(e);
  let r = !1,
    i = () => {
      if (!(r || t() === e)) {
        r = !0;
        for (let [t, n] of E) n.owner === e && S(t, () => b(t, e)).catch(() => {});
        (a(), window.removeEventListener(`focus`, i), window.removeEventListener(`storage`, i), D.delete(e));
      }
    },
    a = n(() => queueMicrotask(i));
  (window.addEventListener(`focus`, i), window.addEventListener(`storage`, i));
}
async function S(e, t) {
  return navigator.locks.request(`sites-session-bootstrap:${e}`, t);
}
function C(e, t) {
  let n = new URL(e);
  if (n.protocol !== `https:` || n.username || n.password || n.port) return null;
  if (t === `https://chatgpt.com`) {
    if (
      ((n.hostname = n.hostname.replace(/\.chatgpt-team\.site$/, `.chatgpt.site`)),
      !n.hostname.endsWith(`.chatgpt.site`))
    )
      return null;
  } else if (
    t === `https://chatgpt-staging.com` ||
    /^https:\/\/[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.devbox-\d+\.gateway\.internal\.api\.openai\.org$/.test(t)
  ) {
    if (!n.hostname.endsWith(`.appgardenapps.dev`) && !n.hostname.endsWith(`.appgardenapps.com`)) return null;
  } else return null;
  return (n.searchParams.delete(`sites_preview_token`), n);
}
var w, T, E, D, O;
function k() {
  return (k = e(() => {
    ((w = `/_internal/sites/session-bootstrap`),
      (T = `session_bootstrap`),
      (E = new Map()),
      (D = new Set()),
      (O = (e) => `sites-session-bootstrap:${e}`));
  }))();
}
function A(e) {
  let n = (0, M.c)(21),
    r,
    i,
    a,
    o,
    c;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]), (o = n[4]), (c = n[5]))
    : (({ ref: a, src: o, title: c, onLoad: r, ...i } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o),
      (n[5] = c));
  let u = t(s),
    f = d(!1),
    p = l(f ? P : null),
    m = f && o ? `${o}${o.includes(`?`) ? `&` : `?`}${T}=1` : o,
    h;
  n[6] !== f || n[7] !== p || n[8] !== a || n[9] !== u
    ? ((h = (e) => {
        let t = typeof a == `function` ? a(e) : void 0;
        if ((a && typeof a != `function` && (a.current = e), !e)) return;
        let n =
          f && p
            ? _({
                wrapper: e,
                owner: p,
                currentOwner: () => u.get(P),
                mintToken: j,
                subscribeToOwner: (e) =>
                  u.watch((t) => {
                    (t.get(P), e());
                  }),
              })
            : void 0;
        return () => {
          (n?.(), typeof t == `function` ? t() : typeof a == `function` ? a(null) : a && (a.current = null));
        };
      }),
      (n[6] = f),
      (n[7] = p),
      (n[8] = a),
      (n[9] = u),
      (n[10] = h))
    : (h = n[10]);
  let g = h;
  if (f && p == null) return null;
  let v = f ? p : `legacy`,
    y;
  n[11] !== f || n[12] !== r
    ? ((y = (e) => {
        (f &&
          e.currentTarget.contentDocument
            ?.querySelector(`iframe[data-sites-session-preview]`)
            ?.hasAttribute(`srcdoc`)) ||
          r?.(e);
      }),
      (n[11] = f),
      (n[12] = r),
      (n[13] = y))
    : (y = n[13]);
  let b;
  return (
    n[14] !== i || n[15] !== g || n[16] !== v || n[17] !== y || n[18] !== c || n[19] !== m
      ? ((b = (0, N.jsx)(`iframe`, { ref: g, ...i, src: m, title: c, onLoad: y }, v)),
        (n[14] = i),
        (n[15] = g),
        (n[16] = v),
        (n[17] = y),
        (n[18] = c),
        (n[19] = m),
        (n[20] = b))
      : (b = n[20]),
    b
  );
}
async function j(e, t) {
  try {
    let n = await p.safePost(`/codex/sites/session_bootstrap`, {
      requestBody: { target_url: e },
      expectedErrorStatuses: [403, 404],
      signal: t,
    });
    return n.status === `issued` ? n.id_token : null;
  } catch (e) {
    if (e instanceof u && (e.status === 403 || e.status === 404)) return null;
    throw e;
  }
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = o()),
      c(),
      h(),
      m(),
      n(),
      g(),
      a(),
      k(),
      (N = i()),
      (P = r(s, ({ get: e }) => {
        let t = e(f);
        return t.authLoading ||
          !t.hasChatGptToken ||
          !t.authenticatedUserId ||
          (t.accountId != null && t.accountId !== t.authenticatedAccountId)
          ? null
          : JSON.stringify([t.authenticatedUserId, t.authenticatedAccountId]);
      })));
  }))();
}
export { F as n, A as t };
//# sourceMappingURL=site-session-preview-frame-30d701c04518.js.map
