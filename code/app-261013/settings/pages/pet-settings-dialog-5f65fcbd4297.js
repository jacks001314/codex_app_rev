const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./submit-chatgpt-completion-365e080589d9.js",
      "./app-initial-5851df3f6cb1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $c as n,
  ADt as r,
  AH as i,
  AO as a,
  CO as o,
  Cat as s,
  Cot as c,
  Ext as l,
  G as u,
  GV as d,
  Go as f,
  IDt as p,
  Iot as m,
  Ixt as ee,
  K as h,
  Ko as g,
  Lot as te,
  Mz as _,
  Nz as v,
  Pxt as y,
  QC as b,
  Rnt as x,
  TJ as S,
  TO as C,
  U as w,
  VDt as ne,
  Vxt as T,
  W as E,
  _Mt as D,
  _O as O,
  _xt as k,
  cO as A,
  el as j,
  fO as M,
  fPt as N,
  gMt as P,
  gO as F,
  hot as re,
  iO as I,
  iw as L,
  jDt as R,
  k6 as z,
  lO as ie,
  lot as B,
  mO as ae,
  oO as oe,
  pPt as V,
  rO as se,
  sO as ce,
  t3 as H,
  tw as le,
  uO as ue,
  vO as U,
  vzt as W,
  wot as de,
  xMt as G,
  xat as K,
  yzt as q,
} from "./app-shared-bbfeca5e5737.js";
import {
  $7 as J,
  DPn as fe,
  DPr as Y,
  EPn as pe,
  FAn as me,
  Fin as he,
  GGn as X,
  Hin as Z,
  IYt as ge,
  K7 as _e,
  LMn as ve,
  NDr as ye,
  OPr as be,
  R7 as xe,
  TPn as Se,
  Y7 as Ce,
  _F as we,
  dF as Te,
  dH as Ee,
  e9 as De,
  eDr as Oe,
  eF as ke,
  fF as Ae,
  fMr as je,
  hF as Me,
  i9 as Ne,
  iPr as Pe,
  jDr as Fe,
  jPr as Ie,
  mF as Le,
  nDr as Re,
  oDr as ze,
  pF as Be,
  pOr as Ve,
  sPr as He,
  t9 as Ue,
  tF as We,
  u9 as Ge,
  uH as Ke,
  xMr as qe,
  z7 as Je,
  zYt as Ye,
} from "./app-initial-5851df3f6cb1.js";
import { n as Xe, t as Ze } from "./settings-rows-3e4ff6fa8232.js";
import { n as Qe, t as $e } from "./settings-loading-row-bf72bf2df25d.js";
import { a as et, i as tt, n as nt, o as rt, r as it, s as at, t as ot } from "./pet-model-b77e0aeadfcf.js";
async function st(e) {
  if (e.type !== `image/png` && e.type !== `image/webp`) return `type`;
  if (e.size > 20971520) return `size`;
  let t = URL.createObjectURL(e);
  try {
    let e = new Image();
    ((e.src = t), await e.decode());
    let n = Ge(e.naturalWidth, e.naturalHeight);
    if (n == null) return `dimensions`;
    let r = document.createElement(`canvas`);
    ((r.width = e.naturalWidth), (r.height = e.naturalHeight));
    let i = r.getContext(`2d`, { willReadFrequently: !0 });
    if (i == null) return `unreadable`;
    i.drawImage(e, 0, 0);
    let a = i.getImageData(0, 0, r.width, r.height).data;
    for (let [e, t] of n.requiredFramesByRow.entries())
      for (let r = 0; r < t; r += 1) {
        let t = !1,
          i = !1;
        for (let o = 0; o < n.cellHeight && !(t && i); o += 1)
          for (let s = 0; s < n.cellWidth; s += 1) {
            let c = a[((e * n.cellHeight + o) * n.width + r * n.cellWidth + s) * 4 + 3];
            if (((t ||= c > 0), (i ||= c < 255), t && i)) break;
          }
        if (!t || !i) return `frames`;
      }
    return null;
  } catch {
    return `unreadable`;
  } finally {
    URL.revokeObjectURL(t);
  }
}
function ct() {
  return (ct = e(() => {
    Ue();
  }))();
}
function lt(e) {
  let n = (0, dt.c)(99),
    { accountId: r, pet: i, onClose: a, onReturnFocus: o } = e,
    s = ee(c),
    l = ne(),
    u = (0, ft.useId)(),
    d = (0, ft.useId)(),
    f = (0, ft.useId)(),
    m = (0, ft.useId)(),
    h = (0, ft.useId)(),
    [g, _] = (0, ft.useState)(null),
    v;
  n[0] !== r || n[1] !== l || n[2] !== i || n[3] !== s
    ? ((v = async (e) => {
        let { name: t, description: n, file: a } = e,
          o = s.query.snapshot(rt);
        if (i != null)
          return (
            await Pe.safePatch(`/pets/{pet_id}`, {
              additionalHeaders: { "ChatGPT-Account-ID": r },
              parameters: { path: { pet_id: i.id } },
              requestBody: { name: t, description: n || null },
            }),
            await o.invalidate(),
            !0
          );
        if (a == null) return !1;
        let c = await st(a);
        if (c != null) return (_(l.formatMessage(mt[c])), !1);
        let { pet: u } = await Je(r, { name: t, description: n, file: a });
        await o.invalidate();
        try {
          s.get(Ve) === r && (await at(s, r, u.id));
        } catch {
          s.get(re).danger(
            l.formatMessage({
              id: `settings.chatGpt.personalization.pet.upload.selectionFailed`,
              defaultMessage: `Your pet was uploaded, but couldn’t be selected. Select it from the picker to try again`,
              description: `Warning after a custom pet upload succeeds but saving the active pet fails in ChatGPT Personalization. The upload is preserved; do not upload again.`,
            }),
            { errorAnalytics: { toastId: `settings.chatGpt.personalization.pet.upload.selectionFailed` } },
          );
        }
        return !0;
      }),
      (n[0] = r),
      (n[1] = l),
      (n[2] = i),
      (n[3] = s),
      (n[4] = v))
    : (v = n[4]);
  let y;
  n[5] === a
    ? (y = n[6])
    : ((y = (e) => {
        e && a();
      }),
      (n[5] = a),
      (n[6] = y));
  let b;
  n[7] === l
    ? (b = n[8])
    : ((b = () =>
        _(
          l.formatMessage({
            id: `settings.chatGpt.personalization.pet.save.error`,
            defaultMessage: `Couldn’t save your pet. Please try again`,
            description: `Inline error in the upload or edit pet dialog in ChatGPT Personalization when the request fails. The dialog remains open for retry.`,
          }),
        )),
      (n[7] = l),
      (n[8] = b));
  let x;
  n[9] !== v || n[10] !== y || n[11] !== b
    ? ((x = { mutationFn: v, onSuccess: y, onError: b }), (n[9] = v), (n[10] = y), (n[11] = b), (n[12] = x))
    : (x = n[12]);
  let { mutate: S, isPending: C } = te(x),
    w;
  n[13] === i
    ? (w = n[14])
    : ((w = i == null ? {} : { "aria-describedby": void 0 }), (n[13] = i), (n[14] = w));
  let T;
  n[15] === o
    ? (T = n[16])
    : ((T =
        o == null
          ? void 0
          : (e) => {
              (e.preventDefault(), o());
            }),
      (n[15] = o),
      (n[16] = T));
  let E;
  n[17] !== w || n[18] !== T
    ? ((E = { ...w, onCloseAutoFocus: T }), (n[17] = w), (n[18] = T), (n[19] = E))
    : (E = n[19]);
  let D = !C,
    k;
  n[20] !== C || n[21] !== a
    ? ((k = (e) => {
        !e && !C && a();
      }),
      (n[20] = C),
      (n[21] = a),
      (n[22] = k))
    : (k = n[22]);
  let j;
  n[23] !== l || n[24] !== C || n[25] !== S || n[26] !== i
    ? ((j = (e) => {
        if ((e.preventDefault(), C)) return;
        _(null);
        let t = new FormData(e.currentTarget),
          n = t.get(`pet-name`),
          r = t.get(`pet-description`),
          a = t.get(`pet-spritesheet`);
        if (
          typeof n != `string` ||
          !n.trim() ||
          n.trim().length > 80 ||
          typeof r != `string` ||
          r.trim().length > 500
        ) {
          _(
            l.formatMessage({
              id: `settings.chatGpt.personalization.pet.fields.error`,
              defaultMessage: `Enter a name of up to 80 characters and a description of up to 500 characters`,
              description: `Inline validation error in ChatGPT's pet upload or edit dialog. A name is required; description is optional.`,
            }),
          );
          return;
        }
        if (i == null && (!(a instanceof File) || a.size === 0)) {
          _(
            l.formatMessage({
              id: `settings.chatGpt.personalization.pet.file.required`,
              defaultMessage: `Choose a sprite sheet to upload`,
              description: `Inline validation error when the Upload a pet form in ChatGPT Personalization is submitted without an image file.`,
            }),
          );
          return;
        }
        S({ name: n.trim(), description: r.trim(), file: a instanceof File ? a : null });
      }),
      (n[23] = l),
      (n[24] = C),
      (n[25] = S),
      (n[26] = i),
      (n[27] = j))
    : (j = n[27]);
  let M;
  n[28] === i
    ? (M = n[29])
    : ((M = (0, Q.jsx)(ie, {
        children: (0, Q.jsx)(A, {
          title: (0, Q.jsx)(O, {
            children:
              i == null
                ? (0, Q.jsx)(p, {
                    id: `settings.chatGpt.personalization.pet.upload.title`,
                    defaultMessage: `Upload a pet`,
                    description: `Title of the custom pet upload dialog in ChatGPT Personalization settings`,
                  })
                : (0, Q.jsx)(p, {
                    id: `settings.chatGpt.personalization.pet.edit.named.title`,
                    defaultMessage: `Edit {petName}`,
                    description: `Title of the pet name and description editor in ChatGPT Personalization settings; petName is the current user-provided name`,
                    values: { petName: i.name },
                  }),
          }),
        }),
      })),
      (n[28] = i),
      (n[29] = M));
  let N;
  n[30] === i
    ? (N = n[31])
    : ((N =
        i == null &&
        (0, Q.jsx)(F, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.upload.description`,
            defaultMessage: `Add an animated companion for Work mode`,
            description: `Introductory text in ChatGPT's pet upload dialog. The image becomes an animated Work mode companion.`,
          }),
        })),
      (n[30] = i),
      (n[31] = N));
  let P;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(p, {
        id: `settings.chatGpt.personalization.pet.name`,
        defaultMessage: `Pet name`,
        description: `Label for the required pet display name in ChatGPT's upload and edit dialogs`,
      })),
      (n[32] = P))
    : (P = n[32]);
  let I;
  n[33] === u
    ? (I = n[34])
    : ((I = (0, Q.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: u,
        children: P,
      })),
      (n[33] = u),
      (n[34] = I));
  let L = i?.name,
    R;
  n[35] === l
    ? (R = n[36])
    : ((R = l.formatMessage({
        id: `settings.chatGpt.personalization.pet.name.placeholder`,
        defaultMessage: `Name your pet`,
        description: `Placeholder for the required pet name in ChatGPT's upload and edit dialogs`,
      })),
      (n[35] = l),
      (n[36] = R));
  let z;
  n[37] !== C || n[38] !== u || n[39] !== L || n[40] !== R
    ? ((z = (0, Q.jsx)(Se, {
        id: u,
        autoComplete: `off`,
        autoFocus: !0,
        defaultValue: L,
        disabled: C,
        maxLength: 80,
        name: `pet-name`,
        placeholder: R,
        required: !0,
      })),
      (n[37] = C),
      (n[38] = u),
      (n[39] = L),
      (n[40] = R),
      (n[41] = z))
    : (z = n[41]);
  let B;
  n[42] !== I || n[43] !== z
    ? ((B = (0, Q.jsxs)(ue, { children: [I, z] })), (n[42] = I), (n[43] = z), (n[44] = B))
    : (B = n[44]);
  let V;
  n[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(p, {
        id: `settings.chatGpt.personalization.pet.description`,
        defaultMessage: `Pet description (optional)`,
        description: `Label for the optional description of a custom Work pet in ChatGPT Personalization`,
      })),
      (n[45] = V))
    : (V = n[45]);
  let se;
  n[46] === d
    ? (se = n[47])
    : ((se = (0, Q.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: d,
        children: V,
      })),
      (n[46] = d),
      (n[47] = se));
  let H = i?.description,
    le;
  n[48] === l
    ? (le = n[49])
    : ((le = l.formatMessage({
        id: `settings.chatGpt.personalization.pet.description.placeholder`,
        defaultMessage: `Describe your pet`,
        description: `Placeholder for the optional custom pet description in ChatGPT Personalization`,
      })),
      (n[48] = l),
      (n[49] = le));
  let U;
  n[50] !== f || n[51] !== d || n[52] !== C || n[53] !== H || n[54] !== le
    ? ((U = (0, Q.jsx)(pe, {
        id: d,
        "aria-describedby": f,
        autoComplete: `off`,
        defaultValue: H,
        disabled: C,
        maxLength: 500,
        name: `pet-description`,
        placeholder: le,
      })),
      (n[50] = f),
      (n[51] = d),
      (n[52] = C),
      (n[53] = H),
      (n[54] = le),
      (n[55] = U))
    : (U = n[55]);
  let W;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Q.jsx)(p, {
        id: `settings.chatGpt.personalization.pet.description.help`,
        defaultMessage: `Up to 500 characters`,
        description: `Help text stating the maximum length of a custom pet description in ChatGPT Personalization`,
      })),
      (n[56] = W))
    : (W = n[56]);
  let de;
  n[57] === f
    ? (de = n[58])
    : ((de = (0, Q.jsx)(`p`, { id: f, className: `text-xs text-tertiary`, children: W })),
      (n[57] = f),
      (n[58] = de));
  let G;
  n[59] !== se || n[60] !== U || n[61] !== de
    ? ((G = (0, Q.jsxs)(ue, { children: [se, U, de] })), (n[59] = se), (n[60] = U), (n[61] = de), (n[62] = G))
    : (G = n[62]);
  let K;
  n[63] !== h || n[64] !== m || n[65] !== C || n[66] !== i
    ? ((K =
        i == null &&
        (0, Q.jsxs)(ue, {
          children: [
            (0, Q.jsx)(`label`, {
              className: `text-sm font-medium text-default select-none`,
              htmlFor: m,
              children: (0, Q.jsx)(p, {
                id: `settings.chatGpt.personalization.pet.file`,
                defaultMessage: `Sprite sheet`,
                description: `Label for the image file input in ChatGPT's pet upload dialog. A sprite sheet contains a grid of animation frames.`,
              }),
            }),
            (0, Q.jsx)(`input`, {
              id: m,
              accept: `image/png,image/webp`,
              "aria-describedby": h,
              className: `w-full cursor-interaction rounded-lg border border-primary-outline p-2 text-sm text-default file:me-3 file:cursor-interaction file:rounded-md file:border-0 file:bg-surface-secondary file:px-3 file:py-1.5 file:text-default disabled:cursor-not-allowed disabled:opacity-40`,
              disabled: C,
              name: `pet-spritesheet`,
              required: !0,
              type: `file`,
            }),
            (0, Q.jsx)(`p`, {
              id: h,
              className: `text-xs text-tertiary`,
              children: (0, Q.jsx)(p, {
                id: `settings.chatGpt.personalization.pet.file.help`,
                defaultMessage: `Transparent PNG or WebP, 1536 × 1872 (v1) or 1536 × 2288 (v2) pixels, up to 20 MiB`,
                description: `Technical file requirements in ChatGPT's pet upload dialog. Keep image formats, dimensions, version numbers, and MiB recognizable.`,
              }),
            }),
          ],
        })),
      (n[63] = h),
      (n[64] = m),
      (n[65] = C),
      (n[66] = i),
      (n[67] = K))
    : (K = n[67]);
  let q;
  n[68] === g
    ? (q = n[69])
    : ((q = g != null && (0, Q.jsx)(`p`, { className: `text-sm text-danger`, role: `alert`, children: g })),
      (n[68] = g),
      (n[69] = q));
  let J;
  n[70] !== N || n[71] !== B || n[72] !== G || n[73] !== K || n[74] !== q
    ? ((J = (0, Q.jsxs)(ie, { className: `gap-4`, children: [N, B, G, K, q] })),
      (n[70] = N),
      (n[71] = B),
      (n[72] = G),
      (n[73] = K),
      (n[74] = q),
      (n[75] = J))
    : (J = n[75]);
  let fe;
  n[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Q.jsx)(p, { ...pt.cancel })), (n[76] = fe))
    : (fe = n[76]);
  let Y;
  n[77] !== C || n[78] !== a
    ? ((Y = (0, Q.jsx)(t, { color: `secondary`, disabled: C, onClick: a, type: `button`, children: fe })),
      (n[77] = C),
      (n[78] = a),
      (n[79] = Y))
    : (Y = n[79]);
  let me;
  n[80] === i
    ? (me = n[81])
    : ((me =
        i == null
          ? (0, Q.jsx)(p, {
              id: `settings.chatGpt.personalization.pet.upload.submit`,
              defaultMessage: `Upload`,
              description: `Primary button in ChatGPT's Upload a pet dialog. Uploads the validated image and selects the pet.`,
            })
          : (0, Q.jsx)(p, { ...pt.save })),
      (n[80] = i),
      (n[81] = me));
  let he;
  n[82] !== C || n[83] !== me
    ? ((he = (0, Q.jsx)(t, { color: `primary`, loading: C, type: `submit`, children: me })),
      (n[82] = C),
      (n[83] = me),
      (n[84] = he))
    : (he = n[84]);
  let X;
  n[85] !== Y || n[86] !== he
    ? ((X = (0, Q.jsx)(ie, { children: (0, Q.jsxs)(ce, { children: [Y, he] }) })),
      (n[85] = Y),
      (n[86] = he),
      (n[87] = X))
    : (X = n[87]);
  let Z;
  n[88] !== j || n[89] !== M || n[90] !== J || n[91] !== X
    ? ((Z = (0, Q.jsxs)(oe, { as: `form`, onSubmit: j, children: [M, J, X] })),
      (n[88] = j),
      (n[89] = M),
      (n[90] = J),
      (n[91] = X),
      (n[92] = Z))
    : (Z = n[92]);
  let ge;
  return (
    n[93] !== C || n[94] !== Z || n[95] !== E || n[96] !== D || n[97] !== k
      ? ((ge = (0, Q.jsx)(ae, {
          open: !0,
          contentProps: E,
          showDialogClose: D,
          shouldIgnoreClickOutside: C,
          size: `compact`,
          variant: `chatgpt`,
          onOpenChange: k,
          children: Z,
        })),
        (n[93] = C),
        (n[94] = Z),
        (n[95] = E),
        (n[96] = D),
        (n[97] = k),
        (n[98] = ge))
      : (ge = n[98]),
    ge
  );
}
function ut(e) {
  let n = (0, dt.c)(89),
    { accountId: r, action: i, pet: a, onClose: o } = e,
    s = ee(c),
    l = ne(),
    { data: u } = Z(),
    [d, f] = (0, ft.useState)(null),
    m;
  n[0] !== r || n[1] !== i || n[2] !== a || n[3] !== s
    ? ((m = async () => {
        let e = s.query.snapshot(rt),
          t = s.query.snapshot(Fe),
          n = { additionalHeaders: { "ChatGPT-Account-ID": r }, parameters: { path: { pet_id: a.id } } },
          o = null;
        return (
          i === `share`
            ? (o = (await Pe.safePost(`/pets/{pet_id}/share`, n)).share_url)
            : i === `unshare`
              ? await Pe.safeDelete(`/pets/{pet_id}/share`, n)
              : await Pe.safeDelete(`/pets/{pet_id}`, n),
          await Promise.all([e.invalidate(), t.invalidate()]),
          o
        );
      }),
      (n[0] = r),
      (n[1] = i),
      (n[2] = a),
      (n[3] = s),
      (n[4] = m))
    : (m = n[4]);
  let h;
  n[5] === o
    ? (h = n[6])
    : ((h = (e) => {
        e == null ? o() : f(e);
      }),
      (n[5] = o),
      (n[6] = h));
  let g;
  n[7] !== m || n[8] !== h
    ? ((g = { mutationFn: m, onSuccess: h }), (n[7] = m), (n[8] = h), (n[9] = g))
    : (g = n[9]);
  let { mutate: _, isPending: v, isError: y } = te(g),
    b = !v,
    x;
  n[10] !== v || n[11] !== o
    ? ((x = (e) => {
        !e && !v && o();
      }),
      (n[10] = v),
      (n[11] = o),
      (n[12] = x))
    : (x = n[12]);
  let S;
  n[13] !== v || n[14] !== _ || n[15] !== d
    ? ((S = (e) => {
        (e.preventDefault(), !v && d == null && _());
      }),
      (n[13] = v),
      (n[14] = _),
      (n[15] = d),
      (n[16] = S))
    : (S = n[16]);
  let C;
  n[17] !== i || n[18] !== a
    ? ((C =
        i === `delete` &&
        (0, Q.jsx)(p, {
          id: `settings.chatGpt.personalization.pet.delete.title`,
          defaultMessage: `Delete {petName}?`,
          description: `Confirmation title before permanently deleting a custom Work pet; petName is its user-provided name`,
          values: { petName: a.name },
        })),
      (n[17] = i),
      (n[18] = a),
      (n[19] = C))
    : (C = n[19]);
  let w;
  n[20] !== i || n[21] !== a
    ? ((w =
        i === `unshare` &&
        (0, Q.jsx)(p, {
          id: `settings.chatGpt.personalization.pet.unshare.title`,
          defaultMessage: `Stop sharing {petName}?`,
          description: `Confirmation title before invalidating a Work pet share link; petName is its name`,
          values: { petName: a.name },
        })),
      (n[20] = i),
      (n[21] = a),
      (n[22] = w))
    : (w = n[22]);
  let T;
  n[23] !== i || n[24] !== a || n[25] !== d
    ? ((T =
        i === `share` &&
        d == null &&
        (0, Q.jsx)(p, {
          id: `settings.chatGpt.personalization.pet.share.title`,
          defaultMessage: `Share {petName}?`,
          description: `Title of the custom Work pet sharing dialog; petName is its user-provided name`,
          values: { petName: a.name },
        })),
      (n[23] = i),
      (n[24] = a),
      (n[25] = d),
      (n[26] = T))
    : (T = n[26]);
  let E;
  n[27] !== i || n[28] !== a || n[29] !== d
    ? ((E =
        i === `share` &&
        d != null &&
        (0, Q.jsx)(p, {
          id: `settings.chatGpt.personalization.pet.share.success.title`,
          defaultMessage: `{petName} is shared`,
          description: `Success title after creating a link for a custom Work pet; petName is its user-provided name`,
          values: { petName: a.name },
        })),
      (n[27] = i),
      (n[28] = a),
      (n[29] = d),
      (n[30] = E))
    : (E = n[30]);
  let D;
  n[31] !== E || n[32] !== C || n[33] !== w || n[34] !== T
    ? ((D = (0, Q.jsx)(ie, {
        children: (0, Q.jsx)(A, { title: (0, Q.jsxs)(O, { children: [C, w, T, E] }) }),
      })),
      (n[31] = E),
      (n[32] = C),
      (n[33] = w),
      (n[34] = T),
      (n[35] = D))
    : (D = n[35]);
  let k;
  n[36] !== i || n[37] !== a
    ? ((k =
        i === `delete` &&
        (0, Q.jsx)(F, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.delete.description`,
            defaultMessage: `This permanently deletes {petName} and its uploaded sprite sheet`,
            description: `Warning in ChatGPT's pet deletion confirmation. petName is the pet being removed permanently.`,
            values: { petName: a.name },
          }),
        })),
      (n[36] = i),
      (n[37] = a),
      (n[38] = k))
    : (k = n[38]);
  let j;
  n[39] !== i || n[40] !== a
    ? ((j =
        i === `unshare` &&
        (0, Q.jsx)(F, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.unshare.description`,
            defaultMessage: `The current link to {petName} will stop working. People who already adopted this pet will keep their copies`,
            description: `Explains the consequences of unsharing a Work pet in ChatGPT. petName is its user-provided name.`,
            values: { petName: a.name },
          }),
        })),
      (n[39] = i),
      (n[40] = a),
      (n[41] = j))
    : (j = n[41]);
  let M;
  n[42] !== u?.structure || n[43] !== i || n[44] !== a || n[45] !== d
    ? ((M =
        i === `share` &&
        d == null &&
        u?.structure === `workspace` &&
        (0, Q.jsx)(F, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.share.workspace`,
            defaultMessage: `People in your workspace with the link can view and adopt {petName}, following the same rules as shared conversations. Your name and account information will not be shown`,
            description: `Privacy and access explanation before sharing a pet from a ChatGPT workspace. petName is its user-provided name.`,
            values: { petName: a.name },
          }),
        })),
      (n[42] = u?.structure),
      (n[43] = i),
      (n[44] = a),
      (n[45] = d),
      (n[46] = M))
    : (M = n[46]);
  let N;
  n[47] !== u?.structure || n[48] !== i || n[49] !== a || n[50] !== d
    ? ((N =
        i === `share` &&
        d == null &&
        u?.structure === `personal` &&
        (0, Q.jsx)(F, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.share.personal`,
            defaultMessage: `Anyone with the link can view and adopt {petName}. Your name and account information will not be shown`,
            description: `Privacy explanation before creating a public pet share link for a personal ChatGPT account. petName is its name.`,
            values: { petName: a.name },
          }),
        })),
      (n[47] = u?.structure),
      (n[48] = i),
      (n[49] = a),
      (n[50] = d),
      (n[51] = N))
    : (N = n[51]);
  let P;
  n[52] !== l || n[53] !== d
    ? ((P =
        d != null &&
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3`,
          children: [
            (0, Q.jsx)(F, {
              className: `text-sm text-secondary`,
              children: (0, Q.jsx)(p, {
                id: `settings.chatGpt.personalization.pet.share.success.description`,
                defaultMessage: `Share this link so others can meet and adopt your pet`,
                description: `Instruction above the link in the successful custom pet share dialog in ChatGPT Personalization`,
              }),
            }),
            (0, Q.jsx)(Se, {
              "aria-label": l.formatMessage({
                id: `settings.chatGpt.personalization.pet.share.link`,
                defaultMessage: `Pet share link`,
                description: `Accessible label for the read-only generated pet share URL in ChatGPT Personalization`,
              }),
              readOnly: !0,
              value: d,
            }),
          ],
        })),
      (n[52] = l),
      (n[53] = d),
      (n[54] = P))
    : (P = n[54]);
  let re;
  n[55] === y
    ? (re = n[56])
    : ((re =
        y &&
        (0, Q.jsx)(`p`, {
          className: `text-sm text-danger`,
          role: `alert`,
          children: (0, Q.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.action.error`,
            defaultMessage: `Something went wrong. Please try again`,
            description: `Inline error after a custom pet sharing or deletion request fails in ChatGPT Personalization; the confirmation stays open for retry`,
          }),
        })),
      (n[55] = y),
      (n[56] = re));
  let I;
  n[57] !== k || n[58] !== j || n[59] !== M || n[60] !== N || n[61] !== P || n[62] !== re
    ? ((I = (0, Q.jsxs)(ie, { className: `gap-3`, children: [k, j, M, N, P, re] })),
      (n[57] = k),
      (n[58] = j),
      (n[59] = M),
      (n[60] = N),
      (n[61] = P),
      (n[62] = re),
      (n[63] = I))
    : (I = n[63]);
  let L;
  n[64] === d
    ? (L = n[65])
    : ((L =
        d == null
          ? (0, Q.jsx)(p, { ...pt.cancel })
          : (0, Q.jsx)(p, {
              id: `settings.chatGpt.personalization.pet.share.done`,
              defaultMessage: `Done`,
              description: `Button closing the successful custom pet share dialog after its link has been created`,
            })),
      (n[64] = d),
      (n[65] = L));
  let R;
  n[66] !== v || n[67] !== o || n[68] !== L
    ? ((R = (0, Q.jsx)(t, { color: `secondary`, disabled: v, onClick: o, type: `button`, children: L })),
      (n[66] = v),
      (n[67] = o),
      (n[68] = L),
      (n[69] = R))
    : (R = n[69]);
  let z;
  n[70] !== u || n[71] !== i || n[72] !== v || n[73] !== s || n[74] !== d
    ? ((z =
        d == null
          ? (0, Q.jsxs)(t, {
              color: i === `share` ? `primary` : `dangerSolid`,
              disabled: i === `share` && u == null,
              loading: v,
              type: `submit`,
              children: [
                i === `delete` &&
                  (0, Q.jsx)(p, {
                    id: `settings.chatGpt.personalization.pet.delete.confirm`,
                    defaultMessage: `Delete`,
                    description: `Destructive button confirming permanent deletion of a custom Work pet`,
                  }),
                i === `unshare` &&
                  (0, Q.jsx)(p, {
                    id: `settings.chatGpt.personalization.pet.unshare.confirm`,
                    defaultMessage: `Stop sharing`,
                    description: `Button confirming invalidation of a custom Work pet share link`,
                  }),
                i === `share` &&
                  (0, Q.jsx)(p, {
                    id: `settings.chatGpt.personalization.pet.share.confirm`,
                    defaultMessage: `Share`,
                    description: `Button confirming creation of a custom pet share link in ChatGPT Personalization`,
                  }),
              ],
            })
          : (0, Q.jsx)(t, {
              color: `primary`,
              onClick: () => {
                se(d).then((e) => {
                  e && Ee(s);
                });
              },
              type: `button`,
              children: (0, Q.jsx)(p, {
                id: `settings.chatGpt.personalization.pet.share.copy`,
                defaultMessage: `Copy link`,
                description: `Button to copy the created custom pet share URL in ChatGPT Personalization`,
              }),
            })),
      (n[70] = u),
      (n[71] = i),
      (n[72] = v),
      (n[73] = s),
      (n[74] = d),
      (n[75] = z))
    : (z = n[75]);
  let B;
  n[76] !== R || n[77] !== z
    ? ((B = (0, Q.jsx)(ie, { children: (0, Q.jsxs)(ce, { children: [R, z] }) })),
      (n[76] = R),
      (n[77] = z),
      (n[78] = B))
    : (B = n[78]);
  let V;
  n[79] !== D || n[80] !== I || n[81] !== B || n[82] !== S
    ? ((V = (0, Q.jsxs)(oe, { as: `form`, onSubmit: S, children: [D, I, B] })),
      (n[79] = D),
      (n[80] = I),
      (n[81] = B),
      (n[82] = S),
      (n[83] = V))
    : (V = n[83]);
  let H;
  return (
    n[84] !== v || n[85] !== V || n[86] !== b || n[87] !== x
      ? ((H = (0, Q.jsx)(ae, {
          open: !0,
          showDialogClose: b,
          shouldIgnoreClickOutside: v,
          size: `compact`,
          variant: `chatgpt`,
          onOpenChange: x,
          children: V,
        })),
        (n[84] = v),
        (n[85] = V),
        (n[86] = b),
        (n[87] = x),
        (n[88] = H))
      : (H = n[88]),
    H
  );
}
var dt, ft, Q, pt, mt;
function ht() {
  return (ht = e(() => {
    ((dt = W()),
      m(),
      y(),
      (ft = q()),
      R(),
      xe(),
      ye(),
      he(),
      H(),
      U(),
      M(),
      fe(),
      B(),
      de(),
      Ke(),
      I(),
      He(),
      it(),
      ct(),
      (Q = G()),
      (pt = r({
        cancel: {
          id: `settings.chatGpt.personalization.pet.cancel`,
          defaultMessage: `Cancel`,
          description: `Secondary button closing a pet upload, edit, sharing, or deletion dialog without applying the pending action`,
        },
        save: {
          id: `settings.chatGpt.personalization.pet.save`,
          defaultMessage: `Save`,
          description: `Primary button saving a custom Work pet's name and description`,
        },
      })),
      (mt = r({
        type: {
          id: `settings.chatGpt.personalization.pet.file.error.type`,
          defaultMessage: `Choose a PNG or WebP image`,
          description: `Validation error for unsupported file types in ChatGPT's pet upload dialog`,
        },
        size: {
          id: `settings.chatGpt.personalization.pet.file.error.size`,
          defaultMessage: `Choose an image no larger than 20 MiB`,
          description: `Validation error for a sprite sheet larger than the pet upload limit in ChatGPT`,
        },
        dimensions: {
          id: `settings.chatGpt.personalization.pet.file.error.dimensions`,
          defaultMessage: `Use a 1536 × 1872 (v1) or 1536 × 2288 (v2) pixel sprite sheet`,
          description: `Validation error for unsupported sprite sheet dimensions in ChatGPT's pet upload dialog`,
        },
        frames: {
          id: `settings.chatGpt.personalization.pet.file.error.frames`,
          defaultMessage: `Each required animation frame must contain pet artwork and a transparent background`,
          description: `Validation error when a custom pet sprite sheet contains empty or fully opaque required animation cells`,
        },
        unreadable: {
          id: `settings.chatGpt.personalization.pet.file.error.unreadable`,
          defaultMessage: `Couldn’t read this image. Choose another file`,
          description: `Validation error when ChatGPT cannot decode a custom pet sprite sheet`,
        },
      })));
  }))();
}
async function gt(e, t, n, r, i) {
  try {
    let { submitChatGPTCompletion: a } = await N(
        async () => {
          let { submitChatGPTCompletion: e } = await import(`./submit-chatgpt-completion-365e080589d9.js`);
          return { submitChatGPTCompletion: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
        import.meta.url,
      ),
      o = await e.query.fetch(ve);
    if (e.get(Ve) !== t) return;
    let s = e.get(Ie),
      c = ``;
    if (s != null && Y(e, `3142691021`)) {
      let e = s.getDynamicConfig(`1655736916`),
        t = e.get(`baseInstructions`, ``).trim();
      c = t
        ? [t, e.get(`skillInstructions`, ``).trim()].filter((e) => !!e).join(`

`)
        : e.get(`onboardingInstructions`, ``).trim();
    }
    await a(e, {
      conversationOrigin: `tpp`,
      model: o.defaultModelSlug,
      extraDeveloperInstructions: c ? [c] : [],
      thinkingEffort: `min`,
      serviceTier: `fast`,
      prompt: n.formatMessage({
        id: `chatgpt.tpp.onboarding.mock_setup.choose_pet.prompt.user_request`,
        defaultMessage: `Help me setup my pet`,
        description: `User-visible prompt starting a Work conversation from the pet picker in ChatGPT Personalization. It asks ChatGPT to configure an animated pet, not a real animal. Skill routing is supplied separately.`,
      }),
      messageMetadata: { starter_prompt_id: `tpp-onboarding-mock-setup-pet` },
      onClientThreadIdChange: (e) => {
        (i?.(), r(K(e)));
      },
      onServerThreadIdChange: (e) => {
        r(K(e), { replace: !0 });
      },
    });
  } catch {
    e.get(re).danger(
      n.formatMessage({
        id: `settings.chatGpt.personalization.pet.create.error`,
        defaultMessage: `Couldn’t start pet creation. Please try again`,
        description: `Error toast when the Work pet picker cannot start its creation conversation`,
      }),
      { errorAnalytics: { toastId: `settings.chatGpt.personalization.pet.create.error` } },
    );
  }
}
function _t() {
  return (_t = e(() => {
    (me(), ye(), s(), B(), be(), V());
  }))();
}
function vt(e) {
  let n = (0, Ct.c)(92),
    { accountId: r, embedded: i, onNavigate: a } = e,
    o = i !== void 0 && i,
    s = ee(c),
    u = ne(),
    d = l(),
    m = T(qe).status === `allowed`,
    g = (0, wt.useRef)(null),
    [v, y] = (0, wt.useState)(!1),
    [x, S] = (0, wt.useState)(!1),
    { data: C } = T(Fe),
    { data: w, isPending: D, isError: k, isFetching: j, refetch: M } = T(rt),
    N;
  n[0] !== r || n[1] !== s ? ((N = (e) => at(s, r, e)), (n[0] = r), (n[1] = s), (n[2] = N)) : (N = n[2]);
  let P;
  n[3] !== u || n[4] !== s
    ? ((P = () =>
        s
          .get(re)
          .danger(
            u.formatMessage({
              id: `settings.chatGpt.personalization.pet.selection.error`,
              defaultMessage: `Couldn’t select your pet. Please try again`,
              description: `Error toast after saving the active Work pet fails; the previous selection is restored`,
            }),
            { errorAnalytics: { toastId: `settings.chatGpt.personalization.pet.selection.error` } },
          )),
      (n[3] = u),
      (n[4] = s),
      (n[5] = P))
    : (P = n[5]);
  let F;
  n[6] !== N || n[7] !== P
    ? ((F = { mutationFn: N, onError: P }), (n[6] = N), (n[7] = P), (n[8] = F))
    : (F = n[8]);
  let { mutate: I, isPending: L } = te(F),
    R;
  n[9] !== w || n[10] !== C?.accessoryId
    ? ((R = ot(C?.accessoryId)),
      w != null && R.startsWith(`pet_`) && !w.pets.some((e) => e.id === R) && (R = `default`),
      (n[9] = w),
      (n[10] = C?.accessoryId),
      (n[11] = R))
    : (R = n[11]);
  let B = T(et),
    ae = C != null,
    oe = (0, wt.useRef)(!1),
    V;
  n[12] !== s || n[13] !== R
    ? ((V = () => {
        (tt(s, z.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED, R), tt(s, z.CODEX_AVATAR_OVERLAY_ACTION_OPENED));
      }),
      (n[12] = s),
      (n[13] = R),
      (n[14] = V))
    : (V = n[14]);
  let se = (0, wt.useEffectEvent)(V),
    ce;
  n[15] !== ae || n[16] !== se
    ? ((ce = () => {
        ae && !oe.current && ((oe.current = !0), se());
      }),
      (n[15] = ae),
      (n[16] = se),
      (n[17] = ce))
    : (ce = n[17]);
  let H;
  (n[18] === ae ? (H = n[19]) : ((H = [ae]), (n[18] = ae), (n[19] = H)), (0, wt.useEffect)(ce, H));
  let ue;
  n[20] !== m || n[21] !== s
    ? ((ue =
        m &&
        (0, $.jsxs)(t, {
          id: `chatgpt-pet-upload`,
          ref: g,
          color: `outlineSurface`,
          size: `actionSm`,
          onClick: () => {
            (tt(s, z.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED), y(!0));
          },
          children: [
            (0, $.jsx)(_, { asset: f }),
            (0, $.jsx)(p, {
              id: `settings.chatGpt.personalization.pet.upload`,
              defaultMessage: `Upload pet`,
              description: `Button opening the custom sprite-sheet upload dialog from the ChatGPT pet picker`,
            }),
          ],
        })),
      (n[20] = m),
      (n[21] = s),
      (n[22] = ue))
    : (ue = n[22]);
  let U = ue,
    W;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(p, {
        id: `settings.chatGpt.personalization.pet.pickerTitle`,
        defaultMessage: `Choose your pet`,
        description: `Heading of the Work pet picker in settings and its dialog`,
      })),
      (n[23] = W))
    : (W = n[23]);
  let de = W,
    G;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(`legend`, {
        className: `sr-only`,
        children: (0, $.jsx)(p, {
          id: `settings.chatGpt.personalization.pet.options`,
          defaultMessage: `Pet options`,
          description: `Accessible label for the Work pet picker radio group`,
        }),
      })),
      (n[24] = G))
    : (G = n[24]);
  let K;
  n[25] !== r ||
  n[26] !== m ||
  n[27] !== u ||
  n[28] !== x ||
  n[29] !== L ||
  n[30] !== d ||
  n[31] !== a ||
  n[32] !== s
    ? ((K =
        m &&
        (0, $.jsx)(b, {
          className: `min-h-19`,
          disabled: L || x,
          edgeRounding: `none`,
          icon: (0, $.jsxs)(`span`, {
            className: `flex size-10 shrink-0 items-center justify-center`,
            children: [
              (0, $.jsx)(_, { asset: h, className: `group-hover:hidden` }),
              (0, $.jsx)(_, { asset: E, className: `hidden group-hover:block` }),
            ],
          }),
          label: (0, $.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.create`,
            defaultMessage: `Create a pet with ChatGPT`,
            description: `Action in the Work pet picker that starts a ChatGPT conversation to create a custom animated companion`,
          }),
          description: (0, $.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.create.description`,
            defaultMessage: `Describe what you want, and ChatGPT will make it for you`,
            description: `Supporting text for creating a Work pet through a new ChatGPT conversation`,
          }),
          onClick: () => {
            (tt(s, z.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED),
              S(!0),
              gt(s, r, u, d, a).finally(() => S(!1)));
          },
        })),
      (n[25] = r),
      (n[26] = m),
      (n[27] = u),
      (n[28] = x),
      (n[29] = L),
      (n[30] = d),
      (n[31] = a),
      (n[32] = s),
      (n[33] = K))
    : (K = n[33]);
  let q;
  n[34] === D
    ? (q = n[35])
    : ((q =
        D &&
        (0, $.jsx)($e, {
          children: (0, $.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.loading`,
            defaultMessage: `Loading custom pets…`,
            description: `Status while the ChatGPT account's custom pet catalog loads`,
          }),
        })),
      (n[34] = D),
      (n[35] = q));
  let J;
  n[36] !== k || n[37] !== j || n[38] !== M
    ? ((J =
        k &&
        (0, $.jsx)(le, {
          label: (0, $.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.loadError`,
            defaultMessage: `Couldn’t load your custom pets`,
            description: `Error when the hosted pet catalog cannot be loaded in Pets settings`,
          }),
          control: (0, $.jsx)(t, {
            loading: j,
            onClick: () => void M(),
            children: (0, $.jsx)(p, {
              id: `settings.chatGpt.personalization.pet.retry`,
              defaultMessage: `Retry`,
              description: `Button retrying the failed custom-pet catalog request`,
            }),
          }),
        })),
      (n[36] = k),
      (n[37] = j),
      (n[38] = M),
      (n[39] = J))
    : (J = n[39]);
  let fe;
  n[40] !== r ||
  n[41] !== w?.pets ||
  n[42] !== j ||
  n[43] !== L ||
  n[44] !== a ||
  n[45] !== M ||
  n[46] !== I ||
  n[47] !== R ||
  n[48] !== C ||
  n[49] !== B
    ? ((fe = w?.pets.filter(yt).map((e) =>
        (0, $.jsx)(
          bt,
          {
            accountId: r,
            onNavigate: a,
            pet: e,
            selection: e.id,
            title: e.name,
            description: nt(e)
              ? e.description
              : (0, $.jsx)(p, {
                  id: `settings.chatGpt.personalization.pet.unavailable`,
                  defaultMessage: `This pet’s artwork is unavailable`,
                  description: `Description for a custom pet with no usable sprite sheet; it remains manageable but cannot be selected`,
                }),
            checked: R === e.id,
            disabled: L || C == null || !nt(e) || B,
            onSelect: () => I(e.id),
            onRefresh:
              B && !j
                ? () => {
                    M();
                  }
                : void 0,
          },
          e.id,
        ),
      )),
      (n[40] = r),
      (n[41] = w?.pets),
      (n[42] = j),
      (n[43] = L),
      (n[44] = a),
      (n[45] = M),
      (n[46] = I),
      (n[47] = R),
      (n[48] = C),
      (n[49] = B),
      (n[50] = fe))
    : (fe = n[50]);
  let Y;
  n[51] !== r || n[52] !== L || n[53] !== I || n[54] !== R || n[55] !== C
    ? ((Y = _e.map((e) =>
        (0, $.jsx)(
          bt,
          {
            accountId: r,
            selection: e.id,
            title: e.displayName,
            description:
              e.id === `rocky`
                ? (0, $.jsx)(p, {
                    id: `settings.chatGpt.personalization.pet.rocky.description`,
                    defaultMessage: `A steady rock for when the inbox gets out of control`,
                    description: `Description of the built-in Rocky Work pet in Pets settings`,
                  })
                : e.description,
            checked: R === e.id,
            disabled: L || C == null,
            onSelect: () => I(e.id),
          },
          e.id,
        ),
      )),
      (n[51] = r),
      (n[52] = L),
      (n[53] = I),
      (n[54] = R),
      (n[55] = C),
      (n[56] = Y))
    : (Y = n[56]);
  let pe;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(p, {
        id: `settings.chatGpt.personalization.pet.none`,
        defaultMessage: `Do not show pet`,
        description: `Final radio option hiding the animated companion and restoring the standard ChatGPT experience`,
      })),
      (n[57] = pe))
    : (pe = n[57]);
  let me = R === "default",
    he = L || C == null,
    X;
  n[58] === I ? (X = n[59]) : ((X = () => I(`default`)), (n[58] = I), (n[59] = X));
  let Z;
  n[60] !== r || n[61] !== me || n[62] !== he || n[63] !== X
    ? ((Z = (0, $.jsx)(bt, {
        accountId: r,
        selection: `default`,
        title: pe,
        checked: me,
        disabled: he,
        onSelect: X,
      })),
      (n[60] = r),
      (n[61] = me),
      (n[62] = he),
      (n[63] = X),
      (n[64] = Z))
    : (Z = n[64]);
  let ge;
  n[65] !== K || n[66] !== q || n[67] !== J || n[68] !== fe || n[69] !== Y || n[70] !== Z
    ? ((ge = (0, $.jsxs)(Ze, { variant: `interactive`, children: [K, q, J, fe, Y, Z] })),
      (n[65] = K),
      (n[66] = q),
      (n[67] = J),
      (n[68] = fe),
      (n[69] = Y),
      (n[70] = Z),
      (n[71] = ge))
    : (ge = n[71]);
  let ve;
  n[72] !== L || n[73] !== ge
    ? ((ve = (0, $.jsxs)(`fieldset`, {
        "aria-busy": L,
        className: `min-w-0`,
        disabled: L,
        children: [G, ge],
      })),
      (n[72] = L),
      (n[73] = ge),
      (n[74] = ve))
    : (ve = n[74]);
  let ye;
  n[75] !== r || n[76] !== v
    ? ((ye =
        v && (0, $.jsx)(lt, { accountId: r, onClose: () => y(!1), onReturnFocus: () => g.current?.focus() })),
      (n[75] = r),
      (n[76] = v),
      (n[77] = ye))
    : (ye = n[77]);
  let be;
  n[78] !== ve || n[79] !== ye
    ? ((be = (0, $.jsxs)($.Fragment, { children: [ve, ye] })), (n[78] = ve), (n[79] = ye), (n[80] = be))
    : (be = n[80]);
  let xe = be;
  if (o) {
    let e;
    n[81] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(A, { title: (0, $.jsx)(O, { className: `select-none`, children: de }) })),
        (n[81] = e))
      : (e = n[81]);
    let t;
    n[82] === U
      ? (t = n[83])
      : ((t = (0, $.jsx)(ie, {
          children: (0, $.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 pe-8`,
            children: [e, U],
          }),
        })),
        (n[82] = U),
        (n[83] = t));
    let r;
    n[84] === xe
      ? (r = n[85])
      : ((r = (0, $.jsx)(ie, {
          className: `min-h-0 flex-1`,
          children: (0, $.jsx)(`div`, {
            className: `-mx-5 min-h-0 flex-1 overflow-y-auto px-5`,
            children: xe,
          }),
        })),
        (n[84] = xe),
        (n[85] = r));
    let i;
    return (
      n[86] !== t || n[87] !== r
        ? ((i = (0, $.jsxs)($.Fragment, { children: [t, r] })), (n[86] = t), (n[87] = r), (n[88] = i))
        : (i = n[88]),
      i
    );
  }
  let Se;
  return (
    n[89] !== xe || n[90] !== U
      ? ((Se = (0, $.jsx)(Me, { title: de, action: U, children: xe })),
        (n[89] = xe),
        (n[90] = U),
        (n[91] = Se))
      : (Se = n[91]),
    Se
  );
}
function yt(e) {
  return e.id.startsWith(`pet_`);
}
function bt(e) {
  let r = (0, Ct.c)(43),
    {
      accountId: i,
      pet: a,
      selection: o,
      title: s,
      description: c,
      checked: l,
      disabled: u,
      onSelect: f,
      onRefresh: m,
      onNavigate: ee,
    } = e,
    h = (0, wt.useId)(),
    g = !u && `hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover`,
    te;
  r[0] === g ? (te = r[1]) : ((te = P(`flex min-h-19 items-center`, g)), (r[0] = g), (r[1] = te));
  let v = u ? `cursor-not-allowed opacity-60` : `cursor-interaction`,
    y;
  r[2] === v
    ? (y = r[3])
    : ((y = P(`flex min-w-0 flex-1 self-stretch select-none`, v)), (r[2] = v), (r[3] = y));
  let b;
  r[4] !== l || r[5] !== u || r[6] !== h || r[7] !== f || r[8] !== o
    ? ((b = (0, $.jsx)(`input`, {
        id: h,
        className: `peer sr-only`,
        checked: l,
        disabled: u,
        name: `chatgpt-pet`,
        onChange: f,
        type: `radio`,
        value: o,
      })),
      (r[4] = l),
      (r[5] = u),
      (r[6] = h),
      (r[7] = f),
      (r[8] = o),
      (r[9] = b))
    : (b = r[9]);
  let x;
  r[10] !== a || r[11] !== o
    ? ((x = o === "default" ? null : (0, $.jsx)(xt, { pet: a, selection: o })),
      (r[10] = a),
      (r[11] = o),
      (r[12] = x))
    : (x = r[12]);
  let S;
  r[13] !== c || r[14] !== x || r[15] !== s
    ? ((S = (0, $.jsx)(le, {
        className: `flex-1 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-0 peer-focus-visible:outline-ring`,
        icon: x,
        label: s,
        description: c,
        control: null,
      })),
      (r[13] = c),
      (r[14] = x),
      (r[15] = s),
      (r[16] = S))
    : (S = r[16]);
  let C;
  r[17] !== y || r[18] !== b || r[19] !== S
    ? ((C = (0, $.jsxs)(`label`, { className: y, children: [b, S] })),
      (r[17] = y),
      (r[18] = b),
      (r[19] = S),
      (r[20] = C))
    : (C = r[20]);
  let w;
  r[21] === m
    ? (w = r[22])
    : ((w =
        m != null &&
        (0, $.jsx)(t, {
          onClick: m,
          children: (0, $.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.refresh`,
            defaultMessage: `Refresh`,
            description: `Button refreshing an expired custom pet sprite-sheet URL`,
          }),
        })),
      (r[21] = m),
      (r[22] = w));
  let ne;
  r[23] !== i || r[24] !== ee || r[25] !== a
    ? ((ne = a != null && (0, $.jsx)(St, { accountId: i, pet: a, onNavigate: ee })),
      (r[23] = i),
      (r[24] = ee),
      (r[25] = a),
      (r[26] = ne))
    : (ne = r[26]);
  let T = u ? `cursor-not-allowed opacity-60` : `cursor-interaction`,
    E;
  r[27] === T ? (E = r[28]) : ((E = P(`flex items-center self-stretch`, T)), (r[27] = T), (r[28] = E));
  let D;
  r[29] === l
    ? (D = r[30])
    : ((D = l
        ? (0, $.jsx)(d, { className: `text-info` })
        : (0, $.jsx)(_, { asset: n, className: `text-tertiary` })),
      (r[29] = l),
      (r[30] = D));
  let O;
  r[31] !== h || r[32] !== E || r[33] !== D
    ? ((O = (0, $.jsx)(`label`, { className: E, htmlFor: h, children: D })),
      (r[31] = h),
      (r[32] = E),
      (r[33] = D),
      (r[34] = O))
    : (O = r[34]);
  let k;
  r[35] !== ne || r[36] !== O || r[37] !== w
    ? ((k = (0, $.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-2 self-stretch pe-4`,
        children: [w, ne, O],
      })),
      (r[35] = ne),
      (r[36] = O),
      (r[37] = w),
      (r[38] = k))
    : (k = r[38]);
  let A;
  return (
    r[39] !== k || r[40] !== te || r[41] !== C
      ? ((A = (0, $.jsxs)(`div`, { className: te, children: [C, k] })),
        (r[39] = k),
        (r[40] = te),
        (r[41] = C),
        (r[42] = A))
      : (A = r[42]),
    A
  );
}
function xt(e) {
  let t = (0, Ct.c)(9),
    { pet: n, selection: r } = e,
    i;
  if (r.startsWith(`pet_`)) {
    if (n?.spritesheet_url == null) return null;
    let e;
    (t[0] !== n.id || t[1] !== n.spritesheet_url
      ? ((e = { petId: n.id, spritesheetUrl: n.spritesheet_url }),
        (t[0] = n.id),
        (t[1] = n.spritesheet_url),
        (t[2] = e))
      : (e = t[2]),
      (i = e));
  } else {
    let e;
    t[3] === r ? (e = t[4]) : ((e = _e.find((e) => e.id === r)?.assetRef ?? `codex`), (t[3] = r), (t[4] = e));
    let n;
    (t[5] === e ? (n = t[6]) : ((n = { assetRef: e }), (t[5] = e), (t[6] = n)), (i = n));
  }
  let a;
  return (
    t[7] === i
      ? (a = t[8])
      : ((a = (0, $.jsx)(Ne, {
          className: `shrink-0 [--codex-pet-width:--spacing(10)]`,
          assetMap: J,
          source: i,
        })),
        (t[7] = i),
        (t[8] = a)),
    a
  );
}
function St(e) {
  let n = (0, Ct.c)(54),
    { accountId: r, pet: a, onNavigate: s } = e,
    l = ee(c),
    u = ne(),
    d = T(qe).status === `allowed`,
    f = Re(`1665452992`),
    m = ze(`1658802482`),
    h;
  n[0] !== f || n[1] !== m
    ? ((h = f && !m.get(`disable_sharing`, !1)), (n[0] = f), (n[1] = m), (n[2] = h))
    : (h = n[2]);
  let g = h,
    [_, v] = (0, wt.useState)(null),
    y;
  n[3] !== r || n[4] !== a.id || n[5] !== l
    ? ((y = async (e) => {
        let t = { additionalHeaders: { "ChatGPT-Account-ID": r }, parameters: { path: { pet_id: a.id } } };
        if (e === `copy`) {
          let e = await Pe.safePost(`/pets/{pet_id}/share`, t);
          (await se(e.share_url)) && Ee(l);
          return;
        }
        let n = await Pe.safeGet(`/pets/{pet_id}/download`, t),
          i = await fetch(n.spritesheet_url, { credentials: `omit` });
        if (!i.ok) throw Error(`Pet download failed`);
        let o = await i.blob();
        X(o, `${a.id}-spritesheet.${o.type === `image/webp` ? `webp` : `png`}`);
      }),
      (n[3] = r),
      (n[4] = a.id),
      (n[5] = l),
      (n[6] = y))
    : (y = n[6]);
  let b;
  n[7] !== u || n[8] !== l
    ? ((b = () =>
        l
          .get(re)
          .danger(
            u.formatMessage({
              id: `settings.chatGpt.personalization.pet.actionFailed`,
              defaultMessage: `Couldn’t complete this action. Please try again`,
              description: `Error toast when downloading a custom pet or copying its share link fails in Pets settings`,
            }),
            { errorAnalytics: { toastId: `settings.chatGpt.personalization.pet.actionFailed` } },
          )),
      (n[7] = u),
      (n[8] = l),
      (n[9] = b))
    : (b = n[9]);
  let x;
  n[10] !== y || n[11] !== b
    ? ((x = { mutationFn: y, onError: b }), (n[10] = y), (n[11] = b), (n[12] = x))
    : (x = n[12]);
  let { mutate: S, isPending: w } = te(x),
    E;
  n[13] !== u || n[14] !== a.name
    ? ((E = u.formatMessage(
        {
          id: `settings.chatGpt.personalization.pet.actions`,
          defaultMessage: `Actions for {petName}`,
          description: `Accessible label of a custom Work pet's overflow menu; petName is its user-provided name`,
        },
        { petName: a.name },
      )),
      (n[13] = u),
      (n[14] = a.name),
      (n[15] = E))
    : (E = n[15]);
  let D;
  n[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = (0, $.jsx)(i, {})), (n[16] = D)) : (D = n[16]);
  let O;
  n[17] !== w || n[18] !== E
    ? ((O = (0, $.jsx)(t, { "aria-label": E, color: `ghost`, disabled: w, size: `icon`, children: D })),
      (n[17] = w),
      (n[18] = E),
      (n[19] = O))
    : (O = n[19]);
  let k;
  n[20] !== d || n[21] !== u || n[22] !== s || n[23] !== a.name || n[24] !== l
    ? ((k =
        d &&
        (0, $.jsx)(C.Item, {
          onSelect: () => {
            (s?.(),
              Ye(l, {
                activeProject: null,
                codexAppMode: `work`,
                prefillPrompt: u.formatMessage(
                  {
                    id: `settings.chatGpt.personalization.pet.edit.prompt`,
                    defaultMessage: `Help me modify my pet {petName}.`,
                    description: `User-visible composer prompt from Edit in ChatGPT in the Work pet picker; petName identifies the selected custom pet`,
                  },
                  { petName: a.name },
                ),
              }));
          },
          children: (0, $.jsx)(p, {
            id: `settings.chatGpt.personalization.pet.edit.chatgpt`,
            defaultMessage: `Edit in ChatGPT`,
            description: `Pet overflow action opening a Work conversation draft to modify the custom pet`,
          }),
        })),
      (n[20] = d),
      (n[21] = u),
      (n[22] = s),
      (n[23] = a.name),
      (n[24] = l),
      (n[25] = k))
    : (k = n[25]);
  let A;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(C.Item, {
        onSelect: () => v(`edit`),
        children: (0, $.jsx)(p, {
          id: `settings.chatGpt.personalization.pet.edit.manually`,
          defaultMessage: `Edit manually`,
          description: `Pet overflow action opening the custom pet name and description editor`,
        }),
      })),
      (n[26] = A))
    : (A = n[26]);
  let j;
  n[27] === S ? (j = n[28]) : ((j = () => S(`download`)), (n[27] = S), (n[28] = j));
  let M;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(p, {
        id: `settings.chatGpt.personalization.pet.download`,
        defaultMessage: `Download sprite sheet`,
        description: `Pet overflow action downloading the original animation image from ChatGPT`,
      })),
      (n[29] = M))
    : (M = n[29]);
  let N;
  n[30] === j
    ? (N = n[31])
    : ((N = (0, $.jsx)(C.Item, { onSelect: j, children: M })), (n[30] = j), (n[31] = N));
  let P;
  n[32] !== g || n[33] !== S || n[34] !== a.shared_pet_id
    ? ((P =
        g &&
        (a.shared_pet_id == null
          ? (0, $.jsx)(C.Item, {
              onSelect: () => v(`share`),
              children: (0, $.jsx)(p, {
                id: `settings.chatGpt.personalization.pet.share`,
                defaultMessage: `Share`,
                description: `Pet overflow action opening the share confirmation dialog`,
              }),
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(C.Item, {
                  onSelect: () => S(`copy`),
                  children: (0, $.jsx)(p, {
                    id: `settings.chatGpt.personalization.pet.copy`,
                    defaultMessage: `Copy share link`,
                    description: `Pet overflow action copying an existing custom pet share link`,
                  }),
                }),
                (0, $.jsx)(C.Item, {
                  onSelect: () => v(`unshare`),
                  children: (0, $.jsx)(p, {
                    id: `settings.chatGpt.personalization.pet.unshare`,
                    defaultMessage: `Unshare`,
                    description: `Pet overflow action opening confirmation to invalidate the current share link`,
                  }),
                }),
              ],
            }))),
      (n[32] = g),
      (n[33] = S),
      (n[34] = a.shared_pet_id),
      (n[35] = P))
    : (P = n[35]);
  let F;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(C.Item, {
        color: `danger`,
        onSelect: () => v(`delete`),
        children: (0, $.jsx)(p, {
          id: `settings.chatGpt.personalization.pet.delete`,
          defaultMessage: `Delete`,
          description: `Pet overflow action opening confirmation to permanently delete this custom pet`,
        }),
      })),
      (n[36] = F))
    : (F = n[36]);
  let I;
  n[37] !== N || n[38] !== P || n[39] !== O || n[40] !== k
    ? ((I = (0, $.jsxs)(o, { triggerButton: O, children: [k, A, N, P, F] })),
      (n[37] = N),
      (n[38] = P),
      (n[39] = O),
      (n[40] = k),
      (n[41] = I))
    : (I = n[41]);
  let L;
  n[42] !== r || n[43] !== _ || n[44] !== a
    ? ((L = _ === `edit` && (0, $.jsx)(lt, { accountId: r, pet: a, onClose: () => v(null) })),
      (n[42] = r),
      (n[43] = _),
      (n[44] = a),
      (n[45] = L))
    : (L = n[45]);
  let R;
  n[46] !== r || n[47] !== _ || n[48] !== a
    ? ((R =
        _ != null &&
        _ !== `edit` &&
        (0, $.jsx)(ut, { accountId: r, action: _, pet: a, onClose: () => v(null) })),
      (n[46] = r),
      (n[47] = _),
      (n[48] = a),
      (n[49] = R))
    : (R = n[49]);
  let z;
  return (
    n[50] !== I || n[51] !== L || n[52] !== R
      ? ((z = (0, $.jsxs)($.Fragment, { children: [I, L, R] })),
        (n[50] = I),
        (n[51] = L),
        (n[52] = R),
        (n[53] = z))
      : (z = n[53]),
    z
  );
}
var Ct, wt, $;
function Tt() {
  return (Tt = e(() => {
    ((Ct = W()),
      x(),
      Ue(),
      g(),
      j(),
      u(),
      w(),
      m(),
      D(),
      y(),
      (wt = q()),
      R(),
      k(),
      je(),
      De(),
      Ce(),
      ye(),
      H(),
      U(),
      M(),
      a(),
      v(),
      S(),
      B(),
      ge(),
      de(),
      we(),
      Qe(),
      L(),
      Xe(),
      Ke(),
      Oe(),
      I(),
      He(),
      ht(),
      it(),
      _t(),
      ($ = G()));
  }))();
}
function Et(e) {
  let t = (0, Dt.c)(7),
    { embedded: n, onNavigate: r } = e,
    i = n !== void 0 && n,
    a = T(Ve);
  if (a == null) {
    if (i) {
      let e;
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Ot.jsx)(ie, {
            children: (0, Ot.jsx)(A, {
              title: (0, Ot.jsx)(O, {
                className: `select-none`,
                children: (0, Ot.jsx)(ke, { slug: `pets` }),
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]);
      let n;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Ot.jsxs)(Ot.Fragment, {
              children: [e, (0, Ot.jsx)(ie, { children: (0, Ot.jsx)(Be, {}) })],
            })),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Ot.jsx)(Te, { section: `pets` })), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let o;
  return (
    t[3] !== a || t[4] !== i || t[5] !== r
      ? ((o = (0, Ot.jsx)(vt, { accountId: a, embedded: i, onNavigate: r }, a)),
        (t[3] = a),
        (t[4] = i),
        (t[5] = r),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var Dt, Ot;
function kt() {
  return (kt = e(() => {
    ((Dt = W()), y(), ye(), U(), M(), Le(), Ae(), We(), Tt(), (Ot = G()));
  }))();
}
function At(e) {
  let t = (0, jt.c)(10),
    { onClose: n, onReturnFocus: r } = e,
    i = (0, Mt.useRef)(!0),
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = {
        "aria-describedby": void 0,
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), i.current && r?.());
        },
      }),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = (e) => {
        e || n();
      }),
      (t[2] = n),
      (t[3] = o));
  let s;
  t[4] === n
    ? (s = t[5])
    : ((s = (0, Nt.jsx)(oe, {
        size: `full`,
        children: (0, Nt.jsx)(Et, {
          embedded: !0,
          onNavigate: () => {
            ((i.current = !1), n());
          },
        }),
      })),
      (t[4] = n),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, Nt.jsx)(ae, {
          open: !0,
          contentProps: a,
          size: `setup`,
          variant: `chatgpt`,
          onOpenChange: o,
          children: s,
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
var jt, Mt, Nt;
function Pt() {
  return (Pt = e(() => {
    ((jt = W()), (Mt = q()), U(), M(), kt(), (Nt = G()));
  }))();
}
Pt();
export { At as PetSettingsDialog };
//# sourceMappingURL=pet-settings-dialog-5f65fcbd4297.js.map
