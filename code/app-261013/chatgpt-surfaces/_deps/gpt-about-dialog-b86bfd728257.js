const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-fc70cc99352a.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./workspace-plugin-permissions-a5234cd2a14d.js",
      "./permission-explanation-b56de09d0218.js",
      "./gpt-management-url-e06e14b9dc20.js",
      "./migrated-plugin-ece31f30dd17.js",
      "./chat-choice-view-98d03df437a6.js",
      "./retirement-53cd5dc76893.js",
      "./skipped-files-e53dfe3f2e69.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  ADt as r,
  AO as i,
  B4 as a,
  CO as o,
  Cot as s,
  Ext as c,
  FG as l,
  Fat as u,
  GE as d,
  IDt as f,
  Ixt as p,
  Ml as m,
  Mz as h,
  Nz as g,
  OV as _,
  Pat as v,
  Pxt as y,
  TJ as b,
  TO as x,
  VDt as ee,
  Vxt as te,
  WE as S,
  Xot as C,
  Yot as w,
  _O as T,
  _xt as E,
  aw as D,
  cz as O,
  fPt as ne,
  gO as re,
  hV as ie,
  hot as ae,
  i3 as k,
  iO as A,
  jDt as j,
  jG as oe,
  jH as se,
  jl as M,
  lot as ce,
  mO as le,
  mq as N,
  ow as P,
  pPt as F,
  r3 as I,
  rO as ue,
  rW as de,
  sMt as fe,
  sz as pe,
  t3 as L,
  vO as me,
  vzt as R,
  wot as z,
  xMt as B,
  xU as he,
  yzt as V,
  z4 as H,
  zxt as ge,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fin as U,
  G4n as _e,
  Gkt as ve,
  Hin as ye,
  Hkt as be,
  J4n as xe,
  Qjr as W,
  Vkt as G,
  Wkt as Se,
  Ymr as Ce,
  Zjr as K,
  bU as we,
  dMr as Te,
  eDr as q,
  ehr as J,
  fMr as Y,
  fur as Ee,
  nDr as De,
  pur as Oe,
  tDr as ke,
  xU as Ae,
} from "./app-initial-5851df3f6cb1.js";
import { _g as je, vg as Me } from "./app-primary-fe8a450b3b04.js";
import { r as Ne, t as Pe } from "./retirement-53cd5dc76893.js";
import { n as Fe, t as Ie } from "./gpt-report-menu-item-d6ac971188a2.js";
import { a as Le, i as Re, o as ze, r as Be, t as Ve } from "./workspace-plugin-permissions-a5234cd2a14d.js";
import { n as He, t as Ue } from "./card-tile-a92df345e9ab.js";
import { t as We } from "./compact-4efb136e1be9.js";
import {
  a as Ge,
  c as Ke,
  i as qe,
  l as Je,
  n as Ye,
  o as Xe,
  r as Ze,
  s as Qe,
  t as $e,
  u as et,
} from "./permission-explanation-b56de09d0218.js";
import { i as tt, r as nt, t as rt } from "./notices-44d3417a6fb0.js";
function it(e) {
  let t = (0, ct.c)(14),
    { resource: n, onClose: r, onStartChat: i } = e,
    a = De(`2160578039`),
    o;
  t[0] !== n.gizmo.id || t[1] !== n.gizmo.migrated_plugin_id
    ? ((o = { gizmoId: n.gizmo.id, pluginId: n.gizmo.migrated_plugin_id }),
      (t[0] = n.gizmo.id),
      (t[1] = n.gizmo.migrated_plugin_id),
      (t[2] = o))
    : (o = t[2]);
  let s = ge(je, o),
    c = a && !s && n.gizmo.gizmo_type === `gpt` ? n.gizmo.migrated_plugin_id : null;
  if (c != null) {
    let e;
    return (
      t[3] !== r || t[4] !== i || t[5] !== c || t[6] !== n
        ? ((e = (0, X.jsx)(at, { resource: n, pluginId: c, onClose: r, onStartChat: i })),
          (t[3] = r),
          (t[4] = i),
          (t[5] = c),
          (t[6] = n),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  if (n.gizmo.live_version === 0 && !s) return null;
  let l;
  return (
    t[8] !== a || t[9] !== r || t[10] !== i || t[11] !== s || t[12] !== n
      ? ((l = a
          ? (0, X.jsx)(ot, { resource: n, remigration: s, onClose: r, onStartChat: i })
          : (0, X.jsx)(st, { onClick: () => i(n) })),
        (t[8] = a),
        (t[9] = r),
        (t[10] = i),
        (t[11] = s),
        (t[12] = n),
        (t[13] = l))
      : (l = t[13]),
    l
  );
}
function at(e) {
  let t = (0, ct.c)(40),
    { resource: r, pluginId: i, onClose: a, onStartChat: o } = e,
    s = c(),
    { data: l, isPending: u, isFetching: d, isError: p, refetch: m } = ge(qe, i),
    g = u || d,
    _ = l != null && !g && !p,
    v;
  t[0] === r.gizmo.display.name
    ? (v = t[1])
    : ((v = r.gizmo.display.name.trim()), (t[0] = r.gizmo.display.name), (t[1] = v));
  let y = v,
    b;
  if (p && !g) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.about.retryPluginAccess`,
          defaultMessage: `Try again`,
          description: `Retry checking the current viewer’s access to the migrated plugin`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (b = e));
  } else if (l?.type === `admin`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.migration.viewPlugin`,
          defaultMessage: `View Plugin`,
          description: `Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (b = e));
  } else if (g || _) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.about.usePlugin`,
          defaultMessage: `Use plugin`,
          description: `Primary button in a migrated GPT's directory details dialog; closes the dialog and opens the migrated plugin's details without installing or running it`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (b = e));
  } else {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.about.explorePlugins`,
          defaultMessage: `Explore plugins`,
          description: `Button in a migrated GPT's directory details dialog when its plugin is inaccessible; closes the dialog and opens the Plugins directory`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (b = e));
  }
  let x;
  if (p) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.about.pluginAccessError`,
          defaultMessage: `We couldn’t check your access to this plugin. Try again.`,
          description: `A failed access lookup for a migrated GPT plugin; retry does not migrate again`,
        })),
        (t[6] = e))
      : (e = t[6]),
      (x = e));
  } else if (!g && !_) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.about.pluginAccessDenied`,
          defaultMessage: `This plugin isn’t available to you`,
          description: `Migrated GPT details when the plugin is inaccessible to this viewer`,
        })),
        (t[7] = e))
      : (e = t[7]),
      (x = e));
  } else if (l?.type === `admin`) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.about.migratedAdminDescription`,
          defaultMessage: `This GPT has been migrated. You can view the plugin in workspace admin settings`,
          description: `Notice in migrated GPT details for an administrator whose access opens the admin page, which does not offer starting a plugin chat`,
        })),
        (t[8] = e))
      : (e = t[8]),
      (x = e));
  } else if (y) {
    let e;
    (t[9] === y
      ? (e = t[10])
      : ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.about.migratedDescriptionNamed`,
          defaultMessage: `This GPT has been migrated. Use the plugin to continue using {gptName}.`,
          description: `Notice in a migrated GPT details dialog directing users to its plugin. gptName is the GPT display name.`,
          values: { gptName: y },
        })),
        (t[9] = y),
        (t[10] = e)),
      (x = e));
  } else {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.about.migratedDescription`,
          defaultMessage: `This GPT has been migrated. Use the plugin to continue using it.`,
          description: `Notice in a migrated GPT details dialog directing users to its plugin when the GPT name is empty.`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (x = e));
  }
  let ee;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, X.jsx)(h, { asset: P, className: `text-secondary` })), (t[12] = ee))
    : (ee = t[12]);
  let te;
  t[13] === y
    ? (te = t[14])
    : ((te = y
        ? (0, X.jsx)(f, {
            id: `chatgptConversations.gpts.about.migratedNamedTitle`,
            defaultMessage: `{gptName} is now a plugin`,
            description: `Heading in a GPT directory details dialog when it has been migrated to a plugin; gptName is the GPT's nonempty display name and may be long`,
            values: { gptName: y },
          })
        : (0, X.jsx)(f, {
            id: `chatgptConversations.gpts.about.migratedTitle`,
            defaultMessage: `This GPT is now a plugin`,
            description: `Fallback heading in a GPT directory details dialog when it has been migrated to a plugin but has no display name`,
          })),
      (t[13] = y),
      (t[14] = te));
  let C;
  t[15] !== x || t[16] !== te
    ? ((C = (0, X.jsx)(S, { variant: `catalog`, icon: ee, title: te, content: x })),
      (t[15] = x),
      (t[16] = te),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] !== _ || t[19] !== l || t[20] !== p || t[21] !== s || t[22] !== a || t[23] !== i || t[24] !== m
    ? ((w = () => {
        if (p) {
          m();
          return;
        }
        (a(), _ ? Ge(i, l, s) : s(`/plugins`));
      }),
      (t[18] = _),
      (t[19] = l),
      (t[20] = p),
      (t[21] = s),
      (t[22] = a),
      (t[23] = i),
      (t[24] = m),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] !== g || t[27] !== b || t[28] !== w
    ? ((T = (0, X.jsx)(n, {
        className: `w-full`,
        color: `primary`,
        loading: g,
        size: `promotionalAction`,
        onClick: w,
        children: b,
      })),
      (t[26] = g),
      (t[27] = b),
      (t[28] = w),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== o || t[31] !== r ? ((E = () => o(r)), (t[30] = o), (t[31] = r), (t[32] = E)) : (E = t[32]);
  let D;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(f, {
        id: `chatgptConversations.gpts.about.keepUsingGpt`,
        defaultMessage: `Keep using GPT`,
        description: `Secondary action in a migrated GPT details dialog that opens a chat with the original GPT instead of its plugin`,
      })),
      (t[33] = D))
    : (D = t[33]);
  let O;
  t[34] === E
    ? (O = t[35])
    : ((O = (0, X.jsx)(n, {
        className: `w-full`,
        color: `ghostSecondary`,
        size: `promotionalLink`,
        onClick: E,
        children: D,
      })),
      (t[34] = E),
      (t[35] = O));
  let ne;
  return (
    t[36] !== C || t[37] !== T || t[38] !== O
      ? ((ne = (0, X.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [C, T, O] })),
        (t[36] = C),
        (t[37] = T),
        (t[38] = O),
        (t[39] = ne))
      : (ne = t[39]),
    ne
  );
}
function ot(e) {
  let t = (0, ct.c)(50),
    { resource: r, remigration: i, onClose: a, onStartChat: o } = e,
    l = p(s),
    u = c(),
    d = ee(),
    m = te(Le),
    g = te(ze),
    _ = ke(`2513446768`),
    v;
  t[0] !== _ || t[1] !== d
    ? ((v = d.formatDate(Pe(_.get(`retirement_date`, ``)), {
        month: `long`,
        day: `numeric`,
        timeZone: `UTC`,
      })),
      (t[0] = _),
      (t[1] = d),
      (t[2] = v))
    : (v = t[2]);
  let y = v,
    { accountId: b, userId: x } = Oe(),
    C;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = { preview: !1 }), (t[3] = C)) : (C = t[3]);
  let { data: w } = ye(void 0, C),
    T = ge(W, `2562735250`)?.get(`enabled`, !1) === !0,
    E = Be(w, De(`1355972088`)),
    D = ke(`2826703856`).get(`enable_gpt_fe_controls`, !1),
    {
      data: O,
      isPending: ne,
      isError: re,
    } = ge(Te, b ?? ``, { enabled: b != null && w?.id === b && w.structure === `workspace` && (E || D) });
  if (
    T &&
    E &&
    !re &&
    et({ resource: r, remigration: i, account: w, accountId: b, permissions: O?.permissions, rbacEnabled: E })
  ) {
    let e;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(rt, { surface: `gpt` })), (t[4] = e))
      : (e = t[4]);
    let n;
    return (
      t[5] !== o || t[6] !== r
        ? ((n = (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [e, (0, X.jsx)(st, { onClick: () => o(r) })],
          })),
          (t[5] = o),
          (t[6] = r),
          (t[7] = n))
        : (n = t[7]),
      n
    );
  }
  if (!T || !Qe({ resource: r, remigration: i, account: w, accountId: b, userId: x, enabled: !0 })) {
    let e;
    t[8] !== u || t[9] !== a
      ? ((e = (0, X.jsx)(nt, {
          currentGpt: !0,
          openTarget: `external-browser`,
          onExplore: () => {
            (a(), u(`/plugins`));
          },
        })),
        (t[8] = u),
        (t[9] = a),
        (t[10] = e))
      : (e = t[10]);
    let n;
    t[11] !== o || t[12] !== r
      ? ((n = (0, X.jsx)(st, { onClick: () => o(r) })), (t[11] = o), (t[12] = r), (t[13] = n))
      : (n = t[13]);
    let i;
    return (
      t[14] !== e || t[15] !== n
        ? ((i = (0, X.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [e, n] })),
          (t[14] = e),
          (t[15] = n),
          (t[16] = i))
        : (i = t[16]),
      i
    );
  }
  let ie = Ke({ account: w, rbacEnabled: D, permissions: O?.permissions, isPending: ne, isError: re }),
    ae = Xe({
      resource: r,
      remigration: i,
      account: w,
      accountId: b,
      userId: x,
      enabled: !0,
      gptPermission: ie,
    }),
    k = Ve(w, E, O?.permissions),
    A;
  if (g) {
    let e;
    (t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip`,
          defaultMessage: `Plugin creation is disabled for this workspace`,
          description: `Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.`,
        })),
        (t[17] = e))
      : (e = t[17]),
      (A = e));
  } else if (ie !== `allowed`) {
    let e;
    (t[18] === ie ? (e = t[19]) : ((e = (0, X.jsx)($e, { permission: ie })), (t[18] = ie), (t[19] = e)),
      (A = e));
  } else if (!k) {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(f, {
          id: `chatgptConversations.gpts.migration.permissionRequired`,
          defaultMessage: `Your workspace must allow you to use plugins to migrate this GPT`,
          description: `Tooltip on a disabled GPT migration button for workspace users without permission to use plugins, or while that permission is loading`,
        })),
        (t[20] = e))
      : (e = t[20]),
      (A = e));
  }
  let j;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(h, { asset: P, className: `text-secondary` })), (t[21] = j))
    : (j = t[21]);
  let oe;
  t[22] === y
    ? (oe = t[23])
    : ((oe = (0, X.jsx)(f, {
        id: `chatgptConversations.gpts.about.migrateTitle`,
        defaultMessage: `Migrate this GPT to a plugin by {deadline}`,
        description: `Banner in a GPT details dialog for its eligible creator or administrator; deadline is the localized month and day when unmigrated GPTs retire.`,
        values: { deadline: y },
      })),
      (t[22] = y),
      (t[23] = oe));
  let se;
  t[24] === y
    ? (se = t[25])
    : ((se = (0, X.jsx)(f, {
        id: `chatgptConversations.gpts.about.migrateDescription.editingLocked`,
        defaultMessage: `Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
        description: `Body of the migration notice in a GPT details dialog, shown to the GPT creator or an eligible workspace administrator or owner before migration. Explains that migration preserves access through a plugin after GPT retirement, prevents further edits to the original GPT, and allows future updates to the plugin. Placeholder {deadline} is a nonempty, localized UTC month and day with no year, such as December 11. The Migrate to plugin button below opens confirmation; the separate Start chat button keeps using the original GPT. These three complete sentences can wrap onto multiple lines.`,
        values: { deadline: y },
      })),
      (t[24] = y),
      (t[25] = se));
  let M;
  t[26] !== oe || t[27] !== se
    ? ((M = (0, X.jsx)(S, { variant: `announcement`, icon: j, title: oe, content: se })),
      (t[26] = oe),
      (t[27] = se),
      (t[28] = M))
    : (M = t[28]);
  let ce = !m || !k || !ae,
    le;
  t[29] !== ae || t[30] !== k || t[31] !== a || t[32] !== i || t[33] !== r || t[34] !== l
    ? ((le = () => {
        l.get(Le) && ae && k && (a(), xe(l, lt, { resource: r, remigration: i }));
      }),
      (t[29] = ae),
      (t[30] = k),
      (t[31] = a),
      (t[32] = i),
      (t[33] = r),
      (t[34] = l),
      (t[35] = le))
    : (le = t[35]);
  let N;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(f, {
        id: `chatgptConversations.gpts.migration.migrate`,
        defaultMessage: `Migrate to plugin`,
        description: `Button in GPT details shown to its eligible owner or workspace administrator; opens a confirmation dialog to create a private plugin from the published GPT`,
      })),
      (t[36] = N))
    : (N = t[36]);
  let F;
  t[37] !== ce || t[38] !== le
    ? ((F = (0, X.jsx)(n, {
        className: `w-full`,
        "aria-disabled": ce,
        color: `primary`,
        size: `detailAction`,
        onClick: le,
        children: N,
      })),
      (t[37] = ce),
      (t[38] = le),
      (t[39] = F))
    : (F = t[39]);
  let I;
  t[40] !== A || t[41] !== F
    ? ((I = (0, X.jsx)(pe, { cloneCustomTrigger: !0, tooltipContent: A, children: F })),
      (t[40] = A),
      (t[41] = F),
      (t[42] = I))
    : (I = t[42]);
  let ue;
  t[43] !== o || t[44] !== r
    ? ((ue = (0, X.jsx)(st, { secondary: !0, onClick: () => o(r) })), (t[43] = o), (t[44] = r), (t[45] = ue))
    : (ue = t[45]);
  let de;
  return (
    t[46] !== I || t[47] !== ue || t[48] !== M
      ? ((de = (0, X.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [M, I, ue] })),
        (t[46] = I),
        (t[47] = ue),
        (t[48] = M),
        (t[49] = de))
      : (de = t[49]),
    de
  );
}
function st(e) {
  let t = (0, ct.c)(8),
    { secondary: r, onClick: i } = e,
    a = r !== void 0 && r,
    o = a ? `self-center` : `h-12 w-full justify-center`,
    s = a ? `ghostSecondary` : `primary`,
    c = a ? `dialogGhost` : `large`,
    l;
  t[0] === a
    ? (l = t[1])
    : ((l = a
        ? (0, X.jsx)(`span`, {
            className: `underline decoration-from-font underline-offset-2`,
            children: (0, X.jsx)(f, {
              id: `chatgptConversations.gpts.about.startChatLink`,
              defaultMessage: `Start chat`,
              description: `Secondary text action below the migration notice in a GPT details dialog; starts a new chat with the original GPT.`,
            }),
          })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(ie, {}),
              (0, X.jsx)(f, {
                id: `chatgptConversations.gpts.about.startChat`,
                defaultMessage: `Start Chat`,
                description: `Button in the GPT store detail dialog that starts a new chat with the selected GPT; appears below migration when that action is available`,
              }),
            ],
          })),
      (t[0] = a),
      (t[1] = l));
  let u;
  return (
    t[2] !== i || t[3] !== o || t[4] !== s || t[5] !== c || t[6] !== l
      ? ((u = (0, X.jsx)(n, { className: o, color: s, radius: `full`, size: c, onClick: i, children: l })),
        (t[2] = i),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
var ct, X, lt;
function ut() {
  return (ut = e(() => {
    ((ct = R()),
      D(),
      y(),
      j(),
      E(),
      Y(),
      Ee(),
      Re(),
      U(),
      d(),
      L(),
      g(),
      b(),
      H(),
      _e(),
      O(),
      z(),
      q(),
      K(),
      Je(),
      Ze(),
      tt(),
      Ye(),
      Me(),
      Ne(),
      (X = B()),
      F(),
      (lt = a(
        async () =>
          (
            await ne(
              async () => {
                let { GptPluginMigrationDialog: e } = await import(`./dialog-fc70cc99352a.js`);
                return { GptPluginMigrationDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
              import.meta.url,
            )
          ).GptPluginMigrationDialog,
      )));
  }))();
}
function dt(e) {
  let t = (0, mt.c)(12),
    { accountId: n, gizmoId: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = [`chatgpt-gizmos`, `about`, n, r]), (t[0] = n), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === r
    ? (a = t[4])
    : ((a = (e) => {
        let { signal: t } = e;
        return Ce.safeGet(`/gizmos/{gizmo_id}/about`, { parameters: { path: { gizmo_id: r } }, signal: t });
      }),
      (t[3] = r),
      (t[4] = a));
  let o;
  t[5] !== i || t[6] !== a
    ? ((o = { queryKey: i, queryFn: a, staleTime: v.ONE_MINUTE }), (t[5] = i), (t[6] = a), (t[7] = o))
    : (o = t[7]);
  let { data: s } = C(o);
  if (s == null || s.about_blocks.length === 0) return null;
  let c;
  t[8] === s.about_blocks ? (c = t[9]) : ((c = s.about_blocks.map(ft)), (t[8] = s.about_blocks), (t[9] = c));
  let l;
  return (
    t[10] === c
      ? (l = t[11])
      : ((l = (0, Z.jsx)(`div`, { className: `mt-4 flex flex-wrap justify-center gap-6`, children: c })),
        (t[10] = c),
        (t[11] = l)),
    l
  );
}
function ft(e) {
  return (0, Z.jsx)(pt, { block: e }, e.type);
}
function pt(e) {
  let t = (0, mt.c)(17),
    { block: n } = e,
    r,
    i;
  bb0: switch (n.type) {
    case `generic_title_subtitle`:
      ((r = n.title), (i = n.subtitle));
      break bb0;
    case `rating`: {
      let e;
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Z.jsx)(N, {})), (t[0] = e)) : (e = t[0]);
      let a;
      (t[1] === n.avg
        ? (a = t[2])
        : ((a = (0, Z.jsxs)(Z.Fragment, { children: [e, n.avg] })), (t[1] = n.avg), (t[2] = a)),
        (r = a),
        (i = n.count_str));
      break bb0;
    }
    case `category`: {
      let e;
      (t[3] !== n.category_ranking || t[4] !== n.category_str
        ? ((e =
            n.category_ranking == null
              ? n.category_str
              : (0, Z.jsx)(f, {
                  id: `chatgptConversations.gpts.about.categoryRank`,
                  defaultMessage: `#{rank}`,
                  description: `Trending rank displayed in the GPT directory About modal`,
                  values: { rank: n.category_ranking },
                })),
          (t[3] = n.category_ranking),
          (t[4] = n.category_str),
          (t[5] = e))
        : (e = t[5]),
        (r = e));
      let a;
      (t[6] !== n.category_locale_str || t[7] !== n.category_ranking || t[8] !== n.category_str
        ? ((a =
            n.category_ranking == null
              ? (0, Z.jsx)(f, {
                  id: `chatgptConversations.gpts.about.category`,
                  defaultMessage: `Category`,
                  description: `Caption below the GPT category in the directory About modal`,
                })
              : (0, Z.jsx)(f, {
                  id: `chatgptConversations.gpts.about.rankedCategory`,
                  defaultMessage: `in {category} {locale}`,
                  description: `Caption below a GPT's trending rank, identifying its category and locale`,
                  values: { category: n.category_str, locale: n.category_locale_str ?? `` },
                })),
          (t[6] = n.category_locale_str),
          (t[7] = n.category_ranking),
          (t[8] = n.category_str),
          (t[9] = a))
        : (a = t[9]),
        (i = a));
      break bb0;
    }
    case void 0:
      return null;
  }
  let a;
  t[10] === r
    ? (a = t[11])
    : ((a = (0, Z.jsx)(`div`, { className: `flex items-center gap-2 heading-md text-default`, children: r })),
      (t[10] = r),
      (t[11] = a));
  let o;
  t[12] === i
    ? (o = t[13])
    : ((o = (0, Z.jsx)(`div`, { className: `text-xs text-secondary`, children: i })),
      (t[12] = i),
      (t[13] = o));
  let s;
  return (
    t[14] !== a || t[15] !== o
      ? ((s = (0, Z.jsxs)(`div`, {
          className: `flex flex-col items-center gap-2 text-center`,
          children: [a, o],
        })),
        (t[14] = a),
        (t[15] = o),
        (t[16] = s))
      : (s = t[16]),
    s
  );
}
var mt, Z;
function ht() {
  return (ht = e(() => {
    ((mt = R()), w(), j(), J(), b(), u(), (Z = B()));
  }))();
}
function gt(e, t, n) {
  return t != null && t !== `no_constraint` && t !== `us`
    ? `residency`
    : n === `allow_none` || n === `allow_specific`
      ? n
      : e.plan_type === `quorum`
        ? `quorum`
        : null;
}
function _t(e, t) {
  return e.includes(`interactions_disabled`)
    ? `interactions_disabled`
    : e.includes(`fedramp_incompatible`)
      ? `fedramp_incompatible`
      : e.includes(`openai_gpt_workspace_disabled`)
        ? `openai_gpt_workspace_disabled`
        : e.includes(`workspace_disabled`) && !t
          ? `workspace_disabled`
          : null;
}
function vt() {
  return (vt = e(() => {}))();
}
function yt(e) {
  return [`chatgpt-gizmos`, e, `discovery`];
}
function bt(e, t, n) {
  return [`chatgpt-gizmos`, e, `discovery-cut`, t, n];
}
function xt(e, t, n) {
  return [`chatgpt-gizmos`, e, `search`, t, n];
}
function St(e, t) {
  return [`chatgpt-gizmos`, e, `creator`, t];
}
function Ct() {
  return (Ct = e(() => {}))();
}
function wt(e) {
  let t = (0, At.c)(14),
    { accountId: r, gizmo: i, isOwnerAndWorkspaceAllowsSpecific: a, onClose: o, onStartChat: s } = e,
    c = De(`2160578039`),
    l = null;
  typeof i == `string` ? (l = i) : c && (l = i.gizmo.id);
  let { data: u, isError: d, refetch: p } = ge(G, l),
    m = u ?? (typeof i == `string` ? void 0 : i);
  if (m == null) {
    let e;
    t[0] === o
      ? (e = t[1])
      : ((e = (e) => {
          e || o();
        }),
        (t[0] = o),
        (t[1] = e));
    let r;
    t[2] !== d || t[3] !== p
      ? ((r = (0, Q.jsx)(`div`, {
          className: `flex h-full min-h-80 flex-col items-center justify-center gap-4 bg-surface-secondary p-8 text-center`,
          children: d
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(T, {
                    className: `heading-lg font-semibold text-default`,
                    children: (0, Q.jsx)(f, {
                      id: `chatgptConversations.gpts.about.loadError`,
                      defaultMessage: `Couldn't load this GPT`,
                      description: `Error title shown when a GPT store detail dialog cannot load its GPT`,
                    }),
                  }),
                  (0, Q.jsx)(re, {
                    className: `text-secondary`,
                    children: (0, Q.jsx)(f, {
                      id: `chatgptConversations.gpts.about.loadErrorDescription`,
                      defaultMessage: `Check your connection and try again.`,
                      description: `Error description shown when a GPT store detail dialog cannot load its GPT`,
                    }),
                  }),
                  (0, Q.jsx)(n, {
                    color: `secondary`,
                    onClick: () => {
                      p();
                    },
                    children: (0, Q.jsx)(f, {
                      id: `chatgptConversations.gpts.about.retry`,
                      defaultMessage: `Try again`,
                      description: `Button label for retrying a failed GPT store detail request`,
                    }),
                  }),
                ],
              })
            : (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(T, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(f, {
                      id: `chatgptConversations.gpts.about.loading`,
                      defaultMessage: `Loading GPT details`,
                      description: `Accessible title while a GPT store detail dialog is loading`,
                    }),
                  }),
                  (0, Q.jsx)(re, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(f, {
                      id: `chatgptConversations.gpts.about.loadingDescription`,
                      defaultMessage: `Loading information about this GPT`,
                      description: `Accessible description while a GPT store detail dialog is loading`,
                    }),
                  }),
                  (0, Q.jsx)(I, {}),
                ],
              }),
        })),
        (t[2] = d),
        (t[3] = p),
        (t[4] = r))
      : (r = t[4]);
    let i;
    return (
      t[5] !== e || t[6] !== r
        ? ((i = (0, Q.jsx)(le, {
            open: !0,
            contentClassName: `flex flex-col`,
            size: `editor`,
            variant: `chatgpt`,
            onOpenChange: e,
            children: r,
          })),
          (t[5] = e),
          (t[6] = r),
          (t[7] = i))
        : (i = t[7]),
      i
    );
  }
  let h;
  return (
    t[8] !== r || t[9] !== a || t[10] !== o || t[11] !== s || t[12] !== m
      ? ((h = (0, Q.jsx)(Tt, {
          accountId: r,
          isOwnerAndWorkspaceAllowsSpecific: a,
          resource: m,
          onClose: o,
          onStartChat: s,
        })),
        (t[8] = r),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = m),
        (t[13] = h))
      : (h = t[13]),
    h
  );
}
function Tt(e) {
  let t = (0, At.c)(144),
    { accountId: r, isOwnerAndWorkspaceAllowsSpecific: i, resource: a, onClose: c, onStartChat: u } = e,
    d = p(s),
    g = ee(),
    _ = De(`1825130190`),
    y = De(`2160578039`),
    b;
  t[0] !== a.gizmo.id || t[1] !== a.gizmo.migrated_plugin_id
    ? ((b = { gizmoId: a.gizmo.id, pluginId: a.gizmo.migrated_plugin_id }),
      (t[0] = a.gizmo.id),
      (t[1] = a.gizmo.migrated_plugin_id),
      (t[2] = b))
    : (b = t[2]);
  let S = !ge(je, b) && y && a.gizmo.gizmo_type === `gpt` && a.gizmo.migrated_plugin_id != null,
    [w, E] = (0, Nt.useState)(!1),
    [D, O] = (0, Nt.useState)(!1),
    { data: ne } = te(be),
    ie = !S,
    k;
  t[3] === a.gizmo.author.user_id
    ? (k = t[4])
    : ((k = () =>
        Ce.safeGet(`/gizmo_creators/{uid}/gizmos`, {
          parameters: { path: { uid: a.gizmo.author.user_id } },
        })),
      (t[3] = a.gizmo.author.user_id),
      (t[4] = k));
  let A;
  t[5] !== r || t[6] !== a.gizmo.author.user_id
    ? ((A = St(r, a.gizmo.author.user_id)), (t[5] = r), (t[6] = a.gizmo.author.user_id), (t[7] = A))
    : (A = t[7]);
  let j;
  t[8] !== ie || t[9] !== k || t[10] !== A
    ? ((j = { enabled: ie, queryFn: k, queryKey: A, staleTime: v.ONE_MINUTE }),
      (t[8] = ie),
      (t[9] = k),
      (t[10] = A),
      (t[11] = j))
    : (j = t[11]);
  let { data: M, isPending: ce } = C(j),
    N;
  t[12] === g
    ? (N = t[13])
    : ((N = g.formatMessage({
        id: `chatgptConversations.gpts.about.actions`,
        defaultMessage: `GPT actions`,
        description: `Accessible label for the overflow menu in the GPT store detail dialog`,
      })),
      (t[12] = g),
      (t[13] = N));
  let P = N,
    F;
  t[14] !== a.gizmo.display.name || t[15] !== a.gizmo.id
    ? ((F = a.gizmo.display.name.trim() || a.gizmo.id),
      (t[14] = a.gizmo.display.name),
      (t[15] = a.gizmo.id),
      (t[16] = F))
    : (F = t[16]);
  let I = F,
    fe;
  t[17] === a.gizmo.author.display_name
    ? (fe = t[18])
    : ((fe = a.gizmo.author.display_name?.trim() || void 0),
      (t[17] = a.gizmo.author.display_name),
      (t[18] = fe));
  let L = fe,
    me;
  t[19] !== ne || t[20] !== a.gizmo.id
    ? ((me = ne?.some((e) => {
        let { item: t } = e;
        return t.gizmo.id === a.gizmo.id;
      })),
      (t[19] = ne),
      (t[20] = a.gizmo.id),
      (t[21] = me))
    : (me = t[21]);
  let R = me,
    z,
    B,
    V,
    H,
    U,
    _e,
    ye,
    xe,
    W,
    G,
    Se,
    K,
    Te,
    q,
    J,
    Y;
  if (
    t[22] !== r ||
    t[23] !== P ||
    t[24] !== w ||
    t[25] !== L ||
    t[26] !== M?.items ||
    t[27] !== g ||
    t[28] !== ce ||
    t[29] !== S ||
    t[30] !== i ||
    t[31] !== R ||
    t[32] !== D ||
    t[33] !== I ||
    t[34] !== c ||
    t[35] !== u ||
    t[36] !== a ||
    t[37] !== _ ||
    t[38] !== d
  ) {
    let e = (0, Mt.default)((0, jt.default)(a.tools.map(kt)), Dt),
      s = M?.items.filter((e) => {
        let { gizmo: t } = e;
        return t.gizmo_type !== `snorlax` && _t(t.tags, i) == null;
      }),
      p = s?.[0]?.gizmo.author.display_name?.trim() || L;
    if (
      t[55] !== r ||
      t[56] !== P ||
      t[57] !== w ||
      t[58] !== L ||
      t[59] !== g ||
      t[60] !== S ||
      t[61] !== R ||
      t[62] !== D ||
      t[63] !== I ||
      t[64] !== c ||
      t[65] !== u ||
      t[66] !== a ||
      t[67] !== _ ||
      t[68] !== d
    ) {
      let e = a.gizmo.display.prompt_starters?.slice(0, 4);
      ((z = le),
        (G = !0),
        (Se = `flex max-h-full flex-col`),
        t[82] !== P ||
        t[83] !== w ||
        t[84] !== g ||
        t[85] !== R ||
        t[86] !== D ||
        t[87] !== c ||
        t[88] !== a ||
        t[89] !== d
          ? ((K =
              a.gizmo.live_version === 0
                ? null
                : (0, Q.jsxs)(o, {
                    align: `end`,
                    contentWidth: `menu`,
                    open: w,
                    onOpenChange: E,
                    side: `bottom`,
                    sideOffset: 4,
                    triggerButton: (0, Q.jsx)(pe, {
                      cloneCustomTrigger: !0,
                      tooltipContent: P,
                      triggerPopupOpen: w,
                      children: (0, Q.jsx)(n, {
                        "aria-label": P,
                        color: `ghostActive`,
                        size: `icon`,
                        uniform: !0,
                        children: (0, Q.jsx)(se, {}),
                      }),
                    }),
                    children: [
                      (0, Q.jsxs)(x.Item, {
                        disabled: R == null,
                        onSelect: () => {
                          R != null &&
                            ve(d, a, !R).catch(() => {
                              d.get(ae).danger(
                                g.formatMessage({
                                  id: `chatgptConversations.gpts.about.pinFailed`,
                                  defaultMessage: `Couldn't update pinned GPT`,
                                  description: `Error toast shown when pinning or unpinning a GPT from its store detail dialog fails`,
                                }),
                                { errorAnalytics: { toastId: `chatgptConversations.gpts.about.pinFailed` } },
                              );
                            });
                        },
                        children: [
                          (0, Q.jsx)(x.ItemIcon, { children: R ? (0, Q.jsx)(l, {}) : (0, Q.jsx)(oe, {}) }),
                          R
                            ? (0, Q.jsx)(f, {
                                id: `chatgptConversations.gpts.about.unpin`,
                                defaultMessage: `Remove from sidebar`,
                                description: `Overflow menu action in the GPT store detail dialog that removes the GPT from the sidebar`,
                              })
                            : (0, Q.jsx)(f, {
                                id: `chatgptConversations.gpts.about.pin`,
                                defaultMessage: `Keep in sidebar`,
                                description: `Overflow menu action in the GPT store detail dialog that pins the GPT in the sidebar`,
                              }),
                        ],
                      }),
                      a.gizmo.share_recipient === `private`
                        ? null
                        : (0, Q.jsxs)(x.Item, {
                            onSelect: () => {
                              let e = a.gizmo.short_url?.trim() || a.gizmo.id;
                              ue(`https://chatgpt.com/g/${encodeURIComponent(e)}`).then(O);
                            },
                            children: [
                              (0, Q.jsx)(x.ItemIcon, { children: (0, Q.jsx)(de, {}) }),
                              D
                                ? (0, Q.jsx)(f, {
                                    id: `chatgptConversations.gpts.about.copiedLink`,
                                    defaultMessage: `Copied link`,
                                    description: `Temporary confirmation in the GPT store detail dialog overflow menu after its public link was copied`,
                                  })
                                : (0, Q.jsx)(f, {
                                    id: `chatgptConversations.gpts.about.copyLink`,
                                    defaultMessage: `Copy link`,
                                    description: `Overflow menu action in the GPT store detail dialog that copies the GPT's public ChatGPT link`,
                                  }),
                            ],
                          }),
                      (0, Q.jsx)(Ie, { resource: a, onSelect: c }),
                    ],
                  })),
            (t[82] = P),
            (t[83] = w),
            (t[84] = g),
            (t[85] = R),
            (t[86] = D),
            (t[87] = c),
            (t[88] = a),
            (t[89] = d),
            (t[90] = K))
          : (K = t[90]),
        (Te = S ? `catalogDetail` : `wide`),
        (q = S ? `compact` : `default`),
        (J = S ? `catalog` : `promotional`),
        t[91] === c
          ? (Y = t[92])
          : ((Y = (e) => {
              e || c();
            }),
            (t[91] = c),
            (t[92] = Y)),
        (W = `flex min-h-0 flex-col`),
        (B = `min-h-0 flex-1 overflow-y-auto px-5 pt-20 pb-4 sm:px-10`));
      let i;
      t[93] === a.gizmo.display.profile_picture_url
        ? (i = t[94])
        : ((i = a.gizmo.display.profile_picture_url?.trim() || null),
          (t[93] = a.gizmo.display.profile_picture_url),
          (t[94] = i));
      let s;
      t[95] !== I || t[96] !== a.gizmo.id || t[97] !== i
        ? ((s = (0, Q.jsx)(we, {
            className: `mb-1 size-20`,
            customGpt: { iconUrl: i, id: a.gizmo.id, name: I },
            presentation: `avatar`,
          })),
          (t[95] = I),
          (t[96] = a.gizmo.id),
          (t[97] = i),
          (t[98] = s))
        : (s = t[98]);
      let p;
      t[99] === I
        ? (p = t[100])
        : ((p = (0, Q.jsx)(T, {
            className: `text-heading-lg leading-7 font-semibold wrap-anywhere text-default`,
            children: I,
          })),
          (t[99] = I),
          (t[100] = p));
      let v;
      t[101] !== L || t[102] !== a.gizmo.author.link_to
        ? ((v =
            L == null
              ? null
              : (0, Q.jsxs)(`div`, {
                  className: `flex items-center gap-1 text-base text-secondary select-none`,
                  children: [
                    (0, Q.jsx)(f, {
                      id: `chatgptConversations.gpts.about.byAuthor`,
                      defaultMessage: `By {author}`,
                      description: `Byline in the GPT store detail dialog naming the GPT's creator; author is the creator's display name`,
                      values: { author: L },
                    }),
                    a.gizmo.author.link_to ? (0, Q.jsx)(he, {}) : (0, Q.jsx)(h, { asset: m }),
                  ],
                })),
          (t[101] = L),
          (t[102] = a.gizmo.author.link_to),
          (t[103] = v))
        : (v = t[103]);
      let y;
      (t[104] !== I || t[105] !== a.gizmo.display.description
        ? ((y =
            a.gizmo.display.description == null
              ? (0, Q.jsx)(re, {
                  className: `sr-only`,
                  children: (0, Q.jsx)(f, {
                    id: `chatgptConversations.gpts.about.descriptionFallback`,
                    defaultMessage: `Details for {name}`,
                    description: `Accessible fallback description for a GPT store detail dialog when the GPT has no description; name is the GPT's name`,
                    values: { name: I },
                  }),
                })
              : (0, Q.jsx)(re, {
                  className: `max-w-md text-base text-pretty text-default`,
                  children: a.gizmo.display.description,
                })),
          (t[104] = I),
          (t[105] = a.gizmo.display.description),
          (t[106] = y))
        : (y = t[106]),
        t[107] !== s || t[108] !== p || t[109] !== v || t[110] !== y
          ? ((V = (0, Q.jsxs)(`div`, {
              className: `flex flex-col items-center gap-2 text-center`,
              children: [s, p, v, y],
            })),
            (t[107] = s),
            (t[108] = p),
            (t[109] = v),
            (t[110] = y),
            (t[111] = V))
          : (V = t[111]),
        t[112] !== r || t[113] !== a.gizmo.id
          ? ((H = (0, Q.jsx)(dt, { accountId: r, gizmoId: a.gizmo.id })),
            (t[112] = r),
            (t[113] = a.gizmo.id),
            (t[114] = H))
          : (H = t[114]),
        (U =
          !S && _ && a.gizmo.live_version !== 0 && e != null && e.length > 0
            ? (0, Q.jsxs)(`section`, {
                className: `mt-10`,
                children: [
                  (0, Q.jsx)(`h2`, {
                    className: `heading-xl mb-3 font-semibold text-default select-none`,
                    children: (0, Q.jsx)(f, {
                      id: `chatgptConversations.gpts.about.conversationStarters`,
                      defaultMessage: `Conversation Starters`,
                      description: `Section heading in a GPT's details dialog for end users. The section contains suggested first messages; selecting one opens that GPT's chat and puts the message in the composer for review before sending. Keep this heading short.`,
                    }),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `flex flex-wrap gap-2`,
                    children: e.map((e) =>
                      (0, Q.jsx)(
                        n,
                        {
                          allowShrink: !0,
                          color: `secondary`,
                          size: `medium`,
                          onClick: () => u(a, e),
                          children: (0, Q.jsx)(`span`, { className: `whitespace-normal`, children: e }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              })
            : null),
        (t[55] = r),
        (t[56] = P),
        (t[57] = w),
        (t[58] = L),
        (t[59] = g),
        (t[60] = S),
        (t[61] = R),
        (t[62] = D),
        (t[63] = I),
        (t[64] = c),
        (t[65] = u),
        (t[66] = a),
        (t[67] = _),
        (t[68] = d),
        (t[69] = z),
        (t[70] = B),
        (t[71] = V),
        (t[72] = H),
        (t[73] = U),
        (t[74] = W),
        (t[75] = G),
        (t[76] = Se),
        (t[77] = K),
        (t[78] = Te),
        (t[79] = q),
        (t[80] = J),
        (t[81] = Y));
    } else
      ((z = t[69]),
        (B = t[70]),
        (V = t[71]),
        (H = t[72]),
        (U = t[73]),
        (W = t[74]),
        (G = t[75]),
        (Se = t[76]),
        (K = t[77]),
        (Te = t[78]),
        (q = t[79]),
        (J = t[80]),
        (Y = t[81]));
    ((_e =
      S || e.length === 0
        ? null
        : (0, Q.jsxs)(`section`, {
            className: `mt-10`,
            children: [
              (0, Q.jsx)(`h2`, {
                className: `heading-xl mb-3 font-semibold text-default select-none`,
                children: (0, Q.jsx)(f, {
                  id: `chatgptConversations.gpts.about.capabilities`,
                  defaultMessage: `Capabilities`,
                  description: `Heading above the tools available to a GPT in its store detail dialog`,
                }),
              }),
              (0, Q.jsx)(`div`, { className: `flex flex-col gap-2`, children: e.map(Et) }),
            ],
          })),
      (ye =
        !S && s == null && ce
          ? (0, Q.jsx)(`div`, {
              "aria-hidden": !0,
              className: `mt-10 h-24 animate-pulse rounded-xl bg-surface`,
            })
          : null),
      (xe =
        !S && s != null && s.length > 0
          ? (0, Q.jsxs)(`section`, {
              className: `mt-10`,
              children: [
                (0, Q.jsx)(`h2`, {
                  className: `heading-xl mb-3 font-semibold text-default select-none`,
                  children:
                    p == null
                      ? (0, Q.jsx)(f, {
                          id: `chatgptConversations.gpts.about.moreByCreatorFallback`,
                          defaultMessage: `More from this creator`,
                          description: `Heading above more GPTs from the same creator when the creator has no display name`,
                        })
                      : (0, Q.jsx)(f, {
                          id: `chatgptConversations.gpts.about.moreByCreator`,
                          defaultMessage: `More by {creatorName}`,
                          description: `Heading above more GPTs from the same creator in the GPT store detail dialog; creatorName is the creator's display name`,
                          values: { creatorName: p },
                        }),
                }),
                (0, Q.jsx)(`div`, {
                  className: `flex gap-2 overflow-x-auto pb-1`,
                  children: s.map((e) => (0, Q.jsx)(Ot, { resource: e, onStartChat: u }, e.gizmo.id)),
                }),
              ],
            })
          : null),
      (t[22] = r),
      (t[23] = P),
      (t[24] = w),
      (t[25] = L),
      (t[26] = M?.items),
      (t[27] = g),
      (t[28] = ce),
      (t[29] = S),
      (t[30] = i),
      (t[31] = R),
      (t[32] = D),
      (t[33] = I),
      (t[34] = c),
      (t[35] = u),
      (t[36] = a),
      (t[37] = _),
      (t[38] = d),
      (t[39] = z),
      (t[40] = B),
      (t[41] = V),
      (t[42] = H),
      (t[43] = U),
      (t[44] = _e),
      (t[45] = ye),
      (t[46] = xe),
      (t[47] = W),
      (t[48] = G),
      (t[49] = Se),
      (t[50] = K),
      (t[51] = Te),
      (t[52] = q),
      (t[53] = J),
      (t[54] = Y));
  } else
    ((z = t[39]),
      (B = t[40]),
      (V = t[41]),
      (H = t[42]),
      (U = t[43]),
      (_e = t[44]),
      (ye = t[45]),
      (xe = t[46]),
      (W = t[47]),
      (G = t[48]),
      (Se = t[49]),
      (K = t[50]),
      (Te = t[51]),
      (q = t[52]),
      (J = t[53]),
      (Y = t[54]));
  let Ee;
  t[115] !== B ||
  t[116] !== V ||
  t[117] !== H ||
  t[118] !== U ||
  t[119] !== _e ||
  t[120] !== ye ||
  t[121] !== xe
    ? ((Ee = (0, Q.jsxs)(`div`, { className: B, children: [V, H, U, _e, ye, xe] })),
      (t[115] = B),
      (t[116] = V),
      (t[117] = H),
      (t[118] = U),
      (t[119] = _e),
      (t[120] = ye),
      (t[121] = xe),
      (t[122] = Ee))
    : (Ee = t[122]);
  let Oe = S ? `shrink-0 px-6 pb-8 sm:px-10` : `shrink-0 px-6 pt-2 pb-8`,
    ke;
  t[123] !== c || t[124] !== u || t[125] !== a
    ? ((ke = (0, Q.jsx)(it, { resource: a, onClose: c, onStartChat: u })),
      (t[123] = c),
      (t[124] = u),
      (t[125] = a),
      (t[126] = ke))
    : (ke = t[126]);
  let Ae;
  t[127] !== Oe || t[128] !== ke
    ? ((Ae = (0, Q.jsx)(`div`, { className: Oe, children: ke })), (t[127] = Oe), (t[128] = ke), (t[129] = Ae))
    : (Ae = t[129]);
  let Me;
  t[130] !== W || t[131] !== Ee || t[132] !== Ae
    ? ((Me = (0, Q.jsxs)(`div`, { className: W, children: [Ee, Ae] })),
      (t[130] = W),
      (t[131] = Ee),
      (t[132] = Ae),
      (t[133] = Me))
    : (Me = t[133]);
  let Ne;
  return (
    t[134] !== z ||
    t[135] !== G ||
    t[136] !== Se ||
    t[137] !== K ||
    t[138] !== Te ||
    t[139] !== q ||
    t[140] !== J ||
    t[141] !== Y ||
    t[142] !== Me
      ? ((Ne = (0, Q.jsx)(z, {
          open: G,
          contentClassName: Se,
          headerActions: K,
          size: Te,
          radius: q,
          variant: J,
          onOpenChange: Y,
          children: Me,
        })),
        (t[134] = z),
        (t[135] = G),
        (t[136] = Se),
        (t[137] = K),
        (t[138] = Te),
        (t[139] = q),
        (t[140] = J),
        (t[141] = Y),
        (t[142] = Me),
        (t[143] = Ne))
      : (Ne = t[143]),
    Ne
  );
}
function Et(e) {
  return (0, Q.jsxs)(
    `div`,
    {
      className: `flex items-start gap-2`,
      children: [
        (0, Q.jsx)(_, { className: `mt-0.5 text-chart-green` }),
        (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-col`,
          children: [
            (0, Q.jsx)(f, { ...e.title }),
            e.description == null
              ? null
              : (0, Q.jsx)(`span`, {
                  className: `text-xs text-secondary`,
                  children: (0, Q.jsx)(f, { ...e.description }),
                }),
          ],
        }),
      ],
    },
    e.title.id,
  );
}
function Dt(e) {
  let { title: t } = e;
  return t.id;
}
function Ot(e) {
  let t = (0, At.c)(28),
    { resource: n, onStartChat: r } = e,
    i;
  t[0] !== n.gizmo.display.name || t[1] !== n.gizmo.id
    ? ((i = n.gizmo.display.name.trim() || n.gizmo.id),
      (t[0] = n.gizmo.display.name),
      (t[1] = n.gizmo.id),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] === n.gizmo.author.display_name
    ? (o = t[4])
    : ((o = n.gizmo.author.display_name?.trim()), (t[3] = n.gizmo.author.display_name), (t[4] = o));
  let s = o,
    c;
  t[5] === n.gizmo.display.description
    ? (c = t[6])
    : ((c =
        n.gizmo.display.description == null
          ? null
          : (0, Q.jsx)(`span`, { className: `line-clamp-2`, children: n.gizmo.display.description })),
      (t[5] = n.gizmo.display.description),
      (t[6] = c));
  let l;
  t[7] === s
    ? (l = t[8])
    : ((l =
        s == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `text-xs text-secondary`,
              children: (0, Q.jsx)(f, {
                id: `chatgptConversations.gpts.about.creatorCardByline`,
                defaultMessage: `By {author}`,
                description: `Byline on a related GPT card in the GPT store detail dialog; author is the GPT creator's display name`,
                values: { author: s },
              }),
            })),
      (t[7] = s),
      (t[8] = l));
  let u;
  t[9] !== c || t[10] !== l
    ? ((u = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [c, l] })),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u))
    : (u = t[11]);
  let d;
  t[12] === n.gizmo.display.profile_picture_url
    ? (d = t[13])
    : ((d = n.gizmo.display.profile_picture_url?.trim() || null),
      (t[12] = n.gizmo.display.profile_picture_url),
      (t[13] = d));
  let p;
  t[14] !== a || t[15] !== n.gizmo.id || t[16] !== d
    ? ((p = (0, Q.jsx)(`span`, {
        className: `flex size-12 items-center justify-center overflow-hidden rounded-full`,
        children: (0, Q.jsx)(we, {
          className: `h-full w-full`,
          customGpt: { iconUrl: d, id: n.gizmo.id, name: a },
          presentation: `avatar`,
        }),
      })),
      (t[14] = a),
      (t[15] = n.gizmo.id),
      (t[16] = d),
      (t[17] = p))
    : (p = t[17]);
  let m;
  t[18] === a
    ? (m = t[19])
    : ((m = (0, Q.jsx)(`span`, { className: `font-semibold`, children: a })), (t[18] = a), (t[19] = m));
  let h;
  t[20] !== r || t[21] !== n ? ((h = () => r(n)), (t[20] = r), (t[21] = n), (t[22] = h)) : (h = t[22]);
  let g;
  return (
    t[23] !== u || t[24] !== p || t[25] !== m || t[26] !== h
      ? ((g = (0, Q.jsx)(Ue, {
          className: `w-full min-w-72`,
          description: u,
          icon: p,
          iconContainer: !1,
          presentation: `related`,
          title: m,
          onClick: h,
        })),
        (t[23] = u),
        (t[24] = p),
        (t[25] = m),
        (t[26] = h),
        (t[27] = g))
      : (g = t[27]),
    g
  );
}
function kt(e) {
  switch (e.type) {
    case `browser`:
      return { title: $.webSearch };
    case `canvas`:
      return { title: $.canvas };
    case `python`:
      return { title: $.dataAnalysis };
    case `dalle`:
    case `image_gen`:
      return { title: $.imageGeneration };
    case `memory`:
      return { description: $.memoryDescription, title: $.memory };
    case `plugin`:
      return { description: $.actionsDescription, title: $.actions };
    case `connector`:
      return { title: $.apps };
    case `context_connector`:
    case `function`:
    case `gizmo_contacts`:
    case `intent`:
    case `parallel_browse`:
    case `plugins_prototype`:
    case `retrieval`:
      return null;
  }
}
var At, jt, Mt, Nt, Q, $;
function Pt() {
  return (Pt = e(() => {
    ((At = R()),
      M(),
      w(),
      (jt = t(We(), 1)),
      (Mt = t(fe(), 1)),
      y(),
      (Nt = V()),
      j(),
      J(),
      L(),
      me(),
      i(),
      g(),
      b(),
      k(),
      ce(),
      O(),
      He(),
      z(),
      q(),
      A(),
      u(),
      Se(),
      Ae(),
      ut(),
      ht(),
      Fe(),
      Me(),
      (Q = B()),
      ($ = r({
        webSearch: {
          id: `chatgptConversations.gpts.about.tools.webSearch`,
          defaultMessage: `Web Search`,
          description: `Name of the web search capability in the GPT store detail dialog`,
        },
        canvas: {
          id: `chatgptConversations.gpts.about.tools.canvas`,
          defaultMessage: `Canvas`,
          description: `Name of the canvas capability in the GPT store detail dialog`,
        },
        dataAnalysis: {
          id: `chatgptConversations.gpts.about.tools.dataAnalysis`,
          defaultMessage: `Code Interpreter & Data Analysis`,
          description: `Name of the code interpreter and data analysis capability in the GPT store detail dialog`,
        },
        imageGeneration: {
          id: `chatgptConversations.gpts.about.tools.genericImageGeneration`,
          defaultMessage: `Image Generation`,
          description: `Name of the image generation capability in the GPT store detail dialog, covering current and legacy image tools`,
        },
        memory: {
          id: `chatgptConversations.gpts.about.tools.memory`,
          defaultMessage: `Memory`,
          description: `Name of the memory capability in the GPT store detail dialog`,
        },
        memoryDescription: {
          id: `chatgptConversations.gpts.about.tools.memoryDescription`,
          defaultMessage: `Learns from previous chats to improve future conversations`,
          description: `Description of the memory capability in the GPT store detail dialog`,
        },
        actions: {
          id: `chatgptConversations.gpts.about.tools.actions`,
          defaultMessage: `Actions`,
          description: `Name of the actions capability in the GPT store detail dialog`,
        },
        actionsDescription: {
          id: `chatgptConversations.gpts.about.tools.actionsDescription`,
          defaultMessage: `Retrieves or takes actions outside of ChatGPT`,
          description: `Description of the actions capability in the GPT store detail dialog`,
        },
        apps: {
          id: `chatgptConversations.gpts.about.tools.apps`,
          defaultMessage: `Apps`,
          description: `Name of the apps capability in the GPT store detail dialog`,
        },
      })));
  }))();
}
export { xt as a, _t as c, yt as i, vt as l, Pt as n, Ct as o, bt as r, gt as s, wt as t };
//# sourceMappingURL=gpt-about-dialog-b86bfd728257.js.map
