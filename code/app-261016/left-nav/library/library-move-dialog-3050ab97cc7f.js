import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  FBt as r,
  HO as i,
  IH as a,
  IO as o,
  JO as s,
  LNt as c,
  LO as ee,
  MNt as te,
  NNt as l,
  Ost as u,
  PBt as d,
  QU as ne,
  RO as re,
  TY as f,
  Vrt as p,
  WO as ie,
  XOt as m,
  Y3 as h,
  Z3 as g,
  ZSt as ae,
  aCt as _,
  e6 as oe,
  iCt as se,
  mCt as v,
  nCt as ce,
  okt as le,
  qO as ue,
  qrt as de,
  tkt as y,
  zO as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AS as pe,
  BS as me,
  Dmt as he,
  Imt as ge,
  Ipn as b,
  Lpn as _e,
  MS as ve,
  Nmt as x,
  RS as S,
  XEn as C,
  Xfn as ye,
  YEn as be,
  _x as w,
  iht as xe,
  iut as T,
  jS as Se,
  lBr as Ce,
  tut as we,
  uBr as Te,
  yx as Ee,
  zS as De,
} from "./app-initial-ad16eaadf81f.js";
import { n as Oe, t as ke } from "./library-create-dialog-a8c2bb7f2040.js";
function Ae(e) {
  let t = (0, Re.c)(14),
    {
      accountId: n,
      userId: r,
      analyticsContext: i,
      entries: a,
      initialPath: o,
      rootDirectoryId: s,
      basePath: c,
      onMoved: ee,
      onClose: te,
    } = e,
    l;
  t[0] !== n || t[1] !== r
    ? ((l = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== i || t[4] !== c || t[5] !== a || t[6] !== o || t[7] !== te || t[8] !== ee || t[9] !== s
    ? ((u = (0, E.jsx)(je, {
        analyticsContext: i,
        entries: a,
        initialPath: o,
        rootDirectoryId: s,
        basePath: c,
        onMoved: ee,
        onClose: te,
      })),
      (t[3] = i),
      (t[4] = c),
      (t[5] = a),
      (t[6] = o),
      (t[7] = te),
      (t[8] = ee),
      (t[9] = s),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== l || t[12] !== u
      ? ((d = (0, E.jsx)(_, { scope: ye, value: l, children: u })), (t[11] = l), (t[12] = u), (t[13] = d))
      : (d = t[13]),
    d
  );
}
function je(e) {
  let r = (0, Re.c)(124),
    {
      analyticsContext: i,
      entries: s,
      initialPath: c,
      rootDirectoryId: l,
      basePath: u,
      onMoved: d,
      onClose: f,
    } = e,
    p = n(ye),
    m = le(),
    [g, ae] = (0, ze.useState)(c),
    [_, oe] = (0, ze.useState)(s),
    [v, ge] = (0, ze.useState)(!1),
    [b, _e] = (0, ze.useState)(!1),
    x = l != null && /^libdir_fde[123]_/.test(l) ? l : null,
    S;
  r[0] !== x || r[1] !== g ? ((S = g.at(-1)?.id ?? x), (r[0] = x), (r[1] = g), (r[2] = S)) : (S = r[2]);
  let C = S,
    w;
  r[3] !== b || r[4] !== C || r[5] !== _ || r[6] !== l
    ? ((w = C == null && l == null && (b || _.some(Ie))),
      (r[3] = b),
      (r[4] = C),
      (r[5] = _),
      (r[6] = l),
      (r[7] = w))
    : (w = r[7]);
  let T = w,
    Ce;
  r[8] === T ? (Ce = r[9]) : ((Ce = { enabled: T }), (r[8] = T), (r[9] = Ce));
  let { data: Oe, isPending: Ae, isFetching: je, refetch: Ve } = se(xe, Ce),
    D = l ?? Oe,
    He = T && !Ae && Oe == null,
    {
      data: Ue,
      isLoading: O,
      isFetching: k,
      isSuccess: We,
      isFetchedAfterMount: Ge,
      error: A,
      refetch: Ke,
    } = ce(Be, C),
    qe = C === `external-gdrive:root`,
    Je = We && Ge && !k,
    j = x == null && C === D ? null : (Ue?.rootDestinationId ?? C),
    Ye = se(he).includes(`google_drive`),
    Xe = x == null && Ye && _.length > 0 && _.every(Se),
    Ze;
  r[10] === _ ? (Ze = r[11]) : ((Ze = new Set(_.filter(Fe).map(Pe))), (r[10] = _), (r[11] = Ze));
  let M = Ze,
    Qe = (qe && !Je ? void 0 : Ue?.items)?.filter(
      (e) =>
        e.kind === `directory` &&
        (x == null || De({ node: e })) &&
        (pe({ node: e }) || (Xe && Le(e.id) && e.access_kind !== `shared`)),
    ),
    $e;
  if (r[12] !== j || r[13] !== D || r[14] !== x || r[15] !== _) {
    let e;
    (r[17] !== j || r[18] !== D || r[19] !== x
      ? ((e = (e) => {
          let { node: t } = e;
          return (x == null && t.parent_directory_id === D ? null : (t.parent_directory_id ?? null)) !== j;
        }),
        (r[17] = j),
        (r[18] = D),
        (r[19] = x),
        (r[20] = e))
      : (e = r[20]),
      ($e = _.filter(e)),
      (r[12] = j),
      (r[13] = D),
      (r[14] = x),
      (r[15] = _),
      (r[16] = $e));
  } else $e = r[16];
  let et = $e,
    tt;
  if (r[21] !== g || r[22] !== M) {
    let e;
    (r[24] === M
      ? (e = r[25])
      : ((e = (e) => {
          let { id: t } = e;
          return M.has(t);
        }),
        (r[24] = M),
        (r[25] = e)),
      (tt = g.some(e)),
      (r[21] = g),
      (r[22] = M),
      (r[23] = tt));
  } else tt = r[23];
  let nt = tt,
    rt =
      ve(_) &&
      et.length > 0 &&
      !nt &&
      (!qe || (Je && Ue.rootDestinationId != null)) &&
      (!T || D != null) &&
      (!Le(C) || Xe),
    N = j ?? D,
    it;
  r[26] !== u || r[27] !== N
    ? ((it = N != null && me(N, u)), (r[26] = u), (r[27] = N), (r[28] = it))
    : (it = r[28]);
  let at = it,
    ot = ce(at ? Te : !1, `3480763875`),
    st = !at || ot,
    ct;
  r[29] !== b || r[30] !== C || r[31] !== nt || r[32] !== v
    ? ((ct = !v && !b && !nt && (C == null || (!C.startsWith(`external-`) && !C.startsWith(`library:`)))),
      (r[29] = b),
      (r[30] = C),
      (r[31] = nt),
      (r[32] = v),
      (r[33] = ct))
    : (ct = r[33]);
  let lt = ct;
  if (b && N != null) {
    let e;
    r[34] === i ? (e = r[35]) : ((e = () => i), (r[34] = i), (r[35] = e));
    let t;
    r[36] === g
      ? (t = r[37])
      : ((t = (e) => {
          ae([...g, { id: e.id, name: e.name }]);
        }),
        (r[36] = g),
        (r[37] = t));
    let n;
    return (
      r[38] !== u ||
      r[39] !== N ||
      r[40] !== b ||
      r[41] !== p.value.accountId ||
      r[42] !== p.value.userId ||
      r[43] !== t ||
      r[44] !== e
        ? ((n = (0, E.jsx)(ke, {
            accountId: p.value.accountId,
            getAnalyticsContext: e,
            userId: p.value.userId,
            directoryId: N,
            basePath: u,
            onCreated: t,
            open: b,
            onOpenChange: _e,
          })),
          (r[38] = u),
          (r[39] = N),
          (r[40] = b),
          (r[41] = p.value.accountId),
          (r[42] = p.value.userId),
          (r[43] = t),
          (r[44] = e),
          (r[45] = n))
        : (n = r[45]),
      n
    );
  }
  let ut = ie,
    P;
  r[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { "aria-describedby": void 0 }), (r[46] = P))
    : (P = r[46]);
  let F;
  r[47] !== f || r[48] !== v
    ? ((F = (e) => {
        !e && !v && f();
      }),
      (r[47] = f),
      (r[48] = v),
      (r[49] = F))
    : (F = r[49]);
  let dt = o,
    ft = (e) => {
      (e.preventDefault(),
        !v &&
          rt &&
          (ge(!0),
          Ee(p, et, { type: `move`, directoryId: j }).then(async (e) => {
            await d(
              [...e, ..._.filter((e) => !et.includes(e)).map(Ne)],
              [...(D == null ? [] : [D]), ...g.map(Me)],
            );
            let t = et.filter((t) => {
              let { node: n } = t;
              return !e.includes(n.id);
            });
            (ge(!1),
              t.length === 0
                ? (e.length > 0 &&
                    p
                      .get(de)
                      .success(
                        g.length > 0
                          ? (0, E.jsx)(y, {
                              id: `libraryNext.actions.moveSuccess`,
                              defaultMessage: `Moved to “{name}”`,
                              description: `Success toast after moving Library items into a folder; name is the destination folder name`,
                              values: { name: g.at(-1)?.name },
                            })
                          : (0, E.jsx)(y, {
                              id: `libraryNext.actions.moveSuccessRoot`,
                              defaultMessage: `Moved to Library`,
                              description: `Success toast after moving Library items to the Library root`,
                            }),
                        { id: `library-move-success`, variant: `successNeutral`, hasCloseButton: !1 },
                      ),
                  f())
                : oe(t));
          })));
    },
    I;
  r[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, E.jsx)(fe, {
        children: (0, E.jsx)(re, {
          title: (0, E.jsx)(ue, {
            children: (0, E.jsx)(y, {
              id: `libraryNext.move.title`,
              defaultMessage: `Move to…`,
              description: `Title of the destination picker for selected Library items`,
            }),
          }),
        }),
      })),
      (r[50] = I))
    : (I = r[50]);
  let pt = fe,
    L;
  r[51] === m
    ? (L = r[52])
    : ((L = m.formatMessage({
        id: `libraryNext.move.breadcrumbLabel`,
        defaultMessage: `Move destination`,
        description: `Accessible label for the move destination breadcrumb navigation`,
      })),
      (r[51] = m),
      (r[52] = L));
  let R;
  r[53] === m
    ? (R = r[54])
    : ((R = m.formatMessage({
        id: `libraryNext.title.library`,
        defaultMessage: `Library`,
        description: `Title of the Library page`,
      })),
      (r[53] = m),
      (r[54] = R));
  let z;
  r[55] === R ? (z = r[56]) : ((z = { id: null, name: R }), (r[55] = R), (r[56] = z));
  let B;
  r[57] !== g || r[58] !== z ? ((B = [z, ...g]), (r[57] = g), (r[58] = z), (r[59] = B)) : (B = r[59]);
  let V;
  r[60] !== b || r[61] !== g || r[62] !== v || r[63] !== B
    ? ((V = (0, E.jsx)(`ol`, {
        className: `flex min-w-0 items-center gap-2 text-sm`,
        children: B.map((e, t) =>
          (0, E.jsxs)(
            `li`,
            {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                t > 0
                  ? (0, E.jsx)(`span`, {
                      className: `text-tertiary`,
                      children: (0, E.jsx)(y, {
                        id: `libraryNext.move.breadcrumbSeparator`,
                        defaultMessage: `/`,
                        description: `Separator between move destination breadcrumb items`,
                      }),
                    })
                  : null,
                t === g.length
                  ? (0, E.jsx)(`span`, {
                      className: `min-w-0 truncate`,
                      title: e.name,
                      "aria-current": `page`,
                      children: e.name,
                    })
                  : (0, E.jsx)(h, {
                      color: `ghost`,
                      size: `actionSm`,
                      type: `button`,
                      disabled: v || b,
                      onClick: () => ae(g.slice(0, t)),
                      children: e.name,
                    }),
              ],
            },
            e.id ?? `root`,
          ),
        ),
      })),
      (r[60] = b),
      (r[61] = g),
      (r[62] = v),
      (r[63] = B),
      (r[64] = V))
    : (V = r[64]);
  let H;
  r[65] !== L || r[66] !== V
    ? ((H = (0, E.jsx)(`nav`, { className: `mb-5`, "aria-label": L, children: V })),
      (r[65] = L),
      (r[66] = V),
      (r[67] = H))
    : (H = r[67]);
  let mt = Qe?.length === 0 && `flex flex-1 flex-col`,
    U;
  r[68] === mt ? (U = r[69]) : ((U = te(`min-h-0`, mt)), (r[68] = mt), (r[69] = U));
  let W;
  r[70] !== qe || r[71] !== k || r[72] !== O || r[73] !== Ae || r[74] !== T
    ? ((W =
        O || (qe && k) || (T && Ae)
          ? (0, E.jsxs)(`div`, {
              className: `flex items-center gap-2 py-2 text-sm text-secondary`,
              children: [
                (0, E.jsx)(t, { className: `size-4` }),
                (0, E.jsx)(y, {
                  id: `libraryNext.move.loading`,
                  defaultMessage: `Loading folders…`,
                  description: `Status while move destination contents are loading`,
                }),
              ],
            })
          : null),
      (r[70] = qe),
      (r[71] = k),
      (r[72] = O),
      (r[73] = Ae),
      (r[74] = T),
      (r[75] = W))
    : (W = r[75]);
  let ht = Qe?.map((e) =>
      (0, E.jsx)(
        we,
        {
          density: `row`,
          title: e.name,
          icon: (0, E.jsx)(ne, {}),
          rightText: (0, E.jsx)(a, {}),
          rightTextPosition: `center`,
          isSelected: !1,
          isDisabled: v || b || M.has(e.id),
          onSelect: () => ae([...g, { id: e.id, name: e.name }]),
        },
        e.id,
      ),
    ),
    G;
  r[76] !== Qe?.length || r[77] !== A || r[78] !== O
    ? ((G =
        Qe?.length === 0 && !O && !A
          ? (0, E.jsx)(be, {
              title: (0, E.jsx)(y, {
                id: `libraryNext.move.emptyFolder`,
                defaultMessage: `This folder is empty`,
                description: `Empty destination picker; the current folder can still be chosen as a move destination`,
              }),
            })
          : null),
      (r[76] = Qe?.length),
      (r[77] = A),
      (r[78] = O),
      (r[79] = G))
    : (G = r[79]);
  let K;
  r[80] !== A || r[81] !== k || r[82] !== je || r[83] !== T || r[84] !== Ke || r[85] !== Ve || r[86] !== He
    ? ((K =
        A || He
          ? (0, E.jsxs)(`div`, {
              role: `alert`,
              className: `flex items-center gap-3 py-2 text-sm text-secondary`,
              children: [
                A
                  ? (0, E.jsx)(y, {
                      id: `libraryNext.move.loadFailed`,
                      defaultMessage: `Failed to load files.`,
                      description: `Move destination folders could not be loaded`,
                    })
                  : (0, E.jsx)(y, {
                      id: `libraryNext.move.rootLookupFailed`,
                      defaultMessage: `Couldn't identify the Library root`,
                      description: `The move picker cannot confirm whether the selected files are already in the Library root; retry before moving them there`,
                    }),
                (0, E.jsx)(h, {
                  color: `ghost`,
                  size: `actionSm`,
                  type: `button`,
                  disabled: k || (T && je),
                  onClick: () => {
                    (A && Ke(), He && Ve());
                  },
                  children: (0, E.jsx)(y, {
                    id: `libraryNext.results.retry`,
                    defaultMessage: `Try again`,
                    description: `Retry fetching Library results`,
                  }),
                }),
              ],
            })
          : null),
      (r[80] = A),
      (r[81] = k),
      (r[82] = je),
      (r[83] = T),
      (r[84] = Ke),
      (r[85] = Ve),
      (r[86] = He),
      (r[87] = K))
    : (K = r[87]);
  let q;
  r[88] !== U || r[89] !== W || r[90] !== ht || r[91] !== G || r[92] !== K
    ? ((q = (0, E.jsxs)(`div`, { role: `list`, className: U, children: [W, ht, G, K] })),
      (r[88] = U),
      (r[89] = W),
      (r[90] = ht),
      (r[91] = G),
      (r[92] = K),
      (r[93] = q))
    : (q = r[93]);
  let J;
  r[94] !== pt || r[95] !== H || r[96] !== q
    ? ((J = (0, E.jsxs)(pt, { className: `min-h-0 overflow-y-auto`, children: [H, q] })),
      (r[94] = pt),
      (r[95] = H),
      (r[96] = q),
      (r[97] = J))
    : (J = r[97]);
  let Y;
  r[98] !== lt || r[99] !== st
    ? ((Y = st
        ? (0, E.jsx)(h, {
            color: `secondary`,
            type: `button`,
            disabled: !lt,
            onClick: () => _e(!0),
            children: (0, E.jsx)(y, {
              id: `libraryNext.move.newFolder`,
              defaultMessage: `New folder`,
              description: `Create a folder in the currently browsed Library move destination`,
            }),
          })
        : null),
      (r[98] = lt),
      (r[99] = st),
      (r[100] = Y))
    : (Y = r[100]);
  let gt;
  r[101] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, E.jsx)(y, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (r[101] = gt))
    : (gt = r[101]);
  let X;
  r[102] !== f || r[103] !== v
    ? ((X = (0, E.jsx)(h, { color: `secondary`, type: `button`, disabled: v, onClick: f, children: gt })),
      (r[102] = f),
      (r[103] = v),
      (r[104] = X))
    : (X = r[104]);
  let _t = !rt || v,
    vt;
  r[105] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (0, E.jsx)(y, {
        id: `libraryNext.move.confirm`,
        defaultMessage: `Move here`,
        description: `Move selected Library items into the currently browsed destination folder`,
      })),
      (r[105] = vt))
    : (vt = r[105]);
  let Z;
  r[106] !== v || r[107] !== _t
    ? ((Z = (0, E.jsx)(h, { color: `primary`, loading: v, type: `submit`, disabled: _t, children: vt })),
      (r[106] = v),
      (r[107] = _t),
      (r[108] = Z))
    : (Z = r[108]);
  let Q;
  r[109] !== Y || r[110] !== X || r[111] !== Z
    ? ((Q = (0, E.jsx)(fe, { children: (0, E.jsxs)(ee, { className: `flex-wrap`, children: [Y, X, Z] }) })),
      (r[109] = Y),
      (r[110] = X),
      (r[111] = Z),
      (r[112] = Q))
    : (Q = r[112]);
  let $;
  r[113] !== dt || r[114] !== ft || r[115] !== I || r[116] !== J || r[117] !== Q
    ? (($ = (0, E.jsxs)(dt, { as: `form`, size: `scrollable`, onSubmit: ft, children: [I, J, Q] })),
      (r[113] = dt),
      (r[114] = ft),
      (r[115] = I),
      (r[116] = J),
      (r[117] = Q),
      (r[118] = $))
    : ($ = r[118]);
  let yt;
  return (
    r[119] !== ut || r[120] !== P || r[121] !== F || r[122] !== $
      ? ((yt = (0, E.jsx)(ut, { open: !0, size: `wide`, contentProps: P, onOpenChange: F, children: $ })),
        (r[119] = ut),
        (r[120] = P),
        (r[121] = F),
        (r[122] = $),
        (r[123] = yt))
      : (yt = r[123]),
    yt
  );
}
function Me(e) {
  let { id: t } = e;
  return t;
}
function Ne(e) {
  let { node: t } = e;
  return t.id;
}
function Pe(e) {
  let { node: t } = e;
  return t.id;
}
function Fe(e) {
  let { node: t } = e;
  return t.kind === `directory`;
}
function Ie(e) {
  let { node: t } = e;
  return t.parent_directory_id != null;
}
function Le(e) {
  return e != null && /^external-gdrive:(?:account:[A-Za-z0-9_-]+:)?(?:root$|folder:.+)/u.test(e);
}
var Re, ze, E, Be;
function Ve() {
  return (Ve = e(() => {
    ((Re = d()),
      l(),
      ae(),
      (ze = r()),
      m(),
      g(),
      s(),
      i(),
      f(),
      C(),
      T(),
      oe(),
      p(),
      Ce(),
      _e(),
      x(),
      Oe(),
      w(),
      S(),
      (E = c()),
      (Be = v(ye, (e, { get: t, scope: n }) =>
        u({
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
              a = b(e, i?.items),
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
              if ((o.push(...t.items), Le(e) || !t.cursor || s.has(t.cursor))) break;
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
Ve();
export { Ae as MoveLibraryItemsDialog };
//# sourceMappingURL=library-move-dialog-3050ab97cc7f.js.map
