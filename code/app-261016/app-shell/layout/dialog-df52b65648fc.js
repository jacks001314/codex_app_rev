import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CI as r,
  LNt as i,
  PBt as a,
  Qit as o,
  Qst as s,
  XOt as c,
  ZSt as l,
  gI as u,
  iCt as d,
  mI as f,
  nCt as p,
  nat as m,
  okt as h,
  wI as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cmn as _,
  Efn as v,
  Smn as y,
  Tfn as b,
  _o as x,
  bmn as S,
  fo as C,
  go as w,
  hlr as T,
  mlr as E,
  mo as D,
  xMr as O,
  xmn as k,
  yMr as A,
} from "./app-initial-ad16eaadf81f.js";
import { i as j, n as M, t as N } from "./template-gallery-modal-4f828146e385.js";
import { c as P, i as F, l as I, o as L, s as R, t as z } from "./personalized-pages-9830ca1f3831.js";
import { n as B, t as V } from "./messages-f0392bc949ac.js";
import { i as H, n as U, r as W, t as G } from "./space-template-catalog-a49215b2a818.js";
import { n as K, r as q } from "./cards-27167f3cb0d7.js";
function J(e) {
  let n = (0, X.c)(10),
    { onClose: r, selectedGroupId: i, onGalleryGroupSelect: a } = e,
    o = t(s),
    c;
  n[0] === o
    ? (c = n[1])
    : ((c = (e) => {
        O(o, S, {
          action: k.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
          category: f(e.type) ?? void 0,
          selectionSurface: y.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
        });
      }),
      (n[0] = o),
      (n[1] = c));
  let l;
  n[2] !== r || n[3] !== a || n[4] !== i
    ? ((l = (e) => (0, Z.jsx)(Y, { catalog: e, onClose: r, selectedGroupId: i, onGalleryGroupSelect: a })),
      (n[2] = r),
      (n[3] = a),
      (n[4] = i),
      (n[5] = l))
    : (l = n[5]);
  let u;
  return (
    n[6] !== r || n[7] !== c || n[8] !== l
      ? ((u = (0, Z.jsx)(G, { onOpenDraft: r, onTemplateSelected: c, children: l })),
        (n[6] = r),
        (n[7] = c),
        (n[8] = l),
        (n[9] = u))
      : (u = n[9]),
    u
  );
}
function Y(e) {
  let n = (0, X.c)(41),
    { catalog: r, onClose: i, selectedGroupId: a, onGalleryGroupSelect: c } = e,
    l = t(s),
    u = h(),
    m = d(v),
    _ = p(T, `granola_presentation`),
    b = d(I),
    x = p(F, `template-modal`),
    E;
  n[0] !== u || n[1] !== b?.value || n[2] !== m || n[3] !== x?.length
    ? ((E = (m && L(u, b?.value).length > 0) || (x?.length ?? 0) > 0),
      (n[0] = u),
      (n[1] = b?.value),
      (n[2] = m),
      (n[3] = x?.length),
      (n[4] = E))
    : (E = n[4]);
  let D = E,
    A;
  n[5] !== D || n[6] !== u
    ? ((A = D
        ? [
            {
              id: `page`,
              label: u.formatMessage(C.page),
              templateTypes: [],
              templates: { status: `ready`, data: [] },
            },
          ]
        : []),
      (n[5] = D),
      (n[6] = u),
      (n[7] = A))
    : (A = n[7]);
  let M;
  n[8] !== u || n[9] !== _
    ? ((M = _
        ? [
            {
              id: `slides`,
              label: u.formatMessage(B.heading),
              templateTypes: [],
              templates: { status: `ready`, data: [] },
            },
          ]
        : []),
      (n[8] = u),
      (n[9] = _),
      (n[10] = M))
    : (M = n[10]);
  let P;
  if (n[11] !== r.groups || n[12] !== _ || n[13] !== A || n[14] !== M) {
    let e;
    (n[16] === _
      ? (e = n[17])
      : ((e = (e) =>
          !_ || (!e.templateTypes.includes(`presentation`) && !e.templateTypes.includes(`document`))),
        (n[16] = _),
        (n[17] = e)),
      (P = [...A, ...M, ...r.groups.filter(e)]),
      (n[11] = r.groups),
      (n[12] = _),
      (n[13] = A),
      (n[14] = M),
      (n[15] = P));
  } else P = n[15];
  let R;
  n[18] !== r || n[19] !== l
    ? ((R = (e) => ({
        onRetryLoadTemplates: r.onRetry,
        onCreateTemplate:
          e?.id !== `page` && e?.id !== `slides` && r.onCreateTemplate
            ? (e) => {
                let t = g(e?.id ?? ``);
                (O(l, S, {
                  action: k.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CREATE_TEMPLATE_SELECTED,
                  category: (t ? f(t) : `all`) ?? void 0,
                }),
                  r.onCreateTemplate?.(t ? f(t) : null));
              }
            : void 0,
      })),
      (n[18] = r),
      (n[19] = l),
      (n[20] = R))
    : (R = n[20]);
  let z;
  n[21] !== i || n[22] !== c || n[23] !== P || n[24] !== R
    ? ((z = { onGalleryGroupSelect: c, groups: P, onClose: i, callbacks: R }),
      (n[21] = i),
      (n[22] = c),
      (n[23] = P),
      (n[24] = R),
      (n[25] = z))
    : (z = n[25]);
  let V;
  n[26] !== a || n[27] !== z
    ? ((V = { selectedGroupId: a, config: z }), (n[26] = a), (n[27] = z), (n[28] = V))
    : (V = n[28]);
  let H = j(V),
    U;
  n[29] !== H || n[30] !== i || n[31] !== l
    ? ((U = (e) => {
        if (e.id === `page`)
          return (0, Z.jsx)(W, {
            onOpen: i,
            inTemplateGallery: !0,
            onSelect: (e, t) => {
              O(l, S, {
                action: k.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                category: `page`,
                templateId: e,
                templatePosition: t == null ? void 0 : o(t),
                selectionSurface: y.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
              });
            },
            inset: !1,
            expanded: H.model.selectedGroupId === `page`,
          });
        if (e.id === `slides`)
          return (0, Z.jsx)(K, { onOpen: i, expanded: H.model.selectedGroupId === `slides` });
      }),
      (n[29] = H),
      (n[30] = i),
      (n[31] = l),
      (n[32] = U))
    : (U = n[32]);
  let G;
  n[33] !== r || n[34] !== H
    ? ((G = (e) =>
        (0, Z.jsx)(w, {
          template: e,
          menuModal: !0,
          disabled: r.disabled,
          interaction: {
            kind: `use`,
            onUse: r.onUseTemplate,
            menu: { ...r.templateActions(e), onView: () => H.actions.viewTemplate(e) },
          },
        })),
      (n[33] = r),
      (n[34] = H),
      (n[35] = G))
    : (G = n[35]);
  let q;
  return (
    n[36] !== r.detail || n[37] !== H || n[38] !== U || n[39] !== G
      ? ((q = (0, Z.jsx)(N, { open: !0, ...H, renderGroup: U, card: G, detail: r.detail })),
        (n[36] = r.detail),
        (n[37] = H),
        (n[38] = U),
        (n[39] = G),
        (n[40] = q))
      : (q = n[40]),
    q
  );
}
var X, Z;
function Q() {
  return (Q = e(() => {
    ((X = a()),
      _(),
      m(),
      u(),
      r(),
      x(),
      M(),
      l(),
      c(),
      D(),
      E(),
      b(),
      H(),
      P(),
      R(),
      z(),
      q(),
      V(),
      A(),
      n(),
      U(),
      (Z = i()));
  }))();
}
Q();
export { J as TemplateGalleryDialog };
//# sourceMappingURL=dialog-df52b65648fc.js.map
