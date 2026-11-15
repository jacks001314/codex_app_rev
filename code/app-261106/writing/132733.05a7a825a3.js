export const __rspack_esm_ids = [132733]
export const __webpack_modules__ = {
  yTs9(e, t, n) {
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
        K: function ({ currentMessageId: e, isLastNodeInMessage: t, mapping: n, messageId: i, writingBlockIndex: o }) {
          if (null == n || null == e) return "conversation_unavailable"
          if (null == i) return "missing_message_id"
          if (0 !== o) return "not_primary_writing_block"
          if (!t) return "not_last_node_in_message"
          let a = n[i]
          if (a?.message == null) return "message_not_found"
          if (a.message.author?.role !== "assistant") return "invalid_source_message"
          let r = e,
            s = new Set()
          for (; null != r && !s.has(r);) {
            if (r === i) return null
            s.add(r)
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
            let o = "title" in i && "string" == typeof i.title ? i.title.trim() : ""
            if ((n.push({ prompt: t, sourceIndex: e, title: o || t }), 3 === n.length)) break
          }
          return n
        },
      },
    )
  },
  wxDG(e, t, n) {
    n.d(t, { t: () => d })
    var i = n("Ghh3"),
      o = n("LhrG"),
      a = n("UxLW")
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
    async function s(e, t, n) {
      if (null == e) return null
      try {
        let o = await i.Request.safeGet("/conversation/{conversation_id}", {
          parameters: { path: { conversation_id: e } },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [403, 404],
          signal: n,
        })
        return (n.throwIfAborted(), { id: e, title: o.title ?? null })
      } catch {
        return (n.throwIfAborted(), null)
      }
    }
    function l(e) {
      let t = e?.display_name?.trim() || e?.email?.trim()
      return null == t ? null : { kind: "person", name: t }
    }
    function c(e) {
      return "fulfilled" === e.status ? e.value : null
    }
    function d({ accountId: e, source: t, userId: n }) {
      return {
        enabled: null != e,
        queryFn: ({ signal: d }) => {
          if (null == e) throw Error("Cannot fetch file info without an account")
          return (async function (e, t, n, d) {
            if ("library" === e.identity.type) {
              let n = e.identity.libraryFileId
              return null != (0, a.AG)(n)
                ? r(e, n, await s(e.conversationId, t, d))
                : (async function (e, t, n, a) {
                    var r, d, u
                    let p = await (0, o.F)(t, n, a)
                    a.throwIfAborted()
                    let m = p.access_kind,
                      g = e.conversationId ?? p.origination_thread_id,
                      f = { "ChatGPT-Account-ID": n },
                      [h, b, y, w] = await Promise.allSettled([
                        "mounted" === m
                          ? Promise.resolve(null)
                          : i.Request.safeGet("/files/library/files/{library_file_id}/sharing-state", {
                              parameters: { path: { library_file_id: t }, query: { include_profile_photos: !1 } },
                              additionalHeaders: f,
                              expectedErrorStatuses: [403, 404],
                              signal: a,
                            }),
                        "mounted" === m
                          ? Promise.resolve(null)
                          : i.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                              parameters: { path: { library_file_id: t }, query: { limit: 1 } },
                              additionalHeaders: f,
                              expectedErrorStatuses: [403, 404],
                              signal: a,
                            }),
                        "shared" === m
                          ? i.Request.safeGet("/files/library/shared/files/{library_file_id}/access", {
                              parameters: { path: { library_file_id: t } },
                              additionalHeaders: f,
                              expectedErrorStatuses: [403, 404],
                              signal: a,
                            })
                          : Promise.resolve(null),
                        s(g, n, a),
                      ])
                    a.throwIfAborted()
                    let x = c(h),
                      _ = c(b)?.items[0] ?? null,
                      v = c(y),
                      k = l(x?.owner ?? null)
                    return {
                      access:
                        ((r = m),
                        (d = x),
                        (u = v?.can_edit),
                        null != d &&
                        d.viewer.principal.principal_type === d.owner.principal.principal_type &&
                        d.viewer.principal.principal_id === d.owner.principal.principal_id
                          ? "owner"
                          : d?.viewer.role_id.includes("editor") || !0 === u
                            ? "editor"
                            : "owned" === r
                              ? "owner"
                              : "shared" !== r || (null == d && null == u)
                                ? null
                                : "viewer"),
                      conversation: c(w),
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
                      updatedAt: _?.version_created_at ?? p.updated_at ?? p.file_upload_time ?? e.updatedAt ?? null,
                      updatedBy: (function (e, t, n) {
                        let i = e?.version_provenance
                        if (null == i) return null
                        if ("agent" === i.actor) return { kind: "chatgpt" }
                        let o = i.actor_id?.trim()
                        if (null != o && null != t) {
                          if (o === t.owner.principal.principal_id) return l(t.owner)
                          if (o === t.viewer.principal.principal_id) return l(t.viewer) ?? { kind: "you" }
                        }
                        let a = i.actor_display_name?.trim() || i.actor_email?.trim()
                        return null != a
                          ? { kind: "person", name: a }
                          : "create" === i.action && null != n
                            ? n
                            : { kind: "collaborator" }
                      })(_, x, k),
                    }
                  })(e, n, t, d)
            }
            let [u, p] = await Promise.all([
              i.Request.safeGet("/files/{file_id}", {
                parameters: { path: { file_id: e.identity.fileId }, query: { gizmo_id: e.gizmoId } },
                additionalHeaders: { "ChatGPT-Account-ID": t },
                signal: d,
              }).catch((t) => {
                if ((d.throwIfAborted(), null == e.sourceUrl && null == e.externalAccount)) throw t
                return null
              }),
              s(e.conversationId, t, d),
            ])
            if ((d.throwIfAborted(), null == u)) return r(e, null, p)
            let m = null != n && u.owner_id === n,
              g = m ? { kind: "you" } : null
            return {
              access: m ? "owner" : "viewer",
              conversation: p,
              createdAt: u.creation_time,
              createdBy: g,
              externalAccount: e.externalAccount ?? null,
              fileExtension: u.file_extension,
              libraryFileId: null,
              mimeType: u.mime_type ?? e.mimeType ?? null,
              name: u.name || e.name,
              parentDirectoryId: e.parentDirectoryId ?? null,
              sizeBytes: u.size ?? e.sizeBytes ?? null,
              sourceUrl: e.sourceUrl,
              updatedAt: u.ready_time ?? u.creation_time,
              updatedBy: g,
            }
          })(t, e, n, d)
        },
        queryKey: ["chatgpt-file-preview-file-info", e, n, t],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 3e4,
      }
    }
  },
  UBr4(e, t, n) {
    n.d(t, { h: () => j })
    var i = n("ABep"),
      o = n("QosV"),
      a = n("bqtn"),
      r = n("Bbed"),
      s = n("CccI"),
      l = n("EBlr"),
      c = n("Pq1H"),
      d = n("zTeN"),
      u = n("oyxz"),
      p = n("SPnB"),
      m = n("UxN3"),
      g = n("OWtl"),
      f = n("Vc45"),
      h = n("wxDG")
    function b(e) {
      let t,
        n,
        r,
        c,
        p,
        h,
        b = (0, o.c)(12),
        { ownerId: w, source: x } = e,
        _ = (0, d.gh)(g.u)
      return (
        b[0] !== x ? ((t = (0, i.jsx)(y, { source: x })), (b[0] = x), (b[1] = t)) : (t = b[1]),
        b[2] !== w || b[3] !== _
          ? ((n = () => {
              ;(0, f.hj)(_, w, "file-info")
            }),
            (b[2] = w),
            (b[3] = _),
            (b[4] = n))
          : (n = b[4]),
        b[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(a.ms.ItemIcon, {
              children: (0, i.jsx)(m.b5, { icon: { assets: { 16: s.c, 20: l.b } } }),
            })),
            (c = (0, i.jsx)(u.A, {
              id: "chatgptFilePreview.fileInfo.menuItem",
              defaultMessage: "File info",
              description:
                "Short action label in a file preview title menu. Selecting it opens a panel with metadata for the current file.",
            })),
            (b[5] = r),
            (b[6] = c))
          : ((r = b[5]), (c = b[6])),
        b[7] !== n
          ? ((p = (0, i.jsxs)(a.ms.Item, { onSelect: n, children: [r, c] })), (b[7] = n), (b[8] = p))
          : (p = b[8]),
        b[9] !== t || b[10] !== p
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [t, p] })), (b[9] = t), (b[10] = p), (b[11] = h))
          : (h = b[11]),
        h
      )
    }
    function y(e) {
      let t,
        n = (0, o.c)(4),
        { source: i } = e,
        a = (0, d.gh)(g.u),
        r = (0, d.Ul)(p.chatGptAuthenticatedAccountId$),
        s = (0, d.Ul)(p.chatGptAuthenticatedUserId$)
      return (
        n[0] !== r || n[1] !== i || n[2] !== s
          ? ((t = (0, h.t)({ accountId: r, source: i, userId: s })), (n[0] = r), (n[1] = i), (n[2] = s), (n[3] = t))
          : (t = n[3]),
        (0, c.f)(t, a.queryClient),
        null
      )
    }
    var w = n("fCWS"),
      x = n("gjSX"),
      _ = n("E8Sp"),
      v = n("xmjg"),
      k = n("O8Pw"),
      S = n("tl2n")
    function I(e) {
      let t,
        n,
        r,
        s,
        l,
        c = (0, o.c)(16),
        { libraryFileId: p, disabled: f, onSelect: h } = e,
        b = (0, d.gh)(g.u),
        { pathname: y } = (0, d.Ul)(_.gM),
        I = (0, k.Tq)(),
        C = (0, k.o0)()
      return !(0, d.Ul)(S.$7) ||
        "/library" === y ||
        y?.startsWith("/library/") ||
        "/space" === y ||
        y?.startsWith("/space/")
        ? null
        : (c[0] !== C ? ((t = C({ 16: w.Y, 20: x.V }, { 16: v.Z, 20: v.e })), (c[0] = C), (c[1] = t)) : (t = c[1]),
          c[2] !== t ? ((n = (0, i.jsx)(m.b5, { icon: { assets: t } })), (c[2] = t), (c[3] = n)) : (n = c[3]),
          c[4] !== p || c[5] !== C || c[6] !== h || c[7] !== b
            ? ((r = () => {
                ;(h?.(),
                  (0, _.oo)(b, C(`/library/file/${encodeURIComponent(p)}`, `/space/file/${encodeURIComponent(p)}`)))
              }),
              (c[4] = p),
              (c[5] = C),
              (c[6] = h),
              (c[7] = b),
              (c[8] = r))
            : (r = c[8]),
          c[9] !== I
            ? ((s = I
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
              (c[9] = I),
              (c[10] = s))
            : (s = c[10]),
          c[11] !== f || c[12] !== n || c[13] !== r || c[14] !== s
            ? ((l = (0, i.jsx)(a.ms.Item, { disabled: f, leftIcon: n, onSelect: r, children: s })),
              (c[11] = f),
              (c[12] = n),
              (c[13] = r),
              (c[14] = s),
              (c[15] = l))
            : (l = c[15]),
          l)
    }
    let C = (0, r._)(async () => (await n.e(427370).then(n.bind(n, "KU1f"))).LibraryFilePreviewVersionHistory)
    function j(e) {
      let t,
        n,
        r,
        s,
        l,
        c,
        d = (0, o.c)(23),
        {
          children: u,
          favoriteAction: p,
          file: m,
          fileInfoOwnerId: g,
          fileInfoSource: h,
          libraryFileId: y,
          openInLibraryDisabled: w,
          onOpenLibrary: x,
          versionHistoryAction: _,
        } = e,
        v = y ?? m?.libraryFileId
      d[0] !== g || d[1] !== h
        ? ((t = null == h ? void 0 : (g ?? (0, f.xd)(h))), (d[0] = g), (d[1] = h), (d[2] = t))
        : (t = d[2])
      let k = t,
        S = null != k || null != v || null != p || null != _ || null != m
      return S || null != u
        ? (d[3] !== k || d[4] !== h
            ? ((n = null == k || null == h ? null : (0, i.jsx)(b, { ownerId: k, source: h })),
              (d[3] = k),
              (d[4] = h),
              (d[5] = n))
            : (n = d[5]),
          d[6] !== v || d[7] !== x || d[8] !== w
            ? ((r = null == v ? null : (0, i.jsx)(I, { disabled: w, libraryFileId: v, onSelect: x })),
              (d[6] = v),
              (d[7] = x),
              (d[8] = w),
              (d[9] = r))
            : (r = d[9]),
          d[10] !== m || d[11] !== _
            ? ((s = _ ?? (null == m ? null : (0, i.jsx)(C, { file: m }))), (d[10] = m), (d[11] = _), (d[12] = s))
            : (s = d[12]),
          d[13] !== u || d[14] !== S
            ? ((l = S && null != u ? (0, i.jsx)(a.ms.Separator, { className: "last:hidden" }) : null),
              (d[13] = u),
              (d[14] = S),
              (d[15] = l))
            : (l = d[15]),
          d[16] !== u || d[17] !== p || d[18] !== n || d[19] !== r || d[20] !== s || d[21] !== l
            ? ((c = (0, i.jsxs)(i.Fragment, { children: [n, r, p, s, l, u] })),
              (d[16] = u),
              (d[17] = p),
              (d[18] = n),
              (d[19] = r),
              (d[20] = s),
              (d[21] = l),
              (d[22] = c))
            : (c = d[22]),
          c)
        : null
    }
  },
  KU1f(e, t, n) {
    n.d(t, { h: () => m, LibraryFilePreviewVersionHistory: () => p })
    var i = n("ABep"),
      o = n("QosV")
    let a = (0, n("iJY0").a)({
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
    var r = n("RBRC"),
      s = n("zTeN"),
      l = n("oyxz"),
      c = n("bqtn"),
      d = n("UxN3"),
      u = n("YDoP")
    function p(e) {
      let t,
        n,
        a = (0, o.c)(6),
        { file: r, disabled: l, onSelect: c } = e,
        d = (0, s.Ul)(u._)
      return null == d || d.file.libraryFileId !== r.libraryFileId
        ? null
        : (a[0] !== d || a[1] !== c ? ((t = c ?? (() => d.open())), (a[0] = d), (a[1] = c), (a[2] = t)) : (t = a[2]),
          a[3] !== l || a[4] !== t
            ? ((n = (0, i.jsx)(m, { disabled: l, onSelect: t })), (a[3] = l), (a[4] = t), (a[5] = n))
            : (n = a[5]),
          n)
    }
    function m(e) {
      let t,
        n,
        s,
        u = (0, o.c)(5),
        { disabled: p, onSelect: m } = e
      return (
        u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(d.b5, { icon: { assets: { 16: a, 20: r.b } } })), (u[0] = t))
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
          ? ((s = (0, i.jsx)(c.ms.Item, { disabled: p, leftIcon: t, onSelect: m, children: n })),
            (u[2] = p),
            (u[3] = m),
            (u[4] = s))
          : (s = u[4]),
        s
      )
    }
  },
  YDoP(e, t, n) {
    var i = n("zTeN"),
      o = n("Oj9r")
    let a = (0, i.z8)("LibraryFileVersionHistoryScope", { key: ({ id: e }) => e, parent: o.GD }),
      r = (0, i.vP)(a, null)
    n.d(t, {}, { _: r, s: a })
  },
  D1oM(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      a = n("on57"),
      r = n("LIss"),
      s = n("zd8w"),
      l = n("bVeK"),
      c = n("T1PX"),
      d = n("nsuH")
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
            g,
            f,
            h,
            b,
            y,
            w,
            x,
            _ = (0, o.c)(40),
            { disabled: v, layout: k, onSelect: S, suggestions: I } = e,
            C = (0, s.useRef)(null),
            j = (0, s.useRef)(null),
            [A, M] = (0, s.useState)(null),
            B = (0, c.I)(),
            L = "responsive" === k
          _[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                let e = C.current,
                  t = j.current
                if (null == e || null == t) return
                let n = e.getBoundingClientRect().width
                if (0 === n || "column" === getComputedStyle(e).flexDirection) return void M(null)
                let i = 1 / 0,
                  o = -1 / 0,
                  a = 0
                for (let e of t.children) {
                  let t = e.getBoundingClientRect()
                  if (((i = Math.min(i, t.left)), (o = Math.max(o, t.right)), a > 0 && o - i > n + 0.5)) break
                  a++
                }
                M(a)
              }),
              (_[0] = t))
            : (t = _[0])
          let E = t,
            T = (0, d.wY)(E),
            N = (0, d.wY)(E)
          _[1] !== T
            ? ((n = (e) => {
                ;((C.current = e), T(e), E())
              }),
              (_[1] = T),
              (_[2] = n))
            : (n = _[2])
          let P = L
            ? "flex-col items-start sm:flex-row sm:items-center sm:gap-3"
            : "items-center gap-3 text-sm text-secondary"
          if (
            (_[3] !== P ? ((p = (0, a.A)("flex min-w-0", P)), (_[3] = P), (_[4] = p)) : (p = _[4]),
            _[5] !== v || _[6] !== S || _[7] !== B || _[8] !== L || _[9] !== I || _[10] !== A)
          ) {
            let e
            ;(_[12] !== v || _[13] !== S || _[14] !== B || _[15] !== L
              ? ((e = (e, t) => {
                  let { key: n, label: o } = e
                  return (0, i.jsxs)(
                    r.P.button,
                    {
                      className: (0, a.A)(
                        "relative flex min-w-0 max-w-full items-center gap-1 rounded-xs border-0 bg-transparent p-0 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text",
                        L
                          ? "min-h-11 w-full select-none after:absolute after:inset-x-0 after:top-1/2 after:h-full after:min-h-8 after:-translate-y-1/2 sm:min-h-0 sm:w-auto sm:shrink-0 sm:gap-1.5 pointer-coarse:after:min-h-11"
                          : "shrink-0",
                        v ? "cursor-default" : "group/suggested-followup cursor-interaction",
                        !v && (L ? "hover:text-(color:--link-primary-text-color-hover)" : "hover:text-default"),
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
                          className: (0, a.A)("min-w-0 wrap-anywhere whitespace-normal", L && "sm:truncate"),
                          children: o,
                        }),
                      ],
                    },
                    n,
                  )
                }),
                (_[12] = v),
                (_[13] = S),
                (_[14] = B),
                (_[15] = L),
                (_[16] = e))
              : (e = _[16]),
              (m = I.slice(0, A ?? I.length).map(e)),
              (_[5] = v),
              (_[6] = S),
              (_[7] = B),
              (_[8] = L),
              (_[9] = I),
              (_[10] = A),
              (_[11] = m))
          } else m = _[11]
          ;(_[17] !== n || _[18] !== p || _[19] !== m
            ? ((g = (0, i.jsx)("div", { ref: n, className: p, children: m })),
              (_[17] = n),
              (_[18] = p),
              (_[19] = m),
              (_[20] = g))
            : (g = _[20]),
            _[21] !== I ? ((f = JSON.stringify(I.map(u))), (_[21] = I), (_[22] = f)) : (f = _[22]),
            _[23] !== N
              ? ((h = (e) => {
                  ;((j.current = e), N(e), E())
                }),
                (_[23] = N),
                (_[24] = h))
              : (h = _[24]))
          let O = L ? "hidden sm:flex" : "flex text-sm"
          if (
            (_[25] !== O
              ? ((b = (0, a.A)("pointer-events-none invisible absolute start-0 top-0 w-max items-center gap-3", O)),
                (_[25] = O),
                (_[26] = b))
              : (b = _[26]),
            _[27] !== L || _[28] !== I)
          ) {
            let e
            ;(_[30] !== L
              ? ((e = (e) => {
                  let { key: t, label: n } = e
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: (0, a.A)("flex shrink-0 items-center", L ? "gap-1.5" : "gap-1"),
                      children: [
                        (0, i.jsx)(l.se0, { className: L ? void 0 : "icon-sm", "data-rtl-flip": L ? void 0 : "" }),
                        (0, i.jsx)("span", { className: "whitespace-nowrap", children: n }),
                      ],
                    },
                    t,
                  )
                }),
                (_[30] = L),
                (_[31] = e))
              : (e = _[31]),
              (y = I.map(e)),
              (_[27] = L),
              (_[28] = I),
              (_[29] = y))
          } else y = _[29]
          return (
            _[32] !== b || _[33] !== y || _[34] !== f || _[35] !== h
              ? ((w = (0, i.jsx)("div", { ref: h, "aria-hidden": "true", className: b, children: y }, f)),
                (_[32] = b),
                (_[33] = y),
                (_[34] = f),
                (_[35] = h),
                (_[36] = w))
              : (w = _[36]),
            _[37] !== w || _[38] !== g
              ? ((x = (0, i.jsxs)(i.Fragment, { children: [g, w] })), (_[37] = w), (_[38] = g), (_[39] = x))
              : (x = _[39]),
            x
          )
        },
      },
    )
  },
  LhrG(e, t, n) {
    var i = n("tFxw"),
      o = n("Ghh3"),
      a = n("eShZ"),
      r = n("jgEm"),
      s = n("MExO")
    n.d(
      t,
      {},
      {
        F: async function (e, t, n) {
          let l,
            c = (0, s.CN)(e)
          if (null != c) {
            n.throwIfAborted()
            let a = await o.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
              parameters: { path: { provider_key: c.provider } },
              requestBody: { file_id: e },
              additionalHeaders: { "ChatGPT-Account-ID": t },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503, 504],
              signal: n,
            })
            n.throwIfAborted()
            let r = (0, s.CN)(a.file_id)
            if (
              a.file_id !== e &&
              ((0, i.YO)(e)?.encodedAccountKey != null ||
                r?.provider !== c.provider ||
                r.nativeFileId !== c.nativeFileId)
            )
              throw Error("Provider file metadata does not match the requested file")
            return {
              id: a.file_id,
              kind: "file",
              name: a.name,
              parent_directory_id: null,
              access_kind: "mounted",
              mime_type: a.mime_type,
              file_size_bytes: a.file_size_bytes,
            }
          }
          let d = {
            parameters: { path: { library_file_id: e } },
            additionalHeaders: { "ChatGPT-Account-ID": t },
            expectedErrorStatuses: [403, 404],
            signal: n,
          }
          if ((n.throwIfAborted(), /^libfile_fde[123]_/.test(e))) {
            let t = await o.Request.safeGet("/files/library/files/{library_file_id}/node", d)
            return (n.throwIfAborted(), (0, r.U9)(t, e))
          }
          try {
            let e = await o.Request.safeGet("/files/library/files/{library_file_id}", d)
            return (n.throwIfAborted(), e)
          } catch (e) {
            if (!(e instanceof a.fk) || (403 !== e.status && 404 !== e.status)) throw e
          }
          n.throwIfAborted()
          try {
            if (
              ((l = await o.Request.safeGet("/files/library/files/{library_file_id}/node", d)),
              n.throwIfAborted(),
              "owned" === l.access_kind && "image" === l.library_file_category && null == l.library_artifact_type)
            ) {
              let e = await o.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                ...d,
                parameters: { ...d.parameters, query: { limit: 1 } },
              })
              return (
                n.throwIfAborted(),
                { ...l, library_artifact_type: e.items[0]?.library_artifact_type ?? l.library_artifact_type }
              )
            }
            return (0, r.U9)(l, e)
          } catch (s) {
            if (!(s instanceof a.fk) || (403 !== s.status && 404 !== s.status)) throw s
            let t = null,
              i = new Set()
            do {
              n.throwIfAborted()
              let a = await o.Request.safePost("/files/library", {
                requestBody: { cursor: t, limit: 100, include_hidden_files: !0, include_saved_entities: !0 },
                additionalHeaders: d.additionalHeaders,
                expectedErrorStatuses: [403, 404],
                signal: n,
              })
              n.throwIfAborted()
              let r = a.items.find((t) => t.id === e)
              if (null != r) return r
              if (null == (t = a.cursor ?? null) || i.has(t)) break
              i.add(t)
            } while (null != t)
            if (null != l) return (0, r.U9)(l, e)
            throw s
          }
        },
      },
    )
  },
  H7Ld(e, t, n) {
    var i = n("YWcr"),
      o = n("MX6A")
    n.d(
      t,
      {},
      {
        Dy: function (e) {
          return e?.map((e) => e.trim()).find((e) => e.length > 0) ?? null
        },
        KH: function ({ defaultPrompt: e, pluginDisplayName: t, pluginId: n }) {
          let a = `[@${t}](${(0, o.b4)((0, i.vt)(n))})`
          return `${a} ${e?.trim() ?? ""}`
        },
        h0: "deep-research-workflow@openai-curated-remote",
      },
    )
  },
  SVco(e, t, n) {
    n.d(
      t,
      {},
      {
        E: function (e, t) {
          switch (t) {
            case "black":
              return e.formatMessage({
                id: "codex.projectAppearance.color.option.black",
                defaultMessage: "Default",
                description: "Color option name in the project marker popover.",
              })
            case "blue":
              return e.formatMessage({
                id: "codex.projectAppearance.color.option.blue",
                defaultMessage: "Blue",
                description: "Color option name in the project marker popover.",
              })
            case "green":
              return e.formatMessage({
                id: "codex.projectAppearance.color.option.green",
                defaultMessage: "Green",
                description: "Color option name in the project marker popover.",
              })
            case "orange":
              return e.formatMessage({
                id: "codex.projectAppearance.color.option.orange",
                defaultMessage: "Orange",
                description: "Color option name in the project marker popover.",
              })
            case "pink":
              return e.formatMessage({
                id: "codex.projectAppearance.color.option.pink",
                defaultMessage: "Pink",
                description: "Color option name in the project marker popover.",
              })
            case "purple":
              return e.formatMessage({
                id: "codex.projectAppearance.color.option.purple",
                defaultMessage: "Purple",
                description: "Color option name in the project marker popover.",
              })
            case "red":
              return e.formatMessage({
                id: "codex.projectAppearance.color.option.red",
                defaultMessage: "Red",
                description: "Color option name in the project marker popover.",
              })
            case "yellow":
              return e.formatMessage({
                id: "codex.projectAppearance.color.option.yellow",
                defaultMessage: "Yellow",
                description: "Color option name in the project marker popover.",
              })
          }
        },
        K: ["black", "red", "orange", "yellow", "green", "blue", "purple", "pink"],
      },
    )
  },
  qlvd(e, t, n) {
    n.d(t, { t: () => l })
    var i = n("DBCl"),
      o = n("Qgfj")
    let a = (0, o.YK)({
      "bar-chart": {
        id: "codex.projectAppearance.icon.option.bar_chart",
        defaultMessage: "Bar Chart",
        description: "Icon option name in the project marker popover.",
      },
      book: {
        id: "codex.projectAppearance.icon.option.book",
        defaultMessage: "Book",
        description: "Icon option name in the project marker popover.",
      },
      brain: {
        id: "codex.projectAppearance.icon.option.brain",
        defaultMessage: "Brain",
        description: "Icon option name in the project marker popover.",
      },
      "currency-dollar": {
        id: "codex.projectAppearance.icon.option.currency_dollar",
        defaultMessage: "Currency Dollar",
        description: "Icon option name in the project marker popover.",
      },
      customize: {
        id: "codex.projectAppearance.icon.option.customize",
        defaultMessage: "Customize",
        description: "Icon option name in the project marker popover.",
      },
      "desk-globe": {
        id: "codex.projectAppearance.icon.option.desk_globe",
        defaultMessage: "Globe Spin",
        description: "Icon option name in the project marker popover.",
      },
      dumbbell: {
        id: "codex.projectAppearance.icon.option.dumbbell",
        defaultMessage: "Dumbbell",
        description: "Icon option name in the project marker popover.",
      },
      edit: {
        id: "codex.projectAppearance.icon.option.edit",
        defaultMessage: "Pencil",
        description: "Icon option name in the project marker popover.",
      },
      flask: {
        id: "codex.projectAppearance.icon.option.flask",
        defaultMessage: "Flask",
        description: "Icon option name in the project marker popover.",
      },
      folder: {
        id: "codex.projectAppearance.icon.option.folder",
        defaultMessage: "Folder",
        description: "Icon option name in the project marker popover.",
      },
      function: {
        id: "codex.projectAppearance.icon.option.function",
        defaultMessage: "Code Brackets",
        description: "Icon option name in the project marker popover.",
      },
      globe: {
        id: "codex.projectAppearance.icon.option.globe",
        defaultMessage: "Globe",
        description: "Icon option name in the project marker popover.",
      },
      "graduation-cap": {
        id: "codex.projectAppearance.icon.option.graduation_cap",
        defaultMessage: "Graduation Cap",
        description: "Icon option name in the project marker popover.",
      },
      health: {
        id: "codex.projectAppearance.icon.option.health",
        defaultMessage: "Health",
        description: "Icon option name in the project marker popover.",
      },
      heart: {
        id: "codex.projectAppearance.icon.option.heart",
        defaultMessage: "Heart",
        description: "Icon option name in the project marker popover.",
      },
      kettlebell: {
        id: "codex.projectAppearance.icon.option.kettlebell",
        defaultMessage: "Kettlebell",
        description: "Icon option name in the project marker popover.",
      },
      logs: {
        id: "codex.projectAppearance.icon.option.logs",
        defaultMessage: "Logs",
        description: "Icon option name in the project marker popover.",
      },
      lotus: {
        id: "codex.projectAppearance.icon.option.lotus",
        defaultMessage: "Lotus",
        description: "Icon option name in the project marker popover.",
      },
      music: {
        id: "codex.projectAppearance.icon.option.music",
        defaultMessage: "Music",
        description: "Icon option name in the project marker popover.",
      },
      palette: {
        id: "codex.projectAppearance.icon.option.palette",
        defaultMessage: "Palette",
        description: "Icon option name in the project marker popover.",
      },
      paw: {
        id: "codex.projectAppearance.icon.option.paw",
        defaultMessage: "Paw",
        description: "Icon option name in the project marker popover.",
      },
      plane: {
        id: "codex.projectAppearance.icon.option.plane",
        defaultMessage: "Plane",
        description: "Icon option name in the project marker popover.",
      },
      plant: {
        id: "codex.projectAppearance.icon.option.plant",
        defaultMessage: "Plant",
        description: "Icon option name in the project marker popover.",
      },
      popcorn: {
        id: "codex.projectAppearance.icon.option.popcorn",
        defaultMessage: "Popcorn",
        description: "Icon option name in the project marker popover.",
      },
      scale: {
        id: "codex.projectAppearance.icon.option.scale",
        defaultMessage: "Balancing Scale",
        description: "Icon option name in the project marker popover.",
      },
      stethoscope: {
        id: "codex.projectAppearance.icon.option.stethoscope",
        defaultMessage: "Stethoscope",
        description: "Icon option name in the project marker popover.",
      },
      suitcase: {
        id: "codex.projectAppearance.icon.option.suitcase",
        defaultMessage: "Suitcase",
        description: "Icon option name in the project marker popover.",
      },
      terminal: {
        id: "codex.projectAppearance.icon.option.terminal",
        defaultMessage: "Terminal",
        description: "Icon option name in the project marker popover.",
      },
      wrench: {
        id: "codex.projectAppearance.icon.option.wrench",
        defaultMessage: "Wrench",
        description: "Icon option name in the project marker popover.",
      },
      writing: {
        id: "codex.projectAppearance.icon.option.writing",
        defaultMessage: "Writing",
        description: "Icon option name in the project marker popover.",
      },
    })
    ;((0, o.zR)({
      id: "symbolPicker.icons.category.work",
      defaultMessage: "Work",
      description: "Icon picker category for work, organization, finance, and technology",
    }),
      (0, o.zR)({
        id: "symbolPicker.icons.category.learning",
        defaultMessage: "Learning",
        description: "Icon picker category for education, science, and knowledge",
      }),
      (0, o.zR)({
        id: "symbolPicker.icons.category.creative",
        defaultMessage: "Creative",
        description: "Icon picker category for writing, art, music, and entertainment",
      }),
      (0, o.zR)({
        id: "symbolPicker.icons.category.wellbeing",
        defaultMessage: "Health and wellbeing",
        description: "Icon picker category for medicine, fitness, and personal wellbeing",
      }),
      (0, o.zR)({
        id: "symbolPicker.icons.category.travel",
        defaultMessage: "Travel and places",
        description: "Icon picker category for trips, transportation, and places around the world",
      }),
      (0, o.zR)({
        id: "symbolPicker.icons.category.nature",
        defaultMessage: "Nature",
        description: "Icon picker category for animals, plants, and the environment",
      }))
    let r = {
        folder: { categoryId: "work", keywords: ["files", "documents", "organize", "project", "workspace"] },
        "currency-dollar": {
          categoryId: "work",
          keywords: ["money", "finance", "budget", "bank", "payment", "business"],
        },
        book: { categoryId: "learning", keywords: ["reading", "study", "education", "library", "literature"] },
        "graduation-cap": {
          categoryId: "learning",
          keywords: ["school", "university", "college", "education", "degree", "study"],
        },
        edit: { categoryId: "creative", keywords: ["pencil", "writing", "drawing", "draft", "notes"] },
        writing: { categoryId: "creative", keywords: ["pen", "author", "journal", "essay", "story", "draft"] },
        function: { categoryId: "work", keywords: ["developer", "code", "programming", "software", "math", "formula"] },
        terminal: { categoryId: "work", keywords: ["developer", "code", "command", "console", "shell", "computer"] },
        music: { categoryId: "creative", keywords: ["audio", "sound", "song", "playlist", "instrument"] },
        popcorn: { categoryId: "creative", keywords: ["movie", "film", "cinema", "entertainment", "snack"] },
        customize: { categoryId: "creative", keywords: ["design", "drawing", "art", "tools", "pens", "personalize"] },
        palette: { categoryId: "creative", keywords: ["paint", "color", "art", "design", "drawing"] },
        stethoscope: {
          categoryId: "wellbeing",
          keywords: ["doctor", "medical", "medicine", "hospital", "care", "health"],
        },
        health: { categoryId: "wellbeing", keywords: ["medical", "medicine", "emergency", "ambulance", "care"] },
        lotus: {
          categoryId: "wellbeing",
          keywords: ["meditation", "mindfulness", "yoga", "calm", "relax", "wellness"],
        },
        suitcase: { categoryId: "travel", keywords: ["vacation", "trip", "luggage", "packing", "holiday", "business"] },
        "bar-chart": {
          categoryId: "work",
          keywords: ["analytics", "data", "statistics", "report", "growth", "business"],
        },
        kettlebell: {
          categoryId: "wellbeing",
          keywords: ["fitness", "exercise", "gym", "workout", "strength", "weight"],
        },
        dumbbell: {
          categoryId: "wellbeing",
          keywords: ["fitness", "exercise", "gym", "workout", "strength", "weight"],
        },
        logs: { categoryId: "work", keywords: ["notebook", "journal", "records", "notes", "list", "tracking"] },
        scale: { categoryId: "work", keywords: ["law", "legal", "justice", "balance", "decision", "weight"] },
        "desk-globe": {
          categoryId: "travel",
          keywords: ["world", "earth", "geography", "map", "countries", "explore"],
        },
        plane: { categoryId: "travel", keywords: ["vacation", "flight", "airport", "trip", "holiday", "airplane"] },
        globe: { categoryId: "travel", keywords: ["world", "earth", "internet", "website", "global", "language"] },
        wrench: {
          categoryId: "work",
          keywords: ["tools", "repair", "build", "maintenance", "settings", "engineering"],
        },
        paw: { categoryId: "nature", keywords: ["pet", "animal", "dog", "cat", "wildlife"] },
        flask: { categoryId: "learning", keywords: ["science", "chemistry", "experiment", "laboratory", "research"] },
        brain: {
          categoryId: "learning",
          keywords: ["thinking", "idea", "knowledge", "intelligence", "psychology", "mind"],
        },
        heart: { categoryId: "wellbeing", keywords: ["love", "care", "favorite", "relationship", "emotion"] },
        plant: { categoryId: "nature", keywords: ["garden", "growth", "leaves", "environment", "ecology", "green"] },
      },
      s = i.K4r.map(function (e) {
        return { id: e, label: a[e], ...r[e] }
      })
    function l(e, t) {
      let n = c(e, t.locale)
      if (0 === n.length) return s
      let i = n.split(" ")
      return s
        .flatMap((e) => {
          let o = c(t.formatMessage(e.label), t.locale),
            a = c(e.id, t.locale)
          return i.every((t) => o.includes(t) || a.includes(t) || e.keywords.some((e) => e.includes(t)))
            ? [{ icon: e, score: +(o !== n && a !== n) }]
            : []
        })
        .sort((e, t) => e.score - t.score)
        .map(({ icon: e }) => e)
    }
    function c(e, t) {
      return e
        .trim()
        .toLocaleLowerCase(t)
        .replace(/[\s_-]+/g, " ")
    }
  },
  zTAs(e, t, n) {
    var i = n("BhZP"),
      o = n("CL6A"),
      a = n("wDWo"),
      r = n("ASxG")
    let s = r.array(r.looseObject({ content: r.string() }))
    function l(e, { contentReferences: t, isStreaming: n }) {
      return (0, a.EQ)(e, { content_references: t }, { isStreaming: n })
    }
    function c(e, t) {
      let n = e
      for (let i of ["options", "style_variants"]) {
        let o = s.safeParse(e?.[i])
        o.success && (n = { ...n, [i]: o.data.map((e) => ({ ...e, content: l(e.content, t) })) })
      }
      return n
    }
    n.d(
      t,
      {},
      {
        Io: l,
        Yn: c,
        _h: function (e, t, n) {
          let a = { ...e.metadata }
          return (
            null != e.options && (a.options = e.options),
            {
              content:
                (0, i.I$)(a)[0]?.content ??
                (function (e, t) {
                  if (t && "string" == typeof e?.matched_text)
                    return (0, o.vV)((0, o.PV)(e.matched_text, { isStreaming: !0 })) ?? void 0
                })(t, n) ??
                e.content ??
                "",
              metadata: a,
            }
          )
        },
        nm: function (e, t) {
          return e?.edited !== !1 || e.locallyEdited
            ? e
            : { ...e, content: l(e.content, t), metadata: c(e.metadata, t) }
        },
      },
    )
  },
  WS0s(e, t, n) {
    n.d(t, { p: () => tN })
    var i = n("ABep"),
      o = n("QosV"),
      a = n("ozm1"),
      r = n("mBJV"),
      s = n("ksPB"),
      l = n("O8pf"),
      c = n("kmbx"),
      d = n("BhZP"),
      u = n("Kh9O"),
      p = n("zTeN"),
      m = n("zd8w"),
      g = n("oyxz"),
      f = n("IDNd"),
      h = n("Ghh3"),
      b = n("KU1f"),
      y = n("jEN2"),
      w = n("HOLv"),
      x = n("Bbed"),
      _ = n("O8Pw"),
      v = n("tl2n"),
      k = n("nlNF"),
      S = n("yGJW"),
      I = n("OWtl"),
      C = n("hZax"),
      j = n("jDom"),
      A = n("j9wQ"),
      M = n("Or4D"),
      B = n("qirF"),
      L = n("slpy"),
      E = n("rHbL"),
      T = n("fS4Q"),
      N = n("jdPP"),
      P = n("IGm3"),
      O = n("PePi"),
      R = n("D7Ms"),
      D = n("T0Rc"),
      G = n("on57"),
      F = n("Wf1j"),
      q = n("HZfM"),
      U = n("SPnB"),
      W = n("Sm6l"),
      V = n("bqtn"),
      z = n("bVeK"),
      H = n("RNul"),
      K = n("suct"),
      $ = n("LIss"),
      Z = n("hlVK"),
      Q = n("RNtx"),
      Y = n("T1PX"),
      J = n("V8uZ"),
      X = n("ASxG"),
      ee = n("h6ff"),
      et = n("Nwp9"),
      en = n("pyOZ")
    let ei = "writing-block-save-as-page",
      eo = "writing_block_save_as_page",
      ea = X.object({ title: X.string().trim().min(1).max(200), description: X.string().trim().min(1).max(1e3) }),
      er = (0, et.m3)("writing-block-save-as-page-beacon-seen-v1", {}),
      es = (0, p.un)(I.u, ({ get: e }) => {
        let t = e(U.chatGptAuthenticatedAccountId$),
          n = e(U.o8)
        return null != t && null != n ? { accountId: t, userId: n, key: JSON.stringify([t, n]) } : null
      }),
      el = (0, p.un)(I.u, ({ get: e }) => {
        let t = e(es)
        return null != t && e(en.aJ) ? !0 === e(er)[t.key] : void 0
      }),
      ec = (0, p.vU)(I.u, ({ identity: e, locale: t }, { get: n }) => ({
        queryKey: [ei, e?.key, t],
        enabled: null != e && n(en.aJ) && !n(er)[e.key],
        staleTime: 0,
        retry: !1,
        refetchOnMount: "always",
        refetchOnWindowFocus: !1,
        queryFn: async ({ signal: t }) => {
          if (null == e) return null
          let n = window.electronBridge?.getDesktopUserAgent?.(),
            i = await h.Request.safeGet("/beacons_v2", {
              signal: t,
              expectedIdentity: { accountId: e.accountId, userId: e.userId },
              additionalHeaders: {
                "Cache-Control": "no-store",
                "x-openai-use-sheep": "1",
                ...(null == n ? {} : { "User-Agent": n }),
              },
              parameters: { query: { surface: [ei] } },
            }),
            o = ee.th.safeParse(i.surfaces[ei])
          if (
            !o.success ||
            o.data.beacon_id !== eo ||
            o.data.ui_info.container_id !== eo ||
            0 !== o.data.action_items.length
          )
            return null
          let a = ea.safeParse(o.data.custom_fields)
          return a.success ? { beacon: o.data, ...a.data } : null
        },
      }))
    var ed = "reveal-DpiM90",
      eu = "title-Nx5xpW"
    function ep(e) {
      let t,
        n,
        a,
        r,
        s,
        c,
        d,
        u,
        p,
        g,
        f,
        h,
        b,
        y,
        x,
        _,
        v,
        k,
        S = (0, o.c)(58),
        { children: I, disabled: C, editorView: j, isSaving: M, onSave: B, saveLabel: E } = e,
        T = (0, Y.I)(),
        [P, O] = (0, m.useState)(null),
        [R, D] = (0, m.useState)(null)
      ;(S[0] !== P || S[1] !== j?.dom || S[2] !== R
        ? ((t = (e) => {
            let t = j?.dom,
              n = () => queueMicrotask(e)
            return (
              t?.addEventListener("focus", e),
              t?.addEventListener("blur", n),
              P?.addEventListener("mousedown", eg),
              P?.addEventListener("focus", e),
              P?.addEventListener("blur", n),
              R?.addEventListener("mousedown", eg),
              R?.addEventListener("focusin", e),
              R?.addEventListener("focusout", n),
              () => {
                ;(t?.removeEventListener("focus", e),
                  t?.removeEventListener("blur", n),
                  P?.removeEventListener("mousedown", eg),
                  P?.removeEventListener("focus", e),
                  P?.removeEventListener("blur", n),
                  R?.removeEventListener("mousedown", eg),
                  R?.removeEventListener("focusin", e),
                  R?.removeEventListener("focusout", n))
              }
            )
          }),
          (S[0] = P),
          (S[1] = j?.dom),
          (S[2] = R),
          (S[3] = t))
        : (t = S[3]),
        S[4] !== P || S[5] !== j || S[6] !== R
          ? ((n = () =>
              j?.hasFocus()
                ? "editor"
                : P?.ownerDocument.activeElement === P
                  ? "button"
                  : R?.contains(R.ownerDocument.activeElement)
                    ? "promo"
                    : null),
            (S[4] = P),
            (S[5] = j),
            (S[6] = R),
            (S[7] = n))
          : (n = S[7]),
        S[8] !== t || S[9] !== n
          ? ((a = { subscribe: t, getSnapshot: n }), (S[8] = t), (S[9] = n), (S[10] = a))
          : (a = S[10]))
      let F = a,
        q = (0, m.useSyncExternalStore)(F.subscribe, F.getSnapshot, em),
        U = null != q || M,
        W = 0.15 * !T
      S[11] !== W ? ((r = { duration: W, ease: J.Wu }), (S[11] = W), (S[12] = r)) : (r = S[12])
      let V = r
      S[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, G.A)(eu, "min-w-0 overflow-hidden")), (S[13] = s))
        : (s = S[13])
      let z = M || void 0,
        H = C || M
      S[14] !== B ? ((c = (e) => B(0 === e.detail)), (S[14] = B), (S[15] = c)) : (c = S[15])
      let Z = U ? "default" : "ghost",
        Q = U ? "save" : "title",
        X = U ? "gap-2" : "gap-1.5"
      ;(S[16] !== X ? ((d = (0, G.A)("flex min-w-0 items-center", X)), (S[16] = X), (S[17] = d)) : (d = S[17]),
        S[18] !== T ? ((u = !T && { opacity: 0 }), (S[18] = T), (S[19] = u)) : (u = S[19]),
        S[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = { opacity: 1 }), (g = { opacity: 0 }), (S[20] = p), (S[21] = g))
          : ((p = S[20]), (g = S[21])),
        S[22] !== M || S[23] !== U
          ? ((f = U && !M ? (0, i.jsx)(w.I, { asset: l.f }) : null), (S[22] = M), (S[23] = U), (S[24] = f))
          : (f = S[24]),
        S[25] !== C || S[26] !== U
          ? ((h = U
              ? null
              : (0, i.jsx)("span", {
                  className: (0, G.A)(ed, !C && "text-tertiary"),
                  children: (0, i.jsx)("span", {
                    className: "min-w-0 overflow-hidden",
                    children: (0, i.jsx)("span", {
                      className: "flex w-5 items-center justify-center",
                      children: (0, i.jsx)(w.I, { asset: N.i }),
                    }),
                  }),
                })),
            (S[25] = C),
            (S[26] = U),
            (S[27] = h))
          : (h = S[27]))
      let ee = U ? E : I
      return (
        S[28] !== ee
          ? ((b = (0, i.jsx)("span", { className: "min-w-0 truncate", children: ee })), (S[28] = ee), (S[29] = b))
          : (b = S[29]),
        S[30] !== Q || S[31] !== d || S[32] !== u || S[33] !== f || S[34] !== h || S[35] !== b || S[36] !== V
          ? ((y = (0, i.jsx)(K.N, {
              initial: !1,
              mode: "popLayout",
              children: (0, i.jsxs)(
                $.P.span,
                {
                  "aria-hidden": !0,
                  className: d,
                  initial: u,
                  animate: p,
                  exit: g,
                  transition: V,
                  children: [f, h, b],
                },
                Q,
              ),
            })),
            (S[30] = Q),
            (S[31] = d),
            (S[32] = u),
            (S[33] = f),
            (S[34] = h),
            (S[35] = b),
            (S[36] = V),
            (S[37] = y))
          : (y = S[37]),
        S[38] !== M || S[39] !== E || S[40] !== Z || S[41] !== y || S[42] !== z || S[43] !== H || S[44] !== c
          ? ((x = (0, i.jsx)(A.DW, {
              ref: O,
              className: s,
              "aria-label": E,
              "aria-busy": z,
              disabled: H,
              loading: M,
              onClick: c,
              variant: Z,
              children: y,
            })),
            (S[38] = M),
            (S[39] = E),
            (S[40] = Z),
            (S[41] = y),
            (S[42] = z),
            (S[43] = H),
            (S[44] = c),
            (S[45] = x))
          : (x = S[45]),
        S[46] !== E || S[47] !== U || S[48] !== x
          ? ((_ = (0, i.jsx)(L.m, { disabled: U, content: E, children: x })),
            (S[46] = E),
            (S[47] = U),
            (S[48] = x),
            (S[49] = _))
          : (_ = S[49]),
        S[50] !== P || S[51] !== C || S[52] !== q || S[53] !== M
          ? ((v =
              null == q || null == P || C || M
                ? null
                : (0, i.jsx)(ef, { button: P, isEditorFocused: "editor" === q, onDialogChange: D })),
            (S[50] = P),
            (S[51] = C),
            (S[52] = q),
            (S[53] = M),
            (S[54] = v))
          : (v = S[54]),
        S[55] !== _ || S[56] !== v
          ? ((k = (0, i.jsxs)(i.Fragment, { children: [_, v] })), (S[55] = _), (S[56] = v), (S[57] = k))
          : (k = S[57]),
        k
      )
    }
    function em() {
      return null
    }
    function eg(e) {
      0 === e.button && e.preventDefault()
    }
    function ef(e) {
      let t,
        n = (0, o.c)(5),
        { button: a, isEditorFocused: r, onDialogChange: s } = e,
        l = (0, p.Ul)(es)
      return (
        n[0] !== a || n[1] !== l || n[2] !== r || n[3] !== s
          ? ((t =
              null == l
                ? null
                : (0, i.jsx)(eh, { button: a, identity: l, isEditorFocused: r, onDialogChange: s }, l.key)),
            (n[0] = a),
            (n[1] = l),
            (n[2] = r),
            (n[3] = s),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function eh(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        c = (0, o.c)(25),
        { button: d, identity: u, isEditorFocused: g, onDialogChange: f } = e,
        h = (0, p.gh)(I.u),
        b = (0, m.useId)(),
        { locale: y } = (0, F.A)(),
        [w, x] = (0, m.useState)(!1),
        [_, v] = (0, m.useState)(!1),
        k = (0, m.useRef)(!1),
        S = g || w
      ;(c[0] !== u || c[1] !== y ? ((t = { identity: u, locale: y }), (c[0] = u), (c[1] = y), (c[2] = t)) : (t = c[2]),
        c[3] !== S ? ((n = { enabled: S }), (c[3] = S), (c[4] = n)) : (n = c[4]))
      let { data: C, isFetching: j, isError: A } = (0, p._U)(ec, t, n),
        M = (0, p.Ul)(el)
      return !S || null == C || j || A || _ || (!1 !== M && !w)
        ? null
        : (c[5] !== u || c[6] !== C.beacon || c[7] !== h
            ? ((a = () => {
                k.current ||
                  h.get(es)?.key !== u.key ||
                  ((k.current = !0), v(!0), (0, Z.Zy)({ beacon: C.beacon, eventType: "dismiss", expectedIdentity: u }))
              }),
              (c[5] = u),
              (c[6] = C.beacon),
              (c[7] = h),
              (c[8] = a))
            : (a = c[8]),
          c[9] !== d || c[10] !== u || c[11] !== f || c[12] !== C.beacon || c[13] !== h || c[14] !== w
            ? ((r = (e) => {
                if ((f(e?.closest('[role="dialog"]') ?? null), null == e)) return
                let t = (e) => {
                  e.defaultPrevented ||
                    k.current ||
                    h.get(es)?.key !== u.key ||
                    ((k.current = !0), v(!0), (0, Z.Zy)({ beacon: C.beacon, eventType: "click", expectedIdentity: u }))
                }
                if ((d.addEventListener("click", t), !w && !1 === h.get(el))) {
                  var n
                  ;(x(!0),
                    (n = C.beacon),
                    h.get(es)?.key === u.key &&
                      !1 === h.get(el) &&
                      (h.set(er, (e) => ({ ...e, [u.key]: !0 })),
                      (0, Z.Zy)({ beacon: n, eventType: "view", expectedIdentity: u })))
                }
                return () => {
                  ;(d.removeEventListener("click", t), f(null))
                }
              }),
              (c[9] = d),
              (c[10] = u),
              (c[11] = f),
              (c[12] = C.beacon),
              (c[13] = h),
              (c[14] = w),
              (c[15] = r))
            : (r = c[15]),
          c[16] !== C.title || c[17] !== r
            ? ((s = (0, i.jsx)("span", { ref: r, children: C.title })), (c[16] = C.title), (c[17] = r), (c[18] = s))
            : (s = c[18]),
          c[19] !== d || c[20] !== b || c[21] !== C.description || c[22] !== a || c[23] !== s
            ? ((l = (0, i.jsx)(Q.m, {
                id: b,
                align: "start",
                anchor: d,
                body: C.description,
                onDismiss: a,
                side: "top",
                title: s,
              })),
              (c[19] = d),
              (c[20] = b),
              (c[21] = C.description),
              (c[22] = a),
              (c[23] = s),
              (c[24] = l))
            : (l = c[24]),
          l)
    }
    function eb(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        c = (0, o.c)(49),
        {
          children: d,
          disabled: u,
          downloadMenu: p,
          editorView: m,
          libraryFileId: f,
          onLibraryClick: h,
          onOpenVersionHistory: b,
          onSave: y,
          isSaving: x,
          saveConfirmation: v,
          saveToPage: k,
        } = e,
        S = void 0 === m ? null : m,
        I = (0, _.Tq)(),
        C = I ? "/space/files" : "/library",
        j = (0, F.A)(),
        A = (0, q.Zp)()
      if (k) {
        let e
        ;(c[0] !== j || c[1] !== x
          ? ((e = x
              ? j.formatMessage({
                  id: "codex.writingBlock.page.saving",
                  defaultMessage: "Creating Page",
                  description:
                    "Accessible label on the writing block save control while its editable Page is being created. Keep this progress label short.",
                })
              : j.formatMessage({
                  id: "codex.writingBlock.page.save",
                  defaultMessage: "Save as Page",
                  description:
                    "Label, accessible label, and tooltip for a writing block's save control. Saves the writing as an editable Page that can be found in Space. Page means a saved document, not a sheet of paper. Keep this action short.",
                })),
            (c[0] = j),
            (c[1] = x),
            (c[2] = e))
          : (e = c[2]),
          (t = e))
      } else if (x && I) {
        let e
        ;(c[3] !== j
          ? ((e = j.formatMessage({
              id: "codex.writingBlock.inlineLibrary.addingToLibrary.space",
              defaultMessage: "Adding to Space",
              description:
                "Accessible label and hover tooltip for the writing block header's Space save control while the document is being saved. Describes an operation in progress, not an action to start. Keep this status label short. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
            })),
            (c[3] = j),
            (c[4] = e))
          : (e = c[4]),
          (t = e))
      } else if (x) {
        let e
        ;(c[5] !== j
          ? ((e = j.formatMessage({
              id: "codex.writingBlock.inlineLibrary.addingToLibrary",
              defaultMessage: "Adding to Library",
              description:
                "Accessible label and hover tooltip for the writing block header's Library save control while the document is being saved. Describes an operation in progress, not an action to start. Keep this status label short.",
            })),
            (c[5] = j),
            (c[6] = e))
          : (e = c[6]),
          (t = e))
      } else if (I) {
        let e
        ;(c[7] !== j
          ? ((e = j.formatMessage({
              id: "codex.writingBlock.inlineLibrary.save.space",
              defaultMessage: "Add to Space",
              description:
                "Tooltip and accessible label for the inline document title control. Saves the document to the user's Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
            })),
            (c[7] = j),
            (c[8] = e))
          : (e = c[8]),
          (t = e))
      } else {
        let e
        ;(c[9] !== j
          ? ((e = j.formatMessage({
              id: "codex.writingBlock.inlineLibrary.save",
              defaultMessage: "Add to Library",
              description:
                "Tooltip and accessible label for the inline document title control. Saves the document to the user's Library.",
            })),
            (c[9] = j),
            (c[10] = e))
          : (e = c[10]),
          (t = e))
      }
      return (
        c[11] !== d ||
        c[12] !== u ||
        c[13] !== p ||
        c[14] !== I ||
        c[15] !== C ||
        c[16] !== f ||
        c[17] !== A ||
        c[18] !== h ||
        c[19] !== b ||
        c[20] !== v
          ? ((n = f
              ? (0, i.jsxs)(V.Ab, {
                  align: "start",
                  contentWidth: "menuBounded",
                  triggerButton: (0, i.jsxs)(W.$, {
                    ref: (e) => {
                      "keyboard" === v &&
                        null != e &&
                        e.ownerDocument.activeElement === e.ownerDocument.body &&
                        e.focus({ preventScroll: !0 })
                    },
                    className: (0, G.A)(eu, "min-w-0"),
                    color: "ghostOutline",
                    radius: "full",
                    size: "dialogGhost",
                    children: [
                      (0, i.jsx)(w.I, { asset: O.g }),
                      (0, i.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-0.5",
                        children: [
                          (0, i.jsx)("span", { className: "min-w-0 truncate", children: d }),
                          (0, i.jsx)(w.I, { className: "chevron-RGwrqT", asset: E.U }),
                        ],
                      }),
                    ],
                  }),
                  children: [
                    (0, i.jsx)(ey, { libraryFileId: f, onLibraryClick: h, children: d }),
                    (0, i.jsx)(V.ms.Separator, {}),
                    null != h
                      ? (0, i.jsxs)(V.ms.Item, {
                          onSelect: () => {
                            ;(h(), A(C))
                          },
                          children: [
                            (0, i.jsx)(V.ms.ItemIcon, {
                              size: "md",
                              children: I ? (0, i.jsx)(z.Mpc, {}) : (0, i.jsx)(z.baR, {}),
                            }),
                            I
                              ? (0, i.jsx)(g.A, {
                                  id: "codex.writingBlock.inlineLibrary.openLibrary.space",
                                  defaultMessage: "Open in Space",
                                  description:
                                    "Menu action that opens the Space containing the saved note. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                                })
                              : (0, i.jsx)(g.A, {
                                  id: "codex.writingBlock.inlineLibrary.openLibrary",
                                  defaultMessage: "Open in Library",
                                  description: "Menu action that opens the Library containing the saved note.",
                                }),
                          ],
                        })
                      : null,
                    p,
                    null != b
                      ? (0, i.jsx)(V.ms.Item, {
                          disabled: u,
                          onSelect: b,
                          leftIconAsset: T.t,
                          children: (0, i.jsx)(g.A, {
                            id: "codex.writingBlock.inlineLibrary.versionHistory",
                            defaultMessage: "Version history",
                            description: "Menu action that shows the saved note's previous versions.",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
            (c[11] = d),
            (c[12] = u),
            (c[13] = p),
            (c[14] = I),
            (c[15] = C),
            (c[16] = f),
            (c[17] = A),
            (c[18] = h),
            (c[19] = b),
            (c[20] = v),
            (c[21] = n))
          : (n = c[21]),
        c[22] !== d ||
        c[23] !== u ||
        c[24] !== S ||
        c[25] !== x ||
        c[26] !== f ||
        c[27] !== y ||
        c[28] !== t ||
        c[29] !== k
          ? ((a =
              !f && null != y && k
                ? (0, i.jsx)(ep, { disabled: u, editorView: S, isSaving: x, onSave: y, saveLabel: t, children: d })
                : null),
            (c[22] = d),
            (c[23] = u),
            (c[24] = S),
            (c[25] = x),
            (c[26] = f),
            (c[27] = y),
            (c[28] = t),
            (c[29] = k),
            (c[30] = a))
          : (a = c[30]),
        c[31] !== d ||
        c[32] !== u ||
        c[33] !== x ||
        c[34] !== I ||
        c[35] !== f ||
        c[36] !== y ||
        c[37] !== t ||
        c[38] !== k
          ? ((r =
              f || null == y || k
                ? null
                : (0, i.jsx)(L.m, {
                    content: (0, i.jsxs)("span", {
                      className: "flex items-center gap-1",
                      children: [I ? (0, i.jsx)(z.Mpc, {}) : (0, i.jsx)(z.baR, {}), t],
                    }),
                    children: (0, i.jsxs)(W.$, {
                      className: (0, G.A)(eu, "min-w-0"),
                      "aria-label": t,
                      "aria-busy": x || void 0,
                      color: "ghost",
                      disabled: u || x,
                      radius: "full",
                      size: "imageToolbar",
                      onClick: (e) => y(0 === e.detail),
                      children: [
                        (0, i.jsx)("span", {
                          className: ed,
                          children: (0, i.jsx)("span", {
                            className: "min-w-0 overflow-hidden",
                            children: (0, i.jsx)("span", {
                              className: "flex w-5 items-center justify-center",
                              children: x
                                ? (0, i.jsx)(H.y, { as: "span", className: "size-5" })
                                : (0, i.jsx)(w.I, { asset: N.i }),
                            }),
                          }),
                        }),
                        (0, i.jsx)("span", { className: "min-w-0 truncate", children: d }),
                      ],
                    }),
                  })),
            (c[31] = d),
            (c[32] = u),
            (c[33] = x),
            (c[34] = I),
            (c[35] = f),
            (c[36] = y),
            (c[37] = t),
            (c[38] = k),
            (c[39] = r))
          : (r = c[39]),
        c[40] !== d || c[41] !== f || c[42] !== y
          ? ((s =
              f || null != y
                ? null
                : (0, i.jsx)("span", { className: "min-w-0 truncate px-3 py-2 text-tertiary", children: d })),
            (c[40] = d),
            (c[41] = f),
            (c[42] = y),
            (c[43] = s))
          : (s = c[43]),
        c[44] !== n || c[45] !== a || c[46] !== r || c[47] !== s
          ? ((l = (0, i.jsxs)("div", {
              className: "ms-2 flex min-w-0 grow items-center text-sm font-normal select-none",
              children: [n, a, r, s],
            })),
            (c[44] = n),
            (c[45] = a),
            (c[46] = r),
            (c[47] = s),
            (c[48] = l))
          : (l = c[48]),
        l
      )
    }
    function ey(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        c,
        d,
        u,
        m,
        f = (0, o.c)(29),
        { children: b, libraryFileId: y, onLibraryClick: x } = e,
        v = (0, p.Ul)(U.chatGptAuthenticatedAccountId$),
        k = (0, p.Ul)(U.chatGptAuthenticatedUserId$),
        S = (0, _.Tq)(),
        I = S ? "/space/files" : "/library",
        C = (0, q.Zp)()
      ;(f[0] !== v || f[1] !== y || f[2] !== k
        ? ((t = ["library-api", v, k, "note-location", y]), (f[0] = v), (f[1] = y), (f[2] = k), (f[3] = t))
        : (t = f[3]),
        f[4] !== v || f[5] !== y
          ? ((n =
              null == v
                ? R.hT
                : async (e) => {
                    let { signal: t } = e,
                      n = {
                        additionalHeaders: { "ChatGPT-Account-ID": v },
                        expectedErrorStatuses: [403, 404],
                        signal: t,
                      },
                      i = await h.Request.safeGet("/files/library/files/{library_file_id}", {
                        ...n,
                        parameters: { path: { library_file_id: y } },
                      })
                    return null == i.directory_id
                      ? []
                      : (
                          await h.Request.safeGet("/files/library/directories/path", {
                            ...n,
                            parameters: { query: { directory_id: i.directory_id } },
                          })
                        ).items.filter(ew)
                  }),
            (f[4] = v),
            (f[5] = y),
            (f[6] = n))
          : (n = f[6]))
      let j = null != v && null != x
      f[7] !== t || f[8] !== n || f[9] !== j
        ? ((a = { queryKey: t, queryFn: n, enabled: j, staleTime: 0, retry: !1 }),
          (f[7] = t),
          (f[8] = n),
          (f[9] = j),
          (f[10] = a))
        : (a = f[10])
      let { data: A } = (0, D.I)(a)
      ;(f[11] !== S
        ? ((r = {
            id: null,
            name: S
              ? (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.inlineLibrary.location.space",
                  defaultMessage: "Space",
                  description:
                    "Location shown below the saved note title in its actions menu. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                })
              : (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.inlineLibrary.location",
                  defaultMessage: "Library",
                  description: "Location shown below the saved note title in its actions menu.",
                }),
          }),
          (f[11] = S),
          (f[12] = r))
        : (r = f[12]),
        f[13] !== A ? ((s = A ?? []), (f[13] = A), (f[14] = s)) : (s = f[14]),
        f[15] !== r || f[16] !== s ? ((l = [r, ...s]), (f[15] = r), (f[16] = s), (f[17] = l)) : (l = f[17]))
      let M = l
      return (
        f[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)("span", {
              className: "flex h-lh items-center",
              children: (0, i.jsx)(w.I, { asset: P.D }),
            })),
            (f[18] = c))
          : (c = f[18]),
        f[19] !== b
          ? ((d = (0, i.jsx)("span", { className: "truncate text-default", children: b })), (f[19] = b), (f[20] = d))
          : (d = f[20]),
        f[21] !== M || f[22] !== I || f[23] !== C || f[24] !== x
          ? ((u = (0, i.jsx)("div", {
              className: "flex flex-wrap items-center gap-1 text-xs leading-dense text-tertiary",
              children: M.map((e, t) =>
                (0, i.jsxs)(
                  "span",
                  {
                    className: "flex max-w-full min-w-0 items-start gap-1",
                    children: [
                      t > 0 ? (0, i.jsx)("span", { "aria-hidden": "true", children: "/" }) : null,
                      (0, i.jsx)(V.ms.Item, {
                        className: "outline-hidden",
                        variant: "unstyled",
                        allowWrap: !0,
                        disabled: null == x,
                        onSelect: () => {
                          ;(x?.(), C(null == e.id ? I : `${I}/d/${encodeURIComponent(e.id)}`))
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
            (f[21] = M),
            (f[22] = I),
            (f[23] = C),
            (f[24] = x),
            (f[25] = u))
          : (u = f[25]),
        f[26] !== u || f[27] !== d
          ? ((m = (0, i.jsxs)("div", {
              className: "flex min-w-0 gap-2 px-row-x py-row-y",
              children: [c, (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [d, u] })],
            })),
            (f[26] = u),
            (f[27] = d),
            (f[28] = m))
          : (m = f[28]),
        m
      )
    }
    function ew(e) {
      return !e.is_root
    }
    var ex = n("MVL1"),
      e_ = n("Haiv"),
      ev = n("QhQG"),
      ek = n("AxFa"),
      eS = n("SGsN"),
      eI = n("rO8L"),
      eC = n("BA9i"),
      ej = n("H7Ld"),
      eA = n("cLdu"),
      eM = n("nf3G")
    let eB = (0, et.m3)("writing-block-presentation-format", "spaces", {
        coerceStoredValue: (e) => ("google-slides" === e || "powerpoint" === e ? e : "spaces"),
      }),
      eL = {
        spaces: "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_SPACES",
        powerpoint: "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_POWERPOINT",
        "google-slides": "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_GOOGLE_SLIDES",
      }
    function eE(e) {
      let t,
        n,
        a,
        r,
        l,
        c,
        d,
        u,
        f,
        h,
        b,
        y,
        x,
        _,
        v,
        k,
        C,
        j,
        A,
        M,
        B,
        L,
        E,
        T = (0, o.c)(61),
        {
          analyticsConversationId: N,
          content: P,
          conversationId: O,
          disabled: R,
          onSubmittingChange: D,
          writingBlockId: G,
        } = e,
        q = (0, p.gh)(I.u),
        U = (0, F.A)(),
        W = (0, p.Ul)(eM.threadCwd$),
        K = (0, p.Ul)(eM.threadHostId$),
        $ = (0, p.Ul)(eB)
      T[0] !== K ? ((t = { hostId: K }), (T[0] = K), (T[1] = t)) : (t = T[1])
      let Z = (0, eI.J)(t)
      ;(T[2] !== W ? ((n = null == W ? void 0 : [W]), (T[2] = W), (T[3] = n)) : (n = T[3]),
        T[4] !== K || T[5] !== Z || T[6] !== n
          ? ((a = { enabled: Z, hostId: K, resolveActiveRoots: !0, roots: n }),
            (T[4] = K),
            (T[5] = Z),
            (T[6] = n),
            (T[7] = a))
          : (a = T[7]))
      let { data: Q, isLoading: Y } = (0, eA.Kj)(a)
      T[8] !== Q || T[9] !== Z ? ((r = Z ? Q?.find(eT) : void 0), (T[8] = Q), (T[9] = Z), (T[10] = r)) : (r = T[10])
      let J = r,
        [X, ee] = (0, m.useState)(!1)
      T[11] !== N ||
      T[12] !== O ||
      T[13] !== $ ||
      T[14] !== U ||
      T[15] !== D ||
      T[16] !== $ ||
      T[17] !== J ||
      T[18] !== q ||
      T[19] !== G
        ? ((l = () => {
            ;((0, S.yy)(q, s.kV, {
              conversationId: N,
              writingBlockId: G,
              selectedDestination: eL[$],
              destination: eL[$],
            }),
              ee(!0),
              D(!0))
            let e = U.formatMessage({
                id: "codex.writingBlock.slides.create.promptWithOutlineAbove",
                defaultMessage: "make a presentation with the outline above",
                description:
                  "User message following a Presentations plugin mention that asks Codex to create a presentation from the selected presentation outline above",
              }),
              t =
                null == J ? e : (0, ej.KH)({ defaultPrompt: e, pluginDisplayName: (0, e_.V)(J), pluginId: J.plugin.id })
            ;(0, ev.d)({
              scope: q,
              additionalContext: {
                codex_apps_artifact_outline: {
                  kind: "untrusted",
                  value: `Use the presentation outline in writing block "${G}".`,
                },
                codex_apps_artifact_platform: {
                  kind: "untrusted",
                  value: {
                    "google-slides": "Create the presentation in Google Slides.",
                    spaces: "Create and save a native presentation Page in Spaces.",
                    powerpoint: "Create the presentation as a PowerPoint (.pptx) file.",
                  }[$],
                },
              },
              turnTrigger: "slides_outline",
              model: void 0,
              prompt: t,
              threadId: O,
              thinking: void 0,
            })
              .catch(() => {
                q.get(eS.Id).danger(
                  U.formatMessage({
                    id: "codex.writingBlock.slides.create.error",
                    defaultMessage: "Couldn’t create slides from the presentation outline",
                    description:
                      "Error toast shown when a presentation outline cannot be sent to the current Codex task",
                  }),
                  { errorAnalytics: { toastId: "codex.writingBlock.slides.create.error" } },
                )
              })
              .finally(() => {
                ;(ee(!1), D(!1))
              })
          }),
          (T[11] = N),
          (T[12] = O),
          (T[13] = $),
          (T[14] = U),
          (T[15] = D),
          (T[16] = $),
          (T[17] = J),
          (T[18] = q),
          (T[19] = G),
          (T[20] = l))
        : (l = T[20])
      let et = l
      T[21] !== P || T[22] !== R || T[23] !== Y || T[24] !== X
        ? ((c = R || X || Y || 0 === P.trim().length), (T[21] = P), (T[22] = R), (T[23] = Y), (T[24] = X), (T[25] = c))
        : (c = T[25])
      let en = c
      T[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            spaces: (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.spacesButton",
              defaultMessage: "Create presentation",
              description: "Button to create the outlined presentation in Spaces",
            }),
            "google-slides": (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.googleSlidesButton",
              defaultMessage: "Create Google Slides",
              description: "Button to create the outlined presentation in Google Slides",
            }),
            powerpoint: (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.powerPointButton",
              defaultMessage: "Create PowerPoint",
              description: "Button to create the outlined PowerPoint presentation",
            }),
          }),
          (T[26] = d))
        : (d = T[26])
      let ei = d[$]
      return (
        T[27] !== U
          ? ((u = U.formatMessage({
              id: "codex.writingBlock.slides.create.chooseFormat",
              defaultMessage: "Choose presentation format",
              description:
                "Accessible label for the dropdown button that selects the destination for the completed presentation outline",
            })),
            (T[27] = U),
            (T[28] = u))
          : (u = T[28]),
        T[29] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, i.jsx)(z.AdV, {})), (T[29] = f)) : (f = T[29]),
        T[30] !== q ? ((h = () => q.set(eB, "spaces")), (T[30] = q), (T[31] = h)) : (h = T[31]),
        T[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.spacesOption",
              defaultMessage: "Spaces",
              description: "Presentation destination option for creating a native Spaces presentation",
            })),
            (T[32] = b))
          : (b = T[32]),
        T[33] !== h
          ? ((y = (0, i.jsx)(V.ms.RadioItem, { icon: f, onSelect: h, value: "spaces", children: b })),
            (T[33] = h),
            (T[34] = y))
          : (y = T[34]),
        T[35] === Symbol.for("react.memo_cache_sentinel") ? ((x = (0, i.jsx)(z.xxq, {})), (T[35] = x)) : (x = T[35]),
        T[36] !== q ? ((_ = () => q.set(eB, "powerpoint")), (T[36] = q), (T[37] = _)) : (_ = T[37]),
        T[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.powerPointOption",
              defaultMessage: "PowerPoint",
              description:
                "Presentation destination option that creates a native Spaces presentation on web or a PowerPoint file on desktop",
            })),
            (T[38] = v))
          : (v = T[38]),
        T[39] !== _
          ? ((k = (0, i.jsx)(V.ms.RadioItem, { icon: x, onSelect: _, value: "powerpoint", children: v })),
            (T[39] = _),
            (T[40] = k))
          : (k = T[40]),
        T[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, i.jsx)(w.I, { asset: ex.m })), (T[41] = C))
          : (C = T[41]),
        T[42] !== q ? ((j = () => q.set(eB, "google-slides")), (T[42] = q), (T[43] = j)) : (j = T[43]),
        T[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.googleSlidesOption",
              defaultMessage: "Google Slides",
              description:
                "Presentation format dropdown option for creating a Google Slides presentation from a completed presentation outline",
            })),
            (T[44] = A))
          : (A = T[44]),
        T[45] !== j
          ? ((M = (0, i.jsx)(V.ms.RadioItem, { icon: C, onSelect: j, value: "google-slides", children: A })),
            (T[45] = j),
            (T[46] = M))
          : (M = T[46]),
        T[47] !== $ || T[48] !== y || T[49] !== k || T[50] !== M
          ? ((B = (0, i.jsxs)(V.ms.RadioGroup, { value: $, children: [y, k, M] })),
            (T[47] = $),
            (T[48] = y),
            (T[49] = k),
            (T[50] = M),
            (T[51] = B))
          : (B = T[51]),
        T[52] !== X ? ((L = X && (0, i.jsx)(H.y, { className: "icon-xs" })), (T[52] = X), (T[53] = L)) : (L = T[53]),
        T[54] !== et || T[55] !== ei || T[56] !== en || T[57] !== B || T[58] !== L || T[59] !== u
          ? ((E = (0, i.jsxs)(ek._, {
              className: "my-auto",
              color: "composerPrimary",
              disabled: en,
              dropdownAlign: "end",
              dropdownContentWidth: "menuBounded",
              dropdownContentLayout: "custom",
              onClick: et,
              radius: "full",
              secondaryAriaLabel: u,
              size: "dialog",
              type: "button",
              dropdownContent: B,
              children: [L, ei],
            })),
            (T[54] = et),
            (T[55] = ei),
            (T[56] = en),
            (T[57] = B),
            (T[58] = L),
            (T[59] = u),
            (T[60] = E))
          : (E = T[60]),
        E
      )
    }
    function eT(e) {
      return e.plugin.enabled && "DISABLED_BY_ADMIN" !== e.plugin.availability && (0, eC.ho)(e)
    }
    function eN(e) {
      let t = e.replace(/^[ \t]{0,3}((`|~)\2{2,})[^\n]*(?:\n[\s\S]*?(?:^[ \t]{0,3}\1\2*[ \t]*$|(?![\s\S]))|$)/gmu, ""),
        n = t.match(/^[ \t]{0,3}(?:#{1,6}\s+)?(?:\*\*)?slide\s+#?\d+\b/gimu)
      if (null != n) return n.length
      let i = (e) => {
          let t = e.map((e) => e[1].replace(/\t/gu, "    ").length),
            n = Math.min(...t)
          return t.filter((e) => e === n).length
        },
        o = Array.from(t.matchAll(/^([ \t]*)\d+[.)]\s+\*\*/gmu))
      if (o.length > 0) return i(o)
      let a = new Map()
      for (let e of t.matchAll(/^[ \t]{0,3}(#{1,6})\s+.+$/gmu)) {
        let t = e[1].length
        a.set(t, (a.get(t) ?? 0) + 1)
      }
      for (let e = 1; e <= 6; e += 1) {
        let t = a.get(e) ?? 0
        if (t > 1) return t
      }
      if (a.size > 0) return 1
      let r = Array.from(t.matchAll(/^([ \t]*)(?:\d+[.)]|[-+*])\s+/gmu))
      return r.length > 0 ? i(r) : Number(t.trim().length > 0)
    }
    var eP = n("MwZW"),
      eO = n("YAOF"),
      eR = n("v7qY"),
      eD = n("Qgfj"),
      eG = n("nsuH"),
      eF = n("HgLj")
    function eq(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        b,
        y,
        x,
        _,
        v,
        k,
        S,
        I,
        C,
        j,
        A,
        M,
        B,
        L,
        E,
        T,
        N,
        P,
        O,
        R = (0, o.c)(109),
        {
          disabled: D,
          isOpen: q,
          onOpenChange: U,
          onSubmittingChange: V,
          onSlideCountChange: Z,
          onCancel: Q,
          slideCount: X,
        } = e,
        ee = (0, F.A)(),
        [et, en] = (0, m.useState)(!1),
        [ei, eo] = (0, m.useState)(!1),
        ea = (0, Y.I)(),
        er = (0, m.useRef)(null),
        es = (0, m.useRef)(null),
        el = (0, m.useRef)(null),
        ec = (0, m.useRef)(!1),
        [ed, eu] = (0, m.useState)()
      R[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e, t) => {
            eu(t.clientWidth)
          }),
          (R[0] = t))
        : (t = R[0])
      let ep = (0, eG.wY)(t),
        em = Math.max(1, X),
        [eg, ef] = (0, m.useState)(Math.max(20, em + 10)),
        [eh, eb] = (0, m.useState)(!1),
        [ey, ew] = (0, m.useState)(em),
        ex = et || ei || (!D && (q ?? eh)),
        e_ = 0.15 * !ea
      if (ei) {
        let e
        ;(R[1] !== ee
          ? ((e = ee.formatMessage({
              id: "codex.writingBlock.slides.slideCount.updated",
              defaultMessage: "Slide count updated",
              description:
                "Accessible confirmation that the presentation outline was successfully rewritten to the requested slide count",
            })),
            (R[1] = ee),
            (R[2] = e))
          : (e = R[2]),
          (n = e))
      } else if (et) {
        let e
        ;(R[3] !== ee
          ? ((e = ee.formatMessage({
              id: "codex.writingBlock.slides.slideCount.cancel",
              defaultMessage: "Cancel slide count change",
              description: "Accessible name for cancelling an in-progress presentation outline rewrite",
            })),
            (R[3] = ee),
            (R[4] = e))
          : (e = R[4]),
          (n = e))
      } else {
        let e
        ;(R[5] !== ee
          ? ((e = ee.formatMessage({
              id: "codex.writingBlock.slides.slideCount.confirm",
              defaultMessage: "Confirm slide count",
              description:
                "Accessible name for the button that applies a new slide count to an editable Codex presentation outline using Magic Edit",
            })),
            (R[5] = ee),
            (R[6] = e))
          : (e = R[6]),
          (n = e))
      }
      R[7] !== em || R[8] !== q || R[9] !== U
        ? ((a = (e) => {
            ;(eo(!1), e && (ef(Math.max(20, em + 10)), ew(em)), null == q && eb(e), U?.(e))
          }),
          (R[7] = em),
          (R[8] = q),
          (R[9] = U),
          (R[10] = a))
        : (a = R[10])
      let ev = a
      R[11] !== ev
        ? ((r = () => {
            let e = ec.current
            ;((0, eR.flushSync)(() => ev(!1)), e && es.current?.focus())
          }),
          (R[11] = ev),
          (R[12] = r))
        : (r = R[12])
      let ek = r
      R[13] !== et || R[14] !== ev
        ? ((s = (e) => {
            null != er.current && !e.composedPath().includes(er.current) && ((ec.current = !1), et || ev(!1))
          }),
          (R[13] = et),
          (R[14] = ev),
          (R[15] = s))
        : (s = R[15])
      let eS = (0, m.useEffectEvent)(s)
      ;(R[16] !== eS || R[17] !== ex
        ? ((l = () => {
            if (!ex) return
            let e = er.current?.ownerDocument
            if (null == e) return
            let t = (e) => {
              ec.current = null != er.current && e.composedPath().includes(er.current)
            }
            return (
              e.addEventListener("focusin", t),
              e.addEventListener("pointerdown", eS, !0),
              () => {
                ;(e.removeEventListener("focusin", t), e.removeEventListener("pointerdown", eS, !0))
              }
            )
          }),
          (R[16] = eS),
          (R[17] = ex),
          (R[18] = l))
        : (l = R[18]),
        R[19] !== ex ? ((c = [ex]), (R[19] = ex), (R[20] = c)) : (c = R[20]),
        (0, m.useEffect)(l, c),
        R[21] !== ep ? ((d = (0, eF.P)(er, ep)), (R[21] = ep), (R[22] = d)) : (d = R[22]))
      let eI = (D || et) && "opacity-40"
      R[23] !== eI
        ? ((u = (0, G.A)("relative flex h-9 w-72 max-w-full min-w-0 items-center select-none sm:w-80", eI)),
          (R[23] = eI),
          (R[24] = u))
        : (u = R[24])
      let eC = ex && "pointer-events-none"
      R[25] !== eC
        ? ((p = (0, G.A)(
            "group/slide-count relative flex h-full min-w-0 shrink-0 cursor-interaction items-center rounded-full px-3 text-sm font-medium text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default",
            eC,
          )),
          (R[25] = eC),
          (R[26] = p))
        : (p = R[26])
      let ej = ex || void 0,
        eA = D || et
      R[27] !== ev
        ? ((f = () => {
            ;((0, eR.flushSync)(() => ev(!0)), el.current?.focus())
          }),
          (R[27] = ev),
          (R[28] = f))
        : (f = R[28])
      let eM = ex ? -1 : void 0,
        eB = !ex && !D && "group-hover/slide-count:bg-secondary-ghost-hover"
      R[29] !== eB
        ? ((h = (0, G.A)(
            "pointer-events-none absolute inset-y-0 start-0 rounded-full border border-default bg-surface",
            eB,
          )),
          (R[29] = eB),
          (R[30] = h))
        : (h = R[30])
      let eL = ex ? ed : "100%"
      ;(R[31] !== eL ? ((b = { width: eL }), (R[31] = eL), (R[32] = b)) : (b = R[32]),
        R[33] !== ea ? ((y = ea ? { duration: 0 } : J.RH), (R[33] = ea), (R[34] = y)) : (y = R[34]),
        R[35] !== h || R[36] !== b || R[37] !== y
          ? ((x = (0, i.jsx)($.P.span, { className: h, animate: b, initial: !1, transition: y })),
            (R[35] = h),
            (R[36] = b),
            (R[37] = y),
            (R[38] = x))
          : (x = R[38]),
        R[39] === Symbol.for("react.memo_cache_sentinel") ? ((_ = (0, i.jsx)(z.AdV, {})), (R[39] = _)) : (_ = R[39]),
        R[40] !== eg || R[41] !== ex || R[42] !== X
          ? ((v = (0, i.jsx)("span", {
              "aria-hidden": !0,
              className: "invisible col-start-1 row-start-1",
              children: ex ? (0, i.jsx)(eD.Gr, { value: eg }) : (0, i.jsx)(g.A, { ...eW, values: { count: X } }),
            })),
            (R[40] = eg),
            (R[41] = ex),
            (R[42] = X),
            (R[43] = v))
          : (v = R[43]))
      let eE = +!!ex
      R[44] !== eE ? ((k = { opacity: eE }), (R[44] = eE), (R[45] = k)) : (k = R[45])
      let eT = ex ? 0 : e_
      ;(R[46] !== e_ || R[47] !== eT
        ? ((S = { duration: e_, delay: eT }), (R[46] = e_), (R[47] = eT), (R[48] = S))
        : (S = R[48]),
        R[49] !== ey ? ((I = (0, i.jsx)(eD.Gr, { value: ey })), (R[49] = ey), (R[50] = I)) : (I = R[50]),
        R[51] !== k || R[52] !== S || R[53] !== I
          ? ((C = (0, i.jsx)($.P.span, {
              className: "col-start-1 row-start-1",
              animate: k,
              initial: !1,
              transition: S,
              "aria-hidden": !0,
              children: I,
            })),
            (R[51] = k),
            (R[52] = S),
            (R[53] = I),
            (R[54] = C))
          : (C = R[54]))
      let eN = +!ex
      R[55] !== eN ? ((j = { opacity: eN }), (R[55] = eN), (R[56] = j)) : (j = R[56])
      let eq = ex ? 0 : e_
      ;(R[57] !== e_ || R[58] !== eq
        ? ((A = { duration: e_, delay: eq }), (R[57] = e_), (R[58] = eq), (R[59] = A))
        : (A = R[59]),
        R[60] !== X ? ((M = (0, i.jsx)(g.A, { ...eW, values: { count: X } })), (R[60] = X), (R[61] = M)) : (M = R[61]),
        R[62] !== ex || R[63] !== j || R[64] !== A || R[65] !== M
          ? ((B = (0, i.jsx)($.P.span, {
              className: "absolute inset-y-0 start-0 whitespace-nowrap",
              animate: j,
              initial: !1,
              transition: A,
              "aria-hidden": ex,
              children: M,
            })),
            (R[62] = ex),
            (R[63] = j),
            (R[64] = A),
            (R[65] = M),
            (R[66] = B))
          : (B = R[66]),
        R[67] !== v || R[68] !== C || R[69] !== B
          ? ((L = (0, i.jsxs)("span", {
              className: "relative flex items-center gap-1.5",
              children: [
                _,
                (0, i.jsxs)("span", { className: "relative grid text-start tabular-nums", children: [v, C, B] }),
              ],
            })),
            (R[67] = v),
            (R[68] = C),
            (R[69] = B),
            (R[70] = L))
          : (L = R[70]),
        R[71] !== ex ||
        R[72] !== p ||
        R[73] !== ej ||
        R[74] !== eA ||
        R[75] !== f ||
        R[76] !== eM ||
        R[77] !== x ||
        R[78] !== L
          ? ((E = (0, i.jsxs)("button", {
              ref: es,
              className: p,
              "aria-expanded": ex,
              "aria-hidden": ej,
              disabled: eA,
              onClick: f,
              type: "button",
              tabIndex: eM,
              children: [x, L],
            })),
            (R[71] = ex),
            (R[72] = p),
            (R[73] = ej),
            (R[74] = eA),
            (R[75] = f),
            (R[76] = eM),
            (R[77] = x),
            (R[78] = L),
            (R[79] = E))
          : (E = R[79]))
      let eV = !ex,
        ez = !ex
      return (
        R[80] !== n ||
        R[81] !== D ||
        R[82] !== ey ||
        R[83] !== e_ ||
        R[84] !== ek ||
        R[85] !== ee ||
        R[86] !== et ||
        R[87] !== ei ||
        R[88] !== eg ||
        R[89] !== Q ||
        R[90] !== Z ||
        R[91] !== V ||
        R[92] !== ex ||
        R[93] !== ev ||
        R[94] !== ea ||
        R[95] !== X
          ? ((T =
              ex &&
              (0, i.jsxs)($.P.div, {
                className: "relative flex h-full min-w-0 flex-1 items-center gap-2 pe-1.5",
                animate: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0, transition: { duration: e_, delay: 0 } },
                transition: { duration: e_, delay: e_, ease: J.Wu },
                onKeyDownCapture: (e) => {
                  if ("Escape" === e.key) {
                    if ((e.preventDefault(), e.stopPropagation(), et)) return void Q?.()
                    ;((0, eR.flushSync)(() => ev(!1)), es.current?.focus())
                  }
                },
                children: [
                  (0, i.jsxs)(eO.bL, {
                    className: "relative flex h-6 min-w-0 flex-1 touch-none items-center",
                    disabled: !ex || D || et || ei,
                    max: eg,
                    min: 1,
                    onValueChange: (e) => {
                      let [t] = e
                      null != t && ew(t)
                    },
                    step: 1,
                    value: [ey],
                    children: [
                      (0, i.jsx)(eO.CC, {
                        className: "relative h-4 grow overflow-hidden rounded-full bg-text/5",
                        children: (0, i.jsx)("span", {
                          className:
                            "pointer-events-none absolute inset-x-2 inset-y-0 flex items-center justify-between",
                          children: Array.from({ length: Math.min(eg, 20) }, eU),
                        }),
                      }),
                      (0, i.jsx)(eO.zi, {
                        ref: el,
                        "aria-label": ee.formatMessage({
                          id: "codex.writingBlock.slides.slideCount.slider",
                          defaultMessage: "Number of presentation slides",
                          description:
                            "Accessible name for the keyboard-operable slider that adjusts the number of slides in a Codex presentation outline",
                        }),
                        "aria-valuetext": ee.formatMessage(
                          {
                            id: "codex.writingBlock.slides.slideCount.value",
                            defaultMessage: "{count, plural, one {# slide} other {# slides}}",
                            description:
                              "Current presentation slide count announced to screen-reader users while adjusting an outline; count is the positive number of slides",
                          },
                          { count: ey },
                        ),
                        autoFocus: ex,
                        className:
                          "block h-6 w-2 rounded-full border border-default bg-surface shadow-sm transition-transform duration-basic ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring motion-safe:active:scale-110 motion-reduce:transition-none",
                      }),
                    ],
                  }),
                  (0, i.jsxs)(W.$, {
                    "aria-label": n,
                    color: "composerPrimary",
                    disabledAppearance: D || et || ei || !ex ? "unchanged" : "dimmed",
                    disabled: ei || (et ? null == Q : !ex || D || ey === X),
                    onClick: () => {
                      et
                        ? Q?.()
                        : ((ec.current = er.current?.contains(er.current.ownerDocument.activeElement) ?? !1),
                          en(!0),
                          V?.(!0),
                          Z(ey)
                            .finally(() => {
                              ;(0, eR.flushSync)(() => {
                                ;(en(!1), V?.(!1))
                              })
                            })
                            .then((e) => {
                              e && (ea ? ek() : eo(!0))
                            }))
                    },
                    radius: "full",
                    size: "compact",
                    uniform: !0,
                    children: [
                      ei &&
                        (0, i.jsx)($.P.span, {
                          animate: { opacity: [0, 1, 1] },
                          initial: { opacity: 0 },
                          onAnimationComplete: ek,
                          transition: { duration: 0.3 },
                          children: (0, i.jsx)(z.yIE, {}),
                        }),
                      !ei && et && (0, i.jsx)(H.y, { className: "icon-xs" }),
                      !ei && !et && (0, i.jsx)(w.I, { asset: eP.l }),
                    ],
                  }),
                ],
              })),
            (R[80] = n),
            (R[81] = D),
            (R[82] = ey),
            (R[83] = e_),
            (R[84] = ek),
            (R[85] = ee),
            (R[86] = et),
            (R[87] = ei),
            (R[88] = eg),
            (R[89] = Q),
            (R[90] = Z),
            (R[91] = V),
            (R[92] = ex),
            (R[93] = ev),
            (R[94] = ea),
            (R[95] = X),
            (R[96] = T))
          : (T = R[96]),
        R[97] !== T
          ? ((N = (0, i.jsx)(K.N, { initial: !1, mode: "popLayout", children: T })), (R[97] = T), (R[98] = N))
          : (N = R[98]),
        R[99] !== eV || R[100] !== ez || R[101] !== N
          ? ((P = (0, i.jsx)("div", { className: "contents", "aria-hidden": eV, inert: ez, children: N })),
            (R[99] = eV),
            (R[100] = ez),
            (R[101] = N),
            (R[102] = P))
          : (P = R[102]),
        R[103] !== et || R[104] !== E || R[105] !== P || R[106] !== d || R[107] !== u
          ? ((O = (0, i.jsxs)("div", { ref: d, className: u, "aria-busy": et, children: [E, P] })),
            (R[103] = et),
            (R[104] = E),
            (R[105] = P),
            (R[106] = d),
            (R[107] = u),
            (R[108] = O))
          : (O = R[108]),
        O
      )
    }
    function eU(e, t) {
      return (0, i.jsx)("span", { "aria-hidden": !0, className: "size-1 shrink-0 rounded-full bg-text/20" }, t)
    }
    let eW = (0, eD.zR)({
      id: "codex.writingBlock.slides.slideCount.button",
      defaultMessage: "{count, plural, one {# slide} other {# slides}}",
      description:
        "Button showing the current or requested number of slides in an editable Codex presentation outline; selecting the button opens the slide-count adjustment slider",
    })
    var eV = n("iNet"),
      ez = n("Ot7V"),
      eH = n("wNdV"),
      eK = n("ripK")
    function e$(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        c,
        d,
        u,
        f,
        b,
        y,
        w = (0, o.c)(54),
        {
          appearance: x,
          content: _,
          isDisabled: v,
          messageId: k,
          onBeforeExport: S,
          renderAsSubmenu: C,
          serverConversationId: j,
          title: M,
          writingBlockIndex: B,
        } = e,
        E = void 0 === x ? "inline" : x,
        T = void 0 !== C && C,
        N = (0, p.gh)(I.u),
        P = (0, F.A)(),
        [O, R] = (0, m.useState)(!1)
      w[0] !== P
        ? ((t = P.formatMessage({
            id: "codex.writingBlock.download.label",
            defaultMessage: "Download",
            description:
              "Tooltip and accessible name for the download menu in a Codex Apps document writing block. The menu offers Markdown, PDF, and Microsoft Word formats when available.",
          })),
          (w[0] = P),
          (w[1] = t))
        : (t = w[1])
      let D = t,
        G = null != j && null != k && null != B
      w[2] !== _ || w[3] !== M
        ? ((n = () => {
            let e = (M ?? "writing-block").replaceAll("/", "-").replaceAll("\\", "-").trim(),
              t = /\.md$/i.test(e) ? e : `${e || "writing-block"}.md`
            ;(0, eK.W)(new Blob(["function" == typeof _ ? _() : _], { type: "text/markdown;charset=utf-8" }), t)
          }),
          (w[2] = _),
          (w[3] = M),
          (w[4] = n))
        : (n = w[4])
      let q = n
      w[5] !== P || w[6] !== k || w[7] !== S || w[8] !== N || w[9] !== j || w[10] !== B
        ? ((a = (e) => {
            null != j &&
              null != k &&
              null != B &&
              (R(!0),
              Promise.resolve(S?.())
                .then(() =>
                  h.Request.safePost("/export_doc/writing_block/file", {
                    requestBody: { conversation_id: j, export_type: e, index: B, message_id: k },
                  }),
                )
                .then(eZ)
                .catch(() => {
                  N.get(eS.Id).danger(
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
          (w[5] = P),
          (w[6] = k),
          (w[7] = S),
          (w[8] = N),
          (w[9] = j),
          (w[10] = B),
          (w[11] = a))
        : (a = w[11])
      let U = a,
        K = v || O
      ;(w[12] !== q || w[13] !== T
        ? ((r = (e) => {
            ;(T && e.preventDefault(), q())
          }),
          (w[12] = q),
          (w[13] = T),
          (w[14] = r))
        : (r = w[14]),
        w[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(V.ms.ItemIcon, {
              size: "md",
              children: (0, i.jsx)(eH.B, {
                className: "size-5",
                "aria-hidden": !0,
                fileName: void 0,
                mimeType: "text/markdown",
              }),
            })),
            (l = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.download.markdown",
              defaultMessage: "Markdown document",
              description:
                "Menu item that downloads a Codex Apps document writing block as a Markdown file with the .md extension.",
            })),
            (w[15] = s),
            (w[16] = l))
          : ((s = w[15]), (l = w[16])),
        w[17] !== K || w[18] !== r
          ? ((c = (0, i.jsxs)(V.ms.Item, { disabled: K, onSelect: r, children: [s, l] })),
            (w[17] = K),
            (w[18] = r),
            (w[19] = c))
          : (c = w[19]),
        w[20] !== G || w[21] !== U || w[22] !== v || w[23] !== O || w[24] !== T
          ? ((d = G
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(V.ms.Item, {
                      disabled: v || O,
                      onSelect: (e) => {
                        ;(T && e.preventDefault(), U("pdf"))
                      },
                      children: [
                        (0, i.jsx)(V.ms.ItemIcon, {
                          size: "md",
                          children: (0, i.jsx)(eH.B, {
                            className: "size-5",
                            "aria-hidden": !0,
                            fileName: void 0,
                            mimeType: "application/pdf",
                          }),
                        }),
                        (0, i.jsx)(g.A, {
                          id: "codex.writingBlock.download.pdf",
                          defaultMessage: "PDF document",
                          description:
                            "Menu item that downloads a Codex Apps document writing block as a PDF file with the .pdf extension.",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(V.ms.Item, {
                      disabled: v || O,
                      onSelect: (e) => {
                        ;(T && e.preventDefault(), U("docx"))
                      },
                      children: [
                        (0, i.jsx)(V.ms.ItemIcon, {
                          size: "md",
                          children: (0, i.jsx)(eH.B, {
                            className: "size-5",
                            "aria-hidden": !0,
                            fileName: void 0,
                            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          }),
                        }),
                        (0, i.jsx)(g.A, {
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
            (w[20] = G),
            (w[21] = U),
            (w[22] = v),
            (w[23] = O),
            (w[24] = T),
            (w[25] = d))
          : (d = w[25]),
        w[26] !== c || w[27] !== d
          ? ((u = (0, i.jsxs)(i.Fragment, { children: [c, d] })), (w[26] = c), (w[27] = d), (w[28] = u))
          : (u = w[28]))
      let $ = u
      if (T) {
        let e
        if (!G) {
          let e
          return (
            w[29] !== D || w[30] !== q || w[31] !== v
              ? ((e = (0, i.jsx)(V.ms.Item, { disabled: v, leftIconAsset: eV.r, onSelect: q, children: D })),
                (w[29] = D),
                (w[30] = q),
                (w[31] = v),
                (w[32] = e))
              : (e = w[32]),
            e
          )
        }
        let t = v || O,
          n = O ? void 0 : eV.r,
          o = O ? "size-5" : void 0
        return (
          w[33] !== D || w[34] !== $ || w[35] !== t || w[36] !== n || w[37] !== o
            ? ((e = (0, i.jsx)(V.ms.FlyoutSubmenuItem, {
                ariaLabel: D,
                contentWidth: "menuBounded",
                disabled: t,
                label: D,
                leftIconAsset: n,
                leftIconClassName: o,
                LeftIcon: H.y,
                children: $,
              })),
              (w[33] = D),
              (w[34] = $),
              (w[35] = t),
              (w[36] = n),
              (w[37] = o),
              (w[38] = e))
            : (e = w[38]),
          e
        )
      }
      ;(w[39] !== E || w[40] !== G || w[41] !== D || w[42] !== q || w[43] !== v || w[44] !== O
        ? ((f =
            "viewer" === E
              ? (0, i.jsx)(A.DW, {
                  "aria-label": D,
                  disabled: v || O,
                  onClick: G ? void 0 : q,
                  uniform: !0,
                  children: O ? (0, i.jsx)(H.y, { className: "size-5" }) : (0, i.jsx)(z.vHO, {}),
                })
              : (0, i.jsx)(W.$, {
                  "aria-label": D,
                  color: "ghostActive",
                  disabled: v || O,
                  onClick: G ? void 0 : q,
                  size: "imageToolbar",
                  uniform: !0,
                  children: O ? (0, i.jsx)(H.y, { className: "size-5" }) : (0, i.jsx)(z.vHO, {}),
                })),
          (w[39] = E),
          (w[40] = G),
          (w[41] = D),
          (w[42] = q),
          (w[43] = v),
          (w[44] = O),
          (w[45] = f))
        : (f = w[45]),
        w[46] !== D || w[47] !== f
          ? ((b = (0, i.jsx)(L.m, { sideOffset: 0, content: D, children: f })), (w[46] = D), (w[47] = f), (w[48] = b))
          : (b = w[48]))
      let Z = b
      if (!G) return Z
      let Q = "viewer" === E ? A.OZ : V.Ab,
        Y = v || O
      return (
        w[49] !== Q || w[50] !== Z || w[51] !== $ || w[52] !== Y
          ? ((y = (0, i.jsx)(Q, {
              align: "end",
              contentWidth: "menuBounded",
              disabled: Y,
              triggerButton: Z,
              children: $,
            })),
            (w[49] = Q),
            (w[50] = Z),
            (w[51] = $),
            (w[52] = Y),
            (w[53] = y))
          : (y = w[53]),
        y
      )
    }
    function eZ(e) {
      ;(0, ez.E0)({ href: e.download_url, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    var eQ = n("Jaao")
    let eY = "inProgressSendId",
      eJ = "senderLinkId",
      eX = /<([^<>]+)>/
    function e1(e) {
      let t = [],
        n = new Set()
      for (let i of e7(e)) {
        let e = i.toLowerCase()
        !(0, eQ.SW)(i) || n.has(e) || (n.add(e), t.push(i))
      }
      return t
    }
    function e0(e) {
      return e7(e).some((e) => !(0, eQ.SW)(e))
    }
    function e2({ to: e, cc: t, bcc: n }) {
      return e.length > 0 || t.length > 0 || n.length > 0
    }
    function e3(e) {
      return "sending_in_progress" === e.kind || "polling_final" === e.kind
    }
    function e4(e) {
      return e?.isSent === !0
    }
    function e5(e) {
      return (function (e) {
        if (null == e || "object" != typeof e) return
        let { type: t, referenceMessageId: n, provider: i } = e
        if ("reply" !== t || "string" != typeof n || "string" != typeof i) return
        let o = n.trim(),
          a = i.trim()
        if (0 !== o.length && ("gmail" === a || "outlook" === a)) return { type: t, referenceMessageId: o, provider: a }
      })(e?.emailAction)
    }
    function e7(e) {
      let t = []
      for (let n of e.split(/[;,\n]+/)) {
        let e = n.trim()
        0 !== e.length && t.push(e.match(eX)?.[1]?.trim() ?? e)
      }
      return t
    }
    var e6 = n("rGp2"),
      e9 = n("TMO5"),
      e8 = n("L8Iv"),
      te = n("ENqi"),
      tt = n("yTs9")
    function tn(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        c,
        d,
        u,
        p,
        m,
        f,
        h,
        b,
        y,
        x,
        _,
        v,
        k,
        S,
        I,
        C,
        j,
        A,
        M,
        B,
        E = (0, o.c)(57),
        { disabled: T, onOpen: N } = e,
        P = void 0 !== T && T,
        O = (0, F.A)()
      E[0] !== O
        ? ((t = O.formatMessage({
            id: "chatgptConversations.writingBlock.email.open.tooltip",
            defaultMessage: "Open in email",
            description:
              "Tooltip for an action in a Codex Apps Quick Chat email writing block. The action opens the draft in the user's email provider with its fields prefilled.",
          })),
          (E[0] = O),
          (E[1] = t))
        : (t = E[1])
      let R = t
      E[2] !== O
        ? ((n = O.formatMessage({
            id: "chatgptConversations.writingBlock.email.open.dropdown.ariaLabel",
            defaultMessage: "Open email in app",
            description:
              "Accessible label for a dropdown in a Codex Apps Quick Chat email writing block. Users choose Gmail, Outlook, or their default email app; this label is not visible text.",
          })),
          (E[2] = O),
          (E[3] = n))
        : (n = E[3])
      let D = n
      return (
        E[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(w.I, { "aria-hidden": !1, asset: e9.f })), (E[4] = a))
          : (a = E[4]),
        E[5] !== P || E[6] !== D
          ? ((r = (0, i.jsx)(W.$, {
              "aria-label": D,
              color: "ghostActive",
              disabled: P,
              size: "imageToolbar",
              uniform: !0,
              children: a,
            })),
            (E[5] = P),
            (E[6] = D),
            (E[7] = r))
          : (r = E[7]),
        E[8] !== R || E[9] !== r
          ? ((s = (0, i.jsx)(L.m, { sideOffset: 0, content: R, children: r })), (E[8] = R), (E[9] = r), (E[10] = s))
          : (s = E[10]),
        E[11] !== O
          ? ((l = O.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.gmail.ariaLabel",
              defaultMessage: "Open email using Gmail",
              description:
                "Accessible label for the Gmail option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (E[11] = O),
            (E[12] = l))
          : (l = E[12]),
        E[13] !== N ? ((c = () => N("gmail")), (E[13] = N), (E[14] = c)) : (c = E[14]),
        E[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(V.ms.ItemIcon, { size: "md", children: (0, i.jsx)(e8.A, { className: "icon-sm" }) })),
            (d = (0, i.jsx)(g.A, {
              id: "chatgptConversations.writingBlock.email.open.option.gmail.label",
              defaultMessage: "Gmail",
              description:
                "Short provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (E[15] = d),
            (E[16] = u))
          : ((d = E[15]), (u = E[16])),
        E[17] !== l || E[18] !== c
          ? ((p = (0, i.jsxs)(V.ms.Item, { "aria-label": l, onSelect: c, children: [u, d] })),
            (E[17] = l),
            (E[18] = c),
            (E[19] = p))
          : (p = E[19]),
        E[20] !== O
          ? ((m = O.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.outlook.ariaLabel",
              defaultMessage: "Open email using Outlook",
              description:
                "Accessible label for the Outlook option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (E[20] = O),
            (E[21] = m))
          : (m = E[21]),
        E[22] !== N ? ((f = () => N("outlook")), (E[22] = N), (E[23] = f)) : (f = E[23]),
        E[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(V.ms.ItemIcon, { size: "md", children: (0, i.jsx)(tt.A, { className: "icon-sm" }) })),
            (b = (0, i.jsx)(g.A, {
              id: "chatgptConversations.writingBlock.email.open.option.outlook.label",
              defaultMessage: "Outlook",
              description:
                "Short provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (E[24] = h),
            (E[25] = b))
          : ((h = E[24]), (b = E[25])),
        E[26] !== m || E[27] !== f
          ? ((y = (0, i.jsxs)(V.ms.Item, { "aria-label": m, onSelect: f, children: [h, b] })),
            (E[26] = m),
            (E[27] = f),
            (E[28] = y))
          : (y = E[28]),
        E[29] !== O
          ? ((x = O.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.default.ariaLabel",
              defaultMessage: "Open email using default email app",
              description:
                "Accessible label for the default-app option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.",
            })),
            (E[29] = O),
            (E[30] = x))
          : (x = E[30]),
        E[31] !== N ? ((_ = () => N("default")), (E[31] = N), (E[32] = _)) : (_ = E[32]),
        E[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(V.ms.ItemIcon, { size: "md", children: (0, i.jsx)(te.A, { className: "icon-sm" }) })),
            (k = (0, i.jsx)(g.A, {
              id: "chatgptConversations.writingBlock.email.open.option.default.label",
              defaultMessage: "Default email app",
              description:
                "Provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block. It launches the operating system's configured mail app.",
            })),
            (E[33] = v),
            (E[34] = k))
          : ((v = E[33]), (k = E[34])),
        E[35] !== x || E[36] !== _
          ? ((S = (0, i.jsxs)(V.ms.Item, { "aria-label": x, onSelect: _, children: [v, k] })),
            (E[35] = x),
            (E[36] = _),
            (E[37] = S))
          : (S = E[37]),
        E[38] !== P || E[39] !== p || E[40] !== y || E[41] !== S || E[42] !== s
          ? ((I = (0, i.jsx)("div", {
              className: "hidden md:block",
              children: (0, i.jsxs)(V.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                disabled: P,
                triggerButton: s,
                children: [p, y, S],
              }),
            })),
            (E[38] = P),
            (E[39] = p),
            (E[40] = y),
            (E[41] = S),
            (E[42] = s),
            (E[43] = I))
          : (I = E[43]),
        E[44] !== N ? ((C = () => N("default")), (E[44] = N), (E[45] = C)) : (C = E[45]),
        E[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, i.jsx)(w.I, { "aria-hidden": !1, asset: e9.f })), (E[46] = j))
          : (j = E[46]),
        E[47] !== P || E[48] !== R || E[49] !== C
          ? ((A = (0, i.jsx)(W.$, {
              "aria-label": R,
              color: "ghostActive",
              disabled: P,
              onClick: C,
              size: "imageToolbar",
              uniform: !0,
              children: j,
            })),
            (E[47] = P),
            (E[48] = R),
            (E[49] = C),
            (E[50] = A))
          : (A = E[50]),
        E[51] !== R || E[52] !== A
          ? ((M = (0, i.jsx)("div", {
              className: "md:hidden",
              children: (0, i.jsx)(L.m, { sideOffset: 0, content: R, children: A }),
            })),
            (E[51] = R),
            (E[52] = A),
            (E[53] = M))
          : (M = E[53]),
        E[54] !== I || E[55] !== M
          ? ((B = (0, i.jsxs)(i.Fragment, { children: [I, M] })), (E[54] = I), (E[55] = M), (E[56] = B))
          : (B = E[56]),
        B
      )
    }
    let ti = { gmail: "https://www.googleapis.com/auth/gmail.modify", outlook: "mail.send" }
    function to(e) {
      return tr((0, u.o)({ shouldStripDirectives: !0 }).parse(e), e).trim()
    }
    function ta(e) {
      return e instanceof Error ? e.message : void 0
    }
    function tr(e, t) {
      let n = []
      return (
        e.forEach((e) => {
          n.push(
            (function e(t, n) {
              var i, o, a, r
              let s, l, c, d, u, p, m, g, f, h
              return "list" === t.type.name || "ordered_list" === t.type.name
                ? ((i = t),
                  (o = n),
                  (s = []),
                  (l = "number" == typeof i.attrs.startingNumber ? i.attrs.startingNumber : 1),
                  i.forEach((t, n, a) => {
                    let r = "ordered_list" === i.type.name ? `${l + a}. ` : "- ",
                      c = "task_list_item" === t.type.name ? `[${!0 === t.attrs.checked ? "x" : " "}] ` : "",
                      d = " ".repeat(r.length + c.length),
                      u = ""
                    ;(t.forEach((t, n, i) => {
                      let a = e(t, o).replaceAll(
                        "\n",
                        `
${d}`,
                      )
                      if (0 === i) {
                        u = a
                        return
                      }
                      let r = "list" === t.type.name || "ordered_list" === t.type.name ? "\n" : "\n\n"
                      u += `${r}${d}${a}`
                    }),
                      s.push(`${r}${c}${u}`))
                  }),
                  s.join("\n"))
                : t.isTextblock
                  ? ((a = t),
                    (r = n),
                    (p = ""),
                    (m = ""),
                    (g = !1),
                    (f = (e) => {
                      let t = d,
                        n = u
                      ;(null != t &&
                        null != n &&
                        (0 === t || /\s/.test(p[t - 1] ?? "")) &&
                        (null == e || /^\s/.test(e)) &&
                        (p = p.slice(0, t) + p.slice(t + 1, n) + p.slice(n + 1)),
                        (d = void 0),
                        (u = void 0))
                    }),
                    (h = () => {
                      if (null == c) return
                      let e = m === c || c === `mailto:${m}` || c === `http://${m}`
                      ;(e && p.endsWith("<") && (d = p.length - 1),
                        e ? (p += g ? `<${m}>` : m) : (p += `${m} (${c})`),
                        (c = void 0),
                        (m = ""),
                        (g = !1))
                    }),
                    a.descendants((e) => {
                      if ("hard_break" === e.type.name) {
                        ;(h(), f("\n"), (p += "\n"))
                        return
                      }
                      if (!e.isText) return
                      let t = e.text ?? ""
                      null != u && f(t)
                      let n = e.marks.find((e) => "link" === e.type.name)?.attrs.href,
                        i = "string" == typeof n ? n : void 0
                      if (i !== c) {
                        ;(h(), (c = i))
                        let t = e.marks.find((e) => "startend" === e.type.name)?.attrs,
                          n = "number" == typeof t?.start ? t.start : void 0,
                          o = "number" == typeof t?.end ? t.end : void 0
                        g =
                          null != n &&
                          null != o &&
                          "<" === r[n - 1] &&
                          ">" === r[o] &&
                          ((n > 1 && !/\s/.test(r[n - 2] ?? "")) || (o + 1 < r.length && !/\s/.test(r[o + 1] ?? "")))
                      }
                      null == c
                        ? null != d && t.startsWith(">")
                          ? ((u = p.length), (p += t), t.length > 1 && f(t.slice(1)))
                          : ((p += t), (d = void 0))
                        : (m += t)
                    }),
                    h(),
                    f(),
                    p)
                  : tr(t, n)
            })(e, t),
          )
        }),
        n.join("\n\n")
      )
    }
    var ts = n("ZaUy"),
      tl = n("SXl1")
    let tc = (0, m.forwardRef)(function (e, t) {
      let n,
        a,
        r,
        s,
        l,
        c,
        d,
        u,
        p,
        g,
        f,
        h,
        b,
        y,
        w = (0, o.c)(31)
      w[0] !== e
        ? (({ "aria-disabled": n, className: a, icon: r, label: s, onClick: l, status: d, type: u, ...c } = e),
          (w[0] = e),
          (w[1] = n),
          (w[2] = a),
          (w[3] = r),
          (w[4] = s),
          (w[5] = l),
          (w[6] = c),
          (w[7] = d),
          (w[8] = u))
        : ((n = w[1]), (a = w[2]), (r = w[3]), (s = w[4]), (l = w[5]), (c = w[6]), (d = w[7]), (u = w[8]))
      let x = void 0 === d ? "ready" : d,
        _ = void 0 === u ? "button" : u,
        v = "sent" === x,
        k = (0, m.useRef)(null)
      ;(w[9] !== v
        ? ((p = () => {
            let e = k.current
            v && null != e && e.ownerDocument.activeElement === e && e.blur()
          }),
          (g = [v]),
          (w[9] = v),
          (w[10] = p),
          (w[11] = g))
        : ((p = w[10]), (g = w[11])),
        (0, m.useEffect)(p, g))
      let S = !!v || n,
        I = v
          ? "ms-1 flex size-9 cursor-default items-center justify-center rounded-full"
          : "ms-1 flex h-9 items-center rounded-[24px] pe-3 text-sm font-medium hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      w[12] !== a || w[13] !== I ? ((f = (0, G.A)(I, a)), (w[12] = a), (w[13] = I), (w[14] = f)) : (f = w[14])
      let C = v ? td : l
      w[15] !== t
        ? ((h = (e) => {
            ;((k.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e))
          }),
          (w[15] = t),
          (w[16] = h))
        : (h = w[16])
      let j = v ? -1 : c.tabIndex
      return (
        w[17] !== r || w[18] !== v || w[19] !== s
          ? ((b = v
              ? r
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: "flex size-8 shrink-0 items-center justify-center ps-1",
                      children: r,
                    }),
                    (0, i.jsx)("span", { children: s }),
                  ],
                })),
            (w[17] = r),
            (w[18] = v),
            (w[19] = s),
            (w[20] = b))
          : (b = w[20]),
        w[21] !== c ||
        w[22] !== x ||
        w[23] !== j ||
        w[24] !== b ||
        w[25] !== S ||
        w[26] !== f ||
        w[27] !== C ||
        w[28] !== h ||
        w[29] !== _
          ? ((y = (0, i.jsx)("button", {
              ...c,
              "aria-disabled": S,
              className: f,
              "data-writing-block-email-send-status": x,
              onClick: C,
              ref: h,
              tabIndex: j,
              type: _,
              children: b,
            })),
            (w[21] = c),
            (w[22] = x),
            (w[23] = j),
            (w[24] = b),
            (w[25] = S),
            (w[26] = f),
            (w[27] = C),
            (w[28] = h),
            (w[29] = _),
            (w[30] = y))
          : (y = w[30]),
        y
      )
    })
    function td(e) {
      e.preventDefault()
    }
    function tu(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        c,
        d,
        u = (0, o.c)(57),
        {
          bcc: p,
          cc: m,
          emailSendState: f,
          isPersistedSent: h,
          isLoadingSenderAccounts: b,
          onConnect: y,
          onSend: x,
          onUndoSend: _,
          recipient: v,
          selectedSenderAccount: k,
        } = e,
        S = (0, F.A)(),
        I = h || "success_sent" === f.kind,
        C = e3(f),
        j = "sending_in_progress" === f.kind && f.undoAvailable
      if (I) {
        let e, t, n, o
        u[0] !== S
          ? ((e = S.formatMessage({
              id: "chatgptConversations.writingBlock.emailSent",
              defaultMessage: "Sent",
              description: "Label shown after a writing block email was sent in Codex Apps.",
            })),
            (u[0] = S),
            (u[1] = e))
          : (e = u[1])
        let a = e
        return (
          u[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(w.I, { "aria-hidden": !1, asset: ts.G })), (u[2] = t))
            : (t = u[2]),
          u[3] !== a
            ? ((n = (0, i.jsx)(tc, {
                "aria-label": a,
                className: "border border-transparent bg-text/5 text-default no-drag focus:outline-none",
                icon: t,
                status: "sent",
              })),
              (u[3] = a),
              (u[4] = n))
            : (n = u[4]),
          u[5] !== a || u[6] !== n
            ? ((o = (0, i.jsx)(L.m, { content: a, children: n })), (u[5] = a), (u[6] = n), (u[7] = o))
            : (o = u[7]),
          o
        )
      }
      if (C) {
        let e, t
        if (j) {
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
          let o = e
          return (
            u[10] !== f.sendId || u[11] !== _
              ? ((t = () => _(f.sendId)), (u[10] = f.sendId), (u[11] = _), (u[12] = t))
              : (t = u[12]),
            u[13] !== t || u[14] !== o
              ? ((n = (0, i.jsx)(W.$, { color: "secondary", onClick: t, size: "composer", children: o })),
                (u[13] = t),
                (u[14] = o),
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
            ? ((t = (0, i.jsx)(W.$, { color: "secondary", loading: !0, size: "composer", children: e })),
              (u[18] = e),
              (u[19] = t))
            : (t = u[19]),
          t
        )
      }
      if (b) {
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
            ? ((t = (0, i.jsx)(W.$, { "aria-label": n, color: "secondary", loading: !0, size: "toolbar" })),
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
          u[26] !== y || u[27] !== e
            ? ((t = (0, i.jsx)(W.$, { color: "secondary", onClick: y, size: "composer", children: e })),
              (u[26] = y),
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
          u[31] !== y || u[32] !== e
            ? ((t = (0, i.jsx)(W.$, { color: "secondary", onClick: y, size: "composer", children: e })),
              (u[31] = y),
              (u[32] = e),
              (u[33] = t))
            : (t = u[33]),
          t
        )
      }
      u[34] !== p || u[35] !== m || u[36] !== v
        ? ((t = e2({ to: e1(v), cc: e1(m), bcc: e1(p) })), (u[34] = p), (u[35] = m), (u[36] = v), (u[37] = t))
        : (t = u[37])
      let A = t
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
      let M = n
      u[41] !== S
        ? ((a = S.formatMessage({
            id: "chatgptConversations.writingBlock.emailSend",
            defaultMessage: "Send",
            description: "Button label for sending an email from a writing block in Codex Apps.",
          })),
          (u[41] = S),
          (u[42] = a))
        : (a = u[42])
      let B = a
      u[43] !== A || u[44] !== M
        ? ((r = A
            ? M
            : (0, i.jsx)(g.A, {
                id: "chatgptConversations.writingBlock.emailSendMissingRecipients",
                defaultMessage: "Add at least one valid email recipient before sending.",
                description:
                  "Tooltip on the disabled Send button in a Codex Apps email writing block when the To, Cc, and Bcc fields contain no valid email address. Tells the email author how to enable sending and matches ChatGPT's missing-recipient toast.",
              })),
          (u[43] = A),
          (u[44] = M),
          (u[45] = r))
        : (r = u[45])
      let E = !A
      return (
        u[46] !== x ? ((s = () => x(crypto.randomUUID())), (u[46] = x), (u[47] = s)) : (s = u[47]),
        u[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(w.I, { "aria-hidden": !1, asset: tl.S })), (u[48] = l))
          : (l = u[48]),
        u[49] !== M || u[50] !== E || u[51] !== s || u[52] !== B
          ? ((c = (0, i.jsxs)(W.$, {
              "aria-label": M,
              color: "accentAction",
              disabled: E,
              onClick: s,
              size: "toolbar",
              children: [l, B],
            })),
            (u[49] = M),
            (u[50] = E),
            (u[51] = s),
            (u[52] = B),
            (u[53] = c))
          : (c = u[53]),
        u[54] !== r || u[55] !== c
          ? ((d = (0, i.jsx)(L.m, { content: r, children: c })), (u[54] = r), (u[55] = c), (u[56] = d))
          : (d = u[56]),
        d
      )
    }
    var tp = n("ayBF")
    function tm(e) {
      let t,
        n,
        a,
        r,
        s = (0, o.c)(17),
        {
          accounts: l,
          chevronIcon: c,
          displayMode: d,
          isDisabled: u,
          isSelectable: p,
          onChange: m,
          onOpenChange: g,
          renderMenu: f,
          selectedAccount: h,
          selectorAriaLabel: b,
          senderLabel: y,
        } = e,
        w = "tokenized" === d && p
      s[0] !== l ||
      s[1] !== c ||
      s[2] !== u ||
      s[3] !== m ||
      s[4] !== g ||
      s[5] !== f ||
      s[6] !== h ||
      s[7] !== b ||
      s[8] !== w
        ? ((t = w
            ? f({
                accounts: l,
                isDisabled: u,
                onChange: m,
                onOpenChange: g,
                selectedAccount: h,
                trigger: (0, i.jsxs)("button", {
                  "aria-label": b,
                  className:
                    "inline-flex min-w-0 items-baseline gap-1 bg-transparent px-0 py-0 text-start leading-8 disabled:cursor-default",
                  disabled: u,
                  type: "button",
                  children: [
                    (0, i.jsx)("span", {
                      className: "truncate text-base leading-8 [color:var(--oai-wb-text-primary)]",
                      children: h.label,
                    }),
                    c,
                  ],
                }),
              })
            : (0, i.jsx)("div", {
                className: "leading-8 break-words [color:var(--oai-wb-text-primary)]",
                children: h.label,
              })),
          (s[0] = l),
          (s[1] = c),
          (s[2] = u),
          (s[3] = m),
          (s[4] = g),
          (s[5] = f),
          (s[6] = h),
          (s[7] = b),
          (s[8] = w),
          (s[9] = t))
        : (t = s[9])
      let x = t
      return (
        s[10] !== y
          ? ((n = (0, i.jsx)("div", { className: "font-medium", children: y })), (s[10] = y), (s[11] = n))
          : (n = s[11]),
        s[12] !== x
          ? ((a = (0, i.jsx)("div", { className: "min-w-0 flex-1", children: x })), (s[12] = x), (s[13] = a))
          : (a = s[13]),
        s[14] !== n || s[15] !== a
          ? ((r = (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [n, a] })),
            (s[14] = n),
            (s[15] = a),
            (s[16] = r))
          : (r = s[16]),
        r
      )
    }
    function tg(e) {
      let t,
        n,
        a,
        r,
        s = (0, o.c)(13),
        { accounts: l, displayMode: c, isDisabled: d, onChange: u, onOpenChange: p, selectedAccount: m } = e,
        f = (0, F.A)()
      s[0] !== f
        ? ((t = f.formatMessage({
            id: "chatgptConversations.writingBlock.email.sender.selector.ariaLabel",
            defaultMessage: "Select the email account to send from",
            description:
              "Accessible label for the sender-account selector in an email writing block shown in Codex Apps Quick Chat. Users choose which connected Gmail or Outlook account sends the message; this label is not visible text.",
          })),
          (s[0] = f),
          (s[1] = t))
        : (t = s[1])
      let h = t
      s[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, i.jsx)(g.A, {
            id: "chatgptConversations.writingBlock.email.sender.field.label",
            defaultMessage: "From",
            description:
              "Short field label identifying the sender account in an email writing block shown in Codex Apps Quick Chat. It appears to the left of the account without punctuation.",
          })),
          (s[2] = n))
        : (n = s[2])
      let b = n
      s[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(w.I, { className: "shrink-0 self-center text-default", "aria-hidden": !1, asset: tp.c })),
          (s[3] = a))
        : (a = s[3])
      let y = l.length > 1
      return (
        s[4] !== l || s[5] !== c || s[6] !== d || s[7] !== u || s[8] !== p || s[9] !== m || s[10] !== h || s[11] !== y
          ? ((r = (0, i.jsx)(tm, {
              accounts: l,
              chevronIcon: a,
              displayMode: c,
              isDisabled: d,
              isSelectable: y,
              onChange: u,
              onOpenChange: p,
              renderMenu: tf,
              selectedAccount: m,
              selectorAriaLabel: h,
              senderLabel: b,
            })),
            (s[4] = l),
            (s[5] = c),
            (s[6] = d),
            (s[7] = u),
            (s[8] = p),
            (s[9] = m),
            (s[10] = h),
            (s[11] = y),
            (s[12] = r))
          : (r = s[12]),
        r
      )
    }
    function tf(e) {
      let { accounts: t, isDisabled: n, onChange: o, onOpenChange: a, selectedAccount: r, trigger: s } = e
      return (0, i.jsx)(V.Ab, {
        align: "start",
        contentWidth: "menuBounded",
        disabled: n,
        onOpenChange: a,
        triggerButton: s,
        children: t.map((e) =>
          (0, i.jsxs)(
            V.ms.Item,
            {
              onSelect: () => o(e.id),
              rightIcon: e.id === r.id ? (0, i.jsx)(w.I, { "aria-hidden": !1, asset: ts.G }) : null,
              children: [
                (0, i.jsx)(V.ms.ItemIcon, {
                  size: "md",
                  children:
                    "gmail" === e.provider
                      ? (0, i.jsx)(e8.A, { className: "icon-sm" })
                      : (0, i.jsx)(tt.A, { className: "icon-sm" }),
                }),
                e.label,
              ],
            },
            e.id,
          ),
        ),
      })
    }
    let th = { pollIntervalMs: 1500, pollMaxAttempts: 5 }
    var tb = n("rvFo"),
      ty = n("GEsy")
    let tw = [],
      tx = "connector_2128aebfecb84f64a069897515042a44",
      t_ = "connector_4aaab2856305417b993eca9a216aaf6e"
    async function tv(e) {
      return (
        await h.Request.safeGet("/aip/connectors/{connector_id}", {
          surface: "writing_blocks",
          additionalHeaders: { "OAI-Product-Sku": "CODEX" },
          parameters: { path: { connector_id: e }, query: { include_actions: !0 } },
        })
      ).actions.some((e) => "send_email" === e.name.trim().toLowerCase() && !1 !== e.is_enabled)
    }
    var tk = n("plV3"),
      tS = n("zLIa"),
      tI = n("OMIV")
    let tC = (0, et.m3)("1594900112-hidden-until", null)
    function tj(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        c,
        d,
        u,
        f,
        b,
        y,
        x,
        _,
        v,
        k,
        S,
        C,
        j,
        A,
        M = (0, o.c)(42),
        {
          initialFeedbackText: B,
          initialOpen: L,
          messageId: E,
          serverConversationId: T,
          userEditedWritingBlock: N,
          writingBlockId: P,
        } = e,
        O = (0, p.gh)(I.u),
        R = (0, F.A)(),
        D = (0, p._U)(tI.JW, "1594900112"),
        G = (0, p.Ul)(tC),
        [q] = (0, m.useState)(tM),
        [U, z] = (0, m.useState)(void 0 === B ? "" : B),
        [H, K] = (0, m.useState)(void 0 !== L && L),
        $ = (0, m.useRef)(null)
      if (
        (M[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => {
              null != $.current && clearTimeout($.current)
            }),
            (n = []),
            (M[0] = t),
            (M[1] = n))
          : ((t = M[0]), (n = M[1])),
        (0, m.useEffect)(t, n),
        !D || (null != G && G > q))
      )
        return null
      ;(M[2] !== R
        ? ((a = R.formatMessage({
            id: "codex.writingBlock.feedback.trigger",
            defaultMessage: "What is this?",
            description:
              "Accessible name for the feedback button below a ChatGPT writing block in Codex Apps. Activating it opens a short explanation and a form to share feedback about writing blocks.",
          })),
          (M[2] = R),
          (M[3] = a))
        : (a = M[3]),
        M[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = () => {
              $.current = setTimeout(() => K(!0), 500)
            }),
            (s = () => {
              null != $.current && (clearTimeout($.current), ($.current = null))
            }),
            (l = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.feedback.visibleTrigger",
              defaultMessage: "What is this?",
              description:
                "Visible label for the feedback button shown below a ChatGPT writing block in Codex Apps. The button opens a short feature explanation and feedback form.",
            })),
            (c = (0, i.jsx)(w.I, { asset: tk.c })),
            (M[4] = r),
            (M[5] = s),
            (M[6] = l),
            (M[7] = c))
          : ((r = M[4]), (s = M[5]), (l = M[6]), (c = M[7])),
        M[8] !== a
          ? ((d = (0, i.jsxs)(W.$, {
              "aria-label": a,
              color: "ghost",
              size: "compact",
              onMouseEnter: r,
              onMouseLeave: s,
              children: [l, c],
            })),
            (M[8] = a),
            (M[9] = d))
          : (d = M[9]),
        M[10] !== U || M[11] !== R || M[12] !== E || M[13] !== O || M[14] !== T || M[15] !== N || M[16] !== P
          ? ((u = (e) => {
              e.preventDefault()
              let t = U.trim()
              t &&
                (h.Request.safePost("/conversation/message/writing-blocks/feedback", {
                  requestBody: {
                    conversation_id: T,
                    feedback: t,
                    message_id: E,
                    user_edited_writing_block: N,
                    writing_block_id: P,
                  },
                }).catch(tA),
                O.get(eS.Id).success(
                  R.formatMessage({
                    id: "codex.writingBlock.feedback.submitted",
                    defaultMessage: "Your feedback has been submitted",
                    description:
                      "Short confirmation toast shown after a Codex Apps user submits feedback about a ChatGPT writing block.",
                  }),
                ),
                O.set(tC, Date.now() + 6048e5),
                z(""),
                K(!1))
            }),
            (M[10] = U),
            (M[11] = R),
            (M[12] = E),
            (M[13] = O),
            (M[14] = T),
            (M[15] = N),
            (M[16] = P),
            (M[17] = u))
          : (u = M[17]),
        M[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)("div", {
              className: "text-sm font-semibold text-default",
              children: (0, i.jsx)(g.A, {
                id: "codex.writingBlock.feedback.title",
                defaultMessage: "This is a writing block, a new feature we’re testing",
                description:
                  "Heading above the feedback form opened from a ChatGPT writing block in Codex Apps. It explains that writing blocks are a new feature and encourages the user to share feedback.",
              }),
            })),
            (M[18] = f))
          : (f = M[18]),
        M[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)("div", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(g.A, {
                id: "codex.writingBlock.feedback.description",
                defaultMessage: "Tell us what’s working and what’s not. The more specific the feedback, the better",
                description:
                  "Helper text above the writing-block feedback input in Codex Apps. It asks the user to describe what works and what does not, and encourages concrete feedback.",
              }),
            })),
            (M[19] = b))
          : (b = M[19]),
        M[20] !== R
          ? ((y = R.formatMessage({
              id: "codex.writingBlock.feedback.inputLabel",
              defaultMessage: "Additional feedback",
              description:
                "Accessible name for the writing-block feedback text area in Codex Apps. Users enter what they liked or disliked about the writing-block editor.",
            })),
            (M[20] = R),
            (M[21] = y))
          : (y = M[21]),
        M[22] !== R
          ? ((x = R.formatMessage({
              id: "codex.writingBlock.feedback.placeholder",
              defaultMessage: "What did you like or dislike?",
              description:
                "Placeholder in the writing-block feedback text area in Codex Apps. It asks the user to explain what they liked or disliked about the editor.",
            })),
            (M[22] = R),
            (M[23] = x))
          : (x = M[23]),
        M[24] === Symbol.for("react.memo_cache_sentinel") ? ((_ = (e) => z(e.target.value)), (M[24] = _)) : (_ = M[24]),
        M[25] !== U || M[26] !== y || M[27] !== x
          ? ((v = (0, i.jsx)(tS.TM, {
              "aria-label": y,
              autoFocus: !0,
              name: "writing-block-feedback",
              placeholder: x,
              rows: 3,
              value: U,
              onChange: _,
            })),
            (M[25] = U),
            (M[26] = y),
            (M[27] = x),
            (M[28] = v))
          : (v = M[28]),
        M[29] !== U ? ((k = U.trim()), (M[29] = U), (M[30] = k)) : (k = M[30]))
      let Z = 0 === k.length
      return (
        M[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.feedback.submit",
              defaultMessage: "Share feedback",
              description:
                "Label for the submit button in the writing-block feedback form in Codex Apps. It sends the user’s written feedback about the writing-block editor.",
            })),
            (M[31] = S))
          : (S = M[31]),
        M[32] !== Z
          ? ((C = (0, i.jsx)(W.$, { disabled: Z, size: "compact", type: "submit", children: S })),
            (M[32] = Z),
            (M[33] = C))
          : (C = M[33]),
        M[34] !== u || M[35] !== v || M[36] !== C
          ? ((j = (0, i.jsxs)("form", { className: "flex flex-col gap-3 p-2", onSubmit: u, children: [f, b, v, C] })),
            (M[34] = u),
            (M[35] = v),
            (M[36] = C),
            (M[37] = j))
          : (j = M[37]),
        M[38] !== H || M[39] !== d || M[40] !== j
          ? ((A = (0, i.jsx)("div", {
              className: "flex justify-end px-3",
              children: (0, i.jsx)(V.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                onOpenChange: K,
                open: H,
                side: "top",
                triggerButton: d,
                children: j,
              }),
            })),
            (M[38] = H),
            (M[39] = d),
            (M[40] = j),
            (M[41] = A))
          : (A = M[41]),
        A
      )
    }
    function tA() {}
    function tM() {
      return Date.now()
    }
    var tB = n("D1oM")
    function tL(e) {
      let t,
        n,
        a,
        r,
        s,
        l,
        u,
        p,
        g,
        f,
        h,
        b,
        y,
        w,
        x,
        _,
        v = (0, o.c)(43),
        { ineligibilityReason: k, isDisabled: S, metadata: I, onFollowupClick: C, onSelect: j } = e,
        [A, M] = (0, m.useState)(!1),
        [B, L] = (0, m.useState)(!1),
        E = (0, Y.I)()
      if (v[0] !== B || v[1] !== k || v[2] !== S || v[3] !== A || v[4] !== I || v[5] !== E) {
        b = Symbol.for("react.early_return_sentinel")
        e: {
          if (((r = (0, c.o)(I)), (a = S || A), null != k || B || 0 === r.length || (0, d._F)(I))) {
            b = null
            break e
          }
          ;((n = $.P.div),
            (p = "relative mb-4 min-w-0 overflow-visible px-3 sm:-mt-6 sm:overflow-hidden"),
            v[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = { height: "auto", opacity: 1, y: 0 }), (v[18] = g))
              : (g = v[18]),
            v[19] !== E ? ((f = !E && { height: 0, opacity: 0, y: -8 }), (v[19] = E), (v[20] = f)) : (f = v[20]))
          let e = 0.2 * !E
          ;(v[21] !== e ? ((h = { duration: e, ease: "easeOut" }), (v[21] = e), (v[22] = h)) : (h = v[22]),
            (u =
              "relative min-w-0 px-3 text-base leading-relaxed text-default sm:rounded-b-3xl sm:bg-secondary-soft-alpha sm:pt-4.5 sm:pb-2.5"),
            (t = tB.U),
            (s = "responsive"),
            (l = r.map(tE)))
        }
        ;((v[0] = B),
          (v[1] = k),
          (v[2] = S),
          (v[3] = A),
          (v[4] = I),
          (v[5] = E),
          (v[6] = t),
          (v[7] = n),
          (v[8] = a),
          (v[9] = r),
          (v[10] = s),
          (v[11] = l),
          (v[12] = u),
          (v[13] = p),
          (v[14] = g),
          (v[15] = f),
          (v[16] = h),
          (v[17] = b))
      } else
        ((t = v[6]),
          (n = v[7]),
          (a = v[8]),
          (r = v[9]),
          (s = v[10]),
          (l = v[11]),
          (u = v[12]),
          (p = v[13]),
          (g = v[14]),
          (f = v[15]),
          (h = v[16]),
          (b = v[17]))
      return b !== Symbol.for("react.early_return_sentinel")
        ? b
        : (v[23] !== C || v[24] !== j || v[25] !== r
            ? ((y = (e) => {
                ;(C?.(e + 1, r.length),
                  M(!0),
                  j(r[e].prompt).then((e) => {
                    ;(M(!1), e && L(!0))
                  }))
              }),
              (v[23] = C),
              (v[24] = j),
              (v[25] = r),
              (v[26] = y))
            : (y = v[26]),
          v[27] !== t || v[28] !== a || v[29] !== s || v[30] !== l || v[31] !== y
            ? ((w = (0, i.jsx)(t, { layout: s, suggestions: l, disabled: a, onSelect: y })),
              (v[27] = t),
              (v[28] = a),
              (v[29] = s),
              (v[30] = l),
              (v[31] = y),
              (v[32] = w))
            : (w = v[32]),
          v[33] !== w || v[34] !== u
            ? ((x = (0, i.jsx)("div", { className: u, children: w })), (v[33] = w), (v[34] = u), (v[35] = x))
            : (x = v[35]),
          v[36] !== n || v[37] !== x || v[38] !== p || v[39] !== g || v[40] !== f || v[41] !== h
            ? ((_ = (0, i.jsx)(n, { className: p, animate: g, initial: f, transition: h, children: x })),
              (v[36] = n),
              (v[37] = x),
              (v[38] = p),
              (v[39] = g),
              (v[40] = f),
              (v[41] = h),
              (v[42] = _))
            : (_ = v[42]),
          _)
    }
    function tE(e) {
      let { sourceIndex: t, title: n } = e
      return { key: t, label: n }
    }
    var tT = n("vQRL")
    function tN(e) {
      let t,
        n,
        x,
        L,
        E,
        T,
        N,
        P,
        O,
        G,
        q,
        U,
        W,
        V,
        z,
        H,
        K,
        $,
        Z,
        Q = (0, o.c)(277),
        {
          conversationId: Y,
          context: J,
          editorKey: X,
          emailMetadata: ee,
          serverConversationId: et,
          enableAiTools: en,
          isExpanded: ei,
          isReadOnly: eo,
          librarySaveControls: ea,
          isStreaming: er,
          messageId: es,
          copyTurnToClipboardMessageId: el,
          onBeforeDocumentExport: ec,
          onAskForChanges: ed,
          onEmailMetadataChange: eu,
          onOpenVersionHistory: ep,
          onSuggestedFollowup: em,
          renderFrame: eg,
          showMagicEditAction: ef,
          suppressCopyTurnToClipboardAnalytics: eh,
          suggestedFollowupIneligibilityReason: ey,
          title: ew,
          userEditedWritingBlock: ex,
          variant: e_,
          writingBlockId: ev,
          writingBlockIndex: ek,
        } = e,
        eI = void 0 !== ei && ei,
        eC = void 0 === el ? es : el,
        ej = void 0 !== ef && ef,
        eA = void 0 !== ex && ex,
        eM = (0, p.gh)(I.u),
        eB = (0, m.useContext)(f.G),
        eL = (0, m.useRef)(null),
        eT = et ?? Y
      ;(Q[0] !== eT || Q[1] !== er || Q[2] !== eB || Q[3] !== eM || Q[4] !== e_ || Q[5] !== ev
        ? ((t = () => {
            let e = eL.current
            if ("slides" === e_ && eB && !er && null != e && null != eT && null != ev) {
              var t, n
              let i, o, a, r, l, c
              return (
                (t = e),
                (n = () => {
                  ;(0, S.yy)(eM, s.kD, { conversationId: eT, writingBlockId: ev })
                }),
                (i = t.ownerDocument),
                (o = !1),
                (a = !1),
                (r = () => {
                  ;((a = !0), c.disconnect(), i.removeEventListener("visibilitychange", l))
                }),
                (l = () => {
                  !a && o && "visible" === i.visibilityState && t.isConnected && (r(), n())
                }),
                (c = new IntersectionObserver((e) => {
                  ;((o = e.some((e) => e.isIntersecting)), l())
                })).observe(t),
                i.addEventListener("visibilitychange", l),
                r
              )
            }
          }),
          (n = [eT, er, eB, eM, e_, ev]),
          (Q[0] = eT),
          (Q[1] = er),
          (Q[2] = eB),
          (Q[3] = eM),
          (Q[4] = e_),
          (Q[5] = ev),
          (Q[6] = t),
          (Q[7] = n))
        : ((t = Q[6]), (n = Q[7])),
        (0, m.useEffect)(t, n))
      let eP = (0, _.Tq)(),
        eO = (0, C.Ou)("3737772469")
      Q[8] === Symbol.for("react.memo_cache_sentinel") ? ((x = { disableExposureLog: !0 }), (Q[8] = x)) : (x = Q[8])
      let eR = (0, C.Ou)("3408900824", x),
        eD = (0, p.Ul)(k.x2),
        eG = (0, C.Zj)("3220935388") || eO.get("inline_header_library_enabled", !1),
        eF = (0, p.Ul)(v.$7),
        eU = (0, m.useRef)(!1),
        eW = (0, m.useRef)(void 0)
      ;(Q[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = () => () => eW.current?.()), (L = []), (Q[9] = L), (Q[10] = E))
        : ((L = Q[9]), (E = Q[10])),
        (0, m.useEffect)(E, L))
      let [eV, eH] = (0, m.useState)(!1),
        [eK, eZ] = (0, m.useState)(!1),
        { renderView: eX, state: e7 } = J,
        e9 = null != X && !er && !(void 0 !== eo && eo)
      ;(Q[11] !== es || Q[12] !== eM || Q[13] !== et
        ? ((T = (e) => {
            null != et && null != es && (0, S.yy)(eM, r.Aws, { conversationId: et, messageId: es, provider: e })
          }),
          (Q[11] = es),
          (Q[12] = eM),
          (Q[13] = et),
          (Q[14] = T))
        : (T = Q[14]),
        Q[15] !== ee ||
        Q[16] !== e9 ||
        Q[17] !== eu ||
        Q[18] !== e7.displayedContent ||
        Q[19] !== T ||
        Q[20] !== e_ ||
        Q[21] !== ev
          ? ((N = {
              bodyMarkdown: e7.displayedContent,
              emailMetadata: ee,
              isPersistedAndComplete: e9,
              onEmailMetadataChange: eu,
              onOpenEmail: T,
              variant: e_,
              writingBlockId: ev,
            }),
            (Q[15] = ee),
            (Q[16] = e9),
            (Q[17] = eu),
            (Q[18] = e7.displayedContent),
            (Q[19] = T),
            (Q[20] = e_),
            (Q[21] = ev),
            (Q[22] = N))
          : (N = Q[22]))
      let e8 = (function (e) {
          let t,
            n,
            a,
            r,
            s,
            l,
            c,
            d,
            u,
            g,
            f = (0, o.c)(60),
            {
              bodyMarkdown: b,
              emailMetadata: y,
              isPersistedAndComplete: w,
              onEmailMetadataChange: x,
              onOpenEmail: _,
              variant: v,
              writingBlockId: k,
            } = e,
            S = "email" === v,
            C = y?.bcc ?? "",
            A = y?.cc ?? "",
            M = S && w,
            B = y?.writingBlockMetadata,
            L = y?.recipient ?? "",
            E = y?.subject ?? "",
            T = S ? k : void 0
          f[0] !== b ||
          f[1] !== x ||
          f[2] !== C ||
          f[3] !== A ||
          f[4] !== M ||
          f[5] !== B ||
          f[6] !== L ||
          f[7] !== E ||
          f[8] !== T
            ? ((t = {
                bcc: C,
                bodyMarkdown: b,
                cc: A,
                enabled: M,
                metadata: B,
                onMetadataChange: x,
                recipient: L,
                subject: E,
                writingBlockId: T,
              }),
              (f[0] = b),
              (f[1] = x),
              (f[2] = C),
              (f[3] = A),
              (f[4] = M),
              (f[5] = B),
              (f[6] = L),
              (f[7] = E),
              (f[8] = T),
              (f[9] = t))
            : (t = f[9])
          let {
              emailAccounts: N,
              emailSendState: P,
              getContactsForQuery: O,
              isLoadingSenderAccounts: G,
              searchContacts: q,
              selectedSenderAccount: U,
              selectSenderAccount: W,
              sendEmail: V,
              undoEmailSend: z,
            } = (function ({
              bcc: e,
              bodyMarkdown: t,
              cc: n,
              enabled: i,
              metadata: a,
              onMetadataChange: r,
              recipient: s,
              subject: l,
              writingBlockId: c,
            }) {
              let d,
                u,
                g = (0, F.A)(),
                f = (0, p.gh)(I.u),
                { data: b, isLoading: y } = (0, D.I)({
                  queryKey: ["chatgpt", "writing-block-email-accounts"],
                  queryFn: async () => {
                    let [e, t, n] = await Promise.all([
                        h.Request.safePost("/aip/connectors/links/list_accessible", {
                          surface: "writing_blocks",
                          requestBody: { principals: [], link_refresh_strategy: "BLOCKING" },
                        }),
                        tv(tx).catch(() => !1),
                        tv(t_).catch(() => !1),
                      ]),
                      i = t
                        ? e.links.filter((e) => e.connector_id === tx).map((e) => ({ link: e, provider: "gmail" }))
                        : [],
                      o = n
                        ? e.links.filter((e) => e.connector_id === t_).map((e) => ({ link: e, provider: "outlook" }))
                        : []
                    return {
                      contactsLinks: e.links.filter(
                        (e) => "connector_c0f748249d6a42aea4b00fd375570ded" === e.connector_id,
                      ),
                      emailAccounts: [...i, ...o]
                        .flatMap(({ link: e, provider: t }) =>
                          null != e && e.scopes.some((e) => e.trim().toLowerCase() === ti[t])
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
                            o = i || e.ownerName?.trim() || e.name.trim() || void 0
                          return null == o
                            ? []
                            : [{ id: e.id, label: o, needsReconnect: t, ownerEmail: i, provider: n }]
                        }),
                    }
                  },
                  enabled: i,
                  retry: !1,
                  staleTime: tb.D.FIVE_MINUTES,
                }),
                w = b?.emailAccounts,
                x = "string" == typeof (d = a?.[eY]) && d.length > 0 ? d : null,
                _ = e4(a),
                v = "string" == typeof (u = a?.[eJ]) ? u : void 0,
                k = e5(a),
                S = w?.find((e) => e.id === v) ?? w?.find((e) => e.provider === k?.provider) ?? w?.[0],
                C = (0, j.K)((e) => {
                  r?.(e)
                }),
                A = (0, j.K)((e) => {
                  C({ [eJ]: e })
                }),
                { getContactsForQuery: M, searchContacts: B } = (function (e) {
                  let t,
                    n,
                    i,
                    a,
                    r,
                    s,
                    l,
                    c = (0, o.c)(23),
                    { contactsLinkId: d, enabled: u } = e,
                    [p, g] = (0, m.useState)("")
                  c[0] !== p ? ((t = p.trim()), (c[0] = p), (c[1] = t)) : (t = c[1])
                  let f = t,
                    b = (0, ty.o)(f, 200)
                  c[2] !== d || c[3] !== b || c[4] !== u
                    ? ((n = u && null != d && b.length > 0 && !(0, eQ.SW)(b)),
                      (c[2] = d),
                      (c[3] = b),
                      (c[4] = u),
                      (c[5] = n))
                    : (n = c[5])
                  let y = n
                  ;(c[6] !== d || c[7] !== b
                    ? ((i =
                        null == d
                          ? R.hT
                          : () =>
                              (async function (e, t) {
                                let n = await h.Request.safePost("/aip/connectors/google_contacts/search_contacts", {
                                  surface: "writing_blocks",
                                  requestBody: { limit: 10, link_id: e, query: t },
                                })
                                return (0, eQ.jy)(n.contacts)
                              })(d, b)),
                      (c[6] = d),
                      (c[7] = b),
                      (c[8] = i))
                    : (i = c[8]),
                    c[9] !== d || c[10] !== b
                      ? ((a = ["chatgpt", "writing-block-email-contacts", d, b]), (c[9] = d), (c[10] = b), (c[11] = a))
                      : (a = c[11]),
                    c[12] !== y || c[13] !== i || c[14] !== a
                      ? ((r = { enabled: y, queryFn: i, queryKey: a, retry: !1, staleTime: tb.D.FIVE_MINUTES }),
                        (c[12] = y),
                        (c[13] = i),
                        (c[14] = a),
                        (c[15] = r))
                      : (r = c[15]))
                  let { data: w } = (0, D.I)(r)
                  c[16] === Symbol.for("react.memo_cache_sentinel")
                    ? ((s = (e) => {
                        g(e)
                      }),
                      (c[16] = s))
                    : (s = c[16])
                  let x = s
                  return (
                    c[17] !== w || c[18] !== d || c[19] !== b || c[20] !== u || c[21] !== f
                      ? ((l = {
                          getContactsForQuery: (e) => {
                            let t = e.trim()
                            return u && null != d && t.length > 0 && t === f && b === f && !(0, eQ.SW)(t)
                              ? (w ?? tw)
                              : tw
                          },
                          searchContacts: x,
                        }),
                        (c[17] = w),
                        (c[18] = d),
                        (c[19] = b),
                        (c[20] = u),
                        (c[21] = f),
                        (c[22] = l))
                      : (l = c[22]),
                    l
                  )
                })({
                  contactsLinkId: (0, eQ.m1)(
                    (b?.contactsLinks ?? []).map((e) => ({ id: e.id, ownerEmail: e.owner_profile?.email })),
                    S,
                  ),
                  enabled: i,
                }),
                L = (0, j.K)((e) => {
                  f.get(eS.Id).danger(
                    "undo_failed" === e.kind
                      ? g.formatMessage({
                          id: "chatgptConversations.writingBlock.emailUndoFailed",
                          defaultMessage: "Couldn't undo sending this email",
                          description: "Error toast shown when undoing a writing block email send fails in Codex Apps.",
                        })
                      : g.formatMessage({
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
                  sendEmail: E,
                  state: T,
                  undoEmailSend: N,
                } = (function (e) {
                  let t = (0, m.useRef)(e)
                  t.current = e
                  let [n, i] = (0, m.useState)({ kind: "idle" }),
                    o = (0, m.useRef)(n)
                  ;(0, m.useEffect)(() => {
                    o.current = n
                  }, [n])
                  let a = (0, m.useCallback)((e, n = {}) => {
                      t.current.onEvent?.({ name: e, metadata: n })
                    }, []),
                    r = (0, m.useCallback)((e) => {
                      t.current.onFailure?.(e)
                    }, []),
                    s = (0, m.useCallback)((e, n) => {
                      t.current.onSendIdChange?.(e, n)
                    }, [])
                  ;(0, m.useEffect)(() => {
                    e.isAvailable &&
                      !e.emailVersionSent &&
                      null != e.initialSendId &&
                      i((t) =>
                        "idle" === t.kind
                          ? { kind: "polling_final", sendId: e.initialSendId, pollSource: "initial_send_id" }
                          : t,
                      )
                  }, [e.emailVersionSent, e.initialSendId, e.isAvailable])
                  let l = (0, m.useCallback)((e) => {
                      let n = t.current,
                        a = n.selectedSenderAccount
                      !n.isAvailable ||
                        null == a ||
                        n.emailVersionSent ||
                        e3(o.current) ||
                        i((t) =>
                          e3(t)
                            ? t
                            : {
                                kind: "sending_in_progress",
                                clientSendId: e,
                                sendId: e,
                                undoRequested: !1,
                                undoAvailable: !1,
                                undoRequestInFlight: !1,
                                unsendExpiresAtMs: null,
                                selectedSenderAccount: a,
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
                    c = (0, m.useCallback)(
                      (e) => {
                        let n = t.current
                        if (!n.isAvailable) return
                        let s = o.current,
                          l = (n.now ?? Date.now)()
                        if (
                          (a("undo_clicked", {
                            send_id: e,
                            client_now_ms: String(l),
                            document_visibility_state: n.getVisibilityState?.() ?? "unknown",
                            undo_available: "sending_in_progress" === s.kind ? String(s.undoAvailable) : "false",
                            unsend_expires_at_ms:
                              "sending_in_progress" === s.kind && null != s.unsendExpiresAtMs
                                ? String(Math.round(s.unsendExpiresAtMs))
                                : "unknown",
                            undo_remaining_ms:
                              "sending_in_progress" === s.kind && null != s.unsendExpiresAtMs
                                ? String(Math.round(s.unsendExpiresAtMs - l))
                                : "unknown",
                          }),
                          "polling_final" === s.kind)
                        ) {
                          ;(a("undo_failed", { send_id: e, reason_code: "undo_not_allowed_in_polling_final" }),
                            r({ kind: "undo_failed" }))
                          return
                        }
                        if ("sending_in_progress" !== s.kind) {
                          ;(a("undo_failed", { send_id: e, reason_code: "undo_not_in_progress_state" }),
                            r({ kind: "undo_failed" }))
                          return
                        }
                        if (s.sendId !== e) {
                          ;(a("undo_failed", { send_id: s.sendId, reason_code: "undo_send_id_mismatch" }),
                            r({ kind: "undo_failed" }))
                          return
                        }
                        s.undoRequestInFlight ||
                          i((t) =>
                            "sending_in_progress" !== t.kind || t.sendId !== e || t.undoRequestInFlight
                              ? t
                              : { ...t, undoRequested: !0, undoRequestInFlight: t.undoAvailable },
                          )
                      },
                      [a, r],
                    ),
                    d = "sending_in_progress" === n.kind ? n.clientSendId : null
                  ;(0, m.useEffect)(() => {
                    let e = o.current
                    if (
                      null == d ||
                      "sending_in_progress" !== e.kind ||
                      e.clientSendId !== d ||
                      e.undoAvailable ||
                      null != e.unsendExpiresAtMs
                    )
                      return
                    s(e.sendId, e.selectedSenderAccount.id)
                    let n = !1,
                      l = (t, n) => {
                        "sending_in_progress" === o.current.kind &&
                          o.current.clientSendId === d &&
                          (i({ kind: "idle" }),
                          s(null),
                          a("send_failed", {
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
                        let c = (function ({
                          sendId: e,
                          selectedSenderAccount: t,
                          recipient: n,
                          cc: i,
                          bcc: o,
                          subject: a,
                          body: r,
                          sourceId: s,
                          sourceType: l,
                          emailAction: c,
                        }) {
                          let d = e1(n),
                            u = e1(i),
                            p = e1(o)
                          return null != c && c.provider !== t.provider
                            ? {
                                status: "error",
                                error: "provider_mismatch",
                                errorMessage: `Selected ${t.provider} sender cannot reply to a ${c.provider} message.`,
                              }
                            : !(function ({ to: e, cc: t, bcc: n }) {
                                  return e0(e) || e0(t) || e0(n)
                                })({ to: n, cc: i, bcc: o })
                              ? e2({ to: d, cc: u, bcc: p })
                                ? {
                                    status: "success",
                                    request: {
                                      send_id: e,
                                      link_id: t.id,
                                      to: d,
                                      cc: u,
                                      bcc: p,
                                      subject: a,
                                      body: r,
                                      ...(null == s ? {} : { source_id: s }),
                                      ...(null == l ? {} : { source_type: l }),
                                      ...(null == c
                                        ? {}
                                        : { email_action: c.type, reference_message_id: c.referenceMessageId }),
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
                        if ("error" === c.status) return void l(c.error, c.errorMessage)
                        let u = t.current,
                          p = u.monotonicNow ?? (() => ("u" < typeof performance ? Date.now() : performance.now())),
                          m = p(),
                          g = await u.transport.sendEmail(c.request)
                        if (n) return
                        if ("error" === g.status) return void l("send_request_error", g.errorMessage)
                        let f = (t.current.now ?? Date.now)(),
                          h = g.data.sendId,
                          b = Date.parse(g.data.unsendExpiresAt)
                        ;(a("send_response_received", {
                          send_id: h,
                          send_request_elapsed_ms: String(Math.round(p() - m)),
                          unsend_expires_at: g.data.unsendExpiresAt,
                          unsend_expires_at_ms: String(Math.round(b)),
                          undo_remaining_ms: String(Math.round(b - f)),
                          client_now_ms: String(f),
                        }),
                          h !== e.clientSendId &&
                            a("send_id_mismatch", {
                              send_id: e.sendId,
                              reason_code: "send_id_mismatch_client_vs_server",
                              client_send_id: e.clientSendId,
                              server_send_id: h,
                            }))
                        let y = !Number.isFinite(b) || b <= f
                        y &&
                          "sending_in_progress" === o.current.kind &&
                          o.current.clientSendId === d &&
                          o.current.undoRequested &&
                          r({ kind: "undo_failed" })
                        let w = o.current
                        "sending_in_progress" === w.kind &&
                          w.clientSendId === d &&
                          (y
                            ? i({ kind: "polling_final", sendId: h, pollSource: "active_send" })
                            : (i({
                                ...w,
                                sendId: h,
                                undoAvailable: !0,
                                undoRequestInFlight: w.undoRequested || w.undoRequestInFlight,
                                unsendExpiresAtMs: b,
                              }),
                              s(h, e.selectedSenderAccount.id)))
                      })(),
                      () => {
                        n = !0
                      }
                    )
                  }, [d, a, r, s])
                  let u =
                    "sending_in_progress" === n.kind && n.undoRequested && n.undoAvailable && n.undoRequestInFlight
                      ? n.sendId
                      : null
                  ;(0, m.useEffect)(() => {
                    if (null == u) return
                    let e = !1
                    return (
                      (async () => {
                        let n = await t.current.transport.unsendEmail({ send_id: u })
                        e ||
                          "sending_in_progress" !== o.current.kind ||
                          o.current.sendId !== u ||
                          ("success" === n.status
                            ? (a("undo_success", { send_id: u }), i({ kind: "success_unsent" }), s(null))
                            : (a("undo_failed", {
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
                  }, [a, r, s, u])
                  let p =
                      "sending_in_progress" === n.kind &&
                      n.undoAvailable &&
                      !n.undoRequestInFlight &&
                      null != n.unsendExpiresAtMs
                        ? n.sendId
                        : null,
                    g =
                      "sending_in_progress" === n.kind && n.undoAvailable && !n.undoRequestInFlight
                        ? n.unsendExpiresAtMs
                        : null
                  ;(0, m.useEffect)(() => {
                    if (null != p && null != g) {
                      var e, n
                      let o
                      return (
                        (e = g),
                        (n = t.current.now ?? Date.now),
                        (o = setTimeout(
                          () => {
                            i((e) =>
                              "sending_in_progress" !== e.kind || e.sendId !== p || e.undoRequestInFlight
                                ? e
                                : { kind: "polling_final", sendId: p, pollSource: "active_send" },
                            )
                          },
                          Math.max(e - n(), 0),
                        )),
                        () => clearTimeout(o)
                      )
                    }
                  }, [p, g])
                  let f = "polling_final" === n.kind ? n.sendId : null,
                    h = "polling_final" === n.kind ? n.pollSource : null
                  return ((0, m.useEffect)(() => {
                    if (null == f) return
                    let e = t.current.pollingTiming ?? th,
                      n = !1
                    return (
                      (async () => {
                        let l = await (async () => {
                          for (let i = 0; i < e.pollMaxAttempts; i++) {
                            if (n) return { outcome: "cancelled" }
                            let o = await t.current.transport.getEmailStatus({ send_id: f })
                            if (
                              (a("poll_attempt", {
                                send_id: f,
                                attempt_number: String(i + 1),
                                poll_source: h ?? "null",
                                request_status: o.requestStatus,
                                ...("success" === o.requestStatus ? { email_status: o.emailStatus } : {}),
                                ...(null == o.errorMessage ? {} : { error_message: o.errorMessage }),
                              }),
                              "success" === o.requestStatus)
                            ) {
                              if ("sent" === o.emailStatus)
                                return {
                                  outcome: "send_success",
                                  ...(null == o.sentEmail ? {} : { sentEmail: o.sentEmail }),
                                }
                              if ("send_failed" === o.emailStatus)
                                return {
                                  outcome: "send_failed",
                                  reasonCode: "poll_status_send_failed",
                                  errorMessage: o.errorMessage,
                                }
                              if ("unsent" === o.emailStatus) return { outcome: "undo_success" }
                            }
                            await (function (e) {
                              return new Promise((t) => setTimeout(t, e))
                            })(e.pollIntervalMs)
                          }
                          return { outcome: "send_failed", reasonCode: "poll_exhausted" }
                        })()
                        "cancelled" !== l.outcome &&
                          "polling_final" === o.current.kind &&
                          o.current.sendId === f &&
                          ("send_success" === l.outcome
                            ? (a("send_success", { send_id: f }),
                              i({ kind: "idle" }),
                              s(null),
                              t.current.markEmailVersionSent?.(l.sentEmail))
                            : "send_failed" === l.outcome
                              ? (a("send_failed", {
                                  send_id: f,
                                  reason_code: l.reasonCode,
                                  ...(null == l.errorMessage ? {} : { error_message: l.errorMessage }),
                                }),
                                i({ kind: "idle" }),
                                s(null),
                                r({
                                  kind: "send_failed",
                                  ...(null == l.errorMessage ? {} : { errorMessage: l.errorMessage }),
                                }))
                              : (a("undo_success", { send_id: f }), i({ kind: "success_unsent" }), s(null)))
                      })(),
                      () => {
                        n = !0
                      }
                    )
                  }, [a, h, r, s, f]),
                  e.isAvailable)
                    ? { sendEmail: l, undoEmailSend: c, state: e.emailVersionSent ? { kind: "success_sent" } : n }
                    : { sendEmail: () => void 0, undoEmailSend: () => void 0, state: { kind: "idle" } }
                })({
                  isAvailable: i && (null != S || null != x),
                  selectedSenderAccount: S,
                  recipient: s,
                  cc: n,
                  bcc: e,
                  subject: l,
                  body: i ? to(t) : "",
                  emailVersionSent: _,
                  initialSendId: x,
                  transport: {
                    async sendEmail(e) {
                      try {
                        let t = await h.Request.safePost("/aip/connectors/email/send_email", {
                          surface: "writing_blocks",
                          requestBody: e,
                        })
                        return { status: "success", data: { sendId: t.send_id, unsendExpiresAt: t.unsend_expires_at } }
                      } catch (e) {
                        return { status: "error", errorMessage: ta(e) }
                      }
                    },
                    async unsendEmail(e) {
                      try {
                        return (
                          await h.Request.safePost("/aip/connectors/email/unsend_email", {
                            surface: "writing_blocks",
                            requestBody: e,
                          }),
                          { status: "success" }
                        )
                      } catch (e) {
                        return { status: "error", errorMessage: ta(e) }
                      }
                    },
                    async getEmailStatus(e) {
                      try {
                        let t = await h.Request.safePost("/aip/connectors/email/send_email_status", {
                          surface: "writing_blocks",
                          requestBody: e,
                        })
                        return {
                          requestStatus: "success",
                          emailStatus: t.status,
                          errorMessage: t.error_message ?? void 0,
                        }
                      } catch (e) {
                        return { requestStatus: "error", errorMessage: ta(e) }
                      }
                    },
                  },
                  sourceId: c,
                  sourceType: null == c ? void 0 : "email_writing_block",
                  emailAction: k,
                  markEmailVersionSent: () => {
                    C({ isSent: !0, [eY]: null })
                  },
                  onSendIdChange: (e, t) => {
                    C({ [eY]: e, ...(null == t ? {} : { [eJ]: t }) })
                  },
                  onFailure: L,
                  getVisibilityState: () => document.visibilityState,
                })
              return {
                emailAccounts: w,
                emailSendState: T,
                getContactsForQuery: M,
                isLoadingSenderAccounts: y,
                searchContacts: B,
                selectedSenderAccount: S,
                selectSenderAccount: A,
                sendEmail: E,
                undoEmailSend: N,
              }
            })(t),
            H = y?.writingBlockMetadata
          f[10] !== H ? ((n = e4(H)), (f[10] = H), (f[11] = n)) : (n = f[11])
          let K = n
          if (f[12] !== K || f[13] !== P || f[14] !== S) {
            var $
            ;((a = S && (K || e3(($ = P)) || "success_sent" === $.kind)),
              (f[12] = K),
              (f[13] = P),
              (f[14] = S),
              (f[15] = a))
          } else a = f[15]
          let Z = a,
            Q = w && !Z,
            Y = y?.writingBlockMetadata
          f[16] !== Y ? ((r = (0, eQ.r6)(Y)), (f[16] = Y), (f[17] = r)) : (r = f[17])
          let J = r
          f[18] !== x || f[19] !== J
            ? ((s = (e, t, n, i) => {
                i &&
                  x?.({
                    contacts: (0, eQ.py)({
                      recipient: "recipient" === e ? n : (J.recipient ?? []),
                      cc: "cc" === e ? n : (J.cc ?? []),
                      bcc: "bcc" === e ? n : (J.bcc ?? []),
                    }),
                  })
              }),
              (f[18] = x),
              (f[19] = J),
              (f[20] = s))
            : (s = f[20])
          let X = s
          f[21] !== b ||
          f[22] !== K ||
          f[23] !== y?.bcc ||
          f[24] !== y?.cc ||
          f[25] !== y?.recipient ||
          f[26] !== y?.subject ||
          f[27] !== _
            ? ((l = (e) => {
                ;(K || _(e),
                  (0, ez.E0)({
                    href: (0, eQ.vy)({
                      bcc: y?.bcc ?? "",
                      body: to(b),
                      cc: y?.cc ?? "",
                      includeCcAndBcc: !0,
                      provider: e,
                      recipient: y?.recipient ?? "",
                      subject: y?.subject ?? "",
                    }),
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                  }))
              }),
              (f[21] = b),
              (f[22] = K),
              (f[23] = y?.bcc),
              (f[24] = y?.cc),
              (f[25] = y?.recipient),
              (f[26] = y?.subject),
              (f[27] = _),
              (f[28] = l))
            : (l = f[28])
          let ee = l
          f[29] !== y?.writingBlockMetadata || f[30] !== U?.provider
            ? ((c = () => {
                let e = U?.provider ?? e5(y?.writingBlockMetadata)?.provider ?? "gmail"
                ;(0, ez.E0)({
                  href: (0, e6.Cj)(
                    { id: "outlook" === e ? t_ : tx, installUrl: null, name: "outlook" === e ? "Outlook" : "Gmail" },
                    { connectorId: "outlook" === e ? t_ : tx, oauthReferrer: "writing_email" },
                  ),
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                })
              }),
              (f[29] = y?.writingBlockMetadata),
              (f[30] = U?.provider),
              (f[31] = c))
            : (c = f[31])
          let et = c
          return (
            f[32] !== K ||
            f[33] !== y?.bcc ||
            f[34] !== y?.cc ||
            f[35] !== y?.recipient ||
            f[36] !== P ||
            f[37] !== et ||
            f[38] !== ee ||
            f[39] !== S ||
            f[40] !== G ||
            f[41] !== w ||
            f[42] !== U ||
            f[43] !== V ||
            f[44] !== z
              ? ((d = S
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(tn, { disabled: !w, onOpen: ee }),
                        (0, i.jsx)(tu, {
                          bcc: y?.bcc ?? "",
                          cc: y?.cc ?? "",
                          emailSendState: P,
                          isPersistedSent: K,
                          isLoadingSenderAccounts: G,
                          onConnect: et,
                          onSend: V,
                          onUndoSend: z,
                          recipient: y?.recipient ?? "",
                          selectedSenderAccount: U,
                        }),
                      ],
                    })
                  : null),
                (f[32] = K),
                (f[33] = y?.bcc),
                (f[34] = y?.cc),
                (f[35] = y?.recipient),
                (f[36] = P),
                (f[37] = et),
                (f[38] = ee),
                (f[39] = S),
                (f[40] = G),
                (f[41] = w),
                (f[42] = U),
                (f[43] = V),
                (f[44] = z),
                (f[45] = d))
              : (d = f[45]),
            f[46] !== N ||
            f[47] !== O ||
            f[48] !== X ||
            f[49] !== Q ||
            f[50] !== S ||
            f[51] !== J ||
            f[52] !== q ||
            f[53] !== W ||
            f[54] !== U
              ? ((u = S
                  ? {
                      contacts: J,
                      getContactsForQuery: O,
                      onRecipientMetadataChange: X,
                      onSearch: q,
                      renderSender: (e) => {
                        let { displayMode: t, isCollapsed: n, onOpenChange: o } = e
                        return null != U && null != N && (N.length > 1 || !n)
                          ? (0, i.jsx)(tg, {
                              accounts: N,
                              displayMode: t,
                              isDisabled: !Q,
                              onChange: W,
                              onOpenChange: o,
                              selectedAccount: U,
                            })
                          : null
                      },
                    }
                  : void 0),
                (f[46] = N),
                (f[47] = O),
                (f[48] = X),
                (f[49] = Q),
                (f[50] = S),
                (f[51] = J),
                (f[52] = q),
                (f[53] = W),
                (f[54] = U),
                (f[55] = u))
              : (u = f[55]),
            f[56] !== Z || f[57] !== d || f[58] !== u
              ? ((g = { actions: d, emailRowsCapabilities: u, isLocked: Z }),
                (f[56] = Z),
                (f[57] = d),
                (f[58] = u),
                (f[59] = g))
              : (g = f[59]),
            g
          )
        })(N),
        te = "slides" === e_ && (eV || ee?.writingBlockMetadata?.artifact_generation_completed === !0),
        tt = e9 && !e8.isLocked && !te && !ea?.isSaving,
        tr = ee?.writingBlockMetadata
      Q[23] !== tr ? ((P = (0, c.o)(tr)), (Q[23] = tr), (Q[24] = P)) : (P = Q[24])
      let ts = P.length,
        tl = ee?.writingBlockMetadata
      Q[25] !== tl ? ((O = (0, d._F)(tl)), (Q[25] = tl), (Q[26] = O)) : (O = Q[26])
      let tc = O
      ;(Q[27] !== e8.isLocked ||
      Q[28] !== ts ||
      Q[29] !== tc ||
      Q[30] !== eI ||
      Q[31] !== er ||
      Q[32] !== es ||
      Q[33] !== eM ||
      Q[34] !== et ||
      Q[35] !== ey ||
      Q[36] !== e_ ||
      Q[37] !== ev
        ? ((G = () => {
            if (
              eU.current ||
              eI ||
              0 === ts ||
              er ||
              null == es ||
              null == et ||
              "conversation_unavailable" === ey ||
              "message_not_found" === ey
            )
              return
            eU.current = !0
            let e = null == ey && !tc && !e8.isLocked,
              t = e8.isLocked
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
                  })(ey)
            ;(0, S.yy)(eM, r.zQG, {
              conversationId: et,
              followupCount: (0, a.At)(ts),
              messageId: es,
              notShownReason: e ? void 0 : t,
              outcome: e
                ? "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_SHOWN"
                : "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_NOT_SHOWN",
              variant: e_,
              writingBlockId: ev,
            })
          }),
          (q = [e8.isLocked, ts, tc, eI, er, es, eM, et, ey, e_, ev]),
          (Q[27] = e8.isLocked),
          (Q[28] = ts),
          (Q[29] = tc),
          (Q[30] = eI),
          (Q[31] = er),
          (Q[32] = es),
          (Q[33] = eM),
          (Q[34] = et),
          (Q[35] = ey),
          (Q[36] = e_),
          (Q[37] = ev),
          (Q[38] = G),
          (Q[39] = q))
        : ((G = Q[38]), (q = Q[39])),
        (0, m.useEffect)(G, q))
      let td = en ?? null != et
      ;(Q[40] !== es || Q[41] !== eM || Q[42] !== et || Q[43] !== e_ || Q[44] !== ev
        ? ((U = (e) => {
            let { checked: t } = e
            null != et &&
              null != es &&
              (0, S.yy)(eM, r.OMo, {
                checked: String(t),
                messageId: es,
                metricValue: (0, a.At)(+!!t),
                threadId: et,
                variant: e_,
                writingBlockId: ev,
              })
          }),
          (Q[40] = es),
          (Q[41] = eM),
          (Q[42] = et),
          (Q[43] = e_),
          (Q[44] = ev),
          (Q[45] = U))
        : (U = Q[45]),
        Q[46] !== ee || Q[47] !== eu || Q[48] !== e7 || Q[49] !== e_
          ? ((W = (e, t, n) => {
              if (null == eu) return !1
              let i = "email" === e_ && ee?.subject != null ? { type: "email", subject: ee.subject } : void 0,
                o = (0, d.zl)(ee?.writingBlockMetadata, e, t)
              if (null == o && null != n) {
                let a = (0, d.I$)(ee?.writingBlockMetadata),
                  r = n.primaryOption ? [{ ...n.primaryOption, variant: i ?? n.primaryOption.variant }, ...a] : a
                if (e.index !== r.length || e.index < 1 || r.some((t) => t.id === e.id)) return !1
                o = { options: [...r, { id: e.id, label: e.id, content: t }] }
              }
              return (
                null != o && null != i && (o = (0, d.k$)(o, e, i.subject)),
                null != o && (eu({ ...o, [d.e4]: e.id, [d.uV]: !0 }), e7.selectToneSection(e.id), !0)
              )
            }),
            (Q[46] = ee),
            (Q[47] = eu),
            (Q[48] = e7),
            (Q[49] = e_),
            (Q[50] = W))
          : (W = Q[50]),
        Q[51] !== tt ||
        Q[52] !== es ||
        Q[53] !== et ||
        Q[54] !== ej ||
        Q[55] !== e7.editorView ||
        Q[56] !== e7.generatePluginState ||
        Q[57] !== td ||
        Q[58] !== U ||
        Q[59] !== W ||
        Q[60] !== e_ ||
        Q[61] !== ev ||
        Q[62] !== ek
          ? ((V = {
              editorView: e7.editorView,
              enableAiTools: td,
              generatePluginState: e7.generatePluginState,
              isEditable: tt,
              messageId: es,
              onTaskCheckboxToggled: U,
              onWriteLikeMeResult: W,
              serverConversationId: et,
              showMagicEditAction: ej,
              variant: e_,
              writingBlockId: ev,
              writingBlockIndex: ek,
            }),
            (Q[51] = tt),
            (Q[52] = es),
            (Q[53] = et),
            (Q[54] = ej),
            (Q[55] = e7.editorView),
            (Q[56] = e7.generatePluginState),
            (Q[57] = td),
            (Q[58] = U),
            (Q[59] = W),
            (Q[60] = e_),
            (Q[61] = ev),
            (Q[62] = ek),
            (Q[63] = V))
          : (V = Q[63]))
      let {
          cancelPendingAiRequests: tp,
          createEditor: tm,
          editorOverlays: tf,
          editorRootRef: tk,
          hasPendingAiEdits: tS,
          headerMagicEditAction: tI,
          isGenerateInputOpen: tC,
          isHeaderComposerOpen: tA,
          isHeaderInteractionDisabled: tM,
          isHistoryInteractionDisabled: tB,
          isEditorInteractionDisabled: tE,
          isWriteLikeMeSubmitting: tN,
          magicEdit: tD,
          onEditSelection: tG,
          onEditorKeyDownCapture: tF,
          onEditorPointerDownCapture: tq,
          onWriteLikeMeAction: tU,
          previewEngine: tW,
          resetAiTools: tV,
          resetGeneratePrompt: tz,
          submitHeaderMagicEdit: tH,
        } = (0, B.J)(V),
        tK = tM || eK,
        t$ = tB || eK,
        tZ = tE || eK,
        tQ = tD.isLoading && "toolbar" === tD.magicEditSubmissionSource
      Q[64] !== ed || Q[65] !== tW
        ? ((z = (e) => {
            let t = ed?.(e, () => {
              e.isDestroyed || tW.unpinMagicEditSelection(e)
            })
            null != t && ((eW.current = t), tW.pinMagicEditSelection(e))
          }),
          (Q[64] = ed),
          (Q[65] = tW),
          (Q[66] = z))
        : (z = Q[66])
      let tY = (0, j.K)(z),
        tJ = tI
      if ("slides" === e_ && null != Y) {
        let e, t
        ;(Q[67] !== eT ||
        Q[68] !== tt ||
        Q[69] !== tA ||
        Q[70] !== t$ ||
        Q[71] !== tV ||
        Q[72] !== eM ||
        Q[73] !== e7.displayedContent ||
        Q[74] !== tH ||
        Q[75] !== ev
          ? ((e = tA
              ? null
              : (0, i.jsx)(eq, {
                  disabled: !tt || t$ || 0 === e7.displayedContent.trim().length,
                  onCancel: tV,
                  onSubmittingChange: eZ,
                  onSlideCountChange: (e) => (
                    null != eT &&
                      null != ev &&
                      (0, S.yy)(eM, s.Lq, {
                        conversationId: eT,
                        writingBlockId: ev,
                        previousSlideCount: (0, a.At)(eN(e7.displayedContent)),
                        requestedSlideCount: (0, a.At)(e),
                      }),
                    tH(
                      `Revise this presentation outline to exactly ${e} slides total. Preserve the user's manual edits, presentation title, topic, key facts, caveats, and logical flow. Number slides consecutively using "## Slide N: <title>" headings, with 2–3 concise dash bullets per content slide and relevant links to sources, images, or charts. Preserve existing URLs and keep each link with the slide it supports. For a multi-slide outline, include a title slide unless the user explicitly requested otherwise: "## Slide 1 (Title): <presentation title>" with only an optional subtitle, counted toward the total. For a one-slide outline, omit the title slide. Combine closely related ideas when reducing slides; split complex ideas or add meaningful sections when expanding. Do not add filler or invent facts, sources, or URLs. Return only the revised outline body; do not add a writing-block wrapper or generate files.`,
                      { applyImmediately: !0 },
                    ).catch(tR)
                  ),
                  slideCount: eN(e7.displayedContent),
                })),
            (Q[67] = eT),
            (Q[68] = tt),
            (Q[69] = tA),
            (Q[70] = t$),
            (Q[71] = tV),
            (Q[72] = eM),
            (Q[73] = e7.displayedContent),
            (Q[74] = tH),
            (Q[75] = ev),
            (Q[76] = e))
          : (e = Q[76]),
          Q[77] !== e
            ? ((t = (0, i.jsx)("div", {
                ref: eL,
                className: "flex min-h-9 min-w-0 grow items-center gap-3 px-2",
                children: e,
              })),
              (Q[77] = e),
              (Q[78] = t))
            : (t = Q[78]),
          (tJ = t))
      } else if (!eI && "email" !== e_ && !tc && (eG || ea?.saveToPage)) {
        let e,
          t,
          n,
          o,
          a,
          r,
          s = !e9 || tK || t$
        Q[79] !== tK ||
        Q[80] !== e9 ||
        Q[81] !== es ||
        Q[82] !== ec ||
        Q[83] !== et ||
        Q[84] !== e7.displayedContent ||
        Q[85] !== ew ||
        Q[86] !== e_ ||
        Q[87] !== ek
          ? ((e =
              "document" === e_
                ? (0, i.jsx)(e$, {
                    content: e7.displayedContent,
                    isDisabled: !e9 || tK,
                    messageId: es,
                    onBeforeExport: ec,
                    renderAsSubmenu: !0,
                    serverConversationId: et,
                    title: ew,
                    writingBlockIndex: ek,
                  })
                : void 0),
            (Q[79] = tK),
            (Q[80] = e9),
            (Q[81] = es),
            (Q[82] = ec),
            (Q[83] = et),
            (Q[84] = e7.displayedContent),
            (Q[85] = ew),
            (Q[86] = e_),
            (Q[87] = ek),
            (Q[88] = e))
          : (e = Q[88])
        let l = "document" === e_ ? ep : void 0,
          c = ea?.libraryFileId,
          d = ea?.isSaving,
          p = ea?.saveConfirmation,
          m = ea?.saveToPage
        ;(Q[89] !== eF || Q[90] !== ec
          ? ((t = eF
              ? () => {
                  ec?.().catch(tO)
                }
              : void 0),
            (Q[89] = eF),
            (Q[90] = ec),
            (Q[91] = t))
          : (t = Q[91]),
          Q[92] !== eF || Q[93] !== ea || Q[94] !== e7.displayedContent || Q[95] !== e7.editorView
            ? ((n =
                (eF || ea?.saveToPage) && "" !== e7.displayedContent.trim() && ea?.onSave != null
                  ? (e) => {
                      let t = e7.editorView
                      ea.onSave?.(
                        null == t || t.isDestroyed ? e7.displayedContent : (0, u.o)().serialize(t.state.doc),
                        e,
                      )
                    }
                  : void 0),
              (Q[92] = eF),
              (Q[93] = ea),
              (Q[94] = e7.displayedContent),
              (Q[95] = e7.editorView),
              (Q[96] = n))
            : (n = Q[96]))
        let f = ea?.libraryFileId || s || ea?.isSaving ? void 0 : "text-tertiary"
        ;(Q[97] !== ea?.saveToPage || Q[98] !== ew
          ? ((o =
              ew ||
              (ea?.saveToPage
                ? (0, i.jsx)(g.A, {
                    id: "codex.writingBlock.header.title.untitled",
                    defaultMessage: "Untitled",
                    description:
                      "Short placeholder title in the writing block header when no title was provided and Pages upgrade is enabled, including while the writing is still streaming.",
                  })
                : (0, i.jsx)(g.A, {
                    id: "codex.writingBlock.header.title.fallback",
                    defaultMessage: "Writing",
                    description:
                      "Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.",
                  }))),
            (Q[97] = ea?.saveToPage),
            (Q[98] = ew),
            (Q[99] = o))
          : (o = Q[99]),
          Q[100] !== f || Q[101] !== o
            ? ((a = (0, i.jsx)("span", { className: f, children: o })), (Q[100] = f), (Q[101] = o), (Q[102] = a))
            : (a = Q[102]),
          Q[103] !== s ||
          Q[104] !== e7.editorView ||
          Q[105] !== e ||
          Q[106] !== l ||
          Q[107] !== c ||
          Q[108] !== d ||
          Q[109] !== p ||
          Q[110] !== m ||
          Q[111] !== t ||
          Q[112] !== n ||
          Q[113] !== a
            ? ((r = (0, i.jsx)(eb, {
                editorView: e7.editorView,
                disabled: s,
                downloadMenu: e,
                onOpenVersionHistory: l,
                libraryFileId: c,
                isSaving: d,
                saveConfirmation: p,
                saveToPage: m,
                onLibraryClick: t,
                onSave: n,
                children: a,
              })),
              (Q[103] = s),
              (Q[104] = e7.editorView),
              (Q[105] = e),
              (Q[106] = l),
              (Q[107] = c),
              (Q[108] = d),
              (Q[109] = p),
              (Q[110] = m),
              (Q[111] = t),
              (Q[112] = n),
              (Q[113] = a),
              (Q[114] = r))
            : (r = Q[114]),
          (tJ = r))
      }
      if (
        Q[115] !== tp ||
        Q[116] !== Y ||
        Q[117] !== eC ||
        Q[118] !== tm ||
        Q[119] !== tf ||
        Q[120] !== tk ||
        Q[121] !== e8.actions ||
        Q[122] !== e8.emailRowsCapabilities ||
        Q[123] !== ee?.writingBlockMetadata ||
        Q[124] !== tY ||
        Q[125] !== tc ||
        Q[126] !== tS ||
        Q[127] !== tJ ||
        Q[128] !== eG ||
        Q[129] !== eV ||
        Q[130] !== tQ ||
        Q[131] !== tt ||
        Q[132] !== tZ ||
        Q[133] !== eI ||
        Q[134] !== tC ||
        Q[135] !== tA ||
        Q[136] !== tK ||
        Q[137] !== t$ ||
        Q[138] !== e9 ||
        Q[139] !== eK ||
        Q[140] !== te ||
        Q[141] !== eP ||
        Q[142] !== er ||
        Q[143] !== tN ||
        Q[144] !== eF ||
        Q[145] !== ea ||
        Q[146] !== tD ||
        Q[147] !== es ||
        Q[148] !== ed ||
        Q[149] !== ec ||
        Q[150] !== tG ||
        Q[151] !== tF ||
        Q[152] !== tq ||
        Q[153] !== ep ||
        Q[154] !== tU ||
        Q[155] !== tW ||
        Q[156] !== eg ||
        Q[157] !== eX ||
        Q[158] !== tV ||
        Q[159] !== tz ||
        Q[160] !== eM ||
        Q[161] !== et ||
        Q[162] !== e7 ||
        Q[163] !== eh ||
        Q[164] !== ew ||
        Q[165] !== e_ ||
        Q[166] !== ev ||
        Q[167] !== ek
      ) {
        let e, t, n, o, a, s, c, d, p, m, f, x
        if (eI && (eF || ea?.saveToPage) && !ea?.libraryFileId && ea?.onSave != null) {
          let t, n, o, a
          if (ea.saveToPage) {
            let e
            ;(Q[169] !== ea.isSaving
              ? ((e = ea.isSaving
                  ? (0, i.jsx)(g.A, {
                      id: "codex.writingBlock.page.saving",
                      defaultMessage: "Creating Page",
                      description:
                        "Accessible label on the writing block save control while its editable Page is being created. Keep this progress label short.",
                    })
                  : (0, i.jsx)(g.A, {
                      id: "codex.writingBlock.page.save",
                      defaultMessage: "Save as Page",
                      description:
                        "Label, accessible label, and tooltip for a writing block's save control. Saves the writing as an editable Page that can be found in Space. Page means a saved document, not a sheet of paper. Keep this action short.",
                    })),
                (Q[169] = ea.isSaving),
                (Q[170] = e))
              : (e = Q[170]),
              (t = e))
          } else if (ea.isSaving && eP) {
            let e
            ;(Q[171] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.viewer.savingToLibrary.space",
                  defaultMessage: "Adding to Space",
                  description:
                    "Label on the expanded writing block's save button while its Space save is in progress. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                })),
                (Q[171] = e))
              : (e = Q[171]),
              (t = e))
          } else if (ea.isSaving) {
            let e
            ;(Q[172] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.viewer.savingToLibrary",
                  defaultMessage: "Adding to Library",
                  description:
                    "Label on the expanded writing block's save button while its Library save is in progress.",
                })),
                (Q[172] = e))
              : (e = Q[172]),
              (t = e))
          } else if (eP) {
            let e
            ;(Q[173] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.viewer.saveToLibrary.space",
                  defaultMessage: "Add to Space",
                  description:
                    "Button in the expanded writing block header that saves the writing block to Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                })),
                (Q[173] = e))
              : (e = Q[173]),
              (t = e))
          } else {
            let e
            ;(Q[174] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.viewer.saveToLibrary",
                  defaultMessage: "Add to Library",
                  description: "Button in the expanded writing block header that saves the writing block to Library.",
                })),
                (Q[174] = e))
              : (e = Q[174]),
              (t = e))
          }
          ;(Q[175] !== tt || Q[176] !== tK || Q[177] !== e7.displayedContent
            ? ((n = !tt || tK || "" === e7.displayedContent.trim()),
              (Q[175] = tt),
              (Q[176] = tK),
              (Q[177] = e7.displayedContent),
              (Q[178] = n))
            : (n = Q[178]),
            Q[179] !== ea || Q[180] !== e7.displayedContent || Q[181] !== e7.editorView
              ? ((o = (e) => {
                  let t = e7.editorView
                  ea.onSave?.(
                    null == t || t.isDestroyed ? e7.displayedContent : (0, u.o)().serialize(t.state.doc),
                    0 === e.detail,
                  )
                }),
                (Q[179] = ea),
                (Q[180] = e7.displayedContent),
                (Q[181] = e7.editorView),
                (Q[182] = o))
              : (o = Q[182]),
            Q[183] !== ea.isSaving
              ? ((a = ea.isSaving ? null : (0, i.jsx)(w.I, { asset: l.f })), (Q[183] = ea.isSaving), (Q[184] = a))
              : (a = Q[184]),
            (e = (0, i.jsxs)(A.DW, {
              "aria-busy": ea.isSaving || void 0,
              loading: ea.isSaving,
              disabled: n,
              onClick: o,
              children: [a, t],
            })))
        }
        ;(Q[185] !== eI ||
        Q[186] !== tK ||
        Q[187] !== e9 ||
        Q[188] !== es ||
        Q[189] !== ec ||
        Q[190] !== et ||
        Q[191] !== e7.displayedContent ||
        Q[192] !== ew ||
        Q[193] !== e_ ||
        Q[194] !== ek
          ? ((t =
              eI && "document" === e_
                ? (0, i.jsx)(e$, {
                    appearance: "viewer",
                    content: e7.displayedContent,
                    isDisabled: !e9 || tK,
                    messageId: es,
                    onBeforeExport: ec,
                    serverConversationId: et,
                    title: ew,
                    writingBlockIndex: ek,
                  })
                : null),
            (Q[185] = eI),
            (Q[186] = tK),
            (Q[187] = e9),
            (Q[188] = es),
            (Q[189] = ec),
            (Q[190] = et),
            (Q[191] = e7.displayedContent),
            (Q[192] = ew),
            (Q[193] = e_),
            (Q[194] = ek),
            (Q[195] = t))
          : (t = Q[195]),
          Q[196] !== eI || Q[197] !== t$ || Q[198] !== e9 || Q[199] !== ep || Q[200] !== e_
            ? ((n =
                eI && "document" === e_ && null != ep ? (0, i.jsx)(b.h, { disabled: !e9 || t$, onSelect: ep }) : null),
              (Q[196] = eI),
              (Q[197] = t$),
              (Q[198] = e9),
              (Q[199] = ep),
              (Q[200] = e_),
              (Q[201] = n))
            : (n = Q[201]),
          Q[202] !== tc ||
          Q[203] !== eG ||
          Q[204] !== eI ||
          Q[205] !== tK ||
          Q[206] !== e9 ||
          Q[207] !== eF ||
          Q[208] !== ea?.libraryFileId ||
          Q[209] !== es ||
          Q[210] !== ec ||
          Q[211] !== et ||
          Q[212] !== e7.displayedContent ||
          Q[213] !== ew ||
          Q[214] !== e_ ||
          Q[215] !== ek
            ? ((o =
                "document" !== e_ || eI || ea?.libraryFileId == null || (eG && eF && !tc)
                  ? null
                  : (0, i.jsx)(e$, {
                      content: e7.displayedContent,
                      isDisabled: !e9 || tK,
                      messageId: es,
                      onBeforeExport: ec,
                      serverConversationId: et,
                      title: ew,
                      writingBlockIndex: ek,
                    })),
              (Q[202] = tc),
              (Q[203] = eG),
              (Q[204] = eI),
              (Q[205] = tK),
              (Q[206] = e9),
              (Q[207] = eF),
              (Q[208] = ea?.libraryFileId),
              (Q[209] = es),
              (Q[210] = ec),
              (Q[211] = et),
              (Q[212] = e7.displayedContent),
              (Q[213] = ew),
              (Q[214] = e_),
              (Q[215] = ek),
              (Q[216] = o))
            : (o = Q[216]),
          Q[217] !== Y ||
          Q[218] !== t$ ||
          Q[219] !== e9 ||
          Q[220] !== te ||
          Q[221] !== et ||
          Q[222] !== e7.displayedContent ||
          Q[223] !== e_ ||
          Q[224] !== ev
            ? ((a =
                "slides" === e_ && null != Y && null != ev
                  ? (0, i.jsx)(eE, {
                      analyticsConversationId: et ?? Y,
                      content: e7.displayedContent,
                      conversationId: Y,
                      disabled: !e9 || te || t$,
                      onSubmittingChange: eH,
                      writingBlockId: ev,
                    })
                  : null),
              (Q[217] = Y),
              (Q[218] = t$),
              (Q[219] = e9),
              (Q[220] = te),
              (Q[221] = et),
              (Q[222] = e7.displayedContent),
              (Q[223] = e_),
              (Q[224] = ev),
              (Q[225] = a))
            : (a = Q[225]),
          Q[226] !== e8.actions || Q[227] !== o || Q[228] !== a
            ? ((s = (0, i.jsxs)(i.Fragment, { children: [o, e8.actions, a] })),
              (Q[226] = e8.actions),
              (Q[227] = o),
              (Q[228] = a),
              (Q[229] = s))
            : (s = Q[229]),
          Q[230] !== tD
            ? ((c = () => {
                "toolbar" === tD.magicEditSubmissionSource && tD.cancelMagicEdit()
              }),
              (Q[230] = tD),
              (Q[231] = c))
            : (c = Q[231]),
          Q[232] !== tW || Q[233] !== e7.editorView
            ? ((d = (e) => {
                let t = e7.editorView
                null == t || t.isDestroyed || (e ? tW.pinMagicEditSelection(t) : tW.unpinMagicEditSelection(t))
              }),
              (Q[232] = tW),
              (Q[233] = e7.editorView),
              (Q[234] = d))
            : (d = Q[234]),
          Q[235] !== es || Q[236] !== eM || Q[237] !== et || Q[238] !== e_ || Q[239] !== ev || Q[240] !== ek
            ? ((p = (e) => {
                null != et &&
                  null != es &&
                  ((0, S.yy)(eM, r.DBq, {
                    conversationId: et,
                    messageId: es,
                    variant: e_,
                    writingBlockId: ev,
                    writingBlockIndex: null == ek ? void 0 : String(ek),
                  }),
                  h.Request.safePost("/conversation/implicit_message_feedback", {
                    requestBody: {
                      conversation_id: et,
                      message_id: es,
                      source: "mouse",
                      location: "writing-block",
                      feedback: { feedback_type: "copy", selected_text_length: e.length },
                    },
                  }).catch(tP))
              }),
              (Q[235] = es),
              (Q[236] = eM),
              (Q[237] = et),
              (Q[238] = e_),
              (Q[239] = ev),
              (Q[240] = ek),
              (Q[241] = p))
            : (p = Q[241]),
          Q[242] !== eC || Q[243] !== eM || Q[244] !== et || Q[245] !== eh
            ? ((m = () => {}), (Q[242] = eC), (Q[243] = eM), (Q[244] = et), (Q[245] = eh), (Q[246] = m))
            : (m = Q[246]),
          Q[247] !== tz
            ? ((f = (e) => {
                ;(0, M.r0)(e, tz)
              }),
              (Q[247] = tz),
              (Q[248] = f))
            : (f = Q[248]),
          Q[249] !== tV || Q[250] !== e7
            ? ((x = (e) => {
                e !== e7.activeToneSectionId && (tV(), e7.selectToneSection(e))
              }),
              (Q[249] = tV),
              (Q[250] = e7),
              (Q[251] = x))
            : (x = Q[251]),
          (H = eX({
            actionsPresentation: eI ? "viewer" : "inline",
            viewerDownloadControl: t,
            ...(tK ? { copyInteractionDisabled: !0 } : {}),
            viewerVersionHistoryMenuItem: n,
            actionsAfterCopy: s,
            createEditor: tm,
            editorOverlays: tf,
            editorRootRef: tk,
            editorInteractionDisabled: tZ,
            onBeforeExternalContentUpdate: tV,
            emailRowsCapabilities: e8.emailRowsCapabilities,
            hideFormatToolbar: tA || tC || (tZ && !tQ),
            hideSlashMenu: tC,
            headerLeadingContent: tJ,
            historyInteractionDisabled: t$ || te,
            isEditable: tt,
            isEditSelectionLoading: tQ,
            isHeaderComposerOpen: tA,
            isMagicEditSubmitting: tD.isLoading || eK,
            isWriteLikeMeSubmitting: tN,
            metadataInteractionDisabled: t$,
            onCancelEditSelection: c,
            onAskForChanges: null == ed ? void 0 : tY,
            onEditSelection: tG,
            onEditSelectionOpenChange: d,
            onCopy: p,
            onEditorEscape: !eI || er || tS ? void 0 : y.xJ,
            onCopyContentPrepared: m,
            onEditorKeyDownCapture: tF,
            onEditorPointerDownCapture: tq,
            onWriteLikeMeAction: tU,
            onSlashMenuExecute: f,
            onToneSectionSelect: x,
            renderFrame: null == eg ? void 0 : (t) => eg({ ...t, viewerTitleControl: e }, tS || eV, tp),
            writingBlockMetadata: ee?.writingBlockMetadata,
          })),
          (Q[115] = tp),
          (Q[116] = Y),
          (Q[117] = eC),
          (Q[118] = tm),
          (Q[119] = tf),
          (Q[120] = tk),
          (Q[121] = e8.actions),
          (Q[122] = e8.emailRowsCapabilities),
          (Q[123] = ee?.writingBlockMetadata),
          (Q[124] = tY),
          (Q[125] = tc),
          (Q[126] = tS),
          (Q[127] = tJ),
          (Q[128] = eG),
          (Q[129] = eV),
          (Q[130] = tQ),
          (Q[131] = tt),
          (Q[132] = tZ),
          (Q[133] = eI),
          (Q[134] = tC),
          (Q[135] = tA),
          (Q[136] = tK),
          (Q[137] = t$),
          (Q[138] = e9),
          (Q[139] = eK),
          (Q[140] = te),
          (Q[141] = eP),
          (Q[142] = er),
          (Q[143] = tN),
          (Q[144] = eF),
          (Q[145] = ea),
          (Q[146] = tD),
          (Q[147] = es),
          (Q[148] = ed),
          (Q[149] = ec),
          (Q[150] = tG),
          (Q[151] = tF),
          (Q[152] = tq),
          (Q[153] = ep),
          (Q[154] = tU),
          (Q[155] = tW),
          (Q[156] = eg),
          (Q[157] = eX),
          (Q[158] = tV),
          (Q[159] = tz),
          (Q[160] = eM),
          (Q[161] = et),
          (Q[162] = e7),
          (Q[163] = eh),
          (Q[164] = ew),
          (Q[165] = e_),
          (Q[166] = ev),
          (Q[167] = ek),
          (Q[168] = H))
      } else H = Q[168]
      let tX = H,
        t1 =
          (((eD?.hash === "" && null != et && null != es && (0, tT.Mi)({ threadId: et, messageId: es })) ||
            (eR.get("footer_experiment_enabled", !1) && tt && !tK && null == ey && (0 === ts || tc))) &&
            !eI &&
            0 === ek &&
            null != et,
          null)
      return (
        Q[252] !== ee?.writingBlockMetadata ||
        Q[253] !== tc ||
        Q[254] !== tt ||
        Q[255] !== eI ||
        Q[256] !== tK ||
        Q[257] !== es ||
        Q[258] !== em ||
        Q[259] !== eM ||
        Q[260] !== et ||
        Q[261] !== ey ||
        Q[262] !== e_ ||
        Q[263] !== ev ||
        Q[264] !== ek
          ? ((K =
              eI || tc || null == em || 0 !== ek
                ? null
                : (0, i.jsx)(tL, {
                    ineligibilityReason: ey,
                    isDisabled: !tt || tK,
                    metadata: ee?.writingBlockMetadata,
                    onFollowupClick: (e, t) => {
                      null != et &&
                        null != es &&
                        (0, S.yy)(eM, r.F6J, {
                          conversationId: et,
                          followupCount: (0, a.At)(t),
                          followupPosition: (0, a.At)(e),
                          messageId: es,
                          variant: e_,
                          writingBlockId: ev,
                        })
                    },
                    onSelect: em,
                  })),
            (Q[252] = ee?.writingBlockMetadata),
            (Q[253] = tc),
            (Q[254] = tt),
            (Q[255] = eI),
            (Q[256] = tK),
            (Q[257] = es),
            (Q[258] = em),
            (Q[259] = eM),
            (Q[260] = et),
            (Q[261] = ey),
            (Q[262] = e_),
            (Q[263] = ev),
            (Q[264] = ek),
            (Q[265] = K))
          : (K = Q[265]),
        Q[266] !== eI || Q[267] !== es || Q[268] !== et || Q[269] !== eA || Q[270] !== ev
          ? (($ =
              eI || null == et || null == es || null == ev
                ? null
                : (0, i.jsx)(tj, {
                    messageId: es,
                    serverConversationId: et,
                    userEditedWritingBlock: eA,
                    writingBlockId: ev,
                  })),
            (Q[266] = eI),
            (Q[267] = es),
            (Q[268] = et),
            (Q[269] = eA),
            (Q[270] = ev),
            (Q[271] = $))
          : ($ = Q[271]),
        Q[272] !== t1 || Q[273] !== K || Q[274] !== $ || Q[275] !== tX
          ? ((Z = (0, i.jsxs)(i.Fragment, { children: [tX, t1, K, $] })),
            (Q[272] = t1),
            (Q[273] = K),
            (Q[274] = $),
            (Q[275] = tX),
            (Q[276] = Z))
          : (Z = Q[276]),
        Z
      )
    }
    function tP() {}
    function tO() {}
    function tR() {
      return !1
    }
    ;(0, x._)(
      async () => (await Promise.all([n.e(967847), n.e(112878)]).then(n.bind(n, "btKb"))).WritingStyleUpsellFooter,
    )
  },
  vQRL(e, t, n) {
    var i = n("ASxG")
    let o = "writing-style-footer-checkout",
      a = "oai/apps/contextualUpsellId",
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
    function s(e) {
      let t
      return (
        c()?.stage === "returning" &&
        null != (t = c()) &&
        ["userId", "accountId", "threadId", "messageId"].every((n) => void 0 === e[n] || t[n] === e[n])
      )
    }
    function l(e) {
      try {
        let t = c()
        if (null == e || t?.id !== e) return
        ;(sessionStorage.removeItem(o), d(t.context))
      } catch {}
    }
    function c() {
      try {
        let e = r.safeParse(JSON.parse(sessionStorage.getItem(o) ?? "null")),
          t = e.success ? Date.now() - e.data.createdAt : 0 / 0
        return e.success && t >= 0 && t < 18e5 ? e.data : null
      } catch {
        return null
      }
    }
    function d(e) {
      if (
        (function (e) {
          try {
            return null != e && localStorage.getItem(a) === e
          } catch {
            return !1
          }
        })(e)
      )
        try {
          localStorage.removeItem(a)
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
            l(c()?.id ?? null)
            try {
              let i = localStorage.getItem(a)
              n({ upsellContextId: "work", sourceThreadId: e.threadId })
              let r = localStorage.getItem(a)
              if (null == r || r === i) return null
              let s = {
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
                    return (sessionStorage.setItem(o, JSON.stringify(e)), !0)
                  } catch {
                    return !1
                  }
                })(s)
              )
                return s.id
              return (d(r), null)
            } catch {
              return null
            }
          },
          MF: l,
          Mi: s,
          aO: function (e) {
            return !!s(e) && (l(c()?.id ?? null), null == c())
          },
        },
      ))
  },
  RBRC(e, t, n) {
    let i = (0, n("iJY0").a)({
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
  ayBF(e, t, n) {
    let i = (0, n("iJY0").a)({
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
  rHbL(e, t, n) {
    let i = (0, n("iJY0").a)({
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
  SXl1(e, t, n) {
    let i = (0, n("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.334 1.60903C13.6792 1.15151 14.9695 2.42599 14.5293 3.777L11.3359 13.5709C10.8565 15.0413 8.83296 15.1871 8.14844 13.8004L6.13868 9.7272C6.13018 9.71491 6.12081 9.70358 6.10938 9.69399C6.10234 9.69068 6.09099 9.68607 6.07422 9.67935L2.38672 8.20083C0.901022 7.60505 0.957434 5.48241 2.47266 4.96645L12.334 1.60903ZM13.5137 3.2604L7.28614 9.67739L9.09082 13.3356C9.35878 13.8778 10.1502 13.8207 10.3379 13.2458L13.5313 3.45181C13.5593 3.36576 13.5665 3.28053 13.5615 3.19888C13.5466 3.21978 13.5321 3.24137 13.5137 3.2604ZM12.6729 2.60317L2.81055 5.9606C2.21792 6.16248 2.1956 6.99279 2.77637 7.22622L6.46582 8.70571C6.51425 8.72514 6.58896 8.75602 6.66895 8.80532L12.6953 2.59731C12.688 2.59955 12.6802 2.60068 12.6729 2.60317Z" fill="currentColor"/>',
    })
    n.d(t, {}, { S: i })
  },
  IfMb(e, t, n) {
    let i = (0, n("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.98755 1.47461C11.591 1.47481 14.5129 4.39646 14.5129 8C14.5129 11.6035 11.591 14.5252 7.98755 14.5254C4.38389 14.5254 1.46216 11.6037 1.46216 8C1.46216 7.79582 1.47213 7.59392 1.49048 7.39453C1.49931 6.9963 1.56606 6.56899 1.72681 6.07422C1.79123 5.87597 1.8673 5.69431 1.94849 5.52539C2.78111 3.4959 4.60634 1.97986 6.82056 1.58008C7.12572 1.51289 7.4631 1.47463 7.85278 1.47461C7.87041 1.47461 7.88806 1.47637 7.90552 1.47656C7.93271 1.47623 7.96028 1.47461 7.98755 1.47461ZM6.37817 11.3428L7.04712 13.3916C7.35268 13.4445 7.66686 13.4746 7.98755 13.4746C8.29779 13.4746 8.60155 13.4461 8.89771 13.3965L9.5686 11.3418L8.99048 10.5459H6.95825L6.37817 11.3428ZM2.55786 8.69629C2.64879 9.41262 2.87793 10.0852 3.21802 10.6875L5.52856 10.7236L6.1106 9.92383L5.37036 7.80957L4.26587 7.45117L2.55786 8.69629ZM10.6799 7.75098L9.93091 10.0547L10.4153 10.7217L12.7571 10.6846C13.0852 10.1027 13.3099 9.45564 13.4065 8.7666L11.6018 7.45117L10.6799 7.75098ZM5.60571 3.06836C4.97197 3.37492 4.40651 3.80053 3.93774 4.31543L4.59497 6.45312L5.69751 6.81055L7.45337 5.54004V4.40723L5.60571 3.06836ZM8.50415 4.23145V5.53516L10.2717 6.77832L11.2727 6.45312L11.9553 4.23145C11.4708 3.72138 10.8899 3.30447 10.2405 3.01074L8.50415 4.23145Z" fill="currentColor"/>',
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
//# sourceMappingURL=132733.05a7a825a3.js.map
