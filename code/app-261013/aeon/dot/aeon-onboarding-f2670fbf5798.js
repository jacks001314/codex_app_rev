import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cwt as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  Swt as a,
  VDt as o,
  _Mt as s,
  _wt as c,
  fSt as l,
  gMt as u,
  gwt as d,
  jDt as f,
  vzt as p,
  xMt as m,
  yzt as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as _,
  J5t as v,
  K5t as y,
  b5 as b,
  fbn as x,
  gwr as S,
  i7 as C,
  pgr as w,
  r7 as T,
  vgr as E,
  x5 as D,
} from "./app-initial-5851df3f6cb1.js";
import { a as O, t as k } from "./timestamps-85bd12c0e1b2.js";
import { r as A, t as j } from "./timestamp-separator-ed5adecdcb04.js";
import { n as M, r as N, t as P } from "./aeon-response-status-row-f03a8bd9c9d1.js";
var F;
function I() {
  return (I = e(() => {
    (i(), _(), (F = l(S, !1)));
  }))();
}
function L(e) {
  let t = (0, R.c)(7),
    { nowMs: r, sentAtMs: i } = e,
    a = o();
  if (!Number.isFinite(i)) return null;
  let s;
  if (t[0] !== a || t[1] !== r || t[2] !== i) {
    let e = new Date(i),
      o = r == null ? new Date() : new Date(r),
      c = a.formatDate(e, { hour: `numeric`, minute: `2-digit` }),
      l = k(e, o);
    ((s =
      l === 0
        ? (0, z.jsx)(n, {
            id: `aeon.threadTimestamp.today`,
            defaultMessage: `Today, {time}`,
            description: `Timestamp label for a dot thread message sent today`,
            values: { time: c },
          })
        : l === -1
          ? (0, z.jsx)(n, {
              id: `aeon.threadTimestamp.yesterday`,
              defaultMessage: `Yesterday, {time}`,
              description: `Timestamp label for a dot thread message sent yesterday`,
              values: { time: c },
            })
          : a.formatDate(e, {
              year: e.getFullYear() === o.getFullYear() ? void 0 : `numeric`,
              month: `short`,
              day: `numeric`,
              hour: `numeric`,
              minute: `2-digit`,
            })),
      (t[0] = a),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s));
  } else s = t[3];
  let c;
  return (
    t[4] !== s || t[5] !== i
      ? ((c = (0, z.jsx)(j, { compact: !0, sentAtMs: i, children: s })), (t[4] = s), (t[5] = i), (t[6] = c))
      : (c = t[6]),
    c
  );
}
var R, z;
function B() {
  return (B = e(() => {
    ((R = p()), f(), A(), O(), (z = m()));
  }))();
}
var V, H, U, W, G, K;
function q() {
  return (q = e(() => {
    ((V = p()),
      s(),
      t(),
      d(),
      i(),
      (H = h()),
      f(),
      y(),
      E(),
      D(),
      I(),
      N(),
      B(),
      x(),
      T(),
      _(),
      (U = m()),
      (W = function (e) {
        let t = (0, V.c)(44),
          {
            avatar: r,
            avatarEntryAnimation: i,
            avatarLayoutId: s,
            identity: l,
            isThinking: d,
            name: f,
            petId: p,
            trackInlineAvatarVisibility: m,
            startedAtMs: h,
          } = e,
          _ = r === void 0 ? w.avatar : r,
          v = l === void 0 ? `orbit-draft` : l,
          y = d !== void 0 && d,
          x = m !== void 0 && m,
          S = o(),
          T = g(v === `legacy-draft` && C, v),
          E;
        t[0] === i ? (E = t[1]) : ((E = i != null && { opacity: 0, y: 8 }), (t[0] = i), (t[1] = E));
        let D = E,
          O;
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((O = { duration: 0.3, ease: `easeOut` }), (t[2] = O))
          : (O = t[2]);
        let k = O,
          A;
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((A = { type: `spring`, stiffness: 300, damping: 27 }), (t[3] = A))
          : (A = t[3]);
        let j = A,
          N;
        t[4] === S
          ? (N = t[5])
          : ((N = S.formatMessage(
              {
                id: `restricted.aeonOnboarding.introductionAriaLabel.productName.dot`,
                defaultMessage: `Your {productName} introduction`,
                description: `Accessible label for the agent introduction; productName is the untranslated term for the user's agent`,
              },
              { productName: `dot` },
            )),
            (t[4] = S),
            (t[5] = N));
        let F = y && `mb-2`,
          I;
        t[6] === F ? (I = t[7]) : ((I = u(`flex w-full flex-col gap-8`, F)), (t[6] = F), (t[7] = I));
        let L = i === `layout` ? s : void 0,
          R;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = { layout: j }), (t[8] = R)) : (R = t[8]);
        let z;
        t[9] !== _ || t[10] !== v || t[11] !== p || t[12] !== x
          ? ((z = x
              ? (0, U.jsx)(G, { avatar: _, identity: v, petId: p })
              : (0, U.jsx)(b, { className: `size-full`, avatar: _, identity: v, petId: p })),
            (t[9] = _),
            (t[10] = v),
            (t[11] = p),
            (t[12] = x),
            (t[13] = z))
          : (z = t[13]);
        let B;
        t[14] !== L || t[15] !== z
          ? ((B = (0, U.jsx)(c.div, {
              className: `size-16`,
              initial: !1,
              layoutId: L,
              transition: R,
              children: z,
            })),
            (t[14] = L),
            (t[15] = z),
            (t[16] = B))
          : (B = t[16]);
        let H;
        t[17] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((H = { opacity: 1, y: 0 }), (t[17] = H))
          : (H = t[17]);
        let W;
        t[18] !== f || t[19] !== T
          ? ((W = T
              ? (0, U.jsx)(n, {
                  id: `restricted.aeonOnboarding.legacyName`,
                  defaultMessage: `{name} (Legacy)`,
                  description: `Heading showing a new legacy agent's name with a Legacy label to distinguish it from a new dot`,
                  values: { name: f },
                })
              : f),
            (t[18] = f),
            (t[19] = T),
            (t[20] = W))
          : (W = t[20]);
        let q;
        t[21] === W
          ? (q = t[22])
          : ((q = (0, U.jsx)(`h2`, {
              className: `heading-xl max-w-full truncate font-normal tracking-[0.39px] text-default`,
              children: W,
            })),
            (t[21] = W),
            (t[22] = q));
        let J;
        t[23] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((J = (0, U.jsx)(`p`, {
              className: `text-base leading-5 tracking-[-0.14px] text-tertiary`,
              children: (0, U.jsx)(n, {
                id: `restricted.aeonOnboarding.conversationStart`,
                defaultMessage: `Start of conversation`,
                description: `Label beneath an agent's name at the beginning of its conversation`,
              }),
            })),
            (t[23] = J))
          : (J = t[23]);
        let Y;
        t[24] !== D || t[25] !== q
          ? ((Y = (0, U.jsxs)(c.div, {
              animate: H,
              className: `flex w-full flex-col items-center gap-1.5`,
              initial: D,
              transition: k,
              children: [q, J],
            })),
            (t[24] = D),
            (t[25] = q),
            (t[26] = Y))
          : (Y = t[26]);
        let X;
        t[27] !== B || t[28] !== Y
          ? ((X = (0, U.jsxs)(`div`, {
              className: `flex w-full max-w-[528px] flex-col items-center gap-2 self-center pt-1 text-center select-none`,
              children: [B, Y],
            })),
            (t[27] = B),
            (t[28] = Y),
            (t[29] = X))
          : (X = t[29]);
        let Z;
        t[30] !== _ || t[31] !== D || t[32] !== v || t[33] !== y || t[34] !== p || t[35] !== h
          ? ((Z =
              h != null || y
                ? (0, U.jsxs)(c.div, {
                    animate: { opacity: 1, y: 0 },
                    className: `mt-6 flex w-full flex-col`,
                    initial: D,
                    transition: k,
                    children: [
                      h == null || y ? null : (0, U.jsx)(K, { sentAtMs: h }),
                      (0, U.jsx)(a, {
                        initial: !1,
                        mode: `popLayout`,
                        children: y
                          ? (0, U.jsx)(
                              c.div,
                              {
                                exit: { opacity: 0 },
                                role: `status`,
                                transition: k,
                                children: (0, U.jsx)(P, {
                                  avatar: (0, U.jsx)(b, {
                                    className: `size-7`,
                                    avatar: _,
                                    identity: v,
                                    petId: p,
                                  }),
                                  children: (0, U.jsx)(M, {
                                    children: (0, U.jsx)(n, {
                                      id: `thinkingShimmer.default`,
                                      defaultMessage: `Thinking`,
                                      description: `Default placeholder shown while the assistant is thinking`,
                                    }),
                                  }),
                                }),
                              },
                              `thinking`,
                            )
                          : null,
                      }),
                    ],
                  })
                : null),
            (t[30] = _),
            (t[31] = D),
            (t[32] = v),
            (t[33] = y),
            (t[34] = p),
            (t[35] = h),
            (t[36] = Z))
          : (Z = t[36]);
        let Q;
        t[37] !== X || t[38] !== Z
          ? ((Q = (0, U.jsxs)(`div`, { className: `flex w-full flex-col`, children: [X, Z] })),
            (t[37] = X),
            (t[38] = Z),
            (t[39] = Q))
          : (Q = t[39]);
        let $;
        return (
          t[40] !== I || t[41] !== Q || t[42] !== N
            ? (($ = (0, U.jsx)(`section`, { "aria-label": N, className: I, children: Q })),
              (t[40] = I),
              (t[41] = Q),
              (t[42] = N),
              (t[43] = $))
            : ($ = t[43]),
          $
        );
      }),
      (G = function (e) {
        let t = (0, V.c)(7),
          { avatar: n, identity: i, petId: a } = e,
          o = r(S),
          s = (0, H.useRef)(null),
          c,
          l;
        (t[0] === o
          ? ((c = t[1]), (l = t[2]))
          : ((c = () => {
              let e = s.current;
              if ((o.set(F, !0), e == null || typeof IntersectionObserver > `u`))
                return () => {
                  o.set(F, !1);
                };
              let t = new IntersectionObserver((e) => {
                let [t] = e;
                o.set(F, t?.isIntersecting === !0);
              });
              return (
                t.observe(e),
                () => {
                  (t.disconnect(), o.set(F, !1));
                }
              );
            }),
            (l = [o]),
            (t[0] = o),
            (t[1] = c),
            (t[2] = l)),
          (0, H.useLayoutEffect)(c, l));
        let u;
        return (
          t[3] !== n || t[4] !== i || t[5] !== a
            ? ((u = (0, U.jsx)(`span`, {
                ref: s,
                className: `block size-16`,
                children: (0, U.jsx)(b, { className: `size-full`, avatar: n, identity: i, petId: a }),
              })),
              (t[3] = n),
              (t[4] = i),
              (t[5] = a),
              (t[6] = u))
            : (u = t[6]),
          u
        );
      }),
      (K = function (e) {
        let t = (0, V.c)(5),
          { sentAtMs: n } = e,
          r = v(),
          i;
        t[0] === r ? (i = t[1]) : ((i = r.getTime()), (t[0] = r), (t[1] = i));
        let a;
        return (
          t[2] !== n || t[3] !== i
            ? ((a = (0, U.jsx)(L, { nowMs: i, sentAtMs: n })), (t[2] = n), (t[3] = i), (t[4] = a))
            : (a = t[4]),
          a
        );
      }));
  }))();
}
export { F as a, B as i, q as n, I as o, L as r, W as t };
//# sourceMappingURL=aeon-onboarding-f2670fbf5798.js.map
