import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Bb as n,
  Cot as r,
  DG as i,
  Hb as a,
  IDt as o,
  Ixt as s,
  JR as c,
  Mz as l,
  Nz as u,
  Pxt as d,
  TJ as f,
  VDt as p,
  Vb as m,
  Vxt as h,
  Xot as g,
  YR as _,
  Yot as v,
  _Mt as y,
  gMt as b,
  i3 as x,
  jDt as S,
  r3 as C,
  t3 as w,
  vzt as T,
  wot as E,
  xMt as D,
  yzt as O,
  zb as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  $7 as A,
  A7 as j,
  F7 as M,
  G5 as N,
  H7 as P,
  J7 as F,
  R7 as I,
  STn as L,
  U7 as R,
  Y7 as z,
  b7 as ee,
  e9 as B,
  eDr as V,
  i9 as H,
  k7 as U,
  nDr as te,
  nEt as W,
  q5 as G,
  t9 as K,
  tEt as ne,
  x7 as re,
  xTn as q,
} from "./app-initial-5851df3f6cb1.js";
import { n as J, t as ie } from "./appearance-picker-button-c44f9fe2eb96.js";
import { n as ae, t as oe } from "./use-avatar-options-56495836bfd6.js";
function se(e) {
  let t = (0, ce.c)(16),
    { controls: n, title: r, preview: i, footer: a, loadingLabel: o } = e,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = (0, Y.jsx)(`div`, {
        className: `order-2 flex min-h-0 min-w-0 flex-col sm:order-1 sm:col-span-3`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c =
        o != null &&
        (0, Y.jsxs)(`div`, {
          className: b(
            `pointer-events-none absolute inset-0 flex items-center justify-center bg-surface-secondary/70 dark:bg-surface-tertiary/70`,
            L.delayedIndicator,
          ),
          role: `status`,
          children: [(0, Y.jsx)(C, {}), (0, Y.jsx)(`span`, { className: `sr-only`, children: o })],
        })),
      (t[2] = o),
      (t[3] = c));
  let l;
  t[4] !== i || t[5] !== c
    ? ((l = (0, Y.jsxs)(`div`, {
        className: `relative -mx-8 flex h-56 min-h-0 items-center justify-center overflow-hidden sm:h-auto sm:flex-1`,
        children: [i, c],
      })),
      (t[4] = i),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === a
    ? (u = t[8])
    : ((u = (0, Y.jsx)(`div`, { className: `flex flex-col gap-3`, children: a })), (t[7] = a), (t[8] = u));
  let d;
  t[9] !== l || t[10] !== u || t[11] !== r
    ? ((d = (0, Y.jsxs)(`div`, {
        className: `order-1 flex min-h-0 min-w-0 flex-col gap-4 border-b border-subtle bg-surface-secondary px-8 pt-14 pb-8 sm:order-2 sm:col-span-2 sm:border-s sm:border-b-0 dark:bg-surface-tertiary`,
        children: [r, l, u],
      })),
      (t[9] = l),
      (t[10] = u),
      (t[11] = r),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== s || t[14] !== d
      ? ((f = (0, Y.jsxs)(`div`, {
          className: `grid grid-cols-1 sm:h-120 sm:min-h-0 sm:grid-cols-5 sm:grid-rows-1`,
          children: [s, d],
        })),
        (t[13] = s),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
var ce, Y;
function le() {
  return (le = e(() => {
    ((ce = T()), y(), x(), q(), (Y = D()));
  }))();
}
function ue(e) {
  let t = (0, de.c)(11),
    { disabled: r, onCreate: i } = e,
    a = r !== void 0 && r,
    o = p(),
    s;
  t[0] === i ? (s = t[1]) : ((s = () => i?.()), (t[0] = i), (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = o.formatMessage({
        id: `restricted.avatarChooser.createPet`,
        defaultMessage: `Create a pet`,
        description: `Open the pet creation experience from the avatar chooser`,
      })),
      (t[2] = o),
      (t[3] = c));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, fe.jsx)(`span`, {
        className: `flex size-full items-center justify-center rounded-full bg-text/10`,
        children: (0, fe.jsx)(l, { asset: n }),
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === c ? (d = t[6]) : ((d = [{ id: `create-pet`, label: c, icon: u }]), (t[5] = c), (t[6] = d));
  let f;
  return (
    t[7] !== a || t[8] !== s || t[9] !== d
      ? ((f = (0, fe.jsx)(ie, {
          variant: `artwork-row`,
          selectedId: null,
          disabled: a,
          onChange: s,
          options: d,
        })),
        (t[7] = a),
        (t[8] = s),
        (t[9] = d),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
var de, fe;
function pe() {
  return (pe = e(() => {
    ((de = T()), k(), S(), u(), J(), (fe = D()));
  }))();
}
function me(e) {
  let n = (0, _e.c)(35),
    { selectedPet: i, disabled: a, onSelect: c, layout: l, heading: u, onCreatePet: d } = e,
    f = l === void 0 ? `grid` : l,
    p = s(r),
    { avatarOptions: m, isLoading: g, isError: v } = ae(),
    { isError: y } = h(M),
    b = _(),
    x = f === `row` ? `artwork-row` : `artwork`,
    S = f === `row`,
    C;
  n[0] !== a || n[1] !== d
    ? ((C = d ? (0, X.jsx)(ue, { disabled: a, onCreate: d }) : void 0), (n[0] = a), (n[1] = d), (n[2] = C))
    : (C = n[2]);
  let w;
  n[3] !== g || n[4] !== b
    ? ((w = g
        ? {
            count: 5,
            icon: (0, X.jsx)(ne, { className: `size-full rounded-full`, variant: `prominent`, animate: !b }),
          }
        : void 0),
      (n[3] = g),
      (n[4] = b),
      (n[5] = w))
    : (w = n[5]);
  let T;
  n[6] !== m || n[7] !== g ? ((T = g ? [] : m), (n[6] = m), (n[7] = g), (n[8] = T)) : (T = n[8]);
  let E;
  n[9] === T ? (E = n[10]) : ((E = T.map(he)), (n[9] = T), (n[10] = E));
  let D = i?.id ?? null,
    O;
  n[11] !== m || n[12] !== c
    ? ((O = (e) => {
        let t = m.find((t) => t.id === e);
        t != null && c?.(t);
      }),
      (n[11] = m),
      (n[12] = c),
      (n[13] = O))
    : (O = n[13]);
  let k;
  n[14] !== a ||
  n[15] !== u ||
  n[16] !== x ||
  n[17] !== S ||
  n[18] !== C ||
  n[19] !== w ||
  n[20] !== E ||
  n[21] !== D ||
  n[22] !== O
    ? ((k = (0, X.jsx)(ie, {
        heading: u,
        variant: x,
        fullBleed: S,
        disabled: a,
        leading: C,
        loadingItems: w,
        options: E,
        selectedId: D,
        onChange: O,
      })),
      (n[14] = a),
      (n[15] = u),
      (n[16] = x),
      (n[17] = S),
      (n[18] = C),
      (n[19] = w),
      (n[20] = E),
      (n[21] = D),
      (n[22] = O),
      (n[23] = k))
    : (k = n[23]);
  let A;
  n[24] === g
    ? (A = n[25])
    : ((A =
        g &&
        (0, X.jsx)(`p`, {
          className: `pt-3 text-sm text-secondary`,
          role: `status`,
          children: (0, X.jsx)(o, {
            id: `restricted.characterEditor.petsLoading`,
            defaultMessage: `Loading your pets…`,
            description: `Status while fetching saved pets for the dot appearance picker`,
          }),
        })),
      (n[24] = g),
      (n[25] = A));
  let j;
  n[26] !== y || n[27] !== a || n[28] !== v || n[29] !== p
    ? ((j =
        (v || y) &&
        (0, X.jsxs)(`div`, {
          className: `flex items-center gap-3 pt-3`,
          children: [
            (0, X.jsx)(`p`, {
              className: `text-sm text-danger`,
              role: `alert`,
              children: (0, X.jsx)(o, {
                id: `restricted.characterEditor.petsLoadError`,
                defaultMessage: `Some pets couldn’t be loaded`,
                description: `Error when the dot appearance picker could not load all saved pets`,
              }),
            }),
            (0, X.jsx)(t, {
              type: `button`,
              color: `ghost`,
              disabled: a,
              onClick: () => {
                (p.query.invalidate(U), p.query.invalidate(M));
              },
              children: (0, X.jsx)(o, {
                id: `restricted.characterEditor.petsRetry`,
                defaultMessage: `Try again`,
                description: `Button to reload saved pets in the dot appearance picker`,
              }),
            }),
          ],
        })),
      (n[26] = y),
      (n[27] = a),
      (n[28] = v),
      (n[29] = p),
      (n[30] = j))
    : (j = n[30]);
  let N;
  return (
    n[31] !== k || n[32] !== A || n[33] !== j
      ? ((N = (0, X.jsxs)(X.Fragment, { children: [k, A, j] })),
        (n[31] = k),
        (n[32] = A),
        (n[33] = j),
        (n[34] = N))
      : (N = n[34]),
    N
  );
}
function he(e) {
  return { id: e.id, label: e.displayName, icon: (0, X.jsx)(ge, { pet: e }) };
}
function ge(e) {
  let t = (0, _e.c)(21),
    { pet: n } = e,
    r = _(),
    i;
  t[0] === n ? (i = t[1]) : ((i = F(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o = a.spritesheetUrl ?? A[a.assetRef],
    s;
  t[2] === o ? (s = t[3]) : ((s = [`character-editor-pet-artwork`, o]), (t[2] = o), (t[3] = s));
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = async () => {
        let e = new Image();
        return ((e.src = o), await e.decode(), o);
      }),
      (t[4] = o),
      (t[5] = c));
  let l;
  t[6] !== s || t[7] !== c
    ? ((l = { queryKey: s, networkMode: `always`, queryFn: c, retry: !1, staleTime: 1 / 0 }),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l))
    : (l = t[8]);
  let { data: u, isPending: d, isError: f } = g(l),
    p;
  t[9] !== d || t[10] !== r
    ? ((p =
        d &&
        (0, X.jsx)(`span`, {
          className: `absolute inset-0 flex items-center justify-center`,
          "aria-hidden": `true`,
          children: (0, X.jsx)(ne, {
            className: `size-full rounded-full`,
            variant: `prominent`,
            animate: !r,
          }),
        })),
      (t[9] = d),
      (t[10] = r),
      (t[11] = p))
    : (p = t[11]);
  let m = !f && u !== o && `opacity-0`,
    h;
  t[12] === m
    ? (h = t[13])
    : ((h = b(
        `transition-opacity duration-basic ease-in-out motion-reduce:transition-none starting:opacity-0`,
        m,
      )),
      (t[12] = m),
      (t[13] = h));
  let v;
  t[14] !== a || t[15] !== o || t[16] !== h
    ? ((v = (0, X.jsx)(H, { className: h, size: `container`, assetMap: A, source: a }, o)),
      (t[14] = a),
      (t[15] = o),
      (t[16] = h),
      (t[17] = v))
    : (v = t[17]);
  let y;
  return (
    t[18] !== p || t[19] !== v
      ? ((y = (0, X.jsxs)(`span`, {
          className: `relative flex size-full items-center justify-center`,
          children: [p, v],
        })),
        (t[18] = p),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
var _e, X;
function ve() {
  return (ve = e(() => {
    ((_e = T()), K(), v(), y(), d(), S(), B(), z(), I(), j(), oe(), w(), W(), c(), J(), E(), pe(), (X = D()));
  }))();
}
function ye(e) {
  let t = (0, Ce.c)(43),
    { preset: n, client: r, active: a, reducedMotion: o, onFrame: s, onError: c } = e,
    l = (0, Z.useRef)(null),
    u = (0, Z.useRef)(null),
    [d, f] = (0, Z.useState)(!1),
    [p, m] = (0, Z.useState)(),
    [h, g] = (0, Z.useState)(),
    { id: _, thumbnail: v } = n,
    y = v !== void 0 && (v == null || h === v),
    x = !y && v != null && p === v,
    S = a && !o && d,
    C;
  t[0] === s ? (C = t[1]) : ((C = () => s?.()), (t[0] = s), (t[1] = C));
  let w = (0, Z.useEffectEvent)(C),
    T;
  t[2] === c ? (T = t[3]) : ((T = () => c?.()), (t[2] = c), (t[3] = T));
  let E = (0, Z.useEffectEvent)(T),
    D,
    O;
  (t[4] !== r || t[5] !== _
    ? ((D = () => {
        let e = l.current;
        if (!e || !r) return;
        let t = !1,
          n = new IntersectionObserver((e) => {
            let n = e.at(-1)?.isIntersecting ?? !1;
            t !== n && ((t = n), r.request({ action: `preset-thumbnail`, value: _, visible: t }).catch(Se));
          });
        return (
          n.observe(e),
          () => {
            (n.disconnect(), t && r.request({ action: `preset-thumbnail`, value: _, visible: !1 }).catch(xe));
          }
        );
      }),
      (O = [r, _]),
      (t[4] = r),
      (t[5] = _),
      (t[6] = D),
      (t[7] = O))
    : ((D = t[6]), (O = t[7])),
    (0, Z.useEffect)(D, O));
  let k;
  t[8] !== a || t[9] !== r || t[10] !== w || t[11] !== _ || t[12] !== E || t[13] !== o
    ? ((k = () => {
        let e = u.current;
        if (!e || !r || !a || o || typeof MessageChannel > `u`) return;
        let t,
          n,
          i = null,
          s = !1,
          c = () => {
            t &&
              (i?.transferFromImageBitmap(null),
              (i = null),
              (t.width = t.height = 0),
              (t = void 0),
              n?.port1.close(),
              n?.port2.close(),
              (n = void 0),
              f(!1),
              r.request({ action: `preset-preview-stop`, value: _ }).catch(be));
          },
          l = () => {
            ((s = !0), c(), E());
          },
          d = new IntersectionObserver((a) => {
            let o = a.at(-1);
            if (o) {
              if (!o.isIntersecting) {
                c();
                return;
              }
              if (!(t || s)) {
                ((e.width = e.height = 384), (t = e));
                try {
                  let t = e.getContext(`bitmaprenderer`);
                  if (((i = t), !t)) {
                    l();
                    return;
                  }
                  let a = new MessageChannel();
                  n = a;
                  let o = !1;
                  ((a.port1.onmessage = (e) => {
                    let { data: r } = e;
                    if (r == null) {
                      n === a && l();
                      return;
                    }
                    if (r instanceof ImageBitmap) {
                      if (n !== a) {
                        r.close();
                        return;
                      }
                      try {
                        (t.transferFromImageBitmap(r),
                          a.port1.postMessage(null),
                          o || ((o = !0), f(!0)),
                          w());
                      } catch {
                        (r.close(), l());
                      }
                    }
                  }),
                    r.request({ action: `preset-preview`, value: _, port: a.port2 }).catch(() => {
                      n === a && l();
                    }));
                } catch {
                  l();
                }
              }
            }
          });
        return (
          d.observe(e),
          () => {
            (d.disconnect(), c());
          }
        );
      }),
      (t[8] = a),
      (t[9] = r),
      (t[10] = w),
      (t[11] = _),
      (t[12] = E),
      (t[13] = o),
      (t[14] = k))
    : (k = t[14]);
  let A;
  (t[15] !== a || t[16] !== r || t[17] !== _ || t[18] !== o
    ? ((A = [a, r, _, o]), (t[15] = a), (t[16] = r), (t[17] = _), (t[18] = o), (t[19] = A))
    : (A = t[19]),
    (0, Z.useEffect)(k, A));
  let j = !S && !x && !y,
    M = S && `invisible`,
    N;
  t[20] === M ? (N = t[21]) : ((N = b(`block size-full`, M)), (t[20] = M), (t[21] = N));
  let P;
  t[22] !== o || t[23] !== y || t[24] !== x
    ? ((P =
        !x &&
        (0, Q.jsx)(`span`, {
          className: `absolute inset-0 flex items-center justify-center`,
          "aria-hidden": `true`,
          children: y
            ? (0, Q.jsx)(i, { className: `text-tertiary` })
            : (0, Q.jsx)(ne, { className: `size-full rounded-full`, variant: `prominent`, animate: !o }),
        })),
      (t[22] = o),
      (t[23] = y),
      (t[24] = x),
      (t[25] = P))
    : (P = t[25]);
  let F;
  t[26] !== o || t[27] !== v || t[28] !== y || t[29] !== x
    ? ((F =
        v &&
        !y &&
        (0, Q.jsx)(
          `img`,
          {
            className: b(
              `size-full object-contain`,
              !o &&
                `transition-opacity duration-basic ease-in-out motion-reduce:transition-none starting:opacity-0`,
              !x && `opacity-0`,
            ),
            src: v,
            loading: `lazy`,
            alt: ``,
            onLoad: () => m(v),
            onError: () => g(v),
          },
          v,
        )),
      (t[26] = o),
      (t[27] = v),
      (t[28] = y),
      (t[29] = x),
      (t[30] = F))
    : (F = t[30]);
  let I;
  t[31] !== P || t[32] !== F || t[33] !== N
    ? ((I = (0, Q.jsxs)(`span`, { className: N, children: [P, F] })),
      (t[31] = P),
      (t[32] = F),
      (t[33] = N),
      (t[34] = I))
    : (I = t[34]);
  let L = !S && `invisible`,
    R;
  t[35] === L
    ? (R = t[36])
    : ((R = b(`pointer-events-none absolute -inset-4 block size-24`, L)), (t[35] = L), (t[36] = R));
  let z;
  t[37] === R
    ? (z = t[38])
    : ((z = (0, Q.jsx)(`canvas`, {
        ref: u,
        className: R,
        width: 0,
        height: 0,
        tabIndex: -1,
        "aria-hidden": `true`,
      })),
      (t[37] = R),
      (t[38] = z));
  let ee;
  return (
    t[39] !== I || t[40] !== z || t[41] !== j
      ? ((ee = (0, Q.jsxs)(`span`, {
          ref: l,
          className: `relative block size-full`,
          "aria-busy": j,
          children: [I, z],
        })),
        (t[39] = I),
        (t[40] = z),
        (t[41] = j),
        (t[42] = ee))
      : (ee = t[42]),
    ee
  );
}
function be() {}
function xe() {}
function Se() {}
var Ce, Z, Q;
function we() {
  return (we = e(() => {
    ((Ce = T()), y(), (Z = O()), f(), W(), (Q = D()));
  }))();
}
function Te(e) {
  let t = (0, Ee.c)(76),
    {
      preview: n,
      client: r,
      reducedMotion: a,
      disabled: s,
      selectedTint: c,
      selectedPreset: u,
      customSelected: d,
      hasCustomCharacter: f,
      onTint: h,
      onPreset: g,
      onCustomize: _,
      onSelectCustom: v,
      pet: y,
      onSelectPet: x,
      petDisabled: S,
      onCreatePet: C,
    } = e,
    w = a !== void 0 && a,
    T = p(),
    E = te(`2631431308`),
    D = n?.catalog[ee.Color],
    [O, k] = (0, De.useState)(null),
    A = (0, De.useRef)(void 0),
    j,
    M;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => () => window.clearTimeout(A.current)), (M = []), (t[0] = j), (t[1] = M))
    : ((j = t[0]), (M = t[1])),
    (0, De.useEffect)(j, M));
  let P, F, I, L, z, B, V, H, U, W, G, K;
  if (
    t[2] !== O ||
    t[3] !== r ||
    t[4] !== D ||
    t[5] !== d ||
    t[6] !== s ||
    t[7] !== f ||
    t[8] !== T ||
    t[9] !== _ ||
    t[10] !== g ||
    t[11] !== v ||
    t[12] !== h ||
    t[13] !== n ||
    t[14] !== w ||
    t[15] !== u ||
    t[16] !== c
  ) {
    let e = function () {
      (window.clearTimeout(A.current), (A.current = void 0), k(null));
    };
    ((z = `flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-6 py-4 select-none`),
      t[29] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((B = (0, $.jsx)(`h2`, {
            className: `text-heading-lg leading-7 font-semibold`,
            children: (0, $.jsx)(o, {
              id: `restricted.avatarChooser.title`,
              defaultMessage: `Customize your dot`,
              description: `Heading of the assistant avatar chooser`,
            }),
          })),
          (t[29] = B))
        : (B = t[29]),
      (I = `my-auto flex shrink-0 flex-col gap-2`));
    let a;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(o, {
          id: `restricted.avatarChooser.colors`,
          defaultMessage: `Colors`,
          description: `Heading above colored ring avatars`,
        })),
        (t[30] = a))
      : (a = t[30]);
    let p;
    t[31] === h ? (p = t[32]) : ((p = (e) => h?.(e)), (t[31] = h), (t[32] = p));
    let y;
    (t[33] !== D || t[34] !== T || t[35] !== w
      ? ((y = N.options.map((e) => {
          let t = D?.find((t) => t.id === e);
          return {
            id: e,
            label:
              e === `gray`
                ? T.formatMessage({
                    id: `restricted.avatarChooser.gray`,
                    defaultMessage: `Gray`,
                    description: `Accessible name of the default gray ring avatar`,
                  })
                : (t?.title ?? e),
            icon:
              D == null
                ? (0, $.jsx)(ne, {
                    className: `size-full rounded-full`,
                    variant: `prominent`,
                    animate: !w,
                    "aria-hidden": `true`,
                  })
                : (0, $.jsx)(`span`, {
                    className: b(
                      `block size-full`,
                      !w &&
                        `transition-opacity duration-basic ease-in-out motion-reduce:transition-none starting:opacity-0`,
                    ),
                    children:
                      e === `gray`
                        ? (0, $.jsx)(`img`, { className: `size-full object-contain`, src: R, alt: `` })
                        : (0, $.jsx)(`span`, {
                            className: `block size-full mask-contain mask-center mask-no-repeat`,
                            style: { maskImage: `url("${R}")`, backgroundColor: t?.color },
                          }),
                  }),
            disabled: e !== `gray` && t == null,
          };
        })),
        (t[33] = D),
        (t[34] = T),
        (t[35] = w),
        (t[36] = y))
      : (y = t[36]),
      t[37] !== s || t[38] !== c || t[39] !== p || t[40] !== y
        ? ((L = (0, $.jsx)(ie, {
            heading: a,
            variant: `artwork-row`,
            fullBleed: !0,
            disabled: s,
            selectedId: c,
            onChange: p,
            options: y,
          })),
          (t[37] = s),
          (t[38] = c),
          (t[39] = p),
          (t[40] = y),
          (t[41] = L))
        : (L = t[41]),
      (P = ie),
      t[42] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((V = (0, $.jsx)(o, {
            id: `restricted.avatarChooser.characters`,
            defaultMessage: `Characters`,
            description: `Heading above preset characters and the custom character editor button`,
          })),
          (t[42] = V))
        : (V = t[42]),
      (H = `artwork-row`),
      (U = !0),
      (W = s),
      (G = d ? `custom` : u),
      (K = (t) => {
        if ((e(), t === `customize`)) {
          _?.();
          return;
        }
        if (t === `custom`) {
          v?.();
          return;
        }
        (w || k(t), g?.(t));
      }));
    let x;
    t[43] === T
      ? (x = t[44])
      : ((x = T.formatMessage({
          id: `restricted.avatarChooser.customize`,
          defaultMessage: `Customize`,
          description: `Button that opens the editor to create or edit the saved custom character`,
        })),
        (t[43] = T),
        (t[44] = x));
    let S;
    t[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, $.jsx)(`span`, {
          className: `flex size-full items-center justify-center rounded-full bg-text/10`,
          children: (0, $.jsx)(l, { asset: m }),
        })),
        (t[45] = S))
      : (S = t[45]);
    let C;
    t[46] === x
      ? (C = t[47])
      : ((C = { id: `customize`, action: !0, label: x, icon: S }), (t[46] = x), (t[47] = C));
    let E;
    (t[48] !== f || t[49] !== T || t[50] !== n
      ? ((E = f
          ? [
              {
                id: `custom`,
                label: T.formatMessage({
                  id: `restricted.avatarChooser.custom`,
                  defaultMessage: `Custom avatar`,
                  description: `Button that selects the saved custom character without opening the editor`,
                }),
                icon: n?.customThumbnail
                  ? (0, $.jsx)(`img`, {
                      className: `size-full object-contain`,
                      src: n.customThumbnail,
                      alt: ``,
                    })
                  : (0, $.jsx)(`span`, {
                      className: `flex size-full items-center justify-center`,
                      children: (0, $.jsx)(i, { className: `text-tertiary` }),
                    }),
              },
            ]
          : []),
        (t[48] = f),
        (t[49] = T),
        (t[50] = n),
        (t[51] = E))
      : (E = t[51]),
      (F = [
        C,
        ...E,
        ...(n?.presets.map((t) => ({
          id: t.id,
          label: t.title,
          icon: (0, $.jsx)(ye, {
            preset: t,
            client: r,
            active: !s && O === t.id,
            reducedMotion: w,
            onFrame:
              O === t.id
                ? () => {
                    A.current ??= window.setTimeout(e, 4e3);
                  }
                : void 0,
            onError: () => {
              O === t.id && e();
            },
          }),
        })) ?? []),
      ]),
      (t[2] = O),
      (t[3] = r),
      (t[4] = D),
      (t[5] = d),
      (t[6] = s),
      (t[7] = f),
      (t[8] = T),
      (t[9] = _),
      (t[10] = g),
      (t[11] = v),
      (t[12] = h),
      (t[13] = n),
      (t[14] = w),
      (t[15] = u),
      (t[16] = c),
      (t[17] = P),
      (t[18] = F),
      (t[19] = I),
      (t[20] = L),
      (t[21] = z),
      (t[22] = B),
      (t[23] = V),
      (t[24] = H),
      (t[25] = U),
      (t[26] = W),
      (t[27] = G),
      (t[28] = K));
  } else
    ((P = t[17]),
      (F = t[18]),
      (I = t[19]),
      (L = t[20]),
      (z = t[21]),
      (B = t[22]),
      (V = t[23]),
      (H = t[24]),
      (U = t[25]),
      (W = t[26]),
      (G = t[27]),
      (K = t[28]));
  let re;
  t[52] !== P ||
  t[53] !== F ||
  t[54] !== V ||
  t[55] !== H ||
  t[56] !== U ||
  t[57] !== W ||
  t[58] !== G ||
  t[59] !== K
    ? ((re = (0, $.jsx)(P, {
        heading: V,
        variant: H,
        fullBleed: U,
        disabled: W,
        selectedId: G,
        onChange: K,
        options: F,
      })),
      (t[52] = P),
      (t[53] = F),
      (t[54] = V),
      (t[55] = H),
      (t[56] = U),
      (t[57] = W),
      (t[58] = G),
      (t[59] = K),
      (t[60] = re))
    : (re = t[60]);
  let q;
  t[61] !== C || t[62] !== x || t[63] !== y || t[64] !== E || t[65] !== S
    ? ((q =
        E &&
        (0, $.jsx)(`div`, {
          className: `flex min-w-0 shrink-0 flex-col gap-2`,
          children: (0, $.jsx)(me, {
            heading: (0, $.jsx)(o, {
              id: `restricted.avatarChooser.pets`,
              defaultMessage: `Pets`,
              description: `Heading above available pet avatars`,
            }),
            selectedPet: y,
            disabled: S,
            onSelect: x,
            layout: `row`,
            onCreatePet: C,
          }),
        })),
      (t[61] = C),
      (t[62] = x),
      (t[63] = y),
      (t[64] = E),
      (t[65] = S),
      (t[66] = q))
    : (q = t[66]);
  let J;
  t[67] !== I || t[68] !== L || t[69] !== re || t[70] !== q
    ? ((J = (0, $.jsxs)(`div`, { className: I, children: [L, re, q] })),
      (t[67] = I),
      (t[68] = L),
      (t[69] = re),
      (t[70] = q),
      (t[71] = J))
    : (J = t[71]);
  let ae;
  return (
    t[72] !== z || t[73] !== B || t[74] !== J
      ? ((ae = (0, $.jsxs)(`div`, { className: z, children: [B, J] })),
        (t[72] = z),
        (t[73] = B),
        (t[74] = J),
        (t[75] = ae))
      : (ae = t[75]),
    ae
  );
}
var Ee, De, $;
function Oe() {
  return (Oe = e(() => {
    ((Ee = T()), a(), y(), (De = O()), S(), u(), f(), W(), J(), V(), P(), G(), re(), ve(), we(), ($ = D()));
  }))();
}
function ke(e) {
  let t = (0, Ae.c)(14),
    { error: n, title: r, footer: i, onCreatePet: a, previewRef: s, previewFallback: c } = e,
    l = n !== void 0 && n,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = l
        ? void 0
        : (0, je.jsx)(o, {
            id: `restricted.characterEditor.loading`,
            defaultMessage: `Loading character…`,
            description: `Status while the assistant's character renderer loads`,
          })),
      (t[0] = l),
      (t[1] = u));
  let d;
  t[2] !== l || t[3] !== c || t[4] !== s
    ? ((d = l
        ? (0, je.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `alert`,
            children: (0, je.jsx)(o, {
              id: `restricted.characterEditor.loadError`,
              defaultMessage: `Couldn’t load this character. Close the editor and try again`,
              description: `Error when loading the saved assistant profile for appearance editing`,
            }),
          })
        : (0, je.jsx)(`div`, {
            ref: s,
            className: `relative aspect-square h-30 max-h-full max-w-full`,
            children: c,
          })),
      (t[2] = l),
      (t[3] = c),
      (t[4] = s),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === a
    ? (f = t[7])
    : ((f = (0, je.jsx)(Te, {
        preview: null,
        disabled: !0,
        selectedTint: null,
        selectedPreset: null,
        customSelected: !1,
        hasCustomCharacter: !1,
        petDisabled: !0,
        onCreatePet: a,
      })),
      (t[6] = a),
      (t[7] = f));
  let p;
  return (
    t[8] !== i || t[9] !== u || t[10] !== d || t[11] !== f || t[12] !== r
      ? ((p = (0, je.jsx)(se, { title: r, footer: i, loadingLabel: u, preview: d, controls: f })),
        (t[8] = i),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f),
        (t[12] = r),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
var Ae, je;
function Me() {
  return (Me = e(() => {
    ((Ae = T()), S(), le(), Oe(), (je = D()));
  }))();
}
export { me as a, se as c, Oe as i, le as l, Me as n, ge as o, Te as r, ve as s, ke as t };
//# sourceMappingURL=editor-placeholder-af27987d8f40.js.map
