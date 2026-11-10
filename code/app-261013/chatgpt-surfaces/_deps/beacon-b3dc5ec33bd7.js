import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cat as t,
  Cot as n,
  IDt as r,
  Ixt as ee,
  Pxt as i,
  Vxt as te,
  _xt as a,
  jDt as o,
  nz as ne,
  tz as s,
  vzt as c,
  wat as re,
  wot as l,
  wxt as ie,
  xMt as u,
  yMt as d,
  yzt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as p,
  KNn as m,
  M0 as h,
  N0 as ae,
  TQt as g,
  Tb as _,
  XNn as oe,
  _9t as v,
  j0 as y,
  lQt as b,
  tNr as x,
  uQt as se,
  v9t as S,
  wQt as C,
  wb as ce,
} from "./app-initial-5851df3f6cb1.js";
import { By as le, Gy as ue, Uy as w, Vy as de, Wy as fe } from "./app-primary-fe8a450b3b04.js";
import {
  a as pe,
  d as me,
  i as T,
  n as E,
  o as he,
  r as ge,
  s as D,
  t as _e,
} from "./library-connect-provider-logos-a622da60af1e.js";
function O(e) {
  let t = (0, A.c)(68),
    { accountId: i, analyticsContext: a, beacon: o, isPreview: s, onActionComplete: c, onDismiss: l } = e,
    u;
  t[0] === a
    ? (u = t[1])
    : ((u = a === void 0 ? { placement: `homepage`, productExperience: `chat`, treatment: `tooltip` } : a),
      (t[0] = a),
      (t[1] = u));
  let d = u,
    f = s !== void 0 && s,
    m = ee(n),
    h = oe(),
    _ = ie(),
    v = ne(`(min-width: 768px)`),
    b = (0, j.useId)(),
    [x, C] = (0, j.useState)(!1),
    w = te(me),
    T;
  t[2] !== w || t[3] !== x || t[4] !== f || t[5] !== _
    ? ((T = !x && (f || (!re(_.search) && w.some(ye)))),
      (t[2] = w),
      (t[3] = x),
      (t[4] = f),
      (t[5] = _),
      (t[6] = T))
    : (T = t[6]);
  let E = T,
    [D, O] = (0, j.useState)(null),
    P = (0, j.useSyncExternalStore)(ae, y, y),
    F;
  t[7] !== i || t[8] !== d || t[9] !== o || t[10] !== E || t[11] !== f || t[12] !== m
    ? ((F = () => {
        !f && E && m.get(p) === i && (ue(m, i, o), fe(m, i, o, d));
      }),
      (t[7] = i),
      (t[8] = d),
      (t[9] = o),
      (t[10] = E),
      (t[11] = f),
      (t[12] = m),
      (t[13] = F))
    : (F = t[13]);
  let I = (0, j.useEffectEvent)(F),
    L,
    R;
  (t[14] !== P || t[15] !== E
    ? ((L = () => {
        if (!E) return;
        let e = new Set(),
          t = new IntersectionObserver(
            (t) => {
              for (let n of t)
                n.target instanceof HTMLElement &&
                  (n.isIntersecting && n.intersectionRatio >= 0.5 ? e.add(n.target) : e.delete(n.target));
              let n = Array.from(e).find(ve) ?? null;
              O(n);
            },
            { threshold: 0.5 },
          );
        for (let e of P) t.observe(e);
        return () => {
          t.disconnect();
        };
      }),
      (R = [P, E]),
      (t[14] = P),
      (t[15] = E),
      (t[16] = L),
      (t[17] = R))
    : ((L = t[16]), (R = t[17])),
    (0, j.useEffect)(L, R));
  let z;
  t[18] !== D || t[19] !== E || t[20] !== I
    ? ((z = () => {
        if (!E || D == null) return;
        let e = requestAnimationFrame(() => {
          e = requestAnimationFrame(() => I());
        });
        return () => cancelAnimationFrame(e);
      }),
      (t[18] = D),
      (t[19] = E),
      (t[20] = I),
      (t[21] = z))
    : (z = t[21]);
  let B;
  (t[22] !== D || t[23] !== E ? ((B = [D, E]), (t[22] = D), (t[23] = E), (t[24] = B)) : (B = t[24]),
    (0, j.useEffect)(z, B));
  let V;
  t[25] !== i || t[26] !== d || t[27] !== o || t[28] !== x || t[29] !== f || t[30] !== c || t[31] !== m
    ? ((V = () => {
        if (x || m.get(p) !== i) return null;
        let e = o.action_items[0];
        if (e?.action_v2.action_enum !== `open_local_url`) return null;
        if ((C(!0), !f)) {
          let t = ge(m, i);
          (m.set(pe, t),
            he(m, t, `entrypoint`),
            g(m, { beacon: o, action: `click`, actionId: e.id, destinationAction: `open_local_url`, ...d }),
            se({ beacon: o, eventType: `click`, eventCtaId: e.id, accountId: i }),
            le(m, i, o));
        }
        return (c?.(e), e.action_v2.web_url);
      }),
      (t[25] = i),
      (t[26] = d),
      (t[27] = o),
      (t[28] = x),
      (t[29] = f),
      (t[30] = c),
      (t[31] = m),
      (t[32] = V))
    : (V = t[32]);
  let H = (0, j.useEffectEvent)(V),
    U;
  t[33] !== D || t[34] !== E || t[35] !== H || t[36] !== m || t[37] !== b
    ? ((U = () => {
        if (D == null || !E) return;
        let e = { activate: () => H() };
        m.set(S, e);
        let t = D.getAttribute(`aria-describedby`);
        return (
          D.setAttribute(`aria-describedby`, [t, b].filter(Boolean).join(` `)),
          () => {
            (m.get(S) === e && m.set(S, null),
              t == null ? D.removeAttribute(`aria-describedby`) : D.setAttribute(`aria-describedby`, t));
          }
        );
      }),
      (t[33] = D),
      (t[34] = E),
      (t[35] = H),
      (t[36] = m),
      (t[37] = b),
      (t[38] = U))
    : (U = t[38]);
  let W;
  if (
    (t[39] !== D || t[40] !== E || t[41] !== m || t[42] !== b
      ? ((W = [D, E, m, b]), (t[39] = D), (t[40] = E), (t[41] = m), (t[42] = b), (t[43] = W))
      : (W = t[43]),
    (0, j.useEffect)(U, W),
    !E || D == null || !D.isConnected)
  )
    return null;
  let G;
  t[44] !== i || t[45] !== d || t[46] !== o || t[47] !== x || t[48] !== f || t[49] !== l || t[50] !== m
    ? ((G = () => {
        x ||
          m.get(p) !== i ||
          (C(!0), f || (g(m, { beacon: o, action: `dismiss`, ...d }), de(m, i, o)), l?.());
      }),
      (t[44] = i),
      (t[45] = d),
      (t[46] = o),
      (t[47] = x),
      (t[48] = f),
      (t[49] = l),
      (t[50] = m),
      (t[51] = G))
    : (G = t[51]);
  let K = G,
    q;
  t[52] !== D || t[53] !== w
    ? ((q =
        D.hasAttribute(`data-library-onboarding-logo-anchor`) &&
        (0, M.createPortal)((0, N.jsx)(_e, { providers: w.map(k) }), D)),
      (t[52] = D),
      (t[53] = w),
      (t[54] = q))
    : (q = t[54]);
  let J = v ? `center` : `start`,
    Y = v ? `end` : `bottom`,
    X;
  t[55] === h
    ? (X = t[56])
    : ((X = h
        ? (0, N.jsx)(r, {
            id: `libraryOnboarding.beacon.title.space`,
            defaultMessage: `Find files from your apps in Space`,
            description: `Title of the coachmark pointing to Space, where users can find files from connected storage apps. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : (0, N.jsx)(r, {
            id: `libraryOnboarding.beacon.title`,
            defaultMessage: `Find files from your apps in Library`,
            description: `Title of the coachmark pointing to Library, where users can find files from connected storage apps`,
          })),
      (t[55] = h),
      (t[56] = X));
  let Z;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, N.jsx)(r, {
        id: `libraryOnboarding.beacon.description`,
        defaultMessage: `Open files from your connected apps`,
        description: `Description of the Library connected-apps coachmark`,
      })),
      (t[57] = Z))
    : (Z = t[57]);
  let Q;
  t[58] !== D || t[59] !== K || t[60] !== J || t[61] !== Y || t[62] !== X || t[63] !== b
    ? ((Q = (0, N.jsx)(ce, {
        id: b,
        align: J,
        anchor: D,
        onDismiss: K,
        side: Y,
        size: `wide`,
        title: X,
        body: Z,
      })),
      (t[58] = D),
      (t[59] = K),
      (t[60] = J),
      (t[61] = Y),
      (t[62] = X),
      (t[63] = b),
      (t[64] = Q))
    : (Q = t[64]);
  let $;
  return (
    t[65] !== q || t[66] !== Q
      ? (($ = (0, N.jsxs)(N.Fragment, { children: [q, Q] })), (t[65] = q), (t[66] = Q), (t[67] = $))
      : ($ = t[67]),
    $
  );
}
function k(e) {
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
    ((A = c()),
      i(),
      (j = f()),
      (M = d()),
      o(),
      a(),
      x(),
      b(),
      C(),
      _(),
      t(),
      w(),
      s(),
      m(),
      l(),
      h(),
      E(),
      D(),
      v(),
      T(),
      (N = u()));
  }))();
}
P();
export { O as LibraryOnboardingBeacon };
//# sourceMappingURL=beacon-b3dc5ec33bd7.js.map
