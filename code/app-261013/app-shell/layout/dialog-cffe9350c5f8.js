import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CJ as r,
  CO as i,
  Cot as a,
  EPt as o,
  EV as s,
  HT as c,
  IDt as l,
  Ixt as u,
  NV as d,
  OV as f,
  Pxt as p,
  RLt as m,
  TJ as h,
  TLt as g,
  TO as _,
  VDt as v,
  VT as y,
  _O as b,
  cO as x,
  cz as S,
  e3 as C,
  eLt as w,
  fO as T,
  i3 as E,
  iw as D,
  jDt as O,
  lK as k,
  lO as A,
  mO as j,
  oO as M,
  pIt as N,
  pLt as P,
  r3 as F,
  rst as I,
  sO as L,
  spt as ee,
  sz as te,
  t3 as R,
  tw as z,
  vO as B,
  vzt as V,
  wot as H,
  xMt as U,
  yzt as W,
  zH as ne,
  zLt as re,
} from "./app-shared-bbfeca5e5737.js";
import {
  JPn as ie,
  TNr as ae,
  XPn as oe,
  Ymr as se,
  con as ce,
  ehr as le,
  son as ue,
  xPn as de,
  yNr as fe,
  yPn as pe,
} from "./app-initial-5851df3f6cb1.js";
function me(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw Error(`This file is not valid JSON.`);
  }
  let n = ge.safeParse(t);
  if (n.success) {
    let e = n.data.data_files.filter(({ category: e }) => e === `conversations`),
      t = e[0],
      r = re({ protocol: /^https$/ }).safeParse(t?.export_url);
    if (!r.success) throw Error(`Expected an HTTPS conversations download in the manifest.`);
    return {
      type: `manifest`,
      conversationsUrl: r.data,
      filename: t?.filename || null,
      hasMultipleConversationBatches: e.length > 1,
    };
  }
  let r = N(he).safeParse(t);
  if (!r.success) throw Error(`Expected the conversation array from conversations.json.`);
  return {
    type: `conversations`,
    conversations: r.data.map((e) => ({ source: e, title: e.name, messageCount: e.chat_messages.length })),
  };
}
var he, ge;
function _e() {
  return (_e = e(() => {
    (o(),
      (he = w({ uuid: g(), name: g(), chat_messages: N(m()) })),
      (ge = P({
        data_files: N(P({ category: g(), export_url: m().optional(), filename: g().nullable().catch(null) })),
      })));
  }))();
}
function ve(e) {
  let n = (0, xe.c)(19),
    { busy: r, errorId: i, onChange: a, size: o, children: s } = e,
    c = (0, Se.useId)(),
    u = (0, Se.useRef)(null),
    d;
  n[0] !== r || n[1] !== c || n[2] !== a
    ? ((d = (0, G.jsx)(`input`, {
        ref: u,
        className: `hidden`,
        type: `file`,
        "aria-labelledby": c,
        accept: `.json,application/json`,
        disabled: r,
        onChange: a,
      })),
      (n[0] = r),
      (n[1] = c),
      (n[2] = a),
      (n[3] = d))
    : (d = n[3]);
  let f = o === `large` ? `w-full justify-center` : void 0,
    p;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => u.current?.click()), (n[4] = p))
    : (p = n[4]);
  let m;
  n[5] !== r || n[6] !== s || n[7] !== o
    ? ((m =
        r && o === `large`
          ? (0, G.jsx)(`span`, {
              role: `status`,
              children: (0, G.jsx)(l, {
                id: `conversationImport.reading`,
                defaultMessage: `Discovering conversations…`,
                description: `Loading status while finding the conversations available to import in a local export file`,
              }),
            })
          : s),
      (n[5] = r),
      (n[6] = s),
      (n[7] = o),
      (n[8] = m))
    : (m = n[8]);
  let h;
  n[9] !== r || n[10] !== c || n[11] !== i || n[12] !== o || n[13] !== f || n[14] !== m
    ? ((h = (0, G.jsx)(t, {
        id: c,
        className: f,
        type: `button`,
        size: o,
        loading: r,
        "aria-describedby": i,
        onClick: p,
        children: m,
      })),
      (n[9] = r),
      (n[10] = c),
      (n[11] = i),
      (n[12] = o),
      (n[13] = f),
      (n[14] = m),
      (n[15] = h))
    : (h = n[15]);
  let g;
  return (
    n[16] !== d || n[17] !== h
      ? ((g = (0, G.jsxs)(G.Fragment, { children: [d, h] })), (n[16] = d), (n[17] = h), (n[18] = g))
      : (g = n[18]),
    g
  );
}
function ye(e) {
  let t = (0, xe.c)(5),
    { id: n, fileType: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i =
        r === `manifest`
          ? (0, G.jsx)(l, {
              id: `conversationImport.claude.invalidManifest`,
              defaultMessage: `Could not read this export. Make sure you selected a valid manifest JSON file.`,
              description: `Error below the manifest upload button when the selected Claude export cannot be read`,
            })
          : (0, G.jsx)(l, {
              id: `conversationImport.claude.invalidExport`,
              defaultMessage: `Could not read this export. Make sure you selected a valid <code>conversations.json</code> file.`,
              description: `Error below the upload button when the selected local file is unreadable or has an invalid Claude export structure; code formats the required filename`,
              values: { code: be },
            })),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, G.jsx)(`p`, { id: n, role: `alert`, className: `text-sm text-danger`, children: i })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function be(e) {
  return (0, G.jsx)(`code`, { children: e }, `filename`);
}
var xe, Se, G;
function Ce() {
  return (Ce = e(() => {
    ((xe = V()), (Se = W()), O(), R(), (G = U()));
  }))();
}
function we(e) {
  let t = (0, Ee.c)(5),
    { title: n, subtitle: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, De.jsx)(b, {
        asChild: !0,
        children: (0, De.jsx)(`h2`, { ref: Te, className: `outline-none`, tabIndex: -1, children: n }),
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, De.jsx)(A, { className: `shrink-0`, children: (0, De.jsx)(x, { title: i, subtitle: r }) })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Te(e) {
  e?.focus();
}
var Ee, De;
function Oe() {
  return (Oe = e(() => {
    ((Ee = V()), B(), T(), (De = U()));
  }))();
}
function ke(e) {
  let n = (0, Me.c)(46),
    { manifest: r, busy: i, fileError: a, onChange: o, onBack: c } = e,
    u = v(),
    d = (0, Ne.useId)(),
    f = r?.filename,
    p;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, K.jsx)(we, {
        subtitle: null,
        title: (0, K.jsx)(l, {
          id: `conversationImport.claude.prepareExport`,
          defaultMessage: `Prepare your conversations`,
          description: `Title of the instructions for downloading, unzipping, and uploading a Claude conversation export`,
        }),
      })),
      (n[0] = p))
    : (p = n[0]);
  let m;
  n[1] === r
    ? (m = n[2])
    : ((m = (0, K.jsx)(z, {
        inset: !1,
        controlSizing: `content`,
        label: r
          ? (0, K.jsx)(l, {
              id: `conversationImport.claude.downloadStep`,
              defaultMessage: `1. Download your conversations`,
              description: `First step after uploading a Claude export manifest`,
            })
          : (0, K.jsx)(l, {
              id: `conversationImport.claude.downloadedStep`,
              defaultMessage: `1. Conversations downloaded`,
              description: `Completed download step when the user says they already downloaded their Claude export`,
            }),
        control: r
          ? (0, K.jsx)(C, {
              href: r.conversationsUrl,
              target: `_blank`,
              rel: `noopener noreferrer`,
              referrerPolicy: `no-referrer`,
              color: `secondary`,
              size: `medium`,
              onClick: (e) =>
                oe({
                  event: e,
                  href: r.conversationsUrl,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }),
              children: (0, K.jsx)(l, {
                id: `conversationImport.claude.download`,
                defaultMessage: `Download`,
                description: `Open the conversations archive download from the uploaded Claude manifest`,
              }),
            })
          : (0, K.jsx)(s, {}),
      })),
      (n[1] = r),
      (n[2] = m));
  let h;
  n[3] === r?.hasMultipleConversationBatches
    ? (h = n[4])
    : ((h = r?.hasMultipleConversationBatches
        ? (0, K.jsxs)(`p`, {
            className: `flex items-center gap-2 text-sm text-warning select-none`,
            role: `alert`,
            children: [
              (0, K.jsx)(ne, {}),
              (0, K.jsx)(l, {
                id: `conversationImport.claude.multipleBatchesWarning`,
                defaultMessage: `Your export has multiple batches of conversations. Only the first batch will be imported.`,
                description: `Warning under the first preparation step when a Claude export manifest contains more than one conversations archive; only the first archive is currently supported`,
              }),
            ],
          })
        : null),
      (n[3] = r?.hasMultipleConversationBatches),
      (n[4] = h));
  let g;
  n[5] !== m || n[6] !== h
    ? ((g = (0, K.jsxs)(`li`, { children: [m, h] })), (n[5] = m), (n[6] = h), (n[7] = g))
    : (g = n[7]);
  let _;
  n[8] === f
    ? (_ = n[9])
    : ((_ = f
        ? (0, K.jsx)(l, {
            id: `conversationImport.claude.unzipNamedArchiveStep`,
            defaultMessage: `2. Unzip <code>{filename}</code>`,
            description: `Second step after uploading a Claude export manifest; filename is the downloaded ZIP archive, and code formats it`,
            values: { filename: f, code: je },
          })
        : (0, K.jsx)(l, {
            id: `conversationImport.claude.unzipArchiveStep`,
            defaultMessage: `2. Unzip your conversations ZIP file`,
            description: `Second step when the Claude conversations ZIP filename is not known`,
          })),
      (n[8] = f),
      (n[9] = _));
  let y;
  n[10] === f
    ? (y = n[11])
    : ((y = f
        ? (0, K.jsx)(l, {
            id: `conversationImport.claude.unzipNamedArchiveHelp`,
            defaultMessage: `Double click the downloaded {filename} file to unzip it. You should see conversations.json.`,
            description: `Unzip instructions; filename is the ZIP archive name from the Claude manifest, and conversations.json is the extracted file to upload`,
            values: { filename: f },
          })
        : (0, K.jsx)(l, {
            id: `conversationImport.claude.unzipArchiveHelp`,
            defaultMessage: `Double click the downloaded ZIP file to unzip it. You should see conversations.json.`,
            description: `Unzip instructions when the Claude manifest does not provide a filename; conversations.json is the extracted file to upload`,
          })),
      (n[10] = f),
      (n[11] = y));
  let b;
  n[12] === u
    ? (b = n[13])
    : ((b = u.formatMessage({
        id: `conversationImport.claude.extractHelpLabel`,
        defaultMessage: `How to unzip your conversations`,
        description: `Accessible label for the unzip instructions tooltip`,
      })),
      (n[12] = u),
      (n[13] = b));
  let x;
  n[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = (0, K.jsx)(k, {})), (n[14] = x)) : (x = n[14]);
  let S;
  n[15] === b
    ? (S = n[16])
    : ((S = (0, K.jsx)(t, {
        type: `button`,
        color: `ghost`,
        size: `medium`,
        uniform: !0,
        "aria-label": b,
        children: x,
      })),
      (n[15] = b),
      (n[16] = S));
  let w;
  n[17] !== y || n[18] !== S
    ? ((w = (0, K.jsx)(te, { tooltipContent: y, children: S })), (n[17] = y), (n[18] = S), (n[19] = w))
    : (w = n[19]);
  let T;
  n[20] !== w || n[21] !== _
    ? ((T = (0, K.jsx)(`li`, {
        children: (0, K.jsx)(z, { inset: !1, controlSizing: `content`, label: _, control: w }),
      })),
      (n[20] = w),
      (n[21] = _),
      (n[22] = T))
    : (T = n[22]);
  let E;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, K.jsx)(l, {
        id: `conversationImport.claude.uploadStep`,
        defaultMessage: `3. Upload extracted <code>conversations.json</code>`,
        description: `Third step after uploading a Claude export manifest; code formats the filename`,
        values: { code: Ae },
      })),
      (n[23] = E))
    : (E = n[23]);
  let D = a ? d : void 0,
    O;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, K.jsx)(l, {
        id: `conversationImport.claude.upload`,
        defaultMessage: `Upload`,
        description: `Button to choose the extracted conversations.json file`,
      })),
      (n[24] = O))
    : (O = n[24]);
  let j;
  n[25] !== i || n[26] !== o || n[27] !== D
    ? ((j = (0, K.jsx)(z, {
        inset: !1,
        controlSizing: `content`,
        label: E,
        control: (0, K.jsx)(ve, { busy: i, errorId: D, onChange: o, size: `medium`, children: O }),
      })),
      (n[25] = i),
      (n[26] = o),
      (n[27] = D),
      (n[28] = j))
    : (j = n[28]);
  let M;
  n[29] !== a || n[30] !== d
    ? ((M = a ? (0, K.jsx)(ye, { id: d, fileType: `conversations` }) : null),
      (n[29] = a),
      (n[30] = d),
      (n[31] = M))
    : (M = n[31]);
  let N;
  n[32] !== j || n[33] !== M
    ? ((N = (0, K.jsxs)(`li`, { children: [j, M] })), (n[32] = j), (n[33] = M), (n[34] = N))
    : (N = n[34]);
  let P;
  n[35] !== T || n[36] !== N || n[37] !== g
    ? ((P = (0, K.jsx)(A, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, K.jsxs)(`ol`, { className: `flex flex-col gap-3`, children: [g, T, N] }),
      })),
      (n[35] = T),
      (n[36] = N),
      (n[37] = g),
      (n[38] = P))
    : (P = n[38]);
  let F;
  n[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, K.jsx)(l, {
        id: `conversationImport.back`,
        defaultMessage: `Back`,
        description: `Button to return to the previous step of conversation import`,
      })),
      (n[39] = F))
    : (F = n[39]);
  let I;
  n[40] !== i || n[41] !== c
    ? ((I = (0, K.jsx)(L, {
        children: (0, K.jsx)(t, { type: `button`, color: `secondary`, disabled: i, onClick: c, children: F }),
      })),
      (n[40] = i),
      (n[41] = c),
      (n[42] = I))
    : (I = n[42]);
  let ee;
  return (
    n[43] !== P || n[44] !== I
      ? ((ee = (0, K.jsxs)(K.Fragment, { children: [p, P, I] })), (n[43] = P), (n[44] = I), (n[45] = ee))
      : (ee = n[45]),
    ee
  );
}
function Ae(e) {
  return (0, K.jsx)(`code`, { children: e }, `filename`);
}
function je(e) {
  return (0, K.jsx)(`code`, { children: e }, `filename`);
}
var Me, Ne, K;
function Pe() {
  return (Pe = e(() => {
    ((Me = V()), (Ne = W()), O(), R(), T(), ie(), h(), S(), D(), Ce(), Oe(), (K = U()));
  }))();
}
function Fe(e) {
  let n = (0, Le.c)(37),
    { conversations: r, selected: i, onSelectionChange: a } = e,
    o = v(),
    [s, c] = (0, Re.useState)(0),
    u = Math.ceil(r.length / 100),
    d;
  n[0] !== r || n[1] !== a
    ? ((d = () => a(new Set(r.flatMap(Ie)))), (n[0] = r), (n[1] = a), (n[2] = d))
    : (d = n[2]);
  let f;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(l, {
        id: `conversationImport.claude.selectAll`,
        defaultMessage: `Select all`,
        description: `Button selecting all nonempty conversations in the Claude import preview`,
      })),
      (n[3] = f))
    : (f = n[3]);
  let p;
  n[4] === d
    ? (p = n[5])
    : ((p = (0, q.jsx)(t, { type: `button`, color: `secondary`, onClick: d, children: f })),
      (n[4] = d),
      (n[5] = p));
  let m;
  n[6] === a ? (m = n[7]) : ((m = () => a(new Set())), (n[6] = a), (n[7] = m));
  let h;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, q.jsx)(l, {
        id: `conversationImport.claude.clear`,
        defaultMessage: `Clear selection`,
        description: `Button clearing selected conversations in the Claude import preview`,
      })),
      (n[8] = h))
    : (h = n[8]);
  let g;
  n[9] === m
    ? (g = n[10])
    : ((g = (0, q.jsx)(t, { type: `button`, color: `secondary`, onClick: m, children: h })),
      (n[9] = m),
      (n[10] = g));
  let _;
  n[11] !== p || n[12] !== g
    ? ((_ = (0, q.jsxs)(`div`, { className: `flex shrink-0 flex-wrap gap-3 select-none`, children: [p, g] })),
      (n[11] = p),
      (n[12] = g),
      (n[13] = _))
    : (_ = n[13]);
  let b;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, q.jsx)(`th`, {
        className: `p-2 text-start`,
        children: (0, q.jsx)(l, {
          id: `conversationImport.claude.import`,
          defaultMessage: `Import`,
          description: `Column heading in the Claude conversation import preview table`,
        }),
      })),
      (n[14] = b))
    : (b = n[14]);
  let x;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, q.jsx)(`th`, {
        className: `p-2 text-start`,
        children: (0, q.jsx)(l, {
          id: `conversationImport.claude.sourceTitle`,
          defaultMessage: `Title`,
          description: `Column heading in the Claude conversation import preview table`,
        }),
      })),
      (n[15] = x))
    : (x = n[15]);
  let S;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, q.jsx)(`thead`, {
        className: `sticky top-0 z-10 bg-surface text-secondary dark:bg-surface-tertiary`,
        children: (0, q.jsxs)(`tr`, {
          children: [
            b,
            x,
            (0, q.jsx)(`th`, {
              className: `p-2 text-start`,
              children: (0, q.jsx)(l, {
                id: `conversationImport.claude.sourceMessages`,
                defaultMessage: `Messages`,
                description: `Column heading in the Claude conversation import preview table`,
              }),
            }),
          ],
        }),
      })),
      (n[16] = S))
    : (S = n[16]);
  let C;
  if (n[17] !== r || n[18] !== o || n[19] !== a || n[20] !== s || n[21] !== i) {
    let e;
    (n[23] !== o || n[24] !== a || n[25] !== s || n[26] !== i
      ? ((e = (e, t) => {
          let n = s * 100 + t;
          return (0, q.jsxs)(
            `tr`,
            {
              className: `border-t border-default`,
              children: [
                (0, q.jsx)(`td`, {
                  className: `p-2`,
                  children: (0, q.jsx)(`div`, {
                    className: `relative`,
                    children: (0, q.jsx)(y, {
                      "aria-label": o.formatMessage(
                        {
                          id: `conversationImport.claude.select`,
                          defaultMessage: `Import {title}`,
                          description: `Accessible label for selecting a Claude conversation to import; title is its source title`,
                        },
                        { title: e.title },
                      ),
                      checked: i.has(n),
                      disabled: e.messageCount === 0,
                      onCheckedChange: (e) => {
                        let t = new Set(i);
                        (e ? t.add(n) : t.delete(n), a(t));
                      },
                    }),
                  }),
                }),
                (0, q.jsx)(`td`, {
                  className: `p-2`,
                  children:
                    e.title ||
                    (0, q.jsx)(l, {
                      id: `conversationImport.claude.untitled`,
                      defaultMessage: `Untitled`,
                      description: `Fallback title for a Claude export conversation with an empty name`,
                    }),
                }),
                (0, q.jsx)(`td`, { className: `p-2`, children: e.messageCount }),
              ],
            },
            n,
          );
        }),
        (n[23] = o),
        (n[24] = a),
        (n[25] = s),
        (n[26] = i),
        (n[27] = e))
      : (e = n[27]),
      (C = r.slice(s * 100, (s + 1) * 100).map(e)),
      (n[17] = r),
      (n[18] = o),
      (n[19] = a),
      (n[20] = s),
      (n[21] = i),
      (n[22] = C));
  } else C = n[22];
  let w;
  n[28] === C
    ? (w = n[29])
    : ((w = (0, q.jsx)(`div`, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, q.jsxs)(`table`, {
          className: `w-full text-start`,
          children: [S, (0, q.jsx)(`tbody`, { children: C })],
        }),
      })),
      (n[28] = C),
      (n[29] = w));
  let T;
  n[30] !== s || n[31] !== u
    ? ((T =
        u > 1
          ? (0, q.jsxs)(`div`, {
              className: `flex shrink-0 items-center justify-between gap-3 select-none`,
              children: [
                (0, q.jsx)(t, {
                  type: `button`,
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: s === 0,
                  onClick: () => c(s - 1),
                  children: (0, q.jsx)(l, {
                    id: `conversationImport.claude.previous`,
                    defaultMessage: `Previous`,
                    description: `Show the previous page of conversations in a Claude export`,
                  }),
                }),
                (0, q.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, q.jsx)(l, {
                    id: `conversationImport.claude.page`,
                    defaultMessage: `Page {page} of {pages}`,
                    description: `Current page and total pages in the Claude conversation import preview`,
                    values: { page: s + 1, pages: u },
                  }),
                }),
                (0, q.jsx)(t, {
                  type: `button`,
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: s + 1 === u,
                  onClick: () => c(s + 1),
                  children: (0, q.jsx)(l, {
                    id: `conversationImport.claude.next`,
                    defaultMessage: `Next`,
                    description: `Show the next page of conversations in a Claude export`,
                  }),
                }),
              ],
            })
          : null),
      (n[30] = s),
      (n[31] = u),
      (n[32] = T))
    : (T = n[32]);
  let E;
  return (
    n[33] !== w || n[34] !== T || n[35] !== _
      ? ((E = (0, q.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-3`, children: [_, w, T] })),
        (n[33] = w),
        (n[34] = T),
        (n[35] = _),
        (n[36] = E))
      : (E = n[36]),
    E
  );
}
function Ie(e, t) {
  return e.messageCount > 0 ? [t] : [];
}
var Le, Re, q;
function ze() {
  return (ze = e(() => {
    ((Le = V()), (Re = W()), O(), R(), c(), (q = U()));
  }))();
}
function Be(e) {
  let n = (0, Ve.c)(23),
    { conversations: r, selected: i, onSelectionChange: a, onBack: o } = e,
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(l, {
        id: `conversationImport.selectTitle`,
        defaultMessage: `Select conversations`,
        description: `Title of the step for choosing conversations to import`,
      })),
      (n[0] = s))
    : (s = n[0]);
  let c;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, J.jsx)(we, {
        title: s,
        subtitle: (0, J.jsx)(l, {
          id: `conversationImport.step`,
          defaultMessage: `Step {step} of 2`,
          description: `Progress through choosing an export and selecting conversations before importing`,
          values: { step: 2 },
        }),
      })),
      (n[1] = c))
    : (c = n[1]);
  let u;
  n[2] === r.length
    ? (u = n[3])
    : ((u = (0, J.jsx)(A, {
        className: `shrink-0`,
        children: (0, J.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: (0, J.jsx)(l, {
            id: `conversationImport.foundCount`,
            defaultMessage: `Found {count, plural, one {# conversation} other {# conversations}}`,
            description: `Number of conversations found in the selected export file`,
            values: { count: r.length },
          }),
        }),
      })),
      (n[2] = r.length),
      (n[3] = u));
  let d;
  n[4] !== r || n[5] !== a || n[6] !== i
    ? ((d = (0, J.jsx)(A, {
        className: `min-h-0`,
        children: (0, J.jsx)(Fe, { conversations: r, selected: i, onSelectionChange: a }),
      })),
      (n[4] = r),
      (n[5] = a),
      (n[6] = i),
      (n[7] = d))
    : (d = n[7]);
  let f;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(l, {
        id: `conversationImport.back`,
        defaultMessage: `Back`,
        description: `Return to choosing the conversation export file`,
      })),
      (n[8] = f))
    : (f = n[8]);
  let p;
  n[9] === o
    ? (p = n[10])
    : ((p = (0, J.jsx)(t, { type: `button`, color: `secondary`, onClick: o, children: f })),
      (n[9] = o),
      (n[10] = p));
  let m = i.size === 0,
    h;
  n[11] === i.size
    ? (h = n[12])
    : ((h = (0, J.jsx)(l, {
        id: `conversationImport.claude.submit`,
        defaultMessage: `Import selected ({count})`,
        description: `Button starting a Claude import batch; count is the number of selected conversations`,
        values: { count: i.size },
      })),
      (n[11] = i.size),
      (n[12] = h));
  let g;
  n[13] !== m || n[14] !== h
    ? ((g = (0, J.jsx)(t, { type: `submit`, disabled: m, children: h })),
      (n[13] = m),
      (n[14] = h),
      (n[15] = g))
    : (g = n[15]);
  let _;
  n[16] !== p || n[17] !== g
    ? ((_ = (0, J.jsxs)(L, { className: `shrink-0`, children: [p, g] })),
      (n[16] = p),
      (n[17] = g),
      (n[18] = _))
    : (_ = n[18]);
  let v;
  return (
    n[19] !== _ || n[20] !== u || n[21] !== d
      ? ((v = (0, J.jsxs)(J.Fragment, { children: [c, u, d, _] })),
        (n[19] = _),
        (n[20] = u),
        (n[21] = d),
        (n[22] = v))
      : (v = n[22]),
    v
  );
}
var Ve, J;
function He() {
  return (He = e(() => {
    ((Ve = V()), O(), R(), T(), ze(), Oe(), (J = U()));
  }))();
}
function Ue(e) {
  let n = (0, Ge.c)(38),
    { source: r, onSourceChange: a, busy: o, fileError: s, onChange: c, onAlreadyDownloaded: u } = e,
    f = v(),
    p = (0, Ke.useId)(),
    m = (0, Ke.useId)(),
    h;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(l, {
        id: `conversationImport.title`,
        defaultMessage: `Import conversations`,
        description: `Title of the conversation import setup dialog`,
      })),
      (n[0] = h))
    : (h = n[0]);
  let g;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Y.jsx)(we, {
        title: h,
        subtitle: (0, Y.jsx)(l, {
          id: `conversationImport.step`,
          defaultMessage: `Step {step} of 2`,
          description: `Progress through choosing an export and selecting conversations before importing`,
          values: { step: 1 },
        }),
      })),
      (n[1] = g))
    : (g = n[1]);
  let y;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(l, {
        id: `conversationImport.source`,
        defaultMessage: `Import from`,
        description: `Label for the conversation export source dropdown`,
      })),
      (n[2] = y))
    : (y = n[2]);
  let b;
  n[3] !== o || n[4] !== a || n[5] !== r || n[6] !== p
    ? ((b = (0, Y.jsx)(`div`, {
        className: `border-b border-default`,
        children: (0, Y.jsx)(z, {
          inset: !1,
          controlSizing: `content`,
          label: y,
          control: (e) =>
            (0, Y.jsx)(i, {
              align: `end`,
              disabled: o,
              triggerButton: (0, Y.jsxs)(t, {
                ...e,
                "aria-labelledby": `${e[`aria-labelledby`]} ${p}`,
                type: `button`,
                color: `secondary`,
                size: `medium`,
                disabled: o,
                children: [
                  (0, Y.jsx)(`span`, {
                    id: p,
                    children: (0, Y.jsx)(l, {
                      id: `conversationImport.claude.sourceName`,
                      defaultMessage: `Claude`,
                      description: `Name of the Claude conversation export source; keep the brand name untranslated`,
                    }),
                  }),
                  (0, Y.jsx)(d, {}),
                ],
              }),
              children: (0, Y.jsx)(_.RadioGroup, {
                value: r,
                onValueChange: a,
                children: (0, Y.jsx)(_.RadioItem, {
                  value: `claude`,
                  children: (0, Y.jsx)(l, {
                    id: `conversationImport.claude.sourceName`,
                    defaultMessage: `Claude`,
                    description: `Name of the Claude conversation export source; keep the brand name untranslated`,
                  }),
                }),
              }),
            }),
        }),
      })),
      (n[3] = o),
      (n[4] = a),
      (n[5] = r),
      (n[6] = p),
      (n[7] = b))
    : (b = n[7]);
  let x;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(`p`, {
        children: (0, Y.jsx)(l, {
          id: `conversationImport.claude.manifestInstructions`,
          defaultMessage: `<help>Export your data from Claude</help>, then upload the manifest JSON file`,
          description: `Instructions to export data from Claude and upload the manifest JSON containing download links; help links to Claude's data export settings`,
          values: { help: We },
        }),
      })),
      (n[8] = x))
    : (x = n[8]);
  let S;
  n[9] === f
    ? (S = n[10])
    : ((S = f.formatMessage({
        id: `conversationImport.claude.exportHelp`,
        defaultMessage: `How to export your Claude data`,
        description: `Accessible label for the help icon linking to Claude's data export guide`,
      })),
      (n[9] = f),
      (n[10] = S));
  let C, w;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(l, {
        id: `conversationImport.claude.exportHelp`,
        defaultMessage: `How to export your Claude data`,
        description: `Tooltip for the help icon linking to Claude's data export guide`,
      })),
      (w = (0, Y.jsx)(k, {})),
      (n[11] = C),
      (n[12] = w))
    : ((C = n[11]), (w = n[12]));
  let T;
  n[13] === S
    ? (T = n[14])
    : ((T = (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          x,
          (0, Y.jsx)(pe, {
            href: `https://support.claude.com/en/articles/9450526-export-your-claude-data`,
            openTarget: `external-browser`,
            initiator: `open_in_browser_bridge`,
            "aria-label": S,
            tooltipContent: C,
            children: w,
          }),
        ],
      })),
      (n[13] = S),
      (n[14] = T));
  let E;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Y.jsx)(`p`, {
        className: `text-sm text-secondary`,
        children: (0, Y.jsx)(l, {
          id: `conversationImport.claude.exclusions`,
          defaultMessage: `Files, artifacts, and projects are not imported`,
          description: `Limitations of importing Claude conversations into ChatGPT`,
        }),
      })),
      (n[15] = E))
    : (E = n[15]);
  let D;
  n[16] === T
    ? (D = n[17])
    : ((D = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [T, E] })),
      (n[16] = T),
      (n[17] = D));
  let O = s ? m : void 0,
    j;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(l, {
        id: `conversationImport.claude.uploadManifest`,
        defaultMessage: `Upload manifest`,
        description: `Button to choose the manifest JSON file from a Claude data export`,
      })),
      (n[18] = j))
    : (j = n[18]);
  let M;
  n[19] !== o || n[20] !== c || n[21] !== O
    ? ((M = (0, Y.jsx)(ve, { busy: o, errorId: O, onChange: c, size: `large`, children: j })),
      (n[19] = o),
      (n[20] = c),
      (n[21] = O),
      (n[22] = M))
    : (M = n[22]);
  let N;
  n[23] !== s || n[24] !== m
    ? ((N = s ? (0, Y.jsx)(ye, { id: m, fileType: `manifest` }) : null),
      (n[23] = s),
      (n[24] = m),
      (n[25] = N))
    : (N = n[25]);
  let P;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Y.jsx)(l, {
        id: `conversationImport.claude.alreadyDownloaded`,
        defaultMessage: `I already downloaded my data`,
        description: `Skip uploading the Claude manifest and continue to unzipping and uploading conversations already downloaded`,
      })),
      (n[26] = P))
    : (P = n[26]);
  let F;
  n[27] !== o || n[28] !== u
    ? ((F = (0, Y.jsx)(t, {
        className: `w-full justify-center`,
        type: `button`,
        color: `secondary`,
        size: `large`,
        disabled: o,
        onClick: u,
        children: P,
      })),
      (n[27] = o),
      (n[28] = u),
      (n[29] = F))
    : (F = n[29]);
  let I;
  n[30] !== M || n[31] !== N || n[32] !== F
    ? ((I = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [M, N, F] })),
      (n[30] = M),
      (n[31] = N),
      (n[32] = F),
      (n[33] = I))
    : (I = n[33]);
  let L;
  return (
    n[34] !== D || n[35] !== I || n[36] !== b
      ? ((L = (0, Y.jsxs)(Y.Fragment, {
          children: [
            g,
            (0, Y.jsx)(A, {
              className: `min-h-0 overflow-y-auto`,
              children: (0, Y.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [b, D, I] }),
            }),
          ],
        })),
        (n[34] = D),
        (n[35] = I),
        (n[36] = b),
        (n[37] = L))
      : (L = n[37]),
    L
  );
}
function We(e) {
  return (0, Y.jsx)(
    pe,
    {
      appearance: `secondary`,
      href: `https://claude.ai/settings/data-privacy-controls`,
      openTarget: `external-browser`,
      initiator: `open_in_browser_bridge`,
      children: e,
    },
    `export-help`,
  );
}
var Ge, Ke, Y;
function qe() {
  return (qe = e(() => {
    ((Ge = V()), (Ke = W()), O(), R(), T(), n(), de(), h(), D(), Ce(), Oe(), (Y = U()));
  }))();
}
function Je(e) {
  let t = (0, Ze.c)(4),
    { attempts: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.map(Ye)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, X.jsx)(`ul`, { className: `flex flex-col`, children: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function Ye(e, t) {
  return (0, X.jsx)(`li`, { children: (0, X.jsx)(Xe, { attempt: e }) }, t);
}
function Xe(e) {
  let n = (0, Ze.c)(46),
    { attempt: i } = e,
    a = v(),
    o = (0, Qe.useId)(),
    s = i.status === `finished` ? i.result : null,
    c;
  n[0] !== i.sourceTitle || n[1] !== a || n[2] !== s?.title
    ? ((c =
        s?.title ||
        i.sourceTitle ||
        a.formatMessage({
          id: `conversationImport.claude.untitled`,
          defaultMessage: `Untitled`,
          description: `Fallback title for a Claude export conversation with an empty name`,
        })),
      (n[0] = i.sourceTitle),
      (n[1] = a),
      (n[2] = s?.title),
      (n[3] = c))
    : (c = n[3]);
  let u = c,
    d;
  n[4] !== i.status || n[5] !== u
    ? ((d =
        i.status === `importing`
          ? (0, X.jsxs)(`span`, {
              role: `status`,
              children: [
                (0, X.jsx)(F, {}),
                (0, X.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, X.jsx)(l, {
                    id: `conversationImport.uploadingConversation`,
                    defaultMessage: `Importing {title}`,
                    description: `Accessible status of the conversation currently being imported`,
                    values: { title: u },
                  }),
                }),
              ],
            })
          : null),
      (n[4] = i.status),
      (n[5] = u),
      (n[6] = d))
    : (d = n[6]);
  let p;
  n[7] === s?.status
    ? (p = n[8])
    : ((p = s?.status === `success` ? (0, X.jsx)(f, {}) : null), (n[7] = s?.status), (n[8] = p));
  let m;
  n[9] === i.status
    ? (m = n[10])
    : ((m = i.status === `failed` ? (0, X.jsx)(r, {}) : null), (n[9] = i.status), (n[10] = m));
  let h;
  n[11] !== d || n[12] !== p || n[13] !== m
    ? ((h = (0, X.jsxs)(`span`, {
        className: `flex size-5 shrink-0 items-center justify-center`,
        children: [d, p, m],
      })),
      (n[11] = d),
      (n[12] = p),
      (n[13] = m),
      (n[14] = h))
    : (h = n[14]);
  let g;
  n[15] === u
    ? (g = n[16])
    : ((g = (0, X.jsx)(`span`, { className: `min-w-0 flex-1 truncate text-start`, children: u })),
      (n[15] = u),
      (n[16] = g));
  let _;
  n[17] !== s || n[18] !== o
    ? ((_ =
        s?.status === `success` && !s.already_imported
          ? (0, X.jsx)(`span`, {
              id: o,
              className: `sr-only`,
              children: (0, X.jsx)(l, {
                id: `conversationImport.imported`,
                defaultMessage: `Imported`,
                description: `Accessible status of a successfully imported conversation`,
              }),
            })
          : null),
      (n[17] = s),
      (n[18] = o),
      (n[19] = _))
    : (_ = n[19]);
  let y;
  n[20] === i.status
    ? (y = n[21])
    : ((y =
        i.status === `failed`
          ? (0, X.jsx)(`span`, {
              role: `alert`,
              className: `sr-only`,
              children: (0, X.jsx)(l, {
                id: `conversationImport.claude.failed`,
                defaultMessage: `Failed`,
                description: `Status of a conversation that could not be imported`,
              }),
            })
          : null),
      (n[20] = i.status),
      (n[21] = y));
  let b;
  n[22] !== s?.already_imported || n[23] !== o
    ? ((b = s?.already_imported
        ? (0, X.jsx)(`span`, {
            id: o,
            className: `shrink-0 text-sm`,
            children: (0, X.jsx)(l, {
              id: `conversationImport.alreadyImported`,
              defaultMessage: `Already imported`,
              description: `Short status beside a conversation in the import results dialog. This conversation was imported previously; its title links to the existing ChatGPT conversation.`,
            }),
          })
        : null),
      (n[22] = s?.already_imported),
      (n[23] = o),
      (n[24] = b))
    : (b = n[24]);
  let x;
  n[25] === i.status
    ? (x = n[26])
    : ((x =
        i.status === `queued`
          ? (0, X.jsx)(`span`, {
              className: `sr-only`,
              children: (0, X.jsx)(l, {
                id: `conversationImport.waiting`,
                defaultMessage: `Waiting`,
                description: `Status of a conversation waiting in the import queue`,
              }),
            })
          : null),
      (n[25] = i.status),
      (n[26] = x));
  let S;
  n[27] === i.status
    ? (S = n[28])
    : ((S =
        i.status === `stopped`
          ? (0, X.jsx)(`span`, {
              className: `shrink-0 text-sm`,
              children: (0, X.jsx)(l, {
                id: `conversationImport.notImported`,
                defaultMessage: `Not imported`,
                description: `Status of a queued conversation whose import was stopped`,
              }),
            })
          : null),
      (n[27] = i.status),
      (n[28] = S));
  let w;
  n[29] === s?.status
    ? (w = n[30])
    : ((w =
        s?.status === `skipped`
          ? (0, X.jsx)(`span`, {
              className: `shrink-0 text-sm`,
              children: (0, X.jsx)(l, {
                id: `conversationImport.claude.skipped`,
                defaultMessage: `Skipped: no supported messages`,
                description: `Status of a conversation with no importable messages`,
              }),
            })
          : null),
      (n[29] = s?.status),
      (n[30] = w));
  let T;
  n[31] !== x ||
  n[32] !== S ||
  n[33] !== w ||
  n[34] !== h ||
  n[35] !== g ||
  n[36] !== _ ||
  n[37] !== y ||
  n[38] !== b
    ? ((T = (0, X.jsxs)(X.Fragment, { children: [h, g, _, y, b, x, S, w] })),
      (n[31] = x),
      (n[32] = S),
      (n[33] = w),
      (n[34] = h),
      (n[35] = g),
      (n[36] = _),
      (n[37] = y),
      (n[38] = b),
      (n[39] = T))
    : (T = n[39]);
  let E = T,
    D;
  return (
    n[40] !== i.status || n[41] !== E || n[42] !== s || n[43] !== o || n[44] !== u
      ? ((D = s?.conversation_id
          ? (0, X.jsx)(C, {
              className: `w-full justify-start`,
              color: `ghostActive`,
              size: `large`,
              to: `/c/${encodeURIComponent(s.conversation_id)}`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              title: u,
              "aria-label": u,
              "aria-describedby": o,
              children: E,
            })
          : (0, X.jsx)(t, {
              className: `w-full justify-start`,
              type: `button`,
              size: `large`,
              color: i.status === `failed` ? `ghostActive` : `ghostSecondary`,
              disabled: !0,
              disabledAppearance: `unchanged`,
              title: u,
              children: E,
            })),
        (n[40] = i.status),
        (n[41] = E),
        (n[42] = s),
        (n[43] = o),
        (n[44] = u),
        (n[45] = D))
      : (D = n[45]),
    D
  );
}
var Ze, Qe, X;
function $e() {
  return ($e = e(() => {
    ((Ze = V()), (Qe = W()), O(), R(), h(), E(), (X = U()));
  }))();
}
function et(e) {
  let n = (0, nt.c)(19),
    { attempts: r, busy: i, error: a, onClose: o } = e,
    s;
  n[0] === r ? (s = n[1]) : ((s = r.filter(tt)), (n[0] = r), (n[1] = s));
  let c = s.length,
    u;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(l, {
        id: `conversationImport.statusTitle`,
        defaultMessage: `Import status`,
        description: `Title of the conversation import progress and results screen`,
      })),
      (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] !== r.length || n[4] !== c
    ? ((d = (0, Z.jsx)(we, {
        title: u,
        subtitle: (0, Z.jsx)(`span`, {
          role: `status`,
          children: (0, Z.jsx)(l, {
            id: `conversationImport.importedCount`,
            defaultMessage: `{imported} of {total} imported`,
            description: `Number of successfully imported conversations in the batch`,
            values: { imported: c, total: r.length },
          }),
        }),
      })),
      (n[3] = r.length),
      (n[4] = c),
      (n[5] = d))
    : (d = n[5]);
  let f;
  n[6] === a
    ? (f = n[7])
    : ((f = a
        ? (0, Z.jsx)(A, {
            className: `shrink-0`,
            children: (0, Z.jsx)(`p`, { role: `alert`, className: `text-sm text-danger`, children: a }),
          })
        : null),
      (n[6] = a),
      (n[7] = f));
  let p;
  n[8] === r
    ? (p = n[9])
    : ((p = (0, Z.jsx)(A, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, Z.jsx)(Je, { attempts: r }),
      })),
      (n[8] = r),
      (n[9] = p));
  let m;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(l, {
        id: `conversationImport.done`,
        defaultMessage: `Done`,
        description: `Close the completed conversation import`,
      })),
      (n[10] = m))
    : (m = n[10]);
  let h;
  n[11] !== i || n[12] !== o
    ? ((h = (0, Z.jsx)(L, {
        className: `shrink-0`,
        children: (0, Z.jsx)(t, { type: `button`, disabled: i, onClick: o, children: m }),
      })),
      (n[11] = i),
      (n[12] = o),
      (n[13] = h))
    : (h = n[13]);
  let g;
  return (
    n[14] !== d || n[15] !== f || n[16] !== p || n[17] !== h
      ? ((g = (0, Z.jsxs)(Z.Fragment, { children: [d, f, p, h] })),
        (n[14] = d),
        (n[15] = f),
        (n[16] = p),
        (n[17] = h),
        (n[18] = g))
      : (g = n[18]),
    g
  );
}
function tt(e) {
  return e.status === `finished` && e.result.status === `success`;
}
var nt, Z;
function rt() {
  return (rt = e(() => {
    ((nt = V()), O(), R(), T(), $e(), Oe(), (Z = U()));
  }))();
}
function it(e) {
  let t = (0, dt.c)(49),
    { onClose: n } = e,
    r = u(a),
    [i] = (0, Q.useState)(ut),
    [o, s] = (0, Q.useState)(`source`),
    [c, d] = (0, Q.useState)(null),
    [f, p] = (0, Q.useState)(`claude`),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = []), (t[0] = m)) : (m = t[0]);
  let [h, g] = (0, Q.useState)(m),
    _;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = new Set()), (t[1] = _)) : (_ = t[1]);
  let [v, y] = (0, Q.useState)(_),
    [b, x] = (0, Q.useState)(!1),
    [S, C] = (0, Q.useState)(null),
    [w, T] = (0, Q.useState)(!1),
    E;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = []), (t[2] = E)) : (E = t[2]);
  let [D, O] = (0, Q.useState)(E),
    k = (0, Q.useRef)(!1),
    A = (0, Q.useRef)(null),
    N,
    P;
  (t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => () => {
        A.current?.abort();
      }),
      (P = []),
      (t[3] = N),
      (t[4] = P))
    : ((N = t[3]), (P = t[4])),
    (0, Q.useEffect)(N, P));
  let F;
  t[5] === o
    ? (F = t[6])
    : ((F = async function (e) {
        let t = e.target.files?.[0];
        if (((e.target.value = ``), t && !k.current)) {
          ((k.current = !0), T(!0), C(null), g([]), y(new Set()), x(!1), O([]));
          try {
            let e = await t.text();
            await new Promise(lt);
            let n = me(e);
            if (n.type === `manifest`) o === `source` ? (d(n), s(`prepare`)) : x(!0);
            else {
              let e = n.conversations;
              (g(e), y(new Set(e.flatMap(ct))), s(`selection`));
            }
          } catch {
            x(!0);
          }
          ((k.current = !1), T(!1));
        }
      }),
      (t[5] = o),
      (t[6] = F));
  let I = F,
    L;
  t[7] !== h || t[8] !== r || t[9] !== v || t[10] !== f || t[11] !== i || t[12] !== o
    ? ((L = async function () {
        if (o !== `selection` || k.current || v.size === 0) return;
        k.current = !0;
        let e = new AbortController();
        ((A.current = e), T(!0), C(null));
        let t = h.filter((e, t) => v.has(t));
        (O(t.map(st)), s(`status`));
        try {
          for (let [n, a] of t.entries()) {
            if (e.signal.aborted) break;
            let t = fe();
            if (
              i.userId == null ||
              i.accountId == null ||
              t?.userId !== i.userId ||
              t?.accountId !== i.accountId ||
              t?.accountUserId !== i.accountUserId
            ) {
              C(
                (0, $.jsx)(l, {
                  id: `conversationImport.claude.accountChanged`,
                  defaultMessage: `The selected account changed. Remaining imports were stopped. Reopen this tool to import into the new account.`,
                  description: `Error when the identity or workspace changes after opening the Claude importer`,
                }),
              );
              break;
            }
            O((e) => e.map((e, t) => (t === n ? { sourceTitle: a.title, status: `importing` } : e)));
            try {
              let t = await se.safePost(`/data-import/conversation`, {
                signal: e.signal,
                requestBody: { source: f, conversation: a.source },
                additionalHeaders: { [ee]: i.accountId },
              });
              (t.status === `success` && ce(r),
                O((e) =>
                  e.map((e, r) => (r === n ? { sourceTitle: a.title, status: `finished`, result: t } : e)),
                ));
            } catch {
              if (e.signal.aborted) break;
              O((e) => e.map((e, t) => (t === n ? { sourceTitle: a.title, status: `failed` } : e)));
            }
          }
        } catch {
          C(
            (0, $.jsx)(l, {
              id: `conversationImport.claude.stopped`,
              defaultMessage: `Import stopped unexpectedly. Check the sidebar before retrying.`,
              description: `Generic error after an interrupted Claude import batch; a request may have persisted before failing`,
            }),
          );
        }
        ((A.current = null), (k.current = !1), T(!1), O(at));
      }),
      (t[7] = h),
      (t[8] = r),
      (t[9] = v),
      (t[10] = f),
      (t[11] = i),
      (t[12] = o),
      (t[13] = L))
    : (L = t[13]);
  let te = L,
    R;
  t[14] === n
    ? (R = t[15])
    : ((R = (e) => {
        !e && !k.current && n();
      }),
      (t[14] = n),
      (t[15] = R));
  let z;
  t[16] === te
    ? (z = t[17])
    : ((z = (e) => {
        (e.preventDefault(), te());
      }),
      (t[16] = te),
      (t[17] = z));
  let B;
  t[18] !== w || t[19] !== b || t[20] !== I || t[21] !== f || t[22] !== o
    ? ((B =
        o === `source`
          ? (0, $.jsx)(Ue, {
              source: f,
              onSourceChange: p,
              onAlreadyDownloaded: () => {
                (d(null), x(!1), s(`prepare`));
              },
              busy: w,
              fileError: b,
              onChange: (e) => {
                I(e);
              },
            })
          : null),
      (t[18] = w),
      (t[19] = b),
      (t[20] = I),
      (t[21] = f),
      (t[22] = o),
      (t[23] = B))
    : (B = t[23]);
  let V;
  t[24] !== w || t[25] !== b || t[26] !== I || t[27] !== c || t[28] !== o
    ? ((V =
        o === `prepare`
          ? (0, $.jsx)(ke, {
              manifest: c,
              busy: w,
              fileError: b,
              onChange: (e) => {
                I(e);
              },
              onBack: () => {
                (x(!1), d(null), s(`source`));
              },
            })
          : null),
      (t[24] = w),
      (t[25] = b),
      (t[26] = I),
      (t[27] = c),
      (t[28] = o),
      (t[29] = V))
    : (V = t[29]);
  let H;
  t[30] !== h || t[31] !== v || t[32] !== o
    ? ((H =
        o === `selection`
          ? (0, $.jsx)(Be, {
              conversations: h,
              selected: v,
              onSelectionChange: y,
              onBack: () => s(`prepare`),
            })
          : null),
      (t[30] = h),
      (t[31] = v),
      (t[32] = o),
      (t[33] = H))
    : (H = t[33]);
  let U;
  t[34] !== D || t[35] !== w || t[36] !== S || t[37] !== n || t[38] !== o
    ? ((U = o === `status` ? (0, $.jsx)(et, { attempts: D, busy: w, error: S, onClose: n }) : null),
      (t[34] = D),
      (t[35] = w),
      (t[36] = S),
      (t[37] = n),
      (t[38] = o),
      (t[39] = U))
    : (U = t[39]);
  let W;
  t[40] !== B || t[41] !== V || t[42] !== H || t[43] !== U || t[44] !== z
    ? ((W = (0, $.jsxs)(M, {
        as: `form`,
        size: `scrollable`,
        "data-dd-privacy": `hidden`,
        "data-sr-block": `true`,
        onSubmit: z,
        children: [B, V, H, U],
      })),
      (t[40] = B),
      (t[41] = V),
      (t[42] = H),
      (t[43] = U),
      (t[44] = z),
      (t[45] = W))
    : (W = t[45]);
  let ne;
  return (
    t[46] !== W || t[47] !== R
      ? ((ne = (0, $.jsx)(j, { open: !0, size: `wide`, variant: `chatgpt`, onOpenChange: R, children: W })),
        (t[46] = W),
        (t[47] = R),
        (t[48] = ne))
      : (ne = t[48]),
    ne
  );
}
function at(e) {
  return e.map(ot);
}
function ot(e) {
  return e.status === `queued` || e.status === `importing`
    ? { sourceTitle: e.sourceTitle, status: `stopped` }
    : e;
}
function st(e) {
  return { sourceTitle: e.title, status: `queued` };
}
function ct(e, t) {
  return e.messageCount > 0 ? [t] : [];
}
function lt(e) {
  return setTimeout(e, 0);
}
function ut() {
  let e = fe();
  return { userId: e?.userId, accountId: e?.accountId, accountUserId: e?.accountUserId };
}
var dt, Q, $;
function ft() {
  return (ft = e(() => {
    ((dt = V()),
      p(),
      I(),
      (Q = W()),
      O(),
      ae(),
      le(),
      ue(),
      B(),
      T(),
      H(),
      _e(),
      Pe(),
      He(),
      qe(),
      rt(),
      ($ = U()));
  }))();
}
ft();
export { it as ClaudeImportDialog };
//# sourceMappingURL=dialog-cffe9350c5f8.js.map
