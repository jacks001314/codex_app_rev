export const __rspack_esm_ids = [312708]
export const __webpack_modules__ = {
  m15V(e, i, t) {
    var a = t("zTeN"),
      n = t("OWtl")
    let s = (0, a.bD)(n.u, (e) => null)
    t.d(i, {}, { v: s })
  },
  uC11(e, i, t) {
    t.d(i, { GptPluginMigrationDialog: () => ez })
    var a = t("ABep"),
      n = t("QosV"),
      s = t("slpy"),
      l = t("S2r0"),
      r = t("T0Rc"),
      o = t("CpsU"),
      d = t.n(o),
      c = t("nuXe"),
      u = t.n(c),
      p = t("zTeN"),
      g = t("zd8w"),
      h = t("Wf1j"),
      m = t("oyxz"),
      f = t("HZfM"),
      b = t("ASxG"),
      v = t("hOO0"),
      w = t("Ietk"),
      y = t("SPnB"),
      _ = t("eFn4"),
      k = t("EOo5"),
      x = t("Rk4p"),
      T = t("OAko"),
      P = t("ygO2"),
      A = t("JNtf"),
      C = t("mUDD"),
      G = t("Ot7V"),
      j = t("SGsN"),
      M = t("K4kL"),
      z = t("k7G6"),
      S = t("WzdM"),
      I = t("ugfi"),
      N = t("cLdu"),
      D = t("jaeI"),
      F = t("sLlu"),
      q = t("OWtl"),
      O = t("hZax"),
      E = t("JYRT"),
      U = t("Ghh3"),
      B = t("wrCb"),
      W = t("m15V"),
      Y = t("DY7H"),
      R = t("z0fI"),
      $ = t("Qgfj"),
      L = t("zKCW"),
      K = t("eShZ")
    function H(e) {
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
    let Q = b.union([
        b
          .string()
          .min(1)
          .transform((e) => ({ message: e, suggestion: void 0 })),
        b.object({ message: b.string().min(1), suggestion: b.string().optional() }),
      ]),
      Z = b.union([
        b.enum([
          "gpt_plugin_migration_source_changed",
          "gpt_plugin_migration_owner_changed",
          "gpt_plugin_migration_editor_access_failed",
        ]),
        b.object({ code: b.literal("gpt_plugin_migration_editor_access_failed") }).transform((e) => e.code),
        b
          .object({
            type: b.literal("apps_sdk_error"),
            error_code: b.enum(["gpt_plugin_migration_in_progress", "gpt_plugin_migration_conflict"]),
          })
          .transform((e) => e.error_code),
      ]),
      J = b.object({
        code: b.string(),
        resource: b.object({
          type: b.enum(["gpt", "action", "app", "knowledge_file", "knowledge_files", "profile_picture", "plugin"]),
          id: b.string().nullish(),
          name: b.string().nullish(),
          url: b.string().nullish(),
          tool_id: b.string().nullish(),
        }),
        field: b.string().nullish(),
        message: b.string(),
        suggestion: b.string(),
        actual: b.number().nullish(),
        limit: b.number().nullish(),
      }),
      V = b.object({
        type: b.enum(["profile_picture", "knowledge_file"]),
        file_id: b.string().nullish(),
        code: b.enum(["download_failed", "invalid_file", "timeout"]),
        message: b.string(),
      }),
      X = b.object({
        code: b.literal("gpt_plugin_incompatible"),
        issues: b.array(J),
        failed_files: b.array(V).nullish(),
      }),
      ee = b.object({ code: b.literal("gpt_plugin_file_copy_failed"), issues: b.array(J), failed_files: b.array(V) })
    function ei(e) {
      if (!(e instanceof K.fk)) return { kind: "request" }
      try {
        let i = b.object({ detail: b.unknown() }).parse(JSON.parse(e.message)),
          t = ee.safeParse(i.detail)
        if (t.success)
          return { kind: "file_copy", status: e.status, issues: t.data.issues, failedFiles: t.data.failed_files }
        let a = X.safeParse(i.detail)
        if (a.success)
          return { kind: "validation", status: e.status, issues: a.data.issues, failedFiles: a.data.failed_files }
        let n = Z.safeParse(i.detail).data,
          s =
            i.detail !== n && (400 === e.status || "gpt_plugin_migration_editor_access_failed" === n)
              ? Q.safeParse(i.detail).data
              : void 0
        return {
          kind: "request",
          status: e.status,
          errorCode: n,
          backendMessage: s?.message,
          backendSuggestion: s?.suggestion,
        }
      } catch {
        return { kind: "request", status: e.status }
      }
    }
    function et(e, i, t = !1, n = !1) {
      let s =
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
      if (s) {
        let l =
          ("validation" === e.kind || "file_copy" === e.kind) && 0 === e.issues.length
            ? e.failedFiles?.filter((e) => "knowledge_file" === e.type)
            : void 0
        return {
          title: (0, a.jsx)(m.A, { ...ea.failed }),
          description: (0, a.jsxs)("div", {
            className: "flex flex-col gap-3 text-start wrap-anywhere",
            children: [
              t && !n ? (0, a.jsx)(m.A, { ...en.readOnly }) : null,
              s.map((n, s) => {
                let r = "validation" === e.kind || "file_copy" === e.kind ? e.issues[s]?.resource : void 0,
                  o = r?.type === "knowledge_file" ? r.id : l?.[s]?.file_id,
                  d = null != o ? i?.find((e) => (e.file_id || e.id) === o) : void 0,
                  c = r?.name || (d?.file_response_type === "full_file_response" ? d.name : void 0) || o
                return (0, a.jsx)(
                  L.l,
                  {
                    type: "warning",
                    variant: "callout",
                    layout: "vertical",
                    title: c ? (0, a.jsx)("span", { className: "select-text", children: c }) : void 0,
                    content: (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2 whitespace-pre-wrap select-none",
                      children: [
                        (0, a.jsx)("p", { children: n.message }),
                        !t && n.suggestion && (0, a.jsx)("p", { children: n.suggestion }),
                      ],
                    }),
                  },
                  s,
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
        let n = e.issues.find((e) => "skill_bundle_too_large" === e.code)
        if (n)
          return {
            title: (0, a.jsx)(m.A, { ...ea.bundleSize }),
            description: t
              ? (0, a.jsx)(m.A, { ...en.readOnly })
              : (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("p", { children: n.message }), (0, a.jsx)("p", { children: n.suggestion })],
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
        title: (0, a.jsx)(m.A, { ...ea["editorAccess" === l ? "failed" : l], values: o }),
        description: (0, a.jsx)(m.A, { ...en[l], values: o }),
      }
    }
    let ea = (0, $.YK)({
        unavailable: {
          id: "chatgptConversations.gpts.migration.failure.unavailable.title",
          defaultMessage: "Migration unavailable",
          description:
            "Title in the GPT-to-plugin migration failure dialog when the source GPT cannot be confirmed as eligible or accessible. Shown to a GPT creator or workspace administrator with a Try again button.",
        },
        preview: {
          id: "chatgptConversations.gpts.migration.failure.preview.title",
          defaultMessage: "We couldn’t check this GPT",
          description:
            "Title in the GPT-to-plugin migration failure dialog when the saved GPT could not be loaded for readiness checks. Shown to a GPT creator or workspace administrator with a Try again button.",
        },
        authentication: {
          id: "chatgptConversations.gpts.migration.failure.authentication.title",
          defaultMessage: "Sign in to continue",
          description:
            "Title in the GPT-to-plugin migration failure dialog when the user session has expired. Shown to a GPT creator or workspace administrator with a Try again button.",
        },
        bundleSize: {
          id: "chatgptConversations.gpts.migration.failure.bundleSize.title",
          defaultMessage: "Plugin exceeds the size limit",
          description:
            "Title in the GPT-to-plugin migration failure dialog when the compressed skill bundle exceeds the server-configured size limit. Shown to a GPT creator or workspace administrator with a Try again button.",
        },
        failed: {
          id: "chatgptConversations.gpts.migration.failure.failed.title",
          defaultMessage: "Migration failed",
          description:
            "Title in the GPT-to-plugin migration failure dialog after a server-reported migration failure or unrecognized validation error. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        unknown: {
          id: "chatgptConversations.gpts.migration.failure.unknown.title",
          defaultMessage: "We couldn’t confirm migration",
          description:
            "Title in the GPT-to-plugin migration failure dialog when a network or unexpected response leaves the migration outcome unknown. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        running: {
          id: "chatgptConversations.gpts.migration.failure.running.title",
          defaultMessage: "Migration is already running",
          description:
            "Title in the GPT-to-plugin migration failure dialog when a recent migration attempt prevents another attempt; it may still be running. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        changed: {
          id: "chatgptConversations.gpts.migration.failure.changed.title",
          defaultMessage: "Something changed during migration",
          description:
            "Title in the GPT-to-plugin migration failure dialog when the source GPT, its owner, or destination plugin changed during migration. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        conflict: {
          id: "chatgptConversations.gpts.migration.failure.conflict.title",
          defaultMessage: "Migration couldn’t continue",
          description:
            "Title in the GPT-to-plugin migration failure dialog when migration conflicts without a more specific reason. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        copy: {
          id: "chatgptConversations.gpts.migration.failure.copy.title",
          defaultMessage:
            "{count, plural, one {Knowledge file couldn’t be copied} other {Knowledge files couldn’t be copied}}",
          description:
            "Title in the GPT-to-plugin migration failure dialog when required knowledge files could not be copied to the plugin. Shown to a GPT creator or workspace administrator with a Try again button. count is the number of failed knowledge files; named selects all when every filename is known. first and second are filenames, remaining counts files after the first. Never translate filenames.",
        },
      }),
      en = (0, $.YK)({
        unavailable: {
          id: "chatgptConversations.gpts.migration.failure.unavailable.detail",
          defaultMessage: "We couldn’t confirm that this GPT is available to migrate",
          description:
            "Description in the GPT-to-plugin migration failure dialog when the source GPT cannot be confirmed as eligible or accessible. Shown to a GPT creator or workspace administrator with a Try again button.",
        },
        preview: {
          id: "chatgptConversations.gpts.migration.failure.preview.detail",
          defaultMessage: "We couldn’t load this GPT’s saved settings to check whether it’s ready to migrate",
          description:
            "Description in the GPT-to-plugin migration failure dialog when the saved GPT could not be loaded for readiness checks. Shown to a GPT creator or workspace administrator with a Try again button.",
        },
        authentication: {
          id: "chatgptConversations.gpts.migration.failure.authentication.detail",
          defaultMessage: "Your session expired. Sign in again, then retry migration.",
          description:
            "Description in the GPT-to-plugin migration failure dialog when the user session has expired. Shown to a GPT creator or workspace administrator with a Try again button.",
        },
        failed: {
          id: "chatgptConversations.gpts.migration.failure.failed.detail",
          defaultMessage: "We couldn’t finish migration. Try again to continue.",
          description:
            "Description in the GPT-to-plugin migration failure dialog after a server-reported migration failure or unrecognized validation error. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        unknown: {
          id: "chatgptConversations.gpts.migration.failure.unknown.detail",
          defaultMessage: "Try again to check whether your plugin was created and continue migration",
          description:
            "Description in the GPT-to-plugin migration failure dialog when a network or unexpected response leaves the migration outcome unknown. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        running: {
          id: "chatgptConversations.gpts.migration.failure.running.detail",
          defaultMessage: "Wait up to 5 minutes, then try again",
          description:
            "Description in the GPT-to-plugin migration failure dialog when a recent migration attempt prevents another attempt; it may still be running. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        changed: {
          id: "chatgptConversations.gpts.migration.failure.changed.detail",
          defaultMessage: "The GPT, its owner, or the plugin changed. Try again to use the latest settings.",
          description:
            "Description in the GPT-to-plugin migration failure dialog when the source GPT, its owner, or destination plugin changed during migration. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        conflict: {
          id: "chatgptConversations.gpts.migration.failure.conflict.detail",
          defaultMessage:
            "Another migration may be running, or the GPT or plugin may have changed. Wait a moment, then try again.",
          description:
            "Description in the GPT-to-plugin migration failure dialog when migration conflicts without a more specific reason. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.",
        },
        editorAccess: {
          id: "chatgptConversations.gpts.migration.failure.editorAccess.detail",
          defaultMessage: "Your plugin was created, but we couldn’t finish setting up your access. Try again.",
          description:
            "Description in the GPT-to-plugin migration failure dialog when the plugin was created but granting its migrating administrator edit access failed; retry finishes the grant. Shown to a GPT creator or workspace administrator with a Try again button.",
        },
        copy: {
          id: "chatgptConversations.gpts.migration.failure.copy.detail",
          defaultMessage:
            "{named, select, all {{count, plural, one {We couldn’t copy {first} to the plugin. Try again.} =2 {We couldn’t copy {first} and {second} to the plugin. Try again.} other {We couldn’t copy {first} and {remaining, number} other files to the plugin. Try again.}}} other {{count, plural, one {We couldn’t copy a knowledge file to the plugin. Try again.} other {We couldn’t copy some knowledge files to the plugin. Try again.}}}}",
          description:
            "Description in the GPT-to-plugin migration failure dialog when required knowledge files could not be copied to the plugin. Shown to a GPT creator or workspace administrator with a Try again button. count is the number of failed knowledge files; named selects all when every filename is known. first and second are filenames, remaining counts files after the first. Never translate filenames.",
        },
        readOnly: {
          id: "chatgptConversations.gpts.migration.failure.readOnly.detail",
          defaultMessage:
            "This GPT can’t be migrated with its current settings. GPT editing and publishing are no longer available.",
          description:
            "Description in the GPT migration failure dialog when validation requires changing a saved GPT but retirement has disabled editing and publishing. Do not suggest unavailable edits.",
        },
      })
    function es(e) {
      let i,
        t,
        s,
        l,
        r,
        o,
        d,
        c = (0, n.c)(23),
        { fileCheck: u, files: p, canOmitOversizedFiles: g, canEdit: h } = e
      if (
        c[0] !== h ||
        c[1] !== g ||
        c[2] !== u.maxFileBytes ||
        c[3] !== u.oversized ||
        c[4] !== u.profilePicture ||
        c[5] !== u.unavailable ||
        c[6] !== u.unchecked ||
        c[7] !== p
      ) {
        let e = new Map(p?.map(ep)),
          n = "unavailable"
        ;(g ? (n = "omit") : h && (n = "edit"),
          (i = "flex flex-col gap-3 wrap-anywhere"),
          (t = "alert"),
          (s = u.oversized?.length
            ? (0, a.jsx)("p", {
                children: (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.migration.readiness.oversizedFilesNamedLimitHelp",
                  defaultMessage:
                    "<strong>{filenames}</strong> {count, plural, one {exceeds} other {exceed}} the {maxFileSizeMb, number} MB limit and can’t migrate. {recovery, select, omit {Choose Migrate anyway to create the plugin {count, plural, one {without it} other {without them}}.} edit {Replace {count, plural, one {it with a smaller file} other {them with smaller files}} and publish the GPT again.} other {GPT editing and publishing are no longer available.}}",
                  description:
                    "Blocking warning before GPT migration for knowledge files exceeding the size limit. maxFileSizeMb is the configured per-file limit in megabytes (1024² bytes). filenames is a localized list of file names or identifiers; count is the number of files. recovery is omit when the explicit Migrate anyway action is available, edit when the GPT can be edited, or unavailable otherwise. Two complete sentences.",
                  values: {
                    filenames: (0, a.jsx)($.dT, {
                      value: u.oversized.map((i) => i.name || e.get(i.fileId) || i.fileId),
                      type: "conjunction",
                    }),
                    count: u.oversized.length,
                    maxFileSizeMb: u.maxFileBytes / 1048576,
                    recovery: n,
                    strong: eu,
                  },
                }),
              })
            : null),
          c[14] !== u.profilePicture
            ? ((l =
                null != u.profilePicture
                  ? (0, a.jsxs)("p", {
                      children: [
                        "tooLarge" === u.profilePicture.status
                          ? (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.migration.readiness.profilePictureTooLargeNamedHelp",
                              defaultMessage:
                                "<strong>{filename}</strong> exceeds the 5 MB limit and won’t migrate. You can add a new profile picture to the plugin after migration.",
                              description:
                                "Advisory warning before GPT migration when a profile picture exceeds the migration size limit, displayed as 5 MB. filename is its name or identifier. Migration can continue and the user can add a replacement picture to the plugin. Two complete sentences.",
                              values: { filename: u.profilePicture.name || u.profilePicture.fileId, strong: ec },
                            })
                          : null,
                        "unavailable" === u.profilePicture.status
                          ? (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.migration.readiness.profilePictureUnavailableNamedHelp",
                              defaultMessage:
                                "<strong>{filename}</strong> couldn’t be accessed. You can still try migrating.",
                              description:
                                "Advisory warning before GPT migration when profile picture metadata is inaccessible. filename is its name or identifier. The lookup cannot distinguish deletion from lack of access; migration remains allowed. Two complete sentences.",
                              values: { filename: u.profilePicture.name || u.profilePicture.fileId, strong: ed },
                            })
                          : null,
                        "unchecked" === u.profilePicture.status
                          ? (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.migration.readiness.profilePictureUncheckedNamedHelp",
                              defaultMessage:
                                "<strong>{filename}</strong> couldn’t be checked. You can still try migrating.",
                              description:
                                "Advisory warning before GPT migration when profile picture metadata lookup failed, timed out, or did not provide a valid size. filename is its name or identifier. Ordinary migration remains allowed. Two complete sentences.",
                              values: { filename: u.profilePicture.name || u.profilePicture.fileId, strong: eo },
                            })
                          : null,
                      ],
                    })
                  : null),
              (c[14] = u.profilePicture),
              (c[15] = l))
            : (l = c[15]),
          (r = u.unavailable.length
            ? (0, a.jsx)("p", {
                children: (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.migration.readiness.unavailableFilesNamedHelp",
                  defaultMessage:
                    "<strong>{filenames}</strong> couldn’t be accessed. {count, plural, one {It may have been deleted or you may no longer have access. You can still try migrating with it.} other {They may have been deleted or you may no longer have access. You can still try migrating with them.}}",
                  description:
                    "Advisory warning before GPT migration for inaccessible knowledge files. filenames is a localized list of file names or identifiers, and count is the number of files. The lookup cannot distinguish deletion from lack of access, so migration remains allowed without omitting files. Three complete sentences.",
                  values: {
                    filenames: (0, a.jsx)($.dT, {
                      value: u.unavailable.map((i) => e.get(i) || i),
                      type: "conjunction",
                    }),
                    count: u.unavailable.length,
                    strong: er,
                  },
                }),
              })
            : null),
          (o = u.unchecked.length
            ? (0, a.jsx)("p", {
                children: (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.migration.readiness.uncheckedFilesNamedHelp",
                  defaultMessage:
                    "<strong>{filenames}</strong> couldn’t be checked. You can still try migrating {count, plural, one {with this file} other {with these files}}.",
                  description:
                    "Advisory warning before GPT migration when knowledge-file metadata is incomplete or an availability request failed or timed out. filenames is a localized list of names or identifiers, and count is the number of files. This does not mean the files are missing; ordinary migration remains allowed. Two complete sentences.",
                  values: {
                    filenames: (0, a.jsx)($.dT, { value: u.unchecked.map((i) => e.get(i) || i), type: "conjunction" }),
                    count: u.unchecked.length,
                    strong: el,
                  },
                }),
              })
            : null),
          (c[0] = h),
          (c[1] = g),
          (c[2] = u.maxFileBytes),
          (c[3] = u.oversized),
          (c[4] = u.profilePicture),
          (c[5] = u.unavailable),
          (c[6] = u.unchecked),
          (c[7] = p),
          (c[8] = i),
          (c[9] = t),
          (c[10] = s),
          (c[11] = l),
          (c[12] = r),
          (c[13] = o))
      } else ((i = c[8]), (t = c[9]), (s = c[10]), (l = c[11]), (r = c[12]), (o = c[13]))
      return (
        c[16] !== i || c[17] !== t || c[18] !== s || c[19] !== l || c[20] !== r || c[21] !== o
          ? ((d = (0, a.jsxs)("div", { className: i, role: t, children: [s, l, r, o] })),
            (c[16] = i),
            (c[17] = t),
            (c[18] = s),
            (c[19] = l),
            (c[20] = r),
            (c[21] = o),
            (c[22] = d))
          : (d = c[22]),
        d
      )
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
    function ec(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function eu(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function ep(e) {
      let i = e.file_id || e.id
      return [i, ("full_file_response" === e.file_response_type && e.name) || i]
    }
    let eg = b.number().int().positive().catch(0x6400000)
    var eh = t("ZTXF"),
      em = t("g2DC"),
      ef = t("on57"),
      eb = t("GO7r")
    function ev(e) {
      let i,
        t,
        s,
        l,
        r,
        o = (0, n.c)(18),
        { unavailable: d, canEdit: c, canOmit: u, editingDisabled: p } = e
      if (c && !p && !u) {
        let e, i
        return (
          o[0] !== d ? ((e = d.map(ey)), (o[0] = d), (o[1] = e)) : (e = o[1]),
          o[2] !== e
            ? ((i = (0, a.jsx)("ul", { className: "flex flex-col gap-3 wrap-anywhere", children: e })),
              (o[2] = e),
              (o[3] = i))
            : (i = o[3]),
          i
        )
      }
      if (u) {
        let e
        ;(o[4] !== c || o[5] !== p
          ? ((e =
              c && !p
                ? (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.migration.unavailableAppsOmitOrEdit",
                    defaultMessage:
                      "These apps aren’t available to you. Edit the GPT to remove or replace them, or migrate without them.",
                    description:
                      "Recovery guidance above a list of unavailable saved app IDs. The user can edit the source GPT or explicitly choose Migrate anyway to omit these apps. Missing metadata means the apps are unavailable to this user, not necessarily deleted.",
                  })
                : (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.migration.unavailableAppsOmit",
                    defaultMessage: "These apps aren’t available to you. You can migrate without them.",
                    description:
                      "Recovery guidance above a list of unavailable saved app IDs when GPT editing is unavailable. The user can explicitly choose Migrate anyway to omit these apps. Missing metadata means the apps are unavailable to this user, not necessarily deleted.",
                  })),
            (o[4] = c),
            (o[5] = p),
            (o[6] = e))
          : (e = o[6]),
          (i = e))
      } else if (p) {
        let e
        ;(o[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.unavailableAppsReadOnly",
              defaultMessage:
                "This GPT can’t be migrated because required apps are unavailable. GPT editing and publishing are no longer available.",
              description:
                "Blocking explanation inside the Apps readiness row of the migration modal after GPT retirement disables updates. The user cannot fix missing required apps by editing. Two sentences, no placeholders.",
            })),
            (o[7] = e))
          : (e = o[7]),
          (i = e))
      } else {
        let e
        ;(o[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.unavailableAppsOwnerHelp",
              defaultMessage:
                "Ask the GPT owner to remove or replace the unavailable apps and publish an update before migrating",
              description:
                "Recovery guidance inside the Apps row of the GPT migration modal when the viewer lacks editing permission. Missing required apps block migration. Directs the viewer to the source GPT owner; may wrap.",
            })),
            (o[8] = e))
          : (e = o[8]),
          (i = e))
      }
      return (
        o[9] !== i
          ? ((t = (0, a.jsx)("p", { className: "select-none", children: i })), (o[9] = i), (o[10] = t))
          : (t = o[10]),
        o[11] !== d ? ((s = d.map(ew)), (o[11] = d), (o[12] = s)) : (s = o[12]),
        o[13] !== s
          ? ((l = (0, a.jsx)("ul", { className: "flex flex-col gap-1 wrap-anywhere select-text", children: s })),
            (o[13] = s),
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
    function ew(e) {
      return (0, a.jsx)("li", { children: e }, e)
    }
    function ey(e) {
      return (0, a.jsx)(
        "li",
        {
          children: (0, a.jsx)(m.A, {
            id: "chatgptConversations.gpts.migration.unavailableApp.edit_help",
            defaultMessage:
              "<strong>{appName}</strong> is no longer available. Edit the GPT to remove or replace it with an available app.",
            description:
              "Blocking warning inside the Apps and actions row of the GPT migration modal, for a viewer who can edit the source GPT. appName is the unavailable app's identifier because its display name is unavailable; it may be long. The strong tag emphasizes that identifier. Explains how to fix the missing app before migration; two sentences that may wrap.",
            values: { appName: e, strong: e_ },
          }),
        },
        e,
      )
    }
    function e_(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e }, "strong")
    }
    function ek(e) {
      let i,
        t,
        s,
        l,
        r,
        o,
        d,
        c,
        u,
        p,
        g,
        h,
        f,
        b,
        v,
        w,
        y,
        _,
        k,
        x = (0, n.c)(113),
        {
          sourceAudience: T,
          files: P,
          appCheck: A,
          canMigrate: C,
          canPublishPlugin: G,
          canSharePlugin: j,
          failure: M,
          fileCheck: z,
          hasCustomActions: S,
          isCheckingSharing: I,
          isWorkspaceAccount: N,
          sharingCheckFailed: D,
          sharingChecked: F,
          canEdit: q,
          canOmitUnavailableApps: O,
          canOmitOversizedFiles: E,
          editingDisabled: U,
        } = e,
        B = A?.status === "loading",
        W = C && A?.status === "ready"
      if (
        x[0] !== A ||
        x[1] !== q ||
        x[2] !== C ||
        x[3] !== E ||
        x[4] !== O ||
        x[5] !== G ||
        x[6] !== j ||
        x[7] !== U ||
        x[8] !== M ||
        x[9] !== z ||
        x[10] !== P ||
        x[11] !== S ||
        x[12] !== I ||
        x[13] !== N ||
        x[14] !== W ||
        x[15] !== D ||
        x[16] !== F ||
        x[17] !== T
      ) {
        let e, n, g, h
        if (
          ((c = null != M && "request" !== M.kind ? M.issues.filter(ex) : []),
          (r = eP.noIssues),
          W && M?.kind !== "request"
            ? null != M || z?.oversized?.length || z?.unavailable.length || z?.profilePicture != null
              ? (r = eP.needsReview)
              : z?.unchecked.length && (r = eP.fileCheckFailed)
            : (r = eP.checkFailed),
          (d =
            (z?.oversized?.length ?? 0) > 0 ||
            (z?.unavailable.length ?? 0) > 0 ||
            (z?.unchecked.length ?? 0) > 0 ||
            z?.profilePicture != null),
          x[28] !== r ? ((e = (0, a.jsx)(m.A, { ...r })), (x[28] = r), (x[29] = e)) : (e = x[29]),
          (o = e),
          c.length > 0 || z?.oversized?.length)
        )
          o = (0, a.jsx)(m.A, {
            id: "chatgptConversations.gpts.migration.readiness.oversizedCount",
            defaultMessage: "{count, plural, one {# file is too large} other {# files are too large}}",
            description: "Number of oversized knowledge files blocking GPT migration",
            values: { count: c.length || z?.oversized?.length },
          })
        else if (z?.unavailable.length) {
          let e
          ;(x[30] !== z.unavailable.length
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.readiness.unavailableFileCount",
                defaultMessage: "{count, plural, one {# file unavailable} other {# files unavailable}}",
                description:
                  "Advisory count of knowledge files that could not be accessed before GPT migration; not found may also mean the caller no longer has access",
                values: { count: z.unavailable.length },
              })),
              (x[30] = z.unavailable.length),
              (x[31] = e))
            : (e = x[31]),
            (o = e))
        } else if (z?.profilePicture?.status === "tooLarge") {
          let e
          ;(x[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.readiness.profilePictureTooLarge",
                defaultMessage: "Profile picture too large",
                description:
                  "Advisory status before GPT migration when the profile picture exceeds the 5 MiB migration limit",
              })),
              (x[32] = e))
            : (e = x[32]),
            (o = e))
        } else if (z?.profilePicture?.status === "unavailable") {
          let e
          ;(x[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.readiness.profilePictureUnavailable",
                defaultMessage: "Profile picture unavailable",
                description:
                  "Advisory status before GPT migration when profile picture metadata could not be accessed; the file may be missing or access may be restricted",
              })),
              (x[33] = e))
            : (e = x[33]),
            (o = e))
        } else if (z?.profilePicture?.status === "unchecked") {
          let e
          ;(x[34] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.readiness.profilePictureUnchecked",
                defaultMessage: "Couldn’t check profile picture",
                description: "Advisory status before GPT migration when the profile picture could not be checked",
              })),
              (x[34] = e))
            : (e = x[34]),
            (o = e))
        }
        ;((t = eP.noIssues),
          W && A?.apps != null
            ? A.apps.unavailable.length > 0
              ? (t = eP.appsUnavailable)
              : A.apps.disabledByAdmin.length > 0
                ? (t = eP.appsDisabled)
                : S && (t = eP.unsupportedActions)
            : (t = eP.checkFailed))
        let f = A?.status === "ready" ? A.apps?.unavailable : void 0,
          b = A?.status === "ready" ? A.apps?.disabledByAdmin : void 0,
          v = (f?.length ?? 0) + (b?.length ?? 0)
        if (
          (x[35] !== t ? ((n = (0, a.jsx)(m.A, { ...t })), (x[35] = t), (x[36] = n)) : (n = x[36]),
          (s = n),
          f?.length && b?.length)
        ) {
          let e
          ;(x[37] !== v
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.readiness.appIssueCount",
                defaultMessage: "{count, plural, one {# app needs attention} other {# apps need attention}}",
                description:
                  "Short Apps and actions checklist status in the GPT migration modal when both unavailable and admin-disabled apps are present. Count is the total number of affected apps; unavailable apps prevent migration.",
                values: { count: v },
              })),
              (x[37] = v),
              (x[38] = e))
            : (e = x[38]),
            (s = e))
        } else if (null != f && f.length > 0) {
          let e
          ;(x[39] !== f.length
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.readiness.unavailableAppCount",
                defaultMessage: "{count, plural, one {# app is unavailable} other {# apps are unavailable}}",
                description:
                  "Short warning status in the Apps row of the migration modal. The positive integer count is the number of missing required apps, which block migration until the published GPT is fixed.",
                values: { count: f.length },
              })),
              (x[39] = f.length),
              (x[40] = e))
            : (e = x[40]),
            (s = e))
        } else if (null != b && b.length > 0) {
          let e
          ;(x[41] !== b.length
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.readiness.disabledAppCount",
                defaultMessage: "{count, plural, one {# app is disabled} other {# apps are disabled}}",
                description:
                  "Short Apps and actions checklist status before GPT migration. Count is the positive number of apps disabled by the workspace admin. Migration remains allowed, but the plugin stays disabled until these apps are enabled.",
                values: { count: b.length },
              })),
              (x[41] = b.length),
              (x[42] = e))
            : (e = x[42]),
            (s = e))
        }
        if (
          (x[43] !== C ||
          x[44] !== G ||
          x[45] !== j ||
          x[46] !== I ||
          x[47] !== N ||
          x[48] !== D ||
          x[49] !== F ||
          x[50] !== T
            ? ((g = (function ({
                sourceAudience: e,
                canMigrate: i,
                isWorkspaceAccount: t,
                canSharePlugin: a,
                canPublishPlugin: n,
                isCheckingSharing: s,
                sharingCheckFailed: l,
                sharingChecked: r,
              }) {
                return i
                  ? s
                    ? "restricted"
                    : l
                      ? "error"
                      : t
                        ? r
                          ? "public" === e
                            ? a
                              ? n
                                ? "publicBoth"
                                : "publicShare"
                              : n
                                ? "publicPublish"
                                : "publicDisabled"
                            : "shared" !== e || a
                              ? "published" !== e || n
                                ? a
                                  ? "enabled"
                                  : n
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
                sourceAudience: T,
                canMigrate: C,
                isWorkspaceAccount: N,
                canSharePlugin: j,
                canPublishPlugin: G,
                isCheckingSharing: I,
                sharingCheckFailed: D,
                sharingChecked: F,
              })),
              (x[43] = C),
              (x[44] = G),
              (x[45] = j),
              (x[46] = I),
              (x[47] = N),
              (x[48] = D),
              (x[49] = F),
              (x[50] = T),
              (x[51] = g))
            : (g = x[51]),
          (u = g),
          x[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = [
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
              (x[52] = h))
            : (h = x[52]),
          (p = h.includes(u)),
          A?.status === "ready" && null == A.apps)
        ) {
          let e
          ;(x[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.readiness.appLookupFailed",
                defaultMessage:
                  "We couldn’t confirm whether this GPT’s required apps are available and enabled. Check again before migrating.",
                description:
                  "Blocking explanation for a failed app-availability lookup; the user must retry before migration",
              })),
              (x[53] = e))
            : (e = x[53]),
            (i = e))
        } else if (v > 0 || S) {
          let e,
            t,
            n,
            s,
            l = v > 0 ? "alert" : void 0
          ;(x[54] !== q || x[55] !== O || x[56] !== U || x[57] !== f
            ? ((e =
                null != f && f.length > 0
                  ? (0, a.jsx)(ev, { unavailable: f, canEdit: q, canOmit: O, editingDisabled: U })
                  : null),
              (x[54] = q),
              (x[55] = O),
              (x[56] = U),
              (x[57] = f),
              (x[58] = e))
            : (e = x[58]),
            x[59] !== b || x[60] !== f
              ? ((t = b?.map((e) =>
                  (0, a.jsx)(
                    "p",
                    {
                      children:
                        null != f && f.length > 0
                          ? (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.migration.readiness.disabledAppCombinedHelp",
                              defaultMessage:
                                "{appName} is disabled. After migration, the plugin will stay disabled until your admin enables {appName}.",
                              description:
                                "Warning inside the Apps and actions checklist row when an admin-disabled app and other unavailable apps are both present before GPT migration. appName is the disabled app's display name or ID, which may be long. Unavailable apps must first be fixed; this warning explains the separate admin restriction after migration. Two sentences that may wrap.",
                              values: { appName: e.name || e.id },
                            })
                          : (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.migration.readiness.disabledAppHelp",
                              defaultMessage:
                                "{appName} is disabled by your admin. You can migrate, but the plugin will stay disabled until this app is enabled.",
                              description:
                                "Warning inside the Apps and actions checklist row before GPT migration. appName is the required app's display name, or its ID when unnamed, and may be long. Migration is allowed but the resulting plugin is disabled until the admin enables this app. Two sentences that may wrap.",
                              values: { appName: e.name || e.id },
                            }),
                    },
                    e.id,
                  ),
                )),
                (x[59] = b),
                (x[60] = f),
                (x[61] = t))
              : (t = x[61]),
            x[62] !== S
              ? ((n = S
                  ? (0, a.jsx)("p", {
                      children: (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.readiness.unsupportedActionsHelp",
                        defaultMessage:
                          "Features that use custom actions won’t work in the plugin. You can migrate without them.",
                        description:
                          "Warning inside the Apps and actions checklist row before GPT migration when the GPT has custom API actions. Explains to the creator or migrating admin that these actions are omitted; migration remains allowed. Two sentences that may wrap.",
                      }),
                    })
                  : null),
                (x[62] = S),
                (x[63] = n))
              : (n = x[63]),
            x[64] !== l || x[65] !== e || x[66] !== t || x[67] !== n
              ? ((s = (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3 wrap-anywhere",
                  role: l,
                  children: [e, t, n],
                })),
                (x[64] = l),
                (x[65] = e),
                (x[66] = t),
                (x[67] = n),
                (x[68] = s))
              : (s = x[68]),
            (i = s))
        } else i = void 0
        if (c.length > 0) {
          let e, i
          ;(x[69] !== U || x[70] !== P
            ? ((e = (e, i) => {
                let t = P?.find((i) => i.file_id === e.resource.id),
                  n = e.resource.name || (t?.file_response_type === "full_file_response" ? t.name : void 0)
                return (0, a.jsx)(
                  "p",
                  {
                    children:
                      !U && n
                        ? (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.migration.readiness.replaceFile",
                            defaultMessage: "{filename} needs to be replaced with a smaller file",
                            description:
                              "Blocking knowledge-file warning. Edit GPT opens the web editor to replace this file and publish the update.",
                            values: { filename: n },
                          })
                        : e.message,
                  },
                  i,
                )
              }),
              (x[69] = U),
              (x[70] = P),
              (x[71] = e))
            : (e = x[71]),
            x[72] !== U
              ? ((i = U
                  ? (0, a.jsx)("p", {
                      children: (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.readiness.editingUnavailable",
                        defaultMessage:
                          "This GPT can’t be migrated because of the issues above. GPT editing and publishing are no longer available.",
                        description:
                          "Explains why migration is blocked by oversized files when retirement has disabled GPT editing",
                      }),
                    })
                  : null),
                (x[72] = U),
                (x[73] = i))
              : (i = x[73]),
            (l = (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 wrap-anywhere",
              role: "alert",
              children: [c.map(e), i],
            })))
        } else if (d && null != z) {
          let e
          ;(x[74] !== q || x[75] !== E || x[76] !== z || x[77] !== P
            ? ((e = (0, a.jsx)(es, { fileCheck: z, files: P, canOmitOversizedFiles: E, canEdit: q })),
              (x[74] = q),
              (x[75] = E),
              (x[76] = z),
              (x[77] = P),
              (x[78] = e))
            : (e = x[78]),
            (l = e))
        }
        ;((x[0] = A),
          (x[1] = q),
          (x[2] = C),
          (x[3] = E),
          (x[4] = O),
          (x[5] = G),
          (x[6] = j),
          (x[7] = U),
          (x[8] = M),
          (x[9] = z),
          (x[10] = P),
          (x[11] = S),
          (x[12] = I),
          (x[13] = N),
          (x[14] = W),
          (x[15] = D),
          (x[16] = F),
          (x[17] = T),
          (x[18] = i),
          (x[19] = t),
          (x[20] = s),
          (x[21] = l),
          (x[22] = r),
          (x[23] = o),
          (x[24] = d),
          (x[25] = c),
          (x[26] = u),
          (x[27] = p))
      } else
        ((i = x[18]),
          (t = x[19]),
          (s = x[20]),
          (l = x[21]),
          (r = x[22]),
          (o = x[23]),
          (d = x[24]),
          (c = x[25]),
          (u = x[26]),
          (p = x[27]))
      x[79] !== B || x[80] !== I
        ? ((g =
            B || I
              ? (0, a.jsx)("span", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.migration.checkingReadiness",
                    defaultMessage: "Checking migration readiness…",
                    description:
                      "Accessible progress status while checking a GPT’s saved configuration, knowledge files, required apps, and plugin sharing permissions before migration",
                  }),
                })
              : null),
          (x[79] = B),
          (x[80] = I),
          (x[81] = g))
        : (g = x[81])
      let Y = r === eP.noIssues,
        R = M?.kind === "validation" || c.length > 0 || d
      x[82] !== l || x[83] !== o || x[84] !== B || x[85] !== Y || x[86] !== R
        ? ((h = (0, a.jsx)(eT, {
            label: eP.instructionsAndFiles,
            loading: B,
            positive: Y,
            status: o,
            warning: R,
            details: l,
          })),
          (x[82] = l),
          (x[83] = o),
          (x[84] = B),
          (x[85] = Y),
          (x[86] = R),
          (x[87] = h))
        : (h = x[87])
      let $ = t === eP.noIssues,
        L = (A?.status === "ready" && null == A.apps) || t === eP.appsUnavailable || t === eP.appsDisabled || S
      x[88] !== i || x[89] !== s || x[90] !== B || x[91] !== $ || x[92] !== L
        ? ((f = (0, a.jsx)(eT, { label: eP.apps, loading: B, positive: $, status: s, warning: L, details: i })),
          (x[88] = i),
          (x[89] = s),
          (x[90] = B),
          (x[91] = $),
          (x[92] = L),
          (x[93] = f))
        : (f = x[93])
      let K = B || I
      x[94] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = ["personal", "private", "enabled", "publish"]), (x[94] = b))
        : (b = x[94])
      let H = b.includes(u),
        Q = p || "error" === u
      return (
        x[95] !== u
          ? ((v = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.readiness.sharing.audience_status",
              defaultMessage:
                "{status, select, unavailable {Migration unavailable} error {Couldn’t check sharing} personal {Private plugin} private {No issues found} enabled {Sharing enabled} publish {Publishing enabled} disabled {Sharing disabled} sharedUnavailable {Sharing unavailable} publishUnavailable {Publishing unavailable} publishPrivate {Publishing unavailable} publicBoth {Public sharing unavailable} publicShare {Public sharing unavailable} publicPublish {Public sharing unavailable} publicPrivate {Public sharing unavailable} publicDisabled {Sharing disabled} other {Workspace permissions apply}}",
              description:
                "Short status beside Access and sharing in the GPT migration preview, read by the creator or migrating admin. The status selector is unavailable for blocked migration, error for a failed permission check, personal for personal-account private plugins, private when a private GPT stays private under workspace restrictions, enabled or publish for allowed plugin sharing or directory publishing, disabled for confirmed restrictions with unknown source audience, sharedUnavailable, publishUnavailable, or publishPrivate when the GPT’s existing workspace audience cannot transfer, publicBoth/publicShare/publicPublish/publicPrivate when public access cannot transfer, publicDisabled when a public GPT must become private under workspace restrictions, and other while permissions are unconfirmed. Keep each label short; allowed sharing is never applied automatically.",
              values: { status: u },
            })),
            (x[95] = u),
            (x[96] = v))
          : (v = x[96]),
        x[97] !== u || x[98] !== p
          ? ((w = p
              ? (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.migration.readiness.sharing.audience_help",
                  defaultMessage:
                    "{status, select, sharedUnavailable {This GPT is shared in your workspace, but plugin sharing is disabled. The plugin will start private and can’t be shared with the same people.} publishUnavailable {This GPT is published to your workspace, but publishing plugins to the workspace directory is disabled. You can share the plugin with people or groups instead.} publishPrivate {This GPT is published to your workspace, but plugin sharing and publishing are disabled. The plugin will stay private.} publicBoth {Plugins can’t be shared publicly. Share within your workspace, publish to its plugin directory, or keep it private.} publicShare {Plugins can’t be shared publicly. Share with people or groups in your workspace, or keep it private.} publicPublish {Plugins can’t be shared publicly. Publish to your workspace’s plugin directory or keep it private.} publicDisabled {Your workspace doesn’t allow plugin sharing. The plugin will stay private.} publicPrivate {Plugins can’t be shared publicly. The plugin will stay private.} other {This plugin will remain private. Ask an admin to enable sharing.}}",
                  description:
                    "Nonblocking explanation inside Access and sharing in the GPT migration preview, read by the GPT creator or migrating admin. The status selector combines the published GPT audience and confirmed plugin permissions: sharedUnavailable means its workspace recipients cannot retain access; publishUnavailable means directory publishing is disabled but direct sharing is allowed; publishPrivate means neither is allowed for a workspace-published GPT; publicBoth, publicShare, and publicPublish list the allowed workspace alternatives to public sharing; publicDisabled means the workspace allows neither; publicPrivate is a personal-account public GPT; other is a confirmed restriction with unknown source audience. Each branch is complete prose that may wrap. Migration creates a private plugin and does not share it automatically.",
                  values: { status: u },
                })
              : void 0),
            (x[97] = u),
            (x[98] = p),
            (x[99] = w))
          : (w = x[99]),
        x[100] !== H || x[101] !== Q || x[102] !== v || x[103] !== w || x[104] !== K
          ? ((y = (0, a.jsx)(eT, {
              label: eP.accessAndSharing,
              loading: K,
              positive: H,
              warning: Q,
              status: v,
              details: w,
            })),
            (x[100] = H),
            (x[101] = Q),
            (x[102] = v),
            (x[103] = w),
            (x[104] = K),
            (x[105] = y))
          : (y = x[105]),
        x[106] !== y || x[107] !== h || x[108] !== f
          ? ((_ = (0, a.jsxs)("dl", {
              className: "flex flex-col divide-y divide-border-subtle text-sm",
              children: [h, f, y],
            })),
            (x[106] = y),
            (x[107] = h),
            (x[108] = f),
            (x[109] = _))
          : (_ = x[109]),
        x[110] !== g || x[111] !== _
          ? ((k = (0, a.jsxs)("div", {
              className: "rounded-2xl bg-surface-secondary px-5 select-none",
              children: [g, _],
            })),
            (x[110] = g),
            (x[111] = _),
            (x[112] = k))
          : (k = x[112]),
        k
      )
    }
    function ex(e) {
      return "knowledge_file_too_large" === e.code && "knowledge_file" === e.resource.type
    }
    function eT(e) {
      let i,
        t,
        s,
        l,
        r,
        o,
        d = (0, n.c)(19),
        { label: c, loading: u, positive: p, status: g, warning: h, details: f } = e,
        b = void 0 !== h && h
      d[0] !== c
        ? ((i = (0, a.jsx)("dt", {
            className: "min-w-0 basis-35 text-secondary",
            children: (0, a.jsx)(m.A, { ...c }),
          })),
          (d[0] = c),
          (d[1] = i))
        : (i = d[1])
      let v = b ? "text-warning" : "text-default"
      return (
        d[2] !== v
          ? ((t = (0, ef.A)("flex min-w-0 grow basis-32 items-center justify-end gap-2 text-end", v)),
            (d[2] = v),
            (d[3] = t))
          : (t = d[3]),
        d[4] !== u || d[5] !== p || d[6] !== g || d[7] !== b
          ? ((s = u
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
                    (0, a.jsx)("span", { className: "min-w-0 wrap-anywhere", children: g }),
                    p && (0, a.jsx)(eb.gL9, { className: "text-success" }),
                    !p && b && (0, a.jsx)(eb.dGN, { className: "text-warning" }),
                    !p && !b && (0, a.jsx)(eb.zOs, { className: "text-secondary" }),
                  ],
                })),
            (d[4] = u),
            (d[5] = p),
            (d[6] = g),
            (d[7] = b),
            (d[8] = s))
          : (s = d[8]),
        d[9] !== t || d[10] !== s
          ? ((l = (0, a.jsx)("dd", { className: t, children: s })), (d[9] = t), (d[10] = s), (d[11] = l))
          : (l = d[11]),
        d[12] !== f || d[13] !== u
          ? ((r =
              u || null == f
                ? null
                : (0, a.jsx)("dd", { className: "w-full border-s border-default ps-3 text-default", children: f })),
            (d[12] = f),
            (d[13] = u),
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
    let eP = (0, $.YK)({
      instructionsAndFiles: {
        id: "chatgptConversations.gpts.migration.readiness.instructionsAndFiles",
        defaultMessage: "Instructions and files",
        description: "Label for the GPT instructions and knowledge files row in the migration readiness checklist",
      },
      apps: {
        id: "chatgptConversations.gpts.migration.readiness.appsAndActions",
        defaultMessage: "Apps and actions",
        description:
          "Short label for required connected apps and custom API actions in the GPT migration readiness checklist",
      },
      accessAndSharing: {
        id: "chatgptConversations.gpts.migration.readiness.accessAndSharing",
        defaultMessage: "Access and sharing",
        description:
          "Label for plugin access and workspace sharing permissions in the GPT migration readiness checklist",
      },
      noIssues: {
        id: "chatgptConversations.gpts.migration.readiness.noIssues",
        defaultMessage: "No issues found",
        description:
          "Short status in the GPT migration checklist when the relevant instructions, files, apps, or actions check has no known issues. Does not guarantee later server validation will pass.",
      },
      needsReview: {
        id: "chatgptConversations.gpts.migration.readiness.needsReview",
        defaultMessage: "Needs review",
        description:
          "Readiness status when migration has reported validation or file-copy issues that the user should review below the checklist",
      },
      fileCheckFailed: {
        id: "chatgptConversations.gpts.migration.readiness.fileCheckFailed",
        defaultMessage: "Couldn’t check files",
        description:
          "Advisory status when knowledge-file availability could not be checked before GPT migration; this does not mean the files were deleted",
      },
      checkFailed: {
        id: "chatgptConversations.gpts.migration.readiness.checkFailed",
        defaultMessage: "Couldn’t check",
        description:
          "Readiness status when a check has not succeeded; it does not imply the GPT content, apps, or sharing permissions are ready",
      },
      unsupportedActions: {
        id: "chatgptConversations.gpts.migration.readiness.unsupportedActions",
        defaultMessage: "Unsupported actions",
        description:
          "Short warning status inside Apps and actions in the GPT migration checklist. Custom API actions will not transfer to the plugin, but migration remains allowed.",
      },
      appsUnavailable: {
        id: "chatgptConversations.gpts.migration.readiness.appsUnavailable",
        defaultMessage: "Apps unavailable",
        description: "Readiness status when one or more required GPT apps are unavailable and prevent migration",
      },
      appsDisabled: {
        id: "chatgptConversations.gpts.migration.readiness.appsDisabled",
        defaultMessage: "Apps disabled by admin",
        description:
          "Readiness status when required GPT apps are disabled by the workspace administrator; migration remains available but the resulting plugin will be disabled",
      },
    })
    var eA = t("hfkq"),
      eC = t("iJ7F"),
      eG = t("w8VL")
    let ej = b.object({ action_ids: b.array(b.unknown()).nullish().catch(null) }),
      eM = /^(?:asdk_app|connector|templated_apps)_[A-Za-z0-9][A-Za-z0-9_-]*$/
    function ez(e) {
      let i,
        t,
        s,
        o,
        c,
        m,
        b,
        P,
        A,
        C,
        R,
        $,
        L,
        Q,
        Z,
        J,
        V,
        X,
        ee,
        et,
        ea,
        en,
        es,
        el,
        er,
        eo = (0, n.c)(137),
        { resource: ed, remigration: ec, onClose: eu, onMigratingChange: ep, onMigrated: em } = e,
        ef = (0, p.gh)(q.u),
        eb = (0, h.A)(),
        ev = (0, f.Zp)(),
        ew = (0, O.AS)(),
        { accountId: ey, userId: e_ } = (0, k.As)()
      eo[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = { preview: !1 }), (eo[0] = i)) : (i = eo[0])
      let { data: ek } = (0, T.YL)(void 0, i),
        ex = (0, O.Zj)("2160578039"),
        eT = (0, p.Ul)(x.c),
        eP = (0, p.Ul)(x.W),
        eC = (0, p._U)(E.X, "2513446768")
      eo[1] !== eC ? ((t = eC?.get("disable_gpt_updates", !1)), (eo[1] = eC), (eo[2] = t)) : (t = eo[2])
      let ez = !0 === t,
        eU = (0, p._U)(E.X, "73506792"),
        eB = eg.parse(eU?.value.max_file_bytes),
        eW = (0, p._U)(E.X, "2562735250")?.get("enabled", !1) === !0,
        eY = (0, D.l)(ek, (0, O.Zj)("1355972088")),
        eR = (0, p._U)(E.X, "2826703856")?.get("enable_gpt_fe_controls", !1) === !0,
        e$ = (0, O.Zj)("782250190"),
        {
          data: eL,
          isPending: eK,
          isError: eH,
        } = (0, p._U)(_.Jk, ey ?? "", {
          enabled: null != ey && ek?.id === ey && "workspace" === ek.structure && (eY || eR),
        }),
        [eQ, eZ] = (0, g.useState)(ec ? void 0 : ed.gizmo.migrated_plugin_id),
        eJ = (0, p._U)(W.v, `${ey}:${eQ}`)
      eo[3] !== ed.tools ? ((s = ed.tools.some(eO)), (eo[3] = ed.tools), (eo[4] = s)) : (s = eo[4])
      let [eV, eX] = (0, g.useState)(s),
        [e0, e1] = (0, g.useState)(!1),
        [e2, e4] = (0, g.useState)(!1),
        [e3, e5] = (0, g.useState)(),
        [e6, e8] = (0, g.useState)()
      eo[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = { hasCustomActions: !1, disabledAppIds: [] }), (eo[5] = o))
        : (o = eo[5])
      let [e7, e9] = (0, g.useState)(o),
        ie = (0, g.useRef)(!1),
        ii = (0, Y.T8)({ account: ek, rbacEnabled: eR, permissions: eL?.permissions, isPending: eK, isError: eH }),
        it =
          eW &&
          (0, Y.l5)({
            resource: ed,
            account: ek,
            accountId: ey,
            userId: e_,
            enabled: ex,
            allowMigrated: e2,
            remigration: ec,
          }) &&
          (0, D.J)(ek, eY, eL?.permissions),
        ia = (0, l.j)({
          queryKey: ["chatgpt-gizmos", "migration-preview", ey, e_, ed.gizmo.id, ed.gizmo.gizmo_config_id, eB],
          queryFn: async (e) => {
            let { signal: i } = e
            if (null == ey) throw Error("GPT migration requires an account")
            let t = await U.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                parameters: { path: { gizmo_id_or_short_url: ed.gizmo.id } },
                additionalHeaders: { "ChatGPT-Account-ID": ey },
                expectedErrorStatuses: [401, 403, 404],
                signal: i,
              }),
              a = t.gizmo.migrated_plugin_id
                ? await ef.queryClient.fetchQuery(
                    (0, eA.d)({ gizmoId: t.gizmo.id, pluginId: t.gizmo.migrated_plugin_id }, ey, e_),
                  )
                : void 0
            i.throwIfAborted()
            let n = a?.deleted_plugin_id && a?.gizmo_config_id ? a : void 0,
              s = n?.gizmo_config_id ?? t.gizmo.gizmo_config_id,
              [l, r] = await Promise.all([
                null == t.gizmo.migrated_plugin_id || null != n
                  ? (async function (e, i, t) {
                      let a = [
                        ...new Set(
                          e.tools.flatMap((e) => {
                            if ("connector" !== e.type) return []
                            let i = ej.safeParse(e.settings)
                            return i.success
                              ? (i.data.action_ids ?? []).filter((e) => "string" == typeof e && eM.test(e))
                              : []
                          }),
                        ),
                      ]
                      if (0 === a.length) return { unavailable: [], disabledByAdmin: [] }
                      let n = (
                          await Promise.all(
                            d()(a, 100).map((e) =>
                              U.Request.safePost("/aip/connectors/batch", {
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
                        s = new Map(n.map((e) => [(0, v.$)(e.id), e]))
                      return {
                        unavailable: a.filter((e) => !s.has((0, v.$)(e))),
                        disabledByAdmin: n.filter((e) => "DISABLED_BY_ADMIN" === e.status),
                      }
                    })(t, ey, i).catch(() => (i.throwIfAborted(), null))
                  : { unavailable: [], disabledByAdmin: [] },
                null == t.gizmo.migrated_plugin_id || null != n
                  ? (async function (e, i, t, a) {
                      let n = { maxFileBytes: a, unavailable: [], unchecked: [] },
                        s = AbortSignal.timeout(1e4),
                        l = AbortSignal.any([t, s]),
                        r = new Map(e.files.map((e) => [e.file_id || e.id, e])),
                        o = new Map(
                          e.files.flatMap((e) =>
                            "full_file_response" === e.file_response_type && null != e.size && e.size > a
                              ? [[e.file_id || e.id, e.name]]
                              : [],
                          ),
                        ),
                        c = e.gizmo.display.profile_pic_id,
                        p = u()([...r.keys(), ...(c ? [c] : [])])
                      for (let u of d()(p, 4))
                        await Promise.all(
                          u.map(async (d) => {
                            t.throwIfAborted()
                            let u = r.get(d),
                              p = u?.file_response_type === "full_file_response" && !!u.file_id,
                              g = d === c
                            if ((null == u || p || n.unchecked.push(d), (!p && !g) || s.aborted)) {
                              ;(p && n.unchecked.push(d), g && (n.profilePicture = { fileId: d, status: "unchecked" }))
                              return
                            }
                            try {
                              let t = await U.Request.safeGet("/files/{file_id}", {
                                parameters: { path: { file_id: d }, query: { gizmo_id: e.gizmo.id } },
                                additionalHeaders: { "ChatGPT-Account-ID": i },
                                expectedErrorStatuses: [401, 403, 404, 408, 429, 500, 502, 503, 504],
                                signal: l,
                              })
                              ;(p && null != t.size && t.size > a && !o.has(d) && o.set(d, t.name || u.name),
                                g &&
                                  (null == t.size || !Number.isFinite(t.size) || t.size < 0
                                    ? (n.profilePicture = { fileId: d, name: t.name || void 0, status: "unchecked" })
                                    : t.size > 5242880 &&
                                      (n.profilePicture = { fileId: d, name: t.name || void 0, status: "tooLarge" })))
                            } catch (i) {
                              t.throwIfAborted()
                              let e = i instanceof K.fk && 404 === i.status ? "unavailable" : "unchecked"
                              ;(p && n[e].push(d), g && (n.profilePicture = { fileId: d, status: e }))
                            }
                          }),
                        )
                      return (
                        o.size > 0 &&
                          ((n.oversized = Array.from(o, ([e, i]) => ({ fileId: e, name: i || void 0 }))),
                          (n.unavailable = n.unavailable.filter((e) => !o.has(e))),
                          (n.unchecked = n.unchecked.filter((e) => !o.has(e)))),
                        n
                      )
                    })(t, ey, i, eB)
                  : void 0,
              ])
            return { resource: t, remigration: n, configId: s, apps: l, fileCheck: r }
          },
          enabled: it && null == eQ && ("allowed" === ii || e2 || null != e3),
          retry: !1,
          staleTime: 0,
          refetchOnWindowFocus: !1,
        }),
        { data: is, isFetching: il, isError: ir, error: io, refetch: id } = (0, r.I)(ia),
        ic = e2 || (is?.resource.gizmo.migrated_plugin_id != null && !is.remigration),
        iu = it && (eT || ic) && ("allowed" === ii || ic)
      eo[6] !== is?.resource || eo[7] !== eV
        ? ((c = eV || is?.resource.tools.some(eq) === !0), (eo[6] = is?.resource), (eo[7] = eV), (eo[8] = c))
        : (c = eo[8])
      let ip = c
      if (il && !e0) {
        let e
        ;(eo[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = { status: "loading" }), (eo[9] = e)) : (e = eo[9]),
          (m = e))
      } else if (ir) {
        let e, i
        eo[10] !== io ? ((e = ei(io)), (eo[10] = io), (eo[11] = e)) : (e = eo[11])
        let t = e,
          a = "request" === t.kind ? t.status : void 0
        ;(eo[12] !== a ? ((i = { status: "error", httpStatus: a }), (eo[12] = a), (eo[13] = i)) : (i = eo[13]), (m = i))
      } else if (null == is) {
        let e
        ;(eo[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { status: "loading" }), (eo[14] = e))
          : (e = eo[14]),
          (m = e))
      } else {
        let e
        ;(eo[15] !== is.apps
          ? ((e = { status: "ready", apps: is.apps }), (eo[15] = is.apps), (eo[16] = e))
          : (e = eo[16]),
          (m = e))
      }
      let ig = "ready" === m.status && m.apps?.unavailable.length === 0,
        ih =
          e6?.gizmoId === ed.gizmo.id && e6.accountId === ey && e6.userId === e_ && e6.configId === is?.configId
            ? e6
            : void 0
      eo[17] !== ir ||
      eo[18] !== e7 ||
      eo[19] !== e3?.kind ||
      eo[20] !== ip ||
      eo[21] !== is?.apps?.disabledByAdmin ||
      eo[22] !== is?.apps?.unavailable ||
      eo[23] !== ih?.appIds
        ? ((b =
            e3?.kind === "request" &&
            (ir ||
              is?.apps?.unavailable.some((e) => !ih?.appIds.includes(e)) === !0 ||
              (ip && !e7.hasCustomActions) ||
              is?.apps?.disabledByAdmin.some((e) => !e7.disabledAppIds.includes(e.id)) === !0)),
          (eo[17] = ir),
          (eo[18] = e7),
          (eo[19] = e3?.kind),
          (eo[20] = ip),
          (eo[21] = is?.apps?.disabledByAdmin),
          (eo[22] = is?.apps?.unavailable),
          (eo[23] = ih?.appIds),
          (eo[24] = b))
        : (b = eo[24])
      let im = b,
        ib = is?.resource.gizmo,
        iv = ib?.share_recipient === "link" || ib?.share_recipient === "marketplace",
        iw =
          e$ &&
          ek?.id === ey &&
          ek?.structure === "workspace" &&
          ib?.workspace_id === ey &&
          ib.author.user_id === ek.account_user_id,
        iy = ib?.gizmo_config_id
      ;(eo[25] !== ey || eo[26] !== ed.gizmo.id || eo[27] !== iy || eo[28] !== e_
        ? ((P = ["chatgpt-gizmos", "migration-sharing-capabilities", ey, e_, ed.gizmo.id, iy]),
          (eo[25] = ey),
          (eo[26] = ed.gizmo.id),
          (eo[27] = iy),
          (eo[28] = e_),
          (eo[29] = P))
        : (P = eo[29]),
        eo[30] !== ey || eo[31] !== ed.gizmo.id
          ? ((A = (e) => {
              let { signal: i } = e
              if (null == ey) throw Error("Plugin sharing capabilities require an account")
              return U.Request.safeGet("/gizmos/{gizmo_id}/export/plugin/capabilities", {
                parameters: { path: { gizmo_id: ed.gizmo.id } },
                additionalHeaders: { "ChatGPT-Account-ID": ey },
                expectedErrorStatuses: [401, 403, 404],
                signal: i,
              })
            }),
            (eo[30] = ey),
            (eo[31] = ed.gizmo.id),
            (eo[32] = A))
          : (A = eo[32]))
      let i_ = iu && null == eQ && iw
      eo[33] !== A || eo[34] !== i_ || eo[35] !== P
        ? ((C = { queryKey: P, queryFn: A, enabled: i_, retry: !1, staleTime: 0, refetchOnWindowFocus: !1 }),
          (eo[33] = A),
          (eo[34] = i_),
          (eo[35] = P),
          (eo[36] = C))
        : (C = eo[36])
      let { data: ik, isError: ix, isFetching: iT } = (0, r.I)(C),
        iP = iu && null == eQ && iw && !ix && !iT && ik?.workspace_id === ey
      ;(iu &&
        "ready" === m.status &&
        null != is &&
        (0, Y.l2)({
          resource: is.resource,
          remigration: is.remigration,
          account: ek,
          accountId: ey,
          userId: e_,
          enabled: ex,
          allowMigrated: e2,
          gptPermission: ii,
        }) &&
        (R = is.resource.gizmo.author.user_id === (ek?.structure === "personal" ? e_ : ek?.account_user_id)),
        eo[37] !== e3 ||
        eo[38] !== is?.configId ||
        eo[39] !== is?.fileCheck?.oversized?.length ||
        eo[40] !== ih?.fileIds.length
          ? (($ =
              ((ih?.fileIds.length ?? 0) > 0 || (is?.fileCheck?.oversized?.length ?? 0) > 0) &&
              !!is?.configId &&
              (null == e3 || null != H(e3))),
            (eo[37] = e3),
            (eo[38] = is?.configId),
            (eo[39] = is?.fileCheck?.oversized?.length),
            (eo[40] = ih?.fileIds.length),
            (eo[41] = $))
          : ($ = eo[41]))
      let iA = $,
        iC =
          "ready" === m.status && (m.apps?.unavailable.length ?? 0) > 0 && !!is?.configId && (null == e3 || im || iA),
        iG = "ready" === m.status && null != m.apps && (iA || iC)
      eo[42] !== eu
        ? ((L = () => {
            ie.current || eu()
          }),
          (eo[42] = eu),
          (eo[43] = L))
        : (L = eo[43])
      let ij = L
      eo[44] !== ev || eo[45] !== eu || eo[46] !== em
        ? ((Q = (e) => {
            ;(eu(), null != em ? em(e) : (0, z.Uz)(e, ev))
          }),
          (eo[44] = ev),
          (eo[45] = eu),
          (eo[46] = em),
          (eo[47] = Q))
        : (Q = eo[47])
      let iM = Q
      eo[48] !== ey ||
      eo[49] !== ig ||
      eo[50] !== iu ||
      eo[51] !== iG ||
      eo[52] !== iC ||
      eo[53] !== ic ||
      eo[54] !== e3 ||
      eo[55] !== ip ||
      eo[56] !== eb ||
      eo[57] !== e2 ||
      eo[58] !== ep ||
      eo[59] !== iM ||
      eo[60] !== eQ ||
      eo[61] !== is ||
      eo[62] !== ia ||
      eo[63] !== ih?.fileIds ||
      eo[64] !== ed.gizmo.id ||
      eo[65] !== ef ||
      eo[66] !== e9 ||
      eo[67] !== e5 ||
      eo[68] !== eX ||
      eo[69] !== e1 ||
      eo[70] !== e4 ||
      eo[71] !== e8 ||
      eo[72] !== eZ ||
      eo[73] !== ew ||
      eo[74] !== e_
        ? ((Z = (e) => {
            let i,
              t = void 0 !== e && e
            if (ie.current || null != eQ || (!ef.get(x.c) && !ic) || !iu || (!ig && !iC && null == e3) || (t && !iG))
              return
            let a =
              t && null != ey && is?.configId
                ? {
                    accountId: ey,
                    userId: e_,
                    gizmoId: ed.gizmo.id,
                    configId: is.configId,
                    fileIds: u()([...(ih?.fileIds ?? []), ...(is.fileCheck?.oversized?.map(eF) ?? [])]),
                    appIds: is.apps?.unavailable ?? [],
                  }
                : void 0
            ;((ie.current = !0),
              e1(!0),
              ep?.(!0),
              e5(void 0),
              e8(a),
              e9({ hasCustomActions: ip, disabledAppIds: is?.apps?.disabledByAdmin.map(eD) ?? [] }),
              ef.queryClient
                .fetchQuery(ia)
                .catch(eN)
                .then(async (e) => {
                  if (null == e) return
                  let { resource: t, apps: n, fileCheck: s } = e
                  if (e.remigration?.deleted_plugin_id !== is?.remigration?.deleted_plugin_id) return
                  let l = ef.queryClient.getQueryData(["accounts", "check"])?.accounts?.find((e) => e.id === ey)
                  if (null == ey) return void e5({ kind: "request", status: 403 })
                  let r = ew.getDynamicConfig("2826703856").get("enable_gpt_fe_controls", !1),
                    o = ef.query.getData(_.Jk, ey)
                  if (
                    l?.structure === "workspace" &&
                    ((r && (null == t.gizmo.migrated_plugin_id || null != e.remigration)) ||
                      (0, D.l)(l, ew.checkGate("1355972088")))
                  )
                    try {
                      ;(await ef.query.cancel(_.Jk, ey),
                        await (0, w.ym)(ey),
                        (o = await ef.queryClient.fetchQuery({
                          ...ef.query.getOptions(_.Jk, ey),
                          queryFn: (e) => {
                            let { signal: i } = e
                            return (0, w.A2)(ef, ey, i, !0)
                          },
                          staleTime: 0,
                        })))
                    } catch {
                      e5({ kind: "request", status: 403 })
                      return
                    }
                  if (
                    ef.get(y.chatGptAuthenticatedAccountId$) !== ey ||
                    ef.get(y.chatGptAuthenticatedUserId$) !== e_ ||
                    !ew.checkGate("2160578039") ||
                    !ew.getDynamicConfig("2562735250").get("enabled", !1) ||
                    !(0, D.J)(l, ew.checkGate("1355972088"), o?.permissions)
                  )
                    return void e5({ kind: "request", status: 403 })
                  let d = e.remigration ? void 0 : t.gizmo.migrated_plugin_id
                  if (null == d) {
                    if (!ef.get(x.c) && !e2) return
                    if (null != a && e.configId !== a.configId) {
                      ;(e8(void 0),
                        e5({ kind: "request", status: 409, errorCode: "gpt_plugin_migration_source_changed" }))
                      return
                    }
                    if (
                      !(0, Y.l2)({
                        resource: t,
                        remigration: e.remigration,
                        account: l,
                        accountId: ey,
                        userId: e_,
                        enabled: !0,
                        gptPermission: (0, Y.T8)({
                          account: l,
                          rbacEnabled: ew.getDynamicConfig("2826703856").get("enable_gpt_fe_controls", !1),
                          permissions: o?.permissions,
                          isPending: !1,
                          isError: !1,
                        }),
                      })
                    )
                      return void e5({ kind: "request", status: 403 })
                    if (
                      null == n ||
                      s?.oversized?.some((e) => !a?.fileIds.includes(e.fileId)) ||
                      (null != s &&
                        (s.unavailable.some(
                          (e) => !a?.fileIds.includes(e) && !is?.fileCheck?.unavailable.includes(e),
                        ) ||
                          s.unchecked.some((e) => !a?.fileIds.includes(e) && !is?.fileCheck?.unchecked.includes(e)) ||
                          (null != s.profilePicture &&
                            (s.profilePicture.fileId !== is?.fileCheck?.profilePicture?.fileId ||
                              s.profilePicture.status !== is?.fileCheck?.profilePicture?.status)))) ||
                      (null != a && e8((a = { ...a, appIds: a.appIds.filter((e) => n.unavailable.includes(e)) })),
                      n.unavailable.some((e) => !a?.appIds.includes(e)) ||
                        n?.disabledByAdmin.some((e) => !is?.apps?.disabledByAdmin.some((i) => i.id === e.id)))
                    )
                      return
                    if (!ip && t.tools.some(eI)) return void eX(!0)
                  }
                  if (null == d || e2) {
                    if (!e.configId) throw Error("Missing published GPT configuration for migration")
                    i = e.configId
                    let s = a?.appIds.filter((e) => n?.unavailable.includes(e)),
                      l = (a?.fileIds.length ?? 0) > 0 || (s?.length ?? 0) > 0,
                      r = await U.Request.safePost("/gizmos/{gizmo_id}/migrate/plugin", {
                        parameters: {
                          path: { gizmo_id: t.gizmo.id },
                          query: l
                            ? {
                                skip_incompatible_configs: !0,
                                skip_file_ids: a?.fileIds.length ? a.fileIds : void 0,
                                skip_app_ids: s?.length ? s : void 0,
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
                      ef.get(y.chatGptAuthenticatedAccountId$) !== ey || ef.get(y.chatGptAuthenticatedUserId$) !== e_)
                    )
                      return
                    ;(ef.set(W.v, `${ey}:${d}`, {
                      failedFiles: r.failed_files ?? [],
                      files: t.files,
                      skippedFiles: r.skipped_files?.map(eS) ?? [],
                    }),
                      null != r.skipped_files &&
                        r.skipped_files.length > 0 &&
                        ef.get(j.Id).warning(eb.formatMessage(eG.o.description, { count: r.skipped_files.length })),
                      e4(!1))
                  }
                  if (ef.get(y.chatGptAuthenticatedAccountId$) !== ey || ef.get(y.chatGptAuthenticatedUserId$) !== e_)
                    return
                  let c = { ...t, gizmo: { ...t.gizmo, migrated_plugin_id: d } }
                  ;(ef.queryClient.setQueriesData({ queryKey: ["chatgpt-gizmos", "detail"] }, (e) =>
                    e?.gizmo.id === t.gizmo.id ? c : e,
                  ),
                    ef.queryClient.setQueryData(["chatgpt-gizmos", "detail", t.gizmo.id], c))
                  try {
                    ;(await U.Request.safePost("/ps/plugins/{plugin_id}/install", {
                      surface: "plugin_management",
                      parameters: { path: { plugin_id: d } },
                      additionalHeaders: { ...(0, S.A)(), "ChatGPT-Account-ID": ey },
                      expectedErrorStatuses: [400, 401, 403, 404, 409],
                    }),
                      ef.get(y.chatGptAuthenticatedAccountId$) === ey &&
                        ef.get(y.chatGptAuthenticatedUserId$) === e_ &&
                        (0, M.jg)(ef, N.h4, d))
                  } catch {
                    ef.get(y.chatGptAuthenticatedAccountId$) === ey &&
                      ef.get(y.chatGptAuthenticatedUserId$) === e_ &&
                      ef
                        .get(j.Id)
                        .warning(
                          eb.formatMessage({
                            id: "chatgptConversations.gpts.migration.installFailed",
                            defaultMessage:
                              "Your plugin was migrated, but couldn’t be installed. You can try installing it from its page.",
                            description:
                              "Warning after GPT migration succeeded but automatic installation failed. The user is taken to the new plugin's detail page, where they can retry installation without migrating again.",
                          }),
                        )
                  }
                  if (ef.get(y.chatGptAuthenticatedAccountId$) !== ey || ef.get(y.chatGptAuthenticatedUserId$) !== e_)
                    return
                  ;((0, I.lA)((e) => (0, F.y)(ef.queryClient, e), !0), eZ(d))
                  let u = ef.get(W.v, `${ey}:${d}`)
                  ;(u?.failedFiles.length || iM(d), ef.queryClient.invalidateQueries({ queryKey: ["chatgpt-gizmos"] }))
                })
                .catch((e) => {
                  if (ef.get(y.chatGptAuthenticatedAccountId$) === ey && ef.get(y.chatGptAuthenticatedUserId$) === e_) {
                    let t = ei(e),
                      n = H(t)
                    ;(null != ey && null != i && null != n
                      ? e8({
                          accountId: ey,
                          userId: e_,
                          gizmoId: ed.gizmo.id,
                          configId: i,
                          fileIds: [...new Set([...(a?.fileIds ?? []), ...n])],
                          appIds: a?.appIds ?? [],
                        })
                      : e8(a),
                      "request" === t.kind && "gpt_plugin_migration_editor_access_failed" === t.errorCode && e4(!0),
                      e5(t),
                      null != i && ef.queryClient.invalidateQueries({ queryKey: ia.queryKey }))
                  }
                })
                .finally(() => {
                  ;((ie.current = !1), e1(!1), ep?.(!1))
                }))
          }),
          (eo[48] = ey),
          (eo[49] = ig),
          (eo[50] = iu),
          (eo[51] = iG),
          (eo[52] = iC),
          (eo[53] = ic),
          (eo[54] = e3),
          (eo[55] = ip),
          (eo[56] = eb),
          (eo[57] = e2),
          (eo[58] = ep),
          (eo[59] = iM),
          (eo[60] = eQ),
          (eo[61] = is),
          (eo[62] = ia),
          (eo[63] = ih?.fileIds),
          (eo[64] = ed.gizmo.id),
          (eo[65] = ef),
          (eo[66] = e9),
          (eo[67] = e5),
          (eo[68] = eX),
          (eo[69] = e1),
          (eo[70] = e4),
          (eo[71] = e8),
          (eo[72] = eZ),
          (eo[73] = ew),
          (eo[74] = e_),
          (eo[75] = Z))
        : (Z = eo[75])
      let iz = Z,
        iS = is?.resource.gizmo
      eo[76] !== iS
        ? ((J = (function (e) {
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
          })(iS)),
          (eo[76] = iS),
          (eo[77] = J))
        : (J = eo[77])
      let iI = iu || null != e3 ? m : void 0,
        iN = eP && null == eQ && !ic,
        iD = ic ? "allowed" : ii
      ;(eo[78] !== iP || eo[79] !== ik?.sharing
        ? ((V = iP && ik?.sharing.allowed_modes.includes("workspace_directory") === !0),
          (eo[78] = iP),
          (eo[79] = ik?.sharing),
          (eo[80] = V))
        : (V = eo[80]),
        eo[81] !== iP || eo[82] !== ik?.sharing
          ? ((X =
              iP &&
              (ik?.sharing.allowed_modes.includes("users_and_groups") === !0 ||
                ik?.sharing.allowed_modes.includes("workspace_link") === !0)),
            (eo[81] = iP),
            (eo[82] = ik?.sharing),
            (eo[83] = X))
          : (X = eo[83]))
      let iF = eJ?.failedFiles,
        iq = eJ?.skippedFiles,
        iO = im ? void 0 : e3,
        iE = is?.fileCheck,
        iU = eJ?.files ?? is?.resource.files
      eo[84] !== iP || eo[85] !== ik?.sharing
        ? ((ee = iP && ik?.sharing.allowed_modes.includes("private") === !0),
          (eo[84] = iP),
          (eo[85] = ik?.sharing),
          (eo[86] = ee))
        : (ee = eo[86])
      let iB = iw && iT,
        iW = ek?.id === ey && ek?.structure === "workspace"
      eo[87] !== iM || eo[88] !== eQ
        ? ((et = null != eQ ? (0, a.jsx)(eh.lK, { onOpen: () => iM(eQ) }) : void 0),
          (eo[87] = iM),
          (eo[88] = eQ),
          (eo[89] = et))
        : (et = eo[89])
      let iY = iw && (ix || (!iT && ik?.workspace_id !== ey)),
        iR = iv && !ir && !il && ib?.current_user_permission != null && (!iw || iP)
      return (
        eo[90] !== id ? ((ea = () => void id()), (eo[90] = id), (eo[91] = ea)) : (ea = eo[91]),
        eo[92] !== ek?.structure ||
        eo[93] !== m.status ||
        eo[94] !== ij ||
        eo[95] !== ez ||
        eo[96] !== eR ||
        eo[97] !== is ||
        eo[98] !== ed.gizmo.id ||
        eo[99] !== eL?.permissions
          ? ((en =
              "ready" === m.status &&
              !ez &&
              is?.resource.gizmo.current_user_permission?.can_write &&
              (!eR || ek?.structure === "personal" || eL?.permissions?.includes("chatgpt.workspace.gpt.crud")) &&
              !is.resource.gizmo.migrated_plugin_id
                ? (e) => {
                    ie.current ||
                      (ij(),
                      (0, G.PQ)({
                        event: e,
                        href: `${(0, B.K)("/gpts/editor")}/${encodeURIComponent(ed.gizmo.id)}`,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      }))
                  }
                : void 0),
            (eo[92] = ek?.structure),
            (eo[93] = m.status),
            (eo[94] = ij),
            (eo[95] = ez),
            (eo[96] = eR),
            (eo[97] = is),
            (eo[98] = ed.gizmo.id),
            (eo[99] = eL?.permissions),
            (eo[100] = en))
          : (en = eo[100]),
        eo[101] !== iz ? ((es = () => iz()), (eo[101] = iz), (eo[102] = es)) : (es = eo[102]),
        eo[103] !== iG || eo[104] !== iz
          ? ((el = iG ? () => iz(!0) : void 0), (eo[103] = iG), (eo[104] = iz), (eo[105] = el))
          : (el = eo[105]),
        eo[106] !== iu ||
        eo[107] !== iA ||
        eo[108] !== ij ||
        eo[109] !== ez ||
        eo[110] !== ip ||
        eo[111] !== R ||
        eo[112] !== e0 ||
        eo[113] !== eQ ||
        eo[114] !== ed.gizmo.display.name ||
        eo[115] !== J ||
        eo[116] !== iI ||
        eo[117] !== iN ||
        eo[118] !== iD ||
        eo[119] !== V ||
        eo[120] !== X ||
        eo[121] !== iF ||
        eo[122] !== iq ||
        eo[123] !== iO ||
        eo[124] !== iE ||
        eo[125] !== iU ||
        eo[126] !== ee ||
        eo[127] !== iB ||
        eo[128] !== iW ||
        eo[129] !== et ||
        eo[130] !== iY ||
        eo[131] !== iR ||
        eo[132] !== ea ||
        eo[133] !== en ||
        eo[134] !== es ||
        eo[135] !== el
          ? ((er = (0, a.jsx)(eE, {
              sourceAudience: J,
              appCheck: iI,
              canMigrate: iu,
              workspaceAuthoringDisabled: iN,
              gptPermission: iD,
              canPublishPlugin: V,
              canSharePlugin: X,
              failedFiles: iF,
              skippedFiles: iq,
              failure: iO,
              fileCheck: iE,
              files: iU,
              gizmoName: ed.gizmo.display.name,
              hasCustomActions: ip,
              sharingChecked: ee,
              editingDisabled: ez,
              isCheckingSharing: iB,
              isGptOwner: R,
              isMigrating: e0,
              isWorkspaceAccount: iW,
              pluginAction: et,
              pluginId: eQ,
              sharingCheckFailed: iY,
              showPublicSharingNote: iR,
              onCheckApps: ea,
              onClose: ij,
              onEdit: en,
              onMigrate: es,
              hasFileOmissions: iA,
              onMigrateAnyway: el,
            })),
            (eo[106] = iu),
            (eo[107] = iA),
            (eo[108] = ij),
            (eo[109] = ez),
            (eo[110] = ip),
            (eo[111] = R),
            (eo[112] = e0),
            (eo[113] = eQ),
            (eo[114] = ed.gizmo.display.name),
            (eo[115] = J),
            (eo[116] = iI),
            (eo[117] = iN),
            (eo[118] = iD),
            (eo[119] = V),
            (eo[120] = X),
            (eo[121] = iF),
            (eo[122] = iq),
            (eo[123] = iO),
            (eo[124] = iE),
            (eo[125] = iU),
            (eo[126] = ee),
            (eo[127] = iB),
            (eo[128] = iW),
            (eo[129] = et),
            (eo[130] = iY),
            (eo[131] = iR),
            (eo[132] = ea),
            (eo[133] = en),
            (eo[134] = es),
            (eo[135] = el),
            (eo[136] = er))
          : (er = eo[136]),
        er
      )
    }
    function eS(e) {
      return { fileId: e.file_id }
    }
    function eI(e) {
      return "plugins_prototype" === e.type
    }
    function eN() {}
    function eD(e) {
      return e.id
    }
    function eF(e) {
      return e.fileId
    }
    function eq(e) {
      return "plugins_prototype" === e.type
    }
    function eO(e) {
      return "plugins_prototype" === e.type
    }
    function eE(e) {
      let i,
        t,
        l,
        r,
        o,
        d,
        c,
        u,
        p,
        g,
        h,
        f,
        b,
        v,
        w,
        y,
        _,
        k,
        x,
        T,
        G,
        j,
        M,
        z,
        S,
        I,
        N,
        D = (0, n.c)(167),
        {
          sourceAudience: F,
          appCheck: q,
          canMigrate: O,
          workspaceAuthoringDisabled: E,
          gptPermission: U,
          canPublishPlugin: B,
          canSharePlugin: W,
          failedFiles: Y,
          skippedFiles: $,
          failure: L,
          fileCheck: K,
          files: Q,
          gizmoName: Z,
          hasCustomActions: J,
          hasFileOmissions: V,
          isCheckingSharing: X,
          isGptOwner: ee,
          isMigrating: ei,
          isWorkspaceAccount: ea,
          modal: en,
          pluginAction: el,
          pluginId: er,
          portalContainer: eo,
          sharingCheckFailed: ed,
          sharingChecked: ec,
          editingDisabled: eu,
          showPublicSharingNote: ep,
          onCheckApps: eg,
          onClose: eh,
          onMigrate: ef,
          onMigrateAnyway: eb,
          onEdit: ev,
        } = e,
        ew = void 0 !== E && E,
        ey = void 0 === U ? "allowed" : U,
        e_ = void 0 !== B && B,
        ex = void 0 !== W && W,
        eT = void 0 !== V && V,
        eP = void 0 !== X && X,
        eA = void 0 !== ea && ea,
        eG = void 0 !== ed && ed,
        ej = void 0 !== ec && ec,
        eM = void 0 !== eu && eu
      D[0] !== Z ? ((i = Z.trim()), (D[0] = Z), (D[1] = i)) : (i = D[1])
      let ez = i
      D[2] !== Q || D[3] !== $
        ? ((t = $?.map((e) => {
            let { fileId: i } = e,
              t = Q?.find((e) => (e.file_id || e.id) === i)
            return (t?.file_response_type === "full_file_response" && t.name) || i
          })),
          (D[2] = Q),
          (D[3] = $),
          (D[4] = t))
        : (t = D[4])
      let eS = t
      D[5] !== L || D[6] !== eb || D[7] !== er
        ? ((l = null == er && null != eb && null != H(L)), (D[5] = L), (D[6] = eb), (D[7] = er), (D[8] = l))
        : (l = D[8])
      let eI = l,
        eN =
          null == er &&
          null != eb &&
          q?.status === "ready" &&
          (q.apps?.unavailable.length ?? 0) > 0 &&
          (null == L || eI),
        eD = (K?.oversized?.length ?? 0) > 0,
        eF = null == er && null != eb && eD,
        eq = eI || eF || eN || (null == er && null != eb && eT)
      D[9] !== L
        ? ((r =
            null != L && "request" !== L.kind && (null == L.status || 400 === L.status) && L.issues.every(eU)
              ? L.issues
              : []),
          (D[9] = L),
          (D[10] = r))
        : (r = D[10])
      let eO = r,
        eE = null == er && (q?.status === "error" || (q?.status === "ready" && null == q.apps))
      if (null == er && null != L && (0 === eO.length || eI)) {
        let e
        ;(D[11] !== eI || D[12] !== eM || D[13] !== L || D[14] !== Q
          ? ((e = et(L, Q, eM, eI)), (D[11] = eI), (D[12] = eM), (D[13] = L), (D[14] = Q), (D[15] = e))
          : (e = D[15]),
          (o = e))
      } else if (q?.status === "error") {
        let e
        ;(D[16] !== q.httpStatus
          ? ((e = et({ kind: "preview", status: q.httpStatus })), (D[16] = q.httpStatus), (D[17] = e))
          : (e = D[17]),
          (o = e))
      }
      let eB = null != o,
        eW = null == q || ("ready" === q.status && null != q.apps),
        eY = null == q || ("ready" === q.status && q.apps?.unavailable.length === 0)
      if (null != o) d = o.title
      else if (null != er) {
        let e
        ;(D[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.ready",
              defaultMessage: "Your plugin is ready",
              description: "Title after a GPT has successfully been migrated to a private plugin",
            })),
            (D[18] = e))
          : (e = D[18]),
          (d = e))
      } else if (ez) {
        let e
        ;(D[19] !== ez
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.title",
              defaultMessage: "Migrate {gptName}",
              description: "Confirmation dialog title naming the GPT to migrate into a private plugin",
              values: { gptName: ez },
            })),
            (D[19] = ez),
            (D[20] = e))
          : (e = D[20]),
          (d = e))
      } else {
        let e
        ;(D[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.untitledTitle",
              defaultMessage: "Migrate Untitled GPT",
              description: "Confirmation dialog title when the GPT being migrated into a private plugin has no name",
            })),
            (D[21] = e))
          : (e = D[21]),
          (d = e))
      }
      D[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, a.jsx)(m.A, {
            id: "chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip",
            defaultMessage: "Plugin creation is disabled for this workspace",
            description:
              "Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.",
          })),
          (D[22] = u))
        : (u = D[22])
      let eR = u
      if (ew && !ei) c = eR
      else if (null != er || ei || "allowed" === ey)
        if (null != o) c = o.description
        else if (null != er) {
          let e
          ;(D[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.successReviewDescription",
                defaultMessage: "Open your plugin to review it",
                description:
                  "Next step in the GPT migration success dialog. The plugin has been created and automatic installation has been attempted. The Open plugin button navigates to its detail page, where the user can review the result, including any file-copy warnings. One sentence with no placeholders.",
              })),
              (D[25] = e))
            : (e = D[25]),
            (c = e))
        } else if (O || ei || null != L)
          if (eA)
            if (!1 === ee) {
              let e
              ;(D[28] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.migration.adminDescription.editingLocked",
                    defaultMessage:
                      "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. The GPT’s owner will own the plugin, and you’ll also have edit access. You can manage sharing afterward, within your workspace’s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                    description:
                      "Standalone confirmation description before an eligible workspace administrator or owner migrates a GPT owned by someone else. Migration copies saved instructions and knowledge files into a private plugin. The GPT’s current owner retains plugin ownership, the caller also receives editor access, and sharing is managed afterward within workspace permissions. Migration prevents further edits to the original GPT; future updates can be made to the plugin. Six complete sentences with no placeholders.",
                  })),
                  (D[28] = e))
                : (e = D[28]),
                (c = e))
            } else {
              let e
              ;(D[29] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.migration.description.editingLocked",
                    defaultMessage:
                      "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. You can manage sharing afterward, within your workspace’s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                    description:
                      "Standalone confirmation description before GPT migration, shown to its current owner or while the caller’s ownership is still being confirmed in a workspace. Migration copies saved instructions and knowledge files into a private plugin, with sharing afterward subject to workspace permissions. Migration prevents further edits to the original GPT; future updates can be made to the plugin. Five complete sentences with no placeholders.",
                  })),
                  (D[29] = e))
                : (e = D[29]),
                (c = e))
            }
          else {
            let e
            ;(D[27] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.migration.nonWorkspaceDescription.editingLocked",
                  defaultMessage:
                    "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                  description:
                    "Standalone confirmation description before GPT migration in a personal account or while the current account is unconfirmed. Migration copies saved instructions and knowledge files into a private plugin, prevents further edits to the original GPT, and allows future updates to the plugin. Do not promise that sharing will be available afterward. Four complete sentences with no placeholders.",
                })),
                (D[27] = e))
              : (e = D[27]),
              (c = e))
          }
        else {
          let e
          ;(D[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.unavailable",
                defaultMessage:
                  "Migration isn't available for this GPT. Check that the GPT is saved and that you have permission to use plugins",
                description:
                  "Explains that GPT migration is unavailable while source eligibility or plugin-use permissions are missing",
              })),
              (D[26] = e))
            : (e = D[26]),
            (c = e))
        }
      else {
        let e
        ;(D[23] !== ey ? ((e = (0, a.jsx)(em.M, { permission: ey })), (D[23] = ey), (D[24] = e)) : (e = D[24]), (c = e))
      }
      if (
        D[30] !== q ||
        D[31] !== eI ||
        D[32] !== eM ||
        D[33] !== L ||
        D[34] !== eD ||
        D[35] !== eB ||
        D[36] !== ev ||
        D[37] !== eO ||
        D[38] !== er
      )
        ((p =
          null == er &&
          q?.status === "ready" &&
          !eI &&
          ((eD && !eB) ||
            eO.length > 0 ||
            (((L?.kind === "validation" && 400 === L.status) || (!eB && (q.apps?.unavailable.length ?? 0) > 0)) &&
              null != ev &&
              !eM))),
          (D[30] = q),
          (D[31] = eI),
          (D[32] = eM),
          (D[33] = L),
          (D[34] = eD),
          (D[35] = eB),
          (D[36] = ev),
          (D[37] = eO),
          (D[38] = er),
          (D[39] = p))
      else p = D[39]
      let e$ = p
      if (eE) {
        let e,
          i,
          t = ei || null == eg
        ;(D[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.checkAppsAgain",
              defaultMessage: "Check again",
              description: "Retry loading the published GPT and its app availability before migration",
            })),
            (D[40] = e))
          : (e = D[40]),
          D[41] !== eg || D[42] !== t
            ? ((i = (0, a.jsx)(P.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "button",
                disabled: t,
                onClick: eg,
                children: e,
              })),
              (D[41] = eg),
              (D[42] = t),
              (D[43] = i))
            : (i = D[43]),
          (g = i))
      } else if (e$) {
        let e,
          i,
          t = ei || eM || null == ev
        ;(D[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.editGpt",
              defaultMessage: "Edit GPT",
              description:
                "Primary recovery button in the GPT migration modal for incompatible GPT settings, oversized knowledge files, or unavailable required apps. Opens the web GPT editor to fix the configuration and publish an update. Disabled when editing is unavailable.",
            })),
            (D[44] = e))
          : (e = D[44]),
          D[45] !== ev || D[46] !== t
            ? ((i = (0, a.jsx)(P.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "button",
                disabled: t,
                onClick: ev,
                children: e,
              })),
              (D[45] = ev),
              (D[46] = t),
              (D[47] = i))
            : (i = D[47]),
          (g = i))
      } else if (eB || eI) {
        let e,
          i,
          t = ei || ew || !O || !eW
        ;(D[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.recovery.retry",
              defaultMessage: "Try again",
              description:
                "Primary button in the GPT migration recovery dialog. Retries the failed operation: migration and any outstanding admin editor grant. Does not create a duplicate plugin.",
            })),
            (D[48] = e))
          : (e = D[48]),
          D[49] !== t
            ? ((i = (0, a.jsx)(P.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "submit",
                disabled: t,
                children: e,
              })),
              (D[49] = t),
              (D[50] = i))
            : (i = D[50]),
          (g = i))
      } else if (null != er) g = el
      else {
        let e,
          i,
          t = ew || !O || !eY || eD || eO.length > 0
        ;(D[51] !== ei
          ? ((e = ei
              ? (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.migration.migratingLabel",
                  defaultMessage: "Migrating",
                  description:
                    "Disabled primary button status while the GPT migration request is in progress. A spinner accompanies this short label.",
                })
              : (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.migration.confirm",
                  defaultMessage: "Migrate to plugin",
                  description: "Confirms creation of a private plugin from the latest published GPT",
                })),
            (D[51] = ei),
            (D[52] = e))
          : (e = D[52]),
          D[53] !== ei || D[54] !== t || D[55] !== e
            ? ((i = (0, a.jsx)(P.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                disabled: t,
                loading: ei,
                type: "submit",
                children: e,
              })),
              (D[53] = ei),
              (D[54] = t),
              (D[55] = e),
              (D[56] = i))
            : (i = D[56]),
          (g = i))
      }
      if (!eE && !e$ && null == er) {
        let e,
          i = ew ? eR : void 0
        ;(D[57] !== g || D[58] !== i
          ? ((e = (0, a.jsx)(s.m, { content: i, children: g })), (D[57] = g), (D[58] = i), (D[59] = e))
          : (e = D[59]),
          (g = e))
      }
      let eL = !ei
      ;(D[60] !== ei || D[61] !== eh
        ? ((h = (e) => {
            e || ei || eh()
          }),
          (D[60] = ei),
          (D[61] = eh),
          (D[62] = h))
        : (h = D[62]),
        D[63] !== eY ||
        D[64] !== eW ||
        D[65] !== O ||
        D[66] !== eI ||
        D[67] !== eD ||
        D[68] !== ei ||
        D[69] !== eB ||
        D[70] !== ef ||
        D[71] !== eO ||
        D[72] !== er ||
        D[73] !== e$ ||
        D[74] !== ew
          ? ((f = (e) => {
              ;(e.preventDefault(),
                !ei &&
                  !ew &&
                  O &&
                  (eY || (eB && eW)) &&
                  !e$ &&
                  (!eD || eB) &&
                  (0 === eO.length || eI) &&
                  null == er &&
                  ef())
            }),
            (D[63] = eY),
            (D[64] = eW),
            (D[65] = O),
            (D[66] = eI),
            (D[67] = eD),
            (D[68] = ei),
            (D[69] = eB),
            (D[70] = ef),
            (D[71] = eO),
            (D[72] = er),
            (D[73] = e$),
            (D[74] = ew),
            (D[75] = f))
          : (f = D[75]),
        D[76] !== d
          ? ((b = (0, a.jsx)(A.L3, {
              className: "text-center text-heading-lg leading-7 font-semibold wrap-anywhere select-none",
              children: d,
            })),
            (D[76] = d),
            (D[77] = b))
          : (b = D[77]))
      let eK = null == c ? "sr-only" : "text-center text-sm leading-5 text-secondary select-none",
        eH = eB ? "alert" : void 0
      return (
        D[78] !== c ? ((v = (0, a.jsx)("div", { children: c })), (D[78] = c), (D[79] = v)) : (v = D[79]),
        D[80] !== eK || D[81] !== eH || D[82] !== v
          ? ((w = (0, a.jsx)(A.rr, { asChild: !0, className: eK, "aria-live": "polite", role: eH, children: v })),
            (D[80] = eK),
            (D[81] = eH),
            (D[82] = v),
            (D[83] = w))
          : (w = D[83]),
        D[84] !== b || D[85] !== w
          ? ((y = (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [b, w] })),
            (D[84] = b),
            (D[85] = w),
            (D[86] = y))
          : (y = D[86]),
        D[87] !== q ||
        D[88] !== O ||
        D[89] !== eF ||
        D[90] !== eN ||
        D[91] !== e_ ||
        D[92] !== ex ||
        D[93] !== eM ||
        D[94] !== L ||
        D[95] !== K ||
        D[96] !== Q ||
        D[97] !== J ||
        D[98] !== eP ||
        D[99] !== eB ||
        D[100] !== eA ||
        D[101] !== ev ||
        D[102] !== er ||
        D[103] !== eG ||
        D[104] !== ej ||
        D[105] !== ep ||
        D[106] !== F
          ? ((_ =
              null != er || eB
                ? null
                : (0, a.jsx)(ek, {
                    sourceAudience: F ?? (ep ? "public" : void 0),
                    appCheck: q,
                    canMigrate: O,
                    canPublishPlugin: e_,
                    canSharePlugin: ex,
                    failure: L,
                    fileCheck: K,
                    files: Q,
                    hasCustomActions: J,
                    isCheckingSharing: eP,
                    isWorkspaceAccount: eA,
                    sharingCheckFailed: eG,
                    sharingChecked: ej,
                    canEdit: null != ev && !eM,
                    canOmitUnavailableApps: eN,
                    canOmitOversizedFiles: eF,
                    editingDisabled: eM,
                  })),
            (D[87] = q),
            (D[88] = O),
            (D[89] = eF),
            (D[90] = eN),
            (D[91] = e_),
            (D[92] = ex),
            (D[93] = eM),
            (D[94] = L),
            (D[95] = K),
            (D[96] = Q),
            (D[97] = J),
            (D[98] = eP),
            (D[99] = eB),
            (D[100] = eA),
            (D[101] = ev),
            (D[102] = er),
            (D[103] = eG),
            (D[104] = ej),
            (D[105] = ep),
            (D[106] = F),
            (D[107] = _))
          : (_ = D[107]),
        D[108] !== eF ||
        D[109] !== eM ||
        D[110] !== K ||
        D[111] !== Q ||
        D[112] !== eD ||
        D[113] !== eB ||
        D[114] !== ev ||
        D[115] !== er
          ? ((k =
              null == er &&
              eB &&
              null != K &&
              (eD || K.unavailable.length > 0 || K.unchecked.length > 0 || null != K.profilePicture)
                ? (0, a.jsx)("div", {
                    className: "w-full border-s border-default ps-3 text-sm text-default select-none",
                    children: (0, a.jsx)(es, {
                      fileCheck: K,
                      files: Q,
                      canOmitOversizedFiles: eF,
                      canEdit: null != ev && !eM,
                    }),
                  })
                : null),
            (D[108] = eF),
            (D[109] = eM),
            (D[110] = K),
            (D[111] = Q),
            (D[112] = eD),
            (D[113] = eB),
            (D[114] = ev),
            (D[115] = er),
            (D[116] = k))
          : (k = D[116]),
        D[117] !== ei
          ? ((x = ei
              ? (0, a.jsx)("p", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.migration.pending",
                    defaultMessage: "Creating your plugin…",
                    description:
                      "Progress status while a GPT is being migrated; the dialog cannot be dismissed during creation",
                  }),
                })
              : null),
            (D[117] = ei),
            (D[118] = x))
          : (x = D[118]),
        D[119] !== Y || D[120] !== Q || D[121] !== er
          ? ((T =
              null != Y && Y.length > 0
                ? (0, a.jsx)(R.Z, { failedFiles: Y, files: Q, migrationSucceeded: null != er })
                : null),
            (D[119] = Y),
            (D[120] = Q),
            (D[121] = er),
            (D[122] = T))
          : (T = D[122]),
        D[123] !== er || D[124] !== eS || D[125] !== $
          ? ((G =
              null != er && null != $ && $.length > 0 ? (0, a.jsx)(eC.G, { count: $.length, filenames: eS }) : null),
            (D[123] = er),
            (D[124] = eS),
            (D[125] = $),
            (D[126] = G))
          : (G = D[126]),
        D[127] !== eY ||
        D[128] !== O ||
        D[129] !== eI ||
        D[130] !== eF ||
        D[131] !== eq ||
        D[132] !== eN ||
        D[133] !== eT ||
        D[134] !== ei ||
        D[135] !== eb ||
        D[136] !== ew
          ? ((j =
              eq &&
              (0, a.jsx)(s.m, {
                content: ew
                  ? eR
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        eN &&
                          (eI || eF || eT) &&
                          (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.migration.omitAppsAndFilesTooltip",
                            defaultMessage:
                              "Create the plugin without the unavailable apps and failed knowledge files. Invalid app settings and conversation starters may also be left out.",
                            description:
                              "Tooltip for Migrate anyway when unavailable apps and failed knowledge files will be omitted, including previously approved file omissions for this saved GPT configuration. The backend can also omit invalid app settings and conversation starters.",
                          }),
                        eN &&
                          !eI &&
                          !eF &&
                          !eT &&
                          (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.migration.omitUnavailableAppsTooltip",
                            defaultMessage:
                              "Create the plugin without the unavailable apps. Invalid app settings and conversation starters may also be left out.",
                            description:
                              "Tooltip for the explicit Migrate anyway action when required apps are unavailable to the user. Only unavailable apps are omitted; available and admin-disabled apps remain. The backend can also omit invalid app settings and conversation starters.",
                          }),
                        !eN &&
                          (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.migration.omitFailedFilesTooltip",
                            defaultMessage:
                              "Create the plugin without the failed knowledge files. Invalid app settings and conversation starters may also be left out.",
                            description:
                              "Tooltip explaining the explicit Migrate anyway recovery action after required GPT knowledge files failed. The failed knowledge files are omitted, including files the user agreed to omit in earlier attempts on the same saved GPT configuration. The backend may also omit malformed app selections and invalid conversation starters.",
                          }),
                      ],
                    }),
                children: (0, a.jsx)(P.$, {
                  color: "ghostSecondary",
                  size: "dialogAction",
                  disabled: ei || ew || !O || (!eY && !eN),
                  type: "button",
                  onClick: eb,
                  children: (0, a.jsx)("span", {
                    className: "underline decoration-from-font underline-offset-2",
                    children: (0, a.jsx)(m.A, {
                      id: "chatgptConversations.gpts.migration.omitFailedFiles",
                      defaultMessage: "Migrate anyway",
                      description:
                        "Optional migration recovery action. Creates the plugin while explicitly omitting unavailable apps or failed knowledge files, as explained by its tooltip.",
                    }),
                  }),
                }),
              })),
            (D[127] = eY),
            (D[128] = O),
            (D[129] = eI),
            (D[130] = eF),
            (D[131] = eq),
            (D[132] = eN),
            (D[133] = eT),
            (D[134] = ei),
            (D[135] = eb),
            (D[136] = ew),
            (D[137] = j))
          : (j = D[137]),
        D[138] !== eq || D[139] !== ei || D[140] !== eB || D[141] !== eh || D[142] !== er || D[143] !== e$
          ? ((M =
              !e$ &&
              !eB &&
              !eq &&
              (0, a.jsx)(P.$, {
                color: "ghostSecondary",
                size: "dialogAction",
                disabled: ei,
                type: "button",
                onClick: eh,
                children: (0, a.jsxs)("span", {
                  className: "underline decoration-from-font underline-offset-2",
                  children: [
                    null != er &&
                      (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.done",
                        defaultMessage: "Done",
                        description: "Closes the successful GPT migration dialog without opening the plugin",
                      }),
                    null == er &&
                      (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.later",
                        defaultMessage: "Migrate later",
                        description: "Dismisses GPT migration without creating a plugin",
                      }),
                  ],
                }),
              })),
            (D[138] = eq),
            (D[139] = ei),
            (D[140] = eB),
            (D[141] = eh),
            (D[142] = er),
            (D[143] = e$),
            (D[144] = M))
          : (M = D[144]),
        D[145] !== g || D[146] !== j || D[147] !== M
          ? ((z = (0, a.jsxs)(C.Es, {
              className: "flex-col text-center",
              expandSingleButton: !1,
              children: [g, j, M],
            })),
            (D[145] = g),
            (D[146] = j),
            (D[147] = M),
            (D[148] = z))
          : (z = D[148]),
        D[149] !== y || D[150] !== _ || D[151] !== k || D[152] !== x || D[153] !== T || D[154] !== G || D[155] !== z
          ? ((S = (0, a.jsxs)("div", {
              className: "flex flex-col gap-8 p-6 pt-14 text-start sm:p-10",
              children: [y, _, k, x, T, G, z],
            })),
            (D[149] = y),
            (D[150] = _),
            (D[151] = k),
            (D[152] = x),
            (D[153] = T),
            (D[154] = G),
            (D[155] = z),
            (D[156] = S))
          : (S = D[156]),
        D[157] !== f || D[158] !== S
          ? ((I = (0, a.jsx)(C.R4, { as: "form", size: "viewport", variant: "chatgpt", onSubmit: f, children: S })),
            (D[157] = f),
            (D[158] = S),
            (D[159] = I))
          : (I = D[159]),
        D[160] !== ei || D[161] !== en || D[162] !== eo || D[163] !== eL || D[164] !== h || D[165] !== I
          ? ((N = (0, a.jsx)(A.lG, {
              open: !0,
              modal: en,
              portalContainer: eo,
              showDialogClose: eL,
              shouldIgnoreClickOutside: ei,
              size: "beacon",
              closeButtonSize: "large",
              variant: "promotional",
              onOpenChange: h,
              children: I,
            })),
            (D[160] = ei),
            (D[161] = en),
            (D[162] = eo),
            (D[163] = eL),
            (D[164] = h),
            (D[165] = I),
            (D[166] = N))
          : (N = D[166]),
        N
      )
    }
    function eU(e) {
      return "knowledge_file_too_large" === e.code && "knowledge_file" === e.resource.type
    }
  },
  z0fI(e, i, t) {
    var a = t("ABep"),
      n = t("QosV"),
      s = t("oyxz"),
      l = t("zKCW"),
      r = t("Wdu7"),
      o = t("hZax")
    function d(e) {
      return "knowledge_file" === e.type
    }
    function c(e) {
      return "profile_picture" === e.type
    }
    function u(e) {
      let i,
        t,
        l,
        r = (0, n.c)(12),
        { file: o, files: d, issues: c } = e
      if (r[0] !== o || r[1] !== d || r[2] !== c) {
        let e
        ;((i = c?.filter(
          (e) => "knowledge_file" === e.resource.type && null != o.file_id && e.resource.id === o.file_id,
        )),
          r[5] !== o || r[6] !== d
            ? ((e = d?.find((e) => e.file_id === o.file_id)), (r[5] = o), (r[6] = d), (r[7] = e))
            : (e = r[7]))
        let a = e
        ;((t =
          i?.find(h)?.resource.name || (a?.file_response_type === "full_file_response" ? a.name : void 0) || o.file_id),
          (r[0] = o),
          (r[1] = d),
          (r[2] = c),
          (r[3] = i),
          (r[4] = t))
      } else ((i = r[3]), (t = r[4]))
      let u = t
      return (
        r[8] !== o || r[9] !== i?.[0]?.message || r[10] !== u
          ? ((l = (0, a.jsx)("li", {
              className: "wrap-anywhere text-default select-text",
              children: u
                ? (0, a.jsx)(s.A, {
                    id: "chatgptConversations.gpts.migration.referenceFileCopyErrorWithFilename",
                    defaultMessage: "<strong>{filename}</strong> — {message}",
                    description:
                      "One failed reference file and the server's reason it could not be copied during GPT migration",
                    values: { filename: u, message: i?.[0]?.message || o.message, strong: g },
                  })
                : (0, a.jsx)(s.A, {
                    id: "chatgptConversations.gpts.migration.unnamedReferenceFileCopyErrorWithLabel",
                    defaultMessage: "<strong>Reference file</strong> — {message}",
                    description:
                      "Copy failure and the server's reason when neither a reference file's name nor identifier is available during GPT migration",
                    values: { message: i?.[0]?.message || o.message, strong: p },
                  }),
            })),
            (r[8] = o),
            (r[9] = i?.[0]?.message),
            (r[10] = u),
            (r[11] = l))
          : (l = r[11]),
        l
      )
    }
    function p(e) {
      return (0, a.jsx)("strong", { children: e })
    }
    function g(e) {
      return (0, a.jsx)("strong", { children: e })
    }
    function h(e) {
      return e.resource.name
    }
    t.d(
      i,
      {},
      {
        Z: function (e) {
          let i,
            t,
            p,
            g,
            h,
            m,
            f = (0, n.c)(23),
            { failedFiles: b, files: v, issues: w, migrationSucceeded: y } = e,
            _ = (0, o.Fj)("2513446768")
          f[0] !== _ ? ((i = _.get("disable_gpt_updates", !1)), (f[0] = _), (f[1] = i)) : (i = f[1])
          let k = i
          f[2] !== b ? ((t = b.filter(c)), (f[2] = b), (f[3] = t)) : (t = f[3])
          let x = t
          if (f[4] !== b || f[5] !== v || f[6] !== k || f[7] !== w || f[8] !== y || f[9] !== x.length) {
            let e,
              i = b.filter(d)
            if (y) {
              let i
              ;(f[13] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, a.jsx)(s.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyWarningAfterSuccess",
                    defaultMessage:
                      "Your plugin was created without these files. Open your plugin and choose Edit plugin to add them.",
                    description:
                      "Warning on the destination after successful migration reports files that were not copied; the plugin already exists",
                  })),
                  (f[13] = i))
                : (i = f[13]),
                (e = i))
            } else if (k) {
              let i
              ;(f[14] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, a.jsx)(s.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyFailedReadonlyDescription",
                    defaultMessage: "Your plugin wasn’t created. Try again later.",
                    description:
                      "Explains that failed reference file copies prevented creating the plugin when GPT editing and publishing are no longer available, so retrying later is the available recovery action",
                  })),
                  (f[14] = i))
                : (i = f[14]),
                (e = i))
            } else {
              let i
              ;(f[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, a.jsx)(s.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyFailedDescription",
                    defaultMessage: "Your plugin wasn’t created. Try again, or fix these files and republish the GPT.",
                    description:
                      "Explains that failed reference file copies prevent creating the plugin and how to retry or fix the GPT",
                  })),
                  (f[15] = i))
                : (i = f[15]),
                (e = i))
            }
            ;((p = "flex flex-col gap-3 text-start text-sm"),
              f[16] !== y || f[17] !== x.length
                ? ((g =
                    x.length > 0
                      ? (0, a.jsx)(l.l, {
                          type: "warning",
                          variant: "callout",
                          layout: "vertical",
                          role: "alert",
                          content: (0, a.jsx)("p", {
                            className: "select-none",
                            children: y
                              ? (0, a.jsx)(s.A, {
                                  id: "chatgptConversations.gpts.migration.profileCopyFailedAfterSuccess",
                                  defaultMessage:
                                    "Your plugin was created, but we couldn’t copy the GPT’s profile picture. To add a logo, open your plugin and choose Edit plugin.",
                                  description:
                                    "Notice after a GPT successfully becomes a plugin but its profile picture could not be copied; Edit plugin is the action used to upload a replacement plugin logo",
                                })
                              : (0, a.jsx)(s.A, {
                                  id: "chatgptConversations.gpts.migration.profileCopyFailedBeforeSuccess",
                                  defaultMessage:
                                    "We couldn’t copy the GPT’s profile picture. After migration succeeds, open your plugin and choose Edit plugin to add a logo.",
                                  description:
                                    "Notice that the GPT profile picture could not be copied while other errors prevented creating a plugin; explains how to add a logo after resolving the blocking errors and completing migration",
                                }),
                          }),
                        })
                      : null),
                  (f[16] = y),
                  (f[17] = x.length),
                  (f[18] = g))
                : (g = f[18]),
              (h =
                i.length > 0
                  ? (0, a.jsx)(r.F, {
                      level: "danger",
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1 text-sm",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "font-semibold text-default select-none",
                            children: (0, a.jsx)(s.A, {
                              id: "chatgptConversations.gpts.migration.referenceCopyFailed",
                              defaultMessage:
                                "{count, plural, one {A reference file couldn’t be synced} other {Reference files couldn’t be synced}}",
                              description:
                                "Heading for GPT reference file copy failures that prevent migration, followed by the affected filenames and errors",
                              values: { count: i.length },
                            }),
                          }),
                          (0, a.jsx)("p", { className: "text-secondary select-none", children: e }),
                          (0, a.jsx)("ul", {
                            className: "flex list-disc flex-col gap-1 ps-5",
                            children: i.map((e, i) => (0, a.jsx)(u, { file: e, files: v, issues: w }, i)),
                          }),
                        ],
                      }),
                    })
                  : null),
              (f[4] = b),
              (f[5] = v),
              (f[6] = k),
              (f[7] = w),
              (f[8] = y),
              (f[9] = x.length),
              (f[10] = p),
              (f[11] = g),
              (f[12] = h))
          } else ((p = f[10]), (g = f[11]), (h = f[12]))
          return (
            f[19] !== p || f[20] !== g || f[21] !== h
              ? ((m = (0, a.jsxs)("div", { className: p, children: [g, h] })),
                (f[19] = p),
                (f[20] = g),
                (f[21] = h),
                (f[22] = m))
              : (m = f[22]),
            m
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
        description:
          "Nonblocking warning body in a toast and destination plugin page after GPT-to-plugin migration succeeds while skipping knowledge files that are no longer available for migration. Shown to the GPT creator or workspace administrator; explains that the plugin exists and replacement files can be uploaded through Edit plugin. Describe file availability without claiming that a user deleted the files or identifying a cause. Placeholder count is the positive integer number of skipped knowledge files, used for pluralization. Two complete sentences; no filenames or upstream errors are shown.",
      },
    })
    t.d(i, {}, { o: a })
  },
  iJ7F(e, i, t) {
    var a = t("ABep"),
      n = t("QosV"),
      s = t("oyxz"),
      l = t("Qgfj"),
      r = t("zKCW"),
      o = t("w8VL")
    t.d(
      i,
      {},
      {
        G: function (e) {
          let i,
            t,
            d,
            c = (0, n.c)(7),
            { count: u, filenames: p } = e
          return (
            c[0] !== u
              ? ((i = (0, a.jsx)("p", { children: (0, a.jsx)(s.A, { ...o.o.description, values: { count: u } }) })),
                (c[0] = u),
                (c[1] = i))
              : (i = c[1]),
            c[2] !== p
              ? ((t =
                  null != p &&
                  p.length > 0 &&
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)("strong", {
                      className: "font-medium select-text",
                      children: (0, a.jsx)(l.dT, { value: p, type: "conjunction" }),
                    }),
                  })),
                (c[2] = p),
                (c[3] = t))
              : (t = c[3]),
            c[4] !== i || c[5] !== t
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
                (c[4] = i),
                (c[5] = t),
                (c[6] = d))
              : (d = c[6]),
            d
          )
        },
      },
    )
  },
}
//# sourceMappingURL=312708.ddac0162e9.js.map
