import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  ID as r,
  JJ as ee,
  LD as i,
  LNt as a,
  NSt as o,
  PBt as s,
  Qst as te,
  SB as c,
  SJ as l,
  TY as u,
  USt as d,
  VSt as f,
  Vrt as p,
  WK as ne,
  XOt as m,
  Y3 as h,
  YJ as g,
  Z3 as _,
  ZSt as v,
  ck as y,
  iCt as b,
  kH as re,
  nCt as x,
  okt as S,
  qrt as C,
  rk as w,
  tk as ie,
  tkt as T,
  wB as E,
  xJ as D,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Air as O,
  Ddn as k,
  Hlr as A,
  Mir as j,
  Nst as M,
  Pst as ae,
  S3 as N,
  T3 as oe,
  Ulr as se,
  a3 as ce,
  dpn as le,
  gur as P,
  hdn as F,
  lpn as I,
  mV as L,
  mlr as R,
  pV as z,
  plr as B,
  r3 as V,
  x3 as H,
} from "./app-initial-ad16eaadf81f.js";
function U(e) {
  let n = (0, W.c)(32),
    { open: r, onOpenChange: a, space: o } = e,
    s = t(te),
    u = S(),
    p = d(),
    m = f(),
    _ = b(B),
    v = b(se),
    y = b(le),
    E = x(oe, o?.root_page_id),
    A = o != null,
    j;
  n[0] === A ? (j = n[1]) : ((j = { enabled: A }), (n[0] = A), (n[1] = j));
  let { data: M, isError: N } = x(k, o?.root_page_id ?? ``, j),
    F =
      E == null &&
      (o == null || (!N && M?.metadata.access.can_write === !0 && o.interaction_mode !== `request_changes`)),
    I;
  n[2] === _ ? (I = n[3]) : ((I = _.includes(`granola_whiteboard`)), (n[2] = _), (n[3] = I));
  let L = I,
    R;
  n[4] === _ ? (R = n[5]) : ((R = _.includes(`granola_workbook`)), (n[4] = _), (n[5] = R));
  let V = R,
    U;
  n[6] === _ ? (U = n[7]) : ((U = _.includes(`granola_presentation`)), (n[6] = _), (n[7] = U));
  let K = U,
    q;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, G.jsx)(T, {
        id: `space.create.comingSoon`,
        defaultMessage: `Coming soon`,
        description: `Label for native Space content types that cannot be created yet`,
      })),
      (n[8] = q))
    : (q = n[8]);
  let J = q,
    Y;
  n[9] !== u || n[10] !== m || n[11] !== p || n[12] !== s || n[13] !== o
    ? ((Y = () => {
        if (!H(s, o?.root_page_id)) return;
        let e = s.get(P),
          t = ce(s, { parentPageId: o?.root_page_id });
        (p(`/space/${t.pageId}`, {
          state: {
            ...ae(m, e, t.pageId),
            focusPageTitle: !0,
            spaceSidebarAccountId: o != null || m.pathname === `/space/personal` ? e : void 0,
            spaceSidebarRootPageId: o?.root_page_id,
            spaceSidebarPersonal: (o == null && m.pathname === `/space/personal`) || void 0,
          },
        }),
          t.completion.catch(() => {
            s.get(P) === e &&
              s.get(O).pathname === `/space/${t.pageId}` &&
              s
                .get(C)
                .danger(
                  u.formatMessage({
                    id: `codex.space.page.createError`,
                    defaultMessage: `Could not create page`,
                    description: `Toast displayed when creating a shared Page fails`,
                  }),
                  { errorAnalytics: { toastId: `codex.space.page.createError` } },
                );
          }));
      }),
      (n[9] = u),
      (n[10] = m),
      (n[11] = p),
      (n[12] = s),
      (n[13] = o),
      (n[14] = Y))
    : (Y = n[14]);
  let X = Y,
    Z;
  n[15] !== F ||
  n[16] !== L ||
  n[17] !== V ||
  n[18] !== K ||
  n[19] !== X ||
  n[20] !== y ||
  n[21] !== a ||
  n[22] !== r ||
  n[23] !== s ||
  n[24] !== o
    ? ((Z = (e) =>
        (0, G.jsxs)(ie, {
          open: r,
          onOpenChange: a,
          align: `end`,
          contentWidth: `menu`,
          triggerButton: e,
          children: [
            (0, G.jsx)(w.Item, {
              disabled: y || !F,
              leftIcon: (0, G.jsx)(c, { icon: { 16: ee, 20: g } }),
              onSelect: X,
              children: (0, G.jsx)(T, {
                id: `space.list.newPage`,
                defaultMessage: `Page`,
                description: `Create a Page from the Space home menu`,
              }),
            }),
            o == null &&
              L &&
              (0, G.jsx)(w.Item, {
                disabled: !F || y,
                leftIcon: (0, G.jsx)(c, { icon: { 16: D, 20: l } }),
                onSelect: () => void z(s, `granola_whiteboard`),
                children: (0, G.jsx)(T, {
                  id: `space.create.canvas`,
                  defaultMessage: `Canvas`,
                  description: `Native Canvas content type in the Space creation menu`,
                }),
              }),
            (0, G.jsx)(w.Item, {
              disabled: !F || !V || y,
              leftIcon: (0, G.jsx)(c, { icon: i.spreadsheet }),
              rightText: V ? void 0 : J,
              onSelect: () => void z(s, `granola_workbook`, o?.root_page_id),
              children: (0, G.jsx)(T, {
                id: `space.create.sheets`,
                defaultMessage: `Sheet`,
                description: `Native Sheets content type in the Space creation menu`,
              }),
            }),
            (0, G.jsx)(w.Item, {
              disabled: !F || !K || y,
              leftIcon: (0, G.jsx)(c, { icon: i.presentation }),
              rightText: K ? void 0 : J,
              onSelect: () => void z(s, `granola_presentation`, o?.root_page_id),
              children: (0, G.jsx)(T, {
                id: `space.create.slides`,
                defaultMessage: `Slides`,
                description: `Native presentation content type in the Space creation menu`,
              }),
            }),
          ],
        })),
      (n[15] = F),
      (n[16] = L),
      (n[17] = V),
      (n[18] = K),
      (n[19] = X),
      (n[20] = y),
      (n[21] = a),
      (n[22] = r),
      (n[23] = s),
      (n[24] = o),
      (n[25] = Z))
    : (Z = n[25]);
  let Q = Z,
    $;
  return (
    n[26] !== F || n[27] !== y || n[28] !== Q || n[29] !== v || n[30] !== o
      ? (($ = Q(
          o == null
            ? (0, G.jsxs)(h, {
                disabled: y || !F,
                color: `primary`,
                size: `toolbar`,
                radius: v ? `full` : `default`,
                children: [
                  (0, G.jsx)(ne, {}),
                  (0, G.jsx)(T, {
                    id: `space.list.new`,
                    defaultMessage: `Create`,
                    description: `Open creation choices on the Space home page`,
                  }),
                ],
              })
            : (0, G.jsxs)(h, {
                color: `primary`,
                size: `pageAction`,
                radius: `full`,
                disabled: y || !F,
                children: [
                  (0, G.jsx)(T, {
                    id: `space.home.create.new`,
                    defaultMessage: `New`,
                    description: `Button that opens the menu to create a page, spreadsheet, or presentation in the current Space`,
                  }),
                  (0, G.jsx)(re, {}),
                ],
              }),
        )),
        (n[26] = F),
        (n[27] = y),
        (n[28] = Q),
        (n[29] = v),
        (n[30] = o),
        (n[31] = $))
      : ($ = n[31]),
    $
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = s()),
      v(),
      m(),
      o(),
      j(),
      _(),
      y(),
      u(),
      E(),
      p(),
      r(),
      n(),
      A(),
      V(),
      N(),
      I(),
      R(),
      L(),
      F(),
      M(),
      (G = a()));
  }))();
}
export { K as n, U as t };
//# sourceMappingURL=create-menu-d89f2ede6f86.js.map
