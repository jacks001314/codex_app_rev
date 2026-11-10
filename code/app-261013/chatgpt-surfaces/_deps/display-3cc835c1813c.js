import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Dh as t,
  IDt as n,
  Mz as r,
  Nz as i,
  Oh as a,
  jDt as o,
  vzt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  $kr as u,
  JAr as d,
  QAr as f,
  Zkr as p,
  _Pn as m,
  aAr as h,
  dPn as g,
  dkr as _,
  fPn as v,
  fkr as y,
  gPn as b,
  hPn as x,
  iAr as S,
  lAr as C,
  rAr as w,
  uPn as T,
  vPn as E,
} from "./app-initial-5851df3f6cb1.js";
import { n as D, t as O } from "./cloud-automation-actions-3a594ba7517b.js";
function k(e) {
  let i = (0, A.c)(28),
    { ref: a, title: o, subtitle: s, ariaLabel: c, canOpen: l, onOpen: u, openLabel: d, actions: f } = e,
    p = (0, j.useId)(),
    h = (0, j.useId)(),
    _ = f;
  if (f == null && l) {
    let e;
    i[0] === d
      ? (e = i[1])
      : ((e =
          d ??
          (0, M.jsx)(n, {
            id: `automation.updateDirective.open`,
            defaultMessage: `Open`,
            description: `Button label for opening an automation from a task message`,
          })),
        (i[0] = d),
        (i[1] = e));
    let t;
    (i[2] === e ? (t = i[3]) : ((t = (0, M.jsx)(b, { label: e })), (i[2] = e), (i[3] = t)), (_ = t));
  }
  let v;
  i[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, M.jsx)(x, { children: (0, M.jsx)(r, { asset: t, "aria-hidden": !0 }) })), (i[4] = v))
    : (v = i[4]);
  let y;
  i[5] !== o || i[6] !== h
    ? ((y = (0, M.jsx)(`span`, { id: h, children: o })), (i[5] = o), (i[6] = h), (i[7] = y))
    : (y = i[7]);
  let S;
  i[8] !== p || i[9] !== s
    ? ((S = s ? (0, M.jsx)(`span`, { id: p, children: s }) : null), (i[8] = p), (i[9] = s), (i[10] = S))
    : (S = i[10]);
  let C;
  i[11] === _
    ? (C = i[12])
    : ((C =
        _ == null
          ? null
          : (0, M.jsx)(`span`, {
              className: `pointer-events-auto flex shrink-0 items-center gap-1`,
              children: _,
            })),
      (i[11] = _),
      (i[12] = C));
  let w;
  i[13] !== y || i[14] !== S || i[15] !== C
    ? ((w = (0, M.jsx)(m, {
        className: `pointer-events-none relative z-10`,
        icon: v,
        title: y,
        subtitle: S,
        trailing: C,
      })),
      (i[13] = y),
      (i[14] = S),
      (i[15] = C),
      (i[16] = w))
    : (w = i[16]);
  let E = w,
    D = c == null ? h : void 0,
    O = s ? p : void 0,
    k = !l,
    N = f == null ? E : null,
    P;
  i[17] !== c || i[18] !== u || i[19] !== a || i[20] !== D || i[21] !== O || i[22] !== k || i[23] !== N
    ? ((P = (0, M.jsx)(g, {
        ref: a,
        "aria-label": c,
        "aria-labelledby": D,
        "aria-describedby": O,
        disabled: k,
        onClick: u,
        children: N,
      })),
      (i[17] = c),
      (i[18] = u),
      (i[19] = a),
      (i[20] = D),
      (i[21] = O),
      (i[22] = k),
      (i[23] = N),
      (i[24] = P))
    : (P = i[24]);
  let F = f == null ? null : E,
    I;
  return (
    i[25] !== P || i[26] !== F
      ? ((I = (0, M.jsx)(T, {
          as: `span`,
          className: `mt-3 select-none`,
          variant: `attachment`,
          children: (0, M.jsxs)(`span`, {
            className: `group/resource-card relative`,
            "data-automation-card": !0,
            children: [P, F],
          }),
        })),
        (i[25] = P),
        (i[26] = F),
        (i[27] = I))
      : (I = i[27]),
    I
  );
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = s()), a(), (j = l()), o(), i(), E(), (M = c()));
  }))();
}
function P(e) {
  let t = (0, I.c)(3),
    { item: n, onEdit: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, L.jsx)(O, { item: n, onEdit: r, renderActions: F })), (t[0] = n), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function F(e) {
  let { runNowAction: t, editAction: r } = e;
  return (0, L.jsxs)(L.Fragment, {
    children: [
      r == null
        ? null
        : (0, L.jsx)(v, {
            disabled: r.disabled,
            onClick: r.onSelect,
            children: (0, L.jsx)(n, {
              id: `settings.automations.edit`,
              defaultMessage: `Edit`,
              description: `Menu item for editing a scheduled task`,
            }),
          }),
      t == null
        ? null
        : (0, L.jsx)(v, {
            disabled: t.disabled,
            onClick: t.onSelectAsync ?? t.onSelect,
            children: (0, L.jsx)(n, {
              id: `settings.automations.runNow`,
              defaultMessage: `Run now`,
              description: `Button label for running an automation immediately`,
            }),
          }),
    ],
  });
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = s()), o(), D(), E(), (L = c()));
  }))();
}
function z(e, t, n) {
  let r = t != null && h(t.automation) === `completed`,
    i = !r && (t?.automation.is_enabled ?? e.isEnabled),
    a = t == null ? e.title : p(t);
  if (!i)
    return {
      isEnabled: i,
      nextRunAt: null,
      scheduleLabel: r ? n.formatMessage(_.completed) : n.formatMessage(_.paused),
      title: a,
    };
  let o = t?.automation.schedule ?? e.schedule,
    s = (/^DTSTART[;:]/m.test(o) && !/^RRULE:/m.test(o)) || /(?:^|[;:])COUNT=1(?:;|$)/m.test(o),
    c = t == null ? (e.nextRunAt ?? null) : u(t),
    l;
  return (
    (l = s
      ? d({
          rrule: o,
          nextRunAt: c == null ? null : Date.parse(c),
          intl: n,
          fallbackMessage: n.formatMessage({
            id: `settings.automations.rruleSummaryFallback`,
            defaultMessage: `Custom schedule`,
            description: `Fallback label when RRULE summary cannot be generated`,
          }),
        })
      : t == null
        ? e.displaySchedule?.trim() ||
          d({
            rrule: w(e.schedule),
            intl: n,
            fallbackMessage: n.formatMessage({
              id: `settings.automations.rruleSummaryFallback`,
              defaultMessage: `Custom schedule`,
              description: `Fallback label when RRULE summary cannot be generated`,
            }),
          })
        : S(t, n)),
    { isEnabled: i, nextRunAt: c, scheduleLabel: l, title: a }
  );
}
function B() {
  return (B = e(() => {
    (f(), y(), C());
  }))();
}
export { k as a, R as i, B as n, N as o, P as r, z as t };
//# sourceMappingURL=display-3cc835c1813c.js.map
