import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  JR as r,
  Pxt as i,
  Vxt as a,
  YR as o,
  _xt as s,
  vzt as c,
  wot as l,
  wxt as u,
  xMt as d,
  yzt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as p,
  GMr as m,
  XMr as h,
  _wr as g,
  mer as _,
  per as v,
  tNr as y,
  xwr as b,
} from "./app-initial-5851df3f6cb1.js";
import { i as x, n as S, t as C } from "./dot-onboarding-handoff-state-90c4149da252.js";
import {
  a as w,
  i as T,
  n as E,
  o as D,
  r as O,
  s as k,
  t as A,
} from "./dot-onboarding-ring-43524a0e1a87.js";
function j() {
  let e = (0, N.c)(24),
    r = n(t),
    i = (0, P.useId)(),
    s = (0, P.useRef)(null),
    c = a(S),
    l = a(m),
    d = a(h),
    f = (0, P.useRef)(null),
    p = u(),
    v = o(),
    y;
  e[0] !== p.pathname || e[1] !== r
    ? ((y = () => {
        let e = r.get(S);
        e != null &&
          (e.phase !== `flying` ||
            e.conversationId == null ||
            b(r.get(_, g({ pathname: p.pathname, routeTemplate: p.pathname }))) !== e.conversationId) &&
          r.set(S, null);
      }),
      (e[0] = p.pathname),
      (e[1] = r),
      (e[2] = y))
    : (y = e[2]);
  let x;
  (e[3] !== p.key || e[4] !== p.pathname || e[5] !== r
    ? ((x = [p.key, p.pathname, r]), (e[3] = p.key), (e[4] = p.pathname), (e[5] = r), (e[6] = x))
    : (x = e[6]),
    (0, P.useLayoutEffect)(y, x));
  let E;
  e[7] === r
    ? (E = e[8])
    : ((E = () => () => {
        r.set(S, null);
      }),
      (e[7] = r),
      (e[8] = E));
  let D;
  (e[9] !== l || e[10] !== r || e[11] !== d
    ? ((D = [r, l, d]), (e[9] = l), (e[10] = r), (e[11] = d), (e[12] = D))
    : (D = e[12]),
    (0, P.useLayoutEffect)(E, D));
  let j, I;
  (e[13] !== c || e[14] !== v || e[15] !== r
    ? ((j = () => {
        let e = s.current,
          t = f.current;
        if (e == null || t == null || c?.phase === `departing`) return;
        if (c == null || c.phase === `arrived`) {
          e.style.visibility = `hidden`;
          return;
        }
        let n = c.source,
          i = t.getBoundingClientRect(),
          a = i.width / t.offsetWidth,
          o = i.height / t.offsetHeight;
        (k(e, n, i, a, o), (e.style.color = c.sourceColor), (e.style.visibility = `visible`));
        let l = T(),
          u = !1,
          d = () => {
            !u && r.get(S) === c && r.set(S, { ...c, phase: `arrived` });
          },
          p = () => {
            (l.finish(), d());
          },
          m = c.destination;
        m != null &&
          l
            .animate(
              e,
              [
                { transform: `none`, color: c.sourceColor },
                { transform: `${w(n, m, a, o)} scale(${m.width / n.width})`, color: c.color },
              ],
              v ? 0 : O.flightDuration,
              0,
              O.easeTravel,
            )
            .then(d, M);
        let h = m == null ? window.setTimeout(d, O.longFlightDuration + O.revealDuration) : void 0;
        return (
          window.addEventListener(`resize`, p),
          document.addEventListener(`visibilitychange`, p),
          () => {
            ((u = !0),
              l.cancel(),
              window.clearTimeout(h),
              window.removeEventListener(`resize`, p),
              document.removeEventListener(`visibilitychange`, p));
          }
        );
      }),
      (I = [c, v, r]),
      (e[13] = c),
      (e[14] = v),
      (e[15] = r),
      (e[16] = j),
      (e[17] = I))
    : ((j = e[16]), (I = e[17])),
    (0, P.useLayoutEffect)(j, I));
  let L;
  e[18] !== i || e[19] !== r
    ? ((L = (e) => {
        if (((s.current = e), e != null))
          return (
            r.set(C, i),
            () => {
              ((s.current = null), r.get(C) === i && r.set(C, null));
            }
          );
      }),
      (e[18] = i),
      (e[19] = r),
      (e[20] = L))
    : (L = e[20]);
  let R;
  return (
    e[21] !== i || e[22] !== L
      ? ((R = (0, F.jsx)(`div`, {
          ref: f,
          className: `pointer-events-none fixed inset-0 z-50 overflow-hidden`,
          "aria-hidden": !0,
          children: (0, F.jsx)(A, { id: i, ref: L, className: `invisible absolute origin-center` }),
        })),
        (e[21] = i),
        (e[22] = L),
        (e[23] = R))
      : (R = e[23]),
    R
  );
}
function M() {}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = c()), i(), (P = f()), s(), y(), r(), l(), p(), v(), x(), D(), E(), (F = d()));
  }))();
}
I();
export { j as DotOnboardingFlight };
//# sourceMappingURL=dot-onboarding-flight-225a886f97cc.js.map
