import { n as e, o as t, r as n } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as r,
  $Ct as i,
  AR as a,
  Cot as o,
  Dz as s,
  EH as c,
  EPt as l,
  F9 as u,
  FR as d,
  GCt as f,
  HCt as ee,
  IDt as p,
  Iot as m,
  Ixt as te,
  Kat as ne,
  LR as h,
  Lot as re,
  Mot as g,
  Not as ie,
  Pxt as ae,
  QCt as oe,
  Rnt as se,
  Sht as _,
  TJ as v,
  TLt as ce,
  UCt as le,
  Uot as ue,
  VDt as de,
  Vxt as fe,
  WCt as pe,
  Xot as me,
  Y9 as he,
  Yot as ge,
  _wt as y,
  fO as _e,
  frt as b,
  gwt as x,
  hot as ve,
  hrt as ye,
  i3 as S,
  ik as be,
  jDt as xe,
  kz as Se,
  lO as Ce,
  ldt as we,
  lot as C,
  mO as Te,
  not as w,
  nst as Ee,
  oot as T,
  pLt as De,
  qat as Oe,
  r3 as ke,
  rk as Ae,
  sMt as je,
  sO as Me,
  t3 as Ne,
  tst as Pe,
  vO as Fe,
  vW as Ie,
  vzt as Le,
  wot as E,
  xMt as D,
  yJ as Re,
  yW as ze,
  yzt as Be,
} from "./app-shared-bbfeca5e5737.js";
import {
  $fr as Ve,
  Mut as He,
  XPr as O,
  YPr as Ue,
  Ymr as We,
  bgn as Ge,
  dFr as Ke,
  dUr as k,
  ehr as qe,
  epr as A,
  hkt as Je,
  iI as Ye,
  mAn as Xe,
  m_r as Ze,
  mkt as j,
  n0 as Qe,
  oI as $e,
  pAn as et,
  t0 as tt,
  uFr as nt,
  vUr as rt,
  v_r as it,
  ygn as at,
  zut as ot,
} from "./app-initial-5851df3f6cb1.js";
import { F as st, I as ct, L as lt, R as ut, V as dt, t as M, z as ft } from "./src-c65a930b3c0e.js";
import { n as pt, r as mt, t as ht } from "./pin-analytics-417acc826387.js";
import { n as gt, t as _t } from "./site-preview-b226ffd1d9b7.js";
import { l as N, s as vt, t as yt, u as bt } from "./telemetry-754c57f9b0cd.js";
function P(e) {
  return (
    e.eligibility === `eligible` ||
    (e.eligibility === `requires_sharing` && e.requiredSharingAudience != null)
  );
}
function xt(e, t, n, r) {
  let i = Array.from(new Set([...e, ...r.keys()]));
  return {
    orderedIds: i,
    selectedIds: i.filter((e) => t.includes(e)),
    unavailableAdditionIds: t.filter((e) => {
      let t = r.get(e);
      return !n.has(e) && (t == null || !P(t));
    }),
    itemsToShare: i.flatMap((e) => {
      let i = r.get(e);
      return i != null && t.includes(e) && !n.has(e) && i.eligibility === `requires_sharing` ? [i] : [];
    }),
  };
}
function St(e, t) {
  return e.some(
    (e) => !t?.some((t) => t.id === e.id && t.requiredSharingAudience === e.requiredSharingAudience),
  );
}
function Ct() {
  return (Ct = e(() => {}))();
}
async function wt(e, t, n, r) {
  if (t.hostId !== `local`) throw Error(`Only local skills can be uploaded to the showcase`);
  let { uploadSkill: i, skillsIdentity$: a } = await ot(),
    o = e.get(a);
  if (o?.accountId !== n || o.userId !== r || !o.isWorkspace) throw Error(`The showcase account has changed`);
  let s = await Tt(e, t),
    c = await new Promise((e, t) => {
      rt(Object.fromEntries(s), (n, r) => {
        n == null ? e(new Uint8Array(r)) : t(n);
      });
    }),
    l = e.get(a);
  if (l?.accountId !== n || l.userId !== r) throw Error(`The showcase account has changed`);
  let u = await i(e, new File([c], `${t.localSkill.name}.zip`, { type: `application/zip` }));
  if (u.status !== `complete` || u.skills.length !== 1) throw Error(`The local skill could not be uploaded`);
  return u.skills[0].id;
}
async function Tt(e, t) {
  let n = a(t.localSkill.path);
  if (n == null || d(t.localSkill.path) !== `SKILL.md`) throw Error(`Invalid local skill path`);
  let r = Ue(e, t.hostId),
    i = await r.sendRequest(`fs/getMetadata`, { path: n });
  if (!i.isDirectory || i.isSymlink) throw Error(`The skill directory is unavailable`);
  let o = [],
    s = [``],
    c = 0,
    l = 0;
  for (let e of s) {
    let { entries: i } = await r.sendRequest(`fs/readDirectory`, { path: e === `` ? n : _(n, e) });
    for (let { fileName: a } of i) {
      if (a.startsWith(`.`) || a === `node_modules` || a === `__pycache__`) continue;
      if (++l > Dt) throw Error(`The skill contains too many files`);
      if (a === `` || /[\\/]/.test(a)) throw Error(`Invalid skill file name`);
      let i = Et.default.posix.join(e, a),
        d = _(n, i);
      if (e !== `` && a.toLowerCase() === `skill.md`)
        throw Error(`Nested skills cannot be uploaded together`);
      let f = await r.sendRequest(`fs/getMetadata`, { path: d });
      if (f.isSymlink) throw Error(`Skill files cannot be symbolic links`);
      if (f.isDirectory) s.push(i);
      else if (f.isFile)
        try {
          var u = w();
          let e = u.u(
            await ne.workspaceFiles.read({
              hostId: t.hostId,
              path: d,
              maxBytes: F - c,
              representation: `blob`,
            }),
          );
          if (!(`blob` in e)) throw Error(`The skill file could not be read`);
          let n = A(e.blob);
          ((c += n.byteLength), o.push([i, n]));
        } catch (e) {
          u.e = e;
        } finally {
          u.d();
        }
      else throw Error(`Unsupported skill file type`);
    }
  }
  if (!o.some(([e]) => e === `SKILL.md`)) throw Error(`The skill file is missing`);
  return o;
}
var Et, F, Dt;
function Ot() {
  return (Ot = e(() => {
    (He(), k(), (Et = t(we(), 1)), O(), Oe(), T(), Ve(), h(), (F = 26214400), (Dt = 1024));
  }))();
}
function kt(e, t, n, r = []) {
  let i = new Map();
  for (let n of e.values())
    t.has(n.pin_id) &&
      i.set(
        n.pin_id,
        n.kind === `site` ? { id: n.pin_id, kind: `site`, site: n } : { id: n.pin_id, kind: `skill`, pin: n },
      );
  for (let { pin: e, eligibility: t, sharing_audience: r, required_sharing_audience: a } of n)
    i.set(e.pin_id, {
      ...(e.kind === `site`
        ? { id: e.pin_id, kind: `site`, site: e }
        : { id: e.pin_id, kind: `skill`, pin: e }),
      eligibility: t,
      sharingAudience: r,
      requiredSharingAudience: a,
    });
  for (let e of r) i.set(e.id, e);
  return i;
}
function At(e, t, n, r) {
  return e.flatMap((e) => {
    let i = t.get(e);
    if (i == null || (n !== `all` && i.kind !== n)) return [];
    let { title: a, description: o } = N(i);
    return `${a} ${o ?? ``}`.toLocaleLowerCase().includes(r.trim().toLocaleLowerCase()) ? [i] : [];
  });
}
function jt() {
  return (jt = e(() => {
    (M(), bt());
  }))();
}
function Mt(e) {
  let { title: t, icon: n } = N(e);
  return {
    id: e.id,
    kind: e.kind,
    title: t,
    sharingAudience: e.sharingAudience,
    selectable: P(e),
    subtitle:
      e.kind === `site`
        ? Ye(e.site.open_url)
        : (0, I.jsx)(p, {
            id: `profile.showcase.editor.skill`,
            defaultMessage: `Skill`,
            description: `Item type label for a skill in the profile Showcase editor.`,
          }),
    preview:
      e.kind === `site`
        ? (0, I.jsx)(_t, { screenshotUrl: e.site.thumbnail_url ?? null, variant: `flat`, viewMode: `list` })
        : (0, I.jsx)(`span`, {
            className: `flex size-12 items-center justify-center rounded-xl border border-subtle bg-surface`,
            children: n,
          }),
  };
}
var I;
function Nt() {
  return (Nt = e(() => {
    (xe(), $e(), bt(), gt(), jt(), (I = D()));
  }))();
}
function L(e) {
  let t = (0, R.c)(10),
    { id: n, children: r, onDragEnd: a } = e,
    o = i(),
    s;
  t[0] === o ? (s = t[1]) : ((s = (e) => o.start(e)), (t[0] = o), (t[1] = s));
  let c;
  t[2] !== r || t[3] !== s ? ((c = r(s)), (t[2] = r), (t[3] = s), (t[4] = c)) : (c = t[4]);
  let l;
  return (
    t[5] !== o || t[6] !== n || t[7] !== a || t[8] !== c
      ? ((l = (0, z.jsx)(ee, {
          className: `relative`,
          value: n,
          dragListener: !1,
          dragControls: o,
          onDragEnd: a,
          children: c,
        })),
        (t[5] = o),
        (t[6] = n),
        (t[7] = a),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
var R, z;
function Pt() {
  return (Pt = e(() => {
    ((R = Le()), le(), oe(), (z = D()));
  }))();
}
function Ft(e) {
  let t = (0, H.c)(8),
    n = de(),
    r;
  t[0] === e.visibleItems ? (r = t[1]) : ((r = e.visibleItems.map(Mt)), (t[0] = e.visibleItems), (t[1] = r));
  let i, a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = {
        search: (0, U.jsx)(s, { icon: { 16: Ie, 20: ze } }),
        clear: (0, U.jsx)(Re, {}),
        drag: (0, U.jsx)(c, {}),
        check: (0, U.jsx)(Ae, { className: `icon-xxs` }),
      }),
      (a = (0, U.jsx)(ke, {})),
      (t[2] = i),
      (t[3] = a))
    : ((i = t[2]), (a = t[3]));
  let o;
  return (
    t[4] !== n || t[5] !== e || t[6] !== r
      ? ((o = (0, U.jsx)(ut, {
          ...e,
          intl: n,
          FormattedMessage: V,
          visibleItems: r,
          icons: i,
          loadingIndicator: a,
          ReorderRow: L,
          renderList: B,
        })),
        (t[4] = n),
        (t[5] = e),
        (t[6] = r),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function B(e) {
  let { className: t, children: n, ids: r, filterKey: i, onReorder: a } = e;
  return (0, U.jsx)(y.div, {
    className: t,
    layoutScroll: !0,
    children: (0, U.jsx)(pe, { axis: `y`, values: r, onReorder: a, children: n }, i),
  });
}
function V(e) {
  return (0, U.jsx)(p, { ...e });
}
var H, U;
function It() {
  return (It = e(() => {
    ((H = Le()), M(), x(), f(), xe(), v(), S(), Se(), be(), Nt(), Pt(), (U = D()));
  }))();
}
function Lt(e) {
  let t = (0, G.c)(8),
    { titleId: n, items: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = r.map(Mt)), (t[0] = r), (t[1] = i));
  let a;
  t[2] === r ? (a = t[3]) : ((a = r.every(Rt)), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a || t[6] !== n
      ? ((o = (0, K.jsx)(ft, { titleId: n, items: i, workspaceOnly: a, FormattedMessage: W })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = n),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function W(e) {
  return (0, K.jsx)(p, { ...e });
}
function Rt(e) {
  return e.requiredSharingAudience === `workspace`;
}
var G, K;
function zt() {
  return (zt = e(() => {
    ((G = Le()), M(), xe(), Nt(), (K = D()));
  }))();
}
var Bt = n({ ProfileShowcaseEditor: () => q });
function q(e) {
  let t = (0, rn.c)(144),
    {
      accountId: n,
      userId: i,
      allowSkills: a,
      allowLocalSkills: s,
      pageScope: c,
      savedItems: l,
      onClose: d,
      onReturnFocus: f,
    } = e,
    ee = s !== void 0 && s,
    m = te(o),
    ne = de(),
    h = (0, J.useId)(),
    [g, ae] = (0, J.useState)(null),
    [oe, se] = (0, J.useState)(``),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = []), (t[0] = _)) : (_ = t[0]);
  let [v, ce] = (0, J.useState)(_),
    le;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((le = []), (t[1] = le)) : (le = t[1]);
  let [pe, ge] = (0, J.useState)(le),
    y = Ee(),
    [_e] = Ke(`host_config`),
    b = _e?.id ?? `local`,
    x = a && ee && b === `local`,
    ye;
  t[2] === x ? (ye = t[3]) : ((ye = { enabled: x }), (t[2] = x), (t[3] = ye));
  let { data: S, isFetched: be, isLoading: xe, isError: Se, refetch: we } = fe(it, ye),
    C;
  t[4] === S?.roots ? (C = t[5]) : ((C = S?.roots ?? []), (t[4] = S?.roots), (t[5] = C));
  let w;
  t[6] !== b || t[7] !== C ? ((w = [`skills`, b, C]), (t[6] = b), (t[7] = C), (t[8] = w)) : (w = t[8]);
  let T;
  t[9] !== b || t[10] !== S?.roots || t[11] !== m
    ? ((T = () => Xe(m, b, S?.roots)), (t[9] = b), (t[10] = S?.roots), (t[11] = m), (t[12] = T))
    : (T = t[12]);
  let De = x && be,
    Oe;
  t[13] !== w || t[14] !== T || t[15] !== De
    ? ((Oe = { queryKey: w, queryFn: T, enabled: De, staleTime: 0 }),
      (t[13] = w),
      (t[14] = T),
      (t[15] = De),
      (t[16] = Oe))
    : (Oe = t[16]);
  let { data: Ae, isLoading: je, isError: Ne, refetch: Pe } = me(Oe),
    Fe;
  t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((Fe = new Map()), (t[17] = Fe)) : (Fe = t[17]);
  let [Ie, Le] = (0, J.useState)(Fe),
    E;
  t[18] !== n || t[19] !== i
    ? ((E = [`browser-skills`, n, i, `collection`, `created`]), (t[18] = n), (t[19] = i), (t[20] = E))
    : (E = t[20]);
  let D;
  t[21] === n
    ? (D = t[22])
    : ((D = async () =>
        (
          await We.safeGet(`/hazelnuts`, {
            additionalHeaders: { "ChatGPT-Account-ID": n },
            parameters: { query: { scope: `created`, include_permissions: !0 } },
          })
        ).hazelnuts),
      (t[21] = n),
      (t[22] = D));
  let Re;
  t[23] !== x || t[24] !== E || t[25] !== D
    ? ((Re = { queryKey: E, enabled: x, staleTime: 0, queryFn: D }),
      (t[23] = x),
      (t[24] = E),
      (t[25] = D),
      (t[26] = Re))
    : (Re = t[26]);
  let { data: ze, isLoading: Be, isError: Ve, refetch: He } = me(Re),
    [O, Ue] = (0, J.useState)(`all`),
    k = [`profile`, `pin-options`, i, n],
    qe = function (e, t) {
      let r = t === void 0 || t;
      return ue({
        queryKey: [...k, e],
        enabled: r,
        staleTime: 0,
        gcTime: 0,
        initialPageParam: ``,
        queryFn: (t) => {
          let { signal: r, pageParam: i } = t;
          return We.safeGet(`/profiles/me/page/pin_options`, {
            signal: r,
            additionalHeaders: { "ChatGPT-Account-ID": n },
            parameters: { query: { kind: e, limit: O === `all` ? 10 : 20, cursor: i || null } },
          });
        },
        getNextPageParam: tn,
      });
    },
    {
      data: A,
      isFetching: Ye,
      isFetchedAfterMount: Ze,
      isError: j,
      refetch: Qe,
      fetchNextPage: $e,
      hasNextPage: et,
      isFetchingNextPage: nt,
      isFetchNextPageError: rt,
    } = ie(qe(`site`)),
    {
      data: at,
      isLoading: ot,
      isError: ut,
      refetch: M,
      fetchNextPage: ft,
      hasNextPage: ht,
      isFetchingNextPage: gt,
      isFetchNextPageError: _t,
    } = ie(qe(`skill`, a)),
    [N, yt] = (0, J.useState)(null),
    bt = [...(A?.pages.flatMap(en) ?? []), ...(a ? (at?.pages.flatMap($t) ?? []) : [])],
    P = new Set((N ?? A?.pages[0])?.pinned_ids.filter((e) => a || e.startsWith(`site:`))),
    Ct = x
      ? (0, an.default)(Ae?.data.flatMap(Qt), Zt)
          .filter(Xt)
          .map((e) => ({
            id: `local-skill:${JSON.stringify([b, e.path])}`,
            kind: `skill`,
            localSkill: e,
            hostId: b,
            eligibility: `requires_sharing`,
            sharingAudience: `private`,
            requiredSharingAudience: `workspace`,
          }))
          .filter((e) => !P.has(`skill:${Ie.get(e.id)}`))
      : [],
    Tt = [...l.map(Yt), ...bt.map(Jt)],
    Et = Array.from(P).some((e) => !Tt.some((t) => t.pin_id === e)),
    F;
  t[27] === n
    ? (F = t[28])
    : ((F = (e) => {
        let { signal: t } = e;
        return We.safeGet(`/profiles/me/page/pins`, {
          signal: t,
          additionalHeaders: { "ChatGPT-Account-ID": n },
        });
      }),
      (t[27] = n),
      (t[28] = F));
  let {
      data: Dt,
      isFetching: Ot,
      isError: jt,
      refetch: Mt,
    } = me({ queryKey: [...k, `saved`], enabled: Et, staleTime: 0, gcTime: 0, queryFn: F }),
    I = new Map([...Tt.map(qt), ...(Dt?.pins?.items?.map(Kt) ?? [])]),
    Nt = new Set(
      ze
        ?.filter((e) => Array.from(I.values()).some((t) => t.kind === `skill` && t.artifact_id === e.id))
        .map(Gt),
    ),
    L = Array.from(P).some((e) => !I.has(e));
  N == null && Ze && !Ye && !j && !L && A != null && (yt(A.pages[0]), ce(Array.from(P)), ge(Array.from(P)));
  let R = kt(
      I,
      P,
      bt.filter((e) => {
        let { pin: t } = e;
        return P.has(t.pin_id) || !Array.from(Ie.values()).includes(t.artifact_id);
      }),
      Ct.filter((e) => Ie.has(e.id) || !Nt.has(e.localSkill.name.trim().toLowerCase())),
    ),
    z;
  t[29] !== n || t[30] !== g || t[31] !== y || t[32] !== m || t[33] !== i
    ? ((z = (e, t) => {
        (vt(m, t == null ? `success` : `failure`),
          y.invalidateQueries({ queryKey: [`browser-skills`, n, i] }),
          Ge(y, g?.flatMap(Wt) ?? []));
      }),
      (t[29] = n),
      (t[30] = g),
      (t[31] = y),
      (t[32] = m),
      (t[33] = i),
      (t[34] = z))
    : (z = t[34]);
  let {
      mutate: Pt,
      isPending: B,
      error: V,
      reset: H,
    } = re({
      mutationFn: async (e) => {
        let t = e.map((e) => {
            let t = R.get(e),
              n = g?.find((t) => t.id === e);
            if (t != null && `localSkill` in t) {
              if (n?.requiredSharingAudience !== `workspace`)
                throw Error(`Local skill sharing must be confirmed`);
              return t;
            }
            let r = I.get(e);
            if (r == null) throw Error(`Missing profile pin reference`);
            return {
              kind: r.kind,
              artifact_id: r.artifact_id,
              sharing_target:
                !P.has(e) &&
                t?.eligibility === `requires_sharing` &&
                n?.requiredSharingAudience != null &&
                n.requiredSharingAudience === t.requiredSharingAudience
                  ? n.requiredSharingAudience
                  : void 0,
            };
          }),
          r = [];
        for (let e of t) {
          if (!(`localSkill` in e)) {
            r.push(e);
            continue;
          }
          let t = Ie.get(e.id);
          if (t == null) {
            t = await wt(m, e, n, i);
            let r = t;
            Le((t) => new Map(t).set(e.id, r));
          }
          r.push({ kind: `skill`, artifact_id: t, sharing_target: `workspace` });
        }
        let a = await We.safePut(`/profiles/me/page/pins`, {
          expectedErrorStatuses: [409, 422, 503],
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: { pins: r, expected_version: N?.page_version ?? null },
        });
        if (a.error != null || a.pins == null) throw Error(`Profile pins could not be saved`);
        return (
          N != null &&
            pt(
              m,
              Array.from(P).flatMap((e) => {
                let t = I.get(e);
                return t == null ? [] : [t];
              }),
              r,
              u.CODEX_PROFILE_PIN_ENTRY_POINT_PROFILE_PICKER,
            ),
          { ...a, pins: a.pins }
        );
      },
      onError: () => {
        (y.invalidateQueries({ queryKey: Je(n, i).queryKey }), y.invalidateQueries({ queryKey: k }));
      },
      onSettled: z,
      onSuccess: async (e) => {
        let t = Je(n, i).queryKey;
        (await y.cancelQueries({ queryKey: t }),
          y.setQueriesData({ queryKey: t }, (t) =>
            t?.is_self && t.can_edit
              ? { ...t, page: { ...t.page, pins: e.pins, page_version: e.page_version } }
              : t,
          ),
          y.invalidateQueries({ queryKey: k }),
          m
            .get(ve)
            .success(
              ne.formatMessage({
                id: `profile.showcase.saved`,
                defaultMessage: `Showcase saved`,
                description: `Success toast after sharing any required items and saving the profile showcase`,
              }),
              { variant: `successNeutral`, position: `top-center`, hasCloseButton: !1 },
            ),
          d());
      },
    }),
    U = (N == null && Ye) || (a && ot) || (x && (xe || je || Be)) || (L && Ot),
    It = j || (a && ut) || (x && (Se || Ne || Ve)) || (L && !Ot),
    W = N?.max_pins,
    Rt;
  t[35] !== L || t[36] !== V || t[37] !== N
    ? ((Rt = N == null || L || (V != null && nn(V) === `profile_page_update_conflict`)),
      (t[35] = L),
      (t[36] = V),
      (t[37] = N),
      (t[38] = Rt))
    : (Rt = t[38]);
  let G = Rt,
    { orderedIds: K, selectedIds: zt, unavailableAdditionIds: Bt, itemsToShare: q } = xt(pe, v, P, R),
    X = N == null ? [] : At(K, R, O, oe),
    on = X.map(Ut),
    Z = Bt.length > 0,
    sn;
  t[39] !== B || t[40] !== d
    ? ((sn = (e) => {
        !e && !B && d();
      }),
      (t[39] = B),
      (t[40] = d),
      (t[41] = sn))
    : (sn = t[41]);
  let cn;
  t[42] === f
    ? (cn = t[43])
    : ((cn =
        f == null
          ? void 0
          : (e) => {
              (e.preventDefault(), f());
            }),
      (t[42] = f),
      (t[43] = cn));
  let ln;
  t[44] !== cn || t[45] !== h
    ? ((ln = { "aria-labelledby": h, onOpenAutoFocus: Ht, onCloseAutoFocus: cn }),
      (t[44] = cn),
      (t[45] = h),
      (t[46] = ln))
    : (ln = t[46]);
  let un;
  t[47] !== Z || t[48] !== B || t[49] !== H || t[50] !== Bt
    ? ((un =
        Z &&
        (0, Y.jsxs)(`div`, {
          role: `alert`,
          children: [
            (0, Y.jsx)(`p`, {
              className: `text-sm text-danger`,
              children: (0, Y.jsx)(p, {
                id: `profile.showcase.editor.unavailableAdditions`,
                defaultMessage: `Some newly selected items are no longer available to showcase`,
                description: `Error in the Showcase editor when an item selected during this edit disappears or its sharing no longer permits showcasing. The user can remove these new selections with the adjacent button to save their other changes.`,
              }),
            }),
            (0, Y.jsx)(r, {
              color: `ghost`,
              disabled: B,
              onClick: () => {
                (ce((e) => e.filter((e) => !Bt.includes(e))), ae(null), H());
              },
              children: (0, Y.jsx)(p, {
                id: `profile.showcase.editor.removeUnavailableAdditions`,
                defaultMessage: `Remove unavailable selections`,
                description: `Button in the Showcase editor that removes newly selected items which disappeared or are no longer shared broadly enough. Existing saved pins and other draft selections are kept.`,
              }),
            }),
          ],
        })),
      (t[47] = Z),
      (t[48] = B),
      (t[49] = H),
      (t[50] = Bt),
      (t[51] = un))
    : (un = t[51]);
  let dn;
  t[52] !== V || t[53] !== W
    ? ((dn =
        V &&
        (0, Y.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, Y.jsx)(lt, { code: nn(V), maxPins: W, FormattedMessage: Vt }),
        })),
      (t[52] = V),
      (t[53] = W),
      (t[54] = dn))
    : (dn = t[54]);
  let fn =
      (g != null || V != null) &&
      (0, Y.jsx)(st, {
        color: `ghost`,
        type: `button`,
        disabled: B,
        onClick: () => {
          (V != null && (y.resetQueries({ queryKey: k }), yt(null)), ae(null), H());
        },
        children: (0, Y.jsx)(p, {
          id: `profile.showcase.sharingBack`,
          defaultMessage: `Back`,
          description: `Return to the showcase selection rows. After a failed save, reload the latest saved selection and sharing state.`,
        }),
      }),
    pn;
  t[55] !== g || t[56] !== B || t[57] !== d
    ? ((pn =
        g == null &&
        (0, Y.jsx)(st, {
          color: `ghost`,
          type: `button`,
          disabled: B,
          onClick: d,
          children: (0, Y.jsx)(p, {
            id: `profile.showcase.editor.cancel`,
            defaultMessage: `Cancel`,
            description: `Discards changes and closes the Showcase editor.`,
          }),
        })),
      (t[55] = g),
      (t[56] = B),
      (t[57] = d),
      (t[58] = pn))
    : (pn = t[58]);
  let mn = g == null ? `edit` : `confirm`,
    hn = g != null,
    Q;
  t[59] === B
    ? (Q = t[60])
    : ((Q = B ? (0, Y.jsx)(ke, { className: `icon-xxs` }) : void 0), (t[59] = B), (t[60] = Q));
  let gn = G || Z,
    _n;
  t[61] !== g || t[62] !== q
    ? ((_n =
        g == null &&
        q.length > 0 &&
        (0, Y.jsx)(p, {
          id: `profile.showcase.sharingContinue`,
          defaultMessage: `Continue`,
          description: `Review broader sharing required by newly selected showcase items`,
        })),
      (t[61] = g),
      (t[62] = q),
      (t[63] = _n))
    : (_n = t[63]);
  let vn;
  t[64] === g
    ? (vn = t[65])
    : ((vn =
        g != null &&
        (0, Y.jsx)(p, {
          id: `profile.showcase.sharingPublishAndSave`,
          defaultMessage: `Publish and save`,
          description: `Primary button on the Showcase publishing confirmation. Publishes the listed sites or skills to the stated audience and saves the selected items and their order to the profile Showcase.`,
        })),
      (t[64] = g),
      (t[65] = vn));
  let yn;
  t[66] !== g || t[67] !== q
    ? ((yn =
        g == null &&
        q.length === 0 &&
        (0, Y.jsx)(p, {
          id: `profile.showcase.editor.save`,
          defaultMessage: `Save`,
          description: `Applies the selected items and their order to the profile Showcase.`,
        })),
      (t[66] = g),
      (t[67] = q),
      (t[68] = yn))
    : (yn = t[68]);
  let bn;
  t[69] !== mn || t[70] !== hn || t[71] !== Q || t[72] !== gn || t[73] !== _n || t[74] !== vn || t[75] !== yn
    ? ((bn = (0, Y.jsxs)(
        st,
        { type: `submit`, autoFocus: hn, loadingIndicator: Q, disabled: gn, children: [_n, vn, yn] },
        mn,
      )),
      (t[69] = mn),
      (t[70] = hn),
      (t[71] = Q),
      (t[72] = gn),
      (t[73] = _n),
      (t[74] = vn),
      (t[75] = yn),
      (t[76] = bn))
    : (bn = t[76]);
  let xn;
  t[77] !== fn || t[78] !== pn || t[79] !== bn
    ? ((xn = (0, Y.jsxs)(Me, { children: [fn, pn, bn] })),
      (t[77] = fn),
      (t[78] = pn),
      (t[79] = bn),
      (t[80] = xn))
    : (xn = t[80]);
  let Sn;
  t[81] !== un || t[82] !== dn || t[83] !== xn
    ? ((Sn = (0, Y.jsxs)(Ce, { children: [un, dn, xn] })),
      (t[81] = un),
      (t[82] = dn),
      (t[83] = xn),
      (t[84] = Sn))
    : (Sn = t[84]);
  let Cn;
  t[85] !== g ||
  t[86] !== Z ||
  t[87] !== B ||
  t[88] !== q ||
  t[89] !== H ||
  t[90] !== G ||
  t[91] !== Pt ||
  t[92] !== zt
    ? ((Cn = () => {
        if (!(B || G || Z)) {
          if (St(q, g)) {
            (ae(q), H());
            return;
          }
          Pt(zt);
        }
      }),
      (t[85] = g),
      (t[86] = Z),
      (t[87] = B),
      (t[88] = q),
      (t[89] = H),
      (t[90] = G),
      (t[91] = Pt),
      (t[92] = zt),
      (t[93] = Cn))
    : (Cn = t[93]);
  let wn;
  t[94] !== a ||
  t[95] !== x ||
  t[96] !== g ||
  t[97] !== $e ||
  t[98] !== ft ||
  t[99] !== O ||
  t[100] !== L ||
  t[101] !== et ||
  t[102] !== ht ||
  t[103] !== Ve ||
  t[104] !== It ||
  t[105] !== nt ||
  t[106] !== gt ||
  t[107] !== U ||
  t[108] !== Ne ||
  t[109] !== Se ||
  t[110] !== jt ||
  t[111] !== B ||
  t[112] !== j ||
  t[113] !== rt ||
  t[114] !== ut ||
  t[115] !== _t ||
  t[116] !== R ||
  t[117] !== K ||
  t[118] !== c ||
  t[119] !== He ||
  t[120] !== Pe ||
  t[121] !== we ||
  t[122] !== Mt ||
  t[123] !== Qe ||
  t[124] !== M ||
  t[125] !== m ||
  t[126] !== oe ||
  t[127] !== v ||
  t[128] !== W ||
  t[129] !== A?.pages ||
  t[130] !== at?.pages ||
  t[131] !== N ||
  t[132] !== h ||
  t[133] !== on ||
  t[134] !== X
    ? ((wn =
        g == null
          ? (0, Y.jsx)(Ft, {
              titleId: h,
              allowSkills: a,
              selectionLimit: W,
              search: oe,
              filter: O,
              selection: v,
              visibleItems: X,
              isSaving: B,
              isLoading: U,
              isError: It,
              onSearchChange: se,
              onFilterChange: Ue,
              onToggle: (e) => {
                let t = R.get(e);
                if (t == null) return;
                let n = v.includes(e);
                (mt(
                  m,
                  n
                    ? he.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_REMOVE
                    : he.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_ADD,
                  t.kind,
                  u.CODEX_PROFILE_PIN_ENTRY_POINT_PROFILE_PICKER,
                  c,
                ),
                  ce((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e])));
              },
              onReorder: (e) => ge(dt(K, on, e)),
              onReorderComplete: (e) =>
                mt(
                  m,
                  he.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_REORDER,
                  e,
                  u.CODEX_PROFILE_PIN_ENTRY_POINT_PROFILE_PICKER,
                  c,
                ),
              onRetry: () =>
                void Promise.all([
                  ...(x && Se ? [we()] : []),
                  ...(x && Ne ? [Pe()] : []),
                  ...(x && Ve ? [He()] : []),
                  ...(L || jt ? [Mt()] : []),
                  ...(j || (N == null && L) ? [rt ? $e() : Qe()] : []),
                  ...(a && ut ? [_t ? ft() : M()] : []),
                ]),
              pagination: (0, Y.jsxs)(Y.Fragment, {
                children: [
                  O !== `skill` &&
                    (0, Y.jsx)(
                      tt,
                      { hasNextPage: et && !rt, isFetchingNextPage: nt, onLoadNextPage: () => void $e() },
                      `site:${A?.pages.at(-1)?.next_cursor ?? `end`}`,
                    ),
                  a &&
                    O !== `site` &&
                    (0, Y.jsx)(
                      tt,
                      { hasNextPage: ht && !_t, isFetchingNextPage: gt, onLoadNextPage: () => void ft() },
                      `skill:${at?.pages.at(-1)?.next_cursor ?? `end`}`,
                    ),
                ],
              }),
            })
          : (0, Y.jsx)(Lt, { titleId: h, items: g })),
      (t[94] = a),
      (t[95] = x),
      (t[96] = g),
      (t[97] = $e),
      (t[98] = ft),
      (t[99] = O),
      (t[100] = L),
      (t[101] = et),
      (t[102] = ht),
      (t[103] = Ve),
      (t[104] = It),
      (t[105] = nt),
      (t[106] = gt),
      (t[107] = U),
      (t[108] = Ne),
      (t[109] = Se),
      (t[110] = jt),
      (t[111] = B),
      (t[112] = j),
      (t[113] = rt),
      (t[114] = ut),
      (t[115] = _t),
      (t[116] = R),
      (t[117] = K),
      (t[118] = c),
      (t[119] = He),
      (t[120] = Pe),
      (t[121] = we),
      (t[122] = Mt),
      (t[123] = Qe),
      (t[124] = M),
      (t[125] = m),
      (t[126] = oe),
      (t[127] = v),
      (t[128] = W),
      (t[129] = A?.pages),
      (t[130] = at?.pages),
      (t[131] = N),
      (t[132] = h),
      (t[133] = on),
      (t[134] = X),
      (t[135] = wn))
    : (wn = t[135]);
  let $;
  t[136] !== Sn || t[137] !== Cn || t[138] !== wn
    ? (($ = (0, Y.jsx)(ct, { actions: Sn, onSubmit: Cn, children: wn })),
      (t[136] = Sn),
      (t[137] = Cn),
      (t[138] = wn),
      (t[139] = $))
    : ($ = t[139]);
  let Tn;
  return (
    t[140] !== sn || t[141] !== ln || t[142] !== $
      ? ((Tn = (0, Y.jsx)(Te, { open: !0, onOpenChange: sn, contentProps: ln, children: $ })),
        (t[140] = sn),
        (t[141] = ln),
        (t[142] = $),
        (t[143] = Tn))
      : (Tn = t[143]),
    Tn
  );
}
function Vt(e) {
  return (0, Y.jsx)(p, { ...e });
}
function Ht(e) {
  (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
}
function Ut(e) {
  return e.id;
}
function Wt(e) {
  return e.kind === `site` ? [e.site.artifact_id] : [];
}
function Gt(e) {
  return e.name.trim().toLowerCase();
}
function Kt(e) {
  return [e.pin_id, e];
}
function qt(e) {
  return [e.pin_id, e];
}
function Jt(e) {
  let { pin: t } = e;
  return t;
}
function Yt(e) {
  return e.kind === `site` ? e.site : e.pin;
}
function Xt(e) {
  return e.scope === `user` && e.pluginId == null;
}
function Zt(e) {
  return e.path;
}
function Qt(e) {
  return e.skills;
}
function $t(e) {
  return e.items;
}
function en(e) {
  return e.items;
}
function tn(e) {
  return e.next_cursor;
}
function nn(e) {
  if (e instanceof ye)
    try {
      return De({ error: ce() }).safeParse(JSON.parse(e.message)).data?.error;
    } catch {
      return;
    }
}
var rn, an, J, Y;
function X() {
  return (X = e(() => {
    ((rn = Le()),
      se(),
      M(),
      g(),
      m(),
      ge(),
      Pe(),
      (an = t(je(), 1)),
      ae(),
      (J = Be()),
      xe(),
      l(),
      at(),
      qe(),
      Ne(),
      Fe(),
      _e(),
      Qe(),
      S(),
      C(),
      yt(),
      E(),
      Ze(),
      j(),
      T(),
      nt(),
      et(),
      b(),
      ht(),
      Ot(),
      jt(),
      It(),
      zt(),
      (Y = D()));
  }))();
}
export { X as n, Ct as r, Bt as t };
//# sourceMappingURL=dialog-bd1854abad10.js.map
