export const __rspack_esm_ids = [312708]
export const __webpack_modules__ = {
  m15V(e, i, t) {
    var a = t("qmMi"),
      s = t("OWtl")
    let n = (0, a.bD)(s.u, (e) => null)
    t.d(i, {}, { v: n })
  },
  uC11(e, i, t) {
    t.d(i, { GptPluginMigrationDialog: () => eI })
    var a = t("ABep"),
      s = t("QosV"),
      n = t("slpy"),
      l = t("S2r0"),
      r = t("T0Rc"),
      o = t("CpsU"),
      d = t.n(o),
      u = t("nuXe"),
      c = t.n(u),
      g = t("qmMi"),
      p = t("zd8w"),
      f = t("Wf1j"),
      h = t("oyxz"),
      m = t("Ywss"),
      v = t("ASxG"),
      _ = t("hOO0"),
      b = t("Ietk"),
      y = t("SPnB"),
      x = t("eFn4"),
      k = t("UOa8"),
      w = t("OAko"),
      j = t("Sm6l"),
      C = t("JNtf"),
      A = t("mUDD"),
      P = t("Ot7V"),
      M = t("SGsN"),
      z = t("K4kL"),
      I = t("k7G6"),
      S = t("WzdM"),
      T = t("ugfi"),
      N = t("cLdu"),
      F = t("jaeI"),
      G = t("sLlu"),
      q = t("OWtl"),
      Y = t("hZax"),
      O = t("JYRT"),
      D = t("Kwur"),
      U = t("wrCb"),
      E = t("m15V"),
      $ = t("DY7H"),
      B = t("z0fI"),
      W = t("Qgfj"),
      L = t("MM0V"),
      R = t("eShZ")
    function K(e) {
      if (
        null == e ||
        "request" === e.kind ||
        ("validation" === e.kind ? 400 !== e.status : 400 !== e.status && 502 !== e.status)
      )
        return
      let i = new Set()
      for (let t of e.issues) {
        if (
          "knowledge_file" !== t.resource.type ||
          !t.resource.id?.trim() ||
          ![
            "download_failed",
            "timeout",
            "download_timeout",
            "knowledge_file_download_failed",
            "knowledge_file_metadata_unavailable",
            "knowledge_file_not_found",
            "knowledge_file_too_large",
            "invalid_file_size",
            "invalid_knowledge_filename",
          ].includes(t.code)
        )
          return
        i.add(t.resource.id)
      }
      if (null != e.failedFiles) {
        for (let t of e.failedFiles)
          if ("profile_picture" !== t.type) {
            if (!t.file_id?.trim()) return
            i.add(t.file_id)
          }
      }
      return i.size > 0 ? [...i] : void 0
    }
    let H = v.KCZ([
        v
          .YjP()
          .min(1)
          .transform((e) => ({ message: e, suggestion: void 0 })),
        v.Ikc({ message: v.YjP().min(1), suggestion: v.YjP().optional() }),
      ]),
      Q = v.KCZ([
        v.k5n([
          "gpt_plugin_migration_source_changed",
          "gpt_plugin_migration_owner_changed",
          "gpt_plugin_migration_editor_access_failed",
        ]),
        v.Ikc({ code: v.euz("gpt_plugin_migration_editor_access_failed") }).transform((e) => e.code),
        v
          .Ikc({
            type: v.euz("apps_sdk_error"),
            error_code: v.k5n(["gpt_plugin_migration_in_progress", "gpt_plugin_migration_conflict"]),
          })
          .transform((e) => e.error_code),
      ]),
      Z = v.Ikc({
        code: v.YjP(),
        resource: v.Ikc({
          type: v.k5n(["gpt", "action", "app", "knowledge_file", "knowledge_files", "profile_picture", "plugin"]),
          id: v.YjP().nullish(),
          name: v.YjP().nullish(),
          url: v.YjP().nullish(),
          tool_id: v.YjP().nullish(),
        }),
        field: v.YjP().nullish(),
        message: v.YjP(),
        suggestion: v.YjP(),
        actual: v.aig().nullish(),
        limit: v.aig().nullish(),
      }),
      J = v.Ikc({
        type: v.k5n(["profile_picture", "knowledge_file"]),
        file_id: v.YjP().nullish(),
        code: v.k5n(["download_failed", "invalid_file", "timeout"]),
        message: v.YjP(),
      }),
      V = v.Ikc({ code: v.euz("gpt_plugin_incompatible"), issues: v.YOg(Z), failed_files: v.YOg(J).nullish() }),
      X = v.Ikc({ code: v.euz("gpt_plugin_file_copy_failed"), issues: v.YOg(Z), failed_files: v.YOg(J) })
    function ee(e) {
      if (!(e instanceof R.FetchError)) return { kind: "request" }
      try {
        let i = v.Ikc({ detail: v.L5J() }).parse(JSON.parse(e.message)),
          t = X.safeParse(i.detail)
        if (t.success)
          return { kind: "file_copy", status: e.status, issues: t.data.issues, failedFiles: t.data.failed_files }
        let a = V.safeParse(i.detail)
        if (a.success)
          return { kind: "validation", status: e.status, issues: a.data.issues, failedFiles: a.data.failed_files }
        let s = Q.safeParse(i.detail).data,
          n =
            i.detail !== s && (400 === e.status || "gpt_plugin_migration_editor_access_failed" === s)
              ? H.safeParse(i.detail).data
              : void 0
        return {
          kind: "request",
          status: e.status,
          errorCode: s,
          backendMessage: n?.message,
          backendSuggestion: n?.suggestion,
        }
      } catch {
        return { kind: "request", status: e.status }
      }
    }
    function ei(e, i, t = !1, s = !1) {
      let n =
        "request" === e.kind || "validation" === e.kind || "file_copy" === e.kind
          ? (function (e) {
              if ("request" === e.kind)
                return e.backendMessage && (!e.errorCode || "gpt_plugin_migration_editor_access_failed" === e.errorCode)
                  ? [{ message: e.backendMessage, suggestion: e.backendSuggestion }]
                  : void 0
              if (e.issues.length > 0) {
                let i = e.issues.every((e) => "skill_bundle_too_large" === e.code),
                  t = e.issues.every(
                    (e) =>
                      "knowledge_file" === e.resource.type &&
                      [
                        "download_failed",
                        "timeout",
                        "download_timeout",
                        "knowledge_file_download_failed",
                        "knowledge_file_metadata_unavailable",
                      ].includes(e.code),
                  )
                return i || t ? void 0 : e.issues
              }
              let i = e.failedFiles?.filter((e) => "knowledge_file" === e.type)
              return i?.some((e) => "invalid_file" === e.code) ? i : void 0
            })(e)
          : void 0
      if (n) {
        let l =
          ("validation" === e.kind || "file_copy" === e.kind) && 0 === e.issues.length
            ? e.failedFiles?.filter((e) => "knowledge_file" === e.type)
            : void 0
        return {
          title: (0, a.jsx)(h.A, { ...et.failed }),
          description: (0, a.jsxs)("div", {
            className: "flex flex-col gap-3 text-start wrap-anywhere",
            children: [
              t && !s ? (0, a.jsx)(h.A, { ...ea.readOnly }) : null,
              n.map((s, n) => {
                let r = "validation" === e.kind || "file_copy" === e.kind ? e.issues[n]?.resource : void 0,
                  o = r?.type === "knowledge_file" ? r.id : l?.[n]?.file_id,
                  d = null != o ? i?.find((e) => (e.file_id || e.id) === o) : void 0,
                  u = r?.name || (d?.file_response_type === "full_file_response" ? d.name : void 0) || o
                return (0, a.jsx)(
                  L.l,
                  {
                    type: "warning",
                    variant: "callout",
                    layout: "vertical",
                    title: u ? (0, a.jsx)("span", { className: "select-text", children: u }) : void 0,
                    content: (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2 whitespace-pre-wrap select-none",
                      children: [
                        (0, a.jsx)("p", { children: s.message }),
                        !t && s.suggestion && (0, a.jsx)("p", { children: s.suggestion }),
                      ],
                    }),
                  },
                  n,
                )
              }),
            ],
          }),
        }
      }
      let l = "failed",
        r = []
      if ("preview" === e.kind || "unavailable" === e.kind)
        ((l = e.kind),
          "preview" === e.kind &&
            (401 === e.status ? (l = "authentication") : (403 === e.status || 404 === e.status) && (l = "unavailable")))
      else if ("request" === e.kind)
        l =
          "gpt_plugin_migration_editor_access_failed" === e.errorCode
            ? "editorAccess"
            : 401 === e.status
              ? "authentication"
              : 403 === e.status || 404 === e.status
                ? "unavailable"
                : 409 === e.status
                  ? "gpt_plugin_migration_in_progress" === e.errorCode
                    ? "running"
                    : "gpt_plugin_migration_conflict" === e.errorCode ||
                        "gpt_plugin_migration_source_changed" === e.errorCode ||
                        "gpt_plugin_migration_owner_changed" === e.errorCode
                      ? "changed"
                      : "conflict"
                  : 500 === e.status || 502 === e.status
                    ? "failed"
                    : "unknown"
      else if ("validation" === e.kind || "file_copy" === e.kind) {
        let s = e.issues.find((e) => "skill_bundle_too_large" === e.code)
        if (s)
          return {
            title: (0, a.jsx)(h.A, { ...et.bundleSize }),
            description: t
              ? (0, a.jsx)(h.A, { ...ea.readOnly })
              : (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("p", { children: s.message }), (0, a.jsx)("p", { children: s.suggestion })],
                }),
          }
        {
          let t = e.issues.filter((e) => "knowledge_file" === e.resource.type),
            a = e.failedFiles?.filter((e) => "knowledge_file" === e.type)
          ;((r = (
            a?.length
              ? a.map((e) => ({
                  id: e.file_id,
                  name: t.find((i) => null != e.file_id && i.resource.id === e.file_id)?.resource.name,
                }))
              : t.map((e) => e.resource)
          ).map((e) => {
            let t = null == e.id ? void 0 : i?.find((i) => i.file_id === e.id)
            return e.name || (t?.file_response_type === "full_file_response" ? (t.name ?? void 0) : void 0)
          })).length > 0 ||
            "file_copy" === e.kind) &&
            (l = "copy")
        }
      }
      let o = {
        count: r.length,
        named: r.length > 0 && r.every((e) => !!e) ? "all" : "some",
        first: r[0] ?? "",
        second: r[1] ?? "",
        remaining: r.length - 1,
      }
      return {
        title: (0, a.jsx)(h.A, { ...et["editorAccess" === l ? "failed" : l], values: o }),
        description: (0, a.jsx)(h.A, { ...ea[l], values: o }),
      }
    }
    let et = (0, W.YK)({
        unavailable: {
          id: "chatgptConversations.gpts.migration.failure.unavailable.title",
          defaultMessage: "Migration unavailable",
        },
        preview: {
          id: "chatgptConversations.gpts.migration.failure.preview.title",
          defaultMessage: "We couldn\u2019t check this GPT",
        },
        authentication: {
          id: "chatgptConversations.gpts.migration.failure.authentication.title",
          defaultMessage: "Sign in to continue",
        },
        bundleSize: {
          id: "chatgptConversations.gpts.migration.failure.bundleSize.title",
          defaultMessage: "Plugin exceeds the size limit",
        },
        failed: { id: "chatgptConversations.gpts.migration.failure.failed.title", defaultMessage: "Migration failed" },
        unknown: {
          id: "chatgptConversations.gpts.migration.failure.unknown.title",
          defaultMessage: "We couldn\u2019t confirm migration",
        },
        running: {
          id: "chatgptConversations.gpts.migration.failure.running.title",
          defaultMessage: "Migration is already running",
        },
        changed: {
          id: "chatgptConversations.gpts.migration.failure.changed.title",
          defaultMessage: "Something changed during migration",
        },
        conflict: {
          id: "chatgptConversations.gpts.migration.failure.conflict.title",
          defaultMessage: "Migration couldn\u2019t continue",
        },
        copy: {
          id: "chatgptConversations.gpts.migration.failure.copy.title",
          defaultMessage:
            "{count, plural, one {Knowledge file couldn\u2019t be copied} other {Knowledge files couldn\u2019t be copied}}",
        },
      }),
      ea = (0, W.YK)({
        unavailable: {
          id: "chatgptConversations.gpts.migration.failure.unavailable.detail",
          defaultMessage: "We couldn\u2019t confirm that this GPT is available to migrate",
        },
        preview: {
          id: "chatgptConversations.gpts.migration.failure.preview.detail",
          defaultMessage:
            "We couldn\u2019t load this GPT\u2019s saved settings to check whether it\u2019s ready to migrate",
        },
        authentication: {
          id: "chatgptConversations.gpts.migration.failure.authentication.detail",
          defaultMessage: "Your session expired. Sign in again, then retry migration.",
        },
        failed: {
          id: "chatgptConversations.gpts.migration.failure.failed.detail",
          defaultMessage: "We couldn\u2019t finish migration. Try again to continue.",
        },
        unknown: {
          id: "chatgptConversations.gpts.migration.failure.unknown.detail",
          defaultMessage: "Try again to check whether your plugin was created and continue migration",
        },
        running: {
          id: "chatgptConversations.gpts.migration.failure.running.detail",
          defaultMessage: "Wait up to 5 minutes, then try again",
        },
        changed: {
          id: "chatgptConversations.gpts.migration.failure.changed.detail",
          defaultMessage: "The GPT, its owner, or the plugin changed. Try again to use the latest settings.",
        },
        conflict: {
          id: "chatgptConversations.gpts.migration.failure.conflict.detail",
          defaultMessage:
            "Another migration may be running, or the GPT or plugin may have changed. Wait a moment, then try again.",
        },
        editorAccess: {
          id: "chatgptConversations.gpts.migration.failure.editorAccess.detail",
          defaultMessage: "Your plugin was created, but we couldn\u2019t finish setting up your access. Try again.",
        },
        copy: {
          id: "chatgptConversations.gpts.migration.failure.copy.detail",
          defaultMessage:
            "{named, select, all {{count, plural, one {We couldn\u2019t copy {first} to the plugin. Try again.} =2 {We couldn\u2019t copy {first} and {second} to the plugin. Try again.} other {We couldn\u2019t copy {first} and {remaining, number} other files to the plugin. Try again.}}} other {{count, plural, one {We couldn\u2019t copy a knowledge file to the plugin. Try again.} other {We couldn\u2019t copy some knowledge files to the plugin. Try again.}}}}",
        },
        readOnly: {
          id: "chatgptConversations.gpts.migration.failure.readOnly.detail",
          defaultMessage:
            "This GPT can\u2019t be migrated with its current settings. GPT editing and publishing are no longer available.",
        },
      })
    function es(e) {
      let i,
        t,
        n,
        l,
        r,
        o,
        d,
        u = (0, s.c)(23),
        { fileCheck: c, files: g, canOmitOversizedFiles: p, canEdit: f } = e
      if (
        u[0] !== f ||
        u[1] !== p ||
        u[2] !== c.maxFileBytes ||
        u[3] !== c.oversized ||
        u[4] !== c.profilePicture ||
        u[5] !== c.unavailable ||
        u[6] !== c.unchecked ||
        u[7] !== g
      ) {
        let e = new Map(g?.map(ec)),
          s = "unavailable"
        ;(p ? (s = "omit") : f && (s = "edit"),
          (i = "flex flex-col gap-3 wrap-anywhere"),
          (t = "alert"),
          (n = c.oversized?.length
            ? (0, a.jsx)("p", {
                children: (0, a.jsx)(h.A, {
                  id: "chatgptConversations.gpts.migration.readiness.oversizedFilesNamedLimitHelp",
                  defaultMessage:
                    "<strong>{filenames}</strong> {count, plural, one {exceeds} other {exceed}} the {maxFileSizeMb, number} MB limit and can\u2019t migrate. {recovery, select, omit {Choose Migrate anyway to create the plugin {count, plural, one {without it} other {without them}}.} edit {Replace {count, plural, one {it with a smaller file} other {them with smaller files}} and publish the GPT again.} other {GPT editing and publishing are no longer available.}}",
                  values: {
                    filenames: (0, a.jsx)(W.dT, {
                      value: c.oversized.map((i) => i.name || e.get(i.fileId) || i.fileId),
                      type: "conjunction",
                    }),
                    count: c.oversized.length,
                    maxFileSizeMb: c.maxFileBytes / 1048576,
                    recovery: s,
                    strong: eu,
                  },
                }),
              })
            : null),
          u[14] !== c.profilePicture
            ? ((l =
                null != c.profilePicture
                  ? (0, a.jsxs)("p", {
                      children: [
                        "tooLarge" === c.profilePicture.status
                          ? (0, a.jsx)(h.A, {
                              id: "chatgptConversations.gpts.migration.readiness.profilePictureTooLargeNamedHelp",
                              defaultMessage:
                                "<strong>{filename}</strong> exceeds the 5 MB limit and won\u2019t migrate. You can add a new profile picture to the plugin after migration.",
                              values: { filename: c.profilePicture.name || c.profilePicture.fileId, strong: ed },
                            })
                          : null,
                        "unavailable" === c.profilePicture.status
                          ? (0, a.jsx)(h.A, {
                              id: "chatgptConversations.gpts.migration.readiness.profilePictureUnavailableNamedHelp",
                              defaultMessage:
                                "<strong>{filename}</strong> couldn\u2019t be accessed. You can still try migrating.",
                              values: { filename: c.profilePicture.name || c.profilePicture.fileId, strong: eo },
                            })
                          : null,
                        "unchecked" === c.profilePicture.status
                          ? (0, a.jsx)(h.A, {
                              id: "chatgptConversations.gpts.migration.readiness.profilePictureUncheckedNamedHelp",
                              defaultMessage:
                                "<strong>{filename}</strong> couldn\u2019t be checked. You can still try migrating.",
                              values: { filename: c.profilePicture.name || c.profilePicture.fileId, strong: er },
                            })
                          : null,
                      ],
                    })
                  : null),
              (u[14] = c.profilePicture),
              (u[15] = l))
            : (l = u[15]),
          (r = c.unavailable.length
            ? (0, a.jsx)("p", {
                children: (0, a.jsx)(h.A, {
                  id: "chatgptConversations.gpts.migration.readiness.unavailableFilesNamedHelp",
                  defaultMessage:
                    "<strong>{filenames}</strong> couldn\u2019t be accessed. {count, plural, one {It may have been deleted or you may no longer have access. You can still try migrating with it.} other {They may have been deleted or you may no longer have access. You can still try migrating with them.}}",
                  values: {
                    filenames: (0, a.jsx)(W.dT, {
                      value: c.unavailable.map((i) => e.get(i) || i),
                      type: "conjunction",
                    }),
                    count: c.unavailable.length,
                    strong: el,
                  },
                }),
              })
            : null),
          (o = c.unchecked.length
            ? (0, a.jsx)("p", {
                children: (0, a.jsx)(h.A, {
                  id: "chatgptConversations.gpts.migration.readiness.uncheckedFilesNamedHelp",
                  defaultMessage:
                    "<strong>{filenames}</strong> couldn\u2019t be checked. You can still try migrating {count, plural, one {with this file} other {with these files}}.",
                  values: {
                    filenames: (0, a.jsx)(W.dT, { value: c.unchecked.map((i) => e.get(i) || i), type: "conjunction" }),
                    count: c.unchecked.length,
                    strong: en,
                  },
                }),
              })
            : null),
          (u[0] = f),
          (u[1] = p),
          (u[2] = c.maxFileBytes),
          (u[3] = c.oversized),
          (u[4] = c.profilePicture),
          (u[5] = c.unavailable),
          (u[6] = c.unchecked),
          (u[7] = g),
          (u[8] = i),
          (u[9] = t),
          (u[10] = n),
          (u[11] = l),
          (u[12] = r),
          (u[13] = o))
      } else ((i = u[8]), (t = u[9]), (n = u[10]), (l = u[11]), (r = u[12]), (o = u[13]))
      return (
        u[16] !== i || u[17] !== t || u[18] !== n || u[19] !== l || u[20] !== r || u[21] !== o
          ? ((d = (0, a.jsxs)("div", { className: i, role: t, children: [n, l, r, o] })),
            (u[16] = i),
            (u[17] = t),
            (u[18] = n),
            (u[19] = l),
            (u[20] = r),
            (u[21] = o),
            (u[22] = d))
          : (d = u[22]),
        d
      )
    }
    function en(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function el(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function er(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function eo(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function ed(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function eu(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function ec(e) {
      let i = e.file_id || e.id
      return [i, ("full_file_response" === e.file_response_type && e.name) || i]
    }
    let eg = v.aig().int().positive().catch(0x6400000)
    var ep = t("ZTXF"),
      ef = t("g2DC"),
      eh = t("on57"),
      em = t("bVeK")
    function ev(e) {
      let i,
        t,
        n,
        l,
        r,
        o = (0, s.c)(18),
        { unavailable: d, canEdit: u, canOmit: c, editingDisabled: g } = e
      if (u && !g && !c) {
        let e, i
        return (
          o[0] !== d ? ((e = d.map(eb)), (o[0] = d), (o[1] = e)) : (e = o[1]),
          o[2] !== e
            ? ((i = (0, a.jsx)("ul", { className: "flex flex-col gap-3 wrap-anywhere", children: e })),
              (o[2] = e),
              (o[3] = i))
            : (i = o[3]),
          i
        )
      }
      if (c) {
        let e
        ;(o[4] !== u || o[5] !== g
          ? ((e =
              u && !g
                ? (0, a.jsx)(h.A, {
                    id: "chatgptConversations.gpts.migration.unavailableAppsOmitOrEdit",
                    defaultMessage:
                      "These apps aren\u2019t available to you. Edit the GPT to remove or replace them, or migrate without them.",
                  })
                : (0, a.jsx)(h.A, {
                    id: "chatgptConversations.gpts.migration.unavailableAppsOmit",
                    defaultMessage: "These apps aren\u2019t available to you. You can migrate without them.",
                  })),
            (o[4] = u),
            (o[5] = g),
            (o[6] = e))
          : (e = o[6]),
          (i = e))
      } else if (g) {
        let e
        ;(o[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "chatgptConversations.gpts.migration.unavailableAppsReadOnly",
              defaultMessage:
                "This GPT can\u2019t be migrated because required apps are unavailable. GPT editing and publishing are no longer available.",
            })),
            (o[7] = e))
          : (e = o[7]),
          (i = e))
      } else {
        let e
        ;(o[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "chatgptConversations.gpts.migration.unavailableAppsOwnerHelp",
              defaultMessage:
                "Ask the GPT owner to remove or replace the unavailable apps and publish an update before migrating",
            })),
            (o[8] = e))
          : (e = o[8]),
          (i = e))
      }
      return (
        o[9] !== i
          ? ((t = (0, a.jsx)("p", { className: "select-none", children: i })), (o[9] = i), (o[10] = t))
          : (t = o[10]),
        o[11] !== d ? ((n = d.map(e_)), (o[11] = d), (o[12] = n)) : (n = o[12]),
        o[13] !== n
          ? ((l = (0, a.jsx)("ul", { className: "flex flex-col gap-1 wrap-anywhere select-text", children: n })),
            (o[13] = n),
            (o[14] = l))
          : (l = o[14]),
        o[15] !== t || o[16] !== l
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [t, l] })),
            (o[15] = t),
            (o[16] = l),
            (o[17] = r))
          : (r = o[17]),
        r
      )
    }
    function e_(e) {
      return (0, a.jsx)("li", { children: e }, e)
    }
    function eb(e) {
      return (0, a.jsx)(
        "li",
        {
          children: (0, a.jsx)(h.A, {
            id: "chatgptConversations.gpts.migration.unavailableApp.edit_help",
            defaultMessage:
              "<strong>{appName}</strong> is no longer available. Edit the GPT to remove or replace it with an available app.",
            values: { appName: e, strong: ey },
          }),
        },
        e,
      )
    }
    function ey(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e }, "strong")
    }
    function ex(e) {
      let i,
        t,
        n,
        l,
        r,
        o,
        d,
        u,
        c,
        g,
        p,
        f,
        m,
        v,
        _,
        b,
        y,
        x,
        k,
        w = (0, s.c)(113),
        {
          sourceAudience: j,
          files: C,
          appCheck: A,
          canMigrate: P,
          canPublishPlugin: M,
          canSharePlugin: z,
          failure: I,
          fileCheck: S,
          hasCustomActions: T,
          isCheckingSharing: N,
          isWorkspaceAccount: F,
          sharingCheckFailed: G,
          sharingChecked: q,
          canEdit: Y,
          canOmitUnavailableApps: O,
          canOmitOversizedFiles: D,
          editingDisabled: U,
        } = e,
        E = A?.status === "loading",
        $ = P && A?.status === "ready"
      if (
        w[0] !== A ||
        w[1] !== Y ||
        w[2] !== P ||
        w[3] !== D ||
        w[4] !== O ||
        w[5] !== M ||
        w[6] !== z ||
        w[7] !== U ||
        w[8] !== I ||
        w[9] !== S ||
        w[10] !== C ||
        w[11] !== T ||
        w[12] !== N ||
        w[13] !== F ||
        w[14] !== $ ||
        w[15] !== G ||
        w[16] !== q ||
        w[17] !== j
      ) {
        let e, s, p, f
        if (
          ((u = null != I && "request" !== I.kind ? I.issues.filter(ek) : []),
          (r = ej.noIssues),
          $ && I?.kind !== "request"
            ? null != I || S?.oversized?.length || S?.unavailable.length || S?.profilePicture != null
              ? (r = ej.needsReview)
              : S?.unchecked.length && (r = ej.fileCheckFailed)
            : (r = ej.checkFailed),
          (d =
            (S?.oversized?.length ?? 0) > 0 ||
            (S?.unavailable.length ?? 0) > 0 ||
            (S?.unchecked.length ?? 0) > 0 ||
            S?.profilePicture != null),
          w[28] !== r ? ((e = (0, a.jsx)(h.A, { ...r })), (w[28] = r), (w[29] = e)) : (e = w[29]),
          (o = e),
          u.length > 0 || S?.oversized?.length)
        )
          o = (0, a.jsx)(h.A, {
            id: "chatgptConversations.gpts.migration.readiness.oversizedCount",
            defaultMessage: "{count, plural, one {# file is too large} other {# files are too large}}",
            values: { count: u.length || S?.oversized?.length },
          })
        else if (S?.unavailable.length) {
          let e
          ;(w[30] !== S.unavailable.length
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.readiness.unavailableFileCount",
                defaultMessage: "{count, plural, one {# file unavailable} other {# files unavailable}}",
                values: { count: S.unavailable.length },
              })),
              (w[30] = S.unavailable.length),
              (w[31] = e))
            : (e = w[31]),
            (o = e))
        } else if (S?.profilePicture?.status === "tooLarge") {
          let e
          ;(w[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.readiness.profilePictureTooLarge",
                defaultMessage: "Profile picture too large",
              })),
              (w[32] = e))
            : (e = w[32]),
            (o = e))
        } else if (S?.profilePicture?.status === "unavailable") {
          let e
          ;(w[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.readiness.profilePictureUnavailable",
                defaultMessage: "Profile picture unavailable",
              })),
              (w[33] = e))
            : (e = w[33]),
            (o = e))
        } else if (S?.profilePicture?.status === "unchecked") {
          let e
          ;(w[34] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.readiness.profilePictureUnchecked",
                defaultMessage: "Couldn\u2019t check profile picture",
              })),
              (w[34] = e))
            : (e = w[34]),
            (o = e))
        }
        ;((t = ej.noIssues),
          $ && A?.apps != null
            ? A.apps.unavailable.length > 0
              ? (t = ej.appsUnavailable)
              : A.apps.disabledByAdmin.length > 0
                ? (t = ej.appsDisabled)
                : T && (t = ej.unsupportedActions)
            : (t = ej.checkFailed))
        let m = A?.status === "ready" ? A.apps?.unavailable : void 0,
          v = A?.status === "ready" ? A.apps?.disabledByAdmin : void 0,
          _ = (m?.length ?? 0) + (v?.length ?? 0)
        if (
          (w[35] !== t ? ((s = (0, a.jsx)(h.A, { ...t })), (w[35] = t), (w[36] = s)) : (s = w[36]),
          (n = s),
          m?.length && v?.length)
        ) {
          let e
          ;(w[37] !== _
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.readiness.appIssueCount",
                defaultMessage: "{count, plural, one {# app needs attention} other {# apps need attention}}",
                values: { count: _ },
              })),
              (w[37] = _),
              (w[38] = e))
            : (e = w[38]),
            (n = e))
        } else if (null != m && m.length > 0) {
          let e
          ;(w[39] !== m.length
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.readiness.unavailableAppCount",
                defaultMessage: "{count, plural, one {# app is unavailable} other {# apps are unavailable}}",
                values: { count: m.length },
              })),
              (w[39] = m.length),
              (w[40] = e))
            : (e = w[40]),
            (n = e))
        } else if (null != v && v.length > 0) {
          let e
          ;(w[41] !== v.length
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.readiness.disabledAppCount",
                defaultMessage: "{count, plural, one {# app is disabled} other {# apps are disabled}}",
                values: { count: v.length },
              })),
              (w[41] = v.length),
              (w[42] = e))
            : (e = w[42]),
            (n = e))
        }
        if (
          (w[43] !== P ||
          w[44] !== M ||
          w[45] !== z ||
          w[46] !== N ||
          w[47] !== F ||
          w[48] !== G ||
          w[49] !== q ||
          w[50] !== j
            ? ((p = (function ({
                sourceAudience: e,
                canMigrate: i,
                isWorkspaceAccount: t,
                canSharePlugin: a,
                canPublishPlugin: s,
                isCheckingSharing: n,
                sharingCheckFailed: l,
                sharingChecked: r,
              }) {
                return i
                  ? n
                    ? "restricted"
                    : l
                      ? "error"
                      : t
                        ? r
                          ? "public" === e
                            ? a
                              ? s
                                ? "publicBoth"
                                : "publicShare"
                              : s
                                ? "publicPublish"
                                : "publicDisabled"
                            : "shared" !== e || a
                              ? "published" !== e || s
                                ? a
                                  ? "enabled"
                                  : s
                                    ? "publish"
                                    : "private" === e
                                      ? "private"
                                      : "disabled"
                                : a
                                  ? "publishUnavailable"
                                  : "publishPrivate"
                              : "sharedUnavailable"
                          : "restricted"
                        : "public" === e
                          ? "publicPrivate"
                          : "personal"
                  : "unavailable"
              })({
                sourceAudience: j,
                canMigrate: P,
                isWorkspaceAccount: F,
                canSharePlugin: z,
                canPublishPlugin: M,
                isCheckingSharing: N,
                sharingCheckFailed: G,
                sharingChecked: q,
              })),
              (w[43] = P),
              (w[44] = M),
              (w[45] = z),
              (w[46] = N),
              (w[47] = F),
              (w[48] = G),
              (w[49] = q),
              (w[50] = j),
              (w[51] = p))
            : (p = w[51]),
          (c = p),
          w[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = [
                "disabled",
                "sharedUnavailable",
                "publishUnavailable",
                "publishPrivate",
                "publicBoth",
                "publicShare",
                "publicPublish",
                "publicDisabled",
                "publicPrivate",
              ]),
              (w[52] = f))
            : (f = w[52]),
          (g = f.includes(c)),
          A?.status === "ready" && null == A.apps)
        ) {
          let e
          ;(w[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.readiness.appLookupFailed",
                defaultMessage:
                  "We couldn\u2019t confirm whether this GPT\u2019s required apps are available and enabled. Check again before migrating.",
              })),
              (w[53] = e))
            : (e = w[53]),
            (i = e))
        } else if (_ > 0 || T) {
          let e,
            t,
            s,
            n,
            l = _ > 0 ? "alert" : void 0
          ;(w[54] !== Y || w[55] !== O || w[56] !== U || w[57] !== m
            ? ((e =
                null != m && m.length > 0
                  ? (0, a.jsx)(ev, { unavailable: m, canEdit: Y, canOmit: O, editingDisabled: U })
                  : null),
              (w[54] = Y),
              (w[55] = O),
              (w[56] = U),
              (w[57] = m),
              (w[58] = e))
            : (e = w[58]),
            w[59] !== v || w[60] !== m
              ? ((t = v?.map((e) =>
                  (0, a.jsx)(
                    "p",
                    {
                      children:
                        null != m && m.length > 0
                          ? (0, a.jsx)(h.A, {
                              id: "chatgptConversations.gpts.migration.readiness.disabledAppCombinedHelp",
                              defaultMessage:
                                "{appName} is disabled. After migration, the plugin will stay disabled until your admin enables {appName}.",
                              values: { appName: e.name || e.id },
                            })
                          : (0, a.jsx)(h.A, {
                              id: "chatgptConversations.gpts.migration.readiness.disabledAppHelp",
                              defaultMessage:
                                "{appName} is disabled by your admin. You can migrate, but the plugin will stay disabled until this app is enabled.",
                              values: { appName: e.name || e.id },
                            }),
                    },
                    e.id,
                  ),
                )),
                (w[59] = v),
                (w[60] = m),
                (w[61] = t))
              : (t = w[61]),
            w[62] !== T
              ? ((s = T
                  ? (0, a.jsx)("p", {
                      children: (0, a.jsx)(h.A, {
                        id: "chatgptConversations.gpts.migration.readiness.unsupportedActionsHelp",
                        defaultMessage:
                          "Features that use custom actions won\u2019t work in the plugin. You can migrate without them.",
                      }),
                    })
                  : null),
                (w[62] = T),
                (w[63] = s))
              : (s = w[63]),
            w[64] !== l || w[65] !== e || w[66] !== t || w[67] !== s
              ? ((n = (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3 wrap-anywhere",
                  role: l,
                  children: [e, t, s],
                })),
                (w[64] = l),
                (w[65] = e),
                (w[66] = t),
                (w[67] = s),
                (w[68] = n))
              : (n = w[68]),
            (i = n))
        } else i = void 0
        if (u.length > 0) {
          let e, i
          ;(w[69] !== U || w[70] !== C
            ? ((e = (e, i) => {
                let t = C?.find((i) => i.file_id === e.resource.id),
                  s = e.resource.name || (t?.file_response_type === "full_file_response" ? t.name : void 0)
                return (0, a.jsx)(
                  "p",
                  {
                    children:
                      !U && s
                        ? (0, a.jsx)(h.A, {
                            id: "chatgptConversations.gpts.migration.readiness.replaceFile",
                            defaultMessage: "{filename} needs to be replaced with a smaller file",
                            values: { filename: s },
                          })
                        : e.message,
                  },
                  i,
                )
              }),
              (w[69] = U),
              (w[70] = C),
              (w[71] = e))
            : (e = w[71]),
            w[72] !== U
              ? ((i = U
                  ? (0, a.jsx)("p", {
                      children: (0, a.jsx)(h.A, {
                        id: "chatgptConversations.gpts.migration.readiness.editingUnavailable",
                        defaultMessage:
                          "This GPT can\u2019t be migrated because of the issues above. GPT editing and publishing are no longer available.",
                      }),
                    })
                  : null),
                (w[72] = U),
                (w[73] = i))
              : (i = w[73]),
            (l = (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 wrap-anywhere",
              role: "alert",
              children: [u.map(e), i],
            })))
        } else if (d && null != S) {
          let e
          ;(w[74] !== Y || w[75] !== D || w[76] !== S || w[77] !== C
            ? ((e = (0, a.jsx)(es, { fileCheck: S, files: C, canOmitOversizedFiles: D, canEdit: Y })),
              (w[74] = Y),
              (w[75] = D),
              (w[76] = S),
              (w[77] = C),
              (w[78] = e))
            : (e = w[78]),
            (l = e))
        }
        ;((w[0] = A),
          (w[1] = Y),
          (w[2] = P),
          (w[3] = D),
          (w[4] = O),
          (w[5] = M),
          (w[6] = z),
          (w[7] = U),
          (w[8] = I),
          (w[9] = S),
          (w[10] = C),
          (w[11] = T),
          (w[12] = N),
          (w[13] = F),
          (w[14] = $),
          (w[15] = G),
          (w[16] = q),
          (w[17] = j),
          (w[18] = i),
          (w[19] = t),
          (w[20] = n),
          (w[21] = l),
          (w[22] = r),
          (w[23] = o),
          (w[24] = d),
          (w[25] = u),
          (w[26] = c),
          (w[27] = g))
      } else
        ((i = w[18]),
          (t = w[19]),
          (n = w[20]),
          (l = w[21]),
          (r = w[22]),
          (o = w[23]),
          (d = w[24]),
          (u = w[25]),
          (c = w[26]),
          (g = w[27]))
      w[79] !== E || w[80] !== N
        ? ((p =
            E || N
              ? (0, a.jsx)("span", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(h.A, {
                    id: "chatgptConversations.gpts.migration.checkingReadiness",
                    defaultMessage: "Checking migration readiness\u2026",
                  }),
                })
              : null),
          (w[79] = E),
          (w[80] = N),
          (w[81] = p))
        : (p = w[81])
      let B = r === ej.noIssues,
        W = I?.kind === "validation" || u.length > 0 || d
      w[82] !== l || w[83] !== o || w[84] !== E || w[85] !== B || w[86] !== W
        ? ((f = (0, a.jsx)(ew, {
            label: ej.instructionsAndFiles,
            loading: E,
            positive: B,
            status: o,
            warning: W,
            details: l,
          })),
          (w[82] = l),
          (w[83] = o),
          (w[84] = E),
          (w[85] = B),
          (w[86] = W),
          (w[87] = f))
        : (f = w[87])
      let L = t === ej.noIssues,
        R = (A?.status === "ready" && null == A.apps) || t === ej.appsUnavailable || t === ej.appsDisabled || T
      w[88] !== i || w[89] !== n || w[90] !== E || w[91] !== L || w[92] !== R
        ? ((m = (0, a.jsx)(ew, { label: ej.apps, loading: E, positive: L, status: n, warning: R, details: i })),
          (w[88] = i),
          (w[89] = n),
          (w[90] = E),
          (w[91] = L),
          (w[92] = R),
          (w[93] = m))
        : (m = w[93])
      let K = E || N
      w[94] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["personal", "private", "enabled", "publish"]), (w[94] = v))
        : (v = w[94])
      let H = v.includes(c),
        Q = g || "error" === c
      return (
        w[95] !== c
          ? ((_ = (0, a.jsx)(h.A, {
              id: "chatgptConversations.gpts.migration.readiness.sharing.audience_status",
              defaultMessage:
                "{status, select, unavailable {Migration unavailable} error {Couldn\u2019t check sharing} personal {Private plugin} private {No issues found} enabled {Sharing enabled} publish {Publishing enabled} disabled {Sharing disabled} sharedUnavailable {Sharing unavailable} publishUnavailable {Publishing unavailable} publishPrivate {Publishing unavailable} publicBoth {Public sharing unavailable} publicShare {Public sharing unavailable} publicPublish {Public sharing unavailable} publicPrivate {Public sharing unavailable} publicDisabled {Sharing disabled} other {Workspace permissions apply}}",
              values: { status: c },
            })),
            (w[95] = c),
            (w[96] = _))
          : (_ = w[96]),
        w[97] !== c || w[98] !== g
          ? ((b = g
              ? (0, a.jsx)(h.A, {
                  id: "chatgptConversations.gpts.migration.readiness.sharing.audience_help",
                  defaultMessage:
                    "{status, select, sharedUnavailable {This GPT is shared in your workspace, but plugin sharing is disabled. The plugin will start private and can\u2019t be shared with the same people.} publishUnavailable {This GPT is published to your workspace, but publishing plugins to the workspace directory is disabled. You can share the plugin with people or groups instead.} publishPrivate {This GPT is published to your workspace, but plugin sharing and publishing are disabled. The plugin will stay private.} publicBoth {Plugins can\u2019t be shared publicly. Share within your workspace, publish to its plugin directory, or keep it private.} publicShare {Plugins can\u2019t be shared publicly. Share with people or groups in your workspace, or keep it private.} publicPublish {Plugins can\u2019t be shared publicly. Publish to your workspace\u2019s plugin directory or keep it private.} publicDisabled {Your workspace doesn\u2019t allow plugin sharing. The plugin will stay private.} publicPrivate {Plugins can\u2019t be shared publicly. The plugin will stay private.} other {This plugin will remain private. Ask an admin to enable sharing.}}",
                  values: { status: c },
                })
              : void 0),
            (w[97] = c),
            (w[98] = g),
            (w[99] = b))
          : (b = w[99]),
        w[100] !== H || w[101] !== Q || w[102] !== _ || w[103] !== b || w[104] !== K
          ? ((y = (0, a.jsx)(ew, {
              label: ej.accessAndSharing,
              loading: K,
              positive: H,
              warning: Q,
              status: _,
              details: b,
            })),
            (w[100] = H),
            (w[101] = Q),
            (w[102] = _),
            (w[103] = b),
            (w[104] = K),
            (w[105] = y))
          : (y = w[105]),
        w[106] !== y || w[107] !== f || w[108] !== m
          ? ((x = (0, a.jsxs)("dl", {
              className: "flex flex-col divide-y divide-border-subtle text-sm",
              children: [f, m, y],
            })),
            (w[106] = y),
            (w[107] = f),
            (w[108] = m),
            (w[109] = x))
          : (x = w[109]),
        w[110] !== p || w[111] !== x
          ? ((k = (0, a.jsxs)("div", {
              className: "rounded-2xl bg-surface-secondary px-5 select-none",
              children: [p, x],
            })),
            (w[110] = p),
            (w[111] = x),
            (w[112] = k))
          : (k = w[112]),
        k
      )
    }
    function ek(e) {
      return "knowledge_file_too_large" === e.code && "knowledge_file" === e.resource.type
    }
    function ew(e) {
      let i,
        t,
        n,
        l,
        r,
        o,
        d = (0, s.c)(19),
        { label: u, loading: c, positive: g, status: p, warning: f, details: m } = e,
        v = void 0 !== f && f
      d[0] !== u
        ? ((i = (0, a.jsx)("dt", {
            className: "min-w-0 basis-35 text-secondary",
            children: (0, a.jsx)(h.A, { ...u }),
          })),
          (d[0] = u),
          (d[1] = i))
        : (i = d[1])
      let _ = v ? "text-warning" : "text-default"
      return (
        d[2] !== _
          ? ((t = (0, eh.A)("flex min-w-0 grow basis-32 items-center justify-end gap-2 text-end", _)),
            (d[2] = _),
            (d[3] = t))
          : (t = d[3]),
        d[4] !== c || d[5] !== g || d[6] !== p || d[7] !== v
          ? ((n = c
              ? (0, a.jsxs)("span", {
                  className: "flex items-center gap-2 motion-safe:animate-pulse",
                  "aria-hidden": !0,
                  children: [
                    (0, a.jsx)("span", { className: "h-5 w-25 rounded-full bg-text/10" }),
                    (0, a.jsx)("span", { className: "size-5 shrink-0 rounded-full bg-text/10" }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", { className: "min-w-0 wrap-anywhere", children: p }),
                    g && (0, a.jsx)(em.gL9, { className: "text-success" }),
                    !g && v && (0, a.jsx)(em.dGN, { className: "text-warning" }),
                    !g && !v && (0, a.jsx)(em.zOs, { className: "text-secondary" }),
                  ],
                })),
            (d[4] = c),
            (d[5] = g),
            (d[6] = p),
            (d[7] = v),
            (d[8] = n))
          : (n = d[8]),
        d[9] !== t || d[10] !== n
          ? ((l = (0, a.jsx)("dd", { className: t, children: n })), (d[9] = t), (d[10] = n), (d[11] = l))
          : (l = d[11]),
        d[12] !== m || d[13] !== c
          ? ((r =
              c || null == m
                ? null
                : (0, a.jsx)("dd", { className: "w-full border-s border-default ps-3 text-default", children: m })),
            (d[12] = m),
            (d[13] = c),
            (d[14] = r))
          : (r = d[14]),
        d[15] !== i || d[16] !== l || d[17] !== r
          ? ((o = (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-wrap items-center justify-between gap-x-5 gap-y-3 py-5",
              children: [i, l, r],
            })),
            (d[15] = i),
            (d[16] = l),
            (d[17] = r),
            (d[18] = o))
          : (o = d[18]),
        o
      )
    }
    let ej = (0, W.YK)({
      instructionsAndFiles: {
        id: "chatgptConversations.gpts.migration.readiness.instructionsAndFiles",
        defaultMessage: "Instructions and files",
      },
      apps: { id: "chatgptConversations.gpts.migration.readiness.appsAndActions", defaultMessage: "Apps and actions" },
      accessAndSharing: {
        id: "chatgptConversations.gpts.migration.readiness.accessAndSharing",
        defaultMessage: "Access and sharing",
      },
      noIssues: { id: "chatgptConversations.gpts.migration.readiness.noIssues", defaultMessage: "No issues found" },
      needsReview: { id: "chatgptConversations.gpts.migration.readiness.needsReview", defaultMessage: "Needs review" },
      fileCheckFailed: {
        id: "chatgptConversations.gpts.migration.readiness.fileCheckFailed",
        defaultMessage: "Couldn\u2019t check files",
      },
      checkFailed: {
        id: "chatgptConversations.gpts.migration.readiness.checkFailed",
        defaultMessage: "Couldn\u2019t check",
      },
      unsupportedActions: {
        id: "chatgptConversations.gpts.migration.readiness.unsupportedActions",
        defaultMessage: "Unsupported actions",
      },
      appsUnavailable: {
        id: "chatgptConversations.gpts.migration.readiness.appsUnavailable",
        defaultMessage: "Apps unavailable",
      },
      appsDisabled: {
        id: "chatgptConversations.gpts.migration.readiness.appsDisabled",
        defaultMessage: "Apps disabled by admin",
      },
    })
    var eC = t("hfkq"),
      eA = t("iJ7F"),
      eP = t("w8VL")
    let eM = v.Ikc({ action_ids: v.YOg(v.L5J()).nullish().catch(null) }),
      ez = /^(?:asdk_app|connector|templated_apps)_[A-Za-z0-9][A-Za-z0-9_-]*$/
    function eI(e) {
      let i,
        t,
        n,
        o,
        u,
        h,
        v,
        j,
        C,
        A,
        B,
        W,
        L,
        H,
        Q,
        Z,
        J,
        V,
        X,
        ei,
        et,
        ea,
        es,
        en,
        el,
        er = (0, s.c)(134),
        { resource: eo, remigration: ed, onClose: eu, onMigratingChange: ec, onMigrated: ef } = e,
        eh = (0, g.gh)(q.u),
        em = (0, f.A)(),
        ev = (0, m.Zp)(),
        e_ = (0, Y.AS)(),
        { accountId: eb, userId: ey } = (0, k.As)()
      er[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = { preview: !1 }), (er[0] = i)) : (i = er[0])
      let { data: ex } = (0, w.YL)(void 0, i),
        ek = (0, Y.Zj)("2160578039"),
        ew = (0, g._U)(O.X, "2513446768")
      er[1] !== ew ? ((t = ew?.get("disable_gpt_updates", !1)), (er[1] = ew), (er[2] = t)) : (t = er[2])
      let ej = !0 === t,
        eA = (0, g._U)(O.X, "73506792"),
        eI = eg.parse(eA?.value.max_file_bytes),
        eD = (0, g._U)(O.X, "2562735250")?.get("enabled", !1) === !0,
        eU = (0, F.l)(ex, (0, Y.Zj)("1355972088")),
        eE = (0, g._U)(O.X, "2826703856")?.get("enable_gpt_fe_controls", !1) === !0,
        e$ = (0, Y.Zj)("782250190"),
        {
          data: eB,
          isPending: eW,
          isError: eL,
        } = (0, g._U)(x.Jk, eb ?? "", {
          enabled: null != eb && ex?.id === eb && "workspace" === ex.structure && (eU || eE),
        }),
        [eR, eK] = (0, p.useState)(ed ? void 0 : eo.gizmo.migrated_plugin_id),
        eH = (0, g._U)(E.v, `${eb}:${eR}`)
      er[3] !== eo.tools ? ((n = eo.tools.some(eY)), (er[3] = eo.tools), (er[4] = n)) : (n = er[4])
      let [eQ, eZ] = (0, p.useState)(n),
        [eJ, eV] = (0, p.useState)(!1),
        [eX, e0] = (0, p.useState)(!1),
        [e1, e2] = (0, p.useState)(),
        [e4, e3] = (0, p.useState)()
      er[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = { hasCustomActions: !1, disabledAppIds: [] }), (er[5] = o))
        : (o = er[5])
      let [e5, e8] = (0, p.useState)(o),
        e7 = (0, p.useRef)(!1),
        e6 = (0, $.T8)({ account: ex, rbacEnabled: eE, permissions: eB?.permissions, isPending: eW, isError: eL }),
        e9 =
          eD &&
          (0, $.l5)({
            resource: eo,
            account: ex,
            accountId: eb,
            userId: ey,
            enabled: ek,
            allowMigrated: eX,
            remigration: ed,
          }) &&
          (0, F.J)(ex, eU, eB?.permissions),
        ie = (0, l.j)({
          queryKey: ["chatgpt-gizmos", "migration-preview", eb, ey, eo.gizmo.id, eo.gizmo.gizmo_config_id, eI],
          queryFn: async (e) => {
            let { signal: i } = e
            if (null == eb) throw Error("GPT migration requires an account")
            let t = await D.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                parameters: { path: { gizmo_id_or_short_url: eo.gizmo.id } },
                additionalHeaders: { "ChatGPT-Account-ID": eb },
                expectedErrorStatuses: [401, 403, 404],
                signal: i,
              }),
              a = t.gizmo.migrated_plugin_id
                ? await eh.queryClient.fetchQuery(
                    (0, eC.d)({ gizmoId: t.gizmo.id, pluginId: t.gizmo.migrated_plugin_id }, eb, ey),
                  )
                : void 0
            i.throwIfAborted()
            let s = a?.deleted_plugin_id && a?.gizmo_config_id ? a : void 0,
              n = s?.gizmo_config_id ?? t.gizmo.gizmo_config_id,
              [l, r] = await Promise.all([
                null == t.gizmo.migrated_plugin_id || null != s
                  ? (async function (e, i, t) {
                      let a = [
                        ...new Set(
                          e.tools.flatMap((e) => {
                            if ("connector" !== e.type) return []
                            let i = eM.safeParse(e.settings)
                            return i.success
                              ? (i.data.action_ids ?? []).filter((e) => "string" == typeof e && ez.test(e))
                              : []
                          }),
                        ),
                      ]
                      if (0 === a.length) return { unavailable: [], disabledByAdmin: [] }
                      let s = (
                          await Promise.all(
                            d()(a, 100).map((e) =>
                              D.Request.safePost("/aip/connectors/batch", {
                                surface: "plugin_management",
                                parameters: { query: { apply_eligibility_filter: !1 } },
                                requestBody: { connector_ids: e, include_actions: !1 },
                                additionalHeaders: { "ChatGPT-Account-ID": i, "OAI-Product-Sku": "CONNECTOR_SETTING" },
                                expectedErrorStatuses: [401, 403, 404],
                                signal: t,
                              }),
                            ),
                          )
                        ).flatMap((e) => e.connectors),
                        n = new Map(s.map((e) => [(0, _.$)(e.id), e]))
                      return {
                        unavailable: a.filter((e) => !n.has((0, _.$)(e))),
                        disabledByAdmin: s.filter((e) => "DISABLED_BY_ADMIN" === e.status),
                      }
                    })(t, eb, i).catch(() => (i.throwIfAborted(), null))
                  : { unavailable: [], disabledByAdmin: [] },
                null == t.gizmo.migrated_plugin_id || null != s
                  ? (async function (e, i, t, a) {
                      let s = { maxFileBytes: a, unavailable: [], unchecked: [] },
                        n = AbortSignal.timeout(1e4),
                        l = AbortSignal.any([t, n]),
                        r = new Map(e.files.map((e) => [e.file_id || e.id, e])),
                        o = new Map(
                          e.files.flatMap((e) =>
                            "full_file_response" === e.file_response_type && null != e.size && e.size > a
                              ? [[e.file_id || e.id, e.name]]
                              : [],
                          ),
                        ),
                        u = e.gizmo.display.profile_pic_id,
                        g = c()([...r.keys(), ...(u ? [u] : [])])
                      for (let c of d()(g, 4))
                        await Promise.all(
                          c.map(async (d) => {
                            t.throwIfAborted()
                            let c = r.get(d),
                              g = c?.file_response_type === "full_file_response" && !!c.file_id,
                              p = d === u
                            if ((null == c || g || s.unchecked.push(d), (!g && !p) || n.aborted)) {
                              ;(g && s.unchecked.push(d), p && (s.profilePicture = { fileId: d, status: "unchecked" }))
                              return
                            }
                            try {
                              let t = await D.Request.safeGet("/files/{file_id}", {
                                parameters: { path: { file_id: d }, query: { gizmo_id: e.gizmo.id } },
                                additionalHeaders: { "ChatGPT-Account-ID": i },
                                expectedErrorStatuses: [401, 403, 404, 408, 429, 500, 502, 503, 504],
                                signal: l,
                              })
                              ;(g && null != t.size && t.size > a && !o.has(d) && o.set(d, t.name || c.name),
                                p &&
                                  (null == t.size || !Number.isFinite(t.size) || t.size < 0
                                    ? (s.profilePicture = { fileId: d, name: t.name || void 0, status: "unchecked" })
                                    : t.size > 5242880 &&
                                      (s.profilePicture = { fileId: d, name: t.name || void 0, status: "tooLarge" })))
                            } catch (i) {
                              t.throwIfAborted()
                              let e = i instanceof R.FetchError && 404 === i.status ? "unavailable" : "unchecked"
                              ;(g && s[e].push(d), p && (s.profilePicture = { fileId: d, status: e }))
                            }
                          }),
                        )
                      return (
                        o.size > 0 &&
                          ((s.oversized = Array.from(o, ([e, i]) => ({ fileId: e, name: i || void 0 }))),
                          (s.unavailable = s.unavailable.filter((e) => !o.has(e))),
                          (s.unchecked = s.unchecked.filter((e) => !o.has(e)))),
                        s
                      )
                    })(t, eb, i, eI)
                  : void 0,
              ])
            return { resource: t, remigration: s, configId: n, apps: l, fileCheck: r }
          },
          enabled: e9 && null == eR && ("allowed" === e6 || eX || null != e1),
          retry: !1,
          staleTime: 0,
          refetchOnWindowFocus: !1,
        }),
        { data: ii, isFetching: it, isError: ia, error: is, refetch: il } = (0, r.I)(ie),
        ir = eX || (ii?.resource.gizmo.migrated_plugin_id != null && !ii.remigration),
        io = e9 && ("allowed" === e6 || ir)
      er[6] !== ii || er[7] !== eQ
        ? ((u = eQ || ii?.resource.tools.some(eq) === !0), (er[6] = ii), (er[7] = eQ), (er[8] = u))
        : (u = er[8])
      let id = u
      if (it && !eJ) {
        let e
        ;(er[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = { status: "loading" }), (er[9] = e)) : (e = er[9]),
          (h = e))
      } else if (ia) {
        let e, i
        er[10] !== is ? ((e = ee(is)), (er[10] = is), (er[11] = e)) : (e = er[11])
        let t = e,
          a = "request" === t.kind ? t.status : void 0
        ;(er[12] !== a ? ((i = { status: "error", httpStatus: a }), (er[12] = a), (er[13] = i)) : (i = er[13]), (h = i))
      } else if (null == ii) {
        let e
        ;(er[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { status: "loading" }), (er[14] = e))
          : (e = er[14]),
          (h = e))
      } else {
        let e
        ;(er[15] !== ii.apps
          ? ((e = { status: "ready", apps: ii.apps }), (er[15] = ii.apps), (er[16] = e))
          : (e = er[16]),
          (h = e))
      }
      let iu = "ready" === h.status && h.apps?.unavailable.length === 0,
        ic =
          e4?.gizmoId === eo.gizmo.id && e4.accountId === eb && e4.userId === ey && e4.configId === ii?.configId
            ? e4
            : void 0
      er[17] !== ia || er[18] !== e5 || er[19] !== e1?.kind || er[20] !== id || er[21] !== ii?.apps || er[22] !== ic
        ? ((v =
            e1?.kind === "request" &&
            (ia ||
              ii?.apps?.unavailable.some((e) => !ic?.appIds.includes(e)) === !0 ||
              (id && !e5.hasCustomActions) ||
              ii?.apps?.disabledByAdmin.some((e) => !e5.disabledAppIds.includes(e.id)) === !0)),
          (er[17] = ia),
          (er[18] = e5),
          (er[19] = e1?.kind),
          (er[20] = id),
          (er[21] = ii?.apps),
          (er[22] = ic),
          (er[23] = v))
        : (v = er[23])
      let ig = v,
        ip = ii?.resource.gizmo,
        ih = ip?.share_recipient === "link" || ip?.share_recipient === "marketplace",
        im =
          e$ &&
          ex?.id === eb &&
          ex?.structure === "workspace" &&
          ip?.workspace_id === eb &&
          ip.author.user_id === ex.account_user_id,
        iv = ip?.gizmo_config_id
      ;(er[24] !== eb || er[25] !== eo.gizmo.id || er[26] !== iv || er[27] !== ey
        ? ((j = ["chatgpt-gizmos", "migration-sharing-capabilities", eb, ey, eo.gizmo.id, iv]),
          (er[24] = eb),
          (er[25] = eo.gizmo.id),
          (er[26] = iv),
          (er[27] = ey),
          (er[28] = j))
        : (j = er[28]),
        er[29] !== eb || er[30] !== eo.gizmo.id
          ? ((C = (e) => {
              let { signal: i } = e
              if (null == eb) throw Error("Plugin sharing capabilities require an account")
              return D.Request.safeGet("/gizmos/{gizmo_id}/export/plugin/capabilities", {
                parameters: { path: { gizmo_id: eo.gizmo.id } },
                additionalHeaders: { "ChatGPT-Account-ID": eb },
                expectedErrorStatuses: [401, 403, 404],
                signal: i,
              })
            }),
            (er[29] = eb),
            (er[30] = eo.gizmo.id),
            (er[31] = C))
          : (C = er[31]))
      let i_ = io && null == eR && im
      er[32] !== C || er[33] !== i_ || er[34] !== j
        ? ((A = { queryKey: j, queryFn: C, enabled: i_, retry: !1, staleTime: 0, refetchOnWindowFocus: !1 }),
          (er[32] = C),
          (er[33] = i_),
          (er[34] = j),
          (er[35] = A))
        : (A = er[35])
      let { data: ib, isError: iy, isFetching: ix } = (0, r.I)(A),
        ik = io && null == eR && im && !iy && !ix && ib?.workspace_id === eb
      ;(io &&
        "ready" === h.status &&
        null != ii &&
        (0, $.l2)({
          resource: ii.resource,
          remigration: ii.remigration,
          account: ex,
          accountId: eb,
          userId: ey,
          enabled: ek,
          allowMigrated: eX,
          gptPermission: e6,
        }) &&
        (B = ii.resource.gizmo.author.user_id === (ex?.structure === "personal" ? ey : ex?.account_user_id)),
        er[36] !== e1 ||
        er[37] !== ii?.configId ||
        er[38] !== ii?.fileCheck?.oversized?.length ||
        er[39] !== ic?.fileIds.length
          ? ((W =
              ((ic?.fileIds.length ?? 0) > 0 || (ii?.fileCheck?.oversized?.length ?? 0) > 0) &&
              !!ii?.configId &&
              (null == e1 || null != K(e1))),
            (er[36] = e1),
            (er[37] = ii?.configId),
            (er[38] = ii?.fileCheck?.oversized?.length),
            (er[39] = ic?.fileIds.length),
            (er[40] = W))
          : (W = er[40]))
      let iw = W,
        ij =
          "ready" === h.status && (h.apps?.unavailable.length ?? 0) > 0 && !!ii?.configId && (null == e1 || ig || iw),
        iC = "ready" === h.status && null != h.apps && (iw || ij)
      er[41] !== eu
        ? ((L = () => {
            e7.current || eu()
          }),
          (er[41] = eu),
          (er[42] = L))
        : (L = er[42])
      let iA = L
      er[43] !== ev || er[44] !== eu || er[45] !== ef
        ? ((H = (e) => {
            ;(eu(), null != ef ? ef(e) : (0, I.Uz)(e, ev))
          }),
          (er[43] = ev),
          (er[44] = eu),
          (er[45] = ef),
          (er[46] = H))
        : (H = er[46])
      let iP = H
      er[47] !== eb ||
      er[48] !== iu ||
      er[49] !== io ||
      er[50] !== iC ||
      er[51] !== ij ||
      er[52] !== e1 ||
      er[53] !== id ||
      er[54] !== em ||
      er[55] !== eX ||
      er[56] !== ec ||
      er[57] !== iP ||
      er[58] !== eR ||
      er[59] !== ii ||
      er[60] !== ie ||
      er[61] !== ic?.fileIds ||
      er[62] !== eo.gizmo.id ||
      er[63] !== eh ||
      er[64] !== e8 ||
      er[65] !== e2 ||
      er[66] !== eZ ||
      er[67] !== eV ||
      er[68] !== e0 ||
      er[69] !== e3 ||
      er[70] !== eK ||
      er[71] !== e_ ||
      er[72] !== ey
        ? ((Q = (e) => {
            let i,
              t = void 0 !== e && e
            if (e7.current || null != eR || !io || (!iu && !ij && null == e1) || (t && !iC)) return
            let a =
              t && null != eb && ii?.configId
                ? {
                    accountId: eb,
                    userId: ey,
                    gizmoId: eo.gizmo.id,
                    configId: ii.configId,
                    fileIds: c()([...(ic?.fileIds ?? []), ...(ii.fileCheck?.oversized?.map(eG) ?? [])]),
                    appIds: ii.apps?.unavailable ?? [],
                  }
                : void 0
            ;((e7.current = !0),
              eV(!0),
              ec?.(!0),
              e2(void 0),
              e3(a),
              e8({ hasCustomActions: id, disabledAppIds: ii?.apps?.disabledByAdmin.map(eF) ?? [] }),
              eh.queryClient
                .fetchQuery(ie)
                .catch(eN)
                .then(async (e) => {
                  if (null == e) return
                  let { resource: t, apps: s, fileCheck: n } = e
                  if (e.remigration?.deleted_plugin_id !== ii?.remigration?.deleted_plugin_id) return
                  let l = eh.queryClient.getQueryData(["accounts", "check"])?.accounts?.find((e) => e.id === eb)
                  if (null == eb) return void e2({ kind: "request", status: 403 })
                  let r = e_.getDynamicConfig("2826703856").get("enable_gpt_fe_controls", !1),
                    o = eh.query.getData(x.Jk, eb)
                  if (
                    l?.structure === "workspace" &&
                    ((r && (null == t.gizmo.migrated_plugin_id || null != e.remigration)) ||
                      (0, F.l)(l, e_.checkGate("1355972088")))
                  )
                    try {
                      ;(await eh.query.cancel(x.Jk, eb),
                        await (0, b.ym)(eb),
                        (o = await eh.queryClient.fetchQuery({
                          ...eh.query.getOptions(x.Jk, eb),
                          queryFn: (e) => {
                            let { signal: i } = e
                            return (0, b.A2)(eh, eb, i, !0)
                          },
                          staleTime: 0,
                        })))
                    } catch {
                      e2({ kind: "request", status: 403 })
                      return
                    }
                  if (
                    eh.get(y.chatGptAuthenticatedAccountId$) !== eb ||
                    eh.get(y.chatGptAuthenticatedUserId$) !== ey ||
                    !e_.checkGate("2160578039") ||
                    !e_.getDynamicConfig("2562735250").get("enabled", !1) ||
                    !(0, F.J)(l, e_.checkGate("1355972088"), o?.permissions)
                  )
                    return void e2({ kind: "request", status: 403 })
                  let d = e.remigration ? void 0 : t.gizmo.migrated_plugin_id
                  if (null == d) {
                    if (null != a && e.configId !== a.configId) {
                      ;(e3(void 0),
                        e2({ kind: "request", status: 409, errorCode: "gpt_plugin_migration_source_changed" }))
                      return
                    }
                    if (
                      !(0, $.l2)({
                        resource: t,
                        remigration: e.remigration,
                        account: l,
                        accountId: eb,
                        userId: ey,
                        enabled: !0,
                        gptPermission: (0, $.T8)({
                          account: l,
                          rbacEnabled: e_.getDynamicConfig("2826703856").get("enable_gpt_fe_controls", !1),
                          permissions: o?.permissions,
                          isPending: !1,
                          isError: !1,
                        }),
                      })
                    )
                      return void e2({ kind: "request", status: 403 })
                    if (
                      null == s ||
                      n?.oversized?.some((e) => !a?.fileIds.includes(e.fileId)) ||
                      (null != n &&
                        (n.unavailable.some(
                          (e) => !a?.fileIds.includes(e) && !ii?.fileCheck?.unavailable.includes(e),
                        ) ||
                          n.unchecked.some((e) => !a?.fileIds.includes(e) && !ii?.fileCheck?.unchecked.includes(e)) ||
                          (null != n.profilePicture &&
                            (n.profilePicture.fileId !== ii?.fileCheck?.profilePicture?.fileId ||
                              n.profilePicture.status !== ii?.fileCheck?.profilePicture?.status)))) ||
                      (null != a && e3((a = { ...a, appIds: a.appIds.filter((e) => s.unavailable.includes(e)) })),
                      s.unavailable.some((e) => !a?.appIds.includes(e)) ||
                        s?.disabledByAdmin.some((e) => !ii?.apps?.disabledByAdmin.some((i) => i.id === e.id)))
                    )
                      return
                    if (!id && t.tools.some(eT)) return void eZ(!0)
                  }
                  if (null == d || eX) {
                    if (!e.configId) throw Error("Missing published GPT configuration for migration")
                    i = e.configId
                    let n = a?.appIds.filter((e) => s?.unavailable.includes(e)),
                      l = (a?.fileIds.length ?? 0) > 0 || (n?.length ?? 0) > 0,
                      r = await D.Request.safePost("/gizmos/{gizmo_id}/migrate/plugin", {
                        parameters: {
                          path: { gizmo_id: t.gizmo.id },
                          query: l
                            ? {
                                skip_incompatible_configs: !0,
                                skip_file_ids: a?.fileIds.length ? a.fileIds : void 0,
                                skip_app_ids: n?.length ? n : void 0,
                              }
                            : void 0,
                        },
                        requestBody: {
                          gizmo_config_id: e.configId,
                          deleted_plugin_id: e.remigration?.deleted_plugin_id,
                        },
                        expectedErrorStatuses: [400, 401, 403, 404, 409, 502],
                      })
                    if (
                      ((d = r.plugin_id),
                      eh.get(y.chatGptAuthenticatedAccountId$) !== eb || eh.get(y.chatGptAuthenticatedUserId$) !== ey)
                    )
                      return
                    ;(eh.set(E.v, `${eb}:${d}`, {
                      failedFiles: r.failed_files ?? [],
                      files: t.files,
                      skippedFiles: r.skipped_files?.map(eS) ?? [],
                    }),
                      null != r.skipped_files &&
                        r.skipped_files.length > 0 &&
                        eh.get(M.Id).warning(em.formatMessage(eP.o.description, { count: r.skipped_files.length })),
                      e0(!1))
                  }
                  if (eh.get(y.chatGptAuthenticatedAccountId$) !== eb || eh.get(y.chatGptAuthenticatedUserId$) !== ey)
                    return
                  let u = { ...t, gizmo: { ...t.gizmo, migrated_plugin_id: d } }
                  ;(eh.queryClient.setQueriesData({ queryKey: ["chatgpt-gizmos", "detail"] }, (e) =>
                    e?.gizmo.id === t.gizmo.id ? u : e,
                  ),
                    eh.queryClient.setQueryData(["chatgpt-gizmos", "detail", t.gizmo.id], u))
                  try {
                    ;(await D.Request.safePost("/ps/plugins/{plugin_id}/install", {
                      surface: "plugin_management",
                      parameters: { path: { plugin_id: d } },
                      additionalHeaders: { ...(0, S.A)(), "ChatGPT-Account-ID": eb },
                      expectedErrorStatuses: [400, 401, 403, 404, 409],
                    }),
                      eh.get(y.chatGptAuthenticatedAccountId$) === eb &&
                        eh.get(y.chatGptAuthenticatedUserId$) === ey &&
                        (0, z.jg)(eh, N.h4, d))
                  } catch {
                    eh.get(y.chatGptAuthenticatedAccountId$) === eb &&
                      eh.get(y.chatGptAuthenticatedUserId$) === ey &&
                      eh
                        .get(M.Id)
                        .warning(
                          em.formatMessage({
                            id: "chatgptConversations.gpts.migration.installFailed",
                            defaultMessage:
                              "Your plugin was migrated, but couldn\u2019t be installed. You can try installing it from its page.",
                          }),
                        )
                  }
                  if (eh.get(y.chatGptAuthenticatedAccountId$) !== eb || eh.get(y.chatGptAuthenticatedUserId$) !== ey)
                    return
                  ;((0, T.lA)((e) => (0, G.y)(eh.queryClient, e), !0), eK(d))
                  let c = eh.get(E.v, `${eb}:${d}`)
                  ;(c?.failedFiles.length || iP(d), eh.queryClient.invalidateQueries({ queryKey: ["chatgpt-gizmos"] }))
                })
                .catch((e) => {
                  if (eh.get(y.chatGptAuthenticatedAccountId$) === eb && eh.get(y.chatGptAuthenticatedUserId$) === ey) {
                    let t = ee(e),
                      s = K(t)
                    ;(null != eb && null != i && null != s
                      ? e3({
                          accountId: eb,
                          userId: ey,
                          gizmoId: eo.gizmo.id,
                          configId: i,
                          fileIds: [...new Set([...(a?.fileIds ?? []), ...s])],
                          appIds: a?.appIds ?? [],
                        })
                      : e3(a),
                      "request" === t.kind && "gpt_plugin_migration_editor_access_failed" === t.errorCode && e0(!0),
                      e2(t),
                      null != i && eh.queryClient.invalidateQueries({ queryKey: ie.queryKey }))
                  }
                })
                .finally(() => {
                  ;((e7.current = !1), eV(!1), ec?.(!1))
                }))
          }),
          (er[47] = eb),
          (er[48] = iu),
          (er[49] = io),
          (er[50] = iC),
          (er[51] = ij),
          (er[52] = e1),
          (er[53] = id),
          (er[54] = em),
          (er[55] = eX),
          (er[56] = ec),
          (er[57] = iP),
          (er[58] = eR),
          (er[59] = ii),
          (er[60] = ie),
          (er[61] = ic?.fileIds),
          (er[62] = eo.gizmo.id),
          (er[63] = eh),
          (er[64] = e8),
          (er[65] = e2),
          (er[66] = eZ),
          (er[67] = eV),
          (er[68] = e0),
          (er[69] = e3),
          (er[70] = eK),
          (er[71] = e_),
          (er[72] = ey),
          (er[73] = Q))
        : (Q = er[73])
      let iM = Q,
        iz = ii?.resource.gizmo
      er[74] !== iz
        ? ((Z = (function (e) {
            if (null != e)
              return "link" === e.share_recipient || "marketplace" === e.share_recipient
                ? "public"
                : "workspace" === e.share_recipient
                  ? "published"
                  : (e.sharing?.subjects.length ?? 0) > 0 ||
                      (null != e.share_recipient && "private" !== e.share_recipient)
                    ? "shared"
                    : "private" === e.share_recipient
                      ? "private"
                      : void 0
          })(iz)),
          (er[74] = iz),
          (er[75] = Z))
        : (Z = er[75])
      let iI = io || null != e1 ? h : void 0,
        iS = ir ? "allowed" : e6
      ;(er[76] !== ik || er[77] !== ib
        ? ((J = ik && ib?.sharing.allowed_modes.includes("workspace_directory") === !0),
          (er[76] = ik),
          (er[77] = ib),
          (er[78] = J))
        : (J = er[78]),
        er[79] !== ik || er[80] !== ib
          ? ((V =
              ik &&
              (ib?.sharing.allowed_modes.includes("users_and_groups") === !0 ||
                ib?.sharing.allowed_modes.includes("workspace_link") === !0)),
            (er[79] = ik),
            (er[80] = ib),
            (er[81] = V))
          : (V = er[81]))
      let iT = eH?.failedFiles,
        iN = eH?.skippedFiles,
        iF = ig ? void 0 : e1,
        iG = ii?.fileCheck,
        iq = eH?.files ?? ii?.resource.files
      er[82] !== ik || er[83] !== ib
        ? ((X = ik && ib?.sharing.allowed_modes.includes("private") === !0), (er[82] = ik), (er[83] = ib), (er[84] = X))
        : (X = er[84])
      let iY = im && ix,
        iO = ex?.id === eb && ex?.structure === "workspace"
      er[85] !== iP || er[86] !== eR
        ? ((ei = null != eR ? (0, a.jsx)(ep.lK, { onOpen: () => iP(eR) }) : void 0),
          (er[85] = iP),
          (er[86] = eR),
          (er[87] = ei))
        : (ei = er[87])
      let iD = im && (iy || (!ix && ib?.workspace_id !== eb)),
        iU = ih && !ia && !it && ip?.current_user_permission != null && (!im || ik)
      return (
        er[88] !== il ? ((et = () => void il()), (er[88] = il), (er[89] = et)) : (et = er[89]),
        er[90] !== ex?.structure ||
        er[91] !== h.status ||
        er[92] !== iA ||
        er[93] !== ej ||
        er[94] !== eE ||
        er[95] !== ii ||
        er[96] !== eo.gizmo.id ||
        er[97] !== eB?.permissions
          ? ((ea =
              "ready" === h.status &&
              !ej &&
              ii?.resource.gizmo.current_user_permission?.can_write &&
              (!eE || ex?.structure === "personal" || eB?.permissions?.includes("chatgpt.workspace.gpt.crud")) &&
              !ii.resource.gizmo.migrated_plugin_id
                ? (e) => {
                    e7.current ||
                      (iA(),
                      (0, P.PQ)({
                        event: e,
                        href: `${(0, U.K)("/gpts/editor")}/${encodeURIComponent(eo.gizmo.id)}`,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      }))
                  }
                : void 0),
            (er[90] = ex?.structure),
            (er[91] = h.status),
            (er[92] = iA),
            (er[93] = ej),
            (er[94] = eE),
            (er[95] = ii),
            (er[96] = eo.gizmo.id),
            (er[97] = eB?.permissions),
            (er[98] = ea))
          : (ea = er[98]),
        er[99] !== iM ? ((es = () => iM()), (er[99] = iM), (er[100] = es)) : (es = er[100]),
        er[101] !== iC || er[102] !== iM
          ? ((en = iC ? () => iM(!0) : void 0), (er[101] = iC), (er[102] = iM), (er[103] = en))
          : (en = er[103]),
        er[104] !== io ||
        er[105] !== iw ||
        er[106] !== iA ||
        er[107] !== ej ||
        er[108] !== id ||
        er[109] !== B ||
        er[110] !== eJ ||
        er[111] !== eR ||
        er[112] !== eo.gizmo.display.name ||
        er[113] !== Z ||
        er[114] !== iI ||
        er[115] !== iS ||
        er[116] !== J ||
        er[117] !== V ||
        er[118] !== iT ||
        er[119] !== iN ||
        er[120] !== iF ||
        er[121] !== iG ||
        er[122] !== iq ||
        er[123] !== X ||
        er[124] !== iY ||
        er[125] !== iO ||
        er[126] !== ei ||
        er[127] !== iD ||
        er[128] !== iU ||
        er[129] !== et ||
        er[130] !== ea ||
        er[131] !== es ||
        er[132] !== en
          ? ((el = (0, a.jsx)(eO, {
              sourceAudience: Z,
              appCheck: iI,
              canMigrate: io,
              gptPermission: iS,
              canPublishPlugin: J,
              canSharePlugin: V,
              failedFiles: iT,
              skippedFiles: iN,
              failure: iF,
              fileCheck: iG,
              files: iq,
              gizmoName: eo.gizmo.display.name,
              hasCustomActions: id,
              sharingChecked: X,
              editingDisabled: ej,
              isCheckingSharing: iY,
              isGptOwner: B,
              isMigrating: eJ,
              isWorkspaceAccount: iO,
              pluginAction: ei,
              pluginId: eR,
              sharingCheckFailed: iD,
              showPublicSharingNote: iU,
              onCheckApps: et,
              onClose: iA,
              onEdit: ea,
              onMigrate: es,
              hasFileOmissions: iw,
              onMigrateAnyway: en,
            })),
            (er[104] = io),
            (er[105] = iw),
            (er[106] = iA),
            (er[107] = ej),
            (er[108] = id),
            (er[109] = B),
            (er[110] = eJ),
            (er[111] = eR),
            (er[112] = eo.gizmo.display.name),
            (er[113] = Z),
            (er[114] = iI),
            (er[115] = iS),
            (er[116] = J),
            (er[117] = V),
            (er[118] = iT),
            (er[119] = iN),
            (er[120] = iF),
            (er[121] = iG),
            (er[122] = iq),
            (er[123] = X),
            (er[124] = iY),
            (er[125] = iO),
            (er[126] = ei),
            (er[127] = iD),
            (er[128] = iU),
            (er[129] = et),
            (er[130] = ea),
            (er[131] = es),
            (er[132] = en),
            (er[133] = el))
          : (el = er[133]),
        el
      )
    }
    function eS(e) {
      return { fileId: e.file_id }
    }
    function eT(e) {
      return "plugins_prototype" === e.type
    }
    function eN() {}
    function eF(e) {
      return e.id
    }
    function eG(e) {
      return e.fileId
    }
    function eq(e) {
      return "plugins_prototype" === e.type
    }
    function eY(e) {
      return "plugins_prototype" === e.type
    }
    function eO(e) {
      let i,
        t,
        l,
        r,
        o,
        d,
        u,
        c,
        g,
        p,
        f,
        m,
        v,
        _,
        b,
        y,
        x,
        k,
        w,
        P,
        M,
        z,
        I,
        S,
        T,
        N,
        F = (0, s.c)(161),
        {
          sourceAudience: G,
          appCheck: q,
          canMigrate: Y,
          gptPermission: O,
          canPublishPlugin: D,
          canSharePlugin: U,
          failedFiles: E,
          skippedFiles: $,
          failure: W,
          fileCheck: L,
          files: R,
          gizmoName: H,
          hasCustomActions: Q,
          hasFileOmissions: Z,
          isCheckingSharing: J,
          isGptOwner: V,
          isMigrating: X,
          isWorkspaceAccount: ee,
          modal: et,
          pluginAction: ea,
          pluginId: en,
          portalContainer: el,
          sharingCheckFailed: er,
          sharingChecked: eo,
          editingDisabled: ed,
          showPublicSharingNote: eu,
          onCheckApps: ec,
          onClose: eg,
          onMigrate: ep,
          onMigrateAnyway: eh,
          onEdit: em,
        } = e,
        ev = void 0 === O ? "allowed" : O,
        e_ = void 0 !== D && D,
        eb = void 0 !== U && U,
        ey = void 0 !== Z && Z,
        ek = void 0 !== J && J,
        ew = void 0 !== ee && ee,
        ej = void 0 !== er && er,
        eC = void 0 !== eo && eo,
        eP = void 0 !== ed && ed
      F[0] !== H ? ((i = H.trim()), (F[0] = H), (F[1] = i)) : (i = F[1])
      let eM = i
      F[2] !== R || F[3] !== $
        ? ((t = $?.map((e) => {
            let { fileId: i } = e,
              t = R?.find((e) => (e.file_id || e.id) === i)
            return (t?.file_response_type === "full_file_response" && t.name) || i
          })),
          (F[2] = R),
          (F[3] = $),
          (F[4] = t))
        : (t = F[4])
      let ez = t
      F[5] !== W || F[6] !== eh || F[7] !== en
        ? ((l = null == en && null != eh && null != K(W)), (F[5] = W), (F[6] = eh), (F[7] = en), (F[8] = l))
        : (l = F[8])
      let eI = l,
        eS =
          null == en &&
          null != eh &&
          q?.status === "ready" &&
          (q.apps?.unavailable.length ?? 0) > 0 &&
          (null == W || eI),
        eT = (L?.oversized?.length ?? 0) > 0,
        eN = null == en && null != eh && eT,
        eF = eI || eN || eS || (null == en && null != eh && ey)
      F[9] !== W
        ? ((r =
            null != W && "request" !== W.kind && (null == W.status || 400 === W.status) && W.issues.every(eD)
              ? W.issues
              : []),
          (F[9] = W),
          (F[10] = r))
        : (r = F[10])
      let eG = r,
        eq = null == en && (q?.status === "error" || (q?.status === "ready" && null == q.apps))
      if (null == en && null != W && (0 === eG.length || eI)) {
        let e
        ;(F[11] !== eI || F[12] !== eP || F[13] !== W || F[14] !== R
          ? ((e = ei(W, R, eP, eI)), (F[11] = eI), (F[12] = eP), (F[13] = W), (F[14] = R), (F[15] = e))
          : (e = F[15]),
          (o = e))
      } else if (q?.status === "error") {
        let e
        ;(F[16] !== q.httpStatus
          ? ((e = ei({ kind: "preview", status: q.httpStatus })), (F[16] = q.httpStatus), (F[17] = e))
          : (e = F[17]),
          (o = e))
      }
      let eY = null != o,
        eO = null == q || ("ready" === q.status && null != q.apps),
        eU = null == q || ("ready" === q.status && q.apps?.unavailable.length === 0)
      if (null != o) d = o.title
      else if (null != en) {
        let e
        ;(F[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "chatgptConversations.gpts.migration.ready",
              defaultMessage: "Your plugin is ready",
            })),
            (F[18] = e))
          : (e = F[18]),
          (d = e))
      } else if (eM) {
        let e
        ;(F[19] !== eM
          ? ((e = (0, a.jsx)(h.A, {
              id: "chatgptConversations.gpts.migration.title",
              defaultMessage: "Migrate {gptName}",
              values: { gptName: eM },
            })),
            (F[19] = eM),
            (F[20] = e))
          : (e = F[20]),
          (d = e))
      } else {
        let e
        ;(F[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "chatgptConversations.gpts.migration.untitledTitle",
              defaultMessage: "Migrate Untitled GPT",
            })),
            (F[21] = e))
          : (e = F[21]),
          (d = e))
      }
      if (null != en || X || "allowed" === ev)
        if (null != o) u = o.description
        else if (null != en) {
          let e
          ;(F[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.successReviewDescription",
                defaultMessage: "Open your plugin to review it",
              })),
              (F[24] = e))
            : (e = F[24]),
            (u = e))
        } else if (Y || X || null != W)
          if (ew)
            if (!1 === V) {
              let e
              ;(F[27] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(h.A, {
                    id: "chatgptConversations.gpts.migration.adminDescription.editingLocked",
                    defaultMessage:
                      "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. The GPT\u2019s owner will own the plugin, and you\u2019ll also have edit access. You can manage sharing afterward, within your workspace\u2019s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                  })),
                  (F[27] = e))
                : (e = F[27]),
                (u = e))
            } else {
              let e
              ;(F[28] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(h.A, {
                    id: "chatgptConversations.gpts.migration.description.editingLocked",
                    defaultMessage:
                      "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. You can manage sharing afterward, within your workspace\u2019s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                  })),
                  (F[28] = e))
                : (e = F[28]),
                (u = e))
            }
          else {
            let e
            ;(F[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(h.A, {
                  id: "chatgptConversations.gpts.migration.nonWorkspaceDescription.editingLocked",
                  defaultMessage:
                    "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                })),
                (F[26] = e))
              : (e = F[26]),
              (u = e))
          }
        else {
          let e
          ;(F[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.A, {
                id: "chatgptConversations.gpts.migration.unavailable",
                defaultMessage:
                  "Migration isn't available for this GPT. Check that the GPT is saved and that you have permission to use plugins",
              })),
              (F[25] = e))
            : (e = F[25]),
            (u = e))
        }
      else {
        let e
        ;(F[22] !== ev ? ((e = (0, a.jsx)(ef.M, { permission: ev })), (F[22] = ev), (F[23] = e)) : (e = F[23]), (u = e))
      }
      if (
        F[29] !== q ||
        F[30] !== eI ||
        F[31] !== eP ||
        F[32] !== W ||
        F[33] !== eT ||
        F[34] !== eY ||
        F[35] !== em ||
        F[36] !== eG ||
        F[37] !== en
      )
        ((c =
          null == en &&
          q?.status === "ready" &&
          !eI &&
          ((eT && !eY) ||
            eG.length > 0 ||
            (((W?.kind === "validation" && 400 === W.status) || (!eY && (q.apps?.unavailable.length ?? 0) > 0)) &&
              null != em &&
              !eP))),
          (F[29] = q),
          (F[30] = eI),
          (F[31] = eP),
          (F[32] = W),
          (F[33] = eT),
          (F[34] = eY),
          (F[35] = em),
          (F[36] = eG),
          (F[37] = en),
          (F[38] = c))
      else c = F[38]
      let eE = c
      if (eq) {
        let e,
          i,
          t = X || null == ec
        ;(F[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "chatgptConversations.gpts.migration.checkAppsAgain",
              defaultMessage: "Check again",
            })),
            (F[39] = e))
          : (e = F[39]),
          F[40] !== ec || F[41] !== t
            ? ((i = (0, a.jsx)(j.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "button",
                disabled: t,
                onClick: ec,
                children: e,
              })),
              (F[40] = ec),
              (F[41] = t),
              (F[42] = i))
            : (i = F[42]),
          (g = i))
      } else if (eE) {
        let e,
          i,
          t = X || eP || null == em
        ;(F[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, { id: "chatgptConversations.gpts.migration.editGpt", defaultMessage: "Edit GPT" })),
            (F[43] = e))
          : (e = F[43]),
          F[44] !== em || F[45] !== t
            ? ((i = (0, a.jsx)(j.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "button",
                disabled: t,
                onClick: em,
                children: e,
              })),
              (F[44] = em),
              (F[45] = t),
              (F[46] = i))
            : (i = F[46]),
          (g = i))
      } else if (eY || eI) {
        let e,
          i,
          t = X || !Y || !eO
        ;(F[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "chatgptConversations.gpts.migration.recovery.retry",
              defaultMessage: "Try again",
            })),
            (F[47] = e))
          : (e = F[47]),
          F[48] !== t
            ? ((i = (0, a.jsx)(j.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "submit",
                disabled: t,
                children: e,
              })),
              (F[48] = t),
              (F[49] = i))
            : (i = F[49]),
          (g = i))
      } else if (null != en) g = ea
      else {
        let e,
          i,
          t = !Y || !eU || eT || eG.length > 0
        ;(F[50] !== X
          ? ((e = X
              ? (0, a.jsx)(h.A, {
                  id: "chatgptConversations.gpts.migration.migratingLabel",
                  defaultMessage: "Migrating",
                })
              : (0, a.jsx)(h.A, {
                  id: "chatgptConversations.gpts.migration.confirm",
                  defaultMessage: "Migrate to plugin",
                })),
            (F[50] = X),
            (F[51] = e))
          : (e = F[51]),
          F[52] !== X || F[53] !== t || F[54] !== e
            ? ((i = (0, a.jsx)(j.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                disabled: t,
                loading: X,
                type: "submit",
                children: e,
              })),
              (F[52] = X),
              (F[53] = t),
              (F[54] = e),
              (F[55] = i))
            : (i = F[55]),
          (g = i))
      }
      let e$ = !X
      ;(F[56] !== X || F[57] !== eg
        ? ((p = (e) => {
            e || X || eg()
          }),
          (F[56] = X),
          (F[57] = eg),
          (F[58] = p))
        : (p = F[58]),
        F[59] !== eU ||
        F[60] !== eO ||
        F[61] !== Y ||
        F[62] !== eI ||
        F[63] !== eT ||
        F[64] !== X ||
        F[65] !== eY ||
        F[66] !== ep ||
        F[67] !== eG ||
        F[68] !== en ||
        F[69] !== eE
          ? ((f = (e) => {
              ;(e.preventDefault(),
                !X && Y && (eU || (eY && eO)) && !eE && (!eT || eY) && (0 === eG.length || eI) && null == en && ep())
            }),
            (F[59] = eU),
            (F[60] = eO),
            (F[61] = Y),
            (F[62] = eI),
            (F[63] = eT),
            (F[64] = X),
            (F[65] = eY),
            (F[66] = ep),
            (F[67] = eG),
            (F[68] = en),
            (F[69] = eE),
            (F[70] = f))
          : (f = F[70]),
        F[71] !== d
          ? ((m = (0, a.jsx)(C.L3, {
              className: "text-center text-heading-lg leading-7 font-semibold wrap-anywhere select-none",
              children: d,
            })),
            (F[71] = d),
            (F[72] = m))
          : (m = F[72]))
      let eB = null == u ? "sr-only" : "text-center text-sm leading-5 text-secondary select-none",
        eW = eY ? "alert" : void 0
      return (
        F[73] !== u ? ((v = (0, a.jsx)("div", { children: u })), (F[73] = u), (F[74] = v)) : (v = F[74]),
        F[75] !== eB || F[76] !== eW || F[77] !== v
          ? ((_ = (0, a.jsx)(C.rr, { asChild: !0, className: eB, "aria-live": "polite", role: eW, children: v })),
            (F[75] = eB),
            (F[76] = eW),
            (F[77] = v),
            (F[78] = _))
          : (_ = F[78]),
        F[79] !== m || F[80] !== _
          ? ((b = (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [m, _] })),
            (F[79] = m),
            (F[80] = _),
            (F[81] = b))
          : (b = F[81]),
        F[82] !== q ||
        F[83] !== Y ||
        F[84] !== eN ||
        F[85] !== eS ||
        F[86] !== e_ ||
        F[87] !== eb ||
        F[88] !== eP ||
        F[89] !== W ||
        F[90] !== L ||
        F[91] !== R ||
        F[92] !== Q ||
        F[93] !== ek ||
        F[94] !== eY ||
        F[95] !== ew ||
        F[96] !== em ||
        F[97] !== en ||
        F[98] !== ej ||
        F[99] !== eC ||
        F[100] !== eu ||
        F[101] !== G
          ? ((y =
              null != en || eY
                ? null
                : (0, a.jsx)(ex, {
                    sourceAudience: G ?? (eu ? "public" : void 0),
                    appCheck: q,
                    canMigrate: Y,
                    canPublishPlugin: e_,
                    canSharePlugin: eb,
                    failure: W,
                    fileCheck: L,
                    files: R,
                    hasCustomActions: Q,
                    isCheckingSharing: ek,
                    isWorkspaceAccount: ew,
                    sharingCheckFailed: ej,
                    sharingChecked: eC,
                    canEdit: null != em && !eP,
                    canOmitUnavailableApps: eS,
                    canOmitOversizedFiles: eN,
                    editingDisabled: eP,
                  })),
            (F[82] = q),
            (F[83] = Y),
            (F[84] = eN),
            (F[85] = eS),
            (F[86] = e_),
            (F[87] = eb),
            (F[88] = eP),
            (F[89] = W),
            (F[90] = L),
            (F[91] = R),
            (F[92] = Q),
            (F[93] = ek),
            (F[94] = eY),
            (F[95] = ew),
            (F[96] = em),
            (F[97] = en),
            (F[98] = ej),
            (F[99] = eC),
            (F[100] = eu),
            (F[101] = G),
            (F[102] = y))
          : (y = F[102]),
        F[103] !== eN ||
        F[104] !== eP ||
        F[105] !== L ||
        F[106] !== R ||
        F[107] !== eT ||
        F[108] !== eY ||
        F[109] !== em ||
        F[110] !== en
          ? ((x =
              null == en &&
              eY &&
              null != L &&
              (eT || L.unavailable.length > 0 || L.unchecked.length > 0 || null != L.profilePicture)
                ? (0, a.jsx)("div", {
                    className: "w-full border-s border-default ps-3 text-sm text-default select-none",
                    children: (0, a.jsx)(es, {
                      fileCheck: L,
                      files: R,
                      canOmitOversizedFiles: eN,
                      canEdit: null != em && !eP,
                    }),
                  })
                : null),
            (F[103] = eN),
            (F[104] = eP),
            (F[105] = L),
            (F[106] = R),
            (F[107] = eT),
            (F[108] = eY),
            (F[109] = em),
            (F[110] = en),
            (F[111] = x))
          : (x = F[111]),
        F[112] !== X
          ? ((k = X
              ? (0, a.jsx)("p", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(h.A, {
                    id: "chatgptConversations.gpts.migration.pending",
                    defaultMessage: "Creating your plugin\u2026",
                  }),
                })
              : null),
            (F[112] = X),
            (F[113] = k))
          : (k = F[113]),
        F[114] !== E || F[115] !== R || F[116] !== en
          ? ((w =
              null != E && E.length > 0
                ? (0, a.jsx)(B.Z, { failedFiles: E, files: R, migrationSucceeded: null != en })
                : null),
            (F[114] = E),
            (F[115] = R),
            (F[116] = en),
            (F[117] = w))
          : (w = F[117]),
        F[118] !== en || F[119] !== ez || F[120] !== $
          ? ((P =
              null != en && null != $ && $.length > 0 ? (0, a.jsx)(eA.G, { count: $.length, filenames: ez }) : null),
            (F[118] = en),
            (F[119] = ez),
            (F[120] = $),
            (F[121] = P))
          : (P = F[121]),
        F[122] !== eU ||
        F[123] !== Y ||
        F[124] !== eI ||
        F[125] !== eN ||
        F[126] !== eF ||
        F[127] !== eS ||
        F[128] !== ey ||
        F[129] !== X ||
        F[130] !== eh
          ? ((M =
              eF &&
              (0, a.jsx)(n.m, {
                content: (0, a.jsxs)(a.Fragment, {
                  children: [
                    eS &&
                      (eI || eN || ey) &&
                      (0, a.jsx)(h.A, {
                        id: "chatgptConversations.gpts.migration.omitAppsAndFilesTooltip",
                        defaultMessage:
                          "Create the plugin without the unavailable apps and failed knowledge files. Invalid app settings and conversation starters may also be left out.",
                      }),
                    eS &&
                      !eI &&
                      !eN &&
                      !ey &&
                      (0, a.jsx)(h.A, {
                        id: "chatgptConversations.gpts.migration.omitUnavailableAppsTooltip",
                        defaultMessage:
                          "Create the plugin without the unavailable apps. Invalid app settings and conversation starters may also be left out.",
                      }),
                    !eS &&
                      (0, a.jsx)(h.A, {
                        id: "chatgptConversations.gpts.migration.omitFailedFilesTooltip",
                        defaultMessage:
                          "Create the plugin without the failed knowledge files. Invalid app settings and conversation starters may also be left out.",
                      }),
                  ],
                }),
                children: (0, a.jsx)(j.$, {
                  color: "ghostSecondary",
                  size: "dialogAction",
                  disabled: X || !Y || (!eU && !eS),
                  type: "button",
                  onClick: eh,
                  children: (0, a.jsx)("span", {
                    className: "underline decoration-from-font underline-offset-2",
                    children: (0, a.jsx)(h.A, {
                      id: "chatgptConversations.gpts.migration.omitFailedFiles",
                      defaultMessage: "Migrate anyway",
                    }),
                  }),
                }),
              })),
            (F[122] = eU),
            (F[123] = Y),
            (F[124] = eI),
            (F[125] = eN),
            (F[126] = eF),
            (F[127] = eS),
            (F[128] = ey),
            (F[129] = X),
            (F[130] = eh),
            (F[131] = M))
          : (M = F[131]),
        F[132] !== eF || F[133] !== X || F[134] !== eY || F[135] !== eg || F[136] !== en || F[137] !== eE
          ? ((z =
              !eE &&
              !eY &&
              !eF &&
              (0, a.jsx)(j.$, {
                color: "ghostSecondary",
                size: "dialogAction",
                disabled: X,
                type: "button",
                onClick: eg,
                children: (0, a.jsxs)("span", {
                  className: "underline decoration-from-font underline-offset-2",
                  children: [
                    null != en &&
                      (0, a.jsx)(h.A, { id: "chatgptConversations.gpts.migration.done", defaultMessage: "Done" }),
                    null == en &&
                      (0, a.jsx)(h.A, {
                        id: "chatgptConversations.gpts.migration.later",
                        defaultMessage: "Migrate later",
                      }),
                  ],
                }),
              })),
            (F[132] = eF),
            (F[133] = X),
            (F[134] = eY),
            (F[135] = eg),
            (F[136] = en),
            (F[137] = eE),
            (F[138] = z))
          : (z = F[138]),
        F[139] !== g || F[140] !== M || F[141] !== z
          ? ((I = (0, a.jsxs)(A.Es, {
              className: "flex-col text-center",
              expandSingleButton: !1,
              children: [g, M, z],
            })),
            (F[139] = g),
            (F[140] = M),
            (F[141] = z),
            (F[142] = I))
          : (I = F[142]),
        F[143] !== b || F[144] !== y || F[145] !== x || F[146] !== k || F[147] !== w || F[148] !== P || F[149] !== I
          ? ((S = (0, a.jsxs)("div", {
              className: "flex flex-col gap-8 p-6 pt-14 text-start sm:p-10",
              children: [b, y, x, k, w, P, I],
            })),
            (F[143] = b),
            (F[144] = y),
            (F[145] = x),
            (F[146] = k),
            (F[147] = w),
            (F[148] = P),
            (F[149] = I),
            (F[150] = S))
          : (S = F[150]),
        F[151] !== f || F[152] !== S
          ? ((T = (0, a.jsx)(A.R4, { as: "form", size: "viewport", variant: "chatgpt", onSubmit: f, children: S })),
            (F[151] = f),
            (F[152] = S),
            (F[153] = T))
          : (T = F[153]),
        F[154] !== X || F[155] !== et || F[156] !== el || F[157] !== e$ || F[158] !== p || F[159] !== T
          ? ((N = (0, a.jsx)(C.lG, {
              open: !0,
              modal: et,
              portalContainer: el,
              showDialogClose: e$,
              shouldIgnoreClickOutside: X,
              size: "beacon",
              closeButtonSize: "large",
              variant: "promotional",
              onOpenChange: p,
              children: T,
            })),
            (F[154] = X),
            (F[155] = et),
            (F[156] = el),
            (F[157] = e$),
            (F[158] = p),
            (F[159] = T),
            (F[160] = N))
          : (N = F[160]),
        N
      )
    }
    function eD(e) {
      return "knowledge_file_too_large" === e.code && "knowledge_file" === e.resource.type
    }
  },
  z0fI(e, i, t) {
    var a = t("ABep"),
      s = t("QosV"),
      n = t("oyxz"),
      l = t("MM0V"),
      r = t("Wdu7"),
      o = t("hZax")
    function d(e) {
      return "knowledge_file" === e.type
    }
    function u(e) {
      return "profile_picture" === e.type
    }
    function c(e) {
      let i,
        t,
        l,
        r = (0, s.c)(12),
        { file: o, files: d, issues: u } = e
      if (r[0] !== o || r[1] !== d || r[2] !== u) {
        let e
        ;((i = u?.filter(
          (e) => "knowledge_file" === e.resource.type && null != o.file_id && e.resource.id === o.file_id,
        )),
          r[5] !== o || r[6] !== d
            ? ((e = d?.find((e) => e.file_id === o.file_id)), (r[5] = o), (r[6] = d), (r[7] = e))
            : (e = r[7]))
        let a = e
        ;((t =
          i?.find(f)?.resource.name || (a?.file_response_type === "full_file_response" ? a.name : void 0) || o.file_id),
          (r[0] = o),
          (r[1] = d),
          (r[2] = u),
          (r[3] = i),
          (r[4] = t))
      } else ((i = r[3]), (t = r[4]))
      let c = t
      return (
        r[8] !== o || r[9] !== i?.[0]?.message || r[10] !== c
          ? ((l = (0, a.jsx)("li", {
              className: "wrap-anywhere text-default select-text",
              children: c
                ? (0, a.jsx)(n.A, {
                    id: "chatgptConversations.gpts.migration.referenceFileCopyErrorWithFilename",
                    defaultMessage: "<strong>{filename}</strong> \u2014 {message}",
                    values: { filename: c, message: i?.[0]?.message || o.message, strong: p },
                  })
                : (0, a.jsx)(n.A, {
                    id: "chatgptConversations.gpts.migration.unnamedReferenceFileCopyErrorWithLabel",
                    defaultMessage: "<strong>Reference file</strong> \u2014 {message}",
                    values: { message: i?.[0]?.message || o.message, strong: g },
                  }),
            })),
            (r[8] = o),
            (r[9] = i?.[0]?.message),
            (r[10] = c),
            (r[11] = l))
          : (l = r[11]),
        l
      )
    }
    function g(e) {
      return (0, a.jsx)("strong", { children: e })
    }
    function p(e) {
      return (0, a.jsx)("strong", { children: e })
    }
    function f(e) {
      return e.resource.name
    }
    t.d(
      i,
      {},
      {
        Z: function (e) {
          let i,
            t,
            g,
            p,
            f,
            h,
            m = (0, s.c)(23),
            { failedFiles: v, files: _, issues: b, migrationSucceeded: y } = e,
            x = (0, o.Fj)("2513446768")
          m[0] !== x ? ((i = x.get("disable_gpt_updates", !1)), (m[0] = x), (m[1] = i)) : (i = m[1])
          let k = i
          m[2] !== v ? ((t = v.filter(u)), (m[2] = v), (m[3] = t)) : (t = m[3])
          let w = t
          if (m[4] !== v || m[5] !== _ || m[6] !== k || m[7] !== b || m[8] !== y || m[9] !== w.length) {
            let e,
              i = v.filter(d)
            if (y) {
              let i
              ;(m[13] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, a.jsx)(n.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyWarningAfterSuccess",
                    defaultMessage:
                      "Your plugin was created without these files. Open your plugin and choose Edit plugin to add them.",
                  })),
                  (m[13] = i))
                : (i = m[13]),
                (e = i))
            } else if (k) {
              let i
              ;(m[14] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, a.jsx)(n.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyFailedReadonlyDescription",
                    defaultMessage: "Your plugin wasn\u2019t created. Try again later.",
                  })),
                  (m[14] = i))
                : (i = m[14]),
                (e = i))
            } else {
              let i
              ;(m[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, a.jsx)(n.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyFailedDescription",
                    defaultMessage:
                      "Your plugin wasn\u2019t created. Try again, or fix these files and republish the GPT.",
                  })),
                  (m[15] = i))
                : (i = m[15]),
                (e = i))
            }
            ;((g = "flex flex-col gap-3 text-start text-sm"),
              m[16] !== y || m[17] !== w.length
                ? ((p =
                    w.length > 0
                      ? (0, a.jsx)(l.l, {
                          type: "warning",
                          variant: "callout",
                          layout: "vertical",
                          role: "alert",
                          content: (0, a.jsx)("p", {
                            className: "select-none",
                            children: y
                              ? (0, a.jsx)(n.A, {
                                  id: "chatgptConversations.gpts.migration.profileCopyFailedAfterSuccess",
                                  defaultMessage:
                                    "Your plugin was created, but we couldn\u2019t copy the GPT\u2019s profile picture. To add a logo, open your plugin and choose Edit plugin.",
                                })
                              : (0, a.jsx)(n.A, {
                                  id: "chatgptConversations.gpts.migration.profileCopyFailedBeforeSuccess",
                                  defaultMessage:
                                    "We couldn\u2019t copy the GPT\u2019s profile picture. After migration succeeds, open your plugin and choose Edit plugin to add a logo.",
                                }),
                          }),
                        })
                      : null),
                  (m[16] = y),
                  (m[17] = w.length),
                  (m[18] = p))
                : (p = m[18]),
              (f =
                i.length > 0
                  ? (0, a.jsx)(r.F, {
                      level: "danger",
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1 text-sm",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "font-semibold text-default select-none",
                            children: (0, a.jsx)(n.A, {
                              id: "chatgptConversations.gpts.migration.referenceCopyFailed",
                              defaultMessage:
                                "{count, plural, one {A reference file couldn\u2019t be synced} other {Reference files couldn\u2019t be synced}}",
                              values: { count: i.length },
                            }),
                          }),
                          (0, a.jsx)("p", { className: "text-secondary select-none", children: e }),
                          (0, a.jsx)("ul", {
                            className: "flex list-disc flex-col gap-1 ps-5",
                            children: i.map((e, i) => (0, a.jsx)(c, { file: e, files: _, issues: b }, i)),
                          }),
                        ],
                      }),
                    })
                  : null),
              (m[4] = v),
              (m[5] = _),
              (m[6] = k),
              (m[7] = b),
              (m[8] = y),
              (m[9] = w.length),
              (m[10] = g),
              (m[11] = p),
              (m[12] = f))
          } else ((g = m[10]), (p = m[11]), (f = m[12]))
          return (
            m[19] !== g || m[20] !== p || m[21] !== f
              ? ((h = (0, a.jsxs)("div", { className: g, children: [p, f] })),
                (m[19] = g),
                (m[20] = p),
                (m[21] = f),
                (m[22] = h))
              : (h = m[22]),
            h
          )
        },
      },
    )
  },
  w8VL(e, i, t) {
    let a = (0, t("Qgfj").YK)({
      description: {
        id: "chatgptConversations.gpts.migration.skippedFiles.description.unavailable",
        defaultMessage:
          "{count, plural, one {Your plugin was created without a knowledge file that is no longer available.} other {Your plugin was created without # knowledge files that are no longer available.}} You can add replacement files in Edit plugin.",
      },
    })
    t.d(i, {}, { o: a })
  },
  iJ7F(e, i, t) {
    var a = t("ABep"),
      s = t("QosV"),
      n = t("oyxz"),
      l = t("Qgfj"),
      r = t("MM0V"),
      o = t("w8VL")
    t.d(
      i,
      {},
      {
        G: function (e) {
          let i,
            t,
            d,
            u = (0, s.c)(7),
            { count: c, filenames: g } = e
          return (
            u[0] !== c
              ? ((i = (0, a.jsx)("p", { children: (0, a.jsx)(n.A, { ...o.o.description, values: { count: c } }) })),
                (u[0] = c),
                (u[1] = i))
              : (i = u[1]),
            u[2] !== g
              ? ((t =
                  null != g &&
                  g.length > 0 &&
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)("strong", {
                      className: "font-medium select-text",
                      children: (0, a.jsx)(l.dT, { value: g, type: "conjunction" }),
                    }),
                  })),
                (u[2] = g),
                (u[3] = t))
              : (t = u[3]),
            u[4] !== i || u[5] !== t
              ? ((d = (0, a.jsx)(r.l, {
                  type: "warning",
                  variant: "callout",
                  layout: "vertical",
                  role: "alert",
                  content: (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1 wrap-anywhere select-none",
                    children: [i, t],
                  }),
                })),
                (u[4] = i),
                (u[5] = t),
                (u[6] = d))
              : (d = u[6]),
            d
          )
        },
      },
    )
  },
}
//# sourceMappingURL=312708.5c28b902bc.js.map
