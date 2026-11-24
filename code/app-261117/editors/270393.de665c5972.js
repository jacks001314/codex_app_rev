export const __rspack_esm_ids = [270393]
export const __webpack_modules__ = {
  VfBj(e, t, r) {
    var l = r("ABep"),
      i = r("QosV"),
      a = r("yvno"),
      n = r("T0Rc"),
      o = r("qmMi"),
      s = r("Wf1j"),
      d = r("oyxz"),
      c = r("Qgfj"),
      u = r("Ywss"),
      f = r("SPnB"),
      p = r("jAnS"),
      m = r("Sm6l"),
      y = r("bVeK"),
      h = r("Bbed"),
      _ = r("RNul"),
      x = r("hrTz"),
      b = r("ARVD"),
      v = r("j9wQ"),
      g = r("wxDG")
    function w(e) {
      let t,
        r,
        n,
        o,
        c,
        u,
        f,
        p,
        m,
        y = (0, i.c)(29),
        { details: h } = e,
        _ = (0, s.A)()
      y[0] !== h.fileExtension ? ((t = h.fileExtension?.trim()), (y[0] = h.fileExtension), (y[1] = t)) : (t = y[1])
      let x = t,
        v = x ? `file.${x}` : h.name,
        g = h.mimeType ?? void 0
      y[2] !== h.sourceUrl || y[3] !== v || y[4] !== g
        ? ((r = (0, a.Ze)({ fileName: v, mimeType: g, sourceUrl: h.sourceUrl })),
          (y[2] = h.sourceUrl),
          (y[3] = v),
          (y[4] = g),
          (y[5] = r))
        : (r = y[5])
      let w = r
      y[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.type", defaultMessage: "Type" })), (y[6] = n))
        : (n = y[6])
      let j = w.category
      y[7] !== v ? ((o = (0, a._5)(v)), (y[7] = v), (y[8] = o)) : (o = y[8])
      let P = null != o
      return (
        y[9] !== P || y[10] !== w.category || y[11] !== w.iconKey || y[12] !== w.key || y[13] !== w.label
          ? ((c = (0, l.jsx)(A, {
              label: n,
              children: (0, l.jsx)(F, {
                category: j,
                hasExtension: P,
                iconKey: w.iconKey,
                label: w.label,
                typeKey: w.key,
              }),
            })),
            (y[9] = P),
            (y[10] = w.category),
            (y[11] = w.iconKey),
            (y[12] = w.key),
            (y[13] = w.label),
            (y[14] = c))
          : (c = y[14]),
        y[15] !== h.updatedAt || y[16] !== h.updatedBy
          ? ((u =
              null == h.updatedAt
                ? null
                : (0, l.jsx)(I, {
                    author: h.updatedBy,
                    label: (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.updated", defaultMessage: "Updated" }),
                    value: h.updatedAt,
                  })),
            (y[15] = h.updatedAt),
            (y[16] = h.updatedBy),
            (y[17] = u))
          : (u = y[17]),
        y[18] !== h.createdAt || y[19] !== h.createdBy
          ? ((f =
              null == h.createdAt
                ? null
                : (0, l.jsx)(I, {
                    author: h.createdBy,
                    label: (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.created", defaultMessage: "Created" }),
                    value: h.createdAt,
                  })),
            (y[18] = h.createdAt),
            (y[19] = h.createdBy),
            (y[20] = f))
          : (f = y[20]),
        y[21] !== h.sizeBytes || y[22] !== _
          ? ((p =
              null == h.sizeBytes
                ? null
                : (0, l.jsx)(A, {
                    label: (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.size", defaultMessage: "Size" }),
                    children: (0, b.z)(h.sizeBytes, _),
                  })),
            (y[21] = h.sizeBytes),
            (y[22] = _),
            (y[23] = p))
          : (p = y[23]),
        y[24] !== f || y[25] !== p || y[26] !== c || y[27] !== u
          ? ((m = (0, l.jsxs)("dl", { className: "flex flex-col gap-3 text-sm", children: [c, u, f, p] })),
            (y[24] = f),
            (y[25] = p),
            (y[26] = c),
            (y[27] = u),
            (y[28] = m))
          : (m = y[28]),
        m
      )
    }
    function A(e) {
      let t,
        r,
        a,
        n = (0, i.c)(7),
        { children: o, label: s } = e
      return (
        n[0] !== s
          ? ((t = (0, l.jsx)("dt", { className: "w-28 max-w-1/2 shrink-0 wrap-anywhere text-secondary", children: s })),
            (n[0] = s),
            (n[1] = t))
          : (t = n[1]),
        n[2] !== o
          ? ((r = (0, l.jsx)("dd", { className: "min-w-0 flex-1 wrap-anywhere text-default", children: o })),
            (n[2] = o),
            (n[3] = r))
          : (r = n[3]),
        n[4] !== t || n[5] !== r
          ? ((a = (0, l.jsxs)("div", { className: "flex items-start gap-3", children: [t, r] })),
            (n[4] = t),
            (n[5] = r),
            (n[6] = a))
          : (a = n[6]),
        a
      )
    }
    function I(e) {
      let t,
        r,
        a,
        n,
        o = (0, i.c)(11),
        { author: s, label: u, value: f } = e
      return (
        o[0] !== f
          ? ((t = (0, l.jsx)(c.XU, {
              value: f,
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })),
            (o[0] = f),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== t || o[3] !== f
          ? ((r = (0, l.jsx)("time", { dateTime: f, children: t })), (o[2] = t), (o[3] = f), (o[4] = r))
          : (r = o[4]),
        o[5] !== s
          ? ((a =
              null == s
                ? null
                : (0, l.jsx)("span", {
                    className: "mt-0.5 block",
                    children: (0, l.jsx)(d.A, {
                      id: "chatgptFilePreview.fileInfo.byAuthor",
                      defaultMessage: "by {author}",
                      values: { author: (0, l.jsx)(j, { author: s }, "author") },
                    }),
                  })),
            (o[5] = s),
            (o[6] = a))
          : (a = o[6]),
        o[7] !== u || o[8] !== r || o[9] !== a
          ? ((n = (0, l.jsxs)(A, { label: u, children: [r, a] })), (o[7] = u), (o[8] = r), (o[9] = a), (o[10] = n))
          : (n = o[10]),
        n
      )
    }
    function j(e) {
      let t = (0, i.c)(3),
        { author: r } = e
      switch (r.kind) {
        case "person":
          return r.name
        case "chatgpt": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.chatgpt", defaultMessage: "ChatGPT" })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "collaborator": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(d.A, {
                  id: "chatgptFilePreview.fileInfo.collaborator",
                  defaultMessage: "a collaborator",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "you": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.you", defaultMessage: "you" })), (t[2] = e))
              : (e = t[2]),
            e
          )
        }
      }
    }
    function F(e) {
      let t = (0, i.c)(8),
        { category: r, hasExtension: a, iconKey: n, label: o, typeKey: s } = e
      if ("ppt" === n) {
        let e
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(d.A, {
                id: "chatgptFilePreview.fileInfo.type.powerPoint",
                defaultMessage: "PowerPoint",
              })),
              (t[0] = e))
            : (e = t[0]),
          e
        )
      }
      if ("document" === n) {
        let e
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(d.A, {
                id: "chatgptFilePreview.fileInfo.type.wordDocument",
                defaultMessage: "Word document",
              })),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      if ("xls" === n) {
        let e
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(d.A, {
                id: "chatgptFilePreview.fileInfo.type.excelSpreadsheet",
                defaultMessage: "Excel spreadsheet",
              })),
              (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      if ("google-docs" === n) {
        let e
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(d.A, {
                id: "chatgptFilePreview.fileInfo.type.googleDocs",
                defaultMessage: "Google Docs",
              })),
              (t[3] = e))
            : (e = t[3]),
          e
        )
      }
      if ("google-sheets" === n) {
        let e
        return (
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(d.A, {
                id: "chatgptFilePreview.fileInfo.type.googleSheets",
                defaultMessage: "Google Sheets",
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        )
      }
      if ("google-slides" === n) {
        let e
        return (
          t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(d.A, {
                id: "chatgptFilePreview.fileInfo.type.googleSlides",
                defaultMessage: "Google Slides",
              })),
              (t[5] = e))
            : (e = t[5]),
          e
        )
      }
      if (!a) {
        let e = null
        if (
          ("code" === r || "html" === r
            ? (e = "code")
            : "file" === s
              ? (e = "file")
              : "doc" === s && "text" === n
                ? (e = "text")
                : "sheet" === s
                  ? (e = "spreadsheet")
                  : "slides" === s
                    ? (e = "presentation")
                    : "audio" === s
                      ? (e = "audio")
                      : "video" === s
                        ? (e = "video")
                        : "image" === s && (e = "image"),
          null != e)
        ) {
          let r
          return (
            t[6] !== e
              ? ((r = (0, l.jsx)(d.A, {
                  id: "chatgptFilePreview.fileInfo.type.generic",
                  defaultMessage:
                    "{category, select, file {File} text {Text} code {Code} audio {Audio} video {Video} image {Image} spreadsheet {Spreadsheet} presentation {Presentation} other {File}}",
                  values: { category: e },
                })),
                (t[6] = e),
                (t[7] = r))
              : (r = t[7]),
            r
          )
        }
      }
      return o
    }
    function P(e) {
      let t,
        r = (0, i.c)(3),
        { access: a } = e
      if ("owner" === a) {
        let e
        return (
          r[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(y.ZDC, {})), (r[0] = e)) : (e = r[0]),
          e
        )
      }
      if ("editor" === a) {
        let e
        return (
          r[1] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(y.Npl, {})), (r[1] = e)) : (e = r[1]),
          e
        )
      }
      return (
        r[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, l.jsx)(y.X9D, {})), (r[2] = t)) : (t = r[2]),
        t
      )
    }
    function k(e) {
      let t,
        r = (0, i.c)(3),
        { access: a } = e
      if ("owner" === a) {
        let e
        return (
          r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.owner", defaultMessage: "Owner" })), (r[0] = e))
            : (e = r[0]),
          e
        )
      }
      if ("editor" === a) {
        let e
        return (
          r[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.editor", defaultMessage: "Editor" })),
              (r[1] = e))
            : (e = r[1]),
          e
        )
      }
      return (
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(d.A, { id: "chatgptFilePreview.fileInfo.viewer", defaultMessage: "Viewer" })), (r[2] = t))
          : (t = r[2]),
        t
      )
    }
    ;((0, h._)(async () => () => null),
      r.d(
        t,
        {},
        {
          FileInfoPanel: function (e) {
            let t,
              r,
              a,
              c,
              h,
              b,
              A,
              I,
              j,
              F,
              S,
              M,
              N,
              q,
              D,
              T,
              G = (0, i.c)(52),
              { accountId: U, onClose: C, source: z, userId: B } = e,
              E = (0, s.A)(),
              K = (0, o.Ul)(f.chatGptAuthenticatedAccountId$),
              R = (0, o.Ul)(f.chatGptAuthenticatedUserId$),
              O = U ?? K,
              H = (void 0 === B ? R : B) ?? null
            G[0] !== O || G[1] !== z || G[2] !== H
              ? ((t = (0, g.t)({ accountId: O, source: z, userId: H })), (G[0] = O), (G[1] = z), (G[2] = H), (G[3] = t))
              : (t = G[3])
            let { data: W, isError: $, isFetching: L, isPending: V, refetch: J } = (0, n.I)(t)
            G[4] !== E
              ? ((r = E.formatMessage({ id: "chatgptFilePreview.fileInfo.title", defaultMessage: "File info" })),
                (G[4] = E),
                (G[5] = r))
              : (r = G[5])
            let Y = r,
              Q = W?.libraryFileId ?? ("library" === z.identity.type ? z.identity.libraryFileId : null)
            ;(G[6] !== E
              ? ((a = E.formatMessage({ id: "chatgptFilePreview.fileInfo.close", defaultMessage: "Close file info" })),
                (G[6] = E),
                (G[7] = a))
              : (a = G[7]),
              G[8] !== C || G[9] !== a || G[10] !== Y
                ? ((c = (0, l.jsx)(v.xx, { closeLabel: a, title: Y, onClose: C })),
                  (G[8] = C),
                  (G[9] = a),
                  (G[10] = Y),
                  (G[11] = c))
                : (c = G[11]))
            let Z = W?.name ?? z.name
            return (
              G[12] !== Z
                ? ((h = (0, l.jsx)("p", {
                    className: "text-base wrap-anywhere text-default select-text",
                    children: Z,
                  })),
                  (G[12] = Z),
                  (G[13] = h))
                : (h = G[13]),
              G[14] !== W || G[15] !== Q || G[16] !== C || G[17] !== z
                ? ((b =
                    null == Q
                      ? null
                      : (0, l.jsx)("p", {
                          className: "mt-1 truncate text-sm text-secondary",
                          children: (0, l.jsx)(x.x, {
                            externalAccount: W?.externalAccount ?? z.externalAccount,
                            libraryFileId: Q,
                            parentDirectoryId: null == W ? z.parentDirectoryId : W.parentDirectoryId,
                            variant: "text",
                            onNavigate: C,
                          }),
                        })),
                  (G[14] = W),
                  (G[15] = Q),
                  (G[16] = C),
                  (G[17] = z),
                  (G[18] = b))
                : (b = G[18]),
              G[19] !== h || G[20] !== b
                ? ((A = (0, l.jsxs)("div", { className: "px-1 pb-5", children: [h, b] })),
                  (G[19] = h),
                  (G[20] = b),
                  (G[21] = A))
                : (A = G[21]),
              G[22] !== V
                ? ((I = V
                    ? (0, l.jsxs)("div", {
                        className: "flex h-20 items-center justify-center",
                        role: "status",
                        children: [
                          (0, l.jsx)(_.y, {}),
                          (0, l.jsx)("span", {
                            className: "sr-only",
                            children: (0, l.jsx)(d.A, {
                              id: "chatgptFilePreview.fileInfo.loading",
                              defaultMessage: "Loading file info\u2026",
                            }),
                          }),
                        ],
                      })
                    : null),
                  (G[22] = V),
                  (G[23] = I))
                : (I = G[23]),
              G[24] !== $ || G[25] !== L || G[26] !== J
                ? ((j = $
                    ? (0, l.jsxs)("div", {
                        className: "flex items-center justify-between gap-3 py-2 text-sm text-tertiary",
                        children: [
                          (0, l.jsx)(d.A, {
                            id: "chatgptFilePreview.fileInfo.loadFailed",
                            defaultMessage: "Couldn\u2019t load file info",
                          }),
                          (0, l.jsx)(m.$, {
                            color: "secondary",
                            loading: L,
                            size: "compact",
                            onClick: () => void J(),
                            children: (0, l.jsx)(d.A, {
                              id: "chatgptFilePreview.fileInfo.retry",
                              defaultMessage: "Retry",
                            }),
                          }),
                        ],
                      })
                    : null),
                  (G[24] = $),
                  (G[25] = L),
                  (G[26] = J),
                  (G[27] = j))
                : (j = G[27]),
              G[28] !== W
                ? ((F = null == W ? null : (0, l.jsx)(w, { details: W })), (G[28] = W), (G[29] = F))
                : (F = G[29]),
              G[30] !== I || G[31] !== j || G[32] !== F
                ? ((S = (0, l.jsxs)("div", { className: "border-t border-subtle px-1 py-5", children: [I, j, F] })),
                  (G[30] = I),
                  (G[31] = j),
                  (G[32] = F),
                  (G[33] = S))
                : (S = G[33]),
              G[34] !== W || G[35] !== C || G[36] !== z
                ? ((M =
                    W?.conversation == null
                      ? null
                      : (0, l.jsxs)("section", {
                          className: "border-t border-subtle px-1 py-5",
                          children: [
                            (0, l.jsx)("h3", {
                              className: "mb-3 text-sm text-secondary",
                              children: (0, l.jsx)(d.A, {
                                id: "chatgptFilePreview.fileInfo.relatedChats",
                                defaultMessage: "Related chats",
                              }),
                            }),
                            (0, l.jsxs)(u.N_, {
                              className:
                                "-mx-2 flex min-w-0 cursor-interaction items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-default hover:bg-secondary-ghost-hover focus-visible:outline-2 focus-visible:outline-ring",
                              to: (0, p.mv)(W.conversation.id, { gizmoId: z.gizmoId }),
                              onClick: C,
                              children: [
                                (0, l.jsx)(y.OHc, {}),
                                (0, l.jsx)("span", {
                                  className: "truncate",
                                  children:
                                    W.conversation.title?.trim() ||
                                    (0, l.jsx)(d.A, {
                                      id: "chatgptFilePreview.fileInfo.untitledChat",
                                      defaultMessage: "Untitled chat",
                                    }),
                                }),
                              ],
                            }),
                          ],
                        })),
                  (G[34] = W),
                  (G[35] = C),
                  (G[36] = z),
                  (G[37] = M))
                : (M = G[37]),
              G[38] !== W
                ? ((N =
                    W?.access == null
                      ? null
                      : (0, l.jsxs)("section", {
                          className: "border-t border-subtle px-1 pt-5",
                          children: [
                            (0, l.jsx)("h3", {
                              className: "mb-3 text-sm text-secondary",
                              children: (0, l.jsx)(d.A, {
                                id: "chatgptFilePreview.fileInfo.yourAccess",
                                defaultMessage: "Your access",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "flex items-center gap-2 text-sm text-default",
                              children: [(0, l.jsx)(P, { access: W.access }), (0, l.jsx)(k, { access: W.access })],
                            }),
                          ],
                        })),
                  (G[38] = W),
                  (G[39] = N))
                : (N = G[39]),
              G[40] !== W ? ((q = !1), (G[40] = W), (G[41] = q)) : (q = G[41]),
              G[42] !== L || G[43] !== S || G[44] !== M || G[45] !== N || G[46] !== q || G[47] !== A
                ? ((D = (0, l.jsxs)("div", {
                    "aria-busy": L,
                    className: "min-h-0 flex-1 overflow-y-auto px-3 py-4",
                    children: [A, S, M, N, q],
                  })),
                  (G[42] = L),
                  (G[43] = S),
                  (G[44] = M),
                  (G[45] = N),
                  (G[46] = q),
                  (G[47] = A),
                  (G[48] = D))
                : (D = G[48]),
              G[49] !== D || G[50] !== c
                ? ((T = (0, l.jsxs)(l.Fragment, { children: [c, D] })), (G[49] = D), (G[50] = c), (G[51] = T))
                : (T = G[51]),
              T
            )
          },
        },
      ))
  },
  wxDG(e, t, r) {
    r.d(t, { t: () => u })
    var l = r("Kwur"),
      i = r("heoH"),
      a = r("LhrG"),
      n = r("UxLW")
    function o(e, t, r) {
      return {
        access: null,
        conversation: r,
        createdAt: e.createdAt ?? null,
        createdBy: null,
        externalAccount: e.externalAccount ?? null,
        fileExtension: null,
        libraryFileId: t,
        mimeType: e.mimeType ?? null,
        name: e.name,
        parentDirectoryId: e.parentDirectoryId ?? null,
        sizeBytes: e.sizeBytes ?? null,
        sourceUrl: e.sourceUrl,
        updatedAt: e.updatedAt ?? null,
        updatedBy: null,
      }
    }
    async function s(e, t, r) {
      if (null == e) return null
      try {
        let l = await (0, i.C)(e, {
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [403, 404],
          signal: r,
        })
        return (r.throwIfAborted(), { id: e, title: l.title ?? null })
      } catch {
        return (r.throwIfAborted(), null)
      }
    }
    function d(e) {
      let t = e?.display_name?.trim() || e?.email?.trim()
      return null == t ? null : { kind: "person", name: t }
    }
    function c(e) {
      return "fulfilled" === e.status ? e.value : null
    }
    function u({ accountId: e, source: t, userId: r }) {
      return {
        enabled: null != e,
        queryFn: ({ signal: i }) => {
          if (null == e) throw Error("Cannot fetch file info without an account")
          return (async function (e, t, r, i) {
            if ("library" === e.identity.type) {
              let r = e.identity.libraryFileId
              return null != (0, n.AG)(r)
                ? o(e, r, await s(e.conversationId, t, i))
                : (async function (e, t, r, i) {
                    var n, o, u
                    let f = await (0, a.F)(t, r, i)
                    i.throwIfAborted()
                    let p = f.access_kind,
                      m = e.conversationId ?? f.origination_thread_id,
                      y = { "ChatGPT-Account-ID": r },
                      [h, _, x, b] = await Promise.allSettled([
                        "mounted" === p
                          ? Promise.resolve(null)
                          : l.Request.safeGet("/files/library/files/{library_file_id}/sharing-state", {
                              parameters: { path: { library_file_id: t }, query: { include_profile_photos: !1 } },
                              additionalHeaders: y,
                              expectedErrorStatuses: [403, 404],
                              signal: i,
                            }),
                        "mounted" === p
                          ? Promise.resolve(null)
                          : l.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                              parameters: { path: { library_file_id: t }, query: { limit: 1 } },
                              additionalHeaders: y,
                              expectedErrorStatuses: [403, 404],
                              signal: i,
                            }),
                        "shared" === p
                          ? l.Request.safeGet("/files/library/shared/files/{library_file_id}/access", {
                              parameters: { path: { library_file_id: t } },
                              additionalHeaders: y,
                              expectedErrorStatuses: [403, 404],
                              signal: i,
                            })
                          : Promise.resolve(null),
                        s(m, r, i),
                      ])
                    i.throwIfAborted()
                    let v = c(h),
                      g = c(_)?.items[0] ?? null,
                      w = c(x),
                      A = d(v?.owner ?? null)
                    return {
                      access:
                        ((n = p),
                        (o = v),
                        (u = w?.can_edit),
                        null != o &&
                        o.viewer.principal.principal_type === o.owner.principal.principal_type &&
                        o.viewer.principal.principal_id === o.owner.principal.principal_id
                          ? "owner"
                          : o?.viewer.role_id.includes("editor") || !0 === u
                            ? "editor"
                            : "owned" === n
                              ? "owner"
                              : "shared" !== n || (null == o && null == u)
                                ? null
                                : "viewer"),
                      conversation: c(b),
                      createdAt: f.record_creation_time ?? f.file_upload_time ?? e.createdAt ?? null,
                      createdBy: A,
                      externalAccount: f.external_account ?? e.externalAccount ?? null,
                      fileExtension: f.file_extension ?? null,
                      libraryFileMetadata: "image" === f.library_file_category ? f : void 0,
                      libraryFileId: t,
                      mimeType: f.mime_type ?? e.mimeType ?? null,
                      name: ("kind" in f ? f.name : f.file_name) || e.name,
                      parentDirectoryId: ("kind" in f ? f.parent_directory_id : f.directory_id) ?? null,
                      sizeBytes: f.file_size_bytes ?? e.sizeBytes ?? null,
                      sourceUrl: f.cloud_doc_url ?? e.sourceUrl,
                      updatedAt: g?.version_created_at ?? f.updated_at ?? f.file_upload_time ?? e.updatedAt ?? null,
                      updatedBy: (function (e, t, r) {
                        let l = e?.version_provenance
                        if (null == l) return null
                        if ("agent" === l.actor) return { kind: "chatgpt" }
                        let i = l.actor_id?.trim()
                        if (null != i && null != t) {
                          if (i === t.owner.principal.principal_id) return d(t.owner)
                          if (i === t.viewer.principal.principal_id) return d(t.viewer) ?? { kind: "you" }
                        }
                        let a = l.actor_display_name?.trim() || l.actor_email?.trim()
                        return null != a
                          ? { kind: "person", name: a }
                          : "create" === l.action && null != r
                            ? r
                            : { kind: "collaborator" }
                      })(g, v, A),
                    }
                  })(e, r, t, i)
            }
            let [u, f] = await Promise.all([
              l.Request.safeGet("/files/{file_id}", {
                parameters: { path: { file_id: e.identity.fileId }, query: { gizmo_id: e.gizmoId } },
                additionalHeaders: { "ChatGPT-Account-ID": t },
                signal: i,
              }).catch((t) => {
                if ((i.throwIfAborted(), null == e.sourceUrl && null == e.externalAccount)) throw t
                return null
              }),
              s(e.conversationId, t, i),
            ])
            if ((i.throwIfAborted(), null == u)) return o(e, null, f)
            let p = null != r && u.owner_id === r,
              m = p ? { kind: "you" } : null
            return {
              access: p ? "owner" : "viewer",
              conversation: f,
              createdAt: u.creation_time,
              createdBy: m,
              externalAccount: e.externalAccount ?? null,
              fileExtension: u.file_extension,
              libraryFileId: null,
              mimeType: u.mime_type ?? e.mimeType ?? null,
              name: u.name || e.name,
              parentDirectoryId: e.parentDirectoryId ?? null,
              sizeBytes: u.size ?? e.sizeBytes ?? null,
              sourceUrl: e.sourceUrl,
              updatedAt: u.ready_time ?? u.creation_time,
              updatedBy: m,
            }
          })(t, e, r, i)
        },
        queryKey: ["chatgpt-file-preview-file-info", e, r, t],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 3e4,
      }
    }
  },
  LhrG(e, t, r) {
    var l = r("tFxw"),
      i = r("D7Ms"),
      a = r("Kwur"),
      n = r("eShZ"),
      o = r("jgEm"),
      s = r("MExO")
    async function d(e, t, r) {
      let i,
        d = (0, s.CN)(e)
      if (null != d) {
        r.throwIfAborted()
        let i = await a.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
          parameters: { path: { provider_key: d.provider } },
          requestBody: { file_id: e },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503, 504],
          signal: r,
        })
        r.throwIfAborted()
        let n = (0, s.CN)(i.file_id)
        if (
          i.file_id !== e &&
          ((0, l.YO)(e)?.encodedAccountKey != null || n?.provider !== d.provider || n.nativeFileId !== d.nativeFileId)
        )
          throw Error("Provider file metadata does not match the requested file")
        return {
          id: i.file_id,
          kind: "file",
          name: i.name,
          parent_directory_id: null,
          access_kind: "mounted",
          mime_type: i.mime_type,
          file_size_bytes: i.file_size_bytes,
        }
      }
      let c = {
        parameters: { path: { library_file_id: e } },
        additionalHeaders: { "ChatGPT-Account-ID": t },
        expectedErrorStatuses: [403, 404],
        signal: r,
      }
      if ((r.throwIfAborted(), /^libfile_fde[123]_/.test(e))) {
        let t = await a.Request.safeGet("/files/library/files/{library_file_id}/node", c)
        return (r.throwIfAborted(), (0, o.U9)(t, e))
      }
      try {
        let e = await a.Request.safeGet("/files/library/files/{library_file_id}", c)
        return (r.throwIfAborted(), e)
      } catch (e) {
        if (!(e instanceof n.FetchError) || (403 !== e.status && 404 !== e.status)) throw e
      }
      r.throwIfAborted()
      try {
        if (
          ((i = await a.Request.safeGet("/files/library/files/{library_file_id}/node", c)),
          r.throwIfAborted(),
          "owned" === i.access_kind && "image" === i.library_file_category && null == i.library_artifact_type)
        ) {
          let e = await a.Request.safeGet("/files/library/files/{library_file_id}/versions", {
            ...c,
            parameters: { ...c.parameters, query: { limit: 1 } },
          })
          return (
            r.throwIfAborted(),
            { ...i, library_artifact_type: e.items[0]?.library_artifact_type ?? i.library_artifact_type }
          )
        }
        return (0, o.U9)(i, e)
      } catch (s) {
        if (!(s instanceof n.FetchError) || (403 !== s.status && 404 !== s.status)) throw s
        let t = null,
          l = new Set()
        do {
          r.throwIfAborted()
          let i = await a.Request.safePost("/files/library", {
            requestBody: { cursor: t, limit: 100, include_hidden_files: !0, include_saved_entities: !0 },
            additionalHeaders: c.additionalHeaders,
            expectedErrorStatuses: [403, 404],
            signal: r,
          })
          r.throwIfAborted()
          let n = i.items.find((t) => t.id === e)
          if (null != n) return n
          if (null == (t = i.cursor ?? null) || l.has(t)) break
          l.add(t)
        } while (null != t)
        if (null != i) return (0, o.U9)(i, e)
        throw s
      }
    }
    r.d(
      t,
      {},
      {
        F: d,
        h: function (e, t, r) {
          return {
            queryKey: ["library-api", e, t, "file", r],
            queryFn: null != r && null != e ? ({ signal: t }) => d(r, e, t) : i.hT,
            gcTime: 0,
            staleTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
          }
        },
      },
    )
  },
  xicY(e, t, r) {
    var l = r("tFxw"),
      i = r("qmMi"),
      a = r("Zpwo"),
      n = r("OWtl"),
      o = r("OMIV"),
      s = r("ncAw")
    let d = (0, i.un)(n.u, ({ get: e }) => {
      let t = new Set()
      return (
        e(o.JW, "283315982") && e(o.JW, "1760150231") && t.add("google_drive"),
        e(o.JW, "2148883851") && t.add("box"),
        e(o.JW, "1793241212") && t.add("dropbox"),
        e(o.JW, "2620175081") && t.add("sharepoint"),
        t
      )
    })
    r.d(
      t,
      {},
      {
        Ai: d,
        Jk: function (e, t, r) {
          let i = (function (e, t) {
            let r = new Map()
            for (let i of t) {
              if (i.connector_id !== (0, s.zk)(e) || "ACTIVE" !== i.auth_status) continue
              let t = (0, l.uL)(i.owner_profile?.id),
                a = r.get(t)
              ;(null == a ||
                Date.parse(i.auth_status_updated_at ?? i.created_at) >
                  Date.parse(a.auth_status_updated_at ?? a.created_at)) &&
                r.set(t, i)
            }
            return (r.size > 1 && r.delete(void 0), [...r.values()])
          })(e, t)
          if (!r || "onedrive" === e) {
            let t = i[0]
            return null == t ? [] : [{ id: e, provider: e, link: t }]
          }
          return i
            .filter((e) => null == e.unavailable_reason)
            .toSorted((e, t) => {
              let r = e.owner_profile?.id ?? "",
                l = t.owner_profile?.id ?? ""
              return r === l ? 0 : r < l ? -1 : 1
            })
            .map((t, r) => {
              let i = (0, l.uL)(t.owner_profile?.id)
              return {
                id: null == i ? e : `${e}:${i}`,
                provider: e,
                accountKey: i,
                accountLabel:
                  null == i
                    ? void 0
                    : ((0, a.Dr)(t, t.connector_name ?? "", void 0) ??
                      (t.owner_profile?.nickname?.trim() || (0, a.nA)(t))),
                accountNumber: null == i ? void 0 : r + 1,
                link: t,
              }
            })
        },
        t6: function (e, t) {
          let r = null == t ? e : e.filter(({ id: e }) => t.has(e)),
            l = {}
          if (null != t) {
            for (let t of e) null != t.accountKey && null == l[t.provider] && (l[t.provider] = [])
            for (let e of r) null != e.accountKey && l[e.provider]?.push(e.accountKey)
          }
          return { providers: [...new Set(r.map(({ provider: e }) => e))], externalAccountKeys: null == t ? void 0 : l }
        },
      },
    )
  },
  hrTz(e, t, r) {
    var l = r("ABep"),
      i = r("QosV"),
      a = r("irkb"),
      n = r("T0Rc"),
      o = r("LPKZ"),
      s = r.n(o),
      d = r("qmMi"),
      c = r("zd8w"),
      u = r("oyxz"),
      f = r("Ywss"),
      p = r("SPnB"),
      m = r("Kwur"),
      y = r("bqtn"),
      h = r("O8Pw"),
      _ = r("OMIV"),
      x = r("rvFo"),
      b = r("UxLW"),
      v = r("xicY"),
      g = r("P6OM"),
      w = r("vvmK"),
      A = r("Hd2W")
    let I = () => void 0
    function j(e) {
      let t,
        r,
        o,
        j,
        N,
        q,
        D,
        T,
        G,
        U,
        C,
        z,
        B,
        E,
        K = (0, i.c)(49),
        {
          externalAccount: R,
          libraryFileId: O,
          knownParentDirectories: H,
          parentDirectoryId: W,
          onNavigate: $,
          variant: L,
        } = e,
        V = (0, h.Tq)(),
        J = (0, d.Ul)(p.chatGptAuthenticatedAccountId$),
        Y = (0, d.Ul)(p.chatGptAuthenticatedUserId$),
        Q = (0, a.jE)(),
        Z = (0, b.AG)(O),
        X = null != Z,
        ee = (0, d._U)(_.JW, "183402703"),
        et = (0, d.Ul)(v.Ai),
        er = ("box" === Z || "dropbox" === Z || "sharepoint" === Z) && et.has(Z) ? Z : void 0,
        el = (0, g.l)(O, W, R),
        ei = X ? el.cacheDirectoryId : W,
        ea = (0, g.c)(J, Y, ei),
        en = null == ei ? null : Q.defaultQueryOptions({ queryKey: ea }).queryHash
      K[0] !== Q ? ((t = Q.getQueryCache()), (K[0] = Q), (K[1] = t)) : (t = K[1])
      let eo = t
      K[2] !== eo || K[3] !== en
        ? ((r = (e) =>
            null == en
              ? s()
              : eo.subscribe((t) => {
                  let { query: r } = t
                  r.queryHash === en && e()
                })),
          (K[2] = eo),
          (K[3] = en),
          (K[4] = r))
        : (r = K[4])
      let es = r
      K[5] !== eo || K[6] !== en
        ? ((o = () => (null == en ? void 0 : eo.get(en)?.state)), (K[5] = eo), (K[6] = en), (K[7] = o))
        : (o = K[7])
      let ed = o,
        ec = (0, c.useSyncExternalStore)(es, ed, I),
        eu = null != J && !X && null == H
      ;(K[8] !== J || K[9] !== O || K[10] !== W
        ? ((j = async (e) => {
            let { signal: t } = e,
              r = W
            if (void 0 === r && null != J) {
              let e = await (0, w.FW)(O, J, t)
              r = "parent_directory_id" in e ? e.parent_directory_id : (e.directory_id ?? null)
            }
            return null == r || null == J
              ? []
              : (
                  await m.Request.safeGet("/files/library/directories/path", {
                    additionalHeaders: { "ChatGPT-Account-ID": J },
                    parameters: { query: { directory_id: r } },
                    signal: t,
                  })
                ).items.filter(M)
          }),
          (N = ["library-file-breadcrumb", J, O, W]),
          (K[8] = J),
          (K[9] = O),
          (K[10] = W),
          (K[11] = j),
          (K[12] = N))
        : ((j = K[11]), (N = K[12])),
        K[13] !== eu || K[14] !== j || K[15] !== N
          ? ((q = { enabled: eu, queryFn: j, queryKey: N, retry: !1, staleTime: x.D.ONE_MINUTE }),
            (K[13] = eu),
            (K[14] = j),
            (K[15] = N),
            (K[16] = q))
          : (q = K[16]))
      let { data: ef } = (0, n.I)(q)
      K[17] !== ec?.data?.items || K[18] !== ec?.data?.items.filter
        ? ((D = ec?.data?.items.filter(S)), (K[17] = ec?.data?.items), (K[18] = ec?.data?.items.filter), (K[19] = D))
        : (D = K[19])
      let ep = D,
        em =
          ec?.data != null &&
          (ec.dataUpdatedAt !== H?.browseRevision?.updatedAt || ec.dataUpdateCount !== H?.browseRevision?.updateCount),
        ey = null == H || em ? (ep ?? H?.directories) : H.directories,
        eh = J ?? "",
        e_ = null != J && null != er && ee && null == ey
      ;(K[20] !== eh || K[21] !== e_ || K[22] !== Y
        ? ((T = (0, A.O)({ accountId: eh, userId: Y, enabled: e_, links: void 0 })),
          (K[20] = eh),
          (K[21] = e_),
          (K[22] = Y),
          (K[23] = T))
        : (T = K[23]),
        K[24] !== er || K[25] !== ey
          ? ((G = (e) => {
              if (null != ey) return
              let t = null == er ? void 0 : e.link_browsing?.[er]
              if (!(null == t || Object.values(t).some(k))) return Object.values(t).filter(P).length
            }),
            (K[24] = er),
            (K[25] = ey),
            (K[26] = G))
          : (G = K[26]),
        K[27] !== T || K[28] !== G ? ((U = { ...T, select: G }), (K[27] = T), (K[28] = G), (K[29] = U)) : (U = K[29]))
      let { data: ex, error: eb } = (0, n.I)(U),
        ev = ee && null == eb ? ex : void 0,
        eg = null == H ? ef : ey
      if (X) {
        let [e, t] = el.directories
        ;((eg = ey ?? el.directories),
          null == ey || null == e || ey.some((t) => t.id === e.id) || (eg = [e, ...ey]),
          null != e &&
            (eg = (eg ?? el.directories).flatMap((r) => {
              var l
              let i
              return r !== t &&
                ((l = r.id), (i = l?.split(":")), i?.length !== 4 || "account" !== i[1] || "root" !== i[3])
                ? [r]
                : 1 === ev
                  ? []
                  : r.name !== e.name
                    ? [r]
                    : null != ev && ev > 1 && null != t && t.id === r.id
                      ? [t]
                      : []
            })))
      }
      K[30] !== V
        ? ((C = V
            ? (0, l.jsx)(u.A, { id: "viewerHeader.libraryBreadcrumb.space", defaultMessage: "Space" })
            : (0, l.jsx)(u.A, { id: "viewerHeader.libraryBreadcrumb", defaultMessage: "Library" })),
          (K[30] = V),
          (K[31] = C))
        : (C = K[31])
      let ew = C,
        eA = V ? "/space" : "/library"
      if ("text" === (void 0 === L ? "links" : L)) {
        let e, t, r
        return (
          K[32] !== eg ? ((e = eg?.map(F)), (K[32] = eg), (K[33] = e)) : (e = K[33]),
          K[34] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, l.jsx)("span", { "aria-hidden": !0, children: " /" })), (K[34] = t))
            : (t = K[34]),
          K[35] !== ew || K[36] !== e
            ? ((r = (0, l.jsxs)(l.Fragment, { children: [ew, e, t] })), (K[35] = ew), (K[36] = e), (K[37] = r))
            : (r = K[37]),
          r
        )
      }
      return (
        K[38] !== eA || K[39] !== ew || K[40] !== $
          ? ((z = (0, l.jsx)(y.ms.ItemSlot, {
              asChild: !0,
              children: (0, l.jsx)(f.N_, {
                className:
                  "inline-block max-w-full cursor-interaction align-bottom underline-offset-2 hover:text-default hover:underline",
                to: eA,
                onClick: $,
                children: ew,
              }),
            })),
            (K[38] = eA),
            (K[39] = ew),
            (K[40] = $),
            (K[41] = z))
          : (z = K[41]),
        K[42] !== eA || K[43] !== $ || K[44] !== eg
          ? ((B = eg?.map((e, t) =>
              (0, l.jsxs)(
                "span",
                {
                  children: [
                    (0, l.jsx)("span", { "aria-hidden": !0, children: " / " }),
                    null == e.id
                      ? e.name
                      : (0, l.jsx)(y.ms.ItemSlot, {
                          asChild: !0,
                          children: (0, l.jsx)(f.N_, {
                            className:
                              "inline-block max-w-full cursor-interaction align-bottom underline-offset-2 hover:text-default hover:underline",
                            to: `${eA}/d/${encodeURIComponent(e.id)}`,
                            onClick: $,
                            children: e.name,
                          }),
                        }),
                  ],
                },
                e.id ?? `${t}:${e.name}`,
              ),
            )),
            (K[42] = eA),
            (K[43] = $),
            (K[44] = eg),
            (K[45] = B))
          : (B = K[45]),
        K[46] !== z || K[47] !== B
          ? ((E = (0, l.jsxs)(l.Fragment, { children: [z, B] })), (K[46] = z), (K[47] = B), (K[48] = E))
          : (E = K[48]),
        E
      )
    }
    function F(e, t) {
      return (0, l.jsxs)(
        "span",
        { children: [(0, l.jsx)("span", { "aria-hidden": !0, children: " / " }), e.name] },
        e.id ?? `${t}:${e.name}`,
      )
    }
    function P(e) {
      let { state: t } = e
      return "available" === t
    }
    function k(e) {
      let { state: t } = e
      return "unknown" === t
    }
    function S(e) {
      return !e.is_root
    }
    function M(e) {
      return !e.is_root
    }
    r.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            r = (0, i.c)(2)
          r[0] !== e ? ((t = (0, l.jsx)(j, { ...e })), (r[0] = e), (r[1] = t)) : (t = r[1])
          let a = t
          return "text" === e.variant ? a : null
        },
      },
    )
  },
  P6OM(e, t, r) {
    var l = r("tFxw"),
      i = r("UxLW")
    r.d(
      t,
      {},
      {
        c: function (e, t, r) {
          return ["library-api", e, t, "path", r]
        },
        l: function (e, t, r) {
          let a = (0, i.AG)(e),
            n = (0, i.IN)(a)
          if (!(0, i.yn)(a) || null == n) return { directories: [] }
          let o = "google_drive" === a ? "gdrive" : a,
            s = `external-${o}:root`,
            d = (0, l.YO)(e),
            c = "onedrive" === a ? (0, l.Ei)(e, "file") : null,
            u = c?.externalAccountKey ?? (0, l._F)(e),
            f =
              "onedrive" !== a && d?.encodedAccountKey != null
                ? `external-${o}:account:${d.encodedAccountKey}:root`
                : void 0,
            p = null == c ? void 0 : `external-onedrive:folder:${e.split(":").slice(2, 6).join(":")}`,
            m = [{ id: s, name: n }],
            y = r?.nickname?.trim() || r?.email?.trim()
          y && (null == u || u === r?.key) && m.push({ id: f, name: y })
          let h = (0, i.n0)(t),
            _ = "onedrive" === a && null != t ? (0, l.Ei)(t, "folder") : null,
            x = _?.externalAccountKey ?? (0, l._F)(t),
            b = u ?? r?.key
          return {
            directories: m,
            cacheDirectoryId:
              null != t &&
              t !== s &&
              h?.provider === a &&
              "collection" !== h.kind &&
              (null == b || b === x) &&
              (null == c || (c.driveId === _?.driveId && c.driveType === _.driveType))
                ? t
                : (p ?? f),
          }
        },
      },
    )
  },
  ncAw(e, t, r) {
    var l = r("UxLW")
    let i = {
      box: "asdk_app_695bfc98071c8191bac7bc479aa27de7",
      dropbox: "asdk_app_69b31dc2110c8191b8b47dc98fe5a052",
      imanage: "asdk_app_6a7c5d8a6c508191893a34347001ed1c",
      google_drive: "connector_5f3c8c41a1e54ad7a76272c89e2554fa",
      sharepoint: "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
      onedrive: "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
    }
    function a(e) {
      return i[e]
    }
    function n(e, t, r = !1) {
      return e?.some((e) => e.connector_id === a(t) && (!r || "ACTIVE" === e.auth_status)) ?? !1
    }
    r.d(
      t,
      {},
      {
        MS: function (e, t) {
          let r = (0, l.AG)(e.id)
          return "unknown" !== r && t.includes(r ?? "native")
        },
        kS: n,
        rM: function ({
          connectorLinks: e,
          googleDriveEnabled: t,
          boxEnabled: r,
          dropboxEnabled: l,
          sharePointEnabled: i,
          oneDriveEnabled: a,
          imanageEnabled: o = !1,
        }) {
          let s = ["native"]
          return (
            t && n(e, "google_drive") && s.push("google_drive"),
            r && n(e, "box", !0) && s.push("box"),
            l && n(e, "dropbox", !0) && s.push("dropbox"),
            i && n(e, "sharepoint", !0) && s.push("sharepoint"),
            a && n(e, "onedrive", !0) && s.push("onedrive"),
            o && n(e, "imanage", !0) && s.push("imanage"),
            s
          )
        },
        zk: a,
      },
    )
  },
  Hd2W(e, t, r) {
    var l = r("S2r0"),
      i = r("Kwur")
    r.d(
      t,
      {},
      {
        O: function ({ accountId: e, userId: t, enabled: r, links: a, selection: n }) {
          return (0, l.j)({
            queryKey: [
              "library-api",
              e,
              t,
              "mounted-capabilities",
              n,
              null == n
                ? void 0
                : a?.map((e) => [
                    e.connector_id,
                    e.id,
                    e.auth_status,
                    e.auth_status_updated_at ?? e.created_at,
                    e.owner_profile?.id,
                    e.scopes.toSorted(),
                    e.auth_strategy_id,
                    e.callable_actions,
                    e.unavailable_reason,
                  ]),
            ],
            enabled: r && !!t && (null == n || null != a),
            staleTime: 3e4,
            refetchOnMount: !1,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: "always",
            queryFn: ({ signal: t }) =>
              i.Request.safeGet("/files/library/mounted/capabilities", {
                additionalHeaders: { "ChatGPT-Account-ID": e },
                parameters: { query: { provider: n?.provider, link_id: n?.linkId } },
                signal: t,
              }),
          })
        },
        j: function ({ provider: e, actionAccessEnabled: t, query: r }) {
          return (
            "native" === e ||
            "native_shared" === e ||
            !t ||
            (r?.error == null &&
              r?.data?.providers["onedrive" === e ? "sharepoint" : e]?.capabilities.library_browsing.state ===
                "available")
          )
        },
      },
    )
  },
  ARVD(e, t, r) {
    r.d(
      t,
      {},
      {
        z: function (e, t) {
          if (!Number.isFinite(e) || e <= 0)
            return t.formatNumber(0, { style: "unit", unit: "byte", unitDisplay: "long" })
          if (e < 1024) return t.formatNumber(e, { style: "unit", unit: "byte", unitDisplay: "long" })
          let r = ["kilobyte", "megabyte", "gigabyte", "terabyte"],
            l = e / 1024,
            i = 0
          for (; l >= 1024 && i < r.length - 1;) ((l /= 1024), (i += 1))
          return t.formatNumber(l, { maximumFractionDigits: 1, style: "unit", unit: r[i], unitDisplay: "short" })
        },
      },
    )
  },
}
//# sourceMappingURL=270393.de665c5972.js.map
