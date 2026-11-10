import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ext as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  VDt as a,
  _xt as o,
  bxt as ee,
  cI as s,
  hot as c,
  iI as l,
  jDt as u,
  lot as d,
  nI as f,
  sI as p,
  vzt as m,
  wxt as h,
  xMt as g,
  yzt as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  AI as y,
  Bar as b,
  Cwr as x,
  Dnn as te,
  Dor as S,
  Ear as C,
  Enn as ne,
  Gtn as w,
  MI as re,
  Rsn as T,
  Tnn as E,
  Wtn as D,
  _Pn as O,
  _ot as ie,
  dPn as ae,
  gPn as oe,
  gnn as se,
  gwr as k,
  hPn as A,
  hnn as j,
  inn as M,
  mc as N,
  pc as P,
  qsn as F,
  rnn as I,
  vPn as L,
  vot as R,
  wnn as z,
  xsn as B,
} from "./app-initial-5851df3f6cb1.js";
function V(e) {
  let i = (0, H.c)(48),
    { resource: o } = e,
    s = r(k),
    l = a(),
    u = h(),
    d = t(),
    [m, g] = (0, U.useState)(!1),
    { reference: _ } = o,
    y;
  i[0] === _ ? (y = i[1]) : ((y = f(_)), (i[0] = _), (i[1] = y));
  let x = v(se, y),
    C = _.kind === `space` || x != null,
    w = v(ne, _),
    j = v(E, _),
    M,
    N,
    L,
    R,
    z;
  i[2] !== l ||
  i[3] !== u ||
  i[4] !== d ||
  i[5] !== m ||
  i[6] !== _.id ||
  i[7] !== _.kind ||
  i[8] !== w ||
  i[9] !== s
    ? ((z = w === void 0 ? `…` : (w ?? l.formatMessage(te, { kind: _.kind }))),
      (N = async (e) => {
        let t = s.get(S);
        if (s.get(b) && t != null) {
          try {
            let n = _.kind === `page` ? _.id : (await s.query.getOrFetch(F, _.id)).root_page_id;
            if (s.get(S) !== t || !s.get(b)) return;
            if (ie(s, u.pathname) === s.get(T, n)) {
              e != null &&
                d(
                  { ...ee(p(n, void 0, e)), pathname: u.pathname },
                  { state: { ...u.state, scrollPageToTop: !1 } },
                );
              return;
            }
            if (re(s, n, { blockId: e, title: z }).opened) return;
          } catch {}
          s.get(S) === t &&
            s
              .get(c)
              .danger(
                (0, W.jsx)(n, {
                  id: `codex.space.endResource.openError`,
                  defaultMessage: `Couldn't open source`,
                  description: `Error when a cited Page or Space cannot be opened`,
                }),
                { errorAnalytics: { toastId: `codex.space.endResource.openError` } },
              );
        }
      }),
      (M = ae),
      (L = m),
      (R = l.formatMessage(
        {
          id: `codex.space.endResource.open`,
          defaultMessage: `Open {title}`,
          description: `Accessible label for opening a cited Page or Space beside the task`,
        },
        { title: z },
      )),
      (i[2] = l),
      (i[3] = u),
      (i[4] = d),
      (i[5] = m),
      (i[6] = _.id),
      (i[7] = _.kind),
      (i[8] = w),
      (i[9] = s),
      (i[10] = M),
      (i[11] = N),
      (i[12] = L),
      (i[13] = R),
      (i[14] = z))
    : ((M = i[10]), (N = i[11]), (L = i[12]), (R = i[13]), (z = i[14]));
  let B;
  i[15] !== N || i[16] !== _.blockId || i[17] !== _.kind
    ? ((B = () => {
        (g(!0), N(_.kind === `page` ? (_.blockId ?? null) : null).finally(() => g(!1)));
      }),
      (i[15] = N),
      (i[16] = _.blockId),
      (i[17] = _.kind),
      (i[18] = B))
    : (B = i[18]);
  let V;
  i[19] !== M || i[20] !== m || i[21] !== L || i[22] !== R || i[23] !== B
    ? ((V = (0, W.jsx)(M, { "aria-busy": L, "aria-label": R, disabled: m, onClick: B })),
      (i[19] = M),
      (i[20] = m),
      (i[21] = L),
      (i[22] = R),
      (i[23] = B),
      (i[24] = V))
    : (V = i[24]);
  let G = V,
    K;
  i[25] !== G || i[26] !== N || i[27] !== _.blockId || i[28] !== _.id || i[29] !== _.kind || i[30] !== z
    ? ((K =
        _.kind === `page`
          ? (0, W.jsx)(P, {
              pageId: _.id,
              blockId: _.blockId,
              title: z,
              onOpen: (e) => void N(e),
              children: G,
            })
          : G),
      (i[25] = G),
      (i[26] = N),
      (i[27] = _.blockId),
      (i[28] = _.id),
      (i[29] = _.kind),
      (i[30] = z),
      (i[31] = K))
    : (K = i[31]);
  let q = _.kind === `page` ? _.id : void 0,
    J = j?.document_type,
    Y = j?.namespace,
    X = j?.symbol,
    Z;
  i[32] !== C || i[33] !== j?.document_type || i[34] !== _.id || i[35] !== x?.spaceId || i[36] !== z
    ? ((Z = (e) => {
        let { icon: t, title: r } = e;
        return (0, W.jsx)(O, {
          className: `pointer-events-none relative z-10`,
          icon: (0, W.jsx)(A, { children: C ? (0, W.jsx)(I, { spaceId: x?.spaceId ?? _.id }) : t }),
          subtitle: C
            ? (0, W.jsx)(n, {
                id: `codex.space.endResource.space`,
                defaultMessage: `Space`,
                description: `Resource type for a cited Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              })
            : (0, W.jsx)(n, {
                id: `codex.space.endResource.page.byDocumentType`,
                values: { documentType: j?.document_type ?? `page` },
                defaultMessage: `{documentType, select, granola_presentation {Slide} granola_workbook {Sheet} other {Page}}`,
                description: `Resource type for a cited Page. documentType selects slide, sheet, or page for the current document.`,
              }),
          title: C ? z : r,
          titleTooltip: z,
          trailing: (0, W.jsx)(oe, {
            label: (0, W.jsx)(n, {
              id: `codex.space.endResource.openButton`,
              defaultMessage: `Open`,
              description: `Action on a Page or Space citation card`,
            }),
          }),
        });
      }),
      (i[32] = C),
      (i[33] = j?.document_type),
      (i[34] = _.id),
      (i[35] = x?.spaceId),
      (i[36] = z),
      (i[37] = Z))
    : (Z = i[37]);
  let Q;
  i[38] !== X || i[39] !== Z || i[40] !== q || i[41] !== J || i[42] !== Y || i[43] !== z
    ? ((Q = (0, W.jsx)(D, {
        pageId: q,
        documentType: J,
        namespace: Y,
        symbol: X,
        title: z,
        iconSize: 20,
        children: Z,
      })),
      (i[38] = X),
      (i[39] = Z),
      (i[40] = q),
      (i[41] = J),
      (i[42] = Y),
      (i[43] = z),
      (i[44] = Q))
    : (Q = i[44]);
  let $;
  return (
    i[45] !== Q || i[46] !== K
      ? (($ = (0, W.jsxs)(`div`, {
          className: `group/resource-card relative select-none`,
          children: [K, Q],
        })),
        (i[45] = Q),
        (i[46] = K),
        (i[47] = $))
      : ($ = i[47]),
    $
  );
}
var H, U, W;
function G() {
  return (G = e(() => {
    ((H = m()),
      i(),
      s(),
      l(),
      (U = _()),
      u(),
      o(),
      L(),
      d(),
      x(),
      C(),
      R(),
      z(),
      N(),
      y(),
      j(),
      M(),
      B(),
      w(),
      (W = g()));
  }))();
}
export { G as n, V as t };
//# sourceMappingURL=end-resource-row-664ac85d071f.js.map
