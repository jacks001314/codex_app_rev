const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./animated-icon-svg-118783d1401f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./index.es-234488e57e8f.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./lottie_light-6d958e55eef3.js",
      "./browser-61bf87c2c41e.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./zod-f12fdb553f64.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  Cot as r,
  GE as i,
  IDt as a,
  Ixt as o,
  JCt as s,
  JR as c,
  Mz as l,
  Nz as u,
  Pxt as d,
  Vxt as f,
  WE as p,
  YCt as m,
  YR as h,
  _O as g,
  ad as _,
  cd as v,
  fO as y,
  fPt as b,
  gO as ee,
  jDt as x,
  mO as S,
  oO as C,
  od as w,
  pPt as T,
  sd as te,
  t3 as ne,
  vO as re,
  vzt as E,
  wot as ie,
  xMt as D,
  yzt as O,
  z4 as ae,
  zxt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bnn as oe,
  HCn as A,
  WCn as se,
  cXn as j,
  nSn as ce,
  rSn as le,
  yjn as ue,
  znn as M,
} from "./app-initial-5851df3f6cb1.js";
import { i as N, n as P, t as F } from "./disclosure-state-96d43f424094.js";
function I(e) {
  let t = (0, z.c)(2),
    n = h(),
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, V.jsx)(`div`, {
          "aria-hidden": !0,
          className: `pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden`,
          children: n ? (0, V.jsx)(R, {}) : (0, V.jsx)(L, {}),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function L(e) {
  let t = (0, z.c)(7),
    n = (0, B.useRef)(null),
    r = m(n),
    i = f(ce),
    [a, o] = (0, B.useState)(!1);
  if (a) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, V.jsx)(R, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, V.jsx)(R, {})), (t[1] = s)) : (s = t[1]);
  let c;
  t[2] !== r || t[3] !== i
    ? ((c = r && i === !0 ? (0, V.jsx)(W, { onError: () => o(!0) }) : null),
      (t[2] = r),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] === c
      ? (l = t[6])
      : ((l = (0, V.jsx)(A, {
          name: `BusinessAgentDisclosureHero`,
          fallback: s,
          children: (0, V.jsx)(`div`, { ref: n, className: `absolute inset-0`, children: c }),
        })),
        (t[5] = c),
        (t[6] = l)),
    l
  );
}
function R(e) {
  let t = (0, z.c)(1),
    n;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, V.jsx)(`img`, {
          className: `absolute inset-0 size-full object-cover`,
          alt: ``,
          draggable: !1,
          referrerPolicy: `no-referrer`,
          src: H,
        })),
        (t[0] = n))
      : (n = t[0]),
    n
  );
}
var z, B, V, H, U, W;
function G() {
  return (G = e(() => {
    ((z = E()),
      s(),
      d(),
      (B = O()),
      le(),
      se(),
      ae(),
      c(),
      (V = D()),
      T(),
      (H = `https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png`),
      (U = `https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-animation-1754caf3cef014e7.lottie`),
      (W = n(
        async () => {
          let [{ SvgLottie: e }, { strFromU8: t, unzipSync: n }, { z: r }, i] = await Promise.all([
            b(
              () => import(`./animated-icon-svg-118783d1401f.js`),
              __vite__mapDeps([0, 1, 2, 3, 4, 5]),
              import.meta.url,
            ),
            b(
              () => import(`./browser-61bf87c2c41e.js`),
              __vite__mapDeps([6, 7, 1, 3, 4, 8]),
              import.meta.url,
            ),
            b(() => import(`./zod-f12fdb553f64.js`), __vite__mapDeps([9, 3, 1, 4]), import.meta.url),
            fetch(U, {
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
              return (0, V.jsx)(R, {});
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
            let [n, r] = (0, B.useState)(!1),
              [i] = (0, B.useState)(() => {
                let e = structuredClone(s);
                for (let t of e.layers)
                  t.nm === `🖼️ Image (replace img. layer)` &&
                    t.refId === `art_0` &&
                    (t.masksProperties = t.masksProperties?.filter((e) => e.nm !== `Sheet top corners`));
                return e;
              });
            return (0, V.jsx)(`div`, {
              className: n ? `size-full` : `invisible size-full`,
              children: (0, V.jsx)(e, {
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
        { errorFallback: (0, V.jsx)(R, {}) },
      )));
  }))();
}
function de(e) {
  let t = (0, q.c)(11),
    { state: n } = e,
    r = n.status === `ready` ? n.context : n,
    i = r.businessName ?? null,
    o = r.logoUrl ?? null,
    s;
  t[0] !== i || t[1] !== o
    ? ((s = (0, Y.jsx)(M, { alt: ``, name: i, size: `md`, src: o })), (t[0] = i), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r.businessName
    ? (c = t[4])
    : ((c = (0, Y.jsx)(`span`, {
        className: `truncate text-sm font-semibold`,
        children: (0, Y.jsx)(K, { businessName: r.businessName }),
      })),
      (t[3] = r.businessName),
      (t[4] = c));
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(`span`, {
        className: `truncate text-xs font-normal text-secondary`,
        children: (0, Y.jsx)(a, {
          id: `chatgpt.ads.business_agent.thread_header.subtitle`,
          defaultMessage: `Business chat`,
          description: `Short subtitle beneath the business name in the header of a Business Agent conversation. It tells an end user that the custom GPT chat represents a business. Keep this compact enough to fit on one line; there are no placeholders or formatting.`,
        }),
      })),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === c
    ? (u = t[7])
    : ((u = (0, Y.jsxs)(`div`, { className: `flex min-w-0 flex-col text-start`, children: [c, l] })),
      (t[6] = c),
      (t[7] = u));
  let d;
  return (
    t[8] !== s || t[9] !== u
      ? ((d = (0, Y.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-2 select-none`,
          children: [s, u],
        })),
        (t[8] = s),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function fe(e) {
  let n = (0, q.c)(14),
    { state: r, onStarterPromptSelect: i } = e,
    o = r.status === `ready` ? r.context : r,
    s;
  if (
    n[0] !== o.businessName ||
    n[1] !== o.logoUrl ||
    n[2] !== o.showConversationStarters ||
    n[3] !== i ||
    n[4] !== r.context ||
    n[5] !== r.status
  ) {
    let e =
        r.status === `ready` && o.showConversationStarters
          ? r.context.conversationStarters?.slice(0, 4)
          : void 0,
      c = o.businessName ?? null,
      l = o.logoUrl ?? null,
      u;
    n[7] !== c || n[8] !== l
      ? ((u = (0, Y.jsx)(M, { alt: ``, name: c, size: `lg`, src: l })), (n[7] = c), (n[8] = l), (n[9] = u))
      : (u = n[9]);
    let d;
    n[10] === o.businessName
      ? (d = n[11])
      : ((d = (0, Y.jsx)(`h1`, {
          className: `heading-xl font-normal text-default select-none`,
          children: (0, Y.jsx)(K, { businessName: o.businessName }),
        })),
        (n[10] = o.businessName),
        (n[11] = d));
    let f;
    (n[12] === r.status
      ? (f = n[13])
      : ((f =
          r.status === `ready`
            ? null
            : (0, Y.jsx)(p, {
                ariaLive: `polite`,
                role: r.status === `failed` ? `alert` : `status`,
                type: r.status === `failed` ? `error` : `normal`,
                content:
                  r.status === `failed`
                    ? (0, Y.jsx)(a, {
                        id: `chatgptConversations.businessAgent.unavailable`,
                        defaultMessage: `This Business Agent is unavailable. Please return to the ad and try again`,
                        description: `Error on a Business Agent chat destination when creating its interaction fails; sending is unavailable and the user can retry from the original ad`,
                      })
                    : (0, Y.jsx)(a, {
                        id: `chatgptConversations.businessAgent.loading`,
                        defaultMessage: `Opening Business Agent…`,
                        description: `Loading status on a Business Agent chat destination while its interaction is being created`,
                      }),
              })),
        (n[12] = r.status),
        (n[13] = f)),
      (s = (0, Y.jsxs)(`div`, {
        className: `mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center`,
        children: [
          u,
          d,
          f,
          e != null &&
          (e.length > 1 || (e.length === 1 && r.status === `ready` && r.context.disablePrefill === !0))
            ? (0, Y.jsx)(`div`, {
                className: `mt-3 flex flex-wrap justify-center gap-2 select-none`,
                children: e.map((e) =>
                  (0, Y.jsx)(
                    t,
                    {
                      color: `secondary`,
                      size: `medium`,
                      disabled: i == null,
                      onClick: () => i?.(e),
                      children: e,
                    },
                    e,
                  ),
                ),
              })
            : null,
        ],
      })),
      (n[0] = o.businessName),
      (n[1] = o.logoUrl),
      (n[2] = o.showConversationStarters),
      (n[3] = i),
      (n[4] = r.context),
      (n[5] = r.status),
      (n[6] = s));
  } else s = n[6];
  return s;
}
function pe(e) {
  let n = (0, q.c)(15),
    { context: r, onPresented: i } = e,
    [o, s] = (0, J.useState)(r.showDisclosureModal === !0),
    c;
  n[0] === i ? (c = n[1]) : ((c = { "data-theme": `light`, onOpenAutoFocus: i }), (n[0] = i), (n[1] = c));
  let u;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (e) => {
        (e.preventDefault(), s(!1));
      }),
      (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, Y.jsx)(I, {})), (n[3] = d)) : (d = n[3]);
  let f;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(g, {
        className: `heading-lg text-center leading-7 font-semibold`,
        children: (0, Y.jsx)(a, {
          id: `chatgptConversations.businessAgent.disclosureTitle`,
          defaultMessage: `About chatting with businesses`,
          description: `Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders.`,
        }),
      })),
      (n[4] = f))
    : (f = n[4]);
  let p;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Y.jsx)(l, { className: `shrink-0`, asset: v })), (n[5] = p))
    : (p = n[5]);
  let m;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(`h3`, {
        className: `text-base leading-relaxed font-semibold text-default`,
        children: (0, Y.jsx)(a, {
          id: `chatgptConversations.businessAgent.disclosureQuestionsTitle`,
          defaultMessage: `Ask questions and compare options`,
          description: `Short heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can ask about the business and compare options before deciding. Keep the tone informative; there are no placeholders.`,
        }),
      })),
      (n[6] = m))
    : (m = n[6]);
  let h;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsxs)(`div`, {
        className: `flex items-start gap-3`,
        children: [
          p,
          (0, Y.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-0.5`,
            children: [
              m,
              (0, Y.jsx)(`p`, {
                className: `text-base leading-snug tracking-tight text-secondary`,
                children: (0, Y.jsx)(a, {
                  id: `chatgptConversations.businessAgent.disclosureQuestionsBody`,
                  defaultMessage: `Learn what the business offers and ask detailed follow-ups as you decide.`,
                  description: `Body beneath the questions-and-comparison heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can learn about the business and ask further questions while deciding. Use a neutral tone; there are no placeholders.`,
                }),
              }),
            ],
          }),
        ],
      })),
      (n[7] = h))
    : (h = n[7]);
  let _;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Y.jsx)(l, { className: `shrink-0`, asset: w })), (n[8] = _))
    : (_ = n[8]);
  let y;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(`h3`, {
        className: `text-base leading-relaxed font-semibold text-default`,
        children: (0, Y.jsx)(a, {
          id: `chatgptConversations.businessAgent.disclosureUsageTrendsTitle`,
          defaultMessage: `Your chats remain private`,
          description: `Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders.`,
        }),
      })),
      (n[9] = y))
    : (y = n[9]);
  let b;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [
          f,
          (0, Y.jsx)(ee, {
            asChild: !0,
            children: (0, Y.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                h,
                (0, Y.jsxs)(`div`, {
                  className: `flex items-start gap-3`,
                  children: [
                    _,
                    (0, Y.jsxs)(`div`, {
                      className: `flex min-w-0 flex-col gap-0.5`,
                      children: [
                        y,
                        (0, Y.jsx)(`p`, {
                          className: `text-base leading-snug tracking-tight text-secondary`,
                          children: (0, Y.jsx)(a, {
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
      (n[10] = b))
    : (b = n[10]);
  let x;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(C, {
        as: `form`,
        size: `viewport`,
        variant: `chatgpt`,
        onSubmit: u,
        children: (0, Y.jsxs)(`div`, {
          className: `flex flex-col gap-4 pb-10 select-none`,
          children: [
            d,
            (0, Y.jsxs)(`div`, {
              className: `flex flex-col gap-6 px-8`,
              children: [
                b,
                (0, Y.jsx)(`div`, {
                  className: `flex justify-center`,
                  children: (0, Y.jsx)(t, {
                    color: `primary`,
                    size: `dialogAction`,
                    type: `submit`,
                    children: (0, Y.jsx)(a, {
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
      (n[11] = x))
    : (x = n[11]);
  let T;
  return (
    n[12] !== o || n[13] !== c
      ? ((T = (0, Y.jsx)(S, {
          open: o,
          onOpenChange: s,
          size: `beacon`,
          variant: `promotional`,
          contentProps: c,
          children: x,
        })),
        (n[12] = o),
        (n[13] = c),
        (n[14] = T))
      : (T = n[14]),
    T
  );
}
function K(e) {
  let t = (0, q.c)(2),
    { businessName: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = n?.trim()
          ? (0, Y.jsx)(Y.Fragment, { children: n })
          : (0, Y.jsx)(a, {
              id: `chatgpt.ads.business_agent.disclosure.fallback_name`,
              defaultMessage: `Business Agent`,
              description: `Fallback heading in the compact data-sharing disclosure shown at the top of every organic or sponsored Business Agent conversation. Use a short neutral title that fits on one line. This appears when the business has not supplied a display name.`,
            })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = E()), te(), _(), (J = O()), x(), oe(), i(), ne(), re(), y(), u(), G(), (Y = D()));
  }))();
}
function me(e) {
  let t = (0, Z.c)(3),
    { conversationId: n, fallback: r } = e,
    i = k(j, n),
    a;
  return (
    t[0] !== r || t[1] !== i
      ? ((a = i == null ? r : (0, Q.jsx)(de, { state: i })), (t[0] = r), (t[1] = i), (t[2] = a))
      : (a = t[2]),
    a
  );
}
function he(e) {
  let t = (0, Z.c)(11),
    { conversationId: n, fallback: r, onStarterPromptSelect: i } = e,
    a = k(j, n);
  if (a == null) return r;
  let o;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((o =
        a.status === `ready` && !a.context.showConversationStarters
          ? r
          : (0, Q.jsx)(fe, { state: a, onStarterPromptSelect: i })),
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
  let t = (0, Z.c)(11),
    { context: n, conversationId: i } = e,
    a = o(r),
    s = f(P),
    c = s?.conversationId === i && s.ready;
  if (!c && n.showDisclosureModal !== !0) return null;
  let l;
  t[0] !== c || t[1] !== n || t[2] !== s
    ? ((l = c ? { ...n, showDisclosureModal: !s.presented } : n),
      (t[0] = c),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] !== c || t[5] !== i || t[6] !== a
    ? ((u = c ? () => F(a, i) : void 0), (t[4] = c), (t[5] = i), (t[6] = a), (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== l || t[9] !== u
      ? ((d = (0, Q.jsx)(pe, { context: l, onPresented: u })), (t[8] = l), (t[9] = u), (t[10] = d))
      : (d = t[10]),
    d
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = E()), d(), ie(), ue(), N(), X(), (Q = D()));
  }))();
}
export { he as n, $ as r, me as t };
//# sourceMappingURL=conversation-ui-605b34b5a676.js.map
