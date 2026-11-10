import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AU as r,
  BR as i,
  BSt as a,
  DCt as o,
  FBt as s,
  HO as c,
  IO as l,
  IR as u,
  JO as d,
  LNt as f,
  MNt as p,
  NNt as m,
  NSt as h,
  OJ as g,
  Oq as _,
  PBt as v,
  Qst as y,
  RO as b,
  SSt as x,
  TY as S,
  VH as C,
  VR as w,
  VSt as T,
  Vrt as E,
  WH as D,
  WK as O,
  WO as k,
  XOt as A,
  Y3 as j,
  Z3 as M,
  ZSt as N,
  fst as P,
  gU as F,
  iCt as I,
  okt as L,
  qO as R,
  qrt as ee,
  tkt as z,
  vH as B,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as V,
  BFt as te,
  IWn as H,
  M0t as U,
  QLn as ne,
  ZLn as W,
  bWn as G,
  imr as re,
  rmr as ie,
  vWn as K,
  xMr as ae,
  yMr as oe,
  yWn as se,
  zFt as ce,
} from "./app-initial-ad16eaadf81f.js";
import { r as le, t as ue } from "./document-title-149d008a9f01.js";
function de(e, { action: t, step: n }) {
  ae(e, se, { action: fe[t], step: pe[n] });
}
var fe, pe;
function me() {
  return (me = e(() => {
    (H(),
      oe(),
      (fe = {
        step_viewed: K.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_STEP_VIEWED,
        sidebar_clicked: K.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SIDEBAR_CLICKED,
        checklist_step_selected: K.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_CHECKLIST_STEP_SELECTED,
        sample_selected: K.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SAMPLE_SELECTED,
      }),
      (pe = {
        page: G.CHATGPT_WORK_CHROME_ONBOARDING_STEP_PAGE,
        open_sidebar: G.CHATGPT_WORK_CHROME_ONBOARDING_STEP_OPEN_SIDEBAR,
        pin_extension: G.CHATGPT_WORK_CHROME_ONBOARDING_STEP_PIN_EXTENSION,
        sample_gallery: G.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_GALLERY,
        sample_email: G.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_EMAIL,
        sample_report: G.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_REPORT,
        sample_inventory: G.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_INVENTORY,
      }));
  }))();
}
var he, ge;
function _e() {
  return (_e = e(() => {
    (N(),
      U(),
      n(),
      (he = { isSidePanelOpen: !1, isExtensionPinned: !1 }),
      (ge = o(y, he, ({ scope: e, set: t }) => {}, {
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
    r = L(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, q.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.email.description`,
        defaultMessage: `Write a reply, follow-up, or new message in the tone you choose`,
        description: `Description of the fictional email task on the ChatGPT browser extension setup page. Explains what the user can try with the sample message.`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = r.formatMessage(
        {
          id: `chatgpt.work.chrome.installed.sample_work.email.prompt.sender_name`,
          defaultMessage: `Reply to {senderName}'s message on this page`,
          description: `Prompt prefilled in Side Chat after selecting the email sample in browser extension setup. The senderName placeholder is the sample sender's display name, Samuel, and must not be translated. This page means the sample email shown in the current tab. The user must send the prompt to start the demo.`,
        },
        { senderName: `Samuel` },
      )),
      (t[1] = r),
      (t[2] = a));
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, q.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.email.title`,
        defaultMessage: `Draft an email`,
        description: `Short heading of the fictional email task on the ChatGPT browser extension setup page.`,
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== n || t[5] !== a
    ? ((s = (0, q.jsx)(je, { description: i, kind: `email`, onTry: n, prompt: a, title: o })),
      (t[4] = n),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, q.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.report.description`,
        defaultMessage: `Pull out the key findings, supporting evidence, and recommendations`,
        description: `Description of the fictional report-summary task on the ChatGPT browser extension setup page.`,
      })),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === r
    ? (l = t[9])
    : ((l = r.formatMessage({
        id: `chatgpt.work.extension.installed.sample_work.report.prompt`,
        defaultMessage: `Summarize this report`,
        description: `Prompt prefilled in Side Chat after choosing the report sample on the ChatGPT browser extension setup page. This report refers to the fictional customer research report displayed in the current browser tab. The user must send the prompt to start the demo.`,
      })),
      (t[8] = r),
      (t[9] = l));
  let u;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, q.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.report.title`,
        defaultMessage: `Summarize a report`,
        description: `Short heading of the fictional report-summary task on the ChatGPT browser extension setup page.`,
      })),
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] !== n || t[12] !== l
    ? ((d = (0, q.jsx)(je, { description: c, kind: `report`, onTry: n, prompt: l, title: u })),
      (t[11] = n),
      (t[12] = l),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.inventory.description`,
        defaultMessage: `Mark sold-out products and add a new item to the inventory`,
        description: `Description of the fictional inventory-editing task on the ChatGPT browser extension setup page.`,
      })),
      (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] === r
    ? (p = t[16])
    : ((p = r.formatMessage({
        id: `chatgpt.work.extension.installed.sample_work.inventory.prompt`,
        defaultMessage: `I sold out of these 3 products today but ordered 5 new desk mousepads. Update the stock and save the inventory.`,
        description: `Prompt prefilled in Side Chat after choosing the inventory sample on the ChatGPT browser extension setup page. Asks ChatGPT to mark the three existing fictional products as sold out, add five desk mousepads, and save the sample inventory. Preserve the quantities. The user must send the prompt to start the demo.`,
      })),
      (t[15] = r),
      (t[16] = p));
  let m;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, q.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.inventory.title`,
        defaultMessage: `Update an inventory system`,
        description: `Short heading of the fictional inventory-editing task on the ChatGPT browser extension setup page.`,
      })),
      (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] !== n || t[19] !== p
    ? ((h = (0, q.jsx)(je, { description: f, kind: `inventory`, onTry: n, prompt: p, title: m })),
      (t[18] = n),
      (t[19] = p),
      (t[20] = h))
    : (h = t[20]);
  let g;
  return (
    t[21] !== h || t[22] !== s || t[23] !== d
      ? ((g = (0, q.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col gap-3 overflow-y-auto select-none`,
          children: [s, d, h],
        })),
        (t[21] = h),
        (t[22] = s),
        (t[23] = d),
        (t[24] = g))
      : (g = t[24]),
    g
  );
}
function je(e) {
  let t = (0, Me.c)(52),
    { description: n, kind: a, onTry: o, prompt: s, title: c } = e,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { email: r, report: F, inventory: g }), (t[0] = l))
    : (l = t[0]);
  let d = l,
    f,
    m,
    h,
    _,
    v,
    y,
    b,
    x;
  if (t[1] !== a) {
    let e = {
        email: `bg-yellow/10 text-yellow`,
        report: `bg-blue/10 text-blue`,
        inventory: `bg-green/10 text-green`,
      },
      n;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = {
          email: { light: be, dark: ve },
          report: { light: Oe, dark: Ee },
          inventory: { light: we, dark: Se },
        }),
        (t[10] = n))
      : (n = t[10]);
    let r = n;
    ((f = d[a]),
      (y = `flex flex-1 flex-col gap-3 rounded-2xl border border-default bg-gray-50 p-3 sm:flex-row sm:items-center lg:gap-6 dark:bg-gray-100`),
      (b = `extension-onboarding-sample-${a}`));
    let i = r[a],
      o;
    t[11] === i.light
      ? (o = t[12])
      : ((o = (0, q.jsx)(`img`, {
          className: `absolute inset-0 h-full w-full object-contain dark:hidden`,
          alt: ``,
          src: i.light,
        })),
        (t[11] = i.light),
        (t[12] = o));
    let s = r[a],
      c;
    (t[13] === s.dark
      ? (c = t[14])
      : ((c = (0, q.jsx)(`img`, {
          className: `absolute inset-0 hidden h-full w-full object-contain dark:block`,
          alt: ``,
          src: s.dark,
        })),
        (t[13] = s.dark),
        (t[14] = c)),
      t[15] !== o || t[16] !== c
        ? ((x = (0, q.jsxs)(`div`, {
            className: `relative h-52 min-h-0 w-full shrink-0 sm:h-full sm:max-h-52 sm:w-1/4 xl:w-72`,
            "aria-hidden": `true`,
            children: [o, c],
          })),
          (t[15] = o),
          (t[16] = c),
          (t[17] = x))
        : (x = t[17]),
      (v = `flex min-w-0 flex-1 flex-col gap-3`),
      (_ = `flex flex-col gap-2`),
      (h = `flex items-center gap-3`),
      (m = p(`flex size-7 shrink-0 items-center justify-center rounded-md`, e[a])),
      (t[1] = a),
      (t[2] = f),
      (t[3] = m),
      (t[4] = h),
      (t[5] = _),
      (t[6] = v),
      (t[7] = y),
      (t[8] = b),
      (t[9] = x));
  } else ((f = t[2]), (m = t[3]), (h = t[4]), (_ = t[5]), (v = t[6]), (y = t[7]), (b = t[8]), (x = t[9]));
  let S;
  t[18] === f ? (S = t[19]) : ((S = (0, q.jsx)(f, {})), (t[18] = f), (t[19] = S));
  let C;
  t[20] !== m || t[21] !== S
    ? ((C = (0, q.jsx)(`span`, { className: m, children: S })), (t[20] = m), (t[21] = S), (t[22] = C))
    : (C = t[22]);
  let w = `extension-onboarding-sample-${a}`,
    T;
  t[23] !== w || t[24] !== c
    ? ((T = (0, q.jsx)(`h3`, { id: w, className: `text-heading-lg leading-7 font-medium`, children: c })),
      (t[23] = w),
      (t[24] = c),
      (t[25] = T))
    : (T = t[25]);
  let E;
  t[26] !== C || t[27] !== T || t[28] !== h
    ? ((E = (0, q.jsxs)(`div`, { className: h, children: [C, T] })),
      (t[26] = C),
      (t[27] = T),
      (t[28] = h),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] === n
    ? (D = t[31])
    : ((D = (0, q.jsx)(`p`, {
        className: `body-md leading-6 text-secondary sm:ps-10 dark:text-default`,
        children: n,
      })),
      (t[30] = n),
      (t[31] = D));
  let O;
  t[32] !== E || t[33] !== D || t[34] !== _
    ? ((O = (0, q.jsxs)(`div`, { className: _, children: [E, D] })),
      (t[32] = E),
      (t[33] = D),
      (t[34] = _),
      (t[35] = O))
    : (O = t[35]);
  let k;
  t[36] !== a || t[37] !== o || t[38] !== s
    ? ((k = () => {
        (window.dispatchEvent(
          new CustomEvent(u, {
            cancelable: !0,
            detail: {
              type: i,
              source: `chatgpt_website_onboarding`,
              prompt: s,
              mode: a === `email` || a === `inventory` ? `work` : void 0,
            },
          }),
        ),
          o(a));
      }),
      (t[36] = a),
      (t[37] = o),
      (t[38] = s),
      (t[39] = k))
    : (k = t[39]);
  let A;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, q.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.button.try`,
        defaultMessage: `Try this demo`,
        description: `Button on each fictional sample task card on the ChatGPT browser extension setup page. Opens the sample in this tab and prefills its prompt in Side Chat without submitting it.`,
      })),
      (t[40] = A))
    : (A = t[40]);
  let M;
  t[41] === k
    ? (M = t[42])
    : ((M = (0, q.jsx)(j, {
        className: `w-full justify-center`,
        color: `outlineGhost`,
        onClick: k,
        radius: `full`,
        size: `beaconAction`,
        type: `button`,
        children: A,
      })),
      (t[41] = k),
      (t[42] = M));
  let N;
  t[43] !== O || t[44] !== M || t[45] !== v
    ? ((N = (0, q.jsxs)(`div`, { className: v, children: [O, M] })),
      (t[43] = O),
      (t[44] = M),
      (t[45] = v),
      (t[46] = N))
    : (N = t[46]);
  let P;
  return (
    t[47] !== N || t[48] !== y || t[49] !== b || t[50] !== x
      ? ((P = (0, q.jsxs)(`article`, { className: y, "aria-labelledby": b, children: [x, N] })),
        (t[47] = N),
        (t[48] = y),
        (t[49] = b),
        (t[50] = x),
        (t[51] = P))
      : (P = t[51]),
    P
  );
}
var Me, q;
function Ne() {
  return (Ne = e(() => {
    ((Me = v()), w(), m(), A(), ye(), xe(), Ce(), Te(), De(), ke(), M(), S(), (q = f()));
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
  let u;
  t[5] === a
    ? (u = t[6])
    : ((u = (0, Re.jsx)(b, { title: (0, Re.jsx)(R, { className: `pe-8 select-none`, children: a }) })),
      (t[5] = a),
      (t[6] = u));
  let d;
  t[7] !== n || t[8] !== u
    ? ((d = (0, Re.jsxs)(`div`, { className: `flex flex-col gap-5`, children: [u, n] })),
      (t[7] = n),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== c || t[11] !== d
    ? ((f = (0, Re.jsx)(l, { as: `form`, onSubmit: c, size: `viewport`, children: d })),
      (t[10] = c),
      (t[11] = d),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== s || t[14] !== f
      ? ((p = (0, Re.jsx)(k, {
          open: !0,
          contentProps: o,
          onOpenChange: s,
          size: `xwide`,
          variant: `chatgpt`,
          children: f,
        })),
        (t[13] = s),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
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
    ((Le = v()), d(), c(), (Re = f()));
  }))();
}
function Be(e) {
  let t = (0, Ve.c)(21),
    { onClose: n } = e,
    r = L(),
    [i, a] = (0, He.useState)(!1),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = () => a(!0)), (t[0] = o)) : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.email.modal.title.sender_name`,
        defaultMessage: `Reply to {senderName}'s message`,
        values: { senderName: `Samuel` },
        description: `Title of the editable fictional email task in browser extension onboarding. The senderName placeholder is the sender’s display name, Samuel, and must not be translated.`,
      })),
      (t[1] = s))
    : (s = t[1]);
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, J.jsx)(`header`, {
        className: `border-b border-default bg-surface-secondary px-5 py-4 text-base font-medium text-secondary select-none`,
        children: (0, J.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.email.modal.inbox.label`,
          defaultMessage: `Inbox`,
          description: `Decorative header of the fictional email application in extension onboarding; does not open a real inbox`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(`h3`, {
        id: `work-chrome-sample-email-subject`,
        className: `text-xl font-semibold text-default`,
        children: (0, J.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.email.modal.subject`,
          defaultMessage: `What should I pack for San Francisco?`,
          description: `Subject of Samuel's fictional email asking what to pack for a San Francisco visit`,
        }),
      })),
      (t[3] = l))
    : (l = t[3]);
  let u, d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          l,
          (0, J.jsx)(`p`, {
            className: `text-sm leading-6 text-secondary`,
            children: (0, J.jsx)(z, {
              id: `chatgpt.work.chrome.installed.sample_work.email.modal.recipient`,
              defaultMessage: `To: {recipientName} · {recipientEmail}`,
              description: `Fictional email recipient metadata; recipientName is Samuel and recipientEmail is samuel@northstar.co`,
              values: { recipientEmail: `samuel@northstar.co`, recipientName: `Samuel` },
            }),
          }),
        ],
      })),
      (d = (0, J.jsx)(`hr`, { className: `border-default` })),
      (t[4] = u),
      (t[5] = d))
    : ((u = t[4]), (d = t[5]));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(`p`, {
        className: `text-sm leading-6 whitespace-pre-line text-secondary`,
        children: (0, J.jsx)(z, {
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
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: `work-chrome-sample-email-draft`,
        children: (0, J.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.email.modal.draft.label`,
          defaultMessage: `Draft reply`,
          description: `Accessible label for the editable fictional email reply; this field never sends an email`,
        }),
      })),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = () => a(!1)), (t[8] = m)) : (m = t[8]);
  let h;
  t[9] === r
    ? (h = t[10])
    : ((h = r.formatMessage({
        id: `chatgpt.work.chrome.installed.sample_work.email.modal.reply.placeholder`,
        defaultMessage: `Reply`,
        description: `Placeholder for the fictional email reply composer`,
      })),
      (t[9] = r),
      (t[10] = h));
  let g;
  t[11] === h
    ? (g = t[12])
    : ((g = (0, J.jsx)(ne, {
        id: `work-chrome-sample-email-draft`,
        autoResize: !0,
        name: `work-chrome-sample-email-draft`,
        onChange: m,
        placeholder: h,
        rows: 10,
        variant: `feedback`,
      })),
      (t[11] = h),
      (t[12] = g));
  let _;
  t[13] === i
    ? (_ = t[14])
    : ((_ = (0, J.jsx)(`div`, {
        className: `flex justify-end select-none`,
        children: i
          ? (0, J.jsx)(`span`, {
              role: `status`,
              children: (0, J.jsxs)(ce, {
                className: `gap-1`,
                variant: `success`,
                children: [
                  (0, J.jsx)(B, {}),
                  (0, J.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.email.modal.status.done`,
                    defaultMessage: `Done`,
                    description: `Confirmation that the fictional reply is complete; no email was sent`,
                  }),
                ],
              }),
            })
          : (0, J.jsx)(j, {
              color: `primary`,
              size: `medium`,
              type: `submit`,
              children: (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.email.modal.button.done`,
                defaultMessage: `Done`,
                description: `Marks the sample reply complete without sending an email or closing the dialog`,
              }),
            }),
      })),
      (t[13] = i),
      (t[14] = _));
  let v;
  t[15] !== g || t[16] !== _
    ? ((v = (0, J.jsxs)(`section`, {
        "aria-labelledby": `work-chrome-sample-email-subject`,
        className: `flex flex-col overflow-hidden rounded-xl border border-default`,
        children: [
          c,
          (0, J.jsxs)(`div`, {
            className: `flex flex-col gap-5 p-5 select-text`,
            children: [
              u,
              d,
              f,
              (0, J.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [p, g, _] }),
            ],
          }),
        ],
      })),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v))
    : (v = t[17]);
  let y;
  return (
    t[18] !== n || t[19] !== v
      ? ((y = (0, J.jsx)(Pe, { onClose: n, onSubmit: o, title: s, children: v })),
        (t[18] = n),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
var Ve, He, J;
function Ue() {
  return (Ue = e(() => {
    ((Ve = v()), (He = s()), A(), te(), M(), S(), V(), ze(), (J = f()));
  }))();
}
function We(e) {
  let t = (0, Ze.c)(43),
    { onClose: n } = e,
    r = L(),
    [i, a] = (0, Qe.useState)($e),
    [o, s] = (0, Qe.useState)(!1),
    c,
    l;
  if (t[0] !== i) {
    let e = i.find(Ye);
    ((c = e !== void 0), (l = e != null && e.name.trim().length > 0), (t[0] = i), (t[1] = c), (t[2] = l));
  } else ((c = t[1]), (l = t[2]));
  let u = l,
    d;
  t[3] === u
    ? (d = t[4])
    : ((d = () => {
        u && (a(qe), s(!0));
      }),
      (t[3] = u),
      (t[4] = d));
  let f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(z, {
        id: `chatgpt.work.chrome.installed.sample_work.inventory.modal.title`,
        defaultMessage: `Update an inventory system`,
        description: `Title of the interactive sample ecommerce inventory modal opened from the Update an inventory system sample-work card on the ChatGPT Chrome extension onboarding screen. It introduces a task where three sold-out products are updated and one desk mousepad is added.`,
      })),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Y.jsx)(`h3`, {
        id: `work-chrome-sample-inventory-heading`,
        className: `text-xl leading-7 font-semibold text-default`,
        children: (0, Y.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.form.heading`,
          defaultMessage: `Inventory`,
          description: `Heading above the sample ecommerce inventory form inside the ChatGPT Chrome extension onboarding inventory modal. It identifies the editable product and stock information shown below.`,
        }),
      })),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsxs)(`div`, {
        className: `min-w-0`,
        children: [
          p,
          (0, Y.jsx)(`p`, {
            className: `text-sm leading-6 text-secondary`,
            children: (0, Y.jsx)(z, {
              id: `chatgpt.work.chrome.installed.sample_work.inventory.form.metadata`,
              defaultMessage: `Ecommerce store · Today`,
              description: `Short metadata line below the Inventory heading in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. It identifies the fictional ecommerce store and indicates that the displayed inventory is for today. Preserve an appropriate localized separator.`,
            }),
          }),
        ],
      })),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] === o
    ? (h = t[9])
    : ((h = o
        ? (0, Y.jsx)(`span`, {
            role: `status`,
            children: (0, Y.jsxs)(ce, {
              className: `gap-1`,
              variant: `success`,
              children: [
                (0, Y.jsx)(B, {}),
                (0, Y.jsx)(z, {
                  id: `chatgpt.work.chrome.installed.sample_work.inventory.status.saved`,
                  defaultMessage: `Saved`,
                  description: `Short green confirmation badge in the header of the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. It appears only after the sold-out product updates and newly added desk mousepad have been saved. Keep the label short.`,
                }),
              ],
            }),
          })
        : null),
      (t[8] = o),
      (t[9] = h));
  let g;
  t[10] === h
    ? (g = t[11])
    : ((g = (0, Y.jsxs)(`header`, {
        className: `flex min-w-0 items-start justify-between gap-3`,
        children: [m, h],
      })),
      (t[10] = h),
      (t[11] = g));
  let _;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Y.jsx)(`hr`, { className: `border-default` })), (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Y.jsx)(`h3`, {
        className: `text-sm leading-6 font-semibold text-default`,
        children: (0, Y.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.products.heading`,
          defaultMessage: `Products`,
          description: `Heading directly above the editable sample product inventory table inside the ChatGPT Chrome extension onboarding inventory modal. It introduces the list of products, stock quantities, and product statuses.`,
        }),
      })),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(`caption`, {
        className: `sr-only`,
        children: (0, Y.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.table.caption`,
          defaultMessage: `Sample ecommerce products, stock quantities, and statuses`,
          description: `Screen-reader-only caption for the editable sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. It explains that the table contains product names, numeric stock quantities, and product statuses.`,
        }),
      })),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(`th`, {
        className: `px-3 py-2.5 text-start font-medium`,
        scope: `col`,
        children: (0, Y.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.product`,
          defaultMessage: `Product`,
          description: `Short column header for product names and stock-keeping unit identifiers in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.`,
        }),
      })),
      (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(`th`, {
        id: `work-chrome-sample-inventory-stock-heading`,
        className: `w-20 px-2 py-2.5 text-start font-medium sm:w-24`,
        scope: `col`,
        children: (0, Y.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.stock`,
          defaultMessage: `Stock`,
          description: `Short column header for editable numeric product quantities in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.`,
        }),
      })),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Y.jsx)(`thead`, {
        className: `bg-surface-secondary text-xs leading-5 font-medium text-secondary select-none`,
        children: (0, Y.jsxs)(`tr`, {
          children: [
            b,
            x,
            (0, Y.jsx)(`th`, {
              className: `w-24 px-2 py-2.5 text-start font-medium sm:w-28`,
              scope: `col`,
              children: (0, Y.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.status`,
                defaultMessage: `Status`,
                description: `Short column header for the Sold out, New, and In stock product-status badges in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.`,
              }),
            }),
          ],
        }),
      })),
      (t[17] = S))
    : (S = t[17]);
  let C;
  if (t[18] !== r || t[19] !== i) {
    let e;
    (t[21] === r
      ? (e = t[22])
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
                              children: (0, Y.jsx)(z, {
                                id: `chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.label`,
                                defaultMessage: `Product name`,
                                description: `Screen-reader label for the editable name of a newly added product in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. The user or ChatGPT enters the name before saving the inventory.`,
                              }),
                            }),
                            (0, Y.jsx)(W, {
                              id: t,
                              name: `new-product-name`,
                              onChange: (e) => {
                                let t = e.currentTarget.value;
                                (a((e) => e.map((e) => (e.kind === `new_product` ? { ...e, name: t } : e))),
                                  s(!1));
                              },
                              onFocus: Ke,
                              placeholder: r.formatMessage({
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
                          ? (0, Y.jsx)(z, {
                              id: `chatgpt.work.chrome.installed.sample_work.inventory.product.new.description`,
                              defaultMessage: `New product`,
                              description: `Short secondary text beneath a newly added product in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It indicates that the product has just been created and does not yet have a stock-keeping unit.`,
                            })
                          : (0, Y.jsx)(z, {
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
                  children: (0, Y.jsx)(W, {
                    "aria-labelledby": `${t} work-chrome-sample-inventory-stock-heading`,
                    inputMode: `numeric`,
                    min: 0,
                    name: `stock-${e.kind}`,
                    onChange: (t) => {
                      let n = Math.max(0, Math.trunc(t.currentTarget.valueAsNumber || 0));
                      (a((t) => t.map((t) => (t.kind === e.kind ? { ...t, stock: n } : t))), s(!1));
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
        (t[21] = r),
        (t[22] = e)),
      (C = i.map(e)),
      (t[18] = r),
      (t[19] = i),
      (t[20] = C));
  } else C = t[20];
  let w;
  t[23] === C
    ? (w = t[24])
    : ((w = (0, Y.jsx)(`div`, {
        className: `overflow-x-auto rounded-xl border border-default`,
        children: (0, Y.jsxs)(`table`, {
          className: `w-full border-collapse text-start`,
          children: [y, S, (0, Y.jsx)(`tbody`, { children: C })],
        }),
      })),
      (t[23] = C),
      (t[24] = w));
  let T;
  t[25] === c
    ? (T = t[26])
    : ((T = c
        ? null
        : (0, Y.jsxs)(j, {
            className: `self-start`,
            color: `secondary`,
            onClick: () => {
              (a(Ge), s(!1));
            },
            size: `compact`,
            type: `button`,
            children: [
              (0, Y.jsx)(O, {}),
              (0, Y.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.button.add`,
                defaultMessage: `Add`,
                description: `Short button label below the sample ecommerce inventory table in the ChatGPT Chrome extension onboarding inventory modal. Clicking the button adds one empty, editable product with a starting stock quantity of zero and focuses its product-name field. Keep the label concise.`,
              }),
            ],
          })),
      (t[25] = c),
      (t[26] = T));
  let E;
  t[27] !== w || t[28] !== T
    ? ((E = (0, Y.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-3`, children: [v, w, T] })),
      (t[27] = w),
      (t[28] = T),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] !== E || t[31] !== g
    ? ((D = (0, Y.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, children: [g, _, E] })),
      (t[30] = E),
      (t[31] = g),
      (t[32] = D))
    : (D = t[32]);
  let k;
  t[33] !== u || t[34] !== o
    ? ((k = o
        ? null
        : (0, Y.jsxs)(`footer`, {
            className: `flex shrink-0 items-center justify-end gap-2 select-none`,
            children: [
              (0, Y.jsx)(j, {
                color: `ghost`,
                onClick: () => {
                  (a($e), s(!1));
                },
                size: `medium`,
                type: `button`,
                children: (0, Y.jsx)(z, {
                  id: `chatgpt.work.chrome.installed.sample_work.inventory.button.undo`,
                  defaultMessage: `Undo`,
                  description: `Short secondary button label in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. Clicking the button removes the newly added product, restores the original positive stock quantities for the three existing products, and clears the saved confirmation.`,
                }),
              }),
              (0, Y.jsx)(j, {
                disabled: !u,
                color: `primary`,
                size: `medium`,
                type: `submit`,
                children: (0, Y.jsx)(z, {
                  id: `chatgpt.work.chrome.installed.sample_work.inventory.button.done`,
                  defaultMessage: `Done`,
                  description: `Short primary button label in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. After a new product has been named, clicking the button saves the updated product quantities and new product. Keep the label short.`,
                }),
              }),
            ],
          })),
      (t[33] = u),
      (t[34] = o),
      (t[35] = k))
    : (k = t[35]);
  let A;
  t[36] !== D || t[37] !== k
    ? ((A = (0, Y.jsxs)(`section`, {
        "aria-labelledby": `work-chrome-sample-inventory-heading`,
        className: `flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-default p-5 select-text`,
        children: [D, k],
      })),
      (t[36] = D),
      (t[37] = k),
      (t[38] = A))
    : (A = t[38]);
  let M;
  return (
    t[39] !== n || t[40] !== d || t[41] !== A
      ? ((M = (0, Y.jsx)(Pe, { onClose: n, onSubmit: d, title: f, children: A })),
        (t[39] = n),
        (t[40] = d),
        (t[41] = A),
        (t[42] = M))
      : (M = t[42]),
    M
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
        ? ((e = (0, Y.jsxs)(ce, {
            className: `gap-1`,
            variant: `tip`,
            children: [
              (0, Y.jsx)(O, {}),
              (0, Y.jsx)(z, {
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
        ? ((e = (0, Y.jsxs)(ce, {
            className: `gap-1`,
            variant: `success`,
            children: [
              (0, Y.jsx)(B, {}),
              (0, Y.jsx)(z, {
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
      ? ((r = (0, Y.jsx)(ce, {
          variant: `outline`,
          children: (0, Y.jsx)(z, {
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
    ((Ze = v()),
      (Qe = s()),
      A(),
      te(),
      M(),
      S(),
      V(),
      ze(),
      (Y = f()),
      ($e = [
        {
          kind: `wireless_keyboard`,
          name: (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.product.wireless_keyboard.label`,
            defaultMessage: `Wireless keyboard`,
            description: `Product name in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. This is one of the three existing products that the sample task marks as sold out. Keep the label concise so it fits in a table row.`,
          }),
          sku: `KEY-2048`,
          stock: 12,
        },
        {
          kind: `usb_c_hub`,
          name: (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.product.usb_c_hub.label`,
            defaultMessage: `USB-C hub`,
            description: `Product name in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. This is one of the three existing products that the sample task marks as sold out. Preserve the standard USB-C product terminology and keep the label concise.`,
          }),
          sku: `HUB-1180`,
          stock: 21,
        },
        {
          kind: `laptop_stand`,
          name: (0, Y.jsx)(z, {
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
    ? ((r = (0, X.jsx)(z, {
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
        children: (0, X.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.report.modal.document.title`,
          defaultMessage: `Q2 customer research synthesis`,
          description: `Document title of the fictional second-quarter customer research report displayed inside the ChatGPT Chrome extension onboarding sample report modal. Q2 means the second quarter of the year. Preserve its concise report-title style.`,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsxs)(`header`, {
        className: `flex flex-col gap-1 border-b border-default pb-5`,
        children: [
          i,
          (0, X.jsx)(`p`, {
            className: `text-sm leading-5 text-secondary`,
            children: (0, X.jsx)(z, {
              id: `chatgpt.work.chrome.installed.sample_work.report.modal.document.metadata`,
              defaultMessage: `Updated today · {pageCount, plural, one {# page} other {# pages}}`,
              description: `Document metadata shown under the fictional customer research report title in the ChatGPT Chrome extension onboarding sample report modal. Indicates that the document was updated today and contains {pageCount} pages; {pageCount} is the numeric page count. Keep the concise separator between the date and page count.`,
              values: { pageCount: 12 },
            }),
          }),
        ],
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(`h4`, {
        id: `work-chrome-sample-report-summary`,
        className: `text-base leading-6 font-semibold text-default`,
        children: (0, X.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.title`,
          defaultMessage: `Executive Summary`,
          description: `Heading introducing the two-paragraph executive summary in the fictional customer research report displayed in the ChatGPT Chrome extension onboarding sample report modal. Keep it concise and recognizable as a report section heading.`,
        }),
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(`p`, {
        className: `text-sm leading-6 text-secondary`,
        children: (0, X.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.activation`,
          defaultMessage: `Across interviews, teams reached value faster when setup focused on a few guided actions instead of a broad list of features. Participants who connected an existing workflow could start with familiar context and complete a meaningful task sooner.`,
          description: `First complete paragraph of the executive summary in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Explains that focused onboarding and connecting familiar workflows helped research participants complete a useful first task more quickly. Translate as one cohesive report paragraph.`,
        }),
      })),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsxs)(`section`, {
        "aria-labelledby": `work-chrome-sample-report-summary`,
        className: `flex flex-col gap-3`,
        children: [
          o,
          s,
          (0, X.jsx)(`p`, {
            className: `text-sm leading-6 text-secondary`,
            children: (0, X.jsx)(z, {
              id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.import_friction`,
              defaultMessage: `The main point of friction was uncertainty around imports. People wanted to know what would be brought over, what would remain unchanged, and whether they could review the result before continuing.`,
              description: `Second complete paragraph of the executive summary in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Explains that research participants wanted clarity and a chance to review data imports before continuing setup. Translate as one cohesive report paragraph.`,
            }),
          }),
        ],
      })),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(`h4`, {
        id: `work-chrome-sample-report-key-points`,
        className: `text-base leading-6 font-semibold text-default`,
        children: (0, X.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_points.title`,
          defaultMessage: `Key points`,
          description: `Heading introducing the three numbered Activation, Retention, and Decision findings in the fictional customer research report displayed in the ChatGPT Chrome extension onboarding sample report modal. Keep it short and recognizable as a report section heading.`,
        }),
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(`article`, {
        "aria-labelledby": `work-chrome-sample-report-title`,
        className: `flex w-full overflow-hidden rounded-xl border border-default select-text`,
        children: (0, X.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-6 p-5`,
          children: [
            a,
            c,
            (0, X.jsxs)(`section`, {
              "aria-labelledby": `work-chrome-sample-report-key-points`,
              className: `flex flex-col gap-3`,
              children: [l, (0, X.jsx)(`ol`, { className: `flex flex-col gap-3`, children: it.map(nt) })],
            }),
          ],
        }),
      })),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] === n
      ? (d = t[9])
      : ((d = (0, X.jsx)(Pe, { onClose: n, title: r, children: u })), (t[8] = n), (t[9] = d)),
    d
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
    ((rt = v()),
      A(),
      ze(),
      (X = f()),
      (it = [
        {
          number: `01`,
          title: (0, X.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.title`,
            defaultMessage: `Activation`,
            description: `Short heading for the first finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Activation means new users completing their first meaningful task. Keep the heading short enough for a compact report finding.`,
          }),
          detail: (0, X.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.description`,
            defaultMessage: `Faster setup lifted first-week completion by 18%`,
            description: `Evidence supporting the activation finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. It states that a faster setup increased the percentage of people who completed a meaningful task in their first week by 18 percent. Preserve the 18 percent figure.`,
          }),
          isRecommendation: !1,
        },
        {
          number: `02`,
          title: (0, X.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.title`,
            defaultMessage: `Retention`,
            description: `Short heading for the second finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Retention means users returning to use the product. Keep the heading short enough for a compact report finding.`,
          }),
          detail: (0, X.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.description`,
            defaultMessage: `Connected workflows correlate with higher return use`,
            description: `Evidence supporting the retention finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. It explains that users who connect an existing workflow tend to return to the product more frequently.`,
          }),
          isRecommendation: !1,
        },
        {
          number: `03`,
          title: (0, X.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.title`,
            defaultMessage: `Decision`,
            description: `Short heading for the final, visually highlighted recommendation in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Decision means the action recommended by the research. Keep the heading short enough for a compact report finding.`,
          }),
          detail: (0, X.jsx)(z, {
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
    ((yt = v()),
      (bt = s()),
      st(),
      lt(),
      dt(),
      pt(),
      ht(),
      _t(),
      (Z = f()),
      (xt = {
        "open-sidebar": { light: ct, dark: ot },
        "pin-menu": { light: ft, dark: ut },
        "pin-sidebar": { light: gt, dark: mt },
      }));
  }))();
}
function Ct() {
  let e = (0, Ot.c)(75),
    n = t(y),
    r = L(),
    { isExtensionPinned: i, isSidePanelOpen: a } = I(ge),
    o = wt(P()),
    s = o !== `Chrome`,
    c;
  e[0] !== i || e[1] !== a || e[2] !== s
    ? ((c = `sidebar`),
      a && i ? (c = `try`) : a && !s && (c = `pin`),
      (e[0] = i),
      (e[1] = a),
      (e[2] = s),
      (e[3] = c))
    : (c = e[3]);
  let [l, u] = (0, Q.useState)(null),
    [d, f] = (0, Q.useState)(!1),
    [m, h] = (0, Q.useState)(null),
    g = (0, Q.useRef)(null),
    _ = (0, Q.useRef)(null),
    v = l?.automaticStep === c ? l.selectedStep : c,
    b = a && i && v === `try`,
    x = m == null ? kt[v] : At[m],
    S;
  e[4] === n
    ? (S = e[5])
    : ((S = (e) => {
        de(n, { action: `step_viewed`, step: e });
      }),
      (e[4] = n),
      (e[5] = S));
  let C = (0, Q.useEffectEvent)(S),
    w;
  e[6] !== C || e[7] !== x
    ? ((w = () => {
        ((_.current ??= (C(`page`), `page`)), _.current !== x && (C(x), (_.current = x)));
      }),
      (e[6] = C),
      (e[7] = x),
      (e[8] = w))
    : (w = e[8]);
  let T;
  (e[9] === x ? (T = e[10]) : ((T = [x]), (e[9] = x), (e[10] = T)), (0, Q.useEffect)(w, T));
  let E;
  e[11] === h
    ? (E = e[12])
    : ((E = () => {
        (g.current?.close(), (g.current = null), h(null));
      }),
      (e[11] = h),
      (e[12] = E));
  let D = E,
    O = ue,
    k = r.formatMessage(
      {
        id: `chatgpt.work.chrome.installed.page.title.browser`,
        defaultMessage: `ChatGPT for {browser}`,
        description: `Browser-tab title for the extension setup page shown immediately after installation. The browser placeholder is a brand such as Chrome, Edge, Opera, or Vivaldi and should not be translated.`,
      },
      { browser: o },
    ),
    A;
  e[13] !== O || e[14] !== k
    ? ((A = (0, $.jsx)(O, { title: k })), (e[13] = O), (e[14] = k), (e[15] = A))
    : (A = e[15]);
  let j;
  e[16] === o
    ? (j = e[17])
    : ((j = (0, $.jsx)(`h1`, {
        className: `text-[clamp(32px,5.6vw,64px)] leading-none font-medium tracking-[-0.02em] select-none`,
        "aria-live": `polite`,
        children: (0, $.jsx)(z, {
          id: `chatgpt.work.chrome.installed.page.heading.browser`,
          defaultMessage: `Welcome to ChatGPT for {browser}`,
          description: `Welcome heading on the ChatGPT browser extension setup page immediately after installation. The browser placeholder is the current browser's brand name, such as Chrome or Edge, and must not be translated.`,
          values: { browser: o },
        }),
      })),
      (e[16] = o),
      (e[17] = j));
  let M;
  e[18] === b
    ? (M = e[19])
    : ((M = b
        ? (0, $.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.ready_announcement`,
            defaultMessage: `Try ChatGPT on sample work`,
            description: `Screen-reader announcement when browser extension setup completes or the user revisits the sample email, report, and inventory tasks. The visible welcome heading remains unchanged.`,
          })
        : null),
      (e[18] = b),
      (e[19] = M));
  let N;
  e[20] === M
    ? (N = e[21])
    : ((N = (0, $.jsx)(`span`, { "aria-live": `polite`, className: `sr-only`, children: M })),
      (e[20] = M),
      (e[21] = N));
  let F = b && `md:flex-row`,
    R;
  e[22] === F
    ? (R = e[23])
    : ((R = p(`flex min-h-0 min-w-0 flex-1 flex-col items-start gap-6 lg:flex-row`, F)),
      (e[22] = F),
      (e[23] = R));
  let B;
  e[24] !== c || e[25] !== n || e[26] !== u
    ? ((B = (e) => {
        (de(n, { action: `checklist_step_selected`, step: kt[e] }), u({ automaticStep: c, selectedStep: e }));
      }),
      (e[24] = c),
      (e[25] = n),
      (e[26] = u),
      (e[27] = B))
    : (B = e[27]);
  let V;
  e[28] !== o || e[29] !== i || e[30] !== d || e[31] !== a || e[32] !== v || e[33] !== B || e[34] !== s
    ? ((V = (0, $.jsx)(Tt, {
        browserName: o,
        isExtensionPinned: i,
        isSampleWorkCompleted: d,
        isSidePanelOpen: a,
        onSelectStep: B,
        selectedStep: v,
        usesMenuPinning: s,
      })),
      (e[28] = o),
      (e[29] = i),
      (e[30] = d),
      (e[31] = a),
      (e[32] = v),
      (e[33] = B),
      (e[34] = s),
      (e[35] = V))
    : (V = e[35]);
  let te = b && `md:min-h-0`,
    H;
  e[36] === te
    ? (H = e[37])
    : ((H = p(`min-h-40 min-w-0 flex-1 self-stretch lg:min-h-0`, te)), (e[36] = te), (e[37] = H));
  let U;
  e[38] !== b || e[39] !== n || e[40] !== h || e[41] !== f
    ? ((U = b
        ? (0, $.jsx)(Ae, {
            onTry: (e) => {
              (de(n, { action: `sample_selected`, step: At[e] }),
                f(!0),
                h(e),
                (g.current = n
                  .get(ee)
                  .success(
                    (0, $.jsx)(z, {
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
      (e[38] = b),
      (e[39] = n),
      (e[40] = h),
      (e[41] = f),
      (e[42] = U))
    : (U = e[42]);
  let ne;
  e[43] !== o || e[44] !== n || e[45] !== v || e[46] !== s
    ? ((ne =
        v === `try`
          ? null
          : (0, $.jsx)(Dt, {
              browserName: o,
              isPinStep: v === `pin` || s,
              onOpenSidebar: () => de(n, { action: `sidebar_clicked`, step: `open_sidebar` }),
            })),
      (e[43] = o),
      (e[44] = n),
      (e[45] = v),
      (e[46] = s),
      (e[47] = ne))
    : (ne = e[47]);
  let W;
  e[48] !== H || e[49] !== U || e[50] !== ne
    ? ((W = (0, $.jsxs)(`div`, { className: H, children: [U, ne] })),
      (e[48] = H),
      (e[49] = U),
      (e[50] = ne),
      (e[51] = W))
    : (W = e[51]);
  let G;
  e[52] !== R || e[53] !== V || e[54] !== W
    ? ((G = (0, $.jsxs)(`div`, { className: R, children: [V, W] })),
      (e[52] = R),
      (e[53] = V),
      (e[54] = W),
      (e[55] = G))
    : (G = e[55]);
  let re;
  e[56] !== G || e[57] !== j || e[58] !== N
    ? ((re = (0, $.jsxs)(`div`, {
        className: `flex min-h-0 w-full flex-1 flex-col gap-6`,
        children: [j, N, G],
      })),
      (e[56] = G),
      (e[57] = j),
      (e[58] = N),
      (e[59] = re))
    : (re = e[59]);
  let ie;
  e[60] !== m || e[61] !== D
    ? ((ie = m === `email` ? (0, $.jsx)(Be, { onClose: D }) : null), (e[60] = m), (e[61] = D), (e[62] = ie))
    : (ie = e[62]);
  let K;
  e[63] !== m || e[64] !== D
    ? ((K = m === `report` ? (0, $.jsx)(tt, { onClose: D }) : null), (e[63] = m), (e[64] = D), (e[65] = K))
    : (K = e[65]);
  let ae;
  e[66] !== m || e[67] !== D
    ? ((ae = m === `inventory` ? (0, $.jsx)(We, { onClose: D }) : null),
      (e[66] = m),
      (e[67] = D),
      (e[68] = ae))
    : (ae = e[68]);
  let oe;
  return (
    e[69] !== re || e[70] !== ie || e[71] !== K || e[72] !== ae || e[73] !== A
      ? ((oe = (0, $.jsxs)(`main`, {
          className: `flex h-dvh min-h-dvh w-full flex-col overflow-y-auto bg-surface p-5 font-openai-sans text-default sm:p-6`,
          children: [A, re, ie, K, ae],
        })),
        (e[69] = re),
        (e[70] = ie),
        (e[71] = K),
        (e[72] = ae),
        (e[73] = A),
        (e[74] = oe))
      : (oe = e[74]),
    oe
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
  let t = (0, Ot.c)(56),
    {
      browserName: n,
      isExtensionPinned: r,
      isSampleWorkCompleted: i,
      isSidePanelOpen: a,
      onSelectStep: o,
      selectedStep: s,
      usesMenuPinning: c,
    } = e,
    l = a && (!c || r),
    u;
  t[0] === c
    ? (u = t[1])
    : ((u = c
        ? (0, $.jsx)(z, {
            id: `chatgpt.work.chrome.installed.checklist.step.sidebar.open_and_pin`,
            defaultMessage: `Open and pin the extension`,
            description: `Selectable checklist step in ChatGPT browser extension setup for browsers such as Edge that pin from the Extensions menu. Opens the combined opening and pinning instructions.`,
          })
        : (0, $.jsx)(z, {
            id: `chatgpt.work.chrome.installed.checklist.step.sidebar.open_extension`,
            defaultMessage: `Open the extension in the sidebar`,
            description: `First selectable step in the ChatGPT browser extension setup checklist. Clicking it shows instructions for opening the installed extension in the browser sidebar. Keep this as a short action label.`,
          })),
      (t[0] = c),
      (t[1] = u));
  let d;
  t[2] !== l || t[3] !== u
    ? ((d = { step: `sidebar`, isCompleted: l, isEnabled: !0, label: u }), (t[2] = l), (t[3] = u), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(z, {
        id: `chatgpt.work.chrome.installed.checklist.step.pin`,
        defaultMessage: `Pin the extension`,
        description: `Second selectable step in the ChatGPT browser extension setup checklist. Opens toolbar-pinning instructions after the sidebar has opened. The user can revisit this step after completing it.`,
      })),
      (t[5] = f))
    : (f = t[5]);
  let m;
  t[6] !== r || t[7] !== a
    ? ((m = { step: `pin`, isCompleted: r, isEnabled: a, label: f }), (t[6] = r), (t[7] = a), (t[8] = m))
    : (m = t[8]);
  let h = a && r,
    g;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(z, {
        id: `chatgpt.work.chrome.installed.checklist.step.sample_work`,
        defaultMessage: `Try ChatGPT on sample work`,
        description: `Final selectable step in the ChatGPT browser extension setup checklist. Opens fictional email, report, and inventory tasks after the sidebar has opened and the extension is pinned.`,
      })),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== i || t[11] !== h
    ? ((_ = { step: `try`, isCompleted: i, isEnabled: h, label: g }), (t[10] = i), (t[11] = h), (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] !== d || t[14] !== m || t[15] !== _
    ? ((v = [d, m, _]), (t[13] = d), (t[14] = m), (t[15] = _), (t[16] = v))
    : (v = t[16]);
  let y = v,
    b;
  t[17] !== y || t[18] !== c
    ? ((b = y.filter((e) => {
        let { step: t } = e;
        return !c || t !== `pin`;
      })),
      (t[17] = y),
      (t[18] = c),
      (t[19] = b))
    : (b = t[19]);
  let x = b,
    S;
  t[20] === x ? (S = t[21]) : ((S = x.filter(Et)), (t[20] = x), (t[21] = S));
  let w = S.length,
    T,
    E,
    O,
    k,
    A,
    M,
    N;
  if (t[22] !== n || t[23] !== w || t[24] !== s || t[25] !== c) {
    let e = c ? [`w-0`, `w-1/2`, `w-full`] : [`w-0`, `w-1/3`, `w-2/3`, `w-full`],
      r = s === `try` && `md:w-72`;
    (t[33] === r
      ? (M = t[34])
      : ((M = p(`w-full shrink-0 rounded-2xl border border-default p-2.5 select-none lg:w-72 xl:w-96`, r)),
        (t[33] = r),
        (t[34] = M)),
      (N = `extension-onboarding-checklist-heading`),
      (k = `flex flex-col gap-4 px-1.5 py-3`),
      t[35] === n
        ? (A = t[36])
        : ((A = (0, $.jsx)(`h2`, {
            id: `extension-onboarding-checklist-heading`,
            className: `body-md leading-5 font-normal text-balance`,
            children: (0, $.jsx)(z, {
              id: `chatgpt.work.chrome.installed.checklist.heading.browser_name`,
              defaultMessage: `Set up your ChatGPT {browser} Extension`,
              description: `Heading above the ChatGPT browser extension setup checklist. Users open the sidebar, pin the extension, and try sample work. The browser placeholder is a brand name such as Chrome or Edge and must not be translated.`,
              values: { browser: n },
            }),
          })),
          (t[35] = n),
          (t[36] = A)),
      (E = `h-1.5 overflow-hidden rounded-full bg-text/10`),
      (O = `true`),
      (T = p(`h-full rounded-full bg-text`, e[w])),
      (t[22] = n),
      (t[23] = w),
      (t[24] = s),
      (t[25] = c),
      (t[26] = T),
      (t[27] = E),
      (t[28] = O),
      (t[29] = k),
      (t[30] = A),
      (t[31] = M),
      (t[32] = N));
  } else ((T = t[26]), (E = t[27]), (O = t[28]), (k = t[29]), (A = t[30]), (M = t[31]), (N = t[32]));
  let P;
  t[37] === T ? (P = t[38]) : ((P = (0, $.jsx)(`div`, { className: T })), (t[37] = T), (t[38] = P));
  let F;
  t[39] !== E || t[40] !== O || t[41] !== P
    ? ((F = (0, $.jsx)(`div`, { className: E, "aria-hidden": O, children: P })),
      (t[39] = E),
      (t[40] = O),
      (t[41] = P),
      (t[42] = F))
    : (F = t[42]);
  let I;
  t[43] !== k || t[44] !== A || t[45] !== F
    ? ((I = (0, $.jsxs)(`div`, { className: k, children: [A, F] })),
      (t[43] = k),
      (t[44] = A),
      (t[45] = F),
      (t[46] = I))
    : (I = t[46]);
  let L;
  t[47] !== o || t[48] !== s || t[49] !== x
    ? ((L = (0, $.jsx)(`ol`, {
        className: `flex list-none flex-col gap-2 py-2`,
        children: x.map((e) => {
          let { step: t, isCompleted: n, isEnabled: r, label: i } = e;
          return (0, $.jsxs)(
            `li`,
            {
              children: [
                (0, $.jsxs)(j, {
                  className: `min-h-8 w-full gap-1.5 rounded-button-action border border-transparent px-2 py-1.5 text-start body-md leading-5 font-normal text-default not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover pointer-coarse:min-h-10`,
                  "aria-current": s === t ? `step` : void 0,
                  "aria-disabled": !r || void 0,
                  disabledAppearance: `unchanged`,
                  onClick: (e) => {
                    if (!r) {
                      e.preventDefault();
                      return;
                    }
                    o(t);
                  },
                  type: `button`,
                  unstyled: !0,
                  children: [
                    n
                      ? (0, $.jsx)(C, { className: `text-success` })
                      : (0, $.jsx)(D, { className: `text-tertiary` }),
                    (0, $.jsx)(`span`, { className: `min-w-0 text-pretty whitespace-normal`, children: i }),
                    n
                      ? (0, $.jsx)(`span`, {
                          className: `sr-only`,
                          children: (0, $.jsx)(z, {
                            id: `chatgpt.work.chrome.installed.checklist.step.completed`,
                            defaultMessage: `Completed`,
                            description: `Screen-reader completion status after a completed step's label in the ChatGPT browser extension setup checklist. The completed step remains selectable.`,
                          }),
                        })
                      : null,
                  ],
                }),
                t === `try` && r && s === `try`
                  ? (0, $.jsx)(`p`, {
                      className: `ms-9 me-2 mt-1 body-sm leading-5 text-secondary`,
                      children: (0, $.jsx)(z, {
                        id: `chatgpt.work.chrome.installed.checklist.step.sample_work.description`,
                        defaultMessage: `Choose a demo to see ChatGPT work on this page`,
                        description: `Small subtitle under the selected Try ChatGPT on sample work checklist step on the browser extension setup page. Appears only while the sample gallery is active and explains that users can choose a fictional demo to see ChatGPT perform website actions on their behalf.`,
                      }),
                    })
                  : null,
              ],
            },
            t,
          );
        }),
      })),
      (t[47] = o),
      (t[48] = s),
      (t[49] = x),
      (t[50] = L))
    : (L = t[50]);
  let R;
  return (
    t[51] !== M || t[52] !== N || t[53] !== I || t[54] !== L
      ? ((R = (0, $.jsxs)(`aside`, { className: M, "aria-labelledby": N, children: [I, L] })),
        (t[51] = M),
        (t[52] = N),
        (t[53] = I),
        (t[54] = L),
        (t[55] = R))
      : (R = t[55]),
    R
  );
}
function Et(e) {
  return e.isCompleted;
}
function Dt(e) {
  let t = (0, Ot.c)(25),
    { browserName: n, isPinStep: r, onOpenSidebar: a } = e,
    o = L(),
    s = n !== `Chrome`,
    c,
    l;
  if (!r) {
    c = `open-sidebar`;
    let e;
    (t[0] !== n || t[1] !== o
      ? ((e = o.formatMessage(
          {
            id: `chatgpt.work.chrome.installed.sidebar.image.alt.browser_name`,
            defaultMessage: `The {browser} Extensions menu with ChatGPT selected`,
            description: `Accessible description of the opening illustration on the ChatGPT browser extension setup page. The browser placeholder is a brand name and must not be translated.`,
          },
          { browser: n },
        )),
        (t[0] = n),
        (t[1] = o),
        (t[2] = e))
      : (e = t[2]),
      (l = e));
  } else if (s) {
    c = `pin-menu`;
    let e;
    (t[3] !== n || t[4] !== o
      ? ((e = o.formatMessage(
          {
            id: `chatgpt.work.chrome.installed.pin.image.alt.browser_name`,
            defaultMessage: `The {browser} Extensions menu showing how to pin ChatGPT to the toolbar`,
            description: `Accessible description of the toolbar-pinning illustration on the ChatGPT browser extension setup page. The browser placeholder is a brand name and must not be translated.`,
          },
          { browser: n },
        )),
        (t[3] = n),
        (t[4] = o),
        (t[5] = e))
      : (e = t[5]),
      (l = e));
  } else {
    c = `pin-sidebar`;
    let e;
    (t[6] === o
      ? (e = t[7])
      : ((e = o.formatMessage({
          id: `chatgpt.work.chrome.installed.pin.image.alt.sidebar`,
          defaultMessage: `The pin button at the top of the ChatGPT sidebar adds the extension to the Chrome toolbar`,
          description: `Accessible description of the pinning illustration shown after the ChatGPT sidebar opens in Chrome. Helps the user locate the pin button in the sidebar header.`,
        })),
        (t[6] = o),
        (t[7] = e)),
      (l = e));
  }
  let d;
  if (s) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(z, {
          id: `chatgpt.work.chrome.installed.pin.description.open_and_pin`,
          defaultMessage: `Pin ChatGPT in the Extensions menu, then click ChatGPT in your toolbar to open the sidebar`,
          description: `Instructions for the combined opening and pinning step in browsers such as Edge. Users pin ChatGPT from Extensions and then open the sidebar from the newly pinned toolbar icon.`,
        })),
        (t[8] = e))
      : (e = t[8]),
      (d = e));
  } else if (r) {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(z, {
          id: `chatgpt.work.chrome.installed.pin.description`,
          defaultMessage: `Pin the extension so you can open ChatGPT quickly from any tab`,
          description: `Body beneath the toolbar-pinning illustration on the ChatGPT browser extension setup page. Explains that pinning makes the extension easy to access from any browser tab.`,
        })),
        (t[9] = e))
      : (e = t[9]),
      (d = e));
  } else {
    let e;
    (t[10] === n
      ? (e = t[11])
      : ((e = (0, $.jsx)(z, {
          id: `chatgpt.work.chrome.installed.sidebar.description.browser_name`,
          defaultMessage: `Click the Extensions icon in your {browser} toolbar, then select ChatGPT. Or click the sidebar button below.`,
          description: `Instructions for opening ChatGPT through the Extensions menu or the button below on the browser extension setup page. The browser placeholder is a brand name and must not be translated.`,
          values: { browser: n },
        })),
        (t[10] = n),
        (t[11] = e)),
      (d = e));
  }
  let f;
  t[12] !== n || t[13] !== r
    ? ((f = r
        ? (0, $.jsx)(z, {
            id: `chatgpt.work.chrome.installed.pin.heading.browser_name`,
            defaultMessage: `Add ChatGPT to your {browser} toolbar`,
            description: `Heading on the pinning step of the ChatGPT browser extension setup page. The browser placeholder is the browser brand name, such as Chrome or Edge, and must not be translated.`,
            values: { browser: n },
          })
        : (0, $.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sidebar.heading`,
            defaultMessage: `Open the ChatGPT extension`,
            description: `Heading on the first step of the ChatGPT browser extension setup page. Invites the user to open the extension in their browser sidebar.`,
          })),
      (t[12] = n),
      (t[13] = r),
      (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] !== r || t[16] !== a || t[17] !== s
    ? ((p =
        !r && !s
          ? (0, $.jsxs)(j, {
              className: `min-h-16 justify-center gap-2 rounded-full border border-transparent bg-text/5 px-6 py-4 text-heading-md leading-7 font-medium text-default not-disabled:not-aria-disabled:hover:bg-text/10 data-[state=open]:bg-text/10`,
              onClick: () => {
                (window.dispatchEvent(
                  new CustomEvent(u, {
                    cancelable: !0,
                    detail: { type: i, source: `chatgpt_website_onboarding` },
                  }),
                ),
                  a());
              },
              type: `button`,
              unstyled: !0,
              children: [
                (0, $.jsx)(_, {}),
                (0, $.jsx)(`span`, {
                  className: `min-w-0 whitespace-normal`,
                  children: (0, $.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sidebar.button.open`,
                    defaultMessage: `Open sidebar`,
                    description: `Button on the first ChatGPT browser extension setup step that opens Side Chat in the current browser window.`,
                  }),
                }),
              ],
            })
          : null),
      (t[15] = r),
      (t[16] = a),
      (t[17] = s),
      (t[18] = p))
    : (p = t[18]);
  let m;
  return (
    t[19] !== d || t[20] !== c || t[21] !== l || t[22] !== f || t[23] !== p
      ? ((m = (0, $.jsx)(vt, { image: c, imageAlt: l, title: f, description: d, children: p })),
        (t[19] = d),
        (t[20] = c),
        (t[21] = l),
        (t[22] = f),
        (t[23] = p),
        (t[24] = m))
      : (m = t[24]),
    m
  );
}
var Ot, Q, $, kt, At;
function jt() {
  return (jt = e(() => {
    ((Ot = v()),
      w(),
      m(),
      N(),
      (Q = s()),
      A(),
      M(),
      S(),
      E(),
      le(),
      n(),
      me(),
      _e(),
      Ne(),
      Ue(),
      et(),
      at(),
      St(),
      ($ = f()),
      (kt = { sidebar: `open_sidebar`, pin: `pin_extension`, try: `sample_gallery` }),
      (At = { email: `sample_email`, report: `sample_report`, inventory: `sample_inventory` }));
  }))();
}
function Mt(e) {
  let t = (0, Nt.c)(5),
    { authMethod: n } = re(),
    r = T(),
    i = a(r);
  if (n == null) {
    let e;
    t[0] === i ? (e = t[1]) : ((e = new URLSearchParams({ next: i })), (t[0] = i), (t[1] = e));
    let n = `/auth/login?${e}`,
      r;
    return (
      t[2] === n ? (r = t[3]) : ((r = (0, Pt.jsx)(x, { to: n, replace: !0 })), (t[2] = n), (t[3] = r)),
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
    ((Nt = v()), h(), ie(), jt(), (Pt = f()));
  }))();
}
Ft();
export { Mt as ExtensionInstalledPage };
//# sourceMappingURL=route-df99720f0eef.js.map
