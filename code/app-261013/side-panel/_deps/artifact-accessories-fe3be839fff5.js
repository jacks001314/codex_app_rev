const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./panel-964545b45d88.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./query-4ecbf204b1e6.js",
      "./library-file-metadata-18e455d7ac7c.js",
      "./format-bytes-9f828acaa58f.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  CS as r,
  Cot as i,
  FS as a,
  IDt as o,
  IS as s,
  Ixt as c,
  Pxt as l,
  TDt as u,
  VDt as d,
  Vxt as f,
  _Mt as p,
  fPt as m,
  gMt as h,
  i3 as g,
  jDt as _,
  nz as v,
  pPt as y,
  r3 as b,
  t3 as x,
  tz as S,
  vzt as C,
  wot as w,
  xMt as T,
  yzt as E,
  z4 as D,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ab as k,
  Bnn as A,
  Eb as j,
  Fb as M,
  Ob as N,
  axt as P,
  ixt as F,
  jb as I,
  qMr as L,
  tNr as R,
  znn as z,
} from "./app-initial-5851df3f6cb1.js";
import { n as B, t as V } from "./layout-7a4e7177e626.js";
var H;
function U() {
  return (U = e(() => {
    (D(),
      y(),
      (H = n(
        async () =>
          (
            await m(
              async () => {
                let { FileInfoPanel: e } = await import(`./panel-964545b45d88.js`);
                return { FileInfoPanel: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            )
          ).FileInfoPanel,
      )));
  }))();
}
function W(e) {
  let n = (0, G.c)(40),
    { history: r } = e,
    a = c(i),
    l = d(),
    u = v(`(max-width: 767px)`),
    f = r.versions,
    p,
    m,
    h,
    g,
    _;
  if (n[0] !== r || n[1] !== l || n[2] !== u || n[3] !== a || n[4] !== f) {
    let e = f == null ? [] : re(f),
      t = r.isRestoring,
      i;
    n[10] === l
      ? (i = n[11])
      : ((i = l.formatMessage({
          id: `chatgptFilePreview.versionHistory.close`,
          defaultMessage: `Close version history`,
          description: `Closes the Library file version history side panel and returns to the current file preview`,
        })),
        (n[10] = l),
        (n[11] = i));
    let c;
    (n[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, q.jsx)(o, {
          id: `chatgptFilePreview.versionHistory.title`,
          defaultMessage: `Version history`,
          description: `Title and accessible label for the side panel listing saved versions of a Library file`,
        })),
        (n[12] = c))
      : (c = n[12]),
      n[13] !== r.close || n[14] !== r.isRestoring || n[15] !== i
        ? ((_ = (0, q.jsx)(s, { closeDisabled: t, closeLabel: i, title: c, onClose: r.close })),
          (n[13] = r.close),
          (n[14] = r.isRestoring),
          (n[15] = i),
          (n[16] = _))
        : (_ = n[16]),
      (p = `min-h-0 flex-1 overflow-y-auto px-3 py-4`),
      n[17] === r.isPending
        ? (m = n[18])
        : ((m = r.isPending
            ? (0, q.jsxs)(`div`, {
                className: `flex h-20 items-center justify-center`,
                role: `status`,
                children: [
                  (0, q.jsx)(b, {}),
                  (0, q.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, q.jsx)(o, {
                      id: `chatgptFilePreview.versionHistory.loading`,
                      defaultMessage: `Loading version history…`,
                      description: `Accessible status announced while Library file version history loads`,
                    }),
                  }),
                ],
              })
            : null),
          (n[17] = r.isPending),
          (n[18] = m)),
      n[19] === f?.length
        ? (h = n[20])
        : ((h =
            f?.length === 0
              ? (0, q.jsx)(`p`, {
                  className: `text-sm text-tertiary`,
                  children: (0, q.jsx)(o, {
                    id: `chatgptFilePreview.versionHistory.empty`,
                    defaultMessage: `No saved versions`,
                    description: `Empty state in a Library file version-history panel when the file has no saved versions`,
                  }),
                })
              : null),
          (n[19] = f?.length),
          (n[20] = h)),
      (g =
        e.length > 0
          ? (0, q.jsx)(`div`, {
              className: `flex flex-col gap-6`,
              children: e.map((e) =>
                (0, q.jsxs)(
                  `section`,
                  {
                    children: [
                      (0, q.jsx)(`h3`, {
                        className: `mb-3 px-1 text-sm font-medium text-tertiary`,
                        children: (0, q.jsx)(ne, { dayStart: e.dayStart }),
                      }),
                      (0, q.jsx)(`ol`, {
                        children: e.versions.map((t, n) =>
                          (0, q.jsx)(
                            te,
                            {
                              isLast: n === e.versions.length - 1,
                              isRestoring: r.isRestoring,
                              isSelected: t === r.selectedVersion,
                              version: t,
                              onSelect: () => {
                                (r.select(t), u && a.set(j, r.ownerId, ee));
                              },
                            },
                            t.version_number,
                          ),
                        ),
                      }),
                    ],
                  },
                  e.dayStart,
                ),
              ),
            })
          : null),
      (n[0] = r),
      (n[1] = l),
      (n[2] = u),
      (n[3] = a),
      (n[4] = f),
      (n[5] = p),
      (n[6] = m),
      (n[7] = h),
      (n[8] = g),
      (n[9] = _));
  } else ((p = n[5]), (m = n[6]), (h = n[7]), (g = n[8]), (_ = n[9]));
  let y;
  n[21] !== r.isError || n[22] !== r.isFetching || n[23] !== r.refetch
    ? ((y = r.isError
        ? (0, q.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 py-2 text-sm text-tertiary`,
            children: [
              (0, q.jsx)(o, {
                id: `chatgptFilePreview.versionHistory.loadFailed`,
                defaultMessage: `Couldn’t load version history`,
                description: `Error shown when saved versions for a Library file cannot be loaded`,
              }),
              (0, q.jsx)(t, {
                color: `secondary`,
                size: `compact`,
                loading: r.isFetching,
                onClick: r.refetch,
                children: (0, q.jsx)(o, {
                  id: `chatgptFilePreview.versionHistory.retry`,
                  defaultMessage: `Retry`,
                  description: `Button that retries loading saved versions for a Library file`,
                }),
              }),
            ],
          })
        : null),
      (n[21] = r.isError),
      (n[22] = r.isFetching),
      (n[23] = r.refetch),
      (n[24] = y))
    : (y = n[24]);
  let x;
  n[25] !== r.fetchNextPage ||
  n[26] !== r.hasNextPage ||
  n[27] !== r.isError ||
  n[28] !== r.isFetchingNextPage
    ? ((x =
        !r.isError && r.hasNextPage
          ? (0, q.jsx)(t, {
              color: `secondary`,
              loading: r.isFetchingNextPage,
              size: `compact`,
              onClick: r.fetchNextPage,
              children: (0, q.jsx)(o, {
                id: `chatgptFilePreview.versionHistory.showMore`,
                defaultMessage: `Show more`,
                description: `Button that loads older saved versions for a Library file`,
              }),
            })
          : null),
      (n[25] = r.fetchNextPage),
      (n[26] = r.hasNextPage),
      (n[27] = r.isError),
      (n[28] = r.isFetchingNextPage),
      (n[29] = x))
    : (x = n[29]);
  let S;
  n[30] !== p || n[31] !== m || n[32] !== h || n[33] !== g || n[34] !== y || n[35] !== x
    ? ((S = (0, q.jsxs)(`div`, { className: p, children: [m, h, g, y, x] })),
      (n[30] = p),
      (n[31] = m),
      (n[32] = h),
      (n[33] = g),
      (n[34] = y),
      (n[35] = x),
      (n[36] = S))
    : (S = n[36]);
  let C;
  return (
    n[37] !== _ || n[38] !== S
      ? ((C = (0, q.jsxs)(q.Fragment, { children: [_, S] })), (n[37] = _), (n[38] = S), (n[39] = C))
      : (C = n[39]),
    C
  );
}
function ee() {
  return { accessory: `version-history`, phase: `preview` };
}
function te(e) {
  let t = (0, G.c)(49),
    { isLast: n, isRestoring: r, isSelected: i, version: a, onSelect: s } = e,
    c = d(),
    l = f(L),
    p = (0, K.useId)(),
    m = a.version_provenance?.action ?? (a.version_number === 0 ? `create` : `edit`),
    g = a.version_provenance?.actor === `agent`,
    _ = a.version_provenance?.actor_id?.trim(),
    v = !g && _ != null && l != null && _ !== l,
    y;
  if (g) {
    let e;
    (t[0] === c
      ? (e = t[1])
      : ((e = c.formatMessage({
          id: `chatgptFilePreview.versionHistory.chatgpt`,
          defaultMessage: `ChatGPT`,
          description: `Name of ChatGPT shown as the author of a saved Library file version`,
        })),
        (t[0] = c),
        (t[1] = e)),
      (y = e));
  } else if (v) {
    let e;
    (t[2] === c
      ? (e = t[3])
      : ((e = c.formatMessage({
          id: `chatgptFilePreview.versionHistory.collaborator`,
          defaultMessage: `Collaborator`,
          description: `Neutral name shown when another person authored a saved Library file version but their identity has not been verified for display`,
        })),
        (t[2] = c),
        (t[3] = e)),
      (y = e));
  }
  let b;
  t[4] === a.version_provenance?.reason
    ? (b = t[5])
    : ((b = a.version_provenance?.reason?.trim()), (t[4] = a.version_provenance?.reason), (t[5] = b));
  let x = b,
    S = a.version_created_at ?? a.file_upload_time,
    C;
  if (a.is_current) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(o, {
          id: `chatgptFilePreview.versionHistory.currentVersion`,
          defaultMessage: `Current version`,
          description: `Identifies the current saved version of a Library file`,
        })),
        (t[6] = e))
      : (e = t[6]),
      (C = e));
  } else if (x) C = x;
  else {
    let e;
    (t[7] === m
      ? (e = t[8])
      : ((e = (0, q.jsx)(o, {
          id: `chatgptFilePreview.versionHistory.versionKind`,
          defaultMessage: `{action, select, create {Created} restore {Restored} other {Edited}}`,
          description: `Short status beneath a historical Library file version describing whether it was created, restored, or edited`,
          values: { action: m },
        })),
        (t[7] = m),
        (t[8] = e)),
      (C = e));
  }
  let w;
  t[9] === n
    ? (w = t[10])
    : ((w = n
        ? null
        : (0, q.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute start-1 top-6 -bottom-2 flex w-1.5 justify-center`,
            children: (0, q.jsx)(`span`, { className: `w-px bg-border` }),
          })),
      (t[9] = n),
      (t[10] = w));
  let T = a.is_current ? `bg-text` : `bg-text-tertiary`,
    E;
  t[11] === T
    ? (E = t[12])
    : ((E = h(`pointer-events-none absolute start-1 top-3.5 size-1.5 rounded-full`, T)),
      (t[11] = T),
      (t[12] = E));
  let D;
  t[13] === E
    ? (D = t[14])
    : ((D = (0, q.jsx)(`span`, { "aria-hidden": `true`, className: E })), (t[13] = E), (t[14] = D));
  let O = i ? `bg-primary-soft-active` : `hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover`,
    k;
  t[15] === O
    ? (k = t[16])
    : ((k = h(`flex items-start rounded-xl p-2 transition-colors`, O)), (t[15] = O), (t[16] = k));
  let A = i ? `page` : void 0,
    j = y == null ? `${p}-time ${p}-description` : `${p}-time ${p}-description ${p}-actor`,
    M;
  t[17] !== c || t[18] !== a.version_number
    ? ((M = c.formatMessage(
        {
          id: `chatgptFilePreview.versionHistory.version`,
          defaultMessage: `Version {version}`,
          description: `Accessible label for one saved Library file version; version is its numeric revision number`,
        },
        { version: a.version_number },
      )),
      (t[17] = c),
      (t[18] = a.version_number),
      (t[19] = M))
    : (M = t[19]);
  let N = `${p}-time`,
    P;
  t[20] === S
    ? (P = t[21])
    : ((P = (0, q.jsx)(u, { value: S, hour: `numeric`, minute: `2-digit` })), (t[20] = S), (t[21] = P));
  let I;
  t[22] !== N || t[23] !== P || t[24] !== S
    ? ((I = (0, q.jsx)(`time`, {
        id: N,
        className: `block text-sm leading-5 text-tertiary`,
        dateTime: S,
        children: P,
      })),
      (t[22] = N),
      (t[23] = P),
      (t[24] = S),
      (t[25] = I))
    : (I = t[25]);
  let R = `${p}-description`,
    B;
  t[26] !== R || t[27] !== C
    ? ((B = (0, q.jsx)(`span`, {
        id: R,
        className: `mt-1 block text-sm leading-5 text-default`,
        children: C,
      })),
      (t[26] = R),
      (t[27] = C),
      (t[28] = B))
    : (B = t[28]);
  let V;
  t[29] !== y || t[30] !== p || t[31] !== g
    ? ((V =
        y == null
          ? null
          : (0, q.jsxs)(`span`, {
              id: `${p}-actor`,
              className: `mt-1 flex items-center gap-1.5 text-xs leading-4 text-tertiary`,
              children: [
                g
                  ? (0, q.jsx)(F, { "aria-hidden": !0, className: `size-3.5 shrink-0` })
                  : (0, q.jsx)(z, { alt: ``, colorKey: y, name: y, size: `inline`, src: null }),
                (0, q.jsx)(`span`, { className: `truncate`, children: y }),
              ],
            })),
      (t[29] = y),
      (t[30] = p),
      (t[31] = g),
      (t[32] = V))
    : (V = t[32]);
  let H;
  t[33] !== r ||
  t[34] !== s ||
  t[35] !== M ||
  t[36] !== I ||
  t[37] !== B ||
  t[38] !== V ||
  t[39] !== A ||
  t[40] !== j
    ? ((H = (0, q.jsxs)(`button`, {
        type: `button`,
        "aria-current": A,
        "aria-describedby": j,
        "aria-label": M,
        className: `min-w-0 flex-1 cursor-interaction rounded-lg text-start focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default`,
        disabled: r,
        onClick: s,
        children: [I, B, V],
      })),
      (t[33] = r),
      (t[34] = s),
      (t[35] = M),
      (t[36] = I),
      (t[37] = B),
      (t[38] = V),
      (t[39] = A),
      (t[40] = j),
      (t[41] = H))
    : (H = t[41]);
  let U;
  t[42] !== H || t[43] !== k
    ? ((U = (0, q.jsx)(`div`, { className: k, children: H })), (t[42] = H), (t[43] = k), (t[44] = U))
    : (U = t[44]);
  let W;
  return (
    t[45] !== U || t[46] !== w || t[47] !== D
      ? ((W = (0, q.jsxs)(`li`, { className: `relative ps-5 pb-5 last:pb-0`, children: [w, D, U] })),
        (t[45] = U),
        (t[46] = w),
        (t[47] = D),
        (t[48] = W))
      : (W = t[48]),
    W
  );
}
function ne(e) {
  let t = (0, G.c)(15),
    { dayStart: n } = e,
    r,
    i,
    a,
    s,
    c,
    l;
  if (t[0] !== n) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new Date();
      e.setHours(0, 0, 0, 0);
      let d = new Date(e);
      if ((d.setDate(d.getDate() - 1), n === e.getTime())) {
        let e;
        (t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(o, {
              id: `chatgptFilePreview.versionHistory.today`,
              defaultMessage: `Today`,
              description: `Day heading above Library file versions created today`,
            })),
            (t[7] = e))
          : (e = t[7]),
          (l = e));
        break bb0;
      }
      if (n === d.getTime()) {
        let e;
        (t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(o, {
              id: `chatgptFilePreview.versionHistory.yesterday`,
              defaultMessage: `Yesterday`,
              description: `Day heading above Library file versions created yesterday`,
            })),
            (t[8] = e))
          : (e = t[8]),
          (l = e));
        break bb0;
      }
      ((r = u),
        (i = n),
        (a = `short`),
        (s = `numeric`),
        (c = new Date(n).getFullYear() === e.getFullYear() ? void 0 : `numeric`));
    }
    ((t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a), (t[4] = s), (t[5] = c), (t[6] = l));
  } else ((r = t[1]), (i = t[2]), (a = t[3]), (s = t[4]), (c = t[5]), (l = t[6]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let d;
  return (
    t[9] !== r || t[10] !== i || t[11] !== a || t[12] !== s || t[13] !== c
      ? ((d = (0, q.jsx)(r, { value: i, month: a, day: s, year: c })),
        (t[9] = r),
        (t[10] = i),
        (t[11] = a),
        (t[12] = s),
        (t[13] = c),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function re(e) {
  let t = [];
  for (let n of e) {
    let e = new Date(n.version_created_at ?? n.file_upload_time);
    e.setHours(0, 0, 0, 0);
    let r = t.at(-1);
    r?.dayStart === e.getTime() ? r.versions.push(n) : t.push({ dayStart: e.getTime(), versions: [n] });
  }
  return t;
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = C()), p(), l(), (K = E()), _(), R(), A(), x(), g(), S(), P(), w(), r(), M(), (q = T()));
  }))();
}
function ie(e, t) {
  return t === `file-info`
    ? e.formatMessage({
        id: `chatgptFilePreview.fileInfo.title`,
        defaultMessage: `File info`,
        description: `Short heading and accessible name for the panel that shows metadata for the current file.`,
      })
    : t === `version-history`
      ? e.formatMessage({
          id: `chatgptFilePreview.versionHistory.title`,
          defaultMessage: `Version history`,
          description: `Title and accessible label for the side panel listing saved versions of a Library file`,
        })
      : e.formatMessage({
          id: `artifactComments.heading`,
          defaultMessage: `Comments`,
          description: `Heading of the sidebar containing native file comments and persistent ChatGPT comment threads; leave the product name ChatGPT unchanged`,
        });
}
function ae({
  accountId: e,
  accessory: t,
  fileInfoSource: n,
  userId: r,
  versionHistory: i,
  onCloseFileInfo: a,
}) {
  return t === `file-info` && n != null
    ? (0, Y.jsx)(H, { accountId: e, source: n, userId: r, onClose: a })
    : t === `version-history` && i != null
      ? (0, Y.jsx)(W, { history: i })
      : null;
}
var Y;
function X() {
  return (X = e(() => {
    (U(), J(), (Y = T()));
  }))();
}
function oe(e) {
  let t = (0, Q.c)(15),
    {
      accountId: n,
      comments: r,
      contentOverflow: i,
      fileInfoSource: a,
      layout: o,
      ownerId: s,
      renderLayout: c,
      userId: l,
      versionHistory: u,
    } = e,
    d = o.headerPlacement === `overlay`,
    f;
  t[0] !== n ||
  t[1] !== r ||
  t[2] !== i ||
  t[3] !== a ||
  t[4] !== o.content ||
  t[5] !== o.panels ||
  t[6] !== s ||
  t[7] !== d ||
  t[8] !== l ||
  t[9] !== u
    ? ((f = (0, $.jsx)(Z, {
        accountId: n,
        comments: r,
        contentOverflow: i,
        fileInfoSource: a,
        ownerId: s,
        panelClearsHeader: d,
        panels: o.panels,
        userId: l,
        versionHistory: u,
        children: o.content,
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o.content),
      (t[5] = o.panels),
      (t[6] = s),
      (t[7] = d),
      (t[8] = l),
      (t[9] = u),
      (t[10] = f))
    : (f = t[10]);
  let p;
  return (
    t[11] !== o || t[12] !== c || t[13] !== f
      ? ((p = (0, $.jsx)(V, { ...o, content: f, renderLayout: c })),
        (t[11] = o),
        (t[12] = c),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function Z(e) {
  let t = (0, Q.c)(18),
    {
      accountId: n,
      children: r,
      comments: i,
      contentOverflow: a,
      fileInfoSource: o,
      ownerId: s,
      panelClearsHeader: c,
      panels: l,
      userId: u,
      versionHistory: d,
    } = e;
  if (s == null) {
    let e;
    t[0] === l
      ? (e = t[1])
      : ((e = l != null && l.length > 0 ? (0, $.jsx)(ue, { panels: l }) : null), (t[0] = l), (t[1] = e));
    let n;
    return (
      t[2] !== r || t[3] !== a || t[4] !== c || t[5] !== e
        ? ((n = (0, $.jsx)(le, { contentOverflow: a, panelClearsHeader: c, panel: e, children: r })),
          (t[2] = r),
          (t[3] = a),
          (t[4] = c),
          (t[5] = e),
          (t[6] = n))
        : (n = t[6]),
      n
    );
  }
  let f;
  return (
    t[7] !== n ||
    t[8] !== r ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== o ||
    t[12] !== s ||
    t[13] !== c ||
    t[14] !== l ||
    t[15] !== u ||
    t[16] !== d
      ? ((f = (0, $.jsx)(se, {
          accountId: n,
          comments: i,
          contentOverflow: a,
          fileInfoSource: o,
          ownerId: s,
          panelClearsHeader: c,
          panels: l,
          userId: u,
          versionHistory: d,
          children: r,
        })),
        (t[7] = n),
        (t[8] = r),
        (t[9] = i),
        (t[10] = a),
        (t[11] = o),
        (t[12] = s),
        (t[13] = c),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
function se(e) {
  let t = (0, Q.c)(37),
    {
      accountId: n,
      children: r,
      comments: a,
      contentOverflow: o,
      fileInfoSource: s,
      ownerId: l,
      panelClearsHeader: u,
      panels: f,
      userId: p,
      versionHistory: m,
    } = e,
    g = c(i),
    _ = O(j, l),
    v = d(),
    y = O(N, l),
    b = m ?? y,
    x = _?.accessory,
    S;
  t[0] !== l || t[1] !== g
    ? ((S = () => k(g, l, `file-info`)), (t[0] = l), (t[1] = g), (t[2] = S))
    : (S = t[2]);
  let C;
  t[3] !== x || t[4] !== n || t[5] !== s || t[6] !== b || t[7] !== S || t[8] !== p
    ? ((C = ae({
        accountId: n,
        accessory: x,
        fileInfoSource: s,
        userId: p,
        versionHistory: b,
        onCloseFileInfo: S,
      })),
      (t[3] = x),
      (t[4] = n),
      (t[5] = s),
      (t[6] = b),
      (t[7] = S),
      (t[8] = p),
      (t[9] = C))
    : (C = t[9]);
  let w = C,
    T = x === `comments` ? a != null : w != null,
    E = x === `version-history` && b?.isRestoring,
    D;
  t[10] !== x || t[11] !== v ? ((D = ie(v, x)), (t[10] = x), (t[11] = v), (t[12] = D)) : (D = t[12]);
  let A;
  t[13] !== x || t[14] !== l || t[15] !== g
    ? ((A = () => {
        x != null && I(g, l, x);
      }),
      (t[13] = x),
      (t[14] = l),
      (t[15] = g),
      (t[16] = A))
    : (A = t[16]);
  let M = T && _?.phase === `open`,
    P;
  t[17] !== a || t[18] !== f
    ? ((P = a == null ? f : f?.filter(ce)), (t[17] = a), (t[18] = f), (t[19] = P))
    : (P = t[19]);
  let F = x === `file-info` || x === `version-history` || (x === `comments` && a != null),
    L;
  t[20] !== x || t[21] !== a
    ? ((L =
        a != null &&
        (0, $.jsx)(`div`, {
          className: h(`flex min-h-0 flex-1 flex-col`, x !== `comments` && `hidden`),
          children: a,
        })),
      (t[20] = x),
      (t[21] = a),
      (t[22] = L))
    : (L = t[22]);
  let R = x === `comments` || _?.phase !== `open` ? null : w,
    z;
  t[23] !== R ||
  t[24] !== E ||
  t[25] !== D ||
  t[26] !== A ||
  t[27] !== M ||
  t[28] !== P ||
  t[29] !== F ||
  t[30] !== L
    ? ((z = (0, $.jsxs)(ue, {
        busy: E,
        label: D,
        onExitComplete: A,
        open: M,
        panels: P,
        hideEditorPanels: F,
        children: [L, R],
      })),
      (t[23] = R),
      (t[24] = E),
      (t[25] = D),
      (t[26] = A),
      (t[27] = M),
      (t[28] = P),
      (t[29] = F),
      (t[30] = L),
      (t[31] = z))
    : (z = t[31]);
  let B;
  return (
    t[32] !== r || t[33] !== o || t[34] !== u || t[35] !== z
      ? ((B = (0, $.jsx)(le, { contentOverflow: o, panelClearsHeader: u, panel: z, children: r })),
        (t[32] = r),
        (t[33] = o),
        (t[34] = u),
        (t[35] = z),
        (t[36] = B))
      : (B = t[36]),
    B
  );
}
function ce(e) {
  return e.id !== `comments`;
}
function le(e) {
  let t = (0, Q.c)(17),
    { children: n, contentOverflow: r, panel: i, panelClearsHeader: a } = e,
    o = r === void 0 ? `hidden` : r,
    s = a !== void 0 && a,
    c = o === `hidden` && `overflow-hidden`,
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = h(`relative flex h-full min-h-0 min-w-0 flex-1`, c)), (t[0] = c), (t[1] = l));
  let u = o === `hidden` && `overflow-hidden`,
    d;
  t[2] === u
    ? (d = t[3])
    : ((d = h(`flex h-full min-h-0 min-w-0 flex-1 flex-col`, u)), (t[2] = u), (t[3] = d));
  let f;
  t[4] !== n || t[5] !== d
    ? ((f = (0, $.jsx)(`div`, { className: d, children: n })), (t[4] = n), (t[5] = d), (t[6] = f))
    : (f = t[6]);
  let p = o === `visible` && `start-0 justify-items-end overflow-hidden`,
    m = s && `pt-13`,
    g;
  t[7] !== p || t[8] !== m
    ? ((g = h(`pointer-events-none absolute inset-y-0 end-0 grid min-h-0 max-w-full min-w-0`, p, m)),
      (t[7] = p),
      (t[8] = m),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== i || t[11] !== g
    ? ((_ = (0, $.jsx)(`div`, { className: g, children: i })), (t[10] = i), (t[11] = g), (t[12] = _))
    : (_ = t[12]);
  let v;
  return (
    t[13] !== _ || t[14] !== l || t[15] !== f
      ? ((v = (0, $.jsxs)(`div`, { className: l, children: [f, _] })),
        (t[13] = _),
        (t[14] = l),
        (t[15] = f),
        (t[16] = v))
      : (v = t[16]),
    v
  );
}
function ue(e) {
  let t = (0, Q.c)(20),
    { busy: n, children: r, hideEditorPanels: i, label: o, onExitComplete: s, open: c, panels: l } = e,
    u = i !== void 0 && i,
    d = c !== void 0 && c,
    f;
  t[0] !== u || t[1] !== l
    ? ((f = u ? void 0 : l?.find(de)), (t[0] = u), (t[1] = l), (t[2] = f))
    : (f = t[2]);
  let p = f,
    [m, g] = (0, fe.useState)(null),
    _ = p?.id ?? (d ? null : m);
  _ !== m && g(_);
  let v;
  t[3] !== o || t[4] !== l || t[5] !== _
    ? ((v = _ == null ? o : l?.find((e) => e.id === _)?.title),
      (t[3] = o),
      (t[4] = l),
      (t[5] = _),
      (t[6] = v))
    : (v = t[6]);
  let y = v,
    b = _ == null ? n : void 0,
    x = typeof y == `string` ? y : void 0,
    S = d || p != null,
    C;
  t[7] !== r || t[8] !== _
    ? ((C =
        r != null &&
        (0, $.jsx)(`div`, {
          className: h(`flex min-h-0 flex-1 flex-col`, _ != null && `hidden`),
          "aria-hidden": _ != null,
          inert: _ != null,
          children: r,
        })),
      (t[7] = r),
      (t[8] = _),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] !== l || t[11] !== _
    ? ((w = l?.map((e) =>
        (0, $.jsx)(
          `div`,
          {
            className: h(`flex min-h-0 flex-1 flex-col`, e.id !== _ && `hidden`),
            "aria-hidden": e.id !== _,
            inert: e.id !== _,
            children: e.content,
          },
          e.id,
        ),
      )),
      (t[10] = l),
      (t[11] = _),
      (t[12] = w))
    : (w = t[12]);
  let T;
  return (
    t[13] !== s || t[14] !== b || t[15] !== x || t[16] !== S || t[17] !== C || t[18] !== w
      ? ((T = (0, $.jsxs)(a, {
          busy: b,
          className: `pointer-events-auto`,
          label: x,
          onExitComplete: s,
          open: S,
          preserveContent: !0,
          size: `compact`,
          children: [C, w],
        })),
        (t[13] = s),
        (t[14] = b),
        (t[15] = x),
        (t[16] = S),
        (t[17] = C),
        (t[18] = w),
        (t[19] = T))
      : (T = t[19]),
    T
  );
}
function de(e) {
  return e.open;
}
var Q, fe, $;
function pe() {
  return (pe = e(() => {
    ((Q = C()), p(), l(), (fe = E()), _(), M(), w(), r(), B(), X(), ($ = T()));
  }))();
}
export { oe as n, pe as r, Z as t };
//# sourceMappingURL=artifact-accessories-fe3be839fff5.js.map
