import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Pxt as r,
  TLt as i,
  fRt as a,
  nSt as o,
  pLt as s,
  rSt as c,
  wot as l,
} from "./app-shared-bbfeca5e5737.js";
import { kZn as u, yjn as d } from "./app-initial-5851df3f6cb1.js";
import { r as f, t as p } from "./contracts-d83307d0e4fe.js";
function m(e, t, n) {
  let r = t?.find((e) => h.safeParse(e?.metadata).success),
    i = h.safeParse(r?.metadata),
    a = typeof window > `u` ? void 0 : window.__oaiEpicNativeLaunch,
    o =
      (e == null ? n : null) ??
      (t?.some((e) => e?.id != null && a?.ownsMessage(e.id)) ? (a?.get() ?? null) : null);
  return !i.success && o == null
    ? null
    : { labels: i.success ? i.data : null, snapshot: o, destination: o == null ? void 0 : a?.destination() };
}
var h, g, _;
function v() {
  return (v = e(() => {
    (f(),
      r(),
      n(),
      l(),
      d(),
      (h = s({
        epic_patient_label: i(),
        epic_patient_name: i().nullable().optional(),
        epic_patient_birth_date: a().nullable().optional(),
        epic_encounter_label: i().nullable().optional(),
      })),
      (g = o(
        t,
        (e, { get: t }) => {
          let n = t(u, e);
          return n == null ? null : Object.values(n).map((e) => e.message);
        },
        {
          autoDispose: !0,
          isEqual: (e, t) =>
            e === t ||
            (e != null &&
              t != null &&
              e.length === t.length &&
              e.every((e, n) => e?.id === t[n]?.id && e?.metadata === t[n]?.metadata)),
        },
      )),
      (_ = c(
        t,
        (e) => null,
        (e, { scope: t, set: n }) => {
          if (e == null) return;
          let r = null,
            i = () => {
              n(m(e, r, null));
            };
          window.addEventListener(p, i);
          let a = t.watch(({ get: t }) => {
            ((r = t(g, e)), i());
          });
          return () => {
            (a(), window.removeEventListener(p, i));
          };
        },
        {
          autoDispose: !0,
          isEqual: (e, t) =>
            e === t ||
            (e != null &&
              t != null &&
              e.labels?.epic_patient_label === t.labels?.epic_patient_label &&
              e.labels?.epic_patient_name === t.labels?.epic_patient_name &&
              e.labels?.epic_patient_birth_date === t.labels?.epic_patient_birth_date &&
              e.labels?.epic_encounter_label === t.labels?.epic_encounter_label &&
              e.snapshot === t.snapshot &&
              e.destination === t.destination),
        },
      )));
  }))();
}
export { v as n, m as r, _ as t };
//# sourceMappingURL=context-cb88d6b78c75.js.map
