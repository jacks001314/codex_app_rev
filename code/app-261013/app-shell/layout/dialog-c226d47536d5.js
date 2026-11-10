import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Brt as t,
  Cot as n,
  DF as r,
  FF as i,
  Irt as a,
  Ixt as o,
  PF as s,
  Pxt as c,
  TF as l,
  VDt as u,
  Vxt as d,
  jDt as f,
  vzt as p,
  wot as m,
  xMt as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dar as _,
  Dun as v,
  Ear as y,
  Eun as b,
  Mcn as x,
  QDr as S,
  Tun as C,
  XDr as w,
  fo as T,
  ho as E,
  jcn as D,
  mo as O,
  uo as k,
  wun as A,
} from "./app-initial-5851df3f6cb1.js";
import { i as j, n as M, t as N } from "./template-gallery-modal-336945a0604c.js";
import { c as P, i as F, l as I, o as L, s as R, t as z } from "./personalized-pages-f207fdb0390c.js";
import { n as B, t as V } from "./messages-3107a346dc40.js";
import { i as H, n as U, r as W, t as G } from "./space-template-catalog-3f8a73645ced.js";
import { n as K, r as q } from "./cards-387dce3178f4.js";
function J(e) {
  let t = (0, X.c)(10),
    { onClose: r, selectedGroupId: i, onGalleryGroupSelect: a } = e,
    s = o(n),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = (e) => {
        S(s, A, {
          action: C.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
          category: l(e.type) ?? void 0,
          selectionSurface: b.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
        });
      }),
      (t[0] = s),
      (t[1] = c));
  let u;
  t[2] !== r || t[3] !== a || t[4] !== i
    ? ((u = (e) => (0, Z.jsx)(Y, { catalog: e, onClose: r, selectedGroupId: i, onGalleryGroupSelect: a })),
      (t[2] = r),
      (t[3] = a),
      (t[4] = i),
      (t[5] = u))
    : (u = t[5]);
  let d;
  return (
    t[6] !== r || t[7] !== c || t[8] !== u
      ? ((d = (0, Z.jsx)(G, { onOpenDraft: r, onTemplateSelected: c, children: u })),
        (t[6] = r),
        (t[7] = c),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function Y(e) {
  let t = (0, X.c)(41),
    { catalog: r, onClose: s, selectedGroupId: c, onGalleryGroupSelect: f } = e,
    p = o(n),
    m = u(),
    h = d(x),
    v = g(_, `granola_presentation`),
    y = d(I),
    w = g(F, `template-modal`),
    T;
  t[0] !== m || t[1] !== y?.value || t[2] !== h || t[3] !== w?.length
    ? ((T = (h && L(m, y?.value).length > 0) || (w?.length ?? 0) > 0),
      (t[0] = m),
      (t[1] = y?.value),
      (t[2] = h),
      (t[3] = w?.length),
      (t[4] = T))
    : (T = t[4]);
  let E = T,
    D;
  t[5] !== E || t[6] !== m
    ? ((D = E
        ? [
            {
              id: `page`,
              label: m.formatMessage(k.page),
              templateTypes: [],
              templates: { status: `ready`, data: [] },
            },
          ]
        : []),
      (t[5] = E),
      (t[6] = m),
      (t[7] = D))
    : (D = t[7]);
  let M;
  t[8] !== m || t[9] !== v
    ? ((M = v
        ? [
            {
              id: `slides`,
              label: m.formatMessage(B.heading),
              templateTypes: [],
              templates: { status: `ready`, data: [] },
            },
          ]
        : []),
      (t[8] = m),
      (t[9] = v),
      (t[10] = M))
    : (M = t[10]);
  let P;
  if (t[11] !== r.groups || t[12] !== v || t[13] !== D || t[14] !== M) {
    let e;
    (t[16] === v
      ? (e = t[17])
      : ((e = (e) =>
          !v || (!e.templateTypes.includes(`presentation`) && !e.templateTypes.includes(`document`))),
        (t[16] = v),
        (t[17] = e)),
      (P = [...D, ...M, ...r.groups.filter(e)]),
      (t[11] = r.groups),
      (t[12] = v),
      (t[13] = D),
      (t[14] = M),
      (t[15] = P));
  } else P = t[15];
  let R;
  t[18] !== r || t[19] !== p
    ? ((R = (e) => ({
        onRetryLoadTemplates: r.onRetry,
        onCreateTemplate:
          e?.id !== `page` && e?.id !== `slides` && r.onCreateTemplate
            ? (e) => {
                let t = i(e?.id ?? ``);
                (S(p, A, {
                  action: C.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CREATE_TEMPLATE_SELECTED,
                  category: (t ? l(t) : `all`) ?? void 0,
                }),
                  r.onCreateTemplate?.(t ? l(t) : null));
              }
            : void 0,
      })),
      (t[18] = r),
      (t[19] = p),
      (t[20] = R))
    : (R = t[20]);
  let z;
  t[21] !== s || t[22] !== f || t[23] !== P || t[24] !== R
    ? ((z = { onGalleryGroupSelect: f, groups: P, onClose: s, callbacks: R }),
      (t[21] = s),
      (t[22] = f),
      (t[23] = P),
      (t[24] = R),
      (t[25] = z))
    : (z = t[25]);
  let V;
  t[26] !== c || t[27] !== z
    ? ((V = { selectedGroupId: c, config: z }), (t[26] = c), (t[27] = z), (t[28] = V))
    : (V = t[28]);
  let H = j(V),
    U;
  t[29] !== H || t[30] !== s || t[31] !== p
    ? ((U = (e) => {
        if (e.id === `page`)
          return (0, Z.jsx)(W, {
            onOpen: s,
            inTemplateGallery: !0,
            onSelect: (e, t) => {
              S(p, A, {
                action: C.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                category: `page`,
                templateId: e,
                templatePosition: t == null ? void 0 : a(t),
                selectionSurface: b.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
              });
            },
            inset: !1,
            expanded: H.model.selectedGroupId === `page`,
          });
        if (e.id === `slides`)
          return (0, Z.jsx)(K, { onOpen: s, expanded: H.model.selectedGroupId === `slides` });
      }),
      (t[29] = H),
      (t[30] = s),
      (t[31] = p),
      (t[32] = U))
    : (U = t[32]);
  let G;
  t[33] !== r || t[34] !== H
    ? ((G = (e) =>
        (0, Z.jsx)(O, {
          template: e,
          menuModal: !0,
          disabled: r.disabled,
          interaction: {
            kind: `use`,
            onUse: r.onUseTemplate,
            menu: { ...r.templateActions(e), onView: () => H.actions.viewTemplate(e) },
          },
        })),
      (t[33] = r),
      (t[34] = H),
      (t[35] = G))
    : (G = t[35]);
  let q;
  return (
    t[36] !== r.detail || t[37] !== H || t[38] !== U || t[39] !== G
      ? ((q = (0, Z.jsx)(N, { open: !0, ...H, renderGroup: U, card: G, detail: r.detail })),
        (t[36] = r.detail),
        (t[37] = H),
        (t[38] = U),
        (t[39] = G),
        (t[40] = q))
      : (q = t[40]),
    q
  );
}
var X, Z;
function Q() {
  return (Q = e(() => {
    ((X = p()),
      v(),
      t(),
      r(),
      s(),
      E(),
      M(),
      c(),
      f(),
      T(),
      y(),
      D(),
      H(),
      P(),
      R(),
      z(),
      q(),
      V(),
      w(),
      m(),
      U(),
      (Z = h()));
  }))();
}
Q();
export { J as TemplateGalleryDialog };
//# sourceMappingURL=dialog-c226d47536d5.js.map
