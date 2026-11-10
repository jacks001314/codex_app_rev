import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  Hxt as r,
  IDt as i,
  Ixt as a,
  Kot as o,
  Pxt as s,
  TJ as c,
  VDt as ee,
  Vxt as te,
  Zxt as l,
  _Mt as u,
  _O as d,
  cO as ne,
  fO as f,
  gMt as re,
  hot as ie,
  i3 as p,
  jDt as m,
  lO as ae,
  lot as h,
  mO as oe,
  oO as se,
  r3 as ce,
  sO as le,
  t3 as ue,
  tU as de,
  vO as g,
  vzt as fe,
  xMt as _,
  yzt as pe,
  zxt as me,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as v,
  ACn as he,
  Dpt as ge,
  Gb as y,
  Hln as b,
  Vln as x,
  Xct as _e,
  Ypt as ve,
  jCn as S,
  lS as C,
  nS as ye,
  qb as be,
  rS as xe,
  tln as Se,
  vpt as Ce,
  wpt as we,
} from "./app-initial-5851df3f6cb1.js";
import { n as w, t as Te } from "./library-create-dialog-d8acb33fdbec.js";
function Ee(e) {
  let t = (0, Pe.c)(13),
    {
      accountId: n,
      userId: i,
      analyticsContext: a,
      entries: o,
      initialPath: s,
      rootDirectoryId: c,
      onMoved: ee,
      onClose: te,
    } = e,
    l;
  t[0] !== n || t[1] !== i
    ? ((l = { accountId: n, userId: i }), (t[0] = n), (t[1] = i), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== a || t[4] !== o || t[5] !== s || t[6] !== te || t[7] !== ee || t[8] !== c
    ? ((u = (0, T.jsx)(De, {
        analyticsContext: a,
        entries: o,
        initialPath: s,
        rootDirectoryId: c,
        onMoved: ee,
        onClose: te,
      })),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = te),
      (t[7] = ee),
      (t[8] = c),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== l || t[11] !== u
      ? ((d = (0, T.jsx)(r, { scope: Se, value: l, children: u })), (t[10] = l), (t[11] = u), (t[12] = d))
      : (d = t[12]),
    d
  );
}
function De(e) {
  let r = (0, Pe.c)(115),
    { analyticsContext: o, entries: s, initialPath: c, rootDirectoryId: l, onMoved: u, onClose: f } = e,
    p = a(Se),
    m = ee(),
    [h, ue] = (0, Fe.useState)(c),
    [g, fe] = (0, Fe.useState)(s),
    [_, pe] = (0, Fe.useState)(!1),
    [v, ge] = (0, Fe.useState)(!1),
    y;
  r[0] === h ? (y = r[1]) : ((y = h.at(-1)?.id ?? null), (r[0] = h), (r[1] = y));
  let b = y,
    x;
  r[2] !== b || r[3] !== g || r[4] !== l
    ? ((x = b == null && l == null && g.some(Me)), (r[2] = b), (r[3] = g), (r[4] = l), (r[5] = x))
    : (x = r[5]);
  let S = x,
    C;
  r[6] === S ? (C = r[7]) : ((C = { enabled: S }), (r[6] = S), (r[7] = C));
  let { data: we, isPending: w, isFetching: Ee, refetch: De } = te(ve, C),
    E = l ?? we,
    Le = S && !w && we == null,
    {
      data: Re,
      isLoading: D,
      isFetching: O,
      isSuccess: ze,
      isFetchedAfterMount: Be,
      error: k,
      refetch: Ve,
    } = me(Ie, b),
    A = b === `external-gdrive:root`,
    He = ze && Be && !O,
    j = b === E ? null : (Re?.rootDestinationId ?? b),
    Ue = te(Ce).includes(`google_drive`) && g.length > 0 && g.every(xe),
    We;
  r[8] === g ? (We = r[9]) : ((We = new Set(g.filter(je).map(Ae))), (r[8] = g), (r[9] = We));
  let M = We,
    N = (A && !He ? void 0 : Re?.items)?.filter(
      (e) => e.kind === `directory` && (ye({ node: e }) || (Ue && Ne(e.id) && e.access_kind !== `shared`)),
    ),
    Ge;
  if (r[10] !== j || r[11] !== E || r[12] !== g) {
    let e;
    (r[14] !== j || r[15] !== E
      ? ((e = (e) => {
          let { node: t } = e;
          return (t.parent_directory_id === E ? null : (t.parent_directory_id ?? null)) !== j;
        }),
        (r[14] = j),
        (r[15] = E),
        (r[16] = e))
      : (e = r[16]),
      (Ge = g.filter(e)),
      (r[10] = j),
      (r[11] = E),
      (r[12] = g),
      (r[13] = Ge));
  } else Ge = r[13];
  let Ke = Ge,
    qe;
  if (r[17] !== h || r[18] !== M) {
    let e;
    (r[20] === M
      ? (e = r[21])
      : ((e = (e) => {
          let { id: t } = e;
          return M.has(t);
        }),
        (r[20] = M),
        (r[21] = e)),
      (qe = h.some(e)),
      (r[17] = h),
      (r[18] = M),
      (r[19] = qe));
  } else qe = r[19];
  let Je = qe,
    Ye =
      Ke.length > 0 &&
      !Je &&
      (!A || (He && Re.rootDestinationId != null)) &&
      (!S || E != null) &&
      (!Ne(b) || Ue),
    Xe;
  r[22] !== b || r[23] !== Je || r[24] !== _
    ? ((Xe = !_ && !Je && (b == null || (!b.startsWith(`external-`) && !b.startsWith(`library:`)))),
      (r[22] = b),
      (r[23] = Je),
      (r[24] = _),
      (r[25] = Xe))
    : (Xe = r[25]);
  let Ze = Xe;
  if (v) {
    let e;
    r[26] === o ? (e = r[27]) : ((e = () => o), (r[26] = o), (r[27] = e));
    let t;
    r[28] === h
      ? (t = r[29])
      : ((t = (e) => {
          ue([...h, { id: e.id, name: e.name }]);
        }),
        (r[28] = h),
        (r[29] = t));
    let n;
    return (
      r[30] !== v ||
      r[31] !== j ||
      r[32] !== p.value.accountId ||
      r[33] !== p.value.userId ||
      r[34] !== e ||
      r[35] !== t
        ? ((n = (0, T.jsx)(Te, {
            accountId: p.value.accountId,
            getAnalyticsContext: e,
            userId: p.value.userId,
            directoryId: j,
            onCreated: t,
            open: v,
            onOpenChange: ge,
          })),
          (r[30] = v),
          (r[31] = j),
          (r[32] = p.value.accountId),
          (r[33] = p.value.userId),
          (r[34] = e),
          (r[35] = t),
          (r[36] = n))
        : (n = r[36]),
      n
    );
  }
  let Qe = oe,
    P;
  r[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { "aria-describedby": void 0 }), (r[37] = P))
    : (P = r[37]);
  let F;
  r[38] !== f || r[39] !== _
    ? ((F = (e) => {
        !e && !_ && f();
      }),
      (r[38] = f),
      (r[39] = _),
      (r[40] = F))
    : (F = r[40]);
  let $e = se,
    et = (e) => {
      (e.preventDefault(),
        !_ &&
          Ye &&
          (pe(!0),
          be(p, Ke, { type: `move`, directoryId: j }).then(async (e) => {
            await u(
              [...e, ...g.filter((e) => !Ke.includes(e)).map(ke)],
              [...(E == null ? [] : [E]), ...h.map(Oe)],
            );
            let t = Ke.filter((t) => {
              let { node: n } = t;
              return !e.includes(n.id);
            });
            (pe(!1),
              t.length === 0
                ? (e.length > 0 &&
                    p
                      .get(ie)
                      .success(
                        h.length > 0
                          ? (0, T.jsx)(i, {
                              id: `libraryNext.actions.moveSuccess`,
                              defaultMessage: `Moved to “{name}”`,
                              description: `Success toast after moving Library items into a folder; name is the destination folder name`,
                              values: { name: h.at(-1)?.name },
                            })
                          : (0, T.jsx)(i, {
                              id: `libraryNext.actions.moveSuccessRoot`,
                              defaultMessage: `Moved to Library`,
                              description: `Success toast after moving Library items to the Library root`,
                            }),
                        { id: `library-move-success`, variant: `successNeutral`, hasCloseButton: !1 },
                      ),
                  f())
                : fe(t));
          })));
    },
    I;
  r[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, T.jsx)(ae, {
        children: (0, T.jsx)(ne, {
          title: (0, T.jsx)(d, {
            children: (0, T.jsx)(i, {
              id: `libraryNext.move.title`,
              defaultMessage: `Move to…`,
              description: `Title of the destination picker for selected Library items`,
            }),
          }),
        }),
      })),
      (r[41] = I))
    : (I = r[41]);
  let tt = ae,
    L;
  r[42] === m
    ? (L = r[43])
    : ((L = m.formatMessage({
        id: `libraryNext.move.breadcrumbLabel`,
        defaultMessage: `Move destination`,
        description: `Accessible label for the move destination breadcrumb navigation`,
      })),
      (r[42] = m),
      (r[43] = L));
  let R;
  r[44] === m
    ? (R = r[45])
    : ((R = m.formatMessage({
        id: `libraryNext.title.library`,
        defaultMessage: `Library`,
        description: `Title of the Library page`,
      })),
      (r[44] = m),
      (r[45] = R));
  let z;
  r[46] === R ? (z = r[47]) : ((z = { id: null, name: R }), (r[46] = R), (r[47] = z));
  let B;
  r[48] !== h || r[49] !== z ? ((B = [z, ...h]), (r[48] = h), (r[49] = z), (r[50] = B)) : (B = r[50]);
  let V;
  r[51] !== h || r[52] !== _ || r[53] !== B
    ? ((V = (0, T.jsx)(`ol`, {
        className: `flex min-w-0 items-center gap-2 text-sm`,
        children: B.map((e, n) =>
          (0, T.jsxs)(
            `li`,
            {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                n > 0
                  ? (0, T.jsx)(`span`, {
                      className: `text-tertiary`,
                      children: (0, T.jsx)(i, {
                        id: `libraryNext.move.breadcrumbSeparator`,
                        defaultMessage: `/`,
                        description: `Separator between move destination breadcrumb items`,
                      }),
                    })
                  : null,
                n === h.length
                  ? (0, T.jsx)(`span`, {
                      className: `min-w-0 truncate`,
                      title: e.name,
                      "aria-current": `page`,
                      children: e.name,
                    })
                  : (0, T.jsx)(t, {
                      color: `ghost`,
                      size: `actionSm`,
                      type: `button`,
                      disabled: _,
                      onClick: () => ue(h.slice(0, n)),
                      children: e.name,
                    }),
              ],
            },
            e.id ?? `root`,
          ),
        ),
      })),
      (r[51] = h),
      (r[52] = _),
      (r[53] = B),
      (r[54] = V))
    : (V = r[54]);
  let H;
  r[55] !== L || r[56] !== V
    ? ((H = (0, T.jsx)(`nav`, { className: `mb-5`, "aria-label": L, children: V })),
      (r[55] = L),
      (r[56] = V),
      (r[57] = H))
    : (H = r[57]);
  let nt = N?.length === 0 && `flex flex-1 flex-col`,
    U;
  r[58] === nt ? (U = r[59]) : ((U = re(`min-h-0`, nt)), (r[58] = nt), (r[59] = U));
  let W;
  r[60] !== A || r[61] !== O || r[62] !== D || r[63] !== w || r[64] !== S
    ? ((W =
        D || (A && O) || (S && w)
          ? (0, T.jsxs)(`div`, {
              className: `flex items-center gap-2 py-2 text-sm text-secondary`,
              children: [
                (0, T.jsx)(ce, { className: `size-4` }),
                (0, T.jsx)(i, {
                  id: `libraryNext.move.loading`,
                  defaultMessage: `Loading folders…`,
                  description: `Status while move destination contents are loading`,
                }),
              ],
            })
          : null),
      (r[60] = A),
      (r[61] = O),
      (r[62] = D),
      (r[63] = w),
      (r[64] = S),
      (r[65] = W))
    : (W = r[65]);
  let rt = N?.map((e) =>
      (0, T.jsx)(
        _e,
        {
          density: `row`,
          title: e.name,
          icon: (0, T.jsx)(de, {}),
          rightText: (0, T.jsx)(n, {}),
          rightTextPosition: `center`,
          isSelected: !1,
          isDisabled: _ || M.has(e.id),
          onSelect: () => ue([...h, { id: e.id, name: e.name }]),
        },
        e.id,
      ),
    ),
    G;
  r[66] !== N?.length || r[67] !== k || r[68] !== D
    ? ((G =
        N?.length === 0 && !D && !k
          ? (0, T.jsx)(he, {
              title: (0, T.jsx)(i, {
                id: `libraryNext.move.emptyFolder`,
                defaultMessage: `This folder is empty`,
                description: `Empty destination picker; the current folder can still be chosen as a move destination`,
              }),
            })
          : null),
      (r[66] = N?.length),
      (r[67] = k),
      (r[68] = D),
      (r[69] = G))
    : (G = r[69]);
  let K;
  r[70] !== k || r[71] !== O || r[72] !== Ee || r[73] !== S || r[74] !== Ve || r[75] !== De || r[76] !== Le
    ? ((K =
        k || Le
          ? (0, T.jsxs)(`div`, {
              role: `alert`,
              className: `flex items-center gap-3 py-2 text-sm text-secondary`,
              children: [
                k
                  ? (0, T.jsx)(i, {
                      id: `libraryNext.move.loadFailed`,
                      defaultMessage: `Failed to load files.`,
                      description: `Move destination folders could not be loaded`,
                    })
                  : (0, T.jsx)(i, {
                      id: `libraryNext.move.rootLookupFailed`,
                      defaultMessage: `Couldn't identify the Library root`,
                      description: `The move picker cannot confirm whether the selected files are already in the Library root; retry before moving them there`,
                    }),
                (0, T.jsx)(t, {
                  color: `ghost`,
                  size: `actionSm`,
                  type: `button`,
                  disabled: O || (S && Ee),
                  onClick: () => {
                    (k && Ve(), Le && De());
                  },
                  children: (0, T.jsx)(i, {
                    id: `libraryNext.results.retry`,
                    defaultMessage: `Try again`,
                    description: `Retry fetching Library results`,
                  }),
                }),
              ],
            })
          : null),
      (r[70] = k),
      (r[71] = O),
      (r[72] = Ee),
      (r[73] = S),
      (r[74] = Ve),
      (r[75] = De),
      (r[76] = Le),
      (r[77] = K))
    : (K = r[77]);
  let q;
  r[78] !== U || r[79] !== W || r[80] !== rt || r[81] !== G || r[82] !== K
    ? ((q = (0, T.jsxs)(`div`, { role: `list`, className: U, children: [W, rt, G, K] })),
      (r[78] = U),
      (r[79] = W),
      (r[80] = rt),
      (r[81] = G),
      (r[82] = K),
      (r[83] = q))
    : (q = r[83]);
  let J;
  r[84] !== tt || r[85] !== H || r[86] !== q
    ? ((J = (0, T.jsxs)(tt, { className: `min-h-0 overflow-y-auto`, children: [H, q] })),
      (r[84] = tt),
      (r[85] = H),
      (r[86] = q),
      (r[87] = J))
    : (J = r[87]);
  let it = !Ze,
    at,
    ot;
  r[88] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = () => ge(!0)),
      (ot = (0, T.jsx)(i, {
        id: `libraryNext.move.newFolder`,
        defaultMessage: `New folder`,
        description: `Create a folder in the currently browsed Library move destination`,
      })),
      (r[88] = at),
      (r[89] = ot))
    : ((at = r[88]), (ot = r[89]));
  let Y;
  r[90] === it
    ? (Y = r[91])
    : ((Y = (0, T.jsx)(t, { color: `secondary`, type: `button`, disabled: it, onClick: at, children: ot })),
      (r[90] = it),
      (r[91] = Y));
  let st;
  r[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, T.jsx)(i, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (r[92] = st))
    : (st = r[92]);
  let X;
  r[93] !== f || r[94] !== _
    ? ((X = (0, T.jsx)(t, { color: `secondary`, type: `button`, disabled: _, onClick: f, children: st })),
      (r[93] = f),
      (r[94] = _),
      (r[95] = X))
    : (X = r[95]);
  let ct = !Ye || _,
    lt;
  r[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, T.jsx)(i, {
        id: `libraryNext.move.confirm`,
        defaultMessage: `Move here`,
        description: `Move selected Library items into the currently browsed destination folder`,
      })),
      (r[96] = lt))
    : (lt = r[96]);
  let Z;
  r[97] !== _ || r[98] !== ct
    ? ((Z = (0, T.jsx)(t, { color: `primary`, loading: _, type: `submit`, disabled: ct, children: lt })),
      (r[97] = _),
      (r[98] = ct),
      (r[99] = Z))
    : (Z = r[99]);
  let Q;
  r[100] !== Y || r[101] !== X || r[102] !== Z
    ? ((Q = (0, T.jsx)(ae, { children: (0, T.jsxs)(le, { className: `flex-wrap`, children: [Y, X, Z] }) })),
      (r[100] = Y),
      (r[101] = X),
      (r[102] = Z),
      (r[103] = Q))
    : (Q = r[103]);
  let $;
  r[104] !== $e || r[105] !== et || r[106] !== I || r[107] !== J || r[108] !== Q
    ? (($ = (0, T.jsxs)($e, { as: `form`, size: `scrollable`, onSubmit: et, children: [I, J, Q] })),
      (r[104] = $e),
      (r[105] = et),
      (r[106] = I),
      (r[107] = J),
      (r[108] = Q),
      (r[109] = $))
    : ($ = r[109]);
  let ut;
  return (
    r[110] !== Qe || r[111] !== P || r[112] !== F || r[113] !== $
      ? ((ut = (0, T.jsx)(Qe, { open: !0, size: `wide`, contentProps: P, onOpenChange: F, children: $ })),
        (r[110] = Qe),
        (r[111] = P),
        (r[112] = F),
        (r[113] = $),
        (r[114] = ut))
      : (ut = r[114]),
    ut
  );
}
function Oe(e) {
  let { id: t } = e;
  return t;
}
function ke(e) {
  let { node: t } = e;
  return t.id;
}
function Ae(e) {
  let { node: t } = e;
  return t.id;
}
function je(e) {
  let { node: t } = e;
  return t.kind === `directory`;
}
function Me(e) {
  let { node: t } = e;
  return t.parent_directory_id != null;
}
function Ne(e) {
  return e != null && /^external-gdrive:(?:account:[A-Za-z0-9_-]+:)?(?:root$|folder:.+)/u.test(e);
}
var Pe, Fe, T, Ie;
function E() {
  return (E = e(() => {
    ((Pe = fe()),
      u(),
      s(),
      (Fe = pe()),
      m(),
      ue(),
      g(),
      f(),
      c(),
      S(),
      v(),
      p(),
      h(),
      b(),
      we(),
      w(),
      y(),
      C(),
      (T = _()),
      (Ie = l(Se, (e, { get: t, scope: n }) =>
        o({
          queryKey: [`library-api`, n.value.accountId, n.value.userId, `move-destinations`, e],
          queryFn: async ({ signal: n }) => {
            let r = t(ge),
              i =
                e === `external-gdrive:root`
                  ? await r.safeGet(`/files/library/directories/path`, {
                      parameters: { query: { directory_id: e } },
                      signal: n,
                    })
                  : void 0,
              a = x(e, i?.items),
              o = [],
              s = new Set(),
              c;
            do {
              let t = await r.safeGet(`/files/library/nodes`, {
                parameters: {
                  query: {
                    parent_directory_id: a ?? e,
                    cursor: c,
                    include_files: !1,
                    include_saved_entities: !1,
                  },
                },
                signal: n,
              });
              if ((o.push(...t.items), Ne(e) || !t.cursor || s.has(t.cursor))) break;
              (s.add(t.cursor), (c = t.cursor));
            } while (c != null);
            return {
              items: o,
              rootDestinationId:
                a ??
                (i?.items.at(-1)?.id === e &&
                o.some((e) => e.id === `external-gdrive:collection:shared-with-me`)
                  ? e
                  : null),
            };
          },
          staleTime: e === `external-gdrive:root` ? 0 : 3e4,
          refetchOnMount: e === `external-gdrive:root` ? `always` : void 0,
        }),
      )));
  }))();
}
E();
export { Ee as MoveLibraryItemsDialog };
//# sourceMappingURL=library-move-dialog-f474d487f111.js.map
