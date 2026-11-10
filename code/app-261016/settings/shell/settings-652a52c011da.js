const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./settings-35184833a913.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./settings-loading-row-1fcc5b514745.js",
      "./entry-type-c9ae5f86f136.js",
      "./settings-configs-fc9555d3bbc1.js",
      "./toolbar-da8b436f1d67.js",
      "./cloud-settings-toolbar-f4dd9fd3b411.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  DB as a,
  F3 as o,
  FBt as s,
  HO as c,
  I3 as l,
  IO as u,
  IU as d,
  JO as f,
  Jot as p,
  KO as m,
  LNt as h,
  LO as g,
  Lst as _,
  M2 as v,
  Mst as y,
  NSt as b,
  OB as x,
  OFt as S,
  PBt as C,
  QY as w,
  Qst as T,
  RFt as E,
  RO as ee,
  Rst as D,
  TY as O,
  Ty as k,
  VSt as A,
  Vrt as j,
  WO as te,
  XOt as M,
  Y3 as ne,
  Yot as N,
  Z3 as P,
  ZSt as F,
  ZY as I,
  ast as L,
  ck as R,
  e6 as z,
  ew as re,
  gCt as B,
  iCt as V,
  ist as ie,
  j2 as H,
  jst as ae,
  kFt as U,
  mCt as oe,
  nB as se,
  nCt as ce,
  nQ as le,
  okt as ue,
  pwt as W,
  qO as G,
  qrt as de,
  qst as K,
  rB as fe,
  rk as pe,
  sct as me,
  sw as he,
  tQ as ge,
  tk as _e,
  tkt as q,
  uCt as ve,
  uSt as ye,
  uw as be,
  vD as xe,
  vst as Se,
  wy as Ce,
  yD as we,
  yst as Te,
  zFt as Ee,
  zO as De,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as Oe,
  B$ as ke,
  BFt as Ae,
  BRr as J,
  C$ as je,
  CIr as Me,
  DIr as Ne,
  E$ as Pe,
  E1 as Fe,
  F7n as Ie,
  FBr as Le,
  Gtn as Re,
  Hcn as ze,
  IBr as Be,
  Ijn as Ve,
  Ktn as He,
  L7n as Ue,
  LF as We,
  LIr as Ge,
  Ljn as Ke,
  N$ as qe,
  O$ as Je,
  OIr as Ye,
  Q$ as Xe,
  QF as Ze,
  R$ as Qe,
  RF as $e,
  Rjn as et,
  S$ as tt,
  SIr as nt,
  SK as rt,
  T$ as it,
  T1 as at,
  Ucn as ot,
  VRr as st,
  X$ as ct,
  ZLn as lt,
  _p as ut,
  a1 as dt,
  ayr as ft,
  bxr as pt,
  c$ as mt,
  cGt as ht,
  d1 as gt,
  eI as _t,
  enn as vt,
  fxr as yt,
  gp as bt,
  i1 as xt,
  iyr as St,
  k$ as Ct,
  l$ as wt,
  l1 as Tt,
  lvr as Et,
  oyr as Dt,
  p1 as Ot,
  r1 as kt,
  s$ as At,
  s1 as jt,
  sGt as Mt,
  u$ as Nt,
  u1 as Pt,
  uvr as Ft,
  w$ as It,
  wLr as Lt,
  xK as Rt,
  zFt as zt,
  zRr as Y,
} from "./app-initial-ad16eaadf81f.js";
import { n as Bt, t as Vt } from "./settings-loading-row-1fcc5b514745.js";
import { n as Ht, t as Ut } from "./toolbar-breadcrumb-d8f79235f5b5.js";
import { n as Wt, t as Gt } from "./settings-configs-fc9555d3bbc1.js";
import { r as Kt, t as qt } from "./validation-message-bccaffa8ccca.js";
import {
  a as Jt,
  c as Yt,
  i as Xt,
  n as Zt,
  o as Qt,
  r as $t,
  s as en,
  t as tn,
} from "./toolbar-da8b436f1d67.js";
import { n as nn, t as rn } from "./action-button-b7d90e9023c0.js";
import {
  _ as an,
  c as on,
  g as sn,
  h as cn,
  n as ln,
  s as un,
  t as dn,
} from "./configuration-fields-14404446a1e8.js";
import { i as fn, n as pn, o as mn, r as hn, t as gn } from "./edit-disabled-reason-faceb76cd4b8.js";
function _n(e) {
  let t = (0, yn.c)(51),
    { accountId: n, userId: i, environment: a, onClose: o } = e,
    s = r(T),
    c;
  t[0] !== n || t[1] !== a.id || t[2] !== s || t[3] !== i
    ? ((c = async () => {
        let e = ie?.environmentConfigs;
        return e == null
          ? { ok: !1, error: `unavailable` }
          : s.get(Y) !== n || s.get(J) !== i
            ? { ok: !1, error: `authentication` }
            : ((await e.delete({ accountId: n, userId: i, configId: a.id, method: `DELETE` }).catch(vn)) ?? {
                ok: !1,
                error: `unavailable`,
              });
      }),
      (t[0] = n),
      (t[1] = a.id),
      (t[2] = s),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] !== n || t[6] !== a.id || t[7] !== o || t[8] !== s || t[9] !== i
    ? ((l = async (e) => {
        if (
          e.ok &&
          s.get(Y) === n &&
          s.get(J) === i &&
          (await Promise.all([
            s.query.cancel(Wt),
            s.queryClient.cancelQueries({ queryKey: [`cloud-v2-saved-configs-by-id`, n, i] }),
            s.queryClient.cancelQueries({ queryKey: [`cloud-v2-remembered-config`, n, i] }),
          ]),
          s.get(Y) === n && s.get(J) === i)
        ) {
          (s.get(vt, s.get(pt))?.id === a.id && Re(s, s.get(pt)),
            s.queryClient.removeQueries({ queryKey: [`cloud-v2-environment-config`, n, i, a.id] }),
            s.query.setData(Wt, (e) => e?.filter((e) => e.id !== a.id)));
          for (let e of [
            `cloud-v2-settings-configs`,
            `cloud-v2-saved-configs-by-id`,
            `cloud-v2-remembered-config`,
          ])
            p([e, n, i]);
          (o(),
            await Promise.all([
              s.query.invalidate(Wt),
              s.queryClient.resetQueries({ queryKey: [`cloud-v2-saved-configs-by-id`, n, i] }),
            ]),
            await s.queryClient.resetQueries({ queryKey: [`cloud-v2-remembered-config`, n, i] }));
        }
      }),
      (t[5] = n),
      (t[6] = a.id),
      (t[7] = o),
      (t[8] = s),
      (t[9] = i),
      (t[10] = l))
    : (l = t[10]);
  let f;
  t[11] !== c || t[12] !== l
    ? ((f = { mutationFn: c, onSuccess: l }), (t[11] = c), (t[12] = l), (t[13] = f))
    : (f = t[13]);
  let { data: h, isPending: _, mutate: v } = Te(f),
    y = h?.ok === !1,
    b = y && (h.status === 403 || h.status === 404 || h.status === 405),
    x;
  t[14] !== _ || t[15] !== o
    ? ((x = (e) => {
        !e && !_ && o();
      }),
      (t[14] = _),
      (t[15] = o),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== b || t[18] !== _ || t[19] !== v
    ? ((S = (e) => {
        (e.preventDefault(), !_ && !b && v());
      }),
      (t[17] = b),
      (t[18] = _),
      (t[19] = v),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] === a.name
    ? (C = t[22])
    : ((C = (0, X.jsx)(G, {
        children: (0, X.jsx)(q, {
          id: `cloudEnvironments.delete.title`,
          defaultMessage: `Delete {environmentName}?`,
          description: `Confirmation title for permanently deleting a saved cloud environment configuration`,
          values: { environmentName: a.name },
        }),
      })),
      (t[21] = a.name),
      (t[22] = C));
  let w;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(m, {
        className: `contents`,
        children: (0, X.jsx)(q, {
          id: `cloudEnvironments.delete.description`,
          defaultMessage: `This removes the saved environment for everyone with access to it. Existing chats and running environments will remain available.`,
          description: `Deleting an ASB saved configuration prevents new chats from using it, including when shared; it does not delete existing chats or running environments`,
        }),
      })),
      (t[23] = w))
    : (w = t[23]);
  let E;
  t[24] === C
    ? (E = t[25])
    : ((E = (0, X.jsx)(De, { children: (0, X.jsx)(ee, { title: C, subtitle: w }) })),
      (t[24] = C),
      (t[25] = E));
  let D;
  t[26] !== h || t[27] !== y
    ? ((D = y
        ? (0, X.jsx)(De, {
            spacing: `large`,
            children: (0, X.jsx)(xe, {
              Icon: d,
              role: `alert`,
              type: `error`,
              variant: `callout`,
              layout: `verticalIcon`,
              content:
                h.status === 403
                  ? (0, X.jsx)(q, {
                      id: `cloudEnvironments.delete.permissionDenied`,
                      defaultMessage: `You don’t have permission to delete this environment`,
                      description: `Error shown when the server denies permission to delete a saved cloud environment`,
                    })
                  : (0, X.jsx)(q, {
                      id: `cloudEnvironments.delete.errorTitle`,
                      defaultMessage: `Couldn’t delete environment`,
                      description: `Error message shown when deleting a saved cloud environment fails`,
                    }),
            }),
          })
        : null),
      (t[26] = h),
      (t[27] = y),
      (t[28] = D))
    : (D = t[28]);
  let O = b ? `primary` : `secondary`,
    k;
  t[29] === b
    ? (k = t[30])
    : ((k = b
        ? (0, X.jsx)(q, {
            id: `cloudEnvironments.delete.close`,
            defaultMessage: `Close`,
            description: `Close the saved environment deletion dialog after a failure that cannot be retried immediately`,
          })
        : (0, X.jsx)(q, {
            id: `cloudEnvironments.delete.cancel`,
            defaultMessage: `Cancel`,
            description: `Cancel deletion of a saved cloud environment`,
          })),
      (t[29] = b),
      (t[30] = k));
  let A;
  t[31] !== _ || t[32] !== o || t[33] !== O || t[34] !== k
    ? ((A = (0, X.jsx)(ne, { color: O, disabled: _, type: `button`, onClick: o, children: k })),
      (t[31] = _),
      (t[32] = o),
      (t[33] = O),
      (t[34] = k),
      (t[35] = A))
    : (A = t[35]);
  let j;
  t[36] !== b || t[37] !== y || t[38] !== _
    ? ((j = b
        ? null
        : (0, X.jsx)(ne, {
            color: `danger`,
            loading: _,
            type: `submit`,
            children: y
              ? (0, X.jsx)(q, {
                  id: `cloudEnvironments.delete.retry`,
                  defaultMessage: `Try again`,
                  description: `Retry deleting a saved cloud environment after a recoverable failure`,
                })
              : (0, X.jsx)(q, {
                  id: `cloudEnvironments.delete.confirm`,
                  defaultMessage: `Delete environment`,
                  description: `Confirm deletion of a saved cloud environment`,
                }),
          })),
      (t[36] = b),
      (t[37] = y),
      (t[38] = _),
      (t[39] = j))
    : (j = t[39]);
  let M;
  t[40] !== A || t[41] !== j
    ? ((M = (0, X.jsx)(De, {
        spacing: `large`,
        children: (0, X.jsxs)(g, { expandSingleButton: !1, children: [A, j] }),
      })),
      (t[40] = A),
      (t[41] = j),
      (t[42] = M))
    : (M = t[42]);
  let N;
  t[43] !== M || t[44] !== S || t[45] !== E || t[46] !== D
    ? ((N = (0, X.jsxs)(u, { as: `form`, onSubmit: S, children: [E, D, M] })),
      (t[43] = M),
      (t[44] = S),
      (t[45] = E),
      (t[46] = D),
      (t[47] = N))
    : (N = t[47]);
  let P;
  return (
    t[48] !== N || t[49] !== x
      ? ((P = (0, X.jsx)(te, { open: !0, onOpenChange: x, children: N })),
        (t[48] = N),
        (t[49] = x),
        (t[50] = P))
      : (P = t[50]),
    P
  );
}
function vn() {
  return null;
}
var yn, X;
function bn() {
  return (bn = e(() => {
    ((yn = C()), Se(), F(), M(), Lt(), we(), P(), f(), c(), O(), He(), N(), L(), i(), yt(), Gt(), (X = h()));
  }))();
}
var xn, Sn, Cn;
function wn() {
  return (wn = e(() => {
    (F(),
      me(),
      Be(),
      Lt(),
      Ge(),
      ft(),
      nt(),
      L(),
      i(),
      E(),
      dt(),
      Ft(),
      Ve(),
      (xn = class extends Error {}),
      (Sn = class extends Error {}),
      (Cn = ve(T, ({ accountId: e, userId: t, configId: n }, { scope: r }) => ({
        mutationKey: [`create-environment-config-draft`, e, t, n],
        retry: !1,
        mutationFn: async (i) => {
          try {
            var a = K();
            let o = () => {
              if (r.get(st).authLoading || r.get(Y) !== e || r.get(J) !== t || !r.get(Ne))
                throw Error(`authentication`);
            };
            if ((o(), !qe(i, r.get(Ye)))) throw Error(`permission`);
            let s = ie?.environmentConfigs;
            if (s == null) throw Error(`unavailable`);
            let c = Le(r, Et()),
              l = a.u(
                await s
                  .createDraft({ accountId: e, userId: t, configId: n, method: `POST` })
                  .catch(() => null),
              );
            if (
              l == null ||
              (!l.ok &&
                (l.error === `unavailable` ||
                  l.error === `invalid-response` ||
                  l.error === `authentication` ||
                  (l.status != null && l.status >= 500)))
            )
              throw new xn();
            if ((o(), !l.ok)) throw l.error === `http` && l.status === 404 ? new Sn() : Error(l.error);
            if (l.data.thread_id == null) throw Error(`invalid-response`);
            let u = ye(l.data.thread_id),
              d = r.get(et, [i]);
            return (
              W(r, (r) => {
                (jt(r, u, {
                  accountId: e,
                  userId: t,
                  configId: n,
                  draftId: l.data.draft_id,
                  environmentId: l.data.environment_id,
                  name: i.name,
                  repositoryNamesById: Object.fromEntries(
                    i.repositories.map(({ repositoryId: e }) => [e, d[e] ?? e]),
                  ),
                }),
                  ct(r, u, {
                    name: i.name,
                    repositories: i.repositories.map(({ repositoryId: e }) => d[e] ?? e),
                  }),
                  Dt(r, u, St(r, l.data.environment_id)));
              }),
              c
                .setThreadTitle(
                  u,
                  r
                    .get(Me)
                    .formatMessage(
                      {
                        id: `cloudEnvironments.edit.threadTitle`,
                        defaultMessage: `Edit {environmentName}`,
                        description: `Initial chat title for editing a separate draft of a saved cloud environment; environmentName is the user-provided environment name`,
                      },
                      { environmentName: i.name },
                    ),
                )
                .catch((e) => {
                  Ee.warning(`Failed to set environment editing chat title`, {
                    safe: {},
                    sensitive: { error: e },
                  });
                }),
              u
            );
          } catch (e) {
            a.e = e;
          } finally {
            a.d();
          }
        },
      }))));
  }))();
}
var Tn, En;
function Dn() {
  return (Dn = e(() => {
    (F(),
      Lt(),
      Ge(),
      i(),
      Gt(),
      (Tn = B(T, ({ get: e, scope: t }) => ({
        queryKey: [`cloud-v2-empty-search-refresh`, e(Y), e(J), `settings`],
        enabled: e(Ne),
        staleTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: async () => (await t.query.invalidate(Wt, void 0, { throwOnError: !0 }), null),
      }))),
      (En = oe(T, (e, { get: t, scope: n }) => ({
        queryKey: [`cloud-v2-empty-search`, t(Y), t(J), `settings`, e],
        enabled: t(Ne),
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: () => n.query.fetch(Tn),
      }))));
  }))();
}
function On(e) {
  let t = (0, zn.c)(100),
    { config: n, configuration: i, onCancel: a, onSave: o } = e,
    s = r(T),
    c = V(Ye),
    l = ue(),
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = l.formatMessage({
        id: `restricted.environmentSetup.configuration.name.edit`,
        defaultMessage: `Edit environment name`,
        description: `Accessible label for renaming a simulated cloud environment from its settings panel header`,
      })),
      (t[0] = l),
      (t[1] = u));
  let d = u,
    f = D(),
    p = V(Y),
    m = V(J),
    [h, g] = (0, Z.useState)(n),
    _;
  t[2] !== c || t[3] !== h ? ((_ = qe(h, c)), (t[2] = c), (t[3] = h), (t[4] = _)) : (_ = t[4]);
  let v = !_,
    [y, b] = (0, Z.useState)(null),
    x = gt(y, V(Pt)),
    [S, C] = (0, Z.useState)(null),
    [w, E] = (0, Z.useState)(null),
    [ee, O] = (0, Z.useState)(!1),
    [k, A] = (0, Z.useState)(0),
    j;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = { pending: !1, valid: !0 }), (t[5] = j))
    : (j = t[5]);
  let [te, M] = (0, Z.useState)(j),
    N = (0, Z.useRef)(null),
    P = (0, Z.useRef)(null),
    F = (0, Z.useRef)(null),
    I = (0, Z.useId)(),
    L = (0, Z.useId)(),
    R = h.draft ?? h,
    z = {
      access: h.share_settings === `workspace` ? `organization` : `private`,
      name: h.name,
      networkDomains: R.network_policy.type === `restricted` ? R.network_policy.egress_rules.map(Rn) : void 0,
      networkPreset: xt(R.network_policy),
      networkEnabled: R.network_policy.type === `unrestricted` || R.network_policy.type === `restricted`,
      phase: `collecting_input`,
      repositories: R.repositories.map(Ln),
      secretNames: (R.secrets ?? []).map(In),
      setupScript: R.install_script,
      startSkill: R.start_skill,
      outboundIdentityRequirements: R.outbound_identity_requirements,
      ...x,
    },
    re = S?.secrets ?? R.secrets?.map(Fn) ?? [],
    B;
  t[6] !== i || t[7] !== h
    ? ((B = () => (E(null), Qe(`Save`, i, h, void 0))), (t[6] = i), (t[7] = h), (t[8] = B))
    : (B = t[8]);
  let ie;
  t[9] !== p || t[10] !== i.configId || t[11] !== f || t[12] !== s || t[13] !== m
    ? ((ie = async (e, t, n) => {
        if (
          (n != null && E({ ...n, observedAt: new Date().toISOString() }),
          e instanceof Error && e.message === `conflict`)
        ) {
          await f.invalidateQueries({ queryKey: [`cloud-v2-environment-config`, p, m, i.configId] });
          let e = f.getQueryData([`cloud-v2-environment-config`, p, m, i.configId]);
          e != null && s.get(Y) === p && s.get(J) === m && g(e);
        }
      }),
      (t[9] = p),
      (t[10] = i.configId),
      (t[11] = f),
      (t[12] = s),
      (t[13] = m),
      (t[14] = ie))
    : (ie = t[14]);
  let H;
  t[15] !== p ||
  t[16] !== i.accountId ||
  t[17] !== i.configId ||
  t[18] !== o ||
  t[19] !== f ||
  t[20] !== s ||
  t[21] !== m
    ? ((H = (e) => {
        if (s.get(Y) !== i.accountId || s.get(J) !== m) return;
        let t = s.get(Xe)?.[i.configId],
          n = s.get(kt, t ?? null);
        (t != null && n != null && jt(s, t, { ...n, name: e.name }),
          f.setQueryData([`cloud-v2-environment-config`, p, m, i.configId], e),
          o(e));
      }),
      (t[15] = p),
      (t[16] = i.accountId),
      (t[17] = i.configId),
      (t[18] = o),
      (t[19] = f),
      (t[20] = s),
      (t[21] = m),
      (t[22] = H))
    : (H = t[22]);
  let {
      error: ae,
      isPending: U,
      mutate: oe,
      reset: se,
    } = Te({
      onMutate: B,
      mutationFn: async () => {
        if (v) throw Error(`permission`);
        if (s.get(Y) !== i.accountId || s.get(J) !== i.userId) throw Error(`authentication`);
        let e = te.pending ? await N.current?.save() : h;
        if (e == null) throw Error(`unavailable`);
        return x == null
          ? e
          : mt(s, { configuration: i, config: e, changes: x }, S, (e, t) => {
              (g(e), C(t));
            });
      },
      onError: ie,
      onSuccess: H,
    }),
    ce;
  t[23] !== c || t[24] !== h ? ((ce = gn(h, c)), (t[23] = c), (t[24] = h), (t[25] = ce)) : (ce = t[25]);
  let le = ce,
    W;
  t[26] === le
    ? (W = t[27])
    : ((W = le == null ? null : (0, Q.jsx)(hn, { reason: le })), (t[26] = le), (t[27] = W));
  let G = W,
    de;
  t[28] !== ae || t[29] !== S || t[30] !== se
    ? ((de = (e) => {
        tt(ae, S, e === void 0 ? S : e) && se();
      }),
      (t[28] = ae),
      (t[29] = S),
      (t[30] = se),
      (t[31] = de))
    : (de = t[31]);
  let K = de,
    fe =
      !v &&
      !U &&
      (x != null || te.pending) &&
      te.valid &&
      (x?.environmentVariableNames === void 0 || !at(h, S)?.some(Pn)),
    pe = Nt(z, re, x?.secretNames != null, !1, {
      validateConnections: x?.outboundIdentityRequirements != null,
      validateNetwork: x?.networkEnabled != null || x?.networkPreset != null || x?.networkDomains != null,
    }),
    me = p === i.accountId && m === i.userId ? It(ae) : [],
    he = [
      ...(!U && (k > 0 || me.length > 0) ? pe : []),
      ...me.filter((e) => !pe.some((t) => t.field === e.field && t.code === e.code)),
    ],
    ge = he.find(Nn),
    _e,
    ve;
  (t[32] !== U || t[33] !== k
    ? ((_e = () => {
        k > 0 &&
          !U &&
          (F.current?.querySelector(`[data-environment-invalid='true']`) ? je(F.current) : je(P.current));
      }),
      (ve = [k, U]),
      (t[32] = U),
      (t[33] = k),
      (t[34] = _e),
      (t[35] = ve))
    : ((_e = t[34]), (ve = t[35])),
    (0, Z.useLayoutEffect)(_e, ve));
  let ye;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, Q.jsx)(We, { slug: `local-environments` })), (t[36] = ye))
    : (ye = t[36]);
  let be;
  t[37] === a
    ? (be = t[38])
    : ((be = [{ id: `environments`, label: ye, onClick: a }]), (t[37] = a), (t[38] = be));
  let xe = z.name ?? h.name,
    Se;
  t[39] !== be || t[40] !== xe
    ? ((Se = (0, Q.jsx)(Ut, { ancestors: be, current: xe })), (t[39] = be), (t[40] = xe), (t[41] = Se))
    : (Se = t[41]);
  let Ce =
      me.length > 0 && ae instanceof Pe
        ? (0, Q.jsx)(`p`, {
            className: `min-w-0 flex-1 text-sm text-secondary`,
            role: `alert`,
            children: (0, Q.jsx)(qt, { name: ae.variableName }),
          })
        : (0, Q.jsx)(sn, { issues: he }),
    we;
  t[42] !== w || t[43] !== me.length || t[44] !== U
    ? ((we = !1), (t[42] = w), (t[43] = me.length), (t[44] = U), (t[45] = we))
    : (we = t[45]);
  let Ee;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, Q.jsx)(q, {
        id: `settings.localEnvironments.catalog.editor.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for exiting the cloud environment editor`,
      })),
      (t[46] = Ee))
    : (Ee = t[46]);
  let De;
  t[47] !== U || t[48] !== a
    ? ((De = (0, Q.jsx)(ne, {
        color: `secondary`,
        disabled: U,
        size: `toolbar`,
        type: `button`,
        onClick: a,
        children: Ee,
      })),
      (t[47] = U),
      (t[48] = a),
      (t[49] = De))
    : (De = t[49]);
  let Oe = !fe,
    ke;
  t[50] === U
    ? (ke = t[51])
    : ((ke = U
        ? (0, Q.jsx)(q, {
            id: `restricted.environmentSetup.sidePanel.saving`,
            defaultMessage: `Saving…`,
            description: `Button label while changes to a cloud environment configuration are being saved`,
          })
        : (0, Q.jsx)(q, {
            id: `cloudEnvironmentSettings.saveChanges`,
            defaultMessage: `Save changes`,
            description: `Button that saves changes from the cloud environment settings editor`,
          })),
      (t[50] = U),
      (t[51] = ke));
  let Ae;
  t[52] !== L || t[53] !== G || t[54] !== Oe || t[55] !== ke
    ? ((Ae = (0, Q.jsx)(rn, {
        color: `primary`,
        disabled: Oe,
        tooltipContent: G,
        size: `toolbar`,
        form: L,
        type: `submit`,
        children: ke,
      })),
      (t[52] = L),
      (t[53] = G),
      (t[54] = Oe),
      (t[55] = ke),
      (t[56] = Ae))
    : (Ae = t[56]);
  let Me;
  t[57] !== Ce || t[58] !== we || t[59] !== De || t[60] !== Ae
    ? ((Me = (0, Q.jsxs)(Q.Fragment, { children: [Ce, we, De, Ae] })),
      (t[57] = Ce),
      (t[58] = we),
      (t[59] = De),
      (t[60] = Ae),
      (t[61] = Me))
    : (Me = t[61]);
  let Ne = ee
      ? (0, Q.jsx)(lt, {
          "aria-invalid": ge != null,
          "aria-describedby": ge == null ? void 0 : I,
          "data-environment-invalid": ge != null,
          "aria-label": l.formatMessage({
            id: `restricted.environmentSetup.configuration.name`,
            defaultMessage: `Name`,
            description: `Accessible label for renaming an environment from its settings panel header`,
          }),
          autoFocus: !0,
          disabled: v || U,
          maxLength: 128,
          value: z.name ?? ``,
          onBlur: () => O(!z.name?.trim()),
          onChange: (e) => {
            (K(), b({ ...y, name: e.currentTarget.value }));
          },
          onKeyDown: (e) => {
            (e.key === `Enter` || e.key === `Escape`) && (e.preventDefault(), O(!z.name?.trim()));
          },
        })
      : (0, Q.jsx)(`button`, {
          "data-environment-invalid": ge != null,
          "aria-describedby": ge == null ? void 0 : I,
          "aria-label": d,
          className: `cursor-interaction truncate text-lg font-medium text-default select-none`,
          disabled: v || U,
          type: `button`,
          onClick: () => O(!0),
          children: z.name,
        }),
    Fe;
  t[62] !== d || t[63] !== G || t[64] !== Ne
    ? ((Fe = (0, Q.jsx)(un, { className: `min-w-0`, label: d, reason: G, children: Ne })),
      (t[62] = d),
      (t[63] = G),
      (t[64] = Ne),
      (t[65] = Fe))
    : (Fe = t[65]);
  let Ie;
  t[66] !== I || t[67] !== ge
    ? ((Ie = ge == null ? null : (0, Q.jsx)(cn, { id: I, issue: ge })),
      (t[66] = I),
      (t[67] = ge),
      (t[68] = Ie))
    : (Ie = t[68]);
  let Le;
  t[69] !== Fe || t[70] !== Ie
    ? ((Le = (0, Q.jsxs)(`div`, { ref: F, className: `flex min-w-0 flex-col gap-1`, children: [Fe, Ie] })),
      (t[69] = Fe),
      (t[70] = Ie),
      (t[71] = Le))
    : (Le = t[71]);
  let Re;
  t[72] === l
    ? (Re = t[73])
    : ((Re = l.formatMessage({
        id: `restricted.environmentSetup.sidePanel.form`,
        defaultMessage: `Environment configuration`,
        description: `Accessible label for the cloud environment side-panel configuration form`,
      })),
      (t[72] = l),
      (t[73] = Re));
  let ze;
  t[74] !== fe || t[75] !== oe || t[76] !== A || t[77] !== pe
    ? ((ze = (e) => {
        (e.preventDefault(), fe && (A(Mn), pe.length === 0 && oe()));
      }),
      (t[74] = fe),
      (t[75] = oe),
      (t[76] = A),
      (t[77] = pe),
      (t[78] = ze))
    : (ze = t[78]);
  let Be;
  t[79] !== K || t[80] !== M
    ? ((Be = (e, t) => {
        (K(), M({ pending: e, valid: t }));
      }),
      (t[79] = K),
      (t[80] = M),
      (t[81] = Be))
    : (Be = t[81]);
  let Ve;
  t[82] === K
    ? (Ve = t[83])
    : ((Ve = (e) => {
        (K(), b((t) => ({ ...t, ...e })));
      }),
      (t[82] = K),
      (t[83] = Ve));
  let He;
  t[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (e) => {
        (g(e), e.draft != null && b(jn));
      }),
      (t[84] = He))
    : (He = t[84]);
  let Ue;
  t[85] !== h || t[86] !== S ? ((Ue = at(h, S)), (t[85] = h), (t[86] = S), (t[87] = Ue)) : (Ue = t[87]);
  let Ge;
  t[88] !== p || t[89] !== S || t[90] !== K || t[91] !== C || t[92] !== m
    ? ((Ge = (e, t) => {
        let n = {
          currentStep: S?.currentStep ?? 0,
          ...S,
          environmentVariables: e,
          removedEnvironmentVariableNames: [...(S?.removedEnvironmentVariableNames ?? []), ...t],
          environmentVariablesOwner: { accountId: p, userId: m },
        };
        (K(n), C(n), b((t) => ({ ...t, environmentVariableNames: e.map(An) })));
      }),
      (t[88] = p),
      (t[89] = S),
      (t[90] = K),
      (t[91] = C),
      (t[92] = m),
      (t[93] = Ge))
    : (Ge = t[93]);
  let Ke;
  return (
    t[94] !== p || t[95] !== S || t[96] !== K || t[97] !== C || t[98] !== m
      ? ((Ke = (e) => {
          let t = {
            currentStep: S?.currentStep ?? 0,
            ...S,
            secrets: e,
            secretsEditMode: `replace`,
            secretsOwner: { accountId: p, userId: m },
          };
          (K(t), C(t), b((t) => ({ ...t, secretNames: e.flatMap(kn) })));
        }),
        (t[94] = p),
        (t[95] = S),
        (t[96] = K),
        (t[97] = C),
        (t[98] = m),
        (t[99] = Ke))
      : (Ke = t[99]),
    (0, Q.jsx)(Ze, {
      backSlot: Se,
      footer: Me,
      title: Le,
      children: (0, Q.jsx)(`form`, {
        id: L,
        ref: P,
        noValidate: !0,
        "aria-label": Re,
        className: `flex flex-col gap-6`,
        onSubmit: ze,
        children: (0, Q.jsx)(`fieldset`, {
          className: `flex min-w-0 flex-col gap-6`,
          disabled: v || U,
          children: (0, Q.jsx)(dn, {
            config: h,
            configuration: i,
            vpnRef: N,
            onVpnPendingChange: Be,
            draft: z,
            isReadOnly: v || U,
            readOnlyTooltip: G,
            issues: he,
            onDraftChange: Ve,
            onDraftSaved: He,
            panelState: S,
            secrets: re,
            environmentVariables: Ue,
            setEnvironmentVariables: Ge,
            serverNetworkPolicy: R.network_policy,
            setSecrets: Ke,
          }),
        }),
      }),
    })
  );
}
function kn(e) {
  let { name: t } = e;
  return t.trim().length > 0 ? [t.trim()] : [];
}
function An(e) {
  let { name: t } = e;
  return t;
}
function jn(e) {
  return e ?? {};
}
function Mn(e) {
  return e + 1;
}
function Nn(e) {
  let { field: t } = e;
  return t === `name`;
}
function Pn(e) {
  let { value: t, serverId: n, error: r, source: i } = e;
  return Je(t, n != null && r == null, i === `user_provided`) != null;
}
function Fn(e, t) {
  let { id: n, name: r, source: i, target: a, error: o } = e;
  return {
    id: t,
    isMissing: i === `environment` && n == null && o == null,
    injectionTarget:
      `environment_variable` in a
        ? {
            type: `environment_variable`,
            name: a.environment_variable,
            domain: a.allowed_domains?.join(`, `),
          }
        : {
            type: `http_header`,
            name: a.http_header.header_name,
            domain: a.http_header.allowed_domains.join(`, `),
          },
    name: r,
    serverId: n,
    source: i,
    value: ``,
  };
}
function In(e) {
  let { name: t } = e;
  return t;
}
function Ln(e) {
  let { repository_id: t } = e;
  return t;
}
function Rn(e) {
  return e.host;
}
var zn, Z, Q;
function Bn() {
  return (Bn = e(() => {
    ((zn = C()),
      Se(),
      _(),
      F(),
      (Z = s()),
      M(),
      Lt(),
      Ge(),
      P(),
      Oe(),
      Ht(),
      i(),
      _t(),
      $e(),
      nn(),
      ln(),
      ke(),
      mn(),
      on(),
      dt(),
      Ot(),
      Ct(),
      Kt(),
      Fe(),
      Tt(),
      an(),
      it(),
      wt(),
      At(),
      fn(),
      pn(),
      (Q = h()));
  }))();
}
function Vn() {
  let e = (0, Jn.c)(3),
    t = A();
  if (!V(Ne)) return null;
  if (new URLSearchParams(t.search).get(`tab`) === `personal-vault`) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(Xn, {})), (e[0] = t)) : (t = e[0]),
      t
    );
  }
  let n;
  return (e[1] === t.key ? (n = e[2]) : ((n = (0, $.jsx)(Un, {}, t.key)), (e[1] = t.key), (e[2] = n)), n);
}
function Hn(e) {
  let t = (0, Jn.c)(7),
    { failed: r } = e,
    i = r !== void 0 && r,
    a = V(Y),
    o = V(J),
    { authLoading: s } = V(st),
    c = !s && a != null && o != null,
    l;
  t[0] === c ? (l = t[1]) : ((l = (0, $.jsx)(tn, { signedIn: c })), (t[0] = c), (t[1] = l));
  let u;
  t[2] === i
    ? (u = t[3])
    : ((u = (0, $.jsx)(n, {
        children: i
          ? (0, $.jsx)(bt, {
              layout: `settings-row`,
              children: (0, $.jsx)(q, {
                id: `personalVault.moduleLoadError`,
                defaultMessage: `Couldn’t load personal vault. Reload the app to try again.`,
                description: `Error when the personal vault code cannot be downloaded, asking the user to reload the app`,
              }),
            })
          : (0, $.jsx)(Vt, {
              children: (0, $.jsx)(q, {
                id: `personalVault.loading`,
                defaultMessage: `Loading personal vault…`,
                description: `Loading state for personal vault metadata`,
              }),
            }),
      })),
      (t[2] = i),
      (t[3] = u));
  let d;
  return (
    t[4] !== l || t[5] !== u
      ? ((d = (0, $.jsx)(en, { selectedTab: `personal-vault`, stickyControls: l, children: u })),
        (t[4] = l),
        (t[5] = u),
        (t[6] = d))
      : (d = t[6]),
    d
  );
}
function Un() {
  let e = (0, Jn.c)(53),
    t = r(T),
    i = ue(),
    o = V(Y),
    s = V(J),
    { data: c, isFetching: l, refetch: u, isPending: d, isError: f } = V(Wt),
    p = ce(et, c),
    m = i.formatMessage({
      id: `settings.localEnvironments.catalog.repository.unknown`,
      defaultMessage: `Unknown repository`,
      description: `Neutral label when a saved cloud environment's repository is unavailable or cannot be resolved`,
    }),
    [h, g] = (0, Yn.useState)(null),
    [_, v] = (0, Yn.useState)(null),
    [y, b] = (0, Yn.useState)(``),
    x = c?.map((e) => ({
      config: e,
      repositoryNames: e.repositories.map((e) => {
        let { repositoryId: t } = e;
        return p?.[t] ?? m;
      }),
    })),
    S;
  e[0] === y ? (S = e[1]) : ((S = y.trim().toLocaleLowerCase()), (e[0] = y), (e[1] = S));
  let C = S,
    w = ot(C, 300),
    E = x?.filter((e) => {
      let { config: t, repositoryNames: n } = e;
      return t.name.toLocaleLowerCase().includes(C) || n.some((e) => e.toLocaleLowerCase().includes(C));
    }),
    ee = C !== `` && E?.length === 0,
    D = o != null && s != null && ee && C === w && !d && !f && !l,
    O;
  e[2] === D ? (O = e[3]) : ((O = { enabled: D }), (e[2] = D), (e[3] = O));
  let { isFetching: k, isError: A, refetch: j } = ce(En, C, O),
    te = f || (ee && A);
  if (h?.accountId === o && h.userId === s && o != null && s != null) {
    let t;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = () => g(null)), (e[4] = t)) : (t = e[4]);
    let n;
    return (
      e[5] === u
        ? (n = e[6])
        : ((n = () => {
            (g(null), u());
          }),
          (e[5] = u),
          (e[6] = n)),
      (0, $.jsx)(
        Wn,
        {
          accountId: o,
          environment: h.config,
          repositoryNamesById: p,
          unknownRepositoryName: m,
          userId: s,
          onCancel: t,
          onSave: n,
        },
        `${o}:${s}:${h.config.id}`,
      )
    );
  }
  let M = null;
  if (o == null || s == null) {
    let t;
    (e[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(bt, {
          layout: `settings-row`,
          children: (0, $.jsx)(q, {
            id: `restricted.cloudV2.savedConfigs.signIn`,
            defaultMessage: `Sign in to load saved environments`,
            description: `Prompt when saved environment discovery lacks a signed-in account`,
          }),
        })),
        (e[7] = t))
      : (t = e[7]),
      (M = t));
  } else if ((d || k) && !te) {
    let t;
    (e[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(Vt, {
          children: (0, $.jsx)(q, {
            id: `restricted.cloudV2.savedConfigs.loading`,
            defaultMessage: `Loading saved environments…`,
            description: `Loading state for saved cloud environments`,
          }),
        })),
        (e[8] = t))
      : (t = e[8]),
      (M = t));
  } else if (te) {
    let t;
    e[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(q, {
          id: `restricted.cloudV2.savedConfigs.error`,
          defaultMessage: `Couldn’t load saved environments`,
          description: `API failure while loading saved cloud environments, including additional pages`,
        })),
        (e[9] = t))
      : (t = e[9]);
    let n = l || k,
      r;
    e[10] !== A || e[11] !== u || e[12] !== j
      ? ((r = () => {
          A ? j() : u();
        }),
        (e[10] = A),
        (e[11] = u),
        (e[12] = j),
        (e[13] = r))
      : (r = e[13]);
    let i;
    e[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(q, {
          id: `restricted.cloudV2.savedConfigs.retry`,
          defaultMessage: `Retry`,
          description: `Retry a failed saved environment list request`,
        })),
        (e[14] = i))
      : (i = e[14]);
    let a;
    (e[15] !== n || e[16] !== r
      ? ((a = (0, $.jsxs)(bt, {
          layout: `settings-row`,
          children: [
            t,
            (0, $.jsx)(ne, { color: `secondary`, disabled: n, size: `compact`, onClick: r, children: i }),
          ],
        })),
        (e[15] = n),
        (e[16] = r),
        (e[17] = a))
      : (a = e[17]),
      (M = a));
  } else if (c?.length === 0) {
    let t;
    (e[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(bt, {
          layout: `settings-row`,
          children: (0, $.jsx)(q, {
            id: `restricted.cloudV2.savedConfigs.empty`,
            defaultMessage: `No saved environments`,
            description: `Empty state after saved environment listing completes successfully`,
          }),
        })),
        (e[18] = t))
      : (t = e[18]),
      (M = t));
  }
  let N;
  e[19] !== o || e[20] !== _ || e[21] !== s
    ? ((N =
        _ != null && _.accountId === o && _.userId === s
          ? (0, $.jsx)(
              _n,
              { accountId: _.accountId, userId: _.userId, environment: _.config, onClose: () => v(null) },
              `${_.accountId}:${_.userId}:${_.config.id}`,
            )
          : null),
      (e[19] = o),
      (e[20] = _),
      (e[21] = s),
      (e[22] = N))
    : (N = e[22]);
  let P = en,
    F;
  e[23] === i
    ? (F = e[24])
    : ((F = i.formatMessage({
        id: `settings.localEnvironments.catalog.search.label`,
        defaultMessage: `Search environments`,
        description: `Accessible label for searching the environments catalog`,
      })),
      (e[23] = i),
      (e[24] = F));
  let I;
  e[25] === i
    ? (I = e[26])
    : ((I = i.formatMessage({
        id: `settings.localEnvironments.catalog.search.placeholder`,
        defaultMessage: `Search`,
        description: `Placeholder for searching the environments catalog`,
      })),
      (e[25] = i),
      (e[26] = I));
  let L;
  e[27] !== y || e[28] !== F || e[29] !== I
    ? ((L = {
        id: `environments-search`,
        label: F,
        maxLength: 128,
        onSearchQueryChange: b,
        placeholder: I,
        searchQuery: y,
      }),
      (e[27] = y),
      (e[28] = F),
      (e[29] = I),
      (e[30] = L))
    : (L = e[30]);
  let R;
  e[31] === t ? (R = e[32]) : ((R = () => rt(t)), (e[31] = t), (e[32] = R));
  let z, re;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(a, { "aria-hidden": !1, asset: le })),
      (re = (0, $.jsx)(q, {
        id: `settings.codexCloud.create`,
        defaultMessage: `Create environment`,
        description: `Button label for creating a cloud environment`,
      })),
      (e[33] = z),
      (e[34] = re))
    : ((z = e[33]), (re = e[34]));
  let B;
  e[35] === R
    ? (B = e[36])
    : ((B = (0, $.jsxs)(ne, {
        className: `w-full justify-center @md:w-auto`,
        color: `primary`,
        size: `toolbar`,
        onClick: R,
        children: [z, re],
      })),
      (e[35] = R),
      (e[36] = B));
  let H;
  e[37] !== B || e[38] !== L
    ? ((H = (0, $.jsx)($t, { selectedTab: `environments`, search: L, children: B })),
      (e[37] = B),
      (e[38] = L),
      (e[39] = H))
    : (H = e[39]);
  let ae = n,
    U =
      E != null && E.length > 0
        ? (0, $.jsx)(he, {
            label: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-6 text-xs font-normal text-secondary select-none`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `min-w-0 flex-1`,
                  children: (0, $.jsx)(q, {
                    id: `cloudEnvironments.columns.environment`,
                    defaultMessage: `Environments`,
                    description: `Column heading for the saved environment name`,
                  }),
                }),
                (0, $.jsx)(`span`, {
                  className: `hidden w-32 shrink-0 @lg/settings-row:block`,
                  children: (0, $.jsx)(q, {
                    id: `cloudEnvironments.columns.sharing`,
                    defaultMessage: `Sharing`,
                    description: `Column heading for environment ownership and sharing status`,
                  }),
                }),
              ],
            }),
            control: (0, $.jsx)(`span`, { "aria-hidden": !0, className: `w-8` }),
            controlSizing: `content`,
            size: `compact`,
          })
        : null,
    oe =
      E?.length === 0 && C !== `` && !d && !k && !te
        ? (0, $.jsx)(bt, {
            layout: `settings-row`,
            children: (0, $.jsx)(q, {
              id: `settings.localEnvironments.catalog.empty`,
              defaultMessage: `No matching environments`,
              description: `Empty state when no environments match a search`,
            }),
          })
        : null,
    se = E?.map((e) => {
      let { config: t } = e;
      return (0, $.jsx)(
        Gn,
        {
          accountId: o,
          userId: s,
          environment: t,
          unknownRepositoryName: m,
          onView: o == null || s == null ? void 0 : () => g({ accountId: o, userId: s, config: t }),
          onDelete:
            ie?.environmentConfigs == null || o == null || s == null
              ? void 0
              : () => v({ accountId: o, userId: s, config: t }),
        },
        t.id,
      );
    }),
    W;
  e[40] !== ae || e[41] !== M || e[42] !== U || e[43] !== oe || e[44] !== se
    ? ((W = (0, $.jsxs)(ae, { children: [U, oe, se, M] })),
      (e[40] = ae),
      (e[41] = M),
      (e[42] = U),
      (e[43] = oe),
      (e[44] = se),
      (e[45] = W))
    : (W = e[45]);
  let G;
  e[46] !== P || e[47] !== H || e[48] !== W
    ? ((G = (0, $.jsx)(P, { selectedTab: `environments`, stickyControls: H, children: W })),
      (e[46] = P),
      (e[47] = H),
      (e[48] = W),
      (e[49] = G))
    : (G = e[49]);
  let de;
  return (
    e[50] !== G || e[51] !== N
      ? ((de = (0, $.jsxs)($.Fragment, { children: [N, G] })), (e[50] = G), (e[51] = N), (e[52] = de))
      : (de = e[52]),
    de
  );
}
function Wn(e) {
  let n = (0, Jn.c)(50),
    {
      accountId: i,
      environment: a,
      repositoryNamesById: o,
      unknownRepositoryName: s,
      userId: c,
      onCancel: l,
      onSave: u,
    } = e,
    d = r(T),
    f = V(Xe),
    p = ie?.environmentConfigs,
    m;
  n[0] !== i || n[1] !== a.id || n[2] !== c
    ? ((m = [`cloud-v2-settings-environment-config`, i, c, a.id]),
      (n[0] = i),
      (n[1] = a.id),
      (n[2] = c),
      (n[3] = m))
    : (m = n[3]);
  let h;
  n[4] !== i || n[5] !== a.id
    ? ((h = async () => {
        if (p == null) throw Error(`Environment configuration is unavailable`);
        let e = await p.request({ accountId: i, configId: a.id, method: `GET` });
        if (!e.ok) throw Error(`Environment configuration could not be loaded`);
        return e.config;
      }),
      (n[4] = i),
      (n[5] = a.id),
      (n[6] = h))
    : (h = n[6]);
  let g;
  n[7] !== m || n[8] !== h
    ? ((g = { queryKey: m, enabled: p != null, retry: !1, staleTime: 0, gcTime: 0, queryFn: h }),
      (n[7] = m),
      (n[8] = h),
      (n[9] = g))
    : (g = n[9]);
  let { data: _, isError: v, refetch: b } = y(g);
  if (_ == null) {
    let e;
    n[10] !== v || n[11] !== b
      ? ((e =
          v || p == null
            ? (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(q, {
                    id: `restricted.environmentSetup.sidePanel.loadError`,
                    defaultMessage: `Couldn’t load environment`,
                    description: `Error when the cloud environment configuration cannot be loaded`,
                  }),
                  (0, $.jsx)(ne, {
                    color: `secondary`,
                    size: `compact`,
                    onClick: () => void b(),
                    children: (0, $.jsx)(q, {
                      id: `restricted.environmentSetup.sidePanel.retry`,
                      defaultMessage: `Retry`,
                      description: `Button to retry loading a cloud environment configuration`,
                    }),
                  }),
                ],
              })
            : (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(t, { className: `icon-sm` }),
                  (0, $.jsx)(q, {
                    id: `restricted.environmentSetup.sidePanel.loading`,
                    defaultMessage: `Loading environment…`,
                    description: `Status shown while the cloud environment configuration is being loaded`,
                  }),
                ],
              })),
        (n[10] = v),
        (n[11] = b),
        (n[12] = e))
      : (e = n[12]);
    let r;
    n[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(q, {
          id: `settings.localEnvironments.catalog.editor.cancel`,
          defaultMessage: `Cancel`,
          description: `Button label for exiting the cloud environment editor`,
        })),
        (n[13] = r))
      : (r = n[13]);
    let i;
    n[14] === l
      ? (i = n[15])
      : ((i = (0, $.jsx)(ne, { color: `secondary`, size: `compact`, onClick: l, children: r })),
        (n[14] = l),
        (n[15] = i));
    let o;
    n[16] !== e || n[17] !== i
      ? ((o = (0, $.jsxs)(bt, { layout: `settings-row`, children: [e, i] })),
        (n[16] = e),
        (n[17] = i),
        (n[18] = o))
      : (o = n[18]);
    let s;
    return (
      n[19] !== a.name || n[20] !== o
        ? ((s = (0, $.jsx)(Ze, { title: a.name, children: o })), (n[19] = a.name), (n[20] = o), (n[21] = s))
        : (s = n[21]),
      s
    );
  }
  let x = f?.[a.id] ?? null,
    S,
    C,
    w,
    E,
    ee,
    D;
  if (
    n[22] !== i ||
    n[23] !== _ ||
    n[24] !== a.id ||
    n[25] !== o ||
    n[26] !== d ||
    n[27] !== x ||
    n[28] !== s ||
    n[29] !== c
  ) {
    let e = x == null ? null : d.get(kt, x);
    ((w = i),
      (E = c),
      (ee = a.id),
      (D = _.name),
      (S = e?.repositoryNamesById),
      (C = Object.fromEntries(
        (_.draft ?? _).repositories.map((t) => {
          let { repository_id: n } = t;
          return [n, o[n] ?? e?.repositoryNamesById[n] ?? s];
        }),
      )),
      (n[22] = i),
      (n[23] = _),
      (n[24] = a.id),
      (n[25] = o),
      (n[26] = d),
      (n[27] = x),
      (n[28] = s),
      (n[29] = c),
      (n[30] = S),
      (n[31] = C),
      (n[32] = w),
      (n[33] = E),
      (n[34] = ee),
      (n[35] = D));
  } else ((S = n[30]), (C = n[31]), (w = n[32]), (E = n[33]), (ee = n[34]), (D = n[35]));
  let O;
  n[36] !== S || n[37] !== C ? ((O = { ...S, ...C }), (n[36] = S), (n[37] = C), (n[38] = O)) : (O = n[38]);
  let k;
  n[39] !== O || n[40] !== w || n[41] !== E || n[42] !== ee || n[43] !== D
    ? ((k = { accountId: w, userId: E, configId: ee, name: D, repositoryNamesById: O }),
      (n[39] = O),
      (n[40] = w),
      (n[41] = E),
      (n[42] = ee),
      (n[43] = D),
      (n[44] = k))
    : (k = n[44]);
  let A = k,
    j;
  return (
    n[45] !== _ || n[46] !== A || n[47] !== l || n[48] !== u
      ? ((j = (0, $.jsx)(On, { config: _, configuration: A, onCancel: l, onSave: u })),
        (n[45] = _),
        (n[46] = A),
        (n[47] = l),
        (n[48] = u),
        (n[49] = j))
      : (j = n[49]),
    j
  );
}
function Gn(e) {
  let t = (0, Jn.c)(44),
    { accountId: n, userId: r, environment: i, unknownRepositoryName: a, onView: o, onDelete: s } = e,
    c = V(Ye),
    l;
  t[0] !== c || t[1] !== i ? ((l = qe(i, c)), (t[0] = c), (t[1] = i), (t[2] = l)) : (l = t[2]);
  let u = l,
    d = ue(),
    f = i.versionRevision === 1,
    p;
  if (i.shareSettings === `private`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(q, {
          id: `cloudEnvironments.sharing.private`,
          defaultMessage: `Private`,
          description: `A saved environment that only its owner can access`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (p = e));
  } else if (i.isOwner == null) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(q, {
          id: `cloudEnvironments.sharing.shared`,
          defaultMessage: `Shared`,
          description: `A workspace-shared environment whose ownership information is unavailable`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (p = e));
  } else if (i.isOwner) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(q, {
          id: `cloudEnvironments.sharing.byYou`,
          defaultMessage: `Shared by you`,
          description: `A saved environment owned by the current user and shared with their workspace`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (p = e));
  } else {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(q, {
          id: `cloudEnvironments.sharing.withYou`,
          defaultMessage: `Shared with you`,
          description: `A saved environment owned by someone else and shared with the current user's workspace`,
        })),
        (t[6] = e))
      : (e = t[6]),
      (p = e));
  }
  let m;
  t[7] !== n ||
  t[8] !== u ||
  t[9] !== c?.rbacEnabled ||
  t[10] !== i ||
  t[11] !== d ||
  t[12] !== s ||
  t[13] !== o ||
  t[14] !== r
    ? ((m =
        s == null
          ? null
          : (0, $.jsxs)(_e, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, $.jsx)(Ce, {
                label: d.formatMessage(
                  {
                    id: `settings.localEnvironments.catalog.actions.label`,
                    defaultMessage: `Actions for {environmentName}`,
                    description: `Accessible label for a cloud environment action menu`,
                  },
                  { environmentName: i.name },
                ),
                size: `xs`,
              }),
              children: [
                u && n != null && r != null
                  ? (0, $.jsx)(qn, { accountId: n, userId: r, environment: i })
                  : null,
                !u && o != null
                  ? (0, $.jsx)(pe.Item, {
                      leftIconAsset: H,
                      onSelect: o,
                      children: (0, $.jsx)(q, {
                        id: `settings.localEnvironments.catalog.view`,
                        defaultMessage: `View`,
                        description: `Menu action to inspect a saved cloud environment when the user cannot edit it`,
                      }),
                    })
                  : null,
                s == null
                  ? null
                  : (0, $.jsx)(pe.Item, {
                      disabled: c?.rbacEnabled === !1 ? i.isOwner === !1 : !u,
                      leftIconAsset: w,
                      onSelect: s,
                      children: (0, $.jsx)(q, {
                        id: `cloudEnvironments.delete.action`,
                        defaultMessage: `Delete environment`,
                        description: `Menu action to delete a saved cloud environment configuration`,
                      }),
                    }),
              ],
            })),
      (t[7] = n),
      (t[8] = u),
      (t[9] = c?.rbacEnabled),
      (t[10] = i),
      (t[11] = d),
      (t[12] = s),
      (t[13] = o),
      (t[14] = r),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] === i.name
    ? (h = t[17])
    : ((h = (0, $.jsx)(`span`, { className: `truncate`, children: i.name })), (t[16] = i.name), (t[17] = h));
  let g;
  t[18] === f
    ? (g = t[19])
    : ((g = f
        ? (0, $.jsx)(se, {
            className: `shrink-0 select-none`,
            triggerAsChild: !1,
            tooltipContent: (0, $.jsx)(q, {
              id: `settings.localEnvironments.catalog.unpublished.description`,
              defaultMessage: `Publish to make available`,
              description: `Tooltip explaining why an unpublished cloud environment is hidden from the environment picker`,
            }),
            children: (0, $.jsx)(zt, {
              variant: `outline`,
              children: (0, $.jsx)(q, {
                id: `settings.localEnvironments.catalog.unpublished`,
                defaultMessage: `Unpublished`,
                description: `Badge beside the name of a cloud environment that has never been published`,
              }),
            }),
          })
        : null),
      (t[18] = f),
      (t[19] = g));
  let _;
  t[20] !== h || t[21] !== g
    ? ((_ = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1`,
        children: [h, g],
      })),
      (t[20] = h),
      (t[21] = g),
      (t[22] = _))
    : (_ = t[22]);
  let v;
  if (t[23] !== i.repositories || t[24] !== a) {
    let e;
    (t[26] === a
      ? (e = t[27])
      : ((e = (e) => {
          let { repositoryId: t } = e;
          return { id: t, name: (0, $.jsx)(Kn, { repositoryId: t, unknownRepositoryName: a }) };
        }),
        (t[26] = a),
        (t[27] = e)),
      (v = i.repositories.map(e)),
      (t[23] = i.repositories),
      (t[24] = a),
      (t[25] = v));
  } else v = t[25];
  let y = i.repositories.length - 1,
    b;
  t[28] === y
    ? (b = t[29])
    : ((b = (0, $.jsx)(q, {
        id: `cloudEnvironments.repositories.moreRepos`,
        defaultMessage: `+{count, plural, one {# more repo} other {# more repos}}`,
        description: `Number of additional repositories in a saved environment; hover to see the full list`,
        values: { count: y },
      })),
      (t[28] = y),
      (t[29] = b));
  let x;
  t[30] !== v || t[31] !== b
    ? ((x = (0, $.jsx)(Jt, { items: v, moreLabel: b })), (t[30] = v), (t[31] = b), (t[32] = x))
    : (x = t[32]);
  let S;
  t[33] !== _ || t[34] !== x
    ? ((S = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [_, x] })),
      (t[33] = _),
      (t[34] = x),
      (t[35] = S))
    : (S = t[35]);
  let C;
  t[36] === p
    ? (C = t[37])
    : ((C = (0, $.jsx)(`span`, {
        className: `text-sm font-normal text-secondary @lg/settings-row:w-32 @lg/settings-row:shrink-0`,
        children: p,
      })),
      (t[36] = p),
      (t[37] = C));
  let T;
  t[38] !== S || t[39] !== C
    ? ((T = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-1 @lg/settings-row:flex-row @lg/settings-row:items-center @lg/settings-row:gap-6`,
        children: [S, C],
      })),
      (t[38] = S),
      (t[39] = C),
      (t[40] = T))
    : (T = t[40]);
  let E;
  return (
    t[41] !== T || t[42] !== m
      ? ((E = (0, $.jsx)(he, { controlSizing: `content`, control: m, label: T })),
        (t[41] = T),
        (t[42] = m),
        (t[43] = E))
      : (E = t[43]),
    E
  );
}
function Kn(e) {
  let t = (0, Jn.c)(4),
    { repositoryId: n, unknownRepositoryName: r } = e,
    { data: i, isPending: a } = ce(Ke, n);
  if (a) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Ie, { className: `w-32 max-w-full`, as: `span`, size: `sm` })), (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsxs)(`span`, {
            className: `flex h-lh min-w-0 items-center`,
            role: `status`,
            children: [
              e,
              (0, $.jsx)(`span`, {
                className: `sr-only`,
                children: (0, $.jsx)(q, {
                  id: `settings.localEnvironments.catalog.repository.loading`,
                  defaultMessage: `Loading repository…`,
                  description: `Accessible loading status while a saved cloud environment's repository name is being fetched`,
                }),
              }),
            ],
          })),
          (t[1] = n))
        : (n = t[1]),
      n
    );
  }
  let o = i == null || i === `inaccessible` ? r : i.repository_full_name,
    s;
  return (
    t[2] === o
      ? (s = t[3])
      : ((s = (0, $.jsx)(`span`, { className: `truncate`, children: o })), (t[2] = o), (t[3] = s)),
    s
  );
}
function qn(e) {
  let n = (0, Jn.c)(22),
    { accountId: i, userId: a, environment: o } = e,
    s = r(T),
    c = ue(),
    l = ht(),
    u;
  n[0] !== i || n[1] !== o.id || n[2] !== a
    ? ((u = { accountId: i, userId: a, configId: o.id }), (n[0] = i), (n[1] = o.id), (n[2] = a), (n[3] = u))
    : (u = n[3]);
  let { isPending: d, error: f, mutateAsync: p } = ce(Cn, u),
    m;
  if (d) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(q, {
          id: `cloudEnvironments.edit.opening`,
          defaultMessage: `Creating draft…`,
          description: `Loading label in the environment action menu while creating a draft and opening its editing chat`,
        })),
        (n[4] = e))
      : (e = n[4]),
      (m = e));
  } else if (o.versionRevision === 1) {
    let e;
    (n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(q, {
          id: `settings.localEnvironments.catalog.resumeSetup`,
          defaultMessage: `Continue setup`,
          description: `Menu item that opens a setup draft to finish configuring and publish an unpublished cloud environment`,
        })),
        (n[5] = e))
      : (e = n[5]),
      (m = e));
  } else {
    let e;
    (n[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(q, {
          id: `settings.localEnvironments.catalog.continueSetup`,
          defaultMessage: `Edit`,
          description: `Menu item that creates a separate draft and opens its environment editing chat`,
        })),
        (n[6] = e))
      : (e = n[6]),
      (m = e));
  }
  let h = d || f instanceof xn,
    g;
  n[7] === d ? (g = n[8]) : ((g = d ? (0, $.jsx)(t, {}) : void 0), (n[7] = d), (n[8] = g));
  let _;
  n[9] !== i || n[10] !== o || n[11] !== c || n[12] !== p || n[13] !== l || n[14] !== s || n[15] !== a
    ? ((_ = (e) => {
        e.preventDefault();
        let t = s.get(Cn, { accountId: i, userId: a, configId: o.id });
        t.isPending ||
          t.error instanceof xn ||
          p(o)
            .then((e) => {
              l(e, Et(), { state: { openEnvironmentSetup: !0 } });
            })
            .catch((e) => {
              let t;
              ((t =
                e instanceof xn
                  ? c.formatMessage({
                      id: `cloudEnvironments.edit.unconfirmed`,
                      defaultMessage: `Couldn’t confirm whether the editing chat was created. Check your chat list`,
                      description: `An editing draft may have been created despite a lost response; Edit stays disabled to prevent duplicate chats`,
                    })
                  : e instanceof Sn
                    ? c.formatMessage({
                        id: `cloudEnvironments.edit.notFound`,
                        defaultMessage: `The environment or a required resource is no longer available. Refresh the environment list and try again`,
                        description: `Error when starting an environment editing chat returns resource not found; the environment or a dependency may have been deleted or become inaccessible`,
                      })
                    : c.formatMessage({
                        id: `cloudEnvironments.edit.failed`,
                        defaultMessage: `Couldn’t start editing environment`,
                        description: `Error when creating a separate environment editing draft and chat fails`,
                      })),
                s.get(de).danger(t, { errorAnalytics: { toastId: `cloudEnvironments.createDraft` } }));
            });
      }),
      (n[9] = i),
      (n[10] = o),
      (n[11] = c),
      (n[12] = p),
      (n[13] = l),
      (n[14] = s),
      (n[15] = a),
      (n[16] = _))
    : (_ = n[16]);
  let v;
  return (
    n[17] !== m || n[18] !== h || n[19] !== g || n[20] !== _
      ? ((v = (0, $.jsx)(pe.Item, { disabled: h, leftIcon: g, leftIconAsset: H, onSelect: _, children: m })),
        (n[17] = m),
        (n[18] = h),
        (n[19] = g),
        (n[20] = _),
        (n[21] = v))
      : (v = n[21]),
    v
  );
}
var Jn, Yn, $, Xn;
function Zn() {
  return (Zn = e(() => {
    ((Jn = C()),
      v(),
      ge(),
      I(),
      ae(),
      F(),
      (Yn = s()),
      M(),
      b(),
      Lt(),
      Ge(),
      Ae(),
      P(),
      R(),
      x(),
      ut(),
      o(),
      k(),
      Ue(),
      z(),
      j(),
      fe(),
      L(),
      i(),
      _t(),
      Bt(),
      be(),
      re(),
      ze(),
      Mt(),
      dt(),
      bn(),
      wn(),
      Ft(),
      Rt(),
      Zt(),
      Ve(),
      Qt(),
      Dn(),
      Gt(),
      Bn(),
      Yt(),
      Xt(),
      ($ = h()),
      U(),
      (Xn = l(
        async () =>
          (
            await S(
              async () => {
                let { PersonalVaultSettings: e } = await import(`./settings-35184833a913.js`);
                return { PersonalVaultSettings: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
              import.meta.url,
            )
          ).PersonalVaultSettings,
        { fallback: (0, $.jsx)(Hn, {}), errorFallback: (0, $.jsx)(Hn, { failed: !0 }) },
      )));
  }))();
}
Zn();
export { Vn as CodexCloudSettings };
//# sourceMappingURL=settings-652a52c011da.js.map
