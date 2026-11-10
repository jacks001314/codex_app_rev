import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  VDt as r,
  _O as i,
  cO as a,
  fO as o,
  gO as s,
  jDt as c,
  mO as l,
  oO as u,
  sO as d,
  t3 as f,
  vO as p,
  vzt as m,
  xMt as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as _,
  EPn as v,
  IAt as y,
  Kfr as b,
  PAt as x,
  Rm as S,
  Ui as C,
  Wi as w,
  d6n as T,
  hm as E,
  ih as D,
  p6n as O,
  qfr as k,
  zm as A,
} from "./app-initial-5851df3f6cb1.js";
import { n as j, t as M } from "./widget-follow-up-request-a0e70ac59eed.js";
function N(e) {
  let t = (0, R.c)(2),
    { confirmation: n } = e;
  if (n == null) return null;
  let r;
  return (t[0] === n ? (r = t[1]) : ((r = (0, B.jsx)(P, { ...n })), (t[0] = n), (t[1] = r)), r);
}
function P(e) {
  let o = (0, R.c)(31),
    {
      canConfirm: c,
      context: f,
      description: p,
      imageUrls: m,
      onCancel: h,
      onConfirm: g,
      prompt: _,
      title: b,
    } = e,
    x = c === void 0 || c,
    C = r(),
    w;
  o[0] === _
    ? (w = o[1])
    : ((w = () => {
        let e = D(_, {
          defaultTextKind: `prompt`,
          enableFileMentions: !1,
          enableSkillMentions: !1,
          enableSlashCommands: !1,
          enterBehavior: `newline`,
        });
        return { controller: e, destroy: () => e.destroy() };
      }),
      (o[0] = _),
      (o[1] = w));
  let [E] = (0, z.useState)(w),
    { controller: O, destroy: k } = E;
  S(k, O);
  let j = y(O, ee, `document`),
    [N, P] = (0, z.useState)(f),
    V;
  o[2] === f ? (V = o[3]) : ((V = I(f)), (o[2] = f), (o[3] = V));
  let H = V,
    [U, W] = (0, z.useState)(H),
    [G, K] = (0, z.useState)(`prompt`),
    q;
  o[4] === U ? (q = o[5]) : ((q = L(U)), (o[4] = U), (o[5] = q));
  let J = q,
    Y;
  o[6] !== x || o[7] !== N || o[8] !== O || o[9] !== g
    ? ((Y = () => {
        let e = O.getText().trim();
        x && e.length > 0 && g(M({ context: N, prompt: e }));
      }),
      (o[6] = x),
      (o[7] = N),
      (o[8] = O),
      (o[9] = g),
      (o[10] = Y))
    : (Y = o[10]);
  let X = Y,
    Z;
  o[11] === h
    ? (Z = o[12])
    : ((Z = (e) => {
        e || h();
      }),
      (o[11] = h),
      (o[12] = Z));
  let Q;
  o[13] !== x ||
  o[14] !== X ||
  o[15] !== N ||
  o[16] !== U ||
  o[17] !== O ||
  o[18] !== p ||
  o[19] !== j ||
  o[20] !== m ||
  o[21] !== H ||
  o[22] !== C ||
  o[23] !== h ||
  o[24] !== J ||
  o[25] !== b ||
  o[26] !== G
    ? ((Q =
        G === `prompt`
          ? (0, B.jsxs)(u, {
              className: `gap-4`,
              as: `form`,
              onSubmit: (e) => {
                (e.preventDefault(), X());
              },
              children: [
                (0, B.jsx)(te, { description: p, title: b }),
                (0, B.jsx)(T, {
                  children: (0, B.jsx)(T.Body, {
                    children: (0, B.jsx)(T.Input, {
                      children: (0, B.jsx)(A, {
                        ariaLabel: C.formatMessage({
                          id: `codex.mcpTool.confirmFollowUp.promptAriaLabel`,
                          defaultMessage: `Prompt`,
                          description: `Aria label for the editable prompt field in the MCP app follow-up confirmation dialog`,
                        }),
                        composerController: O,
                        linkOpenTarget: `external-browser`,
                        placeholder: ``,
                        onSubmit: X,
                      }),
                    }),
                  }),
                }),
                m != null && m.length > 0
                  ? (0, B.jsx)(`div`, { className: `flex flex-wrap gap-2`, children: m.map(F) })
                  : null,
                N == null
                  ? null
                  : (0, B.jsx)(`button`, {
                      className: `w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-info underline-offset-2 hover:underline`,
                      type: `button`,
                      onClick: () => {
                        (W(I(N)), K(`widget-state`));
                      },
                      children: (0, B.jsx)(n, {
                        id: `codex.mcpTool.confirmFollowUp.viewWidgetState`,
                        defaultMessage: `View widget state`,
                        description: `Link that opens the editable widget state included with a follow-up prompt`,
                      }),
                    }),
                (0, B.jsxs)(d, {
                  className: `justify-start gap-2`,
                  children: [
                    (0, B.jsx)(`div`, { className: `flex-1` }),
                    (0, B.jsx)(t, {
                      className: `ms-auto`,
                      color: `secondary`,
                      type: `button`,
                      onClick: h,
                      children: (0, B.jsx)(n, {
                        id: `codex.mcpTool.confirmFollowUp.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button for a dialog asking whether an MCP app may send a follow-up prompt`,
                      }),
                    }),
                    (0, B.jsx)(t, {
                      disabled: !x || !j,
                      type: `submit`,
                      children: (0, B.jsx)(n, {
                        id: `codex.mcpTool.confirmFollowUp.confirm`,
                        defaultMessage: `Send`,
                        description: `Confirm button for a dialog asking whether an MCP app may send a follow-up prompt`,
                      }),
                    }),
                  ],
                }),
              ],
            })
          : (0, B.jsxs)(u, {
              className: `gap-4`,
              children: [
                (0, B.jsx)(a, {
                  title: (0, B.jsx)(i, {
                    children: (0, B.jsx)(n, {
                      id: `codex.mcpTool.confirmFollowUp.widgetStateTitle`,
                      defaultMessage: `Widget state`,
                      description: `Title for the editable widget state view in a follow-up confirmation dialog`,
                    }),
                  }),
                  subtitle: (0, B.jsx)(s, {
                    className: `text-secondary`,
                    children: (0, B.jsx)(n, {
                      id: `codex.mcpTool.confirmFollowUp.widgetStateDescription`,
                      defaultMessage: `This JSON will be included with the prompt. Editing it won't change the widget.`,
                      description: `Description for the editable widget state view in a follow-up confirmation dialog`,
                    }),
                  }),
                }),
                (0, B.jsx)(v, {
                  variant: `code`,
                  rows: 10,
                  "aria-invalid": J == null,
                  "aria-label": C.formatMessage({
                    id: `codex.mcpTool.confirmFollowUp.widgetStateAriaLabel`,
                    defaultMessage: `Widget state JSON`,
                    description: `Aria label for the editable JSON widget state in a follow-up confirmation dialog`,
                  }),
                  autoFocus: !0,
                  spellCheck: !1,
                  value: U,
                  onChange: (e) => {
                    W(e.target.value);
                  },
                }),
                J == null
                  ? (0, B.jsx)(`p`, {
                      className: `text-sm text-danger`,
                      role: `alert`,
                      children: (0, B.jsx)(n, {
                        id: `codex.mcpTool.confirmFollowUp.invalidWidgetState`,
                        defaultMessage: `Enter a valid JSON object under 32 KB`,
                        description: `Validation error for invalid editable widget state JSON`,
                      }),
                    })
                  : null,
                (0, B.jsxs)(d, {
                  className: `justify-start gap-2`,
                  children: [
                    (0, B.jsx)(t, {
                      color: `ghost`,
                      disabled: U === H,
                      type: `button`,
                      onClick: () => {
                        W(H);
                      },
                      children: (0, B.jsx)(n, {
                        id: `codex.mcpTool.confirmFollowUp.resetWidgetState`,
                        defaultMessage: `Reset`,
                        description: `Button that resets edited widget state to the value supplied by the widget`,
                      }),
                    }),
                    (0, B.jsx)(`div`, { className: `flex-1` }),
                    (0, B.jsx)(t, {
                      color: `secondary`,
                      type: `button`,
                      onClick: () => {
                        (W(I(N)), K(`prompt`));
                      },
                      children: (0, B.jsx)(n, {
                        id: `codex.mcpTool.confirmFollowUp.backToPrompt`,
                        defaultMessage: `Back`,
                        description: `Button that returns from widget state editing to the follow-up prompt`,
                      }),
                    }),
                    (0, B.jsx)(t, {
                      disabled: J == null,
                      type: `button`,
                      onClick: () => {
                        J != null && (P(J), K(`prompt`));
                      },
                      children: (0, B.jsx)(n, {
                        id: `codex.mcpTool.confirmFollowUp.applyWidgetState`,
                        defaultMessage: `Apply`,
                        description: `Button that applies edited widget state to a follow-up prompt`,
                      }),
                    }),
                  ],
                }),
              ],
            })),
      (o[13] = x),
      (o[14] = X),
      (o[15] = N),
      (o[16] = U),
      (o[17] = O),
      (o[18] = p),
      (o[19] = j),
      (o[20] = m),
      (o[21] = H),
      (o[22] = C),
      (o[23] = h),
      (o[24] = J),
      (o[25] = b),
      (o[26] = G),
      (o[27] = Q))
    : (Q = o[27]);
  let $;
  return (
    o[28] !== Z || o[29] !== Q
      ? (($ = (0, B.jsx)(l, { open: !0, onOpenChange: Z, size: `wide`, children: Q })),
        (o[28] = Z),
        (o[29] = Q),
        (o[30] = $))
      : ($ = o[30]),
    $
  );
}
function F(e, t) {
  return (0, B.jsx)(C, { src: e }, t);
}
function ee(e) {
  return e.getText().trim().length > 0;
}
function te(e) {
  let t = (0, R.c)(11),
    { description: r, title: o } = e,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c =
        o ??
        (0, B.jsx)(n, {
          id: `codex.mcpTool.confirmFollowUp.title`,
          defaultMessage: `Send follow-up?`,
          description: `Title for a dialog asking whether an MCP app may send a follow-up prompt`,
        })),
      (t[0] = o),
      (t[1] = c));
  let l;
  t[2] === c ? (l = t[3]) : ((l = (0, B.jsx)(i, { children: c })), (t[2] = c), (t[3] = l));
  let u;
  t[4] === r
    ? (u = t[5])
    : ((u =
        r ??
        (0, B.jsx)(n, {
          id: `codex.mcpTool.confirmFollowUp.description`,
          defaultMessage: `An app wants to send this prompt`,
          description: `Description for a dialog asking whether an MCP app may send a follow-up prompt`,
        })),
      (t[4] = r),
      (t[5] = u));
  let d;
  t[6] === u
    ? (d = t[7])
    : ((d = (0, B.jsx)(s, { className: `text-secondary`, children: u })), (t[6] = u), (t[7] = d));
  let f;
  return (
    t[8] !== l || t[9] !== d
      ? ((f = (0, B.jsx)(a, { title: l, subtitle: d })), (t[8] = l), (t[9] = d), (t[10] = f))
      : (f = t[10]),
    f
  );
}
function I(e) {
  return e == null ? `` : k(e);
}
function L(e) {
  try {
    return b(JSON.parse(e));
  } catch {
    return;
  }
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = m()), (z = g()), c(), w(), O(), x(), f(), p(), o(), _(), E(), j(), (B = h()));
  }))();
}
export { V as n, N as t };
//# sourceMappingURL=mcp-app-follow-up-confirmation-dialog-4d62a209cf2f.js.map
