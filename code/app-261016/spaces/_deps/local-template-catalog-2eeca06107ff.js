import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $M as t,
  $st as n,
  CI as r,
  FBt as i,
  JOt as a,
  LNt as o,
  PBt as s,
  Qst as c,
  XOt as l,
  ZSt as u,
  gI as d,
  mCt as f,
  nCt as p,
  nN as m,
  okt as h,
  pI as ee,
  vI as te,
  wI as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Aa as g,
  Av as re,
  Fv as ie,
  Ghr as _,
  Hin as ae,
  Iv as oe,
  Ka as v,
  Khr as y,
  Lv as b,
  NNn as x,
  PNn as se,
  Rv as ce,
  Uin as S,
  Va as le,
  Wa as C,
  eh as w,
  fo as ue,
  ja as de,
  jv as fe,
  l_r as T,
  mo as E,
  po as pe,
  qa as D,
  th as me,
  u_r as O,
} from "./app-initial-ad16eaadf81f.js";
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
var he;
function Z() {
  return (Z = e(() => {
    he = `` + new URL(`project-tracker-6cad71e02486.png`, import.meta.url).href;
  }))();
}
var ge;
function _e() {
  return (_e = e(() => {
    ge = `` + new URL(`report-outline-905623fd6794.png`, import.meta.url).href;
  }))();
}
var ve;
function ye() {
  return (ye = e(() => {
    ve = `` + new URL(`sales-discovery-85b7f00aa916.png`, import.meta.url).href;
  }))();
}
var be;
function xe() {
  return (xe = e(() => {
    be = `` + new URL(`project-brief-e08b85749970.docx`, import.meta.url).href;
  }))();
}
var Se;
function Ce() {
  return (Ce = e(() => {
    Se = `` + new URL(`project-tracker-12f7a4dcd6be.xlsx`, import.meta.url).href;
  }))();
}
var we;
function Te() {
  return (Te = e(() => {
    we = `` + new URL(`report-outline-d47cda7d5af6.docx`, import.meta.url).href;
  }))();
}
var Ee;
function De() {
  return (De = e(() => {
    Ee = `` + new URL(`sales-discovery-c8f07eacd6f2.pptx`, import.meta.url).href;
  }))();
}
function Oe(e) {
  return ke.filter((t) => t.type === e);
}
var ke;
function Ae() {
  return (Ae = e(() => {
    (l(),
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
      Z(),
      _e(),
      ye(),
      xe(),
      Ce(),
      Te(),
      De(),
      (ke = [
        {
          id: `project-brief`,
          type: `document`,
          name: a({
            id: `home.artifactTemplates.projectBrief`,
            defaultMessage: `Project brief`,
            description: `Title for a document template card`,
          }),
          filename: `project-brief.docx`,
          assetUrl: be,
          thumbnail: { uri: Y, alt: `` },
        },
        {
          id: `meeting-notes`,
          type: `document`,
          name: a({
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
          name: a({
            id: `home.artifactTemplates.reportOutline`,
            defaultMessage: `Report outline`,
            description: `Title for a document template card`,
          }),
          filename: `report-outline.docx`,
          assetUrl: we,
          thumbnail: { uri: ge, alt: `` },
        },
        {
          id: `monthly-business-review`,
          type: `presentation`,
          name: a({
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
          name: a({
            id: `home.artifactTemplates.salesDiscovery`,
            defaultMessage: `Sales discovery`,
            description: `Title for a presentation template card`,
          }),
          filename: `sales-discovery.pptx`,
          assetUrl: Ee,
          thumbnail: { uri: ve, alt: `` },
        },
        {
          id: `design-review`,
          type: `presentation`,
          name: a({
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
          name: a({
            id: `home.artifactTemplates.projectTracker`,
            defaultMessage: `Project tracker`,
            description: `Title for a spreadsheet template card`,
          }),
          filename: `project-tracker.xlsx`,
          assetUrl: Se,
          thumbnail: { uri: he, alt: `` },
        },
        {
          id: `budget-planner`,
          type: `spreadsheet`,
          name: a({
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
          name: a({
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
function je(e) {
  let n = (0, Fe.c)(61),
    {
      hostId: r,
      cwd: i,
      categories: a,
      enabled: o,
      onUseSkill: s,
      onUseAsset: c,
      onPrompt: l,
      onCreate: u,
      onClose: d,
      children: f,
    } = e,
    m = y(r),
    g = h(),
    [_, b] = (0, Ie.useState)(null),
    x;
  n[0] === o ? (x = n[1]) : ((x = { enabled: o }), (n[0] = o), (n[1] = x));
  let { skills: S, isLoading: C, isError: w, forceReload: T } = se(i ?? void 0, r, x),
    E;
  n[2] !== o || n[3] !== S ? ((E = o ? S : []), (n[2] = o), (n[3] = S), (n[4] = E)) : (E = n[4]);
  let { data: D, isLoading: O, isError: k, refetch: A } = me(E, r),
    { isPending: j, mutateAsync: M } = de(T),
    N;
  if (n[5] !== m || n[6] !== S) {
    let e;
    (n[8] === m ? (e = n[9]) : ((e = (e) => fe(e) != null && ce(e, m)), (n[8] = m), (n[9] = e)),
      (N = new Set(S.filter(e).map(Pe))),
      (n[5] = m),
      (n[6] = S),
      (n[7] = N));
  } else N = n[7];
  let P = N,
    F;
  n[10] === P ? (F = n[11]) : ((F = [...P]), (n[10] = P), (n[11] = F));
  let I;
  n[12] !== r || n[13] !== F
    ? ((I = { hostId: r, paths: F }), (n[12] = r), (n[13] = F), (n[14] = I))
    : (I = n[14]);
  let { data: L } = p(Le, I),
    R;
  if (
    n[15] !== C ||
    n[16] !== a ||
    n[17] !== f ||
    n[18] !== L ||
    n[19] !== T ||
    n[20] !== r ||
    n[21] !== g ||
    n[22] !== D ||
    n[23] !== k ||
    n[24] !== O ||
    n[25] !== u ||
    n[26] !== l ||
    n[27] !== c ||
    n[28] !== s ||
    n[29] !== P ||
    n[30] !== A ||
    n[31] !== j ||
    n[32] !== S ||
    n[33] !== w
  ) {
    let e = [],
      i = new Map();
    for (let n of S) {
      let a = D?.get(n.path);
      if (!a) continue;
      let o = ne(a.galleryKind);
      if (o == null) continue;
      let s = `${r}:${n.path}`,
        { url: c } = ae({
          size: `large`,
          iconLarge: n.interface?.iconLarge,
          basePath: n.path,
          renderCustomSvgAsImage: !0,
        });
      (e.push({
        enabled: n.enabled,
        personal: P.has(n.path),
        template: {
          id: s,
          type: o,
          name: t(n),
          description: n.description,
          thumbnail: c ? { uri: c, alt: `` } : void 0,
          createdAt: L?.get(n.path) ?? void 0,
        },
      }),
        i.set(s, n));
    }
    let o = new Map(),
      d = a.map((t) => {
        let n =
            c == null
              ? []
              : Oe(t).map((e) => {
                  let t = `asset:${e.id}`;
                  return (
                    o.set(t, e),
                    { id: t, type: e.type, name: g.formatMessage(e.name), thumbnail: e.thumbnail }
                  );
                }),
          r;
        return (
          (r =
            w || k
              ? {
                  status: `error`,
                  message: g.formatMessage({
                    id: `home.artifactTemplates.loadError`,
                    defaultMessage: `Unable to load templates`,
                    description: `Template catalog loading failure`,
                  }),
                }
              : C || O
                ? { status: `loading` }
                : { status: `ready`, data: te(e, t) }),
          {
            id: t,
            label: g.formatMessage(ue[t]),
            icon: `category-${t}`,
            templateTypes: ee(t),
            templates: r.status === `ready` && r.data.length === 0 ? { status: `ready`, data: n } : r,
          }
        );
      }),
      p;
    n[35] === S ? (p = n[36]) : ((p = S.find(Ne)), (n[35] = S), (n[36] = p));
    let m = p,
      h = async (e) => {
        let t = i.get(e.id);
        if (t) {
          s(t, e);
          return;
        }
        let n = o.get(e.id);
        n && c && (await c(n));
      },
      _;
    n[37] !== T || n[38] !== A
      ? ((_ = async () => {
          (await T(), await A());
        }),
        (n[37] = T),
        (n[38] = A),
        (n[39] = _))
      : (_ = n[39]);
    let v = _,
      y = (e) => {
        let t = i.get(e.id);
        return {
          onEdit:
            t && m
              ? () => {
                  l(re(t));
                }
              : void 0,
          onDelete: t && P.has(t.path) ? () => b(t) : void 0,
        };
      },
      x;
    (n[40] !== g || n[41] !== u || n[42] !== l || n[43] !== m
      ? ((x = m
          ? (e) => {
              (u?.(oe(`local`)), l(g.formatMessage(pe[e ?? `all`], { templateCreator: ie(`local`) })));
            }
          : void 0),
        (n[40] = g),
        (n[41] = u),
        (n[42] = l),
        (n[43] = m),
        (n[44] = x))
      : (x = n[44]),
      (R = f({
        groups: d,
        onCreateTemplate: x,
        onRetry: v,
        onUseTemplate: h,
        templateActions: y,
        disabled: j,
        detail: (e) =>
          (0, Q.jsx)(
            le,
            {
              template: e,
              path: i.get(e.id)?.path ?? null,
              hostId: r,
              onUse: () => h(e),
              callbacks: y(e),
              disabled: j,
            },
            e.id,
          ),
      })),
      (n[15] = C),
      (n[16] = a),
      (n[17] = f),
      (n[18] = L),
      (n[19] = T),
      (n[20] = r),
      (n[21] = g),
      (n[22] = D),
      (n[23] = k),
      (n[24] = O),
      (n[25] = u),
      (n[26] = l),
      (n[27] = c),
      (n[28] = s),
      (n[29] = P),
      (n[30] = A),
      (n[31] = j),
      (n[32] = S),
      (n[33] = w),
      (n[34] = R));
  } else R = n[34];
  let z = _ != null,
    B;
  n[45] === _ ? (B = n[46]) : ((B = _ ? t(_) : ``), (n[45] = _), (n[46] = B));
  let V;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => {
        e || b(null);
      }),
      (n[47] = V))
    : (V = n[47]);
  let H;
  n[48] !== r || n[49] !== d || n[50] !== _ || n[51] !== M
    ? ((H = () => {
        _ &&
          M({ hostId: r, skillPath: _.path }).then((e) => {
            let { success: t } = e;
            t && (b(null), d?.());
          }, Me);
      }),
      (n[48] = r),
      (n[49] = d),
      (n[50] = _),
      (n[51] = M),
      (n[52] = H))
    : (H = n[52]);
  let U;
  n[53] !== j || n[54] !== H || n[55] !== z || n[56] !== B
    ? ((U = (0, Q.jsx)(v, { open: z, deleteDisabled: j, title: B, onOpenChange: V, onConfirm: H })),
      (n[53] = j),
      (n[54] = H),
      (n[55] = z),
      (n[56] = B),
      (n[57] = U))
    : (U = n[57]);
  let W;
  return (
    n[58] !== U || n[59] !== R
      ? ((W = (0, Q.jsxs)(Q.Fragment, { children: [R, U] })), (n[58] = U), (n[59] = R), (n[60] = W))
      : (W = n[60]),
    W
  );
}
function Me() {}
function Ne(e) {
  return e.enabled && (e.name === `template-creator` || e.name.endsWith(`:template-creator`));
}
function Pe(e) {
  return e.path;
}
var Fe, Ie, Q, Le;
function $() {
  return ($ = e(() => {
    ((Fe = s()),
      d(),
      r(),
      u(),
      (Ie = i()),
      l(),
      b(),
      E(),
      C(),
      w(),
      g(),
      _(),
      T(),
      n(),
      S(),
      m(),
      x(),
      D(),
      Ae(),
      (Q = o()),
      (Le = f(c, ({ hostId: e, paths: t }) => ({
        queryKey: [`artifact-template-skill-creation-times`, e, ...t],
        queryFn: async ({ signal: n }) => {
          let r = await Promise.all(
            t.map(async (t) => {
              try {
                let { createdAtMs: r, mtimeMs: i } = await O({ hostId: e, path: t }, n);
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
export { $ as n, je as t };
//# sourceMappingURL=local-template-catalog-2eeca06107ff.js.map
