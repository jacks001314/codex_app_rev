import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  Spn as r,
  hmn as i,
  kMt as a,
  kmn as o,
} from "./app-initial-f094ef01c64d.js";
function s(e) {
  let t = (0, u.c)(20),
    {
      actions: r,
      cancelAction: i,
      disabled: o,
      hasPendingAccessChange: s,
      hasPendingInvitees: f,
      idleActions: p,
      isSaving: m,
    } = e,
    h;
  t[0] !== s || t[1] !== f
    ? ((h = l({ hasPendingAccessChange: s, hasPendingInvitees: f })),
      (t[0] = s),
      (t[1] = f),
      (t[2] = h))
    : (h = t[2]);
  let g = h;
  if (g == null) return p ?? null;
  let _;
  t[3] !== i || t[4] !== o || t[5] !== m
    ? ((_ =
        i == null
          ? null
          : (0, d.jsx)(a, {
              color: `secondary`,
              disabled: o || m,
              size: `medium`,
              onClick: i.onClick,
              children: (0, d.jsx)(n, {
                id: `shareDialog.primaryAction.cancel`,
                defaultMessage: `Cancel`,
                description: `Button label for cancelling staged changes in a share dialog`,
              }),
            })),
      (t[3] = i),
      (t[4] = o),
      (t[5] = m),
      (t[6] = _))
    : (_ = t[6]);
  let v = r[g],
    y = r[g],
    b;
  t[7] !== g || t[8] !== r || t[9] !== m
    ? ((b = m
        ? (0, d.jsx)(n, {
            id: `shareDialog.primaryAction.saving`,
            defaultMessage: `Saving`,
            description: `Button label while a share dialog saves permissions or invites`,
          })
        : (r[g].label ?? (0, d.jsx)(c, { action: g }))),
      (t[7] = g),
      (t[8] = r),
      (t[9] = m),
      (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== o || t[12] !== m || t[13] !== v.onClick || t[14] !== y.type || t[15] !== b
    ? ((x = (0, d.jsx)(a, {
        "aria-busy": m,
        color: `primary`,
        disabled: o,
        loading: m,
        size: `medium`,
        onClick: v.onClick,
        type: y.type,
        children: b,
      })),
      (t[11] = o),
      (t[12] = m),
      (t[13] = v.onClick),
      (t[14] = y.type),
      (t[15] = b),
      (t[16] = x))
    : (x = t[16]);
  let S;
  return (
    t[17] !== _ || t[18] !== x
      ? ((S = (0, d.jsxs)(`div`, {
          className: `flex max-w-full shrink-0 flex-wrap items-center justify-end gap-3`,
          children: [_, x],
        })),
        (t[17] = _),
        (t[18] = x),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
function c(e) {
  let t = (0, u.c)(2),
    { action: r } = e;
  switch (r) {
    case `invite`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, d.jsx)(n, {
              id: `shareDialog.primaryAction.invite`,
              defaultMessage: `Invite`,
              description: `Button label for inviting selected people or groups in a share dialog`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `share`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, d.jsx)(n, {
              id: `shareDialog.primaryAction.save`,
              defaultMessage: `Save`,
              description: `Button label for saving a share dialog access change`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function l({ hasPendingAccessChange: e, hasPendingInvitees: t }) {
  return !e && !t ? null : e && !t ? `share` : `invite`;
}
var u,
  d,
  f = e(() => {
    ((u = o()), r(), t(), (d = i()));
  });
export { f as n, s as t };
//# sourceMappingURL=dialog-action-cd89a4b0ac08.js.map
