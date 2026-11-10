import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  IDt as r,
  Kat as i,
  Pat as a,
  Pxt as o,
  Vxt as s,
  Zxt as c,
  jDt as l,
  not as u,
  qat as d,
  vzt as f,
  wot as p,
  xMt as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import { Bkr as g, Fin as _, GMr as v, Hin as y, Vkr as b, tNr as x } from "./app-initial-5851df3f6cb1.js";
var S;
function C() {
  return (C = e(() => {
    (o(),
      d(),
      p(),
      g(),
      n(),
      (S = c(t, (e) => {
        let t = i?.environmentConfigs;
        return {
          queryKey: [`environment-outbound-identity`, e?.accountId, e?.userId, e?.configId],
          enabled: t != null && e != null,
          staleTime: a.FIVE_SECONDS,
          refetchOnMount: `always`,
          retry: b,
          queryFn: async () => {
            try {
              var n = u();
              if (t == null || e == null) throw Error(`Outbound identity is unavailable`);
              let r = n.u(
                await t.listOutboundIdentityConnections({
                  accountId: e.accountId,
                  userId: e.userId,
                  configId: e.configId,
                }),
              );
              if (
                !r.ok &&
                (r.error === `unavailable` ||
                  (r.error === `http` &&
                    r.status != null &&
                    (r.status === 408 ||
                      r.status === 425 ||
                      r.status === 429 ||
                      (r.status >= 500 && r.status < 600))))
              )
                throw Error(`Outbound identity is unavailable`);
              return r.ok ? { ok: !0, data: r.data } : { ok: !1, error: r.error, status: r.status };
            } catch (e) {
              n.e = e;
            } finally {
              n.d();
            }
          },
        };
      })));
  }))();
}
function w(e) {
  let t = (0, k.c)(2),
    { script: n } = e,
    i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = n?.trim()
          ? (0, A.jsx)(r, {
              id: `environmentSetup.result.script.configured`,
              defaultMessage: `Configured`,
              description: `Summary indicating that an environment install script or start skill contains non-whitespace content; this does not indicate review or validation`,
            })
          : (0, A.jsx)(r, {
              id: `restricted.environmentSetup.result.script.empty`,
              defaultMessage: `Not set`,
              description: `Summary for an empty environment install script or start skill`,
            })),
        (t[0] = n),
        (t[1] = i)),
    i
  );
}
function T(e) {
  let t = (0, k.c)(8),
    { policy: n } = e;
  if (n.type === `disabled`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(r, {
            id: `restricted.environmentSetup.result.network.disabled`,
            defaultMessage: `Disabled`,
            description: `Value shown when networking is disabled for an environment setup result`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.type === `unrestricted`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(r, {
            id: `restricted.environmentSetup.result.network.unrestricted`,
            defaultMessage: `Unrestricted`,
            description: `Summary for an environment that allows unrestricted network access`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  t[2] === n.egress_rules
    ? (i = t[3])
    : ((i = new Set(n.egress_rules.map(E))), (t[2] = n.egress_rules), (t[3] = i));
  let a = i.size;
  if (n.presets?.includes(`package_managers`)) {
    let e;
    return (
      t[4] === a
        ? (e = t[5])
        : ((e =
            a > 0
              ? (0, A.jsx)(r, {
                  id: `restricted.environmentSetup.result.network.packageManagersWithDomains`,
                  defaultMessage: `Package managers + {count, plural, one {# allowed domain} other {# allowed domains}}`,
                  description: `Network summary for the package-manager preset plus separately allowed domains; the count excludes domains supplied by the preset`,
                  values: { count: a },
                })
              : (0, A.jsx)(r, {
                  id: `restricted.environmentSetup.result.network.packageManagers`,
                  defaultMessage: `Package managers`,
                  description: `Network summary when only the package-manager preset is allowed`,
                })),
          (t[4] = a),
          (t[5] = e)),
      e
    );
  }
  let o;
  return (
    t[6] === a
      ? (o = t[7])
      : ((o = (0, A.jsx)(r, {
          id: `restricted.environmentSetup.result.network.domains`,
          defaultMessage: `{count, plural, one {# allowed domain} other {# allowed domains}}`,
          description: `Number of explicitly allowed domains in a restricted environment network policy without presets`,
          values: { count: a },
        })),
        (t[6] = a),
        (t[7] = o)),
    o
  );
}
function E(e) {
  let { host: t } = e;
  return t;
}
function D(e) {
  let t = (0, k.c)(8),
    { detail: n } = e,
    i = n !== void 0 && n,
    { data: a } = y(),
    o = s(v),
    c;
  t[0] !== a?.id || t[1] !== a?.name || t[2] !== o
    ? ((c = a?.id === o ? a?.name?.trim() : void 0), (t[0] = a?.id), (t[1] = a?.name), (t[2] = o), (t[3] = c))
    : (c = t[3]);
  let l = c;
  if (i) {
    let e;
    return (
      t[4] === l
        ? (e = t[5])
        : ((e = l
            ? (0, A.jsx)(r, {
                id: `restricted.environmentSetup.access.organizationDescriptionNamed`,
                defaultMessage: `Everyone in {workspaceName} can access`,
                description: `Help text below the organization access option in environment onboarding. workspaceName is the authenticated workspace's display name; selecting the option lets its members use the environment`,
                values: { workspaceName: l },
              })
            : (0, A.jsx)(r, {
                id: `restricted.environmentSetup.access.organizationDescriptionFallback`,
                defaultMessage: `Everyone in this workspace can access`,
                description: `Help text below the organization access option in environment onboarding while the authenticated workspace name is unavailable; selecting the option lets workspace members use the environment`,
              })),
          (t[4] = l),
          (t[5] = e)),
      e
    );
  }
  let u;
  return (
    t[6] === l
      ? (u = t[7])
      : ((u = l
          ? (0, A.jsx)(r, {
              id: `restricted.environmentSetup.access.organizationName`,
              defaultMessage: `Everyone at {workspaceName}`,
              description: `Short visibility option in environment onboarding, settings, task summary, and result. workspaceName is the authenticated workspace's display name; the other option is private access`,
              values: { workspaceName: l },
            })
          : (0, A.jsx)(r, {
              id: `restricted.environmentSetup.access.organizationFallback`,
              defaultMessage: `Everyone in this workspace`,
              description: `Short visibility option in environment onboarding, settings, task summary, and result while the authenticated workspace name is unavailable; the other option is private access`,
            })),
        (t[6] = l),
        (t[7] = u)),
    u
  );
}
function O(e) {
  let t = (0, k.c)(5),
    { configuration: n, requirement: r } = e,
    { data: i } = h(S, n),
    a;
  t[0] !== r || t[1] !== i
    ? ((a = i?.ok
        ? i.data.items.find((e) => {
            let { connection_id: t } = e;
            return t === r.connection_id;
          })
        : void 0),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o = a?.display_name ?? r.connection_id,
    s;
  return (
    t[3] === o ? (s = t[4]) : ((s = (0, A.jsx)(A.Fragment, { children: o })), (t[3] = o), (t[4] = s)),
    s
  );
}
var k, A;
function j() {
  return (j = e(() => {
    ((k = f()), o(), l(), x(), _(), C(), (A = m()));
  }))();
}
export { j as a, w as i, D as n, S as o, O as r, C as s, T as t };
//# sourceMappingURL=result-values-ef2b1cdba93f.js.map
