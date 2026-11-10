import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Cxt as r,
  GV as i,
  IDt as a,
  Ixt as o,
  JV as s,
  NH as c,
  Oq as l,
  Pxt as u,
  QL as d,
  SV as f,
  TJ as p,
  VDt as m,
  Vxt as h,
  ZL as g,
  _Mt as _,
  _O as v,
  _xt as y,
  bH as b,
  cO as x,
  eot as S,
  fO as C,
  gMt as w,
  hot as T,
  jDt as E,
  jK as D,
  lot as O,
  mO as k,
  oO as A,
  oxt as j,
  qG as M,
  qL as N,
  t3 as P,
  uSt as F,
  vO as I,
  vzt as L,
  wot as R,
  wxt as z,
  xMt as B,
  yzt as V,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as H,
  EPn as ee,
  J4t as te,
  MRt as U,
  NRt as W,
  QDr as ne,
  TPn as G,
  XDr as re,
  fur as ie,
  nVn as ae,
  pur as oe,
  rVn as K,
  tVn as se,
  yVn as ce,
} from "./app-initial-5851df3f6cb1.js";
import { r as le, t as ue } from "./document-title-1619f32b59ec.js";
function de(e, { action: t, step: n }) {
  ne(e, ae, { action: fe[t], step: pe[n] });
}
var fe, pe;
function me() {
  return (me = e(() => {
    (ce(),
      re(),
      (fe = {
        step_viewed: se.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_STEP_VIEWED,
        sidebar_clicked: se.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SIDEBAR_CLICKED,
        checklist_step_selected: se.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_CHECKLIST_STEP_SELECTED,
        sample_selected: se.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SAMPLE_SELECTED,
      }),
      (pe = {
        page: K.CHATGPT_WORK_CHROME_ONBOARDING_STEP_PAGE,
        open_sidebar: K.CHATGPT_WORK_CHROME_ONBOARDING_STEP_OPEN_SIDEBAR,
        pin_extension: K.CHATGPT_WORK_CHROME_ONBOARDING_STEP_PIN_EXTENSION,
        sample_gallery: K.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_GALLERY,
        sample_email: K.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_EMAIL,
        sample_report: K.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_REPORT,
        sample_inventory: K.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_INVENTORY,
      }));
  }))();
}
var he, ge;
function _e() {
  return (_e = e(() => {
    (u(),
      te(),
      R(),
      (he = { isSidePanelOpen: !1, isExtensionPinned: !1 }),
      (ge = F(n, he, ({ scope: e, set: t }) => {}, {
        isEqual: (e, t) =>
          e.isSidePanelOpen === t.isSidePanelOpen && e.isExtensionPinned === t.isExtensionPinned,
      })));
  }))();
}
var ve;
function ye() {
  return (ye = e(() => {
    ve = `` + new URL(`onboarding-sample-email-dark-486f74c5ba01.png`, import.meta.url).href;
  }))();
}
var be;
function xe() {
  return (xe = e(() => {
    be = `` + new URL(`onboarding-sample-email-light-ef8fa4137835.png`, import.meta.url).href;
  }))();
}
var Se;
function Ce() {
  return (Ce = e(() => {
    Se = `` + new URL(`onboarding-sample-inventory-dark-19e13dd6e064.png`, import.meta.url).href;
  }))();
}
var we;
function Te() {
  return (Te = e(() => {
    we = `` + new URL(`onboarding-sample-inventory-light-d4a75b0866ec.png`, import.meta.url).href;
  }))();
}
var Ee;
function De() {
  return (De = e(() => {
    Ee = `` + new URL(`onboarding-sample-report-dark-499156fcc01c.png`, import.meta.url).href;
  }))();
}
var Oe;
function ke() {
  return (ke = e(() => {
    Oe = `` + new URL(`onboarding-sample-report-light-39ead8ddf336.png`, import.meta.url).href;
  }))();
}
function Ae(e) {
  let t = (0, Me.c)(25),
    { onTry: n } = e,
    r = m(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, q.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.email.description`,
        defaultMessage: `Write a reply, follow-up, or new message in the tone you choose`,
        description: `Description of the fictional email task on the ChatGPT browser extension setup page. Explains what the user can try with the sample message.`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let o;
  t[1] === r
    ? (o = t[2])
    : ((o = r.formatMessage(
        {
          id: `chatgpt.work.chrome.installed.sample_work.email.prompt.sender_name`,
          defaultMessage: `Reply to {senderName}'s message on this page`,
          description: `Prompt prefilled in Side Chat after selecting the email sample in browser extension setup. The senderName placeholder is the sample sender's display name, Samuel, and must not be translated. This page means the sample email shown in the current tab. The user must send the prompt to start the demo.`,
        },
        { senderName: `Samuel` },
      )),
      (t[1] = r),
      (t[2] = o));
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, q.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.email.title`,
        defaultMessage: `Draft an email`,
        description: `Short heading of the fictional email task on the ChatGPT browser extension setup page.`,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== n || t[5] !== o
    ? ((c = (0, q.jsx)(je, { description: i, kind: `email`, onTry: n, prompt: o, title: s })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, q.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.report.description`,
        defaultMessage: `Pull out the key findings, supporting evidence, and recommendations`,
        description: `Description of the fictional report-summary task on the ChatGPT browser extension setup page.`,
      })),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === r
    ? (u = t[9])
    : ((u = r.formatMessage({
        id: `chatgpt.work.extension.installed.sample_work.report.prompt`,
        defaultMessage: `Summarize this report`,
        description: `Prompt prefilled in Side Chat after choosing the report sample on the ChatGPT browser extension setup page. This report refers to the fictional customer research report displayed in the current browser tab. The user must send the prompt to start the demo.`,
      })),
      (t[8] = r),
      (t[9] = u));
  let d;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, q.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.report.title`,
        defaultMessage: `Summarize a report`,
        description: `Short heading of the fictional report-summary task on the ChatGPT browser extension setup page.`,
      })),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== n || t[12] !== u
    ? ((f = (0, q.jsx)(je, { description: l, kind: `report`, onTry: n, prompt: u, title: d })),
      (t[11] = n),
      (t[12] = u),
      (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, q.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.inventory.description`,
        defaultMessage: `Mark sold-out products and add a new item to the inventory`,
        description: `Description of the fictional inventory-editing task on the ChatGPT browser extension setup page.`,
      })),
      (t[14] = p))
    : (p = t[14]);
  let h;
  t[15] === r
    ? (h = t[16])
    : ((h = r.formatMessage({
        id: `chatgpt.work.extension.installed.sample_work.inventory.prompt`,
        defaultMessage: `I sold out of these 3 products today but ordered 5 new desk mousepads. Update the stock and save the inventory.`,
        description: `Prompt prefilled in Side Chat after choosing the inventory sample on the ChatGPT browser extension setup page. Asks ChatGPT to mark the three existing fictional products as sold out, add five desk mousepads, and save the sample inventory. Preserve the quantities. The user must send the prompt to start the demo.`,
      })),
      (t[15] = r),
      (t[16] = h));
  let g;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, q.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.inventory.title`,
        defaultMessage: `Update an inventory system`,
        description: `Short heading of the fictional inventory-editing task on the ChatGPT browser extension setup page.`,
      })),
      (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] !== n || t[19] !== h
    ? ((_ = (0, q.jsx)(je, { description: p, kind: `inventory`, onTry: n, prompt: h, title: g })),
      (t[18] = n),
      (t[19] = h),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  return (
    t[21] !== _ || t[22] !== c || t[23] !== f
      ? ((v = (0, q.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col gap-3 overflow-y-auto select-none`,
          children: [c, f, _],
        })),
        (t[21] = _),
        (t[22] = c),
        (t[23] = f),
        (t[24] = v))
      : (v = t[24]),
    v
  );
}
function je(e) {
  let n = (0, Me.c)(52),
    { description: r, kind: i, onTry: o, prompt: s, title: u } = e,
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { email: c, report: b, inventory: l }), (n[0] = d))
    : (d = n[0]);
  let f = d,
    p,
    m,
    h,
    _,
    v,
    y,
    x,
    S;
  if (n[1] !== i) {
    let e = {
        email: `bg-yellow/10 text-yellow`,
        report: `bg-blue/10 text-blue`,
        inventory: `bg-green/10 text-green`,
      },
      t;
    n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          email: { light: be, dark: ve },
          report: { light: Oe, dark: Ee },
          inventory: { light: we, dark: Se },
        }),
        (n[10] = t))
      : (t = n[10]);
    let r = t;
    ((p = f[i]),
      (y = `flex flex-1 flex-col gap-3 rounded-2xl border border-default bg-gray-50 p-3 sm:flex-row sm:items-center lg:gap-6 dark:bg-gray-100`),
      (x = `extension-onboarding-sample-${i}`));
    let a = r[i],
      o;
    n[11] === a.light
      ? (o = n[12])
      : ((o = (0, q.jsx)(`img`, {
          className: `absolute inset-0 h-full w-full object-contain dark:hidden`,
          alt: ``,
          src: a.light,
        })),
        (n[11] = a.light),
        (n[12] = o));
    let s = r[i],
      c;
    (n[13] === s.dark
      ? (c = n[14])
      : ((c = (0, q.jsx)(`img`, {
          className: `absolute inset-0 hidden h-full w-full object-contain dark:block`,
          alt: ``,
          src: s.dark,
        })),
        (n[13] = s.dark),
        (n[14] = c)),
      n[15] !== o || n[16] !== c
        ? ((S = (0, q.jsxs)(`div`, {
            className: `relative h-52 min-h-0 w-full shrink-0 sm:h-full sm:max-h-52 sm:w-1/4 xl:w-72`,
            "aria-hidden": `true`,
            children: [o, c],
          })),
          (n[15] = o),
          (n[16] = c),
          (n[17] = S))
        : (S = n[17]),
      (v = `flex min-w-0 flex-1 flex-col gap-3`),
      (_ = `flex flex-col gap-2`),
      (h = `flex items-center gap-3`),
      (m = w(`flex size-7 shrink-0 items-center justify-center rounded-md`, e[i])),
      (n[1] = i),
      (n[2] = p),
      (n[3] = m),
      (n[4] = h),
      (n[5] = _),
      (n[6] = v),
      (n[7] = y),
      (n[8] = x),
      (n[9] = S));
  } else ((p = n[2]), (m = n[3]), (h = n[4]), (_ = n[5]), (v = n[6]), (y = n[7]), (x = n[8]), (S = n[9]));
  let C;
  n[18] === p ? (C = n[19]) : ((C = (0, q.jsx)(p, {})), (n[18] = p), (n[19] = C));
  let T;
  n[20] !== m || n[21] !== C
    ? ((T = (0, q.jsx)(`span`, { className: m, children: C })), (n[20] = m), (n[21] = C), (n[22] = T))
    : (T = n[22]);
  let E = `extension-onboarding-sample-${i}`,
    D;
  n[23] !== E || n[24] !== u
    ? ((D = (0, q.jsx)(`h3`, { id: E, className: `text-heading-lg leading-7 font-medium`, children: u })),
      (n[23] = E),
      (n[24] = u),
      (n[25] = D))
    : (D = n[25]);
  let O;
  n[26] !== T || n[27] !== D || n[28] !== h
    ? ((O = (0, q.jsxs)(`div`, { className: h, children: [T, D] })),
      (n[26] = T),
      (n[27] = D),
      (n[28] = h),
      (n[29] = O))
    : (O = n[29]);
  let k;
  n[30] === r
    ? (k = n[31])
    : ((k = (0, q.jsx)(`p`, {
        className: `body-md leading-6 text-secondary sm:ps-10 dark:text-default`,
        children: r,
      })),
      (n[30] = r),
      (n[31] = k));
  let A;
  n[32] !== O || n[33] !== k || n[34] !== _
    ? ((A = (0, q.jsxs)(`div`, { className: _, children: [O, k] })),
      (n[32] = O),
      (n[33] = k),
      (n[34] = _),
      (n[35] = A))
    : (A = n[35]);
  let j;
  n[36] !== i || n[37] !== o || n[38] !== s
    ? ((j = () => {
        (window.dispatchEvent(
          new CustomEvent(N, {
            cancelable: !0,
            detail: {
              type: g,
              source: `chatgpt_website_onboarding`,
              prompt: s,
              mode: i === `email` || i === `inventory` ? `work` : void 0,
            },
          }),
        ),
          o(i));
      }),
      (n[36] = i),
      (n[37] = o),
      (n[38] = s),
      (n[39] = j))
    : (j = n[39]);
  let M;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, q.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.button.try`,
        defaultMessage: `Try this demo`,
        description: `Button on each fictional sample task card on the ChatGPT browser extension setup page. Opens the sample in this tab and prefills its prompt in Side Chat without submitting it.`,
      })),
      (n[40] = M))
    : (M = n[40]);
  let P;
  n[41] === j
    ? (P = n[42])
    : ((P = (0, q.jsx)(t, {
        className: `w-full justify-center`,
        color: `outlineGhost`,
        onClick: j,
        radius: `full`,
        size: `beaconAction`,
        type: `button`,
        children: M,
      })),
      (n[41] = j),
      (n[42] = P));
  let F;
  n[43] !== A || n[44] !== P || n[45] !== v
    ? ((F = (0, q.jsxs)(`div`, { className: v, children: [A, P] })),
      (n[43] = A),
      (n[44] = P),
      (n[45] = v),
      (n[46] = F))
    : (F = n[46]);
  let I;
  return (
    n[47] !== F || n[48] !== y || n[49] !== x || n[50] !== S
      ? ((I = (0, q.jsxs)(`article`, { className: y, "aria-labelledby": x, children: [S, F] })),
        (n[47] = F),
        (n[48] = y),
        (n[49] = x),
        (n[50] = S),
        (n[51] = I))
      : (I = n[51]),
    I
  );
}
var Me, q;
function Ne() {
  return (Ne = e(() => {
    ((Me = L()), d(), _(), E(), ye(), xe(), Ce(), Te(), De(), ke(), P(), p(), (q = B()));
  }))();
}
function Pe(e) {
  let t = (0, Le.c)(16),
    { children: n, onClose: r, onSubmit: i, title: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = {
        "aria-describedby": void 0,
        className: `font-openai-sans`,
        onOpenAutoFocus: Ie,
        onPointerDownOutside: Fe,
      }),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === r
    ? (s = t[2])
    : ((s = (e) => {
        e || r();
      }),
      (t[1] = r),
      (t[2] = s));
  let c;
  t[3] === i
    ? (c = t[4])
    : ((c = (e) => {
        (e.preventDefault(), i?.());
      }),
      (t[3] = i),
      (t[4] = c));
  let l;
  t[5] === a
    ? (l = t[6])
    : ((l = (0, Re.jsx)(x, { title: (0, Re.jsx)(v, { className: `pe-8 select-none`, children: a }) })),
      (t[5] = a),
      (t[6] = l));
  let u;
  t[7] !== n || t[8] !== l
    ? ((u = (0, Re.jsxs)(`div`, { className: `flex flex-col gap-5`, children: [l, n] })),
      (t[7] = n),
      (t[8] = l),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== c || t[11] !== u
    ? ((d = (0, Re.jsx)(A, { as: `form`, onSubmit: c, size: `viewport`, children: u })),
      (t[10] = c),
      (t[11] = u),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== s || t[14] !== d
      ? ((f = (0, Re.jsx)(k, {
          open: !0,
          contentProps: o,
          onOpenChange: s,
          size: `xwide`,
          variant: `chatgpt`,
          children: d,
        })),
        (t[13] = s),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function Fe(e) {
  let t = e.detail.originalEvent.target;
  t instanceof Element && t.closest(`[data-sonner-toast]`) != null && e.preventDefault();
}
function Ie(e) {
  (e.preventDefault(), e.target instanceof HTMLElement && e.target.focus());
}
var Le, Re;
function ze() {
  return (ze = e(() => {
    ((Le = L()), I(), C(), (Re = B()));
  }))();
}
function Be(e) {
  let n = (0, Ve.c)(21),
    { onClose: r } = e,
    i = m(),
    [o, s] = (0, He.useState)(!1),
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = () => s(!0)), (n[0] = c)) : (c = n[0]);
  let l;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.email.modal.title.sender_name`,
        defaultMessage: `Reply to {senderName}'s message`,
        values: { senderName: `Samuel` },
        description: `Title of the editable fictional email task in browser extension onboarding. The senderName placeholder is the sender’s display name, Samuel, and must not be translated.`,
      })),
      (n[1] = l))
    : (l = n[1]);
  let u;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(`header`, {
        className: `border-b border-default bg-surface-secondary px-5 py-4 text-base font-medium text-secondary select-none`,
        children: (0, J.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.email.modal.inbox.label`,
          defaultMessage: `Inbox`,
          description: `Decorative header of the fictional email application in extension onboarding; does not open a real inbox`,
        }),
      })),
      (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(`h3`, {
        id: `work-chrome-sample-email-subject`,
        className: `text-xl font-semibold text-default`,
        children: (0, J.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.email.modal.subject`,
          defaultMessage: `What should I pack for San Francisco?`,
          description: `Subject of Samuel's fictional email asking what to pack for a San Francisco visit`,
        }),
      })),
      (n[3] = d))
    : (d = n[3]);
  let p, h;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          d,
          (0, J.jsx)(`p`, {
            className: `text-sm leading-6 text-secondary`,
            children: (0, J.jsx)(a, {
              id: `chatgpt.work.chrome.installed.sample_work.email.modal.recipient`,
              defaultMessage: `To: {recipientName} · {recipientEmail}`,
              description: `Fictional email recipient metadata; recipientName is Samuel and recipientEmail is samuel@northstar.co`,
              values: { recipientEmail: `samuel@northstar.co`, recipientName: `Samuel` },
            }),
          }),
        ],
      })),
      (h = (0, J.jsx)(`hr`, { className: `border-default` })),
      (n[4] = p),
      (n[5] = h))
    : ((p = n[4]), (h = n[5]));
  let g;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(`p`, {
        className: `text-sm leading-6 whitespace-pre-line text-secondary`,
        children: (0, J.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.email.modal.body`,
          defaultMessage: `Hi {recipientName},{lineBreak}{lineBreak}I’m visiting San Francisco next month and trying to pack light. Is it usually warm during the day, or should I bring a jacket?{lineBreak}{lineBreak}Thanks,{lineBreak}{lineBreak}{senderName}`,
          description: `Complete fictional incoming email from Samuel to Rissa asking what to pack; lineBreak is a newline separating email paragraphs`,
          values: {
            lineBreak: `
`,
            recipientName: `Rissa`,
            senderName: `Samuel`,
          },
        }),
      })),
      (n[6] = g))
    : (g = n[6]);
  let _;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: `work-chrome-sample-email-draft`,
        children: (0, J.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.email.modal.draft.label`,
          defaultMessage: `Draft reply`,
          description: `Accessible label for the editable fictional email reply; this field never sends an email`,
        }),
      })),
      (n[7] = _))
    : (_ = n[7]);
  let v;
  n[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = () => s(!1)), (n[8] = v)) : (v = n[8]);
  let y;
  n[9] === i
    ? (y = n[10])
    : ((y = i.formatMessage({
        id: `chatgpt.work.chrome.installed.sample_work.email.modal.reply.placeholder`,
        defaultMessage: `Reply`,
        description: `Placeholder for the fictional email reply composer`,
      })),
      (n[9] = i),
      (n[10] = y));
  let b;
  n[11] === y
    ? (b = n[12])
    : ((b = (0, J.jsx)(ee, {
        id: `work-chrome-sample-email-draft`,
        autoResize: !0,
        name: `work-chrome-sample-email-draft`,
        onChange: v,
        placeholder: y,
        rows: 10,
        variant: `feedback`,
      })),
      (n[11] = y),
      (n[12] = b));
  let x;
  n[13] === o
    ? (x = n[14])
    : ((x = (0, J.jsx)(`div`, {
        className: `flex justify-end select-none`,
        children: o
          ? (0, J.jsx)(`span`, {
              role: `status`,
              children: (0, J.jsxs)(U, {
                className: `gap-1`,
                variant: `success`,
                children: [
                  (0, J.jsx)(f, {}),
                  (0, J.jsx)(a, {
                    id: `chatgpt.work.chrome.installed.sample_work.email.modal.status.done`,
                    defaultMessage: `Done`,
                    description: `Confirmation that the fictional reply is complete; no email was sent`,
                  }),
                ],
              }),
            })
          : (0, J.jsx)(t, {
              color: `primary`,
              size: `medium`,
              type: `submit`,
              children: (0, J.jsx)(a, {
                id: `chatgpt.work.chrome.installed.sample_work.email.modal.button.done`,
                defaultMessage: `Done`,
                description: `Marks the sample reply complete without sending an email or closing the dialog`,
              }),
            }),
      })),
      (n[13] = o),
      (n[14] = x));
  let S;
  n[15] !== b || n[16] !== x
    ? ((S = (0, J.jsxs)(`section`, {
        "aria-labelledby": `work-chrome-sample-email-subject`,
        className: `flex flex-col overflow-hidden rounded-xl border border-default`,
        children: [
          u,
          (0, J.jsxs)(`div`, {
            className: `flex flex-col gap-5 p-5 select-text`,
            children: [
              p,
              h,
              g,
              (0, J.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [_, b, x] }),
            ],
          }),
        ],
      })),
      (n[15] = b),
      (n[16] = x),
      (n[17] = S))
    : (S = n[17]);
  let C;
  return (
    n[18] !== r || n[19] !== S
      ? ((C = (0, J.jsx)(Pe, { onClose: r, onSubmit: c, title: l, children: S })),
        (n[18] = r),
        (n[19] = S),
        (n[20] = C))
      : (C = n[20]),
    C
  );
}
var Ve, He, J;
function Ue() {
  return (Ue = e(() => {
    ((Ve = L()), (He = V()), E(), W(), P(), p(), H(), ze(), (J = B()));
  }))();
}
function We(e) {
  let n = (0, Ze.c)(43),
    { onClose: r } = e,
    i = m(),
    [o, s] = (0, Qe.useState)($e),
    [c, l] = (0, Qe.useState)(!1),
    u,
    d;
  if (n[0] !== o) {
    let e = o.find(Ye);
    ((u = e !== void 0), (d = e != null && e.name.trim().length > 0), (n[0] = o), (n[1] = u), (n[2] = d));
  } else ((u = n[1]), (d = n[2]));
  let p = d,
    h;
  n[3] === p
    ? (h = n[4])
    : ((h = () => {
        p && (s(qe), l(!0));
      }),
      (n[3] = p),
      (n[4] = h));
  let g;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Y.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.inventory.modal.title`,
        defaultMessage: `Update an inventory system`,
        description: `Title of the interactive sample ecommerce inventory modal opened from the Update an inventory system sample-work card on the ChatGPT Chrome extension onboarding screen. It introduces a task where three sold-out products are updated and one desk mousepad is added.`,
      })),
      (n[5] = g))
    : (g = n[5]);
  let _;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Y.jsx)(`h3`, {
        id: `work-chrome-sample-inventory-heading`,
        className: `text-xl leading-7 font-semibold text-default`,
        children: (0, Y.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.form.heading`,
          defaultMessage: `Inventory`,
          description: `Heading above the sample ecommerce inventory form inside the ChatGPT Chrome extension onboarding inventory modal. It identifies the editable product and stock information shown below.`,
        }),
      })),
      (n[6] = _))
    : (_ = n[6]);
  let v;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Y.jsxs)(`div`, {
        className: `min-w-0`,
        children: [
          _,
          (0, Y.jsx)(`p`, {
            className: `text-sm leading-6 text-secondary`,
            children: (0, Y.jsx)(a, {
              id: `chatgpt.work.chrome.installed.sample_work.inventory.form.metadata`,
              defaultMessage: `Ecommerce store · Today`,
              description: `Short metadata line below the Inventory heading in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. It identifies the fictional ecommerce store and indicates that the displayed inventory is for today. Preserve an appropriate localized separator.`,
            }),
          }),
        ],
      })),
      (n[7] = v))
    : (v = n[7]);
  let y;
  n[8] === c
    ? (y = n[9])
    : ((y = c
        ? (0, Y.jsx)(`span`, {
            role: `status`,
            children: (0, Y.jsxs)(U, {
              className: `gap-1`,
              variant: `success`,
              children: [
                (0, Y.jsx)(f, {}),
                (0, Y.jsx)(a, {
                  id: `chatgpt.work.chrome.installed.sample_work.inventory.status.saved`,
                  defaultMessage: `Saved`,
                  description: `Short green confirmation badge in the header of the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. It appears only after the sold-out product updates and newly added desk mousepad have been saved. Keep the label short.`,
                }),
              ],
            }),
          })
        : null),
      (n[8] = c),
      (n[9] = y));
  let b;
  n[10] === y
    ? (b = n[11])
    : ((b = (0, Y.jsxs)(`header`, {
        className: `flex min-w-0 items-start justify-between gap-3`,
        children: [v, y],
      })),
      (n[10] = y),
      (n[11] = b));
  let x;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(`hr`, { className: `border-default` })), (n[12] = x))
    : (x = n[12]);
  let S;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Y.jsx)(`h3`, {
        className: `text-sm leading-6 font-semibold text-default`,
        children: (0, Y.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.products.heading`,
          defaultMessage: `Products`,
          description: `Heading directly above the editable sample product inventory table inside the ChatGPT Chrome extension onboarding inventory modal. It introduces the list of products, stock quantities, and product statuses.`,
        }),
      })),
      (n[13] = S))
    : (S = n[13]);
  let C;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(`caption`, {
        className: `sr-only`,
        children: (0, Y.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.table.caption`,
          defaultMessage: `Sample ecommerce products, stock quantities, and statuses`,
          description: `Screen-reader-only caption for the editable sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. It explains that the table contains product names, numeric stock quantities, and product statuses.`,
        }),
      })),
      (n[14] = C))
    : (C = n[14]);
  let w;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Y.jsx)(`th`, {
        className: `px-3 py-2.5 text-start font-medium`,
        scope: `col`,
        children: (0, Y.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.product`,
          defaultMessage: `Product`,
          description: `Short column header for product names and stock-keeping unit identifiers in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.`,
        }),
      })),
      (n[15] = w))
    : (w = n[15]);
  let T;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Y.jsx)(`th`, {
        id: `work-chrome-sample-inventory-stock-heading`,
        className: `w-20 px-2 py-2.5 text-start font-medium sm:w-24`,
        scope: `col`,
        children: (0, Y.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.stock`,
          defaultMessage: `Stock`,
          description: `Short column header for editable numeric product quantities in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.`,
        }),
      })),
      (n[16] = T))
    : (T = n[16]);
  let E;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Y.jsx)(`thead`, {
        className: `bg-surface-secondary text-xs leading-5 font-medium text-secondary select-none`,
        children: (0, Y.jsxs)(`tr`, {
          children: [
            w,
            T,
            (0, Y.jsx)(`th`, {
              className: `w-24 px-2 py-2.5 text-start font-medium sm:w-28`,
              scope: `col`,
              children: (0, Y.jsx)(a, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.status`,
                defaultMessage: `Status`,
                description: `Short column header for the Sold out, New, and In stock product-status badges in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.`,
              }),
            }),
          ],
        }),
      })),
      (n[17] = E))
    : (E = n[17]);
  let D;
  if (n[18] !== i || n[19] !== o) {
    let e;
    (n[21] === i
      ? (e = n[22])
      : ((e = (e) => {
          let t = `work-chrome-sample-inventory-product-${e.kind}`;
          return (0, Y.jsxs)(
            `tr`,
            {
              className: `border-t border-default ${e.isDraft ? `bg-info-soft` : `bg-surface`}`,
              children: [
                (0, Y.jsxs)(`th`, {
                  className: `min-w-0 px-3 py-2 text-start font-normal`,
                  scope: `row`,
                  children: [
                    e.isDraft
                      ? (0, Y.jsxs)(Y.Fragment, {
                          children: [
                            (0, Y.jsx)(`label`, {
                              className: `sr-only`,
                              htmlFor: t,
                              children: (0, Y.jsx)(a, {
                                id: `chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.label`,
                                defaultMessage: `Product name`,
                                description: `Screen-reader label for the editable name of a newly added product in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. The user or ChatGPT enters the name before saving the inventory.`,
                              }),
                            }),
                            (0, Y.jsx)(G, {
                              id: t,
                              name: `new-product-name`,
                              onChange: (e) => {
                                let t = e.currentTarget.value;
                                (s((e) => e.map((e) => (e.kind === `new_product` ? { ...e, name: t } : e))),
                                  l(!1));
                              },
                              onFocus: Ke,
                              placeholder: i.formatMessage({
                                id: `chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.placeholder`,
                                defaultMessage: `Product name`,
                                description: `Short placeholder inside the empty editable product-name field that appears after selecting Add in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. It prompts the user or ChatGPT to enter the name of the new product before saving.`,
                              }),
                              autoFocus: !0,
                              type: `text`,
                              value: e.name,
                            }),
                          ],
                        })
                      : (0, Y.jsx)(`span`, {
                          id: t,
                          className: `block text-sm leading-5 font-semibold text-default`,
                          children: e.name,
                        }),
                    (0, Y.jsx)(`span`, {
                      className: `block text-xs leading-5 text-secondary`,
                      children:
                        e.sku == null
                          ? (0, Y.jsx)(a, {
                              id: `chatgpt.work.chrome.installed.sample_work.inventory.product.new.description`,
                              defaultMessage: `New product`,
                              description: `Short secondary text beneath a newly added product in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It indicates that the product has just been created and does not yet have a stock-keeping unit.`,
                            })
                          : (0, Y.jsx)(a, {
                              id: `chatgpt.work.chrome.installed.sample_work.inventory.product.sku`,
                              defaultMessage: `SKU {sku}`,
                              description: `Secondary product identifier shown beneath an existing product name in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. The placeholder {sku} is the product's alphanumeric stock-keeping unit, such as KEY-2048, and must remain unchanged.`,
                              values: { sku: e.sku },
                            }),
                    }),
                  ],
                }),
                (0, Y.jsx)(`td`, {
                  className: `px-2 py-2`,
                  children: (0, Y.jsx)(G, {
                    "aria-labelledby": `${t} work-chrome-sample-inventory-stock-heading`,
                    inputMode: `numeric`,
                    min: 0,
                    name: `stock-${e.kind}`,
                    onChange: (t) => {
                      let n = Math.max(0, Math.trunc(t.currentTarget.valueAsNumber || 0));
                      (s((t) => t.map((t) => (t.kind === e.kind ? { ...t, stock: n } : t))), l(!1));
                    },
                    step: 1,
                    type: `number`,
                    value: e.stock,
                  }),
                }),
                (0, Y.jsx)(`td`, { className: `px-2 py-2`, children: (0, Y.jsx)(Xe, { product: e }) }),
              ],
            },
            e.kind,
          );
        }),
        (n[21] = i),
        (n[22] = e)),
      (D = o.map(e)),
      (n[18] = i),
      (n[19] = o),
      (n[20] = D));
  } else D = n[20];
  let O;
  n[23] === D
    ? (O = n[24])
    : ((O = (0, Y.jsx)(`div`, {
        className: `overflow-x-auto rounded-xl border border-default`,
        children: (0, Y.jsxs)(`table`, {
          className: `w-full border-collapse text-start`,
          children: [C, E, (0, Y.jsx)(`tbody`, { children: D })],
        }),
      })),
      (n[23] = D),
      (n[24] = O));
  let k;
  n[25] === u
    ? (k = n[26])
    : ((k = u
        ? null
        : (0, Y.jsxs)(t, {
            className: `self-start`,
            color: `secondary`,
            onClick: () => {
              (s(Ge), l(!1));
            },
            size: `compact`,
            type: `button`,
            children: [
              (0, Y.jsx)(M, {}),
              (0, Y.jsx)(a, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.button.add`,
                defaultMessage: `Add`,
                description: `Short button label below the sample ecommerce inventory table in the ChatGPT Chrome extension onboarding inventory modal. Clicking the button adds one empty, editable product with a starting stock quantity of zero and focuses its product-name field. Keep the label concise.`,
              }),
            ],
          })),
      (n[25] = u),
      (n[26] = k));
  let A;
  n[27] !== O || n[28] !== k
    ? ((A = (0, Y.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-3`, children: [S, O, k] })),
      (n[27] = O),
      (n[28] = k),
      (n[29] = A))
    : (A = n[29]);
  let j;
  n[30] !== A || n[31] !== b
    ? ((j = (0, Y.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, children: [b, x, A] })),
      (n[30] = A),
      (n[31] = b),
      (n[32] = j))
    : (j = n[32]);
  let N;
  n[33] !== p || n[34] !== c
    ? ((N = c
        ? null
        : (0, Y.jsxs)(`footer`, {
            className: `flex shrink-0 items-center justify-end gap-2 select-none`,
            children: [
              (0, Y.jsx)(t, {
                color: `ghost`,
                onClick: () => {
                  (s($e), l(!1));
                },
                size: `medium`,
                type: `button`,
                children: (0, Y.jsx)(a, {
                  id: `chatgpt.work.chrome.installed.sample_work.inventory.button.undo`,
                  defaultMessage: `Undo`,
                  description: `Short secondary button label in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. Clicking the button removes the newly added product, restores the original positive stock quantities for the three existing products, and clears the saved confirmation.`,
                }),
              }),
              (0, Y.jsx)(t, {
                disabled: !p,
                color: `primary`,
                size: `medium`,
                type: `submit`,
                children: (0, Y.jsx)(a, {
                  id: `chatgpt.work.chrome.installed.sample_work.inventory.button.done`,
                  defaultMessage: `Done`,
                  description: `Short primary button label in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. After a new product has been named, clicking the button saves the updated product quantities and new product. Keep the label short.`,
                }),
              }),
            ],
          })),
      (n[33] = p),
      (n[34] = c),
      (n[35] = N))
    : (N = n[35]);
  let P;
  n[36] !== j || n[37] !== N
    ? ((P = (0, Y.jsxs)(`section`, {
        "aria-labelledby": `work-chrome-sample-inventory-heading`,
        className: `flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-default p-5 select-text`,
        children: [j, N],
      })),
      (n[36] = j),
      (n[37] = N),
      (n[38] = P))
    : (P = n[38]);
  let F;
  return (
    n[39] !== r || n[40] !== h || n[41] !== P
      ? ((F = (0, Y.jsx)(Pe, { onClose: r, onSubmit: h, title: g, children: P })),
        (n[39] = r),
        (n[40] = h),
        (n[41] = P),
        (n[42] = F))
      : (F = n[42]),
    F
  );
}
function Ge(e) {
  return [...e, { isDraft: !0, kind: `new_product`, name: ``, stock: 0 }];
}
function Ke(e) {
  e.currentTarget.select();
}
function qe(e) {
  return e.map(Je);
}
function Je(e) {
  return e.kind === `new_product` ? { ...e, isDraft: !1 } : e;
}
function Ye(e) {
  return e.kind === `new_product`;
}
function Xe(e) {
  let t = (0, Ze.c)(3),
    { product: n } = e;
  if (n.kind === `new_product`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsxs)(U, {
            className: `gap-1`,
            variant: `tip`,
            children: [
              (0, Y.jsx)(M, {}),
              (0, Y.jsx)(a, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.status.new`,
                defaultMessage: `New`,
                description: `Short status badge for a newly added product in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It indicates that the product has just been created, not that its stock is replenished. Keep the label short.`,
              }),
            ],
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.stock === 0) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsxs)(U, {
            className: `gap-1`,
            variant: `success`,
            children: [
              (0, Y.jsx)(f, {}),
              (0, Y.jsx)(a, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.status.sold_out`,
                defaultMessage: `Sold out`,
                description: `Short green success badge in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It confirms that an existing product has been marked as having zero remaining stock. Keep the label short so it fits in the status column.`,
              }),
            ],
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(U, {
          variant: `outline`,
          children: (0, Y.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.status.in_stock`,
            defaultMessage: `In stock`,
            description: `Short status badge in the editable sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It indicates that an existing product has a stock quantity greater than zero. Keep the label short so it fits in the status column.`,
          }),
        })),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
var Ze, Qe, Y, $e;
function et() {
  return (et = e(() => {
    ((Ze = L()),
      (Qe = V()),
      E(),
      W(),
      P(),
      p(),
      H(),
      ze(),
      (Y = B()),
      ($e = [
        {
          kind: `wireless_keyboard`,
          name: (0, Y.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.product.wireless_keyboard.label`,
            defaultMessage: `Wireless keyboard`,
            description: `Product name in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. This is one of the three existing products that the sample task marks as sold out. Keep the label concise so it fits in a table row.`,
          }),
          sku: `KEY-2048`,
          stock: 12,
        },
        {
          kind: `usb_c_hub`,
          name: (0, Y.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.product.usb_c_hub.label`,
            defaultMessage: `USB-C hub`,
            description: `Product name in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. This is one of the three existing products that the sample task marks as sold out. Preserve the standard USB-C product terminology and keep the label concise.`,
          }),
          sku: `HUB-1180`,
          stock: 21,
        },
        {
          kind: `laptop_stand`,
          name: (0, Y.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.product.laptop_stand.label`,
            defaultMessage: `Laptop stand`,
            description: `Product name in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. This is one of the three existing products that the sample task marks as sold out. Keep the label concise so it fits in a table row.`,
          }),
          sku: `STD-4412`,
          stock: 5,
        },
      ]));
  }))();
}
function tt(e) {
  let t = (0, rt.c)(10),
    { onClose: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(a, {
        id: `chatgpt.work.chrome.installed.sample_work.report.modal.title`,
        defaultMessage: `Summarize a report`,
        description: `Title of the sample report modal on the ChatGPT Chrome extension onboarding page. Appears when an end user selects the Summarize a report sample task and introduces a fictional customer research report for ChatGPT to summarize. Keep this short enough for a modal header.`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(`h3`, {
        id: `work-chrome-sample-report-title`,
        className: `text-xl leading-7 font-semibold text-default`,
        children: (0, X.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.report.modal.document.title`,
          defaultMessage: `Q2 customer research synthesis`,
          description: `Document title of the fictional second-quarter customer research report displayed inside the ChatGPT Chrome extension onboarding sample report modal. Q2 means the second quarter of the year. Preserve its concise report-title style.`,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsxs)(`header`, {
        className: `flex flex-col gap-1 border-b border-default pb-5`,
        children: [
          i,
          (0, X.jsx)(`p`, {
            className: `text-sm leading-5 text-secondary`,
            children: (0, X.jsx)(a, {
              id: `chatgpt.work.chrome.installed.sample_work.report.modal.document.metadata`,
              defaultMessage: `Updated today · {pageCount, plural, one {# page} other {# pages}}`,
              description: `Document metadata shown under the fictional customer research report title in the ChatGPT Chrome extension onboarding sample report modal. Indicates that the document was updated today and contains {pageCount} pages; {pageCount} is the numeric page count. Keep the concise separator between the date and page count.`,
              values: { pageCount: 12 },
            }),
          }),
        ],
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(`h4`, {
        id: `work-chrome-sample-report-summary`,
        className: `text-base leading-6 font-semibold text-default`,
        children: (0, X.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.title`,
          defaultMessage: `Executive Summary`,
          description: `Heading introducing the two-paragraph executive summary in the fictional customer research report displayed in the ChatGPT Chrome extension onboarding sample report modal. Keep it concise and recognizable as a report section heading.`,
        }),
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(`p`, {
        className: `text-sm leading-6 text-secondary`,
        children: (0, X.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.activation`,
          defaultMessage: `Across interviews, teams reached value faster when setup focused on a few guided actions instead of a broad list of features. Participants who connected an existing workflow could start with familiar context and complete a meaningful task sooner.`,
          description: `First complete paragraph of the executive summary in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Explains that focused onboarding and connecting familiar workflows helped research participants complete a useful first task more quickly. Translate as one cohesive report paragraph.`,
        }),
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsxs)(`section`, {
        "aria-labelledby": `work-chrome-sample-report-summary`,
        className: `flex flex-col gap-3`,
        children: [
          s,
          c,
          (0, X.jsx)(`p`, {
            className: `text-sm leading-6 text-secondary`,
            children: (0, X.jsx)(a, {
              id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.import_friction`,
              defaultMessage: `The main point of friction was uncertainty around imports. People wanted to know what would be brought over, what would remain unchanged, and whether they could review the result before continuing.`,
              description: `Second complete paragraph of the executive summary in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Explains that research participants wanted clarity and a chance to review data imports before continuing setup. Translate as one cohesive report paragraph.`,
            }),
          }),
        ],
      })),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(`h4`, {
        id: `work-chrome-sample-report-key-points`,
        className: `text-base leading-6 font-semibold text-default`,
        children: (0, X.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_points.title`,
          defaultMessage: `Key points`,
          description: `Heading introducing the three numbered Activation, Retention, and Decision findings in the fictional customer research report displayed in the ChatGPT Chrome extension onboarding sample report modal. Keep it short and recognizable as a report section heading.`,
        }),
      })),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(`article`, {
        "aria-labelledby": `work-chrome-sample-report-title`,
        className: `flex w-full overflow-hidden rounded-xl border border-default select-text`,
        children: (0, X.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-6 p-5`,
          children: [
            o,
            l,
            (0, X.jsxs)(`section`, {
              "aria-labelledby": `work-chrome-sample-report-key-points`,
              className: `flex flex-col gap-3`,
              children: [u, (0, X.jsx)(`ol`, { className: `flex flex-col gap-3`, children: it.map(nt) })],
            }),
          ],
        }),
      })),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] === n
      ? (f = t[9])
      : ((f = (0, X.jsx)(Pe, { onClose: n, title: r, children: d })), (t[8] = n), (t[9] = f)),
    f
  );
}
function nt(e) {
  return (0, X.jsxs)(
    `li`,
    {
      className: `flex flex-wrap items-start gap-3 rounded-xl border p-3 ${e.isRecommendation ? `border-default bg-success-soft` : `border-default bg-surface-secondary`}`,
      children: [
        (0, X.jsx)(`span`, {
          className: `shrink-0 text-sm leading-5 font-medium ${e.isRecommendation ? `text-success` : `text-tertiary`}`,
          children: e.number,
        }),
        (0, X.jsx)(`span`, { className: `text-sm leading-5 font-semibold text-default`, children: e.title }),
        (0, X.jsx)(`span`, {
          className: `min-w-0 basis-full text-sm leading-5 text-secondary sm:flex-1`,
          children: e.detail,
        }),
      ],
    },
    e.number,
  );
}
var rt, X, it;
function at() {
  return (at = e(() => {
    ((rt = L()),
      E(),
      ze(),
      (X = B()),
      (it = [
        {
          number: `01`,
          title: (0, X.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.title`,
            defaultMessage: `Activation`,
            description: `Short heading for the first finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Activation means new users completing their first meaningful task. Keep the heading short enough for a compact report finding.`,
          }),
          detail: (0, X.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.description`,
            defaultMessage: `Faster setup lifted first-week completion by 18%`,
            description: `Evidence supporting the activation finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. It states that a faster setup increased the percentage of people who completed a meaningful task in their first week by 18 percent. Preserve the 18 percent figure.`,
          }),
          isRecommendation: !1,
        },
        {
          number: `02`,
          title: (0, X.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.title`,
            defaultMessage: `Retention`,
            description: `Short heading for the second finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Retention means users returning to use the product. Keep the heading short enough for a compact report finding.`,
          }),
          detail: (0, X.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.description`,
            defaultMessage: `Connected workflows correlate with higher return use`,
            description: `Evidence supporting the retention finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. It explains that users who connect an existing workflow tend to return to the product more frequently.`,
          }),
          isRecommendation: !1,
        },
        {
          number: `03`,
          title: (0, X.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.title`,
            defaultMessage: `Decision`,
            description: `Short heading for the final, visually highlighted recommendation in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Decision means the action recommended by the research. Keep the heading short enough for a compact report finding.`,
          }),
          detail: (0, X.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.description`,
            defaultMessage: `Prioritize guided imports in the next release`,
            description: `Final recommended action in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. It recommends prioritizing an import experience that guides users through reviewing existing data before the next product release.`,
          }),
          isRecommendation: !0,
        },
      ]));
  }))();
}
var ot;
function st() {
  return (st = e(() => {
    ot = `` + new URL(`onboarding-open-sidebar-dark-90efefd6a84a.png`, import.meta.url).href;
  }))();
}
var ct;
function lt() {
  return (lt = e(() => {
    ct = `` + new URL(`onboarding-open-sidebar-light-ac63258bc1e9.png`, import.meta.url).href;
  }))();
}
var ut;
function dt() {
  return (dt = e(() => {
    ut = `` + new URL(`onboarding-pin-menu-dark-f10aedf5871f.png`, import.meta.url).href;
  }))();
}
var ft;
function pt() {
  return (pt = e(() => {
    ft = `` + new URL(`onboarding-pin-menu-light-60ed38283057.png`, import.meta.url).href;
  }))();
}
var mt;
function ht() {
  return (ht = e(() => {
    mt = `` + new URL(`onboarding-pin-sidebar-dark-15e0a99d31b6.png`, import.meta.url).href;
  }))();
}
var gt;
function _t() {
  return (_t = e(() => {
    gt = `` + new URL(`onboarding-pin-sidebar-light-e58d2b59f02f.png`, import.meta.url).href;
  }))();
}
function vt(e) {
  let t = (0, yt.c)(24),
    { children: n, description: r, image: i, imageAlt: a, title: o } = e,
    s = (0, bt.useId)(),
    c = xt[i],
    l;
  t[0] !== a || t[1] !== c.light
    ? ((l = (0, Z.jsx)(`img`, {
        className: `max-h-full max-w-full mask-b-from-85% mask-b-to-100% object-contain dark:hidden`,
        alt: a,
        src: c.light,
      })),
      (t[0] = a),
      (t[1] = c.light),
      (t[2] = l))
    : (l = t[2]);
  let u = xt[i],
    d;
  t[3] !== a || t[4] !== u.dark
    ? ((d = (0, Z.jsx)(`img`, {
        className: `hidden max-h-full max-w-full mask-b-from-85% mask-b-to-100% object-contain dark:block`,
        alt: a,
        src: u.dark,
      })),
      (t[3] = a),
      (t[4] = u.dark),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== l || t[7] !== d
    ? ((f = (0, Z.jsxs)(`div`, {
        className: `flex min-h-0 w-full items-end justify-center lg:min-h-40`,
        dir: `ltr`,
        children: [l, d],
      })),
      (t[6] = l),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== s || t[10] !== o
    ? ((p = (0, Z.jsx)(`h2`, {
        id: s,
        className: `text-(length:--font-heading-2xl-size) leading-none font-medium tracking-tight text-balance`,
        "aria-live": `polite`,
        children: o,
      })),
      (t[9] = s),
      (t[10] = o),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === r
    ? (m = t[13])
    : ((m = (0, Z.jsx)(`p`, {
        className: `text-heading-md leading-normal text-balance text-secondary`,
        children: r,
      })),
      (t[12] = r),
      (t[13] = m));
  let h;
  t[14] === n
    ? (h = t[15])
    : ((h =
        n == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: `mt-6 flex max-w-full flex-col items-center gap-3`,
              children: n,
            })),
      (t[14] = n),
      (t[15] = h));
  let g;
  t[16] !== p || t[17] !== m || t[18] !== h
    ? ((g = (0, Z.jsxs)(`div`, {
        className: `flex w-full max-w-2xl shrink-0 flex-col items-center gap-2`,
        children: [p, m, h],
      })),
      (t[16] = p),
      (t[17] = m),
      (t[18] = h),
      (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== s || t[21] !== f || t[22] !== g
      ? ((_ = (0, Z.jsxs)(`section`, {
          className: `flex h-full min-h-0 flex-col items-center overflow-y-auto rounded-2xl border border-default bg-gray-50 p-6 text-center font-openai-sans select-none lg:justify-center-safe dark:bg-gray-100`,
          "aria-labelledby": s,
          children: [f, g],
        })),
        (t[20] = s),
        (t[21] = f),
        (t[22] = g),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
var yt, bt, Z, xt;
function St() {
  return (St = e(() => {
    ((yt = L()),
      (bt = V()),
      st(),
      lt(),
      dt(),
      pt(),
      ht(),
      _t(),
      (Z = B()),
      (xt = {
        "open-sidebar": { light: ct, dark: ot },
        "pin-menu": { light: ft, dark: ut },
        "pin-sidebar": { light: gt, dark: mt },
      }));
  }))();
}
function Ct() {
  let e = (0, Ot.c)(75),
    t = o(n),
    r = m(),
    { isExtensionPinned: i, isSidePanelOpen: s } = h(ge),
    c = wt(S()),
    l = c !== `Chrome`,
    u;
  e[0] !== i || e[1] !== s || e[2] !== l
    ? ((u = `sidebar`),
      s && i ? (u = `try`) : s && !l && (u = `pin`),
      (e[0] = i),
      (e[1] = s),
      (e[2] = l),
      (e[3] = u))
    : (u = e[3]);
  let [d, f] = (0, Q.useState)(null),
    [p, g] = (0, Q.useState)(!1),
    [_, v] = (0, Q.useState)(null),
    y = (0, Q.useRef)(null),
    b = (0, Q.useRef)(null),
    x = d?.automaticStep === u ? d.selectedStep : u,
    C = s && i && x === `try`,
    E = _ == null ? kt[x] : At[_],
    D;
  e[4] === t
    ? (D = e[5])
    : ((D = (e) => {
        de(t, { action: `step_viewed`, step: e });
      }),
      (e[4] = t),
      (e[5] = D));
  let O = (0, Q.useEffectEvent)(D),
    k;
  e[6] !== O || e[7] !== E
    ? ((k = () => {
        ((b.current ??= (O(`page`), `page`)), b.current !== E && (O(E), (b.current = E)));
      }),
      (e[6] = O),
      (e[7] = E),
      (e[8] = k))
    : (k = e[8]);
  let A;
  (e[9] === E ? (A = e[10]) : ((A = [E]), (e[9] = E), (e[10] = A)), (0, Q.useEffect)(k, A));
  let j;
  e[11] === v
    ? (j = e[12])
    : ((j = () => {
        (y.current?.close(), (y.current = null), v(null));
      }),
      (e[11] = v),
      (e[12] = j));
  let M = j,
    N = ue,
    P = r.formatMessage(
      {
        id: `chatgpt.work.chrome.installed.page.title.browser`,
        defaultMessage: `ChatGPT for {browser}`,
        description: `Browser-tab title for the extension setup page shown immediately after installation. The browser placeholder is a brand such as Chrome, Edge, Opera, or Vivaldi and should not be translated.`,
      },
      { browser: c },
    ),
    F;
  e[13] !== N || e[14] !== P
    ? ((F = (0, $.jsx)(N, { title: P })), (e[13] = N), (e[14] = P), (e[15] = F))
    : (F = e[15]);
  let I;
  e[16] === c
    ? (I = e[17])
    : ((I = (0, $.jsx)(`h1`, {
        className: `text-[clamp(32px,5.6vw,64px)] leading-none font-medium tracking-[-0.02em] select-none`,
        "aria-live": `polite`,
        children: (0, $.jsx)(a, {
          id: `chatgpt.work.chrome.installed.page.heading.browser`,
          defaultMessage: `Welcome to ChatGPT for {browser}`,
          description: `Welcome heading on the ChatGPT browser extension setup page immediately after installation. The browser placeholder is the current browser's brand name, such as Chrome or Edge, and must not be translated.`,
          values: { browser: c },
        }),
      })),
      (e[16] = c),
      (e[17] = I));
  let L;
  e[18] === C
    ? (L = e[19])
    : ((L = C
        ? (0, $.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sample_work.ready_announcement`,
            defaultMessage: `Try ChatGPT on sample work`,
            description: `Screen-reader announcement when browser extension setup completes or the user revisits the sample email, report, and inventory tasks. The visible welcome heading remains unchanged.`,
          })
        : null),
      (e[18] = C),
      (e[19] = L));
  let R;
  e[20] === L
    ? (R = e[21])
    : ((R = (0, $.jsx)(`span`, { "aria-live": `polite`, className: `sr-only`, children: L })),
      (e[20] = L),
      (e[21] = R));
  let z = C && `md:flex-row`,
    B;
  e[22] === z
    ? (B = e[23])
    : ((B = w(`flex min-h-0 min-w-0 flex-1 flex-col items-start gap-6 lg:flex-row`, z)),
      (e[22] = z),
      (e[23] = B));
  let V;
  e[24] !== u || e[25] !== t || e[26] !== f
    ? ((V = (e) => {
        (de(t, { action: `checklist_step_selected`, step: kt[e] }), f({ automaticStep: u, selectedStep: e }));
      }),
      (e[24] = u),
      (e[25] = t),
      (e[26] = f),
      (e[27] = V))
    : (V = e[27]);
  let H;
  e[28] !== c || e[29] !== i || e[30] !== p || e[31] !== s || e[32] !== x || e[33] !== V || e[34] !== l
    ? ((H = (0, $.jsx)(Tt, {
        browserName: c,
        isExtensionPinned: i,
        isSampleWorkCompleted: p,
        isSidePanelOpen: s,
        onSelectStep: V,
        selectedStep: x,
        usesMenuPinning: l,
      })),
      (e[28] = c),
      (e[29] = i),
      (e[30] = p),
      (e[31] = s),
      (e[32] = x),
      (e[33] = V),
      (e[34] = l),
      (e[35] = H))
    : (H = e[35]);
  let ee = C && `md:min-h-0`,
    te;
  e[36] === ee
    ? (te = e[37])
    : ((te = w(`min-h-40 min-w-0 flex-1 self-stretch lg:min-h-0`, ee)), (e[36] = ee), (e[37] = te));
  let U;
  e[38] !== C || e[39] !== t || e[40] !== v || e[41] !== g
    ? ((U = C
        ? (0, $.jsx)(Ae, {
            onTry: (e) => {
              (de(t, { action: `sample_selected`, step: At[e] }),
                g(!0),
                v(e),
                (y.current = t
                  .get(T)
                  .success(
                    (0, $.jsx)(a, {
                      id: `chatgpt.work.chrome.installed.sample_work.prompt.confirmation`,
                      defaultMessage: `Added prompt to side chat`,
                      description: `Toast after choosing a demo on the browser extension setup page. Its prompt was prefilled in the extension's side chat composer. The user must press send there to start the demo; choosing a demo does not submit it.`,
                    }),
                    {
                      duration: 10,
                      hasCloseButton: !0,
                      id: `extension-onboarding-sample-prompt`,
                      position: `top-center`,
                      variant: `chatgptSuccess`,
                    },
                  )));
            },
          })
        : null),
      (e[38] = C),
      (e[39] = t),
      (e[40] = v),
      (e[41] = g),
      (e[42] = U))
    : (U = e[42]);
  let W;
  e[43] !== c || e[44] !== t || e[45] !== x || e[46] !== l
    ? ((W =
        x === `try`
          ? null
          : (0, $.jsx)(Dt, {
              browserName: c,
              isPinStep: x === `pin` || l,
              onOpenSidebar: () => de(t, { action: `sidebar_clicked`, step: `open_sidebar` }),
            })),
      (e[43] = c),
      (e[44] = t),
      (e[45] = x),
      (e[46] = l),
      (e[47] = W))
    : (W = e[47]);
  let ne;
  e[48] !== te || e[49] !== U || e[50] !== W
    ? ((ne = (0, $.jsxs)(`div`, { className: te, children: [U, W] })),
      (e[48] = te),
      (e[49] = U),
      (e[50] = W),
      (e[51] = ne))
    : (ne = e[51]);
  let G;
  e[52] !== B || e[53] !== H || e[54] !== ne
    ? ((G = (0, $.jsxs)(`div`, { className: B, children: [H, ne] })),
      (e[52] = B),
      (e[53] = H),
      (e[54] = ne),
      (e[55] = G))
    : (G = e[55]);
  let re;
  e[56] !== G || e[57] !== I || e[58] !== R
    ? ((re = (0, $.jsxs)(`div`, {
        className: `flex min-h-0 w-full flex-1 flex-col gap-6`,
        children: [I, R, G],
      })),
      (e[56] = G),
      (e[57] = I),
      (e[58] = R),
      (e[59] = re))
    : (re = e[59]);
  let ie;
  e[60] !== _ || e[61] !== M
    ? ((ie = _ === `email` ? (0, $.jsx)(Be, { onClose: M }) : null), (e[60] = _), (e[61] = M), (e[62] = ie))
    : (ie = e[62]);
  let ae;
  e[63] !== _ || e[64] !== M
    ? ((ae = _ === `report` ? (0, $.jsx)(tt, { onClose: M }) : null), (e[63] = _), (e[64] = M), (e[65] = ae))
    : (ae = e[65]);
  let oe;
  e[66] !== _ || e[67] !== M
    ? ((oe = _ === `inventory` ? (0, $.jsx)(We, { onClose: M }) : null),
      (e[66] = _),
      (e[67] = M),
      (e[68] = oe))
    : (oe = e[68]);
  let K;
  return (
    e[69] !== re || e[70] !== ie || e[71] !== ae || e[72] !== oe || e[73] !== F
      ? ((K = (0, $.jsxs)(`main`, {
          className: `flex h-dvh min-h-dvh w-full flex-col overflow-y-auto bg-surface p-5 font-openai-sans text-default sm:p-6`,
          children: [F, re, ie, ae, oe],
        })),
        (e[69] = re),
        (e[70] = ie),
        (e[71] = ae),
        (e[72] = oe),
        (e[73] = F),
        (e[74] = K))
      : (K = e[74]),
    K
  );
}
function wt(e) {
  return (typeof navigator < `u` && `brave` in navigator) || e.includes(`Brave/`)
    ? `Brave`
    : e.includes(`Edg/`)
      ? `Edge`
      : e.includes(`OPR/`) || e.includes(`Opera/`)
        ? `Opera`
        : e.includes(`Vivaldi/`)
          ? `Vivaldi`
          : `Chrome`;
}
function Tt(e) {
  let n = (0, Ot.c)(56),
    {
      browserName: r,
      isExtensionPinned: o,
      isSampleWorkCompleted: c,
      isSidePanelOpen: l,
      onSelectStep: u,
      selectedStep: d,
      usesMenuPinning: f,
    } = e,
    p = l && (!f || o),
    m;
  n[0] === f
    ? (m = n[1])
    : ((m = f
        ? (0, $.jsx)(a, {
            id: `chatgpt.work.chrome.installed.checklist.step.sidebar.open_and_pin`,
            defaultMessage: `Open and pin the extension`,
            description: `Selectable checklist step in ChatGPT browser extension setup for browsers such as Edge that pin from the Extensions menu. Opens the combined opening and pinning instructions.`,
          })
        : (0, $.jsx)(a, {
            id: `chatgpt.work.chrome.installed.checklist.step.sidebar.open_extension`,
            defaultMessage: `Open the extension in the sidebar`,
            description: `First selectable step in the ChatGPT browser extension setup checklist. Clicking it shows instructions for opening the installed extension in the browser sidebar. Keep this as a short action label.`,
          })),
      (n[0] = f),
      (n[1] = m));
  let h;
  n[2] !== p || n[3] !== m
    ? ((h = { step: `sidebar`, isCompleted: p, isEnabled: !0, label: m }), (n[2] = p), (n[3] = m), (n[4] = h))
    : (h = n[4]);
  let g;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(a, {
        id: `chatgpt.work.chrome.installed.checklist.step.pin`,
        defaultMessage: `Pin the extension`,
        description: `Second selectable step in the ChatGPT browser extension setup checklist. Opens toolbar-pinning instructions after the sidebar has opened. The user can revisit this step after completing it.`,
      })),
      (n[5] = g))
    : (g = n[5]);
  let _;
  n[6] !== o || n[7] !== l
    ? ((_ = { step: `pin`, isCompleted: o, isEnabled: l, label: g }), (n[6] = o), (n[7] = l), (n[8] = _))
    : (_ = n[8]);
  let v = l && o,
    y;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(a, {
        id: `chatgpt.work.chrome.installed.checklist.step.sample_work`,
        defaultMessage: `Try ChatGPT on sample work`,
        description: `Final selectable step in the ChatGPT browser extension setup checklist. Opens fictional email, report, and inventory tasks after the sidebar has opened and the extension is pinned.`,
      })),
      (n[9] = y))
    : (y = n[9]);
  let b;
  n[10] !== c || n[11] !== v
    ? ((b = { step: `try`, isCompleted: c, isEnabled: v, label: y }), (n[10] = c), (n[11] = v), (n[12] = b))
    : (b = n[12]);
  let x;
  n[13] !== h || n[14] !== _ || n[15] !== b
    ? ((x = [h, _, b]), (n[13] = h), (n[14] = _), (n[15] = b), (n[16] = x))
    : (x = n[16]);
  let S = x,
    C;
  n[17] !== S || n[18] !== f
    ? ((C = S.filter((e) => {
        let { step: t } = e;
        return !f || t !== `pin`;
      })),
      (n[17] = S),
      (n[18] = f),
      (n[19] = C))
    : (C = n[19]);
  let T = C,
    E;
  n[20] === T ? (E = n[21]) : ((E = T.filter(Et)), (n[20] = T), (n[21] = E));
  let D = E.length,
    O,
    k,
    A,
    j,
    M,
    N,
    P;
  if (n[22] !== r || n[23] !== D || n[24] !== d || n[25] !== f) {
    let e = f ? [`w-0`, `w-1/2`, `w-full`] : [`w-0`, `w-1/3`, `w-2/3`, `w-full`],
      t = d === `try` && `md:w-72`;
    (n[33] === t
      ? (N = n[34])
      : ((N = w(`w-full shrink-0 rounded-2xl border border-default p-2.5 select-none lg:w-72 xl:w-96`, t)),
        (n[33] = t),
        (n[34] = N)),
      (P = `extension-onboarding-checklist-heading`),
      (j = `flex flex-col gap-4 px-1.5 py-3`),
      n[35] === r
        ? (M = n[36])
        : ((M = (0, $.jsx)(`h2`, {
            id: `extension-onboarding-checklist-heading`,
            className: `body-md leading-5 font-normal text-balance`,
            children: (0, $.jsx)(a, {
              id: `chatgpt.work.chrome.installed.checklist.heading.browser_name`,
              defaultMessage: `Set up your ChatGPT {browser} Extension`,
              description: `Heading above the ChatGPT browser extension setup checklist. Users open the sidebar, pin the extension, and try sample work. The browser placeholder is a brand name such as Chrome or Edge and must not be translated.`,
              values: { browser: r },
            }),
          })),
          (n[35] = r),
          (n[36] = M)),
      (k = `h-1.5 overflow-hidden rounded-full bg-text/10`),
      (A = `true`),
      (O = w(`h-full rounded-full bg-text`, e[D])),
      (n[22] = r),
      (n[23] = D),
      (n[24] = d),
      (n[25] = f),
      (n[26] = O),
      (n[27] = k),
      (n[28] = A),
      (n[29] = j),
      (n[30] = M),
      (n[31] = N),
      (n[32] = P));
  } else ((O = n[26]), (k = n[27]), (A = n[28]), (j = n[29]), (M = n[30]), (N = n[31]), (P = n[32]));
  let F;
  n[37] === O ? (F = n[38]) : ((F = (0, $.jsx)(`div`, { className: O })), (n[37] = O), (n[38] = F));
  let I;
  n[39] !== k || n[40] !== A || n[41] !== F
    ? ((I = (0, $.jsx)(`div`, { className: k, "aria-hidden": A, children: F })),
      (n[39] = k),
      (n[40] = A),
      (n[41] = F),
      (n[42] = I))
    : (I = n[42]);
  let L;
  n[43] !== j || n[44] !== M || n[45] !== I
    ? ((L = (0, $.jsxs)(`div`, { className: j, children: [M, I] })),
      (n[43] = j),
      (n[44] = M),
      (n[45] = I),
      (n[46] = L))
    : (L = n[46]);
  let R;
  n[47] !== u || n[48] !== d || n[49] !== T
    ? ((R = (0, $.jsx)(`ol`, {
        className: `flex list-none flex-col gap-2 py-2`,
        children: T.map((e) => {
          let { step: n, isCompleted: r, isEnabled: o, label: c } = e;
          return (0, $.jsxs)(
            `li`,
            {
              children: [
                (0, $.jsxs)(t, {
                  className: `min-h-8 w-full gap-1.5 rounded-button-action border border-transparent px-2 py-1.5 text-start body-md leading-5 font-normal text-default not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover pointer-coarse:min-h-10`,
                  "aria-current": d === n ? `step` : void 0,
                  "aria-disabled": !o || void 0,
                  disabledAppearance: `unchanged`,
                  onClick: (e) => {
                    if (!o) {
                      e.preventDefault();
                      return;
                    }
                    u(n);
                  },
                  type: `button`,
                  unstyled: !0,
                  children: [
                    r
                      ? (0, $.jsx)(i, { className: `text-success` })
                      : (0, $.jsx)(s, { className: `text-tertiary` }),
                    (0, $.jsx)(`span`, { className: `min-w-0 text-pretty whitespace-normal`, children: c }),
                    r
                      ? (0, $.jsx)(`span`, {
                          className: `sr-only`,
                          children: (0, $.jsx)(a, {
                            id: `chatgpt.work.chrome.installed.checklist.step.completed`,
                            defaultMessage: `Completed`,
                            description: `Screen-reader completion status after a completed step's label in the ChatGPT browser extension setup checklist. The completed step remains selectable.`,
                          }),
                        })
                      : null,
                  ],
                }),
                n === `try` && o && d === `try`
                  ? (0, $.jsx)(`p`, {
                      className: `ms-9 me-2 mt-1 body-sm leading-5 text-secondary`,
                      children: (0, $.jsx)(a, {
                        id: `chatgpt.work.chrome.installed.checklist.step.sample_work.description`,
                        defaultMessage: `Choose a demo to see ChatGPT work on this page`,
                        description: `Small subtitle under the selected Try ChatGPT on sample work checklist step on the browser extension setup page. Appears only while the sample gallery is active and explains that users can choose a fictional demo to see ChatGPT perform website actions on their behalf.`,
                      }),
                    })
                  : null,
              ],
            },
            n,
          );
        }),
      })),
      (n[47] = u),
      (n[48] = d),
      (n[49] = T),
      (n[50] = R))
    : (R = n[50]);
  let z;
  return (
    n[51] !== N || n[52] !== P || n[53] !== L || n[54] !== R
      ? ((z = (0, $.jsxs)(`aside`, { className: N, "aria-labelledby": P, children: [L, R] })),
        (n[51] = N),
        (n[52] = P),
        (n[53] = L),
        (n[54] = R),
        (n[55] = z))
      : (z = n[55]),
    z
  );
}
function Et(e) {
  return e.isCompleted;
}
function Dt(e) {
  let n = (0, Ot.c)(25),
    { browserName: r, isPinStep: i, onOpenSidebar: o } = e,
    s = m(),
    c = r !== `Chrome`,
    l,
    u;
  if (!i) {
    l = `open-sidebar`;
    let e;
    (n[0] !== r || n[1] !== s
      ? ((e = s.formatMessage(
          {
            id: `chatgpt.work.chrome.installed.sidebar.image.alt.browser_name`,
            defaultMessage: `The {browser} Extensions menu with ChatGPT selected`,
            description: `Accessible description of the opening illustration on the ChatGPT browser extension setup page. The browser placeholder is a brand name and must not be translated.`,
          },
          { browser: r },
        )),
        (n[0] = r),
        (n[1] = s),
        (n[2] = e))
      : (e = n[2]),
      (u = e));
  } else if (c) {
    l = `pin-menu`;
    let e;
    (n[3] !== r || n[4] !== s
      ? ((e = s.formatMessage(
          {
            id: `chatgpt.work.chrome.installed.pin.image.alt.browser_name`,
            defaultMessage: `The {browser} Extensions menu showing how to pin ChatGPT to the toolbar`,
            description: `Accessible description of the toolbar-pinning illustration on the ChatGPT browser extension setup page. The browser placeholder is a brand name and must not be translated.`,
          },
          { browser: r },
        )),
        (n[3] = r),
        (n[4] = s),
        (n[5] = e))
      : (e = n[5]),
      (u = e));
  } else {
    l = `pin-sidebar`;
    let e;
    (n[6] === s
      ? (e = n[7])
      : ((e = s.formatMessage({
          id: `chatgpt.work.chrome.installed.pin.image.alt.sidebar`,
          defaultMessage: `The pin button at the top of the ChatGPT sidebar adds the extension to the Chrome toolbar`,
          description: `Accessible description of the pinning illustration shown after the ChatGPT sidebar opens in Chrome. Helps the user locate the pin button in the sidebar header.`,
        })),
        (n[6] = s),
        (n[7] = e)),
      (u = e));
  }
  let d;
  if (c) {
    let e;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(a, {
          id: `chatgpt.work.chrome.installed.pin.description.open_and_pin`,
          defaultMessage: `Pin ChatGPT in the Extensions menu, then click ChatGPT in your toolbar to open the sidebar`,
          description: `Instructions for the combined opening and pinning step in browsers such as Edge. Users pin ChatGPT from Extensions and then open the sidebar from the newly pinned toolbar icon.`,
        })),
        (n[8] = e))
      : (e = n[8]),
      (d = e));
  } else if (i) {
    let e;
    (n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(a, {
          id: `chatgpt.work.chrome.installed.pin.description`,
          defaultMessage: `Pin the extension so you can open ChatGPT quickly from any tab`,
          description: `Body beneath the toolbar-pinning illustration on the ChatGPT browser extension setup page. Explains that pinning makes the extension easy to access from any browser tab.`,
        })),
        (n[9] = e))
      : (e = n[9]),
      (d = e));
  } else {
    let e;
    (n[10] === r
      ? (e = n[11])
      : ((e = (0, $.jsx)(a, {
          id: `chatgpt.work.chrome.installed.sidebar.description.browser_name`,
          defaultMessage: `Click the Extensions icon in your {browser} toolbar, then select ChatGPT. Or click the sidebar button below.`,
          description: `Instructions for opening ChatGPT through the Extensions menu or the button below on the browser extension setup page. The browser placeholder is a brand name and must not be translated.`,
          values: { browser: r },
        })),
        (n[10] = r),
        (n[11] = e)),
      (d = e));
  }
  let f;
  n[12] !== r || n[13] !== i
    ? ((f = i
        ? (0, $.jsx)(a, {
            id: `chatgpt.work.chrome.installed.pin.heading.browser_name`,
            defaultMessage: `Add ChatGPT to your {browser} toolbar`,
            description: `Heading on the pinning step of the ChatGPT browser extension setup page. The browser placeholder is the browser brand name, such as Chrome or Edge, and must not be translated.`,
            values: { browser: r },
          })
        : (0, $.jsx)(a, {
            id: `chatgpt.work.chrome.installed.sidebar.heading`,
            defaultMessage: `Open the ChatGPT extension`,
            description: `Heading on the first step of the ChatGPT browser extension setup page. Invites the user to open the extension in their browser sidebar.`,
          })),
      (n[12] = r),
      (n[13] = i),
      (n[14] = f))
    : (f = n[14]);
  let p;
  n[15] !== i || n[16] !== o || n[17] !== c
    ? ((p =
        !i && !c
          ? (0, $.jsxs)(t, {
              className: `min-h-16 justify-center gap-2 rounded-full border border-transparent bg-text/5 px-6 py-4 text-heading-md leading-7 font-medium text-default not-disabled:not-aria-disabled:hover:bg-text/10 data-[state=open]:bg-text/10`,
              onClick: () => {
                (window.dispatchEvent(
                  new CustomEvent(N, {
                    cancelable: !0,
                    detail: { type: g, source: `chatgpt_website_onboarding` },
                  }),
                ),
                  o());
              },
              type: `button`,
              unstyled: !0,
              children: [
                (0, $.jsx)(D, {}),
                (0, $.jsx)(`span`, {
                  className: `min-w-0 whitespace-normal`,
                  children: (0, $.jsx)(a, {
                    id: `chatgpt.work.chrome.installed.sidebar.button.open`,
                    defaultMessage: `Open sidebar`,
                    description: `Button on the first ChatGPT browser extension setup step that opens Side Chat in the current browser window.`,
                  }),
                }),
              ],
            })
          : null),
      (n[15] = i),
      (n[16] = o),
      (n[17] = c),
      (n[18] = p))
    : (p = n[18]);
  let h;
  return (
    n[19] !== d || n[20] !== l || n[21] !== u || n[22] !== f || n[23] !== p
      ? ((h = (0, $.jsx)(vt, { image: l, imageAlt: u, title: f, description: d, children: p })),
        (n[19] = d),
        (n[20] = l),
        (n[21] = u),
        (n[22] = f),
        (n[23] = p),
        (n[24] = h))
      : (h = n[24]),
    h
  );
}
var Ot, Q, $, kt, At;
function jt() {
  return (jt = e(() => {
    ((Ot = L()),
      d(),
      _(),
      u(),
      (Q = V()),
      E(),
      P(),
      p(),
      O(),
      le(),
      R(),
      me(),
      _e(),
      Ne(),
      Ue(),
      et(),
      at(),
      St(),
      ($ = B()),
      (kt = { sidebar: `open_sidebar`, pin: `pin_extension`, try: `sample_gallery` }),
      (At = { email: `sample_email`, report: `sample_report`, inventory: `sample_inventory` }));
  }))();
}
function Mt(e) {
  let t = (0, Nt.c)(5),
    { authMethod: n } = oe(),
    i = z(),
    a = r(i);
  if (n == null) {
    let e;
    t[0] === a ? (e = t[1]) : ((e = new URLSearchParams({ next: a })), (t[0] = a), (t[1] = e));
    let n = `/auth/login?${e}`,
      r;
    return (
      t[2] === n ? (r = t[3]) : ((r = (0, Pt.jsx)(j, { to: n, replace: !0 })), (t[2] = n), (t[3] = r)),
      r
    );
  }
  let o;
  return (
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, Pt.jsx)(Ct, {})), (t[4] = o)) : (o = t[4]),
    o
  );
}
var Nt, Pt;
function Ft() {
  return (Ft = e(() => {
    ((Nt = L()), y(), ie(), jt(), (Pt = B()));
  }))();
}
Ft();
export { Mt as ExtensionInstalledPage };
//# sourceMappingURL=route-3d01db88e2e3.js.map
