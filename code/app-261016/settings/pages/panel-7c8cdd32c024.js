import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  Cj as n,
  F3 as r,
  Fj as i,
  I3 as a,
  Ij as o,
  LNt as s,
  LU as c,
  Mst as l,
  NSt as u,
  PBt as d,
  TY as f,
  Uot as p,
  Vot as m,
  WOt as h,
  XOt as g,
  XS as _,
  Y3 as v,
  Z3 as y,
  ZSt as b,
  _K as x,
  bSt as S,
  dC as C,
  e6 as w,
  fK as T,
  iCt as E,
  jst as D,
  okt as O,
  tkt as k,
  uH as A,
} from "./app-shared-2feb3d4c6fcc.js";
import { BRr as j, lx as M, ux as N, wLr as P, zRr as F } from "./app-initial-ad16eaadf81f.js";
import { n as I, t as L } from "./query-8b4179e9403c.js";
import { t as R } from "./format-bytes-9f828acaa58f.js";
function z(e) {
  let n = (0, q.c)(52),
    { accountId: r, onClose: i, source: a, userId: o } = e,
    s = O(),
    c = E(F),
    u = E(j),
    d = r ?? c,
    f = (o === void 0 ? u : o) ?? null,
    p;
  n[0] !== d || n[1] !== a || n[2] !== f
    ? ((p = L({ accountId: d, source: a, userId: f })), (n[0] = d), (n[1] = a), (n[2] = f), (n[3] = p))
    : (p = n[3]);
  let { data: h, isError: g, isFetching: _, isPending: y, refetch: b } = l(p),
    x;
  n[4] === s
    ? (x = n[5])
    : ((x = s.formatMessage({
        id: `chatgptFilePreview.fileInfo.title`,
        defaultMessage: `File info`,
        description: `Short heading and accessible name for the panel that shows metadata for the current file.`,
      })),
      (n[4] = s),
      (n[5] = x));
  let w = x,
    T = h?.libraryFileId ?? (a.identity.type === `library` ? a.identity.libraryFileId : null),
    D;
  n[6] === s
    ? (D = n[7])
    : ((D = s.formatMessage({
        id: `chatgptFilePreview.fileInfo.close`,
        defaultMessage: `Close file info`,
        description: `Accessible label for the button that closes the File info panel.`,
      })),
      (n[6] = s),
      (n[7] = D));
  let N;
  n[8] !== i || n[9] !== D || n[10] !== w
    ? ((N = (0, J.jsx)(C, { closeLabel: D, title: w, onClose: i })),
      (n[8] = i),
      (n[9] = D),
      (n[10] = w),
      (n[11] = N))
    : (N = n[11]);
  let P = h?.name ?? a.name,
    I;
  n[12] === P
    ? (I = n[13])
    : ((I = (0, J.jsx)(`p`, { className: `text-base text-default select-text`, children: P })),
      (n[12] = P),
      (n[13] = I));
  let R;
  n[14] !== h || n[15] !== T || n[16] !== i || n[17] !== a
    ? ((R =
        T == null
          ? null
          : (0, J.jsx)(`p`, {
              className: `mt-1 truncate text-sm text-secondary`,
              children: (0, J.jsx)(M, {
                externalAccount: h?.externalAccount ?? a.externalAccount,
                libraryFileId: T,
                parentDirectoryId: h == null ? a.parentDirectoryId : h.parentDirectoryId,
                variant: `text`,
                onNavigate: i,
              }),
            })),
      (n[14] = h),
      (n[15] = T),
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
  n[22] === y
    ? (V = n[23])
    : ((V = y
        ? (0, J.jsxs)(`div`, {
            className: `flex h-20 items-center justify-center`,
            role: `status`,
            children: [
              (0, J.jsx)(t, {}),
              (0, J.jsx)(`span`, {
                className: `sr-only`,
                children: (0, J.jsx)(k, {
                  id: `chatgptFilePreview.fileInfo.loading`,
                  defaultMessage: `Loading file info…`,
                  description: `Screen-reader status announced while file metadata is loading.`,
                }),
              }),
            ],
          })
        : null),
      (n[22] = y),
      (n[23] = V));
  let H;
  n[24] !== g || n[25] !== _ || n[26] !== b
    ? ((H = g
        ? (0, J.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 py-2 text-sm text-tertiary`,
            children: [
              (0, J.jsx)(k, {
                id: `chatgptFilePreview.fileInfo.loadFailed`,
                defaultMessage: `Couldn’t load file info`,
                description: `Inline error shown when metadata for the current file could not be loaded.`,
              }),
              (0, J.jsx)(v, {
                color: `secondary`,
                loading: _,
                size: `compact`,
                onClick: () => void b(),
                children: (0, J.jsx)(k, {
                  id: `chatgptFilePreview.fileInfo.retry`,
                  defaultMessage: `Retry`,
                  description: `Button label for retrying a failed file metadata request.`,
                }),
              }),
            ],
          })
        : null),
      (n[24] = g),
      (n[25] = _),
      (n[26] = b),
      (n[27] = H))
    : (H = n[27]);
  let U;
  n[28] === h
    ? (U = n[29])
    : ((U = h == null ? null : (0, J.jsx)(B, { details: h })), (n[28] = h), (n[29] = U));
  let W;
  n[30] !== V || n[31] !== H || n[32] !== U
    ? ((W = (0, J.jsxs)(`div`, { className: `border-t border-subtle px-1 py-5`, children: [V, H, U] })),
      (n[30] = V),
      (n[31] = H),
      (n[32] = U),
      (n[33] = W))
    : (W = n[33]);
  let Y;
  n[34] !== h || n[35] !== i || n[36] !== a
    ? ((Y =
        h?.conversation == null
          ? null
          : (0, J.jsxs)(`section`, {
              className: `border-t border-subtle px-1 py-5`,
              children: [
                (0, J.jsx)(`h3`, {
                  className: `mb-3 text-sm text-secondary`,
                  children: (0, J.jsx)(k, {
                    id: `chatgptFilePreview.fileInfo.relatedChats`,
                    defaultMessage: `Related chats`,
                    description: `Section heading above chats associated with the current file.`,
                  }),
                }),
                (0, J.jsxs)(S, {
                  className: `-mx-2 flex min-w-0 cursor-interaction items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-default hover:bg-primary-ghost-hover focus-visible:outline-2 focus-visible:outline-ring`,
                  to: m(h.conversation.id, { gizmoId: a.gizmoId }),
                  onClick: i,
                  children: [
                    (0, J.jsx)(A, {}),
                    (0, J.jsx)(`span`, {
                      className: `truncate`,
                      children:
                        h.conversation.title?.trim() ||
                        (0, J.jsx)(k, {
                          id: `chatgptFilePreview.fileInfo.untitledChat`,
                          defaultMessage: `Untitled chat`,
                          description: `Fallback link label when a related chat has no title.`,
                        }),
                    }),
                  ],
                }),
              ],
            })),
      (n[34] = h),
      (n[35] = i),
      (n[36] = a),
      (n[37] = Y))
    : (Y = n[37]);
  let X;
  n[38] === h
    ? (X = n[39])
    : ((X =
        h?.access == null
          ? null
          : (0, J.jsxs)(`section`, {
              className: `border-t border-subtle px-1 pt-5`,
              children: [
                (0, J.jsx)(`h3`, {
                  className: `mb-3 text-sm text-secondary`,
                  children: (0, J.jsx)(k, {
                    id: `chatgptFilePreview.fileInfo.yourAccess`,
                    defaultMessage: `Your access`,
                    description: `Section heading above the current user's permission for this file.`,
                  }),
                }),
                (0, J.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-sm text-default`,
                  children: [(0, J.jsx)(G, { access: h.access }), (0, J.jsx)(K, { access: h.access })],
                }),
              ],
            })),
      (n[38] = h),
      (n[39] = X));
  let Z;
  n[40] === h ? (Z = n[41]) : ((Z = !1), (n[40] = h), (n[41] = Z));
  let Q;
  n[42] !== _ || n[43] !== W || n[44] !== Y || n[45] !== X || n[46] !== Z || n[47] !== z
    ? ((Q = (0, J.jsxs)(`div`, {
        "aria-busy": _,
        className: `min-h-0 flex-1 overflow-y-auto px-3 py-4`,
        children: [z, W, Y, X, Z],
      })),
      (n[42] = _),
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
    r = O(),
    a;
  t[0] === n.fileExtension
    ? (a = t[1])
    : ((a = n.fileExtension?.trim()), (t[0] = n.fileExtension), (t[1] = a));
  let s = a,
    c = s ? `file.${s}` : n.name,
    l = n.mimeType ?? void 0,
    u;
  t[2] !== n.sourceUrl || t[3] !== c || t[4] !== l
    ? ((u = o({ fileName: c, mimeType: l, sourceUrl: n.sourceUrl })),
      (t[2] = n.sourceUrl),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(k, {
        id: `chatgptFilePreview.fileInfo.type`,
        defaultMessage: `Type`,
        description: `Field label beside the current file format.`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p = d.category,
    m;
  t[7] === c ? (m = t[8]) : ((m = i(c)), (t[7] = c), (t[8] = m));
  let h = m != null,
    g;
  t[9] !== h || t[10] !== d.category || t[11] !== d.iconKey || t[12] !== d.key || t[13] !== d.label
    ? ((g = (0, J.jsx)(V, {
        label: f,
        children: (0, J.jsx)(W, {
          category: p,
          hasExtension: h,
          iconKey: d.iconKey,
          label: d.label,
          typeKey: d.key,
        }),
      })),
      (t[9] = h),
      (t[10] = d.category),
      (t[11] = d.iconKey),
      (t[12] = d.key),
      (t[13] = d.label),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== n.updatedAt || t[16] !== n.updatedBy
    ? ((_ =
        n.updatedAt == null
          ? null
          : (0, J.jsx)(H, {
              author: n.updatedBy,
              label: (0, J.jsx)(k, {
                id: `chatgptFilePreview.fileInfo.updated`,
                defaultMessage: `Updated`,
                description: `Field label beside the date and author of the latest file update.`,
              }),
              value: n.updatedAt,
            })),
      (t[15] = n.updatedAt),
      (t[16] = n.updatedBy),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== n.createdAt || t[19] !== n.createdBy
    ? ((v =
        n.createdAt == null
          ? null
          : (0, J.jsx)(H, {
              author: n.createdBy,
              label: (0, J.jsx)(k, {
                id: `chatgptFilePreview.fileInfo.created`,
                defaultMessage: `Created`,
                description: `Field label beside the date and author when the file was created.`,
              }),
              value: n.createdAt,
            })),
      (t[18] = n.createdAt),
      (t[19] = n.createdBy),
      (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] !== n.sizeBytes || t[22] !== r
    ? ((y =
        n.sizeBytes == null
          ? null
          : (0, J.jsx)(V, {
              label: (0, J.jsx)(k, {
                id: `chatgptFilePreview.fileInfo.size`,
                defaultMessage: `Size`,
                description: `Field label beside the current file's storage size.`,
              }),
              children: R(n.sizeBytes, r),
            })),
      (t[21] = n.sizeBytes),
      (t[22] = r),
      (t[23] = y))
    : (y = t[23]);
  let b;
  return (
    t[24] !== v || t[25] !== y || t[26] !== g || t[27] !== _
      ? ((b = (0, J.jsxs)(`dl`, { className: `flex flex-col gap-3 text-sm`, children: [g, _, v, y] })),
        (t[24] = v),
        (t[25] = y),
        (t[26] = g),
        (t[27] = _),
        (t[28] = b))
      : (b = t[28]),
    b
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
    : ((a = (0, J.jsx)(h, {
        value: i,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
        hour: `numeric`,
        minute: `2-digit`,
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] !== a || t[3] !== i
    ? ((o = (0, J.jsx)(`time`, { dateTime: i, children: a })), (t[2] = a), (t[3] = i), (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === n
    ? (s = t[6])
    : ((s =
        n == null
          ? null
          : (0, J.jsx)(`span`, {
              className: `mt-0.5 block`,
              children: (0, J.jsx)(k, {
                id: `chatgptFilePreview.fileInfo.byAuthor`,
                defaultMessage: `by {author}`,
                description: `Attribution shown below a Created or Updated date.`,
                values: { author: (0, J.jsx)(U, { author: n }, `author`) },
              }),
            })),
      (t[5] = n),
      (t[6] = s));
  let c;
  return (
    t[7] !== r || t[8] !== o || t[9] !== s
      ? ((c = (0, J.jsxs)(V, { label: r, children: [o, s] })),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
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
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
    { category: n, hasExtension: r, iconKey: i, label: a, typeKey: o } = e;
  if (i === `ppt`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(k, {
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
        ? ((e = (0, J.jsx)(k, {
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
        ? ((e = (0, J.jsx)(k, {
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
        ? ((e = (0, J.jsx)(k, {
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
        ? ((e = (0, J.jsx)(k, {
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
        ? ((e = (0, J.jsx)(k, {
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
        : o === `file`
          ? (e = `file`)
          : o === `doc` && i === `text`
            ? (e = `text`)
            : o === `sheet`
              ? (e = `spreadsheet`)
              : o === `slides`
                ? (e = `presentation`)
                : o === `audio`
                  ? (e = `audio`)
                  : o === `video`
                    ? (e = `video`)
                    : o === `image` && (e = `image`),
      e != null)
    ) {
      let n;
      return (
        t[6] === e
          ? (n = t[7])
          : ((n = (0, J.jsx)(k, {
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
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, J.jsx)(x, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (n === `editor`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, J.jsx)(T, {})), (t[1] = e)) : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = (0, J.jsx)(c, {})), (t[2] = r)) : (r = t[2]),
    r
  );
}
function K(e) {
  let t = (0, q.c)(3),
    { access: n } = e;
  if (n === `owner`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(k, {
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
        ? ((e = (0, J.jsx)(k, {
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
      ? ((r = (0, J.jsx)(k, {
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
    ((q = d()),
      n(),
      D(),
      b(),
      g(),
      u(),
      P(),
      p(),
      y(),
      f(),
      r(),
      w(),
      N(),
      _(),
      I(),
      (J = s()),
      a(async () => () => null));
  }))();
}
Y();
export { z as FileInfoPanel };
//# sourceMappingURL=panel-7c8cdd32c024.js.map
