import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Hxt as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  VDt as a,
  Vxt as o,
  hot as s,
  jDt as c,
  lot as l,
  vzt as u,
  xMt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as p,
  A1t as m,
  Dpt as h,
  GMr as g,
  OPr as _,
  QEr as v,
  XMr as y,
  dH as b,
  eDr as x,
  iDr as S,
  j1t as C,
  k1t as w,
  kPr as T,
  tDr as E,
  tNr as D,
  tln as O,
  uH as k,
  wpt as A,
} from "./app-initial-5851df3f6cb1.js";
import { n as j, t as M } from "./entity-share-button-2ff5da23da52.js";
import { n as N, t as P } from "./saved-entity-folder-menu-action-564da126d6bf.js";
function F(e) {
  let n = (0, B.c)(26),
    {
      conversationId: r,
      messageId: i,
      place: a,
      shouldBlockExternalEgress: s,
      surface: c,
      appearance: l,
      onOpenLibrary: u,
      sharedEntityId: d,
      savedTarget: f,
      allowSavedEntitiesLayerFallback: p,
    } = e,
    h = p !== void 0 && p,
    _ = o(g),
    v = o(y);
  if (a == null || _ == null || s) return null;
  let b;
  n[0] !== a || n[1] !== f
    ? ((b = JSON.stringify(f ?? w(a).saved_target)), (n[0] = a), (n[1] = f), (n[2] = b))
    : (b = n[2]);
  let x;
  n[3] !== h ||
  n[4] !== r ||
  n[5] !== i ||
  n[6] !== u ||
  n[7] !== a ||
  n[8] !== f ||
  n[9] !== c ||
  n[10] !== b
    ? ((x = (0, V.jsx)(
        z,
        {
          conversationId: r,
          messageId: i,
          place: a,
          savedTarget: f,
          surface: c,
          allowSavedEntitiesLayerFallback: h,
          onOpenLibrary: u,
        },
        b,
      )),
      (n[3] = h),
      (n[4] = r),
      (n[5] = i),
      (n[6] = u),
      (n[7] = a),
      (n[8] = f),
      (n[9] = c),
      (n[10] = b),
      (n[11] = x))
    : (x = n[11]);
  let S = x,
    C;
  n[12] !== _ || n[13] !== v
    ? ((C = { accountId: _, userId: v }), (n[12] = _), (n[13] = v), (n[14] = C))
    : (C = n[14]);
  let T;
  n[15] === a ? (T = n[16]) : ((T = JSON.stringify(m(a))), (n[15] = a), (n[16] = T));
  let E = l ?? (c === `entity_sidebar` ? `entity-header` : `map-control`),
    D;
  n[17] !== a || n[18] !== d || n[19] !== T || n[20] !== E
    ? ((D = (0, V.jsx)(I, { appearance: E, place: a, sharedEntityId: d }, T)),
      (n[17] = a),
      (n[18] = d),
      (n[19] = T),
      (n[20] = E),
      (n[21] = D))
    : (D = n[21]);
  let k;
  return (
    n[22] !== S || n[23] !== C || n[24] !== D
      ? ((k = (0, V.jsxs)(t, { scope: O, value: C, children: [S, D] })),
        (n[22] = S),
        (n[23] = C),
        (n[24] = D),
        (n[25] = k))
      : (k = n[25]),
    k
  );
}
function I(e) {
  let t = (0, B.c)(21),
    { appearance: i, place: o, sharedEntityId: c } = e,
    l = r(O),
    u = a(),
    d = f(T, `684824188`),
    p;
  t[0] === o ? (p = t[1]) : ((p = m(o)), (t[0] = o), (t[1] = p));
  let g = p,
    _;
  t[2] === c
    ? (_ = t[3])
    : ((_ = c != null && /^lbe1_[A-Za-z0-9_-]{24}$/.test(c) ? R(c, L()) : null), (t[2] = c), (t[3] = _));
  let v = _;
  if (!d || (g == null && v == null)) return null;
  let y;
  t[4] === u
    ? (y = t[5])
    : ((y = u.formatMessage({
        id: `chatgpt.immersiveMap.sharePlace`,
        defaultMessage: `Share place`,
        description: `Accessible label and tooltip for creating and copying a public link to the selected place in a local business sidebar or fullscreen Maps`,
      })),
      (t[4] = u),
      (t[5] = y));
  let x = y,
    S = i === `entity-header` ? `ghostActive` : `mapSurface`,
    C = i === `entity-header` ? `default` : `full`,
    w = i === `entity-header` ? `entityHeader` : `inputIcon`,
    E;
  t[6] !== v || t[7] !== g || t[8] !== l
    ? ((E = async () => {
        if (v != null) return v;
        if (g == null) throw Error(`Place sharing identity is unavailable`);
        let e = await l
            .get(h)
            .safePost(`/local/entity-shares`, { requestBody: { entity_key: g.entity_key } }),
          t = R(e.entity_id);
        if (
          !/^lbe1_[A-Za-z0-9_-]{24}$/.test(e.entity_id) ||
          (g.entity_lookup_id != null && g.entity_lookup_id !== e.entity_id) ||
          e.url !== t
        )
          throw Error(`Local entity sharing identity does not match`);
        return R(e.entity_id, L());
      }),
      (t[6] = v),
      (t[7] = g),
      (t[8] = l),
      (t[9] = E))
    : (E = t[9]);
  let D, k;
  t[10] === l
    ? ((D = t[11]), (k = t[12]))
    : ((D = () => b(l)),
      (k = () => {
        l.get(s).danger(
          (0, V.jsx)(n, {
            id: `chatgpt.immersiveMap.shareFailed`,
            defaultMessage: `Couldn’t share this place. Try again`,
            description: `Error message when creating or copying a place share link fails in a local business sidebar or fullscreen Maps`,
          }),
          { errorAnalytics: { toastId: `chatgpt.immersiveMap.shareFailed` } },
        );
      }),
      (t[10] = l),
      (t[11] = D),
      (t[12] = k));
  let A;
  return (
    t[13] !== x || t[14] !== S || t[15] !== C || t[16] !== w || t[17] !== E || t[18] !== D || t[19] !== k
      ? ((A = (0, V.jsx)(M, {
          label: x,
          color: S,
          radius: C,
          size: w,
          getUrl: E,
          onCopied: D,
          onCopyFailed: k,
        })),
        (t[13] = x),
        (t[14] = S),
        (t[15] = C),
        (t[16] = w),
        (t[17] = E),
        (t[18] = D),
        (t[19] = k),
        (t[20] = A))
      : (A = t[20]),
    A
  );
}
function L() {
  return H;
}
function R(e, t = H) {
  return new URL(`/maps/${e}`, t).toString();
}
function z(e) {
  let t = (0, B.c)(19),
    {
      conversationId: n,
      messageId: r,
      place: i,
      savedTarget: a,
      surface: o,
      allowSavedEntitiesLayerFallback: s,
      onOpenLibrary: c,
    } = e,
    { client: l } = S(),
    u = E(`2347841422`),
    d = i.category ?? `local_business`,
    f;
  t[0] !== d || t[1] !== u
    ? ((f = u.get(`enabled_entity_categories`, []).includes(d)), (t[0] = d), (t[1] = u), (t[2] = f))
    : (f = t[2]);
  let m = f,
    h;
  t[3] !== s || t[4] !== m || t[5] !== l || t[6] !== o
    ? ((h =
        v(l, `3333071866`, { disableExposureLog: !m }).get(`enabled`, !1) === !0 ||
        ((o === `entity_sidebar` || s) &&
          p(l, `2534086513`, { disableExposureLog: !m }).get(`enable-saved-entities`, !1))),
      (t[3] = s),
      (t[4] = m),
      (t[5] = l),
      (t[6] = o),
      (t[7] = h))
    : (h = t[7]);
  let g = h,
    _;
  t[8] === i ? (_ = t[9]) : ((_ = w(i)), (t[8] = i), (t[9] = _));
  let y = _,
    b;
  return (
    t[10] !== m ||
    t[11] !== n ||
    t[12] !== g ||
    t[13] !== r ||
    t[14] !== c ||
    t[15] !== y ||
    t[16] !== a ||
    t[17] !== o
      ? ((b =
          !m || !g
            ? null
            : (0, V.jsx)(P, {
                appearance: `entity-header`,
                conversationId: n,
                messageId: r,
                request: { ...y, saved_target: a ?? y.saved_target },
                surface: o,
                onOpenLibrary: c,
              })),
        (t[10] = m),
        (t[11] = n),
        (t[12] = g),
        (t[13] = r),
        (t[14] = c),
        (t[15] = y),
        (t[16] = a),
        (t[17] = o),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
var B, V, H;
function U() {
  return (U = e(() => {
    ((B = u()),
      i(),
      c(),
      D(),
      l(),
      A(),
      j(),
      k(),
      x(),
      _(),
      N(),
      C(),
      (V = d()),
      (H = `https://chatgpt.com`));
  }))();
}
export { U as n, F as t };
//# sourceMappingURL=entity-actions-7f50cb680eab.js.map
