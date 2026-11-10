import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  FNt as i,
  LNt as a,
  NSt as o,
  PBt as s,
  Qst as ee,
  Uot as c,
  VSt as te,
  Wot as ne,
  XOt as l,
  Xz as u,
  ZSt as d,
  Zz as re,
  iCt as f,
  tkt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $2 as m,
  Kb as ie,
  Q2 as h,
  Rnn as g,
  SLn as ae,
  a$t as oe,
  b$t as _,
  e4 as se,
  i$t as v,
  qb as y,
  vLn as b,
  wLr as x,
  y$t as S,
  zRr as C,
  znn as w,
} from "./app-initial-ad16eaadf81f.js";
import { cb as ce, db as T, fb as le, lb as ue, pb as de } from "./app-primary-3e00728c2a4c.js";
import {
  a as fe,
  d as pe,
  i as E,
  n as D,
  o as me,
  r as he,
  s as O,
  t as ge,
} from "./library-connect-provider-logos-cb6a4ce84b41.js";
function k(e) {
  let n = (0, A.c)(68),
    { accountId: r, analyticsContext: i, beacon: a, isPreview: o, onActionComplete: s, onDismiss: c } = e,
    l;
  n[0] === i
    ? (l = n[1])
    : ((l = i === void 0 ? { placement: `homepage`, productExperience: `chat`, treatment: `tooltip` } : i),
      (n[0] = i),
      (n[1] = l));
  let u = l,
    d = o !== void 0 && o,
    m = t(ee),
    g = ae(),
    v = te(),
    y = re(`(min-width: 768px)`),
    b = (0, j.useId)(),
    [x, S] = (0, j.useState)(!1),
    T = f(pe),
    E;
  n[2] !== T || n[3] !== x || n[4] !== d || n[5] !== v
    ? ((E = !x && (d || (!ne(v.search) && T.some(ye)))),
      (n[2] = T),
      (n[3] = x),
      (n[4] = d),
      (n[5] = v),
      (n[6] = E))
    : (E = n[6]);
  let D = E,
    [O, k] = (0, j.useState)(null),
    P = (0, j.useSyncExternalStore)(se, h, h),
    F;
  n[7] !== r || n[8] !== u || n[9] !== a || n[10] !== D || n[11] !== d || n[12] !== m
    ? ((F = () => {
        !d && D && m.get(C) === r && (de(m, r, a), le(m, r, a, u));
      }),
      (n[7] = r),
      (n[8] = u),
      (n[9] = a),
      (n[10] = D),
      (n[11] = d),
      (n[12] = m),
      (n[13] = F))
    : (F = n[13]);
  let I = (0, j.useEffectEvent)(F),
    L,
    R;
  (n[14] !== P || n[15] !== D
    ? ((L = () => {
        if (!D) return;
        let e = new Set(),
          t = new IntersectionObserver(
            (t) => {
              for (let n of t)
                n.target instanceof HTMLElement &&
                  (n.isIntersecting && n.intersectionRatio >= 0.5 ? e.add(n.target) : e.delete(n.target));
              let n = Array.from(e).find(ve) ?? null;
              k(n);
            },
            { threshold: 0.5 },
          );
        for (let e of P) t.observe(e);
        return () => {
          t.disconnect();
        };
      }),
      (R = [P, D]),
      (n[14] = P),
      (n[15] = D),
      (n[16] = L),
      (n[17] = R))
    : ((L = n[16]), (R = n[17])),
    (0, j.useEffect)(L, R));
  let z;
  n[18] !== O || n[19] !== D || n[20] !== I
    ? ((z = () => {
        if (!D || O == null) return;
        let e = requestAnimationFrame(() => {
          e = requestAnimationFrame(() => I());
        });
        return () => cancelAnimationFrame(e);
      }),
      (n[18] = O),
      (n[19] = D),
      (n[20] = I),
      (n[21] = z))
    : (z = n[21]);
  let B;
  (n[22] !== O || n[23] !== D ? ((B = [O, D]), (n[22] = O), (n[23] = D), (n[24] = B)) : (B = n[24]),
    (0, j.useEffect)(z, B));
  let V;
  n[25] !== r || n[26] !== u || n[27] !== a || n[28] !== x || n[29] !== d || n[30] !== s || n[31] !== m
    ? ((V = () => {
        if (x || m.get(C) !== r) return null;
        let e = a.action_items[0];
        if (e?.action_v2.action_enum !== `open_local_url`) return null;
        if ((S(!0), !d)) {
          let t = he(m, r);
          (m.set(fe, t),
            me(m, t, `entrypoint`),
            _(m, { beacon: a, action: `click`, actionId: e.id, destinationAction: `open_local_url`, ...u }),
            oe({ beacon: a, eventType: `click`, eventCtaId: e.id, accountId: r }),
            ce(m, r, a));
        }
        return (s?.(e), e.action_v2.web_url);
      }),
      (n[25] = r),
      (n[26] = u),
      (n[27] = a),
      (n[28] = x),
      (n[29] = d),
      (n[30] = s),
      (n[31] = m),
      (n[32] = V))
    : (V = n[32]);
  let H = (0, j.useEffectEvent)(V),
    U;
  n[33] !== O || n[34] !== D || n[35] !== H || n[36] !== m || n[37] !== b
    ? ((U = () => {
        if (O == null || !D) return;
        let e = { activate: () => H() };
        m.set(w, e);
        let t = O.getAttribute(`aria-describedby`);
        return (
          O.setAttribute(`aria-describedby`, [t, b].filter(Boolean).join(` `)),
          () => {
            (m.get(w) === e && m.set(w, null),
              t == null ? O.removeAttribute(`aria-describedby`) : O.setAttribute(`aria-describedby`, t));
          }
        );
      }),
      (n[33] = O),
      (n[34] = D),
      (n[35] = H),
      (n[36] = m),
      (n[37] = b),
      (n[38] = U))
    : (U = n[38]);
  let W;
  if (
    (n[39] !== O || n[40] !== D || n[41] !== m || n[42] !== b
      ? ((W = [O, D, m, b]), (n[39] = O), (n[40] = D), (n[41] = m), (n[42] = b), (n[43] = W))
      : (W = n[43]),
    (0, j.useEffect)(U, W),
    !D || O == null || !O.isConnected)
  )
    return null;
  let G;
  n[44] !== r || n[45] !== u || n[46] !== a || n[47] !== x || n[48] !== d || n[49] !== c || n[50] !== m
    ? ((G = () => {
        x ||
          m.get(C) !== r ||
          (S(!0), d || (_(m, { beacon: a, action: `dismiss`, ...u }), ue(m, r, a)), c?.());
      }),
      (n[44] = r),
      (n[45] = u),
      (n[46] = a),
      (n[47] = x),
      (n[48] = d),
      (n[49] = c),
      (n[50] = m),
      (n[51] = G))
    : (G = n[51]);
  let K = G,
    q;
  n[52] !== O || n[53] !== T
    ? ((q =
        O.hasAttribute(`data-library-onboarding-logo-anchor`) &&
        (0, M.createPortal)((0, N.jsx)(ge, { providers: T.map(_e) }), O)),
      (n[52] = O),
      (n[53] = T),
      (n[54] = q))
    : (q = n[54]);
  let J = y ? `center` : `start`,
    Y = y ? `end` : `bottom`,
    X;
  n[55] === g
    ? (X = n[56])
    : ((X = g
        ? (0, N.jsx)(p, {
            id: `libraryOnboarding.beacon.title.space`,
            defaultMessage: `Find files from your apps in Space`,
            description: `Title of the coachmark pointing to Space, where users can find files from connected storage apps. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : (0, N.jsx)(p, {
            id: `libraryOnboarding.beacon.title`,
            defaultMessage: `Find files from your apps in Library`,
            description: `Title of the coachmark pointing to Library, where users can find files from connected storage apps`,
          })),
      (n[55] = g),
      (n[56] = X));
  let Z;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, N.jsx)(p, {
        id: `libraryOnboarding.beacon.description`,
        defaultMessage: `Open files from your connected apps`,
        description: `Description of the Library connected-apps coachmark`,
      })),
      (n[57] = Z))
    : (Z = n[57]);
  let Q;
  n[58] !== O || n[59] !== K || n[60] !== J || n[61] !== Y || n[62] !== X || n[63] !== b
    ? ((Q = (0, N.jsx)(ie, {
        id: b,
        align: J,
        anchor: O,
        onDismiss: K,
        side: Y,
        size: `wide`,
        title: X,
        body: Z,
      })),
      (n[58] = O),
      (n[59] = K),
      (n[60] = J),
      (n[61] = Y),
      (n[62] = X),
      (n[63] = b),
      (n[64] = Q))
    : (Q = n[64]);
  let $;
  return (
    n[65] !== q || n[66] !== Q
      ? (($ = (0, N.jsxs)(N.Fragment, { children: [q, Q] })), (n[65] = q), (n[66] = Q), (n[67] = $))
      : ($ = n[67]),
    $
  );
}
function _e(e) {
  let { provider: t } = e;
  return t;
}
function ve(e) {
  return e.isConnected;
}
function ye(e) {
  let { state: t } = e;
  return t === `connected` || t === `connectable` || t === `reconnectable`;
}
var A, j, M, N;
function P() {
  return (P = e(() => {
    ((A = s()),
      d(),
      (j = r()),
      (M = i()),
      l(),
      o(),
      x(),
      v(),
      S(),
      y(),
      c(),
      T(),
      u(),
      b(),
      n(),
      m(),
      D(),
      O(),
      g(),
      E(),
      (N = a()));
  }))();
}
P();
export { k as LibraryOnboardingBeacon };
//# sourceMappingURL=beacon-12c27da70717.js.map
