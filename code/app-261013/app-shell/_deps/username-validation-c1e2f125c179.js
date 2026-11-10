import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  B9 as n,
  E9 as r,
  EPt as i,
  H9 as a,
  M9 as o,
  O9 as s,
  Oht as c,
  Q9 as l,
  Rnt as u,
  TLt as d,
  U9 as f,
  V9 as p,
  W9 as m,
  eLt as h,
  jDt as g,
  oIt as _,
  rst as v,
  xMt as y,
  yzt as b,
  z9 as x,
} from "./app-shared-bbfeca5e5737.js";
import { QDr as S, Qnn as C, XDr as w, Znn as T, dNr as E, skt as D } from "./app-initial-5851df3f6cb1.js";
import { t as O } from "./src-c65a930b3c0e.js";
function k(e) {
  return {
    pageScope:
      e.page.workspace_id == null
        ? s.CODEX_PROFILE_PAGE_SCOPE_PERSONAL
        : s.CODEX_PROFILE_PAGE_SCOPE_WORKSPACE,
    effectiveVisibility: M[e.page.visibility.value],
    profileOwner: e.is_self ? r.CODEX_PROFILE_OWNER_SELF : r.CODEX_PROFILE_OWNER_OTHER,
    viewedUsername: e.profile_details.username ?? void 0,
  };
}
function A(e, t) {
  let n = N.safeParse(e.state).data;
  return {
    ...n,
    profileVisitKey: n?.profileVisitKey ?? e.key,
    profileEntryPoint:
      n?.profileEntryPoint ??
      (t == null ? l.CODEX_PROFILE_VIEW_ENTRY_POINT_SELF_ENTRY : l.CODEX_PROFILE_VIEW_ENTRY_POINT_USERNAME),
  };
}
function j(e, t) {
  if (t == null) return;
  let r = k(t),
    i = M[t.page.visibility.value],
    o = (t) => S(e, n, { context: r, ...t });
  return {
    opened: () =>
      o({ action: p.CODEX_PROFILE_SHARING_ACTION_TYPE_OPEN, result: f.CODEX_PROFILE_SHARING_RESULT_CLICKED }),
    selected: (e) =>
      o({
        action: p.CODEX_PROFILE_SHARING_ACTION_TYPE_SELECT_VISIBILITY,
        result: f.CODEX_PROFILE_SHARING_RESULT_CLICKED,
        requestedVisibility: M[e],
        target: m.CODEX_PROFILE_SHARING_TARGET_PERSONAL_PAGE,
      }),
    saved(t) {
      let n = M[t];
      i !== n &&
        S(e, a, {
          context: r,
          target: m.CODEX_PROFILE_SHARING_TARGET_PERSONAL_PAGE,
          previousVisibility: i,
          savedVisibility: n,
        });
    },
    copyClicked: () =>
      o({
        action: p.CODEX_PROFILE_SHARING_ACTION_TYPE_COPY_LINK,
        result: f.CODEX_PROFILE_SHARING_RESULT_CLICKED,
      }),
    copied: (e) =>
      o({
        action: p.CODEX_PROFILE_SHARING_ACTION_TYPE_COPY_LINK,
        result: e ? f.CODEX_PROFILE_SHARING_RESULT_SUCCEEDED : f.CODEX_PROFILE_SHARING_RESULT_FAILED,
      }),
    shared: (e, t) =>
      o({
        action: p.CODEX_PROFILE_SHARING_ACTION_TYPE_EXTERNAL_SHARE,
        result: t,
        destination: {
          x: x.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_X,
          linkedin: x.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_LINKEDIN,
          reddit: x.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_REDDIT,
        }[e],
      }),
  };
}
var M, N;
function P() {
  return (P = e(() => {
    (u(),
      i(),
      w(),
      (M = {
        private: o.CODEX_PROFILE_PAGE_VISIBILITY_PRIVATE,
        workspace: o.CODEX_PROFILE_PAGE_VISIBILITY_WORKSPACE,
        public: o.CODEX_PROFILE_PAGE_VISIBILITY_PUBLIC,
      }),
      (N = h({ profileVisitKey: d(), profileEntryPoint: _(l) })));
  }))();
}
var F, I;
function L() {
  return (L = e(() => {
    (b(),
      (F = y()),
      (I = (e) =>
        (0, F.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, F.jsx)(`path`, {
            d: `M16.6337 2.90073C16.6337 4.04257 15.708 4.96822 14.5662 4.96822C13.5883 4.96822 12.769 4.28937 12.5539 3.37723C11.3544 3.54198 10.4276 4.57344 10.4276 5.81744L10.4275 5.82524C12.2767 5.89387 13.9672 6.41475 15.3066 7.24346C15.7984 6.86574 16.4141 6.64121 17.0822 6.64121C18.6936 6.64121 20 7.94757 20 9.55905C20 10.7212 19.3206 11.7247 18.3373 12.1939C18.2458 15.5849 14.5521 18.3126 10.0089 18.3126C5.46956 18.3126 1.77825 15.5894 1.68081 12.2025C0.687757 11.7369 0 10.7283 0 9.55905C0 7.94757 1.30636 6.64121 2.91785 6.64121C3.58954 6.64121 4.20823 6.86817 4.70139 7.24959C6.02803 6.42618 7.70059 5.90522 9.53121 5.82759L9.531 5.8186C9.531 4.084 10.853 2.65175 12.5422 2.47676C12.7378 1.53829 13.5697 0.833252 14.5662 0.833252C15.708 0.833252 16.6337 1.7589 16.6337 2.90073ZM5.97607 12.9003C6.79403 12.9003 7.49631 12.5185 7.5449 11.468V11.4692C7.59349 10.4186 6.96989 9.54167 6.15192 9.54167C5.33395 9.54167 4.63168 10.2289 4.58309 11.2794C4.5345 12.3299 5.1581 12.9003 5.97607 12.9003ZM14.0371 12.9003C14.8551 12.9003 15.4787 12.3299 15.4301 11.2794C15.3815 10.2289 14.6793 9.54167 13.8613 9.54167C13.0433 9.54167 12.4197 10.4186 12.4683 11.4692V11.468C12.5169 12.5185 13.2192 12.9003 14.0371 12.9003ZM10.0057 13.7172C8.99218 13.7172 8.02033 13.7669 7.12254 13.8583C6.96866 13.8734 6.87148 14.033 6.93164 14.1753C7.43492 15.3774 8.62195 16.222 10.0057 16.222C11.3894 16.222 12.5776 15.3774 13.0797 14.1753C13.1399 14.033 13.0415 13.8734 12.8888 13.8583C11.9899 13.7669 11.0192 13.7172 10.0057 13.7172Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function R(e) {
  return C(D(e ?? ``).localUsername).ok && z(e) == null;
}
function z(e) {
  return T(e, c.isInternal(E()));
}
var B;
function V() {
  return (V = e(() => {
    (O(),
      v(),
      g(),
      (B = t({
        blockedSuffix: {
          id: `profile.usernameLink.blockedSuffix`,
          defaultMessage: `Your username cannot end with “{suffix}”`,
          description: `Warning that a username must be changed because it ends with a disallowed suffix. The suffix includes its leading dot, for example .data.`,
        },
      })));
  }))();
}
export { I as a, k as c, B as i, A as l, V as n, L as o, R as r, j as s, z as t, P as u };
//# sourceMappingURL=username-validation-c1e2f125c179.js.map
