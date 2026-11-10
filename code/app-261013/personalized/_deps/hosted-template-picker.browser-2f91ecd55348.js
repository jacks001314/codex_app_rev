import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CM as t,
  Cot as n,
  DF as r,
  Iot as i,
  Ixt as ee,
  Lot as a,
  PF as o,
  Pxt as s,
  TM as c,
  VDt as te,
  Vxt as l,
  Xot as u,
  Yot as d,
  jDt as f,
  jF as p,
  kF as m,
  vzt as h,
  wF as g,
  wot as _,
  xMt as v,
  yzt as y,
  zxt as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bcr as x,
  CBt as S,
  DAn as C,
  FAn as w,
  FAt as T,
  Ha as E,
  IBt as D,
  Icr as O,
  Jcr as ne,
  Jlr as re,
  K6t as ie,
  LBt as k,
  O0n as ae,
  PAt as A,
  Ra as oe,
  Srn as j,
  X6t as se,
  alr as M,
  bBt as N,
  brn as ce,
  cv as le,
  d8t as ue,
  dBt as de,
  dkn as fe,
  do as pe,
  fo as P,
  lv as F,
  mBt as I,
  po as L,
  qlr as R,
  sCr as z,
  tDn as B,
  u8t as me,
  uBt as V,
  uDn as H,
  ukn as U,
  uo as he,
  uv as W,
  vBt as G,
  wBt as ge,
  yCr as K,
  za as _e,
} from "./app-initial-5851df3f6cb1.js";
import { i as ve, n as ye, r as be } from "./hosted-template-catalog-e317c72cbbc5.js";
import { n as q, t as J } from "./template-browser-view-30de1e3e5b40.js";
function Y(e) {
  let t = (0, Te.c)(14),
    {
      skillData: r,
      hostId: i,
      categories: o,
      enabled: s,
      onPrompt: d,
      onUseTemplate: f,
      onCreate: p,
      onClose: h,
      children: _,
    } = e,
    v = ee(n),
    y = te(),
    S = l(r.skillsIdentity$),
    w = l(r.skillsAccess$),
    T = l(r.skillSafetyConfig$),
    E;
  t[0] === i ? (E = t[1]) : ((E = { hostId: i }), (t[0] = i), (t[1] = E));
  let D = re(E),
    O = s && D,
    k;
  t[2] !== i || t[3] !== O
    ? ((k = { hostId: i, roots: void 0, enabled: O }), (t[2] = i), (t[3] = O), (t[4] = k))
    : (k = t[4]);
  let { data: A, isLoading: j, isError: se, refetch: M } = x(k),
    N;
  t[5] === s ? (N = t[6]) : ((N = { enabled: s }), (t[5] = s), (t[6] = N));
  let { data: ue, isLoading: de, isError: P, refetch: F } = b(r.skillsCollection$, `installed`, N),
    I = s && D,
    R;
  t[7] === I ? (R = t[8]) : ((R = { enabled: I }), (t[7] = I), (t[8] = R));
  let { data: z } = l(C, R),
    B = Object.entries(me(ie(z, A)) ?? {}).find(we),
    V = new Map(),
    H = new Map(),
    U = [];
  if (w === !0)
    for (let e of ue ?? []) {
      let t = ye(e);
      t &&
        e.enabled &&
        e.permissions?.can_read !== !1 &&
        r.isSkillAvailableOnSurface(e, `tpp`) &&
        r.getSkillSafetyStatus(e, T) == null &&
        (V.set(e.id, e),
        U.push({
          enabled: !0,
          personal: !0,
          template: {
            id: e.id,
            name: r.getSkillName(e),
            type: t,
            description: e.description,
            creatorName: e.creator_name ?? void 0,
          },
        }));
    }
  let W = [...V.values()].filter(Ce),
    { data: G } = u({
      queryKey: [`hosted-template-previews`, S?.accountId, S?.userId, W.map(Se)],
      enabled: s && w === !0 && S != null && W.length > 0,
      staleTime: 3e5,
      queryFn: async (e) => {
        let { signal: t } = e;
        if (S == null) return new Map();
        let n = await Promise.all(
          W.map(async (e) => {
            try {
              let { bytes: n } = await r.downloadSkillFile(S.accountId, e, `assets/preview.png`, t);
              return [e.id, await ae(new Blob([n], { type: `image/png` }))];
            } catch (e) {
              let n = e;
              if (t.aborted) throw n;
              return null;
            }
          }),
        );
        return new Map(n.filter(xe));
      },
    });
  for (let e of U) {
    let t = G?.get(e.template.id);
    t && (e.template.thumbnail = { uri: t, alt: `` });
  }
  if (D)
    for (let e of be(A ?? [])) {
      H.set(e.skill.plugin_release_skill_id, e);
      let t = e.skill.interface?.icon_large_url;
      U.push({
        enabled: !0,
        personal: !1,
        template: {
          id: e.skill.plugin_release_skill_id,
          name: e.skill.interface?.display_name || e.skill.name,
          type: e.type,
          description: e.skill.description,
          thumbnail: t ? { uri: t, alt: `` } : void 0,
        },
      });
    }
  let ge = o.map((e) => {
      let t;
      return (
        (t =
          (w === !0 && P) || (D && se)
            ? {
                status: `error`,
                message: y.formatMessage({
                  id: `home.artifactTemplates.loadError`,
                  defaultMessage: `Unable to load templates`,
                  description: `Template catalog loading failure`,
                }),
              }
            : S == null || w == null || (w === !0 && de) || (D && j)
              ? { status: `loading` }
              : { status: `ready`, data: m(U, e) }),
        { id: e, label: y.formatMessage(he[e]), templateTypes: g(e), templates: t }
      );
    }),
    K = async (e) => {
      S != null && v.get(r.skillsIdentity$) === S && f(e, ce(e.id, S), V.has(e.id));
    },
    { mutateAsync: ve, isPending: q } = a({
      mutationFn: async (e) => {
        if (S == null || v.get(r.skillsIdentity$) !== S) return;
        let t = V.get(e.id);
        if (t) await r.setSkillInstalled(v, t, !1);
        else {
          let t = H.get(e.id);
          if (!t) return;
          (await fe({ pluginId: t.plugin.id, skillName: t.skill.name, enabled: !1 }),
            await Promise.all([
              v.queryClient.invalidateQueries({ queryKey: ne }),
              v.queryClient.invalidateQueries({ queryKey: [`chatgpt-system-hints`, `plugins`] }),
            ]));
        }
        v.get(r.skillsIdentity$) === S && h?.();
      },
    }),
    J = (e) => {
      let t = V.get(e.id);
      return {
        onEdit:
          S && (t || H.has(e.id))
            ? () => {
                v.get(r.skillsIdentity$) === S &&
                  d(
                    y.formatMessage(
                      t && r.canEditSkill(t, S.userId) ? L.editTemplatePrompt : L.customizeTemplatePrompt,
                      { template: c(e.name, ce(e.id, S)), templateCreator: le(`hosted`) },
                    ),
                  );
              }
            : void 0,
        onDisable: (t && !t.id.startsWith(`system_`)) || H.has(e.id) ? () => ve(e) : void 0,
      };
    },
    Y;
  return (
    t[9] !== w || t[10] !== D || t[11] !== M || t[12] !== F
      ? ((Y = async () => {
          await Promise.all([w === !0 ? F() : void 0, D ? M() : void 0]);
        }),
        (t[9] = w),
        (t[10] = D),
        (t[11] = M),
        (t[12] = F),
        (t[13] = Y))
      : (Y = t[13]),
    _({
      groups: ge,
      onRetry: Y,
      onCreateTemplate: B
        ? (e) => {
            (p?.(B[0]), d(y.formatMessage(pe[e ?? `all`], { templateCreator: le(`hosted`) })));
          }
        : void 0,
      onUseTemplate: K,
      templateActions: J,
      disabled: q,
      detail: (e) => {
        let t = V.get(e.id);
        if (t)
          return (0, X.jsx)(
            oe,
            { template: e, skill: t, skillData: r, onUse: () => K(e), callbacks: J(e), disabled: q },
            e.id,
          );
        let n = H.get(e.id);
        return (0, X.jsx)(
          _e,
          {
            template: e,
            path: null,
            hostId: i,
            remotePluginSkill: n
              ? {
                  remotePluginId: n.plugin.id,
                  skillName: n.skill.name,
                  remoteMarketplaceName: `openai-curated-remote`,
                }
              : null,
            onUse: () => K(e),
            callbacks: J(e),
            disabled: q,
          },
          e.id,
        );
      },
    })
  );
}
function xe(e) {
  return e != null;
}
function Se(e) {
  return [e.id, e.sediment_id, e.check_sum_hash];
}
function Ce(e) {
  return e.files[`assets/preview.png`]?.length > 0;
}
function we(e) {
  let [t] = e;
  return t === F(`hosted`);
}
var Te, X;
function Z() {
  return (Z = e(() => {
    ((Te = h()),
      r(),
      i(),
      d(),
      s(),
      f(),
      ue(),
      w(),
      se(),
      j(),
      t(),
      R(),
      U(),
      O(),
      M(),
      _(),
      W(),
      ve(),
      P(),
      E(),
      (X = v()));
  }))();
}
function Ee(e) {
  let t = (0, Q.c)(3),
    n = l(e.skillData.skillsIdentity$),
    r = `${n?.accountId}:${n?.userId}`,
    i;
  return (
    t[0] !== e || t[1] !== r
      ? ((i = (0, $.jsx)(De, { ...e }, r)), (t[0] = e), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function De(e) {
  let t = (0, Q.c)(31),
    { category: n, visible: r, placement: i, skillData: a } = e,
    o = ee(z),
    s = T(),
    c = te(),
    u = l(H),
    [d, f] = (0, Oe.useState)(!1),
    m;
  t[0] !== s || t[1] !== o
    ? ((m = () => {
        (f(!1), V(o), s.focus());
      }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  t[3] === n ? (g = t[4]) : ((g = [n]), (t[3] = n), (t[4] = g));
  let _ = r || d,
    v;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = () => f(!1)), (t[5] = v)) : (v = t[5]);
  let y;
  t[6] === o ? (y = t[7]) : ((y = (e) => G(o, e)), (t[6] = o), (t[7] = y));
  let b;
  t[8] !== h || t[9] !== s
    ? ((b = (e) => {
        (s.appendPromptText(e), h());
      }),
      (t[8] = h),
      (t[9] = s),
      (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== h || t[12] !== s || t[13] !== c || t[14] !== o
    ? ((x = (e, t, n) => {
        (k(
          s,
          {
            kind: `browser-skill`,
            name: e.name,
            displayName: e.name,
            path: t,
            description: e.description ?? ``,
            iconSmall: ``,
            skillIcon: p(e.type),
          },
          c,
        ),
          N(o, {
            templateOrigin: n
              ? S.CODEX_ARTIFACT_TEMPLATE_ORIGIN_USER_SKILL
              : S.CODEX_ARTIFACT_TEMPLATE_ORIGIN_SYSTEM_SKILL,
            inclusion: { type: `mention`, path: t },
          }),
          h());
      }),
      (t[11] = h),
      (t[12] = s),
      (t[13] = c),
      (t[14] = o),
      (t[15] = x))
    : (x = t[15]);
  let C;
  t[16] !== n || t[17] !== h || t[18] !== d || t[19] !== i || t[20] !== r
    ? ((C = (e) =>
        (0, $.jsx)(J, {
          ...e,
          category: n,
          visible: r,
          placement: i,
          galleryOpen: d,
          setGalleryOpen: f,
          closeBrowser: h,
        })),
      (t[16] = n),
      (t[17] = h),
      (t[18] = d),
      (t[19] = i),
      (t[20] = r),
      (t[21] = C))
    : (C = t[21]);
  let w;
  return (
    t[22] !== u ||
    t[23] !== a ||
    t[24] !== g ||
    t[25] !== _ ||
    t[26] !== y ||
    t[27] !== b ||
    t[28] !== x ||
    t[29] !== C
      ? ((w = (0, $.jsx)(Y, {
          skillData: a,
          hostId: u,
          categories: g,
          enabled: _,
          onClose: v,
          onCreate: y,
          onPrompt: b,
          onUseTemplate: x,
          children: C,
        })),
        (t[22] = u),
        (t[23] = a),
        (t[24] = g),
        (t[25] = _),
        (t[26] = y),
        (t[27] = b),
        (t[28] = x),
        (t[29] = C),
        (t[30] = w))
      : (w = t[30]),
    w
  );
}
var Q, Oe, $;
function ke() {
  return (ke = e(() => {
    ((Q = h()), ge(), o(), s(), (Oe = y()), f(), A(), K(), B(), D(), I(), de(), Z(), q(), ($ = v()));
  }))();
}
ke();
export { Ee as BrowserTemplatePicker };
//# sourceMappingURL=hosted-template-picker.browser-2f91ecd55348.js.map
