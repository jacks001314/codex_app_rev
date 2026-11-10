import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  CY as i,
  FBt as a,
  HFt as o,
  HO as s,
  IO as c,
  IU as l,
  JO as u,
  LNt as d,
  LO as f,
  OT as p,
  PBt as m,
  Qst as h,
  RO as g,
  SH as _,
  Smt as v,
  TY as y,
  VRt as b,
  WO as x,
  X3 as S,
  XOt as C,
  Y3 as w,
  Z3 as T,
  ZSt as E,
  ck as D,
  e6 as O,
  ezt as k,
  gRt as A,
  kH as j,
  kLt as M,
  kRt as N,
  kT as P,
  nB as ee,
  okt as F,
  oq as te,
  qO as I,
  rB as L,
  rk as R,
  sct as z,
  sw as B,
  tk as V,
  tkt as H,
  tzt as U,
  uw as W,
  wH as ne,
  zO as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GLn as ie,
  SRn as ae,
  YRr as oe,
  bRn as se,
  iRr as ce,
  nzr as le,
  oun as ue,
  qLn as de,
  sun as fe,
  tyr as pe,
} from "./app-initial-ad16eaadf81f.js";
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
      r = U({ protocol: /^https$/ }).safeParse(t?.export_url);
    if (!r.success) throw Error(`Expected an HTTPS conversations download in the manifest.`);
    return {
      type: `manifest`,
      conversationsUrl: r.data,
      filename: t?.filename || null,
      hasMultipleConversationBatches: e.length > 1,
    };
  }
  let r = M(he).safeParse(t);
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
      (he = A({ uuid: b(), name: b(), chat_messages: M(k()) })),
      (ge = N({
        data_files: M(N({ category: b(), export_url: k().optional(), filename: b().nullable().catch(null) })),
      })));
  }))();
}
function ve(e) {
  let t = (0, xe.c)(19),
    { busy: n, errorId: r, onChange: i, size: a, children: o } = e,
    s = (0, Se.useId)(),
    c = (0, Se.useRef)(null),
    l;
  t[0] !== n || t[1] !== s || t[2] !== i
    ? ((l = (0, G.jsx)(`input`, {
        ref: c,
        className: `hidden`,
        type: `file`,
        "aria-labelledby": s,
        accept: `.json,application/json`,
        disabled: n,
        onChange: i,
      })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = i),
      (t[3] = l))
    : (l = t[3]);
  let u = a === `large` ? `w-full justify-center` : void 0,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = () => c.current?.click()), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== n || t[6] !== o || t[7] !== a
    ? ((f =
        n && a === `large`
          ? (0, G.jsx)(`span`, {
              role: `status`,
              children: (0, G.jsx)(H, {
                id: `conversationImport.reading`,
                defaultMessage: `Discovering conversations…`,
                description: `Loading status while finding the conversations available to import in a local export file`,
              }),
            })
          : o),
      (t[5] = n),
      (t[6] = o),
      (t[7] = a),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== n || t[10] !== s || t[11] !== r || t[12] !== a || t[13] !== u || t[14] !== f
    ? ((p = (0, G.jsx)(w, {
        id: s,
        className: u,
        type: `button`,
        size: a,
        loading: n,
        "aria-describedby": r,
        onClick: d,
        children: f,
      })),
      (t[9] = n),
      (t[10] = s),
      (t[11] = r),
      (t[12] = a),
      (t[13] = u),
      (t[14] = f),
      (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== l || t[17] !== p
      ? ((m = (0, G.jsxs)(G.Fragment, { children: [l, p] })), (t[16] = l), (t[17] = p), (t[18] = m))
      : (m = t[18]),
    m
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
          ? (0, G.jsx)(H, {
              id: `conversationImport.claude.invalidManifest`,
              defaultMessage: `Could not read this export. Make sure you selected a valid manifest JSON file.`,
              description: `Error below the manifest upload button when the selected Claude export cannot be read`,
            })
          : (0, G.jsx)(H, {
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
    ((xe = m()), (Se = a()), C(), T(), (G = d()));
  }))();
}
function we(e) {
  let t = (0, Ee.c)(5),
    { title: n, subtitle: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, De.jsx)(I, {
        asChild: !0,
        children: (0, De.jsx)(`h2`, { ref: Te, className: `outline-none`, tabIndex: -1, children: n }),
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, De.jsx)(re, {
          className: `shrink-0`,
          children: (0, De.jsx)(g, { title: i, subtitle: r }),
        })),
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
    ((Ee = m()), u(), s(), (De = d()));
  }))();
}
function ke(e) {
  let t = (0, Me.c)(46),
    { manifest: n, busy: r, fileError: i, onChange: a, onBack: o } = e,
    s = F(),
    c = (0, Ne.useId)(),
    u = n?.filename,
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, K.jsx)(we, {
        subtitle: null,
        title: (0, K.jsx)(H, {
          id: `conversationImport.claude.prepareExport`,
          defaultMessage: `Prepare your conversations`,
          description: `Title of the instructions for downloading, unzipping, and uploading a Claude conversation export`,
        }),
      })),
      (t[0] = d))
    : (d = t[0]);
  let p;
  t[1] === n
    ? (p = t[2])
    : ((p = (0, K.jsx)(B, {
        inset: !1,
        controlSizing: `content`,
        label: n
          ? (0, K.jsx)(H, {
              id: `conversationImport.claude.downloadStep`,
              defaultMessage: `1. Download your conversations`,
              description: `First step after uploading a Claude export manifest`,
            })
          : (0, K.jsx)(H, {
              id: `conversationImport.claude.downloadedStep`,
              defaultMessage: `1. Conversations downloaded`,
              description: `Completed download step when the user says they already downloaded their Claude export`,
            }),
        control: n
          ? (0, K.jsx)(S, {
              href: n.conversationsUrl,
              target: `_blank`,
              rel: `noopener noreferrer`,
              referrerPolicy: `no-referrer`,
              color: `secondary`,
              size: `medium`,
              onClick: (e) =>
                ae({
                  event: e,
                  href: n.conversationsUrl,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }),
              children: (0, K.jsx)(H, {
                id: `conversationImport.claude.download`,
                defaultMessage: `Download`,
                description: `Open the conversations archive download from the uploaded Claude manifest`,
              }),
            })
          : (0, K.jsx)(_, {}),
      })),
      (t[1] = n),
      (t[2] = p));
  let m;
  t[3] === n?.hasMultipleConversationBatches
    ? (m = t[4])
    : ((m = n?.hasMultipleConversationBatches
        ? (0, K.jsxs)(`p`, {
            className: `flex items-center gap-2 text-sm text-warning select-none`,
            role: `alert`,
            children: [
              (0, K.jsx)(l, {}),
              (0, K.jsx)(H, {
                id: `conversationImport.claude.multipleBatchesWarning`,
                defaultMessage: `Your export has multiple batches of conversations. Only the first batch will be imported.`,
                description: `Warning under the first preparation step when a Claude export manifest contains more than one conversations archive; only the first archive is currently supported`,
              }),
            ],
          })
        : null),
      (t[3] = n?.hasMultipleConversationBatches),
      (t[4] = m));
  let h;
  t[5] !== p || t[6] !== m
    ? ((h = (0, K.jsxs)(`li`, { children: [p, m] })), (t[5] = p), (t[6] = m), (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] === u
    ? (g = t[9])
    : ((g = u
        ? (0, K.jsx)(H, {
            id: `conversationImport.claude.unzipNamedArchiveStep`,
            defaultMessage: `2. Unzip <code>{filename}</code>`,
            description: `Second step after uploading a Claude export manifest; filename is the downloaded ZIP archive, and code formats it`,
            values: { filename: u, code: je },
          })
        : (0, K.jsx)(H, {
            id: `conversationImport.claude.unzipArchiveStep`,
            defaultMessage: `2. Unzip your conversations ZIP file`,
            description: `Second step when the Claude conversations ZIP filename is not known`,
          })),
      (t[8] = u),
      (t[9] = g));
  let v;
  t[10] === u
    ? (v = t[11])
    : ((v = u
        ? (0, K.jsx)(H, {
            id: `conversationImport.claude.unzipNamedArchiveHelp`,
            defaultMessage: `Double click the downloaded {filename} file to unzip it. You should see conversations.json.`,
            description: `Unzip instructions; filename is the ZIP archive name from the Claude manifest, and conversations.json is the extracted file to upload`,
            values: { filename: u },
          })
        : (0, K.jsx)(H, {
            id: `conversationImport.claude.unzipArchiveHelp`,
            defaultMessage: `Double click the downloaded ZIP file to unzip it. You should see conversations.json.`,
            description: `Unzip instructions when the Claude manifest does not provide a filename; conversations.json is the extracted file to upload`,
          })),
      (t[10] = u),
      (t[11] = v));
  let y;
  t[12] === s
    ? (y = t[13])
    : ((y = s.formatMessage({
        id: `conversationImport.claude.extractHelpLabel`,
        defaultMessage: `How to unzip your conversations`,
        description: `Accessible label for the unzip instructions tooltip`,
      })),
      (t[12] = s),
      (t[13] = y));
  let b;
  t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = (0, K.jsx)(te, {})), (t[14] = b)) : (b = t[14]);
  let x;
  t[15] === y
    ? (x = t[16])
    : ((x = (0, K.jsx)(w, {
        type: `button`,
        color: `ghost`,
        size: `medium`,
        uniform: !0,
        "aria-label": y,
        children: b,
      })),
      (t[15] = y),
      (t[16] = x));
  let C;
  t[17] !== v || t[18] !== x
    ? ((C = (0, K.jsx)(ee, { tooltipContent: v, children: x })), (t[17] = v), (t[18] = x), (t[19] = C))
    : (C = t[19]);
  let T;
  t[20] !== C || t[21] !== g
    ? ((T = (0, K.jsx)(`li`, {
        children: (0, K.jsx)(B, { inset: !1, controlSizing: `content`, label: g, control: C }),
      })),
      (t[20] = C),
      (t[21] = g),
      (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, K.jsx)(H, {
        id: `conversationImport.claude.uploadStep`,
        defaultMessage: `3. Upload extracted <code>conversations.json</code>`,
        description: `Third step after uploading a Claude export manifest; code formats the filename`,
        values: { code: Ae },
      })),
      (t[23] = E))
    : (E = t[23]);
  let D = i ? c : void 0,
    O;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, K.jsx)(H, {
        id: `conversationImport.claude.upload`,
        defaultMessage: `Upload`,
        description: `Button to choose the extracted conversations.json file`,
      })),
      (t[24] = O))
    : (O = t[24]);
  let k;
  t[25] !== r || t[26] !== a || t[27] !== D
    ? ((k = (0, K.jsx)(B, {
        inset: !1,
        controlSizing: `content`,
        label: E,
        control: (0, K.jsx)(ve, { busy: r, errorId: D, onChange: a, size: `medium`, children: O }),
      })),
      (t[25] = r),
      (t[26] = a),
      (t[27] = D),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] !== i || t[30] !== c
    ? ((A = i ? (0, K.jsx)(ye, { id: c, fileType: `conversations` }) : null),
      (t[29] = i),
      (t[30] = c),
      (t[31] = A))
    : (A = t[31]);
  let j;
  t[32] !== k || t[33] !== A
    ? ((j = (0, K.jsxs)(`li`, { children: [k, A] })), (t[32] = k), (t[33] = A), (t[34] = j))
    : (j = t[34]);
  let M;
  t[35] !== T || t[36] !== j || t[37] !== h
    ? ((M = (0, K.jsx)(re, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, K.jsxs)(`ol`, { className: `flex flex-col gap-3`, children: [h, T, j] }),
      })),
      (t[35] = T),
      (t[36] = j),
      (t[37] = h),
      (t[38] = M))
    : (M = t[38]);
  let N;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, K.jsx)(H, {
        id: `conversationImport.back`,
        defaultMessage: `Back`,
        description: `Button to return to the previous step of conversation import`,
      })),
      (t[39] = N))
    : (N = t[39]);
  let P;
  t[40] !== r || t[41] !== o
    ? ((P = (0, K.jsx)(f, {
        children: (0, K.jsx)(w, { type: `button`, color: `secondary`, disabled: r, onClick: o, children: N }),
      })),
      (t[40] = r),
      (t[41] = o),
      (t[42] = P))
    : (P = t[42]);
  let I;
  return (
    t[43] !== M || t[44] !== P
      ? ((I = (0, K.jsxs)(K.Fragment, { children: [d, M, P] })), (t[43] = M), (t[44] = P), (t[45] = I))
      : (I = t[45]),
    I
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
    ((Me = m()), (Ne = a()), C(), T(), s(), se(), y(), L(), W(), Ce(), Oe(), (K = d()));
  }))();
}
function Fe(e) {
  let t = (0, Le.c)(37),
    { conversations: n, selected: r, onSelectionChange: i } = e,
    a = F(),
    [o, s] = (0, Re.useState)(0),
    c = Math.ceil(n.length / 100),
    l;
  t[0] !== n || t[1] !== i
    ? ((l = () => i(new Set(n.flatMap(Ie)))), (t[0] = n), (t[1] = i), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, q.jsx)(H, {
        id: `conversationImport.claude.selectAll`,
        defaultMessage: `Select all`,
        description: `Button selecting all nonempty conversations in the Claude import preview`,
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === l
    ? (d = t[5])
    : ((d = (0, q.jsx)(w, { type: `button`, color: `secondary`, onClick: l, children: u })),
      (t[4] = l),
      (t[5] = d));
  let f;
  t[6] === i ? (f = t[7]) : ((f = () => i(new Set())), (t[6] = i), (t[7] = f));
  let m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, q.jsx)(H, {
        id: `conversationImport.claude.clear`,
        defaultMessage: `Clear selection`,
        description: `Button clearing selected conversations in the Claude import preview`,
      })),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] === f
    ? (h = t[10])
    : ((h = (0, q.jsx)(w, { type: `button`, color: `secondary`, onClick: f, children: m })),
      (t[9] = f),
      (t[10] = h));
  let g;
  t[11] !== d || t[12] !== h
    ? ((g = (0, q.jsxs)(`div`, { className: `flex shrink-0 flex-wrap gap-3 select-none`, children: [d, h] })),
      (t[11] = d),
      (t[12] = h),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, q.jsx)(`th`, {
        className: `p-2 text-start`,
        children: (0, q.jsx)(H, {
          id: `conversationImport.claude.import`,
          defaultMessage: `Import`,
          description: `Column heading in the Claude conversation import preview table`,
        }),
      })),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, q.jsx)(`th`, {
        className: `p-2 text-start`,
        children: (0, q.jsx)(H, {
          id: `conversationImport.claude.sourceTitle`,
          defaultMessage: `Title`,
          description: `Column heading in the Claude conversation import preview table`,
        }),
      })),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, q.jsx)(`thead`, {
        className: `sticky top-0 z-10 bg-surface text-secondary dark:bg-surface-tertiary`,
        children: (0, q.jsxs)(`tr`, {
          children: [
            _,
            v,
            (0, q.jsx)(`th`, {
              className: `p-2 text-start`,
              children: (0, q.jsx)(H, {
                id: `conversationImport.claude.sourceMessages`,
                defaultMessage: `Messages`,
                description: `Column heading in the Claude conversation import preview table`,
              }),
            }),
          ],
        }),
      })),
      (t[16] = y))
    : (y = t[16]);
  let b;
  if (t[17] !== n || t[18] !== a || t[19] !== i || t[20] !== o || t[21] !== r) {
    let e;
    (t[23] !== a || t[24] !== i || t[25] !== o || t[26] !== r
      ? ((e = (e, t) => {
          let n = o * 100 + t;
          return (0, q.jsxs)(
            `tr`,
            {
              className: `border-t border-default`,
              children: [
                (0, q.jsx)(`td`, {
                  className: `p-2`,
                  children: (0, q.jsx)(`div`, {
                    className: `relative`,
                    children: (0, q.jsx)(p, {
                      "aria-label": a.formatMessage(
                        {
                          id: `conversationImport.claude.select`,
                          defaultMessage: `Import {title}`,
                          description: `Accessible label for selecting a Claude conversation to import; title is its source title`,
                        },
                        { title: e.title },
                      ),
                      checked: r.has(n),
                      disabled: e.messageCount === 0,
                      onCheckedChange: (e) => {
                        let t = new Set(r);
                        (e ? t.add(n) : t.delete(n), i(t));
                      },
                    }),
                  }),
                }),
                (0, q.jsx)(`td`, {
                  className: `p-2`,
                  children:
                    e.title ||
                    (0, q.jsx)(H, {
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
        (t[23] = a),
        (t[24] = i),
        (t[25] = o),
        (t[26] = r),
        (t[27] = e))
      : (e = t[27]),
      (b = n.slice(o * 100, (o + 1) * 100).map(e)),
      (t[17] = n),
      (t[18] = a),
      (t[19] = i),
      (t[20] = o),
      (t[21] = r),
      (t[22] = b));
  } else b = t[22];
  let x;
  t[28] === b
    ? (x = t[29])
    : ((x = (0, q.jsx)(`div`, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, q.jsxs)(`table`, {
          className: `w-full text-start`,
          children: [y, (0, q.jsx)(`tbody`, { children: b })],
        }),
      })),
      (t[28] = b),
      (t[29] = x));
  let S;
  t[30] !== o || t[31] !== c
    ? ((S =
        c > 1
          ? (0, q.jsxs)(`div`, {
              className: `flex shrink-0 items-center justify-between gap-3 select-none`,
              children: [
                (0, q.jsx)(w, {
                  type: `button`,
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: o === 0,
                  onClick: () => s(o - 1),
                  children: (0, q.jsx)(H, {
                    id: `conversationImport.claude.previous`,
                    defaultMessage: `Previous`,
                    description: `Show the previous page of conversations in a Claude export`,
                  }),
                }),
                (0, q.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, q.jsx)(H, {
                    id: `conversationImport.claude.page`,
                    defaultMessage: `Page {page} of {pages}`,
                    description: `Current page and total pages in the Claude conversation import preview`,
                    values: { page: o + 1, pages: c },
                  }),
                }),
                (0, q.jsx)(w, {
                  type: `button`,
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: o + 1 === c,
                  onClick: () => s(o + 1),
                  children: (0, q.jsx)(H, {
                    id: `conversationImport.claude.next`,
                    defaultMessage: `Next`,
                    description: `Show the next page of conversations in a Claude export`,
                  }),
                }),
              ],
            })
          : null),
      (t[30] = o),
      (t[31] = c),
      (t[32] = S))
    : (S = t[32]);
  let C;
  return (
    t[33] !== x || t[34] !== S || t[35] !== g
      ? ((C = (0, q.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-3`, children: [g, x, S] })),
        (t[33] = x),
        (t[34] = S),
        (t[35] = g),
        (t[36] = C))
      : (C = t[36]),
    C
  );
}
function Ie(e, t) {
  return e.messageCount > 0 ? [t] : [];
}
var Le, Re, q;
function ze() {
  return (ze = e(() => {
    ((Le = m()), (Re = a()), C(), T(), P(), (q = d()));
  }))();
}
function Be(e) {
  let t = (0, Ve.c)(23),
    { conversations: n, selected: r, onSelectionChange: i, onBack: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, J.jsx)(H, {
        id: `conversationImport.selectTitle`,
        defaultMessage: `Select conversations`,
        description: `Title of the step for choosing conversations to import`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(we, {
        title: o,
        subtitle: (0, J.jsx)(H, {
          id: `conversationImport.step`,
          defaultMessage: `Step {step} of 2`,
          description: `Progress through choosing an export and selecting conversations before importing`,
          values: { step: 2 },
        }),
      })),
      (t[1] = s))
    : (s = t[1]);
  let c;
  t[2] === n.length
    ? (c = t[3])
    : ((c = (0, J.jsx)(re, {
        className: `shrink-0`,
        children: (0, J.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: (0, J.jsx)(H, {
            id: `conversationImport.foundCount`,
            defaultMessage: `Found {count, plural, one {# conversation} other {# conversations}}`,
            description: `Number of conversations found in the selected export file`,
            values: { count: n.length },
          }),
        }),
      })),
      (t[2] = n.length),
      (t[3] = c));
  let l;
  t[4] !== n || t[5] !== i || t[6] !== r
    ? ((l = (0, J.jsx)(re, {
        className: `min-h-0`,
        children: (0, J.jsx)(Fe, { conversations: n, selected: r, onSelectionChange: i }),
      })),
      (t[4] = n),
      (t[5] = i),
      (t[6] = r),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(H, {
        id: `conversationImport.back`,
        defaultMessage: `Back`,
        description: `Return to choosing the conversation export file`,
      })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === a
    ? (d = t[10])
    : ((d = (0, J.jsx)(w, { type: `button`, color: `secondary`, onClick: a, children: u })),
      (t[9] = a),
      (t[10] = d));
  let p = r.size === 0,
    m;
  t[11] === r.size
    ? (m = t[12])
    : ((m = (0, J.jsx)(H, {
        id: `conversationImport.claude.submit`,
        defaultMessage: `Import selected ({count})`,
        description: `Button starting a Claude import batch; count is the number of selected conversations`,
        values: { count: r.size },
      })),
      (t[11] = r.size),
      (t[12] = m));
  let h;
  t[13] !== p || t[14] !== m
    ? ((h = (0, J.jsx)(w, { type: `submit`, disabled: p, children: m })),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== d || t[17] !== h
    ? ((g = (0, J.jsxs)(f, { className: `shrink-0`, children: [d, h] })),
      (t[16] = d),
      (t[17] = h),
      (t[18] = g))
    : (g = t[18]);
  let _;
  return (
    t[19] !== g || t[20] !== c || t[21] !== l
      ? ((_ = (0, J.jsxs)(J.Fragment, { children: [s, c, l, g] })),
        (t[19] = g),
        (t[20] = c),
        (t[21] = l),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
var Ve, J;
function He() {
  return (He = e(() => {
    ((Ve = m()), C(), T(), s(), ze(), Oe(), (J = d()));
  }))();
}
function Ue(e) {
  let t = (0, Ge.c)(38),
    { source: n, onSourceChange: r, busy: i, fileError: a, onChange: o, onAlreadyDownloaded: s } = e,
    c = F(),
    l = (0, Ke.useId)(),
    u = (0, Ke.useId)(),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Y.jsx)(H, {
        id: `conversationImport.title`,
        defaultMessage: `Import conversations`,
        description: `Title of the conversation import setup dialog`,
      })),
      (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(we, {
        title: d,
        subtitle: (0, Y.jsx)(H, {
          id: `conversationImport.step`,
          defaultMessage: `Step {step} of 2`,
          description: `Progress through choosing an export and selecting conversations before importing`,
          values: { step: 1 },
        }),
      })),
      (t[1] = f))
    : (f = t[1]);
  let p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Y.jsx)(H, {
        id: `conversationImport.source`,
        defaultMessage: `Import from`,
        description: `Label for the conversation export source dropdown`,
      })),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== i || t[4] !== r || t[5] !== n || t[6] !== l
    ? ((m = (0, Y.jsx)(`div`, {
        className: `border-b border-default`,
        children: (0, Y.jsx)(B, {
          inset: !1,
          controlSizing: `content`,
          label: p,
          control: (e) =>
            (0, Y.jsx)(V, {
              align: `end`,
              disabled: i,
              triggerButton: (0, Y.jsxs)(w, {
                ...e,
                "aria-labelledby": `${e[`aria-labelledby`]} ${l}`,
                type: `button`,
                color: `secondary`,
                size: `medium`,
                disabled: i,
                children: [
                  (0, Y.jsx)(`span`, {
                    id: l,
                    children: (0, Y.jsx)(H, {
                      id: `conversationImport.claude.sourceName`,
                      defaultMessage: `Claude`,
                      description: `Name of the Claude conversation export source; keep the brand name untranslated`,
                    }),
                  }),
                  (0, Y.jsx)(j, {}),
                ],
              }),
              children: (0, Y.jsx)(R.RadioGroup, {
                value: n,
                onValueChange: r,
                children: (0, Y.jsx)(R.RadioItem, {
                  value: `claude`,
                  children: (0, Y.jsx)(H, {
                    id: `conversationImport.claude.sourceName`,
                    defaultMessage: `Claude`,
                    description: `Name of the Claude conversation export source; keep the brand name untranslated`,
                  }),
                }),
              }),
            }),
        }),
      })),
      (t[3] = i),
      (t[4] = r),
      (t[5] = n),
      (t[6] = l),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(`p`, {
        children: (0, Y.jsx)(H, {
          id: `conversationImport.claude.manifestInstructions`,
          defaultMessage: `<help>Export your data from Claude</help>, then upload the manifest JSON file`,
          description: `Instructions to export data from Claude and upload the manifest JSON containing download links; help links to Claude's data export settings`,
          values: { help: We },
        }),
      })),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] === c
    ? (g = t[10])
    : ((g = c.formatMessage({
        id: `conversationImport.claude.exportHelp`,
        defaultMessage: `How to export your Claude data`,
        description: `Accessible label for the help icon linking to Claude's data export guide`,
      })),
      (t[9] = c),
      (t[10] = g));
  let _, v;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Y.jsx)(H, {
        id: `conversationImport.claude.exportHelp`,
        defaultMessage: `How to export your Claude data`,
        description: `Tooltip for the help icon linking to Claude's data export guide`,
      })),
      (v = (0, Y.jsx)(te, {})),
      (t[11] = _),
      (t[12] = v))
    : ((_ = t[11]), (v = t[12]));
  let y;
  t[13] === g
    ? (y = t[14])
    : ((y = (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          h,
          (0, Y.jsx)(ie, {
            href: `https://support.claude.com/en/articles/9450526-export-your-claude-data`,
            openTarget: `external-browser`,
            initiator: `open_in_browser_bridge`,
            "aria-label": g,
            tooltipContent: _,
            children: v,
          }),
        ],
      })),
      (t[13] = g),
      (t[14] = y));
  let b;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(`p`, {
        className: `text-sm text-secondary`,
        children: (0, Y.jsx)(H, {
          id: `conversationImport.claude.exclusions`,
          defaultMessage: `Files, artifacts, and projects are not imported`,
          description: `Limitations of importing Claude conversations into ChatGPT`,
        }),
      })),
      (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] === y
    ? (x = t[17])
    : ((x = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [y, b] })),
      (t[16] = y),
      (t[17] = x));
  let S = a ? u : void 0,
    C;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(H, {
        id: `conversationImport.claude.uploadManifest`,
        defaultMessage: `Upload manifest`,
        description: `Button to choose the manifest JSON file from a Claude data export`,
      })),
      (t[18] = C))
    : (C = t[18]);
  let T;
  t[19] !== i || t[20] !== o || t[21] !== S
    ? ((T = (0, Y.jsx)(ve, { busy: i, errorId: S, onChange: o, size: `large`, children: C })),
      (t[19] = i),
      (t[20] = o),
      (t[21] = S),
      (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] !== a || t[24] !== u
    ? ((E = a ? (0, Y.jsx)(ye, { id: u, fileType: `manifest` }) : null),
      (t[23] = a),
      (t[24] = u),
      (t[25] = E))
    : (E = t[25]);
  let D;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Y.jsx)(H, {
        id: `conversationImport.claude.alreadyDownloaded`,
        defaultMessage: `I already downloaded my data`,
        description: `Skip uploading the Claude manifest and continue to unzipping and uploading conversations already downloaded`,
      })),
      (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] !== i || t[28] !== s
    ? ((O = (0, Y.jsx)(w, {
        className: `w-full justify-center`,
        type: `button`,
        color: `secondary`,
        size: `large`,
        disabled: i,
        onClick: s,
        children: D,
      })),
      (t[27] = i),
      (t[28] = s),
      (t[29] = O))
    : (O = t[29]);
  let k;
  t[30] !== T || t[31] !== E || t[32] !== O
    ? ((k = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [T, E, O] })),
      (t[30] = T),
      (t[31] = E),
      (t[32] = O),
      (t[33] = k))
    : (k = t[33]);
  let A;
  return (
    t[34] !== x || t[35] !== k || t[36] !== m
      ? ((A = (0, Y.jsxs)(Y.Fragment, {
          children: [
            f,
            (0, Y.jsx)(re, {
              className: `min-h-0 overflow-y-auto`,
              children: (0, Y.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [m, x, k] }),
            }),
          ],
        })),
        (t[34] = x),
        (t[35] = k),
        (t[36] = m),
        (t[37] = A))
      : (A = t[37]),
    A
  );
}
function We(e) {
  return (0, Y.jsx)(
    ie,
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
    ((Ge = m()), (Ke = a()), C(), T(), s(), D(), de(), y(), W(), Ce(), Oe(), (Y = d()));
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
    { attempt: r } = e,
    a = F(),
    o = (0, Qe.useId)(),
    s = r.status === `finished` ? r.result : null,
    c;
  n[0] !== r.sourceTitle || n[1] !== a || n[2] !== s?.title
    ? ((c =
        s?.title ||
        r.sourceTitle ||
        a.formatMessage({
          id: `conversationImport.claude.untitled`,
          defaultMessage: `Untitled`,
          description: `Fallback title for a Claude export conversation with an empty name`,
        })),
      (n[0] = r.sourceTitle),
      (n[1] = a),
      (n[2] = s?.title),
      (n[3] = c))
    : (c = n[3]);
  let l = c,
    u;
  n[4] !== r.status || n[5] !== l
    ? ((u =
        r.status === `importing`
          ? (0, X.jsxs)(`span`, {
              role: `status`,
              children: [
                (0, X.jsx)(t, {}),
                (0, X.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, X.jsx)(H, {
                    id: `conversationImport.uploadingConversation`,
                    defaultMessage: `Importing {title}`,
                    description: `Accessible status of the conversation currently being imported`,
                    values: { title: l },
                  }),
                }),
              ],
            })
          : null),
      (n[4] = r.status),
      (n[5] = l),
      (n[6] = u))
    : (u = n[6]);
  let d;
  n[7] === s?.status
    ? (d = n[8])
    : ((d = s?.status === `success` ? (0, X.jsx)(ne, {}) : null), (n[7] = s?.status), (n[8] = d));
  let f;
  n[9] === r.status
    ? (f = n[10])
    : ((f = r.status === `failed` ? (0, X.jsx)(i, {}) : null), (n[9] = r.status), (n[10] = f));
  let p;
  n[11] !== u || n[12] !== d || n[13] !== f
    ? ((p = (0, X.jsxs)(`span`, {
        className: `flex size-5 shrink-0 items-center justify-center`,
        children: [u, d, f],
      })),
      (n[11] = u),
      (n[12] = d),
      (n[13] = f),
      (n[14] = p))
    : (p = n[14]);
  let m;
  n[15] === l
    ? (m = n[16])
    : ((m = (0, X.jsx)(`span`, { className: `min-w-0 flex-1 truncate text-start`, children: l })),
      (n[15] = l),
      (n[16] = m));
  let h;
  n[17] !== s || n[18] !== o
    ? ((h =
        s?.status === `success` && !s.already_imported
          ? (0, X.jsx)(`span`, {
              id: o,
              className: `sr-only`,
              children: (0, X.jsx)(H, {
                id: `conversationImport.imported`,
                defaultMessage: `Imported`,
                description: `Accessible status of a successfully imported conversation`,
              }),
            })
          : null),
      (n[17] = s),
      (n[18] = o),
      (n[19] = h))
    : (h = n[19]);
  let g;
  n[20] === r.status
    ? (g = n[21])
    : ((g =
        r.status === `failed`
          ? (0, X.jsx)(`span`, {
              role: `alert`,
              className: `sr-only`,
              children: (0, X.jsx)(H, {
                id: `conversationImport.claude.failed`,
                defaultMessage: `Failed`,
                description: `Status of a conversation that could not be imported`,
              }),
            })
          : null),
      (n[20] = r.status),
      (n[21] = g));
  let _;
  n[22] !== s?.already_imported || n[23] !== o
    ? ((_ = s?.already_imported
        ? (0, X.jsx)(`span`, {
            id: o,
            className: `shrink-0 text-sm`,
            children: (0, X.jsx)(H, {
              id: `conversationImport.alreadyImported`,
              defaultMessage: `Already imported`,
              description: `Short status beside a conversation in the import results dialog. This conversation was imported previously; its title links to the existing ChatGPT conversation.`,
            }),
          })
        : null),
      (n[22] = s?.already_imported),
      (n[23] = o),
      (n[24] = _))
    : (_ = n[24]);
  let v;
  n[25] === r.status
    ? (v = n[26])
    : ((v =
        r.status === `queued`
          ? (0, X.jsx)(`span`, {
              className: `sr-only`,
              children: (0, X.jsx)(H, {
                id: `conversationImport.waiting`,
                defaultMessage: `Waiting`,
                description: `Status of a conversation waiting in the import queue`,
              }),
            })
          : null),
      (n[25] = r.status),
      (n[26] = v));
  let y;
  n[27] === r.status
    ? (y = n[28])
    : ((y =
        r.status === `stopped`
          ? (0, X.jsx)(`span`, {
              className: `shrink-0 text-sm`,
              children: (0, X.jsx)(H, {
                id: `conversationImport.notImported`,
                defaultMessage: `Not imported`,
                description: `Status of a queued conversation whose import was stopped`,
              }),
            })
          : null),
      (n[27] = r.status),
      (n[28] = y));
  let b;
  n[29] === s?.status
    ? (b = n[30])
    : ((b =
        s?.status === `skipped`
          ? (0, X.jsx)(`span`, {
              className: `shrink-0 text-sm`,
              children: (0, X.jsx)(H, {
                id: `conversationImport.claude.skipped`,
                defaultMessage: `Skipped: no supported messages`,
                description: `Status of a conversation with no importable messages`,
              }),
            })
          : null),
      (n[29] = s?.status),
      (n[30] = b));
  let x;
  n[31] !== v ||
  n[32] !== y ||
  n[33] !== b ||
  n[34] !== p ||
  n[35] !== m ||
  n[36] !== h ||
  n[37] !== g ||
  n[38] !== _
    ? ((x = (0, X.jsxs)(X.Fragment, { children: [p, m, h, g, _, v, y, b] })),
      (n[31] = v),
      (n[32] = y),
      (n[33] = b),
      (n[34] = p),
      (n[35] = m),
      (n[36] = h),
      (n[37] = g),
      (n[38] = _),
      (n[39] = x))
    : (x = n[39]);
  let C = x,
    T;
  return (
    n[40] !== r.status || n[41] !== C || n[42] !== s || n[43] !== o || n[44] !== l
      ? ((T = s?.conversation_id
          ? (0, X.jsx)(S, {
              className: `w-full justify-start`,
              color: `ghostActive`,
              size: `large`,
              to: `/c/${encodeURIComponent(s.conversation_id)}`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              title: l,
              "aria-label": l,
              "aria-describedby": o,
              children: C,
            })
          : (0, X.jsx)(w, {
              className: `w-full justify-start`,
              type: `button`,
              size: `large`,
              color: r.status === `failed` ? `ghostActive` : `ghostSecondary`,
              disabled: !0,
              disabledAppearance: `unchanged`,
              title: l,
              children: C,
            })),
        (n[40] = r.status),
        (n[41] = C),
        (n[42] = s),
        (n[43] = o),
        (n[44] = l),
        (n[45] = T))
      : (T = n[45]),
    T
  );
}
var Ze, Qe, X;
function $e() {
  return ($e = e(() => {
    ((Ze = m()), (Qe = a()), C(), T(), y(), O(), (X = d()));
  }))();
}
function et(e) {
  let t = (0, nt.c)(19),
    { attempts: n, busy: r, error: i, onClose: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = n.filter(tt)), (t[0] = n), (t[1] = o));
  let s = o.length,
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(H, {
        id: `conversationImport.statusTitle`,
        defaultMessage: `Import status`,
        description: `Title of the conversation import progress and results screen`,
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== n.length || t[4] !== s
    ? ((l = (0, Z.jsx)(we, {
        title: c,
        subtitle: (0, Z.jsx)(`span`, {
          role: `status`,
          children: (0, Z.jsx)(H, {
            id: `conversationImport.importedCount`,
            defaultMessage: `{imported} of {total} imported`,
            description: `Number of successfully imported conversations in the batch`,
            values: { imported: s, total: n.length },
          }),
        }),
      })),
      (t[3] = n.length),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u = i
        ? (0, Z.jsx)(re, {
            className: `shrink-0`,
            children: (0, Z.jsx)(`p`, { role: `alert`, className: `text-sm text-danger`, children: i }),
          })
        : null),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] === n
    ? (d = t[9])
    : ((d = (0, Z.jsx)(re, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, Z.jsx)(Je, { attempts: n }),
      })),
      (t[8] = n),
      (t[9] = d));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(H, {
        id: `conversationImport.done`,
        defaultMessage: `Done`,
        description: `Close the completed conversation import`,
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== r || t[12] !== a
    ? ((m = (0, Z.jsx)(f, {
        className: `shrink-0`,
        children: (0, Z.jsx)(w, { type: `button`, disabled: r, onClick: a, children: p }),
      })),
      (t[11] = r),
      (t[12] = a),
      (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== l || t[15] !== u || t[16] !== d || t[17] !== m
      ? ((h = (0, Z.jsxs)(Z.Fragment, { children: [l, u, d, m] })),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function tt(e) {
  return e.status === `finished` && e.result.status === `success`;
}
var nt, Z;
function rt() {
  return (rt = e(() => {
    ((nt = m()), C(), T(), s(), $e(), Oe(), (Z = d()));
  }))();
}
function it(e) {
  let t = (0, dt.c)(49),
    { onClose: r } = e,
    i = n(h),
    [a] = (0, Q.useState)(ut),
    [o, s] = (0, Q.useState)(`source`),
    [l, u] = (0, Q.useState)(null),
    [d, f] = (0, Q.useState)(`claude`),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = []), (t[0] = p)) : (p = t[0]);
  let [m, g] = (0, Q.useState)(p),
    _;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = new Set()), (t[1] = _)) : (_ = t[1]);
  let [y, b] = (0, Q.useState)(_),
    [S, C] = (0, Q.useState)(!1),
    [w, T] = (0, Q.useState)(null),
    [E, D] = (0, Q.useState)(!1),
    O;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = []), (t[2] = O)) : (O = t[2]);
  let [k, A] = (0, Q.useState)(O),
    j = (0, Q.useRef)(!1),
    M = (0, Q.useRef)(null),
    N,
    P;
  (t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => () => {
        M.current?.abort();
      }),
      (P = []),
      (t[3] = N),
      (t[4] = P))
    : ((N = t[3]), (P = t[4])),
    (0, Q.useEffect)(N, P));
  let ee;
  t[5] === o
    ? (ee = t[6])
    : ((ee = async function (e) {
        let t = e.target.files?.[0];
        if (((e.target.value = ``), t && !j.current)) {
          ((j.current = !0), D(!0), T(null), g([]), b(new Set()), C(!1), A([]));
          try {
            let e = await t.text();
            await new Promise(lt);
            let n = me(e);
            if (n.type === `manifest`) o === `source` ? (u(n), s(`prepare`)) : C(!0);
            else {
              let e = n.conversations;
              (g(e), b(new Set(e.flatMap(ct))), s(`selection`));
            }
          } catch {
            C(!0);
          }
          ((j.current = !1), D(!1));
        }
      }),
      (t[5] = o),
      (t[6] = ee));
  let F = ee,
    te;
  t[7] !== m || t[8] !== i || t[9] !== y || t[10] !== d || t[11] !== a || t[12] !== o
    ? ((te = async function () {
        if (o !== `selection` || j.current || y.size === 0) return;
        j.current = !0;
        let e = new AbortController();
        ((M.current = e), D(!0), T(null));
        let t = m.filter((e, t) => y.has(t));
        (A(t.map(st)), s(`status`));
        try {
          for (let [n, r] of t.entries()) {
            if (e.signal.aborted) break;
            let t = oe();
            if (
              a.userId == null ||
              a.accountId == null ||
              t?.userId !== a.userId ||
              t?.accountId !== a.accountId ||
              t?.accountUserId !== a.accountUserId
            ) {
              T(
                (0, $.jsx)(H, {
                  id: `conversationImport.claude.accountChanged`,
                  defaultMessage: `The selected account changed. Remaining imports were stopped. Reopen this tool to import into the new account.`,
                  description: `Error when the identity or workspace changes after opening the Claude importer`,
                }),
              );
              break;
            }
            A((e) => e.map((e, t) => (t === n ? { sourceTitle: r.title, status: `importing` } : e)));
            try {
              let t = await ce.safePost(`/data-import/conversation`, {
                signal: e.signal,
                requestBody: { source: d, conversation: r.source },
                additionalHeaders: { [v]: a.accountId },
              });
              (t.status === `success` && fe(i),
                A((e) =>
                  e.map((e, i) => (i === n ? { sourceTitle: r.title, status: `finished`, result: t } : e)),
                ));
            } catch {
              if (e.signal.aborted) break;
              A((e) => e.map((e, t) => (t === n ? { sourceTitle: r.title, status: `failed` } : e)));
            }
          }
        } catch {
          T(
            (0, $.jsx)(H, {
              id: `conversationImport.claude.stopped`,
              defaultMessage: `Import stopped unexpectedly. Check the sidebar before retrying.`,
              description: `Generic error after an interrupted Claude import batch; a request may have persisted before failing`,
            }),
          );
        }
        ((M.current = null), (j.current = !1), D(!1), A(at));
      }),
      (t[7] = m),
      (t[8] = i),
      (t[9] = y),
      (t[10] = d),
      (t[11] = a),
      (t[12] = o),
      (t[13] = te))
    : (te = t[13]);
  let I = te,
    L;
  t[14] === r
    ? (L = t[15])
    : ((L = (e) => {
        !e && !j.current && r();
      }),
      (t[14] = r),
      (t[15] = L));
  let R;
  t[16] === I
    ? (R = t[17])
    : ((R = (e) => {
        (e.preventDefault(), I());
      }),
      (t[16] = I),
      (t[17] = R));
  let z;
  t[18] !== E || t[19] !== S || t[20] !== F || t[21] !== d || t[22] !== o
    ? ((z =
        o === `source`
          ? (0, $.jsx)(Ue, {
              source: d,
              onSourceChange: f,
              onAlreadyDownloaded: () => {
                (u(null), C(!1), s(`prepare`));
              },
              busy: E,
              fileError: S,
              onChange: (e) => {
                F(e);
              },
            })
          : null),
      (t[18] = E),
      (t[19] = S),
      (t[20] = F),
      (t[21] = d),
      (t[22] = o),
      (t[23] = z))
    : (z = t[23]);
  let B;
  t[24] !== E || t[25] !== S || t[26] !== F || t[27] !== l || t[28] !== o
    ? ((B =
        o === `prepare`
          ? (0, $.jsx)(ke, {
              manifest: l,
              busy: E,
              fileError: S,
              onChange: (e) => {
                F(e);
              },
              onBack: () => {
                (C(!1), u(null), s(`source`));
              },
            })
          : null),
      (t[24] = E),
      (t[25] = S),
      (t[26] = F),
      (t[27] = l),
      (t[28] = o),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] !== m || t[31] !== y || t[32] !== o
    ? ((V =
        o === `selection`
          ? (0, $.jsx)(Be, {
              conversations: m,
              selected: y,
              onSelectionChange: b,
              onBack: () => s(`prepare`),
            })
          : null),
      (t[30] = m),
      (t[31] = y),
      (t[32] = o),
      (t[33] = V))
    : (V = t[33]);
  let U;
  t[34] !== k || t[35] !== E || t[36] !== w || t[37] !== r || t[38] !== o
    ? ((U = o === `status` ? (0, $.jsx)(et, { attempts: k, busy: E, error: w, onClose: r }) : null),
      (t[34] = k),
      (t[35] = E),
      (t[36] = w),
      (t[37] = r),
      (t[38] = o),
      (t[39] = U))
    : (U = t[39]);
  let W;
  t[40] !== z || t[41] !== B || t[42] !== V || t[43] !== U || t[44] !== R
    ? ((W = (0, $.jsxs)(c, {
        as: `form`,
        size: `scrollable`,
        "data-dd-privacy": `hidden`,
        "data-sr-block": `true`,
        onSubmit: R,
        children: [z, B, V, U],
      })),
      (t[40] = z),
      (t[41] = B),
      (t[42] = V),
      (t[43] = U),
      (t[44] = R),
      (t[45] = W))
    : (W = t[45]);
  let ne;
  return (
    t[46] !== W || t[47] !== L
      ? ((ne = (0, $.jsx)(x, { open: !0, size: `wide`, variant: `chatgpt`, onOpenChange: L, children: W })),
        (t[46] = W),
        (t[47] = L),
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
  let e = oe();
  return { userId: e?.userId, accountId: e?.accountId, accountUserId: e?.accountUserId };
}
var dt, Q, $;
function ft() {
  return (ft = e(() => {
    ((dt = m()),
      E(),
      z(),
      (Q = a()),
      C(),
      le(),
      pe(),
      ue(),
      u(),
      s(),
      r(),
      _e(),
      Pe(),
      He(),
      qe(),
      rt(),
      ($ = d()));
  }))();
}
ft();
export { it as ClaudeImportDialog };
//# sourceMappingURL=dialog-3edb343af31a.js.map
