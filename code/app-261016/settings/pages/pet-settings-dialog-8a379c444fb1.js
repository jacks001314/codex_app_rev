const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./submit-chatgpt-completion-26802baa1180.js",
      "./app-initial-ad16eaadf81f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BO as r,
  DB as i,
  DU as a,
  FBt as o,
  HO as s,
  IO as c,
  J as l,
  JO as u,
  KO as d,
  LNt as f,
  LO as p,
  MNt as m,
  NNt as h,
  NO as g,
  NSt as _,
  OB as v,
  OFt as y,
  PBt as b,
  PO as x,
  Qst as ee,
  RO as S,
  Rrt as C,
  Ss as w,
  T8 as T,
  TY as E,
  USt as D,
  Um as O,
  Uot as k,
  VH as A,
  Vot as j,
  Vrt as M,
  WO as N,
  Wm as P,
  X as F,
  XOt as I,
  Y as L,
  Y3 as te,
  YOt as R,
  Z3 as z,
  ZSt as B,
  ck as V,
  iCt as H,
  iw as U,
  kFt as W,
  okt as ne,
  q as re,
  qO as ie,
  qrt as ae,
  rk as G,
  sw as oe,
  tk as se,
  tkt as K,
  uw as q,
  vst as J,
  xs as ce,
  yst as le,
  zO as ue,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as Y,
  Cet as de,
  Cjr as X,
  Cqt as fe,
  Djr as pe,
  Eet as me,
  Eqt as Z,
  IMr as he,
  JF as ge,
  KIr as _e,
  LF as ve,
  LIr as ye,
  Met as be,
  QF as xe,
  QLn as Se,
  RF as Ce,
  Set as we,
  XF as Te,
  YF as Ee,
  ZF as De,
  ZLn as Oe,
  _et as ke,
  cBr as Ae,
  cH as je,
  eI as Me,
  eMr as Ne,
  fBr as Pe,
  iRr as Fe,
  jcn as Ie,
  lBr as Le,
  mYn as Re,
  met as ze,
  nMr as Be,
  oet as Ve,
  rPn as He,
  sH as Ue,
  sIn as We,
  sRr as Ge,
  set as Ke,
  wcn as qe,
  xet as Je,
  xjr as Ye,
} from "./app-initial-ad16eaadf81f.js";
import { n as Xe, t as Ze } from "./settings-rows-ddb669c33599.js";
import { n as Qe, t as $e } from "./settings-loading-row-1fcc5b514745.js";
import { a as et, i as tt, n as nt, o as rt, r as it, s as at, t as ot } from "./pet-model-4267f7213124.js";
import { n as st, t as ct } from "./tpp-skills-config-ee983b2d705e.js";
async function lt(e) {
  if (e.type !== `image/png` && e.type !== `image/webp`) return `type`;
  if (e.size > 20971520) return `size`;
  let t = URL.createObjectURL(e);
  try {
    let e = new Image();
    ((e.src = t), await e.decode());
    let n = be(e.naturalWidth, e.naturalHeight);
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
function ut() {
  return (ut = e(() => {
    de();
  }))();
}
function dt(e) {
  let n = (0, pt.c)(99),
    { accountId: i, pet: a, onClose: o, onReturnFocus: s } = e,
    l = t(ee),
    u = ne(),
    f = (0, mt.useId)(),
    m = (0, mt.useId)(),
    h = (0, mt.useId)(),
    g = (0, mt.useId)(),
    _ = (0, mt.useId)(),
    [v, y] = (0, mt.useState)(null),
    b;
  n[0] !== i || n[1] !== u || n[2] !== a || n[3] !== l
    ? ((b = async (e) => {
        let { name: t, description: n, file: r } = e,
          o = l.query.snapshot(rt);
        if (a != null)
          return (
            await Fe.safePatch(`/pets/{pet_id}`, {
              additionalHeaders: { "ChatGPT-Account-ID": i },
              parameters: { path: { pet_id: a.id } },
              requestBody: { name: t, description: n || null },
            }),
            await o.invalidate(),
            !0
          );
        if (r == null) return !1;
        let s = await lt(r);
        if (s != null) return (y(u.formatMessage(gt[s])), !1);
        let { pet: c } = await Ke(i, { name: t, description: n, file: r });
        await o.invalidate();
        try {
          l.get(he) === i && (await at(l, i, c.id));
        } catch {
          l.get(ae).danger(
            u.formatMessage({
              id: `settings.chatGpt.personalization.pet.upload.selectionFailed`,
              defaultMessage: `Your pet was uploaded, but couldn’t be selected. Select it from the picker to try again`,
              description: `Warning after a custom pet upload succeeds but saving the active pet fails in ChatGPT Personalization. The upload is preserved; do not upload again.`,
            }),
            { errorAnalytics: { toastId: `settings.chatGpt.personalization.pet.upload.selectionFailed` } },
          );
        }
        return !0;
      }),
      (n[0] = i),
      (n[1] = u),
      (n[2] = a),
      (n[3] = l),
      (n[4] = b))
    : (b = n[4]);
  let x;
  n[5] === o
    ? (x = n[6])
    : ((x = (e) => {
        e && o();
      }),
      (n[5] = o),
      (n[6] = x));
  let C;
  n[7] === u
    ? (C = n[8])
    : ((C = () =>
        y(
          u.formatMessage({
            id: `settings.chatGpt.personalization.pet.save.error`,
            defaultMessage: `Couldn’t save your pet. Please try again`,
            description: `Inline error in the upload or edit pet dialog in ChatGPT Personalization when the request fails. The dialog remains open for retry.`,
          }),
        )),
      (n[7] = u),
      (n[8] = C));
  let w;
  n[9] !== b || n[10] !== x || n[11] !== C
    ? ((w = { mutationFn: b, onSuccess: x, onError: C }), (n[9] = b), (n[10] = x), (n[11] = C), (n[12] = w))
    : (w = n[12]);
  let { mutate: T, isPending: E } = le(w),
    D;
  n[13] === a
    ? (D = n[14])
    : ((D = a == null ? {} : { "aria-describedby": void 0 }), (n[13] = a), (n[14] = D));
  let O;
  n[15] === s
    ? (O = n[16])
    : ((O =
        s == null
          ? void 0
          : (e) => {
              (e.preventDefault(), s());
            }),
      (n[15] = s),
      (n[16] = O));
  let k;
  n[17] !== D || n[18] !== O
    ? ((k = { ...D, onCloseAutoFocus: O }), (n[17] = D), (n[18] = O), (n[19] = k))
    : (k = n[19]);
  let A = !E,
    j;
  n[20] !== E || n[21] !== o
    ? ((j = (e) => {
        !e && !E && o();
      }),
      (n[20] = E),
      (n[21] = o),
      (n[22] = j))
    : (j = n[22]);
  let M;
  n[23] !== u || n[24] !== E || n[25] !== T || n[26] !== a
    ? ((M = (e) => {
        if ((e.preventDefault(), E)) return;
        y(null);
        let t = new FormData(e.currentTarget),
          n = t.get(`pet-name`),
          r = t.get(`pet-description`),
          i = t.get(`pet-spritesheet`);
        if (
          typeof n != `string` ||
          !n.trim() ||
          n.trim().length > 80 ||
          typeof r != `string` ||
          r.trim().length > 500
        ) {
          y(
            u.formatMessage({
              id: `settings.chatGpt.personalization.pet.fields.error`,
              defaultMessage: `Enter a name of up to 80 characters and a description of up to 500 characters`,
              description: `Inline validation error in ChatGPT's pet upload or edit dialog. A name is required; description is optional.`,
            }),
          );
          return;
        }
        if (a == null && (!(i instanceof File) || i.size === 0)) {
          y(
            u.formatMessage({
              id: `settings.chatGpt.personalization.pet.file.required`,
              defaultMessage: `Choose a sprite sheet to upload`,
              description: `Inline validation error when the Upload a pet form in ChatGPT Personalization is submitted without an image file.`,
            }),
          );
          return;
        }
        T({ name: n.trim(), description: r.trim(), file: i instanceof File ? i : null });
      }),
      (n[23] = u),
      (n[24] = E),
      (n[25] = T),
      (n[26] = a),
      (n[27] = M))
    : (M = n[27]);
  let P;
  n[28] === a
    ? (P = n[29])
    : ((P = (0, Q.jsx)(ue, {
        children: (0, Q.jsx)(S, {
          title: (0, Q.jsx)(ie, {
            children:
              a == null
                ? (0, Q.jsx)(K, {
                    id: `settings.chatGpt.personalization.pet.upload.title`,
                    defaultMessage: `Upload a pet`,
                    description: `Title of the custom pet upload dialog in ChatGPT Personalization settings`,
                  })
                : (0, Q.jsx)(K, {
                    id: `settings.chatGpt.personalization.pet.edit.named.title`,
                    defaultMessage: `Edit {petName}`,
                    description: `Title of the pet name and description editor in ChatGPT Personalization settings; petName is the current user-provided name`,
                    values: { petName: a.name },
                  }),
          }),
        }),
      })),
      (n[28] = a),
      (n[29] = P));
  let F;
  n[30] === a
    ? (F = n[31])
    : ((F =
        a == null &&
        (0, Q.jsx)(d, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.upload.description`,
            defaultMessage: `Add an animated companion for Work mode`,
            description: `Introductory text in ChatGPT's pet upload dialog. The image becomes an animated Work mode companion.`,
          }),
        })),
      (n[30] = a),
      (n[31] = F));
  let I;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(K, {
        id: `settings.chatGpt.personalization.pet.name`,
        defaultMessage: `Pet name`,
        description: `Label for the required pet display name in ChatGPT's upload and edit dialogs`,
      })),
      (n[32] = I))
    : (I = n[32]);
  let L;
  n[33] === f
    ? (L = n[34])
    : ((L = (0, Q.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: f,
        children: I,
      })),
      (n[33] = f),
      (n[34] = L));
  let R = a?.name,
    z;
  n[35] === u
    ? (z = n[36])
    : ((z = u.formatMessage({
        id: `settings.chatGpt.personalization.pet.name.placeholder`,
        defaultMessage: `Name your pet`,
        description: `Placeholder for the required pet name in ChatGPT's upload and edit dialogs`,
      })),
      (n[35] = u),
      (n[36] = z));
  let B;
  n[37] !== E || n[38] !== f || n[39] !== R || n[40] !== z
    ? ((B = (0, Q.jsx)(Oe, {
        id: f,
        autoComplete: `off`,
        autoFocus: !0,
        defaultValue: R,
        disabled: E,
        maxLength: 80,
        name: `pet-name`,
        placeholder: z,
        required: !0,
      })),
      (n[37] = E),
      (n[38] = f),
      (n[39] = R),
      (n[40] = z),
      (n[41] = B))
    : (B = n[41]);
  let V;
  n[42] !== L || n[43] !== B
    ? ((V = (0, Q.jsxs)(r, { children: [L, B] })), (n[42] = L), (n[43] = B), (n[44] = V))
    : (V = n[44]);
  let H;
  n[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Q.jsx)(K, {
        id: `settings.chatGpt.personalization.pet.description`,
        defaultMessage: `Pet description (optional)`,
        description: `Label for the optional description of a custom Work pet in ChatGPT Personalization`,
      })),
      (n[45] = H))
    : (H = n[45]);
  let U;
  n[46] === m
    ? (U = n[47])
    : ((U = (0, Q.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: m,
        children: H,
      })),
      (n[46] = m),
      (n[47] = U));
  let W = a?.description,
    re;
  n[48] === u
    ? (re = n[49])
    : ((re = u.formatMessage({
        id: `settings.chatGpt.personalization.pet.description.placeholder`,
        defaultMessage: `Describe your pet`,
        description: `Placeholder for the optional custom pet description in ChatGPT Personalization`,
      })),
      (n[48] = u),
      (n[49] = re));
  let G;
  n[50] !== h || n[51] !== m || n[52] !== E || n[53] !== W || n[54] !== re
    ? ((G = (0, Q.jsx)(Se, {
        id: m,
        "aria-describedby": h,
        autoComplete: `off`,
        defaultValue: W,
        disabled: E,
        maxLength: 500,
        name: `pet-description`,
        placeholder: re,
      })),
      (n[50] = h),
      (n[51] = m),
      (n[52] = E),
      (n[53] = W),
      (n[54] = re),
      (n[55] = G))
    : (G = n[55]);
  let oe;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, Q.jsx)(K, {
        id: `settings.chatGpt.personalization.pet.description.help`,
        defaultMessage: `Up to 500 characters`,
        description: `Help text stating the maximum length of a custom pet description in ChatGPT Personalization`,
      })),
      (n[56] = oe))
    : (oe = n[56]);
  let se;
  n[57] === h
    ? (se = n[58])
    : ((se = (0, Q.jsx)(`p`, { id: h, className: `text-xs text-tertiary`, children: oe })),
      (n[57] = h),
      (n[58] = se));
  let q;
  n[59] !== U || n[60] !== G || n[61] !== se
    ? ((q = (0, Q.jsxs)(r, { children: [U, G, se] })), (n[59] = U), (n[60] = G), (n[61] = se), (n[62] = q))
    : (q = n[62]);
  let J;
  n[63] !== _ || n[64] !== g || n[65] !== E || n[66] !== a
    ? ((J =
        a == null &&
        (0, Q.jsxs)(r, {
          children: [
            (0, Q.jsx)(`label`, {
              className: `text-sm font-medium text-default select-none`,
              htmlFor: g,
              children: (0, Q.jsx)(K, {
                id: `settings.chatGpt.personalization.pet.file`,
                defaultMessage: `Sprite sheet`,
                description: `Label for the image file input in ChatGPT's pet upload dialog. A sprite sheet contains a grid of animation frames.`,
              }),
            }),
            (0, Q.jsx)(`input`, {
              id: g,
              accept: `image/png,image/webp`,
              "aria-describedby": _,
              className: `w-full cursor-interaction rounded-lg border border-primary-outline p-2 text-sm text-default file:me-3 file:cursor-interaction file:rounded-md file:border-0 file:bg-surface-secondary file:px-3 file:py-1.5 file:text-default disabled:cursor-not-allowed disabled:opacity-40`,
              disabled: E,
              name: `pet-spritesheet`,
              required: !0,
              type: `file`,
            }),
            (0, Q.jsx)(`p`, {
              id: _,
              className: `text-xs text-tertiary`,
              children: (0, Q.jsx)(K, {
                id: `settings.chatGpt.personalization.pet.file.help`,
                defaultMessage: `Transparent PNG or WebP, 1536 × 1872 (v1) or 1536 × 2288 (v2) pixels, up to 20 MiB`,
                description: `Technical file requirements in ChatGPT's pet upload dialog. Keep image formats, dimensions, version numbers, and MiB recognizable.`,
              }),
            }),
          ],
        })),
      (n[63] = _),
      (n[64] = g),
      (n[65] = E),
      (n[66] = a),
      (n[67] = J))
    : (J = n[67]);
  let ce;
  n[68] === v
    ? (ce = n[69])
    : ((ce = v != null && (0, Q.jsx)(`p`, { className: `text-sm text-danger`, role: `alert`, children: v })),
      (n[68] = v),
      (n[69] = ce));
  let Y;
  n[70] !== F || n[71] !== V || n[72] !== q || n[73] !== J || n[74] !== ce
    ? ((Y = (0, Q.jsxs)(ue, { className: `gap-4`, children: [F, V, q, J, ce] })),
      (n[70] = F),
      (n[71] = V),
      (n[72] = q),
      (n[73] = J),
      (n[74] = ce),
      (n[75] = Y))
    : (Y = n[75]);
  let de;
  n[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Q.jsx)(K, { ...ht.cancel })), (n[76] = de))
    : (de = n[76]);
  let X;
  n[77] !== E || n[78] !== o
    ? ((X = (0, Q.jsx)(te, { color: `secondary`, disabled: E, onClick: o, type: `button`, children: de })),
      (n[77] = E),
      (n[78] = o),
      (n[79] = X))
    : (X = n[79]);
  let fe;
  n[80] === a
    ? (fe = n[81])
    : ((fe =
        a == null
          ? (0, Q.jsx)(K, {
              id: `settings.chatGpt.personalization.pet.upload.submit`,
              defaultMessage: `Upload`,
              description: `Primary button in ChatGPT's Upload a pet dialog. Uploads the validated image and selects the pet.`,
            })
          : (0, Q.jsx)(K, { ...ht.save })),
      (n[80] = a),
      (n[81] = fe));
  let pe;
  n[82] !== E || n[83] !== fe
    ? ((pe = (0, Q.jsx)(te, { color: `primary`, loading: E, type: `submit`, children: fe })),
      (n[82] = E),
      (n[83] = fe),
      (n[84] = pe))
    : (pe = n[84]);
  let me;
  n[85] !== X || n[86] !== pe
    ? ((me = (0, Q.jsx)(ue, { children: (0, Q.jsxs)(p, { children: [X, pe] }) })),
      (n[85] = X),
      (n[86] = pe),
      (n[87] = me))
    : (me = n[87]);
  let Z;
  n[88] !== M || n[89] !== P || n[90] !== Y || n[91] !== me
    ? ((Z = (0, Q.jsxs)(c, { as: `form`, onSubmit: M, children: [P, Y, me] })),
      (n[88] = M),
      (n[89] = P),
      (n[90] = Y),
      (n[91] = me),
      (n[92] = Z))
    : (Z = n[92]);
  let ge;
  return (
    n[93] !== E || n[94] !== Z || n[95] !== k || n[96] !== A || n[97] !== j
      ? ((ge = (0, Q.jsx)(N, {
          open: !0,
          contentProps: k,
          showDialogClose: A,
          shouldIgnoreClickOutside: E,
          size: `compact`,
          variant: `chatgpt`,
          onOpenChange: j,
          children: Z,
        })),
        (n[93] = E),
        (n[94] = Z),
        (n[95] = k),
        (n[96] = A),
        (n[97] = j),
        (n[98] = ge))
      : (ge = n[98]),
    ge
  );
}
function ft(e) {
  let n = (0, pt.c)(89),
    { accountId: r, action: i, pet: a, onClose: o } = e,
    s = t(ee),
    l = ne(),
    { data: u } = Ie(),
    [f, m] = (0, mt.useState)(null),
    h;
  n[0] !== r || n[1] !== i || n[2] !== a || n[3] !== s
    ? ((h = async () => {
        let e = s.query.snapshot(rt),
          t = s.query.snapshot(Ne),
          n = { additionalHeaders: { "ChatGPT-Account-ID": r }, parameters: { path: { pet_id: a.id } } },
          o = null;
        return (
          i === `share`
            ? (o = (await Fe.safePost(`/pets/{pet_id}/share`, n)).share_url)
            : i === `unshare`
              ? await Fe.safeDelete(`/pets/{pet_id}/share`, n)
              : await Fe.safeDelete(`/pets/{pet_id}`, n),
          await Promise.all([e.invalidate(), t.invalidate()]),
          o
        );
      }),
      (n[0] = r),
      (n[1] = i),
      (n[2] = a),
      (n[3] = s),
      (n[4] = h))
    : (h = n[4]);
  let _;
  n[5] === o
    ? (_ = n[6])
    : ((_ = (e) => {
        e == null ? o() : m(e);
      }),
      (n[5] = o),
      (n[6] = _));
  let v;
  n[7] !== h || n[8] !== _
    ? ((v = { mutationFn: h, onSuccess: _ }), (n[7] = h), (n[8] = _), (n[9] = v))
    : (v = n[9]);
  let { mutate: y, isPending: b, isError: x } = le(v),
    C = !b,
    w;
  n[10] !== b || n[11] !== o
    ? ((w = (e) => {
        !e && !b && o();
      }),
      (n[10] = b),
      (n[11] = o),
      (n[12] = w))
    : (w = n[12]);
  let T;
  n[13] !== b || n[14] !== y || n[15] !== f
    ? ((T = (e) => {
        (e.preventDefault(), !b && f == null && y());
      }),
      (n[13] = b),
      (n[14] = y),
      (n[15] = f),
      (n[16] = T))
    : (T = n[16]);
  let E;
  n[17] !== i || n[18] !== a
    ? ((E =
        i === `delete` &&
        (0, Q.jsx)(K, {
          id: `settings.chatGpt.personalization.pet.delete.title`,
          defaultMessage: `Delete {petName}?`,
          description: `Confirmation title before permanently deleting a custom Work pet; petName is its user-provided name`,
          values: { petName: a.name },
        })),
      (n[17] = i),
      (n[18] = a),
      (n[19] = E))
    : (E = n[19]);
  let D;
  n[20] !== i || n[21] !== a
    ? ((D =
        i === `unshare` &&
        (0, Q.jsx)(K, {
          id: `settings.chatGpt.personalization.pet.unshare.title`,
          defaultMessage: `Stop sharing {petName}?`,
          description: `Confirmation title before invalidating a Work pet share link; petName is its name`,
          values: { petName: a.name },
        })),
      (n[20] = i),
      (n[21] = a),
      (n[22] = D))
    : (D = n[22]);
  let O;
  n[23] !== i || n[24] !== a || n[25] !== f
    ? ((O =
        i === `share` &&
        f == null &&
        (0, Q.jsx)(K, {
          id: `settings.chatGpt.personalization.pet.share.title`,
          defaultMessage: `Share {petName}?`,
          description: `Title of the custom Work pet sharing dialog; petName is its user-provided name`,
          values: { petName: a.name },
        })),
      (n[23] = i),
      (n[24] = a),
      (n[25] = f),
      (n[26] = O))
    : (O = n[26]);
  let k;
  n[27] !== i || n[28] !== a || n[29] !== f
    ? ((k =
        i === `share` &&
        f != null &&
        (0, Q.jsx)(K, {
          id: `settings.chatGpt.personalization.pet.share.success.title`,
          defaultMessage: `{petName} is shared`,
          description: `Success title after creating a link for a custom Work pet; petName is its user-provided name`,
          values: { petName: a.name },
        })),
      (n[27] = i),
      (n[28] = a),
      (n[29] = f),
      (n[30] = k))
    : (k = n[30]);
  let A;
  n[31] !== k || n[32] !== E || n[33] !== D || n[34] !== O
    ? ((A = (0, Q.jsx)(ue, {
        children: (0, Q.jsx)(S, { title: (0, Q.jsxs)(ie, { children: [E, D, O, k] }) }),
      })),
      (n[31] = k),
      (n[32] = E),
      (n[33] = D),
      (n[34] = O),
      (n[35] = A))
    : (A = n[35]);
  let j;
  n[36] !== i || n[37] !== a
    ? ((j =
        i === `delete` &&
        (0, Q.jsx)(d, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.delete.description`,
            defaultMessage: `This permanently deletes {petName} and its uploaded sprite sheet`,
            description: `Warning in ChatGPT's pet deletion confirmation. petName is the pet being removed permanently.`,
            values: { petName: a.name },
          }),
        })),
      (n[36] = i),
      (n[37] = a),
      (n[38] = j))
    : (j = n[38]);
  let M;
  n[39] !== i || n[40] !== a
    ? ((M =
        i === `unshare` &&
        (0, Q.jsx)(d, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.unshare.description`,
            defaultMessage: `The current link to {petName} will stop working. People who already adopted this pet will keep their copies`,
            description: `Explains the consequences of unsharing a Work pet in ChatGPT. petName is its user-provided name.`,
            values: { petName: a.name },
          }),
        })),
      (n[39] = i),
      (n[40] = a),
      (n[41] = M))
    : (M = n[41]);
  let P;
  n[42] !== u?.structure || n[43] !== i || n[44] !== a || n[45] !== f
    ? ((P =
        i === `share` &&
        f == null &&
        u?.structure === `workspace` &&
        (0, Q.jsx)(d, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.share.workspace`,
            defaultMessage: `People in your workspace with the link can view and adopt {petName}, following the same rules as shared conversations. Your name and account information will not be shown`,
            description: `Privacy and access explanation before sharing a pet from a ChatGPT workspace. petName is its user-provided name.`,
            values: { petName: a.name },
          }),
        })),
      (n[42] = u?.structure),
      (n[43] = i),
      (n[44] = a),
      (n[45] = f),
      (n[46] = P))
    : (P = n[46]);
  let F;
  n[47] !== u?.structure || n[48] !== i || n[49] !== a || n[50] !== f
    ? ((F =
        i === `share` &&
        f == null &&
        u?.structure === `personal` &&
        (0, Q.jsx)(d, {
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.share.personal`,
            defaultMessage: `Anyone with the link can view and adopt {petName}. Your name and account information will not be shown`,
            description: `Privacy explanation before creating a public pet share link for a personal ChatGPT account. petName is its name.`,
            values: { petName: a.name },
          }),
        })),
      (n[47] = u?.structure),
      (n[48] = i),
      (n[49] = a),
      (n[50] = f),
      (n[51] = F))
    : (F = n[51]);
  let I;
  n[52] !== l || n[53] !== f
    ? ((I =
        f != null &&
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3`,
          children: [
            (0, Q.jsx)(d, {
              className: `text-sm text-secondary`,
              children: (0, Q.jsx)(K, {
                id: `settings.chatGpt.personalization.pet.share.success.description`,
                defaultMessage: `Share this link so others can meet and adopt your pet`,
                description: `Instruction above the link in the successful custom pet share dialog in ChatGPT Personalization`,
              }),
            }),
            (0, Q.jsx)(Oe, {
              "aria-label": l.formatMessage({
                id: `settings.chatGpt.personalization.pet.share.link`,
                defaultMessage: `Pet share link`,
                description: `Accessible label for the read-only generated pet share URL in ChatGPT Personalization`,
              }),
              readOnly: !0,
              value: f,
            }),
          ],
        })),
      (n[52] = l),
      (n[53] = f),
      (n[54] = I))
    : (I = n[54]);
  let L;
  n[55] === x
    ? (L = n[56])
    : ((L =
        x &&
        (0, Q.jsx)(`p`, {
          className: `text-sm text-danger`,
          role: `alert`,
          children: (0, Q.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.action.error`,
            defaultMessage: `Something went wrong. Please try again`,
            description: `Inline error after a custom pet sharing or deletion request fails in ChatGPT Personalization; the confirmation stays open for retry`,
          }),
        })),
      (n[55] = x),
      (n[56] = L));
  let R;
  n[57] !== j || n[58] !== M || n[59] !== P || n[60] !== F || n[61] !== I || n[62] !== L
    ? ((R = (0, Q.jsxs)(ue, { className: `gap-3`, children: [j, M, P, F, I, L] })),
      (n[57] = j),
      (n[58] = M),
      (n[59] = P),
      (n[60] = F),
      (n[61] = I),
      (n[62] = L),
      (n[63] = R))
    : (R = n[63]);
  let z;
  n[64] === f
    ? (z = n[65])
    : ((z =
        f == null
          ? (0, Q.jsx)(K, { ...ht.cancel })
          : (0, Q.jsx)(K, {
              id: `settings.chatGpt.personalization.pet.share.done`,
              defaultMessage: `Done`,
              description: `Button closing the successful custom pet share dialog after its link has been created`,
            })),
      (n[64] = f),
      (n[65] = z));
  let B;
  n[66] !== b || n[67] !== o || n[68] !== z
    ? ((B = (0, Q.jsx)(te, { color: `secondary`, disabled: b, onClick: o, type: `button`, children: z })),
      (n[66] = b),
      (n[67] = o),
      (n[68] = z),
      (n[69] = B))
    : (B = n[69]);
  let V;
  n[70] !== u || n[71] !== i || n[72] !== b || n[73] !== s || n[74] !== f
    ? ((V =
        f == null
          ? (0, Q.jsxs)(te, {
              color: i === `share` ? `primary` : `dangerSolid`,
              disabled: i === `share` && u == null,
              loading: b,
              type: `submit`,
              children: [
                i === `delete` &&
                  (0, Q.jsx)(K, {
                    id: `settings.chatGpt.personalization.pet.delete.confirm`,
                    defaultMessage: `Delete`,
                    description: `Destructive button confirming permanent deletion of a custom Work pet`,
                  }),
                i === `unshare` &&
                  (0, Q.jsx)(K, {
                    id: `settings.chatGpt.personalization.pet.unshare.confirm`,
                    defaultMessage: `Stop sharing`,
                    description: `Button confirming invalidation of a custom Work pet share link`,
                  }),
                i === `share` &&
                  (0, Q.jsx)(K, {
                    id: `settings.chatGpt.personalization.pet.share.confirm`,
                    defaultMessage: `Share`,
                    description: `Button confirming creation of a custom pet share link in ChatGPT Personalization`,
                  }),
              ],
            })
          : (0, Q.jsx)(te, {
              color: `primary`,
              onClick: () => {
                g(f).then((e) => {
                  e && je(s);
                });
              },
              type: `button`,
              children: (0, Q.jsx)(K, {
                id: `settings.chatGpt.personalization.pet.share.copy`,
                defaultMessage: `Copy link`,
                description: `Button to copy the created custom pet share URL in ChatGPT Personalization`,
              }),
            })),
      (n[70] = u),
      (n[71] = i),
      (n[72] = b),
      (n[73] = s),
      (n[74] = f),
      (n[75] = V))
    : (V = n[75]);
  let H;
  n[76] !== B || n[77] !== V
    ? ((H = (0, Q.jsx)(ue, { children: (0, Q.jsxs)(p, { children: [B, V] }) })),
      (n[76] = B),
      (n[77] = V),
      (n[78] = H))
    : (H = n[78]);
  let U;
  n[79] !== A || n[80] !== R || n[81] !== H || n[82] !== T
    ? ((U = (0, Q.jsxs)(c, { as: `form`, onSubmit: T, children: [A, R, H] })),
      (n[79] = A),
      (n[80] = R),
      (n[81] = H),
      (n[82] = T),
      (n[83] = U))
    : (U = n[83]);
  let W;
  return (
    n[84] !== b || n[85] !== U || n[86] !== C || n[87] !== w
      ? ((W = (0, Q.jsx)(N, {
          open: !0,
          showDialogClose: C,
          shouldIgnoreClickOutside: b,
          size: `compact`,
          variant: `chatgpt`,
          onOpenChange: w,
          children: U,
        })),
        (n[84] = b),
        (n[85] = U),
        (n[86] = C),
        (n[87] = w),
        (n[88] = W))
      : (W = n[88]),
    W
  );
}
var pt, mt, Q, ht, gt;
function _t() {
  return (_t = e(() => {
    ((pt = b()),
      J(),
      B(),
      (mt = o()),
      I(),
      Ve(),
      Be(),
      qe(),
      z(),
      u(),
      s(),
      Y(),
      M(),
      n(),
      Ue(),
      x(),
      Ge(),
      it(),
      ut(),
      (Q = f()),
      (ht = R({
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
      (gt = R({
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
async function vt(e, t, n, r, i) {
  try {
    let { submitChatGPTCompletion: a } = await y(
        async () => {
          let { submitChatGPTCompletion: e } = await import(`./submit-chatgpt-completion-26802baa1180.js`);
          return { submitChatGPTCompletion: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
        import.meta.url,
      ),
      o = await e.query.fetch(We);
    if (e.get(he) !== t) return;
    let s = e.get(Pe),
      c = ``;
    if (s != null && Ae(e, `3142691021`)) {
      let t = await ct(e),
        n = (t.baseInstructions ?? ``).trim();
      c = n
        ? [n, (t.skillInstructions ?? ``).trim()].filter((e) => !!e).join(`

`)
        : (t.onboardingInstructions ?? ``).trim();
    }
    if (e.get(he) !== t) return;
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
        (i?.(), r(j(e)));
      },
      onServerThreadIdChange: (e) => {
        r(j(e), { replace: !0 });
      },
    });
  } catch {
    e.get(ae).danger(
      n.formatMessage({
        id: `settings.chatGpt.personalization.pet.create.error`,
        defaultMessage: `Couldn’t start pet creation. Please try again`,
        description: `Error toast when the Work pet picker cannot start its creation conversation`,
      }),
      { errorAnalytics: { toastId: `settings.chatGpt.personalization.pet.create.error` } },
    );
  }
}
function yt() {
  return (yt = e(() => {
    (He(), Be(), st(), k(), M(), Le(), W());
  }))();
}
function bt(e) {
  let n = (0, Tt.c)(92),
    { accountId: r, embedded: a, onNavigate: o } = e,
    s = a !== void 0 && a,
    c = t(ee),
    u = ne(),
    d = D(),
    f = H(_e).status === `allowed`,
    p = (0, Et.useRef)(null),
    [m, h] = (0, Et.useState)(!1),
    [g, _] = (0, Et.useState)(!1),
    { data: v } = H(Ne),
    { data: y, isPending: b, isError: x, isFetching: C, refetch: w } = H(rt),
    E;
  n[0] !== r || n[1] !== c ? ((E = (e) => at(c, r, e)), (n[0] = r), (n[1] = c), (n[2] = E)) : (E = n[2]);
  let O;
  n[3] !== u || n[4] !== c
    ? ((O = () =>
        c
          .get(ae)
          .danger(
            u.formatMessage({
              id: `settings.chatGpt.personalization.pet.selection.error`,
              defaultMessage: `Couldn’t select your pet. Please try again`,
              description: `Error toast after saving the active Work pet fails; the previous selection is restored`,
            }),
            { errorAnalytics: { toastId: `settings.chatGpt.personalization.pet.selection.error` } },
          )),
      (n[3] = u),
      (n[4] = c),
      (n[5] = O))
    : (O = n[5]);
  let k;
  n[6] !== E || n[7] !== O
    ? ((k = { mutationFn: E, onError: O }), (n[6] = E), (n[7] = O), (n[8] = k))
    : (k = n[8]);
  let { mutate: A, isPending: j } = le(k),
    M;
  n[9] !== y || n[10] !== v?.accessoryId
    ? ((M = ot(v?.accessoryId)),
      y != null && M.startsWith(`pet_`) && !y.pets.some((e) => e.id === M) && (M = `default`),
      (n[9] = y),
      (n[10] = v?.accessoryId),
      (n[11] = M))
    : (M = n[11]);
  let N = H(et),
    P = v != null,
    I = (0, Et.useRef)(!1),
    L;
  n[12] !== c || n[13] !== M
    ? ((L = () => {
        (tt(c, T.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED, M), tt(c, T.CODEX_AVATAR_OVERLAY_ACTION_OPENED));
      }),
      (n[12] = c),
      (n[13] = M),
      (n[14] = L))
    : (L = n[14]);
  let R = (0, Et.useEffectEvent)(L),
    z;
  n[15] !== P || n[16] !== R
    ? ((z = () => {
        P && !I.current && ((I.current = !0), R());
      }),
      (n[15] = P),
      (n[16] = R),
      (n[17] = z))
    : (z = n[17]);
  let B;
  (n[18] === P ? (B = n[19]) : ((B = [P]), (n[18] = P), (n[19] = B)), (0, Et.useEffect)(z, B));
  let V;
  n[20] !== f || n[21] !== c
    ? ((V =
        f &&
        (0, $.jsxs)(te, {
          id: `chatgpt-pet-upload`,
          ref: p,
          color: `outlineSurface`,
          size: `actionSm`,
          onClick: () => {
            (tt(c, T.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED), h(!0));
          },
          children: [
            (0, $.jsx)(i, { asset: ce }),
            (0, $.jsx)(K, {
              id: `settings.chatGpt.personalization.pet.upload`,
              defaultMessage: `Upload pet`,
              description: `Button opening the custom sprite-sheet upload dialog from the ChatGPT pet picker`,
            }),
          ],
        })),
      (n[20] = f),
      (n[21] = c),
      (n[22] = V))
    : (V = n[22]);
  let W = V,
    re;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, $.jsx)(K, {
        id: `settings.chatGpt.personalization.pet.pickerTitle`,
        defaultMessage: `Choose your pet`,
        description: `Heading of the Work pet picker in settings and its dialog`,
      })),
      (n[23] = re))
    : (re = n[23]);
  let G = re,
    se;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, $.jsx)(`legend`, {
        className: `sr-only`,
        children: (0, $.jsx)(K, {
          id: `settings.chatGpt.personalization.pet.options`,
          defaultMessage: `Pet options`,
          description: `Accessible label for the Work pet picker radio group`,
        }),
      })),
      (n[24] = se))
    : (se = n[24]);
  let q;
  n[25] !== r ||
  n[26] !== f ||
  n[27] !== u ||
  n[28] !== g ||
  n[29] !== j ||
  n[30] !== d ||
  n[31] !== o ||
  n[32] !== c
    ? ((q =
        f &&
        (0, $.jsx)(U, {
          className: `min-h-19`,
          disabled: j || g,
          edgeRounding: `none`,
          icon: (0, $.jsxs)(`span`, {
            className: `flex size-10 shrink-0 items-center justify-center`,
            children: [
              (0, $.jsx)(i, { asset: F, className: `group-hover:hidden` }),
              (0, $.jsx)(i, { asset: l, className: `hidden group-hover:block` }),
            ],
          }),
          label: (0, $.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.create`,
            defaultMessage: `Create a pet with ChatGPT`,
            description: `Action in the Work pet picker that starts a ChatGPT conversation to create a custom animated companion`,
          }),
          description: (0, $.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.create.description`,
            defaultMessage: `Describe what you want, and ChatGPT will make it for you`,
            description: `Supporting text for creating a Work pet through a new ChatGPT conversation`,
          }),
          onClick: () => {
            (tt(c, T.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED),
              _(!0),
              vt(c, r, u, d, o).finally(() => _(!1)));
          },
        })),
      (n[25] = r),
      (n[26] = f),
      (n[27] = u),
      (n[28] = g),
      (n[29] = j),
      (n[30] = d),
      (n[31] = o),
      (n[32] = c),
      (n[33] = q))
    : (q = n[33]);
  let J;
  n[34] === b
    ? (J = n[35])
    : ((J =
        b &&
        (0, $.jsx)($e, {
          children: (0, $.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.loading`,
            defaultMessage: `Loading custom pets…`,
            description: `Status while the ChatGPT account's custom pet catalog loads`,
          }),
        })),
      (n[34] = b),
      (n[35] = J));
  let Y;
  n[36] !== x || n[37] !== C || n[38] !== w
    ? ((Y =
        x &&
        (0, $.jsx)(oe, {
          label: (0, $.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.loadError`,
            defaultMessage: `Couldn’t load your custom pets`,
            description: `Error when the hosted pet catalog cannot be loaded in Pets settings`,
          }),
          control: (0, $.jsx)(te, {
            loading: C,
            onClick: () => void w(),
            children: (0, $.jsx)(K, {
              id: `settings.chatGpt.personalization.pet.retry`,
              defaultMessage: `Retry`,
              description: `Button retrying the failed custom-pet catalog request`,
            }),
          }),
        })),
      (n[36] = x),
      (n[37] = C),
      (n[38] = w),
      (n[39] = Y))
    : (Y = n[39]);
  let de;
  n[40] !== r ||
  n[41] !== y?.pets ||
  n[42] !== C ||
  n[43] !== j ||
  n[44] !== o ||
  n[45] !== w ||
  n[46] !== A ||
  n[47] !== M ||
  n[48] !== v ||
  n[49] !== N
    ? ((de = y?.pets.filter(xt).map((e) =>
        (0, $.jsx)(
          St,
          {
            accountId: r,
            onNavigate: o,
            pet: e,
            selection: e.id,
            title: e.name,
            description: nt(e)
              ? e.description
              : (0, $.jsx)(K, {
                  id: `settings.chatGpt.personalization.pet.unavailable`,
                  defaultMessage: `This pet’s artwork is unavailable`,
                  description: `Description for a custom pet with no usable sprite sheet; it remains manageable but cannot be selected`,
                }),
            checked: M === e.id,
            disabled: j || v == null || !nt(e) || N,
            onSelect: () => A(e.id),
            onRefresh:
              N && !C
                ? () => {
                    w();
                  }
                : void 0,
          },
          e.id,
        ),
      )),
      (n[40] = r),
      (n[41] = y?.pets),
      (n[42] = C),
      (n[43] = j),
      (n[44] = o),
      (n[45] = w),
      (n[46] = A),
      (n[47] = M),
      (n[48] = v),
      (n[49] = N),
      (n[50] = de))
    : (de = n[50]);
  let X;
  n[51] !== r || n[52] !== j || n[53] !== A || n[54] !== M || n[55] !== v
    ? ((X = ze.map((e) =>
        (0, $.jsx)(
          St,
          {
            accountId: r,
            selection: e.id,
            title: e.displayName,
            description:
              e.id === `rocky`
                ? (0, $.jsx)(K, {
                    id: `settings.chatGpt.personalization.pet.rocky.description`,
                    defaultMessage: `A steady rock for when the inbox gets out of control`,
                    description: `Description of the built-in Rocky Work pet in Pets settings`,
                  })
                : e.description,
            checked: M === e.id,
            disabled: j || v == null,
            onSelect: () => A(e.id),
          },
          e.id,
        ),
      )),
      (n[51] = r),
      (n[52] = j),
      (n[53] = A),
      (n[54] = M),
      (n[55] = v),
      (n[56] = X))
    : (X = n[56]);
  let fe;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(K, {
        id: `settings.chatGpt.personalization.pet.none`,
        defaultMessage: `Do not show pet`,
        description: `Final radio option hiding the animated companion and restoring the standard ChatGPT experience`,
      })),
      (n[57] = fe))
    : (fe = n[57]);
  let pe = M === "default",
    me = j || v == null,
    Z;
  n[58] === A ? (Z = n[59]) : ((Z = () => A(`default`)), (n[58] = A), (n[59] = Z));
  let he;
  n[60] !== r || n[61] !== pe || n[62] !== me || n[63] !== Z
    ? ((he = (0, $.jsx)(St, {
        accountId: r,
        selection: `default`,
        title: fe,
        checked: pe,
        disabled: me,
        onSelect: Z,
      })),
      (n[60] = r),
      (n[61] = pe),
      (n[62] = me),
      (n[63] = Z),
      (n[64] = he))
    : (he = n[64]);
  let ge;
  n[65] !== q || n[66] !== J || n[67] !== Y || n[68] !== de || n[69] !== X || n[70] !== he
    ? ((ge = (0, $.jsxs)(Ze, { variant: `interactive`, children: [q, J, Y, de, X, he] })),
      (n[65] = q),
      (n[66] = J),
      (n[67] = Y),
      (n[68] = de),
      (n[69] = X),
      (n[70] = he),
      (n[71] = ge))
    : (ge = n[71]);
  let ve;
  n[72] !== j || n[73] !== ge
    ? ((ve = (0, $.jsxs)(`fieldset`, {
        "aria-busy": j,
        className: `min-w-0`,
        disabled: j,
        children: [se, ge],
      })),
      (n[72] = j),
      (n[73] = ge),
      (n[74] = ve))
    : (ve = n[74]);
  let ye;
  n[75] !== r || n[76] !== m
    ? ((ye =
        m && (0, $.jsx)(dt, { accountId: r, onClose: () => h(!1), onReturnFocus: () => p.current?.focus() })),
      (n[75] = r),
      (n[76] = m),
      (n[77] = ye))
    : (ye = n[77]);
  let be;
  n[78] !== ve || n[79] !== ye
    ? ((be = (0, $.jsxs)($.Fragment, { children: [ve, ye] })), (n[78] = ve), (n[79] = ye), (n[80] = be))
    : (be = n[80]);
  let Se = be;
  if (s) {
    let e;
    n[81] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(S, { title: (0, $.jsx)(ie, { className: `select-none`, children: G }) })),
        (n[81] = e))
      : (e = n[81]);
    let t;
    n[82] === W
      ? (t = n[83])
      : ((t = (0, $.jsx)(ue, {
          children: (0, $.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 pe-8`,
            children: [e, W],
          }),
        })),
        (n[82] = W),
        (n[83] = t));
    let r;
    n[84] === Se
      ? (r = n[85])
      : ((r = (0, $.jsx)(ue, {
          className: `min-h-0 flex-1`,
          children: (0, $.jsx)(`div`, {
            className: `-mx-5 min-h-0 flex-1 overflow-y-auto px-5`,
            children: Se,
          }),
        })),
        (n[84] = Se),
        (n[85] = r));
    let i;
    return (
      n[86] !== t || n[87] !== r
        ? ((i = (0, $.jsxs)($.Fragment, { children: [t, r] })), (n[86] = t), (n[87] = r), (n[88] = i))
        : (i = n[88]),
      i
    );
  }
  let Ce;
  return (
    n[89] !== Se || n[90] !== W
      ? ((Ce = (0, $.jsx)(xe, { title: G, action: W, children: Se })),
        (n[89] = Se),
        (n[90] = W),
        (n[91] = Ce))
      : (Ce = n[91]),
    Ce
  );
}
function xt(e) {
  return e.id.startsWith(`pet_`);
}
function St(e) {
  let t = (0, Tt.c)(43),
    {
      accountId: n,
      pet: r,
      selection: a,
      title: o,
      description: s,
      checked: c,
      disabled: l,
      onSelect: u,
      onRefresh: d,
      onNavigate: f,
    } = e,
    p = (0, Et.useId)(),
    h = !l && `hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover`,
    g;
  t[0] === h ? (g = t[1]) : ((g = m(`flex min-h-19 items-center`, h)), (t[0] = h), (t[1] = g));
  let _ = l ? `cursor-not-allowed opacity-60` : `cursor-interaction`,
    v;
  t[2] === _
    ? (v = t[3])
    : ((v = m(`flex min-w-0 flex-1 self-stretch select-none`, _)), (t[2] = _), (t[3] = v));
  let y;
  t[4] !== c || t[5] !== l || t[6] !== p || t[7] !== u || t[8] !== a
    ? ((y = (0, $.jsx)(`input`, {
        id: p,
        className: `peer sr-only`,
        checked: c,
        disabled: l,
        name: `chatgpt-pet`,
        onChange: u,
        type: `radio`,
        value: a,
      })),
      (t[4] = c),
      (t[5] = l),
      (t[6] = p),
      (t[7] = u),
      (t[8] = a),
      (t[9] = y))
    : (y = t[9]);
  let b;
  t[10] !== r || t[11] !== a
    ? ((b = a === "default" ? null : (0, $.jsx)(Ct, { pet: r, selection: a })),
      (t[10] = r),
      (t[11] = a),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== s || t[14] !== b || t[15] !== o
    ? ((x = (0, $.jsx)(oe, {
        className: `flex-1 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-0 peer-focus-visible:outline-ring`,
        icon: b,
        label: o,
        description: s,
        control: null,
      })),
      (t[13] = s),
      (t[14] = b),
      (t[15] = o),
      (t[16] = x))
    : (x = t[16]);
  let ee;
  t[17] !== v || t[18] !== y || t[19] !== x
    ? ((ee = (0, $.jsxs)(`label`, { className: v, children: [y, x] })),
      (t[17] = v),
      (t[18] = y),
      (t[19] = x),
      (t[20] = ee))
    : (ee = t[20]);
  let S;
  t[21] === d
    ? (S = t[22])
    : ((S =
        d != null &&
        (0, $.jsx)(te, {
          onClick: d,
          children: (0, $.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.refresh`,
            defaultMessage: `Refresh`,
            description: `Button refreshing an expired custom pet sprite-sheet URL`,
          }),
        })),
      (t[21] = d),
      (t[22] = S));
  let C;
  t[23] !== n || t[24] !== f || t[25] !== r
    ? ((C = r != null && (0, $.jsx)(wt, { accountId: n, pet: r, onNavigate: f })),
      (t[23] = n),
      (t[24] = f),
      (t[25] = r),
      (t[26] = C))
    : (C = t[26]);
  let w = l ? `cursor-not-allowed opacity-60` : `cursor-interaction`,
    T;
  t[27] === w ? (T = t[28]) : ((T = m(`flex items-center self-stretch`, w)), (t[27] = w), (t[28] = T));
  let E;
  t[29] === c
    ? (E = t[30])
    : ((E = c
        ? (0, $.jsx)(A, { className: `text-info` })
        : (0, $.jsx)(i, { asset: O, className: `text-tertiary` })),
      (t[29] = c),
      (t[30] = E));
  let D;
  t[31] !== p || t[32] !== T || t[33] !== E
    ? ((D = (0, $.jsx)(`label`, { className: T, htmlFor: p, children: E })),
      (t[31] = p),
      (t[32] = T),
      (t[33] = E),
      (t[34] = D))
    : (D = t[34]);
  let k;
  t[35] !== C || t[36] !== D || t[37] !== S
    ? ((k = (0, $.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-2 self-stretch pe-4`,
        children: [S, C, D],
      })),
      (t[35] = C),
      (t[36] = D),
      (t[37] = S),
      (t[38] = k))
    : (k = t[38]);
  let j;
  return (
    t[39] !== k || t[40] !== g || t[41] !== ee
      ? ((j = (0, $.jsxs)(`div`, { className: g, children: [ee, k] })),
        (t[39] = k),
        (t[40] = g),
        (t[41] = ee),
        (t[42] = j))
      : (j = t[42]),
    j
  );
}
function Ct(e) {
  let t = (0, Tt.c)(9),
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
    t[3] === r ? (e = t[4]) : ((e = ze.find((e) => e.id === r)?.assetRef ?? `codex`), (t[3] = r), (t[4] = e));
    let n;
    (t[5] === e ? (n = t[6]) : ((n = { assetRef: e }), (t[5] = e), (t[6] = n)), (i = n));
  }
  let a;
  return (
    t[7] === i
      ? (a = t[8])
      : ((a = (0, $.jsx)(me, {
          className: `shrink-0 [--codex-pet-width:--spacing(10)]`,
          assetMap: Je,
          source: i,
        })),
        (t[7] = i),
        (t[8] = a)),
    a
  );
}
function wt(e) {
  let n = (0, Tt.c)(54),
    { accountId: r, pet: i, onNavigate: o } = e,
    s = t(ee),
    c = ne(),
    l = H(_e).status === `allowed`,
    u = X(`1665452992`),
    d = pe(`1658802482`),
    f;
  n[0] !== u || n[1] !== d
    ? ((f = u && !d.get(`disable_sharing`, !1)), (n[0] = u), (n[1] = d), (n[2] = f))
    : (f = n[2]);
  let p = f,
    [m, h] = (0, Et.useState)(null),
    _;
  n[3] !== r || n[4] !== i.id || n[5] !== s
    ? ((_ = async (e) => {
        let t = { additionalHeaders: { "ChatGPT-Account-ID": r }, parameters: { path: { pet_id: i.id } } };
        if (e === `copy`) {
          let e = await Fe.safePost(`/pets/{pet_id}/share`, t);
          (await g(e.share_url)) && je(s);
          return;
        }
        let n = await Fe.safeGet(`/pets/{pet_id}/download`, t),
          a = await fetch(n.spritesheet_url, { credentials: `omit` });
        if (!a.ok) throw Error(`Pet download failed`);
        let o = await a.blob();
        Re(o, `${i.id}-spritesheet.${o.type === `image/webp` ? `webp` : `png`}`);
      }),
      (n[3] = r),
      (n[4] = i.id),
      (n[5] = s),
      (n[6] = _))
    : (_ = n[6]);
  let v;
  n[7] !== c || n[8] !== s
    ? ((v = () =>
        s
          .get(ae)
          .danger(
            c.formatMessage({
              id: `settings.chatGpt.personalization.pet.actionFailed`,
              defaultMessage: `Couldn’t complete this action. Please try again`,
              description: `Error toast when downloading a custom pet or copying its share link fails in Pets settings`,
            }),
            { errorAnalytics: { toastId: `settings.chatGpt.personalization.pet.actionFailed` } },
          )),
      (n[7] = c),
      (n[8] = s),
      (n[9] = v))
    : (v = n[9]);
  let y;
  n[10] !== _ || n[11] !== v
    ? ((y = { mutationFn: _, onError: v }), (n[10] = _), (n[11] = v), (n[12] = y))
    : (y = n[12]);
  let { mutate: b, isPending: x } = le(y),
    S;
  n[13] !== c || n[14] !== i.name
    ? ((S = c.formatMessage(
        {
          id: `settings.chatGpt.personalization.pet.actions`,
          defaultMessage: `Actions for {petName}`,
          description: `Accessible label of a custom Work pet's overflow menu; petName is its user-provided name`,
        },
        { petName: i.name },
      )),
      (n[13] = c),
      (n[14] = i.name),
      (n[15] = S))
    : (S = n[15]);
  let C;
  n[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = (0, $.jsx)(a, {})), (n[16] = C)) : (C = n[16]);
  let w;
  n[17] !== x || n[18] !== S
    ? ((w = (0, $.jsx)(te, { "aria-label": S, color: `ghost`, disabled: x, size: `icon`, children: C })),
      (n[17] = x),
      (n[18] = S),
      (n[19] = w))
    : (w = n[19]);
  let T;
  n[20] !== l || n[21] !== c || n[22] !== o || n[23] !== i.name || n[24] !== s
    ? ((T =
        l &&
        (0, $.jsx)(G.Item, {
          onSelect: () => {
            (o?.(),
              Z(s, {
                activeProject: null,
                codexAppMode: `work`,
                prefillPrompt: c.formatMessage(
                  {
                    id: `settings.chatGpt.personalization.pet.edit.prompt`,
                    defaultMessage: `Help me modify my pet {petName}.`,
                    description: `User-visible composer prompt from Edit in ChatGPT in the Work pet picker; petName identifies the selected custom pet`,
                  },
                  { petName: i.name },
                ),
              }));
          },
          children: (0, $.jsx)(K, {
            id: `settings.chatGpt.personalization.pet.edit.chatgpt`,
            defaultMessage: `Edit in ChatGPT`,
            description: `Pet overflow action opening a Work conversation draft to modify the custom pet`,
          }),
        })),
      (n[20] = l),
      (n[21] = c),
      (n[22] = o),
      (n[23] = i.name),
      (n[24] = s),
      (n[25] = T))
    : (T = n[25]);
  let E;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(G.Item, {
        onSelect: () => h(`edit`),
        children: (0, $.jsx)(K, {
          id: `settings.chatGpt.personalization.pet.edit.manually`,
          defaultMessage: `Edit manually`,
          description: `Pet overflow action opening the custom pet name and description editor`,
        }),
      })),
      (n[26] = E))
    : (E = n[26]);
  let D;
  n[27] === b ? (D = n[28]) : ((D = () => b(`download`)), (n[27] = b), (n[28] = D));
  let O;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(K, {
        id: `settings.chatGpt.personalization.pet.download`,
        defaultMessage: `Download sprite sheet`,
        description: `Pet overflow action downloading the original animation image from ChatGPT`,
      })),
      (n[29] = O))
    : (O = n[29]);
  let k;
  n[30] === D
    ? (k = n[31])
    : ((k = (0, $.jsx)(G.Item, { onSelect: D, children: O })), (n[30] = D), (n[31] = k));
  let A;
  n[32] !== p || n[33] !== b || n[34] !== i.shared_pet_id
    ? ((A =
        p &&
        (i.shared_pet_id == null
          ? (0, $.jsx)(G.Item, {
              onSelect: () => h(`share`),
              children: (0, $.jsx)(K, {
                id: `settings.chatGpt.personalization.pet.share`,
                defaultMessage: `Share`,
                description: `Pet overflow action opening the share confirmation dialog`,
              }),
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(G.Item, {
                  onSelect: () => b(`copy`),
                  children: (0, $.jsx)(K, {
                    id: `settings.chatGpt.personalization.pet.copy`,
                    defaultMessage: `Copy share link`,
                    description: `Pet overflow action copying an existing custom pet share link`,
                  }),
                }),
                (0, $.jsx)(G.Item, {
                  onSelect: () => h(`unshare`),
                  children: (0, $.jsx)(K, {
                    id: `settings.chatGpt.personalization.pet.unshare`,
                    defaultMessage: `Unshare`,
                    description: `Pet overflow action opening confirmation to invalidate the current share link`,
                  }),
                }),
              ],
            }))),
      (n[32] = p),
      (n[33] = b),
      (n[34] = i.shared_pet_id),
      (n[35] = A))
    : (A = n[35]);
  let j;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(G.Item, {
        color: `danger`,
        onSelect: () => h(`delete`),
        children: (0, $.jsx)(K, {
          id: `settings.chatGpt.personalization.pet.delete`,
          defaultMessage: `Delete`,
          description: `Pet overflow action opening confirmation to permanently delete this custom pet`,
        }),
      })),
      (n[36] = j))
    : (j = n[36]);
  let M;
  n[37] !== k || n[38] !== A || n[39] !== w || n[40] !== T
    ? ((M = (0, $.jsxs)(se, { triggerButton: w, children: [T, E, k, A, j] })),
      (n[37] = k),
      (n[38] = A),
      (n[39] = w),
      (n[40] = T),
      (n[41] = M))
    : (M = n[41]);
  let N;
  n[42] !== r || n[43] !== m || n[44] !== i
    ? ((N = m === `edit` && (0, $.jsx)(dt, { accountId: r, pet: i, onClose: () => h(null) })),
      (n[42] = r),
      (n[43] = m),
      (n[44] = i),
      (n[45] = N))
    : (N = n[45]);
  let P;
  n[46] !== r || n[47] !== m || n[48] !== i
    ? ((P =
        m != null &&
        m !== `edit` &&
        (0, $.jsx)(ft, { accountId: r, action: m, pet: i, onClose: () => h(null) })),
      (n[46] = r),
      (n[47] = m),
      (n[48] = i),
      (n[49] = P))
    : (P = n[49]);
  let F;
  return (
    n[50] !== M || n[51] !== N || n[52] !== P
      ? ((F = (0, $.jsxs)($.Fragment, { children: [M, N, P] })),
        (n[50] = M),
        (n[51] = N),
        (n[52] = P),
        (n[53] = F))
      : (F = n[53]),
    F
  );
}
var Tt, Et, $;
function Dt() {
  return (Dt = e(() => {
    ((Tt = b()),
      C(),
      de(),
      w(),
      P(),
      L(),
      re(),
      J(),
      h(),
      B(),
      (Et = o()),
      I(),
      _(),
      ye(),
      we(),
      ke(),
      Be(),
      z(),
      u(),
      s(),
      V(),
      v(),
      E(),
      M(),
      fe(),
      n(),
      Me(),
      Qe(),
      q(),
      Xe(),
      Ue(),
      Ye(),
      x(),
      Ge(),
      _t(),
      it(),
      yt(),
      ($ = f()));
  }))();
}
function Ot(e) {
  let t = (0, kt.c)(7),
    { embedded: n, onNavigate: r } = e,
    i = n !== void 0 && n,
    a = H(he);
  if (a == null) {
    if (i) {
      let e;
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, At.jsx)(ue, {
            children: (0, At.jsx)(S, {
              title: (0, At.jsx)(ie, {
                className: `select-none`,
                children: (0, At.jsx)(ve, { slug: `pets` }),
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]);
      let n;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, At.jsxs)(At.Fragment, {
              children: [e, (0, At.jsx)(ue, { children: (0, At.jsx)(Te, {}) })],
            })),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, At.jsx)(ge, { section: `pets` })), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let o;
  return (
    t[3] !== a || t[4] !== i || t[5] !== r
      ? ((o = (0, At.jsx)(bt, { accountId: a, embedded: i, onNavigate: r }, a)),
        (t[3] = a),
        (t[4] = i),
        (t[5] = r),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var kt, At;
function jt() {
  return (jt = e(() => {
    ((kt = b()), B(), Be(), u(), s(), De(), Ee(), Ce(), Dt(), (At = f()));
  }))();
}
function Mt(e) {
  let t = (0, Nt.c)(10),
    { onClose: n, onReturnFocus: r } = e,
    i = (0, Pt.useRef)(!0),
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
    : ((s = (0, Ft.jsx)(c, {
        size: `full`,
        children: (0, Ft.jsx)(Ot, {
          embedded: !0,
          onNavigate: () => {
            ((i.current = !1), n());
          },
        }),
      })),
      (t[4] = n),
      (t[5] = s));
  let l;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((l = (0, Ft.jsx)(N, {
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
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
var Nt, Pt, Ft;
function It() {
  return (It = e(() => {
    ((Nt = b()), (Pt = o()), u(), s(), jt(), (Ft = f()));
  }))();
}
It();
export { Mt as PetSettingsDialog };
//# sourceMappingURL=pet-settings-dialog-8a379c444fb1.js.map
