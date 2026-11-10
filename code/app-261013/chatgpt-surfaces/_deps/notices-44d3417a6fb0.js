import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  GE as r,
  IDt as i,
  Ixt as a,
  Mz as o,
  Nz as s,
  Pxt as c,
  SJ as l,
  TJ as u,
  VDt as d,
  Vxt as f,
  WE as p,
  aw as m,
  cz as h,
  jDt as g,
  ow as _,
  sz as v,
  t3 as y,
  vzt as b,
  wot as x,
  xMt as S,
  zxt as ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fin as C,
  Hin as te,
  JPn as w,
  XPn as T,
  dMr as E,
  eDr as D,
  fMr as O,
  fur as k,
  nDr as ne,
  pur as re,
  tDr as A,
  xPn as j,
  yPn as M,
} from "./app-initial-5851df3f6cb1.js";
import { n as N, r as P, t as F } from "./retirement-53cd5dc76893.js";
import { a as I, i as L, o as R, r as z, t as B } from "./workspace-plugin-permissions-a5234cd2a14d.js";
import { c as V, l as H, n as U, t as W } from "./permission-explanation-b56de09d0218.js";
function G(e) {
  let r = (0, J.c)(31),
    { surface: s, onMigrate: c, onDismiss: u } = e,
    m = a(n),
    h = d(),
    g = f(c != null && I),
    y = f(c != null && R),
    b = A(`2562735250`),
    x;
  r[0] === b ? (x = r[1]) : ((x = b.get(`enabled`, !1)), (r[0] = b), (r[1] = x));
  let S = x,
    C = A(`2513446768`),
    w;
  r[2] !== C || r[3] !== h
    ? ((w = h.formatDate(F(C.get(`retirement_date`, ``)), {
        month: `long`,
        day: `numeric`,
        timeZone: `UTC`,
      })),
      (r[2] = C),
      (r[3] = h),
      (r[4] = w))
    : (w = r[4]);
  let T = w,
    { accountId: D } = re(),
    O;
  r[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = { preview: !1 }), (r[5] = O)) : (O = r[5]);
  let { data: k } = te(void 0, O),
    j = z(k, ne(`1355972088`)),
    M = A(`2826703856`).get(`enable_gpt_fe_controls`, !1),
    {
      data: N,
      isPending: P,
      isError: L,
    } = ee(E, D ?? ``, { enabled: D != null && k?.id === D && k.structure === `workspace` && (j || M) }),
    H = V({ account: k, rbacEnabled: M, permissions: N?.permissions, isPending: P, isError: L }),
    U = S && k?.id === D && B(k, j, N?.permissions),
    G;
  if (y) {
    let e;
    (r[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(i, {
          id: `chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip`,
          defaultMessage: `Plugin creation is disabled for this workspace`,
          description: `Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.`,
        })),
        (r[6] = e))
      : (e = r[6]),
      (G = e));
  } else if (H !== `allowed`) {
    let e;
    (r[7] === H ? (e = r[8]) : ((e = (0, Y.jsx)(W, { permission: H })), (r[7] = H), (r[8] = e)), (G = e));
  } else if (!U) {
    let e;
    (r[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(i, {
          id: `chatgptConversations.gpts.migration.permissionRequired`,
          defaultMessage: `Your workspace must allow you to use plugins to migrate this GPT`,
          description: `Tooltip on a disabled GPT migration button for workspace users without permission to use plugins, or while that permission is loading`,
        })),
        (r[9] = e))
      : (e = r[9]),
      (G = e));
  }
  let K;
  r[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Y.jsx)(o, { asset: _, className: `text-secondary` })), (r[10] = K))
    : (K = r[10]);
  let q;
  r[11] === T
    ? (q = r[12])
    : ((q = (0, Y.jsx)(i, {
        id: `chatgptConversations.gpts.notices.migrateTitle`,
        defaultMessage: `Migrate your GPTs to plugins by {deadline}`,
        description: `Heading of the migration notice in GPT lists or above a GPT chat composer, asking eligible creators to migrate their GPTs to plugins; deadline is a localized month and day`,
        values: { deadline: T },
      })),
      (r[11] = T),
      (r[12] = q));
  let X;
  r[13] === T
    ? (X = r[14])
    : ((X = (0, Y.jsx)(i, {
        id: `chatgptConversations.gpts.notices.directoryMigration`,
        defaultMessage: `GPTs that aren’t migrated won’t be available after {deadline}. Migrate yours so people can keep using them as plugins.`,
        description: `Migration notice in the GPT directory or above a GPT chat composer for creators who can migrate GPTs; deadline is a localized month and day after which unmigrated GPTs retire`,
        values: { deadline: T },
      })),
      (r[13] = T),
      (r[14] = X));
  let Z;
  r[15] !== U || r[16] !== H || r[17] !== G || r[18] !== c || r[19] !== m || r[20] !== s || r[21] !== g
    ? ((Z =
        c == null
          ? void 0
          : (0, Y.jsx)(v, {
              cloneCustomTrigger: !0,
              tooltipContent: G,
              children: (0, Y.jsx)(t, {
                color: `primary`,
                size: `dialog`,
                "aria-disabled": !g || !U || H !== `allowed`,
                onClick: (e) => {
                  m.get(I) && U && H === `allowed` && c(e);
                },
                children:
                  s === `chat`
                    ? (0, Y.jsx)(i, {
                        id: `chatgptConversations.gpts.notices.migrateCurrent`,
                        defaultMessage: `Migrate to plugin`,
                        description: `Button in a GPT chat migration notice opening migration confirmation for the current GPT`,
                      })
                    : (0, Y.jsx)(i, {
                        id: `chatgptConversations.gpts.notices.migrateGpts`,
                        defaultMessage: `Migrate GPTs`,
                        description: `Button in a migration notice that opens My GPTs so the creator can choose GPTs to migrate`,
                      }),
              }),
            })),
      (r[15] = U),
      (r[16] = H),
      (r[17] = G),
      (r[18] = c),
      (r[19] = m),
      (r[20] = s),
      (r[21] = g),
      (r[22] = Z))
    : (Z = r[22]);
  let Q;
  r[23] !== h || r[24] !== u
    ? ((Q =
        u == null
          ? void 0
          : (0, Y.jsx)(t, {
              "aria-label": h.formatMessage({
                id: `chatgptConversations.gpts.notices.dismiss`,
                defaultMessage: `Dismiss migration notice`,
                description: `Accessible label for the close button on a GPT chat migration notice; hides the notice for this page session without migrating anything`,
              }),
              color: `ghost`,
              size: `icon`,
              uniform: !0,
              onClick: u,
              children: (0, Y.jsx)(l, {}),
            })),
      (r[23] = h),
      (r[24] = u),
      (r[25] = Q))
    : (Q = r[25]);
  let $;
  return (
    r[26] !== q || r[27] !== X || r[28] !== Z || r[29] !== Q
      ? (($ = (0, Y.jsx)(p, {
          variant: `announcement`,
          icon: K,
          stackOnNarrow: !0,
          wrapCtas: !0,
          title: q,
          content: X,
          customCtas: Z,
          trailingAction: Q,
        })),
        (r[26] = q),
        (r[27] = X),
        (r[28] = Z),
        (r[29] = Q),
        (r[30] = $))
      : ($ = r[30]),
    $
  );
}
function K(e) {
  let n = (0, J.c)(20),
    { surface: r, onKeepUsingGpt: a, deadline: s } = e,
    c = d(),
    l = A(`2513446768`),
    u;
  if (n[0] !== l || n[1] !== s || n[2] !== c) {
    let e = s ?? F(l.get(`retirement_date`, ``));
    ((u = c.formatDate(e, { month: `long`, day: `numeric`, timeZone: `UTC` })),
      (n[0] = l),
      (n[1] = s),
      (n[2] = c),
      (n[3] = u));
  } else u = n[3];
  let f = u,
    m;
  if (r === `directory`) {
    let e;
    (n[4] === f
      ? (e = n[5])
      : ((e = (0, Y.jsx)(i, {
          id: `chatgptConversations.gpts.blocked.directory.description`,
          defaultMessage: `GPTs can continue as plugins, but your workspace admins have disabled plugins. Your GPTs can’t be migrated and won’t be available after {deadline}.`,
          description: `Notice on GPT lists for creators whose Use plugins permission is disabled by workspace policy. Explains why their GPTs cannot migrate. The deadline is the localized UTC retirement month and day. Keep the complete two-sentence message together.`,
          values: { deadline: f },
        })),
        (n[4] = f),
        (n[5] = e)),
      (m = e));
  } else if (r === `migrated`) {
    let e;
    (n[6] === f
      ? (e = n[7])
      : ((e = (0, Y.jsx)(i, {
          id: `chatgptConversations.gpts.blocked.migrated.description`,
          defaultMessage: `This GPT is now a plugin, but the plugin isn’t available with your current workspace settings. You can keep using this GPT until {deadline}.`,
          description: `Notice before and after continuing a migrated GPT chat, shown to its creator whose Use plugins permission is disabled. The original GPT remains usable until the localized UTC retirement month and day in deadline. Migration has already completed.`,
          values: { deadline: f },
        })),
        (n[6] = f),
        (n[7] = e)),
      (m = e));
  } else {
    let e;
    (n[8] === f
      ? (e = n[9])
      : ((e = (0, Y.jsx)(i, {
          id: `chatgptConversations.gpts.blocked.gpt.description`,
          defaultMessage: `This GPT can continue as a plugin, but your workspace admins have disabled plugins. It can’t be migrated and won’t be available after {deadline}.`,
          description: `Notice in an unmigrated GPT's details or chat, shown to its creator whose Use plugins permission is disabled by workspace policy. The deadline is the localized UTC retirement month and day. The creator can still chat with the GPT until retirement.`,
          values: { deadline: f },
        })),
        (n[8] = f),
        (n[9] = e)),
      (m = e));
  }
  let h;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(o, { asset: _, className: `text-secondary` })), (n[10] = h))
    : (h = n[10]);
  let g;
  n[11] !== f || n[12] !== r
    ? ((g =
        r === `directory`
          ? (0, Y.jsx)(i, {
              id: `chatgptConversations.gpts.blocked.directory.title`,
              defaultMessage: `GPTs will be retired on {deadline}`,
              description: `Heading on GPT lists for creators whose workspace Use plugins permission is disabled. The deadline is the localized UTC retirement month and day, without a year.`,
              values: { deadline: f },
            })
          : (0, Y.jsx)(i, {
              id: `chatgptConversations.gpts.blocked.gpt.title`,
              defaultMessage: `This GPT will be retired on {deadline}`,
              description: `Heading in a GPT's details or chat for its creator whose workspace Use plugins permission is disabled. The deadline is the localized UTC retirement month and day, without a year.`,
              values: { deadline: f },
            })),
      (n[11] = f),
      (n[12] = r),
      (n[13] = g))
    : (g = n[13]);
  let v;
  n[14] === a
    ? (v = n[15])
    : ((v =
        a == null
          ? void 0
          : (0, Y.jsx)(t, {
              type: `button`,
              color: `primary`,
              size: `dialog`,
              onClick: a,
              children: (0, Y.jsx)(i, {
                id: `chatgptConversations.gpts.blocked.keep_using_gpt.label`,
                defaultMessage: `Keep using GPT`,
                description: `Only action in the migrated GPT chat notice when its creator cannot use plugins. Reveals the existing composer with its draft preserved for this visit.`,
              }),
            })),
      (n[14] = a),
      (n[15] = v));
  let y;
  return (
    n[16] !== m || n[17] !== g || n[18] !== v
      ? ((y = (0, Y.jsx)(p, {
          variant: `announcement`,
          icon: h,
          stackOnNarrow: !0,
          wrapCtas: !0,
          title: g,
          content: m,
          customCtas: v,
        })),
        (n[16] = m),
        (n[17] = g),
        (n[18] = v),
        (n[19] = y))
      : (y = n[19]),
    y
  );
}
function q(e) {
  let n = (0, J.c)(41),
    { actionPlacement: r, currentGpt: a, onExplore: s, openTarget: c } = e,
    l = r === void 0 ? `inline` : r,
    u = a !== void 0 && a,
    f = d(),
    m = A(`2513446768`),
    h = A(`2562735250`),
    g;
  n[0] === h ? (g = n[1]) : ((g = h.get(`enabled`, !1)), (n[0] = h), (n[1] = g));
  let v = g,
    { accountId: y } = re(),
    b;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = { preview: !1 }), (n[2] = b)) : (b = n[2]);
  let { data: x } = te(void 0, b),
    S = z(x, ne(`1355972088`)),
    { data: C } = ee(E, y ?? ``, {
      enabled: v && y != null && x?.id === y && x.structure === `workspace` && S,
    }),
    w = v && x?.id === y && B(x, S, C?.permissions),
    D;
  n[3] !== m || n[4] !== f
    ? ((D = f.formatDate(F(m.get(`retirement_date`, ``)), {
        month: `long`,
        day: `numeric`,
        timeZone: `UTC`,
      })),
      (n[3] = m),
      (n[4] = f),
      (n[5] = D))
    : (D = n[5]);
  let O = D,
    k = l === `below` ? `w-full` : void 0,
    j = l === `below` ? `detailAction` : `dialog`,
    P;
  n[6] !== w || n[7] !== m || n[8] !== f.locale || n[9] !== s || n[10] !== c
    ? ((P = w
        ? s
        : (e) => {
            T({
              disposition: `new-tab`,
              event: e,
              href: N(f.locale, m.get(`learn_more_url`, ``)),
              initiator: `open_in_browser_bridge`,
              openTarget: c,
            });
          }),
      (n[6] = w),
      (n[7] = m),
      (n[8] = f.locale),
      (n[9] = s),
      (n[10] = c),
      (n[11] = P))
    : (P = n[11]);
  let I;
  n[12] === w
    ? (I = n[13])
    : ((I = w
        ? (0, Y.jsx)(i, {
            id: `chatgptConversations.gpts.notices.explorePlugins`,
            defaultMessage: `Explore plugins`,
            description: `Button in the GPT retirement notice opening the Plugins directory`,
          })
        : (0, Y.jsx)(i, {
            id: `chatgptConversations.gpts.notices.learnMore`,
            defaultMessage: `Learn more`,
            description: `Button in a GPT retirement notice for people who cannot use plugins. Opens the localized Knowledge Center article about GPT retirement in a new browser tab. Keep this label short.`,
          })),
      (n[12] = w),
      (n[13] = I));
  let L;
  n[14] !== I || n[15] !== k || n[16] !== j || n[17] !== P
    ? ((L = (0, Y.jsx)(t, { className: k, color: `primary`, size: j, onClick: P, children: I })),
      (n[14] = I),
      (n[15] = k),
      (n[16] = j),
      (n[17] = P),
      (n[18] = L))
    : (L = n[18]);
  let R = L,
    V;
  n[19] !== m || n[20] !== f.locale || n[21] !== c
    ? ((V = (e) =>
        (0, Y.jsx)(M, {
          href: N(f.locale, m.get(`learn_more_url`, ``)),
          initiator: `open_in_browser_bridge`,
          openTarget: c,
          underline: `always`,
          children: e,
        })),
      (n[19] = m),
      (n[20] = f.locale),
      (n[21] = c),
      (n[22] = V))
    : (V = n[22]);
  let H = V,
    U;
  if (!w) {
    let e;
    (n[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(i, {
          id: `chatgptConversations.gpts.notices.retirementLearnMore`,
          defaultMessage: `Learn more about the retirement of GPTs in the Knowledge Center.`,
          description: `Body of the GPT retirement notice on a GPT list, chat, or details dialog when the viewer cannot use plugins. Directs them to the Knowledge Center for retirement information; the adjacent Learn more button opens it in a new browser tab.`,
        })),
        (n[23] = e))
      : (e = n[23]),
      (U = e));
  } else if (u) {
    let e;
    (n[24] === H
      ? (e = n[25])
      : ((e = (0, Y.jsx)(i, {
          id: `chatgptConversations.gpts.notices.currentRetirement.withLearnMore`,
          defaultMessage: `This GPT will only remain available if its creator migrates it to a plugin. Explore plugins, the new home for custom tools. <learnMore>Learn more</learnMore>`,
          description: `Retirement notice above an unmigrated GPT chat composer or in its details dialog for a viewer who cannot migrate it but can use plugins. Continued availability depends on creator migration. The learnMore tag links to the Help Center retirement and migration FAQ; the separate Explore plugins button opens the Plugins directory. Keep the link in this complete message so it can be reordered naturally.`,
          values: { learnMore: H },
        })),
        (n[24] = H),
        (n[25] = e)),
      (U = e));
  } else {
    let e;
    (n[26] !== O || n[27] !== H
      ? ((e = (0, Y.jsx)(i, {
          id: `chatgptConversations.gpts.notices.directoryRetirement.withLearnMore`,
          defaultMessage: `GPTs migrated by their creators will remain available as plugins after {deadline}. <learnMore>Learn more</learnMore>`,
          description: `Retirement notice in the GPT directory for users who can use plugins but have no eligible GPTs to migrate. GPTs migrated by creators continue as plugins; deadline is the localized retirement month and day. The learnMore tag links to the Help Center retirement and migration FAQ; the separate Explore plugins button opens the Plugins directory. Keep the link in this complete message so it can be reordered naturally.`,
          values: { deadline: O, learnMore: H },
        })),
        (n[26] = O),
        (n[27] = H),
        (n[28] = e))
      : (e = n[28]),
      (U = e));
  }
  let W = l === `below` ? `announcementInset` : `announcement`,
    G;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Y.jsx)(o, { asset: _, className: `text-secondary` })), (n[29] = G))
    : (G = n[29]);
  let K;
  n[30] === O
    ? (K = n[31])
    : ((K = (0, Y.jsx)(i, {
        id: `chatgptConversations.gpts.notices.retirementTitle`,
        defaultMessage: `GPTs will be retired on {deadline}`,
        description: `Heading of the retirement notice in the GPT directory or a GPT chat for users who cannot migrate the GPT; deadline is a localized month and day`,
        values: { deadline: O },
      })),
      (n[30] = O),
      (n[31] = K));
  let q = l === `inline` ? R : void 0,
    X;
  n[32] !== U || n[33] !== W || n[34] !== K || n[35] !== q
    ? ((X = (0, Y.jsx)(p, {
        variant: W,
        icon: G,
        stackOnNarrow: !0,
        wrapCtas: !0,
        title: K,
        content: U,
        customCtas: q,
      })),
      (n[32] = U),
      (n[33] = W),
      (n[34] = K),
      (n[35] = q),
      (n[36] = X))
    : (X = n[36]);
  let Z = X,
    Q;
  return (
    n[37] !== R || n[38] !== l || n[39] !== Z
      ? ((Q =
          l === `below`
            ? (0, Y.jsxs)(`div`, { className: `flex w-full flex-col gap-2`, children: [Z, R] })
            : Z),
        (n[37] = R),
        (n[38] = l),
        (n[39] = Z),
        (n[40] = Q))
      : (Q = n[40]),
    Q
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = b()),
      m(),
      c(),
      g(),
      O(),
      k(),
      L(),
      C(),
      r(),
      y(),
      j(),
      w(),
      s(),
      u(),
      h(),
      x(),
      D(),
      H(),
      U(),
      P(),
      (Y = S()));
  }))();
}
export { X as i, G as n, q as r, K as t };
//# sourceMappingURL=notices-44d3417a6fb0.js.map
