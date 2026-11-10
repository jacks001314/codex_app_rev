import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  Cot as ee,
  Dz as i,
  Ext as te,
  IDt as a,
  Ixt as ne,
  Jq as o,
  NV as s,
  Pxt as c,
  Sq as l,
  TJ as u,
  TO as d,
  VDt as re,
  Vxt as f,
  Yq as ie,
  _xt as p,
  cD as m,
  hot as ae,
  jDt as h,
  kz as g,
  lD as _,
  lot as v,
  qG as y,
  t3 as b,
  vzt as x,
  wot as S,
  wxt as oe,
  xMt as C,
  xq as w,
  zxt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  $2 as E,
  CB as D,
  Dor as O,
  Ear as k,
  I2 as se,
  Nsn as A,
  P2 as j,
  Q2 as ce,
  SB as M,
  Sot as le,
  Tar as N,
  eor as P,
  gln as F,
  lIr as I,
  mln as L,
  n4 as R,
  sIr as z,
  tor as B,
  xot as V,
  xsn as H,
} from "./app-initial-5851df3f6cb1.js";
function U(e) {
  let n = (0, W.c)(32),
    { open: c, onOpenChange: u, space: p } = e,
    m = ne(ee),
    h = re(),
    g = te(),
    v = oe(),
    b = f(N),
    x = f(B),
    S = f(F),
    C = T(R, p?.root_page_id),
    E = p != null,
    D;
  n[0] === E ? (D = n[1]) : ((D = { enabled: E }), (n[0] = E), (n[1] = D));
  let { data: k, isError: j } = T(A, p?.root_page_id ?? ``, D),
    P =
      C == null &&
      (p == null || (!j && k?.metadata.access.can_write === !0 && p.interaction_mode !== `request_changes`)),
    I;
  n[2] === b ? (I = n[3]) : ((I = b.includes(`granola_whiteboard`)), (n[2] = b), (n[3] = I));
  let L = I,
    V;
  n[4] === b ? (V = n[5]) : ((V = b.includes(`granola_workbook`)), (n[4] = b), (n[5] = V));
  let H = V,
    U;
  n[6] === b ? (U = n[7]) : ((U = b.includes(`granola_presentation`)), (n[6] = b), (n[7] = U));
  let K = U,
    q;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, G.jsx)(a, {
        id: `space.create.comingSoon`,
        defaultMessage: `Coming soon`,
        description: `Label for native Space content types that cannot be created yet`,
      })),
      (n[8] = q))
    : (q = n[8]);
  let J = q,
    Y;
  n[9] !== h || n[10] !== v || n[11] !== g || n[12] !== m || n[13] !== p
    ? ((Y = () => {
        if (!ce(m, p?.root_page_id)) return;
        let e = m.get(O),
          t = se(m, { parentPageId: p?.root_page_id });
        (g(`/space/${t.pageId}`, {
          state: {
            ...le(v, e, t.pageId),
            focusPageTitle: !0,
            spaceSidebarAccountId: p != null || v.pathname === `/space/personal` ? e : void 0,
            spaceSidebarRootPageId: p?.root_page_id,
            spaceSidebarPersonal: (p == null && v.pathname === `/space/personal`) || void 0,
          },
        }),
          t.completion.catch(() => {
            m.get(O) === e &&
              m.get(z).pathname === `/space/${t.pageId}` &&
              m
                .get(ae)
                .danger(
                  h.formatMessage({
                    id: `codex.space.page.createError`,
                    defaultMessage: `Could not create page`,
                    description: `Toast displayed when creating a shared Page fails`,
                  }),
                  { errorAnalytics: { toastId: `codex.space.page.createError` } },
                );
          }));
      }),
      (n[9] = h),
      (n[10] = v),
      (n[11] = g),
      (n[12] = m),
      (n[13] = p),
      (n[14] = Y))
    : (Y = n[14]);
  let X = Y,
    Z;
  n[15] !== P ||
  n[16] !== L ||
  n[17] !== H ||
  n[18] !== K ||
  n[19] !== X ||
  n[20] !== S ||
  n[21] !== u ||
  n[22] !== c ||
  n[23] !== m ||
  n[24] !== p
    ? ((Z = (e) =>
        (0, G.jsxs)(r, {
          open: c,
          onOpenChange: u,
          align: `end`,
          contentWidth: `menu`,
          triggerButton: e,
          children: [
            (0, G.jsx)(d.Item, {
              disabled: S || !P,
              leftIcon: (0, G.jsx)(i, { icon: { 16: o, 20: ie } }),
              onSelect: X,
              children: (0, G.jsx)(a, {
                id: `space.list.newPage`,
                defaultMessage: `Page`,
                description: `Create a Page from the Space home menu`,
              }),
            }),
            p == null &&
              L &&
              (0, G.jsx)(d.Item, {
                disabled: !P || S,
                leftIcon: (0, G.jsx)(i, { icon: { 16: w, 20: l } }),
                onSelect: () => void M(m, `granola_whiteboard`),
                children: (0, G.jsx)(a, {
                  id: `space.create.canvas`,
                  defaultMessage: `Canvas`,
                  description: `Native Canvas content type in the Space creation menu`,
                }),
              }),
            (0, G.jsx)(d.Item, {
              disabled: !P || !H || S,
              leftIcon: (0, G.jsx)(i, { icon: _.spreadsheet }),
              rightText: H ? void 0 : J,
              onSelect: () => void M(m, `granola_workbook`, p?.root_page_id),
              children: (0, G.jsx)(a, {
                id: `space.create.sheets`,
                defaultMessage: `Sheet`,
                description: `Native Sheets content type in the Space creation menu`,
              }),
            }),
            (0, G.jsx)(d.Item, {
              disabled: !P || !K || S,
              leftIcon: (0, G.jsx)(i, { icon: _.presentation }),
              rightText: K ? void 0 : J,
              onSelect: () => void M(m, `granola_presentation`, p?.root_page_id),
              children: (0, G.jsx)(a, {
                id: `space.create.slides`,
                defaultMessage: `Slides`,
                description: `Native presentation content type in the Space creation menu`,
              }),
            }),
          ],
        })),
      (n[15] = P),
      (n[16] = L),
      (n[17] = H),
      (n[18] = K),
      (n[19] = X),
      (n[20] = S),
      (n[21] = u),
      (n[22] = c),
      (n[23] = m),
      (n[24] = p),
      (n[25] = Z))
    : (Z = n[25]);
  let Q = Z,
    $;
  return (
    n[26] !== P || n[27] !== S || n[28] !== Q || n[29] !== x || n[30] !== p
      ? (($ = Q(
          p == null
            ? (0, G.jsxs)(t, {
                disabled: S || !P,
                color: `primary`,
                size: `toolbar`,
                radius: x ? `full` : `default`,
                children: [
                  (0, G.jsx)(y, {}),
                  (0, G.jsx)(a, {
                    id: `space.list.new`,
                    defaultMessage: `Create`,
                    description: `Open creation choices on the Space home page`,
                  }),
                ],
              })
            : (0, G.jsxs)(t, {
                color: `primary`,
                size: `pageAction`,
                radius: `full`,
                disabled: S || !P,
                children: [
                  (0, G.jsx)(a, {
                    id: `space.home.create.new`,
                    defaultMessage: `New`,
                    description: `Button that opens the menu to create a page, spreadsheet, or presentation in the current Space`,
                  }),
                  (0, G.jsx)(s, {}),
                ],
              }),
        )),
        (n[26] = P),
        (n[27] = S),
        (n[28] = Q),
        (n[29] = x),
        (n[30] = p),
        (n[31] = $))
      : ($ = n[31]),
    $
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = x()),
      c(),
      h(),
      p(),
      I(),
      b(),
      n(),
      u(),
      g(),
      v(),
      m(),
      S(),
      P(),
      j(),
      E(),
      L(),
      k(),
      D(),
      H(),
      V(),
      (G = C()));
  }))();
}
export { K as n, U as t };
//# sourceMappingURL=create-menu-e62036edae78.js.map
