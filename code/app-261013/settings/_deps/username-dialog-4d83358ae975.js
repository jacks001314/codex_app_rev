import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  EPt as r,
  GE as i,
  IDt as a,
  QC as o,
  TJ as s,
  TLt as c,
  VDt as l,
  WE as u,
  _O as d,
  fO as f,
  i3 as p,
  iw as m,
  jDt as h,
  mO as g,
  nst as _,
  pLt as v,
  r3 as y,
  sO as b,
  t3 as x,
  tst as S,
  vO as C,
  vzt as w,
  xMt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as E,
  Ddr as D,
  Edr as O,
  TPn as k,
  Unn as A,
  crn as j,
  iPr as M,
  sPr as N,
} from "./app-initial-5851df3f6cb1.js";
import { C as P, T as F, t as I, w as L } from "./src-c65a930b3c0e.js";
function R(e, t) {
  if (e instanceof Error) {
    let n = O(e);
    if (n != null) {
      if (n.type === `profile_update_moderation_failed`)
        switch (n.field) {
          case `display_name`:
            return t.formatMessage({
              id: `profile.displayNameModerationError`,
              defaultMessage: `Your display name wasn’t accepted. Try a different name.`,
              description: `Error shown when safety moderation identifies the display name as the rejected profile field`,
            });
          case `profile_asset_pointer`:
            return t.formatMessage({
              id: `profile.photoModerationError`,
              defaultMessage: `Your profile picture wasn’t accepted. Try another picture.`,
              description: `Error shown when safety moderation identifies the profile picture as the rejected profile field`,
            });
          case `description`:
            return t.formatMessage({
              id: `profile.bioModerationError`,
              defaultMessage: `Your bio wasn’t accepted. Try revising it.`,
              description: `Error shown when safety moderation identifies the biography as the rejected profile field`,
            });
          case void 0:
          default:
            return n.message;
        }
      return n.message;
    }
    if (e.message.length > 0) {
      try {
        let t = B.safeParse(JSON.parse(e.message));
        if (t.success) return t.data.msg;
      } catch {}
      return e.message;
    }
  }
  return null;
}
function z(e) {
  if (!(e instanceof Error)) return null;
  let t = O(e)?.field;
  return t === `display_name` || t === `profile_asset_pointer` || t === `description` ? t : null;
}
var B;
function V() {
  return (V = e(() => {
    (r(), D(), (B = v({ type: c(), msg: c() })));
  }))();
}
function H(e, t) {
  return e instanceof A
    ? F(e.reason, t)
    : (R(e, t) ??
        t.formatMessage({
          id: `profile.usernameUpdateError`,
          defaultMessage: `Unable to update username`,
          description: `Fallback error shown when profile username update fails`,
        }));
}
function U() {
  return (U = e(() => {
    (I(), j(), V());
  }))();
}
function W(e) {
  let t = (0, Y.c)(23),
    {
      value: r,
      accountId: i,
      isSaving: s,
      isProfileEditing: c,
      presentation: u,
      onClose: d,
      onEditStarted: f,
      onChangeStarted: p,
      onSave: m,
    } = e,
    h = c !== void 0 && c,
    g = u === void 0 ? `inline` : u,
    v = l(),
    b = _(),
    x = g === `dialog`,
    S;
  t[0] !== i || t[1] !== b
    ? ((S = (e) =>
        b.fetchQuery({
          queryKey: [`profile`, `username-availability`, i, e],
          queryFn: () =>
            M.safePost(`/wham/profiles/username/check`, {
              additionalHeaders: i == null ? void 0 : { "ChatGPT-Account-ID": i },
              requestBody: { username: e },
            }),
          retry: !1,
          staleTime: 1e4,
        })),
      (t[0] = i),
      (t[1] = b),
      (t[2] = S))
    : (S = t[2]);
  let C;
  t[3] === v ? (C = t[4]) : ((C = (e) => H(e, v)), (t[3] = v), (t[4] = C));
  let w;
  t[5] !== s || t[6] !== g
    ? ((w =
        g === `inline`
          ? void 0
          : (e) => {
              let { "aria-label": t, children: r, onClick: i } = e;
              return g === `dialog`
                ? null
                : (0, X.jsx)(o, {
                    ariaLabel: t,
                    disabled: s,
                    label: (0, X.jsx)(`span`, {
                      className: `font-normal`,
                      children: (0, X.jsx)(a, {
                        id: `profile.usernameInputLabel`,
                        defaultMessage: `Username`,
                        description: `Accessible label for the editable profile username`,
                      }),
                    }),
                    trailing: (0, X.jsxs)(X.Fragment, {
                      children: [
                        (0, X.jsx)(`span`, { className: `text-sm text-secondary`, children: r }),
                        (0, X.jsx)(n, { className: `text-secondary` }),
                      ],
                    }),
                    onClick: i,
                  });
            }),
      (t[5] = s),
      (t[6] = g),
      (t[7] = w))
    : (w = t[7]);
  let T;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(y, { className: `icon-xs text-secondary` })), (t[8] = T))
    : (T = t[8]);
  let E;
  return (
    t[9] !== i ||
    t[10] !== v ||
    t[11] !== h ||
    t[12] !== s ||
    t[13] !== p ||
    t[14] !== d ||
    t[15] !== f ||
    t[16] !== m ||
    t[17] !== x ||
    t[18] !== S ||
    t[19] !== C ||
    t[20] !== w ||
    t[21] !== r
      ? ((E = (0, X.jsx)(L, {
          value: r,
          defaultOpen: x,
          onClose: d,
          accountId: i,
          isSaving: s,
          isProfileEditing: h,
          onEditStarted: f,
          onChangeStarted: p,
          onSave: m,
          intl: v,
          checkAvailability: S,
          formatSaveError: C,
          renderTrigger: w,
          renderDialog: J,
          renderInput: q,
          renderButton: K,
          renderWarning: G,
          spinner: T,
        })),
        (t[9] = i),
        (t[10] = v),
        (t[11] = h),
        (t[12] = s),
        (t[13] = p),
        (t[14] = d),
        (t[15] = f),
        (t[16] = m),
        (t[17] = x),
        (t[18] = S),
        (t[19] = C),
        (t[20] = w),
        (t[21] = r),
        (t[22] = E))
      : (E = t[22]),
    E
  );
}
function G(e) {
  return (0, X.jsx)(u, {
    type: `caution`,
    variant: `callout`,
    content: (0, X.jsx)(`p`, { className: `select-none`, children: e }),
  });
}
function K(e) {
  let { variant: n, ...r } = e;
  return (0, X.jsx)(t, { ...r, color: n === `secondary` ? `outline` : n });
}
function q(e) {
  return (0, X.jsx)(k, { ...e });
}
function J(e) {
  let { open: t, onOpenChange: n, title: r, body: i, footer: a, onSubmit: o } = e;
  return (0, X.jsx)(g, {
    open: t,
    onOpenChange: n,
    size: `beacon`,
    children: (0, X.jsx)(P, {
      title: (0, X.jsx)(d, { children: r }),
      body: i,
      footer: (0, X.jsx)(b, { children: a }),
      onSubmit: o,
    }),
  });
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = w()), I(), S(), h(), i(), x(), C(), f(), s(), p(), E(), m(), N(), U(), (X = T()));
  }))();
}
export { z as a, U as i, Z as n, R as o, H as r, V as s, W as t };
//# sourceMappingURL=username-dialog-4d83358ae975.js.map
