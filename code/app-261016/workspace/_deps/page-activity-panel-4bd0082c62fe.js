import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ATt as t,
  BMt as n,
  CTt as r,
  FBt as i,
  FTt as a,
  GTt as o,
  HTt as s,
  ITt as c,
  LNt as l,
  MNt as u,
  MTt as d,
  NNt as f,
  PBt as p,
  SC as m,
  SMt as h,
  SV as g,
  TY as _,
  UTt as v,
  Uz as y,
  VTt as b,
  WTt as x,
  Wz as S,
  XOt as C,
  XS as w,
  Y3 as T,
  YI as E,
  YOt as D,
  Z3 as O,
  ZSt as k,
  bMt as A,
  dC as j,
  dM as M,
  dk as N,
  eB as P,
  fk as F,
  gC as I,
  hC as ee,
  hst as L,
  iCt as te,
  jTt as R,
  kTt as z,
  lM as ne,
  mst as re,
  nB as ie,
  nCt as B,
  okt as ae,
  q3 as oe,
  qI as se,
  rB as ce,
  tB as V,
  tkt as H,
  vMt as U,
  wTt as W,
  xC as le,
  yMt as ue,
  zMt as G,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Rt as K,
  C0 as q,
  COr as de,
  EOr as fe,
  F7n as J,
  Fnt as pe,
  I7n as me,
  JEn as he,
  L7n as ge,
  Ohn as _e,
  QRt as ve,
  S0 as ye,
  SOr as be,
  TOr as xe,
  aU as Se,
  det as Ce,
  gur as we,
  hdn as Te,
  hen as Ee,
  iRr as De,
  mDr as Oe,
  mgn as ke,
  oU as Ae,
  pDr as je,
  pen as Me,
  qEn as Ne,
  sRr as Pe,
  uet as Fe,
  ugn as Ie,
  wOr as Le,
  x0 as Re,
  xOr as ze,
  y0 as Be,
  ydn as Ve,
  znt as He,
} from "./app-initial-ad16eaadf81f.js";
import { n as Ue, t as We } from "./avatar-b3af498c99de.js";
import { i as Ge, n as Ke } from "./profile-card-596b3632a9d9.js";
import { n as qe, t as Je } from "./detail-section-state-45be9ee036ee.js";
import { r as Ye, t as Xe } from "./label-3b6eb348d6bc.js";
function Ze(e) {
  let n = (0, Qe.c)(64),
    { animation: i, children: a, label: s, onClose: l, storageKey: f, variant: p } = e,
    m = p === void 0 ? `default` : p,
    h = ae(),
    g = S(),
    [_, v] = o(),
    y;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = { width: 0, height: 0 }), (n[0] = y)) : (y = n[0]);
  let [b, x] = (0, $e.useState)(y),
    C = d(0),
    w = i ?? C,
    T = d(null),
    E = b.width < 640,
    D = E ? `full` : `regular`,
    O;
  n[1] !== b.height || n[2] !== b.width
    ? ((O = ze({ defaultWidth: 600, mainContentWidth: b.width, shellHeight: b.height })),
      (n[1] = b.height),
      (n[2] = b.width),
      (n[3] = O))
    : (O = n[3]);
  let k = O,
    A;
  n[4] !== k || n[5] !== b.width || n[6] !== f || n[7] !== D
    ? ((A = (e) =>
        Math.min(
          b.width,
          de(
            e ?? be({ defaultWidth: k, mainContentWidth: b.width, storageKey: f, widthMode: D }),
            b.width,
            D,
          ),
        )),
      (n[4] = k),
      (n[5] = b.width),
      (n[6] = f),
      (n[7] = D),
      (n[8] = A))
    : (A = n[8]);
  let j = t(T, A),
    M;
  n[9] !== _ || n[10] !== w || n[11] !== j
    ? ((M = { size: j, animation: w, isVisible: _ }), (n[9] = _), (n[10] = w), (n[11] = j), (n[12] = M))
    : (M = n[12]);
  let { animatedSize: N } = he(M),
    P,
    F;
  (n[13] !== _ || n[14] !== g || n[15] !== v || n[16] !== w
    ? ((P = () => {
        let e = r(w, +!!_, {
          ...(g ? { duration: 0 } : ne),
          onComplete: () => {
            _ || v?.();
          },
        });
        return () => e.stop();
      }),
      (F = [_, g, v, w]),
      (n[13] = _),
      (n[14] = g),
      (n[15] = v),
      (n[16] = w),
      (n[17] = P),
      (n[18] = F))
    : ((P = n[17]), (F = n[18])),
    (0, $e.useLayoutEffect)(P, F));
  let I, ee;
  (n[19] === i
    ? ((I = n[20]), (ee = n[21]))
    : ((I = () => () => i?.jump(0)), (ee = [i]), (n[19] = i), (n[20] = I), (n[21] = ee)),
    (0, $e.useLayoutEffect)(I, ee));
  let L = Math.min(b.width, 320),
    te = b.width,
    R;
  n[22] !== b.width || n[23] !== D
    ? ((R = de(1, b.width, D)), (n[22] = b.width), (n[23] = D), (n[24] = R))
    : (R = n[24]);
  let z = Math.min(te, R),
    re;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (e) => {
        let t = e?.parentElement;
        if (t == null) return;
        let n = () => {
          let e = t.clientWidth,
            n = t.clientHeight;
          x((t) => (t.width === e && t.height === n ? t : { width: e, height: n }));
        };
        n();
        let r = new ResizeObserver(n);
        return (r.observe(t), () => r.disconnect());
      }),
      (n[25] = re))
    : (re = n[25]);
  let ie = E ? `absolute inset-y-0 end-0 z-20` : `relative`,
    B;
  n[26] === ie ? (B = n[27]) : ((B = u(`h-full min-h-0 min-w-0 shrink-0`, ie)), (n[26] = ie), (n[27] = B));
  let se = !_,
    ce = !_,
    V;
  n[28] === N ? (V = n[29]) : ((V = { width: N }), (n[28] = N), (n[29] = V));
  let H, U;
  n[30] !== _ || n[31] !== w
    ? ((H = () => _ && w.jump(1)),
      (U = () => _ && w.jump(1)),
      (n[30] = _),
      (n[31] = w),
      (n[32] = H),
      (n[33] = U))
    : ((H = n[32]), (U = n[33]));
  let W;
  n[34] === l
    ? (W = n[35])
    : ((W = (e) => {
        e.key === `Escape` && !e.defaultPrevented && (e.stopPropagation(), l());
      }),
      (n[34] = l),
      (n[35] = W));
  let le = oe(h.locale) === `rtl` ? `right` : `left`,
    ue = m !== `glass`,
    G;
  n[36] !== k ||
  n[37] !== h ||
  n[38] !== z ||
  n[39] !== L ||
  n[40] !== _ ||
  n[41] !== b.width ||
  n[42] !== f ||
  n[43] !== m ||
  n[44] !== w ||
  n[45] !== D ||
  n[46] !== T
    ? ((G =
        _ && z > L
          ? {
              hitArea: m === `glass` ? `inside` : void 0,
              indicatorVisibility: m === `glass` ? `always` : void 0,
              ariaLabel: h.formatMessage({
                id: `splitView.resize`,
                defaultMessage: `Resize panels`,
                description: `Accessible name for the split-view resize handle`,
              }),
              defaultSize: k,
              maximumSize: z,
              minimumSize: L,
              setSize: (e) => {
                (w.jump(1), T.set(Le(e, b.width, D)));
              },
              onResizeEnd: (e) => {
                fe({ mainContentWidth: b.width, storageKey: f, width: e, widthMode: D });
              },
            }
          : void 0),
      (n[36] = k),
      (n[37] = h),
      (n[38] = z),
      (n[39] = L),
      (n[40] = _),
      (n[41] = b.width),
      (n[42] = f),
      (n[43] = m),
      (n[44] = w),
      (n[45] = D),
      (n[46] = T),
      (n[47] = G))
    : (G = n[47]);
  let K;
  n[48] !== a || n[49] !== le || n[50] !== ue || n[51] !== G || n[52] !== j
    ? ((K = (0, et.jsx)(ve, {
        width: j,
        edge: le,
        showBorder: ue,
        showBackground: !1,
        resizer: G,
        children: a,
      })),
      (n[48] = a),
      (n[49] = le),
      (n[50] = ue),
      (n[51] = G),
      (n[52] = j),
      (n[53] = K))
    : (K = n[53]);
  let q;
  return (
    n[54] !== s ||
    n[55] !== B ||
    n[56] !== se ||
    n[57] !== ce ||
    n[58] !== V ||
    n[59] !== H ||
    n[60] !== U ||
    n[61] !== W ||
    n[62] !== K
      ? ((q = (0, et.jsx)(c.aside, {
          ref: re,
          className: B,
          "aria-label": s,
          "aria-hidden": se,
          inert: ce,
          style: V,
          onPointerDownCapture: H,
          onKeyDownCapture: U,
          onKeyDown: W,
          children: K,
        })),
        (n[54] = s),
        (n[55] = B),
        (n[56] = se),
        (n[57] = ce),
        (n[58] = V),
        (n[59] = H),
        (n[60] = U),
        (n[61] = W),
        (n[62] = K),
        (n[63] = q))
      : (q = n[63]),
    q
  );
}
var Qe, $e, et;
function tt() {
  return (tt = e(() => {
    ((Qe = p()), f(), W(), a(), R(), v(), z(), ($e = i()), C(), y(), M(), K(), Ne(), xe(), (et = l()));
  }))();
}
function nt(e, t) {
  let n = [],
    r;
  for (let [i, a] of e.entries()) {
    let e = t[a],
      o = e == null ? NaN : Date.parse(e.changed_at);
    if (e == null || !Number.isFinite(o)) {
      r = void 0;
      continue;
    }
    let s = e.actor,
      c = r?.attribution.actor,
      l = s.account_user_id?.trim();
    if (
      r != null &&
      s.actor_type === c?.actor_type &&
      (s.actor_type !== `agent` || (s.agent_kind === `o`) == (c.agent_kind === `o`)) &&
      (s.actor_type === `system` || (l && l === c.account_user_id?.trim()))
    ) {
      ((r.endIndex = i), o > Date.parse(r.attribution.changed_at) && (r.attribution = e));
      continue;
    }
    let u = { attribution: e, blockId: a, endIndex: i, index: i };
    (n.push(u), (r = u));
  }
  return n;
}
function rt() {
  return (rt = e(() => {}))();
}
function it(e) {
  let t = (0, ut.c)(42),
    { document: n, onRevealSection: r, pageId: i } = e,
    a = ae(),
    o = (0, dt.useId)(),
    s = Ee(),
    [c, l] = (0, dt.useState)(20),
    { data: u, isError: d, isPending: f, refetch: p } = B(Ve, i);
  if (f) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            role: `status`,
            children: [
              (0, Y.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Y.jsx)(H, {
                  id: `codex.space.page.attribution.loading`,
                  defaultMessage: `Loading edit details…`,
                  description: `Accessible status while recent Page edit details are fetched`,
                }),
              }),
              [0, 1, 2].map(ct),
            ],
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (d) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(`p`, {
          className: `text-sm text-secondary`,
          role: `status`,
          children: (0, Y.jsx)(H, {
            id: `codex.space.page.attribution.error`,
            defaultMessage: `Edit details unavailable`,
            description: `Error shown when recent block edit attribution for a shared Page cannot be loaded`,
          }),
        })),
        (t[1] = e))
      : (e = t[1]);
    let n;
    t[2] === p
      ? (n = t[3])
      : ((n = () => {
          p();
        }),
        (t[2] = p),
        (t[3] = n));
    let r;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(H, {
          id: `codex.space.page.attribution.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries loading recent Page edits`,
        })),
        (t[4] = r))
      : (r = t[4]);
    let i;
    return (
      t[5] === n
        ? (i = t[6])
        : ((i = (0, Y.jsxs)(`div`, {
            className: `flex flex-col items-start gap-3`,
            children: [e, (0, Y.jsx)(T, { color: `secondary`, size: `compact`, onClick: n, children: r })],
          })),
          (t[5] = n),
          (t[6] = i)),
      i
    );
  }
  if (u == null || Object.keys(u.blockAttributions).length === 0) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(Je, {
            children: (0, Y.jsx)(H, {
              id: `codex.space.page.attribution.empty`,
              defaultMessage: `No edit details available`,
              description: `Empty state shown when a shared Page has no block-level authorship information`,
            }),
          })),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let m, h, _, v, y, b;
  if (
    t[8] !== u.actorDisplays ||
    t[9] !== u.blockAttributions ||
    t[10] !== n ||
    t[11] !== o ||
    t[12] !== a ||
    t[13] !== s ||
    t[14] !== r ||
    t[15] !== c
  ) {
    m = Object.entries(u.blockAttributions).filter(st).sort(ot);
    let e = m.slice(0, c),
      i;
    t[22] !== a || t[23] !== s
      ? ((i = (e) => {
          let [, t] = e,
            { unit: n, value: r } = ye(t.changed_at, s);
          return a.formatRelativeTime(-r, n, { numeric: `always`, style: `narrow` });
        }),
        (t[22] = a),
        (t[23] = s),
        (t[24] = i))
      : (i = t[24]);
    let l = e.map(i),
      d = nt(e.map(at), u.blockAttributions),
      f = n == null ? void 0 : ke(n),
      p = f == null ? void 0 : new Set(f.order.toArray());
    y = `flex flex-col gap-4`;
    let x = `${o}-go-to-section`,
      S;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, Y.jsx)(H, {
          id: `codex.space.page.activity.goToSection`,
          defaultMessage: `Go to section`,
          description: `Tooltip for the action that scrolls the Page to the section shown in an edit preview`,
        })),
        (t[25] = S))
      : (S = t[25]),
      t[26] === x
        ? (b = t[27])
        : ((b = (0, Y.jsx)(`span`, { id: x, className: `sr-only`, children: S })), (t[26] = x), (t[27] = b)),
      (h = `flex flex-col gap-5`),
      t[28] === a
        ? (_ = t[29])
        : ((_ = a.formatMessage({
            id: `codex.space.page.activity.recentSections`,
            defaultMessage: `Recently edited sections`,
            description: `Accessible label for the Page edits list, which shows the latest edit to each section rather than a complete version history`,
          })),
          (t[28] = a),
          (t[29] = _)),
      (v = d.map((t) => {
        let { attribution: n, blockId: i, index: s, endIndex: c } = t,
          d = u.actorDisplays.find((e) => e.account_user_id === n.actor.account_user_id)?.display_name,
          m = n.actor.actor_type === `agent` && n.actor.agent_kind === `o`,
          h = n.actor.actor_type === `user` && d != null ? n.actor.account_user_id : null,
          _ =
            n.actor.actor_type === `agent` && d != null
              ? a.formatMessage(
                  {
                    id: `codex.space.page.attribution.authorizedAgent`,
                    defaultMessage: `AI agent authorized by {name}`,
                    description: `Label for a Page block edited by an AI agent acting with permission from the named user; name identifies who authorized the agent, not the direct editor`,
                  },
                  { name: d },
                )
              : (d ??
                a.formatMessage(
                  {
                    id: `codex.space.page.attribution.actor`,
                    defaultMessage: `{type, select, agent {AI agent} system {System} user {A collaborator} other {Another contributor}}`,
                    description: `Display label for the person, AI agent, system, or unknown actor that last edited a shared Page block when a personal display name is unavailable`,
                  },
                  { type: n.actor.actor_type },
                )),
          v;
        return (
          (v = m
            ? (0, Y.jsx)(`img`, {
                className: `block size-6 object-contain`,
                alt: ``,
                "aria-hidden": !0,
                draggable: !1,
                src: Ce,
              })
            : n.actor.actor_type === `agent`
              ? (0, Y.jsx)(P, { "aria-hidden": !0 })
              : (0, Y.jsx)(Ke, {
                  accountUserId: h,
                  label: _,
                  children: (0, Y.jsx)(We, { accountUserId: h, name: _, size: `sm` }),
                })),
          (0, Y.jsx)(
            `li`,
            {
              className: `flex flex-col`,
              children: (0, Y.jsx)(Se, {
                size: `compact`,
                avatar: v,
                label: (0, Y.jsx)(Ke, {
                  accountUserId: h,
                  label: _,
                  children: (0, Y.jsx)(`span`, {
                    className: `block wrap-break-word whitespace-normal`,
                    title: m ? void 0 : _,
                    children: m ? (0, Y.jsx)(Xe, { ownerName: d }) : _,
                  }),
                }),
                trailingContent: null,
                children: (0, Y.jsx)(`ul`, {
                  className: `flex flex-col`,
                  children: e.slice(s, c + 1).map((e, t) => {
                    let [n, i] = e,
                      c = f == null || !p?.has(n) ? void 0 : Ie(f, n),
                      u = c?.text.toJSON(),
                      d = lt(u, a),
                      m = c != null && r != null,
                      h = l[s + t],
                      _ = h === l[s + t - 1],
                      v = (0, Y.jsxs)(`span`, {
                        className: `flex w-full items-start gap-3 py-1.5`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            id: `${o}-${n}`,
                            className: `line-clamp-2 min-w-0 flex-1 text-start text-sm wrap-break-word whitespace-normal text-secondary`,
                            title: d,
                            children: d,
                          }),
                          (0, Y.jsxs)(`span`, {
                            className: `flex shrink-0 items-center gap-1 text-xs text-secondary`,
                            children: [
                              (0, Y.jsx)(`time`, {
                                className: `shrink-0 tabular-nums`,
                                dateTime: i.changed_at,
                                title: a.formatDate(i.changed_at, {
                                  dateStyle: `medium`,
                                  timeStyle: `short`,
                                }),
                                children: (0, Y.jsx)(`span`, {
                                  className: _ ? `opacity-0` : void 0,
                                  children: h,
                                }),
                              }),
                              m
                                ? (0, Y.jsx)(g, {
                                    className: `opacity-0 group-hover/activity-section:opacity-100 group-focus-visible/activity-section:opacity-100`,
                                  })
                                : null,
                            ],
                          }),
                        ],
                      });
                    return (0, Y.jsx)(
                      `li`,
                      {
                        children: m
                          ? (0, Y.jsx)(ie, {
                              tooltipContent: (0, Y.jsx)(H, {
                                id: `codex.space.page.activity.goToSection`,
                                defaultMessage: `Go to section`,
                                description: `Tooltip for the action that scrolls the Page to the section shown in an edit preview`,
                              }),
                              children: (0, Y.jsx)(T, {
                                className: `group/activity-section w-full`,
                                color: `ghostMuted`,
                                size: `inline`,
                                onClick: () => r(n),
                                "aria-labelledby": `${o}-go-to-section ${o}-${n}`,
                                children: v,
                              }),
                            })
                          : (0, Y.jsx)(`div`, { className: `flex flex-col gap-1`, children: v }),
                      },
                      n,
                    );
                  }),
                }),
              }),
            },
            i,
          )
        );
      })),
      (t[8] = u.actorDisplays),
      (t[9] = u.blockAttributions),
      (t[10] = n),
      (t[11] = o),
      (t[12] = a),
      (t[13] = s),
      (t[14] = r),
      (t[15] = c),
      (t[16] = m),
      (t[17] = h),
      (t[18] = _),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b));
  } else ((m = t[16]), (h = t[17]), (_ = t[18]), (v = t[19]), (y = t[20]), (b = t[21]));
  let x;
  t[30] !== h || t[31] !== _ || t[32] !== v
    ? ((x = (0, Y.jsx)(`ul`, { className: h, "aria-label": _, children: v })),
      (t[30] = h),
      (t[31] = _),
      (t[32] = v),
      (t[33] = x))
    : (x = t[33]);
  let S;
  t[34] !== m.length || t[35] !== c
    ? ((S =
        m.length > c
          ? (0, Y.jsx)(T, {
              className: `shrink-0 justify-center`,
              color: `ghost`,
              size: `compact`,
              onClick: () => l(c + 20),
              children: (0, Y.jsx)(H, {
                id: `codex.space.page.activity.moreEdits`,
                defaultMessage: `Show more`,
                description: `Button that reveals more recently edited sections in the Page activity panel`,
              }),
            })
          : null),
      (t[34] = m.length),
      (t[35] = c),
      (t[36] = S))
    : (S = t[36]);
  let C;
  return (
    t[37] !== y || t[38] !== b || t[39] !== x || t[40] !== S
      ? ((C = (0, Y.jsxs)(`div`, { className: y, children: [b, x, S] })),
        (t[37] = y),
        (t[38] = b),
        (t[39] = x),
        (t[40] = S),
        (t[41] = C))
      : (C = t[41]),
    C
  );
}
function at(e) {
  let [t] = e;
  return t;
}
function ot(e, t) {
  let [, n] = e,
    [, r] = t;
  return r.changed_at.localeCompare(n.changed_at);
}
function st(e) {
  let [, t] = e;
  return Number.isFinite(Date.parse(t.changed_at));
}
function ct(e) {
  return (0, Y.jsx)(
    `div`,
    {
      "aria-hidden": !0,
      className: `flex flex-col`,
      children: (0, Y.jsx)(Se, {
        size: `compact`,
        avatar: (0, Y.jsx)(`div`, {
          className: `size-6 shrink-0 overflow-hidden rounded-full`,
          children: (0, Y.jsx)(J, { size: `fill` }),
        }),
        label: (0, Y.jsx)(J, { className: `w-1/2`, size: `sm` }),
        trailingContent: null,
        children: (0, Y.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [
            (0, Y.jsx)(me, { className: `min-w-0 flex-1`, lines: 2, seed: `page-edits-${e}` }),
            (0, Y.jsx)(J, { className: `w-12 shrink-0`, size: `sm` }),
          ],
        }),
      }),
    },
    e,
  );
}
function lt(e, t) {
  if (e == null)
    return t.formatMessage({
      id: `codex.space.page.activity.unavailableSection`,
      defaultMessage: `Section unavailable`,
      description: `Edit preview when the section is no longer available in the current Page`,
    });
  let n = e.replace(/^(?:[ \t]*\r?\n)+/, ``).split(
      `
`,
      2,
    ).join(`
`),
    r = G(n, { extensions: [U()], mdastExtensions: [A()] }).children[0];
  return r?.type === `table` || r?.type === `code` || r?.type === `thematicBreak` || r?.type === `html`
    ? t.formatMessage(
        {
          id: `codex.space.page.activity.structuredSectionExcerpt`,
          defaultMessage: `{type, select, table {Table} code {Code block} thematicBreak {Divider} html {HTML block} other {Section}}`,
          description: `Plain-string edit preview used in a section link and its tooltip instead of flattening table cells, code, or HTML`,
        },
        { type: r.type },
      )
    : Oe(n.slice(0, r?.position?.end.offset)) ||
        (r?.type === `paragraph` && r.children.some((e) => e.type === `link` && E(e.url)?.kind === `page`)
          ? t.formatMessage({
              id: `codex.space.page.activity.pageLinkSection`,
              defaultMessage: `Page link`,
              description: `Edit preview for a Page link that has no text label`,
            })
          : r?.type === `paragraph` && r.children.some((e) => e.type === `image`)
            ? t.formatMessage({
                id: `codex.space.page.activity.imageSection`,
                defaultMessage: `Image`,
                description: `Edit preview for an image without a text description`,
              })
            : r == null
              ? t.formatMessage({
                  id: `codex.space.page.activity.emptySection`,
                  defaultMessage: `Empty section`,
                  description: `Edit preview for an available Page section with no content`,
                })
              : t.formatMessage({
                  id: `codex.space.page.activity.sectionWithoutText`,
                  defaultMessage: `Section without text`,
                  description: `Edit preview for an available section that contains no readable text`,
                }));
}
var ut, dt, Y;
function ft() {
  return (ft = e(() => {
    ((ut = p()),
      _e(),
      k(),
      n(),
      h(),
      ue(),
      je(),
      se(),
      (dt = i()),
      C(),
      Fe(),
      O(),
      qe(),
      q(),
      _(),
      ge(),
      ce(),
      Me(),
      V(),
      Ue(),
      Ge(),
      Te(),
      Ye(),
      Ae(),
      (Y = l()));
  }))();
}
function pt(e) {
  let t = (0, bt.c)(44),
    { pageId: n, active: r, documentType: i } = e,
    a = r === void 0 || r,
    o = i === void 0 ? `page` : i,
    s = ae(),
    c = x(),
    [l, u] = (0, xt.useState)(St),
    d = te(we),
    f = a && c && d != null,
    p;
  t[0] === n
    ? (p = t[1])
    : ((p = (e) => {
        let { pageParam: t, signal: r } = e;
        return De.safeGet(`/pages/{page_id}/views`, {
          parameters: { path: { page_id: n }, query: { cursor: t || void 0, limit: St } },
          signal: r,
        });
      }),
      (t[0] = n),
      (t[1] = p));
  let m;
  t[2] !== d || t[3] !== n
    ? ((m = [`space`, `page-view-history`, d, n]), (t[2] = d), (t[3] = n), (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== f || t[6] !== p || t[7] !== m
    ? ((h = {
        enabled: f,
        getNextPageParam: yt,
        initialPageParam: ``,
        queryFn: p,
        queryKey: m,
        retry: !1,
        staleTime: 0,
      }),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m),
      (t[8] = h))
    : (h = t[8]);
  let {
      data: g,
      fetchNextPage: _,
      hasNextPage: v,
      isError: y,
      isFetchingNextPage: b,
      isFetchNextPageError: S,
      isPending: C,
      refetch: w,
    } = L(h),
    E,
    D,
    O,
    k,
    A,
    j;
  if (
    t[9] !== g?.pages ||
    t[10] !== o ||
    t[11] !== s ||
    t[12] !== y ||
    t[13] !== C ||
    t[14] !== w ||
    t[15] !== l
  ) {
    j = g?.pages.flatMap(vt);
    let e;
    t[22] === g?.pages ? (e = t[23]) : ((e = new Map(g?.pages.flatMap(gt))), (t[22] = g?.pages), (t[23] = e));
    let n = e,
      r;
    t[24] === s
      ? (r = t[25])
      : ((r = s.formatMessage({
          id: `codex.space.page.viewHistory.unknownPerson`,
          defaultMessage: `Unknown person`,
          description: `Privacy-safe fallback name shown when a shared Page viewer's workspace display name is unavailable`,
        })),
        (t[24] = s),
        (t[25] = r));
    let i = r;
    ((O = `flex flex-col gap-4`),
      t[26] === C
        ? (k = t[27])
        : ((k = C
            ? (0, X.jsxs)(`div`, {
                role: `status`,
                children: [
                  (0, X.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, X.jsx)(H, {
                      id: `codex.space.page.viewHistory.loading`,
                      defaultMessage: `Loading…`,
                      description: `Accessible status while the list of people who viewed a shared Page is loading`,
                    }),
                  }),
                  (0, X.jsx)(`div`, {
                    "aria-hidden": !0,
                    className: `flex flex-col gap-2`,
                    children: (0, X.jsx)(`div`, {
                      className: `flex flex-col`,
                      children: [`w-2/3`, `w-1/2`, `w-3/4`].map(ht),
                    }),
                  }),
                ],
              })
            : null),
          (t[26] = C),
          (t[27] = k)),
      (A =
        y && j == null
          ? (0, X.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, X.jsx)(`span`, {
                  className: `text-sm text-codex-description`,
                  children: (0, X.jsx)(H, {
                    id: `codex.space.page.viewHistory.error`,
                    defaultMessage: `Could not load view history`,
                    description: `Error shown when the owner-only list of people who viewed a shared Page cannot be retrieved`,
                  }),
                }),
                (0, X.jsx)(T, {
                  color: `secondary`,
                  size: `compact`,
                  onClick: () => {
                    w();
                  },
                  children: (0, X.jsx)(H, {
                    id: `codex.space.page.viewHistory.retry`,
                    defaultMessage: `Try again`,
                    description: `Button that retries loading the list of people who viewed a shared Page after the request failed`,
                  }),
                }),
              ],
            })
          : null),
      (E =
        j?.length === 0
          ? (0, X.jsx)(`span`, {
              className: `text-sm text-codex-description`,
              children: (0, X.jsx)(H, {
                id: `codex.space.page.viewHistory.empty`,
                defaultMessage: `No views yet`,
                description: `Empty state shown when nobody has recorded a view of the current shared Page`,
              }),
            })
          : null),
      (D =
        j != null && j.length > 0
          ? (0, X.jsx)(`div`, {
              className: `flex flex-col`,
              role: `list`,
              "aria-label": s.formatMessage(
                {
                  id: `codex.space.page.viewHistory.viewers.byDocumentType`,
                  defaultMessage: `{documentType, select, granola_presentation {Slide viewers} granola_workbook {Sheet viewers} other {Page viewers}}`,
                  description: `Accessible label for the list of people who viewed the current Page. documentType selects slide, sheet, or page for the current document.`,
                },
                { documentType: o },
              ),
              children: j.slice(0, l).map((e) => {
                let t = n.has(e.account_user_id) ? e.account_user_id : null,
                  r = n.get(e.account_user_id) ?? i;
                return (0, X.jsx)(
                  `div`,
                  {
                    role: `listitem`,
                    children: (0, X.jsx)(Se, {
                      size: `compact`,
                      avatar: (0, X.jsx)(Ke, {
                        accountUserId: t,
                        label: r,
                        children: (0, X.jsx)(We, { accountUserId: t, name: r, size: `sm` }),
                      }),
                      label: (0, X.jsx)(Ke, {
                        accountUserId: t,
                        label: r,
                        children: (0, X.jsx)(`span`, { title: r, children: r }),
                      }),
                      trailingContent: (0, X.jsx)(`time`, {
                        className: `shrink-0 text-xs text-secondary tabular-nums`,
                        dateTime: e.last_viewed_at,
                        title: s.formatDate(e.last_viewed_at, { dateStyle: `medium`, timeStyle: `short` }),
                        children: (0, X.jsx)(Be, { dateString: e.last_viewed_at, format: `relative` }),
                      }),
                    }),
                  },
                  e.account_user_id,
                );
              }),
            })
          : null),
      (t[9] = g?.pages),
      (t[10] = o),
      (t[11] = s),
      (t[12] = y),
      (t[13] = C),
      (t[14] = w),
      (t[15] = l),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A),
      (t[21] = j));
  } else ((E = t[16]), (D = t[17]), (O = t[18]), (k = t[19]), (A = t[20]), (j = t[21]));
  let M;
  t[28] === S
    ? (M = t[29])
    : ((M = S
        ? (0, X.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `status`,
            children: (0, X.jsx)(H, {
              id: `codex.space.page.viewHistory.moreError`,
              defaultMessage: `Couldn’t load more views. Try again below.`,
              description: `Message shown when loading another page of viewers fails; the existing viewers remain visible and the load-more button retries`,
            }),
          })
        : null),
      (t[28] = S),
      (t[29] = M));
  let N;
  t[30] !== _ || t[31] !== v || t[32] !== b || t[33] !== j || t[34] !== l
    ? ((N =
        (j != null && j.length > l) || v
          ? (0, X.jsx)(T, {
              className: `shrink-0 justify-center`,
              color: `ghost`,
              loading: b,
              size: `compact`,
              onClick: () => {
                j != null && j.length > l
                  ? u(j.length)
                  : _().then((e) => {
                      e.isError || u(mt);
                    });
              },
              children: (0, X.jsx)(H, {
                id: `codex.space.page.viewHistory.showMoreViewers`,
                defaultMessage: `Show more viewers`,
                description: `Button that reveals more people who viewed a shared Page, loading the next group when needed`,
              }),
            })
          : null),
      (t[30] = _),
      (t[31] = v),
      (t[32] = b),
      (t[33] = j),
      (t[34] = l),
      (t[35] = N))
    : (N = t[35]);
  let P;
  return (
    t[36] !== E || t[37] !== D || t[38] !== M || t[39] !== N || t[40] !== O || t[41] !== k || t[42] !== A
      ? ((P = (0, X.jsxs)(`div`, { className: O, children: [k, A, E, D, M, N] })),
        (t[36] = E),
        (t[37] = D),
        (t[38] = M),
        (t[39] = N),
        (t[40] = O),
        (t[41] = k),
        (t[42] = A),
        (t[43] = P))
      : (P = t[43]),
    P
  );
}
function mt(e) {
  return e + St;
}
function ht(e) {
  return (0, X.jsx)(
    Se,
    {
      size: `compact`,
      avatar: (0, X.jsx)(`span`, {
        className: `size-6 shrink-0 overflow-hidden rounded-full`,
        children: (0, X.jsx)(J, { as: `span`, size: `fill` }),
      }),
      label: (0, X.jsx)(J, { className: e, size: `sm` }),
      trailingContent: (0, X.jsx)(J, { className: `w-12 shrink-0`, size: `sm` }),
    },
    e,
  );
}
function gt(e) {
  return (e.actor_displays ?? []).map(_t);
}
function _t(e) {
  return [e.account_user_id, e.display_name];
}
function vt(e) {
  return e.items;
}
function yt(e) {
  return e.next_cursor ?? void 0;
}
var bt, xt, X, St;
function Ct() {
  return (Ct = e(() => {
    ((bt = p()),
      re(),
      v(),
      k(),
      (xt = i()),
      C(),
      O(),
      Re(),
      ge(),
      Ue(),
      Ge(),
      Te(),
      Ae(),
      Pe(),
      (X = l()),
      (St = 20));
  }))();
}
function wt(e) {
  let t = (0, Tt.c)(8),
    {
      animation: n,
      open: r,
      documentType: i,
      versions: a,
      canViewEdits: o,
      canViewHistory: s,
      document: c,
      headerOverlay: l,
      view: d,
      onViewChange: f,
      onClose: p,
      onRevealSection: m,
      pageId: h,
    } = e,
    g = r === void 0 || r,
    _ = i === void 0 ? `page` : i,
    v = o === void 0 || o,
    y = l !== void 0 && l,
    x = ae(),
    S = (0, Z.useId)(),
    C = (0, Z.useRef)(null),
    w = (0, Z.useRef)(!1),
    T = te(He),
    E = [`views`, `edits`, `versions`].filter(
      (e) => (e === `views` && s) || (e === `edits` && v) || (e === `versions` && a != null),
    ),
    D = E.includes(d) ? d : E[0],
    O;
  t[0] === d ? (O = t[1]) : ((O = [d]), (t[0] = d), (t[1] = O));
  let [k, A] = (0, Z.useState)(O);
  D != null && !k.includes(D) && A([...k, D]);
  let M = f != null && E.length > 1,
    P,
    F;
  if (
    (t[2] === s
      ? ((P = t[3]), (F = t[4]))
      : ((P = () => {
          !s &&
            w.current &&
            ((w.current = !1),
            C.current
              ?.querySelector(
                `[role="tab"][aria-selected="true"], [data-page-activity-view]:not([hidden]) :is([role="tabpanel"], [role="region"])`,
              )
              ?.focus());
        }),
        (F = [s]),
        (t[2] = s),
        (t[3] = P),
        (t[4] = F)),
    (0, Z.useLayoutEffect)(P, F),
    D == null)
  )
    return null;
  let I = b,
    L =
      g &&
      (0, Q.jsx)(Ze, {
        animation: n,
        label: x.formatMessage($.title, { documentType: _ }),
        onClose: p,
        storageKey: `pages:activity-panel-width`,
        variant: `glass`,
        children: (0, Q.jsx)(`div`, {
          ref: C,
          "data-page-activity-panel": !0,
          className: u(`h-full min-h-0`, y && `pt-[var(--viewer-header-height)]`),
          onFocusCapture: (e) => {
            w.current =
              e.target.id === `${S}-views-tab` ||
              e.target.closest(`[data-page-activity-view="views"]`) != null;
          },
          onBlurCapture: (e) => {
            e.currentTarget.contains(e.relatedTarget) || (w.current = !1);
          },
          children: (0, Q.jsx)(`div`, {
            className: `flex h-full min-h-0 p-2 pt-px`,
            children: (0, Q.jsxs)(ee, {
              className: `@container/app-shell-detail-panel flex min-h-0 flex-1 flex-col overflow-hidden text-default`,
              variant: `island`,
              children: [
                (0, Q.jsx)(j, {
                  title: (0, Q.jsx)(H, { ...$.title, values: { documentType: _ } }),
                  closeLabel: x.formatMessage(
                    {
                      id: `codex.space.page.activity.close.byDocumentType`,
                      defaultMessage: `{documentType, select, granola_presentation {Close slide activity} granola_workbook {Close sheet activity} other {Close page activity}}`,
                      description: `Accessible label for closing the Page activity side panel. documentType selects slide, sheet, or page for the current document.`,
                    },
                    { documentType: _ },
                  ),
                  onClose: p,
                }),
                M &&
                  (0, Q.jsx)(`div`, {
                    className: `flex shrink-0 flex-col gap-2 px-toolbar pb-3`,
                    children: (0, Q.jsx)(le, {
                      ariaLabel: x.formatMessage($.title, { documentType: _ }),
                      onSelect: f,
                      selectedKey: D,
                      tabs: E.map((e) => ({
                        key: e,
                        name: (0, Q.jsx)(H, { ...$[e] }),
                        panelId: `${S}-${e}`,
                      })),
                    }),
                  }),
                E.map((e) =>
                  (0, Q.jsx)(
                    `div`,
                    {
                      className: D === e ? `flex min-h-0 flex-1 flex-col` : `hidden`,
                      hidden: D !== e,
                      inert: D !== e,
                      "data-page-activity-view": e,
                      children:
                        e === `versions`
                          ? (0, Q.jsx)(`div`, {
                              id: `${S}-${e}`,
                              className: `flex min-h-0 flex-1 flex-col`,
                              role: M ? `tabpanel` : `region`,
                              "aria-labelledby": M ? `${S}-${e}-tab` : void 0,
                              "aria-label": M ? void 0 : x.formatMessage($[e]),
                              tabIndex: 0,
                              children: k.includes(e) ? a : null,
                            })
                          : (0, Q.jsx)(N, {
                              className: `relative grid min-h-0 flex-1 overflow-hidden`,
                              fade: `mask`,
                              scrollClassName: `min-h-0 overflow-y-auto overscroll-contain px-toolbar py-3 focus-visible:outline-2 focus-visible:outline-ring`,
                              scrollProps: {
                                id: `${S}-${e}`,
                                role: M ? `tabpanel` : `region`,
                                "aria-labelledby": M ? `${S}-${e}-tab` : void 0,
                                "aria-label": M ? void 0 : x.formatMessage($[e]),
                                tabIndex: 0,
                                style: { scrollPaddingBottom: T },
                              },
                              children: (0, Q.jsx)(`div`, {
                                style: { paddingBottom: T },
                                children:
                                  k.includes(e) &&
                                  (e === `views`
                                    ? (0, Q.jsx)(pt, { documentType: _, active: D === `views`, pageId: h })
                                    : (0, Q.jsx)(it, { document: c, onRevealSection: m, pageId: h })),
                              }),
                            }),
                    },
                    e,
                  ),
                ),
              ],
            }),
          }),
        }),
      }),
    R;
  return (
    t[5] !== I || t[6] !== L
      ? ((R = (0, Q.jsx)(I, { propagate: !0, children: L })), (t[5] = I), (t[6] = L), (t[7] = R))
      : (R = t[7]),
    R
  );
}
var Tt, Z, Q, $;
function Et() {
  return (Et = e(() => {
    ((Tt = p()),
      f(),
      s(),
      k(),
      (Z = i()),
      C(),
      tt(),
      I(),
      F(),
      ft(),
      Ct(),
      pe(),
      w(),
      m(),
      (Q = l()),
      ($ = D({
        title: {
          id: `codex.space.page.activity.title.byDocumentType`,
          defaultMessage: `{documentType, select, granola_presentation {Slide activity} granola_workbook {Sheet activity} other {Page activity}}`,
          description: `Heading for the side panel containing versions, edits, and views of the current Page. documentType selects slide, sheet, or page for the current document.`,
        },
        views: {
          id: `codex.space.page.activity.views`,
          defaultMessage: `Views`,
          description: `Tab showing the people who viewed the current Page`,
        },
        edits: {
          id: `codex.space.page.activity.edits`,
          defaultMessage: `Edits`,
          description: `Tab showing who last edited each section of the current Page`,
        },
        versions: {
          id: `codex.space.page.activity.versions`,
          defaultMessage: `Versions`,
          description: `Tab showing saved Page versions and comparison controls`,
        },
      })));
  }))();
}
export { rt as i, Et as n, nt as r, wt as t };
//# sourceMappingURL=page-activity-panel-4bd0082c62fe.js.map
