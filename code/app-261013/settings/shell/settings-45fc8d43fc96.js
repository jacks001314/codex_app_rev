const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./settings-6a1a812f0cf4.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./settings-loading-row-bf72bf2df25d.js",
      "./entry-type-6eeefc5c8bdc.js",
      "./settings-configs-7488cda7afdb.js",
      "./toolbar-a0209b4d281a.js",
      "./cloud-settings-toolbar-4cc3387176b2.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  $v as r,
  $xt as i,
  AO as a,
  B4 as o,
  CO as s,
  CPt as c,
  Cot as l,
  GE as u,
  IDt as d,
  Iat as f,
  Iot as p,
  Ixt as ee,
  JC as m,
  JSt as h,
  Jbt as g,
  Kat as _,
  Lat as v,
  Lot as y,
  M0 as b,
  Mz as x,
  Nz as S,
  Pxt as C,
  QJ as w,
  Qv as T,
  SPt as E,
  TJ as D,
  TO as O,
  VDt as k,
  Vxt as A,
  WE as j,
  Xot as M,
  Yot as N,
  ZJ as P,
  Zxt as te,
  _O as ne,
  _xt as F,
  cO as re,
  cz as ie,
  eZ as ae,
  fO as I,
  fPt as L,
  gO as R,
  hot as z,
  i3 as oe,
  iw as se,
  j0 as B,
  jDt as V,
  lO as H,
  lot as U,
  mO as ce,
  not as le,
  nst as ue,
  oO as W,
  pPt as de,
  qC as fe,
  qat as G,
  qxt as pe,
  r3 as K,
  rst as me,
  sO as he,
  sz as ge,
  t3 as _e,
  tst as ve,
  tw as ye,
  vO as be,
  vzt as xe,
  wot as q,
  wxt as Se,
  xMt as Ce,
  yzt as we,
  z4 as Te,
  zH as Ee,
  zxt as De,
} from "./app-shared-bbfeca5e5737.js";
import {
  BZ as Oe,
  CQ as ke,
  DPn as Ae,
  FZ as je,
  GMr as J,
  GZ as Me,
  IZ as Ne,
  Jun as Pe,
  LQ as Fe,
  LZ as Ie,
  MRt as Le,
  NRt as Re,
  PZ as ze,
  Q3n as Be,
  QMr as Ve,
  QZ as He,
  RQ as Ue,
  RZ as We,
  SQ as Ge,
  SZ as Ke,
  S_r as qe,
  TPn as Je,
  TQ as Ye,
  VZ as Xe,
  XMr as Y,
  XPr as Ze,
  XZ as Qe,
  YPr as $e,
  _F as et,
  _Q as tt,
  aIr as nt,
  bZ as rt,
  cQ as it,
  dG as at,
  e6n as ot,
  eF as st,
  ean as ct,
  fMr as lt,
  fhr as ut,
  gQ as dt,
  hF as ft,
  hOn as pt,
  hQ as mt,
  hp as ht,
  mOn as gt,
  m_r as _t,
  mhr as vt,
  mp as yt,
  nMr as bt,
  ndn as xt,
  oIr as St,
  omr as Ct,
  pOn as wt,
  phr as Tt,
  qun as Et,
  rMr as Dt,
  smr as Ot,
  tF as kt,
  tNr as At,
  tan as jt,
  uG as Mt,
  uQ as Nt,
  vCt as Pt,
  xQ as Ft,
  xZ as It,
  yCt as Lt,
  yQ as Rt,
  yZ as zt,
} from "./app-initial-5851df3f6cb1.js";
import { n as Bt, t as Vt } from "./settings-loading-row-bf72bf2df25d.js";
import { n as Ht, t as Ut } from "./toolbar-breadcrumb-e1be94112dcb.js";
import { n as Wt, t as Gt } from "./settings-configs-7488cda7afdb.js";
import { r as Kt, t as qt } from "./validation-message-e25ad070fad8.js";
import {
  a as Jt,
  c as Yt,
  i as Xt,
  n as Zt,
  o as Qt,
  r as $t,
  s as en,
  t as tn,
} from "./toolbar-a0209b4d281a.js";
import { n as nn, t as rn } from "./action-button-a78c6866b385.js";
import {
  _ as an,
  c as on,
  g as sn,
  h as cn,
  n as ln,
  s as un,
  t as dn,
} from "./configuration-fields-a9646993ec29.js";
import { i as fn, n as pn, o as mn, r as hn, t as gn } from "./edit-disabled-reason-fbe8f2a37601.js";
function _n(e) {
  let n = (0, yn.c)(51),
    { accountId: r, userId: i, environment: a, onClose: o } = e,
    s = ee(l),
    c;
  n[0] !== r || n[1] !== a.id || n[2] !== s || n[3] !== i
    ? ((c = async () => {
        let e = _?.environmentConfigs;
        return e == null
          ? { ok: !1, error: `unavailable` }
          : s.get(J) !== r || s.get(Y) !== i
            ? { ok: !1, error: `authentication` }
            : ((await e.delete({ accountId: r, userId: i, configId: a.id, method: `DELETE` }).catch(vn)) ?? {
                ok: !1,
                error: `unavailable`,
              });
      }),
      (n[0] = r),
      (n[1] = a.id),
      (n[2] = s),
      (n[3] = i),
      (n[4] = c))
    : (c = n[4]);
  let u;
  n[5] !== r || n[6] !== a.id || n[7] !== o || n[8] !== s || n[9] !== i
    ? ((u = async (e) => {
        if (
          e.ok &&
          s.get(J) === r &&
          s.get(Y) === i &&
          (await Promise.all([
            s.query.cancel(Wt),
            s.queryClient.cancelQueries({ queryKey: [`cloud-v2-saved-configs-by-id`, r, i] }),
            s.queryClient.cancelQueries({ queryKey: [`cloud-v2-remembered-config`, r, i] }),
          ]),
          s.get(J) === r && s.get(Y) === i)
        ) {
          (s.get(xt, s.get(qe))?.id === a.id && Et(s, s.get(qe)),
            s.queryClient.removeQueries({ queryKey: [`cloud-v2-environment-config`, r, i, a.id] }),
            s.query.setData(Wt, (e) => e?.filter((e) => e.id !== a.id)));
          for (let e of [
            `cloud-v2-settings-configs`,
            `cloud-v2-saved-configs-by-id`,
            `cloud-v2-remembered-config`,
          ])
            f([e, r, i]);
          (o(),
            await Promise.all([
              s.query.invalidate(Wt),
              s.queryClient.resetQueries({ queryKey: [`cloud-v2-saved-configs-by-id`, r, i] }),
            ]),
            await s.queryClient.resetQueries({ queryKey: [`cloud-v2-remembered-config`, r, i] }));
        }
      }),
      (n[5] = r),
      (n[6] = a.id),
      (n[7] = o),
      (n[8] = s),
      (n[9] = i),
      (n[10] = u))
    : (u = n[10]);
  let p;
  n[11] !== c || n[12] !== u
    ? ((p = { mutationFn: c, onSuccess: u }), (n[11] = c), (n[12] = u), (n[13] = p))
    : (p = n[13]);
  let { data: m, isPending: h, mutate: g } = y(p),
    v = m?.ok === !1,
    b = v && (m.status === 403 || m.status === 404 || m.status === 405),
    x;
  n[14] !== h || n[15] !== o
    ? ((x = (e) => {
        !e && !h && o();
      }),
      (n[14] = h),
      (n[15] = o),
      (n[16] = x))
    : (x = n[16]);
  let S;
  n[17] !== b || n[18] !== h || n[19] !== g
    ? ((S = (e) => {
        (e.preventDefault(), !h && !b && g());
      }),
      (n[17] = b),
      (n[18] = h),
      (n[19] = g),
      (n[20] = S))
    : (S = n[20]);
  let C;
  n[21] === a.name
    ? (C = n[22])
    : ((C = (0, X.jsx)(ne, {
        children: (0, X.jsx)(d, {
          id: `cloudEnvironments.delete.title`,
          defaultMessage: `Delete {environmentName}?`,
          description: `Confirmation title for permanently deleting a saved cloud environment configuration`,
          values: { environmentName: a.name },
        }),
      })),
      (n[21] = a.name),
      (n[22] = C));
  let w;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(R, {
        className: `contents`,
        children: (0, X.jsx)(d, {
          id: `cloudEnvironments.delete.description`,
          defaultMessage: `This removes the saved environment for everyone with access to it. Existing chats and running environments will remain available.`,
          description: `Deleting an ASB saved configuration prevents new chats from using it, including when shared; it does not delete existing chats or running environments`,
        }),
      })),
      (n[23] = w))
    : (w = n[23]);
  let T;
  n[24] === C
    ? (T = n[25])
    : ((T = (0, X.jsx)(H, { children: (0, X.jsx)(re, { title: C, subtitle: w }) })),
      (n[24] = C),
      (n[25] = T));
  let E;
  n[26] !== m || n[27] !== v
    ? ((E = v
        ? (0, X.jsx)(H, {
            spacing: `large`,
            children: (0, X.jsx)(j, {
              Icon: Ee,
              role: `alert`,
              type: `error`,
              variant: `callout`,
              layout: `verticalIcon`,
              content:
                m.status === 403
                  ? (0, X.jsx)(d, {
                      id: `cloudEnvironments.delete.permissionDenied`,
                      defaultMessage: `You don’t have permission to delete this environment`,
                      description: `Error shown when the server denies permission to delete a saved cloud environment`,
                    })
                  : (0, X.jsx)(d, {
                      id: `cloudEnvironments.delete.errorTitle`,
                      defaultMessage: `Couldn’t delete environment`,
                      description: `Error message shown when deleting a saved cloud environment fails`,
                    }),
            }),
          })
        : null),
      (n[26] = m),
      (n[27] = v),
      (n[28] = E))
    : (E = n[28]);
  let D = b ? `primary` : `secondary`,
    O;
  n[29] === b
    ? (O = n[30])
    : ((O = b
        ? (0, X.jsx)(d, {
            id: `cloudEnvironments.delete.close`,
            defaultMessage: `Close`,
            description: `Close the saved environment deletion dialog after a failure that cannot be retried immediately`,
          })
        : (0, X.jsx)(d, {
            id: `cloudEnvironments.delete.cancel`,
            defaultMessage: `Cancel`,
            description: `Cancel deletion of a saved cloud environment`,
          })),
      (n[29] = b),
      (n[30] = O));
  let k;
  n[31] !== h || n[32] !== o || n[33] !== D || n[34] !== O
    ? ((k = (0, X.jsx)(t, { color: D, disabled: h, type: `button`, onClick: o, children: O })),
      (n[31] = h),
      (n[32] = o),
      (n[33] = D),
      (n[34] = O),
      (n[35] = k))
    : (k = n[35]);
  let A;
  n[36] !== b || n[37] !== v || n[38] !== h
    ? ((A = b
        ? null
        : (0, X.jsx)(t, {
            color: `danger`,
            loading: h,
            type: `submit`,
            children: v
              ? (0, X.jsx)(d, {
                  id: `cloudEnvironments.delete.retry`,
                  defaultMessage: `Try again`,
                  description: `Retry deleting a saved cloud environment after a recoverable failure`,
                })
              : (0, X.jsx)(d, {
                  id: `cloudEnvironments.delete.confirm`,
                  defaultMessage: `Delete environment`,
                  description: `Confirm deletion of a saved cloud environment`,
                }),
          })),
      (n[36] = b),
      (n[37] = v),
      (n[38] = h),
      (n[39] = A))
    : (A = n[39]);
  let M;
  n[40] !== k || n[41] !== A
    ? ((M = (0, X.jsx)(H, {
        spacing: `large`,
        children: (0, X.jsxs)(he, { expandSingleButton: !1, children: [k, A] }),
      })),
      (n[40] = k),
      (n[41] = A),
      (n[42] = M))
    : (M = n[42]);
  let N;
  n[43] !== M || n[44] !== S || n[45] !== T || n[46] !== E
    ? ((N = (0, X.jsxs)(W, { as: `form`, onSubmit: S, children: [T, E, M] })),
      (n[43] = M),
      (n[44] = S),
      (n[45] = T),
      (n[46] = E),
      (n[47] = N))
    : (N = n[47]);
  let P;
  return (
    n[48] !== N || n[49] !== x
      ? ((P = (0, X.jsx)(ce, { open: !0, onOpenChange: x, children: N })),
        (n[48] = N),
        (n[49] = x),
        (n[50] = P))
      : (P = n[50]),
    P
  );
}
function vn() {
  return null;
}
var yn, X;
function bn() {
  return (bn = e(() => {
    ((yn = xe()),
      p(),
      C(),
      V(),
      At(),
      u(),
      _e(),
      be(),
      I(),
      D(),
      Pe(),
      v(),
      G(),
      q(),
      _t(),
      Gt(),
      (X = Ce()));
  }))();
}
var xn, Sn, Cn;
function wn() {
  return (wn = e(() => {
    (C(),
      me(),
      Ze(),
      At(),
      lt(),
      Tt(),
      nt(),
      G(),
      q(),
      E(),
      tt(),
      Ot(),
      wt(),
      (xn = class extends Error {}),
      (Sn = class extends Error {}),
      (Cn = pe(l, ({ accountId: e, userId: t, configId: n }, { scope: r }) => ({
        mutationKey: [`create-environment-config-draft`, e, t, n],
        retry: !1,
        mutationFn: async (i) => {
          try {
            var a = le();
            let o = () => {
              if (r.get(Ve).authLoading || r.get(J) !== e || r.get(Y) !== t || !r.get(bt))
                throw Error(`authentication`);
            };
            if ((o(), !Me(i, r.get(Dt)))) throw Error(`permission`);
            let s = _?.environmentConfigs;
            if (s == null) throw Error(`unavailable`);
            let l = $e(r, Ct()),
              u = a.u(
                await s
                  .createDraft({ accountId: e, userId: t, configId: n, method: `POST` })
                  .catch(() => null),
              );
            if (
              u == null ||
              (!u.ok &&
                (u.error === `unavailable` ||
                  u.error === `invalid-response` ||
                  u.error === `authentication` ||
                  (u.status != null && u.status >= 500)))
            )
              throw new xn();
            if ((o(), !u.ok)) throw u.error === `http` && u.status === 404 ? new Sn() : Error(u.error);
            if (u.data.thread_id == null) throw Error(`invalid-response`);
            let d = g(u.data.thread_id),
              f = r.get(pt, [i]);
            return (
              h(r, (r) => {
                (Rt(r, d, {
                  accountId: e,
                  userId: t,
                  configId: n,
                  draftId: u.data.draft_id,
                  environmentId: u.data.environment_id,
                  name: i.name,
                  repositoryNamesById: Object.fromEntries(
                    i.repositories.map(({ repositoryId: e }) => [e, f[e] ?? e]),
                  ),
                }),
                  it(r, d, {
                    name: i.name,
                    repositories: i.repositories.map(({ repositoryId: e }) => f[e] ?? e),
                  }),
                  vt(r, d, ut(r, u.data.environment_id)));
              }),
              l
                .setThreadTitle(
                  d,
                  r
                    .get(St)
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
                  c.warning(`Failed to set environment editing chat title`, {
                    safe: {},
                    sensitive: { error: e },
                  });
                }),
              d
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
    (C(),
      At(),
      lt(),
      q(),
      Gt(),
      (Tn = i(l, ({ get: e, scope: t }) => ({
        queryKey: [`cloud-v2-empty-search-refresh`, e(J), e(Y), `settings`],
        enabled: e(bt),
        staleTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: async () => (await t.query.invalidate(Wt, void 0, { throwOnError: !0 }), null),
      }))),
      (En = te(l, (e, { get: t, scope: n }) => ({
        queryKey: [`cloud-v2-empty-search`, t(J), t(Y), `settings`, e],
        enabled: t(bt),
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
  let n = (0, zn.c)(100),
    { config: r, configuration: i, onCancel: a, onSave: o } = e,
    s = ee(l),
    c = A(Dt),
    u = k(),
    f;
  n[0] === u
    ? (f = n[1])
    : ((f = u.formatMessage({
        id: `restricted.environmentSetup.configuration.name.edit`,
        defaultMessage: `Edit environment name`,
        description: `Accessible label for renaming a simulated cloud environment from its settings panel header`,
      })),
      (n[0] = u),
      (n[1] = f));
  let p = f,
    m = ue(),
    h = A(J),
    g = A(Y),
    [_, v] = (0, Z.useState)(r),
    b;
  n[2] !== c || n[3] !== _ ? ((b = Me(_, c)), (n[2] = c), (n[3] = _), (n[4] = b)) : (b = n[4]);
  let x = !b,
    [S, C] = (0, Z.useState)(null),
    w = ke(S, A(Ge)),
    [T, E] = (0, Z.useState)(null),
    [D, O] = (0, Z.useState)(null),
    [j, M] = (0, Z.useState)(!1),
    [N, P] = (0, Z.useState)(0),
    te;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = { pending: !1, valid: !0 }), (n[5] = te))
    : (te = n[5]);
  let [ne, F] = (0, Z.useState)(te),
    re = (0, Z.useRef)(null),
    ie = (0, Z.useRef)(null),
    ae = (0, Z.useRef)(null),
    I = (0, Z.useId)(),
    L = (0, Z.useId)(),
    R = _.draft ?? _,
    z = {
      access: _.share_settings === `workspace` ? `organization` : `private`,
      name: _.name,
      networkDomains: R.network_policy.type === `restricted` ? R.network_policy.egress_rules.map(Rn) : void 0,
      networkPreset: dt(R.network_policy),
      networkEnabled: R.network_policy.type === `unrestricted` || R.network_policy.type === `restricted`,
      phase: `collecting_input`,
      repositories: R.repositories.map(Ln),
      secretNames: (R.secrets ?? []).map(In),
      setupScript: R.install_script,
      startSkill: R.start_skill,
      outboundIdentityRequirements: R.outbound_identity_requirements,
      ...w,
    },
    oe = T?.secrets ?? R.secrets?.map(Fn) ?? [],
    se;
  n[6] !== i || n[7] !== _
    ? ((se = () => (O(null), Qe(`Save`, i, _, void 0))), (n[6] = i), (n[7] = _), (n[8] = se))
    : (se = n[8]);
  let B;
  n[9] !== h || n[10] !== i.configId || n[11] !== m || n[12] !== s || n[13] !== g
    ? ((B = async (e, t, n) => {
        if (
          (n != null && O({ ...n, observedAt: new Date().toISOString() }),
          e instanceof Error && e.message === `conflict`)
        ) {
          await m.invalidateQueries({ queryKey: [`cloud-v2-environment-config`, h, g, i.configId] });
          let e = m.getQueryData([`cloud-v2-environment-config`, h, g, i.configId]);
          e != null && s.get(J) === h && s.get(Y) === g && v(e);
        }
      }),
      (n[9] = h),
      (n[10] = i.configId),
      (n[11] = m),
      (n[12] = s),
      (n[13] = g),
      (n[14] = B))
    : (B = n[14]);
  let V;
  n[15] !== h ||
  n[16] !== i.accountId ||
  n[17] !== i.configId ||
  n[18] !== o ||
  n[19] !== m ||
  n[20] !== s ||
  n[21] !== g
    ? ((V = (e) => {
        if (s.get(J) !== i.accountId || s.get(Y) !== g) return;
        let t = s.get(Nt)?.[i.configId],
          n = s.get(mt, t ?? null);
        (t != null && n != null && Rt(s, t, { ...n, name: e.name }),
          m.setQueryData([`cloud-v2-environment-config`, h, g, i.configId], e),
          o(e));
      }),
      (n[15] = h),
      (n[16] = i.accountId),
      (n[17] = i.configId),
      (n[18] = o),
      (n[19] = m),
      (n[20] = s),
      (n[21] = g),
      (n[22] = V))
    : (V = n[22]);
  let {
      error: H,
      isPending: U,
      mutate: ce,
      reset: le,
    } = y({
      onMutate: se,
      mutationFn: async () => {
        if (x) throw Error(`permission`);
        if (s.get(J) !== i.accountId || s.get(Y) !== i.userId) throw Error(`authentication`);
        let e = ne.pending ? await re.current?.save() : _;
        if (e == null) throw Error(`unavailable`);
        return w == null
          ? e
          : rt(s, { configuration: i, config: e, changes: w }, T, (e, t) => {
              (v(e), E(t));
            });
      },
      onError: B,
      onSuccess: V,
    }),
    W;
  n[23] !== c || n[24] !== _ ? ((W = gn(_, c)), (n[23] = c), (n[24] = _), (n[25] = W)) : (W = n[25]);
  let de = W,
    fe;
  n[26] === de
    ? (fe = n[27])
    : ((fe = de == null ? null : (0, Q.jsx)(hn, { reason: de })), (n[26] = de), (n[27] = fe));
  let G = fe,
    pe;
  n[28] !== H || n[29] !== T || n[30] !== le
    ? ((pe = (e) => {
        ze(H, T, e === void 0 ? T : e) && le();
      }),
      (n[28] = H),
      (n[29] = T),
      (n[30] = le),
      (n[31] = pe))
    : (pe = n[31]);
  let K = pe,
    me =
      !x &&
      !U &&
      (w != null || ne.pending) &&
      ne.valid &&
      (w?.environmentVariableNames === void 0 || !Fe(_, T)?.some(Pn)),
    he = Ke(z, oe, w?.secretNames != null, !1, {
      validateConnections: w?.outboundIdentityRequirements != null,
      validateNetwork: w?.networkEnabled != null || w?.networkPreset != null || w?.networkDomains != null,
    }),
    ge = h === i.accountId && g === i.userId ? Ne(H) : [],
    _e = [
      ...(!U && (N > 0 || ge.length > 0) ? he : []),
      ...ge.filter((e) => !he.some((t) => t.field === e.field && t.code === e.code)),
    ],
    ve = _e.find(Nn),
    ye,
    be;
  (n[32] !== U || n[33] !== N
    ? ((ye = () => {
        N > 0 &&
          !U &&
          (ae.current?.querySelector(`[data-environment-invalid='true']`) ? je(ae.current) : je(ie.current));
      }),
      (be = [N, U]),
      (n[32] = U),
      (n[33] = N),
      (n[34] = ye),
      (n[35] = be))
    : ((ye = n[34]), (be = n[35])),
    (0, Z.useLayoutEffect)(ye, be));
  let xe;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, Q.jsx)(st, { slug: `local-environments` })), (n[36] = xe))
    : (xe = n[36]);
  let q;
  n[37] === a
    ? (q = n[38])
    : ((q = [{ id: `environments`, label: xe, onClick: a }]), (n[37] = a), (n[38] = q));
  let Se = z.name ?? _.name,
    Ce;
  n[39] !== q || n[40] !== Se
    ? ((Ce = (0, Q.jsx)(Ut, { ancestors: q, current: Se })), (n[39] = q), (n[40] = Se), (n[41] = Ce))
    : (Ce = n[41]);
  let we =
      ge.length > 0 && H instanceof We
        ? (0, Q.jsx)(`p`, {
            className: `min-w-0 flex-1 text-sm text-secondary`,
            role: `alert`,
            children: (0, Q.jsx)(qt, { name: H.variableName }),
          })
        : (0, Q.jsx)(sn, { issues: _e }),
    Te;
  n[42] !== D || n[43] !== ge.length || n[44] !== U
    ? ((Te = !1), (n[42] = D), (n[43] = ge.length), (n[44] = U), (n[45] = Te))
    : (Te = n[45]);
  let Ee;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, Q.jsx)(d, {
        id: `settings.localEnvironments.catalog.editor.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for exiting the cloud environment editor`,
      })),
      (n[46] = Ee))
    : (Ee = n[46]);
  let De;
  n[47] !== U || n[48] !== a
    ? ((De = (0, Q.jsx)(t, {
        color: `secondary`,
        disabled: U,
        size: `toolbar`,
        type: `button`,
        onClick: a,
        children: Ee,
      })),
      (n[47] = U),
      (n[48] = a),
      (n[49] = De))
    : (De = n[49]);
  let Oe = !me,
    Ae;
  n[50] === U
    ? (Ae = n[51])
    : ((Ae = U
        ? (0, Q.jsx)(d, {
            id: `restricted.environmentSetup.sidePanel.saving`,
            defaultMessage: `Saving…`,
            description: `Button label while changes to a cloud environment configuration are being saved`,
          })
        : (0, Q.jsx)(d, {
            id: `cloudEnvironmentSettings.saveChanges`,
            defaultMessage: `Save changes`,
            description: `Button that saves changes from the cloud environment settings editor`,
          })),
      (n[50] = U),
      (n[51] = Ae));
  let Pe;
  n[52] !== L || n[53] !== G || n[54] !== Oe || n[55] !== Ae
    ? ((Pe = (0, Q.jsx)(rn, {
        color: `primary`,
        disabled: Oe,
        tooltipContent: G,
        size: `toolbar`,
        form: L,
        type: `submit`,
        children: Ae,
      })),
      (n[52] = L),
      (n[53] = G),
      (n[54] = Oe),
      (n[55] = Ae),
      (n[56] = Pe))
    : (Pe = n[56]);
  let Ie;
  n[57] !== we || n[58] !== Te || n[59] !== De || n[60] !== Pe
    ? ((Ie = (0, Q.jsxs)(Q.Fragment, { children: [we, Te, De, Pe] })),
      (n[57] = we),
      (n[58] = Te),
      (n[59] = De),
      (n[60] = Pe),
      (n[61] = Ie))
    : (Ie = n[61]);
  let Le = j
      ? (0, Q.jsx)(Je, {
          "aria-invalid": ve != null,
          "aria-describedby": ve == null ? void 0 : I,
          "data-environment-invalid": ve != null,
          "aria-label": u.formatMessage({
            id: `restricted.environmentSetup.configuration.name`,
            defaultMessage: `Name`,
            description: `Accessible label for renaming an environment from its settings panel header`,
          }),
          autoFocus: !0,
          disabled: x || U,
          maxLength: 128,
          value: z.name ?? ``,
          onBlur: () => M(!z.name?.trim()),
          onChange: (e) => {
            (K(), C({ ...S, name: e.currentTarget.value }));
          },
          onKeyDown: (e) => {
            (e.key === `Enter` || e.key === `Escape`) && (e.preventDefault(), M(!z.name?.trim()));
          },
        })
      : (0, Q.jsx)(`button`, {
          "data-environment-invalid": ve != null,
          "aria-describedby": ve == null ? void 0 : I,
          "aria-label": p,
          className: `cursor-interaction truncate text-lg font-medium text-default select-none`,
          disabled: x || U,
          type: `button`,
          onClick: () => M(!0),
          children: z.name,
        }),
    Re;
  n[62] !== p || n[63] !== G || n[64] !== Le
    ? ((Re = (0, Q.jsx)(un, { className: `min-w-0`, label: p, reason: G, children: Le })),
      (n[62] = p),
      (n[63] = G),
      (n[64] = Le),
      (n[65] = Re))
    : (Re = n[65]);
  let Be;
  n[66] !== I || n[67] !== ve
    ? ((Be = ve == null ? null : (0, Q.jsx)(cn, { id: I, issue: ve })),
      (n[66] = I),
      (n[67] = ve),
      (n[68] = Be))
    : (Be = n[68]);
  let Ve;
  n[69] !== Re || n[70] !== Be
    ? ((Ve = (0, Q.jsxs)(`div`, { ref: ae, className: `flex min-w-0 flex-col gap-1`, children: [Re, Be] })),
      (n[69] = Re),
      (n[70] = Be),
      (n[71] = Ve))
    : (Ve = n[71]);
  let He;
  n[72] === u
    ? (He = n[73])
    : ((He = u.formatMessage({
        id: `restricted.environmentSetup.sidePanel.form`,
        defaultMessage: `Environment configuration`,
        description: `Accessible label for the cloud environment side-panel configuration form`,
      })),
      (n[72] = u),
      (n[73] = He));
  let Ue;
  n[74] !== me || n[75] !== ce || n[76] !== P || n[77] !== he
    ? ((Ue = (e) => {
        (e.preventDefault(), me && (P(Mn), he.length === 0 && ce()));
      }),
      (n[74] = me),
      (n[75] = ce),
      (n[76] = P),
      (n[77] = he),
      (n[78] = Ue))
    : (Ue = n[78]);
  let qe;
  n[79] !== K || n[80] !== F
    ? ((qe = (e, t) => {
        (K(), F({ pending: e, valid: t }));
      }),
      (n[79] = K),
      (n[80] = F),
      (n[81] = qe))
    : (qe = n[81]);
  let Ye;
  n[82] === K
    ? (Ye = n[83])
    : ((Ye = (e) => {
        (K(), C((t) => ({ ...t, ...e })));
      }),
      (n[82] = K),
      (n[83] = Ye));
  let Xe;
  n[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (e) => {
        (v(e), e.draft != null && C(jn));
      }),
      (n[84] = Xe))
    : (Xe = n[84]);
  let Ze;
  n[85] !== _ || n[86] !== T ? ((Ze = Fe(_, T)), (n[85] = _), (n[86] = T), (n[87] = Ze)) : (Ze = n[87]);
  let $e;
  n[88] !== h || n[89] !== T || n[90] !== K || n[91] !== E || n[92] !== g
    ? (($e = (e, t) => {
        let n = {
          currentStep: T?.currentStep ?? 0,
          ...T,
          environmentVariables: e,
          removedEnvironmentVariableNames: [...(T?.removedEnvironmentVariableNames ?? []), ...t],
          environmentVariablesOwner: { accountId: h, userId: g },
        };
        (K(n), E(n), C((t) => ({ ...t, environmentVariableNames: e.map(An) })));
      }),
      (n[88] = h),
      (n[89] = T),
      (n[90] = K),
      (n[91] = E),
      (n[92] = g),
      (n[93] = $e))
    : ($e = n[93]);
  let et;
  return (
    n[94] !== h || n[95] !== T || n[96] !== K || n[97] !== E || n[98] !== g
      ? ((et = (e) => {
          let t = {
            currentStep: T?.currentStep ?? 0,
            ...T,
            secrets: e,
            secretsEditMode: `replace`,
            secretsOwner: { accountId: h, userId: g },
          };
          (K(t), E(t), C((t) => ({ ...t, secretNames: e.flatMap(kn) })));
        }),
        (n[94] = h),
        (n[95] = T),
        (n[96] = K),
        (n[97] = E),
        (n[98] = g),
        (n[99] = et))
      : (et = n[99]),
    (0, Q.jsx)(ft, {
      backSlot: Ce,
      footer: Ie,
      title: Ve,
      children: (0, Q.jsx)(`form`, {
        id: L,
        ref: ie,
        noValidate: !0,
        "aria-label": He,
        className: `flex flex-col gap-6`,
        onSubmit: Ue,
        children: (0, Q.jsx)(`fieldset`, {
          className: `flex min-w-0 flex-col gap-6`,
          disabled: x || U,
          children: (0, Q.jsx)(dn, {
            config: _,
            configuration: i,
            vpnRef: re,
            onVpnPendingChange: qe,
            draft: z,
            isReadOnly: x || U,
            readOnlyTooltip: G,
            issues: _e,
            onDraftChange: Ye,
            onDraftSaved: Xe,
            panelState: T,
            secrets: oe,
            environmentVariables: Ze,
            setEnvironmentVariables: $e,
            serverNetworkPolicy: R.network_policy,
            setSecrets: et,
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
  return Oe(t, n != null && r == null, i === `user_provided`) != null;
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
    ((zn = xe()),
      p(),
      ve(),
      C(),
      (Z = we()),
      V(),
      At(),
      lt(),
      _e(),
      Ae(),
      Ht(),
      q(),
      et(),
      kt(),
      nn(),
      ln(),
      He(),
      mn(),
      on(),
      tt(),
      Ye(),
      Xe(),
      Kt(),
      Ue(),
      Ft(),
      an(),
      Ie(),
      It(),
      zt(),
      fn(),
      pn(),
      (Q = Ce()));
  }))();
}
function Vn() {
  let e = (0, Jn.c)(3),
    t = Se();
  if (!A(bt)) return null;
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
    { failed: n } = e,
    r = n !== void 0 && n,
    i = A(J),
    a = A(Y),
    { authLoading: o } = A(Ve),
    s = !o && i != null && a != null,
    c;
  t[0] === s ? (c = t[1]) : ((c = (0, $.jsx)(tn, { signedIn: s })), (t[0] = s), (t[1] = c));
  let l;
  t[2] === r
    ? (l = t[3])
    : ((l = (0, $.jsx)(fe, {
        children: r
          ? (0, $.jsx)(yt, {
              layout: `settings-row`,
              children: (0, $.jsx)(d, {
                id: `personalVault.moduleLoadError`,
                defaultMessage: `Couldn’t load personal vault. Reload the app to try again.`,
                description: `Error when the personal vault code cannot be downloaded, asking the user to reload the app`,
              }),
            })
          : (0, $.jsx)(Vt, {
              children: (0, $.jsx)(d, {
                id: `personalVault.loading`,
                defaultMessage: `Loading personal vault…`,
                description: `Loading state for personal vault metadata`,
              }),
            }),
      })),
      (t[2] = r),
      (t[3] = l));
  let u;
  return (
    t[4] !== c || t[5] !== l
      ? ((u = (0, $.jsx)(en, { selectedTab: `personal-vault`, stickyControls: c, children: l })),
        (t[4] = c),
        (t[5] = l),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function Un() {
  let e = (0, Jn.c)(53),
    n = ee(l),
    r = k(),
    i = A(J),
    a = A(Y),
    { data: o, isFetching: s, refetch: c, isPending: u, isError: f } = A(Wt),
    p = De(pt, o),
    m = r.formatMessage({
      id: `settings.localEnvironments.catalog.repository.unknown`,
      defaultMessage: `Unknown repository`,
      description: `Neutral label when a saved cloud environment's repository is unavailable or cannot be resolved`,
    }),
    [h, g] = (0, Yn.useState)(null),
    [v, y] = (0, Yn.useState)(null),
    [b, S] = (0, Yn.useState)(``),
    C = o?.map((e) => ({
      config: e,
      repositoryNames: e.repositories.map((e) => {
        let { repositoryId: t } = e;
        return p?.[t] ?? m;
      }),
    })),
    w;
  e[0] === b ? (w = e[1]) : ((w = b.trim().toLocaleLowerCase()), (e[0] = b), (e[1] = w));
  let T = w,
    E = jt(T, 300),
    D = C?.filter((e) => {
      let { config: t, repositoryNames: n } = e;
      return t.name.toLocaleLowerCase().includes(T) || n.some((e) => e.toLocaleLowerCase().includes(T));
    }),
    O = T !== `` && D?.length === 0,
    j = i != null && a != null && O && T === E && !u && !f && !s,
    M;
  e[2] === j ? (M = e[3]) : ((M = { enabled: j }), (e[2] = j), (e[3] = M));
  let { isFetching: N, isError: P, refetch: te } = De(En, T, M),
    ne = f || (O && P);
  if (h?.accountId === i && h.userId === a && i != null && a != null) {
    let t;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = () => g(null)), (e[4] = t)) : (t = e[4]);
    let n;
    return (
      e[5] === c
        ? (n = e[6])
        : ((n = () => {
            (g(null), c());
          }),
          (e[5] = c),
          (e[6] = n)),
      (0, $.jsx)(
        Wn,
        {
          accountId: i,
          environment: h.config,
          repositoryNamesById: p,
          unknownRepositoryName: m,
          userId: a,
          onCancel: t,
          onSave: n,
        },
        `${i}:${a}:${h.config.id}`,
      )
    );
  }
  let F = null;
  if (i == null || a == null) {
    let t;
    (e[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(yt, {
          layout: `settings-row`,
          children: (0, $.jsx)(d, {
            id: `restricted.cloudV2.savedConfigs.signIn`,
            defaultMessage: `Sign in to load saved environments`,
            description: `Prompt when saved environment discovery lacks a signed-in account`,
          }),
        })),
        (e[7] = t))
      : (t = e[7]),
      (F = t));
  } else if ((u || N) && !ne) {
    let t;
    (e[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(Vt, {
          children: (0, $.jsx)(d, {
            id: `restricted.cloudV2.savedConfigs.loading`,
            defaultMessage: `Loading saved environments…`,
            description: `Loading state for saved cloud environments`,
          }),
        })),
        (e[8] = t))
      : (t = e[8]),
      (F = t));
  } else if (ne) {
    let n;
    e[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(d, {
          id: `restricted.cloudV2.savedConfigs.error`,
          defaultMessage: `Couldn’t load saved environments`,
          description: `API failure while loading saved cloud environments, including additional pages`,
        })),
        (e[9] = n))
      : (n = e[9]);
    let r = s || N,
      i;
    e[10] !== P || e[11] !== c || e[12] !== te
      ? ((i = () => {
          P ? te() : c();
        }),
        (e[10] = P),
        (e[11] = c),
        (e[12] = te),
        (e[13] = i))
      : (i = e[13]);
    let a;
    e[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(d, {
          id: `restricted.cloudV2.savedConfigs.retry`,
          defaultMessage: `Retry`,
          description: `Retry a failed saved environment list request`,
        })),
        (e[14] = a))
      : (a = e[14]);
    let o;
    (e[15] !== r || e[16] !== i
      ? ((o = (0, $.jsxs)(yt, {
          layout: `settings-row`,
          children: [
            n,
            (0, $.jsx)(t, { color: `secondary`, disabled: r, size: `compact`, onClick: i, children: a }),
          ],
        })),
        (e[15] = r),
        (e[16] = i),
        (e[17] = o))
      : (o = e[17]),
      (F = o));
  } else if (o?.length === 0) {
    let t;
    (e[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(yt, {
          layout: `settings-row`,
          children: (0, $.jsx)(d, {
            id: `restricted.cloudV2.savedConfigs.empty`,
            defaultMessage: `No saved environments`,
            description: `Empty state after saved environment listing completes successfully`,
          }),
        })),
        (e[18] = t))
      : (t = e[18]),
      (F = t));
  }
  let re;
  e[19] !== i || e[20] !== v || e[21] !== a
    ? ((re =
        v != null && v.accountId === i && v.userId === a
          ? (0, $.jsx)(
              _n,
              { accountId: v.accountId, userId: v.userId, environment: v.config, onClose: () => y(null) },
              `${v.accountId}:${v.userId}:${v.config.id}`,
            )
          : null),
      (e[19] = i),
      (e[20] = v),
      (e[21] = a),
      (e[22] = re))
    : (re = e[22]);
  let ie = en,
    I;
  e[23] === r
    ? (I = e[24])
    : ((I = r.formatMessage({
        id: `settings.localEnvironments.catalog.search.label`,
        defaultMessage: `Search environments`,
        description: `Accessible label for searching the environments catalog`,
      })),
      (e[23] = r),
      (e[24] = I));
  let L;
  e[25] === r
    ? (L = e[26])
    : ((L = r.formatMessage({
        id: `settings.localEnvironments.catalog.search.placeholder`,
        defaultMessage: `Search`,
        description: `Placeholder for searching the environments catalog`,
      })),
      (e[25] = r),
      (e[26] = L));
  let R;
  e[27] !== b || e[28] !== I || e[29] !== L
    ? ((R = {
        id: `environments-search`,
        label: I,
        maxLength: 128,
        onSearchQueryChange: S,
        placeholder: L,
        searchQuery: b,
      }),
      (e[27] = b),
      (e[28] = I),
      (e[29] = L),
      (e[30] = R))
    : (R = e[30]);
  let z;
  e[31] === n ? (z = e[32]) : ((z = () => at(n)), (e[31] = n), (e[32] = z));
  let oe, se;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, $.jsx)(x, { "aria-hidden": !1, asset: ae })),
      (se = (0, $.jsx)(d, {
        id: `settings.codexCloud.create`,
        defaultMessage: `Create environment`,
        description: `Button label for creating a cloud environment`,
      })),
      (e[33] = oe),
      (e[34] = se))
    : ((oe = e[33]), (se = e[34]));
  let B;
  e[35] === z
    ? (B = e[36])
    : ((B = (0, $.jsxs)(t, {
        className: `w-full justify-center @md:w-auto`,
        color: `primary`,
        size: `toolbar`,
        onClick: z,
        children: [oe, se],
      })),
      (e[35] = z),
      (e[36] = B));
  let V;
  e[37] !== B || e[38] !== R
    ? ((V = (0, $.jsx)($t, { selectedTab: `environments`, search: R, children: B })),
      (e[37] = B),
      (e[38] = R),
      (e[39] = V))
    : (V = e[39]);
  let H = fe,
    U =
      D != null && D.length > 0
        ? (0, $.jsx)(ye, {
            label: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-6 text-xs font-normal text-secondary select-none`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `min-w-0 flex-1`,
                  children: (0, $.jsx)(d, {
                    id: `cloudEnvironments.columns.environment`,
                    defaultMessage: `Environments`,
                    description: `Column heading for the saved environment name`,
                  }),
                }),
                (0, $.jsx)(`span`, {
                  className: `hidden w-32 shrink-0 @lg/settings-row:block`,
                  children: (0, $.jsx)(d, {
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
    ce =
      D?.length === 0 && T !== `` && !u && !N && !ne
        ? (0, $.jsx)(yt, {
            layout: `settings-row`,
            children: (0, $.jsx)(d, {
              id: `settings.localEnvironments.catalog.empty`,
              defaultMessage: `No matching environments`,
              description: `Empty state when no environments match a search`,
            }),
          })
        : null,
    le = D?.map((e) => {
      let { config: t } = e;
      return (0, $.jsx)(
        Gn,
        {
          accountId: i,
          userId: a,
          environment: t,
          unknownRepositoryName: m,
          onView: i == null || a == null ? void 0 : () => g({ accountId: i, userId: a, config: t }),
          onDelete:
            _?.environmentConfigs == null || i == null || a == null
              ? void 0
              : () => y({ accountId: i, userId: a, config: t }),
        },
        t.id,
      );
    }),
    ue;
  e[40] !== H || e[41] !== F || e[42] !== U || e[43] !== ce || e[44] !== le
    ? ((ue = (0, $.jsxs)(H, { children: [U, ce, le, F] })),
      (e[40] = H),
      (e[41] = F),
      (e[42] = U),
      (e[43] = ce),
      (e[44] = le),
      (e[45] = ue))
    : (ue = e[45]);
  let W;
  e[46] !== ie || e[47] !== V || e[48] !== ue
    ? ((W = (0, $.jsx)(ie, { selectedTab: `environments`, stickyControls: V, children: ue })),
      (e[46] = ie),
      (e[47] = V),
      (e[48] = ue),
      (e[49] = W))
    : (W = e[49]);
  let de;
  return (
    e[50] !== W || e[51] !== re
      ? ((de = (0, $.jsxs)($.Fragment, { children: [re, W] })), (e[50] = W), (e[51] = re), (e[52] = de))
      : (de = e[52]),
    de
  );
}
function Wn(e) {
  let n = (0, Jn.c)(50),
    {
      accountId: r,
      environment: i,
      repositoryNamesById: a,
      unknownRepositoryName: o,
      userId: s,
      onCancel: c,
      onSave: u,
    } = e,
    f = ee(l),
    p = A(Nt),
    m = _?.environmentConfigs,
    h;
  n[0] !== r || n[1] !== i.id || n[2] !== s
    ? ((h = [`cloud-v2-settings-environment-config`, r, s, i.id]),
      (n[0] = r),
      (n[1] = i.id),
      (n[2] = s),
      (n[3] = h))
    : (h = n[3]);
  let g;
  n[4] !== r || n[5] !== i.id
    ? ((g = async () => {
        if (m == null) throw Error(`Environment configuration is unavailable`);
        let e = await m.request({ accountId: r, configId: i.id, method: `GET` });
        if (!e.ok) throw Error(`Environment configuration could not be loaded`);
        return e.config;
      }),
      (n[4] = r),
      (n[5] = i.id),
      (n[6] = g))
    : (g = n[6]);
  let v;
  n[7] !== h || n[8] !== g
    ? ((v = { queryKey: h, enabled: m != null, retry: !1, staleTime: 0, gcTime: 0, queryFn: g }),
      (n[7] = h),
      (n[8] = g),
      (n[9] = v))
    : (v = n[9]);
  let { data: y, isError: b, refetch: x } = M(v);
  if (y == null) {
    let e;
    n[10] !== b || n[11] !== x
      ? ((e =
          b || m == null
            ? (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(d, {
                    id: `restricted.environmentSetup.sidePanel.loadError`,
                    defaultMessage: `Couldn’t load environment`,
                    description: `Error when the cloud environment configuration cannot be loaded`,
                  }),
                  (0, $.jsx)(t, {
                    color: `secondary`,
                    size: `compact`,
                    onClick: () => void x(),
                    children: (0, $.jsx)(d, {
                      id: `restricted.environmentSetup.sidePanel.retry`,
                      defaultMessage: `Retry`,
                      description: `Button to retry loading a cloud environment configuration`,
                    }),
                  }),
                ],
              })
            : (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(K, { className: `icon-sm` }),
                  (0, $.jsx)(d, {
                    id: `restricted.environmentSetup.sidePanel.loading`,
                    defaultMessage: `Loading environment…`,
                    description: `Status shown while the cloud environment configuration is being loaded`,
                  }),
                ],
              })),
        (n[10] = b),
        (n[11] = x),
        (n[12] = e))
      : (e = n[12]);
    let r;
    n[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(d, {
          id: `settings.localEnvironments.catalog.editor.cancel`,
          defaultMessage: `Cancel`,
          description: `Button label for exiting the cloud environment editor`,
        })),
        (n[13] = r))
      : (r = n[13]);
    let a;
    n[14] === c
      ? (a = n[15])
      : ((a = (0, $.jsx)(t, { color: `secondary`, size: `compact`, onClick: c, children: r })),
        (n[14] = c),
        (n[15] = a));
    let o;
    n[16] !== e || n[17] !== a
      ? ((o = (0, $.jsxs)(yt, { layout: `settings-row`, children: [e, a] })),
        (n[16] = e),
        (n[17] = a),
        (n[18] = o))
      : (o = n[18]);
    let s;
    return (
      n[19] !== i.name || n[20] !== o
        ? ((s = (0, $.jsx)(ft, { title: i.name, children: o })), (n[19] = i.name), (n[20] = o), (n[21] = s))
        : (s = n[21]),
      s
    );
  }
  let S = p?.[i.id] ?? null,
    C,
    w,
    T,
    E,
    D,
    O;
  if (
    n[22] !== r ||
    n[23] !== y ||
    n[24] !== i.id ||
    n[25] !== a ||
    n[26] !== f ||
    n[27] !== S ||
    n[28] !== o ||
    n[29] !== s
  ) {
    let e = S == null ? null : f.get(mt, S);
    ((T = r),
      (E = s),
      (D = i.id),
      (O = y.name),
      (C = e?.repositoryNamesById),
      (w = Object.fromEntries(
        (y.draft ?? y).repositories.map((t) => {
          let { repository_id: n } = t;
          return [n, a[n] ?? e?.repositoryNamesById[n] ?? o];
        }),
      )),
      (n[22] = r),
      (n[23] = y),
      (n[24] = i.id),
      (n[25] = a),
      (n[26] = f),
      (n[27] = S),
      (n[28] = o),
      (n[29] = s),
      (n[30] = C),
      (n[31] = w),
      (n[32] = T),
      (n[33] = E),
      (n[34] = D),
      (n[35] = O));
  } else ((C = n[30]), (w = n[31]), (T = n[32]), (E = n[33]), (D = n[34]), (O = n[35]));
  let k;
  n[36] !== C || n[37] !== w ? ((k = { ...C, ...w }), (n[36] = C), (n[37] = w), (n[38] = k)) : (k = n[38]);
  let j;
  n[39] !== k || n[40] !== T || n[41] !== E || n[42] !== D || n[43] !== O
    ? ((j = { accountId: T, userId: E, configId: D, name: O, repositoryNamesById: k }),
      (n[39] = k),
      (n[40] = T),
      (n[41] = E),
      (n[42] = D),
      (n[43] = O),
      (n[44] = j))
    : (j = n[44]);
  let N = j,
    P;
  return (
    n[45] !== y || n[46] !== N || n[47] !== c || n[48] !== u
      ? ((P = (0, $.jsx)(On, { config: y, configuration: N, onCancel: c, onSave: u })),
        (n[45] = y),
        (n[46] = N),
        (n[47] = c),
        (n[48] = u),
        (n[49] = P))
      : (P = n[49]),
    P
  );
}
function Gn(e) {
  let t = (0, Jn.c)(44),
    { accountId: n, userId: r, environment: i, unknownRepositoryName: a, onView: o, onDelete: c } = e,
    l = A(Dt),
    u;
  t[0] !== l || t[1] !== i ? ((u = Me(i, l)), (t[0] = l), (t[1] = i), (t[2] = u)) : (u = t[2]);
  let f = u,
    p = k(),
    ee = i.versionRevision === 1,
    m;
  if (i.shareSettings === `private`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `cloudEnvironments.sharing.private`,
          defaultMessage: `Private`,
          description: `A saved environment that only its owner can access`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (m = e));
  } else if (i.isOwner == null) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `cloudEnvironments.sharing.shared`,
          defaultMessage: `Shared`,
          description: `A workspace-shared environment whose ownership information is unavailable`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (m = e));
  } else if (i.isOwner) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `cloudEnvironments.sharing.byYou`,
          defaultMessage: `Shared by you`,
          description: `A saved environment owned by the current user and shared with their workspace`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (m = e));
  } else {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `cloudEnvironments.sharing.withYou`,
          defaultMessage: `Shared with you`,
          description: `A saved environment owned by someone else and shared with the current user's workspace`,
        })),
        (t[6] = e))
      : (e = t[6]),
      (m = e));
  }
  let h;
  t[7] !== n ||
  t[8] !== f ||
  t[9] !== l?.rbacEnabled ||
  t[10] !== i ||
  t[11] !== p ||
  t[12] !== c ||
  t[13] !== o ||
  t[14] !== r
    ? ((h =
        c == null
          ? null
          : (0, $.jsxs)(s, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, $.jsx)(T, {
                label: p.formatMessage(
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
                f && n != null && r != null
                  ? (0, $.jsx)(qn, { accountId: n, userId: r, environment: i })
                  : null,
                !f && o != null
                  ? (0, $.jsx)(O.Item, {
                      leftIconAsset: B,
                      onSelect: o,
                      children: (0, $.jsx)(d, {
                        id: `settings.localEnvironments.catalog.view`,
                        defaultMessage: `View`,
                        description: `Menu action to inspect a saved cloud environment when the user cannot edit it`,
                      }),
                    })
                  : null,
                c == null
                  ? null
                  : (0, $.jsx)(O.Item, {
                      disabled: l?.rbacEnabled === !1 ? i.isOwner === !1 : !f,
                      leftIconAsset: w,
                      onSelect: c,
                      children: (0, $.jsx)(d, {
                        id: `cloudEnvironments.delete.action`,
                        defaultMessage: `Delete environment`,
                        description: `Menu action to delete a saved cloud environment configuration`,
                      }),
                    }),
              ],
            })),
      (t[7] = n),
      (t[8] = f),
      (t[9] = l?.rbacEnabled),
      (t[10] = i),
      (t[11] = p),
      (t[12] = c),
      (t[13] = o),
      (t[14] = r),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] === i.name
    ? (g = t[17])
    : ((g = (0, $.jsx)(`span`, { className: `truncate`, children: i.name })), (t[16] = i.name), (t[17] = g));
  let _;
  t[18] === ee
    ? (_ = t[19])
    : ((_ = ee
        ? (0, $.jsx)(ge, {
            className: `shrink-0 select-none`,
            triggerAsChild: !1,
            tooltipContent: (0, $.jsx)(d, {
              id: `settings.localEnvironments.catalog.unpublished.description`,
              defaultMessage: `Publish to make available`,
              description: `Tooltip explaining why an unpublished cloud environment is hidden from the environment picker`,
            }),
            children: (0, $.jsx)(Le, {
              variant: `outline`,
              children: (0, $.jsx)(d, {
                id: `settings.localEnvironments.catalog.unpublished`,
                defaultMessage: `Unpublished`,
                description: `Badge beside the name of a cloud environment that has never been published`,
              }),
            }),
          })
        : null),
      (t[18] = ee),
      (t[19] = _));
  let v;
  t[20] !== g || t[21] !== _
    ? ((v = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1`,
        children: [g, _],
      })),
      (t[20] = g),
      (t[21] = _),
      (t[22] = v))
    : (v = t[22]);
  let y;
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
      (y = i.repositories.map(e)),
      (t[23] = i.repositories),
      (t[24] = a),
      (t[25] = y));
  } else y = t[25];
  let b = i.repositories.length - 1,
    x;
  t[28] === b
    ? (x = t[29])
    : ((x = (0, $.jsx)(d, {
        id: `cloudEnvironments.repositories.moreRepos`,
        defaultMessage: `+{count, plural, one {# more repo} other {# more repos}}`,
        description: `Number of additional repositories in a saved environment; hover to see the full list`,
        values: { count: b },
      })),
      (t[28] = b),
      (t[29] = x));
  let S;
  t[30] !== y || t[31] !== x
    ? ((S = (0, $.jsx)(Jt, { items: y, moreLabel: x })), (t[30] = y), (t[31] = x), (t[32] = S))
    : (S = t[32]);
  let C;
  t[33] !== v || t[34] !== S
    ? ((C = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [v, S] })),
      (t[33] = v),
      (t[34] = S),
      (t[35] = C))
    : (C = t[35]);
  let E;
  t[36] === m
    ? (E = t[37])
    : ((E = (0, $.jsx)(`span`, {
        className: `text-sm font-normal text-secondary @lg/settings-row:w-32 @lg/settings-row:shrink-0`,
        children: m,
      })),
      (t[36] = m),
      (t[37] = E));
  let D;
  t[38] !== C || t[39] !== E
    ? ((D = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-1 @lg/settings-row:flex-row @lg/settings-row:items-center @lg/settings-row:gap-6`,
        children: [C, E],
      })),
      (t[38] = C),
      (t[39] = E),
      (t[40] = D))
    : (D = t[40]);
  let j;
  return (
    t[41] !== D || t[42] !== h
      ? ((j = (0, $.jsx)(ye, { controlSizing: `content`, control: h, label: D })),
        (t[41] = D),
        (t[42] = h),
        (t[43] = j))
      : (j = t[43]),
    j
  );
}
function Kn(e) {
  let t = (0, Jn.c)(4),
    { repositoryId: n, unknownRepositoryName: r } = e,
    { data: i, isPending: a } = De(gt, n);
  if (a) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Be, { className: `w-32 max-w-full`, as: `span`, size: `sm` })), (t[0] = e))
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
                children: (0, $.jsx)(d, {
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
  let t = (0, Jn.c)(22),
    { accountId: n, userId: r, environment: i } = e,
    a = ee(l),
    o = k(),
    s = Lt(),
    c;
  t[0] !== n || t[1] !== i.id || t[2] !== r
    ? ((c = { accountId: n, userId: r, configId: i.id }), (t[0] = n), (t[1] = i.id), (t[2] = r), (t[3] = c))
    : (c = t[3]);
  let { isPending: u, error: f, mutateAsync: p } = De(Cn, c),
    m;
  if (u) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `cloudEnvironments.edit.opening`,
          defaultMessage: `Creating draft…`,
          description: `Loading label in the environment action menu while creating a draft and opening its editing chat`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (m = e));
  } else if (i.versionRevision === 1) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `settings.localEnvironments.catalog.resumeSetup`,
          defaultMessage: `Continue setup`,
          description: `Menu item that opens a setup draft to finish configuring and publish an unpublished cloud environment`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (m = e));
  } else {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `settings.localEnvironments.catalog.continueSetup`,
          defaultMessage: `Edit`,
          description: `Menu item that creates a separate draft and opens its environment editing chat`,
        })),
        (t[6] = e))
      : (e = t[6]),
      (m = e));
  }
  let h = u || f instanceof xn,
    g;
  t[7] === u ? (g = t[8]) : ((g = u ? (0, $.jsx)(K, {}) : void 0), (t[7] = u), (t[8] = g));
  let _;
  t[9] !== n || t[10] !== i || t[11] !== o || t[12] !== p || t[13] !== s || t[14] !== a || t[15] !== r
    ? ((_ = (e) => {
        e.preventDefault();
        let t = a.get(Cn, { accountId: n, userId: r, configId: i.id });
        t.isPending ||
          t.error instanceof xn ||
          p(i)
            .then((e) => {
              s(e, Ct(), { state: { openEnvironmentSetup: !0 } });
            })
            .catch((e) => {
              let t;
              ((t =
                e instanceof xn
                  ? o.formatMessage({
                      id: `cloudEnvironments.edit.unconfirmed`,
                      defaultMessage: `Couldn’t confirm whether the editing chat was created. Check your chat list`,
                      description: `An editing draft may have been created despite a lost response; Edit stays disabled to prevent duplicate chats`,
                    })
                  : e instanceof Sn
                    ? o.formatMessage({
                        id: `cloudEnvironments.edit.notFound`,
                        defaultMessage: `The environment or a required resource is no longer available. Refresh the environment list and try again`,
                        description: `Error when starting an environment editing chat returns resource not found; the environment or a dependency may have been deleted or become inaccessible`,
                      })
                    : o.formatMessage({
                        id: `cloudEnvironments.edit.failed`,
                        defaultMessage: `Couldn’t start editing environment`,
                        description: `Error when creating a separate environment editing draft and chat fails`,
                      })),
                a.get(z).danger(t, { errorAnalytics: { toastId: `cloudEnvironments.createDraft` } }));
            });
      }),
      (t[9] = n),
      (t[10] = i),
      (t[11] = o),
      (t[12] = p),
      (t[13] = s),
      (t[14] = a),
      (t[15] = r),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== m || t[18] !== h || t[19] !== g || t[20] !== _
      ? ((v = (0, $.jsx)(O.Item, { disabled: h, leftIcon: g, leftIconAsset: B, onSelect: _, children: m })),
        (t[17] = m),
        (t[18] = h),
        (t[19] = g),
        (t[20] = _),
        (t[21] = v))
      : (v = t[21]),
    v
  );
}
var Jn, Yn, $, Xn;
function Zn() {
  return (Zn = e(() => {
    ((Jn = xe()),
      b(),
      n(),
      P(),
      N(),
      C(),
      (Yn = we()),
      V(),
      F(),
      At(),
      lt(),
      Re(),
      _e(),
      a(),
      S(),
      ht(),
      Te(),
      r(),
      ot(),
      oe(),
      U(),
      ie(),
      G(),
      q(),
      et(),
      Bt(),
      se(),
      m(),
      ct(),
      Pt(),
      tt(),
      bn(),
      wn(),
      Ot(),
      Mt(),
      Zt(),
      wt(),
      Qt(),
      Dn(),
      Gt(),
      Bn(),
      Yt(),
      Xt(),
      ($ = Ce()),
      de(),
      (Xn = o(
        async () =>
          (
            await L(
              async () => {
                let { PersonalVaultSettings: e } = await import(`./settings-6a1a812f0cf4.js`);
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
//# sourceMappingURL=settings-45fc8d43fc96.js.map
