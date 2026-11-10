import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $d as n,
  Cot as r,
  DV as i,
  IDt as a,
  Ixt as o,
  Kat as s,
  Mz as c,
  Nz as l,
  Pxt as u,
  TJ as d,
  VDt as f,
  bx as p,
  e3 as m,
  ef as h,
  iO as g,
  jDt as _,
  not as v,
  oot as y,
  qat as b,
  rO as x,
  rst as S,
  spt as C,
  sq as w,
  t3 as T,
  vzt as E,
  wot as D,
  xMt as O,
  yx as ee,
  yzt as te,
  zxt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  $5 as ne,
  A0 as re,
  Fnn as ie,
  GGn as ae,
  GMr as oe,
  H7 as se,
  Inn as ce,
  JPn as le,
  N as ue,
  O0 as A,
  P as de,
  QGn as fe,
  U7 as j,
  XPn as pe,
  Y5 as me,
  YMr as M,
  Ymr as he,
  c9 as N,
  cbn as P,
  dbn as ge,
  ehr as _e,
  fbn as F,
  fur as ve,
  nEt as ye,
  nKn as be,
  nur as I,
  o9 as xe,
  pbn as Se,
  pur as L,
  rur as Ce,
  t9 as we,
  tEt as R,
  tNr as Te,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ee, t as De } from "./parsePhoneNumber-1c038b3a80d8.js";
function z(e) {
  let t = (0, B.c)(12),
    { children: n, description: r, disclaimer: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, V.jsx)(`div`, {
        className: `flex min-w-0 flex-1 flex-col items-center justify-center gap-2`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = r == null ? null : (0, V.jsx)(`div`, { className: `shrink-0`, children: r })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, V.jsxs)(`div`, {
        className: `flex min-h-55.5 min-w-0 flex-1 flex-col gap-3 rounded-2xl bg-text/5 px-6 py-5 @max-xs/contact-setup:min-h-88`,
        children: [a, o],
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === i
    ? (c = t[8])
    : ((c = i == null ? null : (0, V.jsx)(`div`, { className: `shrink-0`, children: i })),
      (t[7] = i),
      (t[8] = c));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, V.jsxs)(`div`, {
          className: `flex w-full min-w-0 flex-1 flex-col gap-3 text-center`,
          children: [s, c],
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Oe({
  title: e,
  description: t,
  icon: r = (0, V.jsx)(c, { asset: n, className: `text-secondary` }),
  titleAs: i = `h3`,
  role: a,
}) {
  return (0, V.jsxs)(z, {
    description: null,
    children: [
      r,
      (0, V.jsxs)(`div`, {
        className: `flex flex-col gap-3 select-none`,
        children: [
          (0, V.jsx)(i, { className: `text-base font-semibold`, children: e }),
          (0, V.jsx)(`div`, { className: `px-6 text-sm text-secondary`, role: a, children: t }),
        ],
      }),
    ],
  });
}
function ke() {
  let e = (0, B.c)(3),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, V.jsx)(R, {
        className: `mx-auto h-3 w-48 max-w-full rounded`,
        variant: `prominent`,
        "aria-hidden": !0,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, V.jsx)(z, {
        description: n,
        children: (0, V.jsxs)(`div`, {
          className: `flex w-full flex-col items-center gap-3`,
          "aria-hidden": !0,
          children: [
            (0, V.jsx)(R, { className: `h-7 w-32 max-w-full rounded-md`, variant: `prominent` }),
            (0, V.jsx)(R, { className: `h-4 w-24 max-w-full rounded`, variant: `prominent` }),
          ],
        }),
      })),
      (e[1] = r))
    : (r = e[1]);
  let i;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, V.jsxs)(`div`, {
          className: `flex flex-1 flex-col gap-6`,
          role: `status`,
          children: [
            r,
            (0, V.jsx)(t, {
              color: `primary`,
              size: `detailAction`,
              loading: !0,
              disabled: !0,
              children: (0, V.jsx)(a, {
                id: `restricted.aeon.contact.loading`,
                defaultMessage: `Loading…`,
                description: `Status and disabled action while the selected contact channel loads`,
              }),
            }),
          ],
        })),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = E()), h(), _(), T(), l(), ye(), (V = O()));
  }))();
}
async function Ae(e, t) {
  try {
    var n = v();
    let i = e.get(oe),
      a = e.get(M);
    if (i == null || a == null) throw Error(`Contact export requires an authenticated account`);
    let o = () => {
        if (e.get(oe) !== i || e.get(M) !== a) throw new DOMException(`Account changed`, `AbortError`);
      },
      c = await he.getResponse(`/aeon-messaging/texting/contact-card`, {
        additionalHeaders: { [C]: i },
        expectedIdentity: { accountId: i, userId: a },
        assertRequestCurrent: o,
        parameters: { query: { expected_thread_id: t } },
        retry: !1,
      });
    if (!c.headers.get(`content-type`)?.startsWith(`text/vcard`))
      throw (await c.body?.cancel(), Error(`Contact export did not return a contact card`));
    let l = new Uint8Array(await c.arrayBuffer());
    if ((o(), I() !== `macOS`)) {
      ae(new Blob([l], { type: `text/vcard;charset=utf-8` }), `dot.vcf`);
      return;
    }
    let u = s.workspaceFiles,
      d = n.u(await Promise.resolve(u.createTemporaryFile)),
      f = n.u(await Promise.resolve(u.releaseTemporaryFile));
    if (d == null || f == null) throw Error(`Contact export is unavailable`);
    let p = n.u(await u.createTemporaryFile?.({ bytes: l, fileName: `dot.vcf` }));
    if (p == null) throw Error(`Contact export is unavailable`);
    try {
      try {
        var r = v();
        if (
          (o(),
          !r.u(
            await s.openIn.open({
              path: p.path,
              target: `systemDefault`,
              appPath: `/System/Applications/Contacts.app`,
              hostId: `local`,
              cwd: null,
            }),
          ).success)
        )
          throw Error(`Could not open Contacts`);
      } catch (e) {
        r.e = e;
      } finally {
        r.d();
      }
    } catch (e) {
      throw (await u.releaseTemporaryFile?.({ path: p.path }), e);
    }
  } catch (e) {
    n.e = e;
  } finally {
    n.d();
  }
}
function U() {
  return (U = e(() => {
    (S(), Te(), _e(), Ce(), b(), y());
  }))();
}
function je(e) {
  let t = (0, W.c)(19),
    { value: n, ariaLabel: r, conversationId: i } = e,
    a = k(i == null ? null : me, i),
    o = a?.kind === `snapshot` && a.inlineSrc == null,
    s;
  t[0] === o ? (s = t[1]) : ((s = { enabled: o }), (t[0] = o), (t[1] = s));
  let { src: c } = be(a?.kind === `snapshot` ? a.assetPointer : ``, K, s),
    l;
  if (a?.kind === `image`) {
    let e = a.src === j,
      n;
    (t[2] !== a.src || t[3] !== e
      ? ((n = { src: a.src, fillSilhouette: e }), (t[2] = a.src), (t[3] = e), (t[4] = n))
      : (n = t[4]),
      (l = n));
  } else if (a?.kind === `snapshot`) {
    let e = a.inlineSrc ?? c ?? a.fallbackSrc,
      n = e === j,
      r;
    (t[5] !== e || t[6] !== n
      ? ((r = { src: e, fillSilhouette: n }), (t[5] = e), (t[6] = n), (t[7] = r))
      : (r = t[7]),
      (l = r));
  } else if (a?.kind === `pet`) {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = xe(`idle`, !0)), (t[8] = e)) : (e = t[8]);
    let n = e.frames[0],
      r = N.columns,
      i = a.spriteRowCount ?? N.rows,
      o = n.rowIndex / i,
      s = 1 / i,
      c;
    t[9] !== o || t[10] !== s
      ? ((c = { x: n.columnIndex / r, y: o, width: 1 / r, height: s }), (t[9] = o), (t[10] = s), (t[11] = c))
      : (c = t[11]);
    let u;
    (t[12] !== a.spritesheetUrl || t[13] !== c
      ? ((u = { src: a.spritesheetUrl, crop: c }), (t[12] = a.spritesheetUrl), (t[13] = c), (t[14] = u))
      : (u = t[14]),
      (l = u));
  }
  let u;
  return (
    t[15] !== r || t[16] !== l || t[17] !== n
      ? ((u = (0, G.jsx)(ue, { value: n, ariaLabel: r, size: `compact`, portrait: l, fallback: null })),
        (t[15] = r),
        (t[16] = l),
        (t[17] = n),
        (t[18] = u))
      : (u = t[18]),
    u
  );
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = E()), we(), u(), se(), ce(), de(), ne(), fe(), (G = O()), (K = ie()));
  }))();
}
function J(e, t, n, r, i) {
  let a = n == null || Se(n) ? `dot` : n.trim(),
    o = r?.trim(),
    s = o
      ? e.formatMessage(
          {
            id: `restricted.aeon.messaging.greeting.withSender`,
            defaultMessage: `Hey {name}, it's {sender}!`,
            description: `Editable text-message draft introducing the user by their first name (sender), which may contain multiple words. name is the dot's custom name, or the lowercase untranslated product name dot. No message is sent automatically.`,
          },
          { name: a, sender: o },
        )
      : e.formatMessage(
          {
            id: `restricted.aeon.messaging.greeting.withoutSender`,
            defaultMessage: `Hey {name}!`,
            description: `Editable text-message draft used when the user's first name is unavailable. name is the dot's custom name, or the lowercase untranslated product name dot. No message is sent automatically.`,
          },
          { name: a },
        );
  return `sms:${t}${i === `messages` ? `&` : `?&`}body=${encodeURIComponent(s)}`;
}
function Y() {
  return (Y = e(() => {
    F();
  }))();
}
function Me(e) {
  let t = (0, X.c)(47),
    { destination: n, orbitName: r, conversationId: o } = e,
    s = f(),
    { accountId: c, userId: l } = L(),
    u;
  t[0] !== c || t[1] !== l
    ? ((u = { accountId: c, userId: l }), (t[0] = c), (t[1] = l), (t[2] = u))
    : (u = t[2]);
  let { data: d } = k(A, u),
    p = k(P, o),
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    S;
  if (t[3] !== o || t[4] !== n || t[5] !== s || t[6] !== r || t[7] !== p || t[8] !== d?.first_name) {
    let e = Ee(n),
      i = r ?? p,
      c = d?.first_name,
      l;
    t[17] !== n || t[18] !== s || t[19] !== c || t[20] !== i
      ? ((l = J(s, n, i, c, `qr`)), (t[17] = n), (t[18] = s), (t[19] = c), (t[20] = i), (t[21] = l))
      : (l = t[21]);
    let u = l;
    b = `flex min-w-0 flex-col items-center gap-3`;
    let f;
    (t[22] === s
      ? (f = t[23])
      : ((f = s.formatMessage(
          {
            id: `restricted.aeon.messaging.textQrCode.label.productName`,
            defaultMessage: `QR code to text your {dot}`,
            description: `Accessible label for a QR code that opens a message addressed to the user's dot. It does not send a message. The dot placeholder is the untranslated term for the user's agent.`,
          },
          { dot: `dot` },
        )),
        (t[22] = s),
        (t[23] = f)),
      t[24] !== o || t[25] !== u || t[26] !== f
        ? ((S = (0, Q.jsx)(je, { value: u, ariaLabel: f, conversationId: o })),
          (t[24] = o),
          (t[25] = u),
          (t[26] = f),
          (t[27] = S))
        : (S = t[27]),
      (y = `text-sm text-secondary select-none`),
      (m = a),
      (g = `restricted.aeon.messaging.textQrCode.scanToText`),
      (_ = `Scan QR code to start texting <number>{phoneNumber}</number>`),
      (v = `Instruction to scan a QR code to start texting the user's dot. phoneNumber is the destination phone number; the number tag masks the number in session recordings.`),
      (h = e?.countryCallingCode === `1` ? `+1 ${e.formatNational()}` : (e?.formatInternational() ?? n)),
      (t[3] = o),
      (t[4] = n),
      (t[5] = s),
      (t[6] = r),
      (t[7] = p),
      (t[8] = d?.first_name),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = S));
  } else
    ((m = t[9]), (h = t[10]), (g = t[11]), (_ = t[12]), (v = t[13]), (y = t[14]), (b = t[15]), (S = t[16]));
  let C;
  t[28] !== n || t[29] !== s
    ? ((C = (e) =>
        (0, Q.jsxs)(
          `span`,
          {
            className: `inline-flex items-center gap-1`,
            "data-dd-privacy": `mask`,
            children: [
              e,
              (0, Q.jsx)(ee, {
                variant: `inline`,
                iconOnly: !0,
                ariaLabel: s.formatMessage({
                  id: `restricted.aeon.messaging.textQrCode.copyPhoneNumber`,
                  defaultMessage: `Copy phone number`,
                  description: `Accessible label for the icon button beside the dot's phone number that copies it to the clipboard`,
                }),
                icons: { copy: (0, Q.jsx)(w, {}), copied: (0, Q.jsx)(i, {}) },
                onCopy: (e) => x(n, e),
              }),
            ],
          },
          `phone-number`,
        )),
      (t[28] = n),
      (t[29] = s),
      (t[30] = C))
    : (C = t[30]);
  let T;
  t[31] !== h || t[32] !== C
    ? ((T = { phoneNumber: h, number: C }), (t[31] = h), (t[32] = C), (t[33] = T))
    : (T = t[33]);
  let E;
  t[34] !== m || t[35] !== T || t[36] !== g || t[37] !== _ || t[38] !== v
    ? ((E = (0, Q.jsx)(m, { id: g, defaultMessage: _, description: v, values: T })),
      (t[34] = m),
      (t[35] = T),
      (t[36] = g),
      (t[37] = _),
      (t[38] = v),
      (t[39] = E))
    : (E = t[39]);
  let D;
  t[40] !== E || t[41] !== y
    ? ((D = (0, Q.jsx)(`p`, { className: y, children: E })), (t[40] = E), (t[41] = y), (t[42] = D))
    : (D = t[42]);
  let O;
  return (
    t[43] !== D || t[44] !== b || t[45] !== S
      ? ((O = (0, Q.jsxs)(`div`, { className: b, children: [S, D] })),
        (t[43] = D),
        (t[44] = b),
        (t[45] = S),
        (t[46] = O))
      : (O = t[46]),
    O
  );
}
function Ne(e) {
  let n = (0, X.c)(22),
    { destination: i, orbitName: s, conversationId: c, size: l, children: u } = e,
    d = l === void 0 ? `detailAction` : l,
    f = o(r),
    [p, m] = (0, Z.useState)(`idle`),
    h = p === `opening`,
    g;
  n[0] !== c || n[1] !== f
    ? ((g = () => {
        (m(`opening`),
          Ae(f, c).then(
            () => m(`idle`),
            () => m(`error`),
          ));
      }),
      (n[0] = c),
      (n[1] = f),
      (n[2] = g))
    : (g = n[2]);
  let _;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(Q.Fragment, {
        children: (0, Q.jsx)(a, {
          id: `restricted.aeon.messaging.textQrCode.addToContacts`,
          defaultMessage: `Add contact`,
          description: `Button to open or download a contact card prefilled with the dot's name, phone number, and profile photo when available, so the user can review and save it in their contacts app`,
        }),
      })),
      (n[3] = _))
    : (_ = n[3]);
  let v;
  n[4] !== d || n[5] !== h || n[6] !== g
    ? ((v = (0, Q.jsxs)(t, {
        className: `flex-1`,
        color: `outline`,
        size: d,
        type: `button`,
        disabled: h,
        onClick: g,
        children: [null, _],
      })),
      (n[4] = d),
      (n[5] = h),
      (n[6] = g),
      (n[7] = v))
    : (v = n[7]);
  let y;
  n[8] !== c || n[9] !== i || n[10] !== s || n[11] !== d
    ? ((y = (0, Q.jsx)(Pe, { destination: i, orbitName: s, conversationId: c, size: d })),
      (n[8] = c),
      (n[9] = i),
      (n[10] = s),
      (n[11] = d),
      (n[12] = y))
    : (y = n[12]);
  let b;
  n[13] !== v || n[14] !== y
    ? ((b = (0, Q.jsxs)(`div`, { className: `flex gap-2`, children: [v, y] })),
      (n[13] = v),
      (n[14] = y),
      (n[15] = b))
    : (b = n[15]);
  let x;
  n[16] === p
    ? (x = n[17])
    : ((x =
        p === `error`
          ? (0, Q.jsx)(`p`, {
              className: `text-sm text-danger select-none`,
              role: `alert`,
              children: (0, Q.jsx)(a, {
                id: `restricted.aeon.messaging.textQrCode.contactFailed`,
                defaultMessage: `Couldn’t open the contact card. Please try again`,
                description: `Error when opening or downloading the prefilled contact card fails; the user can retry by clicking Add contact`,
              }),
            })
          : null),
      (n[16] = p),
      (n[17] = x));
  let S;
  return (
    n[18] !== u || n[19] !== b || n[20] !== x
      ? ((S = (0, Q.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-3`, children: [b, x, u] })),
        (n[18] = u),
        (n[19] = b),
        (n[20] = x),
        (n[21] = S))
      : (S = n[21]),
    S
  );
}
function Pe(e) {
  let n = (0, X.c)(21),
    { destination: r, orbitName: i, conversationId: o, size: s } = e,
    c = s === void 0 ? `detailAction` : s,
    l = f(),
    { accountId: u, userId: d } = L(),
    p;
  n[0] !== u || n[1] !== d
    ? ((p = { accountId: u, userId: d }), (n[0] = u), (n[1] = d), (n[2] = p))
    : (p = n[2]);
  let { data: h } = k(A, p),
    g = k(P, o),
    _ = i ?? g,
    v = h?.first_name,
    y;
  n[3] !== r || n[4] !== l || n[5] !== _ || n[6] !== v
    ? ((y = J(l, r, _, v, `messages`)), (n[3] = r), (n[4] = l), (n[5] = _), (n[6] = v), (n[7] = y))
    : (y = n[7]);
  let b = y;
  if (I() !== `macOS`) {
    let e;
    n[8] === r ? (e = n[9]) : ((e = (e) => void x(r, e)), (n[8] = r), (n[9] = e));
    let i;
    n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(a, {
          id: `restricted.aeon.messaging.textQrCode.copyNumber`,
          defaultMessage: `Copy number`,
          description: `Copies the dot's destination phone number so the user can text it from their phone`,
        })),
        (n[10] = i))
      : (i = n[10]);
    let o;
    return (
      n[11] !== c || n[12] !== e
        ? ((o = (0, Q.jsx)(t, {
            className: `flex-1`,
            color: `primary`,
            size: c,
            type: `button`,
            onClick: e,
            children: i,
          })),
          (n[11] = c),
          (n[12] = e),
          (n[13] = o))
        : (o = n[13]),
      o
    );
  }
  let S;
  n[14] === b
    ? (S = n[15])
    : ((S = (e) => pe({ event: e, href: b, initiator: `side_panel_menu` })), (n[14] = b), (n[15] = S));
  let C;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(a, {
        id: `restricted.aeon.messaging.success.openMessages`,
        defaultMessage: `Open Messages`,
        description: `Opens Messages on Mac with the dot's destination phone number prefilled as the recipient`,
      })),
      (n[16] = C))
    : (C = n[16]);
  let w;
  return (
    n[17] !== b || n[18] !== c || n[19] !== S
      ? ((w = (0, Q.jsx)(m, {
          className: `flex-1`,
          href: b,
          color: `primary`,
          size: c,
          onClick: S,
          children: C,
        })),
        (n[17] = b),
        (n[18] = c),
        (n[19] = S),
        (n[20] = w))
      : (w = n[20]),
    w
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = E()),
      De(),
      u(),
      (Z = te()),
      _(),
      ve(),
      re(),
      T(),
      p(),
      le(),
      d(),
      Ce(),
      F(),
      ge(),
      D(),
      g(),
      U(),
      q(),
      Y(),
      (Q = O()));
  }))();
}
export { ke as a, Oe as i, Me as n, z as o, $ as r, H as s, Ne as t };
//# sourceMappingURL=text-message-instructions-c51c87e9d826.js.map
