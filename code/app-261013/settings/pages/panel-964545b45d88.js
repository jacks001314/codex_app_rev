import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  BH as r,
  CS as i,
  Cat as a,
  IDt as o,
  IS as s,
  KA as c,
  PA as l,
  Pxt as u,
  TDt as d,
  TJ as f,
  VDt as p,
  Vxt as m,
  Xot as h,
  Yot as g,
  _xt as _,
  bG as v,
  hG as y,
  i3 as b,
  ixt as x,
  jDt as S,
  mV as C,
  qA as w,
  r3 as T,
  t3 as E,
  vzt as D,
  xMt as O,
  xat as k,
  z4 as A,
} from "./app-shared-bbfeca5e5737.js";
import { GMr as j, Lb as M, Rb as N, XMr as P, tNr as F } from "./app-initial-5851df3f6cb1.js";
import { n as I, t as L } from "./query-4ecbf204b1e6.js";
import { t as R } from "./format-bytes-9f828acaa58f.js";
function z(e) {
  let n = (0, q.c)(52),
    { accountId: r, onClose: i, source: a, userId: c } = e,
    l = p(),
    u = m(j),
    d = m(P),
    f = r ?? u,
    g = (c === void 0 ? d : c) ?? null,
    _;
  n[0] !== f || n[1] !== a || n[2] !== g
    ? ((_ = L({ accountId: f, source: a, userId: g })), (n[0] = f), (n[1] = a), (n[2] = g), (n[3] = _))
    : (_ = n[3]);
  let { data: v, isError: y, isFetching: b, isPending: S, refetch: w } = h(_),
    E;
  n[4] === l
    ? (E = n[5])
    : ((E = l.formatMessage({
        id: `chatgptFilePreview.fileInfo.title`,
        defaultMessage: `File info`,
        description: `Short heading and accessible name for the panel that shows metadata for the current file.`,
      })),
      (n[4] = l),
      (n[5] = E));
  let D = E,
    O = v?.libraryFileId ?? (a.identity.type === `library` ? a.identity.libraryFileId : null),
    A;
  n[6] === l
    ? (A = n[7])
    : ((A = l.formatMessage({
        id: `chatgptFilePreview.fileInfo.close`,
        defaultMessage: `Close file info`,
        description: `Accessible label for the button that closes the File info panel.`,
      })),
      (n[6] = l),
      (n[7] = A));
  let N;
  n[8] !== i || n[9] !== A || n[10] !== D
    ? ((N = (0, J.jsx)(s, { closeLabel: A, title: D, onClose: i })),
      (n[8] = i),
      (n[9] = A),
      (n[10] = D),
      (n[11] = N))
    : (N = n[11]);
  let F = v?.name ?? a.name,
    I;
  n[12] === F
    ? (I = n[13])
    : ((I = (0, J.jsx)(`p`, { className: `text-base text-default select-text`, children: F })),
      (n[12] = F),
      (n[13] = I));
  let R;
  n[14] !== v || n[15] !== O || n[16] !== i || n[17] !== a
    ? ((R =
        O == null
          ? null
          : (0, J.jsx)(`p`, {
              className: `mt-1 truncate text-sm text-secondary`,
              children: (0, J.jsx)(M, {
                externalAccount: v?.externalAccount ?? a.externalAccount,
                libraryFileId: O,
                parentDirectoryId: v == null ? a.parentDirectoryId : v.parentDirectoryId,
                variant: `text`,
                onNavigate: i,
              }),
            })),
      (n[14] = v),
      (n[15] = O),
      (n[16] = i),
      (n[17] = a),
      (n[18] = R))
    : (R = n[18]);
  let z;
  n[19] !== I || n[20] !== R
    ? ((z = (0, J.jsxs)(`div`, { className: `px-1 pb-5`, children: [I, R] })),
      (n[19] = I),
      (n[20] = R),
      (n[21] = z))
    : (z = n[21]);
  let V;
  n[22] === S
    ? (V = n[23])
    : ((V = S
        ? (0, J.jsxs)(`div`, {
            className: `flex h-20 items-center justify-center`,
            role: `status`,
            children: [
              (0, J.jsx)(T, {}),
              (0, J.jsx)(`span`, {
                className: `sr-only`,
                children: (0, J.jsx)(o, {
                  id: `chatgptFilePreview.fileInfo.loading`,
                  defaultMessage: `Loading file info…`,
                  description: `Screen-reader status announced while file metadata is loading.`,
                }),
              }),
            ],
          })
        : null),
      (n[22] = S),
      (n[23] = V));
  let H;
  n[24] !== y || n[25] !== b || n[26] !== w
    ? ((H = y
        ? (0, J.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 py-2 text-sm text-tertiary`,
            children: [
              (0, J.jsx)(o, {
                id: `chatgptFilePreview.fileInfo.loadFailed`,
                defaultMessage: `Couldn’t load file info`,
                description: `Inline error shown when metadata for the current file could not be loaded.`,
              }),
              (0, J.jsx)(t, {
                color: `secondary`,
                loading: b,
                size: `compact`,
                onClick: () => void w(),
                children: (0, J.jsx)(o, {
                  id: `chatgptFilePreview.fileInfo.retry`,
                  defaultMessage: `Retry`,
                  description: `Button label for retrying a failed file metadata request.`,
                }),
              }),
            ],
          })
        : null),
      (n[24] = y),
      (n[25] = b),
      (n[26] = w),
      (n[27] = H))
    : (H = n[27]);
  let U;
  n[28] === v
    ? (U = n[29])
    : ((U = v == null ? null : (0, J.jsx)(B, { details: v })), (n[28] = v), (n[29] = U));
  let W;
  n[30] !== V || n[31] !== H || n[32] !== U
    ? ((W = (0, J.jsxs)(`div`, { className: `border-t border-subtle px-1 py-5`, children: [V, H, U] })),
      (n[30] = V),
      (n[31] = H),
      (n[32] = U),
      (n[33] = W))
    : (W = n[33]);
  let Y;
  n[34] !== v || n[35] !== i || n[36] !== a
    ? ((Y =
        v?.conversation == null
          ? null
          : (0, J.jsxs)(`section`, {
              className: `border-t border-subtle px-1 py-5`,
              children: [
                (0, J.jsx)(`h3`, {
                  className: `mb-3 text-sm text-secondary`,
                  children: (0, J.jsx)(o, {
                    id: `chatgptFilePreview.fileInfo.relatedChats`,
                    defaultMessage: `Related chats`,
                    description: `Section heading above chats associated with the current file.`,
                  }),
                }),
                (0, J.jsxs)(x, {
                  className: `-mx-2 flex min-w-0 cursor-interaction items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-default hover:bg-primary-ghost-hover focus-visible:outline-2 focus-visible:outline-ring`,
                  to: k(v.conversation.id, { gizmoId: a.gizmoId }),
                  onClick: i,
                  children: [
                    (0, J.jsx)(C, {}),
                    (0, J.jsx)(`span`, {
                      className: `truncate`,
                      children:
                        v.conversation.title?.trim() ||
                        (0, J.jsx)(o, {
                          id: `chatgptFilePreview.fileInfo.untitledChat`,
                          defaultMessage: `Untitled chat`,
                          description: `Fallback link label when a related chat has no title.`,
                        }),
                    }),
                  ],
                }),
              ],
            })),
      (n[34] = v),
      (n[35] = i),
      (n[36] = a),
      (n[37] = Y))
    : (Y = n[37]);
  let X;
  n[38] === v
    ? (X = n[39])
    : ((X =
        v?.access == null
          ? null
          : (0, J.jsxs)(`section`, {
              className: `border-t border-subtle px-1 pt-5`,
              children: [
                (0, J.jsx)(`h3`, {
                  className: `mb-3 text-sm text-secondary`,
                  children: (0, J.jsx)(o, {
                    id: `chatgptFilePreview.fileInfo.yourAccess`,
                    defaultMessage: `Your access`,
                    description: `Section heading above the current user's permission for this file.`,
                  }),
                }),
                (0, J.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-sm text-default`,
                  children: [(0, J.jsx)(G, { access: v.access }), (0, J.jsx)(K, { access: v.access })],
                }),
              ],
            })),
      (n[38] = v),
      (n[39] = X));
  let Z;
  n[40] === v ? (Z = n[41]) : ((Z = !1), (n[40] = v), (n[41] = Z));
  let Q;
  n[42] !== b || n[43] !== W || n[44] !== Y || n[45] !== X || n[46] !== Z || n[47] !== z
    ? ((Q = (0, J.jsxs)(`div`, {
        "aria-busy": b,
        className: `min-h-0 flex-1 overflow-y-auto px-3 py-4`,
        children: [z, W, Y, X, Z],
      })),
      (n[42] = b),
      (n[43] = W),
      (n[44] = Y),
      (n[45] = X),
      (n[46] = Z),
      (n[47] = z),
      (n[48] = Q))
    : (Q = n[48]);
  let $;
  return (
    n[49] !== Q || n[50] !== N
      ? (($ = (0, J.jsxs)(J.Fragment, { children: [N, Q] })), (n[49] = Q), (n[50] = N), (n[51] = $))
      : ($ = n[51]),
    $
  );
}
function B(e) {
  let t = (0, q.c)(29),
    { details: n } = e,
    r = p(),
    i;
  t[0] === n.fileExtension
    ? (i = t[1])
    : ((i = n.fileExtension?.trim()), (t[0] = n.fileExtension), (t[1] = i));
  let a = i,
    s = a ? `file.${a}` : n.name,
    l = n.mimeType ?? void 0,
    u;
  t[2] !== n.sourceUrl || t[3] !== s || t[4] !== l
    ? ((u = w({ fileName: s, mimeType: l, sourceUrl: n.sourceUrl })),
      (t[2] = n.sourceUrl),
      (t[3] = s),
      (t[4] = l),
      (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(o, {
        id: `chatgptFilePreview.fileInfo.type`,
        defaultMessage: `Type`,
        description: `Field label beside the current file format.`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let m = d.category,
    h;
  t[7] === s ? (h = t[8]) : ((h = c(s)), (t[7] = s), (t[8] = h));
  let g = h != null,
    _;
  t[9] !== g || t[10] !== d.category || t[11] !== d.iconKey || t[12] !== d.key || t[13] !== d.label
    ? ((_ = (0, J.jsx)(V, {
        label: f,
        children: (0, J.jsx)(W, {
          category: m,
          hasExtension: g,
          iconKey: d.iconKey,
          label: d.label,
          typeKey: d.key,
        }),
      })),
      (t[9] = g),
      (t[10] = d.category),
      (t[11] = d.iconKey),
      (t[12] = d.key),
      (t[13] = d.label),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] !== n.updatedAt || t[16] !== n.updatedBy
    ? ((v =
        n.updatedAt == null
          ? null
          : (0, J.jsx)(H, {
              author: n.updatedBy,
              label: (0, J.jsx)(o, {
                id: `chatgptFilePreview.fileInfo.updated`,
                defaultMessage: `Updated`,
                description: `Field label beside the date and author of the latest file update.`,
              }),
              value: n.updatedAt,
            })),
      (t[15] = n.updatedAt),
      (t[16] = n.updatedBy),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== n.createdAt || t[19] !== n.createdBy
    ? ((y =
        n.createdAt == null
          ? null
          : (0, J.jsx)(H, {
              author: n.createdBy,
              label: (0, J.jsx)(o, {
                id: `chatgptFilePreview.fileInfo.created`,
                defaultMessage: `Created`,
                description: `Field label beside the date and author when the file was created.`,
              }),
              value: n.createdAt,
            })),
      (t[18] = n.createdAt),
      (t[19] = n.createdBy),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] !== n.sizeBytes || t[22] !== r
    ? ((b =
        n.sizeBytes == null
          ? null
          : (0, J.jsx)(V, {
              label: (0, J.jsx)(o, {
                id: `chatgptFilePreview.fileInfo.size`,
                defaultMessage: `Size`,
                description: `Field label beside the current file's storage size.`,
              }),
              children: R(n.sizeBytes, r),
            })),
      (t[21] = n.sizeBytes),
      (t[22] = r),
      (t[23] = b))
    : (b = t[23]);
  let x;
  return (
    t[24] !== y || t[25] !== b || t[26] !== _ || t[27] !== v
      ? ((x = (0, J.jsxs)(`dl`, { className: `flex flex-col gap-3 text-sm`, children: [_, v, y, b] })),
        (t[24] = y),
        (t[25] = b),
        (t[26] = _),
        (t[27] = v),
        (t[28] = x))
      : (x = t[28]),
    x
  );
}
function V(e) {
  let t = (0, q.c)(7),
    { children: n, label: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, J.jsx)(`dt`, { className: `w-16 shrink-0 text-secondary`, children: r })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, J.jsx)(`dd`, { className: `min-w-0 flex-1 text-default`, children: n })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, J.jsxs)(`div`, { className: `flex items-start gap-3`, children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function H(e) {
  let t = (0, q.c)(11),
    { author: n, label: r, value: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (0, J.jsx)(d, {
        value: i,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
        hour: `numeric`,
        minute: `2-digit`,
      })),
      (t[0] = i),
      (t[1] = a));
  let s;
  t[2] !== a || t[3] !== i
    ? ((s = (0, J.jsx)(`time`, { dateTime: i, children: a })), (t[2] = a), (t[3] = i), (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === n
    ? (c = t[6])
    : ((c =
        n == null
          ? null
          : (0, J.jsx)(`span`, {
              className: `mt-0.5 block`,
              children: (0, J.jsx)(o, {
                id: `chatgptFilePreview.fileInfo.byAuthor`,
                defaultMessage: `by {author}`,
                description: `Attribution shown below a Created or Updated date.`,
                values: { author: (0, J.jsx)(U, { author: n }, `author`) },
              }),
            })),
      (t[5] = n),
      (t[6] = c));
  let l;
  return (
    t[7] !== r || t[8] !== s || t[9] !== c
      ? ((l = (0, J.jsxs)(V, { label: r, children: [s, c] })),
        (t[7] = r),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function U(e) {
  let t = (0, q.c)(3),
    { author: n } = e;
  switch (n.kind) {
    case `person`:
      return n.name;
    case `chatgpt`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(o, {
              id: `chatgptFilePreview.fileInfo.chatgpt`,
              defaultMessage: `ChatGPT`,
              description: `Product name used when ChatGPT created or updated the file.`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `collaborator`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(o, {
              id: `chatgptFilePreview.fileInfo.collaborator`,
              defaultMessage: `a collaborator`,
              description: `Generic author when another collaborator's name is unavailable.`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `you`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(o, {
              id: `chatgptFilePreview.fileInfo.you`,
              defaultMessage: `you`,
              description: `Author attribution when the signed-in user changed the file.`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function W(e) {
  let t = (0, q.c)(8),
    { category: n, hasExtension: r, iconKey: i, label: a, typeKey: s } = e;
  if (i === `ppt`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(o, {
            id: `chatgptFilePreview.fileInfo.type.powerPoint`,
            defaultMessage: `PowerPoint`,
            description: `File type value for a Microsoft PowerPoint presentation.`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i === `document`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(o, {
            id: `chatgptFilePreview.fileInfo.type.wordDocument`,
            defaultMessage: `Word document`,
            description: `File type value for a Microsoft Word document.`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (i === `xls`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(o, {
            id: `chatgptFilePreview.fileInfo.type.excelSpreadsheet`,
            defaultMessage: `Excel spreadsheet`,
            description: `File type value for a Microsoft Excel spreadsheet.`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (i === `google-docs`) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(o, {
            id: `chatgptFilePreview.fileInfo.type.googleDocs`,
            defaultMessage: `Google Docs`,
            description: `File type value for a Google document.`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (i === `google-sheets`) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(o, {
            id: `chatgptFilePreview.fileInfo.type.googleSheets`,
            defaultMessage: `Google Sheets`,
            description: `File type value for a Google spreadsheet.`,
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (i === `google-slides`) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(o, {
            id: `chatgptFilePreview.fileInfo.type.googleSlides`,
            defaultMessage: `Google Slides`,
            description: `File type value for a Google presentation.`,
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (!r) {
    let e = null;
    if (
      (n === `code` || n === `html`
        ? (e = `code`)
        : s === `file`
          ? (e = `file`)
          : s === `doc` && i === `text`
            ? (e = `text`)
            : s === `sheet`
              ? (e = `spreadsheet`)
              : s === `slides`
                ? (e = `presentation`)
                : s === `audio`
                  ? (e = `audio`)
                  : s === `video`
                    ? (e = `video`)
                    : s === `image` && (e = `image`),
      e != null)
    ) {
      let n;
      return (
        t[6] === e
          ? (n = t[7])
          : ((n = (0, J.jsx)(o, {
              id: `chatgptFilePreview.fileInfo.type.generic`,
              defaultMessage: `{category, select, file {File} text {Text} code {Code} audio {Audio} video {Video} image {Image} spreadsheet {Spreadsheet} presentation {Presentation} other {File}}`,
              description: `Generic file category shown when the file has no usable extension. The category value selects the translated category name.`,
              values: { category: e },
            })),
            (t[6] = e),
            (t[7] = n)),
        n
      );
    }
  }
  return a;
}
function G(e) {
  let t = (0, q.c)(3),
    { access: n } = e;
  if (n === `owner`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, J.jsx)(v, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (n === `editor`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, J.jsx)(y, {})), (t[1] = e)) : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, J.jsx)(r, {})), (t[2] = i)) : (i = t[2]),
    i
  );
}
function K(e) {
  let t = (0, q.c)(3),
    { access: n } = e;
  if (n === `owner`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(o, {
            id: `chatgptFilePreview.fileInfo.owner`,
            defaultMessage: `Owner`,
            description: `Permission value for a user who owns the current file.`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `editor`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(o, {
            id: `chatgptFilePreview.fileInfo.editor`,
            defaultMessage: `Editor`,
            description: `Permission value for a user who can edit the current file.`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, J.jsx)(o, {
          id: `chatgptFilePreview.fileInfo.viewer`,
          defaultMessage: `Viewer`,
          description: `Permission value for a user who can view the current file.`,
        })),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = D()),
      l(),
      g(),
      u(),
      S(),
      _(),
      F(),
      a(),
      E(),
      f(),
      A(),
      b(),
      N(),
      i(),
      I(),
      (J = O()),
      n(async () => () => null));
  }))();
}
Y();
export { z as FileInfoPanel };
//# sourceMappingURL=panel-964545b45d88.js.map
