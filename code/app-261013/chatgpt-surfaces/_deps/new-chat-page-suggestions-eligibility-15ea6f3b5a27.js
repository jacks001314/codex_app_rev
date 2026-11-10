import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fat as t,
  Kat as n,
  Pat as r,
  Xot as i,
  Yot as a,
  qat as o,
  vzt as s,
} from "./app-shared-bbfeca5e5737.js";
function c(e) {
  let t = (0, m.c)(9),
    { accountId: a, enabled: o, hostId: s } = e,
    c;
  t[0] !== a || t[1] !== s ? ((c = l(s, a)), (t[0] = a), (t[1] = s), (t[2] = c)) : (c = t[2]);
  let u;
  t[3] === s
    ? (u = t[4])
    : ((u = async () => (await n.ambientSuggestions?.hasAccessibleAndEnabledApp({ hostId: s })) ?? !1),
      (t[3] = s),
      (t[4] = u));
  let d;
  return (
    t[5] !== o || t[6] !== c || t[7] !== u
      ? ((d = { queryKey: c, queryFn: u, enabled: o, retry: !1, staleTime: r.FIVE_MINUTES }),
        (t[5] = o),
        (t[6] = c),
        (t[7] = u),
        (t[8] = d))
      : (d = t[8]),
    i(d)
  );
}
function l(e, t) {
  return [...u(e), t];
}
function u(e) {
  return [`new-chat-suggestion-source`, `has-accessible-enabled-ambient-suggestion-app`, e];
}
function d({ debugOverride: e, experimentEligible: t, personalized: n }) {
  return e ?? (t && n ? `generated` : `curated`);
}
function f({
  canUsePersonalizedSuggestions: e,
  generatedSuggestionsEnabled: t,
  hasGeneratedSuggestionsReadSettled: n,
  shouldUseCuratedNewChatPageSuggestions: r,
}) {
  return r || !t || !e ? !0 : n;
}
function p({
  areNewChatPageSuggestionsLoading: e,
  hasProjectRoot: t,
  shouldShowHomeSuggestions: n,
  shouldUseCuratedNewChatPageSuggestions: r,
}) {
  return e ? !1 : r ? !0 : t && n;
}
var m;
function h() {
  return (h = e(() => {
    ((m = s()), a(), o(), t());
  }))();
}
export { h as a, f as i, u as n, c as o, d as r, p as t };
//# sourceMappingURL=new-chat-page-suggestions-eligibility-15ea6f3b5a27.js.map
