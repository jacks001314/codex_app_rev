import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  AMt as n,
  Amn as r,
  BV as i,
  Cpn as a,
  F3t as o,
  JG as s,
  KG as c,
  K_ as l,
  M6t as u,
  N3t as d,
  N6t as f,
  O3t as p,
  Opn as m,
  Spn as h,
  ZG as g,
  a3t as _,
  hmn as v,
  jXt as y,
  kMt as b,
  kXt as x,
  kmn as S,
  o3t as C,
  q_ as w,
  zV as T,
} from "./app-initial-f094ef01c64d.js";
import {
  Uw as E,
  Ww as D,
  _h as O,
  gh as k,
  hh as A,
  vh as j,
} from "./app-primary-4c40d73a1074.js";
var M,
  N,
  P = e(() => {
    (r(),
      (M = v()),
      (N = (e) =>
        (0, M.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, M.jsx)(`path`, {
              d: `M5.14518 8.20723C4.81869 8.30403 4.52965 8.56906 4.36686 8.94649C4.16207 9.42187 4.22381 9.91162 4.53873 10.2268L9.77311 15.4611L9.89908 15.5676C10.2102 15.7875 10.6375 15.8122 11.0534 15.633C11.4312 15.4701 11.6961 15.1806 11.7926 14.8537L12.7868 15.8488C12.4904 16.305 12.0507 16.6517 11.5797 16.8547C10.7869 17.1963 9.76213 17.1946 8.98502 16.5412L8.83268 16.4016L6.68521 14.2541L2.97037 17.9709C2.7107 18.2302 2.28855 18.2303 2.02896 17.9709C1.76958 17.7113 1.7697 17.2892 2.02896 17.0295L5.74479 13.3137L3.5983 11.1672C2.80696 10.3756 2.78071 9.26596 3.14518 8.42012C3.34827 7.94906 3.6947 7.50849 4.15104 7.21211L5.14518 8.20723Z`,
            }),
            (0, M.jsx)(`path`, {
              d: `M17.1364 16.1965C17.3959 16.4562 17.396 16.8773 17.1364 17.1369C16.8767 17.3964 16.4556 17.3964 16.196 17.1369L17.1364 16.1965Z`,
            }),
            (0, M.jsx)(`path`, {
              d: `M2.86197 2.8625C3.08913 2.63535 3.44079 2.60732 3.69889 2.77754L3.80338 2.8625L17.1364 16.1965L16.6657 16.6662L16.196 17.1369L2.86197 3.80391L2.77701 3.69942C2.60677 3.44138 2.63494 3.08969 2.86197 2.8625Z`,
            }),
            (0, M.jsx)(`path`, {
              d: `M10.9372 2.70723C11.8014 1.63068 13.4235 1.53079 14.4137 2.52071L17.4792 5.58614L17.5719 5.68379C18.4618 6.68016 18.3344 8.22636 17.2926 9.0627L17.1852 9.14375L14.2799 11.218L13.3268 10.2648L16.4118 8.06172L16.5016 7.98946C16.8967 7.63429 16.9467 7.02804 16.6159 6.6125L16.5387 6.52657L13.4733 3.46114C13.0597 3.04787 12.391 3.07483 12.0104 3.49825L11.9381 3.58809L9.73502 6.67208L8.78092 5.71895L10.8561 2.81465L10.9372 2.70723Z`,
            }),
          ],
        })));
  });
function F(e) {
  let t = (0, L.c)(9),
    { gizmoId: n } = e,
    { data: r } = d(A, n);
  if (r == null) return null;
  let i;
  t[0] === r.gizmo.display.name
    ? (i = t[1])
    : ((i = r.gizmo.display.name.trim()), (t[0] = r.gizmo.display.name), (t[1] = i));
  let a = i,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = a ? (0, R.jsx)(`span`, { className: `truncate`, children: a }) : null),
      (t[2] = a),
      (t[3] = o));
  let s;
  t[4] === r ? (s = t[5]) : ((s = (0, R.jsx)(I, { gizmo: r })), (t[4] = r), (t[5] = s));
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, R.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-1 select-none`,
          children: [o, s],
        })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function I(e) {
  let n = (0, L.c)(26),
    { gizmo: r } = e,
    i = t(_),
    u = m(),
    { data: d } = o(k),
    p;
  n[0] !== r.gizmo.id || n[1] !== d
    ? ((p = d?.some((e) => {
        let { item: t } = e;
        return t.gizmo.id === r.gizmo.id;
      })),
      (n[0] = r.gizmo.id),
      (n[1] = d),
      (n[2] = p))
    : (p = n[2]);
  let h = p,
    g = `https://chatgpt.com/gpts/editor/${encodeURIComponent(r.gizmo.id)}`,
    v;
  n[3] === u
    ? (v = n[4])
    : ((v = u.formatMessage({
        id: `chatgptConversations.customGpt.actionsMenu`,
        defaultMessage: `GPT actions`,
        description: `Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop`,
      })),
      (n[3] = u),
      (n[4] = v));
  let x;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, R.jsx)(T, { className: `icon-sm` })), (n[5] = x))
    : (x = n[5]);
  let S;
  n[6] === v
    ? (S = n[7])
    : ((S = (0, R.jsx)(b, { "aria-label": v, color: `ghost`, size: `icon`, children: x })),
      (n[6] = v),
      (n[7] = S));
  let C = h ? N : l,
    w;
  n[8] !== r || n[9] !== u || n[10] !== h || n[11] !== i
    ? ((w = () => {
        j(i, r, !h).catch(() => {
          i.get(y).danger(
            u.formatMessage({
              id: `chatgptConversations.customGpt.pinFailed`,
              defaultMessage: `Couldn't update pinned GPT`,
              description: `Error toast shown when adding or removing a custom GPT from the user's pinned sidebar items fails in Codex Desktop`,
            }),
          );
        });
      }),
      (n[8] = r),
      (n[9] = u),
      (n[10] = h),
      (n[11] = i),
      (n[12] = w))
    : (w = n[12]);
  let D;
  n[13] === h
    ? (D = n[14])
    : ((D = h
        ? (0, R.jsx)(a, {
            id: `chatgptConversations.customGpt.unpin`,
            defaultMessage: `Unpin GPT`,
            description: `Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop`,
          })
        : (0, R.jsx)(a, {
            id: `chatgptConversations.customGpt.pin`,
            defaultMessage: `Pin GPT`,
            description: `Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop`,
          })),
      (n[13] = h),
      (n[14] = D));
  let O;
  n[15] !== C || n[16] !== w || n[17] !== D
    ? ((O = (0, R.jsx)(s.Item, { LeftIcon: C, onSelect: w, children: D })),
      (n[15] = C),
      (n[16] = w),
      (n[17] = D),
      (n[18] = O))
    : (O = n[18]);
  let A;
  n[19] !== g || n[20] !== r.gizmo.current_user_permission?.can_write
    ? ((A = r.gizmo.current_user_permission?.can_write
        ? (0, R.jsx)(s.Item, {
            href: g,
            LeftIcon: E,
            onClick: (e) => {
              f({
                event: e,
                href: g,
                initiator: `open_in_browser_bridge`,
                openTarget: `external-browser`,
              });
            },
            children: (0, R.jsx)(a, {
              id: `chatgptConversations.customGpt.edit`,
              defaultMessage: `Edit GPT`,
              description: `Compact overflow-menu action that opens the current custom GPT in its ChatGPT web editor from Codex Desktop`,
            }),
          })
        : null),
      (n[19] = g),
      (n[20] = r.gizmo.current_user_permission?.can_write),
      (n[21] = A))
    : (A = n[21]);
  let M;
  return (
    n[22] !== S || n[23] !== O || n[24] !== A
      ? ((M = (0, R.jsxs)(c, {
          align: `start`,
          contentWidth: `menu`,
          triggerButton: S,
          children: [O, A],
        })),
        (n[22] = S),
        (n[23] = O),
        (n[24] = A),
        (n[25] = M))
      : (M = n[25]),
    M
  );
}
var L,
  R,
  z = e(() => {
    ((L = S()), p(), h(), n(), g(), u(), x(), D(), w(), i(), P(), C(), O(), (R = v()));
  });
export { F as n, z as r, I as t };
//# sourceMappingURL=chatgpt-gizmo-header-b574da470fab.js.map
