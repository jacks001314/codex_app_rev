export const __rspack_esm_ids = [400481]
export const __webpack_modules__ = {
  DlCK(e, t, n) {
    var i = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, i.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("path", { d: "M3.25 3.25H11.25V11.25H3.25V3.25Z", fill: "#F35325" }),
            (0, i.jsx)("path", { d: "M12.75 3.25H20.75V11.25H12.75V3.25Z", fill: "#81BC06" }),
            (0, i.jsx)("path", { d: "M3.25 12.75H11.25V20.75H3.25V12.75Z", fill: "#05A6F0" }),
            (0, i.jsx)("path", { d: "M12.75 12.75H20.75V20.75H12.75V12.75Z", fill: "#FFBA08" }),
          ],
        })))
  },
  kmbx(e, t, n) {
    n.d(
      t,
      {},
      {
        K: function ({ currentMessageId: e, isLastNodeInMessage: t, mapping: n, messageId: i, writingBlockIndex: a }) {
          if (null == n || null == e) return "conversation_unavailable"
          if (null == i) return "missing_message_id"
          if (0 !== a) return "not_primary_writing_block"
          if (!t) return "not_last_node_in_message"
          let s = n[i]
          if (s?.message == null) return "message_not_found"
          if (s.message.author?.role !== "assistant") return "invalid_source_message"
          let r = e,
            o = new Set()
          for (; null != r && !o.has(r);) {
            if (r === i) return null
            o.add(r)
            let e = n[r],
              t = e?.message?.metadata?.writing_blocks
            if (e?.message?.author?.role === "user" || (null != t && Object.keys(t).length > 0)) break
            r = e?.parent ?? null
          }
          return "superseded_by_later_turn"
        },
        o: function (e) {
          let t = e?.suggested_followups
          if (!Array.isArray(t)) return []
          let n = []
          for (let [e, i] of t.entries()) {
            if (null == i || "object" != typeof i) continue
            let t = "prompt" in i && "string" == typeof i.prompt ? i.prompt.trim() : ""
            if (!t) continue
            let a = "title" in i && "string" == typeof i.title ? i.title.trim() : ""
            if ((n.push({ prompt: t, sourceIndex: e, title: a || t }), 3 === n.length)) break
          }
          return n
        },
      },
    )
  },
  wxDG(e, t, n) {
    n.d(t, { t: () => c })
    var i = n("Ghh3"),
      a = n("LhrG"),
      s = n("UxLW")
    function r(e, t, n) {
      return {
        access: null,
        conversation: n,
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
    async function o(e, t, n) {
      if (null == e) return null
      try {
        let a = await i.Request.safeGet("/conversation/{conversation_id}", {
          parameters: { path: { conversation_id: e } },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [403, 404],
          signal: n,
        })
        return (n.throwIfAborted(), { id: e, title: a.title ?? null })
      } catch {
        return (n.throwIfAborted(), null)
      }
    }
    function l(e) {
      let t = e?.display_name?.trim() || e?.email?.trim()
      return null == t ? null : { kind: "person", name: t }
    }
    function d(e) {
      return "fulfilled" === e.status ? e.value : null
    }
    function c({ accountId: e, source: t, userId: n }) {
      return {
        enabled: null != e,
        queryFn: ({ signal: c }) => {
          if (null == e) throw Error("Cannot fetch file info without an account")
          return (async function (e, t, n, c) {
            if ("library" === e.identity.type) {
              let n = e.identity.libraryFileId
              return null != (0, s.AG)(n)
                ? r(e, n, await o(e.conversationId, t, c))
                : (async function (e, t, n, s) {
                    var r, c, u
                    let p = await (0, a.F)(t, n, s)
                    s.throwIfAborted()
                    let m = p.access_kind,
                      f = e.conversationId ?? p.origination_thread_id,
                      h = { "ChatGPT-Account-ID": n },
                      [g, b, w, x] = await Promise.allSettled([
                        "mounted" === m
                          ? Promise.resolve(null)
                          : i.Request.safeGet("/files/library/files/{library_file_id}/sharing-state", {
                              parameters: { path: { library_file_id: t }, query: { include_profile_photos: !1 } },
                              additionalHeaders: h,
                              expectedErrorStatuses: [403, 404],
                              signal: s,
                            }),
                        "mounted" === m
                          ? Promise.resolve(null)
                          : i.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                              parameters: { path: { library_file_id: t }, query: { limit: 1 } },
                              additionalHeaders: h,
                              expectedErrorStatuses: [403, 404],
                              signal: s,
                            }),
                        "shared" === m
                          ? i.Request.safeGet("/files/library/shared/files/{library_file_id}/access", {
                              parameters: { path: { library_file_id: t } },
                              additionalHeaders: h,
                              expectedErrorStatuses: [403, 404],
                              signal: s,
                            })
                          : Promise.resolve(null),
                        o(f, n, s),
                      ])
                    s.throwIfAborted()
                    let _ = d(g),
                      y = d(b)?.items[0] ?? null,
                      v = d(w),
                      k = l(_?.owner ?? null)
                    return {
                      access:
                        ((r = m),
                        (c = _),
                        (u = v?.can_edit),
                        null != c &&
                        c.viewer.principal.principal_type === c.owner.principal.principal_type &&
                        c.viewer.principal.principal_id === c.owner.principal.principal_id
                          ? "owner"
                          : c?.viewer.role_id.includes("editor") || !0 === u
                            ? "editor"
                            : "owned" === r
                              ? "owner"
                              : "shared" !== r || (null == c && null == u)
                                ? null
                                : "viewer"),
                      conversation: d(x),
                      createdAt: p.record_creation_time ?? p.file_upload_time ?? e.createdAt ?? null,
                      createdBy: k,
                      externalAccount: p.external_account ?? e.externalAccount ?? null,
                      fileExtension: p.file_extension ?? null,
                      libraryFileMetadata: "image" === p.library_file_category ? p : void 0,
                      libraryFileId: t,
                      mimeType: p.mime_type ?? e.mimeType ?? null,
                      name: ("kind" in p ? p.name : p.file_name) || e.name,
                      parentDirectoryId: ("kind" in p ? p.parent_directory_id : p.directory_id) ?? null,
                      sizeBytes: p.file_size_bytes ?? e.sizeBytes ?? null,
                      sourceUrl: p.cloud_doc_url ?? e.sourceUrl,
                      updatedAt: y?.version_created_at ?? p.updated_at ?? p.file_upload_time ?? e.updatedAt ?? null,
                      updatedBy: (function (e, t, n) {
                        let i = e?.version_provenance
                        if (null == i) return null
                        if ("agent" === i.actor) return { kind: "chatgpt" }
                        let a = i.actor_id?.trim()
                        if (null != a && null != t) {
                          if (a === t.owner.principal.principal_id) return l(t.owner)
                          if (a === t.viewer.principal.principal_id) return l(t.viewer) ?? { kind: "you" }
                        }
                        let s = i.actor_display_name?.trim() || i.actor_email?.trim()
                        return null != s
                          ? { kind: "person", name: s }
                          : "create" === i.action && null != n
                            ? n
                            : { kind: "collaborator" }
                      })(y, _, k),
                    }
                  })(e, n, t, c)
            }
            let [u, p] = await Promise.all([
              i.Request.safeGet("/files/{file_id}", {
                parameters: { path: { file_id: e.identity.fileId }, query: { gizmo_id: e.gizmoId } },
                additionalHeaders: { "ChatGPT-Account-ID": t },
                signal: c,
              }).catch((t) => {
                if ((c.throwIfAborted(), null == e.sourceUrl && null == e.externalAccount)) throw t
                return null
              }),
              o(e.conversationId, t, c),
            ])
            if ((c.throwIfAborted(), null == u)) return r(e, null, p)
            let m = null != n && u.owner_id === n,
              f = m ? { kind: "you" } : null
            return {
              access: m ? "owner" : "viewer",
              conversation: p,
              createdAt: u.creation_time,
              createdBy: f,
              externalAccount: e.externalAccount ?? null,
              fileExtension: u.file_extension,
              libraryFileId: null,
              mimeType: u.mime_type ?? e.mimeType ?? null,
              name: u.name || e.name,
              parentDirectoryId: e.parentDirectoryId ?? null,
              sizeBytes: u.size ?? e.sizeBytes ?? null,
              sourceUrl: e.sourceUrl,
              updatedAt: u.ready_time ?? u.creation_time,
              updatedBy: f,
            }
          })(t, e, n, c)
        },
        queryKey: ["chatgpt-file-preview-file-info", e, n, t],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 3e4,
      }
    }
  },
  UBr4(e, t, n) {
    n.d(t, { h: () => I })
    var i = n("ABep"),
      a = n("QosV"),
      s = n("bqtn"),
      r = n("Bbed"),
      o = n("IhMz"),
      l = n("qsUv"),
      d = n("Pq1H"),
      c = n("zTeN"),
      u = n("oyxz"),
      p = n("SPnB"),
      m = n("UxN3"),
      f = n("OWtl"),
      h = n("Vc45"),
      g = n("wxDG")
    function b(e) {
      let t,
        n,
        r,
        d,
        p,
        g,
        b = (0, a.c)(12),
        { ownerId: x, source: _ } = e,
        y = (0, c.gh)(f.u)
      return (
        b[0] !== _ ? ((t = (0, i.jsx)(w, { source: _ })), (b[0] = _), (b[1] = t)) : (t = b[1]),
        b[2] !== x || b[3] !== y
          ? ((n = () => {
              ;(0, h.hj)(y, x, "file-info")
            }),
            (b[2] = x),
            (b[3] = y),
            (b[4] = n))
          : (n = b[4]),
        b[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(s.ms.ItemIcon, {
              children: (0, i.jsx)(m.b5, { icon: { assets: { 16: o.c, 20: l.b } } }),
            })),
            (d = (0, i.jsx)(u.A, {
              id: "chatgptFilePreview.fileInfo.menuItem",
              defaultMessage: "File info",
              description:
                "Short action label in a file preview title menu. Selecting it opens a panel with metadata for the current file.",
            })),
            (b[5] = r),
            (b[6] = d))
          : ((r = b[5]), (d = b[6])),
        b[7] !== n
          ? ((p = (0, i.jsxs)(s.ms.Item, { onSelect: n, children: [r, d] })), (b[7] = n), (b[8] = p))
          : (p = b[8]),
        b[9] !== t || b[10] !== p
          ? ((g = (0, i.jsxs)(i.Fragment, { children: [t, p] })), (b[9] = t), (b[10] = p), (b[11] = g))
          : (g = b[11]),
        g
      )
    }
    function w(e) {
      let t,
        n = (0, a.c)(4),
        { source: i } = e,
        s = (0, c.gh)(f.u),
        r = (0, c.Ul)(p.chatGptAuthenticatedAccountId$),
        o = (0, c.Ul)(p.chatGptAuthenticatedUserId$)
      return (
        n[0] !== r || n[1] !== i || n[2] !== o
          ? ((t = (0, g.t)({ accountId: r, source: i, userId: o })), (n[0] = r), (n[1] = i), (n[2] = o), (n[3] = t))
          : (t = n[3]),
        (0, d.f)(t, s.queryClient),
        null
      )
    }
    var x = n("aQcf"),
      _ = n("bv3b"),
      y = n("E8Sp"),
      v = n("xmjg"),
      k = n("O8Pw"),
      S = n("tl2n")
    function C(e) {
      let t,
        n,
        r,
        o,
        l,
        d = (0, a.c)(16),
        { libraryFileId: p, disabled: h, onSelect: g } = e,
        b = (0, c.gh)(f.u),
        { pathname: w } = (0, c.Ul)(y.gM),
        C = (0, k.Tq)(),
        A = (0, k.o0)()
      return !(0, c.Ul)(S.$7) ||
        "/library" === w ||
        w?.startsWith("/library/") ||
        "/space" === w ||
        w?.startsWith("/space/")
        ? null
        : (d[0] !== A ? ((t = A({ 16: x.Y, 20: _.V }, { 16: v.Z, 20: v.e })), (d[0] = A), (d[1] = t)) : (t = d[1]),
          d[2] !== t ? ((n = (0, i.jsx)(m.b5, { icon: { assets: t } })), (d[2] = t), (d[3] = n)) : (n = d[3]),
          d[4] !== p || d[5] !== A || d[6] !== g || d[7] !== b
            ? ((r = () => {
                ;(g?.(),
                  (0, y.oo)(b, A(`/library/file/${encodeURIComponent(p)}`, `/space/file/${encodeURIComponent(p)}`)))
              }),
              (d[4] = p),
              (d[5] = A),
              (d[6] = g),
              (d[7] = b),
              (d[8] = r))
            : (r = d[8]),
          d[9] !== C
            ? ((o = C
                ? (0, i.jsx)(u.A, {
                    id: "artifactViewer.openInLibrary.space",
                    defaultMessage: "Open in Space",
                    description:
                      "Artifact title menu action for opening the saved artifact in Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                  })
                : (0, i.jsx)(u.A, {
                    id: "artifactViewer.openInLibrary",
                    defaultMessage: "Open in Library",
                    description: "Artifact title menu action for opening the saved artifact in Library",
                  })),
              (d[9] = C),
              (d[10] = o))
            : (o = d[10]),
          d[11] !== h || d[12] !== n || d[13] !== r || d[14] !== o
            ? ((l = (0, i.jsx)(s.ms.Item, { disabled: h, leftIcon: n, onSelect: r, children: o })),
              (d[11] = h),
              (d[12] = n),
              (d[13] = r),
              (d[14] = o),
              (d[15] = l))
            : (l = d[15]),
          l)
    }
    let A = (0, r._)(async () => (await n.e(337604).then(n.bind(n, "vavQ"))).LibraryFilePreviewVersionHistory)
    function I(e) {
      let t,
        n,
        r,
        o,
        l,
        d,
        c = (0, a.c)(23),
        {
          children: u,
          favoriteAction: p,
          file: m,
          fileInfoOwnerId: f,
          fileInfoSource: g,
          libraryFileId: w,
          openInLibraryDisabled: x,
          onOpenLibrary: _,
          versionHistoryAction: y,
        } = e,
        v = w ?? m?.libraryFileId
      c[0] !== f || c[1] !== g
        ? ((t = null == g ? void 0 : (f ?? (0, h.xd)(g))), (c[0] = f), (c[1] = g), (c[2] = t))
        : (t = c[2])
      let k = t,
        S = null != k || null != v || null != p || null != y || null != m
      return S || null != u
        ? (c[3] !== k || c[4] !== g
            ? ((n = null == k || null == g ? null : (0, i.jsx)(b, { ownerId: k, source: g })),
              (c[3] = k),
              (c[4] = g),
              (c[5] = n))
            : (n = c[5]),
          c[6] !== v || c[7] !== _ || c[8] !== x
            ? ((r = null == v ? null : (0, i.jsx)(C, { disabled: x, libraryFileId: v, onSelect: _ })),
              (c[6] = v),
              (c[7] = _),
              (c[8] = x),
              (c[9] = r))
            : (r = c[9]),
          c[10] !== m || c[11] !== y
            ? ((o = y ?? (null == m ? null : (0, i.jsx)(A, { file: m }))), (c[10] = m), (c[11] = y), (c[12] = o))
            : (o = c[12]),
          c[13] !== u || c[14] !== S
            ? ((l = S && null != u ? (0, i.jsx)(s.ms.Separator, { className: "last:hidden" }) : null),
              (c[13] = u),
              (c[14] = S),
              (c[15] = l))
            : (l = c[15]),
          c[16] !== u || c[17] !== p || c[18] !== n || c[19] !== r || c[20] !== o || c[21] !== l
            ? ((d = (0, i.jsxs)(i.Fragment, { children: [n, r, p, o, l, u] })),
              (c[16] = u),
              (c[17] = p),
              (c[18] = n),
              (c[19] = r),
              (c[20] = o),
              (c[21] = l),
              (c[22] = d))
            : (d = c[22]),
          d)
        : null
    }
  },
  vavQ(e, t, n) {
    n.d(t, { h: () => m, LibraryFilePreviewVersionHistory: () => p })
    var i = n("ABep"),
      a = n("QosV")
    let s = (0, n("nkTT").a)({
      name: "arrow-rotate-counterclockwise-clock-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.641113, y: 1.641113, width: 12.716797, height: 12.716797 },
        visualBounds: { x: 1.641113, y: 1.641113, width: 12.716797, height: 12.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.641113, y: 1.641113, width: 12.716797, height: 12.716797 },
        center: { x: 7.999512, y: 7.999512 },
        insets: { top: 1.641113, right: 1.64209, bottom: 1.64209, left: 1.641113 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999512, y: 7.999512 }, foreground: { x: 7.999512, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99951 1.64111C11.511 1.64111 14.3577 4.48805 14.3579 7.99951C14.3579 11.5111 11.5111 14.3579 7.99951 14.3579C4.97316 14.3577 2.44194 12.2439 1.79932 9.4126C1.73517 9.12987 1.91212 8.84789 2.19482 8.78369C2.47756 8.71957 2.75859 8.89745 2.82275 9.18018C3.35918 11.5439 5.47412 13.3079 7.99951 13.3081C10.9312 13.3081 13.3081 10.9312 13.3081 7.99951C13.3079 5.06795 10.9311 2.69189 7.99951 2.69189C5.96082 2.69204 4.19173 3.84247 3.30225 5.53076H4.75928C5.04914 5.53086 5.28369 5.76626 5.28369 6.05615C5.28352 6.34589 5.04904 6.58047 4.75928 6.58057H2.1665C1.87666 6.58057 1.64129 6.34595 1.64111 6.05615V3.13916C1.64111 2.84921 1.87655 2.61377 2.1665 2.61377C2.45645 2.61377 2.69189 2.84921 2.69189 3.13916V4.50146C3.82896 2.77976 5.78029 1.64125 7.99951 1.64111Z" fill="currentColor"/> <path d="M7.99951 4.23389C8.28946 4.23389 8.5249 4.46933 8.5249 4.75928V8.00049C8.52478 8.13956 8.46895 8.27324 8.37061 8.37158L6.75049 9.9917C6.54548 10.1965 6.21327 10.1966 6.0083 9.9917C5.80341 9.78673 5.80348 9.45453 6.0083 9.24951L7.4751 7.78174V4.75928C7.4751 4.46946 7.70975 4.2341 7.99951 4.23389Z" fill="currentColor"/>',
    })
    var r = n("gZqq"),
      o = n("zTeN"),
      l = n("oyxz"),
      d = n("bqtn"),
      c = n("UxN3"),
      u = n("YDoP")
    function p(e) {
      let t,
        n,
        s = (0, a.c)(6),
        { file: r, disabled: l, onSelect: d } = e,
        c = (0, o.Ul)(u._)
      return null == c || c.file.libraryFileId !== r.libraryFileId
        ? null
        : (s[0] !== c || s[1] !== d ? ((t = d ?? (() => c.open())), (s[0] = c), (s[1] = d), (s[2] = t)) : (t = s[2]),
          s[3] !== l || s[4] !== t
            ? ((n = (0, i.jsx)(m, { disabled: l, onSelect: t })), (s[3] = l), (s[4] = t), (s[5] = n))
            : (n = s[5]),
          n)
    }
    function m(e) {
      let t,
        n,
        o,
        u = (0, a.c)(5),
        { disabled: p, onSelect: m } = e
      return (
        u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(c.b5, { icon: { assets: { 16: s, 20: r.b } } })), (u[0] = t))
          : (t = u[0]),
        u[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(l.A, {
              id: "chatgptFilePreview.versionHistory.title",
              defaultMessage: "Version history",
              description: "Title-menu action that opens a side panel with a Library file's saved versions",
            })),
            (u[1] = n))
          : (n = u[1]),
        u[2] !== p || u[3] !== m
          ? ((o = (0, i.jsx)(d.ms.Item, { disabled: p, leftIcon: t, onSelect: m, children: n })),
            (u[2] = p),
            (u[3] = m),
            (u[4] = o))
          : (o = u[4]),
        o
      )
    }
  },
  YDoP(e, t, n) {
    var i = n("zTeN"),
      a = n("Oj9r")
    let s = (0, i.z8)("LibraryFileVersionHistoryScope", { key: ({ id: e }) => e, parent: a.GD }),
      r = (0, i.vP)(s, null)
    n.d(t, {}, { _: r, s: s })
  },
  D1oM(e, t, n) {
    var i = n("ABep"),
      a = n("QosV"),
      s = n("on57"),
      r = n("LIss"),
      o = n("zd8w"),
      l = n("GO7r"),
      d = n("T1PX"),
      c = n("nsuH")
    function u(e) {
      let { label: t } = e
      return t
    }
    n.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            n,
            p,
            m,
            f,
            h,
            g,
            b,
            w,
            x,
            _,
            y = (0, a.c)(40),
            { disabled: v, layout: k, onSelect: S, suggestions: C } = e,
            A = (0, o.useRef)(null),
            I = (0, o.useRef)(null),
            [j, M] = (0, o.useState)(null),
            B = (0, d.I)(),
            L = "responsive" === k
          y[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                let e = A.current,
                  t = I.current
                if (null == e || null == t) return
                let n = e.getBoundingClientRect().width
                if (0 === n || "column" === getComputedStyle(e).flexDirection) return void M(null)
                let i = 1 / 0,
                  a = -1 / 0,
                  s = 0
                for (let e of t.children) {
                  let t = e.getBoundingClientRect()
                  if (((i = Math.min(i, t.left)), (a = Math.max(a, t.right)), s > 0 && a - i > n + 0.5)) break
                  s++
                }
                M(s)
              }),
              (y[0] = t))
            : (t = y[0])
          let T = t,
            E = (0, c.wY)(T),
            N = (0, c.wY)(T)
          y[1] !== E
            ? ((n = (e) => {
                ;((A.current = e), E(e), T())
              }),
              (y[1] = E),
              (y[2] = n))
            : (n = y[2])
          let P = L
            ? "flex-col items-start sm:flex-row sm:items-center sm:gap-3"
            : "items-center gap-3 text-sm text-secondary"
          if (
            (y[3] !== P ? ((p = (0, s.A)("flex min-w-0", P)), (y[3] = P), (y[4] = p)) : (p = y[4]),
            y[5] !== v || y[6] !== S || y[7] !== B || y[8] !== L || y[9] !== C || y[10] !== j)
          ) {
            let e
            ;(y[12] !== v || y[13] !== S || y[14] !== B || y[15] !== L
              ? ((e = (e, t) => {
                  let { key: n, label: a } = e
                  return (0, i.jsxs)(
                    r.P.button,
                    {
                      className: (0, s.A)(
                        "relative flex min-w-0 max-w-full items-center gap-1 rounded-xs border-0 bg-transparent p-0 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text",
                        L
                          ? "min-h-11 w-full select-none after:absolute after:inset-x-0 after:top-1/2 after:h-full after:min-h-8 after:-translate-y-1/2 sm:min-h-0 sm:w-auto sm:shrink-0 sm:gap-1.5 pointer-coarse:after:min-h-11"
                          : "shrink-0",
                        v ? "cursor-default" : "group/suggested-followup cursor-interaction",
                        !v && (L ? "hover:text-info" : "hover:text-default"),
                      ),
                      animate: L ? { opacity: 1, y: 0 } : void 0,
                      "aria-disabled": v,
                      initial: !!L && !B && { opacity: 0, y: -4 },
                      layout: L && !B,
                      transition: { duration: 0.18 * !B, ease: "easeOut" },
                      type: "button",
                      onClick: () => {
                        v || S(t)
                      },
                      children: [
                        (0, i.jsx)(l.se0, {
                          "aria-hidden": "true",
                          "data-rtl-flip": L ? void 0 : "",
                          className: L
                            ? "shrink-0 transition-transform duration-basic ease-out motion-safe:group-hover/suggested-followup:translate-x-0.5"
                            : "icon-sm shrink-0",
                        }),
                        (0, i.jsx)("span", {
                          className: (0, s.A)("min-w-0 wrap-anywhere whitespace-normal", L && "sm:truncate"),
                          children: a,
                        }),
                      ],
                    },
                    n,
                  )
                }),
                (y[12] = v),
                (y[13] = S),
                (y[14] = B),
                (y[15] = L),
                (y[16] = e))
              : (e = y[16]),
              (m = C.slice(0, j ?? C.length).map(e)),
              (y[5] = v),
              (y[6] = S),
              (y[7] = B),
              (y[8] = L),
              (y[9] = C),
              (y[10] = j),
              (y[11] = m))
          } else m = y[11]
          ;(y[17] !== n || y[18] !== p || y[19] !== m
            ? ((f = (0, i.jsx)("div", { ref: n, className: p, children: m })),
              (y[17] = n),
              (y[18] = p),
              (y[19] = m),
              (y[20] = f))
            : (f = y[20]),
            y[21] !== C ? ((h = JSON.stringify(C.map(u))), (y[21] = C), (y[22] = h)) : (h = y[22]),
            y[23] !== N
              ? ((g = (e) => {
                  ;((I.current = e), N(e), T())
                }),
                (y[23] = N),
                (y[24] = g))
              : (g = y[24]))
          let O = L ? "hidden sm:flex" : "flex text-sm"
          if (
            (y[25] !== O
              ? ((b = (0, s.A)("pointer-events-none invisible absolute start-0 top-0 w-max items-center gap-3", O)),
                (y[25] = O),
                (y[26] = b))
              : (b = y[26]),
            y[27] !== L || y[28] !== C)
          ) {
            let e
            ;(y[30] !== L
              ? ((e = (e) => {
                  let { key: t, label: n } = e
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: (0, s.A)("flex shrink-0 items-center", L ? "gap-1.5" : "gap-1"),
                      children: [
                        (0, i.jsx)(l.se0, { className: L ? void 0 : "icon-sm", "data-rtl-flip": L ? void 0 : "" }),
                        (0, i.jsx)("span", { className: "whitespace-nowrap", children: n }),
                      ],
                    },
                    t,
                  )
                }),
                (y[30] = L),
                (y[31] = e))
              : (e = y[31]),
              (w = C.map(e)),
              (y[27] = L),
              (y[28] = C),
              (y[29] = w))
          } else w = y[29]
          return (
            y[32] !== b || y[33] !== w || y[34] !== h || y[35] !== g
              ? ((x = (0, i.jsx)("div", { ref: g, "aria-hidden": "true", className: b, children: w }, h)),
                (y[32] = b),
                (y[33] = w),
                (y[34] = h),
                (y[35] = g),
                (y[36] = x))
              : (x = y[36]),
            y[37] !== x || y[38] !== f
              ? ((_ = (0, i.jsxs)(i.Fragment, { children: [f, x] })), (y[37] = x), (y[38] = f), (y[39] = _))
              : (_ = y[39]),
            _
          )
        },
      },
    )
  },
  LhrG(e, t, n) {
    var i = n("tFxw"),
      a = n("Ghh3"),
      s = n("eShZ"),
      r = n("jgEm"),
      o = n("MExO")
    n.d(
      t,
      {},
      {
        F: async function (e, t, n) {
          let l,
            d = (0, o.CN)(e)
          if (null != d) {
            n.throwIfAborted()
            let s = await a.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
              parameters: { path: { provider_key: d.provider } },
              requestBody: { file_id: e },
              additionalHeaders: { "ChatGPT-Account-ID": t },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503, 504],
              signal: n,
            })
            n.throwIfAborted()
            let r = (0, o.CN)(s.file_id)
            if (
              s.file_id !== e &&
              ((0, i.YO)(e)?.encodedAccountKey != null ||
                r?.provider !== d.provider ||
                r.nativeFileId !== d.nativeFileId)
            )
              throw Error("Provider file metadata does not match the requested file")
            return {
              id: s.file_id,
              kind: "file",
              name: s.name,
              parent_directory_id: null,
              access_kind: "mounted",
              mime_type: s.mime_type,
              file_size_bytes: s.file_size_bytes,
            }
          }
          let c = {
            parameters: { path: { library_file_id: e } },
            additionalHeaders: { "ChatGPT-Account-ID": t },
            expectedErrorStatuses: [403, 404],
            signal: n,
          }
          if ((n.throwIfAborted(), /^libfile_fde[123]_/.test(e))) {
            let t = await a.Request.safeGet("/files/library/files/{library_file_id}/node", c)
            return (n.throwIfAborted(), (0, r.U9)(t, e))
          }
          try {
            let e = await a.Request.safeGet("/files/library/files/{library_file_id}", c)
            return (n.throwIfAborted(), e)
          } catch (e) {
            if (!(e instanceof s.fk) || (403 !== e.status && 404 !== e.status)) throw e
          }
          n.throwIfAborted()
          try {
            if (
              ((l = await a.Request.safeGet("/files/library/files/{library_file_id}/node", c)),
              n.throwIfAborted(),
              "owned" === l.access_kind && "image" === l.library_file_category && null == l.library_artifact_type)
            ) {
              let e = await a.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                ...c,
                parameters: { ...c.parameters, query: { limit: 1 } },
              })
              return (
                n.throwIfAborted(),
                { ...l, library_artifact_type: e.items[0]?.library_artifact_type ?? l.library_artifact_type }
              )
            }
            return (0, r.U9)(l, e)
          } catch (o) {
            if (!(o instanceof s.fk) || (403 !== o.status && 404 !== o.status)) throw o
            let t = null,
              i = new Set()
            do {
              n.throwIfAborted()
              let s = await a.Request.safePost("/files/library", {
                requestBody: { cursor: t, limit: 100, include_hidden_files: !0, include_saved_entities: !0 },
                additionalHeaders: c.additionalHeaders,
                expectedErrorStatuses: [403, 404],
                signal: n,
              })
              n.throwIfAborted()
              let r = s.items.find((t) => t.id === e)
              if (null != r) return r
              if (null == (t = s.cursor ?? null) || i.has(t)) break
              i.add(t)
            } while (null != t)
            if (null != l) return (0, r.U9)(l, e)
            throw o
          }
        },
      },
    )
  },
  H7Ld(e, t, n) {
    var i = n("YWcr"),
      a = n("MX6A")
    n.d(
      t,
      {},
      {
        Dy: function (e) {
          return e?.map((e) => e.trim()).find((e) => e.length > 0) ?? null
        },
        KH: function ({ defaultPrompt: e, pluginDisplayName: t, pluginId: n }) {
          let s = `[@${t}](${(0, a.b4)((0, i.vt)(n))})`
          return `${s} ${e?.trim() ?? ""}`
        },
        h0: "deep-research-work@openai-curated-remote",
      },
    )
  },
  zTAs(e, t, n) {
    var i = n("BhZP"),
      a = n("CL6A"),
      s = n("wDWo"),
      r = n("ASxG")
    let o = r.array(r.looseObject({ content: r.string() }))
    function l(e, { contentReferences: t, isStreaming: n }) {
      return (0, s.EQ)(e, { content_references: t }, { isStreaming: n })
    }
    function d(e, t) {
      let n = e
      for (let i of ["options", "style_variants"]) {
        let a = o.safeParse(e?.[i])
        a.success && (n = { ...n, [i]: a.data.map((e) => ({ ...e, content: l(e.content, t) })) })
      }
      return n
    }
    n.d(
      t,
      {},
      {
        Io: l,
        Yn: d,
        _h: function (e, t, n) {
          let s = { ...e.metadata }
          return (
            null != e.options && (s.options = e.options),
            {
              content:
                (0, i.I$)(s)[0]?.content ??
                (function (e, t) {
                  if (t && "string" == typeof e?.matched_text)
                    return (0, a.vV)((0, a.PV)(e.matched_text, { isStreaming: !0 })) ?? void 0
                })(t, n) ??
                e.content ??
                "",
              metadata: s,
            }
          )
        },
        nm: function (e, t) {
          return e?.edited !== !1 || e.locallyEdited
            ? e
            : { ...e, content: l(e.content, t), metadata: d(e.metadata, t) }
        },
      },
    )
  },
  Gf6P(e, t, n) {
    n.d(t, { p: () => tp })
    var i = n("ABep"),
      a = n("QosV"),
      s = n("ozm1"),
      r = n("mBJV"),
      o = n("ECyk"),
      l = n("kmbx"),
      d = n("BhZP"),
      c = n("Kh9O"),
      u = n("zTeN"),
      p = n("zd8w"),
      m = n("oyxz"),
      f = n("Ghh3"),
      h = n("vavQ"),
      g = n("jEN2"),
      b = n("HOLv"),
      w = n("Bbed"),
      x = n("O8Pw"),
      _ = n("tl2n"),
      y = n("nlNF"),
      v = n("yGJW"),
      k = n("OWtl"),
      S = n("hZax"),
      C = n("bIvi"),
      A = n("pZQ9"),
      I = n("Or4D"),
      j = n("qirF"),
      M = n("slpy"),
      B = n("xJAz"),
      L = n("fN1G"),
      T = n("wB7m"),
      E = n("T9dF"),
      N = n("UwnX"),
      P = n("D7Ms"),
      O = n("T0Rc"),
      R = n("on57"),
      G = n("Wf1j"),
      D = n("HZfM"),
      F = n("SPnB"),
      q = n("ygO2"),
      U = n("bqtn"),
      V = n("GO7r"),
      H = n("RNul"),
      W = "title-Nx5xpW"
    function z(e) {
      let t,
        n,
        s,
        r,
        o,
        l = (0, a.c)(38),
        {
          children: d,
          disabled: c,
          downloadMenu: u,
          libraryFileId: p,
          onLibraryClick: f,
          onOpenVersionHistory: h,
          onSave: g,
          isSaving: w,
          saveConfirmation: _,
          saveToPage: y,
        } = e,
        v = (0, x.Tq)(),
        k = v ? "/space/files" : "/library",
        S = (0, G.A)(),
        C = (0, D.Zp)()
      if (y) {
        let e
        ;(l[0] !== S || l[1] !== w
          ? ((e = w
              ? S.formatMessage({
                  id: "codex.writingBlock.page.saving",
                  defaultMessage: "Creating Page",
                  description:
                    "Accessible label on the writing block save control while its editable Page is being created. Keep this progress label short.",
                })
              : S.formatMessage({
                  id: "codex.writingBlock.page.save",
                  defaultMessage: "Save as Page",
                  description:
                    "Label, accessible label, and tooltip for a writing block's save control. Saves the writing as an editable Page that can be found in Space. Page means a saved document, not a sheet of paper. Keep this action short.",
                })),
            (l[0] = S),
            (l[1] = w),
            (l[2] = e))
          : (e = l[2]),
          (t = e))
      } else if (w && v) {
        let e
        ;(l[3] !== S
          ? ((e = S.formatMessage({
              id: "codex.writingBlock.inlineLibrary.addingToLibrary.space",
              defaultMessage: "Adding to Space",
              description:
                "Accessible label and hover tooltip for the writing block header's Space save control while the document is being saved. Describes an operation in progress, not an action to start. Keep this status label short. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
            })),
            (l[3] = S),
            (l[4] = e))
          : (e = l[4]),
          (t = e))
      } else if (w) {
        let e
        ;(l[5] !== S
          ? ((e = S.formatMessage({
              id: "codex.writingBlock.inlineLibrary.addingToLibrary",
              defaultMessage: "Adding to Library",
              description:
                "Accessible label and hover tooltip for the writing block header's Library save control while the document is being saved. Describes an operation in progress, not an action to start. Keep this status label short.",
            })),
            (l[5] = S),
            (l[6] = e))
          : (e = l[6]),
          (t = e))
      } else if (v) {
        let e
        ;(l[7] !== S
          ? ((e = S.formatMessage({
              id: "codex.writingBlock.inlineLibrary.save.space",
              defaultMessage: "Add to Space",
              description:
                "Tooltip and accessible label for the inline document title control. Saves the document to the user's Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
            })),
            (l[7] = S),
            (l[8] = e))
          : (e = l[8]),
          (t = e))
      } else {
        let e
        ;(l[9] !== S
          ? ((e = S.formatMessage({
              id: "codex.writingBlock.inlineLibrary.save",
              defaultMessage: "Add to Library",
              description:
                "Tooltip and accessible label for the inline document title control. Saves the document to the user's Library.",
            })),
            (l[9] = S),
            (l[10] = e))
          : (e = l[10]),
          (t = e))
      }
      return (
        l[11] !== d ||
        l[12] !== c ||
        l[13] !== u ||
        l[14] !== v ||
        l[15] !== k ||
        l[16] !== p ||
        l[17] !== C ||
        l[18] !== f ||
        l[19] !== h ||
        l[20] !== _
          ? ((n = p
              ? (0, i.jsxs)(U.Ab, {
                  align: "start",
                  contentWidth: "menuBounded",
                  triggerButton: (0, i.jsxs)(q.$, {
                    ref: (e) => {
                      "keyboard" === _ &&
                        null != e &&
                        e.ownerDocument.activeElement === e.ownerDocument.body &&
                        e.focus({ preventScroll: !0 })
                    },
                    className: (0, R.A)(W, "min-w-0"),
                    color: "ghostOutline",
                    radius: "full",
                    size: "dialogGhost",
                    children: [
                      (0, i.jsx)(b.I, { asset: N.g }),
                      (0, i.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-0.5",
                        children: [
                          (0, i.jsx)("span", { className: "min-w-0 truncate", children: d }),
                          (0, i.jsx)(b.I, { className: "chevron-RGwrqT", asset: B.U }),
                        ],
                      }),
                    ],
                  }),
                  children: [
                    (0, i.jsx)($, { libraryFileId: p, onLibraryClick: f, children: d }),
                    (0, i.jsx)(U.ms.Separator, {}),
                    null != f
                      ? (0, i.jsxs)(U.ms.Item, {
                          onSelect: () => {
                            ;(f(), C(k))
                          },
                          children: [
                            (0, i.jsx)(U.ms.ItemIcon, {
                              size: "md",
                              children: v ? (0, i.jsx)(V.Mpc, {}) : (0, i.jsx)(V.baR, {}),
                            }),
                            v
                              ? (0, i.jsx)(m.A, {
                                  id: "codex.writingBlock.inlineLibrary.openLibrary.space",
                                  defaultMessage: "Open in Space",
                                  description:
                                    "Menu action that opens the Space containing the saved note. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                                })
                              : (0, i.jsx)(m.A, {
                                  id: "codex.writingBlock.inlineLibrary.openLibrary",
                                  defaultMessage: "Open in Library",
                                  description: "Menu action that opens the Library containing the saved note.",
                                }),
                          ],
                        })
                      : null,
                    u,
                    null != h
                      ? (0, i.jsx)(U.ms.Item, {
                          disabled: c,
                          onSelect: h,
                          leftIconAsset: L.t,
                          children: (0, i.jsx)(m.A, {
                            id: "codex.writingBlock.inlineLibrary.versionHistory",
                            defaultMessage: "Version history",
                            description: "Menu action that shows the saved note's previous versions.",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
            (l[11] = d),
            (l[12] = c),
            (l[13] = u),
            (l[14] = v),
            (l[15] = k),
            (l[16] = p),
            (l[17] = C),
            (l[18] = f),
            (l[19] = h),
            (l[20] = _),
            (l[21] = n))
          : (n = l[21]),
        l[22] !== d || l[23] !== c || l[24] !== w || l[25] !== v || l[26] !== p || l[27] !== g || l[28] !== t
          ? ((s =
              p || null == g
                ? null
                : (0, i.jsx)(M.m, {
                    content: (0, i.jsxs)("span", {
                      className: "flex items-center gap-1",
                      children: [v ? (0, i.jsx)(V.Mpc, {}) : (0, i.jsx)(V.baR, {}), t],
                    }),
                    children: (0, i.jsxs)(q.$, {
                      className: (0, R.A)(W, "min-w-0"),
                      "aria-label": t,
                      "aria-busy": w || void 0,
                      color: "ghost",
                      disabled: c || w,
                      radius: "full",
                      size: "imageToolbar",
                      onClick: (e) => g(0 === e.detail),
                      children: [
                        (0, i.jsx)("span", {
                          className: "reveal-DpiM90",
                          children: (0, i.jsx)("span", {
                            className: "min-w-0 overflow-hidden",
                            children: (0, i.jsx)("span", {
                              className: "flex w-5 items-center justify-center",
                              children: w
                                ? (0, i.jsx)(H.y, { as: "span", className: "size-5" })
                                : (0, i.jsx)(b.I, { asset: T.i }),
                            }),
                          }),
                        }),
                        (0, i.jsx)("span", { className: "min-w-0 truncate", children: d }),
                      ],
                    }),
                  })),
            (l[22] = d),
            (l[23] = c),
            (l[24] = w),
            (l[25] = v),
            (l[26] = p),
            (l[27] = g),
            (l[28] = t),
            (l[29] = s))
          : (s = l[29]),
        l[30] !== d || l[31] !== p || l[32] !== g
          ? ((r =
              p || null != g
                ? null
                : (0, i.jsx)("span", { className: "min-w-0 truncate px-3 py-2 text-tertiary", children: d })),
            (l[30] = d),
            (l[31] = p),
            (l[32] = g),
            (l[33] = r))
          : (r = l[33]),
        l[34] !== n || l[35] !== s || l[36] !== r
          ? ((o = (0, i.jsxs)("div", {
              className: "ms-2 flex min-w-0 grow items-center text-sm font-normal select-none",
              children: [n, s, r],
            })),
            (l[34] = n),
            (l[35] = s),
            (l[36] = r),
            (l[37] = o))
          : (o = l[37]),
        o
      )
    }
    function $(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        d,
        c,
        p,
        h,
        g = (0, a.c)(29),
        { children: w, libraryFileId: _, onLibraryClick: y } = e,
        v = (0, u.Ul)(F.chatGptAuthenticatedAccountId$),
        k = (0, u.Ul)(F.chatGptAuthenticatedUserId$),
        S = (0, x.Tq)(),
        C = S ? "/space/files" : "/library",
        A = (0, D.Zp)()
      ;(g[0] !== v || g[1] !== _ || g[2] !== k
        ? ((t = ["library-api", v, k, "note-location", _]), (g[0] = v), (g[1] = _), (g[2] = k), (g[3] = t))
        : (t = g[3]),
        g[4] !== v || g[5] !== _
          ? ((n =
              null == v
                ? P.hT
                : async (e) => {
                    let { signal: t } = e,
                      n = {
                        additionalHeaders: { "ChatGPT-Account-ID": v },
                        expectedErrorStatuses: [403, 404],
                        signal: t,
                      },
                      i = await f.Request.safeGet("/files/library/files/{library_file_id}", {
                        ...n,
                        parameters: { path: { library_file_id: _ } },
                      })
                    return null == i.directory_id
                      ? []
                      : (
                          await f.Request.safeGet("/files/library/directories/path", {
                            ...n,
                            parameters: { query: { directory_id: i.directory_id } },
                          })
                        ).items.filter(K)
                  }),
            (g[4] = v),
            (g[5] = _),
            (g[6] = n))
          : (n = g[6]))
      let I = null != v && null != y
      g[7] !== t || g[8] !== n || g[9] !== I
        ? ((s = { queryKey: t, queryFn: n, enabled: I, staleTime: 0, retry: !1 }),
          (g[7] = t),
          (g[8] = n),
          (g[9] = I),
          (g[10] = s))
        : (s = g[10])
      let { data: j } = (0, O.I)(s)
      ;(g[11] !== S
        ? ((r = {
            id: null,
            name: S
              ? (0, i.jsx)(m.A, {
                  id: "codex.writingBlock.inlineLibrary.location.space",
                  defaultMessage: "Space",
                  description:
                    "Location shown below the saved note title in its actions menu. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                })
              : (0, i.jsx)(m.A, {
                  id: "codex.writingBlock.inlineLibrary.location",
                  defaultMessage: "Library",
                  description: "Location shown below the saved note title in its actions menu.",
                }),
          }),
          (g[11] = S),
          (g[12] = r))
        : (r = g[12]),
        g[13] !== j ? ((o = j ?? []), (g[13] = j), (g[14] = o)) : (o = g[14]),
        g[15] !== r || g[16] !== o ? ((l = [r, ...o]), (g[15] = r), (g[16] = o), (g[17] = l)) : (l = g[17]))
      let M = l
      return (
        g[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)("span", {
              className: "flex h-lh items-center",
              children: (0, i.jsx)(b.I, { asset: E.D }),
            })),
            (g[18] = d))
          : (d = g[18]),
        g[19] !== w
          ? ((c = (0, i.jsx)("span", { className: "truncate text-default", children: w })), (g[19] = w), (g[20] = c))
          : (c = g[20]),
        g[21] !== M || g[22] !== C || g[23] !== A || g[24] !== y
          ? ((p = (0, i.jsx)("div", {
              className: "flex flex-wrap items-center gap-1 text-xs leading-dense text-tertiary",
              children: M.map((e, t) =>
                (0, i.jsxs)(
                  "span",
                  {
                    className: "flex max-w-full min-w-0 items-start gap-1",
                    children: [
                      t > 0 ? (0, i.jsx)("span", { "aria-hidden": "true", children: "/" }) : null,
                      (0, i.jsx)(U.ms.Item, {
                        className: "outline-hidden",
                        variant: "unstyled",
                        allowWrap: !0,
                        disabled: null == y,
                        onSelect: () => {
                          ;(y?.(), A(null == e.id ? C : `${C}/d/${encodeURIComponent(e.id)}`))
                        },
                        children: (0, i.jsx)("span", {
                          className: "wrap-anywhere text-tertiary group-hover:text-default group-focus:text-default",
                          children: e.name,
                        }),
                      }),
                    ],
                  },
                  e.id ?? "root",
                ),
              ),
            })),
            (g[21] = M),
            (g[22] = C),
            (g[23] = A),
            (g[24] = y),
            (g[25] = p))
          : (p = g[25]),
        g[26] !== p || g[27] !== c
          ? ((h = (0, i.jsxs)("div", {
              className: "flex min-w-0 gap-2 px-row-x py-row-y",
              children: [d, (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [c, p] })],
            })),
            (g[26] = p),
            (g[27] = c),
            (g[28] = h))
          : (h = g[28]),
        h
      )
    }
    function K(e) {
      return !e.is_root
    }
    var Z = n("WyKj"),
      Q = n("Haiv"),
      Y = n("QhQG"),
      J = n("AxFa"),
      X = n("SGsN"),
      ee = n("rO8L"),
      et = n("BA9i"),
      en = n("H7Ld"),
      ei = n("cLdu"),
      ea = n("nf3G"),
      es = n("Nwp9")
    let er = (0, es.m3)("writing-block-presentation-format", "spaces", {
      coerceStoredValue: (e) => ("google-slides" === e || "powerpoint" === e ? e : "spaces"),
    })
    function eo(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        d,
        c,
        f,
        h,
        g,
        w,
        x,
        _,
        y,
        v,
        S,
        C,
        A,
        I,
        j,
        M,
        B,
        L = (0, a.c)(59),
        { content: T, conversationId: E, disabled: N, onSubmittingChange: P, writingBlockId: O } = e,
        R = (0, u.gh)(k.u),
        D = (0, G.A)(),
        F = (0, u.Ul)(ea.threadCwd$),
        q = (0, u.Ul)(ea.threadHostId$),
        W = (0, u.Ul)(er)
      L[0] !== q ? ((t = { hostId: q }), (L[0] = q), (L[1] = t)) : (t = L[1])
      let z = (0, ee.J)(t)
      ;(L[2] !== F ? ((n = null == F ? void 0 : [F]), (L[2] = F), (L[3] = n)) : (n = L[3]),
        L[4] !== q || L[5] !== z || L[6] !== n
          ? ((s = { enabled: z, hostId: q, resolveActiveRoots: !0, roots: n }),
            (L[4] = q),
            (L[5] = z),
            (L[6] = n),
            (L[7] = s))
          : (s = L[7]))
      let { data: $, isLoading: K } = (0, ei.Kj)(s)
      L[8] !== $ || L[9] !== z ? ((r = z ? $?.find(el) : void 0), (L[8] = $), (L[9] = z), (L[10] = r)) : (r = L[10])
      let et = r,
        [es, eo] = (0, p.useState)(!1)
      L[11] !== E || L[12] !== W || L[13] !== D || L[14] !== P || L[15] !== et || L[16] !== R || L[17] !== O
        ? ((o = () => {
            ;(eo(!0), P(!0))
            let e = D.formatMessage({
                id: "codex.writingBlock.slides.create.promptWithOutlineAbove",
                defaultMessage: "make a presentation with the outline above",
                description:
                  "User message following a Presentations plugin mention that asks Codex to create a presentation from the selected presentation outline above",
              }),
              t =
                null == et
                  ? e
                  : (0, en.KH)({ defaultPrompt: e, pluginDisplayName: (0, Q.V)(et), pluginId: et.plugin.id })
            ;(0, Y.d)({
              scope: R,
              additionalContext: {
                codex_apps_artifact_outline: {
                  kind: "untrusted",
                  value: `Use the presentation outline in writing block "${O}".`,
                },
                codex_apps_artifact_platform: {
                  kind: "untrusted",
                  value: {
                    "google-slides": "Create the presentation in Google Slides.",
                    spaces: "Create and save a native presentation Page in Spaces.",
                    powerpoint: "Create the presentation as a PowerPoint (.pptx) file.",
                  }[W],
                },
              },
              turnTrigger: "slides_outline",
              model: void 0,
              prompt: t,
              threadId: E,
              thinking: void 0,
            })
              .catch(() => {
                R.get(X.Id).danger(
                  D.formatMessage({
                    id: "codex.writingBlock.slides.create.error",
                    defaultMessage: "Couldn’t create slides from the presentation outline",
                    description:
                      "Error toast shown when a presentation outline cannot be sent to the current Codex task",
                  }),
                  { errorAnalytics: { toastId: "codex.writingBlock.slides.create.error" } },
                )
              })
              .finally(() => {
                ;(eo(!1), P(!1))
              })
          }),
          (L[11] = E),
          (L[12] = W),
          (L[13] = D),
          (L[14] = P),
          (L[15] = et),
          (L[16] = R),
          (L[17] = O),
          (L[18] = o))
        : (o = L[18])
      let ed = o
      L[19] !== T || L[20] !== N || L[21] !== K || L[22] !== es
        ? ((l = N || es || K || 0 === T.trim().length),
          (L[19] = T),
          (L[20] = N),
          (L[21] = K),
          (L[22] = es),
          (L[23] = l))
        : (l = L[23])
      let ec = l
      L[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            spaces: (0, i.jsx)(m.A, {
              id: "codex.writingBlock.slides.create.spacesButton",
              defaultMessage: "Create presentation",
              description: "Button to create the outlined presentation in Spaces",
            }),
            "google-slides": (0, i.jsx)(m.A, {
              id: "codex.writingBlock.slides.create.googleSlidesButton",
              defaultMessage: "Create Google Slides",
              description: "Button to create the outlined presentation in Google Slides",
            }),
            powerpoint: (0, i.jsx)(m.A, {
              id: "codex.writingBlock.slides.create.powerPointButton",
              defaultMessage: "Create PowerPoint",
              description: "Button to create the outlined PowerPoint presentation",
            }),
          }),
          (L[24] = d))
        : (d = L[24])
      let eu = d[W]
      return (
        L[25] !== D
          ? ((c = D.formatMessage({
              id: "codex.writingBlock.slides.create.chooseFormat",
              defaultMessage: "Choose presentation format",
              description:
                "Accessible label for the dropdown button that selects the destination for the completed presentation outline",
            })),
            (L[25] = D),
            (L[26] = c))
          : (c = L[26]),
        L[27] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, i.jsx)(V.AdV, {})), (L[27] = f)) : (f = L[27]),
        L[28] !== R ? ((h = () => R.set(er, "spaces")), (L[28] = R), (L[29] = h)) : (h = L[29]),
        L[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(m.A, {
              id: "codex.writingBlock.slides.create.spacesOption",
              defaultMessage: "Spaces",
              description: "Presentation destination option for creating a native Spaces presentation",
            })),
            (L[30] = g))
          : (g = L[30]),
        L[31] !== h
          ? ((w = (0, i.jsx)(U.ms.RadioItem, { icon: f, onSelect: h, value: "spaces", children: g })),
            (L[31] = h),
            (L[32] = w))
          : (w = L[32]),
        L[33] === Symbol.for("react.memo_cache_sentinel") ? ((x = (0, i.jsx)(V.xxq, {})), (L[33] = x)) : (x = L[33]),
        L[34] !== R ? ((_ = () => R.set(er, "powerpoint")), (L[34] = R), (L[35] = _)) : (_ = L[35]),
        L[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(m.A, {
              id: "codex.writingBlock.slides.create.powerPointOption",
              defaultMessage: "PowerPoint",
              description:
                "Presentation destination option that creates a native Spaces presentation on web or a PowerPoint file on desktop",
            })),
            (L[36] = y))
          : (y = L[36]),
        L[37] !== _
          ? ((v = (0, i.jsx)(U.ms.RadioItem, { icon: x, onSelect: _, value: "powerpoint", children: y })),
            (L[37] = _),
            (L[38] = v))
          : (v = L[38]),
        L[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)(b.I, { asset: Z.m })), (L[39] = S))
          : (S = L[39]),
        L[40] !== R ? ((C = () => R.set(er, "google-slides")), (L[40] = R), (L[41] = C)) : (C = L[41]),
        L[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(m.A, {
              id: "codex.writingBlock.slides.create.googleSlidesOption",
              defaultMessage: "Google Slides",
              description:
                "Presentation format dropdown option for creating a Google Slides presentation from a completed presentation outline",
            })),
            (L[42] = A))
          : (A = L[42]),
        L[43] !== C
          ? ((I = (0, i.jsx)(U.ms.RadioItem, { icon: S, onSelect: C, value: "google-slides", children: A })),
            (L[43] = C),
            (L[44] = I))
          : (I = L[44]),
        L[45] !== W || L[46] !== w || L[47] !== v || L[48] !== I
          ? ((j = (0, i.jsxs)(U.ms.RadioGroup, { value: W, children: [w, v, I] })),
            (L[45] = W),
            (L[46] = w),
            (L[47] = v),
            (L[48] = I),
            (L[49] = j))
          : (j = L[49]),
        L[50] !== es ? ((M = es && (0, i.jsx)(H.y, { className: "icon-xs" })), (L[50] = es), (L[51] = M)) : (M = L[51]),
        L[52] !== ed || L[53] !== eu || L[54] !== ec || L[55] !== j || L[56] !== M || L[57] !== c
          ? ((B = (0, i.jsxs)(J._, {
              className: "my-auto",
              color: "composerPrimary",
              disabled: ec,
              dropdownAlign: "end",
              dropdownContentWidth: "menuBounded",
              dropdownContentLayout: "custom",
              onClick: ed,
              radius: "full",
              secondaryAriaLabel: c,
              size: "dialog",
              type: "button",
              dropdownContent: j,
              children: [M, eu],
            })),
            (L[52] = ed),
            (L[53] = eu),
            (L[54] = ec),
            (L[55] = j),
            (L[56] = M),
            (L[57] = c),
            (L[58] = B))
          : (B = L[58]),
        B
      )
    }
    function el(e) {
      return e.plugin.enabled && "DISABLED_BY_ADMIN" !== e.plugin.availability && (0, et.ho)(e)
    }
    var ed = n("rPLd"),
      ec = n("YAOF"),
      eu = n("LIss"),
      ep = n("suct"),
      em = n("v7qY"),
      ef = n("Qgfj"),
      eh = n("T1PX"),
      eg = n("nsuH"),
      eb = n("V8uZ"),
      ew = n("HgLj")
    function ex(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        d,
        c,
        u,
        f,
        h,
        g,
        w,
        x,
        _,
        y,
        v,
        k,
        S,
        C,
        A,
        I,
        j,
        M,
        B,
        L,
        T,
        E,
        N,
        P,
        O,
        D = (0, a.c)(109),
        {
          disabled: F,
          isOpen: U,
          onOpenChange: W,
          onSubmittingChange: z,
          onSlideCountChange: $,
          onCancel: K,
          slideCount: Z,
        } = e,
        Q = (0, G.A)(),
        [Y, J] = (0, p.useState)(!1),
        [X, ee] = (0, p.useState)(!1),
        et = (0, eh.I)(),
        en = (0, p.useRef)(null),
        ei = (0, p.useRef)(null),
        ea = (0, p.useRef)(null),
        es = (0, p.useRef)(!1),
        [er, eo] = (0, p.useState)()
      D[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e, t) => {
            eo(t.clientWidth)
          }),
          (D[0] = t))
        : (t = D[0])
      let el = (0, eg.wY)(t),
        ex = Math.max(1, Z),
        [ev, ek] = (0, p.useState)(Math.max(20, ex + 10)),
        [eS, eC] = (0, p.useState)(!1),
        [eA, eI] = (0, p.useState)(ex),
        ej = Y || X || (!F && (U ?? eS)),
        eM = 0.15 * !et
      if (X) {
        let e
        ;(D[1] !== Q
          ? ((e = Q.formatMessage({
              id: "codex.writingBlock.slides.slideCount.updated",
              defaultMessage: "Slide count updated",
              description:
                "Accessible confirmation that the presentation outline was successfully rewritten to the requested slide count",
            })),
            (D[1] = Q),
            (D[2] = e))
          : (e = D[2]),
          (n = e))
      } else if (Y) {
        let e
        ;(D[3] !== Q
          ? ((e = Q.formatMessage({
              id: "codex.writingBlock.slides.slideCount.cancel",
              defaultMessage: "Cancel slide count change",
              description: "Accessible name for cancelling an in-progress presentation outline rewrite",
            })),
            (D[3] = Q),
            (D[4] = e))
          : (e = D[4]),
          (n = e))
      } else {
        let e
        ;(D[5] !== Q
          ? ((e = Q.formatMessage({
              id: "codex.writingBlock.slides.slideCount.confirm",
              defaultMessage: "Confirm slide count",
              description:
                "Accessible name for the button that applies a new slide count to an editable Codex presentation outline using Magic Edit",
            })),
            (D[5] = Q),
            (D[6] = e))
          : (e = D[6]),
          (n = e))
      }
      D[7] !== ex || D[8] !== U || D[9] !== W
        ? ((s = (e) => {
            ;(ee(!1), e && (ek(Math.max(20, ex + 10)), eI(ex)), null == U && eC(e), W?.(e))
          }),
          (D[7] = ex),
          (D[8] = U),
          (D[9] = W),
          (D[10] = s))
        : (s = D[10])
      let eB = s
      D[11] !== eB
        ? ((r = () => {
            let e = es.current
            ;((0, em.flushSync)(() => eB(!1)), e && ei.current?.focus())
          }),
          (D[11] = eB),
          (D[12] = r))
        : (r = D[12])
      let eL = r
      D[13] !== Y || D[14] !== eB
        ? ((o = (e) => {
            null != en.current && !e.composedPath().includes(en.current) && ((es.current = !1), Y || eB(!1))
          }),
          (D[13] = Y),
          (D[14] = eB),
          (D[15] = o))
        : (o = D[15])
      let eT = (0, p.useEffectEvent)(o)
      ;(D[16] !== eT || D[17] !== ej
        ? ((l = () => {
            if (!ej) return
            let e = en.current?.ownerDocument
            if (null == e) return
            let t = (e) => {
              es.current = null != en.current && e.composedPath().includes(en.current)
            }
            return (
              e.addEventListener("focusin", t),
              e.addEventListener("pointerdown", eT, !0),
              () => {
                ;(e.removeEventListener("focusin", t), e.removeEventListener("pointerdown", eT, !0))
              }
            )
          }),
          (D[16] = eT),
          (D[17] = ej),
          (D[18] = l))
        : (l = D[18]),
        D[19] !== ej ? ((d = [ej]), (D[19] = ej), (D[20] = d)) : (d = D[20]),
        (0, p.useEffect)(l, d),
        D[21] !== el ? ((c = (0, ew.P)(en, el)), (D[21] = el), (D[22] = c)) : (c = D[22]))
      let eE = (F || Y) && "opacity-40"
      D[23] !== eE
        ? ((u = (0, R.A)("relative flex h-9 w-72 max-w-full min-w-0 items-center select-none sm:w-80", eE)),
          (D[23] = eE),
          (D[24] = u))
        : (u = D[24])
      let eN = ej && "pointer-events-none"
      D[25] !== eN
        ? ((f = (0, R.A)(
            "group/slide-count relative flex h-full min-w-0 shrink-0 cursor-interaction items-center rounded-full px-3 text-sm font-medium text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default",
            eN,
          )),
          (D[25] = eN),
          (D[26] = f))
        : (f = D[26])
      let eP = ej || void 0,
        eO = F || Y
      D[27] !== eB
        ? ((h = () => {
            ;((0, em.flushSync)(() => eB(!0)), ea.current?.focus())
          }),
          (D[27] = eB),
          (D[28] = h))
        : (h = D[28])
      let eR = ej ? -1 : void 0,
        eG = !ej && !F && "group-hover/slide-count:bg-primary-ghost-hover"
      D[29] !== eG
        ? ((g = (0, R.A)(
            "pointer-events-none absolute inset-y-0 start-0 rounded-full border border-default bg-surface",
            eG,
          )),
          (D[29] = eG),
          (D[30] = g))
        : (g = D[30])
      let eD = ej ? er : "100%"
      ;(D[31] !== eD ? ((w = { width: eD }), (D[31] = eD), (D[32] = w)) : (w = D[32]),
        D[33] !== et ? ((x = et ? { duration: 0 } : eb.RH), (D[33] = et), (D[34] = x)) : (x = D[34]),
        D[35] !== g || D[36] !== w || D[37] !== x
          ? ((_ = (0, i.jsx)(eu.P.span, { className: g, animate: w, initial: !1, transition: x })),
            (D[35] = g),
            (D[36] = w),
            (D[37] = x),
            (D[38] = _))
          : (_ = D[38]),
        D[39] === Symbol.for("react.memo_cache_sentinel") ? ((y = (0, i.jsx)(V.AdV, {})), (D[39] = y)) : (y = D[39]),
        D[40] !== ev || D[41] !== ej || D[42] !== Z
          ? ((v = (0, i.jsx)("span", {
              "aria-hidden": !0,
              className: "invisible col-start-1 row-start-1",
              children: ej ? (0, i.jsx)(ef.Gr, { value: ev }) : (0, i.jsx)(m.A, { ...ey, values: { count: Z } }),
            })),
            (D[40] = ev),
            (D[41] = ej),
            (D[42] = Z),
            (D[43] = v))
          : (v = D[43]))
      let eF = +!!ej
      D[44] !== eF ? ((k = { opacity: eF }), (D[44] = eF), (D[45] = k)) : (k = D[45])
      let eq = ej ? 0 : eM
      ;(D[46] !== eM || D[47] !== eq
        ? ((S = { duration: eM, delay: eq }), (D[46] = eM), (D[47] = eq), (D[48] = S))
        : (S = D[48]),
        D[49] !== eA ? ((C = (0, i.jsx)(ef.Gr, { value: eA })), (D[49] = eA), (D[50] = C)) : (C = D[50]),
        D[51] !== k || D[52] !== S || D[53] !== C
          ? ((A = (0, i.jsx)(eu.P.span, {
              className: "col-start-1 row-start-1",
              animate: k,
              initial: !1,
              transition: S,
              "aria-hidden": !0,
              children: C,
            })),
            (D[51] = k),
            (D[52] = S),
            (D[53] = C),
            (D[54] = A))
          : (A = D[54]))
      let eU = +!ej
      D[55] !== eU ? ((I = { opacity: eU }), (D[55] = eU), (D[56] = I)) : (I = D[56])
      let eV = ej ? 0 : eM
      ;(D[57] !== eM || D[58] !== eV
        ? ((j = { duration: eM, delay: eV }), (D[57] = eM), (D[58] = eV), (D[59] = j))
        : (j = D[59]),
        D[60] !== Z ? ((M = (0, i.jsx)(m.A, { ...ey, values: { count: Z } })), (D[60] = Z), (D[61] = M)) : (M = D[61]),
        D[62] !== ej || D[63] !== I || D[64] !== j || D[65] !== M
          ? ((B = (0, i.jsx)(eu.P.span, {
              className: "absolute inset-y-0 start-0 whitespace-nowrap",
              animate: I,
              initial: !1,
              transition: j,
              "aria-hidden": ej,
              children: M,
            })),
            (D[62] = ej),
            (D[63] = I),
            (D[64] = j),
            (D[65] = M),
            (D[66] = B))
          : (B = D[66]),
        D[67] !== v || D[68] !== A || D[69] !== B
          ? ((L = (0, i.jsxs)("span", {
              className: "relative flex items-center gap-1.5",
              children: [
                y,
                (0, i.jsxs)("span", { className: "relative grid text-start tabular-nums", children: [v, A, B] }),
              ],
            })),
            (D[67] = v),
            (D[68] = A),
            (D[69] = B),
            (D[70] = L))
          : (L = D[70]),
        D[71] !== ej ||
        D[72] !== f ||
        D[73] !== eP ||
        D[74] !== eO ||
        D[75] !== h ||
        D[76] !== eR ||
        D[77] !== _ ||
        D[78] !== L
          ? ((T = (0, i.jsxs)("button", {
              ref: ei,
              className: f,
              "aria-expanded": ej,
              "aria-hidden": eP,
              disabled: eO,
              onClick: h,
              type: "button",
              tabIndex: eR,
              children: [_, L],
            })),
            (D[71] = ej),
            (D[72] = f),
            (D[73] = eP),
            (D[74] = eO),
            (D[75] = h),
            (D[76] = eR),
            (D[77] = _),
            (D[78] = L),
            (D[79] = T))
          : (T = D[79]))
      let eH = !ej,
        eW = !ej
      return (
        D[80] !== n ||
        D[81] !== F ||
        D[82] !== eA ||
        D[83] !== eM ||
        D[84] !== eL ||
        D[85] !== Q ||
        D[86] !== Y ||
        D[87] !== X ||
        D[88] !== ev ||
        D[89] !== K ||
        D[90] !== $ ||
        D[91] !== z ||
        D[92] !== ej ||
        D[93] !== eB ||
        D[94] !== et ||
        D[95] !== Z
          ? ((E =
              ej &&
              (0, i.jsxs)(eu.P.div, {
                className: "relative flex h-full min-w-0 flex-1 items-center gap-2 pe-1.5",
                animate: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0, transition: { duration: eM, delay: 0 } },
                transition: { duration: eM, delay: eM, ease: eb.Wu },
                onKeyDownCapture: (e) => {
                  if ("Escape" === e.key) {
                    if ((e.preventDefault(), e.stopPropagation(), Y)) return void K?.()
                    ;((0, em.flushSync)(() => eB(!1)), ei.current?.focus())
                  }
                },
                children: [
                  (0, i.jsxs)(ec.bL, {
                    className: "relative flex h-6 min-w-0 flex-1 touch-none items-center",
                    disabled: !ej || F || Y || X,
                    max: ev,
                    min: 1,
                    onValueChange: (e) => {
                      let [t] = e
                      null != t && eI(t)
                    },
                    step: 1,
                    value: [eA],
                    children: [
                      (0, i.jsx)(ec.CC, {
                        className: "relative h-4 grow overflow-hidden rounded-full bg-text/5",
                        children: (0, i.jsx)("span", {
                          className:
                            "pointer-events-none absolute inset-x-2 inset-y-0 flex items-center justify-between",
                          children: Array.from({ length: Math.min(ev, 20) }, e_),
                        }),
                      }),
                      (0, i.jsx)(ec.zi, {
                        ref: ea,
                        "aria-label": Q.formatMessage({
                          id: "codex.writingBlock.slides.slideCount.slider",
                          defaultMessage: "Number of presentation slides",
                          description:
                            "Accessible name for the keyboard-operable slider that adjusts the number of slides in a Codex presentation outline",
                        }),
                        "aria-valuetext": Q.formatMessage(
                          {
                            id: "codex.writingBlock.slides.slideCount.value",
                            defaultMessage: "{count, plural, one {# slide} other {# slides}}",
                            description:
                              "Current presentation slide count announced to screen-reader users while adjusting an outline; count is the positive number of slides",
                          },
                          { count: eA },
                        ),
                        autoFocus: ej,
                        className:
                          "block h-6 w-2 rounded-full border border-default bg-surface shadow-sm transition-transform duration-basic ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring motion-safe:active:scale-110 motion-reduce:transition-none",
                      }),
                    ],
                  }),
                  (0, i.jsxs)(q.$, {
                    "aria-label": n,
                    color: "composerPrimary",
                    disabledAppearance: F || Y || X || !ej ? "unchanged" : "dimmed",
                    disabled: X || (Y ? null == K : !ej || F || eA === Z),
                    onClick: () => {
                      Y
                        ? K?.()
                        : ((es.current = en.current?.contains(en.current.ownerDocument.activeElement) ?? !1),
                          J(!0),
                          z?.(!0),
                          $(eA)
                            .finally(() => {
                              ;(0, em.flushSync)(() => {
                                ;(J(!1), z?.(!1))
                              })
                            })
                            .then((e) => {
                              e && (et ? eL() : ee(!0))
                            }))
                    },
                    radius: "full",
                    size: "compact",
                    uniform: !0,
                    children: [
                      X &&
                        (0, i.jsx)(eu.P.span, {
                          animate: { opacity: [0, 1, 1] },
                          initial: { opacity: 0 },
                          onAnimationComplete: eL,
                          transition: { duration: 0.3 },
                          children: (0, i.jsx)(V.yIE, {}),
                        }),
                      !X && Y && (0, i.jsx)(H.y, { className: "icon-xs" }),
                      !X && !Y && (0, i.jsx)(b.I, { asset: ed.l }),
                    ],
                  }),
                ],
              })),
            (D[80] = n),
            (D[81] = F),
            (D[82] = eA),
            (D[83] = eM),
            (D[84] = eL),
            (D[85] = Q),
            (D[86] = Y),
            (D[87] = X),
            (D[88] = ev),
            (D[89] = K),
            (D[90] = $),
            (D[91] = z),
            (D[92] = ej),
            (D[93] = eB),
            (D[94] = et),
            (D[95] = Z),
            (D[96] = E))
          : (E = D[96]),
        D[97] !== E
          ? ((N = (0, i.jsx)(ep.N, { initial: !1, mode: "popLayout", children: E })), (D[97] = E), (D[98] = N))
          : (N = D[98]),
        D[99] !== eH || D[100] !== eW || D[101] !== N
          ? ((P = (0, i.jsx)("div", { className: "contents", "aria-hidden": eH, inert: eW, children: N })),
            (D[99] = eH),
            (D[100] = eW),
            (D[101] = N),
            (D[102] = P))
          : (P = D[102]),
        D[103] !== Y || D[104] !== T || D[105] !== P || D[106] !== c || D[107] !== u
          ? ((O = (0, i.jsxs)("div", { ref: c, className: u, "aria-busy": Y, children: [T, P] })),
            (D[103] = Y),
            (D[104] = T),
            (D[105] = P),
            (D[106] = c),
            (D[107] = u),
            (D[108] = O))
          : (O = D[108]),
        O
      )
    }
    function e_(e, t) {
      return (0, i.jsx)("span", { "aria-hidden": !0, className: "size-1 shrink-0 rounded-full bg-text/20" }, t)
    }
    let ey = (0, ef.zR)({
      id: "codex.writingBlock.slides.slideCount.button",
      defaultMessage: "{count, plural, one {# slide} other {# slides}}",
      description:
        "Button showing the current or requested number of slides in an editable Codex presentation outline; selecting the button opens the slide-count adjustment slider",
    })
    var ev = n("PXgF"),
      ek = n("Ot7V"),
      eS = n("YjqN"),
      eC = n("ripK")
    function eA(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        d,
        c,
        h,
        g,
        b,
        w,
        x = (0, a.c)(54),
        {
          appearance: _,
          content: y,
          isDisabled: v,
          messageId: S,
          onBeforeExport: C,
          renderAsSubmenu: I,
          serverConversationId: j,
          title: B,
          writingBlockIndex: L,
        } = e,
        T = void 0 === _ ? "inline" : _,
        E = void 0 !== I && I,
        N = (0, u.gh)(k.u),
        P = (0, G.A)(),
        [O, R] = (0, p.useState)(!1)
      x[0] !== P
        ? ((t = P.formatMessage({
            id: "codex.writingBlock.download.label",
            defaultMessage: "Download",
            description:
              "Tooltip and accessible name for the download menu in a Codex Apps document writing block. The menu offers Markdown, PDF, and Microsoft Word formats when available.",
          })),
          (x[0] = P),
          (x[1] = t))
        : (t = x[1])
      let D = t,
        F = null != j && null != S && null != L
      x[2] !== y || x[3] !== B
        ? ((n = () => {
            let e = (B ?? "writing-block").replaceAll("/", "-").replaceAll("\\", "-").trim(),
              t = /\.md$/i.test(e) ? e : `${e || "writing-block"}.md`
            ;(0, eC.W)(new Blob(["function" == typeof y ? y() : y], { type: "text/markdown;charset=utf-8" }), t)
          }),
          (x[2] = y),
          (x[3] = B),
          (x[4] = n))
        : (n = x[4])
      let W = n
      x[5] !== P || x[6] !== S || x[7] !== C || x[8] !== N || x[9] !== j || x[10] !== L
        ? ((s = (e) => {
            null != j &&
              null != S &&
              null != L &&
              (R(!0),
              Promise.resolve(C?.())
                .then(() =>
                  f.Request.safePost("/export_doc/writing_block/file", {
                    requestBody: { conversation_id: j, export_type: e, index: L, message_id: S },
                  }),
                )
                .then(eI)
                .catch(() => {
                  N.get(X.Id).danger(
                    P.formatMessage({
                      id: "codex.writingBlock.download.error",
                      defaultMessage: "Download failed",
                      description:
                        "Error toast shown when downloading a Codex Apps document writing block as a PDF or Microsoft Word file fails.",
                    }),
                    { errorAnalytics: { toastId: "codex.writingBlock.download.error" } },
                  )
                })
                .finally(() => R(!1)))
          }),
          (x[5] = P),
          (x[6] = S),
          (x[7] = C),
          (x[8] = N),
          (x[9] = j),
          (x[10] = L),
          (x[11] = s))
        : (s = x[11])
      let z = s,
        $ = v || O
      ;(x[12] !== W || x[13] !== E
        ? ((r = (e) => {
            ;(E && e.preventDefault(), W())
          }),
          (x[12] = W),
          (x[13] = E),
          (x[14] = r))
        : (r = x[14]),
        x[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(U.ms.ItemIcon, {
              size: "md",
              children: (0, i.jsx)(eS.B, {
                className: "size-5",
                "aria-hidden": !0,
                fileName: void 0,
                mimeType: "text/markdown",
              }),
            })),
            (l = (0, i.jsx)(m.A, {
              id: "codex.writingBlock.download.markdown",
              defaultMessage: "Markdown document",
              description:
                "Menu item that downloads a Codex Apps document writing block as a Markdown file with the .md extension.",
            })),
            (x[15] = o),
            (x[16] = l))
          : ((o = x[15]), (l = x[16])),
        x[17] !== $ || x[18] !== r
          ? ((d = (0, i.jsxs)(U.ms.Item, { disabled: $, onSelect: r, children: [o, l] })),
            (x[17] = $),
            (x[18] = r),
            (x[19] = d))
          : (d = x[19]),
        x[20] !== F || x[21] !== z || x[22] !== v || x[23] !== O || x[24] !== E
          ? ((c = F
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(U.ms.Item, {
                      disabled: v || O,
                      onSelect: (e) => {
                        ;(E && e.preventDefault(), z("pdf"))
                      },
                      children: [
                        (0, i.jsx)(U.ms.ItemIcon, {
                          size: "md",
                          children: (0, i.jsx)(eS.B, {
                            className: "size-5",
                            "aria-hidden": !0,
                            fileName: void 0,
                            mimeType: "application/pdf",
                          }),
                        }),
                        (0, i.jsx)(m.A, {
                          id: "codex.writingBlock.download.pdf",
                          defaultMessage: "PDF document",
                          description:
                            "Menu item that downloads a Codex Apps document writing block as a PDF file with the .pdf extension.",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(U.ms.Item, {
                      disabled: v || O,
                      onSelect: (e) => {
                        ;(E && e.preventDefault(), z("docx"))
                      },
                      children: [
                        (0, i.jsx)(U.ms.ItemIcon, {
                          size: "md",
                          children: (0, i.jsx)(eS.B, {
                            className: "size-5",
                            "aria-hidden": !0,
                            fileName: void 0,
                            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          }),
                        }),
                        (0, i.jsx)(m.A, {
                          id: "codex.writingBlock.download.word",
                          defaultMessage: "Microsoft Word",
                          description:
                            "Menu item that downloads a Codex Apps document writing block as a Microsoft Word file with the .docx extension.",
                        }),
                      ],
                    }),
                  ],
                })
              : null),
            (x[20] = F),
            (x[21] = z),
            (x[22] = v),
            (x[23] = O),
            (x[24] = E),
            (x[25] = c))
          : (c = x[25]),
        x[26] !== d || x[27] !== c
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [d, c] })), (x[26] = d), (x[27] = c), (x[28] = h))
          : (h = x[28]))
      let K = h
      if (E) {
        let e
        if (!F) {
          let e
          return (
            x[29] !== D || x[30] !== W || x[31] !== v
              ? ((e = (0, i.jsx)(U.ms.Item, { disabled: v, leftIconAsset: ev.r, onSelect: W, children: D })),
                (x[29] = D),
                (x[30] = W),
                (x[31] = v),
                (x[32] = e))
              : (e = x[32]),
            e
          )
        }
        let t = v || O,
          n = O ? void 0 : ev.r,
          a = O ? "size-5" : void 0
        return (
          x[33] !== D || x[34] !== K || x[35] !== t || x[36] !== n || x[37] !== a
            ? ((e = (0, i.jsx)(U.ms.FlyoutSubmenuItem, {
                ariaLabel: D,
                contentWidth: "menuBounded",
                disabled: t,
                label: D,
                leftIconAsset: n,
                leftIconClassName: a,
                LeftIcon: H.y,
                children: K,
              })),
              (x[33] = D),
              (x[34] = K),
              (x[35] = t),
              (x[36] = n),
              (x[37] = a),
              (x[38] = e))
            : (e = x[38]),
          e
        )
      }
      ;(x[39] !== T || x[40] !== F || x[41] !== D || x[42] !== W || x[43] !== v || x[44] !== O
        ? ((g =
            "viewer" === T
              ? (0, i.jsx)(A.DW, {
                  "aria-label": D,
                  disabled: v || O,
                  onClick: F ? void 0 : W,
                  uniform: !0,
                  children: O ? (0, i.jsx)(H.y, { className: "size-5" }) : (0, i.jsx)(V.vHO, {}),
                })
              : (0, i.jsx)(q.$, {
                  "aria-label": D,
                  color: "ghostActive",
                  disabled: v || O,
                  onClick: F ? void 0 : W,
                  size: "imageToolbar",
                  uniform: !0,
                  children: O ? (0, i.jsx)(H.y, { className: "size-5" }) : (0, i.jsx)(V.vHO, {}),
                })),
          (x[39] = T),
          (x[40] = F),
          (x[41] = D),
          (x[42] = W),
          (x[43] = v),
          (x[44] = O),
          (x[45] = g))
        : (g = x[45]),
        x[46] !== D || x[47] !== g
          ? ((b = (0, i.jsx)(M.m, { sideOffset: 0, content: D, children: g })), (x[46] = D), (x[47] = g), (x[48] = b))
          : (b = x[48]))
      let Z = b
      if (!F) return Z
      let Q = "viewer" === T ? A.OZ : U.Ab,
        Y = v || O
      return (
        x[49] !== Q || x[50] !== Z || x[51] !== K || x[52] !== Y
          ? ((w = (0, i.jsx)(Q, {
              align: "end",
              contentWidth: "menuBounded",
              disabled: Y,
              triggerButton: Z,
              children: K,
            })),
            (x[49] = Q),
            (x[50] = Z),
            (x[51] = K),
            (x[52] = Y),
            (x[53] = w))
          : (w = x[53]),
        w
      )
    }
    function eI(e) {
      ;(0, ek.E0)({ href: e.download_url, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    var ej = n("Jaao")
    let eM = "inProgressSendId",
      eB = "senderLinkId",
      eL = /<([^<>]+)>/
    function eT(e) {
      let t = [],
        n = new Set()
      for (let i of eG(e)) {
        let e = i.toLowerCase()
        !(0, ej.SW)(i) || n.has(e) || (n.add(e), t.push(i))
      }
      return t
    }
    function eE(e) {
      return eG(e).some((e) => !(0, ej.SW)(e))
    }
    function eN({ to: e, cc: t, bcc: n }) {
      return e.length > 0 || t.length > 0 || n.length > 0
    }
    function eP(e) {
      return "sending_in_progress" === e.kind || "polling_final" === e.kind
    }
    function eO(e) {
      return e?.isSent === !0
    }
    function eR(e) {
      return (function (e) {
        if (null == e || "object" != typeof e) return
        let { type: t, referenceMessageId: n, provider: i } = e
        if ("reply" !== t || "string" != typeof n || "string" != typeof i) return
        let a = n.trim(),
          s = i.trim()
        if (0 !== a.length && ("gmail" === s || "outlook" === s)) return { type: t, referenceMessageId: a, provider: s }
      })(e?.emailAction)
    }
    function eG(e) {
      let t = []
      for (let n of e.split(/[;,\n]+/)) {
        let e = n.trim()
        0 !== e.length && t.push(e.match(eL)?.[1]?.trim() ?? e)
      }
      return t
    }
    var eD = n("rGp2")
    let eF = (0, n("nkTT").a)({
      name: "open-link-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.334961, y: 2.505371, width: 14.15918, height: 14.15918 },
        visualBounds: { x: 3.334961, y: 2.505371, width: 14.15918, height: 14.15918 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.334961, y: 2.505371, width: 14.15918, height: 14.15918 },
        center: { x: 10.414551, y: 9.584961 },
        insets: { top: 2.505371, right: 2.505859, bottom: 3.335449, left: 3.334961 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.414551, y: 9.584961 },
          foreground: { x: 10.414551, y: 9.584961 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M8.33301 3.33447C8.70014 3.33447 8.99782 3.63243 8.99805 3.99951C8.99805 4.36678 8.70028 4.66455 8.33301 4.66455H6.66699C5.56164 4.66455 4.66526 5.56121 4.66504 6.6665V13.3325C4.66504 14.438 5.5615 15.3345 6.66699 15.3345H13.333C14.4385 15.3345 15.335 14.438 15.335 13.3325V11.6665C15.3352 11.2994 15.6329 11.0015 16 11.0015C16.3671 11.0015 16.6648 11.2994 16.665 11.6665V13.3325C16.665 15.1725 15.173 16.6646 13.333 16.6646H6.66699C4.82696 16.6646 3.33496 15.1725 3.33496 13.3325V6.6665C3.33519 4.82667 4.8271 3.33447 6.66699 3.33447H8.33301Z" fill="currentColor"/> <path d="M16.5781 2.50537C17.0833 2.50537 17.4929 2.91526 17.4932 3.42041L17.4941 7.46436C17.4939 7.83141 17.1952 8.12939 16.8281 8.12939C16.4612 8.12912 16.1633 7.83124 16.1631 7.46436V4.78467L11.2793 9.66846C11.0196 9.92812 10.5986 9.92804 10.3389 9.66846C10.0792 9.40876 10.0792 8.98773 10.3389 8.72803L15.2305 3.83545L12.5352 3.83643C12.168 3.83631 11.8701 3.53761 11.8701 3.17041C11.8703 2.8034 12.1681 2.50548 12.5352 2.50537H16.5781Z" fill="currentColor"/>',
    })
    var eq = n("gLcf"),
      eU = n("Ed65"),
      eV = n("DlCK")
    function eH(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        d,
        c,
        u,
        p,
        f,
        h,
        g,
        w,
        x,
        _,
        y,
        v,
        k,
        S,
        C,
        A,
        I,
        j,
        B,
        L,
        T = (0, a.c)(57),
        { disabled: E, onOpen: N } = e,
        P = void 0 !== E && E,
        O = (0, G.A)()
      T[0] !== O
        ? ((t = O.formatMessage({
            id: "chatgptConversations.writingBlock.email.open.tooltip",
            defaultMessage: "Open in email",
            description:
              "Tooltip for an action in a Codex Apps Quick Chat email writing block. The action opens the draft in the user's email provider with its fields prefilled.",
          })),
          (T[0] = O),
          (T[1] = t))
        : (t = T[1])
      let R = t
      T[2] !== O
        ? ((n = O.formatMessage({
            id: "chatgptConversations.writingBlock.email.open.dropdown.ariaLabel",
            defaultMessage: "Open email in app",
            description:
              "Accessible label for a dropdown in a Codex Apps Quick Chat email writing block. Users choose Gmail, Outlook, or their default email app; this label is not visible text.",
          })),
          (T[2] = O),
          (T[3] = n))
        : (n = T[3])
      let D = n
      return (
        T[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(b.I, { "aria-hidden": !1, asset: eF })), (T[4] = s))
          : (s = T[4]),
        T[5] !== P || T[6] !== D
          ? ((r = (0, i.jsx)(q.$, {
              "aria-label": D,
              color: "ghostActive",
              disabled: P,
              size: "imageToolbar",
              uniform: !0,
              children: s,
            })),
            (T[5] = P),
            (T[6] = D),
            (T[7] = r))
          : (r = T[7]),
        T[8] !== R || T[9] !== r
          ? ((o = (0, i.jsx)(M.m, { sideOffset: 0, content: R, children: r })), (T[8] = R), (T[9] = r), (T[10] = o))
          : (o = T[10]),
        T[11] !== O
          ? ((l = O.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.gmail.ariaLabel",
              defaultMessage: "Open email using Gmail",
              description:
                "Accessible label for the Gmail option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (T[11] = O),
            (T[12] = l))
          : (l = T[12]),
        T[13] !== N ? ((d = () => N("gmail")), (T[13] = N), (T[14] = d)) : (d = T[14]),
        T[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(U.ms.ItemIcon, { size: "md", children: (0, i.jsx)(eq.A, { className: "icon-sm" }) })),
            (c = (0, i.jsx)(m.A, {
              id: "chatgptConversations.writingBlock.email.open.option.gmail.label",
              defaultMessage: "Gmail",
              description:
                "Short provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (T[15] = c),
            (T[16] = u))
          : ((c = T[15]), (u = T[16])),
        T[17] !== l || T[18] !== d
          ? ((p = (0, i.jsxs)(U.ms.Item, { "aria-label": l, onSelect: d, children: [u, c] })),
            (T[17] = l),
            (T[18] = d),
            (T[19] = p))
          : (p = T[19]),
        T[20] !== O
          ? ((f = O.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.outlook.ariaLabel",
              defaultMessage: "Open email using Outlook",
              description:
                "Accessible label for the Outlook option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (T[20] = O),
            (T[21] = f))
          : (f = T[21]),
        T[22] !== N ? ((h = () => N("outlook")), (T[22] = N), (T[23] = h)) : (h = T[23]),
        T[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(U.ms.ItemIcon, { size: "md", children: (0, i.jsx)(eV.A, { className: "icon-sm" }) })),
            (w = (0, i.jsx)(m.A, {
              id: "chatgptConversations.writingBlock.email.open.option.outlook.label",
              defaultMessage: "Outlook",
              description:
                "Short provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (T[24] = g),
            (T[25] = w))
          : ((g = T[24]), (w = T[25])),
        T[26] !== f || T[27] !== h
          ? ((x = (0, i.jsxs)(U.ms.Item, { "aria-label": f, onSelect: h, children: [g, w] })),
            (T[26] = f),
            (T[27] = h),
            (T[28] = x))
          : (x = T[28]),
        T[29] !== O
          ? ((_ = O.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.default.ariaLabel",
              defaultMessage: "Open email using default email app",
              description:
                "Accessible label for the default-app option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (T[29] = O),
            (T[30] = _))
          : (_ = T[30]),
        T[31] !== N ? ((y = () => N("default")), (T[31] = N), (T[32] = y)) : (y = T[32]),
        T[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(U.ms.ItemIcon, { size: "md", children: (0, i.jsx)(eU.A, { className: "icon-sm" }) })),
            (k = (0, i.jsx)(m.A, {
              id: "chatgptConversations.writingBlock.email.open.option.default.label",
              defaultMessage: "Default email app",
              description:
                "Provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block. It launches the operating system's configured mail app.",
            })),
            (T[33] = v),
            (T[34] = k))
          : ((v = T[33]), (k = T[34])),
        T[35] !== _ || T[36] !== y
          ? ((S = (0, i.jsxs)(U.ms.Item, { "aria-label": _, onSelect: y, children: [v, k] })),
            (T[35] = _),
            (T[36] = y),
            (T[37] = S))
          : (S = T[37]),
        T[38] !== P || T[39] !== p || T[40] !== x || T[41] !== S || T[42] !== o
          ? ((C = (0, i.jsx)("div", {
              className: "hidden md:block",
              children: (0, i.jsxs)(U.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                disabled: P,
                triggerButton: o,
                children: [p, x, S],
              }),
            })),
            (T[38] = P),
            (T[39] = p),
            (T[40] = x),
            (T[41] = S),
            (T[42] = o),
            (T[43] = C))
          : (C = T[43]),
        T[44] !== N ? ((A = () => N("default")), (T[44] = N), (T[45] = A)) : (A = T[45]),
        T[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, i.jsx)(b.I, { "aria-hidden": !1, asset: eF })), (T[46] = I))
          : (I = T[46]),
        T[47] !== P || T[48] !== R || T[49] !== A
          ? ((j = (0, i.jsx)(q.$, {
              "aria-label": R,
              color: "ghostActive",
              disabled: P,
              onClick: A,
              size: "imageToolbar",
              uniform: !0,
              children: I,
            })),
            (T[47] = P),
            (T[48] = R),
            (T[49] = A),
            (T[50] = j))
          : (j = T[50]),
        T[51] !== R || T[52] !== j
          ? ((B = (0, i.jsx)("div", {
              className: "md:hidden",
              children: (0, i.jsx)(M.m, { sideOffset: 0, content: R, children: j }),
            })),
            (T[51] = R),
            (T[52] = j),
            (T[53] = B))
          : (B = T[53]),
        T[54] !== C || T[55] !== B
          ? ((L = (0, i.jsxs)(i.Fragment, { children: [C, B] })), (T[54] = C), (T[55] = B), (T[56] = L))
          : (L = T[56]),
        L
      )
    }
    let eW = { gmail: "https://www.googleapis.com/auth/gmail.modify", outlook: "mail.send" }
    function ez(e) {
      return eK((0, c.o)({ shouldStripDirectives: !0 }).parse(e), e).trim()
    }
    function e$(e) {
      return e instanceof Error ? e.message : void 0
    }
    function eK(e, t) {
      let n = []
      return (
        e.forEach((e) => {
          n.push(
            (function e(t, n) {
              var i, a, s, r
              let o, l, d, c, u, p, m, f, h, g
              return "list" === t.type.name || "ordered_list" === t.type.name
                ? ((i = t),
                  (a = n),
                  (o = []),
                  (l = "number" == typeof i.attrs.startingNumber ? i.attrs.startingNumber : 1),
                  i.forEach((t, n, s) => {
                    let r = "ordered_list" === i.type.name ? `${l + s}. ` : "- ",
                      d = "task_list_item" === t.type.name ? `[${!0 === t.attrs.checked ? "x" : " "}] ` : "",
                      c = " ".repeat(r.length + d.length),
                      u = ""
                    ;(t.forEach((t, n, i) => {
                      let s = e(t, a).replaceAll(
                        "\n",
                        `
${c}`,
                      )
                      if (0 === i) {
                        u = s
                        return
                      }
                      let r = "list" === t.type.name || "ordered_list" === t.type.name ? "\n" : "\n\n"
                      u += `${r}${c}${s}`
                    }),
                      o.push(`${r}${d}${u}`))
                  }),
                  o.join("\n"))
                : t.isTextblock
                  ? ((s = t),
                    (r = n),
                    (p = ""),
                    (m = ""),
                    (f = !1),
                    (h = (e) => {
                      let t = c,
                        n = u
                      ;(null != t &&
                        null != n &&
                        (0 === t || /\s/.test(p[t - 1] ?? "")) &&
                        (null == e || /^\s/.test(e)) &&
                        (p = p.slice(0, t) + p.slice(t + 1, n) + p.slice(n + 1)),
                        (c = void 0),
                        (u = void 0))
                    }),
                    (g = () => {
                      if (null == d) return
                      let e = m === d || d === `mailto:${m}` || d === `http://${m}`
                      ;(e && p.endsWith("<") && (c = p.length - 1),
                        e ? (p += f ? `<${m}>` : m) : (p += `${m} (${d})`),
                        (d = void 0),
                        (m = ""),
                        (f = !1))
                    }),
                    s.descendants((e) => {
                      if ("hard_break" === e.type.name) {
                        ;(g(), h("\n"), (p += "\n"))
                        return
                      }
                      if (!e.isText) return
                      let t = e.text ?? ""
                      null != u && h(t)
                      let n = e.marks.find((e) => "link" === e.type.name)?.attrs.href,
                        i = "string" == typeof n ? n : void 0
                      if (i !== d) {
                        ;(g(), (d = i))
                        let t = e.marks.find((e) => "startend" === e.type.name)?.attrs,
                          n = "number" == typeof t?.start ? t.start : void 0,
                          a = "number" == typeof t?.end ? t.end : void 0
                        f =
                          null != n &&
                          null != a &&
                          "<" === r[n - 1] &&
                          ">" === r[a] &&
                          ((n > 1 && !/\s/.test(r[n - 2] ?? "")) || (a + 1 < r.length && !/\s/.test(r[a + 1] ?? "")))
                      }
                      null == d
                        ? null != c && t.startsWith(">")
                          ? ((u = p.length), (p += t), t.length > 1 && h(t.slice(1)))
                          : ((p += t), (c = void 0))
                        : (m += t)
                    }),
                    g(),
                    h(),
                    p)
                  : eK(t, n)
            })(e, t),
          )
        }),
        n.join("\n\n")
      )
    }
    var eZ = n("Ks4B"),
      eQ = n("aTOA")
    let eY = (0, p.forwardRef)(function (e, t) {
      let n,
        s,
        r,
        o,
        l,
        d,
        c,
        u,
        m,
        f,
        h,
        g,
        b,
        w,
        x = (0, a.c)(31)
      x[0] !== e
        ? (({ "aria-disabled": n, className: s, icon: r, label: o, onClick: l, status: c, type: u, ...d } = e),
          (x[0] = e),
          (x[1] = n),
          (x[2] = s),
          (x[3] = r),
          (x[4] = o),
          (x[5] = l),
          (x[6] = d),
          (x[7] = c),
          (x[8] = u))
        : ((n = x[1]), (s = x[2]), (r = x[3]), (o = x[4]), (l = x[5]), (d = x[6]), (c = x[7]), (u = x[8]))
      let _ = void 0 === c ? "ready" : c,
        y = void 0 === u ? "button" : u,
        v = "sent" === _,
        k = (0, p.useRef)(null)
      ;(x[9] !== v
        ? ((m = () => {
            let e = k.current
            v && null != e && e.ownerDocument.activeElement === e && e.blur()
          }),
          (f = [v]),
          (x[9] = v),
          (x[10] = m),
          (x[11] = f))
        : ((m = x[10]), (f = x[11])),
        (0, p.useEffect)(m, f))
      let S = !!v || n,
        C = v
          ? "ms-1 flex size-9 cursor-default items-center justify-center rounded-full"
          : "ms-1 flex h-9 items-center rounded-[24px] pe-3 text-sm font-medium hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      x[12] !== s || x[13] !== C ? ((h = (0, R.A)(C, s)), (x[12] = s), (x[13] = C), (x[14] = h)) : (h = x[14])
      let A = v ? eJ : l
      x[15] !== t
        ? ((g = (e) => {
            ;((k.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e))
          }),
          (x[15] = t),
          (x[16] = g))
        : (g = x[16])
      let I = v ? -1 : d.tabIndex
      return (
        x[17] !== r || x[18] !== v || x[19] !== o
          ? ((b = v
              ? r
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: "flex size-8 shrink-0 items-center justify-center ps-1",
                      children: r,
                    }),
                    (0, i.jsx)("span", { children: o }),
                  ],
                })),
            (x[17] = r),
            (x[18] = v),
            (x[19] = o),
            (x[20] = b))
          : (b = x[20]),
        x[21] !== d ||
        x[22] !== _ ||
        x[23] !== I ||
        x[24] !== b ||
        x[25] !== S ||
        x[26] !== h ||
        x[27] !== A ||
        x[28] !== g ||
        x[29] !== y
          ? ((w = (0, i.jsx)("button", {
              ...d,
              "aria-disabled": S,
              className: h,
              "data-writing-block-email-send-status": _,
              onClick: A,
              ref: g,
              tabIndex: I,
              type: y,
              children: b,
            })),
            (x[21] = d),
            (x[22] = _),
            (x[23] = I),
            (x[24] = b),
            (x[25] = S),
            (x[26] = h),
            (x[27] = A),
            (x[28] = g),
            (x[29] = y),
            (x[30] = w))
          : (w = x[30]),
        w
      )
    })
    function eJ(e) {
      e.preventDefault()
    }
    function eX(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        d,
        c,
        u = (0, a.c)(57),
        {
          bcc: p,
          cc: f,
          emailSendState: h,
          isPersistedSent: g,
          isLoadingSenderAccounts: w,
          onConnect: x,
          onSend: _,
          onUndoSend: y,
          recipient: v,
          selectedSenderAccount: k,
        } = e,
        S = (0, G.A)(),
        C = g || "success_sent" === h.kind,
        A = eP(h),
        I = "sending_in_progress" === h.kind && h.undoAvailable
      if (C) {
        let e, t, n, a
        u[0] !== S
          ? ((e = S.formatMessage({
              id: "chatgptConversations.writingBlock.emailSent",
              defaultMessage: "Sent",
              description: "Label shown after a writing block email was sent in Codex Apps.",
            })),
            (u[0] = S),
            (u[1] = e))
          : (e = u[1])
        let s = e
        return (
          u[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(b.I, { "aria-hidden": !1, asset: eZ.G })), (u[2] = t))
            : (t = u[2]),
          u[3] !== s
            ? ((n = (0, i.jsx)(eY, {
                "aria-label": s,
                className: "border border-transparent bg-text/5 text-default no-drag focus:outline-none",
                icon: t,
                status: "sent",
              })),
              (u[3] = s),
              (u[4] = n))
            : (n = u[4]),
          u[5] !== s || u[6] !== n
            ? ((a = (0, i.jsx)(M.m, { content: s, children: n })), (u[5] = s), (u[6] = n), (u[7] = a))
            : (a = u[7]),
          a
        )
      }
      if (A) {
        let e, t
        if (I) {
          let e, t, n
          u[8] !== S
            ? ((e = S.formatMessage({
                id: "chatgptConversations.writingBlock.emailUndoSend",
                defaultMessage: "Undo send",
                description: "Button label for undoing a writing block email send in Codex Apps.",
              })),
              (u[8] = S),
              (u[9] = e))
            : (e = u[9])
          let a = e
          return (
            u[10] !== h.sendId || u[11] !== y
              ? ((t = () => y(h.sendId)), (u[10] = h.sendId), (u[11] = y), (u[12] = t))
              : (t = u[12]),
            u[13] !== t || u[14] !== a
              ? ((n = (0, i.jsx)(q.$, { color: "secondary", onClick: t, size: "composer", children: a })),
                (u[13] = t),
                (u[14] = a),
                (u[15] = n))
              : (n = u[15]),
            n
          )
        }
        return (
          u[16] !== S
            ? ((e = S.formatMessage({
                id: "chatgptConversations.writingBlock.emailSending",
                defaultMessage: "Sending",
                description: "Button label shown while a writing block email is sending in Codex Apps.",
              })),
              (u[16] = S),
              (u[17] = e))
            : (e = u[17]),
          u[18] !== e
            ? ((t = (0, i.jsx)(q.$, { color: "secondary", loading: !0, size: "composer", children: e })),
              (u[18] = e),
              (u[19] = t))
            : (t = u[19]),
          t
        )
      }
      if (w) {
        let e, t
        u[20] !== S
          ? ((e = S.formatMessage({
              id: "chatgptConversations.writingBlock.emailAccountsLoading",
              defaultMessage: "Loading email accounts",
              description:
                "Accessible label shown while connected email accounts load for a writing block in Codex Apps.",
            })),
            (u[20] = S),
            (u[21] = e))
          : (e = u[21])
        let n = e
        return (
          u[22] !== n
            ? ((t = (0, i.jsx)(q.$, { "aria-label": n, color: "secondary", loading: !0, size: "toolbar" })),
              (u[22] = n),
              (u[23] = t))
            : (t = u[23]),
          t
        )
      }
      if (null == k) {
        let e, t
        return (
          u[24] !== S
            ? ((e = S.formatMessage({
                id: "chatgptConversations.writingBlock.emailConnect",
                defaultMessage: "Connect email",
                description:
                  "Button in a Codex Apps email writing block shown when no Gmail or Outlook account is connected. Selecting it opens the provider connection flow so the user can send the draft.",
              })),
              (u[24] = S),
              (u[25] = e))
            : (e = u[25]),
          u[26] !== x || u[27] !== e
            ? ((t = (0, i.jsx)(q.$, { color: "secondary", onClick: x, size: "composer", children: e })),
              (u[26] = x),
              (u[27] = e),
              (u[28] = t))
            : (t = u[28]),
          t
        )
      }
      if (k.needsReconnect) {
        let e, t
        return (
          u[29] !== S
            ? ((e = S.formatMessage({
                id: "chatgptConversations.writingBlock.emailReconnect",
                defaultMessage: "Reconnect email",
                description:
                  "Button in a Codex Apps email writing block shown when the selected Gmail or Outlook account needs authentication again. Selecting it opens the provider connection flow.",
              })),
              (u[29] = S),
              (u[30] = e))
            : (e = u[30]),
          u[31] !== x || u[32] !== e
            ? ((t = (0, i.jsx)(q.$, { color: "secondary", onClick: x, size: "composer", children: e })),
              (u[31] = x),
              (u[32] = e),
              (u[33] = t))
            : (t = u[33]),
          t
        )
      }
      u[34] !== p || u[35] !== f || u[36] !== v
        ? ((t = eN({ to: eT(v), cc: eT(f), bcc: eT(p) })), (u[34] = p), (u[35] = f), (u[36] = v), (u[37] = t))
        : (t = u[37])
      let j = t
      u[38] !== S || u[39] !== k.label
        ? ((n = S.formatMessage(
            {
              id: "chatgptConversations.writingBlock.emailSendAs",
              defaultMessage: "Send as {email}",
              description: "Accessible label for sending a writing block email from a connected account in Codex Apps.",
            },
            { email: k.label },
          )),
          (u[38] = S),
          (u[39] = k.label),
          (u[40] = n))
        : (n = u[40])
      let B = n
      u[41] !== S
        ? ((s = S.formatMessage({
            id: "chatgptConversations.writingBlock.emailSend",
            defaultMessage: "Send",
            description: "Button label for sending an email from a writing block in Codex Apps.",
          })),
          (u[41] = S),
          (u[42] = s))
        : (s = u[42])
      let L = s
      u[43] !== j || u[44] !== B
        ? ((r = j
            ? B
            : (0, i.jsx)(m.A, {
                id: "chatgptConversations.writingBlock.emailSendMissingRecipients",
                defaultMessage: "Add at least one valid email recipient before sending.",
                description:
                  "Tooltip on the disabled Send button in a Codex Apps email writing block when the To, Cc, and Bcc fields contain no valid email address. Tells the email author how to enable sending and matches ChatGPT's missing-recipient toast.",
              })),
          (u[43] = j),
          (u[44] = B),
          (u[45] = r))
        : (r = u[45])
      let T = !j
      return (
        u[46] !== _ ? ((o = () => _(crypto.randomUUID())), (u[46] = _), (u[47] = o)) : (o = u[47]),
        u[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(b.I, { "aria-hidden": !1, asset: eQ.S })), (u[48] = l))
          : (l = u[48]),
        u[49] !== B || u[50] !== T || u[51] !== o || u[52] !== L
          ? ((d = (0, i.jsxs)(q.$, {
              "aria-label": B,
              color: "composerPrimary",
              disabled: T,
              onClick: o,
              size: "toolbar",
              children: [l, L],
            })),
            (u[49] = B),
            (u[50] = T),
            (u[51] = o),
            (u[52] = L),
            (u[53] = d))
          : (d = u[53]),
        u[54] !== r || u[55] !== d
          ? ((c = (0, i.jsx)(M.m, { content: r, children: d })), (u[54] = r), (u[55] = d), (u[56] = c))
          : (c = u[56]),
        c
      )
    }
    var e1 = n("rNmN")
    function e0(e) {
      let t,
        n,
        s,
        r,
        o = (0, a.c)(17),
        {
          accounts: l,
          chevronIcon: d,
          displayMode: c,
          isDisabled: u,
          isSelectable: p,
          onChange: m,
          onOpenChange: f,
          renderMenu: h,
          selectedAccount: g,
          selectorAriaLabel: b,
          senderLabel: w,
        } = e,
        x = "tokenized" === c && p
      o[0] !== l ||
      o[1] !== d ||
      o[2] !== u ||
      o[3] !== m ||
      o[4] !== f ||
      o[5] !== h ||
      o[6] !== g ||
      o[7] !== b ||
      o[8] !== x
        ? ((t = x
            ? h({
                accounts: l,
                isDisabled: u,
                onChange: m,
                onOpenChange: f,
                selectedAccount: g,
                trigger: (0, i.jsxs)("button", {
                  "aria-label": b,
                  className:
                    "inline-flex min-w-0 items-baseline gap-1 bg-transparent px-0 py-0 text-start leading-8 disabled:cursor-default",
                  disabled: u,
                  type: "button",
                  children: [
                    (0, i.jsx)("span", {
                      className: "truncate text-base leading-8 [color:var(--oai-wb-text-primary)]",
                      children: g.label,
                    }),
                    d,
                  ],
                }),
              })
            : (0, i.jsx)("div", {
                className: "leading-8 break-words [color:var(--oai-wb-text-primary)]",
                children: g.label,
              })),
          (o[0] = l),
          (o[1] = d),
          (o[2] = u),
          (o[3] = m),
          (o[4] = f),
          (o[5] = h),
          (o[6] = g),
          (o[7] = b),
          (o[8] = x),
          (o[9] = t))
        : (t = o[9])
      let _ = t
      return (
        o[10] !== w
          ? ((n = (0, i.jsx)("div", { className: "font-medium", children: w })), (o[10] = w), (o[11] = n))
          : (n = o[11]),
        o[12] !== _
          ? ((s = (0, i.jsx)("div", { className: "min-w-0 flex-1", children: _ })), (o[12] = _), (o[13] = s))
          : (s = o[13]),
        o[14] !== n || o[15] !== s
          ? ((r = (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [n, s] })),
            (o[14] = n),
            (o[15] = s),
            (o[16] = r))
          : (r = o[16]),
        r
      )
    }
    function e2(e) {
      let t,
        n,
        s,
        r,
        o = (0, a.c)(13),
        { accounts: l, displayMode: d, isDisabled: c, onChange: u, onOpenChange: p, selectedAccount: f } = e,
        h = (0, G.A)()
      o[0] !== h
        ? ((t = h.formatMessage({
            id: "chatgptConversations.writingBlock.email.sender.selector.ariaLabel",
            defaultMessage: "Select the email account to send from",
            description:
              "Accessible label for the sender-account selector in an email writing block shown in Codex Apps Quick Chat. Users choose which connected Gmail or Outlook account sends the message; this label is not visible text.",
          })),
          (o[0] = h),
          (o[1] = t))
        : (t = o[1])
      let g = t
      o[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, i.jsx)(m.A, {
            id: "chatgptConversations.writingBlock.email.sender.field.label",
            defaultMessage: "From",
            description:
              "Short field label identifying the sender account in an email writing block shown in Codex Apps Quick Chat. It appears to the left of the account without punctuation.",
          })),
          (o[2] = n))
        : (n = o[2])
      let w = n
      o[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, i.jsx)(b.I, { className: "shrink-0 self-center text-default", "aria-hidden": !1, asset: e1.c })),
          (o[3] = s))
        : (s = o[3])
      let x = l.length > 1
      return (
        o[4] !== l || o[5] !== d || o[6] !== c || o[7] !== u || o[8] !== p || o[9] !== f || o[10] !== g || o[11] !== x
          ? ((r = (0, i.jsx)(e0, {
              accounts: l,
              chevronIcon: s,
              displayMode: d,
              isDisabled: c,
              isSelectable: x,
              onChange: u,
              onOpenChange: p,
              renderMenu: e3,
              selectedAccount: f,
              selectorAriaLabel: g,
              senderLabel: w,
            })),
            (o[4] = l),
            (o[5] = d),
            (o[6] = c),
            (o[7] = u),
            (o[8] = p),
            (o[9] = f),
            (o[10] = g),
            (o[11] = x),
            (o[12] = r))
          : (r = o[12]),
        r
      )
    }
    function e3(e) {
      let { accounts: t, isDisabled: n, onChange: a, onOpenChange: s, selectedAccount: r, trigger: o } = e
      return (0, i.jsx)(U.Ab, {
        align: "start",
        contentWidth: "menuBounded",
        disabled: n,
        onOpenChange: s,
        triggerButton: o,
        children: t.map((e) =>
          (0, i.jsxs)(
            U.ms.Item,
            {
              onSelect: () => a(e.id),
              rightIcon: e.id === r.id ? (0, i.jsx)(b.I, { "aria-hidden": !1, asset: eZ.G }) : null,
              children: [
                (0, i.jsx)(U.ms.ItemIcon, {
                  size: "md",
                  children:
                    "gmail" === e.provider
                      ? (0, i.jsx)(eq.A, { className: "icon-sm" })
                      : (0, i.jsx)(eV.A, { className: "icon-sm" }),
                }),
                e.label,
              ],
            },
            e.id,
          ),
        ),
      })
    }
    let e5 = { pollIntervalMs: 1500, pollMaxAttempts: 5 }
    var e4 = n("rvFo"),
      e6 = n("GEsy")
    let e7 = [],
      e9 = "connector_2128aebfecb84f64a069897515042a44",
      e8 = "connector_4aaab2856305417b993eca9a216aaf6e"
    async function te(e) {
      return (
        await f.Request.safeGet("/aip/connectors/{connector_id}", {
          surface: "writing_blocks",
          additionalHeaders: { "OAI-Product-Sku": "CODEX" },
          parameters: { path: { connector_id: e }, query: { include_actions: !0 } },
        })
      ).actions.some((e) => "send_email" === e.name.trim().toLowerCase() && !1 !== e.is_enabled)
    }
    var tt = n("h818"),
      tn = n("zLIa"),
      ti = n("OMIV")
    let ta = (0, es.m3)("1594900112-hidden-until", null)
    function ts(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        d,
        c,
        h,
        g,
        w,
        x,
        _,
        y,
        v,
        S,
        C,
        A,
        I,
        j,
        M = (0, a.c)(42),
        {
          initialFeedbackText: B,
          initialOpen: L,
          messageId: T,
          serverConversationId: E,
          userEditedWritingBlock: N,
          writingBlockId: P,
        } = e,
        O = (0, u.gh)(k.u),
        R = (0, G.A)(),
        D = (0, u._U)(ti.JW, "1594900112"),
        F = (0, u.Ul)(ta),
        [V] = (0, p.useState)(to),
        [H, W] = (0, p.useState)(void 0 === B ? "" : B),
        [z, $] = (0, p.useState)(void 0 !== L && L),
        K = (0, p.useRef)(null)
      if (
        (M[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => {
              null != K.current && clearTimeout(K.current)
            }),
            (n = []),
            (M[0] = t),
            (M[1] = n))
          : ((t = M[0]), (n = M[1])),
        (0, p.useEffect)(t, n),
        !D || (null != F && F > V))
      )
        return null
      ;(M[2] !== R
        ? ((s = R.formatMessage({
            id: "codex.writingBlock.feedback.trigger",
            defaultMessage: "What is this?",
            description:
              "Accessible name for the feedback button below a ChatGPT writing block in Codex Apps. Activating it opens a short explanation and a form to share feedback about writing blocks.",
          })),
          (M[2] = R),
          (M[3] = s))
        : (s = M[3]),
        M[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = () => {
              K.current = setTimeout(() => $(!0), 500)
            }),
            (o = () => {
              null != K.current && (clearTimeout(K.current), (K.current = null))
            }),
            (l = (0, i.jsx)(m.A, {
              id: "codex.writingBlock.feedback.visibleTrigger",
              defaultMessage: "What is this?",
              description:
                "Visible label for the feedback button shown below a ChatGPT writing block in Codex Apps. The button opens a short feature explanation and feedback form.",
            })),
            (d = (0, i.jsx)(b.I, { asset: tt.c })),
            (M[4] = r),
            (M[5] = o),
            (M[6] = l),
            (M[7] = d))
          : ((r = M[4]), (o = M[5]), (l = M[6]), (d = M[7])),
        M[8] !== s
          ? ((c = (0, i.jsxs)(q.$, {
              "aria-label": s,
              color: "ghost",
              size: "compact",
              onMouseEnter: r,
              onMouseLeave: o,
              children: [l, d],
            })),
            (M[8] = s),
            (M[9] = c))
          : (c = M[9]),
        M[10] !== H || M[11] !== R || M[12] !== T || M[13] !== O || M[14] !== E || M[15] !== N || M[16] !== P
          ? ((h = (e) => {
              e.preventDefault()
              let t = H.trim()
              t &&
                (f.Request.safePost("/conversation/message/writing-blocks/feedback", {
                  requestBody: {
                    conversation_id: E,
                    feedback: t,
                    message_id: T,
                    user_edited_writing_block: N,
                    writing_block_id: P,
                  },
                }).catch(tr),
                O.get(X.Id).success(
                  R.formatMessage({
                    id: "codex.writingBlock.feedback.submitted",
                    defaultMessage: "Your feedback has been submitted",
                    description:
                      "Short confirmation toast shown after a Codex Apps user submits feedback about a ChatGPT writing block.",
                  }),
                ),
                O.set(ta, Date.now() + 6048e5),
                W(""),
                $(!1))
            }),
            (M[10] = H),
            (M[11] = R),
            (M[12] = T),
            (M[13] = O),
            (M[14] = E),
            (M[15] = N),
            (M[16] = P),
            (M[17] = h))
          : (h = M[17]),
        M[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)("div", {
              className: "text-sm font-semibold text-default",
              children: (0, i.jsx)(m.A, {
                id: "codex.writingBlock.feedback.title",
                defaultMessage: "This is a writing block, a new feature we’re testing",
                description:
                  "Heading above the feedback form opened from a ChatGPT writing block in Codex Apps. It explains that writing blocks are a new feature and encourages the user to share feedback.",
              }),
            })),
            (M[18] = g))
          : (g = M[18]),
        M[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)("div", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(m.A, {
                id: "codex.writingBlock.feedback.description",
                defaultMessage: "Tell us what’s working and what’s not. The more specific the feedback, the better",
                description:
                  "Helper text above the writing-block feedback input in Codex Apps. It asks the user to describe what works and what does not, and encourages concrete feedback.",
              }),
            })),
            (M[19] = w))
          : (w = M[19]),
        M[20] !== R
          ? ((x = R.formatMessage({
              id: "codex.writingBlock.feedback.inputLabel",
              defaultMessage: "Additional feedback",
              description:
                "Accessible name for the writing-block feedback text area in Codex Apps. Users enter what they liked or disliked about the writing-block editor.",
            })),
            (M[20] = R),
            (M[21] = x))
          : (x = M[21]),
        M[22] !== R
          ? ((_ = R.formatMessage({
              id: "codex.writingBlock.feedback.placeholder",
              defaultMessage: "What did you like or dislike?",
              description:
                "Placeholder in the writing-block feedback text area in Codex Apps. It asks the user to explain what they liked or disliked about the editor.",
            })),
            (M[22] = R),
            (M[23] = _))
          : (_ = M[23]),
        M[24] === Symbol.for("react.memo_cache_sentinel") ? ((y = (e) => W(e.target.value)), (M[24] = y)) : (y = M[24]),
        M[25] !== H || M[26] !== x || M[27] !== _
          ? ((v = (0, i.jsx)(tn.TM, {
              "aria-label": x,
              autoFocus: !0,
              name: "writing-block-feedback",
              placeholder: _,
              rows: 3,
              value: H,
              onChange: y,
            })),
            (M[25] = H),
            (M[26] = x),
            (M[27] = _),
            (M[28] = v))
          : (v = M[28]),
        M[29] !== H ? ((S = H.trim()), (M[29] = H), (M[30] = S)) : (S = M[30]))
      let Z = 0 === S.length
      return (
        M[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, i.jsx)(m.A, {
              id: "codex.writingBlock.feedback.submit",
              defaultMessage: "Share feedback",
              description:
                "Label for the submit button in the writing-block feedback form in Codex Apps. It sends the user’s written feedback about the writing-block editor.",
            })),
            (M[31] = C))
          : (C = M[31]),
        M[32] !== Z
          ? ((A = (0, i.jsx)(q.$, { disabled: Z, size: "compact", type: "submit", children: C })),
            (M[32] = Z),
            (M[33] = A))
          : (A = M[33]),
        M[34] !== h || M[35] !== v || M[36] !== A
          ? ((I = (0, i.jsxs)("form", { className: "flex flex-col gap-3 p-2", onSubmit: h, children: [g, w, v, A] })),
            (M[34] = h),
            (M[35] = v),
            (M[36] = A),
            (M[37] = I))
          : (I = M[37]),
        M[38] !== z || M[39] !== c || M[40] !== I
          ? ((j = (0, i.jsx)("div", {
              className: "flex justify-end px-3",
              children: (0, i.jsx)(U.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                onOpenChange: $,
                open: z,
                side: "top",
                triggerButton: c,
                children: I,
              }),
            })),
            (M[38] = z),
            (M[39] = c),
            (M[40] = I),
            (M[41] = j))
          : (j = M[41]),
        j
      )
    }
    function tr() {}
    function to() {
      return Date.now()
    }
    var tl = n("D1oM")
    function td(e) {
      let t,
        n,
        s,
        r,
        o,
        c,
        u,
        m,
        f,
        h,
        g,
        b,
        w,
        x,
        _,
        y,
        v = (0, a.c)(43),
        { ineligibilityReason: k, isDisabled: S, metadata: C, onFollowupClick: A, onSelect: I } = e,
        [j, M] = (0, p.useState)(!1),
        [B, L] = (0, p.useState)(!1),
        T = (0, eh.I)()
      if (v[0] !== B || v[1] !== k || v[2] !== S || v[3] !== j || v[4] !== C || v[5] !== T) {
        b = Symbol.for("react.early_return_sentinel")
        e: {
          if (((r = (0, l.o)(C)), (s = S || j), null != k || B || 0 === r.length || (0, d._F)(C))) {
            b = null
            break e
          }
          ;((n = eu.P.div),
            (m = "relative mb-4 min-w-0 overflow-visible px-3 sm:-mt-6 sm:overflow-hidden"),
            v[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = { height: "auto", opacity: 1, y: 0 }), (v[18] = f))
              : (f = v[18]),
            v[19] !== T ? ((h = !T && { height: 0, opacity: 0, y: -8 }), (v[19] = T), (v[20] = h)) : (h = v[20]))
          let e = 0.2 * !T
          ;(v[21] !== e ? ((g = { duration: e, ease: "easeOut" }), (v[21] = e), (v[22] = g)) : (g = v[22]),
            (u =
              "relative min-w-0 px-3 text-base leading-relaxed text-default sm:rounded-b-3xl sm:bg-secondary-soft-alpha sm:pt-4.5 sm:pb-2.5"),
            (t = tl.U),
            (o = "responsive"),
            (c = r.map(tc)))
        }
        ;((v[0] = B),
          (v[1] = k),
          (v[2] = S),
          (v[3] = j),
          (v[4] = C),
          (v[5] = T),
          (v[6] = t),
          (v[7] = n),
          (v[8] = s),
          (v[9] = r),
          (v[10] = o),
          (v[11] = c),
          (v[12] = u),
          (v[13] = m),
          (v[14] = f),
          (v[15] = h),
          (v[16] = g),
          (v[17] = b))
      } else
        ((t = v[6]),
          (n = v[7]),
          (s = v[8]),
          (r = v[9]),
          (o = v[10]),
          (c = v[11]),
          (u = v[12]),
          (m = v[13]),
          (f = v[14]),
          (h = v[15]),
          (g = v[16]),
          (b = v[17]))
      return b !== Symbol.for("react.early_return_sentinel")
        ? b
        : (v[23] !== A || v[24] !== I || v[25] !== r
            ? ((w = (e) => {
                ;(A?.(e + 1, r.length),
                  M(!0),
                  I(r[e].prompt).then((e) => {
                    ;(M(!1), e && L(!0))
                  }))
              }),
              (v[23] = A),
              (v[24] = I),
              (v[25] = r),
              (v[26] = w))
            : (w = v[26]),
          v[27] !== t || v[28] !== s || v[29] !== o || v[30] !== c || v[31] !== w
            ? ((x = (0, i.jsx)(t, { layout: o, suggestions: c, disabled: s, onSelect: w })),
              (v[27] = t),
              (v[28] = s),
              (v[29] = o),
              (v[30] = c),
              (v[31] = w),
              (v[32] = x))
            : (x = v[32]),
          v[33] !== x || v[34] !== u
            ? ((_ = (0, i.jsx)("div", { className: u, children: x })), (v[33] = x), (v[34] = u), (v[35] = _))
            : (_ = v[35]),
          v[36] !== n || v[37] !== _ || v[38] !== m || v[39] !== f || v[40] !== h || v[41] !== g
            ? ((y = (0, i.jsx)(n, { className: m, animate: f, initial: h, transition: g, children: _ })),
              (v[36] = n),
              (v[37] = _),
              (v[38] = m),
              (v[39] = f),
              (v[40] = h),
              (v[41] = g),
              (v[42] = y))
            : (y = v[42]),
          y)
    }
    function tc(e) {
      let { sourceIndex: t, title: n } = e
      return { key: t, label: n }
    }
    var tu = n("vQRL")
    function tp(e) {
      let t,
        n,
        w,
        M,
        B,
        L,
        T,
        E,
        N,
        R,
        D,
        F,
        q,
        U,
        V,
        H,
        W,
        $ = (0, a.c)(264),
        {
          conversationId: K,
          context: Z,
          editorKey: Q,
          emailMetadata: Y,
          serverConversationId: J,
          enableAiTools: ee,
          isExpanded: et,
          isReadOnly: en,
          librarySaveControls: ei,
          isStreaming: ea,
          messageId: es,
          copyTurnToClipboardMessageId: er,
          onBeforeDocumentExport: el,
          onAskForChanges: ed,
          onEmailMetadataChange: ec,
          onOpenVersionHistory: eu,
          onSuggestedFollowup: ep,
          renderFrame: em,
          showMagicEditAction: ef,
          suppressCopyTurnToClipboardAnalytics: eh,
          suggestedFollowupIneligibilityReason: eg,
          title: eb,
          userEditedWritingBlock: ew,
          variant: e_,
          writingBlockId: ey,
          writingBlockIndex: ev,
        } = e,
        eS = void 0 !== et && et,
        eC = void 0 === er ? es : er,
        eI = void 0 !== ef && ef,
        eL = void 0 !== ew && ew,
        eG = (0, u.gh)(k.u),
        eF = (0, x.Tq)(),
        eq = (0, S.Ou)("3737772469")
      $[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { disableExposureLog: !0 }), ($[0] = t)) : (t = $[0])
      let eU = (0, S.Ou)("3408900824", t),
        eV = (0, u.Ul)(y.x2),
        eK = (0, S.Zj)("3220935388") || eq.get("inline_header_library_enabled", !1),
        eZ = (0, u.Ul)(_.$7),
        eQ = (0, p.useRef)(!1),
        eY = (0, p.useRef)(void 0)
      ;($[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => () => eY.current?.()), (w = []), ($[1] = n), ($[2] = w))
        : ((n = $[1]), (w = $[2])),
        (0, p.useEffect)(n, w))
      let [eJ, e1] = (0, p.useState)(!1),
        [e0, e3] = (0, p.useState)(!1),
        { renderView: tt, state: tn } = Z,
        ti = null != Q && !ea && !(void 0 !== en && en)
      ;($[3] !== es || $[4] !== eG || $[5] !== J
        ? ((M = (e) => {
            null != J && null != es && (0, v.yy)(eG, r.Aws, { conversationId: J, messageId: es, provider: e })
          }),
          ($[3] = es),
          ($[4] = eG),
          ($[5] = J),
          ($[6] = M))
        : (M = $[6]),
        $[7] !== Y ||
        $[8] !== ti ||
        $[9] !== ec ||
        $[10] !== tn.displayedContent ||
        $[11] !== M ||
        $[12] !== e_ ||
        $[13] !== ey
          ? ((B = {
              bodyMarkdown: tn.displayedContent,
              emailMetadata: Y,
              isPersistedAndComplete: ti,
              onEmailMetadataChange: ec,
              onOpenEmail: M,
              variant: e_,
              writingBlockId: ey,
            }),
            ($[7] = Y),
            ($[8] = ti),
            ($[9] = ec),
            ($[10] = tn.displayedContent),
            ($[11] = M),
            ($[12] = e_),
            ($[13] = ey),
            ($[14] = B))
          : (B = $[14]))
      let ta = (function (e) {
          let t,
            n,
            s,
            r,
            o,
            l,
            d,
            c,
            m,
            h,
            g = (0, a.c)(60),
            {
              bodyMarkdown: b,
              emailMetadata: w,
              isPersistedAndComplete: x,
              onEmailMetadataChange: _,
              onOpenEmail: y,
              variant: v,
              writingBlockId: S,
            } = e,
            A = "email" === v,
            I = w?.bcc ?? "",
            j = w?.cc ?? "",
            M = A && x,
            B = w?.writingBlockMetadata,
            L = w?.recipient ?? "",
            T = w?.subject ?? "",
            E = A ? S : void 0
          g[0] !== b ||
          g[1] !== _ ||
          g[2] !== I ||
          g[3] !== j ||
          g[4] !== M ||
          g[5] !== B ||
          g[6] !== L ||
          g[7] !== T ||
          g[8] !== E
            ? ((t = {
                bcc: I,
                bodyMarkdown: b,
                cc: j,
                enabled: M,
                metadata: B,
                onMetadataChange: _,
                recipient: L,
                subject: T,
                writingBlockId: E,
              }),
              (g[0] = b),
              (g[1] = _),
              (g[2] = I),
              (g[3] = j),
              (g[4] = M),
              (g[5] = B),
              (g[6] = L),
              (g[7] = T),
              (g[8] = E),
              (g[9] = t))
            : (t = g[9])
          let {
              emailAccounts: N,
              emailSendState: R,
              getContactsForQuery: D,
              isLoadingSenderAccounts: F,
              searchContacts: q,
              selectedSenderAccount: U,
              selectSenderAccount: V,
              sendEmail: H,
              undoEmailSend: W,
            } = (function ({
              bcc: e,
              bodyMarkdown: t,
              cc: n,
              enabled: i,
              metadata: s,
              onMetadataChange: r,
              recipient: o,
              subject: l,
              writingBlockId: d,
            }) {
              let c,
                m,
                h = (0, G.A)(),
                g = (0, u.gh)(k.u),
                { data: b, isLoading: w } = (0, O.I)({
                  queryKey: ["chatgpt", "writing-block-email-accounts"],
                  queryFn: async () => {
                    let [e, t, n] = await Promise.all([
                        f.Request.safePost("/aip/connectors/links/list_accessible", {
                          surface: "writing_blocks",
                          requestBody: { principals: [], link_refresh_strategy: "BLOCKING" },
                        }),
                        te(e9).catch(() => !1),
                        te(e8).catch(() => !1),
                      ]),
                      i = t
                        ? e.links.filter((e) => e.connector_id === e9).map((e) => ({ link: e, provider: "gmail" }))
                        : [],
                      a = n
                        ? e.links.filter((e) => e.connector_id === e8).map((e) => ({ link: e, provider: "outlook" }))
                        : []
                    return {
                      contactsLinks: e.links.filter(
                        (e) => "connector_c0f748249d6a42aea4b00fd375570ded" === e.connector_id,
                      ),
                      emailAccounts: [...i, ...a]
                        .flatMap(({ link: e, provider: t }) =>
                          null != e && e.scopes.some((e) => e.trim().toLowerCase() === eW[t])
                            ? [
                                {
                                  link: {
                                    id: e.id,
                                    name: e.name,
                                    ownerEmail: e.owner_profile?.email,
                                    ownerName: e.owner_profile?.name,
                                  },
                                  needsReconnect: "REAUTH_REQUIRED" === e.auth_status,
                                  provider: t,
                                },
                              ]
                            : [],
                        )
                        .flatMap(({ link: e, needsReconnect: t, provider: n }) => {
                          if (null == e) return []
                          let i = e.ownerEmail?.trim() || void 0,
                            a = i || e.ownerName?.trim() || e.name.trim() || void 0
                          return null == a
                            ? []
                            : [{ id: e.id, label: a, needsReconnect: t, ownerEmail: i, provider: n }]
                        }),
                    }
                  },
                  enabled: i,
                  retry: !1,
                  staleTime: e4.D.FIVE_MINUTES,
                }),
                x = b?.emailAccounts,
                _ = "string" == typeof (c = s?.[eM]) && c.length > 0 ? c : null,
                y = eO(s),
                v = "string" == typeof (m = s?.[eB]) ? m : void 0,
                S = eR(s),
                A = x?.find((e) => e.id === v) ?? x?.find((e) => e.provider === S?.provider) ?? x?.[0],
                I = (0, C.K)((e) => {
                  r?.(e)
                }),
                j = (0, C.K)((e) => {
                  I({ [eB]: e })
                }),
                { getContactsForQuery: M, searchContacts: B } = (function (e) {
                  let t,
                    n,
                    i,
                    s,
                    r,
                    o,
                    l,
                    d = (0, a.c)(23),
                    { contactsLinkId: c, enabled: u } = e,
                    [m, h] = (0, p.useState)("")
                  d[0] !== m ? ((t = m.trim()), (d[0] = m), (d[1] = t)) : (t = d[1])
                  let g = t,
                    b = (0, e6.o)(g, 200)
                  d[2] !== c || d[3] !== b || d[4] !== u
                    ? ((n = u && null != c && b.length > 0 && !(0, ej.SW)(b)),
                      (d[2] = c),
                      (d[3] = b),
                      (d[4] = u),
                      (d[5] = n))
                    : (n = d[5])
                  let w = n
                  ;(d[6] !== c || d[7] !== b
                    ? ((i =
                        null == c
                          ? P.hT
                          : () =>
                              (async function (e, t) {
                                let n = await f.Request.safePost("/aip/connectors/google_contacts/search_contacts", {
                                  surface: "writing_blocks",
                                  requestBody: { limit: 10, link_id: e, query: t },
                                })
                                return (0, ej.jy)(n.contacts)
                              })(c, b)),
                      (d[6] = c),
                      (d[7] = b),
                      (d[8] = i))
                    : (i = d[8]),
                    d[9] !== c || d[10] !== b
                      ? ((s = ["chatgpt", "writing-block-email-contacts", c, b]), (d[9] = c), (d[10] = b), (d[11] = s))
                      : (s = d[11]),
                    d[12] !== w || d[13] !== i || d[14] !== s
                      ? ((r = { enabled: w, queryFn: i, queryKey: s, retry: !1, staleTime: e4.D.FIVE_MINUTES }),
                        (d[12] = w),
                        (d[13] = i),
                        (d[14] = s),
                        (d[15] = r))
                      : (r = d[15]))
                  let { data: x } = (0, O.I)(r)
                  d[16] === Symbol.for("react.memo_cache_sentinel")
                    ? ((o = (e) => {
                        h(e)
                      }),
                      (d[16] = o))
                    : (o = d[16])
                  let _ = o
                  return (
                    d[17] !== x || d[18] !== c || d[19] !== b || d[20] !== u || d[21] !== g
                      ? ((l = {
                          getContactsForQuery: (e) => {
                            let t = e.trim()
                            return u && null != c && t.length > 0 && t === g && b === g && !(0, ej.SW)(t)
                              ? (x ?? e7)
                              : e7
                          },
                          searchContacts: _,
                        }),
                        (d[17] = x),
                        (d[18] = c),
                        (d[19] = b),
                        (d[20] = u),
                        (d[21] = g),
                        (d[22] = l))
                      : (l = d[22]),
                    l
                  )
                })({
                  contactsLinkId: (0, ej.m1)(
                    (b?.contactsLinks ?? []).map((e) => ({ id: e.id, ownerEmail: e.owner_profile?.email })),
                    A,
                  ),
                  enabled: i,
                }),
                L = (0, C.K)((e) => {
                  g.get(X.Id).danger(
                    "undo_failed" === e.kind
                      ? h.formatMessage({
                          id: "chatgptConversations.writingBlock.emailUndoFailed",
                          defaultMessage: "Couldn't undo sending this email",
                          description: "Error toast shown when undoing a writing block email send fails in Codex Apps.",
                        })
                      : h.formatMessage({
                          id: "chatgptConversations.writingBlock.emailSendFailed",
                          defaultMessage: "Couldn't send this email",
                          description: "Error toast shown when sending a writing block email fails in Codex Apps.",
                        }),
                    {
                      errorAnalytics: {
                        toastId:
                          "undo_failed" === e.kind ||
                          "invalid_recipients" === e.detail ||
                          "missing_recipients" === e.detail
                            ? "useChatgptWritingBlockEmailSend.handleFailure"
                            : "writing_blocks_email_send_failure",
                      },
                    },
                  )
                }),
                {
                  sendEmail: T,
                  state: E,
                  undoEmailSend: N,
                } = (function (e) {
                  let t = (0, p.useRef)(e)
                  t.current = e
                  let [n, i] = (0, p.useState)({ kind: "idle" }),
                    a = (0, p.useRef)(n)
                  ;(0, p.useEffect)(() => {
                    a.current = n
                  }, [n])
                  let s = (0, p.useCallback)((e, n = {}) => {
                      t.current.onEvent?.({ name: e, metadata: n })
                    }, []),
                    r = (0, p.useCallback)((e) => {
                      t.current.onFailure?.(e)
                    }, []),
                    o = (0, p.useCallback)((e, n) => {
                      t.current.onSendIdChange?.(e, n)
                    }, [])
                  ;(0, p.useEffect)(() => {
                    e.isAvailable &&
                      !e.emailVersionSent &&
                      null != e.initialSendId &&
                      i((t) =>
                        "idle" === t.kind
                          ? { kind: "polling_final", sendId: e.initialSendId, pollSource: "initial_send_id" }
                          : t,
                      )
                  }, [e.emailVersionSent, e.initialSendId, e.isAvailable])
                  let l = (0, p.useCallback)((e) => {
                      let n = t.current,
                        s = n.selectedSenderAccount
                      !n.isAvailable ||
                        null == s ||
                        n.emailVersionSent ||
                        eP(a.current) ||
                        i((t) =>
                          eP(t)
                            ? t
                            : {
                                kind: "sending_in_progress",
                                clientSendId: e,
                                sendId: e,
                                undoRequested: !1,
                                undoAvailable: !1,
                                undoRequestInFlight: !1,
                                unsendExpiresAtMs: null,
                                selectedSenderAccount: s,
                                recipient: n.recipient,
                                cc: n.cc,
                                bcc: n.bcc,
                                subject: n.subject,
                                body: n.body,
                                sourceId: n.sourceId,
                                sourceType: n.sourceType,
                                emailAction: n.emailAction,
                              },
                        )
                    }, []),
                    d = (0, p.useCallback)(
                      (e) => {
                        let n = t.current
                        if (!n.isAvailable) return
                        let o = a.current,
                          l = (n.now ?? Date.now)()
                        if (
                          (s("undo_clicked", {
                            send_id: e,
                            client_now_ms: String(l),
                            document_visibility_state: n.getVisibilityState?.() ?? "unknown",
                            undo_available: "sending_in_progress" === o.kind ? String(o.undoAvailable) : "false",
                            unsend_expires_at_ms:
                              "sending_in_progress" === o.kind && null != o.unsendExpiresAtMs
                                ? String(Math.round(o.unsendExpiresAtMs))
                                : "unknown",
                            undo_remaining_ms:
                              "sending_in_progress" === o.kind && null != o.unsendExpiresAtMs
                                ? String(Math.round(o.unsendExpiresAtMs - l))
                                : "unknown",
                          }),
                          "polling_final" === o.kind)
                        ) {
                          ;(s("undo_failed", { send_id: e, reason_code: "undo_not_allowed_in_polling_final" }),
                            r({ kind: "undo_failed" }))
                          return
                        }
                        if ("sending_in_progress" !== o.kind) {
                          ;(s("undo_failed", { send_id: e, reason_code: "undo_not_in_progress_state" }),
                            r({ kind: "undo_failed" }))
                          return
                        }
                        if (o.sendId !== e) {
                          ;(s("undo_failed", { send_id: o.sendId, reason_code: "undo_send_id_mismatch" }),
                            r({ kind: "undo_failed" }))
                          return
                        }
                        o.undoRequestInFlight ||
                          i((t) =>
                            "sending_in_progress" !== t.kind || t.sendId !== e || t.undoRequestInFlight
                              ? t
                              : { ...t, undoRequested: !0, undoRequestInFlight: t.undoAvailable },
                          )
                      },
                      [s, r],
                    ),
                    c = "sending_in_progress" === n.kind ? n.clientSendId : null
                  ;(0, p.useEffect)(() => {
                    let e = a.current
                    if (
                      null == c ||
                      "sending_in_progress" !== e.kind ||
                      e.clientSendId !== c ||
                      e.undoAvailable ||
                      null != e.unsendExpiresAtMs
                    )
                      return
                    o(e.sendId, e.selectedSenderAccount.id)
                    let n = !1,
                      l = (t, n) => {
                        "sending_in_progress" === a.current.kind &&
                          a.current.clientSendId === c &&
                          (i({ kind: "idle" }),
                          o(null),
                          s("send_failed", {
                            send_id: e.sendId,
                            sender_provider: e.selectedSenderAccount.provider,
                            sender_link_id: e.selectedSenderAccount.id,
                            reason_code: t,
                            ...(null == n ? {} : { error_message: n }),
                          }),
                          r({ kind: "send_failed", detail: t, ...(null == n ? {} : { errorMessage: n }) }))
                      }
                    return (
                      (async () => {
                        let d = (function ({
                          sendId: e,
                          selectedSenderAccount: t,
                          recipient: n,
                          cc: i,
                          bcc: a,
                          subject: s,
                          body: r,
                          sourceId: o,
                          sourceType: l,
                          emailAction: d,
                        }) {
                          let c = eT(n),
                            u = eT(i),
                            p = eT(a)
                          return null != d && d.provider !== t.provider
                            ? {
                                status: "error",
                                error: "provider_mismatch",
                                errorMessage: `Selected ${t.provider} sender cannot reply to a ${d.provider} message.`,
                              }
                            : !(function ({ to: e, cc: t, bcc: n }) {
                                  return eE(e) || eE(t) || eE(n)
                                })({ to: n, cc: i, bcc: a })
                              ? eN({ to: c, cc: u, bcc: p })
                                ? {
                                    status: "success",
                                    request: {
                                      send_id: e,
                                      link_id: t.id,
                                      to: c,
                                      cc: u,
                                      bcc: p,
                                      subject: s,
                                      body: r,
                                      ...(null == o ? {} : { source_id: o }),
                                      ...(null == l ? {} : { source_type: l }),
                                      ...(null == d
                                        ? {}
                                        : { email_action: d.type, reference_message_id: d.referenceMessageId }),
                                    },
                                  }
                                : { status: "error", error: "missing_recipients" }
                              : { status: "error", error: "invalid_recipients" }
                        })({
                          sendId: e.sendId,
                          selectedSenderAccount: e.selectedSenderAccount,
                          recipient: e.recipient,
                          cc: e.cc,
                          bcc: e.bcc,
                          subject: e.subject,
                          body: e.body,
                          sourceId: e.sourceId,
                          sourceType: e.sourceType,
                          emailAction: e.emailAction,
                        })
                        if ("error" === d.status) return void l(d.error, d.errorMessage)
                        let u = t.current,
                          p = u.monotonicNow ?? (() => ("u" < typeof performance ? Date.now() : performance.now())),
                          m = p(),
                          f = await u.transport.sendEmail(d.request)
                        if (n) return
                        if ("error" === f.status) return void l("send_request_error", f.errorMessage)
                        let h = (t.current.now ?? Date.now)(),
                          g = f.data.sendId,
                          b = Date.parse(f.data.unsendExpiresAt)
                        ;(s("send_response_received", {
                          send_id: g,
                          send_request_elapsed_ms: String(Math.round(p() - m)),
                          unsend_expires_at: f.data.unsendExpiresAt,
                          unsend_expires_at_ms: String(Math.round(b)),
                          undo_remaining_ms: String(Math.round(b - h)),
                          client_now_ms: String(h),
                        }),
                          g !== e.clientSendId &&
                            s("send_id_mismatch", {
                              send_id: e.sendId,
                              reason_code: "send_id_mismatch_client_vs_server",
                              client_send_id: e.clientSendId,
                              server_send_id: g,
                            }))
                        let w = !Number.isFinite(b) || b <= h
                        w &&
                          "sending_in_progress" === a.current.kind &&
                          a.current.clientSendId === c &&
                          a.current.undoRequested &&
                          r({ kind: "undo_failed" })
                        let x = a.current
                        "sending_in_progress" === x.kind &&
                          x.clientSendId === c &&
                          (w
                            ? i({ kind: "polling_final", sendId: g, pollSource: "active_send" })
                            : (i({
                                ...x,
                                sendId: g,
                                undoAvailable: !0,
                                undoRequestInFlight: x.undoRequested || x.undoRequestInFlight,
                                unsendExpiresAtMs: b,
                              }),
                              o(g, e.selectedSenderAccount.id)))
                      })(),
                      () => {
                        n = !0
                      }
                    )
                  }, [c, s, r, o])
                  let u =
                    "sending_in_progress" === n.kind && n.undoRequested && n.undoAvailable && n.undoRequestInFlight
                      ? n.sendId
                      : null
                  ;(0, p.useEffect)(() => {
                    if (null == u) return
                    let e = !1
                    return (
                      (async () => {
                        let n = await t.current.transport.unsendEmail({ send_id: u })
                        e ||
                          "sending_in_progress" !== a.current.kind ||
                          a.current.sendId !== u ||
                          ("success" === n.status
                            ? (s("undo_success", { send_id: u }), i({ kind: "success_unsent" }), o(null))
                            : (s("undo_failed", {
                                send_id: u,
                                reason_code: "undo_request_error",
                                ...(null == n.errorMessage ? {} : { error_message: n.errorMessage }),
                              }),
                              i({ kind: "polling_final", sendId: u, pollSource: "active_send" }),
                              r({ kind: "undo_failed" })))
                      })(),
                      () => {
                        e = !0
                      }
                    )
                  }, [s, r, o, u])
                  let m =
                      "sending_in_progress" === n.kind &&
                      n.undoAvailable &&
                      !n.undoRequestInFlight &&
                      null != n.unsendExpiresAtMs
                        ? n.sendId
                        : null,
                    f =
                      "sending_in_progress" === n.kind && n.undoAvailable && !n.undoRequestInFlight
                        ? n.unsendExpiresAtMs
                        : null
                  ;(0, p.useEffect)(() => {
                    if (null != m && null != f) {
                      var e, n
                      let a
                      return (
                        (e = f),
                        (n = t.current.now ?? Date.now),
                        (a = setTimeout(
                          () => {
                            i((e) =>
                              "sending_in_progress" !== e.kind || e.sendId !== m || e.undoRequestInFlight
                                ? e
                                : { kind: "polling_final", sendId: m, pollSource: "active_send" },
                            )
                          },
                          Math.max(e - n(), 0),
                        )),
                        () => clearTimeout(a)
                      )
                    }
                  }, [m, f])
                  let h = "polling_final" === n.kind ? n.sendId : null,
                    g = "polling_final" === n.kind ? n.pollSource : null
                  return ((0, p.useEffect)(() => {
                    if (null == h) return
                    let e = t.current.pollingTiming ?? e5,
                      n = !1
                    return (
                      (async () => {
                        let l = await (async () => {
                          for (let i = 0; i < e.pollMaxAttempts; i++) {
                            if (n) return { outcome: "cancelled" }
                            let a = await t.current.transport.getEmailStatus({ send_id: h })
                            if (
                              (s("poll_attempt", {
                                send_id: h,
                                attempt_number: String(i + 1),
                                poll_source: g ?? "null",
                                request_status: a.requestStatus,
                                ...("success" === a.requestStatus ? { email_status: a.emailStatus } : {}),
                                ...(null == a.errorMessage ? {} : { error_message: a.errorMessage }),
                              }),
                              "success" === a.requestStatus)
                            ) {
                              if ("sent" === a.emailStatus)
                                return {
                                  outcome: "send_success",
                                  ...(null == a.sentEmail ? {} : { sentEmail: a.sentEmail }),
                                }
                              if ("send_failed" === a.emailStatus)
                                return {
                                  outcome: "send_failed",
                                  reasonCode: "poll_status_send_failed",
                                  errorMessage: a.errorMessage,
                                }
                              if ("unsent" === a.emailStatus) return { outcome: "undo_success" }
                            }
                            await (function (e) {
                              return new Promise((t) => setTimeout(t, e))
                            })(e.pollIntervalMs)
                          }
                          return { outcome: "send_failed", reasonCode: "poll_exhausted" }
                        })()
                        "cancelled" !== l.outcome &&
                          "polling_final" === a.current.kind &&
                          a.current.sendId === h &&
                          ("send_success" === l.outcome
                            ? (s("send_success", { send_id: h }),
                              i({ kind: "idle" }),
                              o(null),
                              t.current.markEmailVersionSent?.(l.sentEmail))
                            : "send_failed" === l.outcome
                              ? (s("send_failed", {
                                  send_id: h,
                                  reason_code: l.reasonCode,
                                  ...(null == l.errorMessage ? {} : { error_message: l.errorMessage }),
                                }),
                                i({ kind: "idle" }),
                                o(null),
                                r({
                                  kind: "send_failed",
                                  ...(null == l.errorMessage ? {} : { errorMessage: l.errorMessage }),
                                }))
                              : (s("undo_success", { send_id: h }), i({ kind: "success_unsent" }), o(null)))
                      })(),
                      () => {
                        n = !0
                      }
                    )
                  }, [s, g, r, o, h]),
                  e.isAvailable)
                    ? { sendEmail: l, undoEmailSend: d, state: e.emailVersionSent ? { kind: "success_sent" } : n }
                    : { sendEmail: () => void 0, undoEmailSend: () => void 0, state: { kind: "idle" } }
                })({
                  isAvailable: i && (null != A || null != _),
                  selectedSenderAccount: A,
                  recipient: o,
                  cc: n,
                  bcc: e,
                  subject: l,
                  body: i ? ez(t) : "",
                  emailVersionSent: y,
                  initialSendId: _,
                  transport: {
                    async sendEmail(e) {
                      try {
                        let t = await f.Request.safePost("/aip/connectors/email/send_email", {
                          surface: "writing_blocks",
                          requestBody: e,
                        })
                        return { status: "success", data: { sendId: t.send_id, unsendExpiresAt: t.unsend_expires_at } }
                      } catch (e) {
                        return { status: "error", errorMessage: e$(e) }
                      }
                    },
                    async unsendEmail(e) {
                      try {
                        return (
                          await f.Request.safePost("/aip/connectors/email/unsend_email", {
                            surface: "writing_blocks",
                            requestBody: e,
                          }),
                          { status: "success" }
                        )
                      } catch (e) {
                        return { status: "error", errorMessage: e$(e) }
                      }
                    },
                    async getEmailStatus(e) {
                      try {
                        let t = await f.Request.safePost("/aip/connectors/email/send_email_status", {
                          surface: "writing_blocks",
                          requestBody: e,
                        })
                        return {
                          requestStatus: "success",
                          emailStatus: t.status,
                          errorMessage: t.error_message ?? void 0,
                        }
                      } catch (e) {
                        return { requestStatus: "error", errorMessage: e$(e) }
                      }
                    },
                  },
                  sourceId: d,
                  sourceType: null == d ? void 0 : "email_writing_block",
                  emailAction: S,
                  markEmailVersionSent: () => {
                    I({ isSent: !0, [eM]: null })
                  },
                  onSendIdChange: (e, t) => {
                    I({ [eM]: e, ...(null == t ? {} : { [eB]: t }) })
                  },
                  onFailure: L,
                  getVisibilityState: () => document.visibilityState,
                })
              return {
                emailAccounts: x,
                emailSendState: E,
                getContactsForQuery: M,
                isLoadingSenderAccounts: w,
                searchContacts: B,
                selectedSenderAccount: A,
                selectSenderAccount: j,
                sendEmail: T,
                undoEmailSend: N,
              }
            })(t),
            z = w?.writingBlockMetadata
          g[10] !== z ? ((n = eO(z)), (g[10] = z), (g[11] = n)) : (n = g[11])
          let $ = n
          if (g[12] !== $ || g[13] !== R || g[14] !== A) {
            var K
            ;((s = A && ($ || eP((K = R)) || "success_sent" === K.kind)),
              (g[12] = $),
              (g[13] = R),
              (g[14] = A),
              (g[15] = s))
          } else s = g[15]
          let Z = s,
            Q = x && !Z,
            Y = w?.writingBlockMetadata
          g[16] !== Y ? ((r = (0, ej.r6)(Y)), (g[16] = Y), (g[17] = r)) : (r = g[17])
          let J = r
          g[18] !== _ || g[19] !== J
            ? ((o = (e, t, n, i) => {
                i &&
                  _?.({
                    contacts: (0, ej.py)({
                      recipient: "recipient" === e ? n : (J.recipient ?? []),
                      cc: "cc" === e ? n : (J.cc ?? []),
                      bcc: "bcc" === e ? n : (J.bcc ?? []),
                    }),
                  })
              }),
              (g[18] = _),
              (g[19] = J),
              (g[20] = o))
            : (o = g[20])
          let ee = o
          g[21] !== b ||
          g[22] !== $ ||
          g[23] !== w?.bcc ||
          g[24] !== w?.cc ||
          g[25] !== w?.recipient ||
          g[26] !== w?.subject ||
          g[27] !== y
            ? ((l = (e) => {
                ;($ || y(e),
                  (0, ek.E0)({
                    href: (0, ej.vy)({
                      bcc: w?.bcc ?? "",
                      body: ez(b),
                      cc: w?.cc ?? "",
                      includeCcAndBcc: !0,
                      provider: e,
                      recipient: w?.recipient ?? "",
                      subject: w?.subject ?? "",
                    }),
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                  }))
              }),
              (g[21] = b),
              (g[22] = $),
              (g[23] = w?.bcc),
              (g[24] = w?.cc),
              (g[25] = w?.recipient),
              (g[26] = w?.subject),
              (g[27] = y),
              (g[28] = l))
            : (l = g[28])
          let et = l
          g[29] !== w?.writingBlockMetadata || g[30] !== U?.provider
            ? ((d = () => {
                let e = U?.provider ?? eR(w?.writingBlockMetadata)?.provider ?? "gmail"
                ;(0, ek.E0)({
                  href: (0, eD.Cj)(
                    { id: "outlook" === e ? e8 : e9, installUrl: null, name: "outlook" === e ? "Outlook" : "Gmail" },
                    { connectorId: "outlook" === e ? e8 : e9, oauthReferrer: "writing_email" },
                  ),
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                })
              }),
              (g[29] = w?.writingBlockMetadata),
              (g[30] = U?.provider),
              (g[31] = d))
            : (d = g[31])
          let en = d
          return (
            g[32] !== $ ||
            g[33] !== w?.bcc ||
            g[34] !== w?.cc ||
            g[35] !== w?.recipient ||
            g[36] !== R ||
            g[37] !== en ||
            g[38] !== et ||
            g[39] !== A ||
            g[40] !== F ||
            g[41] !== x ||
            g[42] !== U ||
            g[43] !== H ||
            g[44] !== W
              ? ((c = A
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(eH, { disabled: !x, onOpen: et }),
                        (0, i.jsx)(eX, {
                          bcc: w?.bcc ?? "",
                          cc: w?.cc ?? "",
                          emailSendState: R,
                          isPersistedSent: $,
                          isLoadingSenderAccounts: F,
                          onConnect: en,
                          onSend: H,
                          onUndoSend: W,
                          recipient: w?.recipient ?? "",
                          selectedSenderAccount: U,
                        }),
                      ],
                    })
                  : null),
                (g[32] = $),
                (g[33] = w?.bcc),
                (g[34] = w?.cc),
                (g[35] = w?.recipient),
                (g[36] = R),
                (g[37] = en),
                (g[38] = et),
                (g[39] = A),
                (g[40] = F),
                (g[41] = x),
                (g[42] = U),
                (g[43] = H),
                (g[44] = W),
                (g[45] = c))
              : (c = g[45]),
            g[46] !== N ||
            g[47] !== D ||
            g[48] !== ee ||
            g[49] !== Q ||
            g[50] !== A ||
            g[51] !== J ||
            g[52] !== q ||
            g[53] !== V ||
            g[54] !== U
              ? ((m = A
                  ? {
                      contacts: J,
                      getContactsForQuery: D,
                      onRecipientMetadataChange: ee,
                      onSearch: q,
                      renderSender: (e) => {
                        let { displayMode: t, isCollapsed: n, onOpenChange: a } = e
                        return null != U && null != N && (N.length > 1 || !n)
                          ? (0, i.jsx)(e2, {
                              accounts: N,
                              displayMode: t,
                              isDisabled: !Q,
                              onChange: V,
                              onOpenChange: a,
                              selectedAccount: U,
                            })
                          : null
                      },
                    }
                  : void 0),
                (g[46] = N),
                (g[47] = D),
                (g[48] = ee),
                (g[49] = Q),
                (g[50] = A),
                (g[51] = J),
                (g[52] = q),
                (g[53] = V),
                (g[54] = U),
                (g[55] = m))
              : (m = g[55]),
            g[56] !== Z || g[57] !== c || g[58] !== m
              ? ((h = { actions: c, emailRowsCapabilities: m, isLocked: Z }),
                (g[56] = Z),
                (g[57] = c),
                (g[58] = m),
                (g[59] = h))
              : (h = g[59]),
            h
          )
        })(B),
        tr = "slides" === e_ && (eJ || Y?.writingBlockMetadata?.artifact_generation_completed === !0),
        to = ti && !ta.isLocked && !tr && !ei?.isSaving,
        tl = Y?.writingBlockMetadata
      $[15] !== tl ? ((L = (0, l.o)(tl)), ($[15] = tl), ($[16] = L)) : (L = $[16])
      let tc = L.length,
        tp = Y?.writingBlockMetadata
      $[17] !== tp ? ((T = (0, d._F)(tp)), ($[17] = tp), ($[18] = T)) : (T = $[18])
      let tg = T
      ;($[19] !== ta.isLocked ||
      $[20] !== tc ||
      $[21] !== tg ||
      $[22] !== eS ||
      $[23] !== ea ||
      $[24] !== es ||
      $[25] !== eG ||
      $[26] !== J ||
      $[27] !== eg ||
      $[28] !== e_ ||
      $[29] !== ey
        ? ((E = () => {
            if (
              eQ.current ||
              eS ||
              0 === tc ||
              ea ||
              null == es ||
              null == J ||
              "conversation_unavailable" === eg ||
              "message_not_found" === eg
            )
              return
            eQ.current = !0
            let e = null == eg && !tg && !ta.isLocked,
              t = ta.isLocked
                ? "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_EMAIL_SEND_LOCKED"
                : (function (e) {
                    switch (e) {
                      case "missing_message_id":
                        return "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_MISSING_MESSAGE_ID"
                      case "not_primary_writing_block":
                        return "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_NOT_PRIMARY_WRITING_BLOCK"
                      case "not_last_node_in_message":
                        return "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_NOT_LAST_NODE_IN_MESSAGE"
                      case "invalid_source_message":
                        return "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_INVALID_SOURCE_MESSAGE"
                      case "superseded_by_later_turn":
                        return "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_SUPERSEDED_BY_LATER_TURN"
                      case "conversation_unavailable":
                      case "message_not_found":
                      case null:
                      case void 0:
                        return "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_UNKNOWN"
                    }
                  })(eg)
            ;(0, v.yy)(eG, r.zQG, {
              conversationId: J,
              followupCount: (0, s.At)(tc),
              messageId: es,
              notShownReason: e ? void 0 : t,
              outcome: e
                ? "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_SHOWN"
                : "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_NOT_SHOWN",
              variant: e_,
              writingBlockId: ey,
            })
          }),
          (N = [ta.isLocked, tc, tg, eS, ea, es, eG, J, eg, e_, ey]),
          ($[19] = ta.isLocked),
          ($[20] = tc),
          ($[21] = tg),
          ($[22] = eS),
          ($[23] = ea),
          ($[24] = es),
          ($[25] = eG),
          ($[26] = J),
          ($[27] = eg),
          ($[28] = e_),
          ($[29] = ey),
          ($[30] = E),
          ($[31] = N))
        : ((E = $[30]), (N = $[31])),
        (0, p.useEffect)(E, N))
      let tb = ee ?? null != J
      ;($[32] !== es || $[33] !== eG || $[34] !== J || $[35] !== e_ || $[36] !== ey
        ? ((R = (e) => {
            let { checked: t } = e
            null != J &&
              null != es &&
              (0, v.yy)(eG, r.OMo, {
                checked: String(t),
                messageId: es,
                metricValue: (0, s.At)(+!!t),
                threadId: J,
                variant: e_,
                writingBlockId: ey,
              })
          }),
          ($[32] = es),
          ($[33] = eG),
          ($[34] = J),
          ($[35] = e_),
          ($[36] = ey),
          ($[37] = R))
        : (R = $[37]),
        $[38] !== Y || $[39] !== ec || $[40] !== tn || $[41] !== e_
          ? ((D = (e, t, n) => {
              if (null == ec) return !1
              let i = "email" === e_ && Y?.subject != null ? { type: "email", subject: Y.subject } : void 0,
                a = (0, d.zl)(Y?.writingBlockMetadata, e, t)
              if (null == a && null != n) {
                let s = (0, d.I$)(Y?.writingBlockMetadata),
                  r = n.primaryOption ? [{ ...n.primaryOption, variant: i ?? n.primaryOption.variant }, ...s] : s
                if (e.index !== r.length || e.index < 1 || r.some((t) => t.id === e.id)) return !1
                a = { options: [...r, { id: e.id, label: e.id, content: t }] }
              }
              return (
                null != a && null != i && (a = (0, d.k$)(a, e, i.subject)),
                null != a && (ec({ ...a, [d.e4]: e.id, [d.uV]: !0 }), tn.selectToneSection(e.id), !0)
              )
            }),
            ($[38] = Y),
            ($[39] = ec),
            ($[40] = tn),
            ($[41] = e_),
            ($[42] = D))
          : (D = $[42]),
        $[43] !== to ||
        $[44] !== es ||
        $[45] !== J ||
        $[46] !== eI ||
        $[47] !== tn.editorView ||
        $[48] !== tn.generatePluginState ||
        $[49] !== tb ||
        $[50] !== R ||
        $[51] !== D ||
        $[52] !== e_ ||
        $[53] !== ey ||
        $[54] !== ev
          ? ((F = {
              editorView: tn.editorView,
              enableAiTools: tb,
              generatePluginState: tn.generatePluginState,
              isEditable: to,
              messageId: es,
              onTaskCheckboxToggled: R,
              onWriteLikeMeResult: D,
              serverConversationId: J,
              showMagicEditAction: eI,
              variant: e_,
              writingBlockId: ey,
              writingBlockIndex: ev,
            }),
            ($[43] = to),
            ($[44] = es),
            ($[45] = J),
            ($[46] = eI),
            ($[47] = tn.editorView),
            ($[48] = tn.generatePluginState),
            ($[49] = tb),
            ($[50] = R),
            ($[51] = D),
            ($[52] = e_),
            ($[53] = ey),
            ($[54] = ev),
            ($[55] = F))
          : (F = $[55]))
      let {
          cancelPendingAiRequests: tw,
          createEditor: tx,
          editorOverlays: t_,
          editorRootRef: ty,
          hasPendingAiEdits: tv,
          headerMagicEditAction: tk,
          isGenerateInputOpen: tS,
          isHeaderComposerOpen: tC,
          isHeaderInteractionDisabled: tA,
          isHistoryInteractionDisabled: tI,
          isEditorInteractionDisabled: tj,
          isWriteLikeMeSubmitting: tM,
          magicEdit: tB,
          onEditSelection: tL,
          onEditorKeyDownCapture: tT,
          onEditorPointerDownCapture: tE,
          onWriteLikeMeAction: tN,
          previewEngine: tP,
          resetAiTools: tO,
          resetGeneratePrompt: tR,
          submitHeaderMagicEdit: tG,
        } = (0, j.J)(F),
        tD = tA || e0,
        tF = tI || e0,
        tq = tj || e0,
        tU = tB.isLoading && "toolbar" === tB.magicEditSubmissionSource
      $[56] !== ed || $[57] !== tP
        ? ((q = (e) => {
            let t = ed?.(e, () => {
              e.isDestroyed || tP.unpinMagicEditSelection(e)
            })
            null != t && ((eY.current = t), tP.pinMagicEditSelection(e))
          }),
          ($[56] = ed),
          ($[57] = tP),
          ($[58] = q))
        : (q = $[58])
      let tV = (0, C.K)(q),
        tH = tk
      if ("slides" === e_ && null != K) {
        let e, t
        ;($[59] !== to || $[60] !== tC || $[61] !== tF || $[62] !== tO || $[63] !== tn.displayedContent || $[64] !== tG
          ? ((e = tC
              ? null
              : (0, i.jsx)(ex, {
                  disabled: !to || tF || 0 === tn.displayedContent.trim().length,
                  onCancel: tO,
                  onSubmittingChange: e3,
                  onSlideCountChange: (e) =>
                    tG(
                      `Revise this presentation outline to exactly ${e} slides total. Preserve the user's manual edits, presentation title, topic, key facts, caveats, and logical flow. Number slides consecutively using "## Slide N: <title>" headings, with 2–3 concise dash bullets per content slide and relevant links to sources, images, or charts. Preserve existing URLs and keep each link with the slide it supports. For a multi-slide outline, include a title slide unless the user explicitly requested otherwise: "## Slide 1 (Title): <presentation title>" with only an optional subtitle, counted toward the total. For a one-slide outline, omit the title slide. Combine closely related ideas when reducing slides; split complex ideas or add meaningful sections when expanding. Do not add filler or invent facts, sources, or URLs. Return only the revised outline body; do not add a writing-block wrapper or generate files.`,
                      { applyImmediately: !0 },
                    ).catch(th),
                  slideCount: (function (e) {
                    let t = e.replace(
                        /^[ \t]{0,3}((`|~)\2{2,})[^\n]*(?:\n[\s\S]*?(?:^[ \t]{0,3}\1\2*[ \t]*$|(?![\s\S]))|$)/gmu,
                        "",
                      ),
                      n = t.match(/^[ \t]{0,3}(?:#{1,6}\s+)?(?:\*\*)?slide\s+#?\d+\b/gimu)
                    if (null != n) return n.length
                    let i = (e) => {
                        let t = e.map((e) => e[1].replace(/\t/gu, "    ").length),
                          n = Math.min(...t)
                        return t.filter((e) => e === n).length
                      },
                      a = Array.from(t.matchAll(/^([ \t]*)\d+[.)]\s+\*\*/gmu))
                    if (a.length > 0) return i(a)
                    let s = new Map()
                    for (let e of t.matchAll(/^[ \t]{0,3}(#{1,6})\s+.+$/gmu)) {
                      let t = e[1].length
                      s.set(t, (s.get(t) ?? 0) + 1)
                    }
                    for (let e = 1; e <= 6; e += 1) {
                      let t = s.get(e) ?? 0
                      if (t > 1) return t
                    }
                    if (s.size > 0) return 1
                    let r = Array.from(t.matchAll(/^([ \t]*)(?:\d+[.)]|[-+*])\s+/gmu))
                    return r.length > 0 ? i(r) : Number(t.trim().length > 0)
                  })(tn.displayedContent),
                })),
            ($[59] = to),
            ($[60] = tC),
            ($[61] = tF),
            ($[62] = tO),
            ($[63] = tn.displayedContent),
            ($[64] = tG),
            ($[65] = e))
          : (e = $[65]),
          $[66] !== e
            ? ((t = (0, i.jsx)("div", { className: "flex min-h-9 min-w-0 grow items-center gap-3 px-2", children: e })),
              ($[66] = e),
              ($[67] = t))
            : (t = $[67]),
          (tH = t))
      } else if (!eS && "email" !== e_ && !tg && (eK || ei?.saveToPage)) {
        let e,
          t,
          n,
          a,
          s,
          r,
          o = !ti || tD || tF
        $[68] !== tD ||
        $[69] !== ti ||
        $[70] !== es ||
        $[71] !== el ||
        $[72] !== J ||
        $[73] !== tn.displayedContent ||
        $[74] !== eb ||
        $[75] !== e_ ||
        $[76] !== ev
          ? ((e =
              "document" === e_
                ? (0, i.jsx)(eA, {
                    content: tn.displayedContent,
                    isDisabled: !ti || tD,
                    messageId: es,
                    onBeforeExport: el,
                    renderAsSubmenu: !0,
                    serverConversationId: J,
                    title: eb,
                    writingBlockIndex: ev,
                  })
                : void 0),
            ($[68] = tD),
            ($[69] = ti),
            ($[70] = es),
            ($[71] = el),
            ($[72] = J),
            ($[73] = tn.displayedContent),
            ($[74] = eb),
            ($[75] = e_),
            ($[76] = ev),
            ($[77] = e))
          : (e = $[77])
        let l = "document" === e_ ? eu : void 0,
          d = ei?.libraryFileId,
          u = ei?.isSaving,
          p = ei?.saveConfirmation,
          f = ei?.saveToPage
        ;($[78] !== eZ || $[79] !== el
          ? ((t = eZ
              ? () => {
                  el?.().catch(tf)
                }
              : void 0),
            ($[78] = eZ),
            ($[79] = el),
            ($[80] = t))
          : (t = $[80]),
          $[81] !== eZ || $[82] !== ei || $[83] !== tn.displayedContent || $[84] !== tn.editorView
            ? ((n =
                (eZ || ei?.saveToPage) && "" !== tn.displayedContent.trim() && ei?.onSave != null
                  ? (e) => {
                      let t = tn.editorView
                      ei.onSave?.(
                        null == t || t.isDestroyed ? tn.displayedContent : (0, c.o)().serialize(t.state.doc),
                        e,
                      )
                    }
                  : void 0),
              ($[81] = eZ),
              ($[82] = ei),
              ($[83] = tn.displayedContent),
              ($[84] = tn.editorView),
              ($[85] = n))
            : (n = $[85]))
        let h = ei?.libraryFileId || o || ei?.isSaving ? void 0 : "text-tertiary"
        ;($[86] !== ei?.saveToPage || $[87] !== eb
          ? ((a =
              eb ||
              (ei?.saveToPage
                ? (0, i.jsx)(m.A, {
                    id: "codex.writingBlock.header.title.untitled",
                    defaultMessage: "Untitled",
                    description:
                      "Short placeholder title in the writing block header when no title was provided and Pages upgrade is enabled, including while the writing is still streaming.",
                  })
                : (0, i.jsx)(m.A, {
                    id: "codex.writingBlock.header.title.fallback",
                    defaultMessage: "Writing",
                    description:
                      "Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.",
                  }))),
            ($[86] = ei?.saveToPage),
            ($[87] = eb),
            ($[88] = a))
          : (a = $[88]),
          $[89] !== h || $[90] !== a
            ? ((s = (0, i.jsx)("span", { className: h, children: a })), ($[89] = h), ($[90] = a), ($[91] = s))
            : (s = $[91]),
          $[92] !== o ||
          $[93] !== e ||
          $[94] !== l ||
          $[95] !== d ||
          $[96] !== u ||
          $[97] !== p ||
          $[98] !== f ||
          $[99] !== t ||
          $[100] !== n ||
          $[101] !== s
            ? ((r = (0, i.jsx)(z, {
                disabled: o,
                downloadMenu: e,
                onOpenVersionHistory: l,
                libraryFileId: d,
                isSaving: u,
                saveConfirmation: p,
                saveToPage: f,
                onLibraryClick: t,
                onSave: n,
                children: s,
              })),
              ($[92] = o),
              ($[93] = e),
              ($[94] = l),
              ($[95] = d),
              ($[96] = u),
              ($[97] = p),
              ($[98] = f),
              ($[99] = t),
              ($[100] = n),
              ($[101] = s),
              ($[102] = r))
            : (r = $[102]),
          (tH = r))
      }
      if (
        $[103] !== tw ||
        $[104] !== K ||
        $[105] !== eC ||
        $[106] !== tx ||
        $[107] !== t_ ||
        $[108] !== ty ||
        $[109] !== ta.actions ||
        $[110] !== ta.emailRowsCapabilities ||
        $[111] !== Y?.writingBlockMetadata ||
        $[112] !== tV ||
        $[113] !== tg ||
        $[114] !== tv ||
        $[115] !== tH ||
        $[116] !== eK ||
        $[117] !== eJ ||
        $[118] !== tU ||
        $[119] !== to ||
        $[120] !== tq ||
        $[121] !== eS ||
        $[122] !== tS ||
        $[123] !== tC ||
        $[124] !== tD ||
        $[125] !== tF ||
        $[126] !== ti ||
        $[127] !== e0 ||
        $[128] !== tr ||
        $[129] !== eF ||
        $[130] !== ea ||
        $[131] !== tM ||
        $[132] !== eZ ||
        $[133] !== ei ||
        $[134] !== tB ||
        $[135] !== es ||
        $[136] !== ed ||
        $[137] !== el ||
        $[138] !== tL ||
        $[139] !== tT ||
        $[140] !== tE ||
        $[141] !== eu ||
        $[142] !== tN ||
        $[143] !== tP ||
        $[144] !== em ||
        $[145] !== tt ||
        $[146] !== tO ||
        $[147] !== tR ||
        $[148] !== eG ||
        $[149] !== J ||
        $[150] !== tn ||
        $[151] !== eh ||
        $[152] !== eb ||
        $[153] !== e_ ||
        $[154] !== ey ||
        $[155] !== ev
      ) {
        let e, t, n, a, s, l, d, u, p, w, x, _
        if (eS && (eZ || ei?.saveToPage) && !ei?.libraryFileId && ei?.onSave != null) {
          let t, n, a, s
          if (ei.saveToPage) {
            let e
            ;($[157] !== ei.isSaving
              ? ((e = ei.isSaving
                  ? (0, i.jsx)(m.A, {
                      id: "codex.writingBlock.page.saving",
                      defaultMessage: "Creating Page",
                      description:
                        "Accessible label on the writing block save control while its editable Page is being created. Keep this progress label short.",
                    })
                  : (0, i.jsx)(m.A, {
                      id: "codex.writingBlock.page.save",
                      defaultMessage: "Save as Page",
                      description:
                        "Label, accessible label, and tooltip for a writing block's save control. Saves the writing as an editable Page that can be found in Space. Page means a saved document, not a sheet of paper. Keep this action short.",
                    })),
                ($[157] = ei.isSaving),
                ($[158] = e))
              : (e = $[158]),
              (t = e))
          } else if (ei.isSaving && eF) {
            let e
            ;($[159] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(m.A, {
                  id: "codex.writingBlock.viewer.savingToLibrary.space",
                  defaultMessage: "Adding to Space",
                  description:
                    "Label on the expanded writing block's save button while its Space save is in progress. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                })),
                ($[159] = e))
              : (e = $[159]),
              (t = e))
          } else if (ei.isSaving) {
            let e
            ;($[160] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(m.A, {
                  id: "codex.writingBlock.viewer.savingToLibrary",
                  defaultMessage: "Adding to Library",
                  description:
                    "Label on the expanded writing block's save button while its Library save is in progress.",
                })),
                ($[160] = e))
              : (e = $[160]),
              (t = e))
          } else if (eF) {
            let e
            ;($[161] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(m.A, {
                  id: "codex.writingBlock.viewer.saveToLibrary.space",
                  defaultMessage: "Add to Space",
                  description:
                    "Button in the expanded writing block header that saves the writing block to Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                })),
                ($[161] = e))
              : (e = $[161]),
              (t = e))
          } else {
            let e
            ;($[162] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(m.A, {
                  id: "codex.writingBlock.viewer.saveToLibrary",
                  defaultMessage: "Add to Library",
                  description: "Button in the expanded writing block header that saves the writing block to Library.",
                })),
                ($[162] = e))
              : (e = $[162]),
              (t = e))
          }
          ;($[163] !== to || $[164] !== tD || $[165] !== tn.displayedContent
            ? ((n = !to || tD || "" === tn.displayedContent.trim()),
              ($[163] = to),
              ($[164] = tD),
              ($[165] = tn.displayedContent),
              ($[166] = n))
            : (n = $[166]),
            $[167] !== ei || $[168] !== tn.displayedContent || $[169] !== tn.editorView
              ? ((a = (e) => {
                  let t = tn.editorView
                  ei.onSave?.(
                    null == t || t.isDestroyed ? tn.displayedContent : (0, c.o)().serialize(t.state.doc),
                    0 === e.detail,
                  )
                }),
                ($[167] = ei),
                ($[168] = tn.displayedContent),
                ($[169] = tn.editorView),
                ($[170] = a))
              : (a = $[170]),
            $[171] !== ei.isSaving
              ? ((s = ei.isSaving ? null : (0, i.jsx)(b.I, { asset: o.f })), ($[171] = ei.isSaving), ($[172] = s))
              : (s = $[172]),
            (e = (0, i.jsxs)(A.DW, {
              "aria-busy": ei.isSaving || void 0,
              loading: ei.isSaving,
              disabled: n,
              onClick: a,
              children: [s, t],
            })))
        }
        ;($[173] !== eS ||
        $[174] !== tD ||
        $[175] !== ti ||
        $[176] !== es ||
        $[177] !== el ||
        $[178] !== J ||
        $[179] !== tn.displayedContent ||
        $[180] !== eb ||
        $[181] !== e_ ||
        $[182] !== ev
          ? ((t =
              eS && "document" === e_
                ? (0, i.jsx)(eA, {
                    appearance: "viewer",
                    content: tn.displayedContent,
                    isDisabled: !ti || tD,
                    messageId: es,
                    onBeforeExport: el,
                    serverConversationId: J,
                    title: eb,
                    writingBlockIndex: ev,
                  })
                : null),
            ($[173] = eS),
            ($[174] = tD),
            ($[175] = ti),
            ($[176] = es),
            ($[177] = el),
            ($[178] = J),
            ($[179] = tn.displayedContent),
            ($[180] = eb),
            ($[181] = e_),
            ($[182] = ev),
            ($[183] = t))
          : (t = $[183]),
          $[184] !== eS || $[185] !== tF || $[186] !== ti || $[187] !== eu || $[188] !== e_
            ? ((n =
                eS && "document" === e_ && null != eu ? (0, i.jsx)(h.h, { disabled: !ti || tF, onSelect: eu }) : null),
              ($[184] = eS),
              ($[185] = tF),
              ($[186] = ti),
              ($[187] = eu),
              ($[188] = e_),
              ($[189] = n))
            : (n = $[189]),
          $[190] !== tg ||
          $[191] !== eK ||
          $[192] !== eS ||
          $[193] !== tD ||
          $[194] !== ti ||
          $[195] !== eZ ||
          $[196] !== ei?.libraryFileId ||
          $[197] !== es ||
          $[198] !== el ||
          $[199] !== J ||
          $[200] !== tn.displayedContent ||
          $[201] !== eb ||
          $[202] !== e_ ||
          $[203] !== ev
            ? ((a =
                "document" !== e_ || eS || ei?.libraryFileId == null || (eK && eZ && !tg)
                  ? null
                  : (0, i.jsx)(eA, {
                      content: tn.displayedContent,
                      isDisabled: !ti || tD,
                      messageId: es,
                      onBeforeExport: el,
                      serverConversationId: J,
                      title: eb,
                      writingBlockIndex: ev,
                    })),
              ($[190] = tg),
              ($[191] = eK),
              ($[192] = eS),
              ($[193] = tD),
              ($[194] = ti),
              ($[195] = eZ),
              ($[196] = ei?.libraryFileId),
              ($[197] = es),
              ($[198] = el),
              ($[199] = J),
              ($[200] = tn.displayedContent),
              ($[201] = eb),
              ($[202] = e_),
              ($[203] = ev),
              ($[204] = a))
            : (a = $[204]),
          $[205] !== K ||
          $[206] !== tF ||
          $[207] !== ti ||
          $[208] !== tr ||
          $[209] !== tn.displayedContent ||
          $[210] !== e_ ||
          $[211] !== ey
            ? ((s =
                "slides" === e_ && null != K && null != ey
                  ? (0, i.jsx)(eo, {
                      content: tn.displayedContent,
                      conversationId: K,
                      disabled: !ti || tr || tF,
                      onSubmittingChange: e1,
                      writingBlockId: ey,
                    })
                  : null),
              ($[205] = K),
              ($[206] = tF),
              ($[207] = ti),
              ($[208] = tr),
              ($[209] = tn.displayedContent),
              ($[210] = e_),
              ($[211] = ey),
              ($[212] = s))
            : (s = $[212]),
          $[213] !== ta.actions || $[214] !== a || $[215] !== s
            ? ((l = (0, i.jsxs)(i.Fragment, { children: [a, ta.actions, s] })),
              ($[213] = ta.actions),
              ($[214] = a),
              ($[215] = s),
              ($[216] = l))
            : (l = $[216]),
          $[217] !== tB
            ? ((d = () => {
                "toolbar" === tB.magicEditSubmissionSource && tB.cancelMagicEdit()
              }),
              ($[217] = tB),
              ($[218] = d))
            : (d = $[218]),
          $[219] !== tP || $[220] !== tn.editorView
            ? ((u = (e) => {
                let t = tn.editorView
                null == t || t.isDestroyed || (e ? tP.pinMagicEditSelection(t) : tP.unpinMagicEditSelection(t))
              }),
              ($[219] = tP),
              ($[220] = tn.editorView),
              ($[221] = u))
            : (u = $[221]),
          $[222] !== es || $[223] !== eG || $[224] !== J || $[225] !== e_ || $[226] !== ey || $[227] !== ev
            ? ((p = (e) => {
                null != J &&
                  null != es &&
                  ((0, v.yy)(eG, r.DBq, {
                    conversationId: J,
                    messageId: es,
                    variant: e_,
                    writingBlockId: ey,
                    writingBlockIndex: null == ev ? void 0 : String(ev),
                  }),
                  f.Request.safePost("/conversation/implicit_message_feedback", {
                    requestBody: {
                      conversation_id: J,
                      message_id: es,
                      source: "mouse",
                      location: "writing-block",
                      feedback: { feedback_type: "copy", selected_text_length: e.length },
                    },
                  }).catch(tm))
              }),
              ($[222] = es),
              ($[223] = eG),
              ($[224] = J),
              ($[225] = e_),
              ($[226] = ey),
              ($[227] = ev),
              ($[228] = p))
            : (p = $[228]),
          $[229] !== eC || $[230] !== eG || $[231] !== J || $[232] !== eh
            ? ((w = () => {}), ($[229] = eC), ($[230] = eG), ($[231] = J), ($[232] = eh), ($[233] = w))
            : (w = $[233]),
          $[234] !== tR
            ? ((x = (e) => {
                ;(0, I.r0)(e, tR)
              }),
              ($[234] = tR),
              ($[235] = x))
            : (x = $[235]),
          $[236] !== tO || $[237] !== tn
            ? ((_ = (e) => {
                e !== tn.activeToneSectionId && (tO(), tn.selectToneSection(e))
              }),
              ($[236] = tO),
              ($[237] = tn),
              ($[238] = _))
            : (_ = $[238]),
          (U = tt({
            actionsPresentation: eS ? "viewer" : "inline",
            viewerDownloadControl: t,
            ...(tD ? { copyInteractionDisabled: !0 } : {}),
            viewerVersionHistoryMenuItem: n,
            actionsAfterCopy: l,
            createEditor: tx,
            editorOverlays: t_,
            editorRootRef: ty,
            editorInteractionDisabled: tq,
            onBeforeExternalContentUpdate: tO,
            emailRowsCapabilities: ta.emailRowsCapabilities,
            hideFormatToolbar: tC || tS || (tq && !tU),
            hideSlashMenu: tS,
            headerLeadingContent: tH,
            historyInteractionDisabled: tF || tr,
            isEditable: to,
            isEditSelectionLoading: tU,
            isHeaderComposerOpen: tC,
            isMagicEditSubmitting: tB.isLoading || e0,
            isWriteLikeMeSubmitting: tM,
            metadataInteractionDisabled: tF,
            onCancelEditSelection: d,
            onAskForChanges: null == ed ? void 0 : tV,
            onEditSelection: tL,
            onEditSelectionOpenChange: u,
            onCopy: p,
            onEditorEscape: !eS || ea || tv ? void 0 : g.xJ,
            onCopyContentPrepared: w,
            onEditorKeyDownCapture: tT,
            onEditorPointerDownCapture: tE,
            onWriteLikeMeAction: tN,
            onSlashMenuExecute: x,
            onToneSectionSelect: _,
            renderFrame: null == em ? void 0 : (t) => em({ ...t, viewerTitleControl: e }, tv || eJ, tw),
            writingBlockMetadata: Y?.writingBlockMetadata,
          })),
          ($[103] = tw),
          ($[104] = K),
          ($[105] = eC),
          ($[106] = tx),
          ($[107] = t_),
          ($[108] = ty),
          ($[109] = ta.actions),
          ($[110] = ta.emailRowsCapabilities),
          ($[111] = Y?.writingBlockMetadata),
          ($[112] = tV),
          ($[113] = tg),
          ($[114] = tv),
          ($[115] = tH),
          ($[116] = eK),
          ($[117] = eJ),
          ($[118] = tU),
          ($[119] = to),
          ($[120] = tq),
          ($[121] = eS),
          ($[122] = tS),
          ($[123] = tC),
          ($[124] = tD),
          ($[125] = tF),
          ($[126] = ti),
          ($[127] = e0),
          ($[128] = tr),
          ($[129] = eF),
          ($[130] = ea),
          ($[131] = tM),
          ($[132] = eZ),
          ($[133] = ei),
          ($[134] = tB),
          ($[135] = es),
          ($[136] = ed),
          ($[137] = el),
          ($[138] = tL),
          ($[139] = tT),
          ($[140] = tE),
          ($[141] = eu),
          ($[142] = tN),
          ($[143] = tP),
          ($[144] = em),
          ($[145] = tt),
          ($[146] = tO),
          ($[147] = tR),
          ($[148] = eG),
          ($[149] = J),
          ($[150] = tn),
          ($[151] = eh),
          ($[152] = eb),
          ($[153] = e_),
          ($[154] = ey),
          ($[155] = ev),
          ($[156] = U))
      } else U = $[156]
      let tW = U,
        tz =
          (((eV?.hash === "" && null != J && null != es && (0, tu.Mi)({ threadId: J, messageId: es })) ||
            (eU.get("footer_experiment_enabled", !1) && to && !tD && null == eg && (0 === tc || tg))) &&
            !eS &&
            0 === ev &&
            null != J,
          null)
      return (
        $[239] !== Y?.writingBlockMetadata ||
        $[240] !== tg ||
        $[241] !== to ||
        $[242] !== eS ||
        $[243] !== tD ||
        $[244] !== es ||
        $[245] !== ep ||
        $[246] !== eG ||
        $[247] !== J ||
        $[248] !== eg ||
        $[249] !== e_ ||
        $[250] !== ey ||
        $[251] !== ev
          ? ((V =
              eS || tg || null == ep || 0 !== ev
                ? null
                : (0, i.jsx)(td, {
                    ineligibilityReason: eg,
                    isDisabled: !to || tD,
                    metadata: Y?.writingBlockMetadata,
                    onFollowupClick: (e, t) => {
                      null != J &&
                        null != es &&
                        (0, v.yy)(eG, r.F6J, {
                          conversationId: J,
                          followupCount: (0, s.At)(t),
                          followupPosition: (0, s.At)(e),
                          messageId: es,
                          variant: e_,
                          writingBlockId: ey,
                        })
                    },
                    onSelect: ep,
                  })),
            ($[239] = Y?.writingBlockMetadata),
            ($[240] = tg),
            ($[241] = to),
            ($[242] = eS),
            ($[243] = tD),
            ($[244] = es),
            ($[245] = ep),
            ($[246] = eG),
            ($[247] = J),
            ($[248] = eg),
            ($[249] = e_),
            ($[250] = ey),
            ($[251] = ev),
            ($[252] = V))
          : (V = $[252]),
        $[253] !== eS || $[254] !== es || $[255] !== J || $[256] !== eL || $[257] !== ey
          ? ((H =
              eS || null == J || null == es || null == ey
                ? null
                : (0, i.jsx)(ts, {
                    messageId: es,
                    serverConversationId: J,
                    userEditedWritingBlock: eL,
                    writingBlockId: ey,
                  })),
            ($[253] = eS),
            ($[254] = es),
            ($[255] = J),
            ($[256] = eL),
            ($[257] = ey),
            ($[258] = H))
          : (H = $[258]),
        $[259] !== tz || $[260] !== V || $[261] !== H || $[262] !== tW
          ? ((W = (0, i.jsxs)(i.Fragment, { children: [tW, tz, V, H] })),
            ($[259] = tz),
            ($[260] = V),
            ($[261] = H),
            ($[262] = tW),
            ($[263] = W))
          : (W = $[263]),
        W
      )
    }
    function tm() {}
    function tf() {}
    function th() {
      return !1
    }
    ;(0, w._)(
      async () => (await Promise.all([n.e(967847), n.e(112878)]).then(n.bind(n, "btKb"))).WritingStyleUpsellFooter,
    )
  },
  vQRL(e, t, n) {
    var i = n("ASxG")
    let a = "writing-style-footer-checkout",
      s = "oai/apps/contextualUpsellId",
      r = i.object({
        id: i.string(),
        userId: i.string(),
        accountId: i.string(),
        threadId: i.string(),
        messageId: i.string(),
        createdAt: i.number(),
        originKey: i.string(),
        stage: i.enum(["opening", "pricing", "checkout", "success", "returning"]),
        context: i.string().nullable(),
      })
    function o(e) {
      let t
      return (
        d()?.stage === "returning" &&
        null != (t = d()) &&
        ["userId", "accountId", "threadId", "messageId"].every((n) => void 0 === e[n] || t[n] === e[n])
      )
    }
    function l(e) {
      try {
        let t = d()
        if (null == e || t?.id !== e) return
        ;(sessionStorage.removeItem(a), c(t.context))
      } catch {}
    }
    function d() {
      try {
        let e = r.safeParse(JSON.parse(sessionStorage.getItem(a) ?? "null")),
          t = e.success ? Date.now() - e.data.createdAt : 0 / 0
        return e.success && t >= 0 && t < 18e5 ? e.data : null
      } catch {
        return null
      }
    }
    function c(e) {
      if (
        (function (e) {
          try {
            return null != e && localStorage.getItem(s) === e
          } catch {
            return !1
          }
        })(e)
      )
        try {
          localStorage.removeItem(s)
        } catch {}
    }
    ;(i
      .object({
        source: i.string().optional(),
        checkoutReturnLocation: i
          .object({
            pathname: i.string(),
            hash: i.string(),
            state: i.object({ source: i.string().optional() }).nullable().optional(),
          })
          .optional(),
        checkoutRequest: i.object({ plan_name: i.string().optional() }).optional(),
      })
      .nullable(),
      n.d(
        t,
        {},
        {
          FJ: function (e, t, n) {
            l(d()?.id ?? null)
            try {
              let i = localStorage.getItem(s)
              n({ upsellContextId: "work", sourceThreadId: e.threadId })
              let r = localStorage.getItem(s)
              if (null == r || r === i) return null
              let o = {
                ...e,
                id: crypto.randomUUID(),
                createdAt: Date.now(),
                originKey: t.key,
                stage: "opening",
                context: r,
              }
              if (
                (function (e) {
                  try {
                    return (sessionStorage.setItem(a, JSON.stringify(e)), !0)
                  } catch {
                    return !1
                  }
                })(o)
              )
                return o.id
              return (c(r), null)
            } catch {
              return null
            }
          },
          MF: l,
          Mi: o,
          aO: function (e) {
            return !!o(e) && (l(d()?.id ?? null), null == d())
          },
        },
      ))
  },
  gZqq(e, t, n) {
    let i = (0, n("nkTT").a)({
      name: "arrow-rotate-counterclockwise-clock-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.043457, y: 2.043457, width: 15.913086, height: 15.913086 },
        visualBounds: { x: 2.043457, y: 2.043457, width: 15.913086, height: 15.913086 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.043457, y: 2.043457, width: 15.913086, height: 15.913086 },
        center: { x: 10, y: 10 },
        insets: { top: 2.043457, right: 2.043457, bottom: 2.043457, left: 2.043457 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.0005 2.04346C14.3947 2.04364 17.9565 5.60626 17.9565 10.0005C17.9564 14.3946 14.3946 17.9564 10.0005 17.9565C6.21315 17.9565 3.04491 15.3113 2.24072 11.7681C2.15948 11.41 2.38374 11.0536 2.7417 10.9722C3.09978 10.8909 3.45622 11.1151 3.5376 11.4731C4.2072 14.4241 6.84766 16.6264 10.0005 16.6265C13.66 16.6263 16.6263 13.66 16.6265 10.0005C16.6265 6.3408 13.6601 3.37372 10.0005 3.37354C7.45999 3.37355 5.2526 4.80342 4.14014 6.90479H5.94971C6.31665 6.90504 6.61359 7.20286 6.61377 7.56982C6.61351 7.93671 6.3166 8.23461 5.94971 8.23486H2.7085C2.34139 8.23486 2.04372 7.93687 2.04346 7.56982V3.92432C2.04346 3.55705 2.34123 3.25928 2.7085 3.25928C3.07577 3.25928 3.37354 3.55705 3.37354 3.92432V5.59619C4.79891 3.45587 7.23414 2.04347 10.0005 2.04346Z" fill="currentColor"/> <path d="M10.0005 5.28369C10.3676 5.28392 10.6655 5.5816 10.6655 5.94873V9.99951C10.6655 10.1758 10.5957 10.3455 10.4712 10.4702L8.4458 12.4956C8.18617 12.7552 7.76411 12.7551 7.50439 12.4956C7.24493 12.236 7.24511 11.8149 7.50439 11.5552L9.33545 9.72412V5.94873C9.33545 5.58149 9.63325 5.28373 10.0005 5.28369Z" fill="currentColor"/>',
    })
    n.d(t, {}, { b: i })
  },
  rNmN(e, t, n) {
    let i = (0, n("nkTT").a)({
      name: "chevron-down-lg-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.475098, y: 5.725098, width: 11.049805, height: 5.911621 },
        visualBounds: { x: 2.475098, y: 5.725098, width: 11.049805, height: 5.911621 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.475098, y: 5.725098, width: 11.049805, height: 5.911621 },
        center: { x: 8, y: 8.680909 },
        insets: { top: 5.725098, right: 2.475097, bottom: 4.363281, left: 2.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8.680909 }, foreground: { x: 8, y: 8.680909 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.6289 5.87887C12.8339 5.67384 13.166 5.67384 13.3711 5.87887C13.5761 6.08389 13.5761 6.41603 13.3711 6.62105L8.60641 11.3857C8.27129 11.7204 7.72863 11.7204 7.39352 11.3857L2.62887 6.62105C2.42384 6.41603 2.42384 6.08389 2.62887 5.87887C2.83389 5.67384 3.16603 5.67384 3.37105 5.87887L7.99996 10.5078L12.6289 5.87887Z" fill="currentColor"/>',
    })
    n.d(t, {}, { c: i })
  },
  xJAz(e, t, n) {
    let i = (0, n("nkTT").a)({
      name: "chevron-down-sm-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 6.001221, y: 7.917969, width: 7.99707, height: 4.491211 },
        visualBounds: { x: 6.001221, y: 7.917969, width: 7.99707, height: 4.491211 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 6.001221, y: 7.917969, width: 7.99707, height: 4.491211 },
        center: { x: 9.999756, y: 10.163575 },
        insets: { top: 7.917969, right: 6.001709, bottom: 7.59082, left: 6.001221 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999756, y: 10.163575 },
          foreground: { x: 9.999756, y: 10.163575 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M12.863 8.11274C13.1226 7.85332 13.5437 7.85342 13.8034 8.11274C14.0631 8.37244 14.0631 8.79445 13.8034 9.05415L10.7653 12.0922C10.3429 12.5147 9.65747 12.5147 9.23506 12.0922L6.19599 9.05415C5.9363 8.79445 5.9363 8.37244 6.19599 8.11274C6.45569 7.85304 6.8777 7.85304 7.1374 8.11274L9.99971 10.976L12.863 8.11274Z" fill="currentColor"/>',
    })
    n.d(t, {}, { U: i })
  },
  aTOA(e, t, n) {
    let i = (0, n("nkTT").a)({
      name: "paper-plane-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.303711, y: 1.51416, width: 13.313477, height: 13.247559 },
        visualBounds: { x: 1.303711, y: 1.51416, width: 13.313477, height: 13.247559 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.303711, y: 1.51416, width: 13.313477, height: 13.247559 },
        center: { x: 7.96045, y: 8.13794 },
        insets: { top: 1.51416, right: 1.382812, bottom: 1.238281, left: 1.303711 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.96045, y: 8.13794 }, foreground: { x: 7.96045, y: 8.13794 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.334 1.60903C13.6792 1.15151 14.9695 2.42599 14.5293 3.777L11.3359 13.5709C10.8565 15.0413 8.83296 15.1871 8.14844 13.8004L6.13868 9.7272C6.13018 9.71491 6.12081 9.70358 6.10938 9.69399C6.10234 9.69068 6.09099 9.68607 6.07422 9.67935L2.38672 8.20083C0.901022 7.60505 0.957434 5.48241 2.47266 4.96645L12.334 1.60903ZM13.5137 3.2604L7.28614 9.67739L9.09082 13.3356C9.35878 13.8778 10.1502 13.8207 10.3379 13.2458L13.5313 3.45181C13.5593 3.36576 13.5665 3.28053 13.5615 3.19888C13.5466 3.21978 13.5321 3.24137 13.5137 3.2604ZM12.6729 2.60317L2.81055 5.9606C2.21792 6.16248 2.1956 6.99279 2.77637 7.22622L6.46582 8.70571C6.51425 8.72514 6.58896 8.75602 6.66895 8.80532L12.6953 2.59731C12.688 2.59955 12.6802 2.60068 12.6729 2.60317Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { S: i })
  },
  YMCe(e, t, n) {
    let i = (0, n("nkTT").a)({
      name: "soccerball-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.462158, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.462158, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.462158, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 7.987549, y: 8 },
        insets: { top: 1.474609, right: 1.487061, bottom: 1.47461, left: 1.462158 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.987549, y: 8 }, foreground: { x: 7.987549, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.98755 1.47461C11.591 1.47481 14.5129 4.39646 14.5129 8C14.5129 11.6035 11.591 14.5252 7.98755 14.5254C4.38389 14.5254 1.46216 11.6037 1.46216 8C1.46216 7.79582 1.47213 7.59392 1.49048 7.39453C1.49931 6.9963 1.56606 6.56899 1.72681 6.07422C1.79123 5.87597 1.8673 5.69431 1.94849 5.52539C2.78111 3.4959 4.60634 1.97986 6.82056 1.58008C7.12572 1.51289 7.4631 1.47463 7.85278 1.47461C7.87041 1.47461 7.88806 1.47637 7.90552 1.47656C7.93271 1.47623 7.96028 1.47461 7.98755 1.47461ZM6.37817 11.3428L7.04712 13.3916C7.35268 13.4445 7.66686 13.4746 7.98755 13.4746C8.29779 13.4746 8.60155 13.4461 8.89771 13.3965L9.5686 11.3418L8.99048 10.5459H6.95825L6.37817 11.3428ZM2.55786 8.69629C2.64879 9.41262 2.87793 10.0852 3.21802 10.6875L5.52856 10.7236L6.1106 9.92383L5.37036 7.80957L4.26587 7.45117L2.55786 8.69629ZM10.6799 7.75098L9.93091 10.0547L10.4153 10.7217L12.7571 10.6846C13.0852 10.1027 13.3099 9.45564 13.4065 8.7666L11.6018 7.45117L10.6799 7.75098ZM5.60571 3.06836C4.97197 3.37492 4.40651 3.80053 3.93774 4.31543L4.59497 6.45312L5.69751 6.81055L7.45337 5.54004V4.40723L5.60571 3.06836ZM8.50415 4.23145V5.53516L10.2717 6.77832L11.2727 6.45312L11.9553 4.23145C11.4708 3.72138 10.8899 3.30447 10.2405 3.01074L8.50415 4.23145Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { y: i })
  },
  Pq1H(e, t, n) {
    var i = n("irkb")
    n.d(
      t,
      {},
      {
        f: function (e, t) {
          let n = (0, i.jE)(t)
          n.getQueryState(e.queryKey) || n.prefetchQuery(e)
        },
      },
    )
  },
}
//# sourceMappingURL=400481.351dd8d323.js.map
