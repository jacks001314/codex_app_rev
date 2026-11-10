import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CI as r,
  FBt as i,
  LNt as a,
  Mst as o,
  PBt as s,
  Qst as c,
  XOt as l,
  ZSt as u,
  bI as d,
  fN as f,
  gI as p,
  iCt as m,
  jst as h,
  mN as g,
  nCt as _,
  okt as ee,
  pI as v,
  vI as y,
  vst as b,
  yst as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ba as S,
  CDr as C,
  CLt as w,
  FDr as T,
  Fv as E,
  HLt as D,
  Ipr as O,
  Iv as k,
  Jfr as A,
  Lfr as te,
  Lpr as ne,
  Lv as j,
  MMn as re,
  NAn as M,
  NMn as ie,
  OLt as N,
  TLt as P,
  Tfr as ae,
  Uon as oe,
  VLt as se,
  Va as ce,
  Von as le,
  Wa as F,
  YNn as ue,
  ZZt as I,
  _Dt as L,
  a1t as de,
  c6n as fe,
  fo as pe,
  gLt as R,
  hLt as z,
  ho as B,
  kLt as V,
  kfr as me,
  mo as H,
  o1t as U,
  po as he,
  qZt as ge,
  rPn as W,
  vDt as _e,
  wAn as ve,
  yLt as G,
} from "./app-initial-ad16eaadf81f.js";
import { i as ye, n as be, r as xe } from "./hosted-template-catalog-f2a814015bfa.js";
import { n as K, t as q } from "./template-browser-view-a8babdd5e8c6.js";
function J(e) {
  let n = (0, Ee.c)(14),
    {
      skillData: r,
      hostId: i,
      categories: a,
      enabled: s,
      onPrompt: l,
      onUseTemplate: u,
      onCreate: d,
      onClose: f,
      children: p,
    } = e,
    h = t(c),
    b = ee(),
    C = m(r.skillsIdentity$),
    w = m(r.skillsAccess$),
    T = m(r.skillSafetyConfig$),
    D;
  n[0] === i ? (D = n[1]) : ((D = { hostId: i }), (n[0] = i), (n[1] = D));
  let O = ne(D),
    k = s && O,
    A;
  n[2] !== i || n[3] !== k
    ? ((A = { hostId: i, roots: void 0, enabled: k }), (n[2] = i), (n[3] = k), (n[4] = A))
    : (A = n[4]);
  let { data: j, isLoading: re, isError: M, refetch: N } = me(A),
    P;
  n[5] === s ? (P = n[6]) : ((P = { enabled: s }), (n[5] = s), (n[6] = P));
  let { data: ae, isLoading: oe, isError: se, refetch: F } = _(r.skillsCollection$, `installed`, P),
    I = s && O,
    L;
  n[7] === I ? (L = n[8]) : ((L = { enabled: I }), (n[7] = I), (n[8] = L));
  let { data: R } = m(ue, L),
    z = Object.entries(de(ge(R, j)) ?? {}).find(Te),
    V = new Map(),
    H = new Map(),
    U = [];
  if (w === !0)
    for (let e of ae ?? []) {
      let t = be(e);
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
  let W = [...V.values()].filter(we),
    { data: _e } = o({
      queryKey: [`hosted-template-previews`, C?.accountId, C?.userId, W.map(Ce)],
      enabled: s && w === !0 && C != null && W.length > 0,
      staleTime: 3e5,
      queryFn: async (e) => {
        let { signal: t } = e;
        if (C == null) return new Map();
        let n = await Promise.all(
          W.map(async (e) => {
            try {
              let { bytes: n } = await r.downloadSkillFile(C.accountId, e, `assets/preview.png`, t);
              return [e.id, await fe(new Blob([n], { type: `image/png` }))];
            } catch (e) {
              let n = e;
              if (t.aborted) throw n;
              return null;
            }
          }),
        );
        return new Map(n.filter(Se));
      },
    });
  for (let e of U) {
    let t = _e?.get(e.template.id);
    t && (e.template.thumbnail = { uri: t, alt: `` });
  }
  if (O)
    for (let e of xe(j ?? [])) {
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
  let ve = a.map((e) => {
      let t;
      return (
        (t =
          (w === !0 && se) || (O && M)
            ? {
                status: `error`,
                message: b.formatMessage({
                  id: `home.artifactTemplates.loadError`,
                  defaultMessage: `Unable to load templates`,
                  description: `Template catalog loading failure`,
                }),
              }
            : C == null || w == null || (w === !0 && oe) || (O && re)
              ? { status: `loading` }
              : { status: `ready`, data: y(U, e) }),
        { id: e, label: b.formatMessage(pe[e]), templateTypes: v(e), templates: t }
      );
    }),
    G = async (e) => {
      C != null && h.get(r.skillsIdentity$) === C && u(e, le(e.id, C), V.has(e.id));
    },
    { mutateAsync: ye, isPending: K } = x({
      mutationFn: async (e) => {
        if (C == null || h.get(r.skillsIdentity$) !== C) return;
        let t = V.get(e.id);
        if (t) await r.setSkillInstalled(h, t, !1);
        else {
          let t = H.get(e.id);
          if (!t) return;
          (await ie({ pluginId: t.plugin.id, skillName: t.skill.name, enabled: !1 }),
            await Promise.all([
              h.queryClient.invalidateQueries({ queryKey: te }),
              h.queryClient.invalidateQueries({ queryKey: [`chatgpt-system-hints`, `plugins`] }),
            ]));
        }
        h.get(r.skillsIdentity$) === C && f?.();
      },
    }),
    q = (e) => {
      let t = V.get(e.id);
      return {
        onEdit:
          C && (t || H.has(e.id))
            ? () => {
                h.get(r.skillsIdentity$) === C &&
                  l(
                    b.formatMessage(
                      t && r.canEditSkill(t, C.userId) ? B.editTemplatePrompt : B.customizeTemplatePrompt,
                      { template: g(e.name, le(e.id, C)), templateCreator: E(`hosted`) },
                    ),
                  );
              }
            : void 0,
        onDisable: (t && !t.id.startsWith(`system_`)) || H.has(e.id) ? () => ye(e) : void 0,
      };
    },
    J;
  return (
    n[9] !== w || n[10] !== O || n[11] !== N || n[12] !== F
      ? ((J = async () => {
          await Promise.all([w === !0 ? F() : void 0, O ? N() : void 0]);
        }),
        (n[9] = w),
        (n[10] = O),
        (n[11] = N),
        (n[12] = F),
        (n[13] = J))
      : (J = n[13]),
    p({
      groups: ve,
      onRetry: J,
      onCreateTemplate: z
        ? (e) => {
            (d?.(z[0]), l(b.formatMessage(he[e ?? `all`], { templateCreator: E(`hosted`) })));
          }
        : void 0,
      onUseTemplate: G,
      templateActions: q,
      disabled: K,
      detail: (e) => {
        let t = V.get(e.id);
        if (t)
          return (0, Y.jsx)(
            S,
            { template: e, skill: t, skillData: r, onUse: () => G(e), callbacks: q(e), disabled: K },
            e.id,
          );
        let n = H.get(e.id);
        return (0, Y.jsx)(
          ce,
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
            onUse: () => G(e),
            callbacks: q(e),
            disabled: K,
          },
          e.id,
        );
      },
    })
  );
}
function Se(e) {
  return e != null;
}
function Ce(e) {
  return [e.id, e.sediment_id, e.check_sum_hash];
}
function we(e) {
  return e.files[`assets/preview.png`]?.length > 0;
}
function Te(e) {
  let [t] = e;
  return t === k(`hosted`);
}
var Ee, Y;
function X() {
  return (X = e(() => {
    ((Ee = s()),
      p(),
      b(),
      h(),
      u(),
      l(),
      U(),
      W(),
      I(),
      oe(),
      f(),
      O(),
      re(),
      ae(),
      A(),
      n(),
      j(),
      ye(),
      H(),
      F(),
      (Y = a()));
  }))();
}
function De(e) {
  let t = (0, Z.c)(3),
    n = m(e.skillData.skillsIdentity$),
    r = `${n?.accountId}:${n?.userId}`,
    i;
  return (
    t[0] !== e || t[1] !== r
      ? ((i = (0, Q.jsx)(Oe, { ...e }, r)), (t[0] = e), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Oe(e) {
  let n = (0, Z.c)(31),
    { category: r, visible: i, placement: a, skillData: o } = e,
    s = t(C),
    c = _e(),
    l = ee(),
    u = m(M),
    [f, p] = (0, ke.useState)(!1),
    h;
  n[0] !== c || n[1] !== s
    ? ((h = () => {
        (p(!1), z(s), c.focus());
      }),
      (n[0] = c),
      (n[1] = s),
      (n[2] = h))
    : (h = n[2]);
  let g = h,
    _;
  n[3] === r ? (_ = n[4]) : ((_ = [r]), (n[3] = r), (n[4] = _));
  let v = i || f,
    y;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = () => p(!1)), (n[5] = y)) : (y = n[5]);
  let b;
  n[6] === s ? (b = n[7]) : ((b = (e) => w(s, e)), (n[6] = s), (n[7] = b));
  let x;
  n[8] !== g || n[9] !== c
    ? ((x = (e) => {
        (c.appendPromptText(e), g());
      }),
      (n[8] = g),
      (n[9] = c),
      (n[10] = x))
    : (x = n[10]);
  let S;
  n[11] !== g || n[12] !== c || n[13] !== l || n[14] !== s
    ? ((S = (e, t, n) => {
        (D(
          c,
          {
            kind: `browser-skill`,
            name: e.name,
            displayName: e.name,
            path: t,
            description: e.description ?? ``,
            iconSmall: ``,
            skillIcon: d(e.type),
          },
          l,
        ),
          P(s, {
            templateOrigin: n
              ? N.CODEX_ARTIFACT_TEMPLATE_ORIGIN_USER_SKILL
              : N.CODEX_ARTIFACT_TEMPLATE_ORIGIN_SYSTEM_SKILL,
            inclusion: { type: `mention`, path: t },
          }),
          g());
      }),
      (n[11] = g),
      (n[12] = c),
      (n[13] = l),
      (n[14] = s),
      (n[15] = S))
    : (S = n[15]);
  let T;
  n[16] !== r || n[17] !== g || n[18] !== f || n[19] !== a || n[20] !== i
    ? ((T = (e) =>
        (0, Q.jsx)(q, {
          ...e,
          category: r,
          visible: i,
          placement: a,
          galleryOpen: f,
          setGalleryOpen: p,
          closeBrowser: g,
        })),
      (n[16] = r),
      (n[17] = g),
      (n[18] = f),
      (n[19] = a),
      (n[20] = i),
      (n[21] = T))
    : (T = n[21]);
  let E;
  return (
    n[22] !== u ||
    n[23] !== o ||
    n[24] !== _ ||
    n[25] !== v ||
    n[26] !== b ||
    n[27] !== x ||
    n[28] !== S ||
    n[29] !== T
      ? ((E = (0, Q.jsx)(J, {
          skillData: o,
          hostId: u,
          categories: _,
          enabled: v,
          onClose: y,
          onCreate: b,
          onPrompt: x,
          onUseTemplate: S,
          children: T,
        })),
        (n[22] = u),
        (n[23] = o),
        (n[24] = _),
        (n[25] = v),
        (n[26] = b),
        (n[27] = x),
        (n[28] = S),
        (n[29] = T),
        (n[30] = E))
      : (E = n[30]),
    E
  );
}
var Z, ke, Q;
function $() {
  return ($ = e(() => {
    ((Z = s()), V(), r(), u(), (ke = i()), l(), L(), T(), ve(), se(), G(), R(), X(), K(), (Q = a()));
  }))();
}
$();
export { De as BrowserTemplatePicker };
//# sourceMappingURL=hosted-template-picker.browser-70d3bc92a76c.js.map
