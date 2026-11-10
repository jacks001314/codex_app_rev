import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Rt as t,
  $St as n,
  $st as r,
  A5 as i,
  FBt as a,
  HFt as o,
  LNt as s,
  LRt as c,
  NO as l,
  PBt as u,
  PO as d,
  Qit as f,
  Qst as p,
  Rrt as m,
  VRt as h,
  Vrt as g,
  XOt as _,
  ZSt as v,
  gB as y,
  hB as b,
  hRt as x,
  nat as S,
  qrt as C,
  tkt as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $$n as T,
  B1n as E,
  Bln as D,
  Brr as O,
  C1n as k,
  Ejr as A,
  F4n as j,
  J1n as M,
  M4n as N,
  NKt as P,
  PVr as F,
  Q2n as I,
  RKn as L,
  SJn as R,
  VPn as z,
  Vln as B,
  WNn as V,
  Y1n as H,
  Z2n as ee,
  _0n as te,
  aqn as ne,
  bjr as re,
  bur as ie,
  e0n as ae,
  g2n as oe,
  gFn as se,
  jKt as U,
  jVr as ce,
  m0n as W,
  n0n as G,
  oqn as le,
  q1n as ue,
  qKn as de,
  r0n as fe,
  rPn as pe,
  x0n as K,
  xJn as me,
  xMr as he,
  xjr as ge,
  xur as _e,
  yMr as ve,
  zDt as ye,
  zRr as q,
} from "./app-initial-ad16eaadf81f.js";
import { cv as be, lv as xe, vi as Se, yi as Ce } from "./app-primary-3e00728c2a4c.js";
import { a as we, f as Te, o as Ee, p as De } from "./content-reference-8dc40d467a5f.js";
import { n as Oe, t as ke } from "./content-reference-directive-match-f9624838b898.js";
import { X as Ae, Y as je } from "./sites-end-resource-27c4a4bdef80.js";
import { a as Me, i as Ne, r as Pe, t as Fe } from "./thread-response-space-controller-434ad228f281.js";
import { n as Ie, t as Le } from "./notifications-2eb77f3d52ee.js";
import { n as Re, t as ze } from "./controller-9c3c81f9854c.js";
import { c as Be, o as Ve } from "./suggestion-bindings-f51c91e7e7f8.js";
function He(e) {
  let t = (0, J.c)(45),
    {
      initialPlacementKey: n,
      isActiveVoiceConversation: r,
      isLoadingHistory: i,
      latestUserTurnKey: a,
      onResponseSpacerStateChange: o,
    } = e,
    s = r !== void 0 && r,
    c = i !== void 0 && i,
    l = A(),
    u;
  t[0] !== s || t[1] !== l
    ? ((u = s && re(l, `2825211774`).get(`voice_orb_transcript_clearance_enabled`, !1)),
      (t[0] = s),
      (t[1] = l),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f = (0, Y.useRef)(a),
    p = (0, Y.useRef)(c),
    m = (0, Y.useRef)(null),
    h = (0, Y.useRef)(null),
    g = xe(),
    _;
  t[3] === g ? (_ = t[4]) : ((_ = () => new Fe(g)), (t[3] = g), (t[4] = _));
  let [v] = (0, Y.useState)(_),
    { clear: b, consumeGrowth: x, getHeightPx: S, place: C, prepareThreadEndContent: w } = v,
    { addScrollListener: T, getScrollElement: E } = g,
    D;
  t[5] !== b || t[6] !== g
    ? ((D = () => {
        (b(), g.scrollToBottom());
      }),
      (t[5] = b),
      (t[6] = g),
      (t[7] = D))
    : (D = t[7]);
  let O = y(D),
    k;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (e, t) => {
        ((m.current = { turnKey: e, element: t }), h.current?.(e, t));
      }),
      (t[8] = k))
    : (k = t[8]);
  let j = y(k),
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
  let N = y(M),
    P;
  t[10] !== E || t[11] !== a || t[12] !== C || t[13] !== d
    ? ((P = () => {
        let e = E();
        if (e == null || e.clientHeight === 0) return !1;
        if (d && a != null) {
          let t = We(e, a);
          if (t == null) return !1;
          C(t);
        } else C();
        return !0;
      }),
      (t[10] = E),
      (t[11] = a),
      (t[12] = C),
      (t[13] = d),
      (t[14] = P))
    : (P = t[14]);
  let F = (0, Y.useEffectEvent)(P),
    I,
    L;
  (t[15] !== b ||
  t[16] !== x ||
  t[17] !== S ||
  t[18] !== o ||
  t[19] !== j ||
  t[20] !== C ||
  t[21] !== w ||
  t[22] !== O ||
  t[23] !== d
    ? ((L = () => (
        o({
          voiceAutoScrollEnabled: d,
          clear: b,
          consumeGrowth: x,
          getHeightPx: S,
          onTurnLayoutReady: j,
          place: C,
          prepareThreadEndContent: w,
          scrollToBottom: O,
        }),
        () => {
          o(null);
        }
      )),
      (I = [b, x, S, o, j, C, w, O, d]),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S),
      (t[18] = o),
      (t[19] = j),
      (t[20] = C),
      (t[21] = w),
      (t[22] = O),
      (t[23] = d),
      (t[24] = I),
      (t[25] = L))
    : ((I = t[24]), (L = t[25])),
    (0, Y.useLayoutEffect)(L, I));
  let R, z;
  (t[26] !== E || t[27] !== c || t[28] !== a || t[29] !== C || t[30] !== N || t[31] !== d
    ? ((R = () => {
        let e = f.current,
          t = p.current;
        if (((f.current = a), (p.current = c), !(!d || c || t || a == null || a === e)))
          return Ue(a, E, C, N);
      }),
      (z = [E, c, a, C, N, d]),
      (t[26] = E),
      (t[27] = c),
      (t[28] = a),
      (t[29] = C),
      (t[30] = N),
      (t[31] = d),
      (t[32] = R),
      (t[33] = z))
    : ((R = t[32]), (z = t[33])),
    (0, Y.useLayoutEffect)(R, z));
  let B;
  t[34] !== T || t[35] !== E || t[36] !== n || t[37] !== F
    ? ((B = () => {
        if (n == null) return;
        let e = !1;
        return T(() => {
          e || E() == null || ((e = !0), (e = F()));
        });
      }),
      (t[34] = T),
      (t[35] = E),
      (t[36] = n),
      (t[37] = F),
      (t[38] = B))
    : (B = t[38]);
  let V;
  (t[39] !== T || t[40] !== E || t[41] !== n
    ? ((V = [T, E, n]), (t[39] = T), (t[40] = E), (t[41] = n), (t[42] = V))
    : (V = t[42]),
    (0, Y.useLayoutEffect)(B, V));
  let H;
  return (t[43] === v ? (H = t[44]) : ((H = (0, X.jsx)(Ne, { controller: v })), (t[43] = v), (t[44] = H)), H);
}
function Ue(e, t, n, r) {
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
function We(e, t) {
  let n = e.querySelector(`[data-turn-key="${CSS.escape(t)}"]`);
  return n?.querySelector(`[data-user-message-bubble]`) ?? n;
}
var J, Y, X;
function Z() {
  return (Z = e(() => {
    ((J = u()), (Y = a()), ge(), Me(), Pe(), be(), b(), (X = s()));
  }))();
}
function Ge(e) {
  for (let { turn: t } of e.toReversed())
    for (let e of t.items.toReversed()) {
      if (e.type !== `assistant-message`) continue;
      let t = null,
        n = 0;
      if (
        (ce(_e(e.content, T), (r) => {
          if (r.type === `codexDirective` && r.name === `chatgpt-content-reference`) {
            let n = Ke.safeParse(r.attributes);
            if (!n.success) return;
            let i = ke(n.data, e.contentReferences),
              a = Te.safeParse(i?.reference);
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
              content: we(a.data.data),
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
                  .reduce(ye, null)) ??
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
var Ke;
function qe() {
  return (qe = e(() => {
    (F(), k(), o(), ie(), Oe(), Ee(), De(), (Ke = c(h(), t([h(), x(!0)]))));
  }))();
}
function Je(e) {
  let t = (0, Xe.c)(28),
    {
      conversationId: r,
      turns: a,
      loadHistory: o,
      renderMode: s,
      paragenEnabled: c,
      enabled: u,
      canCopy: d,
      priority: m,
    } = e,
    h = s === void 0 ? `conversation` : s,
    g = c !== void 0 && c,
    _ = u === void 0 || u,
    v = d === void 0 || d,
    b = m === void 0 ? `fallback` : m,
    x = n(p),
    S = (0, Q.useRef)(null),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => () => S.current?.abort()), (t[0] = T))
    : (T = t[0]);
  let D;
  (t[1] !== v || t[2] !== r || t[3] !== _ || t[4] !== o || t[5] !== g || t[6] !== h
    ? ((D = [r, _, v, o, h, g]),
      (t[1] = v),
      (t[2] = r),
      (t[3] = _),
      (t[4] = o),
      (t[5] = g),
      (t[6] = h),
      (t[7] = D))
    : (D = t[7]),
    (0, Q.useEffect)(T, D));
  let O;
  t[8] !== v || t[9] !== r || t[10] !== g || t[11] !== h || t[12] !== x || t[13] !== a
    ? ((O = () => {
        let e = x.get(E, r),
          t = x.query.getData(V, e),
          n = t?.conversation_origin ?? x.get(ue, r);
        if (!v || n === `tpp` || n === `flora`) return null;
        let i = x.get(G, r),
          o = g && h === `conversation` ? x.get(U, r)?.promptMessageId : void 0,
          s = Ge(
            a ??
              Ve({
                conversation: t,
                threadMapping: i,
                threadCurrentNode: o ?? x.get(H, r),
                conversationOrigin: n,
                isStreaming: K(x.get(W, r)),
                mode: h,
                moderationDisclaimersByMessageId: x.get(fe, r),
                pendingSubmission: null,
              }).renderedTurns,
          );
        if (s?.messageId == null) return { serverId: e, comparisonPromptMessageId: o, content: s?.content };
        let c = { conversationId: r, messageId: s.messageId, codeBlockIndex: s.codeBlockIndex },
          l = me(i?.[s.messageId]?.message?.metadata);
        return {
          serverId: e,
          comparisonPromptMessageId: o,
          content: x.get(Se, c) ?? l?.[String(s.codeBlockIndex)]?.content ?? s.content,
        };
      }),
      (t[8] = v),
      (t[9] = r),
      (t[10] = g),
      (t[11] = h),
      (t[12] = x),
      (t[13] = a),
      (t[14] = O))
    : (O = t[14]);
  let k = y(O),
    A;
  t[15] === x
    ? (A = t[16])
    : ((A = (e, t) => {
        let n = (e) => {
          he(x, L, {
            characterCount: f(e.length),
            productExperience: i.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT,
          });
        };
        return l(e, void 0, () => {
          typeof e == `string` ? n(e) : e.then(n, Ye);
        }).then((e) => {
          e &&
            !t?.aborted &&
            x
              .get(C)
              .success(
                (0, Ze.jsx)(w, {
                  id: `chatgpt.codeBlocks.copyLast.success`,
                  defaultMessage: `Copied code block to clipboard`,
                  description: `Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode`,
                }),
              );
        });
      }),
      (t[15] = x),
      (t[16] = A));
  let N = A,
    P;
  t[17] !== r || t[18] !== k || t[19] !== o || t[20] !== g || t[21] !== h || t[22] !== x || t[23] !== N
    ? ((P = () => {
        if (S.current?.signal.aborted === !1) return;
        let e = k();
        if (e == null) return;
        if (e.content != null) {
          N(e.content);
          return;
        }
        let { serverId: t, comparisonPromptMessageId: n } = e;
        if (!o || x.get(M, r) || t == null || x.get(ne, t)?.complete !== !1) return;
        let i = new AbortController();
        S.current = i;
        let a = x.get(q),
          s = x.get(H, r),
          c = x.get(j).copyLastCodeBlock,
          l = x.watch((e) => {
            let { get: t } = e;
            (t(q) !== a ||
              t(H, r) !== s ||
              (g && h === `conversation` && t(U, r)?.promptMessageId !== n) ||
              t(j).copyLastCodeBlock !== c) &&
              i.abort();
          }),
          u = (async () => {
            (await ze(x, t, i.signal), i.signal.throwIfAborted());
            let e = k()?.content;
            if (e == null) throw Error(`No complete code block in this conversation`);
            return e;
          })();
        N(u, i.signal).finally(() => {
          (l(), S.current === i && (S.current = null));
        });
      }),
      (t[17] = r),
      (t[18] = k),
      (t[19] = o),
      (t[20] = g),
      (t[21] = h),
      (t[22] = x),
      (t[23] = N),
      (t[24] = P))
    : (P = t[24]);
  let F;
  return (
    t[25] !== _ || t[26] !== b
      ? ((F = { enabled: _, priority: b }), (t[25] = _), (t[26] = b), (t[27] = F))
      : (F = t[27]),
    I(`copyLastCodeBlock`, P, F),
    null
  );
}
function Ye() {}
var Xe, Q, Ze;
function Qe() {
  return (Qe = e(() => {
    ((Xe = u()),
      m(),
      de(),
      S(),
      v(),
      (Q = a()),
      _(),
      O(),
      N(),
      ee(),
      g(),
      ve(),
      r(),
      d(),
      b(),
      pe(),
      Be(),
      z(),
      Re(),
      le(),
      P(),
      Ce(),
      R(),
      qe(),
      (Ze = s()));
  }))();
}
var $e;
function $() {
  return ($ = e(() => {
    (Ie(),
      D(),
      z(),
      Ae(),
      ($e = Le({
        conversationIds: (e, t) => [t],
        status: ({ get: e }, t) => {
          let n = e(oe, t);
          return { pending: K(e(W, t)), completed: n == null || n.result === `completed`, unread: e(ae, t) };
        },
        preview: ({ get: e }, t) => {
          let n = e(G, t);
          return n == null ? null : (je({ mapping: n, current_node: e(H, t) })?.text ?? null);
        },
        title: ({ get: e }, t) => e(te, t) || null,
        dismiss: (e, t) => {
          (se(e, t, !1), B(e, t).catch(() => {}));
        },
      })));
  }))();
}
export { He as a, Qe as i, $ as n, Z as o, Je as r, $e as t };
//# sourceMappingURL=composer-687acdc8659d.js.map
