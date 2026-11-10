import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Mz as r,
  Nz as i,
  Pxt as a,
  SJ as o,
  TJ as s,
  VDt as c,
  _Mt as l,
  bx as u,
  e3 as d,
  gMt as f,
  iO as p,
  if as m,
  jDt as h,
  nf as g,
  rO as _,
  rf as v,
  t3 as y,
  tf as b,
  vzt as x,
  xMt as S,
  yx as C,
  yzt as w,
  zxt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  JPn as E,
  XPn as D,
  abn as O,
  b5 as ee,
  cbn as te,
  dbn as k,
  fbn as A,
  hbn as j,
  mbn as ne,
  n7 as re,
  obn as ie,
  pbn as ae,
  r7 as M,
  x5 as N,
} from "./app-initial-5851df3f6cb1.js";
import { n as P, o as F, r as I, s as L, t as R } from "./text-message-instructions-c51c87e9d826.js";
var z;
function B() {
  return (B = e(() => {
    z = `` + new URL(`microsoft-teams-4b573a2cd78d.svg`, import.meta.url).href;
  }))();
}
var V, H, U, W, G, K, q, J, oe, se, ce, le, ue, de, fe, pe, me, he, ge, Y;
function X() {
  return (X = e(() => {
    ((V = `_phone_1hlbp_4`),
      (H = `_phoneScreen_1hlbp_17`),
      (U = `_phoneStatusBar_1hlbp_26`),
      (W = `_phoneStatus_1hlbp_26`),
      (G = `_phoneSignal_1hlbp_47`),
      (K = `_phoneBattery_1hlbp_72`),
      (q = `_message_1hlbp_94`),
      (J = `_messageHeader_1hlbp_106`),
      (oe = `_messageHeading_1hlbp_116`),
      (se = `_messageBrandIcon_1hlbp_124`),
      (ce = `_messageSend_1hlbp_128`),
      (le = `_messageRecipients_1hlbp_135`),
      (ue = `_messageRecipient_1hlbp_135`),
      (de = `_messageAvatar_1hlbp_160`),
      (fe = `_messageRemove_1hlbp_166`),
      (pe = `_messageSubject_1hlbp_170`),
      (me = `_messageBody_1hlbp_180`),
      (he = `_emailBody_1hlbp_186`),
      (ge = `_slackBody_1hlbp_193`),
      (Y = {
        phone: V,
        phoneScreen: H,
        phoneStatusBar: U,
        phoneStatus: W,
        phoneSignal: G,
        phoneBattery: K,
        message: q,
        messageHeader: J,
        messageHeading: oe,
        messageBrandIcon: se,
        messageSend: ce,
        messageRecipients: le,
        messageRecipient: ue,
        messageAvatar: de,
        messageRemove: fe,
        messageSubject: pe,
        messageBody: me,
        emailBody: he,
        slackBody: ge,
      }));
  }))();
}
function _e(e) {
  let t = (0, Z.c)(32),
    { conversationId: r, method: i, destination: a, recipientName: o, preview: s } = e,
    l = c(),
    u = (0, Ce.useId)(),
    f = i === `slack` || i === `teams`,
    p;
  t[0] === o ? (p = t[1]) : ((p = o?.trim() || null), (t[0] = o), (t[1] = p));
  let m = p,
    h;
  t[2] !== m || t[3] !== r || t[4] !== a || t[5] !== f || t[6] !== i || t[7] !== s
    ? ((h =
        i === `text`
          ? (0, Q.jsx)(F, {
              description: null,
              children: (0, Q.jsx)(P, { destination: a, conversationId: r }),
            })
          : (s ?? (0, Q.jsx)(be, { conversationId: r, method: i, recipient: f ? m : a }))),
      (t[2] = m),
      (t[3] = r),
      (t[4] = a),
      (t[5] = f),
      (t[6] = i),
      (t[7] = s),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== m || t[10] !== f || t[11] !== u
    ? ((g = f ? (0, Q.jsx)(ye, { id: u, recipient: m }) : null),
      (t[9] = m),
      (t[10] = f),
      (t[11] = u),
      (t[12] = g))
    : (g = t[12]);
  let v;
  t[13] !== r || t[14] !== a || t[15] !== i
    ? ((v = i === `text` ? (0, Q.jsx)(R, { destination: a, conversationId: r }) : null),
      (t[13] = r),
      (t[14] = a),
      (t[15] = i),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== a || t[18] !== l || t[19] !== i
    ? ((y =
        i === `email`
          ? (0, Q.jsxs)(`div`, {
              className: `flex h-10 min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border border-default bg-primary-soft ps-3 pe-1`,
              role: `group`,
              "aria-label": l.formatMessage({
                id: `restricted.aeon.contact.emailAddress.yourDot`,
                defaultMessage: `Your dot’s email address`,
                description: `Accessible label for the copyable email address after setting up dot. Keep dot lowercase and untranslated.`,
              }),
              children: [
                (0, Q.jsx)(`span`, {
                  className: `min-w-0 truncate text-sm text-default select-text`,
                  children: a,
                }),
                (0, Q.jsx)(C, { buttonText: !0, showIcon: !1, renderButton: ve, onCopy: (e) => _(a, e) }, a),
              ],
            })
          : null),
      (t[17] = a),
      (t[18] = l),
      (t[19] = i),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] !== a || t[22] !== f || t[23] !== i || t[24] !== u
    ? ((b =
        i === `text`
          ? null
          : (0, Q.jsx)(`div`, {
              className: `flex gap-2`,
              children: (0, Q.jsxs)(d, {
                className: `flex-1`,
                href: i === `email` ? `mailto:${encodeURIComponent(a)}` : a,
                target: i === `teams` ? `_blank` : void 0,
                rel: i === `teams` ? `noopener noreferrer` : void 0,
                color: `primary`,
                size: `detailAction`,
                "aria-describedby": f ? u : void 0,
                onClick: (e) =>
                  D({
                    event: e,
                    href: i === `email` ? `mailto:${encodeURIComponent(a)}` : a,
                    initiator: `side_panel_menu`,
                    openTarget: i === `slack` ? void 0 : `external-browser`,
                  }),
                children: [
                  i === `email`
                    ? (0, Q.jsx)(n, {
                        id: `restricted.aeon.contact.openEmail`,
                        defaultMessage: `Open Email`,
                        description: `Opens the user's email app with the dot's address as the recipient`,
                      })
                    : null,
                  i === `teams`
                    ? (0, Q.jsx)(n, {
                        id: `restricted.aeon.contact.openTeams`,
                        defaultMessage: `Open Teams`,
                        description: `Opens the connected dot’s direct message in Microsoft Teams`,
                      })
                    : null,
                  i === `slack`
                    ? (0, Q.jsx)(n, {
                        id: `restricted.aeon.slack.setup.open`,
                        defaultMessage: `Open Slack`,
                        description: `Opens the connected dot's direct message in Slack`,
                      })
                    : null,
                ],
              }),
            })),
      (t[21] = a),
      (t[22] = f),
      (t[23] = i),
      (t[24] = u),
      (t[25] = b))
    : (b = t[25]);
  let x;
  return (
    t[26] !== h || t[27] !== g || t[28] !== v || t[29] !== y || t[30] !== b
      ? ((x = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-6`,
          children: [h, g, v, y, b],
        })),
        (t[26] = h),
        (t[27] = g),
        (t[28] = v),
        (t[29] = y),
        (t[30] = b),
        (t[31] = x))
      : (x = t[31]),
    x
  );
}
function ve(e) {
  return (0, Q.jsx)(t, { ...e, color: `primary`, radius: `full`, size: `compact` });
}
function ye(e) {
  let t = (0, Z.c)(6),
    { id: r, recipient: i } = e,
    a = i != null,
    o;
  t[0] !== i || t[1] !== a
    ? ((o = (0, Q.jsx)(n, {
        id: `restricted.aeon.contact.channelRecipient.dot.productName`,
        defaultMessage: `{hasRecipient, select, true {Message recipient: @{recipient}} other {Message recipient: your {dot}}}`,
        description: `Screen reader description giving the public recipient for a Slack or Microsoft Teams contact action. dot is a common noun for the agent and must remain untranslated.`,
        values: { recipient: i, hasRecipient: a, dot: `dot` },
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] !== r || t[4] !== o
      ? ((s = (0, Q.jsx)(`span`, { id: r, className: `sr-only`, children: o })),
        (t[3] = r),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function be(e) {
  let t = (0, Z.c)(48),
    { conversationId: i, method: a, recipient: s } = e,
    l = c(),
    u = T(ie, i),
    d = T(te, i),
    p = d ?? u,
    m;
  t[0] === l ? (m = t[1]) : ((m = l.formatMessage(ne)), (t[0] = l), (t[1] = m));
  let h = m,
    _ = p != null && !ae(p) && (d != null || p !== h) ? p : h,
    y = T(re, i),
    b;
  t[2] !== a || t[3] !== s
    ? ((b = a === `slack` || a === `teams` ? Se(s) : s), (t[2] = a), (t[3] = s), (t[4] = b))
    : (b = t[4]);
  let x = b,
    S = a === `email` ? `items-start pt-6` : `items-center`,
    C;
  t[5] === S ? (C = t[6]) : ((C = f(`flex h-full min-w-0 justify-center`, S)), (t[5] = S), (t[6] = C));
  let w;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = f(Y.message, `border-default bg-surface shadow-sm`)), (t[7] = w))
    : (w = t[7]);
  let E;
  t[8] === a
    ? (E = t[9])
    : ((E =
        a === `email`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`span`, { className: Y.messageBrandIcon, children: (0, Q.jsx)(r, { asset: v }) }),
                (0, Q.jsx)(n, {
                  id: `restricted.aeon.contact.preview.emailHeading`,
                  defaultMessage: `Send email message`,
                  description: `Heading of the miniature email composer in contact setup`,
                }),
              ],
            })
          : null),
      (t[8] = a),
      (t[9] = E));
  let D;
  t[10] === a
    ? (D = t[11])
    : ((D =
        a === `slack`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`span`, { className: Y.messageBrandIcon, children: (0, Q.jsx)(r, { asset: g }) }),
                (0, Q.jsx)(n, {
                  id: `restricted.aeon.contact.preview.slackHeading`,
                  defaultMessage: `Send Slack message`,
                  description: `Heading of the miniature Slack composer in contact setup`,
                }),
              ],
            })
          : null),
      (t[10] = a),
      (t[11] = D));
  let O;
  t[12] === a
    ? (O = t[13])
    : ((O =
        a === `teams`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`img`, { src: z, alt: ``, width: 12, height: 12 }),
                (0, Q.jsx)(n, {
                  id: `restricted.aeon.contact.preview.teamsHeading`,
                  defaultMessage: `Send Teams message`,
                  description: `Heading of the miniature Microsoft Teams composer in contact setup`,
                }),
              ],
            })
          : null),
      (t[12] = a),
      (t[13] = O));
  let k;
  t[14] !== E || t[15] !== D || t[16] !== O
    ? ((k = (0, Q.jsxs)(`div`, { className: Y.messageHeading, children: [E, D, O] })),
      (t[14] = E),
      (t[15] = D),
      (t[16] = O),
      (t[17] = k))
    : (k = t[17]);
  let A;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(`span`, {
        className: f(Y.messageSend, `shrink-0 rounded-full bg-primary-solid text-primary-solid`),
        children: (0, Q.jsx)(n, {
          id: `restricted.aeon.contact.preview.sendMessage`,
          defaultMessage: `Send message`,
          description: `Decorative send label in the miniature email, Slack, or Teams composer; it is not a real action`,
        }),
      })),
      (t[18] = A))
    : (A = t[18]);
  let j;
  t[19] === k
    ? (j = t[20])
    : ((j = (0, Q.jsxs)(`div`, { className: Y.messageHeader, children: [k, A] })), (t[19] = k), (t[20] = j));
  let M, N, P;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = f(Y.messageRecipients, `text-tertiary`)),
      (N = (0, Q.jsx)(n, {
        id: `restricted.aeon.contact.preview.to`,
        defaultMessage: `To`,
        description: `Recipient label in a decorative email, Slack, or Microsoft Teams message preview`,
      })),
      (P = f(Y.messageRecipient, `rounded-full border-default`)),
      (t[21] = M),
      (t[22] = N),
      (t[23] = P))
    : ((M = t[21]), (N = t[22]), (P = t[23]));
  let F = y?.avatar ?? null,
    I;
  t[24] !== i || t[25] !== F
    ? ((I = (0, Q.jsx)(ee, { className: Y.messageAvatar, avatar: F, identity: i })),
      (t[24] = i),
      (t[25] = F),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] === x
    ? (L = t[28])
    : ((L = (0, Q.jsx)(`span`, { className: `truncate text-default`, children: x })),
      (t[27] = x),
      (t[28] = L));
  let R;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(`span`, { className: Y.messageRemove, children: (0, Q.jsx)(o, {}) })), (t[29] = R))
    : (R = t[29]);
  let B;
  t[30] !== I || t[31] !== L
    ? ((B = (0, Q.jsxs)(`span`, { className: P, children: [I, L, R] })),
      (t[30] = I),
      (t[31] = L),
      (t[32] = B))
    : (B = t[32]);
  let V;
  t[33] === a
    ? (V = t[34])
    : ((V =
        a === `email`
          ? (0, Q.jsx)(`span`, {
              className: `ms-auto shrink-0`,
              children: (0, Q.jsx)(n, {
                id: `restricted.aeon.contact.preview.emailRecipients`,
                defaultMessage: `Cc Bcc`,
                description: `Decorative carbon-copy and blind-carbon-copy labels in a miniature email composer`,
              }),
            })
          : null),
      (t[33] = a),
      (t[34] = V));
  let H;
  t[35] !== B || t[36] !== V
    ? ((H = (0, Q.jsxs)(`div`, { className: M, children: [N, B, V] })), (t[35] = B), (t[36] = V), (t[37] = H))
    : (H = t[37]);
  let U;
  t[38] !== _ || t[39] !== a
    ? ((U =
        a === `email`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`p`, {
                  className: Y.messageSubject,
                  children: (0, Q.jsx)(n, {
                    id: `restricted.aeon.contact.preview.emailSubject`,
                    defaultMessage: `Help me prep for tomorrow’s meeting`,
                    description: `Example subject in the decorative email composer in contact setup`,
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: f(Y.messageBody, Y.emailBody),
                  children: [
                    (0, Q.jsx)(`p`, {
                      children: (0, Q.jsx)(n, {
                        id: `restricted.aeon.contact.preview.emailGreeting`,
                        defaultMessage: `Hey {name},`,
                        description: `Example greeting in the decorative email composer; name is the assistant’s private nickname or the lowercase term dot`,
                        values: { name: _ },
                      }),
                    }),
                    (0, Q.jsx)(`p`, {
                      children: (0, Q.jsx)(n, {
                        id: `restricted.aeon.contact.preview.emailBodyLines`,
                        defaultMessage: `Can you summarize the thread below and pull out any decisions we need to make? There’s been a lot of back and forth, and I want to make sure I’m caught up before we meet.<br></br><br></br>I’d love a quick overview of where things stand, any open questions, and a few talking points.<br></br><br></br>Please flag anything that might affect the timeline, especially if we’re still waiting on someone’s input.`,
                        description: `Fictional email body in the miniature contact setup illustration; no email is sent. Paired br tags separate the requests with blank lines.`,
                        values: { br: xe },
                      }),
                    }),
                    (0, Q.jsx)(`p`, {
                      children: (0, Q.jsx)(n, {
                        id: `restricted.aeon.contact.preview.emailFollowup`,
                        defaultMessage: `If there’s anything I should read beforehand, send that my way too.`,
                        description: `Final sentence of a fictional email in the contact setup illustration`,
                      }),
                    }),
                  ],
                }),
              ],
            })
          : (0, Q.jsx)(`p`, {
              className: f(Y.messageBody, Y.slackBody),
              children: (0, Q.jsx)(n, {
                id: `restricted.aeon.contact.preview.slackBody`,
                defaultMessage: `Let’s move our meeting to Wednesday so I can join after the design onsite. Happy to find another time that works for you!`,
                description: `Fictional request in the miniature Slack or Teams composer in contact setup; no message is sent`,
              }),
            })),
      (t[38] = _),
      (t[39] = a),
      (t[40] = U))
    : (U = t[40]);
  let W;
  t[41] !== j || t[42] !== H || t[43] !== U
    ? ((W = (0, Q.jsxs)(`div`, { className: w, children: [j, H, U] })),
      (t[41] = j),
      (t[42] = H),
      (t[43] = U),
      (t[44] = W))
    : (W = t[44]);
  let G;
  return (
    t[45] !== W || t[46] !== C
      ? ((G = (0, Q.jsx)(`div`, {
          className: `h-55.5 min-w-0 shrink-0 overflow-hidden rounded-2xl bg-text/5 px-6 text-start select-none @max-xs/contact-setup:h-88`,
          "aria-hidden": !0,
          inert: !0,
          children: (0, Q.jsx)(`div`, { className: C, children: W }),
        })),
        (t[45] = W),
        (t[46] = C),
        (t[47] = G))
      : (G = t[47]),
    G
  );
}
function xe() {
  return (0, Q.jsx)(`br`, {});
}
function Se(e) {
  return e == null
    ? (0, Q.jsx)(n, {
        id: `restricted.aeon.contact.unnamedChannelRecipient.productName`,
        defaultMessage: `your {dot}`,
        description: `Default recipient in a Slack or Microsoft Teams preview before the public name is available. dot is a common noun for the agent and must remain untranslated.`,
        values: { dot: `dot` },
      })
    : `@${e}`;
}
var Z, Ce, Q;
function $() {
  return ($ = e(() => {
    ((Z = x()),
      m(),
      b(),
      l(),
      a(),
      (Ce = w()),
      h(),
      y(),
      u(),
      E(),
      i(),
      s(),
      B(),
      O(),
      k(),
      j(),
      p(),
      N(),
      A(),
      M(),
      L(),
      I(),
      X(),
      (Q = S()));
  }))();
}
export { B as a, X as i, $ as n, z as o, Y as r, _e as t };
//# sourceMappingURL=contact-ready-7c923836a87f.js.map
