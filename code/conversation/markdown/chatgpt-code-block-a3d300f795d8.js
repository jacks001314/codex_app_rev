import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AH as r,
  AMt as i,
  Amn as a,
  CW as o,
  Cmt as s,
  Cpn as c,
  Cpt as l,
  DH as u,
  EH as d,
  Eft as f,
  F3t as p,
  Fd as m,
  Gft as h,
  Gmt as g,
  Id as _,
  JG as v,
  Jit as y,
  Jnt as b,
  KG as x,
  KH as S,
  Kft as C,
  Kit as w,
  Kmt as T,
  MMt as E,
  N3t as D,
  Nlt as O,
  O3t as k,
  OH as A,
  Odt as j,
  Opn as ee,
  QXt as M,
  Rht as N,
  Rpn as P,
  Slt as F,
  Smt as I,
  Spn as L,
  TH as te,
  TW as ne,
  Tft as re,
  Umt as R,
  Wmt as ie,
  Xdt as z,
  Xnt as ae,
  YH as oe,
  Ynt as se,
  ZG as ce,
  Znt as le,
  _gt as B,
  a3t as ue,
  aG as de,
  aYt as fe,
  cG as pe,
  dYt as me,
  eZt as he,
  fxt as ge,
  gMt as _e,
  hMt as ve,
  hV as ye,
  hmn as V,
  jMt as be,
  jXt as xe,
  jut as Se,
  kH as Ce,
  kMt as H,
  kXt as we,
  kgt as Te,
  kmn as U,
  lG as Ee,
  m1 as De,
  mV as W,
  mxt as G,
  nH as Oe,
  nR as ke,
  nZt as Ae,
  npt as je,
  o3t as Me,
  p1 as Ne,
  qut as Pe,
  sG as Fe,
  sYt as Ie,
  tH as Le,
  tR as Re,
  tpt as ze,
  uG as Be,
  vrt as Ve,
  wW as He,
  wpt as Ue,
  zpn as We,
} from "./app-initial-f094ef01c64d.js";
import {
  Lb as Ge,
  NC as K,
  PC as Ke,
  Rb as q,
  gC as qe,
  vC as Je,
} from "./app-primary-4c40d73a1074.js";
import {
  $ as Ye,
  A as Xe,
  H as Ze,
  I as J,
  N as Qe,
  V as $e,
  a as et,
  c as tt,
  ht as nt,
  i as rt,
  n as it,
  r as at,
  s as ot,
  x as st,
} from "./file-editor-theme-75aaad6f8219.js";
var ct,
  lt,
  ut = e(() => {
    (a(),
      (ct = V()),
      (lt = (e) =>
        (0, ct.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, ct.jsx)(`path`, {
              d: `M2.08331 4.58333C3.58331 4.33333 4.33331 3.33333 4.58331 2.08333C4.83331 3.33333 5.58331 4.33333 7.08331 4.58333C5.58331 4.83333 4.83331 5.83333 4.58331 7.08333C4.33331 5.83333 3.58331 4.83333 2.08331 4.58333Z`,
              fill: `currentColor`,
              stroke: `currentColor`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              strokeWidth: 0.6,
            }),
            (0, ct.jsx)(`path`, {
              d: `M4.71899 13.7692L4.32008 16.1627C4.26833 16.4732 4.24246 16.6284 4.29061 16.7407C4.33275 16.8389 4.41104 16.9172 4.50929 16.9594C4.62155 17.0075 4.77679 16.9816 5.08727 16.9299L7.48075 16.531C8.10675 16.4266 8.41975 16.3745 8.71178 16.2675C8.97095 16.1725 9.21732 16.0457 9.44524 15.89C9.70205 15.7146 9.92643 15.4902 10.3752 15.0415L10.3752 15.0415L16.6666 8.75C17.8172 7.59941 17.8172 5.73393 16.6666 4.58333C15.516 3.43274 13.6506 3.43274 12.5 4.58333L6.20852 10.8748C5.75977 11.3235 5.53539 11.5479 5.35995 11.8047C5.20425 12.0326 5.07746 12.279 4.9825 12.5382C4.87549 12.8302 4.82332 13.1432 4.71899 13.7692Z`,
              stroke: `currentColor`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              strokeWidth: 1.33,
            }),
            (0, ct.jsx)(`path`, {
              d: `M12.0833 5.83333L15.4166 9.16667`,
              stroke: `currentColor`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              strokeWidth: 1.33,
            }),
          ],
        })));
  });
function dt(e) {
  let t = (0, ft.c)(14),
    { code: n, onBlur: r, onChange: i } = e,
    a = ee(),
    [o, s] = (0, Y.useState)(null),
    c = (0, Y.useRef)(n),
    l = (0, Y.useRef)(null),
    u = (0, Y.useEffectEvent)(i),
    d = (0, Y.useEffectEvent)(r),
    f;
  t[0] === a
    ? (f = t[1])
    : ((f = a.formatMessage({
        id: `chatgpt.codeBlocks.editor.ariaLabel`,
        defaultMessage: `Edit code`,
        description: `Accessible label for the inline editable code block editor shown in a ChatGPT conversation after the user selects Edit code`,
      })),
      (t[0] = a),
      (t[1] = f));
  let p = f,
    m;
  t[2] !== o || t[3] !== p || t[4] !== d || t[5] !== u
    ? ((m = () => {
        if (o == null) return;
        let e = new J({
          parent: o,
          state: Ye.create({
            doc: c.current,
            extensions: [
              it,
              et(),
              Ze.of([...rt, ...ot]),
              Qe(st, { fallback: !0 }),
              J.contentAttributes.of({ "aria-label": p }),
              J.updateListener.of((e) => {
                e.docChanged && u(e.state.doc.toString());
              }),
              J.domEventHandlers({ blur: () => d() }),
            ],
          }),
        });
        return (
          (l.current = e),
          e.focus(),
          () => {
            ((l.current = null), e.destroy());
          }
        );
      }),
      (t[2] = o),
      (t[3] = p),
      (t[4] = d),
      (t[5] = u),
      (t[6] = m))
    : (m = t[6]);
  let h;
  (t[7] !== o || t[8] !== p ? ((h = [o, p]), (t[7] = o), (t[8] = p), (t[9] = h)) : (h = t[9]),
    (0, Y.useLayoutEffect)(m, h));
  let g, _;
  (t[10] === n
    ? ((g = t[11]), (_ = t[12]))
    : ((g = () => {
        let e = l.current;
        e == null ||
          e.state.doc.toString() === n ||
          e.dispatch({ changes: { from: 0, to: e.state.doc.length, insert: n } });
      }),
      (_ = [n]),
      (t[10] = n),
      (t[11] = g),
      (t[12] = _)),
    (0, Y.useEffect)(g, _));
  let v;
  return (
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, pt.jsx)(`div`, { ref: s, className: `min-h-24 w-full overflow-auto` })),
        (t[13] = v))
      : (v = t[13]),
    v
  );
}
var ft,
  Y,
  pt,
  mt = e(() => {
    ((ft = U()), tt(), Xe(), nt(), $e(), (Y = t(a(), 1)), L(), at(), (pt = V()));
  });
async function ht({ button: e, code: t, language: n, previewLanguage: r }) {
  if (r === `html` || r === `react`) {
    let e = `tsx`;
    (r === `html` ? (e = `html`) : (n === `javascript` || n === `js` || n === `jsx`) && (e = `jsx`),
      I(
        new Blob([t], {
          type: r === `html` ? `text/html;charset=utf-8` : `text/plain;charset=utf-8`,
        }),
        `preview.${e}`,
      ));
    return;
  }
  let i = e
    .closest(`[data-chatgpt-mermaid-preview], [data-markdown-copy="code-block"]`)
    ?.querySelector(`[data-mermaid-theme] svg`);
  if (i == null) throw Error(`Diagram is not ready for export`);
  let a = new Image();
  await new Promise((e, t) => {
    ((a.onload = () => e()),
      (a.onerror = () => t(Error(`Failed to load diagram`))),
      (a.src = g(new XMLSerializer().serializeToString(i))));
  });
  let o = i.viewBox.baseVal.width || a.naturalWidth,
    s = i.viewBox.baseVal.height || a.naturalHeight,
    c = document.createElement(`canvas`);
  ((c.width = Math.max(1, Math.ceil(o * 2))), (c.height = Math.max(1, Math.ceil(s * 2))));
  let l = c.getContext(`2d`);
  if (l == null) throw Error(`Diagram export is unavailable`);
  (l.scale(2, 2), l.drawImage(a, 0, 0, o, s));
  let u = await new Promise((e) => c.toBlob(e, `image/png`));
  if (u == null) throw Error(`Failed to create diagram image`);
  I(u, `preview.png`);
}
var gt = e(() => {
  (T(), s());
});
function _t(e) {
  let t = (0, vt.c)(42),
    {
      codeBlockIndex: r,
      codeBlockType: i,
      language: a,
      messageId: o,
      serverConversationId: s,
      userEditedCodeBlock: l,
    } = e,
    u = n(ue),
    d = ee(),
    f = (0, yt.useId)(),
    [p, h] = (0, yt.useState)(``),
    [g, _] = (0, yt.useState)(!1),
    [v, y] = (0, yt.useState)(!1),
    [b, x] = (0, yt.useState)(!1),
    S;
  t[0] === d
    ? (S = t[1])
    : ((S = d.formatMessage({
        id: `chatgpt.codeBlocks.feedback.open`,
        defaultMessage: `Give feedback`,
        description: `Accessible label and visible action text for opening or submitting written feedback about a chart or interactive app shown in a ChatGPT code block`,
      })),
      (t[0] = d),
      (t[1] = S));
  let C = S;
  if (b) return null;
  let w;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(ve, { "aria-hidden": !1, asset: m })), (t[2] = w))
    : (w = t[2]);
  let T;
  t[3] === C
    ? (T = t[4])
    : ((T = (0, X.jsx)(Ee, {
        asChild: !0,
        children: (0, X.jsx)(H, { "aria-label": C, color: `ghost`, size: `icon`, children: w }),
      })),
      (t[3] = C),
      (t[4] = T));
  let E;
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== p ||
  t[8] !== v ||
  t[9] !== a ||
  t[10] !== o ||
  t[11] !== u ||
  t[12] !== s ||
  t[13] !== l
    ? ((E = (e) => {
        e.preventDefault();
        let t = p.trim();
        !t ||
          v ||
          (y(!0),
          u
            .get(ge)
            .submitCodeBlockFeedback({
              code_block_index: String(r),
              code_block_type: i,
              conversation_id: s,
              feedback: t,
              language: a,
              message_id: o,
              user_edited_code_block: l,
            })
            .then(() => {
              (x(!0),
                _(!1),
                u.get(xe).success(
                  (0, X.jsx)(c, {
                    id: `chatgpt.codeBlocks.feedback.success`,
                    defaultMessage: `Your feedback has been submitted`,
                    description: `Success toast shown after submitting written feedback about a chart or interactive app generated in a ChatGPT code block`,
                  }),
                ));
            })
            .catch(() => {
              u.get(xe).danger(
                (0, X.jsx)(c, {
                  id: `chatgpt.codeBlocks.feedback.error`,
                  defaultMessage: `Couldn’t submit feedback`,
                  description: `Error toast shown when written feedback about a chart or interactive app generated in a ChatGPT code block cannot be submitted`,
                }),
              );
            })
            .finally(() => y(!1)));
      }),
      (t[5] = r),
      (t[6] = i),
      (t[7] = p),
      (t[8] = v),
      (t[9] = a),
      (t[10] = o),
      (t[11] = u),
      (t[12] = s),
      (t[13] = l),
      (t[14] = E))
    : (E = t[14]);
  let D;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(pe, {
        children: (0, X.jsx)(c, {
          id: `chatgpt.codeBlocks.feedback.title`,
          defaultMessage: `This is a visualization, a new feature we’re testing`,
          description: `Heading of a feedback popover that explains a chart or interactive app in a ChatGPT code block is an experimental visualization`,
        }),
      })),
      (t[15] = D))
    : (D = t[15]);
  let O;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(c, {
        id: `chatgpt.codeBlocks.feedback.description`,
        defaultMessage: `Tell us what’s working and what’s not about this visualization. The more specific the feedback, the better.`,
        description: `Field label asking a ChatGPT user to describe positive or negative feedback about a chart or interactive app shown inside a code block`,
      })),
      (t[16] = O))
    : (O = t[16]);
  let k;
  t[17] === f
    ? (k = t[18])
    : ((k = (0, X.jsx)(`label`, { htmlFor: f, children: O })), (t[17] = f), (t[18] = k));
  let A;
  t[19] === d
    ? (A = t[20])
    : ((A = d.formatMessage({
        id: `chatgpt.codeBlocks.feedback.placeholder`,
        defaultMessage: `What did you like or dislike about this visualization?`,
        description: `Placeholder for the multiline feedback field about a chart or interactive app shown in a ChatGPT code block`,
      })),
      (t[19] = d),
      (t[20] = A));
  let j;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => h(e.target.value)), (t[21] = j))
    : (j = t[21]);
  let M;
  t[22] !== p || t[23] !== f || t[24] !== A
    ? ((M = (0, X.jsx)(He, {
        autoFocus: !0,
        id: f,
        name: `block-feedback-text`,
        placeholder: A,
        rows: 3,
        value: p,
        onChange: j,
      })),
      (t[22] = p),
      (t[23] = f),
      (t[24] = A),
      (t[25] = M))
    : (M = t[25]);
  let N;
  t[26] !== p || t[27] !== v
    ? ((N = !p.trim() || v), (t[26] = p), (t[27] = v), (t[28] = N))
    : (N = t[28]);
  let P;
  t[29] !== C || t[30] !== v || t[31] !== N
    ? ((P = (0, X.jsx)(H, {
        color: `secondary`,
        disabled: N,
        loading: v,
        size: `compact`,
        type: `submit`,
        children: C,
      })),
      (t[29] = C),
      (t[30] = v),
      (t[31] = N),
      (t[32] = P))
    : (P = t[32]);
  let F;
  t[33] !== M || t[34] !== P || t[35] !== E || t[36] !== k
    ? ((F = (0, X.jsx)(Fe, {
        align: `end`,
        side: `top`,
        children: (0, X.jsxs)(`form`, {
          className: `flex flex-col gap-2 p-2`,
          onSubmit: E,
          children: [D, k, M, P],
        }),
      })),
      (t[33] = M),
      (t[34] = P),
      (t[35] = E),
      (t[36] = k),
      (t[37] = F))
    : (F = t[37]);
  let I;
  return (
    t[38] !== g || t[39] !== F || t[40] !== T
      ? ((I = (0, X.jsxs)(de, { open: g, onOpenChange: _, children: [T, F] })),
        (t[38] = g),
        (t[39] = F),
        (t[40] = T),
        (t[41] = I))
      : (I = t[41]),
    I
  );
}
var vt,
  yt,
  X,
  bt = e(() => {
    ((vt = U()),
      _(),
      k(),
      (yt = t(a(), 1)),
      L(),
      i(),
      _e(),
      Be(),
      ne(),
      we(),
      Me(),
      G(),
      (X = V()));
  });
function xt(e) {
  let t = (0, St.c)(41),
    { code: r, language: i, onApply: a, onClose: s, serverConversationId: l } = e,
    u = n(ue),
    d = ee(),
    f = (0, Ct.useRef)(null),
    [p, m] = (0, Ct.useState)(``),
    [h, g] = (0, Ct.useState)(!1),
    [_, v] = (0, Ct.useState)(null),
    y,
    b;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => () => f.current?.abort()), (b = []), (t[0] = y), (t[1] = b))
    : ((y = t[0]), (b = t[1])),
    (0, Ct.useEffect)(y, b));
  let x;
  t[2] !== r || t[3] !== p || t[4] !== h || t[5] !== i || t[6] !== u || t[7] !== l
    ? ((x = () => {
        let e = p.trim();
        if (!e || h) return;
        let t = new AbortController();
        ((f.current = t),
          g(!0),
          u
            .get(ge)
            .executeCodeBlockMagicEdit(
              {
                conversation_id: l,
                end_index: r.length,
                instruction: e,
                language: i,
                marked_block_body_markdown: `<|magic_edit_start|>${r}<|magic_edit_end|>`,
                mode: `edit`,
                num_variations: 1,
                start_index: 0,
              },
              t.signal,
            )
            .then((e) => {
              let t = e.choices[0];
              t != null && v(t);
            })
            .catch((e) => {
              (e instanceof DOMException && e.name === `AbortError`) ||
                u.get(xe).danger(
                  (0, Z.jsx)(c, {
                    id: `chatgpt.codeBlocks.magicEdit.error`,
                    defaultMessage: `Couldn’t edit code`,
                    description: `Error toast displayed when the model cannot complete a requested code-block edit in a ChatGPT conversation`,
                  }),
                );
            })
            .finally(() => {
              ((f.current = null), g(!1));
            }));
      }),
      (t[2] = r),
      (t[3] = p),
      (t[4] = h),
      (t[5] = i),
      (t[6] = u),
      (t[7] = l),
      (t[8] = x))
    : (x = t[8]);
  let S = x,
    C;
  t[9] !== a || t[10] !== s || t[11] !== S || t[12] !== _
    ? ((C = (e) => {
        if ((e.preventDefault(), _ != null)) {
          (a(_), s());
          return;
        }
        S();
      }),
      (t[9] = a),
      (t[10] = s),
      (t[11] = S),
      (t[12] = _),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] === d
    ? (w = t[15])
    : ((w = d.formatMessage({
        id: `chatgpt.codeBlocks.magicEdit.instruction.ariaLabel`,
        defaultMessage: `Describe how to edit the code`,
        description: `Accessible label for the instruction input in an inline ChatGPT code-block AI editing form`,
      })),
      (t[14] = d),
      (t[15] = w));
  let T = h || _ != null,
    E;
  t[16] === d
    ? (E = t[17])
    : ((E = d.formatMessage({
        id: `chatgpt.codeBlocks.magicEdit.instruction.placeholder`,
        defaultMessage: `Describe an edit…`,
        description: `Placeholder in the instruction input that asks a ChatGPT user how the model should edit the current code block`,
      })),
      (t[16] = d),
      (t[17] = E));
  let D;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (e) => m(e.target.value)), (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] !== p || t[20] !== w || t[21] !== T || t[22] !== E
    ? ((O = (0, Z.jsx)(o, {
        "aria-label": w,
        disabled: T,
        placeholder: E,
        value: p,
        variant: `compact`,
        onChange: D,
      })),
      (t[19] = p),
      (t[20] = w),
      (t[21] = T),
      (t[22] = E),
      (t[23] = O))
    : (O = t[23]);
  let k;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(c, {
        id: `chatgpt.codeBlocks.magicEdit.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the inline ChatGPT code-block AI editing form without applying a suggestion`,
      })),
      (t[24] = k))
    : (k = t[24]);
  let A;
  t[25] === s
    ? (A = t[26])
    : ((A = (0, Z.jsx)(H, { color: `ghost`, size: `compact`, onClick: s, children: k })),
      (t[25] = s),
      (t[26] = A));
  let j;
  t[27] !== p || t[28] !== h
    ? ((j = !p.trim() || h), (t[27] = p), (t[28] = h), (t[29] = j))
    : (j = t[29]);
  let M;
  t[30] === _
    ? (M = t[31])
    : ((M =
        _ == null
          ? (0, Z.jsx)(c, {
              id: `chatgpt.codeBlocks.magicEdit.generate`,
              defaultMessage: `Generate`,
              description: `Button that asks the model to generate a suggested edit to the current ChatGPT code block`,
            })
          : (0, Z.jsx)(c, {
              id: `chatgpt.codeBlocks.magicEdit.apply`,
              defaultMessage: `Apply`,
              description: `Button that applies the generated model suggestion to the current ChatGPT code block`,
            })),
      (t[30] = _),
      (t[31] = M));
  let N;
  t[32] !== h || t[33] !== j || t[34] !== M
    ? ((N = (0, Z.jsx)(H, {
        color: `secondary`,
        disabled: j,
        loading: h,
        size: `compact`,
        type: `submit`,
        children: M,
      })),
      (t[32] = h),
      (t[33] = j),
      (t[34] = M),
      (t[35] = N))
    : (N = t[35]);
  let P;
  return (
    t[36] !== A || t[37] !== N || t[38] !== C || t[39] !== O
      ? ((P = (0, Z.jsxs)(`form`, {
          className: `flex items-center gap-2 border-t border-default p-2`,
          onSubmit: C,
          children: [O, A, N],
        })),
        (t[36] = A),
        (t[37] = N),
        (t[38] = C),
        (t[39] = O),
        (t[40] = P))
      : (P = t[40]),
    P
  );
}
var St,
  Ct,
  Z,
  wt = e(() => {
    ((St = U()), k(), (Ct = t(a(), 1)), L(), i(), ne(), we(), Me(), G(), (Z = V()));
  });
function Tt(
  e,
  {
    code: t,
    codeBlockIndex: n,
    conversationId: r,
    language: i,
    messageId: a,
    serverConversationId: o,
  },
) {
  let s = Dt.get(e);
  s ??
    ((s = Ge({
      delayMs: 2e3,
      persist: async (t) => {
        await e.get(ge).updateCodeBlock(t);
      },
    })),
    Dt.set(e, s));
  let c = String(n);
  s.schedule(r, a, c, {
    code_block: { content: t, index: c, language: i },
    conversation_id: o,
    index: c,
    message_id: a,
    updated_at: new Date().toISOString(),
  });
}
async function Et(e, t) {
  await Dt.get(e)?.flushConversation(t);
}
var Dt,
  Ot = e(() => {
    (G(), q(), (Dt = new WeakMap()));
  });
function kt({ spec: e, mode: t }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: white;
      }

      #vis {
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        box-sizing: border-box;
      }

      #vis > .vega-embed {
        max-width: 100%;
        max-height: 100%;
      }

      #vis svg,
      #vis canvas {
        max-width: 100%;
        max-height: 100%;
      }

      pre {
        margin: 0;
        padding: 16px;
        white-space: pre-wrap;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
      }
    </style>
    <script src="${At}"><\/script>
    <script src="${jt}"><\/script>
    <script src="${Mt}"><\/script>
  </head>
  <body>
    <div id="vis"></div>
    <script>
      (() => {
        const container = document.getElementById("vis");
        if (!container) return;

        const showError = (message) => {
          container.innerHTML = "<pre>" + message + "</pre>";
        };

        if (typeof window.vegaEmbed !== "function") {
          showError("Vega runtime failed to load.");
          return;
        }

        let spec;
        try {
          spec = JSON.parse(decodeURIComponent(${JSON.stringify(encodeURIComponent(e))}));
        } catch (error) {
          showError("Invalid Vega spec JSON.");
          console.error(error);
          return;
        }

        const mode = ${JSON.stringify(t)};
        const schemaByMode = {
          vega: "https://vega.github.io/schema/vega/v5.json",
          "vega-lite": "https://vega.github.io/schema/vega-lite/v5.json",
        };

        if (
          spec &&
          typeof spec === "object" &&
          !Object.prototype.hasOwnProperty.call(spec, "$schema")
        ) {
          spec.$schema = schemaByMode[mode];
        }

        window
          .vegaEmbed("#vis", spec, {
            mode,
            actions: false,
            renderer: "svg",
          })
          .catch((error) => {
            showError("Unable to render Vega chart.");
            console.error(error);
          });
      })();
    <\/script>
  </body>
</html>`;
}
var At,
  jt,
  Mt,
  Nt = e(() => {
    ((At = `https://cdn.jsdelivr.net/npm/vega@5/build/vega.min.js`),
      (jt = `https://cdn.jsdelivr.net/npm/vega-lite@5/build/vega-lite.min.js`),
      (Mt = `https://cdn.jsdelivr.net/npm/vega-embed@6/build/vega-embed.min.js`));
  });
function Pt(e, t) {
  let n = e?.trim().toLowerCase(),
    r = Rt.test(t);
  switch (n) {
    case `html`:
    case `xhtml`:
      return r ? `svg` : `html`;
    case `xml`:
      return r ? `svg` : null;
    case `svg`:
    case `mermaid`:
    case `recharts`:
    case `threejs`:
    case `vega`:
    case `vega-lite`:
      return n;
    case `vegalite`:
      return `vega-lite`;
    case `json`: {
      let e = zt.exec(t)?.[1];
      return e === `vega` || e === `vega-lite` ? e : null;
    }
    case `react`:
      return Lt.test(t) ? `react` : null;
    case `js`:
    case `jsx`:
    case `mjs`:
    case `cjs`:
    case `javascript`:
    case `ts`:
    case `tsx`:
    case `cts`:
    case `mts`:
    case `typescript`:
      return /(?:['"]react['"])/.test(t) && Lt.test(t) ? `react` : null;
    case void 0:
      return r ? `svg` : null;
    default:
      return null;
  }
}
function Ft(e, t) {
  if (e === `html`) return t;
  if (e === `vega` || e === `vega-lite`) return kt({ mode: e, spec: t });
  let n = JSON.stringify(t).replaceAll(`<`, `\\u003c`),
    r = e === `recharts` || /from\s+["']recharts["']/.test(t),
    i = e === `threejs` || /from\s+["']three["']/.test(t);
  return `<div id="chatgpt-code-block-preview"></div>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7/babel.min.js"><\/script>
<script type="module">
import React from "https://esm.sh/react@19";
import * as ReactDOM from "https://esm.sh/react-dom@19/client";
${r ? `import * as Recharts from "https://esm.sh/recharts@3?deps=react@19,react-dom@19";` : `const Recharts={};`}
${i ? `import * as THREE from "https://esm.sh/three@0.179";` : `const THREE={};`}
const source=${n};
const transformed=Babel.transform(source,{filename:"preview.tsx",presets:[["react",{runtime:"classic"}],["typescript",{isTSX:true,allExtensions:true}]],plugins:["transform-modules-commonjs"]}).code;
const module={exports:{}};
const require=(name)=>name==="react"?React:name==="react-dom"||name==="react-dom/client"?ReactDOM:name==="recharts"?Recharts:name==="three"?THREE:(()=>{throw new Error("Unsupported preview dependency: "+name)})();
new Function("React","ReactDOM","Recharts","THREE","module","exports","require",transformed)(React,ReactDOM,Recharts,THREE,module,module.exports,require);
const Component=module.exports.default;
if(typeof Component==="function")ReactDOM.createRoot(document.getElementById("chatgpt-code-block-preview")).render(React.createElement(Component));
<\/script>`;
}
function It(e) {
  return `<pre id="chatgpt-code-block-console"></pre>
<script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js"><\/script>
<script>
const output=document.getElementById("chatgpt-code-block-console");
Sk.configure({output:(text)=>{output.textContent+=text},read:(path)=>{if(!Sk.builtinFiles.files[path])throw new Error("File not found: "+path);return Sk.builtinFiles.files[path]}});
Sk.misceval.asyncToPromise(()=>Sk.importMainWithBody("<stdin>",false,${JSON.stringify(e).replaceAll(`<`, `\\u003c`)},true)).catch((error)=>{output.textContent+=error.toString()});
<\/script>`;
}
var Lt,
  Rt,
  zt,
  Bt = e(() => {
    (Nt(),
      (Lt = /\bexport\s+default\b/),
      (Rt = /^\uFEFF?\s*(?:<\?xml\b[\s\S]*?\?>\s*)?(?:<!doctype\s+svg\b[^>]*>\s*)?<svg\b/i),
      (zt =
        /["']\$schema["']\s*:\s*["']https:\/\/vega\.github\.io\/schema\/(vega-lite|vega)\/v\d+(?:\.\d+)?\.json["']/i));
  });
function Vt(e) {
  let t = (0, Ht.c)(29),
    {
      allowWideBlocks: n,
      code: r,
      codeBlockIndex: i,
      hostId: a,
      isCodeFenceOpen: o,
      onCopy: s,
      previewLanguage: c,
      threadId: l,
      title: u,
      turnId: d,
    } = e,
    f = ee(),
    p;
  if (c === `svg`) {
    let e;
    t[0] === f
      ? (e = t[1])
      : ((e = f.formatMessage({
          id: `chatgpt.codeBlocks.svg.ariaLabel`,
          defaultMessage: `Image generated by the assistant`,
          description: `Accessible description of an SVG image preview rendered from a ChatGPT code block`,
        })),
        (t[0] = f),
        (t[1] = e));
    let n;
    (t[2] !== r || t[3] !== e
      ? ((n = (0, Ut.jsx)(R, {
          alt: e,
          className: `block min-h-24 w-full object-contain`,
          svgString: r,
        })),
        (t[2] = r),
        (t[3] = e),
        (t[4] = n))
      : (n = t[4]),
      (p = n));
  } else if (c === `mermaid`) {
    let e;
    (t[5] !== n || t[6] !== r || t[7] !== o || t[8] !== s
      ? ((e = (0, Ut.jsx)(`div`, {
          className: `min-h-72 w-full`,
          children: (0, Ut.jsx)(W, { allowWideBlocks: n, code: r, isCodeFenceOpen: o, onCopy: s }),
        })),
        (t[5] = n),
        (t[6] = r),
        (t[7] = o),
        (t[8] = s),
        (t[9] = e))
      : (e = t[9]),
      (p = e));
  } else {
    let e = `code-block-${i}.html`,
      n;
    t[10] === e ? (n = t[11]) : ((n = { path: e }), (t[10] = e), (t[11] = n));
    let o;
    t[12] !== r || t[13] !== c
      ? ((o = Ft(c, r)), (t[12] = r), (t[13] = c), (t[14] = o))
      : (o = t[14]);
    let s;
    (t[15] !== a || t[16] !== n || t[17] !== o || t[18] !== l || t[19] !== u || t[20] !== d
      ? ((s = (0, Ut.jsx)(`div`, {
          className: `relative h-full w-full overflow-y-auto`,
          children: (0, Ut.jsx)(qe, {
            attributes: n,
            embeddedHtml: o,
            hostId: a,
            presentation: `code-preview`,
            threadId: l,
            title: u,
            turnId: d,
          }),
        })),
        (t[15] = a),
        (t[16] = n),
        (t[17] = o),
        (t[18] = l),
        (t[19] = u),
        (t[20] = d),
        (t[21] = s))
      : (s = t[21]),
      (p = s));
  }
  let m = (c === `svg` || c === `mermaid`) && `min-h-24`,
    h = c !== `svg` && c !== `mermaid` && `aspect-video`,
    g;
  t[22] !== m || t[23] !== h
    ? ((g = P(`group pointer-events-auto flex w-full overflow-hidden`, m, h)),
      (t[22] = m),
      (t[23] = h),
      (t[24] = g))
    : (g = t[24]);
  let _;
  return (
    t[25] !== p || t[26] !== c || t[27] !== g
      ? ((_ = (0, Ut.jsx)(`div`, { "data-code-block-preview-pane": c, className: g, children: p })),
        (t[25] = p),
        (t[26] = c),
        (t[27] = g),
        (t[28] = _))
      : (_ = t[28]),
    _
  );
}
var Ht,
  Ut,
  Wt = e(() => {
    ((Ht = U()), We(), L(), ye(), Je(), ie(), Bt(), (Ut = V()));
  });
function Gt(e) {
  let t = (0, Kt.c)(21),
    {
      codeBlockIndex: r,
      conversationId: i,
      language: a,
      messageId: o,
      serverConversationId: s,
    } = e,
    u = n(ue),
    d = ee(),
    [f, p] = (0, qt.useState)(!1),
    m;
  t[0] === d
    ? (m = t[1])
    : ((m = d.formatMessage({
        id: `chatgpt.codeBlocks.share.ariaLabel`,
        defaultMessage: `Share code block`,
        description: `Accessible label and tooltip for a button that creates and copies a shareable read-only link to one code block in a ChatGPT conversation`,
      })),
      (t[0] = d),
      (t[1] = m));
  let h = m,
    g;
  t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== o || t[6] !== u || t[7] !== s
    ? ((g = async () => {
        await Et(u, i);
        let e = await u.get(ge).createPost({
          attachments_to_create: [
            { code_index: r, conversation_id: s, kind: `code_block`, message_id: o },
          ],
        });
        (he(u, le, { conversationId: i, language: a, messageId: o, postId: e.post.id }),
          (await Ne(
            e.post.permalink ?? `https://chatgpt.com/s/${encodeURIComponent(e.post.id)}`,
          )) &&
            u.get(xe).success(
              (0, Jt.jsx)(c, {
                id: `chatgpt.codeBlocks.share.success`,
                defaultMessage: `Share link copied`,
                description: `Success toast displayed after copying a shareable code block link from a ChatGPT conversation`,
              }),
            ));
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = u),
      (t[7] = s),
      (t[8] = g))
    : (g = t[8]);
  let _ = g,
    v;
  t[9] !== _ || t[10] !== f || t[11] !== u
    ? ((v = () => {
        f ||
          (p(!0),
          _()
            .catch(() => {
              u.get(xe).danger(
                (0, Jt.jsx)(c, {
                  id: `chatgpt.codeBlocks.share.error`,
                  defaultMessage: `Failed to create share link`,
                  description: `Error toast displayed when a shareable code block link cannot be created or pending code changes cannot be saved`,
                }),
              );
            })
            .finally(() => p(!1)));
      }),
      (t[9] = _),
      (t[10] = f),
      (t[11] = u),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Jt.jsx)(ve, { "aria-hidden": !1, asset: l })), (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== f || t[15] !== h || t[16] !== v
    ? ((b = (0, Jt.jsx)(H, {
        "aria-label": h,
        color: `ghost`,
        disabled: f,
        loading: f,
        size: `icon`,
        onClick: v,
        children: y,
      })),
      (t[14] = f),
      (t[15] = h),
      (t[16] = v),
      (t[17] = b))
    : (b = t[17]);
  let x;
  return (
    t[18] !== h || t[19] !== b
      ? ((x = (0, Jt.jsx)(w, { tooltipContent: h, children: b })),
        (t[18] = h),
        (t[19] = b),
        (t[20] = x))
      : (x = t[20]),
    x
  );
}
var Kt,
  qt,
  Jt,
  Yt = e(() => {
    ((Kt = U()),
      Ve(),
      Ue(),
      k(),
      (qt = t(a(), 1)),
      L(),
      i(),
      _e(),
      we(),
      y(),
      M(),
      Me(),
      De(),
      G(),
      Ot(),
      (Jt = V()));
  });
function Xt(e) {
  let t = (0, Zt.c)(20),
    { onDownload: n, onOpenEditor: r, onViewCode: i } = e,
    a = ee(),
    o = (0, Qt.useRef)(null),
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a.formatMessage({
        id: `chatgpt.codeBlocks.mermaid.options.ariaLabel`,
        defaultMessage: `Diagram options`,
        description: `Accessible label and tooltip for the actions menu shown over an inline Mermaid diagram in a ChatGPT message`,
      })),
      (t[0] = a),
      (t[1] = s));
  let l = s,
    u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(O, {})), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === l
    ? (d = t[4])
    : ((d = (0, Q.jsx)(H, {
        ref: o,
        "aria-label": l,
        color: `outline`,
        size: `icon`,
        children: u,
      })),
      (t[3] = l),
      (t[4] = d));
  let f;
  t[5] !== l || t[6] !== d
    ? ((f = (0, Q.jsx)(w, { tooltipContent: l, children: d })), (t[5] = l), (t[6] = d), (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== r || t[9] !== i
    ? ((p =
        r == null
          ? (0, Q.jsx)(v.Item, {
              LeftIcon: F,
              onSelect: i,
              children: (0, Q.jsx)(c, {
                id: `chatgpt.codeBlocks.mermaid.viewCode`,
                defaultMessage: `View code`,
                description: `Menu action that shows the source code for an inline Mermaid diagram`,
              }),
            })
          : (0, Q.jsx)(v.Item, {
              LeftIcon: Se,
              onSelect: r,
              children: (0, Q.jsx)(c, {
                id: `chatgpt.codeBlocks.mermaid.openEditor`,
                defaultMessage: `Open editor`,
                description: `Menu action that opens an inline Mermaid diagram in the code editor`,
              }),
            })),
      (t[8] = r),
      (t[9] = i),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === n
    ? (m = t[12])
    : ((m = () => {
        o.current != null && n(o.current);
      }),
      (t[11] = n),
      (t[12] = m));
  let h;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(c, {
        id: `chatgpt.codeBlocks.mermaid.downloadPng`,
        defaultMessage: `Download PNG`,
        description: `Menu action that downloads a rendered Mermaid diagram as a PNG image`,
      })),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === m
    ? (g = t[15])
    : ((g = (0, Q.jsx)(v.Item, { LeftIcon: Le, onSelect: m, children: h })),
      (t[14] = m),
      (t[15] = g));
  let _;
  return (
    t[16] !== f || t[17] !== p || t[18] !== g
      ? ((_ = (0, Q.jsx)(`div`, {
          className: `absolute end-10 top-0 z-10 opacity-100 focus-within:opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/app-widget:opacity-100`,
          children: (0, Q.jsxs)(x, {
            align: `end`,
            contentWidth: `xs`,
            triggerButton: f,
            children: [p, g],
          }),
        })),
        (t[16] = f),
        (t[17] = p),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var Zt,
  Qt,
  Q,
  $t = e(() => {
    ((Zt = U()), (Qt = t(a(), 1)), L(), i(), ce(), z(), y(), Oe(), (Q = V()));
  }),
  en,
  tn,
  nn = e(() => {
    ((en = `_InlineCodePane_2skfg_2`), (tn = { InlineCodePane: en }));
  });
function rn(e) {
  let t = (0, cn.c)(7),
    n;
  t[0] === e ? (n = t[1]) : ((n = () => (0, $.jsx)(an, { ...e })), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] !== e.content || t[3] !== e.language || t[4] !== e.renderImmediately || t[5] !== n
      ? ((r = (0, $.jsx)(te, {
          content: e.content,
          language: e.language,
          renderImmediately: e.renderImmediately,
          renderVisible: n,
        })),
        (t[2] = e.content),
        (t[3] = e.language),
        (t[4] = e.renderImmediately),
        (t[5] = n),
        (t[6] = r))
      : (r = t[6]),
    r
  );
}
function an(e) {
  let t = (0, cn.c)(209),
    {
      allowWideBlocks: r,
      codeBlockIndex: i,
      codeBlockInfo: a,
      content: o,
      forceCodeBlockWordWrap: s,
      isCodeFenceOpen: l,
      language: u,
      stickyHeader: d,
      turnContext: m,
    } = e,
    g = n(ue),
    _ = ee(),
    v = D(N, m.conversationId),
    y = p(Ke),
    x = me(`3336871980`),
    C = Ie(`110872417`),
    T = Ie(`79119416`),
    E = m.codeBlocks?.[String(i)],
    O = E?.content ?? o,
    [k, M] = (0, ln.useState)(null),
    F = k?.source === O ? k.code : O,
    I;
  t[0] !== F || t[1] !== u || t[2] !== E?.render_mode
    ? ((I = E?.render_mode === `app_block` ? `html` : Pt(u, F)),
      (t[0] = F),
      (t[1] = u),
      (t[2] = E?.render_mode),
      (t[3] = I))
    : (I = t[3]);
  let L = I,
    te;
  t[4] !== a || t[5] !== E?.render_mode
    ? ((te = E?.render_mode === `app_block` || /\bpreview\b/.test(a ?? ``)),
      (t[4] = a),
      (t[5] = E?.render_mode),
      (t[6] = te))
    : (te = t[6]);
  let ne = te,
    re = L === `svg` || L === `mermaid`,
    R = L != null && (re || !m.shouldBlockExternalEgress),
    ie = u === `python` || u === `py`,
    z = !m.shouldBlockExternalEgress && v != null && m.messageId != null,
    oe =
      R &&
      !l &&
      (re ||
        L === `vega` ||
        L === `vega-lite` ||
        ne ||
        (x.get(`code_blocks_auto_preview`, !1) &&
          (L === `react` || (L === `html` && /<html(?:\s|>)/i.test(F))))),
    [ce, le] = (0, ln.useState)(null),
    B = ce ?? (oe ? `preview` : `code`),
    [de, fe] = (0, ln.useState)(!1),
    [pe, _e] = (0, ln.useState)(0),
    ye;
  t[7] !== _ || t[8] !== u
    ? ((ye = u == null ? void 0 : S(u, _)), (t[7] = _), (t[8] = u), (t[9] = ye))
    : (ye = t[9]);
  let V = ye,
    Se = u == null ? void 0 : (V?.value ?? `plaintext`),
    we = R || (l && (Se === `javascript` || Se === `typescript`)),
    U;
  t[10] !== _ || t[11] !== u || t[12] !== V?.label || t[13] !== E?.title
    ? ((U =
        E?.title ??
        (u === `html` ? u.toUpperCase() : V?.label) ??
        u ??
        _.formatMessage({
          id: `chatgpt.codeBlocks.language.fallback`,
          defaultMessage: `Code`,
          description: `Fallback header title for a ChatGPT code block when the fenced code does not specify a programming language`,
        })),
      (t[10] = _),
      (t[11] = u),
      (t[12] = V?.label),
      (t[13] = E?.title),
      (t[14] = U))
    : (U = t[14]);
  let Ee = U,
    De;
  t[15] !== R || t[16] !== ne || t[17] !== u || t[18] !== m.conversationId || t[19] !== m.messageId
    ? ((De = {
        clientPreviewable: R,
        conversationId: m.conversationId,
        language: u,
        messageId: m.messageId,
        modelPreviewable: ne,
      }),
      (t[15] = R),
      (t[16] = ne),
      (t[17] = u),
      (t[18] = m.conversationId),
      (t[19] = m.messageId),
      (t[20] = De))
    : (De = t[20]);
  let W = De;
  if (E?.render_mode === `app_block`) {
    if (E.content == null && l) {
      let e;
      return (
        t[21] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(be, { className: `icon-xs` })), (t[21] = e))
          : (e = t[21]),
        e
      );
    }
    if (m.shouldBlockExternalEgress) return null;
    let e = `code-block-${i}.html`,
      n;
    t[22] === e ? (n = t[23]) : ((n = { path: e }), (t[22] = e), (t[23] = n));
    let r = m.browserConversationId ?? m.conversationId,
      a;
    t[24] !== F ||
    t[25] !== Ee ||
    t[26] !== n ||
    t[27] !== r ||
    t[28] !== m.hostId ||
    t[29] !== m.turnId
      ? ((a = (0, $.jsx)(qe, {
          attributes: n,
          embeddedHtml: F,
          hostId: m.hostId,
          threadId: r,
          title: Ee,
          turnId: m.turnId,
        })),
        (t[24] = F),
        (t[25] = Ee),
        (t[26] = n),
        (t[27] = r),
        (t[28] = m.hostId),
        (t[29] = m.turnId),
        (t[30] = a))
      : (a = t[30]);
    let o;
    t[31] !== z || t[32] !== C || t[33] !== i || t[34] !== k || t[35] !== v || t[36] !== m.messageId
      ? ((o =
          C && z && m.messageId != null
            ? (0, $.jsx)(_t, {
                codeBlockIndex: i,
                codeBlockType: `app_block`,
                language: `html`,
                messageId: m.messageId,
                serverConversationId: v,
                userEditedCodeBlock: k != null,
              })
            : null),
        (t[31] = z),
        (t[32] = C),
        (t[33] = i),
        (t[34] = k),
        (t[35] = v),
        (t[36] = m.messageId),
        (t[37] = o))
      : (o = t[37]);
    let s;
    return (
      t[38] !== o || t[39] !== a
        ? ((s = (0, $.jsxs)($.Fragment, { children: [a, o] })),
          (t[38] = o),
          (t[39] = a),
          (t[40] = s))
        : (s = t[40]),
      s
    );
  }
  let G;
  t[41] !== z ||
  t[42] !== i ||
  t[43] !== u ||
  t[44] !== O ||
  t[45] !== g ||
  t[46] !== v ||
  t[47] !== m.conversationId ||
  t[48] !== m.messageId
    ? ((G = (e) => {
        !z ||
          m.messageId == null ||
          (M({ code: e, source: O }),
          Te({
            scope: g,
            codeBlockIndex: i,
            content: e,
            conversationId: m.conversationId,
            language: u,
            messageId: m.messageId,
          }) &&
            Tt(g, {
              code: e,
              codeBlockIndex: i,
              conversationId: m.conversationId,
              language: u,
              messageId: m.messageId,
              serverConversationId: v,
            }));
      }),
      (t[41] = z),
      (t[42] = i),
      (t[43] = u),
      (t[44] = O),
      (t[45] = g),
      (t[46] = v),
      (t[47] = m.conversationId),
      (t[48] = m.messageId),
      (t[49] = G))
    : (G = t[49]);
  let Oe = G,
    ke;
  t[50] !== z || t[51] !== F || t[52] !== g || t[53] !== v || t[54] !== m.messageId
    ? ((ke = () => {
        (g.get(Ae).logEventWithStatsig?.(`Content Exported`, {
          contentType: `code`,
          length: F.length,
          location: `code-block`,
          source: `mouse`,
          type: `copy`,
        }),
          !(!z || m.messageId == null) &&
            g
              .get(ge)
              .submitImplicitMessageFeedback({
                conversation_id: v,
                feedback: { feedback_type: `copy`, selected_text_length: F.length },
                location: `code-block`,
                message_id: m.messageId,
                source: `mouse`,
              })
              .catch(sn));
      }),
      (t[50] = z),
      (t[51] = F),
      (t[52] = g),
      (t[53] = v),
      (t[54] = m.messageId),
      (t[55] = ke))
    : (ke = t[55]);
  let je = ke,
    Me;
  t[56] === _
    ? (Me = t[57])
    : ((Me = _.formatMessage({
        id: `chatgpt.codeBlocks.edit.ariaLabel`,
        defaultMessage: `Edit code`,
        description: `Accessible label and tooltip for a button that opens the inline code editor for a ChatGPT code block`,
      })),
      (t[56] = _),
      (t[57] = Me));
  let Ne = Me,
    Fe;
  t[58] === _
    ? (Fe = t[59])
    : ((Fe = _.formatMessage({
        id: `chatgpt.codeBlocks.preview.ariaLabel`,
        defaultMessage: `Preview`,
        description: `Accessible label and tooltip for a button that switches a ChatGPT code block from source code to its interactive preview`,
      })),
      (t[58] = _),
      (t[59] = Fe));
  let Le = Fe,
    Be;
  t[60] === _
    ? (Be = t[61])
    : ((Be = _.formatMessage({
        id: `chatgpt.codeBlocks.showCode.ariaLabel`,
        defaultMessage: `Code`,
        description: `Accessible label and tooltip for a button that switches an interactive ChatGPT code block from preview back to its source code`,
      })),
      (t[60] = _),
      (t[61] = Be));
  let Ve = Be,
    He;
  t[62] === _
    ? (He = t[63])
    : ((He = _.formatMessage({
        id: `chatgpt.codeBlocks.run.ariaLabel`,
        defaultMessage: `Run code`,
        description: `Accessible label and tooltip for a button that executes a Python code block in an isolated sandbox and displays its output`,
      })),
      (t[62] = _),
      (t[63] = He));
  let Ue = He,
    We;
  t[64] === _
    ? (We = t[65])
    : ((We = _.formatMessage({
        id: `chatgpt.codeBlocks.stop.ariaLabel`,
        defaultMessage: `Stop running code`,
        description: `Accessible label and tooltip for a button that stops isolated Python code-block execution and closes its console`,
      })),
      (t[64] = _),
      (t[65] = We));
  let Ge = We,
    K;
  if (B === `edit`) {
    let e;
    t[66] !== g || t[67] !== m.conversationId
      ? ((e = () => {
          Et(g, m.conversationId).catch(on);
        }),
        (t[66] = g),
        (t[67] = m.conversationId),
        (t[68] = e))
      : (e = t[68]);
    let n;
    t[69] !== F || t[70] !== e || t[71] !== Oe
      ? ((n = (0, $.jsx)(dt, { code: F, onBlur: e, onChange: Oe })),
        (t[69] = F),
        (t[70] = e),
        (t[71] = Oe),
        (t[72] = n))
      : (n = t[72]);
    let r;
    t[73] !== F || t[74] !== de || t[75] !== u || t[76] !== v || t[77] !== Oe
      ? ((r =
          de && v != null
            ? (0, $.jsx)(xt, {
                code: F,
                language: u,
                serverConversationId: v,
                onApply: Oe,
                onClose: () => fe(!1),
              })
            : null),
        (t[73] = F),
        (t[74] = de),
        (t[75] = u),
        (t[76] = v),
        (t[77] = Oe),
        (t[78] = r))
      : (r = t[78]);
    let i;
    (t[79] !== n || t[80] !== r
      ? ((i = (0, $.jsxs)($.Fragment, { children: [n, r] })), (t[79] = n), (t[80] = r), (t[81] = i))
      : (i = t[81]),
      (K = i));
  } else if (B === `execution` && !m.shouldBlockExternalEgress) {
    let e = `python-${pe}`,
      n = `code-block-${i}.html`,
      r;
    t[82] === n ? (r = t[83]) : ((r = { path: n }), (t[82] = n), (t[83] = r));
    let a;
    t[84] === F ? (a = t[85]) : ((a = It(F)), (t[84] = F), (t[85] = a));
    let o = m.browserConversationId ?? m.conversationId,
      s;
    (t[86] !== Ue ||
    t[87] !== e ||
    t[88] !== r ||
    t[89] !== a ||
    t[90] !== o ||
    t[91] !== m.hostId ||
    t[92] !== m.turnId
      ? ((s = (0, $.jsx)(
          qe,
          {
            attributes: r,
            embeddedHtml: a,
            hostId: m.hostId,
            threadId: o,
            title: Ue,
            turnId: m.turnId,
          },
          e,
        )),
        (t[86] = Ue),
        (t[87] = e),
        (t[88] = r),
        (t[89] = a),
        (t[90] = o),
        (t[91] = m.hostId),
        (t[92] = m.turnId),
        (t[93] = s))
      : (s = t[93]),
      (K = s));
  } else if (B === `preview` && R && L != null) {
    let e = m.browserConversationId ?? m.conversationId,
      n = E?.title ?? Le,
      a;
    (t[94] !== r ||
    t[95] !== F ||
    t[96] !== i ||
    t[97] !== je ||
    t[98] !== l ||
    t[99] !== L ||
    t[100] !== e ||
    t[101] !== n ||
    t[102] !== m.hostId ||
    t[103] !== m.turnId
      ? ((a = (0, $.jsx)(Vt, {
          allowWideBlocks: r,
          code: F,
          codeBlockIndex: i,
          hostId: m.hostId,
          isCodeFenceOpen: l,
          onCopy: je,
          previewLanguage: L,
          threadId: e,
          title: n,
          turnId: m.turnId,
        })),
        (t[94] = r),
        (t[95] = F),
        (t[96] = i),
        (t[97] = je),
        (t[98] = l),
        (t[99] = L),
        (t[100] = e),
        (t[101] = n),
        (t[102] = m.hostId),
        (t[103] = m.turnId),
        (t[104] = a))
      : (a = t[104]),
      (K = a));
  }
  let q = z && !m.isStreaming,
    Je;
  t[105] !== W || t[106] !== g || t[107] !== B
    ? ((Je = () => {
        (he(g, b, W), le(B === `edit` ? `code` : `edit`), fe(!1));
      }),
      (t[105] = W),
      (t[106] = g),
      (t[107] = B),
      (t[108] = Je))
    : (Je = t[108]);
  let Ye = Je,
    Xe;
  t[109] !== F || t[110] !== _ || t[111] !== u || t[112] !== g
    ? ((Xe = (e, t) => {
        ht({ button: e, code: F, language: u, previewLanguage: t }).catch(() => {
          g.get(xe).danger(
            _.formatMessage({
              id: `chatgpt.codeBlocks.download.error`,
              defaultMessage: `Couldn’t download preview`,
              description: `Error toast shown when exporting an interactive ChatGPT code-block preview or Mermaid diagram fails`,
            }),
          );
        });
      }),
      (t[109] = F),
      (t[110] = _),
      (t[111] = u),
      (t[112] = g),
      (t[113] = Xe))
    : (Xe = t[113]);
  let Ze = Xe;
  if (T && L === `mermaid` && B === `preview`) {
    let e;
    t[114] === Ze ? (e = t[115]) : ((e = (e) => Ze(e, `mermaid`)), (t[114] = Ze), (t[115] = e));
    let n = q ? Ye : void 0,
      r;
    t[116] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => le(`code`)), (t[116] = r))
      : (r = t[116]);
    let i;
    t[117] !== e || t[118] !== n
      ? ((i = (0, $.jsx)(Xt, { onDownload: e, onOpenEditor: n, onViewCode: r })),
        (t[117] = e),
        (t[118] = n),
        (t[119] = i))
      : (i = t[119]);
    let a;
    return (
      t[120] !== K || t[121] !== i
        ? ((a = (0, $.jsxs)(`div`, {
            className: `group/app-widget relative`,
            "data-chatgpt-mermaid-preview": ``,
            children: [i, K],
          })),
          (t[120] = K),
          (t[121] = i),
          (t[122] = a))
        : (a = t[122]),
      a
    );
  }
  let J;
  t[123] === l
    ? (J = t[124])
    : ((J = l ? (0, $.jsx)(be, { className: `icon-xs` }) : null), (t[123] = l), (t[124] = J));
  let Qe;
  t[125] !== W ||
  t[126] !== R ||
  t[127] !== Ve ||
  t[128] !== _ ||
  t[129] !== l ||
  t[130] !== Le ||
  t[131] !== g ||
  t[132] !== B
    ? ((Qe =
        R && !l
          ? (0, $.jsxs)(`div`, {
              role: `group`,
              "aria-label": _.formatMessage({
                id: `chatgpt.codeBlocks.view.ariaLabel`,
                defaultMessage: `Code block view`,
                description: `Accessible group label for the compact Code and Preview controls in an interactive ChatGPT code block header`,
              }),
              className: `flex items-center gap-px`,
              children: [
                (0, $.jsx)(w, {
                  tooltipContent: Ve,
                  children: (0, $.jsx)(H, {
                    "aria-label": Ve,
                    "aria-pressed": B !== `preview`,
                    color: `ghost`,
                    size: `icon`,
                    onClick: () => {
                      B === `preview` && le(`code`);
                    },
                    children: (0, $.jsx)(ve, { "aria-hidden": !1, asset: ze }),
                  }),
                }),
                (0, $.jsx)(w, {
                  tooltipContent: Le,
                  children: (0, $.jsx)(H, {
                    "aria-label": Le,
                    "aria-pressed": B === `preview`,
                    color: `ghost`,
                    size: `icon`,
                    onClick: () => {
                      B !== `preview` && (he(g, se, W), fe(!1), le(`preview`));
                    },
                    children: (0, $.jsx)(ve, { "aria-hidden": !1, asset: h }),
                  }),
                }),
              ],
            })
          : null),
      (t[125] = W),
      (t[126] = R),
      (t[127] = Ve),
      (t[128] = _),
      (t[129] = l),
      (t[130] = Le),
      (t[131] = g),
      (t[132] = B),
      (t[133] = Qe))
    : (Qe = t[133]);
  let $e;
  t[134] !== Ne || t[135] !== Ye || t[136] !== L || t[137] !== q || t[138] !== B
    ? (($e =
        q && L === `mermaid`
          ? (0, $.jsx)(w, {
              tooltipContent: Ne,
              children: (0, $.jsx)(H, {
                "aria-label": Ne,
                "aria-pressed": B === `edit`,
                color: `ghost`,
                size: `icon`,
                onClick: Ye,
                children: (0, $.jsx)(ve, { "aria-hidden": !1, asset: f }),
              }),
            })
          : null),
      (t[134] = Ne),
      (t[135] = Ye),
      (t[136] = L),
      (t[137] = q),
      (t[138] = B),
      (t[139] = $e))
    : ($e = t[139]);
  let et;
  t[140] !== x || t[141] !== _ || t[142] !== de || t[143] !== q || t[144] !== B
    ? ((et =
        q && B === `edit` && x.get(`magic_edit_enabled`, !1)
          ? (0, $.jsx)(w, {
              tooltipContent: _.formatMessage({
                id: `chatgpt.codeBlocks.magicEdit.ariaLabel`,
                defaultMessage: `Edit with AI`,
                description: `Accessible label and tooltip for a button that opens model-assisted editing of a ChatGPT code block`,
              }),
              children: (0, $.jsx)(H, {
                "aria-label": _.formatMessage({
                  id: `chatgpt.codeBlocks.magicEdit.button.ariaLabel`,
                  defaultMessage: `Edit with AI`,
                  description: `Accessible label for a button that opens model-assisted editing of a ChatGPT code block`,
                }),
                "aria-pressed": de,
                color: `ghost`,
                size: `icon`,
                onClick: () => fe(!de),
                children: (0, $.jsx)(lt, { className: `icon-xs` }),
              }),
            })
          : null),
      (t[140] = x),
      (t[141] = _),
      (t[142] = de),
      (t[143] = q),
      (t[144] = B),
      (t[145] = et))
    : (et = t[145]);
  let tt;
  t[146] !== W ||
  t[147] !== pe ||
  t[148] !== ie ||
  t[149] !== Ue ||
  t[150] !== g ||
  t[151] !== q ||
  t[152] !== Ge ||
  t[153] !== B
    ? ((tt =
        q && ie
          ? (0, $.jsx)(w, {
              tooltipContent: B === `execution` ? Ge : Ue,
              children: (0, $.jsx)(H, {
                className: `ms-2`,
                "aria-label": B === `execution` ? Ge : Ue,
                color: `outlineGhost`,
                size: `dialog`,
                onClick: () => {
                  if (B === `execution`) {
                    le(`code`);
                    return;
                  }
                  (he(g, ae, W), _e(pe + 1), le(`execution`));
                },
                children:
                  B === `execution`
                    ? (0, $.jsxs)($.Fragment, {
                        children: [
                          (0, $.jsx)(j, {}),
                          (0, $.jsx)(c, {
                            id: `chatgpt.codeBlocks.stop.button`,
                            defaultMessage: `Stop`,
                            description: `Short button label in a Python code block header that stops code execution and closes its console`,
                          }),
                        ],
                      })
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          (0, $.jsx)(Pe, {}),
                          (0, $.jsx)(c, {
                            id: `chatgpt.codeBlocks.run.button`,
                            defaultMessage: `Run`,
                            description: `Short button label in a Python code block header that runs the code in an isolated sandbox and displays its output`,
                          }),
                        ],
                      }),
              }),
            })
          : null),
      (t[146] = W),
      (t[147] = pe),
      (t[148] = ie),
      (t[149] = Ue),
      (t[150] = g),
      (t[151] = q),
      (t[152] = Ge),
      (t[153] = B),
      (t[154] = tt))
    : (tt = t[154]);
  let nt;
  t[155] !== R ||
  t[156] !== i ||
  t[157] !== x ||
  t[158] !== u ||
  t[159] !== v ||
  t[160] !== q ||
  t[161] !== m.conversationId ||
  t[162] !== m.messageId
    ? ((nt =
        q && R && x.get(`code_blocks_sharing_enabled`, !1) && v != null && m.messageId != null
          ? (0, $.jsx)(Gt, {
              codeBlockIndex: i,
              conversationId: m.conversationId,
              language: u,
              messageId: m.messageId,
              serverConversationId: v,
            })
          : null),
      (t[155] = R),
      (t[156] = i),
      (t[157] = x),
      (t[158] = u),
      (t[159] = v),
      (t[160] = q),
      (t[161] = m.conversationId),
      (t[162] = m.messageId),
      (t[163] = nt))
    : (nt = t[163]);
  let rt;
  t[164] !== R || t[165] !== Ze || t[166] !== _ || t[167] !== l || t[168] !== L || t[169] !== B
    ? ((rt =
        R && !l && B === `preview` && (L === `html` || L === `react` || L === `mermaid`)
          ? (0, $.jsx)(w, {
              tooltipContent: _.formatMessage({
                id: `chatgpt.codeBlocks.download.ariaLabel`,
                defaultMessage: `Download code`,
                description: `Accessible label and tooltip for a button that downloads the source of an interactive ChatGPT code block`,
              }),
              children: (0, $.jsx)(H, {
                "aria-label": _.formatMessage({
                  id: `chatgpt.codeBlocks.download.button.ariaLabel`,
                  defaultMessage: `Download code`,
                  description: `Accessible label for a button that downloads the source of an interactive ChatGPT code block`,
                }),
                color: `ghost`,
                size: `icon`,
                onClick: (e) => Ze(e.currentTarget, L),
                children: (0, $.jsx)(ve, { "aria-hidden": !1, asset: Re }),
              }),
            })
          : null),
      (t[164] = R),
      (t[165] = Ze),
      (t[166] = _),
      (t[167] = l),
      (t[168] = L),
      (t[169] = B),
      (t[170] = rt))
    : (rt = t[170]);
  let it;
  t[171] !== z ||
  t[172] !== C ||
  t[173] !== i ||
  t[174] !== u ||
  t[175] !== k ||
  t[176] !== L ||
  t[177] !== v ||
  t[178] !== m.messageId
    ? ((it =
        C && L === `recharts` && z && m.messageId != null
          ? (0, $.jsx)(_t, {
              codeBlockIndex: i,
              codeBlockType: `chart_widget`,
              language: u,
              messageId: m.messageId,
              serverConversationId: v,
              userEditedCodeBlock: k != null,
            })
          : null),
      (t[171] = z),
      (t[172] = C),
      (t[173] = i),
      (t[174] = u),
      (t[175] = k),
      (t[176] = L),
      (t[177] = v),
      (t[178] = m.messageId),
      (t[179] = it))
    : (it = t[179]);
  let at;
  t[180] !== J ||
  t[181] !== Qe ||
  t[182] !== $e ||
  t[183] !== et ||
  t[184] !== tt ||
  t[185] !== nt ||
  t[186] !== rt ||
  t[187] !== it
    ? ((at = (0, $.jsxs)($.Fragment, { children: [J, Qe, $e, et, tt, nt, rt, it] })),
      (t[180] = J),
      (t[181] = Qe),
      (t[182] = $e),
      (t[183] = et),
      (t[184] = tt),
      (t[185] = nt),
      (t[186] = rt),
      (t[187] = it),
      (t[188] = at))
    : (at = t[188]);
  let ot = K,
    st = we ? tn.InlineCodePane : void 0,
    ct = B === `code` && L === `svg` ? `plaintext` : Se,
    ut;
  t[189] !== s || t[190] !== g || t[191] !== y || t[192] !== B
    ? ((ut = s || B !== `code` ? void 0 : () => g.set(Ke, !y)),
      (t[189] = s),
      (t[190] = g),
      (t[191] = y),
      (t[192] = B),
      (t[193] = ut))
    : (ut = t[193]);
  let ft = s || y,
    Y = !l && B !== `preview`,
    pt = we && `@container`,
    mt;
  t[194] === pt ? (mt = t[195]) : ((mt = P(A.CodeBlock, pt)), (t[194] = pt), (t[195] = mt));
  let gt;
  return (
    t[196] !== K ||
    t[197] !== F ||
    t[198] !== je ||
    t[199] !== Ee ||
    t[200] !== d ||
    t[201] !== at ||
    t[202] !== st ||
    t[203] !== ct ||
    t[204] !== ut ||
    t[205] !== ft ||
    t[206] !== Y ||
    t[207] !== mt
      ? ((gt = (0, $.jsx)(Ce, {
          actionButtons: at,
          alternateContent: ot,
          codeContainerClassName: st,
          content: F,
          language: ct,
          onCopyCode: je,
          onToggleWrapCode: ut,
          shouldWrapCode: ft,
          showCopyButton: Y,
          stickyHeader: d,
          title: Ee,
          wrapperClassName: mt,
        })),
        (t[196] = K),
        (t[197] = F),
        (t[198] = je),
        (t[199] = Ee),
        (t[200] = d),
        (t[201] = at),
        (t[202] = st),
        (t[203] = ct),
        (t[204] = ut),
        (t[205] = ft),
        (t[206] = Y),
        (t[207] = mt),
        (t[208] = gt))
      : (gt = t[208]),
    gt
  );
}
function on() {}
function sn() {}
var cn, ln, $;
e(() => {
  ((cn = U()),
    Ve(),
    ke(),
    je(),
    C(),
    re(),
    We(),
    k(),
    (ln = t(a(), 1)),
    L(),
    oe(),
    i(),
    r(),
    _e(),
    z(),
    E(),
    we(),
    y(),
    ut(),
    K(),
    d(),
    M(),
    Me(),
    fe(),
    Je(),
    G(),
    B(),
    mt(),
    gt(),
    bt(),
    wt(),
    Ot(),
    Bt(),
    Wt(),
    Yt(),
    $t(),
    nn(),
    u(),
    ($ = V()));
})();
export { rn as ChatGptCodeBlock };
//# sourceMappingURL=chatgpt-code-block-a3d300f795d8.js.map
