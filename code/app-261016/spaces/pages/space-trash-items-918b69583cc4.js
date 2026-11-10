const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-empty-trash-b7895de31744.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./library-trash-analytics-87135fb4164d.js",
      "./library-item-dialogs-b3f9554157e9.js",
      "./site-delete-confirmation-ef0a116df40a.js",
      "./library-delete-analytics-8d6586b5e73e.js",
      "./library-name-validation-5559e2ce17f6.js",
      "./library-page-actions-12f0701c9fb5.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  F3 as n,
  FBt as r,
  HO as i,
  I3 as a,
  IO as o,
  JO as s,
  LNt as c,
  MNt as ee,
  NNt as l,
  OFt as u,
  OT as te,
  OU as d,
  PBt as f,
  Pit as p,
  SB as ne,
  TY as re,
  Vrt as m,
  WO as ie,
  WOt as ae,
  XOt as h,
  Y3 as oe,
  Z3 as se,
  ZSt as ce,
  as as g,
  ck as _,
  cs as le,
  ds as v,
  fs as ue,
  iCt as y,
  jit as de,
  kFt as fe,
  kT as b,
  ls as pe,
  okt as me,
  os as he,
  qrt as ge,
  rk as _e,
  ss as x,
  tk as ve,
  tkt as S,
  us as ye,
  wB as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as be,
  Fmt as xe,
  Glt as Se,
  Nmt as w,
  Qlt as Ce,
  Qx as we,
  Vfn as Te,
  Vzn as Ee,
  XEn as De,
  YEn as Oe,
  Yfn as ke,
  Ylt as Ae,
  Yx as je,
  Zdn as Me,
  Zx as Ne,
  _ur as Pe,
  b2 as Fe,
  dan as Ie,
  dmt as Le,
  eS as Re,
  fan as ze,
  gdn as Be,
  gur as Ve,
  h_n as T,
  hdn as He,
  iRr as Ue,
  lut as We,
  m_n as Ge,
  nS as Ke,
  oht as qe,
  qlt as Je,
  sRr as Ye,
  tS as Xe,
  umt as E,
  uut as D,
  vIr as O,
  van as Ze,
  wLr as k,
  x2 as Qe,
  yIr as $e,
  yan as et,
  zfn as tt,
  zmt as nt,
  zzn as rt,
} from "./app-initial-ad16eaadf81f.js";
import { n as it, t as at } from "./space-empty-state-95c5a77c22cc.js";
import { A as ot, O as st, k as A, x as ct } from "./selectable-library-item-3b495aba5b29.js";
import {
  a as lt,
  i as ut,
  l as j,
  n as M,
  o as N,
  r as P,
  s as dt,
  t as ft,
} from "./library-trash-banner-bfac665ecde4.js";
import { a as pt, o as F } from "./library-item-b6e80d141813.js";
import { n as I, t as mt } from "./library-selection-toolbar-6dae8ae740fc.js";
function L(e) {
  let t = (0, Ct.c)(7),
    { kind: n, scrollContainerRef: r, onSelectionToolbarMount: i } = e,
    a = y(Ve),
    o = y(be),
    s = `${o}:${a}:${n}`,
    c;
  return (
    t[0] !== a || t[1] !== n || t[2] !== i || t[3] !== r || t[4] !== s || t[5] !== o
      ? ((c = (0, B.jsx)(
          R,
          { accountId: a, userId: o, kind: n, scrollContainerRef: r, onSelectionToolbarMount: i },
          s,
        )),
        (t[0] = a),
        (t[1] = n),
        (t[2] = i),
        (t[3] = r),
        (t[4] = s),
        (t[5] = o),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function R(e) {
  let n = (0, Ct.c)(80),
    { accountId: r, userId: i, kind: a, scrollContainerRef: s, onSelectionToolbarMount: c } = e,
    l = t(ke),
    u = me(),
    f = u.formatMessage(et.untitled),
    p = y(nt),
    re = y(qe),
    m = y(xe),
    [h, se] = (0, z.useState)(null),
    [ce, g] = (0, z.useState)(!1),
    _;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = new Set()), (n[0] = _)) : (_ = n[0]);
  let [v, fe] = (0, z.useState)(_),
    b;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { selectedIds: new Set(), anchor: null }), (n[1] = b))
    : (b = n[1]);
  let [pe, x] = (0, z.useState)(b),
    [C, w] = (0, z.useState)(null),
    Ce = a === `page`,
    De;
  n[2] === Ce ? (De = n[3]) : ((De = { enabled: Ce }), (n[2] = Ce), (n[3] = De));
  let je = y(Re, De),
    ze = a === `space`,
    T;
  n[4] === ze ? (T = n[5]) : ((T = { enabled: ze }), (n[4] = ze), (n[5] = T));
  let He = y(Xe, T),
    { data: Ke } = je,
    { data: Ye } = He,
    {
      fetchNextPage: E,
      hasNextPage: D,
      isError: O,
      isFetching: Ze,
      isFetchingNextPage: k,
      isFetchNextPageError: Qe,
      isLoading: tt,
      refetch: rt,
    } = a === `page` ? je : He,
    it = a === `page` ? Ke : Ye,
    A = Ke?.pages.flatMap(St).filter((e) => !v.has(e.page_id)),
    j = Ye?.pages.flatMap(xt),
    M = it?.pages[0]?.archive_retention_days,
    N = tt || (Ze && (it == null || (a === `page` ? A?.length === 0 : j?.length === 0))),
    P = y(ut),
    F =
      (a === `page` || (P && l.value.basePath === `/space`)) &&
      l.value.search.trim() === `` &&
      l.value.categories.length === 0 &&
      l.value.sources.length === 0 &&
      !N &&
      !O &&
      !D &&
      (a === `page` ? A?.length === 0 : j?.length === 0),
    I = h != null || tt || k,
    L = A?.filter((e) =>
      (e.title || f).toLocaleLowerCase(u.locale).includes(l.value.search.trim().toLocaleLowerCase(u.locale)),
    );
  m != null &&
    L?.sort((e, t) => {
      let n = (e.title || f).localeCompare(t.title || f, u.locale, { numeric: !0, sensitivity: `base` }),
        r = n;
      if (m.key !== `name`) {
        let n = m.key === `size` ? e.size_bytes : Date.parse(e.archived_at),
          i = m.key === `size` ? t.size_bytes : Date.parse(t.archived_at),
          a = n == null || !Number.isFinite(n) || (m.key === `size` && n < 0),
          o = i == null || !Number.isFinite(i) || (m.key === `size` && i < 0);
        if (a !== o) return a ? 1 : -1;
        r = a || o ? 0 : n - i;
      }
      return (m.direction === `asc` ? r : -r) || n;
    });
  let R = A?.filter((e) => pe.selectedIds.has(e.page_id)),
    V = (R?.length ?? 0) > 0,
    Et = (e, t, n) => {
      let r = n !== void 0 && n;
      I || x((n) => ct({ ...n, orderedIds: L?.map(bt), id: e, selected: t, extendRange: r }));
    },
    Dt;
  n[6] !== r ||
  n[7] !== v ||
  n[8] !== u ||
  n[9] !== a ||
  n[10] !== l ||
  n[11] !== w ||
  n[12] !== x ||
  n[13] !== i
    ? ((Dt = async (e, t) => {
        if (r == null || l.get(Ve) !== r || l.get(be) !== i || (a === `space` && e !== `restore`)) return !1;
        let n = Pe(l, r, i),
          o = new Map(
            e === `restore` && a === `page`
              ? t.map((e) => [
                  e,
                  Ge(Ee(l), {
                    action: `restore_page`,
                    documentType: `unknown`,
                    completionMilestone: `content_usable`,
                  }),
                ])
              : [],
          ),
          s = l.get(Te, { accountId: r, userId: i });
        return (
          se(t[0] ?? `empty`),
          (async () => {
            let c = t;
            if (e === `empty`) {
              let e = new Set(),
                t;
              do {
                let r = await Ue.safeGet(`/pages/archived`, {
                  parameters: { query: { cursor: t, limit: 50 } },
                  signal: n.signal,
                });
                for (let t of r.items) v.has(t.page_id) || e.add(t.page_id);
                t = r.next_cursor ?? void 0;
              } while (t != null);
              c = [...e];
            }
            let ee = await $e(
              c,
              async (t) => {
                for (let r = 0; !n.signal.aborted; r += 1) {
                  try {
                    return (
                      a === `space`
                        ? await Ue.safePost(`/spaces/{space_id}/restore`, {
                            parameters: { path: { space_id: t } },
                            signal: n.signal,
                            expectedErrorStatuses: [409],
                          })
                        : await Ue.safePost(
                            e === `restore` ? `/pages/{page_id}/restore` : `/pages/{page_id}/delete-forever`,
                            {
                              parameters: { path: { page_id: t } },
                              signal: n.signal,
                              expectedErrorStatuses: e === `restore` ? [409] : void 0,
                            },
                          ),
                      o.get(t)?.milestone(`operation_accepted`),
                      t
                    );
                  } catch (i) {
                    let a = i;
                    if (
                      e !== `restore` ||
                      r >= 2 ||
                      n.signal.aborted ||
                      !(a instanceof de) ||
                      a.status !== 409 ||
                      a.retryable !== !0
                    )
                      return (o.get(t)?.finish(n.signal.aborted ? `unobserved` : `failure`), null);
                  }
                  await new Promise((e) => {
                    let t = () => {
                        (clearTimeout(i), n.signal.removeEventListener(`abort`, t), e());
                      },
                      i = setTimeout(t, 500 * 2 ** r);
                    n.signal.addEventListener(`abort`, t, { once: !0 });
                  });
                }
                return null;
              },
              { concurrency: e === `restore` ? 1 : 4, signal: n.signal },
            );
            if (n.signal.aborted) return !1;
            let u = new Set(ee.filter(yt));
            e !== `restore` && fe((e) => new Set([...e, ...u]));
            let te = s.filter((e) => (e.spaceId == null ? `page` : `space`) === a && u.has(e.id));
            (l.set(Te, { accountId: r, userId: i }, (e) => e.filter((e) => !te.includes(e))),
              x((e) => ({ ...e, selectedIds: new Set([...e.selectedIds].filter((e) => !u.has(e))) })),
              w((e) => {
                let t = e?.pages.filter((e) => !u.has(e.page_id));
                return e != null && t?.length ? { ...e, pages: t } : null;
              }));
            let d = [l.query.invalidate(Re), l.query.invalidate(Xe), l.query.invalidate(Me), Be(l)];
            if (e === `restore` && u.size > 0) {
              if (a === `space`) for (let e of u) d.push(...we(l, e, r, i));
              d.push(l.queryClient.invalidateQueries({ queryKey: [`library-api`, r, i, `browse`] }));
              for (let { queryKey: e, state: t } of l.queryClient
                .getQueryCache()
                .findAll({ queryKey: [`space`, `page`, r] })) {
                if (e[4] !== `ancestry` || e[5] !== i || typeof e[3] != `string`) continue;
                let n = e[3],
                  r = l.queryClient.getQueryData(e)?.metadata;
                ((a === `page` && u.has(n)) ||
                  te.some((e) => e.pageIds.has(n)) ||
                  r?.access.can_read === !1 ||
                  r?.deleted_at != null ||
                  (t.error instanceof de && [403, 404, 410].includes(t.error.status))) &&
                  d.push(Ne(l, n));
              }
            }
            return (await Promise.allSettled(d), !n.signal.aborted && u.size === c.length);
          })()
            .catch(vt)
            .then(
              (t) => (
                !t &&
                  !n.signal.aborted &&
                  l
                    .get(ge)
                    .danger(
                      e === `restore`
                        ? u.formatMessage({
                            id: `codex.space.sidebar.restoreError`,
                            defaultMessage: `Could not restore item`,
                            description: `Notification when restoring a deleted Page or Space from Trash fails`,
                          })
                        : u.formatMessage({
                            id: `codex.space.trash.deleteError`,
                            defaultMessage: `Some pages couldn't be deleted. Try again.`,
                            description: `Pages Trash failure toast when loading all trashed Pages or permanently deleting one or more Pages fails. Failed Pages remain available for retry.`,
                          }),
                      {
                        errorAnalytics: {
                          toastId:
                            e === `restore`
                              ? `codex.space.sidebar.restoreError`
                              : `codex.space.trash.deleteError`,
                        },
                      },
                    ),
                t
              ),
            )
            .finally(() => {
              for (let e of o.values()) e.dispose();
              (n.stop(), n.signal.aborted || se(null));
            })
        );
      }),
      (n[6] = r),
      (n[7] = v),
      (n[8] = u),
      (n[9] = a),
      (n[10] = l),
      (n[11] = w),
      (n[12] = x),
      (n[13] = i),
      (n[14] = Dt))
    : (Dt = n[14]);
  let H = Dt,
    Ot;
  n[15] !== u || n[16] !== a
    ? ((Ot = u.formatMessage(
        {
          id: `codex.space.trash.items.label`,
          defaultMessage: `{kind, select, page {Pages in Trash} other {Spaces in Trash}}`,
          description: `Accessible label for the selected Page or Space recovery list in Library Trash. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        },
        { kind: a },
      )),
      (n[15] = u),
      (n[16] = a),
      (n[17] = Ot))
    : (Ot = n[17]);
  let kt = Ot,
    At = L?.map((e) => ({
      id: e.page_id,
      content: (0, B.jsx)(Ie, {
        title: e.title || f,
        iconSize: p === `list` ? 20 : 32,
        children: (t) => {
          let { icon: n, title: r } = t,
            i = pe.selectedIds.has(e.page_id),
            a = (t) => Et(e.page_id, t?.shiftKey || !i, t?.shiftKey),
            o = (0, B.jsx)(`span`, {
              className: ee(
                `relative flex items-center`,
                (p === `grid` ? !i : !V) &&
                  `opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100`,
              ),
              onClickCapture: (t) => {
                t.shiftKey && (t.preventDefault(), Et(e.page_id, !i, !0));
              },
              children: (0, B.jsx)(te, {
                checked: i,
                disabled: I,
                variant: p === `grid` ? `overlay` : `default`,
                onCheckedChange: (t) => Et(e.page_id, t),
                "aria-label": u.formatMessage(
                  {
                    id: `codex.space.trash.selectPage`,
                    defaultMessage: `Select {name}`,
                    description: `Select a deleted Page in Trash; name is its title`,
                  },
                  { name: r },
                ),
              }),
            }),
            s = V
              ? null
              : (0, B.jsxs)(ve, {
                  align: `end`,
                  contentWidth: `menu`,
                  disabled: I,
                  triggerButton: (0, B.jsx)(oe, {
                    color: p === `list` ? `ghost` : `cardAction`,
                    size: `inputIcon`,
                    radius: `full`,
                    disabled: I,
                    loading: h === e.page_id,
                    "aria-label": u.formatMessage(
                      {
                        id: `libraryNext.actions.menu`,
                        defaultMessage: `Open actions menu for {name}`,
                        description: `Accessible label for a Library item's overflow menu; name is the file or folder title`,
                      },
                      { name: r },
                    ),
                    children: (0, B.jsx)(d, {}),
                  }),
                  children: [
                    (0, B.jsx)(_e.Item, {
                      leftIcon: (0, B.jsx)(ne, { icon: { assets: { 16: ue, 20: ye } } }),
                      onSelect: () => w({ type: `restore`, pages: [e] }),
                      children: (0, B.jsx)(S, {
                        id: `codex.space.trash.restore`,
                        defaultMessage: `Restore`,
                        description: `Action in a deleted Page's overflow menu in Library Trash that restores the Page and its nested Pages`,
                      }),
                    }),
                    (0, B.jsx)(_e.Item, {
                      tone: `danger`,
                      leftIcon: (0, B.jsx)(ne, { icon: { assets: { 16: le, 20: he } } }),
                      onSelect: () => w({ type: `deleteForever`, pages: [e] }),
                      children: (0, B.jsx)(S, {
                        id: `library.trash.actions.permanentlyDelete`,
                        defaultMessage: `Permanently delete`,
                        description: `Overflow menu action that asks for confirmation before permanently deleting one Library file from Trash`,
                      }),
                    }),
                  ],
                }),
            c = (0, B.jsx)(ae, { value: e.archived_at, month: `short`, day: `numeric` });
          return p === `grid`
            ? (0, B.jsx)(Se, {
                name: r,
                square: !0,
                actions: s,
                onOpen: a,
                selected: i,
                selection: o,
                selectionActive: V,
                children: (0, B.jsx)(Je, { heading: r, artwork: n, footer: c }),
              })
            : (0, B.jsx)(Ae, {
                name: r,
                onOpen: a,
                selected: i,
                selection: o,
                artwork: n,
                activity: c,
                source: l.value.basePath === `/space` ? `—` : void 0,
                sizeBeforeDate: !0,
                detail: re ? (0, B.jsx)(pt, { bytes: e.size_bytes }) : void 0,
                actions: s == null ? void 0 : [{ key: `menu`, component: s }],
              });
        },
      }),
    })),
    U;
  if (a === `page`) {
    let e;
    (n[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(S, {
          id: `codex.space.trash.pagesDescription`,
          defaultMessage: `Restore pages you've recently deleted. Pages are deleted forever after 30 days.`,
          description: `Banner above Pages Trash explaining restoration and the 30 day retention period`,
        })),
        (n[18] = e))
      : (e = n[18]),
      (U = e));
  } else if (M != null) {
    let e;
    (n[19] === M
      ? (e = n[20])
      : ((e = (0, B.jsx)(S, {
          id: `codex.space.sidebar.archivedDescriptionWithRetention`,
          defaultMessage: `Newly deleted items are permanently deleted after {days, plural, one {# day} other {# days}}. Restore items to see them in Spaces again.`,
          description: `Explanation for the Page and Space lists in Library Trash when automatic deletion is enabled. Older items may have been deleted before this policy applied. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          values: { days: M },
        })),
        (n[19] = M),
        (n[20] = e)),
      (U = e));
  } else {
    let e;
    (n[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(S, {
          id: `codex.space.sidebar.archivedDescription`,
          defaultMessage: `Restore deleted items to see them in Spaces again`,
          description: `Explanation for the Page and Space recovery lists in Library Trash. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (n[21] = e))
      : (e = n[21]),
      (U = e));
  }
  let jt = V && L?.every((e) => pe.selectedIds.has(e.page_id)),
    Mt = V;
  V && !jt && (Mt = `indeterminate`);
  let Nt = F
      ? null
      : (0, B.jsx)(ft, {
          showEmptyFileTrash: !1,
          emptyTrashAction:
            a === `page`
              ? {
                  label:
                    l.value.basePath === `/space`
                      ? (0, B.jsx)(S, {
                          id: `library.emptyTrash.shortAction`,
                          defaultMessage: `Empty trash`,
                          description: `Trash banner action that opens a confirmation before permanently deleting items of the selected type`,
                        })
                      : (0, B.jsx)(S, {
                          id: `codex.space.trash.emptyPages`,
                          defaultMessage: `Empty pages trash`,
                          description: `Trash banner button to open the confirmation for permanently deleting all trashed Pages`,
                        }),
                  disabled: I || !A?.length,
                  onClick: () => g(!0),
                }
              : void 0,
          content: U,
        }),
    Pt = st,
    Ft = it != null,
    W;
  n[22] === Symbol.for(`react.memo_cache_sentinel`) ? ((W = (0, B.jsx)(lt, {})), (n[22] = W)) : (W = n[22]);
  let G;
  n[23] === O
    ? (G = n[24])
    : ((G = O
        ? (0, B.jsx)(S, {
            id: `codex.space.sidebar.archivedLoadError`,
            defaultMessage: `Some deleted items could not be loaded`,
            description: `Partial loading error for the Page and Space recovery lists in Library Trash`,
          })
        : null),
      (n[23] = O),
      (n[24] = G));
  let K;
  n[25] !== E || n[26] !== Qe || n[27] !== rt
    ? ((K = () => {
        Qe ? E({ cancelRefetch: !1 }) : rt();
      }),
      (n[25] = E),
      (n[26] = Qe),
      (n[27] = rt),
      (n[28] = K))
    : (K = n[28]);
  let q;
  n[29] === E ? (q = n[30]) : ((q = () => void E({ cancelRefetch: !1 })), (n[29] = E), (n[30] = q));
  let J;
  n[31] !== D || n[32] !== k || n[33] !== q
    ? ((J = (0, B.jsx)(Fe, { hasNextPage: D, isFetchingNextPage: k, onLoadNextPage: q })),
      (n[31] = D),
      (n[32] = k),
      (n[33] = q),
      (n[34] = J))
    : (J = n[34]);
  let Y;
  n[35] !== U || n[36] !== a || n[37] !== F || n[38] !== P
    ? ((Y = F
        ? (0, B.jsx)(at, { view: P ? `trash` : `trash-pages`, description: a === `space` ? U : void 0 })
        : null),
      (n[35] = U),
      (n[36] = a),
      (n[37] = F),
      (n[38] = P),
      (n[39] = Y))
    : (Y = n[39]);
  let It =
      a === `space`
        ? (0, B.jsxs)(B.Fragment, {
            children: [
              j
                ?.filter((e) =>
                  e.name
                    .toLocaleLowerCase(u.locale)
                    .includes(l.value.search.trim().toLocaleLowerCase(u.locale)),
                )
                .map((e) =>
                  (0, B.jsxs)(
                    `div`,
                    {
                      className: `flex items-center justify-between gap-2 rounded-lg border border-default p-3`,
                      children: [
                        (0, B.jsx)(`span`, { className: `min-w-0 truncate`, children: e.name }),
                        (0, B.jsx)(oe, {
                          color: `secondary`,
                          size: `compact`,
                          loading: h === e.id,
                          disabled: I,
                          onClick: () => void H(`restore`, [e.id]),
                          children: (0, B.jsx)(S, {
                            id: `codex.space.sidebar.restoreSpace`,
                            defaultMessage: `Restore Space`,
                            description: `Restore a deleted Space and its Pages from Trash. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          }),
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              j?.length === 0 && !D && !O && !F
                ? (0, B.jsx)(Oe, {
                    layout: `browse`,
                    title: (0, B.jsx)(S, {
                      id: `codex.space.trash.items.empty`,
                      defaultMessage: `{kind, select, page {No pages in Trash} other {No spaces in Trash}}`,
                      description: `Empty state for the selected Page or Space recovery list in Library Trash. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                      values: { kind: a },
                    }),
                  })
                : null,
            ],
          })
        : null,
    Lt =
      a === `page` && At?.length === 0 && !D && !O && !F
        ? (0, B.jsx)(Oe, {
            layout: `browse`,
            title: (0, B.jsx)(S, {
              id: `codex.space.trash.pages.empty`,
              defaultMessage: `No pages found`,
              description: `Empty state for Pages in Library Trash when there are no deleted Pages or none match the search`,
            }),
          })
        : null,
    Rt =
      a === `page` &&
      At != null &&
      (At.length > 0 || D) &&
      (p === `grid`
        ? (0, B.jsx)(`div`, { className: `pt-4`, children: (0, B.jsx)(We, { items: At }) })
        : (0, B.jsxs)(`div`, {
            className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
            role: `grid`,
            tabIndex: -1,
            "aria-label": kt,
            onKeyDown: ot,
            children: [
              (0, B.jsx)(dt, {
                showSource: l.value.basePath === `/space`,
                selection: (0, B.jsx)(`span`, {
                  className: ee(
                    `relative flex items-center`,
                    !V && `opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100`,
                  ),
                  children: (0, B.jsx)(te, {
                    disabled: I,
                    checked: Mt,
                    onCheckedChange: () => x({ anchor: null, selectedIds: new Set(V ? [] : L?.map(_t)) }),
                    "aria-label": u.formatMessage(
                      {
                        id: `codex.space.trash.selectAll`,
                        defaultMessage: `{selected, select, true {Clear selection} other {Select all}}`,
                        description: `Pages Trash header checkbox, clears an existing selection or selects all loaded Pages`,
                      },
                      { selected: V },
                    ),
                  }),
                }),
              }),
              At.map(gt),
            ],
          })),
    X;
  n[40] !== Pt ||
  n[41] !== N ||
  n[42] !== Ft ||
  n[43] !== W ||
  n[44] !== G ||
  n[45] !== K ||
  n[46] !== J ||
  n[47] !== Y ||
  n[48] !== It ||
  n[49] !== Lt ||
  n[50] !== Rt ||
  n[51] !== p
    ? ((X = (0, B.jsxs)(Pt, {
        loading: N,
        hasData: Ft,
        viewMode: p,
        squareLoading: !0,
        listLoading: W,
        error: G,
        onRetry: K,
        pagination: J,
        children: [Y, It, Lt, Rt],
      })),
      (n[40] = Pt),
      (n[41] = N),
      (n[42] = Ft),
      (n[43] = W),
      (n[44] = G),
      (n[45] = K),
      (n[46] = J),
      (n[47] = Y),
      (n[48] = It),
      (n[49] = Lt),
      (n[50] = Rt),
      (n[51] = p),
      (n[52] = X))
    : (X = n[52]);
  let Z;
  n[53] !== I || n[54] !== a || n[55] !== c || n[56] !== s || n[57] !== R || n[58] !== w || n[59] !== x
    ? ((Z =
        a === `page`
          ? (0, B.jsx)(mt, {
              scrollContainerRef: s,
              onMount: c,
              trashSelection: {
                count: R?.length ?? 0,
                pending: I,
                onClear: () => x({ selectedIds: new Set(), anchor: null }),
                onRestore: () => {
                  R?.length && w({ type: `restore`, pages: R });
                },
                onDelete: () => {
                  R?.length && w({ type: `deleteForever`, pages: R });
                },
              },
            })
          : null),
      (n[53] = I),
      (n[54] = a),
      (n[55] = c),
      (n[56] = s),
      (n[57] = R),
      (n[58] = w),
      (n[59] = x),
      (n[60] = Z))
    : (Z = n[60]);
  let Q;
  n[61] !== ce || n[62] !== H || n[63] !== l || n[64] !== g
    ? ((Q = ce
        ? (0, B.jsx)(wt, {
            accountId: l.value.accountId,
            userId: l.value.userId,
            sessionId: l.get(Le).sessionId,
            action: {
              description: (0, B.jsx)(S, {
                id: `codex.space.trash.emptyDescription`,
                defaultMessage: `Pages in Trash will be deleted forever. This can't be undone.`,
                description: `Warning in the Empty pages trash confirmation. Confirming permanently deletes all trashed Pages, including those not loaded or matching the current search.`,
              }),
              onConfirm: () => H(`empty`, []),
            },
            onClose: () => g(!1),
          })
        : null),
      (n[61] = ce),
      (n[62] = H),
      (n[63] = l),
      (n[64] = g),
      (n[65] = Q))
    : (Q = n[65]);
  let $;
  n[66] !== C || n[67] !== I || n[68] !== h || n[69] !== H || n[70] !== w || n[71] !== f
    ? (($ =
        C == null
          ? null
          : (0, B.jsx)(ie, {
              open: !0,
              showDialogClose: !1,
              contentProps: { "aria-describedby": void 0 },
              onOpenChange: (e) => {
                !e && !I && w(null);
              },
              children: (0, B.jsx)(o, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(), I || H(C.type, C.pages.map(ht)));
                },
                children: (0, B.jsx)(Tt, {
                  title:
                    C.type === `restore`
                      ? (0, B.jsx)(S, {
                          id: `codex.space.trash.restoreTitle`,
                          defaultMessage: `{count, plural, one {Restore page} other {Restore selected pages}}`,
                          description: `Title of the Pages Trash restore confirmation, count is the number of selected Pages`,
                          values: { count: C.pages.length },
                        })
                      : (0, B.jsx)(S, {
                          id: `libraryNext.delete.foreverTitle`,
                          defaultMessage: `Delete forever`,
                          description: `Title of the irreversible deletion confirmation for Library Trash files`,
                        }),
                  description: (0, B.jsx)(`p`, {
                    children:
                      C.type === `restore`
                        ? (0, B.jsx)(S, {
                            id: `codex.space.trash.restoreToSpace`,
                            defaultMessage: `{count, plural, one {"{name}" will be restored to your Space} other {These # selected pages will be restored to your Space}}`,
                            description: `Restoration confirmation for deleted Pages. count is the number of Pages; name is the title of the single selected Page. Space is the product destination. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                            values: { count: C.pages.length, name: C.pages[0].title || f },
                          })
                        : (0, B.jsx)(S, {
                            id: `codex.space.trash.deleteDescription`,
                            defaultMessage: `{count, plural, one {"{name}" will be deleted forever. This can't be undone.} other {These # selected pages will be deleted forever. This can't be undone.}}`,
                            description: `Irreversible deletion confirmation for Pages Trash. count is the number of selected Pages; name is the title of the single selected Page.`,
                            values: { count: C.pages.length, name: C.pages[0].title || f },
                          }),
                  }),
                  pending: h != null,
                  restore: C.type === `restore`,
                  confirmLabel: (0, B.jsx)(S, {
                    id: `libraryNext.trash.confirmAction`,
                    defaultMessage: `{action, select, restore {Restore} other {Delete forever}}`,
                    description: `Confirmation button for a Library Trash action. action is restore for a reversible restoration or deleteForever for irreversible deletion.`,
                    values: { action: C.type },
                  }),
                  onClose: () => w(null),
                }),
              }),
            })),
      (n[66] = C),
      (n[67] = I),
      (n[68] = h),
      (n[69] = H),
      (n[70] = w),
      (n[71] = f),
      (n[72] = $))
    : ($ = n[72]);
  let zt;
  return (
    n[73] !== kt || n[74] !== Nt || n[75] !== X || n[76] !== Z || n[77] !== Q || n[78] !== $
      ? ((zt = (0, B.jsxs)(`section`, {
          className: `flex min-h-0 flex-1 flex-col`,
          "aria-label": kt,
          children: [Nt, X, Z, Q, $],
        })),
        (n[73] = kt),
        (n[74] = Nt),
        (n[75] = X),
        (n[76] = Z),
        (n[77] = Q),
        (n[78] = $),
        (n[79] = zt))
      : (zt = n[79]),
    zt
  );
}
function ht(e) {
  return e.page_id;
}
function gt(e) {
  let { id: t, content: n } = e;
  return (0, B.jsx)(`div`, { role: `presentation`, "data-library-item": !0, children: n }, t);
}
function _t(e) {
  return e.page_id;
}
function vt() {
  return !1;
}
function yt(e) {
  return e != null;
}
function bt(e) {
  return e.page_id;
}
function xt(e) {
  return e.items;
}
function St(e) {
  return e.items;
}
var Ct, z, B, wt, Tt;
function V() {
  return (V = e(() => {
    ((Ct = f()),
      v(),
      pe(),
      x(),
      g(),
      l(),
      ce(),
      O(),
      (z = r()),
      h(),
      rt(),
      k(),
      se(),
      b(),
      s(),
      i(),
      _(),
      re(),
      Qe(),
      De(),
      n(),
      C(),
      m(),
      M(),
      E(),
      w(),
      F(),
      Ce(),
      D(),
      j(),
      A(),
      I(),
      tt(),
      Ke(),
      He(),
      ze(),
      Ze(),
      je(),
      Ye(),
      p(),
      it(),
      T(),
      N(),
      P(),
      (B = c()),
      fe(),
      (wt = a(
        async () =>
          (
            await u(
              async () => {
                let { EmptyLibraryTrashDialog: e } = await import(`./library-empty-trash-b7895de31744.js`);
                return { EmptyLibraryTrashDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).EmptyLibraryTrashDialog,
      )),
      (Tt = a(
        async () =>
          (
            await u(
              async () => {
                let { LibraryItemConfirmationContent: e } = await import(
                  `./library-item-dialogs-b3f9554157e9.js`
                );
                return { LibraryItemConfirmationContent: e };
              },
              __vite__mapDeps([7, 1, 2, 3, 4, 5, 8, 9, 10, 6, 11]),
              import.meta.url,
            )
          ).LibraryItemConfirmationContent,
      )));
  }))();
}
V();
export { L as SpaceTrashItems };
//# sourceMappingURL=space-trash-items-918b69583cc4.js.map
