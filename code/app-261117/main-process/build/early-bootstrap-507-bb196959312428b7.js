"use strict"
;((exports.ids = [507]),
  (exports.modules = {
    92326(e, r, t) {
      var o = t(83757),
        a = t(69450)
      function n(e) {
        switch (e) {
          case void 0:
            return
          case o.n$V.Fy.UNSPECIFIED:
            return "unspecified"
          case o.n$V.Fy.DECLARED:
            return "declared"
          case o.n$V.Fy.PERSONAL:
            return "personal"
        }
        throw Error("Unsupported environment binding origin")
      }
      t.d(
        r,
        {},
        {
          readInstanceSpec: function (e, r) {
            let t = r.networkPolicy?.policy?.value,
              i = r.capabilities.flatMap(({ value: e }) => ("portals" === e.case ? e.value.values : []))
            return a.bm.parse({
              environmentId: e,
              portals: {
                ssh: i.some((e) => e.protocol === o.PortalProtocol.PortalProtocol.SSH && 22 === e.containerPort),
                http_ports: i
                  .filter((e) => e.protocol === o.PortalProtocol.PortalProtocol.HTTP)
                  .map((e) => e.containerPort),
              },
              desiredRevision: r.revision.toString(),
              sourceConfigId: r.sourceConfigId,
              installScript: r.installScript,
              startSkill: r.startSkill,
              networkPolicy: {
                type: t?.case,
                ...(t?.case === "restricted" && {
                  presets: (t.value.presets?.values ?? []).map((e) => {
                    if (e !== o.wN0.LO.PACKAGE_MANAGERS) throw Error("Unsupported network preset")
                    return "package_managers"
                  }),
                  egress_rules: (t.value.egressRules?.values ?? []).map(({ host: e }) => ({ host: e })),
                }),
              },
              repositories: r.resources.map(({ id: e, value: r }) => {
                if ("repository" !== r.case) throw Error("Unsupported environment resource")
                let { checkout: t, refresh: o, extraRefs: a } = r.value
                return {
                  resourceId: e,
                  repositoryId: t?.repositoryId,
                  ref: t?.ref,
                  mountPath: t?.mountPath ?? "",
                  refresh: o,
                  depth: t?.depth,
                  extraRefs: a.map(({ ref: e, branch: r, depth: t }) => ({
                    ref: e,
                    branch: r,
                    depth: null == t ? void 0 : Number(t),
                  })),
                  githubLinkId: t?.githubLinkId,
                }
              }),
              envVars: (r.runtimeRequirements?.requirements ?? []).map(({ requirement: e, origin: r }) => {
                let t = e?.source?.value,
                  o = e?.delivery?.value
                if (t?.case !== "vaultSecret" || o?.case !== "directEnvironmentVariable")
                  throw Error("Unsupported environment variable binding")
                return { name: o.value.variableName, vaultId: t.value.id, optional: e?.optional ?? !1, origin: n(r) }
              }),
              networkSecrets: r.secretRequirements.map((e) => {
                let r = e.source?.value,
                  t = e.target?.value
                if (r?.case !== "vaultSecret" || t?.case !== "environmentVariable")
                  throw Error("Unsupported HTTP secret binding")
                return {
                  name: e.name,
                  vaultId: r.value.id,
                  optional: e.optional,
                  origin: n(e.origin),
                  variableName: t.value.environmentVariable,
                  allowedDomains: t.value.allowedDomains?.values,
                }
              }),
            })
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-507-bb196959312428b7.js.map
