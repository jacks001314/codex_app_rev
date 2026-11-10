const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./animated-icon-svg-5a3cd3e3666e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./index.es-c9d2fdc4b353.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./lottie_light-6d958e55eef3.js",
      "./browser-146e2ed629fe.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./zod-a5c35192d1ab.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  F3 as i,
  FBt as a,
  Fd as o,
  HO as s,
  I3 as c,
  IO as l,
  Id as u,
  JO as d,
  KO as f,
  LNt as p,
  Ld as m,
  OB as h,
  OFt as g,
  PBt as _,
  Qst as v,
  Rd as y,
  Uz as b,
  WO as x,
  Wz as S,
  XOt as C,
  Y3 as w,
  Z3 as T,
  ZSt as E,
  iCt as D,
  kFt as ee,
  mTt as te,
  nCt as O,
  pTt as ne,
  qO as k,
  tkt as A,
  vD as re,
  yD as j,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  D$n as M,
  VPn as ie,
  dTn as ae,
  lDn as oe,
  oon as N,
  sDn as se,
  son as ce,
  uTn as le,
} from "./app-initial-ad16eaadf81f.js";
import { i as ue, n as de, t as P } from "./disclosure-state-b93b7fa86863.js";
function F(e) {
  let t = (0, R.c)(2),
    n = S(),
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, B.jsx)(`div`, {
          "aria-hidden": !0,
          className: `pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden`,
          children: n ? (0, B.jsx)(L, {}) : (0, B.jsx)(I, {}),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function I(e) {
  let t = (0, R.c)(7),
    n = (0, z.useRef)(null),
    r = te(n),
    i = D(le),
    [a, o] = (0, z.useState)(!1);
  if (a) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, B.jsx)(L, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, B.jsx)(L, {})), (t[1] = s)) : (s = t[1]);
  let c;
  t[2] !== r || t[3] !== i
    ? ((c = r && i === !0 ? (0, B.jsx)(U, { onError: () => o(!0) }) : null),
      (t[2] = r),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] === c
      ? (l = t[6])
      : ((l = (0, B.jsx)(se, {
          name: `BusinessAgentDisclosureHero`,
          fallback: s,
          children: (0, B.jsx)(`div`, { ref: n, className: `absolute inset-0`, children: c }),
        })),
        (t[5] = c),
        (t[6] = l)),
    l
  );
}
function L(e) {
  let t = (0, R.c)(1),
    n;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, B.jsx)(`img`, {
          className: `absolute inset-0 size-full object-cover`,
          alt: ``,
          draggable: !1,
          referrerPolicy: `no-referrer`,
          src: V,
        })),
        (t[0] = n))
      : (n = t[0]),
    n
  );
}
var R, z, B, V, H, U;
function W() {
  return (W = e(() => {
    ((R = _()),
      ne(),
      E(),
      (z = a()),
      ae(),
      oe(),
      i(),
      b(),
      (B = p()),
      ee(),
      (V = `https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png`),
      (H = `https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-animation-1754caf3cef014e7.lottie`),
      (U = c(
        async () => {
          let [{ SvgLottie: e }, { strFromU8: t, unzipSync: n }, { z: r }, i] = await Promise.all([
            g(
              () => import(`./animated-icon-svg-5a3cd3e3666e.js`),
              __vite__mapDeps([0, 1, 2, 3, 4, 5]),
              import.meta.url,
            ),
            g(
              () => import(`./browser-146e2ed629fe.js`),
              __vite__mapDeps([6, 7, 1, 3, 4, 8]),
              import.meta.url,
            ),
            g(() => import(`./zod-a5c35192d1ab.js`), __vite__mapDeps([9, 3, 1, 4]), import.meta.url),
            fetch(H, {
              credentials: `omit`,
              referrerPolicy: `no-referrer`,
              redirect: `error`,
              signal: AbortSignal.timeout(5e3),
            })
              .then((e) => (e.ok ? e.arrayBuffer() : null))
              .catch(() => null),
          ]);
          if (i == null)
            return function (e) {
              return (0, B.jsx)(L, {});
            };
          let a = `animations/sponsored-agents.json`,
            o = n(new Uint8Array(i), { filter: ({ name: e }) => e === a })[a];
          if (o == null) throw Error(`Business Agent disclosure animation is missing`);
          let s = r
            .looseObject({
              layers: r.array(
                r.looseObject({
                  nm: r.string().optional(),
                  refId: r.string().optional(),
                  masksProperties: r.array(r.looseObject({ nm: r.string().optional() })).optional(),
                }),
              ),
            })
            .parse(JSON.parse(t(o)));
          return function ({ onError: t }) {
            let [n, r] = (0, z.useState)(!1),
              [i] = (0, z.useState)(() => {
                let e = structuredClone(s);
                for (let t of e.layers)
                  t.nm === `🖼️ Image (replace img. layer)` &&
                    t.refId === `art_0` &&
                    (t.masksProperties = t.masksProperties?.filter((e) => e.nm !== `Sheet top corners`));
                return e;
              });
            return (0, B.jsx)(`div`, {
              className: n ? `size-full` : `invisible size-full`,
              children: (0, B.jsx)(e, {
                className: `size-full`,
                animationData: i,
                autoplay: !0,
                loop: !0,
                onDataFailed: t,
                onDOMLoaded: () => r(!0),
              }),
            });
          };
        },
        { errorFallback: (0, B.jsx)(L, {}) },
      )));
  }))();
}
function fe(e) {
  let t = (0, K.c)(11),
    { state: n } = e,
    r = n.status === `ready` ? n.context : n,
    i = r.businessName ?? null,
    a = r.logoUrl ?? null,
    o;
  t[0] !== i || t[1] !== a
    ? ((o = (0, J.jsx)(N, { alt: ``, name: i, size: `md`, src: a })), (t[0] = i), (t[1] = a), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r.businessName
    ? (s = t[4])
    : ((s = (0, J.jsx)(`span`, {
        className: `truncate text-sm font-semibold`,
        children: (0, J.jsx)(G, { businessName: r.businessName }),
      })),
      (t[3] = r.businessName),
      (t[4] = s));
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, J.jsx)(`span`, {
        className: `truncate text-xs font-normal text-secondary`,
        children: (0, J.jsx)(A, {
          id: `chatgpt.ads.business_agent.thread_header.subtitle`,
          defaultMessage: `Business chat`,
          description: `Short subtitle beneath the business name in the header of a Business Agent conversation. It tells an end user that the custom GPT chat represents a business. Keep this compact enough to fit on one line; there are no placeholders or formatting.`,
        }),
      })),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === s
    ? (l = t[7])
    : ((l = (0, J.jsxs)(`div`, { className: `flex min-w-0 flex-col text-start`, children: [s, c] })),
      (t[6] = s),
      (t[7] = l));
  let u;
  return (
    t[8] !== o || t[9] !== l
      ? ((u = (0, J.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-2 select-none`,
          children: [o, l],
        })),
        (t[8] = o),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function pe(e) {
  let t = (0, K.c)(14),
    { state: n, onStarterPromptSelect: r } = e,
    i = n.status === `ready` ? n.context : n,
    a;
  if (
    t[0] !== i.businessName ||
    t[1] !== i.logoUrl ||
    t[2] !== i.showConversationStarters ||
    t[3] !== r ||
    t[4] !== n.context ||
    t[5] !== n.status
  ) {
    let e =
        n.status === `ready` && i.showConversationStarters
          ? n.context.conversationStarters?.slice(0, 4)
          : void 0,
      o = i.businessName ?? null,
      s = i.logoUrl ?? null,
      c;
    t[7] !== o || t[8] !== s
      ? ((c = (0, J.jsx)(N, { alt: ``, name: o, size: `lg`, src: s })), (t[7] = o), (t[8] = s), (t[9] = c))
      : (c = t[9]);
    let l;
    t[10] === i.businessName
      ? (l = t[11])
      : ((l = (0, J.jsx)(`h1`, {
          className: `heading-xl font-normal text-default select-none`,
          children: (0, J.jsx)(G, { businessName: i.businessName }),
        })),
        (t[10] = i.businessName),
        (t[11] = l));
    let u;
    (t[12] === n.status
      ? (u = t[13])
      : ((u =
          n.status === `ready`
            ? null
            : (0, J.jsx)(re, {
                ariaLive: `polite`,
                role: n.status === `failed` ? `alert` : `status`,
                type: n.status === `failed` ? `error` : `normal`,
                content:
                  n.status === `failed`
                    ? (0, J.jsx)(A, {
                        id: `chatgptConversations.businessAgent.unavailable`,
                        defaultMessage: `This Business Agent is unavailable. Please return to the ad and try again`,
                        description: `Error on a Business Agent chat destination when creating its interaction fails; sending is unavailable and the user can retry from the original ad`,
                      })
                    : (0, J.jsx)(A, {
                        id: `chatgptConversations.businessAgent.loading`,
                        defaultMessage: `Opening Business Agent…`,
                        description: `Loading status on a Business Agent chat destination while its interaction is being created`,
                      }),
              })),
        (t[12] = n.status),
        (t[13] = u)),
      (a = (0, J.jsxs)(`div`, {
        className: `mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center`,
        children: [
          c,
          l,
          u,
          e != null &&
          (e.length > 1 || (e.length === 1 && n.status === `ready` && n.context.disablePrefill === !0))
            ? (0, J.jsx)(`div`, {
                className: `mt-3 flex flex-wrap justify-center gap-2 select-none`,
                children: e.map((e) =>
                  (0, J.jsx)(
                    w,
                    {
                      color: `secondary`,
                      size: `medium`,
                      disabled: r == null,
                      onClick: () => r?.(e),
                      children: e,
                    },
                    e,
                  ),
                ),
              })
            : null,
        ],
      })),
      (t[0] = i.businessName),
      (t[1] = i.logoUrl),
      (t[2] = i.showConversationStarters),
      (t[3] = r),
      (t[4] = n.context),
      (t[5] = n.status),
      (t[6] = a));
  } else a = t[6];
  return a;
}
function me(e) {
  let t = (0, K.c)(15),
    { context: n, onPresented: i } = e,
    [a, o] = (0, q.useState)(n.showDisclosureModal === !0),
    s;
  t[0] === i ? (s = t[1]) : ((s = { "data-theme": `light`, onOpenAutoFocus: i }), (t[0] = i), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e) => {
        (e.preventDefault(), o(!1));
      }),
      (t[2] = c))
    : (c = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, J.jsx)(F, {})), (t[3] = d)) : (d = t[3]);
  let p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsx)(k, {
        className: `heading-lg text-center leading-7 font-semibold`,
        children: (0, J.jsx)(A, {
          id: `chatgptConversations.businessAgent.disclosureTitle`,
          defaultMessage: `About chatting with businesses`,
          description: `Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders.`,
        }),
      })),
      (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, J.jsx)(r, { className: `shrink-0`, asset: y })), (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, J.jsx)(`h3`, {
        className: `text-base leading-relaxed font-semibold text-default`,
        children: (0, J.jsx)(A, {
          id: `chatgptConversations.businessAgent.disclosureQuestionsTitle`,
          defaultMessage: `Ask questions and compare options`,
          description: `Short heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can ask about the business and compare options before deciding. Keep the tone informative; there are no placeholders.`,
        }),
      })),
      (t[6] = h))
    : (h = t[6]);
  let g;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsxs)(`div`, {
        className: `flex items-start gap-3`,
        children: [
          m,
          (0, J.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-0.5`,
            children: [
              h,
              (0, J.jsx)(`p`, {
                className: `text-base leading-snug tracking-tight text-secondary`,
                children: (0, J.jsx)(A, {
                  id: `chatgptConversations.businessAgent.disclosureQuestionsBody`,
                  defaultMessage: `Learn what the business offers and ask detailed follow-ups as you decide.`,
                  description: `Body beneath the questions-and-comparison heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can learn about the business and ask further questions while deciding. Use a neutral tone; there are no placeholders.`,
                }),
              }),
            ],
          }),
        ],
      })),
      (t[7] = g))
    : (g = t[7]);
  let _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(r, { className: `shrink-0`, asset: u })), (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, J.jsx)(`h3`, {
        className: `text-base leading-relaxed font-semibold text-default`,
        children: (0, J.jsx)(A, {
          id: `chatgptConversations.businessAgent.disclosureUsageTrendsTitle`,
          defaultMessage: `Your chats remain private`,
          description: `Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders.`,
        }),
      })),
      (t[9] = v))
    : (v = t[9]);
  let b;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [
          p,
          (0, J.jsx)(f, {
            asChild: !0,
            children: (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                g,
                (0, J.jsxs)(`div`, {
                  className: `flex items-start gap-3`,
                  children: [
                    _,
                    (0, J.jsxs)(`div`, {
                      className: `flex min-w-0 flex-col gap-0.5`,
                      children: [
                        v,
                        (0, J.jsx)(`p`, {
                          className: `text-base leading-snug tracking-tight text-secondary`,
                          children: (0, J.jsx)(A, {
                            id: `chatgptConversations.businessAgent.disclosureUsageTrendsBody`,
                            defaultMessage: `Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent.`,
                            description: `Privacy explanation in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. The business cannot see the chat or personal information and only receives overall usage trends to improve its AI agent. Use a clear neutral tone; there are no placeholders or links.`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })),
      (t[10] = b))
    : (b = t[10]);
  let S;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, J.jsx)(l, {
        as: `form`,
        size: `viewport`,
        variant: `chatgpt`,
        onSubmit: c,
        children: (0, J.jsxs)(`div`, {
          className: `flex flex-col gap-4 pb-10 select-none`,
          children: [
            d,
            (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-6 px-8`,
              children: [
                b,
                (0, J.jsx)(`div`, {
                  className: `flex justify-center`,
                  children: (0, J.jsx)(w, {
                    color: `primary`,
                    size: `dialogAction`,
                    type: `submit`,
                    children: (0, J.jsx)(A, {
                      id: `chatgptConversations.businessAgent.disclosureStartChat`,
                      defaultMessage: `Start chatting`,
                      description: `Short button label in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Dismisses the information dialog so they can start chatting in the conversation that has already opened. It does not send a message or change a privacy setting; there are no placeholders.`,
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      })),
      (t[11] = S))
    : (S = t[11]);
  let C;
  return (
    t[12] !== a || t[13] !== s
      ? ((C = (0, J.jsx)(x, {
          open: a,
          onOpenChange: o,
          size: `beacon`,
          variant: `promotional`,
          contentProps: s,
          children: S,
        })),
        (t[12] = a),
        (t[13] = s),
        (t[14] = C))
      : (C = t[14]),
    C
  );
}
function G(e) {
  let t = (0, K.c)(2),
    { businessName: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = n?.trim()
          ? (0, J.jsx)(J.Fragment, { children: n })
          : (0, J.jsx)(A, {
              id: `chatgpt.ads.business_agent.disclosure.fallback_name`,
              defaultMessage: `Business Agent`,
              description: `Fallback heading in the compact data-sharing disclosure shown at the top of every organic or sponsored Business Agent conversation. Use a short neutral title that fits on one line. This appears when the business has not supplied a display name.`,
            })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = _()), m(), o(), (q = a()), C(), ce(), j(), T(), d(), s(), h(), W(), (J = p()));
  }))();
}
function he(e) {
  let t = (0, Z.c)(3),
    { conversationId: n, fallback: r } = e,
    i = O(M, n),
    a;
  return (
    t[0] !== r || t[1] !== i
      ? ((a = i == null ? r : (0, Q.jsx)(fe, { state: i })), (t[0] = r), (t[1] = i), (t[2] = a))
      : (a = t[2]),
    a
  );
}
function X(e) {
  let t = (0, Z.c)(11),
    { conversationId: n, fallback: r, onStarterPromptSelect: i } = e,
    a = O(M, n);
  if (a == null) return r;
  let o;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((o =
        a.status === `ready` && !a.context.showConversationStarters
          ? r
          : (0, Q.jsx)(pe, { state: a, onStarterPromptSelect: i })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== n || t[5] !== a.context || t[6] !== a.status
    ? ((s =
        a.status === `ready`
          ? (0, Q.jsx)(ge, { context: a.context, conversationId: n }, a.context.interactionId)
          : null),
      (t[4] = n),
      (t[5] = a.context),
      (t[6] = a.status),
      (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== o || t[9] !== s
      ? ((c = (0, Q.jsxs)(Q.Fragment, { children: [o, s] })), (t[8] = o), (t[9] = s), (t[10] = c))
      : (c = t[10]),
    c
  );
}
function ge(e) {
  let n = (0, Z.c)(11),
    { context: r, conversationId: i } = e,
    a = t(v),
    o = D(de),
    s = o?.conversationId === i && o.ready;
  if (!s && r.showDisclosureModal !== !0) return null;
  let c;
  n[0] !== s || n[1] !== r || n[2] !== o
    ? ((c = s ? { ...r, showDisclosureModal: !o.presented } : r),
      (n[0] = s),
      (n[1] = r),
      (n[2] = o),
      (n[3] = c))
    : (c = n[3]);
  let l;
  n[4] !== s || n[5] !== i || n[6] !== a
    ? ((l = s ? () => P(a, i) : void 0), (n[4] = s), (n[5] = i), (n[6] = a), (n[7] = l))
    : (l = n[7]);
  let u;
  return (
    n[8] !== c || n[9] !== l
      ? ((u = (0, Q.jsx)(me, { context: c, onPresented: l })), (n[8] = c), (n[9] = l), (n[10] = u))
      : (u = n[10]),
    u
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = _()), E(), n(), ie(), ue(), Y(), (Q = p()));
  }))();
}
export { X as n, $ as r, he as t };
//# sourceMappingURL=conversation-ui-d36fbd9a25a0.js.map
