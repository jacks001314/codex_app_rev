import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ext as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  VDt as ee,
  Vxt as te,
  _O as ne,
  _xt as s,
  cO as c,
  fO as l,
  gO as re,
  hot as ie,
  jDt as u,
  lO as d,
  lot as f,
  mO as ae,
  oO as oe,
  sO as se,
  t3 as p,
  vO as m,
  vxt as h,
  vzt as g,
  wot as _,
  wxt as v,
  xMt as y,
  yzt as b,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  $H as S,
  Dor as C,
  KNn as w,
  Oor as ce,
  Psn as le,
  QV as T,
  Rmt as E,
  Rsn as ue,
  XH as D,
  XNn as de,
  XV as O,
  YV as k,
  ZH as A,
  ZV as j,
  lIr as M,
  qsn as N,
  sIr as P,
  xsn as F,
  zmt as I,
} from "./app-initial-5851df3f6cb1.js";
function L(e) {
  let o = (0, R.c)(44),
    { onClose: s, spaceId: l, spaceName: u, rootPageId: f } = e,
    p = a(n),
    m = de(),
    g = x(S, f),
    _;
  o[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = { enabled: !1 }), (o[0] = _)) : (_ = o[0]);
  let { data: y } = x(N, l, _),
    b = y?.interaction_mode,
    w;
  o[1] !== g || o[2] !== b ? ((w = D(g, b)), (o[1] = g), (o[2] = b), (o[3] = w)) : (w = o[3]);
  let T = w !== `request_changes`,
    E = te(T ? O : null)?.data?.archive_retention_days,
    k = ee(),
    A = r(),
    { state: M } = v(),
    F;
  o[4] === p ? (F = o[5]) : ((F = () => p.get(C)), (o[4] = p), (o[5] = F));
  let [L] = (0, z.useState)(F),
    V = (0, z.useRef)(!1),
    H;
  if (E != null && m) {
    let e;
    (o[6] === E
      ? (e = o[7])
      : ((e = (0, B.jsx)(i, {
          id: `codex.space.archive.descriptionWithRetention.space`,
          defaultMessage: `This space and its pages will move to Trash and be permanently deleted after {days, plural, one {# day} other {# days}}. You can restore them before then.`,
          description: `Explanation before deleting a shared Space when automatic deletion is enabled. Days is the number of days the newly deleted Space and its pages are retained before permanent deletion. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          values: { days: E },
        })),
        (o[6] = E),
        (o[7] = e)),
      (H = e));
  } else if (E != null) {
    let e;
    (o[8] === E
      ? (e = o[9])
      : ((e = (0, B.jsx)(i, {
          id: `codex.space.archive.descriptionWithRetention`,
          defaultMessage: `This space and its pages will move to Trash and be permanently deleted after {days, plural, one {# day} other {# days}}. You can restore them from Library Trash before then.`,
          description: `Explanation before deleting a shared Space when automatic deletion is enabled. Days is the number of days the newly deleted Space and its pages are retained before permanent deletion. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          values: { days: E },
        })),
        (o[8] = E),
        (o[9] = e)),
      (H = e));
  } else if (m) {
    let e;
    (o[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(i, {
          id: `codex.space.archive.descriptionWithoutRestore.space`,
          defaultMessage: `This space will move to Trash. You can still restore it from Trash.`,
          description: `Explanation shown before deleting a shared Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (o[10] = e))
      : (e = o[10]),
      (H = e));
  } else {
    let e;
    (o[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(i, {
          id: `codex.space.archive.descriptionWithoutRestore`,
          defaultMessage: `This space will move to Trash. You can restore it from Library Trash.`,
          description: `Explanation shown before deleting a shared Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (o[11] = e))
      : (e = o[11]),
      (H = e));
  }
  let U;
  o[12] === s
    ? (U = o[13])
    : ((U = (e) => {
        e || s();
      }),
      (o[12] = s),
      (o[13] = U));
  let W;
  o[14] !== L ||
  o[15] !== k ||
  o[16] !== A ||
  o[17] !== s ||
  o[18] !== f ||
  o[19] !== p ||
  o[20] !== l ||
  o[21] !== M
    ? ((W = (e) => {
        if (
          (e.preventDefault(),
          V.current ||
            D(p.get(S, f), p.query.getData(N, l)?.interaction_mode) === `request_changes` ||
            L == null ||
            p.get(C) !== L)
        )
          return;
        V.current = !0;
        let t = ce(p, L),
          n = p.get(P),
          r = h(`/space/:pageId`, n.pathname ?? ``)?.params.pageId,
          i = r == null ? void 0 : p.get(ue, r),
          a =
            h(`/spaces/:spaceId`, n.pathname ?? ``)?.params.spaceId === l ||
            i === f ||
            (i != null && p.get(le, i).space?.id === l);
        (p
          .get(j)
          .mutateAsync({ kind: `space`, id: l })
          .catch(() => {
            t.signal.aborted ||
              p
                .get(ie)
                .danger(
                  k.formatMessage({
                    id: `codex.space.sidebar.archiveError`,
                    defaultMessage: `Could not delete space`,
                    description: `Notification shown when deleting a shared Space owned by the signed-in person fails. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                  }),
                  { errorAnalytics: { toastId: `codex.space.sidebar.archiveError` } },
                );
          })
          .finally(t.stop),
          s(),
          a && A(p.get(I), { state: M?.spaceSidebarRootPageId == null ? M : void 0 }));
      }),
      (o[14] = L),
      (o[15] = k),
      (o[16] = A),
      (o[17] = s),
      (o[18] = f),
      (o[19] = p),
      (o[20] = l),
      (o[21] = M),
      (o[22] = W))
    : (W = o[22]);
  let G;
  o[23] === u
    ? (G = o[24])
    : ((G = (0, B.jsx)(ne, {
        className: `contents`,
        children: (0, B.jsx)(i, {
          id: `codex.space.archive.title`,
          defaultMessage: `Delete {title}?`,
          description: `Title of the confirmation dialog for deleting a shared Space`,
          values: { title: u },
        }),
      })),
      (o[23] = u),
      (o[24] = G));
  let K;
  o[25] === H
    ? (K = o[26])
    : ((K = (0, B.jsx)(re, { className: `contents`, children: H })), (o[25] = H), (o[26] = K));
  let q;
  o[27] !== G || o[28] !== K
    ? ((q = (0, B.jsx)(d, {
        children: (0, B.jsx)(c, { titleClassName: `line-clamp-3 break-words pe-8`, title: G, subtitle: K }),
      })),
      (o[27] = G),
      (o[28] = K),
      (o[29] = q))
    : (q = o[29]);
  let J;
  o[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, B.jsx)(i, {
        id: `codex.space.archive.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label to cancel deleting a shared Space`,
      })),
      (o[30] = J))
    : (J = o[30]);
  let Y;
  o[31] === s
    ? (Y = o[32])
    : ((Y = (0, B.jsx)(t, { color: `secondary`, type: `button`, onClick: s, children: J })),
      (o[31] = s),
      (o[32] = Y));
  let X;
  o[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, B.jsx)(t, {
        color: `danger`,
        type: `submit`,
        children: (0, B.jsx)(i, {
          id: `codex.space.archive.confirm`,
          defaultMessage: `Delete`,
          description: `Button label to confirm deleting a shared Space`,
        }),
      })),
      (o[33] = X))
    : (X = o[33]);
  let Z;
  o[34] === Y
    ? (Z = o[35])
    : ((Z = (0, B.jsx)(d, { children: (0, B.jsxs)(se, { children: [Y, X] }) })), (o[34] = Y), (o[35] = Z));
  let Q;
  o[36] !== Z || o[37] !== W || o[38] !== q
    ? ((Q = (0, B.jsxs)(oe, { className: `select-none`, as: `form`, onSubmit: W, children: [q, Z] })),
      (o[36] = Z),
      (o[37] = W),
      (o[38] = q),
      (o[39] = Q))
    : (Q = o[39]);
  let $;
  return (
    o[40] !== T || o[41] !== Q || o[42] !== U
      ? (($ = (0, B.jsx)(ae, {
          open: T,
          dialogCloseClassName: `rtl:start-auto rtl:end-4`,
          size: `compact`,
          onOpenChange: U,
          children: Q,
        })),
        (o[40] = T),
        (o[41] = Q),
        (o[42] = U),
        (o[43] = $))
      : ($ = o[43]),
    $
  );
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = g()),
      o(),
      (z = b()),
      u(),
      s(),
      M(),
      p(),
      m(),
      l(),
      f(),
      w(),
      T(),
      k(),
      A(),
      E(),
      F(),
      _(),
      (B = y()));
  }))();
}
V();
export { L as SpaceArchiveConfirmationDialog };
//# sourceMappingURL=space-archive-confirmation-dialog-9d3fb1754b58.js.map
