export const __rspack_esm_ids = [312708]
export const __webpack_modules__ = {
  m15V(e, i, t) {
    var a = t("zTeN"),
      n = t("OWtl")
    let s = (0, a.bD)(n.u, (e) => null)
    t.d(i, {}, { v: s })
  },
  uC11(e, i, t) {
    t.d(i, { GptPluginMigrationDialog: () => eM })
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
      x = t("OAko"),
      T = t("Sm6l"),
      P = t("JNtf"),
      A = t("mUDD"),
      C = t("Ot7V"),
      G = t("SGsN"),
      j = t("K4kL"),
      M = t("k7G6"),
      z = t("WzdM"),
      S = t("ugfi"),
      I = t("cLdu"),
      N = t("jaeI"),
      F = t("sLlu"),
      D = t("OWtl"),
      q = t("hZax"),
      O = t("JYRT"),
      E = t("Ghh3"),
      U = t("wrCb"),
      B = t("m15V"),
      W = t("DY7H"),
      Y = t("z0fI"),
      R = t("Qgfj"),
      $ = t("zKCW"),
      L = t("eShZ")
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
    let H = b.union([
        b
          .string()
          .min(1)
          .transform((e) => ({ message: e, suggestion: void 0 })),
        b.object({ message: b.string().min(1), suggestion: b.string().optional() }),
      ]),
      Q = b.union([
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
      Z = b.object({
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
      J = b.object({
        type: b.enum(["profile_picture", "knowledge_file"]),
        file_id: b.string().nullish(),
        code: b.enum(["download_failed", "invalid_file", "timeout"]),
        message: b.string(),
      }),
      V = b.object({
        code: b.literal("gpt_plugin_incompatible"),
        issues: b.array(Z),
        failed_files: b.array(J).nullish(),
      }),
      X = b.object({ code: b.literal("gpt_plugin_file_copy_failed"), issues: b.array(Z), failed_files: b.array(J) })
    function ee(e) {
      if (!(e instanceof L.fk)) return { kind: "request" }
      try {
        let i = b.object({ detail: b.unknown() }).parse(JSON.parse(e.message)),
          t = X.safeParse(i.detail)
        if (t.success)
          return { kind: "file_copy", status: e.status, issues: t.data.issues, failedFiles: t.data.failed_files }
        let a = V.safeParse(i.detail)
        if (a.success)
          return { kind: "validation", status: e.status, issues: a.data.issues, failedFiles: a.data.failed_files }
        let n = Q.safeParse(i.detail).data,
          s =
            i.detail !== n && (400 === e.status || "gpt_plugin_migration_editor_access_failed" === n)
              ? H.safeParse(i.detail).data
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
    function ei(e, i, t = !1, n = !1) {
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
          title: (0, a.jsx)(m.A, { ...et.failed }),
          description: (0, a.jsxs)("div", {
            className: "flex flex-col gap-3 text-start wrap-anywhere",
            children: [
              t && !n ? (0, a.jsx)(m.A, { ...ea.readOnly }) : null,
              s.map((n, s) => {
                let r = "validation" === e.kind || "file_copy" === e.kind ? e.issues[s]?.resource : void 0,
                  o = r?.type === "knowledge_file" ? r.id : l?.[s]?.file_id,
                  d = null != o ? i?.find((e) => (e.file_id || e.id) === o) : void 0,
                  c = r?.name || (d?.file_response_type === "full_file_response" ? d.name : void 0) || o
                return (0, a.jsx)(
                  $.l,
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
            title: (0, a.jsx)(m.A, { ...et.bundleSize }),
            description: t
              ? (0, a.jsx)(m.A, { ...ea.readOnly })
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
        title: (0, a.jsx)(m.A, { ...et["editorAccess" === l ? "failed" : l], values: o }),
        description: (0, a.jsx)(m.A, { ...ea[l], values: o }),
      }
    }
    let et = (0, R.YK)({
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
      ea = (0, R.YK)({
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
    function en(e) {
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
        let e = new Map(p?.map(eu)),
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
                    filenames: (0, a.jsx)(R.dT, {
                      value: u.oversized.map((i) => i.name || e.get(i.fileId) || i.fileId),
                      type: "conjunction",
                    }),
                    count: u.oversized.length,
                    maxFileSizeMb: u.maxFileBytes / 1048576,
                    recovery: n,
                    strong: ec,
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
                              values: { filename: u.profilePicture.name || u.profilePicture.fileId, strong: ed },
                            })
                          : null,
                        "unavailable" === u.profilePicture.status
                          ? (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.migration.readiness.profilePictureUnavailableNamedHelp",
                              defaultMessage:
                                "<strong>{filename}</strong> couldn’t be accessed. You can still try migrating.",
                              description:
                                "Advisory warning before GPT migration when profile picture metadata is inaccessible. filename is its name or identifier. The lookup cannot distinguish deletion from lack of access; migration remains allowed. Two complete sentences.",
                              values: { filename: u.profilePicture.name || u.profilePicture.fileId, strong: eo },
                            })
                          : null,
                        "unchecked" === u.profilePicture.status
                          ? (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.migration.readiness.profilePictureUncheckedNamedHelp",
                              defaultMessage:
                                "<strong>{filename}</strong> couldn’t be checked. You can still try migrating.",
                              description:
                                "Advisory warning before GPT migration when profile picture metadata lookup failed, timed out, or did not provide a valid size. filename is its name or identifier. Ordinary migration remains allowed. Two complete sentences.",
                              values: { filename: u.profilePicture.name || u.profilePicture.fileId, strong: er },
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
                    filenames: (0, a.jsx)(R.dT, {
                      value: u.unavailable.map((i) => e.get(i) || i),
                      type: "conjunction",
                    }),
                    count: u.unavailable.length,
                    strong: el,
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
                    filenames: (0, a.jsx)(R.dT, { value: u.unchecked.map((i) => e.get(i) || i), type: "conjunction" }),
                    count: u.unchecked.length,
                    strong: es,
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
    function es(e) {
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
    function ec(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e })
    }
    function eu(e) {
      let i = e.file_id || e.id
      return [i, ("full_file_response" === e.file_response_type && e.name) || i]
    }
    let ep = b.number().int().positive().catch(0x6400000)
    var eg = t("ZTXF"),
      eh = t("g2DC"),
      em = t("on57"),
      ef = t("bVeK")
    function eb(e) {
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
          o[0] !== d ? ((e = d.map(ew)), (o[0] = d), (o[1] = e)) : (e = o[1]),
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
        o[11] !== d ? ((s = d.map(ev)), (o[11] = d), (o[12] = s)) : (s = o[12]),
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
    function ev(e) {
      return (0, a.jsx)("li", { children: e }, e)
    }
    function ew(e) {
      return (0, a.jsx)(
        "li",
        {
          children: (0, a.jsx)(m.A, {
            id: "chatgptConversations.gpts.migration.unavailableApp.edit_help",
            defaultMessage:
              "<strong>{appName}</strong> is no longer available. Edit the GPT to remove or replace it with an available app.",
            description:
              "Blocking warning inside the Apps and actions row of the GPT migration modal, for a viewer who can edit the source GPT. appName is the unavailable app's identifier because its display name is unavailable; it may be long. The strong tag emphasizes that identifier. Explains how to fix the missing app before migration; two sentences that may wrap.",
            values: { appName: e, strong: ey },
          }),
        },
        e,
      )
    }
    function ey(e) {
      return (0, a.jsx)("strong", { className: "font-medium select-text", children: e }, "strong")
    }
    function e_(e) {
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
          sharingCheckFailed: F,
          sharingChecked: D,
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
        x[15] !== F ||
        x[16] !== D ||
        x[17] !== T
      ) {
        let e, n, g, h
        if (
          ((c = null != M && "request" !== M.kind ? M.issues.filter(ek) : []),
          (r = eT.noIssues),
          W && M?.kind !== "request"
            ? null != M || z?.oversized?.length || z?.unavailable.length || z?.profilePicture != null
              ? (r = eT.needsReview)
              : z?.unchecked.length && (r = eT.fileCheckFailed)
            : (r = eT.checkFailed),
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
        ;((t = eT.noIssues),
          W && A?.apps != null
            ? A.apps.unavailable.length > 0
              ? (t = eT.appsUnavailable)
              : A.apps.disabledByAdmin.length > 0
                ? (t = eT.appsDisabled)
                : S && (t = eT.unsupportedActions)
            : (t = eT.checkFailed))
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
          x[48] !== F ||
          x[49] !== D ||
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
                sharingCheckFailed: F,
                sharingChecked: D,
              })),
              (x[43] = C),
              (x[44] = G),
              (x[45] = j),
              (x[46] = I),
              (x[47] = N),
              (x[48] = F),
              (x[49] = D),
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
                  ? (0, a.jsx)(eb, { unavailable: f, canEdit: q, canOmit: O, editingDisabled: U })
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
            ? ((e = (0, a.jsx)(en, { fileCheck: z, files: P, canOmitOversizedFiles: E, canEdit: q })),
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
          (x[15] = F),
          (x[16] = D),
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
      let Y = r === eT.noIssues,
        R = M?.kind === "validation" || c.length > 0 || d
      x[82] !== l || x[83] !== o || x[84] !== B || x[85] !== Y || x[86] !== R
        ? ((h = (0, a.jsx)(ex, {
            label: eT.instructionsAndFiles,
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
      let $ = t === eT.noIssues,
        L = (A?.status === "ready" && null == A.apps) || t === eT.appsUnavailable || t === eT.appsDisabled || S
      x[88] !== i || x[89] !== s || x[90] !== B || x[91] !== $ || x[92] !== L
        ? ((f = (0, a.jsx)(ex, { label: eT.apps, loading: B, positive: $, status: s, warning: L, details: i })),
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
          ? ((y = (0, a.jsx)(ex, {
              label: eT.accessAndSharing,
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
    function ek(e) {
      return "knowledge_file_too_large" === e.code && "knowledge_file" === e.resource.type
    }
    function ex(e) {
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
          ? ((t = (0, em.A)("flex min-w-0 grow basis-32 items-center justify-end gap-2 text-end", v)),
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
                    p && (0, a.jsx)(ef.gL9, { className: "text-success" }),
                    !p && b && (0, a.jsx)(ef.dGN, { className: "text-warning" }),
                    !p && !b && (0, a.jsx)(ef.zOs, { className: "text-secondary" }),
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
    let eT = (0, R.YK)({
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
    var eP = t("hfkq"),
      eA = t("iJ7F"),
      eC = t("w8VL")
    let eG = b.object({ action_ids: b.array(b.unknown()).nullish().catch(null) }),
      ej = /^(?:asdk_app|connector|templated_apps)_[A-Za-z0-9][A-Za-z0-9_-]*$/
    function eM(e) {
      let i,
        t,
        s,
        o,
        c,
        m,
        b,
        T,
        P,
        A,
        Y,
        R,
        $,
        H,
        Q,
        Z,
        J,
        V,
        X,
        ei,
        et,
        ea,
        en,
        es,
        el,
        er = (0, n.c)(134),
        { resource: eo, remigration: ed, onClose: ec, onMigratingChange: eu, onMigrated: eh } = e,
        em = (0, p.gh)(D.u),
        ef = (0, h.A)(),
        eb = (0, f.Zp)(),
        ev = (0, q.AS)(),
        { accountId: ew, userId: ey } = (0, k.As)()
      er[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = { preview: !1 }), (er[0] = i)) : (i = er[0])
      let { data: e_ } = (0, x.YL)(void 0, i),
        ek = (0, q.Zj)("2160578039"),
        ex = (0, p._U)(O.X, "2513446768")
      er[1] !== ex ? ((t = ex?.get("disable_gpt_updates", !1)), (er[1] = ex), (er[2] = t)) : (t = er[2])
      let eT = !0 === t,
        eA = (0, p._U)(O.X, "73506792"),
        eM = ep.parse(eA?.value.max_file_bytes),
        eE = (0, p._U)(O.X, "2562735250")?.get("enabled", !1) === !0,
        eU = (0, N.l)(e_, (0, q.Zj)("1355972088")),
        eB = (0, p._U)(O.X, "2826703856")?.get("enable_gpt_fe_controls", !1) === !0,
        eW = (0, q.Zj)("782250190"),
        {
          data: eY,
          isPending: eR,
          isError: e$,
        } = (0, p._U)(_.Jk, ew ?? "", {
          enabled: null != ew && e_?.id === ew && "workspace" === e_.structure && (eU || eB),
        }),
        [eL, eK] = (0, g.useState)(ed ? void 0 : eo.gizmo.migrated_plugin_id),
        eH = (0, p._U)(B.v, `${ew}:${eL}`)
      er[3] !== eo.tools ? ((s = eo.tools.some(eq)), (er[3] = eo.tools), (er[4] = s)) : (s = er[4])
      let [eQ, eZ] = (0, g.useState)(s),
        [eJ, eV] = (0, g.useState)(!1),
        [eX, e0] = (0, g.useState)(!1),
        [e1, e2] = (0, g.useState)(),
        [e4, e3] = (0, g.useState)()
      er[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = { hasCustomActions: !1, disabledAppIds: [] }), (er[5] = o))
        : (o = er[5])
      let [e5, e8] = (0, g.useState)(o),
        e7 = (0, g.useRef)(!1),
        e6 = (0, W.T8)({ account: e_, rbacEnabled: eB, permissions: eY?.permissions, isPending: eR, isError: e$ }),
        e9 =
          eE &&
          (0, W.l5)({
            resource: eo,
            account: e_,
            accountId: ew,
            userId: ey,
            enabled: ek,
            allowMigrated: eX,
            remigration: ed,
          }) &&
          (0, N.J)(e_, eU, eY?.permissions),
        ie = (0, l.j)({
          queryKey: ["chatgpt-gizmos", "migration-preview", ew, ey, eo.gizmo.id, eo.gizmo.gizmo_config_id, eM],
          queryFn: async (e) => {
            let { signal: i } = e
            if (null == ew) throw Error("GPT migration requires an account")
            let t = await E.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                parameters: { path: { gizmo_id_or_short_url: eo.gizmo.id } },
                additionalHeaders: { "ChatGPT-Account-ID": ew },
                expectedErrorStatuses: [401, 403, 404],
                signal: i,
              }),
              a = t.gizmo.migrated_plugin_id
                ? await em.queryClient.fetchQuery(
                    (0, eP.d)({ gizmoId: t.gizmo.id, pluginId: t.gizmo.migrated_plugin_id }, ew, ey),
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
                            let i = eG.safeParse(e.settings)
                            return i.success
                              ? (i.data.action_ids ?? []).filter((e) => "string" == typeof e && ej.test(e))
                              : []
                          }),
                        ),
                      ]
                      if (0 === a.length) return { unavailable: [], disabledByAdmin: [] }
                      let n = (
                          await Promise.all(
                            d()(a, 100).map((e) =>
                              E.Request.safePost("/aip/connectors/batch", {
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
                    })(t, ew, i).catch(() => (i.throwIfAborted(), null))
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
                              let t = await E.Request.safeGet("/files/{file_id}", {
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
                              let e = i instanceof L.fk && 404 === i.status ? "unavailable" : "unchecked"
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
                    })(t, ew, i, eM)
                  : void 0,
              ])
            return { resource: t, remigration: n, configId: s, apps: l, fileCheck: r }
          },
          enabled: e9 && null == eL && ("allowed" === e6 || eX || null != e1),
          retry: !1,
          staleTime: 0,
          refetchOnWindowFocus: !1,
        }),
        { data: ii, isFetching: it, isError: ia, error: is, refetch: il } = (0, r.I)(ie),
        ir = eX || (ii?.resource.gizmo.migrated_plugin_id != null && !ii.remigration),
        io = e9 && ("allowed" === e6 || ir)
      er[6] !== ii || er[7] !== eQ
        ? ((c = eQ || ii?.resource.tools.some(eD) === !0), (er[6] = ii), (er[7] = eQ), (er[8] = c))
        : (c = er[8])
      let id = c
      if (it && !eJ) {
        let e
        ;(er[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = { status: "loading" }), (er[9] = e)) : (e = er[9]),
          (m = e))
      } else if (ia) {
        let e, i
        er[10] !== is ? ((e = ee(is)), (er[10] = is), (er[11] = e)) : (e = er[11])
        let t = e,
          a = "request" === t.kind ? t.status : void 0
        ;(er[12] !== a ? ((i = { status: "error", httpStatus: a }), (er[12] = a), (er[13] = i)) : (i = er[13]), (m = i))
      } else if (null == ii) {
        let e
        ;(er[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { status: "loading" }), (er[14] = e))
          : (e = er[14]),
          (m = e))
      } else {
        let e
        ;(er[15] !== ii.apps
          ? ((e = { status: "ready", apps: ii.apps }), (er[15] = ii.apps), (er[16] = e))
          : (e = er[16]),
          (m = e))
      }
      let ic = "ready" === m.status && m.apps?.unavailable.length === 0,
        iu =
          e4?.gizmoId === eo.gizmo.id && e4.accountId === ew && e4.userId === ey && e4.configId === ii?.configId
            ? e4
            : void 0
      er[17] !== ia || er[18] !== e5 || er[19] !== e1?.kind || er[20] !== id || er[21] !== ii?.apps || er[22] !== iu
        ? ((b =
            e1?.kind === "request" &&
            (ia ||
              ii?.apps?.unavailable.some((e) => !iu?.appIds.includes(e)) === !0 ||
              (id && !e5.hasCustomActions) ||
              ii?.apps?.disabledByAdmin.some((e) => !e5.disabledAppIds.includes(e.id)) === !0)),
          (er[17] = ia),
          (er[18] = e5),
          (er[19] = e1?.kind),
          (er[20] = id),
          (er[21] = ii?.apps),
          (er[22] = iu),
          (er[23] = b))
        : (b = er[23])
      let ip = b,
        ig = ii?.resource.gizmo,
        ih = ig?.share_recipient === "link" || ig?.share_recipient === "marketplace",
        im =
          eW &&
          e_?.id === ew &&
          e_?.structure === "workspace" &&
          ig?.workspace_id === ew &&
          ig.author.user_id === e_.account_user_id,
        ib = ig?.gizmo_config_id
      ;(er[24] !== ew || er[25] !== eo.gizmo.id || er[26] !== ib || er[27] !== ey
        ? ((T = ["chatgpt-gizmos", "migration-sharing-capabilities", ew, ey, eo.gizmo.id, ib]),
          (er[24] = ew),
          (er[25] = eo.gizmo.id),
          (er[26] = ib),
          (er[27] = ey),
          (er[28] = T))
        : (T = er[28]),
        er[29] !== ew || er[30] !== eo.gizmo.id
          ? ((P = (e) => {
              let { signal: i } = e
              if (null == ew) throw Error("Plugin sharing capabilities require an account")
              return E.Request.safeGet("/gizmos/{gizmo_id}/export/plugin/capabilities", {
                parameters: { path: { gizmo_id: eo.gizmo.id } },
                additionalHeaders: { "ChatGPT-Account-ID": ew },
                expectedErrorStatuses: [401, 403, 404],
                signal: i,
              })
            }),
            (er[29] = ew),
            (er[30] = eo.gizmo.id),
            (er[31] = P))
          : (P = er[31]))
      let iv = io && null == eL && im
      er[32] !== P || er[33] !== iv || er[34] !== T
        ? ((A = { queryKey: T, queryFn: P, enabled: iv, retry: !1, staleTime: 0, refetchOnWindowFocus: !1 }),
          (er[32] = P),
          (er[33] = iv),
          (er[34] = T),
          (er[35] = A))
        : (A = er[35])
      let { data: iw, isError: iy, isFetching: i_ } = (0, r.I)(A),
        ik = io && null == eL && im && !iy && !i_ && iw?.workspace_id === ew
      ;(io &&
        "ready" === m.status &&
        null != ii &&
        (0, W.l2)({
          resource: ii.resource,
          remigration: ii.remigration,
          account: e_,
          accountId: ew,
          userId: ey,
          enabled: ek,
          allowMigrated: eX,
          gptPermission: e6,
        }) &&
        (Y = ii.resource.gizmo.author.user_id === (e_?.structure === "personal" ? ey : e_?.account_user_id)),
        er[36] !== e1 ||
        er[37] !== ii?.configId ||
        er[38] !== ii?.fileCheck?.oversized?.length ||
        er[39] !== iu?.fileIds.length
          ? ((R =
              ((iu?.fileIds.length ?? 0) > 0 || (ii?.fileCheck?.oversized?.length ?? 0) > 0) &&
              !!ii?.configId &&
              (null == e1 || null != K(e1))),
            (er[36] = e1),
            (er[37] = ii?.configId),
            (er[38] = ii?.fileCheck?.oversized?.length),
            (er[39] = iu?.fileIds.length),
            (er[40] = R))
          : (R = er[40]))
      let ix = R,
        iT =
          "ready" === m.status && (m.apps?.unavailable.length ?? 0) > 0 && !!ii?.configId && (null == e1 || ip || ix),
        iP = "ready" === m.status && null != m.apps && (ix || iT)
      er[41] !== ec
        ? (($ = () => {
            e7.current || ec()
          }),
          (er[41] = ec),
          (er[42] = $))
        : ($ = er[42])
      let iA = $
      er[43] !== eb || er[44] !== ec || er[45] !== eh
        ? ((H = (e) => {
            ;(ec(), null != eh ? eh(e) : (0, M.Uz)(e, eb))
          }),
          (er[43] = eb),
          (er[44] = ec),
          (er[45] = eh),
          (er[46] = H))
        : (H = er[46])
      let iC = H
      er[47] !== ew ||
      er[48] !== ic ||
      er[49] !== io ||
      er[50] !== iP ||
      er[51] !== iT ||
      er[52] !== e1 ||
      er[53] !== id ||
      er[54] !== ef ||
      er[55] !== eX ||
      er[56] !== eu ||
      er[57] !== iC ||
      er[58] !== eL ||
      er[59] !== ii ||
      er[60] !== ie ||
      er[61] !== iu?.fileIds ||
      er[62] !== eo.gizmo.id ||
      er[63] !== em ||
      er[64] !== e8 ||
      er[65] !== e2 ||
      er[66] !== eZ ||
      er[67] !== eV ||
      er[68] !== e0 ||
      er[69] !== e3 ||
      er[70] !== eK ||
      er[71] !== ev ||
      er[72] !== ey
        ? ((Q = (e) => {
            let i,
              t = void 0 !== e && e
            if (e7.current || null != eL || !io || (!ic && !iT && null == e1) || (t && !iP)) return
            let a =
              t && null != ew && ii?.configId
                ? {
                    accountId: ew,
                    userId: ey,
                    gizmoId: eo.gizmo.id,
                    configId: ii.configId,
                    fileIds: u()([...(iu?.fileIds ?? []), ...(ii.fileCheck?.oversized?.map(eF) ?? [])]),
                    appIds: ii.apps?.unavailable ?? [],
                  }
                : void 0
            ;((e7.current = !0),
              eV(!0),
              eu?.(!0),
              e2(void 0),
              e3(a),
              e8({ hasCustomActions: id, disabledAppIds: ii?.apps?.disabledByAdmin.map(eN) ?? [] }),
              em.queryClient
                .fetchQuery(ie)
                .catch(eI)
                .then(async (e) => {
                  if (null == e) return
                  let { resource: t, apps: n, fileCheck: s } = e
                  if (e.remigration?.deleted_plugin_id !== ii?.remigration?.deleted_plugin_id) return
                  let l = em.queryClient.getQueryData(["accounts", "check"])?.accounts?.find((e) => e.id === ew)
                  if (null == ew) return void e2({ kind: "request", status: 403 })
                  let r = ev.getDynamicConfig("2826703856").get("enable_gpt_fe_controls", !1),
                    o = em.query.getData(_.Jk, ew)
                  if (
                    l?.structure === "workspace" &&
                    ((r && (null == t.gizmo.migrated_plugin_id || null != e.remigration)) ||
                      (0, N.l)(l, ev.checkGate("1355972088")))
                  )
                    try {
                      ;(await em.query.cancel(_.Jk, ew),
                        await (0, w.ym)(ew),
                        (o = await em.queryClient.fetchQuery({
                          ...em.query.getOptions(_.Jk, ew),
                          queryFn: (e) => {
                            let { signal: i } = e
                            return (0, w.A2)(em, ew, i, !0)
                          },
                          staleTime: 0,
                        })))
                    } catch {
                      e2({ kind: "request", status: 403 })
                      return
                    }
                  if (
                    em.get(y.chatGptAuthenticatedAccountId$) !== ew ||
                    em.get(y.chatGptAuthenticatedUserId$) !== ey ||
                    !ev.checkGate("2160578039") ||
                    !ev.getDynamicConfig("2562735250").get("enabled", !1) ||
                    !(0, N.J)(l, ev.checkGate("1355972088"), o?.permissions)
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
                      !(0, W.l2)({
                        resource: t,
                        remigration: e.remigration,
                        account: l,
                        accountId: ew,
                        userId: ey,
                        enabled: !0,
                        gptPermission: (0, W.T8)({
                          account: l,
                          rbacEnabled: ev.getDynamicConfig("2826703856").get("enable_gpt_fe_controls", !1),
                          permissions: o?.permissions,
                          isPending: !1,
                          isError: !1,
                        }),
                      })
                    )
                      return void e2({ kind: "request", status: 403 })
                    if (
                      null == n ||
                      s?.oversized?.some((e) => !a?.fileIds.includes(e.fileId)) ||
                      (null != s &&
                        (s.unavailable.some(
                          (e) => !a?.fileIds.includes(e) && !ii?.fileCheck?.unavailable.includes(e),
                        ) ||
                          s.unchecked.some((e) => !a?.fileIds.includes(e) && !ii?.fileCheck?.unchecked.includes(e)) ||
                          (null != s.profilePicture &&
                            (s.profilePicture.fileId !== ii?.fileCheck?.profilePicture?.fileId ||
                              s.profilePicture.status !== ii?.fileCheck?.profilePicture?.status)))) ||
                      (null != a && e3((a = { ...a, appIds: a.appIds.filter((e) => n.unavailable.includes(e)) })),
                      n.unavailable.some((e) => !a?.appIds.includes(e)) ||
                        n?.disabledByAdmin.some((e) => !ii?.apps?.disabledByAdmin.some((i) => i.id === e.id)))
                    )
                      return
                    if (!id && t.tools.some(eS)) return void eZ(!0)
                  }
                  if (null == d || eX) {
                    if (!e.configId) throw Error("Missing published GPT configuration for migration")
                    i = e.configId
                    let s = a?.appIds.filter((e) => n?.unavailable.includes(e)),
                      l = (a?.fileIds.length ?? 0) > 0 || (s?.length ?? 0) > 0,
                      r = await E.Request.safePost("/gizmos/{gizmo_id}/migrate/plugin", {
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
                      em.get(y.chatGptAuthenticatedAccountId$) !== ew || em.get(y.chatGptAuthenticatedUserId$) !== ey)
                    )
                      return
                    ;(em.set(B.v, `${ew}:${d}`, {
                      failedFiles: r.failed_files ?? [],
                      files: t.files,
                      skippedFiles: r.skipped_files?.map(ez) ?? [],
                    }),
                      null != r.skipped_files &&
                        r.skipped_files.length > 0 &&
                        em.get(G.Id).warning(ef.formatMessage(eC.o.description, { count: r.skipped_files.length })),
                      e0(!1))
                  }
                  if (em.get(y.chatGptAuthenticatedAccountId$) !== ew || em.get(y.chatGptAuthenticatedUserId$) !== ey)
                    return
                  let c = { ...t, gizmo: { ...t.gizmo, migrated_plugin_id: d } }
                  ;(em.queryClient.setQueriesData({ queryKey: ["chatgpt-gizmos", "detail"] }, (e) =>
                    e?.gizmo.id === t.gizmo.id ? c : e,
                  ),
                    em.queryClient.setQueryData(["chatgpt-gizmos", "detail", t.gizmo.id], c))
                  try {
                    ;(await E.Request.safePost("/ps/plugins/{plugin_id}/install", {
                      surface: "plugin_management",
                      parameters: { path: { plugin_id: d } },
                      additionalHeaders: { ...(0, z.A)(), "ChatGPT-Account-ID": ew },
                      expectedErrorStatuses: [400, 401, 403, 404, 409],
                    }),
                      em.get(y.chatGptAuthenticatedAccountId$) === ew &&
                        em.get(y.chatGptAuthenticatedUserId$) === ey &&
                        (0, j.jg)(em, I.h4, d))
                  } catch {
                    em.get(y.chatGptAuthenticatedAccountId$) === ew &&
                      em.get(y.chatGptAuthenticatedUserId$) === ey &&
                      em
                        .get(G.Id)
                        .warning(
                          ef.formatMessage({
                            id: "chatgptConversations.gpts.migration.installFailed",
                            defaultMessage:
                              "Your plugin was migrated, but couldn’t be installed. You can try installing it from its page.",
                            description:
                              "Warning after GPT migration succeeded but automatic installation failed. The user is taken to the new plugin's detail page, where they can retry installation without migrating again.",
                          }),
                        )
                  }
                  if (em.get(y.chatGptAuthenticatedAccountId$) !== ew || em.get(y.chatGptAuthenticatedUserId$) !== ey)
                    return
                  ;((0, S.lA)((e) => (0, F.y)(em.queryClient, e), !0), eK(d))
                  let u = em.get(B.v, `${ew}:${d}`)
                  ;(u?.failedFiles.length || iC(d), em.queryClient.invalidateQueries({ queryKey: ["chatgpt-gizmos"] }))
                })
                .catch((e) => {
                  if (em.get(y.chatGptAuthenticatedAccountId$) === ew && em.get(y.chatGptAuthenticatedUserId$) === ey) {
                    let t = ee(e),
                      n = K(t)
                    ;(null != ew && null != i && null != n
                      ? e3({
                          accountId: ew,
                          userId: ey,
                          gizmoId: eo.gizmo.id,
                          configId: i,
                          fileIds: [...new Set([...(a?.fileIds ?? []), ...n])],
                          appIds: a?.appIds ?? [],
                        })
                      : e3(a),
                      "request" === t.kind && "gpt_plugin_migration_editor_access_failed" === t.errorCode && e0(!0),
                      e2(t),
                      null != i && em.queryClient.invalidateQueries({ queryKey: ie.queryKey }))
                  }
                })
                .finally(() => {
                  ;((e7.current = !1), eV(!1), eu?.(!1))
                }))
          }),
          (er[47] = ew),
          (er[48] = ic),
          (er[49] = io),
          (er[50] = iP),
          (er[51] = iT),
          (er[52] = e1),
          (er[53] = id),
          (er[54] = ef),
          (er[55] = eX),
          (er[56] = eu),
          (er[57] = iC),
          (er[58] = eL),
          (er[59] = ii),
          (er[60] = ie),
          (er[61] = iu?.fileIds),
          (er[62] = eo.gizmo.id),
          (er[63] = em),
          (er[64] = e8),
          (er[65] = e2),
          (er[66] = eZ),
          (er[67] = eV),
          (er[68] = e0),
          (er[69] = e3),
          (er[70] = eK),
          (er[71] = ev),
          (er[72] = ey),
          (er[73] = Q))
        : (Q = er[73])
      let iG = Q,
        ij = ii?.resource.gizmo
      er[74] !== ij
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
          })(ij)),
          (er[74] = ij),
          (er[75] = Z))
        : (Z = er[75])
      let iM = io || null != e1 ? m : void 0,
        iz = ir ? "allowed" : e6
      ;(er[76] !== ik || er[77] !== iw
        ? ((J = ik && iw?.sharing.allowed_modes.includes("workspace_directory") === !0),
          (er[76] = ik),
          (er[77] = iw),
          (er[78] = J))
        : (J = er[78]),
        er[79] !== ik || er[80] !== iw
          ? ((V =
              ik &&
              (iw?.sharing.allowed_modes.includes("users_and_groups") === !0 ||
                iw?.sharing.allowed_modes.includes("workspace_link") === !0)),
            (er[79] = ik),
            (er[80] = iw),
            (er[81] = V))
          : (V = er[81]))
      let iS = eH?.failedFiles,
        iI = eH?.skippedFiles,
        iN = ip ? void 0 : e1,
        iF = ii?.fileCheck,
        iD = eH?.files ?? ii?.resource.files
      er[82] !== ik || er[83] !== iw
        ? ((X = ik && iw?.sharing.allowed_modes.includes("private") === !0), (er[82] = ik), (er[83] = iw), (er[84] = X))
        : (X = er[84])
      let iq = im && i_,
        iO = e_?.id === ew && e_?.structure === "workspace"
      er[85] !== iC || er[86] !== eL
        ? ((ei = null != eL ? (0, a.jsx)(eg.lK, { onOpen: () => iC(eL) }) : void 0),
          (er[85] = iC),
          (er[86] = eL),
          (er[87] = ei))
        : (ei = er[87])
      let iE = im && (iy || (!i_ && iw?.workspace_id !== ew)),
        iU = ih && !ia && !it && ig?.current_user_permission != null && (!im || ik)
      return (
        er[88] !== il ? ((et = () => void il()), (er[88] = il), (er[89] = et)) : (et = er[89]),
        er[90] !== e_?.structure ||
        er[91] !== m.status ||
        er[92] !== iA ||
        er[93] !== eT ||
        er[94] !== eB ||
        er[95] !== ii ||
        er[96] !== eo.gizmo.id ||
        er[97] !== eY?.permissions
          ? ((ea =
              "ready" === m.status &&
              !eT &&
              ii?.resource.gizmo.current_user_permission?.can_write &&
              (!eB || e_?.structure === "personal" || eY?.permissions?.includes("chatgpt.workspace.gpt.crud")) &&
              !ii.resource.gizmo.migrated_plugin_id
                ? (e) => {
                    e7.current ||
                      (iA(),
                      (0, C.PQ)({
                        event: e,
                        href: `${(0, U.K)("/gpts/editor")}/${encodeURIComponent(eo.gizmo.id)}`,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      }))
                  }
                : void 0),
            (er[90] = e_?.structure),
            (er[91] = m.status),
            (er[92] = iA),
            (er[93] = eT),
            (er[94] = eB),
            (er[95] = ii),
            (er[96] = eo.gizmo.id),
            (er[97] = eY?.permissions),
            (er[98] = ea))
          : (ea = er[98]),
        er[99] !== iG ? ((en = () => iG()), (er[99] = iG), (er[100] = en)) : (en = er[100]),
        er[101] !== iP || er[102] !== iG
          ? ((es = iP ? () => iG(!0) : void 0), (er[101] = iP), (er[102] = iG), (er[103] = es))
          : (es = er[103]),
        er[104] !== io ||
        er[105] !== ix ||
        er[106] !== iA ||
        er[107] !== eT ||
        er[108] !== id ||
        er[109] !== Y ||
        er[110] !== eJ ||
        er[111] !== eL ||
        er[112] !== eo.gizmo.display.name ||
        er[113] !== Z ||
        er[114] !== iM ||
        er[115] !== iz ||
        er[116] !== J ||
        er[117] !== V ||
        er[118] !== iS ||
        er[119] !== iI ||
        er[120] !== iN ||
        er[121] !== iF ||
        er[122] !== iD ||
        er[123] !== X ||
        er[124] !== iq ||
        er[125] !== iO ||
        er[126] !== ei ||
        er[127] !== iE ||
        er[128] !== iU ||
        er[129] !== et ||
        er[130] !== ea ||
        er[131] !== en ||
        er[132] !== es
          ? ((el = (0, a.jsx)(eO, {
              sourceAudience: Z,
              appCheck: iM,
              canMigrate: io,
              gptPermission: iz,
              canPublishPlugin: J,
              canSharePlugin: V,
              failedFiles: iS,
              skippedFiles: iI,
              failure: iN,
              fileCheck: iF,
              files: iD,
              gizmoName: eo.gizmo.display.name,
              hasCustomActions: id,
              sharingChecked: X,
              editingDisabled: eT,
              isCheckingSharing: iq,
              isGptOwner: Y,
              isMigrating: eJ,
              isWorkspaceAccount: iO,
              pluginAction: ei,
              pluginId: eL,
              sharingCheckFailed: iE,
              showPublicSharingNote: iU,
              onCheckApps: et,
              onClose: iA,
              onEdit: ea,
              onMigrate: en,
              hasFileOmissions: ix,
              onMigrateAnyway: es,
            })),
            (er[104] = io),
            (er[105] = ix),
            (er[106] = iA),
            (er[107] = eT),
            (er[108] = id),
            (er[109] = Y),
            (er[110] = eJ),
            (er[111] = eL),
            (er[112] = eo.gizmo.display.name),
            (er[113] = Z),
            (er[114] = iM),
            (er[115] = iz),
            (er[116] = J),
            (er[117] = V),
            (er[118] = iS),
            (er[119] = iI),
            (er[120] = iN),
            (er[121] = iF),
            (er[122] = iD),
            (er[123] = X),
            (er[124] = iq),
            (er[125] = iO),
            (er[126] = ei),
            (er[127] = iE),
            (er[128] = iU),
            (er[129] = et),
            (er[130] = ea),
            (er[131] = en),
            (er[132] = es),
            (er[133] = el))
          : (el = er[133]),
        el
      )
    }
    function ez(e) {
      return { fileId: e.file_id }
    }
    function eS(e) {
      return "plugins_prototype" === e.type
    }
    function eI() {}
    function eN(e) {
      return e.id
    }
    function eF(e) {
      return e.fileId
    }
    function eD(e) {
      return "plugins_prototype" === e.type
    }
    function eq(e) {
      return "plugins_prototype" === e.type
    }
    function eO(e) {
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
        C,
        G,
        j,
        M,
        z,
        S,
        I,
        N = (0, n.c)(161),
        {
          sourceAudience: F,
          appCheck: D,
          canMigrate: q,
          gptPermission: O,
          canPublishPlugin: E,
          canSharePlugin: U,
          failedFiles: B,
          skippedFiles: W,
          failure: R,
          fileCheck: $,
          files: L,
          gizmoName: H,
          hasCustomActions: Q,
          hasFileOmissions: Z,
          isCheckingSharing: J,
          isGptOwner: V,
          isMigrating: X,
          isWorkspaceAccount: ee,
          modal: et,
          pluginAction: ea,
          pluginId: es,
          portalContainer: el,
          sharingCheckFailed: er,
          sharingChecked: eo,
          editingDisabled: ed,
          showPublicSharingNote: ec,
          onCheckApps: eu,
          onClose: ep,
          onMigrate: eg,
          onMigrateAnyway: em,
          onEdit: ef,
        } = e,
        eb = void 0 === O ? "allowed" : O,
        ev = void 0 !== E && E,
        ew = void 0 !== U && U,
        ey = void 0 !== Z && Z,
        ek = void 0 !== J && J,
        ex = void 0 !== ee && ee,
        eT = void 0 !== er && er,
        eP = void 0 !== eo && eo,
        eC = void 0 !== ed && ed
      N[0] !== H ? ((i = H.trim()), (N[0] = H), (N[1] = i)) : (i = N[1])
      let eG = i
      N[2] !== L || N[3] !== W
        ? ((t = W?.map((e) => {
            let { fileId: i } = e,
              t = L?.find((e) => (e.file_id || e.id) === i)
            return (t?.file_response_type === "full_file_response" && t.name) || i
          })),
          (N[2] = L),
          (N[3] = W),
          (N[4] = t))
        : (t = N[4])
      let ej = t
      N[5] !== R || N[6] !== em || N[7] !== es
        ? ((l = null == es && null != em && null != K(R)), (N[5] = R), (N[6] = em), (N[7] = es), (N[8] = l))
        : (l = N[8])
      let eM = l,
        ez =
          null == es &&
          null != em &&
          D?.status === "ready" &&
          (D.apps?.unavailable.length ?? 0) > 0 &&
          (null == R || eM),
        eS = ($?.oversized?.length ?? 0) > 0,
        eI = null == es && null != em && eS,
        eN = eM || eI || ez || (null == es && null != em && ey)
      N[9] !== R
        ? ((r =
            null != R && "request" !== R.kind && (null == R.status || 400 === R.status) && R.issues.every(eE)
              ? R.issues
              : []),
          (N[9] = R),
          (N[10] = r))
        : (r = N[10])
      let eF = r,
        eD = null == es && (D?.status === "error" || (D?.status === "ready" && null == D.apps))
      if (null == es && null != R && (0 === eF.length || eM)) {
        let e
        ;(N[11] !== eM || N[12] !== eC || N[13] !== R || N[14] !== L
          ? ((e = ei(R, L, eC, eM)), (N[11] = eM), (N[12] = eC), (N[13] = R), (N[14] = L), (N[15] = e))
          : (e = N[15]),
          (o = e))
      } else if (D?.status === "error") {
        let e
        ;(N[16] !== D.httpStatus
          ? ((e = ei({ kind: "preview", status: D.httpStatus })), (N[16] = D.httpStatus), (N[17] = e))
          : (e = N[17]),
          (o = e))
      }
      let eq = null != o,
        eO = null == D || ("ready" === D.status && null != D.apps),
        eU = null == D || ("ready" === D.status && D.apps?.unavailable.length === 0)
      if (null != o) d = o.title
      else if (null != es) {
        let e
        ;(N[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.ready",
              defaultMessage: "Your plugin is ready",
              description: "Title after a GPT has successfully been migrated to a private plugin",
            })),
            (N[18] = e))
          : (e = N[18]),
          (d = e))
      } else if (eG) {
        let e
        ;(N[19] !== eG
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.title",
              defaultMessage: "Migrate {gptName}",
              description: "Confirmation dialog title naming the GPT to migrate into a private plugin",
              values: { gptName: eG },
            })),
            (N[19] = eG),
            (N[20] = e))
          : (e = N[20]),
          (d = e))
      } else {
        let e
        ;(N[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.untitledTitle",
              defaultMessage: "Migrate Untitled GPT",
              description: "Confirmation dialog title when the GPT being migrated into a private plugin has no name",
            })),
            (N[21] = e))
          : (e = N[21]),
          (d = e))
      }
      if (null != es || X || "allowed" === eb)
        if (null != o) c = o.description
        else if (null != es) {
          let e
          ;(N[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.successReviewDescription",
                defaultMessage: "Open your plugin to review it",
                description:
                  "Next step in the GPT migration success dialog. The plugin has been created and automatic installation has been attempted. The Open plugin button navigates to its detail page, where the user can review the result, including any file-copy warnings. One sentence with no placeholders.",
              })),
              (N[24] = e))
            : (e = N[24]),
            (c = e))
        } else if (q || X || null != R)
          if (ex)
            if (!1 === V) {
              let e
              ;(N[27] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.migration.adminDescription.editingLocked",
                    defaultMessage:
                      "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. The GPT’s owner will own the plugin, and you’ll also have edit access. You can manage sharing afterward, within your workspace’s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                    description:
                      "Standalone confirmation description before an eligible workspace administrator or owner migrates a GPT owned by someone else. Migration copies saved instructions and knowledge files into a private plugin. The GPT’s current owner retains plugin ownership, the caller also receives editor access, and sharing is managed afterward within workspace permissions. Migration prevents further edits to the original GPT; future updates can be made to the plugin. Six complete sentences with no placeholders.",
                  })),
                  (N[27] = e))
                : (e = N[27]),
                (c = e))
            } else {
              let e
              ;(N[28] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.migration.description.editingLocked",
                    defaultMessage:
                      "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. You can manage sharing afterward, within your workspace’s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                    description:
                      "Standalone confirmation description before GPT migration, shown to its current owner or while the caller’s ownership is still being confirmed in a workspace. Migration copies saved instructions and knowledge files into a private plugin, with sharing afterward subject to workspace permissions. Migration prevents further edits to the original GPT; future updates can be made to the plugin. Five complete sentences with no placeholders.",
                  })),
                  (N[28] = e))
                : (e = N[28]),
                (c = e))
            }
          else {
            let e
            ;(N[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.migration.nonWorkspaceDescription.editingLocked",
                  defaultMessage:
                    "Turn this GPT into a plugin using its instructions and knowledge files. It starts private. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
                  description:
                    "Standalone confirmation description before GPT migration in a personal account or while the current account is unconfirmed. Migration copies saved instructions and knowledge files into a private plugin, prevents further edits to the original GPT, and allows future updates to the plugin. Do not promise that sharing will be available afterward. Four complete sentences with no placeholders.",
                })),
                (N[26] = e))
              : (e = N[26]),
              (c = e))
          }
        else {
          let e
          ;(N[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.migration.unavailable",
                defaultMessage:
                  "Migration isn't available for this GPT. Check that the GPT is saved and that you have permission to use plugins",
                description:
                  "Explains that GPT migration is unavailable while source eligibility or plugin-use permissions are missing",
              })),
              (N[25] = e))
            : (e = N[25]),
            (c = e))
        }
      else {
        let e
        ;(N[22] !== eb ? ((e = (0, a.jsx)(eh.M, { permission: eb })), (N[22] = eb), (N[23] = e)) : (e = N[23]), (c = e))
      }
      if (
        N[29] !== D ||
        N[30] !== eM ||
        N[31] !== eC ||
        N[32] !== R ||
        N[33] !== eS ||
        N[34] !== eq ||
        N[35] !== ef ||
        N[36] !== eF ||
        N[37] !== es
      )
        ((u =
          null == es &&
          D?.status === "ready" &&
          !eM &&
          ((eS && !eq) ||
            eF.length > 0 ||
            (((R?.kind === "validation" && 400 === R.status) || (!eq && (D.apps?.unavailable.length ?? 0) > 0)) &&
              null != ef &&
              !eC))),
          (N[29] = D),
          (N[30] = eM),
          (N[31] = eC),
          (N[32] = R),
          (N[33] = eS),
          (N[34] = eq),
          (N[35] = ef),
          (N[36] = eF),
          (N[37] = es),
          (N[38] = u))
      else u = N[38]
      let eB = u
      if (eD) {
        let e,
          i,
          t = X || null == eu
        ;(N[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.checkAppsAgain",
              defaultMessage: "Check again",
              description: "Retry loading the published GPT and its app availability before migration",
            })),
            (N[39] = e))
          : (e = N[39]),
          N[40] !== eu || N[41] !== t
            ? ((i = (0, a.jsx)(T.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "button",
                disabled: t,
                onClick: eu,
                children: e,
              })),
              (N[40] = eu),
              (N[41] = t),
              (N[42] = i))
            : (i = N[42]),
          (p = i))
      } else if (eB) {
        let e,
          i,
          t = X || eC || null == ef
        ;(N[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.editGpt",
              defaultMessage: "Edit GPT",
              description:
                "Primary recovery button in the GPT migration modal for incompatible GPT settings, oversized knowledge files, or unavailable required apps. Opens the web GPT editor to fix the configuration and publish an update. Disabled when editing is unavailable.",
            })),
            (N[43] = e))
          : (e = N[43]),
          N[44] !== ef || N[45] !== t
            ? ((i = (0, a.jsx)(T.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "button",
                disabled: t,
                onClick: ef,
                children: e,
              })),
              (N[44] = ef),
              (N[45] = t),
              (N[46] = i))
            : (i = N[46]),
          (p = i))
      } else if (eq || eM) {
        let e,
          i,
          t = X || !q || !eO
        ;(N[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.recovery.retry",
              defaultMessage: "Try again",
              description:
                "Primary button in the GPT migration recovery dialog. Retries the failed operation: migration and any outstanding admin editor grant. Does not create a duplicate plugin.",
            })),
            (N[47] = e))
          : (e = N[47]),
          N[48] !== t
            ? ((i = (0, a.jsx)(T.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                type: "submit",
                disabled: t,
                children: e,
              })),
              (N[48] = t),
              (N[49] = i))
            : (i = N[49]),
          (p = i))
      } else if (null != es) p = ea
      else {
        let e,
          i,
          t = !q || !eU || eS || eF.length > 0
        ;(N[50] !== X
          ? ((e = X
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
            (N[50] = X),
            (N[51] = e))
          : (e = N[51]),
          N[52] !== X || N[53] !== t || N[54] !== e
            ? ((i = (0, a.jsx)(T.$, {
                className: "w-full",
                color: "primary",
                size: "promotionalAction",
                disabled: t,
                loading: X,
                type: "submit",
                children: e,
              })),
              (N[52] = X),
              (N[53] = t),
              (N[54] = e),
              (N[55] = i))
            : (i = N[55]),
          (p = i))
      }
      let eW = !X
      ;(N[56] !== X || N[57] !== ep
        ? ((g = (e) => {
            e || X || ep()
          }),
          (N[56] = X),
          (N[57] = ep),
          (N[58] = g))
        : (g = N[58]),
        N[59] !== eU ||
        N[60] !== eO ||
        N[61] !== q ||
        N[62] !== eM ||
        N[63] !== eS ||
        N[64] !== X ||
        N[65] !== eq ||
        N[66] !== eg ||
        N[67] !== eF ||
        N[68] !== es ||
        N[69] !== eB
          ? ((h = (e) => {
              ;(e.preventDefault(),
                !X && q && (eU || (eq && eO)) && !eB && (!eS || eq) && (0 === eF.length || eM) && null == es && eg())
            }),
            (N[59] = eU),
            (N[60] = eO),
            (N[61] = q),
            (N[62] = eM),
            (N[63] = eS),
            (N[64] = X),
            (N[65] = eq),
            (N[66] = eg),
            (N[67] = eF),
            (N[68] = es),
            (N[69] = eB),
            (N[70] = h))
          : (h = N[70]),
        N[71] !== d
          ? ((f = (0, a.jsx)(P.L3, {
              className: "text-center text-heading-lg leading-7 font-semibold wrap-anywhere select-none",
              children: d,
            })),
            (N[71] = d),
            (N[72] = f))
          : (f = N[72]))
      let eY = null == c ? "sr-only" : "text-center text-sm leading-5 text-secondary select-none",
        eR = eq ? "alert" : void 0
      return (
        N[73] !== c ? ((b = (0, a.jsx)("div", { children: c })), (N[73] = c), (N[74] = b)) : (b = N[74]),
        N[75] !== eY || N[76] !== eR || N[77] !== b
          ? ((v = (0, a.jsx)(P.rr, { asChild: !0, className: eY, "aria-live": "polite", role: eR, children: b })),
            (N[75] = eY),
            (N[76] = eR),
            (N[77] = b),
            (N[78] = v))
          : (v = N[78]),
        N[79] !== f || N[80] !== v
          ? ((w = (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [f, v] })),
            (N[79] = f),
            (N[80] = v),
            (N[81] = w))
          : (w = N[81]),
        N[82] !== D ||
        N[83] !== q ||
        N[84] !== eI ||
        N[85] !== ez ||
        N[86] !== ev ||
        N[87] !== ew ||
        N[88] !== eC ||
        N[89] !== R ||
        N[90] !== $ ||
        N[91] !== L ||
        N[92] !== Q ||
        N[93] !== ek ||
        N[94] !== eq ||
        N[95] !== ex ||
        N[96] !== ef ||
        N[97] !== es ||
        N[98] !== eT ||
        N[99] !== eP ||
        N[100] !== ec ||
        N[101] !== F
          ? ((y =
              null != es || eq
                ? null
                : (0, a.jsx)(e_, {
                    sourceAudience: F ?? (ec ? "public" : void 0),
                    appCheck: D,
                    canMigrate: q,
                    canPublishPlugin: ev,
                    canSharePlugin: ew,
                    failure: R,
                    fileCheck: $,
                    files: L,
                    hasCustomActions: Q,
                    isCheckingSharing: ek,
                    isWorkspaceAccount: ex,
                    sharingCheckFailed: eT,
                    sharingChecked: eP,
                    canEdit: null != ef && !eC,
                    canOmitUnavailableApps: ez,
                    canOmitOversizedFiles: eI,
                    editingDisabled: eC,
                  })),
            (N[82] = D),
            (N[83] = q),
            (N[84] = eI),
            (N[85] = ez),
            (N[86] = ev),
            (N[87] = ew),
            (N[88] = eC),
            (N[89] = R),
            (N[90] = $),
            (N[91] = L),
            (N[92] = Q),
            (N[93] = ek),
            (N[94] = eq),
            (N[95] = ex),
            (N[96] = ef),
            (N[97] = es),
            (N[98] = eT),
            (N[99] = eP),
            (N[100] = ec),
            (N[101] = F),
            (N[102] = y))
          : (y = N[102]),
        N[103] !== eI ||
        N[104] !== eC ||
        N[105] !== $ ||
        N[106] !== L ||
        N[107] !== eS ||
        N[108] !== eq ||
        N[109] !== ef ||
        N[110] !== es
          ? ((_ =
              null == es &&
              eq &&
              null != $ &&
              (eS || $.unavailable.length > 0 || $.unchecked.length > 0 || null != $.profilePicture)
                ? (0, a.jsx)("div", {
                    className: "w-full border-s border-default ps-3 text-sm text-default select-none",
                    children: (0, a.jsx)(en, {
                      fileCheck: $,
                      files: L,
                      canOmitOversizedFiles: eI,
                      canEdit: null != ef && !eC,
                    }),
                  })
                : null),
            (N[103] = eI),
            (N[104] = eC),
            (N[105] = $),
            (N[106] = L),
            (N[107] = eS),
            (N[108] = eq),
            (N[109] = ef),
            (N[110] = es),
            (N[111] = _))
          : (_ = N[111]),
        N[112] !== X
          ? ((k = X
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
            (N[112] = X),
            (N[113] = k))
          : (k = N[113]),
        N[114] !== B || N[115] !== L || N[116] !== es
          ? ((x =
              null != B && B.length > 0
                ? (0, a.jsx)(Y.Z, { failedFiles: B, files: L, migrationSucceeded: null != es })
                : null),
            (N[114] = B),
            (N[115] = L),
            (N[116] = es),
            (N[117] = x))
          : (x = N[117]),
        N[118] !== es || N[119] !== ej || N[120] !== W
          ? ((C =
              null != es && null != W && W.length > 0 ? (0, a.jsx)(eA.G, { count: W.length, filenames: ej }) : null),
            (N[118] = es),
            (N[119] = ej),
            (N[120] = W),
            (N[121] = C))
          : (C = N[121]),
        N[122] !== eU ||
        N[123] !== q ||
        N[124] !== eM ||
        N[125] !== eI ||
        N[126] !== eN ||
        N[127] !== ez ||
        N[128] !== ey ||
        N[129] !== X ||
        N[130] !== em
          ? ((G =
              eN &&
              (0, a.jsx)(s.m, {
                content: (0, a.jsxs)(a.Fragment, {
                  children: [
                    ez &&
                      (eM || eI || ey) &&
                      (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.omitAppsAndFilesTooltip",
                        defaultMessage:
                          "Create the plugin without the unavailable apps and failed knowledge files. Invalid app settings and conversation starters may also be left out.",
                        description:
                          "Tooltip for Migrate anyway when unavailable apps and failed knowledge files will be omitted, including previously approved file omissions for this saved GPT configuration. The backend can also omit invalid app settings and conversation starters.",
                      }),
                    ez &&
                      !eM &&
                      !eI &&
                      !ey &&
                      (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.omitUnavailableAppsTooltip",
                        defaultMessage:
                          "Create the plugin without the unavailable apps. Invalid app settings and conversation starters may also be left out.",
                        description:
                          "Tooltip for the explicit Migrate anyway action when required apps are unavailable to the user. Only unavailable apps are omitted; available and admin-disabled apps remain. The backend can also omit invalid app settings and conversation starters.",
                      }),
                    !ez &&
                      (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.omitFailedFilesTooltip",
                        defaultMessage:
                          "Create the plugin without the failed knowledge files. Invalid app settings and conversation starters may also be left out.",
                        description:
                          "Tooltip explaining the explicit Migrate anyway recovery action after required GPT knowledge files failed. The failed knowledge files are omitted, including files the user agreed to omit in earlier attempts on the same saved GPT configuration. The backend may also omit malformed app selections and invalid conversation starters.",
                      }),
                  ],
                }),
                children: (0, a.jsx)(T.$, {
                  color: "ghostSecondary",
                  size: "dialogAction",
                  disabled: X || !q || (!eU && !ez),
                  type: "button",
                  onClick: em,
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
            (N[122] = eU),
            (N[123] = q),
            (N[124] = eM),
            (N[125] = eI),
            (N[126] = eN),
            (N[127] = ez),
            (N[128] = ey),
            (N[129] = X),
            (N[130] = em),
            (N[131] = G))
          : (G = N[131]),
        N[132] !== eN || N[133] !== X || N[134] !== eq || N[135] !== ep || N[136] !== es || N[137] !== eB
          ? ((j =
              !eB &&
              !eq &&
              !eN &&
              (0, a.jsx)(T.$, {
                color: "ghostSecondary",
                size: "dialogAction",
                disabled: X,
                type: "button",
                onClick: ep,
                children: (0, a.jsxs)("span", {
                  className: "underline decoration-from-font underline-offset-2",
                  children: [
                    null != es &&
                      (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.done",
                        defaultMessage: "Done",
                        description: "Closes the successful GPT migration dialog without opening the plugin",
                      }),
                    null == es &&
                      (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.migration.later",
                        defaultMessage: "Migrate later",
                        description: "Dismisses GPT migration without creating a plugin",
                      }),
                  ],
                }),
              })),
            (N[132] = eN),
            (N[133] = X),
            (N[134] = eq),
            (N[135] = ep),
            (N[136] = es),
            (N[137] = eB),
            (N[138] = j))
          : (j = N[138]),
        N[139] !== p || N[140] !== G || N[141] !== j
          ? ((M = (0, a.jsxs)(A.Es, {
              className: "flex-col text-center",
              expandSingleButton: !1,
              children: [p, G, j],
            })),
            (N[139] = p),
            (N[140] = G),
            (N[141] = j),
            (N[142] = M))
          : (M = N[142]),
        N[143] !== w || N[144] !== y || N[145] !== _ || N[146] !== k || N[147] !== x || N[148] !== C || N[149] !== M
          ? ((z = (0, a.jsxs)("div", {
              className: "flex flex-col gap-8 p-6 pt-14 text-start sm:p-10",
              children: [w, y, _, k, x, C, M],
            })),
            (N[143] = w),
            (N[144] = y),
            (N[145] = _),
            (N[146] = k),
            (N[147] = x),
            (N[148] = C),
            (N[149] = M),
            (N[150] = z))
          : (z = N[150]),
        N[151] !== h || N[152] !== z
          ? ((S = (0, a.jsx)(A.R4, { as: "form", size: "viewport", variant: "chatgpt", onSubmit: h, children: z })),
            (N[151] = h),
            (N[152] = z),
            (N[153] = S))
          : (S = N[153]),
        N[154] !== X || N[155] !== et || N[156] !== el || N[157] !== eW || N[158] !== g || N[159] !== S
          ? ((I = (0, a.jsx)(P.lG, {
              open: !0,
              modal: et,
              portalContainer: el,
              showDialogClose: eW,
              shouldIgnoreClickOutside: X,
              size: "beacon",
              closeButtonSize: "large",
              variant: "promotional",
              onOpenChange: g,
              children: S,
            })),
            (N[154] = X),
            (N[155] = et),
            (N[156] = el),
            (N[157] = eW),
            (N[158] = g),
            (N[159] = S),
            (N[160] = I))
          : (I = N[160]),
        I
      )
    }
    function eE(e) {
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
//# sourceMappingURL=312708.2d09486b21.js.map
