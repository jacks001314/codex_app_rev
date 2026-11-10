const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-empty-trash-b55e29b80525.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./library-trash-analytics-b5f56547a9f3.js",
      "./library-item-dialogs-9ee5fe2d2bc1.js",
      "./site-delete-confirmation-b17089235f40.js",
      "./library-delete-analytics-c95d15e65c53.js",
      "./library-name-validation-5559e2ce17f6.js",
      "./library-page-actions-8e021b2c2498.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  Ao as r,
  B4 as i,
  CO as a,
  Dz as o,
  Fo as s,
  HT as c,
  IDt as l,
  Io as u,
  Ixt as d,
  Mo as ee,
  No as f,
  Po as te,
  Pxt as p,
  TDt as ne,
  TJ as m,
  TO as re,
  VDt as ie,
  VT as ae,
  Vxt as h,
  _Mt as g,
  fO as _,
  fPt as v,
  gMt as oe,
  hot as se,
  hrt as ce,
  jDt as le,
  jH as ue,
  jo as y,
  ko as b,
  kz as de,
  lot as fe,
  mO as pe,
  oO as me,
  pPt as x,
  t3 as he,
  vO as ge,
  vrt as _e,
  vzt as ve,
  xMt as ye,
  yzt as S,
  z4 as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as be,
  Apt as xe,
  Bct as Se,
  Dor as Ce,
  Dx as we,
  Ept as Te,
  Ex as Ee,
  Gcn as w,
  Gtn as De,
  Hct as Oe,
  Kcn as ke,
  Nsn as Ae,
  Oor as je,
  Ox as T,
  Qtn as Me,
  Ssn as Ne,
  Wct as Pe,
  Wtn as Fe,
  XMr as Ie,
  Xjr as Le,
  Xmn as Re,
  Yjr as ze,
  Ymn as Be,
  Zpt as Ve,
  Ztn as E,
  alt as He,
  dIn as Ue,
  eln as We,
  iPr as Ge,
  ilt as Ke,
  jCn as qe,
  n0 as D,
  npt as Je,
  pIn as Ye,
  qct as O,
  rcn as Xe,
  sPr as k,
  t0 as Ze,
  tNr as Qe,
  tpt as $e,
  wpt as et,
  xsn as tt,
} from "./app-initial-5851df3f6cb1.js";
import { n as nt, t as rt } from "./space-empty-state-7ae0513531fc.js";
import { A as it, O as at, k as ot, x as st } from "./selectable-library-item-873a2793fc51.js";
import {
  a as ct,
  i as lt,
  l as A,
  n as j,
  o as M,
  r as N,
  s as ut,
  t as dt,
} from "./library-trash-banner-c92dc8d87bb0.js";
import { a as ft, o as P } from "./library-item-a06d7f108fc4.js";
import { n as F, t as pt } from "./library-selection-toolbar-88821135b45f.js";
function I(e) {
  let t = (0, Ct.c)(7),
    { kind: n, scrollContainerRef: r, onSelectionToolbarMount: i } = e,
    a = h(Ce),
    o = h(Ie),
    s = `${o}:${a}:${n}`,
    c;
  return (
    t[0] !== a || t[1] !== n || t[2] !== i || t[3] !== r || t[4] !== s || t[5] !== o
      ? ((c = (0, z.jsx)(
          L,
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
function L(e) {
  let n = (0, Ct.c)(80),
    { accountId: i, userId: s, kind: c, scrollContainerRef: f, onSelectionToolbarMount: p } = e,
    m = d(We),
    g = ie(),
    _ = g.formatMessage(Me.untitled),
    v = h(xe),
    le = h(Ve),
    y = h(Te),
    [b, de] = (0, R.useState)(null),
    [fe, x] = (0, R.useState)(!1),
    he;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((he = new Set()), (n[0] = he)) : (he = n[0]);
  let [ge, _e] = (0, R.useState)(he),
    ve;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = { selectedIds: new Set(), anchor: null }), (n[1] = ve))
    : (ve = n[1]);
  let [ye, S] = (0, R.useState)(ve),
    [C, w] = (0, R.useState)(null),
    De = c === `page`,
    T;
  n[2] === De ? (T = n[3]) : ((T = { enabled: De }), (n[2] = De), (n[3] = T));
  let Re = h(Ee, T),
    ze = c === `space`,
    E;
  n[4] === ze ? (E = n[5]) : ((E = { enabled: ze }), (n[4] = ze), (n[5] = E));
  let He = h(we, E),
    { data: Ue } = Re,
    { data: qe } = He,
    {
      fetchNextPage: D,
      hasNextPage: O,
      isError: k,
      isFetching: Qe,
      isFetchingNextPage: $e,
      isFetchNextPageError: et,
      isLoading: tt,
      refetch: nt,
    } = c === `page` ? Re : He,
    ot = c === `page` ? Ue : qe,
    A = Ue?.pages.flatMap(St).filter((e) => !ge.has(e.page_id)),
    j = qe?.pages.flatMap(xt),
    M = ot?.pages[0]?.archive_retention_days,
    N = tt || (Qe && (ot == null || (c === `page` ? A?.length === 0 : j?.length === 0))),
    P = h(lt),
    F =
      (c === `page` || (P && m.value.basePath === `/space`)) &&
      m.value.search.trim() === `` &&
      m.value.categories.length === 0 &&
      m.value.sources.length === 0 &&
      !N &&
      !k &&
      !O &&
      (c === `page` ? A?.length === 0 : j?.length === 0),
    I = b != null || tt || $e,
    L = A?.filter((e) =>
      (e.title || _).toLocaleLowerCase(g.locale).includes(m.value.search.trim().toLocaleLowerCase(g.locale)),
    );
  y != null &&
    L?.sort((e, t) => {
      let n = (e.title || _).localeCompare(t.title || _, g.locale, { numeric: !0, sensitivity: `base` }),
        r = n;
      if (y.key !== `name`) {
        let n = y.key === `size` ? e.size_bytes : Date.parse(e.archived_at),
          i = y.key === `size` ? t.size_bytes : Date.parse(t.archived_at),
          a = n == null || !Number.isFinite(n) || (y.key === `size` && n < 0),
          o = i == null || !Number.isFinite(i) || (y.key === `size` && i < 0);
        if (a !== o) return a ? 1 : -1;
        r = a || o ? 0 : n - i;
      }
      return (y.direction === `asc` ? r : -r) || n;
    });
  let B = A?.filter((e) => ye.selectedIds.has(e.page_id)),
    V = (B?.length ?? 0) > 0,
    Et = (e, t, n) => {
      let r = n !== void 0 && n;
      I || S((n) => st({ ...n, orderedIds: L?.map(bt), id: e, selected: t, extendRange: r }));
    },
    Dt;
  n[6] !== i ||
  n[7] !== ge ||
  n[8] !== g ||
  n[9] !== c ||
  n[10] !== m ||
  n[11] !== w ||
  n[12] !== S ||
  n[13] !== s
    ? ((Dt = async (e, t) => {
        if (i == null || m.get(Ce) !== i || m.get(Ie) !== s || (c === `space` && e !== `restore`)) return !1;
        let n = je(m, i, s),
          r = new Map(
            e === `restore` && c === `page`
              ? t.map((e) => [
                  e,
                  Be(Ye(m), {
                    action: `restore_page`,
                    documentType: `unknown`,
                    completionMilestone: `content_usable`,
                  }),
                ])
              : [],
          ),
          a = m.get(ke, { accountId: i, userId: s });
        return (
          de(t[0] ?? `empty`),
          (async () => {
            let o = t;
            if (e === `empty`) {
              let e = new Set(),
                t;
              do {
                let r = await Ge.safeGet(`/pages/archived`, {
                  parameters: { query: { cursor: t, limit: 50 } },
                  signal: n.signal,
                });
                for (let t of r.items) ge.has(t.page_id) || e.add(t.page_id);
                t = r.next_cursor ?? void 0;
              } while (t != null);
              o = [...e];
            }
            let l = await Le(
              o,
              async (t) => {
                for (let i = 0; !n.signal.aborted; i += 1) {
                  try {
                    return (
                      c === `space`
                        ? await Ge.safePost(`/spaces/{space_id}/restore`, {
                            parameters: { path: { space_id: t } },
                            signal: n.signal,
                            expectedErrorStatuses: [409],
                          })
                        : await Ge.safePost(
                            e === `restore` ? `/pages/{page_id}/restore` : `/pages/{page_id}/delete-forever`,
                            {
                              parameters: { path: { page_id: t } },
                              signal: n.signal,
                              expectedErrorStatuses: e === `restore` ? [409] : void 0,
                            },
                          ),
                      r.get(t)?.milestone(`operation_accepted`),
                      t
                    );
                  } catch (a) {
                    let o = a;
                    if (
                      e !== `restore` ||
                      i >= 2 ||
                      n.signal.aborted ||
                      !(o instanceof ce) ||
                      o.status !== 409 ||
                      o.retryable !== !0
                    )
                      return (r.get(t)?.finish(n.signal.aborted ? `unobserved` : `failure`), null);
                  }
                  await new Promise((e) => {
                    let t = () => {
                        (clearTimeout(r), n.signal.removeEventListener(`abort`, t), e());
                      },
                      r = setTimeout(t, 500 * 2 ** i);
                    n.signal.addEventListener(`abort`, t, { once: !0 });
                  });
                }
                return null;
              },
              { concurrency: e === `restore` ? 1 : 4, signal: n.signal },
            );
            if (n.signal.aborted) return !1;
            let u = new Set(l.filter(yt));
            e !== `restore` && _e((e) => new Set([...e, ...u]));
            let d = a.filter((e) => (e.spaceId == null ? `page` : `space`) === c && u.has(e.id));
            (m.set(ke, { accountId: i, userId: s }, (e) => e.filter((e) => !d.includes(e))),
              S((e) => ({ ...e, selectedIds: new Set([...e.selectedIds].filter((e) => !u.has(e))) })),
              w((e) => {
                let t = e?.pages.filter((e) => !u.has(e.page_id));
                return e != null && t?.length ? { ...e, pages: t } : null;
              }));
            let ee = [m.query.invalidate(Ee), m.query.invalidate(we), m.query.invalidate(Xe), Ne(m)];
            if (e === `restore` && u.size > 0) {
              ee.push(m.queryClient.invalidateQueries({ queryKey: [`library-api`, i, s, `browse`] }));
              for (let { queryKey: e, state: t } of m.queryClient
                .getQueryCache()
                .findAll({ queryKey: [`space`, `page`, i] })) {
                if (e[4] !== `ancestry` || e[5] !== s || typeof e[3] != `string`) continue;
                let n = e[3],
                  r = m.queryClient.getQueryData(e)?.metadata;
                ((c === `page` && u.has(n)) ||
                  d.some((e) => e.pageIds.has(n)) ||
                  r?.access.can_read === !1 ||
                  r?.deleted_at != null ||
                  (t.error instanceof ce && [403, 404, 410].includes(t.error.status))) &&
                  (m.query.invalidate(Ae, n, { refetchType: `none` }),
                  ee.push(m.query.fetch(Ae, n).then(vt)));
              }
            }
            return (await Promise.allSettled(ee), !n.signal.aborted && u.size === o.length);
          })()
            .catch(_t)
            .then(
              (t) => (
                !t &&
                  !n.signal.aborted &&
                  m
                    .get(se)
                    .danger(
                      e === `restore`
                        ? g.formatMessage({
                            id: `codex.space.sidebar.restoreError`,
                            defaultMessage: `Could not restore item`,
                            description: `Notification when restoring a deleted Page or Space from Trash fails`,
                          })
                        : g.formatMessage({
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
              for (let e of r.values()) e.dispose();
              (n.stop(), n.signal.aborted || de(null));
            })
        );
      }),
      (n[6] = i),
      (n[7] = ge),
      (n[8] = g),
      (n[9] = c),
      (n[10] = m),
      (n[11] = w),
      (n[12] = S),
      (n[13] = s),
      (n[14] = Dt))
    : (Dt = n[14]);
  let H = Dt,
    Ot;
  n[15] !== g || n[16] !== c
    ? ((Ot = g.formatMessage(
        {
          id: `codex.space.trash.items.label`,
          defaultMessage: `{kind, select, page {Pages in Trash} other {Spaces in Trash}}`,
          description: `Accessible label for the selected Page or Space recovery list in Library Trash. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        },
        { kind: c },
      )),
      (n[15] = g),
      (n[16] = c),
      (n[17] = Ot))
    : (Ot = n[17]);
  let kt = Ot,
    At = L?.map((e) => ({
      id: e.page_id,
      content: (0, z.jsx)(Fe, {
        title: e.title || _,
        iconSize: v === `list` ? 20 : 32,
        children: (n) => {
          let { icon: i, title: s } = n,
            c = ye.selectedIds.has(e.page_id),
            d = (t) => Et(e.page_id, t?.shiftKey || !c, t?.shiftKey),
            f = (0, z.jsx)(`span`, {
              className: oe(
                `relative flex items-center`,
                (v === `grid` ? !c : !V) &&
                  `opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100`,
              ),
              onClickCapture: (t) => {
                t.shiftKey && (t.preventDefault(), Et(e.page_id, !c, !0));
              },
              children: (0, z.jsx)(ae, {
                checked: c,
                disabled: I,
                variant: v === `grid` ? `overlay` : `default`,
                onCheckedChange: (t) => Et(e.page_id, t),
                "aria-label": g.formatMessage(
                  {
                    id: `codex.space.trash.selectPage`,
                    defaultMessage: `Select {name}`,
                    description: `Select a deleted Page in Trash; name is its title`,
                  },
                  { name: s },
                ),
              }),
            }),
            p = V
              ? null
              : (0, z.jsxs)(a, {
                  align: `end`,
                  contentWidth: `menu`,
                  disabled: I,
                  triggerButton: (0, z.jsx)(t, {
                    color: v === `list` ? `ghost` : `cardAction`,
                    size: `inputIcon`,
                    radius: `full`,
                    disabled: I,
                    loading: b === e.page_id,
                    "aria-label": g.formatMessage(
                      {
                        id: `libraryNext.actions.menu`,
                        defaultMessage: `Open actions menu for {name}`,
                        description: `Accessible label for a Library item's overflow menu; name is the file or folder title`,
                      },
                      { name: s },
                    ),
                    children: (0, z.jsx)(ue, {}),
                  }),
                  children: [
                    (0, z.jsx)(re.Item, {
                      leftIcon: (0, z.jsx)(o, { icon: { assets: { 16: u, 20: te } } }),
                      onSelect: () => w({ type: `restore`, pages: [e] }),
                      children: (0, z.jsx)(l, {
                        id: `codex.space.trash.restore`,
                        defaultMessage: `Restore`,
                        description: `Action in a deleted Page's overflow menu in Library Trash that restores the Page and its nested Pages`,
                      }),
                    }),
                    (0, z.jsx)(re.Item, {
                      tone: `danger`,
                      leftIcon: (0, z.jsx)(o, { icon: { assets: { 16: ee, 20: r } } }),
                      onSelect: () => w({ type: `deleteForever`, pages: [e] }),
                      children: (0, z.jsx)(l, {
                        id: `library.trash.actions.permanentlyDelete`,
                        defaultMessage: `Permanently delete`,
                        description: `Overflow menu action that asks for confirmation before permanently deleting one Library file from Trash`,
                      }),
                    }),
                  ],
                }),
            ie = (0, z.jsx)(ne, { value: e.archived_at, month: `short`, day: `numeric` });
          return v === `grid`
            ? (0, z.jsx)(Se, {
                name: s,
                square: !0,
                actions: p,
                onOpen: d,
                selected: c,
                selection: f,
                selectionActive: V,
                children: (0, z.jsx)(Oe, { heading: s, artwork: i, footer: ie }),
              })
            : (0, z.jsx)(Pe, {
                name: s,
                onOpen: d,
                selected: c,
                selection: f,
                artwork: i,
                activity: ie,
                source: m.value.basePath === `/space` ? `—` : void 0,
                sizeBeforeDate: !0,
                detail: le ? (0, z.jsx)(ft, { bytes: e.size_bytes }) : void 0,
                actions: p == null ? void 0 : [{ key: `menu`, component: p }],
              });
        },
      }),
    })),
    U;
  if (c === `page`) {
    let e;
    (n[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, z.jsx)(l, {
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
      : ((e = (0, z.jsx)(l, {
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
      ? ((e = (0, z.jsx)(l, {
          id: `codex.space.sidebar.archivedDescription`,
          defaultMessage: `Restore deleted items to see them in Spaces again`,
          description: `Explanation for the Page and Space recovery lists in Library Trash. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (n[21] = e))
      : (e = n[21]),
      (U = e));
  }
  let jt = V && L?.every((e) => ye.selectedIds.has(e.page_id)),
    Mt = V;
  V && !jt && (Mt = `indeterminate`);
  let Nt = F
      ? null
      : (0, z.jsx)(dt, {
          showEmptyFileTrash: !1,
          emptyTrashAction:
            c === `page`
              ? {
                  label:
                    m.value.basePath === `/space`
                      ? (0, z.jsx)(l, {
                          id: `library.emptyTrash.shortAction`,
                          defaultMessage: `Empty trash`,
                          description: `Trash banner action that opens a confirmation before permanently deleting items of the selected type`,
                        })
                      : (0, z.jsx)(l, {
                          id: `codex.space.trash.emptyPages`,
                          defaultMessage: `Empty pages trash`,
                          description: `Trash banner button to open the confirmation for permanently deleting all trashed Pages`,
                        }),
                  disabled: I || !A?.length,
                  onClick: () => x(!0),
                }
              : void 0,
          content: U,
        }),
    Pt = at,
    Ft = ot != null,
    W;
  n[22] === Symbol.for(`react.memo_cache_sentinel`) ? ((W = (0, z.jsx)(ct, {})), (n[22] = W)) : (W = n[22]);
  let G;
  n[23] === k
    ? (G = n[24])
    : ((G = k
        ? (0, z.jsx)(l, {
            id: `codex.space.sidebar.archivedLoadError`,
            defaultMessage: `Some deleted items could not be loaded`,
            description: `Partial loading error for the Page and Space recovery lists in Library Trash`,
          })
        : null),
      (n[23] = k),
      (n[24] = G));
  let K;
  n[25] !== D || n[26] !== et || n[27] !== nt
    ? ((K = () => {
        et ? D({ cancelRefetch: !1 }) : nt();
      }),
      (n[25] = D),
      (n[26] = et),
      (n[27] = nt),
      (n[28] = K))
    : (K = n[28]);
  let q;
  n[29] === D ? (q = n[30]) : ((q = () => void D({ cancelRefetch: !1 })), (n[29] = D), (n[30] = q));
  let J;
  n[31] !== O || n[32] !== $e || n[33] !== q
    ? ((J = (0, z.jsx)(Ze, { hasNextPage: O, isFetchingNextPage: $e, onLoadNextPage: q })),
      (n[31] = O),
      (n[32] = $e),
      (n[33] = q),
      (n[34] = J))
    : (J = n[34]);
  let Y;
  n[35] !== U || n[36] !== c || n[37] !== F || n[38] !== P
    ? ((Y = F
        ? (0, z.jsx)(rt, { view: P ? `trash` : `trash-pages`, description: c === `space` ? U : void 0 })
        : null),
      (n[35] = U),
      (n[36] = c),
      (n[37] = F),
      (n[38] = P),
      (n[39] = Y))
    : (Y = n[39]);
  let It =
      c === `space`
        ? (0, z.jsxs)(z.Fragment, {
            children: [
              j
                ?.filter((e) =>
                  e.name
                    .toLocaleLowerCase(g.locale)
                    .includes(m.value.search.trim().toLocaleLowerCase(g.locale)),
                )
                .map((e) =>
                  (0, z.jsxs)(
                    `div`,
                    {
                      className: `flex items-center justify-between gap-2 rounded-lg border border-default p-3`,
                      children: [
                        (0, z.jsx)(`span`, { className: `min-w-0 truncate`, children: e.name }),
                        (0, z.jsx)(t, {
                          color: `secondary`,
                          size: `compact`,
                          loading: b === e.id,
                          disabled: I,
                          onClick: () => void H(`restore`, [e.id]),
                          children: (0, z.jsx)(l, {
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
              j?.length === 0 && !O && !k && !F
                ? (0, z.jsx)(be, {
                    layout: `browse`,
                    title: (0, z.jsx)(l, {
                      id: `codex.space.trash.items.empty`,
                      defaultMessage: `{kind, select, page {No pages in Trash} other {No spaces in Trash}}`,
                      description: `Empty state for the selected Page or Space recovery list in Library Trash. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                      values: { kind: c },
                    }),
                  })
                : null,
            ],
          })
        : null,
    Lt =
      c === `page` && At?.length === 0 && !O && !k && !F
        ? (0, z.jsx)(be, {
            layout: `browse`,
            title: (0, z.jsx)(l, {
              id: `codex.space.trash.pages.empty`,
              defaultMessage: `No pages found`,
              description: `Empty state for Pages in Library Trash when there are no deleted Pages or none match the search`,
            }),
          })
        : null,
    Rt =
      c === `page` &&
      At != null &&
      (At.length > 0 || O) &&
      (v === `grid`
        ? (0, z.jsx)(`div`, { className: `pt-4`, children: (0, z.jsx)(Ke, { items: At }) })
        : (0, z.jsxs)(`div`, {
            className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
            role: `grid`,
            tabIndex: -1,
            "aria-label": kt,
            onKeyDown: it,
            children: [
              (0, z.jsx)(ut, {
                showSource: m.value.basePath === `/space`,
                selection: (0, z.jsx)(`span`, {
                  className: oe(
                    `relative flex items-center`,
                    !V && `opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100`,
                  ),
                  children: (0, z.jsx)(ae, {
                    disabled: I,
                    checked: Mt,
                    onCheckedChange: () => S({ anchor: null, selectedIds: new Set(V ? [] : L?.map(gt)) }),
                    "aria-label": g.formatMessage(
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
              At.map(ht),
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
  n[51] !== v
    ? ((X = (0, z.jsxs)(Pt, {
        loading: N,
        hasData: Ft,
        viewMode: v,
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
      (n[51] = v),
      (n[52] = X))
    : (X = n[52]);
  let Z;
  n[53] !== I || n[54] !== c || n[55] !== p || n[56] !== f || n[57] !== B || n[58] !== w || n[59] !== S
    ? ((Z =
        c === `page`
          ? (0, z.jsx)(pt, {
              scrollContainerRef: f,
              onMount: p,
              trashSelection: {
                count: B?.length ?? 0,
                pending: I,
                onClear: () => S({ selectedIds: new Set(), anchor: null }),
                onRestore: () => {
                  B?.length && w({ type: `restore`, pages: B });
                },
                onDelete: () => {
                  B?.length && w({ type: `deleteForever`, pages: B });
                },
              },
            })
          : null),
      (n[53] = I),
      (n[54] = c),
      (n[55] = p),
      (n[56] = f),
      (n[57] = B),
      (n[58] = w),
      (n[59] = S),
      (n[60] = Z))
    : (Z = n[60]);
  let Q;
  n[61] !== fe || n[62] !== H || n[63] !== m || n[64] !== x
    ? ((Q = fe
        ? (0, z.jsx)(wt, {
            accountId: m.value.accountId,
            userId: m.value.userId,
            sessionId: m.get(Je).sessionId,
            action: {
              description: (0, z.jsx)(l, {
                id: `codex.space.trash.emptyDescription`,
                defaultMessage: `Pages in Trash will be deleted forever. This can't be undone.`,
                description: `Warning in the Empty pages trash confirmation. Confirming permanently deletes all trashed Pages, including those not loaded or matching the current search.`,
              }),
              onConfirm: () => H(`empty`, []),
            },
            onClose: () => x(!1),
          })
        : null),
      (n[61] = fe),
      (n[62] = H),
      (n[63] = m),
      (n[64] = x),
      (n[65] = Q))
    : (Q = n[65]);
  let $;
  n[66] !== C || n[67] !== I || n[68] !== b || n[69] !== H || n[70] !== w || n[71] !== _
    ? (($ =
        C == null
          ? null
          : (0, z.jsx)(pe, {
              open: !0,
              showDialogClose: !1,
              contentProps: { "aria-describedby": void 0 },
              onOpenChange: (e) => {
                !e && !I && w(null);
              },
              children: (0, z.jsx)(me, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(), I || H(C.type, C.pages.map(mt)));
                },
                children: (0, z.jsx)(Tt, {
                  title:
                    C.type === `restore`
                      ? (0, z.jsx)(l, {
                          id: `codex.space.trash.restoreTitle`,
                          defaultMessage: `{count, plural, one {Restore page} other {Restore selected pages}}`,
                          description: `Title of the Pages Trash restore confirmation, count is the number of selected Pages`,
                          values: { count: C.pages.length },
                        })
                      : (0, z.jsx)(l, {
                          id: `libraryNext.delete.foreverTitle`,
                          defaultMessage: `Delete forever`,
                          description: `Title of the irreversible deletion confirmation for Library Trash files`,
                        }),
                  description: (0, z.jsx)(`p`, {
                    children:
                      C.type === `restore`
                        ? (0, z.jsx)(l, {
                            id: `codex.space.trash.restoreToSpace`,
                            defaultMessage: `{count, plural, one {"{name}" will be restored to your Space} other {These # selected pages will be restored to your Space}}`,
                            description: `Restoration confirmation for deleted Pages. count is the number of Pages; name is the title of the single selected Page. Space is the product destination. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                            values: { count: C.pages.length, name: C.pages[0].title || _ },
                          })
                        : (0, z.jsx)(l, {
                            id: `codex.space.trash.deleteDescription`,
                            defaultMessage: `{count, plural, one {"{name}" will be deleted forever. This can't be undone.} other {These # selected pages will be deleted forever. This can't be undone.}}`,
                            description: `Irreversible deletion confirmation for Pages Trash. count is the number of selected Pages; name is the title of the single selected Page.`,
                            values: { count: C.pages.length, name: C.pages[0].title || _ },
                          }),
                  }),
                  pending: b != null,
                  restore: C.type === `restore`,
                  confirmLabel: (0, z.jsx)(l, {
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
      (n[68] = b),
      (n[69] = H),
      (n[70] = w),
      (n[71] = _),
      (n[72] = $))
    : ($ = n[72]);
  let zt;
  return (
    n[73] !== kt || n[74] !== Nt || n[75] !== X || n[76] !== Z || n[77] !== Q || n[78] !== $
      ? ((zt = (0, z.jsxs)(`section`, {
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
function mt(e) {
  return e.page_id;
}
function ht(e) {
  let { id: t, content: n } = e;
  return (0, z.jsx)(`div`, { role: `presentation`, "data-library-item": !0, children: n }, t);
}
function gt(e) {
  return e.page_id;
}
function _t() {
  return !1;
}
function vt() {}
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
var Ct, R, z, wt, Tt;
function B() {
  return (B = e(() => {
    ((Ct = ve()),
      s(),
      f(),
      y(),
      b(),
      g(),
      p(),
      ze(),
      (R = S()),
      le(),
      Ue(),
      Qe(),
      he(),
      c(),
      ge(),
      _(),
      n(),
      m(),
      D(),
      qe(),
      C(),
      de(),
      fe(),
      j(),
      $e(),
      et(),
      P(),
      O(),
      He(),
      A(),
      ot(),
      F(),
      w(),
      T(),
      tt(),
      De(),
      E(),
      k(),
      _e(),
      nt(),
      Re(),
      M(),
      N(),
      (z = ye()),
      x(),
      (wt = i(
        async () =>
          (
            await v(
              async () => {
                let { EmptyLibraryTrashDialog: e } = await import(`./library-empty-trash-b55e29b80525.js`);
                return { EmptyLibraryTrashDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).EmptyLibraryTrashDialog,
      )),
      (Tt = i(
        async () =>
          (
            await v(
              async () => {
                let { LibraryItemConfirmationContent: e } = await import(
                  `./library-item-dialogs-9ee5fe2d2bc1.js`
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
B();
export { I as SpaceTrashItems };
//# sourceMappingURL=space-trash-items-67cef26fe24c.js.map
