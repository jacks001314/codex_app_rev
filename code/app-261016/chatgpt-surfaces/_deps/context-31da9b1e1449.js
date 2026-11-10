import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  HFt as n,
  Ozt as r,
  Qst as i,
  VRt as a,
  ZSt as o,
  bCt as s,
  kRt as c,
  yCt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { VPn as u, n0n as d } from "./app-initial-ad16eaadf81f.js";
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
      o(),
      n(),
      t(),
      u(),
      (h = c({
        epic_patient_label: a(),
        epic_patient_name: a().nullable().optional(),
        epic_patient_birth_date: r().nullable().optional(),
        epic_encounter_label: a().nullable().optional(),
      })),
      (g = l(
        i,
        (e, { get: t }) => {
          let n = t(d, e);
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
      (_ = s(
        i,
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
//# sourceMappingURL=context-31da9b1e1449.js.map
