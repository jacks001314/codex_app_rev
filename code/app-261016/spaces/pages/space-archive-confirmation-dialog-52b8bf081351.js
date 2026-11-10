import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as ee,
  NSt as l,
  PBt as u,
  PSt as d,
  Qst as te,
  RO as f,
  USt as ne,
  VSt as re,
  Vrt as p,
  WO as m,
  XOt as h,
  Y3 as g,
  Z3 as _,
  ZSt as v,
  iCt as ie,
  nCt as y,
  okt as ae,
  qO as oe,
  qrt as se,
  tkt as b,
  zO as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Air as ce,
  JV as le,
  KV as S,
  Mdn as ue,
  Mir as C,
  Odn as w,
  SLn as T,
  Vdn as E,
  Xht as D,
  YV as O,
  Yht as k,
  _ur as A,
  dW as j,
  gur as M,
  hdn as N,
  pW as P,
  qV as de,
  uW as F,
  vLn as I,
} from "./app-initial-ad16eaadf81f.js";
function L(e) {
  let n = (0, R.c)(44),
    { onClose: r, spaceId: i, spaceName: o, rootPageId: c } = e,
    l = t(te),
    u = T(),
    p = y(P, c),
    h;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = { enabled: !1 }), (n[0] = h)) : (h = n[0]);
  let { data: _ } = y(E, i, h),
    v = _?.interaction_mode,
    S;
  n[1] !== p || n[2] !== v ? ((S = F(p, v)), (n[1] = p), (n[2] = v), (n[3] = S)) : (S = n[3]);
  let C = S !== `request_changes`,
    O = ie(C ? de : null)?.data?.archive_retention_days,
    k = ae(),
    j = ne(),
    { state: N } = re(),
    I;
  n[4] === l ? (I = n[5]) : ((I = () => l.get(M)), (n[4] = l), (n[5] = I));
  let [L] = (0, z.useState)(I),
    V = (0, z.useRef)(!1),
    H;
  if (O != null && u) {
    let e;
    (n[6] === O
      ? (e = n[7])
      : ((e = (0, B.jsx)(b, {
          id: `codex.space.archive.descriptionWithRetention.space`,
          defaultMessage: `This space and its pages will move to Trash and be permanently deleted after {days, plural, one {# day} other {# days}}. You can restore them before then.`,
          description: `Explanation before deleting a shared Space when automatic deletion is enabled. Days is the number of days the newly deleted Space and its pages are retained before permanent deletion. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          values: { days: O },
        })),
        (n[6] = O),
        (n[7] = e)),
      (H = e));
  } else if (O != null) {
    let e;
    (n[8] === O
      ? (e = n[9])
      : ((e = (0, B.jsx)(b, {
          id: `codex.space.archive.descriptionWithRetention`,
          defaultMessage: `This space and its pages will move to Trash and be permanently deleted after {days, plural, one {# day} other {# days}}. You can restore them from Library Trash before then.`,
          description: `Explanation before deleting a shared Space when automatic deletion is enabled. Days is the number of days the newly deleted Space and its pages are retained before permanent deletion. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          values: { days: O },
        })),
        (n[8] = O),
        (n[9] = e)),
      (H = e));
  } else if (u) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(b, {
          id: `codex.space.archive.descriptionWithoutRestore.space`,
          defaultMessage: `This space will move to Trash. You can still restore it from Trash.`,
          description: `Explanation shown before deleting a shared Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (n[10] = e))
      : (e = n[10]),
      (H = e));
  } else {
    let e;
    (n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(b, {
          id: `codex.space.archive.descriptionWithoutRestore`,
          defaultMessage: `This space will move to Trash. You can restore it from Library Trash.`,
          description: `Explanation shown before deleting a shared Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (n[11] = e))
      : (e = n[11]),
      (H = e));
  }
  let U;
  n[12] === r
    ? (U = n[13])
    : ((U = (e) => {
        e || r();
      }),
      (n[12] = r),
      (n[13] = U));
  let W;
  n[14] !== L ||
  n[15] !== k ||
  n[16] !== j ||
  n[17] !== r ||
  n[18] !== c ||
  n[19] !== l ||
  n[20] !== i ||
  n[21] !== N
    ? ((W = (e) => {
        if (
          (e.preventDefault(),
          V.current ||
            F(l.get(P, c), l.query.getData(E, i)?.interaction_mode) === `request_changes` ||
            L == null ||
            l.get(M) !== L)
        )
          return;
        V.current = !0;
        let t = A(l, L),
          n = l.get(ce),
          a = d(`/space/:pageId`, n.pathname ?? ``)?.params.pageId,
          o = a == null ? void 0 : l.get(ue, a),
          s =
            d(`/spaces/:spaceId`, n.pathname ?? ``)?.params.spaceId === i ||
            o === c ||
            (o != null && l.get(w, o).space?.id === i);
        (l
          .get(le)
          .mutateAsync({ kind: `space`, id: i })
          .catch(() => {
            t.signal.aborted ||
              l
                .get(se)
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
          r(),
          s && j(l.get(D), { state: N?.spaceSidebarRootPageId == null ? N : void 0 }));
      }),
      (n[14] = L),
      (n[15] = k),
      (n[16] = j),
      (n[17] = r),
      (n[18] = c),
      (n[19] = l),
      (n[20] = i),
      (n[21] = N),
      (n[22] = W))
    : (W = n[22]);
  let G;
  n[23] === o
    ? (G = n[24])
    : ((G = (0, B.jsx)(oe, {
        className: `contents`,
        children: (0, B.jsx)(b, {
          id: `codex.space.archive.title`,
          defaultMessage: `Delete {title}?`,
          description: `Title of the confirmation dialog for deleting a shared Space`,
          values: { title: o },
        }),
      })),
      (n[23] = o),
      (n[24] = G));
  let K;
  n[25] === H
    ? (K = n[26])
    : ((K = (0, B.jsx)(s, { className: `contents`, children: H })), (n[25] = H), (n[26] = K));
  let q;
  n[27] !== G || n[28] !== K
    ? ((q = (0, B.jsx)(x, {
        children: (0, B.jsx)(f, { titleClassName: `line-clamp-3 break-words pe-8`, title: G, subtitle: K }),
      })),
      (n[27] = G),
      (n[28] = K),
      (n[29] = q))
    : (q = n[29]);
  let J;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, B.jsx)(b, {
        id: `codex.space.archive.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label to cancel deleting a shared Space`,
      })),
      (n[30] = J))
    : (J = n[30]);
  let Y;
  n[31] === r
    ? (Y = n[32])
    : ((Y = (0, B.jsx)(g, { color: `secondary`, type: `button`, onClick: r, children: J })),
      (n[31] = r),
      (n[32] = Y));
  let X;
  n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, B.jsx)(g, {
        color: `danger`,
        type: `submit`,
        children: (0, B.jsx)(b, {
          id: `codex.space.archive.confirm`,
          defaultMessage: `Delete`,
          description: `Button label to confirm deleting a shared Space`,
        }),
      })),
      (n[33] = X))
    : (X = n[33]);
  let Z;
  n[34] === Y
    ? (Z = n[35])
    : ((Z = (0, B.jsx)(x, { children: (0, B.jsxs)(ee, { children: [Y, X] }) })), (n[34] = Y), (n[35] = Z));
  let Q;
  n[36] !== Z || n[37] !== W || n[38] !== q
    ? ((Q = (0, B.jsxs)(a, { className: `select-none`, as: `form`, onSubmit: W, children: [q, Z] })),
      (n[36] = Z),
      (n[37] = W),
      (n[38] = q),
      (n[39] = Q))
    : (Q = n[39]);
  let $;
  return (
    n[40] !== C || n[41] !== Q || n[42] !== U
      ? (($ = (0, B.jsx)(m, {
          open: C,
          dialogCloseClassName: `rtl:start-auto rtl:end-4`,
          size: `compact`,
          onOpenChange: U,
          children: Q,
        })),
        (n[40] = C),
        (n[41] = Q),
        (n[42] = U),
        (n[43] = $))
      : ($ = n[43]),
    $
  );
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = u()),
      v(),
      (z = r()),
      h(),
      l(),
      C(),
      _(),
      o(),
      i(),
      p(),
      I(),
      O(),
      S(),
      j(),
      k(),
      N(),
      n(),
      (B = c()));
  }))();
}
V();
export { L as SpaceArchiveConfirmationDialog };
//# sourceMappingURL=space-archive-confirmation-dialog-52b8bf081351.js.map
