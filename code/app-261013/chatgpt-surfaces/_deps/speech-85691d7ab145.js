import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Kat as r,
  Pxt as i,
  RLt as a,
  TLt as o,
  Vxt as s,
  oSt as c,
  qat as l,
  vzt as u,
  wot as d,
  xLt as f,
  xMt as p,
  yzt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  CGn as h,
  FEr as g,
  GXt as _,
  OXt as v,
  PEr as y,
  QMr as b,
  Xl as x,
  Zl as ee,
  aIr as te,
  kXt as ne,
  nkr as S,
  oIr as re,
  qXt as C,
  rkr as ie,
  tNr as ae,
  wGn as oe,
  xGn as se,
  xPn as w,
  yPn as T,
} from "./app-initial-5851df3f6cb1.js";
import { C as E, T as D } from "./frame-e41f10efa336.js";
import { t as O } from "./runtime-2beb8c8770e0.js";
import { a as k, o as A } from "./tooltip-ce76a437c28b.js";
import { E as ce, b as le } from "./src-b8730eeeed43.js";
import { a as ue, o as de } from "./widget-voice-session-29f5d92c26b9.js";
function fe(e, t, n, r) {
  let i = h(e, [`AutomationPlanSummary`]).filter((e) => e.plan_type !== `language_learning`),
    a = M.safeParse(e?.opGenui);
  return {
    queries: j(i, t, n),
    enrich: (e) =>
      me(
        a.success ? a.data.componentResults : void 0,
        new Map(
          e.flatMap((e) =>
            e?.automation.display_emoji ? [[e.automation.id, e.automation.display_emoji]] : [],
          ),
        ),
      ),
    onInteraction: () => {
      i.length > 0 && r?.holdViewport();
    },
  };
}
function pe(e, t, n, r, i) {
  let a = e.component === `AutomationPlanSummary` && t.plan_type !== `language_learning`;
  return {
    queries: j(a ? [t] : [], n, r),
    enrich: (e) => {
      let n = e[0]?.automation.display_emoji;
      return n ? { ...t, emoji: n } : t;
    },
    onInteraction: () => {
      a && i?.holdViewport();
    },
  };
}
function me(e, t) {
  let n = M.safeParse(e);
  if (n.success)
    return t.size === 0
      ? n.data
      : Object.fromEntries(
          Object.entries(n.data).map(([e, n]) => {
            let r = se(n, [`AutomationPlanSummary`], e),
              i = typeof r?.automation_id == `string` ? t.get(r.automation_id) : void 0,
              a = M.safeParse(n);
            return i == null || !a.success ? [e, n] : [e, { ...a.data, state: { ...r, emoji: i } }];
          }),
        );
}
function j(e, t, n) {
  return !n || t == null
    ? []
    : [...new Set(e.flatMap((e) => (typeof e.automation_id == `string` ? [e.automation_id] : [])))].map((e) =>
        S(e, t),
      );
}
var M;
function N() {
  return (N = e(() => {
    (n(), ie(), oe(), (M = f(o(), a())));
  }))();
}
function P(e) {
  let t = (0, F.c)(12),
    n = s(re),
    r;
  t[0] !== n || t[1] !== e.ariaLabel
    ? ((r =
        e.ariaLabel ??
        n.formatMessage({
          id: `genui.carousel.defaultLabel`,
          defaultMessage: `Carousel`,
          description: `Screen-reader name for a horizontally scrollable list of cards in a ChatGPT response, used when the list has no specific title. Carousel means a UI list that users can scroll through. Use a short, neutral noun phrase naming the list. Plain text; no placeholders.`,
        })),
      (t[0] = n),
      (t[1] = e.ariaLabel),
      (t[2] = r))
    : (r = t[2]);
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = n.formatMessage({
        id: `genui.carousel.previousItems`,
        defaultMessage: `Previous carousel items`,
        description: `Screen-reader name for an icon-only button on a horizontally scrollable list of cards in a ChatGPT response. It scrolls to show earlier items in list order; it does not navigate browser history. Use a concise, neutral navigation label without specifying left or right. Plain text; no placeholders.`,
      })),
      (t[3] = n),
      (t[4] = i));
  let a;
  t[5] === n
    ? (a = t[6])
    : ((a = n.formatMessage({
        id: `genui.carousel.nextItems`,
        defaultMessage: `Next carousel items`,
        description: `Screen-reader name for an icon-only button on a horizontally scrollable list of cards in a ChatGPT response. It scrolls to show later items in list order; it does not open another page. Use a concise, neutral navigation label without specifying left or right. Plain text; no placeholders.`,
      })),
      (t[5] = n),
      (t[6] = a));
  let o;
  return (
    t[7] !== e || t[8] !== r || t[9] !== i || t[10] !== a
      ? ((o = (0, I.jsx)(A.carousel, { ...e, ariaLabel: r, previousLabel: i, nextLabel: a })),
        (t[7] = e),
        (t[8] = r),
        (t[9] = i),
        (t[10] = a),
        (t[11] = o))
      : (o = t[11]),
    o
  );
}
var F, I;
function L() {
  return (L = e(() => {
    ((F = u()), k(), i(), te(), (I = p()));
  }))();
}
var R, z;
function B() {
  return (B = e(() => {
    (i(),
      ae(),
      d(),
      (R = c(t, ({ get: e }) => {
        let t = e(b);
        return !t.authLoading &&
          !t.accountLoading &&
          t.authMethod === `chatgpt` &&
          t.hasChatGptToken !== !1 &&
          t.authenticatedAccountId != null &&
          t.accountId === t.authenticatedAccountId &&
          t.userId != null
          ? JSON.stringify([t.authenticatedAccountId, t.userId])
          : null;
      })),
      (z = c(t, ({ get: e }) => {
        let t = e(R);
        if (t != null) return t;
        let n = e(b);
        return !n.authLoading &&
          !n.accountLoading &&
          n.authMethod == null &&
          n.hasChatGptToken !== !0 &&
          n.authenticatedAccountId == null &&
          n.accountId == null &&
          n.userId == null
          ? `guest`
          : null;
      })));
  }))();
}
function he(e, t, n) {
  return {
    createSession(r, i) {
      let a = (0, V.normalizeDILDictationOptions)(r);
      if (a == null) throw Error(`Invalid dictation options`);
      let o = !1,
        s = !1,
        c = !1,
        l,
        u,
        d;
      function f() {
        if (!o) {
          ((o = !0),
            window.removeEventListener(`pagehide`, h),
            document.removeEventListener(`visibilitychange`, g));
          for (let e of l?.getTracks() ?? []) e.removeEventListener(`ended`, h);
          (u?.(), d?.dispose());
        }
      }
      function p(e) {
        o || (f(), i(e));
      }
      function m(e) {
        p({ kind: E.DILDictationEventKind.Error, error: ge(e, t) });
      }
      function h() {
        p({ kind: E.DILDictationEventKind.Cancelled });
      }
      function g() {
        document.hidden && h();
      }
      function _() {
        return ((e.get(z) !== n || !e.get(y, { name: `dictation.composer` }).isCapable) && h(), !o);
      }
      async function b() {
        if (!(o || s) && ((s = !0), _()))
          try {
            if (
              ((d = new v(e, {
                owner: Symbol(`dil-dictation`),
                chatgpt: !0,
                onError: m,
                onLimit: x,
                onTakeover: x,
              })),
              (u = e.watch(({ get: e }) => {
                let t = e(z),
                  r = e(y, { name: `dictation.composer` }).isCapable;
                (t !== n || !r) && h();
              })),
              window.addEventListener(`pagehide`, h),
              document.addEventListener(`visibilitychange`, g),
              !(await d.takeOver()) || !_() || c)
            ) {
              h();
              return;
            }
            if (
              (d.prepareStreaming(
                `composer`,
                void 0,
                (e) => {
                  o || i({ kind: E.DILDictationEventKind.Transcript, transcript: e });
                },
                { ...a, onError: m },
              ),
              (l = await d.start()),
              o)
            )
              return;
            for (let e of l.getTracks()) e.addEventListener(`ended`, h, { once: !0 });
            (await d.streamingStart, !o && !c && i({ kind: E.DILDictationEventKind.Recording }));
          } catch (e) {
            c || m(e instanceof Error ? e : Error(`Dictation failed`));
          }
      }
      function x() {
        if (o || !d || c) return;
        c = !0;
        let e = d.finish();
        (i({ kind: E.DILDictationEventKind.Stopping }),
          e.then(
            (e) => p({ kind: E.DILDictationEventKind.Done, transcript: e }),
            (e) => {
              e.name === `AbortError` ? h() : m(e);
            },
          ));
      }
      return {
        start: () => {
          b();
        },
        stop: x,
        cancel: h,
        dispose: f,
      };
    },
  };
}
function ge(e, t) {
  return e.name === `NotAllowedError` || e.name === `SecurityError`
    ? {
        code: `permission_denied`,
        message: t.formatMessage({
          id: `dil.dictation.permissionDenied`,
          defaultMessage: `Allow microphone access to use dictation`,
          description: `Dictation error when microphone permission is denied`,
        }),
      }
    : e.name === `NotReadableError` || (e instanceof _ && e.code === `microphone_busy`)
      ? {
          code: `microphone_busy`,
          message: t.formatMessage({
            id: `dil.dictation.microphoneBusy`,
            defaultMessage: `The microphone is already in use`,
            description: `Dictation error when another recording owns the microphone`,
          }),
        }
      : {
          code: `dictation_failed`,
          message: t.formatMessage({
            id: `dil.dictation.failed`,
            defaultMessage: `Dictation failed. Please try again`,
            description: `Dictation error when capture or final transcription fails`,
          }),
        };
}
var V;
function H() {
  return (H = e(() => {
    (O(), (V = D()), g(), ne(), C(), B());
  }))();
}
function _e(e, t) {
  let n = e.get(z);
  return n == null ||
    n === `guest` ||
    r?.dictationStreaming == null ||
    r?.realtimeVoice == null ||
    !e.get(y, { name: `dictation.composer` }).isCapable
    ? { kind: `unavailable` }
    : { kind: `ready`, service: he(e, t, n) };
}
function U() {
  return (U = e(() => {
    (g(), l(), H(), B());
  }))();
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = m()), (G = (0, W.createContext)(void 0)));
  }))();
}
function ve(e) {
  let t = (0, q.c)(18),
    { children: n, href: r, title: i } = e,
    a = (0, J.useContext)(G),
    o = (0, J.useContext)(le),
    s = (0, J.useContext)(x) === `restricted`,
    c,
    l,
    u;
  if (t[0] !== n || t[1] !== r) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((u = r.trim()), !/^[a-z][a-z\d+.-]*:/i.test(u))) {
        if (u.startsWith(`//`) || !u.includes(`.`)) {
          l = n;
          break bb0;
        }
        u = `https://${u}`;
      }
      c = !URL.canParse(u) || ![`http:`, `https:`].includes(new URL(u).protocol);
    }
    ((t[0] = n), (t[1] = r), (t[2] = c), (t[3] = l), (t[4] = u));
  } else ((c = t[2]), (l = t[3]), (u = t[4]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  if (c) return n;
  let d;
  t[5] !== o || t[6] !== a || t[7] !== u
    ? ((d = () => a?.(u, o)), (t[5] = o), (t[6] = a), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === n
    ? (f = t[10])
    : ((f = (0, Y.jsx)(Z, { inline: !0, underline: `dotted`, children: n })), (t[9] = n), (t[10] = f));
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Y.jsx)(`span`, {
        className: `ms-1`,
        children: (0, Y.jsx)(X, { inline: !0, name: `arrow-up-right` }),
      })),
      (t[11] = p))
    : (p = t[11]);
  let m;
  return (
    t[12] !== s || t[13] !== d || t[14] !== f || t[15] !== i || t[16] !== u
      ? ((m = (0, Y.jsxs)(T, {
          href: u,
          initiator: `markdown_link_click`,
          requiresConfirmation: s,
          title: i,
          onActivate: d,
          children: [f, p],
        })),
        (t[12] = s),
        (t[13] = d),
        (t[14] = f),
        (t[15] = i),
        (t[16] = u),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
var q, J, Y, X, Z;
function Q() {
  return (Q = e(() => {
    ((q = u()), k(), ce(), (J = m()), w(), ee(), K(), (Y = p()), ({ icon: X, text: Z } = A));
  }))();
}
function ye(e, t = !1) {
  let n = e.get(R);
  if (n == null) return;
  let r = t,
    i = new Set();
  return {
    setReadOnly(e) {
      if (r !== e) {
        r = e;
        for (let e of i) e();
      }
    },
    createSession(t, a) {
      let o = ue(e, t),
        s = !1,
        c = () => {
          let { available: e, status: t, error: n } = o.getSnapshot();
          a({
            available: !s && !r && e,
            status: t,
            error: n ? { failureStage: n.failureStage, httpStatus: n.httpStatus } : null,
          });
        },
        l = o.subscribe(c),
        u = () => {
          s || ((s = !0), i.delete(d), l(), o.dispose(), c());
        },
        d = () => {
          (r && o.stop(), c());
        };
      i.add(d);
      let f = e.watch(({ get: e }) => (e(R) !== n && u(), u)),
        p = (e) => {
          e.persisted ? o.stop() : u();
        };
      return (
        window.addEventListener(`pagehide`, p),
        c(),
        {
          play: () => {
            (e.get(R) !== n && u(), !s && !r && o.play());
          },
          stop: () => o.stop(),
          dispose: () => {
            (window.removeEventListener(`pagehide`, p), f(), u());
          },
        }
      );
    },
  };
}
function $() {
  return ($ = e(() => {
    (de(), B());
  }))();
}
export {
  G as a,
  U as c,
  B as d,
  P as f,
  N as g,
  pe as h,
  Q as i,
  z as l,
  fe as m,
  $ as n,
  K as o,
  L as p,
  ve as r,
  _e as s,
  ye as t,
  R as u,
};
//# sourceMappingURL=speech-85691d7ab145.js.map
