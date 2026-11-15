;((exports.ids = [133]),
  (exports.modules = {
    87094(e, t, r) {
      var n = r(9192)
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1
      }
    },
    69298(e) {
      e.exports = function (e, t, r) {
        for (var n = -1, i = null == e ? 0 : e.length; ++n < i;) if (r(t, e[n])) return !0
        return !1
      }
    },
    37022(e) {
      e.exports = function (e, t, r) {
        return (e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== t && (e = e >= t ? e : t)), e)
      }
    },
    9192(e, t, r) {
      var n = r(95636),
        i = r(12640),
        s = r(53232)
      e.exports = function (e, t, r) {
        return t == t ? s(e, t, r) : n(e, i, r)
      }
    },
    12640(e) {
      e.exports = function (e) {
        return e != e
      }
    },
    88148(e, t, r) {
      var n = r(11882),
        i = r(87094),
        s = r(69298),
        o = r(3286),
        a = r(65858),
        l = r(74310)
      e.exports = function (e, t, r) {
        var c = -1,
          u = i,
          d = e.length,
          p = !0,
          h = [],
          f = h
        if (r) ((p = !1), (u = s))
        else if (d >= 200) {
          var g = t ? null : a(e)
          if (g) return l(g)
          ;((p = !1), (u = o), (f = new n()))
        } else f = t ? [] : h
        e: for (; ++c < d;) {
          var m = e[c],
            y = t ? t(m) : m
          if (((m = r || 0 !== m ? m : 0), p && y == y)) {
            for (var b = f.length; b--;) if (f[b] === y) continue e
            ;(t && f.push(y), h.push(m))
          } else u(f, y, r) || (f !== h && f.push(y), h.push(m))
        }
        return h
      }
    },
    65858(e, t, r) {
      var n = r(92330),
        i = r(68469),
        s = r(74310)
      e.exports =
        n && 1 / s(new n([, -0]))[1] == 1 / 0
          ? function (e) {
              return new n(e)
            }
          : i
    },
    53232(e) {
      e.exports = function (e, t, r) {
        for (var n = r - 1, i = e.length; ++n < i;) if (e[n] === t) return n
        return -1
      }
    },
    74438(e, t, r) {
      var n = r(37022),
        i = r(84301)
      e.exports = function (e, t, r) {
        return (
          void 0 === r && ((r = t), (t = void 0)),
          void 0 !== r && (r = (r = i(r)) == r ? r : 0),
          void 0 !== t && (t = (t = i(t)) == t ? t : 0),
          n(i(e), t, r)
        )
      }
    },
    68469(e) {
      e.exports = function () {}
    },
    8095(e, t, r) {
      var n = r(88148)
      e.exports = function (e) {
        return e && e.length ? n(e) : []
      }
    },
    1229(e, t, r) {
      var n = r(38180),
        i = r(88148)
      e.exports = function (e, t) {
        return e && e.length ? i(e, n(t, 2)) : []
      }
    },
    55924(e, t, r) {
      "use strict"
      var n = r(67221),
        i = r(35553)
      let s = i.string().min(1).max(256),
        o = i.strictObject({ userId: s, accountId: s, hostId: s, conversationId: s, challengeId: s }),
        a = i.strictObject({
          operationId: i.uuid(),
          fillStatus: i.enum([
            "unknown",
            "submitted",
            "declined",
            "cancelled",
            "unavailable",
            "expired",
            "origin_changed",
            "page_changed",
            "locator_invalid",
            "submission_failed",
          ]),
          saveStatus: i.enum(["not_requested", "saved", "failed", "unknown"]),
          statusAvailable: i.boolean(),
          selectionId: i.uuid().optional(),
        }),
        l = i.strictObject({ context: o, operation: a, finishedAtMs: i.number().nonnegative().optional() }),
        c = i.strictObject({ entries: i.array(l) })
      class u extends n.TF {
        #e
        constructor(e) {
          ;(super(), (this.#e = e))
        }
        async read(e) {
          let t = JSON.stringify(o.parse(e))
          return this.#e((e) => {
            let r = d(e)
            return { value: r, result: r.entries.find((e) => JSON.stringify(e.context) === t)?.operation ?? null }
          })
        }
        async claim(e, t) {
          let r = o.parse(e),
            n = a.parse(t),
            i = JSON.stringify(r)
          return this.#e((e) => {
            let t = d(e),
              s = t.entries.find((e) => JSON.stringify(e.context) === i)
            if (null != s) return { value: t, result: { created: !1, operation: s.operation } }
            let o = Date.now() - 864e5
            return {
              value: {
                entries: [
                  ...t.entries.filter((e) => null == e.finishedAtMs || e.finishedAtMs > o),
                  { context: r, operation: n },
                ],
              },
              result: { created: !0, operation: n },
            }
          })
        }
        async settle(e, t) {
          let r = JSON.stringify(o.parse(e)),
            n = a.parse(t)
          return this.#e((e) => ({
            value: {
              entries: d(e).entries.map((e) => {
                if (JSON.stringify(e.context) !== r || e.operation.operationId !== n.operationId) return e
                let t = {
                  ...e.operation,
                  fillStatus: "unknown" === n.fillStatus ? e.operation.fillStatus : n.fillStatus,
                  saveStatus: "unknown" === n.saveStatus ? e.operation.saveStatus : n.saveStatus,
                }
                return {
                  ...e,
                  operation: t,
                  finishedAtMs:
                    "unknown" !== t.fillStatus && "unknown" !== t.saveStatus ? (e.finishedAtMs ?? Date.now()) : void 0,
                }
              }),
            },
            result: void 0,
          }))
        }
      }
      function d(e) {
        return null == e ? { entries: [] } : c.parse(e)
      }
      r.d(t, {}, { W: u, w: c })
    },
    58248(e, t, r) {
      "use strict"
      var n = r(35553),
        i = r(69150)
      let s = n.discriminatedUnion("outcome", [
        n.strictObject({
          outcome: n.literal("completed"),
          output: n
            .string()
            .trim()
            .min(1)
            .describe(
              "A concise, user-facing summary of the completed result. Follow any task-specific output instructions.",
            ),
          url: n.url().describe("The URL of the created or affected resource."),
        }),
        n.strictObject({
          outcome: n.literal("not_completed"),
          output: n
            .string()
            .trim()
            .min(1)
            .describe(
              "A friendly, first-person, user-facing sentence explaining that the goal could not be completed. Omit technical details, tool names, raw constraints, time zones, and error text.",
            ),
        }),
      ])
      ;(n.record(n.string(), n.json()).parse(i.bl(s)), r.d(t, {}, { c3: s }))
    },
    41939(e, t, r) {
      "use strict"
      let n = new Set([
          "_",
          "PATH",
          "HOME",
          "PWD",
          "OLDPWD",
          "SHELL",
          "SHLVL",
          "IFS",
          "ENV",
          "BASH_ENV",
          "BASHOPTS",
          "SHELLOPTS",
          "CDPATH",
          "FUNCNAME",
          "GLOBIGNORE",
          "HISTCMD",
          "NODE_OPTIONS",
          "OPTIND",
          "CODEX_ACCESS_TOKEN",
          "CODEX_HOME",
          "CODEX_PROXY_CERT",
          "CODEX_ENVIRONMENT_ID",
          "CODEX_EXEC_SERVER_REMOTE_BASE_URL",
          "CODEX_PRIMARY_RUNTIME",
          "CODEX_PRIMARY_RUNTIME_BUNDLE_VERSION",
          "CODEX_PRIMARY_RUNTIME_ROOT",
          "CODEX_PRIMARY_RUNTIME_NODE",
          "CODEX_PRIMARY_RUNTIME_NODE_MODULES",
          "CODEX_PRIMARY_RUNTIME_PYTHON",
          "RUST_LOG",
          "HTTP_PROXY",
          "HTTPS_PROXY",
          "ALL_PROXY",
          "NO_PROXY",
          "REQUESTS_CA_BUNDLE",
          "CURL_CA_BUNDLE",
          "NODE_EXTRA_CA_CERTS",
          "UID",
          "EUID",
          "PPID",
          "GROUPS",
          "DIRSTACK",
          "PIPESTATUS",
          "RANDOM",
          "SRANDOM",
          "SECONDS",
          "LINENO",
          "EPOCHREALTIME",
          "EPOCHSECONDS",
        ]),
        i = ["OAI_", "IDENTITY_", "AZURE_", "MSI_", "LD_", "DYLD_", "PYTHON", "SSL_", "GIT_CONFIG", "BASH"]
      r.d(
        t,
        {},
        {
          X: function (e) {
            if (0 === e.length) return "missing-key"
            if (e.length > 256 || !/^[A-Za-z_][A-Za-z0-9_]*$/.test(e)) return "invalid-key"
            let t = e.toUpperCase()
            return n.has(t) || i.some((e) => t.startsWith(e)) ? "reserved-key" : null
          },
        },
      )
    },
    17911(e, t, r) {
      "use strict"
      var n = r(35553),
        i = r(41939),
        s = r(31926)
      let o = n.object({
          repository_id: n.string().min(1),
          ref: n.string().min(1),
          mount_path: n.string().optional(),
          depth: n.number().int().min(1).max(0x7fffffff).optional(),
        }),
        a = [n.object({ type: n.literal("disabled") }), n.object({ type: n.literal("unrestricted") })],
        l = n.array(n.object({ host: n.string().min(1) })),
        c = n.object({
          type: n.literal("restricted"),
          presets: n.array(n.enum(["package_managers"])).optional(),
          egress_rules: l,
        }),
        u = n.discriminatedUnion("type", [...a, c]),
        d = n.object({ ip_ranges: n.array(n.string().min(1)), domains: n.array(n.string().min(1)) }),
        p = n
          .object({ ssh: n.boolean().optional(), http_ports: n.array(n.number().int().min(1).max(65535)).optional() })
          .refine(({ ssh: e, http_ports: t = [] }) => new Set(t).size === t.length && !(e && t.includes(22))),
        h = p.refine(({ http_ports: e = [] }) => !e.includes(22)),
        f = n.union([
          n.strictObject({ environment_variable: n.string(), allowed_domains: n.array(n.string()).optional() }),
          n.strictObject({
            http_header: n.strictObject({ header_name: n.string(), allowed_domains: n.array(n.string()) }),
          }),
        ]),
        g = n.object({
          id: n.string().optional(),
          name: n.string().min(1),
          source: n.enum(["environment", "user_provided"]),
          optional: n.boolean().optional(),
          error: n.object({ code: n.string() }).optional(),
          target: f,
        }),
        m = n.object({
          source: n.discriminatedUnion("type", [
            n.object({ type: n.literal("vault_secret"), id: n.string().min(1) }),
            n.object({ type: n.literal("user_provided") }),
          ]),
          optional: n.boolean(),
          delivery: n.object({ type: n.literal("direct_environment_variable"), variable_name: n.string().min(1) }),
          error: n.object({ code: n.string() }).optional(),
        }),
        y = m
          .pick({ delivery: !0 })
          .extend({ source: n.object({ type: n.literal("environment") }), suggested_value: n.string().nullish() }),
        b = n.object({
          portals: h.optional(),
          name: n.string().min(1),
          description: n.string().optional(),
          repositories: n.array(o),
          install_script: n.string().optional(),
          cwd: n.string().startsWith("/").optional(),
          start_skill: n.string().optional(),
          network_policy: u,
          share_settings: n.enum(["private", "workspace"]),
        }),
        w = b
          .pick({ name: !0, description: !0, share_settings: !0 })
          .extend({ idempotency_key: n.string().min(1) })
          .partial()
          .strict()
          .refine((e) => null != e.name || null != e.description || null != e.share_settings),
        v = n
          .object({
            portals: h.optional(),
            base_version_id: n.string().min(1),
            expected_revision: n.number().int().nonnegative().optional(),
            update_container: n.boolean().optional(),
            vpn_connection_id: n.string().optional(),
            tcp_network_access: d.nullish(),
            repositories: n.array(o).optional(),
            install_script: n.string().optional(),
            cwd: n.string().startsWith("/").optional(),
            start_skill: n.string().optional(),
            network_policy: u.optional(),
            runtime_requirements: n.array(m.omit({ error: !0 }).strict()).optional(),
            pending_runtime_requirements: n.array(y.strict()).optional(),
            outbound_identity_requirements: s.Z.optional(),
            secrets: n
              .array(
                g
                  .omit({ error: !0 })
                  .strict()
                  .refine((e) => "user_provided" !== e.source || null == e.id),
              )
              .optional(),
          })
          .strict()
          .refine(
            (e) =>
              null != e.portals ||
              null != e.repositories ||
              null != e.install_script ||
              null != e.cwd ||
              null != e.start_skill ||
              null != e.network_policy ||
              null != e.runtime_requirements ||
              null != e.pending_runtime_requirements ||
              null != e.secrets ||
              null != e.outbound_identity_requirements ||
              null != e.tcp_network_access ||
              null != e.vpn_connection_id,
          ),
        _ = b.extend({
          provider: n.string().optional(),
          portals: p.optional(),
          network_policy: n.discriminatedUnion("type", [...a, c.extend({ preset_egress_rules: l.optional() })]),
          provider_metadata: n.record(n.string(), n.string()).optional(),
          id: n.string().min(1),
          is_owner: n.boolean().optional(),
          version_id: n.string().min(1),
          vpn_connection_id: n.string().min(1).nullish(),
          tcp_network_access: d.nullish(),
          status: n.string(),
          version_revision: n.number().int().positive().optional(),
          latest_ready_version_id: n.string().nullish(),
          environment_id: n.string().min(1).nullish(),
          thread_id: n.string().min(1).nullish(),
          onboarding_skill: n.string().min(1).nullish(),
          secrets: n.array(g).optional(),
          runtime_requirements: n.array(m).optional(),
          outbound_identity_requirements: n.array(s.NU).optional(),
          draft: n
            .object({
              portals: p.optional(),
              id: n.string().min(1),
              base_version_id: n.string().min(1),
              vpn_connection_id: n.string().min(1).nullish(),
              tcp_network_access: d.nullish(),
              revision: n.number().int().nonnegative(),
              repositories: n.array(o),
              install_script: n.string().optional(),
              cwd: n.string().startsWith("/").optional(),
              start_skill: n.string().optional(),
              network_policy: u,
              secrets: n.array(g),
              runtime_requirements: n.array(m).optional(),
              pending_runtime_requirements: n.array(y).optional(),
              outbound_identity_requirements: n.array(s.NU).optional(),
            })
            .nullish(),
        }),
        E = n
          .object({
            data: n.array(
              n.object({
                id: n.string().min(1),
                provider: n.string().optional(),
                name: n.string(),
                description: b.shape.description,
                is_owner: n.boolean().optional(),
                share_settings: b.shape.share_settings,
                repositories: n.array(
                  n.object({ repository_id: n.string(), ref: n.string(), mount_path: n.string().optional() }),
                ),
                version_id: n.string().min(1),
                thread_id: n.string().min(1).nullish(),
                version_revision: n.number().int().positive().optional(),
              }),
            ),
            next_cursor: n.string().nullable(),
          })
          .transform((e) => ({
            data: e.data.map((e) => ({
              id: e.id,
              provider: e.provider,
              name: e.name,
              description: e.description,
              isOwner: e.is_owner,
              shareSettings: e.share_settings,
              repositories: e.repositories.map((e) => ({
                repositoryId: e.repository_id,
                ref: e.ref,
                mountPath: e.mount_path,
              })),
              versionId: e.version_id,
              threadId: e.thread_id,
              versionRevision: e.version_revision,
              status: "ready",
              latestReadyVersionId: e.version_id,
            })),
            nextCursor: e.next_cursor,
          }))
      n.object({
        provider: n.string().optional(),
        id: n.string(),
        name: n.string(),
        description: b.shape.description,
        isOwner: n.boolean().optional(),
        shareSettings: b.shape.share_settings,
        repositories: n.array(
          n.object({ repositoryId: n.string(), ref: n.string(), mountPath: n.string().optional() }),
        ),
        versionId: n.string(),
        threadId: n.string().nullish(),
        versionRevision: n.number().optional(),
        status: n.string(),
        latestReadyVersionId: n.string().nullable(),
      })
      let S = n.object({
          id: n.string().min(1),
          name: n.string(),
          isOwner: n.boolean().optional(),
          description: b.shape.description,
          repositories: n.array(n.object({ repositoryId: n.string() })),
        }),
        O = n
          .object({
            data: n.array(
              n.object({
                id: n.string().min(1),
                name: n.string(),
                is_owner: n.boolean().optional(),
                description: b.shape.description,
                repository_ids: n.array(n.string()),
              }),
            ),
            next_cursor: n.string().nullable(),
          })
          .transform((e) => ({
            data: e.data.map((e) => ({
              id: e.id,
              name: e.name,
              isOwner: e.is_owner,
              description: e.description,
              repositories: e.repository_ids.map((e) => ({ repositoryId: e })),
            })),
            nextCursor: e.next_cursor,
          })),
        R = n.object({
          accountId: n.string(),
          userId: n.string(),
          data: n.array(S).optional(),
          refreshedAt: n.number(),
          reconciledAt: n.number(),
          revision: n.number(),
          retryAt: n.number(),
          failures: n.number(),
        }),
        k = n.string().regex(/^[A-Za-z0-9_~-]+$/),
        P = n.object({
          accountId: n.string().min(1),
          userId: n.string().min(1),
          configId: k,
          method: n.literal("DELETE"),
        }),
        T = n.union([
          n.object({
            accountId: n.string().min(1),
            method: n.literal("POST"),
            userId: n.string().min(1).optional(),
            body: n.union([
              n.strictObject({
                legacy_environment_id: n.string().min(1),
                start_onboarding: n.literal(!0),
                private_draft: n.literal(!0).optional(),
              }),
              b.extend({
                idempotency_key: n.string().min(1).optional(),
                provider_metadata: n.record(n.string(), n.string()).optional(),
                start_onboarding: n.boolean().optional(),
              }),
            ]),
          }),
          n.object({
            accountId: n.string().min(1),
            method: n.literal("POST"),
            configId: k,
            draftId: k.optional(),
            userId: n.string().min(1).optional(),
            body: n.union([
              n.strictObject({ expected_revision: n.number().int().nonnegative() }),
              n.strictObject({ operation_id: n.string().min(1), thread_id: n.string().min(1).optional() }),
            ]),
          }),
          n.object({
            accountId: n.string().min(1),
            method: n.literal("GET"),
            userId: n.string().min(1).optional(),
            configId: k,
            draftId: k.optional(),
          }),
          n
            .object({
              accountId: n.string().min(1),
              method: n.literal("PATCH"),
              userId: n.string().min(1).optional(),
              configId: k,
              draftId: k.optional(),
              body: n.union([v, w]),
            })
            .refine((e) => null == e.draftId || !("base_version_id" in e.body) || null != e.body.expected_revision),
        ]),
        A = n.object({
          accountId: n.string().min(1),
          userId: n.string().min(1),
          configId: k,
          method: n.literal("POST"),
          body: n.strictObject({ start_thread: n.boolean() }).optional(),
        }),
        I = n.object({ draft_id: k, environment_id: n.string().min(1), thread_id: n.string().min(1).nullable() }),
        j = n.object({
          accountId: n.string().min(1),
          userId: n.string().min(1),
          configId: k,
          draftId: k.optional(),
          method: n.literal("POST"),
          body: n.strictObject({
            expected_revision: n.number().int().nonnegative(),
            idempotency_key: n.string().min(1).max(128),
          }),
        }),
        C = n.object({ accountId: n.string().min(1), userId: n.string().min(1), operationId: n.string().min(1) }),
        x = n.object({
          id: n.string().min(1),
          kind: n.string().min(1),
          environment_id: n.string().min(1),
          state: n.enum(["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]),
          failure: n
            .object({
              code: n.string(),
              message: n.string(),
              vpn_failure_stage: n
                .enum(["setup", "daemon_start", "tailscale_up"])
                .optional()
                .catch(void 0),
              vpn_failure_class: n
                .enum([
                  "socket_timeout",
                  "tun_permission",
                  "tun_unavailable",
                  "route_permission",
                  "daemon_exited",
                  "daemon_unavailable",
                  "auth_key_file_unavailable",
                  "auth_rejected",
                  "approval_required",
                  "dns_failure",
                  "network_unreachable",
                  "timeout",
                  "unsupported_option",
                  "permission_denied",
                  "backend_error",
                  "unknown",
                ])
                .optional()
                .catch(void 0),
            })
            .optional(),
        }),
        D = n.object({
          type: n.enum(["env-var", "network-secret"]),
          name: n
            .string()
            .max(256)
            .regex(/^[A-Za-z_][A-Za-z0-9_]*$/),
        }),
        L = n.discriminatedUnion("type", [
          n.object({ type: n.literal("all_environment_configs") }),
          n.object({ type: n.literal("environment_config_ids"), ids: n.array(n.string().min(1)).min(1).max(100) }),
        ]),
        M = n.discriminatedUnion("method", [
          n.object({
            accountId: n.string().min(1),
            userId: n.string().min(1),
            method: n.literal("GET"),
            cursor: n.string().optional(),
            namespace: n.enum(["sensitive", "not_sensitive"]).optional(),
          }),
          n.object({
            accountId: n.string().min(1),
            userId: n.string().min(1),
            method: n.literal("POST"),
            body: n.object({
              namespace: n.enum(["sensitive", "not_sensitive"]).optional(),
              secrets: n
                .array(
                  n.union([
                    n.strictObject({
                      env_var: n.string().min(1),
                      target: L.optional(),
                      name: n.string().min(1),
                      value: n.string().min(1),
                    }),
                    n
                      .strictObject({
                        id: n.string().min(1),
                        name: n.string().min(1).optional(),
                        value: n.string().min(1).optional(),
                        env_var: n.string().min(1).optional(),
                        target: L.optional(),
                      })
                      .refine((e) => (null != e.name || null != e.value) && (null == e.target || null != e.env_var)),
                  ]),
                )
                .min(1),
            }),
          }),
          n.object({
            accountId: n.string().min(1),
            userId: n.string().min(1),
            method: n.literal("DELETE"),
            body: n.object({
              namespace: n.enum(["sensitive", "not_sensitive"]).optional(),
              ids: n.array(n.string().min(1)).min(1),
            }),
          }),
        ]),
        N = n.object({ id: n.string().min(1), name: n.string(), env_var: n.string().nullish(), target: L.nullish() }),
        U = n.object({ secrets: n.array(N), next_cursor: n.string().nullable() }),
        B = n.object({
          secrets: n.array(
            n
              .object({
                id: n.string().min(1).optional(),
                name: n.string(),
                env_var: n.string().nullish(),
                target: L.nullish(),
                error: n.object({ code: n.string() }).optional(),
              })
              .refine((e) => null != e.id || null != e.error),
          ),
        }),
        Q = n.strictObject({
          accountId: n.string().min(1),
          userId: n.string().min(1),
          id: n.string().regex(/^assec_[A-Za-z0-9_~-]+$/),
        }),
        Y = n.object({ value: n.string() }),
        W = n.object({
          accountId: n.string().min(1),
          userId: n.string().min(1),
          namespace: n.enum(["sensitive", "not_sensitive"]),
          names: n
            .array(n.string().refine((e) => null == (0, i.X)(e)))
            .min(1)
            .max(100),
          target: L,
        }),
        F = n.object({
          accountId: n.string().min(1),
          userId: n.string().min(1),
          method: n.literal("POST"),
          body: n.strictObject({
            id: n.string().trim().min(1).optional(),
            namespace: n.enum(["proxy", "runtime"]),
            name: n.string().min(1),
            value: n.string().min(1),
          }),
        }),
        H = n.object({ id: n.string().min(1), name: n.string() }),
        z = n.discriminatedUnion("method", [
          n.object({
            accountId: n.string().min(1),
            userId: n.string().min(1),
            configId: k,
            draftId: n.string().min(1).optional(),
            method: n.literal("GET"),
          }),
          n.object({
            accountId: n.string().min(1),
            userId: n.string().min(1),
            configId: k,
            draftId: n.string().min(1).optional(),
            method: n.literal("POST"),
            body: n.strictObject({
              draft_id: n.string().min(1).optional(),
              provider: n.literal("tailscale"),
              auth_method: n.literal("auth_key"),
              connection_id: n.string().min(1).optional(),
              expected_etag: n.string().min(1).optional(),
              auth_key: n.string().min(1).max(4096).optional(),
              base_version_id: n.string().min(1),
              expected_draft_revision: n.number().int().nonnegative().optional(),
            }),
          }),
        ]),
        q = n.object({
          tcp_network_access_supported: n.boolean().optional(),
          draft_id: n.string().min(1).optional(),
          connection: n
            .object({
              id: n.string().min(1),
              provider: n.enum(["tailscale", "wireguard", "openvpn"]),
              auth_method: n.enum(["auth_key", "oauth"]),
              etag: n.string().min(1),
              configured: n.boolean(),
            })
            .nullable(),
          capabilities: n.array(
            n.object({
              provider: n.enum(["tailscale", "wireguard", "openvpn"]),
              auth_methods: n.array(n.enum(["auth_key", "oauth"])),
            }),
          ),
          base_version_id: n.string().min(1),
          draft_revision: n.number().int().nonnegative().nullable(),
        }),
        J = n.object({
          data: n.array(
            n.object({
              environmentId: n.string(),
              status: n.enum(["connected", "offline", "unknown"]),
              observations: n
                .object({
                  specRevision: n.string(),
                  phase: n.string(),
                  failure: n.object({ code: n.string(), message: n.string() }).optional(),
                })
                .optional(),
            }),
          ),
        }),
        $ = n.discriminatedUnion("method", [
          n.object({
            method: n.literal("getCloudAgentSettings"),
            accountId: n.string().min(1),
            userId: n.string().min(1),
          }),
          n.object({
            method: n.literal("updateCloudAgentSettings"),
            accountId: n.string().min(1),
            userId: n.string().min(1),
            customInstructions: n.string(),
          }),
        ])
      r.d(
        t,
        {},
        {
          AP: x,
          DX: Y,
          F1: _,
          Fn: W,
          KC: H,
          KX: Q,
          LW: F,
          Mc: U,
          N2: j,
          Ns: J,
          Ou: E,
          S8: z,
          Z0: A,
          aV: T,
          b7: q,
          dn: C,
          fs: P,
          iP: R,
          ib: I,
          io: M,
          lz: D,
          mX: "environment-setup-server-configs-v1",
          uG: $,
          uW: B,
          wj: O,
        },
      )
    },
    31926(e, t, r) {
      "use strict"
      var n = r(35553)
      let i = n.object({ connection_id: n.string(), alias: n.string() }),
        s = n
          .string()
          .min(5)
          .max(255)
          .regex(/^oic_[A-Za-z0-9_-]+$/),
        o = n
          .array(n.strictObject({ connection_id: s, alias: n.string().regex(/^[A-Z][A-Z0-9_]{0,63}$/) }))
          .max(16)
          .refine(
            (e) =>
              new Set(e.map(({ connection_id: e }) => e)).size === e.length &&
              new Set(e.map(({ alias: e }) => e)).size === e.length,
          ),
        a = n.object({ accountId: n.string().min(1), userId: n.string().min(1) }),
        l = new Set([
          "connection_id",
          "creation_scope_id",
          "home_workspace_id",
          "provider_kind",
          "azure_tenant_id",
          "azure_client_id",
          "actor_id",
          "actor_user_id",
          "actor_account_user_id",
          "environment_id",
          "configuration_key",
          "actor_email",
          "workspace_id",
          "tenant_id",
        ]),
        c = new Set(["iss", "sub", "aud", "exp", "nbf", "iat", "jti"]),
        u = "oai:v1:oic:{connection_id}",
        d = n
          .string()
          .min(1)
          .max(512)
          .refine(
            (e) =>
              e === e.trim() &&
              512 >=
                (function (e) {
                  let t = 0
                  for (let r of e)
                    2 === r.length
                      ? (t += 4)
                      : 128 > r.charCodeAt(0)
                        ? (t += 1)
                        : 2048 > r.charCodeAt(0)
                          ? (t += 2)
                          : (t += 3)
                  return t
                })(e) &&
              !/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e) &&
              null != E(e),
          ),
        p = n
          .strictObject({
            display_name: n.string().trim().min(1).max(200),
            subject_template: d.refine((e) => e === u || e.startsWith(`${u}:`)),
            additional_claims: n
              .record(
                n
                  .string()
                  .max(64)
                  .regex(/^[A-Za-z][A-Za-z0-9_.-]*$/)
                  .refine((e) => !/^oai_/i.test(e) && !c.has(e.toLowerCase())),
                d,
              )
              .refine((e) => Object.keys(e).length <= 16),
            include_actor_email: n.boolean(),
          })
          .refine(
            ({ include_actor_email: e, subject_template: t, additional_claims: r }) =>
              e || [t, ...Object.values(r)].every((e) => !E(e)?.includes("actor_email")),
          ),
        h = n.union([
          p.safeExtend({ azure_tenant_id: n.uuid(), azure_client_id: n.uuid() }),
          p.safeExtend({
            target: n.discriminatedUnion("provider_kind", [
              n.strictObject({
                provider_kind: n.literal("aws"),
                role_arn: n.string().trim().min(1).max(2048),
                region: n.string().trim().min(1).max(64),
              }),
              n.strictObject({
                provider_kind: n.literal("gcp"),
                workload_identity_provider: n.string().trim().min(1).max(256),
                service_account_email: n.string().trim().min(1).max(254),
              }),
            ]),
          }),
        ])
      n.discriminatedUnion("method", [
        a.extend({ method: n.literal("POST"), body: h }),
        a.extend({ method: n.literal("GET"), connectionId: s }),
        a.extend({
          method: n.literal("PATCH"),
          connectionId: s,
          body: p.safeExtend({ configuration_version: n.number().int().positive() }),
        }),
      ])
      let f = n.string().refine((e) => e.trim().length > 0),
        g = n.strictObject({ provider_kind: n.literal("azure"), tenant_id: f.max(64), client_id: f.max(64) }),
        m = { connection_id: s, display_name: n.string(), can_edit: n.boolean().nullish() },
        y = n
          .object({
            ...m,
            provider_kind: n.literal("azure"),
            target: g.optional(),
            azure_tenant_id: f,
            azure_client_id: f,
          })
          .refine(
            ({ target: e, azure_tenant_id: t, azure_client_id: r }) =>
              null == e || (e.tenant_id === t && e.client_id === r),
          ),
        b = n.object({
          ...m,
          provider_kind: n.literal("aws"),
          target: n.strictObject({ provider_kind: n.literal("aws"), role_arn: f.max(2048), region: f.max(64) }),
          azure_tenant_id: n.never().optional(),
          azure_client_id: n.never().optional(),
        }),
        w = n.object({
          ...m,
          provider_kind: n.literal("gcp"),
          target: n.strictObject({
            provider_kind: n.literal("gcp"),
            workload_identity_provider: f.max(256),
            service_account_email: f.max(254),
          }),
          azure_tenant_id: n.never().optional(),
          azure_client_id: n.never().optional(),
        }),
        v = n.discriminatedUnion("provider_kind", [y, b, w]),
        _ = {
          issuer: n.url().nullable(),
          audience: n.string().regex(/\S/u).nullable(),
          subject_template: n.string(),
          subject: n.string().min(1).nullable(),
          additional_claims: n.record(n.string(), n.string()),
          include_actor_email: n.boolean(),
          enabled: n.boolean(),
          configuration_version: n.number().int().positive(),
        }
      function E(e) {
        let t = []
        for (let [r, n] of e.matchAll(/{{|}}|{([a-z_]+):?}|[{}]/g))
          if ("{{" !== r && "}}" !== r) {
            if (null == n || !l.has(n)) return
            t.push(n)
          }
        return t
      }
      ;(n.discriminatedUnion("provider_kind", [y.safeExtend(_), b.safeExtend(_), w.safeExtend(_)]),
        a.extend({ configId: n.string().regex(/^[A-Za-z0-9_~-]+$/) }),
        n.object({
          capabilities: n.object({ attachment_provider_kinds: n.array(n.string()) }).optional(),
          items: n.array(v).refine((e) => new Set(e.map(({ connection_id: e }) => e)).size === e.length),
          cursor: n.string().nullable(),
        }),
        r.d(t, {}, { NU: i, Z: o }))
    },
    42871(e, t, r) {
      "use strict"
      var n = r(35553),
        i = r(63068)
      let s = n.object({
          projectSources: n.array(n.string()),
          cwd: n.string(),
          runtimeWorkspaceRoots: n.array(n.string()),
        }),
        o = n.object({
          revision: n.string(),
          project: i.aS.nullable(),
          projectMembership: i.aS.optional(),
          projectMembershipRevision: n.string().optional(),
          applied: s.nullable(),
          pending: s.nullable(),
        })
      r.d(
        t,
        {},
        {
          Q: function (e) {
            if (null != e) return o.safeParse(e).data
          },
          u: function (e) {
            return `thread-workspace-state-v1:${e}`
          },
        },
      )
    },
    23507(e, t, r) {
      "use strict"
      var n = r(67221),
        i = r(8095),
        s = r.n(i),
        o = r(25838),
        a = r(35553)
      function l(e, t, r) {
        if (null != t) {
          var n, i
          if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.")
          if (r) {
            if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.")
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.")
            ;((n = t[Symbol.dispose]), r && (i = n))
          }
          if ("function" != typeof n) throw TypeError("Object not disposable.")
          ;(i &&
            (n = function () {
              try {
                i.call(this)
              } catch (e) {
                return Promise.reject(e)
              }
            }),
            e.stack.push({ value: t, dispose: n, async: r }))
        } else r && e.stack.push({ async: !0 })
        return t
      }
      function c(e) {
        function t(t) {
          ;((e.error = e.hasError ? new _SuppressedError(t, e.error, "An error was suppressed during disposal.") : t),
            (e.hasError = !0))
        }
        var r,
          n = 0
        return (function i() {
          for (; (r = e.stack.pop());)
            try {
              if (!r.async && 1 === n) return ((n = 0), e.stack.push(r), Promise.resolve().then(i))
              if (r.dispose) {
                var s = r.dispose.call(r.value)
                if (r.async)
                  return (
                    (n |= 2),
                    Promise.resolve(s).then(i, function (e) {
                      return (t(e), i())
                    })
                  )
              } else n |= 1
            } catch (e) {
              t(e)
            }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve()
          if (e.hasError) throw e.error
        })()
      }
      let u = [
          o.Q2Y.HOST_ID_REMOTE_CONTROL_ALLOWED,
          o.Q2Y.ADDED_REMOTE_CONTROL_ENV_IDS,
          o.Q2Y.CODEX_MOBILE_SETUP_COMPLETED,
        ],
        d = a.array(a.string()).nullish()
      class p extends n.TF {
        readValue
        updateValue
        subscribeToChanges
        listeners = new Set()
        constructor(e, t, r) {
          ;(super(), (this.readValue = e), (this.updateValue = t), (this.subscribeToChanges = r))
        }
        async getState() {
          let [e, t, r] = await Promise.all(u.map((e) => this.readValue(e)))
          return {
            allowedHostIds: d.parse(e) ?? void 0,
            addedEnvironmentIds: d.parse(t) ?? [],
            mobileSetupCompleted: a.boolean().nullish().parse(r) ?? !1,
          }
        }
        async allowHost(e) {
          ;(await this.updateValue(o.Q2Y.HOST_ID_REMOTE_CONTROL_ALLOWED, (t) => s()([...(d.parse(t) ?? []), e])),
            this.notify())
        }
        async addEnvironments(e) {
          ;(await this.updateValue(o.Q2Y.ADDED_REMOTE_CONTROL_ENV_IDS, (t) => s()([...(d.parse(t) ?? []), ...e])),
            this.notify())
        }
        async completeMobileSetup() {
          ;(await this.updateValue(o.Q2Y.CODEX_MOBILE_SETUP_COMPLETED, () => !0), this.notify())
        }
        subscribe(e) {
          let t = e.dup(),
            r = () => {
              let e = { stack: [], error: void 0, hasError: !1 }
              try {
                l(e, t(), !1)
              } catch (t) {
                ;((e.error = t), (e.hasError = !0))
              } finally {
                c(e)
              }
            },
            n = this.subscribeToChanges?.(r)
          null == n && this.listeners.add(t)
          let i = new h(() => {
            ;(n?.(), this.listeners.delete(t), t[Symbol.dispose]())
          })
          return (t.onRpcBroken(() => i.unsubscribe()), r(), i)
        }
        notify() {
          for (let e of this.listeners) {
            let t = { stack: [], error: void 0, hasError: !1 }
            try {
              l(t, e(), !1)
            } catch (e) {
              ;((t.error = e), (t.hasError = !0))
            } finally {
              c(t)
            }
          }
        }
      }
      class h extends n.TF {
        cleanup
        constructor(e) {
          ;(super(), (this.cleanup = e))
        }
        unsubscribe() {
          let e = this.cleanup
          ;((this.cleanup = null), e?.())
        }
        [Symbol.dispose]() {
          this.unsubscribe()
        }
      }
      r.d(t, {}, { M: p, Q: u })
    },
    60656(e, t, r) {
      "use strict"
      var n = r(78335),
        i = r(25838)
      let s = "electron-renderer-content-owner",
        o = new Set(Object.values(i.aiU)),
        a = [
          i.Q2Y.SELECTED_REMOTE_HOST_ID,
          i.Q2Y.ACTIVE_REMOTE_PROJECT_ID,
          i.Q2Y.CONNECTION_GROUP_ORDER,
          i.Q2Y.REMOTE_CWDS_BY_HOST_AND_WORKSPACE,
          i.Q2Y.HOST_ID_REMOTE_CONTROL_ALLOWED,
          i.Q2Y.ADDED_REMOTE_CONTROL_ENV_IDS,
          i.Q2Y.REMOTE_PROJECT_CONNECTION_BACKFILL_COMPLETED,
          i.Q2Y.REMOTE_CONNECTION_AUTO_CONNECT_BY_HOST_ID,
        ],
        l = new Set(a),
        c = "electron-account-remote-preference:",
        u = [
          i.Q2Y.OPEN_IN_TARGET_PREFERENCES,
          i.Q2Y.WORKTREE_REPOSITORY_PREFERENCES,
          i.Q2Y.SELECTED_PROJECT,
          i.Q2Y.APP_SERVER_PENDING_PROJECT_DELETIONS_BY_HOST,
          i.Q2Y.APP_SERVER_PROJECTS_MIGRATION_BY_HOST,
          i.Q2Y.APP_SERVER_MIGRATED_PINNED_THREAD_IDS_BY_HOST,
          i.Q2Y.THREAD_WRITABLE_ROOTS,
          i.Q2Y.THREAD_WORKSPACE_ROOT_HINTS,
          i.Q2Y.THREAD_PROJECTLESS_OUTPUT_DIRECTORIES,
          i.Q2Y.PROJECT_WRITABLE_ROOTS,
          i.Q2Y.ACTIVE_WORKSPACE_ROOTS,
          i.Q2Y.WORKSPACE_ROOT_OPTIONS,
          i.Q2Y.WORKSPACE_ROOT_LABELS,
          ...a,
        ],
        d = new Set(u),
        p = "electron-owner-value:",
        h = "electron-owner-atoms:",
        f = new WeakMap(),
        g = new Set([
          "prompt-history",
          "composer-retained-documents-v1",
          "image-text-editing-requests",
          "codex-dictation-feedback-messages-v1",
          "chatgpt-dictation-feedback-messages-v1",
          "pinned-content-tabs-v1",
          "pinned-content-tab-presentation-v1",
          "settings-workspace-tabs-v1",
        ])
      function m(e) {
        return null == e || "object" != typeof e || Array.isArray(e)
          ? {}
          : Object.fromEntries(Object.entries(e).filter(([e]) => o.has(e)))
      }
      function y(e, t, r) {
        for (let n of u) {
          let i = r(n),
            s = b(n) + t
          void 0 === i || e.has(s) || e.set(s, i)
        }
      }
      function b(e) {
        return `${l.has(e) ? c : p}${e}:`
      }
      function w(e) {
        return null == e || "object" != typeof e || Array.isArray(e) ? [] : Object.entries(e)
      }
      function v(e) {
        return (
          !o.has(e) &&
          !g.has(e) &&
          !/(?:^|[:-])drafts?(?:$|[:-])/.test(e) &&
          !e.startsWith(i.aU6) &&
          !e.startsWith(i.i0d)
        )
      }
      function _(e, t, r) {
        let n = e.get(h + t)
        if (null == n || "object" != typeof n) return r
        let i = f.get(n)
        if (null != i && i.live === r) return i.view
        let s = Object.fromEntries([...w(n), ...w(r)])
        return (f.set(n, { live: r, view: s }), s)
      }
      function E(e, t, r, n) {
        let i = [],
          s = []
        for (let e of w(n)) v(e[0]) ? i.push(e) : s.push(e)
        ;(i.length > 0 ? e.set(h + t, Object.fromEntries(i)) : e.delete(h + t),
          void 0 === n ? e.delete(r) : e.set(r, Object.fromEntries(s)))
      }
      r.d(
        t,
        {},
        {
          FS: function (e, t) {
            return {
              ...Object.fromEntries(
                (null != e && "object" == typeof e ? Object.entries(e) : []).filter(([e]) => !o.has(e)),
              ),
              ...m(t),
            }
          },
          Hw: function (e, t) {
            return e.has(h + t) || u.some((r) => e.has(b(r) + t))
          },
          L_: function (e, t, r) {
            let n = w(r).filter(([e]) => v(e))
            if (0 === n.length) return
            let i = h + t
            e.set(i, Object.fromEntries([...n, ...w(e.get(i))]))
          },
          N0: b,
          O: u,
          Oq: "electron-persisted-atom-state",
          RQ: function (e) {
            return o.has(e)
          },
          Um: _,
          Ww: s,
          XS: function (e, t) {
            y(e, t, (t) => {
              let r = e.get(t)
              return (e.delete(t), r)
            })
          },
          XY: y,
          a6: function (e, t, r) {
            return e.startsWith(p) || e.startsWith(h) || e.startsWith(c)
              ? void 0
              : d.has(e)
                ? r
                  ? void 0
                  : "string" == typeof t
                    ? b(e) + t
                    : e
                : e
          },
          cK: function* (e, t) {
            let r = [
                i.Q2Y.THREAD_WRITABLE_ROOTS,
                i.Q2Y.THREAD_WORKSPACE_ROOT_HINTS,
                i.Q2Y.THREAD_PROJECTLESS_OUTPUT_DIRECTORIES,
              ],
              n = e.get(s),
              o = new Set(["string" == typeof n ? n : void 0]),
              a = [h, ...r.map(b)]
            for (let t of e.keys()) for (let e of a) t.startsWith(e) && o.add(t.slice(e.length))
            for (let i of o) {
              let s = i === n || (null == i && null == n),
                o = null == i ? void 0 : e.get(h + i)
              yield {
                atoms: s ? { ...Object.fromEntries(w(o)), ...Object.fromEntries(w(e.get(t))) } : o,
                paths: r.map((t) => (null != i ? e.get(b(t) + i) : void 0) ?? (s ? e.get(t) : void 0)),
              }
            }
          },
          ix: function (e, t, r) {
            let n = e.get(r)
            w(n).some(([e]) => v(e)) && E(e, t, r, _(e, t, n))
          },
          lj: E,
          rD: function (e, t) {
            let r = e.get(s),
              n = "string" == typeof r ? e.get(h + r) : void 0
            return null != n && "object" == typeof n && Object.hasOwn(n, t) ? Reflect.get(n, t) : void 0
          },
          s6: function (e) {
            return null == e
              ? "signed-out"
              : (0, n.createHash)("sha256")
                  .update(JSON.stringify([e.userId, e.accountId]))
                  .digest("hex")
          },
          yZ: m,
        },
      )
    },
    64497(e, t, r) {
      "use strict"
      var n = r(86697),
        i = r(4482),
        s = r(37891),
        o = r(78191),
        a = r(10631)
      let l = /^--(?:permission|allow-(?:net|ipc|fs-read|fs-write|addons|child-process|worker|inspector|wasi))(?:=|$)/
      function c() {
        return "win32" === process.platform
          ? [(0, s.nQ)()]
          : [(0, s.nQ)(), (0, s.I4)(), (0, n.join)((0, s.Dn)(), "app-server-control", "app-server-control.sock")]
      }
      r.d(
        t,
        {},
        {
          V: function (e) {
            if (null == process.versions.electron) return !0
            let t = i.app.commandLine.hasSwitch(a.Q)
            if ("unrestricted" === e.kind && !t) return !0
            if ("restricted" === e.kind && t)
              return (
                (function (e) {
                  if (
                    "restricted" === e.kind &&
                    null != process.versions.electron &&
                    (process.permission?.has("net") !== !1 || !c().every((e) => process.permission?.has("ipc", e)))
                  )
                    throw Error("Owl did not activate the required Node network permissions.")
                })(e),
                !0
              )
            let r = process.argv.slice(1).filter((e) => e !== `--${a.Q}` && !l.test(e))
            return (
              "restricted" === e.kind &&
                (r.unshift(
                  `--${a.Q}`,
                  "--permission",
                  "--allow-fs-read=*",
                  "--allow-fs-write=*",
                  "--allow-addons",
                  "--allow-child-process",
                  "--allow-worker",
                  ...c().map((e) => `--allow-ipc=${e}`),
                ),
                delete process.env.NODE_OPTIONS),
              (0, o.XO)(),
              i.app.relaunch({ args: r }),
              i.app.exit(0),
              !1
            )
          },
        },
      )
    },
    99586(e, t, r) {
      "use strict"
      var n = r(25838),
        i = r(35553)
      let s = i.object({
        requirements: i
          .object({
            application: i
              .object({
                network: i
                  .object({
                    enabled: i.boolean(),
                    domains: i.record(
                      i
                        .string()
                        .max(253)
                        .regex(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/),
                      i.enum(["allow", "deny"]),
                    ),
                  })
                  .nullable(),
              })
              .nullable()
              .optional(),
          })
          .nullable(),
      })
      r.d(
        t,
        {},
        {
          $o: function (e, t) {
            if ("POST" !== t) return !1
            let r = URL.parse(e)
            return (
              r?.origin === "https://ab.chatgpt.com" &&
              "/v1/initialize" === r.pathname &&
              "" === r.username &&
              "" === r.password &&
              "" === r.hash
            )
          },
          bA: function (e, t) {
            let r = s.safeParse(t)
            if (!r.success)
              throw Error(
                "Application network requirements are invalid or unavailable. Update the app server to a version that exposes application requirements.",
              )
            if (
              null != r.data.requirements &&
              void 0 === r.data.requirements.application &&
              !(null != e && (0, n.DE9)(e) && (0, n.rT6)(e, n.MjT) >= 0 && 0 > (0, n.rT6)(e, "0.154.0-alpha.1"))
            )
              throw Error("This app server did not provide application network requirements.")
            let i = r.data.requirements?.application?.network
            return i?.enabled !== !0
              ? { kind: "unrestricted" }
              : {
                  kind: "restricted",
                  allowedDomains: new Set(
                    Object.entries(i.domains)
                      .filter(([, e]) => "allow" === e)
                      .map(([e]) => e),
                  ),
                }
          },
          tS: function (e, t) {
            let r
            try {
              r = "string" == typeof t ? new URL(t) : t
            } catch {
              return !1
            }
            return (
              !!["app:", "codex-sandbox:", "data:", "blob:", "file:", "about:"].includes(r.protocol) ||
              (null != e &&
                ("unrestricted" === e.kind ||
                  (("https:" === r.protocol || "wss:" === r.protocol) &&
                    e.allowedDomains.has(r.hostname.replace(/\.$/, "")))))
            )
          },
        },
      )
    },
    25748(e, t, r) {
      "use strict"
      r.d(t, { E: () => k, initializeNodeNetworkPermissions: () => P })
      var n = r(42524),
        i = r(86697),
        s = r(4482),
        o = r(25838),
        a = r(37891),
        l = r(67726),
        c = r(56714),
        u = r(75211),
        d = r(37119),
        p = r(50135),
        h = r(15248),
        f = r(66439),
        g = r(64497),
        m = r(99586)
      let y = {
          messageId: "desktop.workspacePolicyRecovery.title",
          defaultMessage: "Organization settings could not be loaded",
        },
        b = {
          messageId: "desktop.workspacePolicyRecovery.detail",
          defaultMessage:
            "The app is paused until your organization settings can be loaded safely. A network connection, proxy, or firewall may be preventing access. Check your connection and try again, or sign out to use another account. If the problem continues, contact your IT administrator",
        },
        w = {
          messageId: "desktop.workspacePolicyRecovery.configTitle",
          defaultMessage: "ChatGPT configuration could not be loaded",
        },
        v = {
          messageId: "desktop.workspacePolicyRecovery.configDetailWithLocation",
          defaultMessage:
            "ChatGPT cannot start until its configuration is fixed. Open the file below, fix the reported issue, save it, then choose Retry. If your organization manages this file, contact your IT administrator.{paragraphBreak}{location}{lineBreak}{detail}",
        },
        _ = {
          messageId: "desktop.workspacePolicyRecovery.configDetailWithoutLocation",
          defaultMessage:
            "ChatGPT cannot start until its configuration is fixed. Check config.toml in the app’s configuration folder for the issue below, save your changes, then choose Retry. If you cannot find the setting or your organization manages it, contact your IT administrator.{paragraphBreak}{detail}",
        },
        E = { messageId: "desktop.workspacePolicyRecovery.retry", defaultMessage: "Retry" },
        S = { messageId: "desktop.workspacePolicyRecovery.signOut", defaultMessage: "Sign out" },
        O = { messageId: "desktop.workspacePolicyRecovery.quit", defaultMessage: "Quit" },
        R = null
      function k() {
        return R
      }
      async function P() {
        ;((R = null),
          await (0, f.z1)(),
          null != process.env.CODEX_HOME && (process.env.CODEX_HOME = (0, i.resolve)(process.env.CODEX_HOME)))
        let e = !1,
          t = !1,
          r = !1,
          k = 0,
          P = null,
          T = null
        for (;;) {
          k += 1
          let f = "home-creation"
          try {
            ;(t ||
              ("win32" === process.platform && s.app.isPackaged
                ? await (async function () {
                    let e = (0, a.Dn)()
                    if ((await (0, n.mkdir)(e, { recursive: !0 })) !== void 0)
                      try {
                        await (0, n.writeFile)((0, i.join)(e, ".desktop-created"), "", { flag: "wx" })
                      } catch (e) {
                        if (e instanceof Error && "code" in e && "EEXIST" === e.code) return
                        ;(0, a.getLogger)().warning("Failed to record Windows desktop home ownership", {
                          safe: {},
                          sensitive: { error: e },
                        })
                      }
                  })()
                : await (0, n.mkdir)((0, a.Dn)(), { recursive: !0 }),
              (t = !0)),
              (f = "preparation"),
              (T =
                T ??
                Promise.resolve()
                  .then(async () => {
                    let e = !1
                    if ("win32" === process.platform) {
                      let t = (0, a.Dn)(),
                        r = new p.r((0, i.join)(t, "config.toml"), new c.RL((0, i.join)(t, ".codex-global-state.json")))
                      e = !0 === r.getEffective(o.Szl.runCodexInWsl.key) && (await (0, a.Bw)()) != null
                    }
                    return (0, a.NU)(
                      {
                        hostConfig: u.a,
                        spawnInsideWsl: e,
                        repoRoot: (0, i.join)(s.app.getAppPath(), ".."),
                        resourcesPath: (0, l.b)({
                          isPackaged: s.app.isPackaged,
                          env: process.env,
                          resourcesPath: process.resourcesPath,
                        }),
                      },
                      s.app.getVersion(),
                    )
                  })
                  .catch((e) => {
                    throw ((T = null), e)
                  })))
            let d = await (async function (e) {
              let t,
                r = performance.now()
              try {
                let n = await Promise.race([
                  e,
                  new Promise((e, r) => {
                    t = setTimeout(() => {
                      r(new a.kK("timeout"))
                    }, 12e4)
                  }),
                ])
                if (performance.now() - r >= 12e4) throw new a.kK("timeout")
                return n
              } finally {
                clearTimeout(t)
              }
            })(T)
            ;((f = "policy-read"), (P = P ?? performance.now() + 6e4), (r = r || e))
            let { appServerVersion: h, response: y } = await (0, a.oZ)(d, {
              signOut: e,
              timeoutMs: Math.max(1, Math.min(3e4, P - performance.now())),
            })
            f = "policy-validation"
            let b = (0, m.bA)(h, y)
            if (((f = "node-permissions"), !(0, g.V)(b))) return !1
            return ((R = b), !0)
          } catch (R) {
            let t
            if (!r && (0, h.R)(R)) {
              ;((e = !0), (k = 0), (P = null))
              continue
            }
            let n = R instanceof a.kK ? R.reason : f,
              o = 1e3 * 2 ** (k - 1),
              l =
                "policy-read" === f &&
                null != P &&
                !e &&
                R instanceof a.kK &&
                R.retryable &&
                k < 3 &&
                performance.now() + o < P
            if (
              ((0, a.getLogger)().warning("Desktop startup policy read failed", {
                safe: { reason: n, phase: f, attempt: k, retrying: l },
              }),
              l)
            ) {
              await new Promise((e) => setTimeout(e, o))
              continue
            }
            ;(await s.app.whenReady(), await (0, d.dh)((0, i.join)(s.app.getAppPath(), "..")))
            let c = (0, d.F$)(),
              u = R instanceof a.UX ? R.configError : null,
              p = [c.formatMessage(E)]
            ;(null == u && p.push(c.formatMessage(S)), p.push(c.formatMessage(O)))
            let g = p.length - 1
            t =
              null == u
                ? c.formatMessage(b)
                : null == u.filePath
                  ? c.formatMessage({ ..._, values: { detail: u.detail, paragraphBreak: "\n\n" } })
                  : c.formatMessage({
                      ...v,
                      values: {
                        location: [u.filePath, u.line, u.column].filter((e) => null != e).join(":"),
                        detail: u.detail,
                        paragraphBreak: "\n\n",
                        lineBreak: "\n",
                      },
                    })
            let { response: m } = await s.dialog.showMessageBox({
              type: "warning",
              message: null == u ? c.formatMessage(y) : c.formatMessage(w),
              detail: t,
              buttons: p,
              defaultId: 0,
              cancelId: g,
              noLink: !0,
            })
            if (m === g) return (s.app.exit(0), !1)
            ;((e = null == u && 1 === m), (k = 0), (P = null), "preparation" !== f && (T = null))
          }
        }
      }
    },
    95425(e, t, r) {
      "use strict"
      var n = r(58248),
        i = r(35553)
      let s = i.array(
        i.object({
          accountId: i.string().min(1),
          userId: i.string().min(1),
          hostId: i.literal("local"),
          conversationId: i.string().min(1),
          selectedTask: i.string().min(1),
          isRevert: i.boolean().optional(),
          completion: n.c3.nullable(),
        }),
      )
      r.d(t, {}, { X: "electron-conversational-onboarding-completions-v1", q: s })
    },
    67726(e, t, r) {
      "use strict"
      let n = "CODEX_ELECTRON_RESOURCES_PATH"
      r.d(
        t,
        {},
        {
          Z: n,
          b: function ({ env: e, isPackaged: t, resourcesPath: r }) {
            return t ? r : e[n]?.trim() || r
          },
        },
      )
    },
    56714(e, t, r) {
      "use strict"
      r.d(t, {
        Qe: () => G,
        K6: () => K,
        X3: () => H,
        gr: () => F,
        RW: () => N,
        Q: () => Z,
        IA: () => X,
        vb: () => Y,
        Mt: () => ed,
        hw: () => ec,
        Lz: () => ea,
        vk: () => ep,
        RL: () => eR,
        $6: () => U,
        aX: () => et,
        lW: () => el,
        hO: () => $,
        eH: () => V,
        Wn: () => ee,
        MP: () => eh,
        Oq: () => E.Oq,
        I9: () => er,
        T_: () => J,
        LP: () => eu,
        DD: () => z,
        wk: () => q,
        vK: () => en,
        gw: () => ei,
        wU: () => W,
        MR: () => es,
        Tw: () => eo,
      })
      var n = r(78335),
        i = r(89477),
        s = r(42524),
        o = r(86697),
        a = r(68543),
        l = r(8857),
        c = r.n(l),
        u = r(25838),
        d = r(55924),
        p = r(17911),
        h = r(37891),
        f = r(23507),
        g = r(35553),
        m = r(1229),
        y = r.n(m),
        b = r(81044)
      let w = g.record(g.string(), g.unknown()),
        v = g.array(g.string())
      function _(e) {
        let t = w.safeParse(e[u.Q2Y.LOCAL_PROJECTS]).data,
          r = (0, u.b9)(t)
        if (null != t && Object.keys(t).length === Object.keys(r).length) return
        let n = u.Q2Y.WORKSPACE_ROOT_OPTIONS,
          i = e[n],
          s = u.Q2Y.ACTIVE_WORKSPACE_ROOTS,
          o = e[s]
        if (null == t && !(Array.isArray(i) && i.length > 0) && !(Array.isArray(o) && o.length > 0)) return
        let a = u.Q2Y.PROJECT_WRITABLE_ROOTS,
          l = Object.fromEntries(Object.entries((0, u.eFT)(e[a])).map(([e, t]) => [e, t.slice(0, 1)])),
          c = (0, u.DZs)(e[u.Q2Y.THREAD_PROJECT_ASSIGNMENTS])
        ;(0, b.v)({
          getStored: (r) => (r === a ? l : null == t || (r !== n && r !== s) ? e[r] : void 0),
          set: (t, r) => {
            e[t] = r
          },
        })
        let d = (0, u.b9)(e[u.Q2Y.LOCAL_PROJECTS])
        for (let [e, t] of Object.entries(c))
          if ("local" === t.projectKind && !Object.hasOwn(d, t.projectId)) {
            let r = (0, b.W)(t.projectId)
            Object.hasOwn(d, r) && (c[e] = { ...t, projectId: r })
          }
        ;(Object.keys(c).length > 0 && (e[u.Q2Y.THREAD_PROJECT_ASSIGNMENTS] = c),
          (e[u.Q2Y.LOCAL_PROJECTS] = { ...d, ...r }))
      }
      var E = r(60656)
      let S = "electron-account-renderer-state-v1",
        O = g.record(g.string(), g.unknown()),
        R = g.array(g.string()),
        k = g.record(g.string(), g.record(g.string(), g.string()))
      function P(e) {
        return Array.isArray(e)
          ? e.flatMap((e) => {
              let t = u.Dw7.safeParse(e).data
              return null == t ? [] : [t]
            })
          : []
      }
      var T = r(95425),
        A = r(73891),
        I = r(31447),
        j = r(14416),
        C = r(70909),
        x = r(42871),
        D = r(75211)
      let L = g.array(g.string()),
        M = g.record(g.string(), g.unknown()),
        N = "electron-browser-auth-operations",
        U = "electron-initial-follow-up-queue-mode",
        B = "electron-custom-runtime-state",
        Q = "electron-custom-runtime-outbox-state",
        Y = "electron-cloud-worktree-environments",
        W = "electron-worktree-cleanup-buffer-start-ms",
        F = "electron-avatar-overlay-open",
        H = "electron-avatar-overlay-bounds",
        z = "electron-remote-hosted-pip-content-max-display-size",
        q = "electron-remote-hosted-pip-task-visibility-state",
        J = "electron-remote-control-client-enrollments",
        $ = "electron-local-remote-control-environment-id",
        V = "electron-local-remote-control-installation-id",
        K = "electron-automations-installation-id",
        G = "electron-automations-habitat-migration-state",
        X = "electron-chrome-extension-sync-managed-plugin-ids",
        Z = "electron-browser-extension-recently-used",
        ee = "electron-mac-push-deregistration-token",
        et = "electron-internal-update-cdn-enabled",
        er = "electron-prefer-mxc-enabled",
        en = "electron-windows-core-runtime-frameworks-enabled",
        ei = "electron-windows-primary-runtime-frameworks-enabled",
        es = "electron-wsl-remote-connections-migrated",
        eo = "electron-wsl-remote-connections-migration-enabled",
        ea = "electron-desktop-otraces-sample-rate",
        el = "electron-browser-download-history",
        ec = "electron-completed-local-data-migration-ids",
        eu = "electron-remote-control-config-migration-completed",
        ed = "electron-codex-app-config-applied-remote-declarations",
        ep = "environment-catalog-cache-v2",
        eh = "pending-cloud-parent-keys",
        ef = [100, 200, 400],
        eg = (0, h.vB)("global-state"),
        em = g.object({ userId: g.string(), accountId: g.string(), workspaceOrder: g.array(g.string()) }),
        ey = g.object({
          left: g.number(),
          top: g.number(),
          width: g.number().positive(),
          height: g.number().positive(),
        }),
        eb = g.object({ x: g.number(), y: g.number(), width: g.number().positive(), height: g.number().positive() }),
        ew = g.enum(["top-start", "top-end", "bottom-start", "bottom-end"]),
        ev = g.enum(["shown", "hidden"]),
        e_ = g
          .array(
            g.object({
              canCancel: g.boolean(),
              canPause: g.boolean(),
              canResume: g.boolean(),
              conversationId: g.string().nullable(),
              exists: g.boolean(),
              filename: g.string(),
              id: g.string(),
              path: g.string(),
              receivedBytes: g.number(),
              source: g.enum(["agent", "user"]),
              startedAtMs: g.number(),
              status: g.enum(["started", "in_progress", "paused", "failed", "canceled", "complete"]),
              totalBytes: g.number(),
              updatedAtMs: g.number(),
              url: g.string(),
            }),
          )
          .max(200),
        eE = g.union([e_, g.object({ downloads: e_, version: g.literal(1) })]),
        eS = g.object({
          isFreelyPositioned: g.boolean().optional(),
          snapPosition: g
            .enum(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"])
            .nullable()
            .optional(),
          x: g.number(),
          y: g.number(),
          width: g.number().positive().optional(),
          height: g.number().positive().optional(),
          anchor: eb.optional(),
          displayBounds: eb.optional(),
          displayId: g.number().optional(),
          mascot: ey.optional(),
          placement: ew.optional(),
          tray: ey.nullable().optional(),
        }),
        eO = Object.fromEntries(
          Object.entries({
            "latex-project-main-files": g.array(g.object({ root: g.string(), mainFile: g.string() })).max(100),
            "hotkey-window-home-placement": A.Hv,
            [T.X]: T.q,
            [C.K4]: C.mA,
            [I.o]: I.N,
            [Y]: g.record(g.string(), g.array(g.string())),
            "electron-main-window-bounds": g.object({
              x: g.number(),
              y: g.number(),
              width: g.number(),
              height: g.number(),
              isMaximized: g.boolean().optional(),
            }),
            [F]: g.boolean(),
            ...j.W,
            [H]: eS.extend({
              byDisplayId: g.record(g.string(), eS).optional(),
              byResolution: g.record(g.string(), eS).optional(),
            }),
            [z]: g.number().positive(),
            [q]: g.record(g.string(), ev),
            [E.Oq]: g.record(g.string(), g.unknown()),
            [E.Ww]: g.string(),
            [ep]: p.iP,
            [eh]: g.record(g.string(), g.string()),
            [U]: g.enum(["queue", "steer"]),
            [B]: g.unknown(),
            [Q]: g.array(
              g.object({
                callId: g.string(),
                conversationId: g.string().transform(u.JXB),
                message: g.string(),
                sentAtMs: g.number(),
                turnId: g.string(),
              }),
            ),
            [J]: g.record(
              g.string(),
              g.object({
                accountUserId: g.string(),
                algorithm: g.literal("ecdsa_p256_sha256"),
                clientId: g.string(),
                keyId: g.string(),
                protectionClass: g.enum(["hardware_secure_enclave", "hardware_tpm", "os_protected_nonextractable"]),
                publicKeySpkiDerBase64: g.string(),
              }),
            ),
            [$]: g.string(),
            [V]: g.string(),
            [K]: g.uuid(),
            [G]: g.record(g.string(), g.enum(["declined", "in_progress", "complete"])),
            [X]: g.array(g.string()),
            [Z]: g.record(g.string(), g.array(g.string())),
            [ee]: g.union([
              g.string(),
              g.strictObject({ token: g.string(), isFedramp: g.literal(!0) }),
              g.object({
                kind: g.literal("workspace"),
                token: g.string(),
                isFedramp: g.boolean(),
                backendOrigin: g.string().refine((e) => {
                  let t = URL.parse(e)
                  return t?.protocol === "https:" && t.origin === e
                }),
                accountRoutingOverride: g.enum(["NO_CONSTRAINT", "us", "us_cr", "eu_cr"]),
              }),
            ]),
            [et]: g.boolean(),
            [er]: g.boolean(),
            [en]: g.boolean(),
            [ei]: g.boolean(),
            [es]: g.boolean(),
            [eo]: g.boolean(),
            "electron-desktop-tabs-rollout-enabled": g.boolean(),
            [ea]: g.number().min(0).max(1),
            [el]: eE,
            [ec]: g.array(g.string()),
            [eu]: g.boolean(),
            [ed]: g.record(g.string(), g.array(g.string())),
            [W]: g.number(),
            [N]: d.w,
          }).map(([e, t]) => [e, t.optional()]),
        )
      class eR {
        logger = (0, h.vB)("global-state")
        state
        changeListeners = new Map()
        filePath
        persistDebounced
        persistScheduledForAtoms = !1
        persistScheduledForCustomRuntime = !1
        persistScheduled = !1
        persistQueued = Promise.resolve()
        rendererAccountGeneration = 0
        storedOwnerGeneration = 0
        awaitingContentOwner = !1
        archivesPersisted = !1
        constructor(e, t = "renderer") {
          ;((this.filePath = e),
            (this.state = (function (e) {
              if (!(0, i.existsSync)(e)) return new Map()
              let t = eP(e)
              if (null != t) return t
              let r = eP(`${e}.bak`)
              return null != r
                ? (eg().warning("Loaded global state from backup", { safe: {}, sensitive: {} }), r)
                : new Map()
            })(this.filePath)),
            (this.persistDebounced = (0, u.sg1)(() => {
              this.persistScheduledForAtoms &&
                ((this.persistScheduledForAtoms = !1), this.queueGlobalStatePersistence())
            }, 500)),
            (function (e) {
              if (!e.has(S)) return !1
              let t = O.safeParse(e.get(S)).data,
                r = Object.fromEntries(e)
              for (let [t, n] of (_(r), Object.entries(r))) e.set(t, n)
              let n = "string" == typeof t?.owner ? t.owner : null,
                i = O.safeParse(t?.inactive).data ?? {}
              if (
                (null == n || e.has(E.Ww) || (e.set(E.Ww, n), (0, E.XS)(e, n), (0, E.ix)(e, n, E.Oq)),
                0 === Object.keys(i).length)
              )
                return (e.delete(S), !0)
              let s = (0, u.b9)(e.get(u.Q2Y.LOCAL_PROJECTS)),
                o = new Map(P(e.get(u.Q2Y.REMOTE_PROJECTS)).map((e) => [e.id, e])),
                a = new Set([...(R.safeParse(e.get(u.Q2Y.PROJECT_ORDER)).data ?? []), ...Object.keys(s), ...o.keys()]),
                l = new Set(R.safeParse(e.get(u.Q2Y.PINNED_PROJECT_IDS)).data),
                c = new Set(R.safeParse(e.get(u.Q2Y.PINNED_THREAD_IDS)).data),
                d = (0, u.DZs)(e.get(u.Q2Y.THREAD_PROJECT_ASSIGNMENTS)),
                p = k.safeParse(e.get(u.Q2Y.APP_SERVER_PROJECT_ID_BY_LEGACY_PROJECT_ID_BY_HOST)).data ?? {},
                h = new Set(R.safeParse(e.get(u.Q2Y.PROJECTLESS_THREAD_IDS)).data),
                f = u.Q2Y.THREAD_PROJECT_MEMBERSHIP_HOST_IDS,
                m = g.record(g.string(), g.string()).safeParse(e.get(f)).data ?? {},
                b = new Set()
              for (let [t, r] of Object.entries(i)) {
                let n = O.safeParse(r).data
                ;(0, E.L_)(e, t, n?.atoms)
                let i = O.safeParse(n?.globals).data
                if (null == i) continue
                ;(_(i),
                  (0, E.XY)(e, t, (e) => i[e]),
                  (function (e, t) {
                    for (let r of [
                      u.Q2Y.PROJECT_APPEARANCES,
                      u.Q2Y.SIDEBAR_THREAD_METADATA,
                      u.Q2Y.DESKTOP_APP_BETA_PREFERENCES_BY_ACCOUNT_ID,
                    ]) {
                      let n = r === u.Q2Y.PROJECT_APPEARANCES ? (0, u.OS5)(t[r]) : w.safeParse(t[r]).data
                      null != n && Object.keys(n).length > 0 && e.set(r, { ...n, ...w.safeParse(e.get(r)).data })
                    }
                    let r = u.Q2Y.PROJECT_FILES,
                      n = (0, u.E52)(e.get(r))
                    for (let [e, i] of Object.entries((0, u.E52)(t[r])))
                      n[e] = y()([...(n[e] ?? []), ...i], (e) => (0, u.JHM)(e.path))
                    Object.keys(n).length > 0 && e.set(r, n)
                    let i = u.Q2Y.SIDEBAR_PROJECT_THREAD_ORDERS,
                      s = (0, u.Ko0)(e.get(i))
                    for (let [e, r] of Object.entries((0, u.Ko0)(t[i]))) {
                      let t = s[e]
                      s[e] = { ...r, ...t, threadIds: [...new Set([...(t?.threadIds ?? []), ...r.threadIds])] }
                    }
                    Object.keys(s).length > 0 && e.set(i, s)
                  })(e, i))
                let v = (0, u.b9)(i[u.Q2Y.LOCAL_PROJECTS]),
                  S = new Set(Object.keys(v))
                for (let [e, t] of Object.entries(v)) Object.hasOwn(s, e) || (s[e] = t)
                for (let e of P(i[u.Q2Y.REMOTE_PROJECTS])) (S.add(e.id), o.has(e.id) || o.set(e.id, e))
                for (let e of [...(R.safeParse(i[u.Q2Y.PROJECT_ORDER]).data ?? []), ...S]) a.add(e)
                for (let e of R.safeParse(i[u.Q2Y.PINNED_PROJECT_IDS]).data ?? []) l.add(e)
                for (let e of R.safeParse(i[u.Q2Y.PINNED_THREAD_IDS]).data ?? []) c.add(e)
                let T = (0, u.DZs)(i[u.Q2Y.THREAD_PROJECT_ASSIGNMENTS])
                for (let [e, t] of Object.entries(g.record(g.string(), g.string()).safeParse(i[f]).data ?? {})) {
                  let r = d[e],
                    n = T[e]
                  Object.hasOwn(m, e) ||
                    (h.has(e) && null != n) ||
                    ((null == r || (r.projectId === n?.projectId && r.projectKind === n.projectKind)) && (m[e] = t))
                }
                for (let [e, t] of Object.entries(T))
                  !Object.hasOwn(d, e) &&
                    !h.has(e) &&
                    ((d[e] = t), "local" === t.projectKind && Object.hasOwn(s, t.projectId) && b.add(e))
                for (let e of R.safeParse(i[u.Q2Y.PROJECTLESS_THREAD_IDS]).data ?? []) Object.hasOwn(d, e) || h.add(e)
                for (let [e, t] of Object.entries(
                  k.safeParse(i[u.Q2Y.APP_SERVER_PROJECT_ID_BY_LEGACY_PROJECT_ID_BY_HOST]).data ?? {},
                )) {
                  let r = p[e] ?? {}
                  for (let [e, n] of Object.entries(t)) Object.hasOwn(r, e) || (r[e] = n)
                  p[e] = r
                }
              }
              Object.keys(m).length > 0 && e.set(f, m)
              let T = u.Q2Y.APP_SERVER_PROJECTS_MIGRATION_BY_HOST
              for (let [t, r] of e)
                (t === T || t.startsWith((0, E.N0)(T))) &&
                  e.set(
                    t,
                    (function (e, t) {
                      let r = w.safeParse(e).data
                      if (null == r || 0 === t.size) return e
                      for (let [e, n] of Object.entries(r)) {
                        let i = w.safeParse(n).data
                        if (null != i) {
                          let n = v.safeParse(i.pendingThreadAssignmentIds).data ?? []
                          r[e] = {
                            ...i,
                            threadAssignmentsMigrated: !1,
                            pendingThreadAssignmentIds: [...new Set([...n, ...t])],
                          }
                        }
                      }
                      return r
                    })(r, b),
                  )
              return (
                h.size > 0 && e.set(u.Q2Y.PROJECTLESS_THREAD_IDS, [...h]),
                e.set(u.Q2Y.LOCAL_PROJECTS, s),
                o.size > 0 && e.set(u.Q2Y.REMOTE_PROJECTS, [...o.values()]),
                e.set(u.Q2Y.PROJECT_ORDER, [...a]),
                e.set(u.Q2Y.PINNED_PROJECT_IDS, [...l]),
                e.set(u.Q2Y.PINNED_THREAD_IDS, [...c]),
                e.set(u.Q2Y.THREAD_PROJECT_ASSIGNMENTS, d),
                e.set(u.Q2Y.APP_SERVER_PROJECT_ID_BY_LEGACY_PROJECT_ID_BY_HOST, p),
                e.delete(S),
                !0
              )
            })(this.state) && this.queueGlobalStatePersistence(),
            "renderer" === t && this.prepareForRenderer())
        }
        prepareForRenderer() {
          this.awaitingContentOwner =
            this.state.has(E.Ww) ||
            this.state.has(E.Oq) ||
            this.state.has(u.Q2Y.QUEUED_FOLLOW_UPS) ||
            E.O.some((e) => this.state.has(e))
        }
        get needsRendererContentOwner() {
          return this.awaitingContentOwner
        }
        confirmRendererContentOwner(e) {
          let t = (0, E.s6)(e),
            r = this.state.get(E.Ww),
            n = this.awaitingContentOwner
          if (((this.awaitingContentOwner = !1), r !== t || n)) {
            if (
              ((0, E.XS)(this.state, "string" == typeof r ? r : t),
              ("string" == typeof r || null != e) && (0, E.ix)(this.state, "string" == typeof r ? r : t, E.Oq),
              this.state.set(E.Ww, t),
              this.storedOwnerGeneration++,
              (null != r && r !== t) || (null == r && null == e))
            )
              for (let e of (this.state.set(E.Oq, (0, E.yZ)(this.state.get(E.Oq))),
              this.state.delete(u.Q2Y.QUEUED_FOLLOW_UPS),
              [E.Oq, u.Q2Y.QUEUED_FOLLOW_UPS]))
                this.changeListeners.get(e)?.forEach((e) => e())
            for (let e of [E.Ww, ...E.O]) this.changeListeners.get(e)?.forEach((e) => e())
            this.queueGlobalStatePersistence()
          }
        }
        hasSettingsToRestoreAfterSignIn(e) {
          return this.state.get(E.Ww) === (0, E.s6)(null) && (0, E.Hw)(this.state, (0, E.s6)(e))
        }
        getOwnerAtom(e) {
          return this.awaitingContentOwner ? void 0 : (0, E.rD)(this.state, e)
        }
        getSavedPinnedWorktreeRoots(e) {
          return (function (e, t, r) {
            let n = L.safeParse(e.get(u.Q2Y.PINNED_THREAD_IDS)).data ?? []
            if (0 === n.length) return []
            let i = M.safeParse(e.get(u.Q2Y.THREAD_PROJECT_MEMBERSHIP_HOST_IDS)).data ?? {},
              s = (0, u.DZs)(e.get(u.Q2Y.THREAD_PROJECT_ASSIGNMENTS)),
              o = new Set()
            for (let a of (0, E.cK)(e, r)) {
              let e = M.safeParse(a.atoms).data ?? {},
                r = a.paths.map((e) => M.safeParse(e).data ?? {})
              for (let a of n) {
                let n = (0, x.Q)(e[(0, x.u)(a)]),
                  l = n?.projectMembership ?? n?.project ?? s[a],
                  c = i[a] ?? (l?.projectKind === "local" ? D.n : l?.hostId)
                if (null == c || c === t || (c === u.iwv && null != (0, u.SSJ)(t))) {
                  for (let e of [n?.applied, n?.pending])
                    if (null != e) for (let t of [e.cwd, ...e.projectSources, ...e.runtimeWorkspaceRoots]) o.add(t)
                  for (let e of r) {
                    let t = e[a]
                    if ("string" == typeof t) o.add(t)
                    else for (let e of L.safeParse(t).data ?? []) o.add(e)
                  }
                }
              }
            }
            return [...o]
          })(this.state, e, E.Oq)
        }
        storageKey(e) {
          return (0, E.a6)(e, this.state.get(E.Ww), this.awaitingContentOwner)
        }
        captureRendererAccount() {
          let e = this.rendererAccountGeneration
          return () => {
            if (e !== this.rendererAccountGeneration) throw new DOMException("Renderer account changed", "AbortError")
          }
        }
        retireRenderer() {
          this.rendererAccountGeneration++
        }
        confirmRendererAccountChange(e, t) {
          this.state.has(E.Ww) || this.state.set(E.Ww, (0, E.s6)(e))
          let r = em.safeParse(this.get(E.Oq)?.[u.AKB])
          if (
            (this.confirmRendererContentOwner(t),
            (e?.userId === t?.userId && e?.accountId === t?.accountId) || null == e || null == t)
          )
            return
          let n = this.get(E.Oq) ?? {},
            i = em.safeParse(n[u.AKB])
          if (i.success && i.data.userId === t.userId && i.data.accountId === t.accountId) return
          let s = {
            userId: t.userId,
            accountId: t.accountId,
            workspaceOrder: r.success && r.data.userId === t.userId ? r.data.workspaceOrder : [],
          }
          this.set(E.Oq, { ...n, [u.AKB]: s })
        }
        getStateFilePath() {
          return this.filePath
        }
        onDidChange(e, t) {
          let r = this.changeListeners.get(e) ?? new Set()
          return (
            r.add(t),
            this.changeListeners.set(e, r),
            () => {
              ;(r.delete(t), 0 === r.size && this.changeListeners.delete(e))
            }
          )
        }
        get(e) {
          let t = this.getStored(e)
          return void 0 !== t && null != t ? t : ((0, u.yDt)(e) ?? null)
        }
        getStored(e) {
          let t = this.storageKey(e)
          if (null == t) return
          let r = this.state.get(t),
            n = this.state.get(E.Ww)
          if (
            (e !== E.Oq || this.awaitingContentOwner || "string" != typeof n || (r = (0, E.Um)(this.state, n, r)),
            this.awaitingContentOwner)
          ) {
            if (e === u.Q2Y.QUEUED_FOLLOW_UPS) return
            e === E.Oq && (r = (0, E.yZ)(r))
          }
          return r
        }
        set(e, t) {
          let r = this.storageKey(e)
          null == r ||
            (this.awaitingContentOwner && e === u.Q2Y.QUEUED_FOLLOW_UPS) ||
            (this.writeValue(this.state, r, e, t),
            this.persistForKey(e),
            this.changeListeners.get(e)?.forEach((e) => e()))
        }
        writeValue(e, t, r, n) {
          if (r === E.Oq) {
            if (this.awaitingContentOwner) return void e.set(r, (0, E.FS)(e.get(r), n))
            let t = e.get(E.Ww)
            if ("string" == typeof t) return void (0, E.lj)(e, t, r, n)
          }
          void 0 === n ? e.delete(t) : e.set(t, n)
        }
        update(e, t) {
          this.set(e, t(this.getStored(e) ?? null))
        }
        updateAndPersist(e, t) {
          if (this.awaitingContentOwner && (e === u.Q2Y.QUEUED_FOLLOW_UPS || E.O.some((t) => t === e)))
            return Promise.reject(new DOMException("Account is not confirmed", "AbortError"))
          let r =
            e === E.Oq || e === u.Q2Y.QUEUED_FOLLOW_UPS || E.O.some((t) => t === e) || f.Q.some((t) => t === e)
              ? this.storedOwnerGeneration
              : null
          return (
            (this.persistQueued = this.persistQueued
              .catch(() => void 0)
              .then(() =>
                eD(() => {
                  if (null != r && r !== this.storedOwnerGeneration)
                    throw new DOMException("Saved account state changed", "AbortError")
                  let n = this.storageKey(e)
                  if (null == n) throw new DOMException("Account is not confirmed", "AbortError")
                  let i = this.getStored(e),
                    s = t(i ?? null),
                    o = e === I.o
                  if (o && this.archivesPersisted && c()(i, s)) return
                  o && (this.archivesPersisted = !1)
                  let a = new Map(this.state)
                  this.writeValue(a, n, e, s)
                  let l = eT(a)
                  ;(eC(this.filePath, l), (this.state = a))
                  try {
                    ;(eC(`${this.filePath}.bak`, l), o && (this.archivesPersisted = !0))
                  } catch (t) {
                    this.logger().warning("Failed to back up committed global state", {
                      safe: { key: e },
                      sensitive: { error: t },
                    })
                  }
                  this.changeListeners.get(e)?.forEach((t) => {
                    try {
                      t()
                    } catch (t) {
                      this.logger().warning("Failed to notify committed global state", {
                        safe: { key: e },
                        sensitive: { error: t },
                      })
                    }
                  })
                }),
              )),
            this.persistQueued
          )
        }
        delete(e) {
          this.set(e, void 0)
        }
        flush() {
          return this.flushWith(eA)
        }
        flushOrThrow() {
          return this.flushWith(eI)
        }
        flushWith(e) {
          return (
            (this.persistScheduledForCustomRuntime = !1),
            this.persistScheduledForAtoms && (this.persistDebounced.cancel(), (this.persistScheduledForAtoms = !1)),
            (this.persistQueued = this.persistQueued.catch(() => void 0).then(() => e(this.filePath, this.state))),
            this.persistQueued
          )
        }
        persistForKey(e) {
          if ((e === I.o && (this.archivesPersisted = !1), e === E.Oq)) {
            ;((this.persistScheduledForAtoms = !0), this.persistDebounced())
            return
          }
          if (e === B || e === Q) {
            this.persistScheduledForCustomRuntime ||
              ((this.persistScheduledForCustomRuntime = !0),
              queueMicrotask(() => {
                this.persistScheduledForCustomRuntime &&
                  ((this.persistScheduledForCustomRuntime = !1), this.queueGlobalStatePersistence())
              }))
            return
          }
          this.queueGlobalStatePersistence()
        }
        queueGlobalStatePersistence() {
          this.persistScheduled ||
            ((this.persistScheduled = !0),
            (this.persistQueued = this.persistQueued
              .catch(() => void 0)
              .then(() => ((this.persistScheduled = !1), eA(this.filePath, this.state)))))
        }
      }
      let ek = new Set(Object.keys(eO))
      function eP(e) {
        if (!(0, i.existsSync)(e)) return null
        try {
          let t = (0, i.readFileSync)(e, "utf8"),
            r = JSON.parse(t)
          if (!r || "object" != typeof r) throw Error("Expected global state to be a JSON object")
          let n = []
          for (let [e, t] of Object.entries(r)) {
            if (ek.has(e) && eO[e]?.safeParse(t).success === !1) {
              eg().warning("Dropping invalid global state for key", { safe: { key: e }, sensitive: {} })
              continue
            }
            n.push([e, t])
          }
          return new Map(n)
        } catch (e) {
          return (eg().warning("Failed to load global state", { safe: {}, sensitive: { error: e } }), null)
        }
      }
      function eT(e) {
        let t = {}
        for (let [r, n] of e.entries()) void 0 !== n && (t[r] = n)
        return JSON.stringify(t)
      }
      async function eA(e, t) {
        try {
          await eI(e, t)
        } catch (e) {
          eg().warning("Failed to persist global state", { safe: {}, sensitive: { error: e } })
        }
      }
      async function eI(e, t) {
        let r = eT(t)
        ;(await ex(e, r), await ex(`${e}.bak`, r))
      }
      function ej(e) {
        return (0, o.join)((0, o.dirname)(e), `.${(0, o.basename)(e)}.tmp-${Date.now()}-${(0, n.randomUUID)()}`)
      }
      function eC(e, t) {
        let r = ej(e)
        try {
          ;((0, i.writeFileSync)(r, t, "utf8"), (0, i.renameSync)(r, e))
        } catch (e) {
          try {
            ;(0, i.rmSync)(r, { force: !0 })
          } catch {}
          throw e
        }
      }
      async function ex(e, t) {
        let r = ej(e)
        try {
          ;(await (0, s.writeFile)(r, t, "utf8"), await eD(() => (0, s.rename)(r, e)))
        } catch (e) {
          throw (await (0, s.rm)(r, { force: !0 }).catch(() => void 0), e)
        }
      }
      async function eD(e) {
        for (let t = 0; ; t += 1)
          try {
            await e()
            return
          } catch (r) {
            let e = ef[t]
            if (
              "win32" !== process.platform ||
              null == e ||
              !(r instanceof Error) ||
              !("code" in r) ||
              ("EPERM" !== r.code && "EACCES" !== r.code && "EBUSY" !== r.code)
            )
              throw r
            await (0, a.setTimeout)(e)
          }
      }
    },
    75211(e, t, r) {
      "use strict"
      let n = "local"
      r.d(t, {}, { a: { id: n, display_name: "Local", kind: "local" }, n: n })
    },
    73891(e, t, r) {
      "use strict"
      var n = r(74438),
        i = r.n(n),
        s = r(35553)
      let o = [
          "one-third",
          "two-thirds",
          "center",
          "one-third-end",
          "two-thirds-end",
          "first-segment-center",
          "third-segment-center",
          "first-guide-center",
          "second-guide-center",
        ],
        a = [
          "one-third",
          "two-thirds",
          "bottom",
          "one-third-end",
          "two-thirds-end",
          "first-segment-center",
          "center",
          "third-segment-center",
          "first-guide-center",
          "second-guide-center",
        ],
        l = s.number().min(0).max(1),
        c = s.object({ x: s.union([l, s.enum(o)]), y: s.union([l, s.enum(a)]) })
      function u(e, t) {
        return { x: e.x + (e.width - t.width) / 2, y: e.y + e.height / 4, width: t.width, height: e.height / 2 }
      }
      function d(e, t, r, n) {
        let i = -1,
          s = n.captureDistance
        for (let [r, n] of t.entries()) {
          let t = Math.abs(e - n)
          t <= s && ((i = r), (s = t))
        }
        let o = Math.abs(e - t[r]),
          a = i !== r && s <= 4 && o > s + 4
        return r >= 0 && o <= n.releaseDistance && !a ? r : i
      }
      function p(e, t, r) {
        return 0 === r ? 0.5 : Math.max(0, Math.min(1, (e - t) / r))
      }
      r.d(
        t,
        {},
        {
          DR: function (e, t) {
            let r = u(e, t)
            return {
              x: [
                r.x,
                r.x + r.width,
                e.x + e.width / 2 - t.width / 2,
                r.x - t.width,
                r.x + r.width - t.width,
                Math.max(e.x, (e.x + r.x - t.width) / 2),
                Math.min(e.x + e.width - t.width, (r.x + r.width + e.x + e.width - t.width) / 2),
                r.x - t.width / 2,
                r.x + r.width - t.width / 2,
              ],
              y: [
                e.y + e.height / 4,
                e.y + (3 * e.height) / 4,
                e.y + e.height - 16 - t.height,
                e.y + e.height / 4 - t.height,
                e.y + (3 * e.height) / 4 - t.height,
                Math.max(e.y, e.y + e.height / 8 - t.height / 2),
                e.y + e.height / 2 - t.height / 2,
                Math.min(e.y + e.height - t.height, e.y + (7 * e.height) / 8 - t.height / 2),
                r.y - t.height / 2,
                r.y + r.height - t.height / 2,
              ],
              captureDistance: 12,
              releaseDistance: 20,
            }
          },
          EY: function (e, t, r) {
            return {
              x: i()("number" == typeof e.x ? t.x + e.x * t.width : r.x[o.indexOf(e.x)], t.x, t.x + t.width),
              y: i()("number" == typeof e.y ? t.y + e.y * t.height : r.y[a.indexOf(e.y)], t.y, t.y + t.height),
            }
          },
          Hv: c,
          fz: function (e, t, r) {
            let n = d(e.x, t.x, r.x, t)
            return { x: 0 === n || 4 === n ? 2 : n, y: d(e.y, t.y, r.y, t) }
          },
          iX: u,
          nt: function (e, t, r) {
            return { x: o[r.x] ?? p(e.x, t.x, t.width), y: a[r.y] ?? p(e.y, t.y, t.height) }
          },
          tk: function (e, t) {
            return { x: e.x, y: e.y, width: Math.max(0, e.width - t.width), height: Math.max(0, e.height - t.height) }
          },
        },
      )
    },
    81044(e, t, r) {
      "use strict"
      var n = r(78335),
        i = r(86697),
        s = r.n(i),
        o = r(25838),
        a = r(35553)
      let l = a.object({
          id: a.string(),
          name: a.string(),
          rootPaths: a.array(a.string()).optional(),
          createdAt: a.number(),
          updatedAt: a.number(),
        }),
        c = a.array(a.unknown()),
        u = a.record(a.string(), a.unknown()),
        d = a.object({ id: a.string() }),
        p = a.discriminatedUnion("type", [
          a.object({ type: a.literal("local"), projectId: a.string().transform(o.Np8) }),
          a.object({ type: a.literal("remote"), projectId: a.string().transform(o.Np8) }),
        ]),
        h = a.discriminatedUnion("projectKind", [
          a.object({
            projectKind: a.literal("local"),
            projectId: a.string(),
            path: a.string().optional(),
            cwd: a.string().optional(),
            pendingCoreUpdate: a.boolean(),
          }),
          a.object({
            projectKind: a.literal("remote"),
            projectId: a.string(),
            path: a.string(),
            cwd: a.string().optional(),
            hostId: a.string().optional(),
            pendingCoreUpdate: a.boolean(),
          }),
        ]),
        f = a.record(a.string(), h)
      function g(e, t) {
        return Object.hasOwn(t, e) ? (t[e]?.map((e) => e.path) ?? []) : R(e) ? [e] : []
      }
      function m(e, t, r, n) {
        let i = e.getStored(t)
        if (null == i) return
        let s = r(i)
        e.set(t, r(Object.fromEntries(Object.entries(s).map(([e, t]) => [n(e), t]))))
      }
      function y(e, t) {
        return [...new Set(e.map(t))]
      }
      function b(e) {
        return (c.safeParse(e).data ?? []).filter((e) => "string" == typeof e)
      }
      function w(e) {
        if (null == e) return null
        let t = c.safeParse(e).data
        return null == t ? null : t.filter((e) => "string" == typeof e)
      }
      function v(e) {
        return null == e ? null : (u.safeParse(e).data ?? null)
      }
      function _(e) {
        return (c.safeParse(e).data ?? []).flatMap((e) => {
          let t = d.safeParse(e).data
          return null == t ? [] : [t.id]
        })
      }
      function E(e) {
        return (0, o.Np8)("local-" + S(e))
      }
      function S(e) {
        return (0, n.createHash)("sha256").update(e).digest("hex").slice(0, 32)
      }
      function O(e) {
        let t = (0, o.ycq)(e)
        return null == t ? "Project" : s().basename(t) || t
      }
      function R(e) {
        return s().isAbsolute(e) || /^[a-zA-Z]:[\\/]/.test(e) || e.startsWith("\\\\")
      }
      r.d(
        t,
        {},
        {
          W: E,
          v: function (e) {
            var t
            let r = Date.now(),
              n = (0, o.eFT)(e.getStored(o.Q2Y.PROJECT_WRITABLE_ROOTS)),
              i = (function (e, t) {
                let r = v(e)
                if (null == r) return {}
                let n = {}
                for (let [e, i] of Object.entries(r)) {
                  let r = l.safeParse(i).data
                  if (null == r) continue
                  let s = (0, o.Np8)(e)
                  n[e] = {
                    id: s,
                    name: r.name,
                    rootPaths: r.rootPaths ?? g(e, t),
                    createdAt: r.createdAt,
                    updatedAt: r.updatedAt,
                  }
                }
                return n
              })(e.getStored(o.Q2Y.LOCAL_PROJECTS), n),
              a = (function (e) {
                let t = v(e.getStored(o.Q2Y.REMOTE_CWDS_BY_HOST_AND_WORKSPACE)),
                  r = new Set()
                if (null == t) return r
                for (let e of Object.values(t)) {
                  let t = v(e)
                  if (null != t) for (let [e, n] of Object.entries(t)) "string" == typeof n && e === n && r.add(e)
                }
                return r
              })(e),
              c = b(e.getStored(o.Q2Y.WORKSPACE_ROOT_OPTIONS)).filter((e) => !a.has(e)),
              u = (function (e) {
                let t = v(e)
                if (null == t) return {}
                let r = {}
                for (let [e, n] of Object.entries(t)) "string" == typeof n && (r[e] = n)
                return r
              })(e.getStored(o.Q2Y.WORKSPACE_ROOT_LABELS)),
              d = (function (e) {
                let t = new Map()
                for (let [r, n] of Object.entries(e)) {
                  if (!R(r)) continue
                  let i = E(r)
                  ;(t.set(r, i), null == e[i] && (e[i] = { ...n, id: i }), delete e[r])
                }
                return t
              })(i),
              h = (e, t) => {
                let o = E(e)
                d.set(e, o)
                let a = g(e, n),
                  l = u[e]?.trim() || s().basename(e) || e,
                  c = i[o]
                return (
                  null != c
                    ? (i[o] = { ...c, name: l, rootPaths: a })
                    : (i[o] = { id: o, name: l, rootPaths: a, createdAt: r - t, updatedAt: r - t }),
                  o
                )
              }
            c.forEach((e, t) => {
              h(e, t)
            })
            let k = (function ({
                activeLocalProjectIds: e,
                activeRemoteProjectId: t,
                localProjects: r,
                remoteProjectIds: n,
                now: i,
              }) {
                var s, a, l
                if (null != t && n.has(t)) return { type: "remote", projectId: (0, o.Np8)(t) }
                let c = [...new Set(e)]
                if (0 === c.length) return
                if (1 === c.length) return { type: "local", projectId: c[0] }
                let u = [...new Set(c.flatMap((e) => r[e]?.rootPaths ?? []))],
                  d = ((s = c), (0, o.Np8)("local-selection-" + S(JSON.stringify(s)))),
                  p = r[d]
                return (
                  null == p
                    ? (r[d] = { id: d, name: O(u), rootPaths: u, createdAt: i, updatedAt: i })
                    : ((a = p.rootPaths),
                      (l = u),
                      (a.length === l.length && a.every((e, t) => e === l[t])) ||
                        (r[d] = { ...p, name: p.name === O(p.rootPaths) ? O(u) : p.name, rootPaths: u, updatedAt: i })),
                  { type: "local", projectId: d }
                )
              })({
                activeLocalProjectIds: b(e.getStored(o.Q2Y.ACTIVE_WORKSPACE_ROOTS))
                  .filter((e) => !a.has(e))
                  .map((e, t) => h(e, c.length + t)),
                activeRemoteProjectId:
                  "string" == typeof (t = e.getStored(o.Q2Y.ACTIVE_REMOTE_PROJECT_ID)) ? t : void 0,
                localProjects: i,
                remoteProjectIds: new Set(_(e.getStored(o.Q2Y.REMOTE_PROJECTS))),
                now: r,
              }),
              P = (e) => d.get(e) ?? e,
              T = (function (e, t, r) {
                let n = p.safeParse(e.getStored(o.Q2Y.SELECTED_PROJECT)).data
                if (null != n) {
                  if ("local" === n.type) {
                    let e = (0, o.Np8)(r(n.projectId))
                    return null == t[e] ? void 0 : { type: "local", projectId: e }
                  }
                  return _(e.getStored(o.Q2Y.REMOTE_PROJECTS)).includes(n.projectId) ? n : void 0
                }
              })(e, i, P)
            ;(e.set(o.Q2Y.LOCAL_PROJECTS, i),
              e.set(o.Q2Y.SELECTED_PROJECT, T ?? k),
              (function (e, t) {
                let r = w(e.getStored(o.Q2Y.PROJECT_ORDER))
                null != r && e.set(o.Q2Y.PROJECT_ORDER, y(r, t))
                let n = w(e.getStored(o.Q2Y.PINNED_PROJECT_IDS))
                ;(null != n && e.set(o.Q2Y.PINNED_PROJECT_IDS, y(n, t)),
                  m(e, o.Q2Y.PROJECT_APPEARANCES, o.OS5, t),
                  m(e, o.Q2Y.PROJECT_FILES, o.E52, t),
                  m(e, o.Q2Y.SIDEBAR_PROJECT_THREAD_ORDERS, o.Ko0, t))
                let i = e.getStored(o.Q2Y.THREAD_PROJECT_ASSIGNMENTS)
                if (null == i) return
                let s = f.safeParse(i).data
                if (null == s) return
                let a = {}
                for (let [e, r] of Object.entries(s))
                  a[e] = "local" === r.projectKind ? { ...r, projectId: t(r.projectId) } : r
                e.set(o.Q2Y.THREAD_PROJECT_ASSIGNMENTS, a)
              })(e, P))
          },
        },
      )
    },
    31447(e, t, r) {
      "use strict"
      var n = r(25838),
        i = r(35553)
      let s = {
          id: i.string(),
          owner: i.string(),
          hostId: i.string(),
          phase: i.enum(["detaching", "queued", "running", "reattaching", "failed", "completed"]),
        },
        o = i.array(
          i.union([
            i.object({
              ...s,
              kind: i.literal("attached").default("attached"),
              threadId: i.string(),
              root: i.string().transform(n.PUz),
              environmentId: i.string().min(1).optional(),
              attachmentIdentityKey: i.string().optional(),
              cwd: i.string(),
              fromModel: i.literal(!0).optional(),
              archivedWithThread: i.literal(!0).optional(),
              silent: i.boolean().optional(),
              outcome: i.enum(["archived", "retained", "unsupported", "failed"]).optional(),
              notified: i.literal(!0).optional(),
              pullRequestIdentityKeys: i.array(i.string()),
            }),
            i.object({
              ...s,
              kind: i.literal("thread"),
              threadId: i.string(),
              cwd: i.string(),
              notBefore: i.number(),
              silent: i.boolean().optional(),
            }),
            i.object({ ...s, kind: i.literal("automatic"), revision: i.number() }),
          ]),
        )
      r.d(t, {}, { N: o, o: "electron-managed-worktree-archives" })
    },
    37119(e, t, r) {
      "use strict"
      var n = r(42524),
        i = r(86697),
        s = r(4482),
        o = r(25838),
        a = r(35553)
      let l = a.record(a.string(), a.string()),
        c = null,
        u = 0
      class d {
        messages
        constructor(e) {
          this.messages = e
        }
        static async load(e, t = s.app.getLocale()) {
          let r = t.trim().replace(/_/g, "-"),
            [a, c] = r.toLowerCase().split("-"),
            u = null == c ? a : `${a}-${c.toUpperCase()}`,
            p = a ? new Intl.Locale(a).maximize().region : void 0,
            h = s.app.isPackaged
              ? (0, i.join)(s.app.getAppPath(), "native-menu-locales")
              : (0, i.join)(e, "webview", "src", "locales"),
            f = Array.from(new Set([r, u, o.oeH[a], null == p ? void 0 : `${a}-${p}`, a]))
              .filter((e) => null != e)
              .map((e) => (0, i.join)(h, `${e}.json`))
          return new d(
            (
              await Promise.all(
                f.map(async (e) => {
                  try {
                    return l.parse(JSON.parse(await (0, n.readFile)(e, "utf-8")))
                  } catch (e) {
                    if (e instanceof Error && "code" in e && "ENOENT" === e.code) return null
                    throw e
                  }
                }),
              )
            ).find((e) => null != e) ?? null,
          )
        }
        static createDefault() {
          return new d(null)
        }
        replaceMessagesFrom(e) {
          this.messages = e.messages
        }
        formatMessage({ messageId: e, defaultMessage: t, values: r }) {
          return (this.messages?.[e] ?? t).replace(/\{(\w+)\}/g, (e, t) => r?.[t] ?? e)
        }
      }
      r.d(
        t,
        {},
        {
          F$: function () {
            if (null == c) throw Error("NativeIntl has not been configured.")
            return c.nativeIntl
          },
          LJ: d,
          dh: async function (e, t) {
            let r = ++u,
              n = t
            try {
              if (((n = n ?? s.app.getLocale()), c?.repoRoot === e && c.locale === n)) return
              let t = await d.load(e, n)
              if (r !== u) return
              let i = c?.nativeIntl
              ;(i?.replaceMessagesFrom(t), (c = { repoRoot: e, locale: n, nativeIntl: i ?? t }))
            } catch {
              if (r !== u) return
              let e = d.createDefault(),
                t = c?.nativeIntl
              ;(t?.replaceMessagesFrom(e), (c = { repoRoot: null, locale: n ?? "en", nativeIntl: t ?? e }))
            }
          },
        },
      )
    },
    14416(e, t, r) {
      "use strict"
      var n = r(35553)
      let i = "electron-mini-orbit-onboarding-account-ids",
        s = { [i]: n.array(n.string()) }
      r.d(t, {}, { W: s, Y: i })
    },
    50135(e, t, r) {
      "use strict"
      var n = r(89477),
        i = r(25838),
        s = r(37891),
        o = r(27511),
        a = r(35553),
        l = r(60656),
        c = r(56714)
      let u = (0, s.vB)("settings-store"),
        d = "enter-behavior",
        p = i.aiU.PROJECTLESS_ONBOARDING_COMPLETED,
        h = a.lazy(() => a.union([a.string(), a.number(), a.boolean(), a.null(), a.array(h), a.record(a.string(), h)])),
        f = a.object({ desktop: a.record(a.string(), a.unknown()).optional() }).loose(),
        g = a.object({
          requirements: a
            .object({
              application: a
                .object({
                  storage: a
                    .object({
                      defaultProjectParent: i.Szl.defaultProjectParent.schema.optional(),
                      projectlessWorkspaceRoot: i.Szl.projectlessWorkspaceRoot.schema.optional(),
                    })
                    .nullish(),
                })
                .nullish(),
            })
            .nullable(),
        })
      function m(e, t) {
        let r
        if (null == t.getStored(l.Ww)) return
        let { key: n } = e.hostStorage
        if (n === i.Q2Y.OPEN_IN_TARGET_PREFERENCES || n === i.Q2Y.WORKTREE_REPOSITORY_PREFERENCES) {
          let e = t.getStored(n)
          return { storage: "global", key: n, value: e }
        }
        if (
          ("persisted-atom" === e.hostStorage.kind ? (r = n) : e.key === i.Szl.composerEnterBehavior.key && (r = d),
          null == r)
        )
          return
        let s = t.getOwnerAtom(r)
        if (void 0 !== s)
          return { storage: "atom", key: r, value: e.key === i.kWF.defaultServiceTier.key ? (0, i.E$9)({ [r]: s }) : s }
      }
      function y(e, t, r, n) {
        let s = n ? e.updateAndPersist.bind(e) : e.update.bind(e)
        return "atom" === t.storage
          ? s(c.Oq, (e) => ({ ...e, [t.key]: r }))
          : t.key === i.Q2Y.OPEN_IN_TARGET_PREFERENCES
            ? s(t.key, () => i.U6S.openInTargetPreferences.schema.parse(r))
            : s(t.key, () => i.PHv.repositoryPreferences.schema.parse(r))
      }
      function b(e) {
        let t = new Map()
        for (let [r, n] of Object.entries(e)) {
          let e = (0, i.crQ)(r)
          if (null == e) continue
          let s = (0, i.Q6s)(e.key).safeParse((0, i.Q4s)((0, i.Q6s)(e.key), n))
          if (!s.success) {
            u().warning("Dropping invalid desktop setting", { safe: { key: r }, sensitive: {} })
            continue
          }
          t.set(e.key, s.data)
        }
        return t
      }
      function w(e, t) {
        if (0 === e.size) return
        let r = t.getStored(c.Oq),
          n = r ? { ...r } : null,
          s = !1
        for (let r of e) {
          let e = (0, i.crQ)(r)
          switch (
            (r === i.Szl.composerEnterBehavior.key &&
              null != n &&
              Object.prototype.hasOwnProperty.call(n, d) &&
              (delete n[d], (s = !0)),
            e.hostStorage.kind)
          ) {
            case "configuration":
            case "global-state":
              t.delete(e.hostStorage.key)
              break
            case "persisted-atom":
              null != n &&
                Object.prototype.hasOwnProperty.call(n, e.hostStorage.key) &&
                (delete n[e.hostStorage.key], (s = !0))
          }
        }
        s && t.set(c.Oq, 0 === Object.keys(n ?? {}).length ? void 0 : (n ?? void 0))
      }
      r.d(
        t,
        {},
        {
          m: g,
          r: class {
            filePath
            globalState
            state
            changeListeners = new Map()
            pendingLegacyMigrations = new Map()
            pendingFollowUpMigration
            pendingWrites = new Map()
            desktopConfig
            managedStorage = new Map()
            configClient = null
            persistQueued = Promise.resolve()
            constructor(e, t) {
              ;((this.filePath = e),
                (this.globalState = t),
                (this.desktopConfig = (function (e) {
                  if (!(0, n.existsSync)(e)) return {}
                  try {
                    var t = f.parse((0, o.qg)((0, n.readFileSync)(e, "utf8"))).desktop ?? {}
                    let r = {}
                    for (let [e, n] of Object.entries(t)) {
                      let t = h.safeParse(n)
                      if (!t.success) {
                        u().warning("Dropping unsupported desktop config value", { safe: { key: e }, sensitive: {} })
                        continue
                      }
                      r[e] = t.data
                    }
                    return r
                  } catch (e) {
                    return (
                      u().warning("Failed to load desktop settings from config.toml", {
                        safe: {},
                        sensitive: { error: e },
                      }),
                      {}
                    )
                  }
                })(this.filePath)),
                (this.state = b(this.desktopConfig)),
                (function (e, t, r) {
                  let n = r.getStored(c.Oq)
                  for (let s of i.fsg) {
                    if (s.key === i.U6S.appBetaPreferencesByAccountId.key) {
                      let n = i.U6S.appBetaPreferencesByAccountId.schema.safeParse(r.getStored(s.key)).data
                      if (null != n) {
                        let r = i.U6S.appBetaPreferencesByAccountId.schema.safeParse(e.get(s.key)).data,
                          o = { ...n, ...r }
                        ;(e.set(s.key, o), t.set(s.key, o))
                        continue
                      }
                    }
                    if (e.has(s.key) || null != m(s, r)) continue
                    let o = (function (e, t, r) {
                      let { hostStorage: n } = e
                      switch (n.kind) {
                        case "configuration": {
                          let s = t.getStored(n.key)
                          if (void 0 !== s) return s
                          if (
                            e.key === i.Szl.composerEnterBehavior.key &&
                            null != r &&
                            Object.prototype.hasOwnProperty.call(r, d)
                          )
                            return r[d]
                          if (e.key === i.Szl.keepRemoteControlAwakeWhilePluggedIn.key)
                            return t.getStored(i.Szl.preventSleepWhileRunning.key)
                          return
                        }
                        case "global-state":
                          return t.getStored(n.key)
                        case "persisted-atom":
                          if (null == r || !Object.prototype.hasOwnProperty.call(r, n.key)) return
                          if (e.key === i.kWF.defaultServiceTier.key) return (0, i.E$9)(r)
                          return r[n.key]
                      }
                    })(s, r, n)
                    if (void 0 === o) continue
                    let a = (0, i.Q6s)(s.key).safeParse(o)
                    if (!a.success) {
                      u().warning("Dropping invalid migrated setting", { safe: { key: s.key }, sensitive: {} })
                      continue
                    }
                    ;(e.set(s.key, a.data), t.set(s.key, a.data))
                  }
                })(this.state, this.pendingLegacyMigrations, this.globalState))
            }
            getStateFilePath() {
              return this.filePath
            }
            getDesktopConfig() {
              return this.desktopConfig
            }
            async captureInitialFollowUpQueueMode() {
              let e = this.globalState.getStored(c.$6)
              if (null != e) return e
              let t = this.globalState.getStored(c.Oq),
                r = t?.[p] === !0,
                n = Object.keys(this.globalState.getStored(i.Q2Y.LOCAL_PROJECTS) ?? {}).length > 0,
                s = r || n ? "queue" : "steer"
              return (this.globalState.set(c.$6, s), await this.globalState.flush(), s)
            }
            async initialize(e) {
              let t = await this.captureInitialFollowUpQueueMode(),
                r = new Map([...this.changeListeners.keys()].map((e) => [e, this.get(e)]))
              if (void 0 !== e.storageRequirements) {
                this.managedStorage.clear()
                let t = e.storageRequirements?.application?.storage
                for (let e of [i.Szl.defaultProjectParent.key, i.Szl.projectlessWorkspaceRoot.key]) {
                  let r = t?.[e]
                  null != r &&
                    (this.managedStorage.set(e, r),
                    this.pendingWrites.delete(e),
                    this.pendingLegacyMigrations.delete(e))
                }
              }
              ;((this.configClient = e), (this.desktopConfig = e.config.desktop ?? {}))
              let n = b(this.desktopConfig),
                s = new Set()
              for (let e of i.fsg)
                if (!this.pendingWrites.has(e.key)) {
                  if (e.key === i.U6S.appBetaPreferencesByAccountId.key && this.pendingLegacyMigrations.has(e.key)) {
                    let t = i.U6S.appBetaPreferencesByAccountId.schema,
                      r = t.parse(this.pendingLegacyMigrations.get(e.key)),
                      s = t.safeParse(n.get(e.key)).data,
                      o = { ...r, ...s }
                    ;(this.state.set(e.key, o), this.pendingLegacyMigrations.set(e.key, o))
                    continue
                  }
                  if (n.has(e.key)) {
                    ;(this.state.set(e.key, n.get(e.key)), this.pendingLegacyMigrations.delete(e.key) && s.add(e.key))
                    continue
                  }
                  this.pendingLegacyMigrations.has(e.key) || this.state.delete(e.key)
                }
              for (let [e, t] of this.managedStorage) (this.state.set(e, t), (this.desktopConfig[e] = t))
              for (let [e, n] of (this.migrateFollowUpQueueMode(t), r))
                Object.is(n, this.get(e)) || this.notifyChangeListeners(e)
              ;(w(s, this.globalState), await this.persistPendingSettings())
            }
            onDidChange(e, t) {
              let r = this.changeListeners.get(e) ?? new Set()
              ;(r.add(t), this.changeListeners.set(e, r))
              let n = this.globalState.onDidChange(l.Ww, t)
              return () => {
                ;(n(), r.delete(t), 0 === r.size && this.changeListeners.delete(e))
              }
            }
            get(e) {
              let t = this.state.get(e)
              if (!this.managedStorage.has(e)) {
                let r = m((0, i.crQ)(e), this.globalState)
                if (r?.value !== void 0) {
                  let n = (0, i.Q6s)(e).safeParse(r.value)
                  n.success && (t = n.data)
                }
              }
              return t
            }
            getEffective(e) {
              return this.get(e) ?? (0, i.crQ)(e).default
            }
            set(e, t) {
              if (this.managedStorage.has(e)) return
              let r = m((0, i.crQ)(e), this.globalState)
              if (null != r) {
                ;(y(this.globalState, r, t, !1), this.notifyChangeListeners(e))
                return
              }
              ;(this.setValue(e, t), this.persistPendingSettings())
            }
            setAndPersist(e, t) {
              if (null == this.configClient) throw Error("Settings persistence is not initialized")
              if (this.managedStorage.has(e)) throw Error("This setting is managed by your organization")
              let r = m((0, i.crQ)(e), this.globalState)
              if (null != r)
                return Promise.resolve(y(this.globalState, r, t, !0)).then(() => this.notifyChangeListeners(e))
              let n = this.setValue(e, t, { rollbackOnFailure: !0 })
              return this.persistPendingSettings({ reportError: !0 }).then(
                () => {
                  ;((n.status = "saved"), (n.previous = void 0))
                },
                (t) => {
                  if ("saved" !== n.status) {
                    if (((n.status = "failed"), this.pendingWrites.get(e) === n)) {
                      let t = n.previous
                      for (; t?.write?.status === "failed";) t = t.write.previous
                      if (null != t) {
                        let r = this.get(e)
                        ;(t.hadValue ? this.state.set(e, t.value) : this.state.delete(e),
                          t.hadConfiguredValue
                            ? (this.desktopConfig[e] = t.configuredValue)
                            : delete this.desktopConfig[e],
                          t.write?.status === "pending"
                            ? this.pendingWrites.set(e, t.write)
                            : this.pendingWrites.delete(e),
                          Object.is(r, t.value) || this.notifyChangeListeners(e))
                      }
                    }
                    throw t
                  }
                },
              )
            }
            setValue(e, t, { rollbackOnFailure: r = !1 } = {}) {
              let n = this.get(e),
                s = (0, i.Q6s)(e).parse(t),
                o = {
                  value: s,
                  status: "pending",
                  previous: r
                    ? {
                        value: n,
                        hadValue: this.state.has(e),
                        configuredValue: this.desktopConfig[e],
                        hadConfiguredValue: Object.hasOwn(this.desktopConfig, e),
                        write: this.pendingWrites.get(e),
                      }
                    : void 0,
                }
              return (
                this.state.set(e, s),
                (this.desktopConfig[e] = (0, i.uvL)((0, i.Q6s)(e), s)),
                this.pendingWrites.set(e, o),
                Object.is(n, s) || this.notifyChangeListeners(e),
                o
              )
            }
            flush() {
              return this.persistQueued.then(() => this.persistPendingSettings())
            }
            notifyChangeListeners(e) {
              for (let t of this.changeListeners.get(e) ?? []) t()
            }
            migrateFollowUpQueueMode(e) {
              if ("queue" !== e || "boolean" == typeof this.desktopConfig.migratedFollowUpQueueToSteer) return
              let t = i.Szl.followUpQueueMode.key,
                r = this.get(t),
                n = this.pendingWrites.has(t) || "queue" === this.globalState.getStored(t),
                s = null == r || ("queue" === r && !n)
              ;((this.desktopConfig.migratedFollowUpQueueToSteer = s),
                (this.pendingFollowUpMigration = s),
                s &&
                  "queue" === r &&
                  (this.state.delete(t), delete this.desktopConfig[t], this.pendingLegacyMigrations.set(t, null)))
            }
            persistPendingSettings({ reportError: e = !1 } = {}) {
              let t = this.configClient
              if (null == t) return this.persistQueued
              let r = this.persistQueued.then(async () => {
                let e = new Map(this.pendingLegacyMigrations),
                  r = this.pendingFollowUpMigration,
                  n = new Map(this.pendingWrites),
                  s = new Map(e)
                for (let [e, t] of n) s.set(e, t.value)
                if (0 !== s.size || void 0 !== r)
                  try {
                    let o = []
                    for (let [e, t] of (void 0 !== r &&
                      o.push({ keyPath: "desktop.migratedFollowUpQueueToSteer", mergeStrategy: "replace", value: r }),
                    s))
                      o.push({ keyPath: `desktop.${e}`, mergeStrategy: "replace", value: (0, i.uvL)((0, i.Q6s)(e), t) })
                    for (let [n, i] of (await t.batchWriteConfigValues({ edits: o }),
                    this.pendingFollowUpMigration === r && (this.pendingFollowUpMigration = void 0),
                    e))
                      this.pendingLegacyMigrations.get(n) === i && this.pendingLegacyMigrations.delete(n)
                    for (let [e, t] of n)
                      ((t.status = "saved"),
                        (t.previous = void 0),
                        this.pendingWrites.get(e) === t && this.pendingWrites.delete(e))
                    ;(w(new Set(e.keys()), this.globalState), !0 === r && t.onFollowUpDefaultMigrated?.())
                  } catch (e) {
                    throw (u().warning("Failed to persist desktop settings", { safe: {}, sensitive: { error: e } }), e)
                  }
              })
              return ((this.persistQueued = r.catch(() => void 0)), e ? r : this.persistQueued)
            }
          },
        },
      )
    },
    15248(e, t, r) {
      "use strict"
      var n = r(25838),
        i = r(37891),
        s = r(35553)
      let o = new Set(
          [
            "Your access token could not be refreshed because your refresh token has expired. Please log out and sign in again.",
            "Your access token could not be refreshed because your refresh token was already used. Please log out and sign in again.",
            "Your access token could not be refreshed because your refresh token was revoked. Please log out and sign in again.",
            "Your access token could not be refreshed. Please log out and sign in again.",
          ].map((e) => `failed to read configuration layers: ${e}`),
        ),
        a = s.object({ message: s.string() })
      r.d(
        t,
        {},
        {
          R: function e(t) {
            let r = a.safeParse(t)
            return (
              (0, n.sQ3)(t) ||
              (t instanceof i.kK && "auth" === t.reason) ||
              (r.success && o.has(r.data.message)) ||
              (t instanceof Error && null != t.cause && e(t.cause))
            )
          },
        },
      )
    },
    66439(e, t, r) {
      "use strict"
      r.d(t, { z1: () => g, Yq: () => m, hq: () => f })
      var n = r(86697),
        i = r(4482),
        s = r(37891)
      let o = new Set([
          "INIT_CWD",
          "npm_command",
          "npm_execpath",
          "npm_node_execpath",
          "PNPM_PACKAGE_NAME",
          "PNPM_SCRIPT_SRC_DIR",
        ]),
        a = ["npm_config_", "npm_lifecycle_", "npm_package_"]
      function l(e) {
        for (let t of Object.keys(e)) {
          let r = t.toLowerCase()
          ;(o.has(t) || a.some((e) => r.startsWith(e))) && delete e[t]
        }
      }
      let c = process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ? process.env.CODEX_HOME : void 0,
        u = null,
        d = null,
        p = null,
        h = new Set()
      function f(e) {
        let t = { ...process.env },
          r = () => {
            let r = { ...process.env },
              n = {}
            for (let e of new Set([...Object.keys(t), ...Object.keys(r)])) t[e] !== r[e] && (n[e] = r[e] ?? null)
            ;((t = r), Object.keys(n).length > 0 && e(n))
          }
        return (
          h.add(r),
          () => {
            h.delete(r)
          }
        )
      }
      async function g() {
        return m({ caller: "startup", retryFailed: !1 })
      }
      async function m({ caller: e = "startup", retryFailed: t = !0, timeoutMs: r = 5e3 } = {}) {
        if (p?.status === "loaded" || (null != p && !t))
          return (function (e, t) {
            return { ...e, caller: t, resultSource: "cache" }
          })(p, e)
        if (null != u && null != d && d >= r) return u.then((t) => ({ ...t, caller: e }))
        let n = (async function (e, t) {
          let r = Date.now()
          i.app.isPackaged || (l(process.env), h.forEach((e) => e()))
          let n = new AbortController(),
            o = null,
            a = await Promise.race([
              (0, s.MN)({ interactive: !0, extraEnv: { [s.$z]: "1" }, signal: n.signal })
                .then((e) => ({ status: "loaded", userEnv: e }))
                .catch((e) => ({ status: "failed", error: e })),
              new Promise((e) => {
                ;(o = setTimeout(() => {
                  ;(n.abort(), e({ status: "timed_out" }))
                }, t)).unref()
              }),
            ]).finally(() => {
              null != o && clearTimeout(o)
            })
          if ("loaded" === a.status)
            return (
              Object.assign(process.env, a.userEnv),
              null != c && (process.env.CODEX_HOME = c),
              i.app.isPackaged || l(process.env),
              h.forEach((e) => e()),
              { status: "loaded", path: process.env.PATH ?? null, ...y(r, e, t) }
            )
          let u =
            "timed_out" === a.status
              ? `Timed out after ${t}ms.`
              : a.error instanceof Error
                ? a.error.message
                : String(a.error)
          return (
            (0, s.getLogger)().warning("Failed to load shell env", {
              safe: {
                caller: e,
                durationMs: Date.now() - r,
                pathEntryCount: b(process.env.PATH ?? null),
                resultSource: "load",
                status: a.status,
                timeoutMs: t,
              },
              sensitive: { detail: u, path: process.env.PATH ?? null },
            }),
            { status: a.status, detail: u, path: process.env.PATH ?? null, ...y(r, e, t) }
          )
        })(e, r)
        ;((u = n), (d = r))
        try {
          var o
          let e = await n
          return ((o = e), (p?.status !== "loaded" || "loaded" === o.status) && (p = o), e)
        } finally {
          u === n && ((u = null), (d = null))
        }
      }
      function y(e, t, r) {
        let n = process.env.PATH ?? null
        return { caller: t, durationMs: Date.now() - e, pathEntryCount: b(n), resultSource: "load", timeoutMs: r }
      }
      function b(e) {
        return null == e || "" === e ? 0 : e.split(n.delimiter).length
      }
    },
    70909(e, t, r) {
      "use strict"
      var n = r(35553)
      let i = n.record(n.string(), n.array(n.string().min(1))),
        s = n.object({
          version: n.literal(1),
          unreadByIdentity: n.record(n.string(), i),
          legacyMigration: n
            .object({
              identityKey: n.string(),
              unreadThreadIdsByHostId: i,
              adoptedHostIds: n.record(n.string(), n.string()),
              cleared: n.boolean().optional(),
            })
            .optional(),
        })
      r.d(t, {}, { K4: "electron-thread-read-state-v1", mA: s, v7: i, yz: "unread-thread-ids-by-host-v1" })
    },
    67221(e, t, r) {
      "use strict"
      let n,
        i = Symbol("workers-module")
      ;(Symbol.dispose || (Symbol.dispose = Symbol.for("dispose")),
        Symbol.asyncDispose || (Symbol.asyncDispose = Symbol.for("asyncDispose")),
        Promise.withResolvers ||
          (Promise.withResolvers = function () {
            let e, t
            return {
              promise: new Promise((r, n) => {
                ;((e = r), (t = n))
              }),
              resolve: e,
              reject: t,
            }
          }))
      let s = globalThis[i],
        o = s ? s.RpcTarget : class {},
        a = async function () {}.constructor,
        l = "u" > typeof Buffer ? Buffer.prototype : void 0
      function c(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
            return "primitive"
          case "undefined":
            return "undefined"
          case "object":
          case "function":
            break
          case "bigint":
            return "bigint"
          default:
            return "unsupported"
        }
        if (null === e) return "primitive"
        let t = Object.getPrototypeOf(e)
        switch (t) {
          case Object.prototype:
            return "object"
          case Function.prototype:
          case a.prototype:
            return "function"
          case Array.prototype:
            return "array"
          case Date.prototype:
            return "date"
          case Uint8Array.prototype:
          case l:
          case ArrayBuffer.prototype:
          case DataView.prototype:
          case Int8Array.prototype:
          case Uint8ClampedArray.prototype:
          case Int16Array.prototype:
          case Uint16Array.prototype:
          case Int32Array.prototype:
          case Uint32Array.prototype:
          case BigInt64Array.prototype:
          case BigUint64Array.prototype:
          case Float32Array.prototype:
          case Float64Array.prototype:
            return "bytes"
          case WritableStream.prototype:
            return "writable"
          case ReadableStream.prototype:
            return "readable"
          case URL.prototype:
            return "url"
          case Headers.prototype:
            return "headers"
          case Request.prototype:
            return "request"
          case Response.prototype:
            return "response"
          case Blob.prototype:
            return "blob"
          case v.prototype:
            return "stub"
          case _.prototype:
            return "rpc-promise"
          default:
            if (s) {
              if (t == s.RpcStub.prototype || e instanceof s.ServiceStub) return "rpc-target"
              else if (t == s.RpcPromise.prototype || t == s.RpcProperty.prototype) return "rpc-thenable"
            }
            if (e instanceof o) return "rpc-target"
            if (e instanceof Error) return "error"
            return "unsupported"
        }
      }
      function u() {
        throw Error("RPC map() implementation was not loaded.")
      }
      let d = { applyMap: u, sendMap: u }
      function p() {
        throw Error("Stream implementation was not loaded.")
      }
      let h = { createWritableStreamHook: p, createWritableStreamFromHook: p, createReadableStreamHook: p }
      var f = class {
          stream(e, t) {
            let r,
              n = this.call(e, t).pull()
            return (
              n instanceof Promise
                ? (r = n.then((e) => {
                    e.dispose()
                  }))
                : (n.dispose(), (r = Promise.resolve())),
              { promise: r }
            )
          }
        },
        g = class extends f {
          error
          constructor(e) {
            ;(super(), (this.error = e))
          }
          call(e, t) {
            return this
          }
          map(e, t, r) {
            return this
          }
          get(e) {
            return this
          }
          dup() {
            return this
          }
          pull() {
            return Promise.reject(this.error)
          }
          ignoreUnhandledRejections() {}
          dispose() {}
          onBroken(e) {
            try {
              e(this.error)
            } catch (e) {
              Promise.resolve(e)
            }
          }
        }
      let m = new g(Error("Attempted to use RPC stub after it has been disposed.")),
        y = (e, t, r) => e.call(t, r),
        b = Symbol("realStub"),
        w = {
          apply(e, t, r) {
            let n = e.raw
            return new _(y(n.hook, n.pathIfPromise || [], O.fromAppParams(r)), [])
          },
          get(e, t, r) {
            let n = e.raw
            return t === b
              ? n
              : t in _.prototype
                ? n[t]
                : "string" == typeof t
                  ? new _(n.hook, n.pathIfPromise ? [...n.pathIfPromise, t] : [t])
                  : t !== Symbol.dispose || (n.pathIfPromise && 0 != n.pathIfPromise.length)
                    ? void 0
                    : () => {
                        ;(n.hook.dispose(), (n.hook = m))
                      }
          },
          has(e, t) {
            let r = e.raw
            return (
              t === b ||
              (t in _.prototype
                ? t in r
                : "string" == typeof t ||
                  (t === Symbol.dispose && (!r.pathIfPromise || 0 == r.pathIfPromise.length)) ||
                  !1)
            )
          },
          construct(e, t) {
            throw Error("An RPC stub cannot be used as a constructor.")
          },
          defineProperty(e, t, r) {
            throw Error("Can't define properties on RPC stubs.")
          },
          deleteProperty(e, t) {
            throw Error("Can't delete properties on RPC stubs.")
          },
          getOwnPropertyDescriptor(e, t) {},
          getPrototypeOf: (e) => Object.getPrototypeOf(e.raw),
          isExtensible: (e) => !1,
          ownKeys: (e) => [],
          preventExtensions: (e) => !0,
          set(e, t, r, n) {
            throw Error("Can't assign properties on RPC stubs.")
          },
          setPrototypeOf(e, t) {
            throw Error("Can't override prototype of RPC stubs.")
          },
        }
      var v = class e extends o {
          static setMessagePortServiceName(t, r) {
            if (!(t instanceof e)) return
            let n = E(t)
            if (!(n instanceof H) || !n.entry) return
            let i = n.entry
            ;(null != r && (i.session.hasMessagePortServices = !0),
              void 0 === i.messagePortService
                ? (i.messagePortService = null != r ? { service: r } : null)
                : i.messagePortService?.service !== r && (i.messagePortService = null))
          }
          constructor(e, t) {
            if ((super(), !(e instanceof f))) {
              let r = e
              if (((e = r instanceof o || r instanceof Function ? A.create(r, void 0) : new P(O.fromAppReturn(r))), t))
                throw TypeError("RpcStub constructor expected one argument, received two.")
            }
            ;((this.hook = e), (this.pathIfPromise = t))
            let r = () => {}
            return ((r.raw = this), new Proxy(r, w))
          }
          hook
          pathIfPromise
          dup() {
            let t = this[b]
            return new e(t.pathIfPromise ? t.hook.get(t.pathIfPromise) : t.hook.dup())
          }
          onRpcBroken(e) {
            this[b].hook.onBroken(e)
          }
          map(e) {
            let { hook: t, pathIfPromise: r } = this[b]
            return d.sendMap(t, r || [], e)
          }
          toString() {
            return "[object RpcStub]"
          }
        },
        _ = class extends v {
          constructor(e, t) {
            super(e, t)
          }
          then(e, t) {
            return S(this).then(...arguments)
          }
          catch(e) {
            return S(this).catch(...arguments)
          }
          finally(e) {
            return S(this).finally(...arguments)
          }
          toString() {
            return "[object RpcPromise]"
          }
        }
      function E(e) {
        let { hook: t, pathIfPromise: r } = e[b]
        if (!r || !(r.length > 0)) return t
      }
      async function S(e) {
        let { hook: t, pathIfPromise: r } = e[b]
        return (r.length > 0 && (t = t.get(r)), (await t.pull()).deliverResolve())
      }
      var O = class e {
        value
        source
        hooks
        promises
        static fromAppParams(t) {
          return new e(t, "params")
        }
        static fromAppReturn(t) {
          return new e(t, "return")
        }
        static fromArray(t) {
          let r = [],
            n = [],
            i = []
          for (let e of t) {
            for (let t of (e.ensureDeepCopied(), e.hooks)) r.push(t)
            for (let t of e.promises)
              (t.parent === e && (t = { parent: i, property: i.length, promise: t.promise }), n.push(t))
            i.push(e.value)
          }
          return new e(i, "owned", r, n)
        }
        static forEvaluate(t, r) {
          return new e(null, "owned", t, r)
        }
        static deepCopyFrom(t, r, n) {
          let i = new e(null, "owned", [], [])
          return ((i.value = i.deepCopy(t, r, "value", i, !0, n)), i)
        }
        constructor(e, t, r, n) {
          ;((this.value = e), (this.source = t), (this.hooks = r), (this.promises = n))
        }
        rpcTargets
        getHookForRpcTarget(e, t, r = !0) {
          if ("params" === this.source) {
            if (r) {
              let t = e
              "function" == typeof t.dup && (e = t.dup())
            }
            return A.create(e, t)
          }
          if ("return" === this.source) {
            let n = this.rpcTargets?.get(e)
            if (n)
              if (r) return n.dup()
              else return (this.rpcTargets?.delete(e), n)
            return ((n = A.create(e, t)), r)
              ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, n), n.dup())
              : n
          }
          throw Error("owned payload shouldn't contain raw RpcTargets")
        }
        getHookForWritableStream(e, t, r = !0) {
          if ("params" === this.source) return h.createWritableStreamHook(e)
          if ("return" === this.source) {
            let t = this.rpcTargets?.get(e)
            if (t)
              if (r) return t.dup()
              else return (this.rpcTargets?.delete(e), t)
            return ((t = h.createWritableStreamHook(e)), r)
              ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, t), t.dup())
              : t
          }
          throw Error("owned payload shouldn't contain raw WritableStreams")
        }
        getHookForReadableStream(e, t, r = !0) {
          if ("params" === this.source) return h.createReadableStreamHook(e)
          if ("return" === this.source) {
            let t = this.rpcTargets?.get(e)
            if (t)
              if (r) return t.dup()
              else return (this.rpcTargets?.delete(e), t)
            return ((t = h.createReadableStreamHook(e)), r)
              ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, t), t.dup())
              : t
          }
          throw Error("owned payload shouldn't contain raw ReadableStreams")
        }
        deepCopy(e, t, r, n, i, s) {
          switch (c(e)) {
            case "unsupported":
            case "primitive":
            case "bigint":
            case "date":
            case "bytes":
            case "blob":
            case "url":
            case "error":
            case "undefined":
              return e
            case "array": {
              let t = e.length,
                r = Array(t)
              for (let n = 0; n < t; n++) r[n] = this.deepCopy(e[n], e, n, r, i, s)
              return r
            }
            case "object": {
              let t = {}
              for (let r in e) t[r] = this.deepCopy(e[r], e, r, t, i, s)
              return t
            }
            case "stub":
            case "rpc-promise": {
              let t
              if (
                ((t = i
                  ? (function (e) {
                      let { hook: t, pathIfPromise: r } = e[b]
                      return r ? t.get(r) : t.dup()
                    })(e)
                  : (function (e) {
                      let { hook: t, pathIfPromise: r } = e[b]
                      return r && r.length > 0 ? t.get(r) : t
                    })(e)),
                !(e instanceof _))
              )
                return (this.hooks.push(t), new v(t))
              {
                let e = new _(t, [])
                return (this.promises.push({ parent: n, property: r, promise: e }), e)
              }
            }
            case "function":
            case "rpc-target": {
              let r
              return ((r = s ? s.getHookForRpcTarget(e, t, i) : A.create(e, t)), this.hooks.push(r), new v(r))
            }
            case "rpc-thenable": {
              let o
              return (
                (o = s ? new _(s.getHookForRpcTarget(e, t, i), []) : new _(A.create(e, t), [])),
                this.promises.push({ parent: n, property: r, promise: o }),
                o
              )
            }
            case "writable": {
              let r
              return (
                (r = s ? s.getHookForWritableStream(e, t, i) : h.createWritableStreamHook(e)),
                this.hooks.push(r),
                e
              )
            }
            case "readable": {
              let r
              return (
                (r = s ? s.getHookForReadableStream(e, t, i) : h.createReadableStreamHook(e)),
                this.hooks.push(r),
                e
              )
            }
            case "headers":
              return new Headers(e)
            case "request":
              return (e.body && this.deepCopy(e.body, e, "body", e, i, s), new Request(e))
            case "response":
              return (e.body && this.deepCopy(e.body, e, "body", e, i, s), new Response(e.body, e))
            default:
              throw Error("unreachable")
          }
        }
        ensureDeepCopied() {
          if ("owned" !== this.source) {
            let e = "params" === this.source
            ;((this.hooks = []), (this.promises = []))
            try {
              this.value = this.deepCopy(this.value, void 0, "value", this, e, this)
            } catch (e) {
              throw ((this.hooks = void 0), (this.promises = void 0), e)
            }
            if (((this.source = "owned"), this.rpcTargets && this.rpcTargets.size > 0))
              throw Error("Not all rpcTargets were accounted for in deep-copy?")
            this.rpcTargets = void 0
          }
        }
        deliverTo(t, r, n) {
          if ((this.ensureDeepCopied(), this.value instanceof _)) e.deliverRpcPromiseTo(this.value, t, r, n)
          else
            for (let i of ((t[r] = this.value), this.promises))
              e.deliverRpcPromiseTo(i.promise, i.parent, i.property, n)
        }
        static deliverRpcPromiseTo(t, r, n, i) {
          let s = E(t)
          if (!s) throw Error("property promises should have been resolved earlier")
          let o = s.pull()
          o instanceof e
            ? o.deliverTo(r, n, i)
            : i.push(
                o.then((e) => {
                  let t = []
                  if ((e.deliverTo(r, n, t), t.length > 0)) return Promise.all(t)
                }),
              )
        }
        async deliverCall(t, r) {
          try {
            let n = []
            ;(this.deliverTo(this, "value", n), n.length > 0 && (await Promise.all(n)))
            let i = Function.prototype.apply.call(t, r, this.value)
            if (i instanceof _) return e.fromAppReturn(i)
            return e.fromAppReturn(await i)
          } finally {
            this.dispose()
          }
        }
        async deliverStreamWrite(t) {
          try {
            let r = []
            ;(this.deliverTo(this, "value", r), r.length > 0 && (await Promise.all(r)))
            let n = this.value[0]
            if ((this.hooks.length > 0 || this.promises.length > 0) && n instanceof Object)
              return (
                Symbol.dispose in n ||
                  Object.defineProperty(n, Symbol.dispose, {
                    value: () => this.dispose(),
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                  }),
                await t.write(n),
                e.fromAppReturn(void 0)
              )
            return (await t.write(n), this.dispose(), e.fromAppReturn(void 0))
          } catch (e) {
            throw (this.dispose(), e)
          }
        }
        async deliverResolve() {
          try {
            let e = []
            ;(this.deliverTo(this, "value", e), e.length > 0 && (await Promise.all(e)))
            let t = this.value
            return (
              t instanceof Object &&
                !(Symbol.dispose in t) &&
                Object.defineProperty(t, Symbol.dispose, {
                  value: () => this.dispose(),
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                }),
              t
            )
          } catch (e) {
            throw (this.dispose(), e)
          }
        }
        dispose() {
          if ("owned" === this.source)
            (this.hooks.forEach((e) => e.dispose()), this.promises.forEach((e) => e.promise[Symbol.dispose]()))
          else if (
            "return" === this.source &&
            (this.disposeImpl(this.value, void 0), this.rpcTargets && this.rpcTargets.size > 0)
          )
            throw Error("Not all rpcTargets were accounted for in disposeImpl()?")
          ;((this.source = "owned"), (this.hooks = []), (this.promises = []))
        }
        disposeImpl(e, t) {
          switch (c(e)) {
            case "unsupported":
            case "primitive":
            case "bigint":
            case "bytes":
            case "blob":
            case "date":
            case "url":
            case "error":
            case "undefined":
            case "rpc-thenable":
            case "headers":
            default:
              return
            case "array": {
              let t = e.length
              for (let r = 0; r < t; r++) this.disposeImpl(e[r], e)
              return
            }
            case "object":
              for (let t in e) this.disposeImpl(e[t], e)
              return
            case "stub":
            case "rpc-promise": {
              let t = E(e)
              t && t.dispose()
              return
            }
            case "function":
            case "rpc-target": {
              let t = this.rpcTargets?.get(e)
              t ? (t.dispose(), this.rpcTargets.delete(e)) : T(e)
              return
            }
            case "request":
            case "response":
              e.body && this.disposeImpl(e.body, e)
              return
            case "writable": {
              let t = this.rpcTargets?.get(e)
              ;(t ? this.rpcTargets.delete(e) : (t = h.createWritableStreamHook(e)), t.dispose())
              return
            }
            case "readable": {
              let t = this.rpcTargets?.get(e)
              ;(t ? this.rpcTargets.delete(e) : (t = h.createReadableStreamHook(e)), t.dispose())
              return
            }
          }
        }
        ignoreUnhandledRejections() {
          this.hooks
            ? (this.hooks.forEach((e) => {
                e.ignoreUnhandledRejections()
              }),
              this.promises.forEach((e) => e.promise[b].hook.ignoreUnhandledRejections()))
            : this.ignoreUnhandledRejectionsImpl(this.value)
        }
        ignoreUnhandledRejectionsImpl(e) {
          switch (c(e)) {
            case "unsupported":
            case "primitive":
            case "bigint":
            case "bytes":
            case "blob":
            case "date":
            case "error":
            case "undefined":
            case "function":
            case "rpc-target":
            case "writable":
            case "readable":
            case "url":
            case "headers":
            case "request":
            case "response":
            default:
              return
            case "array": {
              let t = e.length
              for (let r = 0; r < t; r++) this.ignoreUnhandledRejectionsImpl(e[r])
              return
            }
            case "object":
              for (let t in e) this.ignoreUnhandledRejectionsImpl(e[t])
              return
            case "stub":
            case "rpc-promise":
              e[b].hook.ignoreUnhandledRejections()
              return
            case "rpc-thenable":
              e.then(
                (e) => {},
                (e) => {},
              )
              return
          }
        }
      }
      function R(e, t, r, n) {
        for (let i = 0; i < r.length; i++) {
          t = e
          let s = r[i]
          if (s in Object.prototype) {
            e = void 0
            continue
          }
          switch (c(e)) {
            case "object":
            case "function":
              e = Object.hasOwn(e, s) ? e[s] : void 0
              break
            case "array":
              e = Number.isInteger(s) && s >= 0 ? e[s] : void 0
              break
            case "rpc-target":
            case "rpc-thenable":
              if (Object.hasOwn(e, s))
                throw TypeError(
                  `Attempted to access property '${s}', which is an instance property of the RpcTarget. To avoid leaking private internals, instance properties cannot be accessed over RPC. If you want to make this property available over RPC, define it as a method or getter on the class, instead of an instance property.`,
                )
              ;((e = e[s]), (n = null))
              break
            case "stub":
            case "rpc-promise": {
              let { hook: t, pathIfPromise: n } = e[b]
              return { hook: t, remainingPath: n ? n.concat(r.slice(i)) : r.slice(i) }
            }
            case "writable":
            case "readable":
            case "primitive":
            case "bigint":
            case "bytes":
            case "blob":
            case "date":
            case "error":
            case "url":
            case "headers":
            case "request":
            case "response":
              e = void 0
              break
            case "undefined":
              e = e[s]
              break
            case "unsupported":
              if (0 === i) throw TypeError("RPC stub points at a non-serializable type.")
              {
                let e = r.slice(0, i).join("."),
                  t = r.slice(0, i).join(".")
                throw TypeError(`'${e}' is not a serializable type, so property ${t} cannot be accessed.`)
              }
            default:
              throw TypeError("unreachable")
          }
        }
        if (e instanceof _) {
          let { hook: t, pathIfPromise: r } = e[b]
          return { hook: t, remainingPath: r || [] }
        }
        return { value: e, parent: t, owner: n }
      }
      var k = class extends f {
          call(e, t) {
            try {
              let { value: r, owner: n } = this.getValue(),
                i = R(r, void 0, e, n)
              if (i.hook) return i.hook.call(i.remainingPath, t)
              if ("function" != typeof i.value) throw TypeError(`'${e.join(".")}' is not a function.`)
              return new I(t.deliverCall(i.value, i.parent).then((e) => new P(e)))
            } catch (e) {
              return new g(e)
            }
          }
          map(e, t, r) {
            try {
              let n
              try {
                let { value: t, owner: r } = this.getValue()
                n = R(t, void 0, e, r)
              } catch (e) {
                for (let e of t) e.dispose()
                throw e
              }
              if (n.hook) return n.hook.map(n.remainingPath, t, r)
              return d.applyMap(n.value, n.parent, n.owner, t, r)
            } catch (e) {
              return new g(e)
            }
          }
          get(e) {
            try {
              let { value: t, owner: r } = this.getValue()
              if (0 === e.length && null === r) throw Error("Can't dup an RpcTarget stub as a promise.")
              let n = R(t, void 0, e, r)
              if (n.hook) return n.hook.get(n.remainingPath)
              return new P(O.deepCopyFrom(n.value, n.parent, n.owner))
            } catch (e) {
              return new g(e)
            }
          }
        },
        P = class e extends k {
          constructor(e) {
            ;(super(), (this.payload = e))
          }
          payload
          getPayload() {
            if (this.payload) return this.payload
            throw Error("Attempted to use an RPC StubHook after it was disposed.")
          }
          getValue() {
            let e = this.getPayload()
            return { value: e.value, owner: e }
          }
          dup() {
            let t = this.getPayload()
            return new e(O.deepCopyFrom(t.value, void 0, t))
          }
          pull() {
            return this.getPayload()
          }
          ignoreUnhandledRejections() {
            this.payload && this.payload.ignoreUnhandledRejections()
          }
          dispose() {
            this.payload && (this.payload.dispose(), (this.payload = void 0))
          }
          onBroken(e) {
            this.payload && this.payload.value instanceof v && this.payload.value.onRpcBroken(e)
          }
        }
      function T(e) {
        if (Symbol.dispose in e)
          try {
            e[Symbol.dispose]()
          } catch (e) {
            Promise.reject(e)
          }
      }
      var A = class e extends k {
          static create(t, r) {
            return ("function" != typeof t && (r = void 0), new e(t, r))
          }
          constructor(e, t, r) {
            ;(super(),
              (this.target = e),
              (this.parent = t),
              r
                ? r.refcount && ((this.refcount = r.refcount), ++this.refcount.count)
                : Symbol.dispose in e && (this.refcount = { count: 1 }))
          }
          target
          parent
          refcount
          getTarget() {
            if (this.target) return this.target
            throw Error("Attempted to use an RPC StubHook after it was disposed.")
          }
          getValue() {
            return { value: this.getTarget(), owner: null }
          }
          dup() {
            return new e(this.getTarget(), this.parent, this)
          }
          pull() {
            let e = this.getTarget()
            return "then" in e
              ? Promise.resolve(e).then((e) => O.fromAppReturn(e))
              : Promise.reject(Error("Tried to resolve a non-promise stub."))
          }
          ignoreUnhandledRejections() {}
          dispose() {
            this.target && (this.refcount && 0 == --this.refcount.count && T(this.target), (this.target = void 0))
          }
          onBroken(e) {}
        },
        I = class e extends f {
          promise
          resolution
          constructor(e) {
            ;(super(), (this.promise = e.then((e) => ((this.resolution = e), e))))
          }
          call(t, r) {
            return (r.ensureDeepCopied(), new e(this.promise.then((e) => e.call(t, r))))
          }
          stream(e, t) {
            return (t.ensureDeepCopied(), { promise: this.promise.then((r) => r.stream(e, t).promise) })
          }
          map(t, r, n) {
            return new e(
              this.promise.then(
                (e) => e.map(t, r, n),
                (e) => {
                  for (let e of r) e.dispose()
                  throw e
                },
              ),
            )
          }
          get(t) {
            return new e(this.promise.then((e) => e.get(t)))
          }
          dup() {
            return this.resolution ? this.resolution.dup() : new e(this.promise.then((e) => e.dup()))
          }
          pull() {
            return this.resolution ? this.resolution.pull() : this.promise.then((e) => e.pull())
          }
          ignoreUnhandledRejections() {
            this.resolution
              ? this.resolution.ignoreUnhandledRejections()
              : this.promise.then(
                  (e) => {
                    e.ignoreUnhandledRejections()
                  },
                  (e) => {},
                )
          }
          dispose() {
            this.resolution
              ? this.resolution.dispose()
              : this.promise.then(
                  (e) => {
                    e.dispose()
                  },
                  (e) => {},
                )
          }
          onBroken(e) {
            this.resolution
              ? this.resolution.onBroken(e)
              : this.promise.then((t) => {
                  t.onBroken(e)
                }, e)
          }
        }
      let j = { maxBigIntDigits: 16384, maxDepth: 256, maxMessageSize: 0x2000000 },
        C = 1 === new Uint8Array(new Uint16Array([1]).buffer)[0],
        x = [
          "ArrayBuffer",
          "DataView",
          "Int8Array",
          "Uint8Array",
          "Uint8ClampedArray",
          "Int16Array",
          "Uint16Array",
          "Int32Array",
          "Uint32Array",
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
        ],
        D = {
          ArrayBuffer: void 0,
          DataView: void 0,
          Int8Array: void 0,
          Uint8Array: void 0,
          Uint8ClampedArray: void 0,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          BigInt64Array: 8,
          BigUint64Array: 8,
          Float32Array: 4,
          Float64Array: 8,
        },
        L = {
          ArrayBuffer: ArrayBuffer.prototype,
          DataView: DataView.prototype,
          Int8Array: Int8Array.prototype,
          Uint8ClampedArray: Uint8ClampedArray.prototype,
          Int16Array: Int16Array.prototype,
          Uint16Array: Uint16Array.prototype,
          Int32Array: Int32Array.prototype,
          Uint32Array: Uint32Array.prototype,
          BigInt64Array: BigInt64Array.prototype,
          BigUint64Array: BigUint64Array.prototype,
          Float32Array: Float32Array.prototype,
          Float64Array: Float64Array.prototype,
        },
        M = new Map()
      for (let e of Object.keys(L)) M.set(L[e], e)
      function N(e, t) {
        if (2 !== t && 4 !== t && 8 !== t) throw RangeError(`Unsupported element size: ${t}`)
        let r = new DataView(e.buffer, e.byteOffset, e.byteLength)
        for (let n = 0; n < e.byteLength; n += t)
          switch (t) {
            case 2:
              r.setUint16(n, r.getUint16(n, !1), !0)
              break
            case 4:
              r.setUint32(n, r.getUint32(n, !1), !0)
              break
            case 8:
              r.setBigUint64(n, r.getBigUint64(n, !1), !0)
          }
      }
      let U = new (class {
          exportStub(e) {
            throw Error("Cannot serialize RPC stubs without an RPC session.")
          }
          exportPromise(e) {
            throw Error("Cannot serialize RPC stubs without an RPC session.")
          }
          getImport(e) {}
          unexport(e) {}
          createPipe(e) {
            throw Error("Cannot create pipes without an RPC session.")
          }
          onSendError(e) {}
        })(),
        B = {
          __proto__: null,
          Error,
          EvalError,
          RangeError,
          ReferenceError,
          SyntaxError,
          TypeError,
          URIError,
          AggregateError,
        }
      var Q = class e {
          exporter
          source
          encodingLevel
          constructor(e, t, r) {
            ;((this.exporter = e), (this.source = t), (this.encodingLevel = r))
          }
          static devaluate(t, r, n = U, i, s = "string", o) {
            let a = new e(n, i, s)
            a.messageOrigin = o
            try {
              return a.devaluateImpl(t, r, 0)
            } catch (e) {
              if (a.exports)
                try {
                  n.unexport(a.exports)
                } catch (e) {}
              throw e
            }
          }
          exports
          devaluateImpl(e, t, r) {
            if (r >= 256)
              throw Error("Serialization exceeded maximum allowed depth. (Does the message contain cycles?)")
            switch (c(e)) {
              case "unsupported": {
                let t
                try {
                  t = `Cannot serialize value: ${e}`
                } catch (e) {
                  t = "Cannot serialize value: (couldn't stringify value)"
                }
                throw TypeError(t)
              }
              case "primitive":
                if ("number" != typeof e || isFinite(e) || "structuredClonable" === this.encodingLevel) return e
                if (1 / 0 === e) return ["inf"]
                if (-1 / 0 === e) return ["-inf"]
                return ["nan"]
              case "object": {
                let t = {}
                for (let n in e) t[n] = this.devaluateImpl(e[n], e, r + 1)
                return t
              }
              case "array": {
                let t = e.length,
                  n = Array(t)
                for (let i = 0; i < t; i++) n[i] = this.devaluateImpl(e[i], e, r + 1)
                return [n]
              }
              case "bigint":
                if ("structuredClonable" === this.encodingLevel) return e
                return ["bigint", e.toString()]
              case "date": {
                if ("structuredClonable" === this.encodingLevel) return e
                let t = e.getTime()
                return ["date", Number.isNaN(t) ? null : t]
              }
              case "bytes": {
                let t,
                  r,
                  n = M.get(Object.getPrototypeOf(e))
                if ("ArrayBuffer" === n) t = new Uint8Array(e)
                else if (void 0 === n) t = e
                else {
                  t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                  let r = D[n]
                  !C && r && N((t = t.slice()), r)
                }
                if ("structuredClonable" === this.encodingLevel || "jsonCompatibleWithBytes" === this.encodingLevel)
                  return void 0 === n ? ["bytes", t] : ["bytes", t, n]
                if (t.toBase64) r = t.toBase64({ omitPadding: !0 })
                else if ("u" > typeof Buffer)
                  r = (t instanceof Buffer ? t : Buffer.from(t.buffer, t.byteOffset, t.byteLength)).toString("base64")
                else {
                  let e = ""
                  for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r])
                  r = btoa(e)
                }
                return ((r = r.replace(/=+$/, "")), void 0 === n ? ["bytes", r] : ["bytes", r, n])
              }
              case "url":
                return ["url", e.href]
              case "headers":
                return ["headers", [...e]]
              case "request": {
                let t = {}
                "GET" !== e.method && (t.method = e.method)
                let n = [...e.headers]
                if ((n.length > 0 && (t.headers = n), e.body))
                  ((t.body = this.devaluateImpl(e.body, e, r + 1)), (t.duplex = e.duplex || "half"))
                else if (void 0 === e.body && !["GET", "HEAD", "OPTIONS", "TRACE", "DELETE"].includes(e.method)) {
                  let r = e.arrayBuffer(),
                    n = new ReadableStream({
                      async start(e) {
                        try {
                          ;(e.enqueue(new Uint8Array(await r)), e.close())
                        } catch (t) {
                          e.error(t)
                        }
                      },
                    }),
                    i = h.createReadableStreamHook(n)
                  ;((t.body = ["readable", this.exporter.createPipe(n, i)]), (t.duplex = e.duplex || "half"))
                }
                return (
                  e.cache && "default" !== e.cache && (t.cache = e.cache),
                  "follow" !== e.redirect && (t.redirect = e.redirect),
                  e.integrity && (t.integrity = e.integrity),
                  e.mode && "cors" !== e.mode && (t.mode = e.mode),
                  e.credentials && "same-origin" !== e.credentials && (t.credentials = e.credentials),
                  e.referrer && "about:client" !== e.referrer && (t.referrer = e.referrer),
                  e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
                  e.keepalive && (t.keepalive = e.keepalive),
                  e.cf && (t.cf = e.cf),
                  e.encodeResponseBody &&
                    "automatic" !== e.encodeResponseBody &&
                    (t.encodeResponseBody = e.encodeResponseBody),
                  ["request", e.url, t]
                )
              }
              case "response": {
                let t = this.devaluateImpl(e.body, e, r + 1),
                  n = {}
                ;(200 !== e.status && (n.status = e.status), e.statusText && (n.statusText = e.statusText))
                let i = [...e.headers]
                if (
                  (i.length > 0 && (n.headers = i),
                  e.cf && (n.cf = e.cf),
                  e.encodeBody && "automatic" !== e.encodeBody && (n.encodeBody = e.encodeBody),
                  e.webSocket)
                )
                  throw TypeError("Can't serialize a Response containing a webSocket.")
                return ["response", t, n]
              }
              case "blob": {
                let t = e.stream(),
                  r = h.createReadableStreamHook(t),
                  n = this.exporter.createPipe(t, r)
                return ["blob", e.type, ["readable", n]]
              }
              case "error": {
                let t,
                  n = e,
                  i = this.exporter.onSendError(n)
                i && (n = i)
                let s = n,
                  o = (e, i) => {
                    let s = this.exports?.length ?? 0
                    try {
                      let s = this.devaluateImpl(i, n, r + 1)
                      ;(t || (t = {}), (t[e] = s))
                    } catch (e) {
                      if (this.exports && this.exports.length > s) {
                        let e = this.exports.splice(s)
                        try {
                          this.exporter.unexport(e)
                        } catch (e) {}
                      }
                    }
                  }
                for (let e of Object.keys(n)) "name" !== e && "message" !== e && "stack" !== e && o(e, s[e])
                ;("cause" in n && o("cause", s.cause), n instanceof AggregateError && o("errors", n.errors))
                let a = ["error", n.name, n.message]
                return (t ? (a.push(i && i.stack ? i.stack : null), a.push(t)) : i && i.stack && a.push(i.stack), a)
              }
              case "undefined":
                if ("structuredClonable" === this.encodingLevel) return
                return ["undefined"]
              case "stub":
              case "rpc-promise": {
                if (!this.source) throw Error("Can't serialize RPC stubs in this context.")
                let { hook: t, pathIfPromise: r } = e[b],
                  n = this.exporter.getImport(t)
                if (void 0 !== n)
                  if (!r) return ["import", n]
                  else if (r.length > 0) return ["pipeline", n, r]
                  else return ["pipeline", n]
                return ((t = r ? t.get(r) : t.dup()), this.devaluateHook(r ? "promise" : "export", t))
              }
              case "function":
              case "rpc-target": {
                if (!this.source) throw Error("Can't serialize RPC stubs in this context.")
                let r = this.source.getHookForRpcTarget(e, t)
                return this.devaluateHook("export", r)
              }
              case "rpc-thenable": {
                if (!this.source) throw Error("Can't serialize RPC stubs in this context.")
                let r = this.source.getHookForRpcTarget(e, t)
                return this.devaluateHook("promise", r)
              }
              case "writable": {
                if (!this.source) throw Error("Can't serialize WritableStream in this context.")
                let r = this.source.getHookForWritableStream(e, t)
                return this.devaluateHook("writable", r)
              }
              case "readable": {
                if (!this.source) throw Error("Can't serialize ReadableStream in this context.")
                let r = this.source.getHookForReadableStream(e, t)
                return ["readable", this.exporter.createPipe(e, r)]
              }
              default:
                throw Error("unreachable")
            }
          }
          devaluateHook(e, t) {
            this.exports || (this.exports = [])
            let r = "promise" === e ? this.exporter.exportPromise(t) : this.exporter.exportStub(t, this.messageOrigin)
            return (this.exports.push(r), [e, r])
          }
        },
        Y = class e {
          importer
          encodingLevel
          limits
          constructor(e, t = "string", r) {
            ;((this.messageOrigin = r), (this.importer = e), (this.encodingLevel = t), (this.limits = e.getLimits()))
          }
          hooks = []
          promises = []
          evaluate(e) {
            return this.evaluateWithDepth(e, 0)
          }
          evaluateWithDepth(e, t) {
            let r = O.forEvaluate(this.hooks, this.promises)
            try {
              return ((r.value = this.evaluateImpl(e, r, "value", t)), r)
            } catch (e) {
              throw (r.dispose(), e)
            }
          }
          evaluateCopy(e) {
            return this.evaluate(structuredClone(e))
          }
          evaluateImpl(t, r, n, i) {
            let s = this.limits.maxDepth
            if (i >= s) throw TypeError(`Deserialization exceeded maximum allowed message depth of ${s}.`)
            if ("structuredClonable" === this.encodingLevel && (t instanceof Date || "bigint" == typeof t)) return t
            if (t instanceof Array) {
              var o
              if (1 == t.length && t[0] instanceof Array) {
                let e = t[0]
                for (let t = 0; t < e.length; t++) e[t] = this.evaluateImpl(e[t], e, t, i + 1)
                return e
              }
              switch (t[0]) {
                case "bigint":
                  if ("string" == typeof t[1]) {
                    let e = t[1],
                      r = this.limits.maxBigIntDigits
                    if (e.length > r) throw TypeError(`Deserialized bigint exceeds maximum length of ${r} digits.`)
                    return BigInt(e)
                  }
                  break
                case "date":
                  if (null === t[1]) return new Date(0 / 0)
                  if ("number" == typeof t[1]) return new Date(t[1])
                  break
                case "bytes": {
                  let e
                  if (t[1] instanceof Uint8Array) e = t[1]
                  else if ("string" == typeof t[1])
                    if ("u" > typeof Buffer) e = Buffer.from(t[1], "base64")
                    else if (Uint8Array.fromBase64) e = Uint8Array.fromBase64(t[1])
                    else {
                      let r = atob(t[1]),
                        n = r.length
                      e = new Uint8Array(n)
                      for (let t = 0; t < n; t++) e[t] = r.charCodeAt(t)
                    }
                  else break
                  if (2 === t.length) return e
                  if ("string" != typeof t[2]) throw TypeError(`Unknown bytes type marker type: ${typeof t[2]}`)
                  if (((o = t[2]), !x.includes(o))) {
                    let e = t[2].slice(0, 64)
                    throw TypeError(`Unknown bytes type marker: ${e}`)
                  }
                  let r = t[2],
                    n = D[r]
                  if (void 0 !== n && e.byteLength % n != 0)
                    throw TypeError(`Invalid byte length ${e.byteLength} for ${r}; expected a multiple of ${n}`)
                  let i = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                  switch ((!C && void 0 !== n && N(new Uint8Array(i), n), r)) {
                    case "ArrayBuffer":
                      return i
                    case "DataView":
                      return new DataView(i)
                    case "Int8Array":
                      return new Int8Array(i)
                    case "Uint8Array":
                      return new Uint8Array(i)
                    case "Uint8ClampedArray":
                      return new Uint8ClampedArray(i)
                    case "Int16Array":
                      return new Int16Array(i)
                    case "Uint16Array":
                      return new Uint16Array(i)
                    case "Int32Array":
                      return new Int32Array(i)
                    case "Uint32Array":
                      return new Uint32Array(i)
                    case "BigInt64Array":
                      return new BigInt64Array(i)
                    case "BigUint64Array":
                      return new BigUint64Array(i)
                    case "Float32Array":
                      return new Float32Array(i)
                    case "Float64Array":
                      return new Float64Array(i)
                  }
                }
                case "error":
                  if (t.length >= 3 && "string" == typeof t[1] && "string" == typeof t[2]) {
                    let e = B[t[1]] || Error,
                      r = e === AggregateError ? new e([], t[2]) : new e(t[2])
                    if (("string" == typeof t[3] && (r.stack = t[3]), t.length >= 5)) {
                      let e = t[4]
                      if (!e || "object" != typeof e || Array.isArray(e)) break
                      for (let t of Object.keys(e))
                        if ("name" !== t && "message" !== t && "stack" !== t) {
                          if (t in Object.prototype || "toJSON" === t) {
                            this.evaluateImpl(e[t], r, t, i + 1)
                            continue
                          }
                          r[t] = this.evaluateImpl(e[t], r, t, i + 1)
                        }
                    }
                    return r
                  }
                  break
                case "undefined":
                  if (1 === t.length) return
                  break
                case "inf":
                  return 1 / 0
                case "-inf":
                  return -1 / 0
                case "nan":
                  return 0 / 0
                case "url":
                  if (2 === t.length && "string" == typeof t[1]) return new URL(t[1])
                  break
                case "headers":
                  if (2 === t.length && t[1] instanceof Array) return new Headers(t[1])
                  break
                case "request": {
                  if (3 !== t.length || "string" != typeof t[1]) break
                  let e = t[1],
                    s = t[2]
                  if ("object" != typeof s || null === s) break
                  if (s.body)
                    if (
                      ((s.body = this.evaluateImpl(s.body, s, "body", i + 1)),
                      null === s.body ||
                        "string" == typeof s.body ||
                        s.body instanceof Uint8Array ||
                        s.body instanceof ReadableStream)
                    );
                    else throw TypeError("Request body must be of type ReadableStream.")
                  if (
                    s.signal &&
                    ((s.signal = this.evaluateImpl(s.signal, s, "signal", i + 1)), !(s.signal instanceof AbortSignal))
                  )
                    throw TypeError("Request siganl must be of type AbortSignal.")
                  if (s.headers && !(s.headers instanceof Array))
                    throw TypeError("Request headers must be serialized as an array of pairs.")
                  let o = new Request(e, s)
                  if (!(s.body instanceof ReadableStream) || void 0 !== o.body) return o
                  {
                    let e = new _(
                      new I(
                        new Response(s.body).arrayBuffer().then((e) => {
                          let t = new Request(o, { body: new Uint8Array(e) })
                          return new P(O.fromAppReturn(t))
                        }),
                      ),
                      [],
                    )
                    return (this.promises.push({ promise: e, parent: r, property: n }), e)
                  }
                }
                case "response": {
                  if (3 !== t.length) break
                  let e = this.evaluateImpl(t[1], r, n, i + 1)
                  if (null === e || "string" == typeof e || e instanceof Uint8Array || e instanceof ReadableStream);
                  else throw TypeError("Response body must be of type ReadableStream.")
                  let s = t[2]
                  if ("object" != typeof s || null === s) break
                  if (s.webSocket) throw TypeError("Can't deserialize a Response containing a webSocket.")
                  if (s.headers && !(s.headers instanceof Array))
                    throw TypeError("Request headers must be serialized as an array of pairs.")
                  return new Response(e, s)
                }
                case "blob": {
                  if (3 !== t.length || "string" != typeof t[1]) break
                  let e = t[1],
                    s = this.evaluateImpl(t[2], r, n, i + 1)
                  if (!(s instanceof ReadableStream))
                    throw TypeError("Blob content must be serialized as a ReadableStream.")
                  let o = new _(
                    new I(
                      (async function (e, t) {
                        let r = await new Response(e).blob()
                        return r.type === t ? r : r.slice(0, r.size, t)
                      })(s, e).then((e) => new P(O.fromAppReturn(e))),
                    ),
                    [],
                  )
                  return (this.promises.push({ promise: o, parent: r, property: n }), o)
                }
                case "import":
                case "pipeline": {
                  if (t.length < 2 || t.length > 4 || "number" != typeof t[1]) break
                  let s = this.importer.getExport(t[1])
                  if (!s) throw Error(`no such entry on exports table: ${t[1]}`)
                  let o = "pipeline" == t[0],
                    a = (e) => {
                      if (!o) return (this.hooks.push(e), new _(e, []))
                      {
                        let t = new _(e, [])
                        return (this.promises.push({ promise: t, parent: r, property: n }), t)
                      }
                    }
                  if (2 == t.length)
                    if (o) return a(s.get([]))
                    else return a(s.dup())
                  let l = t[2]
                  if (!(l instanceof Array) || !l.every((e) => "string" == typeof e || "number" == typeof e)) break
                  if (3 == t.length) return a(s.get(l))
                  let c = t[3]
                  if (!(c instanceof Array)) break
                  return ((c = new e(this.importer).evaluateWithDepth([c], i)), a(s.call(l, c)))
                }
                case "remap": {
                  if (
                    5 !== t.length ||
                    "number" != typeof t[1] ||
                    !(t[2] instanceof Array) ||
                    !(t[3] instanceof Array) ||
                    !(t[4] instanceof Array)
                  )
                    break
                  let e = this.importer.getExport(t[1])
                  if (!e) throw Error(`no such entry on exports table: ${t[1]}`)
                  let i = t[2]
                  if (!i.every((e) => "string" == typeof e || "number" == typeof e)) break
                  let s = t[3].map((e) => {
                      if (
                        !(e instanceof Array) ||
                        2 !== e.length ||
                        ("import" !== e[0] && "export" !== e[0]) ||
                        "number" != typeof e[1]
                      )
                        throw TypeError(`unknown map capture: ${JSON.stringify(e)}`)
                      if ("export" === e[0]) return this.importer.importStub(e[1])
                      {
                        let t = this.importer.getExport(e[1])
                        if (!t) throw Error(`no such entry on exports table: ${e[1]}`)
                        return t.dup()
                      }
                    }),
                    o = t[4],
                    a = new _(e.map(i, s, o), [])
                  return (this.promises.push({ promise: a, parent: r, property: n }), a)
                }
                case "export":
                case "promise":
                  if ("number" == typeof t[1])
                    if ("promise" == t[0]) {
                      let e = new _(this.importer.importPromise(t[1]), [])
                      return (this.promises.push({ parent: r, property: n, promise: e }), e)
                    } else {
                      let e = this.importer.importStub(t[1])
                      return (this.hooks.push(e), new v(e))
                    }
                  break
                case "writable":
                  if ("number" == typeof t[1]) {
                    let e = this.importer.importStub(t[1]),
                      r = h.createWritableStreamFromHook(e)
                    return (this.hooks.push(e), r)
                  }
                  break
                case "readable":
                  if ("number" == typeof t[1]) {
                    let e = this.importer.getPipeReadable(t[1], this.messageOrigin),
                      r = h.createReadableStreamHook(e)
                    return (this.hooks.push(r), e)
                  }
              }
              throw TypeError(`unknown special value: ${JSON.stringify(t)}`)
            }
            if (!(t instanceof Object)) return t
            for (let e in t)
              e in Object.prototype || "toJSON" === e
                ? (this.evaluateImpl(t[e], t, e, i + 1), delete t[e])
                : (t[e] = this.evaluateImpl(t[e], t, e, i + 1))
            return t
          }
        }
      function W(e) {
        return 2 + 3 * e.length
      }
      var F = class {
          session
          importId
          constructor(e, t, r) {
            ;((this.session = e), (this.importId = t), r && (this.activePull = Promise.withResolvers()))
          }
          localRefcount = 0
          remoteRefcount = 1
          activePull
          resolution
          onBrokenRegistrations
          resolve(e) {
            if (0 == this.localRefcount) return void e.dispose()
            if (((this.resolution = e), this.sendRelease(), this.onBrokenRegistrations)) {
              for (let t of this.onBrokenRegistrations) {
                let { callback: r, index: n } = t,
                  i = this.session.onBrokenCallbacks.length
                e.onBroken(r)
                let s = this.session.onBrokenCallbacks[i]
                s?.callback === r
                  ? ((s.index = n), (this.session.onBrokenCallbacks[n] = s), delete this.session.onBrokenCallbacks[i])
                  : delete this.session.onBrokenCallbacks[n]
              }
              this.onBrokenRegistrations = void 0
            }
            this.activePull && (this.activePull.resolve(), (this.activePull = void 0))
          }
          async awaitResolution() {
            return (
              this.activePull || (this.session.sendPull(this.importId), (this.activePull = Promise.withResolvers())),
              await this.activePull.promise,
              this.resolution.pull()
            )
          }
          dispose() {
            this.resolution
              ? this.resolution.dispose()
              : (this.abort(Error("RPC was canceled because the RpcPromise was disposed.")), this.sendRelease())
          }
          abort(e) {
            if (
              !this.resolution &&
              ((this.resolution = new g(e)),
              this.activePull && (this.activePull.reject(e), (this.activePull = void 0)),
              this.onBrokenRegistrations)
            ) {
              for (let e of this.onBrokenRegistrations) delete this.session.onBrokenCallbacks[e.index]
              this.onBrokenRegistrations = void 0
            }
          }
          onBroken(e) {
            if (this.resolution) this.resolution.onBroken(e)
            else {
              let t = { callback: e, index: this.session.onBrokenCallbacks.length }
              ;(this.session.onBrokenCallbacks.push(t),
                this.onBrokenRegistrations || (this.onBrokenRegistrations = []),
                this.onBrokenRegistrations.push(t))
            }
          }
          sendRelease() {
            this.remoteRefcount > 0 &&
              (this.session.sendRelease(this.importId, this.remoteRefcount), (this.remoteRefcount = 0))
          }
        },
        H = class e extends f {
          isPromise
          entry
          constructor(e, t) {
            ;(super(), (this.isPromise = e), ++t.localRefcount, (this.entry = t))
          }
          collectPath(e) {
            return this
          }
          getEntry() {
            if (this.entry) return this.entry
            throw Error("This RpcImportHook was already disposed.")
          }
          call(e, t) {
            let r = this.getEntry()
            return r.resolution ? r.resolution.call(e, t) : r.session.sendCall(r.importId, e, t)
          }
          stream(e, t) {
            let r = this.getEntry()
            return r.resolution ? r.resolution.stream(e, t) : r.session.sendStream(r.importId, e, t)
          }
          map(e, t, r) {
            let n
            try {
              n = this.getEntry()
            } catch (e) {
              for (let e of t) e.dispose()
              throw e
            }
            return n.resolution ? n.resolution.map(e, t, r) : n.session.sendMap(n.importId, e, t, r)
          }
          get(e) {
            let t = this.getEntry()
            return t.resolution ? t.resolution.get(e) : t.session.sendCall(t.importId, e)
          }
          dup() {
            return new e(!1, this.getEntry())
          }
          pull() {
            let e = this.getEntry()
            if (!this.isPromise) throw Error("Can't pull this hook because it's not a promise hook.")
            return e.resolution ? e.resolution.pull() : e.awaitResolution()
          }
          ignoreUnhandledRejections() {}
          dispose() {
            let e = this.entry
            ;((this.entry = void 0), e && 0 == --e.localRefcount && e.dispose())
          }
          onBroken(e) {
            this.entry && this.entry.onBroken(e)
          }
        },
        z = class extends H {
          session
          constructor(e) {
            ;(super(!1, e), (this.session = e.session))
          }
          dispose() {
            if (this.session) {
              let e = this.session
              ;((this.session = void 0), e.shutdown())
            }
          }
        },
        q = class {
          transport
          options
          exports = []
          reverseExports = new Map()
          imports = []
          abortReason
          cancelReadLoop
          nextExportId = -1
          onBatchDone
          pullCount = 0
          onBrokenCallbacks = []
          encodingLevel
          limits
          constructor(e, t, r) {
            ;((this.transport = e), (this.options = r))
            let n = "string"
            if ("encodingLevel" in e) {
              let t = e.encodingLevel
              if (void 0 !== t) {
                if (
                  "string" !== t &&
                  "jsonCompatible" !== t &&
                  "jsonCompatibleWithBytes" !== t &&
                  "structuredClonable" !== t
                )
                  throw TypeError(`Unknown transport encodingLevel: ${String(t)}`)
                n = t
              }
            }
            ;((this.encodingLevel = n),
              (this.limits = { ...j, ...r.limits }),
              this.exports.push({ hook: t, refcount: 1 }),
              this.imports.push(new F(this, 0, !1)),
              this.readLoop().catch((e) => this.abort(e)))
          }
          getMainImport() {
            return new z(this.imports[0])
          }
          shutdown() {
            this.abort(Error("RPC session was shut down by disposing the main stub"), !1)
          }
          exportStub(e, t) {
            if (this.abortReason) throw this.abortReason
            let r = this.reverseExports.get(e)
            if (void 0 !== r) {
              let e = this.exports[r],
                n = e.messageOrigin
              return (
                n && n.service !== t?.service
                  ? (e.messageOrigin = void 0)
                  : n?.method !== void 0 && n.method !== t?.method && (e.messageOrigin = { service: n.service }),
                ++e.refcount,
                r
              )
            }
            {
              let r = this.nextExportId--
              return (
                (this.exports[r] = { hook: e, refcount: 1 }),
                t && (this.exports[r].messageOrigin = t),
                this.reverseExports.set(e, r),
                r
              )
            }
          }
          exportPromise(e) {
            if (this.abortReason) throw this.abortReason
            let t = this.nextExportId--
            return (
              (this.exports[t] = { hook: e, refcount: 1 }),
              this.reverseExports.set(e, t),
              this.ensureResolvingExport(t),
              t
            )
          }
          unexport(e) {
            for (let t of e) this.releaseExport(t, 1)
          }
          releaseExport(e, t) {
            let r = this.exports[e]
            if (!r) throw Error(`no such export ID: ${e}`)
            if (r.refcount < t) throw Error(`refcount would go negative: ${r.refcount} < ${t}`)
            ;((r.refcount -= t),
              0 === r.refcount && (delete this.exports[e], this.reverseExports.delete(r.hook), r.hook.dispose()))
          }
          onSendError(e) {
            if (this.options.onSendError) return this.options.onSendError(e)
          }
          ensureResolvingExport(e) {
            let t = this.exports[e]
            if (!t) throw Error(`no such export ID: ${e}`)
            if (!t.pull) {
              let r = async () => {
                  let e = t.hook
                  for (;;) {
                    let t = await e.pull()
                    if (t.value instanceof v) {
                      let { hook: r, pathIfPromise: n } = t.value[b]
                      if (n && 0 == n.length && void 0 === this.getImport(e)) {
                        e = r
                        continue
                      }
                    }
                    return t
                  }
                },
                n = t.autoRelease
              ;(++this.pullCount,
                (t.pull = r()
                  .then(
                    (t) => {
                      let r = Q.devaluate(t.value, void 0, this, t, this.encodingLevel)
                      ;(this.send(["resolve", e, r]), n && this.releaseExport(e, 1))
                    },
                    (t) => {
                      ;(this.send(["reject", e, Q.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                        n && this.releaseExport(e, 1))
                    },
                  )
                  .catch((t) => {
                    try {
                      ;(this.send(["reject", e, Q.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                        n && this.releaseExport(e, 1))
                    } catch (e) {
                      this.abort(e)
                    }
                  })
                  .finally(() => {
                    0 == --this.pullCount && this.onBatchDone && this.onBatchDone.resolve()
                  })))
            }
          }
          getImport(e) {
            return e instanceof H && e.entry && e.entry.session === this ? e.entry.importId : void 0
          }
          importStub(e) {
            if (this.abortReason) throw this.abortReason
            let t = this.imports[e]
            return (t || ((t = new F(this, e, !1)), (this.imports[e] = t)), new H(!1, t))
          }
          importPromise(e) {
            if (this.abortReason) throw this.abortReason
            if (this.imports[e])
              return new g(Error("Bug in RPC system: The peer sent a promise reusing an existing export ID."))
            let t = new F(this, e, !0)
            return ((this.imports[e] = t), new H(!0, t))
          }
          getExport(e) {
            return this.exports[e]?.hook
          }
          getPipeReadable(e, t) {
            let r = this.exports[e]
            if (!r || !r.pipeReadable)
              throw Error(`Export ${e} is not a pipe or its readable end was already consumed.`)
            t && (r.messageOrigin = t)
            let n = r.pipeReadable
            return ((r.pipeReadable = void 0), n)
          }
          getLimits() {
            return this.limits
          }
          createPipe(e, t) {
            if (this.abortReason) throw this.abortReason
            this.send(["pipe"])
            let r = this.imports.length,
              n = new F(this, r, !1)
            this.imports.push(n)
            let i = new H(!1, n),
              s = h.createWritableStreamFromHook(i)
            return (
              e
                .pipeTo(s)
                .catch(() => {})
                .finally(() => t.dispose()),
              r
            )
          }
          send(e) {
            if (void 0 !== this.abortReason) return 0
            if ("string" === this.encodingLevel) {
              let t
              try {
                t = JSON.stringify(e)
              } catch (e) {
                try {
                  this.abort(e)
                } catch (e) {}
                throw e
              }
              try {
                let e = this.transport.send(t)
                void 0 !== e && "function" == typeof e.catch && e.catch((e) => this.abort(e, !1))
              } catch (e) {
                queueMicrotask(() => this.abort(e, !1))
              }
              return t.length
            }
            try {
              let t = this.transport.send(e)
              if ("number" == typeof t) return t
              t && "function" == typeof t.then && Promise.resolve(t).catch((e) => this.abort(e, !1))
              return
            } catch (e) {
              queueMicrotask(() => this.abort(e, !1))
              return
            }
          }
          sendCall(e, t, r) {
            if (this.abortReason) throw this.abortReason
            let n = this.imports[e]?.messagePortService,
              i =
                n && this.options.onMessagePortRead && 1 === t.length && this.options.messagePortReadMethods?.has(t[0])
                  ? { service: n.service, method: t[0] }
                  : n,
              s = ["pipeline", e, t]
            if (r) {
              let e = Q.devaluate(r.value, void 0, this, r, this.encodingLevel, i)
              s.push(e[0])
            }
            this.send(["push", s])
            let o = new F(this, this.imports.length, !1)
            return (i && (o.messageOrigin = i), this.imports.push(o), new H(!0, o))
          }
          sendStream(e, t, r) {
            if (this.abortReason) throw this.abortReason
            let n = ["pipeline", e, t],
              i = Q.devaluate(r.value, void 0, this, r, this.encodingLevel)
            n.push(i[0])
            let s = ["stream", n],
              o = this.send(s)
            void 0 === o &&
              (o = (function e(t, r, n = 0) {
                if (n >= 64) return 8
                switch (typeof t) {
                  case "string":
                    return W(t)
                  case "number":
                  case "bigint":
                  case "undefined":
                  default:
                    return 16
                  case "boolean":
                    return 8
                  case "object": {
                    if (null === t) return 8
                    if (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) return 16 + t.byteLength
                    if ("u" > typeof Blob && t instanceof Blob) return 16 + t.size
                    if (t instanceof Date) return 16
                    if ((r ??= new WeakSet()).has(t)) return 8
                    if ((r.add(t), t instanceof Array)) {
                      let i = 16
                      for (let s of t) i += 8 + e(s, r, n + 1)
                      return i
                    }
                    if (t instanceof Error) {
                      let i = 16 + W(t.name) + W(t.message) + W(t.stack ?? "")
                      for (let s of Object.keys(t)) i += 8 + W(s) + e(t[s], r, n + 1)
                      return i
                    }
                    let i = 16
                    for (let s of Object.keys(t)) i += 8 + W(s) + e(t[s], r, n + 1)
                    return i
                  }
                }
              })(s))
            let a = this.imports.length,
              l = new F(this, a, !0)
            return (
              (l.remoteRefcount = 0),
              (l.localRefcount = 1),
              this.imports.push(l),
              {
                promise: l.awaitResolution().then(
                  (e) => {
                    ;(e.dispose(), delete this.imports[a])
                  },
                  (e) => {
                    throw (delete this.imports[a], e)
                  },
                ),
                size: o,
              }
            )
          }
          sendMap(e, t, r, n) {
            if (this.abortReason) {
              for (let e of r) e.dispose()
              throw this.abortReason
            }
            let i = [
              "remap",
              e,
              t,
              r.map((e) => {
                let t = this.getImport(e)
                return void 0 !== t ? ["import", t] : ["export", this.exportStub(e)]
              }),
              n,
            ]
            this.send(["push", i])
            let s = new F(this, this.imports.length, !1)
            return (this.imports.push(s), new H(!0, s))
          }
          sendPull(e) {
            if (this.abortReason) throw this.abortReason
            this.send(["pull", e])
          }
          sendRelease(e, t) {
            this.abortReason || (this.send(["release", e, t]), delete this.imports[e])
          }
          abort(e, t = !0) {
            if (void 0 === this.abortReason) {
              if ((this.cancelReadLoop?.(e), (this.cancelReadLoop = void 0), t))
                try {
                  let t = ["abort", Q.devaluate(e, void 0, this, void 0, this.encodingLevel)]
                  if ("string" === this.encodingLevel) {
                    let e = this.transport.send(JSON.stringify(t))
                    void 0 !== e && "function" == typeof e.catch && e.catch((e) => {})
                  } else {
                    let e = this.transport.send(t)
                    e && "function" == typeof e.then && Promise.resolve(e).catch((e) => {})
                  }
                } catch (e) {}
              if (
                (void 0 === e && (e = "undefined"),
                (this.abortReason = e),
                this.onBatchDone && this.onBatchDone.reject(e),
                this.transport.abort)
              )
                try {
                  this.transport.abort(e)
                } catch (e) {
                  Promise.resolve(e)
                }
              for (let t of Object.values(this.onBrokenCallbacks))
                try {
                  t.callback(e)
                } catch (e) {
                  Promise.resolve(e)
                }
              for (let t in this.imports) this.imports[t].abort(e)
              for (let e in this.exports) this.exports[e].hook.dispose()
            }
          }
          async readLoop() {
            for (; !this.abortReason;) {
              let e,
                t = Promise.withResolvers()
              this.cancelReadLoop = t.reject
              try {
                e = await Promise.race([this.transport.receive(), t.promise])
              } finally {
                this.cancelReadLoop === t.reject && (this.cancelReadLoop = void 0)
              }
              if ("string" === this.encodingLevel && e.length > this.limits.maxMessageSize)
                throw TypeError(
                  `Incoming message exceeds maximum size of ${this.limits.maxMessageSize} UTF-16 code units.`,
                )
              if (this.abortReason) break
              let r = "string" === this.encodingLevel ? JSON.parse(e) : e
              if (r instanceof Array)
                switch (r[0]) {
                  case "push":
                    if (r.length > 1) {
                      let e = new P(new Y(this, this.encodingLevel).evaluate(r[1]))
                      ;(e.ignoreUnhandledRejections(), this.exports.push({ hook: e, refcount: 1 }))
                      continue
                    }
                    break
                  case "stream":
                    if (r.length > 1) {
                      let e = new P(new Y(this, this.encodingLevel).evaluate(r[1]))
                      e.ignoreUnhandledRejections()
                      let t = this.exports.length
                      ;(this.exports.push({ hook: e, refcount: 1, autoRelease: !0 }), this.ensureResolvingExport(t))
                      continue
                    }
                    break
                  case "pipe": {
                    let { readable: e, writable: t } = new TransformStream(),
                      r = h.createWritableStreamHook(t)
                    this.exports.push({ hook: r, refcount: 1, pipeReadable: e })
                    continue
                  }
                  case "pull": {
                    let e = r[1]
                    if ("number" == typeof e) {
                      this.ensureResolvingExport(e)
                      continue
                    }
                    break
                  }
                  case "resolve":
                  case "reject": {
                    let e = r[1]
                    if ("number" == typeof e && r.length > 2) {
                      let t = this.imports[e]
                      if (t)
                        if ("resolve" == r[0]) {
                          let e = new Y(this, this.encodingLevel, t.messageOrigin).evaluate(r[2])
                          ;(this.hasMessagePortServices &&
                            Array.isArray(r[2]) &&
                            "export" === r[2][0] &&
                            v.setMessagePortServiceName(e.value, t.messageOrigin?.service ?? null),
                            t.resolve(new P(e)))
                        } else {
                          let e = new Y(this, this.encodingLevel).evaluate(r[2])
                          ;(e.dispose(), t.resolve(new g(e.value)))
                        }
                      else "resolve" == r[0] && new Y(this, this.encodingLevel).evaluate(r[2]).dispose()
                      continue
                    }
                    break
                  }
                  case "release": {
                    let e = r[1],
                      t = r[2]
                    if ("number" == typeof e && "number" == typeof t) {
                      this.releaseExport(e, t)
                      continue
                    }
                    break
                  }
                  case "abort": {
                    let e = new Y(this, this.encodingLevel).evaluate(r[1])
                    ;(e.dispose(), this.abort(e.value, !1))
                  }
                }
              throw Error(`bad RPC message: ${JSON.stringify(r)}`)
            }
          }
          async drain() {
            if (this.abortReason) throw this.abortReason
            if (this.pullCount > 0) {
              let { promise: e, resolve: t, reject: r } = Promise.withResolvers()
              ;((this.onBatchDone = { resolve: t, reject: r }), await e)
            }
          }
          getStats() {
            let e = { imports: 0, exports: 0 }
            for (let t in this.imports) ++e.imports
            for (let t in this.exports) ++e.exports
            return e
          }
        },
        J = class {
          #t
          #r
          constructor(e, t, r = {}) {
            let n
            ;((n = t ? new P(O.fromAppReturn(t)) : new g(Error("This connection has no main object."))),
              (this.#t = new q(e, n, r)),
              (this.#r = new v(this.#t.getMainImport())))
          }
          messagePortReadOrigin(e) {
            if (Array.isArray(e)) {
              if (("resolve" === e[0] || "reject" === e[0]) && "number" == typeof e[1])
                return this.#t.imports[e[1]]?.messageOrigin
              if (("pull" === e[0] || "release" === e[0]) && "number" == typeof e[1])
                return this.#t.exports[e[1]]?.messageOrigin
              if (
                ("push" === e[0] || "stream" === e[0]) &&
                Array.isArray(e[1]) &&
                "pipeline" === e[1][0] &&
                "number" == typeof e[1][1]
              )
                return this.#t.exports[e[1][1]]?.messageOrigin
            }
          }
          getRemoteMain() {
            return this.#r
          }
          getStats() {
            return this.#t.getStats()
          }
          drain() {
            return this.#t.drain()
          }
        },
        $ = class {
          encodingLevel = "structuredClonable"
          constructor(e, t) {
            ;((this.#n = e),
              e.start(),
              e.addEventListener("message", (e) => {
                if (this.#i) return
                let r = t?.onMessagePortRead,
                  n = r ? performance.now() : 0,
                  i = e.data,
                  s = r ? performance.now() : 0
                ;(null === i
                  ? this.#s(Error("Peer closed MessagePort connection."))
                  : this.#o
                    ? (this.#o(i), (this.#o = void 0), (this.#a = void 0))
                    : this.#l.push(i),
                  r?.(i, n, s, this.readOrigin(i)))
              }),
              e.addEventListener("messageerror", (e) => {
                this.#s(Error("MessagePort message error."))
              }))
          }
          #n
          #o
          #a
          #l = []
          #i
          send(e) {
            if (this.#i) throw this.#i
            this.#n.postMessage(e)
          }
          async receive() {
            if (this.#l.length > 0) return this.#l.shift()
            if (!this.#i)
              return new Promise((e, t) => {
                ;((this.#o = e), (this.#a = t))
              })
            throw this.#i
          }
          abort(e) {
            try {
              this.#n.postMessage(null)
            } catch (e) {}
            ;(this.#n.close(), this.#i || (this.#i = e))
          }
          #s(e) {
            !this.#i && ((this.#i = e), this.#a && (this.#a(e), (this.#o = void 0), (this.#a = void 0)))
          }
        },
        V = class {
          context
          captureMap = new Map()
          instructions = []
          constructor(e, t) {
            ;(n
              ? (this.context = { parent: n, captures: [], subject: n.capture(e), path: t })
              : (this.context = { parent: void 0, captures: [], subject: e, path: t }),
              (n = this))
          }
          unregister() {
            n = this.context.parent
          }
          makeInput() {
            return new G(this, 0)
          }
          makeOutput(e) {
            let t
            try {
              t = Q.devaluate(e.value, void 0, this, e)
            } finally {
              e.dispose()
            }
            return (this.instructions.push(t), this.context.parent)
              ? (this.context.parent.instructions.push([
                  "remap",
                  this.context.subject,
                  this.context.path,
                  this.context.captures.map((e) => ["import", e]),
                  this.instructions,
                ]),
                new G(this.context.parent, this.context.parent.instructions.length))
              : this.context.subject.map(this.context.path, this.context.captures, this.instructions)
          }
          pushCall(e, t, r) {
            let n = Q.devaluate(r.value, void 0, this, r)
            n = n[0]
            let i = this.capture(e.dup())
            return (this.instructions.push(["pipeline", i, t, n]), new G(this, this.instructions.length))
          }
          pushGet(e, t) {
            let r = this.capture(e.dup())
            return (this.instructions.push(["pipeline", r, t]), new G(this, this.instructions.length))
          }
          capture(e) {
            if (e instanceof G && e.mapper === this) return e.idx
            let t = this.captureMap.get(e)
            if (void 0 === t) {
              if (this.context.parent) {
                let t = this.context.parent.capture(e)
                this.context.captures.push(t)
              } else this.context.captures.push(e)
              ;((t = -this.context.captures.length), this.captureMap.set(e, t))
            }
            return t
          }
          exportStub(e) {
            throw Error(
              "Can't construct an RpcTarget or RPC callback inside a mapper function. Try creating a new RpcStub outside the callback first, then using it inside the callback.",
            )
          }
          exportPromise(e) {
            return this.exportStub(e)
          }
          getImport(e) {
            return this.capture(e)
          }
          unexport(e) {}
          createPipe(e) {
            throw Error("Cannot send ReadableStream inside a mapper function.")
          }
          onSendError(e) {}
        }
      function K() {
        throw Error(
          "Attempted to use an abstract placeholder from a mapper function. Please make sure your map function has no side effects.",
        )
      }
      d.sendMap = (e, t, r) => {
        let n,
          i = new V(e, t)
        try {
          n = O.fromAppReturn(
            (function (e, t) {
              let r = y
              y = e
              try {
                return t()
              } finally {
                y = r
              }
            })(i.pushCall.bind(i), () => r(new _(i.makeInput(), []))),
          )
        } finally {
          i.unregister()
        }
        if (n instanceof Promise) throw (n.catch((e) => {}), Error("RPC map() callbacks cannot be async."))
        return new _(i.makeOutput(n), [])
      }
      var G = class extends f {
          mapper
          idx
          constructor(e, t) {
            ;(super(), (this.mapper = e), (this.idx = t))
          }
          dup() {
            return this
          }
          dispose() {}
          get(e) {
            return 0 == e.length ? this : n ? n.pushGet(this, e) : void K()
          }
          call(e, t) {
            K()
          }
          map(e, t, r) {
            K()
          }
          pull() {
            K()
          }
          ignoreUnhandledRejections() {}
          onBroken(e) {
            K()
          }
        },
        X = class {
          captures
          variables
          constructor(e, t) {
            ;((this.captures = e), (this.variables = [t]))
          }
          dispose() {
            for (let e of this.variables) e.dispose()
          }
          apply(e) {
            try {
              if (e.length < 1) throw Error("Invalid empty mapper function.")
              for (let t of e.slice(0, -1)) {
                let e = new Y(this).evaluateCopy(t)
                if (e.value instanceof v) {
                  let t = E(e.value)
                  if (t) {
                    this.variables.push(t)
                    continue
                  }
                }
                this.variables.push(new P(e))
              }
              return new Y(this).evaluateCopy(e[e.length - 1])
            } finally {
              for (let e of this.variables) e.dispose()
            }
          }
          importStub(e) {
            throw Error("A mapper function cannot refer to exports.")
          }
          importPromise(e) {
            return this.importStub(e)
          }
          getExport(e) {
            return e < 0 ? this.captures[-e - 1] : this.variables[e]
          }
          getPipeReadable(e) {
            throw Error("A mapper function cannot use pipe readables.")
          }
          getLimits() {
            return j
          }
        }
      function Z(e, t, r, n, i) {
        let s = new X(n, new P(O.deepCopyFrom(e, t, r)))
        try {
          return s.apply(i)
        } finally {
          s.dispose()
        }
      }
      d.applyMap = (e, t, r, n, i) => {
        try {
          let s
          if (e instanceof _) throw Error("applyMap() can't be called on RpcPromise")
          if (e instanceof Array) {
            let t = []
            try {
              for (let s of e) t.push(Z(s, e, r, n, i))
            } catch (e) {
              for (let e of t) e.dispose()
              throw e
            }
            s = O.fromArray(t)
          } else s = null == e ? O.fromAppReturn(e) : Z(e, t, r, n, i)
          return new P(s)
        } finally {
          for (let e of n) e.dispose()
        }
      }
      var ee = class {
          now
          window = 262144
          bytesInFlight = 0
          inStartupPhase = !0
          delivered = 0
          deliveredTime = 0
          firstAckTime = 0
          firstAckDelivered = 0
          minRtt = 1 / 0
          roundsWithoutIncrease = 0
          lastRoundWindow = 0
          roundStartTime = 0
          constructor(e) {
            this.now = e
          }
          onSend(e) {
            this.bytesInFlight += e
            let t = {
              sentTime: this.now(),
              size: e,
              deliveredAtSend: this.delivered,
              deliveredTimeAtSend: this.deliveredTime,
              windowAtSend: this.window,
              windowFullAtSend: this.bytesInFlight >= this.window,
            }
            return { token: t, shouldBlock: t.windowFullAtSend }
          }
          onError(e) {
            this.bytesInFlight -= e.size
          }
          onAck(e) {
            let t = this.now()
            ;((this.delivered += e.size), (this.deliveredTime = t), (this.bytesInFlight -= e.size))
            let r = t - e.sentTime
            if (((this.minRtt = Math.min(this.minRtt, r)), 0 === this.firstAckTime))
              ((this.firstAckTime = t), (this.firstAckDelivered = this.delivered))
            else {
              let r, n
              0 === e.deliveredTimeAtSend
                ? ((r = this.firstAckTime), (n = this.firstAckDelivered))
                : ((r = e.deliveredTimeAtSend), (n = e.deliveredAtSend))
              let i = t - r,
                s = (this.delivered - n) / i,
                o = this.inStartupPhase ? 2 : 1.25,
                a = s * this.minRtt * o
              ;((a = Math.min(a, e.windowAtSend * o)),
                (a = e.windowFullAtSend ? Math.max(a, 0.9 * e.windowAtSend) : Math.max(a, this.window)),
                (this.window = Math.max(Math.min(a, 0x40000000), 65536)),
                this.inStartupPhase &&
                  e.sentTime >= this.roundStartTime &&
                  (this.window > 1.25 * this.lastRoundWindow
                    ? (this.roundsWithoutIncrease = 0)
                    : ++this.roundsWithoutIncrease >= 3 && (this.inStartupPhase = !1),
                  (this.roundStartTime = t),
                  (this.lastRoundWindow = this.window)))
            }
            return this.bytesInFlight < this.window
          }
        },
        et = class e extends f {
          state
          static create(t) {
            return new e({ refcount: 1, stream: t, canceled: !1 })
          }
          constructor(e, t) {
            ;(super(), (this.state = e), t && ++e.refcount)
          }
          call(e, t) {
            return (t.dispose(), new g(Error("Cannot call methods on a ReadableStream stub")))
          }
          map(e, t, r) {
            for (let e of t) e.dispose()
            return new g(Error("Cannot use map() on a ReadableStream"))
          }
          get(e) {
            return new g(Error("Cannot access properties on a ReadableStream stub"))
          }
          dup() {
            let t = this.state
            if (!t) throw Error("Attempted to dup a ReadableStreamStubHook after it was disposed.")
            return new e(t, this)
          }
          pull() {
            return Promise.reject(Error("Cannot pull a ReadableStream stub"))
          }
          ignoreUnhandledRejections() {}
          dispose() {
            let e = this.state
            ;((this.state = void 0),
              e &&
                0 == --e.refcount &&
                !e.canceled &&
                ((e.canceled = !0),
                e.stream.locked ||
                  e.stream
                    .cancel(Error("ReadableStream RPC stub was disposed without being consumed"))
                    .catch(() => {})))
          }
          onBroken(e) {}
        }
      ;((h.createWritableStreamHook = class e extends f {
        state
        static create(t) {
          return new e({ refcount: 1, writer: t.getWriter(), closed: !1 })
        }
        constructor(e, t) {
          ;(super(), (this.state = e), t && ++e.refcount)
        }
        getState() {
          if (this.state) return this.state
          throw Error("Attempted to use a WritableStreamStubHook after it was disposed.")
        }
        call(e, t) {
          try {
            let r = this.getState()
            if (1 !== e.length || "string" != typeof e[0])
              throw Error("WritableStream stub only supports direct method calls")
            let n = e[0]
            if ("write" !== n && "close" !== n && "abort" !== n)
              throw (t.dispose(), Error(`Unknown WritableStream method: ${n}`))
            return (
              ("close" === n || "abort" === n) && (r.closed = !0),
              new I(
                ("write" === n ? t.deliverStreamWrite(r.writer) : t.deliverCall(r.writer[n], r.writer)).then(
                  (e) => new P(e),
                ),
              )
            )
          } catch (e) {
            return new g(e)
          }
        }
        map(e, t, r) {
          for (let e of t) e.dispose()
          return new g(Error("Cannot use map() on a WritableStream"))
        }
        get(e) {
          return new g(Error("Cannot access properties on a WritableStream stub"))
        }
        dup() {
          return new e(this.getState(), this)
        }
        pull() {
          return Promise.reject(Error("Cannot pull a WritableStream stub"))
        }
        ignoreUnhandledRejections() {}
        dispose() {
          let e = this.state
          ;((this.state = void 0),
            e &&
              0 == --e.refcount &&
              (e.closed ||
                e.writer.abort(Error("WritableStream RPC stub was disposed without calling close()")).catch(() => {}),
              e.writer.releaseLock()))
        }
        onBroken(e) {}
      }.create),
        (h.createWritableStreamFromHook = function (e) {
          let t,
            r,
            n,
            i = !1,
            s = new ee(() => performance.now()),
            o = () => {
              i || ((i = !0), e.dispose())
            }
          return new WritableStream({
            write(i, a) {
              if (void 0 !== n) throw n
              let l = O.fromAppParams([i]),
                { promise: c, size: u } = e.stream(["write"], l)
              if (void 0 === u)
                return c.catch((e) => {
                  throw (void 0 === n && (n = e), e)
                })
              {
                let { token: e, shouldBlock: i } = s.onSend(u)
                if (
                  (c.then(
                    () => {
                      s.onAck(e) && t && (t(), (t = void 0), (r = void 0))
                    },
                    (i) => {
                      ;(s.onError(e),
                        void 0 === n && ((n = i), a.error(i), o()),
                        r && (r(i), (t = void 0), (r = void 0)))
                    },
                  ),
                  i)
                )
                  return new Promise((e, n) => {
                    ;((t = e), (r = n))
                  })
              }
            },
            async close() {
              if (void 0 !== n) throw (o(), n)
              let { promise: t } = e.stream(["close"], O.fromAppParams([]))
              try {
                await t
              } catch (e) {
                throw n ?? e
              } finally {
                o()
              }
            },
            abort(i) {
              if (void 0 !== n) return
              ;((n = i ?? Error("WritableStream was aborted")), r && (r(n), (t = void 0), (r = void 0)))
              let { promise: s } = e.stream(["abort"], O.fromAppParams([i]))
              s.then(
                () => o(),
                () => o(),
              )
            },
          })
        }),
        (h.createReadableStreamHook = et.create),
        r.d(
          t,
          {},
          {
            AX: v,
            TF: o,
            ab: function (e, t, r) {
              let n = new $(e, r),
                i = new J(n, t, r)
              return (r && (n.readOrigin = (e) => i.messagePortReadOrigin(e)), i.getRemoteMain())
            },
            lK: function (e) {
              return JSON.stringify(Q.devaluate(e))
            },
            oB: J,
          },
        ))
    },
    27511(e, t, r) {
      "use strict"
      r.d(t, { qg: () => m, As: () => v })
      let n = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i
      class i extends Date {
        #c = !1
        #u = !1
        #d = null
        constructor(e) {
          let t = !0,
            r = !0,
            i = "Z"
          if ("string" == typeof e) {
            let s = e.match(n)
            s
              ? (s[1] || ((t = !1), (e = `0000-01-01T${e}`)),
                (r = !!s[2]) && " " === e[10] && (e = e.replace(" ", "T")),
                s[2] && +s[2] > 23 ? (e = "") : ((i = s[3] || null), (e = e.toUpperCase()), !i && r && (e += "Z")))
              : (e = "")
          }
          ;(super(e), isNaN(this.getTime()) || ((this.#c = t), (this.#u = r), (this.#d = i)))
        }
        isDateTime() {
          return this.#c && this.#u
        }
        isLocal() {
          return !this.#c || !this.#u || !this.#d
        }
        isDate() {
          return this.#c && !this.#u
        }
        isTime() {
          return this.#u && !this.#c
        }
        isValid() {
          return this.#c || this.#u
        }
        toISOString() {
          let e = super.toISOString()
          if (this.isDate()) return e.slice(0, 10)
          if (this.isTime()) return e.slice(11, 23)
          if (null === this.#d) return e.slice(0, -1)
          if ("Z" === this.#d) return e
          let t = 60 * this.#d.slice(1, 3) + +this.#d.slice(4, 6)
          return (
            (t = "-" === this.#d[0] ? t : -t),
            new Date(this.getTime() - 6e4 * t).toISOString().slice(0, -1) + this.#d
          )
        }
        static wrapAsOffsetDateTime(e, t = "Z") {
          let r = new i(e)
          return ((r.#d = t), r)
        }
        static wrapAsLocalDateTime(e) {
          let t = new i(e)
          return ((t.#d = null), t)
        }
        static wrapAsLocalDate(e) {
          let t = new i(e)
          return ((t.#u = !1), (t.#d = null), t)
        }
        static wrapAsLocalTime(e) {
          let t = new i(e)
          return ((t.#c = !1), (t.#d = null), t)
        }
      }
      class s extends Error {
        line
        column
        codeblock
        constructor(e, t) {
          var r, n
          let i,
            [s, o] = ((r = t.toml), (n = t.ptr), [(i = r.slice(0, n).split(/\r\n|\n|\r/g)).length, i.pop().length + 1]),
            a = (function (e, t, r) {
              let n = e.split(/\r\n|\n|\r/g),
                i = "",
                s = (0 | Math.log10(t + 1)) + 1
              for (let e = t - 1; e <= t + 1; e++) {
                let o = n[e - 1]
                o &&
                  ((i += e.toString().padEnd(s, " ")),
                  (i += ":  "),
                  (i += o),
                  (i += "\n"),
                  e === t && ((i += " ".repeat(s + r + 2)), (i += "^\n")))
              }
              return i
            })(t.toml, s, o)
          ;(super(
            `Invalid TOML document: ${e}

${a}`,
            t,
          ),
            (this.line = s),
            (this.column = o),
            (this.codeblock = a))
        }
      }
      let o = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
        a = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
        l = /^[+-]?0[0-9_]/
      function c(e, t) {
        let r = e[t++],
          n = r,
          i = "'" === r,
          o = r === e[t] && r === e[t + 1]
        o && ("\n" === e[(t += 2)] ? t++ : "\r" === e[t] && "\n" === e[t + 1] && (t += 2))
        let a = "",
          l = t,
          c = 0
        for (let u = t; u < e.length; u++)
          if (((r = e[u]), o && ("\n" === r || ("\r" === r && "\n" === e[u + 1])))) c = c && 3
          else if ((r < " " && "	" !== r) || "" === r)
            throw new s("control characters are not allowed in strings", { toml: e, ptr: u })
          else if ((!c || 3 === c) && r === n && (!o || (e[u + 1] === n && e[u + 2] === n)))
            return (o && (e[u + 3] === n && u++, e[u + 3] === n && u++), [c ? a : a + e.slice(l, u), u + (o ? 3 : 1)])
          else if (c) {
            if (1 === c)
              if ("x" === r || "u" === r || "U" === r) {
                let t = 0,
                  n = "x" === r ? 2 : "u" === r ? 4 : 8
                for (let r = 0; r < n; r++, u++) {
                  let r = e.charCodeAt(u + 1),
                    n =
                      r >= 48 && r <= 57
                        ? r - 48
                        : r >= 65 && r <= 70
                          ? r - 65 + 10
                          : r >= 97 && r <= 102
                            ? r - 97 + 10
                            : -1
                  if (n < 0) throw new s("invalid non-hex character in unicode escape", { toml: e, ptr: u + 1 })
                  t = (t << 4) | n
                }
                if (t < 0 || t > 1114111 || (t >= 55296 && t <= 57343))
                  throw new s("invalid unicode escape", { toml: e, ptr: u })
                ;((a += String.fromCodePoint(t)), (l = u + 1), (c = 0))
              } else if (" " === r || "	" === r) c = 2
              else {
                if ("b" === r) a += "\b"
                else if ("t" === r) a += "	"
                else if ("n" === r) a += "\n"
                else if ("f" === r) a += "\f"
                else if ("r" === r) a += "\r"
                else if ("e" === r) a += "\x1b"
                else if ('"' === r) a += '"'
                else if ("\\" === r) a += "\\"
                else throw new s("unrecognized escape sequence", { toml: e, ptr: u })
                ;((l = u + 1), (c = 0))
              }
            else if (" " !== r && "	" !== r) {
              if (2 === c)
                throw new s("invalid escape: only line-ending whitespace may be escaped", { toml: e, ptr: l })
              ;((c = +(!i && "\\" === r)), (l = u))
            }
          } else i || "\\" !== r || ((a += e.slice(l, (l = u))), (c = 1))
        throw new s("unfinished string", { toml: e, ptr: t })
      }
      function u(e, t = 0, r = e.length) {
        let n = e.indexOf("\n", t)
        return ("\r" === e[n - 1] && n--, n <= r ? n : -1)
      }
      function d(e, t) {
        for (let r = t; r < e.length; r++) {
          let n = e[r]
          if ("\n" === n) return r
          if ("\r" === n && "\n" === e[r + 1]) return r + 1
          if ((n < " " && "	" !== n) || "" === n)
            throw new s("control characters are not allowed in comments", { toml: e, ptr: t })
        }
        return e.length
      }
      function p(e, t, r, n) {
        let i
        for (;;) {
          for (; " " === (i = e[t]) || "	" === i || (!r && ("\n" === i || ("\r" === i && "\n" === e[t + 1])));) t++
          if (n || "#" !== i) break
          t = d(e, t)
        }
        return t
      }
      let h = /^[a-zA-Z0-9-_]+[ \t]*$/
      function f(e, t, r = "=") {
        let n = t - 1,
          i = [],
          o = e.indexOf(r, t)
        if (o < 0) throw new s("incomplete key-value: cannot find end of key", { toml: e, ptr: t })
        do {
          let a = e[(t = ++n)]
          if (" " !== a && "	" !== a)
            if ('"' === a || "'" === a) {
              if (a === e[t + 1] && a === e[t + 2])
                throw new s("multiline strings are not allowed in keys", { toml: e, ptr: t })
              let [l, d] = c(e, t)
              n = e.indexOf(".", d)
              let p = e.slice(d, n < 0 || n > o ? o : n),
                h = u(p)
              if (h > -1) throw new s("newlines are not allowed in keys", { toml: e, ptr: t + n + h })
              if (p.trimStart()) throw new s("found extra tokens after the string part", { toml: e, ptr: d })
              if (o < d && (o = e.indexOf(r, d)) < 0)
                throw new s("incomplete key-value: cannot find end of key", { toml: e, ptr: t })
              i.push(l)
            } else {
              n = e.indexOf(".", t)
              let r = e.slice(t, n < 0 || n > o ? o : n)
              if (!h.test(r))
                throw new s("only letter, numbers, dashes and underscores are allowed in keys", { toml: e, ptr: t })
              i.push(r.trimEnd())
            }
        } while (n + 1 && n < o)
        return [i, p(e, o + 1, !0, !0)]
      }
      function g(e, t, r, n) {
        let i,
          s,
          o = t,
          a = r,
          l = !1
        for (let t = 0; t < e.length; t++) {
          if (t) {
            if (((o = l ? o[i] : (o[i] = {})), (a = (s = a[i]).c), 0 === n && (1 === s.t || 2 === s.t))) return null
            if (2 === s.t) {
              let e = o.length - 1
              ;((o = o[e]), (a = a[e].c))
            }
          }
          if ((l = Object.hasOwn(o, (i = e[t]))) && a[i]?.t === 0 && a[i]?.d) return null
          l ||
            ("__proto__" === i &&
              (Object.defineProperty(o, i, { enumerable: !0, configurable: !0, writable: !0 }),
              Object.defineProperty(a, i, { enumerable: !0, configurable: !0, writable: !0 })),
            (a[i] = { t: t < e.length - 1 && 2 === n ? 3 : n, d: !1, i: 0, c: {} }))
        }
        if (
          ((s = a[i]).t !== n && (1 !== n || 3 !== s.t)) ||
          (2 === n &&
            (s.d || ((s.d = !0), (o[i] = [])), o[i].push((o = {})), (s.c[s.i++] = s = { t: 1, d: !1, i: 0, c: {} })),
          s.d)
        )
          return null
        if (((s.d = !0), 1 === n)) o = l ? o[i] : (o[i] = {})
        else if (0 === n && l) return null
        return [i, o, s.c]
      }
      function m(e, { maxDepth: t = 1e3, integersAsBigInt: r } = {}) {
        let n = {},
          h = {},
          y = n,
          b = h
        for (let m = p(e, 0); m < e.length;) {
          if ("[" === e[m]) {
            let t = "[" === e[++m],
              r = f(e, (m += +t), "]")
            if (t) {
              if ("]" !== e[r[1] - 1]) throw new s("expected end of table declaration", { toml: e, ptr: r[1] - 1 })
              r[1]++
            }
            let i = g(r[0], n, h, t ? 2 : 1)
            if (!i) throw new s("trying to redefine an already defined table or value", { toml: e, ptr: m })
            ;((b = i[2]), (y = i[1]), (m = r[1]))
          } else {
            let n = f(e, m),
              h = g(n[0], y, b, 0)
            if (!h) throw new s("trying to redefine an already defined table or value", { toml: e, ptr: m })
            let w = (function e(t, r, n, h, g) {
              var m
              let y, b
              if (0 === h)
                throw new s("document contains excessively nested structures. aborting.", { toml: t, ptr: r })
              let w = t[r]
              if ("[" === w || "{" === w) {
                let [i, o] =
                  "[" === w
                    ? (function (t, r, n, i) {
                        let o,
                          a = []
                        for (r++; "]" !== (o = t[r++]) && o;)
                          if ("," === o) throw new s("expected value, found comma", { toml: t, ptr: r - 1 })
                          else if ("#" === o) r = d(t, r)
                          else if (" " !== o && "	" !== o && "\n" !== o && "\r" !== o) {
                            let s = e(t, r - 1, "]", n - 1, i)
                            ;(a.push(s[0]), (r = s[1]))
                          }
                        if (!o) throw new s("unfinished array encountered", { toml: t, ptr: r })
                        return [a, r]
                      })(t, r, h, g)
                    : (function (t, r, n, i) {
                        let o,
                          a = {},
                          l = new Set()
                        for (r++; "}" !== (o = t[r++]) && o;)
                          if ("," === o) throw new s("expected value, found comma", { toml: t, ptr: r - 1 })
                          else if ("#" === o) r = d(t, r)
                          else if (" " !== o && "	" !== o && "\n" !== o && "\r" !== o) {
                            let o,
                              c = a,
                              u = !1,
                              [d, p] = f(t, r - 1)
                            for (let e = 0; e < d.length; e++) {
                              if (
                                (e && (c = u ? c[o] : (c[o] = {})),
                                (u = Object.hasOwn(c, (o = d[e]))) && ("object" != typeof c[o] || l.has(c[o])))
                              )
                                throw new s("trying to redefine an already defined value", { toml: t, ptr: r })
                              u ||
                                "__proto__" !== o ||
                                Object.defineProperty(c, o, { enumerable: !0, configurable: !0, writable: !0 })
                            }
                            if (u) throw new s("trying to redefine an already defined value", { toml: t, ptr: r })
                            let [h, g] = e(t, p, "}", n - 1, i)
                            ;(l.add(h), (c[o] = h), (r = g))
                          }
                        if (!o) throw new s("unfinished table encountered", { toml: t, ptr: r })
                        return [a, r]
                      })(t, r, h, g)
                if (n) {
                  if (((o = p(t, o)), "," === t[o])) o++
                  else if (t[o] !== n) throw new s("expected comma or end of structure", { toml: t, ptr: o })
                }
                return [i, o]
              }
              if ('"' === w || "'" === w) {
                let [e, i] = c(t, r)
                if (n) {
                  if (((i = p(t, i)), t[i] && "," !== t[i] && t[i] !== n && "\n" !== t[i] && "\r" !== t[i]))
                    throw new s("unexpected character encountered", { toml: t, ptr: i })
                  "," === t[i] && i++
                }
                return [e, i]
              }
              let v = (function (e, t, r, n = !1) {
                  if (!r) return (t = u(e, t)) < 0 ? e.length : t
                  for (let i = t; i < e.length; i++) {
                    let t = e[i]
                    if ("#" === t) i = u(e, i)
                    else if ("," === t) return i + 1
                    else if (t === r || (n && ("\n" === t || ("\r" === t && "\n" === e[i + 1])))) return i
                  }
                  throw new s("cannot find end of structure", { toml: e, ptr: t })
                })(t, r, n),
                _ =
                  ((m = v - ("," === t[v - 1])),
                  (b = (y = t.slice(r, m)).indexOf("#")) > -1 && (d(t, b), (y = y.slice(0, b))),
                  [y.trimEnd(), b])
              if (!_[0]) throw new s("incomplete key-value declaration: no value specified", { toml: t, ptr: r })
              return (
                n && _[1] > -1 && ((v = p(t, r + _[1])), "," === t[v] && v++),
                [
                  (function (e, t, r, n) {
                    if ("true" === e) return !0
                    if ("false" === e) return !1
                    if ("-inf" === e) return -1 / 0
                    if ("inf" === e || "+inf" === e) return 1 / 0
                    if ("nan" === e || "+nan" === e || "-nan" === e) return 0 / 0
                    if ("-0" === e) return n ? 0n : 0
                    let c = o.test(e)
                    if (c || a.test(e)) {
                      if (l.test(e)) throw new s("leading zeroes are not allowed", { toml: t, ptr: r })
                      let i = +(e = e.replace(/_/g, ""))
                      if (isNaN(i)) throw new s("invalid number", { toml: t, ptr: r })
                      if (c) {
                        if ((c = !Number.isSafeInteger(i)) && !n)
                          throw new s("integer value cannot be represented losslessly", { toml: t, ptr: r })
                        ;(c || !0 === n) && (i = BigInt(e))
                      }
                      return i
                    }
                    let u = new i(e)
                    if (!u.isValid()) throw new s("invalid value", { toml: t, ptr: r })
                    return u
                  })(_[0], t, r, g),
                  v,
                ]
              )
            })(e, n[1], void 0, t, r)
            ;((h[1][h[0]] = w[0]), (m = w[1]))
          }
          if (((m = p(e, m, !0)), e[m] && "\n" !== e[m] && "\r" !== e[m]))
            throw new s("each key-value declaration must be followed by an end-of-line", { toml: e, ptr: m })
          m = p(e, m)
        }
        return n
      }
      let y = /^[a-z0-9-_]+$/i
      function b(e) {
        let t = typeof e
        if ("object" === t) {
          if (Array.isArray(e)) return "array"
          if (e instanceof Date) return "date"
        }
        return t
      }
      function w(e) {
        return JSON.stringify(e).replace(/\x7f/g, "\\u007f")
      }
      function v(e, { maxDepth: t = 1e3, numbersAsFloat: r = !1 } = {}) {
        if ("object" !== b(e)) throw TypeError("stringify can only be called with an object")
        let n = (function e(t, r, n, i, s) {
          if (0 === i) throw Error("Could not stringify the object: maximum object depth exceeded")
          let o = "",
            a = "",
            l = Object.keys(r)
          for (let t = 0; t < l.length; t++) {
            let c = l[t]
            if (null !== r[c] && void 0 !== r[c]) {
              let t = b(r[c])
              if ("symbol" === t || "function" === t) throw TypeError(`cannot serialize values of type '${t}'`)
              let l = y.test(c) ? c : w(c)
              if (
                "array" === t &&
                (function (e) {
                  for (let t = 0; t < e.length; t++) if ("object" !== b(e[t])) return !1
                  return 0 != e.length
                })(r[c])
              )
                a +=
                  (a && "\n") +
                  (function (t, r, n, i) {
                    if (0 === n) throw Error("Could not stringify the object: maximum object depth exceeded")
                    let s = ""
                    for (let o = 0; o < t.length; o++)
                      ((s += `${s && "\n"}[[${r}]]
`),
                        (s += e(0, t[o], r, n, i)))
                    return s
                  })(r[c], n ? `${n}.${l}` : l, i - 1, s)
              else if ("object" === t) {
                let t = n ? `${n}.${l}` : l
                a += (a && "\n") + e(t, r[c], t, i - 1, s)
              } else
                ((o += l),
                  (o += " = "),
                  (o += (function e(t, r, n, i) {
                    if (0 === n) throw Error("Could not stringify the object: maximum object depth exceeded")
                    if ("number" === r)
                      return isNaN(t)
                        ? "nan"
                        : 1 / 0 === t
                          ? "inf"
                          : -1 / 0 === t
                            ? "-inf"
                            : Number.isInteger(t) && (i || !Number.isSafeInteger(t))
                              ? t.toFixed(1)
                              : t.toString()
                    if ("bigint" === r || "boolean" === r) return t.toString()
                    if ("string" === r) return w(t)
                    if ("date" === r) {
                      if (isNaN(t.getTime())) throw TypeError("cannot serialize invalid date")
                      return t.toISOString()
                    }
                    return "object" === r
                      ? (function (t, r, n) {
                          let i = Object.keys(t)
                          if (0 === i.length) return "{}"
                          let s = "{ "
                          for (let o = 0; o < i.length; o++) {
                            let a = i[o]
                            ;(o && (s += ", "),
                              (s += y.test(a) ? a : w(a)),
                              (s += " = "),
                              (s += e(t[a], b(t[a]), r - 1, n)))
                          }
                          return s + " }"
                        })(t, n, i)
                      : "array" === r
                        ? (function (t, r, n) {
                            if (0 === t.length) return "[]"
                            let i = "[ "
                            for (let s = 0; s < t.length; s++) {
                              if ((s && (i += ", "), null === t[s] || void 0 === t[s]))
                                throw TypeError("arrays cannot contain null or undefined values")
                              i += e(t[s], b(t[s]), r - 1, n)
                            }
                            return i + " ]"
                          })(t, n, i)
                        : void 0
                  })(r[c], t, i, s)),
                  (o += "\n"))
            }
          }
          return (
            t &&
              (o || !a) &&
              (o = o
                ? `[${t}]
${o}`
                : `[${t}]`),
            o && a
              ? `${o}
${a}`
              : o || a
          )
        })(0, e, "", t, r)
        return "\n" !== n[n.length - 1] ? n + "\n" : n
      }
    },
  }))
//# sourceMappingURL=early-bootstrap-133-d277c7adebbd24e5.js.map
