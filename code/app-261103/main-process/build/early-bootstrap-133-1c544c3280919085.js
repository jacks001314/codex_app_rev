;((exports.ids = [133]),
  (exports.modules = {
    37022(e) {
      e.exports = function (e, t, r) {
        return (e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== t && (e = e >= t ? e : t)), e)
      }
    },
    74438(e, t, r) {
      var i = r(37022),
        n = r(84301)
      e.exports = function (e, t, r) {
        return (
          void 0 === r && ((r = t), (t = void 0)),
          void 0 !== r && (r = (r = n(r)) == r ? r : 0),
          void 0 !== t && (t = (t = n(t)) == t ? t : 0),
          i(n(e), t, r)
        )
      }
    },
    55924(e, t, r) {
      "use strict"
      var i = r(7715),
        n = r(35553)
      let s = n.string().min(1).max(256),
        o = n.strictObject({ userId: s, accountId: s, hostId: s, conversationId: s, challengeId: s }),
        a = n.strictObject({
          operationId: n.uuid(),
          fillStatus: n.enum([
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
          saveStatus: n.enum(["not_requested", "saved", "failed", "unknown"]),
          statusAvailable: n.boolean(),
          selectionId: n.uuid().optional(),
        }),
        l = n.strictObject({ context: o, operation: a, finishedAtMs: n.number().nonnegative().optional() }),
        c = n.strictObject({ entries: n.array(l) })
      class u extends i.TF {
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
            i = a.parse(t),
            n = JSON.stringify(r)
          return this.#e((e) => {
            let t = d(e),
              s = t.entries.find((e) => JSON.stringify(e.context) === n)
            if (null != s) return { value: t, result: { created: !1, operation: s.operation } }
            let o = Date.now() - 864e5
            return {
              value: {
                entries: [
                  ...t.entries.filter((e) => null == e.finishedAtMs || e.finishedAtMs > o),
                  { context: r, operation: i },
                ],
              },
              result: { created: !0, operation: i },
            }
          })
        }
        async settle(e, t) {
          let r = JSON.stringify(o.parse(e)),
            i = a.parse(t)
          return this.#e((e) => ({
            value: {
              entries: d(e).entries.map((e) => {
                if (JSON.stringify(e.context) !== r || e.operation.operationId !== i.operationId) return e
                let t = {
                  ...e.operation,
                  fillStatus: "unknown" === i.fillStatus ? e.operation.fillStatus : i.fillStatus,
                  saveStatus: "unknown" === i.saveStatus ? e.operation.saveStatus : i.saveStatus,
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
      var i = r(35553),
        n = r(69150)
      let s = i.discriminatedUnion("outcome", [
        i.strictObject({
          outcome: i.literal("completed"),
          output: i
            .string()
            .trim()
            .min(1)
            .describe(
              "A concise, user-facing summary of the completed result. Follow any task-specific output instructions.",
            ),
          url: i.url().describe("The URL of the created or affected resource."),
        }),
        i.strictObject({
          outcome: i.literal("not_completed"),
          output: i
            .string()
            .trim()
            .min(1)
            .describe(
              "A friendly, first-person, user-facing sentence explaining that the goal could not be completed. Omit technical details, tool names, raw constraints, time zones, and error text.",
            ),
        }),
      ])
      ;(i.record(i.string(), i.json()).parse(n.bl(s)), r.d(t, {}, { c3: s }))
    },
    41939(e, t, r) {
      "use strict"
      let i = new Set([
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
        n = ["OAI_", "IDENTITY_", "AZURE_", "MSI_", "LD_", "DYLD_", "PYTHON", "SSL_", "GIT_CONFIG", "BASH"]
      r.d(
        t,
        {},
        {
          X: function (e) {
            if (0 === e.length) return "missing-key"
            if (e.length > 256 || !/^[A-Za-z_][A-Za-z0-9_]*$/.test(e)) return "invalid-key"
            let t = e.toUpperCase()
            return i.has(t) || n.some((e) => t.startsWith(e)) ? "reserved-key" : null
          },
        },
      )
    },
    17911(e, t, r) {
      "use strict"
      var i = r(35553),
        n = r(41939),
        s = r(31926)
      let o = i.object({
          repository_id: i.string().min(1),
          ref: i.string().min(1),
          mount_path: i.string().optional(),
          depth: i.number().int().min(1).max(0x7fffffff).optional(),
        }),
        a = i.discriminatedUnion("type", [
          i.object({ type: i.literal("disabled") }),
          i.object({ type: i.literal("unrestricted") }),
          i.object({
            type: i.literal("restricted"),
            presets: i.array(i.enum(["package_managers"])).optional(),
            egress_rules: i.array(i.object({ host: i.string().min(1) })),
          }),
        ]),
        l = i.object({ ip_ranges: i.array(i.string().min(1)), domains: i.array(i.string().min(1)) }),
        c = i
          .object({ ssh: i.boolean().optional(), http_ports: i.array(i.number().int().min(1).max(65535)).optional() })
          .refine(({ ssh: e, http_ports: t = [] }) => new Set(t).size === t.length && !(e && t.includes(22))),
        u = c.refine(({ http_ports: e = [] }) => !e.includes(22)),
        d = i.union([
          i.strictObject({ environment_variable: i.string(), allowed_domains: i.array(i.string()).optional() }),
          i.strictObject({
            http_header: i.strictObject({ header_name: i.string(), allowed_domains: i.array(i.string()) }),
          }),
        ]),
        p = i.object({
          id: i.string().optional(),
          name: i.string().min(1),
          source: i.enum(["environment", "user_provided"]),
          optional: i.boolean().optional(),
          error: i.object({ code: i.string() }).optional(),
          target: d,
        }),
        h = i.object({
          source: i.discriminatedUnion("type", [
            i.object({ type: i.literal("vault_secret"), id: i.string().min(1) }),
            i.object({ type: i.literal("user_provided") }),
          ]),
          optional: i.boolean(),
          delivery: i.object({ type: i.literal("direct_environment_variable"), variable_name: i.string().min(1) }),
          error: i.object({ code: i.string() }).optional(),
        }),
        f = h
          .pick({ delivery: !0 })
          .extend({ source: i.object({ type: i.literal("environment") }), suggested_value: i.string().nullish() }),
        m = i.object({
          portals: u.optional(),
          name: i.string().min(1),
          description: i.string().optional(),
          repositories: i.array(o),
          install_script: i.string().optional(),
          cwd: i.string().startsWith("/").optional(),
          start_skill: i.string().optional(),
          network_policy: a,
          share_settings: i.enum(["private", "workspace"]),
        }),
        g = m
          .pick({ name: !0, description: !0, share_settings: !0 })
          .extend({ idempotency_key: i.string().min(1) })
          .partial()
          .strict()
          .refine((e) => null != e.name || null != e.description || null != e.share_settings),
        b = i
          .object({
            portals: u.optional(),
            base_version_id: i.string().min(1),
            expected_revision: i.number().int().nonnegative().optional(),
            update_container: i.boolean().optional(),
            vpn_connection_id: i.string().optional(),
            tcp_network_access: l.nullish(),
            repositories: i.array(o).optional(),
            install_script: i.string().optional(),
            cwd: i.string().startsWith("/").optional(),
            start_skill: i.string().optional(),
            network_policy: a.optional(),
            runtime_requirements: i.array(h.omit({ error: !0 }).strict()).optional(),
            pending_runtime_requirements: i.array(f.strict()).optional(),
            outbound_identity_requirements: s.Z.optional(),
            secrets: i
              .array(
                p
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
        y = m.extend({
          portals: c.optional(),
          provider_metadata: i.record(i.string(), i.string()).optional(),
          id: i.string().min(1),
          is_owner: i.boolean().optional(),
          version_id: i.string().min(1),
          vpn_connection_id: i.string().min(1).nullish(),
          tcp_network_access: l.nullish(),
          status: i.string(),
          version_revision: i.number().int().positive().optional(),
          latest_ready_version_id: i.string().nullish(),
          environment_id: i.string().min(1).nullish(),
          thread_id: i.string().min(1).nullish(),
          onboarding_skill: i.string().min(1).nullish(),
          secrets: i.array(p).optional(),
          runtime_requirements: i.array(h).optional(),
          outbound_identity_requirements: i.array(s.NU).optional(),
          draft: i
            .object({
              portals: c.optional(),
              id: i.string().min(1),
              base_version_id: i.string().min(1),
              vpn_connection_id: i.string().min(1).nullish(),
              tcp_network_access: l.nullish(),
              revision: i.number().int().nonnegative(),
              repositories: i.array(o),
              install_script: i.string().optional(),
              cwd: i.string().startsWith("/").optional(),
              start_skill: i.string().optional(),
              network_policy: a,
              secrets: i.array(p),
              runtime_requirements: i.array(h).optional(),
              pending_runtime_requirements: i.array(f).optional(),
              outbound_identity_requirements: i.array(s.NU).optional(),
            })
            .nullish(),
        }),
        w = i
          .object({
            data: i.array(
              i.object({
                id: i.string().min(1),
                name: i.string(),
                description: m.shape.description,
                is_owner: i.boolean().optional(),
                share_settings: m.shape.share_settings,
                repositories: i.array(
                  i.object({ repository_id: i.string(), ref: i.string(), mount_path: i.string().optional() }),
                ),
                version_id: i.string().min(1),
                thread_id: i.string().min(1).nullish(),
                version_revision: i.number().int().positive().optional(),
              }),
            ),
            next_cursor: i.string().nullable(),
          })
          .transform((e) => ({
            data: e.data.map((e) => ({
              id: e.id,
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
      i.object({
        id: i.string(),
        name: i.string(),
        description: m.shape.description,
        isOwner: i.boolean().optional(),
        shareSettings: m.shape.share_settings,
        repositories: i.array(
          i.object({ repositoryId: i.string(), ref: i.string(), mountPath: i.string().optional() }),
        ),
        versionId: i.string(),
        threadId: i.string().nullish(),
        versionRevision: i.number().optional(),
        status: i.string(),
        latestReadyVersionId: i.string().nullable(),
      })
      let v = i.object({
          id: i.string().min(1),
          name: i.string(),
          isOwner: i.boolean().optional(),
          description: m.shape.description,
          repositories: i.array(i.object({ repositoryId: i.string() })),
        }),
        k = i
          .object({
            data: i.array(
              i.object({
                id: i.string().min(1),
                name: i.string(),
                is_owner: i.boolean().optional(),
                description: m.shape.description,
                repository_ids: i.array(i.string()),
              }),
            ),
            next_cursor: i.string().nullable(),
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
        _ = i.object({
          accountId: i.string(),
          userId: i.string(),
          data: i.array(v).optional(),
          refreshedAt: i.number(),
          reconciledAt: i.number(),
          revision: i.number(),
          retryAt: i.number(),
          failures: i.number(),
        }),
        S = i.string().regex(/^[A-Za-z0-9_~-]+$/),
        R = i.object({
          accountId: i.string().min(1),
          userId: i.string().min(1),
          configId: S,
          method: i.literal("DELETE"),
        }),
        x = i.union([
          i.object({
            accountId: i.string().min(1),
            method: i.literal("POST"),
            userId: i.string().min(1).optional(),
            body: i.union([
              i.strictObject({
                legacy_environment_id: i.string().min(1),
                start_onboarding: i.literal(!0),
                private_draft: i.literal(!0).optional(),
              }),
              m.extend({
                idempotency_key: i.string().min(1).optional(),
                provider_metadata: i.record(i.string(), i.string()).optional(),
                start_onboarding: i.boolean().optional(),
              }),
            ]),
          }),
          i.object({
            accountId: i.string().min(1),
            method: i.literal("POST"),
            configId: S,
            draftId: S.optional(),
            userId: i.string().min(1).optional(),
            body: i.union([
              i.strictObject({ expected_revision: i.number().int().nonnegative() }),
              i.strictObject({ operation_id: i.string().min(1), thread_id: i.string().min(1).optional() }),
            ]),
          }),
          i.object({
            accountId: i.string().min(1),
            method: i.literal("GET"),
            userId: i.string().min(1).optional(),
            configId: S,
            draftId: S.optional(),
          }),
          i
            .object({
              accountId: i.string().min(1),
              method: i.literal("PATCH"),
              userId: i.string().min(1).optional(),
              configId: S,
              draftId: S.optional(),
              body: i.union([b, g]),
            })
            .refine((e) => null == e.draftId || !("base_version_id" in e.body) || null != e.body.expected_revision),
        ]),
        E = i.object({
          accountId: i.string().min(1),
          userId: i.string().min(1),
          configId: S,
          method: i.literal("POST"),
          body: i.strictObject({ start_thread: i.boolean() }).optional(),
        }),
        I = i.object({ draft_id: S, environment_id: i.string().min(1), thread_id: i.string().min(1).nullable() }),
        P = i.object({
          accountId: i.string().min(1),
          userId: i.string().min(1),
          configId: S,
          draftId: S.optional(),
          method: i.literal("POST"),
          body: i.strictObject({
            expected_revision: i.number().int().nonnegative(),
            idempotency_key: i.string().min(1).max(128),
          }),
        }),
        j = i.object({ accountId: i.string().min(1), userId: i.string().min(1), operationId: i.string().min(1) }),
        A = i.object({
          id: i.string().min(1),
          kind: i.string().min(1),
          environment_id: i.string().min(1),
          state: i.enum(["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]),
          failure: i
            .object({
              code: i.string(),
              message: i.string(),
              vpn_failure_stage: i
                .enum(["setup", "daemon_start", "tailscale_up"])
                .optional()
                .catch(void 0),
              vpn_failure_class: i
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
        O = i.object({
          type: i.enum(["env-var", "network-secret"]),
          name: i
            .string()
            .max(256)
            .regex(/^[A-Za-z_][A-Za-z0-9_]*$/),
        }),
        T = i.discriminatedUnion("type", [
          i.object({ type: i.literal("all_environment_configs") }),
          i.object({ type: i.literal("environment_config_ids"), ids: i.array(i.string().min(1)).min(1).max(100) }),
        ]),
        C = i.discriminatedUnion("method", [
          i.object({
            accountId: i.string().min(1),
            userId: i.string().min(1),
            method: i.literal("GET"),
            cursor: i.string().optional(),
            namespace: i.enum(["sensitive", "not_sensitive"]).optional(),
          }),
          i.object({
            accountId: i.string().min(1),
            userId: i.string().min(1),
            method: i.literal("POST"),
            body: i.object({
              namespace: i.enum(["sensitive", "not_sensitive"]).optional(),
              secrets: i
                .array(
                  i.union([
                    i.strictObject({
                      env_var: i.string().min(1),
                      target: T.optional(),
                      name: i.string().min(1),
                      value: i.string().min(1),
                    }),
                    i
                      .strictObject({
                        id: i.string().min(1),
                        name: i.string().min(1).optional(),
                        value: i.string().min(1).optional(),
                        env_var: i.string().min(1).optional(),
                        target: T.optional(),
                      })
                      .refine((e) => (null != e.name || null != e.value) && (null == e.target || null != e.env_var)),
                  ]),
                )
                .min(1),
            }),
          }),
          i.object({
            accountId: i.string().min(1),
            userId: i.string().min(1),
            method: i.literal("DELETE"),
            body: i.object({
              namespace: i.enum(["sensitive", "not_sensitive"]).optional(),
              ids: i.array(i.string().min(1)).min(1),
            }),
          }),
        ]),
        D = i.object({ id: i.string().min(1), name: i.string(), env_var: i.string().nullish(), target: T.nullish() }),
        M = i.object({ secrets: i.array(D), next_cursor: i.string().nullable() }),
        U = i.object({
          secrets: i.array(
            i
              .object({
                id: i.string().min(1).optional(),
                name: i.string(),
                env_var: i.string().nullish(),
                target: T.nullish(),
                error: i.object({ code: i.string() }).optional(),
              })
              .refine((e) => null != e.id || null != e.error),
          ),
        }),
        L = i.strictObject({
          accountId: i.string().min(1),
          userId: i.string().min(1),
          id: i.string().regex(/^assec_[A-Za-z0-9_~-]+$/),
        }),
        B = i.object({ value: i.string() }),
        F = i.object({
          accountId: i.string().min(1),
          userId: i.string().min(1),
          namespace: i.enum(["sensitive", "not_sensitive"]),
          names: i
            .array(i.string().refine((e) => null == (0, n.X)(e)))
            .min(1)
            .max(100),
          target: T,
        }),
        N = i.object({
          accountId: i.string().min(1),
          userId: i.string().min(1),
          method: i.literal("POST"),
          body: i.strictObject({
            id: i.string().trim().min(1).optional(),
            namespace: i.enum(["proxy", "runtime"]),
            name: i.string().min(1),
            value: i.string().min(1),
          }),
        }),
        z = i.object({ id: i.string().min(1), name: i.string() }),
        W = i.discriminatedUnion("method", [
          i.object({
            accountId: i.string().min(1),
            userId: i.string().min(1),
            configId: S,
            draftId: i.string().min(1).optional(),
            method: i.literal("GET"),
          }),
          i.object({
            accountId: i.string().min(1),
            userId: i.string().min(1),
            configId: S,
            draftId: i.string().min(1).optional(),
            method: i.literal("POST"),
            body: i.strictObject({
              draft_id: i.string().min(1).optional(),
              provider: i.literal("tailscale"),
              auth_method: i.literal("auth_key"),
              connection_id: i.string().min(1).optional(),
              expected_etag: i.string().min(1).optional(),
              auth_key: i.string().min(1).max(4096).optional(),
              base_version_id: i.string().min(1),
              expected_draft_revision: i.number().int().nonnegative().optional(),
            }),
          }),
        ]),
        $ = i.object({
          tcp_network_access_supported: i.boolean().optional(),
          draft_id: i.string().min(1).optional(),
          connection: i
            .object({
              id: i.string().min(1),
              provider: i.enum(["tailscale", "wireguard", "openvpn"]),
              auth_method: i.enum(["auth_key", "oauth"]),
              etag: i.string().min(1),
              configured: i.boolean(),
            })
            .nullable(),
          capabilities: i.array(
            i.object({
              provider: i.enum(["tailscale", "wireguard", "openvpn"]),
              auth_methods: i.array(i.enum(["auth_key", "oauth"])),
            }),
          ),
          base_version_id: i.string().min(1),
          draft_revision: i.number().int().nonnegative().nullable(),
        }),
        H = i.object({
          data: i.array(
            i.object({
              environmentId: i.string(),
              status: i.enum(["connected", "offline", "unknown"]),
              observations: i
                .object({
                  specRevision: i.string(),
                  phase: i.string(),
                  failure: i.object({ code: i.string(), message: i.string() }).optional(),
                })
                .optional(),
            }),
          ),
        }),
        q = i.discriminatedUnion("method", [
          i.object({
            method: i.literal("getCloudAgentSettings"),
            accountId: i.string().min(1),
            userId: i.string().min(1),
          }),
          i.object({
            method: i.literal("updateCloudAgentSettings"),
            accountId: i.string().min(1),
            userId: i.string().min(1),
            customInstructions: i.string(),
          }),
        ])
      r.d(
        t,
        {},
        {
          AP: A,
          DX: B,
          F1: y,
          Fn: F,
          KC: z,
          KX: L,
          LW: N,
          Mc: M,
          N2: P,
          Ns: H,
          Ou: w,
          S8: W,
          Z0: E,
          aV: x,
          b7: $,
          dn: j,
          fs: R,
          iP: _,
          ib: I,
          io: C,
          lz: O,
          mX: "environment-setup-server-configs-v1",
          uG: q,
          uW: U,
          wj: k,
        },
      )
    },
    31926(e, t, r) {
      "use strict"
      var i = r(35553)
      let n = i.object({ connection_id: i.string(), alias: i.string() }),
        s = i
          .string()
          .min(5)
          .max(255)
          .regex(/^oic_[A-Za-z0-9_-]+$/),
        o = i
          .array(i.strictObject({ connection_id: s, alias: i.string().regex(/^[A-Z][A-Z0-9_]{0,63}$/) }))
          .max(16)
          .refine(
            (e) =>
              new Set(e.map(({ connection_id: e }) => e)).size === e.length &&
              new Set(e.map(({ alias: e }) => e)).size === e.length,
          ),
        a = i.object({ accountId: i.string().min(1), userId: i.string().min(1) }),
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
        d = i
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
              null != _(e),
          ),
        p = i
          .strictObject({
            display_name: i.string().trim().min(1).max(200),
            subject_template: d.refine((e) => e === u || e.startsWith(`${u}:`)),
            additional_claims: i
              .record(
                i
                  .string()
                  .max(64)
                  .regex(/^[A-Za-z][A-Za-z0-9_.-]*$/)
                  .refine((e) => !/^oai_/i.test(e) && !c.has(e.toLowerCase())),
                d,
              )
              .refine((e) => Object.keys(e).length <= 16),
            include_actor_email: i.boolean(),
          })
          .refine(
            ({ include_actor_email: e, subject_template: t, additional_claims: r }) =>
              e || [t, ...Object.values(r)].every((e) => !_(e)?.includes("actor_email")),
          ),
        h = i.union([
          p.safeExtend({ azure_tenant_id: i.uuid(), azure_client_id: i.uuid() }),
          p.safeExtend({
            target: i.discriminatedUnion("provider_kind", [
              i.strictObject({
                provider_kind: i.literal("aws"),
                role_arn: i.string().trim().min(1).max(2048),
                region: i.string().trim().min(1).max(64),
              }),
              i.strictObject({
                provider_kind: i.literal("gcp"),
                workload_identity_provider: i.string().trim().min(1).max(256),
                service_account_email: i.string().trim().min(1).max(254),
              }),
            ]),
          }),
        ])
      i.discriminatedUnion("method", [
        a.extend({ method: i.literal("POST"), body: h }),
        a.extend({ method: i.literal("GET"), connectionId: s }),
        a.extend({
          method: i.literal("PATCH"),
          connectionId: s,
          body: p.safeExtend({ configuration_version: i.number().int().positive() }),
        }),
      ])
      let f = i.string().refine((e) => e.trim().length > 0),
        m = i.strictObject({ provider_kind: i.literal("azure"), tenant_id: f.max(64), client_id: f.max(64) }),
        g = { connection_id: s, display_name: i.string(), can_edit: i.boolean().nullish() },
        b = i
          .object({
            ...g,
            provider_kind: i.literal("azure"),
            target: m.optional(),
            azure_tenant_id: f,
            azure_client_id: f,
          })
          .refine(
            ({ target: e, azure_tenant_id: t, azure_client_id: r }) =>
              null == e || (e.tenant_id === t && e.client_id === r),
          ),
        y = i.object({
          ...g,
          provider_kind: i.literal("aws"),
          target: i.strictObject({ provider_kind: i.literal("aws"), role_arn: f.max(2048), region: f.max(64) }),
          azure_tenant_id: i.never().optional(),
          azure_client_id: i.never().optional(),
        }),
        w = i.object({
          ...g,
          provider_kind: i.literal("gcp"),
          target: i.strictObject({
            provider_kind: i.literal("gcp"),
            workload_identity_provider: f.max(256),
            service_account_email: f.max(254),
          }),
          azure_tenant_id: i.never().optional(),
          azure_client_id: i.never().optional(),
        }),
        v = i.discriminatedUnion("provider_kind", [b, y, w]),
        k = {
          issuer: i.url().nullable(),
          audience: i.string().regex(/\S/u).nullable(),
          subject_template: i.string(),
          subject: i.string().min(1).nullable(),
          additional_claims: i.record(i.string(), i.string()),
          include_actor_email: i.boolean(),
          enabled: i.boolean(),
          configuration_version: i.number().int().positive(),
        }
      function _(e) {
        let t = []
        for (let [r, i] of e.matchAll(/{{|}}|{([a-z_]+):?}|[{}]/g))
          if ("{{" !== r && "}}" !== r) {
            if (null == i || !l.has(i)) return
            t.push(i)
          }
        return t
      }
      ;(i.discriminatedUnion("provider_kind", [b.safeExtend(k), y.safeExtend(k), w.safeExtend(k)]),
        a.extend({ configId: i.string().regex(/^[A-Za-z0-9_~-]+$/) }),
        i.object({
          capabilities: i.object({ attachment_provider_kinds: i.array(i.string()) }).optional(),
          items: i.array(v).refine((e) => new Set(e.map(({ connection_id: e }) => e)).size === e.length),
          cursor: i.string().nullable(),
        }),
        r.d(t, {}, { NU: n, Z: o }))
    },
    64497(e, t, r) {
      "use strict"
      var i = r(86697),
        n = r(4482),
        s = r(37891),
        o = r(78191),
        a = r(10631)
      let l = /^--(?:permission|allow-(?:net|ipc|fs-read|fs-write|addons|child-process|worker|inspector|wasi))(?:=|$)/
      function c() {
        return "win32" === process.platform
          ? [(0, s.nQ)()]
          : [(0, s.nQ)(), (0, s.I4)(), (0, i.join)((0, s.Dn)(), "app-server-control", "app-server-control.sock")]
      }
      r.d(
        t,
        {},
        {
          V: function (e) {
            if (null == process.versions.electron) return !0
            let t = n.app.commandLine.hasSwitch(a.Q)
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
              n.app.relaunch({ args: r }),
              n.app.exit(0),
              !1
            )
          },
        },
      )
    },
    99586(e, t, r) {
      "use strict"
      var i = r(85452),
        n = r(35553)
      let s = n.object({
        requirements: n
          .object({
            application: n
              .object({
                network: n
                  .object({
                    enabled: n.boolean(),
                    domains: n.record(
                      n
                        .string()
                        .max(253)
                        .regex(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/),
                      n.enum(["allow", "deny"]),
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
              !(null != e && (0, i.DE9)(e) && (0, i.rT6)(e, i.MjT) >= 0 && 0 > (0, i.rT6)(e, "0.154.0-alpha.1"))
            )
              throw Error("This app server did not provide application network requirements.")
            let n = r.data.requirements?.application?.network
            return n?.enabled !== !0
              ? { kind: "unrestricted" }
              : {
                  kind: "restricted",
                  allowedDomains: new Set(
                    Object.entries(n.domains)
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
      r.d(t, { E: () => E, initializeNodeNetworkPermissions: () => I })
      var i = r(42524),
        n = r(86697),
        s = r(4482),
        o = r(85452),
        a = r(37891),
        l = r(67726),
        c = r(54827),
        u = r(75211),
        d = r(37119),
        p = r(50135),
        h = r(15248),
        f = r(66439),
        m = r(64497),
        g = r(99586)
      let b = {
          messageId: "desktop.workspacePolicyRecovery.title",
          defaultMessage: "Organization settings could not be loaded",
        },
        y = {
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
        k = {
          messageId: "desktop.workspacePolicyRecovery.configDetailWithoutLocation",
          defaultMessage:
            "ChatGPT cannot start until its configuration is fixed. Check config.toml in the app’s configuration folder for the issue below, save your changes, then choose Retry. If you cannot find the setting or your organization manages it, contact your IT administrator.{paragraphBreak}{detail}",
        },
        _ = { messageId: "desktop.workspacePolicyRecovery.retry", defaultMessage: "Retry" },
        S = { messageId: "desktop.workspacePolicyRecovery.signOut", defaultMessage: "Sign out" },
        R = { messageId: "desktop.workspacePolicyRecovery.quit", defaultMessage: "Quit" },
        x = null
      function E() {
        return x
      }
      async function I() {
        ;((x = null),
          await (0, f.z1)(),
          null != process.env.CODEX_HOME && (process.env.CODEX_HOME = (0, n.resolve)(process.env.CODEX_HOME)))
        let e = !1,
          t = !1,
          r = !1,
          E = 0,
          I = null,
          P = null
        for (;;) {
          E += 1
          let f = "home-creation"
          try {
            ;(t ||
              ("win32" === process.platform && s.app.isPackaged
                ? await (async function () {
                    let e = (0, a.Dn)()
                    if ((await (0, i.mkdir)(e, { recursive: !0 })) !== void 0)
                      try {
                        await (0, i.writeFile)((0, n.join)(e, ".desktop-created"), "", { flag: "wx" })
                      } catch (e) {
                        if (e instanceof Error && "code" in e && "EEXIST" === e.code) return
                        ;(0, a.getLogger)().warning("Failed to record Windows desktop home ownership", {
                          safe: {},
                          sensitive: { error: e },
                        })
                      }
                  })()
                : await (0, i.mkdir)((0, a.Dn)(), { recursive: !0 }),
              (t = !0)),
              (f = "preparation"),
              (P =
                P ??
                Promise.resolve()
                  .then(async () => {
                    let e = !1
                    if ("win32" === process.platform) {
                      let t = (0, a.Dn)(),
                        r = new p.r((0, n.join)(t, "config.toml"), new c.RL((0, n.join)(t, ".codex-global-state.json")))
                      e = !0 === r.getEffective(o.Szl.runCodexInWsl.key) && (await (0, a.Bw)()) != null
                    }
                    return (0, a.NU)(
                      {
                        hostConfig: u.a,
                        spawnInsideWsl: e,
                        repoRoot: (0, n.join)(s.app.getAppPath(), ".."),
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
                    throw ((P = null), e)
                  })))
            let d = await (async function (e) {
              let t,
                r = performance.now()
              try {
                let i = await Promise.race([
                  e,
                  new Promise((e, r) => {
                    t = setTimeout(() => {
                      r(new a.kK("timeout"))
                    }, 12e4)
                  }),
                ])
                if (performance.now() - r >= 12e4) throw new a.kK("timeout")
                return i
              } finally {
                clearTimeout(t)
              }
            })(P)
            ;((f = "policy-read"), (I = I ?? performance.now() + 6e4), (r = r || e))
            let { appServerVersion: h, response: b } = await (0, a.oZ)(d, {
              signOut: e,
              timeoutMs: Math.max(1, Math.min(3e4, I - performance.now())),
            })
            f = "policy-validation"
            let y = (0, g.bA)(h, b)
            if (((f = "node-permissions"), !(0, m.V)(y))) return !1
            return ((x = y), !0)
          } catch (x) {
            let t
            if (!r && (0, h.R)(x)) {
              ;((e = !0), (E = 0), (I = null))
              continue
            }
            let i = x instanceof a.kK ? x.reason : f,
              o = 1e3 * 2 ** (E - 1),
              l =
                "policy-read" === f &&
                null != I &&
                !e &&
                x instanceof a.kK &&
                x.retryable &&
                E < 3 &&
                performance.now() + o < I
            if (
              ((0, a.getLogger)().warning("Desktop startup policy read failed", {
                safe: { reason: i, phase: f, attempt: E, retrying: l },
              }),
              l)
            ) {
              await new Promise((e) => setTimeout(e, o))
              continue
            }
            ;(await s.app.whenReady(), await (0, d.dh)((0, n.join)(s.app.getAppPath(), "..")))
            let c = (0, d.F$)(),
              u = x instanceof a.UX ? x.configError : null,
              p = [c.formatMessage(_)]
            ;(null == u && p.push(c.formatMessage(S)), p.push(c.formatMessage(R)))
            let m = p.length - 1
            t =
              null == u
                ? c.formatMessage(y)
                : null == u.filePath
                  ? c.formatMessage({ ...k, values: { detail: u.detail, paragraphBreak: "\n\n" } })
                  : c.formatMessage({
                      ...v,
                      values: {
                        location: [u.filePath, u.line, u.column].filter((e) => null != e).join(":"),
                        detail: u.detail,
                        paragraphBreak: "\n\n",
                        lineBreak: "\n",
                      },
                    })
            let { response: g } = await s.dialog.showMessageBox({
              type: "warning",
              message: null == u ? c.formatMessage(b) : c.formatMessage(w),
              detail: t,
              buttons: p,
              defaultId: 0,
              cancelId: m,
              noLink: !0,
            })
            if (g === m) return (s.app.exit(0), !1)
            ;((e = null == u && 1 === g), (E = 0), (I = null), "preparation" !== f && (P = null))
          }
        }
      }
    },
    95425(e, t, r) {
      "use strict"
      var i = r(58248),
        n = r(35553)
      let s = n.array(
        n.object({
          accountId: n.string().min(1),
          userId: n.string().min(1),
          hostId: n.literal("local"),
          conversationId: n.string().min(1),
          selectedTask: n.string().min(1),
          isRevert: n.boolean().optional(),
          completion: i.c3.nullable(),
        }),
      )
      r.d(t, {}, { X: "electron-conversational-onboarding-completions-v1", q: s })
    },
    67726(e, t, r) {
      "use strict"
      let i = "CODEX_ELECTRON_RESOURCES_PATH"
      r.d(
        t,
        {},
        {
          Z: i,
          b: function ({ env: e, isPackaged: t, resourcesPath: r }) {
            return t ? r : e[i]?.trim() || r
          },
        },
      )
    },
    54827(e, t, r) {
      "use strict"
      r.d(t, {
        Qe: () => F,
        K6: () => B,
        X3: () => T,
        gr: () => O,
        RW: () => x,
        Q: () => z,
        IA: () => N,
        vb: () => j,
        Mt: () => Y,
        hw: () => Z,
        Lz: () => K,
        vk: () => ee,
        RL: () => eh,
        $6: () => E,
        aX: () => $,
        lW: () => G,
        hO: () => U,
        eH: () => L,
        Wn: () => W,
        MP: () => et,
        Oq: () => R,
        I9: () => H,
        T_: () => M,
        LP: () => J,
        DD: () => C,
        wk: () => D,
        vK: () => q,
        gw: () => Q,
        wU: () => A,
        MR: () => X,
        Tw: () => V,
      })
      var i = r(78335),
        n = r(89477),
        s = r(42524),
        o = r(86697),
        a = r(68543),
        l = r(8857),
        c = r.n(l),
        u = r(85452),
        d = r(55924),
        p = r(17911),
        h = r(37891),
        f = r(35553)
      let m = "electron-account-renderer-state-v1",
        g = f.object({
          owner: f.string().nullable(),
          inactive: f.record(
            f.string(),
            f.object({ atoms: f.record(f.string(), f.unknown()), globals: f.record(f.string(), f.unknown()) }),
          ),
        }),
        b = new Set(Object.values(u.aiU))
      function y(e) {
        return (0, i.createHash)("sha256")
          .update(JSON.stringify([e.userId, e.accountId]))
          .digest("hex")
      }
      var w = r(95425),
        v = r(73891),
        k = r(31447),
        _ = r(14416),
        S = r(70909)
      let R = "electron-persisted-atom-state",
        x = "electron-browser-auth-operations",
        E = "electron-initial-follow-up-queue-mode",
        I = "electron-custom-runtime-state",
        P = "electron-custom-runtime-outbox-state",
        j = "electron-cloud-worktree-environments",
        A = "electron-worktree-cleanup-buffer-start-ms",
        O = "electron-avatar-overlay-open",
        T = "electron-avatar-overlay-bounds",
        C = "electron-remote-hosted-pip-content-max-display-size",
        D = "electron-remote-hosted-pip-task-visibility-state",
        M = "electron-remote-control-client-enrollments",
        U = "electron-local-remote-control-environment-id",
        L = "electron-local-remote-control-installation-id",
        B = "electron-automations-installation-id",
        F = "electron-automations-habitat-migration-state",
        N = "electron-chrome-extension-sync-managed-plugin-ids",
        z = "electron-browser-extension-recently-used",
        W = "electron-mac-push-deregistration-token",
        $ = "electron-internal-update-cdn-enabled",
        H = "electron-prefer-mxc-enabled",
        q = "electron-windows-core-runtime-frameworks-enabled",
        Q = "electron-windows-primary-runtime-frameworks-enabled",
        X = "electron-wsl-remote-connections-migrated",
        V = "electron-wsl-remote-connections-migration-enabled",
        K = "electron-desktop-otraces-sample-rate",
        G = "electron-browser-download-history",
        Z = "electron-completed-local-data-migration-ids",
        J = "electron-remote-control-config-migration-completed",
        Y = "electron-codex-app-config-applied-remote-declarations",
        ee = "environment-catalog-cache-v2",
        et = "pending-cloud-parent-keys",
        er = [100, 200, 400],
        ei = (0, h.vB)("global-state"),
        en = f.object({ userId: f.string(), accountId: f.string(), workspaceOrder: f.array(f.string()) }),
        es = f.object({
          left: f.number(),
          top: f.number(),
          width: f.number().positive(),
          height: f.number().positive(),
        }),
        eo = f.object({ x: f.number(), y: f.number(), width: f.number().positive(), height: f.number().positive() }),
        ea = f.enum(["top-start", "top-end", "bottom-start", "bottom-end"]),
        el = f.enum(["shown", "hidden"]),
        ec = f
          .array(
            f.object({
              canCancel: f.boolean(),
              canPause: f.boolean(),
              canResume: f.boolean(),
              conversationId: f.string().nullable(),
              exists: f.boolean(),
              filename: f.string(),
              id: f.string(),
              path: f.string(),
              receivedBytes: f.number(),
              source: f.enum(["agent", "user"]),
              startedAtMs: f.number(),
              status: f.enum(["started", "in_progress", "paused", "failed", "canceled", "complete"]),
              totalBytes: f.number(),
              updatedAtMs: f.number(),
              url: f.string(),
            }),
          )
          .max(200),
        eu = f.union([ec, f.object({ downloads: ec, version: f.literal(1) })]),
        ed = f.object({
          isFreelyPositioned: f.boolean().optional(),
          snapPosition: f
            .enum(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"])
            .nullable()
            .optional(),
          x: f.number(),
          y: f.number(),
          width: f.number().positive().optional(),
          height: f.number().positive().optional(),
          anchor: eo.optional(),
          displayBounds: eo.optional(),
          displayId: f.number().optional(),
          mascot: es.optional(),
          placement: ea.optional(),
          tray: es.nullable().optional(),
        }),
        ep = Object.fromEntries(
          Object.entries({
            "latex-project-main-files": f.array(f.object({ root: f.string(), mainFile: f.string() })).max(100),
            "hotkey-window-home-placement": v.Hv,
            [w.X]: w.q,
            [S.K4]: S.mA,
            [k.o]: k.N,
            [j]: f.record(f.string(), f.array(f.string())),
            "electron-main-window-bounds": f.object({
              x: f.number(),
              y: f.number(),
              width: f.number(),
              height: f.number(),
              isMaximized: f.boolean().optional(),
            }),
            [O]: f.boolean(),
            ..._.W,
            [T]: ed.extend({
              byDisplayId: f.record(f.string(), ed).optional(),
              byResolution: f.record(f.string(), ed).optional(),
            }),
            [C]: f.number().positive(),
            [D]: f.record(f.string(), el),
            [R]: f.record(f.string(), f.unknown()),
            [m]: g,
            [ee]: p.iP,
            [et]: f.record(f.string(), f.string()),
            [E]: f.enum(["queue", "steer"]),
            [I]: f.unknown(),
            [P]: f.array(
              f.object({
                callId: f.string(),
                conversationId: f.string().transform(u.JXB),
                message: f.string(),
                sentAtMs: f.number(),
                turnId: f.string(),
              }),
            ),
            [M]: f.record(
              f.string(),
              f.object({
                accountUserId: f.string(),
                algorithm: f.literal("ecdsa_p256_sha256"),
                clientId: f.string(),
                keyId: f.string(),
                protectionClass: f.enum(["hardware_secure_enclave", "hardware_tpm", "os_protected_nonextractable"]),
                publicKeySpkiDerBase64: f.string(),
              }),
            ),
            [U]: f.string(),
            [L]: f.string(),
            [B]: f.uuid(),
            [F]: f.record(f.string(), f.enum(["declined", "in_progress", "complete"])),
            [N]: f.array(f.string()),
            [z]: f.record(f.string(), f.array(f.string())),
            [W]: f.union([
              f.string(),
              f.strictObject({ token: f.string(), isFedramp: f.literal(!0) }),
              f.object({
                kind: f.literal("workspace"),
                token: f.string(),
                isFedramp: f.boolean(),
                backendOrigin: f.string().refine((e) => {
                  let t = URL.parse(e)
                  return t?.protocol === "https:" && t.origin === e
                }),
                accountRoutingOverride: f.enum(["NO_CONSTRAINT", "us", "us_cr", "eu_cr"]),
              }),
            ]),
            [$]: f.boolean(),
            [H]: f.boolean(),
            [q]: f.boolean(),
            [Q]: f.boolean(),
            [X]: f.boolean(),
            [V]: f.boolean(),
            "electron-desktop-tabs-rollout-enabled": f.boolean(),
            [K]: f.number().min(0).max(1),
            [G]: eu,
            [Z]: f.array(f.string()),
            [J]: f.boolean(),
            [Y]: f.record(f.string(), f.array(f.string())),
            [A]: f.number(),
            [x]: d.w,
          }).map(([e, t]) => [e, t.optional()]),
        )
      class eh {
        logger = (0, h.vB)("global-state")
        state
        changeListeners = new Map()
        filePath
        persistDebounced
        persistScheduledForAtoms = !1
        persistScheduledForCustomRuntime = !1
        persistScheduled = !1
        persistQueued = Promise.resolve()
        archivesPersisted = !1
        constructor(e) {
          ;((this.filePath = e),
            (this.state = (function (e) {
              if (!(0, n.existsSync)(e)) return new Map()
              let t = em(e)
              if (null != t) return t
              let r = em(`${e}.bak`)
              return null != r
                ? (ei().warning("Loaded global state from backup", { safe: {}, sensitive: {} }), r)
                : new Map()
            })(this.filePath)),
            (this.persistDebounced = (0, u.sg1)(() => {
              this.persistScheduledForAtoms &&
                ((this.persistScheduledForAtoms = !1), this.queueGlobalStatePersistence())
            }, 500)),
            this.selectRendererOwner(null))
        }
        get hasAccountScopedRendererState() {
          return null != this.get(m)
        }
        beginRendererAccountSwitch(e) {
          this.hasAccountScopedRendererState ||
            (this.set(m, { owner: null == e ? null : y(e), inactive: {} }), null == e && this.selectRendererOwner(null))
        }
        finishRendererAccountSwitch(e, t) {
          let r = en.safeParse(this.get(R)?.[u.AKB])
          if ((this.selectRendererOwner(t), null == t || (e.userId === t.userId && e.accountId === t.accountId))) return
          let i = this.get(R) ?? {},
            n = en.safeParse(i[u.AKB])
          if (n.success && n.data.userId === t.userId && n.data.accountId === t.accountId) return
          let s = {
            userId: t.userId,
            accountId: t.accountId,
            workspaceOrder: r.success && r.data.userId === t.userId ? r.data.workspaceOrder : [],
          }
          this.set(R, { ...i, [u.AKB]: s })
        }
        selectRendererOwner(e) {
          let t = this.get(m),
            r = null == e ? null : y(e)
          if (null == t || (null != r && t.owner === r)) return
          let i = this.get(R) ?? {},
            n = { ...t.inactive },
            s = Object.fromEntries(u.nh0.flatMap((e) => (this.state.has(e) ? [[e, this.state.get(e)]] : [])))
          null != t.owner &&
            (n[t.owner] = { atoms: Object.fromEntries(Object.entries(i).filter(([e]) => !b.has(e))), globals: s })
          let o = null == r ? void 0 : n[r]
          null != r && delete n[r]
          let a = Object.fromEntries(Object.entries(i).filter(([e]) => b.has(e)))
          for (let e of (this.state.set(R, { ...o?.atoms, ...a }), u.nh0))
            null != o && Object.hasOwn(o.globals, e) ? this.state.set(e, o.globals[e]) : this.state.delete(e)
          for (let e of (this.set(m, { owner: r, inactive: n }), [R, ...u.nh0]))
            this.changeListeners.get(e)?.forEach((e) => e())
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
          let t = this.state.get(e)
          return void 0 !== t && null != t ? t : ((0, u.yDt)(e) ?? null)
        }
        getStored(e) {
          return this.state.get(e)
        }
        set(e, t) {
          ;(void 0 === t ? this.state.delete(e) : this.state.set(e, t),
            this.persistForKey(e),
            this.changeListeners.get(e)?.forEach((e) => e()))
        }
        update(e, t) {
          let r = t(this.state.has(e) ? this.state.get(e) : null)
          ;(void 0 === r ? this.state.delete(e) : this.state.set(e, r),
            this.persistForKey(e),
            this.changeListeners.get(e)?.forEach((e) => e()))
        }
        updateAndPersist(e, t) {
          return (
            (this.persistQueued = this.persistQueued
              .catch(() => void 0)
              .then(() =>
                e_(() => {
                  let r = this.getStored(e),
                    i = t(r ?? null),
                    n = e === k.o
                  if (n && this.archivesPersisted && c()(r, i)) return
                  n && (this.archivesPersisted = !1)
                  let s = new Map(this.state)
                  void 0 === i ? s.delete(e) : s.set(e, i)
                  let o = eg(s)
                  ;(ev(this.filePath, o), void 0 === i ? this.state.delete(e) : this.state.set(e, i))
                  try {
                    ;(ev(`${this.filePath}.bak`, o), n && (this.archivesPersisted = !0))
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
          ;(this.state.delete(e), this.persistForKey(e), this.changeListeners.get(e)?.forEach((e) => e()))
        }
        flush() {
          return this.flushWith(eb)
        }
        flushOrThrow() {
          return this.flushWith(ey)
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
          if ((e === k.o && (this.archivesPersisted = !1), e === R)) {
            ;((this.persistScheduledForAtoms = !0), this.persistDebounced())
            return
          }
          if (e === I || e === P) {
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
              .then(() => ((this.persistScheduled = !1), eb(this.filePath, this.state)))))
        }
      }
      let ef = new Set(Object.keys(ep))
      function em(e) {
        if (!(0, n.existsSync)(e)) return null
        try {
          let t = (0, n.readFileSync)(e, "utf8"),
            r = JSON.parse(t)
          if (!r || "object" != typeof r) throw Error("Expected global state to be a JSON object")
          let i = []
          for (let [e, t] of Object.entries(r)) {
            if (ef.has(e) && ep[e]?.safeParse(t).success === !1) {
              ei().warning("Dropping invalid global state for key", { safe: { key: e }, sensitive: {} })
              continue
            }
            i.push([e, t])
          }
          return new Map(i)
        } catch (e) {
          return (ei().warning("Failed to load global state", { safe: {}, sensitive: { error: e } }), null)
        }
      }
      function eg(e) {
        let t = {}
        for (let [r, i] of e.entries()) void 0 !== i && (t[r] = i)
        return JSON.stringify(t)
      }
      async function eb(e, t) {
        try {
          await ey(e, t)
        } catch (e) {
          ei().warning("Failed to persist global state", { safe: {}, sensitive: { error: e } })
        }
      }
      async function ey(e, t) {
        let r = eg(t)
        ;(await ek(e, r), await ek(`${e}.bak`, r))
      }
      function ew(e) {
        return (0, o.join)((0, o.dirname)(e), `.${(0, o.basename)(e)}.tmp-${Date.now()}-${(0, i.randomUUID)()}`)
      }
      function ev(e, t) {
        let r = ew(e)
        try {
          ;((0, n.writeFileSync)(r, t, "utf8"), (0, n.renameSync)(r, e))
        } catch (e) {
          try {
            ;(0, n.rmSync)(r, { force: !0 })
          } catch {}
          throw e
        }
      }
      async function ek(e, t) {
        let r = ew(e)
        try {
          ;(await (0, s.writeFile)(r, t, "utf8"), await e_(() => (0, s.rename)(r, e)))
        } catch (e) {
          throw (await (0, s.rm)(r, { force: !0 }).catch(() => void 0), e)
        }
      }
      async function e_(e) {
        for (let t = 0; ; t += 1)
          try {
            await e()
            return
          } catch (r) {
            let e = er[t]
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
      let i = "local"
      r.d(t, {}, { a: { id: i, display_name: "Local", kind: "local" }, n: i })
    },
    73891(e, t, r) {
      "use strict"
      var i = r(74438),
        n = r.n(i),
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
      function d(e, t, r, i) {
        let n = -1,
          s = i.captureDistance
        for (let [r, i] of t.entries()) {
          let t = Math.abs(e - i)
          t <= s && ((n = r), (s = t))
        }
        let o = Math.abs(e - t[r]),
          a = n !== r && s <= 4 && o > s + 4
        return r >= 0 && o <= i.releaseDistance && !a ? r : n
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
              x: n()("number" == typeof e.x ? t.x + e.x * t.width : r.x[o.indexOf(e.x)], t.x, t.x + t.width),
              y: n()("number" == typeof e.y ? t.y + e.y * t.height : r.y[a.indexOf(e.y)], t.y, t.y + t.height),
            }
          },
          Hv: c,
          fz: function (e, t, r) {
            let i = d(e.x, t.x, r.x, t)
            return { x: 0 === i || 4 === i ? 2 : i, y: d(e.y, t.y, r.y, t) }
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
    31447(e, t, r) {
      "use strict"
      var i = r(85452),
        n = r(35553)
      let s = {
          id: n.string(),
          owner: n.string(),
          hostId: n.string(),
          phase: n.enum(["detaching", "queued", "running", "reattaching", "failed", "completed"]),
        },
        o = n.array(
          n.union([
            n.object({
              ...s,
              kind: n.literal("attached").default("attached"),
              threadId: n.string(),
              root: n.string().transform(i.PUz),
              environmentId: n.string().min(1).optional(),
              attachmentIdentityKey: n.string().optional(),
              cwd: n.string(),
              fromModel: n.literal(!0).optional(),
              archivedWithThread: n.literal(!0).optional(),
              silent: n.boolean().optional(),
              outcome: n.enum(["archived", "retained", "unsupported", "failed"]).optional(),
              notified: n.literal(!0).optional(),
              pullRequestIdentityKeys: n.array(n.string()),
            }),
            n.object({
              ...s,
              kind: n.literal("thread"),
              threadId: n.string(),
              cwd: n.string(),
              notBefore: n.number(),
              silent: n.boolean().optional(),
            }),
            n.object({ ...s, kind: n.literal("automatic"), revision: n.number() }),
          ]),
        )
      r.d(t, {}, { N: o, o: "electron-managed-worktree-archives" })
    },
    37119(e, t, r) {
      "use strict"
      var i = r(42524),
        n = r(86697),
        s = r(4482),
        o = r(85452),
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
              ? (0, n.join)(s.app.getAppPath(), "native-menu-locales")
              : (0, n.join)(e, "webview", "src", "locales"),
            f = Array.from(new Set([r, u, o.oeH[a], null == p ? void 0 : `${a}-${p}`, a]))
              .filter((e) => null != e)
              .map((e) => (0, n.join)(h, `${e}.json`))
          return new d(
            (
              await Promise.all(
                f.map(async (e) => {
                  try {
                    return l.parse(JSON.parse(await (0, i.readFile)(e, "utf-8")))
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
              i = t
            try {
              if (((i = i ?? s.app.getLocale()), c?.repoRoot === e && c.locale === i)) return
              let t = await d.load(e, i)
              if (r !== u) return
              let n = c?.nativeIntl
              ;(n?.replaceMessagesFrom(t), (c = { repoRoot: e, locale: i, nativeIntl: n ?? t }))
            } catch {
              if (r !== u) return
              let e = d.createDefault(),
                t = c?.nativeIntl
              ;(t?.replaceMessagesFrom(e), (c = { repoRoot: null, locale: i ?? "en", nativeIntl: t ?? e }))
            }
          },
        },
      )
    },
    14416(e, t, r) {
      "use strict"
      var i = r(35553)
      let n = "electron-mini-orbit-onboarding-account-ids",
        s = { [n]: i.array(i.string()) }
      r.d(t, {}, { W: s, Y: n })
    },
    50135(e, t, r) {
      "use strict"
      var i = r(89477),
        n = r(85452),
        s = r(37891),
        o = r(27511),
        a = r(35553),
        l = r(54827)
      let c = (0, s.vB)("settings-store"),
        u = "enter-behavior",
        d = n.aiU.PROJECTLESS_ONBOARDING_COMPLETED,
        p = a.lazy(() => a.union([a.string(), a.number(), a.boolean(), a.null(), a.array(p), a.record(a.string(), p)])),
        h = a.object({ desktop: a.record(a.string(), a.unknown()).optional() }).loose(),
        f = a.object({
          requirements: a
            .object({
              application: a
                .object({
                  storage: a
                    .object({
                      defaultProjectParent: n.Szl.defaultProjectParent.schema.optional(),
                      projectlessWorkspaceRoot: n.Szl.projectlessWorkspaceRoot.schema.optional(),
                    })
                    .nullish(),
                })
                .nullish(),
            })
            .nullable(),
        })
      function m(e) {
        let t = new Map()
        for (let [r, i] of Object.entries(e)) {
          let e = (0, n.crQ)(r)
          if (null == e) continue
          let s = (0, n.Q6s)(e.key).safeParse((0, n.Q4s)((0, n.Q6s)(e.key), i))
          if (!s.success) {
            c().warning("Dropping invalid desktop setting", { safe: { key: r }, sensitive: {} })
            continue
          }
          t.set(e.key, s.data)
        }
        return t
      }
      function g(e, t) {
        if (0 === e.size) return
        let r = t.getStored(l.Oq),
          i = r ? { ...r } : null,
          s = !1
        for (let r of e) {
          let e = (0, n.crQ)(r)
          switch (
            (r === n.Szl.composerEnterBehavior.key &&
              null != i &&
              Object.prototype.hasOwnProperty.call(i, u) &&
              (delete i[u], (s = !0)),
            e.hostStorage.kind)
          ) {
            case "configuration":
            case "global-state":
              t.delete(e.hostStorage.key)
              break
            case "persisted-atom":
              null != i &&
                Object.prototype.hasOwnProperty.call(i, e.hostStorage.key) &&
                (delete i[e.hostStorage.key], (s = !0))
          }
        }
        s && t.set(l.Oq, 0 === Object.keys(i ?? {}).length ? void 0 : (i ?? void 0))
      }
      r.d(
        t,
        {},
        {
          m: f,
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
                  if (!(0, i.existsSync)(e)) return {}
                  try {
                    var t = h.parse((0, o.qg)((0, i.readFileSync)(e, "utf8"))).desktop ?? {}
                    let r = {}
                    for (let [e, i] of Object.entries(t)) {
                      let t = p.safeParse(i)
                      if (!t.success) {
                        c().warning("Dropping unsupported desktop config value", { safe: { key: e }, sensitive: {} })
                        continue
                      }
                      r[e] = t.data
                    }
                    return r
                  } catch (e) {
                    return (
                      c().warning("Failed to load desktop settings from config.toml", {
                        safe: {},
                        sensitive: { error: e },
                      }),
                      {}
                    )
                  }
                })(this.filePath)),
                (this.state = m(this.desktopConfig)),
                (function (e, t, r) {
                  let i = r.getStored(l.Oq)
                  for (let s of n.fsg) {
                    if (e.has(s.key)) continue
                    let o = (function (e, t, r) {
                      let { hostStorage: i } = e
                      switch (i.kind) {
                        case "configuration": {
                          let s = t.getStored(i.key)
                          if (void 0 !== s) return s
                          if (
                            e.key === n.Szl.composerEnterBehavior.key &&
                            null != r &&
                            Object.prototype.hasOwnProperty.call(r, u)
                          )
                            return r[u]
                          if (e.key === n.Szl.keepRemoteControlAwakeWhilePluggedIn.key)
                            return t.getStored(n.Szl.preventSleepWhileRunning.key)
                          return
                        }
                        case "global-state":
                          return t.getStored(i.key)
                        case "persisted-atom":
                          if (null == r || !Object.prototype.hasOwnProperty.call(r, i.key)) return
                          if (e.key === n.kWF.defaultServiceTier.key) return (0, n.E$9)(r)
                          return r[i.key]
                      }
                    })(s, r, i)
                    if (void 0 === o) continue
                    let a = (0, n.Q6s)(s.key).safeParse(o)
                    if (!a.success) {
                      c().warning("Dropping invalid migrated setting", { safe: { key: s.key }, sensitive: {} })
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
              let e = this.globalState.getStored(l.$6)
              if (null != e) return e
              let t = this.globalState.getStored(l.Oq),
                r = t?.[d] === !0,
                i = Object.keys(this.globalState.getStored(n.Q2Y.LOCAL_PROJECTS) ?? {}).length > 0,
                s = r || i ? "queue" : "steer"
              return (this.globalState.set(l.$6, s), await this.globalState.flush(), s)
            }
            async initialize(e) {
              let t = await this.captureInitialFollowUpQueueMode(),
                r = new Map([...this.changeListeners.keys()].map((e) => [e, this.get(e)]))
              if (void 0 !== e.storageRequirements) {
                this.managedStorage.clear()
                let t = e.storageRequirements?.application?.storage
                for (let e of [n.Szl.defaultProjectParent.key, n.Szl.projectlessWorkspaceRoot.key]) {
                  let r = t?.[e]
                  null != r &&
                    (this.managedStorage.set(e, r),
                    this.pendingWrites.delete(e),
                    this.pendingLegacyMigrations.delete(e))
                }
              }
              ;((this.configClient = e), (this.desktopConfig = e.config.desktop ?? {}))
              let i = m(this.desktopConfig),
                s = new Set()
              for (let e of n.fsg)
                if (!this.pendingWrites.has(e.key)) {
                  if (i.has(e.key)) {
                    ;(this.state.set(e.key, i.get(e.key)), this.pendingLegacyMigrations.delete(e.key) && s.add(e.key))
                    continue
                  }
                  this.pendingLegacyMigrations.has(e.key) || this.state.delete(e.key)
                }
              for (let [e, t] of this.managedStorage) (this.state.set(e, t), (this.desktopConfig[e] = t))
              for (let [e, i] of (this.migrateFollowUpQueueMode(t), r))
                Object.is(i, this.get(e)) || this.notifyChangeListeners(e)
              ;(g(s, this.globalState), await this.persistPendingSettings())
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
              return this.state.get(e)
            }
            getEffective(e) {
              return this.get(e) ?? (0, n.crQ)(e).default
            }
            set(e, t) {
              this.managedStorage.has(e) || (this.setValue(e, t), this.persistPendingSettings())
            }
            setAndPersist(e, t) {
              if (null == this.configClient) throw Error("Settings persistence is not initialized")
              if (this.managedStorage.has(e)) throw Error("This setting is managed by your organization")
              let r = this.setValue(e, t, { rollbackOnFailure: !0 })
              return this.persistPendingSettings({ reportError: !0 }).then(
                () => {
                  ;((r.status = "saved"), (r.previous = void 0))
                },
                (t) => {
                  if ("saved" !== r.status) {
                    if (((r.status = "failed"), this.pendingWrites.get(e) === r)) {
                      let t = r.previous
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
              let i = this.get(e),
                s = (0, n.Q6s)(e).parse(t),
                o = {
                  value: s,
                  status: "pending",
                  previous: r
                    ? {
                        value: i,
                        hadValue: this.state.has(e),
                        configuredValue: this.desktopConfig[e],
                        hadConfiguredValue: Object.hasOwn(this.desktopConfig, e),
                        write: this.pendingWrites.get(e),
                      }
                    : void 0,
                }
              return (
                this.state.set(e, s),
                (this.desktopConfig[e] = (0, n.uvL)((0, n.Q6s)(e), s)),
                this.pendingWrites.set(e, o),
                Object.is(i, s) || this.notifyChangeListeners(e),
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
              let t = n.Szl.followUpQueueMode.key,
                r = this.get(t),
                i = this.pendingWrites.has(t) || "queue" === this.globalState.getStored(t),
                s = null == r || ("queue" === r && !i)
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
                  i = new Map(this.pendingWrites),
                  s = new Map(e)
                for (let [e, t] of i) s.set(e, t.value)
                if (0 !== s.size || void 0 !== r)
                  try {
                    let o = []
                    for (let [e, t] of (void 0 !== r &&
                      o.push({ keyPath: "desktop.migratedFollowUpQueueToSteer", mergeStrategy: "replace", value: r }),
                    s))
                      o.push({ keyPath: `desktop.${e}`, mergeStrategy: "replace", value: (0, n.uvL)((0, n.Q6s)(e), t) })
                    for (let [i, n] of (await t.batchWriteConfigValues({ edits: o }),
                    this.pendingFollowUpMigration === r && (this.pendingFollowUpMigration = void 0),
                    e))
                      this.pendingLegacyMigrations.get(i) === n && this.pendingLegacyMigrations.delete(i)
                    for (let [e, t] of i)
                      ((t.status = "saved"),
                        (t.previous = void 0),
                        this.pendingWrites.get(e) === t && this.pendingWrites.delete(e))
                    ;(g(new Set(e.keys()), this.globalState), !0 === r && t.onFollowUpDefaultMigrated?.())
                  } catch (e) {
                    throw (c().warning("Failed to persist desktop settings", { safe: {}, sensitive: { error: e } }), e)
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
      var i = r(85452),
        n = r(37891),
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
              (0, i.sQ3)(t) ||
              (t instanceof n.kK && "auth" === t.reason) ||
              (r.success && o.has(r.data.message)) ||
              (t instanceof Error && null != t.cause && e(t.cause))
            )
          },
        },
      )
    },
    66439(e, t, r) {
      "use strict"
      r.d(t, { z1: () => m, Yq: () => g, hq: () => f })
      var i = r(86697),
        n = r(4482),
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
              i = {}
            for (let e of new Set([...Object.keys(t), ...Object.keys(r)])) t[e] !== r[e] && (i[e] = r[e] ?? null)
            ;((t = r), Object.keys(i).length > 0 && e(i))
          }
        return (
          h.add(r),
          () => {
            h.delete(r)
          }
        )
      }
      async function m() {
        return g({ caller: "startup", retryFailed: !1 })
      }
      async function g({ caller: e = "startup", retryFailed: t = !0, timeoutMs: r = 5e3 } = {}) {
        if (p?.status === "loaded" || (null != p && !t))
          return (function (e, t) {
            return { ...e, caller: t, resultSource: "cache" }
          })(p, e)
        if (null != u && null != d && d >= r) return u.then((t) => ({ ...t, caller: e }))
        let i = (async function (e, t) {
          let r = Date.now()
          n.app.isPackaged || (l(process.env), h.forEach((e) => e()))
          let i = new AbortController(),
            o = null,
            a = await Promise.race([
              (0, s.MN)({ interactive: !0, extraEnv: { [s.$z]: "1" }, signal: i.signal })
                .then((e) => ({ status: "loaded", userEnv: e }))
                .catch((e) => ({ status: "failed", error: e })),
              new Promise((e) => {
                ;(o = setTimeout(() => {
                  ;(i.abort(), e({ status: "timed_out" }))
                }, t)).unref()
              }),
            ]).finally(() => {
              null != o && clearTimeout(o)
            })
          if ("loaded" === a.status)
            return (
              Object.assign(process.env, a.userEnv),
              null != c && (process.env.CODEX_HOME = c),
              n.app.isPackaged || l(process.env),
              h.forEach((e) => e()),
              { status: "loaded", path: process.env.PATH ?? null, ...b(r, e, t) }
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
                pathEntryCount: y(process.env.PATH ?? null),
                resultSource: "load",
                status: a.status,
                timeoutMs: t,
              },
              sensitive: { detail: u, path: process.env.PATH ?? null },
            }),
            { status: a.status, detail: u, path: process.env.PATH ?? null, ...b(r, e, t) }
          )
        })(e, r)
        ;((u = i), (d = r))
        try {
          var o
          let e = await i
          return ((o = e), (p?.status !== "loaded" || "loaded" === o.status) && (p = o), e)
        } finally {
          u === i && ((u = null), (d = null))
        }
      }
      function b(e, t, r) {
        let i = process.env.PATH ?? null
        return { caller: t, durationMs: Date.now() - e, pathEntryCount: y(i), resultSource: "load", timeoutMs: r }
      }
      function y(e) {
        return null == e || "" === e ? 0 : e.split(i.delimiter).length
      }
    },
    70909(e, t, r) {
      "use strict"
      var i = r(35553)
      let n = i.record(i.string(), i.array(i.string().min(1))),
        s = i.object({
          version: i.literal(1),
          unreadByIdentity: i.record(i.string(), n),
          legacyMigration: i
            .object({
              identityKey: i.string(),
              unreadThreadIdsByHostId: n,
              adoptedHostIds: i.record(i.string(), i.string()),
              cleared: i.boolean().optional(),
            })
            .optional(),
        })
      r.d(t, {}, { K4: "electron-thread-read-state-v1", mA: s, v7: n, yz: "unread-thread-ids-by-host-v1" })
    },
    7715(e, t, r) {
      "use strict"
      let i,
        n = Symbol("workers-module")
      ;(Symbol.dispose || (Symbol.dispose = Symbol.for("dispose")),
        Symbol.asyncDispose || (Symbol.asyncDispose = Symbol.for("asyncDispose")),
        Promise.withResolvers ||
          (Promise.withResolvers = function () {
            let e, t
            return {
              promise: new Promise((r, i) => {
                ;((e = r), (t = i))
              }),
              resolve: e,
              reject: t,
            }
          }))
      let s = globalThis[n],
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
          case k.prototype:
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
              i = this.call(e, t).pull()
            return (
              i instanceof Promise
                ? (r = i.then((e) => {
                    e.dispose()
                  }))
                : (i.dispose(), (r = Promise.resolve())),
              { promise: r }
            )
          }
        },
        m = class extends f {
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
      let g = new m(Error("Attempted to use RPC stub after it has been disposed.")),
        b = (e, t, r) => e.call(t, r),
        y = Symbol("realStub"),
        w = {
          apply(e, t, r) {
            let i = e.raw
            return new k(b(i.hook, i.pathIfPromise || [], R.fromAppParams(r)), [])
          },
          get(e, t, r) {
            let i = e.raw
            return t === y
              ? i
              : t in k.prototype
                ? i[t]
                : "string" == typeof t
                  ? new k(i.hook, i.pathIfPromise ? [...i.pathIfPromise, t] : [t])
                  : t !== Symbol.dispose || (i.pathIfPromise && 0 != i.pathIfPromise.length)
                    ? void 0
                    : () => {
                        ;(i.hook.dispose(), (i.hook = g))
                      }
          },
          has(e, t) {
            let r = e.raw
            return (
              t === y ||
              (t in k.prototype
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
          set(e, t, r, i) {
            throw Error("Can't assign properties on RPC stubs.")
          },
          setPrototypeOf(e, t) {
            throw Error("Can't override prototype of RPC stubs.")
          },
        }
      var v = class e extends o {
          constructor(e, t) {
            if ((super(), !(e instanceof f))) {
              let r = e
              if (((e = r instanceof o || r instanceof Function ? j.create(r, void 0) : new I(R.fromAppReturn(r))), t))
                throw TypeError("RpcStub constructor expected one argument, received two.")
            }
            ;((this.hook = e), (this.pathIfPromise = t))
            let r = () => {}
            return ((r.raw = this), new Proxy(r, w))
          }
          hook
          pathIfPromise
          dup() {
            let t = this[y]
            return new e(t.pathIfPromise ? t.hook.get(t.pathIfPromise) : t.hook.dup())
          }
          onRpcBroken(e) {
            this[y].hook.onBroken(e)
          }
          map(e) {
            let { hook: t, pathIfPromise: r } = this[y]
            return d.sendMap(t, r || [], e)
          }
          toString() {
            return "[object RpcStub]"
          }
        },
        k = class extends v {
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
      function _(e) {
        let { hook: t, pathIfPromise: r } = e[y]
        if (!r || !(r.length > 0)) return t
      }
      async function S(e) {
        let { hook: t, pathIfPromise: r } = e[y]
        return (r.length > 0 && (t = t.get(r)), (await t.pull()).deliverResolve())
      }
      var R = class e {
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
            i = [],
            n = []
          for (let e of t) {
            for (let t of (e.ensureDeepCopied(), e.hooks)) r.push(t)
            for (let t of e.promises)
              (t.parent === e && (t = { parent: n, property: n.length, promise: t.promise }), i.push(t))
            n.push(e.value)
          }
          return new e(n, "owned", r, i)
        }
        static forEvaluate(t, r) {
          return new e(null, "owned", t, r)
        }
        static deepCopyFrom(t, r, i) {
          let n = new e(null, "owned", [], [])
          return ((n.value = n.deepCopy(t, r, "value", n, !0, i)), n)
        }
        constructor(e, t, r, i) {
          ;((this.value = e), (this.source = t), (this.hooks = r), (this.promises = i))
        }
        rpcTargets
        getHookForRpcTarget(e, t, r = !0) {
          if ("params" === this.source) {
            if (r) {
              let t = e
              "function" == typeof t.dup && (e = t.dup())
            }
            return j.create(e, t)
          }
          if ("return" === this.source) {
            let i = this.rpcTargets?.get(e)
            if (i)
              if (r) return i.dup()
              else return (this.rpcTargets?.delete(e), i)
            return ((i = j.create(e, t)), r)
              ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, i), i.dup())
              : i
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
        deepCopy(e, t, r, i, n, s) {
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
              for (let i = 0; i < t; i++) r[i] = this.deepCopy(e[i], e, i, r, n, s)
              return r
            }
            case "object": {
              let t = {}
              for (let r in e) t[r] = this.deepCopy(e[r], e, r, t, n, s)
              return t
            }
            case "stub":
            case "rpc-promise": {
              let t
              if (
                ((t = n
                  ? (function (e) {
                      let { hook: t, pathIfPromise: r } = e[y]
                      return r ? t.get(r) : t.dup()
                    })(e)
                  : (function (e) {
                      let { hook: t, pathIfPromise: r } = e[y]
                      return r && r.length > 0 ? t.get(r) : t
                    })(e)),
                !(e instanceof k))
              )
                return (this.hooks.push(t), new v(t))
              {
                let e = new k(t, [])
                return (this.promises.push({ parent: i, property: r, promise: e }), e)
              }
            }
            case "function":
            case "rpc-target": {
              let r
              return ((r = s ? s.getHookForRpcTarget(e, t, n) : j.create(e, t)), this.hooks.push(r), new v(r))
            }
            case "rpc-thenable": {
              let o
              return (
                (o = s ? new k(s.getHookForRpcTarget(e, t, n), []) : new k(j.create(e, t), [])),
                this.promises.push({ parent: i, property: r, promise: o }),
                o
              )
            }
            case "writable": {
              let r
              return (
                (r = s ? s.getHookForWritableStream(e, t, n) : h.createWritableStreamHook(e)),
                this.hooks.push(r),
                e
              )
            }
            case "readable": {
              let r
              return (
                (r = s ? s.getHookForReadableStream(e, t, n) : h.createReadableStreamHook(e)),
                this.hooks.push(r),
                e
              )
            }
            case "headers":
              return new Headers(e)
            case "request":
              return (e.body && this.deepCopy(e.body, e, "body", e, n, s), new Request(e))
            case "response":
              return (e.body && this.deepCopy(e.body, e, "body", e, n, s), new Response(e.body, e))
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
        deliverTo(t, r, i) {
          if ((this.ensureDeepCopied(), this.value instanceof k)) e.deliverRpcPromiseTo(this.value, t, r, i)
          else
            for (let n of ((t[r] = this.value), this.promises))
              e.deliverRpcPromiseTo(n.promise, n.parent, n.property, i)
        }
        static deliverRpcPromiseTo(t, r, i, n) {
          let s = _(t)
          if (!s) throw Error("property promises should have been resolved earlier")
          let o = s.pull()
          o instanceof e
            ? o.deliverTo(r, i, n)
            : n.push(
                o.then((e) => {
                  let t = []
                  if ((e.deliverTo(r, i, t), t.length > 0)) return Promise.all(t)
                }),
              )
        }
        async deliverCall(t, r) {
          try {
            let i = []
            ;(this.deliverTo(this, "value", i), i.length > 0 && (await Promise.all(i)))
            let n = Function.prototype.apply.call(t, r, this.value)
            if (n instanceof k) return e.fromAppReturn(n)
            return e.fromAppReturn(await n)
          } finally {
            this.dispose()
          }
        }
        async deliverStreamWrite(t) {
          try {
            let r = []
            ;(this.deliverTo(this, "value", r), r.length > 0 && (await Promise.all(r)))
            let i = this.value[0]
            if ((this.hooks.length > 0 || this.promises.length > 0) && i instanceof Object)
              return (
                Symbol.dispose in i ||
                  Object.defineProperty(i, Symbol.dispose, {
                    value: () => this.dispose(),
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                  }),
                await t.write(i),
                e.fromAppReturn(void 0)
              )
            return (await t.write(i), this.dispose(), e.fromAppReturn(void 0))
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
              let t = _(e)
              t && t.dispose()
              return
            }
            case "function":
            case "rpc-target": {
              let t = this.rpcTargets?.get(e)
              t ? (t.dispose(), this.rpcTargets.delete(e)) : P(e)
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
              this.promises.forEach((e) => e.promise[y].hook.ignoreUnhandledRejections()))
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
              e[y].hook.ignoreUnhandledRejections()
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
      function x(e, t, r, i) {
        for (let n = 0; n < r.length; n++) {
          t = e
          let s = r[n]
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
              ;((e = e[s]), (i = null))
              break
            case "stub":
            case "rpc-promise": {
              let { hook: t, pathIfPromise: i } = e[y]
              return { hook: t, remainingPath: i ? i.concat(r.slice(n)) : r.slice(n) }
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
              if (0 === n) throw TypeError("RPC stub points at a non-serializable type.")
              {
                let e = r.slice(0, n).join("."),
                  t = r.slice(0, n).join(".")
                throw TypeError(`'${e}' is not a serializable type, so property ${t} cannot be accessed.`)
              }
            default:
              throw TypeError("unreachable")
          }
        }
        if (e instanceof k) {
          let { hook: t, pathIfPromise: r } = e[y]
          return { hook: t, remainingPath: r || [] }
        }
        return { value: e, parent: t, owner: i }
      }
      var E = class extends f {
          call(e, t) {
            try {
              let { value: r, owner: i } = this.getValue(),
                n = x(r, void 0, e, i)
              if (n.hook) return n.hook.call(n.remainingPath, t)
              if ("function" != typeof n.value) throw TypeError(`'${e.join(".")}' is not a function.`)
              return new A(t.deliverCall(n.value, n.parent).then((e) => new I(e)))
            } catch (e) {
              return new m(e)
            }
          }
          map(e, t, r) {
            try {
              let i
              try {
                let { value: t, owner: r } = this.getValue()
                i = x(t, void 0, e, r)
              } catch (e) {
                for (let e of t) e.dispose()
                throw e
              }
              if (i.hook) return i.hook.map(i.remainingPath, t, r)
              return d.applyMap(i.value, i.parent, i.owner, t, r)
            } catch (e) {
              return new m(e)
            }
          }
          get(e) {
            try {
              let { value: t, owner: r } = this.getValue()
              if (0 === e.length && null === r) throw Error("Can't dup an RpcTarget stub as a promise.")
              let i = x(t, void 0, e, r)
              if (i.hook) return i.hook.get(i.remainingPath)
              return new I(R.deepCopyFrom(i.value, i.parent, i.owner))
            } catch (e) {
              return new m(e)
            }
          }
        },
        I = class e extends E {
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
            return new e(R.deepCopyFrom(t.value, void 0, t))
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
      function P(e) {
        if (Symbol.dispose in e)
          try {
            e[Symbol.dispose]()
          } catch (e) {
            Promise.reject(e)
          }
      }
      var j = class e extends E {
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
              ? Promise.resolve(e).then((e) => R.fromAppReturn(e))
              : Promise.reject(Error("Tried to resolve a non-promise stub."))
          }
          ignoreUnhandledRejections() {}
          dispose() {
            this.target && (this.refcount && 0 == --this.refcount.count && P(this.target), (this.target = void 0))
          }
          onBroken(e) {}
        },
        A = class e extends f {
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
          map(t, r, i) {
            return new e(
              this.promise.then(
                (e) => e.map(t, r, i),
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
      let O = { maxBigIntDigits: 16384, maxDepth: 256, maxMessageSize: 0x2000000 },
        T = 1 === new Uint8Array(new Uint16Array([1]).buffer)[0],
        C = [
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
        M = {
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
        U = new Map()
      for (let e of Object.keys(M)) U.set(M[e], e)
      function L(e, t) {
        if (2 !== t && 4 !== t && 8 !== t) throw RangeError(`Unsupported element size: ${t}`)
        let r = new DataView(e.buffer, e.byteOffset, e.byteLength)
        for (let i = 0; i < e.byteLength; i += t)
          switch (t) {
            case 2:
              r.setUint16(i, r.getUint16(i, !1), !0)
              break
            case 4:
              r.setUint32(i, r.getUint32(i, !1), !0)
              break
            case 8:
              r.setBigUint64(i, r.getBigUint64(i, !1), !0)
          }
      }
      let B = new (class {
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
        F = {
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
      var N = class e {
          exporter
          source
          encodingLevel
          constructor(e, t, r) {
            ;((this.exporter = e), (this.source = t), (this.encodingLevel = r))
          }
          static devaluate(t, r, i = B, n, s = "string") {
            let o = new e(i, n, s)
            try {
              return o.devaluateImpl(t, r, 0)
            } catch (e) {
              if (o.exports)
                try {
                  i.unexport(o.exports)
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
                for (let i in e) t[i] = this.devaluateImpl(e[i], e, r + 1)
                return t
              }
              case "array": {
                let t = e.length,
                  i = Array(t)
                for (let n = 0; n < t; n++) i[n] = this.devaluateImpl(e[n], e, r + 1)
                return [i]
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
                  i = U.get(Object.getPrototypeOf(e))
                if ("ArrayBuffer" === i) t = new Uint8Array(e)
                else if (void 0 === i) t = e
                else {
                  t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                  let r = D[i]
                  !T && r && L((t = t.slice()), r)
                }
                if ("structuredClonable" === this.encodingLevel || "jsonCompatibleWithBytes" === this.encodingLevel)
                  return void 0 === i ? ["bytes", t] : ["bytes", t, i]
                if (t.toBase64) r = t.toBase64({ omitPadding: !0 })
                else if ("u" > typeof Buffer)
                  r = (t instanceof Buffer ? t : Buffer.from(t.buffer, t.byteOffset, t.byteLength)).toString("base64")
                else {
                  let e = ""
                  for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r])
                  r = btoa(e)
                }
                return ((r = r.replace(/=+$/, "")), void 0 === i ? ["bytes", r] : ["bytes", r, i])
              }
              case "url":
                return ["url", e.href]
              case "headers":
                return ["headers", [...e]]
              case "request": {
                let t = {}
                "GET" !== e.method && (t.method = e.method)
                let i = [...e.headers]
                if ((i.length > 0 && (t.headers = i), e.body))
                  ((t.body = this.devaluateImpl(e.body, e, r + 1)), (t.duplex = e.duplex || "half"))
                else if (void 0 === e.body && !["GET", "HEAD", "OPTIONS", "TRACE", "DELETE"].includes(e.method)) {
                  let r = e.arrayBuffer(),
                    i = new ReadableStream({
                      async start(e) {
                        try {
                          ;(e.enqueue(new Uint8Array(await r)), e.close())
                        } catch (t) {
                          e.error(t)
                        }
                      },
                    }),
                    n = h.createReadableStreamHook(i)
                  ;((t.body = ["readable", this.exporter.createPipe(i, n)]), (t.duplex = e.duplex || "half"))
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
                  i = {}
                ;(200 !== e.status && (i.status = e.status), e.statusText && (i.statusText = e.statusText))
                let n = [...e.headers]
                if (
                  (n.length > 0 && (i.headers = n),
                  e.cf && (i.cf = e.cf),
                  e.encodeBody && "automatic" !== e.encodeBody && (i.encodeBody = e.encodeBody),
                  e.webSocket)
                )
                  throw TypeError("Can't serialize a Response containing a webSocket.")
                return ["response", t, i]
              }
              case "blob": {
                let t = e.stream(),
                  r = h.createReadableStreamHook(t),
                  i = this.exporter.createPipe(t, r)
                return ["blob", e.type, ["readable", i]]
              }
              case "error": {
                let t,
                  i = e,
                  n = this.exporter.onSendError(i)
                n && (i = n)
                let s = i,
                  o = (e, n) => {
                    let s = this.exports?.length ?? 0
                    try {
                      let s = this.devaluateImpl(n, i, r + 1)
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
                for (let e of Object.keys(i)) "name" !== e && "message" !== e && "stack" !== e && o(e, s[e])
                ;("cause" in i && o("cause", s.cause), i instanceof AggregateError && o("errors", i.errors))
                let a = ["error", i.name, i.message]
                return (t ? (a.push(n && n.stack ? n.stack : null), a.push(t)) : n && n.stack && a.push(n.stack), a)
              }
              case "undefined":
                if ("structuredClonable" === this.encodingLevel) return
                return ["undefined"]
              case "stub":
              case "rpc-promise": {
                if (!this.source) throw Error("Can't serialize RPC stubs in this context.")
                let { hook: t, pathIfPromise: r } = e[y],
                  i = this.exporter.getImport(t)
                if (void 0 !== i)
                  if (!r) return ["import", i]
                  else if (r.length > 0) return ["pipeline", i, r]
                  else return ["pipeline", i]
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
            let r = "promise" === e ? this.exporter.exportPromise(t) : this.exporter.exportStub(t)
            return (this.exports.push(r), [e, r])
          }
        },
        z = class e {
          importer
          encodingLevel
          limits
          constructor(e, t = "string") {
            ;((this.importer = e), (this.encodingLevel = t), (this.limits = e.getLimits()))
          }
          hooks = []
          promises = []
          evaluate(e) {
            return this.evaluateWithDepth(e, 0)
          }
          evaluateWithDepth(e, t) {
            let r = R.forEvaluate(this.hooks, this.promises)
            try {
              return ((r.value = this.evaluateImpl(e, r, "value", t)), r)
            } catch (e) {
              throw (r.dispose(), e)
            }
          }
          evaluateCopy(e) {
            return this.evaluate(structuredClone(e))
          }
          evaluateImpl(t, r, i, n) {
            let s = this.limits.maxDepth
            if (n >= s) throw TypeError(`Deserialization exceeded maximum allowed message depth of ${s}.`)
            if ("structuredClonable" === this.encodingLevel && (t instanceof Date || "bigint" == typeof t)) return t
            if (t instanceof Array) {
              var o
              if (1 == t.length && t[0] instanceof Array) {
                let e = t[0]
                for (let t = 0; t < e.length; t++) e[t] = this.evaluateImpl(e[t], e, t, n + 1)
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
                        i = r.length
                      e = new Uint8Array(i)
                      for (let t = 0; t < i; t++) e[t] = r.charCodeAt(t)
                    }
                  else break
                  if (2 === t.length) return e
                  if ("string" != typeof t[2]) throw TypeError(`Unknown bytes type marker type: ${typeof t[2]}`)
                  if (((o = t[2]), !C.includes(o))) {
                    let e = t[2].slice(0, 64)
                    throw TypeError(`Unknown bytes type marker: ${e}`)
                  }
                  let r = t[2],
                    i = D[r]
                  if (void 0 !== i && e.byteLength % i != 0)
                    throw TypeError(`Invalid byte length ${e.byteLength} for ${r}; expected a multiple of ${i}`)
                  let n = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                  switch ((!T && void 0 !== i && L(new Uint8Array(n), i), r)) {
                    case "ArrayBuffer":
                      return n
                    case "DataView":
                      return new DataView(n)
                    case "Int8Array":
                      return new Int8Array(n)
                    case "Uint8Array":
                      return new Uint8Array(n)
                    case "Uint8ClampedArray":
                      return new Uint8ClampedArray(n)
                    case "Int16Array":
                      return new Int16Array(n)
                    case "Uint16Array":
                      return new Uint16Array(n)
                    case "Int32Array":
                      return new Int32Array(n)
                    case "Uint32Array":
                      return new Uint32Array(n)
                    case "BigInt64Array":
                      return new BigInt64Array(n)
                    case "BigUint64Array":
                      return new BigUint64Array(n)
                    case "Float32Array":
                      return new Float32Array(n)
                    case "Float64Array":
                      return new Float64Array(n)
                  }
                }
                case "error":
                  if (t.length >= 3 && "string" == typeof t[1] && "string" == typeof t[2]) {
                    let e = F[t[1]] || Error,
                      r = e === AggregateError ? new e([], t[2]) : new e(t[2])
                    if (("string" == typeof t[3] && (r.stack = t[3]), t.length >= 5)) {
                      let e = t[4]
                      if (!e || "object" != typeof e || Array.isArray(e)) break
                      for (let t of Object.keys(e))
                        if ("name" !== t && "message" !== t && "stack" !== t) {
                          if (t in Object.prototype || "toJSON" === t) {
                            this.evaluateImpl(e[t], r, t, n + 1)
                            continue
                          }
                          r[t] = this.evaluateImpl(e[t], r, t, n + 1)
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
                      ((s.body = this.evaluateImpl(s.body, s, "body", n + 1)),
                      null === s.body ||
                        "string" == typeof s.body ||
                        s.body instanceof Uint8Array ||
                        s.body instanceof ReadableStream)
                    );
                    else throw TypeError("Request body must be of type ReadableStream.")
                  if (
                    s.signal &&
                    ((s.signal = this.evaluateImpl(s.signal, s, "signal", n + 1)), !(s.signal instanceof AbortSignal))
                  )
                    throw TypeError("Request siganl must be of type AbortSignal.")
                  if (s.headers && !(s.headers instanceof Array))
                    throw TypeError("Request headers must be serialized as an array of pairs.")
                  let o = new Request(e, s)
                  if (!(s.body instanceof ReadableStream) || void 0 !== o.body) return o
                  {
                    let e = new k(
                      new A(
                        new Response(s.body).arrayBuffer().then((e) => {
                          let t = new Request(o, { body: new Uint8Array(e) })
                          return new I(R.fromAppReturn(t))
                        }),
                      ),
                      [],
                    )
                    return (this.promises.push({ promise: e, parent: r, property: i }), e)
                  }
                }
                case "response": {
                  if (3 !== t.length) break
                  let e = this.evaluateImpl(t[1], r, i, n + 1)
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
                    s = this.evaluateImpl(t[2], r, i, n + 1)
                  if (!(s instanceof ReadableStream))
                    throw TypeError("Blob content must be serialized as a ReadableStream.")
                  let o = new k(
                    new A(
                      (async function (e, t) {
                        let r = await new Response(e).blob()
                        return r.type === t ? r : r.slice(0, r.size, t)
                      })(s, e).then((e) => new I(R.fromAppReturn(e))),
                    ),
                    [],
                  )
                  return (this.promises.push({ promise: o, parent: r, property: i }), o)
                }
                case "import":
                case "pipeline": {
                  if (t.length < 2 || t.length > 4 || "number" != typeof t[1]) break
                  let s = this.importer.getExport(t[1])
                  if (!s) throw Error(`no such entry on exports table: ${t[1]}`)
                  let o = "pipeline" == t[0],
                    a = (e) => {
                      if (!o) return (this.hooks.push(e), new k(e, []))
                      {
                        let t = new k(e, [])
                        return (this.promises.push({ promise: t, parent: r, property: i }), t)
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
                  return ((c = new e(this.importer).evaluateWithDepth([c], n)), a(s.call(l, c)))
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
                  let n = t[2]
                  if (!n.every((e) => "string" == typeof e || "number" == typeof e)) break
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
                    a = new k(e.map(n, s, o), [])
                  return (this.promises.push({ promise: a, parent: r, property: i }), a)
                }
                case "export":
                case "promise":
                  if ("number" == typeof t[1])
                    if ("promise" == t[0]) {
                      let e = new k(this.importer.importPromise(t[1]), [])
                      return (this.promises.push({ parent: r, property: i, promise: e }), e)
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
                    let e = this.importer.getPipeReadable(t[1]),
                      r = h.createReadableStreamHook(e)
                    return (this.hooks.push(r), e)
                  }
              }
              throw TypeError(`unknown special value: ${JSON.stringify(t)}`)
            }
            if (!(t instanceof Object)) return t
            for (let e in t)
              e in Object.prototype || "toJSON" === e
                ? (this.evaluateImpl(t[e], t, e, n + 1), delete t[e])
                : (t[e] = this.evaluateImpl(t[e], t, e, n + 1))
            return t
          }
        }
      function W(e) {
        return 2 + 3 * e.length
      }
      var $ = class {
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
                let { callback: r, index: i } = t,
                  n = this.session.onBrokenCallbacks.length
                e.onBroken(r)
                let s = this.session.onBrokenCallbacks[n]
                s?.callback === r
                  ? ((s.index = i), (this.session.onBrokenCallbacks[i] = s), delete this.session.onBrokenCallbacks[n])
                  : delete this.session.onBrokenCallbacks[i]
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
              ((this.resolution = new m(e)),
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
            let i
            try {
              i = this.getEntry()
            } catch (e) {
              for (let e of t) e.dispose()
              throw e
            }
            return i.resolution ? i.resolution.map(e, t, r) : i.session.sendMap(i.importId, e, t, r)
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
        q = class extends H {
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
        Q = class {
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
            let i = "string"
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
                i = t
              }
            }
            ;((this.encodingLevel = i),
              (this.limits = { ...O, ...r.limits }),
              this.exports.push({ hook: t, refcount: 1 }),
              this.imports.push(new $(this, 0, !1)),
              this.readLoop().catch((e) => this.abort(e)))
          }
          getMainImport() {
            return new q(this.imports[0])
          }
          shutdown() {
            this.abort(Error("RPC session was shut down by disposing the main stub"), !1)
          }
          exportStub(e) {
            if (this.abortReason) throw this.abortReason
            let t = this.reverseExports.get(e)
            if (void 0 !== t) return (++this.exports[t].refcount, t)
            {
              let t = this.nextExportId--
              return ((this.exports[t] = { hook: e, refcount: 1 }), this.reverseExports.set(e, t), t)
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
                      let { hook: r, pathIfPromise: i } = t.value[y]
                      if (i && 0 == i.length && void 0 === this.getImport(e)) {
                        e = r
                        continue
                      }
                    }
                    return t
                  }
                },
                i = t.autoRelease
              ;(++this.pullCount,
                (t.pull = r()
                  .then(
                    (t) => {
                      let r = N.devaluate(t.value, void 0, this, t, this.encodingLevel)
                      ;(this.send(["resolve", e, r]), i && this.releaseExport(e, 1))
                    },
                    (t) => {
                      ;(this.send(["reject", e, N.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                        i && this.releaseExport(e, 1))
                    },
                  )
                  .catch((t) => {
                    try {
                      ;(this.send(["reject", e, N.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                        i && this.releaseExport(e, 1))
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
            return (t || ((t = new $(this, e, !1)), (this.imports[e] = t)), new H(!1, t))
          }
          importPromise(e) {
            if (this.abortReason) throw this.abortReason
            if (this.imports[e])
              return new m(Error("Bug in RPC system: The peer sent a promise reusing an existing export ID."))
            let t = new $(this, e, !0)
            return ((this.imports[e] = t), new H(!0, t))
          }
          getExport(e) {
            return this.exports[e]?.hook
          }
          getPipeReadable(e) {
            let t = this.exports[e]
            if (!t || !t.pipeReadable)
              throw Error(`Export ${e} is not a pipe or its readable end was already consumed.`)
            let r = t.pipeReadable
            return ((t.pipeReadable = void 0), r)
          }
          getLimits() {
            return this.limits
          }
          createPipe(e, t) {
            if (this.abortReason) throw this.abortReason
            this.send(["pipe"])
            let r = this.imports.length,
              i = new $(this, r, !1)
            this.imports.push(i)
            let n = new H(!1, i),
              s = h.createWritableStreamFromHook(n)
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
            let i = ["pipeline", e, t]
            if (r) {
              let e = N.devaluate(r.value, void 0, this, r, this.encodingLevel)
              i.push(e[0])
            }
            this.send(["push", i])
            let n = new $(this, this.imports.length, !1)
            return (this.imports.push(n), new H(!0, n))
          }
          sendStream(e, t, r) {
            if (this.abortReason) throw this.abortReason
            let i = ["pipeline", e, t],
              n = N.devaluate(r.value, void 0, this, r, this.encodingLevel)
            i.push(n[0])
            let s = ["stream", i],
              o = this.send(s)
            void 0 === o &&
              (o = (function e(t, r, i = 0) {
                if (i >= 64) return 8
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
                      let n = 16
                      for (let s of t) n += 8 + e(s, r, i + 1)
                      return n
                    }
                    if (t instanceof Error) {
                      let n = 16 + W(t.name) + W(t.message) + W(t.stack ?? "")
                      for (let s of Object.keys(t)) n += 8 + W(s) + e(t[s], r, i + 1)
                      return n
                    }
                    let n = 16
                    for (let s of Object.keys(t)) n += 8 + W(s) + e(t[s], r, i + 1)
                    return n
                  }
                }
              })(s))
            let a = this.imports.length,
              l = new $(this, a, !0)
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
          sendMap(e, t, r, i) {
            if (this.abortReason) {
              for (let e of r) e.dispose()
              throw this.abortReason
            }
            let n = [
              "remap",
              e,
              t,
              r.map((e) => {
                let t = this.getImport(e)
                return void 0 !== t ? ["import", t] : ["export", this.exportStub(e)]
              }),
              i,
            ]
            this.send(["push", n])
            let s = new $(this, this.imports.length, !1)
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
                  let t = ["abort", N.devaluate(e, void 0, this, void 0, this.encodingLevel)]
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
                      let e = new I(new z(this, this.encodingLevel).evaluate(r[1]))
                      ;(e.ignoreUnhandledRejections(), this.exports.push({ hook: e, refcount: 1 }))
                      continue
                    }
                    break
                  case "stream":
                    if (r.length > 1) {
                      let e = new I(new z(this, this.encodingLevel).evaluate(r[1]))
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
                        if ("resolve" == r[0]) t.resolve(new I(new z(this, this.encodingLevel).evaluate(r[2])))
                        else {
                          let e = new z(this, this.encodingLevel).evaluate(r[2])
                          ;(e.dispose(), t.resolve(new m(e.value)))
                        }
                      else "resolve" == r[0] && new z(this, this.encodingLevel).evaluate(r[2]).dispose()
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
                    let e = new z(this, this.encodingLevel).evaluate(r[1])
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
        X = class {
          #t
          #r
          constructor(e, t, r = {}) {
            let i
            ;((i = t ? new I(R.fromAppReturn(t)) : new m(Error("This connection has no main object."))),
              (this.#t = new Q(e, i, r)),
              (this.#r = new v(this.#t.getMainImport())))
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
        V = class {
          encodingLevel = "structuredClonable"
          constructor(e) {
            ;((this.#i = e),
              e.start(),
              e.addEventListener("message", (e) => {
                this.#n ||
                  (null === e.data
                    ? this.#s(Error("Peer closed MessagePort connection."))
                    : this.#o
                      ? (this.#o(e.data), (this.#o = void 0), (this.#a = void 0))
                      : this.#l.push(e.data))
              }),
              e.addEventListener("messageerror", (e) => {
                this.#s(Error("MessagePort message error."))
              }))
          }
          #i
          #o
          #a
          #l = []
          #n
          send(e) {
            if (this.#n) throw this.#n
            this.#i.postMessage(e)
          }
          async receive() {
            if (this.#l.length > 0) return this.#l.shift()
            if (!this.#n)
              return new Promise((e, t) => {
                ;((this.#o = e), (this.#a = t))
              })
            throw this.#n
          }
          abort(e) {
            try {
              this.#i.postMessage(null)
            } catch (e) {}
            ;(this.#i.close(), this.#n || (this.#n = e))
          }
          #s(e) {
            !this.#n && ((this.#n = e), this.#a && (this.#a(e), (this.#o = void 0), (this.#a = void 0)))
          }
        },
        K = class {
          context
          captureMap = new Map()
          instructions = []
          constructor(e, t) {
            ;(i
              ? (this.context = { parent: i, captures: [], subject: i.capture(e), path: t })
              : (this.context = { parent: void 0, captures: [], subject: e, path: t }),
              (i = this))
          }
          unregister() {
            i = this.context.parent
          }
          makeInput() {
            return new Z(this, 0)
          }
          makeOutput(e) {
            let t
            try {
              t = N.devaluate(e.value, void 0, this, e)
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
                new Z(this.context.parent, this.context.parent.instructions.length))
              : this.context.subject.map(this.context.path, this.context.captures, this.instructions)
          }
          pushCall(e, t, r) {
            let i = N.devaluate(r.value, void 0, this, r)
            i = i[0]
            let n = this.capture(e.dup())
            return (this.instructions.push(["pipeline", n, t, i]), new Z(this, this.instructions.length))
          }
          pushGet(e, t) {
            let r = this.capture(e.dup())
            return (this.instructions.push(["pipeline", r, t]), new Z(this, this.instructions.length))
          }
          capture(e) {
            if (e instanceof Z && e.mapper === this) return e.idx
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
      function G() {
        throw Error(
          "Attempted to use an abstract placeholder from a mapper function. Please make sure your map function has no side effects.",
        )
      }
      d.sendMap = (e, t, r) => {
        let i,
          n = new K(e, t)
        try {
          i = R.fromAppReturn(
            (function (e, t) {
              let r = b
              b = e
              try {
                return t()
              } finally {
                b = r
              }
            })(n.pushCall.bind(n), () => r(new k(n.makeInput(), []))),
          )
        } finally {
          n.unregister()
        }
        if (i instanceof Promise) throw (i.catch((e) => {}), Error("RPC map() callbacks cannot be async."))
        return new k(n.makeOutput(i), [])
      }
      var Z = class extends f {
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
            return 0 == e.length ? this : i ? i.pushGet(this, e) : void G()
          }
          call(e, t) {
            G()
          }
          map(e, t, r) {
            G()
          }
          pull() {
            G()
          }
          ignoreUnhandledRejections() {}
          onBroken(e) {
            G()
          }
        },
        J = class {
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
                let e = new z(this).evaluateCopy(t)
                if (e.value instanceof v) {
                  let t = _(e.value)
                  if (t) {
                    this.variables.push(t)
                    continue
                  }
                }
                this.variables.push(new I(e))
              }
              return new z(this).evaluateCopy(e[e.length - 1])
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
            return O
          }
        }
      function Y(e, t, r, i, n) {
        let s = new J(i, new I(R.deepCopyFrom(e, t, r)))
        try {
          return s.apply(n)
        } finally {
          s.dispose()
        }
      }
      d.applyMap = (e, t, r, i, n) => {
        try {
          let s
          if (e instanceof k) throw Error("applyMap() can't be called on RpcPromise")
          if (e instanceof Array) {
            let t = []
            try {
              for (let s of e) t.push(Y(s, e, r, i, n))
            } catch (e) {
              for (let e of t) e.dispose()
              throw e
            }
            s = R.fromArray(t)
          } else s = null == e ? R.fromAppReturn(e) : Y(e, t, r, i, n)
          return new I(s)
        } finally {
          for (let e of i) e.dispose()
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
              let r, i
              0 === e.deliveredTimeAtSend
                ? ((r = this.firstAckTime), (i = this.firstAckDelivered))
                : ((r = e.deliveredTimeAtSend), (i = e.deliveredAtSend))
              let n = t - r,
                s = (this.delivered - i) / n,
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
            return (t.dispose(), new m(Error("Cannot call methods on a ReadableStream stub")))
          }
          map(e, t, r) {
            for (let e of t) e.dispose()
            return new m(Error("Cannot use map() on a ReadableStream"))
          }
          get(e) {
            return new m(Error("Cannot access properties on a ReadableStream stub"))
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
            let i = e[0]
            if ("write" !== i && "close" !== i && "abort" !== i)
              throw (t.dispose(), Error(`Unknown WritableStream method: ${i}`))
            return (
              ("close" === i || "abort" === i) && (r.closed = !0),
              new A(
                ("write" === i ? t.deliverStreamWrite(r.writer) : t.deliverCall(r.writer[i], r.writer)).then(
                  (e) => new I(e),
                ),
              )
            )
          } catch (e) {
            return new m(e)
          }
        }
        map(e, t, r) {
          for (let e of t) e.dispose()
          return new m(Error("Cannot use map() on a WritableStream"))
        }
        get(e) {
          return new m(Error("Cannot access properties on a WritableStream stub"))
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
            i,
            n = !1,
            s = new ee(() => performance.now()),
            o = () => {
              n || ((n = !0), e.dispose())
            }
          return new WritableStream({
            write(n, a) {
              if (void 0 !== i) throw i
              let l = R.fromAppParams([n]),
                { promise: c, size: u } = e.stream(["write"], l)
              if (void 0 === u)
                return c.catch((e) => {
                  throw (void 0 === i && (i = e), e)
                })
              {
                let { token: e, shouldBlock: n } = s.onSend(u)
                if (
                  (c.then(
                    () => {
                      s.onAck(e) && t && (t(), (t = void 0), (r = void 0))
                    },
                    (n) => {
                      ;(s.onError(e),
                        void 0 === i && ((i = n), a.error(n), o()),
                        r && (r(n), (t = void 0), (r = void 0)))
                    },
                  ),
                  n)
                )
                  return new Promise((e, i) => {
                    ;((t = e), (r = i))
                  })
              }
            },
            async close() {
              if (void 0 !== i) throw (o(), i)
              let { promise: t } = e.stream(["close"], R.fromAppParams([]))
              try {
                await t
              } catch (e) {
                throw i ?? e
              } finally {
                o()
              }
            },
            abort(n) {
              if (void 0 !== i) return
              ;((i = n ?? Error("WritableStream was aborted")), r && (r(i), (t = void 0), (r = void 0)))
              let { promise: s } = e.stream(["abort"], R.fromAppParams([n]))
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
              return new X(new V(e), t, r).getRemoteMain()
            },
            lK: function (e) {
              return JSON.stringify(N.devaluate(e))
            },
            oB: X,
          },
        ))
    },
    27511(e, t, r) {
      "use strict"
      r.d(t, { qg: () => g, As: () => v })
      let i = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i
      class n extends Date {
        #c = !1
        #u = !1
        #d = null
        constructor(e) {
          let t = !0,
            r = !0,
            n = "Z"
          if ("string" == typeof e) {
            let s = e.match(i)
            s
              ? (s[1] || ((t = !1), (e = `0000-01-01T${e}`)),
                (r = !!s[2]) && " " === e[10] && (e = e.replace(" ", "T")),
                s[2] && +s[2] > 23 ? (e = "") : ((n = s[3] || null), (e = e.toUpperCase()), !n && r && (e += "Z")))
              : (e = "")
          }
          ;(super(e), isNaN(this.getTime()) || ((this.#c = t), (this.#u = r), (this.#d = n)))
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
          let r = new n(e)
          return ((r.#d = t), r)
        }
        static wrapAsLocalDateTime(e) {
          let t = new n(e)
          return ((t.#d = null), t)
        }
        static wrapAsLocalDate(e) {
          let t = new n(e)
          return ((t.#u = !1), (t.#d = null), t)
        }
        static wrapAsLocalTime(e) {
          let t = new n(e)
          return ((t.#c = !1), (t.#d = null), t)
        }
      }
      class s extends Error {
        line
        column
        codeblock
        constructor(e, t) {
          var r, i
          let n,
            [s, o] = ((r = t.toml), (i = t.ptr), [(n = r.slice(0, i).split(/\r\n|\n|\r/g)).length, n.pop().length + 1]),
            a = (function (e, t, r) {
              let i = e.split(/\r\n|\n|\r/g),
                n = "",
                s = (0 | Math.log10(t + 1)) + 1
              for (let e = t - 1; e <= t + 1; e++) {
                let o = i[e - 1]
                o &&
                  ((n += e.toString().padEnd(s, " ")),
                  (n += ":  "),
                  (n += o),
                  (n += "\n"),
                  e === t && ((n += " ".repeat(s + r + 2)), (n += "^\n")))
              }
              return n
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
          i = r,
          n = "'" === r,
          o = r === e[t] && r === e[t + 1]
        o && ("\n" === e[(t += 2)] ? t++ : "\r" === e[t] && "\n" === e[t + 1] && (t += 2))
        let a = "",
          l = t,
          c = 0
        for (let u = t; u < e.length; u++)
          if (((r = e[u]), o && ("\n" === r || ("\r" === r && "\n" === e[u + 1])))) c = c && 3
          else if ((r < " " && "	" !== r) || "" === r)
            throw new s("control characters are not allowed in strings", { toml: e, ptr: u })
          else if ((!c || 3 === c) && r === i && (!o || (e[u + 1] === i && e[u + 2] === i)))
            return (o && (e[u + 3] === i && u++, e[u + 3] === i && u++), [c ? a : a + e.slice(l, u), u + (o ? 3 : 1)])
          else if (c) {
            if (1 === c)
              if ("x" === r || "u" === r || "U" === r) {
                let t = 0,
                  i = "x" === r ? 2 : "u" === r ? 4 : 8
                for (let r = 0; r < i; r++, u++) {
                  let r = e.charCodeAt(u + 1),
                    i =
                      r >= 48 && r <= 57
                        ? r - 48
                        : r >= 65 && r <= 70
                          ? r - 65 + 10
                          : r >= 97 && r <= 102
                            ? r - 97 + 10
                            : -1
                  if (i < 0) throw new s("invalid non-hex character in unicode escape", { toml: e, ptr: u + 1 })
                  t = (t << 4) | i
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
              ;((c = +(!n && "\\" === r)), (l = u))
            }
          } else n || "\\" !== r || ((a += e.slice(l, (l = u))), (c = 1))
        throw new s("unfinished string", { toml: e, ptr: t })
      }
      function u(e, t = 0, r = e.length) {
        let i = e.indexOf("\n", t)
        return ("\r" === e[i - 1] && i--, i <= r ? i : -1)
      }
      function d(e, t) {
        for (let r = t; r < e.length; r++) {
          let i = e[r]
          if ("\n" === i) return r
          if ("\r" === i && "\n" === e[r + 1]) return r + 1
          if ((i < " " && "	" !== i) || "" === i)
            throw new s("control characters are not allowed in comments", { toml: e, ptr: t })
        }
        return e.length
      }
      function p(e, t, r, i) {
        let n
        for (;;) {
          for (; " " === (n = e[t]) || "	" === n || (!r && ("\n" === n || ("\r" === n && "\n" === e[t + 1])));) t++
          if (i || "#" !== n) break
          t = d(e, t)
        }
        return t
      }
      let h = /^[a-zA-Z0-9-_]+[ \t]*$/
      function f(e, t, r = "=") {
        let i = t - 1,
          n = [],
          o = e.indexOf(r, t)
        if (o < 0) throw new s("incomplete key-value: cannot find end of key", { toml: e, ptr: t })
        do {
          let a = e[(t = ++i)]
          if (" " !== a && "	" !== a)
            if ('"' === a || "'" === a) {
              if (a === e[t + 1] && a === e[t + 2])
                throw new s("multiline strings are not allowed in keys", { toml: e, ptr: t })
              let [l, d] = c(e, t)
              i = e.indexOf(".", d)
              let p = e.slice(d, i < 0 || i > o ? o : i),
                h = u(p)
              if (h > -1) throw new s("newlines are not allowed in keys", { toml: e, ptr: t + i + h })
              if (p.trimStart()) throw new s("found extra tokens after the string part", { toml: e, ptr: d })
              if (o < d && (o = e.indexOf(r, d)) < 0)
                throw new s("incomplete key-value: cannot find end of key", { toml: e, ptr: t })
              n.push(l)
            } else {
              i = e.indexOf(".", t)
              let r = e.slice(t, i < 0 || i > o ? o : i)
              if (!h.test(r))
                throw new s("only letter, numbers, dashes and underscores are allowed in keys", { toml: e, ptr: t })
              n.push(r.trimEnd())
            }
        } while (i + 1 && i < o)
        return [n, p(e, o + 1, !0, !0)]
      }
      function m(e, t, r, i) {
        let n,
          s,
          o = t,
          a = r,
          l = !1
        for (let t = 0; t < e.length; t++) {
          if (t) {
            if (((o = l ? o[n] : (o[n] = {})), (a = (s = a[n]).c), 0 === i && (1 === s.t || 2 === s.t))) return null
            if (2 === s.t) {
              let e = o.length - 1
              ;((o = o[e]), (a = a[e].c))
            }
          }
          if ((l = Object.hasOwn(o, (n = e[t]))) && a[n]?.t === 0 && a[n]?.d) return null
          l ||
            ("__proto__" === n &&
              (Object.defineProperty(o, n, { enumerable: !0, configurable: !0, writable: !0 }),
              Object.defineProperty(a, n, { enumerable: !0, configurable: !0, writable: !0 })),
            (a[n] = { t: t < e.length - 1 && 2 === i ? 3 : i, d: !1, i: 0, c: {} }))
        }
        if (
          ((s = a[n]).t !== i && (1 !== i || 3 !== s.t)) ||
          (2 === i &&
            (s.d || ((s.d = !0), (o[n] = [])), o[n].push((o = {})), (s.c[s.i++] = s = { t: 1, d: !1, i: 0, c: {} })),
          s.d)
        )
          return null
        if (((s.d = !0), 1 === i)) o = l ? o[n] : (o[n] = {})
        else if (0 === i && l) return null
        return [n, o, s.c]
      }
      function g(e, { maxDepth: t = 1e3, integersAsBigInt: r } = {}) {
        let i = {},
          h = {},
          b = i,
          y = h
        for (let g = p(e, 0); g < e.length;) {
          if ("[" === e[g]) {
            let t = "[" === e[++g],
              r = f(e, (g += +t), "]")
            if (t) {
              if ("]" !== e[r[1] - 1]) throw new s("expected end of table declaration", { toml: e, ptr: r[1] - 1 })
              r[1]++
            }
            let n = m(r[0], i, h, t ? 2 : 1)
            if (!n) throw new s("trying to redefine an already defined table or value", { toml: e, ptr: g })
            ;((y = n[2]), (b = n[1]), (g = r[1]))
          } else {
            let i = f(e, g),
              h = m(i[0], b, y, 0)
            if (!h) throw new s("trying to redefine an already defined table or value", { toml: e, ptr: g })
            let w = (function e(t, r, i, h, m) {
              var g
              let b, y
              if (0 === h)
                throw new s("document contains excessively nested structures. aborting.", { toml: t, ptr: r })
              let w = t[r]
              if ("[" === w || "{" === w) {
                let [n, o] =
                  "[" === w
                    ? (function (t, r, i, n) {
                        let o,
                          a = []
                        for (r++; "]" !== (o = t[r++]) && o;)
                          if ("," === o) throw new s("expected value, found comma", { toml: t, ptr: r - 1 })
                          else if ("#" === o) r = d(t, r)
                          else if (" " !== o && "	" !== o && "\n" !== o && "\r" !== o) {
                            let s = e(t, r - 1, "]", i - 1, n)
                            ;(a.push(s[0]), (r = s[1]))
                          }
                        if (!o) throw new s("unfinished array encountered", { toml: t, ptr: r })
                        return [a, r]
                      })(t, r, h, m)
                    : (function (t, r, i, n) {
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
                            let [h, m] = e(t, p, "}", i - 1, n)
                            ;(l.add(h), (c[o] = h), (r = m))
                          }
                        if (!o) throw new s("unfinished table encountered", { toml: t, ptr: r })
                        return [a, r]
                      })(t, r, h, m)
                if (i) {
                  if (((o = p(t, o)), "," === t[o])) o++
                  else if (t[o] !== i) throw new s("expected comma or end of structure", { toml: t, ptr: o })
                }
                return [n, o]
              }
              if ('"' === w || "'" === w) {
                let [e, n] = c(t, r)
                if (i) {
                  if (((n = p(t, n)), t[n] && "," !== t[n] && t[n] !== i && "\n" !== t[n] && "\r" !== t[n]))
                    throw new s("unexpected character encountered", { toml: t, ptr: n })
                  "," === t[n] && n++
                }
                return [e, n]
              }
              let v = (function (e, t, r, i = !1) {
                  if (!r) return (t = u(e, t)) < 0 ? e.length : t
                  for (let n = t; n < e.length; n++) {
                    let t = e[n]
                    if ("#" === t) n = u(e, n)
                    else if ("," === t) return n + 1
                    else if (t === r || (i && ("\n" === t || ("\r" === t && "\n" === e[n + 1])))) return n
                  }
                  throw new s("cannot find end of structure", { toml: e, ptr: t })
                })(t, r, i),
                k =
                  ((g = v - ("," === t[v - 1])),
                  (y = (b = t.slice(r, g)).indexOf("#")) > -1 && (d(t, y), (b = b.slice(0, y))),
                  [b.trimEnd(), y])
              if (!k[0]) throw new s("incomplete key-value declaration: no value specified", { toml: t, ptr: r })
              return (
                i && k[1] > -1 && ((v = p(t, r + k[1])), "," === t[v] && v++),
                [
                  (function (e, t, r, i) {
                    if ("true" === e) return !0
                    if ("false" === e) return !1
                    if ("-inf" === e) return -1 / 0
                    if ("inf" === e || "+inf" === e) return 1 / 0
                    if ("nan" === e || "+nan" === e || "-nan" === e) return 0 / 0
                    if ("-0" === e) return i ? 0n : 0
                    let c = o.test(e)
                    if (c || a.test(e)) {
                      if (l.test(e)) throw new s("leading zeroes are not allowed", { toml: t, ptr: r })
                      let n = +(e = e.replace(/_/g, ""))
                      if (isNaN(n)) throw new s("invalid number", { toml: t, ptr: r })
                      if (c) {
                        if ((c = !Number.isSafeInteger(n)) && !i)
                          throw new s("integer value cannot be represented losslessly", { toml: t, ptr: r })
                        ;(c || !0 === i) && (n = BigInt(e))
                      }
                      return n
                    }
                    let u = new n(e)
                    if (!u.isValid()) throw new s("invalid value", { toml: t, ptr: r })
                    return u
                  })(k[0], t, r, m),
                  v,
                ]
              )
            })(e, i[1], void 0, t, r)
            ;((h[1][h[0]] = w[0]), (g = w[1]))
          }
          if (((g = p(e, g, !0)), e[g] && "\n" !== e[g] && "\r" !== e[g]))
            throw new s("each key-value declaration must be followed by an end-of-line", { toml: e, ptr: g })
          g = p(e, g)
        }
        return i
      }
      let b = /^[a-z0-9-_]+$/i
      function y(e) {
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
        if ("object" !== y(e)) throw TypeError("stringify can only be called with an object")
        let i = (function e(t, r, i, n, s) {
          if (0 === n) throw Error("Could not stringify the object: maximum object depth exceeded")
          let o = "",
            a = "",
            l = Object.keys(r)
          for (let t = 0; t < l.length; t++) {
            let c = l[t]
            if (null !== r[c] && void 0 !== r[c]) {
              let t = y(r[c])
              if ("symbol" === t || "function" === t) throw TypeError(`cannot serialize values of type '${t}'`)
              let l = b.test(c) ? c : w(c)
              if (
                "array" === t &&
                (function (e) {
                  for (let t = 0; t < e.length; t++) if ("object" !== y(e[t])) return !1
                  return 0 != e.length
                })(r[c])
              )
                a +=
                  (a && "\n") +
                  (function (t, r, i, n) {
                    if (0 === i) throw Error("Could not stringify the object: maximum object depth exceeded")
                    let s = ""
                    for (let o = 0; o < t.length; o++)
                      ((s += `${s && "\n"}[[${r}]]
`),
                        (s += e(0, t[o], r, i, n)))
                    return s
                  })(r[c], i ? `${i}.${l}` : l, n - 1, s)
              else if ("object" === t) {
                let t = i ? `${i}.${l}` : l
                a += (a && "\n") + e(t, r[c], t, n - 1, s)
              } else
                ((o += l),
                  (o += " = "),
                  (o += (function e(t, r, i, n) {
                    if (0 === i) throw Error("Could not stringify the object: maximum object depth exceeded")
                    if ("number" === r)
                      return isNaN(t)
                        ? "nan"
                        : 1 / 0 === t
                          ? "inf"
                          : -1 / 0 === t
                            ? "-inf"
                            : Number.isInteger(t) && (n || !Number.isSafeInteger(t))
                              ? t.toFixed(1)
                              : t.toString()
                    if ("bigint" === r || "boolean" === r) return t.toString()
                    if ("string" === r) return w(t)
                    if ("date" === r) {
                      if (isNaN(t.getTime())) throw TypeError("cannot serialize invalid date")
                      return t.toISOString()
                    }
                    return "object" === r
                      ? (function (t, r, i) {
                          let n = Object.keys(t)
                          if (0 === n.length) return "{}"
                          let s = "{ "
                          for (let o = 0; o < n.length; o++) {
                            let a = n[o]
                            ;(o && (s += ", "),
                              (s += b.test(a) ? a : w(a)),
                              (s += " = "),
                              (s += e(t[a], y(t[a]), r - 1, i)))
                          }
                          return s + " }"
                        })(t, i, n)
                      : "array" === r
                        ? (function (t, r, i) {
                            if (0 === t.length) return "[]"
                            let n = "[ "
                            for (let s = 0; s < t.length; s++) {
                              if ((s && (n += ", "), null === t[s] || void 0 === t[s]))
                                throw TypeError("arrays cannot contain null or undefined values")
                              n += e(t[s], y(t[s]), r - 1, i)
                            }
                            return n + " ]"
                          })(t, i, n)
                        : void 0
                  })(r[c], t, n, s)),
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
        return "\n" !== i[i.length - 1] ? i + "\n" : i
      }
    },
  }))
//# sourceMappingURL=early-bootstrap-133-1c544c3280919085.js.map
