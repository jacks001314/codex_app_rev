import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $xt as r,
  Cot as i,
  DG as a,
  EPt as o,
  IDt as s,
  Ixt as c,
  Pxt as l,
  TJ as u,
  TLt as d,
  VDt as f,
  Vxt as p,
  _Mt as m,
  gMt as h,
  jDt as g,
  oSt as _,
  pIt as v,
  t3 as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as w,
  GMr as T,
  Qjr as E,
  XMr as D,
  Ymr as O,
  Zjr as k,
  co as A,
  ehr as j,
  jCn as M,
  lo as N,
  nEt as P,
  rYr as F,
  tEt as I,
  tNr as L,
} from "./app-initial-5851df3f6cb1.js";
import { Ai as R, ki as z } from "./app-primary-fe8a450b3b04.js";
var B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    (l(),
      o(),
      L(),
      j(),
      x(),
      k(),
      (B = 3e5),
      (V = {
        staleTime: B,
        refetchInterval: B,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
        refetchOnReconnect: `always`,
      }),
      (H = r(i, ({ get: e }) => {
        let t = e(T),
          n = e(D);
        return {
          ...V,
          enabled: t != null && n != null,
          queryKey: [`chatgpt-images`, `catalog`, t, n],
          queryFn: ({ signal: e }) =>
            O.safeGet(`/images/init`, {
              additionalHeaders: t == null ? void 0 : { "ChatGPT-Account-ID": t },
              signal: e,
            }),
        };
      })),
      (U = r(i, ({ get: e }) => {
        let t = e(T),
          n = e(D);
        return {
          ...V,
          enabled: t != null && n != null,
          queryKey: [`chatgpt-images`, `styles`, t, n],
          queryFn: ({ signal: e }) =>
            O.safeGet(`/images/styles`, {
              additionalHeaders: t == null ? void 0 : { "ChatGPT-Account-ID": t },
              parameters: { query: { include_image_suggestions: !0 } },
              signal: e,
            }),
        };
      })),
      (W = _(i, ({ get: e }) => {
        let t = e(H),
          n = e(U);
        if (t.isPending || n.isPending) return;
        let r = t.data?.groups;
        if (t.isSuccess && r == null) return [];
        let i = n.data?.image_suggestions;
        if (r == null || i == null || i.length === 0) return r;
        let a = new Set(n.data?.styles?.map((e) => e.id)),
          o = r.find(
            (e) => (e.kind == null || e.kind === `prompt_collection`) && e.items?.some((e) => a.has(e.id)),
          );
        return r.map((e) => (e === o ? { ...e, items: i } : e));
      })),
      (G = _(i, ({ get: e }) => {
        let t = e(E, `3939855767`),
          n = v(d()).safeParse(t?.value.section_order);
        return n.success ? n.data : void 0;
      })));
  }))();
}
function ee(e, t = []) {
  return [
    ...new Set(
      e.flatMap((e) =>
        e.kind == null || e.kind === `prompt_collection` ? (e.items?.map((e) => e.section || ``) ?? []) : [],
      ),
    ),
  ].sort((e, n) => {
    let r = t.indexOf(e || `trending`),
      i = t.indexOf(n || `trending`);
    return (r === -1 ? t.length : r) - (i === -1 ? t.length : i);
  });
}
function te(e, t, n) {
  if (e.trim() === ``) return t;
  let r = n ? e.match(new RegExp((0, q.default)(n), `i`)) : null;
  return r?.index == null ? `${t}\n\n${e}` : `${e.slice(0, r.index)}${t}${e.slice(r.index + r[0].length)}`;
}
var q;
function J() {
  return (J = e(() => {
    q = t(F(), 1);
  }))();
}
function ne(e) {
  let t = (0, Z.c)(19),
    {
      disabled: n,
      excludedPromptId: r,
      hidden: i,
      onBeforeSelectPrompt: a,
      onSelectPrompt: o,
      surface: s,
      trackImpressions: c,
      uploadCard: l,
    } = e,
    u = p(D) != null,
    d = p(W),
    f = p(G),
    { isError: m, refetch: h } = p(H),
    { isError: g, refetch: _ } = p(U),
    v;
  t[0] !== r || t[1] !== d || t[2] !== u
    ? ((v = d?.flatMap((e) => {
        let t = e.items?.filter(
          (t) => t.id !== r && (u || (t.action ?? e.action).input_requirements?.source !== `sketch`),
        );
        return t?.length === 0 ? [] : [{ ...e, items: t }];
      })),
      (t[0] = r),
      (t[1] = d),
      (t[2] = u),
      (t[3] = v))
    : (v = t[3]);
  let y = m || g,
    b;
  t[4] !== h || t[5] !== _
    ? ((b = () => {
        Promise.all([h(), _()]);
      }),
      (t[4] = h),
      (t[5] = _),
      (t[6] = b))
    : (b = t[6]);
  let x;
  return (
    t[7] !== n ||
    t[8] !== i ||
    t[9] !== a ||
    t[10] !== o ||
    t[11] !== f ||
    t[12] !== s ||
    t[13] !== v ||
    t[14] !== y ||
    t[15] !== b ||
    t[16] !== c ||
    t[17] !== l
      ? ((x = (0, $.jsx)(re, {
          disabled: n,
          groups: v,
          hidden: i,
          isError: y,
          sectionOrder: f,
          surface: s,
          trackImpressions: c,
          uploadCard: l,
          onRetry: b,
          onBeforeSelectPrompt: a,
          onSelectPrompt: o,
        })),
        (t[7] = n),
        (t[8] = i),
        (t[9] = a),
        (t[10] = o),
        (t[11] = f),
        (t[12] = s),
        (t[13] = v),
        (t[14] = y),
        (t[15] = b),
        (t[16] = c),
        (t[17] = l),
        (t[18] = x))
      : (x = t[18]),
    x
  );
}
function re(e) {
  let t = (0, Z.c)(60),
    {
      disabled: r,
      groups: i,
      hidden: a,
      isError: o,
      onBeforeSelectPrompt: c,
      onRetry: l,
      onSelectPrompt: u,
      sectionOrder: d,
      surface: p,
      trackImpressions: m,
      uploadCard: g,
    } = e,
    _ = f(),
    v = (0, Q.useId)(),
    [y, b] = (0, Q.useState)(null),
    x = p === `home` ? `grid-cols-4` : `grid-cols-5`,
    S;
  t[0] === x ? (S = t[1]) : ((S = h(`grid gap-2`, x)), (t[0] = x), (t[1] = S));
  let C = S,
    T,
    E,
    D,
    O,
    k,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R;
  if (
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== C ||
    t[6] !== _ ||
    t[7] !== o ||
    t[8] !== c ||
    t[9] !== l ||
    t[10] !== u ||
    t[11] !== v ||
    t[12] !== d ||
    t[13] !== y ||
    t[14] !== p ||
    t[15] !== m ||
    t[16] !== g
  ) {
    let e = i == null ? [] : ee(i, d),
      f = y != null && e.includes(y) ? y : (e[0] ?? ``),
      x = e.some(ae),
      S = i?.flatMap((e) => {
        if ((e.kind != null && e.kind !== `prompt_collection`) || e.items == null) return [];
        let t = e.items.filter((e) => !x || (e.section || ``) === f);
        return t.length === 0 ? [] : [{ ...e, items: t }];
      });
    ((O = `flex min-w-0 flex-col gap-4`), (k = a));
    let z;
    t[30] === _
      ? (z = t[31])
      : ((z = _.formatMessage({
          id: `imagesApp.promptSections.tabs.ariaLabel`,
          defaultMessage: `Image prompt categories`,
          description: `Accessible name for image prompt category tabs below the image composer on the ChatGPT Images page. Includes Trending and any additional categories provided by the server.`,
        })),
        (t[30] = _),
        (t[31] = z));
    let B = (e.length === 0 ? [``] : e).map((e) => ({
      key: e,
      panelId: e === f ? v : void 0,
      name:
        e ||
        (0, $.jsx)(s, {
          id: `imagesApp.promptSections.tab.trending`,
          defaultMessage: `Trending`,
          description: `Short tab label below the image composer on the ChatGPT Images page. Selecting it shows uncategorized popular image creation prompts; neighboring tabs show other available prompt categories.`,
        }),
    }));
    (t[32] !== f || t[33] !== z || t[34] !== B
      ? ((j = (0, $.jsx)(A, {
          ariaLabel: z,
          variant: `browse`,
          scrollable: !0,
          selectedKey: f,
          onSelect: b,
          tabs: B,
        })),
        (t[32] = f),
        (t[33] = z),
        (t[34] = B),
        (t[35] = j))
      : (j = t[35]),
      (M = v),
      (N = `flex min-w-0 flex-col gap-8`),
      (P = `tabpanel`),
      (F = `${v}-tab`),
      (I = i == null && !o),
      (L = 0),
      t[36] !== o || t[37] !== l
        ? ((R = o
            ? (0, $.jsxs)(`div`, {
                role: `alert`,
                className: `flex flex-wrap items-center gap-2 text-sm text-secondary`,
                children: [
                  (0, $.jsx)(s, {
                    id: `images.catalog.loadError`,
                    defaultMessage: `Some image prompts couldn't be loaded`,
                    description: `Error above image creation prompt cards when the catalog or styles request fails. The neighboring Retry button reloads the missing prompts.`,
                  }),
                  (0, $.jsx)(n, {
                    color: `secondary`,
                    onClick: l,
                    children: (0, $.jsx)(s, {
                      id: `images.catalog.retry`,
                      defaultMessage: `Retry`,
                      description: `Button on the Images page that retries loading failed image creation prompt collections.`,
                    }),
                  }),
                ],
              })
            : null),
          (t[36] = o),
          (t[37] = l),
          (t[38] = R))
        : (R = t[38]),
      t[39] !== i || t[40] !== C || t[41] !== o || t[42] !== p
        ? ((T =
            i == null && !o
              ? (0, $.jsx)(`div`, {
                  className: C,
                  "aria-hidden": !0,
                  children: Array.from({ length: p === `home` ? 12 : 15 }, ie),
                })
              : null),
          (t[39] = i),
          (t[40] = C),
          (t[41] = o),
          (t[42] = p),
          (t[43] = T))
        : (T = t[43]),
      (E =
        S?.length === 0 && !o
          ? (0, $.jsx)(w, {
              title: (0, $.jsx)(s, {
                id: `images.catalog.empty`,
                defaultMessage: `Start with your own idea`,
                description: `Empty state on the Images page when no image creation prompts are available. Users can still create images by writing in the composer above.`,
              }),
              description: (0, $.jsx)(s, {
                id: `images.catalog.emptyDescription`,
                defaultMessage: `Describe the image you want to create`,
                description: `Instruction in the Images page's empty prompt catalog, directing the user to the image creation composer.`,
              }),
            })
          : null),
      (D = S?.map((e, t) => {
        let n = e.presentation === `image_card` || e.presentation === `portrait`;
        return (0, $.jsxs)(
          `section`,
          {
            className: `flex min-w-0 flex-col gap-4`,
            "aria-label": e.title,
            children: [
              t > 0 && e.title
                ? (0, $.jsx)(`h2`, {
                    className: `text-base font-medium text-default select-none`,
                    children: e.title,
                  })
                : null,
              t === 0 && g != null && !n ? (0, $.jsx)(`div`, { className: C, children: g }) : null,
              (0, $.jsxs)(`div`, {
                className: h(
                  e.presentation === `text_pill` && `flex flex-col items-start gap-2`,
                  e.presentation === `icon_pill` && `grid grid-cols-2 gap-4`,
                  n && C,
                ),
                children: [
                  t === 0 && n ? g : null,
                  e.items.map((t) =>
                    (0, $.jsx)(
                      Y,
                      {
                        disabled: r,
                        item: t,
                        group: e,
                        visible: !a,
                        surface: p,
                        trackImpressions: m,
                        onBeforeSelect: c,
                        onSelect: () => u(t, e),
                      },
                      t.id,
                    ),
                  ),
                ],
              }),
            ],
          },
          e.id,
        );
      })),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = C),
      (t[6] = _),
      (t[7] = o),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u),
      (t[11] = v),
      (t[12] = d),
      (t[13] = y),
      (t[14] = p),
      (t[15] = m),
      (t[16] = g),
      (t[17] = T),
      (t[18] = E),
      (t[19] = D),
      (t[20] = O),
      (t[21] = k),
      (t[22] = j),
      (t[23] = M),
      (t[24] = N),
      (t[25] = P),
      (t[26] = F),
      (t[27] = I),
      (t[28] = L),
      (t[29] = R));
  } else
    ((T = t[17]),
      (E = t[18]),
      (D = t[19]),
      (O = t[20]),
      (k = t[21]),
      (j = t[22]),
      (M = t[23]),
      (N = t[24]),
      (P = t[25]),
      (F = t[26]),
      (I = t[27]),
      (L = t[28]),
      (R = t[29]));
  let z;
  t[44] !== T ||
  t[45] !== E ||
  t[46] !== D ||
  t[47] !== M ||
  t[48] !== N ||
  t[49] !== P ||
  t[50] !== F ||
  t[51] !== I ||
  t[52] !== L ||
  t[53] !== R
    ? ((z = (0, $.jsxs)(`div`, {
        id: M,
        className: N,
        role: P,
        "aria-labelledby": F,
        "aria-busy": I,
        tabIndex: L,
        children: [R, T, E, D],
      })),
      (t[44] = T),
      (t[45] = E),
      (t[46] = D),
      (t[47] = M),
      (t[48] = N),
      (t[49] = P),
      (t[50] = F),
      (t[51] = I),
      (t[52] = L),
      (t[53] = R),
      (t[54] = z))
    : (z = t[54]);
  let B;
  return (
    t[55] !== O || t[56] !== k || t[57] !== j || t[58] !== z
      ? ((B = (0, $.jsxs)(`div`, { className: O, hidden: k, children: [j, z] })),
        (t[55] = O),
        (t[56] = k),
        (t[57] = j),
        (t[58] = z),
        (t[59] = B))
      : (B = t[59]),
    B
  );
}
function ie(e, t) {
  return (0, $.jsx)(I, { className: `aspect-[4/5] rounded-2xl` }, t);
}
function ae(e) {
  return !!e;
}
function Y(e) {
  let t = (0, Z.c)(61),
    {
      disabled: r,
      item: a,
      group: o,
      onBeforeSelect: s,
      onSelect: l,
      presentation: u,
      surface: d,
      trackImpressions: f,
      visible: p,
    } = e,
    m = d === void 0 ? `images` : d,
    g = c(i),
    _ = u ?? o.presentation,
    v = (0, Q.useRef)(!1),
    y;
  t[0] !== o || t[1] !== a || t[2] !== g || t[3] !== m || t[4] !== f
    ? ((y = () => {
        (f ?? m === `home`) && !v.current && ((v.current = !0), R(g, `impression`, a, o, m));
      }),
      (t[0] = o),
      (t[1] = a),
      (t[2] = g),
      (t[3] = m),
      (t[4] = f),
      (t[5] = y))
    : (y = t[5]);
  let b = (0, Q.useEffectEvent)(y),
    x;
  t[6] !== b || t[7] !== p
    ? ((x = () => {
        p && b();
      }),
      (t[6] = b),
      (t[7] = p),
      (t[8] = x))
    : (x = t[8]);
  let S;
  (t[9] !== m || t[10] !== f || t[11] !== p
    ? ((S = [m, f, p]), (t[9] = m), (t[10] = f), (t[11] = p), (t[12] = S))
    : (S = t[12]),
    (0, Q.useEffect)(x, S));
  let C;
  t[13] !== o || t[14] !== a || t[15] !== s || t[16] !== l || t[17] !== g || t[18] !== m
    ? ((C = () => {
        s?.() !== !1 && (R(g, `selected`, a, o, m), l());
      }),
      (t[13] = o),
      (t[14] = a),
      (t[15] = s),
      (t[16] = l),
      (t[17] = g),
      (t[18] = m),
      (t[19] = C))
    : (C = t[19]);
  let w = C,
    T;
  t[20] !== a.image_alt || t[21] !== a.title
    ? ((T = new Set([a.title, a.image_alt].filter(se))),
      (t[20] = a.image_alt),
      (t[21] = a.title),
      (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] === T ? (E = t[24]) : ((E = [...T]), (t[23] = T), (t[24] = E));
  let D = E.join(`, `),
    O;
  t[25] !== a.image_url || t[26] !== a.image_variant_urls || t[27] !== a.image_variants
    ? ((O = [a.image_url, ...(a.image_variant_urls ?? []), ...(a.image_variants ?? [])].find(oe)),
      (t[25] = a.image_url),
      (t[26] = a.image_variant_urls),
      (t[27] = a.image_variants),
      (t[28] = O))
    : (O = t[28]);
  let k = O;
  if (_ === `text_pill`) {
    let e;
    t[29] === a.title
      ? (e = t[30])
      : ((e = (0, $.jsx)(`span`, { className: `truncate`, children: a.title })),
        (t[29] = a.title),
        (t[30] = e));
    let i;
    return (
      t[31] !== r || t[32] !== w || t[33] !== D || t[34] !== e
        ? ((i = (0, $.jsx)(n, {
            className: `max-w-full`,
            color: `secondary`,
            radius: `full`,
            size: `medium`,
            allowShrink: !0,
            "aria-label": D,
            disabled: r,
            onClick: w,
            children: e,
          })),
          (t[31] = r),
          (t[32] = w),
          (t[33] = D),
          (t[34] = e),
          (t[35] = i))
        : (i = t[35]),
      i
    );
  }
  if (_ === `icon_pill`) {
    let e;
    t[36] === k
      ? (e = t[37])
      : ((e = (0, $.jsx)(`div`, {
          className: `size-12 shrink-0 overflow-hidden rounded-xl bg-surface-secondary`,
          children: (0, $.jsx)(X, { src: k }, k),
        })),
        (t[36] = k),
        (t[37] = e));
    let n;
    t[38] === a.title
      ? (n = t[39])
      : ((n = (0, $.jsx)(`span`, {
          className: `line-clamp-2 text-sm text-secondary group-hover/use:text-default`,
          children: a.title,
        })),
        (t[38] = a.title),
        (t[39] = n));
    let i;
    return (
      t[40] !== r || t[41] !== w || t[42] !== D || t[43] !== n || t[44] !== e
        ? ((i = (0, $.jsxs)(`button`, {
            type: `button`,
            className: `group/use flex w-full cursor-interaction items-center gap-3 rounded-xl text-start outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
            "aria-label": D,
            disabled: r,
            onClick: w,
            children: [e, n],
          })),
          (t[40] = r),
          (t[41] = w),
          (t[42] = D),
          (t[43] = n),
          (t[44] = e),
          (t[45] = i))
        : (i = t[45]),
      i
    );
  }
  let A;
  t[46] === k ? (A = t[47]) : ((A = (0, $.jsx)(X, { src: k }, k)), (t[46] = k), (t[47] = A));
  let j = a.section
      ? `from-media-background/20 via-media-background/10`
      : `from-media-background/80 via-media-background/30`,
    M;
  t[48] === j
    ? (M = t[49])
    : ((M = h(
        `pointer-events-none absolute inset-x-0 bottom-0 flex min-h-14 items-end bg-linear-to-t to-transparent px-3 pt-8 pb-3 text-media-foreground`,
        j,
      )),
      (t[48] = j),
      (t[49] = M));
  let N;
  t[50] === a.title
    ? (N = t[51])
    : ((N = (0, $.jsx)(`span`, {
        className: `line-clamp-2 w-full text-start text-sm leading-5 font-medium wrap-break-word [text-box-trim:trim-both]`,
        children: a.title,
      })),
      (t[50] = a.title),
      (t[51] = N));
  let P;
  t[52] !== M || t[53] !== N
    ? ((P = (0, $.jsx)(`div`, { className: M, children: N })), (t[52] = M), (t[53] = N), (t[54] = P))
    : (P = t[54]);
  let F;
  return (
    t[55] !== r || t[56] !== w || t[57] !== D || t[58] !== P || t[59] !== A
      ? ((F = (0, $.jsxs)(`button`, {
          type: `button`,
          className: `group/use relative flex aspect-[4/5] w-full cursor-interaction flex-col overflow-hidden rounded-2xl bg-surface-secondary text-start outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
          "aria-label": D,
          disabled: r,
          onClick: w,
          children: [A, P],
        })),
        (t[55] = r),
        (t[56] = w),
        (t[57] = D),
        (t[58] = P),
        (t[59] = A),
        (t[60] = F))
      : (F = t[60]),
    F
  );
}
function oe(e) {
  return e?.trim();
}
function se(e) {
  return !!e;
}
function X(e) {
  let t = (0, Z.c)(3),
    { src: n } = e,
    [r, i] = (0, Q.useState)(!1),
    o;
  return (
    t[0] !== r || t[1] !== n
      ? ((o =
          n && !r
            ? (0, $.jsx)(`img`, {
                className: `h-full w-full object-cover`,
                src: n,
                alt: ``,
                loading: `lazy`,
                draggable: !1,
                onError: () => i(!0),
              })
            : (0, $.jsx)(`div`, {
                className: `flex h-full w-full items-center justify-center text-tertiary`,
                children: (0, $.jsx)(a, {}),
              })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = o))
      : (o = t[2]),
    o
  );
}
var Z, Q, $;
function ce() {
  return (ce = e(() => {
    ((Z = b()), m(), l(), (Q = C()), g(), L(), z(), y(), u(), M(), P(), N(), x(), K(), J(), ($ = S()));
  }))();
}
export { J as a, K as c, te as i, Y as n, H as o, ce as r, U as s, ne as t };
//# sourceMappingURL=prompts-3b065b65c04f.js.map
