const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-d71e1fa83ee6.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./workspace-plugin-permissions-4ff2558a0323.js",
      "./permission-explanation-eb8b87e3721b.js",
      "./gpt-management-url-e06e14b9dc20.js",
      "./migrated-plugin-bd1222c52d99.js",
      "./chat-choice-view-ff40e9769623.js",
      "./retirement-f17fd3e88db9.js",
      "./skipped-files-e1019f2b225e.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $St as r,
  $W as i,
  $st as a,
  Bst as o,
  CNt as s,
  DB as c,
  F3 as l,
  FBt as u,
  I3 as d,
  JO as f,
  KO as p,
  LNt as m,
  MK as h,
  Mst as g,
  NO as _,
  NSt as v,
  OB as y,
  OFt as b,
  OK as x,
  OU as ee,
  PBt as S,
  PO as C,
  Qst as te,
  TY as w,
  USt as ne,
  Vrt as T,
  WO as re,
  XOt as E,
  Y3 as ie,
  YOt as D,
  Z3 as O,
  ZSt as k,
  _W as ae,
  ck as A,
  dH as oe,
  dw as j,
  e6 as se,
  fw as M,
  gu as ce,
  hu as N,
  iCt as le,
  jst as P,
  kFt as F,
  mJ as I,
  nB as ue,
  nCt as de,
  okt as fe,
  qO as pe,
  qrt as me,
  rB as L,
  rk as he,
  tk as ge,
  tkt as R,
  vD as z,
  wH as B,
  yD as V,
  zst as _e,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as H,
  Cjr as ve,
  D5n as ye,
  DEt as be,
  FW as xe,
  IIr as U,
  LIr as W,
  OEt as Se,
  PW as Ce,
  Sjr as G,
  TEt as we,
  bIr as K,
  iRr as Te,
  imr as q,
  jcn as J,
  rmr as Ee,
  tyr as Y,
  wEt as De,
  wcn as Oe,
  xIr as ke,
  xjr as Ae,
} from "./app-initial-ad16eaadf81f.js";
import { Mg as je, Ng as Me } from "./app-primary-3e00728c2a4c.js";
import { r as Ne, t as Pe } from "./retirement-f17fd3e88db9.js";
import { n as Fe, t as Ie } from "./card-tile-50cbf58d3a76.js";
import { n as Le, t as Re } from "./gpt-report-menu-item-a5ae92b8bf9d.js";
import { a as ze, i as Be, o as Ve, r as He, t as Ue } from "./workspace-plugin-permissions-4ff2558a0323.js";
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
} from "./permission-explanation-eb8b87e3721b.js";
import { i as tt, r as nt, t as rt } from "./notices-e87d5e3af0c6.js";
function it(e) {
  let t = (0, ct.c)(14),
    { resource: n, onClose: r, onStartChat: i } = e,
    a = ve(`2160578039`),
    o;
  t[0] !== n.gizmo.id || t[1] !== n.gizmo.migrated_plugin_id
    ? ((o = { gizmoId: n.gizmo.id, pluginId: n.gizmo.migrated_plugin_id }),
      (t[0] = n.gizmo.id),
      (t[1] = n.gizmo.migrated_plugin_id),
      (t[2] = o))
    : (o = t[2]);
  let s = de(je, o),
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
    { resource: n, pluginId: r, onClose: i, onStartChat: a } = e,
    o = ne(),
    { data: s, isPending: l, isFetching: u, isError: d, refetch: f } = de(qe, r),
    p = l || u,
    m = s != null && !p && !d,
    h;
  t[0] === n.gizmo.display.name
    ? (h = t[1])
    : ((h = n.gizmo.display.name.trim()), (t[0] = n.gizmo.display.name), (t[1] = h));
  let g = h,
    _;
  if (d && !p) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.about.retryPluginAccess`,
          defaultMessage: `Try again`,
          description: `Retry checking the current viewer’s access to the migrated plugin`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (_ = e));
  } else if (s?.type === `admin`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.migration.viewPlugin`,
          defaultMessage: `View Plugin`,
          description: `Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (_ = e));
  } else if (p || m) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.about.usePlugin`,
          defaultMessage: `Use plugin`,
          description: `Primary button in a migrated GPT's directory details dialog; closes the dialog and opens the migrated plugin's details without installing or running it`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (_ = e));
  } else {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.about.explorePlugins`,
          defaultMessage: `Explore plugins`,
          description: `Button in a migrated GPT's directory details dialog when its plugin is inaccessible; closes the dialog and opens the Plugins directory`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (_ = e));
  }
  let v;
  if (d) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.about.pluginAccessError`,
          defaultMessage: `We couldn’t check your access to this plugin. Try again.`,
          description: `A failed access lookup for a migrated GPT plugin; retry does not migrate again`,
        })),
        (t[6] = e))
      : (e = t[6]),
      (v = e));
  } else if (!p && !m) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.about.pluginAccessDenied`,
          defaultMessage: `This plugin isn’t available to you`,
          description: `Migrated GPT details when the plugin is inaccessible to this viewer`,
        })),
        (t[7] = e))
      : (e = t[7]),
      (v = e));
  } else if (s?.type === `admin`) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.about.migratedAdminDescription`,
          defaultMessage: `This GPT has been migrated. You can view the plugin in workspace admin settings`,
          description: `Notice in migrated GPT details for an administrator whose access opens the admin page, which does not offer starting a plugin chat`,
        })),
        (t[8] = e))
      : (e = t[8]),
      (v = e));
  } else if (g) {
    let e;
    (t[9] === g
      ? (e = t[10])
      : ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.about.migratedDescriptionNamed`,
          defaultMessage: `This GPT has been migrated. Use the plugin to continue using {gptName}.`,
          description: `Notice in a migrated GPT details dialog directing users to its plugin. gptName is the GPT display name.`,
          values: { gptName: g },
        })),
        (t[9] = g),
        (t[10] = e)),
      (v = e));
  } else {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.about.migratedDescription`,
          defaultMessage: `This GPT has been migrated. Use the plugin to continue using it.`,
          description: `Notice in a migrated GPT details dialog directing users to its plugin when the GPT name is empty.`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (v = e));
  }
  let y;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, X.jsx)(c, { asset: M, className: `text-secondary` })), (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] === g
    ? (b = t[14])
    : ((b = g
        ? (0, X.jsx)(R, {
            id: `chatgptConversations.gpts.about.migratedNamedTitle`,
            defaultMessage: `{gptName} is now a plugin`,
            description: `Heading in a GPT directory details dialog when it has been migrated to a plugin; gptName is the GPT's nonempty display name and may be long`,
            values: { gptName: g },
          })
        : (0, X.jsx)(R, {
            id: `chatgptConversations.gpts.about.migratedTitle`,
            defaultMessage: `This GPT is now a plugin`,
            description: `Fallback heading in a GPT directory details dialog when it has been migrated to a plugin but has no display name`,
          })),
      (t[13] = g),
      (t[14] = b));
  let x;
  t[15] !== v || t[16] !== b
    ? ((x = (0, X.jsx)(z, { variant: `catalog`, icon: y, title: b, content: v })),
      (t[15] = v),
      (t[16] = b),
      (t[17] = x))
    : (x = t[17]);
  let ee;
  t[18] !== m || t[19] !== s || t[20] !== d || t[21] !== o || t[22] !== i || t[23] !== r || t[24] !== f
    ? ((ee = () => {
        if (d) {
          f();
          return;
        }
        (i(), m ? Ge(r, s, o) : o(`/plugins`));
      }),
      (t[18] = m),
      (t[19] = s),
      (t[20] = d),
      (t[21] = o),
      (t[22] = i),
      (t[23] = r),
      (t[24] = f),
      (t[25] = ee))
    : (ee = t[25]);
  let S;
  t[26] !== p || t[27] !== _ || t[28] !== ee
    ? ((S = (0, X.jsx)(ie, {
        className: `w-full`,
        color: `primary`,
        loading: p,
        size: `promotionalAction`,
        onClick: ee,
        children: _,
      })),
      (t[26] = p),
      (t[27] = _),
      (t[28] = ee),
      (t[29] = S))
    : (S = t[29]);
  let C;
  t[30] !== a || t[31] !== n ? ((C = () => a(n)), (t[30] = a), (t[31] = n), (t[32] = C)) : (C = t[32]);
  let te;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, X.jsx)(R, {
        id: `chatgptConversations.gpts.about.keepUsingGpt`,
        defaultMessage: `Keep using GPT`,
        description: `Secondary action in a migrated GPT details dialog that opens a chat with the original GPT instead of its plugin`,
      })),
      (t[33] = te))
    : (te = t[33]);
  let w;
  t[34] === C
    ? (w = t[35])
    : ((w = (0, X.jsx)(ie, {
        className: `w-full`,
        color: `ghostSecondary`,
        size: `promotionalLink`,
        onClick: C,
        children: te,
      })),
      (t[34] = C),
      (t[35] = w));
  let T;
  return (
    t[36] !== x || t[37] !== S || t[38] !== w
      ? ((T = (0, X.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [x, S, w] })),
        (t[36] = x),
        (t[37] = S),
        (t[38] = w),
        (t[39] = T))
      : (T = t[39]),
    T
  );
}
function ot(e) {
  let t = (0, ct.c)(50),
    { resource: n, remigration: i, onClose: a, onStartChat: o } = e,
    s = r(te),
    l = ne(),
    u = fe(),
    d = le(ze),
    f = le(Ve),
    p = G(`2513446768`),
    m;
  t[0] !== p || t[1] !== u
    ? ((m = u.formatDate(Pe(p.get(`retirement_date`, ``)), {
        month: `long`,
        day: `numeric`,
        timeZone: `UTC`,
      })),
      (t[0] = p),
      (t[1] = u),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    { accountId: g, userId: _ } = q(),
    v;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = { preview: !1 }), (t[3] = v)) : (v = t[3]);
  let { data: y } = J(void 0, v),
    b = de(ke, `2562735250`)?.get(`enabled`, !1) === !0,
    x = He(y, ve(`1355972088`)),
    ee = G(`2826703856`).get(`enable_gpt_fe_controls`, !1),
    {
      data: S,
      isPending: C,
      isError: w,
    } = de(U, g ?? ``, { enabled: g != null && y?.id === g && y.structure === `workspace` && (x || ee) });
  if (
    b &&
    x &&
    !w &&
    et({ resource: n, remigration: i, account: y, accountId: g, permissions: S?.permissions, rbacEnabled: x })
  ) {
    let e;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(rt, { surface: `gpt` })), (t[4] = e))
      : (e = t[4]);
    let r;
    return (
      t[5] !== o || t[6] !== n
        ? ((r = (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [e, (0, X.jsx)(st, { onClick: () => o(n) })],
          })),
          (t[5] = o),
          (t[6] = n),
          (t[7] = r))
        : (r = t[7]),
      r
    );
  }
  if (!b || !Qe({ resource: n, remigration: i, account: y, accountId: g, userId: _, enabled: !0 })) {
    let e;
    t[8] !== l || t[9] !== a
      ? ((e = (0, X.jsx)(nt, {
          currentGpt: !0,
          openTarget: `external-browser`,
          onExplore: () => {
            (a(), l(`/plugins`));
          },
        })),
        (t[8] = l),
        (t[9] = a),
        (t[10] = e))
      : (e = t[10]);
    let r;
    t[11] !== o || t[12] !== n
      ? ((r = (0, X.jsx)(st, { onClick: () => o(n) })), (t[11] = o), (t[12] = n), (t[13] = r))
      : (r = t[13]);
    let i;
    return (
      t[14] !== e || t[15] !== r
        ? ((i = (0, X.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [e, r] })),
          (t[14] = e),
          (t[15] = r),
          (t[16] = i))
        : (i = t[16]),
      i
    );
  }
  let T = Ke({ account: y, rbacEnabled: ee, permissions: S?.permissions, isPending: C, isError: w }),
    re = Xe({
      resource: n,
      remigration: i,
      account: y,
      accountId: g,
      userId: _,
      enabled: !0,
      gptPermission: T,
    }),
    E = Ue(y, x, S?.permissions),
    D;
  if (f) {
    let e;
    (t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip`,
          defaultMessage: `Plugin creation is disabled for this workspace`,
          description: `Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.`,
        })),
        (t[17] = e))
      : (e = t[17]),
      (D = e));
  } else if (T !== `allowed`) {
    let e;
    (t[18] === T ? (e = t[19]) : ((e = (0, X.jsx)($e, { permission: T })), (t[18] = T), (t[19] = e)),
      (D = e));
  } else if (!E) {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(R, {
          id: `chatgptConversations.gpts.migration.permissionRequired`,
          defaultMessage: `Your workspace must allow you to use plugins to migrate this GPT`,
          description: `Tooltip on a disabled GPT migration button for workspace users without permission to use plugins, or while that permission is loading`,
        })),
        (t[20] = e))
      : (e = t[20]),
      (D = e));
  }
  let O;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(c, { asset: M, className: `text-secondary` })), (t[21] = O))
    : (O = t[21]);
  let k;
  t[22] === h
    ? (k = t[23])
    : ((k = (0, X.jsx)(R, {
        id: `chatgptConversations.gpts.about.migrateTitle`,
        defaultMessage: `Migrate this GPT to a plugin by {deadline}`,
        description: `Banner in a GPT details dialog for its eligible creator or administrator; deadline is the localized month and day when unmigrated GPTs retire.`,
        values: { deadline: h },
      })),
      (t[22] = h),
      (t[23] = k));
  let ae;
  t[24] === h
    ? (ae = t[25])
    : ((ae = (0, X.jsx)(R, {
        id: `chatgptConversations.gpts.about.migrateDescription.editingLocked`,
        defaultMessage: `Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
        description: `Body of the migration notice in a GPT details dialog, shown to the GPT creator or an eligible workspace administrator or owner before migration. Explains that migration preserves access through a plugin after GPT retirement, prevents further edits to the original GPT, and allows future updates to the plugin. Placeholder {deadline} is a nonempty, localized UTC month and day with no year, such as December 11. The Migrate to plugin button below opens confirmation; the separate Start chat button keeps using the original GPT. These three complete sentences can wrap onto multiple lines.`,
        values: { deadline: h },
      })),
      (t[24] = h),
      (t[25] = ae));
  let A;
  t[26] !== k || t[27] !== ae
    ? ((A = (0, X.jsx)(z, { variant: `announcement`, icon: O, title: k, content: ae })),
      (t[26] = k),
      (t[27] = ae),
      (t[28] = A))
    : (A = t[28]);
  let oe = !d || !E || !re,
    j;
  t[29] !== re || t[30] !== E || t[31] !== a || t[32] !== i || t[33] !== n || t[34] !== s
    ? ((j = () => {
        s.get(ze) && re && E && (a(), H(s, lt, { resource: n, remigration: i }));
      }),
      (t[29] = re),
      (t[30] = E),
      (t[31] = a),
      (t[32] = i),
      (t[33] = n),
      (t[34] = s),
      (t[35] = j))
    : (j = t[35]);
  let se;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, X.jsx)(R, {
        id: `chatgptConversations.gpts.migration.migrate`,
        defaultMessage: `Migrate to plugin`,
        description: `Button in GPT details shown to its eligible owner or workspace administrator; opens a confirmation dialog to create a private plugin from the published GPT`,
      })),
      (t[36] = se))
    : (se = t[36]);
  let ce;
  t[37] !== oe || t[38] !== j
    ? ((ce = (0, X.jsx)(ie, {
        className: `w-full`,
        "aria-disabled": oe,
        color: `primary`,
        size: `detailAction`,
        onClick: j,
        children: se,
      })),
      (t[37] = oe),
      (t[38] = j),
      (t[39] = ce))
    : (ce = t[39]);
  let N;
  t[40] !== D || t[41] !== ce
    ? ((N = (0, X.jsx)(ue, { cloneCustomTrigger: !0, tooltipContent: D, children: ce })),
      (t[40] = D),
      (t[41] = ce),
      (t[42] = N))
    : (N = t[42]);
  let P;
  t[43] !== o || t[44] !== n
    ? ((P = (0, X.jsx)(st, { secondary: !0, onClick: () => o(n) })), (t[43] = o), (t[44] = n), (t[45] = P))
    : (P = t[45]);
  let F;
  return (
    t[46] !== N || t[47] !== P || t[48] !== A
      ? ((F = (0, X.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [A, N, P] })),
        (t[46] = N),
        (t[47] = P),
        (t[48] = A),
        (t[49] = F))
      : (F = t[49]),
    F
  );
}
function st(e) {
  let t = (0, ct.c)(8),
    { secondary: n, onClick: r } = e,
    i = n !== void 0 && n,
    a = i ? `self-center` : `h-12 w-full justify-center`,
    o = i ? `ghostSecondary` : `primary`,
    s = i ? `dialogGhost` : `large`,
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = i
        ? (0, X.jsx)(`span`, {
            className: `underline decoration-from-font underline-offset-2`,
            children: (0, X.jsx)(R, {
              id: `chatgptConversations.gpts.about.startChatLink`,
              defaultMessage: `Start chat`,
              description: `Secondary text action below the migration notice in a GPT details dialog; starts a new chat with the original GPT.`,
            }),
          })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(oe, {}),
              (0, X.jsx)(R, {
                id: `chatgptConversations.gpts.about.startChat`,
                defaultMessage: `Start Chat`,
                description: `Button in the GPT store detail dialog that starts a new chat with the selected GPT; appears below migration when that action is available`,
              }),
            ],
          })),
      (t[0] = i),
      (t[1] = c));
  let l;
  return (
    t[2] !== r || t[3] !== a || t[4] !== o || t[5] !== s || t[6] !== c
      ? ((l = (0, X.jsx)(ie, { className: a, color: o, radius: `full`, size: s, onClick: r, children: c })),
        (t[2] = r),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
var ct, X, lt;
function ut() {
  return (ut = e(() => {
    ((ct = S()),
      j(),
      k(),
      E(),
      v(),
      W(),
      Ee(),
      Be(),
      Oe(),
      V(),
      O(),
      y(),
      w(),
      l(),
      ye(),
      L(),
      a(),
      Ae(),
      K(),
      Je(),
      Ze(),
      tt(),
      Ye(),
      Me(),
      Ne(),
      (X = m()),
      F(),
      (lt = d(
        async () =>
          (
            await b(
              async () => {
                let { GptPluginMigrationDialog: e } = await import(`./dialog-d71e1fa83ee6.js`);
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
        return Te.safeGet(`/gizmos/{gizmo_id}/about`, { parameters: { path: { gizmo_id: r } }, signal: t });
      }),
      (t[3] = r),
      (t[4] = a));
  let o;
  t[5] !== i || t[6] !== a
    ? ((o = { queryKey: i, queryFn: a, staleTime: _e.ONE_MINUTE }), (t[5] = i), (t[6] = a), (t[7] = o))
    : (o = t[7]);
  let { data: s } = g(o);
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
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Z.jsx)(I, {})), (t[0] = e)) : (e = t[0]);
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
              : (0, Z.jsx)(R, {
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
              ? (0, Z.jsx)(R, {
                  id: `chatgptConversations.gpts.about.category`,
                  defaultMessage: `Category`,
                  description: `Caption below the GPT category in the directory About modal`,
                })
              : (0, Z.jsx)(R, {
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
    ((mt = S()), P(), E(), Y(), w(), o(), (Z = m()));
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
    c = ve(`2160578039`),
    l = null;
  typeof i == `string` ? (l = i) : c && (l = i.gizmo.id);
  let { data: u, isError: d, refetch: f } = de(De, l),
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
    t[2] !== d || t[3] !== f
      ? ((r = (0, Q.jsx)(`div`, {
          className: `flex h-full min-h-80 flex-col items-center justify-center gap-4 bg-surface-secondary p-8 text-center`,
          children: d
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(pe, {
                    className: `heading-lg font-semibold text-default`,
                    children: (0, Q.jsx)(R, {
                      id: `chatgptConversations.gpts.about.loadError`,
                      defaultMessage: `Couldn't load this GPT`,
                      description: `Error title shown when a GPT store detail dialog cannot load its GPT`,
                    }),
                  }),
                  (0, Q.jsx)(p, {
                    className: `text-secondary`,
                    children: (0, Q.jsx)(R, {
                      id: `chatgptConversations.gpts.about.loadErrorDescription`,
                      defaultMessage: `Check your connection and try again.`,
                      description: `Error description shown when a GPT store detail dialog cannot load its GPT`,
                    }),
                  }),
                  (0, Q.jsx)(ie, {
                    color: `secondary`,
                    onClick: () => {
                      f();
                    },
                    children: (0, Q.jsx)(R, {
                      id: `chatgptConversations.gpts.about.retry`,
                      defaultMessage: `Try again`,
                      description: `Button label for retrying a failed GPT store detail request`,
                    }),
                  }),
                ],
              })
            : (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(pe, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(R, {
                      id: `chatgptConversations.gpts.about.loading`,
                      defaultMessage: `Loading GPT details`,
                      description: `Accessible title while a GPT store detail dialog is loading`,
                    }),
                  }),
                  (0, Q.jsx)(p, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(R, {
                      id: `chatgptConversations.gpts.about.loadingDescription`,
                      defaultMessage: `Loading information about this GPT`,
                      description: `Accessible description while a GPT store detail dialog is loading`,
                    }),
                  }),
                  (0, Q.jsx)(n, {}),
                ],
              }),
        })),
        (t[2] = d),
        (t[3] = f),
        (t[4] = r))
      : (r = t[4]);
    let i;
    return (
      t[5] !== e || t[6] !== r
        ? ((i = (0, Q.jsx)(re, {
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
    { accountId: n, isOwnerAndWorkspaceAllowsSpecific: a, resource: o, onClose: s, onStartChat: l } = e,
    u = r(te),
    d = fe(),
    f = ve(`1825130190`),
    m = ve(`2160578039`),
    v;
  t[0] !== o.gizmo.id || t[1] !== o.gizmo.migrated_plugin_id
    ? ((v = { gizmoId: o.gizmo.id, pluginId: o.gizmo.migrated_plugin_id }),
      (t[0] = o.gizmo.id),
      (t[1] = o.gizmo.migrated_plugin_id),
      (t[2] = v))
    : (v = t[2]);
  let y = !de(je, v) && m && o.gizmo.gizmo_type === `gpt` && o.gizmo.migrated_plugin_id != null,
    [b, S] = (0, Nt.useState)(!1),
    [C, w] = (0, Nt.useState)(!1),
    { data: ne } = le(we),
    T = !y,
    E;
  t[3] === o.gizmo.author.user_id
    ? (E = t[4])
    : ((E = () =>
        Te.safeGet(`/gizmo_creators/{uid}/gizmos`, {
          parameters: { path: { uid: o.gizmo.author.user_id } },
        })),
      (t[3] = o.gizmo.author.user_id),
      (t[4] = E));
  let D;
  t[5] !== n || t[6] !== o.gizmo.author.user_id
    ? ((D = St(n, o.gizmo.author.user_id)), (t[5] = n), (t[6] = o.gizmo.author.user_id), (t[7] = D))
    : (D = t[7]);
  let O;
  t[8] !== T || t[9] !== E || t[10] !== D
    ? ((O = { enabled: T, queryFn: E, queryKey: D, staleTime: _e.ONE_MINUTE }),
      (t[8] = T),
      (t[9] = E),
      (t[10] = D),
      (t[11] = O))
    : (O = t[11]);
  let { data: k, isPending: A } = g(O),
    oe;
  t[12] === d
    ? (oe = t[13])
    : ((oe = d.formatMessage({
        id: `chatgptConversations.gpts.about.actions`,
        defaultMessage: `GPT actions`,
        description: `Accessible label for the overflow menu in the GPT store detail dialog`,
      })),
      (t[12] = d),
      (t[13] = oe));
  let j = oe,
    se;
  t[14] !== o.gizmo.display.name || t[15] !== o.gizmo.id
    ? ((se = o.gizmo.display.name.trim() || o.gizmo.id),
      (t[14] = o.gizmo.display.name),
      (t[15] = o.gizmo.id),
      (t[16] = se))
    : (se = t[16]);
  let M = se,
    N;
  t[17] === o.gizmo.author.display_name
    ? (N = t[18])
    : ((N = o.gizmo.author.display_name?.trim() || void 0),
      (t[17] = o.gizmo.author.display_name),
      (t[18] = N));
  let P = N,
    F;
  t[19] !== ne || t[20] !== o.gizmo.id
    ? ((F = ne?.some((e) => {
        let { item: t } = e;
        return t.gizmo.id === o.gizmo.id;
      })),
      (t[19] = ne),
      (t[20] = o.gizmo.id),
      (t[21] = F))
    : (F = t[21]);
  let I = F,
    L,
    z,
    B,
    V,
    H,
    ye,
    be,
    xe,
    U,
    W,
    G,
    K,
    q,
    J,
    Ee,
    Y;
  if (
    t[22] !== n ||
    t[23] !== j ||
    t[24] !== b ||
    t[25] !== P ||
    t[26] !== k?.items ||
    t[27] !== d ||
    t[28] !== A ||
    t[29] !== y ||
    t[30] !== a ||
    t[31] !== I ||
    t[32] !== C ||
    t[33] !== M ||
    t[34] !== s ||
    t[35] !== l ||
    t[36] !== o ||
    t[37] !== f ||
    t[38] !== u
  ) {
    let e = (0, Mt.default)((0, jt.default)(o.tools.map(kt)), Dt),
      r = k?.items.filter((e) => {
        let { gizmo: t } = e;
        return t.gizmo_type !== `snorlax` && _t(t.tags, a) == null;
      }),
      m = r?.[0]?.gizmo.author.display_name?.trim() || P;
    if (
      t[55] !== n ||
      t[56] !== j ||
      t[57] !== b ||
      t[58] !== P ||
      t[59] !== d ||
      t[60] !== y ||
      t[61] !== I ||
      t[62] !== C ||
      t[63] !== M ||
      t[64] !== s ||
      t[65] !== l ||
      t[66] !== o ||
      t[67] !== f ||
      t[68] !== u
    ) {
      let e = o.gizmo.display.prompt_starters?.slice(0, 4);
      ((L = re),
        (W = !0),
        (G = `flex max-h-full flex-col`),
        t[82] !== j ||
        t[83] !== b ||
        t[84] !== d ||
        t[85] !== I ||
        t[86] !== C ||
        t[87] !== s ||
        t[88] !== o ||
        t[89] !== u
          ? ((K =
              o.gizmo.live_version === 0
                ? null
                : (0, Q.jsxs)(ge, {
                    align: `end`,
                    contentWidth: `menu`,
                    open: b,
                    onOpenChange: S,
                    side: `bottom`,
                    sideOffset: 4,
                    triggerButton: (0, Q.jsx)(ue, {
                      cloneCustomTrigger: !0,
                      tooltipContent: j,
                      triggerPopupOpen: b,
                      children: (0, Q.jsx)(ie, {
                        "aria-label": j,
                        color: `ghostActive`,
                        size: `icon`,
                        uniform: !0,
                        children: (0, Q.jsx)(ee, {}),
                      }),
                    }),
                    children: [
                      (0, Q.jsxs)(he.Item, {
                        disabled: I == null,
                        onSelect: () => {
                          I != null &&
                            Se(u, o, !I).catch(() => {
                              u.get(me).danger(
                                d.formatMessage({
                                  id: `chatgptConversations.gpts.about.pinFailed`,
                                  defaultMessage: `Couldn't update pinned GPT`,
                                  description: `Error toast shown when pinning or unpinning a GPT from its store detail dialog fails`,
                                }),
                                { errorAnalytics: { toastId: `chatgptConversations.gpts.about.pinFailed` } },
                              );
                            });
                        },
                        children: [
                          (0, Q.jsx)(he.ItemIcon, { children: I ? (0, Q.jsx)(h, {}) : (0, Q.jsx)(x, {}) }),
                          I
                            ? (0, Q.jsx)(R, {
                                id: `chatgptConversations.gpts.about.unpin`,
                                defaultMessage: `Remove from sidebar`,
                                description: `Overflow menu action in the GPT store detail dialog that removes the GPT from the sidebar`,
                              })
                            : (0, Q.jsx)(R, {
                                id: `chatgptConversations.gpts.about.pin`,
                                defaultMessage: `Keep in sidebar`,
                                description: `Overflow menu action in the GPT store detail dialog that pins the GPT in the sidebar`,
                              }),
                        ],
                      }),
                      o.gizmo.share_recipient === `private`
                        ? null
                        : (0, Q.jsxs)(he.Item, {
                            onSelect: () => {
                              let e = o.gizmo.short_url?.trim() || o.gizmo.id;
                              _(`https://chatgpt.com/g/${encodeURIComponent(e)}`).then(w);
                            },
                            children: [
                              (0, Q.jsx)(he.ItemIcon, { children: (0, Q.jsx)(i, {}) }),
                              C
                                ? (0, Q.jsx)(R, {
                                    id: `chatgptConversations.gpts.about.copiedLink`,
                                    defaultMessage: `Copied link`,
                                    description: `Temporary confirmation in the GPT store detail dialog overflow menu after its public link was copied`,
                                  })
                                : (0, Q.jsx)(R, {
                                    id: `chatgptConversations.gpts.about.copyLink`,
                                    defaultMessage: `Copy link`,
                                    description: `Overflow menu action in the GPT store detail dialog that copies the GPT's public ChatGPT link`,
                                  }),
                            ],
                          }),
                      (0, Q.jsx)(Re, { resource: o, onSelect: s }),
                    ],
                  })),
            (t[82] = j),
            (t[83] = b),
            (t[84] = d),
            (t[85] = I),
            (t[86] = C),
            (t[87] = s),
            (t[88] = o),
            (t[89] = u),
            (t[90] = K))
          : (K = t[90]),
        (q = y ? `catalogDetail` : `wide`),
        (J = y ? `compact` : `default`),
        (Ee = y ? `catalog` : `promotional`),
        t[91] === s
          ? (Y = t[92])
          : ((Y = (e) => {
              e || s();
            }),
            (t[91] = s),
            (t[92] = Y)),
        (U = `flex min-h-0 flex-col`),
        (z = `min-h-0 flex-1 overflow-y-auto px-5 pt-20 pb-4 sm:px-10`));
      let r;
      t[93] === o.gizmo.display.profile_picture_url
        ? (r = t[94])
        : ((r = o.gizmo.display.profile_picture_url?.trim() || null),
          (t[93] = o.gizmo.display.profile_picture_url),
          (t[94] = r));
      let a;
      t[95] !== M || t[96] !== o.gizmo.id || t[97] !== r
        ? ((a = (0, Q.jsx)(Ce, {
            className: `mb-1 size-20`,
            customGpt: { iconUrl: r, id: o.gizmo.id, name: M },
            presentation: `avatar`,
          })),
          (t[95] = M),
          (t[96] = o.gizmo.id),
          (t[97] = r),
          (t[98] = a))
        : (a = t[98]);
      let m;
      t[99] === M
        ? (m = t[100])
        : ((m = (0, Q.jsx)(pe, {
            className: `text-heading-lg leading-7 font-semibold wrap-anywhere text-default`,
            children: M,
          })),
          (t[99] = M),
          (t[100] = m));
      let g;
      t[101] !== P || t[102] !== o.gizmo.author.link_to
        ? ((g =
            P == null
              ? null
              : (0, Q.jsxs)(`div`, {
                  className: `flex items-center gap-1 text-base text-secondary select-none`,
                  children: [
                    (0, Q.jsx)(R, {
                      id: `chatgptConversations.gpts.about.byAuthor`,
                      defaultMessage: `By {author}`,
                      description: `Byline in the GPT store detail dialog naming the GPT's creator; author is the creator's display name`,
                      values: { author: P },
                    }),
                    o.gizmo.author.link_to ? (0, Q.jsx)(ae, {}) : (0, Q.jsx)(c, { asset: ce }),
                  ],
                })),
          (t[101] = P),
          (t[102] = o.gizmo.author.link_to),
          (t[103] = g))
        : (g = t[103]);
      let v;
      (t[104] !== M || t[105] !== o.gizmo.display.description
        ? ((v =
            o.gizmo.display.description == null
              ? (0, Q.jsx)(p, {
                  className: `sr-only`,
                  children: (0, Q.jsx)(R, {
                    id: `chatgptConversations.gpts.about.descriptionFallback`,
                    defaultMessage: `Details for {name}`,
                    description: `Accessible fallback description for a GPT store detail dialog when the GPT has no description; name is the GPT's name`,
                    values: { name: M },
                  }),
                })
              : (0, Q.jsx)(p, {
                  className: `max-w-md text-base text-pretty text-default`,
                  children: o.gizmo.display.description,
                })),
          (t[104] = M),
          (t[105] = o.gizmo.display.description),
          (t[106] = v))
        : (v = t[106]),
        t[107] !== a || t[108] !== m || t[109] !== g || t[110] !== v
          ? ((B = (0, Q.jsxs)(`div`, {
              className: `flex flex-col items-center gap-2 text-center`,
              children: [a, m, g, v],
            })),
            (t[107] = a),
            (t[108] = m),
            (t[109] = g),
            (t[110] = v),
            (t[111] = B))
          : (B = t[111]),
        t[112] !== n || t[113] !== o.gizmo.id
          ? ((V = (0, Q.jsx)(dt, { accountId: n, gizmoId: o.gizmo.id })),
            (t[112] = n),
            (t[113] = o.gizmo.id),
            (t[114] = V))
          : (V = t[114]),
        (H =
          !y && f && o.gizmo.live_version !== 0 && e != null && e.length > 0
            ? (0, Q.jsxs)(`section`, {
                className: `mt-10`,
                children: [
                  (0, Q.jsx)(`h2`, {
                    className: `heading-xl mb-3 font-semibold text-default select-none`,
                    children: (0, Q.jsx)(R, {
                      id: `chatgptConversations.gpts.about.conversationStarters`,
                      defaultMessage: `Conversation Starters`,
                      description: `Section heading in a GPT's details dialog for end users. The section contains suggested first messages; selecting one opens that GPT's chat and puts the message in the composer for review before sending. Keep this heading short.`,
                    }),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `flex flex-wrap gap-2`,
                    children: e.map((e) =>
                      (0, Q.jsx)(
                        ie,
                        {
                          allowShrink: !0,
                          color: `secondary`,
                          size: `medium`,
                          onClick: () => l(o, e),
                          children: (0, Q.jsx)(`span`, { className: `whitespace-normal`, children: e }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              })
            : null),
        (t[55] = n),
        (t[56] = j),
        (t[57] = b),
        (t[58] = P),
        (t[59] = d),
        (t[60] = y),
        (t[61] = I),
        (t[62] = C),
        (t[63] = M),
        (t[64] = s),
        (t[65] = l),
        (t[66] = o),
        (t[67] = f),
        (t[68] = u),
        (t[69] = L),
        (t[70] = z),
        (t[71] = B),
        (t[72] = V),
        (t[73] = H),
        (t[74] = U),
        (t[75] = W),
        (t[76] = G),
        (t[77] = K),
        (t[78] = q),
        (t[79] = J),
        (t[80] = Ee),
        (t[81] = Y));
    } else
      ((L = t[69]),
        (z = t[70]),
        (B = t[71]),
        (V = t[72]),
        (H = t[73]),
        (U = t[74]),
        (W = t[75]),
        (G = t[76]),
        (K = t[77]),
        (q = t[78]),
        (J = t[79]),
        (Ee = t[80]),
        (Y = t[81]));
    ((ye =
      y || e.length === 0
        ? null
        : (0, Q.jsxs)(`section`, {
            className: `mt-10`,
            children: [
              (0, Q.jsx)(`h2`, {
                className: `heading-xl mb-3 font-semibold text-default select-none`,
                children: (0, Q.jsx)(R, {
                  id: `chatgptConversations.gpts.about.capabilities`,
                  defaultMessage: `Capabilities`,
                  description: `Heading above the tools available to a GPT in its store detail dialog`,
                }),
              }),
              (0, Q.jsx)(`div`, { className: `flex flex-col gap-2`, children: e.map(Et) }),
            ],
          })),
      (be =
        !y && r == null && A
          ? (0, Q.jsx)(`div`, {
              "aria-hidden": !0,
              className: `mt-10 h-24 animate-pulse rounded-xl bg-surface`,
            })
          : null),
      (xe =
        !y && r != null && r.length > 0
          ? (0, Q.jsxs)(`section`, {
              className: `mt-10`,
              children: [
                (0, Q.jsx)(`h2`, {
                  className: `heading-xl mb-3 font-semibold text-default select-none`,
                  children:
                    m == null
                      ? (0, Q.jsx)(R, {
                          id: `chatgptConversations.gpts.about.moreByCreatorFallback`,
                          defaultMessage: `More from this creator`,
                          description: `Heading above more GPTs from the same creator when the creator has no display name`,
                        })
                      : (0, Q.jsx)(R, {
                          id: `chatgptConversations.gpts.about.moreByCreator`,
                          defaultMessage: `More by {creatorName}`,
                          description: `Heading above more GPTs from the same creator in the GPT store detail dialog; creatorName is the creator's display name`,
                          values: { creatorName: m },
                        }),
                }),
                (0, Q.jsx)(`div`, {
                  className: `flex gap-2 overflow-x-auto pb-1`,
                  children: r.map((e) => (0, Q.jsx)(Ot, { resource: e, onStartChat: l }, e.gizmo.id)),
                }),
              ],
            })
          : null),
      (t[22] = n),
      (t[23] = j),
      (t[24] = b),
      (t[25] = P),
      (t[26] = k?.items),
      (t[27] = d),
      (t[28] = A),
      (t[29] = y),
      (t[30] = a),
      (t[31] = I),
      (t[32] = C),
      (t[33] = M),
      (t[34] = s),
      (t[35] = l),
      (t[36] = o),
      (t[37] = f),
      (t[38] = u),
      (t[39] = L),
      (t[40] = z),
      (t[41] = B),
      (t[42] = V),
      (t[43] = H),
      (t[44] = ye),
      (t[45] = be),
      (t[46] = xe),
      (t[47] = U),
      (t[48] = W),
      (t[49] = G),
      (t[50] = K),
      (t[51] = q),
      (t[52] = J),
      (t[53] = Ee),
      (t[54] = Y));
  } else
    ((L = t[39]),
      (z = t[40]),
      (B = t[41]),
      (V = t[42]),
      (H = t[43]),
      (ye = t[44]),
      (be = t[45]),
      (xe = t[46]),
      (U = t[47]),
      (W = t[48]),
      (G = t[49]),
      (K = t[50]),
      (q = t[51]),
      (J = t[52]),
      (Ee = t[53]),
      (Y = t[54]));
  let De;
  t[115] !== z ||
  t[116] !== B ||
  t[117] !== V ||
  t[118] !== H ||
  t[119] !== ye ||
  t[120] !== be ||
  t[121] !== xe
    ? ((De = (0, Q.jsxs)(`div`, { className: z, children: [B, V, H, ye, be, xe] })),
      (t[115] = z),
      (t[116] = B),
      (t[117] = V),
      (t[118] = H),
      (t[119] = ye),
      (t[120] = be),
      (t[121] = xe),
      (t[122] = De))
    : (De = t[122]);
  let Oe = y ? `shrink-0 px-6 pb-8 sm:px-10` : `shrink-0 px-6 pt-2 pb-8`,
    ke;
  t[123] !== s || t[124] !== l || t[125] !== o
    ? ((ke = (0, Q.jsx)(it, { resource: o, onClose: s, onStartChat: l })),
      (t[123] = s),
      (t[124] = l),
      (t[125] = o),
      (t[126] = ke))
    : (ke = t[126]);
  let Ae;
  t[127] !== Oe || t[128] !== ke
    ? ((Ae = (0, Q.jsx)(`div`, { className: Oe, children: ke })), (t[127] = Oe), (t[128] = ke), (t[129] = Ae))
    : (Ae = t[129]);
  let Me;
  t[130] !== U || t[131] !== De || t[132] !== Ae
    ? ((Me = (0, Q.jsxs)(`div`, { className: U, children: [De, Ae] })),
      (t[130] = U),
      (t[131] = De),
      (t[132] = Ae),
      (t[133] = Me))
    : (Me = t[133]);
  let Ne;
  return (
    t[134] !== L ||
    t[135] !== W ||
    t[136] !== G ||
    t[137] !== K ||
    t[138] !== q ||
    t[139] !== J ||
    t[140] !== Ee ||
    t[141] !== Y ||
    t[142] !== Me
      ? ((Ne = (0, Q.jsx)(L, {
          open: W,
          contentClassName: G,
          headerActions: K,
          size: q,
          radius: J,
          variant: Ee,
          onOpenChange: Y,
          children: Me,
        })),
        (t[134] = L),
        (t[135] = W),
        (t[136] = G),
        (t[137] = K),
        (t[138] = q),
        (t[139] = J),
        (t[140] = Ee),
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
        (0, Q.jsx)(B, { className: `mt-0.5 text-chart-green` }),
        (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-col`,
          children: [
            (0, Q.jsx)(R, { ...e.title }),
            e.description == null
              ? null
              : (0, Q.jsx)(`span`, {
                  className: `text-xs text-secondary`,
                  children: (0, Q.jsx)(R, { ...e.description }),
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
              children: (0, Q.jsx)(R, {
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
  let f;
  t[14] !== a || t[15] !== n.gizmo.id || t[16] !== d
    ? ((f = (0, Q.jsx)(`span`, {
        className: `flex size-12 items-center justify-center overflow-hidden rounded-full`,
        children: (0, Q.jsx)(Ce, {
          className: `h-full w-full`,
          customGpt: { iconUrl: d, id: n.gizmo.id, name: a },
          presentation: `avatar`,
        }),
      })),
      (t[14] = a),
      (t[15] = n.gizmo.id),
      (t[16] = d),
      (t[17] = f))
    : (f = t[17]);
  let p;
  t[18] === a
    ? (p = t[19])
    : ((p = (0, Q.jsx)(`span`, { className: `font-semibold`, children: a })), (t[18] = a), (t[19] = p));
  let m;
  t[20] !== r || t[21] !== n ? ((m = () => r(n)), (t[20] = r), (t[21] = n), (t[22] = m)) : (m = t[22]);
  let h;
  return (
    t[23] !== u || t[24] !== f || t[25] !== p || t[26] !== m
      ? ((h = (0, Q.jsx)(Ie, {
          className: `w-full min-w-72`,
          description: u,
          icon: f,
          iconContainer: !1,
          presentation: `related`,
          title: p,
          onClick: m,
        })),
        (t[23] = u),
        (t[24] = f),
        (t[25] = p),
        (t[26] = m),
        (t[27] = h))
      : (h = t[27]),
    h
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
    ((At = S()),
      N(),
      P(),
      (jt = t(We(), 1)),
      (Mt = t(s(), 1)),
      k(),
      (Nt = u()),
      E(),
      Y(),
      O(),
      f(),
      A(),
      y(),
      w(),
      se(),
      T(),
      L(),
      Fe(),
      a(),
      Ae(),
      C(),
      o(),
      be(),
      xe(),
      ut(),
      ht(),
      Le(),
      Me(),
      (Q = m()),
      ($ = D({
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
//# sourceMappingURL=gpt-about-dialog-2b97ec4a95df.js.map
