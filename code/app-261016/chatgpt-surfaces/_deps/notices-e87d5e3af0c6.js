import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  LNt as i,
  OB as a,
  PBt as o,
  Qst as s,
  SY as c,
  TY as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  ZSt as p,
  dw as m,
  fw as h,
  iCt as g,
  nB as _,
  nCt as v,
  okt as y,
  rB as b,
  tkt as x,
  vD as S,
  yD as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as ee,
  GLn as w,
  IIr as te,
  LIr as T,
  SRn as E,
  Sjr as D,
  bRn as O,
  imr as ne,
  jcn as re,
  qLn as k,
  rmr as A,
  wcn as j,
  xjr as M,
} from "./app-initial-ad16eaadf81f.js";
import { n as N, r as P, t as F } from "./retirement-f17fd3e88db9.js";
import { a as I, i as L, o as R, r as z, t as B } from "./workspace-plugin-permissions-4ff2558a0323.js";
import { c as V, l as H, n as U, t as W } from "./permission-explanation-eb8b87e3721b.js";
function G(e) {
  let n = (0, J.c)(31),
    { surface: i, onMigrate: a, onDismiss: o } = e,
    l = t(s),
    u = y(),
    f = g(a != null && I),
    p = g(a != null && R),
    m = D(`2562735250`),
    b;
  n[0] === m ? (b = n[1]) : ((b = m.get(`enabled`, !1)), (n[0] = m), (n[1] = b));
  let C = b,
    w = D(`2513446768`),
    T;
  n[2] !== w || n[3] !== u
    ? ((T = u.formatDate(F(w.get(`retirement_date`, ``)), {
        month: `long`,
        day: `numeric`,
        timeZone: `UTC`,
      })),
      (n[2] = w),
      (n[3] = u),
      (n[4] = T))
    : (T = n[4]);
  let E = T,
    { accountId: O } = ne(),
    k;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = { preview: !1 }), (n[5] = k)) : (k = n[5]);
  let { data: A } = re(void 0, k),
    j = z(A, ee(`1355972088`)),
    M = D(`2826703856`).get(`enable_gpt_fe_controls`, !1),
    {
      data: N,
      isPending: P,
      isError: L,
    } = v(te, O ?? ``, { enabled: O != null && A?.id === O && A.structure === `workspace` && (j || M) }),
    H = V({ account: A, rbacEnabled: M, permissions: N?.permissions, isPending: P, isError: L }),
    U = C && A?.id === O && B(A, j, N?.permissions),
    G;
  if (p) {
    let e;
    (n[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(x, {
          id: `chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip`,
          defaultMessage: `Plugin creation is disabled for this workspace`,
          description: `Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.`,
        })),
        (n[6] = e))
      : (e = n[6]),
      (G = e));
  } else if (H !== `allowed`) {
    let e;
    (n[7] === H ? (e = n[8]) : ((e = (0, Y.jsx)(W, { permission: H })), (n[7] = H), (n[8] = e)), (G = e));
  } else if (!U) {
    let e;
    (n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(x, {
          id: `chatgptConversations.gpts.migration.permissionRequired`,
          defaultMessage: `Your workspace must allow you to use plugins to migrate this GPT`,
          description: `Tooltip on a disabled GPT migration button for workspace users without permission to use plugins, or while that permission is loading`,
        })),
        (n[9] = e))
      : (e = n[9]),
      (G = e));
  }
  let K;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Y.jsx)(r, { asset: h, className: `text-secondary` })), (n[10] = K))
    : (K = n[10]);
  let q;
  n[11] === E
    ? (q = n[12])
    : ((q = (0, Y.jsx)(x, {
        id: `chatgptConversations.gpts.notices.migrateTitle`,
        defaultMessage: `Migrate your GPTs to plugins by {deadline}`,
        description: `Heading of the migration notice in GPT lists or above a GPT chat composer, asking eligible creators to migrate their GPTs to plugins; deadline is a localized month and day`,
        values: { deadline: E },
      })),
      (n[11] = E),
      (n[12] = q));
  let X;
  n[13] === E
    ? (X = n[14])
    : ((X = (0, Y.jsx)(x, {
        id: `chatgptConversations.gpts.notices.directoryMigration`,
        defaultMessage: `GPTs that aren’t migrated won’t be available after {deadline}. Migrate yours so people can keep using them as plugins.`,
        description: `Migration notice in the GPT directory or above a GPT chat composer for creators who can migrate GPTs; deadline is a localized month and day after which unmigrated GPTs retire`,
        values: { deadline: E },
      })),
      (n[13] = E),
      (n[14] = X));
  let Z;
  n[15] !== U || n[16] !== H || n[17] !== G || n[18] !== a || n[19] !== l || n[20] !== i || n[21] !== f
    ? ((Z =
        a == null
          ? void 0
          : (0, Y.jsx)(_, {
              cloneCustomTrigger: !0,
              tooltipContent: G,
              children: (0, Y.jsx)(d, {
                color: `primary`,
                size: `dialog`,
                "aria-disabled": !f || !U || H !== `allowed`,
                onClick: (e) => {
                  l.get(I) && U && H === `allowed` && a(e);
                },
                children:
                  i === `chat`
                    ? (0, Y.jsx)(x, {
                        id: `chatgptConversations.gpts.notices.migrateCurrent`,
                        defaultMessage: `Migrate to plugin`,
                        description: `Button in a GPT chat migration notice opening migration confirmation for the current GPT`,
                      })
                    : (0, Y.jsx)(x, {
                        id: `chatgptConversations.gpts.notices.migrateGpts`,
                        defaultMessage: `Migrate GPTs`,
                        description: `Button in a migration notice that opens My GPTs so the creator can choose GPTs to migrate`,
                      }),
              }),
            })),
      (n[15] = U),
      (n[16] = H),
      (n[17] = G),
      (n[18] = a),
      (n[19] = l),
      (n[20] = i),
      (n[21] = f),
      (n[22] = Z))
    : (Z = n[22]);
  let Q;
  n[23] !== u || n[24] !== o
    ? ((Q =
        o == null
          ? void 0
          : (0, Y.jsx)(d, {
              "aria-label": u.formatMessage({
                id: `chatgptConversations.gpts.notices.dismiss`,
                defaultMessage: `Dismiss migration notice`,
                description: `Accessible label for the close button on a GPT chat migration notice; hides the notice for this page session without migrating anything`,
              }),
              color: `ghost`,
              size: `icon`,
              uniform: !0,
              onClick: o,
              children: (0, Y.jsx)(c, {}),
            })),
      (n[23] = u),
      (n[24] = o),
      (n[25] = Q))
    : (Q = n[25]);
  let $;
  return (
    n[26] !== q || n[27] !== X || n[28] !== Z || n[29] !== Q
      ? (($ = (0, Y.jsx)(S, {
          variant: `announcement`,
          icon: K,
          stackOnNarrow: !0,
          wrapCtas: !0,
          title: q,
          content: X,
          customCtas: Z,
          trailingAction: Q,
        })),
        (n[26] = q),
        (n[27] = X),
        (n[28] = Z),
        (n[29] = Q),
        (n[30] = $))
      : ($ = n[30]),
    $
  );
}
function K(e) {
  let t = (0, J.c)(20),
    { surface: n, onKeepUsingGpt: i, deadline: a } = e,
    o = y(),
    s = D(`2513446768`),
    c;
  if (t[0] !== s || t[1] !== a || t[2] !== o) {
    let e = a ?? F(s.get(`retirement_date`, ``));
    ((c = o.formatDate(e, { month: `long`, day: `numeric`, timeZone: `UTC` })),
      (t[0] = s),
      (t[1] = a),
      (t[2] = o),
      (t[3] = c));
  } else c = t[3];
  let l = c,
    u;
  if (n === `directory`) {
    let e;
    (t[4] === l
      ? (e = t[5])
      : ((e = (0, Y.jsx)(x, {
          id: `chatgptConversations.gpts.blocked.directory.description`,
          defaultMessage: `GPTs can continue as plugins, but your workspace admins have disabled plugins. Your GPTs can’t be migrated and won’t be available after {deadline}.`,
          description: `Notice on GPT lists for creators whose Use plugins permission is disabled by workspace policy. Explains why their GPTs cannot migrate. The deadline is the localized UTC retirement month and day. Keep the complete two-sentence message together.`,
          values: { deadline: l },
        })),
        (t[4] = l),
        (t[5] = e)),
      (u = e));
  } else if (n === `migrated`) {
    let e;
    (t[6] === l
      ? (e = t[7])
      : ((e = (0, Y.jsx)(x, {
          id: `chatgptConversations.gpts.blocked.migrated.description`,
          defaultMessage: `This GPT is now a plugin, but the plugin isn’t available with your current workspace settings. You can keep using this GPT until {deadline}.`,
          description: `Notice before and after continuing a migrated GPT chat, shown to its creator whose Use plugins permission is disabled. The original GPT remains usable until the localized UTC retirement month and day in deadline. Migration has already completed.`,
          values: { deadline: l },
        })),
        (t[6] = l),
        (t[7] = e)),
      (u = e));
  } else {
    let e;
    (t[8] === l
      ? (e = t[9])
      : ((e = (0, Y.jsx)(x, {
          id: `chatgptConversations.gpts.blocked.gpt.description`,
          defaultMessage: `This GPT can continue as a plugin, but your workspace admins have disabled plugins. It can’t be migrated and won’t be available after {deadline}.`,
          description: `Notice in an unmigrated GPT's details or chat, shown to its creator whose Use plugins permission is disabled by workspace policy. The deadline is the localized UTC retirement month and day. The creator can still chat with the GPT until retirement.`,
          values: { deadline: l },
        })),
        (t[8] = l),
        (t[9] = e)),
      (u = e));
  }
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(r, { asset: h, className: `text-secondary` })), (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== l || t[12] !== n
    ? ((p =
        n === `directory`
          ? (0, Y.jsx)(x, {
              id: `chatgptConversations.gpts.blocked.directory.title`,
              defaultMessage: `GPTs will be retired on {deadline}`,
              description: `Heading on GPT lists for creators whose workspace Use plugins permission is disabled. The deadline is the localized UTC retirement month and day, without a year.`,
              values: { deadline: l },
            })
          : (0, Y.jsx)(x, {
              id: `chatgptConversations.gpts.blocked.gpt.title`,
              defaultMessage: `This GPT will be retired on {deadline}`,
              description: `Heading in a GPT's details or chat for its creator whose workspace Use plugins permission is disabled. The deadline is the localized UTC retirement month and day, without a year.`,
              values: { deadline: l },
            })),
      (t[11] = l),
      (t[12] = n),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === i
    ? (m = t[15])
    : ((m =
        i == null
          ? void 0
          : (0, Y.jsx)(d, {
              type: `button`,
              color: `primary`,
              size: `dialog`,
              onClick: i,
              children: (0, Y.jsx)(x, {
                id: `chatgptConversations.gpts.blocked.keep_using_gpt.label`,
                defaultMessage: `Keep using GPT`,
                description: `Only action in the migrated GPT chat notice when its creator cannot use plugins. Reveals the existing composer with its draft preserved for this visit.`,
              }),
            })),
      (t[14] = i),
      (t[15] = m));
  let g;
  return (
    t[16] !== u || t[17] !== p || t[18] !== m
      ? ((g = (0, Y.jsx)(S, {
          variant: `announcement`,
          icon: f,
          stackOnNarrow: !0,
          wrapCtas: !0,
          title: p,
          content: u,
          customCtas: m,
        })),
        (t[16] = u),
        (t[17] = p),
        (t[18] = m),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function q(e) {
  let t = (0, J.c)(41),
    { actionPlacement: n, currentGpt: i, onExplore: a, openTarget: o } = e,
    s = n === void 0 ? `inline` : n,
    c = i !== void 0 && i,
    l = y(),
    u = D(`2513446768`),
    f = D(`2562735250`),
    p;
  t[0] === f ? (p = t[1]) : ((p = f.get(`enabled`, !1)), (t[0] = f), (t[1] = p));
  let m = p,
    { accountId: g } = ne(),
    _;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = { preview: !1 }), (t[2] = _)) : (_ = t[2]);
  let { data: b } = re(void 0, _),
    C = z(b, ee(`1355972088`)),
    { data: T } = v(te, g ?? ``, {
      enabled: m && g != null && b?.id === g && b.structure === `workspace` && C,
    }),
    O = m && b?.id === g && B(b, C, T?.permissions),
    k;
  t[3] !== u || t[4] !== l
    ? ((k = l.formatDate(F(u.get(`retirement_date`, ``)), {
        month: `long`,
        day: `numeric`,
        timeZone: `UTC`,
      })),
      (t[3] = u),
      (t[4] = l),
      (t[5] = k))
    : (k = t[5]);
  let A = k,
    j = s === `below` ? `w-full` : void 0,
    M = s === `below` ? `detailAction` : `dialog`,
    P;
  t[6] !== O || t[7] !== u || t[8] !== l.locale || t[9] !== a || t[10] !== o
    ? ((P = O
        ? a
        : (e) => {
            E({
              disposition: `new-tab`,
              event: e,
              href: N(l.locale, u.get(`learn_more_url`, ``)),
              initiator: `open_in_browser_bridge`,
              openTarget: o,
            });
          }),
      (t[6] = O),
      (t[7] = u),
      (t[8] = l.locale),
      (t[9] = a),
      (t[10] = o),
      (t[11] = P))
    : (P = t[11]);
  let I;
  t[12] === O
    ? (I = t[13])
    : ((I = O
        ? (0, Y.jsx)(x, {
            id: `chatgptConversations.gpts.notices.explorePlugins`,
            defaultMessage: `Explore plugins`,
            description: `Button in the GPT retirement notice opening the Plugins directory`,
          })
        : (0, Y.jsx)(x, {
            id: `chatgptConversations.gpts.notices.learnMore`,
            defaultMessage: `Learn more`,
            description: `Button in a GPT retirement notice for people who cannot use plugins. Opens the localized Knowledge Center article about GPT retirement in a new browser tab. Keep this label short.`,
          })),
      (t[12] = O),
      (t[13] = I));
  let L;
  t[14] !== I || t[15] !== j || t[16] !== M || t[17] !== P
    ? ((L = (0, Y.jsx)(d, { className: j, color: `primary`, size: M, onClick: P, children: I })),
      (t[14] = I),
      (t[15] = j),
      (t[16] = M),
      (t[17] = P),
      (t[18] = L))
    : (L = t[18]);
  let R = L,
    V;
  t[19] !== u || t[20] !== l.locale || t[21] !== o
    ? ((V = (e) =>
        (0, Y.jsx)(w, {
          href: N(l.locale, u.get(`learn_more_url`, ``)),
          initiator: `open_in_browser_bridge`,
          openTarget: o,
          underline: `always`,
          children: e,
        })),
      (t[19] = u),
      (t[20] = l.locale),
      (t[21] = o),
      (t[22] = V))
    : (V = t[22]);
  let H = V,
    U;
  if (!O) {
    let e;
    (t[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(x, {
          id: `chatgptConversations.gpts.notices.retirementLearnMore`,
          defaultMessage: `Learn more about the retirement of GPTs in the Knowledge Center.`,
          description: `Body of the GPT retirement notice on a GPT list, chat, or details dialog when the viewer cannot use plugins. Directs them to the Knowledge Center for retirement information; the adjacent Learn more button opens it in a new browser tab.`,
        })),
        (t[23] = e))
      : (e = t[23]),
      (U = e));
  } else if (c) {
    let e;
    (t[24] === H
      ? (e = t[25])
      : ((e = (0, Y.jsx)(x, {
          id: `chatgptConversations.gpts.notices.currentRetirement.withLearnMore`,
          defaultMessage: `This GPT will only remain available if its creator migrates it to a plugin. Explore plugins, the new home for custom tools. <learnMore>Learn more</learnMore>`,
          description: `Retirement notice above an unmigrated GPT chat composer or in its details dialog for a viewer who cannot migrate it but can use plugins. Continued availability depends on creator migration. The learnMore tag links to the Help Center retirement and migration FAQ; the separate Explore plugins button opens the Plugins directory. Keep the link in this complete message so it can be reordered naturally.`,
          values: { learnMore: H },
        })),
        (t[24] = H),
        (t[25] = e)),
      (U = e));
  } else {
    let e;
    (t[26] !== A || t[27] !== H
      ? ((e = (0, Y.jsx)(x, {
          id: `chatgptConversations.gpts.notices.directoryRetirement.withLearnMore`,
          defaultMessage: `GPTs migrated by their creators will remain available as plugins after {deadline}. <learnMore>Learn more</learnMore>`,
          description: `Retirement notice in the GPT directory for users who can use plugins but have no eligible GPTs to migrate. GPTs migrated by creators continue as plugins; deadline is the localized retirement month and day. The learnMore tag links to the Help Center retirement and migration FAQ; the separate Explore plugins button opens the Plugins directory. Keep the link in this complete message so it can be reordered naturally.`,
          values: { deadline: A, learnMore: H },
        })),
        (t[26] = A),
        (t[27] = H),
        (t[28] = e))
      : (e = t[28]),
      (U = e));
  }
  let W = s === `below` ? `announcementInset` : `announcement`,
    G;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Y.jsx)(r, { asset: h, className: `text-secondary` })), (t[29] = G))
    : (G = t[29]);
  let K;
  t[30] === A
    ? (K = t[31])
    : ((K = (0, Y.jsx)(x, {
        id: `chatgptConversations.gpts.notices.retirementTitle`,
        defaultMessage: `GPTs will be retired on {deadline}`,
        description: `Heading of the retirement notice in the GPT directory or a GPT chat for users who cannot migrate the GPT; deadline is a localized month and day`,
        values: { deadline: A },
      })),
      (t[30] = A),
      (t[31] = K));
  let q = s === `inline` ? R : void 0,
    X;
  t[32] !== U || t[33] !== W || t[34] !== K || t[35] !== q
    ? ((X = (0, Y.jsx)(S, {
        variant: W,
        icon: G,
        stackOnNarrow: !0,
        wrapCtas: !0,
        title: K,
        content: U,
        customCtas: q,
      })),
      (t[32] = U),
      (t[33] = W),
      (t[34] = K),
      (t[35] = q),
      (t[36] = X))
    : (X = t[36]);
  let Z = X,
    Q;
  return (
    t[37] !== R || t[38] !== s || t[39] !== Z
      ? ((Q =
          s === `below`
            ? (0, Y.jsxs)(`div`, { className: `flex w-full flex-col gap-2`, children: [Z, R] })
            : Z),
        (t[37] = R),
        (t[38] = s),
        (t[39] = Z),
        (t[40] = Q))
      : (Q = t[40]),
    Q
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = o()),
      m(),
      p(),
      u(),
      T(),
      A(),
      L(),
      j(),
      C(),
      f(),
      k(),
      O(),
      a(),
      l(),
      b(),
      n(),
      M(),
      H(),
      U(),
      P(),
      (Y = i()));
  }))();
}
export { X as i, G as n, q as r, K as t };
//# sourceMappingURL=notices-e87d5e3af0c6.js.map
