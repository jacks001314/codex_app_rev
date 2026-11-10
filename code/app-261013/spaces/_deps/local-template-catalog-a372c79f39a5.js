import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  DF as n,
  FF as r,
  PF as i,
  Pxt as a,
  VDt as o,
  Zxt as s,
  jDt as c,
  kDt as l,
  kF as ee,
  pM as u,
  rrt as d,
  srt as f,
  uM as te,
  vzt as p,
  wF as ne,
  wot as m,
  xMt as h,
  yzt as g,
  zxt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fm as v,
  Ga as y,
  Ha as b,
  Ia as x,
  Jdr as S,
  La as re,
  Pm as C,
  Stn as w,
  Wa as ie,
  Ydr as ae,
  cv as oe,
  dAn as T,
  dFr as se,
  do as ce,
  dv as le,
  fAn as ue,
  fo as E,
  iv as de,
  lv as fe,
  rv as pe,
  uFr as D,
  uo as me,
  uv as O,
  xtn as he,
  za as ge,
} from "./app-initial-5851df3f6cb1.js";
var k;
function A() {
  return (A = e(() => {
    k = `` + new URL(`budget-planner-7fc57dcf2653.xlsx`, import.meta.url).href;
  }))();
}
var j;
function M() {
  return (M = e(() => {
    j = `` + new URL(`content-calendar-f684eeebe28d.xlsx`, import.meta.url).href;
  }))();
}
var N;
function P() {
  return (P = e(() => {
    N = `` + new URL(`design-review-df0c95705aed.pptx`, import.meta.url).href;
  }))();
}
var F;
function I() {
  return (I = e(() => {
    F = `` + new URL(`meeting-notes-217e093e29da.docx`, import.meta.url).href;
  }))();
}
var L;
function R() {
  return (R = e(() => {
    L = `` + new URL(`monthly-business-review-aa25b4112c50.pptx`, import.meta.url).href;
  }))();
}
var z;
function B() {
  return (B = e(() => {
    z = `` + new URL(`budget-planner-ddcc27bcc140.png`, import.meta.url).href;
  }))();
}
var V;
function H() {
  return (H = e(() => {
    V = `` + new URL(`content-calendar-addfb8f880a9.png`, import.meta.url).href;
  }))();
}
var U;
function W() {
  return (W = e(() => {
    U = `` + new URL(`design-review-f9653b2f8191.png`, import.meta.url).href;
  }))();
}
var G;
function K() {
  return (K = e(() => {
    G = `` + new URL(`meeting-notes-7b6594a27c56.png`, import.meta.url).href;
  }))();
}
var q;
function J() {
  return (J = e(() => {
    q = `` + new URL(`monthly-business-review-22cb5f8fa897.png`, import.meta.url).href;
  }))();
}
var Y;
function X() {
  return (X = e(() => {
    Y = `` + new URL(`project-brief-1b2fde67dca7.png`, import.meta.url).href;
  }))();
}
var Z;
function _e() {
  return (_e = e(() => {
    Z = `` + new URL(`project-tracker-6cad71e02486.png`, import.meta.url).href;
  }))();
}
var ve;
function ye() {
  return (ye = e(() => {
    ve = `` + new URL(`report-outline-905623fd6794.png`, import.meta.url).href;
  }))();
}
var be;
function xe() {
  return (xe = e(() => {
    be = `` + new URL(`sales-discovery-85b7f00aa916.png`, import.meta.url).href;
  }))();
}
var Se;
function Ce() {
  return (Ce = e(() => {
    Se = `` + new URL(`project-brief-e08b85749970.docx`, import.meta.url).href;
  }))();
}
var we;
function Te() {
  return (Te = e(() => {
    we = `` + new URL(`project-tracker-12f7a4dcd6be.xlsx`, import.meta.url).href;
  }))();
}
var Ee;
function De() {
  return (De = e(() => {
    Ee = `` + new URL(`report-outline-d47cda7d5af6.docx`, import.meta.url).href;
  }))();
}
var Oe;
function ke() {
  return (ke = e(() => {
    Oe = `` + new URL(`sales-discovery-c8f07eacd6f2.pptx`, import.meta.url).href;
  }))();
}
function Ae(e) {
  return je.filter((t) => t.type === e);
}
var je;
function Me() {
  return (Me = e(() => {
    (c(),
      A(),
      M(),
      P(),
      I(),
      R(),
      B(),
      H(),
      W(),
      K(),
      J(),
      X(),
      _e(),
      ye(),
      xe(),
      Ce(),
      Te(),
      De(),
      ke(),
      (je = [
        {
          id: `project-brief`,
          type: `document`,
          name: l({
            id: `home.artifactTemplates.projectBrief`,
            defaultMessage: `Project brief`,
            description: `Title for a document template card`,
          }),
          filename: `project-brief.docx`,
          assetUrl: Se,
          thumbnail: { uri: Y, alt: `` },
        },
        {
          id: `meeting-notes`,
          type: `document`,
          name: l({
            id: `home.artifactTemplates.meetingNotes`,
            defaultMessage: `Meeting notes`,
            description: `Title for a document template card`,
          }),
          filename: `meeting-notes.docx`,
          assetUrl: F,
          thumbnail: { uri: G, alt: `` },
        },
        {
          id: `report-outline`,
          type: `document`,
          name: l({
            id: `home.artifactTemplates.reportOutline`,
            defaultMessage: `Report outline`,
            description: `Title for a document template card`,
          }),
          filename: `report-outline.docx`,
          assetUrl: Ee,
          thumbnail: { uri: ve, alt: `` },
        },
        {
          id: `monthly-business-review`,
          type: `presentation`,
          name: l({
            id: `home.artifactTemplates.monthlyBusinessReview`,
            defaultMessage: `Monthly Business Review`,
            description: `Title for a presentation template card`,
          }),
          filename: `monthly-business-review.pptx`,
          assetUrl: L,
          thumbnail: { uri: q, alt: `` },
        },
        {
          id: `sales-discovery`,
          type: `presentation`,
          name: l({
            id: `home.artifactTemplates.salesDiscovery`,
            defaultMessage: `Sales discovery`,
            description: `Title for a presentation template card`,
          }),
          filename: `sales-discovery.pptx`,
          assetUrl: Oe,
          thumbnail: { uri: be, alt: `` },
        },
        {
          id: `design-review`,
          type: `presentation`,
          name: l({
            id: `home.artifactTemplates.designReview`,
            defaultMessage: `Design review`,
            description: `Title for a presentation template card`,
          }),
          filename: `design-review.pptx`,
          assetUrl: N,
          thumbnail: { uri: U, alt: `` },
        },
        {
          id: `project-tracker`,
          type: `spreadsheet`,
          name: l({
            id: `home.artifactTemplates.projectTracker`,
            defaultMessage: `Project tracker`,
            description: `Title for a spreadsheet template card`,
          }),
          filename: `project-tracker.xlsx`,
          assetUrl: we,
          thumbnail: { uri: Z, alt: `` },
        },
        {
          id: `budget-planner`,
          type: `spreadsheet`,
          name: l({
            id: `home.artifactTemplates.budgetPlanner`,
            defaultMessage: `Budget planner`,
            description: `Title for a spreadsheet template card`,
          }),
          filename: `budget-planner.xlsx`,
          assetUrl: k,
          thumbnail: { uri: z, alt: `` },
        },
        {
          id: `content-calendar`,
          type: `spreadsheet`,
          name: l({
            id: `home.artifactTemplates.contentCalendar`,
            defaultMessage: `Content calendar`,
            description: `Title for a spreadsheet template card`,
          }),
          filename: `content-calendar.xlsx`,
          assetUrl: j,
          thumbnail: { uri: V, alt: `` },
        },
      ]));
  }))();
}
function Ne(e) {
  let t = (0, Le.c)(62),
    {
      hostId: n,
      cwd: i,
      categories: a,
      enabled: s,
      onUseSkill: c,
      onUseAsset: l,
      onPrompt: u,
      onCreate: d,
      onClose: f,
      children: p,
    } = e,
    m = ae(n),
    h = o(),
    [g, y] = (0, Re.useState)(null),
    [b] = se(`skills_refresh_nonce`),
    x;
  t[0] === s ? (x = t[1]) : ((x = { enabled: s }), (t[0] = s), (t[1] = x));
  let { skills: S, isLoading: C, isError: w, forceReload: T } = ue(i ?? void 0, n, x),
    E;
  t[2] !== s || t[3] !== S ? ((E = s ? S : []), (t[2] = s), (t[3] = S), (t[4] = E)) : (E = t[4]);
  let { data: D, isLoading: O, isError: k, refetch: A } = v(E, n),
    { isPending: j, mutateAsync: M } = re(T),
    N;
  if (t[5] !== m || t[6] !== S) {
    let e;
    (t[8] === m ? (e = t[9]) : ((e = (e) => de(e) != null && le(e, m)), (t[8] = m), (t[9] = e)),
      (N = new Set(S.filter(e).map(Ie))),
      (t[5] = m),
      (t[6] = S),
      (t[7] = N));
  } else N = t[7];
  let P = N,
    F;
  t[10] === P ? (F = t[11]) : ((F = [...P]), (t[10] = P), (t[11] = F));
  let I;
  t[12] !== n || t[13] !== b || t[14] !== F
    ? ((I = { hostId: n, paths: F, skillsRefreshNonce: b }),
      (t[12] = n),
      (t[13] = b),
      (t[14] = F),
      (t[15] = I))
    : (I = t[15]);
  let { data: L } = _(ze, I),
    R;
  if (
    t[16] !== C ||
    t[17] !== a ||
    t[18] !== p ||
    t[19] !== L ||
    t[20] !== T ||
    t[21] !== n ||
    t[22] !== h ||
    t[23] !== D ||
    t[24] !== k ||
    t[25] !== O ||
    t[26] !== d ||
    t[27] !== u ||
    t[28] !== l ||
    t[29] !== c ||
    t[30] !== P ||
    t[31] !== A ||
    t[32] !== j ||
    t[33] !== S ||
    t[34] !== w
  ) {
    let e = [],
      i = new Map();
    for (let t of S) {
      let a = D?.get(t.path);
      if (!a) continue;
      let o = r(a.galleryKind);
      if (o == null) continue;
      let s = `${n}:${t.path}`,
        { url: c } = he({
          size: `large`,
          iconLarge: t.interface?.iconLarge,
          basePath: t.path,
          renderCustomSvgAsImage: !0,
        });
      (e.push({
        enabled: t.enabled,
        personal: P.has(t.path),
        template: {
          id: s,
          type: o,
          name: te(t),
          description: t.description,
          thumbnail: c ? { uri: c, alt: `` } : void 0,
          createdAt: L?.get(t.path) ?? void 0,
        },
      }),
        i.set(s, t));
    }
    let o = new Map(),
      s = a.map((t) => {
        let n =
            l == null
              ? []
              : Ae(t).map((e) => {
                  let t = `asset:${e.id}`;
                  return (
                    o.set(t, e),
                    { id: t, type: e.type, name: h.formatMessage(e.name), thumbnail: e.thumbnail }
                  );
                }),
          r;
        return (
          (r =
            w || k
              ? {
                  status: `error`,
                  message: h.formatMessage({
                    id: `home.artifactTemplates.loadError`,
                    defaultMessage: `Unable to load templates`,
                    description: `Template catalog loading failure`,
                  }),
                }
              : C || O
                ? { status: `loading` }
                : { status: `ready`, data: ee(e, t) }),
          {
            id: t,
            label: h.formatMessage(me[t]),
            icon: `category-${t}`,
            templateTypes: ne(t),
            templates: r.status === `ready` && r.data.length === 0 ? { status: `ready`, data: n } : r,
          }
        );
      }),
      f;
    t[36] === S ? (f = t[37]) : ((f = S.find(Fe)), (t[36] = S), (t[37] = f));
    let m = f,
      g = async (e) => {
        let t = i.get(e.id);
        if (t) {
          c(t, e);
          return;
        }
        let n = o.get(e.id);
        n && l && (await l(n));
      },
      _;
    t[38] !== T || t[39] !== A
      ? ((_ = async () => {
          (await T(), await A());
        }),
        (t[38] = T),
        (t[39] = A),
        (t[40] = _))
      : (_ = t[40]);
    let v = _,
      b = (e) => {
        let t = i.get(e.id);
        return {
          onEdit:
            t && m
              ? () => {
                  u(pe(t));
                }
              : void 0,
          onDelete: t && P.has(t.path) ? () => y(t) : void 0,
        };
      },
      x;
    (t[41] !== h || t[42] !== d || t[43] !== u || t[44] !== m
      ? ((x = m
          ? (e) => {
              (d?.(fe(`local`)), u(h.formatMessage(ce[e ?? `all`], { templateCreator: oe(`local`) })));
            }
          : void 0),
        (t[41] = h),
        (t[42] = d),
        (t[43] = u),
        (t[44] = m),
        (t[45] = x))
      : (x = t[45]),
      (R = p({
        groups: s,
        onCreateTemplate: x,
        onRetry: v,
        onUseTemplate: g,
        templateActions: b,
        disabled: j,
        detail: (e) =>
          (0, Q.jsx)(
            ge,
            {
              template: e,
              path: i.get(e.id)?.path ?? null,
              hostId: n,
              onUse: () => g(e),
              callbacks: b(e),
              disabled: j,
            },
            e.id,
          ),
      })),
      (t[16] = C),
      (t[17] = a),
      (t[18] = p),
      (t[19] = L),
      (t[20] = T),
      (t[21] = n),
      (t[22] = h),
      (t[23] = D),
      (t[24] = k),
      (t[25] = O),
      (t[26] = d),
      (t[27] = u),
      (t[28] = l),
      (t[29] = c),
      (t[30] = P),
      (t[31] = A),
      (t[32] = j),
      (t[33] = S),
      (t[34] = w),
      (t[35] = R));
  } else R = t[35];
  let z = g != null,
    B;
  t[46] === g ? (B = t[47]) : ((B = g ? te(g) : ``), (t[46] = g), (t[47] = B));
  let V;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => {
        e || y(null);
      }),
      (t[48] = V))
    : (V = t[48]);
  let H;
  t[49] !== n || t[50] !== f || t[51] !== g || t[52] !== M
    ? ((H = () => {
        g &&
          M({ hostId: n, skillPath: g.path }).then((e) => {
            let { success: t } = e;
            t && (y(null), f?.());
          }, Pe);
      }),
      (t[49] = n),
      (t[50] = f),
      (t[51] = g),
      (t[52] = M),
      (t[53] = H))
    : (H = t[53]);
  let U;
  t[54] !== j || t[55] !== H || t[56] !== z || t[57] !== B
    ? ((U = (0, Q.jsx)(ie, { open: z, deleteDisabled: j, title: B, onOpenChange: V, onConfirm: H })),
      (t[54] = j),
      (t[55] = H),
      (t[56] = z),
      (t[57] = B),
      (t[58] = U))
    : (U = t[58]);
  let W;
  return (
    t[59] !== U || t[60] !== R
      ? ((W = (0, Q.jsxs)(Q.Fragment, { children: [R, U] })), (t[59] = U), (t[60] = R), (t[61] = W))
      : (W = t[61]),
    W
  );
}
function Pe() {}
function Fe(e) {
  return e.enabled && (e.name === `template-creator` || e.name.endsWith(`:template-creator`));
}
function Ie(e) {
  return e.path;
}
var Le, Re, Q, ze;
function $() {
  return ($ = e(() => {
    ((Le = p()),
      n(),
      i(),
      a(),
      (Re = g()),
      c(),
      O(),
      E(),
      b(),
      C(),
      x(),
      S(),
      m(),
      D(),
      w(),
      u(),
      T(),
      f(),
      y(),
      Me(),
      (Q = h()),
      (ze = s(t, ({ hostId: e, paths: t, skillsRefreshNonce: n }) => ({
        queryKey: [`artifact-template-skill-creation-times`, e, n, ...t],
        queryFn: async ({ signal: n }) => {
          let r = await Promise.all(
            t.map(async (t) => {
              try {
                let { createdAtMs: r, mtimeMs: i } = await d(`read-file-metadata`, {
                  params: { hostId: e, path: t },
                  signal: n,
                });
                return [t, r != null && r > 0 ? r : (i ?? null)];
              } catch (e) {
                if (n.aborted) throw e;
                return [t, null];
              }
            }),
          );
          return new Map(r);
        },
        enabled: t.length > 0,
        staleTime: 0,
      }))));
  }))();
}
export { $ as n, Ne as t };
//# sourceMappingURL=local-template-catalog-a372c79f39a5.js.map
