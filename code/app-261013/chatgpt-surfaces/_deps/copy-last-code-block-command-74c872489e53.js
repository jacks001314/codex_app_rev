import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  A8 as n,
  Brt as r,
  Cot as i,
  EPt as a,
  IDt as o,
  Irt as s,
  Ixt as c,
  LLt as l,
  Pxt as u,
  Rnt as d,
  TLt as f,
  bz as p,
  hot as m,
  iO as h,
  jDt as g,
  lot as _,
  rO as v,
  vzt as y,
  wot as b,
  xLt as x,
  xMt as S,
  xz as C,
  yzt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as T,
  $Wn as E,
  AUn as D,
  AZn as O,
  BIr as k,
  C$n as A,
  FAn as j,
  GMr as M,
  HUn as N,
  JZn as P,
  LIr as F,
  Mor as I,
  Oer as L,
  PXn as R,
  QDr as z,
  QWn as B,
  SAn as V,
  SZn as H,
  UUn as ee,
  VZn as te,
  XDr as ne,
  YJt as re,
  aDr as ie,
  bZn as ae,
  eDr as oe,
  i1n as se,
  iZn as ce,
  jor as le,
  kZn as ue,
  njt as de,
  o1n as U,
  pZn as fe,
  qJt as W,
  w$n as pe,
  xUn as me,
  xZn as he,
  yjn as ge,
} from "./app-initial-5851df3f6cb1.js";
import { ci as _e, li as ve } from "./app-primary-fe8a450b3b04.js";
import { a as ye, f as be, o as xe, p as Se } from "./content-reference-af6f4d97aadb.js";
import { O as Ce, k as we } from "./chatgpt-markdown-view-10e560aa371d.js";
import { n as Te, r as Ee } from "./thread-scroll-controller-context-value-f766898c7055.js";
import { a as De, i as Oe, r as ke, t as Ae } from "./thread-response-space-controller-7d80274ac053.js";
import { n as je, t as Me } from "./controller-5717fd004098.js";
import { a as Ne, s as Pe } from "./suggestion-bindings-5f4e7dcae7ac.js";
function Fe(e) {
  let t = (0, G.c)(45),
    {
      initialPlacementKey: n,
      isActiveVoiceConversation: r,
      isLoadingHistory: i,
      latestUserTurnKey: a,
      onResponseSpacerStateChange: o,
    } = e,
    s = r !== void 0 && r,
    c = i !== void 0 && i,
    l = ie(),
    u;
  t[0] !== s || t[1] !== l
    ? ((u = s && T(l, `2825211774`).get(`voice_orb_transcript_clearance_enabled`, !1)),
      (t[0] = s),
      (t[1] = l),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f = (0, K.useRef)(a),
    p = (0, K.useRef)(c),
    m = (0, K.useRef)(null),
    h = (0, K.useRef)(null),
    g = Ee(),
    _;
  t[3] === g ? (_ = t[4]) : ((_ = () => new Ae(g)), (t[3] = g), (t[4] = _));
  let [v] = (0, K.useState)(_),
    { clear: y, consumeGrowth: b, getHeightPx: x, place: S, prepareThreadEndContent: w } = v,
    { addScrollListener: E, getScrollElement: D } = g,
    O;
  t[5] !== y || t[6] !== g
    ? ((O = () => {
        (y(), g.scrollToBottom());
      }),
      (t[5] = y),
      (t[6] = g),
      (t[7] = O))
    : (O = t[7]);
  let k = C(O),
    A;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e, t) => {
        ((m.current = { turnKey: e, element: t }), h.current?.(e, t));
      }),
      (t[8] = A))
    : (A = t[8]);
  let j = C(A),
    M;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => {
        h.current = e;
        let t = m.current;
        return (
          t != null && e(t.turnKey, t.element),
          () => {
            h.current = null;
          }
        );
      }),
      (t[9] = M))
    : (M = t[9]);
  let N = C(M),
    P;
  t[10] !== D || t[11] !== a || t[12] !== S || t[13] !== d
    ? ((P = () => {
        let e = D();
        if (e == null || e.clientHeight === 0) return !1;
        if (d && a != null) {
          let t = Le(e, a);
          if (t == null) return !1;
          S(t);
        } else S();
        return !0;
      }),
      (t[10] = D),
      (t[11] = a),
      (t[12] = S),
      (t[13] = d),
      (t[14] = P))
    : (P = t[14]);
  let F = (0, K.useEffectEvent)(P),
    I,
    L;
  (t[15] !== y ||
  t[16] !== b ||
  t[17] !== x ||
  t[18] !== o ||
  t[19] !== j ||
  t[20] !== S ||
  t[21] !== w ||
  t[22] !== k ||
  t[23] !== d
    ? ((L = () => (
        o({
          voiceAutoScrollEnabled: d,
          clear: y,
          consumeGrowth: b,
          getHeightPx: x,
          onTurnLayoutReady: j,
          place: S,
          prepareThreadEndContent: w,
          scrollToBottom: k,
        }),
        () => {
          o(null);
        }
      )),
      (I = [y, b, x, o, j, S, w, k, d]),
      (t[15] = y),
      (t[16] = b),
      (t[17] = x),
      (t[18] = o),
      (t[19] = j),
      (t[20] = S),
      (t[21] = w),
      (t[22] = k),
      (t[23] = d),
      (t[24] = I),
      (t[25] = L))
    : ((I = t[24]), (L = t[25])),
    (0, K.useLayoutEffect)(L, I));
  let R, z;
  (t[26] !== D || t[27] !== c || t[28] !== a || t[29] !== S || t[30] !== N || t[31] !== d
    ? ((R = () => {
        let e = f.current,
          t = p.current;
        if (((f.current = a), (p.current = c), !(!d || c || t || a == null || a === e)))
          return Ie(a, D, S, N);
      }),
      (z = [D, c, a, S, N, d]),
      (t[26] = D),
      (t[27] = c),
      (t[28] = a),
      (t[29] = S),
      (t[30] = N),
      (t[31] = d),
      (t[32] = R),
      (t[33] = z))
    : ((R = t[32]), (z = t[33])),
    (0, K.useLayoutEffect)(R, z));
  let B;
  t[34] !== E || t[35] !== D || t[36] !== n || t[37] !== F
    ? ((B = () => {
        if (n == null) return;
        let e = !1;
        return E(() => {
          e || D() == null || ((e = !0), (e = F()));
        });
      }),
      (t[34] = E),
      (t[35] = D),
      (t[36] = n),
      (t[37] = F),
      (t[38] = B))
    : (B = t[38]);
  let V;
  (t[39] !== E || t[40] !== D || t[41] !== n
    ? ((V = [E, D, n]), (t[39] = E), (t[40] = D), (t[41] = n), (t[42] = V))
    : (V = t[42]),
    (0, K.useLayoutEffect)(B, V));
  let H;
  return (t[43] === v ? (H = t[44]) : ((H = (0, q.jsx)(Oe, { controller: v })), (t[43] = v), (t[44] = H)), H);
}
function Ie(e, t, n, r) {
  let i = new AbortController(),
    a = null,
    o = null,
    s = !1,
    c,
    l = () => {
      ((s = !0), a != null && (cancelAnimationFrame(a), (a = null)), i.abort(), c?.());
    },
    u = t();
  for (let e of [`wheel`, `touchstart`, `pointerdown`, `keydown`])
    u?.addEventListener(e, l, { capture: !0, passive: !0, signal: i.signal });
  return (
    (c = r((r, i) => {
      s ||
        r !== e ||
        ((o = i),
        (a ??= requestAnimationFrame(() => {
          a = null;
          let e = t(),
            r = o?.querySelector(`[data-user-message-bubble]`) ?? o;
          e == null ||
            e.clientHeight === 0 ||
            r == null ||
            !e.contains(r) ||
            r.getBoundingClientRect().height <= 0 ||
            (l(), n(r));
        })));
    })),
    l
  );
}
function Le(e, t) {
  let n = e.querySelector(`[data-turn-key="${CSS.escape(t)}"]`);
  return n?.querySelector(`[data-user-message-bubble]`) ?? n;
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = y()), (K = w()), oe(), De(), ke(), Te(), p(), (q = S()));
  }))();
}
function Re(e) {
  for (let { turn: t } of e.toReversed())
    for (let e of t.items.toReversed()) {
      if (e.type !== `assistant-message`) continue;
      let t = null,
        n = 0;
      if (
        (F(I(e.content, R), (r) => {
          if (r.type === `codexDirective` && r.name === `chatgpt-content-reference`) {
            let n = Y.safeParse(r.attributes);
            if (!n.success) return;
            let i = Ce(n.data, e.contentReferences),
              a = be.safeParse(i?.reference);
            if (
              i == null ||
              !a.success ||
              (n.data.is_streaming == null
                ? !e.completed &&
                  (e.contentReferenceMessageStatuses?.[i.index] ?? `in_progress`) === `in_progress`
                : n.data.is_streaming === `true`)
            )
              return;
            let o = e.contentReferenceMessageIds?.[i.index];
            t = {
              content: ye(a.data.data),
              messageId: o ?? e.messageId,
              codeBlockIndex:
                o == null
                  ? i.index
                  : (e.contentReferenceMessageIds?.slice(0, i.index).filter((e) => e === o).length ?? 0),
            };
            return;
          }
          r.type === `code` &&
            ((r.codeBlockStyle === `indented`
              ? null
              : r.raw
                  .split(
                    `
`,
                  )
                  .reduce(de, null)) ??
              (t = {
                content: e.codeBlocks?.[String(n)]?.content ?? r.text,
                codeBlockIndex: n,
                messageId: e.messageId,
              }),
            (n += 1));
        }),
        t != null)
      )
        return t;
    }
  return null;
}
var Y;
function X() {
  return (X = e(() => {
    (k(), ce(), a(), le(), we(), xe(), Se(), (Y = x(f(), l([f(), t(!0)]))));
  }))();
}
function ze(e) {
  let t = (0, Z.c)(28),
    {
      conversationId: r,
      turns: a,
      loadHistory: l,
      renderMode: u,
      paragenEnabled: d,
      enabled: f,
      canCopy: p,
      priority: h,
    } = e,
    g = u === void 0 ? `conversation` : u,
    _ = d !== void 0 && d,
    y = f === void 0 || f,
    b = p === void 0 || p,
    x = h === void 0 ? `fallback` : h,
    S = c(i),
    w = (0, Q.useRef)(null),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => () => w.current?.abort()), (t[0] = T))
    : (T = t[0]);
  let E;
  (t[1] !== b || t[2] !== r || t[3] !== y || t[4] !== l || t[5] !== _ || t[6] !== g
    ? ((E = [r, y, b, l, g, _]),
      (t[1] = b),
      (t[2] = r),
      (t[3] = y),
      (t[4] = l),
      (t[5] = _),
      (t[6] = g),
      (t[7] = E))
    : (E = t[7]),
    (0, Q.useEffect)(T, E));
  let D;
  t[8] !== b || t[9] !== r || t[10] !== _ || t[11] !== g || t[12] !== S || t[13] !== a
    ? ((D = () => {
        let e = S.get(fe, r),
          t = S.query.getData(V, e),
          n = t?.conversation_origin ?? S.get(ae, r);
        if (!b || n === `tpp` || n === `flora`) return null;
        let i = S.get(ue, r),
          o = _ && g === `conversation` ? S.get(W, r)?.promptMessageId : void 0,
          s = Re(
            a ??
              Ne({
                conversation: t,
                threadMapping: i,
                threadCurrentNode: o ?? S.get(H, r),
                conversationOrigin: n,
                isStreaming: P(S.get(te, r)),
                mode: g,
                moderationDisclaimersByMessageId: S.get(O, r),
                pendingSubmission: null,
              }).renderedTurns,
          );
        if (s?.messageId == null) return { serverId: e, comparisonPromptMessageId: o, content: s?.content };
        let c = { conversationId: r, messageId: s.messageId, codeBlockIndex: s.codeBlockIndex },
          l = B(i?.[s.messageId]?.message?.metadata);
        return {
          serverId: e,
          comparisonPromptMessageId: o,
          content: S.get(_e, c) ?? l?.[String(s.codeBlockIndex)]?.content ?? s.content,
        };
      }),
      (t[8] = b),
      (t[9] = r),
      (t[10] = _),
      (t[11] = g),
      (t[12] = S),
      (t[13] = a),
      (t[14] = D))
    : (D = t[14]);
  let k = C(D),
    A;
  t[15] === S
    ? (A = t[16])
    : ((A = (e, t) => {
        let r = (e) => {
          z(S, me, {
            characterCount: s(e.length),
            productExperience: n.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT,
          });
        };
        return v(e, void 0, () => {
          typeof e == `string` ? r(e) : e.then(r, Be);
        }).then((e) => {
          e &&
            !t?.aborted &&
            S.get(m).success(
              (0, Ve.jsx)(o, {
                id: `chatgpt.codeBlocks.copyLast.success`,
                defaultMessage: `Copied code block to clipboard`,
                description: `Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode`,
              }),
            );
        });
      }),
      (t[15] = S),
      (t[16] = A));
  let j = A,
    F;
  t[17] !== r || t[18] !== k || t[19] !== l || t[20] !== _ || t[21] !== g || t[22] !== S || t[23] !== j
    ? ((F = () => {
        if (w.current?.signal.aborted === !1) return;
        let e = k();
        if (e == null) return;
        if (e.content != null) {
          j(e.content);
          return;
        }
        let { serverId: t, comparisonPromptMessageId: n } = e;
        if (!l || S.get(he, r) || t == null || S.get(N, t)?.complete !== !1) return;
        let i = new AbortController();
        w.current = i;
        let a = S.get(M),
          o = S.get(H, r),
          s = S.get(U).copyLastCodeBlock,
          c = S.watch((e) => {
            let { get: t } = e;
            (t(M) !== a ||
              t(H, r) !== o ||
              (_ && g === `conversation` && t(W, r)?.promptMessageId !== n) ||
              t(U).copyLastCodeBlock !== s) &&
              i.abort();
          }),
          u = (async () => {
            (await Me(S, t, i.signal), i.signal.throwIfAborted());
            let e = k()?.content;
            if (e == null) throw Error(`No complete code block in this conversation`);
            return e;
          })();
        j(u, i.signal).finally(() => {
          (c(), w.current === i && (w.current = null));
        });
      }),
      (t[17] = r),
      (t[18] = k),
      (t[19] = l),
      (t[20] = _),
      (t[21] = g),
      (t[22] = S),
      (t[23] = j),
      (t[24] = F))
    : (F = t[24]);
  let I;
  return (
    t[25] !== y || t[26] !== x
      ? ((I = { enabled: y, priority: x }), (t[25] = y), (t[26] = x), (t[27] = I))
      : (I = t[27]),
    pe(`copyLastCodeBlock`, F, I),
    null
  );
}
function Be() {}
var Z, Q, Ve;
function $() {
  return ($ = e(() => {
    ((Z = y()),
      d(),
      D(),
      r(),
      u(),
      (Q = w()),
      g(),
      L(),
      se(),
      A(),
      _(),
      ne(),
      b(),
      h(),
      p(),
      j(),
      Pe(),
      ge(),
      je(),
      ee(),
      re(),
      ve(),
      E(),
      X(),
      (Ve = S()));
  }))();
}
export { J as i, $ as n, Fe as r, ze as t };
//# sourceMappingURL=copy-last-code-block-command-74c872489e53.js.map
